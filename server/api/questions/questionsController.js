var Question = require('./questionsModel');
var _ = require('lodash');

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
    try {
        Question.find({}, function(err, data){
            res.send(data);
        });
    } catch (error) {
        console.log('getTodoQuestions crashed', error);
    }
}
exports.postTodoQuestions = function(req, res, next) {
    try {
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
            try {
                res.send(data);
            } catch (error) {
                console.log('postTodoQuestions insertMany crashed', error);
            }
        });
    } catch (error) {
        console.log('postTodoQuestions crashed', error);
    }
}