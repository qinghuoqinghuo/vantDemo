(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"26fc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-tabbar",{attrs:{"active-color":"#ED1C24","inactive-color":"#000","safe-area-inset-bottom":!0},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("van-tabbar-item",{attrs:{icon:"home-o",info:t.info,name:"a",to:"/"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"fire-o",name:"b",to:"/live"}},[t._v("直播")]),a("van-tabbar-item",{attrs:{icon:"gem-o",name:"c"}},[t._v("vip会员")]),a("van-tabbar-item",{attrs:{icon:"gift-o",name:"d",to:"/shopCar"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"friends-o",name:"e",to:"/user"}},[t._v("个人中心")])],1)},i=[],r={props:["activeTabBottom","indexInfo"],data:function(){return{activeTab:this.activeTabBottom,info:this.indexInfo}}},o=r,s=a("2877"),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},"38f3":function(t,e,a){t.exports=a.p+"img/1.e8813bac.jpg"},"4acd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-grid",{attrs:{"column-num":t.columnNum,gutter:t.gutter}},t._l(t.gridData,(function(e,n){return a("van-grid-item",{key:n,attrs:{icon:t.showIcon(e.icon),text:t.showIcon(e.text)},on:{click:function(a){return t.clickGrid(e)}}},[e.src&&!e.icon?a("van-image",{attrs:{src:e.src}}):t._e(),e.title?a("p",{staticClass:"gridTitle"},[t._v(t._s(e.title))]):t._e(),e.subTitle?a("p",{staticClass:"gridSubTitle"},[t._v(t._s(e.subTitle))]):t._e()],1)})),1)},i=[],r={props:["gridData","columnNum","gutter"],data:function(){return{}},methods:{clickGrid:function(t){this.$router.push({path:"/live",query:{title:t.title}})},showIcon:function(t){if(t)return t}}},o=r,s=(a("d812"),a("2877")),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},"4e68":function(t,e,a){t.exports=a.p+"img/5.dce81c1f.jpg"},"520a":function(t,e,a){t.exports=a.p+"img/11.4cac4ed8.jpg"},"5e10":function(t,e,a){t.exports=a.p+"img/10.b7ef34d4.jpg"},"621f":function(t,e,a){"use strict";var n=a("c3c8"),i=a.n(n);i.a},7220:function(t,e,a){t.exports=a.p+"img/6.c1e4f2ad.jpg"},7338:function(t,e,a){t.exports=a.p+"img/8.d586a9ad.jpg"},"7de7":function(t,e,a){t.exports=a.p+"img/9.8da80f6a.jpg"},a760:function(t,e,a){t.exports=a.p+"img/3.4b93750c.jpg"},ab86:function(t,e,a){t.exports=a.p+"img/4.45ab42d1.jpg"},b790:function(t,e,a){},b9fe:function(t,e,a){t.exports=a.p+"img/12.0ad47f5f.jpg"},c3c8:function(t,e,a){},cedd:function(t,e,a){t.exports=a.p+"img/2.09513376.jpg"},d812:function(t,e,a){"use strict";var n=a("b790"),i=a.n(n);i.a},de17:function(t,e,a){t.exports=a.p+"img/7.8c28de17.jpg"},e85c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-cell",{attrs:{title:t.title,icon:"medal-o","is-link":"",to:t.to}},[a("van-icon",{staticStyle:{"line-height":"inherit"},attrs:{slot:"right-icon",name:"arrow"},slot:"right-icon"})],1)},i=[],r={props:["title","to"],data:function(){return{}}},o=r,s=a("2877"),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tab",{attrs:{activeTabTop:t.activeTabTop}}),a("Search",{attrs:{search:t.search,searchDefault:t.searchDefault}}),a("van-pull-refresh",{staticStyle:{"padding-bottom":"50px"},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[t.loading?t._e():a("Carousel",{attrs:{imgData:t.imgData}}),t.loading?t._e():a("Noticebar",{attrs:{noticeBar:t.noticeBar}}),t.loading?a("Skeleton",{attrs:{skeleton:t.skeleton}}):t._e(),t.loading?a("Skeleton",{attrs:{skeleton:t.skeleton}}):t._e(),t.loading?a("Skeleton",{attrs:{skeleton:t.skeleton}}):t._e(),t.loading?a("Skeleton",{attrs:{skeleton:t.skeleton}}):t._e(),t.loading?a("Skeleton",{attrs:{skeleton:t.skeleton}}):t._e(),t.loading?t._e():a("Cell",{attrs:{title:t.title,to:t.to}}),t.loading?t._e():a("Grid",{attrs:{gridData:t.gridData,columnNum:2,gutter:4}}),t.loading?t._e():a("Cell",{attrs:{title:t.title2,to:t.to2}}),t.loading?t._e():a("Grid",{attrs:{gridData:t.gridData2,columnNum:2,gutter:4}})],1),a("Tabbar",{attrs:{activeTabBottom:t.activeTabBottom,indexInfo:t.indexInfo}})],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-tabs",{attrs:{"title-active-color":"red"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("van-tab",{attrs:{title:"精选",name:"a"}}),a("van-tab",{attrs:{title:"爱看",name:"b"}}),a("van-tab",{attrs:{title:"战疫",name:"c"}}),a("van-tab",{attrs:{title:"电视剧",name:"d"}}),a("van-tab",{attrs:{title:"电影",name:"e"}}),a("van-tab",{attrs:{title:"综艺",name:"f"}})],1)},o=[],s={props:["activeTabTop"],data:function(){return{activeTab:this.activeTabTop}},methods:{}},l=s,c=a("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-search",{attrs:{placeholder:t.searchDefault},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})},d=[],b={props:["search","searchDefault"],data:function(){return{}}},v=b,m=Object(c["a"])(v,p,d,!1,null,null,null),g=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.imgData,(function(e,n){return a("van-swipe-item",{key:n,on:{click:t.clickSwipe}},[a("div",{staticClass:"navImg",class:"navImg"+n})])})),1)},T=[],_={props:["imgData"],data:function(){return{}},methods:{clickSwipe:function(){this.$router.push({path:"/live"})}}},x=_,k=(a("621f"),Object(c["a"])(x,h,T,!1,null,"26edb43e",null)),D=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-notice-bar",{attrs:{text:t.noticeBar,"left-icon":"volume-o"}})},w=[],I={props:["noticeBar"],data:function(){return{}}},S=I,y=Object(c["a"])(S,j,w,!1,null,null,null),C=y.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-skeleton",{attrs:{title:"",avatar:"",row:t.skeleton}})},B=[],E={props:["skeleton"],data:function(){return{}}},O=E,M=Object(c["a"])(O,$,B,!1,null,null,null),N=M.exports,A=a("26fc"),G=a("4acd"),J=a("e85c"),R=a("38f3"),q=a.n(R),K=a("cedd"),P=a.n(K),z=a("a760"),F=a.n(z),H=a("ab86"),L=a.n(H),Q=a("4e68"),U=a.n(Q),V=a("7220"),W=a.n(V),X=a("de17"),Y=a.n(X),Z=a("7338"),tt=a.n(Z),et=a("7de7"),at=a.n(et),nt=a("5e10"),it=a.n(nt),rt=a("520a"),ot=a.n(rt),st=a("b9fe"),lt=a.n(st),ct={name:"about",data:function(){return{title:"重磅热播",to:"live",title2:"热门综艺",to2:"live",loading:!1,refreshing:!1,search:"",searchDefault:"安家张萌",searchDefaultArray:["安家张萌","吴奇隆电视剧","孙俪罗晋cp","侧方停车位技巧","完美关系"],activeTabTop:"a",activeTabBottom:"a",noticeBar:"38岁的孙俪主演的《安家》上线，用自信走出生活的泥潭。    多次获得“最有价值独立公关人”殊荣的公关业界高手卫哲，人脉强大手段百出，风采不凡情商高。而临危受命的公关新人江达琳上任总裁，天性耿直且嘴炮力Max，智商高实战强，是有潜力的行业清流。两人组成“公关合伙人”，与时间赛跑联手征战危机，揭开热点新闻背后。",gridData:[{src:it.a,title:"欢乐喜剧人•太逗了",subTitle:"二龙湖浩哥模拟郭德纲撩妹"},{src:F.a,title:"王牌对王牌•辣眼睛",subTitle:"沈腾要取贾玲,狂喊我爱你"},{src:Y.a,title:"枕上书•发糖了",subTitle:"又撒娇!凤九唱歌谣哄帝君"},{src:U.a,title:"我在北京等你•更新",subTitle:"故事会大王徐天宽慰盛夏"},{src:tt.a,title:"斗罗大陆•热播",subTitle:"帅如剑仙!剑斗罗御万剑!"},{src:at.a,title:"医生助你睡个安心觉",subTitle:"疫情期间太焦虑?"}],gridData2:[{src:q.a,title:"奔跑吧•阵容曝光",subTitle:"老成员聚首无望 他成新MC?"},{src:lt.a,title:"见字如面•陈数读信",subTitle:"妻子致丈夫:愿夫无恙凯旋"},{src:W.a,title:"天赐的声音•逆天高音",subTitle:"华晨宇张杰张韶涵神仙打架"},{src:L.a,title:"我家那闺女•策划",subTitle:"超雷人,贾玲郑爽PK化妆"},{src:ot.a,title:"歌手•周深唱网红曲",subTitle:"野狼disco+萨日朗  听嗨"},{src:P.a,title:"欢乐喜剧人6•爆笑同居",subTitle:"宋小宝袁姗姗穿裙子跳芭蕾"}],indexInfo:5,imgData:[{title:"",src:""},{title:"",src:""},{title:"",src:""}],skeleton:5}},components:{Tab:f,Search:g,Carousel:D,Noticebar:C,Skeleton:N,Tabbar:A["a"],Grid:G["a"],Cell:J["a"]},methods:{getTab:function(t){var e=this;e.activeTabTop=t},onRefresh:function(){var t=this;t.refreshing=!0,t.loading=!0,setTimeout((function(){t.refreshing=!1,t.loading=!1,t.searchDefault=t.getDiffText(t.searchDefaultArray[parseInt(Math.random()*t.searchDefaultArray.length)]),t.indexInfo=parseInt(5*Math.random())+1,t.skeleton=parseInt(3*Math.random())+3;for(var e=[],a=0;a<parseInt(3*Math.random())+2;a++)e.push({title:"",src:""});t.imgData=e}),2e3)},getDiffText:function(t){var e=this;return t!==e.searchDefault?t:e.getDiffText(e.searchDefaultArray[parseInt(Math.random()*e.searchDefaultArray.length)])}}},ut=ct,ft=Object(c["a"])(ut,n,i,!1,null,null,null);e["default"]=ft.exports}}]);
//# sourceMappingURL=about.8deb500b.js.map