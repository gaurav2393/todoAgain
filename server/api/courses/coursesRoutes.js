import express from 'express';
var router = express.Router();
import controller from './coursesController';

router.param('id', controller.params);

router.route('/todosCourses')
    .get(controller.getTodoCourses)
    .post(controller.postTodoCourses)

module.exports = router;