import{s as b,a as B,_ as C,g as S,b as N}from"./AppOpinion-6k-3yhZQ.js";import{u as h,t as P,m as D,r as E,p as T,o as a,d,e as _,b as e,g,j as y,f,F as I,a as x,c as $}from"./index-FBOT6C75.js";const j={class:"font-bold"},F={__name:"AppIssueOpinionsPanel",props:{issueId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(v){const o=h(),u=v,{opinions:l,issueId:n,collapsed:r}=P(u),c=D(()=>{var m;return(m=l.value)==null?void 0:m.map(t=>Number(t.num_proposals)).filter(t=>!!t).reduce((t,i)=>t+i,0)}),s=E();T(()=>{s.value=r.value});const p=()=>s.value=!s.value;return(m,t)=>(a(),d(e(S),{collapsed:s.value,toggleable:"",class:"w-full my-2"},{header:_(()=>[f("div",{class:"flex align-items-center gap-2 cursor-pointer",onClick:t[0]||(t[0]=i=>p())},[g(e(b),{image:e(o).getIssueImage(e(n)),size:"large",shape:"rectangle"},null,8,["image"]),f("span",j,y(e(o).getIssueTitle(e(n))),1),g(e(B),{value:c.value,severity:"success"},null,8,["value"])])]),default:_(()=>[(a(!0),$(I,null,x(e(l),(i,k)=>(a(),d(C,{opinion:i,includeDivider:k!=e(l).length-1},null,8,["opinion","includeDivider"]))),256))]),_:1},8,["collapsed"]))}},w={class:"p-button-label"},O={__name:"AppIssuesSelector",emits:["scroll"],setup(v,{emit:o}){const u=h(),l=o,n=(r,c)=>{l("scroll",r),c.target.blur()};return(r,c)=>(a(!0),$(I,null,x(e(u).currentElection.issues,s=>(a(),d(e(N),{class:"mx-1",text:"",size:"small",severity:"primary",onClick:p=>n(s.id,p)},{default:_(()=>[g(e(b),{image:s.photo,shape:"circle",class:"mr-1"},null,8,["image"]),f("span",w,y(s.title),1)]),_:2},1032,["onClick"]))),256))}};export{F as _,O as a};