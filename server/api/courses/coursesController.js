var Course = require('./coursesModel');
var _ = require('lodash');
const path = require('path');

exports.params = function(req, res, next, id) {

}

exports.getTodoCourses = function(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    } catch (error) {
        console.log('getTodoCourses crashed', error);
    }
}

exports.postTodoCourses = function(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    } catch (error) {
        console.log('postTodoCourses crashed', error);
    }
}
