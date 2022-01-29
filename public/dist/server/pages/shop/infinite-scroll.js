exports.ids = [55];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/infinite-scroll.vue?vue&type=template&id=58c544a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main skeleton-body"},[_c('shop-banner'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page-content mb-5\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row main-content-wrap gutter-lg pb-8\">","</div>",[_c('sidebar-filter-one'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-9 main-content\">","</div>",[_c('product-list-two')],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/infinite-scroll.vue?vue&type=template&id=58c544a1&

// EXTERNAL MODULE: ./components/partials/shop/ShopBanner.vue + 2 modules
var ShopBanner = __webpack_require__(86);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/product-list/ProductListTwo.vue?vue&type=template&id=2ccae97b&
var ProductListTwovue_type_template_id_2ccae97b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-relative"},[_c('toolbox-one'),_vm._ssrNode(" "),_c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],class:((_vm.$route.query.type === 'list' ? 'product-lists': 'row cols-2 cols-sm-3') + " product-wrapper p-relative"),attrs:{"infinite-scroll-disabled":"noMore","infinite-scroll-distance":"-300","infinite-scroll-throttle-delay":"1500"}},[(_vm.loaded)?[(_vm.products.length > 0)?_vm._l((_vm.products),function(item){return _vm._ssrNode("<div class=\"product-wrap\">","</div>",[(_vm.$route.query.type !== 'list')?_c('product-two',{attrs:{"product":item}}):_c('product-eight',{attrs:{"product":item}})],1)}):_vm._e()]:_vm._ssrNode((_vm._ssrList((new Array(12).fill(1)),function(item,index){return ("<div class=\"product-wrap\">"+((_vm.$route.query.type !== 'list')?("<div class=\"product-loading-overlay\"></div>"):("<div class=\"skel-pro skel-pro-list mb-4\"></div>"))+"</div>")})))],2),_vm._ssrNode(" "+((_vm.loaded && _vm.products.length === 0)?("<p>No products were found matching your selection.</p>"):"<!---->")+" <div class=\"loading product-loading\"></div>")],2)}
var ProductListTwovue_type_template_id_2ccae97b_staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListTwo.vue?vue&type=template&id=2ccae97b&

// EXTERNAL MODULE: external "vue-infinite-scroll"
var external_vue_infinite_scroll_ = __webpack_require__(70);
var external_vue_infinite_scroll_default = /*#__PURE__*/__webpack_require__.n(external_vue_infinite_scroll_);

// EXTERNAL MODULE: ./components/elements/product/ProductTwo.vue + 4 modules
var ProductTwo = __webpack_require__(73);

// EXTERNAL MODULE: ./components/elements/product/ProductEight.vue + 4 modules
var ProductEight = __webpack_require__(84);

// EXTERNAL MODULE: ./components/partials/shop/toolbox/ToolboxOne.vue + 4 modules
var ToolboxOne = __webpack_require__(85);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/shop/product-list/ProductListTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ProductListTwovue_type_script_lang_js_ = ({
  components: {
    ToolboxOne: ToolboxOne["a" /* default */],
    ProductTwo: ProductTwo["a" /* default */],
    ProductEight: ProductEight["a" /* default */]
  },
  directives: {
    infiniteScroll: external_vue_infinite_scroll_default.a
  },
  data: function () {
    return {
      products: null,
      total: 0,
      loadedCount: this.$route.query.per_page ? parseInt(this.$route.query.per_page) : 12,
      loaded: false
    };
  },
  computed: {
    noMore: function () {
      return this.loadedCount >= this.total;
    }
  },
  watch: {
    $route: function () {
      this.$refs.infiniteSpinner.style.display = 'none';
      this.getProducts();
    }
  },
  mounted: function () {
    this.loadedCount = this.$route.query.per_page ? parseInt(this.$route.query.per_page) : 12;
    api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/shop`, {
      params: { ...this.$route.query,
        is_product: true,
        is_post: false,
        from: 0,
        to: this.loadedCount
      }
    }).then(response => {
      this.products = response.data.data;
      this.total = response.data.total;
      this.loaded = true;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
  },
  methods: {
    loadMore: function (e) {
      this.$refs.infiniteSpinner.style.display = 'block';
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/shop`, {
        params: { ...this.$route.query,
          is_product: true,
          is_post: false,
          from: this.loadedCount,
          to: this.loadedCount + 3
        }
      }).then(response => {
        setTimeout(() => {
          this.products = [...this.products, ...response.data.data];
          this.total = response.data.total;
          this.loadedCount += 3;
          this.$refs.infiniteSpinner.style.display = 'none';
        }, 500);
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    },
    getProducts: function () {
      this.loadedCount = this.$route.query.per_page ? parseInt(this.$route.query.per_page) : 12;
      this.products = null;
      this.loaded = false;
      api["c" /* default */].get(`${api["a" /* baseUrl */]}/demo-${api["b" /* currentDemo */]}/shop`, {
        params: { ...this.$route.query,
          is_product: true,
          is_post: false,
          from: 0,
          to: this.loadedCount
        }
      }).then(response => {
        this.products = response.data.data;
        this.total = response.data.total;
        this.loaded = true;
      }).catch(error => ({
        error: JSON.stringify(error)
      }));
    }
  }
});
// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_list_ProductListTwovue_type_script_lang_js_ = (ProductListTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/partials/shop/product-list/ProductListTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_list_ProductListTwovue_type_script_lang_js_,
  ProductListTwovue_type_template_id_2ccae97b_render,
  ProductListTwovue_type_template_id_2ccae97b_staticRenderFns,
  false,
  null,
  null,
  "773a173d"
  
)

/* harmony default export */ var ProductListTwo = (component.exports);
// EXTERNAL MODULE: ./components/partials/shop/sidebar/SidebarFilterOne.vue + 4 modules
var SidebarFilterOne = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/infinite-scroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var infinite_scrollvue_type_script_lang_js_ = ({
  components: {
    ShopBanner: ShopBanner["a" /* default */],
    SidebarFilterOne: SidebarFilterOne["a" /* default */],
    ProductListTwo: ProductListTwo
  }
});
// CONCATENATED MODULE: ./pages/shop/infinite-scroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_infinite_scrollvue_type_script_lang_js_ = (infinite_scrollvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/shop/infinite-scroll.vue





/* normalize component */

var infinite_scroll_component = Object(componentNormalizer["a" /* default */])(
  shop_infinite_scrollvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "31c96fd0"
  
)

/* harmony default export */ var infinite_scroll = __webpack_exports__["default"] = (infinite_scroll_component.exports);

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
//# sourceMappingURL=infinite-scroll.js.map