"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[306,99],{4306:function(e,a,s){s.r(a),s.d(a,{default:function(){return I}});var t=s(7294),n=s(9250),r=s(9005),l=s(4873),i=s(8696),c=s(1741),o=s(1088),u=s(9655);function d(e,a){const s=new URLSearchParams(e.toString());return Object.entries(a).forEach((e=>{let[a,t]=e;null===t?s.delete(a):s.set(a,t)})),s.toString()}const m=["/","/top","/random"];var h=s(5893),p=e=>{let{onChange:a,isSearch:s}=e;const t=(0,n.TH)().pathname,r=m.includes(t);return(0,h.jsx)("nav",{className:"additional-bar",children:(0,h.jsxs)("ul",{className:"additional-bar__list",children:[(0,h.jsx)("li",{className:"additional-bar__item",style:r?{}:{visibility:"hidden"},children:(0,h.jsx)("button",{className:"additional-bar__link",onClick:a,children:(0,h.jsx)("img",{className:"additional-bar__icon",src:"./img/svg/"+(s?"cancel.svg":"search.svg"),alt:"icon"})})}),(0,h.jsx)("li",{className:"additional-bar__item",children:(0,h.jsx)(u.rU,{to:"/user",className:"additional-bar__link",children:(0,h.jsx)("img",{className:"additional-bar__icon",src:"./img/svg/user.svg",alt:"icon"})})})]})})},g=()=>(0,h.jsx)(u.rU,{to:"/",children:(0,h.jsx)("img",{src:"./img/svg/logo.svg",alt:"logo"})}),j=s(4184),x=s.n(j);const N=[{href:"/",name:"Home"},{href:"/top",name:"Top"},{href:"/random",name:"Random"},{href:"/quiz",name:"Quiz"}],S=e=>{let{isActive:a}=e;return x()("navbar__link",{active:a})};var v=()=>(0,h.jsx)("nav",{className:"navbar",children:(0,h.jsx)("ul",{className:"navbar__list",children:N.map((e=>{let{href:a,name:s}=e;return(0,h.jsx)("li",{className:"navbar__item",children:(0,h.jsx)(u.OL,{to:a,className:S,children:s})},a)}))})}),f=()=>{const{names:e}=(0,l.C)((e=>e.names)),[a,s]=(0,u.lr)(),r=a.get("query")||"",i=(0,t.useDeferredValue)(r),c=(0,t.useRef)(null),o=(0,n.TH)().pathname,m="/"===o?"/home":o,p=(0,t.useMemo)((()=>{const a=new RegExp(`${i}.+$`,"i");return e.filter((e=>-1!==e.search(a)))}),[i,e]);return(0,t.useEffect)((()=>{c.current?.focus()}),[]),(0,h.jsxs)("div",{className:"search",children:[(0,h.jsx)("input",{ref:c,type:"text",className:"search__input",value:i,onChange:e=>{s(d(a,{query:e.target.value||null}))}}),(0,h.jsx)("button",{className:"search__btn",onClick:()=>{s(d(a,{query:null})),c.current?.focus()},children:(0,h.jsx)("img",{className:"search__icon",src:"./img/svg/cancel.svg",alt:"icon"})}),(0,h.jsx)("ul",{className:"search__list",children:p.map((e=>(0,h.jsx)("li",{className:"search__item",children:(0,h.jsx)(u.rU,{to:`${m}/${e}`,className:"search__link",children:e})},e)))})]})},b=()=>{const e=(0,n.s0)();return(0,h.jsxs)("button",{className:"bread-crumbs__btn",onClick:()=>e(-1),children:[(0,h.jsx)("img",{className:"bread-crumbs__icon",src:"./img/svg/back.svg",alt:"icon"}),"Back"]})},_=e=>{let{isSearch:a,setSearch:s,setToggleSearch:r}=e;const[l,i]=(0,u.lr)(),{id:c}=(0,n.UO)(),o=(0,n.TH)().pathname;return(0,t.useEffect)((()=>{a&&s(!1)}),[o]),(0,h.jsx)("header",{className:"header",onClick:e=>e.stopPropagation(),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"header__wrapper",children:[(0,h.jsxs)("div",{className:"header__top",children:[(0,h.jsx)(g,{}),(0,h.jsx)(v,{}),(0,h.jsx)(p,{isSearch:a,onChange:()=>{i(d(l,{query:null})),r()}})]}),(0,h.jsxs)("div",{className:"header__bottom",children:[a&&(0,h.jsx)(f,{}),c&&(0,h.jsx)(b,{})]})]})})})},A=()=>(0,h.jsx)("footer",{className:"footer",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"footer__wrapper",children:"Copyright @2023 Ravel"})})}),E=s(4099),C=s(1395),I=()=>{const e=(0,r.v0)(),a=(0,l.T)(),s=(0,n.TH)().pathname,u=(0,l.C)((e=>e.user)).user,{loading:d}=(0,l.C)((e=>e.names)),m=(0,n.s0)(),[p,g]=(0,t.useState)(!1),[j,x]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{a(c.S()),u.email.length||(0,r.Aj)(e,(e=>{e?(0,i.c)(e.uid).then((t=>{const n={email:e.email,password:t?.password,firstName:t?.firstName,lastName:t?.lastName};a((0,o.a)(n)),"/signUp"!==s&&"/signIn"!==s||m("/")})).catch((e=>console.log(e))).finally((()=>x(!1))):x(!1)}))}),[]),u.email.length||!1!==j?(0,h.jsx)("div",{className:"wrapper",style:{backgroundImage:"url(./img/main.jpg)"},onClick:()=>g(!1),children:d||j?(0,h.jsx)(C.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{isSearch:p,setSearch:g,setToggleSearch:()=>g((e=>!e))}),(0,h.jsx)("main",{className:"main",children:(0,h.jsx)(t.Suspense,{fallback:(0,h.jsx)(C.Z,{}),children:(0,h.jsx)(n.j3,{})})}),(0,h.jsx)(A,{})]})}):(0,h.jsx)(E.default,{})}},1395:function(e,a,s){var t=s(3935),n=s(5893);a.Z=()=>(0,n.jsx)(n.Fragment,{children:(0,t.createPortal)((0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),document.getElementById("portal-root"))})},2177:function(e,a,s){s.d(a,{db:function(){return l},l:function(){return r}});var t=s(3977),n=s(294);const r=(0,t.ZF)({apiKey:"AIzaSyDn-uSjoBt9Xb3MsYRb_nY2o0PuEXqSRcc",authDomain:"travel-auth-7b217.firebaseapp.com",projectId:"travel-auth-7b217",storageBucket:"travel-auth-7b217.appspot.com",messagingSenderId:"304864174974",appId:"1:304864174974:web:d2d7b0bbc5a99349bc492f"}),l=(0,n.ad)(r)},8696:function(e,a,s){s.d(a,{c:function(){return r}});var t=s(294),n=s(2177);const r=async e=>{const a=(0,t.JU)(n.db,"users",e);return(0,t.QT)(a).then((e=>e.data())).catch((e=>console.log(e)))}},4873:function(e,a,s){s.d(a,{C:function(){return r},T:function(){return n}});var t=s(5998);const n=t.I0,r=t.v9},4099:function(e,a,s){s.r(a),s.d(a,{default:function(){return A}});var t=s(7294),n=s(9250),r=s(4184),l=s.n(r),i=s(1395),c=s(9655),o=s(9005),u=s(2177),d=s(4873),m=s(294),h=s(1088);let p=function(e){return e[e.FIRSTNAME=0]="FIRSTNAME",e[e.LASTNAME=1]="LASTNAME",e[e.EMAIL=2]="EMAIL",e[e.PASSWORD=3]="PASSWORD",e}({});const g=(e,a)=>{switch(e){case p.EMAIL:const e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return a.match(e);case p.PASSWORD:return a.length>=8;case p.FIRSTNAME:case p.LASTNAME:return a.length>=4;default:return}};var j=s(3935),x=s(5893),N=e=>{let{title:a}=e;const[s,n]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{const e=setTimeout((()=>{n(!1)}),2e3);return()=>clearTimeout(e)}),[n]),s?(0,x.jsx)(x.Fragment,{children:(0,j.createPortal)((0,x.jsx)("div",{className:"modal",onClick:()=>n(!1),children:(0,x.jsx)("div",{className:"modal__wrapper",onClick:e=>e.stopPropagation(),children:a})}),document.getElementById("portal-root"))}):null},S=e=>{let{setIsLoading:a,inputCn:s}=e;const r=(0,d.T)(),l=(0,o.v0)(u.l),i=(0,n.s0)(),[j,S]=(0,t.useState)(""),[v,f]=(0,t.useState)(""),[b,_]=(0,t.useState)(""),[A,E]=(0,t.useState)(""),[C,I]=(0,t.useState)([]),[y,T]=(0,t.useState)(!1),k=(e,a,s)=>{const t=e.target.value,n=g(a,t);s(t),n&&I((e=>e.filter((e=>e!==a))))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{className:"sign",autoComplete:"true",onSubmit:e=>e.preventDefault(),children:[(0,x.jsx)("input",{className:s(C.includes(p.FIRSTNAME)),type:"text",placeholder:"First name",autoComplete:"true",value:j,onChange:e=>k(e,p.FIRSTNAME,S)}),(0,x.jsx)("input",{className:s(C.includes(p.LASTNAME)),type:"text",placeholder:"Last name",autoComplete:"true",value:v,onChange:e=>k(e,p.LASTNAME,f)}),(0,x.jsx)("input",{className:s(C.includes(p.EMAIL)),type:"email",placeholder:"Email",autoComplete:"true",value:b,onChange:e=>k(e,p.EMAIL,_)}),(0,x.jsx)("input",{className:s(C.includes(p.PASSWORD)),type:"password",placeholder:"Password",autoComplete:"true",value:A,onChange:e=>k(e,p.PASSWORD,E)}),(0,x.jsx)("button",{className:"btn",onClick:()=>{let e=!1;const s=g(p.EMAIL,b),t=g(p.PASSWORD,A),n=g(p.FIRSTNAME,j),c=g(p.LASTNAME,v);s||(I((e=>[...e,p.EMAIL])),e=!0),t||(I((e=>[...e,p.PASSWORD])),e=!0),n||(I((e=>[...e,p.FIRSTNAME])),e=!0),c||(I((e=>[...e,p.LASTNAME])),e=!0),e||(a(!0),(0,o.Xb)(l,b,A).then((e=>{r((0,h.a)({email:b,password:A,firstName:j,lastName:v})),(async(e,a)=>{try{await(0,m.pl)((0,m.JU)(u.db,"users",e),a)}catch(e){console.error("Error adding document: ",e)}})(e.user.uid,{firstName:j,lastName:v,password:A}),i("/")})).catch((()=>T(!0))).finally((()=>a(!1))))},disabled:!!C.length,type:"submit",children:"Sign up"}),(0,x.jsx)(c.rU,{className:"sign__link",to:"/signIn",children:"Sign in"})]}),y&&(0,x.jsx)(N,{title:"User already in use"})]})},v=s(8696),f=e=>{let{setIsLoading:a,inputCn:s}=e;const r=(0,o.v0)(u.l),l=(0,d.T)(),i=(0,n.s0)(),[m,j]=(0,t.useState)(""),[S,f]=(0,t.useState)(""),[b,_]=(0,t.useState)([]),[A,E]=(0,t.useState)(!1),C=(e,a,s)=>{const t=e.target.value,n=g(a,t);s(t),n&&_((e=>e.filter((e=>e!==a))))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{className:"sign",onSubmit:e=>e.preventDefault(),children:[(0,x.jsx)("input",{className:s(b.includes(p.EMAIL)),type:"email",placeholder:"Email",autoComplete:"true",value:m,onChange:e=>C(e,p.EMAIL,j)}),(0,x.jsx)("input",{className:s(b.includes(p.PASSWORD)),type:"password",placeholder:"Password",autoComplete:"true",value:S,onChange:e=>C(e,p.PASSWORD,f)}),(0,x.jsx)("button",{className:"btn",onClick:()=>{let e=!1;const s=g(p.EMAIL,m),t=g(p.PASSWORD,S);s||(_((e=>[...e,p.EMAIL])),e=!0),t||(_((e=>[...e,p.PASSWORD])),e=!0),e||(a(!0),(0,o.e5)(r,m,S).then((e=>{(0,v.c)(e.user.uid).then((e=>{const a={email:m,password:S,firstName:e?.firstName,lastName:e?.lastName};l((0,h.a)(a)),E(!1),i("/")}))})).catch((()=>E(!0))).finally((()=>a(!1))))},type:"submit",disabled:!!b.length,children:"Sign In"}),(0,x.jsx)(c.rU,{className:"sign__link",to:"/signUp",children:"Sign Up"})]}),A&&(0,x.jsx)(N,{title:"User not found"})]})};const b=e=>l()("auth",{"auth--dis":e}),_=e=>l()("input",{error:e});var A=()=>{const[e,a]=(0,t.useState)(!1),s="/signUp"===(0,n.TH)().pathname;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("section",{className:b(e),style:{backgroundImage:"url(./img/main2.jpg)"},children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"auth__wrapper",children:[(0,x.jsxs)("h1",{className:"title auth__title",children:["Gateway to the",(0,x.jsx)("br",{}),"World"]}),s?(0,x.jsx)(S,{setIsLoading:a,inputCn:_}):(0,x.jsx)(f,{setIsLoading:a,inputCn:_})]})})}),e&&(0,x.jsx)(i.Z,{})]})}}}]);