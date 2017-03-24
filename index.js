/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sanitize',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this._super.included(target);

    target.import('vendor/Sanitize.js/lib/sanitize.js');
    target.import('vendor/Sanitize.js/lib/sanitize/config/basic.js');
    target.import('vendor/Sanitize.js/lib/sanitize/config/relaxed.js');
    target.import('vendor/Sanitize.js/lib/sanitize/config/restricted.js');
    target.import('vendor/shims/sanitize.js');
  }

};
