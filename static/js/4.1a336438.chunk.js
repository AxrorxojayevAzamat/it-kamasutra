(this["webpackJsonp01-first-project"]=this["webpackJsonp01-first-project"]||[]).push([[4],{288:function(e,a,t){"use strict";var n=t(34),s=t(35),i=t(36),r=t(37),c=t(0),l=t.n(c),o=t(16),u=t(10),m=function(e){return{isAuth:e.auth.isAuth}};a.a=function(e){var a=function(a){Object(r.a)(c,a);var t=Object(i.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),c}(l.a.Component);return Object(o.b)(m)(a)}},289:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogItems:"Dialogs_dialogItems__3flRc",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up"}},295:function(e,a,t){"use strict";t.r(a);var n=t(126),s=t(0),i=t.n(s),r=t(289),c=t.n(r),l=t(20),o=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:c.a.dialog+" "+c.a.active},i.a.createElement(l.b,{to:a},e.name))},u=function(e){return i.a.createElement("div",{className:c.a.message},i.a.createElement("pre",null,e.message))},m=t(87),g=t(127),d=t(33),f=t(84),b=Object(g.a)({form:"dialogsMessages"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(m.a,{name:"dialogMessage",placeholder:"Enter the message",component:d.b,validate:[f.b]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),p=function(e){var a=e.dialogsPage.dialogs.map((function(e){return i.a.createElement(o,{name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return i.a.createElement(u,{message:e.message})}));return i.a.createElement("div",{className:c.a.dialogs},i.a.createElement("div",{className:c.a.dialogItems},a),i.a.createElement("div",{className:c.a.messages},t,i.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.dialogMessage),a.dialogMessage=""}})))},v=t(16),E=t(7),h=t(288);a.default=Object(E.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),h.a)(p)}}]);
//# sourceMappingURL=4.1a336438.chunk.js.map