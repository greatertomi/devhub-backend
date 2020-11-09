const { Router } = require('express');

const userController = require('../controllers/users');

const router = Router();

router.get('/', userController.getUsers);

router.post('/', userController.registerUser);

module.exports = router;
