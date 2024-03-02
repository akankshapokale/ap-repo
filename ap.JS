const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');

playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = 'Play';
  }
});

stopBtn.addEventListener('click', function() {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.innerHTML = 'Play';
});