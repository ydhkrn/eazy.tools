"use strict";(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[6406],{26406:(t,e,n)=>{n.r(e),n.d(e,{getCompensatoryTranslationForZoom:()=>o,getElementRectMidPoint:()=>c,getElementTitleFromPoint:()=>l,getPointFromEvent:()=>r,getWidthRatio:()=>u});var i=n(1192);function o(t,e){return{x:-t.x*(e-1)/e,y:-t.y*(e-1)/e}}function r(t){const e={x:0,y:0};return(0,i.isTouchEvent)(t)?(e.x=t.targetTouches[0].clientX,e.y=t.targetTouches[0].clientY):(e.x=t.clientX,e.y=t.clientY),e}function c(t){if(t.current)return{x:t.current.getBoundingClientRect().width/2,y:t.current.getBoundingClientRect().height/2}}function u(t,e){if(e.current)return t.width/e.current.getBoundingClientRect().width}function l(t){const e=document.elementFromPoint(t.x,t.y);if(e){var n;const t=e.dataset||e;return null!==(n=t.title)&&void 0!==n?n:t.id}return""}}}]);
//# sourceMappingURL=6406.83370bed.chunk.js.map