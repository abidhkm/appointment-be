var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema({
    seller: { type: Schema.ObjectId, ref: 'Seller', required: true },
    start: { type: Date, required: true, },
    end: { type: Date, required: true },
});

// // Virtual for this book instance URL.
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/'+this._id;
// });

// Export model.
module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
