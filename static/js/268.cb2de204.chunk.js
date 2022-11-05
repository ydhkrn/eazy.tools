"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[268,636,8521,858,8099,6377,4542,9105,2002,8134],{30636:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});e(72791);var i=e(19297),o=e(18099),u=(e(49105),e(12002)),a=e(80184);function s(t){var n=t.onInputChange,e=t.values;return(0,a.jsx)("form",{className:"chit-input-form",children:[{text:o.textsChit.monthlyPaymentAmount,id:(0,i.toHTMLElementID)(o.textsChit.monthlyPaymentAmount),actionType:u.E_ChitActionType.inputMonthlyPaymentAmount,value:e.monthlyPaymentAmount},{text:o.textsChit.duration,id:(0,i.toHTMLElementID)(o.textsChit.duration),actionType:u.E_ChitActionType.inputDuration,value:e.duration},{text:o.textsChit.noOfPaymentsSoFar,id:(0,i.toHTMLElementID)(o.textsChit.noOfPaymentsSoFar),actionType:u.E_ChitActionType.inputNoOfPaymentsSoFar,value:e.noOfPaymentsSoFar},{text:o.textsChit.lastPaymentAmount,id:(0,i.toHTMLElementID)(o.textsChit.lastPaymentAmount),actionType:u.E_ChitActionType.inputLastPaymentAmount,value:e.lastPaymentAmount},{text:o.textsChit.agencyCommissionPercent,id:(0,i.toHTMLElementID)(o.textsChit.agencyCommissionPercent),actionType:u.E_ChitActionType.inputAgencyCommissionPercent,value:e.agencyCommissionPercent},{text:o.textsChit.yourAuctionAmount,id:(0,i.toHTMLElementID)(o.textsChit.yourAuctionAmount),actionType:u.E_ChitActionType.inputYourAuctionAmount,value:e.yourAuctionAmount}].map((function(t){var e=t.value,i=t.text,o=t.id,u=t.actionType;return(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("label",{htmlFor:o,children:i}),(0,a.jsx)("input",{type:"text",id:o,onChange:function(t){n(t,u)},value:e})]},o)}))})}},58521:function(t,n,e){e.r(n),e.d(n,{default:function(){return a}});e(72791);var i=e(88134),o=e(18099),u=(e(49105),e(80184));function a(t){var n=t.className,e=t.title,a=t.results;return(0,u.jsxs)("section",{className:"chit-output-section ".concat(null!==n&&void 0!==n?n:""),children:[(0,u.jsx)("h2",{children:e}),(0,u.jsx)("output",{children:(0,u.jsx)("table",{children:(0,u.jsx)("tbody",{className:"chit-output-results-table-body",children:a.map((function(t){var n=t.text,e=t.value,a=t.valueClassName;(0,i.toNumber)(e);return(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:"chit-output-text",children:n}),(0,u.jsx)("td",{className:a,children:null!==e&&void 0!==e?e:o.textsChit.noValue})]},n)}))})})})]})}},40858:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});e(72791);var i=e(19297),o=e(18099),u=(e(49105),e(12002)),a=e(80184);function s(t){var n=t.deposits,e=t.onInputChange;return(0,a.jsxs)("section",{className:"deposits",children:[(0,a.jsx)("h2",{children:o.textsChit.deposits}),n.map((function(t,n){return(0,a.jsxs)("form",{className:"deposit-item",children:[[{text:o.textsChit.depositAmount,id:(0,i.toHTMLElementID)(o.textsChit.depositAmount),actionType:u.E_ChitActionType.inputDepositAmount},{text:o.textsChit.depositInterestPercent,id:(0,i.toHTMLElementID)(o.textsChit.depositInterestPercent),actionType:u.E_ChitActionType.inputDepositInterestPercent}].map((function(t){var i=t.text,o=t.id,u=t.actionType;return(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("label",{htmlFor:o,children:i}),(0,a.jsx)("input",{type:"text",id:o,onChange:function(t){e(t,u,n)}})]},o)})),(0,a.jsx)("button",{type:"button",className:"deposit-remove-button",children:"X"})]},n)}))]})}},18099:function(t,n,e){e.r(n),e.d(n,{initialState:function(){return i},textsChit:function(){return o}});var i={chitInput:{monthlyPaymentAmount:"",duration:"",noOfPaymentsSoFar:"",lastPaymentAmount:"",agencyCommissionPercent:"5",yourAuctionAmount:""},deposits:[{depositAmount:"",depositInterestPercent:""}]},o={chitStatus:"Chit Current Status",chitAuctionResult:"Chit Auction Result",deposits:"Deposits",monthlyPaymentAmount:"Monthly Payment Amount",duration:"Chit duration in months",noOfPaymentsSoFar:"No. of payments so far",lastPaymentAmount:"Last payment amount",agencyCommissionPercent:"Agency commission %",yourAuctionAmount:"Your desired auction amount",auctionedChitTotalInHand:"Total chit amount you get after auction",totalSavingsByAuction:"Total savings (including deposits interests)",diffAmountWithNormalChitTotalInHand:"How beneficial was the auction?",chitTotal:"Total chit amount",normalChitTotalInHand:"Total chit amount in hand (if not auctioned)",noOfMonthsRemaining:"Months remaining",lastAuctionAmount:"Previous auction amount",agencyCommissionAmount:"Agency commission amount",depositAmount:"Deposit Amount",depositInterestPercent:"Deposit Interest Rate %",depositInterestTotalAmount:"Total interest amount from deposits (for {months} months)",hideChitOutput:"Hide",showChitOutput:"Show Insights",noValue:"---",chitReducerError:"No matching chit action"}},86377:function(t,n,e){e.r(n),e.d(n,{calcChitAuctionResult:function(){return a},calcChitStatus:function(){return o},calcDepositInterestTotal:function(){return u}});var i=e(88134);function o(t){var n=(0,i.toNumber)(t.duration),e=(0,i.toNumber)(t.monthlyPaymentAmount),o=(0,i.toNumber)(t.noOfPaymentsSoFar),u=(0,i.toNumber)(t.agencyCommissionPercent),a=(0,i.toNumber)(t.lastPaymentAmount),s=0;n>0&&(s=e*n);var r=n-o,c=s*u/100,m=s-c,l=0;return a>0&&(l=c+(e-a)*n),{chitTotal:Math.round(s),normalChitTotalInHand:Math.round(m),noOfMonthsRemaining:Math.round(r),lastAuctionAmount:Math.round(l),agencyCommissionAmount:Math.round(c)}}function u(t,n){return t.reduce((function(t,e){return t+(0,i.toNumber)(e.depositAmount)*(0,i.toNumber)(e.depositInterestPercent)/100/12*n}),0)}function a(t,n,e){var o=n.chitTotal,u=n.normalChitTotalInHand,a=(n.agencyCommissionAmount,o-(0,i.toNumber)(t.yourAuctionAmount)),s=a+e,r=s-u;return{auctionedChitTotalInHand:Math.round(a),totalSavingsByAuction:Math.round(s),diffAmountWithNormalChitTotalInHand:Math.round(r)}}},14542:function(t,n,e){e.r(n),e.d(n,{chitReducer:function(){return r}});var i=e(4942),o=e(1413),u=e(29439),a=e(18099),s=e(12002);function r(t,n){var e=(0,u.Z)(n,2),i=e[0],r=e[1];switch(i){case s.E_ChitActionType.clearEverything:return a.initialState;case s.E_ChitActionType.inputMonthlyPaymentAmount:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{monthlyPaymentAmount:r})});case s.E_ChitActionType.inputDuration:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{duration:r})});case s.E_ChitActionType.inputNoOfPaymentsSoFar:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{noOfPaymentsSoFar:r})});case s.E_ChitActionType.inputLastPaymentAmount:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{lastPaymentAmount:r})});case s.E_ChitActionType.inputAgencyCommissionPercent:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{agencyCommissionPercent:r})});case s.E_ChitActionType.inputYourAuctionAmount:return(0,o.Z)((0,o.Z)({},t),{},{chitInput:(0,o.Z)((0,o.Z)({},t.chitInput),{},{yourAuctionAmount:r})});case s.E_ChitActionType.inputDepositAmount:var m=c(t.deposits,(0,o.Z)((0,o.Z)({},r),{},{field:"depositAmount"}));return(0,o.Z)((0,o.Z)({},t),{},{deposits:m});case s.E_ChitActionType.inputDepositInterestPercent:var l=c(t.deposits,(0,o.Z)((0,o.Z)({},r),{},{field:"depositInterestPercent"}));return(0,o.Z)((0,o.Z)({},t),{},{deposits:l});case s.E_ChitActionType.addDeposit:var h=t.deposits.concat(a.initialState.deposits[0]);return(0,o.Z)((0,o.Z)({},t),{},{deposits:h});case s.E_ChitActionType.removeDeposit:var d=t.deposits.filter((function(t,n){return n!==r}));return(0,o.Z)((0,o.Z)({},t),{},{deposits:d});default:throw new Error(a.textsChit.chitReducerError)}}function c(t,n){return t.map((function(t,e){return n.index===e?(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},n.field,n.value)):t}))}},80268:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var i=e(29439),o=e(72791),u=e(30636),a=e(40858),s=(e(49105),e(18099)),r=e(58521),c=e(14542),m=e(86377),l=e(88134),h=e(34643),d=e(80184);function p(){var t=(0,o.useReducer)(c.chitReducer,s.initialState),n=(0,i.Z)(t,2),e=n[0],p=e.chitInput,y=e.deposits,A=n[1],C=(0,m.calcChitStatus)(p),f=(0,l.toNumber)(C.noOfMonthsRemaining)-1,x=(0,m.calcDepositInterestTotal)(y,f),v=(0,m.calcChitAuctionResult)(p,C,x),T=(0,l.toNumber)(v.diffAmountWithNormalChitTotalInHand),I=(0,h.useMemoizedCSSClass)([{"text-red-500":T<0,"text-green-500":T>0}],[T]);return(0,d.jsxs)("div",{className:"chit",children:[(0,d.jsxs)("div",{className:"chit-input-container",children:[(0,d.jsx)(u.default,{values:p,onInputChange:function(t,n){var e,i=null!==(e=t.target.value)&&void 0!==e?e:"";A([n,i])}}),(0,d.jsxs)("div",{children:[(0,d.jsx)(a.default,{deposits:y,onInputChange:function(t,n,e){var i,o=null!==(i=t.target.value)&&void 0!==i?i:"";A([n,{index:e,value:o}])}}),x>0&&(0,d.jsxs)(d.Fragment,{children:[s.textsChit.depositInterestTotalAmount.replace("{months}",f.toString()),": ",x]})]})]}),(0,d.jsxs)("div",{className:"chit-output-container",children:[(0,d.jsx)(r.default,{results:[{text:s.textsChit.chitTotal,value:C.chitTotal},{text:s.textsChit.normalChitTotalInHand,value:C.normalChitTotalInHand},{text:s.textsChit.noOfMonthsRemaining,value:C.noOfMonthsRemaining},{text:s.textsChit.lastAuctionAmount,value:C.lastAuctionAmount},{text:s.textsChit.agencyCommissionAmount,value:C.agencyCommissionAmount}],title:s.textsChit.chitStatus}),(0,d.jsx)(r.default,{results:[{text:s.textsChit.auctionedChitTotalInHand,value:v.auctionedChitTotalInHand},{text:s.textsChit.totalSavingsByAuction,value:v.totalSavingsByAuction},{text:s.textsChit.diffAmountWithNormalChitTotalInHand,value:v.diffAmountWithNormalChitTotalInHand,valueClassName:I}],title:s.textsChit.chitAuctionResult})]})]})}},12002:function(t,n,e){var i;e.r(n),e.d(n,{E_ChitActionType:function(){return i}}),function(t){t[t.clearEverything=0]="clearEverything",t[t.inputMonthlyPaymentAmount=1]="inputMonthlyPaymentAmount",t[t.inputDuration=2]="inputDuration",t[t.inputNoOfPaymentsSoFar=3]="inputNoOfPaymentsSoFar",t[t.inputLastPaymentAmount=4]="inputLastPaymentAmount",t[t.inputAgencyCommissionPercent=5]="inputAgencyCommissionPercent",t[t.inputYourAuctionAmount=6]="inputYourAuctionAmount",t[t.inputDepositAmount=7]="inputDepositAmount",t[t.inputDepositInterestPercent=8]="inputDepositInterestPercent",t[t.addDeposit=9]="addDeposit",t[t.removeDeposit=10]="removeDeposit"}(i||(i={}))},88134:function(t,n,e){function i(t){return+t}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return i(i(t).toFixed(n))}e.r(n),e.d(n,{round:function(){return o},toNumber:function(){return i}})},49105:function(t,n,e){e.r(n),n.default={}}}]);
//# sourceMappingURL=268.cb2de204.chunk.js.map