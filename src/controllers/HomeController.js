define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HomeController', [
    "$scope",
    function($scope) {
      $scope.cards = [
        "Hello!",
        "Welcome!",
        "This is CloudOJ!!",
        "Hello!!",
        "Welcome!!",
        "This is CloudOJ!",
        "Hello!!!",
        "Welcome!!!",
        "This is CloudOJ!!!",
        "Hello!!!!",
        "Welcome!!!!",
        "This is CloudOJ!!!!"
      ];
    }
  ]);
});
