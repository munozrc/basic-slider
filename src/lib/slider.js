import './slider.css'

export default function Slider(container) {

  const _container = document.querySelector(`${container}`)
  const _slides = _container?.querySelectorAll('.slider__item')

  if (typeof container === 'undefined' || container === '') 
    throw Error('It is necessary to pass the identifier of the slider as an argument. Examples: "#slider" or "div > .slider"')

  if (_container === null) 
    throw Error(`Make sure you have an "${container}" element created.`)

  if (_slides.length === 0) 
    throw Error(`Elements with class ".slider__item" must exist inside the "${container}" container.`)

  return {
    values: `Slides ${_slides?.length}`
  }
}