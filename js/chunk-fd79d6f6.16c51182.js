(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd79d6f6"],{"1dde":function(t,e,a){var n=a("d039"),c=a("b622"),r=a("2d00"),i=c("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6c7d":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function c(t,e,a,c,r,i){var s=Object(n["D"])("Navbar"),o=Object(n["D"])("router-view"),l=Object(n["D"])("Footer");return Object(n["y"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(s),Object(n["j"])(o),Object(n["j"])(l)],64)}var r={class:"bg-white sticky-top"},i={class:"container"},s={class:"navbar px-0 navbar-expand-lg navbar-light bg-white"},o=Object(n["i"])("Home"),l=Object(n["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse bg-white custom-header-md-open",id:"navbarNav"},u={class:"navbar-nav"},d={class:"nav-item active"},f=Object(n["i"])("產品列表"),v={class:"d-flex"},g={class:"position-relative"},p=Object(n["g"])("i",{class:"btn btn-sm bi bi-bag"},null,-1),j={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},O=Object(n["g"])("span",{class:"visually-hidden"},"unread messages",-1);function h(t,e,a,c,h,m){var x=Object(n["D"])("router-link");return Object(n["y"])(),Object(n["f"])("div",r,[Object(n["g"])("div",i,[Object(n["g"])("nav",s,[Object(n["j"])(x,{class:"navbar-brand position-absolute",to:"./",style:{left:"50%",transform:"translate(-50%, -50%)",top:"50%"}},{default:Object(n["O"])((function(){return[o]})),_:1}),l,Object(n["g"])("div",b,[Object(n["g"])("ul",u,[Object(n["g"])("li",d,[Object(n["j"])(x,{class:"nav-link",to:"/products"},{default:Object(n["O"])((function(){return[f]})),_:1})])])]),Object(n["g"])("div",v,[Object(n["g"])("div",g,[Object(n["j"])(x,{to:"/cart"},{default:Object(n["O"])((function(){var t;return[p,Object(n["g"])("span",j,[Object(n["i"])(Object(n["G"])(null===(t=h.cartData)||void 0===t?void 0:t.length)+" ",1),O])]})),_:1})])])])])])}a("99af");var m=a("c6e3"),x={data:function(){return{cartData:[]}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("immigrant524","/cart");this.$http.get(e).then((function(e){console.log("getcart",e),t.cartData=e.data.data.carts})).catch((function(t){console.dir(t)}))}},mounted:function(){var t=this;this.getCart(),m["a"].on("get-cart",(function(){t.getCart()}))}},w=a("6b0d"),y=a.n(w);const k=y()(x,[["render",h]]);var D=k,N={class:"bg-dark py-4 text-white"},C=Object(n["h"])('<div class="container"><div class="row justify-content-center"><div class="col-md-6"><h3 class="text-center">MountainBorrow</h3><p class="mt-4 text-center">您戶外最好的朋友</p><p class="mt-4 text-center">歡迎聯繫我們</p></div><ul class="d-flex list-unstyled h4 justify-content-center"><li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li></ul></div><div class="d-flex align-items-center justify-content-end text-white py-2"><p class="mb-0">© 2022 LOGO All Rights Reserved. 僅供練習使用</p></div></div>',1),M=[C];function _(t,e){return Object(n["y"])(),Object(n["f"])("div",N,M)}const A={},B=y()(A,[["render",_]]);var F=B,G={components:{Navbar:D,Footer:F}};const J=y()(G,[["render",c]]);e["default"]=J},8418:function(t,e,a){"use strict";var n=a("a04b"),c=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?c.f(t,i,r(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),c=a("da84"),r=a("d039"),i=a("e8b5"),s=a("861d"),o=a("7b0b"),l=a("07fa"),b=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),v=a("2d00"),g=f("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",O=c.TypeError,h=v>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=d("concat"),x=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)},w=!h||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,c,r,i=o(this),s=u(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?i:arguments[e],x(r)){if(c=l(r),d+c>p)throw O(j);for(a=0;a<c;a++,d++)a in r&&b(s,d,r[a])}else{if(d>=p)throw O(j);b(s,d++,r)}return s.length=d,s}})},c6e3:function(t,e,a){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map((function(t){t(a)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,a)}))}}},c=n();e["a"]=c}}]);
//# sourceMappingURL=chunk-fd79d6f6.16c51182.js.map