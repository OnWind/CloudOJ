define([
  'app'
], function(app) {
  'use strict';
  return app.controller('AppController', [
    "$scope",
    "$rootScope",
    "config",
    function($scope, $rootScope, config) {
      $rootScope.config = config;
      $rootScope.$on('$routeChangeStart', function() {
        $rootScope.route_loading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.route_loading = false;
      });
    }
  ]);
});
