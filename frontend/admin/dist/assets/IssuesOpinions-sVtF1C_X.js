import{u}from"./opinions-a2xQAi_i.js";import{_ as p}from"./BaseOpinionsTable-RvLlShNm.js";import{r as i,X as l,o as f,Y as c,a as d,e as m,f as _}from"./index-tVf0fXHj.js";import"./AppTableSkeleton-TCHIcvRI.js";import"./index.esm-obJRb3gY.js";import"./avatar.esm-lqM2PKUT.js";const B={__name:"IssuesOpinions",setup(g){const a=i(!1),r=l("dialogRef"),o=i(null),e=u();f(async()=>{o.value=r.value.data,e.opinions||await e.refreshOpinions()});const t=c(()=>{var s;return e.getIssueOpinions((s=o.value)==null?void 0:s.id)});return(s,h)=>{var n;return d(),m(p,{opinions:t.value,group:!0,defaultGroupingHeader:"author.name",loading:a.value,issueId:(n=o.value)==null?void 0:n.id,onRefresh:_(e).refreshOpinions},null,8,["opinions","loading","issueId","onRefresh"])}}};export{B as default};