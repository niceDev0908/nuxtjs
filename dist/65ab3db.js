(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{352:function(t,e,r){"use strict";r.r(e);r(29),r(16),r(21),r(40),r(41);var n=r(4),l=r(30);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("cart",["cartList","totalPrice"]))},v=o,_=r(2),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main order"},[r("div",{staticClass:"page-content pt-7 pb-10 mb-10"},[r("div",{staticClass:"step-by pr-4 pl-4"},[r("h3",{staticClass:"title title-simple title-step"},[r("nuxt-link",{attrs:{to:"/pages/cart"}},[t._v("1. Shopping Cart")])],1),t._v(" "),r("h3",{staticClass:"title title-simple title-step"},[r("nuxt-link",{attrs:{to:"/pages/checkout"}},[t._v("2. Checkout")])],1),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"container mt-8"},[r("div",{staticClass:"order-message mr-auto ml-auto"},[r("div",{staticClass:"icon-box d-inline-flex align-items-center"},[r("div",{staticClass:"icon-box-icon mb-0"},[r("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",xmlSpace:"preserve"}},[r("g",[r("path",{attrs:{fill:"none","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"bevel","stroke-miterlimit":"10",d:"\n\t\t\t\t\t\t\t\t\t\tM33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4\n\t\t\t\t\t\t\t\t\t\tc0-0.7,0-1.4-0.1-2.1"}}),t._v(" "),r("polyline",{attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"bevel","stroke-miterlimit":"10",points:"\n\t\t\t\t\t\t\t\t\t\t48,6.9 24.4,29.8 17.2,22.3 \t"}})])])]),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"order-results"},[t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"overview-item"},[r("span",[t._v("Date:")]),t._v(" "),r("strong",[t._v(t._s((new Date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})))])]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"overview-item"},[r("span",[t._v("Total:")]),t._v(" "),r("strong",[t._v("$"+t._s(t._f("priceFormat")(t.totalPrice)))])]),t._v(" "),t._m(5)]),t._v(" "),r("h2",{staticClass:"title title-simple text-left pt-4 font-weight-bold text-uppercase"},[t._v("Order Details")]),t._v(" "),r("div",{staticClass:"order-details"},[r("table",{staticClass:"order-details-table"},[t._m(6),t._v(" "),r("tbody",[t._l(t.cartList,(function(e){return r("tr",{key:"order-"+e.name},[r("td",{staticClass:"product-name"},[t._v(t._s(e.name)+" "),r("span",[r("i",{staticClass:"fas fa-times"}),t._v(" "+t._s(e.qty))])]),t._v(" "),r("td",{staticClass:"product-price"},[t._v("$"+t._s(t._f("priceFormat")(e.qty*e.price)))])])})),t._v(" "),r("tr",{staticClass:"summary-subtotal"},[t._m(7),t._v(" "),r("td",{staticClass:"summary-subtotal-price"},[t._v("$"+t._s(t._f("priceFormat")(t.totalPrice)))])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("tr",{staticClass:"summary-subtotal"},[t._m(10),t._v(" "),r("td",[r("p",{staticClass:"summary-total-price"},[t._v("$"+t._s(t._f("priceFormat")(t.totalPrice)))])])])],2)])]),t._v(" "),r("h2",{staticClass:"title title-simple text-left pt-10 mb-2"},[t._v("Billing Address")]),t._v(" "),t._m(11),t._v(" "),r("nuxt-link",{staticClass:"btn btn-icon-left btn-dark btn-back btn-rounded btn-md mb-4",attrs:{to:"/shop"}},[r("i",{staticClass:"d-icon-arrow-left"}),t._v(" Back to List")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"title title-simple title-step active"},[r("a",{attrs:{href:"javascript:;"}},[t._v("3. Order Complete")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icon-box-content text-left"},[r("h5",{staticClass:"icon-box-title font-weight-bold lh-1 mb-1"},[t._v("Thank You!")]),t._v(" "),r("p",{staticClass:"lh-1 ls-m"},[t._v("Your order has been received")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overview-item"},[r("span",[t._v("Order number:")]),t._v(" "),r("strong",[t._v("4935")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overview-item"},[r("span",[t._v("Status:")]),t._v(" "),r("strong",[t._v("Processing")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overview-item"},[r("span",[t._v("Email:")]),t._v(" "),r("strong",[t._v("12345@gmail.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overview-item"},[r("span",[t._v("Payment method:")]),t._v(" "),r("strong",[t._v("Cash on delivery")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"summary-subtotal"},[r("td",[r("h3",{staticClass:"summary-subtitle"},[t._v("Product")])]),t._v(" "),r("td")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("h4",{staticClass:"summary-subtitle"},[t._v("Subtotal:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"summary-subtotal"},[r("td",[r("h4",{staticClass:"summary-subtitle"},[t._v("Shipping:")])]),t._v(" "),r("td",{staticClass:"summary-subtotal-price"},[t._v("Free shipping")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"summary-subtotal"},[r("td",[r("h4",{staticClass:"summary-subtitle"},[t._v("Payment method:")])]),t._v(" "),r("td",{staticClass:"summary-subtotal-price"},[t._v("Cash on delivery")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("h4",{staticClass:"summary-subtitle"},[t._v("Total:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"address-info pb-8 mb-6"},[r("p",{staticClass:"address-detail pb-2"},[t._v("\n\t\t\t\t\tJohn Doe"),r("br"),t._v("\n\t\t\t\t\tRiode Company"),r("br"),t._v("\n\t\t\t\t\tSteven street"),r("br"),t._v("\n\t\t\t\t\tEl Carjon, CA 92020"),r("br"),t._v("\n\t\t\t\t\t123456789\n\t\t\t\t")]),t._v(" "),r("p",{staticClass:"email"},[t._v("mail@riode.com")])])}],!1,null,null,null);e.default=component.exports}}]);