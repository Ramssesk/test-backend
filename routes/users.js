const router = require('express').Router();
const { newUser, getUserInfo } = require('../controllers/userController');
const { isAuth } = require('../middleware/isAuth');

router.post('/', newUser );

router.post('/auth', isAuth, getUserInfo);

module.exports = router