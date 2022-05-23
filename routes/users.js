var express = require('express');
var router = express.Router();
var controller = require("../controllers/users")

router.get('/', controller.readAll);
router.get('/:id', controller.read);

module.exports = router;