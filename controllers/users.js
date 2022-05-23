let User = require('../models/user');

exports.readAll = function (req, res, next) {
    User.find({}, (err, users) => {
        if(err) return res.json(err);
        res.json(users);
    })
} 

exports.read = function (req, res, next) {
    User.findById(req.params.id, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}