import './style.css';

const slider = document.querySelector('ul.slider-content')
const slides = document.querySelectorAll('li.slider-item')
const dots = document.querySelectorAll('button.slider-dot')

const buttonPrev = document.querySelector('button.slider-arrow__left')
const buttonNext = document.querySelector('button.slider-arrow__right')

const arrayDots = Array.from(dots)
const arraySlides = Array.from(slides)

let activeSlide = 1

buttonPrev.addEventListener('click', () => {
  if (activeSlide <= 1) return
  setAndMoveSlide(activeSlide - 1)
})

buttonNext.addEventListener('click', () => {
  if (activeSlide >= arraySlides.length) return
  setAndMoveSlide(activeSlide + 1)
})

arrayDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const value = getSlideSelect(dot.dataset.index) + 1
    setAndMoveSlide(value)
    console.log({ activeSlide, dot: dot.dataset.index })
  })
})

function slideTo(index) {
  slider.scrollTo({
    left: index * slider.offsetWidth
  })
}

function getSlideSelect(index) {
  return arraySlides.findIndex(item => item.dataset.index === index)
}

function setActiveDot(index) {
  arrayDots.forEach(dot => {
    if (+dot.dataset.index === index) dot.classList.add('active')
    else dot.classList.remove('active')
  })
}

function setAndMoveSlide(value) {
  activeSlide = value
  setActiveDot(activeSlide)
  slideTo(activeSlide - 1)
}