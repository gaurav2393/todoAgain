//import express from 'express';
var express = require('express');
var router = express.Router();
var controller = require('./questionsController');
// import controller from './coursesController';

router.param('id', controller.params);

router.route('/')
    .get(controller.getTodoQuestions)
    .post(controller.postTodoQuestions)

module.exports = router;