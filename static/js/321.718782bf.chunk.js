"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{4672:function(t,n,e){e.d(n,{Z:function(){return h}});var r,a,o,i,s=e(7689),c=e(168),u=e(6444),l=e(1087),f=u.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: baseline;\n  gap: 40px;\n"]))),p=u.ZP.li(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 20%;\n  transform: scale(1);\n  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]))),d=(0,u.ZP)(l.rU)(o||(o=(0,c.Z)(["\n  color: #000000;\n"]))),m=u.ZP.p(i||(i=(0,c.Z)(["\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 14px;\n  text-align: center;\n  max-width: 200px;\n"]))),v=e(9240),g=e(184);var h=function(t){var n=t.movies,e=(0,s.TH)();return(0,g.jsx)("div",{children:(0,g.jsx)(f,{children:n.map((function(t){var n=t.id,r=t.title,a=t.poster_path;return(0,g.jsx)(p,{children:(0,g.jsxs)(d,{to:"/movies/".concat(n),state:{from:e},children:[(0,g.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300/".concat(a):v,alt:r,width:240}),(0,g.jsx)(m,{children:(0,g.jsx)("b",{children:r})})]})},n)}))})})}},1757:function(t,n,e){e.d(n,{Df:function(){return s},Hu:function(){return f},S:function(){return l},gH:function(){return c},mU:function(){return u}});var r=e(5861),a=e(7757),o=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"da95833c0cadff5f8d11f7c5d3928061"};var s=function(){var t=(0,r.Z)(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/trending/movie/day");case 3:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/search/movie",{params:{query:n}});case 3:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n,"/credits"));case 3:return e=t.sent,r=e.data.cast,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n,"/reviews"));case 3:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()},4321:function(t,n,e){e.r(n),e.d(n,{default:function(){return qt}});var r,a,o,i=e(3433),s=e(5861),c=e(9439),u=e(7757),l=e.n(u),f=e(2791),p=e(1087),d=e(7689),m=e(4672),v=e(168),g=e(6444),h=g.ZP.form(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n  gap: 5px;\n"]))),b=g.ZP.input(a||(a=(0,v.Z)(["\n  padding: 5px;\n  border-color: #ff4500;\n  border-radius: 5px;\n  outline: none;\n"]))),y=g.ZP.button(o||(o=(0,v.Z)(["\n  border-radius: 5px;\n  border: none;\n  background-color: #ff4500;\n  color: #ffffff;\n\n  cursor: pointer;\n\n  :hover {\n    background-color: #9d3109;\n  }\n"]))),x=e(184),w=function(t){var n=t.onSubmit;return(0,x.jsxs)(h,{onSubmit:n,children:[(0,x.jsx)(b,{type:"text",name:"search"}),(0,x.jsx)(y,{type:"submit",children:"Search"})]})},Z=e(1757);function j(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(Object(e),!0).forEach((function(n){j(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var E={data:""},P=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||E},D=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,C=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,z=function t(n,e){var r="",a="",o="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},N={},A=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},H=function(t,n,e,r,a){var o=A(t),i=N[o]||(N[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!N[i]){var s=o!==t?t:function(t){for(var n,e,r=[{}];n=D.exec(t.replace(C,""));)n[4]?r.shift():n[3]?(e=n[3].replace(S," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(S," ").trim();return r[0]}(t);N[i]=z(a?j({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&N.g?N.g:null;return e&&(N.g=N[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(N[i],n,r,c),i},I=function(t,n,e){return t.reduce((function(t,r,a){var o=n[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":z(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function _(t){var n=this||{},e=t.call?t(n.p):t;return H(e.unshift?e.raw?I(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,P(n.target),n.g,n.o,n.k)}_.bind({g:1});var T,M,F,L,U,q,R,B,Y,$,G,J,K,Q,V,W,X,tt,nt,et=_.bind({k:1});function rt(t,n){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:M&&M()},s),e.o=/ *go\d+/.test(c),s.className=_.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),F&&u[0]&&F(s),T(u,s)}return n?n(a):a}}var at=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},ot=function(){var t=0;return function(){return(++t).toString()}}(),it=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),st=new Map,ct=function(t){if(!st.has(t)){var n=setTimeout((function(){st.delete(t),pt({type:4,toastId:t})}),1e3);st.set(t,n)}},ut=function t(n,e){switch(e.type){case 0:return O(O({},n),{},{toasts:[e.toast].concat((0,i.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=st.get(t);n&&clearTimeout(n)}(e.toast.id),O(O({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?O(O({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var a=e.toastId;return a?ct(a):n.toasts.forEach((function(t){ct(t.id)})),O(O({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?O(O({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?O(O({},n),{},{toasts:[]}):O(O({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return O(O({},n),{},{pausedAt:e.time});case 6:var o=e.time-(n.pausedAt||0);return O(O({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return O(O({},t),{},{pauseDuration:t.pauseDuration+o})}))})}},lt=[],ft={toasts:[],pausedAt:void 0},pt=function(t){ft=ut(ft,t),lt.forEach((function(t){t(ft)}))},dt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mt=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return O(O({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||ot()})}(n,t,e);return pt({type:2,toast:r}),r.id}},vt=function(t,n){return mt("blank")(t,n)};vt.error=mt("error"),vt.success=mt("success"),vt.loading=mt("loading"),vt.custom=mt("custom"),vt.dismiss=function(t){pt({type:3,toastId:t})},vt.remove=function(t){return pt({type:4,toastId:t})},vt.promise=function(t,n,e){var r=vt.loading(n.loading,O(O({},e),null==e?void 0:e.loading));return t.then((function(t){return vt.success(at(n.success,t),O(O({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){vt.error(at(n.error,t),O(O({id:r},e),null==e?void 0:e.error))})),t};var gt=function(t,n){pt({type:1,toast:{id:t,height:n}})},ht=function(){pt({type:5,time:Date.now()})},bt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,f.useState)(ft),e=(0,c.Z)(n,2),r=e[0],a=e[1];(0,f.useEffect)((function(){return lt.push(a),function(){var t=lt.indexOf(a);t>-1&&lt.splice(t,1)}}),[r]);var o=r.toasts.map((function(n){var e,r;return O(O(O(O({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||dt[n.type],style:O(O(O({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return O(O({},r),{},{toasts:o})}(t),e=n.toasts,r=n.pausedAt;(0,f.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return vt.dismiss(n.id)}),e);n.visible&&vt.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var a=(0,f.useCallback)((function(){r&&pt({type:6,time:Date.now()})}),[r]),o=(0,f.useCallback)((function(t,n){var r,a=n||{},o=a.reverseOrder,s=void 0!==o&&o,c=a.gutter,u=void 0===c?8:c,l=a.defaultPosition,f=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),p=f.findIndex((function(n){return n.id===t.id})),d=f.filter((function(t,n){return n<p&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,(0,i.Z)(s?[d+1]:[0,d])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:gt,startPause:ht,endPause:a,calculateOffset:o}}},yt=et(L||(L=(0,v.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),xt=et(U||(U=(0,v.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),wt=et(q||(q=(0,v.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),Zt=rt("div")(R||(R=(0,v.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),yt,xt,(function(t){return t.secondary||"#fff"}),wt),jt=et(B||(B=(0,v.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),kt=rt("div")(Y||(Y=(0,v.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),jt),Ot=et($||($=(0,v.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Et=et(G||(G=(0,v.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),Pt=rt("div")(J||(J=(0,v.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),Ot,Et,(function(t){return t.secondary||"#fff"})),Dt=rt("div")(K||(K=(0,v.Z)(["\n  position: absolute;\n"]))),Ct=rt("div")(Q||(Q=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),St=et(V||(V=(0,v.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),zt=rt("div")(W||(W=(0,v.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),St),Nt=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"==typeof e?f.createElement(zt,null,e):e:"blank"===r?null:f.createElement(Ct,null,f.createElement(kt,O({},a)),"loading"!==r&&f.createElement(Dt,null,"error"===r?f.createElement(Zt,O({},a)):f.createElement(Pt,O({},a))))},At=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Ht=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},It=rt("div")(X||(X=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),_t=rt("div")(tt||(tt=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Tt=f.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,o=n.height?function(t,n){var e=t.includes("top")?1:-1,r=it()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[At(e),Ht(e)],a=(0,c.Z)(r,2),o=a[0],i=a[1];return{animation:n?"".concat(et(o)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(et(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},i=f.createElement(Nt,{toast:n}),s=f.createElement(_t,O({},n.ariaProps),at(n.message,n));return f.createElement(It,{className:n.className,style:O(O(O({},o),r),n.style)},"function"==typeof a?a({icon:i,message:s}):f.createElement(f.Fragment,null,i,s))}));!function(t,n,e,r){z.p=n,T=t,M=e,F=r}(f.createElement);var Mt=function(t){var n=t.id,e=t.className,r=t.style,a=t.onHeightUpdate,o=t.children,i=f.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;a(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,a]);return f.createElement("div",{ref:i,className:e,style:r},o)},Ft=_(nt||(nt=(0,v.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Lt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,a=t.toastOptions,o=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,u=bt(a),l=u.toasts,p=u.handlers;return f.createElement("div",{style:O({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},l.map((function(t){var e=t.position||r,a=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return O(O({left:0,right:0,display:"flex",position:"absolute",transition:it()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),a)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:o,defaultPosition:r}));return f.createElement(Mt,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?Ft:"",style:a},"custom"===t.type?at(t.message,t):i?i(t):f.createElement(Tt,{toast:t,position:e}))})))},Ut=e(966),qt=function(){var t,n=(0,p.lr)(),e=(0,c.Z)(n,2),r=e[0],a=e[1],o=null!==(t=r.get("query"))&&void 0!==t?t:"",u=(0,f.useState)([]),v=(0,c.Z)(u,2),g=v[0],h=v[1];(0,f.useEffect)((function(){if(""!==o){var t=function(){var t=(0,s.Z)(l().mark((function t(){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,Z.gH)(o);case 2:0===(n=t.sent).length&&vt.error("Oops...No such found"),h((0,i.Z)(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[o]);return(0,x.jsxs)("main",{children:[(0,x.jsx)(w,{onSubmit:function(t){t.preventDefault();var n=t.target.search.value;""!==n.trim()&&a({query:n}),t.currentTarget.reset()}}),(0,x.jsx)(m.Z,{movies:g}),(0,x.jsx)(Lt,{position:"top-right",reverseOrder:!0}),(0,x.jsx)(f.Suspense,{fallback:(0,x.jsx)(Ut.a,{}),children:(0,x.jsx)(d.j3,{})})]})}},9240:function(t,n,e){t.exports=e.p+"static/media/noPosterImage.28b4da6b09457da353a4.jpg"}}]);
//# sourceMappingURL=321.718782bf.chunk.js.map