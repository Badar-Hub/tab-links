(function(e){function n(n){for(var c,r,o=n[0],l=n[1],i=n[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&d.push(u[r][0]),u[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(n);while(d.length)d.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(n--,1),e=l(l.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b5f94":"0b3bae6f","chunk-2d221e22":"c36fd96e","chunk-2d228940":"82d1d3f2","chunk-941d556e":"2733ee59","chunk-36f0b7f4":"c405bb21","chunk-7ffc18dc":"9fc1a8f7","chunk-ef645d6a":"a3156358","chunk-2d0f11fd":"bf9116b2","chunk-2d21445b":"13e3e597","chunk-9fad1eb8":"05695744","chunk-26c76153":"7dbdd33d","chunk-2a680f72":"041cb751","chunk-40a0b5e8":"a28df2ad","chunk-2d21eb26":"a20d6be6","chunk-e219a2cc":"3e3f7552","chunk-4daf4b57":"a70b1c6a","chunk-55d72dce":"6fd27346","chunk-6bba32fc":"8572b0bf","chunk-77ee6b28":"5241b0d0","chunk-96583a12":"7d83b011","chunk-b756a8e8":"3e4b3822","chunk-c2978350":"8400340b","chunk-a8256318":"6a7e2fa0"}[e]+".js"}function l(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-7ffc18dc":1,"chunk-ef645d6a":1,"chunk-9fad1eb8":1,"chunk-2a680f72":1,"chunk-e219a2cc":1,"chunk-4daf4b57":1,"chunk-6bba32fc":1,"chunk-77ee6b28":1,"chunk-96583a12":1,"chunk-b756a8e8":1,"chunk-c2978350":1,"chunk-a8256318":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0b5f94":"31d6cfe0","chunk-2d221e22":"31d6cfe0","chunk-2d228940":"31d6cfe0","chunk-941d556e":"31d6cfe0","chunk-36f0b7f4":"31d6cfe0","chunk-7ffc18dc":"49dcb250","chunk-ef645d6a":"49dcb250","chunk-2d0f11fd":"31d6cfe0","chunk-2d21445b":"31d6cfe0","chunk-9fad1eb8":"a1d1f4fb","chunk-26c76153":"31d6cfe0","chunk-2a680f72":"12d60844","chunk-40a0b5e8":"31d6cfe0","chunk-2d21eb26":"31d6cfe0","chunk-e219a2cc":"12d60844","chunk-4daf4b57":"12d60844","chunk-55d72dce":"31d6cfe0","chunk-6bba32fc":"0e433876","chunk-77ee6b28":"12d60844","chunk-96583a12":"12d60844","chunk-b756a8e8":"12d60844","chunk-c2978350":"12d60844","chunk-a8256318":"12d60844"}[e]+".css",u=l.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===c||s===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],s=i.getAttribute("data-href");if(s===c||s===u)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],b.parentNode.removeChild(b),t(a)},b.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(e);var d=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(b);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}u[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=c,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)l.d(t,c,function(n){return e[n]}.bind(null,c));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var b=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0e21":function(e,n,t){},"55ac":function(e,n,t){"use strict";t("cd30")},"6b1d":function(e,n,t){"use strict";t("f4a9")},9985:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t("1da1"),r=t("d4ec"),u=t("bee2"),a=(t("96cf"),t("bb0b")),o=function(){function e(){Object(r["a"])(this,e)}return Object(u["a"])(e,null,[{key:"loginUser",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(t){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a["a"].post("".concat(e.baseUrl[0],"/login"),t);case 3:return c=n.sent,n.abrupt("return",c.results.token.access_token);case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));function t(e){return n.apply(this,arguments)}return t}()},{key:"getUsers",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a["a"].get(e.baseUrl[1]);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));function t(){return n.apply(this,arguments)}return t}()}]),e}();o.baseUrl=["auth","users"]},bb0b:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t("1da1"),r=t("d4ec"),u=t("bee2"),a=(t("96cf"),t("d3b7"),t("bc3a")),o=t.n(a),l=function(){function e(){Object(r["a"])(this,e)}return Object(u["a"])(e,null,[{key:"get",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(t){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.axios.get(t);case 3:if(c=n.sent,!c){n.next=6;break}return n.abrupt("return",c.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n["catch"](0),e.handleError(n.t0),n.abrupt("return",Promise.reject(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));function t(e){return n.apply(this,arguments)}return t}()},{key:"post",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(t,c){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.axios.post(t,c);case 3:if(r=n.sent,!r){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n["catch"](0),e.handleError(n.t0),n.abrupt("return",Promise.reject(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));function t(e,t){return n.apply(this,arguments)}return t}()},{key:"put",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(t,c){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.axios.put(t,c);case 3:if(r=n.sent,!r){n.next=6;break}return n.abrupt("return",r.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n["catch"](0),e.handleError(n.t0),n.abrupt("return",Promise.reject(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));function t(e,t){return n.apply(this,arguments)}return t}()},{key:"delete",value:function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(t){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.axios.delete(t);case 3:if(c=n.sent,!c){n.next=6;break}return n.abrupt("return",c.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n["catch"](0),e.handleError(n.t0),n.abrupt("return",Promise.reject(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));function t(e){return n.apply(this,arguments)}return t}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();l.axios=o.a.create({baseURL:"https://tab-links.cf/api/v1/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"x-api-key":"1221"}})},cd30:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),r=(t("b0c0"),t("cf05")),u=t.n(r),a={class:"column justify-center login-user"},o=Object(c["j"])("div",{class:"row logo full-width justify-center"},[Object(c["j"])("img",{src:u.a})],-1),l=Object(c["j"])("div",{class:"row full-width"},[Object(c["j"])("hr",{class:"full-width"})],-1),i={class:"col-xs-12 q-my-sm"},s={class:"col-xs-12 q-my-sm"},d={class:"col-xs-12 q-my-md"},b={class:"row"},f=Object(c["j"])("img",{src:u.a},null,-1),h=Object(c["j"])("h6",{class:"q-my-xs cl-white"}," Tech Origin ",-1),p=Object(c["j"])("hr",null,null,-1);function j(e,n,t,r,u,j){var m=Object(c["L"])("q-input"),k=Object(c["L"])("q-btn"),O=Object(c["L"])("q-card-section"),v=Object(c["L"])("q-card"),g=Object(c["L"])("q-avatar"),y=Object(c["L"])("router-link"),w=Object(c["L"])("q-toolbar-title"),A=Object(c["L"])("q-toolbar"),x=Object(c["L"])("q-route-tab"),R=Object(c["L"])("q-tabs"),I=Object(c["L"])("q-header"),E=Object(c["L"])("Sidebar"),M=Object(c["L"])("router-view"),P=Object(c["L"])("q-page-container"),B=Object(c["L"])("q-layout");return Object(c["F"])(),Object(c["i"])("div",null,[Object(c["V"])(Object(c["j"])("div",null,[Object(c["j"])("div",a,[Object(c["l"])(v,null,{default:Object(c["U"])((function(){return[Object(c["l"])(O,null,{default:Object(c["U"])((function(){return[Object(c["j"])("div",{class:"row",onKeypress:n[2]||(n[2]=Object(c["W"])((function(){return r.loginUser&&r.loginUser.apply(r,arguments)}),["enter"]))},[o,l,Object(c["j"])("div",i,[Object(c["l"])(m,{label:"Email",type:"email",modelValue:r.user.email,"onUpdate:modelValue":n[0]||(n[0]=function(e){return r.user.email=e})},null,8,["modelValue"])]),Object(c["j"])("div",s,[Object(c["l"])(m,{label:"Password",type:"password",modelValue:r.user.password,"onUpdate:modelValue":n[1]||(n[1]=function(e){return r.user.password=e})},null,8,["modelValue"])]),Object(c["j"])("div",d,[Object(c["l"])(k,{class:"full-width",loading:r.isLoading,label:"Login",onClick:r.loginUser,color:"primary"},null,8,["loading","onClick"])])],32)]})),_:1})]})),_:1})])],512),[[c["S"],!r.isLoggenIn]]),Object(c["V"])(Object(c["j"])("div",null,[Object(c["l"])(B,{view:"lHh Lpr lFf"},{default:Object(c["U"])((function(){return[Object(c["l"])(I,{elevated:"",class:"text-white q-px-sm","height-hint":"98"},{default:Object(c["U"])((function(){return[Object(c["l"])(A,null,{default:Object(c["U"])((function(){return[Object(c["l"])(w,null,{default:Object(c["U"])((function(){return[Object(c["l"])(y,{class:"no-underline",to:"/"},{default:Object(c["U"])((function(){return[Object(c["j"])("div",b,[Object(c["l"])(g,null,{default:Object(c["U"])((function(){return[f]})),_:1}),h])]})),_:1})]})),_:1}),Object(c["l"])(k,{onClick:n[3]||(n[3]=function(e){return r.leftDrawerOpen=!r.leftDrawerOpen}),icon:"menu",size:"14px"})]})),_:1}),p,Object(c["V"])(Object(c["l"])(R,{align:"left"},{default:Object(c["U"])((function(){return[(Object(c["F"])(!0),Object(c["i"])(c["a"],null,Object(c["J"])(r.subRoutes,(function(e,n){return Object(c["F"])(),Object(c["i"])("div",{key:n},[Object(c["l"])(x,{to:e.path,label:e.name},null,8,["to","label"])])})),128))]})),_:1},512),[[c["S"],r.subRoutes]])]})),_:1}),Object(c["l"])(E,{modelValue:r.leftDrawerOpen,"onUpdate:modelValue":n[4]||(n[4]=function(e){return r.leftDrawerOpen=e})},null,8,["modelValue"]),Object(c["l"])(P,{class:"q-mx-md"},{default:Object(c["U"])((function(){return[Object(c["l"])(M)]})),_:1})]})),_:1})],512),[[c["S"],r.isLoggenIn]])])}var m=t("1da1"),k=(t("ac1f"),t("1276"),t("7db0"),t("96cf"),{class:"sidebar"}),O={class:"row justify-center q-px-sm"},v=Object(c["j"])("img",{class:"logo",src:u.a},null,-1),g=Object(c["j"])("div",{class:"row"},[Object(c["j"])("hr",{class:"full-width"})],-1),y=Object(c["j"])("div",{class:"row q-px-xl q-my-sm button"},[Object(c["j"])("h6",{class:"q-my-sm cl-white"},"Setup")],-1),w=Object(c["j"])("div",{class:"row q-px-xl q-my-sm button"},[Object(c["j"])("h6",{class:"q-my-sm cl-white"},"Invoicing")],-1),A=Object(c["j"])("div",{class:"row q-px-xl q-my-sm button"},[Object(c["j"])("h6",{class:"q-my-sm cl-white"},"Accounting")],-1),x=Object(c["j"])("div",{class:"row q-px-xl q-my-sm button"},[Object(c["j"])("h6",{class:"q-my-sm cl-white"},"Logout")],-1),R=[x];function I(e,n,t,r,u,a){var o=Object(c["L"])("router-link"),l=Object(c["L"])("q-drawer");return Object(c["F"])(),Object(c["i"])("div",k,[Object(c["l"])(l,Object(c["t"])(e.$attrs,{"show-if-above":"",side:"left",bordered:""}),{default:Object(c["U"])((function(){return[Object(c["j"])("div",O,[Object(c["l"])(o,{to:"/"},{default:Object(c["U"])((function(){return[v]})),_:1})]),g,Object(c["l"])(o,{class:"button",to:"/setup"},{default:Object(c["U"])((function(){return[y]})),_:1}),Object(c["l"])(o,{class:"button",to:"/invoicing"},{default:Object(c["U"])((function(){return[w]})),_:1}),Object(c["l"])(o,{class:"button",to:"/accounting"},{default:Object(c["U"])((function(){return[A]})),_:1}),Object(c["j"])("div",{onClick:n[0]||(n[0]=function(){return e.logout&&e.logout.apply(e,arguments)}),class:"button"},R)]})),_:1},16)])}var E=t("6c02"),M=Object(c["m"])({setup:function(){var e=Object(E["d"])(),n=Object(c["e"])((function(){return e.options.routes})),t=function(){localStorage.removeItem("token"),e.push("/"),window.location.reload()};return{router:e,routes:n,logout:t}}}),P=(t("55ac"),t("9404")),B=t("93dc"),C=t.n(B);M.render=I;var Q=M;C()(M,"components",{QDrawer:P["a"]});var H=t("9985"),D=t("b3fe"),G={components:{Sidebar:Q},name:"App",setup:function(){var e=Object(E["c"])(),n=Object(E["d"])(),t=Object(c["I"])(!1),r=Object(D["a"])(),u=Object(c["I"])([]),a=Object(c["I"])({email:"",password:""}),o=Object(c["e"])((function(){return!!localStorage.getItem("token")})),l=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.value=!0,e.next=4,H["a"].loginUser(a.value);case 4:n=e.sent,localStorage.setItem("token",n),t.value=!1,window.location.reload(),r.notify({color:"primary",message:"User has been loged in successfully!"}),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),r.notify({color:"red",message:"An error occurred"}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c["T"])((function(){return e.fullPath}),(function(){return i()}));var i=function(){var t,c=e.fullPath,r=e.fullPath.split("/");r&&(c="/".concat(r[1])),u.value=null===(t=n.options.routes.find((function(e){return e.path===c})))||void 0===t?void 0:t.children};return Object(c["C"])((function(){i()})),{user:a,loginUser:l,isLoading:t,subRoutes:u,isLoggenIn:o,leftDrawerOpen:Object(c["I"])(!1)}}},J=(t("6b1d"),t("f09f")),S=t("a370"),U=t("27f9"),q=t("9c40"),Y=t("4d5a"),z=t("e359"),L=t("65c6"),Z=t("6ac5"),N=t("cb32"),K=t("429b"),V=t("7867"),T=t("09e3");G.render=j;var X=G;C()(G,"components",{QCard:J["a"],QCardSection:S["a"],QInput:U["a"],QBtn:q["a"],QLayout:Y["a"],QHeader:z["a"],QToolbar:L["a"],QToolbarTitle:Z["a"],QAvatar:N["a"],QTabs:K["a"],QRouteTab:V["a"],QPageContainer:T["a"]});t("d3b7"),t("3ca3"),t("ddb0");var F={class:"home"},W=Object(c["j"])("h3",{class:"q-my-sm"},"Dashboard",-1),_=[W];function $(e,n,t,r,u,a){return Object(c["F"])(),Object(c["i"])("div",F,_)}var ee=Object(c["m"])({name:"Home"});ee.render=$;var ne=ee,te=[{path:"/",name:"Home",component:ne},{path:"/create",name:"Create",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-36f0b7f4"),t.e("chunk-40a0b5e8"),t.e("chunk-e219a2cc")]).then(t.bind(null,"d879"))}},{path:"/inventory",name:"Inventory",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-36f0b7f4"),t.e("chunk-ef645d6a"),t.e("chunk-2d21445b")]).then(t.bind(null,"afdd"))}},{path:"/accounts",name:"Accounts",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-36f0b7f4"),t.e("chunk-7ffc18dc")]).then(t.bind(null,"8292"))}},{path:"/setup",name:"Setup",component:function(){return t.e("chunk-2d228940").then(t.bind(null,"da7d"))},redirect:{name:"Brands"},children:[{path:"/setup/brands",name:"Brands",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-b756a8e8")]).then(t.bind(null,"b6e6"))}},{path:"/setup/categories",name:"Categories",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-c2978350")]).then(t.bind(null,"e130"))}},{path:"/setup/products",name:"Products",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-4daf4b57")]).then(t.bind(null,"4b5d"))}},{path:"/setup/vendors",name:"Vendors",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-77ee6b28")]).then(t.bind(null,"3341"))}},{path:"/setup/customers",name:"Customers",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-2a680f72")]).then(t.bind(null,"4209"))}},{path:"/setup/warehouses",name:"Warehouses",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-a8256318")]).then(t.bind(null,"914c"))}}]},{path:"/invoicing",name:"Invoicing",component:function(){return t.e("chunk-2d221e22").then(t.bind(null,"cbf3"))},redirect:{name:"Invoices"},children:[{path:"/invoicing/invoices",name:"Invoices",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-6bba32fc")]).then(t.bind(null,"17f5"))}},{path:"/invoicing/new-invoice",name:"New Invoice",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-36f0b7f4"),t.e("chunk-40a0b5e8")]).then(t.bind(null,"79ec"))}},{path:"/invoicing/sales-return",name:"Sales Return",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-96583a12")]).then(t.bind(null,"aad6"))}}]},{path:"/accounting",name:"Accounting",component:function(){return t.e("chunk-2d0b5f94").then(t.bind(null,"1ad2"))},redirect:{name:"Customer Ledger"},children:[{path:"/accounting/customer-ledger",name:"Customer Ledger",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-55d72dce")]).then(t.bind(null,"02d2"))}},{path:"/accounting/vendor-ledger",name:"Vendor Ledger",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-26c76153")]).then(t.bind(null,"0308"))}},{path:"/accounting/customer-ledger/:id",name:"Customer Records",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-36f0b7f4"),t.e("chunk-40a0b5e8"),t.e("chunk-2d21eb26")]).then(t.bind(null,"d752"))}},{path:"/accounting/vendors/:id",name:"Vendor Records",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-36f0b7f4"),t.e("chunk-ef645d6a"),t.e("chunk-2d0f11fd")]).then(t.bind(null,"9efa"))}}]},{path:"/invoice",name:"Invoice",component:function(){return Promise.all([t.e("chunk-941d556e"),t.e("chunk-9fad1eb8"),t.e("chunk-36f0b7f4"),t.e("chunk-40a0b5e8")]).then(t.bind(null,"79ec"))}}],ce=Object(E["a"])({history:Object(E["b"])("/"),routes:te}),re=ce,ue=t("b05d"),ae=(t("0e21"),t("e54f"),t("2a19")),oe=t("436b"),le={plugins:{Notify:ae["a"],Dialog:oe["a"]},config:{notify:{},dialog:{}}};Object(c["f"])(X).use(ue["a"],le).use(re).mount("#app")},cf05:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAadQTFRFAAAA/1Z0/wg0/1V0/9rh/yJJ/x9H/9jf/36V/3iQ/97k/yNK/x5G/9Xd/32U/2+I/+Hm/yFJ/xlC/9be/4GY/3CJ/yRL/xdB/9DY/2qE/93j/xhC/8jS/2F9/xI8/3+W/198/xE7/8HM/1l3/+Dm/xM9/73J/4CX/1Vz/9/l/w04/1Ry/9vi/yVM/w45/7LA/3yU/0tr/yBI/ww3/6+9/0Rl/wk1/yZN/6W1/5ir/zBV/zNX/zZZ/zZa/zpd/zld/zte/0Fj/0Bi/0Vm/05t/1Nx/1t4/1p4/2iD/2eC/3WO/3SN/4KY/4uf/4+j/46i/5mr/5ut/5qs/5yu/6e3/6i3/6u6/7PB/7TC/7fE/8LN/8bQ/8/X/87W/9Tc/wo2/ws2/xA6/xU+/xY//xtE/xxF/6Cx/z9h/6S0/0Nl/6y7/0Jk/627/0pq/7G//7vH/7zI/1d1/8DL/116/2mE/xdA/22H/26I/3aP/56v/+bq/7bD/01t/zxf/zRY/+zv/5Om/y9U/5Kl/+rt/ylP/+Tp/ypQ/9zi/x1G/3uT/9ng/ydN/2uF3BcIfwAAAI10Uk5TAP///////////////////+D/////////////////////////8P////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Q/////zD///9Q/7D/////////JuEKhAAAB85JREFUeJzt3fdzVFUcQHFcUTQgAgZQIkooRgPGAqiUUIVQAgESQklIVukl9Bp6r3+0+5BRERZ2w31z8+45n9/Cu+/uzvfMnX2TzCxjxkiSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEkqivdKhfN+7JkV3tgPYjes14fjYs+s+D6KHbFeH8eeWAIaxseuWJ8Jn8SeWAomxs5Yn09jzysJkybH7liPKZ/FnlcaGmOHrMfU2NNKRMO02CVrN/3z2NNKRYEe4L+IPatkzCjMUW/6Mvas0lGYB/iZsSeVkIaCPMB/5UEP6OvY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"},f4a9:function(e,n,t){}});
//# sourceMappingURL=app.484803e9.js.map