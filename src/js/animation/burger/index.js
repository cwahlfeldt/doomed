import lottie from 'lottie-web';
import burgerData from './burger.json';

const burger = document.getElementById('burger');

const burgerAnimation = lottie.loadAnimation({
  container: burger,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: burgerData,
});
