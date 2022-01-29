exports.ids = [11];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/single/_slug.vue?vue&type=template&id=7b2ea564&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main skeleton-body"},[_vm._ssrNode("<nav class=\"breadcrumb-nav\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"active",attrs:{"to":"/blog/classic"}},[_vm._v("Blog")])],1),_vm._ssrNode(" <li>Single Post</li>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content with-sidebar\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row gutter-lg\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\">","</div>",[_c('div',{directives:[{name:"images-loaded",rawName:"v-images-loaded.on",value:(_vm.handleSkeleton),expression:"handleSkeleton",modifiers:{"on":true}}]},[_vm._ssrNode("<div"+(_vm._ssrClass("skel-post",_vm.loaded ? 'd-none': ''))+"></div> "),[(_vm.post)?_vm._ssrNode("<div class=\"post post-single\">","</div>",[_vm._ssrNode("<figure"+(_vm._ssrClass("post-media",{ 'd-none': !_vm.loaded, 'post-video': _vm.post.type }))+">","</figure>",[(_vm.post.type !== 'gallery')?_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (_vm.post.large_pictures[0].url)),"width":_vm.post.large_pictures[0].width,"height":_vm.post.large_pictures[0].height,"alt":"post"}})]):_vm._e(),_vm._ssrNode(" "),(_vm.post.type === 'gallery')?_c('swiper-carousel',{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{"options":_vm.baseSlider11}},_vm._l((_vm.post.large_pictures),function(item){return _c('div',{key:"post-one-" + item.url,staticClass:"swiper-slide"},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (item.url)),"width":item.width,"height":item.height,"alt":"post"}})])}),0):_vm._e(),_vm._ssrNode(" "+((_vm.post.type === 'video')?("<span class=\"video-play\"></span> <video width=\"380\"><source"+(_vm._ssrAttr("src",("" + _vm.baseUrl + (_vm.post.video.url))))+"></video>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"post-details\"><div class=\"post-meta\">\n\t\t\t\t\t\t\t\t\t\t\tby <a href=\"javascript:;\" class=\"post-author\">"+_vm._ssrEscape(_vm._s(_vm.post.author))+"</a> on <a href=\"javascript:;\" class=\"post-date\">"+_vm._ssrEscape(_vm._s(new Date( _vm.post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )))+"</a> | <a href=\"javascript:;\" class=\"post-comment\"><span>"+_vm._ssrEscape(_vm._s(_vm.post.comments))+"</span> Comments</a></div> <h4 class=\"post-title\"><a href=\"javascript:;\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</a></h4> <div class=\"post-body mb-7\"><p class=\"mb-5\">"+_vm._ssrEscape(_vm._s(_vm.post.content))+"</p> <p class=\"mb-6\">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <a href=\"javascript:;\">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p> <div class=\"with-img row align-items-center\"><div class=\"col-md-6 mb-6\"><figure><img src=\"images/blog/1.jpg\" width=\"336\" height=\"415\" alt=\"post\" style=\"background-color: #DEE6E8\"> <figcaption class=\"text-left mt-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDesigne by <a href=\"javascript:;\">Casper Dalin</a></figcaption></figure></div> <div class=\"col-md-6 mb-6\"><h4 class=\"font-weight-semi-bold ls-s\">Quisque volutpat mattiseros.</h4> <p class=\"mb-8 col-lg-11\">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p> <h4 class=\"font-weight-semi-bold ls-s\">More Details</h4> <ul class=\"list list-type-check mb-6\"><li>Praesent id enim sit amet.</li> <li>Tdio vulputate eleifend in in tortor. ellus massa.</li> <li>Massa ristique sit amet condim vel</li> <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li> <li>Praesent id enim sit amet.</li> <li>Tdio vulputate eleifend in in tortor. ellus massa.</li></ul></div></div> <blockquote class=\"mt-1 mb-6 p-relative\"><p class=\"font-weight-semi-bold ls-m\">“ Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. ”</p></blockquote> <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed\n\t\t\t\t\t\t\t\t\t\t\t\tlectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.\n\t\t\t\t\t\t\t\t\t\t\t\tVestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu\n\t\t\t\t\t\t\t\t\t\t\t\tpulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum\n\t\t\t\t\t\t\t\t\t\t\t\tet, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus\n\t\t\t\t\t\t\t\t\t\t\t\tlacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae\n\t\t\t\t\t\t\t\t\t\t\t\tfacilisis libero dolor a purus. </p></div> <div class=\"post-author-detail\"><figure class=\"author-media\"><a href=\"javascript:;\"><img src=\"images/blog/comments/1.jpg\" alt=\"avatar\" width=\"60\" height=\"60\"></a></figure> <div class=\"author-body\"><div class=\"author-header d-flex justify-content-between align-items-center\"><div><span class=\"author-title\">AUTHOR</span> <h4 class=\"author-name font-weight-bold mb-0\">John Doe</h4></div> <div><a href=\"javascript:;\" class=\"author-link font-weight-semi-bold\">View all posts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tby John Doe <i class=\"d-icon-arrow-right\"></i></a></div></div> <div class=\"author-content\"><p class=\"mb-0\">Praesent dapibus, neque id cursus faucibus, tortor neque\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tegestas auguae, eu vulputate magna eros euerat. Aliquam erat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvolutpat.</p></div></div></div> <div class=\"post-footer mt-7 mb-3\"><div class=\"post-tags\"><a href=\"javascript:;\" class=\"tag\">classic</a> <a href=\"javascript:;\" class=\"tag\">converse</a></div> <div class=\"social-icons\"><a href=\"javascript:;\" title=\"Facebook\" class=\"social-icon social-facebook\"><i class=\"fab fa-facebook-f\"></i></a> <a href=\"javascript:;\" title=\"Twitter\" class=\"social-icon social-twitter\"><i class=\"fab fa-twitter\"></i></a> <a href=\"javascript:;\" title=\"Pinterest\" class=\"social-icon social-pinterest\"><i class=\"fab fa-pinterest-p\"></i></a></div></div></div>")],2):_vm._e()]],2),_vm._ssrNode(" "),(_vm.prev && _vm.next)?_vm._ssrNode("<nav class=\"page-nav\">","</nav>",[[(_vm.prev.slug !== _vm.post.slug)?_c('nuxt-link',{staticClass:"pager-link pager-link-prev",attrs:{"to":("/blog/single/" + (_vm.prev.slug))}},[_vm._v("\n\t\t\t\t\t\t\t\t\tPrevious Post\n\t\t\t\t\t\t\t\t\t"),_c('span',{staticClass:"pager-link-title"},[_vm._v(_vm._s(_vm.prev.title))])]):_c('a',{staticClass:"pager-link pager-link-prev",attrs:{"href":"javascript:;"}},[_c('span',{staticClass:"pager-link-title mt-0"},[_vm._v("This is the first Post")])])],_vm._ssrNode(" "),[(_vm.next.slug !== _vm.post.slug)?_c('nuxt-link',{staticClass:"pager-link pager-link-next",attrs:{"to":("/blog/single/" + (_vm.next.slug))}},[_vm._v("\n\t\t\t\t\t\t\t\t\tGo To Post\n\t\t\t\t\t\t\t\t\t"),_c('span',{staticClass:"pager-link-title"},[_vm._v(_vm._s(_vm.next.title))])]):_c('a',{staticClass:"pager-link pager-link-next",attrs:{"href":"javascript:;"}},[_c('span',{staticClass:"pager-link-title mt-0"},[_vm._v("This is the last Post")])])]],2):_vm._e(),_vm._ssrNode(" "),(_vm.related && _vm.related.length > 0)?_c('related-posts',{attrs:{"related":_vm.related,"loaded":_vm.related ? true : false}}):_vm._e(),_vm._ssrNode(" "+((_vm.post)?("<div class=\"comments\"><h3 class=\"title title-simple text-left text-normal font-weight-bold\">"+_vm._ssrEscape(_vm._s(_vm.post.comments)+" Comments")+"</h3> "+((_vm.post.comments === 0)?("<h3 class=\"title title-simple text-left text-normal font-weight-normal\" style=\"font-size: 1.8rem\">"+_vm._ssrEscape("\n\t\t\t\t\t\t\t\t"+_vm._s("Be The First To Review “" + _vm.post.title + "”")+"\n\t\t\t\t\t\t\t")+"</h3>"):"<!---->")+" <ul>"+((_vm.post.comments > 0)?("<li><div class=\"comment\"><figure class=\"comment-media\"><a href=\"javascript:;\"><img src=\"images/blog/comments/1.jpg\" alt=\"avatar\" width=\"60\" height=\"60\"></a></figure> <div class=\"comment-body\"><div class=\"comment-user\"><span class=\"comment-date\">November 9, 2018 at 2:19 pm</span> <h4><a href=\"javascript:;\">Jimmy Pearson</a></h4></div> <div class=\"comment-content mb-2\"><p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p></div> <a href=\"javascript:;\" class=\"btn btn-link btn-reveal-right\">REPLY<i class=\"d-icon-arrow-right\"></i></a></div></div> "+((_vm.post.comments > 1)?("<ul><li><div class=\"comment\"><figure class=\"comment-media\"><a href=\"javascript:;\"><img src=\"images/blog/comments/2.jpg\" alt=\"avatar\" width=\"60\" height=\"60\"></a></figure> <div class=\"comment-body\"><div class=\"comment-user\"><span class=\"comment-date\">November 9, 2018 at 2:19 pm</span> <h4><a href=\"javascript:;\">Lena Knight</a></h4></div> <div class=\"comment-content mb-2\"><p>Morbi interdum mollis sapien. Sed ac risus.</p></div> <a href=\"javascript:;\" class=\"btn btn-link btn-reveal-right\">REPLY<i class=\"d-icon-arrow-right\"></i></a></div></div></li></ul>"):"<!---->")+"</li>"):"<!---->")+" "+((_vm.post.comments > 2)?("<li><div class=\"comment\"><figure class=\"comment-media\"><a href=\"javascript:;\"><img src=\"images/blog/comments/1.jpg\" alt=\"avatar\" width=\"60\" height=\"60\"></a></figure> <div class=\"comment-body\"><div class=\"comment-user\"><span class=\"comment-date\">November 9, 2018 at 2:19 pm</span> <h4><a href=\"javascript:;\">Johnathan Castillo</a></h4></div> <div class=\"comment-content mb-2\"><p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p></div> <a href=\"javascript:;\" class=\"btn btn-link btn-reveal-right\">REPLY<i class=\"d-icon-arrow-right\"></i></a></div></div></li>"):"<!---->")+"</ul></div>"):"<!---->")+" <div class=\"reply\"><div class=\"title-wrapper text-left\"><h3 class=\"title title-simple text-left text-normal\">Leave A Reply</h3> <p>Your email address will not be published. Required fields are marked *</p></div> <form action=\"#\"><textarea id=\"reply-message\" cols=\"30\" rows=\"6\" aria-label=\"post single text area\" placeholder=\"Comment *\" required=\"required\" class=\"form-control mb-4\"></textarea> <div class=\"row\"><div class=\"col-md-6 mb-5\"><input type=\"text\" id=\"reply-name\" aria-label=\"post name input\" name=\"reply-name\" placeholder=\"Name *\" required=\"required\" class=\"form-control\"></div> <div class=\"col-md-6 mb-5\"><input type=\"email\" id=\"reply-email\" aria-label=\"post email input\" name=\"reply-email\" placeholder=\"Email *\" required=\"required\" class=\"form-control\"></div></div> <button type=\"submit\" class=\"btn btn-primary btn-rounded\">POST COMMENT<i class=\"d-icon-arrow-right\"></i></button></form></div>")],2),_vm._ssrNode(" "),_c('blog-sidebar')],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/single/_slug.vue?vue&type=template&id=7b2ea564&

// EXTERNAL MODULE: external "vue-images-loaded"
var external_vue_images_loaded_ = __webpack_require__(67);
var external_vue_images_loaded_default = /*#__PURE__*/__webpack_require__.n(external_vue_images_loaded_);

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./components/partials/blog/BlogSidebar.vue + 4 modules
var BlogSidebar = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/RelatedPosts.vue?vue&type=template&id=9e6ee6f6&
var RelatedPostsvue_type_template_id_9e6ee6f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"related-posts"},[_vm._ssrNode("<h3 class=\"title title-simple text-left text-normal font-weight-bold ls-normal\">Related Posts</h3> "),_c('swiper-carousel',{staticClass:"swiper-theme",attrs:{"options":_vm.baseSlider10}},[_vm._l((new Array(5).fill(1)),function(item,index){return _c('div',{key:'skel' + index,staticClass:"skel-post swiper-slide",class:_vm.loaded ? 'd-none': ''})}),_vm._v(" "),_vm._l((_vm.related),function(item,index){return _c('post-one',{key:'related' + index,staticClass:"swiper-slide",attrs:{"post":item,"btn-class":"btn-underline btn-primary"}})})],2)],2)}
var RelatedPostsvue_type_template_id_9e6ee6f6_staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/blog/RelatedPosts.vue?vue&type=template&id=9e6ee6f6&

// EXTERNAL MODULE: ./components/elements/post/PostOne.vue + 4 modules
var PostOne = __webpack_require__(98);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/RelatedPosts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RelatedPostsvue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */],
    PostOne: PostOne["a" /* default */]
  },
  props: {
    related: null,
    loaded: false
  },
  data: function () {
    return {
      baseSlider10: carousel["b" /* baseSlider10 */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/blog/RelatedPosts.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_RelatedPostsvue_type_script_lang_js_ = (RelatedPostsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/blog/RelatedPosts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_RelatedPostsvue_type_script_lang_js_,
  RelatedPostsvue_type_template_id_9e6ee6f6_render,
  RelatedPostsvue_type_template_id_9e6ee6f6_staticRenderFns,
  false,
  null,
  null,
  "a1d646a4"
  
)

/* harmony default export */ var RelatedPosts = (component.exports);
// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/single/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */],
    BlogSidebar: BlogSidebar["a" /* default */],
    RelatedPosts: RelatedPosts
  },
  directives: {
    imagesLoaded: external_vue_images_loaded_default.a
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */],
      baseSlider11: carousel["c" /* baseSlider11 */],
      post: null,
      next: null,
      prev: null,
      related: null,
      itemsPerPage: 6,
      loaded: false,
      totalPage: null
    };
  },
  watch: {
    $route: function () {
      this.getBlog();
    }
  },
  created: function () {
    this.getBlog(false);
  },
  methods: {
    getBlog: function (isScroll = true) {
      this.loaded = false;
      if (isScroll) Object(utils["d" /* scrollHandler */])();
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/blog/${this.$route.params.slug}`).then(response => {
        this.post = response.data.data;
        this.prev = response.data.prev;
        this.next = response.data.next;
        this.related = response.data.related;
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    },
    handleSkeleton: function () {
      this.loaded = true;
    },
    playVideoHandler: function (e) {
      Object(utils["c" /* playVideo */])(e);
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/single/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/blog/single/_slug.vue





/* normalize component */

var _slug_component = Object(componentNormalizer["a" /* default */])(
  single_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "652179c8"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (_slug_component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseSlider1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return baseSlider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return baseSlider3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return baseSlider4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return baseSlider5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return baseSlider6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return baseSlider7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return baseSlider8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return baseSlider9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseSlider10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return baseSlider11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return baseSlider12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return baseSlider13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return baseSlider14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return baseSlider15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseSlider16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return baseSlider17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return baseSlider18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return introSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return serviceSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return bestSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return featuredSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return blogSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return brandSlider; });
const baseSlider1 = {
  nav: true,
  slidesPerView: 4,
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
};
const baseSlider2 = {
  slidesPerView: 5,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    479: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4
    }
  }
};
const baseSlider3 = {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2
    }
  }
};
const baseSlider4 = {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-nav .swiper-next",
    prevEl: ".swiper-nav .swiper-prev"
  }
};
const baseSlider5 = {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  spaceBetween: 20
};
const baseSlider6 = {
  slidesPerView: 5,
  breakpoints: {
    575: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4
    }
  }
};
const baseSlider7 = {
  slidesPerView: 6,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    575: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 4
    },
    991: {
      slidesPerView: 5
    },
    1199: {
      slidesPerView: 6
    }
  }
};
const baseSlider8 = {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    }
  }
};
const baseSlider9 = {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
};
const baseSlider10 = {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2
    }
  }
};
const baseSlider11 = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  }
};
const baseSlider12 = {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    991: {
      slidesPerView: 1
    }
  }
};
const baseSlider13 = {
  slidesPerView: 4,
  spaceBetween: 10,
  direction: 'vertical',
  slideToClickedSlide: true,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-nav .swiper-next",
    prevEl: ".swiper-nav .swiper-prev"
  },
  breakpoints: {
    991: {
      direction: 'horizontal',
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 3.1,
      direction: 'vertical'
    },
    1050: {
      slidesPerView: 3.3,
      direction: 'vertical'
    },
    1100: {
      slidesPerView: 3.4,
      direction: 'vertical'
    },
    1160: {
      slidesPerView: 3.6,
      direction: 'vertical'
    },
    1199: {
      slidesPerView: 3.8,
      direction: 'vertical'
    },
    1400: {
      slidesPerView: 3.9,
      direction: 'vertical'
    }
  }
};
const baseSlider14 = {
  slidesPerView: 5,
  spaceBetween: 2,
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4,
      pagination: {
        el: '.swiper-dots',
        clickable: true
      }
    }
  }
};
const baseSlider15 = {
  slidesPerView: 4,
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
};
const baseSlider16 = {
  slidesPerView: 6,
  loop: true,
  breakpoints: {
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    },
    1199: {
      slidesPerView: 5
    }
  }
};
const baseSlider17 = {
  slidesPerView: 4,
  pagination: false,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
};
const baseSlider18 = {
  slidesPerView: 4,
  pagination: false,
  navigation: {
    nextEl: ".swiper-nav .swiper-next",
    prevEl: ".swiper-nav .swiper-prev"
  },
  spaceBetween: 10
}; // home

const introSlider = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-dots',
    clickable: true
  }
};
const serviceSlider = {
  slidesPerView: 3,
  spaceBetween: 0,
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2,
      loop: true
    }
  }
};
const bestSlider = {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-nav .swiper-next",
    prevEl: ".swiper-nav .swiper-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
};
const featuredSlider = {
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-nav .swiper-next",
    prevEl: ".swiper-nav .swiper-prev"
  },
  pagination: {
    el: '.swiper-dots',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4
    }
  }
};
const blogSlider = {
  slidesPerView: 3,
  breakpoints: {
    575: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2
    }
  }
};
const brandSlider = {
  slidesPerView: 6,
  breakpoints: {
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    },
    1199: {
      slidesPerView: 5
    }
  }
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/SwiperCarousel.vue?vue&type=template&id=55faa173&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-carousel"},[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.sliderOption),expression:"sliderOption",arg:"mySwiper"}],ref:"myCarousel",on:{"resize":_vm.updateCarousel}},[_vm._ssrNode("<div class=\"swiper-wrapper\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "+((_vm.sliderOption.navigation)?("<div"+(_vm._ssrClass("swiper-nav",{disabled: _vm.isNavDisabled}))+"><button type=\"button\" role=\"presentation\" class=\"swiper-prev\"><i"+(_vm._ssrClass(null,_vm.sliderOption.navIcon.prev))+"></i></button> <button type=\"button\" role=\"presentation\" class=\"swiper-next\"><i"+(_vm._ssrClass(null,_vm.sliderOption.navIcon.next))+"></i></button></div>"):"<!---->")+" "+((_vm.sliderOption.pagination)?("<div"+(_vm._ssrClass("swiper-dots swiper-pagination-bullets",{ 'disabled' : _vm.isDotDisabled }))+"></div>"):"<!---->"))],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/SwiperCarousel.vue?vue&type=template&id=55faa173&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/SwiperCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const defaultOption = {
  loop: false,
  scrollbar: {
    draggable: false
  },
  spaceBetween: 20,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  clickable: true,
  navIcon: {
    prev: 'd-icon-angle-left',
    next: 'd-icon-angle-right'
  },
  isCustomNav: false
};
/* harmony default export */ var SwiperCarouselvue_type_script_lang_js_ = ({
  props: {
    options: Object
  },
  data: function () {
    return {
      sliderOption: Object.assign({}, defaultOption, this.options),
      isNavDisabled: false,
      isDotDisabled: false
    };
  },
  mounted: function () {
    this.updateCarousel();
  },
  methods: {
    updateCarousel: function () {
      let dots = this.$refs.myCarousel.querySelector('.swiper-dots'); // this.mySwiper.update();

      if (dots) {
        if (dots.querySelectorAll('.swiper-pagination-bullet').length <= 1) {
          this.isDotDisabled = true;
        } else {
          this.isDotDisabled = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/elements/SwiperCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_SwiperCarouselvue_type_script_lang_js_ = (SwiperCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/SwiperCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_SwiperCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "454da497"
  
)

/* harmony default export */ var SwiperCarousel = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostSix.vue?vue&type=template&id=68de1ff6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("post post-list-sm " + _vm.overlayClass)},[_vm._ssrNode("<figure class=\"post-media\">","</figure>",[_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.small_pictures[0].url))),expression:"`${baseUrl}${post.small_pictures[0].url}`"}],attrs:{"width":_vm.post.small_pictures[0].width,"height":_vm.post.small_pictures[0].height,"alt":"post"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-details\">","</div>",[_vm._ssrNode("<div class=\"post-meta\"><a href=\"javascript:;\" class=\"post-date\">"+_vm._ssrEscape(_vm._s(new Date( _vm.post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )))+"</a></div> "),_vm._ssrNode("<h4 class=\"post-title\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v(_vm._s(_vm.post.title))])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/post/PostSix.vue?vue&type=template&id=68de1ff6&

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostSix.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PostSixvue_type_script_lang_js_ = ({
  props: {
    post: Object,
    overlayClass: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */]
    };
  },
  computed: {
    date: function () {
      return new Date(this.post.date);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/post/PostSix.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostSixvue_type_script_lang_js_ = (PostSixvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/post/PostSix.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostSixvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79724205"
  
)

/* harmony default export */ var PostSix = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/BlogSidebar.vue?vue&type=template&id=86ac1eb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper",attrs:{"sticky-container":""}},[_vm._ssrNode("<div class=\"sidebar-overlay\"><a href=\"javascript:;\" class=\"sidebar-close\"><i class=\"d-icon-times\"></i></a></div> <a href=\"javascript:;\" class=\"sidebar-toggle\"><i class=\"fas fa-chevron-left\"></i></a> "),_c('div',{directives:[{name:"sticky",rawName:"v-sticky",value:(_vm.isSticky),expression:"isSticky"}],attrs:{"sticky-offset":"{top: 80}"}},[_vm._ssrNode("<div"+(_vm._ssrClass("widget-2",_vm.loaded ? 'd-none': ''))+"></div> "),_c('div',{directives:[{name:"images-loaded",rawName:"v-images-loaded.on",value:(_vm.handleSkeleton),expression:"handleSkeleton",modifiers:{"on":true}}],staticClass:"sidebar-content",class:_vm.loaded ? '': 'd-none'},[_vm._ssrNode("<div class=\"widget widget-search border-no mb-2\"><form action=\"#\" class=\"input-wrapper input-wrapper-inline btn-absolute\"><input type=\"text\" name=\"search\" autoComplete=\"off\" aria-label=\"blog search box\" placeholder=\"Search in Blog\" required=\"required\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\"> <button type=\"submit\" class=\"btn btn-search btn-link\"><span class=\"sr-only\">Blog Search button</span> <i class=\"d-icon-search\"></i></button></form></div> "),_vm._ssrNode("<div class=\"widget widget-collapsible border-no\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("parse-content",{expanded: _vm.isCatExpanded, collapsed: !_vm.isCatExpanded}))+">","</div>",[_vm._ssrNode("<h3 class=\"widget-title border-no\">Blog Categories<span class=\"toggle-btn p-0 parse-content\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.isCatExpanded}},[_c('ul',{staticClass:"widget-body filter-items search-ul"},[_c('li',{class:_vm.$route.category === 'fashion' ? 'active' : ''},[_c('nuxt-link',{attrs:{"to":{ path: '/blog/classic', query: Object.assign({}, _vm.$route.query, {category: 'fashion'}) }}},[_vm._v("Fashion")])],1),_vm._v(" "),_c('li',{class:_vm.$route.category === 'lifestyle' ? 'active' : ''},[_c('nuxt-link',{attrs:{"to":{ path: '/blog/classic', query: Object.assign({}, _vm.$route.query, {category: 'lifestyle'}) }}},[_vm._v("Lifestyle")])],1),_vm._v(" "),_c('li',{class:_vm.$route.category === 'shopping' ? 'active' : ''},[_c('nuxt-link',{attrs:{"to":{ path: '/blog/classic', query: Object.assign({}, _vm.$route.query, {category: 'shopping'}) }}},[_vm._v("Shopping")])],1),_vm._v(" "),_c('li',{class:_vm.$route.category === 'sport' ? 'active' : ''},[_c('nuxt-link',{attrs:{"to":{ path: '/blog/classic', query: Object.assign({}, _vm.$route.query, {category: 'sport'}) }}},[_vm._v("Sport")])],1),_vm._v(" "),_c('li',{class:_vm.$route.category === 'travel' ? 'active' : ''},[_c('nuxt-link',{attrs:{"to":{ path: '/blog/classic', query: Object.assign({}, _vm.$route.query, {category: 'travel'}) }}},[_vm._v("Travel")])],1)])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("parse-content",{expanded: _vm.isRecentExpanded, collapsed: !_vm.isRecentExpanded}))+">","</div>",[_vm._ssrNode("<h3 class=\"widget-title border-no\">Popular Posts<span class=\"toggle-btn p-0 parse-content\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.isRecentExpanded}},[_c('div',{staticClass:"widget-body"},_vm._l((_vm.recent),function(post,index){return _c('div',{key:'recent-post' + index,staticClass:"post-col"},[_c('post-six',{attrs:{"post":post}})],1)}),0)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("parse-content",{expanded: _vm.isAboutExanded, collapsed: !_vm.isAboutExanded}))+">","</div>",[_vm._ssrNode("<h3 class=\"widget-title\">About us<span class=\"toggle-btn p-0 parse-content\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.isAboutExanded}},[_c('div',{staticClass:"widget-body"},[_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.")])])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible widget-posts\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("parse-content",{expanded: _vm.isTagExanded, collapsed: !_vm.isTagExanded}))+">","</div>",[_vm._ssrNode("<h3 class=\"widget-title\">Tag Cloud<span class=\"toggle-btn p-0 parse-content\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.isTagExanded}},[_c('div',{staticClass:"widget-body"},[_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Bag")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Classic")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Converse")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Leather")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Fit")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Green")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Man")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Jeans")]),_vm._v(" "),_c('a',{staticClass:"tag",attrs:{"href":"javascript:;"}},[_vm._v("Women")])])])],2)])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/blog/BlogSidebar.vue?vue&type=template&id=86ac1eb4&

// EXTERNAL MODULE: external "vue-images-loaded"
var external_vue_images_loaded_ = __webpack_require__(67);
var external_vue_images_loaded_default = /*#__PURE__*/__webpack_require__.n(external_vue_images_loaded_);

// EXTERNAL MODULE: external "vue-sticky-directive"
var external_vue_sticky_directive_ = __webpack_require__(65);
var external_vue_sticky_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_sticky_directive_);

// EXTERNAL MODULE: external "vue-slide-toggle"
var external_vue_slide_toggle_ = __webpack_require__(15);

// EXTERNAL MODULE: ./components/elements/post/PostSix.vue + 4 modules
var PostSix = __webpack_require__(89);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/BlogSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var BlogSidebarvue_type_script_lang_js_ = ({
  components: {
    VueSlideToggle: external_vue_slide_toggle_["VueSlideToggle"],
    PostSix: PostSix["a" /* default */]
  },
  directives: {
    Sticky: external_vue_sticky_directive_default.a,
    imagesLoaded: external_vue_images_loaded_default.a
  },
  data: function () {
    return {
      recent: null,
      loaded: false,
      search: '',
      isCatExpanded: true,
      isRecentExpanded: true,
      isAboutExanded: true,
      isTagExanded: true,
      isSticky: false
    };
  },
  created: function () {
    this.getBlog();
  },
  mounted: function () {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler, {
      passive: true
    });
  },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    getBlog: function () {
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/blog/sidebar`).then(response => {
        this.recent = response.data.recent;
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    },
    sidebarToggleHandler: function () {
      document.querySelector('body').classList.toggle('right-sidebar-active');
    },
    handleSkeleton: function () {
      this.loaded = true;
    },
    searchBlog: function (e) {
      document.querySelector('body').classList.remove('right-sidebar-active');
      this.$router.push({
        path: '/blog/classic',
        query: {
          search: this.removeXSSAttacks(this.search).__html,
          page: 1
        }
      });
    },
    resizeHandler: function () {
      this.isSticky = window.innerWidth > 991 ? true : false;
      window.innerWidth > 991 && document.querySelector('body').classList.contains('right-sidebar-active') && document.querySelector('body').classList.remove('right-sidebar-active');
    },
    removeXSSAttacks: function (html) {
      const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

      while (SCRIPT_REGEX.test(html)) {
        html = html.replace(SCRIPT_REGEX, '');
      } // Removing all events from tags...


      html = html.replace(/ on\w+="[^"]*"/g, '');
      return {
        __html: html
      };
    }
  }
});
// CONCATENATED MODULE: ./components/partials/blog/BlogSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogSidebarvue_type_script_lang_js_ = (BlogSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/blog/BlogSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "149114f8"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostOne.vue?vue&type=template&id=7132d894&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("post " + _vm.overlayClass + " " + (_vm.post.type === 'video' ? 'post-video' : ''))},[_vm._ssrNode("<figure class=\"post-media\">","</figure>",[(_vm.post.type !== 'gallery')?_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[(_vm.showLarge)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.large_pictures[0].url))),expression:"`${baseUrl}${post.large_pictures[0].url}`"}],key:"large",attrs:{"width":_vm.post.large_pictures[0].width,"height":_vm.post.large_pictures[0].height,"alt":"post"}}):_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.pictures[0].url))),expression:"`${baseUrl}${post.pictures[0].url}`"}],attrs:{"width":_vm.post.pictures[0].width,"height":_vm.post.pictures[0].height,"alt":"post"}})]):_vm._e(),_vm._ssrNode(" "),(_vm.post.type === 'gallery')?_c('swiper-carousel',{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{"options":_vm.baseSlider11}},_vm._l((_vm.post.pictures),function(item){return _c('div',{key:"post-one-" + item.url,staticClass:"swiper-slide"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"width":item.width,"height":item.height,"alt":"post"}})])}),0):_vm._e(),_vm._ssrNode(" "+((_vm.post.type === 'video')?("<span class=\"video-play\"></span> <video width=\"380\"><source"+(_vm._ssrAttr("src",("" + _vm.baseUrl + (_vm.post.video.url))))+"></video>"):"<!---->")+" "+((_vm.showCalendar)?("<div class=\"post-calendar\"><span class=\"post-day\">"+_vm._ssrEscape(_vm._s(_vm.date.getDate()))+"</span> <span class=\"post-month\">"+_vm._ssrEscape(_vm._s(new Intl.DateTimeFormat('en-Us', {month:'short'}).format(_vm.date)))+"</span></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-details\">","</div>",[_vm._ssrNode("<h4 class=\"post-title\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v(_vm._s(_vm.post.title))])],1),_vm._ssrNode(" <p class=\"post-content\">"+_vm._ssrEscape("\n\t\t\t"+_vm._s(_vm.post.content)+"\n\t\t")+"</p> "),_c('nuxt-link',{staticClass:"btn btn-link",class:_vm.btnClass,attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v("Read More"),_c('i',{staticClass:"d-icon-arrow-right"})])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/post/PostOne.vue?vue&type=template&id=7132d894&

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PostOnevue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */]
  },
  props: {
    post: Object,
    overlayClass: {
      type: String,
      default: 'overlay-dark'
    },
    btnClass: {
      type: String,
      default: 'btn-underline btn-dark'
    },
    showCalendar: {
      type: Boolean,
      default: true
    },
    showLarge: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */],
      baseSlider11: carousel["c" /* baseSlider11 */]
    };
  },
  computed: {
    date: function () {
      return new Date(this.post.date);
    }
  },
  methods: {
    playVideoHandler: function (e) {
      Object(utils["c" /* playVideo */])(e);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/post/PostOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostOnevue_type_script_lang_js_ = (PostOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/post/PostOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a5545cee"
  
)

/* harmony default export */ var PostOne = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map