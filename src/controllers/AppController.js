define([
  'app'
], function(app) {
  'use strict';
  return app.controller('AppController', [
    "$scope",
    function($scope) {
      $scope.message = "Hello, SkyZH!";
    }
  ]);
});
