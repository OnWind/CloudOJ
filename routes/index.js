var express = require('express');
var router = express.Router();

var user = require('./user/index');
var problem = require('./problem/index');
var contest = require('./contest/index');
var discuss = require('./discuss/index');
var status = require('./status/index');
var help = require('./help/index');
var ums = require('./ums/index');
var search = require('./search/index');

router.use('/user', user);
router.use('/problem', problem);
router.use('/contest', contest);
router.use('/discuss', discuss);
router.use('/status', status);
router.use('/help', help);
router.use('/ums', ums);
router.use('/search', search);

module.exports = router;
