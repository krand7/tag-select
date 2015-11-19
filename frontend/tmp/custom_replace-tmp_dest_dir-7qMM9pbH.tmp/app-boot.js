/* jshint ignore:start */

define('tag-select/config/environment', ['ember'], function(Ember) {
  var prefix = 'tag-select';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("tag-select/tests/test-helper");
} else {
  require("tag-select/app")["default"].create({"name":"tag-select","version":"0.0.0+14bc3665"});
}

/* jshint ignore:end */
