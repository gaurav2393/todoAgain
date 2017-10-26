var Todo = require('./todosModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Todo.findById(id)
    //.populate('author categories')
    .exec()
    .then(function(Todo) {
      if (!Todo) {
        next(new Error('No Todo with that id'));
      } else {
        req.Todo = Todo;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Todo.find({})
    //.populate('author categories')
    .exec()
    .then(function(Todos){
      res.json(Todos);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var Todo = req.Todo;
  res.json(Todo);
};

exports.put = function(req, res, next) {
  var Todo = req.Todo;

  var update = req.body;

  _.merge(Todo, update);

  Todo.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newTodo = req.body;

  Todo.create(newTodo)
    .then(function(Todo) {
      res.json(Todo);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.Todo.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};