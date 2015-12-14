define([
    'angular',
    'app',
    './controllers/index'
], function(angular) {
    'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['ojApp']);
    });
});
