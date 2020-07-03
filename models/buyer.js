var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuyerSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    orderedItems: { type: String,  maxlength: 100 },
});

// // Virtual for this book instance URL.
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Buyer', BuyerSchema);
