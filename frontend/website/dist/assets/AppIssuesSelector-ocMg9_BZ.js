import{a as x,d as I,e as k,b as B}from"./panel.esm-up7nN6RI.js";import{u as f,t as N,o as s,l as p,h as d,f as e,g as S,k as _,b as g,F as h,j as C,a as V,c as u,e as b}from"./index-h4EnpgFa.js";const $={class:"flex align-items-center gap-2"},E={class:"font-bold"},T={class:"m-0"},w={__name:"AppIssueOpinionsPanel",props:{issueId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(m){const t=f(),r=m,{opinions:a,issueId:l,collapsed:o}=N(r);return(c,n)=>(s(),p(e(k),{collapsed:e(o),toggleable:"",class:"w-full my-2"},{header:d(()=>[g("div",$,[S(e(x),{image:e(t).getIssueImage(e(l)),size:"large",shape:"rectangle"},null,8,["image"]),g("span",E,_(e(t).getIssueTitle(e(l))),1)])]),default:d(()=>[(s(!0),u(h,null,b(e(a),(i,y)=>(s(),u("p",T,[C(_(i.summary)+" ",1),y!=e(a).length-1?(s(),p(e(I),{key:0})):V("",!0)]))),256))]),_:1},8,["collapsed"]))}},z={__name:"AppIssuesSelector",emits:["scroll"],setup(m,{emit:t}){const r=f(),a=t,l=(o,c)=>{a("scroll",o),c.target.blur()};return(o,c)=>(s(!0),u(h,null,b(e(r).currentElection.issues,n=>(s(),p(e(B),{label:n.title,class:"mx-1",text:"",size:"small",severity:"primary",onClick:i=>l(n.id,i)},null,8,["label","onClick"]))),256))}};export{w as _,z as a};
