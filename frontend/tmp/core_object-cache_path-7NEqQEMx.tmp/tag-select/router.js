define('tag-select/router', ['exports', 'ember', 'tag-select/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('tags', { path: '/' }, function () {
      this.route('selected');
      this.route('unselected');
    });
  });

  exports['default'] = Router;

});