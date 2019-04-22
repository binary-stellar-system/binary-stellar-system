!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){var r,i;if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;if(r=Object.create(null),n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=42)}({27:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},28:function(t,e){function n(t,e){var n,r;for(n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},42:function(t,e,n){"use strict";var r,i,o,u,s,a,c,l;n.r(e),r=n(27),i=n.n(r),o=n(28),u=n.n(o),s=n(9),l=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i()(this,t),this.color=e||"red",this.radius=n||5,this.hiddenRadius=Object(s.a)(this.radius,1),this.direction=r.direction&&"clockwise"===r.direction?s.a:s.k,this.angle=r.startAngle||0,this.speed=r.speed||1}return u()(t,[{key:"setupPoints",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,e=arguments.length>1?arguments[1]:void 0;this.points=t!==e&&e?Object(s.g)(t,e):Object(s.e)(t)}},{key:"increment",value:function(){this.angle=this.direction(this.angle,this.speed),this.angle<0?this.angle=360:this.angle>360&&(this.angle=0)}},{key:"getCurrentPosition",value:function(t,e){return{x:this.direction(t.x,this.points[this.angle].x),y:this.direction(t.y,this.points[this.angle].y),diameter:e?this.radius:this.hiddenRadius,color:e?this.color:"black"}}},{key:"getHiddenPosition",value:function(t){return this.getCurrentPosition(t,!1)}},{key:"getVisiblePosition",value:function(t){return Object(s.getCurrentPosition)(t,!0)}}]),t}(),onmessage=function(t){var e,n,r,i,o,u,f,h,d,g,p,b,P,v,y,M,O;t&&t.data&&t.data.setWidthHeight?(e=t.data.setWidthHeight[0],n=t.data.setWidthHeight[1],a=Object(s.h)(e,n),r=Object(s.d)(Object(s.i)(e,n),1.25),(i=new l("#FDB813",24,{direction:"counterClockwise",startAngle:180})).setupPoints(r),(o=new l("#FDB813",18,{direction:"counterClockwise",startAngle:0})).setupPoints(r),u=[i.getVisiblePosition(a),o.getVisiblePosition(a)],f=Math.floor(Object(s.d)(r,e>600?3:1.65)),(h=new l("#17e3ea",3,{direction:"counterClockwise",startAngle:90,speed:5})).setupPoints(f),d=new l("#17e3ea",7,{direction:"counterClockwise",startAngle:180,speed:3}),g=Object(s.a)(f,e>600?28:17),p=Object(s.a)(g,e>600?50:8),d.setupPoints(g,p),b=new l("#17e3ea",e>600?6:0,{direction:"counterClockwise",startAngle:270,speed:1}),P=Object(s.a)(r,75),v=Object(s.a)(P,55),b.setupPoints(P,v),y=[h.getVisiblePosition(u[0])],M=[d.getVisiblePosition(u[0])],O=[b.getVisiblePosition(u[0])],postMessage({stars:{white:u},planets:{shownPlanet:y.concat(M,O)}}),c=setInterval(function(){var t,e,n,r,u,c,l=[i.getHiddenPosition(a),o.getHiddenPosition(a)],f=[h.getHiddenPosition(l[0]),d.getHiddenPosition(l[0]),b.getHiddenPosition(l[0])];i.increment(),o.increment(),h.increment(),d.increment(),b.increment(),t=[i.getCurrentPosition(a,!0),o.getCurrentPosition(a,!0)],e=[h.getVisiblePosition(t[0]),d.getVisiblePosition(t[0]),b.getVisiblePosition(t[0])],n=Object(s.c)(e[1].x,e[1].y,e[2].x,e[2].y),r=Math.ceil(Object(s.j)(n)),u=Object(s.j)(Object(s.a)(7,6)),c=Object(s.j)(Object(s.a)(7,5,6,5)),r===u&&console.log("Touching %s %s %s %s",e[1].x,e[1].y,e[2].x,e[2].y),r===c&&console.log("Close touching %s %s %s %s",e[1].x,e[1].y,e[2].x,e[2].y),r<u&&console.log("Intersecting %s %s %s %s",e[1].x,e[1].y,e[2].x,e[2].y),r<c&&console.log("Close intersecting %s %s %s %s",e[1].x,e[1].y,e[2].x,e[2].y),postMessage({stars:{black:l,white:t},planets:{blackPlanet:f,shownPlanet:e}})},100)):t&&t.data&&t.data.stop&&clearInterval(c)}},9:function(t,e,n){"use strict";var r,i;function o(){var t,e=0;for(t=0;t<arguments.length;t+=1)e+=+arguments[t];return e}function u(t,e){return+t-+e}function s(){var t,e=1;for(t=0;t<arguments.length;t+=1)e=+e*+arguments[t];return e}function a(t,e){return+t/+e}function c(t){return Math.pow(t,2)}function l(t){return Math.pow(t,3)}function f(t,e,n,r){var i=u(n,t),s=u(r,e),a=o(c(i),c(s));return Math.sqrt(a)}function h(t,e,n,r){return o(t,e,n,r)}function d(t,e){for(var n=e,i=r[n%t];n>=t;)i=(n=a(u(n,n%t),t))>=t?r[n%t]+i:r[n]+i;return i}function g(t,e,n){var r=O(n),i=s(t,Math.cos(r)),o=s(e,Math.sin(r));return{x:Math.round(i),y:Math.round(o)}}function p(t,e){var n,r,i=[];for(n=0;n<=360;n++)r=g(t,e,n),i.push(r);return i}function b(t,e){var n=O(e),r=s(t,Math.cos(n)),i=s(t,Math.sin(n));return{x:Math.round(r),y:Math.round(i)}}function P(t){var e,n,r=[];for(e=0;e<=360;e++)n=b(t,e),r.push(n);return r}function v(t,e,n,r){var i=c(u(t,n)),s=c(u(e,r));return Math.sqrt(o(i,s))}function y(t,e){return{x:Math.floor(a(t,2)),y:Math.floor(a(e,2))}}function M(t,e){var n=y(t,e),r=Math.ceil(a(n.x,2)),i=Math.ceil(a(n.y,2));return r<i?r:i}function O(t){return t*Math.PI/180}n.d(e,"a",function(){return o}),n.d(e,"k",function(){return u}),n.d(e,"d",function(){return a}),n.d(e,"j",function(){return c}),n.d(e,"g",function(){return p}),n.d(e,"e",function(){return P}),n.d(e,"c",function(){return v}),n.d(e,"h",function(){return y}),n.d(e,"i",function(){return M}),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],i={add:o,subtract:u,multiply:s,divide:a,square:c,cube:l,computeLineLength:f,computePerimeter:function(t,e,n,r,i,o,u,s){return h(f(t,e,n,r),f(n,r,i,o),f(i,o,u,s),f(u,s,t,e))},computePerimeterByLength:h,computePerimeterOfSquare:function(t){return s(t,4)},areaOfTriangle:function(t,e){return s(t,e,.5)},areaOfTrapizoid:function(t,e,n){return s(t,a(o(e,n),2))},pythagorean:function(t,e){return Math.sqrt(c(t)+c(e))},average:function(){var t=arguments,e=0;return Object.keys(arguments).forEach(function(n){e=o(e,t[n])}),a(e,arguments.length)},areaOfCircle:function(t){return s(Math.PI,c(t))},circumferenceOfACircle:function(t){return s(2,Math.PI,t)},surfaceAreaCone:function(t,e){var n=Math.sqrt(s(Math.PI,c(t))),r=o(c(t),c(e));return o(n,s(t,Math.PI,r))},volumeCone:function(t,e){return s(1/3,Math.PI,c(t),e)},surfaceAreaCylinder:function(t,e){return o(s(2,Math.PI,c(t)),s(2,Math.PI,t,e))},volumeCylinder:function(t,e){return s(Math.PI,c(t),e)},surfaceAreaSphere:function(t){return s(4,Math.PI,c(t))},volumeSphere:function(t){return s(4/3,Math.PI,l(t))},inverse:function(t){return s(-1,t)},oneOver:function(t){return a(1,t)},factorial:function t(e){return+e<=1?1:s(e,t(+e-1))},convertFromBaseTenToBaseX:d,convertFromBaseXToBaseTen:function(t,e){var n,i,a=0,c=1;function l(t){var e,n,i="";for(e=0,n=r.length;e<n;e+=1)if(r[e]===t){i=e;break}return i}for(;c<=e.length;)n=Math.pow(t,u(c,1)),i=u(e.length,c),a=o(a,s(l(e.charAt(i)),n)),c++;return a},getEllipsePoint:g,getEllipsePoints:p,getCirclePoint:b,getCirclePoints:P,distanceBetweenCirclesCenters:v,getRectangleCenter:y,getRectangleCorner:M,degreesToRadians:O,radiansToDegrees:function(t){return 180*t/Math.PI},generateGUID:function(){var t,e,n,r,i,o=d(16,1e6*(new Date).getTime()),u="";for(t=0,e=o.length;t<e;t+=1)u+=o[t]<<1;for(n="",r=0,i=(u=o+d(16,u)).length;r<i;r+=1)n+=u[r],r>0&&r%5==0&&r%10!=0&&(n+="-"),r>0&&r%9==0&&(n+="-");return"-"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n}},e.b=i}});
//# sourceMappingURL=starSystem.js.source.map