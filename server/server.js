const express = require('express');
const path = require('path');
const todosRouter = require('./todos.js');
const morgan = require('morgan');

const app = express();
const port = 3000;

//You also get process object and look into it for some informaton you want example process.env for testing or production
//Set environment variables there and use them from process.env.nameOfTheVariable like export HEY='key';and then run
//node server.js, you will get the process.env.HEY equal to hey

app.listen(port, function(error){
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port 3000\nGo on');
	}
})

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/todos', todosRouter);

app.use(function(err, req, res, next){
	if(err) {
		res.status(500).send(err);
	}
})