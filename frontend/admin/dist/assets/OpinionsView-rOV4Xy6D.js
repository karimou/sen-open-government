import{u as r}from"./opinions-w10R7i4n.js";import{_ as s}from"./BaseOpinionsTable-ftLvn0Jl.js";import{r as i,o as a,a as t,e as p,f as n}from"./index-om2yVH6z.js";import"./AppTableSkeleton-bFD8jdFV.js";import"./index.esm-BEizDpwn.js";import"./avatar.esm-AA-uRh8Z.js";const O={__name:"OpinionsView",setup(f){const o=i(!1),e=r();return a(()=>{o.value=!0,e.refreshOpinions().then(()=>o.value=!1)}),(u,l)=>(t(),p(s,{opinions:n(e).opinions,group:!0,loading:o.value,onRefresh:n(e).refreshOpinions},null,8,["opinions","loading","onRefresh"]))}};export{O as default};