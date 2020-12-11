const path = require('path');
var Thread = require('./createThreadModel');

exports.params = async function(req, res, next) {
    try {
        next();
    } catch (error) {
        console.log('create thread controller params crashed', error);
    }
}

exports.postComment = async function(req, res, next) {
    try {
        next();
    } catch (error) {
        console.log('postComment crashed')
    }
}

exports.getComment = function(req, res, next) {
    try {
        next();
    } catch (error) {
        console.log('getComment crashed', error);
    }
}

exports.postCreateThread = function(req, res, next) {
    try {
        var count;
        Thread.find({counterId: 'counterId'}, function (err, data) {
            try {
                if (err) {
                    // Send some error with some code
                    // res.sendFile(path.join(__dirname, '../../../data/coursesTodo.json'));
                    console.log('error1', err);
                } else {
                    count = parseInt(data[0].count);
                    var threadData = {
                        threadId: count,
                        createdBy: {
                            name: req.body.name,
                            email: req.body.email,
                            phoneNumber: req.body.phoneNumber,
                        },
                        threadDesc: req.body.threadDesc,
                        createdDate: req.body.createdDate,
                        docsIds: [req.body.docId],
                        staus: true
                    }
                    var thread = new Thread(threadData);
                    thread.save(function(error) {
                        try {
                            if(error) {
                                console.log('error2', error);
                            } else {
                                var countObject = Thread.findOneAndUpdate(
                                    { counterId: 'counterId'},
                                    { $inc: { count: 1 } },
                                    {upsert:true}, function(err, doc) {
                                        try {
                                            if (err) return res.send(500, { error: err });
                                            console.log(data[0].count);
                                            return res.send("succesfully saved");
                                        } catch (error) {
                                            console.log('postCreateThread crashed', error);
                                        }
                                    }
                                );
                            }
                        } catch (error) {
                            console.log('postCreateThread crashed save', error);
                        }
                    });
                }
            } catch (error) {
                console.log('postCreateThread crashed', error);
            }
        });
    } catch (error) {
        console.log('postCreateThread crashed', error);
    }
}
