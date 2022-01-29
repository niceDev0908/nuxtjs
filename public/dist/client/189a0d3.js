(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{261:function(t,e,o){"use strict";var n=o(262);const r=function(t){t.directive("Sticky",n.a)};window.Vue&&Vue.use(r),n.a.install=r,e.a=n.a},262:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,style={},e={})=>{for(let e in style)t.style[e]=style[e];for(let o in e)e[o]&&!t.classList.contains(o)?t.classList.add(o):!e[o]&&t.classList.contains(o)&&t.classList.remove(o)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const o=this.getAttribute("sticky-offset")||{},n=this.getAttribute("sticky-side")||"top",r=this.getAttribute("sticky-z-index")||"10",l=this.getAttribute("on-stick")||null;this.options={topOffset:Number(o.top)||0,bottomOffset:Number(o.bottom)||0,shouldTopSticky:"top"===n||"both"===n,shouldBottomSticky:"bottom"===n||"both"===n,zIndex:r,onStick:l}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick((()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach((t=>{const e=this.update.bind(this);this.unsubscribers.push((()=>window.removeEventListener(t,e))),this.unsubscribers.push((()=>this.containerEl.removeEventListener(t,e))),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})}))}))}doUnbind(){this.unsubscribers.forEach((t=>t())),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame((()=>{this.isPending=!1,this.recomputeState(),this.updateElements()})),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,o=this.options.topOffset,n=this.options.bottomOffset;return t<=o&&e>=n}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,o=this.options.topOffset;return t<=this.options.bottomOffset&&e>=o}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},o={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const n=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;n<0&&(e.top=n+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",o["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const n=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;n<0&&(e.bottom=n+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",o["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,o),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach((t=>{this.el.style.removeProperty(t)})),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,o){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,o.context),t[namespace].doBind())},unbind(t,e,o){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,o){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,o.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},264:function(t,e,o){"use strict";var n={methods:{tabClicked:function(t){if(t.target.classList.contains("nav-link")||t.target.classList.contains("link-to-tab")){t.preventDefault();var e=t.target;if(e.closest(".tab").querySelector(".nav-link.active").classList.remove("active"),e.classList.contains("nav-link"))e.classList.add("active");else for(var o=e.closest(".tab").querySelectorAll(".nav-link"),i=0;i<o.length;i++)o[i].getAttribute("href")===e.getAttribute("href")&&o[i].classList.add("active");var n=t.target.closest(".tab").querySelector(e.getAttribute("href"));n.parentNode.querySelector(".tab-pane.active").classList.remove("active"),n.classList.add("active"),setTimeout((function(){n.parentNode.querySelector(".tab-pane.active").classList.remove("active"),n.classList.add("active")}),150)}}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{click:function(e){return t.tabClicked(e)}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},266:function(t,e,o){"use strict";o(260),o(17);var n={components:{ElementTabs:o(264).a},props:{product:Object,isDivider:!0},data:function(){return{vSizes:[],vColors:[]}},mounted:function(){var t=this;this.product.variants.length>0&&(this.product.variants[0].size&&this.product.variants.forEach((function(e){t.vSizes.find((function(t){return t===e.size.name}))||t.vSizes.push(e.size.name)})),this.product.variants[0].color&&this.product.variants.forEach((function(e){t.vColors.find((function(t){return t===e.color.name}))||t.vColors.push(e.color.name)})))},methods:{setRating:function(t){t.currentTarget.parentNode.querySelector(".active")&&t.currentTarget.parentNode.querySelector(".active").classList.remove("active"),t.currentTarget.classList.add("active")},openVideoModal:function(t){t.preventDefault(),this.$modal.show((function(){return o.e(76).then(o.bind(null,376))}),{slug:t.currentTarget.getAttribute("href")},{width:"1000",height:"auto",adaptive:!0,class:"video-modal-container"})}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab tab-nav-simple product-tabs"},[o("element-tabs",[o("ul",{staticClass:"nav nav-tabs justify-content-center"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link active",attrs:{href:"#product-tab-description"}},[t._v("Description")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#product-tab-additional"}},[t._v("Additional information")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#product-tab-size-guide"}},[t._v("Size Guide")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#product-tab-reviews"}},[t._v("Reviews ("+t._s(t.product.reviews)+")")])])])]),t._v(" "),o("div",{staticClass:"tab-content"},[o("div",{staticClass:"tab-pane active in",attrs:{id:"product-tab-description"}},[o("div",{staticClass:"row mt-6"},[t._m(0),t._v(" "),o("div",{staticClass:"col-md-6 pl-md-6 pt-4 pt-md-0"},[o("h5",{staticClass:"description-title font-weight-semi-bold mb-5 ls-m"},[t._v("Video Description\n\t\t\t\t\t")]),t._v(" "),o("figure",{staticClass:"p-relative d-inline-block mb-2"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/product-video.jpg",expression:"'./images/product-video.jpg'"}],attrs:{width:"559",height:"370",alt:"Product"}}),t._v(" "),o("a",{staticClass:"btn-play btn-iframe",attrs:{title:"video play button",href:"/uploads/video_55464b5474.mp4"},on:{click:function(e){return t.openVideoModal(e)}}},[o("i",{staticClass:"d-icon-play-solid"})])]),t._v(" "),o("div",{staticClass:"icon-box-wrap d-flex flex-wrap"},[t._m(1),t._v(" "),t.isDivider?o("div",{staticClass:"divider d-xl-show mr-10"}):t._e()])])])]),t._v(" "),o("div",{staticClass:"tab-pane",attrs:{id:"product-tab-additional"}},[o("ul",{staticClass:"list-none"},[o("li",[o("label",[t._v("Categories:")]),t._v(" "),t._l(t.product.product_categories,(function(e,n){return o("p",{key:"cat-"+e.name},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)),n<t.product.product_categories.length-1?[t._v(", ")]:t._e()],2)}))],2),t._v(" "),t.product.brands.length>0?o("li",[o("label",[t._v("Brands:")]),t._v(" "),t._l(t.product.brands,(function(e,n){return o("p",{key:"brand-"+e.name},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)),n<t.product.brands.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e(),t._v(" "),t.vColors.length>0?o("li",[o("label",[t._v("Color:")]),t._v(" "),t._l(t.vColors,(function(e,n){return o("p",{key:"desc-color-"+e},[t._v("\n\t\t\t\t\t\t"+t._s(e)),n<t.vColors.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e(),t._v(" "),t.vSizes.length>0?o("li",[o("label",[t._v("Size:")]),t._v(" "),t._l(t.vSizes,(function(e,n){return o("p",{key:"desc-size-"+n},[t._v("\n\t\t\t\t\t\t"+t._s(e)),n<t.vSizes.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e()])]),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"tab-pane ",attrs:{id:"product-tab-reviews"}},[t.product.reviews>0?o("div",{staticClass:"comments mb-8 pt-2 pb-2 border-no"},[o("ul",t._l([1,2,3,4].slice(0,t.product.reviews),(function(e){return o("li",{key:"comment-"+e},[o("div",{staticClass:"comment"},[o("figure",{staticClass:"comment-media"},[o("a",{attrs:{href:"javascript:;"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/blog/comments/"+e+".jpg",expression:"`./images/blog/comments/${item}.jpg`"}],attrs:{alt:"avatar"}})])]),t._v(" "),o("div",{staticClass:"comment-body"},[o("div",{staticClass:"comment-rating ratings-container mb-0"},[o("div",{staticClass:"ratings-full"},[o("span",{staticClass:"ratings",style:{width:20*t.product.ratings+"%"}}),t._v(" "),o("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t._f("priceFormat")(t.product.ratings)))])])]),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0)])])])})),0)]):o("p",[t._v("\n\t\t\t\tThere are no reviews yet.\n\t\t\t")]),t._v(" "),o("div",{staticClass:"reply"},[t._m(5),t._v(" "),o("div",{staticClass:"rating-form"},[o("label",{staticClass:"text-dark",attrs:{for:"rating"}},[t._v("Your rating * ")]),t._v(" "),o("span",{staticClass:"rating-stars selected"},t._l([1,2,3,4,5],(function(e){return o("a",{key:"rating"+e,class:"star-"+e,attrs:{href:"javascript:;"},on:{click:function(e){return t.setRating(e)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t")])})),0),t._v(" "),t._m(6)]),t._v(" "),t._m(7)])])])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-6"},[o("h5",{staticClass:"description-title mb-4 font-weight-semi-bold ls-m"},[t._v("Features")]),t._v(" "),o("p",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t\tPraesent id enim sit amet.Tdio vulputate eleifend in in tortor.\n\t\t\t\t\t\tellus massa. siti iMassa ristique sit amet condim vel, facilisis\n\t\t\t\t\t\tquimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id\n\t\t\t\t\t\tenim sit amet.\n\t\t\t\t\t")]),t._v(" "),o("ul",{staticClass:"mb-8"},[o("li",[t._v("Praesent id enim sit amet.Tdio vulputate")]),t._v(" "),o("li",[t._v("Eleifend in in tortor. ellus massa.Dristique sitii")]),t._v(" "),o("li",[t._v("Massa ristique sit amet condim vel")]),t._v(" "),o("li",[t._v("Dilisis Facilisis quis sapien. Praesent id enim sit amet")])]),t._v(" "),o("h5",{staticClass:"description-title mb-3 font-weight-semi-bold ls-m"},[t._v("Specifications\n\t\t\t\t\t")]),t._v(" "),o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("th",{staticClass:"font-weight-semi-bold text-dark pl-0"},[t._v("Material")]),t._v(" "),o("td",{staticClass:"pl-4"},[t._v("Praesent id enim sit amet.Tdio")])]),t._v(" "),o("tr",[o("th",{staticClass:"font-weight-semi-bold text-dark pl-0"},[t._v("Claimed Size")]),t._v(" "),o("td",{staticClass:"pl-4"},[t._v("Praesent id enim sit")])]),t._v(" "),o("tr",[o("th",{staticClass:"font-weight-semi-bold text-dark pl-0"},[t._v("Recommended Use\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("td",{staticClass:"pl-4"},[t._v("Praesent id enim sit amet.Tdio vulputate eleifend\n\t\t\t\t\t\t\t\t\tin in tortor. ellus massa. siti")])]),t._v(" "),o("tr",[o("th",{staticClass:"font-weight-semi-bold text-dark border-no pl-0"},[t._v("\n\t\t\t\t\t\t\t\t\tManufacturer")]),t._v(" "),o("td",{staticClass:"border-no pl-4"},[t._v("Praesent id enim")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icon-box-wrap d-flex flex-wrap"},[o("div",{staticClass:"icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10"},[o("div",{staticClass:"icon-box-icon"},[o("i",{staticClass:"d-icon-lock"})]),t._v(" "),o("div",{staticClass:"icon-box-content"},[o("h4",{staticClass:"icon-box-title lh-1 pt-1 ls-s text-normal"},[t._v("2 year\n\t\t\t\t\t\t\t\t\t\twarranty")]),t._v(" "),o("p",[t._v("Guarantee with no doubt")])])]),t._v(" "),o("div",{staticClass:"divider d-xl-show mr-10"}),t._v(" "),o("div",{staticClass:"icon-box icon-box-side icon-border pt-2 pb-2 mb-4"},[o("div",{staticClass:"icon-box-icon"},[o("i",{staticClass:"d-icon-truck"})]),t._v(" "),o("div",{staticClass:"icon-box-content"},[o("h4",{staticClass:"icon-box-title lh-1 pt-1 ls-s text-normal"},[t._v("Free shipping\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),o("p",[t._v("On orders over $50.00")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-pane ",attrs:{id:"product-tab-size-guide"}},[o("figure",{staticClass:"size-image mt-4 mb-4"},[o("img",{attrs:{src:"images/product-size.png",alt:"Size Guide Image",width:"217",height:"398"}})]),t._v(" "),o("figure",{staticClass:"size-table mt-4 mb-4"},[o("table",[o("thead",[o("tr",[o("th",[t._v("SIZE")]),t._v(" "),o("th",[t._v("CHEST(IN.)")]),t._v(" "),o("th",[t._v("WEIST(IN.)")]),t._v(" "),o("th",[t._v("HIPS(IN.)")])])]),t._v(" "),o("tbody",[o("tr",[o("th",[t._v("XS")]),t._v(" "),o("td",[t._v("34-36")]),t._v(" "),o("td",[t._v("27-29")]),t._v(" "),o("td",[t._v("34.5-36.5")])]),t._v(" "),o("tr",[o("th",[t._v("S")]),t._v(" "),o("td",[t._v("36-38")]),t._v(" "),o("td",[t._v("29-31")]),t._v(" "),o("td",[t._v("36.5-38.5")])]),t._v(" "),o("tr",[o("th",[t._v("M")]),t._v(" "),o("td",[t._v("38-40")]),t._v(" "),o("td",[t._v("31-33")]),t._v(" "),o("td",[t._v("38.5-40.5")])]),t._v(" "),o("tr",[o("th",[t._v("L")]),t._v(" "),o("td",[t._v("40-42")]),t._v(" "),o("td",[t._v("33-36")]),t._v(" "),o("td",[t._v("40.5-43.5")])]),t._v(" "),o("tr",[o("th",[t._v("XL")]),t._v(" "),o("td",[t._v("42-45")]),t._v(" "),o("td",[t._v("36-40")]),t._v(" "),o("td",[t._v("43.5-47.5")])]),t._v(" "),o("tr",[o("th",[t._v("XXL")]),t._v(" "),o("td",[t._v("45-48")]),t._v(" "),o("td",[t._v("40-44")]),t._v(" "),o("td",[t._v("47.5-51.5")])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-user"},[o("span",{staticClass:"comment-date text-body"},[t._v("September 22, 2020 at 9:42\n\t\t\t\t\t\t\t\t\t\tpm")]),t._v(" "),o("h4",[o("a",{attrs:{href:"javascript:;"}},[t._v("John Doe")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-content"},[o("p",[t._v("Sed pretium, ligula sollicitudin laoreet viverra, tortor\n\t\t\t\t\t\t\t\t\t\tlibero sodales leo,\n\t\t\t\t\t\t\t\t\t\teget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.\n\t\t\t\t\t\t\t\t\t\tSuspendisse potenti.\n\t\t\t\t\t\t\t\t\t\tSed egestas, ante et vulputate volutpat, eros pede semper\n\t\t\t\t\t\t\t\t\t\test, vitae luctus metus libero eu augue.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title-wrapper text-left"},[o("h3",{staticClass:"title title-simple text-left text-normal"},[t._v("Add a Review")]),t._v(" "),o("p",[t._v("Your email address will not be published. Required fields are marked *")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("select",{staticStyle:{display:"none"},attrs:{name:"rating",id:"rating",required:""}},[o("option",{attrs:{value:""}},[t._v("Rate…")]),t._v(" "),o("option",{attrs:{value:"5"}},[t._v("Perfect")]),t._v(" "),o("option",{attrs:{value:"4"}},[t._v("Good")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Average")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Not that bad")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Very poor")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:"#"}},[o("textarea",{staticClass:"form-control mb-4",attrs:{id:"reply-message",cols:"30",rows:"6",placeholder:"Comment *",required:""}}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 mb-5"},[o("input",{staticClass:"form-control",attrs:{type:"text",id:"reply-name",name:"reply-name",placeholder:"Name *",required:""}})]),t._v(" "),o("div",{staticClass:"col-md-6 mb-5"},[o("input",{staticClass:"form-control",attrs:{type:"email",id:"reply-email",name:"reply-email",placeholder:"Email *",required:""}})])]),t._v(" "),o("div",{staticClass:"form-checkbox mb-4"},[o("input",{staticClass:"custom-checkbox",attrs:{type:"checkbox",id:"signin-remember",name:"signin-remember"}}),t._v(" "),o("label",{staticClass:"form-control-label",attrs:{for:"signin-remember"}},[t._v("\n\t\t\t\t\t\t\tSave my name, email, and website in this browser for the next time I\n\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t")])]),t._v(" "),o("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"submit"}},[t._v("Submit"),o("i",{staticClass:"d-icon-arrow-right"})])])}],!1,null,null,null);e.a=component.exports},331:function(t,e,o){"use strict";o.r(e);var n=o(261),r=o(104),l=(o(31),o(277)),c=o.n(l),d=o(7),v={components:{LightBox:c.a},data:function(){return{baseUrl:d.a}},props:{product:Object},computed:{lightBoxMedia:function(){return this.product.large_pictures.slice(0,5).reduce((function(t,e){return[].concat(Object(r.a)(t),[{src:"".concat(d.a).concat(e.url),thumb:"".concat(d.a).concat(e.url)}])}),[])}},methods:{openLightBox:function(t){this.$refs.lightBox.showImage(t)}}},m=o(2),h=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-gallery row"},[o("figure",{staticClass:"product-image mb-4"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.product.large_pictures[0].url,expression:"`${baseUrl}${product.large_pictures[0].url}`"}],attrs:{alt:"product masonry image",width:t.product.large_pictures[0].width,height:t.product.large_pictures[0].height}}),t._v(" "),o("a",{staticClass:"product-image-full",attrs:{href:"javascript:;"},on:{click:function(e){return t.openLightBox(0)}}},[o("i",{staticClass:"d-icon-zoom"})])]),t._v(" "),t._l(t.product.large_pictures.slice(1,5),(function(e,n){return o("div",{key:"image"+n,class:"thumb-pictures "+((n+1)%4<2?"col-sm-4":"col-sm-8")},[o("figure",{staticClass:"product-image mb-4"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],attrs:{alt:"product masonry image",width:e.width,height:e.height}}),t._v(" "),o("a",{staticClass:"product-image-full",attrs:{href:"javascript:;"},on:{click:function(e){return t.openLightBox(n+1)}}},[o("i",{staticClass:"d-icon-zoom"})])])])})),t._v(" "),o("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}}),t._v(" "),o("div",{staticClass:"product-label-group d-block"},[t.product.is_new?o("div",{staticClass:"product-label label-new"},[t._v("New")]):t._e(),t._v(" "),"0"===t.product.stock?o("div",{staticClass:"product-label label-stock"},[t._v("Out")]):t._e(),t._v(" "),t.product.is_top?o("div",{staticClass:"product-label label-top"},[t._v("Top")]):t._e(),t._v(" "),t.product.discount>0?o("div",{staticClass:"product-label label-sale"},[t.product.variants.length>0?[t._v("Sale")]:[t._v("-"+t._s(t.product.discount)+"%")]],2):t._e()])],2)}),[],!1,null,null,null).exports,_=o(296),f=o(266),C=o(271),y=o(259),k=o(258),w={components:{SwiperCarousel:y.a,MediaThree:h,DetailThree:_.a,DescOne:f.a,RelatedProducts:C.a},directives:{Sticky:n.a},data:function(){return{baseSlider17:k.i,product:null,loaded:!1,prev:null,next:null,related:[],isSticky:!1}},created:function(){var t=this;this.loaded=!1,d.c.get("".concat(d.a,"/demo-").concat(d.b,"/product/").concat(this.$route.params.slug)).then((function(e){t.product=e.data.data,t.next=e.data.next,t.prev=e.data.prev,t.related=e.data.related,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{resizeHandler:function(){this.isSticky=window.innerWidth>991}}},x=Object(m.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"main mt-6 single-product product-layout-masonry"},[t.loaded?o("div",{staticClass:"page-content mb-10 pb-6"},[t.product?o("div",{staticClass:"container"},[o("div",{staticClass:"product product-single row mb-2"},[o("div",{staticClass:"col-md-6"},[o("media-three",{attrs:{product:t.product}})],1),t._v(" "),o("div",{staticClass:"col-md-6",attrs:{"sticky-container":""}},[o("detail-three",{directives:[{name:"sticky",rawName:"v-sticky",value:t.isSticky,expression:"isSticky"}],attrs:{"sticky-offset":"{top: 85}",product:t.product,prev:t.prev,next:t.next}})],1)]),t._v(" "),o("related-products",{staticClass:"pt-3 mt-10",attrs:{products:t.related}})],1):t._e()]):[o("div",{staticClass:"skeleton-body container mb-10"},[t._m(0),t._v(" "),o("section",{staticClass:"pt-3 mt-4"},[o("h2",{staticClass:"title justify-content-center"},[t._v("Related Products")]),t._v(" "),o("swiper-carousel",{staticClass:"skel-carousel swiper-theme swiper-nav-full related-products-carousel",attrs:{options:t.baseSlider17}},t._l([1,2,3,4,5,6],(function(t){return o("div",{key:"product-skel-"+t,staticClass:"swiper-slide product-loading-overlay"})})),0)],1)])]],2)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row mb-2"},[o("div",{staticClass:"col-md-6 product-masonry-type"},[o("div",{staticClass:"skel-pro-gallery"})]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"skel-pro-summary mt-4 mt-md-0"}),t._v(" "),o("div",{staticClass:"skel-pro-tabs"})])])}],!1,null,null,null);e.default=x.exports}}]);