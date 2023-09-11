// let musica = document.getElementById("rsSound");
            
//             function enableMute() { 
//                 musica.muted = true;

//             } 
            
//             function disableMute() { 
//                 musica.muted = false;
//             } 
function toggleMute() {
    var myAudio = document.getElementById('rsSound');
    myAudio.muted = !myAudio.muted;
 }