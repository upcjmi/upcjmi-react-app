(this.webpackJsonpupcjmi=this.webpackJsonpupcjmi||[]).push([[34],{416:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return r})),n.d(t,"j",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"o",(function(){return o})),n.d(t,"n",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"h",(function(){return b})),n.d(t,"k",(function(){return h})),n.d(t,"m",(function(){return g})),n.d(t,"l",(function(){return E})),n.d(t,"d",(function(){return f}));var a=n(29),s=function(){return Object(a.b)("company/")},r=function(e){return Object(a.b)("company/".concat(e,"/job/"))},l=function(e,t){return Object(a.b)("company/".concat(e,"/job/").concat(t,"/"))},c=function(e,t,n){return Object(a.b)("company/".concat(e,"/job/").concat(t,"/apply/"),{method:"post",data:n})},i=function(){return Object(a.b)("company/job/applied/")},o=function(e){return Object(a.b)("/company/job/add/",{method:"post",data:e})},u=function(e,t,n){return Object(a.b)("".concat("/company/"+n.toString(),"/"),{method:"edit"===t?"patch":"put",data:e})},m=function(){return Object(a.b)("/company/job/all/")},d=function(e){return Object(a.b)("/company/".concat(e,"/"))},p=function(e){return Object(a.b)("company/job/".concat(e,"/applications/"))},b=function(e){return Object(a.b)("company/job/".concat(e,"/rounds/"))},h=function(e,t,n){return Object(a.b)("company/job/".concat(e,"/select/next/"),{method:"post",data:{students:t,round:n}})},g=function(e,t){return Object(a.b)("/company/job/".concat(e,"/select/reject/"),{method:"post",data:{students:t}})},E=function(e,t){return Object(a.b)("/company/job/".concat(e,"/select/place/"),{method:"post",data:{students:t}})},f=function(e){return Object(a.b)("/student/resume/".concat(e,"/"),{method:"get"})}},642:function(e,t,n){"use strict";n(150);var a=n(90),s=(n(49),n(21)),r=(n(655),n(666)),l=n(382),c=(n(151),n(68)),i=n(153),o=n(20),u=n(40),m=n(41),d=n(43),p=n(42),b=(n(497),n(496)),h=n(0),g=n.n(h),E=(n(118),b.a.MonthPicker,b.a.RangePicker,b.a.WeekPicker,{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10"}),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(u.a)(this,n);var s={old:(a=t.call(this,e)).props.data},r=0,l=["basics",0,"work",1,"skills",1,"achievements",0,"links",1,"education",1,"languages",0,"hobby",0];for(r=0;r<l.length;r+=2)void 0===s.old[l[r]]&&(l[r],s.old[l[r]]=l[r+1]?[{}]:{});return a.state=s,a}return Object(m.a)(n,[{key:"onInputChange",value:function(e,t,n){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(/<[a-z/][\s\S]*>/i.test(e.innerHTML)&&void 0!==e.innerHTML&&(e.innerHTML=e.innerText),void 0===this.state.new)this.setState({new:Object(o.a)({},this.state.old)});else switch(t){case"basics":this.setState({new:Object(o.a)(Object(o.a)({},this.state.new),{},{basics:Object(o.a)(Object(o.a)({},this.state.new.basics),{},Object(i.a)({},n,e.innerText))})});break;case"work":if(a=void 0===e.innerHTML?e:e.innerHTML,parseInt(this.state.new.work.length,10)-1==s){var r=this.state;r.new.work.push({company:"",designation:"",companyLocation:"",startDate:null,endDate:null,summary:""}),this.setState(Object(o.a)({},r))}else{var l=this.state;l.new.work[s][n]=a}break;case"skills":if(a=void 0===e.innerHTML?e:e.innerHTML,parseInt(this.state.new.skills.length)-1==s){var c=this.state;c.new.skills.push({name:"",level:""}),this.setState(Object(o.a)({},c))}else{var u=this.state;u.new.skills[s][n]=a}break;case"achievements":this.setState({new:Object(o.a)(Object(o.a)({},this.state.new),{},{achievements:Object(o.a)(Object(o.a)({},this.state.new.achievements),{},Object(i.a)({},n,e.innerText))})});break;case"education":if(parseInt(this.state.new.education.length)-1==s){var m=this.state;m.new.education.push({institution:"",studyType:"",year:null,grade:""}),this.setState(Object(o.a)({},m))}else{var d=this.state;d.new.education[s][n]=e.innerText}break;case"links":if(parseInt(this.state.new.links.length)-1==s){var p=this.state;p.new.links.push({type:"",url:""}),this.setState(Object(o.a)({},p))}else{var b=this.state;b.new.links[s][n]=e.innerText}break;case"languages":this.setState({new:Object(o.a)(Object(o.a)({},this.state.new),{},{languages:Object(i.a)({},n,e.innerText)})});break;case"hobby":this.setState({new:Object(o.a)(Object(o.a)({},this.state.new),{},{hobby:Object(i.a)({},n,e.innerText)})})}}},{key:"componentDidMount",value:function(e){var t,n=document.getElementsByClassName("resumeInput");for(t=0;t<n.length;t++)"P"==n[t].tagName?n[t].setAttribute("contenteditable",this.props.editable):n[t].tagName}},{key:"onSave",value:function(e){var t,n,a,s=e,r=0;for(t in s)if(Array.isArray(s[t])){for(a=0;a<s[t].length;a++){for(n in r=0,s[t][a])""!==s[t][a][n]&&null!==s[t][a][n]&&(r=1);0==r&&(s[t].splice(a,1),a--)}s[t][a]={}}var l=this.props.onSave;l&&l(e)}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"home-screen"},g.a.createElement("div",{style:{position:"fixed",left:"95%"}}),g.a.createElement(a.a,null,g.a.createElement("div",{className:"basic-details"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"basics","name")},className:"contenteditableInput resumeInput size20 bottom-border bold",placeholder:"Name",id:"Name"},this.state.old.basics.name)),g.a.createElement(c.a,{xs:24,sm:8,md:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"basics","email")},className:"contenteditableInput resumeInput size15 margin-top5",placeholder:"Email",id:"email"},this.state.old.basics.email)),g.a.createElement(c.a,{xs:24,sm:8,md:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"basics","phone")},className:"contenteditableInput resumeInput size15 l-r-border margin-top5",placeholder:"Mobile",id:""},this.state.old.basics.phone)),g.a.createElement(c.a,{xs:24,sm:8,md:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"basics","location")},className:"contenteditableInput resumeInput size15 margin-top5",placeholder:"Present Location",id:""},this.state.old.basics.location)),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("i",null,g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"basics","summary")},className:"contenteditableInput resumeInput size15",placeholder:"Describe yourself in one sentence",id:""},this.state.old.basics.summary)))),g.a.createElement("div",{className:"pro-details"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Work & Professional Experience"))),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},Object.entries(this.state.old.work).map((function(t){var n=Object(l.a)(t,2),a=n[0],s=n[1];return g.a.createElement("div",null,g.a.createElement(c.a,{xs:24,sm:4,md:4},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","startDate",a)},className:"contenteditableInput resumeInput border size15",placeholder:"start date"},s.startDate)),g.a.createElement(c.a,{xs:24,sm:4,md:4},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","endDate",a)},className:"contenteditableInput resumeInput border size15",placeholder:"end date"},s.endDate)),g.a.createElement(c.a,{xs:12,sm:8,md:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","company",a)},className:"contenteditableInput resumeInput border size15 bg-grey",placeholder:"Company/Organization Name"},s.company)),g.a.createElement(c.a,{xs:12,sm:8,md:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","location",a)},className:"contenteditableInput resumeInput border size15 bg-grey",placeholder:"Company Location"},s.companyLocation)),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","designation",a)},className:"contenteditableInput resumeInput border size15 bg-grey",placeholder:"Designation"},s.designation)),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"work","summary",a)},className:"contenteditableInput resumeInput border size15",style:{height:"150px",textAlign:"left"}},s.summary)),g.a.createElement("p",null,"\xa0"))})))),g.a.createElement("div",{className:"skills"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Skills"))),Object.entries(this.state.old.skills).map((function(t){var n=Object(l.a)(t,2),a=n[0],s=n[1];return g.a.createElement("div",null,g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement(c.a,{xs:24,sm:8,md:8,lg:8,xl:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"skills","name",a)},className:"contenteditableInput resumeInput border size15",style:{margin:"5px"},placeholder:"Ex. javascript"},s.name)),g.a.createElement(c.a,{xs:24,sm:16,md:16,lg:16,xl:16},g.a.createElement(r.a,{marks:E,step:1,className:" resumeInput",onChange:function(t){e.onInputChange(t,"skills","level",a)},defaultValue:s.level,max:10}))))}))),g.a.createElement("div",{className:"achievements"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Achievements"))),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"achievements","innerText")},className:"contenteditableInput  resumeInput border size15",style:{height:"150px",textAlign:"left"},id:"achievement-inner-text"},this.state.old.achievements.innerText))),g.a.createElement("div",{className:"links"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Links (Github, Stack Overflow, Patents, Publications)"))),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},Object.entries(this.state.old.links).map((function(t){var n=Object(l.a)(t,2),a=n[0],s=n[1];return g.a.createElement("div",null,g.a.createElement(c.a,{xs:24,sm:8,md:8,lg:8,xl:8},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"links","type",a)},className:"contenteditableInput  resumeInput border size15",style:{cursor:"default"},placeholder:s.type})),g.a.createElement(c.a,{xs:24,sm:16,md:16,lg:16,xl:16},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"links","url",a)},className:"contenteditableInput  resumeInput border size15",placeholder:""},s.url)))})))),g.a.createElement("div",{className:"educations"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Education & Certifications"))),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},Object.entries(this.state.old.education).map((function(t){var n=Object(l.a)(t,2),a=n[0],s=n[1];return g.a.createElement("div",null,g.a.createElement(c.a,{xs:24,sm:5,md:5},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"education","year",a)},className:"contenteditableInput resumeInput border size15",placeholder:"start date"},s.year)),g.a.createElement(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"education","institution",a)},className:"contenteditableInput resumeInput border size15",placeholder:"School / college / University"},s.institution)),g.a.createElement(c.a,{xs:12,sm:4,md:4,lg:4,xl:4},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"education","studyType",a)},className:"contenteditableInput resumeInput border size15",placeholder:"Degree"},s.studyType)),g.a.createElement(c.a,{xs:12,sm:3,md:3,lg:3,xl:3},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"education","grade",a)},className:"contenteditableInput resumeInput border size15",placeholder:"Grade"},s.grade)))})))),g.a.createElement("div",{className:"language-known"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Language Fluency"))),g.a.createElement(c.a,{xs:24,sm:12,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"languages","language")},className:"contenteditableInput resumeInput border size15",style:{textAlign:"left"},placeholder:"Ex: English.."},this.state.old.languages.language))),g.a.createElement("div",{className:"intrests"},g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24,style:{marginTop:"25px"}},g.a.createElement("h3",null,g.a.createElement("b",null,"Interests / Hobbies"))),g.a.createElement(c.a,{xs:24,sm:24,md:24,lg:24,xl:24},g.a.createElement("p",{contentEditable:"true",onKeyUp:function(t){e.onInputChange(t.target,"hobby","innerText")},className:"contenteditableInput border resumeInput size15",style:{height:"150px",textAlign:"left"},id:"intrest"},this.state.old.hobby.innerText))),g.a.createElement("div",{style:{textAlign:"center"}},g.a.createElement(s.a,{type:"primary",onClick:function(t){e.onSave(void 0===e.state.new?e.state.old:e.state.new)}},"Save"))))}}]),n}(g.a.Component);t.a=f},850:function(e,t,n){"use strict";n.r(t);var a=n(18),s=n.n(a),r=n(37),l=n(382),c=n(0),i=n.n(c),o=n(642),u=n(36),m=n(416),d=n(96),p={};t.default=function(e){var t=e.id,n=Object(c.useState)(!1),a=Object(l.a)(n,2),b=a[0],h=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,Object(m.d)(3);case 4:t=e.sent,p=t,h(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Object(u.e)("warning","Unknown error occurred","Try signing out or refreshing page"),h(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),i.a.createElement("div",{style:{padding:10}},b?i.a.createElement(d.a,null):i.a.createElement(o.a,{editable:!1,data:p}))}}}]);
//# sourceMappingURL=34.b4fd9380.chunk.js.map