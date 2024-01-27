import{B as M,o as l,c as n,m as h,r as _,a as g,b as r,t as A,d as k,u as j,w as N,F as f,e as C,f as o,g as p,h as B,i as w,j as E,k as T,l as b,n as R}from"./index-h4EnpgFa.js";import{s as G,a as F,b as I,c as V,d as x}from"./panel.esm-up7nN6RI.js";import{_ as D,a as L}from"./AppIssuesSelector-ocMg9_BZ.js";import{_ as P,a as q}from"./AppCandidatesSelector-QVteDIRS.js";var H={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},J=M.extend({name:"card",classes:H}),K={name:"BaseCard",extends:G,style:J},z={name:"Card",extends:K};function Q(e,v,$,m,y,a){return l(),n("div",h({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(l(),n("div",h({key:0,class:e.cx("header")},e.ptm("header")),[_(e.$slots,"header")],16)):g("",!0),r("div",h({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(l(),n("div",h({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(l(),n("div",h({key:0,class:e.cx("title")},e.ptm("title")),[_(e.$slots,"title")],16)):g("",!0),e.$slots.subtitle?(l(),n("div",h({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[_(e.$slots,"subtitle")],16)):g("",!0)],16)):g("",!0),r("div",h({class:e.cx("content")},e.ptm("content")),[_(e.$slots,"content")],16),e.$slots.footer?(l(),n("div",h({key:1,class:e.cx("footer")},e.ptm("footer")),[_(e.$slots,"footer")],16)):g("",!0)],16)],16)}z.render=Q;const U={class:"flex align-items-center"},W={class:"flex flex-column"},X={key:0,class:"font-bold ml-3 font-light uppercase"},Y={__name:"ElectionMainOpinionsByAuthor",props:{groupedOpinions:{type:Object,default:{}},scrollToAuthorId:{type:Number}},emits:["onScrollFinish"],setup(e,{emit:v}){const $=e,m=v,{groupedOpinions:y,scrollToAuthorId:a}=A($),u=k({}),c=j();return N(a,()=>{var d;a.value&&((d=u.value[a.value])==null||d.scrollIntoView({behavior:"smooth"}),m("onScrollFinish"))}),(d,S)=>(l(),n(f,null,[(l(!0),n(f,null,C(o(y),(i,s)=>(l(),n("div",{class:"mb-4",ref_for:!0,ref:t=>u.value[s]=t},[o(c).getCandidate(s)?(l(),n(f,{key:0},[p(o(z),null,{content:B(()=>{var t;return[r("div",U,[p(o(F),{image:(t=o(c).getCandidate(s))==null?void 0:t.photo,size:"xlarge",shape:"rectangle",class:"mr-2"},null,8,["image"]),r("div",W,[p(o(I),{text:"",onClick:O=>o(w).push(`/election/${o(c).currentElection.id}/candidate/${s}`)},{default:B(()=>[E(T(o(c).getCandidateName(s)),1)]),_:2},1032,["onClick"]),o(c).hasCandidateOrganisations(s)?(l(),n("span",X,T(o(c).getCandidateOrganisationsStr(s)),1)):g("",!0)])])]}),_:2},1024),r("div",null,[(l(!0),n(f,null,C(Object.groupBy(i,t=>t.issue_id),(t,O)=>(l(),b(D,{opinions:t,issueId:Number(O)},null,8,["opinions","issueId"]))),256))])],64)):g("",!0)],512))),256)),p(o(V))],64))}},Z={class:"flex align-items-center"},ee={__name:"ElectionMainOpinionsByIssue",props:{groupedOpinions:{type:Object,default:{}},scrollToIssueId:{type:Number}},emits:["onScrollFinish"],setup(e,{emit:v}){const $=e,m=v,{groupedOpinions:y,scrollToIssueId:a}=A($),u=j(),c=k({});return N(a,()=>{var d;a.value&&((d=c.value[a.value])==null||d.scrollIntoView({behavior:"smooth"}),m("onScrollFinish"))}),(d,S)=>(l(),n(f,null,[(l(!0),n(f,null,C(o(y),(i,s)=>(l(),n("div",{class:"mb-4",ref_for:!0,ref:t=>c.value[s]=t},[o(u).getIssue(s)?(l(),n(f,{key:0},[r("div",Z,[p(o(F),{image:o(u).getIssueImage(s),size:"xlarge",shape:"rectangle",class:"mr-2"},null,8,["image"]),p(o(I),{text:"",onClick:t=>o(w).push(`/election/${o(u).currentElection.id}/issue/${s}`)},{default:B(()=>[E(T(o(u).getIssueTitle(s)),1)]),_:2},1032,["onClick"])]),r("div",null,[(l(!0),n(f,null,C(Object.groupBy(i,t=>t.author_id),(t,O)=>(l(),b(P,{opinions:t,candidateId:Number(O)},null,8,["opinions","candidateId"]))),256))])],64)):g("",!0)],512))),256)),p(o(V))],64))}},se={class:"flex flex-column"},te=r("div",{class:"flex justify-content-center"},[r("h5",null,"Afficher les opinions par:")],-1),oe={class:"flex justify-content-center"},le=r("div",{class:"flex justify-content-center"},[r("h5",null,"Aller à:")],-1),ne={class:"flex justify-content-center mb-4",style:{"max-width":"600px",margin:"auto","flex-wrap":"wrap"}},re={class:"grid"},ie={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col-offset-1 col-10"},pe={__name:"ElectionMain",setup(e){const v=k("author_id"),$=j(),m=i=>v.value==i,y=(i,s)=>{v.value=i,s.target.blur()},a=R(()=>Object.groupBy($.currentElection.opinions,i=>i[v.value])),u=k(null),c=i=>{u.value=i},d=k(null),S=i=>{d.value=i};return(i,s)=>(l(),n(f,null,[r("div",se,[te,r("div",oe,[p(o(I),{severity:m("author_id")?"primary":"secondary",label:"Candidat",class:"mx-2",onClick:s[0]||(s[0]=t=>y("author_id",t)),rounded:"",size:"small"},null,8,["severity"]),p(o(I),{severity:m("issue_id")?"primary":"secondary",label:"Thème",class:"mx-2",onClick:s[1]||(s[1]=t=>y("issue_id",t)),rounded:"",size:"small"},null,8,["severity"])]),p(o(x)),le,r("div",ne,[m("author_id")?(l(),b(q,{key:0,onScroll:s[2]||(s[2]=t=>c(t))})):(l(),b(L,{key:1,onScroll:s[3]||(s[3]=t=>S(t))}))])]),p(o(x)),r("div",re,[r("div",ie,[m("author_id")?(l(),b(Y,{key:0,groupedOpinions:a.value,scrollToAuthorId:u.value,onOnScrollFinish:s[4]||(s[4]=t=>u.value=null)},null,8,["groupedOpinions","scrollToAuthorId"])):(l(),b(ee,{key:1,groupedOpinions:a.value,scrollToIssueId:d.value,onOnScrollFinish:s[5]||(s[5]=t=>d.value=null)},null,8,["groupedOpinions","scrollToIssueId"]))])])],64))}};export{pe as default};
