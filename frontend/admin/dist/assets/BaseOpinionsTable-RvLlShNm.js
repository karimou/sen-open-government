import{$ as L,r as _,u as q,Y,a as n,c as p,b as a,f as e,e as h,g as s,H as O,w as d,F as A,j as y,E as I,h as z,A as J,i as R,_ as G}from"./index-tVf0fXHj.js";import{c as K,s as Q,a as m,b as W,_ as X}from"./AppTableSkeleton-TCHIcvRI.js";import{s as c}from"./index.esm-obJRb3gY.js";import{s as V}from"./avatar.esm-lqM2PKUT.js";const Z={class:"grid"},P={class:"col-12"},ee={key:1,class:"card"},te={class:"my-2"},oe={class:"p-float-label"},se=a("label",null,"Grouper par:",-1),ae=a("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[a("h5",{class:"m-0"},"Opinions")],-1),le={class:"vertical-align-middle ml-2 font-bold line-height-3"},ne={class:"vertical-align-middle ml-2 font-bold line-height-3"},ie={key:2,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},de=a("div",null,[a("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune opinion"),a("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première opinion à la base de données")],-1),re={class:"mt-4 mr-auto md:mt-0 md:mr-0"},ve={__name:"BaseOpinionsTable",props:{opinions:Array,personId:Number,issueId:Number,defaultGroupingHeader:{type:String,default:"author.name"},group:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["refresh"],setup(S,{emit:B}){const j=S,{opinions:w,group:u,personId:x,issueId:k,loading:f,defaultGroupingHeader:N}=L(j),g=B,r=_(null),E=()=>{var o;let l=(o=r.value)==null?void 0:o.map(v=>v.id);f.value=!0,J.opinions.deleteOpinions(l).then(()=>{g("refresh"),r.value=null}).finally(()=>f.value=!1)},C=q(),F=R(()=>G(()=>import("./OpinionsUpsertForm-sfdbk9a_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),b=(l={author_id:x.value,issue_id:k.value})=>{C.open(F,{data:l,onClose:()=>g("refresh"),props:{modal:!0}})},D=R(()=>G(()=>import("./AppOpinionsCsvImport-rRv-aGbY.js"),__vite__mapDeps([11,1,2,8,5,12,4,10,9]))),H=()=>{C.open(D,{data:{personId:x.value,issueId:k.value},onClose:()=>g("refresh"),props:{modal:!0}})},T=l=>`${l.firstname} ${l.lastname}`,U=Y(()=>w.value.map(l=>({...l,author:{...l.author,name:T(l.author)}}))),$=_(),i=_(N.value),M=[{field:"author.name",label:"Auteur"},{field:"issue.title",label:"Thème"}];return(l,o)=>{var v;return n(),p("div",Z,[a("div",P,[e(f)?(n(),h(X,{key:0})):((v=e(w))==null?void 0:v.length)>0?(n(),p("div",ee,[s(e(Q),{class:"mb-4"},O({start:d(()=>[a("div",te,[s(e(c),{label:"Ajouter une opinion",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:o[0]||(o[0]=t=>b())}),s(e(c),{label:"Import un CSV",icon:"pi pi-file-import",class:"p-button-primary mr-2",onClick:o[1]||(o[1]=t=>H())}),s(e(c),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:o[2]||(o[2]=t=>E()),disabled:!r.value||!r.value.length,loading:e(f)},null,8,["disabled","loading"])])]),_:2},[e(u)?{name:"end",fn:d(()=>[a("div",oe,[s(e(K),{options:M,modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=t=>i.value=t),optionLabel:"label",optionValue:"field"},null,8,["modelValue"]),se])]),key:"0"}:void 0]),1024),(n(),h(e(W),{key:i.value,value:U.value,tableStyle:"min-width: 50rem",selection:r.value,"onUpdate:selection":o[4]||(o[4]=t=>r.value=t),expandedRowGroups:$.value,"onUpdate:expandedRowGroups":o[5]||(o[5]=t=>$.value=t),expandableRowGroups:e(u),rowGroupMode:e(u)?"subheader":null,groupRowsBy:e(u)?i.value:null,sortMode:"single",sortField:i.value,sortOrder:1},O({header:d(()=>[ae]),default:d(()=>[s(e(m),{selectionMode:"multiple",headerStyle:"width: 3rem"}),s(e(m),{headerStyle:"width: 60px"},{body:d(({data:t})=>[s(e(c),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:ue=>b(t)},null,8,["onClick"])]),_:1}),s(e(m),{field:"author.name",header:"Auteur"}),s(e(m),{field:"issue.title",header:"Sujet"}),s(e(m),{field:"summary",header:"Résumé"})]),_:2},[e(u)?{name:"groupheader",fn:d(t=>[i.value=="author.name"?(n(),p(A,{key:0},[t.data.author.photo?(n(),h(e(V),{key:0,class:"contained-image ml-2 vertical-align-middle",image:t.data.author.photo,width:"32",shape:"circle"},null,8,["image"])):y("",!0),a("span",le,I(t.data.author.name),1)],64)):i.value=="issue.title"?(n(),p(A,{key:1},[t.data.issue.photo?(n(),h(e(V),{key:0,class:"contained-image ml-2 vertical-align-middle",image:t.data.issue.photo,width:"32",shape:"circle"},null,8,["image"])):y("",!0),a("span",ne,I(t.data.issue.title),1)],64)):y("",!0)]),key:"0"}:void 0]),1032,["value","selection","expandedRowGroups","expandableRowGroups","rowGroupMode","groupRowsBy","sortField"]))])):(n(),p("div",ie,[de,a("div",re,[s(e(c),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:o[6]||(o[6]=t=>b())},{default:d(()=>[z("Ajouter")]),_:1})])]))])])}}};export{ve as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpinionsUpsertForm-sfdbk9a_.js","assets/index-tVf0fXHj.js","assets/index-D9x--RlZ.css","assets/index.esm--oFn3BQH.js","assets/message.esm-SFT11qH8.js","assets/index.esm-obJRb3gY.js","assets/textarea.esm-7xFWnX-o.js","assets/editor.esm-egDzfGBy.js","assets/AppTableSkeleton-TCHIcvRI.js","assets/persons-ouAhB9tu.js","assets/issues-yzknzLYM.js","assets/AppOpinionsCsvImport-rRv-aGbY.js","assets/fileupload.esm-xqW0IPZv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
