(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47144172"],{"0f71":function(t,e,n){t.exports=n.p+"img/user.c0214779.png"},"26fc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{attrs:{"active-color":"#ED1C24","inactive-color":"#000","safe-area-inset-bottom":!0},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[n("van-tabbar-item",{attrs:{icon:"home-o",info:t.info,name:"a",to:"/"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"fire-o",name:"b",to:"/live"}},[t._v("直播")]),n("van-tabbar-item",{attrs:{icon:"gem-o",name:"c"}},[t._v("vip会员")]),n("van-tabbar-item",{attrs:{icon:"gift-o",name:"d",to:"/shopCar"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{icon:"friends-o",name:"e",to:"/user"}},[t._v("个人中心")])],1)},i=[],a={props:["activeTabBottom","indexInfo"],data:function(){return{activeTab:this.activeTabBottom,info:this.indexInfo}}},c=a,r=n("2877"),s=Object(r["a"])(c,o,i,!1,null,null,null);e["a"]=s.exports},"4acd":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-grid",{attrs:{"column-num":t.columnNum,gutter:t.gutter}},t._l(t.gridData,(function(e,o){return n("van-grid-item",{key:o,attrs:{icon:t.showIcon(e.icon),text:t.showIcon(e.text)},on:{click:function(n){return t.clickGrid(e)}}},[e.src&&!e.icon?n("van-image",{attrs:{src:e.src}}):t._e(),e.title?n("p",{staticClass:"gridTitle"},[t._v(t._s(e.title))]):t._e(),e.subTitle?n("p",{staticClass:"gridSubTitle"},[t._v(t._s(e.subTitle))]):t._e()],1)})),1)},i=[],a={props:["gridData","columnNum","gutter"],data:function(){return{}},methods:{clickGrid:function(t){this.$router.push({path:"/live",query:{title:t.title}})},showIcon:function(t){if(t)return t}}},c=a,r=(n("d812"),n("2877")),s=Object(r["a"])(c,o,i,!1,null,null,null);e["a"]=s.exports},a547:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-pull-refresh",{staticStyle:{"padding-bottom":"50px"},on:{refresh:t.onRefresh},model:{value:t.refresh,callback:function(e){t.refresh=e},expression:"refresh"}},[n("van-row",[n("van-col",{attrs:{span:"3"}},[n("van-image",{attrs:{round:"",width:"2.6rem",height:"2.6rem",src:t.photo}})],1),n("van-col",{attrs:{span:"21"}},[n("van-cell",{staticStyle:{height:"2.6rem"},attrs:{title:"青火+",center:""}},[n("van-icon",{staticStyle:{"line-height":"inherit"},attrs:{slot:"right-icon",name:"search"},slot:"right-icon"})],1)],1)],1),n("Grid",{attrs:{gridData:t.gridData,columnNum:4,gutter:10}}),n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),n("Cell",{attrs:{title:t.title2}}),n("Grid",{attrs:{gridData:t.gridData2,columnNum:4,gutter:10}}),n("Cell",{attrs:{title:t.title3}}),n("Grid",{attrs:{gridData:t.gridData3,columnNum:4,gutter:10}}),n("Cell",{attrs:{title:t.title4}}),n("Grid",{attrs:{gridData:t.gridData4,columnNum:4,gutter:10}}),t.showList?n("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1):t._e()],1),n("Tabbar",{attrs:{activeTabBottom:t.activeTabBottom,indexInfo:t.indexInfo}})],1)},i=[],a=n("4acd"),c=n("26fc"),r=n("e85c"),s=n("0f71"),l=n.n(s),u={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},h={name:"live",data:function(){return{refresh:!1,showList:!1,photo:l.a,title2:"视频功能",title3:"免流量,看视频",title4:"限时推广",activeTabBottom:"e",indexInfo:5,chosenCoupon:-1,coupons:[u],disabledCoupons:[u],gridData:[{title:"VIP会员",subTitle:"2020-07-29"},{title:"我的钻石",subTitle:"立即充值"},{title:"VIP待领取",subTitle:"@你 领28天"},{title:"我的积分",subTitle:"免费兑换好礼"}],gridData2:[{icon:"hot-o",text:"关注"},{icon:"video-o",text:"电视助手"},{icon:"shop-collect-o",text:"明星装扮"},{icon:"smile-comment-o",text:"Siri捷径"}],gridData3:[{icon:"gift-o",text:"腾讯网卡"},{icon:"gem-o",text:"急速5G"},{icon:"flower-o",text:"移动花卡"},{icon:"star-o",text:"电信畅想卡"},{icon:"bar-chart-o",text:"免费WIFI"},{icon:"logistics",text:"移动免流"}],gridData4:[{icon:"envelop-o",text:"领28天VIP"},{icon:"tv-o",text:"免费看电视"},{icon:"balance-o",text:"招行送会员"},{icon:"certificate",text:"平安送会员"},{icon:"scan",text:"公众号领VIP"},{icon:"logistics",text:"积分商城"},{icon:"description",text:"积分公益捐"},{icon:"debit-pay",text:"我的电影票"},{icon:"balance-pay",text:"小鹅花钱"},{icon:"cashier-o",text:"腾讯会议"}]}},components:{Tabbar:c["a"],Grid:a["a"],Cell:r["a"]},methods:{onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(t){this.coupons.push(u)},onRefresh:function(){var t=this;t.refresh=!0,setTimeout((function(){t.refresh=!1}),2e3)}}},d=h,p=n("2877"),v=Object(p["a"])(d,o,i,!1,null,null,null);e["default"]=v.exports},b790:function(t,e,n){},d812:function(t,e,n){"use strict";var o=n("b790"),i=n.n(o);i.a},e85c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell",{attrs:{title:t.title,icon:"medal-o","is-link":"",to:t.to}},[n("van-icon",{staticStyle:{"line-height":"inherit"},attrs:{slot:"right-icon",name:"arrow"},slot:"right-icon"})],1)},i=[],a={props:["title","to"],data:function(){return{}}},c=a,r=n("2877"),s=Object(r["a"])(c,o,i,!1,null,null,null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-47144172.887d144f.js.map