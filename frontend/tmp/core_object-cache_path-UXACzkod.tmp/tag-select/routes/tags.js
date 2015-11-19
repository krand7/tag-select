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