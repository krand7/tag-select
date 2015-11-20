define('tag-select/tests/routes/tags.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/tags.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags.js should pass jshint.\nroutes/tags.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/tags.js: line 4, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nroutes/tags.js: line 5, col 37, Missing semicolon.\n\n4 errors'); 
  });

});