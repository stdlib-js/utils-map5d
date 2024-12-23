// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor,r=4294967295;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(n=t.length,e(n)===n)&&t.length>=0&&t.length<=r;var n}var n=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function a(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,E,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var T=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,a,c,s,f,p,g,h,d;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+S(d):S(d)+p)),a+=n.arg||"",c+=1}return a}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(B(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var I,$=Object.prototype,R=$.toString,P=$.__defineGetter__,L=$.__defineSetter__,G=$.__lookupGetter__,U=$.__lookupSetter__;I=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var Z=I;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,N=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=z()?function(e){var r,t,n,i,o;if(null==e)return H.call(e);t=e[D],o=D,r=null!=(i=e)&&N.call(i,o);try{e[D]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[D]=t:delete e[D],n}:function(e){return H.call(e)},K=Boolean,Q=Boolean.prototype.toString,Y=z();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return W(e)||ee(e)}M(re,"isPrimitive",W),M(re,"isObject",ee);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,ie="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!W(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;M(le,"REGEXP",se);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ue(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ue(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(ue,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ue));var ge="function"==typeof n||"object"==typeof ce||"function"==typeof ae?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?pe(e).toLowerCase():r};function he(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,n){var i,o,a,c,l,s,f,u,p,g,h,d,y,b,w,v,m,E,_;if(!t(e))throw new TypeError(he("1Vf2O",e));if("function"!==ge(r))throw new TypeError(he("1Vf2H",r));for(g=e.length,i=[],w=0;w<g;w++){if(!t(s=e[w]))throw new TypeError(he("1VfBR",w,s));for(h=s.length,o=[],v=0;v<h;v++){if(!t(f=s[v]))throw new TypeError(he("1VfBS",w,v,f));for(d=f.length,a=[],m=0;m<d;m++){if(!t(u=f[m]))throw new TypeError(he("1VfBT",w,v,m,u));for(y=u.length,c=[],E=0;E<y;E++){if(!t(p=u[E]))throw new TypeError(he("1VfBU",w,v,m,E,p));for(b=p.length,l=[],_=0;_<b;_++)l.push(r.call(n,p[_],[w,v,m,E,_],e));c.push(l)}a.push(c)}o.push(a)}i.push(o)}return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).map5d=r();
//# sourceMappingURL=browser.js.map