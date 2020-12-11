var PracticeQuestion = require('./practiceTopicModel');
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://127.0.0.1/first';
// mongoose.connect(mongoDB, { useMongoClient: true });
// mongoose.Promise = global.Promise
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function callback() {
//     console.log('Connected To Mongo Database');
// });

exports.params = function (req, res, next, id) {
    try {
        PracticeQuestion.findById(id)
            .then(function (category) {
                try {
                    if (!category) {
                        next(new Error('No category with that id'));
                    } else {
                        req.category = category;
                        next();
                    }
                } catch (error) {
                    console.log('practice topic controller params crashed 2', error);
                }
            }, function (err) {
                next(err);
            });
        } catch (error) {
            console.log('practice questions params crashed', error);
        }
};

exports.getTodoQuestions = function(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    } catch (error) {
        console.log('getTodoQuestions crashed', error);
    }
}
exports.postTodoQuestions = function(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    } catch (error) {
        console.log('postTodoQuestions crashed');
    }
}
