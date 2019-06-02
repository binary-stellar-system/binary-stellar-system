!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){var r,o;if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}([function(t,e,n){"use strict";var r,o;function a(t,e,n){return n instanceof t||o()(n).toLowerCase()===e}function i(t){return null!=t}function c(t){return a(String,"string",t)}function u(t){return a(Number,"number",t)}function s(t){return Array.isArray(t)}function d(t){return a(Object,"object",t)}function l(t){var e=t.nodeName;return"textarea"===(e=e||"").toLowerCase()}function f(t){var e=o()(t),n=t.nodeName;return"input"===(n=n||"").toLowerCase()||"input"===e.toLowerCase()&&void 0!==e.type}n.d(e,"a",function(){return i}),n.d(e,"f",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"c",function(){return f}),r=n(6),o=n.n(r)},function(t,e,n){"use strict";var r,o;function a(t,e){var n,a,i,c={},u=t;if(c.length=0,c.objectName="selector",a=e||document,!r.f(u)&&r.e(u)&&u.hasOwnProperty("objectName")&&"selector"===u.objectName)return u;for(t instanceof HTMLElement&&(t.id?u="#"+t.id:(u=t.nodeName.toLowerCase(),t.className.length>0&&(u+="."+t.className.split(" ").join(" .")))),n=o.test(u)?(n=a.querySelector(u))?[n]:[]:(n=a.querySelectorAll(u))&&n.length>0?n:[],c.length=n.length,c.get=function(t){return n[t]},c.toArray=function(){return Array.from(n)},c.each=function(t){c.toArray().forEach(t)},i=0;i<c.length;i++)c[i]=n[i];return c}n.d(e,"a",function(){return a}),r=n(0),o=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/},function(t,e,n){"use strict";var r,o,a,i,c,u,s,d,l,f;function p(){var t=document;return t.documentElement&&("ontouchstart"in t.documentElement||"touchstart"in t.documentElement)}n.d(e,"a",function(){return i}),n.d(e,"h",function(){return c}),n.d(e,"d",function(){return d}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return p}),r=n(6),o=n.n(r),a=n(4),window.attachEvent&&!window.addEventListener?i=function(t,e,n,r){if(!t.attachEvent("on"+e,n))throw"Event "+e+" could not be added!"}:window.addEventListener&&(i=function(t,e,n,r){var o=r||!1;t.addEventListener(e,n,o)}),window.detachEvent&&!window.removeEventListener?c=function(t,e,n,r){if(!t.detachEvent("on"+e,n))throw"Event "+e+" could not be removed!"}:window.removeEventListener&&(c=function(t,e,n,r){t.removeEventListener(e,n,r)}),u=function(t){return window.event?window.event:t},s=function(t){var e,n=u(t);return n.srcElement?e=n.srcElement:n.target&&(e=n.target),e},d=function(t){var e=u(t),n=0;return e.pageX?n=e.pageX:e.clientX&&(n=e.clientX),n},l=function(t){var e=u(t),n=0;return e.pageY?n=e.pageY:e.clientY&&(n=e.clientY),n},document.createEvent&&function(t,e,n){var r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},f=function(t){a.a.onLoadEventStack.push(t)},i(window,"load",function(){var t,e,n=a.a.onLoadEventStack,r=n.length;for(e=0;e<r;e+=1)(t=n[e])&&"function"===o()(t).toLowerCase()&&t()},!1)},function(t,e,n){"use strict";var r,o,a,i,c,u,s,d;n.d(e,"a",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return d}),r=n(1),o=n(0),a=n(5),i=function(t,e,n){var r,i,c=document.body;if(e&&o.f(e)?c=document.getElementById(e):e&&(c=e),!t)return c;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(t)),!r)return r;if(c.appendChild(r),r&&n){for(i in n)try{r[i]=n[i]}catch(t){}n.className&&a.a(r,n.className)}return r},c=function(t,e,n){var a,i,c=Object(r.a)(t);if(!(c.length<=0)&&(n||(n=0),!(n>=c.length)&&c[n]))return a=c.get(n),i=new String(a.tagName).toLowerCase(),(e||""===e)&&function(t,e){o.f(t)||o.d(t)?o.c(i)||o.c(e)?e.value=t:o.g(e)?e.value=t:e.innerHTML=t:e&&o.e(t)&&e.appendChild(t)}(e,a),o.c(i)||o.c(a)?a.value:o.g(a)?a.value:o.f(a.innerHTML)?a.innerHTML:void 0},u=function(t,e,n){var o,a,i,c;if(!((a=Object(r.a)(t)).length<=0)&&(o=a.get(0),n&&n<a.length&&(o=a.get(n)),o))return(i=function(t,e){var n;t?(n=t.parentNode)&&(n.nodeName.toLowerCase()!==e?i(n,e):c=n):c=null})(o,e),c},s={maxx:function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.documentElement&&document.documentElement.offsetWidth||document.body&&document.body.clientWidth||document.body&&document.body.offsetWidth||0},maxy:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.documentElement&&document.documentElement.offsetHeight||document.body&&document.body.clientHeight||document.body&&document.body.offsetHeight||0}},d=function(t){var e,n=t;o.f(t)&&(n=Object(r.a)("#"+t).get(0)),n&&("block"===(e=a.b(t,"display"))?n.style.display="none":n.style.display="none"===e?"block":"none")}},function(t,e,n){"use strict";var r,o;o=(r=window.navigator).appVersion,e.a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:r.cookieEnabled,name:r.appName,uaName:r.appName,OS:r.platform,uaOS:r.platform,userAgent:r.userAgent,appVersion:parseFloat(o,10),uaAppVersion:parseFloat(o,10),version:parseFloat(o,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""}},function(t,e,n){"use strict";var r,o,a,i,c,u,s;n.d(e,"a",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s}),r=n(1),o=n(0),a=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},i=function(t,e){var n,r=-1,o=t.className.split(" "),a=o.length;for(n=0;n<a;n+=1)if(o[n]===e){r=n;break}-1!==r&&(o.splice(n,1),t.className=o.join(" "))},c=function(t,e,n){i(t,e),a(t,n)},u=function(t,e){var n,r,a,i=t;if(o.f(t)&&(i=document.getElementById(t)),i&&i.className)for(r=(n=i.className.split(" ")).length,a=0;a<r;a+=1)if(n[a]===e)return!0;return!1},s=function(t,e){var n,a=t;return o.f(t)&&(a=Object(r.a)("#"+t).get(0)),a?(a.currentStyle?n=a.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(a,null).getPropertyValue(e)),n):""}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},,function(t,e,n){"use strict";var r={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],numberOfDaysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],weekDayShortNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],getFirstOfMonthDayOfWeek:function(t){var e=t?new Date(t.getTime()):new Date;return e.setDate(1),e.getDay()},getDaysInMonth:function(t){var e=t?new Date(t.getTime()):new Date,n=e.getMonth(),o=e.getFullYear();return 1===n?o%4==0?o%400==0?29:o%100==0?28:29:28:r.numberOfDaysInMonth[n]},setFullDate:function(t,e,n){var r=new Date;return r.setMonth(t),r.setDate(e),r.setFullYear(n),r},getAMPM:function(t){return t.getHours()>11?" PM":" AM"}};e.a=r},function(t,e,n){"use strict";var r,o,a,i,c=n(12);function u(){this.data=new c.a,this.keys={}}u.prototype.setItem=function(t,e){this.data.add(t,e),this.keys[t]=e},u.prototype.getItem=function(t){return this.data.get(t)},u.prototype.removeItem=function(t){this.keys[t]=void 0,this.data.remove(t)},u.prototype.key=function(t){return this.keys[t]},u.prototype.clear=function(){this.data.clear(),this.keys=[]},n.d(e,"d",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),r=function(){var t=!1;if(window.sessionStorage)try{window.sessionStorage.setItem("testData","dunny"),window.sessionStorage.removeItem("testData"),t=!0}catch(t){}return t}(),o=function(){var t=!1;try{window.localStorage&&(window.localStorage.setItem("testData","dunny"),window.localStorage.removeItem("testData"),t=!0)}catch(t){}return t}(),a=r?window.sessionStorage:new u,i=o?window.localStorage:new u},,function(t,e,n){t.exports=n(31)},function(t,e,n){"use strict";function r(){this.index=0,this.list={}}n.d(e,"a",function(){return r}),r.prototype.add=function(t,e){this.list[t]=e,this.index++},r.prototype.remove=function(t){this.list[t]=void 0,this.index--},r.prototype.get=function(t){return this.list[t]},r.prototype.clear=function(){for(var t in this.list)t&&(this.list[t]=void 0);this.index=0}},function(t,e,n){"use strict";var r,o,a,i,c;function u(t){var e=i[t.getDay()],n=c[t.getMonth()];return"".concat(e,", ").concat(n," ").concat(t.getDate(),", ").concat(t.getFullYear())}function s(){var t=new Date,e=u(t),n="<li>Today is ".concat(e,".</li>"),r=function(){var t,e;return Object(a.a)(document.lastModified)&&document.lastModified.length>0?(t=Date.parse(document.lastModified),(e=new Date).setTime(t),u(e)):""}();return r.length>0&&(n+="<li>Last modified on ".concat(r,".</li>")),n+"<li>Copyright ".concat(t.getFullYear(),".</li>")}function d(t){var e,n;t&&(e=r.a("ul",t))&&(e.innerHTML=s()),void 0===document.querySelectorAll&&(-1!==(n=(n=window.location.pathname).substring(n.lastIndexOf("/"))).indexOf("fish_pictures")?window.location.href="../":-1===n.indexOf("index.html")&&"/"!==n&&(window.location.href="index.html"))}n.d(e,"a",function(){return d}),r=n(3),o=n(8),a=n(0),i=o.a.weekDayShortNames,c=o.a.monthShortNames},,function(t,e){function n(t,e,n,r,o,a,i){var c,u;try{u=(c=t[a](i)).value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)})}}},,,,,function(t,e,n){"use strict";var r=n(11),o=n.n(r),a=n(15),i=n.n(a);e.a=function(t,e){return function(){return i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return r=t.sent,t.next=5,r.text();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}},,,,,,function(t,e,n){"use strict";var r=n(3),o=n(2),a=n(1);function i(){var t=this,e=function(e,n){var r,a,i=t;return r=o.c(e),a=o.f(r),i.moving&&i.dragableCoverMask.id===a.id&&(i.posX=o.d(),i.posY=o.e(),i[n].style.left=i.posX-i.offsetX+"px",i[n].style.top=i.posY-i.offsetY+"px"),i},n=function(){var t;window.getSelection?(t=window.getSelection())&&t.empty?t.empty():t&&t.removeAllRanges&&t.removeAllRanges():document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()},i=function(e,n,r){var i=Object(a.a)("#"+n).get(0),c=r||n,u=Object(a.a)("#"+c).get(0);i&&u&&(e?(t.dragableObjects[u.id]=i,o.a(u,"mousedown",t.mousedown,!1)):(t.dragableObjects[u.id]=null,o.h(u,"mousedown",t.mousedown,!1)))};return t.dragableObjects=[],t.initialize=function(){var e=t;e.isInitialized||(e.dragableCoverMask=Object(a.a)("#-dragndrop-enabled-x").get(0),e.dragableCoverMask||(e.dragableCoverMask=r.a("div",document.body),e.dragableCoverMask.id="-dragndrop-enabled-x"),e.dragableCoverMask.style.display="none",o.a(document,"mousemove",e.mousemove,!1),o.a(document,"mouseup",e.mouseup,!1),e.isInitialized=!0)},t.findDragableParent=function(e){var n=t;if(e&&e.nodeName&&"body"!==e.nodeName.toLowerCase())return n.dragableObjects[e.id]?e:n.findDragableParent(e.parentNode)},t.mousemove=function(t){return e(t,"dragableCoverMask"),n(),!1},t.mouseup=function(t){var r=e(t,"currentDragObject");r.dragableCoverMask.style.display="none",r.currentDragObject=null,r.moving=!1,n()},t.mousedown=function(e){var n,r=t,a=o.c(e),i=o.f(a);return i=r.findDragableParent(i),r.dragableObjects[i.id]?(r.currentDragObject=r.dragableObjects[i.id],document.body.appendChild(r.currentDragObject),r.posX=o.d(),r.posY=o.e(),r.offsetX=r.posX-r.currentDragObject.offsetLeft,r.offsetY=r.posY-r.currentDragObject.offsetTop,(n=r.dragableCoverMask).style.position="absolute",n.style.display="block",n.style.border="2px solid black",n.style.left=r.currentDragObject.offsetLeft+"px",n.style.top=r.currentDragObject.offsetTop+"px",n.style.width=r.currentDragObject.offsetWidth+"px",n.style.height=r.currentDragObject.offsetHeight+"px",n.style.zIndex=1e5,r.moving=!0,!1):r.moving=!1},t.setDragable=function(t,e){i(!0,t,e)},t.setNONDragable=function(t,e){i(!1,t,e)},t}function c(t,e,n,o,c,u){var s,d,l,f,p,h=Object(a.a)("#"+u).get(0);h?(this.mainWindow=h,this.titleBar=Object(a.a)(".WebWindowTitle",this.mainWindow).get(0),this.titleBar.id="WebWindowTitle"+u,this.windowArea=Object(a.a)(".WebWindowArea",this.mainWindow).get(0),this.windowArea.id="WebWindowArea"+u,this.footerArea=Object(a.a)(".WebWindowFooter",this.mainWindow).get(0),this.footerArea.id="WebWindowFooter"+u):(this.mainWindow=r.a("div",document.body,{className:"WebWindowMain",id:u}),this.mainWindow.style.left=e+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=o+"px",this.mainWindow.style.height=c+"px",this.titleBar=r.a("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+u}),this.windowArea=r.a("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+u}),this.footerArea=r.a("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+u})),r.a("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=t,l={className:"WebWindowButtonBox"},f=r.a("span",this.titleBar,l),l={name:"WW"+u,onsubmit:"return false;"},p=r.a("form",f,l),this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1},(s=function(t,e,n,o,a){var i,c,u,s={className:"WebWindowButton",name:n,id:n+e};for((u=r.a("button",t,s)).innerHTML=o,u.onclick=a,c=(c=t.innerHTML).toLowerCase(),i=new RegExp("button class");c.match(i);)c=c.replace(i,'button type="button" class')})(p,u,"rollup","-",this.minimize),s(p,u,"rolldown","o",this.maximize),s(p,u,"destroy","X",this.destroy),this.windowArea.style.width=o+"px",this.titleBar.style.width=o+"px",this.footerArea.style.width=o+"px",d=c-this.titleBar.offsetHeight-this.footerArea.offsetHeight,this.windowArea.style.height=d+"px",this.dragndrop=new i}n.d(e,"a",function(){return c}),c.prototype.popToFront=function(t){var e,n;n=o.c(t),e=o.f(n),r.b(e,"div.WebWindowMain")},c.prototype.enableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),o.a(this.mainWindow,"mousedown",t,!1)},c.prototype.disableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),o.h(this.mainWindow,"mousedown",t,!1)},c.prototype.setTitle=function(t){var e=this.titleBar.getElementsByTagName("span");e&&e.length>0&&(e[0].innerHTML=t)},c.prototype.setContent=function(t){r.c(this.windowArea,t)}},,,,,function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(32),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r,o,a,i,c,u,s,d,l,f=Object.prototype,p=f.hasOwnProperty,h="function"==typeof Symbol?Symbol:{},m=h.iterator||"@@iterator",y=h.asyncIterator||"@@asyncIterator",b=h.toStringTag||"@@toStringTag",v="object"==typeof t,g=e.regeneratorRuntime;function w(t,e,n,u){var s=e&&e.prototype instanceof k?e:k,d=Object.create(s.prototype),l=new D(u||[]);return d._invoke=function(t,e,n){var u=r;return function(s,d){var l,f,p;if(u===a)throw new Error("Generator is already running");if(u===i){if("throw"===s)throw d;return M()}for(n.method=s,n.arg=d;;){if((l=n.delegate)&&(f=N(l,n))){if(f===c)continue;return f}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(u===r)throw u=i,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);if(u=a,"normal"===(p=x(t,e,n)).type){if(u=n.done?i:o,p.arg===c)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(u=i,n.method="throw",n.arg=p.arg)}}}(t,n,l),d}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function k(){}function E(){}function S(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var i,c,u=x(t[n],t,r);if("throw"!==u.type)return(c=(i=u.arg).value)&&"object"==typeof c&&p.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){i.value=t,o(i)},function(t){return e("throw",t,o,a)});a(u.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function N(t,e){var r,o,a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,N(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}return"throw"===(r=x(a,t.iterator,e.arg)).type?(e.method="throw",e.arg=r.arg,e.delegate=null,c):(o=r.arg)?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function W(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(W,this),this.reset(!0)}function T(t){var e,r,o;if(t){if(e=t[m])return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(o=function e(){for(;++r<t.length;)if(p.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e}).next=o}return{next:M}}function M(){return{value:n,done:!0}}g?v&&(t.exports=g):((g=e.regeneratorRuntime=v?t.exports:{}).wrap=w,r="suspendedStart",o="suspendedYield",a="executing",i="completed",c={},(u={})[m]=function(){return this},(d=(s=Object.getPrototypeOf)&&s(s(T([]))))&&d!==f&&p.call(d,m)&&(u=d),l=S.prototype=k.prototype=Object.create(u),E.prototype=l.constructor=S,S.constructor=E,S[b]=E.displayName="GeneratorFunction",g.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},g.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(l),t},g.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[y]=function(){return this},g.AsyncIterator=O,g.async=function(t,e,n,r){var o=new O(w(t,e,n,r));return g.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(l),l[b]="Generator",l[m]=function(){return this},l.toString=function(){return"[object Generator]"},g.keys=function(t){var e,n=[];for(e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},g.values=T,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&p.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){var t;if(this.done=!0,"throw"===(t=this.tryEntries[0].completion).type)throw t.arg;return this.rval},dispatchException:function(t){var e,r,o,a,i,c;if(this.done)throw t;function u(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(r=(e=this).tryEntries.length-1;r>=0;--r){if(o=this.tryEntries[r],a=o.completion,"root"===o.tryLoc)return u("end");if(o.tryLoc<=this.prev)if(i=p.call(o,"catchLoc"),c=p.call(o,"finallyLoc"),i&&c){if(this.prev<o.catchLoc)return u(o.catchLoc,!0);if(this.prev<o.finallyLoc)return u(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return u(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return u(o.finallyLoc)}}},abrupt:function(t,e){var n,r,o,a;for(n=this.tryEntries.length-1;n>=0;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&p.call(r,"finallyLoc")&&this.prev<r.finallyLoc){o=r;break}return o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null),(a=o?o.completion:{}).type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){var e,n;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),c},catch:function(t){var e,n,r,o;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).tryLoc===t)return"throw"===(r=n.completion).type&&(o=r.arg,j(n)),o;throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),c}})}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r,o,a,i,c,u,s,d,l,f,p,h,m,y,b,v,g,w,x,k,E,S,L,O,N,W,j;function D(t){return function(){return i()(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(e);case 2:return n=t.sent,t.abrupt("return",JSON.parse(n));case 4:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function T(){return function(){return i()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(p);case 2:return e=t.sent,t.abrupt("return",e.root.stations.station.map(function(t){return{name:t.name,abbr:t.abbr}}));case 4:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function M(){return function(){return i()(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(w);case 2:return e=t.sent,n="".concat(e.root.date," ").concat(e.root.time),t.abrupt("return",e.root.bsa.map(function(t){return{dateTime:n,station:t.station,description:t.description}}));case 5:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function I(t){return function(){return i()(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(h).concat(e));case 2:if(n=t.sent,r="".concat(n.root.date," ").concat(n.root.time),n.root.station[0].etd){t.next=6;break}return t.abrupt("return",[]);case 6:return t.abrupt("return",n.root.station[0].etd.map(function(t){var e=t.estimate.map(function(t){return{minutes:t.minutes,platform:t.platform,direction:t.direction,delay:t.delay}}).reduce(function(t,e){return{minutes:"".concat(t.minutes,", ").concat(e.minutes),platform:"".concat(t.platform,", ").concat(e.platform),direction:e.direction,delay:"".concat(t.delay,", ").concat(e.delay)}});return{destination:t.destination,abbreviation:t.abbreviation,dateTime:r,minutes:e.minutes,platform:e.platform,direction:e.direction,delay:e.delay}}));case 7:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function A(t,e,n){return"".concat(t).concat(v).concat(e).concat(g).concat(n)}function B(t,e,n){return function(){return i()(o.a.mark(function t(e,n,r){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(b).concat(A(e,n,r)));case 2:t.sent;case 3:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function C(t,e){return function(){return i()(o.a.mark(function t(e,n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(m).concat(e).concat(y).concat(n));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function H(){return function(){return i()(o.a.mark(function t(){var e,n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=[],x.a&&(n=x.b.getItem(S),r=(new Date).getTime()-k,n&&n>r&&(a=x.b.getItem(E))&&(e=JSON.parse(a))),e&&0!==e.length){t.next=7;break}return t.next=5,T();case 5:e=t.sent,x.a&&x.b.setItem(S,(new Date).getTime());case 7:if(e&&0!==e.length){t.next=9;break}throw"Could not get stations!";case 9:return x.a&&x.b.setItem(E,JSON.stringify(e)),t.abrupt("return",e);case 11:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function F(){return function(){return i()(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:return e=t.sent,n=e.map(function(t){return'<div data-abbr="'.concat(t.abbr,'">').concat(t.name,"</div>")}).reduce(function(t,e){return t+e}),t.abrupt("return",'<div id="bart-stations-list">'.concat(n,"</div>"));case 5:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function P(t){return function(){return i()(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:if(n=t.sent){t.next=5;break}throw"Could not get trains!";case 5:if(0!==n.length){t.next=7;break}return t.abrupt("return",'<div id="bart-train-list">No trains found</div>');case 7:return r=n.sort(function(t,e){return"North"===t.direction?1:-1}).map(function(t){return"<div>\n            Train: ".concat(t.destination,"\n            <br>Times: ").concat(t.minutes,"\n            <br>Platform: ").concat(t.platform,"\n            <br>Direction: ").concat(t.direction,"\n            <br>Delays: ").concat(t.delay,"\n               </div>")}).reduce(function(t,e){return t+e}),t.abrupt("return",'<div id="bart-train-list">'.concat(r,"</div>"));case 9:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function _(t){return function(){return i()(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:if(n=t.sent){t.next=5;break}throw"Could not get alerts!";case 5:return r=n.map(function(t){return"<div>\n                  Date Time: ".concat(t.dateTime,"\n                  <br>Station: ").concat(t.station,"\n                  <br>Description: ").concat(t.description["#cdata-section"],"\n               </div>")}).reduce(function(t,e){return t+e}),t.abrupt("return",'<div id="bart-alert-list">'.concat(r,"</div>"));case 7:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function R(){return function(){return i()(o.a.mark(function t(){var e,n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:return e=t.sent,n=e.map(function(t){return'<option value="'.concat(t.abbr,'">').concat(t.name,"</option>")}).reduce(function(t,e){return t+e}),r='<select id="fares-source">'.concat(L).concat(n,"</select>"),a='<select id="fares-destination">'.concat(L).concat(n,"</select>"),t.abrupt("return","Starting Station: ".concat(r,"<br><br>Destination Station: ").concat(a,'<br><div id="fare-results"></div>'));case 6:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function Y(){return function(){return i()(o.a.mark(function t(){var e,n,r,a,i,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:return e=t.sent,n=e.map(function(t){return'<option value="'.concat(t.abbr,'">').concat(t.name,"</option>")}).reduce(function(t,e){return t+e}),r='<select id="trip-source">'.concat(O).concat(n,"</select>"),a='<select id="trip-destination">'.concat(O).concat(n,"</select>"),i=new Date,c=i.getHours(),"AM",0===c?c=12:c>12&&(c-=12,"PM"),u='<input type="hidden" value="'.concat("time=now",' name="trip-time" id="trip-time">'),t.abrupt("return","Starting Station: ".concat(r,"<br><br>Destination Station: ").concat(a,"<br>").concat(u,'<br><div id="trip-results"></div>'));case 11:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function X(){var t=document.getElementById("main-window"),e=window.getComputedStyle(t);return new N.a("BART Info",e.offsetLeft,e.offsetTop,e.offsetWidth,e.offsetHeight,"main-window")}function J(){return function(){return i()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/frags/bart-nav.frag",t.next=3,Object(d.a)("/frags/bart-nav.frag");case 3:e=t.sent,document.getElementById("menu").innerHTML=e.replace(/\n/g,"");case 6:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function z(){var t,e;document.getElementById("slist").style.display="none",document.getElementById("tlist").style.display="none",(t=document.getElementById("fare-list"))&&(t.style.display="none"),(e=document.getElementById("trips-list"))&&(e.style.display="none")}function V(){return function(){return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:z(),document.getElementById("slist").style.display="block",document.getElementById("tlist").style.display="block";case 5:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function G(){return function(){return i()(o.a.mark(function t(){var e,n,r,a,i,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.getElementById("fares-source"),n=document.getElementById("fares-destination"),0!==e.selectedIndex&&0!==n.selectedIndex){t.next=4;break}return t.abrupt("return");case 4:return r=e.options[e.selectedIndex].value,a=n.options[n.selectedIndex].value,t.next=8,C(r,a);case 8:i=t.sent,c=i.root.fares.fare.map(function(t){return"".concat(t["@name"],": ").concat(t["@amount"])}).reduce(function(t,e){return"".concat(t,"<br>").concat(e)}),document.getElementById("fare-results").innerHTML=c;case 12:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function q(){return function(){return i()(o.a.mark(function t(){var e,n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return z(),e=document.getElementById("slist"),n=e.parentNode,t.next=5,R();case 5:r=t.sent,(a=s.a("div",n,{id:"fare-list"})).innerHTML=r,a.style.display="block",W||u.a(a,"click",G);case 10:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function U(){return function(){return i()(o.a.mark(function t(){var e,n,r,a,i,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.getElementById("trip-source"),n=document.getElementById("trip-destination"),r=document.getElementById("trip-time"),0!==e.selectedIndex&&0!==n.selectedIndex){t.next=5;break}return t.abrupt("return");case 5:return a=e.options[e.selectedIndex].value,i=n.options[n.selectedIndex].value,t.next=9,B(a,i,r);case 9:c=t.sent,u=c.root,document.getElementById("trip-results").innerHTML=u;case 13:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}function $(){return function(){return i()(o.a.mark(function t(){var e,n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return z(),e=document.getElementById("slist"),n=e.parentNode,t.next=5,Y();case 5:r=t.sent,(a=s.a("div",n,{id:"trips-list"})).innerHTML=r,a.style.display="block",j||u.a(a,"click",U);case 10:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}n.r(e),r=n(11),o=n.n(r),a=n(15),i=n.n(a),c=n(1),u=n(2),s=n(3),d=n(20),l="https://api.bart.gov",f="&json=y&key=".concat("MW9S-E7SL-26DU-VV8V"),p="".concat(l,"/api/stn.aspx?cmd=stns").concat(f),h="".concat(l,"/api/etd.aspx?cmd=etd").concat(f,"&orig="),m="".concat(l,"/api/sched.aspx?cmd=fare").concat(f,"&orig="),y="&dest=",b="".concat(l,"/api/sched.aspx?cmd=depart").concat(f,"&b=0&a=3&orig="),"".concat(l,"/api/sched.aspx?cmd=arrive").concat(f,"&b=2&a=1&orig="),v="&dest=",g="&date=",w="".concat(l,"/api/bsa.aspx?cmd=bsa").concat(f),x=n(9),k=604800,E="SimpleBARTAPIStationList",S="SimpleBARTAPIStationListTime",O=L="<option>Please Select A Station</option>",n(13),N=n(26),j=W=!1,u.b(function(){return function(){return i()(o.a.mark(function t(){var e,n,r,a,d,l,f,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:return e=t.sent,n=X(),r=n.windowArea,a=s.a("div",r,{id:"slist"}),d=s.a("div",r,{id:"tlist"}),a.innerHTML=e,l=function(){var t=i()(o.a.mark(function t(e){var n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=u.f(e)){t.next=3;break}return t.abrupt("return");case 3:if("DIV"===n.nodeName.toUpperCase()){t.next=5;break}return t.abrupt("return");case 5:if(n.attributes["data-abbr"]){t.next=7;break}return t.abrupt("return");case 7:return r=n.attributes["data-abbr"].value,t.next=10,P(r);case 10:a=t.sent,d.innerHTML=a;case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),u.a(r,"click",l),f=function(){var t=i()(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:n=t.sent,d.innerHTML=n;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),t.next=13,J();case 13:p=Object(c.a)(".url-wrapper select").get(0),u.a(p,"change",function(t){var e=u.c(t),n=u.f(e),r=n.options[n.selectedIndex].text.toLowerCase();switch(r){case"alerts":V(),f();break;case"train list":V();break;case"fare estimator":q();break;case"trip planner":$()}});case 15:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)})}]);
//# sourceMappingURL=simpleBARTAPI.js.source.map