import lottie from 'lottie-web';
import burgerData from './burger/burger.json';
import loadingData from './loader/loading.json';

const burger = document.getElementById('burger');
const loading = document.getElementById('loading');

const burgerAnimation = lottie.loadAnimation({
  container: burger,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: burgerData,
});

const loadingAnimation = lottie.loadAnimation({
  wrapper: loading,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../animation/loader/loading.json',
});
