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

exports.create = function (req, res, next) {
    User.create(req.body, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}

exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}

exports.update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}