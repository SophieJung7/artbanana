const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const EmailValidateMailer = require('../services/mailers/EmailValidateMailer');
const emailValidateTemplate = require('../services/emailTemplates/emailValidateTemplate');

module.exports = app => {
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Local Auth
  app.post('/auth/signup', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }).then(existingUser => {
      if (existingUser) {
        res.status(409).send('Already Registered');
      } else {
        User.register(
          new User({ username: username }),
          password,
          (err, user) => {
            try {
              // *** Send Email Verfication Email *** //
              const mailer = new EmailValidateMailer(
                user,
                emailValidateTemplate(user)
              );
              mailer.send();
              // *** Sign In *** //
              passport.authenticate('local')(req, res, () => {
                res.send(user);
              });
            } catch (err) {
              res.status(409).send(err);
            }
          }
        );
      }
    });
  });

  app.get('/auth/signup/thanks', (req, res) => {
    res.send('이메일 인증이 완료되었습니다^^!');
  });

  app.post('/auth/signin', passport.authenticate('local'), (req, res) => {
    try {
      res.send(req.user);
    } catch (err) {
      throw err;
    }
  });

  //Local Auth - Change Password

  app.post('/api/change-password', async (req, res) => {
    const userName = req.user.username;
    const newPassword = req.body.newPassword;
    const sanitizedUser = await User.findByUsername(userName);
    try {
      await sanitizedUser.setPassword(newPassword);
      await sanitizedUser.save();
      res.status(200).json({ message: 'Successful!' });
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Google Auth
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  //Naver Auth
  app.get(
    '/auth/naver',
    passport.authenticate('naver', {
      failureRedirect: '/'
    })
  );

  app.get(
    '/auth/naver/callback',
    passport.authenticate('naver', {
      failureRedirect: '/'
    }),
    (req, res) => {
      res.redirect('/');
    }
  );
};
