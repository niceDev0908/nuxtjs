exports.ids = [61];
exports.modules = {

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/VideoModal.vue?vue&type=template&id=7b80b226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row video-modal m-0",attrs:{"id":"video-modal"}},[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.baseUrl + _vm.slug))+(_vm._ssrAttr("autoPlay",true))+(_vm._ssrAttr("loop",true))+(_vm._ssrAttr("controls",true))+" class=\"p-0\"></video> <button title=\"Close (Esc)\" type=\"button\" class=\"modal-close\"><span>×</span></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/modal/VideoModal.vue?vue&type=template&id=7b80b226&

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/modal/VideoModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VideoModalvue_type_script_lang_js_ = ({
  props: {
    slug: ''
  },
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */]
    };
  },
  methods: {
    closeModal: function (e) {
      e.preventDefault();
      e.target.closest('.vm--container').querySelector('.vm--overlay').click();
    }
  }
});
// CONCATENATED MODULE: ./components/elements/modal/VideoModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_VideoModalvue_type_script_lang_js_ = (VideoModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/modal/VideoModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_VideoModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1fe343e0"
  
)

/* harmony default export */ var VideoModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=61.js.map