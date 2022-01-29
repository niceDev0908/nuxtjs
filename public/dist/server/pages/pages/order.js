exports.ids = [36];
exports.modules = {

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/order.vue?vue&type=template&id=9c31455a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main order"},[_vm._ssrNode("<div class=\"page-content pt-7 pb-10 mb-10\">","</div>",[_vm._ssrNode("<div class=\"step-by pr-4 pl-4\">","</div>",[_vm._ssrNode("<h3 class=\"title title-simple title-step\">","</h3>",[_c('nuxt-link',{attrs:{"to":"/pages/cart"}},[_vm._v("1. Shopping Cart")])],1),_vm._ssrNode(" "),_vm._ssrNode("<h3 class=\"title title-simple title-step\">","</h3>",[_c('nuxt-link',{attrs:{"to":"/pages/checkout"}},[_vm._v("2. Checkout")])],1),_vm._ssrNode(" <h3 class=\"title title-simple title-step active\"><a href=\"javascript:;\">3. Order Complete</a></h3>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container mt-8\">","</div>",[_vm._ssrNode("<div class=\"order-message mr-auto ml-auto\"><div class=\"icon-box d-inline-flex align-items-center\"><div class=\"icon-box-icon mb-0\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlnsXlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enableBackground=\"new 0 0 50 50\" xmlSpace=\"preserve\"><g><path fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\t\t\t\t\t\t\tM33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4\n\t\t\t\t\t\t\t\t\t\tc0-0.7,0-1.4-0.1-2.1\"></path> <polyline fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\" stroke-miterlimit=\"10\" points=\"\n\t\t\t\t\t\t\t\t\t\t48,6.9 24.4,29.8 17.2,22.3 \t\"></polyline></g></svg></div> <div class=\"icon-box-content text-left\"><h5 class=\"icon-box-title font-weight-bold lh-1 mb-1\">Thank You!</h5> <p class=\"lh-1 ls-m\">Your order has been received</p></div></div></div> <div class=\"order-results\"><div class=\"overview-item\"><span>Order number:</span> <strong>4935</strong></div> <div class=\"overview-item\"><span>Status:</span> <strong>Processing</strong></div> <div class=\"overview-item\"><span>Date:</span> <strong>"+_vm._ssrEscape(_vm._s(new Date().toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )))+"</strong></div> <div class=\"overview-item\"><span>Email:</span> <strong>12345@gmail.com</strong></div> <div class=\"overview-item\"><span>Total:</span> <strong>"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.totalPrice)))+"</strong></div> <div class=\"overview-item\"><span>Payment method:</span> <strong>Cash on delivery</strong></div></div> <h2 class=\"title title-simple text-left pt-4 font-weight-bold text-uppercase\">Order Details</h2> <div class=\"order-details\"><table class=\"order-details-table\"><thead><tr class=\"summary-subtotal\"><td><h3 class=\"summary-subtitle\">Product</h3></td> <td></td></tr></thead> <tbody>"+(_vm._ssrList((_vm.cartList),function(item){return ("<tr><td class=\"product-name\">"+_vm._ssrEscape(_vm._s(item.name)+" ")+"<span><i class=\"fas fa-times\"></i>"+_vm._ssrEscape(" "+_vm._s(item.qty))+"</span></td> <td class=\"product-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.qty * item.price)))+"</td></tr>")}))+" <tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Subtotal:</h4></td> <td class=\"summary-subtotal-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.totalPrice)))+"</td></tr> <tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Shipping:</h4></td> <td class=\"summary-subtotal-price\">Free shipping</td></tr> <tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Payment method:</h4></td> <td class=\"summary-subtotal-price\">Cash on delivery</td></tr> <tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Total:</h4></td> <td><p class=\"summary-total-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.totalPrice)))+"</p></td></tr></tbody></table></div> <h2 class=\"title title-simple text-left pt-10 mb-2\">Billing Address</h2> <div class=\"address-info pb-8 mb-6\"><p class=\"address-detail pb-2\">\n\t\t\t\t\tJohn Doe<br>\n\t\t\t\t\tRiode Company<br>\n\t\t\t\t\tSteven street<br>\n\t\t\t\t\tEl Carjon, CA 92020<br>\n\t\t\t\t\t123456789\n\t\t\t\t</p> <p class=\"email\">mail@riode.com</p></div> "),_c('nuxt-link',{staticClass:"btn btn-icon-left btn-dark btn-back btn-rounded btn-md mb-4",attrs:{"to":"/shop"}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v(" Back to List")])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pages/order.vue?vue&type=template&id=9c31455a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ordervue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])('cart', ['cartList', 'totalPrice'])
  }
});
// CONCATENATED MODULE: ./pages/pages/order.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ordervue_type_script_lang_js_ = (ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "25523b0e"
  
)

/* harmony default export */ var order = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order.js.map