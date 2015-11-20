define('tag-select/adapters/application', ['exports', 'active-model-adapter'], function (exports, ActiveModelAdapter) {

  'use strict';

  // import DS from 'ember-data';
  exports['default'] = ActiveModelAdapter['default'].extend().reopen({
    init: function init() {
      this._super();
      var token = $('meta[name="csrf-token"]').attr('content');

      this.headers = {
        'X-CSRF-Token': token
      };
    }
  });
  // export default DS.FixtureAdapter.extend();

});