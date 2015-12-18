define([
  'app'
], function(app) {
  'use strict';
  return app.controller('AppController', [
    "$scope",
    "$rootScope",
    "config",
    function($scope, $rootScope, config) {
      $rootScope.config = config;
    }
  ]);
});
