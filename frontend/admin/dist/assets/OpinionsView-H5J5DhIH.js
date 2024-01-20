import{a as A,r as h,u as R,i as S,c as u,b as a,e as t,f as s,w as i,j,o as d,F as G,k as g,t as y,g as $,A as B,h as F,_ as N}from"./index-hz0RWW_t.js";import{c as U,s as M,a as c,b as D}from"./toolbar.esm--yWOjs_u.js";import{s as f}from"./index.esm-fL_-_ufj.js";import{u as E}from"./opinions-agh5c72w.js";const T={class:"grid"},H={class:"col-12"},I={key:0,class:"card"},L={class:"my-2"},q={class:"p-float-label"},z=a("label",null,"Grouper par:",-1),J=a("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[a("h5",{class:"m-0"},"Opinions")],-1),K=["alt","src"],Q={class:"vertical-align-middle ml-2 font-bold line-height-3"},W={key:1,class:"vertical-align-middle ml-2 font-bold line-height-3"},X={key:1,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},Y=a("div",null,[a("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune opinion"),a("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première opinion à la base de données")],-1),Z={class:"mt-4 mr-auto md:mt-0 md:mr-0"},ne={__name:"OpinionsView",setup(P){const p=E();A(p.refreshOpinions);const r=h(null),_=h(!1),w=()=>{var n;let o=(n=r.value)==null?void 0:n.map(m=>m.id);_.value=!0,B.opinions.deleteOpinions(o).then(()=>{p.refreshOpinions(),r.value=null}).finally(()=>_.value=!1)},x=R(),k=F(()=>N(()=>import("./OpinionsUpsertForm-niuixhiL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),v=(o={})=>{x.open(k,{data:o,onClose:p.refreshOpinions,props:{modal:!0}})},O=o=>`${o.firstname} ${o.lastname}`,C=S(()=>p.opinions.map(o=>({...o,author:{...o.author,name:O(o.author)}}))),b=h(),l=h("author.name"),V=[{field:"author.name",label:"Auteur"},{field:"issue.title",label:"Thème"}];return(o,n)=>{var m;return d(),u("div",T,[a("div",H,[((m=t(p).opinions)==null?void 0:m.length)>0?(d(),u("div",I,[s(t(M),{class:"mb-4"},{start:i(()=>[a("div",L,[s(t(f),{label:"Ajouter une opinion",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:v}),s(t(f),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:w,disabled:!r.value||!r.value.length,loading:_.value},null,8,["disabled","loading"])])]),end:i(()=>[a("div",q,[s(t(U),{options:V,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),optionLabel:"label",optionValue:"field"},null,8,["modelValue"]),z])]),_:1}),(d(),j(t(D),{key:l.value,value:C.value,tableStyle:"min-width: 50rem",selection:r.value,"onUpdate:selection":n[1]||(n[1]=e=>r.value=e),expandedRowGroups:b.value,"onUpdate:expandedRowGroups":n[2]||(n[2]=e=>b.value=e),expandableRowGroups:"",rowGroupMode:"subheader",groupRowsBy:l.value,sortMode:"single",sortField:l.value,sortOrder:1},{header:i(()=>[J]),groupheader:i(e=>[l.value=="author.name"?(d(),u(G,{key:0},[e.data.author.photo?(d(),u("img",{key:0,alt:e.data.author.name,src:e.data.author.photo,width:"32",style:{"vertical-align":"middle"},class:"ml-2"},null,8,K)):g("",!0),a("span",Q,y(e.data.author.name),1)],64)):l.value=="issue.title"?(d(),u("span",W,y(e.data.issue.title),1)):g("",!0)]),default:i(()=>[s(t(c),{selectionMode:"multiple",headerStyle:"width: 3rem"}),s(t(c),{headerStyle:"min-width: 100px"},{body:i(({data:e})=>[s(t(f),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:ee=>v(e)},null,8,["onClick"])]),_:1}),s(t(c),{field:"author.name",header:"Auteur"}),s(t(c),{field:"issue.title",header:"Sujet"}),s(t(c),{field:"summary",header:"Résumé"})]),_:1},8,["value","selection","expandedRowGroups","groupRowsBy","sortField"]))])):(d(),u("div",X,[Y,a("div",Z,[s(t(f),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:v},{default:i(()=>[$("Ajouter")]),_:1})])]))])])}}};export{ne as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpinionsUpsertForm-niuixhiL.js","assets/message.esm-TrzrTVKT.js","assets/index-hz0RWW_t.js","assets/index-tbN9M-MT.css","assets/index.esm-fL_-_ufj.js","assets/textarea.esm-mUQgP30i.js","assets/editor.esm-C-9kZb3f.js","assets/toolbar.esm--yWOjs_u.js","assets/persons-XZQ-Wm6p.js","assets/issues-t-Z-LgdM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}