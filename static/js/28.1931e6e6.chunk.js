"use strict";(self.webpackChunkreack_kabzda_1=self.webpackChunkreack_kabzda_1||[]).push([[28],{4028:function(o,e,n){n.r(e),n.d(e,{ProfileContainer:function(){return X}});var i,r,t,l=n(2791),s={descriptionBlock:"ProfileInfo_descriptionBlock__PWS0d",imgProfile:"ProfileInfo_imgProfile__Rcj0i",changePhoto:"ProfileInfo_changePhoto__YHZsi",wrapper:"ProfileInfo_wrapper__ovsiH",modal:"ProfileInfo_modal__PAygT",modal__content:"ProfileInfo_modal__content__HQddJ",modal__footer:"ProfileInfo_modal__footer__ducHJ",modal__close:"ProfileInfo_modal__close__TPMmQ"},a=n(885),c=n(7127),d=n(2457),u=function(o){return o.profilePage},f=function(o){return o.profilePage.profile},x=function(o){var e;return null===(e=o.profilePage.profile)||void 0===e?void 0:e.contacts},v=function(o){return o.profilePage.status},p=function(o){var e,n;return null===(e=o.profilePage.profile)||void 0===e||null===(n=e.photos)||void 0===n?void 0:n.large},h=function(o){return o.profilePage.save},m=n(184),j=function(){var o=(0,c.CG)(v),e=(0,c.TL)(),n=(0,l.useState)(!1),i=(0,a.Z)(n,2),r=i[0],t=i[1],s=(0,l.useState)(o),u=(0,a.Z)(s,2),f=u[0],x=u[1];(0,l.useEffect)((function(){x(o)}),[o]);return(0,m.jsxs)("div",{children:[!r&&(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){t(!0)},style:{color:"black",fontSize:"20px"},children:o})}),r&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(o){x(o.currentTarget.value)},autoFocus:!0,onBlur:function(){t(!1),f!==o&&e((0,d.x1)(f))},value:f,style:{fontSize:"20px"}})})]})},b=n(6939),g=n(8870),k=n(7482),_=n(3400),y=n(5272),P=n(3767),Z=n(4436),C=function(){var o=(0,c.CG)(f),e=(0,c.CG)(y.mM),n=(0,c.TL)();if(!o)return(0,m.jsx)(g.Z,{sx:{width:"100%"},children:(0,m.jsx)(k.Z,{})});return(0,m.jsx)("div",{children:e===(null===o||void 0===o?void 0:o.userId)&&(0,m.jsx)("div",{className:s.changePhoto,children:(0,m.jsx)(P.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,m.jsxs)(_.Z,{color:"primary","aria-label":"upload picture",component:"label",onChange:function(o){n((0,d.Ju)(o.target.files[0]))},children:[(0,m.jsx)("input",{hidden:!0,accept:"image/*",type:"file"}),(0,m.jsx)(Z.Z,{fontSize:"large"})]})})})})},F=function(){var o=(0,c.CG)(f);if(console.log(o),null!==(null===o||void 0===o?void 0:o.contacts)){var e=Object.keys(null===o||void 0===o?void 0:o.contacts).map((function(e){return(0,m.jsxs)("div",{children:[e," :"," ",""===(null===o||void 0===o?void 0:o.contacts[e])?"No data available":null===o||void 0===o?void 0:o.contacts[e]]},e)}));return(0,m.jsxs)("div",{children:["My Contacts : ",e]})}return(0,m.jsx)("div",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})},N=n(168),M=n(7939),w=M.ZP.div(i||(i=(0,N.Z)(["\n  width: 350px;\n  min-height: 200px;\n  max-height: 715px;\n  padding: 20px 30px;\n  background-color: white;\n  border-radius: 10px;\n  font-size: 18px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),A=(M.ZP.input(r||(r=(0,N.Z)(["\n  outline: none;\n  background: transparent;\n  border: transparent;\n  font-size: 18px;\n  border-bottom: 1px solid #1976d2;\n  padding: 10px 0 5px;\n  width: 100%;\n"]))),n(4164)),I=function(o){var e=o.children,n=o.isModal,i=o.opacity,r=M.ZP.div(t||(t=(0,N.Z)(['\n    &:before {\n      content: "";\n      background: #000;\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      opacity: ',";\n    }\n  "])),null!==i&&void 0!==i?i:.6);return n?A.createPortal((0,m.jsx)(r,{children:(0,m.jsx)(w,{children:e})}),document.body):null},S=n(6151),J=n(1413),R=n(5705),G=n(5032),T=n(9012),q=n(514),L=n(5523),D=n(9174),z=function(){var o=(0,c.TL)(),e=(0,c.CG)(f),n=(0,c.CG)(x),i={width:"30ch",textColor:"black"},r=(0,R.TA)({initialValues:{userID:null===e||void 0===e?void 0:e.userId,fullName:null===e||void 0===e?void 0:e.fullName,lookingForAJob:null===e||void 0===e?void 0:e.lookingForAJob,lookingForAJobDescription:null===e||void 0===e?void 0:e.lookingForAJobDescription,aboutMe:null===e||void 0===e?void 0:e.aboutMe,contacts:{facebook:n.facebook,website:n.website,vk:n.vk,twitter:n.twitter,instagram:n.instagram,youtube:n.youtube,github:n.github,mainLink:n.mainLink}},validate:function(o){var e={};return o.fullName?/^[A-Z]/i.test(o.fullName)||(e.fullName="Invalid"):e.fullName="Required",o.lookingForAJobDescription||(e.lookingForAJobDescription="Required"),o.aboutMe||(e.aboutMe="Required"),o.contacts||(e.contacts={vk:"Required",facebook:"Required",github:"Required",instagram:"Required",mainLink:"Required",twitter:"Required",website:"Required",youtube:"Required"}),e},onSubmit:function(e){o((0,d.Ii)(e)),o((0,d.NR)(!1))}});return(0,m.jsx)("form",{onSubmit:r.handleSubmit,className:G.Z.form,children:(0,m.jsx)(g.Z,{children:(0,m.jsxs)(T.Z,{children:[(0,m.jsx)(q.Z,(0,J.Z)({sx:i,label:"Full name",variant:"standard",color:"secondary"},r.getFieldProps("fullName"))),r.touched.fullName&&r.errors.fullName&&(0,m.jsx)("div",{style:{color:"red"},children:r.errors.fullName}),(0,m.jsx)(L.Z,{label:"Looking for a job",control:(0,m.jsx)(D.Z,(0,J.Z)({},r.getFieldProps("lookingForAJob")))}),(0,m.jsx)(q.Z,(0,J.Z)({sx:i,label:"My professional skills",variant:"standard",color:"secondary"},r.getFieldProps("lookingForAJobDescription"))),r.touched.lookingForAJobDescription&&r.errors.lookingForAJobDescription&&(0,m.jsx)("div",{style:{color:"red"},children:r.errors.lookingForAJobDescription}),(0,m.jsx)(q.Z,(0,J.Z)({sx:i,label:"About me",variant:"standard",color:"secondary"},r.getFieldProps("aboutMe"))),r.touched.aboutMe&&r.errors.aboutMe&&(0,m.jsx)("div",{style:{color:"red"},children:r.errors.aboutMe}),(0,m.jsx)("div",{style:{marginTop:"10px",marginBottom:"5px"},children:"My contacts:"}),Object.keys(n).map((function(o){return(0,m.jsxs)("div",{children:[(0,m.jsx)(q.Z,(0,J.Z)({sx:i,label:o,variant:"standard",color:"secondary"},r.getFieldProps("contacts.".concat(o)))),r.touched.contacts&&r.errors.contacts&&(0,m.jsx)("div",{style:{color:"red"},children:r.errors.contacts})]},o)})),(0,m.jsx)(S.Z,{style:{marginTop:"10px"},type:"submit",variant:"contained",color:"secondary",children:"Save"})]})})})},B=n(6711),E=function(){var o=(0,c.CG)(h),e=(0,c.TL)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S.Z,{color:"secondary",variant:"contained",size:"medium",onClick:function(){return e((0,d.NR)(!0))},children:"Edit"}),(0,m.jsxs)(I,{isModal:o,children:[(0,m.jsx)(B.Z,{sx:{marginLeft:"260px",cursor:"pointer"},color:"secondary",fontSize:"medium",onClick:function(){return e((0,d.NR)(!1))}}),(0,m.jsx)(z,{})]})]})},H=function(){var o=(0,c.CG)(f),e=(0,c.CG)(p),n=(0,c.CG)(y.mM);return o?(0,m.jsxs)("div",{className:s.descriptionBlock,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:null!==e&&void 0!==e?e:b.Z,className:s.imgProfile}),(0,m.jsx)(C,{})]}),(0,m.jsxs)("span",{children:["Status: ",(0,m.jsx)(j,{})]}),(0,m.jsxs)("div",{children:["My Full Name - ",o.fullName]}),(0,m.jsxs)("div",{children:["Looking for a job: ",o.lookingForAJob?"Yes":"No"]}),(0,m.jsxs)("div",{children:["My professional skills: ",o.lookingForAJobDescription]}),(0,m.jsxs)("div",{children:["About me : ",o.aboutMe]}),(0,m.jsx)(F,{}),n===(null===o||void 0===o?void 0:o.userId)&&(0,m.jsx)(E,{})]}):(0,m.jsx)(g.Z,{sx:{width:"100%"},children:(0,m.jsx)(k.Z,{})})},O="MyPosts_postsBlock__TVyob",V="MyPosts_posts__EISKx",K="Post_item__G733n";var Q=function(o){var e=o.message,n=o.likeCounts,i=(0,c.CG)(p);return(0,m.jsxs)("div",{className:K,children:[(0,m.jsx)("img",{src:null!==i&&void 0!==i?i:b.Z}),e,(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:["like ",n]})})]})};var Y=function(o){var e=o.addPost,n=(0,c.CG)(u),i=((0,c.TL)(),(0,R.TA)({initialValues:{title:""},validate:function(o){var e={};return o.title?o.title.length>300&&(e.title="Maximum value 300 characters"):e.title="Field is required",e},onSubmit:function(o){e(o.title),i.resetForm()}})),r=n.posts.map((function(o){return(0,m.jsx)(Q,{id:o.id,message:o.message,likeCounts:o.likeCounts},o.id)}));return(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)("h3",{children:"My posts"}),(0,m.jsx)("form",{onSubmit:i.handleSubmit,children:(0,m.jsxs)(T.Z,{children:[(0,m.jsx)(q.Z,(0,J.Z)({sx:{width:"30ch",marginBottom:"5px"},size:"small",label:"Enter your post"},i.getFieldProps("title"))),i.touched.title?(0,m.jsx)("div",{style:{color:"red"},children:i.errors.title}):null,(0,m.jsx)(S.Z,{sx:{width:"100px",height:"40px"},type:"submit",variant:"contained",color:"secondary",children:"publish"})]})}),(0,m.jsx)("div",{className:V,children:r})]})},U=(0,n(8687).$j)((function(o){return{profilePage:u(o)}}),(function(o){return{addPost:function(e){o((0,d.q2)(e))}}}))(Y),W=n(6871);var $=function(){return(0,c.CG)(y.Kj)?(0,m.jsxs)("div",{className:s.picturesBlock,children:[(0,m.jsx)(H,{}),(0,m.jsx)(U,{})]}):(0,m.jsx)(W.Fg,{to:"/login"})},X=function(){var o=(0,c.CG)(y.mM).toString(),e=(0,W.UO)().userId,n=(0,c.TL)();return(0,l.useEffect)((function(){n((0,d.et)(null!==e&&void 0!==e?e:o)),n((0,d.lR)(null!==e&&void 0!==e?e:o))}),[e]),(0,m.jsx)($,{})}}}]);
//# sourceMappingURL=28.1931e6e6.chunk.js.map