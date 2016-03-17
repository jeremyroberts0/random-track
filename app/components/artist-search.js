import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeArtist(artist) {
      // TODO: handle artist change
      var newUrl = '/artist/' + encodeURIComponent(artist);
      console.error(newUrl);
    },
    submitArtistForm() {
      var artist = $(this.element).find('input[name="arist"]').val();
      this.actions.changeArtist(artist);
    }
  }
});
