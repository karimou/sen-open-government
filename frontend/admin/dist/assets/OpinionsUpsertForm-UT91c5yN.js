import{r as k,X as M,o as z,$ as X,A as $,u as G,a,c as r,b as l,E as i,f as s,e as c,w as A,V as h,g as m,F as H,n as J,h as K,i as w,_ as U}from"./index-RkPwqazj.js";import{c as Q,d as x,a as E,u as W,s as Y}from"./message.esm-BdvQJFbE.js";import{s as Z}from"./textarea.esm-1f0UGk8Z.js";import{s as C}from"./index.esm-DQCixbFE.js";import{s as ee}from"./editor.esm-ZHNnz1MT.js";import{d as v}from"./AppTableSkeleton-jBcIKBPr.js";import{u as se}from"./persons-PfvGaQks.js";import{u as oe}from"./issues-0it_FT96.js";const te={style:{width:"650px"}},ae=["initial-values"],le={class:"formgrid grid"},ie={class:"field col-6"},ne=l("label",{for:"title"},"Auteur",-1),re={key:0},ue={key:1},de={key:0},ce={key:1},me={class:"field col-6"},pe=l("label",{for:"title"},"Thème",-1),_e={class:"field"},fe=l("label",{for:"summary"},"Résumé",-1),he={class:"field"},ve=l("label",{for:"content"},"Contenu détaillé",-1),Ee={__name:"OpinionsUpsertForm",setup(ye){const I=Q({author_id:x().required(),issue_id:x().required(),summary:E().required(),content:E()}),{handleSubmit:R,errors:L,defineField:p,setFieldValue:O}=W({validationSchema:I}),[y,Ve]=p("author_id"),[V,ge]=p("issue_id"),[g,be]=p("summary"),[b,ke]=p("content"),_=k(null),n=se(),u=oe(),j=k({}),d=M("dialogRef");z(()=>{var t;["author_id","issue_id","summary","content"].forEach(e=>{d.value.data[e]&&O(e,d.value.data[e])}),_.value=(t=d.value.data)==null?void 0:t.id,n.persons||n.refreshPersons(),u.issues||u.refreshIssues()});const B=X(()=>{let t={};return n.persons.forEach(e=>t[e.id]=`${e.firstname} ${e.lastname}`),t}),f=k(!1),S=R(t=>{f.value=!0,_.value?$.opinions.updateOpinion({...t,id:_.value}).then(e=>{d.value.close("success")}).finally(()=>f.value=!1):$.opinions.addOpinion(t).then(e=>{d.value.close("success")}).finally(()=>f.value=!1)}),F=G(),D=w(()=>U(()=>import("./PersonsUpsertForm-B4axXYKm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),N=(t={})=>{F.open(D,{data:t,onClose:e=>{(e==null?void 0:e.data)=="success"&&n.refreshPersons()},props:{modal:!0}})},P=w(()=>U(()=>import("./IssuesUpsertForm-qcGaN4pF.js"),__vite__mapDeps([9,1,2,3,4,5,6]))),T=(t={})=>{F.open(P,{data:t,onClose:e=>{(e==null?void 0:e.data)=="success"&&u.refreshIssues()},props:{modal:!0}})};return(t,e)=>(a(),r("div",te,[l("h5",null,i(_.value?"Modifier":"Ajouter")+" une opinion",1),l("form",{onSubmit:e[4]||(e[4]=(...o)=>s(S)&&s(S)(...o)),"initial-values":j.value.value},[l("div",le,[l("div",ie,[ne,s(n).persons?(a(),c(s(v),{key:1,modelValue:s(y),"onUpdate:modelValue":e[0]||(e[0]=o=>h(y)?y.value=o:null),options:s(n).persons,optionLabel:"firstname",optionValue:"id",placeholder:"Choisir une personne",class:"w-full",filter:""},{value:A(o=>[o.value?(a(),r("span",re,i(B.value[o.value]),1)):(a(),r("span",ue,i(o.placeholder),1))]),option:A(o=>[o.option?(a(),r("span",de,i(o.option.firstname)+" "+i(o.option.lastname),1)):(a(),r("span",ce,i(o.placeholder),1))]),_:1},8,["modelValue","options"])):(a(),c(s(v),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"})),m(s(C),{label:"Ajouter une personne",icon:"pi pi-plus",text:"",onClick:N})]),l("div",me,[pe,s(u).issues?(a(),c(s(v),{key:1,modelValue:s(V),"onUpdate:modelValue":e[1]||(e[1]=o=>h(V)?V.value=o:null),options:s(u).issues,optionLabel:"title",optionValue:"id",placeholder:"Choisir un thème",class:"w-full",filter:""},null,8,["modelValue","options"])):(a(),c(s(v),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"})),m(s(C),{label:"Ajouter un thème",icon:"pi pi-plus",text:"",onClick:T})])]),l("div",_e,[fe,m(s(Z),{id:"summary",modelValue:s(g),"onUpdate:modelValue":e[2]||(e[2]=o=>h(g)?g.value=o:null),class:"w-full",autoResize:!0},null,8,["modelValue"])]),l("div",he,[ve,m(s(ee),{modelValue:s(b),"onUpdate:modelValue":e[3]||(e[3]=o=>h(b)?b.value=o:null),id:"content",editorStyle:"height: 320px"},null,8,["modelValue"])]),m(s(C),{type:"submit",label:"Soumettre",class:"w-full",loading:f.value},null,8,["loading"])],40,ae),(a(!0),r(H,null,J(s(L),(o,q)=>(a(),c(s(Y),{severity:"error",key:q},{default:A(()=>[K(i(o),1)]),_:2},1024))),128))]))}};export{Ee as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonsUpsertForm-B4axXYKm.js","assets/message.esm-BdvQJFbE.js","assets/index-RkPwqazj.js","assets/index-tbN9M-MT.css","assets/index.esm-DQCixbFE.js","assets/textarea.esm-1f0UGk8Z.js","assets/editor.esm-ZHNnz1MT.js","assets/AppTableSkeleton-jBcIKBPr.js","assets/format-39s6QTMr.js","assets/IssuesUpsertForm-qcGaN4pF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
