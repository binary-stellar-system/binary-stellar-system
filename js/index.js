!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){var r,o;if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}([function(e,t,n){"use strict";var r,o;function a(e,t,n){return n instanceof e||o()(n).toLowerCase()===t}function i(e){return null!=e}function u(e){return a(String,"string",e)}function c(e){return a(Number,"number",e)}function l(e){return Array.isArray(e)}function d(e){return a(Object,"object",e)}function s(e){var t=e.nodeName;return"textarea"===(t=t||"").toLowerCase()}function f(e){var t=o()(e),n=e.nodeName;return"input"===(n=n||"").toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}n.d(t,"a",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"g",function(){return s}),n.d(t,"c",function(){return f}),r=n(6),o=n.n(r)},function(e,t,n){"use strict";var r,o;function a(e,t){var n,a,i,u={},c=e;if(u.length=0,u.objectName="selector",a=t||document,!r.f(c)&&r.e(c)&&c.hasOwnProperty("objectName")&&"selector"===c.objectName)return c;for(e instanceof HTMLElement&&(e.id?c="#"+e.id:(c=e.nodeName.toLowerCase(),e.className.length>0&&(c+="."+e.className.split(" ").join(" .")))),n=o.test(c)?(n=a.querySelector(c))?[n]:[]:(n=a.querySelectorAll(c))&&n.length>0?n:[],u.length=n.length,u.get=function(e){return n[e]},u.toArray=function(){return Array.from(n)},i=0;i<u.length;i++)u[i]=n[i];return u}n.d(t,"a",function(){return a}),r=n(0),o=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/},function(e,t,n){"use strict";var r,o,a,i,u,c,l,d,s,f;function m(){var e=document;return e.documentElement&&("ontouchstart"in e.documentElement||"touchstart"in e.documentElement)}n.d(t,"a",function(){return i}),n.d(t,"h",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return f}),n.d(t,"g",function(){return m}),r=n(6),o=n.n(r),a=n(4),window.attachEvent&&!window.addEventListener?i=function(e,t,n,r){if(!e.attachEvent("on"+t,n))throw"Event "+t+" could not be added!"}:window.addEventListener&&(i=function(e,t,n,r){var o=r||!1;e.addEventListener(t,n,o)}),window.detachEvent&&!window.removeEventListener?u=function(e,t,n,r){if(!e.detachEvent("on"+t,n))throw"Event "+t+" could not be removed!"}:window.removeEventListener&&(u=function(e,t,n,r){e.removeEventListener(t,n,r)}),c=function(e){return window.event?window.event:e},l=function(e){var t,n=c(e);return n.srcElement?t=n.srcElement:n.target&&(t=n.target),t},d=function(e){var t=c(e),n=0;return t.pageX?n=t.pageX:t.clientX&&(n=t.clientX),n},s=function(e){var t=c(e),n=0;return t.pageY?n=t.pageY:t.clientY&&(n=t.clientY),n},document.createEvent&&function(e,t,n){var r=document.createEvent("Event");if(r)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),r.initEvent("Event",n.canBubble,n.cancellable),r},f=function(e){a.a.onLoadEventStack.push(e)},i(window,"load",function(){var e,t,n=a.a.onLoadEventStack,r=n.length;for(t=0;t<r;t+=1)(e=n[t])&&"function"===o()(e).toLowerCase()&&e()},!1)},function(e,t,n){"use strict";var r,o,a,i,u,c,l,d;n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return d}),r=n(1),o=n(0),a=n(5),i=function(e,t,n){var r,i,u=document.body;if(t&&o.f(t)?u=document.getElementById(t):t&&(u=t),!e)return u;if(n&&n.id&&(r=document.getElementById(n.id)),r||(r=document.createElement(e)),!r)return r;if(u.appendChild(r),r&&n){for(i in n)try{r[i]=n[i]}catch(e){}n.className&&a.a(r,n.className)}return r},u=function(e,t,n){var a,i,u=Object(r.a)(e);if(!(u.length<=0)&&(n||(n=0),!(n>=u.length)&&u[n]))return a=u.get(n),i=new String(a.tagName).toLowerCase(),(t||""===t)&&function(e,t){o.f(e)||o.d(e)?o.c(i)||o.c(t)?t.value=e:o.g(t)?t.value=e:t.innerHTML=e:t&&o.e(e)&&t.appendChild(e)}(t,a),o.c(i)||o.c(a)?a.value:o.g(a)?a.value:o.f(a.innerHTML)?a.innerHTML:void 0},c=function(e,t,n){var o,a,i,u;if(!((a=Object(r.a)(e)).length<=0)&&(o=a.get(0),n&&n<a.length&&(o=a.get(n)),o))return(i=function(e,t){var n;e?(n=e.parentNode)&&(n.nodeName.toLowerCase()!==t?i(n,t):u=n):u=null})(o,t),u},l={maxx:function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.documentElement&&document.documentElement.offsetWidth||document.body&&document.body.clientWidth||document.body&&document.body.offsetWidth||0},maxy:function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.documentElement&&document.documentElement.offsetHeight||document.body&&document.body.clientHeight||document.body&&document.body.offsetHeight||0}},d=function(e){var t,n=e;o.f(e)&&(n=Object(r.a)("#"+e).get(0)),n&&("block"===(t=a.b(e,"display"))?n.style.display="none":n.style.display="none"===t?"block":"none")}},function(e,t,n){"use strict";var r,o;o=(r=window.navigator).appVersion,t.a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:r.cookieEnabled,name:r.appName,uaName:r.appName,OS:r.platform,uaOS:r.platform,userAgent:r.userAgent,appVersion:parseFloat(o,10),uaAppVersion:parseFloat(o,10),version:parseFloat(o,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""}},function(e,t,n){"use strict";var r,o,a,i,u,c,l;n.d(t,"a",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return l}),r=n(1),o=n(0),a=function(e,t){-1===e.className.indexOf(t)&&(e.className+=" "+t)},i=function(e,t){var n,r=-1,o=e.className.split(" "),a=o.length;for(n=0;n<a;n+=1)if(o[n]===t){r=n;break}-1!==r&&(o.splice(n,1),e.className=o.join(" "))},u=function(e,t,n){i(e,t),a(e,n)},c=function(e,t){var n,r,a,i=e;if(o.f(e)&&(i=document.getElementById(e)),i&&i.className)for(r=(n=i.className.split(" ")).length,a=0;a<r;a+=1)if(n[a]===t)return!0;return!1},l=function(e,t){var n,a=e;return o.f(e)&&(a=Object(r.a)("#"+e).get(0)),a?(a.currentStyle?n=a.currentStyle[t]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(a,null).getPropertyValue(t)),n):""}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){"use strict";var r={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],numberOfDaysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],weekDayShortNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],getFirstOfMonthDayOfWeek:function(e){var t=e?new Date(e.getTime()):new Date;return t.setDate(1),t.getDay()},getDaysInMonth:function(e){var t=e?new Date(e.getTime()):new Date,n=t.getMonth(),o=t.getFullYear();return 1===n?o%4==0?o%400==0?29:o%100==0?28:29:28:r.numberOfDaysInMonth[n]},setFullDate:function(e,t,n){var r=new Date;return r.setMonth(e),r.setDate(t),r.setFullYear(n),r},getAMPM:function(e){return e.getHours()>11?" PM":" AM"}};t.a=r},,,function(e,t,n){"use strict";var r,o,a,i,u;function c(e){var t=i[e.getDay()],n=u[e.getMonth()];return"".concat(t,", ").concat(n," ").concat(e.getDate(),", ").concat(e.getFullYear())}function l(){var e,t=new Date,n="",r=Object(a.a)(document.lastModified)&&document.lastModified>0?c(Date.parse(document.lastModified)):"";return r.length>0&&(n+="<li>Last modified on ".concat(r,".</li>")),e=c(t),(n+="<li>Today is ".concat(e,".</li>"))+"<li>Copyright ".concat(t.getFullYear(),".</li>")}function d(e){var t,n;e&&(t=r.a("ul",e))&&(t.innerHTML=l()),void 0===document.querySelectorAll&&(-1!==(n=(n=window.location.pathname).substring(n.lastIndexOf("/"))).indexOf("fish_pictures")?window.location.href="../":-1===n.indexOf("index.html")&&"/"!==n&&(window.location.href="index.html"))}n.d(t,"a",function(){return d}),r=n(3),o=n(7),a=n(0),i=o.a.weekDayShortNames,u=o.a.monthShortNames},,function(e,t,n){"use strict";var r={add:function(){var e,t=0;for(e=0;e<arguments.length;e+=1)t+=+arguments[e];return t},subtract:function(e,t){return+e-+t},multiply:function(){var e,t=1;for(e=0;e<arguments.length;e+=1)t=+t*+arguments[e];return t},divide:function(e,t){return+e/+t},square:function(e){return Math.pow(e,2)},cube:function(e){return Math.pow(e,3)},computeLineLength:function(e,t,n,o){var a=r.subtract(n,e),i=r.subtract(o,t),u=r.add(r.square(a),r.square(i));return Math.sqrt(u)},computePerimeter:function(e,t,n,o,a,i,u,c){var l=r.computeLineLength(e,t,n,o),d=r.computeLineLength(n,o,a,i),s=r.computeLineLength(a,i,u,c),f=r.computeLineLength(u,c,e,t);return r.computePerimeterByLength(l,d,s,f)},computePerimeterByLength:function(e,t,n,o){return r.add(e,t,n,o)},computePerimeterOfSquare:function(e){return r.multiply(e,4)},areaOfTriangle:function(e,t){return r.multiply(e,t,.5)},areaOfTrapizoid:function(e,t,n){var o,a;return o=r.add(t,n),a=r.divide(o,2),r.multiply(e,a)},pythagorean:function(e,t){return Math.sqrt(r.square(e)+r.square(t))},average:function(){var e=arguments,t=0;return Object.keys(arguments).forEach(function(n){t=r.add(t,e[n])}),r.divide(t,arguments.length)},areaOfCircle:function(e){return r.multiply(Math.PI,r.square(e))},circumferenceOfACircle:function(e){return r.multiply(2,Math.PI,e)},surfaceAreaCone:function(e,t){var n=Math.sqrt(r.multiply(Math.PI,r.square(e))),o=r.add(r.square(e),r.square(t)),a=r.multiply(e,Math.PI,o);return r.add(n,a)},volumeCone:function(e,t){return r.multiply(1/3,Math.PI,r.square(e),t)},surfaceAreaCylinder:function(e,t){var n=r.multiply(2,Math.PI,r.square(e)),o=r.multiply(2,Math.PI,e,t);return r.add(n,o)},volumeCylinder:function(e,t){return r.multiply(Math.PI,r.square(e),t)},surfaceAreaSphere:function(e){return r.multiply(4,Math.PI,r.square(e))},volumeSphere:function(e){return r.multiply(4/3,Math.PI,r.cube(e))},inverse:function(e){return r.multiply(-1,e)},oneOver:function(e){return r.divide(1,e)},factorial:function(e){if(+e<=1)return 1;var t=+e-1;return r.multiply(e,r.factorial(t))},hexidecimal:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],convertFromBaseTenToBaseX:function(e,t){for(var n,o=t,a=r.hexidecimal[o%e];o>=e;)n=r.subtract(o,o%e),a=(o=r.divide(n,e))>=e?r.hexidecimal[o%e]+a:r.hexidecimal[o]+a;return a},convertFromBaseXToBaseTen:function(e,t){var n,o,a,i=0,u=1;function c(e){for(var t=0;t<r.hexidecimal.length;t+=1)if(r.hexidecimal[t]===e)return t;return""}for(;u<=t.length;)n=Math.pow(e,r.subtract(u,1)),o=r.subtract(t.length,u),a=c(t.charAt(o)),i=r.add(i,r.multiply(a,n)),u++;return i},degreesToRadians:function(e){return e*Math.PI/180},radiansToDegrees:function(e){return 180*e/Math.PI},generateGUID:function(){var e,t,n,o,a,i=1e6*(new Date).getTime(),u=r.convertFromBaseTenToBaseX(16,i),c="";for(e=0,t=u.length;e<t;e+=1)c+=u[e]<<1;for(n="",o=0,a=(c=u+r.convertFromBaseTenToBaseX(16,c)).length;o<a;o+=1)n+=c[o],o>0&&o%5==0&&o%10!=0&&(n+="-"),o>0&&o%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}};t.a=r},,,,,function(e,t,n){"use strict";var r,o,a,i,u;function c(e,t){var n,c,l,d,s;if(this.date=new Date,this.id=t&&t.id?t.id:"",!e)throw"Could not create Calendar() because no parent object was specifiec!";this.parentID=e,n={selection:"",year:"",content:null},(d=this).handle=n,this.hasRendered=!1,this.userCallBackFN=null,c=function(){var e,t,n=r.a.weekDayShortNames.length;for(t='<tr class="header">',e=0;e<n;e+=1)t+="<th>"+r.a.weekDayShortNames[e]+"</th>";return t+"</tr>"},l=function(e){var t,n=r.a.getFirstOfMonthDayOfWeek(e),o=r.a.getDaysInMonth(e),a=e.getDate(),i="<tr>";for(t=0;t<n;t+=1)i+="<td>&nbsp;</td>";for(t=1;t<=o;t+=1)i+=t===a?'<td class="selected">'+t+"</td>":'<td class="unselected">'+t+"</td>",(t+n)%7==0&&(i+="</tr><tr>");return i+"</tr>"},s=function(e){var t,n,o='<table class="navigation calendar"><tr><td>';for(o+='<td class="ylarrow">&lt;&lt;</td>',o+='<td class="mlarrow">&lt;</td>',o+='<td><form><select class="monthSelection">',t=r.a.monthNames.length,n=0;n<t;n+=1)o+="<option "+(e.getMonth()===n?'selected="true"':"")+' value="'+n+'">'+r.a.monthNames[n]+"</option>";return o+="</select></form></td>",o+='<td class="calyear">'+e.getFullYear()+"</td>",o+='<td class="mrarrow">&gt;</td>',o+='<td class="yrarrow">&gt;&gt;</td>',(o+="</tr></table>")+'<div id="'+d.parentID+'content"></div>'},this.render=function(){var e,t,n,r,d,f,m,h,p,v=Object(o.a)("#"+this.parentID),g=v.get(0);if(!g)throw"Could not get parent element to attach calendar to!";if(!this.hasRendered){for(r=this,n=function(e){r.handleClick(e,r)},u.a(g,"click",n,!1),e=s(this.date),i.c(v,e),(t=Object(o.a)("select",g)).get(0).onchange=function(e){r.handleClick(e,r)},this.handle.selection=t.get(0),d=Object(o.a)("td",g),h=!1,f=0;f<d.length;f+=1)if(a.c(d.get(f),"calyear")){h=d.get(f);break}this.handle.year=h,this.hasRendered=!0}if(this.handle.selection.selectedIndex=this.date.getMonth(),i.c(this.handle.year,this.date.getFullYear()),!this.handle.content){if(!(m=Object(o.a)("#"+this.parentID+"content",g)))throw"Could not build calendar frame";this.handle.content=m.get(0)}p='<table class="calendar">'+c()+l(this.date)+"</table>",i.c(this.handle.content,p)},this.handleClick=function(e,t){var n,r=u.c(e),o=u.f(r),c=o.nodeName.toUpperCase();if("TD"===c){if(!i.b(o,"table"))return;!function(e,t,n){var r,o;i.b(e,"div")&&(a.c(e,"selected")||a.c(e,"unselected")?isNaN(e.innerHTML)||(t.date.setDate(e.innerHTML),t.render(),n.userCallBackFN&&n.userCallBackFN(t)):a.c(e,"ylarrow")?(r=t.date.getFullYear(),t.date.setFullYear(+r-1),t.render()):a.c(e,"mlarrow")?(o=t.date.getMonth(),t.date.setMonth(+o-1),t.render()):a.c(e,"mrarrow")?(o=t.date.getMonth(),t.date.setMonth(+o+1),t.render()):a.c(e,"yrarrow")&&(r=t.date.getFullYear(),t.date.setFullYear(+r+1),t.render()))}(o,t,this)}else"SELECT"===c&&(n=o.selectedIndex,t.date.setMonth(n),t.render())}}n.d(t,"a",function(){return c}),r=n(7),o=n(1),n(0),a=n(5),i=n(3),u=n(2),c.prototype.getCalendarDate=function(){return r.a.monthNames[this.date.getMonth()]+" "+this.date.getDate()+", "+this.date.getFullYear()},c.prototype.setCalendarDate=function(e,t,n){this.date.setMonth(e),this.date.setDate(t),this.date.setFullYear(n),this.render()}},,,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var r=n(12);function o(){this.clockId="clockID",this.setIntervalReturnCode="",this.updateInterval=1e3}function a(){this.clockText="Time: ",this.showSeconds=!0}function i(){var e;e=function(e,t){var n,o,a,i,u,c,l,d=r.a.convertFromBaseTenToBaseX(2,t);for(n=4-d.toString().length,o=0;o<n;o+=1)a=this.clockId+"_row_"+o+"_col_"+e,(i=document.getElementById(a))&&(i.innerHTML="0");for(u=0,o=3;o>=n;o-=1)c=+u+ +n,l=d.substring(u,u+1),a=this.clockId+"_row_"+c+"_col_"+e,(i=document.getElementById(a))&&(i.innerHTML=l),u+=1},this.setColumn=function(t,n){var r;n>=10?(r=n.toString(),e.call(this,t,r.substring(0,1)),e.call(this,t+1,r.substring(1))):(e.call(this,t,0),e.call(this,t+1,n))},this.render=function(){var e,t,n,r=document.getElementById(this.clockId);if(r){for(e="<table>",t=0;t<4;t+=1){for(e+="<tr>",n=0;n<6;n+=1)e+='<td id="'+(this.clockId+"_row_"+t+"_col_"+n)+'"></td>';e+="</tr>"}e+="</table>",r.innerHTML=e}this.runClock()}}o.prototype.runClock=function(){throw"Override this function"},o.prototype.startClock=function(){var e,t;t=function(){e.runClock()},(e=this).setIntervalReturnCode=window.setInterval(t,this.updateInterval)},o.prototype.stopClock=function(){clearTimeout(this.setIntervalReturnCode)},o.prototype.setId=function(e){this.clockId=e},(a.prototype=new o).runClock=function(){var e,t,n;return!!document.getElementById&&(n=function(e){var t=e;return e<10&&(t="0"+e),t},t=function(e){var t,r;return r=(t=new Date).getHours()+":"+n(t.getMinutes()),e&&(r+=":"+n(t.getSeconds())),r},!!(e=document.getElementById(this.clockId))&&(e.innerHTML=this.clockText+t(this.showSeconds),!0))},(i.prototype=new o).runClock=function(){var e,t,n,r=new Date;return e=r.getHours(),t=r.getMinutes(),n=r.getSeconds(),this.setColumn(0,e),this.setColumn(2,t),this.setColumn(4,n),!0}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(4);function o(){var e,t=window,n=t.document;return(e=t.navigator).appVersion,
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
document.compatMode&&(r.a.version=6),window.XMLHttpRequest&&(r.a.version=7),document.querySelector&&(r.a.version=8),document.addEventListener&&document.getElementsByClassName&&(r.a.version=9),window.atob&&(r.a.version=10),crypto&&crypto.getRandomValues&&(r.a.version=11),r.a.docMode=document.documentMode?document.documentMode:r.a.version,t.ActiveXObject&&(r.a.hasActiveX=!0)):n.layers?(r.a.name="Netscape Navigator",r.a.version=4):t.opera||n.all?(r.a.name="Opera",r.a.version=4,t.opera&&(r.a.version=5,(t.print&&t.opera.buildNumber||n.getElementsByTagName)&&(r.a.version=6),n.readyState&&(r.a.version=7),n.implementation&&n.implementation.createDocument&&(r.a.version=8),n.createEntityReference&&(r.a.version=9),n.querySelectorAll&&(r.a.version=10),"undefined"!=typeof WebSocket&&(r.a.version=11),window.document.hasOwnProperty("on drag")&&(r.a.version=12))):n.getElementById&&n.childNodes&&!e.taintEnabled&&e.vendor?"Apple Computer, Inc."===e.vendor?r.a.name="Safari":"KDE"===e.vendor.toUpperCase()?r.a.name="Konqueror":t.chrome||-1!==e.vendor.indexOf("Google")?r.a.name="Chrome":r.a.name=e.vendor:e.product&&(r.a.name="Gecko",e.buildID&&(r.a.buildID=e.buildID),"Gecko"!==e.product&&(r.a.name="Gecko / "+e.product)),n.getElementById&&n.implementation&&(r.a.isDOMCapable=!0),n.documentElement&&("ontouchstart"in n.documentElement||"touchstart"in n.documentElement)&&(r.a.touchEnabled=!0),r.a.browserName=function(){var e,t,n=[{bProp:window.chrome,name:"chrome"},{bProp:window.safari,name:"safari"},{bProp:window.opera,name:"opera"},{bProp:window.mozInnerScreenX,name:"firefox"},{bProp:document.all,name:"ie"}];for(e in n)if(void 0!==n[e].bProp){t=n[e].name;break}return t}(),r.a}},,,,,,,,,,,,function(e,t,n){"use strict";var r,o,a,i,u,c,l,d;n.r(t),r=n(3),o=n(2),a=n(1),i=n(21),u=n(10),c=n(20),l=n(17),(d=Object(i.a)()).capabilitiesDetected||"WARNING: Your browser version information was detected from useragent string only or not at all! ",d.name,d.version,d.OS,d.name,d.appVersion,d.uaOS,d.uaOSVersion&&d.uaOSVersion,d.uaName,d.uaAppVersion,d.userAgent,o.b(function(){var e,t=new c.b;t.setId("digiclock"),t.startClock(),Object(u.a)(document.querySelectorAll("footer")[0]),e=Object(a.a)("footer ul li:first-child"),o.a(e.get(0),"click",function(e){var t,n,o=Object(a.a)("footer").get(0),i=window.getComputedStyle(o,"top");console.log(i),t=document.querySelector("body"),n=r.a("div",t,{id:"calendar-container"}),new l.a(n.id).render()})})}]);
//# sourceMappingURL=index.js.source.map