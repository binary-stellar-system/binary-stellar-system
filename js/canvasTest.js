(()=>{"use strict";function e(e,t,n){return n instanceof e||(typeof n).toLowerCase()===t}function t(t){return e(String,"string",t)}function n(t){return e(Object,"object",t)}function o(e){let t=e.nodeName;return t=t||"","textarea"===t.toLowerCase()}function i(e){let t=typeof e,n=e.nodeName;return n=n||"","input"===n.toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}const a=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function r(e,o){let i,r={},s=e;r.length=0,r.objectName="selector";const d=o||document;if(!t(s)&&n(s)&&s.hasOwnProperty("objectName")&&"selector"===s.objectName)return s;e instanceof HTMLElement&&(e.id?s="#"+e.id:(s=e.nodeName.toLowerCase(),e.className.length>0&&(s+="."+e.className.split(" ").join(" .")))),a.test(s)?(i=d.querySelector(s),i=i?[i]:[]):(i=d.querySelectorAll(s),i=i&&i.length>0?i:[]),r.length=i.length,r.get=function(e){return i[e]},r.toArray=function(){return Array.from(i)},r.each=function(e){r.toArray().forEach(e)};for(let e=0;e<r.length;e++)r[e]=i[e];return r}const s=function(e,t){-1===e.className.indexOf(t)&&(e.className+=" "+t)},d=function(e,n,o){let i,a=document.body;if(n&&t(n)?a=document.getElementById(n):n&&(a=n),!e)return a;if(o&&o.id&&(i=document.getElementById(o.id)),i||(i=document.createElement(e)),!i)return i;if(a.appendChild(i),i&&o){let e;for(e in o)try{i[e]=o[e]}catch(e){}o.className&&s(i,o.className)}return i},l=function(a,s,d){let l,c,u=r(a);if(!(u.length<=0)&&(d||(d=0),!(d>=u.length)&&u[d]))return l=u.get(d),c=new String(l.tagName).toLowerCase(),(s||""===s)&&function(a,r){t(a)||e(Number,"number",a)?i(c)||i(r)||o(r)?r.value=a:r.innerHTML=a:r&&n(a)&&r.appendChild(a)}(s,l),i(c)||i(l)||o(l)?l.value:t(l.innerHTML)?l.innerHTML:void 0};var c,u;u=(c=window.navigator).appVersion;const m={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:c.cookieEnabled,name:c.appName,uaName:c.appName,OS:c.platform,uaOS:c.platform,userAgent:c.userAgent,appVersion:parseFloat(u,10),uaAppVersion:parseFloat(u,10),version:parseFloat(u,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""};let f,p,w,h;window.attachEvent&&!window.addEventListener?f=function(e,t,n,o){if(!e.attachEvent("on"+t,n))throw"Event "+t+" could not be added!"}:window.addEventListener&&(f=function(e,t,n,o){const i=o||!1;e.addEventListener(t,n,i)}),window.detachEvent&&!window.removeEventListener?p=function(e,t,n,o){if(!e.detachEvent("on"+t,n))throw"Event "+t+" could not be removed!"}:window.removeEventListener&&(p=function(e,t,n,o){e.removeEventListener(t,n,o)});const g=function(e){return window.event?window.event:e},b=function(e){const t=g(e);let n;return t.srcElement?n=t.srcElement:t.target&&(n=t.target),n},v=function(e){const t=g(e);let n=0;return t.pageX?n=t.pageX:t.clientX&&(n=t.clientX),n},y=function(e){const t=g(e);let n=0;return t.pageY?n=t.pageY:t.clientY&&(n=t.clientY),n};document.createEvent&&(w=function(e,t,n){let o=document.createEvent("Event");if(o)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),o.initEvent("Event",n.canBubble,n.cancellable),o},h=function(e){document.dispatchEvent(e)});function W(){let e=this,t=function(t,n){let o,i,a=e;return o=g(t),i=b(o),a.moving&&a.dragableCoverMask.id===i.id&&(a.posX=v(),a.posY=y(),a[n].style.left=a.posX-a.offsetX+"px",a[n].style.top=a.posY-a.offsetY+"px"),a},n=function(){let e;window.getSelection?(e=window.getSelection(),e&&e.empty?e.empty():e&&e.removeAllRanges&&e.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()};const o=function(t,n,o){const i=r("#"+n).get(0),a=r("#"+(o||n)).get(0);i&&a&&(t?(e.dragableObjects[a.id]=i,f(a,"mousedown",e.mousedown,!1)):(e.dragableObjects[a.id]=null,p(a,"mousedown",e.mousedown,!1)))};return e.dragableObjects=[],e.initialize=function(){const t=e;t.isInitialized||(t.dragableCoverMask=r("#-dragndrop-enabled-x").get(0),t.dragableCoverMask||(t.dragableCoverMask=d("div",document.body),t.dragableCoverMask.id="-dragndrop-enabled-x"),t.dragableCoverMask.style.display="none",f(document,"mousemove",t.mousemove,!1),f(document,"mouseup",t.mouseup,!1),t.isInitialized=!0)},e.findDragableParent=function(t){const n=e;if(t&&t.nodeName&&"body"!==t.nodeName.toLowerCase())return n.dragableObjects[t.id]?t:n.findDragableParent(t.parentNode)},e.mousemove=function(e){return t(e,"dragableCoverMask"),n(),!1},e.mouseup=function(e){const o=t(e,"currentDragObject");o.dragableCoverMask.style.display="none",o.currentDragObject=null,o.moving=!1,n()},e.mousedown=function(t){const n=e,o=g(t);let i=b(o);if(i=n.findDragableParent(i),!n.dragableObjects[i.id])return n.moving=!1,!1;n.currentDragObject=n.dragableObjects[i.id],document.body.appendChild(n.currentDragObject),n.posX=v(),n.posY=y(),n.offsetX=n.posX-n.currentDragObject.offsetLeft,n.offsetY=n.posY-n.currentDragObject.offsetTop;let a=n.dragableCoverMask;return a.style.position="absolute",a.style.display="block",a.style.border="2px solid black",a.style.left=n.currentDragObject.offsetLeft+"px",a.style.top=n.currentDragObject.offsetTop+"px",a.style.width=n.currentDragObject.offsetWidth+"px",a.style.height=n.currentDragObject.offsetHeight+"px",a.style.zIndex=1e5,n.moving=!0,!1},e.setDragable=function(e,t){o(!0,e,t)},e.setNONDragable=function(e,t){o(!1,e,t)},e}function E(e,t,n,o,i,a){var s,l;const c=r("#"+a).get(0);c?(this.mainWindow=c,this.titleBar=r(".WebWindowTitle",this.mainWindow).get(0),this.titleBar.id="WebWindowTitle"+a,this.windowArea=r(".WebWindowArea",this.mainWindow).get(0),this.windowArea.id="WebWindowArea"+a,this.footerArea=r(".WebWindowFooter",this.mainWindow).get(0),this.footerArea.id="WebWindowFooter"+a):(this.mainWindow=d("div",document.body,{className:"WebWindowMain",id:a}),this.mainWindow.style.left=t+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=o+"px",this.mainWindow.style.height=i+"px",this.titleBar=d("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+a}),this.windowArea=d("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+a}),this.footerArea=d("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+a})),d("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=e;let u={className:"WebWindowButtonBox"};var m=d("span",this.titleBar,u);u={name:"WW"+a,onsubmit:"return false;"};var f=d("form",m,u);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1},(s=function(e,t,n,o,i){let a,r,s;for(s=d("button",e,{className:"WebWindowButton",name:n,id:n+t}),s.innerHTML=o,s.onclick=i,r=e.innerHTML,r=r.toLowerCase(),a=new RegExp("button class");r.match(a);)r=r.replace(a,'button type="button" class')})(f,a,"rollup","-",this.minimize),s(f,a,"rolldown","o",this.maximize),s(f,a,"destroy","X",this.destroy),this.windowArea.style.width=o+"px",this.titleBar.style.width=o+"px",this.footerArea.style.width=o+"px",l=i-this.titleBar.offsetHeight-this.footerArea.offsetHeight,this.windowArea.style.height=l+"px",this.dragndrop=new W}f(window,"load",(function(){let e,t,n=m.onLoadEventStack;e=n.length;for(let o=0;o<e;o+=1)t=n[o],t&&"function"===(typeof t).toLowerCase()&&t()}),!1),E.prototype.popToFront=function(e){var t;t=g(e),function(e,t,n){let o,i,a,s;if(i=r(e),!(i.length<=0)&&(o=i.get(0),n&&n<i.length&&(o=i.get(n)),o))a=function(e,t){let n;e?(n=e.parentNode,n&&(n.nodeName.toLowerCase()!==t?a(n,t):s=n)):s=null},a(o,t)}(b(t),"div.WebWindowMain")},E.prototype.enableDrag=function(){var e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),f(this.mainWindow,"mousedown",e,!1)},E.prototype.disableDrag=function(){var e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),p(this.mainWindow,"mousedown",e,!1)},E.prototype.setTitle=function(e){var t=this.titleBar.getElementsByTagName("span");t&&t.length>0&&(t[0].innerHTML=e)},E.prototype.setContent=function(e){l(this.windowArea,e)};var N;N=()=>{const e=document.getElementById("main-window"),t=window.getComputedStyle(e);return new E("Canvas Test",t.offsetLeft,t.offsetTop,t.offsetWidth,t.offsetHeight,"main-window")},m.onLoadEventStack.push(N)})();
//# sourceMappingURL=canvasTest.js.source.map