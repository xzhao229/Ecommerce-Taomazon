const express = require('express');
const router = express.Router();
const {signup, signin, signout, requireSignin} = require('../controllers/auth');
const {userSignupValidator} = require('../validator')


router.post('/signup',userSignupValidator, signup);

router.post('/signin',signin);
router.get('/signout', signout);

router.get('/test', requireSignin, function(req, res) {
	res.send("hello, this is a test")
});






module.exports = router;
