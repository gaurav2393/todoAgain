var Question = require('./questionsModel');
var _ = require('lodash');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/first';
const path = require('path');
mongoose.connect(mongoDB, { useMongoClient: true });
mongoose.Promise = global.Promise
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log('Conntected To Mongo Database');
});
// var Schema = mongoose.Schema;
// var questions = mongoose.model('questions', new Schema({ url: String, text: String, id: Number}), 
//     'questions');
// questions.find({}, function(err, data){
//     console.log(">>>> " + data );
// });
exports.params = function(req, res, next, id) {

}

exports.getTodoQuestions = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    // res.sendFile(path.join(__dirname, '../data/data.json'));
}
exports.postTodoQuestions = function(req, res, next) {
    console.log('received file', req.body);
    res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
}