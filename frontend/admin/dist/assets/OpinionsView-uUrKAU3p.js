import{u as r}from"./opinions-wtf8YSiD.js";import{_ as s}from"./BaseOpinionsTable-iOjrzx7r.js";import{r as i,o as a,a as t,e as p,f as n}from"./index-nfabErwM.js";import"./AppTableSkeleton-ccuFNckQ.js";import"./index.esm-GIVjqfaJ.js";import"./avatar.esm-gtHlE3uH.js";const O={__name:"OpinionsView",setup(f){const o=i(!1),e=r();return a(()=>{o.value=!0,e.refreshOpinions().then(()=>o.value=!1)}),(u,l)=>(t(),p(s,{opinions:n(e).opinions,group:!0,loading:o.value,onRefresh:n(e).refreshOpinions},null,8,["opinions","loading","onRefresh"]))}};export{O as default};
