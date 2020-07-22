const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const requireLogin = require('../middlewares/requireLogin');
const AWS = require('aws-sdk');
const keys = require('../config/keys');
const {
  artistWelcomeParams,
} = require('../services/emails/artistWelcomeParams');

AWS.config.update({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  region: keys.awsRegion,
});

// AWS Simple Email Service
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

module.exports = (app) => {
  // Attempt to register for an artist
  app.get('/api/attempt/artist', (req, res) => {
    if (!req.user) {
      res.redirect('/signup');
    }
    res.redirect('/artists/register');
  });

  // Create an artist
  app.post('/api/artists', requireLogin, async (req, res) => {
    const {
      name,
      email,
      phone,
      intro,
      homepage,
      insta,
      etc,
      profileImg,
      productImgs,
      portfolioImgs,
      productCategory,
    } = req.body;

    const artist = new Artist({
      _user: req.user.id,
      name,
      email,
      phone,
      intro,
      SNS: [homepage, insta, etc],
      profileImg: profileImg,
      productImgs: productImgs.map((img) => ({ key: img.key })),
      portfolioImgs: portfolioImgs.map((img) => ({
        key: img.key,
      })),
      productCategory: productCategory,
      dateRegistered: Date.now(),
    });

    try {
      await artist.save();
      // Send Welcome Email to Artists.
      const params = artistWelcomeParams(email);
      const sendEmail = ses.sendEmail(params).promise();
      sendEmail
        .then(() => {
          res.send(artist);
        })
        .catch((err) => {
          res.send(422, {
            error:
              '아티스트 등록 오류입니다. 이메일주소를 기입했는지 확인해주세요.',
          });
        });
    } catch (err) {
      res.send(422, { error: '아티스트 등록 오류입니다. 다시 가입해주세요.' });
    }
  });

  // Fetch artists
  app.get('/api/artists', async (req, res) => {
    const artists = await Artist.find();
    res.send(artists);
  });

  //   Fetch Verified artists By Category
  app.get('/api/category/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const artists = await Artist.find({
        productCategory: category,
        verified: true,
      });
      res.send(artists);
    } catch (err) {
      res.send(422, { error: 'Couldnt find artists.' });
    }
  });

  // Fetch portfolio imgs
  app.get('/api/portfolio', async (req, res) => {
    const portfolioImgs = await Artist.portfolioImgs.find();
    res.send(portfolioImgs);
  });

  // Fetch an artist
  app.get('/api/artists/:id', async (req, res) => {
    const artist = await Artist.findById(req.params.id);
    res.send(artist);
  });

  // Edit an artist
  app.put('/api/artists/:id', async (req, res) => {
    const artistId = req.params.id;
    const artistProps = req.body;

    Artist.findByIdAndUpdate({ _id: artistId }, artistProps)
      .then(() => Artist.findById({ _id: artistId }))
      .then((artist) => res.send(artist))
      .catch((err) => res.send(422, { error: 'Artist update failed.' }));
  });

  // Submit Reviews
  app.put('/api/reviews/:id', async (req, res) => {
    const artistId = req.params.id;
    const { email, score, review } = req.body;
    const artist = await Artist.findById(artistId);
    await artist.reviews.push({ email, score, review });
    await artist.save((err) => {
      if (err) {
        res.send(422, { error: 'Review submission failed.' });
      }
      res.send(artist);
    });
  });

  // Delete an artist
  app.delete('/api/artists/:id', async (req, res) => {
    const artistId = req.params.id;

    Artist.findByIdAndRemove({ _id: artistId })
      .then((artist) => res.status(204).send(artist))
      .catch((err) => res.send(422, { error: 'Artist delete failed.' }));
  });
};
