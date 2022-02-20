import './slider.css'

const Slider = ({ container }) => {
  const _container = document.querySelector(`${container}`)
  const _slides = _container?.querySelectorAll('.slider-item')

  let _activeSlide = 0

  if (typeof container === 'undefined' || container === '') { throw Error('It is necessary to pass the identifier of the slider as an argument. Examples: "#slider" or "div.slider"') }

  if (_container === null) { throw Error(`Make sure you have an "${container}" element created.`) }

  if (_slides.length === 0) { throw Error(`Elements with class ".slider__item" must exist inside the "${container}" container.`) }

  // Set Slider Layout
  _container.innerHTML = `
    <section class="slider-wrapper">
      <!-- Button Prev -->
      <section class="slider-content">
        <!-- Slides Here -->
      </section>
      <!-- Button Next -->
    </section>
    <nav class="slider-nav">
      <ul class="slider-dots">
        <!-- Dots here -->
      </ul>
    </nav>
  `

  const _wrapper = _container.querySelector('.slider-wrapper')
  const _content = _container.querySelector('.slider-content')
  const _dotsContent = _container.querySelector('.slider-dots')
  const _buttonPrev = createBtnSlider('prev', goToPrevSlide)
  const _buttonNext = createBtnSlider('next', goToNextSlide)

  // Add buttons controls prev and next
  _wrapper.insertBefore(_buttonPrev, _content)
  _wrapper.appendChild(_buttonNext)

  // Add slides content and dots controls
  _content.append(...[..._slides].map(_normalizeSlides))
  _dotsContent.append(...[..._slides].map((_, index) => createDotControl(index, goToSlide)))

  // Get all dots elements
  const _dots = _dotsContent.querySelectorAll('.slider-dot')

  function _normalizeSlides (slide, index) {
    slide.dataset.index = index
    return slide
  }

  function goToPrevSlide () {
    if (_activeSlide > 0) _activeSlide--
    goToSlide(_activeSlide)
  }

  function goToNextSlide () {
    if (_activeSlide < _slides.length - 1) _activeSlide++
    goToSlide(_activeSlide)
  }

  function goToSlide (index = 0) {
    slideTo(index)
    setActiveDot(index)
  }

  function slideTo (index) {
    _content.scrollTo({
      left: index * _content.offsetWidth
    })
  }

  function setActiveDot (index) {
    _dots.forEach(dot => {
      if (+dot.dataset.index === index) dot.classList.add('active')
      else dot.classList.remove('active')
    })
  }

  return {
    getActiveSlide: () => _activeSlide,
    goToPrevSlide,
    goToNextSlide,
    goToSlide
  }
}

function createBtnSlider (variant, handleClick) {
  const btn = document.createElement('button')

  btn.className = `slider-btn-${variant}`
  btn.addEventListener('click', handleClick)
  btn.innerHTML = `
    <svg class="slider-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      ${variant === 'prev' && '<path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>'}
      ${variant === 'next' && '<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>'}
    </svg>
  `
  return btn
}

function createDotControl (index, handleClick) {
  const dot = document.createElement('button')

  dot.className = index === 0 ? 'slider-dot active' : 'slider-dot'
  dot.dataset.index = index
  dot.addEventListener('click', () => handleClick(index))

  return dot
}

export default Slider
