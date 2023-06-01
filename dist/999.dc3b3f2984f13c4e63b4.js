/*! For license information please see 999.dc3b3f2984f13c4e63b4.js.LICENSE.txt */
(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[999,682],{7999:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return S}});var t=s(7294),n=s(9250),r=s(9005),l=s(4873),i=s(8696),c=s(4533),o=s(1088),u=s(9655);function m(e,a){const s=new URLSearchParams(e.toString());return Object.entries(a).forEach((e=>{let[a,t]=e;null===t?s.delete(a):s.set(a,t)})),s.toString()}const d=["/","/top","/random"];var h=s(5893),p=e=>{let{onChange:a,isSearch:s}=e;const t=(0,n.TH)().pathname,r=d.includes(t);return(0,h.jsx)("nav",{className:"additional-bar",children:(0,h.jsxs)("ul",{className:"additional-bar__list",children:[(0,h.jsx)("li",{className:"additional-bar__item",style:r?{}:{visibility:"hidden"},children:(0,h.jsx)("button",{className:"additional-bar__link",onClick:a,children:(0,h.jsx)("img",{className:"additional-bar__icon",src:"./img/svg/"+(s?"cancel.svg":"search.svg"),alt:"icon"})})}),(0,h.jsx)("li",{className:"additional-bar__item",children:(0,h.jsx)(u.rU,{to:"/user",className:"additional-bar__link",children:(0,h.jsx)("img",{className:"additional-bar__icon",src:"./img/svg/user.svg",alt:"icon"})})})]})})},g=()=>(0,h.jsx)(u.rU,{to:"/",children:(0,h.jsx)("img",{src:"./img/svg/logo.svg",alt:"logo"})});const j=[{href:"/",name:"Home"},{href:"/top",name:"Top"},{href:"/random",name:"Random"},{href:"/quiz",name:"Quiz"}];var x=()=>(0,h.jsx)("nav",{className:"navbar",children:(0,h.jsx)("ul",{className:"navbar__list",children:j.map((e=>{let{href:a,name:s}=e;return(0,h.jsx)("li",{className:"navbar__item",children:(0,h.jsx)(u.OL,{to:a,className:"navbar__link",children:s})},a)}))})}),f=()=>{const e=(0,n.TH)().pathname,a="/"===e?"/home":e,{names:s}=(0,l.C)((e=>e.countriesName)),[r,i]=(0,u.lr)(),c=r.get("query")||"",o=(0,t.useRef)(null),d=(0,t.useDeferredValue)(c),p=(0,t.useMemo)((()=>{const e=new RegExp(`${d}.+$`,"i");return s.filter((a=>-1!==a.name.common.search(e)))}),[d,s]);return(0,t.useEffect)((()=>{o.current?.focus()}),[]),(0,h.jsxs)("div",{className:"search",children:[(0,h.jsx)("input",{ref:o,type:"text",className:"search__input",value:d,onChange:e=>{i(m(r,{query:e.target.value||null}))}}),(0,h.jsx)("button",{className:"search__btn",onClick:()=>{i(m(r,{query:null})),o.current?.focus()},children:(0,h.jsx)("img",{className:"search__icon",src:"./img/svg/cancel.svg",alt:"icon"})}),(0,h.jsx)("ul",{className:"search__list",children:p.map((e=>(0,h.jsx)("li",{className:"search__item",children:(0,h.jsx)(u.rU,{to:`${a}/${e.name.common}`,className:"search__link",children:e.name.common})},e.name.common)))})]})},v=e=>{let{isSearch:a,setSearch:s,setToggleSearch:r}=e;const[l,i]=(0,u.lr)(),c=(0,n.TH)().pathname;return(0,t.useEffect)((()=>{a&&s(!1)}),[c]),(0,h.jsx)("header",{className:"header",onClick:e=>e.stopPropagation(),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"header__wrapper",children:[(0,h.jsxs)("div",{className:"header__top",children:[(0,h.jsx)(g,{}),(0,h.jsx)(x,{}),(0,h.jsx)(p,{isSearch:a,onChange:()=>{i(m(l,{query:null})),r()}})]}),(0,h.jsx)("div",{className:"header__bottom",children:a&&(0,h.jsx)(f,{})})]})})})},N=()=>(0,h.jsx)("footer",{className:"footer",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"footer__wrapper",children:"Copyright @2023 Ravel"})})}),_=s(5682),b=s(1395),S=()=>{const e=(0,l.T)(),a=(0,l.C)((e=>e.user)),s=(0,n.TH)().pathname,{loading:u}=(0,l.C)((e=>e.countriesName)),[m,d]=(0,t.useState)(!1),[p,g]=(0,t.useState)(!0),j=(0,n.s0)(),x=(0,r.v0)();return(0,t.useEffect)((()=>{e(c.S()),(0,r.Aj)(x,(a=>{a?(e((0,o.vX)(!0)),"/signUp"!==s&&"/signIn"!==s||j("/"),(0,i.c)(a.uid).then((s=>{const t={email:a.email,password:s?.password,firstName:s?.firstName,lastName:s?.lastName};e((0,o.av)(t))})).finally((()=>g(!1)))):g(!1)}))}),[]),a.isSigned||!1!==p?(0,h.jsx)("div",{className:"wrapper",style:{backgroundImage:"url(./img/main.jpg)"},onClick:()=>d(!1),children:u||p?(0,h.jsx)(b.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{isSearch:m,setSearch:d,setToggleSearch:()=>d((e=>!e))}),(0,h.jsx)("main",{className:"main",children:(0,h.jsx)(t.Suspense,{fallback:(0,h.jsx)(b.Z,{}),children:(0,h.jsx)(n.j3,{})})}),(0,h.jsx)(N,{})]})}):(0,h.jsx)(_.default,{})}},2177:function(e,a,s){"use strict";s.d(a,{db:function(){return l},l:function(){return r}});var t=s(3977),n=s(294);const r=(0,t.ZF)({apiKey:"AIzaSyDn-uSjoBt9Xb3MsYRb_nY2o0PuEXqSRcc",authDomain:"travel-auth-7b217.firebaseapp.com",projectId:"travel-auth-7b217",storageBucket:"travel-auth-7b217.appspot.com",messagingSenderId:"304864174974",appId:"1:304864174974:web:d2d7b0bbc5a99349bc492f"}),l=(0,n.ad)(r)},8696:function(e,a,s){"use strict";s.d(a,{c:function(){return r}});var t=s(294),n=s(2177);async function r(e){const a=(0,t.JU)(n.db,"users",e);return(0,t.QT)(a).then((e=>e.data())).catch((e=>{console.log(e)}))}},4873:function(e,a,s){"use strict";s.d(a,{C:function(){return r},T:function(){return n}});var t=s(5998);const n=t.I0,r=t.v9},5682:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return v}});var t=s(7294),n=s(9250),r=s(4184),l=s.n(r),i=s(1395),c=s(9655),o=s(9005),u=s(2177),m=s(4873),d=s(294),h=s(1088),p=s(5893),g=e=>{let{setIsLoading:a}=e;const[s,n]=(0,t.useState)(""),[r,l]=(0,t.useState)(""),[i,g]=(0,t.useState)(""),[j,x]=(0,t.useState)(""),f=(0,m.T)(),v=(0,o.v0)(u.l);return(0,p.jsxs)("form",{className:"sign",autoComplete:"true",children:[(0,p.jsx)("input",{className:"input",type:"text",placeholder:"First name",autoComplete:"true",value:s,onChange:e=>n(e.target.value)}),(0,p.jsx)("input",{className:"input",type:"text",placeholder:"Last name",autoComplete:"true",value:r,onChange:e=>l(e.target.value)}),(0,p.jsx)("input",{className:"input",type:"email",placeholder:"Email",autoComplete:"true",value:i,onChange:e=>g(e.target.value)}),(0,p.jsx)("input",{className:"input",type:"password",placeholder:"Password",autoComplete:"true",value:j,onChange:e=>x(e.target.value)}),(0,p.jsx)("button",{className:"btn",onClick:()=>{a(!0),(0,o.Xb)(v,i,j).then((e=>{f((0,h.av)({email:i,password:j,firstName:s,lastName:r})),async function(e,a){try{await(0,d.pl)((0,d.JU)(u.db,"users",e),a)}catch(e){console.error("Error adding document: ",e)}}(e.user.uid,{firstName:s,lastName:r,password:j})})).catch((e=>{console.log(e)})).finally((()=>a(!1)))},type:"submit",children:"Sign up"}),(0,p.jsx)(c.rU,{className:"sign__link",to:"/signIn",children:"Sign in"})]})},j=s(8696),x=e=>{let{setIsLoading:a}=e;const[s,n]=(0,t.useState)(""),[r,l]=(0,t.useState)(""),i=(0,o.v0)(u.l),d=(0,m.T)();return(0,p.jsxs)("form",{className:"sign",children:[(0,p.jsx)("input",{className:"input",type:"email",placeholder:"Email",autoComplete:"true",value:s,onChange:e=>n(e.target.value)}),(0,p.jsx)("input",{className:"input",type:"password",placeholder:"Password",autoComplete:"true",value:r,onChange:e=>l(e.target.value)}),(0,p.jsx)("button",{className:"btn",onClick:()=>{a(!0),(0,o.e5)(i,s,r).then((e=>{(0,j.c)(e.user.uid).then((e=>{const a={email:s,password:r,firstName:e?.firstName,lastName:e?.lastName};d((0,h.av)(a))}))})).catch((()=>{console.log("Not found user")})).finally((()=>a(!1)))},type:"submit",children:"Sign In"}),(0,p.jsx)(c.rU,{className:"sign__link",to:"/signUp",children:"Sign Up"})]})};const f=e=>l()("auth",{"auth--dis":e});var v=()=>{const[e,a]=(0,t.useState)(!1),s="/signUp"===(0,n.TH)().pathname;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("section",{className:f(e),style:{backgroundImage:"url(./img/main2.jpg)"},children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"auth__wrapper",children:[(0,p.jsxs)("h1",{className:"title auth__title",children:["Gateway to the",(0,p.jsx)("br",{}),"World"]}),s?(0,p.jsx)(g,{setIsLoading:a}):(0,p.jsx)(x,{setIsLoading:a})]})})}),e&&(0,p.jsx)(i.Z,{})]})}},4184:function(e,a){var s;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&e.push(l)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var i in s)t.call(s,i)&&s[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(a,[]))||(e.exports=s)}()}}]);