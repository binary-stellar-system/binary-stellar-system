!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){var r,o;if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=33)}([function(t,e,n){"use strict";var r,o;function a(t,e,n){return n instanceof t||o()(n).toLowerCase()===e}function i(t){return null!=t}function u(t){return a(String,"string",t)}function c(t){return a(Number,"number",t)}function s(t){return Array.isArray(t)}function l(t){return a(Object,"object",t)}function d(t){var e=t.nodeName;return"textarea"===(e=e||"").toLowerCase()}function f(t){var e=o()(t),n=t.nodeName;return"input"===(n=n||"").toLowerCase()||"input"===e.toLowerCase()&&void 0!==e.type}n.d(e,"a",function(){return i}),n.d(e,"f",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"g",function(){return d}),n.d(e,"c",function(){return f}),r=n(6),o=n.n(r)},function(t,e,n){"use strict";var r,o;function a(t,e){var n,a,i,u={},c=t;if(u.length=0,u.objectName="selector",a=e||document,!r.f(c)&&r.e(c)&&c.hasOwnProperty("objectName")&&"selector"===c.objectName)return c;for(t instanceof HTMLElement&&(t.id?c="#"+t.id:(c=t.nodeName.toLowerCase(),t.className.length>0&&(c+="."+t.className.split(" ").join(" .")))),n=o.test(c)?(n=a.querySelector(c))?[n]:[]:(n=a.querySelectorAll(c))&&n.length>0?n:[],u.length=n.length,u.get=function(t){return n[t]},u.toArray=function(){return Array.from(n)},i=0;i<u.length;i++)u[i]=n[i];return u}n.d(e,"a",function(){return a}),r=n(0),o=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/},function(t,e,n){"use strict";var r,o,a,i,u,c,s,l,d,f;function h(){var t=document;return t.documentElement&&("ontouchstart"in t.documentElement||"touchstart"in t.documentElement)}n.d(e,"a",function(){return i}),n.d(e,"h",function(){return u}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return h}),r=n(6),o=n.n(r),a=n(4),window.attachEvent&&!window.addEventListener?i=function(t,e,n,r){if(!t.attachEvent("on"+e,n))throw"Event "+e+" could not be added!"}:window.addEventListener&&(i=function(t,e,n,r){var o=r||!1;t.addEventListener(e,n,o)}),window.detachEvent&&!window.removeEventListener?u=function(t,e,n,r){if(!t.detachEvent("on"+e,n))throw"Event "+e+" could not be removed!"}:window.removeEventListener&&(u=function(t,e,n,r){t.removeEventListener(e,n,r)}),c=function(t){return window.event?window.event:t},s=function(t){var e,n=c(t);return n.srcElement?e=n.srcElement:n.target&&(e=n.target),e},l=function(t){var e=c(t),n=0;return e.pageX?n=e.pageX:e.clientX&&(n=e.clientX),n},d=function(t){var e=c(t),n=0;return e.pageY?n=e.pageY:e.clientY&&(n=e.clientY),n},document.createEvent&&function(t,e,n){var r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},f=function(t){a.a.onLoadEventStack.push(t)},i(window,"load",function(){var t,e,n=a.a.onLoadEventStack,r=n.length;for(e=0;e<r;e+=1)(t=n[e])&&"function"===o()(t).toLowerCase()&&t()},!1)},function(t,e,n){"use strict";var r,o,a,i,u,c,s,l;n.d(e,"a",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return l}),r=n(1),o=n(0),a=n(5),i=function(t,e,n){var r,i,u=document.body;if(e&&o.f(e)?u=document.getElementById(e):e&&(u=e),!t)return u;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(t)),!r)return r;if(u.appendChild(r),r&&n){for(i in n)try{r[i]=n[i]}catch(t){}n.className&&a.a(r,n.className)}return r},u=function(t,e,n){var a,i,u=Object(r.a)(t);if(!(u.length<=0)&&(n||(n=0),!(n>=u.length)&&u[n]))return a=u.get(n),i=new String(a.tagName).toLowerCase(),(e||""===e)&&function(t,e){o.f(t)||o.d(t)?o.c(i)||o.c(e)?e.value=t:o.g(e)?e.value=t:e.innerHTML=t:e&&o.e(t)&&e.appendChild(t)}(e,a),o.c(i)||o.c(a)?a.value:o.g(a)?a.value:o.f(a.innerHTML)?a.innerHTML:void 0},c=function(t,e,n){var o,a,i,u;if(!((a=Object(r.a)(t)).length<=0)&&(o=a.get(0),n&&n<a.length&&(o=a.get(n)),o))return(i=function(t,e){var n;t?(n=t.parentNode)&&(n.nodeName.toLowerCase()!==e?i(n,e):u=n):u=null})(o,e),u},s={maxx:function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.documentElement&&document.documentElement.offsetWidth||document.body&&document.body.clientWidth||document.body&&document.body.offsetWidth||0},maxy:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.documentElement&&document.documentElement.offsetHeight||document.body&&document.body.clientHeight||document.body&&document.body.offsetHeight||0}},l=function(t){var e,n=t;o.f(t)&&(n=Object(r.a)("#"+t).get(0)),n&&("block"===(e=a.b(t,"display"))?n.style.display="none":n.style.display="none"===e?"block":"none")}},function(t,e,n){"use strict";var r,o;o=(r=window.navigator).appVersion,e.a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:r.cookieEnabled,name:r.appName,uaName:r.appName,OS:r.platform,uaOS:r.platform,userAgent:r.userAgent,appVersion:parseFloat(o,10),uaAppVersion:parseFloat(o,10),version:parseFloat(o,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""}},function(t,e,n){"use strict";var r,o,a,i,u,c,s;n.d(e,"a",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return s}),r=n(1),o=n(0),a=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},i=function(t,e){var n,r=-1,o=t.className.split(" "),a=o.length;for(n=0;n<a;n+=1)if(o[n]===e){r=n;break}-1!==r&&(o.splice(n,1),t.className=o.join(" "))},u=function(t,e,n){i(t,e),a(t,n)},c=function(t,e){var n,r,a,i=t;if(o.f(t)&&(i=document.getElementById(t)),i&&i.className)for(r=(n=i.className.split(" ")).length,a=0;a<r;a+=1)if(n[a]===e)return!0;return!1},s=function(t,e){var n,a=t;return o.f(t)&&(a=Object(r.a)("#"+t).get(0)),a?(a.currentStyle?n=a.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(a,null).getPropertyValue(e)),n):""}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){"use strict";var r={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],numberOfDaysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],weekDayShortNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],getFirstOfMonthDayOfWeek:function(t){var e=t?new Date(t.getTime()):new Date;return e.setDate(1),e.getDay()},getDaysInMonth:function(t){var e=t?new Date(t.getTime()):new Date,n=e.getMonth(),o=e.getFullYear();return 1===n?o%4==0?o%400==0?29:o%100==0?28:29:28:r.numberOfDaysInMonth[n]},setFullDate:function(t,e,n){var r=new Date;return r.setMonth(t),r.setDate(e),r.setFullYear(n),r},getAMPM:function(t){return t.getHours()>11?" PM":" AM"}};e.a=r},,,function(t,e,n){"use strict";var r,o,a,i,u;function c(t){var e=i[t.getDay()],n=u[t.getMonth()];return"".concat(e,", ").concat(n," ").concat(t.getDate(),", ").concat(t.getFullYear())}function s(){var t=new Date,e=c(t),n="<li>Today is ".concat(e,".</li>"),r=function(){var t,e;return Object(a.a)(document.lastModified)&&document.lastModified.length>0?(t=Date.parse(document.lastModified),(e=new Date).setTime(t),c(e)):""}();return r.length>0&&(n+="<li>Last modified on ".concat(r,".</li>")),n+"<li>Copyright ".concat(t.getFullYear(),".</li>")}function l(t){var e,n;t&&(e=r.a("ul",t))&&(e.innerHTML=s()),void 0===document.querySelectorAll&&(-1!==(n=(n=window.location.pathname).substring(n.lastIndexOf("/"))).indexOf("fish_pictures")?window.location.href="../":-1===n.indexOf("index.html")&&"/"!==n&&(window.location.href="index.html"))}n.d(e,"a",function(){return l}),r=n(3),o=n(7),a=n(0),i=o.a.weekDayShortNames,u=o.a.monthShortNames},,function(t,e,n){t.exports=n(22)},function(t,e,n){"use strict";var r={add:function(){var t,e=0;for(t=0;t<arguments.length;t+=1)e+=+arguments[t];return e},subtract:function(t,e){return+t-+e},multiply:function(){var t,e=1;for(t=0;t<arguments.length;t+=1)e=+e*+arguments[t];return e},divide:function(t,e){return+t/+e},square:function(t){return Math.pow(t,2)},cube:function(t){return Math.pow(t,3)},computeLineLength:function(t,e,n,o){var a=r.subtract(n,t),i=r.subtract(o,e),u=r.add(r.square(a),r.square(i));return Math.sqrt(u)},computePerimeter:function(t,e,n,o,a,i,u,c){var s=r.computeLineLength(t,e,n,o),l=r.computeLineLength(n,o,a,i),d=r.computeLineLength(a,i,u,c),f=r.computeLineLength(u,c,t,e);return r.computePerimeterByLength(s,l,d,f)},computePerimeterByLength:function(t,e,n,o){return r.add(t,e,n,o)},computePerimeterOfSquare:function(t){return r.multiply(t,4)},areaOfTriangle:function(t,e){return r.multiply(t,e,.5)},areaOfTrapizoid:function(t,e,n){var o,a;return o=r.add(e,n),a=r.divide(o,2),r.multiply(t,a)},pythagorean:function(t,e){return Math.sqrt(r.square(t)+r.square(e))},average:function(){var t=arguments,e=0;return Object.keys(arguments).forEach(function(n){e=r.add(e,t[n])}),r.divide(e,arguments.length)},areaOfCircle:function(t){return r.multiply(Math.PI,r.square(t))},circumferenceOfACircle:function(t){return r.multiply(2,Math.PI,t)},surfaceAreaCone:function(t,e){var n=Math.sqrt(r.multiply(Math.PI,r.square(t))),o=r.add(r.square(t),r.square(e)),a=r.multiply(t,Math.PI,o);return r.add(n,a)},volumeCone:function(t,e){return r.multiply(1/3,Math.PI,r.square(t),e)},surfaceAreaCylinder:function(t,e){var n=r.multiply(2,Math.PI,r.square(t)),o=r.multiply(2,Math.PI,t,e);return r.add(n,o)},volumeCylinder:function(t,e){return r.multiply(Math.PI,r.square(t),e)},surfaceAreaSphere:function(t){return r.multiply(4,Math.PI,r.square(t))},volumeSphere:function(t){return r.multiply(4/3,Math.PI,r.cube(t))},inverse:function(t){return r.multiply(-1,t)},oneOver:function(t){return r.divide(1,t)},factorial:function(t){if(+t<=1)return 1;var e=+t-1;return r.multiply(t,r.factorial(e))},hexidecimal:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],convertFromBaseTenToBaseX:function(t,e){for(var n,o=e,a=r.hexidecimal[o%t];o>=t;)n=r.subtract(o,o%t),a=(o=r.divide(n,t))>=t?r.hexidecimal[o%t]+a:r.hexidecimal[o]+a;return a},convertFromBaseXToBaseTen:function(t,e){var n,o,a,i=0,u=1;function c(t){for(var e=0;e<r.hexidecimal.length;e+=1)if(r.hexidecimal[e]===t)return e;return""}for(;u<=e.length;)n=Math.pow(t,r.subtract(u,1)),o=r.subtract(e.length,u),a=c(e.charAt(o)),i=r.add(i,r.multiply(a,n)),u++;return i},degreesToRadians:function(t){return t*Math.PI/180},radiansToDegrees:function(t){return 180*t/Math.PI},generateGUID:function(){var t,e,n,o,a,i=1e6*(new Date).getTime(),u=r.convertFromBaseTenToBaseX(16,i),c="";for(t=0,e=u.length;t<e;t+=1)c+=u[t]<<1;for(n="",o=0,a=(c=u+r.convertFromBaseTenToBaseX(16,c)).length;o<a;o+=1)n+=c[o],o>0&&o%5==0&&o%10!=0&&(n+="-"),o>0&&o%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}};e.a=r},function(t,e){function n(t,e,n,r,o,a,i){var u,c;try{c=(u=t[a](i)).value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)})}}},,,function(t,e,n){"use strict";var r=n(12),o=n.n(r),a=n(14),i=n.n(a);e.a=function(t,e){return function(){return i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return r=t.sent,t.next=5,r.text();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}},function(t,e,n){"use strict";var r,o,a,i,u;function c(t,e){var n,c,s,l,d;if(this.date=new Date,this.id=e&&e.id?e.id:"",!t)throw"Could not create Calendar() because no parent object was specifiec!";this.parentID=t,n={selection:"",year:"",content:null},(l=this).handle=n,this.hasRendered=!1,this.userCallBackFN=null,c=function(){var t,e,n=r.a.weekDayShortNames.length;for(e='<tr class="header">',t=0;t<n;t+=1)e+="<th>"+r.a.weekDayShortNames[t]+"</th>";return e+"</tr>"},s=function(t){var e,n=r.a.getFirstOfMonthDayOfWeek(t),o=r.a.getDaysInMonth(t),a=t.getDate(),i="<tr>";for(e=0;e<n;e+=1)i+="<td>&nbsp;</td>";for(e=1;e<=o;e+=1)i+=e===a?'<td class="selected">'+e+"</td>":'<td class="unselected">'+e+"</td>",(e+n)%7==0&&(i+="</tr><tr>");return i+"</tr>"},d=function(t){var e,n,o='<table class="navigation calendar"><tr><td>';for(o+='<td class="ylarrow">&lt;&lt;</td>',o+='<td class="mlarrow">&lt;</td>',o+='<td><form><select class="monthSelection">',e=r.a.monthNames.length,n=0;n<e;n+=1)o+="<option "+(t.getMonth()===n?'selected="true"':"")+' value="'+n+'">'+r.a.monthNames[n]+"</option>";return o+="</select></form></td>",o+='<td class="calyear">'+t.getFullYear()+"</td>",o+='<td class="mrarrow">&gt;</td>',o+='<td class="yrarrow">&gt;&gt;</td>',(o+="</tr></table>")+'<div id="'+l.parentID+'content"></div>'},this.render=function(){var t,e,n,r,l,f,h,m,p,y=Object(o.a)("#"+this.parentID),g=y.get(0);if(!g)throw"Could not get parent element to attach calendar to!";if(!this.hasRendered){for(r=this,n=function(t){r.handleClick(t,r)},u.a(g,"click",n,!1),t=d(this.date),i.c(y,t),(e=Object(o.a)("select",g)).get(0).onchange=function(t){r.handleClick(t,r)},this.handle.selection=e.get(0),l=Object(o.a)("td",g),m=!1,f=0;f<l.length;f+=1)if(a.c(l.get(f),"calyear")){m=l.get(f);break}this.handle.year=m,this.hasRendered=!0}if(this.handle.selection.selectedIndex=this.date.getMonth(),i.c(this.handle.year,this.date.getFullYear()),!this.handle.content){if(!(h=Object(o.a)("#"+this.parentID+"content",g)))throw"Could not build calendar frame";this.handle.content=h.get(0)}p='<table class="calendar">'+c()+s(this.date)+"</table>",i.c(this.handle.content,p)},this.handleClick=function(t,e){var n,r=u.c(t),o=u.f(r),c=o.nodeName.toUpperCase();if("TD"===c){if(!i.b(o,"table"))return;!function(t,e,n){var r,o;i.b(t,"div")&&(a.c(t,"selected")||a.c(t,"unselected")?isNaN(t.innerHTML)||(e.date.setDate(t.innerHTML),e.render(),n.userCallBackFN&&n.userCallBackFN(e)):a.c(t,"ylarrow")?(r=e.date.getFullYear(),e.date.setFullYear(+r-1),e.render()):a.c(t,"mlarrow")?(o=e.date.getMonth(),e.date.setMonth(+o-1),e.render()):a.c(t,"mrarrow")?(o=e.date.getMonth(),e.date.setMonth(+o+1),e.render()):a.c(t,"yrarrow")&&(r=e.date.getFullYear(),e.date.setFullYear(+r+1),e.render()))}(o,e,this)}else"SELECT"===c&&(n=o.selectedIndex,e.date.setMonth(n),e.render())}}n.d(e,"a",function(){return c}),r=n(7),o=n(1),n(0),a=n(5),i=n(3),u=n(2),c.prototype.getCalendarDate=function(){return r.a.monthNames[this.date.getMonth()]+" "+this.date.getDate()+", "+this.date.getFullYear()},c.prototype.setCalendarDate=function(t,e,n){this.date.setMonth(t),this.date.setDate(e),this.date.setFullYear(n),this.render()}},,function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});var r=n(13);function o(){this.clockId="clockID",this.setIntervalReturnCode="",this.updateInterval=1e3}function a(){this.clockText="Time: ",this.showSeconds=!0}function i(){var t;t=function(t,e){var n,o,a,i,u,c,s,l=r.a.convertFromBaseTenToBaseX(2,e);for(n=4-l.toString().length,o=0;o<n;o+=1)a=this.clockId+"_row_"+o+"_col_"+t,(i=document.getElementById(a))&&(i.innerHTML="0");for(u=0,o=3;o>=n;o-=1)c=+u+ +n,s=l.substring(u,u+1),a=this.clockId+"_row_"+c+"_col_"+t,(i=document.getElementById(a))&&(i.innerHTML=s),u+=1},this.setColumn=function(e,n){var r;n>=10?(r=n.toString(),t.call(this,e,r.substring(0,1)),t.call(this,e+1,r.substring(1))):(t.call(this,e,0),t.call(this,e+1,n))},this.render=function(){var t,e,n,r=document.getElementById(this.clockId);if(r){for(t="<table>",e=0;e<4;e+=1){for(t+="<tr>",n=0;n<6;n+=1)t+='<td id="'+(this.clockId+"_row_"+e+"_col_"+n)+'"></td>';t+="</tr>"}t+="</table>",r.innerHTML=t}this.runClock()}}o.prototype.runClock=function(){throw"Override this function"},o.prototype.startClock=function(){var t,e;e=function(){t.runClock()},(t=this).setIntervalReturnCode=window.setInterval(e,this.updateInterval)},o.prototype.stopClock=function(){clearTimeout(this.setIntervalReturnCode)},o.prototype.setId=function(t){this.clockId=t},(a.prototype=new o).runClock=function(){var t,e,n;return!!document.getElementById&&(n=function(t){var e=t;return t<10&&(e="0"+t),e},e=function(t){var e,r;return r=(e=new Date).getHours()+":"+n(e.getMinutes()),t&&(r+=":"+n(e.getSeconds())),r},!!(t=document.getElementById(this.clockId))&&(t.innerHTML=this.clockText+e(this.showSeconds),!0))},(i.prototype=new o).runClock=function(){var t,e,n,r=new Date;return t=r.getHours(),e=r.getMinutes(),n=r.getSeconds(),this.setColumn(0,t),this.setColumn(2,e),this.setColumn(4,n),!0}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(4);function o(){var t,e=window,n=e.document;return(t=e.navigator).appVersion,
/*@cc_on @*/r.a.isIE=!1,r.a.capabilitiesDetected=!0,r.a.isIE?(r.a.name="Internet Explorer",r.a.hasJscript=!0,
/*@cc_on 
    @if (@_jscript_version >= 1.0) 
    base.version = 3.0;
    @end
    @if (@_jscript_version >= 3.0) 
    base.version = 4.0;
    @end
    @if (@_jscript_version >= 5.0) 
    base.version = 5.0;
    @end
    @if (@_jscript_version >= 5.1) 
    base.version = 5.1;
    @end
    @if (@_jscript_version >= 5.5) 
    base.version = 5.5;
    @end
    @if (@_jscript_version >= 5.6) 
    base.version = 6.0;
    @end
    @if (@_jscript_version >= 5.7) 
    base.version = 7.0;
    @end
    @if (@_jscript_version >= 5.8) 
    base.version = 8.0;
    @end
    @if (@_jscript_version >= 9) 
    base.version = 9.0;
    @end
    @if (@_jscript_version >= 10) 
    base.version = 10.0;
    @end @*/
document.compatMode&&(r.a.version=6),window.XMLHttpRequest&&(r.a.version=7),document.querySelector&&(r.a.version=8),document.addEventListener&&document.getElementsByClassName&&(r.a.version=9),window.atob&&(r.a.version=10),crypto&&crypto.getRandomValues&&(r.a.version=11),r.a.docMode=document.documentMode?document.documentMode:r.a.version,e.ActiveXObject&&(r.a.hasActiveX=!0)):n.layers?(r.a.name="Netscape Navigator",r.a.version=4):e.opera||n.all?(r.a.name="Opera",r.a.version=4,e.opera&&(r.a.version=5,(e.print&&e.opera.buildNumber||n.getElementsByTagName)&&(r.a.version=6),n.readyState&&(r.a.version=7),n.implementation&&n.implementation.createDocument&&(r.a.version=8),n.createEntityReference&&(r.a.version=9),n.querySelectorAll&&(r.a.version=10),"undefined"!=typeof WebSocket&&(r.a.version=11),window.document.hasOwnProperty("on drag")&&(r.a.version=12))):n.getElementById&&n.childNodes&&!t.taintEnabled&&t.vendor?"Apple Computer, Inc."===t.vendor?r.a.name="Safari":"KDE"===t.vendor.toUpperCase()?r.a.name="Konqueror":e.chrome||-1!==t.vendor.indexOf("Google")?r.a.name="Chrome":r.a.name=t.vendor:t.product&&(r.a.name="Gecko",t.buildID&&(r.a.buildID=t.buildID),"Gecko"!==t.product&&(r.a.name="Gecko / "+t.product)),n.getElementById&&n.implementation&&(r.a.isDOMCapable=!0),n.documentElement&&("ontouchstart"in n.documentElement||"touchstart"in n.documentElement)&&(r.a.touchEnabled=!0),r.a.browserName=function(){var t,e,n=[{bProp:window.chrome,name:"chrome"},{bProp:window.safari,name:"safari"},{bProp:window.opera,name:"opera"},{bProp:window.mozInnerScreenX,name:"firefox"},{bProp:document.all,name:"ie"}];for(t in n)if(void 0!==n[t].bProp){e=n[t].name;break}return e}(),r.a}},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(23),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r,o,a,i,u,c,s,l,d,f=Object.prototype,h=f.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},p=m.iterator||"@@iterator",y=m.asyncIterator||"@@asyncIterator",g=m.toStringTag||"@@toStringTag",v="object"==typeof t,b=e.regeneratorRuntime;function w(t,e,n,c){var s=e&&e.prototype instanceof S?e:S,l=Object.create(s.prototype),d=new C(c||[]);return l._invoke=function(t,e,n){var c=r;return function(s,l){var d,f,h;if(c===a)throw new Error("Generator is already running");if(c===i){if("throw"===s)throw l;return T()}for(n.method=s,n.arg=l;;){if((d=n.delegate)&&(f=I(d,n))){if(f===u)continue;return f}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(c===r)throw c=i,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);if(c=a,"normal"===(h=E(t,e,n)).type){if(c=n.done?i:o,h.arg===u)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(c=i,n.method="throw",n.arg=h.arg)}}}(t,n,d),l}function E(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function S(){}function L(){}function M(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var i,u,c=E(t[n],t,r);if("throw"!==c.type)return(u=(i=c.arg).value)&&"object"==typeof u&&h.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){i.value=t,o(i)},function(t){return e("throw",t,o,a)});a(c.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function I(t,e){var r,o,a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}return"throw"===(r=E(a,t.iterator,e.arg)).type?(e.method="throw",e.arg=r.arg,e.delegate=null,u):(o=r.arg)?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function D(t){var e,r,o;if(t){if(e=t[p])return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(o=function e(){for(;++r<t.length;)if(h.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e}).next=o}return{next:T}}function T(){return{value:n,done:!0}}b?v&&(t.exports=b):((b=e.regeneratorRuntime=v?t.exports:{}).wrap=w,r="suspendedStart",o="suspendedYield",a="executing",i="completed",u={},(c={})[p]=function(){return this},(l=(s=Object.getPrototypeOf)&&s(s(D([]))))&&l!==f&&h.call(l,p)&&(c=l),d=M.prototype=S.prototype=Object.create(c),L.prototype=d.constructor=M,M.constructor=L,M[g]=L.displayName="GeneratorFunction",b.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},b.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,g in t||(t[g]="GeneratorFunction")),t.prototype=Object.create(d),t},b.awrap=function(t){return{__await:t}},O(x.prototype),x.prototype[y]=function(){return this},b.AsyncIterator=x,b.async=function(t,e,n,r){var o=new x(w(t,e,n,r));return b.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(d),d[g]="Generator",d[p]=function(){return this},d.toString=function(){return"[object Generator]"},b.keys=function(t){var e,n=[];for(e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},b.values=D,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&h.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){var t;if(this.done=!0,"throw"===(t=this.tryEntries[0].completion).type)throw t.arg;return this.rval},dispatchException:function(t){var e,r,o,a,i,u;if(this.done)throw t;function c(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(r=(e=this).tryEntries.length-1;r>=0;--r){if(o=this.tryEntries[r],a=o.completion,"root"===o.tryLoc)return c("end");if(o.tryLoc<=this.prev)if(i=h.call(o,"catchLoc"),u=h.call(o,"finallyLoc"),i&&u){if(this.prev<o.catchLoc)return c(o.catchLoc,!0);if(this.prev<o.finallyLoc)return c(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return c(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return c(o.finallyLoc)}}},abrupt:function(t,e){var n,r,o,a;for(n=this.tryEntries.length-1;n>=0;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&h.call(r,"finallyLoc")&&this.prev<r.finallyLoc){o=r;break}return o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null),(a=o?o.completion:{}).type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){var e,n;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),u},catch:function(t){var e,n,r,o;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).tryLoc===t)return"throw"===(r=n.completion).type&&(o=r.arg,N(n)),o;throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),u}})}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},,,,,,,,,,function(t,e,n){"use strict";var r,o,a,i,u,c,s,l,d,f,h,m,p,y;function g(){return function(){return i()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/frags/nav.frag",t.next=3,Object(l.a)("/frags/nav.frag");case 3:e=t.sent,document.getElementById("#menu").innerHTML=e.replace(/\n/g,"");case 6:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}n.r(e),r=n(12),o=n.n(r),a=n(14),i=n.n(a),u=n(3),c=n(2),s=n(1),l=n(17),d=n(21),f=n(10),h=n(20),m=n(18),(p=Object(d.a)()).capabilitiesDetected||"WARNING: Your browser version information was detected from useragent string only or not at all! ",p.name,p.version,p.OS,p.name,p.appVersion,p.uaOS,p.uaOSVersion&&p.uaOSVersion,p.uaName,p.uaAppVersion,p.userAgent,y=u.d.maxx,c.b(function(){var t,e,n,r=new h.b;r.setId("digiclock"),r.startClock(),t=!1,Object(f.a)(document.querySelectorAll("footer")[0]),e=Object(s.a)("footer ul li:first-child"),c.a(e.get(0),"click",function(e){var n,r,o,a,i,c;t?(Object(s.a)("#calendar-container").get(0).style.display="none",t=!1):(n=Object(s.a)("footer").get(0),r=window.getComputedStyle(n).top,o=document.querySelector("body"),(a=u.a("div",o,{id:"calendar-container"})).style.display="block",new m.a(a.id).render(),i=window.getComputedStyle(a).height,c=parseInt(r)-parseInt(i)-12,a.style.top=c+"px",t=!0)}),n=Object(s.a)("#star-system").get(0),y>800?(n.width=800,n.height=600):(n.width=250,n.height=250),g()})}]);
//# sourceMappingURL=index.js.source.map