(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{258:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"k",(function(){return c})),r.d(t,"l",(function(){return d})),r.d(t,"m",(function(){return w})),r.d(t,"n",(function(){return v})),r.d(t,"o",(function(){return h})),r.d(t,"p",(function(){return P})),r.d(t,"q",(function(){return f})),r.d(t,"r",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return V})),r.d(t,"e",(function(){return k})),r.d(t,"f",(function(){return C})),r.d(t,"g",(function(){return x})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return j})),r.d(t,"j",(function(){return $})),r.d(t,"w",(function(){return D})),r.d(t,"x",(function(){return E})),r.d(t,"s",(function(){return L})),r.d(t,"v",(function(){return S})),r.d(t,"t",(function(){return B})),r.d(t,"u",(function(){return z}));var n,l=r(4),o={nav:!0,slidesPerView:4,breakpoints:{575:{slidesPerView:1},767:{slidesPerView:2},991:{slidesPerView:3}}},c={slidesPerView:5,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{479:{slidesPerView:1},767:{slidesPerView:2},991:{slidesPerView:3},1199:{slidesPerView:4}}},d={slidesPerView:3,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{575:{slidesPerView:1},991:{slidesPerView:2}}},w={slidesPerView:1,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"}},v={slidesPerView:1,pagination:{el:".swiper-dots",clickable:!0},spaceBetween:20},h={slidesPerView:5,breakpoints:{575:{slidesPerView:2},991:{slidesPerView:3},1199:{slidesPerView:4}}},P={slidesPerView:6,spaceBetween:0,breakpoints:{0:{slidesPerView:2},575:{slidesPerView:3},767:{slidesPerView:4},991:{slidesPerView:5},1199:{slidesPerView:6}}},f={slidesPerView:3,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{575:{slidesPerView:1},767:{slidesPerView:2}}},m={slidesPerView:4,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{575:{slidesPerView:1},767:{slidesPerView:2},991:{slidesPerView:3}}},y={slidesPerView:3,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{767:{slidesPerView:1},991:{slidesPerView:2}}},_={slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-dots",clickable:!0}},V={slidesPerView:2,pagination:{el:".swiper-dots",clickable:!0},breakpoints:{991:{slidesPerView:1}}},k={slidesPerView:4,spaceBetween:10,direction:"vertical",slideToClickedSlide:!0,fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},breakpoints:{991:{direction:"horizontal",slidesPerView:4},1024:{slidesPerView:3.1,direction:"vertical"},1050:{slidesPerView:3.3,direction:"vertical"},1100:{slidesPerView:3.4,direction:"vertical"},1160:{slidesPerView:3.6,direction:"vertical"},1199:{slidesPerView:3.8,direction:"vertical"},1400:{slidesPerView:3.9,direction:"vertical"}}},C={slidesPerView:5,spaceBetween:2,breakpoints:{767:{slidesPerView:2},991:{slidesPerView:3},1199:{slidesPerView:4,pagination:{el:".swiper-dots",clickable:!0}}}},x={slidesPerView:4,breakpoints:{767:{slidesPerView:2},991:{slidesPerView:3}}},O={slidesPerView:6,loop:!0,breakpoints:{575:{slidesPerView:2},767:{slidesPerView:3},991:{slidesPerView:4},1199:{slidesPerView:5}}},j=(n={slidesPerView:4,pagination:!1},Object(l.a)(n,"pagination",{el:".swiper-dots",clickable:!0}),Object(l.a)(n,"breakpoints",{767:{slidesPerView:2},991:{slidesPerView:3}}),n),$={slidesPerView:4,pagination:!1,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},spaceBetween:10},D={slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-dots",clickable:!0}},E={slidesPerView:3,spaceBetween:0,breakpoints:{575:{slidesPerView:1},767:{slidesPerView:2,loop:!0}}},L={slidesPerView:4,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},breakpoints:{767:{slidesPerView:2},991:{slidesPerView:3}}},S={slidesPerView:5,navigation:{nextEl:".swiper-nav .swiper-next",prevEl:".swiper-nav .swiper-prev"},pagination:{el:".swiper-dots",clickable:!0},breakpoints:{767:{slidesPerView:2},991:{slidesPerView:3},1199:{slidesPerView:4}}},B={slidesPerView:3,breakpoints:{575:{slidesPerView:1},991:{slidesPerView:2}}},z={slidesPerView:6,breakpoints:{575:{slidesPerView:2},767:{slidesPerView:3},991:{slidesPerView:4},1199:{slidesPerView:5}}}},259:function(e,t,r){"use strict";var n={loop:!1,scrollbar:{draggable:!1},spaceBetween:20,slidesPerView:1,watchSlidesVisibility:!0,clickable:!0,navIcon:{prev:"d-icon-angle-left",next:"d-icon-angle-right"},isCustomNav:!1},l={props:{options:Object},data:function(){return{sliderOption:Object.assign({},n,this.options),isNavDisabled:!1,isDotDisabled:!1}},mounted:function(){this.updateCarousel()},methods:{updateCarousel:function(){var e=this.$refs.myCarousel.querySelector(".swiper-dots");e&&(e.querySelectorAll(".swiper-pagination-bullet").length<=1?this.isDotDisabled=!0:this.isDotDisabled=!1)}}},o=r(2),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"swiper-carousel"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.sliderOption,expression:"sliderOption",arg:"mySwiper"}],ref:"myCarousel",on:{resize:e.updateCarousel}},[r("div",{staticClass:"swiper-wrapper"},[e._t("default")],2),e._v(" "),e.sliderOption.navigation?r("div",{staticClass:"swiper-nav",class:{disabled:e.isNavDisabled}},[r("button",{staticClass:"swiper-prev",attrs:{type:"button",role:"presentation"}},[r("i",{class:e.sliderOption.navIcon.prev})]),e._v(" "),r("button",{staticClass:"swiper-next",attrs:{type:"button",role:"presentation"}},[r("i",{class:e.sliderOption.navIcon.next})])]):e._e(),e._v(" "),e.sliderOption.pagination?r("div",{staticClass:"swiper-dots swiper-pagination-bullets",class:{disabled:e.isDotDisabled}}):e._e()])])}),[],!1,null,null,null);t.a=component.exports},265:function(e,t,r){"use strict";r(153);var n={props:{totalPage:Number},watch:{$route:function(){this.getIndexList()},totalPage:function(){this.getIndexList()}},data:function(){return{maxShowCount:7,distance:2,min:0,max:0,page:1,indexList:[]}},created:function(){this.getIndexList()},methods:{getIndexList:function(){this.indexList=[],this.page=this.$route.query.page?this.$route.query.page:1,this.min=Math.max(this.page-this.distance,2),this.max=Math.min(this.page+this.distance,this.totalPage-1);for(var i=this.min;i<=this.max;i++)this.indexList[i-this.min+1]=i;this.indexList[0]=1,this.indexList[this.max-this.min+2]=this.totalPage}}},l=r(2),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.indexList&&e.totalPage>1?r("ul",{staticClass:"pagination"},[r("li",{staticClass:"page-item",class:e.page<2?"disabled":""},[e.page>1?r("nuxt-link",{staticClass:"page-link page-link-prev",attrs:{to:{query:Object.assign({},e.$route.query,{page:parseInt(e.page)-1})}}},[r("i",{staticClass:"d-icon-arrow-left"}),e._v("Prev\n\t\t")]):r("a",{staticClass:"page-link page-link-prev",attrs:{href:"javascript:;"}},[r("i",{staticClass:"d-icon-arrow-left"}),e._v("Prev\n\t\t")])],1),e._v(" "),e._l(e.indexList,(function(t,n){return[1===n&&t>2?[r("span",{key:"pagination-dot-"+n,staticClass:"page-item dots"},[e._v("...")]),e._v(" "),r("li",{key:"pagination"+n,staticClass:"page-item",class:e.page===t?"active":""},[e.page===t?r("a",{staticClass:"page-link",attrs:{href:"javascript:;"}},[e._v(e._s(t))]):r("nuxt-link",{staticClass:"page-link",attrs:{to:{query:Object.assign({},e.$route.query,{page:t})}}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])],1)]:n===e.indexList.length-2&&t+1<e.totalPage?[r("li",{key:"pagination"+n,staticClass:"page-item",class:e.page===t?"active":""},[e.page===t?r("a",{staticClass:"page-link",attrs:{href:"javascript:;"}},[e._v(e._s(t))]):r("nuxt-link",{staticClass:"page-link",attrs:{to:{query:Object.assign({},e.$route.query,{page:t})}}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])],1),e._v(" "),r("span",{key:"pagination-dot-"+n,staticClass:"page-item dots"},[e._v("...")])]:[r("li",{key:"pagination"+n,staticClass:"page-item",class:e.page===t?"active":""},[e.page===t?r("a",{staticClass:"page-link",attrs:{href:"javascript:;"}},[e._v(e._s(t))]):r("nuxt-link",{staticClass:"page-link",attrs:{to:{query:Object.assign({},e.$route.query,{page:t})}}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])],1)]]})),e._v(" "),r("li",{staticClass:"page-item",class:e.page>e.totalPage-1?"disabled":""},[e.page<e.totalPage?r("nuxt-link",{staticClass:"page-link page-link-next",attrs:{to:{query:Object.assign({},e.$route.query,{page:parseInt(e.page)+1})}}},[e._v("\n\t\t\tNext"),r("i",{staticClass:"d-icon-arrow-right"})]):r("a",{staticClass:"page-link page-link-next",attrs:{href:"javascript:;"}},[e._v("Next"),r("i",{staticClass:"d-icon-arrow-right"})])],1)],2):e._e()}),[],!1,null,null,null);t.a=component.exports},288:function(e,t,r){"use strict";var n=r(259),l=r(7),o=r(22),c=r(258),d={components:{SwiperCarousel:n.a},props:{post:Object,isOriginal:{type:Boolean,default:!1},showCalendar:{type:Boolean,default:!0}},data:function(){return{baseUrl:l.a,baseSlider11:c.c}},computed:{date:function(){return new Date(this.post.date)}},methods:{playVideoHandler:function(e){Object(o.d)(e)}}},w=r(2),component=Object(w.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"post post-mask gradient",class:{"post-video":"video"===e.post.type}},[r("figure",{class:"post-media "+("gallery"===e.post.type?"":"overlay-zoom")},["gallery"===e.post.type||e.isOriginal?e._e():r("nuxt-link",{attrs:{to:"/blog/single/"+e.post.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.baseUrl+e.post.pictures[0].url,expression:"`${baseUrl}${post.pictures[0].url}`"}],attrs:{width:e.post.pictures[0].width,height:e.post.pictures[0].height,alt:"post"}})]),e._v(" "),"gallery"!==e.post.type&&e.isOriginal?r("nuxt-link",{attrs:{to:"/blog/single/"+e.post.slug}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.baseUrl+e.post.large_pictures[0].url,expression:"`${baseUrl}${post.large_pictures[0].url}`"}],attrs:{width:e.post.large_pictures[0].width,height:e.post.large_pictures[0].height,alt:"post"}})]):e._e(),e._v(" "),"gallery"!==e.post.type||e.isOriginal?e._e():r("swiper-carousel",{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{options:e.baseSlider11}},e._l(e.post.pictures,(function(t){return r("div",{key:"post-one-"+t.url,staticClass:"swiper-slide"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.baseUrl+t.url,expression:"`${baseUrl}${item.url}`"}],attrs:{width:t.width,height:t.height,alt:"post"}})])})),0),e._v(" "),"gallery"===e.post.type&&e.isOriginal?r("swiper-carousel",{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{options:e.baseSlider11}},e._l(e.post.large_pictures,(function(t){return r("div",{key:"post-one-"+t.url,staticClass:"swiper-slide"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.baseUrl+t.url,expression:"`${baseUrl}${item.url}`"}],attrs:{width:t.width,height:t.height,alt:"post"}})])})),0):e._e(),e._v(" "),"video"===e.post.type?[r("span",{staticClass:"video-play",on:{click:function(t){return e.playVideoHandler(t)}}}),e._v(" "),r("video",{attrs:{width:"380"}},[r("source",{attrs:{src:""+e.baseUrl+e.post.video.url}})])]:e._e(),e._v(" "),e.showCalendar?r("div",{staticClass:"post-calendar"},[r("span",{staticClass:"post-day"},[e._v(e._s(e.date.getDate()))]),e._v(" "),r("span",{staticClass:"post-month"},[e._v(e._s(new Intl.DateTimeFormat("en-Us",{month:"short"}).format(e.date)))])]):e._e()],2),e._v(" "),r("div",{staticClass:"post-details"},[r("div",{staticClass:"post-meta"},[e._v("\n\t\t\ton "),r("a",{staticClass:"post-date",attrs:{href:"javascript:;"}},[e._v(e._s(e.date.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})))]),e._v("\n\t\t\t| "),r("a",{staticClass:"post-comment",attrs:{href:"javascript:;"}},[r("span",[e._v(e._s(e.post.comments))]),e._v(" Comments")])]),e._v(" "),r("h4",{staticClass:"post-title"},[r("nuxt-link",{attrs:{to:"/blog/single/"+e.post.slug}},[e._v(e._s(e.post.title))])],1),e._v(" "),r("nuxt-link",{staticClass:"btn btn-link btn-underline btn-white",attrs:{to:"/blog/single/"+e.post.slug}},[e._v("Read More"),r("i",{staticClass:"d-icon-arrow-right"})])],1)])}),[],!1,null,null,null);t.a=component.exports},362:function(e,t,r){"use strict";r.r(t);r(29),r(16),r(21),r(40),r(41);var n=r(4),l=r(294),o=r.n(l),c=r(288),d=r(265),w=r(7),menu=r(49);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={components:{isotope:o.a,PostFour:c.a,Pagination:d.a},data:function(){return{posts:null,category:"all",total:0,page:1,itemsPerPage:9,loaded:!1,totalPage:null,filterList:menu.a,counts:{},isotopeOptions:{itemSelector:".grid-item",layoutMode:"masonry",masonry:{columnWidth:".grid-sizer"}}}},computed:{catList:function(){var text="";return menu.a.forEach((function(e){text=text.concat(e.slug,",")})),text}},watch:{$route:function(){this.getBlog()}},created:function(){this.getBlog()},methods:{getBlog:function(){var e=this;this.loaded=!1,this.posts=null,this.category=this.$route.query.category;var t={page:this.$route.query.page?this.$route.query.page:this.page,from:this.$route.query.page?(this.$route.query.page-1)*this.itemsPerPage:0,to:this.$route.query.page?this.$route.query.page*this.itemsPerPage:this.itemsPerPage,filter_list:this.catList};w.c.get("".concat(w.a,"/demo-").concat(w.b,"/blog"),{params:h(h({},t),{},{category:this.category})}).then((function(t){e.posts=t.data.data,e.total=t.data.total,e.counts=t.data.counts,e.loaded=!0,setTimeout((function(){e.$refs.isotopeRef.iso.layout()}),1),e.totalPage=parseInt(e.total/e.itemsPerPage)+(e.total%e.itemsPerPage?1:0)})).catch((function(e){return{error:JSON.stringify(e)}}))}}},f=r(2),component=Object(f.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"main skeleton-body"},[r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ul",{staticClass:"breadcrumb"},[r("li",[r("nuxt-link",{attrs:{to:"/",title:"link to home"}},[r("i",{staticClass:"d-icon-home"})])],1),e._v(" "),r("li",[r("nuxt-link",{staticClass:"active",attrs:{to:"/blog/classic"}},[e._v("Blog")])],1),e._v(" "),r("li",[e._v("Mask Masonry")])])])]),e._v(" "),r("div",{staticClass:"page-content pb-10 mb-10"},[r("div",{staticClass:"container"},[e.counts?r("ul",{staticClass:"nav-filters filter-underline blog-filters justify-content-center"},e._l(e.filterList,(function(t,n){return r("li",{key:"post"+n},[r("nuxt-link",{class:"nav-filter "+(e.category===t.slug||void 0===e.category&&"all"===t.slug?"active":""),attrs:{to:{path:"/blog/mask/masonry",query:{category:t.slug}}}},[e._v(e._s(t.name)+"\n\t\t\t\t\t")]),r("span",[e._v(e._s(e.counts[t.slug]))])],1)})),0):e._e(),e._v(" "),e.loaded?e._e():[r("div",{staticClass:"row"},e._l(new Array(e.itemsPerPage).fill(1),(function(e,t){return r("div",{key:"skel"+t,staticClass:"skel-post grid-item col-sm-6 col-lg-4"})})),0)],e._v(" "),e.loaded&&e.posts?r("isotope",{ref:"isotopeRef",staticClass:"posts grid row masonry mb-5",attrs:{options:e.isotopeOptions,list:e.posts}},[[e.posts&&0===e.posts.length?r("div",{staticClass:"info-box with-icon"},[r("p",{staticClass:"mt-4"},[e._v("No blogs were found matching your selection.")])]):e._e(),e._v(" "),e._l(e.posts,(function(e,t){return r("div",{key:"post"+t,staticClass:"grid-item col-sm-6 col-lg-4"},[r("post-four",{attrs:{"is-original":!0,post:e,showCalendar:!1}})],1)})),e._v(" "),r("div",{key:"sizer",staticClass:"grid-sizer col-1"})]],2):e._e(),e._v(" "),e.totalPage?r("pagination",{attrs:{"total-page":e.totalPage}}):e._e()],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);