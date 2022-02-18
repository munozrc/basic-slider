import './slider.css'

export default function Slider(container) {
  const _container = document.querySelector(`#${container}`)
  const _slides = _container.querySelectorAll(`.${container}__item`)

  if (_slides.length === 0) throw Error(`Elements with class .${container}__item must exist inside the slider container`)

  return {
    values: `Slides ${_slides.length}`
  }
}