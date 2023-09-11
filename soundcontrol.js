
var myAudio = document.getElementById('rsSound');
var isPlaying = false;
myAudio.play
function togglePlay() {
    
    isPlaying ? myAudio.pause() : myAudio.play();
}
myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
  };
