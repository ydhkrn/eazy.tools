"use strict";(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[9193,5462,8066,7365,6331],{83859:(e,a,t)=>{t.r(a),t.d(a,{fetchForexData:()=>d});var o=t(15023),n=t(56331),s=t(83745),l=t(37365),r=t(18066);async function d(){var e,a;let t=JSON.parse(null!==(e=s.LocalStorage.getItem(o.default.webStorage.forexData))&&void 0!==e?e:"null");if(!t||(0,n.getTimestamp)()>t.timeNextUpdate){const e=await(0,l.default)({method:l.T_HTTPMethod.GET,endpoint:o.default.API.forex});e.result&&(t=(0,r.mapForexRateResponse)(e.result),s.LocalStorage.setItem(o.default.webStorage.forexData,JSON.stringify(t)))}return null===(a=t)||void 0===a?void 0:a.conversionRates}},95462:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const o={INR:{name:"Indian Rupee",symbol:"\u20b9",altCode:"IN"},VND:{name:"Vietnamese \u0111\u1ed3ng",symbol:"\u20ab",altCode:"VN"},NZD:{name:"New Zealand Dollar",symbol:"$",altCode:"NZ"},THB:{name:"Thai Baht",symbol:"\u0e3f",altCode:"TH"},USD:{name:"US Dollar",symbol:"$",altCode:"US"},EUR:{name:"Euro",symbol:"\u20ac",altCode:"EU"},AED:{name:"UAE Dirham",symbol:"\u062f.\u0625",altCode:"AE"},QAR:{name:"Qatari Riyal",symbol:"\u0631.\u0642",altCode:"QA"},JPY:{name:"Japanese Yen",symbol:"\xa5",altCode:"JP"},GBP:{name:"Great British Pound",symbol:"\xa3",altCode:"GB"},RUB:{name:"Russian Ruble",symbol:"\u20bd",altCode:"RU"},CNY:{name:"Chinese Yuan",symbol:"\u5143",altCode:"CN"},AUD:{name:"Australian Dollar",symbol:"$",altCode:"AU"},CAD:{name:"Canadian Dollar",symbol:"$",altCode:"CA"},LAK:{name:"Lao Kip",symbol:"\u20adN",altCode:"LA"},IDR:{name:"Indonesian Rupiah",symbol:"Rp",altCode:"ID"}},n={unitsMap:o,defaults:{inputCode:"INR",targetCode:"USD",favoriteCodes:Object.keys(o)}}},18066:(e,a,t)=>{function o(e){return{baseCode:e.base_code,conversionRates:e.conversion_rates,timeLastUpdate:e.time_last_update_unix,timeNextUpdate:e.time_next_update_unix}}t.r(a),t.d(a,{mapForexRateResponse:()=>o})},9193:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var o=t(65043),n=t(53030),s=t(95462),l=t(83859),r=t(80168),d=t(70579);const i=function(){const[e,a]=(0,o.useState)();return(0,o.useEffect)((()=>{(async()=>{let e=await(0,l.fetchForexData)();e&&a(e)})()}),[]),e?(0,d.jsx)(n.default,{allUnitsMap:s.default.unitsMap,conversionRates:e,defaults:s.default.defaults,UnitIconComponent:r.default}):null}},80168:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});t(65043),t(21478);var o=t(70579);function n(e){let{code:a,iconClassName:t="",wrapperClassName:n=""}=e;return(0,o.jsx)("span",{className:n,children:(0,o.jsx)("i",{className:`countryFlagSprite countryFlag-${a.toLowerCase()} ${t}`})})}},37365:(e,a,t)=>{let o;t.r(a),t.d(a,{T_HTTPMethod:()=>o,default:()=>s,getQueryParams:()=>n}),function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE"}(o||(o={}));const n=e=>Object.keys(e).filter((a=>"undefined"!==typeof e[a]&&null!==e[a]&&""!==e[a])).map((a=>`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`)).join("&");async function s(e){let{method:a,endpoint:t,params:s,headers:l,body:r,rawBody:d}=e,i=t;s&&(i+=(-1===i.indexOf("?")?"?":"&")+n(s));const u={headers:l,method:a,credentials:"same-origin",mode:"cors"};a!==o.GET&&(d||r)&&(u.body=d||JSON.stringify(r));try{const e=await fetch(i,u);let a;if(a=(e.headers.get("Content-Type")||"").includes("application/json")?await e.json():e,e.status>=400)throw a||await e.text();return{result:a}}catch(m){return{error:m instanceof Error?m.message:m}}}},56331:(e,a,t)=>{function o(){return Math.floor(+Date.now()/1e3)}t.r(a),t.d(a,{getTimestamp:()=>o})},21478:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});const o={}}}]);
//# sourceMappingURL=9193.9223b6ba.chunk.js.map