import{u}from"./opinions-xkQBwRcG.js";import{_ as p}from"./BaseOpinionsTable-ejRxzf01.js";import{r as i,X as l,o as f,$ as c,a as d,e as m,f as _}from"./index-ggVRE4OM.js";import"./AppTableSkeleton-styVRshT.js";import"./index.esm-BOO5LpC0.js";const x={__name:"IssuesOpinions",setup(g){const a=i(!1),r=l("dialogRef"),s=i(null),e=u();f(async()=>{s.value=r.value.data,e.opinions||await e.refreshOpinions()});const t=c(()=>{var o;return e.getIssueOpinions((o=s.value)==null?void 0:o.id)});return(o,h)=>{var n;return d(),m(p,{opinions:t.value,group:!0,defaultGroupingHeader:"author.name",loading:a.value,issueId:(n=s.value)==null?void 0:n.id,onRefresh:_(e).refreshOpinions},null,8,["opinions","loading","issueId","onRefresh"])}}};export{x as default};