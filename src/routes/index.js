define([
  'app'
], function(app) {
  'use strict';
  return app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
      .when('/home', {
        templateUrl: "views/home/index.html",
        controller: "HomeController",
        resolve: {
          routes: function() { return [{i18n_title: 'HOME'}]; }
        }
      })
      .when('/help', {
        templateUrl: "views/help/index.html",
        controller: "HelpController",
        resolve: {
          routes: function(){ return [{i18n_title: 'HELP'}]; }
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
    }
  ]);
});
