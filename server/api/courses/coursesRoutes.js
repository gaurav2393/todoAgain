//import express from 'express';
var express = require('express');
var router = express.Router();
var controller = require('./coursesController');
// import controller from './coursesController';

router.param('id', controller.params);

router.route('/todosCourses')
    .get(controller.getTodoCourses)
    .post(controller.postTodoCourses)

module.exports = router;