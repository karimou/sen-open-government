import{u as r}from"./opinions-8aHLBeXh.js";import{_ as s}from"./BaseOpinionsTable-UKKAkOpX.js";import{r as i,o as a,a as t,e as p,f as n}from"./index-t5PwyJpr.js";import"./AppTableSkeleton-xwr3INPz.js";import"./index.esm--ZYlbGIJ.js";import"./avatar.esm-7lzRsvYb.js";const O={__name:"OpinionsView",setup(f){const o=i(!1),e=r();return a(()=>{o.value=!0,e.refreshOpinions().then(()=>o.value=!1)}),(u,l)=>(t(),p(s,{opinions:n(e).opinions,group:!0,loading:o.value,onRefresh:n(e).refreshOpinions},null,8,["opinions","loading","onRefresh"]))}};export{O as default};
