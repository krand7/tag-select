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