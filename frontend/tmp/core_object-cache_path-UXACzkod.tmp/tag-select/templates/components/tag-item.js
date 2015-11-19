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