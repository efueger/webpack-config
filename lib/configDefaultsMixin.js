'use strict';

var _ = require('lodash');

var defaults = _.partialRight(_.merge, function recursiveDefaults() {
    if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
        return arguments[0];
    }

    return _.merge(arguments[0], arguments[1], recursiveDefaults);
});

/**
 * @alias ConfigDefaultsMixin
 */
var ConfigDefaultsMixin = {
    /**
     * Merges default options
     * @function
     * @param {Object=} options
     * @returns {Config}
     */
    defaults: function(options) {
        defaults(this, options);

        return this;
    }
};

/**
 * @module webpack-config/lib/configDefaultsMixin
 * @returns {ConfigDefaultsMixin}
 */
module.exports = ConfigDefaultsMixin;
