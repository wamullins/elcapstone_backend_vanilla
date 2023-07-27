const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.use(
    new GoogleStrategy(
        // Configuration object
        {
            // clientID: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_SECRET,
            // callbackURL: process.env.GOOGLE_CALLBACK,
            clientID: "936175628318-lgvoq1sk6c75dpbbnd7o59l3odminrj9.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3001/oauth2callback",
        },
        // The verify callback function
        // Let's use async/await!
        async function (accessToken, refreshToken, profile, cb) {
            // A user has logged in with OAuth...
            try {
                // A user has logged in with OAuth...
                let user = await User.findOne({ googleId: profile.id });
                // Existing user found, so provide it to passport
                if (user) return cb(null, user);
                // We have a new user via OAuth!
                user = await User.create({
                    name: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                });
                return cb(null, user);
            } catch (err) {
                return cb(err);
            }
        }
    )
);

passport.serializeUser(function (user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
    // It's nice to be able to use await in-line!
    cb(null, await User.findById(userId));
});
