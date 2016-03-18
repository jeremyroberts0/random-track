import DS from 'ember-data';

// TOOD: proper schema
export default DS.Model.extend({
  name:DS.attr('string'),
  number: DS.attr('number'),
  duration: DS.attr('number'),
  explicit: DS.attr('boolean'),
  uri: DS.attr('string'),
  artistName: DS.attr('string'),
  albumName: DS.attr('string'),
});
