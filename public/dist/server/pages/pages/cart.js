exports.ids = [30];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/cart.vue?vue&type=template&id=54177faa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main cart border-no"},[_vm._ssrNode("<div class=\"page-content pt-7 pb-10\">","</div>",[_vm._ssrNode("<div class=\"step-by pr-4 pl-4\">","</div>",[_vm._ssrNode("<h3 class=\"title title-simple title-step active\"><a href=\"javascript:;\">1. Shopping Cart</a></h3> "),_vm._ssrNode("<h3 class=\"title title-simple title-step\">","</h3>",[_c('nuxt-link',{attrs:{"to":"/pages/checkout"}},[_vm._v("2. Checkout")])],1),_vm._ssrNode(" "),_vm._ssrNode("<h3 class=\"title title-simple title-step\">","</h3>",[_c('nuxt-link',{attrs:{"to":"/pages/order"}},[_vm._v("3. Order Complete")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container mt-7 mb-2\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[(_vm.cartItems.length > 0)?[_vm._ssrNode("<div class=\"col-lg-8 col-md-12 pr-lg-4\">","</div>",[_vm._ssrNode("<table class=\"shop-table cart-table\">","</table>",[_vm._ssrNode("<thead><tr><th><span>Product</span></th> <th></th> <th><span>Price</span></th> <th><span>quantity</span></th> <th>Subtotal</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.cartItems),function(item){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"product-thumbnail\">","</td>",[_vm._ssrNode("<figure>","</figure>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + item.slug}},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (item.pictures[0].url)),"width":100,"height":100,"alt":"product"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"product-name\">","</td>",[_vm._ssrNode("<div class=\"product-name-section\">","</div>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + item.slug}},[_vm._v(_vm._s(item.name))])],1)]),_vm._ssrNode(" <td class=\"product-subtotal\"><span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.price)))+"</span></td> "),_vm._ssrNode("<td class=\"product-quantity\">","</td>",[_c('input-quantity',{attrs:{"max":item.stock,"qty":item.qty},on:{"change-qty":function (qty){ return _vm.changeQty(qty, item.name); }}})],1),_vm._ssrNode(" <td class=\"product-price\"><span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.qty * item.price)))+"</span></td> <td class=\"product-close\"><a href=\"javascript:;\" title=\"Remove this product\" class=\"product-remove\"><i class=\"fas fa-times\"></i></a></td>")],2)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cart-actions mb-6 pt-4\">","</div>",[_c('nuxt-link',{staticClass:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",attrs:{"to":"/shop"}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v("Continue Shopping")]),_vm._ssrNode(" <button type=\"submit\""+(_vm._ssrClass(null,("btn btn-outline btn-dark btn-md btn-rounded " + (!_vm.isChanged ? ' btn-disabled' : ''))))+">Update Cart\n\t\t\t\t\t\t\t</button>")],2),_vm._ssrNode(" <div class=\"cart-coupon-box mb-8\"><h4 class=\"title coupon-title text-uppercase ls-m\">Coupon Discount</h4> <input type=\"text\" name=\"coupon_code\" aria-label=\"input coupon\" id=\"coupon_code\" placeholder=\"Enter coupon code here...\" class=\"input-text form-control text-grey ls-m mb-4\"> <button type=\"submit\" class=\"btn btn-md btn-dark btn-rounded btn-outline\">Apply Coupon</button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<aside sticky-container class=\"col-lg-4 sticky-sidebar-wrapper\">","</aside>",[_c('div',{directives:[{name:"sticky",rawName:"v-sticky",value:(_vm.isSticky),expression:"isSticky"}],attrs:{"sticky-offset":"{top: 80, bottom: 50}"}},[_vm._ssrNode("<div class=\"summary mb-4\">","</div>",[_vm._ssrNode("<h3 class=\"summary-title text-left\">Cart Totals</h3> <table class=\"shipping\"><tbody><tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Subtotal</h4></td> <td><p class=\"summary-subtotal-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.totalPrice)))+"</p></td></tr> <tr class=\"sumnary-shipping shipping-row-last\"><td colSpan=\"2\"><h4 class=\"summary-subtitle\">Calculate Shipping</h4> <ul><li><div class=\"custom-radio\"><input type=\"radio\" id=\"flat_rate\" name=\"shipping\" checked=\"checked\" class=\"custom-control-input\"> <label for=\"flat_rate\" class=\"custom-control-label\">Flat rate</label></div></li> <li><div class=\"custom-radio\"><input type=\"radio\" id=\"free-shipping\" name=\"shipping\" class=\"custom-control-input\"> <label for=\"free-shipping\" class=\"custom-control-label\">Free\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping</label></div></li> <li><div class=\"custom-radio\"><input type=\"radio\" id=\"local_pickup\" name=\"shipping\" class=\"custom-control-input\"> <label for=\"local_pickup\" class=\"custom-control-label\">Local pickup</label></div></li></ul></td></tr></tbody></table> <div class=\"shipping-address\"><label>Shipping to <strong>CA.</strong></label> <div class=\"select-box\"><select name=\"country\" aria-label=\"select country\" default-value=\"us\" class=\"form-control\"><option value=\"us\">United States (US)</option> <option value=\"uk\"> United Kingdom</option> <option value=\"fr\">France</option> <option value=\"aus\">Austria</option></select></div> <div class=\"select-box\"><select name=\"country\" aria-label=\"select country\" default-value=\"us\" class=\"form-control\"><option value=\"us\">California</option> <option value=\"uk\">Alaska</option> <option value=\"fr\">Delaware</option> <option value=\"aus\">Hawaii</option></select></div> <input type=\"text\" name=\"code\" aria-label=\"input city\" placeholder=\"Town / City\" class=\"form-control\"> <input type=\"text\" name=\"code\" aria-label=\"input zip\" placeholder=\"ZIP\" class=\"form-control\"> <a href=\"javascript:;\" class=\"btn btn-md btn-dark btn-rounded btn-outline\">Update totals</a></div> <table class=\"total\"><tbody><tr class=\"summary-subtotal\"><td><h4 class=\"summary-subtitle\">Total</h4></td> <td><p class=\"summary-total-price ls-s\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.totalPrice)))+"</p></td></tr></tbody></table> "),_c('nuxt-link',{staticClass:"btn btn-dark btn-rounded btn-checkout",attrs:{"to":"/pages/checkout"}},[_vm._v("Proceed to checkout")])],2)])])]:[_vm._ssrNode("<div class=\"empty-cart text-center\">","</div>",[_vm._ssrNode("<p>Your cart is currently empty.</p> <i class=\"cart-empty d-icon-bag\"></i> "),_vm._ssrNode("<p class=\"return-to-shop mb-0\">","</p>",[_c('nuxt-link',{staticClass:"button wc-backward btn btn-dark btn-md",attrs:{"to":"/shop"}},[_vm._v("\n\t\t\t\t\t\t\t\tReturn to shop\n\t\t\t\t\t\t\t")])],1)],2)]],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pages/cart.vue?vue&type=template&id=54177faa&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: external "vue-sticky-directive"
var external_vue_sticky_directive_ = __webpack_require__(65);
var external_vue_sticky_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_sticky_directive_);

// EXTERNAL MODULE: ./components/elements/InputQuantity.vue + 4 modules
var InputQuantity = __webpack_require__(77);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  components: {
    InputQuantity: InputQuantity["a" /* default */]
  },
  directives: {
    Sticky: external_vue_sticky_directive_default.a
  },
  data: function () {
    return {
      isSticky: false,
      baseUrl: api["a" /* baseUrl */],
      cartItems: [],
      isChanged: false
    };
  },
  computed: { ...Object(external_vuex_["mapGetters"])('cart', ['cartList', 'totalPrice'])
  },
  watch: {
    cartList: function () {
      this.cartItems = [...this.cartList];
    }
  },
  mounted: function () {
    this.cartItems = [...this.cartList];
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler, {
      passive: true
    });
  },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: { ...Object(external_vuex_["mapActions"])('cart', ['updateCart', 'removeFromCart']),
    resizeHandler: function () {
      this.isSticky = window.innerWidth > 991 ? true : false;
    },
    changeQty: function (qty, name) {
      this.cartItems = this.cartItems.map(item => {
        return item.name === name ? { ...item,
          qty: qty
        } : item;
      });
      this.isChanged = this.compareItems();
    },
    compareItems: function () {
      if (this.cartItems.length !== this.cartList.length) return true;

      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].qty !== this.cartList[i].qty) return true;
      }

      return false;
    },
    update: function () {
      this.updateCart({
        cartItems: this.cartItems
      });
      this.isChanged = this.compareItems();
    }
  }
});
// CONCATENATED MODULE: ./pages/pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4458a090"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=cart.js.map