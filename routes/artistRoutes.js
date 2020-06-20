const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const requireLogin = require('../middlewares/requireLogin');

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
    const { name, address, profileImg, productImgs, portfolioImgs } = req.body;

    const artist = new Artist({
      _user: req.user.id,
      email: req.user.email,
      name: name,
      address: address,
      profileImg: profileImg,
      productImgs: productImgs.map((img) => ({ key: img.key })),
      portfolioImgs: portfolioImgs.map((img) => ({
        key: img.key,
      })),
      dateRegistered: Date.now(),
    });

    try {
      await artist.save();
      res.send(artist);
    } catch (err) {
      res.send(422, { error: 'Something went wrong!' });
    }
  });

  // Fetch artists
  app.get('/api/artists', async (req, res) => {
    const artists = await Artist.find();
    res.send(artists);
  });

  // Featch an artist
  app.get('/api/artists/:id', async (req, res) => {
    const artist = await Artist.findById(req.params.id);
    res.send(artist);
  });
};
