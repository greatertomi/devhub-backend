const { Router } = require('express');

const postController = require('../controllers/posts');

const router = Router();

router.get('/', postController.getAllPosts);

router.post('/', postController.createPost);

module.exports = router;
