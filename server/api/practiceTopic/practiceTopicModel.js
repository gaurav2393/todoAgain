var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PracticeQuestionSchema = ({
    topicName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('practiceQuestions', PracticeQuestionSchema, 'practiceQuestions');