'use strict';

var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('../webpack.config.js').merge({
    filename: __filename,
    entry: {
        vendor: [
            'consolelog',
            'es5-shim',
            'es5-shim/es5-sham',
            'es6-shim',
            'es6-shim/es6-sham',
            'json3',
            'html5shiv',
            'html5shiv/dist/html5shiv-printshiv.js',
            'respond'
        ]
    }
});
