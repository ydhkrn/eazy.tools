(self.webpackChunkeazy_tools_dev=self.webpackChunkeazy_tools_dev||[]).push([[2877,6449],{77489:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var l=t(65043),n=t(37780),s=t.n(n),c=t(323),u=t.n(c),o=(t(6449),t(70579));const a=function(){var e,r;const t=(0,l.useRef)(null),n=(0,l.useRef)(null),c=(0,l.useRef)(null),a=(0,l.useRef)({isEncryptError:!1,isDecryptError:!1}),[,i]=(0,l.useState)(""),[,d]=(0,l.useState)("");return(0,o.jsxs)("div",{className:"Crypto",children:[(0,o.jsx)("h1",{className:"font-bold text-xl py-4",children:"AES (CBC w/o PBKDF2)"}),(0,o.jsx)("input",{autoFocus:!0,placeholder:"Secret Key \ud83d\udddd",className:"keyInput",type:"text",ref:t}),(0,o.jsxs)("form",{className:"form",children:[(0,o.jsx)("textarea",{ref:n,className:"textInput "+(null!==(e=a.current)&&void 0!==e&&e.isEncryptError?"bg-red-200":""),placeholder:"Plain text"}),(0,o.jsxs)("div",{className:"flex space-x-5 flex-nowrap sm:space-x-0 sm:flex-col sm:flex-wrap",children:[(0,o.jsx)("button",{onClick:()=>{let e;try{var r,l,u,o;e=s().encrypt(null!==(r=null===(l=n.current)||void 0===l?void 0:l.value)&&void 0!==r?r:"",null!==(u=null===(o=t.current)||void 0===o?void 0:o.value)&&void 0!==u?u:"").toString(),a.current.isEncryptError=!1}catch(v){var d;a.current.isEncryptError=!0,e=`ERROR::${null!==(d=null===v||void 0===v?void 0:v.message)&&void 0!==d?d:"Failed to encrypt"}`}c.current.value=e,i(e)},type:"button",className:"btn",children:"Encrypt"}),(0,o.jsx)("button",{onClick:()=>{let e;try{var r,l,o,i;e=s().decrypt(null!==(r=null===(l=c.current)||void 0===l?void 0:l.value)&&void 0!==r?r:"",null!==(o=null===(i=t.current)||void 0===i?void 0:i.value)&&void 0!==o?o:"").toString(u()),a.current.isDecryptError=!1}catch(p){var v;a.current.isDecryptError=!0,e=`ERROR::${null!==(v=null===p||void 0===p?void 0:p.message)&&void 0!==v?v:"Failed to decrypt"}`}n.current.value=e,d(e)},type:"button",className:"btn",children:"Decrypt"})]}),(0,o.jsx)("textarea",{ref:c,className:"textInput "+(null!==(r=a.current)&&void 0!==r&&r.isDecryptError?"bg-red-200":""),placeholder:"Encrypted text"})]})]})}},6449:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});const l={}},50477:()=>{}}]);
//# sourceMappingURL=2877.088ca00e.chunk.js.map