import{s as b,f as B,_ as S,g as A,a as D}from"./AppOpinion-ffEemrQJ.js";import{u as y,t as E,m,o,d as _,e as f,b as e,g,j as $,f as v,F as x,a as C,c as N}from"./index-WlqoymGR.js";const j={class:"flex align-items-center gap-2"},w={class:"font-bold"},O={__name:"AppCandidateOpinionsPanel",props:{candidateId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(h){const i=y(),r=h,{opinions:l,candidateId:u,collapsed:c}=E(r),a=m(()=>i.getCandidate(u.value)),n=m(()=>{if(a.value)return`${a.value.firstname} ${a.value.lastname}`}),p=m(()=>{var d;return(d=l.value)==null?void 0:d.map(t=>Number(t.num_proposals)).filter(t=>!!t).reduce((t,s)=>t+s,0)});return(d,t)=>(o(),_(e(A),{collapsed:e(c),toggleable:"",class:"w-full my-2"},{header:f(()=>{var s;return[v("div",j,[g(e(b),{image:(s=a.value)==null?void 0:s.photo,size:"large",shape:"rectangle"},null,8,["image"]),v("span",w,$(n.value),1),g(e(B),{value:p.value,severity:"success"},null,8,["value"])])]}),default:f(()=>[(o(!0),N(x,null,C(e(l),(s,k)=>(o(),_(S,{opinion:s,includeDivider:k!=e(l).length-1},null,8,["opinion","includeDivider"]))),256))]),_:1},8,["collapsed"]))}},z={class:"p-button-label"},P={__name:"AppCandidatesSelector",emits:["scroll"],setup(h,{emit:i}){const r=y(),l=i,u=(c,a)=>{l("scroll",c),a&&a.target.blur()};return(c,a)=>(o(!0),N(x,null,C(e(r).currentElection.candidates,n=>(o(),_(e(D),{class:"mx-2",text:"",size:"small",severity:"primary",onClick:p=>u(n.id,p)},{default:f(()=>[g(e(b),{image:n.photo,shape:"circle",class:"mr-1"},null,8,["image"]),v("span",z,$(e(r).getCandidateName(n.id)),1)]),_:2},1032,["onClick"]))),256))}};export{O as _,P as a};
