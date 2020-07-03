var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, maxlength: 30, unique: true },
  contact: { type: String,  maxlength: 15, unique: true },
  gender: { type: String,  maxlength: 1, enum: ['m', 'f', 'o'] },
  address: { type: String, maxlength: 100, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
