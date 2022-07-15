"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[7614,210,152,424],{47614:function(e,a,s){s.r(a),s.d(a,{default:function(){return o}});s(72791);var n=s(90152),t=(s(210),s(80184));function o(){return(0,t.jsxs)("div",{className:"Clock",children:[(0,t.jsx)(n.default,{otherTimeZones:["Asia/Kolkata","Pacific/Auckland","Asia/Ho_Chi_Minh"]}),(0,t.jsx)("div",{className:"fix"})]})}},40424:function(e,a,s){s.r(a),s.d(a,{useClocksData:function(){return d}});var n=s(1413),t=s(93433),o=s(29439),r=s(72791),c=s(73700),i=s(21631);function d(e){var a=null===e||void 0===e?void 0:e.filter((function(e){return m!==e})),s=(0,r.useState)(l(a)),n=(0,o.Z)(s,2),t=n[0],c=n[1];return(0,r.useEffect)((function(){var e=setInterval((function(){c(l(a))}),1e3);return function(){return clearInterval(e)}}),[e]),t}function l(e){var a=c.ou.now(),s=[u(a)];return e&&s.push.apply(s,(0,t.Z)(e.map((function(e){return u(a,e)})))),s}function u(e,a){var s=a?e.setZone(a):e,t=s.zoneName,o=s.offsetNameLong,r=s.offsetNameShort,c=s.hour,d=s.minute,l=s.second,u=s.isInDST,m=s.year,f=s.monthShort,v=s.monthLong,x=s.day,N=s.weekdayLong,g=s.weekdayShort,j=h(t),y=s.toFormat("a"),k=i.default.find((function(e){return e.timeZone===j}))||{countryCode:"",countryName:""};return(0,n.Z)((0,n.Z)({isLocal:!a,timeZoneName:j,offsetNameLong:o,offsetNameShort:r},k),{},{hour:s.toFormat("hh"),minute:s.toFormat("mm"),second:s.toFormat("ss"),meridiem:y,isInDST:u,year:m,monthShort:f,monthLong:v,day:x,weekdayLong:N,weekdayShort:g,hourDeg:c/12*360+d/60*30+90,minuteDeg:d/60*360+l/60*6+90,secondDeg:l/60*360+90})}var m=h(c.ou.now().zoneName);function h(e){return e.replace("Calcutta","Kolkata")}},90152:function(e,a,s){s.r(a),s.d(a,{default:function(){return r}});s(72791);var n=s(54216),t=s(40424),o=(s(71686),s(80184));function r(e){var a=e.otherTimeZones,s=(0,t.useClocksData)(a);return(0,o.jsxs)("div",{className:"Clocks",children:[s.map((function(e){return(0,o.jsxs)("div",{className:"clockWrap",children:[(0,o.jsxs)("div",{className:"clockMeta",children:[(0,o.jsxs)("div",{className:"clockMetaHeadWrap",children:[(0,o.jsx)(n.default,{code:e.countryCode}),"\xa0",(0,o.jsx)("span",{className:"clockMetaTitle",children:e.countryName}),"\xa0",e.isLocal&&(0,o.jsx)("svg",{className:"-mt-1 w-5 h-5",fill:"#bbb",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})]}),e.weekdayLong,",",(0,o.jsx)("br",{})," ",e.day," ",e.monthLong," ",e.year]}),(0,o.jsx)("div",{className:"analog-clock",children:(0,o.jsxs)("div",{className:"analog-clock-face",children:[(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{className:"dots"}),(0,o.jsx)("div",{style:{transform:"rotate(".concat(e.hourDeg,"deg)")},className:"hand hour-hand"}),(0,o.jsx)("div",{style:{transform:"rotate(".concat(e.minuteDeg,"deg)")},className:"hand min-hand"}),(0,o.jsx)("div",{style:{transform:"rotate(".concat(e.secondDeg,"deg)")},className:"hand sec-hand"}),e.isInDST&&(0,o.jsxs)("i",{className:"pt-2 text-center block tracking-wider text-gray-400 text-xs",children:["daylight",(0,o.jsx)("br",{}),"saving"]})]})}),(0,o.jsxs)("div",{className:"digital-clock",children:[(0,o.jsx)("div",{className:"digit digit-hour",children:e.hour}),(0,o.jsx)("span",{className:"self-center text-gray-300 animate-ping",children:":"}),(0,o.jsx)("div",{className:"digit digit-min",children:e.minute}),(0,o.jsx)("div",{className:"digit digit-sec",children:e.second}),(0,o.jsx)("div",{className:"meridiem",children:e.meridiem})]})]},e.timeZoneName)})),(0,o.jsx)("div",{className:"clockWrap !justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg group cursor-pointer",children:(0,o.jsx)("span",{className:"self-center group-hover:scale-125 text-2xl",children:"\u2795"})})]})}},54216:function(e,a,s){s.r(a),s.d(a,{default:function(){return t}});s(72791),s(34830);var n=s(80184);function t(e){var a=e.code,s=e.iconClassName,t=void 0===s?"":s,o=e.wrapperClassName,r=void 0===o?"":o;return(0,n.jsx)("span",{className:r,children:(0,n.jsx)("i",{className:"countryFlagSprite countryFlag-".concat(a.toLowerCase()," ").concat(t)})})}},210:function(e,a,s){s.r(a),a.default={}},71686:function(e,a,s){s.r(a),a.default={}},34830:function(e,a,s){s.r(a),a.default={}}}]);
//# sourceMappingURL=7614.23427cda.chunk.js.map