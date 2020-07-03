
var TimeSlot = require('../models/timeslot')


// Handle Author create on POST.
exports.create_slot = function (req, res, next) {

    // Extract the validation errors from a request.
    // const errors = validationResult(req);

    console.log(req.headers,
        
       )

    // Create Author object with escaped and trimmed data
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
        // Successful - redirect to new author record.
        res.send(resp)
    });
    // }
}

exports.list_slots = function (req, res, next) {

    console.log(req.headers)

    const query = TimeSlot.find().populate({ path: 'seller', match: { _id: req.headers.user } })

    query.exec(function (err, slots) {
        if (err) res.send(err)
        // Prints "Space Ghost is a talk show host."
        res.send(slots)
    });
}

exports.available_slots = function (req, res, next) {

    // console.log(req.headers)

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
        // Prints "Space Ghost is a talk show host."
        // console.log(slots)
        const filtered = slots.filter(slot => {
            // console.log(slot.seller,"\n")
            return !slot.appointment.length
        })

        res.send(filtered)
    });
}