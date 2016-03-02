var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  name: String,
  created: { type: Date, default: Date.now },
  completed: Boolean,
  description: String,
  updated_at: { type: Date, default: Date.now }
});

// export!
module.exports = mongoose.model('Goal', GoalSchema);
