import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tags', { path: '/' }, function() {
    this.route('selected');
    this.route('unselected');
  });
});

export default Router;
