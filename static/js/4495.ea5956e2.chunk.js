"use strict";(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[4495,1459],{84495:(e,t,o)=>{o.r(t),o.d(t,{calcValue:()=>i,calcValueForFavorites:()=>a,getDefaultFavorites:()=>u,sanitizeNumericInput:()=>r});var n=o(51459);function r(e){return e.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1").replace(/^(\.)$/,"0.").replace(/^0(\d)/,"$1")}function u(e){return e.map((e=>({code:e,value:""})))}function a(e){let{favorites:t,conversionRates:o,conversionFormulas:n,inputCode:r,inputValue:u}=e;return t.map((e=>({...e,value:i({conversionRates:o,conversionFormulas:n,inputCode:r,targetCode:e.code,inputValue:u})})))}function i(e){let{conversionRates:t,conversionFormulas:o,inputCode:r,targetCode:u,inputValue:a}=e;return o?function(e){let{conversionFormulas:t,inputCode:o,targetCode:n,inputValue:r}=e,u=0;if(o===t.baseUnitCode)return t.fromBaseTo[n](r);return u=t.toBaseFrom[o](r),n===t.baseUnitCode?u:t.fromBaseTo[n](u)}({conversionFormulas:o,inputCode:r,targetCode:u,inputValue:a}):t?function(e){let{conversionRates:t,inputCode:o,targetCode:r,inputValue:u}=e;const a=(0,n.toNumber)(u),i=t[o],s=t[r];return(0,n.round)(s*a/i)}({conversionRates:t,inputCode:r,targetCode:u,inputValue:a}):a}},51459:(e,t,o)=>{function n(e){return+e}function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return n(n(e).toFixed(t))}o.r(t),o.d(t,{round:()=>r,toNumber:()=>n})}}]);
//# sourceMappingURL=4495.ea5956e2.chunk.js.map