(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96583a12"],{"123b":function(e,t,n){"use strict";var r=n("7a23"),a={class:"custom-dialog"},c={class:"row full-width justify-between"},u={class:"text-h6 q-my-none"};function o(e,t,n,o,s,l){var i=Object(r["L"])("q-btn"),p=Object(r["L"])("q-card-section"),b=Object(r["L"])("q-card");return Object(r["F"])(),Object(r["i"])("div",a,[Object(r["V"])(Object(r["l"])(b,{class:"modal"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(p,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["j"])("div",c,[Object(r["j"])("div",u,Object(r["O"])(e.title),1),Object(r["l"])(i,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})])]})),_:1})],4),Object(r["j"])("div",{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%;")),class:"row items-center q-pb-none modal-content"},[Object(r["l"])(p,{class:"full-width"},{default:Object(r["U"])((function(){return[Object(r["K"])(e.$slots,"default")]})),_:3})],4)]})),_:3},512),[[r["S"],e.modelValue]])])}var s=Object(r["m"])({props:{title:{type:String},width:{type:String,default:function(){return"650px"}},modelValue:{type:Boolean}},emits:["close"]}),l=(n("e0a1"),n("f09f")),i=n("a370"),p=n("9c40"),b=n("93dc"),d=n.n(b);s.render=o;t["a"]=s;d()(s,"components",{QCard:l["a"],QCardSection:i["a"],QBtn:p["a"]})},"2b60":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("99af"),n("96cf"),n("bb0b")),o=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getAllInvoices",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get("".concat(e.baseUrl,"/all-invoices"));case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"getInvoice",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get("".concat(e.baseUrl,"/invoices/").concat(n));case 3:return r=t.sent,t.abrupt("return",r.results.data.filteredInvoice);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"getInvoices",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get("".concat(e.baseUrl,"/invoices"));case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newPaymentReceving",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"newInvoice",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl,"/create-invoice"),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateBrand",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();o.baseUrl="accounts"},3588:function(e,t,n){},"9f1d":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("99af"),n("96cf"),n("bb0b")),o=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getCustomers",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"getCustomer",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].get("".concat(e.baseUrl,"/").concat(n));case 3:return r=t.sent,t.abrupt("return",r.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"newCustomer",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateCustomer",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();o.baseUrl="customers"},aad6:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"row"},c=Object(r["j"])("div",{class:"col col-xs-12 col-sm-6"},[Object(r["j"])("h6",{class:"q-my-sm"},"Sale Returns")],-1),u={class:"col col-xs-12 col-sm-6 text-right"},o={class:"row"};function s(e,t,n,s,l,i){var p=Object(r["L"])("q-btn"),b=Object(r["L"])("Table"),d=Object(r["L"])("NewSalesForm"),v=Object(r["L"])("Modal");return Object(r["F"])(),Object(r["i"])("div",null,[Object(r["j"])("div",a,[c,Object(r["j"])("div",u,[Object(r["l"])(p,{onClick:t[0]||(t[0]=function(t){return e.newSalesReturnModal=!e.newSalesReturnModal}),color:"primary",label:"Add New Return"})])]),Object(r["l"])(b,{class:"full-width",isLoading:e.isLoading,data:e.data,tableDef:e.tableDef},{actions:Object(r["U"])((function(t){var n=t.props;return[Object(r["j"])("div",o,[Object(r["l"])(p,{class:"q-pa-none",flat:"",round:"",color:"primary",icon:"receipt",onClick:function(t){return e.viewReceipt(n.row)}},null,8,["onClick"]),Object(r["l"])(p,{class:"q-pa-none",flat:"",round:"",color:"primary",icon:"edit",onClick:function(t){return e.editReturn(n.row)}},null,8,["onClick"])])]})),_:1},8,["isLoading","data","tableDef"]),Object(r["l"])(v,{onClose:t[2]||(t[2]=function(t){return e.newSalesReturnModal=!e.newSalesReturnModal}),title:"New Sales Return",modelValue:e.newSalesReturnModal,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.newSalesReturnModal=t})},{default:Object(r["U"])((function(){return[Object(r["l"])(d,{onClose:t[1]||(t[1]=function(t){return e.newSalesReturnModal=!e.newSalesReturnModal})})]})),_:1},8,["modelValue"])])}var l=n("1da1"),i=(n("96cf"),n("d4ec")),p=n("bee2"),b=(n("99af"),n("bb0b")),d=function(){function e(){Object(i["a"])(this,e)}return Object(p["a"])(e,null,[{key:"getReturns",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newReturn",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b["a"].post("".concat(e.baseUrl,"/new-return"),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateProduct",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();d.baseUrl="sales-return";var v=n("7255"),m=n("bcc3"),f=n("b5ff"),j=n("b028"),w=n("123b"),O={class:"row"},h={class:"col col-xs-12 col-sm-6 q-pa-sm"},g={class:"col col-xs-12 col-sm-6 q-pa-sm"},R={class:"col col-xs-12 col-sm-6 q-pa-sm"},x={class:"col col-xs-12 col-sm-6 q-pa-sm"},y={class:"col col-xs-12 col-sm-6 q-pa-sm q-mt-md"},k={class:"col col-xs-12 col-sm-6 q-pa-sm q-mt-md"};function U(e,t,n,a,c,u){var o=Object(r["L"])("q-input"),s=Object(r["L"])("q-select"),l=Object(r["L"])("q-btn");return Object(r["F"])(),Object(r["i"])("div",O,[Object(r["j"])("div",h,[Object(r["l"])(o,{label:"Return Number",modelValue:e.returns.returnNumber,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.returns.returnNumber=t})},null,8,["modelValue"])]),Object(r["j"])("div",g,[Object(r["l"])(s,{label:"Customer Name",options:e.customers,modelValue:e.returns.customerName,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.returns.customerName=t})},null,8,["options","modelValue"])]),Object(r["j"])("div",R,[Object(r["l"])(s,{label:"Invoice Number",options:e.invoices,modelValue:e.returns.invoiceNo,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.returns.invoiceNo=t})},null,8,["options","modelValue"])]),Object(r["j"])("div",x,[Object(r["l"])(o,{label:"Reference",modelValue:e.returns.reference,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.returns.reference=t})},null,8,["modelValue"])]),Object(r["j"])("div",y,[Object(r["l"])(l,{label:"Submit",color:"primary",class:"full-width"})]),Object(r["j"])("div",k,[Object(r["l"])(l,{onClick:t[4]||(t[4]=function(t){return e.$emit("close")}),label:"close",color:"primary",class:"full-width"})])])}n("d81d"),n("b0c0");var N=n("2b60"),q=n("9f1d"),C=Object(r["m"])({setup:function(){var e=Object(r["I"])([]),t=Object(r["I"])({returnNumber:0,customerName:"",invoiceNo:"0",reference:"",products:[],totalValue:0}),n=Object(r["I"])([]);return Object(r["C"])(Object(l["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N["a"].getInvoices();case 3:return r=t.sent,n.value=r.map((function(e){return e.invoiceNo})),t.next=7,q["a"].getCustomers();case 7:a=t.sent,e.value=a.map((function(e){return e.name})),console.log(e.value,"Data"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))),{customers:e,invoices:n,returns:t}}}),V=n("27f9"),S=n("ddd8"),I=n("9c40"),L=n("93dc"),M=n.n(L);C.render=U;var _=C;M()(C,"components",{QInput:V["a"],QSelect:S["a"],QBtn:I["a"]});var Q=Object(r["m"])({components:{Table:v["a"],Modal:w["a"],NewSalesForm:_},setup:function(){var e=Object(r["I"])(!0),t=Object(r["I"])(!1),n=Object(r["I"])([]),a=Object(r["I"])(new j["a"]),c=Object(r["I"])(new f["a"]([new m["a"]("returnNumber","Return Number",!0),new m["a"]("customerName","Customer Name",!0),new m["a"]("invoiceNo","Invoice",!0),new m["a"]("totalValue","Ammount",!0),new m["a"]("reference","Reference",!0),new m["a"]("actions","Actions",!1,!0)])),u=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.value=!0,t.next=4,d.getReturns();case 4:n.value=t.sent,a.value.results=n.value,e.value=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(r["C"])((function(){u()})),{data:a,tableDef:c,isLoading:e,newSalesReturnModal:t}}});Q.render=s;t["default"]=Q;M()(Q,"components",{QBtn:I["a"]})},e0a1:function(e,t,n){"use strict";n("3588")}}]);
//# sourceMappingURL=chunk-96583a12.7d83b011.js.map