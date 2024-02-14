// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(i=r.length,e(i)===i)&&r.length>=0&&r.length<=4294967295;var i}var i=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function s(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+o(n):o(n)+e,t&&(e="-"+e)),e}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!a(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=s(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=s(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===l.call(e.specifier)?l.call(i):c.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function u(e){return"string"==typeof e}var f=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,m=/\.0$/,E=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":f(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=h.call(i,x,"$1e"),i=h.call(i,E,"e"),i=h.call(i,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=h.call(i,w,"e+0$1"),i=h.call(i,b,"e-0$1"),e.alternate&&(i=h.call(i,v,"$1."),i=h.call(i,y,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===d.call(e.specifier)?d.call(i):g.call(i)}function S(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function V(e,r,i){var t=r-e.length;return t<0?e:e=i?e+S(t):S(t)+e}var T=String.fromCharCode,F=isNaN,$=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,t,n,a,o,c,l,f;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(u(t=e[l]))o+=t;else{if(r=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,F(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,F(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=p(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!F(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=F(a)?String(t.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=k(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=s(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=V(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,i,t,n;for(i=[],n=0,t=_.exec(e);t;)(r=e.slice(n,_.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=_.lastIndex,t=_.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function R(e){return"string"==typeof e}function Z(e){var r,i;if(!R(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}var O,L=Object.prototype,W=L.toString,P=L.__defineGetter__,G=L.__defineSetter__,B=L.__lookupGetter__,N=L.__lookupSetter__;O=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===W.call(i))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(B.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=L,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&G&&G.call(e,r,i.set),e};var U=O;function X(e,r,i){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function M(e){return"boolean"==typeof e}function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var q=z();function D(){return q&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";var ee=D()?function(e){var r,i,t;if(null==e)return H.call(e);i=e[Y],r=K(e,Y);try{e[Y]=void 0}catch(r){return H.call(e)}return t=H.call(e),r?e[Y]=i:delete e[Y],t}:function(e){return H.call(e)},re=Boolean,ie=Boolean.prototype.toString;var te=D();function ne(e){return"object"==typeof e&&(e instanceof re||(te?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function ae(e){return M(e)||ne(e)}function oe(){return new Function("return this;")()}X(ae,"isPrimitive",M),X(ae,"isObject",ne);var se="object"==typeof self?self:null,ce="object"==typeof window?window:null,le="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},pe="object"==typeof le?le:null,ue="object"==typeof globalThis?globalThis:null;var fe=function(e){if(arguments.length){if(!M(e))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(ue)return ue;if(se)return se;if(ce)return ce;if(pe)return pe;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=fe.document&&fe.document.childNodes,de=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var we=/^\s*function\s*([^(]*)/i;X(he,"REGEXP",we);var be=z();var ve=Object.prototype.toString;var ye="function"==typeof Symbol?Symbol:void 0,me="function"==typeof ye?ye.toStringTag:"";var Ee=be&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return ve.call(e);i=e[me],r=K(e,me);try{e[me]=void 0}catch(r){return ve.call(e)}return t=ve.call(e),r?e[me]=i:delete e[me],t}:function(e){return ve.call(e)};var xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ee(e)};function ke(e){return"number"==typeof e}function Se(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ve(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Se(n):Se(n)+e,t&&(e="-"+e)),e}var Te=String.prototype.toLowerCase,Fe=String.prototype.toUpperCase;function $e(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ke(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ve(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ve(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Fe.call(e.specifier)?Fe.call(i):Te.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function je(e){return"string"==typeof e}var Ie=Math.abs,_e=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Ce=String.prototype.replace,Re=/e\+(\d)$/,Ze=/e-(\d)$/,Oe=/^(\d+)$/,Le=/^(\d+)e/,We=/\.0$/,Pe=/\.0*e/,Ge=/(\..*[^0])0*e/;function Be(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ke(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ie(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ce.call(i,Ge,"$1e"),i=Ce.call(i,Pe,"e"),i=Ce.call(i,We,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ce.call(i,Re,"e+0$1"),i=Ce.call(i,Ze,"e-0$1"),e.alternate&&(i=Ce.call(i,Oe,"$1."),i=Ce.call(i,Le,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ae.call(e.specifier)?Ae.call(i):_e.call(i)}function Ne(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ue(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ne(t):Ne(t)+e}var Xe=String.fromCharCode,Me=isNaN,ze=Array.isArray;function qe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function De(e){var r,i,t,n,a,o,s,c,l;if(!ze(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(je(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=qe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Me(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Me(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=$e(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Me(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Me(a)?String(t.arg):Xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Be(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ve(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ue(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var He=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Je(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ke(e){var r,i,t,n;for(i=[],n=0,t=He.exec(e);t;)(r=e.slice(n,He.lastIndex-t[0].length)).length&&i.push(r),i.push(Je(t)),n=He.lastIndex,t=He.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Qe(e){return"string"==typeof e}function Ye(e){var r,i;if(!Qe(e))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ke(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return De.apply(null,r)}function er(e){return null!==e&&"object"==typeof e}function rr(e){var r,i,t,n;if(("Object"===(i=ee(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=we.exec(t.toString()))return r[1]}return er(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}X(er,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ye("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!xe(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(er));var ir="function"==typeof i||"object"==typeof de||"function"==typeof ge?function(e){return rr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?rr(e).toLowerCase():r};function tr(e){return"number"==typeof e}function nr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ar(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+nr(n):nr(n)+e,t&&(e="-"+e)),e}var or=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function cr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!tr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ar(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ar(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===sr.call(e.specifier)?sr.call(i):or.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function lr(e){return"string"==typeof e}var pr=Math.abs,ur=String.prototype.toLowerCase,fr=String.prototype.toUpperCase,gr=String.prototype.replace,dr=/e\+(\d)$/,hr=/e-(\d)$/,wr=/^(\d+)$/,br=/^(\d+)e/,vr=/\.0$/,yr=/\.0*e/,mr=/(\..*[^0])0*e/;function Er(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!tr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=gr.call(i,mr,"$1e"),i=gr.call(i,yr,"e"),i=gr.call(i,vr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=gr.call(i,dr,"e+0$1"),i=gr.call(i,hr,"e-0$1"),e.alternate&&(i=gr.call(i,wr,"$1."),i=gr.call(i,br,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fr.call(e.specifier)?fr.call(i):ur.call(i)}function xr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function kr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+xr(t):xr(t)+e}var Sr=String.fromCharCode,Vr=isNaN,Tr=Array.isArray;function Fr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $r(e){var r,i,t,n,a,o,s,c,l;if(!Tr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(lr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Vr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Vr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=cr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Vr(a)?String(t.arg):Sr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Er(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ar(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=kr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _r(e){var r,i,t,n;for(i=[],n=0,t=jr.exec(e);t;)(r=e.slice(n,jr.lastIndex-t[0].length)).length&&i.push(r),i.push(Ir(t)),n=jr.lastIndex,t=jr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ar(e){return"string"==typeof e}function Cr(e){var r,i,t;if(!Ar(e))throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=_r(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return $r.apply(null,i)}function Rr(e,i,t){var n,a,o,s,c,l,p,u,f,g,d,h,w,b,v,y,m,E,x;if(!r(e))throw new TypeError(Cr("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if("function"!==ir(i))throw new TypeError(Cr("invalid argument. Second argument must be a function. Value: `%s`.",i));for(g=e.length,n=[],v=0;v<g;v++){if(!r(l=e[v]))throw new TypeError(Cr("invalid argument. First argument must be a five-dimensional nested array. Index: `%u`. Value: `%s`.",v,l));for(d=l.length,a=[],y=0;y<d;y++){if(!r(p=l[y]))throw new TypeError(Cr("invalid argument. First argument must be a five-dimensional nested array. Indices: (%u, %u). Value: `%s`.",v,y,p));for(h=p.length,o=[],m=0;m<h;m++){if(!r(u=p[m]))throw new TypeError(Cr("invalid argument. First argument must be a five-dimensional nested array. Indices: (%u, %u, %u). Value: `%s`.",v,y,m,u));for(w=u.length,s=[],E=0;E<w;E++){if(!r(f=u[E]))throw new TypeError(Cr("invalid argument. First argument must be a five-dimensional nested array. Indices: (%u, %u, %u, %u). Value: `%s`.",v,y,m,E,f));for(b=f.length,c=[],x=0;x<b;x++)c.push(i.call(t,f[x],[v,y,m,E,x],e));s.push(c)}o.push(s)}a.push(o)}n.push(a)}return n}export{Rr as default};
//# sourceMappingURL=mod.js.map
