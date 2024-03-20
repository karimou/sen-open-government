import{C as P,o as a,c as l,D as o,E as f,n as v,G as k,j as C,f as y,H as x,I as K,J as T,a as p,U,R as Z,K as G,L as E,M as Q,N as X,b as g,g as m,O as Y,T as ee,d as ne,t as te,r as h,h as A,u as s,m as B,B as H,F as M,p as re,e as ae,P as ie}from"./index-8dWYuQA6.js";var oe=`
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
`,le={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},se={root:function(n){var t=n.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},pe=P.extend({name:"divider",css:oe,classes:se,inlineStyles:le}),de={name:"BaseDivider",extends:k,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:pe,provide:function(){return{$parentInstance:this}}},z={name:"Divider",extends:de},ce=["aria-orientation"];function ue(e,n,t,i,d,r){return a(),l("div",o({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptm("root"),{"data-pc-name":"divider"}),[e.$slots.default?(a(),l("div",o({key:0,class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16)):v("",!0)],16,ce)}z.render=ue;var ve=`
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
`,ge={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},fe=P.extend({name:"avatar",css:ve,classes:ge}),he={name:"BaseAvatar",extends:k,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:fe,provide:function(){return{$parentInstance:this}}},me={name:"Avatar",extends:he,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},ye=["aria-labelledby","aria-label"],be=["src","alt"];function $e(e,n,t,i,d,r){return a(),l("div",o({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("root"),{"data-pc-name":"avatar"}),[f(e.$slots,"default",{},function(){return[e.label?(a(),l("span",o({key:0,class:e.cx("label")},e.ptm("label")),C(e.label),17)):e.$slots.icon?(a(),y(K(e.$slots.icon),{key:1,class:x(e.cx("icon"))},null,8,["class"])):e.icon?(a(),l("span",o({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(a(),l("img",o({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image")),null,16,be)):v("",!0)]})],16,ye)}me.render=$e;var R={name:"MinusIcon",extends:T},we=p("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1),Se=[we];function Ce(e,n,t,i,d,r){return a(),l("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Se,16)}R.render=Ce;var W={name:"PlusIcon",extends:T,computed:{pathId:function(){return"pv_icon_clip_".concat(U())}}},Pe=["clip-path"],ke=p("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1),Ie=[ke],De=["id"],Oe=p("rect",{width:"14",height:"14",fill:"white"},null,-1),je=[Oe];function Be(e,n,t,i,d,r){return a(),l("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[p("g",{"clip-path":"url(#".concat(r.pathId,")")},Ie,8,Pe),p("defs",null,[p("clipPath",{id:"".concat(r.pathId)},je,8,De)])],16)}W.render=Be;var ze=`
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
`,_e={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},Le=P.extend({name:"panel",css:ze,classes:_e}),Ee={name:"BasePanel",extends:k,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Le,provide:function(){return{$parentInstance:this}}},Ae={name:"Panel",extends:Ee,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{ariaId:function(){return U()},buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:W,MinusIcon:R},directives:{ripple:Z}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$(e)}function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,i)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?V(Object(t),!0).forEach(function(i){He(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function He(e,n,t){return n=Me(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Me(e){var n=Ve(e,"string");return $(n)=="symbol"?n:String(n)}function Ve(e,n){if($(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if($(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Ne=["id"],xe=["id","aria-label","aria-controls","aria-expanded"],Ke=["id","aria-labelledby"];function Te(e,n,t,i,d,r){var w=G("ripple");return a(),l("div",o({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"panel"}),[p("div",o({class:e.cx("header")},e.ptm("header")),[f(e.$slots,"header",{id:r.ariaId+"_header",class:x(e.cx("title"))},function(){return[e.header?(a(),l("span",o({key:0,id:r.ariaId+"_header",class:e.cx("title")},e.ptm("title")),C(e.header),17,Ne)):v("",!0)]}),p("div",o({class:e.cx("icons")},e.ptm("icons")),[f(e.$slots,"icons"),e.toggleable?E((a(),l("button",o({key:0,id:r.ariaId+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":r.buttonAriaLabel,"aria-controls":r.ariaId+"_content","aria-expanded":!d.d_collapsed,onClick:n[0]||(n[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:n[1]||(n[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},N(N({},e.toggleButtonProps),e.ptm("toggler"))),[f(e.$slots,"togglericon",{collapsed:d.d_collapsed},function(){return[(a(),y(K(d.d_collapsed?"PlusIcon":"MinusIcon"),Q(X(e.ptm("togglericon"))),null,16))]})],16,xe)),[[w]]):v("",!0)],16)],16),g(ee,o({name:"p-toggleable-content"},e.ptm("transition")),{default:m(function(){return[E(p("div",o({id:r.ariaId+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":r.ariaId+"_header"},e.ptm("toggleablecontent")),[p("div",o({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16),e.$slots.footer?(a(),l("div",o({key:0,class:e.cx("footer")},e.ptm("footer")),[f(e.$slots,"footer")],16)):v("",!0)],16,Ke),[[Y,!d.d_collapsed]])]}),_:3},16)],16)}Ae.render=Te;var Ue=`
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
`,Re={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},We=P.extend({name:"progressspinner",css:Ue,classes:Re}),qe={name:"BaseProgressSpinner",extends:k,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:We,provide:function(){return{$parentInstance:this}}},_={name:"ProgressSpinner",extends:qe,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Fe=["fill","stroke-width"];function Je(e,n,t,i,d,r){return a(),l("div",o({class:e.cx("root"),role:"progressbar"},e.ptm("root"),{"data-pc-name":"progressspinner"}),[(a(),l("svg",o({class:e.cx("spinner"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spinner")),[p("circle",o({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Fe)],16))],16)}_.render=Je;const Ze={class:"m-0",style:{"white-space":"pre-wrap"}},Ge={class:"flex justify-content-between mt-2"},Qe={key:0},Xe={key:1},Ye=["innerHTML"],en={key:1},nn=["innerHTML"],tn={class:"flex mt-1 justify-content-end"},an={__name:"AppOpinion",props:{opinion:{type:Object},includeDivider:{type:Boolean,default:!0}},setup(e){const n=ne(),t=e,{opinion:i,includeDivider:d}=te(t),r=h(null),w=h(null),I=h(!1),S=h(!1),L=()=>{S.value=!0,ie.opinions.getOpinion(i.value.id).then(b=>{I.value=!0,r.value=b.content,w.value=b.proposals||[],S.value=!1})},D=h(!1),q=()=>{D.value=!0,I.value||L()},O=h(!1),F=()=>{O.value=!0,I.value||L()},J=b=>{var j;let u=n.getCandidateName((j=i.value)==null?void 0:j.author_id),c=window.location.href;window.location.href=`whatsapp://send?text=Je vous partage cette proprosition du candidat ${u}:%0A"${encodeURIComponent(b.content)}"%0A%0A${encodeURIComponent(c)}`};return(b,u)=>(a(),l(M,null,[p("p",Ze,[A(C(s(i).summary)+" ",1),p("div",Ge,[s(i).has_content?(a(),l("div",Qe,[g(s(B),{text:"",label:"En savoir plus",onClick:u[0]||(u[0]=c=>q())})])):v("",!0),s(i).num_proposals>0?(a(),l("div",Xe,[g(s(B),{outlined:"",label:"Propositions",onClick:u[1]||(u[1]=c=>F()),severity:"success",badge:s(i).num_proposals,badgeSeverity:"success"},null,8,["badge"])])):v("",!0)]),s(d)?(a(),y(s(z),{key:0})):v("",!0)]),g(s(H),{visible:D.value,"onUpdate:visible":u[2]||(u[2]=c=>D.value=c),header:"En savoir plus",class:"w-11 md:w-8 lg:w-5",position:"left"},{default:m(()=>[S.value?(a(),y(s(_),{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8"})):(a(),l("p",{key:1,style:{"white-space":"pre-wrap"},innerHTML:r.value},null,8,Ye))]),_:1},8,["visible"]),g(s(H),{visible:O.value,"onUpdate:visible":u[3]||(u[3]=c=>O.value=c),class:"w-11 md:w-8 lg:w-5",position:"right"},{default:m(()=>[S.value?(a(),y(s(_),{key:0,style:{width:"50px",height:"50px"},strokeWidth:"3"})):(a(),l("div",en,[(a(!0),l(M,null,ae(w.value,c=>(a(),y(s(re),{class:"mb-2"},{title:m(()=>[A("Proposition #"+C(c.number),1)]),content:m(()=>[g(s(z)),p("p",{class:"m-0",style:{"white-space":"pre-wrap"},innerHTML:c.content},null,8,nn)]),footer:m(()=>[p("div",tn,[g(s(B),{outlined:"",icon:"pi pi-whatsapp",severity:"success",onClick:j=>J(c)},null,8,["onClick"])])]),_:2},1024))),256))]))]),_:1},8,["visible"])],64))}};export{an as _,z as a,Ae as b,me as s};
