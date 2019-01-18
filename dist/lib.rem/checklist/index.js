/*! vue-ydui v1.2.7 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckListItem=t.CheckList=void 0;var o=n(162),r=i(o),c=n(161),a=i(c);t.CheckList=r.default,t.CheckListItem=a.default},1:function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var s=a.computed||(a.computed={});Object.keys(i).forEach(function(e){var t=i[e];s[e]=function(){return t}})}return{esModule:o,exports:r,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&i[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},3:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var c=[],o=0;o<n.parts.length;o++)c.push(r(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:c}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function r(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(g){var r=h++;i=f||(f=o()),t=c.bind(null,i,r,!1),n=c.bind(null,i,r,!0)}else i=o(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function c(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var r=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function a(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document,l=n(4),d={},u=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var o=l(e,t);return i(o),function(t){for(var n=[],r=0;r<o.length;r++){var c=o[r],a=d[c.id];a.refs--,n.push(a)}t?(o=l(e,t),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete d[a.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],c=r[0],a=r[1],s=r[2],l=r[3],d={id:e+":"+o,css:a,media:s,sourceMap:l};i[c]?i[c].parts.push(d):n.push(i[c]={id:c,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),i=function(){return{lock:function(e){o&&l(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){o&&d(e||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||i.test(e)},c=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,i=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-i,r=o+t.offsetHeight;return o>=0&&o<n||r>0&&r<=n},s=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},u=function(e){function t(n,i,o){if(n===i)return void("function"==typeof r&&r());var c=n+o>i?i:n+o;n>i&&(c=n-o<i?i:n-o),e===window?window.scrollTo(c,c):e.scrollTop=c,window.requestAnimationFrame(function(){return t(c,i,o)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var c=Math.abs(n-i),a=Math.ceil(c/o*50);t(n,i,a)};t.pageScroll=n,t.preventScroll=i,t.isIOS=o,t.isColor=r,t.getScrollview=c,t.checkInview=a,t.addClass=l,t.removeClass=d,t.scrollTop=u},44:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-checklist-item",data:function(){return{checked:!1,label:!0}},methods:{changeHandler:function(){this.disabled||(this.checked=!this.checked,this.change(this.val,this.checked),this.$parent.emitInput())},emitChangeHandler:function(){this.label&&(this.change(this.val,this.checked),this.changeHandler())}},props:{change:{type:Function,default:function(){}},disabled:{type:Boolean,default:!1},val:{type:[Boolean,String,Number],required:!0}},mounted:function(){this.$nextTick(this.$parent.checkItem)}}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5);t.default={name:"yd-checklist",data:function(){return{isCheckAll:!1}},props:{value:{type:Array},color:{validator:function(e){return(0,i.isColor)(e)},default:"#4CD864"},align:{type:String,validator:function(e){return["left","right"].indexOf(e)>-1},default:"left"},label:{type:Boolean,default:!0},callback:{type:Function}},methods:{checkItem:function(){var e=this,t=this.$children.filter(function(e){return"yd-checklist-item"===e.$options.name});t.forEach(function(t){t.checked=e.contains(e.value,t.val),t.label=e.label})},contains:function(e,t){for(var n=e.length;n--;)if(e[n]==t)return!0;return!1},emitInput:function(e,t){var n=[],i=this.$children.filter(function(e){return"yd-checklist-item"===e.$options.name}),o=0;i.forEach(function(i){i.disabled?o++:e&&(i.checked=t),i.checked&&n.push(i.val)}),this.isCheckAll=n.length>=i.length-o,this.$emit("input",n)},checkAll:function(e){this.emitInput(!0,e)}},watch:{value:function(e){this.callback&&this.callback(e,this.isCheckAll),this.$nextTick(this.checkItem)}},mounted:function(){this.$on("ydui.checklist.checkall",this.checkAll)}}},147:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-checklist{background-color:#fff;position:relative;z-index:1}.yd-checklist:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#ececec),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-checklist-alignright .yd-checklist-content{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.yd-checklist-alignright .yd-checklist-item-icon{margin-left:0}.yd-checklist-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:1;margin-left:12px}.yd-checklist-item:not(:last-child):after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#ececec),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-checklist-item-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:12px;margin-left:-12px}.yd-checklist-item-icon>input[type=checkbox]{position:absolute;left:-9999em}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon{background-color:currentColor;border-color:currentColor}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon{border-color:#ccc;background-color:#f3f3f3}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon>i{border-color:#ccc}.yd-checklist-icon{border:1px solid #ccc;border-radius:100px;display:block;position:relative;z-index:10;pointer-events:none;width:20px;height:20px}.yd-checklist-icon>i{width:6px;height:12px;content:"";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.yd-checklist-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;color:#333;padding-right:12px}',""])},161:function(e,t,n){var i=n(1)(n(44),n(262),null,null);e.exports=i.exports},162:function(e,t,n){n(328);var i=n(1)(n(45),n(292),null,null);e.exports=i.exports},262:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-checklist-item",on:{click:e.emitChangeHandler}},[e.label?n("div",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked}}),e._v(" "),e._m(0)]):n("label",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked},on:{change:e.changeHandler}}),e._v(" "),e._m(1)]),e._v(" "),n("div",{staticClass:"yd-checklist-content"},[e._t("default")],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])}]}},292:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-checklist",class:"right"==e.align?"yd-checklist-alignright":"",style:{color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},328:function(e,t,n){var i=n(147);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(3)("6ff244c6",i,!0)}})});