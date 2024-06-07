const passport = require("passport");
const SpotifyStrategy = require('passport-spotify').Strategy;
const SpotifyUserModel = require("../models/user");
const express = require("express");
const app = express();

passport.use(
    new SpotifyStrategy(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_SECRET_ID,
        callbackURL: process.env.SPOTIFY_REDIRECT_URI,
        passReqToCallback: true,
      },
      // function(accessToken, refreshToken, expires_in, profile, done) {
      //   User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
      //     console.log("user")
      //     return done(err, user);
      //   });
      // }
      async function (request, accessToken, refreshToken, profile, done) {
        try{

          let user = await SpotifyUserModel.findOne({ spotifyId: profile.id });
          if (user) {
            return done(null, user);
          } else {
            user = new SpotifyUserModel({
              spotifyId: profile.id,
              email: profile.emails[0].value,
            });
  
            await user.save();
  
            return done(null, user);
          }
        } catch (err) {
          return done(err, null);
        }
        
      }
    )
  );
// 
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
