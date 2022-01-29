(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{261:function(t,e,r){"use strict";var o=r(262);const n=function(t){t.directive("Sticky",o.a)};window.Vue&&Vue.use(n),o.a.install=n,e.a=o.a},262:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let r in e)e[r]&&!t.classList.contains(r)?t.classList.add(r):!e[r]&&t.classList.contains(r)&&t.classList.remove(r)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const r=this.getAttribute("sticky-offset")||{},o=this.getAttribute("sticky-side")||"top",n=this.getAttribute("sticky-z-index")||"10",c=this.getAttribute("on-stick")||null;this.options={topOffset:Number(r.top)||0,bottomOffset:Number(r.bottom)||0,shouldTopSticky:"top"===o||"both"===o,shouldBottomSticky:"bottom"===o||"both"===o,zIndex:n,onStick:c}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,r=this.options.topOffset,o=this.options.bottomOffset;return t<=r&&e>=o}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,r=this.options.topOffset;return t<=this.options.bottomOffset&&e>=r}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},r={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.top=o+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",r["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const o=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;o<0&&(e.bottom=o+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",r["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,r),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,r){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,r.context),t[namespace].doBind())},unbind(t,e,r){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,r){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,r.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},268:function(t,e,r){"use strict";r(29),r(16),r(21),r(40),r(41);var o=r(4),n=r(104),c=(r(154),r(153),r(64),r(12),r(52),r(53),r(81),r(65),r(103)),l=r(272),d=r(261),h=r(22),f=r(7),y=r(269);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{VueSlideToggle:c.a,VueTreeList:l.VueTreeList},directives:{Sticky:d.a},props:{sidebarClass:{type:String,default:"sidebar"},showFilterButton:{type:Boolean,default:!0}},data:function(){return{categories:[],featured:[],openState:new Array(100).fill(!0),prices:[0,1e3],priceSettings:{connect:!0,step:50,margin:100,range:{min:0,max:1e3},format:{from:Number,to:Number}},shopColors:y.c,shopSizes:y.e,shopBrands:y.b,priceReset:!0,loaded:!1,isSticky:!0}},watch:{$route:function(){console.log("this path is",this.$route),Object(h.e)(),this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3,this.priceReset=!1,this.$nextTick((function(){this.priceReset=!0}))}},created:function(){console.log("this path is",this.$route),this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3,this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},mounted:function(){var t=this;f.c.get("".concat(f.a,"/demo-").concat(f.b,"/shop/sidebar")).then((function(e){t.categories=e.data.categories,t.featured=e.data.featured,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},methods:{toggleSidebar:function(t){window.innerWidth>991?(t.currentTarget.closest(".shop-sidebar").classList.toggle("closed"),t.currentTarget.closest(".shop-sidebar").classList.contains("closed")&&"list"!==this.$route.query.type?t.currentTarget.closest(".page-content").querySelector(".product-wrapper").classList.add("cols-md-4"):t.currentTarget.closest(".page-content").querySelector(".product-wrapper").classList.remove("cols-md-4")):this.hideSidebar()},toggleState:function(t){var e=this,r=Object(n.a)(this.openState);r[t]=!r[t],this.openState=r,window.width>991&&this.$nextTick((function(){setTimeout((function(){e.$refs.stickySidebar["@@vue-sticky-directive"].update()}),140)}))},sizeFilterRoute:function(t){var e=this.$route.query.sizes?this.$route.query.sizes.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{sizes:e.toString(),page:1})}},colorFilterRoute:function(t){var e=this.$route.query.colors?this.$route.query.colors.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,colors:e.toString()})}},brandFilterRoute:function(t){var e=this.$route.query.brands?this.$route.query.brands.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:m(m({},this.$route.query),{},{page:1,brands:e.toString()})}},isActivedColor:function(t){return this.$route.query.colors&&this.$route.query.colors.split(",").includes(t.slug)},isActivedSize:function(t){return this.$route.query.sizes&&this.$route.query.sizes.split(",").includes(t.slug)},isActivedBrand:function(t){return this.$route.query.brands&&this.$route.query.brands.split(",").includes(t.slug)},resizeHandler:function(){this.isSticky=window.innerWidth>991,window.innerWidth>991&&this.hideSidebar()},hideSidebar:function(){"right-sidebar"===this.sidebarClass?document.querySelector("body").classList.remove("right-sidebar-active"):document.querySelector("body").classList.remove("sidebar-active")}}},_=r(2),component=Object(_.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{class:"col-lg-3 sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper "+t.sidebarClass},[r("div",{staticClass:"sidebar-overlay",on:{click:t.hideSidebar}}),t._v(" "),r("a",{staticClass:"sidebar-close",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.hideSidebar.apply(null,arguments)}}},[r("i",{staticClass:"d-icon-times"})]),t._v(" "),t.loaded?r("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],ref:"stickySidebar",staticClass:"sidebar-content",attrs:{"sticky-offset":"{top: 0}"}},[t.showFilterButton?r("div",{staticClass:"filter-actions mb-4"},[r("a",{staticClass:"sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.toggleSidebar(e)}}},[t._v("Filter"),r("i",{class:"right-sidebar"===t.sidebarClass?"d-icon-arrow-right":"d-icon-arrow-left"})]),t._v(" "),r("nuxt-link",{staticClass:"filter-clean",attrs:{to:{path:t.$route.path,query:t.$route.query.type?{type:t.$route.query.type}:null}}},[t._v("Clean All")])],1):t._e(),t._v(" "),r("div",{class:"widget widget-collapsible "+(t.isSticky||t.showFilterButton?"":"border-no")},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[0]},on:{click:function(e){return t.toggleState(0)}}},[t._v("\n\t\t\t\tAll Categories"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[0]}},[r("ul",{staticClass:"widget-body filter-items search-ul"},t._l(t.categories,(function(e,o){return r("li",{key:"sidebar-"+e.slug,class:{"with-ul":e.children,show:!t.openState[o+20]&&e.children}},[r("nuxt-link",{class:{active:e.slug===t.$route.query.category},attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+" ("+t._s(e.count)+")\n\t\t\t\t\t\t\t"),e.children?r("i",{staticClass:"fas fa-chevron-down",on:{click:function(e){return e.preventDefault(),t.toggleState(o+20)}}}):t._e()]),t._v(" "),e.children?r("vue-slide-toggle",{attrs:{open:!t.openState[o+20]}},[r("ul",t._l(e.children[0],(function(e){return r("li",{key:"sidebar-sub-"+e.slug},[r("nuxt-link",{attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v(t._s(e.name)+" ("+t._s(e.count)+")")])],1)})),0)]):t._e()],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[1]},on:{click:function(e){return t.toggleState(1)}}},[t._v("Filter by Price"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[1]}},[r("div",{staticClass:"widget-body mt-3"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"filter-price-slider"},[t.priceReset?r("vue-nouislider",{attrs:{config:t.priceSettings,values:t.prices,id:"price-slider"}}):t._e()],1),t._v(" "),r("div",{staticClass:"filter-actions price-range-slider"},[r("div",{staticClass:"filter-price-text mb-4"},[t._v("Price: $"+t._s(t.prices[0])+" - $"+t._s(t.prices[1])+"\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"filter-price-range"})]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-dark btn-filter btn-rounded",attrs:{type:"submit",to:{query:Object.assign({},t.$route.query,{max_price:t.prices[1],min_price:t.prices[0],page:1})}}},[t._v("Filter")])],1)])])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[2]},on:{click:function(e){return t.toggleState(2)}}},[t._v("Size"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[2]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopSizes,(function(e,o){return r("li",{key:"size-filter"+o,class:{active:t.isActivedSize(e)}},[r("nuxt-link",{attrs:{to:t.sizeFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[3]},on:{click:function(e){return t.toggleState(3)}}},[t._v("Color"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[3]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopColors,(function(e,o){return r("li",{key:"color-filter"+o,class:{active:t.isActivedColor(e)}},[r("nuxt-link",{attrs:{to:t.colorFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[4]},on:{click:function(e){return t.toggleState(4)}}},[t._v("Brand"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[4]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopBrands,(function(e,o){return r("li",{key:"brand-filter"+o,class:{active:t.isActivedBrand(e)}},[r("nuxt-link",{attrs:{to:t.brandFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1)]):r("div",{key:"sidebar-content-skel",staticClass:"widget-2 mt-5 d-lg-show"})])}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,r){"use strict";r(29),r(16),r(21),r(40),r(41);var o=r(4),n=r(104),c=(r(154),r(153),r(64),r(12),r(52),r(53),r(81),r(65),r(103)),l=r(272),d=r(22),h=r(7),f=r(269);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{VueSlideToggle:c.a,VueTreeList:l.VueTreeList},props:{sidebarClass:{type:String,default:"sidebar"}},data:function(){return{categories:[],featured:[],openState:new Array(100).fill(!0),prices:[0,1e3],priceSettings:{connect:!0,step:50,margin:100,range:{min:0,max:1e3},format:{from:Number,to:Number}},shopColors:f.c,shopSizes:f.e,shopBrands:f.b,priceReset:!0,loaded:!1}},watch:{$route:function(){Object(d.e)(),this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3,this.priceReset=!1,this.$nextTick((function(){this.priceReset=!0}))}},created:function(){this.prices[0]=this.$route.query.min_price?parseInt(this.$route.query.min_price):0,this.prices[1]=this.$route.query.max_price?parseInt(this.$route.query.max_price):1e3},mounted:function(){var t=this;h.c.get("".concat(h.a,"/demo-").concat(h.b,"/shop/sidebar")).then((function(e){t.categories=e.data.categories,t.featured=e.data.featured,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},methods:{toggleSidebar:function(t){this.hideSidebar()},toggleState:function(t){var e=Object(n.a)(this.openState);e[t]=!e[t],this.openState=e},sizeFilterRoute:function(t){var e=this.$route.query.sizes?this.$route.query.sizes.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:v(v({},this.$route.query),{},{sizes:e.toString(),page:1})}},colorFilterRoute:function(t){var e=this.$route.query.colors?this.$route.query.colors.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:v(v({},this.$route.query),{},{page:1,colors:e.toString()})}},brandFilterRoute:function(t){var e=this.$route.query.brands?this.$route.query.brands.split(","):[],r=e.indexOf(t.slug);return r>-1?e.splice(r,1):e.push(t.slug),{path:this.$route.path,query:v(v({},this.$route.query),{},{page:1,brands:e.toString()})}},isActivedColor:function(t){return this.$route.query.colors&&this.$route.query.colors.split(",").includes(t.slug)},isActivedSize:function(t){return this.$route.query.sizes&&this.$route.query.sizes.split(",").includes(t.slug)},isActivedBrand:function(t){return this.$route.query.brands&&this.$route.query.brands.split(",").includes(t.slug)},hideSidebar:function(){"right-sidebar"===this.sidebarClass?document.querySelector("body").classList.remove("right-sidebar-active"):document.querySelector("body").classList.remove("sidebar-active")}}},S=r(2),component=Object(S.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"col-lg-3 sidebar shop-sidebar"},[r("div",{staticClass:"sidebar-overlay",on:{click:t.hideSidebar}}),t._v(" "),r("a",{staticClass:"sidebar-close",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.hideSidebar.apply(null,arguments)}}},[r("i",{staticClass:"d-icon-times"})]),t._v(" "),r("div",{staticClass:"sidebar-content"},[r("div",{staticClass:"filter-actions mb-4"},[r("a",{staticClass:"sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded",attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.toggleSidebar(e)}}},[t._v("Filter"),r("i",{class:"right-sidebar"===t.sidebarClass?"d-icon-arrow-right":"d-icon-arrow-left"})]),t._v(" "),r("nuxt-link",{staticClass:"filter-clean",attrs:{to:{path:t.$route.path,query:t.$route.query.type?{type:t.$route.query.type}:null}}},[t._v("Clean All")])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[0]},on:{click:function(e){return t.toggleState(0)}}},[t._v("\n\t\t\t\tAll Categories"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[0]}},[r("ul",{staticClass:"widget-body filter-items search-ul"},t._l(t.categories,(function(e,o){return r("li",{key:"sidebar-"+e.slug,class:{"with-ul":e.children,show:!t.openState[o+20]&&e.children}},[r("nuxt-link",{class:{active:e.slug===t.$route.query.category},attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+" ("+t._s(e.count)+")\n\t\t\t\t\t\t\t"),e.children?r("i",{staticClass:"fas fa-chevron-down",on:{click:function(e){return e.preventDefault(),t.toggleState(o+20)}}}):t._e()]),t._v(" "),e.children?r("vue-slide-toggle",{attrs:{open:!t.openState[o+20]}},[r("ul",t._l(e.children[0],(function(e){return r("li",{key:"sidebar-sub-"+e.slug},[r("nuxt-link",{attrs:{to:{query:{category:e.slug,type:t.$route.query.type}}}},[t._v(t._s(e.name)+" ("+t._s(e.count)+")")])],1)})),0)]):t._e()],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[1]},on:{click:function(e){return t.toggleState(1)}}},[t._v("Filter by Price"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[1]}},[r("div",{staticClass:"widget-body mt-3"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"filter-price-slider"},[t.priceReset?r("vue-nouislider",{attrs:{config:t.priceSettings,values:t.prices,id:"price-slider"}}):t._e()],1),t._v(" "),r("div",{staticClass:"filter-actions price-range-slider"},[r("div",{staticClass:"filter-price-text mb-4"},[t._v("Price: $"+t._s(t.prices[0])+" - $"+t._s(t.prices[1])+"\n\t\t\t\t\t\t\t\t"),r("span",{staticClass:"filter-price-range"})]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-dark btn-filter btn-rounded",attrs:{type:"submit",to:{query:Object.assign({},t.$route.query,{max_price:t.prices[1],min_price:t.prices[0],page:1})}}},[t._v("Filter")])],1)])])])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[2]},on:{click:function(e){return t.toggleState(2)}}},[t._v("Size"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[2]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopSizes,(function(e,o){return r("li",{key:"size-filter"+o,class:{active:t.isActivedSize(e)}},[r("nuxt-link",{attrs:{to:t.sizeFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[3]},on:{click:function(e){return t.toggleState(3)}}},[t._v("Color"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[3]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopColors,(function(e,o){return r("li",{key:"color-filter"+o,class:{active:t.isActivedColor(e)}},[r("nuxt-link",{attrs:{to:t.colorFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"widget widget-collapsible"},[r("h3",{staticClass:"widget-title",class:{collapsed:!t.openState[4]},on:{click:function(e){return t.toggleState(4)}}},[t._v("Brand"),r("span",{staticClass:"toggle-btn"})]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.openState[4]}},[r("ul",{staticClass:"widget-body filter-items"},t._l(t.shopBrands,(function(e,o){return r("li",{key:"brand-filter"+o,class:{active:t.isActivedBrand(e)}},[r("nuxt-link",{attrs:{to:t.brandFilterRoute(e)}},[t._v(t._s(e.name))])],1)})),0)])],1)])])}),[],!1,null,null,null);e.a=component.exports},373:function(t,e,r){"use strict";r.r(e);var o=r(276),n=r(278),c=r(268),l=r(295),d={components:{ShopBanner:o.a,SidebarFilterOne:c.a,SidebarFilterTwo:l.a,ProductListOne:n.a},data:function(){return{itemsPerRow:3}},created:function(){this.itemsPerRow=parseInt(this.$route.params.cols)}},h=r(2),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main skeleton-body"},[r("shop-banner"),t._v(" "),r("div",{staticClass:"page-content mb-10 pb-3"},[r("div",{class:t.itemsPerRow<6?"container":"container-fluid"},[r("div",{staticClass:"row main-content-wrap gutter-lg"},[t.itemsPerRow<5?r("sidebar-filter-one"):r("sidebar-filter-two"),t._v(" "),r("div",{staticClass:"main-content",class:{"col-lg-9":t.itemsPerRow<5}},[r("product-list-one",{attrs:{itemsPerRow:t.itemsPerRow}})],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);