"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{1786:(e,r,t)=>{t.d(r,{q:()=>o});function o(e,[r,t]){return Math.min(t,Math.max(r,e))}},9741:(e,r,t)=>{t.d(r,{N:()=>s});var o=t(2115),n=t(8166),l=t(8068),i=t(2317),a=t(5155);function s(e){let r=e+"CollectionProvider",[t,s]=(0,n.A)(r),[c,u]=t(r,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:r,children:t}=e,n=o.useRef(null),l=o.useRef(new Map).current;return(0,a.jsx)(c,{scope:r,itemMap:l,collectionRef:n,children:t})};d.displayName=r;let f=e+"CollectionSlot",p=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,n=u(f,t),s=(0,l.s)(r,n.collectionRef);return(0,a.jsx)(i.DX,{ref:s,children:o})});p.displayName=f;let v=e+"CollectionItemSlot",h="data-radix-collection-item",w=o.forwardRef((e,r)=>{let{scope:t,children:n,...s}=e,c=o.useRef(null),d=(0,l.s)(r,c),f=u(v,t);return o.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,a.jsx)(i.DX,{[h]:"",ref:d,children:n})});return w.displayName=v,[{Provider:d,Slot:p,ItemSlot:w},function(r){let t=u(e+"CollectionConsumer",r);return o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},s]}},4256:(e,r,t)=>{t.d(r,{jH:()=>l});var o=t(2115);t(5155);var n=o.createContext(void 0);function l(e){let r=o.useContext(n);return e||r||"ltr"}},1868:(e,r,t)=>{t.d(r,{FK:()=>g});var o=t(2115),n=t(3360),l=t(7028),i=t(8166),a=t(8068),s=t(1524),c=t(4256),u=t(6611),d=t(1786),f=t(3610),p=t(5155),v="ScrollArea",[h,w]=(0,i.A)(v),[m,b]=h(v),g=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:i,scrollHideDelay:s=600,...u}=e,[d,f]=o.useState(null),[v,h]=o.useState(null),[w,b]=o.useState(null),[g,S]=o.useState(null),[y,x]=o.useState(null),[C,R]=o.useState(0),[E,T]=o.useState(0),[j,D]=o.useState(!1),[A,L]=o.useState(!1),P=(0,a.s)(r,e=>f(e)),_=(0,c.jH)(i);return(0,p.jsx)(m,{scope:t,type:l,dir:_,scrollHideDelay:s,scrollArea:d,viewport:v,onViewportChange:h,content:w,onContentChange:b,scrollbarX:g,onScrollbarXChange:S,scrollbarXEnabled:j,onScrollbarXEnabledChange:D,scrollbarY:y,onScrollbarYChange:x,scrollbarYEnabled:A,onScrollbarYEnabledChange:L,onCornerWidthChange:R,onCornerHeightChange:T,children:(0,p.jsx)(n.sG.div,{dir:_,...u,ref:P,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":E+"px",...e.style}})})});g.displayName=v;var S="ScrollAreaViewport";o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:l,nonce:i,...s}=e,c=b(S,t),u=o.useRef(null),d=(0,a.s)(r,u,c.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,p.jsx)(n.sG.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,p.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})}).displayName=S;var y="ScrollAreaScrollbar";o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=b(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return o.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(x,{...n,ref:r,forceMount:t}):"scroll"===l.type?(0,p.jsx)(C,{...n,ref:r,forceMount:t}):"auto"===l.type?(0,p.jsx)(R,{...n,ref:r,forceMount:t}):"always"===l.type?(0,p.jsx)(E,{...n,ref:r}):null}).displayName=y;var x=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,i=b(y,e.__scopeScrollArea),[a,s]=o.useState(!1);return o.useEffect(()=>{let e=i.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},o=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",o),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",o)}}},[i.scrollArea,i.scrollHideDelay]),(0,p.jsx)(l.C,{present:t||a,children:(0,p.jsx)(R,{"data-state":a?"visible":"hidden",...n,ref:r})})}),C=o.forwardRef((e,r)=>{var t,n;let{forceMount:i,...a}=e,s=b(y,e.__scopeScrollArea),c="horizontal"===e.orientation,u=W(()=>v("SCROLL_END"),100),[d,v]=(t="hidden",n={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let t=n[e][r];return null!=t?t:e},t));return o.useEffect(()=>{if("idle"===d){let e=window.setTimeout(()=>v("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,s.scrollHideDelay,v]),o.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],o=()=>{let o=e[r];t!==o&&(v("SCROLL"),u()),t=o};return e.addEventListener("scroll",o),()=>e.removeEventListener("scroll",o)}},[s.viewport,c,v,u]),(0,p.jsx)(l.C,{present:i||"hidden"!==d,children:(0,p.jsx)(E,{"data-state":"hidden"===d?"hidden":"visible",...a,ref:r,onPointerEnter:(0,f.m)(e.onPointerEnter,()=>v("POINTER_ENTER")),onPointerLeave:(0,f.m)(e.onPointerLeave,()=>v("POINTER_LEAVE"))})})}),R=o.forwardRef((e,r)=>{let t=b(y,e.__scopeScrollArea),{forceMount:n,...i}=e,[a,s]=o.useState(!1),c="horizontal"===e.orientation,u=W(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return U(t.viewport,u),U(t.content,u),(0,p.jsx)(l.C,{present:n||a,children:(0,p.jsx)(E,{"data-state":a?"visible":"hidden",...i,ref:r})})}),E=o.forwardRef((e,r)=>{let{orientation:t="vertical",...n}=e,l=b(y,e.__scopeScrollArea),i=o.useRef(null),a=o.useRef(0),[s,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=M(s.viewport,s.content),d={...n,sizes:s,onSizesChange:c,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,r){return function(e,r,t){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",n=k(t),l=r||n/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(n-l),s=t.content-t.viewport;return G([i,a],"ltr"===o?[0,s]:[-1*s,0])(e)}(e,a.current,s,r)}return"horizontal"===t?(0,p.jsx)(T,{...d,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=z(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===t?(0,p.jsx)(j,{...d,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=z(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),T=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=b(y,e.__scopeScrollArea),[s,c]=o.useState(),u=o.useRef(null),d=(0,a.s)(r,u,i.onScrollbarXChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,p.jsx)(L,{"data-orientation":"horizontal",...l,ref:d,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":k(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&n({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:H(s.paddingLeft),paddingEnd:H(s.paddingRight)}})}})}),j=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=b(y,e.__scopeScrollArea),[s,c]=o.useState(),u=o.useRef(null),d=(0,a.s)(r,u,i.onScrollbarYChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,p.jsx)(L,{"data-orientation":"vertical",...l,ref:d,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":k(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&n({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:H(s.paddingTop),paddingEnd:H(s.paddingBottom)}})}})}),[D,A]=h(y),L=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:u,onThumbPointerDown:d,onThumbPositionChange:v,onDragScroll:h,onWheelScroll:w,onResize:m,...g}=e,S=b(y,t),[x,C]=o.useState(null),R=(0,a.s)(r,e=>C(e)),E=o.useRef(null),T=o.useRef(""),j=S.viewport,A=l.content-l.viewport,L=(0,s.c)(w),P=(0,s.c)(v),_=W(m,10);function I(e){E.current&&h({x:e.clientX-E.current.left,y:e.clientY-E.current.top})}return o.useEffect(()=>{let e=e=>{let r=e.target;(null==x?void 0:x.contains(r))&&L(e,A)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[j,x,A,L]),o.useEffect(P,[l,P]),U(x,_),U(S.content,_),(0,p.jsx)(D,{scope:t,scrollbar:x,hasThumb:i,onThumbChange:(0,s.c)(c),onThumbPointerUp:(0,s.c)(u),onThumbPositionChange:P,onThumbPointerDown:(0,s.c)(d),children:(0,p.jsx)(n.sG.div,{...g,ref:R,style:{position:"absolute",...g.style},onPointerDown:(0,f.m)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),E.current=x.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),I(e))}),onPointerMove:(0,f.m)(e.onPointerMove,I),onPointerUp:(0,f.m)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,S.viewport&&(S.viewport.style.scrollBehavior=""),E.current=null})})})}),P="ScrollAreaThumb",_=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,n=A(P,e.__scopeScrollArea);return(0,p.jsx)(l.C,{present:t||n.hasThumb,children:(0,p.jsx)(I,{ref:r,...o})})}),I=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:l,...i}=e,s=b(P,t),c=A(P,t),{onThumbPositionChange:u}=c,d=(0,a.s)(r,e=>c.onThumbChange(e)),v=o.useRef(void 0),h=W(()=>{v.current&&(v.current(),v.current=void 0)},100);return o.useEffect(()=>{let e=s.viewport;if(e){let r=()=>{if(h(),!v.current){let r=O(e,u);v.current=r,u()}};return u(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[s.viewport,h,u]),(0,p.jsx)(n.sG.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,f.m)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,o=e.clientY-r.top;c.onThumbPointerDown({x:t,y:o})}),onPointerUp:(0,f.m)(e.onPointerUp,c.onThumbPointerUp)})});_.displayName=P;var N="ScrollAreaCorner";o.forwardRef((e,r)=>{let t=b(N,e.__scopeScrollArea),o=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&o?(0,p.jsx)(F,{...e,ref:r}):null}).displayName=N;var F=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...l}=e,i=b(N,t),[a,s]=o.useState(0),[c,u]=o.useState(0),d=!!(a&&c);return U(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),u(r)}),U(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),d?(0,p.jsx)(n.sG.div,{...l,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function H(e){return e?parseInt(e,10):0}function M(e,r){let t=e/r;return isNaN(t)?0:t}function k(e){let r=M(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function z(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",o=k(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,i=r.content-r.viewport,a=(0,d.q)(e,"ltr"===t?[0,i]:[-1*i,0]);return G([0,i],[0,l-o])(a)}function G(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}var O=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},o=0;return!function n(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,o=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(o)};function W(e,r){let t=(0,s.c)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function U(e,r){let t=(0,s.c)(r);(0,u.N)(()=>{let r=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}},8217:(e,r,t)=>{t.d(r,{UC:()=>q,B8:()=>Y,bL:()=>K,l9:()=>V});var o=t(2115),n=t(3610),l=t(8166),i=t(9741),a=t(8068),s=t(7668),c=t(3360),u=t(1524),d=t(1488),f=t(4256),p=t(5155),v="rovingFocusGroup.onEntryFocus",h={bubbles:!1,cancelable:!0},w="RovingFocusGroup",[m,b,g]=(0,i.N)(w),[S,y]=(0,l.A)(w,[g]),[x,C]=S(w),R=o.forwardRef((e,r)=>(0,p.jsx)(m.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(m.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(E,{...e,ref:r})})}));R.displayName=w;var E=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,orientation:l,loop:i=!1,dir:s,currentTabStopId:w,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:g,onEntryFocus:S,preventScrollOnEntryFocus:y=!1,...C}=e,R=o.useRef(null),E=(0,a.s)(r,R),T=(0,f.jH)(s),[j=null,D]=(0,d.i)({prop:w,defaultProp:m,onChange:g}),[L,P]=o.useState(!1),_=(0,u.c)(S),I=b(t),N=o.useRef(!1),[F,H]=o.useState(0);return o.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(v,_),()=>e.removeEventListener(v,_)},[_]),(0,p.jsx)(x,{scope:t,orientation:l,dir:T,loop:i,currentTabStopId:j,onItemFocus:o.useCallback(e=>D(e),[D]),onItemShiftTab:o.useCallback(()=>P(!0),[]),onFocusableItemAdd:o.useCallback(()=>H(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>H(e=>e-1),[]),children:(0,p.jsx)(c.sG.div,{tabIndex:L||0===F?-1:0,"data-orientation":l,...C,ref:E,style:{outline:"none",...e.style},onMouseDown:(0,n.m)(e.onMouseDown,()=>{N.current=!0}),onFocus:(0,n.m)(e.onFocus,e=>{let r=!N.current;if(e.target===e.currentTarget&&r&&!L){let r=new CustomEvent(v,h);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=I().filter(e=>e.focusable);A([e.find(e=>e.active),e.find(e=>e.id===j),...e].filter(Boolean).map(e=>e.ref.current),y)}}N.current=!1}),onBlur:(0,n.m)(e.onBlur,()=>P(!1))})})}),T="RovingFocusGroupItem",j=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,focusable:l=!0,active:i=!1,tabStopId:a,...u}=e,d=(0,s.B)(),f=a||d,v=C(T,t),h=v.currentTabStopId===f,w=b(t),{onFocusableItemAdd:g,onFocusableItemRemove:S}=v;return o.useEffect(()=>{if(l)return g(),()=>S()},[l,g,S]),(0,p.jsx)(m.ItemSlot,{scope:t,id:f,focusable:l,active:i,children:(0,p.jsx)(c.sG.span,{tabIndex:h?0:-1,"data-orientation":v.orientation,...u,ref:r,onMouseDown:(0,n.m)(e.onMouseDown,e=>{l?v.onItemFocus(f):e.preventDefault()}),onFocus:(0,n.m)(e.onFocus,()=>v.onItemFocus(f)),onKeyDown:(0,n.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,t){var o;let n=(o=e.key,"rtl"!==t?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(n)))return D[n]}(e,v.orientation,v.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let t=w().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)t.reverse();else if("prev"===r||"next"===r){"prev"===r&&t.reverse();let o=t.indexOf(e.currentTarget);t=v.loop?function(e,r){return e.map((t,o)=>e[(r+o)%e.length])}(t,o+1):t.slice(o+1)}setTimeout(()=>A(t))}})})})});j.displayName=T;var D={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function A(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let o of e)if(o===t||(o.focus({preventScroll:r}),document.activeElement!==t))return}var L=t(7028),P="Tabs",[_,I]=(0,l.A)(P,[y]),N=y(),[F,H]=_(P),M=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,onValueChange:n,defaultValue:l,orientation:i="horizontal",dir:a,activationMode:u="automatic",...v}=e,h=(0,f.jH)(a),[w,m]=(0,d.i)({prop:o,onChange:n,defaultProp:l});return(0,p.jsx)(F,{scope:t,baseId:(0,s.B)(),value:w,onValueChange:m,orientation:i,dir:h,activationMode:u,children:(0,p.jsx)(c.sG.div,{dir:h,"data-orientation":i,...v,ref:r})})});M.displayName=P;var k="TabsList",z=o.forwardRef((e,r)=>{let{__scopeTabs:t,loop:o=!0,...n}=e,l=H(k,t),i=N(t);return(0,p.jsx)(R,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:o,children:(0,p.jsx)(c.sG.div,{role:"tablist","aria-orientation":l.orientation,...n,ref:r})})});z.displayName=k;var G="TabsTrigger",O=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,disabled:l=!1,...i}=e,a=H(G,t),s=N(t),u=X(a.baseId,o),d=B(a.baseId,o),f=o===a.value;return(0,p.jsx)(j,{asChild:!0,...s,focusable:!l,active:f,children:(0,p.jsx)(c.sG.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:u,...i,ref:r,onMouseDown:(0,n.m)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(o)}),onKeyDown:(0,n.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(o)}),onFocus:(0,n.m)(e.onFocus,()=>{let e="manual"!==a.activationMode;f||l||!e||a.onValueChange(o)})})})});O.displayName=G;var W="TabsContent",U=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,forceMount:l,children:i,...a}=e,s=H(W,t),u=X(s.baseId,n),d=B(s.baseId,n),f=n===s.value,v=o.useRef(f);return o.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.jsx)(L.C,{present:l||f,children:t=>{let{present:o}=t;return(0,p.jsx)(c.sG.div,{"data-state":f?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":u,hidden:!o,id:d,tabIndex:0,...a,ref:r,style:{...e.style,animationDuration:v.current?"0s":void 0},children:o&&i})}})});function X(e,r){return"".concat(e,"-trigger-").concat(r)}function B(e,r){return"".concat(e,"-content-").concat(r)}U.displayName=W;var K=M,Y=z,V=O,q=U}}]);