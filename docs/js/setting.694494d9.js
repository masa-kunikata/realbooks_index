(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"18bb":function(e,a,t){"use strict";t("cdfb")},"4ef5":function(e,a,t){"use strict";t.r(a);var d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("PdfUrlSetting")],1)},f=[],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-btn",{on:{click:e.savePdfUrlSetting}},[e._v("save to localStorage")]),t("h3",[e._v("pdf url setting")]),t("br"),t("ul",e._l(Object.keys(e.pdfUrls),(function(a){return t("li",{key:a},[t("v-text-field",{attrs:{label:a,"hide-details":"auto"},model:{value:e.pdfUrls[a],callback:function(t){e.$set(e.pdfUrls,a,t)},expression:"pdfUrls[bookTitle]"}})],1)})),0)],1)},c=[],l={name:"PdfUrlSetting",data:function(){return{pdfMd5s:{Colorado:"12ef10cda7ab46ac1a84d793108383b3",EvansBk:"35ee372dc69c227891be1f6a4d90d8a4",JazzFake:"d2c54773325dde3a46c549b9312b7424",JazzLTD:"7e29eaff0b8ffba90d917a1ceda03c17",Library:"095ac3fad6c78d02bac4d41814215789",NewReal1:"f39cb8e38a1addfeb25e4226c84152c1",NewReal2:"9b5c0c691ea9ff5042ba35e0faa8d00e",NewReal3:"0f08a1a51f6a8ae03ef3459a8ad51192",Realbk1:"9e45daf97a633ec5a03861a2037385a8",Realbk2:"d4ba42b65df5100e889104658b2d20a1",Realbk3:"ec2661678adfe2d233e3614bdda087f8",TheBook:"fd96c95fdef40003180d68334b6605fb"}}},computed:{pdfUrls:{get:function(){return this.$store.getters["pdfUrls"]},set:function(e){this.$store.dispatch("putPdfUrls",e)}}},methods:{savePdfUrlSetting:function(){this.$store.dispatch("doSave")}}},s=l,r=(t("18bb"),t("2877")),i=t("6544"),o=t.n(i),b=t("8336"),u=t("8654"),p=Object(r["a"])(s,n,c,!1,null,"74c92fe4",null),v=p.exports;o()(p,{VBtn:b["a"],VTextField:u["a"]});var h={name:"Setting",components:{PdfUrlSetting:v}},k=h,U=Object(r["a"])(k,d,f,!1,null,null,null);a["default"]=U.exports},cdfb:function(e,a,t){}}]);
//# sourceMappingURL=setting.694494d9.js.map