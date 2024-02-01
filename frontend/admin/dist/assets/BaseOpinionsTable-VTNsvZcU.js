import{$ as Y,r as y,u as z,Y as J,a as l,c as m,b as n,f as e,e as _,g as a,H as R,w as i,F as V,j as w,E as x,h as K,A as Q,i as k,_ as C}from"./index-F1RqSK8B.js";import{c as W,s as X,a as c,b as Z,_ as ee}from"./AppTableSkeleton-K44dyUfr.js";import{s as u}from"./index.esm-W4H87m11.js";import{s as G}from"./avatar.esm-J09aueqf.js";const oe={class:"grid"},te={class:"col-12"},se={key:1,class:"card"},ae={class:"my-2"},ne={class:"p-float-label"},le=n("label",null,"Grouper par:",-1),ie=n("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[n("h5",{class:"m-0"},"Opinions")],-1),re={class:"vertical-align-middle ml-2 font-bold line-height-3"},de={class:"vertical-align-middle ml-2 font-bold line-height-3"},ue={class:"truncate l3"},pe={key:2,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},me=n("div",null,[n("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune opinion"),n("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première opinion à la base de données")],-1),ce={class:"mt-4 mr-auto md:mt-0 md:mr-0"},be={__name:"BaseOpinionsTable",props:{opinions:Array,personId:Number,issueId:Number,defaultGroupingHeader:{type:String,default:"author.name"},group:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["refresh"],setup(S,{emit:B}){const E=S,{opinions:O,group:p,personId:$,issueId:A,loading:f,defaultGroupingHeader:j}=Y(E),v=B,d=y(null),D=()=>{var t;let s=(t=d.value)==null?void 0:t.map(h=>h.id);f.value=!0,Q.opinions.deleteOpinions(s).then(()=>{v("refresh"),d.value=null}).finally(()=>f.value=!1)},b=z(),N=k(()=>C(()=>import("./OpinionsUpsertForm-L4StIFVr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),g=(s={author_id:$.value,issue_id:A.value})=>{b.open(N,{data:s,onClose:()=>v("refresh"),props:{modal:!0}})},T=k(()=>C(()=>import("./AppOpinionsCsvImport-jyI-1FxL.js"),__vite__mapDeps([11,1,2,8,5,12,4,10,9]))),F=()=>{b.open(T,{data:{personId:$.value,issueId:A.value},onClose:()=>v("refresh"),props:{modal:!0}})},H=k(()=>C(()=>import("./BaseOpinionsTableProposals-OblXVUOh.js"),__vite__mapDeps([13,1,2,8,5]))),U=s=>{b.open(H,{data:s,onClose:()=>v("refresh"),props:{modal:!0}})},L=s=>`${s.firstname} ${s.lastname}`,M=J(()=>O.value.map(s=>({...s,author:{...s.author,name:L(s.author)}}))),I=y(),r=y(j.value),P=[{field:"author.name",label:"Auteur"},{field:"issue.title",label:"Thème"}];return(s,t)=>{var h;return l(),m("div",oe,[n("div",te,[e(f)?(l(),_(ee,{key:0})):((h=e(O))==null?void 0:h.length)>0?(l(),m("div",se,[a(e(X),{class:"mb-4"},R({start:i(()=>[n("div",ae,[a(e(u),{label:"Ajouter une opinion",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:t[0]||(t[0]=o=>g())}),a(e(u),{label:"Import un CSV",icon:"pi pi-file-import",class:"p-button-primary mr-2",onClick:t[1]||(t[1]=o=>F())}),a(e(u),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:t[2]||(t[2]=o=>D()),disabled:!d.value||!d.value.length,loading:e(f)},null,8,["disabled","loading"])])]),_:2},[e(p)?{name:"end",fn:i(()=>[n("div",ne,[a(e(W),{options:P,modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value=o),optionLabel:"label",optionValue:"field"},null,8,["modelValue"]),le])]),key:"0"}:void 0]),1024),(l(),_(e(Z),{key:r.value,value:M.value,tableStyle:"min-width: 50rem",selection:d.value,"onUpdate:selection":t[4]||(t[4]=o=>d.value=o),expandedRowGroups:I.value,"onUpdate:expandedRowGroups":t[5]||(t[5]=o=>I.value=o),expandableRowGroups:e(p),rowGroupMode:e(p)?"subheader":null,groupRowsBy:e(p)?r.value:null,sortMode:"single",sortField:r.value,sortOrder:1},R({header:i(()=>[ie]),default:i(()=>[a(e(c),{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(e(c),{headerStyle:"width: 120px"},{body:i(({data:o})=>[a(e(u),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:q=>g(o)},null,8,["onClick"]),a(e(u),{class:"p-button-text p-button-rounded",icon:"pi pi-user-edit",onClick:q=>U(o)},null,8,["onClick"])]),_:1}),a(e(c),{field:"author.name",header:"Auteur"}),a(e(c),{field:"issue.title",header:"Sujet"}),a(e(c),{field:"summary",header:"Résumé",headerStyle:"width: 500px"},{body:i(({data:o})=>[n("p",ue,x(o.summary),1)]),_:1})]),_:2},[e(p)?{name:"groupheader",fn:i(o=>[r.value=="author.name"?(l(),m(V,{key:0},[o.data.author.photo?(l(),_(e(G),{key:0,class:"contained-image ml-2 vertical-align-middle",image:o.data.author.photo,width:"32",shape:"circle"},null,8,["image"])):w("",!0),n("span",re,x(o.data.author.name),1)],64)):r.value=="issue.title"?(l(),m(V,{key:1},[o.data.issue.photo?(l(),_(e(G),{key:0,class:"contained-image ml-2 vertical-align-middle",image:o.data.issue.photo,width:"32",shape:"circle"},null,8,["image"])):w("",!0),n("span",de,x(o.data.issue.title),1)],64)):w("",!0)]),key:"0"}:void 0]),1032,["value","selection","expandedRowGroups","expandableRowGroups","rowGroupMode","groupRowsBy","sortField"]))])):(l(),m("div",pe,[me,n("div",ce,[a(e(u),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:t[6]||(t[6]=o=>g())},{default:i(()=>[K("Ajouter")]),_:1})])]))])])}}};export{be as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpinionsUpsertForm-L4StIFVr.js","assets/index-F1RqSK8B.js","assets/index-ZWerLMmy.css","assets/index.esm-7vlYWs5j.js","assets/message.esm-FZNGV9Fe.js","assets/index.esm-W4H87m11.js","assets/textarea.esm-FGC31d1c.js","assets/editor.esm-kq0G3DuG.js","assets/AppTableSkeleton-K44dyUfr.js","assets/persons-XnCOLqXO.js","assets/issues-ZHLGjH3F.js","assets/AppOpinionsCsvImport-jyI-1FxL.js","assets/fileupload.esm-_Xhm3CsQ.js","assets/BaseOpinionsTableProposals-OblXVUOh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}