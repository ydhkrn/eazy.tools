"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[1646,9927],{69927:function(e,n,t){function r(e){return+e}function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r(r(e).toFixed(n))}t.r(n),t.d(n,{toNumber:function(){return r},round:function(){return o}})},81646:function(e,n,t){t.r(n),t.d(n,{sanitizeNumericInput:function(){return u},getDefaultFavorites:function(){return i},calcValueForFavorites:function(){return a},calcValue:function(){return c}});var r=t(1413),o=t(69927);function u(e){return e.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1").replace(/^(\.)$/,"0.").replace(/^0(\d)/,"$1")}function i(e){return e.map((function(e){return{code:e,value:""}}))}function a(e){var n=e.favorites,t=e.conversionRates,o=e.conversionFormulas,u=e.inputCode,i=e.inputValue;return n.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{value:c({conversionRates:t,conversionFormulas:o,inputCode:u,targetCode:e.code,inputValue:i})})}))}function c(e){var n=e.conversionRates,t=e.conversionFormulas,r=e.inputCode,u=e.targetCode,i=e.inputValue;return t?function(e){var n=e.conversionFormulas,t=e.inputCode,r=e.targetCode,o=e.inputValue,u=0;if(t===n.baseUnitCode)return n.fromBaseTo[r](o);return u=n.toBaseFrom[t](o),r===n.baseUnitCode?u:n.fromBaseTo[r](u)}({conversionFormulas:t,inputCode:r,targetCode:u,inputValue:i}):n?function(e){var n=e.conversionRates,t=e.inputCode,r=e.targetCode,u=e.inputValue,i=(0,o.toNumber)(u),a=n[t],c=n[r];return(0,o.round)(c*i/a)}({conversionRates:n,inputCode:r,targetCode:u,inputValue:i}):i}}}]);
//# sourceMappingURL=1646.465ee403.chunk.js.map