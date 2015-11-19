import Ember from 'ember';

export default Ember.Route.extend({
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