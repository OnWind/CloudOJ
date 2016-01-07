
define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HelpController', [
    "$scope", "url",
    function($scope, url) {
      $scope.url = url;
    }
  ]);
});
