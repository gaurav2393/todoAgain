// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = ({
    questionId: {
        type: String,
        required: true,
        unique: true
    },
    questionName: {
        type: String,
        required: true        
    },
    answerOptions: [String],
    questionMainTopic: {
        type: String,
        required: true
    },
    questionSubTopic: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('questions', QuestionSchema, 'questions');
// module.exports = mongoose.model('something', QuestionSchema);
