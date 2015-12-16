define([
  'app',
  './config'
], function(app) {
  'use strict';
  app.config(["$mdThemingProvider", function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('orange');
  }]);
});
