var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema(
  {
    email: {type: String, required: true, max: 100},
    food: {type: String, required: true, max: 100},
  }
);

// Virtual for food's name
ShoppingListSchema
.virtual('food')
.get(function () {
  return this.food;
});

// Virtual for fridge's URL
ShoppingListSchema
.virtual('url')
.get(function () {
  return '/i/shopping-list/';
});

//Export model
module.exports = mongoose.model('ShoppingList', ShoppingListSchema);