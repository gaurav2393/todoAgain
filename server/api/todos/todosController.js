var Todo = require('./todosModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  try {
    Todo.findById(id)
      //.populate('author categories')
      .exec()
      .then(function(Todo) {
        try {
          if (!Todo) {
            next(new Error('No Todo with that id'));
          } else {
            req.Todo = Todo;
            next();
          }
        } catch (error) {
          console.log('todos controller params find by id crashed 1', error);
        }
      }, function(err) {
        try {
          next(err);
        } catch (error) {
          console.log('todos controller params find by id crashed 2', error);
        }
      });
    } catch (error) {
      console.log('todos controller params crashed', error);
    }
};

exports.get = function(req, res, next) {
  try {
    Todo.find({})
      //.populate('author categories')
      .exec()
      .then(function(Todos){
        try {
          res.json(Todos);
        } catch (error) {
          console.log('todos controller get crashed 1', error);
        }
      }, function(err){
        try {
          next(err);
        } catch (error) {
          console.log('todos controller get crashed 2', error);
        }
      });
  } catch (error) {
    console.log('todos controller get crashed', error);
  }
};

exports.getOne = function(req, res, next) {
  try {
    var Todo = req.Todo;
    res.json(Todo);
  } catch (error) {
    console.log('todos controller getOne crashed', error);
  }
};

exports.put = function(req, res, next) {
  try {
    var Todo = req.Todo;

    var update = req.body;

    _.merge(Todo, update);

    Todo.save(function(err, saved) {
      try {
        if (err) {
          next(err);
        } else {
          res.json(saved);
        }
      } catch (error) {
        console.log('todos controller put crashed', error);
      }
    })
  } catch (error) {
    console.log('todos controller put crashed', error);
  }
};

exports.post = function(req, res, next) {
  try {
    var newTodo = req.body;

    Todo.create(newTodo)
      .then(function(Todo) {
        try {
          res.json(Todo);
        } catch (error) {
            console.log('todos controller post crashed', error);
        }
      }, function(err) {
        try {
          next(err);
        } catch (error) {
          console.log('todos controller post crashed 2', error);
        }
      });
    } catch (error) {
      console.log('todos controller post crashed', error);
    }
};

exports.delete = function(req, res, next) {
  try {
    req.Todo.remove(function(err, removed) {
      try {
        if (err) {
          next(err);
        } else {
          res.json(removed);
        }
      } catch (error) {
        console.log('todos controller delete crashed', error);
      }
    });
  } catch (error) {
      console.log('todos controller delete crashed', error);
  }
};