var express = require('express');
var router = express.Router();

var option = require('./option');
var permission = require('./permission');
var data = require('./data');

var parentParams = function(req, res, next) {
    req.problemParams = req.params;
    next();
};

router.use('/:id([0-9]+)/option', parentParams, option);
router.use('/:id([0-9]+)/permission', parentParams, permission);
router.use('/:id([0-9]+)/data', parentParams, data);


router.get('/', function(req, res, next) {
  res.json('resource');
});

router.get('/:id([0-9]+)', function(req, res, next) {
  res.json(req.params.id);
});

module.exports = router;
