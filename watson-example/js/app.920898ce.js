(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)r=i[p],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/watson-example/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"111b":function(e,t,n){"use strict";var a=n("406d"),o=n.n(a);o.a},"29d5":function(e,t,n){var a=n("8993"),o=function(e){try{var t=r(e);if(t)return r(e);var n=[{type:"text",author:"support",data:{text:"Bienvenido! Escribe tu mensaje y te ayudaré en lo que pueda"}}];return s(e,n),r(e)}catch(a){console.error("Exception conversationInitializer"),console.error(a)}},s=function(e,t){localStorage.setItem(e,JSON.stringify(t))},r=function(e){return JSON.parse(localStorage.getItem(e))},i=function(e){return console.log("Data"),console.log(JSON.parse(localStorage.getItem(e))),{type:a(JSON.parse(localStorage.getItem(e))),data:JSON.parse(localStorage.getItem(e))}};e.exports={init:o,save:s,showDebug:i}},"406d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("p",[e._v("Widget Chatbot Laboratory 😎")]),n("div",{staticClass:"chat"},[n("beautiful-chat",{attrs:{participants:e.participants,titleImageUrl:e.titleImageUrl,onMessageWasSent:e.sendMessage,messageList:e.messageList,newMessagesCount:e.newMessagesCount,isOpen:e.isChatOpen,close:e.closeChat,open:e.openChat,showEmoji:!0,showFile:!1,showTypingIndicator:e.showTypingIndicator,colors:e.colors,alwaysScrollToBottom:e.alwaysScrollToBottom,messageStyling:e.messageStyling,title:e.title,placeholder:e.placeholder},on:{onType:e.handleOnType}},[e._t("default",[n("p",[e._v("Blaze Zero")])])],2)],1)])},i=[],c=n("75fc"),l=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),u=n("a078"),p=n("29d5"),f={name:"HelloWorld",data:function(){return{title:"Azka Assistant",placeholder:"Escribe tu mensaje...",participants:[],titleImageUrl:"https://firebasestorage.googleapis.com/v0/b/webpage-9a255.appspot.com/o/images%2Feddy-avatar.jpg?alt=media&token=2d1d25d0-1b9f-4c20-8c87-e322a4a579a8",messageList:p.init(u.messagesDB),newMessagesCount:0,isChatOpen:!1,showTypingIndicator:"",colors:{header:{bg:"#4e8cff",text:"#ffffff"},launcher:{bg:"#4e8cff"},messageList:{bg:"#ffffff"},sentMessage:{bg:"#4e8cff",text:"#ffffff"},receivedMessage:{bg:"#eaeaea",text:"#222222"},userInput:{bg:"#f4f7f9",text:"#565867"}},alwaysScrollToBottom:!0,messageStyling:!0}},updated:function(){p.showDebug(u.messagesDB)},methods:{sendMessage:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("Emojis"),console.log(t),n=t.data.text?t.data.text:t.data.emoji,!(n.length>0)){e.next=8;break}return this.newMessagesCount=this.isChatOpen?this.newMessagesCount:this.newMessagesCount+1,this.onMessageWasSent({author:"me",type:"text",data:{text:n}}),e.next=8,this.sendMessageServer(n);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),sendMessageServer:function(e){var t=this;return new Promise(function(n,a){fetch("".concat(u.api,"/"),{method:"POST",body:JSON.stringify({message:e}),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){var a=e.messages,o=!0,s=!1,r=void 0;try{for(var i,c=a[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var l=i.value;t.messageList.push(l),t.newMessagesCount=t.newMessagesCount+1,p.save(u.messagesDB,t.messageList)}}catch(f){s=!0,r=f}finally{try{o||null==c.return||c.return()}finally{if(s)throw r}}n(e)}).catch(function(e){return a(e)})})},onMessageWasSent:function(e){this.messageList=[].concat(Object(c["a"])(this.messageList),[e])},openChat:function(){this.isChatOpen=!0,this.newMessagesCount=0},closeChat:function(){this.isChatOpen=!1},handleScrollToTop:function(){},handleOnType:function(){}}},g=f,d=(n("111b"),n("2877")),h=Object(d["a"])(g,r,i,!1,null,"41e6a406",null),m=h.exports,b={name:"app",components:{HelloWorld:m}},v=b,y=(n("034f"),Object(d["a"])(v,o,s,!1,null,null,null)),w=y.exports,S=n("c718");a["a"].use(S["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,n){},a078:function(e,t){var n="qa",a="messages",o="http://localhost:4001/api/chatbot/web/ibm/eddyminator",s="https://kio-sapsf-2.herokuapp.com/api/chatbot/web/ibm/eddyminator",r="http://something/api/v2/web/itam",i=function(){return"dev"===n?o:"qa"===n?s:"prod"===n?r:void 0};e.exports={api:i(),messagesDB:a}}});
//# sourceMappingURL=app.920898ce.js.map