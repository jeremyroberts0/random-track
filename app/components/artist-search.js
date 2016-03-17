import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeArtist(artist) {
      // TODO: handle artist change
      console.error(artist);
    },
    submitArtistForm(event) {
      var artist = $(this.element).find('input[name="arist"]').val();
      this.actions.changeArtist(artist);
    }
  }
});
