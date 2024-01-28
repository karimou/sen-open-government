import{t as M,o as n,c as u,f as s,g as v,a as d,i as P,q as T,d as p,u as z,s as F,v as H,w as E,p as j,b as i,l as V,j as c,F as L,e as U,h as q}from"./index-WZjibKqr.js";import{b as f,c as D}from"./panel.esm-DQwy4lX6.js";import{s as G}from"./sidebar.esm-vLT-vWga.js";import{a as J,_ as K}from"./AppIssuesSelector-Ozv1Goqc.js";import{_ as Q}from"./_plugin-vue_export-helper-x3n3nnut.js";const W={class:"flex justify-content-center"},X={__name:"AppSocialLinks",props:{website:{type:String},facebook:{type:String},twitter:{type:String},instagram:{type:String}},setup(w){const _=w,{website:b,facebook:g,twitter:a,instagram:t}=M(_);return(m,r)=>(n(),u("div",W,[s(b)?(n(),v(s(f),{key:0,icon:"pi pi-link",text:""})):d("",!0),s(g)?(n(),v(s(f),{key:1,icon:"pi pi-facebook",text:""})):d("",!0),s(a)?(n(),v(s(f),{key:2,icon:"pi pi-twitter",text:""})):d("",!0),s(t)?(n(),v(s(f),{key:3,icon:"pi pi-instagram",text:""})):d("",!0)]))}},Y={class:"pt-2 w-full"},Z={class:"candidate-name-zone justify-content-center"},ee=["src"],te={class:"text-4xl"},se={key:1,class:"font-bold ml-4 font-light uppercase text-sm",style:{color:"#797979"}},oe={class:"flex flex-wrap justify-content-center mb-6"},ie={style:{"z-index":"1",position:"relative"}},ne={class:"grid"},ae={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col"},re=["innerHTML"],le={__name:"ElectionCandidate",setup(w){const _=P("$groupArrayBy"),b=T(),g=p(null),a=p(null),t=p(null),m=p(!1),r=z(),y=o=>{g.value=Number(o.electionId),a.value=Number(o.candidateId)};F(()=>{y(b.params),window.scroll({top:0,behavior:"smooth"})}),H((o,e)=>{y(o.params)}),E(a,()=>{t.value=r.getCandidate(a.value)});const O=j(()=>{if(!r.currentElection.opinions)return[];let o=r.currentElection.opinions.filter(e=>e.author_id==a.value);return _(o,e=>e.issue_id)}),h=j(()=>{if(t.value)return`${t.value.firstname} ${t.value.lastname}`});E(h,o=>{document.title=document.title+" - "+o});const k=p({}),R=o=>{var e;(e=k.value[o])==null||e.scrollIntoView({behavior:"smooth"})};return(o,e)=>{var x,$,S,C,I,B;return n(),u(L,null,[i("div",Y,[i("div",Z,[(x=t.value)!=null&&x.photo?(n(),u("img",{key:0,src:($=t.value)==null?void 0:$.photo,width:"150"},null,8,ee)):d("",!0),i("div",null,[i("span",te,V(h.value),1)]),s(r).hasCandidateOrganisations(a.value)?(n(),u("span",se,V(s(r).getCandidateOrganisationsStr(a.value)),1)):d("",!0),i("div",null,[c(s(f),{label:"Plus d'infos",text:"",severity:"primary",onClick:e[0]||(e[0]=l=>m.value=!0)})]),c(X,{website:(S=t.value)==null?void 0:S.website,facebook:(C=t.value)==null?void 0:C.facebook,instagram:(I=t.value)==null?void 0:I.instagram,twitter:(B=t.value)==null?void 0:B.twitter},null,8,["website","facebook","instagram","twitter"])]),i("div",oe,[c(J,{onScroll:e[1]||(e[1]=l=>R(l))})]),i("div",ie,[i("div",ne,[i("div",ae,[(n(!0),u(L,null,U(O.value,(l,N)=>(n(),u("div",{ref_for:!0,ref:A=>k.value[N]=A},[c(K,{opinions:l,issueId:Number(N),collapsed:!1},null,8,["opinions","issueId"])],512))),256))])])]),c(s(G),{visible:m.value,"onUpdate:visible":e[2]||(e[2]=l=>m.value=l),header:"Plus d'infos",class:"w-full md:w-20rem lg:w-30rem"},{default:q(()=>[i("p",{style:{"white-space":"pre-wrap"},innerHTML:t.value.description},null,8,re)]),_:1},8,["visible"])]),c(s(D))],64)}}},me=Q(le,[["__scopeId","data-v-63c1aebf"]]);export{me as default};
