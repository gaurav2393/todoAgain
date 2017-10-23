//this is the global middleware
//Here we write functions(middlewares) for  out global application(app)

var express = require('express');
var path = require('path')
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/static', express.static(path.join(__dirname,'public')));
}