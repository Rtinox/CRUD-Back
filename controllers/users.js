let User = require('../models/user');

/**
 * Retourne tous les utilisateurs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.readAll = function (req, res, next) {
    User.find({}, (err, users) => {
        if(err) return res.json(err);
        res.json(users);
    })
} 

/**
 * Retourne les données d'un utilisateur en fonction de son id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.read = function (req, res, next) {
    User.findById(req.params.id, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}

/**
 * Création d'un utilisateur
 * Retourne les données de celui-ci
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = function (req, res, next) {
    User.create(req.body, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}

/**
 * Supprime un utilisateur
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}

/**
 * Met à jour un utilisateur
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
}