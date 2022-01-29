exports.ids = [8];
exports.modules = {

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/mask/masonry.vue?vue&type=template&id=5cf4f13c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main skeleton-body"},[_vm._ssrNode("<nav class=\"breadcrumb-nav\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"active",attrs:{"to":"/blog/classic"}},[_vm._v("Blog")])],1),_vm._ssrNode(" <li>Mask Masonry</li>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content pb-10 mb-10\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.counts)?_vm._ssrNode("<ul class=\"nav-filters filter-underline blog-filters justify-content-center\">","</ul>",_vm._l((_vm.filterList),function(item,index){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{class:("nav-filter " + (_vm.category === item.slug || (_vm.category === undefined && item.slug === 'all' ) ? 'active' : '')),attrs:{"to":{path: '/blog/mask/masonry', query: { category: item.slug } }}},[_vm._v(_vm._s(item.name)+"\n\t\t\t\t\t")]),_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.counts[item.slug]))+"</span>")],2)}),0):_vm._e(),_vm._ssrNode(" "+((!_vm.loaded)?("<div class=\"row\">"+(_vm._ssrList((new Array(_vm.itemsPerPage).fill(1)),function(item,index){return ("<div class=\"skel-post grid-item col-sm-6 col-lg-4\"></div>")}))+"</div>"):"<!---->")+" "),(_vm.loaded && _vm.posts)?_c('isotope',{ref:"isotopeRef",staticClass:"posts grid row masonry mb-5",attrs:{"options":_vm.isotopeOptions,"list":_vm.posts}},[[(_vm.posts && _vm.posts.length === 0)?_c('div',{staticClass:"info-box with-icon"},[_c('p',{staticClass:"mt-4"},[_vm._v("No blogs were found matching your selection.")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.posts),function(post,index){return _c('div',{key:'post' + index,staticClass:"grid-item col-sm-6 col-lg-4"},[_c('post-four',{attrs:{"is-original":true,"post":post,"showCalendar":false}})],1)}),_vm._v(" "),_c('div',{key:"sizer",staticClass:"grid-sizer col-1"})]],2):_vm._e(),_vm._ssrNode(" "),(_vm.totalPage)?_c('pagination',{attrs:{"total-page":_vm.totalPage}}):_vm._e()],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/mask/masonry.vue?vue&type=template&id=5cf4f13c&

// EXTERNAL MODULE: external "vueisotope"
var external_vueisotope_ = __webpack_require__(69);
var external_vueisotope_default = /*#__PURE__*/__webpack_require__.n(external_vueisotope_);

// EXTERNAL MODULE: ./components/elements/post/PostFour.vue + 4 modules
var PostFour = __webpack_require__(99);

// EXTERNAL MODULE: ./components/elements/Pagination.vue + 4 modules
var Pagination = __webpack_require__(76);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/data/menu.js
var menu = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/mask/masonry.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var masonryvue_type_script_lang_js_ = ({
  components: {
    isotope: external_vueisotope_default.a,
    PostFour: PostFour["a" /* default */],
    Pagination: Pagination["a" /* default */]
  },
  data: function () {
    return {
      posts: null,
      category: 'all',
      total: 0,
      page: 1,
      itemsPerPage: 9,
      loaded: false,
      totalPage: null,
      filterList: menu["a" /* filterList */],
      counts: {},
      isotopeOptions: {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.grid-sizer'
        }
      }
    };
  },
  computed: {
    catList: function () {
      let text = '';
      menu["a" /* filterList */].forEach(item => {
        text = text.concat(item.slug, ',');
      });
      return text;
    }
  },
  watch: {
    $route: function () {
      this.getBlog();
    }
  },
  created: function () {
    this.getBlog();
  },
  methods: {
    getBlog: function () {
      this.loaded = false;
      this.posts = null;
      this.category = this.$route.query.category;
      let params = {
        page: this.$route.query.page ? this.$route.query.page : this.page,
        from: this.$route.query.page ? (this.$route.query.page - 1) * this.itemsPerPage : 0,
        to: this.$route.query.page ? this.$route.query.page * this.itemsPerPage : this.itemsPerPage,
        filter_list: this.catList
      };
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/blog`, {
        params: { ...params,
          category: this.category
        }
      }).then(response => {
        this.posts = response.data.data;
        this.total = response.data.total;
        this.counts = response.data.counts;
        this.loaded = true;
        setTimeout(() => {
          this.$refs.isotopeRef.iso.layout();
        }, 1);
        this.totalPage = parseInt(this.total / this.itemsPerPage) + (this.total % this.itemsPerPage ? 1 : 0);
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/mask/masonry.vue?vue&type=script&lang=js&
 /* harmony default export */ var mask_masonryvue_type_script_lang_js_ = (masonryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/mask/masonry.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mask_masonryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8593feb2"
  
)

/* harmony default export */ var masonry = __webpack_exports__["default"] = (component.exports);

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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostFour.vue?vue&type=template&id=559409d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post post-mask gradient",class:{'post-video': _vm.post.type === 'video'}},[_vm._ssrNode("<figure"+(_vm._ssrClass(null,("post-media " + (_vm.post.type === 'gallery' ? '' : 'overlay-zoom'))))+">","</figure>",[(_vm.post.type !== 'gallery' && !_vm.isOriginal)?_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.pictures[0].url))),expression:"`${baseUrl}${post.pictures[0].url}`"}],attrs:{"width":_vm.post.pictures[0].width,"height":_vm.post.pictures[0].height,"alt":"post"}})]):_vm._e(),_vm._ssrNode(" "),(_vm.post.type !== 'gallery' && _vm.isOriginal)?_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.post.large_pictures[0].url))),expression:"`${baseUrl}${post.large_pictures[0].url}`"}],attrs:{"width":_vm.post.large_pictures[0].width,"height":_vm.post.large_pictures[0].height,"alt":"post"}})]):_vm._e(),_vm._ssrNode(" "),(_vm.post.type === 'gallery' && !_vm.isOriginal)?_c('swiper-carousel',{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{"options":_vm.baseSlider11}},_vm._l((_vm.post.pictures),function(item){return _c('div',{key:"post-one-" + item.url,staticClass:"swiper-slide"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"width":item.width,"height":item.height,"alt":"post"}})])}),0):_vm._e(),_vm._ssrNode(" "),(_vm.post.type === 'gallery' && _vm.isOriginal)?_c('swiper-carousel',{staticClass:"swiper-theme swiper-dot-inner swiper-dot-white",attrs:{"options":_vm.baseSlider11}},_vm._l((_vm.post.large_pictures),function(item){return _c('div',{key:"post-one-" + item.url,staticClass:"swiper-slide"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"width":item.width,"height":item.height,"alt":"post"}})])}),0):_vm._e(),_vm._ssrNode(" "+((_vm.post.type === 'video')?("<span class=\"video-play\"></span> <video width=\"380\"><source"+(_vm._ssrAttr("src",("" + _vm.baseUrl + (_vm.post.video.url))))+"></video>"):"<!---->")+" "+((_vm.showCalendar)?("<div class=\"post-calendar\"><span class=\"post-day\">"+_vm._ssrEscape(_vm._s(_vm.date.getDate()))+"</span> <span class=\"post-month\">"+_vm._ssrEscape(_vm._s(new Intl.DateTimeFormat('en-Us', {month:'short'}).format(_vm.date)))+"</span></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-details\">","</div>",[_vm._ssrNode("<div class=\"post-meta\">\n\t\t\ton <a href=\"javascript:;\" class=\"post-date\">"+_vm._ssrEscape(_vm._s(_vm.date.toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )))+"</a>\n\t\t\t| <a href=\"javascript:;\" class=\"post-comment\"><span>"+_vm._ssrEscape(_vm._s(_vm.post.comments))+"</span> Comments</a></div> "),_vm._ssrNode("<h4 class=\"post-title\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v(_vm._s(_vm.post.title))])],1),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"btn btn-link btn-underline btn-white",attrs:{"to":("/blog/single/" + (_vm.post.slug))}},[_vm._v("Read More"),_c('i',{staticClass:"d-icon-arrow-right"})])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/post/PostFour.vue?vue&type=template&id=559409d4&

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/post/PostFour.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PostFourvue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */]
  },
  props: {
    post: Object,
    isOriginal: {
      type: Boolean,
      default: false
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
// CONCATENATED MODULE: ./components/elements/post/PostFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_PostFourvue_type_script_lang_js_ = (PostFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/post/PostFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_PostFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ab69cada"
  
)

/* harmony default export */ var PostFour = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=masonry.js.map