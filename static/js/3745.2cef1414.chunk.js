"use strict";(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[3745],{83745:(t,e,s)=>{function o(t){try{const e=window[t],s="__storage_test__";return e.setItem(s,"1"),e.removeItem(s),!0}catch(e){return!1}}s.r(e),s.d(e,{LocalStorage:()=>a,MemoryStorage:()=>r,SessionStorage:()=>n,isStorageSupported:()=>o});class r{constructor(){this.storage={},this.setItem=(t,e)=>{const s=e&&e.toString()||"";this.storage[t]=s},this.getItem=t=>this.storage[t]||"",this.removeItem=t=>{delete this.storage[t]},this.clear=()=>{this.storage=(new r).storage}}}const a=o("localStorage")?window.localStorage:new r,n=o("sessionStorage")?window.sessionStorage:new r}}]);
//# sourceMappingURL=3745.2cef1414.chunk.js.map