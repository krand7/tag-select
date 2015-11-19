define('tag-select/routes/tags/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.modelFor('tags');
    }
  });

});