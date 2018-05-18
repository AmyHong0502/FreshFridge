let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let FridgeSchema = new Schema(
  {
    email: {type: String, required: true, max: 100},
    food: {type: String, required: true, max: 100},
  }
);

//Export model
module.exports = mongoose.model('Fridge', FridgeSchema);