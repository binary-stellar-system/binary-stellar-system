(()=>{"use strict";const e=window.navigator,t=e.userAgent.replace(/\(|\)/g,"").split(" ").filter((e=>{const t=e.toLowerCase();return t.indexOf("/")>-1&&!t.startsWith("gecko")&&!t.startsWith("safari")&&!t.startsWith("applewebkit")&&!t.startsWith("mozilla")})),o=t[t.length-1],n=parseFloat(o.split("/")[1]),i=o.split("/")[0],r="version"===i.toLowerCase()?"Safari":i,a={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:e.cookieEnabled,name:r,uaName:r,OS:e.platform,uaOS:e.platform,userAgent:e.userAgent,appVersion:n,uaAppVersion:n,version:n,uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.attachEvent&&!window.addEventListener){const n=e.attachEvent("on"+t,o);if(!n)throw"Event "+t+" could not be added!";return n}return e.addEventListener(t,o,n)},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.detachEvent&&!window.removeEventListener){const n=e.detachEvent("on"+t,o);if(!n)throw"Event "+t+" could not be removed!";return n}return e.removeEventListener(t,o,n)},c=e=>window.event?window.event:e,d=e=>{const t=c(e);let o;return t.srcElement?o=t.srcElement:t.target&&(o=t.target),o},h=e=>{const t=c(e);let o=0;return t.pageX?o=t.pageX:t.clientX&&(o=t.clientX),o},u=e=>{const t=c(e);let o=0;return t.pageY?o=t.pageY:t.clientY&&(o=t.clientY),o};let f,g;document.createEvent&&(f=(e,t,o)=>{let n=document.createEvent("Event");if(n)return o||(o={}),o.canBubble||(o.canBubble=!0),o.cancellable||(o.cancellable=!0),n.initEvent("Event",o.canBubble,o.cancellable),n},g=function(e){document.dispatchEvent(e)});function w(e,t,o){return o instanceof e||(typeof o).toLowerCase()===t}function m(e){return w(String,"string",e)}function p(e){return w(Object,"object",e)}function v(e){let t=e.nodeName;return t=t||"","textarea"===t.toLowerCase()}function b(e){let t=typeof e,o=e.nodeName;return o=o||"","input"===o.toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}s(window,"load",(function(){let e,t,o=a.onLoadEventStack;e=o.length;for(let n=0;n<e;n+=1)t=o[n],t&&"function"===(typeof t).toLowerCase()&&t()}),!1);const T=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!m(e)&&p(e)&&e.hasOwnProperty("objectName")&&"selector"===e.objectName)return e;let o,n=e;e instanceof HTMLElement&&(e.id?n="#"+e.id:(n=e.nodeName.toLowerCase(),e.className.length>0&&(n+="."+e.className.split(" ").join(" .")))),T.test(n)?(o=t.querySelector(n),o=o?[o]:[]):(o=t.querySelectorAll(n),o=o&&o.length>0?o:[]);const i={length:o.length,objectName:"selector",get:function(e){return o[e]},toArray:function(){return Array.from(o)},each:function(e){i.toArray().forEach(e)}};for(let e=0;e<i.length;e++)i[e]=o[e];return i}const y=function(e,t){-1===e?.className?.indexOf(t)&&(e.className+=" "+t)},C=function(e,t,o){let n,i=document.body;if(t&&m(t)?i=document.getElementById(t):t&&(i=t),!e)return i;if(o&&o.id&&(n=document.getElementById(o.id)),n||(n=document.createElement(e)),!n)return n;if(i.appendChild(n),n&&o){let e;for(e in o)try{n[e]=o[e]}catch(e){}o.className&&y(n,o.className)}return n},A=function(e,t,o){let n,i,r=M(e);if(!(r.length<=0)&&(o||(o=0),!(o>=r.length)&&r[o]))return n=r.get(o),i=new String(n.tagName).toLowerCase(),(t||""===t)&&function(e,t){m(e)||w(Number,"number",e)?b(i)||b(t)||v(t)?t.value=e:t.innerHTML=e:t&&p(e)&&t.appendChild(e)}(t,n),b(i)||b(n)||v(n)?n.value:m(n.innerHTML)?n.innerHTML:void 0},W=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).getElementById(e)},S=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e)};function x(){const e=this,t=(t,o)=>{let n,i,r=e;return n=c(t),i=d(n),r.moving&&r.dragableCoverMask.id===i.id&&(r.posX=h(),r.posY=u(),r[o].style.left=r.posX-r.offsetX+"px",r[o].style.top=r.posY-r.offsetY+"px"),r},o=()=>{let e;window.getSelection?(e=window.getSelection(),e&&e.empty?e.empty():e&&e.removeAllRanges&&e.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()},n=(t,o,n)=>{const i=W(o),r=W(n||o);i&&r&&(t?(e.dragableObjects[r.id]=i,s(r,"mousedown",e.mousedown,!1)):(e.dragableObjects[r.id]=null,l(r,"mousedown",e.mousedown,!1)))};return this.dragableObjects=[],this.initialize=()=>{const t=e;t.isInitialized||(t.dragableCoverMask=W("-dragndrop-enabled-x"),t.dragableCoverMask||(t.dragableCoverMask=C("div",document.body),t.dragableCoverMask.id="-dragndrop-enabled-x"),t.dragableCoverMask.style.display="none",s(document,"mousemove",t.mousemove,!1),s(document,"mouseup",t.mouseup,!1),t.isInitialized=!0)},this.findDragableParent=t=>{const o=e;if(t&&t.nodeName&&"body"!==t.nodeName.toLowerCase())return o.dragableObjects[t.id]?t:o.findDragableParent(t.parentNode)},this.mousemove=e=>(t(e,"dragableCoverMask"),o(),!1),this.mouseup=e=>{const n=t(e,"currentDragObject");n.dragableCoverMask.style.display="none",n.currentDragObject=null,n.moving=!1,o()},this.mousedown=function(t){const o=e,n=c(t);let i=d(n);if(i=o.findDragableParent(i),!o.dragableObjects[i.id])return o.moving=!1,!1;o.currentDragObject=o.dragableObjects[i.id],document.body.appendChild(o.currentDragObject),o.posX=h(),o.posY=u(),o.offsetX=o.posX-o.currentDragObject.offsetLeft,o.offsetY=o.posY-o.currentDragObject.offsetTop;let r=o.dragableCoverMask;return r.style.position="absolute",r.style.display="block",r.style.border="2px solid black",r.style.left=o.currentDragObject.offsetLeft+"px",r.style.top=o.currentDragObject.offsetTop+"px",r.style.width=o.currentDragObject.offsetWidth+"px",r.style.height=o.currentDragObject.offsetHeight+"px",r.style.zIndex=1e5,o.moving=!0,!1},this.setDragable=function(e,t){n(!0,e,t)},this.setNONDragable=function(e,t){n(!1,e,t)},this}function k(e,t,o,n,i,r){const a=W(r);a?(this.mainWindow=a,this.titleBar=S(".WebWindowTitle",this.mainWindow)[0],this.titleBar.id="WebWindowTitle"+r,this.windowArea=S(".WebWindowArea",this.mainWindow)[0],this.windowArea.id="WebWindowArea"+r,this.footerArea=S(".WebWindowFooter",this.mainWindow)[0],this.footerArea.id="WebWindowFooter"+r):(this.mainWindow=C("div",document.body,{className:"WebWindowMain",id:r}),this.mainWindow.style.left=t+"px",this.mainWindow.style.top=o+"px",this.mainWindow.style.width=n+"px",this.mainWindow.style.height=i+"px",this.titleBar=C("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+r}),this.windowArea=C("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+r}),this.footerArea=C("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+r}));C("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=e;let s={className:"WebWindowButtonBox"};const l=C("span",this.titleBar,s);s={name:"WW"+r,onsubmit:"return false;"};const c=C("form",l,s);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1};const d=(e,t,o,n,i)=>{const r=C("button",e,{className:"WebWindowButton",name:o,id:o+t});r.innerHTML=n,r.onclick=i;let a=e.innerHTML;a=a.toLowerCase();const s=new RegExp("button class");for(;a.match(s);)a=a.replace(s,'button type="button" class')};d(c,r,"rollup","-",this.minimize),d(c,r,"rolldown","o",this.maximize),d(c,r,"destroy","X",this.destroy),this.windowArea.style.width=n+"px",this.titleBar.style.width=n+"px",this.footerArea.style.width=n+"px";const h=i-this.titleBar.offsetHeight-this.footerArea.offsetHeight;this.windowArea.style.height=h+"px",this.dragndrop=new x}function E(e){return Math.pow(e,2)}k.prototype.popToFront=function(e){const t=c(e);!function(e,t,o){let n,i,r,a;if(i=M(e),!(i.length<=0)&&(n=i.get(0),o&&o<i.length&&(n=i.get(o)),n))r=function(e,t){let o;e?(o=e.parentNode,o&&(o.nodeName.toLowerCase()!==t?r(o,t):a=o)):a=null},r(n,t)}(d(t),"div.WebWindowMain")},k.prototype.enableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),s(this.mainWindow,"mousedown",e,!1)},k.prototype.disableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),l(this.mainWindow,"mousedown",e,!1)},k.prototype.setTitle=function(e){const t=this.titleBar.getElementsByTagName("span");t&&t.length>0&&(t[0].innerHTML=e)},k.prototype.setContent=function(e){A(this.windowArea,e)};function D(e){return e*Math.PI/180}function R(e,t,o,n){const i={canvas:null,ctx:null,width:0,height:0};let r;return i.canvas=C("canvas",t,{id:e}),i.canvas?(o&&(i.canvas.width=o),n&&(i.canvas.height=n),i.width=i.canvas.width,i.height=i.canvas.height,null!=i.canvas.getContext&&(i.ctx=i.canvas.getContext("2d"),function(e){const t="black";function o(e,t){return Math.sqrt(E(e)-E(t))}e.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},e.line=function(e,o,n,i,r){let a,s,l,c,d,h=0,u=0;a=this.ctx,r&&(c=r.color,d=r.rotateAngle),a.save(),a.beginPath(),d&&(s=Math.abs(e-n)/2,l=Math.abs(o-i)/2,h=e+s,u=o+l,a.translate(h,u),a.rotate(D(d))),a.moveTo(e-h,o-u),a.lineTo(n-h,i-u),a.fillStyle=c||t,a.fill(),a.strokeStyle=c||t,a.stroke(),a.restore()},e.circle=function(e,o,n,i){let r,a,s,l;a=this.ctx,i&&(s=i.color,l=i.fillStrokeClear),a.beginPath(),a.moveTo(e+n,o),a.arc(e,o,n,0,2*Math.PI,!0),r=l||"stroke",a[r+"Style"]=s||t,a[r]()},e.halfCircle=function(e,o,n,i){let r,a,s,l,c,d,h=0,u=0;a=this.ctx,i&&(s=i.color,l=i.rotateAngle,d=i.openTop,c=i.fillStrokeClear),a.save(),a.beginPath(),l&&(h=e,u=o,a.translate(h,u),a.rotate(D(l))),a.moveTo(e-n-h,o-u),a.arc(e-h,o-u,n,Math.PI,2*Math.PI,!0),d||a.lineTo(e-n-h,o-u),a.closePath(),r=c||"stroke",a[r+"Style"]=s||t,a[r](),a.restore()},e.oval=function(e,o,n,i,r){let a,s,l,c,d,h=0,u=0,f=.5522848,g=e-n/2,w=o-i/2,m=n/2*f,p=i/2*f,v=g+n,b=w+i,T=g+n/2,M=w+i/2;s=this.ctx,s.save(),r&&(l=r.color,c=r.fillStrokeClear,d=r.rotateAngle),s.beginPath(),d&&(h=T,u=M,s.translate(h,u),s.rotate(D(d))),s.moveTo(g-h,M-u),s.bezierCurveTo(g-h,M-p-u,T-m-h,w-u,T-h,w-u),s.bezierCurveTo(T+m-h,w-u,v-h,M-p-u,v-h,M-u),s.bezierCurveTo(v-h,M+p-u,T+m-h,b-u,T-h,b-u),s.bezierCurveTo(T-m-h,b-u,g-h,M+p-u,g-h,M-u),s.restore(),a=c||"stroke",s[a+"Style"]=l||t,s[a]()},e.rectangle=function(e,o,n,i,r){let a,s,l,c,d,h=0,u=0;s=this.ctx,r&&(l=r.color,c=r.rotateAngle,d=r.fillStrokeClear),s.save(),s.beginPath(),c&&(h=Math.round(e+n/2),u=Math.round(o+i/2),s.translate(h,u),s.rotate(D(c))),a=d||"stroke",s[a+"Style"]=l||t,s[a+"Rect"](e-h,o-u,n,i),s[a](),s.restore()},e.square=function(e,t,o,n){this.rectangle(e,t,o,o,n)},e.triangle=function(e,o,n,i,r,a,s){let l,c,d,h,u,f=0,g=0;l=this.ctx,s&&(d=s.color,h=s.rotateAngle,u=s.fillStrokeClear),l.save(),l.beginPath(),h&&(f=(e+n+r)/3,g=(o+i+a)/3,l.translate(f,g),l.rotate(D(h))),c=u||"stroke",l.moveTo(e-f,o-g),l.lineTo(n-f,i-g),l.lineTo(r-f,a-g),l.lineTo(e-f,o-g),l.closePath(),l[c+"Style"]=d||t,l[c](),l.restore()},e.equilateralTriangle=function(e,t,n,i){let r,a,s;i&&(s=i.orientation),a=n/2,r=o(n,a),"down"===s?this.triangle(e,t,e+n,t,e+a,t+r,i):this.triangle(e,t,e+n,t,e+a,t-r,i)},e.hexagon=function(e,n,i,r){let a,s,l,c,d,h,u,f=0,g=0;a=this.ctx,r&&(h=r.color,u=r.rotateAngle,d=r.fillStrokeClear),l=i/2,c=d||"stroke",s=o(i,l),a.save(),a.beginPath(),u&&(f=e,g=n,a.translate(f,g),a.rotate(D(u))),a.moveTo(e+l-i-f,n-s-g),a.lineTo(e+l-f,n-s-g),a.lineTo(e+i-f,n-g),a.lineTo(e+l-f,n+s-g),a.lineTo(e+l-i-f,n+s-g),a.lineTo(e-i-f,n-g),a.lineTo(e-i+l-f,n-s-g),a.closePath(),a[c+"Style"]=h||t,a[c](),a.restore()},e.octagon=function(e,o,n,i){let r,a,s,l,c,d,h,u=0,f=0;i&&(d=i.color,h=i.rotateAngle,c=i.fillStrokeClear),l=c||"stroke",s=n/2,a=Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),r=this.ctx,r.save(),h&&(u=e,f=o,r.translate(u,f),r.rotate(D(h))),r.beginPath(),r.moveTo(e-s-u,o-a-f),r.lineTo(e+s-u,o-a-f),r.lineTo(e+a-u,o-s-f),r.lineTo(e+a-u,o+s-f),r.lineTo(e+s-u,o+a-f),r.lineTo(e-s-u,o+a-f),r.lineTo(e-a-u,o+s-f),r.lineTo(e-a-u,o-s-f),r.lineTo(e-s-u,o-a-f),r.closePath(),r[l+"Style"]=d||t,r[l](),r.restore()},e.setBackgroundColor=function(e){this.rectangle(0,0,this.width,this.height,{color:e||"white",fillStrokeClear:"fill"})},e.addtext=function(e,o,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.ctx.font=i.font||"16pt Calibri",this.ctx.fillStyle=i.color||t,this.ctx.fillText(n,e,o)}}(i),r=i),r):null}const L=2.5301944,P=89.2641667,N=21.0786056,O=-77.4311111;const B=new class{hoursMinutesSeconds(e){let t=Math.floor(e);t=t<0?+t+24:t;let o=Math.floor(60*this.getFraction(e)),n=Math.round(60*(60*this.getFraction(e)-o)),i=o>=10?t+":"+o:t+":0"+o;return n<10?i+":0"+n:i+":"+n}hourAngleToDegrees(e,t,o){return+e+t/60+o/3600}mapTo24Hour(e){let t=e;return t<0?t=(t-24)*(t/24-1):t>=24&&(t-=t/24*24),t}pad(e){return e<10?`0${e}`:`${e}`}getFraction(e){const t=e-Math.floor(e);return t<0?t+1:t}};const I=new class{toUTC(e){return{year:e.getUTCFullYear(),month:e.getUTCMonth(),date:e.getUTCDate(),hours:e.getUTCHours(),minutes:e.getUTCMinutes(),seconds:e.getUTCSeconds()}}toJulien(e){const t=e.date;let o=e.month+1,n=e.year,i=+e.hours+ +e.minutes/60+ +e.seconds/3600;o<=2&&(o+=12,n-=1);Math.floor(n/100);return Math.floor(365.25*(n+4716))+Math.floor(30.6001*(o+1))+t-13-1524.5+i/24}toGMST(e){const t=e-2400000.5,o=Math.floor(t),n=(o-51544.5)/36525;return 6.697374558+24*(t-o)*1.0027379093+(8640184.812866+(.093104-62e-7*n)*n)*n/3600}gmstToLST(e,t){return 24*B.getFraction((e+t/15)/24)}utcToLST(e,t){const o=this.toJulien(e),n=this.toGMST(o);return this.gmstToLST(n,t)}calculateLST(e,t){const o=6.697374558+.06570982441908*(e.getTime()/864e5+2440587.5-2451545)+1.00273790935*(e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600);return 24*B.getFraction((o+t/15)/24)}};const j=new class{precessionCorrection(e,t){let o=I.toJulien(e),n=L,i=P;t<0&&(n=N,i=O);let r=n*Math.PI/12,a=i*Math.PI/180;if(t<0)this.correctedRA=n+(3.075+1.336*Math.sin(15*n)*57.08839)*(e.year-2e3)/3600,this.correctedDEC=i+20.04*Math.cos(15*i)*(e.year-2e3)/3600;else{var s=(o-2451545)/36525,l=2306.2181*s+.30188*s*s+.017998*s*s*s,c=2306.2181*s+1.09468*s*s+.018203*s*s*s,d=2004.3109*s+-.42665*s*s+-.041833*s*s*s;l=l*Math.PI/648e3,c=c*Math.PI/648e3,d=d*Math.PI/648e3;var h=Math.sin(r+l)*Math.cos(a),u=Math.cos(r+l)*Math.cos(d)*Math.cos(a)-Math.sin(d)*Math.sin(a),f=Math.cos(r+l)*Math.sin(d)*Math.cos(a)+Math.cos(d)*Math.sin(a);this.correctedDEC=f>.9?Math.acos(Math.sqrt(h*h+u*u)):f<-.9?-Math.acos(Math.sqrt(h*h+u*u)):Math.asin(f),this.correctedRA=Math.atan2(h,u)+c,this.correctedRA=12*this.correctedRA/Math.PI,this.correctedDEC=180*this.correctedDEC/Math.PI,this.correctedDEC>90&&(this.correctedDEC=180-this.correctedDEC,this.correctedRA=this.correctedRA+12),this.correctedDEC<-90&&(this.correctedDEC=-180-this.correctedDEC,this.correctedRA=this.correctedRA+12),this.correctedRA=B.mapTo24Hour(this.correctedRA)}}getPolarisHA(e,t){const o=I.toUTC(e);this.precessionCorrection(o,t);const n=I.utcToLST(o,t);let i=n-this.correctedRA,r=n+this.correctedRA;return t<0&&(i=i<0?Math.abs(i):-i,r=r<0?Math.abs(r):-r),{ha:i,pha:r}}haToDegrees(e){return 360*e/24}};function H(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["12/6","0/0","18/9","6/3"];window.canvasRef.circle(e,t,o,{color:"red"}),window.canvasRef.line(e,t-o,e,t+o,{color:"red"}),window.canvasRef.line(e-o,t,e+o,t,{color:"red"});for(let n=0;n<360;n+=15)window.canvasRef.line(e-o,t,e+o,t,{rotateAngle:n,color:"red"});window.canvasRef.circle(e,t,o-20,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.line(e,t-o,e,t+o,{color:"red"}),window.canvasRef.line(e-o,t,e+o,t,{color:"red"});const i=10*n[0].length/2,r=10*n[1].length/2,a=10*n[2].length+5;window.canvasRef.addtext(e-i,t-o-10,n[0],{color:"red"}),window.canvasRef.addtext(e-r,t+o+20,n[1],{color:"red"}),window.canvasRef.addtext(e-o-a,t,n[2],{color:"red"}),window.canvasRef.addtext(e+o+10,t,n[3],{color:"red"})}function $(){const e=document.getElementById("latitude").value||37.6904826,t=document.getElementById("longitude").value||-122.47267,o=document.getElementById("polarisRA").value.split(" "),n=document.getElementById("polarisDec").value.split(" "),i=B.hourAngleToDegrees(n[0]||89,n[1]||27,0),r=B.hourAngleToDegrees(o[0]||2,o[1]||31,0),{hourAnglePolaris:a,plusHourAnglePolaris:s}=function(e,t){const o=new Date,n=I.calculateLST(o,e);return{hourAnglePolaris:Number(n-t).toFixed(6),plusHourAnglePolaris:Number(n+t).toFixed(6)}}(e,r),l=B.hoursMinutesSeconds(a),c=B.hoursMinutesSeconds(s),d=new Date,{ha:h,pha:u}=j.getPolarisHA(d,e),f=B.hoursMinutesSeconds(h),g=B.hoursMinutesSeconds(u);window.canvasRef.rectangle(50,390,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,410,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,430,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,450,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.addtext(50,410,`Using latitude, longitude: ${e}, ${t}`,{color:"red"}),window.canvasRef.addtext(50,430,`Using RA, Dec: ${r} / ${i} or: ${j.correctedRA} / ${j.correctedDEC}`,{color:"red"}),window.canvasRef.addtext(50,450,`Polaris hour angle: ${a} | ${s} or ${h} | ${u}`,{color:"red"}),window.canvasRef.addtext(50,470,`Clock time: ${l} | ${c} or ${f} | ${g} `,{color:"red"})}var F;F=function(){const e=document.getElementById("main-window"),t=window.getComputedStyle(e),o=(new k("Polaris Hour Angle",t.offsetLeft,t.offsetTop,t.offsetWidth,t.offsetHeight,"main-window"),R("polaris-hour","canvas-container",800,500));window.canvasRef=o,H(200,180,150),H(550,180,100,["6","0","9","3"]),$(),window.setInterval($,5e3)},a.onLoadEventStack.push(F)})();