class Helper {
  playPauseAndUpdate (song) {
    const totalTime =  player.getDuration(song);
    const wrappedTotalTime = player.prettyTime(totalTime);
    $('#time-control .total-time').text( wrappedTotalTime );
    player.playPause(song);
  }
}

const helper = new Helper();
