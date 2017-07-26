
window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(!audio) return; /// THIS RETURN WILL STOP FUNCTIUON FROM RUNNING
audio.play();
});
