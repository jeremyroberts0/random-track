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
        var artist = track.artists[0];
        var trackToReturn = {
          id: track.id,
          artistName: artist.name,
          albumName: track.album.name,
          name: track.name,
          number: track.track_number,
          explicit: track.explicit,
          duration: track.duration_ms,
          uri: track.uri
        };
        resolve(trackToReturn);
      }, reject);
    });
  }
});
