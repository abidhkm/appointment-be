var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    buyer: { type: Schema.ObjectId, ref: 'Buyer', required: true },
    slot: { type: Schema.ObjectId, ref: 'TimeSlot', required: true, unique: true },
    status: { type: String,  maxlength: 15 },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
