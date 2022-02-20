const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};S();const L=({container:n})=>{const t=document.querySelector(`${n}`),r=t==null?void 0:t.querySelectorAll(".slider-item");let s=0;if(typeof n=="undefined"||n==="")throw Error('It is necessary to pass the identifier of the slider as an argument. Examples: "#slider" or "div.slider"');if(t===null)throw Error(`Make sure you have an "${n}" element created.`);if(r.length===0)throw Error(`Elements with class ".slider__item" must exist inside the "${n}" container.`);t.innerHTML=`
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
  `;const e=t.querySelector(".slider-wrapper"),o=t.querySelector(".slider-content"),c=t.querySelector(".slider-dots"),p=f("prev",a),m=f("next",u);e.insertBefore(p,o),e.appendChild(m),o.append(...[...r].map(v)),c.append(...[...r].map((i,l)=>E(l,d)));const h=c.querySelectorAll(".slider-dot");function v(i,l){return i.dataset.index=l,i}function a(){s>0&&s--,d(s)}function u(){s<r.length-1&&s++,d(s)}function d(i=0){y(i),g(i)}function y(i){o.scrollTo({left:i*o.offsetWidth})}function g(i){h.forEach(l=>{+l.dataset.index===i?l.classList.add("active"):l.classList.remove("active")})}return{getActiveSlide:()=>s,goToPrevSlide:a,goToNextSlide:u,goToSlide:d}};function f(n,t){const r=document.createElement("button");return r.className=`slider-btn-${n}`,r.addEventListener("click",t),r.innerHTML=`
    <svg class="slider-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      ${n==="prev"&&'<path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>'}
      ${n==="next"&&'<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>'}
    </svg>
  `,r}function E(n,t){const r=document.createElement("button");return r.className=n===0?"slider-dot active":"slider-dot",r.dataset.index=n,r.addEventListener("click",()=>t(n)),r}L({container:"#slider"});
