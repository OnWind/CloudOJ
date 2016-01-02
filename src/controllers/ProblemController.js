define([
  'app'
], function(app) {
  'use strict';
  return app.controller('ProblemController', [
    "$scope",
    function($scope) {
      $scope.message = "Hello!";
    }
  ]);
});
