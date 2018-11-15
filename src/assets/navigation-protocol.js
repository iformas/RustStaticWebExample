if(void 0===Mozilla)var Mozilla={};if(function(){"use strict";var e,t,n={},o=!1,i={onMenuOpen:null,onMenuClose:null,onMenuButtonClose:null};n.open=function(e,t){t&&e.classList.add("is-animated"),e.classList.add("is-selected"),o=!0,e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded",!0),"function"==typeof i.onMenuOpen&&i.onMenuOpen(e)},n.close=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.is-selected"),t=0;t<e.length;t++)e[t].classList.remove("is-selected"),e[t].classList.remove("is-animated"),e[t].querySelector(".mzp-c-menu-title").setAttribute("aria-expanded",!1);return o=!1,"function"==typeof i.onMenuClose&&0<e.length&&i.onMenuClose(),0<e.length},n.onDocumentKeyUp=function(e){27===e.keyCode&&o&&n.close()},n.onCloseButtonClick=function(e){e.preventDefault(),"function"==typeof i.onMenuButtonClose&&i.onMenuButtonClose(),n.close()},n.toggle=function(e){!!e.classList.contains("is-selected")?(e.classList.remove("is-selected"),e.classList.remove("is-animated"),e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded",!1),"function"==typeof i.onMenuClose&&i.onMenuClose()):n.open(e)},n.onMouseEnter=function(t){clearTimeout(e),e=setTimeout(function(){var e=!n.close();n.open(t.target,e)},150)},n.onMouseLeave=function(){clearTimeout(e),e=setTimeout(function(){n.close()},150)},n.onFocusOut=function(){var e=this;setTimeout(function(){!e.contains(document.activeElement)&&e.classList.contains("is-selected")&&n.close()},0)},n.onClickWide=function(e){e.preventDefault(),n.close(),n.open(e.target.parentNode)},n.onClickSmall=function(e){e.preventDefault(),n.toggle(e.target.parentNode)},n.isWideViewport=function(){return t.matches},n.handleState=function(){(t=matchMedia("(min-width: 768px)")).addListener(function(e){n.close(),e.matches?(n.unbindEventsSmall(),n.bindEventsWide()):(n.unbindEventsWide(),n.bindEventsSmall())}),n.isWideViewport()?n.bindEventsWide():n.bindEventsSmall()},n.bindEventsWide=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"),t=0;t<e.length;t++)e[t].addEventListener("mouseenter",n.onMouseEnter,!1),e[t].addEventListener("mouseleave",n.onMouseLeave,!1),e[t].addEventListener("focusout",n.onFocusOut,!1),e[t].querySelector(".mzp-c-menu-title").addEventListener("click",n.onClickWide,!1),e[t].querySelector(".mzp-c-menu-button-close").addEventListener("click",n.onCloseButtonClick,!1);document.addEventListener("keyup",n.onDocumentKeyUp,!1)},n.unbindEventsWide=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"),t=0;t<e.length;t++)e[t].removeEventListener("mouseenter",n.onMouseEnter,!1),e[t].removeEventListener("mouseleave",n.onMouseLeave,!1),e[t].removeEventListener("focusout",n.onFocusOut,!1),e[t].querySelector(".mzp-c-menu-title").removeEventListener("click",n.onClickWide,!1),e[t].querySelector(".mzp-c-menu-button-close").removeEventListener("click",n.onCloseButtonClick,!1);document.removeEventListener("keyup",n.onDocumentKeyUp,!1)},n.bindEventsSmall=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"),t=0;t<e.length;t++)e[t].addEventListener("click",n.onClickSmall,!1)},n.unbindEventsSmall=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"),t=0;t<e.length;t++)e[t].removeEventListener("click",n.onClickSmall,!1)},n.setAria=function(){for(var e=document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"),t=0;t<e.length;t++)e[t].setAttribute("aria-expanded",!1)},n.cssFallback=function(){var e=document.querySelector(".mzp-c-menu"),t=e.className;e.className=t.replace(/mzp-c-menu/,"mzp-c-menu mzp-c-menu-basic")},n.isSupported=function(){return"undefined"!=typeof window.matchMedia&&window.matchMedia("all").addListener&&"classList"in document.createElement("div")},n.init=function(e){if("object"==typeof e)for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);n.isSupported()?(n.handleState(),n.setAria()):n.cssFallback()},window.Mozilla.Menu=n}(),void 0===Mozilla)Mozilla={};!function(){"use strict";var n,o={},i={onNavOpen:null};o.onClick=function(e){e.preventDefault(),e.target.classList.toggle("is-active"),n.classList.toggle("is-open");var t=!!n.classList.contains("is-open");n.setAttribute("aria-expanded",t),t?"function"==typeof i.onNavOpen&&i.onNavOpen():"function"==typeof i.onNavClose&&i.onNavClose()},o.setAria=function(){n.setAttribute("aria-expanded",!1)},o.bindEvents=function(){(n=document.querySelector(".mzp-c-navigation-items"))&&(document.querySelector(".mzp-c-navigation-menu-button").addEventListener("click",o.onClick,!1),o.setAria())},o.init=function(e){if("object"==typeof e)for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);o.bindEvents()},window.Mozilla.Navigation=o}(),function(){if(void 0!==Mozilla&&"undefined"!=typeof Mozilla.Menu&&"undefined"!=typeof Mozilla.Navigation&&Mozilla.Menu.isSupported()){var i=window.matchMedia("(min-width: 768px)");Mozilla.Menu.init({onMenuOpen:function(e){if(i.matches){var t=e.querySelector(".mzp-c-card-image");if(t){var n=t.getAttribute("data-src");if(n){var o=t.getAttribute("data-srcset");o&&(t.srcset=o),t.src=n,t.onload=c}}}}}),Mozilla.Navigation.init()}function c(e){e.target.removeAttribute("data-src"),e.target.removeAttribute("data-srcset")}}();