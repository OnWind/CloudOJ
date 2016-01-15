
define([
  'app',
  'angular'
], function(app, angular) {
  'use strict';
  return app.controller('HelpController', [
    "$scope", "$routeParams", "routes", "content", "$compile",
    function($scope, $routeParams, routes, content, $compile) {
      console.log(this);
      var contentObj = angular.element(document.getElementById("content"));
      contentObj.html(content);
      $compile(contentObj.contents())($scope);
      routes.push({
        title: document.getElementById("title").innerText,
        href: 'help/' + ($routeParams.id || 'index')
      });
    }
  ]);
});
