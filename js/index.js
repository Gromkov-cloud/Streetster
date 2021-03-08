const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu-header')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const headerInner = document.querySelector('.header__inner')

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active')
  menu.classList.toggle('menu-header--active')
  body.classList.toggle('lock')
  headerInner.classList.toggle('header__inner--active')
  if (!header.classList.contains('__active')) {
    header.classList.add('__active')
  }
  else if (!header.classList.contains('a')) {
    header.classList.remove('__active')
  }
})

const newsLetterSlider = new Swiper('.slider-news-letter__swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 40
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 20
    },


    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },

  navigation: {
    nextEl: '.slider-news-letter__button-next',
    prevEl: '.slider-news-letter__button-prev',
  },
});

const categoriesSlider = new Swiper('.categories-slider__swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    750: {
      slidesPerView: 1.3,
      spaceBetween: 80,
    },

    1100: {
      slidesPerView: 1.7,
      spaceBetween: 80,
    }
  },

  navigation: {
    nextEl: '.categories-slider__button-next',
    prevEl: '.categories-slider__button-prev',
  },
});

const animItems = document.querySelectorAll('.animated-item')

if (animItems.length > 0) {

  window.addEventListener('scroll', animOnScroll)

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 2

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('__active')
        animItem.classList.add('a')
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('__active')
          animItem.classList.remove('a')
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.sctollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll()
}

let slideLink = document.querySelector('.categories-slider__categorie-link')
let sliderButtons = document.querySelectorAll('.categories-slider__button')

for (let sliderButton of sliderButtons) {
  sliderButton.addEventListener('click', () => {
    setLink()
  })
}

function setLink () {
  let slideActive = document.querySelector('.swiper-slide-active')
  slideLink.setAttribute('href', slideActive.getAttribute('href'))
}

setLink()