(function(e){function t(t){for(var s,l,d=t[0],i=t[1],r=t[2],m=0,u=[];m<d.length;m++)l=d[m],o[l]&&u.push(o[l][0]),o[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,d=1;d<a.length;d++){var i=a[d];0!==o[i]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},o={1:0},n=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var c=i;n.push([9,0]),a()})({"+YNV":function(e,t,a){"use strict";var s=a("z4wm"),o=a.n(s);o.a},"/qiE":function(e,t,a){},"0RpS":function(e,t,a){},"5yZl":function(e,t,a){},9:function(e,t,a){e.exports=a("Vtdi")},AKi8:function(e,t,a){},AmXl:function(e,t,a){},COWx:function(e,t,a){"use strict";var s=a("0RpS"),o=a.n(s);o.a},Vtdi:function(e,t,a){"use strict";a.r(t);var s=a("Kw5r"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("corner-speed-dial",{attrs:{main:e.speeddial.main,options:e.speeddial.options}})],1)},n=[],l=a("L2JU"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-corner-speed-dial"},[a("md-speed-dial",{attrs:{"md-event":"click","md-direction":"top"}},[a("md-speed-dial-target",{staticClass:"md-accent",attrs:{title:"More options"}},[a("md-icon",[e._v(e._s(e.main))])],1),a("md-speed-dial-content",[a("md-button",{staticClass:"md-raised md-icon-button md-primary",on:{click:e.confirmEraseMacros}},[a("md-icon",[e._v("delete")])],1),e._l(e.options,function(t){return a("md-button",{key:t.icon,staticClass:"md-icon-button md-raised md-accent",attrs:{to:t.to}},[a("md-icon",[e._v(e._s(t.icon))])],1)})],2)],1)],1)},i=[],r={name:"CornerSpeedDial",props:["main","options"],methods:{confirmEraseMacros:function(){confirm("Are you sure you want to erase all macros?")?this.eraseMacros():console.log("[LOG] Macros not erased!")},...Object(l["b"])(["eraseMacros"])}},c=r,m=(a("rap2"),a("KHd+")),u=Object(m["a"])(c,d,i,!1,null,"04d54f7a",null),p=u.exports,f={name:"App",components:{CornerSpeedDial:p},data:()=>({speeddial:{main:"more_vert",options:[{icon:"fastfood",to:"/template/add"},{icon:"add",to:"/macro/add"},{icon:"home",to:"/"}]}}),mounted:function(){this.getMacrosFromIndexedDB(),this.getTemplatesFromIndexedDB()},methods:{...Object(l["b"])(["getMacrosFromIndexedDB","getTemplatesFromIndexedDB"])}},b=f,v=(a("nNx0"),Object(m["a"])(b,o,n,!1,null,null,null)),h=v.exports,y=a("jE9Z"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("simple-app-bar"),a("grid-body",[a("macro-table",{attrs:{macros:e.macros}})],1)],1)},g=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-simple-app-bar"},[a("md-app",[a("md-app-toolbar",{staticClass:"md-primary"},[e.links?a("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[a("md-icon",[e._v("menu")])],1):e._e(),e.title?a("span",{staticClass:"md-title"},[e._v(e._s(e.title))]):a("span",{staticClass:"md-title"},[e._v("DSM")])],1)],1),a("md-drawer",{attrs:{"md-active":e.menuVisible},on:{"update:mdActive":function(t){e.menuVisible=t}}},[a("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"0"}},[a("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[a("md-icon",[e._v("menu")])],1),a("span",{staticClass:"md-title"},[e._v(e._s(e.title))])],1),e._l(e.links,function(t){return a("md-list",{key:t.name},[a("md-list-item",{attrs:{to:t.to}},[a("md-icon",[e._v(e._s(t.icon))]),a("span",{staticClass:"md-list-item-text"},[e._v(e._s(t.name))])],1)],1)})],2)],1)},x=[],D={name:"SimpleAppBar",props:["title","links"],data:()=>({menuVisible:!1})},B=D,C=(a("+YNV"),Object(m["a"])(B,w,x,!1,null,"0c0281ec",null)),E=C.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-grid-body"},[a("div",{staticClass:"md-layout md-alignment-top-center"},[a("div",{staticClass:"md-layout-item md-xsmall-size-95 md-small-size-85 md-medium-size-75 md-large-size-65 md-xlarge-size-50"},[e._t("default")],2)])])},M=[],T=(a("zfKo"),{}),O=Object(m["a"])(T,I,M,!1,null,"aba6f20e",null),A=O.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-simple-card"},[a("md-card",[a("md-card-content",[e._t("default")],2)],1)],1)},S=[],F=(a("COWx"),{}),j=Object(m["a"])(F,k,S,!1,null,"e4b53ec2",null),z=j.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-simple-table"},[a("md-table",{attrs:{"md-card":""}},[a("md-table-row",[a("md-table-head",[e._v("carb (g)")]),a("md-table-head",[e._v("prot (g)")]),a("md-table-head",[e._v("fat (g)")]),a("md-table-head",[e._v("kcal")])],1),a("md-table-row",[a("md-table-cell",[e._v(e._s(parseFloat(e.macros.carb).toFixed(2)))]),a("md-table-cell",[e._v(e._s(parseFloat(e.macros.prot).toFixed(2)))]),a("md-table-cell",[e._v(e._s(parseFloat(e.macros.fat).toFixed(2)))]),a("md-table-cell",[e._v(e._s((4*e.macros.carb+4*e.macros.prot+9*e.macros.fat).toFixed(2)))])],1)],1)],1)},R=[],W={name:"MacroTable",props:["macros"]},$=W,L=(a("uz8t"),Object(m["a"])($,P,R,!1,null,"6c5dfaef",null)),V=L.exports,G={name:"Home",components:{SimpleAppBar:E,GridBody:A,SimpleCard:z,MacroTable:V},data:()=>({speeddial:{main:"more_vert",options:[{icon:"fastfood",to:"/template/add"},{icon:"add",to:"/macro/add"}]}}),computed:Object(l["c"])(["macros"])},N=G,K=Object(m["a"])(N,_,g,!1,null,null,null),X=K.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("about")])])}],U={},Z=Object(m["a"])(U,H,J,!1,null,null,null),q=Z.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-macro-add"},[a("simple-app-bar"),a("grid-body",[a("simple-card",[a("div",{staticClass:"md-layout md-alignment-center-space-around"},[a("div",{staticClass:"md-layout-item md-size-100"},[a("span",{staticClass:"md-display-2"},[e._v("Add Macros")])]),a("div",{staticClass:"md-layout-item md-size-100",attrs:{id:"ds-macro-add-switch-use-template"}},[a("md-switch",{model:{value:e.useTemplate,callback:function(t){e.useTemplate=t},expression:"useTemplate"}},[e._v("Use Template")])],1)]),e.useTemplate?a("div",[a("div",{staticClass:"md-layout md-alignment-center-space-around"},[a("div",{staticClass:"md-layout-item md-size-100",attrs:{id:"ds-macro-add-switch-use-template"}},[a("md-field",[a("label",[e._v("TEMPLATE")]),a("md-select",{model:{value:e.template,callback:function(t){e.template=t},expression:"template"}},e._l(e.templates,function(t){return a("md-option",{key:t.id,attrs:{value:e.templates.indexOf(t),placeholder:"TEMPLATE"}},[e._v(e._s(t.name))])}))],1)],1),a("div",{staticClass:"md-layout-item md-size-100"},[a("md-field",[a("label",[e._v("WEIGHT (g)")]),a("md-input",{attrs:{type:"number",placeholder:"WEIGHT (g)"},model:{value:e.templateWeight,callback:function(t){e.templateWeight=t},expression:"templateWeight"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("CARB (g)")]),a("md-input",{attrs:{readonly:"",type:"number",id:"ds-macro-add-use-template-carb",placeholder:"CARB (g)",value:null!=e.template?e.templates[e.template].carb*e.templateWeight/100:null}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("PROT (g)")]),a("md-input",{attrs:{readonly:"",type:"number",id:"ds-macro-add-use-template-prot",placeholder:"PROT (g)",value:null!=e.template?e.templates[e.template].prot*e.templateWeight/100:null}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("FAT (g)")]),a("md-input",{attrs:{readonly:"",type:"number",id:"ds-macro-add-use-template-fat",placeholder:"FAT (g)",value:null!=e.template?e.templates[e.template].fat*e.templateWeight/100:null}})],1)],1)])]):a("div",[a("div",{staticClass:"md-layout md-alignment-center-space-around"},[a("div",{staticClass:"md-layout-item md-size-100",attrs:{id:"ds-macro-add-total-kcal"}},[a("span",{staticClass:"md-display-1"},[e._v(e._s(4*e.carb+4*e.prot+9*e.fat)+" kcal")])]),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("CARB (g)")]),a("md-input",{attrs:{type:"number"},model:{value:e.carb,callback:function(t){e.carb=e._n(t)},expression:"carb"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("PROT (g)")]),a("md-input",{attrs:{type:"number"},model:{value:e.prot,callback:function(t){e.prot=e._n(t)},expression:"prot"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("FAT (g)")]),a("md-input",{attrs:{type:"number"},model:{value:e.fat,callback:function(t){e.fat=e._n(t)},expression:"fat"}})],1)],1)])]),a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-45"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){e.prepareAddMacros()}}},[e._v("Add")])],1)])])],1)],1)},Y=[],ee={name:"MacroAdd",components:{SimpleAppBar:E,GridBody:A,SimpleCard:z},data:()=>({carb:null,prot:null,fat:null,useTemplate:!1,template:null,templateWeight:null,speeddial:{main:"more_vert",options:[{icon:"fastfood",to:"/template/add"},{icon:"add",to:"/macro/add"}]}}),computed:Object(l["c"])(["templates"]),methods:{prepareAddMacros:function(){if(!0===this.useTemplate&&(this.carb=document.getElementById("ds-macro-add-use-template-carb").value,this.prot=document.getElementById("ds-macro-add-use-template-prot").value,this.fat=document.getElementById("ds-macro-add-use-template-fat").value),null==this.carb&&null==this.prot&&null==this.fat)return;if(0==this.carb&&0==this.prot&&0==this.fat)return;let e=this.carb||0,t=this.prot||0,a=this.fat||0;e=parseFloat(e).toFixed(2),t=parseFloat(t).toFixed(2),a=parseFloat(a).toFixed(2),console.log(e,t,a),this.addMacros({carb:e,prot:t,fat:a}),this.eraseMacros()},eraseMacros:function(e){this.carb=this.prot=this.fat=null,document.getElementById("ds-macro-add-use-template-carb").value=document.getElementById("ds-macro-add-use-template-prot").value=document.getElementById("ds-macro-add-use-template-fat").value=null,this.useTemplate=!1,this.template=null,this.templateWeight=null},...Object(l["b"])(["addMacros"])}},te=ee,ae=(a("l8Rk"),Object(m["a"])(te,Q,Y,!1,null,"7f9e37d8",null)),se=ae.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-template-add"},[a("simple-app-bar"),a("grid-body",[a("simple-card",[a("div",{staticClass:"md-layout md-alignment-top-space-around"},[a("div",{staticClass:"md-layout-item md-size-100"},[a("span",{staticClass:"md-display-2"},[e._v("Add Template")])]),a("div",{staticClass:"md-layout-item md-size-100"},[a("md-field",[a("label",[e._v("TEMPLATE NAME")]),a("md-input",{attrs:{type:"text",placeholder:"TEMPLATE NAME"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("% of carb")]),a("md-input",{attrs:{type:"number",placeholder:"% of carb"},model:{value:e.carb,callback:function(t){e.carb=e._n(t)},expression:"carb"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("% of prot")]),a("md-input",{attrs:{type:"number",placeholder:"% of prot"},model:{value:e.prot,callback:function(t){e.prot=e._n(t)},expression:"prot"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-30"},[a("md-field",[a("label",[e._v("% of fat")]),a("md-input",{attrs:{type:"number",placeholder:"% of fat"},model:{value:e.fat,callback:function(t){e.fat=e._n(t)},expression:"fat"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100"},[a("md-button",{staticClass:"md-raised md-accent",attrs:{id:"ds-template-add-button-save"},on:{click:e.confirmTemplateAdd}},[e._v("Save")])],1)])])],1)],1)},ne=[],le={name:"MacroAdd",components:{SimpleAppBar:E,GridBody:A,SimpleCard:z},data:function(){return{name:null,carb:null,prot:null,fat:null}},methods:{confirmTemplateAdd:function(){if(null!=this.name&&""!=this.name&&(null!=this.carb||null!=this.prot||null!=this.fat))if(window.confirm("Are you sure you want to add this template?")){let e=this.name.toLowerCase();e=e.replace(/ /g,"-"),this.carb=this.carb||0,this.prot=this.prot||0,this.fat=this.fat||0,this.addTemplate({id:e,name:this.name,carb:this.carb,prot:this.prot,fat:this.fat}),this.eraseData()}else console.log("cancel...")},...Object(l["b"])(["addTemplate"]),eraseData:function(){this.name=this.carb=this.prot=this.fat=null}}},de=le,ie=(a("xmMI"),Object(m["a"])(de,oe,ne,!1,null,"73c3bd75",null)),re=ie.exports;s["default"].use(y["a"]);var ce=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:X},{path:"/macro/add",name:"macroadd",component:se},{path:"/template/add",name:"templateadd",component:re},{path:"/about",name:"about",component:q}]});s["default"].use(l["a"]);var me=new l["a"].Store({state:{carb:-1,prot:-1,fat:-1,templates:[]},getters:{macros:e=>({carb:e.carb,prot:e.prot,fat:e.fat}),templates:e=>e.templates},mutations:{GETMACROSFROMINDEXEDDB(e){let t=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,a=t.open("ds-macro-idb",1);a.onupgradeneeded=function(){let e=a.result;e.createObjectStore("macros",{keyPath:"id"}),e.createObjectStore("templates",{keyPath:"id"});console.log("[IDB] Indexed DB upgraded!")},a.onsuccess=function(){let t=a.result,s=t.transaction("macros","readwrite"),o=s.objectStore("macros"),n=o.get(0);n.onsuccess=function(){if(n.result)e.carb=n.result.carb,e.prot=n.result.prot,e.fat=n.result.fat,console.log("[IDB] Macros loaded!");else{let t=o.add({id:0,carb:0,fat:0,prot:0});t.onsuccess=function(){e.carb=0,e.prot=0,e.fat=0,console.log("[IDB] Macros created!")}}},s.oncomplete=function(){t.close()}}},ADDMACROS(e,t){let a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,s=a.open("ds-macro-idb",1);s.onupgradeneeded=function(){let e=s.result;e.createObjectStore("macros",{keyPath:"id"}),e.createObjectStore("templates",{keyPath:"id"});console.log("[IDB] Indexed DB upgraded!")},s.onsuccess=function(){let a=s.result,o=a.transaction("macros","readwrite"),n=o.objectStore("macros"),l=n.get(0);l.onsuccess=function(){let a=l.result;a.carb=parseFloat(a.carb)+parseFloat(t.carb),a.prot=parseFloat(a.prot)+parseFloat(t.prot),a.fat=parseFloat(a.fat)+parseFloat(t.fat),a.carb=a.carb.toFixed(2),a.prot=a.prot.toFixed(2),a.fat=a.fat.toFixed(2);let s=n.put(a);s.onsuccess=function(){e.carb=a.carb,e.prot=a.prot,e.fat=a.fat,console.log("[IDB] Macros updated!")}},o.oncomplete=function(){a.close()}}},ERASEMACROS(e){let t=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,a=t.open("ds-macro-idb",1);a.onupgradeneeded=function(){let e=a.result;e.createObjectStore("macros",{keyPath:"id"}),e.createObjectStore("templates",{keyPath:"id"});console.log("[IDB] Indexed DB upgraded!")},a.onsuccess=function(){let t=a.result,s=t.transaction("macros","readwrite"),o=s.objectStore("macros"),n=o.get(0);n.onsuccess=function(){let t=n.result;t.carb=0,t.prot=0,t.fat=0;let a=o.put(t);a.onsuccess=function(){e.carb=t.carb,e.prot=t.prot,e.fat=t.fat,console.log("[IDB] Macros erased!")}},s.oncomplete=function(){t.close()}}},GETTEMPLATESFROMINDEXEDDB(e){let t=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,a=t.open("ds-macro-idb",1);a.onupgradeneeded=function(){let e=a.result;e.createObjectStore("macros",{keyPath:"id"}),e.createObjectStore("templates",{keyPath:"id"});console.log("[IDB] Indexed DB upgraded!")},a.onsuccess=function(){let t=a.result,s=t.transaction("templates","readwrite"),o=s.objectStore("templates"),n=o.getAll();n.onsuccess=function(){e.templates=n.result,console.log("[IDB] Templates loaded!")},s.oncomplete=function(){t.close()}}},ADDTEMPLATE(e,t){let a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,s=a.open("ds-macro-idb",1);s.onupgradeneeded=function(){let e=s.result;e.createObjectStore("macros",{keyPath:"id"}),e.createObjectStore("templates",{keyPath:"id"});console.log("[IDB] Indexed DB upgraded!")},s.onsuccess=function(){let a=s.result,o=a.transaction("templates","readwrite"),n=o.objectStore("templates"),l=n.get(t.id);l.onsuccess=function(){if(l.result)alert("Template already exists!");else{let a=n.add({id:t.id,name:t.name,carb:parseFloat(t.carb).toFixed(2),prot:parseFloat(t.prot).toFixed(2),fat:parseFloat(t.fat).toFixed(2)});a.onsuccess=function(){e.templates.push(t),console.log("[IDB] Template created!")}}},o.oncomplete=function(){a.close()}}}},actions:{addMacros:({commit:e},t)=>e("ADDMACROS",t),eraseMacros:({commit:e})=>e("ERASEMACROS"),getMacrosFromIndexedDB:({commit:e})=>e("GETMACROSFROMINDEXEDDB"),getTemplatesFromIndexedDB:({commit:e})=>e("GETTEMPLATESFROMINDEXEDDB"),addTemplate:({commit:e},t)=>e("ADDTEMPLATE",t)}}),ue=a("Q/mQ"),pe=a.n(ue);a("Ud79");s["default"].use(pe.a),s["default"].config.productionTip=!1,new s["default"]({router:ce,store:me,render:e=>e(h)}).$mount("#app")},boi5:function(e,t,a){},l8Rk:function(e,t,a){"use strict";var s=a("/qiE"),o=a.n(s);o.a},nNx0:function(e,t,a){"use strict";var s=a("boi5"),o=a.n(s);o.a},rap2:function(e,t,a){"use strict";var s=a("vIFz"),o=a.n(s);o.a},uz8t:function(e,t,a){"use strict";var s=a("AmXl"),o=a.n(s);o.a},vIFz:function(e,t,a){},xmMI:function(e,t,a){"use strict";var s=a("5yZl"),o=a.n(s);o.a},z4wm:function(e,t,a){},zfKo:function(e,t,a){"use strict";var s=a("AKi8"),o=a.n(s);o.a}});
//# sourceMappingURL=app.10474c9e.js.map