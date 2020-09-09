const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const AWS = require('aws-sdk');
const crypto = require('crypto');
const { promisify } = require('util');
const _ = require('lodash');
const keys = require('../config/keys');
const {
  emailValidateParams,
} = require('../services/emails/emailValidateParams');
const { pwResetParams } = require('../services/emails/pwResetParams');

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

  //Local Auth - User Forgot the PW: Reset Password

  app.post('/auth/forgot', async (req, res) => {
    User.findOne({ username: req.body.userName }).then((user) => {
      if (!user) {
        return res.status(401).send({ error: '등록되어있지 않은 메일입니다.' });
      }
      //  Generate and set password reset token
      user.generatePasswordReset();
      // Save the updated user object
      user.save().then((user) => {
        // Send PW Reset Email
        try {
          const params = pwResetParams(
            req.body.userName,
            user.resetPasswordToken
          );
          const sendEmail = ses.sendEmail(params).promise();
          sendEmail
            .then(() => {
              res.send(
                '기입해주신 이메일로 비밀번호 재설정 링크를 보냈습니다. 확인해주세요.'
              );
            })
            .catch((err) => {
              res.status(409).send(err);
            });
        } catch (err) {
          res.status(409).send(err);
        }
      });
    });
  });

  app.get('/auth/pw-reset/:token', async (req, res) => {
    User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    }).then((user) => {
      if (!user) {
        res.status(401).send({ error: '비밀번호 변경 기간이 지났습니다.' });
      }
      res.status(200).send('success');
    });
  });

  app.post('/auth/pw-reset/:token', async (req, res) => {
    User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    }).then(async (user) => {
      if (!user) {
        res.status(401).send({ error: '비밀번호 변경기간이 지났습니다.' });
      }
      // Set the new password
      await user.setPassword(req.body.newPassword);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      // Save
      user.save((err) => {
        if (err) {
          res.status(500).send({ error: err });
        }
        res.status(200).send('비밀번호가 변경되었습니다. 다시 로그인해주세요.');
      });
    });
  });

  // User knows the current PW but wants to change PW.

  app.post('/api/attempt/change-password', async (req, res) => {
    //   UserName in Local Strategy is user email. If your user is signed up with Google, Naver, they don't have userName.
    const userName = req.body.userName;
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
