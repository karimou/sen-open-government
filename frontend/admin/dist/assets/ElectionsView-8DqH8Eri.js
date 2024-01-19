import{d as g,r as v,A as b,a as k,u as S,c as f,b as o,e,f as t,w as a,o as h,g as C,p as A,h as I,i as V,_ as j}from"./index-Tc2rU4CK.js";import{s as D,a as i,b as T}from"./toolbar.esm-R8O2odAH.js";import{s as u}from"./index.esm-vGdYQZef.js";import{_ as $}from"./_plugin-vue_export-helper-x3n3nnut.js";const B=g("elections",()=>{const l=v(null);return{elections:l,refreshElections:()=>{b.elections.listElections().then(s=>l.value=s)}}}),x=l=>(A("data-v-0e6815ec"),l=l(),I(),l),N={class:"grid"},P={class:"col-12"},U={key:0,class:"card"},F={class:"my-2"},M=x(()=>o("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[o("h5",{class:"m-0"},"Élections")],-1)),q={key:1,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},L=x(()=>o("div",null,[o("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune élection"),o("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première élection à la base de données")],-1)),O={class:"mt-4 mr-auto md:mt-0 md:mr-0"},R={__name:"ElectionsView",setup(l){const n=B();k(n.refreshElections);const s=v(null),p=v(!1),E=()=>{var c;let d=(c=s.value)==null?void 0:c.map(r=>r.id);p.value=!0,b.elections.deleteElections(d).then(()=>{n.refreshElections(),s.value=null}).finally(()=>p.value=!1)},y=S(),w=V(()=>j(()=>import("./ElectionsUpsertForm-q2SH9ztR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),m=(d={})=>{y.open(w,{data:d,onClose:n.refreshElections,props:{modal:!0}})};return(d,c)=>{var r;return h(),f("div",N,[o("div",P,[((r=e(n).elections)==null?void 0:r.length)>0?(h(),f("div",U,[t(e(D),{class:"mb-4"},{start:a(()=>[o("div",F,[t(e(u),{label:"Ajouter une élection",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:m}),t(e(u),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:E,disabled:!s.value||!s.value.length,loading:p.value},null,8,["disabled","loading"])])]),_:1}),t(e(T),{value:e(n).elections,selection:s.value,"onUpdate:selection":c[0]||(c[0]=_=>s.value=_)},{header:a(()=>[M]),default:a(()=>[t(e(i),{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(e(i),{headerStyle:"min-width: 100px"},{body:a(({data:_})=>[t(e(u),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:z=>m(_)},null,8,["onClick"])]),_:1}),t(e(i),{field:"title",header:"Titre"}),t(e(i),{field:"type",header:"Type"}),t(e(i),{field:"date",header:"Date"}),t(e(i),{field:"description",header:"Description"})]),_:1},8,["value","selection"])])):(h(),f("div",q,[L,o("div",O,[t(e(u),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:m},{default:a(()=>[C("Ajouter")]),_:1})])]))])])}}},Q=$(R,[["__scopeId","data-v-0e6815ec"]]);export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ElectionsUpsertForm-q2SH9ztR.js","assets/message.esm-7AaCCNeN.js","assets/index-Tc2rU4CK.js","assets/index-tbN9M-MT.css","assets/index.esm-vGdYQZef.js","assets/textarea.esm-Zp6g0_lQ.js","assets/radiobutton.esm-at_Z4IK4.js","assets/format-39s6QTMr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
