import{u}from"./opinions-Ax_k20T6.js";import{_ as p}from"./BaseOpinionsTable-1gQqNPC5.js";import{r as i,X as l,o as f,a1 as c,a as d,e as m,f as _}from"./index-sjrDLI-L.js";import"./AppTableSkeleton-Nfvta1m-.js";import"./index.esm-Kf8LRFWe.js";const x={__name:"IssuesOpinions",setup(g){const a=i(!1),r=l("dialogRef"),s=i(null),e=u();f(async()=>{s.value=r.value.data,e.opinions||await e.refreshOpinions()});const t=c(()=>{var o;return e.getIssueOpinions((o=s.value)==null?void 0:o.id)});return(o,h)=>{var n;return d(),m(p,{opinions:t.value,group:!0,defaultGroupingHeader:"author.name",loading:a.value,issueId:(n=s.value)==null?void 0:n.id,onRefresh:_(e).refreshOpinions},null,8,["opinions","loading","issueId","onRefresh"])}}};export{x as default};
