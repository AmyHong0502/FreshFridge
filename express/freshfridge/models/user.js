let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

let UserSchema = new Schema(
    {
        email: {type: String, required: true, max: 100},
    }
);

// Virtual for the user's email
UserSchema
    .virtual('food')
    .get(function () {
        return this.food;
    });

// Virtual for fridge's URL
UserSchema
    .virtual('url')
    .get(function () {
        return '/i/';
    });

//Export model
module.exports = mongoose.model('User', UserSchema);