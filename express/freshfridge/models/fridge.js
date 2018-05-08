var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FridgeSchema = new Schema(
  {
    email: {type: String, required: true, max: 100},
    food: {type: String, required: true, max: 100},
  }
);

// Virtual for food's name
FridgeSchema
.virtual('food')
.get(function () {
  return this.food;
});

// Virtual for fridge's URL
FridgeSchema
.virtual('url')
.get(function () {
  return '/i/fridge/';
});

//Export model
module.exports = mongoose.model('Fridge', FridgeSchema);