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