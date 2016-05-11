var mongoose = require('mongoose');

var WritingSchema = new mongoose.Schema({
  name: String,
  entry: String,
},
{timestamps: true});

// export!
module.exports = mongoose.model('Memoir', WritingSchema);
