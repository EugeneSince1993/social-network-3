(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",function(){return A}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return c});var r=n(125),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"10d1df30-b410-4e73-8698-e8f7d0bef15b"}}),A={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},c={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},126:function(e,t,n){e.exports={userPhoto:"users_userPhoto__30bn_"}},127:function(e,t,n){e.exports=n.p+"static/media/preloader.27fc27b6.svg"},156:function(e,t,n){e.exports=n(300)},161:function(e,t,n){},163:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return f});var r=n(87),a=n(0),A=n.n(a),o=n(41),u=n.n(o),c=n(79),s=(n(39),function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,o=n&&r;return A.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},A.a.createElement("div",null,a),o&&A.a.createElement("span",null,r))}),l=function(e){var t=e.input,n=Object(r.a)(e,["input"]);return A.a.createElement(s,e,A.a.createElement("textarea",Object.assign({},t,n)))},i=function(e){var t=e.input,n=Object(r.a)(e,["input"]);return A.a.createElement(s,e,A.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return A.a.createElement("div",null,A.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",o)}},24:function(e,t,n){e.exports={nav:"Navbar_nav__3xhAD",item:"Navbar_item__1hYzp"}},300:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),A=n(50),o=n.n(A),u=(n(161),n(29)),c=n(30),s=n(33),l=n(31),i=n(34),f=(n(163),n(24)),p=n.n(f),m=n(14),d=function(e){return{color:e.isActive?"gold":""}},g=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/profile",style:d},"Profile")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/dialogs",style:d},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/users",style:d},"Users")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/news",style:d},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/music",style:d},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/settings",style:d},"Settings")))},v=(n(166),function(e){return a.a.createElement("div",null,"News")}),h=(n(168),function(e){return a.a.createElement("div",null,"Music")}),E=(n(170),function(e){return a.a.createElement("div",null,"Settings")}),b=n(1),w=n(13),O=n(7),C=n.n(O),S=n(12),y=n(32),j=n(8),P=n(10),k=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(j.a)({},e,r):e})},L={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},U=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},B=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},z=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},M=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},D=function(){var e=Object(S.a)(C.a.mark(function e(t,n,r,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(M(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)({},e,{users:k(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)({},e,{users:k(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(j.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(j.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(j.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(j.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},T=n(87),q=n(52),F=n(22),Z=n(56),G=n.n(Z),V=n(60),W=n.n(V),x=function(e){for(var t=e.totalItemsCount,n=e.pageSize,A=e.currentPage,o=e.onPageChanged,u=e.portionSize,c=void 0===u?10:u,s=Math.ceil(t/n),l=[],i=1;i<=s;i++)l.push(i);var f=Math.ceil(s/c),p=Object(r.useState)(1),m=Object(F.a)(p,2),d=m[0],g=m[1],v=(d-1)*c+1,h=d*c;return a.a.createElement("div",{className:W()(G.a.paginator)},d>1&&a.a.createElement("button",{onClick:function(){g(d-1)}},"PREV"),l.filter(function(e){return e>=v&&e<=h}).map(function(e){return a.a.createElement("span",{className:W()(Object(q.a)({},G.a.selectedPage,A===e),G.a.pageNumber),key:e,onClick:function(t){o(e)}},e)}),f>d&&a.a.createElement("button",{onClick:function(){g(d+1)}},"NEXT"))},Q=n(72),X=n.n(Q),K=n(126),R=n.n(K),Y=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,A=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:X.a,className:R.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){A(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},J=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,A=e.onPageChanged,o=e.users,u=Object(T.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(x,{currentPage:t,onPageChanged:A,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,o.map(function(e){return a.a.createElement(Y,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})})))},H=n(35),_=n(73),$=n(9),ee=n(130),te=Object(ee.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),A=0;A<r;A++)a[A]=arguments[A];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(H.a,null):null,a.a.createElement(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ce=Object($.d)(Object(w.b)(function(e){return{users:te(e),pageSize:ne(e),totalUsersCount:re(e),currentPage:ae(e),isFetching:Ae(e),followingInProgress:oe(e)}},{follow:function(e){return function(){var t=Object(S.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,P.d.follow.bind(P.d),U);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,P.d.unfollow.bind(P.d),N);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:B,toggleFollowingProgress:M,getUsers:function(e,t){return function(){var n=Object(S.a)(C.a.mark(function n(r){var a;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(B(e)),n.next=4,P.d.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}),_.a)(ue),se=n(61),le=n.n(se),ie=function(e){return a.a.createElement("header",{className:le.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),a.a.createElement("div",{className:le.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(m.b,{to:"/login"},"Login")))},fe=n(25),pe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},me=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ge=function(){return function(){var e=Object(S.a)(C.a.mark(function e(t){var n,r,a,A,o;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,A=r.login,o=r.email,t(me(a,o,A,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(S.a)(C.a.mark(function e(t){var n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(de(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(j.a)({},e,t.payload);default:return e}},Ee=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(ie,this.props)}}]),t}(a.a.Component),be=Object(w.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(S.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(me(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ee),we=n(54),Oe=n(19),Ce=n(39),Se=n(41),ye=n.n(Se),je=Object(we.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Oe.c)("Email","email",[Ce.b],Oe.a),Object(Oe.c)("Password","password",[Ce.b],Oe.a,{type:"password"}),Object(Oe.c)(null,"rememberMe",[],Oe.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(Oe.c)("Symbols from image","captcha",[Ce.b],Oe.a,{}),n&&a.a.createElement("div",{className:ye.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),Pe=Object(w.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,r){return function(){var a=Object(S.a)(C.a.mark(function a(A){var o,u;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?A(ge()):(10===o.data.resultCode&&A(ve()),u=o.data.messages.length>0?o.data.messages[0]:"Some error",A(Object(fe.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(b.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),ke={initialized:!1,globalError:null},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(j.a)({},e,{initialized:!0});default:return e}},Ue=n(62),Ne=n(78),Be={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;arguments.length>1&&arguments[1];return e},Me=n(129),De=n(55),Ie=Object($.c)({profilePage:Ue.b,dialogsPage:Ne.a,sidebar:ze,usersPage:I,auth:he,form:De.a,app:Le}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,qe=Object($.e)(Ie,Te(Object($.a)(Me.a)));window.__store__=qe;var Fe=qe,Ze=a.a.lazy(function(){return n.e(1).then(n.bind(null,312))}),Ge=a.a.lazy(function(){return n.e(2).then(n.bind(null,311))}),Ve=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),A=0;A<r;A++)a[A]=arguments[A];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e){alert("Some error occured")},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(be,null),a.a.createElement(g,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.d,null,a.a.createElement(b.b,{exact:!0,path:"/",element:this.props.isAuth?a.a.createElement(b.a,{to:"/profile/".concat(this.props.authorizedUserId)}):a.a.createElement(b.a,{to:"/login"})}),a.a.createElement(b.b,{path:"/profile",element:this.props.isAuth?a.a.createElement(b.a,{to:"/profile/".concat(this.props.authorizedUserId)}):a.a.createElement(b.a,{to:"/login"})}),a.a.createElement(b.b,{path:"/profile/:userId",element:this.props.isAuth?a.a.createElement(r.Suspense,{fallback:a.a.createElement(H.a,null)},a.a.createElement(Ge,null)):a.a.createElement(b.a,{to:"/login"})}),a.a.createElement(b.b,{element:a.a.createElement(r.Suspense,{fallback:a.a.createElement(H.a,null)},a.a.createElement(Ze,null)),path:"/dialogs"}),a.a.createElement(b.b,{path:"/users",element:a.a.createElement(ce,null)}),a.a.createElement(b.b,{path:"/news",element:a.a.createElement(v,null)}),a.a.createElement(b.b,{path:"/music",element:a.a.createElement(h,null)}),a.a.createElement(b.b,{path:"/settings",element:a.a.createElement(E,null)}),a.a.createElement(b.b,{path:"/login",element:a.a.createElement(Pe,null)}),a.a.createElement(b.b,{path:"*",element:a.a.createElement("div",null,"404 NOT FOUND")})))):a.a.createElement(H.a,null)}}]),t}(a.a.Component),We=Object(w.b)(function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId}},{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}})(Ve),xe=function(e){return a.a.createElement(m.a,null,a.a.createElement(w.a,{store:Fe},a.a.createElement(We,null)))};o.a.render(a.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){"use strict";var r=n(0),a=n.n(r),A=n(127),o=n.n(A);t.a=function(e){return a.a.createElement("div",{style:{backgroundColor:"white"}},a.a.createElement("img",{src:o.a}))}},39:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},41:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Puz3",error:"FormsControls_error__3tz_0",formSummaryError:"FormsControls_formSummaryError__3_UTs"}},56:function(e,t,n){e.exports={paginator:"Paginator_paginator__3ZiAo",pageNumber:"Paginator_pageNumber__HctCl",selectedPage:"Paginator_selectedPage__BSaeC"}},61:function(e,t,n){e.exports={header:"Header_header__1177Q",loginBlock:"Header_loginBlock__19QNR"}},62:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"g",function(){return d}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return v});var r=n(7),a=n.n(r),A=n(12),o=n(32),u=n(8),c=n(10),s=n(25),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},i=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(A.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(A.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(A.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(f(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(A.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(A.a)(a.a.mark(function t(n,r){var A,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=r().auth.userId,t.next=3,c.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(p(A)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n])});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})});default:return e}}},72:function(e,t){e.exports="data:image/png;base64,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"},73:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),A=n(1),o=n(13),u=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(o.b)(u)(function(t){return t.isAuth?a.a.createElement(e,t):a.a.createElement(A.a,{to:"/login"})})}},78:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=n(32),a=n(8),A={dialogs:[{id:1,name:"Dimych",avatarName:"2.jpg"},{id:2,name:"Andrey",avatarName:"4.jpg"},{id:3,name:"Sveta",avatarName:"1.jpg"},{id:4,name:"Sasha",avatarName:"6.jpg"},{id:5,name:"Viktor",avatarName:"9.jpg"},{id:6,name:"Valera",avatarName:"8.jpg"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}}},[[156,4,3]]]);
//# sourceMappingURL=main.49a60404.chunk.js.map