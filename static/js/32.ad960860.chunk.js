(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[32],{378:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},532:function(e,t,n){"use strict";n(216);var a=n(154),r=n(0),i=n.n(r);t.a=function(){return i.a.createElement("div",{className:"full-height full-width center-hv"},i.a.createElement(a.a,{size:"large",tip:"Loading..."}))}},629:function(e,t,n){"use strict";n(152);var a=n(91),r=n(0),i=n.n(r),c=n(25),l=n(165);t.a=Object(c.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return i.a.createElement("div",{className:"full-page center-hv"},i.a.createElement(a.a,{status:"403",title:"403",subTitle:t?"Sorry, but you don't have permission to view this screen.":"You need to sign in to view this screen.",extra:t?"Try signing out and signing in with different account.":i.a.createElement(l.a,null)}))}))},841:function(e,t,n){"use strict";n.r(t);n(411);var a=n(414),r=(n(113),n(8)),i=(n(627),n(630)),c=n(378),l=(n(628),n(642)),u=(n(114),n(61)),o=n(0),s=n.n(o),m=n(25),f=n(629),h=[{title:"Account",icon:"user",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,838))}))},{title:"Basic Detail",icon:"solution",component:Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,827))}))},{title:"Verification Document",icon:"file-protect",component:Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,847))}))},{title:"Creating account",icon:"user-add",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,828))}))}],p=n(532),b=n(15),d=n(10),y={basic:{},account:{}},v=u.a.Title,E=l.a.Step;t.default=Object(m.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.isAuthenticated,n=Object(o.useState)(0),u=Object(c.a)(n,2),m=u[0],g=u[1],j=Object(o.useState)(y),O=Object(c.a)(j,2),w=O[0],A=O[1];if(t&&3!==m)return s.a.createElement(f.a,null);var S=h[m].component;return s.a.createElement("div",{className:"container center-hv full-page grey lighten-3"},s.a.createElement("div",null,s.a.createElement(i.a,{message:s.a.createElement("p",null,"This is only for students. If you are a company representative create company account",s.a.createElement(b.b,{to:d.i}," here")),type:"info",className:"auth-container-type-1"}),s.a.createElement("br",null),s.a.createElement(a.a,{className:"auth-container-type-1"},s.a.createElement(v,null,"Create student account"),s.a.createElement("br",null),s.a.createElement(l.a,{size:"small",labelPlacement:"vertical",current:m},h.slice(0,3).map((function(e,t){var n=e.title,a=e.icon;return s.a.createElement(E,{title:n,icon:s.a.createElement(r.a,{type:a}),key:t.toString()})}))),s.a.createElement(o.Suspense,{fallback:s.a.createElement(p.a,null)},s.a.createElement(S,{next:function(){window.scrollTo(0,0),g(m+1)},action:A,data:w,previous:function(){return g(m-1)},startAgain:function(){g(0)}})))))}))}}]);
//# sourceMappingURL=32.ad960860.chunk.js.map