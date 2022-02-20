# Basic Slider

This is a basic slider in vanilla JavaScript. [demo](https://munozrc.github.io/basic-slider/)

![image](https://user-images.githubusercontent.com/47870821/154862099-ff6161e3-e2d2-4ae8-8d74-046640ba39c8.png)


## How to use

First you need to copy the [`slider.js`](https://raw.githubusercontent.com/munozrc/basic-slider/main/src/lib/slider.js) and [`slider.css`](https://raw.githubusercontent.com/munozrc/basic-slider/main/src/lib/slider.css) files to your project.

***HTML***

```html
  <!-- START - slider  -->
    <div id="slider">
      <!-- First Item -->
      <div class="slider-item">
        <img src="/aedrian.jpg" />
      </div>

      <!-- Second Item -->
      <div class="slider-item">
        <img src="/eugene-golovesov.jpg" />
      </div>

      <!-- Three Item -->
      <div class="slider-item">
        <img src="/ian-dziuk.jpg" />
      </div>
    </div>
  <!-- END - Slider  -->
```

***JavaScript***

```javascript
import Slider from './slider'

// Set settings for slider
const config = {
  container: '#slider' // slider content
}

// Pass through parameters the configuration and the slider is initialized
const slider = Slider(config);

```

