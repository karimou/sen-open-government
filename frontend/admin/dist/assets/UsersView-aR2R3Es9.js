import{d as y,r as v,A as b,a as k,u as S,c as f,b as o,e,f as s,w as n,o as h,g as C,p as A,h as I,i as V,_ as j}from"./index-vwDixBhf.js";import{s as N,a as i,b as $}from"./toolbar.esm-IUUGoDwr.js";import{s as u}from"./inputtext.esm-odSb5XQY.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";const E=y("users",()=>{const l=v(null);return{users:l,refreshUsers:()=>{b.users.listUsers().then(t=>l.value=t)}}}),x=l=>(A("data-v-a5907cc7"),l=l(),I(),l),P={class:"grid"},D={class:"col-12"},F={key:0,class:"card"},M={class:"my-2"},T=x(()=>o("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[o("h5",{class:"m-0"},"Utilisateurs")],-1)),q={key:1,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},L=x(()=>o("div",null,[o("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucun utilisateur"),o("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première élection à la base de données")],-1)),O={class:"mt-4 mr-auto md:mt-0 md:mr-0"},R={__name:"UsersView",setup(l){const r=E();k(r.refreshUsers);const t=v(null),p=v(!1),U=()=>{var a;let d=(a=t.value)==null?void 0:a.map(c=>c.id);p.value=!0,b.users.deleteUsers(d).then(()=>{r.refreshUsers(),t.value=null}).finally(()=>p.value=!1)},w=S(),g=V(()=>j(()=>import("./UsersUpsertForm-B3U8CaUV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),m=(d={})=>{w.open(g,{data:d,onClose:r.refreshUsers,props:{modal:!0}})};return(d,a)=>{var c;return h(),f("div",P,[o("div",D,[((c=e(r).users)==null?void 0:c.length)>0?(h(),f("div",F,[s(e(N),{class:"mb-4"},{start:n(()=>[o("div",M,[s(e(u),{label:"Ajouter un utilisateur",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:m}),s(e(u),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:U,disabled:!t.value||!t.value.length,loading:p.value},null,8,["disabled","loading"])])]),_:1}),s(e($),{value:e(r).users,selection:t.value,"onUpdate:selection":a[0]||(a[0]=_=>t.value=_)},{header:n(()=>[T]),default:n(()=>[s(e(i),{selectionMode:"multiple",headerStyle:"width: 3rem"}),s(e(i),{headerStyle:"min-width: 100px"},{body:n(({data:_})=>[s(e(u),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:z=>m(_)},null,8,["onClick"])]),_:1}),s(e(i),{field:"username",header:"Nom d'utilisateur"}),s(e(i),{field:"email",header:"email"}),s(e(i),{field:"phone",header:"Numéro de téléphone"})]),_:1},8,["value","selection"])])):(h(),f("div",q,[L,o("div",O,[s(e(u),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:m},{default:n(()=>[C("Ajouter")]),_:1})])]))])])}}},Q=B(R,[["__scopeId","data-v-a5907cc7"]]);export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/UsersUpsertForm-B3U8CaUV.js","assets/index.esm-Ul8tbHrw.js","assets/index-vwDixBhf.js","assets/index-tbN9M-MT.css","assets/inputtext.esm-odSb5XQY.js","assets/inputmask.esm-VlwjRFl8.js","assets/message.esm-QJ3mL3J0.js","assets/toolbar.esm-IUUGoDwr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
