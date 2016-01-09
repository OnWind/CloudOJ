define([
    'angular',
    'angular-route',
    'angular-translate',
    'angular-resource',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-sanitize'
], function (angular) {
    'use strict';

    return angular.module("ojApp", [
        "ngRoute",
        "ngResource",
        "ngAria",
        "ngAnimate",
        "ngMaterial",
        "ngSanitize",
        "pascalprecht.translate"
    ]);
});
