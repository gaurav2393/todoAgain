var express = require('express');
var router = express.Router();
var controller = require('./createThreadController');

router.route('/')
    .get(controller.getCreateThread)
    .post(controller.postCreateThread)

module.exports = router;