import lottie from 'lottie-web';
import burgerData from './burger/burger.json';
import loadingData from './loading/loader-block.json';

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

const loadingAnimation = lottie.loadAnimation({
  container: loading,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loadingData,
});

window.burger = burgerAnimation;

// TODO kill dis
const middle = burgerAnimation.totalFrames / 2;
const end = burgerAnimation.totalFrames;

console.log(end)

burgerAnimation.setSpeed(5);

$('#burger').on('click', function(e) {
  e.preventDefault();

  if (completed) {
    $('#modal-menu').css({
      opacity: 0,
      visibility: 'hidden',
    });
    burgerAnimation.playSegments([middle, end], true);
    completed = false;
  } else {
    $('#modal-menu').css({
      opacity: 1,
      visibility: 'visible',
    });
    burgerAnimation.playSegments([5, middle], true);
  }
});

burgerAnimation.addEventListener('complete', function() {
  console.log(burgerAnimation.currentRawFrame);
  if (burgerAnimation.currentFrame === 58.5) {
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
