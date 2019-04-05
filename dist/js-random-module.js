/*!
 * JS RANDOM MODULE (JavaScript Library)
 *   js-random-module
 * Version 0.2.3
 * Repository https://github.com/yama-dev/js-random-module
 * Copyright yama-dev
 * Licensed MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RANDOM_MODULE=e():t.RANDOM_MODULE=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"default",function(){return r});var r=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r={elemWrap:"body",elemItems:e||".js-bg-item",durationX2:2e3,interval:1e3,addClassName:["active"],autoStart:!0,positionRandom:!0,repeat:!0,afterTheDecimalPoint:2};this.Config=i(r,o),this.Version="0.2.2",this.State={ActionCount:0},"complete"==document.readyState?this.SetModule():(document.addEventListener("DOMContentLoaded",function(){n.SetModule()}),window.addEventListener("load",function(){}))}var e,n,r;return e=t,r=[{key:"use",value:function(e){if(t.prototype.plugins||(t.prototype.plugins=[]),"function"==typeof e.install)t.prototype.plugins.push(i({},e.install(this)));else{if("function"!=typeof e)throw new Error("Not Install Plugin.");t.prototype.plugins.push(i({},e(this)))}}}],(n=[{key:"SetModule",value:function(){if(this.SetDom(),this.SetDomStyle(),this.elemItemsLenght<=0)throw new Error("Not Found Elements.");this.Config.autoStart&&this.StartAction()}},{key:"SetDom",value:function(){this.elemWrap=document.querySelector(this.Config.elemWrap),this.elemItems=Array.prototype.slice.call(document.querySelectorAll(this.Config.elemWrap+" "+this.Config.elemItems)),this.elemItemsLenght=this.elemItems.length-1,this.checkElemList=[];for(var t=0;t<=this.elemItemsLenght;t++)this.checkElemList[t]=!0}},{key:"SetDomStyle",value:function(){var t=this;Array.prototype.forEach.call(this.elemItems,function(e){var n=t.Round(t.elemWrap.clientHeight*t.Random()),i=t.Round(t.elemWrap.clientWidth*t.Random());t.Config.positionRandom&&(e.style.top=n+"px",e.style.left=i+"px")})}},{key:"Random",value:function(){return Math.random()}},{key:"Round",value:function(t){return Math.round(t*Math.pow(10,this.Config.afterTheDecimalPoint))/Math.pow(10,this.Config.afterTheDecimalPoint)}},{key:"RandomSelect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(e+1-t)+t)}},{key:"ChoiceClassName",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.Config.addClassName,i=[],o=[],r=n.length,s=e<r?e:r;s-- >0;){var a=Math.random()*r|0;o[s]=i[a]||n[a],--r,i[a]=i[r]||n[r]}return o}},{key:"RemoveClassName",value:function(t){this.Config.addClassName.map(function(e){t.classList.remove(e)})}},{key:"StartAction",value:function(){var t=this;this.Interval=setInterval(function(){t.Decision()},this.Config.interval)}},{key:"StopAction",value:function(){clearInterval(this.Interval)}},{key:"Update",value:function(){if(this.StopAction(),this.State.ActionCount=0,this.SetDom(),this.SetDomStyle(),this.elemItemsLenght<=0)throw new Error("Not Found Elements.");this.Config.autoStart&&this.StartAction()}},{key:"Decision",value:function(){if(!this.Config.repeat&&this.elemItemsLenght<this.State.ActionCount)return this.StopAction(),!1;var t=this.RandomSelect(0,this.elemItemsLenght);this.checkElemList[t]?(this.State.ActionCount++,this.checkElemList[t]=!1,this.Action(t)):this.Decision()}},{key:"Action",value:function(t){var e=this;this.Motion(t),this.Config.repeat&&setTimeout(function(){e.RemoveClassName(e.elemItems[t]),e.plugins&&e.plugins.map(function(n){n.end&&n.end(t,e.elemItems[t],e)})},.5*this.Config.durationX2),this.Config.repeat&&setTimeout(function(){e.checkElemList[t]=!0,e.plugins&&e.plugins.map(function(n){n.reset&&n.reset(t,e.elemItems[t],e)})},this.Config.durationX2)}},{key:"Motion",value:function(t){var e=this,n=this.Round(this.elemWrap.clientHeight*this.Random()),i=this.Round(this.elemWrap.clientWidth*this.Random()),o=.5*this.elemItems[t].clientWidth,r=.5*this.elemItems[t].clientHeight;this.Config.positionRandom&&(this.elemItems[t].style.top=n-r+"px",this.elemItems[t].style.left=i-o+"px"),this.elemItems[t].classList.add(this.ChoiceClassName()),this.plugins&&this.plugins.map(function(n){n.start&&n.start(t,e.elemItems[t],e)})}}])&&o(e.prototype,n),r&&o(e,r),t}()}]).default});