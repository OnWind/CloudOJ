define([
  'app'
], function(app) {
  'use strict';
  return app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: "views/home/",
        controller: "HomeController",
        resolve: {
          message: function(){return "Hello, CloudOJ";}
        }
      })
      .when('/help/about', {
        templateUrl: "views/home/",
        controller: "HomeController",
        resolve: {
          message: function(){return "Hello, SkyZH";}
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    }
  ]);
});
