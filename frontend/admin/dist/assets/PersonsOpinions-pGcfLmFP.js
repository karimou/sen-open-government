import{u as p}from"./opinions-qsFksj2M.js";import{_ as u}from"./BaseOpinionsTable-Cl4R-MeX.js";import{r as i,X as l,o as f,$ as c,a as d,e as m,f as _}from"./index-x8nUED8N.js";import"./AppTableSkeleton-HNvhEeWo.js";import"./index.esm-Au2F2Qkt.js";import"./avatar.esm-u3O238l-.js";const I={__name:"PersonsOpinions",setup(g){const r=i(!1),a=l("dialogRef"),n=i(null),o=p();f(async()=>{n.value=a.value.data,o.opinions||await o.refreshOpinions()});const t=c(()=>{var e;return o.getPersonOpinions((e=n.value)==null?void 0:e.id)});return(e,v)=>{var s;return d(),m(u,{opinions:t.value,group:!0,defaultGroupingHeader:"issue.title",loading:r.value,personId:(s=n.value)==null?void 0:s.id,onRefresh:_(o).refreshOpinions},null,8,["opinions","loading","personId","onRefresh"])}}};export{I as default};