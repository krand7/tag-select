// import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend().reopen({
  init: function init() {
    this._super();
    var token = $('meta[name="csrf-token"]').attr('content');

    this.headers = {
      'X-CSRF-Token': token
    };
  }
});
// export default DS.FixtureAdapter.extend();