"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[736],{2736:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var n=s(1413),a=s(5671),r=s(3144),u=s(136),o=s(7277),i=s(6508),l={},p=s(5241),c=s(184);function d(t){return(0,c.jsxs)("div",{className:l.postWrapper,children:[(0,c.jsx)("img",{src:p,alt:"",srcset:"",width:50}),(0,c.jsx)("div",{className:l.post,children:t.message}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:l.like,children:["like ",t.likeCount]})})]})}var f=s(5705),h={MyPosts:"MyPosts_MyPosts__+PDCK"};function x(t){return(0,c.jsx)(f.J9,{initialValues:{post:""},onSubmit:function(){t.addPost()},children:(0,c.jsxs)(f.l0,{children:[(0,c.jsx)("div",{children:"my posts"}),(0,c.jsx)(f.gN,{value:t.newPostText,component:"textarea",name:"post",type:"text",onChange:t.onPostChange,placeholder:"add new post..."}),(0,c.jsx)("button",{type:"submit",children:"add post!"}),(0,c.jsx)("div",{className:h.posts,children:t.postElements})]})})}var m=s(3531),j=(0,m.$j)((function(t){return{newPostText:t.profilePage.newPostText,postElements:t.profilePage.postsData.map((function(t){return(0,c.jsx)(d,{message:t.message,likeCount:t.likeCount})}))}}),(function(t){return{addPost:function(){t((0,i.Wl)())},updatePostText:function(e){t((0,i.Vd)(e))}}}))((function(t){var e=t.newPostText;return(0,c.jsx)(x,(0,n.Z)({onPostChange:function(e){var s=e.target.value;t.updatePostText(s)},addPost:function(){t.addPost()},newPostText:e},t))})),v={img:"ProfileInfo_img__TkNNE",description:"ProfileInfo_description__0v8n1"},g=s(9439),P=s(2791);function k(t){var e=t.fullName,s=t.status,n=t.aboutMe,a=t.updateStatus,r=(0,P.useState)(s),u=(0,g.Z)(r,2),o=u[0],i=u[1],l=(0,P.useState)(!1),p=(0,g.Z)(l,2),d=p[0],f=p[1];(0,P.useEffect)((function(){i(s)}),[s]);return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:e}),d?(0,c.jsx)("input",{autoFocus:!0,onBlur:function(){a(o),f(!1)},onChange:function(t){i(t.currentTarget.value)},value:o}):(0,c.jsx)("span",{onDoubleClick:function(){return f(!0)},children:o||"no status"}),(0,c.jsx)("p",{children:n})]})}function T(t){return(0,c.jsxs)("div",{className:v.description,children:[(0,c.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/223/577/HD-wallpaper-secluded-in-the-woods-hills-forest-house-grass-trees-mist-green-morning-landscape.jpg",alt:"",className:v.img}),(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:p,alt:"",srcset:"",width:100}),(0,c.jsx)(k,{fullName:t.profile.fullName,status:t.status,aboutMe:t.profile.aboutMe,updateStatus:t.updateStatus})]})]})}function w(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(T,(0,n.Z)((0,n.Z)({},t),{},{updateStatus:t.updateStatusThunk})),(0,c.jsx)(j,{})]})}var Z=s(7689);var C=s(1548),S=s(7781),N=function(t){(0,u.Z)(s,t);var e=(0,o.Z)(s);function s(){return(0,a.Z)(this,s),e.apply(this,arguments)}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.router.params.profileId;t||(t=29349),this.props.getProfileThunk(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return(0,c.jsx)(w,(0,n.Z)((0,n.Z)({},this.props),{},{updateStatus:this.updateStatusThunk}))}}]),s}(P.Component);var _=(0,S.qC)((0,m.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),{getProfileThunk:i.VB,setProfile:i.RG,getStatusThunk:i.$b,updateStatusThunk:i.dw}),(function(t){return function(e){var s=(0,Z.UO)();return(0,c.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{params:s}}))}}),C.Z)(N)}}]);
//# sourceMappingURL=736.6bab60c1.chunk.js.map