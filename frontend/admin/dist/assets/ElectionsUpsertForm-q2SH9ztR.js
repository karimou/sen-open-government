import{c as M,b as R,a as V,u as q,s as D}from"./message.esm-7AaCCNeN.js";import{b as A,s as N}from"./index.esm-vGdYQZef.js";import{s as j}from"./textarea.esm-Zp6g0_lQ.js";import{s as $}from"./radiobutton.esm-at_Z4IK4.js";import{r as b,a0 as L,a as P,A as k,o as h,c as x,b as a,t as F,f as d,e as l,Y as n,F as T,v as z,k as C,w as I,g as Y}from"./index-Tc2rU4CK.js";import{f as G}from"./format-39s6QTMr.js";const H={style:{width:"450px"}},J=["initial-values"],K={class:"field"},O={class:"field-radiobutton"},Q=a("label",{for:"type1"},"Présidentielle",-1),W={class:"field-radiobutton"},X=a("label",{for:"type2"},"Législatives",-1),Z={class:"field"},ee=a("label",{for:"title"},"Titre",-1),te={class:"field"},le=a("label",{for:"date"},"Date",-1),ae={class:"field"},se=a("label",{for:"description"},"Description",-1),_e={__name:"ElectionsUpsertForm",setup(ie){const S=M({date:R().required(),title:V().required(),type:V().required(),description:V()}),{handleSubmit:U,errors:E,defineField:r,setFieldValue:m}=q({validationSchema:S}),[f,oe]=r("date"),[v,de]=r("title"),[i,ne]=r("type"),[_,re]=r("description"),u=b(null),B=b({}),s=L("dialogRef");P(()=>{var o,e,t,p,w;(o=s.value.data)!=null&&o.date&&m("date",G((e=s.value.data)==null?void 0:e.date,"yyyy-MM-dd")),m("type",((t=s.value.data)==null?void 0:t.type)=="click"?"presidential":(p=s.value.data)==null?void 0:p.type),["title","description"].forEach(y=>{s.value.data[y]&&m(y,s.value.data[y])}),u.value=(w=s.value.data)==null?void 0:w.id});const c=b(!1),g=U(o=>{c.value=!0,u.value?k.elections.updateElection({...o,id:u.value}).then(e=>{s.value.close()}).finally(()=>c.value=!1):k.elections.addElection(o).then(e=>{s.value.close()}).finally(()=>c.value=!1)});return(o,e)=>(h(),x("div",H,[a("h5",null,F(u.value?"Modifier":"Ajouter")+" une élection",1),a("form",{onSubmit:e[5]||(e[5]=(...t)=>l(g)&&l(g)(...t)),"initial-values":B.value.value},[a("div",K,[a("div",O,[d(l($),{id:"type1",name:"type",modelValue:l(i),"onUpdate:modelValue":e[0]||(e[0]=t=>n(i)?i.value=t:null),value:"presidential"},null,8,["modelValue"]),Q]),a("div",W,[d(l($),{id:"type2",name:"type",modelValue:l(i),"onUpdate:modelValue":e[1]||(e[1]=t=>n(i)?i.value=t:null),value:"parliament"},null,8,["modelValue"]),X])]),a("div",Z,[ee,d(l(A),{id:"title",type:"text",modelValue:l(v),"onUpdate:modelValue":e[2]||(e[2]=t=>n(v)?v.value=t:null),class:"w-full"},null,8,["modelValue"])]),a("div",te,[le,d(l(A),{id:"date",type:"date",modelValue:l(f),"onUpdate:modelValue":e[3]||(e[3]=t=>n(f)?f.value=t:null),class:"w-full"},null,8,["modelValue"])]),a("div",ae,[se,d(l(j),{id:"description",modelValue:l(_),"onUpdate:modelValue":e[4]||(e[4]=t=>n(_)?_.value=t:null),class:"w-full",autoResize:!0},null,8,["modelValue"])]),d(l(N),{type:"submit",label:"Soumettre",class:"w-full",loading:c.value},null,8,["loading"])],40,J),(h(!0),x(T,null,z(l(E),(t,p)=>(h(),C(l(D),{severity:"error",key:p},{default:I(()=>[Y(F(t),1)]),_:2},1024))),128))]))}};export{_e as default};
