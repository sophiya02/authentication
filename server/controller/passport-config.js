// const passport = require('passport');

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const TwitterStrategy= require('passport-twitter').Strategy;
// const GithubStrategy= require('passport-github2').Strategy;
// const User= require('../models/model')

// // passport.serializeUser(function(user, done) {
// //   done(null, user.id);
// // });

// // passport.deserializeUser(function(id, done) {
// //   User.findById(id, function (err, user) {
// //     done(err, user);
// //   });
// // });

// passport.use(new GoogleStrategy(
//   {
//   clientID: "999361524381-trfhes5suc58cpj0nb6kupsndfj4nbni.apps.googleusercontent.com",
//   clientSecret: "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",
//   callbackURL: "http://localhost:3000/api/v1/google/callback"
// },  function(accessToken, refreshToken, profile, cb) {
//   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   //   return cb(err, user);
//   // });
//   console.log(profile)
//   return cb(null);
// }
// ));

// passport.use(new FacebookStrategy(
//   {
//   clientID: "1197659970950309",
//   clientSecret: "3286f7d7ea8a12e991e2d2d16dafe52d",
//   callbackURL: "http://localhost:3000/api/v1/facebook/callback"
// },  function(accessToken, refreshToken, profile, cb) {
//   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   //   return cb(err, user);
//   // });
//   console.log(profile)
//   return cb(null);
// }
// ));

// passport.use(new TwitterStrategy(
//   {
//   clientID: "1197659970950309",
//   clientSecret: "3286f7d7ea8a12e991e2d2d16dafe52d",
//   callbackURL: "http://localhost:3000/api/v1/twitter/callback"
// },  function(accessToken, refreshToken, profile, cb) {
//   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   //   return cb(err, user);
//   // });
//   console.log(profile)
//   return cb(null);
// }
// ));

