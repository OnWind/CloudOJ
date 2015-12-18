define([
  'app'
], function(app) {
  'use strict';
  return app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
      .when('/home', {
        templateUrl: "views/home/",
        controller: "HomeController",
        resolve: {
          routes: function() { return [{i18n: true, route: 'HOME'}]; }
        }
      })
      .when('/home/submit', {
        templateUrl: "views/home/",
        controller: "HomeController",
        resolve: {
          routes: function() { return [
            {i18n: true, route: 'HOME'},
            {i18n: true, route: 'DISCUSS'},
            {i18n: true, route: 'DISCUSS'},
            {i18n: true, route: 'DISCUSS'},
            {i18n: false, route: 'A+B Problem'}
          ]; }
        }
      })
      .when('/help/about', {
        templateUrl: "views/home/",
        controller: "HomeController",
        resolve: {
          routes: function(){ return [{i18n: true, route: 'ABOUT'}]; }
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
    }
  ]);
});
