# CloudOJ

[![Build Status](https://travis-ci.org/WindHub/CloudOJ.svg?branch=master)](https://travis-ci.org/WindHub/CloudOJ)
[![Dependency Status](https://david-dm.org/WindHub/CloudOJ.svg)](https://david-dm.org/WindHub/CloudOJ)
[![devDependency Status](https://david-dm.org/WindHub/CloudOJ/dev-status.svg)](https://david-dm.org/WindHub/CloudOJ#info=devDependencies)

The new CloudOJ, made with Node.js.

## License

BSD 3-Clause "New" or "Revised" license

## Make your own CloudOJ

### Name

Change `site.name` in `config.json`

### Analytics

Change `angulartics.module` and `angulartics.id` in `config.json`

Current supported module:

*   `ga` (Google Analytics)

## Production

    git clone https://github.com/OnWind/CloudOJ && cd CloudOJ
    npm install -g gulp node-gyp && npm install
    gulp build

Then CloudOJ is configured.

## Development

    git clone https://github.com/OnWind/CloudOJ && cd CloudOJ
    npm install -g gulp node-gyp bower
    npm install
    bower install
    gulp dependence
    gulp watch --env development

Then gulp will start server at localhost:3000 and build all necessary files.
