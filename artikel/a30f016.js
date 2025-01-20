(window.webpackJsonp=window.webpackJsonp||[]).push([[55,166,167,168,204],{1074:function(t,e,n){"use strict";n.r(e);var r={name:"EpisodeListCarouselItem",props:{source:{type:Object,required:!0},ratio:{type:String,required:!1},title:{type:String,required:!0},start:{type:String,required:!0},end:{type:String,required:!0}}},o=(n(1460),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"episode-list-carousel-item"},[e("div",{staticClass:"episode-list-carousel-item-image"},[e("ResponsiveImage",t._b({staticClass:"hover-effect",on:{load:function(e){return t.$emit("load")}}},"ResponsiveImage",{imageSizeType:"episodeList",source:t.source,ratio:t.ratio},!1))],1),t._v(" "),e("div",{staticClass:"episode-list-carousel-item-content"},[e("h2",{staticClass:"episode-list-carousel-item-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"episode-list-carousel-item-time"},[t._v("\n            "+t._s(t.$formatDate(t.start))+"\n            •\n            "+t._s(t.$formatDateToTime(t.start))+"\n            -\n            "+t._s(t.$formatDateToTime(t.end))+"\n        ")])])])}),[],!1,null,"385aba28",null);e.default=component.exports;installComponents(component,{ResponsiveImage:n(114).default})},1090:function(t,e,n){"use strict";n.r(e);var r={name:"MultipleLinks",props:{links:{type:Array,default:function(){},required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.links&&t.links.length>0?e("div",{staticClass:"groei-wa-links-wrapper"},t._l(t.links,(function(link,n){return e("NavigationLink",{key:n,staticClass:"link-wrapper_link",attrs:{url:link.webHref?link.webHref:t.$convertApiLink(link.href)}},[t._v("\n        "+t._s(link.title)+" "),e("i",{staticClass:"icon-chevron-right"})])})),1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationLink:n(66).default})},1136:function(t,e,n){"use strict";n.r(e);var r={name:"EpisodeListCarousel",mixins:[n(1379).a],props:{items:{type:Array,required:!0}},mounted:function(){this.createSlider({prevNextButtons:!1,pageDots:!1,contain:!0,keepInBounds:!0,cellAlign:"left",wrapAround:!1})}},o=(n(1601),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{ref:"slider",staticClass:"slider",style:t.sensitive},t._l(t.items,(function(n,i){return e("div",{key:"slide_".concat(i),staticClass:"slide",class:{ready:!i||t.ready}},[e("NavigationLink",{staticClass:"slide-link",attrs:{url:t.$convertApiLink(n._links)}},[e("EpisodeListCarouselItem",t._b({on:{load:t.onResize}},"EpisodeListCarouselItem",{source:{src:n.thumbnail,alt:n.programTitle},title:n.programTitle,start:n.scheduleStart,end:n.scheduleEnd},!1))],1)],1)})),0)}),[],!1,null,"4630d7e0",null);e.default=component.exports;installComponents(component,{EpisodeListCarouselItem:n(1074).default,NavigationLink:n(66).default})},1137:function(t,e,n){"use strict";n.r(e);var r={name:"EpisodeList",props:{items:{type:Array,required:!0},ratio:{type:String,required:!1}}},o=(n(1602),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"episode-list"},t._l(t.items,(function(n,r){return e("NavigationLink",{key:r,staticClass:"item",attrs:{url:t.$convertApiLink(n._links)}},[e("EpisodeListCarouselItem",t._b({},"EpisodeListCarouselItem",{ratio:t.ratio,source:{src:n.thumbnail,alt:n.programTitle},title:n.programTitle,start:n.scheduleStart,end:n.scheduleEnd},!1))],1)})),1)}),[],!1,null,"4645cf3f",null);e.default=component.exports;installComponents(component,{EpisodeListCarouselItem:n(1074).default,NavigationLink:n(66).default})},1254:function(t,e,n){"use strict";n.r(e);n(5),n(6),n(7),n(8);var r=n(0),o=(n(33),n(3),n(30),n(2));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"ApiEpisodeListPreview",props:{title:{type:String,default:null,required:!1},items:{type:Array,default:function(){},required:!0},filter:{type:String,default:"",required:!0},extraLinks:{type:Array,default:function(){},required:!0},maxItemsToShow:{type:Number,default:3,required:!1}},data:function(){return{itemsToShow:this.filterItems(this.items)}},computed:c(c({},Object(o.mapGetters)("layout",["meta","isRadio"])),{},{isSlider:function(){return this.$device.isMobile||"none"===this.filter}}),methods:{filterItems:function(t){return"upcoming"===this.filter?t.filter((function(t){return new Date(t.scheduleStart)>Date.now()})).slice(0,this.maxItemsToShow):t.slice(0,this.maxItemsToShow)}}},f=(n(1846),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("HeadingContent",t._b({},"HeadingContent",{title:t.title,tag:"h4"},!1)),t._v(" "),t.isSlider?e("EpisodeListCarousel",{attrs:{items:t.itemsToShow}}):e("EpisodeList",{attrs:{items:t.itemsToShow,ratio:t.isRadio?"1:1":"16:9"}}),t._v(" "),e("MultipleLinks",{attrs:{links:t.extraLinks}})],1)}),[],!1,null,"07cacf8d",null);e.default=component.exports;installComponents(component,{HeadingContent:n(77).default,EpisodeListCarousel:n(1136).default,EpisodeList:n(1137).default,MultipleLinks:n(1090).default})},1379:function(t,e,n){"use strict";n(5),n(6),n(3),n(7),n(8);var r=n(0);n(33),n(1380);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n(1405);e.a={props:{selectIndex:{type:Number,required:!1,default:-1}},data:function(){return{ready:!1,resize:!1,isSensitive:!0,isDragging:!1,isTimerComplete:!1,index:Math.max(0,this.selectIndex),totalSlides:-1,numOfVisibleItems:1,initialOptions:{}}},computed:{canSlide:function(){return this.ready&&(this.hasNext||this.hasPrevious)},hasNext:function(){return this.index<this.lastSlideIndex&&this.lastSlideIndex>0},hasPrevious:function(){return this.totalSlides>0&&this.index>0},sensitive:function(){return!this.isSensitive&&{pointerEvents:"none"}},lastSlideIndex:function(){return this.totalSlides-this.numOfVisibleItems}},watch:{canSlide:{handler:function(t){var e=this;this.$nextTick((function(){var n,r;e.initialOptions.prevNextButtons&&(t?null===(n=e.flickity)||void 0===n||n.activatePrevNextButtons():null===(r=e.flickity)||void 0===r||r.deactivatePrevNextButtons())}))},immediate:!0},index:{handler:function(t){this.$emit("index",t)},immediate:!0},selectIndex:{handler:function(t){t<0||this.select(t)},immediate:!0},hasPrevious:function(){this.setPreviousButton()},hasNext:function(){this.setNextButton()}},methods:{setPreviousButton:function(){var t=this.$el.querySelector(".flickity-button.previous");this.setButtonActive(t,this.hasPrevious)},setNextButton:function(){var t=this.$el.querySelector(".flickity-button.next");this.setButtonActive(t,this.hasNext)},setButtonActive:function(t,e){t&&(e?t.classList.remove("disabled"):t.classList.add("disabled"))},configureListeners:function(t){window["".concat(t,"EventListener")]("resize",this.onResize),document["".concat(t,"EventListener")]("pointerup",this.onDocumentPointerEvent),document["".concat(t,"EventListener")]("pointerdown",this.onDocumentPointerEvent)},next:function(){this.flickity&&this.flickity.next()},previous:function(){this.flickity&&this.flickity.previous()},select:function(t){this.flickity&&this.flickity.select(t)},getSlideWidth:function(){var t;return(null===(t=this.flickity.selectedElement)||void 0===t||null===(t=t.getBoundingClientRect())||void 0===t?void 0:t.width)||0},getSliderWidth:function(){var t,e;return null!==(t=null===(e=this.$el)||void 0===e||null===(e=e.getBoundingClientRect())||void 0===e?void 0:e.width)&&void 0!==t?t:0},setVisibleItems:function(){if(this.numOfVisibleItems=1,this.flickity.options.keepInBounds){var t=this.getSlideWidth(),e=this.getSliderWidth();t&&e&&(this.numOfVisibleItems=Math.floor(e/t))}},onResize:function(){var t=this;this.flickity&&this.ready&&!this.resize&&(this.resize=!0,this.$nextTick((function(){t.flickity.resize(),t.setVisibleItems(),t.setPreviousButton(),t.setNextButton(),t.resize=!1})))},isCurrentTarget:function(t){var e,n=t.target;if(!(null===(e=this.flickity)||void 0===e?void 0:e.element))return!1;for(;n;){var r,o;if(n===(null===(r=this.flickity)||void 0===r?void 0:r.element))return!0;n=null===(o=n)||void 0===o?void 0:o.parentNode}return!1},onDocumentPointerEvent:function(t){var e,n;this.isCurrentTarget(t)&&!this.$device.isDesktop&&(null===(e=this.flickity)||void 0===e||null===(n=e.handleEvent)||void 0===n||n.call(e,t))},createSlider:function(t){var e=this;this.$refs.slider?(this.initialOptions=l(l(l({},t),this.options),{},{initialIndex:Math.max(this.selectIndex,0)}),this.flickity=new c(this.$refs.slider,l(l({},this.initialOptions),{},{on:{ready:function(){e.ready=!0,e.$nextTick((function(){var t;e.totalSlides=e.flickity.slides.length,e.setVisibleItems(),e.setPreviousButton(),e.setNextButton(),null===(t=e.$el)||void 0===t||t.classList.add("ready")}))},settle:function(){e.isSensitive=!0,e.isDragging=!1,e.isTimerComplete=!1},change:function(t){e.isSensitive=!1,t>e.lastSlideIndex?e.select(e.lastSlideIndex):e.index=t},scroll:function(t){e.onSliderScroll&&e.onSliderScroll(t)},dragStart:function(t){t.stopPropagation(),e.isSensitive=!1,e.isDragging=!0},dragEnd:function(t){t.stopPropagation(),e.isSensitive=!0}}})),this.configureListeners("add")):console.warn("no element to attach slider")}},beforeDestroy:function(){this.configureListeners("remove")}}},1380:function(t,e,n){t.exports={xsmin:"320px",smmin:"680px",mdmin:"984px",lgmin:"1024px",xlmin:"1440px",xsmax:"680px",smmax:"984px",mdmax:"1024px",lgmax:"1440px"}},1408:function(t,e,n){t.exports={}},1460:function(t,e,n){"use strict";n(1408)},1514:function(t,e,n){t.exports={}},1515:function(t,e,n){t.exports={}},1601:function(t,e,n){"use strict";n(1514)},1602:function(t,e,n){"use strict";n(1515)},1714:function(t,e,n){t.exports={}},1846:function(t,e,n){"use strict";n(1714)}}]);