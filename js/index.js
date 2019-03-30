!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){var r,o;if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}([function(t,e,n){"use strict";var r,o;function a(t,e,n){return n instanceof t||o()(n).toLowerCase()===e}function i(t){return null!=t}function c(t){return a(String,"string",t)}function u(t){return a(Number,"number",t)}function l(t){return Array.isArray(t)}function s(t){return a(Object,"object",t)}function d(t){var e=t.nodeName;return"textarea"===(e=e||"").toLowerCase()}function f(t){var e=o()(t),n=t.nodeName;return"input"===(n=n||"").toLowerCase()||"input"===e.toLowerCase()&&void 0!==e.type}n.d(e,"a",function(){return i}),n.d(e,"f",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"b",function(){return l}),n.d(e,"e",function(){return s}),n.d(e,"g",function(){return d}),n.d(e,"c",function(){return f}),r=n(6),o=n.n(r)},function(t,e,n){"use strict";var r,o;function a(t,e){var n,a,i,c={},u=t;if(c.length=0,c.objectName="selector",a=e||document,!r.f(u)&&r.e(u)&&u.hasOwnProperty("objectName")&&"selector"===u.objectName)return u;for(t instanceof HTMLElement&&(t.id?u="#"+t.id:(u=t.nodeName.toLowerCase(),t.className.length>0&&(u+="."+t.className.split(" ").join(" .")))),n=o.test(u)?(n=a.querySelector(u))?[n]:[]:(n=a.querySelectorAll(u))&&n.length>0?n:[],c.length=n.length,c.get=function(t){return n[t]},c.toArray=function(){return Array.from(n)},i=0;i<c.length;i++)c[i]=n[i];return c}n.d(e,"a",function(){return a}),r=n(0),o=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/},function(t,e,n){"use strict";var r,o,a,i,c,u,l,s,d,f;function h(){var t=document;return t.documentElement&&("ontouchstart"in t.documentElement||"touchstart"in t.documentElement)}n.d(e,"a",function(){return i}),n.d(e,"h",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return l}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return h}),r=n(6),o=n.n(r),a=n(4),window.attachEvent&&!window.addEventListener?i=function(t,e,n,r){if(!t.attachEvent("on"+e,n))throw"Event "+e+" could not be added!"}:window.addEventListener&&(i=function(t,e,n,r){var o=r||!1;t.addEventListener(e,n,o)}),window.detachEvent&&!window.removeEventListener?c=function(t,e,n,r){if(!t.detachEvent("on"+e,n))throw"Event "+e+" could not be removed!"}:window.removeEventListener&&(c=function(t,e,n,r){t.removeEventListener(e,n,r)}),u=function(t){return window.event?window.event:t},l=function(t){var e,n=u(t);return n.srcElement?e=n.srcElement:n.target&&(e=n.target),e},s=function(t){var e=u(t),n=0;return e.pageX?n=e.pageX:e.clientX&&(n=e.clientX),n},d=function(t){var e=u(t),n=0;return e.pageY?n=e.pageY:e.clientY&&(n=e.clientY),n},document.createEvent&&function(t,e,n){var r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},f=function(t){a.a.onLoadEventStack.push(t)},i(window,"load",function(){var t,e,n=a.a.onLoadEventStack,r=n.length;for(e=0;e<r;e+=1)(t=n[e])&&"function"===o()(t).toLowerCase()&&t()},!1)},function(t,e,n){"use strict";var r,o,a,i,c,u,l,s;n.d(e,"a",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return s}),r=n(1),o=n(0),a=n(5),i=function(t,e,n){var r,i,c=document.body;if(e&&o.f(e)?c=document.getElementById(e):e&&(c=e),!t)return c;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(t)),!r)return r;if(c.appendChild(r),r&&n){for(i in n)try{r[i]=n[i]}catch(t){}n.className&&a.a(r,n.className)}return r},c=function(t,e,n){var a,i,c=Object(r.a)(t);if(!(c.length<=0)&&(n||(n=0),!(n>=c.length)&&c[n]))return a=c.get(n),i=new String(a.tagName).toLowerCase(),(e||""===e)&&function(t,e){o.f(t)||o.d(t)?o.c(i)||o.c(e)?e.value=t:o.g(e)?e.value=t:e.innerHTML=t:e&&o.e(t)&&e.appendChild(t)}(e,a),o.c(i)||o.c(a)?a.value:o.g(a)?a.value:o.f(a.innerHTML)?a.innerHTML:void 0},u=function(t,e,n){var o,a,i,c;if(!((a=Object(r.a)(t)).length<=0)&&(o=a.get(0),n&&n<a.length&&(o=a.get(n)),o))return(i=function(t,e){var n;t?(n=t.parentNode)&&(n.nodeName.toLowerCase()!==e?i(n,e):c=n):c=null})(o,e),c},l={maxx:function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.documentElement&&document.documentElement.offsetWidth||document.body&&document.body.clientWidth||document.body&&document.body.offsetWidth||0},maxy:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.documentElement&&document.documentElement.offsetHeight||document.body&&document.body.clientHeight||document.body&&document.body.offsetHeight||0}},s=function(t){var e,n=t;o.f(t)&&(n=Object(r.a)("#"+t).get(0)),n&&("block"===(e=a.b(t,"display"))?n.style.display="none":n.style.display="none"===e?"block":"none")}},function(t,e,n){"use strict";var r,o;o=(r=window.navigator).appVersion,e.a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:r.cookieEnabled,name:r.appName,uaName:r.appName,OS:r.platform,uaOS:r.platform,userAgent:r.userAgent,appVersion:parseFloat(o,10),uaAppVersion:parseFloat(o,10),version:parseFloat(o,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""}},function(t,e,n){"use strict";var r,o,a,i,c,u,l;n.d(e,"a",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return l}),r=n(1),o=n(0),a=function(t,e){-1===t.className.indexOf(e)&&(t.className+=" "+e)},i=function(t,e){var n,r=-1,o=t.className.split(" "),a=o.length;for(n=0;n<a;n+=1)if(o[n]===e){r=n;break}-1!==r&&(o.splice(n,1),t.className=o.join(" "))},c=function(t,e,n){i(t,e),a(t,n)},u=function(t,e){var n,r,a,i=t;if(o.f(t)&&(i=document.getElementById(t)),i&&i.className)for(r=(n=i.className.split(" ")).length,a=0;a<r;a+=1)if(n[a]===e)return!0;return!1},l=function(t,e){var n,a=t;return o.f(t)&&(a=Object(r.a)("#"+t).get(0)),a?(a.currentStyle?n=a.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(a,null).getPropertyValue(e)),n):""}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){"use strict";var r={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],numberOfDaysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],weekDayShortNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],getFirstOfMonthDayOfWeek:function(t){var e=t?new Date(t.getTime()):new Date;return e.setDate(1),e.getDay()},getDaysInMonth:function(t){var e=t?new Date(t.getTime()):new Date,n=e.getMonth(),o=e.getFullYear();return 1===n?o%4==0?o%400==0?29:o%100==0?28:29:28:r.numberOfDaysInMonth[n]},setFullDate:function(t,e,n){var r=new Date;return r.setMonth(t),r.setDate(e),r.setFullYear(n),r},getAMPM:function(t){return t.getHours()>11?" PM":" AM"}};e.a=r},,,function(t,e,n){"use strict";var r={add:function(){var t,e=0;for(t=0;t<arguments.length;t+=1)e+=+arguments[t];return e},subtract:function(t,e){return+t-+e},multiply:function(){var t,e=1;for(t=0;t<arguments.length;t+=1)e=+e*+arguments[t];return e},divide:function(t,e){return+t/+e},square:function(t){return Math.pow(t,2)},cube:function(t){return Math.pow(t,3)},computeLineLength:function(t,e,n,o){var a=r.subtract(n,t),i=r.subtract(o,e),c=r.add(r.square(a),r.square(i));return Math.sqrt(c)},computePerimeter:function(t,e,n,o,a,i,c,u){var l=r.computeLineLength(t,e,n,o),s=r.computeLineLength(n,o,a,i),d=r.computeLineLength(a,i,c,u),f=r.computeLineLength(c,u,t,e);return r.computePerimeterByLength(l,s,d,f)},computePerimeterByLength:function(t,e,n,o){return r.add(t,e,n,o)},computePerimeterOfSquare:function(t){return r.multiply(t,4)},areaOfTriangle:function(t,e){return r.multiply(t,e,.5)},areaOfTrapizoid:function(t,e,n){var o,a;return o=r.add(e,n),a=r.divide(o,2),r.multiply(t,a)},pythagorean:function(t,e){return Math.sqrt(r.square(t)+r.square(e))},average:function(){var t=arguments,e=0;return Object.keys(arguments).forEach(function(n){e=r.add(e,t[n])}),r.divide(e,arguments.length)},areaOfCircle:function(t){return r.multiply(Math.PI,r.square(t))},circumferenceOfACircle:function(t){return r.multiply(2,Math.PI,t)},surfaceAreaCone:function(t,e){var n=Math.sqrt(r.multiply(Math.PI,r.square(t))),o=r.add(r.square(t),r.square(e)),a=r.multiply(t,Math.PI,o);return r.add(n,a)},volumeCone:function(t,e){return r.multiply(1/3,Math.PI,r.square(t),e)},surfaceAreaCylinder:function(t,e){var n=r.multiply(2,Math.PI,r.square(t)),o=r.multiply(2,Math.PI,t,e);return r.add(n,o)},volumeCylinder:function(t,e){return r.multiply(Math.PI,r.square(t),e)},surfaceAreaSphere:function(t){return r.multiply(4,Math.PI,r.square(t))},volumeSphere:function(t){return r.multiply(4/3,Math.PI,r.cube(t))},inverse:function(t){return r.multiply(-1,t)},oneOver:function(t){return r.divide(1,t)},factorial:function(t){if(+t<=1)return 1;var e=+t-1;return r.multiply(t,r.factorial(e))},hexidecimal:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],convertFromBaseTenToBaseX:function(t,e){for(var n,o=e,a=r.hexidecimal[o%t];o>=t;)n=r.subtract(o,o%t),a=(o=r.divide(n,t))>=t?r.hexidecimal[o%t]+a:r.hexidecimal[o]+a;return a},convertFromBaseXToBaseTen:function(t,e){var n,o,a,i=0,c=1;function u(t){for(var e=0;e<r.hexidecimal.length;e+=1)if(r.hexidecimal[e]===t)return e;return""}for(;c<=e.length;)n=Math.pow(t,r.subtract(c,1)),o=r.subtract(e.length,c),a=u(e.charAt(o)),i=r.add(i,r.multiply(a,n)),c++;return i},getCirlePoints:function(t,e){var n=r.multiply(t,Math.cos(e)),o=r.multiply(t,Math.sin(e));return{x:Math.round(n),y:Math.round(o)}},degreesToRadians:function(t){return t*Math.PI/180},radiansToDegrees:function(t){return 180*t/Math.PI},generateGUID:function(){var t,e,n,o,a,i=1e6*(new Date).getTime(),c=r.convertFromBaseTenToBaseX(16,i),u="";for(t=0,e=c.length;t<e;t+=1)u+=c[t]<<1;for(n="",o=0,a=(u=c+r.convertFromBaseTenToBaseX(16,u)).length;o<a;o+=1)n+=u[o],o>0&&o%5==0&&o%10!=0&&(n+="-"),o>0&&o%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}};e.a=r},function(t,e,n){"use strict";var r,o,a,i,c;function u(t){var e=i[t.getDay()],n=c[t.getMonth()];return"".concat(e,", ").concat(n," ").concat(t.getDate(),", ").concat(t.getFullYear())}function l(){var t=new Date,e=u(t),n="<li>Today is ".concat(e,".</li>"),r=function(){var t,e;return Object(a.a)(document.lastModified)&&document.lastModified.length>0?(t=Date.parse(document.lastModified),(e=new Date).setTime(t),u(e)):""}();return r.length>0&&(n+="<li>Last modified on ".concat(r,".</li>")),n+"<li>Copyright ".concat(t.getFullYear(),".</li>")}function s(t){var e,n;t&&(e=r.a("ul",t))&&(e.innerHTML=l()),void 0===document.querySelectorAll&&(-1!==(n=(n=window.location.pathname).substring(n.lastIndexOf("/"))).indexOf("fish_pictures")?window.location.href="../":-1===n.indexOf("index.html")&&"/"!==n&&(window.location.href="index.html"))}n.d(e,"a",function(){return s}),r=n(3),o=n(7),a=n(0),i=o.a.weekDayShortNames,c=o.a.monthShortNames},,function(t,e,n){t.exports=n(22)},function(t,e){function n(t,e,n,r,o,a,i){var c,u;try{u=(c=t[a](i)).value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)})}}},,,function(t,e,n){"use strict";var r=n(13),o=n.n(r),a=n(14),i=n.n(a);e.a=function(t,e){return function(){return i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return r=t.sent,t.next=5,r.text();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}},function(t,e,n){"use strict";var r,o,a,i,c;function u(t,e){var n,u,l,s,d;if(this.date=new Date,this.id=e&&e.id?e.id:"",!t)throw"Could not create Calendar() because no parent object was specifiec!";this.parentID=t,n={selection:"",year:"",content:null},(s=this).handle=n,this.hasRendered=!1,this.userCallBackFN=null,u=function(){var t,e,n=r.a.weekDayShortNames.length;for(e='<tr class="header">',t=0;t<n;t+=1)e+="<th>"+r.a.weekDayShortNames[t]+"</th>";return e+"</tr>"},l=function(t){var e,n=r.a.getFirstOfMonthDayOfWeek(t),o=r.a.getDaysInMonth(t),a=t.getDate(),i="<tr>";for(e=0;e<n;e+=1)i+="<td>&nbsp;</td>";for(e=1;e<=o;e+=1)i+=e===a?'<td class="selected">'+e+"</td>":'<td class="unselected">'+e+"</td>",(e+n)%7==0&&(i+="</tr><tr>");return i+"</tr>"},d=function(t){var e,n,o='<table class="navigation calendar"><tr><td>';for(o+='<td class="ylarrow">&lt;&lt;</td>',o+='<td class="mlarrow">&lt;</td>',o+='<td><form><select class="monthSelection">',e=r.a.monthNames.length,n=0;n<e;n+=1)o+="<option "+(t.getMonth()===n?'selected="true"':"")+' value="'+n+'">'+r.a.monthNames[n]+"</option>";return o+="</select></form></td>",o+='<td class="calyear">'+t.getFullYear()+"</td>",o+='<td class="mrarrow">&gt;</td>',o+='<td class="yrarrow">&gt;&gt;</td>',(o+="</tr></table>")+'<div id="'+s.parentID+'content"></div>'},this.render=function(){var t,e,n,r,s,f,h,m,p,v=Object(o.a)("#"+this.parentID),g=v.get(0);if(!g)throw"Could not get parent element to attach calendar to!";if(!this.hasRendered){for(r=this,n=function(t){r.handleClick(t,r)},c.a(g,"click",n,!1),t=d(this.date),i.c(v,t),(e=Object(o.a)("select",g)).get(0).onchange=function(t){r.handleClick(t,r)},this.handle.selection=e.get(0),s=Object(o.a)("td",g),m=!1,f=0;f<s.length;f+=1)if(a.c(s.get(f),"calyear")){m=s.get(f);break}this.handle.year=m,this.hasRendered=!0}if(this.handle.selection.selectedIndex=this.date.getMonth(),i.c(this.handle.year,this.date.getFullYear()),!this.handle.content){if(!(h=Object(o.a)("#"+this.parentID+"content",g)))throw"Could not build calendar frame";this.handle.content=h.get(0)}p='<table class="calendar">'+u()+l(this.date)+"</table>",i.c(this.handle.content,p)},this.handleClick=function(t,e){var n,r=c.c(t),o=c.f(r),u=o.nodeName.toUpperCase();if("TD"===u){if(!i.b(o,"table"))return;!function(t,e,n){var r,o;i.b(t,"div")&&(a.c(t,"selected")||a.c(t,"unselected")?isNaN(t.innerHTML)||(e.date.setDate(t.innerHTML),e.render(),n.userCallBackFN&&n.userCallBackFN(e)):a.c(t,"ylarrow")?(r=e.date.getFullYear(),e.date.setFullYear(+r-1),e.render()):a.c(t,"mlarrow")?(o=e.date.getMonth(),e.date.setMonth(+o-1),e.render()):a.c(t,"mrarrow")?(o=e.date.getMonth(),e.date.setMonth(+o+1),e.render()):a.c(t,"yrarrow")&&(r=e.date.getFullYear(),e.date.setFullYear(+r+1),e.render()))}(o,e,this)}else"SELECT"===u&&(n=o.selectedIndex,e.date.setMonth(n),e.render())}}n.d(e,"a",function(){return u}),r=n(7),o=n(1),n(0),a=n(5),i=n(3),c=n(2),u.prototype.getCalendarDate=function(){return r.a.monthNames[this.date.getMonth()]+" "+this.date.getDate()+", "+this.date.getFullYear()},u.prototype.setCalendarDate=function(t,e,n){this.date.setMonth(t),this.date.setDate(e),this.date.setFullYear(n),this.render()}},,function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});var r=n(10);function o(){this.clockId="clockID",this.setIntervalReturnCode="",this.updateInterval=1e3}function a(){this.clockText="Time: ",this.showSeconds=!0}function i(){var t;t=function(t,e){var n,o,a,i,c,u,l,s=r.a.convertFromBaseTenToBaseX(2,e);for(n=4-s.toString().length,o=0;o<n;o+=1)a=this.clockId+"_row_"+o+"_col_"+t,(i=document.getElementById(a))&&(i.innerHTML="0");for(c=0,o=3;o>=n;o-=1)u=+c+ +n,l=s.substring(c,c+1),a=this.clockId+"_row_"+u+"_col_"+t,(i=document.getElementById(a))&&(i.innerHTML=l),c+=1},this.setColumn=function(e,n){var r;n>=10?(r=n.toString(),t.call(this,e,r.substring(0,1)),t.call(this,e+1,r.substring(1))):(t.call(this,e,0),t.call(this,e+1,n))},this.render=function(){var t,e,n,r=document.getElementById(this.clockId);if(r){for(t="<table>",e=0;e<4;e+=1){for(t+="<tr>",n=0;n<6;n+=1)t+='<td id="'+(this.clockId+"_row_"+e+"_col_"+n)+'"></td>';t+="</tr>"}t+="</table>",r.innerHTML=t}this.runClock()}}o.prototype.runClock=function(){throw"Override this function"},o.prototype.startClock=function(){var t,e;e=function(){t.runClock()},(t=this).setIntervalReturnCode=window.setInterval(e,this.updateInterval)},o.prototype.stopClock=function(){clearTimeout(this.setIntervalReturnCode)},o.prototype.setId=function(t){this.clockId=t},(a.prototype=new o).runClock=function(){var t,e,n;return!!document.getElementById&&(n=function(t){var e=t;return t<10&&(e="0"+t),e},e=function(t){var e,r;return r=(e=new Date).getHours()+":"+n(e.getMinutes()),t&&(r+=":"+n(e.getSeconds())),r},!!(t=document.getElementById(this.clockId))&&(t.innerHTML=this.clockText+e(this.showSeconds),!0))},(i.prototype=new o).runClock=function(){var t,e,n,r=new Date;return t=r.getHours(),e=r.getMinutes(),n=r.getSeconds(),this.setColumn(0,t),this.setColumn(2,e),this.setColumn(4,n),!0}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(4);function o(){var t,e=window,n=e.document;return(t=e.navigator).appVersion,
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
document.compatMode&&(r.a.version=6),window.XMLHttpRequest&&(r.a.version=7),document.querySelector&&(r.a.version=8),document.addEventListener&&document.getElementsByClassName&&(r.a.version=9),window.atob&&(r.a.version=10),crypto&&crypto.getRandomValues&&(r.a.version=11),r.a.docMode=document.documentMode?document.documentMode:r.a.version,e.ActiveXObject&&(r.a.hasActiveX=!0)):n.layers?(r.a.name="Netscape Navigator",r.a.version=4):e.opera||n.all?(r.a.name="Opera",r.a.version=4,e.opera&&(r.a.version=5,(e.print&&e.opera.buildNumber||n.getElementsByTagName)&&(r.a.version=6),n.readyState&&(r.a.version=7),n.implementation&&n.implementation.createDocument&&(r.a.version=8),n.createEntityReference&&(r.a.version=9),n.querySelectorAll&&(r.a.version=10),"undefined"!=typeof WebSocket&&(r.a.version=11),window.document.hasOwnProperty("on drag")&&(r.a.version=12))):n.getElementById&&n.childNodes&&!t.taintEnabled&&t.vendor?"Apple Computer, Inc."===t.vendor?r.a.name="Safari":"KDE"===t.vendor.toUpperCase()?r.a.name="Konqueror":e.chrome||-1!==t.vendor.indexOf("Google")?r.a.name="Chrome":r.a.name=t.vendor:t.product&&(r.a.name="Gecko",t.buildID&&(r.a.buildID=t.buildID),"Gecko"!==t.product&&(r.a.name="Gecko / "+t.product)),n.getElementById&&n.implementation&&(r.a.isDOMCapable=!0),n.documentElement&&("ontouchstart"in n.documentElement||"touchstart"in n.documentElement)&&(r.a.touchEnabled=!0),r.a.browserName=function(){var t,e,n=[{bProp:window.chrome,name:"chrome"},{bProp:window.safari,name:"safari"},{bProp:window.opera,name:"opera"},{bProp:window.mozInnerScreenX,name:"firefox"},{bProp:document.all,name:"ie"}];for(t in n)if(void 0!==n[t].bProp){e=n[t].name;break}return e}(),r.a}},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(23),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r,o,a,i,c,u,l,s,d,f=Object.prototype,h=f.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},p=m.iterator||"@@iterator",v=m.asyncIterator||"@@asyncIterator",g=m.toStringTag||"@@toStringTag",y="object"==typeof t,b=e.regeneratorRuntime;function w(t,e,n,u){var l=e&&e.prototype instanceof k?e:k,s=Object.create(l.prototype),d=new I(u||[]);return s._invoke=function(t,e,n){var u=r;return function(l,s){var d,f,h;if(u===a)throw new Error("Generator is already running");if(u===i){if("throw"===l)throw s;return P()}for(n.method=l,n.arg=s;;){if((d=n.delegate)&&(f=C(d,n))){if(f===c)continue;return f}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(u===r)throw u=i,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);if(u=a,"normal"===(h=S(t,e,n)).type){if(u=n.done?i:o,h.arg===c)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(u=i,n.method="throw",n.arg=h.arg)}}}(t,n,d),s}function S(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function k(){}function M(){}function x(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var i,c,u=S(t[n],t,r);if("throw"!==u.type)return(c=(i=u.arg).value)&&"object"==typeof c&&h.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){i.value=t,o(i)},function(t){return e("throw",t,o,a)});a(u.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function C(t,e){var r,o,a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}return"throw"===(r=S(a,t.iterator,e.arg)).type?(e.method="throw",e.arg=r.arg,e.delegate=null,c):(o=r.arg)?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){var e,r,o;if(t){if(e=t[p])return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(o=function e(){for(;++r<t.length;)if(h.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e}).next=o}return{next:P}}function P(){return{value:n,done:!0}}b?y&&(t.exports=b):((b=e.regeneratorRuntime=y?t.exports:{}).wrap=w,r="suspendedStart",o="suspendedYield",a="executing",i="completed",c={},(u={})[p]=function(){return this},(s=(l=Object.getPrototypeOf)&&l(l(N([]))))&&s!==f&&h.call(s,p)&&(u=s),d=x.prototype=k.prototype=Object.create(u),M.prototype=d.constructor=x,x.constructor=M,x[g]=M.displayName="GeneratorFunction",b.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===M||"GeneratorFunction"===(e.displayName||e.name))},b.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,g in t||(t[g]="GeneratorFunction")),t.prototype=Object.create(d),t},b.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[v]=function(){return this},b.AsyncIterator=T,b.async=function(t,e,n,r){var o=new T(w(t,e,n,r));return b.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(d),d[g]="Generator",d[p]=function(){return this},d.toString=function(){return"[object Generator]"},b.keys=function(t){var e,n=[];for(e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},b.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&h.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){var t;if(this.done=!0,"throw"===(t=this.tryEntries[0].completion).type)throw t.arg;return this.rval},dispatchException:function(t){var e,r,o,a,i,c;if(this.done)throw t;function u(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(r=(e=this).tryEntries.length-1;r>=0;--r){if(o=this.tryEntries[r],a=o.completion,"root"===o.tryLoc)return u("end");if(o.tryLoc<=this.prev)if(i=h.call(o,"catchLoc"),c=h.call(o,"finallyLoc"),i&&c){if(this.prev<o.catchLoc)return u(o.catchLoc,!0);if(this.prev<o.finallyLoc)return u(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return u(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return u(o.finallyLoc)}}},abrupt:function(t,e){var n,r,o,a;for(n=this.tryEntries.length-1;n>=0;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&h.call(r,"finallyLoc")&&this.prev<r.finallyLoc){o=r;break}return o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null),(a=o?o.completion:{}).type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){var e,n;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),c},catch:function(t){var e,n,r,o;for(e=this.tryEntries.length-1;e>=0;--e)if((n=this.tryEntries[e]).tryLoc===t)return"throw"===(r=n.completion).type&&(o=r.arg,O(n)),o;throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),c}})}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,n){"use strict";var r,o,a;function i(t,e,n,i){var c,u={canvas:null,ctx:null,width:0,height:0};return window.MF=a.a,u.canvas=r.a("canvas",e,{id:t}),u.canvas?(n&&(u.canvas.width=n),i&&(u.canvas.height=i),u.width=u.canvas.width,u.height=u.canvas.height,Object(o.a)(u.canvas.getContext)&&(u.ctx=u.canvas.getContext("2d"),function(t){function e(t,e){return Math.sqrt(a.a.square(t)-a.a.square(e))}t.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},t.line=function(t,e,n,r,o){var i,c,u,l=0,s=0;i=this.ctx,o&&(c=o.color,u=o.rotateAngle),i.save(),i.beginPath(),u&&(l=t+Math.abs(t-n)/2,s=e+Math.abs(e-r)/2,i.translate(l,s),i.rotate(a.a.degreesToRadians(u))),i.moveTo(t-l,e-s),i.lineTo(n-l,r-s),i.fillStyle=c||"black",i.fill(),i.strokeStyle=c||"black",i.stroke(),i.restore()},t.circle=function(t,e,n,r){var o,a,i,c;a=this.ctx,r&&(i=r.color,c=r.fillStrokeClear),a.beginPath(),a.moveTo(t+n,e),a.arc(t,e,n,0,2*Math.PI,!0),a[(o=c||"stroke")+"Style"]=i||"black",a[o]()},t.halfCircle=function(t,e,n,r){var o,i,c,u,l,s,d=0,f=0;i=this.ctx,r&&(c=r.color,u=r.rotateAngle,s=r.openTop,l=r.fillStrokeClear),i.save(),i.beginPath(),u&&(d=t,f=e,i.translate(d,f),i.rotate(a.a.degreesToRadians(u))),i.moveTo(t-n-d,e-f),i.arc(t-d,e-f,n,Math.PI,2*Math.PI,!0),s||i.lineTo(t-n-d,e-f),i.closePath(),i[(o=l||"stroke")+"Style"]=c||"black",i[o](),i.restore()},t.oval=function(t,e,n,r,o){var i,c,u,l,s,d=0,f=0,h=.5522848,m=t-n/2,p=e-r/2,v=n/2*h,g=r/2*h,y=m+n,b=p+r,w=m+n/2,S=p+r/2;(c=this.ctx).save(),o&&(u=o.color,l=o.fillStrokeClear,s=o.rotateAngle),c.beginPath(),s&&(d=w,f=S,c.translate(d,f),c.rotate(a.a.degreesToRadians(s))),c.moveTo(m-d,S-f),c.bezierCurveTo(m-d,S-g-f,w-v-d,p-f,w-d,p-f),c.bezierCurveTo(w+v-d,p-f,y-d,S-g-f,y-d,S-f),c.bezierCurveTo(y-d,S+g-f,w+v-d,b-f,w-d,b-f),c.bezierCurveTo(w-v-d,b-f,m-d,S+g-f,m-d,S-f),c.restore(),c[(i=l||"stroke")+"Style"]=u||"black",c[i]()},t.rectangle=function(t,e,n,r,o){var i,c,u,l,s,d=0,f=0;c=this.ctx,o&&(u=o.color,l=o.rotateAngle,s=o.fillStrokeClear),c.save(),c.beginPath(),l&&(d=Math.round(t+n/2),f=Math.round(e+r/2),c.translate(d,f),c.rotate(a.a.degreesToRadians(l))),c[(i=s||"stroke")+"Style"]=u||"black",c[i+"Rect"](t-d,e-f,n,r),c[i](),c.restore()},t.square=function(t,e,n,r){this.rectangle(t,e,n,n,r)},t.triangle=function(t,e,n,r,o,i,c){var u,l,s,d,f,h=0,m=0;u=this.ctx,c&&(s=c.color,d=c.rotateAngle,f=c.fillStrokeClear),u.save(),u.beginPath(),d&&(h=(t+n+o)/3,m=(e+r+i)/3,u.translate(h,m),u.rotate(a.a.degreesToRadians(d))),l=f||"stroke",u.moveTo(t-h,e-m),u.lineTo(n-h,r-m),u.lineTo(o-h,i-m),u.lineTo(t-h,e-m),u.closePath(),u[l+"Style"]=s||"black",u[l](),u.restore()},t.equilateralTriangle=function(t,n,r,o){var a,i,c;o&&(c=o.orientation),a=e(r,i=r/2),"down"===c?this.triangle(t,n,t+r,n,t+i,n+a,o):this.triangle(t,n,t+r,n,t+i,n-a,o)},t.hexagon=function(t,n,r,o){var i,c,u,l,s,d,f,h=0,m=0;i=this.ctx,o&&(d=o.color,f=o.rotateAngle,s=o.fillStrokeClear),l=s||"stroke",c=e(r,u=r/2),i.save(),i.beginPath(),f&&(h=t,m=n,i.translate(h,m),i.rotate(a.a.degreesToRadians(f))),i.moveTo(t+u-r-h,n-c-m),i.lineTo(t+u-h,n-c-m),i.lineTo(t+r-h,n-m),i.lineTo(t+u-h,n+c-m),i.lineTo(t+u-r-h,n+c-m),i.lineTo(t-r-h,n-m),i.lineTo(t-r+u-h,n-c-m),i.closePath(),i[l+"Style"]=d||"black",i[l](),i.restore()},t.octagon=function(t,e,n,r){var o,i,c,u,l,s,d,f=0,h=0;r&&(s=r.color,d=r.rotateAngle,l=r.fillStrokeClear),u=l||"stroke",c=n/2,i=Math.sqrt(Math.pow(n,2)+Math.pow(c,2)),(o=this.ctx).save(),d&&(f=t,h=e,o.translate(f,h),o.rotate(a.a.degreesToRadians(d))),o.beginPath(),o.moveTo(t-c-f,e-i-h),o.lineTo(t+c-f,e-i-h),o.lineTo(t+i-f,e-c-h),o.lineTo(t+i-f,e+c-h),o.lineTo(t+c-f,e+i-h),o.lineTo(t-c-f,e+i-h),o.lineTo(t-i-f,e+c-h),o.lineTo(t-i-f,e-c-h),o.lineTo(t-c-f,e-i-h),o.closePath(),o[u+"Style"]=s||"black",o[u](),o.restore()}}(u),c=u),c):null}n.d(e,"a",function(){return i}),r=n(3),o=n(0),a=n(10)},,,,,,,,,,,function(t,e,n){"use strict";var r,o,a,i,c,u,l,s,d,f,h,m,p,v,g,y;function b(){return function(){return i()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/frags/nav.frag",t.next=3,Object(s.a)("/frags/nav.frag");case 3:e=t.sent,document.getElementById("menu").innerHTML=e.replace(/\n/g,"");case 6:case"end":return t.stop()}},t,this)})).apply(this,arguments)}.apply(this,arguments)}n.r(e),r=n(13),o=n.n(r),a=n(14),i=n.n(a),c=n(3),u=n(2),l=n(1),s=n(17),d=n(10),f=n(21),h=n(11),m=n(24),p=n(20),v=n(18),(g=Object(f.a)()).capabilitiesDetected||"WARNING: Your browser version information was detected from useragent string only or not at all! ",g.name,g.version,g.OS,g.name,g.appVersion,g.uaOS,g.uaOSVersion&&g.uaOSVersion,g.uaName,g.uaAppVersion,g.userAgent,y=c.d.maxx(),u.b(function(){var t,e,n,r,o,a,i,s=new p.b;s.setId("digiclock"),s.startClock(),t=!1,Object(h.a)(document.querySelectorAll("footer")[0]),e=Object(l.a)("footer ul li:first-child"),u.a(e.get(0),"click",function(e){var n,r,o,a,i,u;t?(Object(l.a)("#calendar-container").get(0).style.display="none",t=!1):(n=Object(l.a)("footer").get(0),r=window.getComputedStyle(n).top,o=document.querySelector("body"),(a=c.a("div",o,{id:"calendar-container"})).style.display="block",new v.a(a.id).render(),i=window.getComputedStyle(a).height,u=parseInt(r)-parseInt(i)-12,a.style.top=u+"px",t=!0)}),n=y>800?m.a("star-system","canvas-container",800,600):m.a("star-system","canvas-container",250,250),r=[Math.floor(n.width/2),Math.floor(n.height/2)],o=Math.ceil(r[0]/2)<Math.ceil(r[1]/2)?Math.ceil(r[0]/2):Math.ceil(r[1]/2),a=d.a.getCirlePoints(o,315),n.rectangle(0,0,n.width,n.height,{color:"black",fillStrokeClear:"fill"}),n.circle(r[0]-a.x,r[1]-a.y,15,{color:"white",fillStrokeClear:"fill"}),n.circle(r[0]+a.x,r[1]+a.y,15,{color:"white",fillStrokeClear:"fill"}),i=315,window.setInterval(function(){var t=d.a.getCirlePoints(o,i);n.circle(r[0]-t.x,r[1]-t.y,15,{color:"black",fillStrokeClear:"fill"}),n.circle(r[0]+t.x,r[1]+t.y,15,{color:"black",fillStrokeClear:"fill"}),i=i>=360?0:i++,n.circle(r[0]-t.x,r[1]-t.y,15,{color:"white",fillStrokeClear:"fill"}),n.circle(r[0]+t.x,r[1]+t.y,15,{color:"white",fillStrokeClear:"fill"})},1e3),b()})}]);
//# sourceMappingURL=index.js.source.map