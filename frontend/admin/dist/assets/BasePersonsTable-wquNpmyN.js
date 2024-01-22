import{B as V,p as N,a as s,c as u,k as I,m as g,E as O,e as _,y as T,z as R,l as A,Y as U,r as q,u as M,b as l,f as a,g as n,w as v,h as Y,A as G,i as C,_ as x}from"./index-sjrDLI-L.js";import{s as H,a as f,b as J,_ as K}from"./AppTableSkeleton-Nfvta1m-.js";import{s as b}from"./index.esm-Kf8LRFWe.js";var Q=`
@layer primevue {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }

    .p-avatar.p-avatar-image {
        background-color: transparent;
    }

    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }
}
`,W={root:function(r){var o=r.props;return["p-avatar p-component",{"p-avatar-image":o.image!=null,"p-avatar-circle":o.shape==="circle","p-avatar-lg":o.size==="large","p-avatar-xl":o.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},X=V.extend({name:"avatar",css:Q,classes:W}),Z={name:"BaseAvatar",extends:N,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}},E={name:"Avatar",extends:Z,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}}},ee=["aria-labelledby","aria-label"],ae=["src","alt"];function ne(e,r,o,h,i,c){return s(),u("div",g({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("root"),{"data-pc-name":"avatar"}),[I(e.$slots,"default",{},function(){return[e.label?(s(),u("span",g({key:0,class:e.cx("label")},e.ptm("label")),O(e.label),17)):e.$slots.icon?(s(),_(R(e.$slots.icon),{key:1,class:T(e.cx("icon"))},null,8,["class"])):e.icon?(s(),u("span",g({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(s(),u("img",g({key:3,src:e.image,alt:e.ariaLabel,onError:r[0]||(r[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},e.ptm("image")),null,16,ae)):A("",!0)]})],16,ee)}E.render=ne;const te={class:"grid"},se={class:"col-12"},re={key:1,class:"card"},le={class:"my-2"},oe=l("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[l("h5",{class:"m-0"},"Personnes")],-1),ie={key:2,class:"px-4 py-5 shadow-1 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3",style:{width:"600px","background-color":"white"}},de=l("div",null,[l("div",{class:"font-medium text-xl mt-2 mb-3"},"Aucune persone"),l("div",{class:"font-medium"},"Cliquer sur le bouton suivant pour rajouter une première personne à la base de données")],-1),pe={class:"mt-4 mr-auto md:mt-0 md:mr-0"},ve={__name:"BasePersonsTable",props:{persons:Array,addFunction:{type:Function,default:null},deleteFunction:{type:Function,default:null},loading:{type:Boolean,default:!1}},emits:["refresh"],setup(e,{emit:r}){const o=e,{persons:h,loading:i,addFunction:c,deleteFunction:$}=U(o),k=r,d=q(null),F=()=>{var t;let m=(t=d.value)==null?void 0:t.map(y=>y.id);i.value=!0,G.persons.deletePersons(m).then(()=>{k("refresh"),d.value=null}).finally(()=>i.value=!1)},B=()=>{if($.value)i.value=!0,$.value(d.value).then(()=>i.value=!1).then(()=>k("refresh"));else return F()},S=M(),z=C(()=>x(()=>import("./PersonsUpsertForm-I9N49c_T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),P=(m={})=>{S.open(z,{data:m,onClose:()=>k("refresh"),props:{modal:!0}})},w=()=>c.value?c.value():P(),L=C(()=>x(()=>import("./PersonsOpinions-bsflook3.js"),__vite__mapDeps([10,11,2,3,12,7,4]))),j=(m={})=>{S.open(L,{data:m,props:{modal:!0}})};return(m,t)=>{var y;return s(),u("div",te,[l("div",se,[a(i)?(s(),_(K,{key:0})):((y=a(h))==null?void 0:y.length)>0?(s(),u("div",re,[n(a(H),{class:"mb-4"},{start:v(()=>[l("div",le,[n(a(b),{label:"Ajouter une personne",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:t[0]||(t[0]=()=>w())}),n(a(b),{label:"Supprimer la sélection",icon:"pi pi-trash",class:"p-button-danger",onClick:t[1]||(t[1]=()=>B()),disabled:!d.value||!d.value.length,loading:a(i)},null,8,["disabled","loading"])])]),_:1}),n(a(J),{value:a(h),selection:d.value,"onUpdate:selection":t[2]||(t[2]=p=>d.value=p)},{header:v(()=>[oe]),default:v(()=>[n(a(f),{selectionMode:"multiple",headerStyle:"width: 3rem"}),n(a(f),{headerStyle:"width: 120px"},{body:v(({data:p})=>[n(a(b),{class:"p-button-text p-button-rounded",icon:"pi pi-pencil",onClick:D=>P(p)},null,8,["onClick"]),n(a(b),{class:"p-button-text p-button-rounded",icon:"pi pi-megaphone",onClick:D=>j(p)},null,8,["onClick"])]),_:1}),n(a(f),{field:"photo",headerStyle:"width: 100px"},{body:v(({data:p})=>[p.photo?(s(),_(a(E),{key:0,class:"contained-image",image:p.photo,size:"xlarge",shape:"circle"},null,8,["image"])):A("",!0)]),_:1}),n(a(f),{field:"firstname",header:"Prénom"}),n(a(f),{field:"lastname",header:"Nom"}),n(a(f),{field:"description",header:"Description"})]),_:1},8,["value","selection"])])):(s(),u("div",ie,[de,l("div",pe,[n(a(b),{class:"p-button font-bold px-5 py-3 p-button-success p-button-rounded p-button-raised",onClick:t[3]||(t[3]=()=>w())},{default:v(()=>[Y("Ajouter")]),_:1})])]))])])}}};export{ve as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonsUpsertForm-I9N49c_T.js","assets/message.esm-UrD84rNF.js","assets/index-sjrDLI-L.js","assets/index-D9x--RlZ.css","assets/index.esm-Kf8LRFWe.js","assets/textarea.esm-EobiClLN.js","assets/editor.esm-H7fnoAox.js","assets/AppTableSkeleton-Nfvta1m-.js","assets/index.esm-oP_jV4I_.js","assets/format-39s6QTMr.js","assets/PersonsOpinions-bsflook3.js","assets/opinions-Ax_k20T6.js","assets/BaseOpinionsTable-1gQqNPC5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
