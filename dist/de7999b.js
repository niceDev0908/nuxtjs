(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{371:function(t,e,r){"use strict";r.r(e);var c=r(304),l=r(292),d=r(266),o=r(271),n=r(259),v=r(7),m=r(258),C={components:{SwiperCarousel:n.a,MediaOne:c.a,DetailOne:l.a,DescOne:d.a,RelatedProducts:o.a},data:function(){return{baseSlider17:m.i,product:null,loaded:!1,prev:null,next:null,related:[]}},created:function(){var t=this;this.loaded=!1,v.c.get("".concat(v.a,"/demo-").concat(v.b,"/product/").concat(this.$route.params.slug)).then((function(e){t.product=e.data.data,t.next=e.data.next,t.prev=e.data.prev,t.related=e.data.related,t.loaded=!0})).catch((function(t){return{error:JSON.stringify(t)}}))}},_=r(2),component=Object(_.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main mt-8 single-product"},[t.loaded?r("div",{staticClass:"page-content mb-10 pb-6"},[t.product?r("div",{staticClass:"container"},[r("div",{staticClass:"product product-single row mb-7"},[r("div",{staticClass:"col-md-6"},[r("media-one",{staticClass:"pb-lg-0 pb-6",attrs:{product:t.product}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("detail-one",{attrs:{product:t.product,prev:t.prev,next:t.next,stickyCart:!0}})],1)]),t._v(" "),r("desc-one",{attrs:{product:t.product}}),t._v(" "),r("related-products",{staticClass:"pt-3 mt-10",attrs:{products:t.related}})],1):t._e()]):[r("div",{staticClass:"skeleton-body container mb-10"},[t._m(0),t._v(" "),r("div",{staticClass:"skel-pro-tabs"}),t._v(" "),r("section",{staticClass:"pt-3 mt-4"},[r("h2",{staticClass:"title justify-content-center"},[t._v("Related Products")]),t._v(" "),r("swiper-carousel",{staticClass:"skel-carousel swiper-theme swiper-nav-full related-products-carousel",attrs:{options:t.baseSlider17}},t._l([1,2,3,4,5,6],(function(t){return r("div",{key:"product-skel-"+t,staticClass:"swiper-slide product-loading-overlay"})})),0)],1)])]],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-7"},[r("div",{staticClass:"col-md-6 pg-vertical"},[r("div",{staticClass:"skel-pro-gallery"})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"skel-pro-summary"})])])}],!1,null,null,null);e.default=component.exports}}]);