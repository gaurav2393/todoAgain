var Course = require('./coursesModel');
var _ = require('lodash');
const path = require('path');

exports.params = function(req, res, next, id) {

}

exports.getTodoCourses = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
}
exports.postTodoCourses = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
}