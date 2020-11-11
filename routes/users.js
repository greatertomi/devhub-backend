const { Router } = require('express');

const userController = require('../controllers/users');
const handleUserPicture = require('../middlewares/handleUserPicture');

const router = Router();

router.get('/', userController.getUsers);

router.post('/', handleUserPicture, userController.registerUser);

module.exports = router;
