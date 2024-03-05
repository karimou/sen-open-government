import{B as w,o as r,c as l,z as o,A as u,m as c,C,j as P,d as y,D as T,E as U,f as s,G as R,U as W,R as X,H as Y,I as A,J as x,K as _,g as f,e as h,L as ee,T as te,u as ne,t as re,r as m,h as H,b as p,l as j,y as M,F as V,a as ae,M as oe}from"./index-yqsAfg0l.js";var ie=`
@layer primevue {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: '';
    }

    .p-divider-content {
        z-index: 1;
    }

    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: '';
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-left-style: dotted;
    }
}
`,le={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},se={root:function(t){var n=t.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},pe=w.extend({name:"divider",css:ie,classes:se,inlineStyles:le}),de={name:"BaseDivider",extends:C,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:pe,provide:function(){return{$parentInstance:this}}},z={name:"Divider",extends:de},ce=["aria-orientation"];function ue(e,t,n,i,d,a){return r(),l("div",o({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptm("root"),{"data-pc-name":"divider"}),[e.$slots.default?(r(),l("div",o({key:0,class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16)):c("",!0)],16,ce)}z.render=ue;var ve=`
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
`,ge={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},fe=w.extend({name:"avatar",css:ve,classes:ge}),me={name:"BaseAvatar",extends:C,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:fe,provide:function(){return{$parentInstance:this}}},he={name:"Avatar",extends:me,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}}},ye=["aria-labelledby","aria-label"],be=["src","alt"];function $e(e,t,n,i,d,a){return r(),l("div",o({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("root"),{"data-pc-name":"avatar"}),[u(e.$slots,"default",{},function(){return[e.label?(r(),l("span",o({key:0,class:e.cx("label")},e.ptm("label")),P(e.label),17)):e.$slots.icon?(r(),y(U(e.$slots.icon),{key:1,class:T(e.cx("icon"))},null,8,["class"])):e.icon?(r(),l("span",o({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(r(),l("img",o({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return a.onError&&a.onError.apply(a,arguments)})},e.ptm("image")),null,16,be)):c("",!0)]})],16,ye)}he.render=$e;var we={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ce=w.extend({name:"card",classes:we}),Se={name:"BaseCard",extends:C,style:Ce},q={name:"Card",extends:Se};function ke(e,t,n,i,d,a){return r(),l("div",o({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(r(),l("div",o({key:0,class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header")],16)):c("",!0),s("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),l("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),l("div",o({key:0,class:e.cx("title")},e.ptm("title")),[u(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(r(),l("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[u(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),s("div",o({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"content")],16),e.$slots.footer?(r(),l("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):c("",!0)],16)],16)}q.render=ke;var F={name:"MinusIcon",extends:R},Pe=s("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1),Ie=[Pe];function De(e,t,n,i,d,a){return r(),l("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ie,16)}F.render=De;var J={name:"PlusIcon",extends:R,computed:{pathId:function(){return"pv_icon_clip_".concat(W())}}},Be=["clip-path"],Oe=s("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1),je=[Oe],ze=["id"],Le=s("rect",{width:"14",height:"14",fill:"white"},null,-1),Ee=[Le];function Ae(e,t,n,i,d,a){return r(),l("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[s("g",{"clip-path":"url(#".concat(a.pathId,")")},je,8,Be),s("defs",null,[s("clipPath",{id:"".concat(a.pathId)},Ee,8,ze)])],16)}J.render=Ae;var He=`
@layer primevue {
    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p-panel-title {
        line-height: 1;
    }

    .p-panel-header-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
}
`,Me={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},Ve=w.extend({name:"panel",css:He,classes:Me}),Ke={name:"BasePanel",extends:C,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Ve,provide:function(){return{$parentInstance:this}}},Ne={name:"Panel",extends:Ke,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{ariaId:function(){return W()},buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:J,MinusIcon:F},directives:{ripple:X}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K(Object(n),!0).forEach(function(i){Te(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Te(e,t,n){return t=Ue(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){var t=Re(e,"string");return $(t)=="symbol"?t:String(t)}function Re(e,t){if($(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if($(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var We=["id"],qe=["id","aria-label","aria-controls","aria-expanded"],Fe=["id","aria-labelledby"];function Je(e,t,n,i,d,a){var S=Y("ripple");return r(),l("div",o({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"panel"}),[s("div",o({class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header",{id:a.ariaId+"_header",class:T(e.cx("title"))},function(){return[e.header?(r(),l("span",o({key:0,id:a.ariaId+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,We)):c("",!0)]}),s("div",o({class:e.cx("icons")},e.ptm("icons")),[u(e.$slots,"icons"),e.toggleable?A((r(),l("button",o({key:0,id:a.ariaId+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":a.buttonAriaLabel,"aria-controls":a.ariaId+"_content","aria-expanded":!d.d_collapsed,onClick:t[0]||(t[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)}),onKeydown:t[1]||(t[1]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)})},N(N({},e.toggleButtonProps),e.ptm("toggler"))),[u(e.$slots,"togglericon",{collapsed:d.d_collapsed},function(){return[(r(),y(U(d.d_collapsed?"PlusIcon":"MinusIcon"),x(_(e.ptm("togglericon"))),null,16))]})],16,qe)),[[S]]):c("",!0)],16)],16),f(te,o({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[A(s("div",o({id:a.ariaId+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":a.ariaId+"_header"},e.ptm("toggleablecontent")),[s("div",o({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16),e.$slots.footer?(r(),l("div",o({key:0,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):c("",!0)],16,Fe),[[ee,!d.d_collapsed]])]}),_:3},16)],16)}Ne.render=Je;var Ze=`
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`,Ge={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},Qe=w.extend({name:"progressspinner",css:Ze,classes:Ge}),Xe={name:"BaseProgressSpinner",extends:C,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Qe,provide:function(){return{$parentInstance:this}}},L={name:"ProgressSpinner",extends:Xe,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ye=["fill","stroke-width"];function xe(e,t,n,i,d,a){return r(),l("div",o({class:e.cx("root"),role:"progressbar"},e.ptm("root"),{"data-pc-name":"progressspinner"}),[(r(),l("svg",o({class:e.cx("spinner"),viewBox:"25 25 50 50",style:a.svgStyle},e.ptm("spinner")),[s("circle",o({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Ye)],16))],16)}L.render=xe;const _e={class:"m-0",style:{"white-space":"pre-wrap"}},et={class:"flex justify-content-between mt-2"},tt={key:0},nt={key:1},rt=["innerHTML"],at={key:1},ot=["innerHTML"],it={class:"flex mt-1 justify-content-end"},st={__name:"AppOpinion",props:{opinion:{type:Object},includeDivider:{type:Boolean,default:!0}},setup(e){const t=ne(),n=e,{opinion:i,includeDivider:d}=re(n),a=m(null),S=m(null),I=m(!1),k=m(!1),E=()=>{k.value=!0,oe.opinions.getOpinion(i.value.id).then(b=>{I.value=!0,a.value=b.content,S.value=b.proposals||[],k.value=!1})},D=m(!1),Z=()=>{D.value=!0,I.value||E()},B=m(!1),G=()=>{B.value=!0,I.value||E()},Q=b=>{var O;let g=t.getCandidateName((O=i.value)==null?void 0:O.author_id),v=window.location.href;window.location.href=`whatsapp://send?text=Je vous partage cette proprosition du candidat ${g}:%0A"${encodeURIComponent(b.content)}"%0A%0A${encodeURIComponent(v)}`};return(b,g)=>(r(),l(V,null,[s("p",_e,[H(P(p(i).summary)+" ",1),s("div",et,[p(i).has_content?(r(),l("div",tt,[f(p(j),{text:"",label:"En savoir plus",onClick:g[0]||(g[0]=v=>Z())})])):c("",!0),p(i).num_proposals>0?(r(),l("div",nt,[f(p(j),{outlined:"",label:"Propositions",onClick:g[1]||(g[1]=v=>G()),severity:"success",badge:p(i).num_proposals,badgeSeverity:"success"},null,8,["badge"])])):c("",!0)]),p(d)?(r(),y(p(z),{key:0})):c("",!0)]),f(p(M),{visible:D.value,"onUpdate:visible":g[2]||(g[2]=v=>D.value=v),header:"En savoir plus",class:"w-11 md:w-8 lg:w-5",position:"left"},{default:h(()=>[k.value?(r(),y(p(L),{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8"})):(r(),l("p",{key:1,style:{"white-space":"pre-wrap"},innerHTML:a.value},null,8,rt))]),_:1},8,["visible"]),f(p(M),{visible:B.value,"onUpdate:visible":g[3]||(g[3]=v=>B.value=v),class:"w-11 md:w-8 lg:w-5",position:"right"},{default:h(()=>[k.value?(r(),y(p(L),{key:0,style:{width:"50px",height:"50px"},strokeWidth:"3"})):(r(),l("div",at,[(r(!0),l(V,null,ae(S.value,v=>(r(),y(p(q),{class:"mb-2"},{title:h(()=>[H("Proposition #"+P(v.number),1)]),content:h(()=>[f(p(z)),s("p",{class:"m-0",style:{"white-space":"pre-wrap"},innerHTML:v.content},null,8,ot)]),footer:h(()=>[s("div",it,[f(p(j),{outlined:"",icon:"pi pi-whatsapp",severity:"success",onClick:O=>Q(v)},null,8,["onClick"])])]),_:2},1024))),256))]))]),_:1},8,["visible"])],64))}};export{st as _,q as a,z as b,Ne as c,he as s};
