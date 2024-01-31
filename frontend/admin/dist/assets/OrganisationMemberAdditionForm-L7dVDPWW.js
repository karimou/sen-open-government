import{r as k,X as B,o as E,A as L,u as M,a,c as i,b as t,f as e,e as d,w as I,E as r,V,g as b,F as N,n as j,h as D,i as P,_ as q}from"./index-tVf0fXHj.js";import{c as T,d as A,a as X,u as z}from"./index.esm--oFn3BQH.js";import{s as S,b as G}from"./index.esm-obJRb3gY.js";import{c as f}from"./AppTableSkeleton-TCHIcvRI.js";import{s as H}from"./message.esm-SFT11qH8.js";import{u as J}from"./persons-ouAhB9tu.js";import{u as K}from"./OrganisationsView-5uLff-_z.js";const Q={style:{width:"350px"}},W=t("h5",null,"Ajouter un membre",-1),Y=["initial-values"],Z={class:"field"},ee=t("label",{for:"title"},"Membre",-1),oe={key:0},se={key:1},ae={key:0},te={key:1},ne={class:"field"},le=t("label",{for:"title"},"Organisation",-1),ie={class:"field"},re=t("label",{for:"role"},"Role",-1),Ve={__name:"OrganisationMemberAdditionForm",setup(de){const w=T({organisationId:A().required(),personId:A().required(),role:X()}),{handleSubmit:C,errors:F,defineField:_,setFieldValue:g}=z({validationSchema:w}),[u,ue]=_("organisationId"),[c,ce]=_("personId"),[p,pe]=_("role"),l=J(),m=K(),x=k({}),n=B("dialogRef");E(()=>{n.value.data.organisationId&&g("organisationId",n.value.data.organisationId),n.value.data.personId&&g("personId",n.value.data.personId),n.value.data.role&&g("personId",n.value.data.role),l.persons||l.refreshPersons(),m.organisations||m.refreshOrganisations()});const v=k(!1),y=C(h=>{v.value=!0,L.organisations.addOrganisationMember({organisationId:u.value,personId:c.value,role:p.value}).then(s=>{n.value.close("success")}).finally(()=>v.value=!1)}),O=M(),$=P(()=>q(()=>import("./PersonsUpsertForm-oRJc3vSm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),R=(h={})=>{O.open($,{data:h,onClose:s=>{(s==null?void 0:s.data)=="success"&&l.refreshPersons()},props:{modal:!0}})};return(h,s)=>(a(),i("div",Q,[W,t("form",{onSubmit:s[3]||(s[3]=(...o)=>e(y)&&e(y)(...o)),"initial-values":x.value.value},[t("div",Z,[ee,e(l).persons?(a(),d(e(f),{key:1,modelValue:e(c),"onUpdate:modelValue":s[0]||(s[0]=o=>V(c)?c.value=o:null),options:e(l).persons,optionLabel:"firstname",optionValue:"id",placeholder:"Choisir une personne",class:"w-full",filter:""},{value:I(o=>[o.value?(a(),i("span",oe,r(e(l).personsNames[o.value]),1)):(a(),i("span",se,r(o.placeholder),1))]),option:I(o=>[o.option?(a(),i("span",ae,r(o.option.firstname)+" "+r(o.option.lastname),1)):(a(),i("span",te,r(o.placeholder),1))]),_:1},8,["modelValue","options"])):(a(),d(e(f),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"})),b(e(S),{label:"Ajouter une personne",icon:"pi pi-plus",text:"",onClick:R})]),t("div",ne,[le,e(m).organisations?(a(),d(e(f),{key:1,modelValue:e(u),"onUpdate:modelValue":s[1]||(s[1]=o=>V(u)?u.value=o:null),options:e(m).organisations,optionLabel:"name",optionValue:"id",placeholder:"Choisir une organisation",class:"w-full",filter:""},null,8,["modelValue","options"])):(a(),d(e(f),{key:0,loading:"",placeholder:"Chargement en cours...",class:"w-full"}))]),t("div",ie,[re,b(e(G),{id:"role",type:"text",modelValue:e(p),"onUpdate:modelValue":s[2]||(s[2]=o=>V(p)?p.value=o:null),class:"w-full"},null,8,["modelValue"])]),b(e(S),{type:"submit",label:"Soumettre",class:"w-full",loading:v.value},null,8,["loading"])],40,Y),(a(!0),i(N,null,j(e(F),(o,U)=>(a(),d(e(H),{severity:"error",key:U},{default:I(()=>[D(r(o),1)]),_:2},1024))),128))]))}};export{Ve as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonsUpsertForm-oRJc3vSm.js","assets/index.esm--oFn3BQH.js","assets/index-tVf0fXHj.js","assets/index-D9x--RlZ.css","assets/message.esm-SFT11qH8.js","assets/index.esm-obJRb3gY.js","assets/textarea.esm-7xFWnX-o.js","assets/editor.esm-egDzfGBy.js","assets/AppPicturesSelector-HFjsQp0J.js","assets/AppTableSkeleton-TCHIcvRI.js","assets/fileupload.esm-xqW0IPZv.js","assets/index.esm-Xn0UiDJQ.js","assets/format-39s6QTMr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
