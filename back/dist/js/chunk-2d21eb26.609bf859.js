(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eb26"],{d752:function(e,n,t){"use strict";t.r(n);var c=t("7a23"),a={class:"row justify-center q-pa-md"};function o(e,n,t,o,i,r){var u=Object(c["M"])("q-btn"),l=Object(c["M"])("Table"),s=Object(c["M"])("NewInvoice");return Object(c["G"])(),Object(c["i"])("div",null,[Object(c["W"])(Object(c["j"])("h6",{class:"q-my-sm",onClick:n[0]||(n[0]=function(n){return e.viewInvoiceModal=!e.viewInvoiceModal})},"Go back to Customer Invoices",512),[[c["T"],e.viewInvoiceModal]]),Object(c["W"])(Object(c["j"])("div",a,[Object(c["m"])(l,{class:"full-width",data:e.data,tableDef:e.tableDef,isLoading:e.isLoading},{actions:Object(c["V"])((function(n){var t=n.props;return[Object(c["m"])(u,{onClick:function(n){return e.viewInvoiceAction(t.row)},icon:"receipt",unelevated:""},null,8,["onClick"])]})),_:1},8,["data","tableDef","isLoading"])],512),[[c["T"],!e.viewInvoiceModal]]),Object(c["W"])(Object(c["j"])("div",null,[Object(c["m"])(s,{ref:"viewInvoiceRef"},null,512)],512),[[c["T"],e.viewInvoiceModal]])])}var i=t("1da1"),r=(t("96cf"),t("6c02")),u=t("2b60"),l=t("79ec"),s=t("bcc3"),v=t("7255"),b=t("b5ff"),d=t("b028"),w=Object(c["n"])({components:{NewInvoice:l["default"],Table:v["a"]},setup:function(){var e=Object(c["J"])([]),n=Object(r["c"])(),t=Object(c["J"])(),a=Object(c["J"])(!1),o=Object(c["J"])(!0),l=Object(c["J"])(new d["a"]),v=Object(c["J"])(new b["a"]([new s["a"]("customerName","Name",!0),new s["a"]("invoiceNo","Invoice No.",!0),new s["a"]("reference","Reference",!0),new s["a"]("totalValue","Amount",!0),new s["a"]("actions","Actions",!1,!0)])),w=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t.value.setToEdit(n),a.value=!0}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(e){console.log(e)},j=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,o.value=!0,t.next=4,u["a"].getInvoice(n.params.id);case 4:e.value=t.sent,l.value.results=e.value,o.value=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(c["D"])(Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:try{j(),console.log(e)}catch(t){console.log(t)}case 1:case"end":return n.stop()}}),n)})))),{data:l,clicked:f,tableDef:v,invoices:e,isLoading:o,viewInvoiceAction:w,viewInvoiceModal:a,viewInvoiceRef:t}}}),f=t("9c40"),j=t("f09f"),p=t("a370"),O=t("93dc"),m=t.n(O);w.render=o;n["default"]=w;m()(w,"components",{QBtn:f["a"],QCard:j["a"],QCardSection:p["a"]})}}]);
//# sourceMappingURL=chunk-2d21eb26.609bf859.js.map