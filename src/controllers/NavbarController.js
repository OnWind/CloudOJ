define([
  'app'
], function(app) {
  'use strict';
  return app.controller('NavbarController', [
    "$scope", "$mdSidenav",
    function($scope, $mdSidenav) {
      $scope.toggleSidenav = function() {
        $mdSidenav("left").toggle();
      };
    }
  ]);
});
