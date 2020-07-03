var mongoose = require('mongoose');
// var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, maxlength: 30, unique: true },
  contact: { type: String,  maxlength: 15, unique: true },
  gender: { type: String,  maxlength: 1, enum: ['m', 'f', 'o'] },
  address: { type: String, maxlength: 100, unique: true },
});

// Virtual for author "full" name.
// AuthorSchema.virtual('name').get(function() {
//   var fullname = '';

//   if (this.first_name && this.family_name) {
//     fullname = this.family_name + ', ' + this.first_name;
//   }

//   if (!this.first_name && !this.family_name) {
//     fullname = '';
//   }
//   return fullname;
// });

// // Virtual for this author instance URL.
// AuthorSchema.virtual('url').get(function() {
//   return '/catalog/author/' + this._id;
// });

// AuthorSchema.virtual('lifespan').get(function() {
//   var lifetime_string = '';
//   if (this.date_of_birth) {
//     lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
//   }
//   lifetime_string += ' - ';
//   if (this.date_of_death) {
//     lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
//   }
//   return lifetime_string;
// });

// AuthorSchema.virtual('date_of_birth_yyyy_mm_dd').get(function() {
//   return moment(this.date_of_birth).format('YYYY-MM-DD');
// });

// AuthorSchema.virtual('date_of_death_yyyy_mm_dd').get(function() {
//   return moment(this.date_of_death).format('YYYY-MM-DD');
// });

// Export model.
module.exports = mongoose.model('User', UserSchema);
