const mongoose = require('mongoose');

const Taskschema = new mongoose.Schema({
  title: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Task = mongoose.model('Task', Taskschema);

module.exports = Task;
