class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    const wrappedTotalTime = player.prettyTime(totalTime);
    $('#time-control .total-time').text( wrappedTotalTime );
  }
}

const helper = new Helper();
