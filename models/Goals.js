var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  description: String,
},
{timestamps: true});

// export!
module.exports = mongoose.model('Goal', GoalSchema);
