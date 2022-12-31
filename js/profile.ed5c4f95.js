"use strict";(self["webpackChunkadmin_one_vue_bulma_dashboard"]=self["webpackChunkadmin_one_vue_bulma_dashboard"]||[]).push([[845],{2719:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("title-bar",{attrs:{"title-stack":t.titleStack}}),e("hero-bar",[t._v(" Profile "),e("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),e("section",{staticClass:"section is-main-section"},[e("tiles-block",[e("profile-update-form",{staticClass:"tile is-child"}),e("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[e("user-avatar",{staticClass:"image has-max-width is-aligned-center"}),e("hr"),e("b-field",{attrs:{label:"Name"}},[e("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),e("hr"),e("b-field",{attrs:{label:"E-mail"}},[e("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),e("password-update-form")],1)],1)},r=[],o=s(144),i=s(629),n=s(345),l=s(582),u=s(6716),m=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Avatar"}},[e("file-picker",{attrs:{type:"is-info"}})],1),e("hr"),e("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[e("b-input",{attrs:{name:"name",required:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),e("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[e("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})],1),e("hr"),e("b-field",{attrs:{horizontal:""}},[e("b-field",{attrs:{grouped:""}},[e("div",{staticClass:"control"},[e("b-button",{attrs:{"native-type":"submit",type:"is-info",loading:t.isLoading}},[t._v(" Submit ")])],1),e("div",{staticClass:"control"},[e("b-button",{attrs:{type:"is-info","native-type":"button",outlined:""}},[t._v(" Reset ")])],1)])],1)],1)])},d=[],c=s(2089),p=(0,o.aZ)({name:"ProfileUpdateForm",components:{CardComponent:n.Z,FilePicker:c.Z},data(){return{isLoading:!1}},computed:{userName:{get:function(){return this.$store.state.userName},set:function(t){this.$store.commit("user",{name:t})}},userEmail:{get:function(){return this.$store.state.userEmail},set:function(t){this.$store.commit("user",{email:t})}}},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})}),750)}}}),f=p,b=s(1001),h=(0,b.Z)(f,m,d,!1,null,null,null),w=h.exports,_=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("card-component",{attrs:{title:"Change Password",icon:"lock"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[e("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),e("hr"),e("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[e("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[e("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),e("hr"),e("b-field",{attrs:{horizontal:""}},[e("div",{staticClass:"control"},[e("b-button",{attrs:{"native-type":"submit",type:"is-info",loading:t.isLoading}},[t._v(" Submit ")])],1)])],1)])},v=[],g=(0,o.aZ)({name:"PasswordUpdateForm",components:{CardComponent:n.Z},data(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})}),750)}}}),y=g,k=(0,b.Z)(y,_,v,!1,null,null,null),C=k.exports,P=s(2069),Z=s(1590),q=(0,o.aZ)({name:"ProfileView",components:{UserAvatar:Z.Z,TilesBlock:P.Z,PasswordUpdateForm:C,ProfileUpdateForm:w,HeroBar:u.Z,TitleBar:l.Z,CardComponent:n.Z},data(){return{titleStack:["Admin","Profile"]}},computed:{...(0,i.rn)(["userName","userEmail"])}}),x=q,N=(0,b.Z)(x,a,r,!1,null,null,null),E=N.exports}}]);
//# sourceMappingURL=profile.ed5c4f95.js.map