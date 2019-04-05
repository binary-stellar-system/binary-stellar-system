!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){var n,a;if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;if(n=Object.create(null),r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=40)}({40:function(e,t,r){"use strict";var n,a,u,i,o,c,l;function f(e,t){var r=t?"black":"#FDB813";return[{x:n.a.subtract(a[0],e.x),y:n.a.subtract(a[1],e.y),diameter:t?19:18,color:r},{x:n.a.add(a[0],e.x),y:n.a.add(a[1],e.y),diameter:t?16:15,color:r}]}function s(e,t,r,a){var u=a?"black":"#019108";return[{x:n.a.subtract(e,r.x),y:n.a.subtract(t,r.y),diameter:a?6:5,color:u}]}r.r(t),n=r(9),c=o=0,onmessage=function(e){var t,r,d,h,m,p;e&&e.data&&e.data.setWidthHeight?(t=e.data.setWidthHeight[0],r=e.data.setWidthHeight[1],a=n.a.getRectangleCenter(t,r),d=n.a.getRectangleCorner(t,r),h=Math.floor(n.a.divide(d,3)),u=n.a.getCirclePoints(d),i=n.a.getCirclePoints(h),p=s((m=f(u[o],!1))[0].x,m[0].y,i[c],!1),postMessage({stars:{white:m},planets:{shownPlanet:p}}),l=setInterval(function(){var e,t,r=f(u[o],!0),n=s(r[0].x,r[0].y,i[c],!0);o=o>=360?0:++o,c=(c=c>=360?0:++c)>=360?0:++c,t=s((e=f(u[o],!1))[0].x,e[0].y,i[c],!1),postMessage({stars:{black:r,white:e},planets:{blackPlanet:n,shownPlanet:t}})},100)):e&&e.data&&e.data.stop&&clearInterval(l)}},9:function(e,t,r){"use strict";var n={add:function(){var e,t=0;for(e=0;e<arguments.length;e+=1)t+=+arguments[e];return t},subtract:function(e,t){return+e-+t},multiply:function(){var e,t=1;for(e=0;e<arguments.length;e+=1)t=+t*+arguments[e];return t},divide:function(e,t){return+e/+t},square:function(e){return Math.pow(e,2)},cube:function(e){return Math.pow(e,3)},computeLineLength:function(e,t,r,a){var u=n.subtract(r,e),i=n.subtract(a,t),o=n.add(n.square(u),n.square(i));return Math.sqrt(o)},computePerimeter:function(e,t,r,a,u,i,o,c){var l=n.computeLineLength(e,t,r,a),f=n.computeLineLength(r,a,u,i),s=n.computeLineLength(u,i,o,c),d=n.computeLineLength(o,c,e,t);return n.computePerimeterByLength(l,f,s,d)},computePerimeterByLength:function(e,t,r,a){return n.add(e,t,r,a)},computePerimeterOfSquare:function(e){return n.multiply(e,4)},areaOfTriangle:function(e,t){return n.multiply(e,t,.5)},areaOfTrapizoid:function(e,t,r){var a,u;return a=n.add(t,r),u=n.divide(a,2),n.multiply(e,u)},pythagorean:function(e,t){return Math.sqrt(n.square(e)+n.square(t))},average:function(){var e=arguments,t=0;return Object.keys(arguments).forEach(function(r){t=n.add(t,e[r])}),n.divide(t,arguments.length)},areaOfCircle:function(e){return n.multiply(Math.PI,n.square(e))},circumferenceOfACircle:function(e){return n.multiply(2,Math.PI,e)},surfaceAreaCone:function(e,t){var r=Math.sqrt(n.multiply(Math.PI,n.square(e))),a=n.add(n.square(e),n.square(t)),u=n.multiply(e,Math.PI,a);return n.add(r,u)},volumeCone:function(e,t){return n.multiply(1/3,Math.PI,n.square(e),t)},surfaceAreaCylinder:function(e,t){var r=n.multiply(2,Math.PI,n.square(e)),a=n.multiply(2,Math.PI,e,t);return n.add(r,a)},volumeCylinder:function(e,t){return n.multiply(Math.PI,n.square(e),t)},surfaceAreaSphere:function(e){return n.multiply(4,Math.PI,n.square(e))},volumeSphere:function(e){return n.multiply(4/3,Math.PI,n.cube(e))},inverse:function(e){return n.multiply(-1,e)},oneOver:function(e){return n.divide(1,e)},factorial:function(e){if(+e<=1)return 1;var t=+e-1;return n.multiply(e,n.factorial(t))},hexidecimal:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],convertFromBaseTenToBaseX:function(e,t){for(var r,a=t,u=n.hexidecimal[a%e];a>=e;)r=n.subtract(a,a%e),u=(a=n.divide(r,e))>=e?n.hexidecimal[a%e]+u:n.hexidecimal[a]+u;return u},convertFromBaseXToBaseTen:function(e,t){var r,a,u,i=0,o=1;function c(e){for(var t=0;t<n.hexidecimal.length;t+=1)if(n.hexidecimal[t]===e)return t;return""}for(;o<=t.length;)r=Math.pow(e,n.subtract(o,1)),a=n.subtract(t.length,o),u=c(t.charAt(a)),i=n.add(i,n.multiply(u,r)),o++;return i},getCirclePoint:function(e,t){var r=n.degreesToRadians(t),a=n.multiply(e,Math.cos(r)),u=n.multiply(e,Math.sin(r));return{x:Math.round(a),y:Math.round(u)}},getCirclePoints:function(e){var t,r,a=[];for(t=0;t<=360;t++)r=n.getCirclePoint(e,t),a.push(r);return a},getRectangleCenter:function(e,t){return[Math.floor(n.divide(e,2)),Math.floor(n.divide(t,2))]},getRectangleCorner:function(e,t){var r=n.getRectangleCenter(e,t),a=Math.ceil(n.divide(r[0],2)),u=Math.ceil(n.divide(r[1],2));return a<u?a:u},degreesToRadians:function(e){return e*Math.PI/180},radiansToDegrees:function(e){return 180*e/Math.PI},generateGUID:function(){var e,t,r,a,u,i=1e6*(new Date).getTime(),o=n.convertFromBaseTenToBaseX(16,i),c="";for(e=0,t=o.length;e<t;e+=1)c+=o[e]<<1;for(r="",a=0,u=(c=o+n.convertFromBaseTenToBaseX(16,c)).length;a<u;a+=1)r+=c[a],a>0&&a%5==0&&a%10!=0&&(r+="-"),a>0&&a%9==0&&(r+="-");return"-"===r.substring(r.length-1)&&(r=r.substring(0,r.length-1)),r}};t.a=n}});
//# sourceMappingURL=starSystem.js.source.map