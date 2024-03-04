import{r as g,Y as N,o as R,A as U,u as $,a as t,c as n,b as i,f as e,e as d,w as h,k as a,W as k,g as V,F as j,p as D,h as P,i as q,_ as T}from"./index-jfYll-nw.js";import{c as M,d as b,u as O}from"./index.esm-P-gXdjAE.js";import{s as C}from"./index.esm-vgsyuL-8.js";import{c as m}from"./AppTableSkeleton-fANpGBpA.js";import{s as W}from"./message.esm-er91D30t.js";import{u as Y}from"./persons-c6UgsBtu.js";import{u as z}from"./ElectionsView-FHRXxROC.js";const G={style:{width:"350px"}},H=i("h5",null,"Ajouter un candidat",-1),J=["initial-values"],K={class:"field"},Q=i("label",{for:"title"},"Candidat",-1),X={key:0},Z={key:1},ee={key:0},oe={key:1},se={class:"field"},te=i("label",{for:"title"},"Élection",-1),fe={__name:"ElectionCandidateAdditionForm",setup(le){const S=M({electionId:b().required(),personId:b().required()}),{handleSubmit:A,errors:w,defineField:v,setFieldValue:I}=O({validationSchema:S}),[u,ne]=v("electionId"),[c,ae]=v("personId"),l=Y(),p=z(),F=g({}),r=N("dialogRef");R(()=>{r.value.data.electionId&&I("electionId",r.value.data.electionId),r.value.data.personId&&I("personId",r.value.data.personId),l.persons||l.refreshPersons(),p.elections||p.refreshElections()});const f=g(!1),y=A(_=>{f.value=!0,U.elections.addElectionCandidate({electionId:u.value,personId:c.value}).then(s=>{r.value.close("success")}).finally(()=>f.value=!1)}),E=$(),x=q(()=>T(()=>import("./PersonsUpsertForm-c998OJmC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),B=(_={})=>{E.open(x,{data:_,onClose:s=>{(s==null?void 0:s.data)=="success"&&l.refreshPersons()},props:{modal:!0}})};return(_,s)=>(t(),n("div",G,[H,i("form",{onSubmit:s[2]||(s[2]=(...o)=>e(y)&&e(y)(...o)),"initial-values":F.value.value},[i("div",K,[Q,e(l).persons?(t(),d(e(m),{key:1,modelValue:e(c),"onUpdate:modelValue":s[0]||(s[0]=o=>k(c)?c.value=o:null),options:e(l).persons,optionLabel:"firstname",optionValue:"id",placeholder:"Choisir une personne",class:"w-full",filter:""},{value:h(o=>[o.value?(t(),n("span",X,a(e(l).personsNames[o.value]),1)):(t(),n("span",Z,a(o.placeholder),1))]),option:h(o=>[o.option?(t(),n("span",ee,a(o.option.firstname)+" "+a(o.option.lastname),1)):(t(),n("span",oe,a(o.placeholder),1))]),_:1},8,["modelValue","options"])):(t(),d(e(m),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"})),V(e(C),{label:"Ajouter une personne",icon:"pi pi-plus",text:"",onClick:B})]),i("div",se,[te,e(p).elections?(t(),d(e(m),{key:1,modelValue:e(u),"onUpdate:modelValue":s[1]||(s[1]=o=>k(u)?u.value=o:null),options:e(p).elections,optionLabel:"title",optionValue:"id",placeholder:"Choisir une élection",class:"w-full",filter:""},null,8,["modelValue","options"])):(t(),d(e(m),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"}))]),V(e(C),{type:"submit",label:"Soumettre",class:"w-full",loading:f.value},null,8,["loading"])],40,J),(t(!0),n(j,null,D(e(w),(o,L)=>(t(),d(e(W),{severity:"error",key:L},{default:h(()=>[P(a(o),1)]),_:2},1024))),128))]))}};export{fe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonsUpsertForm-c998OJmC.js","assets/index.esm-P-gXdjAE.js","assets/index-jfYll-nw.js","assets/index-ZWerLMmy.css","assets/message.esm-er91D30t.js","assets/index.esm-vgsyuL-8.js","assets/textarea.esm-vCzr1SR7.js","assets/editor.esm-y9cAV494.js","assets/AppPicturesSelector-rmKZ8n4L.js","assets/AppTableSkeleton-fANpGBpA.js","assets/fileupload.esm-a_DNqsbQ.js","assets/index.esm-N1Oc4E2N.js","assets/format-39s6QTMr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}