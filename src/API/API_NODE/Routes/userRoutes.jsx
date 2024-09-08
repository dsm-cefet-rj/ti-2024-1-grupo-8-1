const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../Controllers/userController.jsx')


router.post('/', userController.signUp);
router.post('/login', passport.authenticate('local', {session: false}), userController.login);
router.get('/', userController.logout);

module.exports = router;


/*router.use(bodyParser.json());

router.post('/signUp', (req, res, next)=>{
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:err});
        } else{
            passport.authenticate('local')(req, res, () =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'})

            });
        }
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user.id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'})

});

router.get('/logout', (req, res) => {
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

})*/