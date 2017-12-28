import lottie from 'lottie-web';
import burgerData from './burger/burger.json';
import loadingData from './loading/loading.json';

const burger = document.getElementById('burger');
const loading = document.getElementById('loading');
let completed = false;

const burgerAnimation = lottie.loadAnimation({
  container: burger,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: burgerData,
});

window.burger = burgerAnimation;

// TODO kill dis
const middle = burgerAnimation.totalFrames / 2;
const end = burgerAnimation.totalFrames;

console.log(end)

burgerAnimation.setSpeed(3);

$('#burger').on('click', function() {
  if (completed) {
    burgerAnimation.playSegments([middle, end], true);
    completed = false;
  } else {
    burgerAnimation.playSegments([10, middle], true);
  }
});

burgerAnimation.addEventListener('complete', function() {
  console.log(burgerAnimation.currentRawFrame);
  if (burgerAnimation.currentFrame == 58.5) {
    console.log('stoped')
    burgerAnimation.currentFrame = 0;
  } else {
    completed = true;
  }
  burgerAnimation.pause();
});

/*
const loadingAnim = lottie.loadAnimation({
  container: loading,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loadingData,
});
*/
