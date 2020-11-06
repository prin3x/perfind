const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../../models');

const option = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  profile: ['id', 'displayName', 'photos', 'email'],
  callbackURL: 'http://localhost:7000/auth/facebook/callback',
};

const fbStrategy = new FacebookStrategy(
  option,
  async (accessToken, refreshToken, profile, done) => {
    const user = await db.User.findOne({where: {facebook_id: profile.id}});
    if (user) {
      done(null, {user, accessToken});
    } else {
      const [fname, lname] = profile.displayName.split(' ');
      const newUser = await db.User.create({
        facebook_id: profile.id,
        fname,
        lname,
      });
      done(null, newUser);
    }
  }
);

passport.use('facebookToken', fbStrategy);
