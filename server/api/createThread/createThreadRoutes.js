var express = require('express');
var router = express.Router();
var controller = require('./createThreadController');

router.param('threadId', controller.params);

router.route('/:threadId')
    .get(controller.getComment)
    .post(controller.postComment)

router.route('/')
    .post(controller.postCreateThread)

module.exports = router;