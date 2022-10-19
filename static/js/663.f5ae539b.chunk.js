"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[663,4831,4988,775,1707,6414,8134,4582],{64831:function(e,t,n){n.r(t);var r=n(1413),a={borderTopRightRadius:"20%",borderTopLeftRadius:"20%",borderBottomRightRadius:"100%",borderBottomLeftRadius:"100%",borderWidth:3,height:25,width:13,marginTop:-16},o={degreePerClockMark:60,clockMarkCount:24,clockTimeDelimiter:":",clockMarkDegreeRange:{min:0,max:1440},sliderStyleProps:{handleStyle:[(0,r.Z)((0,r.Z)({},a),{},{borderColor:"#01527E",backgroundColor:"#3FBF3F"}),(0,r.Z)((0,r.Z)({},a),{},{borderColor:"#01527E",backgroundColor:"#FE473E"})],dotStyle:{height:20,width:1,borderRadius:0,borderColor:"#ddd"},trackStyle:{marginTop:-14,height:20,borderRadius:0,backgroundColor:"#58B5FD"},railStyle:{borderRadius:0,marginTop:-14,height:20,backgroundColor:"#eee"}}};t.default=o},14988:function(e,t,n){n.r(t),n.d(t,{get12HourValue:function(){return u},getMeridiemFrom24HourValue:function(){return c},get24HourValue:function(){return d},getTimeFromDegreeForDisplay:function(){return g},getDegreeFromTime:function(){return f},getClockMarksResponsive:function(){return h},getSliderStylePropsResponsive:function(){return x},convertDegreeValuesToTimeValuesForDisplay:function(){return p},convertDateTimeValuesToDegreeValues:function(){return Z},convertTimeValuesToDegreeValues:function(){return v},getDegreeValuesWithoutOverflow:function(){return T},initialState:function(){return k},getTimeRangeSelectorEventHandlers:function(){return N}});var r=n(29439),a=n(1413),o=n(88142),i=n(88134),s=n(84582),m=n(64831),l=n(96414);function u(e){var t=e%12;return t||12}function c(e){return e>=12?l.E_Meridiem.PM:l.E_Meridiem.AM}function d(e,t){var n=(0,i.toNumber)(e);if(t)if(t===l.E_Meridiem.PM){if(n<12)return n+12}else if(12===n)return 0;return null!==n&&void 0!==n?n:0}function g(e,t){var n=0,r=0;return 0!==e&&(n=(e-(r=e%m.default.degreePerClockMark))/m.default.degreePerClockMark),function(e,t){var n=e.hour,r=e.minute,a=null;return t||(a=n>=12&&24!==n?l.E_Meridiem.PM:l.E_Meridiem.AM,n=u(n)),{hour:String(n).padStart(2,"0"),minute:String(r).padStart(2,"0"),meridiem:a}}({hour:n,minute:r},t)}function f(e){return d(e.hour,e.meridiem)*m.default.degreePerClockMark+(0,i.toNumber)(e.minute)}function h(e,t){for(var n={},r=0;r<=m.default.clockMarkCount;r++){var a=r*m.default.degreePerClockMark,i=e?r:u(r),s=void 0;switch(null===t||void 0===t?void 0:t.name){case o.default.breakpoints.none.name:s={style:{fontSize:8,marginTop:-3},label:i};break;case o.default.breakpoints.small.name:case o.default.breakpoints.medium.name:s={style:{fontSize:10,marginTop:-2},label:i};break;default:s=i}n[a]=s}return n}function x(e,t){var n,r,i,s,m=(0,a.Z)({},e);if((null===t||void 0===t?void 0:t.name)===o.default.breakpoints.none.name){n={borderWidth:2,width:10},r={height:20,borderWidth:1},i={height:20},s={height:20}}return Array.isArray(e.handleStyle)&&n&&(m.handleStyle=[(0,a.Z)((0,a.Z)({},e.handleStyle[0]),n),(0,a.Z)((0,a.Z)({},e.handleStyle[1]),n)]),e.dotStyle&&r&&(m.dotStyle=(0,a.Z)((0,a.Z)({},e.dotStyle),r)),e.trackStyle&&i&&(m.trackStyle=(0,a.Z)((0,a.Z)({},e.trackStyle),i)),e.railStyle&&s&&(m.railStyle=(0,a.Z)((0,a.Z)({},e.railStyle),s)),m}function p(e,t){return e.map((function(e){return g(e,t)}))}function Z(e){return e.map((function(e){return f({hour:e.hour.toString(),minute:e.minute.toString()})}))}function v(e){return e.map((function(e){return f({hour:e.hour,minute:e.minute,meridiem:e.meridiem})}))}function T(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1],o=a;return n>a&&(o=m.default.clockMarkDegreeRange.max),[n,o]}var y=(0,s.getClocksDataOfLocalAndOtherTimeZones)(["Asia/Kolkata","Pacific/Auckland","Asia/Tokyo","America/New_York","Asia/Dubai","Asia/Singapore","Europe/London","Europe/Berlin"].filter((function(e){return e!==s.localTimeZoneName}))),S=(0,r.Z)(y,1)[0],k={timeZonesData:y.map((function(e,t){var n=d(S.hour,S.meridiem)+1,r=n+1,o=T(v([{hour:n.toString(),minute:"0",meridiem:c(n)},{hour:r.toString(),minute:"0",meridiem:c(r)}])),i=p(o,false);return(0,a.Z)((0,a.Z)({},e),{},{timeRange:{degreeValues:o,timeValuesForDisplay:i}})})),is24HourFormat:false};function N(e){return{handle24HourFormatToggle:function(){e([l.E_TimeRangeSelectorActions.toggle24HourFormat])},handleTimeRangeChange:function(t){e([l.E_TimeRangeSelectorActions.setTimeRangeHandle,t])},handleTimeZoneListItemAction:function(t){var n=t.currentTarget.dataset,r=n.timeZoneName,a=n.actionName;if(r&&a)return a===l.E_TimeRangeSelectorTimeZoneListItemActions.setAsMain?void e([l.E_TimeRangeSelectorActions.setMainTimeZone,r]):void 0}}}},60775:function(e,t,n){n.r(t),n.d(t,{useTimeRangeSelector:function(){return d},useSliderPropsResponsive:function(){return g}});var r=n(93433),a=n(1413),o=n(29439),i=n(73700),s=n(72791),m=n(88134),l=n(28943),u=n(14988),c=n(96414);function d(){var e=(0,s.useReducer)(f,u.initialState),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,u.getTimeRangeSelectorEventHandlers)(r);return(0,s.useEffect)((function(){var e=(0,o.Z)(n.timeZonesData,1)[0];a.handleTimeRangeChange(e.timeRange.degreeValues)}),[]),{state:n,eventHandlers:a}}function g(e,t){var n=(0,l.useActiveBreakpoint)(),r=(0,s.useState)((0,a.Z)({marks:(0,u.getClockMarksResponsive)(t,n)},e)),i=(0,o.Z)(r,2),m=i[0],c=i[1];return(0,s.useEffect)((function(){var r=(0,u.getClockMarksResponsive)(t,n),o=(0,u.getSliderStylePropsResponsive)(e,n);c((0,a.Z)({marks:r},o))}),[t,n,e]),m}function f(e,t){var n=(0,o.Z)(t,2),s=n[0],l=n[1];switch(s){case c.E_TimeRangeSelectorActions.toggle24HourFormat:return(0,a.Z)((0,a.Z)({},e),{},{is24HourFormat:!e.is24HourFormat});case c.E_TimeRangeSelectorActions.setMainTimeZone:var d=l,g=e.timeZonesData.find((function(e){return e.timeZoneName===d})),f=e.timeZonesData.filter((function(e){return e.timeZoneName!==d}));return g?(0,a.Z)((0,a.Z)({},e),{},{timeZonesData:[g].concat((0,r.Z)(f))}):e;case c.E_TimeRangeSelectorActions.setTimeRangeHandle:var h=l,x=(0,u.convertDegreeValuesToTimeValuesForDisplay)(h,e.is24HourFormat),p=(0,o.Z)(e.timeZonesData,1)[0],Z=e.timeZonesData.map((function(t,n){if(0===n)return(0,a.Z)((0,a.Z)({},t),{},{timeRange:{degreeValues:h,timeValuesForDisplay:x}});var r=i.ou.local().setZone(p.timeZoneName),s=(0,o.Z)(x,2),l=s[0],c=s[1],d=r.set({hour:(0,u.get24HourValue)(l.hour,l.meridiem),minute:(0,m.toNumber)(l.minute)}).setZone(t.timeZoneName),g=r.set({hour:(0,u.get24HourValue)(c.hour,c.meridiem),minute:(0,m.toNumber)(c.minute)}).setZone(t.timeZoneName),f=(0,u.convertDateTimeValuesToDegreeValues)([d,g]),Z=(0,u.convertDegreeValuesToTimeValuesForDisplay)(f,e.is24HourFormat);return(0,a.Z)((0,a.Z)({},t),{},{timeRange:{degreeValues:f,timeValuesForDisplay:Z}})}));return(0,a.Z)((0,a.Z)({},e),{},{timeZonesData:Z});default:return e}}},40711:function(e,t,n){n.r(t);var r=n(1413),a=n(29439),o=n(84506),i=(n(72791),n(64493)),s=(n(85262),n(60775)),m=n(64831),l=n(96414),u=(n(51707),n(80184));t.default=function(){var e=(0,s.useTimeRangeSelector)(),t=e.state,n=e.eventHandlers,c=(0,s.useSliderPropsResponsive)(m.default.sliderStyleProps,t.is24HourFormat),d=(0,o.Z)(t.timeZonesData),g=d[0],f=d.slice(1),h=(0,a.Z)(g.timeRange.timeValuesForDisplay,2),x=h[0],p=h[1];return(0,u.jsx)("div",{className:"TimeZone h-screen container mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12",children:(0,u.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:gap-6 2xl:gap-8 mt-5 lg:mt-10",children:[(0,u.jsxs)("div",{className:"bg-white shadow-lg bg-gradient-to-t from-neutral-100 px-5 pt-3 sm:px-8 sm:pt-6 md:px-10 md:pt-8 pb-7 sm:pb-11 flex flex-col justify-center select-none",children:[(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10",children:[(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)("span",{className:"font-semibold text-lg sm:text-2xl font-sans text-gray-500",children:g.countryName}),(0,u.jsxs)("div",{className:"text-gray-500 tracking-wide flex flex-col",children:[(0,u.jsx)("span",{className:"text-sm sm:text-base",children:g.offsetNameLong}),(0,u.jsx)("span",{className:"font-mono text-xs sm:text-sm",children:g.offsetNameShort})]})]}),(0,u.jsxs)("div",{className:"my-2 m-auto sm:m-0 text-lg sm:text-3xl text-gray-600 tracking-wide",children:[(0,u.jsxs)("span",{className:"bg-emerald-100 p-3 rounded-xl shadow-lg",children:[x.hour,":",x.minute,"\xa0",(0,u.jsx)("span",{className:"text-xs sm:text-base opacity-70",children:x.meridiem})]}),(0,u.jsx)("span",{className:"text-gray-400",children:"\xa0\xa0\u2013\xa0\xa0"}),(0,u.jsxs)("span",{className:"bg-red-100 p-3 rounded-xl shadow-lg",children:[p.hour,":",p.minute,"\xa0",(0,u.jsx)("span",{className:"text-xs sm:text-base opacity-70",children:p.meridiem})]})]})]}),(0,u.jsx)("div",{className:"mt-7 sm:mt-10",children:(0,u.jsx)(i.Z,(0,r.Z)({range:!0,min:m.default.clockMarkDegreeRange.min,max:m.default.clockMarkDegreeRange.max,step:15,value:g.timeRange.degreeValues,pushable:15,onChange:n.handleTimeRangeChange,draggableTrack:!0},c))})]}),(0,u.jsx)("div",{className:"m-auto w-11/12 sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 xl:gap-7 px-5 py-3 md:p-4 rounded-lg",children:f.map((function(e){var t=(0,a.Z)(e.timeRange.timeValuesForDisplay,2),r=t[0],o=t[1];return(0,u.jsxs)("div",{className:"rounded-lg bg-white shadow-lg shadow-neutral-300",children:[(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"px-5 py-3 sm:py-0 flex flex-col text-gray-500 tracking-wide sm:h-24 justify-center",children:[(0,u.jsx)("div",{className:"font-bold text-sm sm:text-base",children:e.countryName}),(0,u.jsxs)("div",{className:"text-gray-500 sm:mt-1 flex flex-col",children:[(0,u.jsx)("span",{className:"text-xs sm:text-sm",children:e.offsetNameLong}),(0,u.jsx)("span",{className:"font-mono text-2xs sm:text-xs",children:e.offsetNameShort})]})]}),(0,u.jsxs)("div",{className:"-mb-2 py-4 sm:py-7 text-center text-md sm:text-xl text-gray-600 tracking-wide bg-slate-100",children:[(0,u.jsxs)("span",{className:"bg-emerald-100 p-2 sm:p-3 rounded-lg shadow-lg",children:[r.hour,":",r.minute,"\xa0",(0,u.jsx)("span",{className:"text-2xs sm:text-xs opacity-70",children:r.meridiem})]}),(0,u.jsx)("span",{className:"text-gray-400",children:"\xa0\xa0\u2013\xa0\xa0"}),(0,u.jsxs)("span",{className:"bg-red-100 p-2 sm:p-3 rounded-lg shadow-lg",children:[o.hour,":",o.minute,"\xa0",(0,u.jsx)("span",{className:"text-2xs sm:text-xs opacity-70",children:o.meridiem})]})]})]}),(0,u.jsx)("div",{className:"grid grid-cols-10 mt-2",children:[l.E_TimeRangeSelectorTimeZoneListItemActions.setAsMain,l.E_TimeRangeSelectorTimeZoneListItemActions.change,l.E_TimeRangeSelectorTimeZoneListItemActions.remove].map((function(t){return(0,u.jsx)("button",{className:"favItemActionBtn","data-time-zone-name":e.timeZoneName,"data-action-name":t,onClick:n.handleTimeZoneListItemAction,children:t},t)}))})]},e.timeZoneName)}))})]})})}},96414:function(e,t,n){var r,a,o;n.r(t),n.d(t,{E_Meridiem:function(){return r},E_TimeRangeSelectorTimeZoneListItemActions:function(){return a},E_TimeRangeSelectorActions:function(){return o}}),function(e){e.AM="AM",e.PM="PM"}(r||(r={})),function(e){e.setAsMain="SET AS MAIN",e.change="CHANGE",e.remove="REMOVE"}(a||(a={})),function(e){e[e.setTimeRangeHandle=0]="setTimeRangeHandle",e[e.toggle24HourFormat=1]="toggle24HourFormat",e[e.setMainTimeZone=2]="setMainTimeZone",e[e.changeTimeZone=3]="changeTimeZone",e[e.removeTimeZone=4]="removeTimeZone"}(o||(o={}))},88134:function(e,t,n){function r(e){return+e}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r(r(e).toFixed(t))}n.r(t),n.d(t,{toNumber:function(){return r},round:function(){return a}})},84582:function(e,t,n){n.r(t),n.d(t,{getClocksDataOfLocalAndOtherTimeZones:function(){return s},getClockDataOfTimeZone:function(){return m},localTimeZoneName:function(){return l},standardizeTimeZoneName:function(){return u}});var r=n(1413),a=n(93433),o=n(73700),i=n(21631);function s(e){var t=o.ou.now(),n=[m(t)];return e&&n.push.apply(n,(0,a.Z)(e.map((function(e){return m(t,e)})))),n}function m(e,t){var n=t?e.setZone(t):e,a=n.zoneName,o=n.offsetNameLong,s=n.offsetNameShort,m=n.hour,l=n.minute,c=n.second,d=n.isInDST,g=n.year,f=n.monthShort,h=n.monthLong,x=n.day,p=n.weekdayLong,Z=n.weekdayShort,v=u(a),T=n.toFormat("a"),y=i.default.find((function(e){return e.timeZone===v}))||{countryCode:"",countryName:""};return(0,r.Z)((0,r.Z)({timeISOString:e.toISO(),isLocal:!t,timeZoneName:v,offsetNameLong:o,offsetNameShort:s},y),{},{hour:n.toFormat("hh"),minute:n.toFormat("mm"),second:n.toFormat("ss"),meridiem:T,isInDST:d,year:g,monthShort:f,monthLong:h,day:x,weekdayLong:p,weekdayShort:Z,hourDeg:m/12*360+l/60*30+90,minuteDeg:l/60*360+c/60*6+90,secondDeg:c/60*360+90})}var l=u(o.ou.now().zoneName);function u(e){return e.replace("Calcutta","Kolkata")}},51707:function(e,t,n){n.r(t),t.default={}}}]);
//# sourceMappingURL=663.f5ae539b.chunk.js.map