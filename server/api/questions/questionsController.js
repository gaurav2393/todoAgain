var Question = require('./questionsModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {

}

exports.getTodoQuestions = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../data/data.json'));
}
exports.postTodoQuestions = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../data/data.json'));
}