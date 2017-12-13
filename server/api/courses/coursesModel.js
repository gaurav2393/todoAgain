import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var CourseSchema = ({
    courseId: {
        type: Number,
        required: true,
        unique: true
    },
    courseName: {
        type: String,
        required: true        
    },
    courseHours: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('course', CourseSchema);
