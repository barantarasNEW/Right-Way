"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[475],{3727:function(e,s,t){t.d(s,{r:function(){return n}});const n=e=>(300,new Promise((e=>setTimeout(e,300)))).then((()=>fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,region,flags,independent,currencies,languages,maps`))).then((e=>e.json())).then((e=>({...e[0],name:e[0].name.common,flag:e[0].flags.png,currencies:Object.values(e[0].currencies),languages:Object.values(e[0].languages),map:e[0].maps.googleMaps})))},1395:function(e,s,t){var n=t(3935),a=t(5893);s.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,n.createPortal)((0,a.jsxs)("div",{className:"lds-roller",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),document.getElementById("portal-root"))})},4873:function(e,s,t){t.d(s,{C:function(){return c},T:function(){return a}});var n=t(5998);const a=n.I0,c=n.v9},4475:function(e,s,t){t.r(s);var n=t(7294),a=t(666),c=t(9670),i=t(6611),l=t.n(i),r=t(3727),u=t(4873),o=t(1395),m=t(5893);s.default=()=>{const{names:e}=(0,u.C)((e=>e.names)),[s,t]=(0,n.useState)([]),[i,d]=(0,n.useState)(""),[j,f]=(0,n.useState)(!0),[h,x]=(0,n.useState)(!1),[p,v]=(0,n.useState)(!1);(0,n.useEffect)((()=>{g()}),[]);const g=async()=>{x(!1),f(!0);const s=[];for(let t=0;t<4;t++)s.push(e[l()(e.length)]);const n=s.map((e=>(0,r.r)(e))),a=await Promise.all(n);t(a.flat()),d(s[l()(3)]),f(!1)};return(0,n.useEffect)((()=>{let e;return p&&(e=setTimeout((()=>v(!1)),1e3)),h&&(v(!1),e=setTimeout((()=>{x(!1),g()}),1e3)),()=>clearTimeout(e)}),[p,h]),j?(0,m.jsx)(o.Z,{}):(0,m.jsx)("section",{className:"quiz",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:"quiz__title",children:i}),(0,m.jsx)("ul",{children:(0,m.jsx)(a.Z,{className:"quiz__list",children:s.map((e=>(0,m.jsx)(c.Z,{timeout:500,classNames:"item",children:(0,m.jsx)("li",{className:"quiz__item",children:(0,m.jsx)("button",{className:"quiz__btn",onClick:()=>{return s=e.name,void(i===s?x(!0):(v(!0),t((e=>e.filter((e=>e.name!==s))))));var s},disabled:h||p,children:(0,m.jsx)("img",{className:"quiz__flag",src:e.flag,alt:"icon"})})})},e.name)))})}),h&&(0,m.jsx)("div",{className:"quiz__correct",children:"Correct!"}),p&&(0,m.jsx)("div",{className:"quiz__in-correct",children:"Incorrect!"})]})})}}}]);