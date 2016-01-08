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
      $rootScope.route = {
        status: {
          loading: true,
          error: false
        }
      };
      $rootScope.$on('$routeChangeStart', function() {
        $rootScope.route.status.loading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.route.status.loading = false;
        $rootScope.route.status.error = false;
      });
      $rootScope.$on('$routeChangeError', function() {
        $rootScope.route.status.error = true;
      });

    }
  ]);
});
