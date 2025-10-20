//your JS code here. If required.
let sounds = [
  "https://kudit223.github.io/sounds/applause-108368.mp3",
  "https://kudit223.github.io/sounds/boo-6377.mp3",
  "https://kudit223.github.io/sounds/gasp-6253.mp3",
  "https://kudit223.github.io/sounds/toda.mp3",
  "https://kudit223.github.io/sounds/victory-chime-366449.mp3",
  "https://kudit223.github.io/sounds/wrong-47985.mp3"
];

let buttons = document.querySelectorAll('.btn');
let stop = document.querySelector('.stop');

buttons.forEach((button, i) => {
  let audio = new Audio(sounds[i]);
  button.addEventListener('click', (e) => {
    audio.play()
  });
  stop.addEventListener('click', (e)=>audio.pause());
});
