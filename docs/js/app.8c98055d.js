(function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about",setting:"setting"}[e]||e)+"."+{about:"18fb8367",setting:"12fa0555"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={setting:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",setting:"setting"}[e]||e)+"."+{about:"31d6cfe0",setting:"61abf686"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"38e6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{app:"",color:"amber lighten-4",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.text,attrs:{to:t.to,link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t.text)+" ")])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"amber",dense:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-icon",{staticClass:"mx-4",attrs:{large:""}},[e._v(" mdi-music-clef-bass ")]),n("v-toolbar-title",{staticClass:"mr-12 align-center"},[n("span",{staticClass:"title"},[e._v("Realbooks index")])])],1),n("v-content",[n("v-container",[n("v-row",[n("v-col",[n("router-view")],1)],1)],1)],1)],1)},o=[],i={data:function(){return{drawer:null,items:[{icon:"mdi-magnify",text:"Search",to:"/"},{icon:"mdi-cog",text:"Setting",to:"/setting"},{icon:"mdi-information-outline",text:"About",to:"/about"}]}}},s=i,u=(n("5c0b"),n("2877")),l=n("6544"),c=n.n(l),f=n("7496"),d=n("40dc"),p=n("5bc1"),v=n("62ad"),h=n("a523"),m=n("a75b"),b=n("132d"),g=n("8860"),y=n("da13"),x=n("1800"),w=n("5d23"),k=n("f774"),_=n("0fd9"),I=n("2a7f"),L=Object(u["a"])(s,a,o,!1,null,null,null),O=L.exports;c()(L,{VApp:f["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VCol:v["a"],VContainer:h["a"],VContent:m["a"],VIcon:b["a"],VList:g["a"],VListItem:y["a"],VListItemAction:x["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:k["a"],VRow:_["a"],VToolbarTitle:I["a"]});n("d3b7");var S=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("RealbooksIndex")],1)},C=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-text-field",{attrs:{label:"Search","hide-details":"auto"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("ul",e._l(e.hitList,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(r)+" "),n("ul",e._l(t,(function(t){return n("li",{key:t[":book"]+"_"+t[":page"],attrs:{set:e.disp=t[":book"]+" / "+t[":page"]}},[e.pdfUrls[t[":book"]]?n("span",[n("a",{attrs:{href:e.pdfUrls[t[":book"]]+"#page="+t[":pdf_page"]}},[e._v(e._s(e.disp))])]):n("span",[e._v(" "+e._s(e.disp)+" ")])])})),0)])})),0)],1)},P=[],R=(n("4de4"),n("c975"),n("b64b"),n("ac1f"),n("841c"),n("b85c")),A={name:"RealbooksIndex",data:function(){return{hitList:{}}},computed:{allIndexes:function(){return this.$store.getters["allIndexes"]},query:{get:function(){return this.$store.getters["query"]},set:function(e){this.$store.dispatch("putQuery",e)}},pdfUrls:function(){return this.$store.getters["pdfUrls"]}},watch:{query:{handler:function(e){this.search(e)},immediate:!0},allIndexes:{handler:function(){this.search(this.query)},immediate:!0}},methods:{search:function(e){if(e){var t=this.allIndexes[e];if(t){var n={};return n[e]=t,void(this.hitList=n)}var r=Object.keys(this.allIndexes),a=r.filter((function(t){return-1<t.toLowerCase().indexOf(e.toLowerCase())}));if(0<a.length){var o,i={},s=Object(R["a"])(a);try{for(s.s();!(o=s.n()).done;){var u=o.value;i[u]=this.allIndexes[u]}}catch(l){s.e(l)}finally{s.f()}this.hitList=i}else this.hitList={}}else this.hitList={}}}},T=A,q=(n("aa10"),n("8654")),E=Object(u["a"])(T,V,P,!1,null,"61a0b1c6",null),N=E.exports;c()(E,{VTextField:q["a"]});var U={name:"Search",components:{RealbooksIndex:N}},$=U,B=Object(u["a"])($,j,C,!1,null,null,null),J=B.exports;r["a"].use(S["a"]);var z=[{path:"/",name:"Search",component:J},{path:"/setting",name:"Setting",component:function(){return n.e("setting").then(n.bind(null,"4ef5"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new S["a"]({base:"/realbooks_index/",routes:z}),M=D,Q=(n("96cf"),n("1da1")),F=n("2f62"),H=n("651e"),K=n.n(H),G=n("bc3a"),W=n.n(G),X=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/realbooks_index/all_indexes.yml");case 2:return t=e.sent,e.abrupt("return",K.a.safeLoad(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y="realbook_index_storage";r["a"].use(F["a"]);var Z=new F["a"].Store({state:{allIndexes:null,query:"",pdfUrls:{Colorado:"",EvansBk:"",JazzFake:"",JazzLTD:"",Library:"",NewReal1:"",NewReal2:"",NewReal3:"",Realbk1:"",Realbk2:"",Realbk3:"",TheBook:""}},mutations:{setAllIndexes:function(e,t){return e.allIndexes=t},setQuery:function(e,t){return e.query=t},setPdfUrls:function(e,t){return e.pdfUrls=t},save:function(e){localStorage.setItem(Y,JSON.stringify(e))},load:function(e){var t=localStorage.getItem(Y);if(t){var n=JSON.parse(t);this.replaceState(Object.assign(e,n))}}},actions:{putQuery:function(e,t){var n=e.commit;n("setQuery",t)},putPdfUrls:function(e,t){var n=e.commit;n("setPdfUrls",t)},doSave:function(e){var t=e.commit;t("save")},doLoad:function(e){var t=arguments;return Object(Q["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,o=t.length>1&&void 0!==t[1]&&t[1],a("load"),r.allIndexes&&!o){n.next=8;break}return n.next=6,X();case 6:i=n.sent,a("setAllIndexes",i);case 8:case"end":return n.stop()}}),n)})))()}},getters:{allIndexes:function(e){return e.allIndexes},query:function(e){return e.query},pdfUrls:function(e){return e.pdfUrls}},modules:{}}),ee=n("f309"),te=n("fcf4");r["a"].use(ee["a"]);var ne=new ee["a"]({theme:{light:!0,options:{customProperties:!0},themes:{light:{primary:te["a"].black,secondary:"#c0d8ed",accent:"#4ea3ed",error:"#b71c1c",info:"#2196f3",success:"#66bb6a",warning:"#f57f17"}}}});r["a"].config.productionTip=!1,Z.dispatch("doLoad"),new r["a"]({router:M,store:Z,vuetify:ne,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){},aa10:function(e,t,n){"use strict";var r=n("38e6"),a=n.n(r);a.a}});
//# sourceMappingURL=app.8c98055d.js.map