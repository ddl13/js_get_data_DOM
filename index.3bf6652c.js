function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.querySelector(".list");if(e){var r=document.querySelector(".average-population"),n=document.querySelector(".total-population"),o=e.querySelectorAll(".population"),i=e.querySelectorAll(".list__item"),u=function(){return((function(e){if(Array.isArray(e))return t(e)})(o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce(function(t,e){return t+ +e.textContent.split(",").join("")},0)},a=function(t){return t.toLocaleString("en-US")},l=function(t,e){e.textContent=t};l(a(u()),n),l(a(u()/i.length),r)}}()});//# sourceMappingURL=index.3bf6652c.js.map

//# sourceMappingURL=index.3bf6652c.js.map
