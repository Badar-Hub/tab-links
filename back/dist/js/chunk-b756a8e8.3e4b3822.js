(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b756a8e8"],{"01f6":function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),a={class:"row"},c={class:"col-xs-12 q-px-sm q-my-sm"},o={class:"col-xs-12 q-my-sm"};function u(e,t,n,u,i,s){var l=Object(r["L"])("q-input"),d=Object(r["L"])("q-btn"),f=Object(r["L"])("q-form");return Object(r["F"])(),Object(r["g"])(f,{onSubmit:e.onSubmit},{default:Object(r["U"])((function(){return[Object(r["j"])("div",a,[Object(r["j"])("div",c,[Object(r["l"])(l,{filled:"",modelValue:e.brand.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.brand.name=t}),label:"Brand Name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},null,8,["modelValue","rules"])]),Object(r["j"])("div",o,[Object(r["l"])(d,{type:"submit",label:"Submit",color:"primary",class:"full-width"})])])]})),_:1},8,["onSubmit"])}var i=n("1da1"),s=(n("96cf"),n("b3fe")),l=n("f372"),d=Object(r["m"])({props:{isEditing:{type:Boolean,default:function(){return!1}}},emits:["close-modal"],setup:function(e,t){var n=Object(s["a"])(),a=Object(r["I"])({name:""}),c=function(e){a.value._id=e._id,a.value.name=e.name},o=function(){a.value._id="",a.value.name=""},u=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!a.value._id){e.next=7;break}return e.next=4,l["a"].updateBrand(a.value);case 4:n.notify({color:"primary",message:"This brand has been successfully updated!"}),e.next=10;break;case 7:return e.next=9,l["a"].newBrand(a.value);case 9:n.notify({color:"primary",message:"This brand has been successfully created!"});case 10:t.emit("close-modal"),o(),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),n.notify({color:"red",message:"An error occurred"}),console.log(e.t0,"|error");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return{onSubmit:u,resetForm:o,setToEdit:c,brand:a}}}),f=n("0378"),b=n("27f9"),p=n("9c40"),m=n("93dc"),v=n.n(m);d.render=u;t["a"]=d;v()(d,"components",{QForm:f["a"],QInput:b["a"],QBtn:p["a"]})},"0378":function(e,t,n){"use strict";var r=n("53ca"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("7db0"),n("a434"),n("7a23")),c=n("d882"),o=n("f6ba"),u=n("cdf5"),i=n("e22d");t["a"]=Object(a["m"])({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup:function(e,t){var n=t.slots,s=t.emit,l=Object(a["n"])(),d=Object(a["I"])(null),f=0,b=[];function p(t){var n=[],a="boolean"===typeof t?t:!0!==e.noErrorFocus;f++;for(var c=function(e,t){s("validation-"+(!0===e?"success":"error"),t)},o=function(t){var r=b[t],o=r.validate();if("function"===typeof o.then)n.push(o.then((function(e){return{valid:e,comp:r}}),(function(e){return{valid:!1,comp:r,error:e}})));else if(!0!==o){if(!1===e.greedy)return c(!1,r),!0===a&&"function"===typeof r.focus&&r.focus(),{v:Promise.resolve(!1)};n.push({valid:!1,comp:r})}},u=0;u<b.length;u++){var i=o(u);if("object"===Object(r["a"])(i))return i.v}if(0===n.length)return c(!0),Promise.resolve(!0);var l=f;return Promise.all(n).then((function(e){if(l===f){var t=e.filter((function(e){return!0!==e.valid}));if(0===t.length)return c(!0),!0;var n=t[0],r=n.valid,o=n.comp;return c(!1,o),!0===a&&!0!==r&&"function"===typeof o.focus&&o.focus(),!1}}))}function m(){f++,b.forEach((function(e){"function"===typeof e.resetValidation&&e.resetValidation()}))}function v(t){void 0!==t&&Object(c["k"])(t),p().then((function(n){!0===n&&(void 0!==e.onSubmit?s("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function j(t){void 0!==t&&Object(c["k"])(t),s("reset"),Object(a["u"])((function(){m(),!0===e.autofocus&&!0!==e.noResetFocus&&O()}))}function O(){Object(o["a"])((function(){if(null!==d.value){var e=d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(function(e){return e.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))}return Object(a["G"])(i["a"],{bindComponent:function(e){b.push(e)},unbindComponent:function(e){var t=b.indexOf(e);t>-1&&b.splice(t,1)}}),Object(a["C"])((function(){!0===e.autofocus&&O()})),Object.assign(l.proxy,{validate:p,resetValidation:m,submit:v,reset:j,focus:O,getValidationComponents:function(){return b}}),function(){return Object(a["p"])("form",{class:"q-form",ref:d,onSubmit:v,onReset:j},Object(u["d"])(n.default))}}})},"123b":function(e,t,n){"use strict";var r=n("7a23"),a={class:"custom-dialog"},c={class:"row full-width justify-between"},o={class:"text-h6 q-my-none"};function u(e,t,n,u,i,s){var l=Object(r["L"])("q-btn"),d=Object(r["L"])("q-card-section"),f=Object(r["L"])("q-card");return Object(r["F"])(),Object(r["i"])("div",a,[Object(r["V"])(Object(r["l"])(f,{class:"modal"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(d,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",c,[Object(r["j"])("div",o,Object(r["O"])(e.title),1),Object(r["l"])(l,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})])]})),_:1})],4),Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(d,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["K"])(e.$slots,"default")]})),_:3})],4)]})),_:3},512),[[r["S"],e.modelValue]])])}var i=Object(r["m"])({props:{title:{type:String},width:{type:String,default:function(){return"650px"}},modelValue:{type:Boolean}},emits:["close"]}),s=(n("e0a1"),n("f09f")),l=n("a370"),d=n("9c40"),f=n("93dc"),b=n.n(f);i.render=u;t["a"]=i;b()(i,"components",{QCard:s["a"],QCardSection:l["a"],QBtn:d["a"]})},3588:function(e,t,n){},b6e6:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"q-pa-md"},c={class:"row"},o=Object(r["j"])("div",{class:"col-xs-12 col-sm-6 text-left"},[Object(r["j"])("h5",{class:"q-my-sm"},"Brand List")],-1),u={class:"col-xs-12 col-sm-6 text-right"},i={class:"row"},s={class:"row"};function l(e,t,n,l,d,f){var b=Object(r["L"])("q-btn"),p=Object(r["L"])("Table"),m=Object(r["L"])("NewBrandForm"),v=Object(r["L"])("modal");return Object(r["F"])(),Object(r["i"])("div",null,[Object(r["j"])("div",a,[Object(r["j"])("div",c,[o,Object(r["j"])("div",u,[Object(r["l"])(b,{onClick:e.newBrandAction,label:"Add New Brand",color:"primary"},null,8,["onClick"])])]),Object(r["j"])("div",i,[Object(r["l"])(p,{class:"full-width",isLoading:e.isLoading,data:e.data,tableDef:e.tableDef},{actions:Object(r["U"])((function(t){var n=t.props;return[Object(r["j"])("div",s,[Object(r["l"])(b,{class:"q-pa-none",flat:"",round:"",color:"primary",icon:"edit",onClick:function(t){return e.editBrand(n.row)}},null,8,["onClick"])])]})),_:1},8,["isLoading","data","tableDef"])])]),Object(r["l"])(v,{modelValue:e.brandModal,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.brandModal=t}),onClose:t[1]||(t[1]=function(t){return e.brandModal=!1}),name:"Add New Brand",title:e.isEditing?"Update Brand":"Add New Brand"},{default:Object(r["U"])((function(){return[Object(r["l"])(m,{ref:"brandRef",isEditing:e.isEditing,onClose:e.refreshList},null,8,["isEditing","onClose"])]})),_:1},8,["modelValue","title"])])}var d=n("1da1"),f=(n("96cf"),n("123b")),b=n("bcc3"),p=n("b5ff"),m=n("b028"),v=n("7255"),j=n("f372"),O=n("01f6"),w=Object(r["m"])({components:{NewBrandForm:O["a"],Modal:f["a"],Table:v["a"]},setup:function(){var e=Object(r["I"])(!1),t=Object(r["I"])(),n=Object(r["I"])(!1),a=Object(r["I"])(!0),c=Object(r["I"])(new m["a"]),o=Object(r["I"])(new p["a"]([new b["a"]("_id","ID",!0),new b["a"]("name","Name",!0),new b["a"]("actions","Actions",!1,!0)])),u=Object(r["I"])([]),i=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.value=!0,e.next=4,j["a"].getBrands();case 4:u.value=e.sent,c.value.results=u.value,a.value=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){n.value=!1,t.value.resetForm(),e.value=!0},l=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("Delete Brand ".concat(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(a),n.value=!0,t.value.setToEdit(a),e.value=!0;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("reset-list"),i(),e.value=!e.value;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r["C"])(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{i()}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))),{brands:u,brandRef:t,data:c,tableDef:o,isLoading:a,editBrand:f,isEditing:n,brandModal:e,deleteBrand:l,refreshList:v,newBrandAction:s}}}),h=n("9c40"),g=n("93dc"),y=n.n(g);w.render=l;t["default"]=w;y()(w,"components",{QBtn:h["a"]})},e0a1:function(e,t,n){"use strict";n("3588")},f372:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),o=(n("99af"),n("96cf"),n("bb0b")),u=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getBrands",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newBrand",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateBrand",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();u.baseUrl="brands"}}]);
//# sourceMappingURL=chunk-b756a8e8.3e4b3822.js.map