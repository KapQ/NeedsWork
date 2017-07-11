var restful = require('node-restful');
var mongoose = restful.mongoose;

var statSchema = new mongoose.Schema({
  name: String,
  pace: String,
  rank: Number
});

module.exports = restful.model('Stats', statSchema);
