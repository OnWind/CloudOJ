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
      .when('/problem', {
        templateUrl: "views/problem/index.html",
        controller: "ProblemController",
        resolve: {
          routes: function(){ return [{i18n_title: 'PROBLEM'}]; }
        }
      })
      .when('/judge', {
        templateUrl: "views/judge/index.html",
        controller: 'JudgeController',
        resolve: {
          routes: function(){ return [{i18n_title: 'JUDGE'}]; }
        }
      })
      .when('/', {
        redirectTo: '/home'
      })
      .when('/error', {
        templateUrl: "views/error/index.html",
        controller: "ErrorController",
        resolve: {
          routes: function() { return [{i18n_title: 'ERROR'}]; },
          error: function() { return {code: 404}; }
        }
      })
      .otherwise({
        redirectTo: '/error'
      });
    }
  ]);
});
