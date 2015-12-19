define([
  'app',
  './config'
], function(app) {
  'use strict';
  app.config(["$mdThemingProvider", function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('amber')
      .backgroundPalette('grey');
  }]);
});
