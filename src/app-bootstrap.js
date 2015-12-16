define([
    'angular',
    'app',
    './controllers/index',
    './library/index',
    './routes/index',
    './models/index',
    './i18n/index',
    './config/index'
], function(angular) {
    'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['ojApp']);
    });
});
