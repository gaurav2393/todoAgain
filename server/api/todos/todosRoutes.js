const express = require('express');
const todosRouter = express.Router();
const path = require('path');

//todosRouter.use(express.static('public'));

todosRouter.route('/')
    .get(function(req, res, next){
        try {
            res.send('Inside sub-router');
            // res.sendFile('../public/todos.html');
        } catch (error) {
            console.log('todos router crashed', error);
        }
    })
    .post(function(req, res){

    })


todosRouter.param('id', function(req, res, next, id){
    // Incase you want to do something on any URL which has parameter id 
})

todosRouter.get('/:id', function(req, res){
    try {
        res.sendFile(path.join(__dirname, 'todos1.html'));
    } catch (error) {
        console.log('todos router get id crashed', error);
    }
})

module.exports = todosRouter;

//You can also do
// export.todosRouter=todosRouter
//And importing this file do below
//var todosRouter=require('./todo.js).todosRouter