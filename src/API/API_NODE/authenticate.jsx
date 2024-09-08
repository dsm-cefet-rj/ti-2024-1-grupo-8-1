const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./Models/userModel.jsx');
const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config.jsx')
const jwt = require('jsonwebtoken');


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user){
  return jwt.sign(user, config.secretKey, {expiresIn:3600});
};

const opts= {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtpassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWTpayload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) =>{
            if(err){
                return done(err, false)
            }
            else if(user){
                return done(null, user);
            }
            else{
                return done(null, false);
            }
        });

    }
));

exports.verifyUser = passport.authenticate('jwt', {session: false});

