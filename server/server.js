var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('../webpack.dev.config');
const webpack =  require('webpack');
const compiler = webpack(config);
// db.url is different depending on NODE_ENV
//require('mongoose').connect(config.db.url);// make it work for your database
const path = require('path');

//Running webpack
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/', api);

// set up global error handling

// export the app for testing
module.exports = app;



/*working code

var express = require('express');
const path = require('path');
var app = express();
var api = require('./api/api');//This is a router.
const webpack =  require('webpack');
const config = require('../webpack.dev.config');
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//setup the app middleware
require('./middleware/appMiddleware')(app);

app.listen(3000, function(error){
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port 3000\nGo on');
	}
})
app.use('/', express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;

// working code till here */

// setup the api
//app.use('/', api);

//setup global error handling//You can create a separte file in middleware folder for this
// app.use(function(err, req, res, next){
// 	if(err) {
// 		res.status(500).send(err);//you can also see the stack trace to know from which file and trace routes of files using err.stack
// 	}
// })

//export the app for testing
// module.exports = app;



// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const todosRouter = require('./todos.js');
// const morgan = require('morgan');

// const app = express();
// const port = 3000;

// //You also get process object and look into it for some informaton you want example process.env for testing or production
// //Set environment variables there and use them from process.env.nameOfTheVariable like export HEY='key';and then run
// //node server.js, you will get the process.env.HEY equal to hey

// app.use(morgan('dev'));

//app.use('/', express.static(path.join(__dirname,'public')));

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use('/todos', todosRouter);

// app.use(function(err, req, res, next){
// 	if(err) {
// 		res.status(500).send(err);
// 	}
// })
