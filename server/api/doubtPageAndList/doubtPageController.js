var Thread = require('../createThread/createThreadModel');
var _ = require('lodash');
const path = require('path');

exports.params = function(req, res, next, id) {
    // Just for learning I am trying with promise instead of callback function
    Thread.findOne({
        threadId: id
    }, {
        _id: 0
    }).exec().then(function(thread) {
        if (!thread) {
            next(new Error('No Thread with that id'));
        } else {
            req.thread = thread
            next();
        }
    }).catch((err) => {
        next(err);
    })
}

exports.getDoubtPage = function(req, res, next) {
    res.json(req.thread);
}

exports.postDoubtPage = function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
}

exports.getDoubts = function(req, res, next) {
    Thread.find({ 'counterId': { $exists: false } }, { threadId: 1, createdBy: 1, createdDate: 1, threadDesc: 1, _id: 0}).sort( { threadId: -1 }).exec(function(err, data) {
        res.json({data});
    })
}
