const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../Models/userModel.jsx');
const passport = require('passport');
const authenticate = require('../authenticate.jsx')

router.use(bodyParser.json());

exports.signUp = (req, res, next)=>{
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:err});
        } else{
            passport.authenticate('local', {session: false})(req, res, () =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'})

            });
        }
    });
};

exports.login = (req, res) => {
    const token = authenticate.getToken({_id: req.user.id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'})
};

exports.logout = (req, res) => {
    if(req.session){
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }
    else{
        const err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
}