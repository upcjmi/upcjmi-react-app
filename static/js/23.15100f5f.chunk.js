(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[23],{429:function(e,t,n){"use strict";n(22),n(531)},530:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(38),c=function(){return Object(a.b)("company/")},r=function(e){return Object(a.b)("company/".concat(e,"/job/"))},u=function(e,t){return Object(a.b)("company/".concat(e,"/job/").concat(t,"/"))},l=function(e,t,n){return Object(a.b)("company/".concat(e,"/job/").concat(t,"/apply/"),{method:"post",data:n})},o=function(){return Object(a.b)("company/applied/jobs/")}},531:function(e,t,n){},811:function(e,t,n){"use strict";n.r(t);n(504);var a=n(506),c=(n(409),n(411)),r=(n(429),n(76)),u=n(15),l=n.n(u),o=n(33),i=n(384),m=(n(114),n(61)),s=n(0),b=n.n(s),p=(n(146),n(89)),f=(n(147),n(66)),d=n(530),j=n(30),E=(n(60),n(21)),v=(n(503),n(507)),y=n(18),O=function(e){var t=e.job,n=e.companyId,a=t.title,r=t.package,u=t.courses_allowed,l=t.close,o=t.id;return b.a.createElement(c.a,null,b.a.createElement(v.a,{title:a},b.a.createElement(v.a.Item,{label:"Package"},r),b.a.createElement(v.a.Item,{label:"Courses Allowed"},u),b.a.createElement(v.a.Item,{label:"Apply by"},new Date(l).toLocaleString())),b.a.createElement(y.c,{to:"/company/".concat(n,"/job/").concat(o,"/")},b.a.createElement(E.a,{type:"primary"},"View full details")))},w=m.a.Title,h=function(e){var t=e.company,n=Object(s.useState)([{id:""}]),r=Object(i.a)(n,2),u=r[0],m=r[1],E=Object(s.useState)(!0),v=Object(i.a)(E,2),y=v[0],h=v[1];if(Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.d)(t.id);case 3:n=e.sent,m(n),h(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(j.d)("error","Some unknown error occurred while fetching ".concat(t.name," details"),"Try refreshing the page");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),u===[]&&!y)return null;var k=u.map((function(e){return b.a.createElement(f.a,{xs:24,key:e.id.toString()},b.a.createElement(O,{job:e,companyId:t.id}))}));return b.a.createElement("div",null,b.a.createElement("br",null),b.a.createElement(w,{level:3},t.name),b.a.createElement(p.a,null,y?b.a.createElement(c.a,null,b.a.createElement(a.a,null)):k),b.a.createElement("br",null),b.a.createElement("br",null))},k=m.a.Title;t.default=function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),u=n[0],m=n[1],p=Object(s.useState)(!0),f=Object(i.a)(p,2),j=f[0],E=f[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)();case 2:t=e.sent,m(t),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=u.map((function(e,t){return b.a.createElement(h,{key:t.toString(),company:e})}));return b.a.createElement("div",{className:"container"},b.a.createElement(k,null,"Recruitment Drives"),0!==v.length||j?null:b.a.createElement(c.a,null,b.a.createElement(r.a,{description:"No jobs are available for now"})),j?b.a.createElement(c.a,null,b.a.createElement(a.a,null)):v)}}}]);
//# sourceMappingURL=23.15100f5f.chunk.js.map