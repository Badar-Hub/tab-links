(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2978350"],{"0378":function(e,t,n){"use strict";var r=n("53ca"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("7db0"),n("a434"),n("7a23")),o=n("d882"),c=n("f6ba"),u=n("cdf5"),i=n("e22d");t["a"]=Object(a["n"])({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup:function(e,t){var n=t.slots,s=t.emit,l=Object(a["o"])(),d=Object(a["J"])(null),f=0,b=[];function m(t){var n=[],a="boolean"===typeof t?t:!0!==e.noErrorFocus;f++;for(var o=function(e,t){s("validation-"+(!0===e?"success":"error"),t)},c=function(t){var r=b[t],c=r.validate();if("function"===typeof c.then)n.push(c.then((function(e){return{valid:e,comp:r}}),(function(e){return{valid:!1,comp:r,error:e}})));else if(!0!==c){if(!1===e.greedy)return o(!1,r),!0===a&&"function"===typeof r.focus&&r.focus(),{v:Promise.resolve(!1)};n.push({valid:!1,comp:r})}},u=0;u<b.length;u++){var i=c(u);if("object"===Object(r["a"])(i))return i.v}if(0===n.length)return o(!0),Promise.resolve(!0);var l=f;return Promise.all(n).then((function(e){if(l===f){var t=e.filter((function(e){return!0!==e.valid}));if(0===t.length)return o(!0),!0;var n=t[0],r=n.valid,c=n.comp;return o(!1,c),!0===a&&!0!==r&&"function"===typeof c.focus&&c.focus(),!1}}))}function p(){f++,b.forEach((function(e){"function"===typeof e.resetValidation&&e.resetValidation()}))}function v(t){void 0!==t&&Object(o["k"])(t),m().then((function(n){!0===n&&(void 0!==e.onSubmit?s("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function j(t){void 0!==t&&Object(o["k"])(t),s("reset"),Object(a["v"])((function(){p(),!0===e.autofocus&&!0!==e.noResetFocus&&g()}))}function g(){Object(c["a"])((function(){if(null!==d.value){var e=d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(function(e){return e.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))}return Object(a["H"])(i["a"],{bindComponent:function(e){b.push(e)},unbindComponent:function(e){var t=b.indexOf(e);t>-1&&b.splice(t,1)}}),Object(a["D"])((function(){!0===e.autofocus&&g()})),Object.assign(l.proxy,{validate:m,resetValidation:p,submit:v,reset:j,focus:g,getValidationComponents:function(){return b}}),function(){return Object(a["q"])("form",{class:"q-form",ref:d,onSubmit:v,onReset:j},Object(u["d"])(n.default))}}})},"123b":function(e,t,n){"use strict";var r=n("7a23"),a={class:"custom-dialog"},o={class:"row full-width justify-between"},c={class:"text-h6 q-my-none"};function u(e,t,n,u,i,s){var l=Object(r["M"])("q-btn"),d=Object(r["M"])("q-card-section"),f=Object(r["M"])("q-card");return Object(r["G"])(),Object(r["i"])("div",a,[Object(r["W"])(Object(r["m"])(f,{class:"modal"},{default:Object(r["V"])((function(){return[Object(r["j"])("div",{style:Object(r["x"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["m"])(d,{class:"full-width"},{default:Object(r["V"])((function(){return[Object(r["j"])("div",o,[Object(r["j"])("div",c,Object(r["P"])(e.title),1),Object(r["m"])(l,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})])]})),_:1})],4),Object(r["j"])("div",{style:Object(r["x"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["m"])(d,{class:"full-width"},{default:Object(r["V"])((function(){return[Object(r["L"])(e.$slots,"default")]})),_:3})],4)]})),_:3},512),[[r["T"],e.modelValue]])])}var i=Object(r["n"])({props:{title:{type:String},width:{type:String,default:function(){return"650px"}},modelValue:{type:Boolean}},emits:["close"]}),s=(n("e0a1"),n("f09f")),l=n("a370"),d=n("9c40"),f=n("93dc"),b=n.n(f);i.render=u;t["a"]=i;b()(i,"components",{QCard:s["a"],QCardSection:l["a"],QBtn:d["a"]})},"184d":function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),a={class:"row"},o={class:"col-xs-12 q-px-sm q-my-sm"},c={class:"col-xs-12 q-my-sm"};function u(e,t,n,u,i,s){var l=Object(r["M"])("q-input"),d=Object(r["M"])("q-btn"),f=Object(r["M"])("q-form");return Object(r["G"])(),Object(r["g"])(f,{onSubmit:e.onSubmit},{default:Object(r["V"])((function(){return[Object(r["j"])("div",a,[Object(r["j"])("div",o,[Object(r["m"])(l,{filled:"",modelValue:e.category.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.category.name=t}),label:"Category Name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},null,8,["modelValue","rules"])]),Object(r["j"])("div",c,[Object(r["m"])(d,{type:"submit",label:"Submit",color:"primary",class:"full-width"})])])]})),_:1},8,["onSubmit"])}var i=n("1da1"),s=(n("96cf"),n("f910")),l=Object(r["n"])({props:{isEditing:{type:Boolean,default:function(){return!1}}},emits:["close-modal"],setup:function(e,t){var n=Object(r["J"])({name:""}),a=function(){n.value._id="",n.value.name=""},o=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.value._id=t._id,n.value.name=t.name;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!n.value._id){e.next=6;break}return e.next=4,s["a"].updateCategory(n.value);case 4:e.next=8;break;case 6:return e.next=8,s["a"].newCategory(n.value);case 8:t.emit("close-modal"),a(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return{onSubmit:c,resetForm:a,setToEdit:o,category:n}}}),d=n("0378"),f=n("27f9"),b=n("9c40"),m=n("93dc"),p=n.n(m);l.render=u;t["a"]=l;p()(l,"components",{QForm:d["a"],QInput:f["a"],QBtn:b["a"]})},3588:function(e,t,n){},e0a1:function(e,t,n){"use strict";n("3588")},e130:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"q-pa-md"},o={class:"row"},c=Object(r["j"])("div",{class:"col-xs-12 col-sm-6 text-left"},[Object(r["j"])("h5",{class:"q-my-sm"},"Category List")],-1),u={class:"col-xs-12 col-sm-6 text-right"},i={class:"row"},s={class:"row"};function l(e,t,n,l,d,f){var b=Object(r["M"])("q-btn"),m=Object(r["M"])("Table"),p=Object(r["M"])("NewCategoryForm"),v=Object(r["M"])("modal");return Object(r["G"])(),Object(r["i"])("div",null,[Object(r["j"])("div",a,[Object(r["j"])("div",o,[c,Object(r["j"])("div",u,[Object(r["m"])(b,{onClick:e.newCategoryAction,label:"Add New Category",color:"primary"},null,8,["onClick"])])]),Object(r["j"])("div",i,[Object(r["m"])(m,{class:"full-width",isLoading:e.isLoading,data:e.data,tableDef:e.tableDef},{actions:Object(r["V"])((function(t){var n=t.props;return[Object(r["j"])("div",s,[Object(r["m"])(b,{class:"q-pa-none",flat:"",round:"",color:"primary",icon:"edit",onClick:function(t){return e.editCategory(n.row)}},null,8,["onClick"])])]})),_:1},8,["isLoading","data","tableDef"])])]),Object(r["m"])(v,{onClose:e.refreshList,modelValue:e.categoryModal,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.categoryModal=t}),name:"Add New Category",title:e.isEditing?"Update Category":"Add New Category"},{default:Object(r["V"])((function(){return[Object(r["m"])(p,{onCloseModal:e.refreshList,ref:"categoryRef",isEditing:e.isEditing},null,8,["onCloseModal","isEditing"])]})),_:1},8,["onClose","modelValue","title"])])}var d=n("1da1"),f=(n("96cf"),n("184d")),b=n("f910"),m=n("123b"),p=n("bcc3"),v=n("b5ff"),j=n("b028"),g=n("7255"),O=Object(r["n"])({components:{NewCategoryForm:f["a"],Modal:m["a"],Table:g["a"]},setup:function(){var e=Object(r["J"])(!1),t=Object(r["J"])(),n=Object(r["J"])(!1),a=Object(r["J"])(!0),o=Object(r["J"])([]),c=Object(r["J"])(new j["a"]),u=Object(r["J"])(new v["a"]([new p["a"]("_id","ID"),new p["a"]("name","Name"),new p["a"]("actions","Actions",!0)])),i=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.value=!0,e.next=4,b["a"].getCategories();case 4:o.value=e.sent,c.value.results=o.value,a.value=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){n.value=!1,t.value.resetForm(),e.value=!e.value},l=function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.value=!0,e.value=!0,console.log("lol update category start"),t.value.setToEdit(a),console.log("lol update category end");case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(e){console.log("lol delete category start",e),console.log("lol delete category end",e)},m=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i(),e.value=!e.value,console.log(e.value);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r["D"])(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{i()}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))),{data:c,tableDef:u,isLoading:a,isEditing:n,editCategory:l,deleteCategory:f,categories:o,categoryModal:e,refreshList:m,categoryRef:t,newCategoryAction:s}}}),y=n("9c40"),w=n("93dc"),h=n.n(w);O.render=l;t["default"]=O;h()(O,"components",{QBtn:y["a"]})},f910:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),a=n("d4ec"),o=n("bee2"),c=(n("99af"),n("96cf"),n("bb0b")),u=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,null,[{key:"getCategories",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newCategory",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateCategory",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();u.baseUrl="categories"}}]);
//# sourceMappingURL=chunk-c2978350.61a91430.js.map