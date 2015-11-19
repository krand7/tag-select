import Ember from 'ember';

export default Ember.Route.extend({
  model: function model() {
    return Ember.RSVP.hash({
      tags: this.store.findAll('tag')
    });
  }
});