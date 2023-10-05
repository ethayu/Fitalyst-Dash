import{b as F,c as U,d as G,e as H,f as le,g as ue,h as ce,i as de,j as O,k as me,l as fe,m as he,n as I,o as Y,q as K,r as T,s as Q,t as pe,u as Z,v as Re,w as ye,x as ge,y as we,z as C}from"/build/_shared/chunk-FKMX3JTF.js";var M=F(U());C();function y(){return y=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},y.apply(this,arguments)}var s=F(U());C();var d=F(U());C();var j=class extends d.default.Component{constructor(r){super(r),this.state={error:r.error||null,location:r.location}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location?{error:r.error||null,location:r.location}:{error:r.error||t.error,location:t.location}}render(){return this.state.error?d.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function k({error:e}){return d.default.useEffect(()=>{console.error(e)},[e]),d.default.createElement("html",{lang:"en"},d.default.createElement("head",null,d.default.createElement("meta",{charSet:"utf-8"}),d.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),d.default.createElement("title",null,"Application Error!")),d.default.createElement("body",null,d.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},d.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.stack?d.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack):null),d.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}function Ee(){let e=T();if(O(e))return d.default.createElement(Se,{caught:e});if(e instanceof Error)return d.default.createElement(k,{error:e});{let r=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);return d.default.createElement(k,{error:new Error(r)})}}var _e=d.default.createContext(void 0);function Qe(){return(0,d.useContext)(_e)}function xe({catch:e,component:r,children:t}){return e?d.default.createElement(_e.Provider,{value:e},d.default.createElement(r,null)):d.default.createElement(d.default.Fragment,null,t)}function ve(){let e=Qe();return d.default.createElement(Se,{caught:e})}function Se({caught:e}){return d.default.createElement("html",{lang:"en"},d.default.createElement("head",null,d.default.createElement("meta",{charSet:"utf-8"}),d.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),d.default.createElement("title",null,"Unhandled Thrown Response!")),d.default.createElement("body",null,d.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),d.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}function v(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}C();async function B(e,r){if(e.id in r)return r[e.id];try{let t=await import(e.module);return r[e.id]=t,t}catch{return window.location.reload(),new Promise(()=>{})}}function be(e,r,t){let o=e.map(a=>{var i;let l=r[a.route.id];return((i=l.links)===null||i===void 0?void 0:i.call(l))||[]}).flat(1),n=et(e,t);return tt(o,n)}async function Me(e){if(!e.links)return;let r=e.links();if(!r)return;let t=[];for(let n of r)!z(n)&&n.rel==="stylesheet"&&t.push({...n,rel:"preload",as:"style"});let o=t.filter(n=>(!n.media||window.matchMedia(n.media).matches)&&!document.querySelector(`link[rel="stylesheet"][href="${n.href}"]`));await Promise.all(o.map(Ze))}async function Ze(e){return new Promise(r=>{let t=document.createElement("link");Object.assign(t,e);function o(){document.head.contains(t)&&document.head.removeChild(t)}t.onload=()=>{o(),r()},t.onerror=()=>{o(),r()},document.head.appendChild(t)})}function z(e){return e!=null&&typeof e.page=="string"}function qe(e){return e==null?!1:e.href==null?e.rel==="preload"&&(typeof e.imageSrcSet=="string"||typeof e.imagesrcset=="string")&&(typeof e.imageSizes=="string"||typeof e.imagesizes=="string"):typeof e.rel=="string"&&typeof e.href=="string"}async function Ce(e,r,t){return(await Promise.all(e.map(async n=>{let a=await B(r.routes[n.route.id],t);return a.links?a.links():[]}))).flat(1).filter(qe).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="preload"?{...n,rel:"prefetch"}:{...n,rel:"prefetch",as:"style"})}function q(e,r,t,o,n,a){let i=Le(e),l=(m,u)=>t[u]?m.route.id!==t[u].route.id:!0,c=(m,u)=>{var p;return t[u].pathname!==m.pathname||((p=t[u].route.path)===null||p===void 0?void 0:p.endsWith("*"))&&t[u].params["*"]!==m.params["*"]};return a==="data"&&n.search!==i.search?r.filter((m,u)=>{if(!o.routes[m.route.id].hasLoader)return!1;if(l(m,u)||c(m,u))return!0;if(m.route.shouldRevalidate){var w;let g=m.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((w=t[0])===null||w===void 0?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):r.filter((m,u)=>{let p=o.routes[m.route.id];return(a==="assets"||p.hasLoader)&&(l(m,u)||c(m,u))})}function ke(e,r,t){let o=Le(e);return ee(r.filter(n=>t.routes[n.route.id].hasLoader).map(n=>{let{pathname:a,search:i}=o,l=new URLSearchParams(i);return l.set("_data",n.route.id),`${a}?${l}`}))}function De(e,r){return ee(e.map(t=>{let o=r.routes[t.route.id],n=[o.module];return o.imports&&(n=n.concat(o.imports)),n}).flat(1))}function et(e,r){return ee(e.map(t=>{let o=r.routes[t.route.id],n=[o.module];return o.imports&&(n=n.concat(o.imports)),n}).flat(1))}function ee(e){return[...new Set(e)]}function tt(e,r){let t=new Set,o=new Set(r);return e.reduce((n,a)=>{if(!z(a)&&a.as==="script"&&a.href&&o.has(a.href))return n;let l=JSON.stringify(a);return t.has(l)||(t.add(l),n.push(a)),n},[])}function Le(e){let r=G(e);return r.search===void 0&&(r.search=""),r}var rt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},nt=/[&><\u2028\u2029]/g;function $(e){return e.replace(nt,r=>rt[r])}function te(e){return{__html:e}}function Te(){let e=s.useContext(fe);return v(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ne(){let e=s.useContext(he);return v(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var A=s.createContext(void 0);A.displayName="Remix";function D(){let e=s.useContext(A);return v(e,"You must render this element inside a <Remix> element"),e}function $e({id:e}){let{routeModules:r,future:t}=D();v(r,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let{default:o,ErrorBoundary:n,CatchBoundary:a}=r[e];return!o&&(n||!t.v2_errorBoundary&&a)&&(o=Z),v(o,`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`),s.createElement(o,null)}function Ne({id:e}){let{future:r,routeModules:t}=D();v(t,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let o=T(),{CatchBoundary:n,ErrorBoundary:a}=t[e];if(r.v2_errorBoundary){if(e==="root"&&(a||(a=Ee)),a)return s.createElement(a,null);throw o}if(e==="root"&&(n||(n=ve),a||(a=k)),O(o)){let i=o;if(i!=null&&i.error&&i.status!==404&&a)return s.createElement(a,{error:i.error});if(n)return s.createElement(xe,{catch:o,component:n})}if(o instanceof Error&&a)return s.createElement(a,{error:o});throw o}function Ae(e,r){let[t,o]=s.useState(!1),[n,a]=s.useState(!1),{onFocus:i,onBlur:l,onMouseEnter:c,onMouseLeave:h,onTouchStart:m}=r,u=s.useRef(null);s.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let g=X=>{X.forEach(W=>{a(W.isIntersecting)})},P=new IntersectionObserver(g,{threshold:.5});return u.current&&P.observe(u.current),()=>{P.disconnect()}}},[e]);let p=()=>{e==="intent"&&o(!0)},w=()=>{e==="intent"&&(o(!1),a(!1))};return s.useEffect(()=>{if(t){let g=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(g)}}},[t]),[n,u,{onFocus:N(i,p),onBlur:N(l,w),onMouseEnter:N(c,p),onMouseLeave:N(h,w),onTouchStart:N(m,p)}]}var Pe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=s.forwardRef(({to:e,prefetch:r="none",...t},o)=>{let n=typeof e=="string"&&Pe.test(e),a=I(e),[i,l,c]=Ae(r,t);return s.createElement(s.Fragment,null,s.createElement(we,y({},t,c,{ref:Ie(o,l),to:e})),i&&!n?s.createElement(J,{page:a}):null)});Fe.displayName="NavLink";var Ue=s.forwardRef(({to:e,prefetch:r="none",...t},o)=>{let n=typeof e=="string"&&Pe.test(e),a=I(e),[i,l,c]=Ae(r,t);return s.createElement(s.Fragment,null,s.createElement(ge,y({},t,c,{ref:Ie(o,l),to:e})),i&&!n?s.createElement(J,{page:a}):null)});Ue.displayName="Link";function N(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}var ot="\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";function it(){let{manifest:e,routeModules:r}=D(),{errors:t,matches:o}=ne(),n=t?o.slice(0,o.findIndex(i=>t[i.route.id])+1):o,a=s.useMemo(()=>be(n,r,e),[n,r,e]);return s.useEffect(()=>{a.some(i=>"imagesizes"in i||"imagesrcset"in i)&&void 0},[a]),s.createElement(s.Fragment,null,a.map(i=>{if(z(i))return s.createElement(J,y({key:i.page},i));let l=null;return"useId"in s?(i.imagesrcset&&(i.imageSrcSet=l=i.imagesrcset,delete i.imagesrcset),i.imagesizes&&(i.imageSizes=i.imagesizes,delete i.imagesizes)):(i.imageSrcSet&&(i.imagesrcset=l=i.imageSrcSet,delete i.imageSrcSet),i.imageSizes&&(i.imagesizes=i.imageSizes,delete i.imageSizes)),s.createElement("link",y({key:i.rel+(i.href||"")+(l||"")},i))}))}function J({page:e,...r}){let{router:t}=Te(),o=s.useMemo(()=>H(t.routes,e),[t.routes,e]);return o?s.createElement(st,y({page:e,matches:o},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function at(e){let{manifest:r,routeModules:t}=D(),[o,n]=s.useState([]);return s.useEffect(()=>{let a=!1;return Ce(e,r,t).then(i=>{a||n(i)}),()=>{a=!0}},[e,r,t]),o}function st({page:e,matches:r,...t}){let o=Y(),{manifest:n}=D(),{matches:a}=ne(),i=s.useMemo(()=>q(e,r,a,n,o,"data"),[e,r,a,n,o]),l=s.useMemo(()=>q(e,r,a,n,o,"assets"),[e,r,a,n,o]),c=s.useMemo(()=>ke(e,i,n),[i,e,n]),h=s.useMemo(()=>De(l,n),[l,n]),m=at(l);return s.createElement(s.Fragment,null,c.map(u=>s.createElement("link",y({key:u,rel:"prefetch",as:"fetch",href:u},t))),h.map(u=>s.createElement("link",y({key:u,rel:"modulepreload",href:u},t))),m.map(u=>s.createElement("link",y({key:u.href},u))))}function He(e){return s.createElement(Re,e)}var re=!1;function lt(e){let{manifest:r,serverHandoffString:t,abortDelay:o,serializeError:n}=D(),{router:a,static:i,staticContext:l}=Te(),{matches:c}=ne(),h=K();s.useEffect(()=>{re=!0},[]);let m=(f,R)=>{let E;return n&&R instanceof Error?E=n(R):E=R,`${JSON.stringify(f)}:__remixContext.p(!1, ${$(JSON.stringify(E))})`},u=(f,R,E)=>{let x;try{x=JSON.stringify(E)}catch(_){return m(R,_)}return`${JSON.stringify(R)}:__remixContext.p(${$(x)})`},p=(f,R,E)=>{let x;return n&&E instanceof Error?x=n(E):x=E,`__remixContext.r(${JSON.stringify(f)}, ${JSON.stringify(R)}, !1, ${$(JSON.stringify(x))})`},w=(f,R,E)=>{let x;try{x=JSON.stringify(E)}catch(_){return p(f,R,_)}return`__remixContext.r(${JSON.stringify(f)}, ${JSON.stringify(R)}, ${$(x)})`},g=[],P=s.useMemo(()=>{var f;let R=l?`window.__remixContext = ${t};`:" ",E=l?.activeDeferreds;R+=E?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof o=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${o});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(E).map(([_,S])=>{let Ye=new Set(S.pendingKeys),Ke=S.deferredKeys.map(b=>{if(Ye.has(b))return g.push(s.createElement(Oe,{key:`${_} | ${b}`,deferredData:S,routeId:_,dataKey:b,scriptProps:e,serializeData:w,serializeError:p})),`${JSON.stringify(b)}:__remixContext.n(${JSON.stringify(_)}, ${JSON.stringify(b)})`;{let V=S.data[b];return typeof V._error<"u"?m(b,V._error):u(_,b,V._data)}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(_)}], {${Ke}});`}).join(`
`)+(g.length>0?`__remixContext.a=${g.length};`:""):"";let x=i?`${(f=r.hmr)!==null&&f!==void 0&&f.runtime?`import ${JSON.stringify(r.hmr.runtime)};`:""}import ${JSON.stringify(r.url)};
${c.map((_,S)=>`import * as route${S} from ${JSON.stringify(r.routes[_.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${c.map((_,S)=>`${JSON.stringify(_.route.id)}:route${S}`).join(",")}};

import(${JSON.stringify(r.entry.module)});`:" ";return s.createElement(s.Fragment,null,s.createElement("script",y({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:te(R),type:void 0})),s.createElement("script",y({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:te(x),type:"module",async:!0})))},[]);if(!i&&typeof __remixContext=="object"&&__remixContext.a)for(let f=0;f<__remixContext.a;f++)g.push(s.createElement(Oe,{key:f,scriptProps:e,serializeData:w,serializeError:p}));let X=s.useMemo(()=>{if(h.location){let f=H(a.routes,h.location);return v(f,`No routes match path "${h.location.pathname}"`),f}return[]},[h.location,a.routes]),W=c.concat(X).map(f=>{let R=r.routes[f.route.id];return(R.imports||[]).concat([R.module])}).flat(1),Ge=re?[]:r.entry.imports.concat(W);return re?null:s.createElement(s.Fragment,null,s.createElement("link",{rel:"modulepreload",href:r.entry.module,crossOrigin:e.crossOrigin}),ct(Ge).map(f=>s.createElement("link",{key:f,rel:"modulepreload",href:f,crossOrigin:e.crossOrigin})),P,g)}function Oe({dataKey:e,deferredData:r,routeId:t,scriptProps:o,serializeData:n,serializeError:a}){return typeof document>"u"&&r&&e&&t&&v(r.pendingKeys.includes(e),`Deferred data for route ${t} with key ${e} was not pending but tried to render a script for it.`),s.createElement(s.Suspense,{fallback:typeof document>"u"&&r&&e&&t?null:s.createElement("script",y({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&r&&e&&t?s.createElement(He,{resolve:r.data[e],errorElement:s.createElement(ut,{dataKey:e,routeId:t,scriptProps:o,serializeError:a}),children:i=>s.createElement("script",y({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n(t,e,i)}}))}):s.createElement("script",y({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function ut({dataKey:e,routeId:r,scriptProps:t,serializeError:o}){let n=Q();return s.createElement("script",y({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o(r,e,n)}}))}function ct(e){return[...new Set(e)]}var dt=()=>null;function Ie(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}me();function je(e){if(!e)return null;let r=Object.entries(e),t={};for(let[o,n]of r)if(n&&n.__type==="RouteErrorResponse")t[o]=new de(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let a=window[n.__subType];if(typeof a=="function")try{let i=new a(n.message);i.stack=n.stack,t[o]=i}catch{}}if(t[o]==null){let a=new Error(n.message);a.stack=n.stack,t[o]=a}}else t[o]=n;return t}var ie=F(U());C();me();function ze(e){return e.headers.get("X-Remix-Catch")!=null}function mt(e){return e.headers.get("X-Remix-Error")!=null}function ft(e){return ht(e)&&e.status>=400&&e.headers.get("X-Remix-Error")==null&&e.headers.get("X-Remix-Catch")==null&&e.headers.get("X-Remix-Response")==null}function Je(e){return e.headers.get("X-Remix-Redirect")!=null}function Xe(e){var r;return!!((r=e.headers.get("Content-Type"))!==null&&r!==void 0&&r.match(/text\/remix-deferred/))}function ht(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}async function oe(e,r,t=0){let o=new URL(e.url);o.searchParams.set("_data",r);let n={signal:e.signal};if(e.method!=="GET"){n.method=e.method;let l=e.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?(n.headers={"Content-Type":l},n.body=JSON.stringify(await e.json())):l&&/\btext\/plain\b/.test(l)?(n.headers={"Content-Type":l},n.body=await e.text()):l&&/\bapplication\/x-www-form-urlencoded\b/.test(l)?n.body=new URLSearchParams(await e.text()):n.body=await e.formData()}t>0&&await new Promise(l=>setTimeout(l,5**t*10));let a=window.__remixRevalidation,i=await fetch(o.href,n).catch(l=>{if(typeof a=="number"&&a===window.__remixRevalidation&&l?.name==="TypeError"&&t<3)return oe(e,r,t+1);throw l});if(mt(i)){let l=await i.json(),c=new Error(l.message);return c.stack=l.stack,c}if(ft(i)){let l=await i.text(),c=new Error(l);return c.stack=void 0,c}return i}var pt="__deferred_promise:";async function We(e){if(!e)throw new Error("parseDeferredReadableStream requires stream argument");let r,t={};try{let o=Rt(e),a=(await o.next()).value;if(!a)throw new Error("no critical data");let i=JSON.parse(a);if(typeof i=="object"&&i!==null)for(let[l,c]of Object.entries(i))typeof c!="string"||!c.startsWith(pt)||(r=r||{},r[l]=new Promise((h,m)=>{t[l]={resolve:u=>{h(u),delete t[l]},reject:u=>{m(u),delete t[l]}}}));return(async()=>{try{for await(let l of o){let[c,...h]=l.split(":"),m=h.join(":"),u=JSON.parse(m);if(c==="data")for(let[p,w]of Object.entries(u))t[p]&&t[p].resolve(w);else if(c==="error")for(let[p,w]of Object.entries(u)){let g=new Error(w.message);g.stack=w.stack,t[p]&&t[p].reject(g)}}for(let[l,c]of Object.entries(t))c.reject(new le(`Deferred ${l} will never be resolved`))}catch(l){for(let c of Object.values(t))c.reject(l)}})(),new ue({...i,...r})}catch(o){for(let n of Object.values(t))n.reject(o);throw o}}async function*Rt(e){let r=e.getReader(),t=[],o=[],n=!1,a=new TextEncoder,i=new TextDecoder,l=async()=>{if(o.length>0)return o.shift();for(;!n&&o.length===0;){let h=await r.read();if(h.done){n=!0;break}t.push(h.value);try{let u=i.decode(Be(...t)).split(`

`);if(u.length>=2&&(o.push(...u.slice(0,-1)),t=[a.encode(u.slice(-1).join(`

`))]),o.length>0)break}catch{continue}}return o.length>0||t.length>0&&(o=i.decode(Be(...t)).split(`

`).filter(m=>m),t=[]),o.shift()},c=await l();for(;c;)yield c,c=await l()}function Be(...e){let r=new Uint8Array(e.reduce((o,n)=>o+n.length,0)),t=0;for(let o of e)r.set(o,t),t+=o.length;return r}function yt(e){let r={};return Object.values(e).forEach(t=>{let o=t.parentId||"";r[o]||(r[o]=[]),r[o].push(t)}),r}function ae(e,r,t,o="",n=yt(e),a){return(n[o]||[]).map(i=>{let l=t.v2_errorBoundary===!0?i.id==="root"||i.hasErrorBoundary:i.id==="root"||i.hasCatchBoundary||i.hasErrorBoundary,c={caseSensitive:i.caseSensitive,element:ie.createElement($e,{id:i.id}),errorElement:l?ie.createElement(Ne,{id:i.id}):void 0,id:i.id,index:i.index,path:i.path,handle:void 0,loader:Ve(i,r,!1),action:Ve(i,r,!0),shouldRevalidate:gt(i,r,a)},h=ae(e,r,t,i.id,n,a);return h.length>0&&(c.children=h),c})}function gt(e,r,t){let o=!1;return function(n){let a=r[e.id];return v(a,`Expected route module to be loaded for ${e.id}`),t!==void 0&&!o?(o=!0,t.has(e.id)):a.shouldRevalidate?a.shouldRevalidate(n):n.defaultShouldRevalidate}}async function wt(e,r){let t=await B(e,r);return await Me(t),t}function Ve(e,r,t){return async({request:o})=>{let n=wt(e,r);try{if(t&&!e.hasAction){let i=`Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;throw console.error(i),new Error(i)}else if(!t&&!e.hasLoader)return null;let a=await oe(o,e.id);if(a instanceof Error)throw a;if(Je(a))throw Et(a);if(ze(a))throw a;return Xe(a)&&a.body?await We(a.body):a}finally{await n}}}function Et(e){let r=parseInt(e.headers.get("X-Remix-Status"),10)||302,t=e.headers.get("X-Remix-Redirect"),o={},n=e.headers.get("X-Remix-Revalidate");return n&&(o["X-Remix-Revalidate"]=n),ce(t,{status:r,headers:o})}var L;var se,sr=new Promise(e=>{se=e}).catch(()=>{});function _t(e){if(!L){let o=ae(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.future),n=window.__remixContext.state;n&&n.errors&&(n={...n,errors:je(n.errors)}),L=ye(o,{hydrationData:n,future:{v7_normalizeFormMethod:window.__remixContext.future.v2_normalizeFormMethod}});let a=window.__remixContext.url,i=window.location.pathname;if(a!==i){let l=`Initial URL (${a}) does not match URL at time of hydration (${i}), reloading page...`;console.error(l),window.location.reload()}se&&se(L)}let[r,t]=M.useState(L.state.location);return M.useLayoutEffect(()=>L.subscribe(o=>{o.location!==r&&t(o.location)}),[r]),M.createElement(A.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future}},M.createElement(j,{location:r,component:k},M.createElement(pe,{router:L,fallbackElement:null,future:{v7_startTransition:!0}})))}C();export{it as a,lt as b,dt as c,_t as d};
/*! Bundled license information:

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
