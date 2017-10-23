const express = require('express');
const todosRouter = express.Router();
const path = require('path');

//todosRouter.use(express.static('public'));

todosRouter.route('/')
    .get(function(req, res, next){
        console.log('gdgd');
        res.send('Inside sub-router');
        //res.sendFile('../public/todos.html');
    })
    .post(function(req, res){

    })


todosRouter.param('id', function(req, res, next, id){
    //Incase you want to do something on any URL which has parameter id 
})

todosRouter.get('/:id', function(req, res){
    res.sendFile(path.join(__dirname, 'todos1.html'));
})

module.exports = todosRouter;

//You can also do
// export.todosRouter=todosRouter
//And importing this file do below
//var todosRouter=require('./todo.js).todosRouter