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
    const {
      name,
      address,
      profileImg,
      productImgs,
      portfolioImgs,
      productCategory,
    } = req.body;

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
      productCategory: productCategory,
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

  //   Fetch artists By Category
  app.get('/api/category/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const artists = await Artist.find({ productCategory: category });
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

  // Delete an artist
  app.delete('/api/artists/:id', async (req, res) => {
    const artistId = req.params.id;

    Artist.findByIdAndRemove({ _id: artistId })
      .then((artist) => res.status(204).send(artist))
      .catch((err) => res.send(422, { error: 'Artist delete failed.' }));
  });
};
