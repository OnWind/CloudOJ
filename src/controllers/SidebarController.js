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
              'icon': 'apps'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_CONTEST',
              'icon': 'today'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_STATUS',
              'icon': 'update'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_DISCUSS',
              'icon': 'forum'
          }, {
              'url': 'Help',
              'name': 'SIDEBAR_RANK',
              'icon': 'trending_up'
          }],
          middle: {
            login: [
              {
                'url': 'Help',
                'name': 'SIDEBAR_PROFILE',
                'icon': 'account_box'
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
                'icon': 'exit_to_app'
              }
            ],
            logout: [
              {
                'url': 'Help',
                'name': 'SIDEBAR_REGISTER',
                'icon': 'open_in_new'
              }, {
                'url': 'Help',
                'name': 'SIDEBAR_LOGIN',
                'icon': 'input'
              }
            ]
          },
          bottom: [
            {
              'url': 'help/about',
              'name': 'SIDEBAR_ABOUT',
              'icon': 'info'
            }, {
              'url': 'Help',
              'name': 'SIDEBAR_TOS',
              'icon': 'assignment'
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
              'icon': 'language'
            }
          ]
        };
    }
  ]);
});
