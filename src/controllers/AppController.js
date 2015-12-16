define([
  'app'
], function(app) {
  'use strict';
  return app.controller('AppController', [
    "$scope",
    "$rootScope",
    "config",
    function($scope, $rootScope, config) {
      $scope.message = "Hello, SkyZH!";
      $rootScope.config = config;
    }
  ]);
});
