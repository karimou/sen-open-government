import{u as p}from"./opinions-xkQBwRcG.js";import{_ as u}from"./BaseOpinionsTable-ejRxzf01.js";import{r as i,X as l,o as f,$ as c,a as d,e as m,f as _}from"./index-ggVRE4OM.js";import"./AppTableSkeleton-styVRshT.js";import"./index.esm-BOO5LpC0.js";const B={__name:"PersonsOpinions",setup(g){const r=i(!1),a=l("dialogRef"),n=i(null),o=p();f(async()=>{n.value=a.value.data,o.opinions||await o.refreshOpinions()});const t=c(()=>{var e;return o.getPersonOpinions((e=n.value)==null?void 0:e.id)});return(e,v)=>{var s;return d(),m(u,{opinions:t.value,group:!0,defaultGroupingHeader:"issue.title",loading:r.value,personId:(s=n.value)==null?void 0:s.id,onRefresh:_(o).refreshOpinions},null,8,["opinions","loading","personId","onRefresh"])}}};export{B as default};