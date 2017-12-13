var Course = require('./coursesModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {

}

exports.getTodoCourses = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../data/data.json'));
}