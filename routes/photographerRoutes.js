const mongoose = require('mongoose');
const Photographer = mongoose.model('photographers');
const requireLogin = require('../middlewares/requireLogin');
// const PhotographerAppliedMailer = require('../services/mailers/PhotographerAppliedMailer');
// const PhotographerWelcomeMailer = require('../services/mailers/PhotographerWelcomeMailer');
// const photographerAppliedTemplate = require('../services/emailTemplates/PhotographerApplied');
// const photographerWelcomeTemplate = require('../services/emailTemplates/PhotographerWelcome');

module.exports = (app) => {
  // Create a photographer
  app.post('/api/photographers', requireLogin, async (req, res) => {
    const { fullName, workArea, address, profileImageUrl } = req.body;

    const photographer = new Photographer({
      _user: req.user.id,
      username: req.user.username || '',
      email: req.user.email || '',
      profileImageUrl,
      fullName,
      workArea,
      address,
      dateRegistered: Date.now(),
    });

    // const mailer1 = new PhotographerAppliedMailer(
    //   photographer,
    //   photographerAppliedTemplate(photographer)
    // );
    // const mailer2 = new PhotographerWelcomeMailer(
    //   photographer,
    //   photographerWelcomeTemplate(photographer)
    // );

    try {
      //   await mailer1.send();
      //   await mailer2.send();
      await photographer.save();
      res.send(photographer);
    } catch (err) {
      res.send(400, err);
    }
  });
  // Fetch photographers
  app.get('/api/photographers', async (req, res) => {
    const photographers = await Photographer.find();
    res.send(photographers);
  });

  // Fetch a photographer
  app.get('/api/photographers/:id', async (req, res) => {
    const photographer = await Photographer.findById(req.params.id);
    res.send(photographer);
  });

  // // Update a photographer
  // app.put('/api/photographers/:id/edit')

  // // Destroy a photographer
  // app.delete('/api/photographers/:id')
};
