exports.ids = [59];
exports.modules = {

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/LoginModal.vue?vue&type=template&id=1b25ed9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-popup"},[_vm._ssrNode("<div class=\"form-box\">","</div>",[_vm._ssrNode("<div class=\"tab tab-nav-simple tab-nav-boxed form-tab\">","</div>",[_c('element-tabs',[_c('ul',{staticClass:"nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5",attrs:{"role":"tablist"}},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link border-no lh-1 ls-normal",class:{active: _vm.activeIndex === 1},attrs:{"href":"#signin"}},[_vm._v("Login")])]),_vm._v(" "),_c('li',{staticClass:"delimiter"},[_vm._v("or")]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link border-no lh-1 ls-normal",class:{active: _vm.activeIndex === 2},attrs:{"href":"#register"}},[_vm._v("Register")])])])]),_vm._ssrNode(" <div class=\"tab-content\"><div id=\"signin\""+(_vm._ssrClass("tab-pane",{active: _vm.activeIndex === 1}))+"><form action=\"#\"><div class=\"form-group mb-3\"><input type=\"text\" id=\"singin-email\" name=\"singin-email\" placeholder=\"Username or Email Address *\" required=\"required\" class=\"form-control\"></div> <div class=\"form-group\"><input type=\"password\" id=\"singin-password\" name=\"singin-password\" placeholder=\"Password *\" required=\"required\" class=\"form-control\"></div> <div class=\"form-footer\"><div class=\"form-checkbox\"><input type=\"checkbox\" id=\"signin-remember-1\" name=\"signin-remember\" class=\"custom-checkbox\"> <label for=\"signin-remember-1\" class=\"form-control-label\">Remember\n\t\t\t\t\t\t\t\t\tme</label></div> <a href=\"javascript:;\" class=\"lost-link\">Lost your password?</a></div> <button type=\"submit\" class=\"btn btn-dark btn-block btn-rounded\">Login</button></form> <div class=\"form-choice text-center\"><label class=\"ls-m\">or Login With</label> <div class=\"social-links\"><a href=\"javascript:;\" class=\"social-link social-google fab fa-google border-no\"></a> <a href=\"javascript:;\" class=\"social-link social-facebook fab fa-facebook-f border-no\"></a> <a href=\"javascript:;\" class=\"social-link social-twitter fab fa-twitter border-no\"></a></div></div></div> <div id=\"register\""+(_vm._ssrClass("tab-pane",{active: _vm.activeIndex === 2}))+"><form action=\"#\"><div class=\"form-group mb-3\"><input type=\"email\" id=\"register-email\" name=\"register-email\" placeholder=\"Your Email Address *\" required=\"required\" class=\"form-control\"></div> <div class=\"form-group\"><input type=\"password\" id=\"register-password\" name=\"register-password\" placeholder=\"Password *\" required=\"required\" class=\"form-control\"></div> <div class=\"form-footer\"><div class=\"form-checkbox\"><input type=\"checkbox\" id=\"register-agree\" name=\"register-agree\" required=\"required\" class=\"custom-checkbox\"> <label for=\"register-agree\" class=\"form-control-label\">I agree to the\n\t\t\t\t\t\t\t\t\tprivacy policy</label></div></div> <button type=\"submit\" class=\"btn btn-dark btn-block btn-rounded\">Register</button></form> <div class=\"form-choice text-center\"><label class=\"ls-m\">or Register With</label> <div class=\"social-links\"><a href=\"javascript:;\" class=\"social-link social-google fab fa-google border-no\"></a> <a href=\"javascript:;\" class=\"social-link social-facebook fab fa-facebook-f border-no\"></a> <a href=\"javascript:;\" class=\"social-link social-twitter fab fa-twitter border-no\"></a></div></div></div></div>")],2)]),_vm._ssrNode(" <button title=\"Close (Esc)\" type=\"button\" class=\"modal-close\"><span>×</span></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/modal/LoginModal.vue?vue&type=template&id=1b25ed9c&

// EXTERNAL MODULE: ./components/elements/ElementTabs.vue + 4 modules
var ElementTabs = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/LoginModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LoginModalvue_type_script_lang_js_ = ({
  components: {
    ElementTabs: ElementTabs["a" /* default */]
  },
  props: {
    activeIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    closeModal: function (e) {
      e.preventDefault();
      e.target.closest('.vm--container').querySelector('.vm--overlay').click();
    }
  }
});
// CONCATENATED MODULE: ./components/elements/modal/LoginModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_LoginModalvue_type_script_lang_js_ = (LoginModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/modal/LoginModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_LoginModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5aa9d4b2"
  
)

/* harmony default export */ var LoginModal = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=59.js.map