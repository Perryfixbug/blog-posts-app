const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller.js');

router.get('/', postController.getAllPosts);
router.get('/top', postController.getTop);
router.get('/:slug', postController.getPostById);


module.exports = router;