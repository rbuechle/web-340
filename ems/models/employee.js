// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define Employee Schema
var EmployeeSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true},
    id: {type: String, required: true}
  });

// Export model 
module.exports = mongoose.model('Employee', EmployeeSchema);