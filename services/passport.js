const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new LocalStrategy(User.authenticate()));

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
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
          userAccountProvider: profile.provider
        }).save();
        done(null, user);
      }
    }
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: keys.naverClientID,
      clientSecret: keys.naverClientSecret,
      callbackURL: '/auth/naver/callback'
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
          userAccountProvider: profile.provider
        }).save();
        done(null, user);
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
