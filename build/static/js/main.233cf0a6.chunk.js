(this["webpackJsonpget-me-a-slot"]=this["webpackJsonpget-me-a-slot"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(10),i=a.n(n),l=a(4),r=a(38),o=a(8),u=a(39),d=a(20),p=a(17),j=a(26),b=a(40),h=a(31),m=a(32),f=a(41),O=a(27),v=a(13),g=a.n(v),x=a(21);function y(e,t){return void 0===t||null===t||"string"===typeof t&&""===t.trim()||void 0!==e&&null!==e&&e===S(t)}function S(e){var t=e.getMonth()+1,a=e.getDate();return t<10&&(t="0"+t),a<10&&(a="0"+a),a+"-"+t+"-"+e.getFullYear()}var D,N=a(9),C=function(e,t){return{errorMessage:"Not able to connect Cowin server at ".concat(t,". If auto refresh is not checked please search again"),timeStamp:t,slotList:[]}},w=function(e,t){var a="";return e.vaccine_fees&&e.vaccine_fees.length&&e.vaccine_fees.forEach((function(e){e.vaccine===t&&(a=e.fee)})),a},_=function(e){var t="",a=S(e.selectedDate);"searchByPin"===e.selectedSearch?t=e.showFutureDates?"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+e.pin+"&date="+a:"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+e.pin+"&date="+a:"searchByDistrict"===e.selectedSearch&&(t=e.showFutureDates?"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+e.selectedDistrict+"&date="+a:"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+e.selectedDistrict+"&date="+a),e.showFutureDates?(F({url:t,setDataSet:e.setDataSet}),e.autoRefresh&&(D=setInterval(Object(x.a)(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:F({url:t,setDataSet:e.setDataSet});case 1:case"end":return a.stop()}}),a)}))),5e3))):(k({url:t,setDataSet:e.setDataSet}),e.autoRefresh&&(D=setInterval(Object(x.a)(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:k({url:t,setDataSet:e.setDataSet});case 1:case"end":return a.stop()}}),a)}))),5e3)))},F=function(e){var t=e.url,a=e.setDataSet;if(t){var s=(new Date).toLocaleString();fetch(t,{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return a(function(e,t){console.log(e);var a={errorMessage:"",timeStamp:t,slotList:[]};return e.forEach((function(e){var t={name:e.name,address:e.address,district_name:e.district_name,pincode:e.pincode,fee_type:e.fee_type};e.sessions.forEach((function(s){var c={date:s.date,age:18===e.min_age_limit?"Age 18+":"Age 45+",fee:"Paid"===e.fee_type?w(e,s.vaccine):"",vaccine:s.vaccine};s.available_capacity_dose1&&a.slotList.push(Object(N.a)(Object(N.a)(Object(N.a)({},t),c),{},{dose:"Dose1",doseCapacity:s.available_capacity_dose1})),s.available_capacity_dose2&&a.slotList.push(Object(N.a)(Object(N.a)(Object(N.a)({},t),c),{},{dose:"Dose2",doseCapacity:s.available_capacity_dose2}))}))})),a.slotList.length||(a.errorMessage="No slots available. Please refine search criteria"),a}(e.centers,s))})).catch((function(e){return a(C(0,s))}))}},k=function(e){var t=e.url,a=e.setDataSet;if(t){var s=(new Date).toLocaleString();fetch(t,{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return a(function(e,t){var a={errorMessage:"",timeStamp:t,slotList:[]};return console.log(e),e.forEach((function(e){var t={name:e.name,address:e.address,district_name:e.district_name,pincode:e.pincode,fee_type:e.fee_type,fee:e.fee,date:e.date,age:18===e.min_age_limit?"Age 18+":"Age 45+",vaccine:e.vaccine};e.available_capacity_dose1&&a.slotList.push(Object(N.a)(Object(N.a)({},t),{},{dose:"Dose1",doseCapacity:e.available_capacity_dose1})),e.available_capacity_dose2&&a.slotList.push(Object(N.a)(Object(N.a)({},t),{},{dose:"Dose2",doseCapacity:e.available_capacity_dose2}))})),a.slotList.length||(a.errorMessage="No slots available. Please refine search criteria"),a}(e.sessions,s))})).catch((function(e){return a(C(0,s))}))}},P=function(){var e=Object(x.a)(g.a.mark((function e(t){var a,s,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in a=t.url,s=t.requestParams,c="",s)c=0===c.length?"?"+n+"="+s[n]:c+"&"+n+"="+s[n];return e.abrupt("return",fetch(a+c,{method:"GET",headers:{Accept:"application/json"}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=a(1);function L(e){var t,a=e.statesList,n=e.setDataSet,i=e.displaySearchDialog,r=e.setDisplaySearchDialog,v=Object(s.useRef)(null),g=Object(s.useState)("searchByPin"),x=Object(l.a)(g,2),y=x[0],N=x[1],C=Object(s.useState)(),w=Object(l.a)(C,2),F=w[0],k=w[1],L=Object(s.useState)(""),E=Object(l.a)(L,2),I=E[0],A=E[1],M=Object(s.useState)(""),T=Object(l.a)(M,2),V=T[0],R=T[1],W=Object(s.useState)(!1),H=Object(l.a)(W,2),J=H[0],U=H[1],G=Object(s.useState)(!1),z=Object(l.a)(G,2),X=z[0],$=z[1],q=Object(s.useState)(!1),Y=Object(l.a)(q,2),K=Y[0],Q=Y[1],Z=Object(s.useState)(new Date),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],se=Object(s.useState)([]),ce=Object(l.a)(se,2),ne=ce[0],ie=ce[1],le=Object(s.useState)(!0),re=Object(l.a)(le,2),oe=re[0],ue=re[1],de=new Date;de.setDate(de.getDate()+7);var pe=function(){/^[1-9][0-9]{5}$/.test(F)?(r(!1),X&&Q(!0),_({selectedSearch:y,pin:F,selectedDate:te,autoRefresh:X,showFutureDates:J,setDataSet:n})):v&&v.current&&v.current.show({sticky:!0,severity:"error",summary:"Invalid pincode"})},je=function(){V?(r(!1),X&&Q(!0),_({selectedSearch:y,selectedDistrict:V,selectedDate:te,autoRefresh:X,showFutureDates:J,setDataSet:n})):v&&v.current&&v.current.show({sticky:!0,severity:"error",summary:"Please select district"})};return t="searchByPin"===y?Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)(b.InputNumber,{value:F,onChange:function(e){return k(e.value)},className:"p-col-12",placeholder:"Enter Pincode",useGrouping:!1,disabled:K}),Object(B.jsx)("div",{className:"p-col-12"})]}):"searchByDistrict"===y?Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)(m.Dropdown,{optionLabel:"state_name",optionValue:"state_id",value:I,options:a,onChange:function(e){return t=e.value,ue(!t),A(t),void P({url:"https://cdn-api.co-vin.in/api/v2/admin/location/districts"+"/".concat(t)}).then((function(e){return e.json()})).then((function(e){v&&v.current&&v.current.clear(),ie(e.districts)})).catch((function(e){v&&v.current&&(v.current.show({sticky:!0,severity:"error",summary:"Unable to fetch districts. Try again"}),ie([]))}));var t},placeholder:"Select state",className:"p-col-12",disabled:K}),Object(B.jsx)(m.Dropdown,{optionLabel:"district_name",optionValue:"district_id",value:V,options:ne,onChange:function(e){return R(e.value)},className:"p-col-12",placeholder:"Select district",disabled:oe||K})]}):Object(B.jsx)("div",{children:"Something went wrong. Please reload"}),Object(B.jsx)(c.a.Fragment,{children:Object(B.jsxs)(j.Dialog,{header:"Search Slots",visible:i,onHide:function(){return r(!1)},resizable:!1,breakpoints:{"1024px":"75vw","640px":"100vw"},style:{width:"30vw"},children:[Object(B.jsx)("div",{className:"p-grid",children:Object(B.jsx)("div",{className:"p-col p-d-flex p-jc-center",children:Object(B.jsx)(u.SelectButton,{value:y,options:[{label:"By Pin",value:"searchByPin"},{label:"By District",value:"searchByDistrict"}],onChange:function(e){var t;null===(t=e.value)?N(y):(N(t),v&&v.current&&v.current.clear())}})})}),Object(B.jsx)(d.Divider,{className:"p-mt-1"}),Object(B.jsxs)("div",{className:"p-grid",children:[t,Object(B.jsx)("div",{className:"p-col-12",children:Object(B.jsx)(O.Calendar,{id:"basic",dateFormat:"dd-mm-yy",value:te,minDate:new Date,maxDate:de,onChange:function(e){return ae(e.value)},className:"p-col-12 p-p-0",disabled:K})}),Object(B.jsxs)("div",{className:"p-col-12",children:[Object(B.jsx)(h.Checkbox,{checked:J,onChange:function(e){return U(e.checked)},inputId:"futureDates",disabled:K}),Object(B.jsxs)("label",{htmlFor:"futureDates",className:"p-checkbox-label  p-ml-2",children:["Future dates (Slots availability till ",S(de),")"]})]}),Object(B.jsxs)("div",{className:"p-col-12",children:[Object(B.jsx)(h.Checkbox,{checked:X,onChange:function(e){return $(e.checked)},inputId:"autoRefresh",disabled:K}),Object(B.jsx)("label",{htmlFor:"autoRefresh",className:"p-checkbox-label  p-ml-2",children:"Auto refresh (Trigger auto search at 5s interval)"})]}),Object(B.jsx)("div",{className:"p-col-12",children:Object(B.jsx)(o.Button,{label:"Find slot",className:"p-button p-col-12",onClick:function(){"searchByPin"===y?pe():"searchByDistrict"===y&&je()},disabled:K})}),K&&Object(B.jsx)("div",{className:"p-col-12",children:Object(B.jsx)(o.Button,{label:"Stop search",className:"p-button p-col-12",onClick:function(){clearInterval&&clearInterval(D),Q(!1)}})}),Object(B.jsx)(f.Messages,{ref:v,className:"p-col-12 searchFieldErrorMessage"})]}),Object(B.jsx)(d.Divider,{className:"p-mt-2"}),Object(B.jsxs)(p.Card,{className:"disclaimer",children:[Object(B.jsxs)("p",{children:["Do not close the browser if ",Object(B.jsx)("b",{children:"'Auto refresh'"})," is selected. Once any slot is available the details will be displayed and you will also get a notification sound."]}),Object(B.jsx)("p",{children:"Disclaimer : Due to high demand, slot availability on CoWin changes rapidly. Please book the slots on CoWin as soon as they are available."})]})]})})}var E=a(22);function I(e){var t=e.displaySubscribeDialog,a=e.setDisplaySubscribeDialog,n=Object(s.useState)(""),i=Object(l.a)(n,2),r=i[0],u=i[1],b=Object(s.useState)(""),h=Object(l.a)(b,2),m=h[0],f=h[1],O=Object(s.useState)(!1),v=Object(l.a)(O,2),g=v[0],x=v[1];return Object(B.jsx)(c.a.Fragment,{children:Object(B.jsxs)(j.Dialog,{header:"Subscribe slots notification",visible:t,onHide:function(){return a(!1)},resizable:!1,breakpoints:{1200:"75vw","640px":"100vw"},style:{width:"30vw"},children:[Object(B.jsx)(E.InputText,{value:m,onChange:function(e){return function(e){f(e);var t=/^[1-9][0-9]{5}$/;x(e.split(",").every((function(e){return t.test(e),!1})))}(e.target.value)},className:"p-col-12",placeholder:"Enter Pincode(use , for multiple)"}),Object(B.jsx)(E.InputText,{value:r,onChange:function(e){return u(e.value)},className:"p-col-12",style:{marginTop:"1rem"},placeholder:"Enter email id"}),Object(B.jsx)("div",{className:"p-col-12",style:{padding:"0.5rem 0"},children:Object(B.jsx)(o.Button,{label:"Subscribe",className:"p-button p-col-12",onClick:function(){m.split(",").forEach((function(e){e.startsWith(0)||console.log(e)}))},style:{marginTop:"0.5rem"},disabled:!g})}),Object(B.jsx)(d.Divider,{className:"p-mt-2"}),Object(B.jsxs)(p.Card,{className:"disclaimer",children:[Object(B.jsxs)("p",{className:"underDevelopment",children:[Object(B.jsx)("h1",{children:"Our apologies!"}),Object(B.jsx)("h4",{children:"This functionality is still under development"})]}),Object(B.jsx)("p",{children:"Users can subscribe to multiple pincodes"}),Object(B.jsx)("p",{children:"User will get an email notification as soon as slots for a subscribed pincode is available"}),Object(B.jsx)("p",{children:"Disclaimer : Due to high demand, slot availability on CoWin changes rapidly. Please book the slots on CoWin as soon as they are available."})]})]})})}function A(e){var t=e.states,a=e.setDataSet,n=Object(s.useState)(!1),i=Object(l.a)(n,2),u=i[0],d=i[1],p=Object(s.useState)(!1),j=Object(l.a)(p,2),b=j[0],h=j[1];Object(s.useEffect)((function(){d(!0)}),[]);var m=[{template:function(){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)(o.Button,{label:"Search Slots",icon:"pi pi-bell",className:"p-button-raised p-mr-2",onClick:function(){return d(!0)}}),Object(B.jsx)(L,{statesList:t,setDataSet:a,displaySearchDialog:u,setDisplaySearchDialog:d})]})}},{template:function(){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)(o.Button,{label:"Notify Slots",icon:"pi pi-bell",className:"p-button-raised p-mr-2",onClick:function(){return h(!0)}}),Object(B.jsx)(I,{displaySubscribeDialog:b,setDisplaySubscribeDialog:h})]})}}];return Object(B.jsx)(c.a.Fragment,{children:Object(B.jsx)("div",{className:"card appMenuBar",children:Object(B.jsx)(r.Menubar,{model:m})})})}var M=a(42),T=a(11),V=a(23),R=a(33),W=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsxs)("h3",{className:"nameColumn p-m-0 p-p-0",children:[e.name,", ",e.district_name]}),Object(B.jsxs)("h5",{className:"p-m-0 p-p-0",style:{color:"blue"},children:[Object(B.jsx)("i",{className:"pi pi-map-marker"}),Object(B.jsx)("span",{className:"p-ml-1",children:e.address})]})]})},H=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"District"}),Object(B.jsx)("span",{className:"image-text",children:e.pincode})]})},J=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"Dose (Slots)"}),Object(B.jsx)("span",{className:"image-text",children:e.dose}),Object(B.jsx)(R.Badge,{value:e.doseCapacity,severity:"success",className:"p-ml-2"})]})},U=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"Fee (Price)"}),Object(B.jsx)("span",{className:"image-text",children:e.fee_type}),"Paid"===e.fee_type&&e.fee&&Object(B.jsx)(R.Badge,{value:e.fee,severity:"danger",className:"p-ml-2"})]})},G=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"Age"}),Object(B.jsx)("span",{className:"image-text",children:e.age})]})},z=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"Vaccine"}),Object(B.jsx)("span",{className:"image-text",children:e.vaccine})]})},X=function(e){return Object(B.jsxs)(c.a.Fragment,{children:[Object(B.jsx)("span",{className:"p-column-title",children:"Date"}),Object(B.jsx)("span",{children:e.date})]})},$=function(e){return Object(B.jsx)(c.a.Fragment,{children:Object(B.jsx)(o.Button,{label:"Book",className:"p-button p-col-12",onClick:function(){return window.open("https://selfregistration.cowin.gov.in/","_blank")}})})},q=a.p+"static/media/beep.40e5c7db.mp3";function Y(e){var t=e.dataSet,a=Object(s.useRef)(null),c=Object(s.useRef)(null),n=Object(s.useState)(""),i=Object(l.a)(n,2),r=i[0],u=i[1],d=Object(s.useState)(null),p=Object(l.a)(d,2),j=p[0],b=p[1],h=Object(s.useState)(null),m=Object(l.a)(h,2),f=m[0],v=m[1],g=Object(s.useState)(null),x=Object(l.a)(g,2),S=x[0],D=x[1],N=Object(s.useState)(null),C=Object(l.a)(N,2),w=C[0],_=C[1],F=Object(s.useState)(null),k=Object(l.a)(F,2),P=k[0],L=k[1],I=Object(s.useState)("play"),A=Object(l.a)(I,2),R=A[0],Y=A[1];Object(s.useEffect)((function(){if(sessionStorage.getItem("configuration")){var e=JSON.parse(sessionStorage.getItem("configuration")).isPlayState;Y(e||"play")}}),[]),Object(s.useEffect)((function(){sessionStorage.setItem("configuration",JSON.stringify({isPlayState:R}))}),[R]),Object(s.useEffect)((function(){c&&c.current&&t.slotList.length&&"play"===R&&c.current.play()}),[t]);var K=Object(B.jsx)("div",{className:"table-header p-grid p-m-0",children:Object(B.jsxs)("div",{className:"p-inputgroup p-col-11 p-md-5 p-lg-3 p-p-0 p-d-lg-flex ".concat(t.slotList&&t.slotList.length?"p-d-flex":"p-d-none"),children:[Object(B.jsx)(o.Button,{icon:"pi ".concat("play"===R?"pi-volume-up":"pi-volume-off"),className:"p-mr-2",onClick:function(){return Y("play"===R?"pause":"play")}}),Object(B.jsx)(E.InputText,{type:"search",value:r,onChange:function(e){return u(e.target.value)},placeholder:"Global Search"}),Object(B.jsx)(o.Button,{icon:"pi pi-filter-slash",onClick:function(){b(null),L(null),v(null),D(null),_(null),u(""),a.current.reset()}})]})}),Q=Object(B.jsx)(V.MultiSelect,{value:j,options:[{name:"Dose1",value:"Dose1"},{name:"Dose2",value:"Dose2"}],onChange:function(e){a.current.filter(e.value,"dose","in"),b(e.value)},optionLabel:"name",optionValue:"value",placeholder:"All",className:"p-column-filter"}),Z=Object(B.jsx)(V.MultiSelect,{value:f,options:[{name:"Free",value:"Free"},{name:"Paid",value:"Paid"}],onChange:function(e){a.current.filter(e.value,"fee_type","in"),v(e.value)},optionLabel:"name",optionValue:"value",placeholder:"All",className:"p-column-filter"}),ee=Object(B.jsx)(V.MultiSelect,{value:S,options:[{name:"Age 18+",value:"Age 18+"},{name:"Age 45+",value:"Age 45+"}],onChange:function(e){a.current.filter(e.value,"age","in"),D(e.value)},optionLabel:"name",optionValue:"value",placeholder:"All",className:"p-column-filter"}),te=Object(B.jsx)(V.MultiSelect,{value:w,options:[{name:"COVISHIELD",value:"COVISHIELD"},{name:"COVAXIN",value:"COVAXIN"}],onChange:function(e){a.current.filter(e.value,"vaccine","in"),_(e.value)},optionLabel:"name",optionValue:"value",placeholder:"All",className:"p-column-filter"}),ae=Object(B.jsx)(O.Calendar,{value:P,onChange:function(e){a.current.filter(e.value,"date","custom"),L(e.value)},dateFormat:"dd-mm-yy",className:"p-column-filter",placeholder:"Date"});return Object(B.jsxs)("div",{className:"datatable-slots-container",children:[Object(B.jsx)("div",{className:"card",children:Object(B.jsxs)(M.DataTable,{ref:a,value:t.slotList,paginator:!0,rows:10,header:K,className:"p-datatable-slots p-datatable-gridlines p-datatable-striped p-datatable-lg",globalFilter:r,emptyMessage:Object(B.jsxs)("h2",{style:{color:"red"},children:["  ",t.errorMessage]}),paginatorPosition:"top",alwaysShowPaginator:!1,children:[Object(B.jsx)(T.Column,{style:{width:"25%"},field:"name",header:"Name",body:W,sortable:!0}),Object(B.jsx)(T.Column,{style:{width:"10%"},field:"pincode",header:"Pincode",body:H,sortable:!0}),Object(B.jsx)(T.Column,{field:"date",header:"Date",body:X,filter:!0,filterElement:ae,filterFunction:y}),Object(B.jsx)(T.Column,{field:"dose",header:"Dose (No of Slots)",body:J,filter:!0,filterElement:Q}),Object(B.jsx)(T.Column,{field:"fee_type",header:"Fee (Price)",body:U,filter:!0,filterElement:Z}),Object(B.jsx)(T.Column,{field:"age",header:"Age",body:G,filter:!0,filterElement:ee}),Object(B.jsx)(T.Column,{field:"vaccine",header:"Vaccine",body:z,filter:!0,filterElement:te}),Object(B.jsx)(T.Column,{field:"null",body:$})]})}),Object(B.jsx)("audio",{ref:c,children:Object(B.jsx)("source",{src:q})})]})}var K=a(43);function Q(){var e=Object(s.useRef)(null),t=Object(s.useState)([]),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(s.useState)({errorMessage:"Start searching to view slots availability",timeStamp:"",slotList:[]}),o=Object(l.a)(r,2),u=o[0],d=o[1];return Object(s.useEffect)((function(){P({url:"https://cdn-api.co-vin.in/api/v2/admin/location/states"}).then((function(e){return e.json()})).then((function(e){return i(e.states)})).catch((function(t){e&&e.current&&e.current.show({severity:"error",summary:"Unable to fetch states from Cowin portal",detail:"Please reload or continue search using pincode.",sticky:!0})}))}),[]),Object(B.jsx)(c.a.Fragment,{children:Object(B.jsx)("div",{className:"p-grid full-height",children:Object(B.jsx)("div",{className:"p-col-12",children:Object(B.jsxs)("div",{className:"p-grid",children:[Object(B.jsx)(K.Toast,{ref:e,position:"bottom-right"}),Object(B.jsx)("div",{className:"p-col-12 p-mb-0",children:Object(B.jsx)(A,{states:n,setDataSet:function(t){e&&e.current&&e.current.show({severity:"info",summary:"Checked cowin portal at: ",detail:t.timeStamp,life:3e3}),d(t)}})}),Object(B.jsx)("div",{className:"p-col-12 bottom-panel",children:Object(B.jsx)(p.Card,{className:"p-col-12",children:Object(B.jsx)(Y,{dataSet:u})})})]})})})})}var Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};a(100),a(101),a(102),a(103),a(104),a(105);i.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[106,1,2]]]);