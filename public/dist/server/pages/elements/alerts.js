exports.ids = [13];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c8057b3e", content, true, context)
};

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementAlert_vue_vue_type_style_index_0_id_7353772c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementAlert_vue_vue_type_style_index_0_id_7353772c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementAlert_vue_vue_type_style_index_0_id_7353772c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementAlert_vue_vue_type_style_index_0_id_7353772c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementAlert_vue_vue_type_style_index_0_id_7353772c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fade-enter-active[data-v-7353772c],.fade-leave-active[data-v-7353772c]{transition:opacity .5s}.fade-enter[data-v-7353772c],.fade-leave-to[data-v-7353772c]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/elements/alerts.vue?vue&type=template&id=5e571a6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main"},[_c('page-header',{attrs:{"subTitle":"Elements","title":"Element Alert & Notification","parentUrl":"/elements"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<section class=\"mt-10 pt-4\">","</section>",[_vm._ssrNode("<h2 class=\"title title-center mb-5\">Simple</h2> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-primary alert-simple alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("News :")]),_vm._v("\n\t\t\t\t\t\t\tYou have done 5 actions.\n\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-success alert-simple alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Success :")]),_vm._v("\n\t\t\t\t\t\t\tThe page has been added.\n\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-warning alert-simple alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Warning :")]),_vm._v("\n\t\t\t\t\t\t\tYou have 190 messages.\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-danger alert-simple alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Danger :")]),_vm._v("\n\t\t\t\t\t\t\tThe daily report has failed.\n\n\t\t\t\t\t\t\t")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"mt-10 pt-2\">","</section>",[_vm._ssrNode("<h2 class=\"title title-center mb-5\">Dark</h2> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-primary alert-dark alert-round alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("News :")]),_vm._v("\n\t\t\t\t\t\t\tYou have done 5 actions.\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-success alert-dark alert-round alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Success :")]),_vm._v("\n\t\t\t\t\t\t\tThe page has been added.\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-warning alert-dark alert-round alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Warning :")]),_vm._v("\n\t\t\t\t\t\t\tYou have 190 messages.\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-danger alert-dark alert-round alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Danger :")]),_vm._v("\n\t\t\t\t\t\t\tThe daily report has failed.\n\n\t\t\t\t\t\t\t")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"mt-10 pt-2\">","</section>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_vm._ssrNode("<h2 class=\"title title-sm title-center mb-5\">With Icon</h2> "),_c('element-alert',{staticClass:"alert alert-simple alert-primary alert-icon mb-4",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n\t\t\t\t\t\t\tYou have done 5 actions.\n\n\t\t\t\t\t\t\t")]),_vm._ssrNode(" "),_c('element-alert',{staticClass:"alert alert-light alert-primary alert-icon mb-4",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('i',{staticClass:"fas fa-exclamation-circle"}),_vm._v("\n\t\t\t\t\t\t\tThe page has been added.\n\n\t\t\t\t\t\t\t")]),_vm._ssrNode(" "),_c('element-alert',{staticClass:"alert alert-light alert-danger alert-icon alert-inline mb-4",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('i',{staticClass:"fas fa-exclamation-triangle"}),_vm._v(" "),_c('h4',{staticClass:"alert-title"},[_vm._v("Oh snap!")]),_vm._v("\n\t\t\t\t\t\t\tChange a few things up and try submitting again.\n\n\t\t\t\t\t\t\t")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_vm._ssrNode("<h2 class=\"title title-sm title-center\">With Title</h2> "),_c('element-alert',{staticClass:"alert alert-message alert-light alert-primary alert-link mb-4",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Some Message Link")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum Minim ad pariatur eiusmod ea ut "),_c('a',{attrs:{"href":"javascript:;"}},[_vm._v("nulla aliqua est quis")]),_vm._v("\n\t\t\t\t\t\t\t\tid pariat\n\t\t\t\t\t\t\t\tminim vot nulla aliqualuptate.")])]),_vm._ssrNode(" "),_c('element-alert',{staticClass:"alert alert-message alert-light alert-warning alert-inline mb-4",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Some Message")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum Minim ad pariatur eiusmod ea ut nulla quis id dolore minim vot nulla\n\t\t\t\t\t\t\t\taliqualuptate.")])])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"mt-10\">","</section>",[_vm._ssrNode("<h2 class=\"title title-center mb-5\">With Button</h2> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-primary alert-simple alert-btn",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('a',{staticClass:"btn btn-primary btn-md btn-rounded",attrs:{"href":"javascript:;"}},[_vm._v("NEWS")]),_vm._v("\n\t\t\t\t\t\t\tYou have done 5 actions.\n\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-success alert-simple alert-btn",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('a',{staticClass:"btn btn-success btn-md btn-rounded",attrs:{"href":"javascript:;"}},[_vm._v("SUCCESS")]),_vm._v("\n\t\t\t\t\t\t\tThe page has been added.\n\n\t\t\t\t\t\t\t")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-message alert-warning alert-dark alert-btn",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Some Message")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum Minim ad pariatur eiusmod ea ut "),_c('a',{staticClass:"text-primary",attrs:{"href":"javascript:;"}},[_vm._v("nulla aliqua est quis")]),_vm._v("\n\t\t\t\t\t\t\t\tid pariat\n\t\t\t\t\t\t\t\tminim vot nulla aliqualuptate.")]),_vm._v(" "),_c('a',{staticClass:"btn btn-secondary btn-md btn-rounded mr-1",attrs:{"href":"javascript:;"}},[_vm._v("Do This")]),_c('a',{staticClass:"btn btn-secondary btn-md btn-rounded",attrs:{"href":"javascript:;"}},[_vm._v("Or This")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-message alert-warning alert-light alert-btn",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('h4',{staticClass:"alert-title"},[_vm._v("Some Message")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum Minim ad pariatur eiusmod ea ut "),_c('a',{attrs:{"href":"javascript:;"}},[_vm._v("nulla aliqua est quis")]),_vm._v("\n\t\t\t\t\t\t\t\tid pariat\n\t\t\t\t\t\t\t\tminim vot nulla aliqualuptate.")]),_vm._v(" "),_c('a',{staticClass:"btn btn-secondary btn-md btn-rounded mr-1",attrs:{"href":"javascript:;"}},[_vm._v("Do This")]),_c('a',{staticClass:"btn btn-secondary btn-md btn-rounded",attrs:{"href":"javascript:;"}},[_vm._v("Or This")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"mt-10 pt-2\">","</section>",[_vm._ssrNode("<h2 class=\"title title-center mb-5\">Summary</h2> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-danger alert-summary alert-light alert-message alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('i',{staticClass:"fas fa-exclamation-triangle"}),_vm._v(" "),_c('h4',{staticClass:"alert-title"},[_vm._v("Oh snap!")]),_vm._v("Change a few things up and try submitting\n\t\t\t\t\t\t\tagain.\n\t\t\t\t\t\t\t"),_c('ul',[_c('li',[_vm._v("Inform your username")]),_vm._v(" "),_c('li',[_vm._v("Inform your password")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 mb-4\">","</div>",[_c('element-alert',{staticClass:"alert alert-summary alert-dark alert-black alert-message alert-inline",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('button',{staticClass:"btn btn-link btn-close",attrs:{"type":"button"}},[_c('i',{staticClass:"d-icon-times"})])]},proxy:true}])},[_c('i',{staticClass:"fas fa-exclamation-triangle"}),_vm._v(" "),_c('h4',{staticClass:"alert-title"},[_vm._v("Oh snap!")]),_vm._v("Change a few things up and try submitting\n\t\t\t\t\t\t\tagain.\n\t\t\t\t\t\t\t"),_c('ul',[_c('li',[_vm._v("Inform your username")]),_vm._v(" "),_c('li',[_vm._v("Inform your password")])])])],1)],2)],2)],2),_vm._ssrNode(" "),_c('element-list',{staticClass:"mt-10"})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/elements/alerts.vue?vue&type=template&id=5e571a6e&

// EXTERNAL MODULE: ./components/elements/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/ElementAlert.vue?vue&type=template&id=7353772c&scoped=true&
var ElementAlertvue_type_template_id_7353772c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.isExpanded)?_c('div',[_vm._t("default"),_vm._v(" "),_c('div',{on:{"click":_vm.closeAlert}},[_vm._t("header")],2)],2):_vm._e()])}
var ElementAlertvue_type_template_id_7353772c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/ElementAlert.vue?vue&type=template&id=7353772c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/ElementAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ElementAlertvue_type_script_lang_js_ = ({
  data: function () {
    return {
      isExpanded: true
    };
  },
  methods: {
    closeAlert: function (e) {
      this.isExpanded = false;
    }
  }
});
// CONCATENATED MODULE: ./components/elements/ElementAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_ElementAlertvue_type_script_lang_js_ = (ElementAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/ElementAlert.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_ElementAlertvue_type_script_lang_js_,
  ElementAlertvue_type_template_id_7353772c_scoped_true_render,
  ElementAlertvue_type_template_id_7353772c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "7353772c",
  "8dde4fc2"
  
)

/* harmony default export */ var ElementAlert = (component.exports);
// EXTERNAL MODULE: ./components/partials/elements/ElementList.vue + 4 modules
var ElementList = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/elements/alerts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var alertsvue_type_script_lang_js_ = ({
  components: {
    ElementList: ElementList["a" /* default */],
    ElementAlert: ElementAlert,
    PageHeader: PageHeader["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/elements/alerts.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_alertsvue_type_script_lang_js_ = (alertsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/elements/alerts.vue





/* normalize component */

var alerts_component = Object(componentNormalizer["a" /* default */])(
  elements_alertsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b2dc7818"
  
)

/* harmony default export */ var alerts = __webpack_exports__["default"] = (alerts_component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/elements/ElementList.vue?vue&type=template&id=684ccd27&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"element-section"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,'container ' + _vm.subClass))+">","</div>",[_vm._ssrNode("<p class=\"text-center text-uppercase ls-s mb-1\">For your new website design.</p> <h2 class=\"title title-center ls-s mb-8\">Riode Elements</h2> "),_vm._ssrNode("<div class=\"row elements\">","</div>",[_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/accordions"}},[_c('div',{staticClass:"element element-accordian"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('rect',{attrs:{"x":"16.396","y":"18.941","width":"67.209","height":"4.045"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16.396","y":"33.459","width":"38.751","height":"4.044"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16.396","y":"47.977","width":"51.376","height":"4.048"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16.396","y":"62.496","width":"66.043","height":"4.047"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16.396","y":"77.016","width":"39.376","height":"4.043"}})]),_vm._v(" "),_c('p',[_vm._v("accordions")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/blog-posts"}},[_c('div',{staticClass:"element element-blog"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('path',{attrs:{"d":"M84.286,82.529c-6.099,0-11.062-4.963-11.062-11.063c0-0.687,0.07-1.394,0.207-2.099c-0.136-2.246-1.932-3.961-4.088-3.961 c-1.933,0-3.626,1.375-4.027,3.266c0.219,1.082,0.324,1.963,0.324,2.794c0,6.101-4.961,11.063-11.061,11.063 c-6.098,0-11.06-4.963-11.06-11.063c0-6.097,4.962-11.059,11.06-11.059c3.6,0,6.988,1.771,9.064,4.741l0.152,0.217 c0.041,0.059,0.107,0.096,0.179,0.099c0.003,0,0.009,0.001,0.011,0.001c0.066,0,0.133-0.03,0.178-0.081l0.172-0.2 c1.267-1.461,3.093-2.297,5.008-2.297c1.974,0,3.833,0.874,5.102,2.395l0.177,0.213c0.043,0.053,0.108,0.084,0.179,0.084 c0.002,0,0.007-0.002,0.01-0.002c0.072-0.002,0.139-0.039,0.18-0.1l0.155-0.227c2.069-3.033,5.489-4.843,9.141-4.843 c6.098,0,11.06,4.962,11.06,11.059C95.346,77.566,90.384,82.529,84.286,82.529z M54.58,62.926c-4.71,0-8.541,3.831-8.541,8.54 c0,4.712,3.831,8.544,8.541,8.544c4.709,0,8.543-3.832,8.543-8.544c0-0.665-0.088-1.354-0.259-2.046l-0.04-0.158 c-0.014-0.061-0.051-0.107-0.098-0.138l0.003-0.069c0.001-0.01-0.005-0.124-0.007-0.135C61.574,65.313,58.305,62.926,54.58,62.926z M84.286,62.926c-4.71,0-8.542,3.831-8.542,8.54c0,4.712,3.83,8.544,8.541,8.544c4.709,0,8.541-3.832,8.541-8.544 C92.826,66.757,88.996,62.926,84.286,62.926z"}}),_vm._v(" "),_c('rect',{attrs:{"x":"19.478","y":"45.364","width":"58.937","height":"2.52"}}),_vm._v(" "),_c('rect',{attrs:{"x":"39.083","y":"54.756","width":"39.331","height":"2.519"}}),_vm._v(" "),_c('rect',{attrs:{"x":"39.083","y":"63.35","width":"3.632","height":"2.52"}}),_vm._v(" "),_c('rect',{attrs:{"x":"19.478","y":"71.946","width":"19.862","height":"2.519"}}),_vm._v(" "),_c('path',{attrs:{"d":"M30.395,41.318l-6.58-8.65c-0.043-0.059-0.112-0.092-0.184-0.092c-0.025,0-0.05,0.005-0.075,0.013 c-0.094,0.032-0.158,0.12-0.158,0.22v8.51h-2.087V28.896h2.12l6.768,8.877c0.044,0.059,0.112,0.092,0.184,0.092 c0.026,0,0.051-0.004,0.076-0.012c0.094-0.031,0.157-0.121,0.157-0.221v-8.736h2.089v12.422H30.395z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M36.859,41.318V28.896h8.709v1.767h-6.391c-0.127,0-0.232,0.104-0.232,0.233v3.154c0,0.129,0.105,0.232,0.232,0.232h5.724 v1.651h-5.724c-0.127,0-0.232,0.104-0.232,0.232v3.174c0,0.128,0.105,0.231,0.232,0.231h6.602v1.746H36.859z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M60.144,41.318l-3.011-9.569c-0.031-0.097-0.122-0.163-0.221-0.163l0,0c-0.104,0-0.192,0.066-0.222,0.163l-2.995,9.569 h-1.573l-4.338-12.422h2.287l2.729,7.953c0.031,0.095,0.119,0.158,0.219,0.158c0,0,0.002,0,0.004,0 c0.101-0.002,0.189-0.069,0.219-0.164l2.453-7.947h2.453l2.432,7.946c0.028,0.096,0.117,0.162,0.217,0.165c0.002,0,0.004,0,0.005,0 c0.099,0,0.188-0.063,0.22-0.157l2.75-7.954h2.283l-4.334,12.422H60.144z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M72.896,41.472c-1.855,0-3.564-0.655-5.084-1.948l1.222-1.499c1.384,1.129,2.7,1.701,3.92,1.701 c0.642,0,1.162-0.149,1.549-0.441c0.42-0.317,0.643-0.769,0.643-1.304c0-0.539-0.236-0.992-0.683-1.309 c-0.377-0.27-1.066-0.525-2.107-0.781c-1.478-0.35-2.56-0.805-3.223-1.351c-0.607-0.499-0.917-1.319-0.917-2.439 c0-1.126,0.388-1.966,1.187-2.57c0.824-0.622,1.879-0.937,3.134-0.937c0.838,0,1.688,0.145,2.519,0.431 c0.697,0.239,1.324,0.565,1.871,0.968l-1.016,1.465c-1.115-0.754-2.281-1.137-3.471-1.137c-0.597,0-1.084,0.152-1.449,0.451 c-0.391,0.323-0.588,0.752-0.588,1.273c0,0.536,0.248,0.982,0.721,1.29c0.402,0.263,1.214,0.538,2.553,0.867 c1.186,0.293,2.113,0.73,2.754,1.302c0.598,0.533,0.9,1.338,0.9,2.393c0,1.063-0.387,1.9-1.183,2.564 C75.338,41.131,74.243,41.472,72.896,41.472z"}}),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M10.809,78.84c-1.695,0-3.052-1.46-3.052-3.157V23.555c0-1.696,1.356-3.154,3.052-3.154h72.629 c1.7,0,3.107,1.458,3.107,3.154v32.328h3.104V23.555c0-3.395-2.814-6.084-6.211-6.084H10.809c-3.393,0-6.154,2.689-6.154,6.084 v52.128c0,3.396,2.762,6.087,6.154,6.087h28.976v-2.93H10.809z"}})])]),_vm._v(" "),_c('p',[_vm._v("blog posts")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/buttons"}},[_c('div',{staticClass:"element element-button"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('g',[_c('path',{attrs:{"d":"M42.114,51.646c-0.452,0-0.881-0.181-1.198-0.509c-0.157-0.158-0.282-0.34-0.372-0.542     c-0.078-0.204-0.125-0.43-0.125-0.655c0-0.102,0.011-0.215,0.035-0.328c0.022-0.102,0.055-0.215,0.09-0.316     c0.044-0.102,0.103-0.203,0.157-0.293c0.069-0.092,0.137-0.182,0.215-0.261c0.079-0.067,0.158-0.146,0.26-0.202     c0.09-0.069,0.181-0.113,0.294-0.158c0.102-0.046,0.203-0.08,0.317-0.103c0.214-0.046,0.441-0.046,0.656,0     c0.113,0.022,0.214,0.057,0.315,0.103c0.102,0.045,0.203,0.089,0.293,0.158c0.091,0.057,0.181,0.135,0.26,0.202     c0.081,0.079,0.147,0.169,0.214,0.261c0.058,0.09,0.114,0.191,0.148,0.293c0.045,0.102,0.079,0.215,0.102,0.316     c0.022,0.113,0.033,0.227,0.033,0.328c0,0.464-0.182,0.881-0.498,1.197c-0.158,0.17-0.35,0.293-0.553,0.373     C42.556,51.603,42.342,51.646,42.114,51.646z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M79.854,49.952c0-0.938,0.757-1.695,1.694-1.695l0,0c0.938,0,1.696,0.758,1.696,1.695l0,0     c0,0.927-0.758,1.684-1.696,1.684l0,0C80.611,51.636,79.854,50.879,79.854,49.952z M66.713,49.952     c0-0.938,0.757-1.695,1.694-1.695l0,0c0.938,0,1.695,0.758,1.695,1.695l0,0c0,0.927-0.758,1.684-1.695,1.684l0,0     C67.47,51.636,66.713,50.879,66.713,49.952z M53.562,49.952c0-0.938,0.768-1.695,1.694-1.695l0,0c0.938,0,1.694,0.758,1.694,1.695     l0,0c0,0.927-0.756,1.684-1.694,1.684l0,0C54.329,51.636,53.562,50.879,53.562,49.952z"}})])]),_vm._v(" "),_c('path',{attrs:{"d":"M21.765,61.756c-6.483,0-11.757-5.272-11.757-11.755s5.273-11.756,11.757-11.756c6.48,0,11.754,5.273,11.754,11.756     S28.246,61.756,21.765,61.756z M21.765,41.128c-4.894,0-8.874,3.98-8.874,8.873s3.98,8.873,8.874,8.873     c4.892,0,8.873-3.98,8.873-8.873S26.657,41.128,21.765,41.128z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M20.721,66.991c-8.844,0-16.04-7.195-16.04-16.039v-1.904c0-8.844,7.196-16.039,16.04-16.039h58.56     c8.846,0,16.039,7.195,16.039,16.039v1.904c0,8.844-7.193,16.039-16.039,16.039H20.721z M20.721,35.892     c-7.254,0-13.157,5.902-13.157,13.156v1.904c0,7.254,5.903,13.157,13.157,13.157h58.56c7.256,0,13.158-5.903,13.158-13.157v-1.904     c0-7.254-5.902-13.156-13.158-13.156H20.721z"}})]),_vm._v(" "),_c('p',[_vm._v("buttons")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/cta"}},[_c('div',{staticClass:"element element-cta"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M77.872,15.792H22.126c-3.492,0-6.334,2.843-6.334,6.335v24.072c0,0.701,0.566,1.268,1.266,1.268 c0.701,0,1.268-0.566,1.268-1.268V22.126c0-2.096,1.705-3.801,3.801-3.801h55.746c2.096,0,3.801,1.705,3.801,3.801v55.747 c0,2.096-1.705,3.801-3.801,3.801H53.8c-0.699,0-1.268,0.566-1.268,1.268s0.568,1.268,1.268,1.268h24.072 c3.496,0,6.336-2.842,6.336-6.336V22.126C84.208,18.634,81.368,15.792,77.872,15.792z"}})]),_vm._v(" "),_c('path',{attrs:{"d":"M51.899,50c-0.506,0-0.984-0.197-1.342-0.557c-0.742-0.74-0.742-1.945-0.002-2.688l16.58-16.578 c0.182-0.182,0.236-0.455,0.139-0.691c-0.1-0.236-0.33-0.391-0.586-0.391h-7.188v-3.801h13.305c1.049,0,1.9,0.852,1.9,1.9v13.303 h-3.803v-7.186c0-0.257-0.152-0.488-0.391-0.586c-0.078-0.032-0.16-0.049-0.242-0.049c-0.162,0-0.326,0.064-0.447,0.187 l-16.58,16.579C52.884,49.802,52.409,50,51.899,50z"}}),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M42.804,54.369c1.559,0,2.826,1.27,2.826,2.826v21.188c0,1.559-1.268,2.826-2.826,2.826H21.616 c-1.557,0-2.824-1.268-2.824-2.826V57.195c0-1.557,1.268-2.826,2.824-2.826H42.804 M42.804,51.369H21.616 c-3.212,0-5.824,2.613-5.824,5.826v21.188c0,3.213,2.612,5.826,5.824,5.826h21.188c3.213,0,5.826-2.613,5.826-5.826V57.195 C48.63,53.982,46.017,51.369,42.804,51.369L42.804,51.369z"}})])]),_vm._v(" "),_c('p',[_vm._v("call to action")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/icon-boxes"}},[_c('div',{staticClass:"element element-icon-box"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M69.38,70.314H30.618c-0.625,0-1.129,0.506-1.129,1.131s0.504,1.129,1.129,1.129H69.38c0.623,0,1.129-0.504,1.129-1.129 S70.003,70.314,69.38,70.314z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M61.306,76.775H38.692c-0.623,0-1.129,0.504-1.129,1.127c0,0.627,0.506,1.131,1.129,1.131h22.613 c0.623,0,1.131-0.504,1.131-1.131C62.437,77.279,61.929,76.775,61.306,76.775z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M41.876,52.898c0.041,0.457,0.121,0.9,0.232,1.33l-2.729,2.73l-1.699,3.395l2.023,1.01l1.531-3.066l1.824-1.822 c1.447,2.34,4.041,3.898,6.939,3.898c2.896,0,5.49-1.559,6.939-3.898l1.822,1.822l1.535,3.066l2.02-1.01l-1.697-3.395L57.89,54.23 c0.111-0.432,0.193-0.875,0.232-1.332l0.184-2.217h6.227v-2.259h-6.039l0.342-4.079c0.012-0.168-0.01-0.334-0.012-0.501l0.049,0.05 l3.361-3.36l1.697-3.395l-2.021-1.011l-1.531,3.066l-2.197,2.195c-0.195-0.351-0.422-0.685-0.695-0.984 c-0.822-0.892-1.938-1.438-3.127-1.6v-2.172c0-1.016-0.363-1.939-0.949-2.682l2.445-4.889l-2.021-1.011l-2.262,4.525 c-0.49-0.19-1.018-0.305-1.572-0.305s-1.082,0.114-1.572,0.305l-2.262-4.524l-2.021,1.01l2.443,4.889 c-0.584,0.742-0.947,1.666-0.947,2.682v2.172c-1.189,0.161-2.305,0.709-3.125,1.601c-0.277,0.3-0.502,0.634-0.697,0.983 l-2.195-2.195l-1.533-3.066l-2.023,1.011l1.699,3.395l3.359,3.36l0.051-0.052c-0.002,0.169-0.025,0.334-0.012,0.503l0.34,4.079 h-6.039v2.259h6.229L41.876,52.898z M52.099,36.632v2.1h-4.199v-2.1c0-1.158,0.941-2.101,2.1-2.101 C51.155,34.532,52.099,35.474,52.099,36.632z M44.177,41.935c0.559-0.608,1.322-0.943,2.148-0.943h7.346 c0.826,0,1.59,0.335,2.15,0.942c0.561,0.608,0.83,1.397,0.762,2.222l-0.715,8.555c-0.252,3.029-2.83,5.402-5.869,5.402 s-5.619-2.373-5.871-5.402l-0.713-8.556C43.347,43.332,43.618,42.543,44.177,41.935z"}})]),_vm._v(" "),_c('path',{attrs:{"d":"M25.767,87.42c-2.572,0-4.664-2.092-4.664-4.664V17.245c0-2.572,2.092-4.664,4.664-4.664l40.664-0.001 c1.242,0,2.414,0.485,3.297,1.366l7.801,7.803c0.883,0.881,1.369,2.052,1.369,3.298v57.709c0,2.572-2.094,4.664-4.666,4.664H25.767z M25.767,15.462c-0.982,0-1.781,0.8-1.781,1.782v65.511c0,0.982,0.799,1.781,1.781,1.781h48.465c0.984,0,1.783-0.799,1.783-1.781 V25.046c0-0.022-0.025-0.166-0.029-0.188c-0.02-0.125-0.139-0.271-0.266-0.271h-4.715c-2.27,0-4.117-1.846-4.117-4.115v-4.717 c0-0.126-0.094-0.232-0.217-0.251c-0.1-0.025-0.164-0.043-0.24-0.043H25.767z M68.894,17.293c-0.033,0-0.064,0.007-0.098,0.02 c-0.094,0.039-0.156,0.131-0.156,0.234v2.926c0,1.303,1.063,2.362,2.365,2.362h2.924c0.102,0,0.195-0.062,0.234-0.156 s0.018-0.203-0.057-0.276l-5.033-5.035C69.024,17.32,68.96,17.293,68.894,17.293z"}})]),_vm._v(" "),_c('p',[_vm._v("icon boxes")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/icons"}},[_c('div',{staticClass:"element element-icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"82px","height":"82px","viewBox":"0 0 70 70","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"fill":"none","stroke":"#666","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","d":" M47.394,22.607c-3.421-3.416-7.55-5.125-12.393-5.125c-4.845,0-8.975,1.709-12.395,5.125c-3.418,3.418-5.125,7.55-5.125,12.394 c0,4.843,1.707,8.974,5.125,12.392c3.42,3.42,7.55,5.125,12.395,5.125c4.843,0,8.972-1.705,12.393-5.125 c3.418-3.418,5.125-7.547,5.125-12.392C52.519,30.156,50.812,26.025,47.394,22.607z"}})]),_vm._v(" "),_c('rect',{attrs:{"x":"33.347","y":"25.068","fill":"#666","width":"2.5","height":"3.312"}}),_vm._v(" "),_c('rect',{attrs:{"x":"33.347","y":"31.689","fill":"#666","width":"2.5","height":"13.243"}})]),_vm._v(" "),_c('p',{staticClass:"mt-1"},[_vm._v("Icons")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/instagrams"}},[_c('div',{staticClass:"element element-portfolio"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M45.657,20.508c0.198,0,0.366,0.167,0.366,0.364V45.67c0,0.197-0.168,0.365-0.366,0.365H20.86 c-0.197,0-0.364-0.168-0.364-0.365V20.873c0-0.198,0.167-0.365,0.364-0.365H45.657 M45.657,17.6H20.86 c-1.805,0-3.272,1.469-3.272,3.273V45.67c0,1.805,1.468,3.273,3.272,3.273l24.797-0.001c1.806,0,3.274-1.468,3.274-3.272V20.872 C48.932,19.068,47.463,17.6,45.657,17.6L45.657,17.6z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M79.138,20.508L79.138,20.508c0.198,0,0.366,0.166,0.366,0.364V45.67c0,0.197-0.168,0.365-0.366,0.365H54.342 c-0.199,0-0.365-0.168-0.365-0.365V20.872c0-0.197,0.166-0.364,0.365-0.364H79.138 M79.138,17.6H54.342 c-1.805,0-3.273,1.469-3.273,3.272V45.67c0,1.805,1.469,3.272,3.273,3.272h24.796c1.806,0,3.274-1.468,3.274-3.272V20.872 C82.412,19.068,80.943,17.6,79.138,17.6L79.138,17.6z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M45.657,53.965c0.198,0,0.366,0.167,0.366,0.365v24.796c0,0.198-0.168,0.366-0.366,0.366H20.86 c-0.197,0-0.364-0.168-0.364-0.366V54.33c0-0.198,0.167-0.365,0.364-0.365H45.657 M45.657,51.057H20.86 c-1.805,0-3.272,1.469-3.272,3.273v24.796c0,1.806,1.468,3.274,3.272,3.274h24.797c1.806,0,3.274-1.469,3.274-3.274V54.33 C48.932,52.525,47.463,51.057,45.657,51.057L45.657,51.057z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M79.138,53.965c0.198,0,0.366,0.167,0.366,0.365v24.796c0,0.198-0.168,0.366-0.366,0.366H54.342 c-0.199,0-0.365-0.168-0.365-0.366V54.33c0-0.198,0.166-0.365,0.365-0.365H79.138 M79.138,51.057H54.342 c-1.805,0-3.273,1.469-3.273,3.273v24.796c0,1.806,1.469,3.274,3.273,3.274h24.796c1.806,0,3.274-1.469,3.274-3.274V54.33 C82.412,52.525,80.943,51.057,79.138,51.057L79.138,51.057z"}})])]),_vm._v(" "),_c('p',[_vm._v("Instagrams")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/product-category"}},[_c('div',{staticClass:"element element-category"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M84.238,27.372h-5.896h-5.469h-1.965v-9.729c0-2.558-2.08-4.639-4.637-4.639h-5.725H46.141h-5.72 c-2.558,0-4.639,2.081-4.639,4.639v9.729h-12.48c-0.7,0-1.267,0.566-1.267,1.267v17.7l-7.541,0.021l0.088,30.599l7.453-0.021v8.76 c0,0.701,0.566,1.266,1.267,1.266H72.38c0.072,0.013,0.141,0.033,0.216,0.033h11.522c0.166,0,0.323-0.043,0.473-0.104 c0.524-0.154,0.914-0.619,0.914-1.195V28.639C85.505,27.938,84.938,27.372,84.238,27.372z M82.972,82.996l-3.361-3.019V29.905 h3.361V82.996z M75.938,84.429l2.42-2.174l2.416,2.174H75.938z M77.076,29.905v50.098l-2.935,2.636V29.905H77.076z M68.376,17.644 v9.729h-3.188v-9.729c0-0.762-0.203-1.471-0.529-2.105h1.613C67.431,15.538,68.376,16.482,68.376,17.644z M60.548,15.538 c1.161,0,2.106,0.944,2.106,2.105v9.729H44.036v-9.729c0-1.161,0.943-2.105,2.104-2.105H60.548z M38.316,17.644 c0-1.161,0.943-2.105,2.104-2.105h1.61c-0.327,0.635-0.529,1.344-0.529,2.105v9.729h-3.186V17.644z M17.036,48.886l35.928-0.098 l7.406,12.74l-7.334,12.785l-35.928,0.104L17.036,48.886z M24.568,76.929l29.937-0.088l8.793-15.318l-8.879-15.273l-29.851,0.082 V29.905h11.214v4.609c-0.725,0.457-1.21,1.258-1.21,2.176c0,1.42,1.155,2.575,2.574,2.575c1.422,0,2.577-1.155,2.577-2.575 c0-0.998-0.575-1.854-1.407-2.282v-4.503h24.338v4.582c-0.752,0.451-1.262,1.265-1.262,2.203c0,1.42,1.155,2.575,2.577,2.575 c1.419,0,2.573-1.155,2.573-2.575c0-0.977-0.552-1.818-1.354-2.254v-4.531h6.418v54.523H24.568V76.929z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M57.041,61.255c-0.007-1.908-1.564-3.461-3.474-3.461h-0.01c-1.914,0.01-3.467,1.572-3.46,3.482 c0.006,1.904,1.559,3.456,3.478,3.456C55.485,64.732,57.041,63.173,57.041,61.255z M52.632,61.269 c-0.002-0.516,0.418-0.938,0.934-0.939l0.002-1.268v1.268c0.516,0,0.938,0.418,0.939,0.928c0,0.52-0.418,0.941-0.947,0.941 C53.05,62.198,52.632,61.782,52.632,61.269z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M37.108,57.079l-3.33-6.743l-3.327,6.743l-7.441,1.078l5.384,5.252l-1.268,7.41l6.652-3.5l6.657,3.5l-1.272-7.41 l5.385-5.25L37.108,57.079z M37.07,66.187l-3.292-1.729l-3.29,1.729l0.628-3.66l-2.662-2.598l3.679-0.533l1.646-3.336l1.647,3.336 l3.679,0.531l-2.663,2.6L37.07,66.187z"}})])]),_vm._v(" "),_c('p',[_vm._v("product categories")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/products"}},[_c('div',{staticClass:"element element-product"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M64.228,34.349H52.847c-0.787,0-1.423,0.636-1.423,1.423s0.636,1.422,1.423,1.422h11.381 c0.787,0,1.422-0.635,1.422-1.422S65.015,34.349,64.228,34.349z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M73.093,15.584l-2.129-0.623l-9.178-2.199c-0.13-0.03-0.264-0.046-0.396-0.046 c-0.802,0-1.492,0.54-1.677,1.308c-0.027,0.119-0.041,0.252-0.041,0.406l-0.006,1.13h-0.133c-0.765,3.226-4.75,5.69-9.534,5.69 c-4.785,0-8.769-2.465-9.534-5.69h-0.14v-1.13c0-0.162-0.013-0.287-0.04-0.4c-0.185-0.773-0.874-1.313-1.677-1.313 c-0.134,0-0.267,0.015-0.391,0.045l-9.267,2.222l-2.146,0.625c-2.111,0.413-12.709,4.007-14.089,34.31 c-0.02,0.469,0.153,0.931,0.473,1.263c0.323,0.34,0.776,0.533,1.242,0.533h9.666v31.008c0,2.514,2.046,4.561,4.562,4.561h42.681 c2.516,0,4.562-2.047,4.562-4.561V51.715h9.665c0.467,0,0.919-0.193,1.242-0.533c0.321-0.334,0.493-0.794,0.473-1.26 C85.905,19.612,75.306,16.022,73.093,15.584z M75.902,48.284v-9.666c0-0.946-0.77-1.717-1.716-1.717 c-0.945,0-1.715,0.771-1.715,1.717v45.236H27.53V38.618c0-0.946-0.771-1.717-1.716-1.717c-0.945,0-1.716,0.771-1.716,1.717v9.666 h-7.864l0.085-1.209c1.458-20.785,7.627-26.282,10.043-27.651l-0.041-0.311l1.133-0.136c0.09-0.011,0.178-0.029,0.266-0.055 l2.183-0.641l7.227-1.73l0.363,0.908c1.695,4.252,6.837,7.223,12.506,7.223c5.67,0,10.812-2.97,12.506-7.223l0.362-0.908 l7.28,1.745l2.236,0.657l0.147,0.023c0.382,0.084,9.342,2.336,11.147,28.098l0.086,1.209H75.902z"}})])]),_vm._v(" "),_c('p',[_vm._v("products")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/tabs"}},[_c('div',{staticClass:"element element-tab"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M65.924,67.172c0-0.594-0.354-1.109-0.859-1.344c0.627-0.088,0.984-0.137,0.768-0.137h-1.375H32.961H22.818 c-0.81,0-1.469,0.668-1.469,1.48c0,0.811,0.659,1.479,1.469,1.479h10.144h31.496h1.375c0.217,0-0.141-0.05-0.768-0.138 C65.57,68.279,65.924,67.766,65.924,67.172z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M22.818,52.041h6.087h33.523h6.086c0.809,0,1.469-0.67,1.469-1.482c0-0.811-0.66-1.478-1.469-1.478h-6.086H28.905h-6.087 c-0.81,0-1.469,0.667-1.469,1.478C21.349,51.371,22.008,52.041,22.818,52.041z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M74.6,57.387H22.818c-0.81,0-1.469,0.666-1.469,1.479c0,0.811,0.659,1.48,1.469,1.48H74.6c0.811,0,1.469-0.67,1.469-1.48 C76.068,58.053,75.41,57.387,74.6,57.387z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M84.678,18.738H15.27c-3.235,0-5.868,2.564-5.868,5.803v50.918c0,3.24,2.633,5.803,5.868,5.803h69.408 c3.238,0,5.922-2.563,5.922-5.801v-50.92C90.6,21.303,87.916,18.738,84.678,18.738z M87.641,75.461 c0,1.617-1.342,3.008-2.963,3.008H15.27c-1.616,0-2.91-1.391-2.91-3.01V38.165c0.167,0.066,0.346,0.106,0.536,0.106h74.737 c0.002,0,0.006-0.002,0.008-0.002V75.461z M87.641,35.313c-0.002,0-0.006-0.001-0.008-0.001H12.896c-0.19,0-0.369,0.04-0.536,0.106 V24.541c0-1.619,1.294-3.008,2.91-3.008h69.408c1.621,0,2.963,1.389,2.963,3.008V35.313z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M32.838,27.746H22.031c-0.744,0-1.348,0.604-1.348,1.351c0,0.745,0.604,1.351,1.348,1.351h10.807 c0.747,0,1.352-0.605,1.352-1.351C34.19,28.35,33.585,27.746,32.838,27.746z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M48.79,27.746h-0.902c-0.745,0-1.349,0.604-1.349,1.351c0,0.745,0.604,1.351,1.349,1.351h0.902 c0.745,0,1.349-0.605,1.349-1.351C50.139,28.35,49.534,27.746,48.79,27.746z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M39.785,27.746h-0.9c-0.747,0-1.351,0.604-1.351,1.351c0,0.745,0.604,1.351,1.351,1.351h0.9 c0.746,0,1.353-0.605,1.353-1.351C41.137,28.35,40.531,27.746,39.785,27.746z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M44.287,27.746h-0.901c-0.745,0-1.35,0.604-1.35,1.351c0,0.745,0.605,1.351,1.35,1.351h0.901 c0.747,0,1.35-0.605,1.35-1.351C45.637,28.35,45.034,27.746,44.287,27.746z"}})])]),_vm._v(" "),_c('p',[_vm._v("tabs")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/testimonials"}},[_c('div',{staticClass:"element element-testimonial"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M84.41,37.332c0.581,0,1.054-0.671,1.054-1.481c0-0.813-0.473-1.48-1.054-1.48H44.918c-0.581,0-1.054,0.668-1.054,1.48 c0,0.811,0.473,1.481,1.054,1.481H84.41z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M35.122,44.165c0,0.811,0.473,1.481,1.056,1.481H84.41c0.581,0,1.054-0.671,1.054-1.481c0-0.813-0.473-1.48-1.054-1.48 H36.178C35.595,42.685,35.122,43.352,35.122,44.165z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M84.41,50.997H50.746c-0.583,0-1.056,0.669-1.056,1.484c0,0.81,0.473,1.479,1.056,1.479H84.41 c0.581,0,1.054-0.67,1.054-1.479C85.464,51.666,84.991,50.997,84.41,50.997z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M40.32,56.454l-9.714-1.412c-0.066-0.009-0.123-0.052-0.151-0.11l-4.346-8.805c-0.588-1.191-1.826-1.962-3.155-1.962 c-1.347,0-2.558,0.751-3.153,1.962l-4.346,8.805c-0.03,0.059-0.085,0.102-0.151,0.11l-9.716,1.412 c-1.335,0.194-2.423,1.11-2.839,2.393c-0.413,1.263-0.062,2.68,0.891,3.607l7.03,6.852c0.046,0.046,0.069,0.113,0.057,0.179 l-1.661,9.68c-0.224,1.309,0.326,2.657,1.401,3.438c0.604,0.439,1.319,0.674,2.066,0.674c0.57,0,1.136-0.141,1.637-0.405 l8.692-4.568c0.028-0.016,0.061-0.023,0.092-0.023c0.034,0,0.066,0.008,0.094,0.023l8.691,4.568 c0.501,0.265,1.068,0.405,1.637,0.405c0.747,0,1.461-0.234,2.067-0.674c1.075-0.78,1.625-2.129,1.399-3.438l-1.66-9.68 c-0.011-0.065,0.012-0.133,0.059-0.179l7.032-6.852c0.949-0.928,1.301-2.343,0.891-3.607C42.745,57.564,41.657,56.648,40.32,56.454 z M41.004,59.843l-8.879,8.655l2.096,12.222c0.012,0.074-0.018,0.152-0.08,0.198c-0.036,0.025-0.077,0.038-0.119,0.038 c-0.032,0-0.064-0.009-0.094-0.025l-10.975-5.769l-10.975,5.769c-0.03,0.017-0.062,0.025-0.094,0.025 c-0.041,0-0.082-0.013-0.119-0.038c-0.062-0.046-0.092-0.124-0.08-0.198l2.098-12.222l-8.879-8.655 c-0.057-0.053-0.077-0.133-0.052-0.206s0.089-0.126,0.164-0.139l12.271-1.781l5.487-11.119c0.034-0.07,0.104-0.112,0.18-0.112 c0.077,0,0.147,0.042,0.181,0.112l5.488,11.119l12.272,1.781c0.075,0.013,0.137,0.065,0.16,0.139 C41.079,59.71,41.06,59.79,41.004,59.843z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M91.497,18.037H25.334c-3.239,0-5.876,2.568-5.876,5.811v11.158c0.187-0.01,0.364,0,0.553,0c0.869,0,1.667-0.182,2.412,0 V23.848c0-1.62,1.294-3.012,2.912-3.012h66.163c1.625,0,2.966,1.392,2.966,3.012v42.903c0,1.621-1.341,3.013-2.966,3.013H87.47 h-2.308v2.798v9.084l-7.654-9.084l-2.359-2.798h-3.017H47.875c0.092,0.93,0.153,1.876,0,2.798h26.616L87.47,87.963V72.562h4.027 c3.244,0,5.927-2.568,5.927-5.811V23.848C97.424,20.605,94.741,18.037,91.497,18.037z"}})])]),_vm._v(" "),_c('p',[_vm._v("testimonials")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/titles"}},[_c('div',{staticClass:"element element-title active"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M32.425,18.043h-2.268l-8.941,27.391h20.07L32.425,18.043z M31.284,22.751L37.806,42.9H24.71L31.284,22.751 z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M12.567,64.073h3.293c1.088,0,2.057-0.695,2.402-1.729l3.828-11.421h18.396l3.762,11.408 c0.342,1.039,1.313,1.741,2.406,1.741h3.287c0.816,0,1.586-0.396,2.063-1.061c0.475-0.667,0.6-1.521,0.334-2.295L36.397,14.266 c-0.35-1.022-1.313-1.712-2.396-1.712h-5.496c-1.084,0-2.045,0.689-2.396,1.712L10.171,60.718 c-0.266,0.773-0.141,1.628,0.334,2.295C10.981,63.677,11.747,64.073,12.567,64.073z M28.505,15.089h5.496L49.942,61.54h-3.287 l-4.336-13.15H20.267L15.86,61.54h-3.293L28.505,15.089z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M89.901,83.444H10v4.002l79.901-0.002c0.034,0,0.065-0.008,0.099-0.009v-3.982 C89.967,83.452,89.936,83.444,89.901,83.444z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M89.901,71.757H10v4.006h79.901c0.034,0,0.065-0.008,0.099-0.009v-3.988 C89.967,71.765,89.936,71.757,89.901,71.757z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M59.505,52.388h30.396c0.034,0,0.065-0.008,0.099-0.01v-3.982c-0.033-0.002-0.064-0.01-0.099-0.01H59.505 c-0.235,0-0.458,0.041-0.672,0.102v3.799C59.047,52.347,59.27,52.388,59.505,52.388z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M59.505,64.073h30.396c0.034,0,0.065-0.008,0.099-0.009v-3.983c-0.033-0.002-0.064-0.01-0.099-0.01 l-30.396,0.002c-0.235,0-0.458,0.041-0.672,0.102v3.797C59.047,64.032,59.27,64.073,59.505,64.073z"}})])]),_vm._v(" "),_c('p',[_vm._v("titles")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/typography"}},[_c('div',{staticClass:"element element-typography"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('rect',{attrs:{"x":"37.195","y":"76.181","fill":"none","width":"25.612","height":"3.859"}}),_vm._v(" "),_c('path',{attrs:{"fill":"none","d":"M59.012,23.874c5.605,0,9.371,3.35,11.191,9.957l0.051,0.373c0.002,0.016,0.002,0.023,0,0.033l0.053,0.188 l1.189,4.975L71.1,19.958H28.901l-0.397,19.445l1.22-5.088c2.125-6.518,5.878-10.029,11.156-10.439l6.435-0.002v49.48h5.002 c0-15.418,0-49.48,0-49.48H59.012z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M55.143,26.698h3.869c4.193,0,6.951,2.527,8.422,7.723c0.018,0.289,0.068,0.543,0.152,0.77l1.689,7.072h5.104 l-0.512-25.129H26.134l-0.512,25.129h5.104l1.702-7.127c1.762-5.363,4.598-8.127,8.562-8.438h3.502v46.656H34.37v9.512h31.261 v-9.512H55.143C55.143,61.229,55.143,26.698,55.143,26.698z M62.807,76.181v3.859H37.195v-3.859H62.807z M47.316,73.354v-49.48 l-6.435,0.002c-5.278,0.41-9.031,3.922-11.156,10.439l-1.22,5.088l0.397-19.445H71.1l0.396,19.441l-1.189-4.975l-0.053-0.188 c0.002-0.01,0.002-0.018,0-0.033l-0.051-0.373c-1.82-6.607-5.586-9.957-11.191-9.957h-6.693c0,0,0,34.063,0,49.48H47.316z"}})])]),_vm._v(" "),_c('p',[_vm._v("typography")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/alerts"}},[_c('div',{staticClass:"element element-video"},[_c('svg',{staticClass:"pt-1 pb-1",attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"50px","height":"62px","viewBox":"0 0 70 70","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M64.029,66.5H5.968c-2.125,0-4.107-1.23-5.171-3.072c-1.063-1.844-1.063-4.173,0-6.016L29.828,7.107 C30.892,5.266,32.873,4.11,35,4.11c2.125,0,4.108,1.139,5.171,2.981l29.031,50.28c1.063,1.843,1.063,4.215,0.001,6.058 C68.138,65.271,66.156,66.5,64.029,66.5z M35,8.081c-0.71,0-1.37,0.381-1.725,0.995L4.244,59.359c-0.354,0.614-0.354,1.953,0,2.568 C4.6,62.541,5.261,63.5,5.968,63.5h58.062c0.711,0,1.37-0.959,1.726-1.572c0.354-0.615,0.354-1.665-0.002-2.279L36.724,9.22 C36.368,8.606,35.708,8.081,35,8.081z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M31.756,55.081c0-1.954,1.357-3.365,3.203-3.365c1.954,0,3.203,1.411,3.203,3.365 c0,1.901-1.249,3.365-3.203,3.365C33.059,58.446,31.756,56.982,31.756,55.081z M33.113,47.317l-0.76-26.059h5.211l-0.761,26.059 H33.113z"}})])]),_vm._v(" "),_c('p',[_vm._v("Notification")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5col col-lg-3 col-md-4 col-sm-6 col-12\">","</div>",[_c('nuxt-link',{staticClass:"element-type",attrs:{"to":"/elements/alerts"}},[_c('div',{staticClass:"element element-video"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","width":"62px","height":"62px","viewBox":"0 0 100 100","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M81.866,27.469h-2.596v37.886H53.465h-1.036l1.901-2.057l22.557-24.403c0.202-0.128,0.37-0.312,0.478-0.536 c0.109-0.229,0.146-0.477,0.117-0.718c-0.011-0.146-0.037-0.291-0.099-0.431c-0.084-0.192-0.22-0.348-0.376-0.476l-7.006-8.757 c-0.168-0.211-0.398-0.354-0.652-0.43c-0.116-0.033-0.236-0.057-0.36-0.057h-4.777H31.012c-0.394,0-0.767,0.179-1.014,0.486 l-7.005,8.757c-0.157,0.128-0.292,0.283-0.377,0.476c-0.061,0.14-0.088,0.285-0.098,0.431c-0.029,0.241,0.008,0.489,0.117,0.718 c0.108,0.225,0.275,0.408,0.478,0.536l24.455,26.459H20.729V27.469h-2.597v40.482h63.733V27.469z M42.28,36.434l7.718-6.08 l7.721,6.08H42.28z M59.337,39.096h0.254l-9.592,23.537l-0.271-0.666l-9.319-22.871H59.337z M57.275,56.287l-3.376,3.652 l8.495-20.843h2.104h8.667L57.275,56.287z M65.616,36.434h-1.19l2.463-3.028l2.082-2.56l4.47,5.588H65.616z M63.121,30.088h3.12 l-4.835,5.945l-0.589-0.463l-6.96-5.482H63.121z M46.141,30.088l-7.545,5.945l-4.834-5.945H46.141z M31.031,30.844l4.546,5.59 H26.56L31.031,30.844z M26.834,39.096h10.772l8.492,20.845L26.834,39.096z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M86.998,69.928V26.174c0-2.063-1.677-3.739-3.738-3.739H16.738c-2.061,0-3.736,1.677-3.736,3.739v43.753H2.364v4.6 l0.521,0.389c0.363,0.271,3.628,2.648,6.334,2.648h81.56c2.706,0,5.972-2.377,6.335-2.648l0.521-0.389v-4.6H86.998z M15.598,26.174 c0-0.631,0.512-1.144,1.141-1.144H83.26c0.63,0,1.142,0.513,1.142,1.144v43.753H56.341l-0.272,0.938 c-0.056,0.195-0.088,0.303-1.492,0.303v1.299l-0.169-1.299h-8.983c-1.405,0-1.437-0.107-1.493-0.303l-0.271-0.938H15.598V26.174z M95.04,73.199c-1.042,0.686-2.961,1.77-4.261,1.77H9.22c-1.2,0-3.059-0.971-4.26-1.768v-0.678h36.918 c0.883,1.24,2.505,1.24,3.546,1.24v-1.297l0.169,1.297h8.983c1.041,0,2.662,0,3.546-1.24H95.04V73.199z"}})])]),_vm._v(" "),_c('p',[_vm._v("more and more")])])])],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/elements/ElementList.vue?vue&type=template&id=684ccd27&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/elements/ElementList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ElementListvue_type_script_lang_js_ = ({
  props: {
    subClass: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/partials/elements/ElementList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_ElementListvue_type_script_lang_js_ = (ElementListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/elements/ElementList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_ElementListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c558b98e"
  
)

/* harmony default export */ var ElementList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/PageHeader.vue?vue&type=template&id=0e39c798&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header",style:({ 'background-image': 'url(./images/page-header-back.jpg)', 'background-color': '#3C63A4'})},[_vm._ssrNode("<h3 class=\"page-subtitle\">"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</h3> <h1 class=\"page-title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" <li class=\"delimiter\">/</li> "),(_vm.parentUrl)?_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.parentUrl}},[_vm._v(_vm._s(_vm.subTitle)+" ")])],1):_vm._e(),_vm._ssrNode(" <li class=\"delimiter\">/</li> <li>"+_vm._ssrEscape(_vm._s(_vm.title))+"</li>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/PageHeader.vue?vue&type=template&id=0e39c798&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/PageHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
  props: {
    title: String,
    subTitle: String,
    parentUrl: String
  }
});
// CONCATENATED MODULE: ./components/elements/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/PageHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_PageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "814f1bca"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=alerts.js.map