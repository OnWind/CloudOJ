require.config({
    paths: {
        "angular": "//cdn.bootcss.com/angular.js/1.4.8/angular.min",
        "angular-route": "//cdn.bootcss.com/angular.js/1.4.8/angular-route.min",
        "angular-translate": "//cdn.bootcss.com/angular-translate/2.8.1/angular-translate.min",
        "angular-resource": "//cdn.bootcss.com/angular.js/1.4.8/angular-resource.min",
        "angular-aria": "//cdn.bootcss.com/angular.js/1.4.8/angular-aria.min",
        "angular-animate": "//cdn.bootcss.com/angular.js/1.4.8/angular-animate.min",
        "angular-material": "//cdn.bootcss.com/angular-material/1.0.1/angular-material.min",
        "angular-sanitize": "//cdn.bootcss.com/angular.js/1.4.8/angular-sanitize.min",
        "angulartics": "//cdn.bootcss.com/angulartics/1.0.3/angulartics.min",
        "angulartics-module": "<%=config.angulartics.paths.production[config.angulartics.module] %>"
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
        },
        "angular-sanitize": {
            deps: ['angular'],
            exports: "angular-sanitize"
        },
        "angulartics": {
            deps: ['angular'],
            exports: "angulartics"
        },
        "angulartics-module": {
            deps: ['angular'],
            exports: 'angulartics-module'
        }
    }
});

require(['app-bootstrap']);
