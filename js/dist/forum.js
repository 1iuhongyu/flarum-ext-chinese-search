module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionsSearchSource"]},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),u=r.n(i),s=r(2),f=r.n(s);o.a.initializers.add("flarum-ext-chinese-search",function(){u.a.prototype.loadResults=function(e){var t=o.a.preloadedApiDocument(),r=this.requestParams();if(r.page={offset:e},r.include=r.include.join(","),t&&void 0!==r.filter.q&&-1===r.filter.q.indexOf("is:")&&-1===r.filter.q.indexOf("tag:")&&-1===r.filter.q.indexOf("author:")){var n=o.a.store.find("xun/discussions",r);return m.deferred().resolve(n).promise}return t?m.deferred().resolve(t).promise:void 0!==r.filter.q&&-1===r.filter.q.indexOf("is:")&&-1===r.filter.q.indexOf("tag:")&&-1===r.filter.q.indexOf("author:")?o.a.store.find("xun/discussions",r):o.a.store.find("discussions",r)},f.a.prototype.search=function(e){var t=this;e=e.toLowerCase(),this.results[e]=[];var r={filter:{q:e},page:{limit:3},include:"mostRelevantPost"};return o.a.store.find("xun/discussions",r).then(function(r){return t.results[e]=r})}})}]);
//# sourceMappingURL=forum.js.map