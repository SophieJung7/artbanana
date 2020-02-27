const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //Local Auth
  app.post('/auth/signup', (req, res) => {
    const { username, password } = req.body;
    User.register(new User({ username: username }), password, (err, user) => {
      if (err) {
        throw err;
      } else {
        passport.authenticate('local')(req, res, () => {
          res.send(user);
        });
      }
    });
  });

  app.post('/auth/signin', passport.authenticate('local'), (req, res) => {
    try {
      res.send(req.user);
    } catch (err) {
      throw err;
    }
  });

  //Local Auth - Change Password

  app.post('/api/change-password', (req, res) => {
    const userId = req.user._id;
    User.findById(userId, (err, user) => {
      if (err) {
        console.log(err);
        res.send('Something wrong');
      } else {
        const newPassword = req.body.newPassword;
        console.log(`New Password: ${newPassword}`);
        user.setPassword(newPassword, () => {
          User.save();
          res.send('Success');
        });
      }
    });
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
