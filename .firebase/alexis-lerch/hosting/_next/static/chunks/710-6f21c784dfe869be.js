"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{7028:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(2115),o=n(8068),i=n(6611),l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[o,l]=r.useState(),u=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=u.current,n=s.current;if(n!==e){let r=c.current,o=a(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),s.current=e}},[e,p]),(0,i.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(u.current).includes(e.animationName);if(e.target===o&&r&&(p("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=a(u.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),l(e)},[])}}(t),u="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,o.s)(l.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof n||l.isPresent?r.cloneElement(u,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},9710:(e,t,n)=>{n.d(t,{Bc:()=>C,ZI:()=>P,k$:()=>R,m_:()=>M});var r=n(2115),o=n(3610),i=n(8068),l=n(8166),a=n(9674),u=n(7668),s=n(905),c=(n(7323),n(7028)),d=n(3360),p=n(2317),f=n(1488),m=n(3543),v=n(5155),[g,x]=(0,l.A)("Tooltip",[s.Bk]),y=(0,s.Bk)(),h="TooltipProvider",w="tooltip.open",[b,T]=g(h),C=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=r.useState(!0),s=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,v.jsx)(b,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:s,onPointerInTransitChange:r.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:l})};C.displayName=h;var E="Tooltip",[N,k]=g(E),M=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,d=T(E,e.__scopeTooltip),p=y(t),[m,g]=r.useState(null),x=(0,u.B)(),h=r.useRef(0),b=null!=a?a:d.disableHoverableContent,C=null!=c?c:d.delayDuration,k=r.useRef(!1),[M=!1,O]=(0,f.i)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(w))):d.onClose(),null==l||l(e)}}),R=r.useMemo(()=>M?k.current?"delayed-open":"instant-open":"closed",[M]),L=r.useCallback(()=>{window.clearTimeout(h.current),h.current=0,k.current=!1,O(!0)},[O]),_=r.useCallback(()=>{window.clearTimeout(h.current),h.current=0,O(!1)},[O]),I=r.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>{k.current=!0,O(!0),h.current=0},C)},[C,O]);return r.useEffect(()=>()=>{h.current&&(window.clearTimeout(h.current),h.current=0)},[]),(0,v.jsx)(s.bL,{...p,children:(0,v.jsx)(N,{scope:t,contentId:x,open:M,stateAttribute:R,trigger:m,onTriggerChange:g,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?I():L()},[d.isOpenDelayed,I,L]),onTriggerLeave:r.useCallback(()=>{b?_():(window.clearTimeout(h.current),h.current=0)},[_,b]),onOpen:L,onClose:_,disableHoverableContent:b,children:n})})};M.displayName=E;var O="TooltipTrigger",R=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...l}=e,a=k(O,n),u=T(O,n),c=y(n),p=r.useRef(null),f=(0,i.s)(t,p,a.onTriggerChange),m=r.useRef(!1),g=r.useRef(!1),x=r.useCallback(()=>m.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),(0,v.jsx)(s.Mz,{asChild:!0,...c,children:(0,v.jsx)(d.sG.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.m)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||u.isPointerInTransitRef.current||(a.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,o.m)(e.onPointerLeave,()=>{a.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.m)(e.onPointerDown,()=>{m.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:(0,o.m)(e.onFocus,()=>{m.current||a.onOpen()}),onBlur:(0,o.m)(e.onBlur,a.onClose),onClick:(0,o.m)(e.onClick,a.onClose)})})});R.displayName=O;var[L,_]=g("TooltipPortal",{forceMount:void 0}),I="TooltipContent",P=r.forwardRef((e,t)=>{let n=_(I,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,l=k(I,e.__scopeTooltip);return(0,v.jsx)(c.C,{present:r||l.open,children:l.disableHoverableContent?(0,v.jsx)(U,{side:o,...i,ref:t}):(0,v.jsx)(j,{side:o,...i,ref:t})})}),j=r.forwardRef((e,t)=>{let n=k(I,e.__scopeTooltip),o=T(I,e.__scopeTooltip),l=r.useRef(null),a=(0,i.s)(t,l),[u,s]=r.useState(null),{trigger:c,onClose:d}=n,p=l.current,{onPointerInTransitChange:f}=o,m=r.useCallback(()=>{s(null),f(!1)},[f]),g=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),f(!0)},[f]);return r.useEffect(()=>()=>m(),[m]),r.useEffect(()=>{if(c&&p){let e=e=>g(e,p),t=e=>g(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,g,m]),r.useEffect(()=>{if(u){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>r!=s>r&&n<(u-l)*(r-a)/(s-a)+l&&(o=!o)}return o}(n,u);r?m():o&&(m(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,u,d,m]),(0,v.jsx)(U,{...e,ref:a})}),[A,D]=g(E,{isInside:!1}),U=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:u,...c}=e,d=k(I,n),f=y(n),{onClose:g}=d;return r.useEffect(()=>(document.addEventListener(w,g),()=>document.removeEventListener(w,g)),[g]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,v.jsx)(a.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:g,children:(0,v.jsxs)(s.UC,{"data-state":d.stateAttribute,...f,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,v.jsx)(p.xV,{children:o}),(0,v.jsx)(A,{scope:n,isInside:!0,children:(0,v.jsx)(m.b,{id:d.contentId,role:"tooltip",children:i||o})})]})})});P.displayName=I;var B="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=y(n);return D(B,n).isInside?null:(0,v.jsx)(s.i3,{...o,...r,ref:t})}).displayName=B}}]);