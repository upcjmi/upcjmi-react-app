(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[24],{407:function(e,t,n){"use strict";n(22),n(512)},512:function(e,t,n){},513:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return o}));var a=n(37),r=function(){return Object(a.b)("courses/")},c=function(e){return Object(a.b)("".concat("courses/").concat(e,"/"))},u=function(e,t){return Object(a.b)("courses/".concat(t,"/apply/"),{method:"post",data:e})},o=function(){return Object(a.b)("courses/applied/")}},802:function(e,t,n){"use strict";n.r(t);n(60);var a=n(20),r=(n(501),n(510)),c=(n(404),n(405)),u=(n(407),n(76)),o=(n(502),n(509)),i=n(15),l=n.n(i),s=n(33),f=n(400),p=(n(113),n(61)),d=n(0),b=n.n(d),m=n(18),j=n(30),E=n(513),O=p.a.Title;t.default=function(e){var t=Object(d.useState)([{id:0,title:"",details:"",open:"",close:"",duration:"",start_date:"",end_date:""}]),n=Object(f.a)(t,2),i=n[0],p=n[1],v=Object(d.useState)(!0),h=Object(f.a)(v,2),w=h[0],y=h[1];return Object(d.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.d)();case 3:t=e.sent,p(t),y(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(j.d)("error","Some unknown error occurred","Try refreshing the page");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),w?b.a.createElement("div",{className:"container"},b.a.createElement(o.a,null)):b.a.createElement("div",{className:"container"},b.a.createElement(O,null,"Courses offered"),0!==i.length||w?null:b.a.createElement(c.a,null,b.a.createElement(u.a,{description:"No courses are available for now"})),i.map((function(e){return b.a.createElement(c.a,null,b.a.createElement(r.a,{title:e.title},b.a.createElement(r.a.Item,{label:"Duration"},e.duration),b.a.createElement(r.a.Item,{label:"Apply By"},new Date(e.close).toLocaleString())),b.a.createElement(m.b,{to:"/courses/".concat(e.id,"/")},b.a.createElement(a.a,{type:"primary"},"View all details")))})))}}}]);
//# sourceMappingURL=24.6b286559.chunk.js.map