exports.ids = [32];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/coming-soon.vue?vue&type=template&id=194ceecd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main"},[_vm._ssrNode("<div class=\"page-content\">","</div>",[_vm._ssrNode("<section class=\"coming-section container text-center text-grey font-primary\">","</section>",[_vm._ssrNode("<div class=\"row align-items-center pt-10 pb-10\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:("images/subpages/coming-soon.jpg"),expression:"`images/subpages/coming-soon.jpg`"}],staticStyle:{"background-color":"#fff"},attrs:{"alt":"coming soon","width":"519","height":"568"}},[])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 order-md-first\">","</div>",[_vm._ssrNode("<h1 class=\"mb-9 ls-m lh-1 font-italic text-uppercase\">Coming Soon</h1> "),_c('count-down',{staticClass:"countdown-coming mb-7",attrs:{"until":"2021-12-31"}}),_vm._ssrNode(" <hr class=\"mb-6 ml-8 mr-8\"> <p>We are currently working on an awesome new site. Stay tuned for more information.\n\t\t\t\t\t\tSubscribe to our newsletter to stay updated on our progress.</p> <form action=\"#\" class=\"ml-lg-8 mr-lg-8 mb-8\"><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Enter Your Email Address\" required=\"required\" class=\"form-control font-primary text-grey\"> <button type=\"submit\" class=\"btn btn-primary btn-link btn-icon-right\">subscribe</button></form> <div class=\"social-links\"><a href=\"javascript:;\" class=\"social-link social-facebook fab fa-facebook-f\"></a> <a href=\"javascript:;\" class=\"social-link social-twitter fab fa-twitter\"></a> <a href=\"javascript:;\" class=\"social-link social-instagram fab fa-instagram\"></a> <a href=\"javascript:;\" class=\"social-link social-pinterest fab fa-pinterest-p\"></a> <a href=\"javascript:;\" class=\"social-link social-email far fa-envelope\"></a></div>")],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pages/coming-soon.vue?vue&type=template&id=194ceecd&

// EXTERNAL MODULE: ./components/elements/CountDown.vue + 4 modules
var CountDown = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/coming-soon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var coming_soonvue_type_script_lang_js_ = ({
  layout: 'layout-blank',
  components: {
    CountDown: CountDown["a" /* default */]
  },
  created: function () {
    document.querySelector('body').classList.contains('mmenu-active') && document.querySelector('body').classList.remove('mmenu-active');
  }
});
// CONCATENATED MODULE: ./pages/pages/coming-soon.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_coming_soonvue_type_script_lang_js_ = (coming_soonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/coming-soon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_coming_soonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70c1c3f2"
  
)

/* harmony default export */ var coming_soon = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=coming-soon.js.map