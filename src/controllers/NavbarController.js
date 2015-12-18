define([
  'app'
], function(app) {
  'use strict';
  return app.controller('NavbarController', [
    "$scope", "$mdSidenav", "$route",
    function($scope, $mdSidenav, $route) {
      $scope.toggleSidenav = function() {
        $mdSidenav("left").toggle();
      };
      $scope.routes = $route.current.locals.routes;
    }
  ]);
});
