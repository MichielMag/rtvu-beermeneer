(window.webpackJsonp=window.webpackJsonp||[]).push([[36,18,144],{1053:function(e,t,r){"use strict";r.r(t);var n=r(1371),o=r(1344);for(var c in o)["default"].indexOf(c)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(c);r(1369);var l=r(1),component=Object(l.a)(o.default,n.a,n.b,!1,null,"3695c738",null);t.default=component.exports},1121:function(e,t,r){"use strict";r.r(t);r(5),r(6),r(3),r(7),r(8);var n=r(0),o=r(2);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l={name:"AlternateLanguageMessage",computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(o.mapGetters)("alternate-language",["alternateLanguage","enabled"]))},d=l,f=(r(1579),r(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.alternateLanguage&&e.enabled?t("div",{staticClass:"alternate-language-message"},[e._m(0)]):e._e()}),[function(){var e=this._self._c;return e("div",{staticClass:"message",attrs:{lang:"en"}},[e("p",[this._v("\n            The original article was created in Dutch (NL)\n            by our editorial staff. This article is automatically\n            translated by an algorithm and might contain errors due to this.\n        ")])])}],!1,null,"8b1f9552",null);t.default=component.exports},1238:function(e,t,r){"use strict";r.r(t);r(5),r(6),r(3),r(7),r(8);var n=r(0);r(12);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(2);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"ApiArticleHeader",props:{tag:{type:String,default:"",required:!1},headline:{type:String,required:!0},summary:{type:String,required:!0},authors:{type:Array,default:function(){return[]},required:!1},publishedAt:{type:String,required:!0},readingTime:{type:String,required:!0},nos:{type:Boolean,required:!1,default:!1}},computed:f(f({},Object(l.mapGetters)("alternate-language",["directionality"])),Object(l.mapGetters)("layout",["pageMetaData"]))},v=(r(1817),r(1)),component=Object(v.a)(m,(function(){var e,t=this,r=t._self._c;return r("div",[r("CategoryLabels",t._b({},"CategoryLabels",{isNos:t.nos,label:t.tag,origin:null===(e=t.pageMetaData)||void 0===e?void 0:e.originBroadcaster},!1)),t._v(" "),r("HeadingContent",{attrs:{title:t.headline,tag:"h1"}}),t._v(" "),t.summary?r("p",{staticClass:"intro"},[t._v("\n        "+t._s(t.summary)+"\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"groei-wa-article-meta"},[r("div",{staticClass:"groei-wa-article-authors"},[r("ul",{staticClass:"avatars"},[t._l(t.authors,(function(e){return[r("li",{key:e.name,staticClass:"avatar_item"},[r("NavigationLink",{attrs:{url:e.id?"/wie-is-wie/".concat(e.department,"/").concat(e.slug):void 0}},[r("Avatar",{attrs:{image:c(c({},e.imageAsset),{},{alt:e.name}),text:t.$initials(e.name)}})],1)],1)]}))],2),t._v(" "),r("span",{staticClass:"groei-wa-author-links"},[t._l(t.authors,(function(e,n){return[r("NavigationLink",{key:"authorname_".concat(n),attrs:{url:e.id?"/wie-is-wie/".concat(e.department,"/").concat(e.slug):""}},[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),n<t.authors.length-2?r("span",{key:"separator_comma".concat(n),staticClass:"separator separator_comma"},[t._v(", ")]):t._e(),t._v(" "),n===t.authors.length-2?r("span",{key:"separator_ampersand".concat(n),staticClass:"separator separator_ampersand"},[t._v(" & ")]):t._e()]}))],2)]),t._v(" "),r("p",{staticClass:"groei-wa-article-info",class:{"date-rtl":"rtl"===t.directionality}},[t._v("\n            "+t._s(t.$formatDateWithTime(t.publishedAt))+" "),t.publishedAt&&t.readingTime?r("strong",[t._v("•")]):t._e(),t._v(" "+t._s(t.readingTime)+"\n        ")])]),t._v(" "),r("ClientOnly",[r("AlternateLanguageMessage",{class:{"message-rtl":"rtl"===t.directionality}})],1)],1)}),[],!1,null,"79d8332e",null);t.default=component.exports;installComponents(component,{CategoryLabels:r(1053).default,HeadingContent:r(77).default,Avatar:r(359).default,NavigationLink:r(66).default,AlternateLanguageMessage:r(1121).default})},1344:function(e,t,r){"use strict";r.r(t);var n=r(1345),o=r.n(n);for(var c in n)["default"].indexOf(c)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},1345:function(e,t,r){"use strict";r(18),r(3),Object.defineProperty(t,"__esModule",{value:!0});var n=r(15),o=n.__importDefault(r(4)),c=n.__importDefault(r(1351));t.default=o.default.extend({name:"CategoryLabels",props:{showLabel:{type:Boolean,required:!1,default:!0},isNos:{type:Boolean,required:!1},type:{type:String,required:!1},label:{type:String,required:!1},liveblogLabel:{type:String,required:!1},chip:{type:String,required:!1},origin:{type:String,required:!1},isChip:{type:Boolean,required:!1}},computed:{config:function(){var e=this.origin,t=this.$brand,r=null==t?void 0:t.config;return e&&e!==r.partnerId&&c.default.find((function(t){return t.partnerId===e}))},logo:function(){return this.config&&this.getLogo(this.config)},labels:function(){var e=this.type,t=this.isNos,label=this.label,r=this.liveblogLabel,n=this.chip,o=this.showLabel;return["liveblog"===e&&{tag:"LiveblogLabel",label:r},this.logo,label&&this.logo&&{tag:"NameLabel",label:label},t&&{tag:"NosLabel"},!this.logo&&n&&o&&{tag:"ChipLabel",label:n},!this.logo&&label&&o&&{tag:"NameLabel",label:label}].filter((function(label){return!!label}))}},methods:{getSrc:function(e){try{return r(1352)("./icon-".concat(e,".svg"))}catch(e){return""}},getLogo:function(e){var t=this.isChip,r=e.displayName,n=e.partnerId;return{tag:"ResponsiveBackgroundImage",class:"origin",parentClass:{chip:t},disableBorderRadius:!0,imageSizeType:"avatar",source:{src:this.getSrc(n),alt:r,ratio:"1:1"}}}}})},1346:function(e,t,r){e.exports={}},1351:function(e){e.exports=JSON.parse('[{"partnerId":"bingofm","displayName":"Bingo FM"},{"partnerId":"denhaagfm","displayName":"Den Haag FM"},{"partnerId":"fryslan","displayName":"Omrop Fryslân"},{"partnerId":"friesland","displayName":"Omrop Fryslân"},{"partnerId":"gelderland","displayName":"Omroep Gelderland"},{"partnerId":"l1","displayName":"L1"},{"partnerId":"l1nieuws","displayName":"L1 Nieuws"},{"partnerId":"zh-west","displayName":"Omroep West"},{"partnerId":"utrecht","displayName":"RTV Utrecht"},{"partnerId":"np33","displayName":"Nieuwsplein33"},{"partnerId":"overijssel","displayName":"Oost"},{"partnerId":"regioland","displayName":"Regioland"},{"partnerId":"zh-rijnmond","displayName":"Rijnmond"},{"partnerId":"drenthe","displayName":"RTV Drenthe"},{"partnerId":"groningen","displayName":"RTV Noord"},{"partnerId":"ustad","displayName":"UStad"},{"partnerId":"utrecht","displayName":"RTV Utrecht"},{"partnerId":"zh-west","displayName":"Omroep West"},{"partnerId":"zeeland","displayName":"Omroep Zeeland"}]')},1352:function(e,t,r){var map={"./icon-bingofm.svg":1353,"./icon-denhaagfm.svg":1354,"./icon-drenthe.svg":1355,"./icon-friesland.svg":1356,"./icon-fryslan.svg":1357,"./icon-gelderland.svg":1358,"./icon-groningen.svg":1359,"./icon-l1nieuws.svg":1360,"./icon-np33.svg":1361,"./icon-overijssel.svg":1362,"./icon-regioland.svg":1363,"./icon-ustad.svg":1364,"./icon-utrecht.svg":1365,"./icon-zeeland.svg":1366,"./icon-zh-rijnmond.svg":1367,"./icon-zh-west.svg":1368};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=1352},1353:function(e,t,r){e.exports=r.p+"img/icon-bingofm.2ce52ce.svg"},1354:function(e,t,r){e.exports=r.p+"img/icon-denhaagfm.e64c3ae.svg"},1355:function(e,t,r){e.exports=r.p+"img/icon-drenthe.f248ea1.svg"},1356:function(e,t,r){e.exports=r.p+"img/icon-friesland.6fd0c5e.svg"},1357:function(e,t,r){e.exports=r.p+"img/icon-fryslan.6fd0c5e.svg"},1358:function(e,t,r){e.exports=r.p+"img/icon-gelderland.f5c2c9f.svg"},1359:function(e,t,r){e.exports=r.p+"img/icon-groningen.2c7db57.svg"},1360:function(e,t,r){e.exports=r.p+"img/icon-l1nieuws.022ec30.svg"},1361:function(e,t,r){e.exports=r.p+"img/icon-np33.2ce52ce.svg"},1362:function(e,t,r){e.exports=r.p+"img/icon-overijssel.202164d.svg"},1363:function(e,t,r){e.exports=r.p+"img/icon-regioland.a28c2f3.svg"},1364:function(e,t,r){e.exports=r.p+"img/icon-ustad.2ce52ce.svg"},1365:function(e,t,r){e.exports=r.p+"img/icon-utrecht.2ce52ce.svg"},1366:function(e,t,r){e.exports=r.p+"img/icon-zeeland.fff6128.svg"},1367:function(e,t,r){e.exports=r.p+"img/icon-zh-rijnmond.ab07a60.svg"},1368:function(e,t,r){e.exports=r.p+"img/icon-zh-west.f53fabf.svg"},1369:function(e,t,r){"use strict";r(1346)},1371:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(54),o=["parentClass","tag"],c=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.labels.length?t("div",{staticClass:"category-labels"},[e._l(e.labels,(function(r,c){var l=r.parentClass,d=r.tag,f=Object(n.a)(r,o);return[t("div",{key:d,staticClass:"category-label",class:l},[t(d,e._b({tag:"component"},"component",f,!1))],1),e._v(" "),c<e.labels.length-1?t("span",{key:"".concat(d,"-divider"),staticClass:"divider",class:{line:!e.isChip&&!e.logo,logo:e.logo}}):e._e()]}))],2):e._e()},l=[]},1494:function(e,t,r){e.exports={}},1579:function(e,t,r){"use strict";r(1494)},1696:function(e,t,r){e.exports={}},1817:function(e,t,r){"use strict";r(1696)}}]);