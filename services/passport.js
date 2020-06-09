const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys');
const WelcomeMailer = require('../services/mailers/WelcomeMailer');
const welcomeTemplate = require('../services/emailTemplates/welcomeTemplate');

passport.use(new LocalStrategy(User.authenticate()));

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        // This is a new user. Save a record with the given ID.
        const { name, given_name, family_name, picture, email } = profile._json;
        const user = await new User({
          googleId: profile.id,
          displayName: name,
          firstName: given_name,
          lastName: family_name,
          email: email,
          emailValidated: true,
          picture: picture,
          userAccountProvider: profile.provider,
        }).save();
        // *** Send Welcome Mail *** //
        try {
          const mailer = new WelcomeMailer(user, welcomeTemplate(user));
          await mailer.send();
          done(null, user);
        } catch (err) {
          throw err;
        }
      }
    }
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: keys.naverClientID,
      clientSecret: keys.naverClientSecret,
      callbackURL: '/auth/naver/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ naverId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        const { id, email, profile_image, age, birthday } = profile._json;
        const user = await new User({
          naverId: id,
          displayName: profile.displayName,
          email: email,
          emailValidated: true,
          picture: profile_image,
          age: age,
          birthday: birthday,
          userAccountProvider: profile.provider,
        }).save();
        // *** Send Welcome Mail *** //
        try {
          const mailer = new WelcomeMailer(user, welcomeTemplate(user));
          await mailer.send();
          done(null, user);
        } catch (err) {
          throw err;
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
