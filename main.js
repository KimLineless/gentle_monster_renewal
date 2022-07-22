// header

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

// hover

$('.hover').mouseleave(function () {
  $(this).removeClass('hover');
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

// sec4
