(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{34:function(e,t,n){"use strict";var o=n(0);function c(e){Object(o.h)(e,"svelte-fcw7ds",".button.customColor.svelte-fcw7ds{background-color:var(--color)}.button.customTextColor.svelte-fcw7ds{color:var(--textColor)}.key.svelte-fcw7ds{font-family:monospace;border-radius:8px;text-transform:none;margin:1em;margin-left:0;margin-top:0}")}function i(e){let t,n,c;const i=e[18].default,a=Object(o.z)(i,e,e[17],null);return{c(){t=Object(o.D)("a"),a&&a.c(),this.h()},l(e){t=Object(o.p)(e,"A",{style:!0,class:!0,href:!0,tabindex:!0,target:!0});var n=Object(o.n)(t);a&&a.l(n),n.forEach(o.C),this.h()},h(){Object(o.j)(t,"style",e[14]),Object(o.j)(t,"class",n="button is-"+e[10]+" svelte-fcw7ds"),Object(o.j)(t,"href",e[0]),Object(o.j)(t,"tabindex",e[11]),Object(o.j)(t,"target",e[9]),Object(o.lb)(t,"is-primary",e[1]),Object(o.lb)(t,"is-light",e[2]),Object(o.lb)(t,"is-info",e[3]),Object(o.lb)(t,"is-inverted",e[4]),Object(o.lb)(t,"is-outlined",e[5]),Object(o.lb)(t,"is-hidden",e[6]),Object(o.lb)(t,"is-loading",e[13]),Object(o.lb)(t,"customColor",e[7]),Object(o.lb)(t,"customTextColor",e[8]),Object(o.lb)(t,"key",e[12])},m(e,n){Object(o.O)(e,t,n),a&&a.m(t,null),c=!0},p(e,[s]){a&&a.p&&(!c||131072&s)&&Object(o.pb)(a,i,e,e[17],c?Object(o.I)(i,e[17],s,null):Object(o.H)(e[17]),null),(!c||1024&s&&n!==(n="button is-"+e[10]+" svelte-fcw7ds"))&&Object(o.j)(t,"class",n),(!c||1&s)&&Object(o.j)(t,"href",e[0]),(!c||2048&s)&&Object(o.j)(t,"tabindex",e[11]),(!c||512&s)&&Object(o.j)(t,"target",e[9]),1026&s&&Object(o.lb)(t,"is-primary",e[1]),1028&s&&Object(o.lb)(t,"is-light",e[2]),1032&s&&Object(o.lb)(t,"is-info",e[3]),1040&s&&Object(o.lb)(t,"is-inverted",e[4]),1056&s&&Object(o.lb)(t,"is-outlined",e[5]),1088&s&&Object(o.lb)(t,"is-hidden",e[6]),9216&s&&Object(o.lb)(t,"is-loading",e[13]),1152&s&&Object(o.lb)(t,"customColor",e[7]),1280&s&&Object(o.lb)(t,"customTextColor",e[8]),5120&s&&Object(o.lb)(t,"key",e[12])},i(e){c||(Object(o.mb)(a,e),c=!0)},o(e){Object(o.nb)(a,e),c=!1},d(e){e&&Object(o.C)(t),a&&a.d(e)}}}function a(e,t,n){let{$$slots:o={},$$scope:c}=t,{href:i}=t,{primary:a=!1}=t,{light:s=!1}=t,{info:r=!1}=t,{inverted:l=!1}=t,{outlined:b=!1}=t,{hidden:d=!1}=t,{color:u=null}=t,{textColor:j=null}=t,{customColor:O=null!=u}=t,{customTextColor:f=null!=j}=t,{target:h="_self"}=t,{size:g="default"}=t,{tabindex:m=0}=t,{key:p=!1}=t,{loading:w=!1}=t,$=`\n    --color:${u};\n    --textColor:${j};\n  `;return e.$$set=e=>{"href"in e&&n(0,i=e.href),"primary"in e&&n(1,a=e.primary),"light"in e&&n(2,s=e.light),"info"in e&&n(3,r=e.info),"inverted"in e&&n(4,l=e.inverted),"outlined"in e&&n(5,b=e.outlined),"hidden"in e&&n(6,d=e.hidden),"color"in e&&n(15,u=e.color),"textColor"in e&&n(16,j=e.textColor),"customColor"in e&&n(7,O=e.customColor),"customTextColor"in e&&n(8,f=e.customTextColor),"target"in e&&n(9,h=e.target),"size"in e&&n(10,g=e.size),"tabindex"in e&&n(11,m=e.tabindex),"key"in e&&n(12,p=e.key),"loading"in e&&n(13,w=e.loading),"$$scope"in e&&n(17,c=e.$$scope)},[i,a,s,r,l,b,d,O,f,h,g,m,p,w,$,u,j,c,o]}class s extends o.b{constructor(e){super(),Object(o.N)(this,e,a,i,o.bb,{href:0,primary:1,light:2,info:3,inverted:4,outlined:5,hidden:6,color:15,textColor:16,customColor:7,customTextColor:8,target:9,size:10,tabindex:11,key:12,loading:13},c)}}t.a=s},35:function(e,t,n){"use strict";(function(e){var o=n(46),c=n(37),i=n(36),a=n(8);let s,r,l;const b=t=>{const c=new(void 0!==e.env.JEST_WORKER_ID?n(28):n(28).default)(t).setMaxListeners(o.a.database.maxNumberOfListeners);return c.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;n(30).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),c};if(!0===Object(a.a)()){const e=n(30).default,t=n(28).default;r=new t(`${o.a.database.remote}/${i.a.get("loginDb")}`,{skip_setup:!0,live:!0}),s=b(o.a.database.local),window._DB=s,i.a.get("loginDb")===Object(c.a)("JohnDoe")&&e.update(e=>({...e,user:{name:"JohnDoe"},online:!0})),i.a.get("loginDb")&&o.a.features.authEnabled?fetch(o.a.database.remote+"/_session",{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),a())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{i.a.set("loginDb",Object(c.a)("JohnDoe"),{expires:o.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,n)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const a=await(await fetch(o.a.database.remote+"/_session",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})})).json();if(a.error){if("unauthorized"===a.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),i.a.set("loginDb",Object(c.a)(t),{expires:o.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{l&&(await l.cancel(),await fetch(o.a.database.remote+"/_session",{method:"delete"}))}finally{i.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await s.destroy(),window.location.reload(!1)}};const a=()=>{l=s.sync(r).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(s=b(o.a.database.local),s.__reset=async()=>{const e=await s.allDocs();await Promise.all(e.rows.map((function(e){return s.remove(e.id,e.value.rev)})))}),t.a=s}).call(this,n(20))},37:function(e,t,n){"use strict";t.a=e=>"userdb-"+(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)},425:function(e,t,n){"use strict";n.r(t);var o=n(0),c=(n(35),n(33)),i=n(34);function a(e){let t;return{c(){t=Object(o.kb)("Log in")},l(e){t=Object(o.s)(e,"Log in")},m(e,n){Object(o.O)(e,t,n)},d(e){e&&Object(o.C)(t)}}}function s(e){let t,n,s,r,l,b,d,u,j,O,f,h;return t=new c.a({}),f=new i.a({props:{href:"/login",$$slots:{default:[a]},$$scope:{ctx:e}}}),{c(){Object(o.w)(t.$$.fragment),n=Object(o.hb)(),s=Object(o.D)("section"),r=Object(o.D)("div"),l=Object(o.D)("h2"),b=Object(o.kb)("Registration successful!"),d=Object(o.hb)(),u=Object(o.D)("p"),j=Object(o.kb)("You can now log in."),O=Object(o.hb)(),Object(o.w)(f.$$.fragment),this.h()},l(e){Object(o.o)(t.$$.fragment,e),n=Object(o.r)(e),s=Object(o.p)(e,"SECTION",{class:!0});var c=Object(o.n)(s);r=Object(o.p)(c,"DIV",{class:!0});var i=Object(o.n)(r);l=Object(o.p)(i,"H2",{class:!0});var a=Object(o.n)(l);b=Object(o.s)(a,"Registration successful!"),a.forEach(o.C),d=Object(o.r)(i),u=Object(o.p)(i,"P",{});var h=Object(o.n)(u);j=Object(o.s)(h,"You can now log in."),h.forEach(o.C),O=Object(o.r)(i),Object(o.o)(f.$$.fragment,i),i.forEach(o.C),c.forEach(o.C),this.h()},h(){Object(o.j)(l,"class","is-size-2"),Object(o.j)(r,"class","container"),Object(o.j)(s,"class","section")},m(e,c){Object(o.S)(t,e,c),Object(o.O)(e,n,c),Object(o.O)(e,s,c),Object(o.g)(s,r),Object(o.g)(r,l),Object(o.g)(l,b),Object(o.g)(r,d),Object(o.g)(r,u),Object(o.g)(u,j),Object(o.g)(r,O),Object(o.S)(f,r,null),h=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),f.$set(n)},i(e){h||(Object(o.mb)(t.$$.fragment,e),Object(o.mb)(f.$$.fragment,e),h=!0)},o(e){Object(o.nb)(t.$$.fragment,e),Object(o.nb)(f.$$.fragment,e),h=!1},d(e){Object(o.A)(t,e),e&&Object(o.C)(n),e&&Object(o.C)(s),Object(o.A)(f)}}}class r extends o.b{constructor(e){super(),Object(o.N)(this,e,null,s,o.bb,{})}}t.default=r},56:function(e,t){}}]);