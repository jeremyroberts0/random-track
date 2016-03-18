var domain = 'https://api.spotify.com/v1/';

function makeQueryString(params) {
  var paramArray = [ ];
  $.each(params, function(key, value){
    paramArray.push(key+'='+value);
  });
  return '?' + paramArray.join('&');
}

function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomIndex];
}

var Spotify = {
  getRandomTrackFromArtistQuery(query) {
    var params = {
      q:query.query,
      type:'artist',
      market:'US',
      limit:'1'
    };

    var queryString = makeQueryString(params);

    return new Promise(function(resolve, reject){
      $.ajax({
        url:domain+'search' + queryString,
        //headers: {
        //  Authorization:''
        //},
        success: function(result) {
          resolve(result.artists.items);
        },
        failure: reject
      });
    }).then(function(artists) {
      var artist = artists[0];
      return Spotify.getRandomTrack(artist.id);
    });
  },
  getRandomTrack(artistId) {
    return new Promise(function(resolve, reject){
      var params = {
        country: 'US'
      };

      $.ajax({
        url: domain + 'artists/' + artistId + '/top-tracks' + makeQueryString(params),
        //headers: {
        //  Authorization:''
        //},
        success: function(result) {
          var randomTrack = getRandomItem(result.tracks);
          resolve(randomTrack);
        },
        failure: reject
      })
    });
  }
};
export default Spotify;
