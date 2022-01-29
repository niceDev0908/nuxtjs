exports.ids = [1,0];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/QuickView.vue?vue&type=template&id=5dd404da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product product-single row product-popup"},[(_vm.loaded)?[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-gallery pb-0\">","</div>",[_c('swiper-carousel',{staticClass:"product-single-carousel swiper-theme swiper-nav-inner",attrs:{"options":Object.assign({}, _vm.baseSlider4, {spaceBetween: 0})}},_vm._l((_vm.product.large_pictures),function(item,index){return _c('div',{key:("large-" + index),staticClass:"swiper-slide"},[_c('figure',{staticClass:"product-image d-flex"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],attrs:{"alt":"large-picture","width":item.width,"height":item.height}})])])}),0),_vm._ssrNode(" <div class=\"product-label-group\">"+((_vm.product.is_new)?("<div class=\"product-label label-new\">New</div>"):"<!---->")+" "+((_vm.product.stock === '0')?("<div class=\"product-label label-stock\">Out</div>"):"<!---->")+" "+((_vm.product.is_top)?("<div class=\"product-label label-top\">Top</div>"):"<!---->")+" "+((_vm.product.discount > 0)?("<div class=\"product-label label-sale\">"+((_vm.product.variants.length > 0)?("Sale"):(_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")))+"</div>"):"<!---->")+"</div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('detail-one',{staticClass:"scrollable",attrs:{"product":_vm.product,"show-nav":false}})],1),_vm._ssrNode(" <button title=\"Close (Esc)\" type=\"button\" class=\"modal-close\"><span>×</span></button>")]:_vm._ssrNode("<div class=\"product row p-0 m-0 skeleton-body mfp-product\"><div class=\"col-md-6\"><div class=\"skel-pro-gallery\"></div></div> <div class=\"col-md-6\"><div class=\"skel-pro-summary\"></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/modal/QuickView.vue?vue&type=template&id=5dd404da&

// EXTERNAL MODULE: ./components/elements/SwiperCarousel.vue + 4 modules
var SwiperCarousel = __webpack_require__(72);

// EXTERNAL MODULE: ./components/partials/product/detail/DetailOne.vue + 4 modules
var DetailOne = __webpack_require__(96);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(71);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/QuickView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var QuickViewvue_type_script_lang_js_ = ({
  components: {
    SwiperCarousel: SwiperCarousel["a" /* default */],
    DetailOne: DetailOne["a" /* default */]
  },
  props: {
    slug: String
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */],
      baseSlider4: carousel["m" /* baseSlider4 */],
      loaded: false,
      product: null
    };
  },
  created: function () {
    Object(utils["b" /* isEdgeBrowser */])() && document.querySelector('body').classList.add('overflow-hidden');
  },
  mounted: function () {
    this.loaded = false;
    api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/product/${this.slug}`, {
      params: {
        only_data: true
      }
    }).then(response => {
      this.product = response.data.data;
      this.loaded = true;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
  },
  destroyed: function () {
    Object(utils["b" /* isEdgeBrowser */])() && document.querySelector('body').classList.remove('overflow-hidden');
  }
});
// CONCATENATED MODULE: ./components/elements/modal/QuickView.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_QuickViewvue_type_script_lang_js_ = (QuickViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/modal/QuickView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_QuickViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d3b56498"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=1.js.map