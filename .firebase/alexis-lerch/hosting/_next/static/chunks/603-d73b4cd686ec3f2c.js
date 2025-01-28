"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{3610:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},8068:(e,t,r)=>{r.d(t,{s:()=>l,t:()=>i});var n=r(2115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}function l(...e){return n.useCallback(i(...e),e)}},8166:(e,t,r)=>{r.d(t,{A:()=>l,q:()=>i});var n=r(2115),o=r(5155);function i(e,t){let r=n.createContext(t),i=e=>{let{children:t,...i}=e,l=n.useMemo(()=>i,Object.values(i));return(0,o.jsx)(r.Provider,{value:l,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=n.useContext(r);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let r=[],i=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return i.scopeName=e,[function(t,i){let l=n.createContext(i),u=r.length;r=[...r,i];let s=t=>{let{scope:r,children:i,...s}=t,a=r?.[e]?.[u]||l,c=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(a.Provider,{value:c,children:i})};return s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e]?.[u]||l,a=n.useContext(s);if(a)return a;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(i,...t)]}},9674:(e,t,r)=>{r.d(t,{qW:()=>f});var n,o=r(2115),i=r(3610),l=r(3360),u=r(8068),s=r(1524),a=r(5155),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var r,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:y,onPointerDownOutside:b,onFocusOutside:h,onInteractOutside:E,onDismiss:g,...w}=e,O=o.useContext(d),[P,C]=o.useState(null),j=null!==(f=null==P?void 0:P.ownerDocument)&&void 0!==f?f:null===(r=globalThis)||void 0===r?void 0:r.document,[,x]=o.useState({}),N=(0,u.s)(t,e=>C(e)),D=Array.from(O.layers),[S]=[...O.layersWithOutsidePointerEventsDisabled].slice(-1),L=D.indexOf(S),k=P?D.indexOf(P):-1,R=O.layersWithOutsidePointerEventsDisabled.size>0,W=k>=L,T=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=(0,s.c)(e),i=o.useRef(!1),l=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){p("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(r.removeEventListener("click",l.current),l.current=t,r.addEventListener("click",l.current,{once:!0})):t()}else r.removeEventListener("click",l.current);i.current=!1},t=window.setTimeout(()=>{r.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),r.removeEventListener("pointerdown",e),r.removeEventListener("click",l.current)}},[r,n]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...O.branches].some(e=>e.contains(t));!W||r||(null==b||b(e),null==E||E(e),e.defaultPrevented||null==g||g())},j),_=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=(0,s.c)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return r.addEventListener("focusin",e),()=>r.removeEventListener("focusin",e)},[r,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...O.branches].some(e=>e.contains(t))||(null==h||h(e),null==E||E(e),e.defaultPrevented||null==g||g())},j);return!function(e,t=globalThis?.document){let r=(0,s.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{k!==O.layers.size-1||(null==y||y(e),!e.defaultPrevented&&g&&(e.preventDefault(),g()))},j),o.useEffect(()=>{if(P)return m&&(0===O.layersWithOutsidePointerEventsDisabled.size&&(n=j.body.style.pointerEvents,j.body.style.pointerEvents="none"),O.layersWithOutsidePointerEventsDisabled.add(P)),O.layers.add(P),v(),()=>{m&&1===O.layersWithOutsidePointerEventsDisabled.size&&(j.body.style.pointerEvents=n)}},[P,j,m,O]),o.useEffect(()=>()=>{P&&(O.layers.delete(P),O.layersWithOutsidePointerEventsDisabled.delete(P),v())},[P,O]),o.useEffect(()=>{let e=()=>x({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,a.jsx)(l.sG.div,{...w,ref:N,style:{pointerEvents:R?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.m)(e.onFocusCapture,_.onFocusCapture),onBlurCapture:(0,i.m)(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:(0,i.m)(e.onPointerDownCapture,T.onPointerDownCapture)})});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,r,n){let{discrete:o}=n,i=r.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),o?(0,l.hO)(i,u):i.dispatchEvent(u)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let r=o.useContext(d),n=o.useRef(null),i=(0,u.s)(t,n);return o.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,a.jsx)(l.sG.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},7668:(e,t,r)=>{r.d(t,{B:()=>s});var n,o=r(2115),i=r(6611),l=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function s(e){let[t,r]=o.useState(l());return(0,i.N)(()=>{e||r(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},7323:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(2115),o=r(7650),i=r(3360),l=r(6611),u=r(5155),s=n.forwardRef((e,t)=>{var r,s;let{container:a,...c}=e,[d,f]=n.useState(!1);(0,l.N)(()=>f(!0),[]);let v=a||d&&(null===(s=globalThis)||void 0===s?void 0:null===(r=s.document)||void 0===r?void 0:r.body);return v?o.createPortal((0,u.jsx)(i.sG.div,{...c,ref:t}),v):null});s.displayName="Portal"},3360:(e,t,r)=>{r.d(t,{hO:()=>s,sG:()=>u});var n=r(2115),o=r(7650),i=r(2317),l=r(5155),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,u=n?i.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(u,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function s(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},2317:(e,t,r)=>{r.d(t,{DX:()=>l,xV:()=>s});var n=r(2115),o=r(8068),i=r(5155),l=n.forwardRef((e,t)=>{let{children:r,...o}=e,l=n.Children.toArray(r),s=l.find(a);if(s){let e=s.props.children,r=l.map(t=>t!==s?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(u,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(u,{...o,ref:t,children:r})});l.displayName="Slot";var u=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,o.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});u.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function a(e){return n.isValidElement(e)&&e.type===s}},1524:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(2115);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,r)=>{r.d(t,{i:()=>i});var n=r(2115),o=r(1524);function i({prop:e,defaultProp:t,onChange:r=()=>{}}){let[i,l]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[i]=r,l=n.useRef(i),u=(0,o.c)(t);return n.useEffect(()=>{l.current!==i&&(u(i),l.current=i)},[i,l,u]),r}({defaultProp:t,onChange:r}),u=void 0!==e,s=u?e:i,a=(0,o.c)(r);return[s,n.useCallback(t=>{if(u){let r="function"==typeof t?t(e):t;r!==e&&a(r)}else l(t)},[u,e,l,a])]}},6611:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(2115),o=globalThis?.document?n.useLayoutEffect:()=>{}},3435:(e,t,r)=>{r.d(t,{k5:()=>c});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,u({attr:a({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,a({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:s}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);