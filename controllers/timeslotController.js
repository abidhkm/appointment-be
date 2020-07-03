
var TimeSlot = require('../models/timeslot')

exports.create_slot = function (req, res, next) {

    console.log(req.headers,
        
       )

    var timeSlot = new TimeSlot(
        {
            seller: req.headers.user,
            start: req.body.start,
            end: req.body.end,
        }
    );

    // Save author.
    timeSlot.save(function (err, resp) {
        if (err) {
            console.log(err)
            return next(err);
        }
        res.send(resp)
    });
}

exports.list_slots = function (req, res, next) {

    const query = TimeSlot.find().populate({ path: 'seller', match: { _id: req.headers.user } })

    query.exec(function (err, slots) {
        if (err) res.send(err)
        res.send(slots)
    });
}

exports.available_slots = function (req, res, next) {

    const query = TimeSlot.aggregate([
        // { "$match": { "UserName": "administrator" } },
        {
        $lookup:{
            from:"appointments",
            localField:"_id",
            foreignField:"slot",
            as:"appointment",
        },
    },
    
    
])

    query.exec(function (err, slots) {
        if (err) res.send(err)

        const filtered = slots.filter(slot => {
            return !slot.appointment.length
        })

        res.send(filtered)
    });
}