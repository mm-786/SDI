(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1d9f":function(t,e,i){},"946d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{},[e("h5",{staticClass:"text-center text-accent"},[t._v("UPIs")]),e("div",{staticStyle:{margin:"25px",width:"fit-content",overflow:"scroll",display:"flex","justify-content":"space-between"}},[e("div",{staticStyle:{width:"50%"}},[e("div",{staticClass:"q-gutter-sm"},[e("q-radio",{attrs:{val:"A",label:"A"},model:{value:t.grp,callback:function(e){t.grp=e},expression:"grp"}}),e("q-radio",{attrs:{val:"B",label:"B"},model:{value:t.grp,callback:function(e){t.grp=e},expression:"grp"}}),e("q-radio",{attrs:{val:"C",label:"C"},model:{value:t.grp,callback:function(e){t.grp=e},expression:"grp"}}),e("q-radio",{attrs:{val:"D",label:"D"},model:{value:t.grp,callback:function(e){t.grp=e},expression:"grp"}}),e("q-radio",{attrs:{val:"E",label:"E"},model:{value:t.grp,callback:function(e){t.grp=e},expression:"grp"}})],1),e("q-input",{attrs:{label:"Upi","stack-label":""},model:{value:t.upi,callback:function(e){t.upi=e},expression:"upi"}}),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("q-btn",{staticStyle:{width:"45%",margin:"5px"},attrs:{color:"purple",label:"ADD"},on:{click:function(e){return t.addUpi()}}}),e("q-btn",{staticStyle:{width:"45%",margin:"5px"},attrs:{color:"green",label:"Save"},on:{click:function(e){return t.saveUpi()}}})],1),e("br")],1),e("table",{staticStyle:{width:"50%",overflow:"scroll"}},[e("tr",[e("th",{staticClass:"head"},[t._v("Group")]),e("th",{staticClass:"head"},[t._v("UPIs")])]),t._l(t.upiObj,(function(i,a){return e("tr",{key:i},[e("td",{staticClass:"data text-center"},[t._v("\n          "+t._s(a)+"\n        ")]),e("td",{staticClass:"data"},[e("ol",t._l(i,(function(i,s){return e("li",{key:i,staticClass:"flex",staticStyle:{"justify-content":"space-between","border-bottom":"1px solid #1976D2"}},[e("span",[t._v(t._s(i))]),e("span",{staticClass:"text-red",on:{click:function(e){return t.remove(a,s)}}},[t._v("DELETE")])])})),0)])])}))],2)])])},s=[],l=(i("14d9"),i("cee4")),n={name:"PageIndex",data(){return{grp:"A",upi:"",grpList:["A","B","C","D","E"],upiObj:{}}},mounted(){l["a"].get("https://sdi-api.deta.dev/upi").then((t=>{console.log(t.data),this.upiObj=t.data.upi}))},methods:{remove(t,e){let i=this.upiObj[t];i.splice(e,1),this.upiObj[t]=i,this.$forceUpdate()},saveUpi(){l["a"].post("https://sdi-api.deta.dev/upi",{upi:this.upiObj}).then((t=>{console.log(t.data.items),this.upiObj=t.data.upi}))},addUpi(){""!=this.upi&&(void 0==this.upiObj[this.grp]?this.upiObj[this.grp]=[this.upi]:this.upiObj[this.grp].push(this.upi)),this.upi="",console.log(this.upiObj)}}},p=n,r=(i("c5b5"),i("2877")),c=i("9989"),o=i("3786"),u=i("27f9"),d=i("9c40"),b=i("eebe"),h=i.n(b),v=Object(r["a"])(p,a,s,!1,null,"b5e1e40c",null);e["default"]=v.exports;h()(v,"components",{QPage:c["a"],QRadio:o["a"],QInput:u["a"],QBtn:d["a"]})},c5b5:function(t,e,i){"use strict";i("1d9f")}}]);