function playSound() {
  var audio = document.getElementById(`audio-${this.dataset.key}`);
  audio.currentTime = 0;
  audio.play();
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => button.addEventListener('click', playSound));