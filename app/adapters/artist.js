import Spotify from '../libs/spotify';

export default DS.Adapter.extend({
  namespace:'/artist',
  findRecord() {

  },
  createRecord() {

  },
  updateRecord() {

  },
  deleteRecord() {

  },
  findAll() {

  },
  queryRecord(store, type, query, recordArray) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      Spotify.getRandomTrackFromArtist(query).then(function(track) {
        // Transform the track object into something we like
        console.error(track);
      }, reject);
    });
  }
});
