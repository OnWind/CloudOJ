define([
  'app'
], function(app) {
  'use strict';
  return app.controller('SidebarController', [
    "$scope", "$translate", "$mdDialog",
    function($scope, $translate, $mdDialog) {
      $scope.user = {
        avatar: "/images/avatar.jpg"
      };
      $scope.showSearch = function(ev) {
        $mdDialog.show({
          controller: "SearchController",
          templateUrl: 'views/search/index.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        });
      };
      $scope.menus = [
        {
          items: [
            {
                'url': 'home',
                'name': 'SIDEBAR_HOME',
                'icon': 'home',
                'icon_class': 'primary'
            }, {
                'url': 'problem',
                'name': 'SIDEBAR_PROBLEM',
                'icon': 'apps',
                'icon_class': 'primary'
            }, {
                'url': 'contest',
                'name': 'SIDEBAR_CONTEST',
                'icon': 'today',
                'icon_class': 'primary'
            }, {
                'url': 'status',
                'name': 'SIDEBAR_STATUS',
                'icon': 'update'
            }, {
                'url': 'discuss',
                'name': 'SIDEBAR_DISCUSS',
                'icon': 'forum'
            }, {
                'url': 'rank',
                'name': 'SIDEBAR_RANK',
                'icon': 'trending_up'
            }
          ]
        }, {
          subheader: "SIDEBAR_PERSONAL",
          items: [
            {
              'url': 'profile',
              'name': 'SIDEBAR_PROFILE',
              'icon': 'account_box'
            }, {
              'url': 'help',
              'name': 'SIDEBAR_INBOX',
              'icon': 'chat'
            }, {
              'url': 'setting',
              'name': 'SIDEBAR_SETTING',
              'icon': 'settings'
            }, {
              'url': 'user/logout',
              'name': 'SIDEBAR_LOGOUT',
              'icon': 'input',
              'icon_class': 'accent'
            }, {
              'url': 'user/register',
              'name': 'SIDEBAR_REGISTER',
              'icon': 'open_in_new',
              'icon_class': 'accent'
            }, {
              'url': 'user/login',
              'name': 'SIDEBAR_LOGIN',
              'icon': 'exit_to_app',
              'icon_class': 'accent'
            }
          ]
        }, {
          subheader: "SIDEBAR_WEBSITE",
            items: [
            {
              'url': 'help/about',
              'name': 'SIDEBAR_ABOUT',
              'icon': 'info'
            }, {
              'url': 'help/tos',
              'name': 'SIDEBAR_TOS',
              'icon': 'assignment'
            }, {
              'url': 'help',
              'name': 'SIDEBAR_HELP',
              'icon': 'help'
            }, {
              'url': 'help/feedback',
              'name': 'SIDEBAR_FEEDBACK',
              'icon': 'feedback'
            }, {
              'url': 'locale',
              'name': 'SIDEBAR_LANGUAGE',
              'icon': 'language'
            }
          ]
        }
      ];
    }
  ]);
});
