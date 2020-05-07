(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[39],{516:function(e,t,n){"use strict";n(50);var a=n(18),r=(n(114),n(61)),i=n(0),c=n.n(i),l=n(57),s=n(15),u=n(25),o=n(10),m=(n(409),n(413)),d=(n(211),n(400)),g=(n(113),n(8)),f=n(39),p=n(40),b=n(42),E=n(41),h=n(43),y=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.form,r=t.signIn;(0,a.validateFields)((function(e,t){e||r(t.email,t.password)}))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.inProgress,r=t.getFieldDecorator;return c.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"login-form",id:"sign-in-form"},c.a.createElement(m.a.Item,null,r("email",{rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Enter a valid email!"}]})(c.a.createElement(d.a,{prefix:c.a.createElement(g.a,{type:"user",className:"input-prefix"}),placeholder:"Email",type:"email",autoComplete:"username email",autoCapitalize:"none",autoCorrect:"off"}))),c.a.createElement(m.a.Item,null,r("password",{rules:[{required:!0,message:"Please input your Password!"}]})(c.a.createElement(d.a,{prefix:c.a.createElement(g.a,{type:"lock",className:"input-prefix"}),type:"password",placeholder:"Password",autoComplete:"password"}))),c.a.createElement(m.a.Item,null,c.a.createElement(a.a,{htmlType:"submit",className:"login-form-button",type:"primary",icon:n?"loading":"login"},"Sign In"),c.a.createElement("a",{className:"login-form-forgot",href:"/forget-password"},"Forgot password")))}}]),t}(c.a.Component),j=Object(u.b)((function(e){return{inProgress:e.auth.inProgress}}))(m.a.create({name:"sign-in"})(y)),v=n(67),O=Object(u.b)((function(){return{}}),(function(e){return{signIn:function(t,n){return e(Object(v.c)(t,n))}}}))((function(e){return c.a.createElement(j,{signIn:function(t,n){e.signIn(t,n)}})})),I=n(155),w=n(88),k=n(16),C=Object(u.b)((function(e){return{inProgress:e.auth.inProgress}}),(function(e){return{signIn:function(t,n){return e(Object(v.d)(t,n))},startSignInProcess:function(){return e({type:k.e})},signInFailed:function(){return e({type:k.d})}}}))((function(e){var t=e.inProgress;return c.a.createElement(I.GoogleLogin,{clientId:w.b||"",render:function(n){return c.a.createElement(a.a,{onClick:function(){e.startSignInProcess(),n.onClick()},disabled:n.disabled,type:"primary",icon:t?"loading":"google",className:"full-width",style:{backgroundColor:n.disabled?"#eeeeee":"#000000"},size:"large"},"Sign In With Google")},buttonText:"Login",onSuccess:function(t){e.signIn(t.googleId,t.tokenId)},onFailure:function(){e.signInFailed()},cookiePolicy:"single_host_origin"})})),P=r.a.Title;t.a=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){var t=e.isAuthenticated,n=e.user;if(t&&n)switch(n.type){case"C":return c.a.createElement(l.a,{to:o.a});case"S":return c.a.createElement(l.a,{to:o.k});default:return c.a.createElement(l.a,{to:o.e})}return c.a.createElement("div",null,c.a.createElement(P,null,"Sign In"),c.a.createElement(C,null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"center"},"OR"),c.a.createElement("br",null),c.a.createElement(O,null),c.a.createElement("br",null),c.a.createElement(s.b,{to:o.j},c.a.createElement(a.a,{type:"dashed",className:"full-width",icon:"user-add",size:"large"},"Create Student Account")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(s.b,{to:o.i},c.a.createElement(a.a,{type:"dashed",className:"full-width",icon:"user-add",size:"large"},"Create Company Account")))}))},830:function(e,t,n){"use strict";n.r(t);n(50);var a=n(18),r=(n(216),n(154)),i=n(17),c=n.n(i),l=n(34),s=n(378),u=n(0),o=n.n(u),m=n(57),d=n(25),g=n(81),f=n(33),p=n(67),b=n(516);t.default=Object(m.g)(Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{signInUser:function(t){return e(Object(p.b)(t))}}}))((function(e){var t=e.data,n=e.action,i=e.startAgain,m=e.signInUser,d=e.isAuthenticated,p=Object(u.useState)("progress"),E=Object(s.a)(p,2),h=E[0],y=E[1];if(Object(u.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,Object(g.j)(t);case 4:Object(f.k)(),y("signing"),m(t.account),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Object(f.j)(e.t0&&e.t0.data?e.t0.data.detail:"Unknown error occured"),y("failed");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[t,n,m]),d)return o.a.createElement(b.a,null);return o.a.createElement("div",{className:"height-300 center-hv"},o.a.createElement("div",null,function(){switch(h){case"progress":return o.a.createElement(r.a,{tip:"Creating your account"});case"signing":return o.a.createElement(r.a,{tip:"Signing you in"});case"failed":return o.a.createElement("div",{className:"center"},"Failed to create account try again. Make sure all fields are correctly entered.",o.a.createElement("br",null),o.a.createElement(a.a,{onClick:i,type:"danger"},"Please Try Again"));default:return"Unknown signing up status"}}()))})))}}]);
//# sourceMappingURL=39.6034e0d4.chunk.js.map