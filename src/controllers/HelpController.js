
define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HelpController', [
    "$scope",
    function($scope) {
      $scope.message = "Help";
    }
  ]);
});
