
window.addEventListener('keydown', playSound);

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; /// THIS RETURN WILL STOP FUNCTIUON FROM RUNNING
  audio.currentTime = 0; //REWIND TO THE START
  audio.play();
  key.classList.add('playing');// ADDING CSS CLASS .PLAY TO KEY
  }

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // SKIP IT IF ITS NOT A TRANSFORM

this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
