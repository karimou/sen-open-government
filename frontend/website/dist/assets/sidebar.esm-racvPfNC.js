import{y as x,D as r,O as T,o as p,c as h,m as d,b as L,r as v,g as w,T as A,a as g,B as P,Z as S,R as j,z as K,A as E,h as F,C as R,F as H,E as $,l as Z,G as V,H as _,j as M}from"./index-F66LMmI3.js";import{f as N,s as z}from"./panel.esm-_ZdoRonN.js";var U={},X=x.extend({style:U}),Y=X.extend("focustrap",{mounted:function(e,n){var i=n.value||{},o=i.disabled;o||(this.createHiddenFocusableElements(e,n),this.bind(e,n),this.autoFocus(e,n)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,n){var i=n.value||{},o=i.disabled;o&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,n){var i=this,o=n.value||{},s=o.onFocusIn,l=o.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(a){a.forEach(function(c){if(c.type==="childList"&&!e.contains(document.activeElement)){var m=function b(u){var f=r.isFocusableElement(u)?r.isFocusableElement(u,i.getComputedSelector(e.$_pfocustrap_focusableselector))?u:r.getFirstFocusableElement(e,i.getComputedSelector(e.$_pfocustrap_focusableselector)):r.getFirstFocusableElement(u);return T.isNotEmpty(f)?f:u.nextSibling&&b(u.nextSibling)};r.focus(m(c.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(a){return s&&s(a)},e.$_pfocustrap_focusoutlistener=function(a){return l&&l(a)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e,n){var i=n.value||{},o=i.autoFocusSelector,s=o===void 0?"":o,l=i.firstFocusableSelector,a=l===void 0?"":l,c=i.autoFocus,m=c===void 0?!1:c,b=r.getFirstFocusableElement(e,"[autofocus]".concat(this.getComputedSelector(s)));m&&!b&&(b=r.getFirstFocusableElement(e,this.getComputedSelector(a))),r.focus(b)},onFirstHiddenElementFocus:function(e){var n,i=e.currentTarget,o=e.relatedTarget,s=o===i.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?r.getFirstFocusableElement(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_lasthiddenfocusableelement;r.focus(s)},onLastHiddenElementFocus:function(e){var n,i=e.currentTarget,o=e.relatedTarget,s=o===i.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?r.getLastFocusableElement(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_firsthiddenfocusableelement;r.focus(s)},createHiddenFocusableElements:function(e,n){var i=this,o=n.value||{},s=o.tabIndex,l=s===void 0?0:s,a=o.firstFocusableSelector,c=a===void 0?"":a,m=o.lastFocusableSelector,b=m===void 0?"":m,u=function(C){return r.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:l,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:C==null?void 0:C.bind(i)})},f=u(this.onFirstHiddenElementFocus),y=u(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=y,f.$_pfocustrap_focusableselector=c,f.setAttribute("data-pc-section","firstfocusableelement"),y.$_pfocustrap_firsthiddenfocusableelement=f,y.$_pfocustrap_focusableselector=b,y.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(f),e.append(y)}}}),D={name:"TimesIcon",extends:N},q=L("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),G=[q];function J(t,e,n,i,o,s){return p(),h("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),G,16)}D.render=J;var I={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function Q(t,e,n,i,o,s){return s.inline?v(t.$slots,"default",{key:0}):o.mounted?(p(),w(A,{key:1,to:n.appendTo},[v(t.$slots,"default")],8,["to"])):g("",!0)}I.render=Q;var W=`
@layer primevue {
    .p-sidebar-mask {
        display: none;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }

    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-sidebar-visible {
        display: flex;
    }

    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
    }

    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
    }

    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    /* Animation */
    /* Center */
    .p-sidebar-left .p-sidebar-enter-from,
    .p-sidebar-left .p-sidebar-leave-to {
        transform: translateX(-100%);
    }
    .p-sidebar-right .p-sidebar-enter-from,
    .p-sidebar-right .p-sidebar-leave-to {
        transform: translateX(100%);
    }
    .p-sidebar-top .p-sidebar-enter-from,
    .p-sidebar-top .p-sidebar-leave-to {
        transform: translateY(-100%);
    }
    .p-sidebar-bottom .p-sidebar-enter-from,
    .p-sidebar-bottom .p-sidebar-leave-to {
        transform: translateY(100%);
    }
    .p-sidebar-full .p-sidebar-enter-from,
    .p-sidebar-full .p-sidebar-leave-to {
        opacity: 0;
    }
    .p-sidebar-full .p-sidebar-enter-active,
    .p-sidebar-full .p-sidebar-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }

    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }

    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }

    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }

    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }

    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }

    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }
}
`,ee={mask:function(e){var n=e.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},te={mask:function(e){var n=e.instance,i=e.props,o=["left","right","top","bottom"],s=o.find(function(l){return l===i.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":i.modal,"p-sidebar-mask-scrollblocker":i.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(e){var n=e.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},ne=P.extend({name:"sidebar",css:W,classes:te,inlineStyles:ee}),ie={name:"BaseSidebar",extends:z,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ne,provide:function(){return{$parentInstance:this}}},se={name:"Sidebar",extends:ie,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&S.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&S.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&r.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&S.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.header&&e(this.headerContainer);n||(n=this.$slots.default&&e(this.container),n||(n=this.closeButton)),n&&r.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&r.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&r.unblockBodyScroll()},onKeydown:function(e){e.code==="Escape"&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},closeButtonRef:function(e){this.closeButton=e},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:Y,ripple:j},components:{Portal:I,TimesIcon:D}};function k(t){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(t)}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B(Object(n),!0).forEach(function(i){oe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function oe(t,e,n){return e=re(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t){var e=ae(t,"string");return k(e)=="symbol"?e:String(e)}function ae(t,e){if(k(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(k(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var le=["aria-modal"],ce=["aria-label"];function ue(t,e,n,i,o,s){var l=K("Portal"),a=E("ripple"),c=E("focustrap");return p(),w(l,null,{default:F(function(){return[o.containerVisible?(p(),h("div",d({key:0,ref:s.maskRef,onMousedown:e[1]||(e[1]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:t.cx("mask"),style:t.sx("mask",!0,{position:t.position})},t.ptm("mask")),[M(R,d({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},t.ptm("transition")),{default:F(function(){return[t.visible?_((p(),h("div",d({key:0,ref:s.containerRef,class:t.cx("root"),role:"complementary","aria-modal":t.modal},O(O({},t.$attrs),t.ptm("root"))),[t.$slots.container?v(t.$slots,"container",{key:0,onClose:s.hide,closeCallback:s.hide}):(p(),h(H,{key:1},[L("div",d({ref:s.headerContainerRef,class:t.cx("header")},t.ptm("header")),[v(t.$slots,"header",{class:$(t.cx("title"))},function(){return[t.header?(p(),h("div",d({key:0,class:t.cx("title")},t.ptm("title")),Z(t.header),17)):g("",!0)]}),t.showCloseIcon?_((p(),h("button",d({key:0,ref:s.closeButtonRef,type:"button",class:t.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:e[0]||(e[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},t.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[v(t.$slots,"closeicon",{class:$(t.cx("closeIcon"))},function(){return[(p(),w(V(t.closeIcon?"span":"TimesIcon"),d({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,ce)),[[a]]):g("",!0)],16),L("div",d({ref:s.contentRef,class:t.cx("content")},t.ptm("content")),[v(t.$slots,"default")],16)],64))],16,le)),[[c]]):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):g("",!0)]}),_:3})}se.render=ue;export{se as s};
