define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HomeController', [
    "$scope", "message",
    function($scope, message) {
      $scope.message = message;
    }
  ]);
});
