/* jshint ignore:start */

define('tag-select/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"tag-select","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"tag-select","version":"0.0.0+51755f2d"},"contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net","font-src":"'self' data: use.typekit.net","connect-src":"'self'","style-src":"'self' 'unsafe-inline' use.typekit.net","img-src":"'self'","media-src":"'self'"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","exportApplicationGlobal":true}};
});

if (runningTests) {
  require("tag-select/tests/test-helper");
} else {
  require("tag-select/app")["default"].create({"name":"tag-select","version":"0.0.0+51755f2d"});
}

/* jshint ignore:end */
