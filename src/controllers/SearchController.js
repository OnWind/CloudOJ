define([
  'app'
], function(app) {
  'use strict';
  return app.controller('SearchController', [
    "$scope",
    function($scope) {
      $scope.message = "Hello!";
    }
  ]);
});
