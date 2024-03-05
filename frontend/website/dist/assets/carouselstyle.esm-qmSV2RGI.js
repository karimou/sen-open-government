import{s as _,_ as $,c as V}from"./AppOpinion-ST-BwSRs.js";import{u as w,t as N,p as v,r as j,v as D,o as p,d as x,e as g,b as a,g as h,j as B,f as y,s as P,F as C,a as I,c as k,l as z,B as A}from"./index-6dVIcN6o.js";const E={class:"font-bold"},M={__name:"AppCandidateOpinionsPanel",props:{candidateId:{type:Number},opinions:{type:Object,default:[]},collapsed:{type:Boolean,default:!0}},setup(i){const n=w(),e=i,{opinions:t,candidateId:c,collapsed:l}=N(e),s=v(()=>n.getCandidate(c.value)),u=v(()=>{if(s.value)return`${s.value.firstname} ${s.value.lastname}`}),m=v(()=>{var f;return(f=t.value)==null?void 0:f.map(o=>Number(o.num_proposals)).filter(o=>!!o).reduce((o,r)=>o+r,0)}),d=j(!1);D(()=>{d.value=l.value});const S=()=>d.value=!d.value;return(f,o)=>(p(),x(a(V),{collapsed:d.value,toggleable:"",class:"w-full my-2"},{header:g(()=>{var r;return[y("div",{class:"flex align-items-center gap-2 cursor-pointer",onClick:o[0]||(o[0]=b=>S())},[h(a(_),{image:(r=s.value)==null?void 0:r.photo,size:"large",shape:"rectangle"},null,8,["image"]),y("span",E,B(u.value),1),h(a(P),{value:m.value,severity:"success"},null,8,["value"])])]}),default:g(()=>[(p(!0),k(C,null,I(a(t),(r,b)=>(p(),x($,{opinion:r,includeDivider:b!=a(t).length-1},null,8,["opinion","includeDivider"]))),256))]),_:1},8,["collapsed"]))}},F={class:"p-button-label"},R={__name:"AppCandidatesSelector",emits:["scroll"],setup(i,{emit:n}){const e=w(),t=n,c=(l,s)=>{t("scroll",l),s&&s.target.blur()};return(l,s)=>(p(!0),k(C,null,I(a(e).currentElection.candidates,u=>(p(),x(a(z),{class:"mx-2",text:"",size:"small",severity:"primary",onClick:m=>c(u.id,m)},{default:g(()=>[h(a(_),{image:u.photo,shape:"circle",class:"mr-1"},null,8,["image"]),y("span",F,B(a(e).getCandidateName(u.id)),1)]),_:2},1032,["onClick"]))),256))}};var O=`
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
`,T={root:function(n){var e=n.instance;return["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}]},header:"p-carousel-header",content:"p-carousel-content",container:"p-carousel-container",previousButton:function(n){var e=n.instance;return["p-carousel-prev p-link",{"p-disabled":e.backwardIsDisabled}]},previousButtonIcon:"p-carousel-next-icon",itemsContent:"p-carousel-items-content",itemsContainer:"p-carousel-items-container",itemCloned:function(n){var e=n.index,t=n.value,c=n.totalShiftedItems,l=n.d_numVisible;return["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":c*-1===t.length+l,"p-carousel-item-start":e===0,"p-carousel-item-end":t.slice(-1*l).length-1===e}]},item:function(n){var e=n.instance,t=n.index;return["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=t&&e.lastIndex()>=t,"p-carousel-item-start":e.firstIndex()===t,"p-carousel-item-end":e.lastIndex()===t}]},nextButton:function(n){var e=n.instance;return["p-carousel-next p-link",{"p-disabled":e.forwardIsDisabled}]},nextButtonIcon:"p-carousel-prev-icon",indicators:"p-carousel-indicators p-reset",indicator:function(n){var e=n.instance,t=n.index;return["p-carousel-indicator",{"p-highlight":e.d_page===t}]},indicatorButton:"p-link",footer:"p-carousel-footer"};A.extend({name:"carousel",css:O,classes:T});export{M as _,R as a};
