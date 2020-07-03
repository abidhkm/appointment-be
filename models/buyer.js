var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuyerSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    // ordered items
});

module.exports = mongoose.model('Buyer', BuyerSchema);
