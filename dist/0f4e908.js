(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{279:function(t,e,n){"use strict";var r={mounted:function(){var t=this;this.$children.forEach((function(e,n){e.$on("fire",(function(){var r=e.isExpanded;t.$children.forEach((function(t){return t.isExpanded=!1})),t.$children[n].isExpanded=r}))}))}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},280:function(t,e,n){"use strict";var r={components:{VueSlideToggle:n(103).a},props:{isOpened:{type:Boolean,default:!1}},data:function(){return{isExpanded:this.isOpened}},methods:{changeOpenState:function(t){t.target.classList.contains("form-control-label")&&(this.isExpanded=!this.isExpanded),this.isExpanded=!this.isExpanded,this.$emit("fire")}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card-header",class:{expand:!t.isExpanded,collapse:t.isExpanded},on:{click:function(e){return t.changeOpenState(e)}}},[t._t("header")],2),t._v(" "),n("vue-slide-toggle",{attrs:{open:t.isExpanded}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},350:function(t,e,n){"use strict";n.r(e);var r=n(279),o=n(280),c={components:{ElementAccordion:r.a,ElementCard:o.a}},l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main faq"},[n("nav",{staticClass:"breadcrumb-nav"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"breadcrumb"},[n("li",[n("nuxt-link",{attrs:{to:"/",title:"link to home"}},[n("i",{staticClass:"d-icon-home"})])],1),t._v(" "),n("li",[t._v("FAQs")])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"page-content mb-10 pb-8"},[n("section",{directives:[{name:"animate",rawName:"v-animate"}],staticClass:"appear-animate"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 mt-10"},[n("h2",{staticClass:"title pl-2 pr-2 ls-m text-left"},[t._v("Customer Management")]),t._v(" "),n("element-accordion",{staticClass:"accordion-border accordion-boxed accordion-plus"},[n("element-card",{staticClass:"card",attrs:{"is-opened":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How can add vendor role to the customer?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What benefits a customer can take?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How to change customer's address?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6 mt-10"},[n("h2",{staticClass:"title pl-2 pr-2 ls-m"},[t._v("Product Type")]),t._v(" "),n("element-accordion",{staticClass:"accordion-border accordion-boxed accordion-plus"},[n("element-card",{staticClass:"card",attrs:{"is-opened":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What is difference between simple & variable product?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How to buy several products at once?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How to add downloadable product?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])])],1)],1)])])]),t._v(" "),n("section",{directives:[{name:"animate",rawName:"v-animate"}],staticClass:"appear-animate"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 mt-10"},[n("h2",{staticClass:"title pl-2 pr-2 ls-m"},[t._v("Ordering Products")]),t._v(" "),n("element-accordion",{staticClass:"accordion-border accordion-boxed accordion-plus"},[n("element-card",{staticClass:"card",attrs:{"is-opened":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How can a guest order the product?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What kind of payment methods are available?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What is benefit of paypal payment?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How to register as a customer?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What is the preferable way to buy product?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6 mt-10"},[n("h2",{staticClass:"title pl-2 pr-2 ls-m"},[t._v("The Others")]),t._v(" "),n("element-accordion",{staticClass:"accordion-border accordion-boxed accordion-plus"},[n("element-card",{staticClass:"card",attrs:{"is-opened":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How can I return an purchased item online?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How to add coupon code?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("How can I find theme style?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])]),t._v(" "),n("element-card",{staticClass:"card",scopedSlots:t._u([{key:"header",fn:function(){return[n("a",{attrs:{href:"javascript:;"}},[t._v("What are the delivery types you can use?")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-0"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing\n\t\t\t\t\t\t\t\t\t\telit. Donec odio.\n\t\t\t\t\t\t\t\t\t\tQuisque volutpat mattis eros. Nullam malesuada erat ut turpis.\n\t\t\t\t\t\t\t\t\t\tSuspendisse\n\t\t\t\t\t\t\t\t\t\turna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec\n\t\t\t\t\t\t\t\t\t\tjusto eget felis facilisis fermentum.")])])])],1)],1)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header",staticStyle:{"background-image":"url(./images/page-header/faq.jpg)","background-color":"#1e3b59"}},[n("h3",{staticClass:"page-subtitle lh-1"},[t._v("Frequently")]),t._v(" "),n("h1",{staticClass:"page-title font-weight-bold text-capitalize lh-1"},[t._v("Asked Questions")])])}],!1,null,null,null);e.default=component.exports}}]);