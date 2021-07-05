(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=t(342),s=o()((function(e){return e[1]})),l=i()(c);s.push([e.id,"#mainContainer {\r\n    position:fixed;\r\n    width: fit-content;\r\n    text-align: center;\r\n    margin: auto;\r\n    border-style: solid;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n}\r\n\r\n#title {\r\n    margin: auto;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n    color: black;\r\n    max-width: fit-content;\r\n    border-style: double;\r\n\r\n}\r\n\r\n#headline {\r\n    margin: auto;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n    max-width: fit-content;\r\n    color: black;\r\n    border-style: double;\r\n}\r\n\r\n#header {\r\n    \r\n    margin: auto;\r\n    background-image: url("+l+"); \r\n    background-color: hsla(0, 20%, 99%, 0.5);\r\n    text-align: center;\r\n    max-width: 100%;\r\n}\r\n\r\nimg {\r\n    margin: auto;\r\n    align-items: center;\r\n    width: fit-content;\r\n\r\n}\r\n\r\n#content {\r\n  /*  display: flex;\r\n    justify-content: center;*/\r\n    margin: auto;\r\n    max-width: fit-content;\r\n    \r\n}",""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var m=t(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(n[m].references++,n[m].updater(f)):n.push({identifier:d,updater:o(f,r),references:1}),i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},876:(e,n,t)=>{e.exports=t.p+"90f16fc5dace2c2b02a3.jpeg"},342:(e,n,t)=>{e.exports=t.p+"3affef6c185446e12963.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=["home","about","aboutTwo"],n={home:"<h3>Home</h3>",about:"Zee Bistro is home to the finest grub money can buy. Flavour you'll savor, and consistency that never wavers!",aboutTwo:"<br>Founded in 1931, Zee Bistro has been serving up the classics with a smile ever since."},r=()=>{const t=document.getElementById("mainContainer");for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let r="",o="",a=0;for(;a<e.length;)o=e[a],r=document.createElement("div"),r.id=o,r.innerHTML=n[o],t.appendChild(r),a++},o=["menu","eggs","pancakes","benny","huevos","waffles"],a={menu:"<h3>Menu</h3>",eggs:"Ain't Fakin' Bacon & Eggs - $5.95",pancakes:"Flappin' Jack's Pancakes - $5.95",benny:"Hollandaised and Confused - $7.95",huevos:"Huevos Rancheros - $8.95",waffles:"Waffles & Dreams - 8.95"};var i=t(379),c=t.n(i),s=t(795),l=t.n(s),u=t(695),d=t.n(u),m=t(216),f=t.n(m),p=t(426),h={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=d()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};h.domAPI=l(),h.insertStyleElement=f(),c()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var g=t(876);(()=>{const e=document.querySelector("div#content");let n=document.createElement("div");n.id="header",e.appendChild(n);let t=document.createElement("h1");t.innerText="Zee Bistro",t.id="title",n.appendChild(t);let r=document.createElement("h3");r.id="headline",r.innerText='"Where yum yum meets tum tum."',n.appendChild(r);const o=["home","menu","contact"];let a=0;for(;a<o.length;){let e=o[a],t=document.createElement("button");t.id=e,t.setAttribute("class","tabLink"),t.innerText=e.toUpperCase(),n.appendChild(t),a++}let i=document.createElement("div");i.id="mainContainer",e.appendChild(i)})(),(()=>{console.log("homefunction");let e=document.getElementById("home");e.addEventListener("click",r),e.click()})(),document.getElementById("menu").addEventListener("click",(()=>{const e=document.getElementById("mainContainer");for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let n="",t="",r=0;for(;r<o.length;)t=o[r],n=document.createElement("div"),n.id=t,n.innerHTML=a[t],e.appendChild(n),r++}));const v=new Image;v.src=g,content.appendChild(v)})()})();