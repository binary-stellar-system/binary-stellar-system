(()=>{var t={757:(t,e,n)=>{n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=N(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function g(){}function w(){}function v(){}var y={};y[i]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(A([])));E&&E!==n&&r.call(E,i)&&(y=E);var L=v.prototype=g.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function W(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return w.prototype=L.constructor=v,v.constructor=w,w.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(W.prototype),W.prototype[a]=function(){return this},t.AsyncIterator=W,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new W(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";var t,e;n(757);e=(t=window.navigator).appVersion;const r={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:t.cookieEnabled,name:t.appName,uaName:t.appName,OS:t.platform,uaOS:t.platform,userAgent:t.userAgent,appVersion:parseFloat(e,10),uaAppVersion:parseFloat(e,10),version:parseFloat(e,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""};let o,i,a,c;window.attachEvent&&!window.addEventListener?o=function(t,e,n,r){if(!t.attachEvent("on"+e,n))throw"Event "+e+" could not be added!"}:window.addEventListener&&(o=function(t,e,n,r){const o=r||!1;t.addEventListener(e,n,o)}),window.detachEvent&&!window.removeEventListener?i=function(t,e,n,r){if(!t.detachEvent("on"+e,n))throw"Event "+e+" could not be removed!"}:window.removeEventListener&&(i=function(t,e,n,r){t.removeEventListener(e,n,r)});const s=function(t){return window.event?window.event:t},l=function(t){const e=s(t);let n;return e.srcElement?n=e.srcElement:e.target&&(n=e.target),n},u=function(t){const e=s(t);let n=0;return e.pageX?n=e.pageX:e.clientX&&(n=e.clientX),n},d=function(t){const e=s(t);let n=0;return e.pageY?n=e.pageY:e.clientY&&(n=e.clientY),n};document.createEvent&&(a=function(t,e,n){let r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},c=function(t){document.dispatchEvent(t)});function h(t,e,n){return n instanceof t||(typeof n).toLowerCase()===e}function f(t){return h(String,"string",t)}function p(t){return h(Object,"object",t)}function m(t){let e=t.nodeName;return e=e||"","textarea"===e.toLowerCase()}function g(t){let e=typeof t,n=t.nodeName;return n=n||"","input"===n.toLowerCase()||"input"===e.toLowerCase()&&void 0!==e.type}o(window,"load",(function(){let t,e,n=r.onLoadEventStack;t=n.length;for(let r=0;r<t;r+=1)e=n[r],e&&"function"===(typeof e).toLowerCase()&&e()}),!1);const w=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function v(t,e){let n,r={},o=t;r.length=0,r.objectName="selector";const i=e||document;if(!f(o)&&p(o)&&o.hasOwnProperty("objectName")&&"selector"===o.objectName)return o;t instanceof HTMLElement&&(t.id?o="#"+t.id:(o=t.nodeName.toLowerCase(),t.className.length>0&&(o+="."+t.className.split(" ").join(" .")))),w.test(o)?(n=i.querySelector(o),n=n?[n]:[]):(n=i.querySelectorAll(o),n=n&&n.length>0?n:[]),r.length=n.length,r.get=function(t){return n[t]},r.toArray=function(){return Array.from(n)},r.each=function(t){r.toArray().forEach(t)};for(let t=0;t<r.length;t++)r[t]=n[t];return r}const y=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},b=function(t,e,n){let r,o=document.body;if(e&&f(e)?o=document.getElementById(e):e&&(o=e),!t)return o;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(t)),!r)return r;if(o.appendChild(r),r&&n){let t;for(t in n)try{r[t]=n[t]}catch(t){}n.className&&y(r,n.className)}return r},E=function(t,e,n){let r,o,i=v(t);if(!(i.length<=0)&&(n||(n=0),!(n>=i.length)&&i[n]))return r=i.get(n),o=new String(r.tagName).toLowerCase(),(e||""===e)&&function(t,e){f(t)||h(Number,"number",t)?g(o)||g(e)||m(e)?e.value=t:e.innerHTML=t:e&&p(t)&&e.appendChild(t)}(e,r),g(o)||g(r)||m(r)?r.value:f(r.innerHTML)?r.innerHTML:void 0};function L(){let t=this,e=function(e,n){let r,o,i=t;return r=s(e),o=l(r),i.moving&&i.dragableCoverMask.id===o.id&&(i.posX=u(),i.posY=d(),i[n].style.left=i.posX-i.offsetX+"px",i[n].style.top=i.posY-i.offsetY+"px"),i},n=function(){let t;window.getSelection?(t=window.getSelection(),t&&t.empty?t.empty():t&&t.removeAllRanges&&t.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()};const r=function(e,n,r){const a=v("#"+n).get(0),c=v("#"+(r||n)).get(0);a&&c&&(e?(t.dragableObjects[c.id]=a,o(c,"mousedown",t.mousedown,!1)):(t.dragableObjects[c.id]=null,i(c,"mousedown",t.mousedown,!1)))};return t.dragableObjects=[],t.initialize=function(){const e=t;e.isInitialized||(e.dragableCoverMask=v("#-dragndrop-enabled-x").get(0),e.dragableCoverMask||(e.dragableCoverMask=b("div",document.body),e.dragableCoverMask.id="-dragndrop-enabled-x"),e.dragableCoverMask.style.display="none",o(document,"mousemove",e.mousemove,!1),o(document,"mouseup",e.mouseup,!1),e.isInitialized=!0)},t.findDragableParent=function(e){const n=t;if(e&&e.nodeName&&"body"!==e.nodeName.toLowerCase())return n.dragableObjects[e.id]?e:n.findDragableParent(e.parentNode)},t.mousemove=function(t){return e(t,"dragableCoverMask"),n(),!1},t.mouseup=function(t){const r=e(t,"currentDragObject");r.dragableCoverMask.style.display="none",r.currentDragObject=null,r.moving=!1,n()},t.mousedown=function(e){const n=t,r=s(e);let o=l(r);if(o=n.findDragableParent(o),!n.dragableObjects[o.id])return n.moving=!1,!1;n.currentDragObject=n.dragableObjects[o.id],document.body.appendChild(n.currentDragObject),n.posX=u(),n.posY=d(),n.offsetX=n.posX-n.currentDragObject.offsetLeft,n.offsetY=n.posY-n.currentDragObject.offsetTop;let i=n.dragableCoverMask;return i.style.position="absolute",i.style.display="block",i.style.border="2px solid black",i.style.left=n.currentDragObject.offsetLeft+"px",i.style.top=n.currentDragObject.offsetTop+"px",i.style.width=n.currentDragObject.offsetWidth+"px",i.style.height=n.currentDragObject.offsetHeight+"px",i.style.zIndex=1e5,n.moving=!0,!1},t.setDragable=function(t,e){r(!0,t,e)},t.setNONDragable=function(t,e){r(!1,t,e)},t}function x(t,e,n,r,o,i){var a,c;const s=v("#"+i).get(0);s?(this.mainWindow=s,this.titleBar=v(".WebWindowTitle",this.mainWindow).get(0),this.titleBar.id="WebWindowTitle"+i,this.windowArea=v(".WebWindowArea",this.mainWindow).get(0),this.windowArea.id="WebWindowArea"+i,this.footerArea=v(".WebWindowFooter",this.mainWindow).get(0),this.footerArea.id="WebWindowFooter"+i):(this.mainWindow=b("div",document.body,{className:"WebWindowMain",id:i}),this.mainWindow.style.left=e+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=r+"px",this.mainWindow.style.height=o+"px",this.titleBar=b("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+i}),this.windowArea=b("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+i}),this.footerArea=b("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+i})),b("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=t;let l={className:"WebWindowButtonBox"};var u=b("span",this.titleBar,l);l={name:"WW"+i,onsubmit:"return false;"};var d=b("form",u,l);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1},(a=function(t,e,n,r,o){let i,a,c;for(c=b("button",t,{className:"WebWindowButton",name:n,id:n+e}),c.innerHTML=r,c.onclick=o,a=t.innerHTML,a=a.toLowerCase(),i=new RegExp("button class");a.match(i);)a=a.replace(i,'button type="button" class')})(d,i,"rollup","-",this.minimize),a(d,i,"rolldown","o",this.maximize),a(d,i,"destroy","X",this.destroy),this.windowArea.style.width=r+"px",this.titleBar.style.width=r+"px",this.footerArea.style.width=r+"px",c=o-this.titleBar.offsetHeight-this.footerArea.offsetHeight,this.windowArea.style.height=c+"px",this.dragndrop=new L}x.prototype.popToFront=function(t){var e;e=s(t),function(t,e,n){let r,o,i,a;if(o=v(t),!(o.length<=0)&&(r=o.get(0),n&&n<o.length&&(r=o.get(n)),r))i=function(t,e){let n;t?(n=t.parentNode,n&&(n.nodeName.toLowerCase()!==e?i(n,e):a=n)):a=null},i(r,e)}(l(e),"div.WebWindowMain")},x.prototype.enableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),o(this.mainWindow,"mousedown",t,!1)},x.prototype.disableDrag=function(){var t=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),i(this.mainWindow,"mousedown",t,!1)},x.prototype.setTitle=function(t){var e=this.titleBar.getElementsByTagName("span");e&&e.length>0&&(e[0].innerHTML=t)},x.prototype.setContent=function(t){E(this.windowArea,t)};function W(t,e){return e.toString(t).toUpperCase()}const N=["NUL (null)","SOH (start of heading)","STX (start of text)","ETX (end of text)","EOT (end of transmission)","ENQ (enquiry)","ACK (acknowledge)","BEL (bel)","BS (backspace)","TAB (horizontal tab)","LF (NL line feed, new line)","VT (verticle tab)","FF (NP form feed, new page)","CR (carriage return)","SO (shift out)","SI (shift in)","DLE (data link exchange)","DC1 (device control 1)","DC2 (device control 2)","DC3 (device control 3)","DC4 (device control 4)","NAK (negitive acknowledge)","SYN (synchronous idle)","ETB (end of trans. block)","CAN (cancel)","EM (end of medium)","SUB (substitute)","ESC (escape)","FS (file separator)","GS (group separator)","RS (record separator)","US (unit separator)","SPACE"];for(let t=N.length;t<256;t++)N[t]="".concat(String.fromCharCode(t));let S=0;for(let t=0,e=N.length;t<e;t++){const e=N[t].length;S=S>e?S:e}const O=[];for(let t=0,e=N.length;t<e;t++){let e=N[t].padStart(S," ");127===t?e="DEL":t>127&&(e="");let n={decimal:t.toString().padStart(4," ").padEnd(8," "),character:e,hex:W(16,t).padStart(10," "),octal:W(8,t).padStart(10," "),binary:W(2,t).padStart(8,"0")};O.push(n)}var C;C=async function(){const t=O,e=function(){const t=document.getElementById("main-window"),e=window.getComputedStyle(t);return new x("ASCII Table",e.offsetLeft,e.offsetTop,e.offsetWidth,e.offsetHeight,"main-window")}().windowArea;let n='<table class="ascii">';n+="<tr>",n+="<th>Decimal</th>",n+="<th>Character</th>",n+="<th>Hexidecimal</th>",n+="<th>Octal</th>",n+="<th>Binary</th>",n+="</tr>";for(let e=0,r=t.length;e<r;e++){128===e&&(n+="</table>",n+='<table class="extended">',n+="<tr>",n+="<th>Decimal</th>",n+="<th>Hexidecimal</th>",n+="<th>Octal</th>",n+="<th>Binary</th>",n+="</tr>");const r=t[e];n+='<tr class="'.concat(e%2==0?"even":"odd",'">'),n+="<td>".concat(r.decimal,"</td>"),n+=e<128?"<td>".concat(r.character,"</td>"):"",n+="<td>".concat(r.hex,"</td>"),n+="<td>".concat(r.octal,"</td>"),n+="<td>".concat(r.binary,"</td>"),n+="</tr>"}n+="</table>",e.innerHTML=n},r.onLoadEventStack.push(C)})()})();
//# sourceMappingURL=asciiTable.js.source.map