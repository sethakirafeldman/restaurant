(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),i=t.n(r),o=t(667),a=t.n(o),c=t(342),d=i()((function(e){return e[1]})),s=a()(c);d.push([e.id,"\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    max-width: fit-content;\r\n    position: relative;\r\n    \r\n}\r\n\r\n#header, #footer {\r\n    background-image: url("+s+"); \r\n    background-color: hsla(0, 20%, 99%, 0.5);\r\n    background-repeat: repeat-x;\r\n    text-align: center;\r\n    /* max-width:  1265px; */\r\n    max-height: auto;\r\n    min-height: 100px;\r\n}\r\n\r\n#title {\r\n    margin: auto;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n    color: black;\r\n    max-width: fit-content;\r\n    border-style: double;\r\n}\r\n\r\n#headline {\r\n    margin: auto;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n    max-width: fit-content;\r\n    color: black;\r\n    border-style: double;\r\n}\r\n\r\n#mainContainer {\r\n    display: flex;\r\n    /* flex-direction: row; */\r\n    justify-content: space-evenly;\r\n    max-height: auto;\r\n}\r\n\r\n#home, #foodMenu, #contact {\r\n    width: auto;\r\n    text-align: center;\r\n    border-style: solid;\r\n    background-color: rgba(253, 252, 252, 0.5);\r\n    position: fixed;\r\n\r\n}\r\n\r\n#foodMenu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    min-width: auto;\r\n    flex-wrap: wrap;\r\n    max-height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n#contact {\r\n  \r\n}\r\n\r\n.foodItem {\r\n    /* padding: 1%; */\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 2%;   \r\n    font-size: 1em;\r\n    font-size: larger;\r\n\r\n\r\n    /* border-style: dashed; */\r\n    max-width: 20rem;\r\n    min-width: 4rem;\r\n}\r\n\r\n.foodDescription {\r\n    font-weight: normal;\r\n    border-style: solid;\r\n}\r\n\r\n.foodImage {\r\n    /* display: inline; */\r\n    max-width:100%;\r\n    max-height: auto;\r\n\r\n}\r\n\r\n#background {\r\n    size: auto;\r\n\r\n}\r\n\r\n.tabLink {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    background-color:  whitesmoke;\r\n    padding: 2px;\r\n    font-size: medium;\r\n    transition: 1ms;\r\n\r\n}\r\n\r\n.tabLink:hover {\r\n    transform: scale(1.1);\r\n}",""]);const l=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var f=t(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(n[f].references++,n[f].updater(m)):n.push({identifier:u,updater:i(m,r),references:1}),a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=t(o[a]);n[c].references--}for(var d=r(e,i),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},275:(e,n,t)=>{e.exports=t.p+"f52880498ad557bb9bef.jpg"},373:(e,n,t)=>{e.exports=t.p+"b488b58c8dfd1fce6110.jpg"},374:(e,n,t)=>{e.exports=t.p+"10878365044f88d87868.jpg"},982:(e,n,t)=>{e.exports=t.p+"3fd2da5c5c93f14570c4.jpg"},354:(e,n,t)=>{e.exports=t.p+"8f14e20076ca508c6c75.jpg"},342:(e,n,t)=>{e.exports=t.p+"3affef6c185446e12963.jpeg"},755:(e,n,t)=>{e.exports=t.p+"16350abccbe52e814cad.jpg"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=["about","aboutTwo"],n={home:"<h3>Home</h3>",about:"Zee Bistro is home to the finest grub money can buy. Flavour you'll savor, and consistency that never wavers!",aboutTwo:"<br>Founded in 1931, Zee Bistro has been serving up the classics with a smile ever since."},r=()=>{for(document.getElementById("mainContainer");mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let t=document.createElement("div");t.id="home",t.innerHTML="<h3>Home</h3>",mainContainer.appendChild(t);let r="",i="",o=0;for(;o<e.length;)i=e[o],r=document.createElement("div"),r.id=i,r.classList.add("pageText"),r.innerHTML=n[i],t.appendChild(r),o++};var i=t(374),o=t(354),a=t(275),c=t(982),d=t(755);const s=["eggs","pancakes","benny","huevos","waffles"],l=[i,o,a,c,d],u={eggs:"Ain't Fakin' Bacon & Eggs",pancakes:"Flappin' Jack's Pancakes",benny:"Hollandaised and Confused",huevos:"Huevos Rancheros",waffles:"Waffles du Beurre"},f={eggs:"$5.95",pancakes:"$5.95",benny:"$7.95",huevos:"$8.95",waffles:"$8.95"},m={eggs:"Traditional farmer's delight. Served with freshly cut hashbrowns and coffee.",pancakes:"Start your day right with desert.",benny:"Zee Bistro's take on Eggs Benny. Roll over, Benedict. Benny and the Dicts",huevos:"If you're feeling fiery, look no more.",waffles:"Essentially, it's a tortured pancake. Buttered for your pleasure."},p=["phone","email"],h={phone:"555-555-5555",email:"contact@zeebistro.com"},g=()=>{for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let e=0,n="",t=document.createElement("h3");for(t.id="contact",t.innerHTML="<h3>Contact</h3>",mainContainer.appendChild(t);e<Object.keys(h).length;)n=document.createElement("div"),n.id=Object.entries(h)[e][0],n.innerHTML=Object.entries(h)[e][0],t.appendChild(n),e++;let r=0,i="";for(;r<p.length;)i=document.createElement("div"),i.innerHTML=Object.values(h)[r],i.classList.add("contactValue"),document.querySelector("#"+p[r]).appendChild(i),r++};var v=t(379),b=t.n(v),y=t(795),C=t.n(y),x=t(695),w=t.n(x),E=t(216),k=t.n(E),T=t(426),L={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=w()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};L.domAPI=C(),L.insertStyleElement=k(),b()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var j=t(373);(()=>{const e=document.querySelector("div#content");let n=document.createElement("div");n.id="header",e.appendChild(n);let t=document.createElement("h1");t.innerText="Zee Bistro",t.id="title",n.appendChild(t);let r=document.createElement("h3");r.id="headline",r.innerText='"A vintage dining experience. Nostalgia included, free of charge."',n.appendChild(r);const i=["home","menu","contact"];let o=0;for(;o<i.length;){let e=i[o],t=document.createElement("button");t.id=e+"Btn",t.setAttribute("class","tabLink"),t.innerText=e.toUpperCase(),n.appendChild(t),o++}let a=document.createElement("div");a.id="mainContainer",e.appendChild(a)})(),document.getElementById("menuBtn").addEventListener("click",(()=>{for(;mainContainer.firstChild;)mainContainer.removeChild(mainContainer.firstChild);let e="",n="",t="",r="",i=document.createElement("div");i.id="foodMenu",mainContainer.appendChild(i);let o=0;for(;o<s.length;)e=document.createElement("div"),e.id=s[o],e.classList.add("foodItem"),e.innerHTML=u[s[o]],i.appendChild(e),n=document.createElement("div"),n.classList.add("foodDescription"),n.innerHTML=m[s[o]],e.appendChild(n),t=document.createElement("div"),t.classList.add("price"),t.innerHTML="- "+f[s[o]],n.appendChild(t),o++;let a=0;for(;a<l.length;){console.log("jWhile?");let e=document.getElementById(s[a]);r=new Image,r.id=s[a]+"-img",r.classList.add("foodImage"),r.src=l[a],e.appendChild(r),a++}})),(()=>{let e=document.getElementById("contactBtn");e.addEventListener("click",g),e.click()})(),(()=>{let e=document.getElementById("homeBtn");e.addEventListener("click",r),e.click()})();const M=new Image;M.src=j,M.id="background",content.appendChild(M);let B=document.createElement("div");B.id="footer",content.appendChild(B)})()})();