import{s as _,a as k,_ as S,g as $,b as V}from"./AppOpinion-Cgixdevp.js";import{u as y,t as N,m as f,o as p,d as v,e as x,b as a,g as h,j as b,f as g,F as w,a as B,c as I,B as j}from"./index-Cpz3AbLZ.js";const D={class:"flex align-items-center gap-2"},z={class:"font-bold"},T={__name:"AppCandidateOpinionsPanel",props:{candidateId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(i){const n=y(),e=i,{opinions:t,candidateId:c,collapsed:o}=N(e),s=f(()=>n.getCandidate(c.value)),u=f(()=>{if(s.value)return`${s.value.firstname} ${s.value.lastname}`}),d=f(()=>{var m;return(m=t.value)==null?void 0:m.map(r=>Number(r.num_proposals)).filter(r=>!!r).reduce((r,l)=>r+l,0)});return(m,r)=>(p(),v(a($),{collapsed:a(o),toggleable:"",class:"w-full my-2"},{header:x(()=>{var l;return[g("div",D,[h(a(_),{image:(l=s.value)==null?void 0:l.photo,size:"large",shape:"rectangle"},null,8,["image"]),g("span",z,b(u.value),1),h(a(k),{value:d.value,severity:"success"},null,8,["value"])])]}),default:x(()=>[(p(!0),I(w,null,B(a(t),(l,C)=>(p(),v(S,{opinion:l,includeDivider:C!=a(t).length-1},null,8,["opinion","includeDivider"]))),256))]),_:1},8,["collapsed"]))}},A={class:"p-button-label"},K={__name:"AppCandidatesSelector",emits:["scroll"],setup(i,{emit:n}){const e=y(),t=n,c=(o,s)=>{t("scroll",o),s&&s.target.blur()};return(o,s)=>(p(!0),I(w,null,B(a(e).currentElection.candidates,u=>(p(),v(a(V),{class:"mx-2",text:"",size:"small",severity:"primary",onClick:d=>c(u.id,d)},{default:x(()=>[h(a(_),{image:u.photo,shape:"circle",class:"mr-1"},null,8,["image"]),g("span",A,b(a(e).getCandidateName(u.id)),1)]),_:2},1032,["onClick"]))),256))}};var E=`
@layer primevue {
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-prev,
    .p-carousel-next {
        align-self: center;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-carousel-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-items-content {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-items-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-indicators {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .p-carousel-indicator > button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Vertical */
    .p-carousel-vertical .p-carousel-container {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-items-container {
        flex-direction: column;
        height: 100%;
    }

    /* Keyboard Support */
    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
}
`,F={root:function(n){var e=n.instance;return["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}]},header:"p-carousel-header",content:"p-carousel-content",container:"p-carousel-container",previousButton:function(n){var e=n.instance;return["p-carousel-prev p-link",{"p-disabled":e.backwardIsDisabled}]},previousButtonIcon:"p-carousel-next-icon",itemsContent:"p-carousel-items-content",itemsContainer:"p-carousel-items-container",itemCloned:function(n){var e=n.index,t=n.value,c=n.totalShiftedItems,o=n.d_numVisible;return["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":c*-1===t.length+o,"p-carousel-item-start":e===0,"p-carousel-item-end":t.slice(-1*o).length-1===e}]},item:function(n){var e=n.instance,t=n.index;return["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=t&&e.lastIndex()>=t,"p-carousel-item-start":e.firstIndex()===t,"p-carousel-item-end":e.lastIndex()===t}]},nextButton:function(n){var e=n.instance;return["p-carousel-next p-link",{"p-disabled":e.forwardIsDisabled}]},nextButtonIcon:"p-carousel-prev-icon",indicators:"p-carousel-indicators p-reset",indicator:function(n){var e=n.instance,t=n.index;return["p-carousel-indicator",{"p-highlight":e.d_page===t}]},indicatorButton:"p-link",footer:"p-carousel-footer"};j.extend({name:"carousel",css:E,classes:F});export{T as _,K as a};
