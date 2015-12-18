define([
  'app',
  './config'
], function(app) {
  'use strict';
  app.config(["$mdThemingProvider", function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('cyan')
      .backgroundPalette('grey');
  }]);
});
