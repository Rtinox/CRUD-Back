var express = require('express');
var router = express.Router();
var controller = require("../controllers/users")

/**
 * Routes au format CRUD
 */
router.get('/', controller.readAll);
router.post('/', controller.create);
router.get('/:id', controller.read);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;