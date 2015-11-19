define('tag-select/tests/routes/tags/unselected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/unselected.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags/unselected.js should pass jshint.\nroutes/tags/unselected.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags/unselected.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});