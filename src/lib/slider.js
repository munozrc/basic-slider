import './slider.css'

export default function Slider(container) {

  const _container = document.querySelector(`${container}`)
  const _slides = _container?.querySelectorAll('.slider__item')

  let _dots = [] // Array Nodes
  let _activeSlide = 1

  if (typeof container === 'undefined' || container === '') 
    throw Error('It is necessary to pass the identifier of the slider as an argument. Examples: "#slider" or "div.slider"')

  if (_container === null) 
    throw Error(`Make sure you have an "${container}" element created.`)

  if (_slides.length === 0) 
    throw Error(`Elements with class ".slider__item" must exist inside the "${container}" container.`)


  const navContainer = document.createElement('nav')
  const navElements = document.createElement('ul')
  
  navElements.className = 'slider-dots'
  navContainer.className = 'slider-nav'

  navContainer.appendChild(navElements)
  _container.appendChild(navContainer)

  _slides.forEach((slide, index) => {
    const dataIndex = index + 1
    const dotElement = document.createElement('button')
    
    dotElement.className = 'slider-dot'
    dotElement.dataset.index = dataIndex
    navElements.appendChild(dotElement)

    slide.dataset.index = dataIndex
  })

  _dots = _container?.querySelectorAll('nav > ul > .slider-dot')

  return {
    values: `Slides ${_slides.length}`
  }
}