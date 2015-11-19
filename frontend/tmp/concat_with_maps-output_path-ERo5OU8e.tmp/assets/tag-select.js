"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('tag-select/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'tag-select/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('tag-select/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tag-select/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('tag-select/components/tag-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'div'
  });

});
define('tag-select/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tag-select/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tag-select/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tag-select/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('tag-select/initializers/export-application-global', ['exports', 'ember', 'tag-select/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('tag-select/models/tag', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'),
    isSelected: DS['default'].attr('boolean')
  });

});
define('tag-select/router', ['exports', 'ember', 'tag-select/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('tags', { path: '/' }, function () {
      this.route('selected');
      this.route('unselected');
    });
  });

  exports['default'] = Router;

});
define('tag-select/routes/tags/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.modelFor('tags');
    }
  });

});
define('tag-select/routes/tags/selected', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('tag-select/routes/tags/unselected', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('tag-select/routes/tags', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      var tags = [{
        title: 'HTML/HAML',
        isSelected: true
      }, {
        title: 'CSS/SCSS',
        isSelected: false
      }, {
        title: 'JavaScript/CoffeeScript',
        isSelected: false
      }, {
        title: 'EmberJS',
        isSelected: false
      }, {
        title: 'Ruby on Rails',
        isSelected: false
      }];
      return tags;
    }
  });

});
define('tag-select/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Select Your Tags");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tag-select/templates/components/tag-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/components/tag-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","checkbox");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) { dom.repairClonedNode(element0,[],true); }
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element0, 'checked');
        morphs[2] = dom.createAttrMorph(element1, 'for');
        morphs[3] = dom.createAttrMorph(element1, 'class');
        morphs[4] = dom.createMorphAt(element1,1,1);
        morphs[5] = dom.createMorphAt(element1,3,3);
        return morphs;
      },
      statements: [
        ["attribute","id",["concat",[["get","tag.title",["loc",[null,[1,29],[1,38]]]]]]],
        ["attribute","checked",["concat",[["subexpr","if",[["get","tag.isSelected",["loc",[null,[1,56],[1,70]]]],"checked"],[],["loc",[null,[1,51],[1,82]]]]]]],
        ["attribute","for",["concat",[["get","tag.title",["loc",[null,[2,14],[2,23]]]]]]],
        ["attribute","class",["concat",[["subexpr","if",[["get","tag.isSelected",["loc",[null,[2,39],[2,53]]]],"selected"],[],["loc",[null,[2,34],[2,66]]]]]]],
        ["content","tag.title",["loc",[null,[3,2],[3,15]]]],
        ["content","tag.isSelected",["loc",[null,[3,17],[3,35]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tag-select/templates/tags/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "tag-select/templates/tags/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","tag-item",[],["tag",["subexpr","@mut",[["get","tag",["loc",[null,[2,17],[2,20]]]]],[],[]]],["loc",[null,[2,2],[2,22]]]]
        ],
        locals: ["tag"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/tags/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[1,8],[1,13]]]]],[],0,null,["loc",[null,[1,0],[3,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tag-select/templates/tags/selected', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/tags/selected.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tag-select/templates/tags/unselected', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/tags/unselected.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tag-select/templates/tags', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "tag-select/templates/tags.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Select all that apply");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[2,0],[2,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tag-select/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('tag-select/tests/components/tag-item.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/tag-item.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/tag-item.js should pass jshint.'); 
  });

});
define('tag-select/tests/helpers/resolver', ['exports', 'ember/resolver', 'tag-select/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('tag-select/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('tag-select/tests/helpers/start-app', ['exports', 'ember', 'tag-select/app', 'tag-select/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('tag-select/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('tag-select/tests/models/tag.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/tag.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/tag.js should pass jshint.'); 
  });

});
define('tag-select/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('tag-select/tests/routes/tags/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/index.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/tags/index.js should pass jshint.'); 
  });

});
define('tag-select/tests/routes/tags/selected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/selected.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/tags/selected.js should pass jshint.'); 
  });

});
define('tag-select/tests/routes/tags/unselected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/unselected.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/tags/unselected.js should pass jshint.'); 
  });

});
define('tag-select/tests/routes/tags.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/tags.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/tags.js should pass jshint.'); 
  });

});
define('tag-select/tests/test-helper', ['tag-select/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('tag-select/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('tag-select/tests/unit/models/tag-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('tag', 'Unit | Model | tag', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('tag-select/tests/unit/models/tag-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/tag-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/tag-test.js should pass jshint.'); 
  });

});
define('tag-select/tests/unit/routes/tags/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:tags/index', 'Unit | Route | tags/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('tag-select/tests/unit/routes/tags/index-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/tags');
  QUnit.test('unit/routes/tags/index-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/tags/index-test.js should pass jshint.'); 
  });

});
define('tag-select/tests/unit/routes/tags/selected-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:tags/selected', 'Unit | Route | tags/selected', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('tag-select/tests/unit/routes/tags/selected-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/tags');
  QUnit.test('unit/routes/tags/selected-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/tags/selected-test.js should pass jshint.'); 
  });

});
define('tag-select/tests/unit/routes/tags/unselected-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:tags/unselected', 'Unit | Route | tags/unselected', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('tag-select/tests/unit/routes/tags/unselected-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/tags');
  QUnit.test('unit/routes/tags/unselected-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/tags/unselected-test.js should pass jshint.'); 
  });

});
define('tag-select/tests/unit/routes/todos/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:todos/index', 'Unit | Route | todos/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('tag-select/tests/unit/routes/todos/index-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/todos');
  QUnit.test('unit/routes/todos/index-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/todos/index-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

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
//# sourceMappingURL=tag-select.map