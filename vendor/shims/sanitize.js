(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Sanitize'] };
  }

  define('sanitize', [], vendorModule);
})();
