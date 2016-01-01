# CloudOJ

[![Build Status](https://travis-ci.org/OnWind/CloudOJ.svg?branch=master)](https://travis-ci.org/OnWind/CloudOJ)
[![Dependency Status](https://david-dm.org/OnWind/CloudOJ.svg)](https://david-dm.org/OnWind/CloudOJ)
[![devDependency Status](https://david-dm.org/OnWind/CloudOJ/dev-status.svg)](https://david-dm.org/OnWind/CloudOJ#info=devDependencies)

The new CloudOJ, made with Node.js.

## License

BSD 3-Clause "New" or "Revised" license

## Make your own CloudOJ

Change site name in `src/i18n/<region>.js` `src/config/config.js`
and `config.js`

## Deploy

    git clone https://github.com/OnWind/CloudOJ && cd CloudOJ
    npm install
    npm install -g gulp
    gulp build

Then CloudOJ is configured.

## Development

    npm install -g bower
    bower install
    gulp dependence
    gulp watch --env development

Then gulp will start server at localhost:3000 and build all necessary files.
