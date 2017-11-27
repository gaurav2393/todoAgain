//this is the global middleware
//Here we write functions(middlewares) for  out global application(app)

var express = require('express');
var path = require('path')
var morgan = require('morgan');
var bodyParser = require('body-parser');
const webpack =  require('webpack');
const webpackConfig = require('../../webpack.dev.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');


module.exports = function(app) {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use('/', express.static(path.join(__dirname,'../../public')));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}