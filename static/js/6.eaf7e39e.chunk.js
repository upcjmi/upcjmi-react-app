(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[6,29],{400:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},508:function(e,t,n){"use strict";n(60);var r=n(20),a=(n(113),n(61)),o=n(0),i=n.n(o),l=n(56),c=n(18),u=n(25),s=n(12),m=(n(410),n(476)),f=(n(210),n(398)),d=(n(112),n(8)),p=n(45),b=n(46),y=n(48),v=n(47),g=n(49),E=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault();var t=n.props,r=t.form,a=t.signIn;(0,r.validateFields)((function(e,t){e||a(t.email,t.password)}))},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.inProgress,a=t.getFieldDecorator;return i.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"login-form",id:"sign-in-form"},i.a.createElement(m.a.Item,null,a("email",{rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Enter a valid email!"}]})(i.a.createElement(f.a,{prefix:i.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email",type:"email",autoComplete:"username email",autoCapitalize:"none",autoCorrect:"off"}))),i.a.createElement(m.a.Item,null,a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(f.a,{prefix:i.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",autoComplete:"password"}))),i.a.createElement(m.a.Item,null,i.a.createElement(r.a,{htmlType:"submit",className:"login-form-button",icon:n?"loading":"login"},"Sign In"),i.a.createElement("a",{className:"login-form-forgot",href:"#!"},"Forgot password")))}}]),t}(i.a.Component),h=Object(u.b)((function(e){return{inProgress:e.auth.inProgress}}))(m.a.create({name:"sign-in"})(E)),O=n(67),j=Object(u.b)((function(e){return{}}),(function(e){return{signIn:function(t,n){return e(Object(O.c)(t,n))}}}))((function(e){return i.a.createElement(h,{signIn:function(t,n){e.signIn(t,n)}})})),w=n(152),S=n(88),P=n(16),x=Object(u.b)((function(e){return{inProgress:e.auth.inProgress}}),(function(e){return{signIn:function(t,n){return e(Object(O.d)(t,n))},startSignInProcess:function(){return e({type:P.d})},signInFailed:function(){return e({type:P.c})}}}))((function(e){var t=e.inProgress;return i.a.createElement(w.GoogleLogin,{clientId:S.b||"",render:function(n){return i.a.createElement(r.a,{onClick:function(){e.startSignInProcess(),n.onClick()},disabled:n.disabled,type:"primary",icon:t?"loading":"google",style:{width:"100%",backgroundColor:n.disabled?"#eeeeee":"#000000"},size:"large"},"Sign In With Google")},buttonText:"Login",onSuccess:function(t){e.signIn(t.googleId,t.tokenId)},onFailure:function(){e.signInFailed()},cookiePolicy:"single_host_origin"})})),k=a.a.Title;t.a=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.isAuthenticated,n=e.user;if(t&&n)switch(n.type){case"C":return i.a.createElement(l.a,{to:s.a});case"S":return i.a.createElement(l.a,{to:s.i});default:return i.a.createElement(l.a,{to:s.d})}return i.a.createElement("div",null,i.a.createElement(k,null,"Sign In"),i.a.createElement(x,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{textAlign:"center"}},"OR"),i.a.createElement("br",null),i.a.createElement(j,null),i.a.createElement("br",null),i.a.createElement(c.b,{to:s.h},i.a.createElement(r.a,{type:"dashed",style:{width:"100%"},icon:"user-add",size:"large"},"Create New Account")))}))},529:function(e,t,n){"use strict";n.r(t);n(404);var r=n(405),a=n(0),o=n.n(a),i=n(508);t.default=function(){return o.a.createElement("div",{className:"full-page center-hv",style:{backgroundColor:"#EEEEEE"}},o.a.createElement(r.a,{style:{maxWidth:"95vw",width:450}},o.a.createElement(i.a,null)))}},633:function(e,t,n){"use strict";n(214);var r=n(149),a=n(0),o=n.n(a),i=n(25),l=n(529);t.a=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{}}))((function(e){return e.isAuthenticated?o.a.createElement("div",{className:"full-page center-hv"},o.a.createElement(r.a,{status:"403",title:"403",subTitle:"Sorry, but you don't have permission to view this screen.",extra:"Try signing out and signing in with different account."})):o.a.createElement(l.default,null)}))},640:function(e,t,n){"use strict";n(214);var r=n(149),a=n(0),o=n.n(a),i=n(25),l=n(18),c=n(56),u=n(633),s=(n(113),n(61)),m=(n(60),n(20)),f=n(15),d=n.n(f),p=n(33),b=n(400),y=n(81),v=function(e){var t=e.email,n=Object(a.useState)("sent"),r=Object(b.a)(n,2),i=r[0],l=r[1],c=Object(a.useState)(12e4),u=Object(b.a)(c,2),s=u[0],f=u[1];switch(Object(a.useEffect)((function(){setTimeout((function(){f(2*s),l("not-sent")}),s)}),[s,i]),i){case"not-sent":case"sending":return o.a.createElement(m.a,{icon:"mail",onClick:Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l("sending"),e.next=4,Object(y.e)();case 4:l("sent"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),loading:"sending"===i},"sending"===i?"Sending you mail":"Send Verification Mail");case"error":return"An error occurred while sending your verification mail. Try again later.";default:return o.a.createElement("div",{style:{textAlign:"center"}},"Sent you a mail on \xa0",t,o.a.createElement("br",null),"Retry after \xa0",s/6e4,"mins")}},g=s.a.Title,E=s.a.Text,h=function(e){var t=e.user;return o.a.createElement("div",{style:{textAlign:"left"}},o.a.createElement(g,{level:3,style:{textAlign:"center"}},"Verification Process"),o.a.createElement(g,{level:4,disabled:t.account.email_verified},"1. Verification of email"),o.a.createElement(E,{disabled:t.account.email_verified},"You need to verify your email in order to proceed next.",o.a.createElement("br",null),"We sent you a verification mail, do check your spam folder."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"center-hv"},t.account.email_verified?o.a.createElement(E,{disabled:!0},"Your email is already verified"):o.a.createElement(v,{email:t.email})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(g,{level:4},"2. Verification of documents"),o.a.createElement(E,{disabled:t.account.account_verified},"We will manully verify your document by your respective department. This process will take 1-2 days.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"center-hv"},t.account.account_verified?o.a.createElement(E,{disabled:!0},"Your account is already verified"):"We will notify you after completion of process.")))},O=function(e){var t=e.user;return o.a.createElement("div",{className:"container center-hv full-page"},o.a.createElement("div",{style:{maxWidth:600}},o.a.createElement(r.a,{status:"warning",title:"You account is not yet verified",extra:o.a.createElement(h,{user:t})})))},j=n(167),w=n(95),S=n(70),P=(n(22),n(758),n(78)),x=n(9),k=n(11);function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},L=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,T(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,r=e.props,o=r.prefixCls,i=F(r,["prefixCls"]);delete i.title;var l=n("popover",o);return a.createElement(P.a,C({},i,{prefixCls:l,ref:e.saveTooltip,overlay:e.getOverlay(l)}))},e}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,r=t.content;return Object(k.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),a.createElement("div",null,n&&a.createElement("div",{className:"".concat(e,"-title")},n),a.createElement("div",{className:"".concat(e,"-inner-content")},r))}},{key:"render",value:function(){return a.createElement(x.a,null,this.renderPopover)}}])&&N(n.prototype,r),o&&N(n,o),t}(a.Component);L.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};n(223);var R=n(135),D=(n(112),n(8)),W=n(219),z=Object(i.b)((function(e){return{}}),(function(e){return{}}))((function(e){var t=e.routes,n=Object(a.useState)(!1),r=Object(b.a)(n,2),i=r[0],c=r[1],u=function(){return c(!1)};Object(a.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[]);var s=o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{mode:"vertical",theme:"light",forceSubMenuRender:!0,inlineCollapsed:Object(S.a)(null,!0),className:Object(S.a)(null,"full-page"),selectedKeys:[]},t.map((function(e,t){return o.a.createElement(R.a.Item,{key:t.toString()},o.a.createElement(l.b,{to:e.path},o.a.createElement(D.a,{type:e.icon}),o.a.createElement("span",null,e.name)))}))));return Object(S.a)(!1,!0)?o.a.createElement("div",{style:{position:"fixed",top:0,height:"100vh",transition:"left 0.2s",zIndex:1}},o.a.createElement("div",{style:{height:64,backgroundColor:"#FFFFFF",width:80},className:"logo-container center-hv"},o.a.createElement("img",{src:W,alt:"University Placement Cell, Logo"})),s):o.a.createElement(L,{placement:"topRight",title:null,content:s,trigger:"click",visible:i,onVisibleChange:function(e){return c(e)}},o.a.createElement("div",{role:"button",className:"collapse-button-mobile"},o.a.createElement(D.a,{type:"menu"})))}));t.a=Object(i.b)((function(e){return{user:e.auth.user,isAuthenticated:e.auth.isAuthenticated,connected:e.navigator.connected}}),(function(e){return{}}))(Object(c.g)((function(e){var t=e.user,n=e.isAuthenticated,i=e.match,s=e.allowedType,m=e.extraRoutes,f=e.sideRoutes,d=e.baseLocation,p=void 0===d?"/portal/":d,b=e.connected;return Object(a.useEffect)((function(){return document.getElementsByTagName("footer")[0].classList.add("footer-hide"),function(){document.getElementsByTagName("footer")[0].classList.remove("footer-hide")}})),null===b?o.a.createElement(w.a,null):b?n?t&&t.type!==s?o.a.createElement(u.a,null):!t||t.account.account_verified&&t.account.email_verified?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"portal"},o.a.createElement(l.a,{basename:p},o.a.createElement(z,{routes:f,match:i.path}),o.a.createElement("div",{className:"full-page",style:{paddingLeft:Object(S.a)(0,80),transition:"0.4s"}},o.a.createElement(a.Suspense,{fallback:o.a.createElement(w.a,null)},o.a.createElement(c.d,null,f.map((function(e,t){return o.a.createElement(c.b,{key:t.toString(),exact:!0,path:e.path,component:e.screen})})),m.map((function(e,t){return o.a.createElement(c.b,{key:t.toString(),exact:!0,path:e.path,component:e.screen})})),o.a.createElement(c.b,{component:j.a,homeRoute:p}))))))):o.a.createElement(O,{user:t}):o.a.createElement(u.a,null):o.a.createElement("div",{className:"full-page center-hv"},o.a.createElement(r.a,{status:"500"}))})))},758:function(e,t,n){}}]);
//# sourceMappingURL=6.eaf7e39e.chunk.js.map