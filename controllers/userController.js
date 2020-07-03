
var User = require('../models/user')


// Handle Author create on POST.
exports.create_user = function    (req, res, next) {

        // Extract the validation errors from a request.
        // const errors = validationResult(req);

        // Create Author object with escaped and trimmed data
        var user = new User(
            {
                name: req.body.name, 
                email: req.body.email,
                contact: req.body.contact,
                gender: req.body.gender,
                address: req.body.address,
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
            user.save(function (err, resp) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.send(resp)
            });
        // }
    }