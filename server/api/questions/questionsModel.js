// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = ({
    questionId: {
        type: Number,
        required: true,
        unique: true
    },
    questionName: {
        type: String,
        required: true        
    },
    questionHours: {
        type: String,
        required: true
    }
});

// module.exports = mongoose.model('questions', QuestionSchema);
module.exports = mongoose.model('something', QuestionSchema);
