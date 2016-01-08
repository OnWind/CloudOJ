
define([
  'app'
], function(app) {
  'use strict';
  return app.controller('HelpController', [
    "$scope", "$routeParams", "routes",
    function($scope, $routeParams, routes) {
      $scope.url = '/views/help/zh_cn/' + ($routeParams.id || 'index') + '.html';
      routes.push({
        title: '关于',
        href: 'help/' + ($routeParams.id || 'index')
      });
    }
  ]);
});
