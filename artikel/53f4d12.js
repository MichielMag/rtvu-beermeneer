(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1174:function(t,e,n){"use strict";n.r(e);var r=n(1970),o=n(1630);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);n(1888);var c=n(1),component=Object(c.a)(o.default,r.a,r.b,!1,null,"167cfc92",null);e.default=component.exports,installComponents(component,{HeadingContent:n(77).default,ResponsiveImage:n(114).default,NavigationLink:n(66).default})},1630:function(t,e,n){"use strict";n.r(e);var r=n(1631),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},1631:function(t,e,n){"use strict";n(19),n(16),Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ApiPromo",props:{imageDimensions:{type:Object,required:!1},imageUrl:{type:String,required:!0},promoUrl:{type:String,default:"",required:!1},internalPromoUrl:{type:Object,default:function(){return{}},required:!1},title:{type:String,default:null,required:!1},altText:{type:String,default:"Promotional content",required:!1},upsell:{type:Boolean,required:!1}},computed:{url:function(){return this.internalPromoUrl&&this.internalPromoUrl.web?this.internalPromoUrl.web.href:this.promoUrl}},methods:{handlePromoboxClick:function(){var t=this.promoUrl.includes("https://api.whatsapp"),e={$:t?"WhatsApp ons":"promobox",chapter1:t?"whatsapp_banner":{}},n=t?this.$TrackEvent.CLICK_ACTION:this.$TrackEvent.CLICK_NAVIGATION;this.$track({type:this.$Tracker.AT_INTERNET,event:n,payload:{goal_type:this.upsell?"upsell_promobanner":void 0,click:e}})}}}},1747:function(t,e,n){t.exports={}},1888:function(t,e,n){"use strict";n(1747)},1970:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"promobox",on:{click:t.handlePromoboxClick}},[e("HeadingContent",t._b({staticClass:"promobox-title"},"HeadingContent",{title:t.title,tag:"h2"},!1)),t._v(" "),e("div",{staticClass:"promobox-container"},[e("NavigationLink",{staticClass:"promobox-link",attrs:{url:t.url}},[e("ResponsiveImage",t._b({},"ResponsiveImage",{imageDimensions:t.imageDimensions,source:{src:t.imageUrl,alt:t.altText}},!1))],1)],1)],1)},o=[]}}]);