(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=t(342),d=o()((function(e){return e[1]})),s=i()(c);d.push([e.id,"\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: fit-content;\n\n    \n}\n\n#header {\n    background-image: url("+s+"); \n    background-color: hsla(0, 20%, 99%, 0.5);\n    background-repeat: repeat-x;\n    text-align: center;\n    max-width:100%;\n}\n\n#title {\n    margin: auto;\n    background-color: rgba(253, 252, 252, 0.5);\n    color: black;\n    max-width: fit-content;\n    border-style: double;\n}\n\n#headline {\n    margin: auto;\n    background-color: rgba(253, 252, 252, 0.5);\n    max-width: fit-content;\n    color: black;\n    border-style: double;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n#home, #foodMenu, #contact {\n    width: fit-content;\n    text-align: center;\n    border-style: solid;\n    background-color: rgba(253, 252, 252, 0.5);\n    position: absolute;\n    /* top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%); */\n\n}\n\n#foodMenu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: fit-content;\n}\n\n#contact {\n  \n}\n\n.foodItem {\n    padding: 1%;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: bold;\n    text-align: left;\n    width: fit-content;\n}\n\n.foodDescription {\n    font-weight: normal;\n}\n\n.foodImage {\n    max-width: 100px;\n    float: inherit;\n}\n\n\n#background {\n    background-size: cover;\n}\n\n.tabLink {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    background-color:  whitesmoke;\n    padding: 2px;\n    font-size: medium;\n\n}",""]);const l=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var f=t(u),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:u,updater:o(p,r),references:1}),i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},275:(e,n,t)=>{e.exports=t.p+"f52880498ad557bb9bef.jpg"},876:(e,n,t)=>{e.exports=t.p+"90f16fc5dace2c2b02a3.jpeg"},374:(e,n,t)=>{e.exports=t.p+"10878365044f88d87868.jpg"},982:(e,n,t)=>{e.exports=t.p+"3fd2da5c5c93f14570c4.jpg"},354:(e,n,t)=>{e.exports=t.p+"8f14e20076ca508c6c75.jpg"},342:(e,n,t)=>{e.exports=t.p+"3affef6c185446e12963.jpeg"},755:(e,n,t)=>{e.exports=t.p+"16350abccbe52e814cad.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=["about","aboutTwo"],n={home:"<h3>Home</h3>",about:"Zee Bistro is home to the finest grub money can buy. Flavour you'll savor, and consistency that never wavers!",aboutTwo:"<br>Founded in 1931, Zee Bistro has been serving up the classics with a smile ever since."},r=()=>{for(document.getElementById("mainContainer");mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let t=document.createElement("div");t.id="home",t.innerHTML="<h3>Home</h3>",mainContainer.appendChild(t);let r="",o="",a=0;for(;a<e.length;)o=e[a],r=document.createElement("div"),r.id=o,r.classList.add("pageText"),r.innerHTML=n[o],t.appendChild(r),a++};var o=t(374),a=t(354),i=t(275),c=t(982),d=t(755);const s=["eggs","pancakes","benny","huevos","waffles"],l=[o,a,i,c,d],u={eggs:"Ain't Fakin' Bacon & Eggs",pancakes:"Flappin' Jack's Pancakes",benny:"Hollandaised and Confused",huevos:"Huevos Rancheros",waffles:"Waffles du Beurre"},f={eggs:"$5.95",pancakes:"$5.95",benny:"$7.95",huevos:"$8.95",waffles:"8.95"},p={eggs:"Traditional farmer's delight. Served with freshly cut hashbrowns and coffee.",pancakes:"Start your day right with desert.",benny:"Zee Bistro's take on Eggs Benny. Roll over, Benedict. Benny and the Dicts",huevos:"If you're feeling fiery, look no more.",waffles:"Essentially, it's a tortured pancake. Buttered for your pleasure."},m={phone:"<strong>Phone Number:</strong> <a href='555-555-5555'>555-555-5555",email:"<strong>Email: </strong><a href=contact@zeebistro.com>contact@zeebistro.com"},h=()=>{for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let e=0,n="",t=document.createElement("div");for(t.id="contact",t.innerHTML="<h3>Contact</h3>",mainContainer.appendChild(t);e<Object.keys(m).length;)n=document.createElement("div"),n.id=Object.entries(m)[e][1],n.innerHTML=Object.entries(m)[e][1],t.appendChild(n),e++};var g=t(379),v=t.n(g),b=t(795),y=t.n(b),C=t(695),w=t.n(C),x=t(216),k=t.n(x),E=t(426),T={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=w()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};T.domAPI=y(),T.insertStyleElement=k(),v()(E.Z,T),E.Z&&E.Z.locals&&E.Z.locals;var B=t(876);(()=>{const e=document.querySelector("div#content");let n=document.createElement("div");n.id="header",e.appendChild(n);let t=document.createElement("h1");t.innerText="Zee Bistro",t.id="title",n.appendChild(t);let r=document.createElement("h3");r.id="headline",r.innerText='"Where yum yum meets tum tum."',n.appendChild(r);const o=["home","menu","contact"];let a=0;for(;a<o.length;){let e=o[a],t=document.createElement("button");t.id=e+"Btn",t.setAttribute("class","tabLink"),t.innerText=e.toUpperCase(),n.appendChild(t),a++}let i=document.createElement("div");i.id="mainContainer",e.appendChild(i)})(),document.getElementById("menuBtn").addEventListener("click",(()=>{for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let e="",n="",t="",r="",o=document.createElement("div");o.id="foodMenu",mainContainer.appendChild(o);let a=0;for(;a<s.length;)e=document.createElement("div"),e.id=s[a],e.classList.add("foodItem"),e.innerHTML=u[s[a]],o.appendChild(e),n=document.createElement("div"),n.classList.add("foodDescription"),n.innerHTML=p[s[a]],e.appendChild(n),t=document.createElement("div"),t.classList.add("price"),t.innerHTML="- "+f[s[a]],n.appendChild(t),a++;let i=0;for(;i<l.length;){console.log("jWhile?");let e=document.getElementById(s[i]);r=new Image,r.id=s[i]+"-img",r.classList.add("foodImage"),r.src=l[i],e.appendChild(r),i++}})),(()=>{let e=document.getElementById("contactBtn");e.addEventListener("click",h),e.click()})(),(()=>{let e=document.getElementById("homeBtn");e.addEventListener("click",r),e.click()})();const L=new Image;L.src=B,L.id="background",content.appendChild(L)})()})();