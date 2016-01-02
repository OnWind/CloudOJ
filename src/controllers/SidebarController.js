define([
  'app'
], function(app) {
  'use strict';
  return app.controller('SidebarController', [
    "$scope", "$translate", "$mdDialog", "$mdSidenav",
    function($scope, $translate, $mdDialog, $mdSidenav) {
      $scope.user = {
        avatar: "/images/avatar.jpg"
      };
      $scope.onSidenavClick = function() {
        $mdSidenav("left").close();
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
          subheader: "SIDEBAR_NAVIGATE",
          items: [
            {
              'url': 'home',
              'name': 'SIDEBAR_HOME',
              'icon': 'home',
              'class': 'primary'
            }, {
              'url': 'dashboard',
              'name': 'SIDEBAR_DASHBOARD',
              'icon': 'apps',
              'class': 'primary'
            }, {
              'url': 'problem',
              'name': 'SIDEBAR_PROBLEM',
              'icon': 'code',
              'class': 'primary'
            }, {
              'url': 'contest',
              'name': 'SIDEBAR_CONTEST',
              'icon': 'today',
              'class': 'primary'
            }, {
              'url': 'judge',
              'name': 'SIDEBAR_JUDGE',
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
              'class': 'accent'
            }, {
              'url': 'user/register',
              'name': 'SIDEBAR_REGISTER',
              'icon': 'open_in_new',
              'class': 'accent'
            }, {
              'url': 'user/login',
              'name': 'SIDEBAR_LOGIN',
              'icon': 'exit_to_app',
              'class': 'accent'
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
              'url': 'status',
              'name': 'SIDEBAR_STATUS',
              'icon': 'update'
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
