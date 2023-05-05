(()=>{"use strict";const e=window.navigator,t=e.userAgent.replace(/\(|\)/g,"").split(" ").filter((e=>{const t=e.toLowerCase();return t.indexOf("/")>-1&&!t.startsWith("gecko")&&!t.startsWith("safari")&&!t.startsWith("applewebkit")&&!t.startsWith("mozilla")})),o=t[t.length-1],n=parseFloat(o.split("/")[1]),r=o.split("/")[0],i="version"===r.toLowerCase()?"Safari":r,a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:e.cookieEnabled,name:i,uaName:i,OS:e.platform,uaOS:e.platform,userAgent:e.userAgent,appVersion:n,uaAppVersion:n,version:n,uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.attachEvent&&!window.addEventListener){const n=e.attachEvent("on"+t,o);if(!n)throw"Event "+t+" could not be added!";return n}return e.addEventListener(t,o,n)},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.detachEvent&&!window.removeEventListener){const n=e.detachEvent("on"+t,o);if(!n)throw"Event "+t+" could not be removed!";return n}return e.removeEventListener(t,o,n)},c=e=>window.event?window.event:e,d=e=>{const t=c(e);let o;return t.srcElement?o=t.srcElement:t.target&&(o=t.target),o},h=e=>{const t=c(e);let o=0;return t.pageX?o=t.pageX:t.clientX&&(o=t.clientX),o},u=e=>{const t=c(e);let o=0;return t.pageY?o=t.pageY:t.clientY&&(o=t.clientY),o};let f,g;document.createEvent&&(f=(e,t,o)=>{let n=document.createEvent("Event");if(n)return o||(o={}),o.canBubble||(o.canBubble=!0),o.cancellable||(o.cancellable=!0),n.initEvent("Event",o.canBubble,o.cancellable),n},g=function(e){document.dispatchEvent(e)});function w(e,t,o){return o instanceof e||(typeof o).toLowerCase()===t}function m(e){return w(String,"string",e)}function p(e){return w(Object,"object",e)}function v(e){let t=e.nodeName;return t=t||"","textarea"===t.toLowerCase()}function b(e){let t=typeof e,o=e.nodeName;return o=o||"","input"===o.toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}s(window,"load",(function(){let e,t,o=a.onLoadEventStack;e=o.length;for(let n=0;n<e;n+=1)t=o[n],t&&"function"===(typeof t).toLowerCase()&&t()}),!1);const T=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!m(e)&&p(e)&&e.hasOwnProperty("objectName")&&"selector"===e.objectName)return e;let o,n=e;e instanceof HTMLElement&&(e.id?n="#"+e.id:(n=e.nodeName.toLowerCase(),e.className.length>0&&(n+="."+e.className.split(" ").join(" .")))),T.test(n)?(o=t.querySelector(n),o=o?[o]:[]):(o=t.querySelectorAll(n),o=o&&o.length>0?o:[]);const r={length:o.length,objectName:"selector",get:function(e){return o[e]},toArray:function(){return Array.from(o)},each:function(e){r.toArray().forEach(e)}};for(let e=0;e<r.length;e++)r[e]=o[e];return r}const M=function(e,t){-1===e?.className?.indexOf(t)&&(e.className+=" "+t)},C=function(e,t,o){let n,r=document.body;if(t&&m(t)?r=document.getElementById(t):t&&(r=t),!e)return r;if(o&&o.id&&(n=document.getElementById(o.id)),n||(n=document.createElement(e)),!n)return n;if(r.appendChild(n),n&&o){let e;for(e in o)try{n[e]=o[e]}catch(e){}o.className&&M(n,o.className)}return n},A=function(e,t,o){let n,r,i=y(e);if(!(i.length<=0)&&(o||(o=0),!(o>=i.length)&&i[o]))return n=i.get(o),r=new String(n.tagName).toLowerCase(),(t||""===t)&&function(e,t){m(e)||w(Number,"number",e)?b(r)||b(t)||v(t)?t.value=e:t.innerHTML=e:t&&p(e)&&t.appendChild(e)}(t,n),b(r)||b(n)||v(n)?n.value:m(n.innerHTML)?n.innerHTML:void 0},W=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).getElementById(e)},x=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e)};function S(){const e=this,t=(t,o)=>{let n,r,i=e;return n=c(t),r=d(n),i.moving&&i.dragableCoverMask.id===r.id&&(i.posX=h(),i.posY=u(),i[o].style.left=i.posX-i.offsetX+"px",i[o].style.top=i.posY-i.offsetY+"px"),i},o=()=>{let e;window.getSelection?(e=window.getSelection(),e&&e.empty?e.empty():e&&e.removeAllRanges&&e.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()},n=(t,o,n)=>{const r=W(o),i=W(n||o);r&&i&&(t?(e.dragableObjects[i.id]=r,s(i,"mousedown",e.mousedown,!1)):(e.dragableObjects[i.id]=null,l(i,"mousedown",e.mousedown,!1)))};return this.dragableObjects=[],this.initialize=()=>{const t=e;t.isInitialized||(t.dragableCoverMask=W("-dragndrop-enabled-x"),t.dragableCoverMask||(t.dragableCoverMask=C("div",document.body),t.dragableCoverMask.id="-dragndrop-enabled-x"),t.dragableCoverMask.style.display="none",s(document,"mousemove",t.mousemove,!1),s(document,"mouseup",t.mouseup,!1),t.isInitialized=!0)},this.findDragableParent=t=>{const o=e;if(t&&t.nodeName&&"body"!==t.nodeName.toLowerCase())return o.dragableObjects[t.id]?t:o.findDragableParent(t.parentNode)},this.mousemove=e=>(t(e,"dragableCoverMask"),o(),!1),this.mouseup=e=>{const n=t(e,"currentDragObject");n.dragableCoverMask.style.display="none",n.currentDragObject=null,n.moving=!1,o()},this.mousedown=function(t){const o=e,n=c(t);let r=d(n);if(r=o.findDragableParent(r),!o.dragableObjects[r.id])return o.moving=!1,!1;o.currentDragObject=o.dragableObjects[r.id],document.body.appendChild(o.currentDragObject),o.posX=h(),o.posY=u(),o.offsetX=o.posX-o.currentDragObject.offsetLeft,o.offsetY=o.posY-o.currentDragObject.offsetTop;let i=o.dragableCoverMask;return i.style.position="absolute",i.style.display="block",i.style.border="2px solid black",i.style.left=o.currentDragObject.offsetLeft+"px",i.style.top=o.currentDragObject.offsetTop+"px",i.style.width=o.currentDragObject.offsetWidth+"px",i.style.height=o.currentDragObject.offsetHeight+"px",i.style.zIndex=1e5,o.moving=!0,!1},this.setDragable=function(e,t){n(!0,e,t)},this.setNONDragable=function(e,t){n(!1,e,t)},this}function k(e,t,o,n,r,i){const a=W(i);a?(this.mainWindow=a,this.titleBar=x(".WebWindowTitle",this.mainWindow)[0],this.titleBar.id="WebWindowTitle"+i,this.windowArea=x(".WebWindowArea",this.mainWindow)[0],this.windowArea.id="WebWindowArea"+i,this.footerArea=x(".WebWindowFooter",this.mainWindow)[0],this.footerArea.id="WebWindowFooter"+i):(this.mainWindow=C("div",document.body,{className:"WebWindowMain",id:i}),this.mainWindow.style.left=t+"px",this.mainWindow.style.top=o+"px",this.mainWindow.style.width=n+"px",this.mainWindow.style.height=r+"px",this.titleBar=C("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+i}),this.windowArea=C("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+i}),this.footerArea=C("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+i}));C("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=e;let s={className:"WebWindowButtonBox"};const l=C("span",this.titleBar,s);s={name:"WW"+i,onsubmit:"return false;"};const c=C("form",l,s);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1};const d=(e,t,o,n,r)=>{const i=C("button",e,{className:"WebWindowButton",name:o,id:o+t});i.innerHTML=n,i.onclick=r;let a=e.innerHTML;a=a.toLowerCase();const s=new RegExp("button class");for(;a.match(s);)a=a.replace(s,'button type="button" class')};d(c,i,"rollup","-",this.minimize),d(c,i,"rolldown","o",this.maximize),d(c,i,"destroy","X",this.destroy),this.windowArea.style.width=n+"px",this.titleBar.style.width=n+"px",this.footerArea.style.width=n+"px";const h=r-this.titleBar.offsetHeight-this.footerArea.offsetHeight;this.windowArea.style.height=h+"px",this.dragndrop=new S}function E(){return Array.from(arguments).reduce(((e,t)=>+e+ +t),0)}function D(e,t){return+e-+t}function R(){return Array.from(arguments).reduce(((e,t)=>+e*+t),1)}function L(e,t){return+e/+t}function P(e){return Math.pow(e,2)}k.prototype.popToFront=function(e){const t=c(e);!function(e,t,o){let n,r,i,a;if(r=y(e),!(r.length<=0)&&(n=r.get(0),o&&o<r.length&&(n=r.get(o)),n))i=function(e,t){let o;e?(o=e.parentNode,o&&(o.nodeName.toLowerCase()!==t?i(o,t):a=o)):a=null},i(n,t)}(d(t),"div.WebWindowMain")},k.prototype.enableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),s(this.mainWindow,"mousedown",e,!1)},k.prototype.disableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),l(this.mainWindow,"mousedown",e,!1)},k.prototype.setTitle=function(e){const t=this.titleBar.getElementsByTagName("span");t&&t.length>0&&(t[0].innerHTML=e)},k.prototype.setContent=function(e){A(this.windowArea,e)};function N(e){return e*Math.PI/180}function O(e,t,o,n){const r={canvas:null,ctx:null,width:0,height:0};let i;return r.canvas=C("canvas",t,{id:e}),r.canvas?(o&&(r.canvas.width=o),n&&(r.canvas.height=n),r.width=r.canvas.width,r.height=r.canvas.height,null!=r.canvas.getContext&&(r.ctx=r.canvas.getContext("2d"),function(e){const t="black";function o(e,t){return Math.sqrt(P(e)-P(t))}e.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},e.line=function(e,o,n,r,i){let a,s,l,c,d,h=0,u=0;a=this.ctx,i&&(c=i.color,d=i.rotateAngle),a.save(),a.beginPath(),d&&(s=Math.abs(e-n)/2,l=Math.abs(o-r)/2,h=e+s,u=o+l,a.translate(h,u),a.rotate(N(d))),a.moveTo(e-h,o-u),a.lineTo(n-h,r-u),a.fillStyle=c||t,a.fill(),a.strokeStyle=c||t,a.stroke(),a.restore()},e.circle=function(e,o,n,r){let i,a,s,l;a=this.ctx,r&&(s=r.color,l=r.fillStrokeClear),a.beginPath(),a.moveTo(e+n,o),a.arc(e,o,n,0,2*Math.PI,!0),i=l||"stroke",a[i+"Style"]=s||t,a[i]()},e.halfCircle=function(e,o,n,r){let i,a,s,l,c,d,h=0,u=0;a=this.ctx,r&&(s=r.color,l=r.rotateAngle,d=r.openTop,c=r.fillStrokeClear),a.save(),a.beginPath(),l&&(h=e,u=o,a.translate(h,u),a.rotate(N(l))),a.moveTo(e-n-h,o-u),a.arc(e-h,o-u,n,Math.PI,2*Math.PI,!0),d||a.lineTo(e-n-h,o-u),a.closePath(),i=c||"stroke",a[i+"Style"]=s||t,a[i](),a.restore()},e.oval=function(e,o,n,r,i){let a,s,l,c,d,h=0,u=0,f=.5522848,g=e-n/2,w=o-r/2,m=n/2*f,p=r/2*f,v=g+n,b=w+r,T=g+n/2,y=w+r/2;s=this.ctx,s.save(),i&&(l=i.color,c=i.fillStrokeClear,d=i.rotateAngle),s.beginPath(),d&&(h=T,u=y,s.translate(h,u),s.rotate(N(d))),s.moveTo(g-h,y-u),s.bezierCurveTo(g-h,y-p-u,T-m-h,w-u,T-h,w-u),s.bezierCurveTo(T+m-h,w-u,v-h,y-p-u,v-h,y-u),s.bezierCurveTo(v-h,y+p-u,T+m-h,b-u,T-h,b-u),s.bezierCurveTo(T-m-h,b-u,g-h,y+p-u,g-h,y-u),s.restore(),a=c||"stroke",s[a+"Style"]=l||t,s[a]()},e.rectangle=function(e,o,n,r,i){let a,s,l,c,d,h=0,u=0;s=this.ctx,i&&(l=i.color,c=i.rotateAngle,d=i.fillStrokeClear),s.save(),s.beginPath(),c&&(h=Math.round(e+n/2),u=Math.round(o+r/2),s.translate(h,u),s.rotate(N(c))),a=d||"stroke",s[a+"Style"]=l||t,s[a+"Rect"](e-h,o-u,n,r),s[a](),s.restore()},e.square=function(e,t,o,n){this.rectangle(e,t,o,o,n)},e.triangle=function(e,o,n,r,i,a,s){let l,c,d,h,u,f=0,g=0;l=this.ctx,s&&(d=s.color,h=s.rotateAngle,u=s.fillStrokeClear),l.save(),l.beginPath(),h&&(f=(e+n+i)/3,g=(o+r+a)/3,l.translate(f,g),l.rotate(N(h))),c=u||"stroke",l.moveTo(e-f,o-g),l.lineTo(n-f,r-g),l.lineTo(i-f,a-g),l.lineTo(e-f,o-g),l.closePath(),l[c+"Style"]=d||t,l[c](),l.restore()},e.equilateralTriangle=function(e,t,n,r){let i,a,s;r&&(s=r.orientation),a=n/2,i=o(n,a),"down"===s?this.triangle(e,t,e+n,t,e+a,t+i,r):this.triangle(e,t,e+n,t,e+a,t-i,r)},e.hexagon=function(e,n,r,i){let a,s,l,c,d,h,u,f=0,g=0;a=this.ctx,i&&(h=i.color,u=i.rotateAngle,d=i.fillStrokeClear),l=r/2,c=d||"stroke",s=o(r,l),a.save(),a.beginPath(),u&&(f=e,g=n,a.translate(f,g),a.rotate(N(u))),a.moveTo(e+l-r-f,n-s-g),a.lineTo(e+l-f,n-s-g),a.lineTo(e+r-f,n-g),a.lineTo(e+l-f,n+s-g),a.lineTo(e+l-r-f,n+s-g),a.lineTo(e-r-f,n-g),a.lineTo(e-r+l-f,n-s-g),a.closePath(),a[c+"Style"]=h||t,a[c](),a.restore()},e.octagon=function(e,o,n,r){let i,a,s,l,c,d,h,u=0,f=0;r&&(d=r.color,h=r.rotateAngle,c=r.fillStrokeClear),l=c||"stroke",s=n/2,a=Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),i=this.ctx,i.save(),h&&(u=e,f=o,i.translate(u,f),i.rotate(N(h))),i.beginPath(),i.moveTo(e-s-u,o-a-f),i.lineTo(e+s-u,o-a-f),i.lineTo(e+a-u,o-s-f),i.lineTo(e+a-u,o+s-f),i.lineTo(e+s-u,o+a-f),i.lineTo(e-s-u,o+a-f),i.lineTo(e-a-u,o+s-f),i.lineTo(e-a-u,o-s-f),i.lineTo(e-s-u,o-a-f),i.closePath(),i[l+"Style"]=d||t,i[l](),i.restore()},e.setBackgroundColor=function(e){this.rectangle(0,0,this.width,this.height,{color:e||"white",fillStrokeClear:"fill"})},e.addtext=function(e,o,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.ctx.font=r.font||"16pt Calibri",this.ctx.fillStyle=r.color||t,this.ctx.fillText(n,e,o)}}(r),i=r),i):null}const B=2.496532,H=89.2641667,I=21.0786056,j=-77.4311111;const F=new class{hoursMinutesSeconds(e){let t=Math.floor(e);t=t<0?E(24,t):t;const o=this.pad(Math.floor(R(60,this.getFraction(e))));return`${t}:${o}:${this.pad(Math.round(R(60,D(R(60,this.getFraction(e)),o))))}`}hourAngleToDegrees(e,t,o){return E(e,L(t,60),L(o,3600))}mapTo24Hour(e){let t=e;return t<0?t=D(t,R(24,D(L(t,24),1))):e>=24&&(t=D(t,R(L(t,24),24))),t}pad(e){return`${e}`.padStart(2,"0")}getFraction(e){const t=D(e,Math.floor(e));return t<0?E(t,1):t}};const z=new class{toUTC(e){return{year:e.getUTCFullYear(),month:e.getUTCMonth(),date:e.getUTCDate(),hours:e.getUTCHours(),minutes:e.getUTCMinutes(),seconds:e.getUTCSeconds()}}toJulien(e){const t=e.date;let o=E(e.month,1),n=e.year,r=E(e.hours,L(e.minutes,60),L(e.seconds,3600));o<=2&&(o=E(o,12),n=D(n,1));Math.floor(L(n,100));const i=Math.floor(R(365.25,E(n,4716))),a=Math.floor(R(30.6001,E(o,1)));return E(D(D(E(i,a,t),13),1524.5),L(r,24))}toGMST(e){const t=D(e,2400000.5),o=Math.floor(t),n=L(D(o,51544.5),36525),r=R(D(.093104,R(62e-7,n)),n),i=R(E(8640184.812866,r),L(n,3600));return E(6.697374558,R(24,D(t,o),1.0027379093),i)}gmstToLST(e,t){return R(24,F.getFraction(L(E(e,L(t,15)),24)))}isDST(e){const t=new Date(e.getFullYear(),0,1).getTimezoneOffset(),o=new Date(e.getFullYear(),6,1).getTimezoneOffset();return Math.max(t,o)!==e.getTimezoneOffset()}utcToLST(e,t){const o=this.toJulien(e),n=this.toGMST(o);return this.gmstToLST(n,t)}calculateLST(e,t){const o=D(E(L(e.getTime(),864e5),2440587.5),2451545),n=E(e.getUTCHours(),L(e.getUTCMinutes(),60),L(e.getUTCSeconds(),3600)),r=E(6.697374558,R(.06570982441908,o),R(1.00273790935,n));return R(24,F.getFraction(L(E(r,L(t,15)),24)))}};const $=new class{precessionCorrection(e,t){let o=z.toJulien(e),n=B,r=H;t<0&&(n=I,r=j);let i=L(R(n,Math.PI),12),a=L(R(r,Math.PI),180);if(t<0)this.correctedRA=E(n,L(R(E(3.075,R(1.336,Math.sin(R(15,n)),57.08839)),D(e.year,2e3)),3600)),this.correctedDEC=E(r,L(R(20.04,Math.cos(R(15,r)),D(e.year,2e3)),3600));else{const e=L(D(o,2451545),36525);let t=E(R(2306.2181,e),R(.30188,e,e),R(.017998,e,e,e)),n=E(R(2306.2181,e),R(1.09468,e,e),R(.018203,e,e,e)),r=E(R(2004.3109,e),R(-.42665,e,e),R(-.041833,e,e,e));t=L(R(t,Math.PI),648e3),n=L(R(n,Math.PI),648e3),r=L(R(r,Math.PI),648e3);const s=R(Math.sin(E(i,t)),Math.cos(a)),l=D(R(Math.cos(E(i,t)),Math.cos(r),Math.cos(a)),R(Math.sin(r),Math.sin(a))),c=E(R(Math.cos(E(i,t)),Math.sin(r),Math.cos(a)),R(Math.cos(r),Math.sin(a))),d=E(Math.sqrt(R(s,s),R(l,l)));this.correctedDEC=c>.9?Math.acos(d):c<-.9?-Math.acos(d):Math.asin(c),this.correctedRA=E(Math.atan2(s,l),n),this.correctedRA=L(R(12,this.correctedRA),Math.PI),this.correctedDEC=L(R(180,this.correctedDEC),Math.PI),this.correctedDEC>90&&(this.correctedDEC=D(180,this.correctedDEC),this.correctedRA=E(this.correctedRA,12)),this.correctedDEC<-90&&(this.correctedDEC=D(-180,this.correctedDEC),this.correctedRA=E(this.correctedRA,12)),this.correctedRA=F.mapTo24Hour(this.correctedRA)}}getPolarisHA(e,t,o){const n=z.toUTC(e);this.precessionCorrection(n,t);let r=D(z.utcToLST(n,o),this.correctedRA);return t<0&&(r=r<0?Math.abs(r):-r),{ha:r}}getPolarisHourAngle(e,t,o,n){const r=z.toUTC(e);this.precessionCorrection(r,t);const i=z.calculateLST(e,o);let a=Number(D(i,n)).toFixed(6),s=Number(D(i,this.correctedRA)).toFixed(6);return a<0&&(a=E(24,a)),s<0&&(s=E(24,s)),{hourAnglePolaris:a,plusHourAnglePolaris:s}}haToDegrees(e){return L(R(360,e),24)}};function U(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["12/6","0/0","18/9","6/3"];window.canvasRef.circle(e,t,o,{color:"red"}),window.canvasRef.line(e,t-o,e,t+o,{color:"red"}),window.canvasRef.line(e-o,t,e+o,t,{color:"red"});for(let n=0;n<360;n+=15)window.canvasRef.line(e-o,t,e+o,t,{rotateAngle:n,color:"red"});window.canvasRef.circle(e,t,o-20,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.line(e,t-o,e,t+o,{color:"red"}),window.canvasRef.line(e-o,t,e+o,t,{color:"red"});const r=10*n[0].length/2,i=10*n[1].length/2,a=10*n[2].length+5;window.canvasRef.addtext(e-r,t-o-10,n[0],{color:"red"}),window.canvasRef.addtext(e-i,t+o+20,n[1],{color:"red"}),window.canvasRef.addtext(e-o-a,t,n[2],{color:"red"}),window.canvasRef.addtext(e+o+10,t,n[3],{color:"red"})}function X(){const e=document.getElementById("latitude").value||37.6904826,t=document.getElementById("longitude").value||-122.47267,o=document.getElementById("polarisRA").value.split(" "),n=document.getElementById("polarisDec").value.split(" "),r=F.hourAngleToDegrees(n[0]||89,n[1]||27,0),i=F.hourAngleToDegrees(o[0]||2,o[1]||31,0),a=new Date,{hourAnglePolaris:s,plusHourAnglePolaris:l}=$.getPolarisHourAngle(a,e,t,i),c=F.hoursMinutesSeconds(s),d=F.hoursMinutesSeconds(l),{ha:h}=$.getPolarisHA(a,e,t,t),u=F.hoursMinutesSeconds(h);window.canvasRef.rectangle(50,390,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,410,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,430,800,500,{color:"black",fillStrokeClear:"fill"});const f=e=>Number(e).toFixed(6);window.canvasRef.addtext(50,410,`Using RA, Dec: ${f(i)} / ${f(r)} corrected: ${f($.correctedRA)} / ${f($.correctedDEC)}`,{color:"red"}),window.canvasRef.addtext(50,430,`Polaris hour angle: ${f(s)} | ${f(l)} or ${f(h)} `,{color:"red"}),window.canvasRef.addtext(50,450,`Clock time: ${c} | ${d} or ${u} `,{color:"red"})}var Y;Y=function(){const e=document.getElementById("main-window"),t=window.getComputedStyle(e),o=(new k("Polaris Hour Angle",t.offsetLeft,t.offsetTop,t.offsetWidth,t.offsetHeight,"main-window"),O("polaris-hour","canvas-container",800,500));window.canvasRef=o,U(200,180,150),U(550,180,100,["6","0","9","3"]),X(),window.setInterval(X,5e3)},a.onLoadEventStack.push(Y)})();