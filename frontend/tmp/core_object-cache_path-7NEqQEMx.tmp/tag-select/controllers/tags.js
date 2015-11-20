define('tag-select/controllers/tags', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    sortProperties: ['title'],
    sortAscending: true
  });

});