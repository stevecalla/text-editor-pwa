(()=>{"use strict";function e(l){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(l)}var l,o=document.getElementById("installButton"),t=!1;function s(){l.prompt(),l.userChoice.then((function(e){"accepted"===e.outcome?(console.log("User accepted",e.outcome),o.style.display="none",o.style.disabled=!0,t=!0,localStorage.setItem("isInstalled",!0)):(console.log("User dismissed",e.outcome),t=!1,o.style.display="block",o.style.disabled=!1,localStorage.setItem("isInstalled",!1))}))}o.style.display="none",o.style.disabled=!0,window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),l=e,o.addEventListener("click",s),!1===t&&(o.style.display="block",console.log("false")),console.log("v103")})),window.addEventListener("load",(function(){o.style.display="none",o.style.disabled=!0,localStorage.getItem("isInstalled")&&(console.log("load storage = ",localStorage.getItem("isInstalled")),t=localStorage.getItem("isInstalled")),console.log("isInstalled = ",t),!0===t||"true"===t?(o.style.display="none",o.style.disabled=!0,console.log("a = ",t,e(t))):(o.style.display="block",o.style.disabled=!1,console.log("b = ",t,e(t)))}))})();