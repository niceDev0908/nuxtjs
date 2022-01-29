exports.ids = [37];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/wishlist.vue?vue&type=template&id=ca209966&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main"},[_vm._ssrNode("<nav class=\"breadcrumb-nav\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" <li>Wishlist</li>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content pt-10 pb-10 mb-2\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.wishList.length > 0)?[_vm._ssrNode("<table class=\"shop-table wishlist-table mt-2 mb-4\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"product-name\"><span>Product</span></th> <th></th> <th class=\"product-price\"><span>Price</span></th> <th class=\"product-stock-status\"><span>Stock status</span></th> <th class=\"product-add-to-cart\"></th> <th class=\"product-remove\"></th></tr></thead> "),_vm._ssrNode("<tbody class=\"wishlist-items-wrapper\">","</tbody>",_vm._l((_vm.wishList),function(item){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"product-thumbnail\">","</td>",[_vm._ssrNode("<figure>","</figure>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + item.slug}},[_c('img',{attrs:{"src":("" + _vm.baseUrl + (item.pictures[0].url)),"width":100,"height":100,"alt":"product"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"product-name\">","</td>",[_vm._ssrNode("<div class=\"product-name-section\">","</div>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + item.slug}},[_vm._v(_vm._s(item.name))])],1)]),_vm._ssrNode(" <td class=\"product-price\">"+((item.display_price[0] !== item.display_price[1])?("<span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.display_price[ 0 ]))+" – $"+_vm._s(_vm._f("priceFormat")(item.display_price[ 1 ])))+"</span>"):(item.discount > 0 && item.variants.length > 0)?("<span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.sale_price)))+"</span> <span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.price)))+"</span>"):("<span class=\"amount\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(item.display_price[ 0 ])))+"</span>"))+"</td> <td class=\"product-stock-status\"><span"+(_vm._ssrClass(null,item.stock > 0 ? 'wishlist-in-stock' : 'wishlist-out-stock'))+">"+_vm._ssrEscape(_vm._s(item.stock > 0 ? 'In Stock' : 'Out of Stock'))+"</span></td> "),_vm._ssrNode("<td class=\"product-add-to-cart\">","</td>",[(item.stock > 0)?[(item.variants.length > 0)?_c('nuxt-link',{staticClass:"btn-product btn-primary",attrs:{"to":'/product/default/' + item.slug}},[_c('span',[_vm._v("Select options")])]):_c('a',{staticClass:"btn-product btn-primary",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.moveToCartHandler(item)}}},[_vm._v("Add to Cart")])]:_vm._e()],2),_vm._ssrNode(" <td class=\"product-close\"><a href=\"javascript:;\" title=\"Remove this product\" class=\"product-remove\"><i class=\"fas fa-times\"></i></a></td>")],2)}),0)],2),_vm._ssrNode(" <div class=\"social-links share-on\"><h5 class=\"text-uppercase font-weight-bold mb-0 mr-4 ls-s\">Share on:</h5> <a href=\"javascript:;\" title=\"Facebook\" class=\"social-link social-icon social-facebook\"><i class=\"fab fa-facebook-f\"></i></a> <a href=\"javascript:;\" title=\"Twitter\" class=\"social-link social-icon social-twitter\"><i class=\"fab fa-twitter\"></i></a> <a href=\"javascript:;\" title=\"Pinterest\" class=\"social-link social-icon social-pinterest\"><i class=\"fab fa-pinterest-p\"></i></a> <a href=\"javascript:;\" title=\"Email\" class=\"social-link social-icon social-email\"><i class=\"far fa-envelope\"></i></a> <a href=\"javascript:;\" title=\"Whatsapp\" class=\"social-link social-icon social-whatsapp\"><i class=\"fab fa-whatsapp\"></i></a></div>")]:[_vm._ssrNode("<div class=\"empty-cart text-center\">","</div>",[_vm._ssrNode("<i class=\"wishlist-empty far fa-heart\"></i> <p>No products added to the wishlist.</p> "),_vm._ssrNode("<p class=\"return-to-shop mb-0\">","</p>",[_c('nuxt-link',{staticClass:"button wc-backward btn btn-dark btn-md",attrs:{"to":"/shop"}},[_vm._v("\n\t\t\t\t\t\t\tReturn to shop\n\t\t\t\t\t\t")])],1)],2)]],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/pages/wishlist.vue?vue&type=template&id=ca209966&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/wishlist.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var wishlistvue_type_script_lang_js_ = ({
  data: function () {
    return {
      baseUrl: api["a" /* baseUrl */]
    };
  },
  computed: { ...Object(external_vuex_["mapGetters"])('wishlist', ['wishList'])
  },
  methods: { ...Object(external_vuex_["mapActions"])('cart', ['addToCart']),
    ...Object(external_vuex_["mapActions"])('wishlist', ['toggleWishlist']),
    moveToCartHandler: function (data) {
      if (data.stock > 0) {
        let product = { ...data,
          price: data.display_price[0]
        };
        this.addToCart({
          product: product
        });
      }

      this.toggleWishlist(data);
    }
  }
});
// CONCATENATED MODULE: ./pages/pages/wishlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_wishlistvue_type_script_lang_js_ = (wishlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/wishlist.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_wishlistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "312e5696"
  
)

/* harmony default export */ var wishlist = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wishlist.js.map