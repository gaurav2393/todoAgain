var mongoose = require('mongoose');

// first make a new schema for our model
// this is just the blueprint and how we tell mongoose to
// handle our data. Mongo doesn't care.
var TodoSchema = new mongoose.Schema({
  // we define a property for this model object
  // then what type it is, in this case, the
  // completed property will has to be a Boolean
  completed: Boolean,

  // we can add validations too
  // just use an object literal here instead
  // just be sure to have a type property on that object
  // to tell mongoose what type this property will be
  content: {
    type: String, // will be a string
    required: true, // will not create a todo without this content property
  }
});
// no matter what we pass in as a name for the model,
// mongoose will lowercase it and pluralize it for the collection.
// so below the name for the model is 'Todo', mongoose will
// convert that to 'todos' in the databse.
// TodoModel is the model we'll use in node to CRUD so
// it makes sense to export this;
var TodoModel = mongoose.model('Todo', TodoSchema);
module.export = TodoModel;

// var mongoose = require('mongoose');

// // connect to a database so that the below will work.
// // what's happening is that we're createing a new schema
// // and making a todos collection and a Todo model.
// // We then create new Todo.
// // So in the mongo shell in the terminal,
// // connect to your database and query it there
// // and see if you see the todo below log in the terminal
// // run node db.Tester to execute this file
// // MAKE SURE MONGOD is RUNNING
// mongoose.connect('mongodb://localhost/myFirst');

// var TodoSchema = new mongoose.Schema({
//   name: String,
//   completed: Boolean
// });

// var Todo = mongoose.model('todo', TodoSchema);
// Todo.create({
//   name: 'clean up your room!!!',
//   completed: false
// }).then(function(err, todo) {
//   console.log(err, todo);
// });