define([
  'app'
], function(app) {
  'use strict';
  return app.controller('NavbarController', [
    "$scope", "$mdSidenav", "$route", "$rootScope",
    function($scope, $mdSidenav, $route, $rootScope) {
      $scope.loading = false;
      $scope.toggleSidenav = function() {
        $mdSidenav("left").toggle();
      };
      $scope.__routes = $route.current.locals.routes;
      $scope.$watch('__routes', function(newValue, oldValue) {
        $scope.routes = newValue;
        $scope.routes.unshift({
          i18n_title: 'SITE_NAME',
          href: ''
        });
      });
    }
  ]);
});
