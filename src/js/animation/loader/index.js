import lottie from 'lottie-web';
import loaderData from './loader.json';

const loader = document.getElementById('loader');

const loaderAnimation = lottie.loadAnimation({
  container: loader,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loaderData,
});
