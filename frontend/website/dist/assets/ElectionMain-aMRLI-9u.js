import{t as C,r as $,u as O,w as B,o,c as r,F as m,a as b,b as n,d as p,e as s,f as S,g as j,h as E,i as A,j as y,k as z}from"./index-YYxOhvpO.js";import{s as N,a as x,b as w,c as T}from"./panel.esm-s1Ku1Tf5.js";import{_ as V}from"./AppIssueOpinionsPanel-T6A7E-pX.js";import{_ as M}from"./AppCandidateOpinionsPanel-BgdBPGFV.js";const R={class:"flex align-items-center"},G={__name:"ElectionMainOpinionsByAuthor",props:{groupedOpinions:{type:Object,default:{}},scrollToAuthorId:{type:Number}},emits:["onScrollFinish"],setup(I,{emit:v}){const g=I,f=v,{groupedOpinions:h,scrollToAuthorId:i}=C(g),_=$({}),u=O(),d=a=>{if(a)return`${a.firstname} ${a.lastname}`};return B(i,()=>{var a;i.value&&((a=_.value[i.value])==null||a.scrollIntoView({behavior:"smooth"}),f("onScrollFinish"))}),(a,k)=>(o(),r(m,null,[(o(!0),r(m,null,b(s(h),(t,e)=>{var l;return o(),r("div",{class:"mb-4",ref_for:!0,ref:c=>_.value[e]=c},[n("div",R,[p(s(N),{image:(l=s(u).getCandidate(e))==null?void 0:l.photo,size:"xlarge",shape:"rectangle",class:"mr-2"},null,8,["image"]),p(s(x),{text:"",onClick:c=>s(A).push(`/election/${s(u).currentElection.id}/candidate/${e}`)},{default:S(()=>[j(E(d(s(u).getCandidate(e))),1)]),_:2},1032,["onClick"])]),n("div",null,[(o(!0),r(m,null,b(Object.groupBy(t,c=>c.issue_id),(c,F)=>(o(),y(V,{opinions:c,issueId:Number(F)},null,8,["opinions","issueId"]))),256))])],512)}),256)),p(s(w))],64))}},D={class:"flex align-items-center"},L={__name:"ElectionMainOpinionsByIssue",props:{groupedOpinions:{type:Object,default:{}},scrollToIssueId:{type:Number}},emits:["onScrollFinish"],setup(I,{emit:v}){const g=I,f=v,{groupedOpinions:h,scrollToIssueId:i}=C(g),_=O(),u=$({});return B(i,()=>{var d;i.value&&((d=u.value[i.value])==null||d.scrollIntoView({behavior:"smooth"}),f("onScrollFinish"))}),(d,a)=>(o(),r(m,null,[(o(!0),r(m,null,b(s(h),(k,t)=>(o(),r("div",{class:"mb-4",ref_for:!0,ref:e=>u.value[t]=e},[n("div",D,[p(s(N),{image:s(_).getIssueImage(t),size:"xlarge",shape:"rectangle",class:"mr-2"},null,8,["image"]),p(s(x),{text:"",onClick:e=>s(A).push(`/election/${s(_).currentElection.id}/issue/${t}`)},{default:S(()=>[j(E(s(_).getIssueTitle(t)),1)]),_:2},1032,["onClick"])]),n("div",null,[(o(!0),r(m,null,b(Object.groupBy(k,e=>e.author_id),(e,l)=>(o(),y(M,{opinions:e,candidateId:Number(l)},null,8,["opinions","candidateId"]))),256))])],512))),256)),p(s(w))],64))}},q={class:"flex flex-column"},H=n("div",{class:"flex justify-content-center"},[n("h5",null,"Afficher les opinions par:")],-1),J={class:"flex justify-content-center"},K=n("div",{class:"flex justify-content-center"},[n("h5",null,"Aller à:")],-1),P={class:"flex justify-content-center mb-4",style:{"max-width":"600px",margin:"auto","flex-wrap":"wrap"}},Q={class:"grid"},U={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col-offset-1 col-10"},ee={__name:"ElectionMain",setup(I){const v=$("author_id"),g=O(),f=t=>v.value==t,h=(t,e)=>{v.value=t,e.target.blur()},i=z(()=>Object.groupBy(g.currentElection.opinions,t=>t[v.value])),_=t=>{if(t)return`${t.firstname} ${t.lastname}`},u=$(null),d=$(null),a=(t,e)=>{u.value=t,e.target.blur()},k=(t,e)=>{d.value=t,e.target.blur()};return(t,e)=>(o(),r(m,null,[n("div",q,[H,n("div",J,[p(s(x),{severity:f("author_id")?"primary":"secondary",label:"Candidat",class:"mx-2",onClick:e[0]||(e[0]=l=>h("author_id",l)),rounded:"",size:"small"},null,8,["severity"]),p(s(x),{severity:f("issue_id")?"primary":"secondary",label:"Thème",class:"mx-2",onClick:e[1]||(e[1]=l=>h("issue_id",l)),rounded:"",size:"small"},null,8,["severity"])]),p(s(T)),K,n("div",P,[f("author_id")?(o(!0),r(m,{key:0},b(s(g).currentElection.candidates,l=>(o(),y(s(x),{label:_(l),class:"mx-2",text:"",size:"small",severity:"primary",onClick:c=>a(l.id,c)},null,8,["label","onClick"]))),256)):(o(!0),r(m,{key:1},b(s(g).currentElection.issues,l=>(o(),y(s(x),{label:l.title,class:"mx-1",text:"",size:"small",severity:"primary",onClick:c=>k(l.id,c)},null,8,["label","onClick"]))),256))])]),p(s(T)),n("div",Q,[n("div",U,[f("author_id")?(o(),y(G,{key:0,groupedOpinions:i.value,scrollToAuthorId:u.value,onOnScrollFinish:e[2]||(e[2]=l=>u.value=null)},null,8,["groupedOpinions","scrollToAuthorId"])):(o(),y(L,{key:1,groupedOpinions:i.value,scrollToIssueId:d.value,onOnScrollFinish:e[3]||(e[3]=l=>d.value=null)},null,8,["groupedOpinions","scrollToIssueId"]))])])],64))}};export{ee as default};