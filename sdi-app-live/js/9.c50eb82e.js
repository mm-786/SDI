(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{5176:function(t,e,a){},"6b31":function(t,e,a){"use strict";a.r(e);a("5319");var s=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"bg-primary"},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",{staticClass:"bg-secondary"},[e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_back_ios"},on:{click:function(e){return t.$router.go(-1)}}}),e("q-toolbar-title",{staticClass:"text-center text-bold"},[t._v(" TRANSACTION ")]),e("q-btn",{attrs:{flat:"",round:"",dense:"",disable:""},on:{click:function(e){t.$store.commit("user",0),t.$router.replace("/login")}}})],1)],1),e("q-tabs",{staticClass:"text-white bg-grey",staticStyle:{position:"sticky"},attrs:{dense:"","active-color":"secondary","indicator-color":"secondary",align:"justify","narrow-indicator":""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[e("q-tab",{attrs:{name:"all",label:"All"}}),e("q-tab",{attrs:{name:"debit",label:"Debit"}}),e("q-tab",{attrs:{name:"credit",label:"Credit"}})],1),e("div",t._l(t.tnx,(function(a){return e("div",{directives:[{name:"show",rawName:"v-show",value:a.user==t.$store.state.user.key&&(a.type==t.tabs||"all"==t.tabs),expression:"t.user==$store.state.user.key && (t.type==tabs || tabs=='all')"}],key:a,staticStyle:{padding:"5px"}},[e("div",{staticClass:"bg-accent boxed"},[e("span",{staticClass:"text-white text-bold",staticStyle:{"font-size":"large"}},[t._v(t._s(a.remarks))]),"debit"==a.type?e("span",{staticClass:"text-white text-bold bg-red",staticStyle:{"font-size":"large",float:"right",padding:"0px 5px","border-radius":"3px"}},[t._v("-"+t._s(a.points))]):t._e(),"credit"==a.type?e("span",{staticClass:"text-white text-bold bg-green",staticStyle:{"font-size":"large",float:"right",padding:"0px 5px","border-radius":"3px"}},[t._v("+"+t._s(a.points))]):t._e(),e("br"),"debit"==a.type?e("span",{staticClass:"text-red text-bold",staticStyle:{"font-size":"small"}},[t._v("Debit")]):t._e(),"credit"==a.type?e("span",{staticClass:"text-green text-bold",staticStyle:{"font-size":"small"}},[t._v("Credit")]):t._e(),e("span",{staticClass:"text-secondary text-bold",staticStyle:{"font-size":"small",float:"right"}},[t._v(t._s(a.date))])])])})),0)],1)},i=[],r=a("cee4"),l={name:"PageIndex",data(){return{tabs:"all",tnx:[]}},mounted(){var t={key:this.$store.state.user.key},e={method:"get",maxBodyLength:1/0,url:"https://sdi-api.deta.dev/tnxu",data:t};Object(r["a"])(e).then((t=>{console.log(t.data),this.tnx=t.data.items})).catch((t=>{console.log(t)}))}},n=l,o=(a("a6c0"),a("2877")),c=a("9989"),d=a("e359"),b=a("65c6"),p=a("9c40"),u=a("6ac5"),x=a("429b"),g=a("7460"),y=a("eebe"),f=a.n(y),v=Object(o["a"])(n,s,i,!1,null,"1a2f5aec",null);e["default"]=v.exports;f()(v,"components",{QPage:c["a"],QHeader:d["a"],QToolbar:b["a"],QBtn:p["a"],QToolbarTitle:u["a"],QTabs:x["a"],QTab:g["a"]})},a6c0:function(t,e,a){"use strict";a("5176")}}]);