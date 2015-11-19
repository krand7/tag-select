define('tag-select/models/tag', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'),
    selected: DS['default'].attr('boolean')
  });

});