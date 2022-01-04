/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";function e(e,t,n){return n instanceof e||(typeof n).toLowerCase()===t}function t(e){return null!=e}function n(t){return e(String,"string",t)}function o(t){return e(Object,"object",t)}function a(e){let t=e.nodeName;return t=t||"","textarea"===t.toLowerCase()}function r(e){let t=typeof e,n=e.nodeName;return n=n||"","input"===n.toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}const i=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function s(e,t){let a,r={},s=e;r.length=0,r.objectName="selector";const l=t||document;if(!n(s)&&o(s)&&s.hasOwnProperty("objectName")&&"selector"===s.objectName)return s;e instanceof HTMLElement&&(e.id?s="#"+e.id:(s=e.nodeName.toLowerCase(),e.className.length>0&&(s+="."+e.className.split(" ").join(" .")))),i.test(s)?(a=l.querySelector(s),a=a?[a]:[]):(a=l.querySelectorAll(s),a=a&&a.length>0?a:[]),r.length=a.length,r.get=function(e){return a[e]},r.toArray=function(){return Array.from(a)},r.each=function(e){r.toArray().forEach(e)};for(let e=0;e<r.length;e++)r[e]=a[e];return r}const l=function(e,t){-1===e.className.indexOf(t)&&(e.className+=" "+t)},c=function(e,t){let o=e;if(n(e)&&(o=document.getElementById(e)),o&&o.className){const e=o.className.split(" "),n=e.length;for(let o=0;o<n;o+=1)if(e[o]===t)return!0}return!1},d=function(e,t,o){let a,r=document.body;if(t&&n(t)?r=document.getElementById(t):t&&(r=t),!e)return r;if(o&&o.id&&(a=document.getElementById(o.id)),a||(a=document.createElement(e)),!a)return a;if(r.appendChild(a),a&&o){let e;for(e in o)try{a[e]=o[e]}catch(e){}o.className&&l(a,o.className)}return a},u=function(t,i,l){let c,d,u=s(t);if(!(u.length<=0)&&(l||(l=0),!(l>=u.length)&&u[l]))return c=u.get(l),d=new String(c.tagName).toLowerCase(),(i||""===i)&&function(t,i){n(t)||e(Number,"number",t)?r(d)||r(i)||a(i)?i.value=t:i.innerHTML=t:i&&o(t)&&i.appendChild(t)}(i,c),r(d)||r(c)||a(c)?c.value:n(c.innerHTML)?c.innerHTML:void 0},h=function(e,t,n){let o,a,r,i;if(a=s(e),!(a.length<=0)&&(o=a.get(0),n&&n<a.length&&(o=a.get(n)),o))return r=function(e,t){let n;e?(n=e.parentNode,n&&(n.nodeName.toLowerCase()!==t?r(n,t):i=n)):i=null},r(o,t),i};var m,f;f=(m=window.navigator).appVersion;const g={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:m.cookieEnabled,name:m.appName,uaName:m.appName,OS:m.platform,uaOS:m.platform,userAgent:m.userAgent,appVersion:parseFloat(f,10),uaAppVersion:parseFloat(f,10),version:parseFloat(f,10),uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""};let p,y,w,b;window.attachEvent&&!window.addEventListener?p=function(e,t,n,o){if(!e.attachEvent("on"+t,n))throw"Event "+t+" could not be added!"}:window.addEventListener&&(p=function(e,t,n,o){const a=o||!1;e.addEventListener(t,n,a)}),window.detachEvent&&!window.removeEventListener?y=function(e,t,n,o){if(!e.detachEvent("on"+t,n))throw"Event "+t+" could not be removed!"}:window.removeEventListener&&(y=function(e,t,n,o){e.removeEventListener(t,n,o)});const v=function(e){return window.event?window.event:e},T=function(e){const t=v(e);let n;return t.srcElement?n=t.srcElement:t.target&&(n=t.target),n},N=function(e){const t=v(e);let n=0;return t.pageX?n=t.pageX:t.clientX&&(n=t.clientX),n},M=function(e){const t=v(e);let n=0;return t.pageY?n=t.pageY:t.clientY&&(n=t.clientY),n};document.createEvent&&(w=function(e,t,n){let o=document.createEvent("Event");if(o)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),o.initEvent("Event",n.canBubble,n.cancellable),o},b=function(e){document.dispatchEvent(e)});p(window,"load",(function(){let e,t,n=g.onLoadEventStack;e=n.length;for(let o=0;o<e;o+=1)t=n[o],t&&"function"===(typeof t).toLowerCase()&&t()}),!1);const k=async function(e,t){const n=await fetch(e,t);return await n.text()};let C,E,x,S,A={};const I=!(!t(window.performance)||!t(window.performance.timing));I&&(E=performance.timing,x=E.navigationStart,C=function(){for(let e in E)A[e]=E[e]-x,A[e]<0&&(A[e]=0)},S=function(e,t){C(),A.loadEventEnd<=0?setTimeout((function(){S(e,t)}),100):(A.domContentLoadStart=A.domContentLoadedEventStart,A.domContentLoadTime=A.domContentLoadedEventEnd-A.domContentLoadedEventStart,A.domInteractive=A.domInteractive,A.domLoadStart=A.loadEventStart,A.domLoadTime=A.loadEventEnd-A.domContentLoadedEventStart,A.networkLatency=A.responseEnd-A.fetchStart,A.pageLoadTime=A.loadEventEnd,e&&e(t))});const L={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthShortNames:["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],numberOfDaysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],weekDayShortNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],getFirstOfMonthDayOfWeek:function(e){let t,n=e?new Date(e.getTime()):new Date;return n.setDate(1),t=n.getDay(),t},getDaysInMonth:function(e){const t=e?new Date(e.getTime()):new Date,n=t.getMonth(),o=t.getFullYear();return 1===n?o%4==0?o%400==0?29:o%100==0?28:29:28:L.numberOfDaysInMonth[n]},setFullDate:function(e,t,n){return new Date(n,e,t)},getAMPM:function(e){return e.getHours()>11?" PM":" AM"}},D=L,{weekDayShortNames:B,monthShortNames:W}=D;function O(e){const t=B[e.getDay()],n=W[e.getMonth()];return"".concat(t,", ").concat(n," ").concat(e.getDate(),", ").concat(e.getFullYear())}function P(){const e=new Date,n=O(e);let o="<li>Today is ".concat(n,".</li>");const a=function(){if(t(document.lastModified)&&document.lastModified.length>0){const e=Date.parse(document.lastModified),t=new Date;return t.setTime(e),O(t)}return""}();return a.length>0&&(o+="<li>Last modified on ".concat(a,".</li>")),o+="<li>Copyright ".concat(e.getFullYear(),".</li>"),o}function H(){let e=0;for(let t=0;t<arguments.length;t+=1)e+=+arguments[t];return e}function F(e,t){return+e-+t}function V(){let e=1;for(let t=0;t<arguments.length;t+=1){e=+e*+arguments[t]}return e}function j(e,t){return+e/+t}function R(e){return Math.pow(e,2)}function X(e){return Math.pow(e,3)}function q(e,t,n,o){let a=F(n,e),r=F(o,t),i=H(R(a),R(r));return Math.sqrt(i)}function _(e,t,n,o){return H(e,t,n,o)}const Y=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function z(e,t){return t.toString(e).toUpperCase()}function J(e,t,n){const o=K(n),a=V(e,Math.cos(o)),r=V(t,Math.sin(o));return{x:Math.round(a),y:Math.round(r)}}function G(e,t){const n=K(t),o=V(e,Math.cos(n)),a=V(e,Math.sin(n));return{x:Math.round(o),y:Math.round(a)}}function U(e,t){return{x:Math.floor(j(e,2)),y:Math.floor(j(t,2))}}function K(e){return e*Math.PI/180}const $={add:H,subtract:F,multiply:V,divide:j,square:R,cube:X,computeLineLength:q,computePerimeter:function(e,t,n,o,a,r,i,s){return _(q(e,t,n,o),q(n,o,a,r),q(a,r,i,s),q(i,s,e,t))},computePerimeterByLength:_,computePerimeterOfSquare:function(e){return V(e,4)},areaOfTriangle:function(e,t){return V(e,t,.5)},areaOfTrapizoid:function(e,t,n){let o,a;return o=H(t,n),a=j(o,2),V(e,a)},pythagorean:function(e,t){return Math.sqrt(R(e)+R(t))},average:function(){let e=0;return Object.keys(arguments).forEach((t=>{e=H(e,arguments[t])})),j(e,arguments.length)},areaOfCircle:function(e){return V(Math.PI,R(e))},circumferenceOfACircle:function(e){return V(2,Math.PI,e)},surfaceAreaCone:function(e,t){let n=Math.sqrt(V(Math.PI,R(e))),o=H(R(e),R(t));return H(n,V(e,Math.PI,o))},volumeCone:function(e,t){return V(1/3,Math.PI,R(e),t)},surfaceAreaCylinder:function(e,t){return H(V(2,Math.PI,R(e)),V(2,Math.PI,e,t))},volumeCylinder:function(e,t){return V(Math.PI,R(e),t)},surfaceAreaSphere:function(e){return V(4,Math.PI,R(e))},volumeSphere:function(e){return V(4/3,Math.PI,X(e))},inverse:function(e){return V(-1,e)},oneOver:function(e){return j(1,e)},factorial:function e(t){return+t<=1?1:V(t,e(+t-1))},convertFromBaseTenToBaseX:z,convertFromBaseXToBaseTen:function(e,t){let n=0,o=1;function a(e){let t="";for(let n=0,o=Y.length;n<o;n+=1)if(Y[n]===e){t=n;break}return t}for(;o<=t.length;){let r=Math.pow(e,F(o,1)),i=F(t.length,o);n=H(n,V(a(t.charAt(i)),r)),o++}return n},getEllipsePoint:J,getEllipsePoints:function(e,t){const n=[];for(let o=0;o<=360;o++){const a=J(e,t,o);n.push(a)}return n},getCirclePoint:G,getCirclePoints:function(e){const t=[];for(let n=0;n<=360;n++){const o=G(e,n);t.push(o)}return t},distanceBetweenCirclesCenters:function(e,t,n,o){const a=R(F(e,n)),r=R(F(t,o));return Math.sqrt(H(a,r))},getRectangleCenter:U,getRectangleCorner:function(e,t){const n=U(e,t),o=Math.ceil(j(n.x,2)),a=Math.ceil(j(n.y,2));return o<a?o:a},degreesToRadians:K,radiansToDegrees:function(e){return 180*e/Math.PI},generateGUID:function(){const e=z(16,1e6*(new Date).getTime());let t="";for(let n=0,o=e.length;n<o;n+=1)t+=e[n]<<1;t=e+z(16,t);let n="";for(let e=0,o=t.length;e<o;e+=1)n+=t[e],e>0&&e%5==0&&e%10!=0&&(n+="-"),e>0&&e%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}},Q=$;class Z{constuctor(){this.clockId="clockID",this.setIntervalReturnCode="",this.updateInterval=1e3}}Z.prototype.runClock=function(){throw"Override this function"},Z.prototype.startClock=function(){const e=this;this.setIntervalReturnCode=window.setInterval((function(){e.runClock()}),this.updateInterval)},Z.prototype.stopClock=function(){clearTimeout(this.setIntervalReturnCode)},Z.prototype.setId=function(e){this.clockId=e};class ee extends Z{constructor(){super(),this.clockText="Time: ",this.showSeconds=!0}}ee.prototype.runClock=function(){if(!document.getElementById)return!1;const e=function(e){let t=e;return e<10&&(t="0"+e),t},t=document.getElementById(this.clockId);return!!t&&(t.innerHTML=this.clockText+function(t){const n=new Date;let o=n.getHours()+":"+e(n.getMinutes());return t&&(o+=":"+e(n.getSeconds())),o}(this.showSeconds),!0)};function te(e,t){var n,o,a,r;if(this.date=new Date,this.id=t&&t.id?t.id:"",!e)throw"Could not create Calendar() because no parent object was specifiec!";this.parentID=e,r=this,n={selection:"",year:"",content:null},this.handle=n,this.hasRendered=!1,this.userCallBackFN=null,o=function(){var e,t,n=D.weekDayShortNames.length;for(t='<tr class="header">',e=0;e<n;e+=1)t+="<th>"+D.weekDayShortNames[e]+"</th>";return t+="</tr>"},a=function(e){var t,n,o,a;n=D.getFirstOfMonthDayOfWeek(e),o=D.getDaysInMonth(e),a=e.getDate();var r="<tr>";for(t=0;t<n;t+=1)r+="<td>&nbsp;</td>";for(t=1;t<=o;t+=1)r+=t===a?'<td class="selected">'+t+"</td>":'<td class="unselected">'+t+"</td>",(t+n)%7==0&&(r+="</tr><tr>");return r+="</tr>"};this.render=function(){var e,t,n,i,l,d,h,m,f;if(!(m=(f=s("#"+this.parentID)).get(0)))throw"Could not get parent element to attach calendar to!";if(!this.hasRendered){for(n=this,p(m,"click",(function(e){n.handleClick(e,n)}),!1),e=function(e){var t,n,o;for(o='<table class="navigation calendar"><tr><td>',o+='<td class="ylarrow">&lt;&lt;</td>',o+='<td class="mlarrow">&lt;</td>',o+='<td><form><select class="monthSelection">',t=D.monthNames.length,n=0;n<t;n+=1)o+="<option "+(e.getMonth()===n?'selected="true"':"")+' value="'+n+'">'+D.monthNames[n]+"</option>";return o+="</select></form></td>",o+='<td class="calyear">'+e.getFullYear()+"</td>",o+='<td class="mrarrow">&gt;</td>',o+='<td class="yrarrow">&gt;&gt;</td>',o+="</tr></table>",o+'<div id="'+r.parentID+'content"></div>'}(this.date),u(f,e),(t=s("select",m)).get(0).onchange=function(e){n.handleClick(e,n)},this.handle.selection=t.get(0),i=s("td",m),h=!1,l=0;l<i.length;l+=1)if(c(i.get(l),"calyear")){h=i.get(l);break}this.handle.year=h,this.hasRendered=!0}if(this.handle.selection.selectedIndex=this.date.getMonth(),u(this.handle.year,this.date.getFullYear()),!this.handle.content){if(!(d=s("#"+this.parentID+"content",m)))throw"Could not build calendar frame";this.handle.content=d.get(0)}var g='<table class="calendar">'+o()+a(this.date)+"</table>";u(this.handle.content,g)},this.handleClick=function(e,t){var n,o,a=v(e),r=T(a);if(o=function(e,t,n){var o,a;h(e,"div")&&(c(e,"selected")||c(e,"unselected")?isNaN(e.innerHTML)||(t.date.setDate(e.innerHTML),t.render(),n.userCallBackFN&&n.userCallBackFN(t)):c(e,"ylarrow")?(o=t.date.getFullYear(),t.date.setFullYear(+o-1),t.render()):c(e,"mlarrow")?(a=t.date.getMonth(),t.date.setMonth(+a-1),t.render()):c(e,"mrarrow")?(a=t.date.getMonth(),t.date.setMonth(+a+1),t.render()):c(e,"yrarrow")&&(o=t.date.getFullYear(),t.date.setFullYear(+o+1),t.render()))},"TD"===(n=r.nodeName.toUpperCase())){if(!h(r,"table"))return;o(r,t,this)}else if("SELECT"===n){var i=r.selectedIndex;t.date.setMonth(i),t.render()}}}(class extends Z{constructor(){super(),this.rows=4,this.cols=6}setColumnData(e,t){const n=Q.convertFromBaseTenToBaseX(2,t),o=n.toString().length,a=this.rows-o;for(let t=0;t<a;t+=1){const n=this.clockId+"_row_"+t+"_col_"+e,o=document.getElementById(n);o&&(o.innerHTML="0")}let r=0;for(let t=this.rows-1;t>=a;t-=1){const t=+r+ +a,o=n.substring(r,r+1),i=this.clockId+"_row_"+t+"_col_"+e,s=document.getElementById(i);s&&(s.innerHTML=o),r+=1}}setColumn(e,t){if(t>=10){const n=t.toString();this.setColumnData.call(this,e,n.substring(0,1)),this.setColumnData.call(this,e+1,n.substring(1))}else this.setColumnData.call(this,e,0),this.setColumnData.call(this,e+1,t)}render(){var e,t,n,o=document.getElementById(this.clockId);if(o){for(e="<table>",t=0;t<this.rows;t+=1){for(e+="<tr>",n=0;n<this.cols;n+=1)e+='<td id="'+(this.clockId+"_row_"+t+"_col_"+n)+'"></td>';e+="</tr>"}e+="</table>",o.innerHTML=e}this.runClock()}}).prototype.runClock=function(){const e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds();return this.setColumn(0,t),this.setColumn(2,n),this.setColumn(4,o),!0},te.prototype.getCalendarDate=function(){return D.monthNames[this.date.getMonth()]+" "+this.date.getDate()+", "+this.date.getFullYear()},te.prototype.setCalendarDate=function(e,t,n){this.date=new Date(n,e,t),this.render()};let ne,oe,ae,re;function ie(e){return"#text"===e}function se(e){let t,n,o,a=[];if(e.attributes&&e.attributes.length>0){t=e.attributes.length;for(let r=0;r<t;r+=1)n=e.attributes[r].nodeName,o=e.attributes[r].nodeValue,a[n]=o;return a}return null}function le(e){let t,n,o,a,r,i,s,l,c;if(e.hasChildNodes()){for(t=0,n=e.childNodes.length,o={},a=function(e){let t,n,o=!1,a=[];if(e.hasChildNodes()){t=e.childNodes.length;for(let r=0;r<t;r+=1){if(n=e.childNodes[r].nodeName,a[n]&&!ie(n)){o=!0;break}a[n]=!0}}return o}(e);t<n;)r=e.childNodes[t],i=r.nodeName,s=r.nodeValue,l=se(r),r.hasChildNodes()?(c=le(r),o[i]||(o[i]=a?[]:{}),a?(l&&(c.attributes=l),o[i].push(c)):ie(i)&&o[i]?(o[i]+=s,l&&(o[i].attributes=l)):(o[i]=c,l&&(o[i].attributes=l))):(d=s)&&""!==function(e){return function(e){return e?e.replace(/^\s+/g,""):e}((t=e)?t.replace(/\s+$/g,""):t);var t}(d)&&(ie(i)&&o[i]?o[i]+=s:o[i]=s,l&&(o[i].attributes=l)),t+=1;return o}return i=e.nodeName,s=e.nodeValue,l=se(e),{name:s};var d}function ce(e){let t,n=null,o=e;if(function(){try{return!!DOMParser}catch(e){return!1}}())try{t=new DOMParser,n=t.parseFromString(o,"text/xml")}catch(e){document.implementation&&document.implementation.createDocument&&(n=document.implementation.createDocument("","",o))}return n}function de(e,t){return e.getElementsByTagName(t)[0].childNodes[0].nodeValue}function ue(e){var t=e.getElementsByTagName("skillarea")[0],n="<hr/>";n+='<span class="skill_prof section-heading">',n+=t.getElementsByTagName("title")[0].childNodes[0].nodeValue,n+="</span>",n+='<br /><div id="skills"><ul>';var o=t.getElementsByTagName("skillset");for(let e=0;e<o.length;e++){n+="<li>",n+=o[e].getElementsByTagName("title")[0].childNodes[0].nodeValue+": ";var a=o[e].getElementsByTagName("skill");for(let e=0;e<a.length;e++){var r=a[e].childNodes[0].nodeValue;a[e].getAttribute("level");n+=r,e<a.length-1&&(n+=", ")}n+="</li>"}return n+="</ul></div>"}function he(e){const t=e.getElementsByTagName("misc")[0].getElementsByTagName("misc_exp"),n=t[0],o=t[1];let a='<span class="misc section-heading">';a+=n.getElementsByTagName("name")[0].childNodes[0].nodeValue,a+='</span><br /><div id="misc1"><ul>';let r=Array.from(n.getElementsByTagName("item"));for(let e=0;e<r.length;e++){const t=r[e];if(1===t.childNodes.length)a+="<li>"+t.childNodes[0].nodeValue+"</li>";else{a+="<li>";const e=Array.from(t.childNodes);for(let t=0;t<e.length;t++)if(e[t].length)a+=e[t].nodeValue;else if("url"===e[t].nodeName){var i=e[t].childNodes[0].nodeValue;a+='<a href="'+i+'">'+i+"</a>"}a+="</li>"}}a+="</ul></div>",a+='<span class="misc section-heading">',a+=o.getElementsByTagName("name")[0].childNodes[0].nodeValue,a+='</a></span><br /><div id="misc2"><ul>',r=o.getElementsByTagName("item");for(let e=0;e<r.length;e++)a+="<li>"+r[e].childNodes[0].nodeValue+"</li>";return a+="</ul></div>",a}function me(e){var t='<span class="misc section-heading">EDUCATION</span>';t+='<br /><div id="education">';var n=e.getElementsByTagName("academics"),o=n[0].getElementsByTagName("level")[0].childNodes[0].nodeValue,a=n[0].getElementsByTagName("major")[0].childNodes[0].nodeValue,r=n[0].getElementsByTagName("institution")[0].childNodes[0].nodeValue;n[0].getElementsByTagName("month")[0].childNodes[0].nodeValue,n[0].getElementsByTagName("year")[0].childNodes[0].nodeValue;return t+="<ul><li>"+o+" in "+a+", "+r+".",t+=n[0].getElementsByTagName("para")[0].childNodes[0].nodeValue+"</li></ul></div>"}function fe(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=e.getElementsByTagName("job"),a=(new Date).getFullYear(),r=n.limitYear?a-15:1996;let i='<span class="profexp section-heading">PROFESSIONAL EXPERIENCE</span>';return i+='<br /><div id="profexp"><br />',i+=Array.from(o).filter((e=>{const n=e.cloneNode(!0).getElementsByTagName("year");if(t(n)&&n.length>0){return Array.from(n).filter((e=>+e.innerHTML>r)).length>0}return!0})).map((e=>{const n=e.cloneNode(!0);var o=n.getElementsByTagName("jobtitle")[0].childNodes[0].nodeValue,a=n.getElementsByTagName("company")[0].childNodes[0].nodeValue;if(n.getElementsByTagName("url"))n.getElementsByTagName("company")[0].childNodes[0].nodeValue;var r=n.getElementsByTagName("city")[0].childNodes[0].nodeValue,i=n.getElementsByTagName("state")[0],s=r;t(i)&&i.childNodes.length>0&&(s=r+", "+i.childNodes[0].nodeValue);var l=n.getElementsByTagName("achievement"),c=n.getElementsByTagName("month"),d=n.getElementsByTagName("year"),u="";if(t(c)){u=c[0].childNodes[0].nodeValue+" "+d[0].childNodes[0].nodeValue,u+=" - ";try{u+=c[1].childNodes[0].nodeValue+" "}catch(e){}u+=d[1].childNodes[0].nodeValue}let h="";for(let e=0;e<l.length;e++)h+="<li>",h+=l[e].childNodes[0].nodeValue,h+=".</li>";return'<span class="empmnt">'.concat(o,", ").concat(a,", ").concat(s," (").concat(u,")</span><ul>").concat(h,"</ul>")})).reduce(((e,t)=>e+t)),i+="</div>",i}function ge(e,n,o,a){const r={canvas:null,ctx:null,width:0,height:0};let i;return r.canvas=d("canvas",n,{id:e}),r.canvas?(o&&(r.canvas.width=o),a&&(r.canvas.height=a),r.width=r.canvas.width,r.height=r.canvas.height,t(r.canvas.getContext)&&(r.ctx=r.canvas.getContext("2d"),function(e){function t(e,t){return Math.sqrt(R(e)-R(t))}e.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},e.line=function(e,t,n,o,a){let r,i,s,l,c,d=0,u=0;r=this.ctx,a&&(l=a.color,c=a.rotateAngle),r.save(),r.beginPath(),c&&(i=Math.abs(e-n)/2,s=Math.abs(t-o)/2,d=e+i,u=t+s,r.translate(d,u),r.rotate(K(c))),r.moveTo(e-d,t-u),r.lineTo(n-d,o-u),r.fillStyle=l||"black",r.fill(),r.strokeStyle=l||"black",r.stroke(),r.restore()},e.circle=function(e,t,n,o){let a,r,i,s;r=this.ctx,o&&(i=o.color,s=o.fillStrokeClear),r.beginPath(),r.moveTo(e+n,t),r.arc(e,t,n,0,2*Math.PI,!0),a=s||"stroke",r[a+"Style"]=i||"black",r[a]()},e.halfCircle=function(e,t,n,o){let a,r,i,s,l,c,d=0,u=0;r=this.ctx,o&&(i=o.color,s=o.rotateAngle,c=o.openTop,l=o.fillStrokeClear),r.save(),r.beginPath(),s&&(d=e,u=t,r.translate(d,u),r.rotate(K(s))),r.moveTo(e-n-d,t-u),r.arc(e-d,t-u,n,Math.PI,2*Math.PI,!0),c||r.lineTo(e-n-d,t-u),r.closePath(),a=l||"stroke",r[a+"Style"]=i||"black",r[a](),r.restore()},e.oval=function(e,t,n,o,a){let r,i,s,l,c,d=0,u=0,h=.5522848,m=e-n/2,f=t-o/2,g=n/2*h,p=o/2*h,y=m+n,w=f+o,b=m+n/2,v=f+o/2;i=this.ctx,i.save(),a&&(s=a.color,l=a.fillStrokeClear,c=a.rotateAngle),i.beginPath(),c&&(d=b,u=v,i.translate(d,u),i.rotate(K(c))),i.moveTo(m-d,v-u),i.bezierCurveTo(m-d,v-p-u,b-g-d,f-u,b-d,f-u),i.bezierCurveTo(b+g-d,f-u,y-d,v-p-u,y-d,v-u),i.bezierCurveTo(y-d,v+p-u,b+g-d,w-u,b-d,w-u),i.bezierCurveTo(b-g-d,w-u,m-d,v+p-u,m-d,v-u),i.restore(),r=l||"stroke",i[r+"Style"]=s||"black",i[r]()},e.rectangle=function(e,t,n,o,a){let r,i,s,l,c,d=0,u=0;i=this.ctx,a&&(s=a.color,l=a.rotateAngle,c=a.fillStrokeClear),i.save(),i.beginPath(),l&&(d=Math.round(e+n/2),u=Math.round(t+o/2),i.translate(d,u),i.rotate(K(l))),r=c||"stroke",i[r+"Style"]=s||"black",i[r+"Rect"](e-d,t-u,n,o),i[r](),i.restore()},e.square=function(e,t,n,o){this.rectangle(e,t,n,n,o)},e.triangle=function(e,t,n,o,a,r,i){let s,l,c,d,u,h=0,m=0;s=this.ctx,i&&(c=i.color,d=i.rotateAngle,u=i.fillStrokeClear),s.save(),s.beginPath(),d&&(h=(e+n+a)/3,m=(t+o+r)/3,s.translate(h,m),s.rotate(K(d))),l=u||"stroke",s.moveTo(e-h,t-m),s.lineTo(n-h,o-m),s.lineTo(a-h,r-m),s.lineTo(e-h,t-m),s.closePath(),s[l+"Style"]=c||"black",s[l](),s.restore()},e.equilateralTriangle=function(e,n,o,a){let r,i,s;a&&(s=a.orientation),i=o/2,r=t(o,i),"down"===s?this.triangle(e,n,e+o,n,e+i,n+r,a):this.triangle(e,n,e+o,n,e+i,n-r,a)},e.hexagon=function(e,n,o,a){let r,i,s,l,c,d,u,h=0,m=0;r=this.ctx,a&&(d=a.color,u=a.rotateAngle,c=a.fillStrokeClear),s=o/2,l=c||"stroke",i=t(o,s),r.save(),r.beginPath(),u&&(h=e,m=n,r.translate(h,m),r.rotate(K(u))),r.moveTo(e+s-o-h,n-i-m),r.lineTo(e+s-h,n-i-m),r.lineTo(e+o-h,n-m),r.lineTo(e+s-h,n+i-m),r.lineTo(e+s-o-h,n+i-m),r.lineTo(e-o-h,n-m),r.lineTo(e-o+s-h,n-i-m),r.closePath(),r[l+"Style"]=d||"black",r[l](),r.restore()},e.octagon=function(e,t,n,o){let a,r,i,s,l,c,d,u=0,h=0;o&&(c=o.color,d=o.rotateAngle,l=o.fillStrokeClear),s=l||"stroke",i=n/2,r=Math.sqrt(Math.pow(n,2)+Math.pow(i,2)),a=this.ctx,a.save(),d&&(u=e,h=t,a.translate(u,h),a.rotate(K(d))),a.beginPath(),a.moveTo(e-i-u,t-r-h),a.lineTo(e+i-u,t-r-h),a.lineTo(e+r-u,t-i-h),a.lineTo(e+r-u,t+i-h),a.lineTo(e+i-u,t+r-h),a.lineTo(e-i-u,t+r-h),a.lineTo(e-r-u,t+i-h),a.lineTo(e-r-u,t-i-h),a.lineTo(e-i-u,t-r-h),a.closePath(),a[s+"Style"]=c||"black",a[s](),a.restore()},e.setBackgroundColor=function(e){this.rectangle(0,0,this.width,this.height,{color:e||"white",fillStrokeClear:"fill"})}}(r),i=r),i):null}function pe(e){return t(Worker)?new Worker(e):void 0}let ye=!1;function we(e,t){requestAnimationFrame((()=>{if(e.data.stars){const n=e.data,o=n.stars,a=n.planets,r=Object.keys(o).map((e=>o[e])).reduce(((e,t)=>e.concat(t))),i=Object.keys(a).map((e=>a[e])).reduce(((e,t)=>e.concat(t)));Array.from(r).concat(Array.from(i)).forEach((e=>{t.circle(e.x,e.y,e.radius,{color:e.color,fillStrokeClear:"fill"})})),I&&!ye&&(performance.measure("binary star system render"),ye=!0)}}))}function be(){ne&&(oe.setBackgroundColor("black"),ne.onmessage=e=>{we(e,oe)},ne.postMessage({setWidthHeight:[oe.width,oe.height]})),ae&&(re.setBackgroundColor("black"),ae.onmessage=e=>{we(e,re)},ae.postMessage({setWidthHeight:[re.width,re.height]}))}function ve(){let e=!1;return"undefined"!=typeof XMLHttpRequest&&(e=new XMLHttpRequest),e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}function Te(){this.index=0,this.list={}}Te.prototype.add=function(e,t){this.list[e]=t,this.index++},Te.prototype.remove=function(e){this.list[e]=void 0,this.index--},Te.prototype.get=function(e){return this.list[e]},Te.prototype.clear=function(){for(let e in this.list)e&&(this.list[e]=void 0);this.index=0};let Ne,Me=new Te;function ke(e,t,n,o,a){let r,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s={};for(r in s.xmlhttp=ve(),s.index=Me.index,s.xmlhttp.open(e,n,a),i)s.xmlhttp.setRequestHeader(r,i[r]);return s.xmlhttp.onreadystatechange=function(){t.call(s),4===s.xmlhttp.readyState&&Me.get("AJAX_"+s.index)},null===o&&(o=""),s.xmlhttp.send(o),Me.add("AJAX_"+s.index,{data:s}),s}let Ce={};function Ee(){const e=s("#fishdataContentArea span.selection-tied"),t=s("#fish_tabs").get(0);let n,o,a,r;for(let t=0,n=e.length;t<n;t++)e.get(t).style.display="none";n=t.selectedIndex,a=t[n],o=a.value,r=s("#"+o).get(0),r.style.display="block"}function xe(){if(4===this.xmlhttp.readyState){const e=ce(this.xmlhttp.responseText);Ce=le(e),function(){const e=s("#fish_tabs").get(0),t=s("#fishdataContentArea").get(0);e.innerHTML="";let n=Ce.tropical_fish.fish_data;for(let o=0,a=n.length;o<a;o+=1){const a=n[o].name["#text"],r=n[o].comment["#text"],i=d("option",e);i.value=a.toLowerCase().replace(/\ /g,"-"),i.text=a;const s=d("span",t,{id:a.toLowerCase().replace(/\ /g,"-"),innerHTML:r});l(s,"selection-tied"),o>0&&(s.style.display="none")}p(e,"change",Ee)}(),I&&performance.measure("fish content render")}}function Se(){if(Ne||(Ne=t(Worker)?new Worker("/js/animatedFish.js"):void 0),Ne){const t=s("#welcome-content").get(0),n=s(".WebWindowArea",t).get(0);Array.from(n.childNodes).forEach((e=>{"div"===e.nodeName.toLowerCase()&&(e.style.display="none")}));const o=d("div",n,{id:"animated-fish"});o.style.display="block",k("frags/fish-svg.frag").then((e=>{o.innerHTML="".concat("&nbsp;&nbsp;&nbsp;I have kept tropical fish as pets for years.\nHere are some of my experiences keeping various types of fish. If you are looking for pictures go here.\nI am only documenting the fish that have mated in my tanks.\nThis page does not go in depth on any species and just touches the surface.","<br>").concat(e);const t=s("ellipse",o),n=t[0].attributes.ry,a=t[1].attributes.ry;Ne.onmessage=e=>{e&&e.data&&requestAnimationFrame((()=>{n.value=e.data.mouth,a.value=e.data.omouth}))},Ne.postMessage({start:"start"}),I&&performance.measure("animated fish render")}));const a=s(".WebWindowArea",document.getElementById("main-window")).get(0),r=d("div",a,{id:"fins-info-section"});r.style.display="block",l(r,"left-align"),r.innerHTML='<select class="tab_data" id="fish_tabs"></select><div id="fishdataContentArea" class="fishdata"></div>',ke("GET",xe,"/data/tropical_fish.xml"+(e?"?"+e:""),null,!0)}var e}function Ae(){let e=this,t=function(t,n){let o,a,r=e;return o=v(t),a=T(o),r.moving&&r.dragableCoverMask.id===a.id&&(r.posX=N(),r.posY=M(),r[n].style.left=r.posX-r.offsetX+"px",r[n].style.top=r.posY-r.offsetY+"px"),r},n=function(){let e;window.getSelection?(e=window.getSelection(),e&&e.empty?e.empty():e&&e.removeAllRanges&&e.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()};const o=function(t,n,o){const a=s("#"+n).get(0),r=s("#"+(o||n)).get(0);a&&r&&(t?(e.dragableObjects[r.id]=a,p(r,"mousedown",e.mousedown,!1)):(e.dragableObjects[r.id]=null,y(r,"mousedown",e.mousedown,!1)))};return e.dragableObjects=[],e.initialize=function(){const t=e;t.isInitialized||(t.dragableCoverMask=s("#-dragndrop-enabled-x").get(0),t.dragableCoverMask||(t.dragableCoverMask=d("div",document.body),t.dragableCoverMask.id="-dragndrop-enabled-x"),t.dragableCoverMask.style.display="none",p(document,"mousemove",t.mousemove,!1),p(document,"mouseup",t.mouseup,!1),t.isInitialized=!0)},e.findDragableParent=function(t){const n=e;if(t&&t.nodeName&&"body"!==t.nodeName.toLowerCase())return n.dragableObjects[t.id]?t:n.findDragableParent(t.parentNode)},e.mousemove=function(e){return t(e,"dragableCoverMask"),n(),!1},e.mouseup=function(e){const o=t(e,"currentDragObject");o.dragableCoverMask.style.display="none",o.currentDragObject=null,o.moving=!1,n()},e.mousedown=function(t){const n=e,o=v(t);let a=T(o);if(a=n.findDragableParent(a),!n.dragableObjects[a.id])return n.moving=!1,!1;n.currentDragObject=n.dragableObjects[a.id],document.body.appendChild(n.currentDragObject),n.posX=N(),n.posY=M(),n.offsetX=n.posX-n.currentDragObject.offsetLeft,n.offsetY=n.posY-n.currentDragObject.offsetTop;let r=n.dragableCoverMask;return r.style.position="absolute",r.style.display="block",r.style.border="2px solid black",r.style.left=n.currentDragObject.offsetLeft+"px",r.style.top=n.currentDragObject.offsetTop+"px",r.style.width=n.currentDragObject.offsetWidth+"px",r.style.height=n.currentDragObject.offsetHeight+"px",r.style.zIndex=1e5,n.moving=!0,!1},e.setDragable=function(e,t){o(!0,e,t)},e.setNONDragable=function(e,t){o(!1,e,t)},e}function Ie(e,t,n,o,a,r){var i,l;const c=s("#"+r).get(0);c?(this.mainWindow=c,this.titleBar=s(".WebWindowTitle",this.mainWindow).get(0),this.titleBar.id="WebWindowTitle"+r,this.windowArea=s(".WebWindowArea",this.mainWindow).get(0),this.windowArea.id="WebWindowArea"+r,this.footerArea=s(".WebWindowFooter",this.mainWindow).get(0),this.footerArea.id="WebWindowFooter"+r):(this.mainWindow=d("div",document.body,{className:"WebWindowMain",id:r}),this.mainWindow.style.left=t+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=o+"px",this.mainWindow.style.height=a+"px",this.titleBar=d("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+r}),this.windowArea=d("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+r}),this.footerArea=d("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+r})),d("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=e;let u={className:"WebWindowButtonBox"};var h=d("span",this.titleBar,u);u={name:"WW"+r,onsubmit:"return false;"};var m=d("form",h,u);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1},i=function(e,t,n,o,a){let r,i,s;for(s=d("button",e,{className:"WebWindowButton",name:n,id:n+t}),s.innerHTML=o,s.onclick=a,i=e.innerHTML,i=i.toLowerCase(),r=new RegExp("button class");i.match(r);)i=i.replace(r,'button type="button" class')},i(m,r,"rollup","-",this.minimize),i(m,r,"rolldown","o",this.maximize),i(m,r,"destroy","X",this.destroy),this.windowArea.style.width=o+"px",this.titleBar.style.width=o+"px",this.footerArea.style.width=o+"px",l=a-this.titleBar.offsetHeight-this.footerArea.offsetHeight,this.windowArea.style.height=l+"px",this.dragndrop=new Ae}Ie.prototype.popToFront=function(e){var t,n;n=v(e),t=T(n),h(t,"div.WebWindowMain")},Ie.prototype.enableDrag=function(){var e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),p(this.mainWindow,"mousedown",e,!1)},Ie.prototype.disableDrag=function(){var e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),y(this.mainWindow,"mousedown",e,!1)},Ie.prototype.setTitle=function(e){var t=this.titleBar.getElementsByTagName("span");t&&t.length>0&&(t[0].innerHTML=e)},Ie.prototype.setContent=function(e){u(this.windowArea,e)};const Le=function(){var e,t=window,n=t.document;return(e=t.navigator).appVersion,g.isIE=!1,g.capabilitiesDetected=!0,g.isIE?(g.name="Internet Explorer",g.hasJscript=!0,document.compatMode&&(g.version=6),window.XMLHttpRequest&&(g.version=7),document.querySelector&&(g.version=8),document.addEventListener&&document.getElementsByClassName&&(g.version=9),window.atob&&(g.version=10),crypto&&crypto.getRandomValues&&(g.version=11),g.docMode=document.documentMode?document.documentMode:g.version,t.ActiveXObject&&(g.hasActiveX=!0)):n.layers?(g.name="Netscape Navigator",g.version=4):t.opera||n.all?(g.name="Opera",g.version=4,t.opera&&(g.version=5,(t.print&&t.opera.buildNumber||n.getElementsByTagName)&&(g.version=6),n.readyState&&(g.version=7),n.implementation&&n.implementation.createDocument&&(g.version=8),n.createEntityReference&&(g.version=9),n.querySelectorAll&&(g.version=10),"undefined"!=typeof WebSocket&&(g.version=11),window.document.hasOwnProperty("on drag")&&(g.version=12))):n.getElementById&&n.childNodes&&!e.taintEnabled&&e.vendor?"Apple Computer, Inc."===e.vendor?g.name="Safari":"KDE"===e.vendor.toUpperCase()?g.name="Konqueror":t.chrome||-1!==e.vendor.indexOf("Google")?g.name="Chrome":g.name=e.vendor:e.product&&(g.name="Gecko",e.buildID&&(g.buildID=e.buildID),"Gecko"!==e.product&&(g.name="Gecko / "+e.product)),n.getElementById&&n.implementation&&(g.isDOMCapable=!0),n.documentElement&&("ontouchstart"in n.documentElement||"touchstart"in n.documentElement)&&(g.touchEnabled=!0),g.browserName=function(){var e,t;let n=[{bProp:window.chrome,name:"chrome"},{bProp:window.safari,name:"safari"},{bProp:window.opera,name:"opera"},{bProp:window.mozInnerScreenX,name:"firefox"},{bProp:document.all,name:"ie"}];for(e in n)if(void 0!==n[e].bProp){t=n[e].name;break}return t}(),g}();let De,Be,We,Oe={},Pe=!1,He='<br><div class="home-content">';async function Fe(){const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=ce(e),o=(le(n),de(n,"url"),fe(n,t)),a=me(n),r=he(n),i=ue(n);return"".concat('<div style="text-align:center; font-weight: bold;">header not displayed for privacy</div>').concat(i).concat(o).concat(a).concat(r)}(await k("/data/resume_data.xml"),{limitYear:!0}),t=d("div",De.windowArea,{id:"resume-html"});u(t,e),l(t,"left-align"),t.style.display="block";s(".WebWindowTitleText",De.titleBar).get(0).innerHTML="Resume";s(".WebWindowTitleText",Be.titleBar).get(0).innerHTML="Welcome",I&&performance.measure("resume render")}function Ve(){if(Pe){s("#calendar-container").get(0).style.display="none",Pe=!1}else{const e=s("footer").get(0),t=window.getComputedStyle(e).top,n=document.querySelector("body"),o=d("div",n,{id:"calendar-container"});o.style.display="block";new te(o.id).render();const a=window.getComputedStyle(o).height,r=parseInt(t)-parseInt(a)-12;o.style.top=r+"px",o.style.position="fixed",Pe=!0,I&&performance.measure("calendar render")}}Le.capabilitiesDetected||(He+="WARNING: Your browser version information was detected from useragent string only or not at all! ",He+="<br />If you have problems viewing this site, please get a supported browser."),We="Detected Name = "+Le.name+" "+Le.version+".",We+="<br />Stated OS = "+Le.OS+".",We+="<br />Stated Name - Version = "+Le.name+" - "+Le.appVersion,We+="<br />Spoofable OS = "+Le.uaOS+(Le.uaOSVersion?"("+Le.uaOSVersion+")":"")+".",We+="<br />Spoofable Name - Version = "+Le.uaName+" - "+Le.uaAppVersion,We+="<br />User Agent String = "+Le.userAgent+".</div>";let je=!1;async function Re(){const e=await k("/frags/software.frag"),t=d("div",De.windowArea,{id:"sofware-html"});u(t,e),l(t,"left-align"),t.style.display="block";s(".WebWindowTitleText",De.titleBar).get(0).innerHTML="Programs";const n=d("div",Be.windowArea,{id:"software-links"});n.style.display="block",n.innerHTML='In my spare time I work on the projects on this page. Some of them,\n    I consider to be completed, like TkNotePad.\n    These are are all released as "Open Source".\n    These programs are provided as is and with no warranty expressed or implied!\n        While I have tested them, I am not responsible\n    for\n    anything that might happen\n    if you use them.\n    They just might not work the way you\n    think that they should! < br / >\n        Please notify me\n    if you intend to include any of this software as a part of any distribution or mirror site.Thank you!',I&&performance.measure("software render"),je=!0}var Xe;Xe=async function(){const e=new ee;e.setId("digiclock"),e.startClock(),function(e){let t;if(e&&(t=d("ul",e),t&&(t.innerHTML=P())),void 0===document.querySelectorAll){let e=window.location.pathname;e=e.substring(e.lastIndexOf("/")),-1!==e.indexOf("fish_pictures")?window.location.href="../":-1===e.indexOf("index.html")&&"/"!==e&&(window.location.href="index.html")}}(document.querySelectorAll("footer")[0]),function(){const e=document.getElementById("main-window"),t=window.getComputedStyle(e);Oe=t,De=new Ie("Home - Not Mine Though",Oe.offsetLeft,Oe.offsetTop,Oe.offsetWidth,Oe.offsetHeight,"main-window");const n=document.getElementById("welcome-content"),o=window.getComputedStyle(n);Be=new Ie("Welcome",o.offsetLeft,o.offsetTop,o.offsetWidth,o.offsetHeight,"welcome-content")}();const t=s("footer ul li:first-child");p(t.get(0),"click",Ve),ne=pe("/js/starSystem.js"),oe=ge("star-system","canvas-container",350,350),ae=pe("/js/triStarSystem.js"),re=ge("tristar-system","canvas-container",350,350),oe.setBackgroundColor("black"),re.setBackgroundColor("black"),be(),await async function(){const e=await k("/frags/nav.frag");document.getElementById("menu").innerHTML=e.replace(/\n/g,"")}();const n=await async function(){return await k("/frags/index.frag")}();Be.windowArea.innerHTML=n+He+We;const o=s(".url-wrapper select").get(0);p(o,"change",(e=>{const t=v(e),n=T(t),o=n.options[n.selectedIndex].text.toLowerCase(),a=s(".WebWindowTitleText",De.titleBar).get(0);a.innerHTML="Home - Not Mine Though";const r=s(".WebWindowTitleText",Be.titleBar).get(0);switch(r.innerHTML="Welcome",Array.from(De.windowArea.childNodes).forEach((e=>{"div"===e.nodeName.toLowerCase()&&(e.style.display="none")})),Array.from(Be.windowArea.childNodes).forEach((e=>{"div"===e.nodeName.toLowerCase()&&(e.style.display="none")})),ne&&ne.postMessage({stop:"stop"}),ae&&ae.postMessage({stop:"stop"}),Ne&&Ne.postMessage({stop:"stop"}),o){case"resume":Fe(),Array.from(Be.windowArea.childNodes).forEach((e=>{"div"===e.nodeName.toLowerCase()&&c(e,"home-content")&&(e.style.display="block")}));break;case"fish":a.innerHTML="Fish Information",r.innerHTML="Animated Fish",Se();break;case"software":a.innerHTML="Software",r.innerHTML="Local Pages",Re();break;default:Array.from(Be.windowArea.childNodes).forEach((e=>{"div"===e.nodeName.toLowerCase()&&c(e,"home-content")&&(e.style.display="block")})),s("#canvas-container").get(0).style.display="block",be()}}))},g.onLoadEventStack.push(Xe)})();