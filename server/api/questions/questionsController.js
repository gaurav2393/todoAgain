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
    // res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    Question.find({}, function(err, data){
        console.log('data------', data);
        res.send(data);
    });
}
exports.postTodoQuestions = function(req, res, next) {
    console.log('received file', req.body[0]);
    var length = req.body.length;
    var count;
    var data = [];
    // var count = Question.where({}).countDocuments();
    count = 0;
    // query.countDocuments({}, function(err, data) {
    //     count = data;
    // });
    for (let i = 0 ; i < length ; i++) {
        let temp = {};
        temp['questionId'] = count;
        count++;
        temp['questionName'] = req.body[i]['A'];
        temp['answerOptions'] = [];
        let splitQuestionOptions = req.body[i]['B'].split(',');
        let optionsCount = splitQuestionOptions.length;
        for(let j = 0 ; j < optionsCount ; j++) {
            temp['answerOptions'].push(splitQuestionOptions[j]);
        }
        temp['questionMainTopic'] = req.body[i]['C'];
        temp['questionSubTopic'] = req.body[i]['D'];
        temp['answer'] = req.body[i]['E'];
        data.push(temp);
    }
    Question.insertMany(data, { ordered: false }, function(err, docs) {
        res.send(data);
    });
}