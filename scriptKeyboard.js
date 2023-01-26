'use strict';

var audioEnt = new Audio('Test1.mp3');
var audioSpace = new Audio('Test2.mp3');
var audioAU = new Audio('Test3.mp3');
var audioAD = new Audio('Test4.mp3');
var audioAR = new Audio('Test5.mp3');

var nameAudio= [audioEnt, audioSpace, audioAU, audioAD, audioAR];

function playAudio(currentAudio){
  for(var i = 0; i < nameAudio.length; i++){
    if (nameAudio[i] !== currentAudio){
      nameAudio[i].pause();
      nameAudio[i].currentTime=0;
    } else {
      nameAudio[i].play()
    }
  }

}

document.addEventListener(
  'keydown',
  event => {
    var name = event.key;
    if (name == 'Enter') {
      playAudio(audioEnt);
    } else if (name == ' ') {
      playAudio(audioSpace);
    } else if (name == 'ArrowUp') {
        playAudio(audioAU);
    } else if (name == 'ArrowDown') {
      playAudio(audioAD);
    } else if (name == 'ArrowRight') {
      playAudio(audioAR);
    }
  },
  false
);
