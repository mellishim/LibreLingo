(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{36:function(e,t,c){"use strict";
/*! js-cookie v3.0.0 | MIT */function n(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)e[n]=c[n]}return e}var i={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};var r=function e(t,c){function r(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=n({},c,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),i=t.write(i,e);var s="";for(var o in r)r[o]&&(s+="; "+o,!0!==r[o]&&(s+="="+r[o].split(";")[0]));return document.cookie=e+"="+i+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var c=document.cookie?document.cookie.split("; "):[],n={},r=0;r<c.length;r++){var s=c[r].split("="),o=s.slice(1).join("=");'"'===o[0]&&(o=o.slice(1,-1));try{var b=i.read(s[0]);if(n[b]=t.read(o,b),e===b)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){r(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(c)},converter:{value:Object.freeze(t)}})}(i,{path:"/"});t.a=r},436:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(46),r=c(33);function s(e){Object(n.h)(e,"svelte-zx1wlc",'@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");')}function o(e){let t;return{c(){t=Object(n.hb)("Fonts Visual Guide")},l(e){t=Object(n.s)(e,"Fonts Visual Guide")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function b(e){let t;return{c(){t=Object(n.hb)("Types of headings")},l(e){t=Object(n.s)(e,"Types of headings")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function a(e){let t;return{c(){t=Object(n.hb)("Title")},l(e){t=Object(n.s)(e,"Title")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function l(e){let t;return{c(){t=Object(n.hb)("Subtitle")},l(e){t=Object(n.s)(e,"Subtitle")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function j(e){let t;return{c(){t=Object(n.hb)("Sizes")},l(e){t=Object(n.s)(e,"Sizes")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function O(e){let t;return{c(){t=Object(n.hb)("Title 1")},l(e){t=Object(n.s)(e,"Title 1")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function u(e){let t;return{c(){t=Object(n.hb)("Title 2")},l(e){t=Object(n.s)(e,"Title 2")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function f(e){let t;return{c(){t=Object(n.hb)("Title 3")},l(e){t=Object(n.s)(e,"Title 3")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function $(e){let t;return{c(){t=Object(n.hb)("Title 4")},l(e){t=Object(n.s)(e,"Title 4")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function p(e){let t;return{c(){t=Object(n.hb)("Title 5")},l(e){t=Object(n.s)(e,"Title 5")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function d(e){let t;return{c(){t=Object(n.hb)("Title 6")},l(e){t=Object(n.s)(e,"Title 6")},m(e,c){Object(n.M)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function m(e){let t,c,s,m,g,h,v,k,z,w,y,x,B,T,C,M,P,S,D,E,I,Q,F,R,W,A,_,V,L,U,K,G;return c=new r.a({}),z=new i.a({props:{size:2,align:"centered",$$slots:{default:[o]},$$scope:{ctx:e}}}),x=new i.a({props:{size:3,textWeight:"semibold",$$slots:{default:[b]},$$scope:{ctx:e}}}),T=new i.a({props:{$$slots:{default:[a]},$$scope:{ctx:e}}}),M=new i.a({props:{isSubtitle:!0,$$slots:{default:[l]},$$scope:{ctx:e}}}),D=new i.a({props:{size:3,textWeight:"semibold",$$slots:{default:[j]},$$scope:{ctx:e}}}),I=new i.a({props:{size:1,$$slots:{default:[O]},$$scope:{ctx:e}}}),F=new i.a({props:{size:2,$$slots:{default:[u]},$$scope:{ctx:e}}}),W=new i.a({props:{size:3,$$slots:{default:[f]},$$scope:{ctx:e}}}),_=new i.a({props:{size:4,$$slots:{default:[$]},$$scope:{ctx:e}}}),L=new i.a({props:{size:5,$$slots:{default:[p]},$$scope:{ctx:e}}}),K=new i.a({props:{size:6,$$slots:{default:[d]},$$scope:{ctx:e}}}),{c(){t=Object(n.eb)(),Object(n.v)(c.$$.fragment),s=Object(n.eb)(),m=Object(n.C)("section"),g=Object(n.C)("div"),h=Object(n.C)("div"),v=Object(n.C)("div"),k=Object(n.C)("div"),Object(n.v)(z.$$.fragment),w=Object(n.eb)(),y=Object(n.C)("article"),Object(n.v)(x.$$.fragment),B=Object(n.eb)(),Object(n.v)(T.$$.fragment),C=Object(n.eb)(),Object(n.v)(M.$$.fragment),P=Object(n.eb)(),S=Object(n.C)("article"),Object(n.v)(D.$$.fragment),E=Object(n.eb)(),Object(n.v)(I.$$.fragment),Q=Object(n.eb)(),Object(n.v)(F.$$.fragment),R=Object(n.eb)(),Object(n.v)(W.$$.fragment),A=Object(n.eb)(),Object(n.v)(_.$$.fragment),V=Object(n.eb)(),Object(n.v)(L.$$.fragment),U=Object(n.eb)(),Object(n.v)(K.$$.fragment),this.h()},l(e){Object(n.X)('[data-svelte="svelte-4zvgmp"]',document.head).forEach(n.B),t=Object(n.r)(e),Object(n.o)(c.$$.fragment,e),s=Object(n.r)(e),m=Object(n.p)(e,"SECTION",{class:!0});var i=Object(n.n)(m);g=Object(n.p)(i,"DIV",{class:!0});var r=Object(n.n)(g);h=Object(n.p)(r,"DIV",{class:!0});var o=Object(n.n)(h);v=Object(n.p)(o,"DIV",{class:!0});var b=Object(n.n)(v);k=Object(n.p)(b,"DIV",{class:!0});var a=Object(n.n)(k);Object(n.o)(z.$$.fragment,a),w=Object(n.r)(a),y=Object(n.p)(a,"ARTICLE",{class:!0});var l=Object(n.n)(y);Object(n.o)(x.$$.fragment,l),B=Object(n.r)(l),Object(n.o)(T.$$.fragment,l),C=Object(n.r)(l),Object(n.o)(M.$$.fragment,l),l.forEach(n.B),P=Object(n.r)(a),S=Object(n.p)(a,"ARTICLE",{class:!0});var j=Object(n.n)(S);Object(n.o)(D.$$.fragment,j),E=Object(n.r)(j),Object(n.o)(I.$$.fragment,j),Q=Object(n.r)(j),Object(n.o)(F.$$.fragment,j),R=Object(n.r)(j),Object(n.o)(W.$$.fragment,j),A=Object(n.r)(j),Object(n.o)(_.$$.fragment,j),V=Object(n.r)(j),Object(n.o)(L.$$.fragment,j),U=Object(n.r)(j),Object(n.o)(K.$$.fragment,j),j.forEach(n.B),a.forEach(n.B),b.forEach(n.B),o.forEach(n.B),r.forEach(n.B),i.forEach(n.B),this.h()},h(){document.title="Fonts Visual Guide - LibreLingo",Object(n.j)(y,"class","tile is-child notification is-primary p-4"),Object(n.j)(S,"class","tile is-child notification is-primary p-4"),Object(n.j)(k,"class","tile is-parent is-vertical"),Object(n.j)(v,"class","tile is-vertical is-8"),Object(n.j)(h,"class","tile is-ancestor"),Object(n.j)(g,"class","container"),Object(n.j)(m,"class","section")},m(e,i){Object(n.M)(e,t,i),Object(n.Q)(c,e,i),Object(n.M)(e,s,i),Object(n.M)(e,m,i),Object(n.g)(m,g),Object(n.g)(g,h),Object(n.g)(h,v),Object(n.g)(v,k),Object(n.Q)(z,k,null),Object(n.g)(k,w),Object(n.g)(k,y),Object(n.Q)(x,y,null),Object(n.g)(y,B),Object(n.Q)(T,y,null),Object(n.g)(y,C),Object(n.Q)(M,y,null),Object(n.g)(k,P),Object(n.g)(k,S),Object(n.Q)(D,S,null),Object(n.g)(S,E),Object(n.Q)(I,S,null),Object(n.g)(S,Q),Object(n.Q)(F,S,null),Object(n.g)(S,R),Object(n.Q)(W,S,null),Object(n.g)(S,A),Object(n.Q)(_,S,null),Object(n.g)(S,V),Object(n.Q)(L,S,null),Object(n.g)(S,U),Object(n.Q)(K,S,null),G=!0},p(e,[t]){const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),z.$set(c);const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),x.$set(n);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),T.$set(i);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),M.$set(r);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),D.$set(s);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),I.$set(o);const b={};1&t&&(b.$$scope={dirty:t,ctx:e}),F.$set(b);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),W.$set(a);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),_.$set(l);const j={};1&t&&(j.$$scope={dirty:t,ctx:e}),L.$set(j);const O={};1&t&&(O.$$scope={dirty:t,ctx:e}),K.$set(O)},i(e){G||(Object(n.jb)(c.$$.fragment,e),Object(n.jb)(z.$$.fragment,e),Object(n.jb)(x.$$.fragment,e),Object(n.jb)(T.$$.fragment,e),Object(n.jb)(M.$$.fragment,e),Object(n.jb)(D.$$.fragment,e),Object(n.jb)(I.$$.fragment,e),Object(n.jb)(F.$$.fragment,e),Object(n.jb)(W.$$.fragment,e),Object(n.jb)(_.$$.fragment,e),Object(n.jb)(L.$$.fragment,e),Object(n.jb)(K.$$.fragment,e),G=!0)},o(e){Object(n.kb)(c.$$.fragment,e),Object(n.kb)(z.$$.fragment,e),Object(n.kb)(x.$$.fragment,e),Object(n.kb)(T.$$.fragment,e),Object(n.kb)(M.$$.fragment,e),Object(n.kb)(D.$$.fragment,e),Object(n.kb)(I.$$.fragment,e),Object(n.kb)(F.$$.fragment,e),Object(n.kb)(W.$$.fragment,e),Object(n.kb)(_.$$.fragment,e),Object(n.kb)(L.$$.fragment,e),Object(n.kb)(K.$$.fragment,e),G=!1},d(e){e&&Object(n.B)(t),Object(n.z)(c,e),e&&Object(n.B)(s),e&&Object(n.B)(m),Object(n.z)(z),Object(n.z)(x),Object(n.z)(T),Object(n.z)(M),Object(n.z)(D),Object(n.z)(I),Object(n.z)(F),Object(n.z)(W),Object(n.z)(_),Object(n.z)(L),Object(n.z)(K)}}}class g extends n.b{constructor(e){super(),Object(n.L)(this,e,null,m,n.Z,{},s)}}t.default=g},46:function(e,t,c){"use strict";var n=c(0);function i(e){Object(n.h)(e,"svelte-k5ikha","@keyframes svelte-k5ikha-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.title.svelte-k5ikha:not(:last-child),.subtitle.svelte-k5ikha:not(:last-child){margin-bottom:1.5rem}.title.svelte-k5ikha,.subtitle.svelte-k5ikha{word-break:break-word}.title.svelte-k5ikha{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title.is-1.svelte-k5ikha{font-size:3rem}.title.is-2.svelte-k5ikha{font-size:2.5rem}.title.is-3.svelte-k5ikha{font-size:2rem}.title.is-4.svelte-k5ikha{font-size:1.5rem}.title.is-5.svelte-k5ikha{font-size:1.25rem}.title.is-6.svelte-k5ikha{font-size:1rem}.title.is-7.svelte-k5ikha{font-size:0.75rem}.subtitle.svelte-k5ikha{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle.is-1.svelte-k5ikha{font-size:3rem}.subtitle.is-2.svelte-k5ikha{font-size:2.5rem}.subtitle.is-3.svelte-k5ikha{font-size:2rem}.subtitle.is-4.svelte-k5ikha{font-size:1.5rem}.subtitle.is-5.svelte-k5ikha{font-size:1.25rem}.subtitle.is-6.svelte-k5ikha{font-size:1rem}.subtitle.is-7.svelte-k5ikha{font-size:0.75rem}")}function r(e){let t,c,i;const r=e[9].default,s=Object(n.y)(r,e,e[8],null);return{c(){t=Object(n.C)("h1"),s&&s.c(),this.h()},l(e){t=Object(n.p)(e,"H1",{class:!0});var c=Object(n.n)(t);s&&s.l(c),c.forEach(n.B),this.h()},h(){Object(n.j)(t,"class",c=Object(n.T)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?"has-text-weight-"+e[6]:""}\n  ${e[7]?"has-text-"+e[7]:""}`)+" svelte-k5ikha"),Object(n.ib)(t,"title",!e[3]),Object(n.ib)(t,"subtitle",e[3]),Object(n.ib)(t,"is-spaced",e[4])},m(e,c){Object(n.M)(e,t,c),s&&s.m(t,null),i=!0},p(e,[o]){s&&s.p&&(!i||256&o)&&Object(n.mb)(s,r,e,e[8],i?Object(n.G)(r,e[8],o,null):Object(n.F)(e[8]),null),(!i||231&o&&c!==(c=Object(n.T)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?"has-text-weight-"+e[6]:""}\n  ${e[7]?"has-text-"+e[7]:""}`)+" svelte-k5ikha"))&&Object(n.j)(t,"class",c),239&o&&Object(n.ib)(t,"title",!e[3]),239&o&&Object(n.ib)(t,"subtitle",e[3]),247&o&&Object(n.ib)(t,"is-spaced",e[4])},i(e){i||(Object(n.jb)(s,e),i=!0)},o(e){Object(n.kb)(s,e),i=!1},d(e){e&&Object(n.B)(t),s&&s.d(e)}}}function s(e,t,c){let{$$slots:n={},$$scope:i}=t,{sizeMobile:r=null}=t,{sizeTablet:s=null}=t,{sizeDesktop:o=null}=t,{isSubtitle:b=!1}=t,{isSpaced:a=!1}=t,{size:l=(b?5:3)}=t,{textWeight:j=null}=t,{align:O=null}=t;return e.$$set=e=>{"sizeMobile"in e&&c(0,r=e.sizeMobile),"sizeTablet"in e&&c(1,s=e.sizeTablet),"sizeDesktop"in e&&c(2,o=e.sizeDesktop),"isSubtitle"in e&&c(3,b=e.isSubtitle),"isSpaced"in e&&c(4,a=e.isSpaced),"size"in e&&c(5,l=e.size),"textWeight"in e&&c(6,j=e.textWeight),"align"in e&&c(7,O=e.align),"$$scope"in e&&c(8,i=e.$$scope)},[r,s,o,b,a,l,j,O,i,n]}class o extends n.b{constructor(e){super(),Object(n.L)(this,e,s,r,n.Z,{sizeMobile:0,sizeTablet:1,sizeDesktop:2,isSubtitle:3,isSpaced:4,size:5,textWeight:6,align:7},i)}}t.a=o},48:function(e,t,c){"use strict";const n=c(49),i=c(50),r=new WeakMap;e.exports=(e,{cacheKey:t,cache:c=new Map,maxAge:s}={})=>{"number"==typeof s&&i(c);const o=function(...n){const i=t?t(n):n[0],r=c.get(i);if(r)return r.data;const o=e.apply(this,n);return c.set(i,{data:o,maxAge:s?Date.now()+s:1/0}),o};try{n(o,e)}catch(e){}return r.set(o,c),o},e.exports.clear=e=>{if(!r.has(e))throw new Error("Can't clear a function that was not memoized!");const t=r.get(e);"function"==typeof t.clear&&t.clear()}},49:function(e,t,c){"use strict";const n=(e,t,c,n)=>{if("length"===c||"prototype"===c)return;if("arguments"===c||"caller"===c)return;const r=Object.getOwnPropertyDescriptor(e,c),s=Object.getOwnPropertyDescriptor(t,c);!i(r,s)&&n||Object.defineProperty(e,c,s)},i=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},r=(e,t)=>`/* Wrapped ${e}*/\n${t}`,s=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),o=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");e.exports=(e,t,{ignoreNonConfigurable:c=!1}={})=>{const{name:i}=e;for(const i of Reflect.ownKeys(t))n(e,t,i,c);return((e,t)=>{const c=Object.getPrototypeOf(t);c!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,c)})(e,t),((e,t,c)=>{const n=""===c?"":`with ${c.trim()}() `,i=r.bind(null,n,t.toString());Object.defineProperty(i,"name",o),Object.defineProperty(e,"toString",{...s,value:i})})(e,t,i),e}},50:function(e,t,c){"use strict";var n=this&&this.__awaiter||function(e,t,c,n){return new(c||(c=Promise))((function(i,r){function s(e){try{b(n.next(e))}catch(e){r(e)}}function o(e){try{b(n.throw(e))}catch(e){r(e)}}function b(e){e.done?i(e.value):new c((function(t){t(e.value)})).then(s,o)}b((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(c(51));function s(e,t="maxAge"){let c,i,s;const o=()=>n(this,void 0,void 0,(function*(){if(void 0!==c)return;const o=o=>n(this,void 0,void 0,(function*(){s=r.default();const n=o[1][t]-Date.now();return n<=0?(e.delete(o[0]),void s.resolve()):(c=o[0],i=setTimeout(()=>{e.delete(o[0]),s&&s.resolve()},n),"function"==typeof i.unref&&i.unref(),s.promise)}));try{for(const t of e)yield o(t)}catch(e){}c=void 0})),b=e.set.bind(e);return e.set=(t,n)=>{e.has(t)&&e.delete(t);const r=b(t,n);return c&&c===t&&(c=void 0,void 0!==i&&(clearTimeout(i),i=void 0),void 0!==s&&(s.reject(void 0),s=void 0)),o(),r},o(),e}t.default=s,e.exports=s,e.exports.default=s},51:function(e,t,c){"use strict";e.exports=()=>{const e={};return e.promise=new Promise((t,c)=>{e.resolve=t,e.reject=c}),e}},52:function(e,t,c){"use strict";const n=(e,t,c,n)=>{if("length"===c||"prototype"===c)return;if("arguments"===c||"caller"===c)return;const r=Object.getOwnPropertyDescriptor(e,c),s=Object.getOwnPropertyDescriptor(t,c);!i(r,s)&&n||Object.defineProperty(e,c,s)},i=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},r=(e,t)=>`/* Wrapped ${e}*/\n${t}`,s=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),o=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");e.exports=(e,t,{ignoreNonConfigurable:c=!1}={})=>{const{name:i}=e;for(const i of Reflect.ownKeys(t))n(e,t,i,c);return((e,t)=>{const c=Object.getPrototypeOf(t);c!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,c)})(e,t),((e,t,c)=>{const n=""===c?"":`with ${c.trim()}() `,i=r.bind(null,n,t.toString());Object.defineProperty(i,"name",o),Object.defineProperty(e,"toString",{...s,value:i})})(e,t,i),e}},70:function(e,t,c){"use strict";const n=c(48),i=c(52),r=new WeakMap;e.exports=(e,{cachePromiseRejection:t=!1,...c}={})=>{const s=c.cache||new Map,o=c.cacheKey||(([e])=>e),b=n(e,{...c,cache:s,cacheKey:o}),a=function(...e){const c=b.apply(this,e);return!t&&c&&c.catch&&c.catch(()=>{s.delete(o(e))}),c};return i(a,e),r.set(a,b),a},e.exports.clear=e=>{if(!r.has(e))throw new Error("Can't clear a function that was not memoized!");n.clear(r.get(e))}}}]);