
// header
let header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute('style', 'background: rgba(255, 255, 255, 0.9);');
  } else {
    header.setAttribute('style', 'background:rgba(255, 255, 255, 0.3);');
  }
});

// nav

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

// ham

$('.ham').click(function () {
  $(this).toggleClass('active');
  $('.gnb').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $(this).toggleClass('on');
  $('.gnb').toggleClass('on');
});

// fullpage
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('section').forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false,
  });
});
ScrollTrigger.create({
  snap: 1 / 4,
});

// sec1 slide(swiper)

let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

// sec1_card_hover

$('.hover').mouseleave(function () {
  $(this).removeClass('hover');
});

// sec2_txt_hover
document.querySelector('.hv').addEventListener('mouseover', () => {
  document.querySelector('.son').classList.add('on');
});
document.querySelector('.hv').addEventListener('mouseleave', () => {
  document.querySelector('.son').classList.remove('on');
});

// sec3 img hover
let el = document.getElementById('tilt');

const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener('mousemove', handleMove);

function handleMove(e) {
  const xVal = e.layerX;
  const yVal = e.layerY;

  const yRotation = 20 * ((xVal - width / 2) / width);

  const xRotation = -20 * ((yVal - height / 2) / height);

  const string =
    'perspective(500px) scale(1.1) rotateX(' +
    xRotation +
    'deg) rotateY(' +
    yRotation +
    'deg)';

  el.style.transform = string;
}

el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
});

el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
});
