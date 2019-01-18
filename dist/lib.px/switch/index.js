/*! vue-ydui v1.2.7 by YDCSS (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var o=r(213),i=n(o);t.Switch=i.default},1:function(e,t){e.exports=function(e,t,r,n){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var c=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(i(r.parts[o]));l[r.id]={id:r.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(v){var i=p++;n=f||(f=o()),t=a.bind(null,n,i,!1),r=a.bind(null,n,i,!0)}else n=o(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document,d=r(4),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var o=d(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,r.push(s)}t?(o=d(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var w=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],d=i[3],l={id:e+":"+o,css:s,media:c,sourceMap:d};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(r){t||(t=!0,(r||document).addEventListener("touchmove",e))},unlock:function(r){t=!1,(r||document).removeEventListener("touchmove",e)}}}(),n=function(){return{lock:function(e){o&&d(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){o&&l(e||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||n.test(e)},a=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},s=function(e,t){var r=e===window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-n,i=o+t.offsetHeight;return o>=0&&o<r||i>0&&i<=r},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},d=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},l=function(e,t){if(c(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}},u=function(e){function t(r,n,o){if(r===n)return void("function"==typeof i&&i());var a=r+o>n?n:r+o;r>n&&(a=r-o<n?n:r-o),e===window?window.scrollTo(a,a):e.scrollTop=a,window.requestAnimationFrame(function(){return t(a,n,o)})}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var a=Math.abs(r-n),s=Math.ceil(a/o*50);t(r,n,s)};t.pageScroll=r,t.preventScroll=n,t.isIOS=o,t.isColor=i,t.getScrollview=a,t.checkInview=s,t.addClass=d,t.removeClass=l,t.scrollTop=u},95:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);t.default={name:"yd-switch",data:function(){return{checked:this.value}},props:{value:[String,Number,Boolean],disabled:{type:Boolean,default:!1},color:{validator:function(e){return!e||(0,n.isColor)(e)},default:"#4CD864"},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},size:{validator:function(e){return["small","normal","large"].indexOf(e)>-1},default:"normal"},val:{type:[Boolean,String,Number]},callback:{type:Function,default:function(){}}},watch:{checked:function(e){this.$emit("input",e),this.callback(e,this.val)},value:function(e){this.checked=e}}}},137:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.yd-switch{position:relative;z-index:10;display:block;width:48px;height:27px;left:0;border:1px solid #dfdfdf;border-radius:16px;-webkit-appearance:none}.yd-switch:after,.yd-switch:before{content:"";position:absolute;top:0;left:0;height:25px;border-radius:15px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-switch:before{width:46px;background-color:#fdfdfd}.yd-switch:after{width:25px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.yd-switch:checked{border-color:currentColor;background-color:currentColor}.yd-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.yd-switch:checked:after{-webkit-transform:translateX(21px);transform:translateX(21px)}.yd-switch-small{width:42px;height:22px}.yd-switch-small:after,.yd-switch-small:before{height:20px}.yd-switch-small:before{width:40px}.yd-switch-small:after{width:20px}.yd-switch-small:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.yd-switch-large{width:52px;height:32px}.yd-switch-large:after,.yd-switch-large:before{height:30px}.yd-switch-large:before{width:50px}.yd-switch-large:after{width:30px}.yd-switch-large:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.yd-switch[disabled]{opacity:.5}',""])},213:function(e,t,r){r(318);var n=r(1)(r(95),r(274),null,null);e.exports=n.exports},274:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"yd-switch",class:"yd-switch-"+e.size,style:{color:e.color},attrs:{type:"checkbox","true-value":e.trueValue,"false-value":e.falseValue,disabled:e.disabled},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e._q(e.checked,e.trueValue)},on:{change:function(t){var r=e.checked,n=t.target,o=n.checked?e.trueValue:e.falseValue;if(Array.isArray(r)){var i=null,a=e._i(r,i);n.checked?a<0&&(e.checked=r.concat([i])):a>-1&&(e.checked=r.slice(0,a).concat(r.slice(a+1)))}else e.checked=o}}})},staticRenderFns:[]}},318:function(e,t,r){var n=r(137);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("3d8c26ff",n,!0)}})});