(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2d62":function(t,a,e){"use strict";e("96af")},"96af":function(t,a,e){},d843:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",{},[a("h5",{staticClass:"text-center text-accent"},[t._v("USER")]),a("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-left":"25px","margin-right":"25px"}},[a("h6",{staticStyle:{"background-color":"rgba(25, 118, 210,0.5)","border-radius":"50px","padding-left":"15px","padding-right":"15px"}},[t._v("Total User - "+t._s(t.count))]),a("h6",{staticStyle:{"background-color":"rgba(161, 210, 25, 0.5)","border-radius":"50px","padding-left":"15px","padding-right":"15px"}},[t._v("Total Recharge - "+t._s(t.getRec()))]),a("h6",{staticStyle:{"background-color":"rgba(210, 47, 25, 0.5)","border-radius":"50px","padding-left":"15px","padding-right":"15px"}},[t._v("Total Withdraw - "+t._s(t.getWid()))]),a("h6",{staticStyle:{"background-color":"rgba(201, 25, 210, 0.5)","border-radius":"50px","padding-left":"15px","padding-right":"15px"}},[t._v("Total Commission - "+t._s(t.getComm()))])]),a("div",{staticStyle:{margin:"25px",width:"fit-content",overflow:"scroll"}},[a("table",{staticStyle:{width:"max-content",overflow:"scroll"}},[a("tr",[a("th",{staticClass:"head"},[t._v("Sr. No.")]),a("th",{staticClass:"head"},[t._v("Mobile")]),a("th",{staticClass:"head"},[t._v("E-mail")]),a("th",{staticClass:"head"},[t._v("Password")]),a("th",{staticClass:"head"},[t._v("Code")]),a("th",{staticClass:"head"},[t._v("Refer By")]),a("th",{staticClass:"head"},[t._v("Refer To")]),a("th",{staticClass:"head"},[t._v("Status")]),a("th",{staticClass:"head"},[t._v("Balance")]),a("th",{staticClass:"head"},[t._v("Total Recharge")]),a("th",{staticClass:"head"},[t._v("Total Withdraw")]),a("th",{staticClass:"head"},[t._v("Commission Earned")]),a("th",{staticClass:"head"},[t._v("Today's Earning")]),a("th",{staticClass:"head"},[t._v("Operation")]),a("th",{staticClass:"head"},[t._v("Bank Name")]),a("th",{staticClass:"head"},[t._v("A/c number")]),a("th",{staticClass:"head"},[t._v("A/c holder name")]),a("th",{staticClass:"head"},[t._v("IFSC")]),a("th",{staticClass:"head"},[t._v("UPI")])]),t._l(t.user,(function(e,s){return a("tr",{key:e.key},[a("td",{staticClass:"data"},[t._v(t._s(s+1))]),a("td",{staticClass:"data"},[t._v(t._s(e.user.mobile))]),a("td",{staticClass:"data"},[t._v(t._s(e.user.email))]),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.user.password,callback:function(a){t.$set(e.user,"password",a)},expression:"u.user.password"}}),a("br"),a("q-btn",{staticStyle:{width:"100%"},attrs:{color:"blue",label:"reset"},on:{click:function(a){return t.reset(e.key,e.user.password)}}})],1),a("td",{staticClass:"data"},[t._v(t._s(e.code))]),a("td",{staticClass:"data"},[t._v(t._s(e.user.refer_by))]),a("td",{staticClass:"data"},[a("ul",{staticStyle:{"list-style":"none"}},t._l(e.user.refer_to,(function(e){return a("li",{key:e,staticStyle:{"margin-left":"-25px"}},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),a("td",{staticClass:"data"},[1==e.status?a("q-btn",{attrs:{color:"red"},on:{click:function(a){return t.chngStatus(e.key)}}},[t._v("Block")]):t._e(),0==e.status?a("q-btn",{attrs:{color:"green"},on:{click:function(a){return t.chngStatus(e.key)}}},[t._v("Active")]):t._e()],1),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.wallet.balance,callback:function(a){t.$set(e.wallet,"balance",a)},expression:"u.wallet.balance"}})],1),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.wallet.total_recharge,callback:function(a){t.$set(e.wallet,"total_recharge",a)},expression:"u.wallet.total_recharge"}})],1),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.wallet.total_withdraw,callback:function(a){t.$set(e.wallet,"total_withdraw",a)},expression:"u.wallet.total_withdraw"}})],1),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.wallet.earn_commission,callback:function(a){t.$set(e.wallet,"earn_commission",a)},expression:"u.wallet.earn_commission"}})],1),a("td",{staticClass:"data"},[a("q-input",{attrs:{type:"text"},model:{value:e.wallet.today_earning,callback:function(a){t.$set(e.wallet,"today_earning",a)},expression:"u.wallet.today_earning"}})],1),a("td",{staticClass:"data"},[a("q-btn",{attrs:{color:"blue"},on:{click:function(a){return t.chng(e)}}},[t._v("Update")])],1),a("td",{staticClass:"data"},[t._v(t._s(e.bank.bank_name))]),a("td",{staticClass:"data"},[t._v(t._s(e.bank.ac_no))]),a("td",{staticClass:"data"},[t._v(t._s(e.bank.ac_name))]),a("td",{staticClass:"data"},[t._v(t._s(e.bank.ifsc))]),a("td",{staticClass:"data"},[t._v(t._s(e.bank.upi))])])}))],2)])])},l=[],i=e("cee4"),n={name:"PageIndex",data(){return{user:{},count:0}},mounted(){i["a"].get("https://sdi-api.deta.dev/user").then((t=>{console.log(t.data.items),this.user=t.data.items,this.count=t.data.count}))},methods:{getComm(){let t=0;return this.user.forEach((a=>{t+=parseFloat(a.wallet.earn_commission)})),t.toFixed(2)},getRec(){let t=0;return this.user.forEach((a=>{t+=parseFloat(a.wallet.total_recharge)})),t.toFixed(2)},getWid(){let t=0;return this.user.forEach((a=>{t+=parseFloat(a.wallet.total_withdraw)})),t.toFixed(2)},chng(t){var a={data:t},e={method:"put",maxBodyLength:1/0,url:"https://sdi-api.deta.dev/user",headers:{"Content-Type":"application/json"},data:a};Object(i["a"])(e).then((function(t){console.log(JSON.stringify(t.data)),location.reload()})).catch((function(t){console.log(t)}))},reset(t,a){if(""!=a){var e={key:t,password:a},s={method:"post",maxBodyLength:1/0,url:"https://sdi-api.deta.dev/reset-pass",data:e};Object(i["a"])(s).then((t=>{console.log(t.data.items),this.user=t.data.items})).catch((function(t){console.log(t)}))}},chngStatus(t){i["a"].post("https://sdi-api.deta.dev/user-status",{key:t}).then((t=>{console.log(t.data.items),this.user=t.data.items}))}}},o=n,r=(e("2d62"),e("2877")),c=e("9989"),d=e("27f9"),u=e("9c40"),h=e("eebe"),p=e.n(h),_=Object(r["a"])(o,s,l,!1,null,"6f5b2714",null);a["default"]=_.exports;p()(_,"components",{QPage:c["a"],QInput:d["a"],QBtn:u["a"]})}}]);