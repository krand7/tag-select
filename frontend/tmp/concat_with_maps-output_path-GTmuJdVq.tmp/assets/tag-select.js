"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('tag-select/adapters/application', ['exports', 'active-model-adapter'], function (exports, ActiveModelAdapter) {

  'use strict';

  // import DS from 'ember-data';
  exports['default'] = ActiveModelAdapter['default'].extend().reopen({
    init: function init() {
      this._super();
      var token = $('meta[name="csrf-token"]').attr('content');

      this.headers = {
        'X-CSRF-Token': token
      };
    }
  });
  // export default DS.FixtureAdapter.extend();

});
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
define('tag-select/components/tag-description', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'p',
    classNames: ['tag-description-container'],
    possibleDescriptions: ["You're probably mad if you enjoy using", "There must be something better than", "I have a complicated relationship with", "I really, thorougly enjoy using", "I'm head over heels in love with"],

    computedDescription: Ember['default'].computed('valence', function () {
      var valence = this.get('valence') - 1;
      var possibleDescriptions = this.get('possibleDescriptions');
      return possibleDescriptions[valence];
    }),

    actions: {
      increaseValence: function increaseValence() {
        this.sendAction('increaseValence', this.get('tag'));
      },
      decreaseValence: function decreaseValence() {
        this.sendAction('decreaseValence', this.get('tag'));
      }
    }
  }).reopenClass({
    positionalParams: ['title', 'valence']
  });

});
define('tag-select/components/tag-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['checkbox-container']
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
define('tag-select/controllers/tags', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    sortProperties: ['title'],
    sortAscending: true
  });

});
define('tag-select/initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', ActiveModelAdapter['default']);
      application.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

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
define('tag-select/models/descriptor', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    text: DS['default'].attr('string'),
    valence: DS['default'].attr('number')
  });

});
define('tag-select/models/tag', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'),
    selected: DS['default'].attr('boolean'),
    valence: DS['default'].attr('number')
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
      return this.store.findAll('tag');
    },

    actions: {
      increaseValence: function increaseValence(tag) {
        var currentValence = tag.get('valence');
        if (currentValence == 5) {
          console.log("Can't go higher");
        } else {
          tag.set('valence', currentValence + 1);
        }
      },
      decreaseValence: function decreaseValence(tag) {
        var currentValence = tag.get('valence');
        if (currentValence == 1) {
          console.log("Can't go lower");
        } else {
          tag.set('valence', currentValence - 1);
        }
      }
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
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1,"class","centered light");
        var el2 = dom.createTextNode("How do you feel about various coding languages?");
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
define('tag-select/templates/components/tag-description', ['exports'], function (exports) {

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
        "moduleName": "tag-select/templates/components/tag-description.hbs"
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
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","highlight");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","arrow-up");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","arrow-down");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(fragment, [6]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[2] = dom.createElementMorph(element0);
        morphs[3] = dom.createElementMorph(element1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","computedDescription",["loc",[null,[1,0],[1,23]]]],
        ["content","title",["loc",[null,[2,24],[2,33]]]],
        ["element","action",["increaseValence",["get","tag",["loc",[null,[3,50],[3,53]]]]],["on","click"],["loc",[null,[3,23],[3,66]]]],
        ["element","action",["decreaseValence",["get","tag",["loc",[null,[4,52],[4,55]]]]],["on","click"],["loc",[null,[4,25],[4,68]]]]
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1,"class","label");
        var el2 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'for');
        morphs[2] = dom.createMorphAt(element0,1,1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","checkbox","id",["subexpr","@mut",[["get","tag.title",["loc",[null,[1,27],[1,36]]]]],[],[]],"checked",["subexpr","@mut",[["get","tag.selected",["loc",[null,[1,45],[1,57]]]]],[],[]],"class","checkbox"],["loc",[null,[1,0],[1,76]]]],
        ["attribute","for",["concat",[["get","tag.title",["loc",[null,[2,14],[2,23]]]]]]],
        ["content","tag.title",["loc",[null,[3,2],[3,15]]]]
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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "tag-select/templates/tags/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
          ["inline","tag-item",[],["tag",["subexpr","@mut",[["get","tag",["loc",[null,[3,19],[3,22]]]]],[],[]]],["loc",[null,[3,4],[3,24]]]]
        ],
        locals: ["tag"],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.2",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "tag-select/templates/tags/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
            ["inline","tag-description",[["get","tag.title",["loc",[null,[12,22],[12,31]]]],["get","tag.valence",["loc",[null,[12,32],[12,43]]]]],["increaseValence","increaseValence","decreaseValence","decreaseValence","tag",["subexpr","@mut",[["get","tag",["loc",[null,[12,116],[12,119]]]]],[],[]]],["loc",[null,[12,4],[12,121]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
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
          ["block","if",[["get","tag.selected",["loc",[null,[11,8],[11,20]]]]],[],0,null,["loc",[null,[11,2],[13,9]]]]
        ],
        locals: ["tag"],
        templates: [child0]
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
            "line": 16,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","tag-option-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","tag-selected-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[2,10],[2,15]]]]],[],0,null,["loc",[null,[2,2],[4,11]]]],
        ["block","each",[["get","model",["loc",[null,[10,8],[10,13]]]]],[],1,null,["loc",[null,[10,0],[14,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
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
            "line": 4,
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
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"class","centered light");
        var el2 = dom.createTextNode("Select all that apply");
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
define('tag-select/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\nadapters/application.js: line 11, col 6, Missing semicolon.\n\n3 errors'); 
  });

});
define('tag-select/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});
define('tag-select/tests/components/tag-description.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/tag-description.js should pass jshint', function(assert) { 
    assert.ok(false, 'components/tag-description.js should pass jshint.\ncomponents/tag-description.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/tag-description.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/components/tag-item.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/tag-item.js should pass jshint', function(assert) { 
    assert.ok(false, 'components/tag-item.js should pass jshint.\ncomponents/tag-item.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/tag-item.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/controllers/tags.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/tags.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/tags.js should pass jshint.\ncontrollers/tags.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/tags.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
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
define('tag-select/tests/models/descriptor.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/descriptor.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/descriptor.js should pass jshint.\nmodels/descriptor.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/descriptor.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/models/tag.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/tag.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/tag.js should pass jshint.\nmodels/tag.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/tag.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 15, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
  });

});
define('tag-select/tests/routes/tags/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/index.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags/index.js should pass jshint.\nroutes/tags/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/tags/index.js: line 4, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
  });

});
define('tag-select/tests/routes/tags/selected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/selected.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags/selected.js should pass jshint.\nroutes/tags/selected.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags/selected.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/routes/tags/unselected.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/tags');
  QUnit.test('routes/tags/unselected.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags/unselected.js should pass jshint.\nroutes/tags/unselected.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags/unselected.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('tag-select/tests/routes/tags.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/tags.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/tags.js should pass jshint.\nroutes/tags.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/tags.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/tags.js: line 4, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nroutes/tags.js: line 5, col 37, Missing semicolon.\n\n4 errors'); 
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
  return { 'default': {"modulePrefix":"tag-select","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"tag-select","version":"0.0.0+51755f2d"},"contentSecurityPolicy":{"default-src":"'none'","script-src":"'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net","font-src":"'self' data: use.typekit.net","connect-src":"'self'","style-src":"'self' 'unsafe-inline' use.typekit.net","img-src":"'self'","media-src":"'self'"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","exportApplicationGlobal":true}};
});

if (runningTests) {
  require("tag-select/tests/test-helper");
} else {
  require("tag-select/app")["default"].create({"name":"tag-select","version":"0.0.0+51755f2d"});
}

/* jshint ignore:end */
//# sourceMappingURL=tag-select.map