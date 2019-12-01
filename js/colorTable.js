!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){var r,o;if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=56)}({0:function(t,e,n){"use strict";var r,o;function i(t,e,n){return n instanceof t||o()(n).toLowerCase()===e}function a(t){return null!=t}function u(t){return i(String,"string",t)}function c(t){return i(Number,"number",t)}function s(t){return Array.isArray(t)}function f(t){return i(Object,"object",t)}function l(t){var e=t.nodeName;return"textarea"===(e=e||"").toLowerCase()}function d(t){var e=o()(t),n=t.nodeName;return"input"===(n=n||"").toLowerCase()||"input"===e.toLowerCase()&&void 0!==e.type}n.d(e,"a",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"c",function(){return d}),r=n(5),o=n.n(r)},1:function(t,e,n){"use strict";var r,o;function i(t,e){var n,i,a,u={},c=t;if(u.length=0,u.objectName="selector",i=e||document,!r.f(c)&&r.e(c)&&c.hasOwnProperty("objectName")&&"selector"===c.objectName)return c;for(t instanceof HTMLElement&&(t.id?c="#"+t.id:(c=t.nodeName.toLowerCase(),t.className.length>0&&(c+="."+t.className.split(" ").join(" .")))),n=o.test(c)?(n=i.querySelector(c))?[n]:[]:(n=i.querySelectorAll(c))&&n.length>0?n:[],u.length=n.length,u.get=function(t){return n[t]},u.toArray=function(){return Array.from(n)},u.each=function(t){u.toArray().forEach(t)},a=0;a<u.length;a++)u[a]=n[a];return u}n.d(e,"a",function(){return i}),r=n(0),o=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/},10:function(t,e,n){"use strict";var r,o;function i(){var t,e=0;for(t=0;t<arguments.length;t+=1)e+=+arguments[t];return e}function a(t,e){return+t-+e}function u(){var t,e=1;for(t=0;t<arguments.length;t+=1)e=+e*+arguments[t];return e}function c(t,e){return+t/+e}function s(t){return Math.pow(t,2)}function f(t){return Math.pow(t,3)}function l(t,e,n,r){var o=a(n,t),u=a(r,e),c=i(s(o),s(u));return Math.sqrt(c)}function d(t,e,n,r){return i(t,e,n,r)}function h(t,e){for(var n=e,o=r[n%t];n>=t;)o=(n=c(a(n,n%t),t))>=t?r[n%t]+o:r[n]+o;return o}function p(t,e){var n,o,c=0,s=1;function f(t){var e,n,o="";for(e=0,n=r.length;e<n;e+=1)if(r[e]===t){o=e;break}return o}for(;s<=e.length;)n=Math.pow(t,a(s,1)),o=a(e.length,s),c=i(c,u(f(e.charAt(o)),n)),s++;return c}function m(t,e,n){var r=x(n),o=u(t,Math.cos(r)),i=u(e,Math.sin(r));return{x:Math.round(o),y:Math.round(i)}}function g(t,e){var n,r,o=[];for(n=0;n<=360;n++)r=m(t,e,n),o.push(r);return o}function y(t,e){var n=x(e),r=u(t,Math.cos(n)),o=u(t,Math.sin(n));return{x:Math.round(r),y:Math.round(o)}}function b(t){var e,n,r=[];for(e=0;e<=360;e++)n=y(t,e),r.push(n);return r}function v(t,e,n,r){var o=s(a(t,n)),u=s(a(e,r));return Math.sqrt(i(o,u))}function w(t,e){return{x:Math.floor(c(t,2)),y:Math.floor(c(e,2))}}function E(t,e){var n=w(t,e),r=Math.ceil(c(n.x,2)),o=Math.ceil(c(n.y,2));return r<o?r:o}function x(t){return t*Math.PI/180}n.d(e,"a",function(){return i}),n.d(e,"l",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"k",function(){return s}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return p}),n.d(e,"h",function(){return g}),n.d(e,"g",function(){return b}),n.d(e,"e",function(){return v}),n.d(e,"i",function(){return w}),n.d(e,"j",function(){return E}),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],o={add:i,subtract:a,multiply:u,divide:c,square:s,cube:f,computeLineLength:l,computePerimeter:function(t,e,n,r,o,i,a,u){return d(l(t,e,n,r),l(n,r,o,i),l(o,i,a,u),l(a,u,t,e))},computePerimeterByLength:d,computePerimeterOfSquare:function(t){return u(t,4)},areaOfTriangle:function(t,e){return u(t,e,.5)},areaOfTrapizoid:function(t,e,n){return u(t,c(i(e,n),2))},pythagorean:function(t,e){return Math.sqrt(s(t)+s(e))},average:function(){var t=arguments,e=0;return Object.keys(arguments).forEach(function(n){e=i(e,t[n])}),c(e,arguments.length)},areaOfCircle:function(t){return u(Math.PI,s(t))},circumferenceOfACircle:function(t){return u(2,Math.PI,t)},surfaceAreaCone:function(t,e){var n=Math.sqrt(u(Math.PI,s(t))),r=i(s(t),s(e));return i(n,u(t,Math.PI,r))},volumeCone:function(t,e){return u(1/3,Math.PI,s(t),e)},surfaceAreaCylinder:function(t,e){return i(u(2,Math.PI,s(t)),u(2,Math.PI,t,e))},volumeCylinder:function(t,e){return u(Math.PI,s(t),e)},surfaceAreaSphere:function(t){return u(4,Math.PI,s(t))},volumeSphere:function(t){return u(4/3,Math.PI,f(t))},inverse:function(t){return u(-1,t)},oneOver:function(t){return c(1,t)},factorial:function t(e){return+e<=1?1:u(e,t(+e-1))},convertFromBaseTenToBaseX:h,convertFromBaseXToBaseTen:p,getEllipsePoint:m,getEllipsePoints:g,getCirclePoint:y,getCirclePoints:b,distanceBetweenCirclesCenters:v,getRectangleCenter:w,getRectangleCorner:E,degreesToRadians:x,radiansToDegrees:function(t){return 180*t/Math.PI},generateGUID:function(){var t,e,n,r,o,i=h(16,1e6*(new Date).getTime()),a="";for(t=0,e=i.length;t<e;t+=1)a+=i[t]<<1;for(n="",r=0,o=(a=i+h(16,a)).length;r<o;r+=1)n+=a[r],r>0&&r%5==0&&r%10!=0&&(n+="-"),r>0&&r%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}},e.d=o},13:function(t,e){function n(t,e,n,r,o,i,a){var u,c;try{c=(u=t[i](a)).value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)})}}},2:function(t,e,n){"use strict";var r,o,i,a,u,c,s,f,l,d;function h(){var t=document;return t.documentElement&&("ontouchstart"in t.documentElement||"touchstart"in t.documentElement)}n.d(e,"a",function(){return a}),n.d(e,"h",function(){return u}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return d}),n.d(e,"g",function(){return h}),r=n(5),o=n.n(r),i=n(4),window.attachEvent&&!window.addEventListener?a=function(t,e,n,r){if(!t.attachEvent("on"+e,n))throw"Event "+e+" could not be added!"}:window.addEventListener&&(a=function(t,e,n,r){var o=r||!1;t.addEventListener(e,n,o)}),window.detachEvent&&!window.removeEventListener?u=function(t,e,n,r){if(!t.detachEvent("on"+e,n))throw"Event "+e+" could not be removed!"}:window.removeEventListener&&(u=function(t,e,n,r){t.removeEventListener(e,n,r)}),c=function(t){return window.event?window.event:t},s=function(t){var e,n=c(t);return n.srcElement?e=n.srcElement:n.target&&(e=n.target),e},f=function(t){var e=c(t),n=0;return e.pageX?n=e.pageX:e.clientX&&(n=e.clientX),n},l=function(t){var e=c(t),n=0;return e.pageY?n=e.pageY:e.clientY&&(n=e.clientY),n},document.createEvent&&function(t,e,n){var r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},d=function(t){i.a.onLoadEventStack.push(t)},a(window,"load",function(){var t,e,n=i.a.onLoadEventStack,r=n.length;for(e=0;e<r;e+=1)(t=n[e])&&"function"===o()(t).toLowerCase()&&t()},!1)},21:function(t,e,n){"use strict";var r=n(3),o=n(2),i=n(1);function a(){var t=this,e=function(e,n){var r,i,a=t;return r=o.c(e),i=o.f(r),a.moving&&a.dragableCoverMask.id===i.id&&(a.posX=o.d(),a.posY=o.e(),a[n].style.left=a.posX-a.offsetX+"px",a[n].style.top=a.posY-a.offsetY+"px"),a},n=function(){var t;window.getSelection?(t=window.getSelection())&&t.empty?t.empty():t&&t.removeAllRanges&&t.removeAllRanges():document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()},a=function(e,n,r){var a=Object(i.a)("#"+n).get(0),u=r||n,c=Object(i.a)("#"+u).get(0);a&&c&&(e?(t.dragableObjects[c.id]=a,o.a(c,"mousedown",t.mousedown,!1)):(t.dragableObjects[c.id]=null,o.h(c,"mousedown",t.mousedown,!1)))};return t.dragableObjects=[],t.initialize=function(){var e=t;e.isInitialized||(e.dragableCoverMask=Object(i.a)("#-dragndrop-enabled-x").get(0),e.dragableCoverMask||(e.dragableCoverMask=r.a("div",document.body),e.dragableCoverMask.id="-dragndrop-enabled-x"),e.dragableCoverMask.style.display="none",o.a(document,"mousemove",e.mousemove,!1),o.a(document,"mouseup",e.mouseup,!1),e.isInitialized=!0)},t.findDragableParent=function(e){var n=t;if(e&&e.nodeName&&"body"!==e.nodeName.toLowerCase())return n.dragableObjects[e.id]?e:n.findDragableParent(e.parentNode)},t.mousemove=function(t){return e(t,"dragableCoverMask"),n(),!1},t.mouseup=function(t){var r=e(t,"currentDragObject");r.dragableCoverMask.style.display="none",r.currentDragObject=null,r.moving=!1,n()},t.mousedown=function(e){var n,r=t,i=o.c(e),a=o.f(i);return a=r.findDragableParent(a),r.dragableObjects[a.id]?(r.currentDragObject=r.dragableObjects[a.id],document.body.appendChild(r.currentDragObject),r.posX=o.d(),r.posY=o.e(),r.offsetX=r.posX-r.currentDragObject.offsetLeft,r.offsetY=r.posY-r.currentDragObject.offsetTop,(n=r.dragableCoverMask).style.position="absolute",n.style.display="block",n.style.border="2px solid black",n.style.left=r.currentDragObject.offsetLeft+"px",n.style.top=r.currentDragObject.offsetTop+"px",n.style.width=r.currentDragObject.offsetWidth+"px",n.style.height=r.currentDragObject.offsetHeight+"px",n.style.zIndex=1e5,r.moving=!0,!1):r.moving=!1},t.setDragable=function(t,e){a(!0,t,e)},t.setNONDragable=function(t,e){a(!1,t,e)},t}function u(t,e,n,o,u,c){var s,f,l,d,h,p=Object(i.a)("#"+c).get(0);p?(this.mainWindow=p,this.titleBar=Object(i.a)(".WebWindowTitle",this.mainWindow).get(0),this.titleBar.id="WebWindowTitle"+c,this.windowArea=Object(i.a)(".WebWindowArea",this.mainWindow).get(0),this.windowArea.id="WebWindowArea"+c,this.footerArea=Object(i.a)(".WebWindowFooter",this.mainWindow).get(0),this.footerArea.id="WebWindowFooter"+c):(this.mainWindow=r.a("div",document.body,{className:"WebWindowMain",id:c}),this.mainWindow.style.left=e+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=o+"px",this.mainWindow.style.height=u+"px",this.titleBar=r.a("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+c}),this.windowArea=r.a("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+c}),this.footerArea=r.a("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+c})),r.a("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=t,l={className:"WebWindowButtonBox"},d=r.a("span",this.titleBar,l),l={name:"WW"+c,onsubmit:"return false;"},h=r.a("form",d,l),this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1},(s=function(t,e,n,o,i){var a,u,c,s={className:"WebWindowButton",name:n,id:n+e};for((c=r.a("button",t,s)).innerHTML=o,c.onclick=i,u=(u=t.innerHTML).toLowerCase(),a=new RegExp("button class");u.match(a);)u=u.replace(a,'button type="button" class')})(h,c,"rollup","-",this.minimize),s(h,c,"rolldown","o",this.maximize),s(h,c,"destroy","X",this.destroy),this.windowArea.style.width=o+"px",this.titleBar.style.width=o+"px",this.footerArea.style.width=o+"px",f=u-this.titleBar.offsetHeight-this.footerArea.offsetHeight,this.windowArea.style.height=f+"px",this.dragndrop=new a}n.d(e,"a",function(){return u}),u.prototype.popToFront=function(t){var e,n;n=o.c(t),e=o.f(n),r.b(e,"div.WebWindowMain")},u.prototype.enableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),o.a(this.mainWindow,"mousedown",t,!1)},u.prototype.disableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),o.h(this.mainWindow,"mousedown",t,!1)},u.prototype.setTitle=function(t){var e=this.titleBar.getElementsByTagName("span");e&&e.length>0&&(e[0].innerHTML=t)},u.prototype.setContent=function(t){r.c(this.windowArea,t)}},25:function(t,e,n){var r=function(t){"use strict";var e,n,r,o,i,a,u,c,s,f,l=Object.prototype,d=l.hasOwnProperty,h="function"==typeof Symbol?Symbol:{},p=h.iterator||"@@iterator",m=h.asyncIterator||"@@asyncIterator",g=h.toStringTag||"@@toStringTag";function y(t,e,u,c){var s=e&&e.prototype instanceof v?e:v,f=Object.create(s.prototype),l=new M(c||[]);return f._invoke=function(t,e,u){var c=n;return function(s,f){var l,d,h;if(c===o)throw new Error("Generator is already running");if(c===i){if("throw"===s)throw f;return S()}for(u.method=s,u.arg=f;;){if((l=u.delegate)&&(d=L(l,u))){if(d===a)continue;return d}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===n)throw c=i,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(c=o,"normal"===(h=b(t,e,u)).type){if(c=u.done?i:r,h.arg===a)continue;return{value:h.arg,done:u.done}}"throw"===h.type&&(c=i,u.method="throw",u.arg=h.arg)}}}(t,u,l),f}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function v(){}function w(){}function E(){}function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var a,u,c=b(t[n],t,r);if("throw"!==c.type)return(u=(a=c.arg).value)&&"object"==typeof u&&d.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){a.value=t,o(a)},function(t){return e("throw",t,o,i)});i(c.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function L(t,n){var r,o,i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return a;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return a}return"throw"===(r=b(i,t.iterator,n.arg)).type?(n.method="throw",n.arg=r.arg,n.delegate=null,a):(o=r.arg)?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,a):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,a)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function W(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){var n,r,o;if(t){if(n=t[p])return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(o=function n(){for(;++r<t.length;)if(d.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n}).next=o}return{next:S}}function S(){return{value:e,done:!0}}return t.wrap=y,n="suspendedStart",r="suspendedYield",o="executing",i="completed",a={},(u={})[p]=function(){return this},(s=(c=Object.getPrototypeOf)&&c(c(N([]))))&&s!==l&&d.call(s,p)&&(u=s),f=E.prototype=v.prototype=Object.create(u),w.prototype=f.constructor=E,E.constructor=w,E[g]=w.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,g in t||(t[g]="GeneratorFunction")),t.prototype=Object.create(f),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[m]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var i=new O(y(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(f),f[g]="Generator",f[p]=function(){return this},f.toString=function(){return"[object Generator]"},t.keys=function(t){var e,n=[];for(e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(W),!t)for(var n in this)"t"===n.charAt(0)&&d.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){var t;if(this.done=!0,"throw"===(t=this.tryEntries[0].completion).type)throw t.arg;return this.rval},dispatchException:function(t){var n,r,o,i,a,u;if(this.done)throw t;function c(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(r=(n=this).tryEntries.length-1;r>=0;--r){if(o=this.tryEntries[r],i=o.completion,"root"===o.tryLoc)return c("end");if(o.tryLoc<=this.prev)if(a=d.call(o,"catchLoc"),u=d.call(o,"finallyLoc"),a&&u){if(this.prev<o.catchLoc)return c(o.catchLoc,!0);if(this.prev<o.finallyLoc)return c(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return c(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return c(o.finallyLoc)}}},abrupt:function(t,e){var n,r,o,i;for(n=this.tryEntries.length-1;n>=0;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&d.call(r,"finallyLoc")&&this.prev<r.finallyLoc){o=r;break}return o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null),(i=o?o.completion:{}).type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,a):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),a},finish:function(t){var e,n;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).finallyLoc===t)return this.complete(n.completion,n.afterLoc),W(n),a},catch:function(t){var e,n,r,o;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).tryLoc===t)return"throw"===(r=n.completion).type&&(o=r.arg,W(n)),o;throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),a}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},3:function(t,e,n){"use strict";var r,o,i,a,u,c,s,f;n.d(e,"a",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return f}),r=n(1),o=n(0),i=n(6),a=function(t,e,n){var r,a,u=document.body;if(e&&o.f(e)?u=document.getElementById(e):e&&(u=e),!t)return u;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(t)),!r)return r;if(u.appendChild(r),r&&n){for(a in n)try{r[a]=n[a]}catch(t){}n.className&&i.a(r,n.className)}return r},u=function(t,e,n){var i,a,u=Object(r.a)(t);if(!(u.length<=0)&&(n||(n=0),!(n>=u.length)&&u[n]))return i=u.get(n),a=new String(i.tagName).toLowerCase(),(e||""===e)&&function(t,e){o.f(t)||o.d(t)?o.c(a)||o.c(e)?e.value=t:o.g(e)?e.value=t:e.innerHTML=t:e&&o.e(t)&&e.appendChild(t)}(e,i),o.c(a)||o.c(i)?i.value:o.g(i)?i.value:o.f(i.innerHTML)?i.innerHTML:void 0},c=function(t,e,n){var o,i,a,u;if(!((i=Object(r.a)(t)).length<=0)&&(o=i.get(0),n&&n<i.length&&(o=i.get(n)),o))return(a=function(t,e){var n;t?(n=t.parentNode)&&(n.nodeName.toLowerCase()!==e?a(n,e):u=n):u=null})(o,e),u},s={maxx:function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.documentElement&&document.documentElement.offsetWidth||document.body&&document.body.clientWidth||document.body&&document.body.offsetWidth||0},maxy:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.documentElement&&document.documentElement.offsetHeight||document.body&&document.body.clientHeight||document.body&&document.body.offsetHeight||0}},f=function(t){var e,n=t;o.f(t)&&(n=Object(r.a)("#"+t).get(0)),n&&("block"===(e=i.b(t,"display"))?n.style.display="none":n.style.display="none"===e?"block":"none")}},4:function(t,e,n){"use strict";var r,o;o=(r=window.navigator).appVersion,e.a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:r.cookieEnabled,name:r.appName,uaName:r.appName,OS:r.platform,uaOS:r.platform,userAgent:r.userAgent,appVersion:parseFloat(o,10),uaAppVersion:parseFloat(o,10),version:parseFloat(o,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""}},5:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},56:function(t,e,n){"use strict";var r,o,i,a,u,c,s;function f(t,e){var n=Object(s.c)(16,t.substring(1,2)),r=Object(s.c)(16,t.substring(2,3)),o=Object(s.c)(16,t.substring(3,4)),i=Object(s.c)(16,e.substring(1,2)),a=Object(s.c)(16,e.substring(2,3)),u=Object(s.c)(16,e.substring(3,4)),c=+n+ +o+ +r,f=+i+ +u+ +a,l=[n,o,r].sort()[2],d=[i,u,a].sort()[2];return+c<+f?-1:+c>+f?1:+l<+d?-1:+l>+d?1:0}function l(){var t=[],e=function(){var t,e,n=[];for(t=0;t<16;t++)e=Object(s.b)(16,t),n.push("".concat(e));return n}();return function(t,e,n,r){var o,i,a,u,c,s;for(o=n;o<r;o++)for(i=e[o],a=n;a<r;a++)for(u=e[a],c=n;c<r;c++)s=e[c],t.push("#".concat(i).concat(u).concat(s))}(t,e,0,e.length),t.sort(f)}function d(){var t=document.getElementById("main-window"),e=window.getComputedStyle(t);return new c.a("RGB Color Table",e.offsetLeft,e.offsetTop,e.offsetWidth,e.offsetHeight,"main-window")}function h(){return(h=a()(o.a.mark(function t(){var e,n,r,i,a,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=l(),n=d(),r=n.windowArea,i="",a=0,u=e.length;a<u;a++)c=e[a],i+='<div><span style="background-color: '.concat(c,'">&nbsp;&nbsp;&nbsp;</span>').concat(c,"</div>");r.innerHTML=i;case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}n.r(e),r=n(9),o=n.n(r),i=n(13),a=n.n(i),u=n(2),c=n(21),s=n(10),u.b(function(){return h.apply(this,arguments)})},6:function(t,e,n){"use strict";var r,o,i,a,u,c,s;n.d(e,"a",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return s}),r=n(1),o=n(0),i=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},a=function(t,e){var n,r=-1,o=t.className.split(" "),i=o.length;for(n=0;n<i;n+=1)if(o[n]===e){r=n;break}-1!==r&&(o.splice(n,1),t.className=o.join(" "))},u=function(t,e,n){a(t,e),i(t,n)},c=function(t,e){var n,r,i,a=t;if(o.f(t)&&(a=document.getElementById(t)),a&&a.className)for(r=(n=a.className.split(" ")).length,i=0;i<r;i+=1)if(n[i]===e)return!0;return!1},s=function(t,e){var n,i=t;return o.f(t)&&(i=Object(r.a)("#"+t).get(0)),i?(i.currentStyle?n=i.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(i,null).getPropertyValue(e)),n):""}},9:function(t,e,n){t.exports=n(25)}});