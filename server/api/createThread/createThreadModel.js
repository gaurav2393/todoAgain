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
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
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
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        }
    },
    comments: [{
        desc: {
            type: String,
            required: true
        },
        docsIds: [{
            type: String
        }],
        createdBy: {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            number: {
                type: Number,
                required: true
            }
        },
        status: {
            type: Boolean
        }
    }]
});


module.exports = mongoose.model('threads', ThreadSchema, 'threads');
