import{$ as e,An as t,Cn as n,D as r,Dn as i,G as a,L as o,Pn as s,Tn as c,Wt as l,X as u,Xt as d,Z as f,Zt as p,_n as ee,a as m,an as h,bn as g,bt as _,c as v,cn as y,en as b,f as x,fn as S,gt as C,hn as w,i as T,in as E,jn as D,l as O,ln as k,lt as te,mn as ne,n as A,nn as j,rn as M,sn as N,tn as re,tt as P,vn as F,vt as I,wn as L,xn as R,xt as z,yt as B}from"./usetoast-CzXqAWTc.js";import{t as ie}from"./toast-BMGEU798.js";import{t as ae}from"./chevronright-D5Hx6zGz.js";import{t as V}from"./chevronleft-BDKli-Xk.js";var H=z.extend({name:`tabs`,style:`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,classes:{root:function(e){return[`p-tabs p-component`,{"p-tabs-scrollable":e.props.scrollable}]}}}),U={name:`Tabs`,extends:{name:`BaseTabs`,extends:_,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:H,provide:function(){return{$pcTabs:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},isVertical:function(){return this.orientation===`vertical`}}};function W(e,t,n,r,i,a){return w(),h(`div`,S({class:e.cx(`root`)},e.ptmi(`root`)),[F(e.$slots,`default`)],16)}U.render=W;var G=z.extend({name:`tablist`,classes:{root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`}}),K={name:`TabList`,extends:{name:`BaseTabList`,extends:_,props:{},style:G,provide:function(){return{$pcTabList:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar(),this.bindInkBarObserver()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar(),e.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=f(e)-t,r=Math.abs(e.scrollLeft)-n*.8,i=Math.max(r,0);e.scrollLeft=P(e)?-1*i:i},onNextButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=f(e)-t,r=Math.abs(e.scrollLeft)+n*.8,i=e.scrollWidth-n,a=Math.min(r,i);e.scrollLeft=P(e)?-1*a:a},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var e=this;this.unbindInkBarObserver();var t=this.$refs.content,n=I(t,`[data-pc-name="tab"][data-p-active="true"]`);n&&(this.inkBarObserver=new ResizeObserver(function(){return e.updateInkBar()}),this.inkBarObserver.observe(n))},unbindInkBarObserver:function(){var e;(e=this.inkBarObserver)==null||e.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,n=e.inkbar,r=e.tabs;if(n){var i=I(t,`[data-pc-name="tab"][data-p-active="true"]`);this.$pcTabs.isVertical()?(n.style.height=o(i)+`px`,n.style.top=a(i).top-a(r).top+`px`):(n.style.width=C(i)+`px`,n.style.left=a(i).left-a(r).left+`px`)}},updateButtonState:function(){var t=this.$refs,n=t.list,r=t.content,i=r.scrollTop,a=r.scrollWidth,o=r.scrollHeight,s=r.offsetWidth,c=r.offsetHeight,l=Math.abs(r.scrollLeft),u=[f(r),e(r)],d=u[0],p=u[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=c&&parseInt(i)!==o-p):(this.isPrevButtonEnabled=l!==0,this.isNextButtonEnabled=n.offsetWidth>=s&&parseInt(l)!==a-d)},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return B({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:V,ChevronRightIcon:ae},directives:{ripple:x}},q=[`data-p`],J=[`aria-label`,`tabindex`],oe=[`data-p`],se=[`aria-orientation`],ce=[`aria-label`,`tabindex`];function le(e,t,n,r,i,a){var o=g(`ripple`);return w(),h(`div`,S({ref:`list`,class:e.cx(`root`),"data-p":a.dataP},e.ptmi(`root`)),[a.showNavigators&&i.isPrevButtonEnabled?c((w(),h(`button`,S({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(w(),M(R(a.templates.previcon||`ChevronLeftIcon`),S({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,J)),[[o]]):E(``,!0),j(`div`,S({ref:`content`,class:e.cx(`content`),onScroll:t[1]||=function(){return a.onScroll&&a.onScroll.apply(a,arguments)},"data-p":a.dataP},e.ptm(`content`)),[j(`div`,S({ref:`tabs`,class:e.cx(`tabList`),role:`tablist`,"aria-orientation":a.$pcTabs.orientation||`horizontal`},e.ptm(`tabList`)),[F(e.$slots,`default`),j(`span`,S({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16,se)],16,oe),a.showNavigators&&i.isNextButtonEnabled?c((w(),h(`button`,S({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(w(),M(R(a.templates.nexticon||`ChevronRightIcon`),S({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,ce)),[[o]]):E(``,!0)],16,q)}K.render=le;var ue=z.extend({name:`tab`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}}}),Y={name:`Tab`,extends:{name:`BaseTab`,extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:ue,provide:function(){return{$pcTab:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e)}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?u(t,`data-p-disabled`)||u(t,`data-pc-section`)===`activebar`?this.findNextTab(t):I(t,`[data-pc-name="tab"]`):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?u(t,`data-p-disabled`)||u(t,`data-pc-section`)===`activebar`?this.findPrevTab(t):I(t,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){te(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){return r(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},ariaControls:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},attrs:function(){return S(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return B({active:this.active})}},directives:{ripple:x}};function de(e,t,n,r,i,a){var o=g(`ripple`);return e.asChild?F(e.$slots,`default`,{key:1,dataP:a.dataP,class:D(e.cx(`root`)),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):c((w(),M(R(e.as),S({key:0,class:e.cx(`root`),"data-p":a.dataP,onClick:a.onClick},a.attrs),{default:L(function(){return[F(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[o]])}Y.render=de;var fe=z.extend({name:`tabpanels`,classes:{root:`p-tabpanels`}}),X={name:`TabPanels`,extends:{name:`BaseTabPanels`,extends:_,props:{},style:fe,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},inheritAttrs:!1};function pe(e,t,n,r,i,a){return w(),h(`div`,S({class:e.cx(`root`),role:`presentation`},e.ptmi(`root`)),[F(e.$slots,`default`)],16)}X.render=pe;var me=z.extend({name:`tabpanel`,classes:{root:function(e){return[`p-tabpanel`,{"p-tabpanel-active":e.instance.active}]}}}),Z={name:`TabPanel`,extends:{name:`BaseTabPanel`,extends:_,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:me,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],computed:{active:function(){return r(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},ariaLabelledby:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},attrs:function(){return S(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcTabs?.tabindex,role:`tabpanel`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`tabpanel`,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function he(e,t,n,r,i,a){var o,s;return a.$pcTabs?(w(),h(b,{key:1},[e.asChild?F(e.$slots,`default`,{key:1,class:D(e.cx(`root`)),active:a.active,a11yAttrs:a.a11yAttrs}):(w(),h(b,{key:0},[!((o=a.$pcTabs)!=null&&o.lazy)||a.active?c((w(),M(R(e.as),S({key:0,class:e.cx(`root`)},a.attrs),{default:L(function(){return[F(e.$slots,`default`)]}),_:3},16,[`class`])),[[p,(s=a.$pcTabs)!=null&&s.lazy?!0:a.active]]):E(``,!0)],64))],64)):F(e.$slots,`default`,{key:0})}Z.render=he;var ge=z.extend({name:`progressbar`,style:`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,classes:{root:function(e){var t=e.instance;return[`p-progressbar p-component`,{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:`p-progressbar-value`,label:`p-progressbar-label`}}),Q={name:`ProgressBar`,extends:{name:`BaseProgressBar`,extends:_,props:{value:{type:Number,default:null},mode:{type:String,default:`determinate`},showValue:{type:Boolean,default:!0}},style:ge,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+`%`,display:`flex`}},indeterminate:function(){return this.mode===`indeterminate`},determinate:function(){return this.mode===`determinate`},dataP:function(){return B({determinate:this.determinate,indeterminate:this.indeterminate})}}},_e=[`aria-valuenow`,`data-p`],ve=[`data-p`],ye=[`data-p`],be=[`data-p`];function xe(e,t,n,r,i,a){return w(),h(`div`,S({role:`progressbar`,class:e.cx(`root`),"aria-valuemin":`0`,"aria-valuenow":e.value,"aria-valuemax":`100`,"data-p":a.dataP},e.ptmi(`root`)),[a.determinate?(w(),h(`div`,S({key:0,class:e.cx(`value`),style:a.progressStyle,"data-p":a.dataP},e.ptm(`value`)),[e.value!=null&&e.value!==0&&e.showValue?(w(),h(`div`,S({key:0,class:e.cx(`label`),"data-p":a.dataP},e.ptm(`label`)),[F(e.$slots,`default`,{},function(){return[N(s(e.value+`%`),1)]})],16,ye)):E(``,!0)],16,ve)):a.indeterminate?(w(),h(`div`,S({key:1,class:e.cx(`value`),"data-p":a.dataP},e.ptm(`value`)),null,16,be)):E(``,!0)],16,_e)}Q.render=xe;var Se={class:`deputy`},Ce={class:`dashboard-container`},we={class:`topbar`},Te={class:`user`},Ee={class:`dashboard-container`},De={class:`banner-header`},Oe={class:`banner-content`},ke={class:`banner-title`},Ae={class:`banner-description`},je={class:`dashboard-container pt-3`},Me={key:0,class:`empty-state`},Ne={key:1,class:`call-card`},Pe={class:`call-meta-info`},$={class:`call-meta-info__left`},Fe={class:`call-meta-info__top`},Ie={class:`call-meta-info__right`},Le={class:`call-meta-info__right`},Re={class:`audio-block`},ze=[`onTimeupdate`],Be=[`src`],Ve={class:`progress-container`},He={class:`comment-action-section form-layout`},Ue={class:`action-buttons`},We={class:`manager-comment-block`},Ge=[`onUpdate:modelValue`],Ke=T(k({__name:`Monitoring`,setup(e){let r=l(),a=m(),o=A(),u=i({calls:[],assigned_count:0,active_count:0,completed_count:0,total:0,percent:0}),f=i(`active`),p=async e=>{try{e===`active`&&(u.value={calls:[{id:1,call_id:`DEMO-MON-001`,role_code:`monitoring`,direction:`Исходящий`,topic:`Уточнение по заявке`,operator_name:`Оператор Бекзод`,audio_file:`recordings/DEMO-MON-001.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:181.342041,comment:``,quality_points:null,quality_max_points:null,file_name:`DEMO-MON-001`,external_call_id:`DEMO-MON-001`,listening_source:`site`,assignment_source:`automatic`,quality_score:null,listened_seconds:0,listened_percent:21},{id:2,call_id:`DEMO-MON-002`,role_code:`monitoring`,direction:`Исходящий`,topic:`Уточнение по заявке`,operator_name:`Оператор Али`,audio_file:`recordings/DEMO-MON-002.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:25.173587,comment:`test comments`,quality_points:null,quality_max_points:null,file_name:`DEMO-MON-002`,external_call_id:`DEMO-MON-002`,listening_source:`site`,assignment_source:`automatic`,quality_score:null,listened_seconds:0,listened_percent:63}],assigned_count:2,active_count:2,completed_count:0,total:2,percent:50}),e===`completed`&&(u.value={calls:[{id:3,call_id:`DEMO-MON-003`,role_code:`monitoring`,direction:`Входящий`,topic:`Вопрос по банковской карте`,operator_name:`Оператор Анна`,audio_file:`recordings/DEMO-MON-003.mp3`,status:`completed`,score:6.8,completed_at:`2026-10-09T12:31:54.548955+00:00`,duration_seconds:55.562449,comment:`Оператор Анна проверено и завершено маладец`,quality_points:6.5,quality_max_points:95,file_name:`DEMO-MON-003`,external_call_id:`DEMO-MON-003`,listening_source:`site`,assignment_source:`automatic`,quality_score:6.8,listened_seconds:55.49,listened_percent:100}],assigned_count:1,active_count:0,completed_count:1,total:1,percent:100}),e===`history`&&(u.value={calls:[{id:1,call_id:`DEMO-MON-001`,role_code:`monitoring`,direction:`Исходящий`,topic:`Уточнение по заявке`,operator_name:`Оператор Бекзод`,audio_file:`recordings/DEMO-MON-001.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:181.342041,comment:``,quality_points:null,quality_max_points:null,file_name:`DEMO-MON-001`,external_call_id:`DEMO-MON-001`,listening_source:`site`,assignment_source:`automatic`,quality_score:null,listened_seconds:0,listened_percent:21},{id:2,call_id:`DEMO-MON-002`,role_code:`monitoring`,direction:`Исходящий`,topic:`Уточнение по заявке`,operator_name:`Оператор Али`,audio_file:`recordings/DEMO-MON-002.mp3`,status:`pending`,score:null,completed_at:null,duration_seconds:25.173587,comment:`test comments`,quality_points:null,quality_max_points:null,file_name:`DEMO-MON-002`,external_call_id:`DEMO-MON-002`,listening_source:`site`,assignment_source:`automatic`,quality_score:null,listened_seconds:0,listened_percent:63},{id:3,call_id:`DEMO-MON-003`,role_code:`monitoring`,direction:`Входящий`,topic:`Вопрос по банковской карте`,operator_name:`Оператор Анна`,audio_file:`recordings/DEMO-MON-003.mp3`,status:`completed`,score:6.8,completed_at:`2026-10-09T12:31:54.548955+00:00`,duration_seconds:55.562449,comment:`Оператор Анна проверено и завершено маладец`,quality_points:6.5,quality_max_points:95,file_name:`DEMO-MON-003`,external_call_id:`DEMO-MON-003`,listening_source:`site`,assignment_source:`automatic`,quality_score:6.8,listened_seconds:55.49,listened_percent:100}],assigned_count:3,active_count:2,completed_count:1,total:3,percent:60})}catch(e){console.error(`Ошибка при загрузке звонков:`,e)}};ne(()=>{a.role.length?p(f.value):r.push(`/`)});let g=e=>e.toFixed(1),_=e=>{if(!e.comment.length){o.add({severity:`warn`,summary:`Внимание!`,detail:`Поле "Комментарий менеджера" не должен быть пустым`,life:5e3});return}o.add({severity:`success`,summary:`Ваша комментария успешно сохранено!`,life:5e3})},x=e=>{e.listened_percent=100,e.status=`completed`,o.add({severity:`success`,summary:`Успешно завершено!`,life:5e3})},S=(e,t)=>{let n=e.target;if(!n||!t.duration_seconds)return;t.listened_seconds=parseFloat(n.currentTime.toFixed(1));let r=n.currentTime/t.duration_seconds*100;t.listened_percent=parseFloat(r.toFixed(1))},C=()=>{a.clearRole(),r.push(`/`)},T=re(()=>u.value.calls);return n(f,e=>{p(e)}),(e,n)=>(w(),h(`div`,Se,[y(t(ie)),j(`div`,Ce,[j(`header`,we,[n[2]||=j(`div`,{class:`brand`},[j(`i`,{class:`pi pi-shield banner-icon`,style:{"font-size":`30px`,color:`#c5a880`}}),j(`div`,null,[j(`span`,null,`Контроль качества звонков`),j(`b`,null,`Прослушивание, оценка качества и комментарии сотрудников`)])],-1),j(`div`,Te,[y(t(v),{label:`Выйти`,severity:`danger`,variant:`text`,class:`logout-btn`,onClick:C})])])]),j(`div`,Ee,[j(`div`,De,[j(`div`,Oe,[n[3]||=j(`span`,{class:`banner-subtitle`},`Пользователь:`,-1),j(`h1`,ke,s(t(a).role),1),j(`p`,Ae,`В списке: `+s(u.value.assigned_count),1)]),n[4]||=j(`div`,{class:`banner-logo-zone`},[j(`div`,{class:`logo-circle`},[j(`span`,{class:`logo-text`},`IQ`),j(`span`,{class:`logo-subtext`},`Infin Quality`)])],-1)])]),j(`div`,je,[y(t(U),{value:f.value,"onUpdate:value":n[1]||=e=>f.value=e},{default:L(()=>[y(t(K),null,{default:L(()=>[y(t(Y),{value:`active`},{default:L(()=>[n[5]||=j(`span`,null,`На проверке`,-1),f.value===`active`?(w(),M(t(O),{key:0,value:u.value.active_count,severity:`warn`,style:{marginLeft:`10px`}},null,8,[`value`])):E(``,!0)]),_:1}),y(t(Y),{value:`completed`},{default:L(()=>[n[6]||=j(`span`,null,`Завершённые`,-1),f.value===`completed`?(w(),M(t(O),{key:0,value:u.value.completed_count,severity:`success`,style:{marginLeft:`10px`}},null,8,[`value`])):E(``,!0)]),_:1}),y(t(Y),{value:`history`},{default:L(()=>[n[7]||=j(`span`,null,`Все звонки`,-1),f.value===`history`?(w(),M(t(O),{key:0,value:u.value.total,style:{backgroundColor:`#0f4496`,color:`#fff`,marginLeft:`10px`}},null,8,[`value`])):E(``,!0)]),_:1})]),_:1}),y(t(X),null,{default:L(()=>[y(t(Z),{value:f.value,"onUpdate:value":n[0]||=e=>f.value=e},{default:L(()=>[T.value.length?(w(),h(`div`,Ne,[(w(!0),h(b,null,ee(T.value,e=>(w(),h(`div`,{key:e.id,class:`call-card-container`},[j(`div`,Pe,[j(`div`,$,[j(`div`,Fe,[j(`h4`,null,s(e.call_id),1),e.status===`completed`?(w(),M(t(O),{key:0,value:`Завершён`,severity:`success`})):E(``,!0)]),j(`div`,Ie,[j(`p`,null,[n[8]||=j(`strong`,null,`ID:`,-1),N(` `+s(e.id),1)]),j(`p`,null,[n[9]||=j(`strong`,null,`Длительность:`,-1),N(` `+s(g(e.duration_seconds))+` сек.`,1)]),j(`p`,null,[n[10]||=j(`strong`,null,`Оператор:`,-1),N(` `+s(e.operator_name),1)])])]),j(`div`,Le,[j(`p`,null,[n[11]||=j(`strong`,null,`Тема:`,-1),N(` `+s(e.topic),1)]),j(`p`,null,[n[12]||=j(`strong`,null,`Прослушано:`,-1),N(` `+s(e.listened_percent)+`% (`+s(e.listened_seconds)+` / `+s(g(e.duration_seconds))+` сек.) `,1)])])]),j(`div`,Re,[j(`audio`,{controls:``,preload:`metadata`,onTimeupdate:t=>S(t,e),class:`w-full mb-2`},[j(`source`,{src:e.audio_file,type:`audio/mpeg`},null,8,Be),n[13]||=N(` Ваш браузер не поддерживает аудиоэлемент. `,-1)],40,ze),j(`div`,Ve,[y(t(Q),{value:e.listened_percent},{default:L(()=>[N(s(e.listened_percent)+`% `,1)]),_:2},1032,[`value`])])]),j(`div`,He,[j(`div`,Ue,[j(`div`,We,[n[14]||=j(`label`,null,`Комментарий менеджера:`,-1),c(j(`textarea`,{"onUpdate:modelValue":t=>e.comment=t,placeholder:`Введите комментарий по результатам проверки звонка...`,rows:`1`,autoResize:``,class:`manager-textarea`},null,8,Ge),[[d,e.comment]])]),y(t(v),{label:`Сохранить`,icon:`pi pi-save`,class:`btn-save-custom`,disabled:e.listened_percent===100,onClick:t=>_(e)},null,8,[`disabled`,`onClick`]),y(t(v),{label:`Завершить`,icon:`pi pi-check`,severity:`success`,disabled:e.listened_percent===100,onClick:t=>x(e)},null,8,[`disabled`,`onClick`])])])]))),128))])):(w(),h(`div`,Me,` Нет звонков на проверке `))]),_:1},8,[`value`])]),_:1})]),_:1},8,[`value`])])]))}}),[[`__scopeId`,`data-v-6123b82f`]]),qe=k({__name:`MonitoringView`,setup(e){return(e,t)=>(w(),h(`div`,null,[y(Ke)]))}});export{qe as default};