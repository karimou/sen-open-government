import{a as w,b as $,d as V,f as T,e as j}from"./sidebar.esm--8gQ9PCj.js";import{u as N,t as A,p as C,d as k,o as a,c as o,j as r,h as u,f as e,l as f,b as d,F as g,k as L,a as x,g as B,e as E}from"./index-DsyYwaTN.js";const z={class:"flex align-items-center gap-2"},F={class:"font-bold"},H={class:"m-0",style:{"white-space":"pre-wrap"}},I={key:0,class:"flex justify-content-end"},M=["innerHTML"],q={__name:"AppCandidateOpinionsPanel",props:{candidateId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(h){const m=N(),i=h,{opinions:c,candidateId:_,collapsed:p}=A(i),t=C(()=>m.getCandidate(_.value)),l=C(()=>{if(t.value)return`${t.value.firstname} ${t.value.lastname}`}),n=k(!1),v=k(null),O=b=>{n.value=!0,v.value=b.content};return(b,y)=>(a(),o(g,null,[r(e(T),{collapsed:e(p),toggleable:"",class:"w-full my-2"},{header:u(()=>{var s;return[d("div",z,[r(e(w),{image:(s=t.value)==null?void 0:s.photo,size:"large",shape:"rectangle"},null,8,["image"]),d("span",F,f(l.value),1)])]}),default:u(()=>[(a(!0),o(g,null,E(e(c),(s,S)=>(a(),o("p",H,[L(f(s.summary)+" ",1),s.content?(a(),o("div",I,[r(e($),{text:"",label:"En savoir plus",onClick:P=>O(s)},null,8,["onClick"])])):x("",!0),S!=e(c).length-1?(a(),B(e(V),{key:1})):x("",!0)]))),256))]),_:1},8,["collapsed"]),r(e(j),{visible:n.value,"onUpdate:visible":y[0]||(y[0]=s=>n.value=s),header:"En savoir plus",class:"w-full md:w-20rem lg:w-30rem",position:"right"},{default:u(()=>[d("p",{style:{"white-space":"pre-wrap"},innerHTML:v.value},null,8,M)]),_:1},8,["visible"])],64))}},D={class:"p-button-label"},G={__name:"AppCandidatesSelector",emits:["scroll"],setup(h,{emit:m}){const i=N(),c=m,_=(p,t)=>{c("scroll",p),t&&t.target.blur()};return(p,t)=>(a(!0),o(g,null,E(e(i).currentElection.candidates,l=>(a(),B(e($),{class:"mx-2",text:"",size:"small",severity:"primary",onClick:n=>_(l.id,n)},{default:u(()=>[r(e(w),{image:l.photo,shape:"circle",class:"mr-1"},null,8,["image"]),d("span",D,f(e(i).getCandidateName(l.id)),1)]),_:2},1032,["onClick"]))),256))}};export{q as _,G as a};
