define([
  'app'
], function(app) {
  'use strict';
  return app.controller('ErrorController', [
    "$scope", "error", "$rootScope",
    function($scope, error, $rootScope) {
      $scope.error = error;
      $rootScope.route.status.error = true;
      $rootScope.route.status.loading = true;
    }
  ]);
});
