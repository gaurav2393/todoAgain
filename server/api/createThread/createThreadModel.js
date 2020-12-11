// import mongoose from 'mongoose';
var mongoose = require('mongoose');

var ThreadSchema = ({
    threadId: {
        type: Number,
        required: true,
        unique: true
    },
    count: {
        type: Number
    },
    counterId: {
        type: String
    },
    createdBy: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phoneNumber: {
            type: Number
        }
    },
    createdDate: {
        type: String,
        required: true
    },
    threadDesc: {
        type: String
    },
    docsIds: [{
        type: String
    }],
    staus: {
        type: Boolean
    },
    expertAnswer: {
        desc: {
            type: String
        },
        docsIds: [{
            type: String
        }],
        createdBy: {
            name: {
                type: String
            },
            email: {
                type: String
            }
        }
    },
    comments: [{
        desc: {
            type: String
        },
        docsIds: [{
            type: String
        }],
        createdBy: {
            name: {
                type: String
            },
            email: {
                type: String
            },
            number: {
                type: Number
            }
        },
        status: {
            type: Boolean
        }
    }]
});


module.exports = mongoose.model('threads', ThreadSchema, 'threads');
