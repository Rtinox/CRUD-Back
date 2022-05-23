var express = require('express');
var router = express.Router();
var controller = require("../controllers/users")

router.get('/', controller.readAll);

module.exports = router;