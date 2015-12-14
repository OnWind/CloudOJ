require.config({
    paths: {
        "app": "app/index",
        "app-bootstrap": "app/app-bootstrap",
        "angular": "//cdn.bootcss.com/angular.js/1.4.8/angular.min",
        "angular-route": "//cdn.bootcss.com/angular.js/1.4.8/angular-route.min",
        "angular-translate": "//cdn.bootcss.com/angular-translate/2.8.1/angular-translate.min",
        "angular-resource": "//cdn.bootcss.com/angular.js/1.4.8/angular-resource.min",
        "angular-aria": "//cdn.bootcss.com/angular.js/1.4.8/angular-aria.min",
        "angular-animate": "//cdn.bootcss.com/angular.js/1.4.8/angular-animate.min",
        "angular-material": "//cdn.bootcss.com/angular-material/1.0.0-rc7/angular-material.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        'angular-route': {
            deps: ['angular'],
            exports: "angular-route"
        },
        "angular-translate": {
            deps: ['angular'],
            exports: "angular-translate"
        },
        "angular-resource": {
            deps: ['angular'],
            exports: "angular-resource"
        },
        "angular-aria": {
            deps: ['angular'],
            exports: "angular-aria"
        },
        "angular-animate": {
            deps: ['angular'],
            exports: "angular-animate"
        },
        "angular-material": {
            deps: ['angular'],
            exports: "angular-material"
        }
    },
    deps: ["app-bootstrap"]
});
