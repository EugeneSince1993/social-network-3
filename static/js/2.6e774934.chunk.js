(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{302:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3e1uN",mainPhoto:"ProfileInfo_mainPhoto__1Koeb",contact:"ProfileInfo_contact__1kbRn"}},304:function(e,t,a){},307:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3SnDt",posts:"MyPosts_posts__eK3-v"}},309:function(e,t,a){e.exports={item:"Post_item__3oQ7U"}},311:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(30),o=a(33),l=a(31),s=a(34),c=a(0),u=a.n(c),i=(a(304),a(22)),m=a(302),p=a.n(m),f=a(35),d=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(e.status),l=Object(i.a)(o,2),s=l[0],m=l[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);return u.a.createElement("div",null,!n&&u.a.createElement("div",null,u.a.createElement("b",null,"Status: "),u.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"-----")),n&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(s)},value:s})))},b=a(72),E=a.n(b),h=a(19),v=a(54),g=a(41),k=a.n(g),P=Object(v.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,u.a.createElement("button",null,"save")),n&&u.a.createElement("div",{className:k.a.formSummaryError},n),u.a.createElement("div",null,u.a.createElement("b",null,"Full name"),": ",Object(h.c)("Full name","fullName",[],h.a)),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job"),": ",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),u.a.createElement("div",null,u.a.createElement("b",null,"About me"),":",Object(h.c)("About me","aboutMe",[],h.b)),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts"),":",Object.keys(a.contacts).map(function(e){return u.a.createElement("div",{key:e,className:p.a.contact},u.a.createElement("b",null,e),": ",Object(h.c)(e,"contacts."+e,[],h.a))})))}),j=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return u.a.createElement("div",null,a&&u.a.createElement("div",null,u.a.createElement("button",{onClick:n},"edit")),u.a.createElement("div",null,u.a.createElement("b",null,"Full name"),": ",t.fullName),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),u.a.createElement("div",null,u.a.createElement("b",null,"About me"),": ",t.aboutMe),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts"),":",Object.keys(t.contacts).map(function(e){return u.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},O=function(e){var t=e.contactTitle,a=e.contactValue;return u.a.createElement("div",{className:p.a.contact},u.a.createElement("b",null,t),": ",a)},y=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.currentUserId,o=e.authorizedUserId,l=e.savePhoto,s=e.saveProfile,m=r==o,b=Object(c.useState)(!1),h=Object(i.a)(b,2),v=h[0],g=h[1];if(!t)return u.a.createElement(f.a,null);return u.a.createElement("div",null,u.a.createElement("div",{className:p.a.descriptionBlock},u.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto}),m&&u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),v?u.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){s(e).then(function(){g(!1)})}}):u.a.createElement(j,{goToEditMode:function(){g(!0)},profile:t,isOwner:m}),u.a.createElement(d,{status:a,updateStatus:n})))},S=a(62),I=a(32),_=a(307),w=a.n(_),U=a(309),A=a.n(U),N=function(e){return u.a.createElement("div",{className:A.a.item},u.a.createElement("img",{src:"https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",alt:""}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,"like")," ",e.likesCount))},M=a(79),C=a(39),F=Object(C.a)(10),T=Object(v.a)({form:"ProfileAddNewPostForm"})(function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(M.a,{component:h.b,name:"newPostText",validate:[C.b,F],placeholder:"Post message"})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))}),x=u.a.memo(function(e){var t=Object(I.a)(e.posts).reverse().map(function(e){return u.a.createElement(N,{key:e.id,message:e.message,likesCount:e.likesCount})});return u.a.createElement("div",{className:w.a.postsBlock},u.a.createElement("h3",null,"My posts"),u.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText)}}),u.a.createElement("div",{className:w.a.posts},t))}),z=a(13),B=Object(z.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(S.a)(t))}}})(x),J=function(e){return u.a.createElement("div",null,u.a.createElement(y,{savePhoto:e.savePhoto,currentUserId:e.currentUserId,authorizedUserId:e.authorizedUserId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),u.a.createElement(B,null))},D=a(1),V=a(9);a.d(t,"withRouter",function(){return K});var K=function(e){return function(t){var a=Object(D.g)("/profile/:userId/");return u.a.createElement(e,Object.assign({},t,{match:a}))}},L=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(J,Object.assign({},this.props,{currentUserId:this.props.match.params.userId,authorizedUserId:this.props.authorizedUserId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(u.a.Component);t.default=Object(V.d)(Object(z.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),K)(L)}}]);
//# sourceMappingURL=2.6e774934.chunk.js.map