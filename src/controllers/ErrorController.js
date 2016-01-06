define([
  'app'
], function(app) {
  'use strict';
  return app.controller('ErrorController', [
    "$scope", "error",
    function($scope, error) {
      $scope.error = error;
    }
  ]);
});
