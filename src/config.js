define([
  'app'
], function(app) {
  'use strict';
  return {
    site: {
      name: "<%= config.site.name %>"
    },
    angulartics: {
      module: "<%= config.angulartics.name[config.angulartics.module] %>"
    }
  };
});
