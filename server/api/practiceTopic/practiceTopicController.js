var PracticeQuestion = require('./practiceTopicModel');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/first';
mongoose.connect(mongoDB, { useMongoClient: true });
mongoose.Promise = global.Promise
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback() {
    console.log('Conntected To Mongo Database');
});

exports.params = function (req, res, next, id) {
    PracticeQuestion.findById(id)
        .then(function (category) {
            if (!category) {
                next(new Error('No category with that id'));
            } else {
                req.category = category;
                next();
            }
        }, function (err) {
            next(err);
        });
};