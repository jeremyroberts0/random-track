import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitArtistForm() {
      var artist = $(this.element).find('input[name="arist"]').val();
      var newUrl = '/artist/' + encodeURIComponent(artist);
      var controller = this.get('controller');
      document.location.href = newUrl; // This is really lame but out of time and can't figure out from the docs how to do this right
    }
  }
});
