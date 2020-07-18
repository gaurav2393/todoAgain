//import express from 'express';
var express = require('express');
var router = express.Router();
var controller = require('./uploadDoubtImageController');
// import controller from './coursesController';

router.route('/')
    .get(controller.getUploadImage)
    .post(controller.postDoubtImage)

module.exports = router;