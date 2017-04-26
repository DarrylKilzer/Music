function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList);
    // This is where your task begins
    var template = "";
    for (var i = 0; i < songList.length; i++) {
      var songs = songList[i]
      template += `
      
      `
    }
    songList.innerHTML = template;
  }
}



var itunesCtrl = new ItunesController()
