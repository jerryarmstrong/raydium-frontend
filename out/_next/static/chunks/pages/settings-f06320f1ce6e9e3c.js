(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{52837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(37702)}])},32029:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85893),l=n(67294),i=n(17097),a=n(51523),o=n(72573),u=n(31139),c=n(96398),s=n(62361),d=n(48162),m=n(82727);function p(e){let{defaultValue:t,value:n,decimalCount:p=6,showArrowControls:f,showPlusMinusControls:v,minN:g=0,maxN:x,step:b=Number((1/10**Math.floor(p)).toFixed(p)),onInvalid:h,canNegative:N,onValid:y,skipAutoIncrease:R,skipAutoDecrease:E,increaseFn:k,decreaseFn:j,prefix:C,prefixClassName:S,suffix:w,valueToStringOptions:Z,...T}=e,[P,O,I]=(0,s.$)(t);(0,c.L)(()=>{O(n)},[n]);let A={canNegativeLetter:/^[0-9-,.]$/,canNegativeRegexpString:"^[0-9-]*[.,]?[0-9]{0,".concat(p,"}$"),decimalRegexpString:"^[0-9]*[.,]?[0-9]{0,".concat(p,"}$"),decimalLetter:/^[0-9,.]$/},F=(0,l.useRef)();(0,l.useEffect)(()=>{var e;let t=N?A.canNegativeLetter:A.decimalLetter,n=e=>{let n=e.key,r=n.length>1||t.test(n),l=e.ctrlKey||e.altKey;r||l||e.preventDefault()};return null===(e=F.current)||void 0===e||e.addEventListener("keydown",n,{capture:!0,passive:!1}),()=>{var e;null===(e=F.current)||void 0===e||e.removeEventListener("keydown",n,{capture:!0})}},[]);let _=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user-input";if((0,i.ve)(e)){var n;O(e),null===(n=T.onUserInput)||void 0===n||n.call(T,e,{canSafelyCovertToNumber:Number(e)<Number.MAX_SAFE_INTEGER&&Number(e)>Number.MIN_SAFE_INTEGER,triggerBy:t})}},L=e=>{var t;let n=F.current;if(!n)return;null===(t=T.onDangerousValueChange)||void 0===t||t.call(T,e,n);let r=n.checkValidity();r&&(null==y||y()),r||null==h||h()},D=()=>{var e;let t=null!==(e=null==k?void 0:k((0,o.B)(I())))&&void 0!==e?e:(0,a.IH)((0,o.B)(I()),b),n=(0,a.uZ)(g,t,x),r=(0,o.B)(n);_(r,"increase-decrease"),L(r)},M=()=>{var e;let t=null!==(e=null==j?void 0:j((0,o.B)(I())))&&void 0!==e?e:(0,a.h9)((0,o.B)(I()),b),n=(0,a.uZ)(g,t,x),r=(0,o.B)(n);_(r,"increase-decrease"),L(r)};return(0,r.jsx)(m.Z,{inputMode:"decimal",inputHTMLProps:{pattern:N?A.canNegativeRegexpString:A.decimalRegexpString,inputMode:"decimal",min:String(g),max:x?String(x):void 0,step:b},...T,inputDomRef:(0,u.Z)(F,T.inputDomRef),pattern:new RegExp(N?A.canNegativeRegexpString:A.decimalRegexpString),value:P?(0,o.B)(P,Z):"",defaultValue:(0,o.B)(t,Z),onUserInput:e=>{_(e)},onDangerousValueChange:e=>{L(e)},prefix:C||(v?(0,r.jsx)(d.Z,{className:"text-light-blue clickable",heroIconName:"minus",size:"xs",onClick:M}):void 0),prefixClassName:S||"",suffix:w||(f?(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{className:"opacity-50 hover:opacity-100 clickable",heroIconName:"chevron-up",size:"xs",onClick:D,canLongClick:!0}),(0,r.jsx)(d.Z,{className:"opacity-50 hover:opacity-100 clickable",heroIconName:"chevron-down",size:"xs",onClick:M,canLongClick:!0})]}):v?(0,r.jsx)(d.Z,{className:"text-light-blue clickable",heroIconName:"plus",size:"xs",onClick:D}):void 0)})}},72259:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(85893),l=n(67294),i=n(66180),a=n(27993),o=n(31139),u=n(54592),c=n(32029),s=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:m,noDisableStyle:p,label:f,labelClassName:v,inputProps:g,renderInput:x,...b}=e,h=(0,l.useRef)(null);return(0,r.jsxs)(u.Z,{onClick:function(){var e,t,n,r;null===(e=h.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=h.current)||void 0===n||null===(r=n.click)||void 0===r||r.call(n)},className:(0,i.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(m&&!p?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[f&&(0,r.jsx)("div",{className:(0,i.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:f}),null!==(t=(0,a.u)(x,[h]))&&void 0!==t?t:n?(0,r.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...g,className:(0,i.m)("w-full py-1 mobile:py-1 font-medium",null==g?void 0:g.className),componentRef:(0,o.Z)(h,null==g?void 0:g.componentRef)}):(0,r.jsx)(s.Z,{noCSSInputDefaultWidth:!0,...b,...g,className:(0,i.m)("w-full py-1 mobile:py-1 font-medium",null==g?void 0:g.className),componentRef:(0,o.Z)(h,null==g?void 0:g.componentRef)})]})}},29197:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),l=n(18074),i=n(27993),a=n(66180),o=n(45826),u=n(91107);function c(e){let{className:t,style:n,vertical:l,itemClassName:o,itemStyle:c,values:s,currentValue:d=s[0],labels:m=s,onChange:p}=e;return s.filter(Boolean).length?(0,r.jsx)(u.E,{value:d,onChange:null!=p?p:()=>{},className:(0,a.m)("".concat(l?"flex-col":"flex"," ").concat(null!=t?t:"")),style:n,children:s.map((e,t,n)=>(0,r.jsx)(u.E.Option,{value:e,className:"cursor-pointer flex grow",children:a=>{let{checked:u}=a;return e&&(0,r.jsx)("div",{className:"grid grow ".concat(l?"":"place-items-center"," ").concat((0,i.u)(o,[u])),style:(0,i.u)(c,[u,t,n]),children:(0,i.u)(m[t],[u,t,n])})}},t))}):(0,r.jsx)(r.Fragment,{})}function s(e){let{size:t,$valuesLength:n,$transparentBg:u,urlSearchQueryKey:s,className:d,...m}=e;(0,o.i)({currentValue:m.currentValue,values:m.values,onChange:m.onChange,queryKey:s});let p=m.currentValue&&m.values.includes(m.currentValue),f=null!=n?n:m.values.length,v=(p?m.values.findIndex(e=>e===m.currentValue):0)+0;return(0,r.jsx)(c,{...m,currentValue:m.currentValue,className:(0,a.m)("rounded-full p-1",u?"bg-transparent":"bg-cyberpunk-card-bg",d),itemClassName:e=>(0,a.m)("sm"===t?"min-w-[82px] mobile:min-w-[64px] px-2 mobile:px-1.5 h-7 mobile:h-5 text-sm mobile:text-xs":"min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs ","grid rounded-full place-items-center font-medium whitespace-nowrap ".concat(e?"text-white":"text-[#ABC4FF]"),(0,i.u)(m.itemClassName,[e])),itemStyle:e=>e?{background:"linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",backgroundSize:"".concat(f,"00% 100%"),backgroundPosition:(0,l.Z)(1/(f-1)*v)}:{}})}},99881:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(72573);function l(e){let{groupSeparator:t=",",fractionLength:n=2,groupSize:l=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,r.B)(e),e=>"auto"===n?e:function(e,t){var n;let[,r="",l="",i=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[];return i?i.length<t?String(e):Number(e).toFixed(t):String(e)}(e,n),e=>{var n;let[,r="",i="",a=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[],o=[...i].reduceRight((e,n,r,i)=>{let a=i.length-1-r;return n+(0!==a&&a%l==0?t:"")+e},"");return a?"".concat(r).concat(o,".").concat(a):"".concat(r).concat(o)}].reduce((e,t)=>t(e),e)}},18074:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(81451),l=n(51523),i=n(84207),a=n(72573),o=n(99881);function u(e,t){try{var n,u;let c=(0,i.Z)(null!=e?e:0),s=c.mul((null==t?void 0:t.alreadyPercented)?1:100).toFixed(null!==(n=null==t?void 0:t.fixed)&&void 0!==n?n:2);if((0,r.eq)(c,0))return"0%";if(!(null==t?void 0:t.exact)&&s===0..toFixed(null!==(u=null==t?void 0:t.fixed)&&void 0!==u?u:2))return(null==t?void 0:t.alwaysSigned)?"<+0.01%":"<0.01%";return(null==t?void 0:t.alwaysSigned)?"".concat((0,r.gt)(s,0)?"+":"-").concat((0,o.Z)((0,r.gt)(s,0)?(0,a.B)(s):(0,a.B)((0,l.dC)(s,-1))),"%"):"".concat((0,o.Z)(s,{fractionLength:null==t?void 0:t.fixed}),"%")}catch(e){return"0%"}}},37702:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),l=n(5593),i=n(67294),a=n(59277),o=n(43067),u=n(54592),c=n(60421),s=n(48162),d=n(72259),m=n(57571),p=n(51800),f=n(29197),v=n(92618),g=n(65408),x=n(3363),b=n(4465),h=n(16938);function N(){return(0,r.jsxs)(m.Z,{mobileBarTitle:"Settings",metaTitle:"Settings - Raydium",children:[(0,r.jsx)("div",{className:"text-3xl font-semibold",children:"Settings"}),(0,r.jsx)(y,{})]})}function y(){let e=(0,a.ZP)(e=>e.mode),[t,n]=(0,i.useState)(e);(0,i.useEffect)(()=>{n(e)},[e]);let c=(0,a.ZP)(e=>e.apiUrlOrigin),[s,m]=(0,i.useState)(c);(0,i.useEffect)(()=>{m(c)},[c]);let p=(0,a.ZP)(e=>e.apiUrlPathnames),v=(0,i.useMemo)(()=>(0,h.xh)(p,e=>"".concat(s).concat(e)),[s,p]),N=(0,a.ZP)(e=>e.programIds),[y,E]=(0,i.useState)(()=>(0,h.xh)(N,e=>(0,x.ZP)(e)));(0,i.useEffect)(()=>{E((0,h.xh)(N,e=>(0,x.ZP)(e)))},[N]);let k=Object.entries(N).some(e=>{let[t,n]=e;return!(0,b.$F)(y[t],n)})||c!==s;return(0,r.jsxs)(u.Z,{className:"py-4 gap-8 mx-auto w-[min(1100px,100%)] items-center",children:[(0,r.jsx)(f.Z,{values:["mainnet","devnet"],currentValue:t,onChange:e=>{E("mainnet"===e?(0,h.xh)(l.krz,x.ZP):(0,h.xh)(l.Kat,x.ZP)),n(e)}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xl font-semibold text-center mb-2",children:"Program ID"}),(0,r.jsx)(u.Z,{className:"mobile:gap-6",children:Object.entries(y).map(e=>{let[t,n]=e;return(0,r.jsx)(R,{name:"".concat((0,g.wR)(t)),renderFormItem:n},t)})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xl font-semibold text-center mb-2",children:"API"}),(0,r.jsx)(d.Z,{className:"mobile:text-base text-[#abc4ff80] my-4",value:s,prefix:"origin: ",suffix:(0,r.jsx)("div",{onClick:()=>{m(l.f4A)},className:"text-[#abc4ff] cursor-pointer clickable",children:"↻ reset"}),onUserInput:e=>{m(e)}}),(0,r.jsx)(u.Z,{className:"mobile:gap-6",children:Object.entries(v).map(e=>{let[t,n]=e;return(0,r.jsx)(R,{name:"".concat((0,g.wR)(t)),renderFormItem:n},t)})})]}),(0,r.jsx)(o.Z,{size:"lg",className:"w-[320px] frosted-glass-teal mt-5",validators:[{should:k}],onClick:()=>{a.ZP.setState({programIds:(0,h.xh)(y,e=>(0,x.uI)(e)),apiUrlOrigin:s,mode:t})},children:"Save"})]})}function R(e){let{name:t,tooltip:n,renderFormItem:l}=e;return(0,r.jsxs)(c.Z,{className:"grid-cols-[12em,32em] mobile:grid-cols-1 gap-8 mobile:gap-1",children:[(0,r.jsxs)(p.Z,{className:"justify-self-end mobile:justify-self-start items-center",children:[(0,r.jsx)("div",{className:"text-lg mobile:text-sm text-[#abc4ff]",children:t}),n&&(0,r.jsxs)(v.Z,{panelClassName:"bg-[#3b4146]",arrowClassName:"bg-[#3b4146]",children:[(0,r.jsx)(s.Z,{size:"sm",heroIconName:"question-mark-circle",className:"mx-1 cursor-help text-[#abc4ff]"}),(0,r.jsx)(v.Z.Panel,{children:(0,r.jsx)("p",{className:"w-80",children:n})})]}),(0,r.jsx)("div",{className:"text-lg mobile:hidden text-[#abc4ff]",children:": "})]}),(0,r.jsx)("div",{className:"mobile:text-sm mobile:break-words",children:l})]})}},95389:function(e,t,n){"use strict";n.d(t,{_:function(){return d},b:function(){return s}});var r=n(67294),l=n(19946),i=n(12351),a=n(16723),o=n(23784),u=n(73781);let c=(0,r.createContext)(null);function s(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,u.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),l=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(c.Provider,{value:l},e.children)},[t])]}let d=(0,i.yV)(function(e,t){let n=(0,l.M)(),{id:u=`headlessui-label-${n}`,passive:s=!1,...d}=e,m=function e(){let t=(0,r.useContext)(c);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),p=(0,o.T)(t);(0,a.e)(()=>m.register(u),[u,m.register]);let f={ref:p,...m.props,id:u};return s&&("onClick"in f&&delete f.onClick,"onClick"in d&&delete d.onClick),(0,i.sY)({ourProps:f,theirProps:d,slot:m.slot||{},defaultTag:"label",name:m.name||"Label"})})},91107:function(e,t,n){"use strict";n.d(t,{E:function(){return T}});var r,l,i=n(67294),a=n(12351),o=n(19946),u=n(32984),c=n(16723),s=n(61363),d=n(84575),m=n(95389),p=n(39516),f=n(15466),v=n(23784),g=n(46045),x=n(18689),b=n(73781),h=n(31147),N=n(64103),y=n(3855),R=n(94192),E=((r=E||{})[r.RegisterOption=0]="RegisterOption",r[r.UnregisterOption=1]="UnregisterOption",r);let k={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),r=e.options.findIndex(e=>e.id===t.id);return -1===r?e:(n.splice(r,1),{...e,options:n})}},j=(0,i.createContext)(null);j.displayName="RadioGroupDataContext";let C=(0,i.createContext)(null);function S(e,t){return(0,u.E)(t.type,k,e,t)}C.displayName="RadioGroupActionsContext";let w=(0,a.yV)(function(e,t){let n=(0,o.M)(),{id:r=`headlessui-radiogroup-${n}`,value:l,defaultValue:u,name:N,onChange:y,by:E=(e,t)=>e===t,disabled:k=!1,...w}=e,Z=(0,b.z)("string"==typeof E?(e,t)=>(null==e?void 0:e[E])===(null==t?void 0:t[E]):E),[T,P]=(0,i.useReducer)(S,{options:[]}),O=T.options,[I,A]=(0,m.b)(),[F,_]=(0,p.f)(),L=(0,i.useRef)(null),D=(0,v.T)(L,t),[M,z]=(0,h.q)(l,y,u),B=(0,i.useMemo)(()=>O.find(e=>!e.propsRef.current.disabled),[O]),V=(0,i.useMemo)(()=>O.some(e=>Z(e.propsRef.current.value,M)),[O,M]),G=(0,b.z)(e=>{var t;if(k||Z(e,M))return!1;let n=null==(t=O.find(t=>Z(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==z||z(e),!0)});!function({container:e,accept:t,walk:n,enabled:r=!0}){let l=(0,i.useRef)(t),a=(0,i.useRef)(n);(0,i.useEffect)(()=>{l.current=t,a.current=n},[t,n]),(0,c.e)(()=>{if(!e||!r)return;let t=(0,f.r)(e);if(!t)return;let n=l.current,i=a.current,o=Object.assign(e=>n(e),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;u.nextNode();)i(u.currentNode)},[e,r,l,a])}({container:L.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let U=(0,b.z)(e=>{let t=L.current;if(!t)return;let n=(0,f.r)(t),r=O.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case s.R.Enter:(0,x.g)(e.currentTarget);break;case s.R.ArrowLeft:case s.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let e=O.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&G(e.propsRef.current.value)}break;case s.R.ArrowRight:case s.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let e=O.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&G(e.propsRef.current.value)}break;case s.R.Space:{e.preventDefault(),e.stopPropagation();let t=O.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&G(t.propsRef.current.value)}}}),$=(0,b.z)(e=>(P({type:0,...e}),()=>P({type:1,id:e.id}))),K=(0,i.useMemo)(()=>({value:M,firstOption:B,containsCheckedOption:V,disabled:k,compare:Z,...T}),[M,B,V,k,Z,T]),W=(0,i.useMemo)(()=>({registerOption:$,change:G}),[$,G]),q=(0,i.useMemo)(()=>({value:M}),[M]),H=(0,i.useRef)(null),Y=(0,R.G)();return(0,i.useEffect)(()=>{H.current&&void 0!==u&&Y.addEventListener(H.current,"reset",()=>{G(u)})},[H,G]),i.createElement(_,{name:"RadioGroup.Description"},i.createElement(A,{name:"RadioGroup.Label"},i.createElement(C.Provider,{value:W},i.createElement(j.Provider,{value:K},null!=N&&null!=M&&(0,x.t)({[N]:M}).map(([e,t],n)=>i.createElement(g._,{features:g.A.Hidden,ref:0===n?e=>{var t;H.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,a.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,a.sY)({ourProps:{ref:D,id:r,role:"radiogroup","aria-labelledby":I,"aria-describedby":F,onKeyDown:U},theirProps:w,slot:q,defaultTag:"div",name:"RadioGroup"})))))});var Z=((l=Z||{})[l.Empty=1]="Empty",l[l.Active=2]="Active",l);let T=Object.assign(w,{Option:(0,a.yV)(function(e,t){var n;let r=(0,o.M)(),{id:l=`headlessui-radiogroup-option-${r}`,value:u,disabled:s=!1,...d}=e,f=(0,i.useRef)(null),g=(0,v.T)(f,t),[x,h]=(0,m.b)(),[R,E]=(0,p.f)(),{addFlag:k,removeFlag:S,hasFlag:w}=function(e=0){let[t,n]=(0,i.useState)(e);return{addFlag:(0,i.useCallback)(e=>n(t=>t|e),[t]),hasFlag:(0,i.useCallback)(e=>!!(t&e),[t]),removeFlag:(0,i.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,i.useCallback)(e=>n(t=>t^e),[n])}}(1),Z=(0,y.E)({value:u,disabled:s}),T=function e(t){let n=(0,i.useContext)(j);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option"),P=function e(t){let n=(0,i.useContext)(C);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option");(0,c.e)(()=>P.registerOption({id:l,element:f,propsRef:Z}),[l,P,f,e]);let O=(0,b.z)(e=>{var t;if((0,N.P)(e.currentTarget))return e.preventDefault();P.change(u)&&(k(2),null==(t=f.current)||t.focus())}),I=(0,b.z)(e=>{if((0,N.P)(e.currentTarget))return e.preventDefault();k(2)}),A=(0,b.z)(()=>S(2)),F=(null==(n=T.firstOption)?void 0:n.id)===l,_=T.disabled||s,L=T.compare(T.value,u),D={ref:g,id:l,role:"radio","aria-checked":L?"true":"false","aria-labelledby":x,"aria-describedby":R,"aria-disabled":!!_||void 0,tabIndex:_?-1:L||!T.containsCheckedOption&&F?0:-1,onClick:_?void 0:O,onFocus:_?void 0:I,onBlur:_?void 0:A},M=(0,i.useMemo)(()=>({checked:L,disabled:_,active:w(2)}),[L,_,w]);return i.createElement(E,{name:"RadioGroup.Description"},i.createElement(h,{name:"RadioGroup.Label"},(0,a.sY)({ourProps:D,theirProps:d,slot:M,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:m._,Description:p.d})},31147:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(67294),l=n(73781);function i(e,t,n){let[i,a]=(0,r.useState)(n),o=void 0!==e,u=(0,r.useRef)(o),c=(0,r.useRef)(!1),s=(0,r.useRef)(!1);return!o||u.current||c.current?o||!u.current||s.current||(s.current=!0,u.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,u.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[o?e:i,(0,l.z)(e=>(o||a(e),null==t?void 0:t(e)))]}},18689:function(e,t,n){"use strict";function r(e,t){return e?e+"["+t+"]":t}function l(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let e of n.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type){e.click();return}}}n.d(t,{g:function(){return l},t:function(){return function e(t={},n=null,l=[]){for(let[i,a]of Object.entries(t))!function t(n,l,i){if(Array.isArray(i))for(let[e,a]of i.entries())t(n,r(l,e.toString()),a);else i instanceof Date?n.push([l,i.toISOString()]):"boolean"==typeof i?n.push([l,i?"1":"0"]):"string"==typeof i?n.push([l,i]):"number"==typeof i?n.push([l,`${i}`]):null==i?n.push([l,""]):e(i,l,n)}(l,r(n,i),a);return l}}})}},function(e){e.O(0,[4740,7571,9774,2888,179],function(){return e(e.s=52837)}),_N_E=e.O()}]);