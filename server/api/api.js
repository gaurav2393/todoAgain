var router = require('express').Router();
var todosRouter = require('./todos/todosRoutes');
var coursesRouter = require('./courses/coursesRoutes');
var questionsRouter = require('./questions/questionsRoutes');
var practiceTopicRouter = require('./practiceTopic/practiceTopicRoutes');
var uploadDoubtImage = require('./uploadDoubtImage/uploadDoubtImageRoutes');
var createThread = require('./createThread/createThreadRoutes');
var doubtPage = require('./doubtPageAndList/doubtPageRoutes');
var userRoutes = require('./users/usersRoutes');

const path = require('path');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/first';
mongoose.connect(mongoDB, { useMongoClient: true });
mongoose.Promise = global.Promise
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log('Connected To Mongo Database');
});

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

// router.use('/todos', todosRouter);
try {
    router.get('/', function (req, res) {
        try {
            res.sendFile(path.join(__dirname, 'index.html'));
        } catch (error) {
            console.log('error getting html router get', error);
        }
    });

    //router for courses
    router.use('/addQuestions', questionsRouter);
    router.use('/courses', coursesRouter);
    router.use('/practiceTopic', practiceTopicRouter);
    router.use('/uploadDoubtImage', uploadDoubtImage);
    router.use('/createThread', createThread);
    router.use('/alldoubts', doubtPage);
    router.use('/users', userRoutes);
    router.get('/*', function (req, res) {
        try {
            res.sendFile(path.join(__dirname, '../../public/index.html'));
        } catch (error) {
            console.log('error getting get 404', error);
        }
    });
} catch (err) {
    console.log('Main application errored', err);
}

module.exports = router;