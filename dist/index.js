"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var T=q(function(A,S){
var d=require('@stdlib/assert-is-array-like-object/dist'),I=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function x(i,e,V){var g,f,h,p,w,s,v,o,m,y,c,b,E,F,r,a,t,n,l;if(!d(i))throw new TypeError(u('1Vf2O',i));if(!I(e))throw new TypeError(u('1Vf2H',e));for(y=i.length,g=[],r=0;r<y;r++){if(s=i[r],!d(s))throw new TypeError(u('1VfBR',r,s));for(c=s.length,f=[],a=0;a<c;a++){if(v=s[a],!d(v))throw new TypeError(u('1VfBS',r,a,v));for(b=v.length,h=[],t=0;t<b;t++){if(o=v[t],!d(o))throw new TypeError(u('1VfBT',r,a,t,o));for(E=o.length,p=[],n=0;n<E;n++){if(m=o[n],!d(m))throw new TypeError(u('1VfBU',r,a,t,n,m));for(F=m.length,w=[],l=0;l<F;l++)w.push(e.call(V,m[l],[r,a,t,n,l],i));p.push(w)}h.push(p)}f.push(h)}g.push(f)}return g}S.exports=x
});var j=T();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
