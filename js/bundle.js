(()=>{"use strict";var e={380:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(15),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"del{color:red}ins{color:green}[contenteditable=true]:focus del{display:none}[contenteditable=true]{border:solid 1px gray;border-radius:4px;padding:4px;background-color:#fafad2}li{margin-top:8px;margin-bottom:8px}","",{version:3,sources:["webpack://./src/css/style.scss"],names:[],mappings:"AAKA,IACE,SANI,CASN,IACE,WATM,CAaN,iCACE,YAAA,CAMJ,uBACE,qBAAA,CACA,iBAAA,CACA,WAAA,CACA,wBAtBY,CAyBd,GACE,cAAA,CACA,iBAAA",sourcesContent:['$red: #ff0000;\n$green: #008000;\n$gray: #808080;\n$lightyellow: #fafad2;\n\ndel {\n  color: $red;\n}\n\nins {\n  color: $green;\n}\n\n[contenteditable="true"]:focus {\n  del {\n    display: none;\n  }\n}\n\n/* Only for beauty */\n\n[contenteditable="true"] {\n  border: solid 1px $gray;\n  border-radius: 4px;\n  padding: 4px;\n  background-color: $lightyellow;\n}\n\nli {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}'],sourceRoot:""}]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},15:e=>{function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(s," */"),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([l]).join("\n")}return[i].join("\n")}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,n){var t,r,o;if(n.singleton){var i=v++;t=p||(p=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(380);function o(e,n){n.parentNode&&n.parentNode.insertBefore(e,n.nextSibling)}function i(e){if(!e.childNodes[0])return;e.focus();const n=document.createRange();n.setStart(e.childNodes[0],1),n.setEnd(e.childNodes[0],1);const t=window.getSelection();t.removeAllRanges(),t.addRange(n)}n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,window.addEventListener("load",(()=>{const e=document.querySelector('[contenteditable="true"]');e&&e.addEventListener("input",(e=>{let n=e.currentTarget.querySelectorAll("ins");n.length&&(n=Array.from(n),n.forEach((e=>{!function(e){let n=e.innerText.split(/\s/);n.length>1&&n.forEach(((t,r)=>{if(0!=r&&t){const r=document.createElement("INS"),a=document.createTextNode(" ");r.innerText=t,o(r,e),o(a,e),i(r),e.innerText=n[0].trim()}}))}(e),function(e){if(e.previousSibling&&"#text"===e.previousSibling.nodeName){const n=e.previousSibling.textContent,t=n.split(/\s/);if(!n.endsWith(" ")&&t.length>1){const r=t[t.length-1];e.innerText=`${r}${e.innerText}`,e.previousSibling.textContent=n.substring(0,n.lastIndexOf(r)),i(e)}}}(e)})))}))}))})()})();