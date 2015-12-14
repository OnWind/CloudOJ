define([
    'angular',
    'angular-route',
    'angular-translate',
    'angular-resource',
    'angular-animate',
    'angular-aria',
    'angular-material'
], function (angular) {
    'use strict';
    return angular.module("ojApp", [
        "ngRoute",
        "ngResource",
        "ngAria",
        "ngAnimate",
        "pascalprecht.translate",
        "ngMaterial"
    ]);
});
