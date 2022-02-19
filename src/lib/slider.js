import './slider.css'

export default function Slider(container) {

  const _container = document.querySelector(`${container}`)
  const _slides = _container?.querySelectorAll('.slider__item')
  const _btnPrev = _container?.querySelector('.slider__btn-prev')
  const _btnNext = _container?.querySelector('.slider__btn-next')

  let _dots = [] // Array Nodes
  let _activeSlide = 0

  if (typeof container === 'undefined' || container === '') 
    throw Error('It is necessary to pass the identifier of the slider as an argument. Examples: "#slider" or "div.slider"')

  if (_container === null) 
    throw Error(`Make sure you have an "${container}" element created.`)

  if (_slides.length === 0) 
    throw Error(`Elements with class ".slider__item" must exist inside the "${container}" container.`)

  const sectionWrapper = document.createElement('section')
  const sectionContent = document.createElement('section')

  sectionWrapper.className = 'slider__wrapper'
  sectionContent.className = 'slider__content'

  sectionContent.append(..._slides)
  sectionWrapper.append(...[_btnPrev, sectionContent, _btnNext])

  _container.innerHTML = ''
  _container.appendChild(sectionWrapper)

  const navContainer = document.createElement('nav')
  const navElements = document.createElement('ul')
  
  navContainer.className = 'slider__nav'
  navElements.className = 'slider__dots'

  navContainer.appendChild(navElements)
  _container.appendChild(navContainer)

  _slides.forEach((slide, index) => {
    const dotElement = document.createElement('button')
    
    dotElement.className = index === 0 ? 'slider__dot active' : 'slider__dot'
    dotElement.dataset.index = index

    dotElement.addEventListener('click', () => {
      slideTo(index)
      setActiveDot(index)
    })

    navElements.appendChild(dotElement)
    slide.dataset.index = index
  })

  _dots = _container?.querySelectorAll('nav > ul > .slider__dot')

  _btnPrev.addEventListener('click', () => {
    if (_activeSlide > 0) _activeSlide--
    slideTo(_activeSlide)
    setActiveDot(_activeSlide)
  })
  
  _btnNext.addEventListener('click', () => {
    if (_activeSlide < _slides.length - 1) _activeSlide++
    slideTo(_activeSlide)
    setActiveDot(_activeSlide)
  })

  function slideTo(index) {
    sectionContent.scrollTo({
      left: index * sectionContent.offsetWidth
    })
  }
  
  function setActiveDot(index) {
    _dots.forEach(dot => {
      if (+dot.dataset.index === index) dot.classList.add('active')
      else dot.classList.remove('active')
    })
  }

  return {
    values: `Slides ${_slides.length}`
  }
}