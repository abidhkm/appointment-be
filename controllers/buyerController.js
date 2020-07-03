
var Buyer = require('../models/buyer')


// Handle Author create on POST.
exports.create_buyer = function (req, res, next) {

    // Extract the validation errors from a request.
    // const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    var buyer = new Buyer(
        {
            user: req.body.user,
            orderedItems: req.body.orderedItems,
        }
    );

    // if (!errors.isEmpty()) {
    //     // There are errors. Render form again with sanitized values/errors messages.
    //     res.render('author_form', { title: 'Create Author', author: author, errors: errors.array() });
    //     return;
    // }
    // else {
    // Data from form is valid.

    // Save author.
    buyer.save(function (err, resp) {
        if (err) { return next(err); }
        // Successful - redirect to new author record.
        res.send(resp)
    });
    // }
}