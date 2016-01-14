require.config({
    baseUrl: ".",
    paths: {
        "app": "app",
        "app-bootstrap": "app-bootstrap",
        "config": "config",
        "angular": "static/angular/angular.min",
        "angular-route": "static/angular-route/angular-route.min",
        "angular-translate": "static/angular-translate/angular-translate.min",
        "angular-resource": "static/angular-resource/angular-resource.min",
        "angular-aria": "static/angular-aria/angular-aria.min",
        "angular-animate": "static/angular-animate/angular-animate.min",
        "angular-material": "static/angular-material/angular-material.min",
        "angular-sanitize": "static/angular-sanitize/angular-sanitize.min",
        "angulartics": "static/angulartics/dist/angulartics.min",
        "angulartics-module": "<%=config.angulartics.paths.development[config.angulartics.module] %>"
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
    },
    deps: ["app-bootstrap"]
});
