var Seller = require('../models/seller')

exports.create_seller = function (req, res, next) {

    var seller = new Seller(
        {
            user: req.body.user,
            sellingItems: req.body.sellingItems,
        }
    );

    seller.save(function (err, resp) {
        if (err) { return next(err); }
        // Successful - redirect to new author record.
        res.send(resp)
    });
    // }
}


exports.list_sellers = function (req, res, next) {

    Seller.find({}).populate("user").then(function (sellers) {
        res.send(sellers);
    });

}