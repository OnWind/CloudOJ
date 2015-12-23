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
      $scope.__routes = $route.current.locals.routes;
      $scope.$watch('__routes', function(newValue, oldValue) {
        $scope.routes = [{i18n_title: 'SITE_NAME'}].concat(newValue);
      });
    }
  ]);
});
