import{B as h,j as b,o as s,c as r,m as t,f as o,h as d,a as c,A as f,J as k,g as C,w as l,d as n,y as i,t as u}from"./index-DeNdjjpN.js";var B={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},g=h.extend({name:"card",classes:B}),S={name:"BaseCard",extends:b,style:g},$={name:"Card",extends:S};function N(e,p,a,m,y,v){return s(),r("div",t({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(s(),r("div",t({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):d("",!0),c("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),r("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),r("div",t({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):d("",!0),e.$slots.subtitle?(s(),r("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),c("div",t({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(s(),r("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):d("",!0)],16)],16)}$.render=N;const w=["src"],j={__name:"CandidateCard",props:{candidate:{type:Object}},setup(e){const p=e,{candidate:a}=f(p),m=k(()=>{if(a.value)return`${a.value.firstname} ${a.value.lastname}`});return(y,v)=>(s(),C(n($),null,{header:l(()=>[c("img",{src:n(a).photo,style:{"max-width":"100%"},imageStyle:{maxWidth:"100%"}},null,8,w)]),title:l(()=>[i(u(m.value),1)]),subtitle:l(()=>[i(" Card subtitle ")]),content:l(()=>[i(u(n(a).description),1)]),_:1}))}};export{j as _,$ as s};