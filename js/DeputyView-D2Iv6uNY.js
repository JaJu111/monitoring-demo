import{An as e,Dn as t,Pn as n,Tn as r,Wt as i,Xt as a,_n as o,a as s,an as c,bn as l,bt as u,c as d,cn as f,en as p,fn as m,h,hn as g,i as _,in as v,jn as y,ln as b,lt as x,mn as S,n as ee,nn as C,nt as w,o as T,qt as E,rn as D,s as O,sn as k,vn as A,wn as j,xn as M,xt as N,yn as P,yt as F}from"./usetoast-CzXqAWTc.js";import{f as I,u as L}from"./index-DwBSN8nc.js";import{n as te,t as R}from"./focustrap-DoBXdUp2.js";import{t as ne}from"./toast-BMGEU798.js";import{n as re,t as z}from"./utils-DsOayvf-.js";var B=N.extend({name:`drawer`,style:`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),V={name:`BaseDrawer`,extends:u,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:B,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function H(e){"@babel/helpers - typeof";return H=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},H(e)}function U(e,t,n){return(t=W(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){var t=G(e,`string`);return H(t)==`symbol`?t:t+``}function G(e,t){if(H(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(H(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var K={name:`Drawer`,extends:V,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&h.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&h.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&w(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&h.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&x(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&z()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&re()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return F(U(U(U({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:R},components:{Button:d,Portal:T,TimesIcon:O}},q=[`data-p`],J=[`role`,`aria-modal`,`data-p`];function Y(e,t,i,a,o,s){var u=P(`Button`),d=P(`Portal`),h=l(`focustrap`);return g(),D(d,null,{default:j(function(){return[o.containerVisible?(g(),c(`div`,m({key:0,ref:s.maskRef,onMousedown:t[0]||=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":s.dataP},e.ptm(`mask`)),[f(E,m({name:`p-drawer`,onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:``},e.ptm(`transition`)),{default:j(function(){return[e.visible?r((g(),c(`div`,m({key:0,ref:s.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":s.dataP},e.ptmi(`root`)),[e.$slots.container?A(e.$slots,`container`,{key:0,closeCallback:s.hide}):(g(),c(p,{key:1},[C(`div`,m({ref:s.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[A(e.$slots,`header`,{class:y(e.cx(`title`))},function(){return[e.header?(g(),c(`div`,m({key:0,class:e.cx(`title`)},e.ptm(`title`)),n(e.header),17)):v(``,!0)]}),e.showCloseIcon?A(e.$slots,`closebutton`,{key:0,closeCallback:s.hide},function(){return[f(u,m({ref:s.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":s.closeAriaLabel,unstyled:e.unstyled,onClick:s.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:j(function(t){return[A(e.$slots,`closeicon`,{},function(){return[(g(),D(M(e.closeIcon?`span`:`TimesIcon`),m({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):v(``,!0)],16),C(`div`,m({ref:s.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[A(e.$slots,`default`)],16),e.$slots.footer?(g(),c(`div`,m({key:0,ref:s.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[A(e.$slots,`footer`)],16)):v(``,!0)],64))],16,J)),[[h]]):v(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,q)):v(``,!0)]}),_:3})}K.render=Y;var X=N.extend({name:`textarea`,style:`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-textarea p-component`,{"p-filled":t.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size===`small`,"p-textarea-lg p-inputfield-lg":n.size===`large`,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-textarea-fluid":t.$fluid}]}}}),ie={name:`BaseTextarea`,extends:L,props:{autoResize:Boolean},style:X,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function ae(e,t,n){return(t=oe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){var t=se(e,`string`);return Z(t)==`symbol`?t:t+``}function se(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Textarea`,extends:ie,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,t=parseInt(e)||0,n=this.$el.scrollHeight;t&&n<t?(this.$el.style.height=`auto`,this.$el.style.height=`${this.$el.scrollHeight}px`):(!t||n>t)&&(this.$el.style.height=`${n}px`)}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return m(this.ptmi(`root`,{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return F(ae({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))}}},ce=[`value`,`name`,`disabled`,`aria-invalid`,`data-p`];function le(e,t,n,r,i,a){return g(),c(`textarea`,m({class:e.cx(`root`),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":a.dataP,onInput:t[0]||=function(){return a.onInput&&a.onInput.apply(a,arguments)}},a.attrs),null,16,ce)}Q.render=le;var ue={class:`deputy`},de={class:`dashboard-container`},fe={class:`topbar`},pe={class:`user`},me={class:`dashboard-container`},he={class:`banner-header`},ge={class:`banner-content`},_e={class:`banner-description`},ve={class:`metrics-grid`},ye={class:`metric-card card-highlighted`},be={class:`metric-value`},xe={class:`metric-footnote`},Se={class:`metric-card`},Ce={class:`metric-value`},we={class:`metric-footnote`},Te={class:`metric-card`},Ee={class:`metric-value`},De={class:`metric-footnote`},Oe={class:`metric-card`},ke={class:`metric-value`},Ae={class:`dashboard-container`},je={class:`banner-container`},Me={class:`banner-header-bottom`},Ne={class:`title`},Pe={class:`cards-grid`},Fe={class:`card-body`},Ie={class:`left-section`},Le={class:`info`},Re={class:`call-id`},ze={class:`metrics`},Be={class:`duration`},Ve={key:0,class:`total font-bold text-green-600`},$={key:0,class:`drawer-content`},He={class:`drawer-section meta-info`},Ue={class:`audio-block`},We={controls:``,class:`w-full`},Ge=[`src`],Ke={class:`audio-block__info`},qe={class:`drawer-section checklist-section`},Je={class:`question-text`},Ye={class:`row-inputs`},Xe=[`onUpdate:modelValue`],Ze={class:`drawer-section manager-section`},Qe={class:`drawer-actions-bottom`},$e=_(b({__name:`Deputy`,setup(l){let u=i(),m=s(),h=ee(),_=t(!1),b=t(null),x=[{label:`Да`,value:`yes`},{label:`Нет`,value:`no`}],w=[`Оператор корректно поприветствовал клиента?`,`Оператор представился и назвал банк?`,`Потребность клиента была определена корректно?`,`Оператор предоставил полную и понятную информацию?`,`В речи отсутствовали ошибки и некорректные формулировки?`,`Оператор соблюдал стандарты делового общения?`,`Вопрос клиента был решён в рамках обращения?`,`Оператор корректно завершил разговор?`],T=t({checklist:w.map(e=>({question:e,answer:null,comment:``})),managerComment:``}),E=t({deputy_type:``,email:``,metrics:{total:0,completed:0,remaining:0,percent:0},calls:[]}),O=async()=>{try{m.role===`b2b`&&(E.value={deputy_type:`b2b`,email:`Deputy B2B`,batch:{review_week_start:`2026-09-14`,source_date_from:`2026-09-14`,source_date_to:`2026-09-20`},metrics:{total:3,completed:1,remaining:2,percent:33.3},calls:[{id:5,call_id:`DEMO-B2B-001`,role_code:`deputy_b2b`,direction:`Входящий`,topic:`Расчётный счёт компании`,operator_name:`Оператор Камил`,audio_file:`recordings/DEMO-B2B-001.mp3`,status:`completed`,score:100,completed_at:`2026-10-09T12:29:21.557693+00:00`,duration_seconds:250.77551,comment:`fdhfdh`,quality_points:8,quality_max_points:8,deputy_assignment_id:5,call_db_id:5,position_no:1,audio_status:`ready`,deputy_comment:`fdhfdh`,deputy_quality:100,monitoring_quality:null,monitoring_comment:``,monitoring_email:``},{id:6,call_id:`DEMO-B2B-002`,role_code:`deputy_b2b`,direction:`Исходящий`,topic:`Статус корпоративного платежа`,operator_name:`Оператор Малика`,audio_file:`recordings/DEMO-B2B-002.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:140.976,comment:``,quality_points:null,quality_max_points:null,deputy_assignment_id:6,call_db_id:6,position_no:2,audio_status:`ready`,deputy_comment:``,deputy_quality:null,monitoring_quality:null,monitoring_comment:``,monitoring_email:``},{id:7,call_id:`DEMO-B2B-003`,role_code:`deputy_b2b`,direction:`Исходящий`,topic:`Статус корпоративного платежа`,operator_name:`Оператор Ойбек`,audio_file:`recordings/DEMO-B2B-003.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:40.359,comment:``,quality_points:null,quality_max_points:null,deputy_assignment_id:6,call_db_id:6,position_no:3,audio_status:`ready`,deputy_comment:``,deputy_quality:null,monitoring_quality:null,monitoring_comment:``,monitoring_email:``}]}),m.role===`b2c`&&(E.value={deputy_type:`b2c`,email:`Deputy B2C`,batch:{review_week_start:`2026-09-14`,source_date_from:`2026-09-14`,source_date_to:`2026-09-20`},metrics:{total:2,completed:0,remaining:2,percent:0},calls:[{id:3,call_id:`DEMO-B2C-001`,role_code:`deputy_b2c`,direction:`Входящий`,topic:`Перевод между картами`,operator_name:`Оператор Диана`,audio_file:`recordings/DEMO-B2C-001.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:86.595918,comment:``,quality_points:null,quality_max_points:null,deputy_assignment_id:3,call_db_id:3,position_no:1,audio_status:`ready`,deputy_comment:``,deputy_quality:null,monitoring_quality:null,monitoring_comment:``,monitoring_email:``},{id:4,call_id:`DEMO-B2C-002`,role_code:`deputy_b2c`,direction:`Входящий`,topic:`Мобильное приложение`,operator_name:`Оператор Тимур`,audio_file:`recordings/DEMO-B2C-002.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:167.706122,comment:``,quality_points:null,quality_max_points:null,deputy_assignment_id:4,call_db_id:4,position_no:2,audio_status:`ready`,deputy_comment:``,deputy_quality:null,monitoring_quality:null,monitoring_comment:``,monitoring_email:``}]})}catch(e){console.error(`Не удалось загрузить данные дашборда:`,e)}};S(()=>{m.role.length||u.push(`/`),O()});let A=e=>{b.value=e,T.value.managerComment=e.monitoring_comment||``,T.value.checklist=w.map(e=>({question:e,answer:null,comment:``})),_.value=!0},M=()=>{h.add({severity:`success`,summary:`Сохранено`,detail:`Чек-лист успешно сохранен!`,life:5e3})},N=()=>{h.add({severity:`success`,summary:`Сохранено`,detail:`Комментарий руководителя сохранен!`,life:5e3})},P=()=>{h.add({severity:`success`,summary:`Проверка завершена`,detail:`Статус звонка успешно обновлен!`,life:5e3})},F=e=>{if(!e)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0`:``}${n}`},L=e=>{let t=e%10,n=e%100;return n>=11&&n<=19?`звонков`:t===1?`звонок`:t>=2&&t<=4?`звонка`:`звонков`},R=()=>{m.clearRole(),u.push(`/`)};return(t,i)=>(g(),c(`div`,ue,[f(e(ne)),C(`div`,de,[C(`header`,fe,[i[2]||=C(`div`,{class:`brand`},[C(`i`,{class:`pi pi-shield banner-icon`,style:{"font-size":`30px`,color:`#c5a880`}}),C(`div`,null,[C(`span`,null,`EXECUTIVE QUALITY REVIEW`),C(`b`,null,`Контроль качества клиентского сервиса`)])],-1),C(`div`,pe,[f(e(d),{label:`Выйти`,severity:`danger`,variant:`text`,class:`logout-btn`,onClick:R})])])]),C(`div`,me,[C(`div`,he,[C(`div`,ge,[i[3]||=C(`span`,{class:`banner-subtitle`},`ЕЖЕНЕДЕЛЬНАЯ КОНТРОЛЬНАЯ ВЫБОРКА`,-1),i[4]||=C(`h1`,{class:`banner-title`},[k(`Контроль качества`),C(`br`),k(`клиентского сервиса`)],-1),C(`p`,_e,n(E.value.metrics.total)+` `+n(L(E.value.metrics.total))+` · `+n(E.value.email),1)]),i[5]||=C(`div`,{class:`banner-logo-zone`},[C(`div`,{class:`logo-circle`},[C(`span`,{class:`logo-text`},`IQ`),C(`span`,{class:`logo-subtext`},`Infin Quality`)])],-1)]),C(`div`,ve,[C(`div`,ye,[i[6]||=C(`span`,{class:`metric-label`},`Выборка недели`,-1),C(`span`,be,n(E.value.metrics.total),1),C(`span`,xe,n(L(E.value.metrics.total)),1)]),C(`div`,Se,[i[7]||=C(`span`,{class:`metric-label`},`Проверено`,-1),C(`span`,Ce,n(E.value.metrics.completed),1),C(`span`,we,n(L(E.value.metrics.completed)),1)]),C(`div`,Te,[i[8]||=C(`span`,{class:`metric-label`},`Осталось`,-1),C(`span`,Ee,n(E.value.metrics.remaining),1),C(`span`,De,n(L(E.value.metrics.remaining)),1)]),C(`div`,Oe,[i[9]||=C(`span`,{class:`metric-label`},`Прогресс`,-1),C(`span`,ke,n(E.value.metrics.percent.toFixed(1))+`%`,1),i[10]||=C(`span`,{class:`metric-footnote`},`завершено`,-1)])])]),C(`div`,Ae,[C(`div`,je,[C(`div`,Me,[i[11]||=C(`span`,{class:`subtitle`},`КОНТРОЛЬНАЯ ВЫБОРКА`,-1),C(`h2`,Ne,n(E.value.metrics.total)+` `+n(L(E.value.metrics.total)),1)]),C(`div`,Pe,[(g(!0),c(p,null,o(E.value.calls,t=>(g(),D(e(I),{key:t.id,class:`call-card`},{content:j(()=>[C(`div`,Fe,[C(`div`,Ie,[C(`div`,{class:y([`icon-wrapper`,t.status===`completed`?`success`:`pending`])},[C(`i`,{class:y(t.status===`completed`?`pi pi-check-circle`:`pi pi-clock`)},null,2)],2),C(`div`,Le,[C(`h3`,null,n(t.operator_name),1),C(`span`,Re,`CallId: `+n(t.call_id),1),C(`div`,ze,[C(`span`,Be,n(F(t.duration_seconds)),1),t.status===`completed`&&t.deputy_quality!==null?(g(),c(`span`,Ve,` Итог: `+n(t.deputy_quality.toFixed(1))+`% `,1)):v(``,!0)])])]),f(e(d),{label:t.status===`completed`?`Посмотреть`:`Открыть проверку`,severity:`warn`,outlined:``,class:`action-btn`,onClick:e=>A(t)},null,8,[`label`,`onClick`])])]),_:2},1024))),128))])])]),f(e(K),{visible:_.value,"onUpdate:visible":i[1]||=e=>_.value=e,position:`right`,header:b.value?b.value.operator_name:``,class:`review-drawer`,style:{width:`700px`},pt:{header:{style:{background:`#092040`}},title:{style:{color:`#ffffff`}},closeButton:{style:{color:`#ffffff`}},content:{style:{background:` #f3f3f3`}}}},{default:j(()=>[b.value?(g(),c(`div`,$,[C(`div`,He,[C(`div`,Ue,[i[13]||=C(`label`,{class:`block font-bold`},`Аудиозапись:`,-1),C(`audio`,We,[C(`source`,{src:b.value.audio_file,type:`audio/mpeg`},null,8,Ge),i[12]||=k(` Ваш браузер не поддерживает аудиоэлемент. `,-1)])]),C(`div`,Ke,[C(`p`,null,[i[14]||=C(`strong`,null,`Оператор:`,-1),k(` `+n(b.value.operator_name),1)]),C(`p`,null,[i[15]||=C(`strong`,null,`CallId:`,-1),k(` `+n(b.value.call_id),1)])])]),C(`div`,qe,[i[16]||=C(`h3`,{class:`section-title`},`Демонстрационный чек-лист:`,-1),(g(!0),c(p,null,o(T.value.checklist,(t,i)=>(g(),c(`div`,{key:i,class:`checklist-row`},[C(`span`,Je,n(t.question),1),C(`div`,Ye,[f(e(te),{modelValue:t.answer,"onUpdate:modelValue":e=>t.answer=e,options:x,optionLabel:`label`,optionValue:`value`,placeholder:`Выберите ответ`,class:`answer-select`},null,8,[`modelValue`,`onUpdate:modelValue`]),r(C(`input`,{type:`text`,"onUpdate:modelValue":e=>t.comment=e,placeholder:`Комментарий`,class:`inline-comment-input`},null,8,Xe),[[a,t.comment]])])]))),128)),f(e(d),{label:`Сохранить чек-лист`,severity:`secondary`,class:`mt-3 finish-btn`,onClick:M})]),C(`div`,Ze,[i[17]||=C(`h3`,{class:`section-title`},`Комментарий руководителя`,-1),f(e(Q),{modelValue:T.value.managerComment,"onUpdate:modelValue":i[0]||=e=>T.value.managerComment=e,rows:`4`,autoResize:``,placeholder:`Введите ваш комментарий здесь...`,class:`w-full text-area`},null,8,[`modelValue`]),f(e(d),{label:`Сохранить комментарий`,severity:`secondary`,class:`mt-3 finish-btn`,onClick:N})]),C(`div`,Qe,[f(e(d),{label:`Завершить проверку`,severity:`warn`,class:`finish-btn`,onClick:P})])])):v(``,!0)]),_:1},8,[`visible`,`header`])]))}}),[[`__scopeId`,`data-v-8419b432`]]),et=b({__name:`DeputyView`,setup(e){return(e,t)=>(g(),c(`div`,null,[f($e)]))}});export{et as default};