var Thread = require('../createThread/createThreadModel');
var _ = require('lodash');
const path = require('path');

exports.params = function(req, res, next, id) {
    // Just for learning I am trying with promise instead of callback function
    try {
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
    } catch (error) {
        console.log('doubt page controller params crashed', error);
    }
}

exports.getDoubtPage = function(req, res, next) {
    try {
        res.json(req.thread);
    } catch (error) {
        console.log('getDoubtPage crashed', error);
    }
}

exports.postDoubtPage = function(req, res, next) {
    try {
        res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
    } catch (error) {
        console.log('postDoubtPage crashed', error);
    }
}

exports.getDoubts = function(req, res, next) {
    try {
        Thread.find({ 'counterId': { $exists: false } }, { threadId: 1, createdBy: 1, createdDate: 1, threadDesc: 1, _id: 0}).sort( { threadId: -1 }).exec(function(err, data) {
            try {
                res.json({data});
            } catch (error) {
                console.log('doubt page controller getDoubts crashed', error);
            }
        });
    } catch (error) {
        console.log('getDoubts crashed', error);
    }
}

exports.postComment = function(req, res, next) {
    try {

    } catch(error) {
        console.log('Post comment crashed', error);
    }
}

exports.postExpertComment = function(req, res, next) {
    try {
        var expertComment = req.body.expertDesc;
        var docId = req.body.docId;
        var name = req.body.name;
        var email = req.body.email;
        var url = req.url.split('/');
        var id = url[url.length - 1];
        Thread.findOneAndUpdate({
            threadId: id
        }, {
                $set: {
                    expertAnswer: {
                        desc: expertComment,
                        docsIds: [docId],
                        createdBy: {
                            name: name,
                            email: email,
                        }
                    }
                }, 
            }, function(err, doc) {
                try {
                    if (err) return res.send(500, { error: err });
                    return res.json({doc});
                } catch (error) {
                    console.log('postCreateThread crashed', error);
                }
            }
        )
    } catch (error) {
        console.log('postDoubtPage crashed', error);
    }
}
