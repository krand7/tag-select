import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  selected: DS.attr('boolean'),
  valence: DS.attr('number')
});