import{i as E,q as N,d as l,u as S,s as V,v as j,w as z,p as A,c as p,b as s,x as y,l as C,g as i,f as r,F as h,e as L,h as M,o as f}from"./index-hZT6IFBy.js";import{b as P,c as R}from"./panel.esm-z31txKCs.js";import{s as T,b as F}from"./bg-4wSwOAkf.js";import{a as H,_ as O}from"./AppCandidatesSelector-JDvjfB8q.js";import{_ as U}from"./_plugin-vue_export-helper-x3n3nnut.js";const q={class:"issue-name-zone justify-content-center"},D={class:"text-4xl"},G={class:"flex justify-content-center mb-6"},J={style:{"z-index":"1",position:"relative"}},K={class:"grid"},Q={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col-offset-1 col-10"},W=["innerHTML"],X={__name:"ElectionIssue",setup(Y){const I=E("$groupArrayBy"),w=N(),u=l(null),x=l(null),n=l(null),a=l(null),c=l(!1),d=S(),m=t=>{x.value=Number(t.electionId),n.value=Number(t.issueId)};V(()=>m(w.params)),j((t,e)=>{m(t.params),u.value=null}),z(n,()=>a.value=d.getIssue(n.value));const $=A(()=>{if(!d.currentElection.opinions)return[];let t=d.currentElection.opinions.filter(e=>u.value?e.author_id==u.value:!0).filter(e=>e.issue_id==n.value);return I(t,e=>e.author_id)}),v=l({}),k=t=>{var e;(e=v.value[t])==null||e.scrollIntoView({behavior:"smooth"})};return(t,e)=>{var _,g;return f(),p(h,null,[s("div",{class:"background-image pt-2 w-full",style:y({backgroundImage:`url(${r(F)})`})},[s("div",{class:"issue-image",style:y({backgroundImage:`url(${(_=a.value)==null?void 0:_.photo})`})},null,4),s("div",q,[s("div",null,[s("span",D,C((g=a.value)==null?void 0:g.title),1)]),s("div",null,[i(r(P),{label:"Plus d'infos",text:"",severity:"primary",onClick:e[0]||(e[0]=o=>c.value=!0)})])]),s("div",G,[i(H,{onScroll:e[1]||(e[1]=o=>k(o))})]),s("div",J,[s("div",K,[s("div",Q,[(f(!0),p(h,null,L($.value,(o,b)=>(f(),p("div",{ref_for:!0,ref:B=>v.value[b]=B},[i(O,{opinions:o,candidateId:Number(b),collapsed:!1},null,8,["opinions","candidateId"])],512))),256))])])]),i(r(T),{visible:c.value,"onUpdate:visible":e[2]||(e[2]=o=>c.value=o),header:"Plus d'infos",class:"w-full md:w-20rem lg:w-30rem"},{default:M(()=>{var o;return[s("p",{style:{"white-space":"pre-wrap"},innerHTML:(o=a.value)==null?void 0:o.short_description},null,8,W)]}),_:1},8,["visible"])],4),i(r(R))],64)}}},le=U(X,[["__scopeId","data-v-6cd9d347"]]);export{le as default};
