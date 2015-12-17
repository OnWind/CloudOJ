define([
  'app'
], function(app) {
  'use strict';
  return app.controller('SidebarController', [
    "$scope",
    function($scope) {
      $scope.menuItems = [{
            'url': 'Home',
            'name': 'SIDEBAR_HOME',
            'icon': 'home'
        }, {
            'url': 'Problem',
            'name': 'SIDEBAR_PROBLEM',
            'icon': 'help'
        }, {
            'url': 'Help',
            'name': 'SIDEBAR_CONTEST',
            'icon': 'help'
        }, {
            'url': 'Help',
            'name': 'SIDEBAR_DISCUSS',
            'icon': 'help'
        }, {
            'url': 'Help',
            'name': 'SIDEBAR_STATUS',
            'icon': 'help'
        }, {
            'url': 'Help',
            'name': 'SIDEBAR_RANK',
            'icon': 'help'
        }];
    }
  ]);
});
