const { Router } = require('express');

const postController = require('../controllers/posts');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, postController.getAllPosts);

router.post('/create', auth, postController.createPost);

router.delete('/delete/:postId', auth, postController.deletePost);

router.put('/like', auth, postController.likePost);

router.get('/:userId', auth, postController.getUserPosts);

module.exports = router;
