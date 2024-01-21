import{Y as V,r as D,u as N,o as p,c as f,b as n,f as e,e as O,g as s,w as i,h as S,A as T,i as g,_ as k}from"./index-HWtTsvFM.js";import{s as I,a as r,b as R,_ as U}from"./AppTableSkeleton-3-U8kaGt.js";import{s as d}from"./index.esm-FaUUA4nG.js";const L={class:"grid"},q={class:"col-12"},M={key:1,class:"card"},Y={class:"my-2"},z=n("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[n("h5",{class:"m-0"},"Personnes")],-1),G={key:2,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},H=n("div",null,[n("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune persone"),n("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première personne à la base de données")],-1),J={class:"mt-4 mr-auto md:mt-0 md:mr-0"},X={__name:"BasePersonsTable",props:{persons:Array,addFunction:{type:Function,default:null},deleteFunction:{type:Function,default:null},loading:{type:Boolean,default:!1}},emits:["refresh"],setup(P,{emit:w}){const C=P,{persons:_,loading:l,addFunction:v,deleteFunction:b}=V(C),m=w,o=D(null),F=()=>{var t;let a=(t=o.value)==null?void 0:t.map(u=>u.id);l.value=!0,T.persons.deletePersons(a).then(()=>{m("refresh"),o.value=null}).finally(()=>l.value=!1)},A=()=>{if(b.value)l.value=!0,b.value(o.value).then(()=>l.value=!1).then(()=>m("refresh"));else return F()},h=N(),B=g(()=>k(()=>import("./PersonsUpsertForm-axZhbO31.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),y=(a={})=>{h.open(B,{data:a,onClose:()=>m("refresh"),props:{modal:!0}})},x=()=>v.value?v.value():y(),$=g(()=>k(()=>import("./PersonsOpinions-28Lh3Q6H.js"),__vite__mapDeps([8,9,2,3,10,11,4]))),j=(a={})=>{h.open($,{data:a,props:{modal:!0}})};return(a,t)=>{var u;return p(),f("div",L,[n("div",q,[e(l)?(p(),O(U,{key:0})):((u=e(_))==null?void 0:u.length)>0?(p(),f("div",M,[s(e(I),{class:"mb-4"},{start:i(()=>[n("div",Y,[s(e(d),{label:"Ajouter une personne",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:t[0]||(t[0]=()=>x())}),s(e(d),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:t[1]||(t[1]=()=>A()),disabled:!o.value||!o.value.length,loading:e(l)},null,8,["disabled","loading"])])]),_:1}),s(e(R),{value:e(_),selection:o.value,"onUpdate:selection":t[2]||(t[2]=c=>o.value=c)},{header:i(()=>[z]),default:i(()=>[s(e(r),{selectionMode:"multiple",headerStyle:"width: 3rem"}),s(e(r),{headerStyle:"min-width: 100px"},{body:i(({data:c})=>[s(e(d),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:E=>y(c)},null,8,["onClick"]),s(e(d),{class:"p-button-text p-button-rounded",icon:"pi pi-megaphone",onClick:E=>j(c)},null,8,["onClick"])]),_:1}),s(e(r),{field:"firstname",header:"Prénom"}),s(e(r),{field:"lastname",header:"Nom"}),s(e(r),{field:"description",header:"Description"})]),_:1},8,["value","selection"])])):(p(),f("div",G,[H,n("div",J,[s(e(d),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:t[3]||(t[3]=()=>x())},{default:i(()=>[S("Ajouter")]),_:1})])]))])])}}};export{X as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonsUpsertForm-axZhbO31.js","assets/message.esm-OieoKZiQ.js","assets/index-HWtTsvFM.js","assets/index-tbN9M-MT.css","assets/index.esm-FaUUA4nG.js","assets/textarea.esm-WoudxIoE.js","assets/editor.esm-kVSwRZPD.js","assets/format-39s6QTMr.js","assets/PersonsOpinions-28Lh3Q6H.js","assets/opinions-bDVTOwqO.js","assets/BaseOpinionsTable-MB-0BCd-.js","assets/AppTableSkeleton-3-U8kaGt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
