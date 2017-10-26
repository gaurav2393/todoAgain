var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	content: {
    type: String, // will be a string
    required: true, // will not create a todo without this content property
  },
  completed: Boolean
  //This is just for reference for future Work
  // array of ids from the users
  //author: [{type: Schema.Types.ObjectId, ref: 'user'}],

  //categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('todo', todoSchema);