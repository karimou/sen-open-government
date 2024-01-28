import{B as k,i as O,q as E,d as a,u as V,s as z,v as C,w as N,p as M,c as v,b as i,x as I,l as A,j as d,f,F as $,e as D,h as L,o as g}from"./index-F66LMmI3.js";import{b as P,c as R}from"./panel.esm-_ZdoRonN.js";import{s as T}from"./sidebar.esm-racvPfNC.js";import{a as F,_ as H}from"./AppCandidatesSelector-ReKOhX8O.js";import{_ as U}from"./_plugin-vue_export-helper-x3n3nnut.js";var q=`
@layer primevue {
    .p-virtualscroller {
        position: relative;
        overflow: auto;
        contain: strict;
        transform: translateZ(0);
        will-change: scroll-position;
        outline: 0 none;
    }

    .p-virtualscroller-content {
        position: absolute;
        top: 0;
        left: 0;
        /* contain: content; */
        min-height: 100%;
        min-width: 100%;
        will-change: transform;
    }

    .p-virtualscroller-spacer {
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 1px;
        transform-origin: 0 0;
        pointer-events: none;
    }

    .p-virtualscroller .p-virtualscroller-loader {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-virtualscroller-loader.p-component-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-virtualscroller-loading-icon {
        font-size: 2rem;
    }

    .p-virtualscroller-loading-icon.p-icon {
        width: 2rem;
        height: 2rem;
    }

    .p-virtualscroller-horizontal > .p-virtualscroller-content {
        display: flex;
    }

    /* Inline */
    .p-virtualscroller-inline .p-virtualscroller-content {
        position: static;
    }
}
`;k.extend({name:"virtualscroller",css:q});var G=`
@layer primevue {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }

    .p-dropdown-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-dropdown-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-dropdown-label {
        cursor: default;
    }

    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }

    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-dropdown-items-wrapper {
        overflow: auto;
    }

    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-dropdown-item-group {
        cursor: auto;
    }

    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-dropdown-filter {
        width: 100%;
    }

    .p-dropdown-filter-container {
        position: relative;
    }

    .p-dropdown-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-fluid .p-dropdown {
        display: flex;
    }

    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`,Z={root:function(e){var o=e.instance,t=e.props,r=e.state;return["p-dropdown p-component p-inputwrapper",{"p-disabled":t.disabled,"p-dropdown-clearable":t.showClear,"p-focus":r.focused,"p-inputwrapper-filled":o.hasSelectedOption,"p-inputwrapper-focus":r.focused||r.overlayVisible,"p-overlay-open":r.overlayVisible}]},input:function(e){var o=e.instance,t=e.props;return["p-dropdown-label p-inputtext",{"p-placeholder":!t.editable&&o.label===t.placeholder,"p-dropdown-label-empty":!t.editable&&!o.$slots.value&&(o.label==="p-emptylabel"||o.label.length===0)}]},clearIcon:"p-dropdown-clear-icon",trigger:"p-dropdown-trigger",loadingicon:"p-dropdown-trigger-icon",dropdownIcon:"p-dropdown-trigger-icon",panel:function(e){var o=e.instance;return["p-dropdown-panel p-component",{"p-input-filled":o.$primevue.config.inputStyle==="filled","p-ripple-disabled":o.$primevue.config.ripple===!1}]},header:"p-dropdown-header",filterContainer:"p-dropdown-filter-container",filterInput:"p-dropdown-filter p-inputtext p-component",filterIcon:"p-dropdown-filter-icon",wrapper:"p-dropdown-items-wrapper",list:"p-dropdown-items",itemGroup:"p-dropdown-item-group",item:function(e){var o=e.instance,t=e.state,r=e.option,p=e.focusedOption;return["p-dropdown-item",{"p-highlight":o.isSelected(r),"p-focus":t.focusedOptionIndex===p,"p-disabled":o.isOptionDisabled(r)}]},emptyMessage:"p-dropdown-empty-message"};k.extend({name:"dropdown",css:G,classes:Z});const J="/assets/bg-D_f6-x_5.jpeg",K={class:"issue-name-zone justify-content-center"},Q={class:"text-4xl"},W={class:"flex justify-content-center mb-6"},X={style:{"z-index":"1",position:"relative"}},Y={class:"grid"},nn={class:"lg:col-offset-3 lg:col-6 md:col-offset-2 md:col-8"},en=["innerHTML"],on={__name:"ElectionIssue",setup(c){const e=O("$groupArrayBy"),o=E(),t=a(null),r=a(null),p=a(null),u=a(null),m=a(!1),w=V(),h=l=>{r.value=Number(l.electionId),p.value=Number(l.issueId)};z(()=>{h(o.params),window.scroll({top:0,behavior:"smooth"})}),C((l,n)=>{h(l.params),t.value=null}),N(p,()=>u.value=w.getIssue(p.value));const S=M(()=>{if(!w.currentElection.opinions)return[];let l=w.currentElection.opinions.filter(n=>t.value?n.author_id==t.value:!0).filter(n=>n.issue_id==p.value);return e(l,n=>n.author_id)}),b=a({}),B=l=>{var n;(n=b.value[l])==null||n.scrollIntoView({behavior:"smooth"})};return(l,n)=>{var y,_;return g(),v($,null,[i("div",{class:"background-image pt-2 w-full",style:I({backgroundImage:`url(${f(J)})`})},[i("div",{class:"issue-image",style:I({backgroundImage:`url(${(y=u.value)==null?void 0:y.photo})`})},null,4),i("div",K,[i("div",null,[i("span",Q,A((_=u.value)==null?void 0:_.title),1)]),i("div",null,[d(f(P),{label:"Plus d'infos",text:"",severity:"primary",onClick:n[0]||(n[0]=s=>m.value=!0)})])]),i("div",W,[d(F,{onScroll:n[1]||(n[1]=s=>B(s))})]),i("div",X,[i("div",Y,[i("div",nn,[(g(!0),v($,null,D(S.value,(s,x)=>(g(),v("div",{ref_for:!0,ref:j=>b.value[x]=j},[d(H,{opinions:s,candidateId:Number(x),collapsed:!1},null,8,["opinions","candidateId"])],512))),256))])])]),d(f(T),{visible:m.value,"onUpdate:visible":n[2]||(n[2]=s=>m.value=s),header:"Plus d'infos",class:"w-full md:w-20rem lg:w-30rem"},{default:L(()=>{var s;return[i("p",{style:{"white-space":"pre-wrap"},innerHTML:(s=u.value)==null?void 0:s.short_description},null,8,en)]}),_:1},8,["visible"])],4),d(f(R))],64)}}},an=U(on,[["__scopeId","data-v-b4cc2a40"]]);export{an as default};
