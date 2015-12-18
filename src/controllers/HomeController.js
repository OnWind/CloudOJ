define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HomeController', [
    "$scope", "message",
    function($scope, message) {
      $scope.messages = [
        "Hello!",
        "Welcome!",
        "This is CloudOJ!!",
        "Hello!!",
        "Welcome!!",
        "This is CloudOJ!",
        "Hello!!!",
        "Welcome!!!",
        "This is CloudOJ!!!"
      ];
    }
  ]);
});
