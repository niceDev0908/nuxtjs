exports.ids = [60];
exports.modules = {

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/NewsletterModal.vue?vue&type=template&id=71e4bd2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('./images/newsletter-popup.jpg'),expression:"'./images/newsletter-popup.jpg'",arg:"background-image"}],staticClass:"newsletter-popup",attrs:{"id":"newsletter-popup"}},[_vm._ssrNode("<div class=\"newsletter-content\"><h4 class=\"text-uppercase text-dark\">Up to <span class=\"text-primary\">20% Off</span></h4> <h2 class=\"font-weight-semi-bold\">Sign up to <span>RIODE</span></h2> <p class=\"text-grey\">Subscribe to the Riode eCommerce newsletter to receive timely updates from your favorite products.</p> <form action=\"#\" method=\"get\" class=\"input-wrapper input-wrapper-inline input-wrapper-round\"><input type=\"email\" name=\"email\" id=\"email2\" placeholder=\"Email address here...\" required=\"required\" class=\"form-control email\"> <button type=\"submit\" class=\"btn btn-dark\">SUBMIT</button></form> <div class=\"form-checkbox justify-content-center\"><input type=\"checkbox\" id=\"hide-newsletter-popup\" name=\"hide-newsletter-popup\" required=\"required\""+(_vm._ssrAttr("checked",Array.isArray(_vm.isChecked)?_vm._i(_vm.isChecked,null)>-1:(_vm.isChecked)))+" class=\"custom-checkbox\"> <label for=\"hide-newsletter-popup\">Don't show this popup again</label></div></div> <button title=\"Close (Esc)\" type=\"button\" class=\"modal-close\"><span>×</span></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/modal/NewsletterModal.vue?vue&type=template&id=71e4bd2a&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/NewsletterModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var NewsletterModalvue_type_script_lang_js_ = ({
  data: function () {
    return {
      isChecked: false
    };
  },
  watch: {
    isChecked: function () {
      Object(utils["e" /* setCookie */])(`newsletter-${api["b" /* currentDemo */]}`, !this.isChecked);
    }
  },
  methods: {
    closeModal: function () {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/elements/modal/NewsletterModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_NewsletterModalvue_type_script_lang_js_ = (NewsletterModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/modal/NewsletterModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_NewsletterModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35bd7f14"
  
)

/* harmony default export */ var NewsletterModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=60.js.map