if (!window.Intl) {
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var MESSAGES = {};
MESSAGES.es = require('./es');
MESSAGES['en-US'] = require('./en-US');

var locale = localStorage.locale || 'es';

module.exports = {
    message: function (text, opts) {
        opts = opts || {};
        var mf = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
        return mf.format(opts);
    },
    date: new IntlRelativeFormat(locale)
}


