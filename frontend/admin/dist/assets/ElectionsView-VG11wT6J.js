import{d as V,r as _,A as k,o as P,u as T,a as m,c as b,b as s,e as $,f as e,g as t,w as a,h as g,i as y,_ as x}from"./index-LvZPrwL6.js";import{s as D,a as c,b as L,_ as B}from"./AppTableSkeleton-TXlDZp8X.js";import{s as r}from"./index.esm-mupo9eT0.js";const O=V("elections",()=>{const f=_(null);return{elections:f,refreshElections:async()=>k.elections.listElections().then(l=>f.value=l)}}),I={class:"grid"},M={class:"col-12"},N={key:1,class:"card"},U={class:"my-2"},F=s("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[s("h5",{class:"m-0"},"Élections")],-1),R={key:2,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},q=s("div",null,[s("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune élection"),s("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première élection à la base de données")],-1),z={class:"mt-4 mr-auto md:mt-0 md:mr-0"},G={__name:"ElectionsView",setup(f){const o=O(),l=_(!1);P(()=>{l.value=!0,o.refreshElections().then(()=>l.value=!1)});const n=_(null),h=_(!1),w=()=>{var d;let i=(d=n.value)==null?void 0:d.map(u=>u.id);h.value=!0,k.elections.deleteElections(i).then(()=>{o.refreshElections(),n.value=null}).finally(()=>h.value=!1)},E=T(),C=y(()=>x(()=>import("./ElectionsUpsertForm-kZc9uH7X.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),v=(i={})=>{E.open(C,{data:i,onClose:o.refreshElections,props:{modal:!0}})},S=y(()=>x(()=>import("./ElectionsCandidates-pJpyRVQR.js"),__vite__mapDeps([8,2,3,9,10,4,11]))),A=(i={})=>{E.open(S,{data:i,props:{modal:!0}})};return(i,d)=>{var u;return m(),b("div",I,[s("div",M,[l.value?(m(),$(B,{key:0})):((u=e(o).elections)==null?void 0:u.length)>0?(m(),b("div",N,[t(e(D),{class:"mb-4"},{start:a(()=>[s("div",U,[t(e(r),{label:"Ajouter une élection",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:v}),t(e(r),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:w,disabled:!n.value||!n.value.length,loading:h.value},null,8,["disabled","loading"])])]),_:1}),t(e(L),{value:e(o).elections,selection:n.value,"onUpdate:selection":d[0]||(d[0]=p=>n.value=p),loading:l.value},{header:a(()=>[F]),loading:a(()=>[g(" Loading customers data. Please wait. ")]),default:a(()=>[t(e(c),{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(e(c),{headerStyle:"min-width: 100px"},{body:a(({data:p})=>[t(e(r),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:j=>v(p)},null,8,["onClick"]),t(e(r),{class:"p-button-text p-button-rounded",icon:"pi pi-users",onClick:j=>A(p)},null,8,["onClick"])]),_:1}),t(e(c),{field:"title",header:"Titre"}),t(e(c),{field:"type",header:"Type"}),t(e(c),{field:"date",header:"Date"}),t(e(c),{field:"description",header:"Description"})]),_:1},8,["value","selection","loading"])])):(m(),b("div",R,[q,s("div",z,[t(e(r),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:v},{default:a(()=>[g("Ajouter")]),_:1})])]))])])}}},Q=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{Q as E,O as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ElectionsUpsertForm-kZc9uH7X.js","assets/message.esm-q41ZT9ln.js","assets/index-LvZPrwL6.js","assets/index-D9x--RlZ.css","assets/index.esm-mupo9eT0.js","assets/textarea.esm-TDnLX4UC.js","assets/radiobutton.esm-M11dYAQC.js","assets/format-39s6QTMr.js","assets/ElectionsCandidates-pJpyRVQR.js","assets/BasePersonsTable-oybZLMY2.js","assets/AppTableSkeleton-TXlDZp8X.js","assets/avatar.esm-7BC0z0o-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}