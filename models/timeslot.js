var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TimeSlotSchema = new Schema({
    seller: { type: Schema.ObjectId, ref: 'Seller', required: true },
    start: { type: Date, required: true, },
    end: { type: Date, required: true },
});

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
