import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['tag-description-container'],
  possibleDescriptions: ["You're probably mad if you enjoy using",
                          "There must be something better than",
                          "I have a complicated relationship with",
                          "I really, thorougly enjoy using",
                          "I'm head over heels in love with"],

  computedDescription: Ember.computed('valence', function(){
    var valence = this.get('valence')-1;
    var possibleDescriptions = this.get('possibleDescriptions');
    return possibleDescriptions[valence];
  }),

  actions: {
    increaseValence: function() {
      this.sendAction('increaseValence', this.get('tag'));
    },
    decreaseValence: function() {
      this.sendAction('decreaseValence', this.get('tag'));
    }
  }
}).reopenClass({
  positionalParams: ['title', 'valence']
});