const { Router } = require('express');

const userController = require('../controllers/users');
const auth = require('../middlewares/auth');
// const handleUserPicture = require('../middlewares/handleUserPicture');

const router = Router();

router.get('/', userController.getUsers);

router.post('/', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/authTest', auth, userController.authTest);

module.exports = router;
