"use strict";(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[260,1459],{20260:(t,n,o)=>{o.r(n),o.d(n,{calcChitAuctionResult:()=>r,calcChitStatus:()=>u,calcDepositInterestTotal:()=>a});var e=o(51459);function u(t){const n=(0,e.toNumber)(t.duration),o=(0,e.toNumber)(t.monthlyPaymentAmount),u=(0,e.toNumber)(t.noOfPaymentsSoFar),a=(0,e.toNumber)(t.agencyCommissionPercent),r=(0,e.toNumber)(t.lastPaymentAmount);let i=0;n>0&&(i=o*n);const m=n-u,c=i*a/100,s=i-c;let l=0;return r>0&&(l=c+(o-r)*n),{chitTotal:Math.round(i),normalChitTotalInHand:Math.round(s),noOfMonthsRemaining:Math.round(m),lastAuctionAmount:Math.round(l),agencyCommissionAmount:Math.round(c)}}function a(t,n){return t.reduce(((t,o)=>t+(0,e.toNumber)(o.depositAmount)*(0,e.toNumber)(o.depositInterestPercent)/100/12*n),0)}function r(t,n,o){let{chitTotal:u,normalChitTotalInHand:a,agencyCommissionAmount:r}=n;const i=u-(0,e.toNumber)(t.yourAuctionAmount),m=i+o,c=m-a;return{auctionedChitTotalInHand:Math.round(i),totalSavingsByAuction:Math.round(m),diffAmountWithNormalChitTotalInHand:Math.round(c)}}},51459:(t,n,o)=>{function e(t){return+t}function u(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e(e(t).toFixed(n))}o.r(n),o.d(n,{round:()=>u,toNumber:()=>e})}}]);
//# sourceMappingURL=260.90caae18.chunk.js.map