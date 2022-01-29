(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{261:function(t,e,o){"use strict";var r=o(262);const n=function(t){t.directive("Sticky",r.a)};window.Vue&&Vue.use(n),r.a.install=n,e.a=r.a},262:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let o in e)e[o]&&!t.classList.contains(o)?t.classList.add(o):!e[o]&&t.classList.contains(o)&&t.classList.remove(o)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const o=this.getAttribute("sticky-offset")||{},r=this.getAttribute("sticky-side")||"top",n=this.getAttribute("sticky-z-index")||"10",c=this.getAttribute("on-stick")||null;this.options={topOffset:Number(o.top)||0,bottomOffset:Number(o.bottom)||0,shouldTopSticky:"top"===r||"both"===r,shouldBottomSticky:"bottom"===r||"both"===r,zIndex:n,onStick:c}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,o=this.options.topOffset,r=this.options.bottomOffset;return t<=o&&e>=r}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,o=this.options.topOffset;return t<=this.options.bottomOffset&&e>=o}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},o={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.top=r+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",o["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.bottom=r+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",o["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,o),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,o){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,o.context),t[namespace].doBind())},unbind(t,e,o){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,o){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,o.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},268:function(t,e,o){"use strict";o(29),o(16),o(21),o(40),o(41);var r=o(4),n=o(104),c=(o(154),o(153),o(64),o(12),o(52),o(53),o(81),o(65),o(103)),l=o(272),d=o(261),h=o(22),f=o(7),y=o(269);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{VueSlideToggle:c.a,VueTreeList:l.VueTreeList},directives:{Sticky:d.a},props:{sidebarClass:{type:String,default:"sidebar"},showFilterButton:{type:Boolean,default:!0}},data:function(){return{categories:[],featured:[],openState:new Array(100).fill(!0),prices:[0,1e3],priceSettings:{connect:!0,step:50,margin:100,range:{min:0,max:1e3},format:{from:Number,to:Number}},shopColors:y.c,shopSizes:y.e,shopBrands:y.b,priceReset:!0,loaded:!1,isSticky:!0}},watch:{$route:function(){console.log("this path is",this.$route),Object(h.e)(),this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3,this.priceReset=!1,this.$nextTick((function(){this.priceReset=!0}))}},created:function(){console.log("this path is",this.$route),this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3,this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},mounted:function(){var t=this;f.c.get("".concat(f.a,"/demo-").concat(f.b,"/shop/sidebar")).then((function(e){t.categories=e.data.categories,t.featured=e.data.featured,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},methods:{toggleSidebar:function(t){window.innerWidth>991?(t.currentTarget.closest(".shop-sidebar").classList.toggle("closed"),t.currentTarget.closest(".shop-sidebar").classList.contains("closed")&&"list"!==this.$route.query.type?t.currentTarget.closest(".page-content").querySelector(".product-wrapper").classList.add("cols-md-4"):t.currentTarget.closest(".page-content").querySelector(".product-wrapper").classList.remove("cols-md-4")):this.hideSidebar()},toggleState:function(t){var e=this,o=Object(n.a)(this.openState);o[t]=!o[t],this.openState=o,window.width>991&&this.$nextTick((function(){setTimeout((function(){e.$refs.stickySidebar["@@vue-sticky-directive"].update()}),140)}))},sizeFilterRoute:function(t){var e=this.$route.query.sizes?this.$route.query.sizes.split(","):[],o=e.indexOf(t.slug);return o>-1?e.splice(o,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{sizes:e.toString(),page:1})}},colorFilterRoute:function(t){var e=this.$route.query.colors?this.$route.query.colors.split(","):[],o=e.indexOf(t.slug);return o>-1?e.splice(o,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,colors:e.toString()})}},brandFilterRoute:function(t){var e=this.$route.query.brands?this.$route.query.brands.split(","):[],o=e.indexOf(t.slug);return o>-1?e.splice(o,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,brands:e.toString()})}},isActivedColor:function(t){return this.$route.query.colors&&this.$route.query.colors.split(",").includes(t.slug)},isActivedSize:function(t){return this.$route.query.sizes&&this.$route.query.sizes.split(",").includes(t.slug)},isActivedBrand:function(t){return this.$route.query.brands&&this.$route.query.brands.split(",").includes(t.slug)},resizeHandler:function(){this.isSticky=window.innerWidth>991,window.innerWidth>991&&this.hideSidebar()},hideSidebar:function(){"right-sidebar"===this.sidebarClass?document.querySelector("body").classList.remove("right-sidebar-active"):document.querySelector("body").classList.remove("sidebar-active")}}},k=o(2),component=Object(k.a)(S,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{class:"col-lg-3 sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper "+t.sidebarClass},[o("div",{staticClass:"sidebar-overlay",on:{click:t.hideSidebar}}),t._v(" "),o("a",{staticClass:"sidebar-close",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.hideSidebar.apply(null,arguments)}}},[o("i",{staticClass:"d-icon-times"})]),t._v(" "),t.loaded?o("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],ref:"stickySidebar",staticClass:"sidebar-content",attrs:{"sticky-offset":"{top: 0}"}},[t.showFilterButton?o("div",{staticClass:"filter-actions mb-4"},[o("a",{staticClass:"sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.toggleSidebar(e)}}},[t._v("Filter"),o("i",{class:"right-sidebar"===t.sidebarClass?"d-icon-arrow-right":"d-icon-arrow-left"})]),t._v(" "),o("nuxt-link",{staticClass:"filter-clean",attrs:{to:{path:t.$route.path,query:t.$route.query.type?{type:t.$route.query.type}:null}}},[t._v("Clean All")])],1):t._e(),t._v(" "),o("div",{class:"widget widget-collapsible "+(t.isSticky||t.showFilterButton?"":"border-no")},[o("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[0]},on:{click:function(e){return t.toggleState(0)}}},[t._v("\n\t\t\t\tAll Categories"),o("span",{staticClass:"toggle-btn"})]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.openState[0]}},[o("ul",{staticClass:"widget-body filter-items search-ul"},t._l(t.categories,(function(e,r){return o("li",{key:"sidebar-"+e.slug,class:{"with-ul":e.children,show:!t.openState[r+20]&&e.children}},[o("nuxt-link",{class:{active:e.slug===t.$route.query.category},attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+" ("+t._s(e.count)+")\n\t\t\t\t\t\t\t"),e.children?o("i",{staticClass:"fas fa-chevron-down",on:{click:function(e){return e.preventDefault(),t.toggleState(r+20)}}}):t._e()]),t._v(" "),e.children?o("vue-slide-toggle",{attrs:{open:!t.openState[r+20]}},[o("ul",t._l(e.children[0],(function(e){return o("li",{key:"sidebar-sub-"+e.slug},[o("nuxt-link",{attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v(t._s(e.name)+" ("+t._s(e.count)+")")])],1)})),0)]):t._e()],1)})),0)])],1),t._v(" "),o("div",{staticClass:"widget widget-collapsible"},[o("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[1]},on:{click:function(e){return t.toggleState(1)}}},[t._v("Filter by Price"),o("span",{staticClass:"toggle-btn"})]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.openState[1]}},[o("div",{staticClass:"widget-body mt-3"},[o("form",{attrs:{action:"#"}},[o("div",{staticClass:"filter-price-slider"},[t.priceReset?o("vue-nouislider",{attrs:{config:t.priceSettings,values:t.prices,id:"price-slider"}}):t._e()],1),t._v(" "),o("div",{staticClass:"filter-actions price-range-slider"},[o("div",{staticClass:"filter-price-text mb-4"},[t._v("Price: $"+t._s(t.prices[0])+" - $"+t._s(t.prices[1])+"\n\t\t\t\t\t\t\t\t"),o("span",{staticClass:"filter-price-range"})]),t._v(" "),o("nuxt-link",{staticClass:"btn btn-dark btn-filter btn-rounded",attrs:{type:"submit",to:{query:Object.assign({},t.$route.query,{max_price:t.prices[1],min_price:t.prices[0],page:1})}}},[t._v("Filter")])],1)])])])],1),t._v(" "),o("div",{staticClass:"widget widget-collapsible"},[o("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[2]},on:{click:function(e){return t.toggleState(2)}}},[t._v("Size"),o("span",{staticClass:"toggle-btn"})]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.openState[2]}},[o("ul",{staticClass:"widget-body filter-items"},t._l(t.shopSizes,(function(e,r){return o("li",{key:"size-filter"+r,class:{active:t.isActivedSize(e)}},[o("nuxt-link",{attrs:{to:t.sizeFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),o("div",{staticClass:"widget widget-collapsible"},[o("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[3]},on:{click:function(e){return t.toggleState(3)}}},[t._v("Color"),o("span",{staticClass:"toggle-btn"})]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.openState[3]}},[o("ul",{staticClass:"widget-body filter-items"},t._l(t.shopColors,(function(e,r){return o("li",{key:"color-filter"+r,class:{active:t.isActivedColor(e)}},[o("nuxt-link",{attrs:{to:t.colorFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),o("div",{staticClass:"widget widget-collapsible"},[o("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[4]},on:{click:function(e){return t.toggleState(4)}}},[t._v("Brand"),o("span",{staticClass:"toggle-btn"})]),t._v(" "),o("vue-slide-toggle",{attrs:{open:t.openState[4]}},[o("ul",{staticClass:"widget-body filter-items"},t._l(t.shopBrands,(function(e,r){return o("li",{key:"brand-filter"+r,class:{active:t.isActivedBrand(e)}},[o("nuxt-link",{attrs:{to:t.brandFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1)]):o("div",{key:"sidebar-content-skel",staticClass:"widget-2 mt-5 d-lg-show"})])}),[],!1,null,null,null);e.a=component.exports},334:function(t,e,o){"use strict";o.r(e);var r=o(276),n=o(278),c=o(268),l={components:{ShopBanner:r.a,SidebarFilterOne:c.a,ProductListOne:n.a}},d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"main skeleton-body"},[o("shop-banner"),t._v(" "),o("div",{staticClass:"page-content mb-10 pb-3"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row main-content-wrap gutter-lg"},[o("sidebar-filter-one"),t._v(" "),o("div",{staticClass:"col-lg-9 main-content"},[o("product-list-one")],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);