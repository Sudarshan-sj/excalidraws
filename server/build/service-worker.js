!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}([function(e,t){importScripts("/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/workbox/"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{'revision':'419053419839ff6761e86e9f952fd70e','url':'./index.html'},{'revision':null,'url':'./static/css/47.7d7d1741.chunk.css'},{'revision':null,'url':'./static/css/main.7f10d5b6.chunk.css'},{'revision':null,'url':'./static/js/0.680779d7.chunk.js'},{'revision':null,'url':'./static/js/1.1e2d2b98.chunk.js'},{'revision':null,'url':'./static/js/47.8078b3b1.chunk.js'},{'revision':null,'url':'./static/js/48.cf4ead93.chunk.js'},{'revision':null,'url':'./static/js/49.4f8bf9fd.chunk.js'},{'revision':null,'url':'./static/js/50.dfa729b8.chunk.js'},{'revision':null,'url':'./static/js/51.fc7ea164.chunk.js'},{'revision':null,'url':'./static/js/52.978c1271.chunk.js'},{'revision':null,'url':'./static/js/53.baa2fb6b.chunk.js'},{'revision':null,'url':'./static/js/54.12038b50.chunk.js'},{'revision':null,'url':'./static/js/55.616f33d0.chunk.js'},{'revision':null,'url':'./static/js/56.af316b5d.chunk.js'},{'revision':null,'url':'./static/js/57.48b63194.chunk.js'},{'revision':null,'url':'./static/js/58.3f46a3f6.chunk.js'},{'revision':null,'url':'./static/js/59.2b29dd95.chunk.js'},{'revision':null,'url':'./static/js/60.27d0b900.chunk.js'},{'revision':null,'url':'./static/js/bug-issue-template.10b79443.chunk.js'},{'revision':null,'url':'./static/js/firebase.1e0917c4.chunk.js'},{'revision':null,'url':'./static/js/i18n-ar-SA-json.3de83e3c.chunk.js'},{'revision':null,'url':'./static/js/i18n-bg-BG-json.cf384a98.chunk.js'},{'revision':null,'url':'./static/js/i18n-ca-ES-json.991c6768.chunk.js'},{'revision':null,'url':'./static/js/i18n-cs-CZ-json.83d6a73d.chunk.js'},{'revision':null,'url':'./static/js/i18n-da-DK-json.87fcf94e.chunk.js'},{'revision':null,'url':'./static/js/i18n-de-DE-json.0dab4173.chunk.js'},{'revision':null,'url':'./static/js/i18n-el-GR-json.b93e32a9.chunk.js'},{'revision':null,'url':'./static/js/i18n-es-ES-json.0242c60b.chunk.js'},{'revision':null,'url':'./static/js/i18n-fa-IR-json.19f69e90.chunk.js'},{'revision':null,'url':'./static/js/i18n-fi-FI-json.0e54c332.chunk.js'},{'revision':null,'url':'./static/js/i18n-fr-FR-json.f245a2e0.chunk.js'},{'revision':null,'url':'./static/js/i18n-he-IL-json.a4bb3a44.chunk.js'},{'revision':null,'url':'./static/js/i18n-hi-IN-json.e6e1c2b4.chunk.js'},{'revision':null,'url':'./static/js/i18n-hu-HU-json.e8b3465e.chunk.js'},{'revision':null,'url':'./static/js/i18n-id-ID-json.836686b4.chunk.js'},{'revision':null,'url':'./static/js/i18n-it-IT-json.e5db86d0.chunk.js'},{'revision':null,'url':'./static/js/i18n-ja-JP-json.01760abc.chunk.js'},{'revision':null,'url':'./static/js/i18n-kab-KAB-json.3fc61f44.chunk.js'},{'revision':null,'url':'./static/js/i18n-kk-KZ-json.50412eb5.chunk.js'},{'revision':null,'url':'./static/js/i18n-ko-KR-json.08bce574.chunk.js'},{'revision':null,'url':'./static/js/i18n-lv-LV-json.4dda3552.chunk.js'},{'revision':null,'url':'./static/js/i18n-my-MM-json.d998986c.chunk.js'},{'revision':null,'url':'./static/js/i18n-nb-NO-json.edcf6ea3.chunk.js'},{'revision':null,'url':'./static/js/i18n-nl-NL-json.d217671d.chunk.js'},{'revision':null,'url':'./static/js/i18n-nn-NO-json.1750c380.chunk.js'},{'revision':null,'url':'./static/js/i18n-oc-FR-json.0fd66463.chunk.js'},{'revision':null,'url':'./static/js/i18n-pa-IN-json.cd3a261b.chunk.js'},{'revision':null,'url':'./static/js/i18n-pl-PL-json.2497b040.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-BR-json.56e80445.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-PT-json.d5ae947b.chunk.js'},{'revision':null,'url':'./static/js/i18n-ro-RO-json.d9f35ed6.chunk.js'},{'revision':null,'url':'./static/js/i18n-ru-RU-json.7c5d360a.chunk.js'},{'revision':null,'url':'./static/js/i18n-sk-SK-json.3c373bdb.chunk.js'},{'revision':null,'url':'./static/js/i18n-sv-SE-json.23b68471.chunk.js'},{'revision':null,'url':'./static/js/i18n-tr-TR-json.0c964bab.chunk.js'},{'revision':null,'url':'./static/js/i18n-uk-UA-json.c9b67e26.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-CN-json.0bd059fc.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-TW-json.0f5cee95.chunk.js'},{'revision':null,'url':'./static/js/image.c38ee543.chunk.js'},{'revision':null,'url':'./static/js/main.53248aa8.chunk.js'},{'revision':null,'url':'./static/js/pwacompat.5c88e945.chunk.js'},{'revision':null,'url':'./static/js/runtime-main.892d6384.js'},{'revision':null,'url':'./static/js/socketIoClient.82a76365.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]})),self.addEventListener("fetch",(e=>{if("POST"===e.request.method&&e.request.url.endsWith("/web-share-target"))return e.respondWith((async()=>{const t=(await e.request.formData()).get("file"),r=await caches.open("web-share-target");return await r.put("shared-file",new Response(t)),Response.redirect("/?web-share-target",303)})())}))}]);
//# sourceMappingURL=service-worker.js.map