(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfe9c6d"],{2374:function(e,t,n){"use strict";n("b837")},"46f1":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),c=n("d4ec"),a=n("bee2"),o=(n("99af"),n("96cf"),n("bb0b")),u=function(){function e(){Object(c["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getProducts",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newProducts",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateProduct",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();u.baseUrl="products"},4742:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),c=n("d4ec"),a=n("bee2"),o=(n("99af"),n("96cf"),n("bb0b")),u=function(){function e(){Object(c["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getVendors",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"newVendor",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateVendor",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();u.baseUrl="vendors"},"616e":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),c=n("d4ec"),a=n("bee2"),o=(n("99af"),n("96cf"),n("bb0b")),u=function(){function e(){Object(c["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getInventoryList",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].get(e.baseUrl);case 3:return n=t.sent,t.abrupt("return",n.results.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(){return t.apply(this,arguments)}return n}()},{key:"receiveProducts",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].post("".concat(e.baseUrl),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"updateReceiving",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].put("".concat(e.baseUrl,"/").concat(n._id),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function n(e){return t.apply(this,arguments)}return n}()}]),e}();u.baseUrl="inventory"},afdd:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"row"},a=Object(r["j"])("div",{class:"col-xs-12 col-sm-6 q-pa-md"},[Object(r["j"])("h5",{class:"q-my-sm"},"Inventory List")],-1),o={class:"col-xs-12 col-sm-6 q-pa-md text-right"},u={class:"row"};function l(e,t,n,l,s,i){var d=Object(r["L"])("q-btn"),b=Object(r["L"])("InventoryCard"),p=Object(r["L"])("ReceiveProducts");return Object(r["F"])(),Object(r["i"])(r["a"],null,[Object(r["j"])("div",c,[a,Object(r["j"])("div",o,[Object(r["l"])(d,{label:"Receive Product",color:"primary",onClick:e.receiveProductAction},null,8,["onClick"])])]),Object(r["j"])("div",u,[(Object(r["F"])(!0),Object(r["i"])(r["a"],null,Object(r["J"])(e.inventory,(function(t,n){return Object(r["F"])(),Object(r["i"])("div",{key:n,class:"col-xs-12 col-sm-4 q-pa-md"},[Object(r["l"])(b,{onEditAction:function(n){return e.updateAction(t)},inventory:t},null,8,["onEditAction","inventory"])])})),128))]),Object(r["l"])(p,{onClose:e.refreshList,ref:"inventoryRef",modelValue:e.inventoryModal,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inventoryModal=t})},null,8,["onClose","modelValue"])],64)}var s=n("1da1"),i=(n("96cf"),n("b0c0"),{class:"row"}),d={class:"col-xs-12"},b={class:"q-my-sm"},p={class:"col-xs-12"},v={class:"q-my-sm"},j={class:"col-xs-12"},f={class:"q-my-sm"},m={class:"col-xs-12"},O={class:"q-my-sm"},h={class:"row"},y={class:"col col-xs-12 col-sm-6 q-px-sm"},w={class:"col col-xs-12 col-sm-6 q-px-sm"};function x(e,t,n,c,a,o){var u=Object(r["L"])("q-card-section"),l=Object(r["L"])("q-btn"),s=Object(r["L"])("q-card");return Object(r["F"])(),Object(r["g"])(s,null,{default:Object(r["T"])((function(){return[Object(r["l"])(u,null,{default:Object(r["T"])((function(){return[Object(r["j"])("div",i,[Object(r["j"])("div",d,[Object(r["j"])("h6",b,"Name: "+Object(r["O"])(e.inventory.name),1)]),Object(r["j"])("div",p,[Object(r["j"])("h6",v,"Price: "+Object(r["O"])(e.inventory.price),1)]),Object(r["j"])("div",j,[Object(r["j"])("h6",f,"Discount: "+Object(r["O"])(e.inventory.discount),1)]),Object(r["j"])("div",m,[Object(r["j"])("h6",O,"Quantity: "+Object(r["O"])(e.inventory.quantity),1)])])]})),_:1}),Object(r["l"])(u,null,{default:Object(r["T"])((function(){return[Object(r["j"])("div",h,[Object(r["j"])("div",y,[Object(r["l"])(l,{onClick:t[0]||(t[0]=function(t){return e.$emit("editAction")}),label:"Edit",color:"warning",class:"full-width"})]),Object(r["j"])("div",w,[Object(r["l"])(l,{onClick:t[1]||(t[1]=function(t){return e.$emit("deleteAction")}),label:"Delete",color:"red",class:"full-width"})])])]})),_:1})]})),_:1})}var g=Object(r["m"])({emits:["editAction","deleteAction"],props:{inventory:{type:Object}}}),q=n("f09f"),k=n("a370"),R=n("9c40"),V=n("93dc"),I=n.n(V);g.render=x;var P=g;I()(g,"components",{QCard:q["a"],QCardSection:k["a"],QBtn:R["a"]});var L={class:"row"},C={class:"col-xs-12 col-sm-6 q-pa-sm"},U={class:"col-xs-12 col-sm-6 q-pa-sm"},Q={class:"col-xs-12 col-sm-6 q-pa-sm"},_={class:"row items-center justify-end"},S={class:"col-xs-12 col-sm-6 q-pa-sm"},T={class:"row q-px-md q-pt-xs"},A={class:"col-xs-12 col-sm-6 q-my-auto"},F={class:"q-my-sm text-body1"},N={class:"col-xs-12 col-sm-6 text-right q-my-auto"},M=["onClick"],D=Object(r["j"])("p",{class:"q-my-none"},"X",-1),E=[D],B=Object(r["j"])("hr",null,null,-1),J={class:"row"},$={class:"col-xs-12 col-sm-5 q-px-sm"},K={class:"col-xs-12 col-sm-5 q-px-sm"},X={class:"col-xs-12 col-sm-2 q-px-sm"},z={class:"row"},G={class:"row q-my-sm"};function H(e,t,n,c,a,o){var u=Object(r["L"])("q-select"),l=Object(r["L"])("q-input"),s=Object(r["L"])("q-btn"),i=Object(r["L"])("q-date"),d=Object(r["L"])("q-popup-proxy"),b=Object(r["L"])("q-icon"),p=Object(r["L"])("q-card-section"),v=Object(r["L"])("q-card"),j=Object(r["L"])("q-form"),f=Object(r["L"])("Modal"),m=Object(r["M"])("close-popup");return Object(r["F"])(),Object(r["g"])(f,{width:"700px",title:"Receive Prodducts"},{default:Object(r["T"])((function(){return[Object(r["l"])(j,{onSubmit:e.onSubmit},{default:Object(r["T"])((function(){return[Object(r["j"])("div",L,[Object(r["j"])("div",C,[Object(r["l"])(u,{modelValue:e.receiveItems.vendor,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.receiveItems.vendor=t}),options:e.vendors,label:"Select Vendor",filled:""},null,8,["modelValue","options"])]),Object(r["j"])("div",U,[Object(r["l"])(l,{disable:"",modelValue:e.receiveItems.invoiceNo,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.receiveItems.invoiceNo=t}),label:"Invoice No",filled:""},null,8,["modelValue"])]),Object(r["j"])("div",Q,[Object(r["l"])(l,{filled:"",modelValue:e.receiveItems.date,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.receiveItems.date=t}),mask:"date",rules:["date"]},{append:Object(r["T"])((function(){return[Object(r["l"])(b,{name:"event",class:"cursor-pointer"},{default:Object(r["T"])((function(){return[Object(r["l"])(d,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:Object(r["T"])((function(){return[Object(r["l"])(i,{modelValue:e.receiveItems.date,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.receiveItems.date=t})},{default:Object(r["T"])((function(){return[Object(r["j"])("div",_,[Object(r["U"])(Object(r["l"])(s,{label:"Close",color:"primary",flat:""},null,512),[[m]])])]})),_:1},8,["modelValue"])]})),_:1},512)]})),_:1})]})),_:1},8,["modelValue"])]),Object(r["j"])("div",S,[Object(r["l"])(l,{modelValue:e.receiveItems.reference,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.receiveItems.reference=t}),label:"Reference",filled:""},null,8,["modelValue"])])]),(Object(r["F"])(!0),Object(r["i"])(r["a"],null,Object(r["J"])(e.receiveItems.products,(function(t,n){return Object(r["F"])(),Object(r["g"])(v,{bordered:"",flat:"",class:"q-my-sm",key:n},{default:Object(r["T"])((function(){return[Object(r["j"])("div",T,[Object(r["j"])("div",A,[Object(r["j"])("p",F,Object(r["O"])(t.name?"Selected Product (".concat(t.name,")"):"Select Product"),1)]),Object(r["j"])("div",N,[Object(r["j"])("div",{onClick:function(t){return e.removeCurrentIndex(n)},class:"close-btn"},E,8,M)])]),B,Object(r["l"])(p,null,{default:Object(r["T"])((function(){return[Object(r["j"])("div",J,[Object(r["j"])("div",$,[Object(r["l"])(u,{modelValue:t.name,"onUpdate:modelValue":function(e){return t.name=e},label:"Select Product",options:e.products},null,8,["modelValue","onUpdate:modelValue","options"])]),Object(r["j"])("div",K,[Object(r["l"])(l,{label:"Quantity",type:"number",modelValue:t.quantity,"onUpdate:modelValue":function(e){return t.quantity=e},modelModifiers:{number:!0},filled:""},null,8,["modelValue","onUpdate:modelValue"])]),Object(r["j"])("div",X,[Object(r["l"])(l,{label:"Cost Price",type:"number",modelValue:t.costPrice,"onUpdate:modelValue":function(e){return t.costPrice=e},modelModifiers:{number:!0},filled:""},null,8,["modelValue","onUpdate:modelValue"])])])]})),_:2},1024)]})),_:2},1024)})),128)),Object(r["j"])("div",z,[Object(r["l"])(s,{onClick:e.addNewItem,label:"Add Product"},null,8,["onClick"])]),Object(r["j"])("div",G,[Object(r["l"])(s,{type:"submit",label:"Submit",color:"primary",class:"full-width"})])]})),_:1},8,["onSubmit"])]})),_:1})}n("4de4"),n("d81d");var W=n("ffc4"),Y=n("46f1"),Z=n("616e"),ee=n("4742"),te=Object(r["m"])({components:{Modal:W["a"]},emits:["close"],setup:function(e,t){var n=Object(r["I"])({vendor:"",invoiceNo:"",date:"2021/02/01",reference:"",products:[{name:"",quantity:0,costPrice:0}]}),c=Object(r["I"])([]),a=Object(r["I"])([]),o=function(){n.value={vendor:"",invoiceNo:"",date:"2021/02/01",reference:"",products:[{name:"",quantity:0,costPrice:0}]}},u=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z["a"].getInventoryList();case 3:t=e.sent,n.value.invoiceNo=t.length,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(e){n.value._id=e._id,n.value.vendor=e.vendor,n.value.invoiceNo=e.invoiceNo,n.value.date=e.date,n.value.reference=e.reference,n.value.products=e.products},i=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z["a"].receiveProducts(n.value);case 3:console.log("Successfully"),o(),t.emit("close"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){n.value.products=n.value.products.filter((function(t,n){return n!==e}))},b=function(){var e={id:"",name:"",quantity:0,costPrice:0};n.value.products.push(e)};return Object(r["C"])(Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,u(),e.next=4,Y["a"].getProducts();case 4:return t=e.sent,a.value=t.map((function(e){return e.name})),e.next=8,ee["a"].getVendors();case 8:n=e.sent,c.value=n.map((function(e){return e.name})),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))),{addNewItem:b,setToEdit:l,resetForm:o,receiveItems:n,products:a,removeCurrentIndex:d,onSubmit:i,vendors:c}}}),ne=(n("2374"),n("0378")),re=n("ddd8"),ce=n("27f9"),ae=n("0016"),oe=n("7cbe"),ue=n("52ee"),le=n("7f67");te.render=H;var se=te;I()(te,"components",{QForm:ne["a"],QSelect:re["a"],QInput:ce["a"],QIcon:ae["a"],QPopupProxy:oe["a"],QDate:ue["a"],QBtn:R["a"],QCard:q["a"],QCardSection:k["a"]}),I()(te,"directives",{ClosePopup:le["a"]});var ie=Object(r["m"])({components:{InventoryCard:P,ReceiveProducts:se},setup:function(){var e=Object(r["I"])([]),t=Object(r["I"])(),n=Object(r["I"])(!1),c=function(){t.value.resetForm(),n.value=!0},a=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z["a"].getInventoryList();case 3:e.value=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),o=function(){a(),n.value=!1},u=function(e){t.value.setToEdit(e),n.value=!0};return Object(r["C"])(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a()}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))),{inventory:e,inventoryModal:n,inventoryRef:t,refreshList:o,updateAction:u,receiveProductAction:c}}});ie.render=l;t["default"]=ie;I()(ie,"components",{QBtn:R["a"]})},b837:function(e,t,n){},ffc4:function(e,t,n){"use strict";var r=n("7a23"),c={class:"text-h6"};function a(e,t,n,a,o,u){var l=Object(r["L"])("q-space"),s=Object(r["L"])("q-btn"),i=Object(r["L"])("q-card-section"),d=Object(r["L"])("q-card"),b=Object(r["L"])("q-dialog"),p=Object(r["M"])("close-popup");return Object(r["F"])(),Object(r["g"])(b,Object(r["v"])(Object(r["o"])(e.$attrs)),{default:Object(r["T"])((function(){return[Object(r["l"])(d,{style:Object(r["w"])("max-width: ".concat(e.width,"; width: 100%"))},{default:Object(r["T"])((function(){return[Object(r["l"])(i,{class:"row items-center q-pb-none"},{default:Object(r["T"])((function(){return[Object(r["j"])("div",c,Object(r["O"])(e.title),1),Object(r["l"])(l),Object(r["U"])(Object(r["l"])(s,{icon:"close",flat:"",round:"",dense:""},null,512),[[p]])]})),_:1}),Object(r["l"])(i,null,{default:Object(r["T"])((function(){return[Object(r["K"])(e.$slots,"default")]})),_:3})]})),_:3},8,["style"])]})),_:3},16)}var o=Object(r["m"])({props:{title:{type:String},width:{type:String,default:function(){return"450px"}}},setup:function(){}}),u=n("24e8"),l=n("f09f"),s=n("a370"),i=Object(r["p"])("div",{class:"q-space"}),d=Object(r["m"])({name:"QSpace",setup:function(){return function(){return i}}}),b=n("9c40"),p=n("7f67"),v=n("93dc"),j=n.n(v);o.render=a;t["a"]=o;j()(o,"components",{QDialog:u["a"],QCard:l["a"],QCardSection:s["a"],QSpace:d,QBtn:b["a"]}),j()(o,"directives",{ClosePopup:p["a"]})}}]);
//# sourceMappingURL=chunk-6bfe9c6d.99313810.js.map