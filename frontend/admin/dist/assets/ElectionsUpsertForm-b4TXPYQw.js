import{c as M,b as R,a as V,u as q,s as D}from"./message.esm-DA8zJJ8T.js";import{b as A,s as N}from"./index.esm-7P6y4mBq.js";import{s as j}from"./textarea.esm-Zu41E-81.js";import{s as $}from"./radiobutton.esm-CpZ8k0VB.js";import{r as b,Y as L,a as P,A as x,o as h,c as F,b as a,t as S,g as d,f as l,W as n,F as T,p as z,e as C,w as I,h as W}from"./index-9WfbBEsR.js";import{f as Y}from"./format-39s6QTMr.js";const G={style:{width:"450px"}},H=["initial-values"],J={class:"field"},K={class:"field-radiobutton"},O=a("label",{for:"type1"},"Présidentielle",-1),Q={class:"field-radiobutton"},X=a("label",{for:"type2"},"Législatives",-1),Z={class:"field"},ee=a("label",{for:"title"},"Titre",-1),te={class:"field"},le=a("label",{for:"date"},"Date",-1),ae={class:"field"},se=a("label",{for:"description"},"Description",-1),_e={__name:"ElectionsUpsertForm",setup(ie){const U=M({date:R().required(),title:V().required(),type:V().required(),description:V()}),{handleSubmit:k,errors:E,defineField:r,setFieldValue:m}=q({validationSchema:U}),[f,oe]=r("date"),[v,de]=r("title"),[i,ne]=r("type"),[_,re]=r("description"),u=b(null),B=b({}),s=L("dialogRef");P(()=>{var o,e,t,p,w;(o=s.value.data)!=null&&o.date&&m("date",Y((e=s.value.data)==null?void 0:e.date,"yyyy-MM-dd")),m("type",((t=s.value.data)==null?void 0:t.type)=="click"?"presidential":(p=s.value.data)==null?void 0:p.type),["title","description"].forEach(y=>{s.value.data[y]&&m(y,s.value.data[y])}),u.value=(w=s.value.data)==null?void 0:w.id});const c=b(!1),g=k(o=>{c.value=!0,u.value?x.elections.updateElection({...o,id:u.value}).then(e=>{s.value.close()}).finally(()=>c.value=!1):x.elections.addElection(o).then(e=>{s.value.close()}).finally(()=>c.value=!1)});return(o,e)=>(h(),F("div",G,[a("h5",null,S(u.value?"Modifier":"Ajouter")+" une élection",1),a("form",{onSubmit:e[5]||(e[5]=(...t)=>l(g)&&l(g)(...t)),"initial-values":B.value.value},[a("div",J,[a("div",K,[d(l($),{id:"type1",name:"type",modelValue:l(i),"onUpdate:modelValue":e[0]||(e[0]=t=>n(i)?i.value=t:null),value:"presidential"},null,8,["modelValue"]),O]),a("div",Q,[d(l($),{id:"type2",name:"type",modelValue:l(i),"onUpdate:modelValue":e[1]||(e[1]=t=>n(i)?i.value=t:null),value:"parliament"},null,8,["modelValue"]),X])]),a("div",Z,[ee,d(l(A),{id:"title",type:"text",modelValue:l(v),"onUpdate:modelValue":e[2]||(e[2]=t=>n(v)?v.value=t:null),class:"w-full"},null,8,["modelValue"])]),a("div",te,[le,d(l(A),{id:"date",type:"date",modelValue:l(f),"onUpdate:modelValue":e[3]||(e[3]=t=>n(f)?f.value=t:null),class:"w-full"},null,8,["modelValue"])]),a("div",ae,[se,d(l(j),{id:"description",modelValue:l(_),"onUpdate:modelValue":e[4]||(e[4]=t=>n(_)?_.value=t:null),class:"w-full",autoResize:!0},null,8,["modelValue"])]),d(l(N),{type:"submit",label:"Soumettre",class:"w-full",loading:c.value},null,8,["loading"])],40,H),(h(!0),F(T,null,z(l(E),(t,p)=>(h(),C(l(D),{severity:"error",key:p},{default:I(()=>[W(S(t),1)]),_:2},1024))),128))]))}};export{_e as default};