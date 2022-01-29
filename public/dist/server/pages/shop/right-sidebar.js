exports.ids = [58];
exports.modules = {

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/right-sidebar.vue?vue&type=template&id=7b41ba91&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main skeleton-body shop-right-sidebar"},[_c('shop-banner'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content mb-10 pb-3\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row main-content-wrap gutter-lg\">","</div>",[_c('sidebar-filter-one',{attrs:{"sidebarClass":"right-sidebar"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-9 main-content\">","</div>",[_c('product-list-one')],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/right-sidebar.vue?vue&type=template&id=7b41ba91&

// EXTERNAL MODULE: ./components/partials/shop/ShopBanner.vue + 2 modules
var ShopBanner = __webpack_require__(86);

// EXTERNAL MODULE: ./components/partials/shop/product-list/ProductListOne.vue + 14 modules
var ProductListOne = __webpack_require__(87);

// EXTERNAL MODULE: ./components/partials/shop/sidebar/SidebarFilterOne.vue + 4 modules
var SidebarFilterOne = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/right-sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var right_sidebarvue_type_script_lang_js_ = ({
  components: {
    ShopBanner: ShopBanner["a" /* default */],
    SidebarFilterOne: SidebarFilterOne["a" /* default */],
    ProductListOne: ProductListOne["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/shop/right-sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_right_sidebarvue_type_script_lang_js_ = (right_sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shop/right-sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_right_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eefacfc6"
  
)

/* harmony default export */ var right_sidebar = __webpack_exports__["default"] = (component.exports);

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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shopColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shopSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shopBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shopPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigationPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return shopTags; });
const shopColors = [{
  name: "Black",
  slug: "black"
}, {
  name: "Blue",
  slug: "blue"
}, {
  name: "Green",
  slug: "green"
}, {
  name: "Brown",
  slug: "brown"
}];
const shopSizes = [{
  slug: "xl",
  name: "Extra Large"
}, {
  slug: "l",
  name: "Large"
}, {
  slug: "m",
  name: "Medium"
}, {
  slug: "s",
  name: "Small"
}];
const shopBrands = [{
  slug: "cinderella",
  name: "Cinderella"
}, {
  slug: "comedy",
  name: "Comedy"
}, {
  slug: "rightcheck",
  name: "Rightcheck"
}, {
  slug: "skillstar",
  name: "SkillStar"
}, {
  slug: "sls",
  name: "SLS"
}];
const shopPrices = [{
  text: '$0.00 - $50.00',
  value: [0, 50]
}, {
  text: '$50.00 - $100.00',
  value: [50, 100]
}, {
  text: '$100.00 - $200.00',
  value: [100, 200]
}, {
  text: '$200.00 +',
  value: [200, 10000]
}];
const navigationPrices = [{
  text: 'All',
  value: [0, 1000]
}, {
  text: '$0.00 - $100.00',
  value: [0, 100]
}, {
  text: '$100.00 - $200.00',
  value: [100, 200]
}, {
  text: '$200.00 +',
  value: [200, 10000]
}];
const shopTags = [{
  slug: "bag",
  name: "Bag"
}, {
  slug: "classic",
  name: "Classic"
}, {
  slug: "converse",
  name: "Converse"
}, {
  slug: "fit",
  name: "Fit"
}, {
  slug: "green",
  name: "Green"
}, {
  slug: "jack-and-jones",
  name: "Jack and Jones"
}, {
  slug: "jeans",
  name: "Jeans"
}, {
  slug: "jumper",
  name: "Jumper"
}, {
  slug: "leather",
  name: "Leather"
}, {
  slug: "diesel",
  name: "Diesel"
}, {
  slug: "man",
  name: "Man"
}];

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/Pagination.vue?vue&type=template&id=2452100d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.indexList && _vm.totalPage > 1)?_c('ul',{staticClass:"pagination"},[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page < 2 ? 'disabled' : ''))+">","</li>",[(_vm.page > 1)?_c('nuxt-link',{staticClass:"page-link page-link-prev",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: parseInt(_vm.page) - 1}) }}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v("Prev\n\t\t")]):_c('a',{staticClass:"page-link page-link-prev",attrs:{"href":"javascript:;"}},[_c('i',{staticClass:"d-icon-arrow-left"}),_vm._v("Prev\n\t\t")])],1),_vm._ssrNode(" "),_vm._l((_vm.indexList),function(item,index){return [(index === 1 && item > 2)?[_vm._ssrNode("<span class=\"page-item dots\">...</span> "),_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1)]:(index === _vm.indexList.length - 2 && item + 1 < _vm.totalPage)?[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1),_vm._ssrNode(" <span class=\"page-item dots\">...</span>")]:[_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page === item ? 'active' : ''))+">","</li>",[(_vm.page === item)?_vm._ssrNode("<a href=\"javascript:;\" class=\"page-link\">","</a>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(item)))],2):_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: item}) }}},[_vm._v("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")])],1)]]}),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass("page-item",_vm.page > _vm.totalPage - 1 ? 'disabled' : ''))+">","</li>",[(_vm.page < _vm.totalPage)?_c('nuxt-link',{staticClass:"page-link page-link-next",attrs:{"to":{ query: Object.assign({}, _vm.$route.query, {page: parseInt(_vm.page) + 1}) }}},[_vm._v("\n\t\t\tNext"),_c('i',{staticClass:"d-icon-arrow-right"})]):_c('a',{staticClass:"page-link page-link-next",attrs:{"href":"javascript:;"}},[_vm._v("Next"),_c('i',{staticClass:"d-icon-arrow-right"})])],1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/Pagination.vue?vue&type=template&id=2452100d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    totalPage: Number
  },
  watch: {
    $route: function () {
      this.getIndexList();
    },
    totalPage: function () {
      this.getIndexList();
    }
  },
  data: function () {
    return {
      maxShowCount: 7,
      distance: 2,
      min: 0,
      max: 0,
      page: 1,
      indexList: []
    };
  },
  created: function () {
    this.getIndexList();
  },
  methods: {
    getIndexList: function () {
      this.indexList = [];
      this.page = this.$route.query.page ? this.$route.query.page : 1;
      this.min = Math.max(this.page - this.distance, 2);
      this.max = Math.min(this.page + this.distance, this.totalPage - 1);

      for (let i = this.min; i <= this.max; i++) {
        this.indexList[i - this.min + 1] = i;
      }

      this.indexList[0] = 1;
      this.indexList[this.max - this.min + 2] = this.totalPage;
    }
  }
});
// CONCATENATED MODULE: ./components/elements/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/Pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58643e8e"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductEight.vue?vue&type=template&id=381cf828&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product product-list",class:{'product-variable': _vm.product.variants.length > 0}},[_vm._ssrNode("<figure class=\"product-media\">","</figure>",[_c('nuxt-link',{attrs:{"to":("/product/default/" + (_vm.product.slug))}},_vm._l((_vm.product.large_pictures.slice(0,2)),function(item,index){return _c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + _vm.baseUrl + (item.url))),expression:"`${baseUrl}${item.url}`"}],key:("one-large-" + index),class:{'last-image': index === 1},attrs:{"alt":"large-picture","width":item.width,"height":item.height}})}),0),_vm._ssrNode(" <div class=\"product-label-group\">"+((_vm.product.is_new)?("<div class=\"product-label label-new\">New</div>"):"<!---->")+" "+((_vm.product.stock === '0')?("<div class=\"product-label label-stock\">Out</div>"):"<!---->")+" "+((_vm.product.is_top)?("<div class=\"product-label label-top\">Top</div>"):"<!---->")+" "+((_vm.product.discount > 0)?("<div class=\"product-label label-sale\">"+((_vm.product.variants.length > 0)?("Sale"):(_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")))+"</div>"):"<!---->")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-details\">","</div>",[_vm._ssrNode("<div class=\"product-cat\">","</div>",_vm._l((_vm.product.product_categories),function(cat,index){return _vm._ssrNode("<span>","</span>",[_c('nuxt-link',{attrs:{"to":{ path: '/shop', query: { category: cat.slug }}}},[_vm._v(_vm._s(cat.name))]),_vm._ssrNode(" "+((index < _vm.product.product_categories.length - 1)?(","):"<!---->"))],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<h3 class=\"product-name\">","</h3>",[_c('nuxt-link',{attrs:{"to":'/product/default/' + _vm.product.slug}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"product-price\">"+((_vm.product.display_price[ 0 ] === _vm.product.display_price[ 1 ])?("<span class=\"price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</span>"):(((_vm.product.variants.length === 0 || (_vm.product.variants.length > 0 && !_vm.product.variants[0].price))?("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0])))+"</ins> <del class=\"old-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</del>"):("<ins class=\"new-price\">"+_vm._ssrEscape("$"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[0]))+" – $"+_vm._s(_vm._f("priceFormat")(_vm.product.display_price[1])))+"</ins>"))))+"</div> <div class=\"ratings-container\"><div class=\"ratings-full\"><span class=\"ratings\""+(_vm._ssrStyle(null,{width: _vm.product.ratings * 20 + '%'}, null))+"></span> <span class=\"tooltiptext tooltip-top\">"+_vm._ssrEscape(_vm._s(_vm._f("priceFormat")(_vm.product.ratings)))+"</span></div> <a href=\"javascript:;\" class=\"rating-reviews\">"+_vm._ssrEscape("( "+_vm._s(_vm.product.reviews)+" reviews )")+"</a></div> <div class=\"product-short-desc\">"+_vm._ssrEscape("\n\t\t\t"+_vm._s(_vm.product.short_description)+"\n\t\t")+"</div> "),_vm._ssrNode("<div class=\"product-action\">","</div>",[(_vm.product.variants.length === 0)?_vm._ssrNode("<a href=\"javascript:;\" title=\"Add to cart\" class=\"btn-product btn-cart\">","</a>",[_vm._ssrNode("<i class=\"d-icon-bag\"></i><span>Add to Cart</span>")],2):_c('nuxt-link',{staticClass:"btn-product btn-cart",attrs:{"to":("/product/default/" + (_vm.product.slug)),"title":"Go to detail"}},[_c('span',[_vm._v("Select Options")])]),_vm._ssrNode(" "+((!_vm.isWishlisted)?("<a href=\"javascript:;\" title=\"Add to wishlist\" class=\"btn-wishlist btn-product-icon\"><i class=\"d-icon-heart\"></i></a>"):"<!---->")+" "+((_vm.isWishlisted)?("<a href=\"javascript:;\" title=\"Remove from wishlist\" class=\"btn-wishlist btn-product-icon\"><i class=\"d-icon-heart-full\"></i></a>"):"<!---->")+" <a href=\"javascript:;\" title=\"Quick View\" class=\"btn-product-icon btn-quickview\"><i class=\"d-icon-search\"></i></a>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/product/ProductEight.vue?vue&type=template&id=381cf828&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductEight.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ProductEightvue_type_script_lang_js_ = ({
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
    wishlistHandler: function (e, toAdd = true) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add('load-more-overlay', 'loading');
      setTimeout(() => {
        this.toggleWishlist(this.product);
        currentTarget.classList.remove('load-more-overlay', 'loading');
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
// CONCATENATED MODULE: ./components/elements/product/ProductEight.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductEightvue_type_script_lang_js_ = (ProductEightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/product/ProductEight.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductEightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "26733ce8"
  
)

/* harmony default export */ var ProductEight = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxOne.vue?vue&type=template&id=6aa2adb9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sticky-wrapper',{attrs:{"breakpoint":992,"type":"mobile","stickyClass":"sticky-toolbox","direction":"up","offsetTop":450}},[_c('nav',{staticClass:"toolbox sticky-toolbox sticky-content fix-top"},[_c('div',{staticClass:"toolbox-left"},[(_vm.$route.path.includes('off-canvas') || (_vm.$route.path.includes('grid') && _vm.$route.params.cols !== '4cols' && _vm.$route.params.cols !== '3cols'))?_c('a',{key:"offCanvasFilter",staticClass:"toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.showSidebar('sidebar-active')}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-right"})]):(!_vm.$route.path.includes('right-sidebar'))?_c('a',{staticClass:"toolbox-item left-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.showSidebar('sidebar-active')}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-right"})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"toolbox-item toolbox-sort select-box text-dark"},[_c('label',[_vm._v("Sort By :")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sortBy),expression:"sortBy"}],staticClass:"form-control",attrs:{"name":"orderby","aria-label":"select sort"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sortBy=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.setSortby]}},[_c('option',{attrs:{"value":"default"}},[_vm._v("Default")]),_vm._v(" "),_c('option',{attrs:{"value":"popularity"}},[_vm._v("Most Popular")]),_vm._v(" "),_c('option',{attrs:{"value":"rating"}},[_vm._v("Average rating")]),_vm._v(" "),_c('option',{attrs:{"value":"date"}},[_vm._v("Latest")]),_vm._v(" "),_c('option',{attrs:{"value":"price-low"}},[_vm._v("Sort forward price low")]),_vm._v(" "),_c('option',{attrs:{"value":"price-high"}},[_vm._v("Sort forward price high")]),_vm._v(" "),_c('option',{attrs:{"value":"default"}},[_vm._v("Clear custom sort")])])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-right"},[_c('div',{staticClass:"toolbox-item toolbox-show select-box text-dark"},[_c('label',[_vm._v("Show :")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.perPage),expression:"perPage"}],staticClass:"form-control",attrs:{"name":"count","aria-label":"select showing count"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.perPage=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.setPerPage]}},[_c('option',{attrs:{"value":"12"}},[_vm._v("12")]),_vm._v(" "),_c('option',{attrs:{"value":"24"}},[_vm._v("24")]),_vm._v(" "),_c('option',{attrs:{"value":"36"}},[_vm._v("36")])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-item toolbox-layout",class:{ 'mr-lg-0': _vm.$route.path.includes('right-sidebar')}},[_c('nuxt-link',{staticClass:"d-icon-mode-list btn-layout",class:{active: _vm.$route.query.type === 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'list'})},"title":"select list type"}}),_vm._v(" "),_c('nuxt-link',{staticClass:"d-icon-mode-grid btn-layout",class:{active: _vm.$route.query.type !== 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'grid'})},"title":"select grid type"}})],1),_vm._v(" "),(_vm.$route.path.includes('right-sidebar'))?_c('a',{staticClass:"toolbox-item right-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.showSidebar('right-sidebar-active')}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-left"})]):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxOne.vue?vue&type=template&id=6aa2adb9&

// EXTERNAL MODULE: ./components/elements/StickyWrapper.vue + 4 modules
var StickyWrapper = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ToolboxOnevue_type_script_lang_js_ = ({
  components: {
    StickyWrapper: StickyWrapper["a" /* default */]
  },
  data: function () {
    return {
      sortBy: this.$route.query.sort_by ? this.$route.query.sort_by : 'default',
      perPage: this.$route.query.per_page ? this.$route.query.per_page : 12
    };
  },
  watch: {
    $route: function () {
      this.sortBy = this.$route.query.sort_by ? this.$route.query.sort_by : 'default';
      this.perPage = this.$route.query.per_page ? this.$route.query.per_page : 12;
    }
  },
  methods: {
    setSortby: function () {
      this.$router.push({
        query: { ...this.$route.query,
          sort_by: this.sortBy
        }
      });
    },
    setPerPage: function () {
      this.$router.push({
        query: { ...this.$route.query,
          per_page: this.perPage,
          page: 1
        }
      });
    },
    showSidebar: function (string = 'sidebar-active') {
      document.querySelector('body').classList.add(string);
    }
  }
});
// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var toolbox_ToolboxOnevue_type_script_lang_js_ = (ToolboxOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbox_ToolboxOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62bbd324"
  
)

/* harmony default export */ var ToolboxOne = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/ShopBanner.vue?vue&type=template&id=388a6423&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header",style:({ 'background-image': 'url(./images/page-header-back.jpg)', 'background-color': '#3C63A4'})},[_vm._ssrNode("<h1 class=\"page-title\">Riode Shop</h1> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","title":"link to home"}},[_c('i',{staticClass:"d-icon-home"})])],1),_vm._ssrNode(" <li class=\"delimiter\">/</li> <li>Riode Shop</li>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/ShopBanner.vue?vue&type=template&id=388a6423&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/shop/ShopBanner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f28f4e98"
  
)

/* harmony default export */ var ShopBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/product-list/ProductListOne.vue?vue&type=template&id=6b71cd5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.type === 'default')?_c('toolbox-one'):(_vm.type === 'horizontal')?_c('toolbox-two'):_c('toolbox-three'),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,((_vm.$route.query.type === 'list' ? 'product-lists': 'row ' + _vm.gridClasses[_vm.itemsPerRow]) + " product-wrapper")))+">","</div>",[(_vm.products)?_vm._l((_vm.products),function(item){return _vm._ssrNode("<div class=\"product-wrap\">","</div>",[(_vm.$route.query.type !== 'list')?_c('product-two',{attrs:{"product":item}}):_c('product-eight',{attrs:{"product":item}})],1)}):_vm._ssrNode((_vm._ssrList((new Array(_vm.perPage).fill(1)),function(item,index){return ("<div class=\"product-wrap\">"+((_vm.$route.query.type !== 'list')?("<div class=\"product-loading-overlay\"></div>"):("<div class=\"skel-pro skel-pro-list mb-4\"></div>"))+"</div>")})))],2),_vm._ssrNode(" "),(_vm.products !== null)?[(_vm.total > 0)?_vm._ssrNode("<nav class=\"toolbox toolbox-pagination\">","</nav>",[_vm._ssrNode("<p class=\"show-info\">Showing <span>"+_vm._ssrEscape(_vm._s(Math.min(_vm.perPage, _vm.products.length))+" of "+_vm._s(_vm.total))+"</span> Products</p> "),(_vm.totalPage)?_c('pagination',{attrs:{"total-page":_vm.totalPage}}):_vm._e()],2):_vm._ssrNode(("<p>No products were found matching your selection.</p>"))]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListOne.vue?vue&type=template&id=6b71cd5a&

// EXTERNAL MODULE: ./components/elements/product/ProductTwo.vue + 4 modules
var ProductTwo = __webpack_require__(73);

// EXTERNAL MODULE: ./components/elements/product/ProductEight.vue + 4 modules
var ProductEight = __webpack_require__(84);

// EXTERNAL MODULE: ./components/elements/Pagination.vue + 4 modules
var Pagination = __webpack_require__(76);

// EXTERNAL MODULE: ./components/partials/shop/toolbox/ToolboxOne.vue + 4 modules
var ToolboxOne = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxTwo.vue?vue&type=template&id=7c227997&
var ToolboxTwovue_type_template_id_7c227997_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sticky-wrapper',{attrs:{"breakpoint":992,"type":"mobile","stickyClass":"sticky-toolbox","direction":"up","offsetTop":450}},[_c('nav',{staticClass:"toolbox toolbox-horizontal sticky-toolbox sticky-content fix-top"},[_c('aside',{staticClass:"sidebar sidebar-fixed shop-sidebar"},[_c('div',{staticClass:"sidebar-overlay",on:{"click":_vm.hideSidebar}}),_vm._v(" "),_c('a',{staticClass:"sidebar-close",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.hideSidebar.apply(null, arguments)}}},[_c('i',{staticClass:"d-icon-times"})]),_vm._v(" "),_c('div',{staticClass:"sidebar-content toolbox-left"},[_c('div',{staticClass:"toolbox-item select-menu"},[_c('a',{staticClass:"select-menu-toggle",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.openMenu($event)}}},[_vm._v("Select Size")]),_vm._v(" "),_c('ul',{staticClass:"filter-items"},_vm._l((_vm.shopSizes),function(item,index){return _c('li',{key:'size-filter' + index,class:{active: _vm.isActivedSize(item)},on:{"click":function($event){return _vm.closeMenu($event)}}},[_c('nuxt-link',{attrs:{"to":_vm.sizeFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"toolbox-item select-menu"},[_c('a',{staticClass:"select-menu-toggle",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.openMenu($event)}}},[_vm._v("Select Color")]),_vm._v(" "),_c('ul',{staticClass:"filter-items"},_vm._l((_vm.shopColors),function(item,index){return _c('li',{key:'color-filter' + index,class:{active: _vm.isActivedColor(item)},on:{"click":function($event){return _vm.closeMenu($event)}}},[_c('nuxt-link',{attrs:{"to":_vm.colorFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"toolbox-item select-menu"},[_c('a',{staticClass:"select-menu-toggle",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.openMenu($event)}}},[_vm._v("Select Price")]),_vm._v(" "),_c('ul',{staticClass:"filter-items filter-price"},_vm._l((_vm.shopPrices),function(item,index){return _c('li',{key:'price-filter-' + index,class:{active: _vm.isActivePrice(item)},on:{"click":function($event){return _vm.closeMenu($event)}}},[_c('nuxt-link',{attrs:{"to":_vm.priceFilterRoute(item)}},[_vm._v(_vm._s(item.text))])],1)}),0)])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-left"},[(_vm.$route.path.includes('off-canvas'))?_c('a',{key:"offCanvasFilter",staticClass:"toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.showSidebar.apply(null, arguments)}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-right"})]):_c('a',{staticClass:"toolbox-item left-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.showSidebar.apply(null, arguments)}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-right"})]),_vm._v(" "),_c('div',{staticClass:"toolbox-item toolbox-sort select-box text-dark"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sortBy),expression:"sortBy"}],staticClass:"form-control",attrs:{"name":"orderby","aria-label":"select sort"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sortBy=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.setSortby]}},[_c('option',{attrs:{"value":"default"}},[_vm._v("Default")]),_vm._v(" "),_c('option',{attrs:{"value":"popularity"}},[_vm._v("Most Popular")]),_vm._v(" "),_c('option',{attrs:{"value":"rating"}},[_vm._v("Average rating")]),_vm._v(" "),_c('option',{attrs:{"value":"date"}},[_vm._v("Latest")]),_vm._v(" "),_c('option',{attrs:{"value":"price-low"}},[_vm._v("Sort forward price low")]),_vm._v(" "),_c('option',{attrs:{"value":"price-high"}},[_vm._v("Sort forward price high")]),_vm._v(" "),_c('option',{attrs:{"value":"default"}},[_vm._v("Clear custom sort")])])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-right"},[_c('div',{staticClass:"toolbox-item toolbox-show select-box text-dark"},[_c('label',[_vm._v("Show :")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.perPage),expression:"perPage"}],staticClass:"form-control",attrs:{"name":"count","aria-label":"select showing count"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.perPage=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.setPerPage]}},[_c('option',{attrs:{"value":"12"}},[_vm._v("12")]),_vm._v(" "),_c('option',{attrs:{"value":"24"}},[_vm._v("24")]),_vm._v(" "),_c('option',{attrs:{"value":"36"}},[_vm._v("36")])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-item toolbox-layout"},[_c('nuxt-link',{staticClass:"d-icon-mode-list btn-layout",class:{active: _vm.$route.query.type === 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'list'})},"title":"select list type"}}),_vm._v(" "),_c('nuxt-link',{staticClass:"d-icon-mode-grid btn-layout",class:{active: _vm.$route.query.type !== 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'grid'})},"title":"select grid type"}})],1)])]),_vm._v(" "),_c('vue-slide-toggle',{attrs:{"open":_vm.selectedColors.length > 0 || _vm.selectedSizes.length > 0 || _vm.selectedPrice !== null}},[_c('div',{staticClass:"select-items"},[_vm._l((_vm.selectedSizes),function(item){return _c('nuxt-link',{key:("size-value-" + item),staticClass:"select-item",attrs:{"to":_vm.removeSizeFilter(item)}},[_vm._v(_vm._s(item)),_c('i',{staticClass:"d-icon-times"})])}),_vm._v(" "),_vm._l((_vm.selectedColors),function(item){return _c('nuxt-link',{key:("color-value-" + item),staticClass:"select-item",attrs:{"to":_vm.removeColorFilter(item)}},[_vm._v(_vm._s(item)),_c('i',{staticClass:"d-icon-times"})])}),_vm._v(" "),(_vm.selectedPrice !== null)?_c('nuxt-link',{staticClass:"select-item",attrs:{"to":{query: Object.assign({}, _vm.$route.query, {min_price: null, max_price: null})}}},[_vm._v(_vm._s(_vm.selectedPrice)),_c('i',{staticClass:"d-icon-times"})]):_vm._e(),_vm._v(" "),_c('nuxt-link',{staticClass:"filter-clean text-primary",attrs:{"to":{path: _vm.$route.path, query: {type: _vm.$route.query.type}}}},[_vm._v("Clean All")])],2)])],1)}
var ToolboxTwovue_type_template_id_7c227997_staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxTwo.vue?vue&type=template&id=7c227997&

// EXTERNAL MODULE: external "vue-slide-toggle"
var external_vue_slide_toggle_ = __webpack_require__(15);

// EXTERNAL MODULE: ./components/elements/StickyWrapper.vue + 4 modules
var StickyWrapper = __webpack_require__(10);

// EXTERNAL MODULE: ./utils/data/shop.js
var shop = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ToolboxTwovue_type_script_lang_js_ = ({
  components: {
    VueSlideToggle: external_vue_slide_toggle_["VueSlideToggle"],
    StickyWrapper: StickyWrapper["a" /* default */]
  },
  data: function () {
    return {
      sortBy: this.$route.query.sort_by ? this.$route.query.sort_by : 'default',
      perPage: this.$route.query.per_page ? this.$route.query.per_page : 12,
      shopColors: shop["c" /* shopColors */],
      shopSizes: shop["e" /* shopSizes */],
      shopPrices: shop["d" /* shopPrices */],
      selectedColors: [],
      selectedSizes: [],
      selectedPrice: null
    };
  },
  watch: {
    $route: function () {
      this.getItems();
      this.sortBy = this.$route.query.sort_by ? this.$route.query.sort_by : 'default';
      this.perPage = this.$route.query.per_page ? this.$route.query.per_page : 12;
    }
  },
  mounted: function () {
    this.getItems();
    document.addEventListener('click', this.removeOpenState);
  },
  methods: {
    getItems: function () {
      let sizes = this.$route.query.sizes ? this.$route.query.sizes.split(',') : [];
      this.selectedSizes = [];
      sizes.forEach(item => {
        this.selectedSizes.push(this.getSizeName(item));
      });
      let colors = this.$route.query.colors ? this.$route.query.colors.split(',') : [];
      this.selectedColors = [];
      colors.forEach(item => {
        this.selectedColors.push(this.getColorName(item));
      });
      let index = this.shopPrices.findIndex(item => item.value[0] === parseInt(this.$route.query.min_price) && item.value[1] === parseInt(this.$route.query.max_price));
      this.selectedPrice = index > -1 ? this.shopPrices[index].text : null;
    },
    setSortby: function () {
      this.$router.push({
        query: { ...this.$route.query,
          sort_by: this.sortBy
        }
      });
    },
    setPerPage: function () {
      this.$router.push({
        query: { ...this.$route.query,
          per_page: this.perPage,
          page: 1
        }
      });
    },
    showSidebar: function () {
      document.querySelector('body').classList.add('sidebar-active');
    },
    hideSidebar: function () {
      document.querySelector('body').classList.remove('sidebar-active');
    },
    openMenu: function (e) {
      e.stopPropagation();
      let isOpened = e.currentTarget.closest('.select-menu').classList.contains('opened');
      this.removeOpenState();
      e.currentTarget.closest('.select-menu').classList.toggle('opened', !isOpened);
    },
    closeMenu: function (e) {
      e.currentTarget.closest('.select-menu').classList.remove('opened');
    },
    sizeFilterRoute: function (item) {
      let sizeSlugs = this.$route.query.sizes ? this.$route.query.sizes.split(',') : [];
      let index = sizeSlugs.indexOf(item.slug);

      if (index > -1) {
        sizeSlugs.splice(index, 1);
      } else {
        sizeSlugs.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          sizes: sizeSlugs.toString(),
          page: 1
        }
      };
    },
    colorFilterRoute: function (item) {
      let colorSlugs = this.$route.query.colors ? this.$route.query.colors.split(',') : [];
      let index = colorSlugs.indexOf(item.slug);

      if (index > -1) {
        colorSlugs.splice(index, 1);
      } else {
        colorSlugs.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          colors: colorSlugs.toString()
        }
      };
    },
    priceFilterRoute: function (item) {
      if (item.value[0] === parseInt(this.$route.query.min_price) && item.value[1] === parseInt(this.$route.query.max_price)) return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          min_price: null,
          max_price: null
        }
      };
      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          min_price: item.value[0],
          max_price: item.value[1]
        }
      };
      return '/';
    },
    isActivedColor: function (item) {
      return this.$route.query.colors && this.$route.query.colors.split(',').includes(item.slug);
    },
    isActivedSize: function (item) {
      return this.$route.query.sizes && this.$route.query.sizes.split(',').includes(item.slug);
    },
    isActivePrice: function (item) {
      return item.value[0] === parseInt(this.$route.query.min_price) && item.value[1] === parseInt(this.$route.query.max_price);
    },
    getSizeName: function (slug) {
      let index = this.shopSizes.findIndex(item => item.slug === slug);
      return this.shopSizes[index].name;
    },
    getColorName: function (slug) {
      let index = this.shopColors.findIndex(item => item.slug === slug);
      return this.shopColors[index].name;
    },
    getSizeSlug: function (name) {
      let index = this.shopSizes.findIndex(item => item.name === name);
      return this.shopSizes[index].slug;
    },
    getColorSlug: function (name) {
      let index = this.shopColors.findIndex(item => item.name === name);
      return this.shopColors[index].slug;
    },
    removeSizeFilter: function (item) {
      let sizeSlugs = this.$route.query.sizes ? this.$route.query.sizes.split(',') : [];
      let index = sizeSlugs.indexOf(this.getSizeSlug(item));
      sizeSlugs.splice(index, 1);
      return {
        query: { ...this.$route.query,
          sizes: sizeSlugs.toString(),
          page: 1
        }
      };
    },
    removeColorFilter: function (item) {
      let colorSlugs = this.$route.query.colors ? this.$route.query.colors.split(',') : [];
      let index = colorSlugs.indexOf(this.getColorSlug(item));
      colorSlugs.splice(index, 1);
      return {
        query: { ...this.$route.query,
          colors: colorSlugs.toString(),
          page: 1
        }
      };
    },
    removeOpenState: function () {
      document.querySelector('.select-menu.opened') && document.querySelector('.select-menu.opened').classList.remove('opened');
    }
  },
  destroyed: function () {
    document.removeEventListener('click', this.removeOpenState);
  }
});
// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var toolbox_ToolboxTwovue_type_script_lang_js_ = (ToolboxTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbox_ToolboxTwovue_type_script_lang_js_,
  ToolboxTwovue_type_template_id_7c227997_render,
  ToolboxTwovue_type_template_id_7c227997_staticRenderFns,
  false,
  null,
  null,
  "31ec7158"
  
)

/* harmony default export */ var ToolboxTwo = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxThree.vue?vue&type=template&id=0a67ce75&
var ToolboxThreevue_type_template_id_0a67ce75_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sticky-wrapper',{attrs:{"breakpoint":992,"type":"mobile","stickyClass":"sticky-toolbox","direction":"up","offsetTop":450}},[_c('div',{staticClass:"toolbox-wrap"},[_c('aside',{staticClass:"sidebar sidebar-fixed shop-sidebar"},[_c('div',{staticClass:"sidebar-overlay",on:{"click":_vm.hideSidebar}}),_vm._v(" "),_c('a',{staticClass:"sidebar-close",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.hideSidebar.apply(null, arguments)}}},[_c('i',{staticClass:"d-icon-times"})]),_vm._v(" "),_c('vue-slide-toggle',{attrs:{"open":_vm.showFilter}},[_c('div',{staticClass:"sidebar-content"},[_c('div',{staticClass:"mb-0 mb-lg-4"},[_c('div',{staticClass:"filter-actions"},[_c('a',{staticClass:"sidebar-toggle-btn toggle-remain btn btn-sm btn-outline btn-rounded btn-primary",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.hideSidebar.apply(null, arguments)}}},[_vm._v("Filter"),_c('i',{staticClass:"d-icon-arrow-left"})]),_vm._v(" "),_c('nuxt-link',{staticClass:"filter-clean",attrs:{"to":{path: _vm.$route.path, query: _vm.$route.query.type ? {type: _vm.$route.query.type } : null}}},[_vm._v("Clean All")])],1),_vm._v(" "),_c('div',{staticClass:"row cols-lg-4"},[_c('div',{staticClass:"widget"},[_c('h3',{staticClass:"widget-title"},[_vm._v("Size")]),_vm._v(" "),_c('ul',{staticClass:"widget-body filter-items"},_vm._l((_vm.shopSizes),function(item,index){return _c('li',{key:'size-filter' + index,class:{active: _vm.isActivedSize(item)}},[_c('nuxt-link',{attrs:{"to":_vm.sizeFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"widget"},[_c('h3',{staticClass:"widget-title"},[_vm._v("Color")]),_vm._v(" "),_c('ul',{staticClass:"widget-body filter-items"},_vm._l((_vm.shopColors),function(item,index){return _c('li',{key:'color-filter' + index,class:{active: _vm.isActivedColor(item)}},[_c('nuxt-link',{attrs:{"to":_vm.colorFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"widget price-with-count"},[_c('h3',{staticClass:"widget-title"},[_vm._v("Price")]),_vm._v(" "),_c('ul',{staticClass:"widget-body filter-items filter-price"},_vm._l((_vm.navigationPrices),function(item,index){return _c('li',{key:'price-filter-' + index,class:{active: _vm.isActivePrice(item)}},[_c('nuxt-link',{attrs:{"to":_vm.priceFilterRoute(item)}},[_vm._v(_vm._s(item.text))])],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"widget"},[_c('h3',{staticClass:"widget-title"},[_vm._v("Tags")]),_vm._v(" "),_c('div',{staticClass:"widget-body pt-2"},_vm._l((_vm.shopTags),function(item){return _c('nuxt-link',{key:("shop-tag-" + (item.slug)),staticClass:"tag",class:{active: _vm.$route.query.tag === item.slug},attrs:{"to":_vm.tagFilterRoute(item)}},[_vm._v(_vm._s(item.name))])}),1)])])])])])],1),_vm._v(" "),_c('div',{staticClass:"toolbox sticky-toolbox sticky-content fix-top"},[_c('div',{staticClass:"toolbox-left"},[_c('a',{staticClass:"toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-left font-primary",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.preventDefault();return _vm.expandFilter.apply(null, arguments)}}},[_c('i',{staticClass:"d-icon-filter-2"}),_vm._v("Filter")])]),_vm._v(" "),_c('div',{staticClass:"toolbox-right",class:{hide: _vm.showFilter}},[_c('div',{staticClass:"toolbox-item toolbox-sort select-box text-dark"},[_c('label',[_vm._v("Sort By :")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.sortBy),expression:"sortBy"}],staticClass:"form-control",attrs:{"name":"orderby","aria-label":"select sort"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.sortBy=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.setSortby]}},[_c('option',{attrs:{"value":"default"}},[_vm._v("Default")]),_vm._v(" "),_c('option',{attrs:{"value":"popularity"}},[_vm._v("Most Popular")]),_vm._v(" "),_c('option',{attrs:{"value":"rating"}},[_vm._v("Average rating")]),_vm._v(" "),_c('option',{attrs:{"value":"date"}},[_vm._v("Latest")]),_vm._v(" "),_c('option',{attrs:{"value":"price-low"}},[_vm._v("Sort forward price low")]),_vm._v(" "),_c('option',{attrs:{"value":"price-high"}},[_vm._v("Sort forward price high")]),_vm._v(" "),_c('option',{attrs:{"value":"default"}},[_vm._v("Clear custom sort")])])]),_vm._v(" "),_c('div',{staticClass:"toolbox-item toolbox-layout"},[_c('nuxt-link',{staticClass:"d-icon-mode-list btn-layout",class:{active: _vm.$route.query.type === 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'list'})},"title":"select list type"}}),_vm._v(" "),_c('nuxt-link',{staticClass:"d-icon-mode-grid btn-layout",class:{active: _vm.$route.query.type !== 'list'},attrs:{"to":{query: Object.assign({}, _vm.$route.query, {type: 'grid'})},"title":"select grid type"}})],1)])])])])}
var ToolboxThreevue_type_template_id_0a67ce75_staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxThree.vue?vue&type=template&id=0a67ce75&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/toolbox/ToolboxThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ToolboxThreevue_type_script_lang_js_ = ({
  components: {
    VueSlideToggle: external_vue_slide_toggle_["VueSlideToggle"],
    StickyWrapper: StickyWrapper["a" /* default */]
  },
  data: function () {
    return {
      sortBy: this.$route.query.sort_by ? this.$route.query.sort_by : 'default',
      shopColors: shop["c" /* shopColors */],
      shopSizes: shop["e" /* shopSizes */],
      navigationPrices: shop["a" /* navigationPrices */],
      showFilter: false,
      shopTags: shop["f" /* shopTags */]
    };
  },
  watch: {
    $route: function () {
      this.sortBy = this.$route.query.sort_by ? this.$route.query.sort_by : 'default';
    }
  },
  methods: {
    setSortby: function () {
      this.$router.push({
        query: { ...this.$route.query,
          sort_by: this.sortBy
        }
      });
    },
    showSidebar: function () {
      document.querySelector('body').classList.add('sidebar-active');
    },
    hideSidebar: function () {
      document.querySelector('body').classList.remove('sidebar-active');
    },
    sizeFilterRoute: function (item) {
      let selectedSizes = this.$route.query.sizes ? this.$route.query.sizes.split(',') : [];
      let index = selectedSizes.indexOf(item.slug);

      if (index > -1) {
        selectedSizes.splice(index, 1);
      } else {
        selectedSizes.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          sizes: selectedSizes.toString(),
          page: 1
        }
      };
    },
    colorFilterRoute: function (item) {
      let selectedColors = this.$route.query.colors ? this.$route.query.colors.split(',') : [];
      let index = selectedColors.indexOf(item.slug);

      if (index > -1) {
        selectedColors.splice(index, 1);
      } else {
        selectedColors.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          colors: selectedColors.toString()
        }
      };
    },
    priceFilterRoute: function (item) {
      if (item.min === parseInt(this.$route.query.min_price) && item.max === parseInt(this.$route.query.max_price)) return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          min_price: null,
          max_price: null
        }
      };
      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          min_price: item.value[0],
          max_price: item.value[1]
        }
      };
    },
    tagFilterRoute: function (item) {
      if (this.$route.query.tag === item.slug) return {
        query: { ...this.$route.query,
          page: 1,
          tag: null
        }
      };
      return {
        query: { ...this.$route.query,
          page: 1,
          tag: item.slug
        }
      };
    },
    isActivedColor: function (item) {
      return this.$route.query.colors && this.$route.query.colors.split(',').includes(item.slug);
    },
    isActivedSize: function (item) {
      return this.$route.query.sizes && this.$route.query.sizes.split(',').includes(item.slug);
    },
    isActivePrice: function (item) {
      if (item.text === 'All' && !this.$route.query.min_price && !this.$route.query.max_price) return true;
      return item.value[0] === parseInt(this.$route.query.min_price) && item.value[1] === parseInt(this.$route.query.max_price);
    },
    closeFilter: function (e) {
      this.showFilter = !this.showFilter;
    },
    expandFilter: function () {
      if (window.innerWidth >= 992) this.showFilter = !this.showFilter;else this.showSidebar();
    }
  }
});
// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var toolbox_ToolboxThreevue_type_script_lang_js_ = (ToolboxThreevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/shop/toolbox/ToolboxThree.vue





/* normalize component */

var ToolboxThree_component = Object(componentNormalizer["a" /* default */])(
  toolbox_ToolboxThreevue_type_script_lang_js_,
  ToolboxThreevue_type_template_id_0a67ce75_render,
  ToolboxThreevue_type_template_id_0a67ce75_staticRenderFns,
  false,
  null,
  null,
  "310155a6"
  
)

/* harmony default export */ var ToolboxThree = (ToolboxThree_component.exports);
// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/product-list/ProductListOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var ProductListOnevue_type_script_lang_js_ = ({
  components: {
    ToolboxOne: ToolboxOne["a" /* default */],
    ToolboxTwo: ToolboxTwo,
    ToolboxThree: ToolboxThree,
    ProductTwo: ProductTwo["a" /* default */],
    ProductEight: ProductEight["a" /* default */],
    Pagination: Pagination["a" /* default */]
  },
  props: {
    itemsPerRow: {
      type: Number,
      default: 3
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data: function () {
    return {
      products: null,
      perPage: this.$route.query.per_page ? this.$route.query.per_page : 12,
      page: 1,
      totalPage: 1,
      total: 0,
      gridClasses: {
        3: "cols-2 cols-sm-3",
        4: "cols-2 cols-sm-3 cols-md-4",
        5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
        6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
        7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
        8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
      },
      isFirst: true
    };
  },
  watch: {
    $route: function () {
      this.perPage = this.$route.query.per_page ? parseInt(this.$route.query.per_page) : 12;

      if (document.querySelector('.shop-sidebar.closed') && this.$route.query.type !== 'list') {
        this.$nextTick(() => {
          document.querySelector('.product-wrapper').classList.add('cols-md-4');
        });
      }

      this.getProducts();
    }
  },
  mounted: function () {
    this.getProducts();
  },
  methods: {
    getProducts: function () {
      if (!this.isFirst) Object(utils["d" /* scrollHandler */])();
      this.isFirst = false;
      this.products = null;
      this.page = this.$route.query.page ? this.$route.query.page : 1;
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/shop`, {
        params: { ...this.$route.query,
          is_product: true,
          is_post: false,
          from: this.perPage * (this.page - 1),
          to: this.perPage * this.page,
          limit: this.perPage
        }
      }).then(response => {
        this.products = response.data.data;
        this.total = response.data.total;
        this.totalPage = parseInt(this.total / this.perPage) + (this.total % this.perPage ? 1 : 0);
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    }
  }
});
// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_list_ProductListOnevue_type_script_lang_js_ = (ProductListOnevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListOne.vue





/* normalize component */

var ProductListOne_component = Object(componentNormalizer["a" /* default */])(
  product_list_ProductListOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ed26657"
  
)

/* harmony default export */ var ProductListOne = __webpack_exports__["a"] = (ProductListOne_component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/sidebar/SidebarFilterOne.vue?vue&type=template&id=7ad29aa0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{class:("col-lg-3 sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper " + _vm.sidebarClass)},[_vm._ssrNode("<div class=\"sidebar-overlay\"></div> <a href=\"javascript:;\" class=\"sidebar-close\"><i class=\"d-icon-times\"></i></a> "),(!_vm.loaded)?_vm._ssrNode("<div class=\"widget-2 mt-5 d-lg-show\">","</div>"):_c('div',{directives:[{name:"sticky",rawName:"v-sticky",value:(_vm.isSticky),expression:"isSticky"}],ref:"stickySidebar",staticClass:"sidebar-content",attrs:{"sticky-offset":"{top: 0}"}},[(_vm.showFilterButton)?_vm._ssrNode("<div class=\"filter-actions mb-4\">","</div>",[_vm._ssrNode("<a href=\"javascript:;\" class=\"sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded\">Filter<i"+(_vm._ssrClass(null,_vm.sidebarClass === 'right-sidebar'? 'd-icon-arrow-right': 'd-icon-arrow-left'))+"></i></a> "),_c('nuxt-link',{staticClass:"filter-clean",attrs:{"to":{path: _vm.$route.path, query: _vm.$route.query.type ? {type: _vm.$route.query.type } : null}}},[_vm._v("Clean All")])],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,("widget widget-collapsible " + (!_vm.isSticky && !_vm.showFilterButton ? 'border-no' : ''))))+">","</div>",[_vm._ssrNode("<h3"+(_vm._ssrClass("widget-title",{'collapsed': !_vm.openState[0]}))+">\n\t\t\t\tAll Categories<span class=\"toggle-btn\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.openState[0]}},[_c('ul',{staticClass:"widget-body filter-items search-ul"},_vm._l((_vm.categories),function(item,index){return _c('li',{key:("sidebar-" + (item.slug)),class:{'with-ul': item.children, 'show': !_vm.openState[index + 20] && item.children}},[_c('nuxt-link',{class:{active: item.slug === _vm.$route.query.category},attrs:{"to":{query: {category: item.slug, type: _vm.$route.query.type}}}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.name)+" ("+_vm._s(item. count)+")\n\t\t\t\t\t\t\t"),(item.children)?_c('i',{staticClass:"fas fa-chevron-down",on:{"click":function($event){$event.preventDefault();return _vm.toggleState(index + 20)}}}):_vm._e()]),_vm._v(" "),(item.children)?_c('vue-slide-toggle',{attrs:{"open":!_vm.openState[index + 20]}},[_c('ul',_vm._l((item.children[0]),function(subItem){return _c('li',{key:("sidebar-sub-" + (subItem.slug))},[_c('nuxt-link',{attrs:{"to":{query: {category: subItem.slug, type: _vm.$route.query.type}}}},[_vm._v(_vm._s(subItem.name)+" ("+_vm._s(subItem. count)+")")])],1)}),0)]):_vm._e()],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<h3"+(_vm._ssrClass("widget-title",{'collapsed': !_vm.openState[1]}))+">Filter by Price<span class=\"toggle-btn\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.openState[1]}},[_c('div',{staticClass:"widget-body mt-3"},[_c('form',{attrs:{"action":"#"}},[_c('div',{staticClass:"filter-price-slider"},[(_vm.priceReset)?_c('vue-nouislider',{attrs:{"config":_vm.priceSettings,"values":_vm.prices,"id":"price-slider"}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"filter-actions price-range-slider"},[_c('div',{staticClass:"filter-price-text mb-4"},[_vm._v("Price: $"+_vm._s(_vm.prices[0])+" - $"+_vm._s(_vm.prices[1])+"\n\t\t\t\t\t\t\t\t"),_c('span',{staticClass:"filter-price-range"})]),_vm._v(" "),_c('nuxt-link',{staticClass:"btn btn-dark btn-filter btn-rounded",attrs:{"type":"submit","to":{query: Object.assign({}, _vm.$route.query, {max_price: _vm.prices[1], min_price: _vm.prices[0], page: 1})}}},[_vm._v("Filter")])],1)])])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<h3"+(_vm._ssrClass("widget-title",{'collapsed': !_vm.openState[2]}))+">Size<span class=\"toggle-btn\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.openState[2]}},[_c('ul',{staticClass:"widget-body filter-items"},_vm._l((_vm.shopSizes),function(item,index){return _c('li',{key:'size-filter' + index,class:{active: _vm.isActivedSize(item)}},[_c('nuxt-link',{attrs:{"to":_vm.sizeFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<h3"+(_vm._ssrClass("widget-title",{'collapsed': !_vm.openState[3]}))+">Color<span class=\"toggle-btn\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.openState[3]}},[_c('ul',{staticClass:"widget-body filter-items"},_vm._l((_vm.shopColors),function(item,index){return _c('li',{key:'color-filter' + index,class:{active: _vm.isActivedColor(item)}},[_c('nuxt-link',{attrs:{"to":_vm.colorFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"widget widget-collapsible\">","</div>",[_vm._ssrNode("<h3"+(_vm._ssrClass("widget-title",{'collapsed': !_vm.openState[4]}))+">Brand<span class=\"toggle-btn\"></span></h3> "),_c('vue-slide-toggle',{attrs:{"open":_vm.openState[4]}},[_c('ul',{staticClass:"widget-body filter-items"},_vm._l((_vm.shopBrands),function(item,index){return _c('li',{key:'brand-filter' + index,class:{active: _vm.isActivedBrand(item)}},[_c('nuxt-link',{attrs:{"to":_vm.brandFilterRoute(item)}},[_vm._v(_vm._s(item.name))])],1)}),0)])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/sidebar/SidebarFilterOne.vue?vue&type=template&id=7ad29aa0&

// EXTERNAL MODULE: external "vue-slide-toggle"
var external_vue_slide_toggle_ = __webpack_require__(15);

// EXTERNAL MODULE: external "vue-tree-list"
var external_vue_tree_list_ = __webpack_require__(68);

// EXTERNAL MODULE: external "vue-sticky-directive"
var external_vue_sticky_directive_ = __webpack_require__(65);
var external_vue_sticky_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_sticky_directive_);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(16);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/data/shop.js
var shop = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/sidebar/SidebarFilterOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SidebarFilterOnevue_type_script_lang_js_ = ({
  components: {
    VueSlideToggle: external_vue_slide_toggle_["VueSlideToggle"],
    VueTreeList: external_vue_tree_list_["VueTreeList"]
  },
  directives: {
    Sticky: external_vue_sticky_directive_default.a
  },
  props: {
    sidebarClass: {
      type: String,
      default: 'sidebar'
    },
    showFilterButton: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      categories: [],
      featured: [],
      openState: new Array(100).fill(true),
      prices: [0, 1000],
      priceSettings: {
        connect: true,
        step: 50,
        margin: 100,
        range: {
          min: 0,
          max: 1000
        },
        format: {
          from: Number,
          to: Number
        }
      },
      shopColors: shop["c" /* shopColors */],
      shopSizes: shop["e" /* shopSizes */],
      shopBrands: shop["b" /* shopBrands */],
      priceReset: true,
      loaded: false,
      isSticky: true
    };
  },
  watch: {
    $route: function () {
      console.log("this path is", this.$route);
      Object(utils["d" /* scrollHandler */])();
      this.prices[0] = this.$route.query.min_price ? parseInt(this.$route.query.min_price) : 0;
      this.prices[1] = this.$route.query.max_price ? parseInt(this.$route.query.max_price) : 1000;
      this.priceReset = false;
      this.$nextTick(function () {
        this.priceReset = true;
      });
    }
  },
  created: function () {
    console.log("this path is", this.$route);
    this.prices[0] = this.$route.query.min_price ? parseInt(this.$route.query.min_price) : 0;
    this.prices[1] = this.$route.query.max_price ? parseInt(this.$route.query.max_price) : 1000;
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeHandler);
  },
  mounted: function () {
    api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/shop/sidebar`).then(response => {
      this.categories = response.data.categories;
      this.featured = response.data.featured;
      this.loaded = true;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
  },
  methods: {
    toggleSidebar: function (e) {
      if (window.innerWidth > 991) {
        e.currentTarget.closest('.shop-sidebar').classList.toggle('closed');
        if (e.currentTarget.closest('.shop-sidebar').classList.contains('closed') && this.$route.query.type !== 'list') e.currentTarget.closest('.page-content').querySelector('.product-wrapper').classList.add('cols-md-4');else e.currentTarget.closest('.page-content').querySelector('.product-wrapper').classList.remove('cols-md-4');
      } else {
        this.hideSidebar();
      }
    },
    toggleState: function (index) {
      let temp = [...this.openState];
      temp[index] = !temp[index];
      this.openState = temp;
      window.width > 991 && this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.stickySidebar['@@vue-sticky-directive'].update();
        }, 140);
      });
    },
    sizeFilterRoute: function (item) {
      let selectedSizes = this.$route.query.sizes ? this.$route.query.sizes.split(',') : [];
      let index = selectedSizes.indexOf(item.slug);

      if (index > -1) {
        selectedSizes.splice(index, 1);
      } else {
        selectedSizes.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          sizes: selectedSizes.toString(),
          page: 1
        }
      };
    },
    colorFilterRoute: function (item) {
      let selectedColors = this.$route.query.colors ? this.$route.query.colors.split(',') : [];
      let index = selectedColors.indexOf(item.slug);

      if (index > -1) {
        selectedColors.splice(index, 1);
      } else {
        selectedColors.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          colors: selectedColors.toString()
        }
      };
    },
    brandFilterRoute: function (item) {
      let selectedBrands = this.$route.query.brands ? this.$route.query.brands.split(',') : [];
      let index = selectedBrands.indexOf(item.slug);

      if (index > -1) {
        selectedBrands.splice(index, 1);
      } else {
        selectedBrands.push(item.slug);
      }

      return {
        path: this.$route.path,
        query: { ...this.$route.query,
          page: 1,
          brands: selectedBrands.toString()
        }
      };
    },
    isActivedColor: function (item) {
      return this.$route.query.colors && this.$route.query.colors.split(',').includes(item.slug);
    },
    isActivedSize: function (item) {
      return this.$route.query.sizes && this.$route.query.sizes.split(',').includes(item.slug);
    },
    isActivedBrand: function (item) {
      return this.$route.query.brands && this.$route.query.brands.split(',').includes(item.slug);
    },
    resizeHandler: function () {
      this.isSticky = window.innerWidth > 991 ? true : false;
      window.innerWidth > 991 && this.hideSidebar();
    },
    hideSidebar: function () {
      if (this.sidebarClass === 'right-sidebar') {
        document.querySelector('body').classList.remove('right-sidebar-active');
      } else {
        document.querySelector('body').classList.remove('sidebar-active');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/partials/shop/sidebar/SidebarFilterOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_SidebarFilterOnevue_type_script_lang_js_ = (SidebarFilterOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/shop/sidebar/SidebarFilterOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sidebar_SidebarFilterOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05d729c4"
  
)

/* harmony default export */ var SidebarFilterOne = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=right-sidebar.js.map