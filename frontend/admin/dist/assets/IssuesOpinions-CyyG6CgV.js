import{u}from"./opinions-w10R7i4n.js";import{_ as p}from"./BaseOpinionsTable-ftLvn0Jl.js";import{r as i,Y as l,o as f,$ as c,a as d,e as m,f as _}from"./index-om2yVH6z.js";import"./AppTableSkeleton-bFD8jdFV.js";import"./index.esm-BEizDpwn.js";import"./avatar.esm-AA-uRh8Z.js";const B={__name:"IssuesOpinions",setup(g){const a=i(!1),r=l("dialogRef"),o=i(null),e=u();f(async()=>{o.value=r.value.data,e.opinions||await e.refreshOpinions()});const t=c(()=>{var s;return e.getIssueOpinions((s=o.value)==null?void 0:s.id)});return(s,h)=>{var n;return d(),m(p,{opinions:t.value,group:!0,defaultGroupingHeader:"author.name",loading:a.value,issueId:(n=o.value)==null?void 0:n.id,onRefresh:_(e).refreshOpinions},null,8,["opinions","loading","issueId","onRefresh"])}}};export{B as default};