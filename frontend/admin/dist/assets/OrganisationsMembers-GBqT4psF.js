import{r as s,X as v,o as f,u as p,a as h,c as b,g as M,A as l,i as A,_ as I}from"./index-tVf0fXHj.js";import{_ as O}from"./BasePersonsTable-2p5AenBY.js";import"./AppTableSkeleton-TCHIcvRI.js";import"./index.esm-obJRb3gY.js";import"./avatar.esm-lqM2PKUT.js";const C={style:{width:"850px"}},k={__name:"OrganisationsMembers",setup(F){const n=s(!1),c=v("dialogRef"),o=s(null),r=s([]),t=()=>{var a,e;n.value=!0,(a=o.value)!=null&&a.id&&l.organisations.listOrganisationMembers((e=o.value)==null?void 0:e.id).then(i=>r.value=i).then(()=>n.value=!1)};f(()=>{o.value=c.value.data,t()});const u=p(),m=A(()=>I(()=>import("./OrganisationMemberAdditionForm-L7dVDPWW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),_=()=>{var a;u.open(m,{data:{organisationId:(a=o.value)==null?void 0:a.id},onClose:e=>{(e==null?void 0:e.data)=="success"&&t()},props:{modal:!0}})},g=a=>{let e=a.map(i=>{var d;return{organisationId:(d=o.value)==null?void 0:d.id,personId:i.id}});return l.organisations.removeOrganisationMembers(e)};return(a,e)=>(h(),b("div",C,[M(O,{persons:r.value,loading:n.value,hideDescription:!0,addFunction:_,deleteFunction:g,onRefresh:t},null,8,["persons","loading"])]))}};export{k as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrganisationMemberAdditionForm-L7dVDPWW.js","assets/index-tVf0fXHj.js","assets/index-D9x--RlZ.css","assets/index.esm--oFn3BQH.js","assets/message.esm-SFT11qH8.js","assets/index.esm-obJRb3gY.js","assets/AppTableSkeleton-TCHIcvRI.js","assets/persons-ouAhB9tu.js","assets/OrganisationsView-5uLff-_z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
