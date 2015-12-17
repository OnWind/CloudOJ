define([
  'app',
  './zh_cn',
], function(app, i18n_zh_cn) {
  'use strict';
  return app.config(['$translateProvider', function($translateProvider) {
      $translateProvider.translations('zh', i18n_zh_cn);
      $translateProvider.preferredLanguage('zh');
  }]);
});
