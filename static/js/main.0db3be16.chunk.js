(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[12],{10:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"l",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m}));var r="/",a="/contact/",c="/sign-in/",i="/sign-up/student/",o="/sign-up/company/",u="/forget-password/",s="/privacy-policy/",l="/terms-and-conditions/",d="/portal/",f="/portal/student/",p="/portal/company/",m="/verification/email/:hash"},16:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return l}));var r="SIGN_IN_INITIATED",a="SIGN_IN_SUCCESS",c="SIGN_OUT",i="SIGNING_IN_FAILED",o="CONNECTED_WITH_SERVER",u="COULD_NOT_CONNECT_TO_SERVER",s="STUDENT_EXTRA_DATA_LOADED",l="COMPANY_EXTRA_DATA_LOADED"},165:function(e,t,n){"use strict";n(50);var r=n(18),a=n(0),c=n.n(a),i=n(25),o=n(15),u=n(10),s=n(155),l=n(57),d=n(88),f=n(67),p=Object(l.g)(Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{signOut:function(t){return e(Object(f.e)(t))}}}))((function(e){var t=e.history,n=e.redirect;return c.a.createElement(s.GoogleLogout,{clientId:d.b||"",onLogoutSuccess:function(){},render:function(a){return c.a.createElement(r.a,{onClick:function(){var r=n?t.push:function(){};e.signOut(r),a.onClick()},icon:"logout",type:"link"},"Sign Out")}})}))),m=Object(l.g)(Object(i.b)((function(){return{}}),(function(e){return{signOut:function(t){return e(Object(f.e)(t))}}}))((function(e){var t=e.signOut,n=e.history,a=e.redirect,i=void 0===a||a;return c.a.createElement(r.a,{onClick:function(){var e=i?n.push:function(){};t(e)},icon:"logout",type:"link"},"Sign Out")}))),h=Object(i.b)((function(e){return{signedWith:e.auth.signedWith}}))((function(e){var t=e.signedWith,n=void 0!==t&&t,r=e.redirect,a=void 0===r||r;switch(n){case"G":return c.a.createElement(p,{redirect:a});case"E":case"U":default:return c.a.createElement(m,{redirect:a})}}));t.a=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?c.a.createElement(h,null):c.a.createElement(o.b,{to:u.h},c.a.createElement(r.a,{type:"primary",size:"large",icon:"login"},"Sign In"))}))},172:function(e,t,n){"use strict";n(152);var r=n(91),a=(n(50),n(18)),c=n(0),i=n.n(c),o=n(15),u=n(10);t.a=function(){return i.a.createElement("div",{className:"full-page center-hv"},i.a.createElement(r.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:i.a.createElement(o.b,{to:u.e},i.a.createElement(a.a,{type:"primary"},"Back Home"))}))}},210:function(e){e.exports=JSON.parse('{"name":"upcjmi","version":"1.0.1","private":false,"license":"GPL-2.0","homepage":"https://upcjmi.com","dependencies":{"antd":"^3.23.6","axios":"^0.19.0","jamia-all-courses":"^1.2.0","moment":"^2.24.0","react":"^16.10.2","react-dom":"^16.10.2","react-google-login":"^5.0.5","react-google-recaptcha":"^2.0.1","react-helmet":"^5.2.1","react-html-parser":"^2.0.2","react-markdown":"^4.2.2","react-redux":"^7.1.1","react-router-dom":"^5.1.2","react-router-hash-link":"^1.2.2","react-scripts":"^3.2.0","react-simplemde-editor":"^4.1.0","reactjs-localstorage":"^0.0.8","redux":"^4.0.4","redux-thunk":"^2.3.0"},"scripts":{"lint":"eslint \'src/**/*.{js,jsx,ts,tsx}\' --fix","analyze":"yarn build && source-map-explorer \'build/static/js/*.js\'","start":"sh -ac \'source .env.development\'; react-app-rewired start","build":"sh -ac \'source .env.production\'; react-app-rewired build","test":"react-app-rewired test","eject":"react-scripts eject","predeploy":"yarn run build && cp build/index.html build/404.html && cp CNAME build/CNAME","deploy":"gh-pages -d build","aws:sync":"aws s3 sync build/ s3://upcjmi --cache-control max-age=31557600 --delete","aws:invalidate":"aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id E2JT16QJ1F7YLO --paths /index.html /service-worker.js","aws:deploy":"yarn predeploy && yarn aws:sync && yarn aws:invalidate","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@types/jest":"^24.0.18","@types/node":"^12.7.12","@types/react":"^16.9.5","@types/react-dom":"^16.9.1","@types/react-google-recaptcha":"^1.1.0","@types/react-helmet":"^5.0.11","@types/react-html-parser":"^2.0.1","@types/react-redux":"^7.1.4","@types/react-router-dom":"^5.1.0","@types/react-router-hash-link":"^1.2.1","@typescript-eslint/eslint-plugin":"^2.3.3","@typescript-eslint/parser":"^2.3.3","all-contributors-cli":"^6.9.1","babel-plugin-import":"^1.12.2","babel-plugin-transform-remove-console":"^6.9.4","customize-cra":"^0.8.0","eslint":"^6.5.1","eslint-config-airbnb":"^18.0.1","eslint-config-prettier":"^6.4.0","eslint-plugin-import":"^2.18.2","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.16.0","gh-pages":"^2.1.1","husky":"^3.0.8","less":"^3.10.3","less-loader":"^5.0.0","lint-staged":"^9.4.2","node-sass":"^4.13.1","prettier":"^1.19.1","pretty-quick":"^1.11.1","react-app-rewired":"^2.1.3","source-map-explorer":"^2.1.0","typescript":"^3.6.4"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/*.{js,jsx,ts,tsx}":["pretty-quick \u2014-staged","eslint --fix","git add"]}}')},219:function(e,t,n){e.exports=n.p+"static/media/jamia-logo.1b80d421.svg"},230:function(e,t,n){e.exports=n(376)},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v}));var r=n(37),a=n(17),c=n.n(a),i=n(34),o=n(112),u=n.n(o),s=n(48),l=n(49),d=n(88),f=n(33);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}u.a.defaults.baseURL=d.a,u.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded";var h=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",new Promise((function(e,r){u()(t,n).then((function(t){return e(t.data)})).catch((function(e){return r(e.response)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return new Promise(function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.reactLocalStorage.getObject(l.a)){e.next=3;break}return e.abrupt("return",n("No User found"));case 3:if(a="",i=new Date(1e3*r.expires),o=new Date,!(i>o)){e.next=10;break}a=r.tokens.access,e.next=22;break;case 10:return e.prev=10,e.next=13,h("auth/token/refresh/",{method:"post",data:{refresh:r.tokens.refresh}});case 13:u=e.sent,a=u.access,s.reactLocalStorage.setObject(l.a,{tokens:m({},r.tokens,{access:a}),expires:u.expires}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10);try{"token_not_valid"===e.t0.data.code?Object(f.g)():Object(f.b)()}catch(c){}return e.abrupt("return",n("Error refreshing token"));case 22:return e.abrupt("return",t(a));case 23:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t,n){return e.apply(this,arguments)}}())},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(){var n=Object(i.a)(c.a.mark((function n(r,a){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=h,n.t1=e,n.t2=m,n.t3={},n.t4=t,n.t5="Bearer ",n.next=9,b();case 9:return n.t6=n.sent,n.t7=n.t5.concat.call(n.t5,n.t6),n.t8={Authorization:n.t7},n.t9={headers:n.t8},n.t10=(0,n.t2)(n.t3,n.t4,n.t9),n.next=16,(0,n.t0)(n.t1,n.t10);case 16:return i=n.sent,n.abrupt("return",r(i));case 20:return n.prev=20,n.t11=n.catch(0),n.abrupt("return",a(n.t11));case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e,t){return n.apply(this,arguments)}}())}},317:function(e,t){},33:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"n",(function(){return g})),n.d(t,"j",(function(){return y}));n(291);var r=n(144),a=n(207),c=n.n(a),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.a[e]({message:t,description:n,top:70})},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(e,t,c()(n.replace(/(?:\r\n|\r|\n)/g,"<br />")))},u=function(){return i("warning","Please, SignIn Again","We SignOut user after 24hr of login")},s=function(){return i("error","Please, SignIn Again","We are having error in getting your info")},l=function(e){return i("success","Welcome ".concat(e),"You successfully signed in.")},d=function(){return i("success","Thank you for giving your time.","You successfully signed out.")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An unknown error occurred during sign in";return i("error",e,"Create a new account.")},p=function(){return r.a.error({message:"Error connecting to server",description:"Try refreshing page. After refresh if problem persist clear data and cookies. If problem doesnt resolve mail to faisal@upcjmi.com",duration:1e3,placement:"bottomRight"})},m=function(e){return i("error","Email ".concat(e," is associated with another account."),"Try signing in or try forgetting password.")},h=function(){return i("success","Account created you successfully")},b=function(){return i("success","Password Changed successfully")},v=function(){return i("error","Error in Changing Password")},g=function(){return i("error","Verify Password Is Not Same")},y=function(e){return o("error","Failed to create account",e)}},375:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),i=n.n(c),o=n(39),u=n(40),s=n(42),l=n(41),d=n(43),f=n(64),p=n(25),m=n(205),h=n(15),b=n(37),v=n(16);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={isAuthenticated:!1,inProgress:!1,signedWith:"U"},j=n(10);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={routes:[{path:j.e,title:"Welcome",screen:Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,833))}))},{path:j.b,title:"Contact Us",screen:Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,657))}))},{path:j.f,title:"Placement and Internship Portal Home",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(35)]).then(n.bind(null,818))})),exact:!0},{path:j.k,title:"Student Portal",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(10),n.e(47)]).then(n.bind(null,843))})),exact:!1},{path:j.a,title:"Company Portal || University Placement Cell, Jamia Millia Islamia",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(10),n.e(44)]).then(n.bind(null,846))})),exact:!1},{path:j.h,title:"Sign In to UPC JMI Portal",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(41)]).then(n.bind(null,620))}))},{path:j.j,title:"Create new student account",screen:Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(6),n.e(32)]).then(n.bind(null,844))}))},{path:j.i,title:"Create new company account",screen:Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(6),n.e(31)]).then(n.bind(null,842))}))},{path:j.d,title:"Forget Password for student account",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(45)]).then(n.bind(null,841))}))},{path:j.l,title:"Terms and Conditions",screen:Object(r.lazy)((function(){return n.e(48).then(n.bind(null,819))}))},{path:j.g,title:"Privacy policy",screen:Object(r.lazy)((function(){return n.e(46).then(n.bind(null,820))}))},{path:j.c,title:"Verify your email",screen:Object(r.lazy)((function(){return n.e(36).then(n.bind(null,821))}))}],connected:null};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={},I=Object(f.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=function(t){return y({},e,{},t)};switch(t.type){case v.f:return n({isAuthenticated:!0,user:t.user,signedWith:t.signedWith,inProgress:!1});case v.e:return y({},O,{inProgress:!0});case v.g:return O;case v.d:return n({inProgress:!1});default:return e}},navigator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=function(t){return E({},e,{},t)};switch(t.type){case v.b:return n({connected:!0});case v.c:return n({connected:!1});default:return e}},student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=function(t){return x({},e,{},t)};switch(t.type){case v.h:return n({extraDetails:t.data});default:return e}},company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=function(t){return A({},e,{},t)};switch(t.type){case v.a:return n({extraDetails:t.data});default:return e}}}),N=n(57),L=n(96),T=n(172),U=(n(148),n(89)),W=(n(149),n(68)),z=n(70),_=(n(113),n(8)),H=(n(224),n(136)),M=n(165),G=H.a.Item,R=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.mode,n=void 0===t?"horizontal":t,r=e.isAuthenticated,c=e.user;return a.a.createElement("div",null,a.a.createElement("div",{className:"header-pill center-hv full-height"},a.a.createElement(M.a,null)),a.a.createElement("div",{className:"header-pill"},a.a.createElement(H.a,{mode:n,className:"no-border",selectedKeys:[]},a.a.createElement(G,{key:"contact"},a.a.createElement(h.b,{to:j.b},a.a.createElement(_.a,{type:"phone"}),"Contact Us")),r?a.a.createElement(G,{key:"appstore"},a.a.createElement(h.b,{to:j.f},a.a.createElement(_.a,{type:"appstore"}),"Placement Portal")):a.a.createElement(G,{key:"sign-up-student"},a.a.createElement(h.b,{to:j.j},a.a.createElement(_.a,{type:"user-add"}),"Create Student Account")),r?null:a.a.createElement(G,{key:"sign-up-company"},a.a.createElement(h.b,{to:j.i},a.a.createElement(_.a,{type:"user-add"}),"Create Company Account")),r&&c?a.a.createElement(G,{key:"user"},a.a.createElement(h.b,{to:j.f},c.name)):null)))})),J=(n(157),n(87)),V=(n(114),n(61)),F=V.a.Title,q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.state={visible:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;window.addEventListener("hashchange",this.onClose),t.listen((function(){e.onClose()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.onClose)}},{key:"render",value:function(){var e=Object(z.a)(!0,!0,!1),t=this.state.visible;return e?a.a.createElement("div",null,a.a.createElement("div",{className:"drawer-handel",onClick:this.showDrawer},a.a.createElement(_.a,{type:"down-circle"})),a.a.createElement(J.a,{placement:"top",closable:!1,onClose:this.onClose,visible:t},a.a.createElement("div",{className:"center-hv"},a.a.createElement(h.b,{to:j.e},a.a.createElement(F,{level:4},"University Placement Cell"))),a.a.createElement(R,{mode:"vertical"}))):null}}]),t}(a.a.Component),B=Object(N.g)(q),Y=n(219),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handelScroll=function(){var e=n.state.prevScrollPos,t=window.pageYOffset,r=document,a=r.body,c=r.documentElement,i=Math.max(a.scrollHeight,a.offsetHeight,c.clientHeight,c.scrollHeight,c.offsetHeight),o=e>t||t<64||i-window.innerHeight-t<64;n.setState({prevScrollPos:t,visible:o})},n.state={prevScrollPos:window.pageYOffset,visible:!0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handelScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handelScroll)}},{key:"render",value:function(){var e=this.state.visible;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"".concat(e?"":"nav-up")},a.a.createElement(U.a,{style:{flex:1}},a.a.createElement(h.b,{to:j.e},a.a.createElement(W.a,{xs:24,md:6,xxl:4,className:"logo-container",style:{justifyContent:Object(z.a)("center","center",null)}},a.a.createElement("img",{src:Y,alt:"University Placement Cell, Logo"}),"\xa0\xa0\xa0",a.a.createElement("div",{className:"black-text font09rem"},a.a.createElement("b",null,"University Placement Cell"),a.a.createElement("br",null),"Jamia Millia Islamia"))),a.a.createElement(W.a,{xs:0,md:18,xxl:20},a.a.createElement(R,{mode:"horizontal"})))),a.a.createElement(B,null))}}]),t}(r.Component),K=n(67),Q=function(e){var t=e.title,n=e.screen;return Object(r.useEffect)((function(){document.title="".concat(t," || University Placement Cell, Jamia Millia Islamia")}),[t]),a.a.createElement(r.Suspense,{fallback:a.a.createElement(L.a,null)},a.a.createElement(n,null))},$=n(58),Z=n(59),ee=n(210),te=V.a.Title,ne=function(){return a.a.createElement("footer",null,a.a.createElement(U.a,null,a.a.createElement(W.a,{xs:24,md:12},a.a.createElement(te,{level:4},"External links"),a.a.createElement(Z.a,{href:$.g},"Placement cell on Jamia's official site"),a.a.createElement(Z.a,{href:$.c},"Jamia Millia Islamia"),a.a.createElement(Z.a,{href:$.d},"Privacy policy"),a.a.createElement(Z.a,{href:$.f},"Terms and Condition")),a.a.createElement(W.a,{xs:24,md:12},a.a.createElement(te,{level:4},"Application v",ee.version),"This is an open source application.",a.a.createElement("br",null),a.a.createElement(Z.a,{href:$.e},a.a.createElement(_.a,{type:"github"}),"\xa0 GitHub Repository"),a.a.createElement(Z.a,{href:$.a},"Report a Bug"),a.a.createElement(Z.a,{href:$.b},"Request feature"))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"center-hv"},a.a.createElement(te,{level:4},"\xa9 2019 University Placement Cell, Jamia Millia Islamia")))},re=(n(50),n(18)),ae=(n(226),n(202)),ce=(n(227),n(201)),ie=n(33),oe=V.a.Title,ue=V.a.Text,se=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("beforeinstallprompt",n.beforeInstall),window.addEventListener("appinstalled",n.onInstall)},n.componentWillUnmount=function(){window.removeEventListener("beforeinstallprompt",n.beforeInstall),window.removeEventListener("appinstalled",n.onInstall)},n.beforeInstall=function(e){e.preventDefault();var t=e;n.setState({installPrompt:t}),setTimeout((function(){n.setState({isA2HSVisible:!0})}),100)},n.handelNotNow=function(){n.setState({isA2HSVisible:!1}),Object(ie.e)("info","We will miss you...","In case you change your mind, go to Options > Add to Home Screen")},n.handelPWAInstallPrompt=function(){var e=n.state.installPrompt;e&&e.prompt().then((function(e){"accepted"===e.outcome?n.setState({installing:!0}):n.handelNotNow()}))},n.onInstall=function(){ce.a.success("Install successful"),n.setState({installing:!1,isA2HSVisible:!1})},n.toggle=function(){var e=n.state.isA2HSVisible;n.setState({isA2HSVisible:!e})},n.state={installPrompt:null,isA2HSVisible:!1,installing:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isA2HSVisible,n=e.installing,r=Object(z.a)(J.a,J.a,ae.a);return a.a.createElement(r,{visible:t,placement:"bottom",centered:!0,footer:null,closable:!1},a.a.createElement(oe,{level:3},"Access all our job/internships offline"),a.a.createElement(ue,null,"Install our web app, it wont take any space on your device."),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"center"},a.a.createElement(re.a,{size:"small",type:"link",onClick:this.handelNotNow},"Not Now"),a.a.createElement("br",null),a.a.createElement(re.a,{loading:n,className:"full-width",size:"large",type:"primary",onClick:this.handelPWAInstallPrompt},n?"Installing...":"Install")))}}]),t}(r.Component),le=(n(152),n(91)),de=function(){return a.a.createElement("div",{className:"full-page center-hv"},a.a.createElement(le.a,{status:"500",title:"500",subTitle:"Sorry, we encountered some error.",extra:a.a.createElement(h.b,{to:j.e},a.a.createElement(re.a,{type:"primary"},"Back Home"))}))},fe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(de,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component),pe=Object(p.b)((function(e){return{routes:e.navigator.routes,connected:e.navigator.connected}}),(function(e){return{checkUser:function(){return e(Object(K.a)())}}}))(Object(N.g)((function(e){var t=e.routes,n=e.checkUser,c=e.history;return Object(r.useEffect)((function(){n()}),[n]),c.listen((function(){window.scrollTo(0,0)})),a.a.createElement(fe,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(L.a,null)},a.a.createElement(X,null),a.a.createElement(se,null),a.a.createElement("main",null,a.a.createElement(N.d,null,t.map((function(e,t){return a.a.createElement(N.b,{exact:void 0===e.exact||e.exact,path:e.path,component:function(){return a.a.createElement(Q,{title:e.title,screen:e.screen})},key:t.toString()})})),a.a.createElement(N.b,{component:T.a}))),a.a.createElement(ne,null)))}))),me=Object(f.d)(I,Object(f.a)(m.a)),he=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("resize",n.updateDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.updateDimensions)},n.updateDimensions=function(){n.state.width!==window.innerWidth&&n.setState({width:window.innerWidth})},n.state={width:window.innerWidth},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{store:me},a.a.createElement(h.a,null,a.a.createElement(pe,null)))}}]),t}(r.Component),be=(n(375),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){}))}i.a.render(a.a.createElement(he,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");be?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):ve(t,e)}))}}()},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="APITokens",a="SignedType"},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return s}));var r="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=alhaqhassan&labels=bug&template=bug_report.md&title=",a="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=Faisal-Manzer&labels=enhancement&template=feature_request.md&title=",c="https://github.com/Faisal-Manzer/upcjmi-react-app",i="https://www.jmi.ac.in/studyatjamia/cell/upc/introduction",o="https://jmi.ac.in",u="/terms-and-conditions/",s="/privacy-policy/"},59:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.href,n=e.children,r=e.newLine,c=void 0===r||r;return a.a.createElement("span",null,a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n),c?a.a.createElement("br",null):null)}},67:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return j}));var r=n(17),a=n.n(r),c=n(34),i=n(48),o=n(10),u=n(33),s=n(81),l=n(49),d=n(16),f=function(){},p=function(e){i.reactLocalStorage.setObject(l.a,{tokens:e,expires:e.expires})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(c.a)(a.a.mark((function r(c){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c({type:d.f,user:e,signedWith:t}),i.reactLocalStorage.set(l.b,t),n||Object(u.h)(e.name);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U";return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:d.e}),n.next=4,e();case 4:c=n.sent,i=c.user,o=c.token,p(o),r({type:d.f,user:i,signedWith:t}),m(i,t)(r),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:d.d}),n.t0&&void 0!==n.t0.data?Object(u.l)(n.t0.data.detail):Object(u.l)(void 0);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(s.h)(e,t)}),"E")(r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(s.i)(e,t)}),"G")(r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(t){switch(e.type){case"E":b(e.email,e.password)(t);break;case"G":v(e.id,e.token)(t);break;default:Object(u.e)("error","Unknown signing")}}},y=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.d)();case 3:t({type:d.b}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:d.c});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.reactLocalStorage.get(l.a)){e.next=15;break}return e.prev=1,e.next=4,Object(s.c)();case 4:n=e.sent,m(n,i.reactLocalStorage.get(l.b),!0)(t),t({type:d.b}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),localStorage.clear(),y()(t);case 13:e.next=16;break;case 15:y()(t);case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return function(t){i.reactLocalStorage.remove(l.a),t({type:d.g}),Object(u.i)(),e(o.e)}}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=function(e){return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"xl":"xxl"},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0,o=r(window.innerWidth);switch(void 0===t&&(t=e),void 0===n&&(n=t),void 0===a&&(a=n),void 0===c&&(c=a),void 0===i&&(i=c),o){case"xs":return e;case"sm":return t;case"md":return n;case"lg":return a;case"xl":return c;case"xxl":return i;default:return 0}}},81:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return c})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return h}));var r=n(28),a=function(){return Object(r.a)("ping/")},c=function(e){return Object(r.a)("student/sign-up/",{method:"post",data:e})},i=function(e){return Object(r.a)("company/sign-up/",{method:"post",data:e})},o=function(e,t){return Object(r.a)("auth/sign-in/email/",{method:"post",data:{email:e,password:t}})},u=function(e,t){return Object(r.a)("auth/sign-in/google/",{method:"post",data:{id:e,token:t}})},s=function(e){return Object(r.a)("contact/",{method:"post",data:e})},l=function(){return Object(r.b)("auth/user/meta/")},d=function(e){return Object(r.a)("auth/user/exists/",{params:{email:e}})},f=function(e){return Object(r.a)("auth/verify/email/",{method:"post",data:{hash:e}})},p=function(e){return Object(r.a)("/auth/reset-password/send/",{method:"post",data:{email:e}})},m=function(e){return Object(r.a)("/auth/reset-password/",{method:"post",data:e})},h=function(){return Object(r.b)("auth/verify/email/send/")}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="619494214325-1vm9ip6isq1rn74f9ksa7tl26k1c2agg.apps.googleusercontent.com",a="6LcUrrgUAAAAALddS7fuPA7GG6jgTR_gpCkGwVD0",c="https://api.upcjmi.com"},96:function(e,t,n){"use strict";n(216);var r=n(154),a=n(0),c=n.n(a);t.a=function(){return c.a.createElement("div",{className:"loading-screen"},c.a.createElement(r.a,{size:"large",tip:"Loading..."}))}}},[[230,13,14]]]);
//# sourceMappingURL=main.0db3be16.chunk.js.map