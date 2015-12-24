module.exports = function(env) {
  var express = require('express');
  var router = express.Router();

  var user = require('./user');
  var problem = require('./problem');
  var contest = require('./contest');
  var discuss = require('./discuss');
  var judge = require('./judge');
  var help = require('./help');
  var ums = require('./ums');
  var search = require('./search');

  router.use('/user', user);
  router.use('/problem', problem);
  router.use('/contest', contest);
  router.use('/discuss', discuss);
  router.use('/judge', judge);
  router.use('/help', help);
  router.use('/ums', ums);
  router.use('/search', search);

  // catch 404 and forward to error handler
  router.use(function(req, res, next) {
    var err = new Error('not found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (env === 'development') {
    router.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        'error': {
          message: err.message,
          error: err
        }
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'error': {
        message: err.message,
        error: {}
      }
    });
  });

  return router;
};
