//import express from 'express';
var express = require('express');
var router = express.Router();
var controller = require('./doubtPageController');
// import controller from './coursesController';

router.param('id', controller.params);

router.route('/:id')
    .get(controller.getDoubtPage)
    .post(controller.postDoubtPage)

router.route('/')
    .get(controller.getDoubts)

module.exports = router;