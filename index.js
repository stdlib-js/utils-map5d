// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).map5d=t()}(this,(function(){"use strict";var r=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(e=t.length,r(e)===e)&&t.length>=0&&t.length<=4294967295;var e}var e=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,f=i.toString,l=i.__defineGetter__,c=i.__defineSetter__,a=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?u:function(r,t,e){var n,o,u,y;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(r,t)||p.call(r,t)?(n=r.__proto__,r.__proto__=i,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,y="set"in e,o&&(u||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,t,e.get),y&&c&&c.call(r,t,e.set),r};var y=o;function s(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function b(r){return"boolean"==typeof r}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return g&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=h()?function(r){var t,e,n,o,u;if(null==r)return v.call(r);e=r[w],u=w,t=null!=(o=r)&&d.call(o,u);try{r[w]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[w]=e:delete r[w],n}:function(r){return v.call(r)},_=Boolean.prototype.toString;var j=h();function E(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function S(r){return b(r)||E(r)}function T(){return new Function("return this;")()}s(S,"isPrimitive",b),s(S,"isObject",E);var O="object"==typeof self?self:null,k="object"==typeof window?window:null,A="object"==typeof global?global:null;var C=function(r){if(arguments.length){if(!b(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(O)return O;if(k)return k;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),B=C.document&&C.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;s(x,"REGEXP",G);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};function F(r){return null!==r&&"object"==typeof r}function L(r){var t,e,n,o;if(("Object"===(e=m(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return F(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(F,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(F));var M="function"==typeof e||"object"==typeof P||"function"==typeof B?function(r){return L(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?L(r).toLowerCase():t};function I(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}return function(r,e,n){var o,u,i,f,l,c,a,p,y,s,b,g,h,v,d,w,m,_,j;if(!t(r))throw new TypeError(I("0kg2a",r));if("function"!==M(e))throw new TypeError(I("0kg2S",e));for(s=r.length,o=[],d=0;d<s;d++){if(!t(c=r[d]))throw new TypeError(I("0kgCE",d,c));for(b=c.length,u=[],w=0;w<b;w++){if(!t(a=c[w]))throw new TypeError(I("0kgCF",d,w,a));for(g=a.length,i=[],m=0;m<g;m++){if(!t(p=a[m]))throw new TypeError(I("0kgCG",d,w,m,p));for(h=p.length,f=[],_=0;_<h;_++){if(!t(y=p[_]))throw new TypeError(I("0kgCH",d,w,m,_,y));for(v=y.length,l=[],j=0;j<v;j++)l.push(e.call(n,y[j],d,w,m,_,j,r));f.push(l)}i.push(f)}u.push(i)}o.push(u)}return o}}));
//# sourceMappingURL=index.js.map
