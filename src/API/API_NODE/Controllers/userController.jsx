const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../Models/userModel.jsx');
const passport = require('passport');
const authenticate = require('../authenticate.jsx')
const cors = require ('../cors.jsx');

router.use(bodyParser.json());

exports.corsAuth = (req, res) => {res.sendStatus(200);}

exports.getUsers = async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao obter usuário:', error);
      res.status(500).json({ mensagem: 'Erro ao obter usuário' });
    }
  };

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
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({user: req.user._id, token: token, success: true})
};


