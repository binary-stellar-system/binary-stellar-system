(()=>{"use strict";const e=window.navigator,t=e.userAgent.replace(/\(|\)/g,"").split(" ").filter((e=>{const t=e.toLowerCase();return t.indexOf("/")>-1&&!t.startsWith("gecko")&&!t.startsWith("safari")&&!t.startsWith("applewebkit")&&!t.startsWith("mozilla")})),n=t[t.length-1],o=parseFloat(n.split("/")[1]),i=n.split("/")[0],a="version"===i.toLowerCase()?"Safari":i,r={capabilitiesDetected:!1,hasJscript:!1,hasActiveX:!1,isDOMCapable:!1,isAJAXCapable:!1,hasCookiesEnabled:e.cookieEnabled,name:a,uaName:a,OS:e.platform,uaOS:e.platform,userAgent:e.userAgent,appVersion:o,uaAppVersion:o,version:o,uaOSVersion:"",onLoadEventStack:[],onDOMReadyEventStack:[],touchEnabled:!1,includeStack:[],scriptLoadStack:[],scriptLocation:""},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.attachEvent&&!window.addEventListener){const o=e.attachEvent("on"+t,n);if(!o)throw"Event "+t+" could not be added!";return o}return e.addEventListener(t,n,o)},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(window.detachEvent&&!window.removeEventListener){const o=e.detachEvent("on"+t,n);if(!o)throw"Event "+t+" could not be removed!";return o}return e.removeEventListener(t,n,o)},c=e=>window.event?window.event:e,d=e=>{const t=c(e);let n;return t.srcElement?n=t.srcElement:t.target&&(n=t.target),n},u=e=>{const t=c(e);let n=0;return t.pageX?n=t.pageX:t.clientX&&(n=t.clientX),n},h=e=>{const t=c(e);let n=0;return t.pageY?n=t.pageY:t.clientY&&(n=t.clientY),n};let f,g;document.createEvent&&(f=(e,t,n)=>{let o=document.createEvent("Event");if(o)return n||(n={}),n.canBubble||(n.canBubble=!0),n.cancellable||(n.cancellable=!0),o.initEvent("Event",n.canBubble,n.cancellable),o},g=function(e){document.dispatchEvent(e)});function w(e,t,n){return n instanceof e||(typeof n).toLowerCase()===t}function m(e){return w(String,"string",e)}function p(e){return w(Object,"object",e)}function v(e){let t=e.nodeName;return t=t||"","textarea"===t.toLowerCase()}function b(e){let t=typeof e,n=e.nodeName;return n=n||"","input"===n.toLowerCase()||"input"===t.toLowerCase()&&void 0!==t.type}l(window,"load",(function(){let e,t,n=r.onLoadEventStack;e=n.length;for(let o=0;o<e;o+=1)t=n[o],t&&"function"===(typeof t).toLowerCase()&&t()}),!1);const y=/^#(?:([\w-]+)|(\w+)|\.([\w-]+))$/;function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!m(e)&&p(e)&&e.hasOwnProperty("objectName")&&"selector"===e.objectName)return e;let n,o=e;e instanceof HTMLElement&&(e.id?o="#"+e.id:(o=e.nodeName.toLowerCase(),e.className.length>0&&(o+="."+e.className.split(" ").join(" .")))),y.test(o)?(n=t.querySelector(o),n=n?[n]:[]):(n=t.querySelectorAll(o),n=n&&n.length>0?n:[]);const i={length:n.length,objectName:"selector",get:function(e){return n[e]},toArray:function(){return Array.from(n)},each:function(e){i.toArray().forEach(e)}};for(let e=0;e<i.length;e++)i[e]=n[e];return i}const W=function(e,t){-1===e?.className?.indexOf(t)&&(e.className+=" "+t)},x=function(e,t,n){let o,i=document.body;if(t&&m(t)?i=document.getElementById(t):t&&(i=t),!e)return i;if(n&&n.id&&(o=document.getElementById(n.id)),o||(o=document.createElement(e)),!o)return o;if(i.appendChild(o),o&&n){let e;for(e in n)try{o[e]=n[e]}catch(e){}n.className&&W(o,n.className)}return o},C=function(e,t,n){let o,i,a=T(e);if(!(a.length<=0)&&(n||(n=0),!(n>=a.length)&&a[n]))return o=a.get(n),i=new String(o.tagName).toLowerCase(),(t||""===t)&&function(e,t){m(e)||w(Number,"number",e)?b(i)||b(t)||v(t)?t.value=e:t.innerHTML=e:t&&p(e)&&t.appendChild(e)}(t,o),b(i)||b(o)||v(o)?o.value:m(o.innerHTML)?o.innerHTML:void 0},k=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).getElementById(e)},S=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e)};function A(){const e=this,t=(t,n)=>{let o,i,a=e;return o=c(t),i=d(o),a.moving&&a.dragableCoverMask.id===i.id&&(a.posX=u(),a.posY=h(),a[n].style.left=a.posX-a.offsetX+"px",a[n].style.top=a.posY-a.offsetY+"px"),a},n=()=>{let e;window.getSelection?(e=window.getSelection(),e&&e.empty?e.empty():e&&e.removeAllRanges&&e.removeAllRanges()):document.selection&&document.selection.clear?document.selection.clear():document.selection&&document.selection.empty&&document.selection.empty()},o=(t,n,o)=>{const i=k(n),a=k(o||n);i&&a&&(t?(e.dragableObjects[a.id]=i,l(a,"mousedown",e.mousedown,!1)):(e.dragableObjects[a.id]=null,s(a,"mousedown",e.mousedown,!1)))};return this.dragableObjects=[],this.initialize=()=>{const t=e;t.isInitialized||(t.dragableCoverMask=k("-dragndrop-enabled-x"),t.dragableCoverMask||(t.dragableCoverMask=x("div",document.body),t.dragableCoverMask.id="-dragndrop-enabled-x"),t.dragableCoverMask.style.display="none",l(document,"mousemove",t.mousemove,!1),l(document,"mouseup",t.mouseup,!1),t.isInitialized=!0)},this.findDragableParent=t=>{const n=e;if(t&&t.nodeName&&"body"!==t.nodeName.toLowerCase())return n.dragableObjects[t.id]?t:n.findDragableParent(t.parentNode)},this.mousemove=e=>(t(e,"dragableCoverMask"),n(),!1),this.mouseup=e=>{const o=t(e,"currentDragObject");o.dragableCoverMask.style.display="none",o.currentDragObject=null,o.moving=!1,n()},this.mousedown=function(t){const n=e,o=c(t);let i=d(o);if(i=n.findDragableParent(i),!n.dragableObjects[i.id])return n.moving=!1,!1;n.currentDragObject=n.dragableObjects[i.id],document.body.appendChild(n.currentDragObject),n.posX=u(),n.posY=h(),n.offsetX=n.posX-n.currentDragObject.offsetLeft,n.offsetY=n.posY-n.currentDragObject.offsetTop;let a=n.dragableCoverMask;return a.style.position="absolute",a.style.display="block",a.style.border="2px solid black",a.style.left=n.currentDragObject.offsetLeft+"px",a.style.top=n.currentDragObject.offsetTop+"px",a.style.width=n.currentDragObject.offsetWidth+"px",a.style.height=n.currentDragObject.offsetHeight+"px",a.style.zIndex=1e5,n.moving=!0,!1},this.setDragable=function(e,t){o(!0,e,t)},this.setNONDragable=function(e,t){o(!1,e,t)},this}function E(e,t,n,o,i,a){const r=k(a);r?(this.mainWindow=r,this.titleBar=S(".WebWindowTitle",this.mainWindow)[0],this.titleBar.id="WebWindowTitle"+a,this.windowArea=S(".WebWindowArea",this.mainWindow)[0],this.windowArea.id="WebWindowArea"+a,this.footerArea=S(".WebWindowFooter",this.mainWindow)[0],this.footerArea.id="WebWindowFooter"+a):(this.mainWindow=x("div",document.body,{className:"WebWindowMain",id:a}),this.mainWindow.style.left=t+"px",this.mainWindow.style.top=n+"px",this.mainWindow.style.width=o+"px",this.mainWindow.style.height=i+"px",this.titleBar=x("div",this.mainWindow,{className:"WebWindowTitle",id:"WebWindowTitle"+a}),this.windowArea=x("div",this.mainWindow,{className:"WebWindowArea",id:"WebWindowArea"+a}),this.footerArea=x("div",this.mainWindow,{className:"WebWindowFooter",id:"WebWindowFooter"+a}));x("span",this.titleBar,{className:"WebWindowTitleText"}).innerHTML=e;let l={className:"WebWindowButtonBox"};const s=x("span",this.titleBar,l);l={name:"WW"+a,onsubmit:"return false;"};const c=x("form",s,l);this.maximize=function(){return!1},this.minimize=function(){return!1},this.destroy=function(){return!1};const d=(e,t,n,o,i)=>{const a=x("button",e,{className:"WebWindowButton",name:n,id:n+t});a.innerHTML=o,a.onclick=i;let r=e.innerHTML;r=r.toLowerCase();const l=new RegExp("button class");for(;r.match(l);)r=r.replace(l,'button type="button" class')};d(c,a,"rollup","-",this.minimize),d(c,a,"rolldown","o",this.maximize),d(c,a,"destroy","X",this.destroy),this.windowArea.style.width=o+"px",this.titleBar.style.width=o+"px",this.footerArea.style.width=o+"px";const u=i-this.titleBar.offsetHeight-this.footerArea.offsetHeight;this.windowArea.style.height=u+"px",this.dragndrop=new A}function M(e){return Math.pow(e,2)}E.prototype.popToFront=function(e){const t=c(e);!function(e,t,n){let o,i,a,r;if(i=T(e),!(i.length<=0)&&(o=i.get(0),n&&n<i.length&&(o=i.get(n)),o))a=function(e,t){let n;e?(n=e.parentNode,n&&(n.nodeName.toLowerCase()!==t?a(n,t):r=n)):r=null},a(o,t)}(d(t),"div.WebWindowMain")},E.prototype.enableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setDragable(this.mainWindow.id,this.titleBar.id),l(this.mainWindow,"mousedown",e,!1)},E.prototype.disableDrag=function(){const e=this.popToFront;this.dragndrop.initialize(),this.dragndrop.setNONDragable(this.mainWindow.id,this.titleBar.id),s(this.mainWindow,"mousedown",e,!1)},E.prototype.setTitle=function(e){const t=this.titleBar.getElementsByTagName("span");t&&t.length>0&&(t[0].innerHTML=e)},E.prototype.setContent=function(e){C(this.windowArea,e)};function N(e){return e*Math.PI/180}function L(e,t,n,o){const i={canvas:null,ctx:null,width:0,height:0};let a;return i.canvas=x("canvas",t,{id:e}),i.canvas?(n&&(i.canvas.width=n),o&&(i.canvas.height=o),i.width=i.canvas.width,i.height=i.canvas.height,null!=i.canvas.getContext&&(i.ctx=i.canvas.getContext("2d"),function(e){const t="black";function n(e,t){return Math.sqrt(M(e)-M(t))}e.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},e.line=function(e,n,o,i,a){let r,l,s,c,d,u=0,h=0;r=this.ctx,a&&(c=a.color,d=a.rotateAngle),r.save(),r.beginPath(),d&&(l=Math.abs(e-o)/2,s=Math.abs(n-i)/2,u=e+l,h=n+s,r.translate(u,h),r.rotate(N(d))),r.moveTo(e-u,n-h),r.lineTo(o-u,i-h),r.fillStyle=c||t,r.fill(),r.strokeStyle=c||t,r.stroke(),r.restore()},e.circle=function(e,n,o,i){let a,r,l,s;r=this.ctx,i&&(l=i.color,s=i.fillStrokeClear),r.beginPath(),r.moveTo(e+o,n),r.arc(e,n,o,0,2*Math.PI,!0),a=s||"stroke",r[a+"Style"]=l||t,r[a]()},e.halfCircle=function(e,n,o,i){let a,r,l,s,c,d,u=0,h=0;r=this.ctx,i&&(l=i.color,s=i.rotateAngle,d=i.openTop,c=i.fillStrokeClear),r.save(),r.beginPath(),s&&(u=e,h=n,r.translate(u,h),r.rotate(N(s))),r.moveTo(e-o-u,n-h),r.arc(e-u,n-h,o,Math.PI,2*Math.PI,!0),d||r.lineTo(e-o-u,n-h),r.closePath(),a=c||"stroke",r[a+"Style"]=l||t,r[a](),r.restore()},e.oval=function(e,n,o,i,a){let r,l,s,c,d,u=0,h=0,f=.5522848,g=e-o/2,w=n-i/2,m=o/2*f,p=i/2*f,v=g+o,b=w+i,y=g+o/2,T=w+i/2;l=this.ctx,l.save(),a&&(s=a.color,c=a.fillStrokeClear,d=a.rotateAngle),l.beginPath(),d&&(u=y,h=T,l.translate(u,h),l.rotate(N(d))),l.moveTo(g-u,T-h),l.bezierCurveTo(g-u,T-p-h,y-m-u,w-h,y-u,w-h),l.bezierCurveTo(y+m-u,w-h,v-u,T-p-h,v-u,T-h),l.bezierCurveTo(v-u,T+p-h,y+m-u,b-h,y-u,b-h),l.bezierCurveTo(y-m-u,b-h,g-u,T+p-h,g-u,T-h),l.restore(),r=c||"stroke",l[r+"Style"]=s||t,l[r]()},e.rectangle=function(e,n,o,i,a){let r,l,s,c,d,u=0,h=0;l=this.ctx,a&&(s=a.color,c=a.rotateAngle,d=a.fillStrokeClear),l.save(),l.beginPath(),c&&(u=Math.round(e+o/2),h=Math.round(n+i/2),l.translate(u,h),l.rotate(N(c))),r=d||"stroke",l[r+"Style"]=s||t,l[r+"Rect"](e-u,n-h,o,i),l[r](),l.restore()},e.square=function(e,t,n,o){this.rectangle(e,t,n,n,o)},e.triangle=function(e,n,o,i,a,r,l){let s,c,d,u,h,f=0,g=0;s=this.ctx,l&&(d=l.color,u=l.rotateAngle,h=l.fillStrokeClear),s.save(),s.beginPath(),u&&(f=(e+o+a)/3,g=(n+i+r)/3,s.translate(f,g),s.rotate(N(u))),c=h||"stroke",s.moveTo(e-f,n-g),s.lineTo(o-f,i-g),s.lineTo(a-f,r-g),s.lineTo(e-f,n-g),s.closePath(),s[c+"Style"]=d||t,s[c](),s.restore()},e.equilateralTriangle=function(e,t,o,i){let a,r,l;i&&(l=i.orientation),r=o/2,a=n(o,r),"down"===l?this.triangle(e,t,e+o,t,e+r,t+a,i):this.triangle(e,t,e+o,t,e+r,t-a,i)},e.hexagon=function(e,o,i,a){let r,l,s,c,d,u,h,f=0,g=0;r=this.ctx,a&&(u=a.color,h=a.rotateAngle,d=a.fillStrokeClear),s=i/2,c=d||"stroke",l=n(i,s),r.save(),r.beginPath(),h&&(f=e,g=o,r.translate(f,g),r.rotate(N(h))),r.moveTo(e+s-i-f,o-l-g),r.lineTo(e+s-f,o-l-g),r.lineTo(e+i-f,o-g),r.lineTo(e+s-f,o+l-g),r.lineTo(e+s-i-f,o+l-g),r.lineTo(e-i-f,o-g),r.lineTo(e-i+s-f,o-l-g),r.closePath(),r[c+"Style"]=u||t,r[c](),r.restore()},e.octagon=function(e,n,o,i){let a,r,l,s,c,d,u,h=0,f=0;i&&(d=i.color,u=i.rotateAngle,c=i.fillStrokeClear),s=c||"stroke",l=o/2,r=Math.sqrt(Math.pow(o,2)+Math.pow(l,2)),a=this.ctx,a.save(),u&&(h=e,f=n,a.translate(h,f),a.rotate(N(u))),a.beginPath(),a.moveTo(e-l-h,n-r-f),a.lineTo(e+l-h,n-r-f),a.lineTo(e+r-h,n-l-f),a.lineTo(e+r-h,n+l-f),a.lineTo(e+l-h,n+r-f),a.lineTo(e-l-h,n+r-f),a.lineTo(e-r-h,n+l-f),a.lineTo(e-r-h,n-l-f),a.lineTo(e-l-h,n-r-f),a.closePath(),a[s+"Style"]=d||t,a[s](),a.restore()},e.setBackgroundColor=function(e){this.rectangle(0,0,this.width,this.height,{color:e||"white",fillStrokeClear:"fill"})},e.addtext=function(e,n,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.ctx.font=i.font||"16pt Calibri",this.ctx.fillStyle=i.color||t,this.ctx.fillText(o,e,n)}}(i),a=i),a):null}function O(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["12/6","0/0","18/9","6/3"];window.canvasRef.circle(e,t,n,{color:"red"}),window.canvasRef.line(e,t-n,e,t+n,{color:"red"}),window.canvasRef.line(e-n,t,e+n,t,{color:"red"});for(let o=0;o<360;o+=15)window.canvasRef.line(e-n,t,e+n,t,{rotateAngle:o,color:"red"});window.canvasRef.circle(e,t,n-20,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.line(e,t-n,e,t+n,{color:"red"}),window.canvasRef.line(e-n,t,e+n,t,{color:"red"});const i=10*o[0].length/2,a=10*o[1].length/2,r=10*o[2].length+5;window.canvasRef.addtext(e-i,t-n-10,o[0],{color:"red"}),window.canvasRef.addtext(e-a,t+n+20,o[1],{color:"red"}),window.canvasRef.addtext(e-n-r,t,o[2],{color:"red"}),window.canvasRef.addtext(e+n+10,t,o[3],{color:"red"})}function B(e,t,n){return 15*(+e+t/60+n/3600)}function D(){const e=document.getElementById("latitude").value||37.6904826,t=document.getElementById("longitude").value||-122.47267,n=document.getElementById("polarisRA").value.split(" "),o=(B(document.getElementById("polarisDec").value.split(" ")[0],27,48),function(e,t,n,o){const i=function(e,t){const n=6.697374558+.06570982441908*(t.getTime()/864e5+2440587.5-2451545)+1.00273790935*(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600)+e/15;return n<0?n+24:n}(e,new Date);let a=(i-n+360)%360;return a>180&&(a-=360),Number(a).toFixed(6)}(e,0,B(n[0],30,15))),i=Number(o/15).toFixed(6);window.canvasRef.rectangle(50,410,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.rectangle(50,410,800,500,{color:"black",fillStrokeClear:"fill"}),window.canvasRef.addtext(50,410,`Using latitude: ${e} and longitude: ${t}`,{color:"red"}),window.canvasRef.addtext(50,430,`Polaris hour angle: ${o} and clock time: ${i}`,{color:"red"})}var R;R=function(){const e=document.getElementById("main-window"),t=window.getComputedStyle(e),n=(new E("Polaris Hour Angle",t.offsetLeft,t.offsetTop,t.offsetWidth,t.offsetHeight,"main-window"),L("polaris-hour","canvas-container",800,500));window.canvasRef=n,O(200,180,150),O(550,180,100,["6","0","9","3"]),D(),window.setInterval(D,5e3)},r.onLoadEventStack.push(R)})();