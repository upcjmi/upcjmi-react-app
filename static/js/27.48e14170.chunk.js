(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[27],{378:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},459:function(t,e,n){"use strict";n(22),n(497)},462:function(t,e,n){"use strict";var r=n(0),a=n(3),o=n.n(a);function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,s(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),n=e,(a=[{key:"render",value:function(){var t,e,n=this.props,a=n.prefixCls,c=n.className,l=n.style,f=n.size,s=n.shape,p=o()((u(t={},"".concat(a,"-lg"),"large"===f),u(t,"".concat(a,"-sm"),"small"===f),t)),y=o()((u(e={},"".concat(a,"-circle"),"circle"===s),u(e,"".concat(a,"-square"),"square"===s),e)),b="number"===typeof f?{width:f,height:f,lineHeight:"".concat(f,"px")}:{};return r.createElement("span",{className:o()(a,c,p,y),style:i(i({},b),l)})}}])&&l(n.prototype,a),c&&l(n,c),e}(r.Component);y.defaultProps={size:"large"};var b=y;function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var d=function(t){var e=t.prefixCls,n=t.className,a=t.width,c=t.style;return r.createElement("h3",{className:o()(e,n),style:m({width:a},c)})};function h(t){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var E=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,j(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),n=e,(a=[{key:"getWidth",value:function(t){var e=this.props,n=e.width,r=e.rows,a=void 0===r?2:r;return Array.isArray(n)?n[t]:a-1===t?n:void 0}},{key:"render",value:function(){var t=this,e=this.props,n=e.prefixCls,a=e.className,c=e.style,i=e.rows,u=v(Array(i)).map((function(e,n){return r.createElement("li",{key:n,style:{width:t.getWidth(n)}})}));return r.createElement("ul",{className:o()(n,a),style:c},u)}}])&&O(n.prototype,a),c&&O(n,c),e}(r.Component),S=n(9);function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==A(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t){return t&&"object"===A(t)?t:{}}var D=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=k(this,x(e).apply(this,arguments))).renderSkeleton=function(e){var n=e.getPrefixCls,a=t.props,c=a.prefixCls,i=a.loading,u=a.className,l=a.children,f=a.avatar,s=a.title,p=a.paragraph,y=a.active,m=n("skeleton",c);if(i||!("loading"in t.props)){var h,v,O,g=!!f,j=!!s,w=!!p;if(g){var S=P(P({prefixCls:"".concat(m,"-avatar")},function(t,e){return t&&!e?{shape:"square"}:{shape:"circle"}}(j,w)),T(f));v=r.createElement("div",{className:"".concat(m,"-header")},r.createElement(b,S))}if(j||w){var N,k;if(j){var x=P(P({prefixCls:"".concat(m,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(g,w)),T(s));N=r.createElement(d,x)}if(w){var C=P(P({prefixCls:"".concat(m,"-paragraph")},function(t,e){var n={};return t&&e||(n.width="61%"),n.rows=!t&&e?3:2,n}(g,j)),T(p));k=r.createElement(E,C)}O=r.createElement("div",{className:"".concat(m,"-content")},N,k)}var A=o()(m,u,(_(h={},"".concat(m,"-with-avatar"),g),_(h,"".concat(m,"-active"),y),h));return r.createElement("div",{className:A},v,O)}return l},t}var n,a,c;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,t),n=e,(a=[{key:"render",value:function(){return r.createElement(S.a,null,this.renderSkeleton)}}])&&N(n.prototype,a),c&&N(n,c),e}(r.Component);D.defaultProps={avatar:!1,title:!0,paragraph:!0};e.a=D},497:function(t,e,n){},506:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"f",(function(){return s}));var r=n(28),a=function(){return Object(r.b)("courses/")},o=function(t){return Object(r.b)("".concat("courses/").concat(t,"/"))},c=function(t,e){return Object(r.b)("courses/".concat(e,"/apply/"),{method:"post",data:t})},i=function(){return Object(r.b)("courses/applied/")},u=function(){return Object(r.a)("notices/")},l=function(t){return Object(r.a)("".concat("coordinator/").concat(t,"/"))},f=function(t){return Object(r.a)("".concat("notices/").concat(t,"/"))},s=function(){return Object(r.a)("".concat("ranking/"))}},625:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(15),a=n(0),o=n.n(a),c=n(10),i=n(626),u=function(t){var e=t.title,n=t.details,a=t.id,u=t.created;return o.a.createElement("div",{className:"card-notice"},o.a.createElement(r.b,{to:"".concat(c.g).concat(a)},o.a.createElement("div",{className:"notice-card-title"},e)),o.a.createElement("p",{className:"notice-card-details"},n?n.substring(0,256)||n:null," ",n?o.a.createElement(r.b,{to:"".concat(c.g).concat(a),className:"read-more"},"Read More"):null),o.a.createElement("p",{className:"notice-card-date"},Object(i.a)(u)))}},626:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=new Date(t);return"".concat(e.getDay(),"-").concat(e.getMonth(),"-").concat(e.getFullYear())}},634:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(459);var r=n(462),a=(n(148),n(66)),o=(n(113),n(61)),c=n(0),i=n.n(c),u=n(625),l=o.a.Title,f=function(t){var e=t.noticesData;return i.a.createElement("div",null,i.a.createElement(l,{className:"mx"},"Notice"),i.a.createElement("div",{className:"notice-container"},e.length>0?e.map((function(t,e){return i.a.createElement(a.a,{span:24},i.a.createElement(u.a,t))})):i.a.createElement(r.a,{loading:!0,title:{width:"100%"}})))}},820:function(t,e,n){"use strict";n.r(e),n.d(e,"NoticeScreen",(function(){return g}));n(149);var r=n(89),a=(n(459),n(462)),o=(n(148),n(66)),c=(n(50),n(18)),i=n(17),u=n.n(i),l=n(34),f=n(378),s=(n(113),n(61)),p=n(0),y=n.n(p),b=n(57),m=n(634),d=n(506),h=n(626),v=s.a.Title,O=s.a.Paragraph,g=function(t){var e=t.match,n=(t.location,t.title,Object(p.useState)([])),i=Object(f.a)(n,2),s=i[0],b=i[1],g=Object(p.useState)(!0),j=Object(f.a)(g,2),w=(j[0],j[1]),E=Object(p.useState)(void 0),S=Object(f.a)(E,2),_=S[0],P=S[1];return Object(p.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params.id,t.next=3,Object(d.h)(n);case 3:return r=t.sent,P(r),t.next=7,Object(d.e)();case 7:a=t.sent,b(a),w(!(r&&a));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),y.a.createElement("div",{className:"container white lighten-3"},y.a.createElement(r.a,{gutter:32},_?y.a.createElement(o.a,{sm:24,md:15},y.a.createElement(v,{level:2},_.title),y.a.createElement(O,null,_.details),y.a.createElement("div",{className:"row space-between"},y.a.createElement("a",{href:_.documents,download:!0,target:"_blank"},y.a.createElement(c.a,{type:"primary",icon:"download"},"Attachment")),y.a.createElement("p",null,Object(h.a)(_.created))),y.a.createElement(c.a,{type:"link",size:"large",style:{padding:0}},y.a.createElement("a",{target:"_blank",href:_.link},_.link))):y.a.createElement(o.a,{sm:24,md:15},y.a.createElement(a.a,{loading:!0,title:{width:"100%"}})),y.a.createElement(o.a,{sm:24,md:8},y.a.createElement(m.a,{noticesData:s}))))};e.default=Object(b.g)(g)}}]);
//# sourceMappingURL=27.48e14170.chunk.js.map