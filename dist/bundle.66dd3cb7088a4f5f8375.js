(()=>{"use strict";(function(){const t=document.querySelector("[data-container]"),e=Array.from(document.querySelectorAll("[data-slide]")),n=document.querySelector("[data-dots]");let o,c=!1,a=0,d=0,r=0,i=0;function s(){cancelAnimationFrame(o),c=!1;const t=d-r;t<-100&&i<e.length-1&&(i+=1),t>100&&i>0&&(i-=1),d=i*-window.innerWidth,r=d,f(),h(i)}function u(t){if(c){const e=l(t);d=r+e-a}}function l(t){return t.touches[0].clientX}function m(){f(),c&&requestAnimationFrame(m)}function f(){t.style.transform=`translateX(${d}px)`}e.forEach(((t,e)=>{t.addEventListener("touchstart",function(t){return function(e){i=t,a=l(e),c=!0,o=requestAnimationFrame(m)}}(e)),t.addEventListener("touchend",s),t.addEventListener("touchmove",u)})),window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1},e.forEach((function(t,e){n.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${e}"></button>`)}));const h=function(t){document.querySelectorAll(".dots__dot").forEach((t=>t.classList.remove("dots__dot--active"))),document.querySelector(`.dots__dot[data-slide="${t}"]`).classList.add("dots__dot--active")};h(0)})(),function(){const t=document.querySelector("[data-form]"),e=document.querySelector("[data-mail]");t.addEventListener("submit",(t=>{e.checkValidity()||(t.preventDefault(),e.setCustomValidity("請輸入電郵位址"),e.reportValidity())})),e.addEventListener("input",(t=>{e.validity.typeMismatch?(e.setCustomValidity("需為有效的電郵位址"),e.reportValidity()):e.setCustomValidity("")}))}();const t=document.querySelector("[data-checkbox]"),e=document.querySelector("[data-header__modal]"),n=document.querySelector("[data-header__menu]"),o=document.querySelectorAll("[data-menu-item]"),c=document.querySelector("[data-overlay]");function a(){c.classList.toggle("checked"),e.classList.toggle("checked"),n.classList.toggle("checked"),o.forEach((t=>{t.classList.toggle("checked")}))}t.addEventListener("change",(()=>{a()})),c.addEventListener("click",(()=>{a(),t.checked=!1})),o.forEach((e=>{e.addEventListener("click",(()=>{a(),t.checked=!1}))}))})();
//# sourceMappingURL=bundle.66dd3cb7088a4f5f8375.js.map