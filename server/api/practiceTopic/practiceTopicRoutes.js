var express = require('express');
var router = express.Router();
var controller = require('./practiceTopicController');

router.param('id', controller.params);

router.route('/')
    .get(controller.getTodoQuestions)
    .post(controller.postTodoQuestions)

module.exports = router;