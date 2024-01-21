import{c as k,a as f,u as $,s as B}from"./message.esm-CLFrG8pF.js";import{b as V,s as N}from"./index.esm-vgHkgeCn.js";import{s as E}from"./inputmask.esm-wiw_7qCu.js";import{r as p,Y as R,a as j,A as b,o as v,c as y,b as s,t as g,g as r,f as l,W as _,F as q,p as M,e as C,w as D,h as I}from"./index-T5lfGDRy.js";const L={style:{width:"450px"}},P=["initial-values"],T={class:"field"},W=s("label",{for:"username"},"Nom d'utilisateur",-1),Y={class:"field"},z=s("label",{for:"email"},"Email",-1),G={class:"field"},H=s("label",{for:"email"},"phone",-1),ae={__name:"UsersUpsertForm",setup(J){const w=k({username:f().required(),email:f().email().required(),phone:f()}),{handleSubmit:U,errors:x,defineField:n,setFieldValue:A}=$({validationSchema:w}),[d,K]=n("username"),[m,O]=n("email"),[c,Q]=n("phone"),u=p(null),F=p({}),o=R("dialogRef");j(()=>{var t;["username","email","phone"].forEach(e=>{o.value.data[e]&&A(e,o.value.data[e])}),u.value=(t=o.value.data)==null?void 0:t.id});const i=p(!1),h=U(t=>{i.value=!0,u.value?b.users.updateUser({...t,id:u.value}).then(e=>{o.value.close("success")}).finally(()=>i.value=!1):b.users.addUser(t).then(e=>{o.value.close("success")}).finally(()=>i.value=!1)});return(t,e)=>(v(),y("div",L,[s("h5",null,g(u.value?"Modifier":"Ajouter")+" un utilisateur",1),s("form",{onSubmit:e[3]||(e[3]=(...a)=>l(h)&&l(h)(...a)),"initial-values":F.value.value},[s("div",T,[W,r(l(V),{id:"username",type:"text",modelValue:l(d),"onUpdate:modelValue":e[0]||(e[0]=a=>_(d)?d.value=a:null),class:"w-full"},null,8,["modelValue"])]),s("div",Y,[z,r(l(V),{id:"email",type:"email",modelValue:l(m),"onUpdate:modelValue":e[1]||(e[1]=a=>_(m)?m.value=a:null),class:"w-full"},null,8,["modelValue"])]),s("div",G,[H,r(l(E),{id:"phone",modelValue:l(c),"onUpdate:modelValue":e[2]||(e[2]=a=>_(c)?c.value=a:null),class:"w-full",mask:"221 99 999 99 99",placeholder:"221 99 999 99 99"},null,8,["modelValue"])]),r(l(N),{type:"submit",label:"Soumettre",class:"w-full",loading:i.value},null,8,["loading"])],40,P),(v(!0),y(q,null,M(l(x),(a,S)=>(v(),C(l(B),{severity:"error",key:S},{default:D(()=>[I(g(a),1)]),_:2},1024))),128))]))}};export{ae as default};