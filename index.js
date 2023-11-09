// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).map5d=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=4294967295;var t}var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,E,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e}var x=String.fromCharCode,k=isNaN,V=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,a,l,u,p;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",l=1,u=0;u<e.length;u++)if(s(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",l+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=B.exec(e);n;)(r=e.slice(i,B.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),i=B.lastIndex,n=B.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){return"string"==typeof e}function $(e){var r,t,n;if(!I(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var R,P=Object.prototype,G=P.toString,L=P.__defineGetter__,U=P.__defineSetter__,W=P.__lookupGetter__,Z=P.__lookupSetter__;R=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var M=R;function N(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=H()?function(e){var r,t,n,i,o;if(null==e)return q.call(e);t=e[K],o=K,r=null!=(i=e)&&D.call(i,o);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)},Y=Boolean,ee=Boolean.prototype.toString;var re=H();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return X(e)||te(e)}function ie(){return new Function("return this;")()}N(ne,"isPrimitive",X),N(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!X(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(le)return le;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,se=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;N(pe,"REGEXP",ge);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function de(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}N(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var be="function"==typeof t||"object"==typeof se||"function"==typeof fe?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function we(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,t,n){var i,o,a,c,l,u,f,s,p,g,h,d,y,b,w,v,m,E,_;if(!r(e))throw new TypeError(we("1Vf2O,GW",e));if("function"!==be(t))throw new TypeError(we("1Vf2H,G6",t));for(g=e.length,i=[],w=0;w<g;w++){if(!r(u=e[w]))throw new TypeError(we("1VfBR,Ot",w,u));for(h=u.length,o=[],v=0;v<h;v++){if(!r(f=u[v]))throw new TypeError(we("1VfBS,Ou",w,v,f));for(d=f.length,a=[],m=0;m<d;m++){if(!r(s=f[m]))throw new TypeError(we("1VfBT,Ov",w,v,m,s));for(y=s.length,c=[],E=0;E<y;E++){if(!r(p=s[E]))throw new TypeError(we("1VfBU,Ow",w,v,m,E,p));for(b=p.length,l=[],_=0;_<b;_++)l.push(t.call(n,p[_],[w,v,m,E,_],e));c.push(l)}a.push(c)}o.push(a)}i.push(o)}return i}}));
//# sourceMappingURL=index.js.map
