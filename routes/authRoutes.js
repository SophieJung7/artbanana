const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const AWS = require('aws-sdk');
const _ = require('lodash');
// const { Path } = require('path-parser');
// const { URL } = require('url');
const keys = require('../config/keys');
const {
  emailValidateParams,
} = require('../services/emails/emailValidateParams');

AWS.config.update({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  region: keys.awsRegion,
});

// AWS Simple Email Service
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

module.exports = (app) => {
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
    User.findOne({ username: username }).then((existingUser) => {
      if (existingUser) {
        res.status(409).send('Already Registered');
      } else {
        User.register(
          new User({ username: username }),
          password,
          async (err, user) => {
            try {
              // *** Send Email Verfication Email *** //
              const params = emailValidateParams(username, user._id);
              const sendEmail = ses.sendEmail(params).promise();
              sendEmail
                .then(() => {
                  passport.authenticate('local')(req, res, () => {
                    res.send(user);
                  });
                })
                .catch((err) => {
                  res.status(409).send({
                    error: '오류입니다. 다시 회원가입을 해주세요.',
                  });
                });
            } catch (err) {
              res.status(409).send(err);
            }
          }
        );
      }
    });
  });

  app.get('/auth/signup/thanks/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ _id: userId });
      user.emailValidated = true;
      await user.save();
      res.send(true);
    } catch (err) {
      res.send(false);
    }
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
      scope: ['profile', 'email'],
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
      failureRedirect: '/',
    })
  );

  app.get(
    '/auth/naver/callback',
    passport.authenticate('naver', {
      failureRedirect: '/',
    }),
    (req, res) => {
      res.redirect('/');
    }
  );
};
