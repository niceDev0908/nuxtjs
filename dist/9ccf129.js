(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{282:function(t,e,r){"use strict";var c=r(104),o=(r(260),r(277)),l=r.n(o),d=r(259),n=r(7),m=r(258),v={components:{SwiperCarousel:d.a,LightBox:l.a},data:function(){return{baseUrl:n.a,baseSlider4:m.m,baseSlider18:m.j}},props:{product:Object},computed:{lightBoxMedia:function(){return this.product.large_pictures.reduce((function(t,e){return[].concat(Object(c.a)(t),[{src:"".concat(n.a).concat(e.url),thumb:"".concat(n.a).concat(e.url)}])}),[])}},mounted:function(){var t=this;this.$refs.mediaRef.mySwiper.on("transitionStart",(function(){var e=t.$refs.mediaRef.mySwiper.activeIndex;t.$refs.thumbRef.mySwiper.slideTo(e),t.$refs.thumbRef.mySwiper.$el.find(".swiper-wrapper").find(".product-thumb.active")[0].classList.remove("active"),t.$refs.thumbRef.mySwiper.$el.find(".swiper-wrapper").find(".product-thumb")[e].classList.add("active")})),this.$refs.lightBox.$on("onOpened",(function(){document.querySelector(".sticky-header.fixed")&&document.querySelector(".sticky-header.fixed").setAttribute("style","display: none"),document.querySelector(".main")&&document.querySelector(".main").setAttribute("style","z-index: 2000"),window.addEventListener("scroll",t.headerVisibleHandler,{passive:!0})})),this.$refs.lightBox.$on("onClosed",(function(){document.querySelector(".sticky-header")&&document.querySelector(".sticky-header").removeAttribute("style"),setTimeout((function(){document.querySelector(".main")&&document.querySelector(".main").removeAttribute("style")}),140),window.removeEventListener("scroll",t.headerVisibleHandler,{passive:!0})}))},methods:{activeThumb:function(t){this.$refs.mediaRef.mySwiper.slideTo(t),this.$refs.thumbRef.mySwiper.slideTo(t)},updatedThumb:function(){this.$refs.thumbRef.mySwiper.update()},openLightBox:function(){this.$refs.lightBox.showImage(this.$refs.mediaRef.mySwiper.activeIndex)},headerVisibleHandler:function(){document.querySelector(".sticky-header.fixed")?document.querySelector(".sticky-header.fixed")&&document.querySelector(".sticky-header.fixed").setAttribute("style","display: none"):document.querySelector(".sticky-header")&&document.querySelector(".sticky-header").removeAttribute("style")}}},h=r(2),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-gallery product-gallery-vertical product-gallery-sticky"},[r("swiper-carousel",{ref:"mediaRef",staticClass:"product-single-carousel swiper-theme swiper-nav-inner",attrs:{options:Object.assign({},t.baseSlider4,{spaceBetween:0,nav:!1})}},t._l(t.product.large_pictures,(function(e,c){return r("div",{key:"large-"+c,staticClass:"swiper-slide"},[r("figure",{staticClass:"product-image large-image"},[r("img",{staticClass:"w-100",attrs:{src:""+t.baseUrl+e.url,alt:"large-picture",width:e.width,height:e.height}})])])})),0),t._v(" "),r("a",{staticClass:"product-image-full",attrs:{href:"javascript:;"},on:{click:t.openLightBox}},[r("i",{staticClass:"d-icon-zoom"})]),t._v(" "),r("light-box",{ref:"lightBox",attrs:{media:t.lightBoxMedia,"show-light-box":!1}}),t._v(" "),r("div",{staticClass:"product-thumbs-wrap product-thumbs-two"},[r("swiper-carousel",{ref:"thumbRef",staticClass:"swiper-theme product-thumbs product-thumb-carousel swiper-nav-full",attrs:{options:t.baseSlider18},on:{resize:t.updatedThumb}},t._l(t.product.pictures,(function(e,c){return r("div",{key:"thumb-one-"+c,staticClass:"product-thumb swiper-slide",class:{active:0===c},on:{click:function(e){return t.activeThumb(c)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],attrs:{alt:"product thumbnail",width:e.width,height:e.height}})])})),0)],1),t._v(" "),r("div",{staticClass:"product-label-group"},[t.product.is_new?r("div",{staticClass:"product-label label-new"},[t._v("New")]):t._e(),t._v(" "),"0"===t.product.stock?r("div",{staticClass:"product-label label-stock"},[t._v("Out")]):t._e(),t._v(" "),t.product.is_top?r("div",{staticClass:"product-label label-top"},[t._v("Top")]):t._e(),t._v(" "),t.product.discount>0?r("div",{staticClass:"product-label label-sale"},[t.product.variants.length>0?[t._v("Sale")]:[t._v("-"+t._s(t.product.discount)+"%")]],2):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},368:function(t,e,r){"use strict";r.r(e);var c=r(282),o=r(293),l=r(266),d=r(271),n=r(259),m=r(7),v=r(258),h={components:{SwiperCarousel:n.a,MediaFive:c.a,DetailTwo:o.a,DescOne:l.a,RelatedProducts:d.a},data:function(){return{baseSlider17:v.i,product:null,loaded:!1,prev:null,next:null,related:[]}},created:function(){var t=this;this.loaded=!1,m.c.get("".concat(m.a,"/demo-").concat(m.b,"/product/").concat(this.$route.params.slug)).then((function(e){t.product=e.data.data,t.next=e.data.next,t.prev=e.data.prev,t.related=e.data.related,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))}},f=r(2),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main mt-6 single-product"},[t.loaded?r("div",{staticClass:"page-content mb-10 pb-6"},[t.product?r("div",{staticClass:"container"},[r("div",{staticClass:"product product-single row mb-8"},[r("div",{staticClass:"col-md-6"},[r("media-five",{staticClass:"pb-0",attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6 pt-6 pt-md-0"},[r("detail-two",{attrs:{product:t.product,prev:t.prev,next:t.next}})],1)]),t._v(" "),r("desc-one",{attrs:{product:t.product}}),t._v(" "),r("related-products",{staticClass:"pt-3 mt-10",attrs:{products:t.related}})],1):t._e()]):[r("div",{staticClass:"skeleton-body container mb-10"},[t._m(0),t._v(" "),r("div",{staticClass:"skel-pro-tabs"}),t._v(" "),r("section",{staticClass:"pt-3 mt-4"},[r("h2",{staticClass:"title justify-content-center"},[t._v("Related Products")]),t._v(" "),r("swiper-carousel",{staticClass:"skel-carousel swiper-theme swiper-nav-full related-products-carousel",attrs:{options:t.baseSlider17}},t._l([1,2,3,4,5,6],(function(t){return r("div",{key:"product-skel-"+t,staticClass:"swiper-slide product-loading-overlay"})})),0)],1)])]],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-7"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-pro-gallery"})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-pro-summary"})])])}],!1,null,null,null);e.default=component.exports}}]);