const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/userSchema');
const key = require('./keys');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = key.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.data._id, (err, User) => {
            if (err) {
                return done(err, false);
            }

            if (User) {
                return done(null, User);
            } else {
                return done(null, false);
            }
        });
    }));
}