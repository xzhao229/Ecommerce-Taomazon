const express = require('express');
const router = express.Router();
const {userById, read, update, purchaseHistory} = require('../controllers/user');
const {requireSignin, isAuth, isAdmin} = require('../controllers/auth');



router.get('/secret/:userId', requireSignin, isAuth,  function(req, res){
	res.json({
		user:req.profile
	})
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.get('/order/by/user/:userId', requireSignin, isAuth, purchaseHistory);
router.put('/user/:userId', requireSignin, isAuth, update);

router.param("userId",userById)





module.exports = router;