import{s as y,c as N,d as b}from"./panel.esm-s1Ku1Tf5.js";import{u as k,t as x,k as n,o as s,j as c,f as r,e,d as B,h as l,b as d,F as v,g as C,q as V,c as i,a as $}from"./index-YYxOhvpO.js";const S={class:"flex align-items-center gap-2"},j={class:"font-bold"},w={class:"m-0"},q={__name:"AppCandidateOpinionsPanel",props:{candidateId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(p){const u=k(),m=p,{opinions:o,candidateId:f,collapsed:_}=x(m),a=n(()=>u.getCandidate(f.value)),g=n(()=>{if(a)return`${a.firstname} ${a.lastname}`});return(E,F)=>(s(),c(e(b),{collapsed:e(_),toggleable:"",class:"w-full my-2"},{header:r(()=>{var t;return[d("div",S,[B(e(y),{image:(t=a.value)==null?void 0:t.photo,size:"large",shape:"rectangle"},null,8,["image"]),d("span",j,l(g.value),1)])]}),default:r(()=>[(s(!0),i(v,null,$(e(o),(t,h)=>(s(),i("p",w,[C(l(t.summary)+" ",1),h!=e(o).length-1?(s(),c(e(N),{key:0})):V("",!0)]))),256))]),_:1},8,["collapsed"]))}};export{q as _};
