var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SellerSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    name: { type: String,  maxlength: 30 }, // company name
    email: { type: String,  maxlength: 30 },
    contact: { type: String,  maxlength: 20 },
});

module.exports = mongoose.model('Seller', SellerSchema);
