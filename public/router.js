import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03a67a71 = () => interopDefault(import('..\\pages\\elements\\index.vue' /* webpackChunkName: "pages/elements/index" */))
const _4366cbdc = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _01c2ca86 = () => interopDefault(import('..\\pages\\blog\\Classic.vue' /* webpackChunkName: "pages/blog/Classic" */))
const _2d640378 = () => interopDefault(import('..\\pages\\blog\\Listing.vue' /* webpackChunkName: "pages/blog/Listing" */))
const _44ffc4c8 = () => interopDefault(import('..\\pages\\elements\\accordions.vue' /* webpackChunkName: "pages/elements/accordions" */))
const _8a824af0 = () => interopDefault(import('..\\pages\\elements\\alerts.vue' /* webpackChunkName: "pages/elements/alerts" */))
const _3fae10d9 = () => interopDefault(import('..\\pages\\elements\\blog-posts.vue' /* webpackChunkName: "pages/elements/blog-posts" */))
const _3aff3be0 = () => interopDefault(import('..\\pages\\elements\\buttons.vue' /* webpackChunkName: "pages/elements/buttons" */))
const _60f65a6f = () => interopDefault(import('..\\pages\\elements\\cta.vue' /* webpackChunkName: "pages/elements/cta" */))
const _20e6bc54 = () => interopDefault(import('..\\pages\\elements\\icon-boxes.vue' /* webpackChunkName: "pages/elements/icon-boxes" */))
const _3c197e8e = () => interopDefault(import('..\\pages\\elements\\icons.vue' /* webpackChunkName: "pages/elements/icons" */))
const _57a6651c = () => interopDefault(import('..\\pages\\elements\\instagrams.vue' /* webpackChunkName: "pages/elements/instagrams" */))
const _41e7024d = () => interopDefault(import('..\\pages\\elements\\product-category.vue' /* webpackChunkName: "pages/elements/product-category" */))
const _1203eed6 = () => interopDefault(import('..\\pages\\elements\\products.vue' /* webpackChunkName: "pages/elements/products" */))
const _87d9fba2 = () => interopDefault(import('..\\pages\\elements\\tabs.vue' /* webpackChunkName: "pages/elements/tabs" */))
const _7c110a65 = () => interopDefault(import('..\\pages\\elements\\testimonials.vue' /* webpackChunkName: "pages/elements/testimonials" */))
const _42cf01e8 = () => interopDefault(import('..\\pages\\elements\\titles.vue' /* webpackChunkName: "pages/elements/titles" */))
const _0cc88ca0 = () => interopDefault(import('..\\pages\\elements\\typography.vue' /* webpackChunkName: "pages/elements/typography" */))
const _46134cd0 = () => interopDefault(import('..\\pages\\pages\\about-us.vue' /* webpackChunkName: "pages/pages/about-us" */))
const _0afb8e3a = () => interopDefault(import('..\\pages\\pages\\account.vue' /* webpackChunkName: "pages/pages/account" */))
const _96ce104c = () => interopDefault(import('..\\pages\\pages\\cart.vue' /* webpackChunkName: "pages/pages/cart" */))
const _6e866600 = () => interopDefault(import('..\\pages\\pages\\checkout.vue' /* webpackChunkName: "pages/pages/checkout" */))
const _1cb5df7d = () => interopDefault(import('..\\pages\\pages\\coming-soon.vue' /* webpackChunkName: "pages/pages/coming-soon" */))
const _7b975d25 = () => interopDefault(import('..\\pages\\pages\\contact-us.vue' /* webpackChunkName: "pages/pages/contact-us" */))
const _2b0ce352 = () => interopDefault(import('..\\pages\\pages\\faqs.vue' /* webpackChunkName: "pages/pages/faqs" */))
const _6df9af9f = () => interopDefault(import('..\\pages\\pages\\login.vue' /* webpackChunkName: "pages/pages/login" */))
const _85c665f8 = () => interopDefault(import('..\\pages\\pages\\order.vue' /* webpackChunkName: "pages/pages/order" */))
const _05b876ff = () => interopDefault(import('..\\pages\\pages\\wishlist.vue' /* webpackChunkName: "pages/pages/wishlist" */))
const _31da842b = () => interopDefault(import('..\\pages\\shop\\banner-sidebar.vue' /* webpackChunkName: "pages/shop/banner-sidebar" */))
const _f4261dc2 = () => interopDefault(import('..\\pages\\shop\\boxed-banner.vue' /* webpackChunkName: "pages/shop/boxed-banner" */))
const _1b27df01 = () => interopDefault(import('..\\pages\\shop\\horizontal-filter.vue' /* webpackChunkName: "pages/shop/horizontal-filter" */))
const _47ca1de6 = () => interopDefault(import('..\\pages\\shop\\infinite-scroll.vue' /* webpackChunkName: "pages/shop/infinite-scroll" */))
const _21224b11 = () => interopDefault(import('..\\pages\\shop\\navigation-filter.vue' /* webpackChunkName: "pages/shop/navigation-filter" */))
const _387bbf34 = () => interopDefault(import('..\\pages\\shop\\off-canvas.vue' /* webpackChunkName: "pages/shop/off-canvas" */))
const _2a2eed2a = () => interopDefault(import('..\\pages\\shop\\right-sidebar.vue' /* webpackChunkName: "pages/shop/right-sidebar" */))
const _b927232c = () => interopDefault(import('..\\pages\\blog\\grid\\sidebar.vue' /* webpackChunkName: "pages/blog/grid/sidebar" */))
const _8ee8d764 = () => interopDefault(import('..\\pages\\blog\\mask\\grid.vue' /* webpackChunkName: "pages/blog/mask/grid" */))
const _73b0e6ed = () => interopDefault(import('..\\pages\\blog\\mask\\masonry.vue' /* webpackChunkName: "pages/blog/mask/masonry" */))
const _1b688953 = () => interopDefault(import('..\\pages\\blog\\masonry\\sidebar.vue' /* webpackChunkName: "pages/blog/masonry/sidebar" */))
const _7f46ff03 = () => interopDefault(import('..\\pages\\blog\\grid\\_column.vue' /* webpackChunkName: "pages/blog/grid/_column" */))
const _1179cc28 = () => interopDefault(import('..\\pages\\blog\\masonry\\_column.vue' /* webpackChunkName: "pages/blog/masonry/_column" */))
const _44cb67d6 = () => interopDefault(import('..\\pages\\blog\\single\\_slug.vue' /* webpackChunkName: "pages/blog/single/_slug" */))
const _0ebcde8e = () => interopDefault(import('..\\pages\\product\\default\\_slug.vue' /* webpackChunkName: "pages/product/default/_slug" */))
const _02c1f2ad = () => interopDefault(import('..\\pages\\product\\full-width\\_slug.vue' /* webpackChunkName: "pages/product/full-width/_slug" */))
const _415cce46 = () => interopDefault(import('..\\pages\\product\\gallery\\_slug.vue' /* webpackChunkName: "pages/product/gallery/_slug" */))
const _ae6b8822 = () => interopDefault(import('..\\pages\\product\\grid\\_slug.vue' /* webpackChunkName: "pages/product/grid/_slug" */))
const _99a5cbde = () => interopDefault(import('..\\pages\\product\\horizontal\\_slug.vue' /* webpackChunkName: "pages/product/horizontal/_slug" */))
const _6df54ac2 = () => interopDefault(import('..\\pages\\product\\left-sidebar\\_slug.vue' /* webpackChunkName: "pages/product/left-sidebar/_slug" */))
const _b7cf67ec = () => interopDefault(import('..\\pages\\product\\masonry\\_slug.vue' /* webpackChunkName: "pages/product/masonry/_slug" */))
const _1e504c24 = () => interopDefault(import('..\\pages\\product\\right-sidebar\\_slug.vue' /* webpackChunkName: "pages/product/right-sidebar/_slug" */))
const _c91d7a2c = () => interopDefault(import('..\\pages\\product\\sticky-both\\_slug.vue' /* webpackChunkName: "pages/product/sticky-both/_slug" */))
const _1a7959eb = () => interopDefault(import('..\\pages\\product\\sticky-cart\\_slug.vue' /* webpackChunkName: "pages/product/sticky-cart/_slug" */))
const _59448b9d = () => interopDefault(import('..\\pages\\product\\sticky-info\\_slug.vue' /* webpackChunkName: "pages/product/sticky-info/_slug" */))
const _183d2301 = () => interopDefault(import('..\\pages\\product\\tab-inside\\_slug.vue' /* webpackChunkName: "pages/product/tab-inside/_slug" */))
const _6da7ac8c = () => interopDefault(import('..\\pages\\shop\\grid\\_cols.vue' /* webpackChunkName: "pages/shop/grid/_cols" */))
const _3024a4c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/elements",
    component: _03a67a71,
    name: "elements"
  }, {
    path: "/shop",
    component: _4366cbdc,
    name: "shop"
  }, {
    path: "/blog/Classic",
    component: _01c2ca86,
    name: "blog-Classic"
  }, {
    path: "/blog/Listing",
    component: _2d640378,
    name: "blog-Listing"
  }, {
    path: "/elements/accordions",
    component: _44ffc4c8,
    name: "elements-accordions"
  }, {
    path: "/elements/alerts",
    component: _8a824af0,
    name: "elements-alerts"
  }, {
    path: "/elements/blog-posts",
    component: _3fae10d9,
    name: "elements-blog-posts"
  }, {
    path: "/elements/buttons",
    component: _3aff3be0,
    name: "elements-buttons"
  }, {
    path: "/elements/cta",
    component: _60f65a6f,
    name: "elements-cta"
  }, {
    path: "/elements/icon-boxes",
    component: _20e6bc54,
    name: "elements-icon-boxes"
  }, {
    path: "/elements/icons",
    component: _3c197e8e,
    name: "elements-icons"
  }, {
    path: "/elements/instagrams",
    component: _57a6651c,
    name: "elements-instagrams"
  }, {
    path: "/elements/product-category",
    component: _41e7024d,
    name: "elements-product-category"
  }, {
    path: "/elements/products",
    component: _1203eed6,
    name: "elements-products"
  }, {
    path: "/elements/tabs",
    component: _87d9fba2,
    name: "elements-tabs"
  }, {
    path: "/elements/testimonials",
    component: _7c110a65,
    name: "elements-testimonials"
  }, {
    path: "/elements/titles",
    component: _42cf01e8,
    name: "elements-titles"
  }, {
    path: "/elements/typography",
    component: _0cc88ca0,
    name: "elements-typography"
  }, {
    path: "/pages/about-us",
    component: _46134cd0,
    name: "pages-about-us"
  }, {
    path: "/pages/account",
    component: _0afb8e3a,
    name: "pages-account"
  }, {
    path: "/pages/cart",
    component: _96ce104c,
    name: "pages-cart"
  }, {
    path: "/pages/checkout",
    component: _6e866600,
    name: "pages-checkout"
  }, {
    path: "/pages/coming-soon",
    component: _1cb5df7d,
    name: "pages-coming-soon"
  }, {
    path: "/pages/contact-us",
    component: _7b975d25,
    name: "pages-contact-us"
  }, {
    path: "/pages/faqs",
    component: _2b0ce352,
    name: "pages-faqs"
  }, {
    path: "/pages/login",
    component: _6df9af9f,
    name: "pages-login"
  }, {
    path: "/pages/order",
    component: _85c665f8,
    name: "pages-order"
  }, {
    path: "/pages/wishlist",
    component: _05b876ff,
    name: "pages-wishlist"
  }, {
    path: "/shop/banner-sidebar",
    component: _31da842b,
    name: "shop-banner-sidebar"
  }, {
    path: "/shop/boxed-banner",
    component: _f4261dc2,
    name: "shop-boxed-banner"
  }, {
    path: "/shop/horizontal-filter",
    component: _1b27df01,
    name: "shop-horizontal-filter"
  }, {
    path: "/shop/infinite-scroll",
    component: _47ca1de6,
    name: "shop-infinite-scroll"
  }, {
    path: "/shop/navigation-filter",
    component: _21224b11,
    name: "shop-navigation-filter"
  }, {
    path: "/shop/off-canvas",
    component: _387bbf34,
    name: "shop-off-canvas"
  }, {
    path: "/shop/right-sidebar",
    component: _2a2eed2a,
    name: "shop-right-sidebar"
  }, {
    path: "/blog/grid/sidebar",
    component: _b927232c,
    name: "blog-grid-sidebar"
  }, {
    path: "/blog/mask/grid",
    component: _8ee8d764,
    name: "blog-mask-grid"
  }, {
    path: "/blog/mask/masonry",
    component: _73b0e6ed,
    name: "blog-mask-masonry"
  }, {
    path: "/blog/masonry/sidebar",
    component: _1b688953,
    name: "blog-masonry-sidebar"
  }, {
    path: "/blog/grid/:column?",
    component: _7f46ff03,
    name: "blog-grid-column"
  }, {
    path: "/blog/masonry/:column?",
    component: _1179cc28,
    name: "blog-masonry-column"
  }, {
    path: "/blog/single/:slug?",
    component: _44cb67d6,
    name: "blog-single-slug"
  }, {
    path: "/product/default/:slug?",
    component: _0ebcde8e,
    name: "product-default-slug"
  }, {
    path: "/product/full-width/:slug?",
    component: _02c1f2ad,
    name: "product-full-width-slug"
  }, {
    path: "/product/gallery/:slug?",
    component: _415cce46,
    name: "product-gallery-slug"
  }, {
    path: "/product/grid/:slug?",
    component: _ae6b8822,
    name: "product-grid-slug"
  }, {
    path: "/product/horizontal/:slug?",
    component: _99a5cbde,
    name: "product-horizontal-slug"
  }, {
    path: "/product/left-sidebar/:slug?",
    component: _6df54ac2,
    name: "product-left-sidebar-slug"
  }, {
    path: "/product/masonry/:slug?",
    component: _b7cf67ec,
    name: "product-masonry-slug"
  }, {
    path: "/product/right-sidebar/:slug?",
    component: _1e504c24,
    name: "product-right-sidebar-slug"
  }, {
    path: "/product/sticky-both/:slug?",
    component: _c91d7a2c,
    name: "product-sticky-both-slug"
  }, {
    path: "/product/sticky-cart/:slug?",
    component: _1a7959eb,
    name: "product-sticky-cart-slug"
  }, {
    path: "/product/sticky-info/:slug?",
    component: _59448b9d,
    name: "product-sticky-info-slug"
  }, {
    path: "/product/tab-inside/:slug?",
    component: _183d2301,
    name: "product-tab-inside-slug"
  }, {
    path: "/shop/grid/:cols?",
    component: _6da7ac8c,
    name: "shop-grid-cols"
  }, {
    path: "/",
    component: _3024a4c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
