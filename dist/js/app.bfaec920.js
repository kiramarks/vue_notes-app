(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],m=0,f=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="vue_notes-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},"0e30":function(t,e,n){"use strict";var r=n("37d8"),o=n.n(r);o.a},"1aaf":function(t,e,n){},2452:function(t,e,n){},"267f":function(t,e,n){"use strict";var r=n("f749"),o=n.n(r);o.a},"37d8":function(t,e,n){},4773:function(t,e,n){"use strict";var r=n("2452"),o=n.n(r);o.a},"53d7":function(t,e,n){"use strict";var r=n("01f7"),o=n.n(r);o.a},5452:function(t,e,n){"use strict";var r=n("af35"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),s=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("MainContent"),n("Footer")],1)}),c=[],i=(n("96cf"),n("1da1")),u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-header",{staticClass:"header"},[n("el-menu",{attrs:{"background-color":"#6495ed","text-color":"white","active-text-color":"#ffd04b",mode:"horizontal",router:!0,"default-active":t.activeLink}},[n("el-menu-item",{attrs:{index:"/"}},[t._v(" "+t._s("All Notes "+(t.notesLength?"("+t.notesLength+")":""))+" ")]),n("el-menu-item",{attrs:{index:"/add"}},[t._v(" Add Note ")])],1)],1)},m=[],f={name:"Header",data:function(){return{activeLink:null}},computed:Object(u["c"])({notesLength:"notesCount"}),watch:{$route:function(t){this.activeLink=t.path}},methods:Object(u["b"])(["fetchNotes"]),mounted:function(){this.activeLink=this.$route.path}},d=f,p=(n("5452"),n("2877")),b=Object(p["a"])(d,l,m,!1,null,null,null),h=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("router-view")],1)},_=[],j={name:"MainContent"},C=j,O=(n("9f38"),Object(p["a"])(C,v,_,!1,null,"42c979c4",null)),g=O.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-footer",{staticClass:"footer"},[n("a",{staticClass:"footer__link",attrs:{href:"http://github.com/kiramarks"}},[t._v(" Developed by Kira Marks")])])},N=[],w={name:"Footer"},k=w,y=(n("53d7"),Object(p["a"])(k,x,N,!1,null,null,null)),F=y.exports,$={components:{Footer:F,MainContent:g,Header:h},methods:Object(u["b"])(["fetchNotes","fetchComments"]),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchComments();case 2:return e.next=4,t.fetchNotes();case 4:case"end":return e.stop()}}),e)})))()}},S=$,E=(n("5c0b"),Object(p["a"])(S,s,c,!1,null,null,null)),A=E.exports,L=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("NotesList")],1)},B=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-container"},[n("ul",{staticClass:"notes-list"},t._l(t.allNotes,(function(t){return n("Note",{key:t.id,attrs:{note:t}})})),1)])},D=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{shadow:"hover"}},[n("div",{staticClass:"note-item__clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"note-item__name"},[n("router-link",{staticClass:"note-item__link",attrs:{to:"/notes/"+t.note.id}},[t._v(" "+t._s(t.note.name)+" ")])],1),n("i",{staticClass:"el-icon-delete col-sm-3",staticStyle:{float:"right",cursor:"pointer"},on:{click:function(e){return t.handleDelete(t.note.id)}}})]),n("p",{staticClass:"note-item__content"},[t._v(" "+t._s(t.note.content)+" ")]),n("el-badge",{staticClass:"item comments",attrs:{value:t.note.comments.length,hidden:!t.note.comments.length}},[n("router-link",{attrs:{to:"/notes/"+t.note.id}},[n("el-button",{staticClass:"comments__button",attrs:{size:"small"}},[t._v(" comments ")])],1)],1)],1)},P=[],M=n("5530"),I={name:"Note",props:{note:Object},methods:Object(M["a"])(Object(M["a"])({},Object(u["b"])(["deleteNoteFromServer"])),{},{handleDelete:function(t){this.deleteNoteFromServer(t)}})},H=I,z=(n("4773"),Object(p["a"])(H,q,P,!1,null,null,null)),J=z.exports,G={name:"NotesList",computed:Object(u["c"])(["allNotes"]),components:{Note:J}},K=G,U=(n("98b6"),Object(p["a"])(K,T,D,!1,null,null,null)),W=U.exports,Q={name:"AllNotes",components:{NotesList:W}},V=Q,X=(n("bbda"),Object(p["a"])(V,R,B,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section__form"},[n("Breadcrumbs"),n("AddNoteForm")],1)},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("el-form-item",{attrs:{label:"Title",required:""}},[n("el-input",{attrs:{type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("el-form-item",{attrs:{label:"What to note?",required:""}},[n("el-input",{attrs:{type:"textarea",required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("el-button",{staticClass:"form__button",attrs:{type:"primary",disabled:t.isDisabled},on:{click:t.submit}},[t._v("Add ")])],1)},nt=[],rt=(n("b0c0"),n("498a"),{name:"AddNoteForm",computed:Object(M["a"])(Object(M["a"])({},Object(u["c"])(["allNotes"])),{},{isDisabled:function(){return!this.name.trim()||!this.content.trim()}}),data:function(){return{name:"",content:""}},methods:Object(M["a"])(Object(M["a"])({},Object(u["b"])({loadToServer:"loadNoteToServer"})),{},{submit:function(){var t={name:this.name,content:this.content};this.loadToServer(t),this.name="",this.content=""}})}),ot=rt,at=(n("7cd7"),Object(p["a"])(ot,et,nt,!1,null,null,null)),st=at.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticClass:"breadcrumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[n("i",{staticClass:"el-icon-s-home"})]),t._l(t.preparedBreadcrumbs,(function(e,r){return n("Breadcrumb",{key:e,attrs:{link:e,label:t.preparedLabels[r]}})}))],2)},it=[],ut=(n("99af"),n("13d5"),n("fb6a"),n("ac1f"),n("1276"),n("2909")),lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb-item",{attrs:{to:{path:t.link}}},[t._v(t._s(t.label))])},mt=[],ft={name:"Breadcrumb",props:{link:String,label:String}},dt=ft,pt=Object(p["a"])(dt,lt,mt,!1,null,"63eeffcc",null),bt=pt.exports,ht={name:"Breadcrumbs",computed:{preparedLabels:function(){return this.$route.path.split("/").slice(1)},preparedBreadcrumbs:function(){return this.preparedLabels.reduce((function(t,e){return[].concat(Object(ut["a"])(t),["".concat(t,"/").concat(e)])}),[])}},components:{Breadcrumb:bt}},vt=ht,_t=(n("0e30"),Object(p["a"])(vt,ct,it,!1,null,"bdad4dba",null)),jt=_t.exports,Ct={name:"AddNote",components:{Breadcrumbs:jt,AddNoteForm:st}},Ot=Ct,gt=(n("267f"),Object(p["a"])(Ot,Z,tt,!1,null,null,null)),xt=gt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section__form"},[n("div",{staticClass:"section__back-btn"},[n("BackBtn")],1),n("div",{staticClass:"section__form-edit"},[n("EditNoteForm")],1)])},wt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("el-form-item",{attrs:{label:"New name",required:""}},[n("el-input",{attrs:{type:"text"},model:{value:t.tempName,callback:function(e){t.tempName=e},expression:"tempName"}})],1),n("el-form-item",{attrs:{label:"New content",required:""}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempContent,callback:function(e){t.tempContent=e},expression:"tempContent"}})],1),n("el-button",{staticClass:"form__button",attrs:{type:"primary",disabled:t.isDisabled},on:{click:t.submit}},[t._v("Save ")])],1)},yt=[],Ft=(n("7db0"),{name:"EditNoteForm",data:function(){return{tempName:"",tempContent:""}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchNotes();case 2:t.tempName=t.note.name,t.tempContent=t.note.content;case 4:case"end":return e.stop()}}),e)})))()},computed:Object(M["a"])(Object(M["a"])({},Object(u["c"])(["allNotes"])),{},{note:function(){var t=this;return this.allNotes.find((function(e){return e.id===t.$route.params.id}))||{}},isDisabled:function(){return!this.tempName.trim()||!this.tempContent.trim()}}),methods:Object(M["a"])(Object(M["a"])({},Object(u["b"])(["patchNoteToServer","fetchNotes"])),{},{submit:function(){var t={name:this.tempName,content:this.tempContent};this.patchNoteToServer({id:this.note.id,note:t}),this.$router.back()}})}),$t=Ft,St=(n("dcee"),Object(p["a"])($t,kt,yt,!1,null,null,null)),Et=St.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:t.goBack}},[n("i",{staticClass:"el-icon-back"})])},Lt=[],Rt={name:"BackBtn",methods:{goBack:function(){this.$router.back()}}},Bt=Rt,Tt=(n("cf62"),Object(p["a"])(Bt,At,Lt,!1,null,"f8acaae8",null)),Dt=Tt.exports,qt={name:"EditNote",components:{BackBtn:Dt,EditNoteForm:Et}},Pt=qt,Mt=(n("f398"),Object(p["a"])(Pt,Nt,wt,!1,null,null,null)),It=Mt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Breadcrumbs"),n("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.note.name))]),n("router-link",{attrs:{to:"/edit/"+t.note.id}},[n("span",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}})],1)])],1),n("p",{staticClass:"note__content"},[t._v(" "+t._s(t.note.content)+" ")])]),t.note.comments&&t.note.comments.length?n("h2",[t._v(" Comments ("+t._s(t.note.comments.length)+") ")]):n("p",{staticClass:"no-comments-info"},[t._v(" No comments yet."),n("br"),t._v("Add the first comment 🚀 ")]),n("CommentsList",{attrs:{comments:t.note.comments}}),n("h2",{staticClass:"section__heading"},[t._v("Add a comment")]),n("AddCommentForm",{attrs:{note:t.note.id,noteItem:t.note}})],1)},zt=[],Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:t.ruleForm,rules:t.rules}},[n("el-form-item",{attrs:{label:"Author",prop:"author",required:""}},[n("el-input",{attrs:{placeholder:"write a author..."},model:{value:t.ruleForm.author,callback:function(e){t.$set(t.ruleForm,"author",e)},expression:"ruleForm.author"}})],1),n("el-form-item",{attrs:{label:"Comment",prop:"content",required:""}},[n("el-input",{attrs:{type:"textarea",placeholder:"write a comment.."},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),n("el-button",{staticClass:"form__button",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v(" Add ")])],1)],1)},Gt=[],Kt=(n("5319"),{name:"AddCommentForm",data:function(){return{ruleForm:{author:"",content:""},rules:{author:[{required:!0,message:"Please input author",trigger:"blur"},{min:3,max:10,message:"Length should be 3 to 10",trigger:"blur"}],content:[{required:!0,message:"Please input comment",trigger:"blur"}]}}},props:{note:String,noteItem:Object},methods:Object(M["a"])(Object(M["a"])({},Object(u["b"])(["loadCommentToServer"])),{},{submitForm:function(t){var e=this;this.$refs[t].validate((function(n){if(!n)return console.warn("error"),!1;var r={author:e.ruleForm.author,content:e.ruleForm.content,note:e.note,created_at:(new Date).toLocaleDateString().replace(/\./g,"/")};e.loadCommentToServer(r),e.$refs[t].resetFields()}))}})}),Ut=Kt,Wt=(n("8a7f"),Object(p["a"])(Ut,Jt,Gt,!1,null,"b3c3ecaa",null)),Qt=Wt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments-list"},t._l(t.comments,(function(t){return n("CommentItem",{key:t.id,attrs:{comment:t}})})),1)},Xt=[],Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{shadow:"hover"}},[n("div",{staticClass:"comment"},[n("div",{staticClass:"comment__author"},[n("i",{staticClass:"comment__icon el-icon-user"}),t._v(" "+t._s(t.comment.author)+" ")]),n("div",{staticClass:"comment__content"},[t._v(" "+t._s(t.comment.content)+" ")]),n("div",{staticClass:"comment__date"},[t._v(" "+t._s(t.comment.created_at)+" ")])])])},Zt=[],te={name:"Comment",props:["comment"]},ee=te,ne=(n("769d"),Object(p["a"])(ee,Yt,Zt,!1,null,"5a78b512",null)),re=ne.exports,oe={name:"CommentList",props:{comments:Array},components:{CommentItem:re}},ae=oe,se=(n("61ce"),Object(p["a"])(ae,Vt,Xt,!1,null,"09da9950",null)),ce=se.exports,ie={components:{CommentsList:ce,Breadcrumbs:jt,AddCommentForm:Qt},methods:Object(u["b"])(["fetchNotes","fetchComments"]),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchNotes();case 2:return e.next=4,t.fetchComments();case 4:case"end":return e.stop()}}),e)})))()},computed:Object(M["a"])(Object(M["a"])({},Object(u["c"])(["allNotes"])),{},{note:function(){var t=this;return this.allNotes.find((function(e){return e.id===t.$route.params.id}))||{}}})},ue=ie,le=(n("ab32"),Object(p["a"])(ue,Ht,zt,!1,null,"a85f327c",null)),me=le.exports;r["default"].use(L["a"]);var fe=[{path:"/",name:"AllNotes",component:Y},{path:"/add",name:"AddNote",component:xt},{path:"/edit/:id",name:"EditNote",component:It},{path:"/notes",redirect:"/"},{path:"/notes/:id",name:"Note",component:me}],de=new L["a"]({mode:"history",routes:fe}),pe=de,be=(n("4de4"),n("d81d"),n("b64b"),n("bc3a")),he=n.n(be),ve=function(){return he.a.create({baseURL:"https://vue-notes-app-cbd35.firebaseio.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}})},_e={actions:{fetchNotes:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.rootGetters,e.next=3,ve().get("/notes.json");case 3:o=e.sent,a=o.data,s=Object.keys(a).map((function(t){return Object(M["a"])(Object(M["a"])({},a[t]),{},{id:t,comments:r.allComments.filter((function(e){return e.note===t}))})})),n("updateNotes",s);case 7:case"end":return e.stop()}}),e)})))()},loadNoteToServer:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,n.next=3,ve().post("/notes.json",e);case 3:r("fetchNotes");case 4:case"end":return n.stop()}}),n)})))()},deleteNoteFromServer:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,ve().delete("/notes/".concat(e,".json"));case 3:r("deleteNote",e);case 4:case"end":return n.stop()}}),n)})))()},patchNoteToServer:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,o=e.id,a=e.note,n.next=4,ve().patch("/notes/".concat(o,".json"),a);case 4:r("fetchNotes");case 5:case"end":return n.stop()}}),n)})))()}},mutations:{updateNotes:function(t,e){t.notes=e},deleteNote:function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e}))}},state:{notes:[]},getters:{allNotes:function(t){return t.notes},notesCount:function(t){return t.notes.length}}},je={actions:{fetchComments:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,ve().get("/comments.json");case 3:r=e.sent,o=r.data,a=Object.keys(o).map((function(t){return Object(M["a"])(Object(M["a"])({},o[t]),{},{id:t})})),n("updateComments",a);case 7:case"end":return e.stop()}}),e)})))()},loadCommentToServer:function(t,e){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.dispatch,n.next=3,ve().post("/comments.json",e);case 3:r("fetchComments"),r("fetchNotes");case 5:case"end":return n.stop()}}),n)})))()}},mutations:{updateComments:function(t,e){t.comments=e}},state:{comments:[]},getters:{allComments:function(t){return t.comments}}};r["default"].use(u["a"]);var Ce=new u["a"].Store({modules:{comments:je,notes:_e}});r["default"].config.productionTip=!1,r["default"].use(a.a),new r["default"]({router:pe,store:Ce,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6140:function(t,e,n){},"61ce":function(t,e,n){"use strict";var r=n("6735"),o=n.n(r);o.a},"65f4":function(t,e,n){},6735:function(t,e,n){},"769d":function(t,e,n){"use strict";var r=n("6140"),o=n.n(r);o.a},7761:function(t,e,n){},"7cd7":function(t,e,n){"use strict";var r=n("8e63"),o=n.n(r);o.a},"7dab":function(t,e,n){},"8a7f":function(t,e,n){"use strict";var r=n("1aaf"),o=n.n(r);o.a},"8e63":function(t,e,n){},"98b6":function(t,e,n){"use strict";var r=n("af30"),o=n.n(r);o.a},"9c0c":function(t,e,n){},"9f38":function(t,e,n){"use strict";var r=n("7761"),o=n.n(r);o.a},ab32:function(t,e,n){"use strict";var r=n("d0ed"),o=n.n(r);o.a},af30:function(t,e,n){},af35:function(t,e,n){},bbda:function(t,e,n){"use strict";var r=n("f4a6"),o=n.n(r);o.a},cf62:function(t,e,n){"use strict";var r=n("7dab"),o=n.n(r);o.a},d0ed:function(t,e,n){},dcee:function(t,e,n){"use strict";var r=n("65f4"),o=n.n(r);o.a},f1cf:function(t,e,n){},f398:function(t,e,n){"use strict";var r=n("f1cf"),o=n.n(r);o.a},f4a6:function(t,e,n){},f749:function(t,e,n){}});
//# sourceMappingURL=app.bfaec920.js.map