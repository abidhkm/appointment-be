var Appointment = require('../models/appointment')
var ObjectId = require('mongodb').ObjectID

exports.create_appointment = function (req, res, next) {

    var appointment = new Appointment(
        {
            buyer: req.body.buyer,
            slot: req.body.slot,
            status: 'pending',
        }
    );

    appointment.save(function (err, resp) {
        if (err) { return next(err); }
        res.send(resp)
    });
}

exports.list_requests = function (req, res, next) {

    // const query = Appointment.find({ status: req.query.status })
    //     .populate({ path: 'slot', match: { seller: req.headers.user } })//
    //     .populate({ path: 'buyer', populate: { path: 'user' } })//

    const query = Appointment.aggregate([
        { $match: { "status": req.query.status } },
        {
            $lookup: {
                from: 'timeslots',
                localField: 'slot',
                foreignField: '_id',
                as: 'timeslot'
              }
        },
        {   $unwind:"$timeslot" },     
        {
            $lookup: {
                from: 'buyers',
                localField: 'buyer',
                foreignField: '_id',
                as: 'buyer'
              }
        },
        {   $unwind:"$buyer" },     
        { $match: { "timeslot.seller": ObjectId(req.headers.user) } },
        {
            $lookup: {
                from: 'users',
                localField: 'buyer.user',
                foreignField: '_id',
                as: 'user'
              }
        },
        {   $unwind:"$user" },     
        // { $project:{} }
    ])

    query.exec(function (err, sellers) {
        if (err) res.send(err)
        // Prints "Space Ghost is a talk show host."
        res.send(sellers)
    });
}

exports.list_requests_buyer = function (req, res, next) {

    const query = Appointment.find({ status: req.query.status, buyer: req.headers.user })
        // .populate({ path: 'buyer',  })
        .populate({ path: 'slot', populate: { path: 'seller', populate: { path: 'user' } } })

    query.exec(function (err, sellers) {
        if (err) res.send(err)
        // Prints "Space Ghost is a talk show host."
        res.send(sellers)
    });
}

exports.confirm_request = function (req, res, next) {

    Appointment.findByIdAndUpdate(req.body.requestId, { "status": "confirmed" }, function (err, result) {

        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }

    })
}

exports.reject_request = function (req, res, next) {

    // console.log(req.body.requestId)

    Appointment.findByIdAndDelete(req.query.requestId, function (err, result) {

        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }

    })
}