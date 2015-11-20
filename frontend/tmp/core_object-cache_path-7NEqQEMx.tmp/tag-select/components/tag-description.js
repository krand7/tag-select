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