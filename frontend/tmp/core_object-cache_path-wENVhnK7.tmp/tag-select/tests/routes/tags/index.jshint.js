define('tag-select/tests/routes/tags/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags/index.js should pass jshint.\nroutes/tags/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/tags/index.js: line 4, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
  });

});