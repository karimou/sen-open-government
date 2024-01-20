import{d as y,r as h,A as b,a as w,u as k,c as g,b as n,e,f as t,w as r,o as _,g as C,h as S,_ as A}from"./index-hz0RWW_t.js";import{s as j,a as s,b as T}from"./toolbar.esm--yWOjs_u.js";import{s as c}from"./index.esm-fL_-_ufj.js";const V=y("organisations",()=>{const u=h(null);return{organisations:u,refreshOrganisations:()=>{b.organisations.listOrganisations().then(a=>u.value=a)}}}),P={class:"grid"},N={class:"col-12"},$={key:0,class:"card"},B={class:"my-2"},D=n("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[n("h5",{class:"m-0"},"Organisations")],-1),E={key:1,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},F=n("div",null,[n("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune organisation"),n("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première organisation à la base de données")],-1),I={class:"mt-4 mr-auto md:mt-0 md:mr-0"},M={__name:"OrganisationsView",setup(u){const o=V();w(o.refreshOrganisations);const a=h(null),p=h(!1),v=()=>{var i;let l=(i=a.value)==null?void 0:i.map(d=>d.id);p.value=!0,b.organisations.deleteOrganisations(l).then(()=>{o.refreshOrganisations(),a.value=null}).finally(()=>p.value=!1)},O=k(),x=S(()=>A(()=>import("./OrganisationsUpsertForm-T1kZUpzr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),m=(l={})=>{O.open(x,{data:l,onClose:o.refreshOrganisations,props:{modal:!0}})};return(l,i)=>{var d;return _(),g("div",P,[n("div",N,[((d=e(o).organisations)==null?void 0:d.length)>0?(_(),g("div",$,[t(e(j),{class:"mb-4"},{start:r(()=>[n("div",B,[t(e(c),{label:"Ajouter une organisation",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:m}),t(e(c),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:v,disabled:!a.value||!a.value.length,loading:p.value},null,8,["disabled","loading"])])]),_:1}),t(e(T),{value:e(o).organisations,selection:a.value,"onUpdate:selection":i[0]||(i[0]=f=>a.value=f)},{header:r(()=>[D]),default:r(()=>[t(e(s),{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(e(s),{headerStyle:"min-width: 100px"},{body:r(({data:f})=>[t(e(c),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:U=>m(f)},null,8,["onClick"])]),_:1}),t(e(s),{field:"name",header:"Nom"}),t(e(s),{field:"type",header:"Type"}),t(e(s),{field:"description",header:"Description"}),t(e(s),{field:"twitter",header:"Twitter"}),t(e(s),{field:"facebook",header:"Facebook"}),t(e(s),{field:"instagram",header:"Instagram"}),t(e(s),{field:"website",header:"Website"}),t(e(s),{field:"address",header:"Adresse"}),t(e(s),{field:"contact_phone",header:"Contact (Téléphone)"}),t(e(s),{field:"contact_email",header:"Contact (email)"}),t(e(s),{field:"parent_organisation_id",header:"Parent"})]),_:1},8,["value","selection"])])):(_(),g("div",E,[F,n("div",I,[t(e(c),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:m},{default:r(()=>[C("Ajouter")]),_:1})])]))])])}}},R=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{R as O,V as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrganisationsUpsertForm-T1kZUpzr.js","assets/message.esm-TrzrTVKT.js","assets/index-hz0RWW_t.js","assets/index-tbN9M-MT.css","assets/index.esm-fL_-_ufj.js","assets/textarea.esm-mUQgP30i.js","assets/radiobutton.esm-XHmqgTw8.js","assets/toolbar.esm--yWOjs_u.js","assets/inputmask.esm-nR3_O2iR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
