(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{287:function(t,e,l){"use strict";var r=l(259),o=l(7),n=l(22),c=l(258),d={components:{SwiperCarousel:r.a},props:{post:Object,overlayClass:{type:String,default:"overlay-dark"},btnClass:{type:String,default:"btn-underline btn-dark"},showCalendar:{type:Boolean,default:!0},showLarge:{type:Boolean,default:!1}},data:function(){return{baseUrl:o.a,baseSlider11:c.c}},computed:{date:function(){return new Date(this.post.date)}},methods:{playVideoHandler:function(t){Object(n.d)(t)}}},v=l(2),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:"post "+t.overlayClass+" "+("video"===t.post.type?"post-video":"")},[l("figure",{staticClass:"post-media"},["gallery"!==t.post.type?l("nuxt-link",{attrs:{to:"/blog/single/"+t.post.slug}},[t.showLarge?l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.post.large_pictures[0].url,expression:"`${baseUrl}${post.large_pictures[0].url}`"}],key:"large",attrs:{width:t.post.large_pictures[0].width,height:t.post.large_pictures[0].height,alt:"post"}}):l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+t.post.pictures[0].url,expression:"`${baseUrl}${post.pictures[0].url}`"}],attrs:{width:t.post.pictures[0].width,height:t.post.pictures[0].height,alt:"post"}})]):t._e(),t._v(" "),"gallery"===t.post.type?l("swiper-carousel",{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{options:t.baseSlider11}},t._l(t.post.pictures,(function(e){return l("div",{key:"post-one-"+e.url,staticClass:"swiper-slide"},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.baseUrl+e.url,expression:"`${baseUrl}${item.url}`"}],attrs:{width:e.width,height:e.height,alt:"post"}})])})),0):t._e(),t._v(" "),"video"===t.post.type?[l("span",{staticClass:"video-play",on:{click:function(e){return t.playVideoHandler(e)}}}),t._v(" "),l("video",{attrs:{width:"380"}},[l("source",{attrs:{src:""+t.baseUrl+t.post.video.url}})])]:t._e(),t._v(" "),t.showCalendar?l("div",{staticClass:"post-calendar"},[l("span",{staticClass:"post-day"},[t._v(t._s(t.date.getDate()))]),t._v(" "),l("span",{staticClass:"post-month"},[t._v(t._s(new Intl.DateTimeFormat("en-Us",{month:"short"}).format(t.date)))])]):t._e()],2),t._v(" "),l("div",{staticClass:"post-details"},[l("h4",{staticClass:"post-title"},[l("nuxt-link",{attrs:{to:"/blog/single/"+t.post.slug}},[t._v(t._s(t.post.title))])],1),t._v(" "),l("p",{staticClass:"post-content"},[t._v("\n\t\t\t"+t._s(t.post.content)+"\n\t\t")]),t._v(" "),l("nuxt-link",{staticClass:"btn btn-link",class:t.btnClass,attrs:{to:"/blog/single/"+t.post.slug}},[t._v("Read More"),l("i",{staticClass:"d-icon-arrow-right"})])],1)])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,l){"use strict";l.r(e);var r=l(283),o=l.n(r),n=l(259),c=l(286),d=l(287),v=l(258),m={components:{SwiperCarousel:n.a,PostOne:d.a},props:{related:null,loaded:!1},data:function(){return{baseSlider10:v.b}}},_=l(2),h=Object(_.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"related-posts"},[l("h3",{staticClass:"title title-simple text-left text-normal font-weight-bold ls-normal"},[t._v("Related Posts")]),t._v(" "),l("swiper-carousel",{staticClass:"swiper-theme",attrs:{options:t.baseSlider10}},[t._l(new Array(5).fill(1),(function(e,r){return l("div",{key:"skel"+r,staticClass:"skel-post swiper-slide",class:t.loaded?"d-none":""})})),t._v(" "),t._l(t.related,(function(t,e){return l("post-one",{key:"related"+e,staticClass:"swiper-slide",attrs:{post:t,"btn-class":"btn-underline btn-primary"}})}))],2)],1)}),[],!1,null,null,null).exports,C=l(7),f=l(22),w={components:{SwiperCarousel:n.a,BlogSidebar:c.a,RelatedPosts:h},directives:{imagesLoaded:o.a},data:function(){return{baseUrl:C.a,baseSlider11:v.c,post:null,next:null,prev:null,related:null,itemsPerPage:6,loaded:!1,totalPage:null}},watch:{$route:function(){this.getBlog()}},created:function(){this.getBlog(!1)},methods:{getBlog:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loaded=!1,e&&Object(f.e)(),C.c.get("".concat(C.a,"/demo-").concat(C.b,"/blog/").concat(this.$route.params.slug)).then((function(e){t.post=e.data.data,t.prev=e.data.prev,t.next=e.data.next,t.related=e.data.related})).catch((function(t){return{error:JSON.stringify(t)}}))},handleSkeleton:function(){this.loaded=!0},playVideoHandler:function(t){Object(f.d)(t)}}},y=w,k=Object(_.a)(y,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"main skeleton-body"},[l("nav",{staticClass:"breadcrumb-nav"},[l("div",{staticClass:"container"},[l("ul",{staticClass:"breadcrumb"},[l("li",[l("nuxt-link",{attrs:{to:"/",title:"link to home"}},[l("i",{staticClass:"d-icon-home"})])],1),t._v(" "),l("li",[l("nuxt-link",{staticClass:"active",attrs:{to:"/blog/classic"}},[t._v("Blog")])],1),t._v(" "),l("li",[t._v("Single Post")])])]),t._v(" "),l("div",{staticClass:"page-content with-sidebar"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row gutter-lg"},[l("div",{staticClass:"col-lg-9"},[l("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded.on",value:t.handleSkeleton,expression:"handleSkeleton",modifiers:{on:!0}}]},[[l("div",{staticClass:"skel-post",class:t.loaded?"d-none":""})],t._v(" "),[t.post?l("div",{staticClass:"post post-single"},[l("figure",{staticClass:"post-media",class:{"d-none":!t.loaded,"post-video":t.post.type}},["gallery"!==t.post.type?l("nuxt-link",{attrs:{to:"/blog/single/"+t.post.slug}},[l("img",{attrs:{src:""+t.baseUrl+t.post.large_pictures[0].url,width:t.post.large_pictures[0].width,height:t.post.large_pictures[0].height,alt:"post"}})]):t._e(),t._v(" "),"gallery"===t.post.type?l("swiper-carousel",{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{options:t.baseSlider11}},t._l(t.post.large_pictures,(function(e){return l("div",{key:"post-one-"+e.url,staticClass:"swiper-slide"},[l("img",{attrs:{src:""+t.baseUrl+e.url,width:e.width,height:e.height,alt:"post"}})])})),0):t._e(),t._v(" "),"video"===t.post.type?[l("span",{staticClass:"video-play",on:{click:function(e){return t.playVideoHandler(e)}}}),t._v(" "),l("video",{attrs:{width:"380"}},[l("source",{attrs:{src:""+t.baseUrl+t.post.video.url}})])]:t._e()],2),t._v(" "),l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-meta"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tby "),l("a",{staticClass:"post-author",attrs:{href:"javascript:;"}},[t._v(t._s(t.post.author))]),t._v(" on "),l("a",{staticClass:"post-date",attrs:{href:"javascript:;"}},[t._v(t._s(new Date(t.post.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})))]),t._v(" | "),l("a",{staticClass:"post-comment",attrs:{href:"javascript:;"}},[l("span",[t._v(t._s(t.post.comments))]),t._v(" Comments")])]),t._v(" "),l("h4",{staticClass:"post-title"},[l("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.post.title))])]),t._v(" "),l("div",{staticClass:"post-body mb-7"},[l("p",{staticClass:"mb-5"},[t._v(t._s(t.post.content))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("p",[t._v("Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed\n\t\t\t\t\t\t\t\t\t\t\t\tlectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.\n\t\t\t\t\t\t\t\t\t\t\t\tVestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu\n\t\t\t\t\t\t\t\t\t\t\t\tpulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum\n\t\t\t\t\t\t\t\t\t\t\t\tet, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus\n\t\t\t\t\t\t\t\t\t\t\t\tlacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae\n\t\t\t\t\t\t\t\t\t\t\t\tfacilisis libero dolor a purus. ")])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])]):t._e()]],2),t._v(" "),t.prev&&t.next?l("nav",{staticClass:"page-nav"},[[t.prev.slug!==t.post.slug?l("nuxt-link",{staticClass:"pager-link pager-link-prev",attrs:{to:"/blog/single/"+t.prev.slug}},[t._v("\n\t\t\t\t\t\t\t\t\tPrevious Post\n\t\t\t\t\t\t\t\t\t"),l("span",{staticClass:"pager-link-title"},[t._v(t._s(t.prev.title))])]):l("a",{staticClass:"pager-link pager-link-prev",attrs:{href:"javascript:;"}},[l("span",{staticClass:"pager-link-title mt-0"},[t._v("This is the first Post")])])],t._v(" "),[t.next.slug!==t.post.slug?l("nuxt-link",{staticClass:"pager-link pager-link-next",attrs:{to:"/blog/single/"+t.next.slug}},[t._v("\n\t\t\t\t\t\t\t\t\tGo To Post\n\t\t\t\t\t\t\t\t\t"),l("span",{staticClass:"pager-link-title"},[t._v(t._s(t.next.title))])]):l("a",{staticClass:"pager-link pager-link-next",attrs:{href:"javascript:;"}},[l("span",{staticClass:"pager-link-title mt-0"},[t._v("This is the last Post")])])]],2):t._e(),t._v(" "),t.related&&t.related.length>0?l("related-posts",{attrs:{related:t.related,loaded:!!t.related}}):t._e(),t._v(" "),t.post?l("div",{staticClass:"comments"},[l("h3",{staticClass:"title title-simple text-left text-normal font-weight-bold"},[t._v(t._s(t.post.comments)+" Comments")]),t._v(" "),0===t.post.comments?l("h3",{staticClass:"title title-simple text-left text-normal font-weight-normal",staticStyle:{"font-size":"1.8rem"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s("Be The First To Review “"+t.post.title+"”")+"\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),l("ul",[t.post.comments>0?l("li",[t._m(5),t._v(" "),t.post.comments>1?l("ul",[t._m(6)]):t._e()]):t._e(),t._v(" "),t.post.comments>2?l("li",[t._m(7)]):t._e()])]):t._e(),t._v(" "),t._m(8)],1),t._v(" "),l("blog-sidebar")],1)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",{staticClass:"mb-6"},[t._v("Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a "),l("a",{attrs:{href:"javascript:;"}},[t._v("ultrices sagittis")]),t._v(", mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"with-img row align-items-center"},[l("div",{staticClass:"col-md-6 mb-6"},[l("figure",[l("img",{staticStyle:{"background-color":"#DEE6E8"},attrs:{src:"images/blog/1.jpg",width:"336",height:"415",alt:"post"}}),t._v(" "),l("figcaption",{staticClass:"text-left mt-1"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDesigne by "),l("a",{attrs:{href:"javascript:;"}},[t._v("Casper Dalin")])])])]),t._v(" "),l("div",{staticClass:"col-md-6 mb-6"},[l("h4",{staticClass:"font-weight-semi-bold ls-s"},[t._v("Quisque volutpat mattiseros.")]),t._v(" "),l("p",{staticClass:"mb-8 col-lg-11"},[t._v("Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ")]),t._v(" "),l("h4",{staticClass:"font-weight-semi-bold ls-s"},[t._v("More Details")]),t._v(" "),l("ul",{staticClass:"list list-type-check mb-6"},[l("li",[t._v("Praesent id enim sit amet.")]),t._v(" "),l("li",[t._v("Tdio vulputate eleifend in in tortor. ellus massa.")]),t._v(" "),l("li",[t._v("Massa ristique sit amet condim vel")]),t._v(" "),l("li",[t._v("Dilisis Facilisis quis sapien. Praesent id enim sit amet")]),t._v(" "),l("li",[t._v("Praesent id enim sit amet.")]),t._v(" "),l("li",[t._v("Tdio vulputate eleifend in in tortor. ellus massa.")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("blockquote",{staticClass:"mt-1 mb-6 p-relative"},[l("p",{staticClass:"font-weight-semi-bold ls-m"},[t._v("“ Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. ”")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-author-detail"},[l("figure",{staticClass:"author-media"},[l("a",{attrs:{href:"javascript:;"}},[l("img",{attrs:{src:"images/blog/comments/1.jpg",alt:"avatar",width:"60",height:"60"}})])]),t._v(" "),l("div",{staticClass:"author-body"},[l("div",{staticClass:"author-header d-flex justify-content-between align-items-center"},[l("div",[l("span",{staticClass:"author-title"},[t._v("AUTHOR")]),t._v(" "),l("h4",{staticClass:"author-name font-weight-bold mb-0"},[t._v("John Doe")])]),t._v(" "),l("div",[l("a",{staticClass:"author-link font-weight-semi-bold",attrs:{href:"javascript:;"}},[t._v("View all posts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tby John Doe "),l("i",{staticClass:"d-icon-arrow-right"})])])]),t._v(" "),l("div",{staticClass:"author-content"},[l("p",{staticClass:"mb-0"},[t._v("Praesent dapibus, neque id cursus faucibus, tortor neque\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tegestas auguae, eu vulputate magna eros euerat. Aliquam erat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvolutpat.")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-footer mt-7 mb-3"},[l("div",{staticClass:"post-tags"},[l("a",{staticClass:"tag",attrs:{href:"javascript:;"}},[t._v("classic")]),t._v(" "),l("a",{staticClass:"tag",attrs:{href:"javascript:;"}},[t._v("converse")])]),t._v(" "),l("div",{staticClass:"social-icons"},[l("a",{staticClass:"social-icon social-facebook",attrs:{href:"javascript:;",title:"Facebook"}},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"social-icon social-twitter",attrs:{href:"javascript:;",title:"Twitter"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"social-icon social-pinterest",attrs:{href:"javascript:;",title:"Pinterest"}},[l("i",{staticClass:"fab fa-pinterest-p"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"comment"},[l("figure",{staticClass:"comment-media"},[l("a",{attrs:{href:"javascript:;"}},[l("img",{attrs:{src:"images/blog/comments/1.jpg",alt:"avatar",width:"60",height:"60"}})])]),t._v(" "),l("div",{staticClass:"comment-body"},[l("div",{staticClass:"comment-user"},[l("span",{staticClass:"comment-date"},[t._v("November 9, 2018 at 2:19 pm")]),t._v(" "),l("h4",[l("a",{attrs:{href:"javascript:;"}},[t._v("Jimmy Pearson")])])]),t._v(" "),l("div",{staticClass:"comment-content mb-2"},[l("p",[t._v("Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ")])]),t._v(" "),l("a",{staticClass:"btn btn-link btn-reveal-right",attrs:{href:"javascript:;"}},[t._v("REPLY"),l("i",{staticClass:"d-icon-arrow-right"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("div",{staticClass:"comment"},[l("figure",{staticClass:"comment-media"},[l("a",{attrs:{href:"javascript:;"}},[l("img",{attrs:{src:"images/blog/comments/2.jpg",alt:"avatar",width:"60",height:"60"}})])]),t._v(" "),l("div",{staticClass:"comment-body"},[l("div",{staticClass:"comment-user"},[l("span",{staticClass:"comment-date"},[t._v("November 9, 2018 at 2:19 pm")]),t._v(" "),l("h4",[l("a",{attrs:{href:"javascript:;"}},[t._v("Lena Knight")])])]),t._v(" "),l("div",{staticClass:"comment-content mb-2"},[l("p",[t._v("Morbi interdum mollis sapien. Sed ac risus.")])]),t._v(" "),l("a",{staticClass:"btn btn-link btn-reveal-right",attrs:{href:"javascript:;"}},[t._v("REPLY"),l("i",{staticClass:"d-icon-arrow-right"})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"comment"},[l("figure",{staticClass:"comment-media"},[l("a",{attrs:{href:"javascript:;"}},[l("img",{attrs:{src:"images/blog/comments/1.jpg",alt:"avatar",width:"60",height:"60"}})])]),t._v(" "),l("div",{staticClass:"comment-body"},[l("div",{staticClass:"comment-user"},[l("span",{staticClass:"comment-date"},[t._v("November 9, 2018 at 2:19 pm")]),t._v(" "),l("h4",[l("a",{attrs:{href:"javascript:;"}},[t._v("Johnathan Castillo")])])]),t._v(" "),l("div",{staticClass:"comment-content mb-2"},[l("p",[t._v("Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")])]),t._v(" "),l("a",{staticClass:"btn btn-link btn-reveal-right",attrs:{href:"javascript:;"}},[t._v("REPLY"),l("i",{staticClass:"d-icon-arrow-right"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"reply"},[l("div",{staticClass:"title-wrapper text-left"},[l("h3",{staticClass:"title title-simple text-left text-normal"},[t._v("Leave A Reply")]),t._v(" "),l("p",[t._v("Your email address will not be published. Required fields are marked *")])]),t._v(" "),l("form",{attrs:{action:"#"}},[l("textarea",{staticClass:"form-control mb-4",attrs:{id:"reply-message",cols:"30",rows:"6","aria-label":"post single text area",placeholder:"Comment *",required:""}}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 mb-5"},[l("input",{staticClass:"form-control",attrs:{type:"text",id:"reply-name","aria-label":"post name input",name:"reply-name",placeholder:"Name *",required:""}})]),t._v(" "),l("div",{staticClass:"col-md-6 mb-5"},[l("input",{staticClass:"form-control",attrs:{type:"email",id:"reply-email","aria-label":"post email input",name:"reply-email",placeholder:"Email *",required:""}})])]),t._v(" "),l("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"submit"}},[t._v("POST COMMENT"),l("i",{staticClass:"d-icon-arrow-right"})])])])}],!1,null,null,null);e.default=k.exports}}]);