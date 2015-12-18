define([
  'app'
], function(app) {
  'use strict';
  return app.controller('SidebarController', [
    "$scope",
    function($scope) {
      $scope.user = {
        avatar: "/images/avatar.jpg"
      };
      $scope.menuItems = {
        top: [
          {
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
              'icon': 'forum'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_STATUS',
              'icon': 'list'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_RANK',
              'icon': 'rank'
          }],
          middle: {
            login: [
              {
                'url': 'Help',
                'name': 'SIDEBAR_PROFILE',
                'icon': 'help'
              }, {
                'url': 'Help',
                'name': 'SIDEBAR_INBOX',
                'icon': 'chat'
              }, {
                'url': 'Help',
                'name': 'SIDEBAR_SETTING',
                'icon': 'settings'
              }, {
                'url': 'Help',
                'name': 'SIDEBAR_LOGOUT',
                'icon': 'exit'
              }
            ],
            logout: [
              {
                'url': 'Help',
                'name': 'SIDEBAR_REGISTER',
                'icon': 'help'
              }, {
                'url': 'Help',
                'name': 'SIDEBAR_LOGIN',
                'icon': 'help'
              }
            ]
          },
          bottom: [
            {
              'url': 'help/about',
              'name': 'SIDEBAR_ABOUT',
              'icon': 'help'
            }, {
              'url': 'Help',
              'name': 'SIDEBAR_TOS',
              'icon': 'help'
            }, {
              'url': 'Help',
              'name': 'SIDEBAR_HELP',
              'icon': 'help'
            }, {
              'url': 'Help',
              'name': 'SIDEBAR_FEEDBACK',
              'icon': 'feedback'
            }, {
              'url': 'Help',
              'name': 'SIDEBAR_LANGUAGE',
              'icon': 'help'
            }
          ]
        };
    }
  ]);
});
