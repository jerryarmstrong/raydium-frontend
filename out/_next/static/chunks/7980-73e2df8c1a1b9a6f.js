"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7980],{65436:function(e,t,n){n.d(t,{Y:function(){return i}});var l=n(3363),r=n(31166),o=n(73766),s=n(67294);function i(){let e=(0,r.ZP)(e=>e.tokenListSettings),t=(0,r.ZP)(e=>e.tokenJsonInfos),n=(0,r.ZP)(e=>e.blacklist),i=e["Raydium Token List"].mints,a=e["Solana Token List"].mints,c=e["User Added Token List"].mints,u=(0,s.useMemo)(()=>(0,o.tM)(Object.keys(t),i,a,n),[Object.keys(t).length,null==i?void 0:i.size,null==a?void 0:a.size,n.length]),d=(0,s.useMemo)(()=>(0,o.tM)(u,c),[u.size,null==c?void 0:c.size]),m=(0,s.useCallback)(e=>u.has((0,l.ZP)(e)),[u]),f=(0,s.useCallback)(e=>d.has((0,l.ZP)(e)),[d]);return{isTokenUnnamed:m,isTokenUnnamedAndNotUserCustomized:f}}},72259:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(85893),r=n(67294),o=n(66180),s=n(27993),i=n(31139),a=n(54592),c=n(32029),u=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:m,noDisableStyle:f,label:h,labelClassName:v,inputProps:x,renderInput:p,...b}=e,g=(0,r.useRef)(null);return(0,l.jsxs)(a.Z,{onClick:function(){var e,t,n,l;null===(e=g.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=g.current)||void 0===n||null===(l=n.click)||void 0===l||l.call(n)},className:(0,o.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(m&&!f?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[h&&(0,l.jsx)("div",{className:(0,o.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:h}),null!==(t=(0,s.u)(p,[g]))&&void 0!==t?t:n?(0,l.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...x,className:(0,o.m)("w-full py-1 mobile:py-1 font-medium",null==x?void 0:x.className),componentRef:(0,i.Z)(g,null==x?void 0:x.componentRef)}):(0,l.jsx)(u.Z,{noCSSInputDefaultWidth:!0,...b,...x,className:(0,o.m)("w-full py-1 mobile:py-1 font-medium",null==x?void 0:x.className),componentRef:(0,i.Z)(g,null==x?void 0:x.componentRef)})]})}},50321:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(85893),r=n(67294),o=n(37012),s=n(31139),i=n(50352),a=n(27993),c=n(99779),u=n(61247),d=n(47857),m=n(96398),f=n(54592),h=n(65286),v=n(11788);function x(e){let{observeHeight:t=!0,observeWidth:n=!1,show:o,className:s,domRef:i,children:a}=e,[c,u]=(0,r.useState)(),[m,f]=(0,r.useState)(),x=(0,h.Z)({onAttach(e){p(e)}}),{observe:p}=function(e,t){let n=(0,r.useRef)("ResizeObserver"in globalThis?new globalThis.ResizeObserver(e=>{e.forEach(e=>null==t?void 0:t({entry:e,el:e.target}))}):void 0);(0,r.useEffect)(()=>{var t;let l=(0,v.f)(e);l&&(null===(t=n.current)||void 0===t||t.observe(l))},[]);let l=(0,d.z)(e=>{var t;e&&(null===(t=n.current)||void 0===t||t.observe(e))});return{observe:l}}(x,e=>{let{el:t}=e;b(t)}),b=(0,d.z)(e=>{e&&o&&(u(e.clientHeight),f(e.clientWidth))});return(0,l.jsx)("div",{ref:i,className:s,style:{height:t?c:void 0,width:n?m:void 0},children:o&&(null==a?void 0:a(x))})}function p(e){var t;let{increaseRenderCount:n=30,initRenderCount:a=30,reachBottomMargin:h=50,renderAllAtOnce:v,domRef:x,className:b,children:g,style:y}=e,k=(0,r.useRef)(null),{observe:j,stop:Z}=function(e){let t=(0,r.useRef)(new WeakMap),n=(0,r.useRef)();(0,m.L)(()=>{var l,r;let o=new IntersectionObserver(e=>{e.forEach(e=>{let n=e.target,l=t.current.get(n);null==l||l({el:n,entry:e})})},{...e.options,root:e.rootRef.current,rootMargin:null!==(r=null===(l=e.options)||void 0===l?void 0:l.rootMargin)&&void 0!==r?r:"500px"});n.current=o},[]);let l=(0,d.z)((e,l)=>{var r;return null===(r=n.current)||void 0===r||r.observe(e),t.current.set(e,l),{abort(){var l;t.current.delete(e),null===(l=n.current)||void 0===l||l.unobserve(e)}}}),o=(0,d.z)(()=>{var e;null===(e=n.current)||void 0===e||e.disconnect()});return{observe:l,stop:o}}({rootRef:k,options:{rootMargin:"100%"}}),w=(0,r.useMemo)(()=>(0,i.lY)(g,p.Item,(e,n)=>(0,o.Z)(e,{key:null!==(t=e.key)&&void 0!==t?t:n,$isRenderByMain:!0,$observeFn:j})),[g]);(0,r.useEffect)(()=>Z,[]);let[N,C]=(0,r.useState)(v?w.length:a);return(0,u.r)(k,{onReachBottom:()=>{C(e=>e>=w.length?w.length:e+n)},reachBottomMargin:h}),(0,c.P)(e=>{let[t]=e,n=new Set(null==t?void 0:t.map(e=>null==e?void 0:e.key)),l=w.map(e=>null==e?void 0:e.key);t&&!v&&l.some(e=>!n.has(e))&&C(a)},[w,v]),(0,l.jsx)(f.Z,{domRef:(0,s.Z)(x,k),className:"List overflow-y-scroll ".concat(null!=b?b:""),style:y,children:w.slice(0,N)})}p.Item=function(e){let{$observeFn:t,$isRenderByMain:n,children:o,className:i="",style:c,domRef:u}=e;if(!n)return null;let d=(0,r.useRef)(),[m,f]=(0,r.useState)(!0),h=(0,r.useMemo)(()=>({isIntersecting:m}),[m]);return(0,r.useEffect)(()=>{d.current&&(null==t||t(d.current,e=>{let{entry:{isIntersecting:t}}=e;f(t)}))},[d]),(0,l.jsx)(x,{show:m,domRef:(0,s.Z)(u,d),className:"w-full shrink-0",children:e=>(0,l.jsx)("div",{className:"ListItem w-full flow-root ".concat(i),ref:e,style:c,children:(0,a.u)(o,[h])})})}},15144:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(85893),r=n(67294),o=n(66180),s=n(36798);function i(e){var t;let{defaultChecked:n,checked:i,disable:a,domRef:c,className:u="",thumbClassName:d="",style:m,onToggle:f}=e,[h,v]=(0,r.useState)(!!(null!=n?n:i));return(0,r.useEffect)(()=>{null!=i&&v(i)},[i]),(0,l.jsx)(s.r,{ref:c,checked:h,onChange:null!==(t=e=>{a||(v(e=>!e),null==f||f(e))})&&void 0!==t?t:()=>{},className:(0,o.m)("Switch ".concat(h?a?"bg-[#7ba4a7]":"bg-[#39D0D8]":"bg-[#1B1659]"," relative flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full ").concat(a?"cursor-not-allowed opacity-20":"cursor-pointer"," transition-all ease-in-out duration-200 focus:outline-none"),u),style:m,children:(0,l.jsx)("span",{className:"".concat(h?"left-full -translate-x-full":"left-0","\n            pointer-events-none absolute top-1/2 h-4 w-4  rounded-full ").concat(h?"bg-white":"bg-[rgba(171,196,255,0.5)]"," shadow-lg transform -translate-y-1/2 transition-all duration-200 ").concat(d)})})}},56603:function(e,t,n){n.d(t,{D:function(){return o},P:function(){return r}});let l=()=>new Date().getTime();function r(e,t){var n;let r=[],o=null,s=null,i=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400,a=()=>{var n;e(...r[r.length-1]),r.length=0,o=null,i=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400};return function(){for(var e=arguments.length,n=Array(e),c=0;c<e;c++)n[c]=arguments[c];r.push(n);let u=l();o&&(clearTimeout(o),i-=s?u-s:0),!s&&(null==t?void 0:t.invokeImmediatelyInInitual)?a():i<=0?a():o=setTimeout(a,i),s=u}}function o(e,t){let n;return function(){for(var l,r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];n&&window.clearTimeout(n);let i=window.setTimeout(()=>e(...o),null!==(l=null==t?void 0:t.delay)&&void 0!==l?l:400);n=i}}},3700:function(e,t,n){n.d(t,{K:function(){return a}});var l=n(91148),r=n(4465),o=n(17097),s=n(16938),i=n(27993);function a(e,t){var n;if(!t||!t.text)return e;let a=(0,l.Do)(e.map(e=>(function(e,t,n){let s=String(t).trim().split(/\s|-/),a=(0,l.Do)([(0,i.u)(n,[e])].flat().map(e=>(0,o.HD)(e)?{text:e}:e));return function(e){let t={item:e.item,allConfigs:e.searchConfigs,matched:!1,matchedConfigs:[]};for(let[n,l]of e.searchKeyWords.entries()){let o=!1;for(let[s,i]of e.searchConfigs.entries()){let e=i.entirely,a=(0,r.X0)(i.text,l),c=(0,r.vR)(i.text,l);(a&&e||c&&!e)&&(o=!0,t.matched=!0,t.matchedConfigs.push({config:i,configIdx:s,isEntirelyMatched:a,searchedKeywordIdx:n,searchedKeywordText:l}))}if(!o)return}return t}({item:e,searchKeyWords:s,searchConfigs:a})})(e,t.text,null!==(n=null==t?void 0:t.matchConfigs)&&void 0!==n?n:function(e){if((0,o.HD)(e)||(0,o.hj)(e))return[{text:String(e)}];if((0,o.Kn)(e)){let t=(0,s.xh)((0,s.CE)(e,["id","key"]),e=>(0,o.HD)(e)||(0,o.hj)(e)?{text:String(e)}:void 0);return(0,l.Do)(Object.values(t))}return[{text:""}]}(e)))),u=a.filter(e=>null==e?void 0:e.matched),d=[...u].sort((e,t)=>c(t)-c(e)),m=(0,l.Do)(d.map(e=>e.item));return m}function c(e){let t=e.allConfigs,n=Array.from({length:t.length},()=>0),l=Array.from({length:t.length},()=>0);e.matchedConfigs.forEach(e=>{let{configIdx:t,isEntirelyMatched:r}=e;r?n[t]=2:l[t]=1});let r=e=>{let t=Math.max(...e);return e.reduce((n,l,r)=>n+l*(t+1)**(e.length-r),0)},o=r([r(n),r(l)]);return o}},61247:function(e,t,n){n.d(t,{r:function(){return o}});var l=n(67294),r=n(47857);function o(e,t){let n=(0,l.useRef)(!1),o=(0,r.z)(()=>{var l,r;if(!e.current)return;let{scrollHeight:o,scrollTop:s,clientHeight:i}=e.current,a=s+i+(null!==(l=null==t?void 0:t.reachBottomMargin)&&void 0!==l?l:0)>=o;a&&!n.current&&(null==t||null===(r=t.onReachBottom)||void 0===r||r.call(t),n.current=!0),!a&&n.current&&(n.current=!1)});(0,l.useEffect)(()=>{var t;return o(),null===(t=e.current)||void 0===t||t.addEventListener("scroll",o,{passive:!0}),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.removeEventListener("scroll",o)}},[e])}},87980:function(e,t,n){n.d(t,{Z:function(){return O}});var l=n(85893),r=n(67294),o=n(91371),s=n(94355),i=n(18559),a=n(42186),c=n(31166),u=n(25647),d=n(65436),m=n(80582),f=n(53002),h=n(99522),v=n(43067),x=n(6994),p=n(70745),b=n(54592),g=n(48162),y=n(40471),k=n(82727),j=n(72259),Z=n(50321),w=n(31139),N=n(99779);function C(e){let{increaseRenderCount:t=30,initRenderCount:n=30,reachBottomMargin:o=50,renderAllAtOnce:s,sourceData:i,renderItem:a,getKey:c,domRef:u,className:d,style:m}=e,[f,h]=(0,r.useState)(s?i.length:n),v=(0,r.useRef)(null);return!function(e,t){let n=(0,r.useRef)(!1),l=(0,r.useCallback)(()=>{var l,r;if(!e.current)return;let{scrollHeight:o,scrollTop:s,clientHeight:i}=e.current,a=s+i+(null!==(l=null==t?void 0:t.reachBottomMargin)&&void 0!==l?l:0)>=o;a&&!n.current&&(null==t||null===(r=t.onReachBottom)||void 0===r||r.call(t),n.current=!0),!a&&n.current&&(n.current=!1)},[e,t]);(0,r.useEffect)(()=>{var t;return l(),null===(t=e.current)||void 0===t||t.addEventListener("scroll",l,{passive:!0}),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.removeEventListener("scroll",l)}},[e,l])}(v,{onReachBottom:()=>{h(e=>e>=i.length?i.length:e+t)},reachBottomMargin:o}),(0,N.P)(e=>{let[t]=e,l=new Set(null==t?void 0:t.map(c)),r=i.map(c);t&&!s&&r.some(e=>!l.has(e))&&h(n)},[i,s]),(0,l.jsx)(b.Z,{domRef:(0,w.Z)(u,v),className:"List overflow-y-scroll ".concat(null!=d?d:""),style:{...m,contentVisibility:"auto"},children:i.slice(0,f).map((e,t)=>(0,l.jsx)(r.Fragment,{children:a(e,t)},c(e,t)))})}var S=n(6325),P=n(51800),T=n(15144),R=n(56603),E=n(3363),A=n(4465),L=n(72573),F=n(3700),D=n(27993),M=n(26842),I=n(47857),z=n(92224),B=n(14200),U=n(11601);function O(e){return(0,l.jsx)(S.Z,{maskNoBlur:!0,transitionSpeed:"fast",placement:"from-top",open:e.open,onClose:e.onClose,children:t=>{let{close:n}=t;return(0,l.jsx)(W,{...e,onClose:n})}})}function W(e){var t;let{open:n,onClose:h,onSelectToken:y,enableTokens:w,turnOnTokenVerification:N,disableTokens:S,canSelectQuantumSOL:T,canSelectIfInWhiteList:L}=e,B=(0,c.ZP)(e=>e.tokenListSettings),U=(0,c.ZP)(e=>e.getToken),O=(0,o.ZP)(e=>e.isMobile),W=(0,f.Z)(e=>e.balances),[H,Y]=(0,r.useState)(""),_=(0,R.P)(s.Z.getState().logWarning),[V,{off:q,on:G}]=(0,z.ZP)(),X=(0,I.z)(()=>{Y(""),null==h||h()}),J=(0,I.z)(async e=>{var t;let n=null===(t=B["Raydium Token List"].mints)||void 0===t?void 0:t.has((0,E.ZP)(e.mint)),l=!N||!!n||await (0,i.WX)(e.mint,{canWhiteList:L});l?(null==y||y(e),setTimeout(()=>{X()},200)):X()});function Q(e){return w?!w.some(t=>t.mint.equals(e.mint)):!!S&&S.some(t=>T&&(0,a.$F)(t)?!!((0,a.Dn)(t)&&(0,a.Dn)(e)||(0,a.Ee)(t)&&(0,a.Ee)(e)):(0,A.aT)(t,e))}let ee=(0,c.ZP)(e=>e.allSelectableTokens),et=w||ee,en=(null==S?void 0:S.length)?et.filter(e=>!Q(e)):et,{isTokenUnnamedAndNotUserCustomized:el}=(0,d.Y)(),er=(0,r.useMemo)(()=>(0,F.K)(en,{text:H,matchConfigs:e=>[{text:e.id,entirely:!0},{text:(0,E.ZP)(null==e?void 0:e.mint),entirely:!0},el(e.mint)?void 0:e.symbol,el(e.mint)?void 0:e.name]}),[H,en,W]),eo=(0,r.useDeferredValue)(er),es=eo.length>0,ei=function(e,t,n){let[l,o]=(0,r.useState)(t),s=(0,r.useRef)(0);return(0,M.Z)(async()=>{let t=s.current;s.current=t+1;let n=await (0,D.u)(e),l=s.current-1===t;l&&void 0!==n&&o(n)},null!=n?n:[]),l}(!es&&H?(0,i.U7)(H):void 0,void 0,[H,es]),[ea,ec]=(0,r.useState)(0),[eu,ed]=(0,r.useState)({symbol:"",name:""}),em=(0,r.useMemo)(()=>(0,l.jsx)(C,{className:"flex-grow flex flex-col px-4 mobile:px-2 mx-2 gap-2 overflow-auto my-2",sourceData:eo,getKey:(e,n)=>null!==(t=(0,a.$F)(e)?e.symbol:(0,E.ZP)(null==e?void 0:e.mint))&&void 0!==t?t:n,renderItem:(e,t)=>(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{className:"".concat(ea===t?"clickable no-clicable-transform-effect clickable-mask-offset-2 before:bg-[rgba(0,0,0,0.2)]":""),onHoverChange:e=>{let{is:n}=e;"start"===n&&ec(t)},children:(0,l.jsx)(K,{onClick:()=>{J(e)},token:e})})})}),[eo,ea,ec]),ef=(0,f.Z)(e=>e.connected),eh=e=>{if(!e.symbol)return;let{addUserAddedToken:t}=c.ZP.getState(),n=null==ei?void 0:ei.decimals,l=!!(null==ei?void 0:ei.freezeAuthority);if(!ei||void 0===n){_("the mint address is invalid");return}let r=(0,u.LP)({mint:H,symbol:e.symbol.slice(0,8),decimals:n,icon:"",extensions:{},name:e.name?e.name.slice(0,16):e.symbol.slice(0,8),userAdded:!0,hasFreeze:l,isToken2022:ei.is2022Token});t(r)};return(0,l.jsx)(x.Z,{className:"flex flex-col rounded-3xl mobile:rounded-none w-[min(468px,100vw)] mobile:w-full h-[min(680px,100vh)] mobile:h-screen border-1.5 border-[rgba(99,130,202,0.2)] bg-cyberpunk-card-bg shadow-cyberpunk-card",size:"lg",htmlProps:{onKeyDown:e=>{"ArrowUp"===e.key?ec(e=>Math.max(e-1,0)):"ArrowDown"===e.key?ec(e=>Math.min(e+1,eo.length-1)):"Enter"===e.key&&J(eo[ea])}},children:V?(0,l.jsxs)("div",{className:"px-8 mobile:px-6 pt-6 pb-5",children:[(0,l.jsxs)(P.Z,{className:"justify-between items-center mb-6",children:[(0,l.jsx)(g.Z,{className:"text-[#ABC4FF] cursor-pointer clickable clickable-mask-offset-2",heroIconName:"chevron-left",onClick:q}),(0,l.jsx)("div",{className:"text-xl font-semibold text-white",children:"Token List Settings"}),(0,l.jsx)("div",{})]}),(0,l.jsx)(Z.Z,{className:"p-2 grid mt-2 overflow-auto max-h-[70vh]",children:Object.entries(B).map(e=>{let[t]=e;return t}).map(e=>(0,l.jsx)(Z.Z.Item,{children:(0,l.jsx)($,{tokenListName:e})},e))})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"px-8 mobile:px-6 pt-6 pb-5",children:[(0,l.jsxs)(P.Z,{className:"justify-between items-center mb-6",children:[(0,l.jsx)("div",{className:"text-xl font-semibold text-white",children:"Select a token"}),(0,l.jsx)(g.Z,{className:"text-[#ABC4FF] cursor-pointer clickable clickable-mask-offset-2",heroIconName:"x",onClick:X})]}),(0,l.jsx)(k.Z,{value:H,placeholder:"Search name or mint address",onUserInput:e=>{Y(e),ec(0)},className:"py-3 px-4 rounded-xl bg-[#141041]",inputClassName:"placeholder-[rgba(196,214,255,0.5)] text-sm text-[#ABC4FF]",labelText:"input for searching coins",suffix:(0,l.jsx)(g.Z,{heroIconName:"search",size:"sm",className:"text-[#C4D6FF]"})}),(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,.5)] my-3",children:"Popular tokens"}),(0,l.jsx)(P.Z,{className:"justify-between",children:[m.PD,a.aF,m.q3,m.LA].map((e,t)=>{var n;let r=(0,a.$F)(e)?a.aF:U(e);return(0,l.jsxs)(P.Z,{className:"gap-1 py-1 px-2 mobile:py-1.5 mobile:px-2.5 rounded ring-1 ring-inset ring-[rgba(171,196,255,.3)] items-center flex-wrap ".concat((null==r?void 0:r.mint)&&Q(r)?"not-clickable":"clickable clickable-filter-effect"),onClick:()=>{!(r&&Q(r))&&r&&J(r)},children:[(0,l.jsx)(p.Z,{size:O?"xs":"sm",token:r}),(0,l.jsx)("div",{className:"text-base mobile:text-sm font-normal text-[#ABC4FF]",children:null!==(n=null==r?void 0:r.symbol)&&void 0!==n?n:"--"})]},(0,E.ZP)((0,a.$F)(e)?e.mint:e))})})]}),(0,l.jsx)("div",{className:"mobile:mx-6 border-t-1.5 border-[rgba(171,196,255,0.2)]"}),(0,l.jsxs)(b.Z,{className:"flex-1 overflow-hidden border-b-1.5 py-3 border-[rgba(171,196,255,0.2)]",children:[(0,l.jsxs)(P.Z,{className:"px-8 mobile:px-6 justify-between",children:[(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,.5)]",children:"Token"}),(0,l.jsx)(P.Z,{className:"text-xs font-medium text-[rgba(171,196,255,.5)] items-center gap-1",children:"Balance / Address"})]}),es?em:ei&&(0,E.ZP)(a.DA)!==H?(0,l.jsxs)(b.Z,{className:"p-8  gap-4",children:[(0,l.jsx)(j.Z,{label:"input a symbol for this token",onUserInput:e=>{ed(t=>({...t,symbol:e}))}}),(0,l.jsx)(j.Z,{label:"input a name for this token (optional)",onUserInput:e=>{ed(t=>({...t,name:e}))}}),(0,l.jsx)(v.Z,{className:"frosted-glass-teal",onClick:()=>{eh(eu)},validators:[{should:ef,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:eu.symbol}],children:"Add User Token"})]}):null]}),(0,l.jsx)(v.Z,{type:"text",className:"w-full py-4 rounded-none font-bold text-xs text-[#ABC4FF]",onClick:G,children:"View Token List"})]})})}function K(e){var t;let{token:n,onClick:s}=e;(0,c.ZP)(e=>e.userFlaggedTokenMints);let i=(0,c.ZP)(e=>e.canFlaggedTokenMints),a=(0,c.ZP)(e=>e.userAddedTokens),u=(0,c.ZP)(e=>e.tokens),d=!!(a[(0,E.ZP)(n.mint)]&&!u[(0,E.ZP)(n.mint)]);(0,c.ZP)(e=>e.toggleFlaggedToken);let m=(0,c.ZP)(e=>e.deleteUserAddedToken),x=(0,c.ZP)(e=>e.editUserAddedToken),y=(0,f.Z)(e=>e.getBalance),k=(0,f.Z)(e=>e.connected),[Z,w]=(0,r.useState)(!1),[N,C]=(0,r.useState)({symbol:n.symbol||"",name:n.name||""}),S=y(n);return(0,l.jsxs)("div",{className:"group w-full",children:[(0,l.jsxs)(P.Z,{onClick:s,className:"group w-full gap-4 justify-between items-center p-2",children:[(0,l.jsxs)(P.Z,{children:[(0,l.jsx)(p.Z,{token:n,className:"mr-2"}),(0,l.jsxs)(b.Z,{className:"mr-2",children:[(0,l.jsxs)(P.Z,{children:[(0,l.jsxs)(P.Z,{className:"items-center gap-1",children:[(0,l.jsx)("div",{className:"text-base  max-w-[7em] overflow-hidden text-ellipsis  font-normal text-[#ABC4FF]",children:n.symbol}),(0,B.W)(n)&&(0,l.jsx)(U.I,{pale:!0})]}),d&&!i.has((0,E.ZP)(n.mint))?(0,l.jsxs)(P.Z,{onClick:e=>{m(n.mint),e.stopPropagation()},className:"group-hover:flex hidden items-center text-sm mobile:text-xs text-[rgba(57,208,216,1)] font-medium flex-nowrap px-2 gap-1",children:[(0,l.jsx)(g.Z,{className:"w-4 h-4",iconClassName:"w-4 h-4",iconSrc:"/icons/delete-token.svg"}),(0,l.jsx)("div",{className:"whitespace-nowrap",children:"Delete Token"})]}):null]}),(0,l.jsx)("div",{className:"text-xs  max-w-[12em] overflow-hidden text-ellipsis whitespace-nowrap  font-medium text-[rgba(171,196,255,.5)]",children:n.name})]})]}),(0,l.jsxs)(b.Z,{className:"self-stretch items-end",children:[S&&(0,l.jsx)("div",{className:"grow  text-sm text-[#ABC4FF] justify-self-end",children:(0,L.B)(null==S?void 0:null===(t=S.toExact)||void 0===t?void 0:t.call(S),{decimalLength:"auto 2"})}),(0,l.jsx)(h.U,{className:"grow",showDigitCount:5,addressType:"token",showCopyIcon:!1,canExternalLink:!0,iconSize:"sm",textClassName:"flex leading-[normal] text-2xs self-center px-1.5 py-0.5 border border-[#abc4ff] rounded-sm text-[#abc4ff] justify-center",iconClassName:"text-[#abc4ff]",iconRowClassName:"ml-1.5 gap-0.5",children:(0,E.ZP)(n.mint)})]})]}),Z&&(0,l.jsxs)(b.Z,{className:"p-1  gap-4",children:[(0,l.jsx)(j.Z,{value:N.symbol,label:"input a symbol for this token",onUserInput:e=>{C(t=>({...t,symbol:e}))}}),(0,l.jsx)(j.Z,{value:N.name,label:"input a name for this token (optional)",onUserInput:e=>{C(t=>({...t,name:e}))}}),(0,l.jsx)(v.Z,{className:"frosted-glass-teal",onClick:()=>{x(N,n.mint),w(!1)},validators:[{should:k,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:N.symbol}],children:"Confirm"})]})]})}function $(e){var t,n,r;let{tokenListName:o}=e,s=(0,c.ZP)(e=>e.tokenListSettings),i=s[o],a=s[o].isOn,u=s[o].disableUserConfig,d=()=>{c.ZP.setState(e=>({tokenListSettings:{...e.tokenListSettings,[o]:{...e.tokenListSettings[o],isOn:!e.tokenListSettings[o].isOn}}}))};return(null===(t=i.mints)||void 0===t?void 0:t.size)&&!i.cannotbBeSeen?(0,l.jsxs)(P.Z,{className:"my-4 items-center",children:[(null==i?void 0:i.icon)&&(0,l.jsx)(y.Z,{className:"rounded-full h-8 w-8 overflow-hidden",src:i.icon}),(0,l.jsxs)(b.Z,{children:[(0,l.jsx)("div",{className:"text-base font-normal text-[#ABC4FF]",children:o}),i&&(0,l.jsxs)("div",{className:"text-sm font-medium text-[rgba(171,196,255,.5)]",children:[null!==(r=null===(n=i.mints)||void 0===n?void 0:n.size)&&void 0!==r?r:"--"," tokens"]})]}),(0,l.jsx)(T.Z,{disable:u,className:"ml-auto",defaultChecked:a,onToggle:d})]}):null}},95389:function(e,t,n){n.d(t,{_:function(){return d},b:function(){return u}});var l=n(67294),r=n(19946),o=n(12351),s=n(16723),i=n(23784),a=n(73781);let c=(0,l.createContext)(null);function u(){let[e,t]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)(()=>function(e){let n=(0,a.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),l=n.indexOf(e);return -1!==l&&n.splice(l,1),n}))),r=(0,l.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return l.createElement(c.Provider,{value:r},e.children)},[t])]}let d=(0,o.yV)(function(e,t){let n=(0,r.M)(),{id:a=`headlessui-label-${n}`,passive:u=!1,...d}=e,m=function e(){let t=(0,l.useContext)(c);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,i.T)(t);(0,s.e)(()=>m.register(a),[a,m.register]);let h={ref:f,...m.props,id:a};return u&&("onClick"in h&&delete h.onClick,"onClick"in d&&delete d.onClick),(0,o.sY)({ourProps:h,theirProps:d,slot:m.slot||{},defaultTag:"label",name:m.name||"Label"})})},36798:function(e,t,n){n.d(t,{r:function(){return y}});var l=n(67294),r=n(12351),o=n(19946),s=n(61363),i=n(64103),a=n(95389),c=n(39516),u=n(16723);function d(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var m=n(23784),f=n(46045),h=n(18689),v=n(73781),x=n(31147),p=n(94192);let b=(0,l.createContext)(null);b.displayName="GroupContext";let g=l.Fragment,y=Object.assign((0,r.yV)(function(e,t){let n=(0,o.M)(),{id:a=`headlessui-switch-${n}`,checked:c,defaultChecked:g=!1,onChange:y,name:k,value:j,...Z}=e,w=(0,l.useContext)(b),N=(0,l.useRef)(null),C=(0,m.T)(N,t,null===w?null:w.setSwitch),[S,P]=(0,x.q)(c,y,g),T=(0,v.z)(()=>null==P?void 0:P(!S)),R=(0,v.z)(e=>{if((0,i.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),T()}),E=(0,v.z)(e=>{e.key===s.R.Space?(e.preventDefault(),T()):e.key===s.R.Enter&&(0,h.g)(e.currentTarget)}),A=(0,v.z)(e=>e.preventDefault()),L=(0,l.useMemo)(()=>({checked:S}),[S]),F={id:a,ref:C,role:"switch",type:function(e,t){let[n,r]=(0,l.useState)(()=>d(e));return(0,u.e)(()=>{r(d(e))},[e.type,e.as]),(0,u.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,N),tabIndex:0,"aria-checked":S,"aria-labelledby":null==w?void 0:w.labelledby,"aria-describedby":null==w?void 0:w.describedby,onClick:R,onKeyUp:E,onKeyPress:A},D=(0,p.G)();return(0,l.useEffect)(()=>{var e;let t=null==(e=N.current)?void 0:e.closest("form");t&&void 0!==g&&D.addEventListener(t,"reset",()=>{P(g)})},[N,P]),l.createElement(l.Fragment,null,null!=k&&S&&l.createElement(f._,{features:f.A.Hidden,...(0,r.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:S,name:k,value:j})}),(0,r.sY)({ourProps:F,theirProps:Z,slot:L,defaultTag:"button",name:"Switch"}))}),{Group:function(e){let[t,n]=(0,l.useState)(null),[o,s]=(0,a.b)(),[i,u]=(0,c.f)(),d=(0,l.useMemo)(()=>({switch:t,setSwitch:n,labelledby:o,describedby:i}),[t,n,o,i]);return l.createElement(u,{name:"Switch.Description"},l.createElement(s,{name:"Switch.Label",props:{onClick(){t&&(t.click(),t.focus({preventScroll:!0}))}}},l.createElement(b.Provider,{value:d},(0,r.sY)({ourProps:{},theirProps:e,defaultTag:g,name:"Switch.Group"}))))},Label:a._,Description:c.d})},31147:function(e,t,n){n.d(t,{q:function(){return o}});var l=n(67294),r=n(73781);function o(e,t,n){let[o,s]=(0,l.useState)(n),i=void 0!==e,a=(0,l.useRef)(i),c=(0,l.useRef)(!1),u=(0,l.useRef)(!1);return!i||a.current||c.current?i||!a.current||u.current||(u.current=!0,a.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,a.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:o,(0,r.z)(e=>(i||s(e),null==t?void 0:t(e)))]}},18689:function(e,t,n){function l(e,t){return e?e+"["+t+"]":t}function r(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let e of n.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type){e.click();return}}}n.d(t,{g:function(){return r},t:function(){return function e(t={},n=null,r=[]){for(let[o,s]of Object.entries(t))!function t(n,r,o){if(Array.isArray(o))for(let[e,s]of o.entries())t(n,l(r,e.toString()),s);else o instanceof Date?n.push([r,o.toISOString()]):"boolean"==typeof o?n.push([r,o?"1":"0"]):"string"==typeof o?n.push([r,o]):"number"==typeof o?n.push([r,`${o}`]):null==o?n.push([r,""]):e(o,r,n)}(r,l(n,o),s);return r}}})}}]);