// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,o,n){var i,h,p,f,l,g,d,m,w,j,a,u,c,k,y,E,T,v,b;if(!r(s))throw new TypeError(t("0kg2a",s));if(!e(o))throw new TypeError(t("0kg2S",o));for(j=s.length,i=[],y=0;y<j;y++){if(g=s[y],!r(g))throw new TypeError(t("0kgCE",y,g));for(a=g.length,h=[],E=0;E<a;E++){if(d=g[E],!r(d))throw new TypeError(t("0kgCF",y,E,d));for(u=d.length,p=[],T=0;T<u;T++){if(m=d[T],!r(m))throw new TypeError(t("0kgCG",y,E,T,m));for(c=m.length,f=[],v=0;v<c;v++){if(w=m[v],!r(w))throw new TypeError(t("0kgCH",y,E,T,v,w));for(k=w.length,l=[],b=0;b<k;b++)l.push(o.call(n,w[b],y,E,T,v,b,s));f.push(l)}p.push(f)}h.push(p)}i.push(h)}return i}export{s as default};
//# sourceMappingURL=index.mjs.map
