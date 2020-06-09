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
    const { name, address } = req.body;

    const artist = new Artist({
      _user: req.user.id,
      name: name,
      address: address,
      dateRegistered: Date.now(),
    });

    try {
      await artist.save();
      res.send(artist);
    } catch (err) {
      res.send(422, { error: 'Something went wrong!' });
    }
  });
};
