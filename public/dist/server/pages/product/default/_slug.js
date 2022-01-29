exports.ids = [38];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/media/MediaOne.vue?vue&type=template&id=8d61ff80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-gallery pg-vertical"},[_c('swiper-carousel',{ref:"mediaRef",staticClass:"product-single-carousel swiper-theme swiper-nav-inner",attrs:{"options":Object.assign({}, _vm.baseSlider4, {spaceBetween: 0})}},_vm._l((_vm.product.large_pictures),function(item,index){return _c('div',{key:("large-" + index),staticClass:"swiper-slide"},[_c('figure',{staticClass:"product-image d-flex"},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (item.url)),"alt":"large-picture","width":item.width,"height":item.height}})])])}),0),_vm._ssrNode(" <a href=\"javascript:;\" class=\"product-image-full\"><i class=\"d-icon-zoom\"></i></a> "),_c('light-box',{ref:"lightBox",attrs:{"media":_vm.lightBoxMedia,"show-light-box":false}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-thumbs-wrap\">","</div>",[_vm._ssrNode("<div class=\"product-thumbs\">","</div>",[_c('swiper-carousel',{ref:"thumbRef",staticClass:"swiper-theme swiper-nav-full h-100 w-100",attrs:{"options":_vm.baseSlider13},on:{"resize":_vm.updatedThumb}},_vm._l((_vm.product.pictures),function(item,index){return _c('div',{key:("thumb-one-" + index),staticClass:"product-thumb swiper-slide",class:{active: index === 0},on:{"click":function($event){return _vm.activeThumb(index)}}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"alt":"product thumbnail","width":item.width,"height":item.height}})])}),0)],1)]),_vm._ssrNode(" <div class=\"product-label-group\">"+((_vm.product.is_new)?("<div class=\"product-label label-new\">New</div>"):"<!---->")+" "+((_vm.product.stock === '0')?("<div class=\"product-label label-stock\">Out</div>"):"<!---->")+" "+((_vm.product.is_top)?("<div class=\"product-label label-top\">Top</div>"):"<!---->")+" "+((_vm.product.discount > 0)?("<div class=\"product-label label-sale\">"+((_vm.product.variants.length > 0)?("Sale"):(_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")))+"</div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/product/media/MediaOne.vue?vue&type=template&id=8d61ff80&

// EXTERNAL MODULE: external "vue-image-lightbox"
var external_vue_image_lightbox_ = __webpack_require__(66);
var external_vue_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_image_lightbox_);

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/media/MediaOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var MediaOnevue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */],
    LightBox: external_vue_image_lightbox_default.a
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */],
      baseSlider4: carousel["m" /* baseSlider4 */],
      baseSlider13: carousel["e" /* baseSlider13 */]
    };
  },
  props: {
    product: Object
  },
  computed: {
    lightBoxMedia: function () {
      return this.product.large_pictures.reduce((acc, cur) => {
        return [...acc, {
          src: `${api["a" /* baseUrl */]}${cur.url}`,
          thumb: `${api["a" /* baseUrl */]}${cur.url}`
        }];
      }, []);
    }
  },
  mounted: function () {
    let self = this;
    this.$refs.mediaRef.mySwiper.on('transitionStart', function () {
      let activeIndex = self.$refs.mediaRef.mySwiper.activeIndex;
      self.$refs.thumbRef.mySwiper.slideTo(activeIndex);
      self.$refs.thumbRef.mySwiper.$el.find('.swiper-wrapper').find('.product-thumb.active')[0].classList.remove('active');
      self.$refs.thumbRef.mySwiper.$el.find('.swiper-wrapper').find('.product-thumb')[activeIndex].classList.add('active');
    });
  },
  methods: {
    activeThumb: function (index) {
      this.$refs.mediaRef.mySwiper.slideTo(index);
      this.$refs.thumbRef.mySwiper.slideTo(index);
    },
    updatedThumb: function () {
      this.$refs.thumbRef.mySwiper.update();
    },
    openLightBox: function () {
      this.$refs.lightBox.showImage(this.$refs.mediaRef.mySwiper.activeIndex);
    }
  }
});
// CONCATENATED MODULE: ./components/partials/product/media/MediaOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var media_MediaOnevue_type_script_lang_js_ = (MediaOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/product/media/MediaOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  media_MediaOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dcb3aeea"
  
)

/* harmony default export */ var MediaOne = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/default/_slug.vue?vue&type=template&id=9670f848&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main mt-6 single-product"},[(_vm.loaded)?_vm._ssrNode("<div class=\"page-content mb-10 pb-6\">","</div>",[(_vm.product)?_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"product product-single row mb-3\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('media-one',{staticClass:"pb-lg-0 pb-6",attrs:{"product":_vm.product}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('detail-one',{attrs:{"product":_vm.product,"prev":_vm.prev,"next":_vm.next}})],1)],2),_vm._ssrNode(" "),_c('desc-one',{attrs:{"product":_vm.product}}),_vm._ssrNode(" "),_c('related-products',{staticClass:"pt-3 mt-10",attrs:{"products":_vm.related}})],2):_vm._e()]):[_vm._ssrNode("<div class=\"skeleton-body container mb-10\">","</div>",[_vm._ssrNode("<div class=\"row mb-3\"><div class=\"col-md-6 pg-vertical\"><div class=\"skel-pro-gallery\"></div></div> <div class=\"col-md-6\"><div class=\"skel-pro-summary\"></div></div></div> <div class=\"skel-pro-tabs\"></div> "),_vm._ssrNode("<section class=\"pt-3 mt-4\">","</section>",[_vm._ssrNode("<h2 class=\"title justify-content-center\">Related Products</h2> "),_c('swiper-carousel',{staticClass:"skel-carousel swiper-theme swiper-nav-full related-products-carousel",attrs:{"options":_vm.baseSlider17}},_vm._l(([1,2,3,4,5,6]),function(item){return _c('div',{key:'product-skel-' + item,staticClass:"swiper-slide product-loading-overlay"})}),0)],2)],2)]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/default/_slug.vue?vue&type=template&id=9670f848&

// EXTERNAL MODULE: ./components/partials/product/media/MediaOne.vue + 4 modules
var MediaOne = __webpack_require__(103);

// EXTERNAL MODULE: ./components/partials/product/detail/DetailOne.vue + 4 modules
var DetailOne = __webpack_require__(96);

// EXTERNAL MODULE: ./components/partials/product/desc/DescOne.vue + 4 modules
var DescOne = __webpack_require__(83);

// EXTERNAL MODULE: ./components/partials/product/RelatedProducts.vue + 4 modules
var RelatedProducts = __webpack_require__(82);

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/default/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MediaOne: MediaOne["a" /* default */],
    DetailOne: DetailOne["a" /* default */],
    DescOne: DescOne["a" /* default */],
    RelatedProducts: RelatedProducts["a" /* default */]
  },
  data: function () {
    return {
      baseSlider17: carousel["i" /* baseSlider17 */],
      product: null,
      loaded: false,
      prev: null,
      next: null,
      related: []
    };
  },
  created: function () {
    this.loaded = false;
    api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/product/${this.$route.params.slug}`).then(response => {
      this.product = response.data.data;
      this.next = response.data.next;
      this.prev = response.data.prev;
      this.related = response.data.related;
      this.loaded = true;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
  }
});
// CONCATENATED MODULE: ./pages/product/default/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var default_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/product/default/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  default_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05d1ec4c"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductTwo.vue?vue&type=template&id=f19f094a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product",class:{'product-variable': _vm.product.variants.length > 0}},[_vm._ssrNode("<figure class=\"product-media\">","</figure>",[_c('nuxt-link',{attrs:{"to":("/product/default/" + (_vm.product.slug))}},_vm._l((_vm.product.large_pictures.slice(0,2)),function(item,index){return _c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],key:("one-large-" + index),class:{'last-image': index === 1},attrs:{"alt":"large-picture","width":item.width,"height":item.height}})}),0),_vm._ssrNode(" <div class=\"product-label-group\">"+((_vm.product.is_new)?("<div class=\"product-label label-new\">New</div>"):"<!---->")+" "+((_vm.product.stock === '0')?("<div class=\"product-label label-stock\">Out</div>"):"<!---->")+" "+((_vm.product.is_top)?("<div class=\"product-label label-top\">Top</div>"):"<!---->")+" "+((_vm.product.discount > 0)?("<div class=\"product-label label-sale\">"+((_vm.product.variants.length > 0)?("Sale"):(_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")))+"</div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"product-action-vertical\">","</div>",[(_vm.product.variants.length === 0)?_vm._ssrNode("<a href=\"javascript:;\" title=\"Add to cart\" class=\"btn-product-icon btn-cart\">","</a>",[_vm._ssrNode("<i class=\"d-icon-bag\"></i>")],2):_c('nuxt-link',{staticClass:"btn-product-icon btn-cart",attrs:{"to":("/product/default/" + (_vm.product.slug)),"title":"Go to detail"}},[_c('i',{staticClass:"d-icon-arrow-right"})]),_vm._ssrNode(" "+((!_vm.isWishlisted)?("<a href=\"javascript:;\" title=\"Add to wishlist\" class=\"btn-wishlist btn-product-icon\"><i class=\"d-icon-heart\"></i></a>"):"<!---->")+" "+((_vm.isWishlisted)?("<a href=\"javascript:;\" title=\"Remove from wishlist\" class=\"btn-wishlist btn-product-icon\"><i class=\"d-icon-heart-full\"></i></a>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"product-action\"><a href=\"javascript:;\" title=\"Quick View\" class=\"btn-product btn-quickview\">Quick View</a></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-details\">","</div>",[_vm._ssrNode("<div class=\"product-cat\">","</div>",_vm._l((_vm.product.product_categories),function(cat,index){return _vm._ssrNode("<span>","</span>",[_c('nuxt-link',{attrs:{"to":{ path: '/shop', query: { category: cat.slug }}}},[_vm._v(_vm._s(cat.name))]),_vm._ssrNode(" "+((index < _vm.product.product_categories.length - 1)?(","):"<!---->"))],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<h3 class=\"product-name\">","</h3>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + _vm.product.slug}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"product-price\">"+((_vm.product.display_price[ 0 ] === _vm.product.display_price[ 1 ])?("<span class=\"price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</span>"):(((_vm.product.variants.length === 0 || (_vm.product.variants.length > 0 && !_vm.product.variants[0].price))?("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</ins> <del class=\"old-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</del>"):("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0]))+" – $"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</ins>"))))+"</div> <div class=\"ratings-container\"><div class=\"ratings-full\"><span class=\"ratings\""+(_vm._ssrStyle(null,{width: _vm.product.ratings * 20 + '%'}, null))+"></span> <span class=\"tooltiptext tooltip-top\">"+_vm._ssrEscape(_vm._s(_vm._f("priceFormat")(_vm.product.ratings)))+"</span></div> <a href=\"javascript:;\" class=\"rating-reviews\">"+_vm._ssrEscape("( "+_vm._s(_vm.product.reviews)+" reviews )")+"</a></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/product/ProductTwo.vue?vue&type=template&id=f19f094a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ProductTwovue_type_script_lang_js_ = ({
  props: {
    product: Object
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */]
    };
  },
  computed: { ...Object(external_vuex_["mapGetters"])('wishlist', ['wishList']),
    isWishlisted: function () {
      if (this.wishList.find(item => item.name === this.product.name)) return true;
      return false;
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])('cart', ['addToCart']),
    ...Object(external_vuex_["mapActions"])('wishlist', ['toggleWishlist']),
    wishlistHandler: function (e) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add('load-more-overlay', 'loading');
      setTimeout(() => {
        currentTarget.classList.remove('load-more-overlay', 'loading');
        this.toggleWishlist(this.product);
      }, 1000);
    },
    addCart: function () {
      if (this.product.stock > 0) {
        let saledProduct = { ...this.product,
          price: this.product.display_price[0]
        };
        this.addToCart({
          product: saledProduct
        });
      }
    },
    openQuickview: function () {
      this.$modal.show(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 108)), {
        slug: this.product.slug
      }, {
        width: '988',
        height: 'auto',
        adaptive: true,
        class: 'quickview-modal scrollable'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/elements/product/ProductTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductTwovue_type_script_lang_js_ = (ProductTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/product/ProductTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00aea209"
  
)

/* harmony default export */ var ProductTwo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/ElementTabs.vue?vue&type=template&id=2420d5b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":function($event){return _vm.tabClicked($event)}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/ElementTabs.vue?vue&type=template&id=2420d5b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/ElementTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ElementTabsvue_type_script_lang_js_ = ({
  methods: {
    tabClicked: function (e) {
      if (e.target.classList.contains('nav-link') || e.target.classList.contains('link-to-tab')) {
        e.preventDefault();
        let target = e.target;
        target.closest('.tab').querySelector('.nav-link.active').classList.remove('active');

        if (target.classList.contains('nav-link')) {
          // active nav-link
          target.classList.add('active');
        } else {
          let targets = target.closest('.tab').querySelectorAll('.nav-link');

          for (let i = 0; i < targets.length; i++) {
            if (targets[i].getAttribute('href') === target.getAttribute('href')) {
              targets[i].classList.add('active');
            }
          }
        } // active tab-pane


        let tabPane = e.target.closest('.tab').querySelector(target.getAttribute('href'));
        tabPane.parentNode.querySelector('.tab-pane.active').classList.remove('active');
        tabPane.classList.add('active');
        setTimeout(() => {
          tabPane.parentNode.querySelector('.tab-pane.active').classList.remove('active');
          tabPane.classList.add('active');
        }, 150);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/elements/ElementTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_ElementTabsvue_type_script_lang_js_ = (ElementTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/ElementTabs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_ElementTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "709adb8b"
  
)

/* harmony default export */ var ElementTabs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/InputQuantity.vue?vue&type=template&id=03fe3434&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.defaultClass},[_vm._ssrNode("<button class=\"quantity-minus d-icon-minus\"><span class=\"sr-only\">quantity plus button</span></button> <input type=\"number\" aria-label=\"quantity-input-form\" min=\"1\""+(_vm._ssrAttr("max",parseInt(_vm.max)))+(_vm._ssrAttr("value",(_vm.currentQty)))+" class=\"quantity form-control\"> <button class=\"quantity-plus d-icon-plus\"><span class=\"sr-only\">quantity minus button</span></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/InputQuantity.vue?vue&type=template&id=03fe3434&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/InputQuantity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputQuantityvue_type_script_lang_js_ = ({
  props: {
    qty: {
      type: Number,
      default: 1
    },
    max: {
      type: String,
      default: 1000
    },
    defaultClass: {
      type: String,
      default: 'input-group'
    }
  },
  data: function () {
    return {
      currentQty: this.qty
    };
  },
  watch: {
    currentQty: function () {
      if (this.currentQty > parseInt(this.max)) this.currentQty = this.max;
      if (this.currentQty === '') this.currentQty = 1;
      this.$emit('change-qty', parseInt(this.currentQty));
    }
  },
  methods: {
    plusQty: function () {
      if (this.currentQty < this.max) this.currentQty++;
    },
    minusQty: function () {
      if (this.currentQty > 1) this.currentQty--;
    }
  }
});
// CONCATENATED MODULE: ./components/elements/InputQuantity.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_InputQuantityvue_type_script_lang_js_ = (InputQuantityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/InputQuantity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_InputQuantityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d175cb4"
  
)

/* harmony default export */ var InputQuantity = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/CountDown.vue?vue&type=template&id=561782fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.type === 1)?("<span class=\"countdown-row countdown-show4\"><span class=\"countdown-section\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.days ? '0' + _vm.days : _vm.days))+"</span> <span class=\"countdown-period\">Days</span></span> <span class=\"countdown-section\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.hours ? '0' + _vm.hours : _vm.hours))+"</span> <span class=\"countdown-period\">Hours</span></span> <span class=\"countdown-section\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.minutes ? '0' + _vm.minutes : _vm.minutes))+"</span> <span class=\"countdown-period\">Minutes</span></span> <span class=\"countdown-section\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.seconds ? '0' + _vm.seconds : _vm.seconds))+"</span> <span class=\"countdown-period\">Seconds</span></span></span>"):"<!---->")+" "+((_vm.type===2)?("<span class=\"product-countdown-title\">Offer Ends In: </span> <div class=\"product-countdown countdown-compact\"><span class=\"countdown-section days\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.days ? '0' + _vm.days : _vm.days))+"</span> <span class=\"countdown-period\">days, </span></span> <span class=\"countdown-section hours\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.hours ? '0' + _vm.hours : _vm.hours))+"<span class=\"mr-1 ml-1\">:</span></span></span> <span class=\"countdown-section minutes\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.minutes ? '0' + _vm.minutes : _vm.minutes))+"<span class=\"mr-1 ml-1\">:</span></span></span> <span class=\"countdown-section seconds\"><span class=\"countdown-amount\">"+_vm._ssrEscape(_vm._s(10 > _vm.seconds ? '0' + _vm.seconds : _vm.seconds))+"</span></span></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/CountDown.vue?vue&type=template&id=561782fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/CountDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CountDownvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: Number,
      default: 1
    },
    until: String
  },
  data: function () {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      time: null
    };
  },
  mounted: function () {
    this.time = this.until.substring(1, this.until.length - 1);

    switch (this.until[this.until.length - 1]) {
      case 'h':
        this.time = this.time * 3600;
        break;

      case 'm':
        this.time = this.time * 60;
        break;

      case 'd':
        this.time = this.time * 3600 * 24;
        break;

      default:
        break;
    }

    this.core();
    setInterval(() => {
      this.core();
    }, 1000);
  },
  methods: {
    core: function () {
      let until = new Date(this.until);
      let current = new Date();
      let time = (until - current) / 1000;
      if (this.until.substring(0, 1) === '+') time = this.time;
      this.time--;
      time = Math.max(time, 0);
      this.days = Math.floor(time / (3600 * 24));
      this.hours = Math.floor(time % (3600 * 24) / 3600);
      this.minutes = Math.floor(time % 3600 / 60);
      this.seconds = Math.floor(time % 60);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/CountDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_CountDownvue_type_script_lang_js_ = (CountDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/CountDown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_CountDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a42e7fc"
  
)

/* harmony default export */ var CountDown = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/ProductNav.vue?vue&type=template&id=326921d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"product-nav"},[(_vm.prev)?_vm._ssrNode("<li"+(_vm._ssrClass(null,("product-nav-" + (_vm.next ? 'prev' : 'next no-next'))))+">","</li>",[_c('nuxt-link',{attrs:{"to":("/product/" + _vm.type + "/" + (_vm.prev.slug))}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v(" Prev\n\t\t\t"),_c('span',{staticClass:"product-nav-popup"},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (_vm.prev.pictures[0].url)),"alt":"prev","width":"110","height":"123"}}),_vm._v(" "),_c('span',{staticClass:"product-name"},[_vm._v(_vm._s(_vm.prev.name))])])])],1):_vm._e(),_vm._ssrNode(" "),(_vm.next)?_vm._ssrNode("<li class=\"product-nav-next\">","</li>",[(_vm.next)?_c('nuxt-link',{attrs:{"to":("/product/" + _vm.type + "/" + (_vm.next.slug))}},[_vm._v("\n\t\t\tNext "),_c('i',{staticClass:"d-icon-arrow-right"}),_vm._v(" "),_c('span',{staticClass:"product-nav-popup"},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (_vm.next.pictures[0].url)),"alt":"product thumbnail","width":"110","height":"123"}}),_vm._v(" "),_c('span',{staticClass:"product-name"},[_vm._v(_vm._s(_vm.next.name))])])]):_vm._e()],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/product/ProductNav.vue?vue&type=template&id=326921d8&

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/ProductNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductNavvue_type_script_lang_js_ = ({
  props: {
    next: Object,
    prev: Object
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */],
      type: 'default'
    };
  },
  mounted: function () {
    this.type = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
  }
});
// CONCATENATED MODULE: ./components/partials/product/ProductNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductNavvue_type_script_lang_js_ = (ProductNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/product/ProductNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51961e36"
  
)

/* harmony default export */ var ProductNav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/RelatedProducts.vue?vue&type=template&id=353c9cf6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.products.length > 0)?_c('section',[_vm._ssrNode("<h2 class=\"title justify-content-center\">Related Products</h2> "),_c('swiper-carousel',{staticClass:"swiper-theme swiper-nav-full related-products-carousel",attrs:{"options":_vm.baseSlider17}},_vm._l((_vm.products.slice(0, 4)),function(item){return _c('product-two',{key:("related-produts-" + (item.slug)),staticClass:"swiper-slide",attrs:{"product":item}})}),1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/product/RelatedProducts.vue?vue&type=template&id=353c9cf6&

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./components/elements/product/ProductTwo.vue + 4 modules
var ProductTwo = __webpack_require__(73);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/RelatedProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RelatedProductsvue_type_script_lang_js_ = ({
  props: {
    products: Array
  },
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */],
    ProductTwo: ProductTwo["a" /* default */]
  },
  data: function () {
    return {
      baseSlider17: carousel["i" /* baseSlider17 */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/product/RelatedProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_RelatedProductsvue_type_script_lang_js_ = (RelatedProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/product/RelatedProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_RelatedProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9dfa7a64"
  
)

/* harmony default export */ var RelatedProducts = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/desc/DescOne.vue?vue&type=template&id=2445eced&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab tab-nav-simple product-tabs"},[_c('element-tabs',[_c('ul',{staticClass:"nav nav-tabs justify-content-center"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#product-tab-description"}},[_vm._v("Description")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#product-tab-additional"}},[_vm._v("Additional information")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#product-tab-size-guide"}},[_vm._v("Size Guide")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#product-tab-reviews"}},[_vm._v("Reviews ("+_vm._s(_vm.product.reviews)+")")])])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"product-tab-description\" class=\"tab-pane active in\">","</div>",[_vm._ssrNode("<div class=\"row mt-6\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\"><h5 class=\"description-title mb-4 font-weight-semi-bold ls-m\">Features</h5> <p class=\"mb-2\">\n\t\t\t\t\t\tPraesent id enim sit amet.Tdio vulputate eleifend in in tortor.\n\t\t\t\t\t\tellus massa. siti iMassa ristique sit amet condim vel, facilisis\n\t\t\t\t\t\tquimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id\n\t\t\t\t\t\tenim sit amet.\n\t\t\t\t\t</p> <ul class=\"mb-8\"><li>Praesent id enim sit amet.Tdio vulputate</li> <li>Eleifend in in tortor. ellus massa.Dristique sitii</li> <li>Massa ristique sit amet condim vel</li> <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li></ul> <h5 class=\"description-title mb-3 font-weight-semi-bold ls-m\">Specifications\n\t\t\t\t\t</h5> <table class=\"table\"><tbody><tr><th class=\"font-weight-semi-bold text-dark pl-0\">Material</th> <td class=\"pl-4\">Praesent id enim sit amet.Tdio</td></tr> <tr><th class=\"font-weight-semi-bold text-dark pl-0\">Claimed Size</th> <td class=\"pl-4\">Praesent id enim sit</td></tr> <tr><th class=\"font-weight-semi-bold text-dark pl-0\">Recommended Use\n\t\t\t\t\t\t\t\t</th> <td class=\"pl-4\">Praesent id enim sit amet.Tdio vulputate eleifend\n\t\t\t\t\t\t\t\t\tin in tortor. ellus massa. siti</td></tr> <tr><th class=\"font-weight-semi-bold text-dark border-no pl-0\">\n\t\t\t\t\t\t\t\t\tManufacturer</th> <td class=\"border-no pl-4\">Praesent id enim</td></tr></tbody></table></div> "),_vm._ssrNode("<div class=\"col-md-6 pl-md-6 pt-4 pt-md-0\">","</div>",[_vm._ssrNode("<h5 class=\"description-title font-weight-semi-bold mb-5 ls-m\">Video Description\n\t\t\t\t\t</h5> "),_vm._ssrNode("<figure class=\"p-relative d-inline-block mb-2\">","</figure>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:('./images/product-video.jpg'),expression:"'./images/product-video.jpg'"}],attrs:{"width":"559","height":"370","alt":"Product"}},[]),_vm._ssrNode(" <a title=\"video play button\" href=\"/uploads/video_55464b5474.mp4\" class=\"btn-play btn-iframe\"><i class=\"d-icon-play-solid\"></i></a>")],2),_vm._ssrNode(" <div class=\"icon-box-wrap d-flex flex-wrap\"><div class=\"icon-box-wrap d-flex flex-wrap\"><div class=\"icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10\"><div class=\"icon-box-icon\"><i class=\"d-icon-lock\"></i></div> <div class=\"icon-box-content\"><h4 class=\"icon-box-title lh-1 pt-1 ls-s text-normal\">2 year\n\t\t\t\t\t\t\t\t\t\twarranty</h4> <p>Guarantee with no doubt</p></div></div> <div class=\"divider d-xl-show mr-10\"></div> <div class=\"icon-box icon-box-side icon-border pt-2 pb-2 mb-4\"><div class=\"icon-box-icon\"><i class=\"d-icon-truck\"></i></div> <div class=\"icon-box-content\"><h4 class=\"icon-box-title lh-1 pt-1 ls-s text-normal\">Free shipping\n\t\t\t\t\t\t\t\t\t</h4> <p>On orders over $50.00</p></div></div></div> "+((_vm.isDivider)?("<div class=\"divider d-xl-show mr-10\"></div>"):"<!---->")+"</div>")],2)],2)]),_vm._ssrNode(" <div id=\"product-tab-additional\" class=\"tab-pane\"><ul class=\"list-none\"><li><label>Categories:</label> "+(_vm._ssrList((_vm.product.product_categories),function(item,index){return ("<p>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(item.name))+((index < _vm.product.product_categories.length - 1)?(", "):"<!---->")+"</p>")}))+"</li> "+((_vm.product.brands.length > 0)?("<li><label>Brands:</label> "+(_vm._ssrList((_vm.product.brands),function(item,index){return ("<p>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(item.name))+((index < _vm.product.brands.length - 1)?(", "):"<!---->")+"</p>")}))+"</li>"):"<!---->")+" "+((_vm.vColors.length > 0)?("<li><label>Color:</label> "+(_vm._ssrList((_vm.vColors),function(item,index){return ("<p>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(item))+((index < _vm.vColors.length - 1)?(", "):"<!---->")+"</p>")}))+"</li>"):"<!---->")+" "+((_vm.vSizes.length > 0)?("<li><label>Size:</label> "+(_vm._ssrList((_vm.vSizes),function(item,index){return ("<p>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(item))+((index < _vm.vSizes.length - 1)?(", "):"<!---->")+"</p>")}))+"</li>"):"<!---->")+"</ul></div> <div id=\"product-tab-size-guide\" class=\"tab-pane \"><figure class=\"size-image mt-4 mb-4\"><img src=\"images/product-size.png\" alt=\"Size Guide Image\" width=\"217\" height=\"398\"></figure> <figure class=\"size-table mt-4 mb-4\"><table><thead><tr><th>SIZE</th> <th>CHEST(IN.)</th> <th>WEIST(IN.)</th> <th>HIPS(IN.)</th></tr></thead> <tbody><tr><th>XS</th> <td>34-36</td> <td>27-29</td> <td>34.5-36.5</td></tr> <tr><th>S</th> <td>36-38</td> <td>29-31</td> <td>36.5-38.5</td></tr> <tr><th>M</th> <td>38-40</td> <td>31-33</td> <td>38.5-40.5</td></tr> <tr><th>L</th> <td>40-42</td> <td>33-36</td> <td>40.5-43.5</td></tr> <tr><th>XL</th> <td>42-45</td> <td>36-40</td> <td>43.5-47.5</td></tr> <tr><th>XXL</th> <td>45-48</td> <td>40-44</td> <td>47.5-51.5</td></tr></tbody></table></figure></div> "),_vm._ssrNode("<div id=\"product-tab-reviews\" class=\"tab-pane \">","</div>",[(_vm.product.reviews > 0)?_vm._ssrNode("<div class=\"comments mb-8 pt-2 pb-2 border-no\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l(([1,2,3,4].slice(0, _vm.product.reviews)),function(item){return _vm._ssrNode("<li>","</li>",[_vm._ssrNode("<div class=\"comment\">","</div>",[_vm._ssrNode("<figure class=\"comment-media\">","</figure>",[_vm._ssrNode("<a href=\"javascript:;\">","</a>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("./images/blog/comments/" + item + ".jpg")),expression:"`./images/blog/comments/${item}.jpg`"}],attrs:{"alt":"avatar"}},[])])]),_vm._ssrNode(" <div class=\"comment-body\"><div class=\"comment-rating ratings-container mb-0\"><div class=\"ratings-full\"><span class=\"ratings\""+(_vm._ssrStyle(null,{width: _vm.product.ratings * 20 + '%'}, null))+"></span> <span class=\"tooltiptext tooltip-top\">"+_vm._ssrEscape(_vm._s(_vm._f("priceFormat")(_vm.product.ratings)))+"</span></div></div> <div class=\"comment-user\"><span class=\"comment-date text-body\">September 22, 2020 at 9:42\n\t\t\t\t\t\t\t\t\t\tpm</span> <h4><a href=\"javascript:;\">John Doe</a></h4></div> <div class=\"comment-content\"><p>Sed pretium, ligula sollicitudin laoreet viverra, tortor\n\t\t\t\t\t\t\t\t\t\tlibero sodales leo,\n\t\t\t\t\t\t\t\t\t\teget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.\n\t\t\t\t\t\t\t\t\t\tSuspendisse potenti.\n\t\t\t\t\t\t\t\t\t\tSed egestas, ante et vulputate volutpat, eros pede semper\n\t\t\t\t\t\t\t\t\t\test, vitae luctus metus libero eu augue.</p></div></div>")],2)])}),0)]):_vm._ssrNode(("<p>\n\t\t\t\tThere are no reviews yet.\n\t\t\t</p>")),_vm._ssrNode(" <div class=\"reply\"><div class=\"title-wrapper text-left\"><h3 class=\"title title-simple text-left text-normal\">Add a Review</h3> <p>Your email address will not be published. Required fields are marked *</p></div> <div class=\"rating-form\"><label for=\"rating\" class=\"text-dark\">Your rating * </label> <span class=\"rating-stars selected\">"+(_vm._ssrList(([1,2,3,4,5]),function(number){return ("<a href=\"javascript:;\""+(_vm._ssrClass(null,'star-'+number))+">"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(number)+"\n\t\t\t\t\t\t")+"</a>")}))+"</span> <select name=\"rating\" id=\"rating\" required=\"required\" style=\"display: none;\"><option value>Rate…</option> <option value=\"5\">Perfect</option> <option value=\"4\">Good</option> <option value=\"3\">Average</option> <option value=\"2\">Not that bad</option> <option value=\"1\">Very poor</option></select></div> <form action=\"#\"><textarea id=\"reply-message\" cols=\"30\" rows=\"6\" placeholder=\"Comment *\" required=\"required\" class=\"form-control mb-4\"></textarea> <div class=\"row\"><div class=\"col-md-6 mb-5\"><input type=\"text\" id=\"reply-name\" name=\"reply-name\" placeholder=\"Name *\" required=\"required\" class=\"form-control\"></div> <div class=\"col-md-6 mb-5\"><input type=\"email\" id=\"reply-email\" name=\"reply-email\" placeholder=\"Email *\" required=\"required\" class=\"form-control\"></div></div> <div class=\"form-checkbox mb-4\"><input type=\"checkbox\" id=\"signin-remember\" name=\"signin-remember\" class=\"custom-checkbox\"> <label for=\"signin-remember\" class=\"form-control-label\">\n\t\t\t\t\t\t\tSave my name, email, and website in this browser for the next time I\n\t\t\t\t\t\t\tcomment.\n\t\t\t\t\t\t</label></div> <button type=\"submit\" class=\"btn btn-primary btn-rounded\">Submit<i class=\"d-icon-arrow-right\"></i></button></form></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/product/desc/DescOne.vue?vue&type=template&id=2445eced&

// EXTERNAL MODULE: ./components/elements/ElementTabs.vue + 4 modules
var ElementTabs = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/desc/DescOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DescOnevue_type_script_lang_js_ = ({
  components: {
    ElementTabs: ElementTabs["a" /* default */]
  },
  props: {
    product: Object,
    isDivider: true
  },
  data: function () {
    return {
      vSizes: [],
      vColors: []
    };
  },
  mounted: function () {
    if (this.product.variants.length > 0) {
      if (this.product.variants[0].size) this.product.variants.forEach(item => {
        if (!this.vSizes.find(vsize => vsize === item.size.name)) this.vSizes.push(item.size.name);
      });
      if (this.product.variants[0].color) this.product.variants.forEach(item => {
        if (!this.vColors.find(vColor => vColor === item.color.name)) this.vColors.push(item.color.name);
      });
    }
  },
  methods: {
    setRating: function (e) {
      if (e.currentTarget.parentNode.querySelector('.active')) e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
      e.currentTarget.classList.add('active');
    },
    openVideoModal: function (e) {
      e.preventDefault();
      this.$modal.show(() => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.bind(null, 166)), {
        slug: e.currentTarget.getAttribute('href')
      }, {
        width: '1000',
        height: 'auto',
        adaptive: true,
        class: 'video-modal-container'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/partials/product/desc/DescOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var desc_DescOnevue_type_script_lang_js_ = (DescOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/product/desc/DescOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  desc_DescOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0852ed7b"
  
)

/* harmony default export */ var DescOne = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/detail/DetailOne.vue?vue&type=template&id=6f63c2cb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-details"},[(_vm.showNav)?_vm._ssrNode("<div class=\"product-navigation\">","</div>",[_vm._ssrNode("<ul class=\"breadcrumb breadcrumb-lg\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"title":"link to home","to":"/"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" <li><a href=\"javascript:;\" class=\"active\">Products</a></li> <li>Detail</li>")],2),_vm._ssrNode(" "),_c('product-nav',{attrs:{"next":_vm.next,"prev":_vm.prev}})],2):_vm._e(),_vm._ssrNode(" <h2 class=\"product-name\">"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> "),_vm._ssrNode("<div class=\"product-meta\">","</div>",[_vm._ssrNode(((_vm.product.sku)?("\n\t\t\tSKU: <span class=\"product-sku\">"+_vm._ssrEscape(_vm._s(_vm.product.sku))+"</span>"):"<!---->")+"\n\t\tCATEGORIES: "),_vm._ssrNode("<span class=\"product-brand\">","</span>",_vm._l((_vm.product.product_categories),function(item,index){return _vm._ssrNode("<span>","</span>",[_c('nuxt-link',{attrs:{"to":{path:'/shop', query:{category: item.slug}}}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item.name)+"\n\t\t\t\t")]),_vm._ssrNode(" "+((index < _vm.product.product_categories.length - 1)?(","):"<!---->"))],2)}),0)],2),_vm._ssrNode(" <div class=\"product-price\">"+((_vm.product.display_price[ 0 ] === _vm.product.display_price[ 1 ])?("<span class=\"price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</span>"):(((_vm.product.variants.length === 0 || (_vm.product.variants.length > 0 && !_vm.product.variants[0].price))?("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</ins> <del class=\"old-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</del>"):("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0]))+" – $"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</ins>"))))+"</div> "),(_vm.product.discount > 0)?[_c('count-down',{staticClass:"product-countdown-container font-weight-semi-bold",attrs:{"until":"2021-12-31","type":2}})]:_vm._e(),_vm._ssrNode(" <div class=\"ratings-container\"><div class=\"ratings-full\"><span class=\"ratings\""+(_vm._ssrStyle(null,{width: _vm.product.ratings * 20 + '%'}, null))+"></span> <span class=\"tooltiptext tooltip-top\">"+_vm._ssrEscape(_vm._s(_vm._f("priceFormat")(_vm.product.ratings)))+"</span></div> <a href=\"javascript:;\" class=\"rating-reviews\">"+_vm._ssrEscape("( "+_vm._s(_vm.product.reviews)+" reviews )")+"</a></div> <p class=\"product-short-desc\">"+_vm._ssrEscape(_vm._s(_vm.product.short_description))+"</p> "),(_vm.vColors.length > 0)?_vm._ssrNode("<div class=\"product-form product-variations product-color\">","</div>",[_vm._ssrNode("<label>Color:</label> "),_vm._ssrNode("<div class=\"select-box\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.curColor),expression:"curColor"}],staticClass:"form-control",attrs:{"name":"color","aria-label":"color-select-box"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.curColor=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{domProps:{"value":null}},[_vm._v("Choose an Option")]),_vm._v(" "),_vm._l((_vm.displayColors),function(item){return _c('option',{key:("color-" + (item.name)),domProps:{"value":item.name}},[_vm._v(_vm._s(item.name))])})],2)])],2):_vm._e(),_vm._ssrNode(" "),(_vm.vSizes.length > 0)?_vm._ssrNode("<div class=\"product-form product-variations product-size\">","</div>",[_vm._ssrNode("<label>Size:</label> "),_vm._ssrNode("<div class=\"product-form-group\">","</div>",[_vm._ssrNode("<div class=\"select-box\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.curSize),expression:"curSize"}],staticClass:"form-control",attrs:{"name":"size","aria-label":"size-select-box"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.curSize=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{domProps:{"value":null}},[_vm._v("Choose an Option")]),_vm._v(" "),_vm._l((_vm.displaySizes),function(item){return _c('option',{key:("size-" + (item.name)),domProps:{"value":item.name}},[_vm._v(_vm._s(item.name))])})],2)]),_vm._ssrNode(" "),_c('vue-slide-toggle',{staticClass:"overflow-hidden reset-value-button w-100 mb-0",attrs:{"open":_vm.curColor !== null || _vm.curSize !== null}},[_c('a',{staticClass:"product-variation-clean",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.cleanAll.apply(null, arguments)}}},[_vm._v("Clean All")])])],2)],2):_vm._e(),_vm._ssrNode(" "),_c('vue-slide-toggle',{attrs:{"open":_vm.curIndex > -1}},[(_vm.curIndex > -1)?_c('div',{staticClass:"product-variation-price"},[(_vm.product.variants[_vm.curIndex].price)?_c('div',{staticClass:"single-product-price"},[(_vm.product.variants[_vm.curIndex].sale_price)?_c('div',{key:"sale_price",staticClass:"product-price"},[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].sale_price)))]),_vm._v(" "),_c('del',{staticClass:"old-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].price)))])]):_c('div',{staticClass:"product-price"},[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].price)))])])]):_vm._e()]):_vm._e()]),_vm._ssrNode(" <hr class=\"product-divider mt-0\"> "),(!_vm.stickyCart)?_vm._ssrNode("<div class=\"product-form product-qty\">","</div>",[_vm._ssrNode("<div class=\"product-form-group\">","</div>",[_c('input-quantity',{staticClass:"mr-2",attrs:{"max":_vm.product.stock},on:{"change-qty":_vm.changeQty}}),_vm._ssrNode(" <button"+(_vm._ssrClass("btn-product btn-cart text-normal ls-normal font-weight-semi-bold",{disabled: !_vm.isCartActive}))+"><i class=\"d-icon-bag\"></i>Add to Cart</button>")],2)]):_c('sticky-wrapper',{attrs:{"stickyClass":"product-sticky-content","offsetTop":650,"top":73}},[_c('div',{staticClass:"sticky-content fix-top product-sticky-content"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"sticky-product-details"},[_c('figure',{staticClass:"product-image"},[_c('a',{attrs:{"href":"javascript:;"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (_vm.product.pictures[0].url))),expression:"`${baseUrl}${product.pictures[0].url}`"}],attrs:{"width":"90","height":"90","alt":"Product image"}})])]),_vm._v(" "),_c('div',[_c('h4',{staticClass:"product-title"},[_c('a',{attrs:{"href":"javascript:;"}},[_vm._v(_vm._s(_vm.product.name))])]),_vm._v(" "),_c('div',{staticClass:"product-info"},[(_vm.curIndex > -1)?_c('div',{staticClass:"product-price"},[(_vm.product.price)?[(_vm.product.sale_price)?[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.sale_price)))]),_vm._v(" "),_c('del',{staticClass:"old-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.price)))])]:[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.price)))])]]:[(_vm.product.variants[_vm.curIndex].sale_price)?[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].sale_price)))]),_vm._v(" "),_c('del',{staticClass:"old-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].price)))])]:[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.variants[_vm.curIndex].price)))])]]],2):[_c('div',{staticClass:"product-price"},[(_vm.product.display_price[ 0 ] === _vm.product.display_price[ 1 ])?[_c('span',{staticClass:"price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))])]:[(_vm.product.variants.length === 0 || (_vm.product.variants.length > 0 && !_vm.product.variants[0].price))?[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))]),_vm._v(" "),_c('del',{staticClass:"old-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))])]:[_c('ins',{staticClass:"new-price"},[_vm._v("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0]))+" – $"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))])]]],2)],_vm._v(" "),_c('div',{staticClass:"ratings-container"},[_c('div',{staticClass:"ratings-full"},[_c('span',{staticClass:"ratings",style:({width: _vm.product.ratings * 20 + '%'})}),_vm._v(" "),_c('span',{staticClass:"tooltiptext tooltip-top"},[_vm._v(_vm._s(_vm._f("priceFormat")(_vm.product.ratings)))])])])],2)])]),_vm._v(" "),_c('div',{staticClass:"product-form product-qty"},[_c('div',{staticClass:"product-form-group"},[_c('input-quantity',{staticClass:"mr-2",attrs:{"max":_vm.product.stock},on:{"change-qty":_vm.changeQty}}),_vm._v(" "),_c('button',{staticClass:"btn-product btn-cart text-normal ls-normal font-weight-semi-bold",class:{disabled: !_vm.isCartActive},on:{"click":_vm.addCart}},[_c('i',{staticClass:"d-icon-bag"}),_vm._v("Add to Cart")])],1)])])])]),_vm._ssrNode(" <hr class=\"product-divider mb-3\"> "),_vm._ssrNode("<div class=\"product-footer\">","</div>",[_vm._ssrNode("<div class=\"social-links mr-4\"><a title=\"social-icon-facebook\" href=\"javascript:;\" class=\"social-link social-facebook fab fa-facebook-f\"></a> <a title=\"social-icon-twitter\" href=\"javascript:;\" class=\"social-link social-twitter fab fa-twitter\"></a> <a title=\"social-icon-pinterest\" href=\"javascript:;\" class=\"social-link social-pinterest fab fa-pinterest-p\"></a></div> <span class=\"divider d-lg-show\"></span> "),(!_vm.isWishlisted)?_vm._ssrNode("<a href=\"javascript:;\" title=\"Add to wishlist\" class=\"btn-wishlist\">","</a>",[_vm._ssrNode("<i class=\"d-icon-heart\"></i>\n\t\t\tAdd to Wishlist\n\t\t")],2):_c('nuxt-link',{staticClass:"btn-wishlist",attrs:{"to":"/pages/wishlist","title":"Browse wishlist"}},[_c('i',{staticClass:"d-icon-heart-full"}),_vm._v("\n\t\t\tBrowse wishlist\n\t\t")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/product/detail/DetailOne.vue?vue&type=template&id=6f63c2cb&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: external "vue-slide-toggle"
var external_vue_slide_toggle_ = __webpack_require__(15);

// EXTERNAL MODULE: ./components/elements/InputQuantity.vue + 4 modules
var InputQuantity = __webpack_require__(77);

// EXTERNAL MODULE: ./components/partials/product/ProductNav.vue + 4 modules
var ProductNav = __webpack_require__(80);

// EXTERNAL MODULE: ./components/elements/CountDown.vue + 4 modules
var CountDown = __webpack_require__(79);

// EXTERNAL MODULE: ./components/elements/StickyWrapper.vue + 4 modules
var StickyWrapper = __webpack_require__(10);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/product/detail/DetailOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var DetailOnevue_type_script_lang_js_ = ({
  components: {
    VueSlideToggle: external_vue_slide_toggle_["VueSlideToggle"],
    InputQuantity: InputQuantity["a" /* default */],
    ProductNav: ProductNav["a" /* default */],
    CountDown: CountDown["a" /* default */],
    StickyWrapper: StickyWrapper["a" /* default */]
  },
  data: function () {
    return {
      vSizes: [],
      vColors: [],
      curSize: null,
      curColor: null,
      tIndex: -1,
      quantity: 1,
      baseUrl: api["a" /* baseUrl */]
    };
  },
  props: {
    product: Object,
    prev: Object,
    next: Object,
    showNav: {
      type: Boolean,
      default: true
    },
    stickyCart: {
      type: Boolean,
      default: false
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])('wishlist', ['wishList']),
    displayColors: function () {
      return this.vColors.filter(item => !this.isDisabled(item.name, this.curSize));
    },
    displaySizes: function () {
      return this.vSizes.filter(item => !this.isDisabled(this.curColor, item.name));
    },
    curIndex: function () {
      if (this.curColor && this.vSizes.length === 0) {
        let index = this.product.variants.findIndex(item => item.color.name === this.curColor);
        this.tIndex = index;
        return index;
      }

      if (this.curSize && this.vColors.length === 0) {
        let index = this.product.variants.findIndex(item => item.size.name === this.curSize);
        this.tIndex = index;
        return index;
      }

      if (this.curColor && this.curSize) {
        let index = this.product.variants.findIndex(item => item.color.name === this.curColor && item.size.name === this.curSize);
        this.tIndex = index;
        return index;
      } else {
        return -1;
      }
    },
    isCartActive: function () {
      if (parseInt(this.product.stock) < parseInt(this.quantity)) return false;
      if (this.product.variants.length === 0) return true;
      if (this.curSize && this.curColor) return true;
      if (this.curColor && this.vSizes.length === 0) return true;
      if (this.curSize && this.vColors.length === 0) return true;
      return false;
    },
    isWishlisted: function () {
      if (this.wishList.find(item => item.name === this.product.name)) return true;
      return false;
    }
  },
  mounted: function () {
    if (this.product.variants.length > 0) {
      if (this.product.variants[0].size) this.product.variants.forEach(item => {
        if (!this.vSizes.find(vsize => vsize.name === item.size.name)) this.vSizes.push({
          name: item.size.name,
          text: item.size.size,
          image: item.size.thumbnail
        });
      });
      if (this.product.variants[0].color) this.product.variants.forEach(item => {
        if (!this.vColors.find(vColor => vColor.name === item.color.name)) this.vColors.push({
          name: item.color.name,
          text: item.color.color,
          image: item.color.thumbnail
        });
      });
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])('cart', ['addToCart']),
    ...Object(external_vuex_["mapActions"])('wishlist', ['addWishlist']),
    isDisabled: function (color, size) {
      if (!color || !size) return false;
      if (this.vSizes.length === 0) return !this.product.variants.find(item => item.color.name === color);
      if (this.vColors.length === 0) return !this.product.variants.find(item => item.size.name === size);
      return !this.product.variants.find(item => item.color.name === color && item.size.name === size);
    },
    cleanAll: function () {
      this.curSize = null;
      this.curColor = null;
    },
    changeQty: function (qty) {
      this.quantity = qty;
    },
    addCart: function () {
      if (this.isCartActive) {
        let productName = this.product.name;
        if (this.curColor) productName += '-' + this.curColor;
        if (this.curSize) productName += '-' + this.curSize;
        let productPrice;

        if (this.curIndex > -1 && this.product.variants[this.curIndex].price) {
          productPrice = this.product.variants[this.curIndex].sale_price ? this.product.variants[this.curIndex].sale_price : this.product.variants[this.curIndex].price;
        } else {
          productPrice = this.product.sale_price ? this.product.sale_price : this.product.price;
        }

        let saledProduct = { ...this.product,
          price: this.product.display_price[0]
        };
        this.addToCart({
          product: { ...this.product,
            name: productName,
            price: productPrice,
            qty: this.quantity
          }
        });
      }
    },
    wishlistHandler: function (e) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add('load-more-overlay', 'loading');
      setTimeout(() => {
        this.addWishlist(this.product);
        currentTarget.classList.remove('load-more-overlay', 'loading');
      }, 1000);
    }
  }
});
// CONCATENATED MODULE: ./components/partials/product/detail/DetailOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_DetailOnevue_type_script_lang_js_ = (DetailOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/product/detail/DetailOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_DetailOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14512fbb"
  
)

/* harmony default export */ var DetailOne = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map