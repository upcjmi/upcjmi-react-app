(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[12],{10:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"l",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m}));var r="/",a="/contact/",c="/sign-in/",i="/sign-up/student/",o="/sign-up/company/",u="/forget-password/",s="/privacy-policy/",l="/terms-and-conditions/",d="/portal/",f="/portal/student/",p="/portal/company/",m="/verification/email/:hash"},16:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return l}));var r="SIGN_IN_INITIATED",a="SIGN_IN_SUCCESS",c="SIGN_OUT",i="SIGNING_IN_FAILED",o="CONNECTED_WITH_SERVER",u="COULD_NOT_CONNECT_TO_SERVER",s="STUDENT_EXTRA_DATA_LOADED",l="COMPANY_EXTRA_DATA_LOADED"},166:function(e,t,n){"use strict";n(49);var r=n(21),a=n(0),c=n.n(a),i=n(27),o=n(14),u=n(10),s=n(157),l=n(15),d=n(89),f=n(67),p=Object(l.g)(Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{signOut:function(t){return e(Object(f.e)(t))}}}))((function(e){var t=e.history,n=e.redirect;return c.a.createElement(s.GoogleLogout,{clientId:d.b||"",onLogoutSuccess:function(){},render:function(a){return c.a.createElement(r.a,{onClick:function(){var r=n?t.push:function(){};e.signOut(r),a.onClick()},icon:"logout",type:"link"},"Sign Out")}})}))),m=Object(l.g)(Object(i.b)((function(){return{}}),(function(e){return{signOut:function(t){return e(Object(f.e)(t))}}}))((function(e){var t=e.signOut,n=e.history,a=e.redirect,i=void 0===a||a;return c.a.createElement(r.a,{onClick:function(){var e=i?n.push:function(){};t(e)},icon:"logout",type:"link"},"Sign Out")}))),h=Object(i.b)((function(e){return{signedWith:e.auth.signedWith}}))((function(e){var t=e.signedWith,n=void 0!==t&&t,r=e.redirect,a=void 0===r||r;switch(n){case"G":return c.a.createElement(p,{redirect:a});case"E":case"U":default:return c.a.createElement(m,{redirect:a})}}));t.a=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?c.a.createElement(h,null):c.a.createElement(o.b,{to:u.h},c.a.createElement(r.a,{type:"primary",size:"large",icon:"login"},"Sign In"))}))},173:function(e,t,n){"use strict";n(155);var r=n(92),a=(n(49),n(21)),c=n(0),i=n.n(c),o=n(14),u=n(10);t.a=function(){return i.a.createElement("div",{className:"full-page center-hv"},i.a.createElement(r.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:i.a.createElement(o.b,{to:u.e},i.a.createElement(a.a,{type:"primary"},"Back Home"))}))}},213:function(e){e.exports=JSON.parse('{"name":"upcjmi","version":"1.0.1","private":false,"license":"GPL-2.0","homepage":"https://upcjmi.com","dependencies":{"antd":"^3.23.6","axios":"^0.19.0","jamia-all-courses":"^1.2.0","moment":"^2.24.0","react":"^16.10.2","react-dom":"^16.10.2","react-google-login":"^5.0.5","react-google-recaptcha":"^2.0.1","react-helmet":"^5.2.1","react-html-parser":"^2.0.2","react-markdown":"^4.2.2","react-redux":"^7.1.1","react-router-dom":"^5.1.2","react-router-hash-link":"^1.2.2","react-scripts":"^3.2.0","react-simplemde-editor":"^4.1.0","reactjs-localstorage":"^0.0.8","redux":"^4.0.4","redux-thunk":"^2.3.0"},"scripts":{"lint":"eslint \'src/**/*.{js,jsx,ts,tsx}\' --fix","analyze":"yarn build && source-map-explorer \'build/static/js/*.js\'","start":"sh -ac \'source .env.development\'; react-app-rewired start","build":"sh -ac \'source .env.production\'; react-app-rewired build","test":"react-app-rewired test","eject":"react-scripts eject","predeploy":"yarn run build && cp build/index.html build/404.html && cp CNAME build/CNAME","deploy":"gh-pages -d build -m","aws:sync":"aws s3 sync build/ s3://upcjmi --cache-control max-age=31557600 --delete","aws:invalidate":"aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id E2JT16QJ1F7YLO --paths /index.html /service-worker.js","aws:deploy":"yarn predeploy && yarn aws:sync && yarn aws:invalidate","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@types/jest":"^24.0.18","@types/node":"^12.7.12","@types/react":"^16.9.5","@types/react-dom":"^16.9.1","@types/react-google-recaptcha":"^1.1.0","@types/react-helmet":"^5.0.11","@types/react-html-parser":"^2.0.1","@types/react-redux":"^7.1.4","@types/react-router-dom":"^5.1.0","@types/react-router-hash-link":"^1.2.1","@typescript-eslint/eslint-plugin":"^2.3.3","@typescript-eslint/parser":"^2.3.3","all-contributors-cli":"^6.9.1","babel-plugin-import":"^1.12.2","babel-plugin-transform-remove-console":"^6.9.4","customize-cra":"^0.8.0","eslint":"^6.5.1","eslint-config-airbnb":"^18.0.1","eslint-config-prettier":"^6.4.0","eslint-plugin-import":"^2.18.2","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.16.0","gh-pages":"^2.1.1","husky":"^3.0.8","less":"^3.10.3","less-loader":"^5.0.0","lint-staged":"^9.4.2","node-sass":"^4.13.1","prettier":"^1.19.1","pretty-quick":"^1.11.1","react-app-rewired":"^2.1.3","source-map-explorer":"^2.1.0","typescript":"^3.6.4"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/*.{js,jsx,ts,tsx}":["pretty-quick \u2014-staged","eslint --fix","git add"]}}')},222:function(e,t,n){e.exports=n.p+"static/media/jamia-logo.1b80d421.svg"},233:function(e,t,n){e.exports=n(380)},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(20),a=n(18),c=n.n(a),i=n(37),o=n(113),u=n.n(o),s=n(47),l=n(48),d=n(89),f=n(36);u.a.defaults.baseURL=d.a,u.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded";var p=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",new Promise((function(e,r){u()(t,n).then((function(t){return e(t.data)})).catch((function(e){return r(e.response)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return new Promise(function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i,o,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.reactLocalStorage.getObject(l.a)){e.next=3;break}return e.abrupt("return",n("No User found"));case 3:if(i="",o=new Date(1e3*a.expires),u=new Date,!(o>u)){e.next=10;break}i=a.tokens.access,e.next=22;break;case 10:return e.prev=10,e.next=13,p("auth/token/refresh/",{method:"post",data:{refresh:a.tokens.refresh}});case 13:d=e.sent,i=d.access,s.reactLocalStorage.setObject(l.a,{tokens:Object(r.a)(Object(r.a)({},a.tokens),{},{access:i}),expires:d.expires}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10);try{"token_not_valid"===e.t0.data.code?Object(f.g)():Object(f.b)()}catch(c){}return e.abrupt("return",n("Error refreshing token"));case 22:return e.abrupt("return",t(i));case 23:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t,n){return e.apply(this,arguments)}}())},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(){var n=Object(i.a)(c.a.mark((function n(a,i){var o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=p,n.t1=e,n.t2=r.a,n.t3=Object(r.a)({},t),n.t4={},n.t5="Bearer ",n.next=9,m();case 9:return n.t6=n.sent,n.t7=n.t5.concat.call(n.t5,n.t6),n.t8={Authorization:n.t7},n.t9={headers:n.t8},n.t10=(0,n.t2)(n.t3,n.t4,n.t9),n.next=16,(0,n.t0)(n.t1,n.t10);case 16:return o=n.sent,n.abrupt("return",a(o));case 20:return n.prev=20,n.t11=n.catch(0),n.abrupt("return",i(n.t11));case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e,t){return n.apply(this,arguments)}}())}},321:function(e,t){},36:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return h})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return b})),n.d(t,"n",(function(){return g})),n.d(t,"j",(function(){return y}));n(295);var r=n(146),a=n(211),c=n.n(a),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.a[e]({message:t,description:n,top:70})},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(e,t,c()(n.replace(/(?:\r\n|\r|\n)/g,"<br />")))},u=function(){return i("warning","Please, SignIn Again","We SignOut user after 24hr of login")},s=function(){return i("error","Please, SignIn Again","We are having error in getting your info")},l=function(e){return i("success","Welcome ".concat(e),"You successfully signed in.")},d=function(){return i("success","Thank you for giving your time.","You successfully signed out.")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An unknown error occurred during sign in";return i("error",e,"Create a new account.")},p=function(){return r.a.error({message:"Error connecting to server",description:"Try refreshing page. After refresh if problem persist clear data and cookies. If problem doesnt resolve mail to faisal@upcjmi.com",duration:1e3,placement:"bottomRight"})},m=function(e){return i("error","Email ".concat(e," is associated with another account."),"Try signing in or try forgetting password.")},h=function(){return i("success","Account created you successfully")},v=function(){return i("success","Password Changed successfully")},b=function(){return i("error","Error in Changing Password")},g=function(){return i("error","Verify Password Is Not Same")},y=function(e){return o("error","Failed to create account",e)}},379:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),o=n(40),u=n(41),s=n(43),l=n(42),d=n(65),f=n(27),p=n(209),m=n(14),h=n(20),v=n(16),b={isAuthenticated:!1,inProgress:!1,signedWith:"U"},g=n(10),y={routes:[{path:g.e,title:"Welcome",screen:Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,857))}))},{path:g.b,title:"Contact Us",screen:Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,668))}))},{path:g.f,title:"Placement and Internship Portal Home",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(36)]).then(n.bind(null,842))})),exact:!0},{path:g.k,title:"Student Portal",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(10),n.e(47)]).then(n.bind(null,863))})),exact:!1},{path:g.a,title:"Company Portal || University Placement Cell, Jamia Millia Islamia",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(10),n.e(44)]).then(n.bind(null,864))})),exact:!1},{path:g.h,title:"Sign In to UPC JMI Portal",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(41)]).then(n.bind(null,626))}))},{path:g.j,title:"Create new student account",screen:Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(6),n.e(29)]).then(n.bind(null,865))}))},{path:g.i,title:"Create new company account",screen:Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(6),n.e(28)]).then(n.bind(null,866))}))},{path:g.d,title:"Forget Password for student account",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(45)]).then(n.bind(null,867))}))},{path:g.l,title:"Terms and Conditions",screen:Object(r.lazy)((function(){return n.e(48).then(n.bind(null,843))}))},{path:g.g,title:"Privacy policy",screen:Object(r.lazy)((function(){return n.e(46).then(n.bind(null,844))}))},{path:g.c,title:"Verify your email",screen:Object(r.lazy)((function(){return n.e(33).then(n.bind(null,845))}))}],connected:null},E={},w={},j=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=function(t){return Object(h.a)(Object(h.a)({},e),t)};switch(t.type){case v.f:return n({isAuthenticated:!0,user:t.user,signedWith:t.signedWith,inProgress:!1});case v.e:return Object(h.a)(Object(h.a)({},b),{},{inProgress:!0});case v.g:return b;case v.d:return n({inProgress:!1});default:return e}},navigator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=function(t){return Object(h.a)(Object(h.a)({},e),t)};switch(t.type){case v.b:return n({connected:!0});case v.c:return n({connected:!1});default:return e}},student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=function(t){return Object(h.a)(Object(h.a)({},e),t)};switch(t.type){case v.h:return n({extraDetails:t.data});default:return e}},company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=function(t){return Object(h.a)(Object(h.a)({},e),t)};switch(t.type){case v.a:return n({extraDetails:t.data});default:return e}}}),O=n(15),k=n(96),x=n(173),S=(n(150),n(90)),P=(n(151),n(68)),C=n(70),A=(n(114),n(5)),N=(n(227),n(139)),I=n(166),L=N.a.Item,T=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.mode,n=void 0===t?"horizontal":t,r=e.isAuthenticated,c=e.user;return a.a.createElement("div",null,a.a.createElement("div",{className:"header-pill center-hv full-height"},a.a.createElement(I.a,null)),a.a.createElement("div",{className:"header-pill"},a.a.createElement(N.a,{mode:n,className:"no-border",selectedKeys:[]},a.a.createElement(L,{key:"contact"},a.a.createElement(m.b,{to:g.b},a.a.createElement(A.a,{type:"phone"}),"Contact Us")),r?a.a.createElement(L,{key:"appstore"},a.a.createElement(m.b,{to:g.f},a.a.createElement(A.a,{type:"appstore"}),"Placement Portal")):a.a.createElement(L,{key:"sign-up-student"},a.a.createElement(m.b,{to:g.j},a.a.createElement(A.a,{type:"user-add"}),"Create Student Account")),r?null:a.a.createElement(L,{key:"sign-up-company"},a.a.createElement(m.b,{to:g.i},a.a.createElement(A.a,{type:"user-add"}),"Create Company Account")),r&&c?a.a.createElement(L,{key:"user"},a.a.createElement(m.b,{to:g.f},c.name)):null)))})),U=(n(159),n(87)),W=(n(115),n(59)),D=W.a.Title,z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).showDrawer=function(){r.setState({visible:!0})},r.onClose=function(){r.setState({visible:!1})},r.state={visible:!1},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;window.addEventListener("hashchange",this.onClose),t.listen((function(){e.onClose()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.onClose)}},{key:"render",value:function(){var e=Object(C.a)(!0,!0,!1),t=this.state.visible;return e?a.a.createElement("div",null,a.a.createElement("div",{className:"drawer-handel",onClick:this.showDrawer},a.a.createElement(A.a,{type:"down-circle"})),a.a.createElement(U.a,{placement:"top",closable:!1,onClose:this.onClose,visible:t},a.a.createElement("div",{className:"center-hv"},a.a.createElement(m.b,{to:g.e},a.a.createElement(D,{level:4},"University Placement Cell"))),a.a.createElement(T,{mode:"vertical"}))):null}}]),n}(a.a.Component),_=Object(O.g)(z),H=n(222),M=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handelScroll=function(){var e=r.state.prevScrollPos,t=window.pageYOffset,n=document,a=n.body,c=n.documentElement,i=Math.max(a.scrollHeight,a.offsetHeight,c.clientHeight,c.scrollHeight,c.offsetHeight),o=e>t||t<64||i-window.innerHeight-t<64;r.setState({prevScrollPos:t,visible:o})},r.state={prevScrollPos:window.pageYOffset,visible:!0},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handelScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handelScroll)}},{key:"render",value:function(){var e=this.state.visible;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"".concat(e?"":"nav-up")},a.a.createElement(S.a,{style:{flex:1}},a.a.createElement(m.b,{to:g.e},a.a.createElement(P.a,{xs:24,md:6,xxl:4,className:"logo-container",style:{justifyContent:Object(C.a)("center","center",null)}},a.a.createElement("img",{src:H,alt:"University Placement Cell, Logo"}),"\xa0\xa0\xa0",a.a.createElement("div",{className:"black-text font09rem"},a.a.createElement("b",null,"University Placement Cell"),a.a.createElement("br",null),"Jamia Millia Islamia"))),a.a.createElement(P.a,{xs:0,md:18,xxl:20},a.a.createElement(T,{mode:"horizontal"})))),a.a.createElement(_,null))}}]),n}(r.Component),R=n(67),J=function(e){var t=e.title,n=e.screen;return Object(r.useEffect)((function(){document.title="".concat(t," || University Placement Cell, Jamia Millia Islamia")}),[t]),a.a.createElement(r.Suspense,{fallback:a.a.createElement(k.a,null)},a.a.createElement(n,null))},G=n(56),V=n(57),F=n(213),q=W.a.Title,Y=function(){return a.a.createElement("footer",null,a.a.createElement(S.a,null,a.a.createElement(P.a,{xs:24,md:12},a.a.createElement(q,{level:4},"External links"),a.a.createElement(V.a,{href:G.g},"Placement cell on Jamia's official site"),a.a.createElement(V.a,{href:G.c},"Jamia Millia Islamia"),a.a.createElement(V.a,{href:G.d},"Privacy policy"),a.a.createElement(V.a,{href:G.f},"Terms and Condition")),a.a.createElement(P.a,{xs:24,md:12},a.a.createElement(q,{level:4},"Application v",F.version),"This is an open source application.",a.a.createElement("br",null),a.a.createElement(V.a,{href:G.e},a.a.createElement(A.a,{type:"github"}),"\xa0 GitHub Repository"),a.a.createElement(V.a,{href:G.a},"Report a Bug"),a.a.createElement(V.a,{href:G.b},"Request feature"))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"center-hv"},a.a.createElement(q,{level:4},"\xa9 2019 University Placement Cell, Jamia Millia Islamia")))},B=(n(49),n(21)),X=(n(229),n(206)),K=(n(230),n(205)),Q=n(36),$=W.a.Title,Z=W.a.Text,ee=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){window.addEventListener("beforeinstallprompt",r.beforeInstall),window.addEventListener("appinstalled",r.onInstall)},r.componentWillUnmount=function(){window.removeEventListener("beforeinstallprompt",r.beforeInstall),window.removeEventListener("appinstalled",r.onInstall)},r.beforeInstall=function(e){e.preventDefault();var t=e;r.setState({installPrompt:t}),setTimeout((function(){r.setState({isA2HSVisible:!0})}),100)},r.handelNotNow=function(){r.setState({isA2HSVisible:!1}),Object(Q.e)("info","We will miss you...","In case you change your mind, go to Options > Add to Home Screen")},r.handelPWAInstallPrompt=function(){var e=r.state.installPrompt;e&&e.prompt().then((function(e){"accepted"===e.outcome?r.setState({installing:!0}):r.handelNotNow()}))},r.onInstall=function(){K.a.success("Install successful"),r.setState({installing:!1,isA2HSVisible:!1})},r.toggle=function(){var e=r.state.isA2HSVisible;r.setState({isA2HSVisible:!e})},r.state={installPrompt:null,isA2HSVisible:!1,installing:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isA2HSVisible,n=e.installing,r=Object(C.a)(U.a,U.a,X.a);return a.a.createElement(r,{visible:t,placement:"bottom",centered:!0,footer:null,closable:!1},a.a.createElement($,{level:3},"Access all our job/internships offline"),a.a.createElement(Z,null,"Install our web app, it wont take any space on your device."),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"center"},a.a.createElement(B.a,{size:"small",type:"link",onClick:this.handelNotNow},"Not Now"),a.a.createElement("br",null),a.a.createElement(B.a,{loading:n,className:"full-width",size:"large",type:"primary",onClick:this.handelPWAInstallPrompt},n?"Installing...":"Install")))}}]),n}(r.Component),te=(n(155),n(92)),ne=function(){return a.a.createElement("div",{className:"full-page center-hv"},a.a.createElement(te.a,{status:"500",title:"500",subTitle:"Sorry, we encountered some error.",extra:a.a.createElement(m.b,{to:g.e},a.a.createElement(B.a,{type:"primary"},"Back Home"))}))},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(ne,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),ae=Object(f.b)((function(e){return{routes:e.navigator.routes,connected:e.navigator.connected}}),(function(e){return{checkUser:function(){return e(Object(R.a)())}}}))(Object(O.g)((function(e){var t=e.routes,n=e.checkUser,c=e.history;return Object(r.useEffect)((function(){n()}),[n]),c.listen((function(){window.scrollTo(0,0)})),a.a.createElement(re,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(k.a,null)},a.a.createElement(M,null),a.a.createElement(ee,null),a.a.createElement("main",null,a.a.createElement(O.d,null,t.map((function(e,t){return a.a.createElement(O.b,{exact:void 0===e.exact||e.exact,path:e.path,component:function(){return a.a.createElement(J,{title:e.title,screen:e.screen})},key:t.toString()})})),a.a.createElement(O.b,{component:x.a}))),a.a.createElement(Y,null)))}))),ce=Object(d.d)(j,Object(d.a)(p.a)),ie=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){window.addEventListener("resize",r.updateDimensions)},r.componentWillUnmount=function(){window.removeEventListener("resize",r.updateDimensions)},r.updateDimensions=function(){r.state.width!==window.innerWidth&&r.setState({width:window.innerWidth})},r.state={width:window.innerWidth},r}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(f.a,{store:ce},a.a.createElement(m.a,null,a.a.createElement(ae,null)))}}]),n}(r.Component),oe=(n(379),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){}))}i.a.render(a.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");oe?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):ue(t,e)}))}}()},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="APITokens",a="SignedType"},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return s}));var r="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=alhaqhassan&labels=bug&template=bug_report.md&title=",a="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=Faisal-Manzer&labels=enhancement&template=feature_request.md&title=",c="https://github.com/Faisal-Manzer/upcjmi-react-app",i="https://www.jmi.ac.in/studyatjamia/cell/upc/introduction",o="https://jmi.ac.in",u="/terms-and-conditions/",s="/privacy-policy/"},57:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.href,n=e.children,r=e.newLine,c=void 0===r||r;return a.a.createElement("span",null,a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n),c?a.a.createElement("br",null):null)}},67:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return E})),n.d(t,"e",(function(){return w}));var r=n(18),a=n.n(r),c=n(37),i=n(47),o=n(10),u=n(36),s=n(82),l=n(48),d=n(16),f=function(){},p=function(e){i.reactLocalStorage.setObject(l.a,{tokens:e,expires:e.expires})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(c.a)(a.a.mark((function r(c){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c({type:d.f,user:e,signedWith:t}),i.reactLocalStorage.set(l.b,t),n||Object(u.h)(e.name);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U";return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:d.e}),n.next=4,e();case 4:c=n.sent,i=c.user,o=c.token,p(o),r({type:d.f,user:i,signedWith:t}),m(i,t)(r),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:d.d}),n.t0&&void 0!==n.t0.data?Object(u.l)(n.t0.data.detail):Object(u.l)(void 0);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(s.h)(e,t)}),"E")(r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(s.i)(e,t)}),"G")(r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(t){switch(e.type){case"E":v(e.email,e.password)(t);break;case"G":b(e.id,e.token)(t);break;default:Object(u.e)("error","Unknown signing")}}},y=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.d)();case 3:t({type:d.b}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:d.c});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.reactLocalStorage.get(l.a)){e.next=15;break}return e.prev=1,e.next=4,Object(s.c)();case 4:n=e.sent,m(n,i.reactLocalStorage.get(l.b),!0)(t),t({type:d.b}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),localStorage.clear(),y()(t);case 13:e.next=16;break;case 15:y()(t);case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return function(t){i.reactLocalStorage.remove(l.a),t({type:d.g}),Object(u.i)(),e(o.e)}}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=function(e){return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"xl":"xxl"},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0,o=r(window.innerWidth);switch(void 0===t&&(t=e),void 0===n&&(n=t),void 0===a&&(a=n),void 0===c&&(c=a),void 0===i&&(i=c),o){case"xs":return e;case"sm":return t;case"md":return n;case"lg":return a;case"xl":return c;case"xxl":return i;default:return 0}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return c})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return h}));var r=n(29),a=function(){return Object(r.a)("ping/")},c=function(e){return Object(r.a)("student/sign-up/",{method:"post",data:e})},i=function(e){return Object(r.a)("company/sign-up/",{method:"post",data:e})},o=function(e,t){return Object(r.a)("auth/sign-in/email/",{method:"post",data:{email:e,password:t}})},u=function(e,t){return Object(r.a)("auth/sign-in/google/",{method:"post",data:{id:e,token:t}})},s=function(e){return Object(r.a)("contact/",{method:"post",data:e})},l=function(){return Object(r.b)("auth/user/meta/")},d=function(e){return Object(r.a)("auth/user/exists/",{params:{email:e}})},f=function(e){return Object(r.a)("auth/verify/email/",{method:"post",data:{hash:e}})},p=function(e){return Object(r.a)("/auth/reset-password/send/",{method:"post",data:{email:e}})},m=function(e){return Object(r.a)("/auth/reset-password/",{method:"post",data:e})},h=function(){return Object(r.b)("auth/verify/email/send/")}},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="678999367971-7cs9m69mujt42138qkf6hhvacq83a23k.apps.googleusercontent.com",a="6LdY2LsUAAAAAHXT8eTj03n3Rkwqa9L5nkAUNME0",c="https://dev-api.upcjmi.com"},96:function(e,t,n){"use strict";n(218);var r=n(156),a=n(0),c=n.n(a);t.a=function(){return c.a.createElement("div",{className:"loading-screen"},c.a.createElement(r.a,{size:"large",tip:"Loading..."}))}}},[[233,13,14]]]);
//# sourceMappingURL=main.0345fb11.chunk.js.map