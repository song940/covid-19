(window.webpackJsonpApp=window.webpackJsonpApp||[]).push([[40],{308:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(124),i=e.n(o),u=e(1),c=e(15),p=e.n(c);e(245),e(266);function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=function(t){var n=t.province,e=f(Object(r.useState)([]),2),o=e[0],c=e[1],l="/api/overall?latest=0";n&&(l="/api/area?latest=0&province=".concat(n.provinceName));var s=function(t){var n=new Date(t),e=n.getMonth()+1,r=n.getDate();return"".concat(e,"/").concat(r)};Object(r.useEffect)((function(){Promise.resolve().then((function(){return fetch("https://lab.isaaclin.cn/nCoV"+l)})).catch((function(){return fetch("https://lab.ahusmart.com/nCoV"+l)})).then((function(t){return t.json()})).then((function(t){if(t.success)return t.results;throw new Error})).then((function(t){return t.map((function(t){return t.date=s(t.updateTime),t}))})).then((function(t){return t.filter((function(n,e){return e===t.findIndex((function(t){return t.date===n.date}))}))})).then((function(t){return t.sort((function(t,n){return t.updateTime-n.updateTime}))})).then(c)}),[n]);return a.a.createElement(u.a,{title:"疫情趋势"+(n?" - ".concat(n.provinceName):"")},a.a.createElement(i.a,{echarts:p.a,option:{tooltip:{trigger:"axis"},legend:{data:["疑似病例","确诊病例","治愈人数","死亡人数"]},grid:{left:"0%",right:"0%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:o.map((function(t){return s(t.updateTime)}))}],yAxis:[{type:"value"}],series:[{name:"疑似病例",type:"line",data:o.map((function(t){return t.suspectedCount}))},{name:"确诊病例",type:"line",data:o.map((function(t){return t.confirmedCount}))},{name:"治愈人数",type:"line",data:o.map((function(t){return t.curedCount}))},{name:"死亡人数",type:"line",data:o.map((function(t){return t.deadCount}))}]},lazyUpdate:!0,style:{height:"350px",width:"100%"}}))}}}]);