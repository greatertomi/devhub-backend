const { Router } = require('express');

const postController = require('../controllers/posts');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, postController.getAllPosts);

router.post('/create', auth, postController.createPost);

module.exports = router;
