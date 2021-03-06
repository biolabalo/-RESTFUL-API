const mongoose = require('mongoose');


// Create Schema
const todoSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  completed:{
    type: Boolean,
      default : false
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Todo', todoSchema);