var express = require('express');
var router = express.Router();
var controller = require('./usersController')

router.param('email', controller.params);

router.route('/:email')
    .get(controller.getUserData)
    .post(controller.postUserData)

router.route('/')
    .post(controller.createUser)

module.exports = router;
