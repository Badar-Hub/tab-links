(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4daf4b57"],{"0378":function(e,t,n){"use strict";var r=n("53ca"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("7db0"),n("a434"),n("7a23")),c=n("d882"),u=n("f6ba"),o=n("cdf5"),l=n("e22d");t["a"]=Object(a["m"])({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup:function(e,t){var n=t.slots,s=t.emit,i=Object(a["n"])(),d=Object(a["I"])(null),f=0,b=[];function p(t){var n=[],a="boolean"===typeof t?t:!0!==e.noErrorFocus;f++;for(var c=function(e,t){s("validation-"+(!0===e?"success":"error"),t)},u=function(t){var r=b[t],u=r.validate();if("function"===typeof u.then)n.push(u.then((function(e){return{valid:e,comp:r}}),(function(e){return{valid:!1,comp:r,error:e}})));else if(!0!==u){if(!1===e.greedy)return c(!1,r),!0===a&&"function"===typeof r.focus&&r.focus(),{v:Promise.resolve(!1)};n.push({valid:!1,comp:r})}},o=0;o<b.length;o++){var l=u(o);if("object"===Object(r["a"])(l))return l.v}if(0===n.length)return c(!0),Promise.resolve(!0);var i=f;return Promise.all(n).then((function(e){if(i===f){var t=e.filter((function(e){return!0!==e.valid}));if(0===t.length)return c(!0),!0;var n=t[0],r=n.valid,u=n.comp;return c(!1,u),!0===a&&!0!==r&&"function"===typeof u.focus&&u.focus(),!1}}))}function v(){f++,b.forEach((function(e){"function"===typeof e.resetValidation&&e.resetValidation()}))}function m(t){void 0!==t&&Object(c["k"])(t),p().then((function(n){!0===n&&(void 0!==e.onSubmit?s("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function j(t){void 0!==t&&Object(c["k"])(t),s("reset"),Object(a["u"])((function(){v(),!0===e.autofocus&&!0!==e.noResetFocus&&O()}))}function O(){Object(u["a"])((function(){if(null!==d.value){var e=d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(function(e){return e.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))}return Object(a["G"])(l["a"],{bindComponent:function(e){b.push(e)},unbindComponent:function(e){var t=b.indexOf(e);t>-1&&b.splice(t,1)}}),Object(a["C"])((function(){!0===e.autofocus&&O()})),Object.assign(i.proxy,{validate:p,resetValidation:v,submit:m,reset:j,focus:O,getValidationComponents:function(){return b}}),function(){return Object(a["p"])("form",{class:"q-form",ref:d,onSubmit:m,onReset:j},Object(o["d"])(n.default))}}})},"123b":function(e,t,n){"use strict";var r=n("7a23"),a={class:"custom-dialog"},c={class:"row full-width justify-between"},u={class:"text-h6 q-my-none"};function o(e,t,n,o,l,s){var i=Object(r["L"])("q-btn"),d=Object(r["L"])("q-card-section"),f=Object(r["L"])("q-card");return Object(r["F"])(),Object(r["i"])("div",a,[Object(r["V"])(Object(r["l"])(f,{class:"modal"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(d,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",c,[Object(r["j"])("div",u,Object(r["O"])(e.title),1),Object(r["l"])(i,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})])]})),_:1})],4),Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(d,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["K"])(e.$slots,"default")]})),_:3})],4)]})),_:3},512),[[r["S"],e.modelValue]])])}var l=Object(r["m"])({props:{title:{type:String},width:{type:String,default:function(){return"650px"}},modelValue:{type:Boolean}},emits:["close"]}),s=(n("e0a1"),n("f09f")),i=n("a370"),d=n("9c40"),f=n("93dc"),b=n.n(f);l.render=o;t["a"]=l;b()(l,"components",{QCard:s["a"],QCardSection:i["a"],QBtn:d["a"]})},3588:function(e,t,n){},"46f1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("99af"),n("96cf"),n("bb0b")),o=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getProducts",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newProducts",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateProduct",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();o.baseUrl="products"},"4b5d":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"q-pa-md"},c={class:"row"},u=Object(r["j"])("div",{class:"col-xs-6 text-left"},[Object(r["j"])("h5",{class:"q-my-sm"},"Product List")],-1),o={class:"col-xs-6 text-right"},l={class:"row"},s={class:"row"};function i(e,t,n,i,d,f){var b=Object(r["L"])("q-btn"),p=Object(r["L"])("Table"),v=Object(r["L"])("NewProductForm"),m=Object(r["L"])("modal");return Object(r["F"])(),Object(r["i"])("div",null,[Object(r["j"])("div",a,[Object(r["j"])("div",c,[u,Object(r["j"])("div",o,[Object(r["l"])(b,{onClick:e.newProductAction,label:"Add New Product",color:"primary"},null,8,["onClick"])])]),Object(r["j"])("div",l,[Object(r["l"])(p,{class:"full-width",isLoading:e.isLoading,data:e.data,tableDef:e.tableDef},{actions:Object(r["U"])((function(t){var n=t.props;return[Object(r["j"])("div",s,[Object(r["l"])(b,{class:"q-pa-none",flat:"",round:"",color:"primary",icon:"edit",onClick:function(t){return e.editProduct(n.row)}},null,8,["onClick"])])]})),_:1},8,["isLoading","data","tableDef"])])]),Object(r["l"])(m,{onClose:t[1]||(t[1]=function(t){return e.productModal=!e.productModal}),title:e.isEditing?"Update Product":"Add New Product",modelValue:e.productModal,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.productModal=t})},{default:Object(r["U"])((function(){return[Object(r["l"])(v,{ref:"productRef",isEditing:e.isEditing,modelValue:e.productModal,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.productModal=t}),onCloseModal:e.refreshList},null,8,["isEditing","modelValue","onCloseModal"])]})),_:1},8,["title","modelValue"])])}var d=n("1da1"),f=(n("96cf"),n("fa17")),b=n("46f1"),p=n("b5ff"),v=n("b028"),m=n("7255"),j=n("bcc3"),O=n("123b"),g=Object(r["m"])({components:{NewProductForm:f["a"],Modal:O["a"],Table:m["a"]},setup:function(){var e=Object(r["I"])(!1),t=Object(r["I"])(),n=Object(r["I"])(!1),a=Object(r["I"])(!0),c=Object(r["I"])([]),u=Object(r["I"])(new v["a"]),o=Object(r["I"])(new p["a"]([new j["a"]("sku","Sku",!0),new j["a"]("name","Name",!0),new j["a"]("brand","Brand",!0),new j["a"]("category","Category",!0),new j["a"]("actions","Actions",!1,!0)])),l=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.value=!0,e.next=4,b["a"].getProducts();case 4:c.value=e.sent,u.value.results=c.value,a.value=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){n.value=!1,t.value.resetForm(),e.value=!0},i=function(r){n.value=!0,t.value.setToEdit(r),e.value=!0},f=function(e){console.log(e)},m=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("reset-list"),l(),e.value=!e.value;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r["C"])(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{l()}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))),{data:u,tableDef:o,products:c,isLoading:a,isEditing:n,productModal:e,productRef:t,refreshList:m,editProduct:i,deleteProduct:f,newProductAction:s}}}),h=n("9c40"),w=n("93dc"),y=n.n(w);g.render=i;t["default"]=g;y()(g,"components",{QBtn:h["a"]})},e0a1:function(e,t,n){"use strict";n("3588")},f372:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("99af"),n("96cf"),n("bb0b")),o=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getBrands",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newBrand",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateBrand",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();o.baseUrl="brands"},f910:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("99af"),n("96cf"),n("bb0b")),o=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getCategories",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newCategory",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateCategory",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();o.baseUrl="categories"},fa17:function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),a={class:"row"},c={class:"col-xs-12 col-sm-6 q-px-xs q-my-xs"},u={class:"col-xs-12 col-sm-6 q-px-xs q-my-xs"},o={class:"col-xs-12 col-sm-6 q-px-xs q-my-xs"},l={class:"col-xs-12 col-sm-6 q-px-xs q-my-xs"},s={class:"col-xs-12 q-my-xs"};function i(e,t,n,i,d,f){var b=Object(r["L"])("q-input"),p=Object(r["L"])("q-select"),v=Object(r["L"])("q-btn"),m=Object(r["L"])("q-form");return Object(r["F"])(),Object(r["g"])(m,{onSubmit:e.onSubmit},{default:Object(r["U"])((function(){return[Object(r["j"])("div",a,[Object(r["j"])("div",c,[Object(r["l"])(b,{filled:"",modelValue:e.product.sku,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.product.sku=t}),label:"Sku","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},null,8,["modelValue","rules"])]),Object(r["j"])("div",u,[Object(r["l"])(b,{filled:"",modelValue:e.product.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.product.name=t}),label:"Product Name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},null,8,["modelValue","rules"])]),Object(r["j"])("div",o,[Object(r["l"])(p,{filled:"",modelValue:e.product.brand,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.product.brand=t}),options:e.brands,label:"Brands","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a valid value"}]},null,8,["modelValue","options","rules"])]),Object(r["j"])("div",l,[Object(r["l"])(p,{filled:"",modelValue:e.product.category,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.product.category=t}),options:e.categories,label:"Category","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter a valid value"}]},null,8,["modelValue","options","rules"])]),Object(r["j"])("div",s,[Object(r["l"])(v,{type:"submit",label:"Submit",color:"primary",class:"full-width"})])])]})),_:1},8,["onSubmit"])}var d=n("1da1"),f=(n("96cf"),n("d81d"),n("46f1")),b=n("f372"),p=n("f910"),v=n("b3fe"),m=Object(r["m"])({props:{isEditing:{type:Boolean,default:function(){return!1}}},emits:["close-modal"],setup:function(e,t){var n=Object(v["a"])(),a=Object(r["I"])([]),c=Object(r["I"])([]),u=Object(r["I"])({sku:"",name:"",brand:"",category:""}),o=function(){u.value._id="",u.value.sku="",u.value.name="",u.value.brand="",u.value.category=""},l=function(e){u.value._id=e._id,u.value.sku=e.sku,u.value.name=e.name,u.value.brand=e.brand,u.value.category=e.category},s=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!u.value._id){e.next=7;break}return e.next=4,f["a"].updateProduct(u.value);case 4:n.notify({color:"primary",message:"This Category has been successfully updated!"}),e.next=10;break;case 7:return e.next=9,f["a"].newProducts(u.value);case 9:n.notify({color:"primary",message:"This Product has been successfully created!"});case 10:console.log(u.value),t.emit("close-modal"),o(),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(r["C"])(Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b["a"].getBrands();case 3:return t=e.sent,a.value=t.map((function(e){return e.name})),e.next=7,p["a"].getCategories();case 7:n=e.sent,c.value=n.map((function(e){return e.name})),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))),{setToEdit:l,onSubmit:s,resetForm:o,product:u,brands:a,categories:c}}}),j=n("0378"),O=n("27f9"),g=n("ddd8"),h=n("9c40"),w=n("93dc"),y=n.n(w);m.render=i;t["a"]=m;y()(m,"components",{QForm:j["a"],QInput:O["a"],QSelect:g["a"],QBtn:h["a"]})}}]);
//# sourceMappingURL=chunk-4daf4b57.a70b1c6a.js.map