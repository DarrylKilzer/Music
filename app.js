function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  var songs = document.getElementById("songs");
  var audio = document.getElementById("audio");

  function drawSongs(songList) {
    console.log(songList);
    // This is where your task begins
    var template = "";
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      template += `
    <div class="col-md-5 col-md-offset-1">
      <div class="panel panel-default">
        <div class="panel-heading"
          <h4 class="panel-title"><strong>${song.artist}</strong></h4>
        </div>
        <div class="panel-body">
          <img height="100px" width="100px" style="center" src="${song.albumArt}">
          <ul style="list-style: none">
          <li><strong>Collection: ${song.collection}</strong></li>
          <li><strong>Price: $${song.price}</strong></li>
          <li><strong>Song Title: ${song.title}</strong></h4>
          <li><audio id="audio" controls><source src="${song.preview}" type="audio/ogg"></audio> </li>
        </div>
      </div>
    </div>
      `
    }
    songs.innerHTML = template;
  }
}



var itunesCtrl = new ItunesController()
