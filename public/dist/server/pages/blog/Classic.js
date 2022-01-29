exports.ids = [3];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/Classic.vue?vue&type=template&id=4b06148b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main skeleton-body"},[_vm._ssrNode("<nav class=\"breadcrumb-nav\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"active",attrs:{"to":""}},[_vm._v("Blog")])],1),_vm._ssrNode(" <li>Classic</li>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content with-sidebar\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row gutter-lg\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\">","</div>",[_vm._ssrNode("<div class=\"posts\">","</div>",[_vm._ssrNode((_vm._ssrList((new Array(_vm.itemsPerPage).fill(1)),function(item,index){return ("<div"+(_vm._ssrClass("skel-post",_vm.loaded ? 'd-none': ''))+"></div>")}))+" "),[_vm._ssrNode("<div class=\"info-box with-icon\">"+((_vm.posts && _vm.posts.length === 0)?("<p"+(_vm._ssrClass("mt-4",_vm.loaded ? '': 'd-none'))+">No blogs were found matching your selection.</p>"):"<!---->")+"</div> "),_vm._l((_vm.posts),function(post,index){return _vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.loaded ? '': 'd-none'))+">","</div>",[_c('post-five',{attrs:{"post":post}})],1)})]],2),_vm._ssrNode(" "),(_vm.totalPage)?_c('pagination',{attrs:{"total-page":_vm.totalPage}}):_vm._e()],2),_vm._ssrNode(" "),_c('blog-sidebar')],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/Classic.vue?vue&type=template&id=4b06148b&

// EXTERNAL MODULE: external "vue-images-loaded"
var external_vue_images_loaded_ = __webpack_require__(67);
var external_vue_images_loaded_default = /*#__PURE__*/__webpack_require__.n(external_vue_images_loaded_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostFive.vue?vue&type=template&id=8e26c1ee&
var PostFivevue_type_template_id_8e26c1ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("post post-classic " + (_vm.post.type === 'gallery' ? '' : 'overlay-zoom') + " " + _vm.overlayClass + " " + (_vm.post.type === 'video' ? 'post-video' : ''))},[_vm._ssrNode("<figure class=\"post-media\">","</figure>",[(_vm.post.type !== 'gallery')?_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.large_pictures[0].url))),expression:"`${baseUrl}${post.large_pictures[0].url}`"}],attrs:{"width":_vm.post.large_pictures[0].width,"height":_vm.post.large_pictures[0].height,"alt":"post"}})]):_vm._e(),_vm._ssrNode(" "),(_vm.post.type === 'gallery')?_c('swiper-carousel',{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{"options":_vm.baseSlider11}},_vm._l((_vm.post.large_pictures),function(item){return _c('div',{key:"post-one-" + item.url,staticClass:"swiper-slide"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"width":item.width,"height":item.height,"alt":"post"}})])}),0):_vm._e(),_vm._ssrNode(" "+((_vm.post.type === 'video')?("<span class=\"video-play\"></span> <video width=\"380\"><source"+(_vm._ssrAttr("src",("" + _vm.baseUrl + (_vm.post.video.url))))+"></video>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-details\">","</div>",[_vm._ssrNode("<div class=\"post-meta\">\n\t\t\tby <a href=\"javascript:;\" class=\"post-author\">"+_vm._ssrEscape(_vm._s(_vm.post.author))+"</a> on <a href=\"javascript:;\" class=\"post-date\">"+_vm._ssrEscape(_vm._s(new Date( _vm.post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )))+"</a> | <a href=\"javascript:;\" class=\"post-comment\"><span>"+_vm._ssrEscape(_vm._s(_vm.post.comments))+"</span> Comments</a></div> "),_vm._ssrNode("<h4 class=\"post-title\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v(_vm._s(_vm.post.title))])],1),_vm._ssrNode(" <p class=\"post-content\">"+_vm._ssrEscape("\n\t\t\t"+_vm._s(_vm.post.content)+"\n\t\t")+"</p> "),_c('nuxt-link',{staticClass:"btn btn-link btn-primary",class:_vm.btnClass,attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v("Read More"),_c('i',{staticClass:"d-icon-arrow-right"})])],2)],2)}
var PostFivevue_type_template_id_8e26c1ee_staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/post/PostFive.vue?vue&type=template&id=8e26c1ee&

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostFive.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PostFivevue_type_script_lang_js_ = ({
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
      default: 'btn-underline'
    },
    showCalendar: {
      type: Boolean,
      default: true
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
// CONCATENATED MODULE: ./components/elements/post/PostFive.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostFivevue_type_script_lang_js_ = (PostFivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/post/PostFive.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostFivevue_type_script_lang_js_,
  PostFivevue_type_template_id_8e26c1ee_render,
  PostFivevue_type_template_id_8e26c1ee_staticRenderFns,
  false,
  null,
  null,
  "6de35e1f"
  
)

/* harmony default export */ var PostFive = (component.exports);
// EXTERNAL MODULE: ./components/elements/Pagination.vue + 4 modules
var Pagination = __webpack_require__(76);

// EXTERNAL MODULE: ./components/partials/blog/BlogSidebar.vue + 4 modules
var BlogSidebar = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/Classic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Classicvue_type_script_lang_js_ = ({
  components: {
    PostFive: PostFive,
    Pagination: Pagination["a" /* default */],
    BlogSidebar: BlogSidebar["a" /* default */]
  },
  directives: {
    imagesLoaded: external_vue_images_loaded_default.a
  },
  data: function () {
    return {
      posts: null,
      total: 0,
      page: 1,
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
      this.posts = null;
      this.total = 0;
      this.totalPage = 0;
      if (isScroll) Object(utils["d" /* scrollHandler */])();
      let params = {
        page: this.$route.query.page ? this.$route.query.page : this.page,
        from: this.$route.query.page ? (this.$route.query.page - 1) * this.itemsPerPage : 0,
        to: this.$route.query.page ? this.$route.query.page * this.itemsPerPage : this.itemsPerPage,
        search: this.$route.query.search ? this.$route.query.search : ''
      };
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/blog`, {
        params: { ...params,
          category: this.$route.query.category
        }
      }).then(response => {
        this.posts = response.data.data;
        this.total = response.data.total;
        this.totalPage = parseInt(this.total / this.itemsPerPage) + (this.total % this.itemsPerPage ? 1 : 0);
        this.loaded = true;
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/Classic.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_Classicvue_type_script_lang_js_ = (Classicvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/blog/Classic.vue





/* normalize component */

var Classic_component = Object(componentNormalizer["a" /* default */])(
  blog_Classicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "163d52e0"
  
)

/* harmony default export */ var Classic = __webpack_exports__["default"] = (Classic_component.exports);

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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/Pagination.vue?vue&type=template&id=2452100d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.indexList && _vm.totalPage > 1)?_c('ul',{staticClass:"pagination"},[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page < 2 ? 'disabled' : ''))+">","</li>",[(_vm.page > 1)?_c('nuxt-link',{staticClass:"page-link page-link-prev",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: parseInt(_vm.page) - 1}) }}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v("Prev\n\t\t")]):_c('a',{staticClass:"page-link page-link-prev",attrs:{"href":"javascript:;"}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v("Prev\n\t\t")])],1),_vm._ssrNode(" "),_vm._l((_vm.indexList),function(item,index){return [(index === 1 && item > 2)?[_vm._ssrNode("<span class=\"page-item dots\">...</span> "),_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1)]:(index === _vm.indexList.length - 2 && item + 1 < _vm.totalPage)?[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1),_vm._ssrNode(" <span class=\"page-item dots\">...</span>")]:[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1)]]}),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page > _vm.totalPage - 1 ? 'disabled' : ''))+">","</li>",[(_vm.page < _vm.totalPage)?_c('nuxt-link',{staticClass:"page-link page-link-next",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: parseInt(_vm.page) + 1}) }}},[_vm._v("\n\t\t\tNext"),_c('i',{staticClass:"d-icon-arrow-right"})]):_c('a',{staticClass:"page-link page-link-next",attrs:{"href":"javascript:;"}},[_vm._v("Next"),_c('i',{staticClass:"d-icon-arrow-right"})])],1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/Pagination.vue?vue&type=template&id=2452100d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    totalPage: Number
  },
  watch: {
    $route: function () {
      this.getIndexList();
    },
    totalPage: function () {
      this.getIndexList();
    }
  },
  data: function () {
    return {
      maxShowCount: 7,
      distance: 2,
      min: 0,
      max: 0,
      page: 1,
      indexList: []
    };
  },
  created: function () {
    this.getIndexList();
  },
  methods: {
    getIndexList: function () {
      this.indexList = [];
      this.page = this.$route.query.page ? this.$route.query.page : 1;
      this.min = Math.max(this.page - this.distance, 2);
      this.max = Math.min(this.page + this.distance, this.totalPage - 1);

      for (let i = this.min; i <= this.max; i++) {
        this.indexList[i - this.min + 1] = i;
      }

      this.indexList[0] = 1;
      this.indexList[this.max - this.min + 2] = this.totalPage;
    }
  }
});
// CONCATENATED MODULE: ./components/elements/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/Pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58643e8e"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["a"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=Classic.js.map