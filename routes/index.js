var express = require('express');
var router = express.Router();

var user = require('./user');
var problem = require('./problem');
var contest = require('./contest');
var discuss = require('./discuss');
var status = require('./status');
var help = require('./help');
var ums = require('./ums');
var search = require('./search');

router.use('/user', user);
router.use('/problem', problem);
router.use('/contest', contest);
router.use('/discuss', discuss);
router.use('/status', status);
router.use('/help', help);
router.use('/ums', ums);
router.use('/search', search);


module.exports = router;
