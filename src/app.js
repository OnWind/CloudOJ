define([
    'angular',
    'config',
    'angular-route',
    'angular-translate',
    'angular-resource',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-sanitize',
    'angulartics',
    'angulartics-module'
], function (angular, config) {
    'use strict';

    return angular.module("ojApp", [
        "ngRoute",
        "ngResource",
        "ngAria",
        "ngAnimate",
        "ngMaterial",
        "ngSanitize",
        "pascalprecht.translate",
        "angulartics",
        "angulartics." + config.angulartics.module
    ]);
});
