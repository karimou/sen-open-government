import{a as x,b as w,d as E,f as N,e as O}from"./sidebar.esm--8gQ9PCj.js";import{u as C,t as S,d as y,o as s,c as n,j as o,h as u,f as e,l as f,b as d,F as g,k as T,a as k,g as I,e as $}from"./index-DsyYwaTN.js";const V={class:"flex align-items-center gap-2"},j={class:"font-bold"},L={class:"m-0",style:{"white-space":"pre-wrap"}},z={key:0,class:"flex justify-content-end"},A=["innerHTML"],P={__name:"AppIssueOpinionsPanel",props:{issueId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(h){const r=C(),m=h,{opinions:c,issueId:i,collapsed:p}=S(m),t=y(!1),l=y(null),_=b=>{t.value=!0,l.value=b.content};return(b,v)=>(s(),n(g,null,[o(e(N),{collapsed:e(p),toggleable:"",class:"w-full my-2"},{header:u(()=>[d("div",V,[o(e(x),{image:e(r).getIssueImage(e(i)),size:"large",shape:"rectangle"},null,8,["image"]),d("span",j,f(e(r).getIssueTitle(e(i))),1)])]),default:u(()=>[(s(!0),n(g,null,$(e(c),(a,B)=>(s(),n("p",L,[T(f(a.summary)+" ",1),a.content?(s(),n("div",z,[o(e(w),{text:"",label:"En savoir plus",onClick:H=>_(a)},null,8,["onClick"])])):k("",!0),B!=e(c).length-1?(s(),I(e(E),{key:1})):k("",!0)]))),256))]),_:1},8,["collapsed"]),o(e(O),{visible:t.value,"onUpdate:visible":v[0]||(v[0]=a=>t.value=a),header:"En savoir plus",class:"w-full md:w-20rem lg:w-30rem",position:"right"},{default:u(()=>[d("p",{style:{"white-space":"pre-wrap"},innerHTML:l.value},null,8,A)]),_:1},8,["visible"])],64))}},F={class:"p-button-label"},R={__name:"AppIssuesSelector",emits:["scroll"],setup(h,{emit:r}){const m=C(),c=r,i=(p,t)=>{c("scroll",p),t.target.blur()};return(p,t)=>(s(!0),n(g,null,$(e(m).currentElection.issues,l=>(s(),I(e(w),{class:"mx-1",text:"",size:"small",severity:"primary",onClick:_=>i(l.id,_)},{default:u(()=>[o(e(x),{image:l.photo,shape:"circle",class:"mr-1"},null,8,["image"]),d("span",F,f(l.title),1)]),_:2},1032,["onClick"]))),256))}};export{P as _,R as a};
