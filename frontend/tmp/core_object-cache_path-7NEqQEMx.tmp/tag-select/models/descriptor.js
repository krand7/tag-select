define('tag-select/models/descriptor', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    text: DS['default'].attr('string'),
    valence: DS['default'].attr('number')
  });

});