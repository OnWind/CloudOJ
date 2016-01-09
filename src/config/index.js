define([
  'app',
  'config'
], function(app, config) {
  'use strict';
  app.config(["$mdThemingProvider", function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('amber');
    $mdThemingProvider.theme('home')
      .primaryPalette('blue')
      .accentPalette('amber');
  }]);
  return app.constant('config', config);
});
