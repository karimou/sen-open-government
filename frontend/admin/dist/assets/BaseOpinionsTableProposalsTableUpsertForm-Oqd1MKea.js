import{c as T,d as U,a as j,u as q}from"./index.esm-7vlYWs5j.js";import{s as C}from"./textarea.esm-FGC31d1c.js";import{b as E,s as M}from"./index.esm-W4H87m11.js";import{s as z}from"./message.esm-FZNGV9Fe.js";import{r as u,X as D,o as L,A as x,a as m,c as A,b as t,E as B,g as p,f as o,V as k,F as O,n as X,e as G,w as H,h as J}from"./index-F1RqSK8B.js";const K={style:{width:"650px"}},Q=["initial-values"],W={class:"formgrid grid"},Y={class:"field col-6"},Z=t("label",{for:"number"},"Number",-1),ee={class:"formgrid grid"},ae={class:"field col"},oe=t("label",{for:"content"},"Contenu",-1),ce={__name:"BaseOpinionsTableProposalsTableUpsertForm",setup(se){const N=T({number:U().required(),content:j().required()}),{handleSubmit:P,errors:R,defineField:f,setFieldValue:v}=q({validationSchema:N}),[d,te]=f("content"),[c,le]=f("number"),n=u(null),b=u(null),I=u({}),s=D("dialogRef");L(()=>{var l,e,a,r,g,h,V,y,w,F,S,$;(e=(l=s.value.data)==null?void 0:l.proposal)!=null&&e.content&&v("content",(r=(a=s.value.data)==null?void 0:a.proposal)==null?void 0:r.content),(h=(g=s.value.data)==null?void 0:g.proposal)!=null&&h.number&&v("number",(y=(V=s.value.data)==null?void 0:V.proposal)==null?void 0:y.number),n.value=(F=(w=s.value.data)==null?void 0:w.proposal)==null?void 0:F.id,b.value=($=(S=s.value.data)==null?void 0:S.opinion)==null?void 0:$.id});const i=u(!1),_=P(l=>{i.value=!0,n.value?x.opinions.updateProposal({...l,id:n.value}).then(e=>{s.value.close("success")}).finally(()=>i.value=!1):x.opinions.addProposal({opinionId:b.value,...l}).then(e=>{s.value.close("success")}).finally(()=>i.value=!1)});return(l,e)=>(m(),A("div",K,[t("h5",null,B(n.value?"Modifier":"Ajouter")+" une proposition",1),t("form",{onSubmit:e[2]||(e[2]=(...a)=>o(_)&&o(_)(...a)),"initial-values":I.value.value},[t("div",W,[t("div",Y,[Z,p(o(E),{id:"number",type:"number",modelValue:o(c),"onUpdate:modelValue":e[0]||(e[0]=a=>k(c)?c.value=a:null),class:"w-full"},null,8,["modelValue"])])]),t("div",ee,[t("div",ae,[oe,p(o(C),{id:"content",modelValue:o(d),"onUpdate:modelValue":e[1]||(e[1]=a=>k(d)?d.value=a:null),class:"w-full",autoResize:!0},null,8,["modelValue"])])]),p(o(M),{type:"submit",label:"Soumettre",class:"w-full",loading:i.value},null,8,["loading"])],40,Q),(m(!0),A(O,null,X(o(R),(a,r)=>(m(),G(o(z),{severity:"error",key:r},{default:H(()=>[J(B(a),1)]),_:2},1024))),128))]))}};export{ce as default};
