"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[918],{1395:function(e,t,a){var s=a(3935),n=a(5893);t.Z=()=>(0,n.jsx)(n.Fragment,{children:(0,s.createPortal)((0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),document.getElementById("portal-root"))})},2177:function(e,t,a){a.d(t,{db:function(){return l},l:function(){return r}});var s=a(3977),n=a(294);const r=(0,s.ZF)({apiKey:"AIzaSyDn-uSjoBt9Xb3MsYRb_nY2o0PuEXqSRcc",authDomain:"travel-auth-7b217.firebaseapp.com",projectId:"travel-auth-7b217",storageBucket:"travel-auth-7b217.appspot.com",messagingSenderId:"304864174974",appId:"1:304864174974:web:d2d7b0bbc5a99349bc492f"}),l=(0,n.ad)(r)},8696:function(e,t,a){a.d(t,{c:function(){return r}});var s=a(294),n=a(2177);const r=async e=>{const t=(0,s.JU)(n.db,"users",e);return(0,s.QT)(t).then((e=>e.data())).catch((e=>console.log(e)))}},4873:function(e,t,a){a.d(t,{C:function(){return r},T:function(){return n}});var s=a(5998);const n=s.I0,r=s.v9},4918:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(7294),n=a(9250),r=a(4184),l=a.n(r),u=a(1395),i=a(9655),o=a(9005),c=a(2177),d=a(4873),p=a(294),m=a(1088);let h=function(e){return e[e.FIRSTNAME=0]="FIRSTNAME",e[e.LASTNAME=1]="LASTNAME",e[e.EMAIL=2]="EMAIL",e[e.PASSWORD=3]="PASSWORD",e}({});var g=a(5893),v=e=>{let{setIsLoading:t}=e;const[a,r]=(0,s.useState)(""),[u,v]=(0,s.useState)(""),[S,N]=(0,s.useState)(""),[j,x]=(0,s.useState)(""),[f,b]=(0,s.useState)([]),A=(0,d.T)(),I=(0,o.v0)(c.l),E=(0,n.s0)();return(0,g.jsxs)("form",{className:"sign",autoComplete:"true",onSubmit:e=>e.preventDefault(),children:[(0,g.jsx)("input",{className:l()("input",{"input--error":f.includes(h.FIRSTNAME)}),type:"text",placeholder:"First name",autoComplete:"true",value:a,onChange:e=>r(e.target.value)}),(0,g.jsx)("input",{className:l()("input",{"input--error":f.includes(h.LASTNAME)}),type:"text",placeholder:"Last name",autoComplete:"true",value:u,onChange:e=>v(e.target.value)}),(0,g.jsx)("input",{className:l()("input",{"input--error":f.includes(h.EMAIL)}),type:"email",placeholder:"Email",autoComplete:"true",value:S,onChange:e=>N(e.target.value)}),(0,g.jsx)("input",{className:l()("input",{"input--error":f.includes(h.PASSWORD)}),type:"password",placeholder:"Password",autoComplete:"true",value:j,onChange:e=>x(e.target.value)}),(0,g.jsx)("button",{className:"btn",onClick:()=>{a.length<3?b((e=>[...e,h.FIRSTNAME])):b((e=>e.filter((e=>e!==h.FIRSTNAME)))),u.length<3?b((e=>[...e,h.LASTNAME])):b((e=>e.filter((e=>e!==h.LASTNAME)))),S.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?b((e=>e.filter((e=>e!==h.EMAIL)))):b((e=>[...e,h.EMAIL])),j.length<6?b((e=>[...e,h.PASSWORD])):b((e=>e.filter((e=>e!==h.PASSWORD)))),f.length||(t(!0),(0,o.Xb)(I,S,j).then((e=>{A((0,m.a)({email:S,password:j,firstName:a,lastName:u})),(async(e,t)=>{try{await(0,p.pl)((0,p.JU)(c.db,"users",e),t)}catch(e){console.error("Error adding document: ",e)}})(e.user.uid,{firstName:a,lastName:u,password:j}),E("/")})).catch((e=>console.log(e))).finally((()=>t(!1))))},type:"submit",children:"Sign up"}),(0,g.jsx)(i.rU,{className:"sign__link",to:"/signIn",children:"Sign in"})]})},S=a(8696),N=e=>{let{setIsLoading:t}=e;const[a,r]=(0,s.useState)(""),[l,u]=(0,s.useState)(""),p=(0,o.v0)(c.l),h=(0,d.T)(),v=(0,n.s0)();return(0,g.jsxs)("form",{className:"sign",onSubmit:e=>e.preventDefault(),children:[(0,g.jsx)("input",{className:"input",type:"email",placeholder:"Email",autoComplete:"true",value:a,onChange:e=>r(e.target.value)}),(0,g.jsx)("input",{className:"input",type:"password",placeholder:"Password",autoComplete:"true",value:l,onChange:e=>u(e.target.value)}),(0,g.jsx)("button",{className:"btn",onClick:()=>{t(!0),(0,o.e5)(p,a,l).then((e=>{(0,S.c)(e.user.uid).then((e=>{const t={email:a,password:l,firstName:e?.firstName,lastName:e?.lastName};h((0,m.a)(t)),v("/")}))})).catch((()=>console.log("Not found user"))).finally((()=>t(!1)))},type:"submit",children:"Sign In"}),(0,g.jsx)(i.rU,{className:"sign__link",to:"/signUp",children:"Sign Up"})]})};const j=e=>l()("auth",{"auth--dis":e});var x=()=>{const[e,t]=(0,s.useState)(!1),a="/signUp"===(0,n.TH)().pathname;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("section",{className:j(e),style:{backgroundImage:"url(./img/main2.jpg)"},children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"auth__wrapper",children:[(0,g.jsxs)("h1",{className:"title auth__title",children:["Gateway to the",(0,g.jsx)("br",{}),"World"]}),a?(0,g.jsx)(v,{setIsLoading:t}):(0,g.jsx)(N,{setIsLoading:t})]})})}),e&&(0,g.jsx)(u.Z,{})]})}}}]);