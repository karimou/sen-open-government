import{t as A,o as a,c as p,b as e,d as b,l as f,i as M,n as P,r as v,u as U,p as z,q as F,w as j,m as V,f as i,j as L,g as d,F as O,a as H,e as q}from"./index-FBOT6C75.js";import{b as _,f as D,d as G}from"./AppOpinion-6k-3yhZQ.js";import{a as J,_ as K}from"./AppIssuesSelector-TWEURi5y.js";import{_ as Q}from"./_plugin-vue_export-helper-x3n3nnut.js";const W={class:"flex justify-content-center"},X={__name:"AppSocialLinks",props:{website:{type:String},facebook:{type:String},twitter:{type:String},instagram:{type:String}},setup(k){const y=k,{website:w,facebook:g,twitter:l,instagram:t}=A(y),r=c=>window.open(c);return(c,o)=>(a(),p("div",W,[e(w)?(a(),b(e(_),{key:0,icon:"pi pi-link",text:"",onClick:o[0]||(o[0]=m=>r(e(w)))})):f("",!0),e(g)?(a(),b(e(_),{key:1,icon:"pi pi-facebook",text:"",onClick:o[1]||(o[1]=m=>r(e(g)))})):f("",!0),e(l)?(a(),b(e(_),{key:2,icon:"pi pi-twitter",text:"",onClick:o[2]||(o[2]=m=>r(e(l)))})):f("",!0),e(t)?(a(),b(e(_),{key:3,icon:"pi pi-instagram",text:"",onClick:o[3]||(o[3]=m=>r(e(t)))})):f("",!0)]))}},Y={class:"pt-2 w-full"},Z={class:"candidate-name-zone justify-content-center"},ee=["src"],te={class:"text-4xl"},se={key:1,class:"font-bold ml-4 font-light uppercase text-sm",style:{color:"#797979"}},oe={class:"flex flex-wrap justify-content-center mb-6",style:{"max-width":"800px",margin:"auto"}},ne={style:{"z-index":"1",position:"relative"}},ie={class:"flex"},ae={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8 col"},le=["innerHTML"],re={__name:"ElectionCandidate",setup(k){const y=M("$groupArrayBy"),w=P(),g=v(null),l=v(null),t=v(null),r=v(!1),c=U(),o=n=>{g.value=Number(n.electionId),l.value=Number(n.candidateId)};z(()=>{o(w.params),window.scroll({top:0,behavior:"smooth"})}),F((n,s)=>{o(n.params)}),j(l,()=>{t.value=c.getCandidate(l.value)});const m=V(()=>{if(!c.currentElection.opinions)return[];let n=c.currentElection.opinions.filter(s=>s.author_id==l.value);return y(n,s=>s.issue_id)}),x=V(()=>{if(t.value)return`${t.value.firstname} ${t.value.lastname}`});j(x,n=>{document.title=document.title+" - "+n});const $=v({}),R=n=>{var s;(s=$.value[n])==null||s.scrollIntoView({behavior:"smooth"})};return(n,s)=>{var h,C,S,I,B,N;return a(),p(O,null,[i("div",Y,[i("div",Z,[(h=t.value)!=null&&h.photo?(a(),p("img",{key:0,src:(C=t.value)==null?void 0:C.photo,width:"150"},null,8,ee)):f("",!0),i("div",null,[i("span",te,L(x.value),1)]),e(c).hasCandidateOrganisations(l.value)?(a(),p("span",se,L(e(c).getCandidateOrganisationsStr(l.value)),1)):f("",!0),i("div",null,[d(e(_),{label:"Plus d'infos",text:"",severity:"primary",onClick:s[0]||(s[0]=u=>r.value=!0)})]),d(X,{website:(S=t.value)==null?void 0:S.website,facebook:(I=t.value)==null?void 0:I.facebook,instagram:(B=t.value)==null?void 0:B.instagram,twitter:(N=t.value)==null?void 0:N.twitter},null,8,["website","facebook","instagram","twitter"])]),i("div",oe,[d(J,{onScroll:s[1]||(s[1]=u=>R(u))})]),i("div",ne,[i("div",ie,[i("div",ae,[(a(!0),p(O,null,H(m.value,(u,E)=>(a(),p("div",{ref_for:!0,ref:T=>$.value[E]=T},[d(K,{opinions:u,issueId:Number(E),collapsed:!1},null,8,["opinions","issueId"])],512))),256))])])]),d(e(D),{visible:r.value,"onUpdate:visible":s[2]||(s[2]=u=>r.value=u),header:"Plus d'infos",class:"w-11 md:w-20rem lg:w-30rem"},{default:q(()=>[i("p",{style:{"white-space":"pre-wrap"},innerHTML:t.value.description},null,8,le)]),_:1},8,["visible"])]),d(e(G))],64)}}},fe=Q(re,[["__scopeId","data-v-fee4c8ca"]]);export{fe as default};