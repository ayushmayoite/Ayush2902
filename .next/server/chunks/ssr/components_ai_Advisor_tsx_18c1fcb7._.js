module.exports=[73331,a=>{"use strict";let b,c;var d,e=a.i(87924),f=a.i(72131);let g={data:""},h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,i=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,k=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?k(g,f):f+"{"+k(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=k(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=k.p?k.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},l={},m=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+m(a[c]);return b}return a};function n(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=m(a),n=l[g]||(l[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!l[n]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=h.exec(a.replace(i,""));)b[4]?d.shift():b[3]?(c=b[3].replace(j," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(j," ").trim();return d[0]})(a);l[n]=k(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&l.g?l.g:null;return c&&(l.g=l[n]),f=l[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":k(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||g,d.g,d.o,d.k)}n.bind({g:1});let o,p,q,r=n.bind({k:1});function s(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:p&&p()},h),c.o=/ *go\d+/.test(i),h.className=n.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),q&&j[0]&&q(h),o(j,h)}return b?b(e):e}}var t=(a,b)=>"function"==typeof a?a(b):a,u=(b=0,()=>(++b).toString()),v="default",w=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return w(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},x=[],y={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},z={},A=(a,b=v)=>{z[b]=w(z[b]||y,a),x.forEach(([a,c])=>{a===b&&c(z[b])})},B=a=>Object.keys(z).forEach(b=>A(a,b)),C=(a=v)=>b=>{A(b,a)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},E=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||u()}))(b,a,c);return C(e.toasterId||(d=e.id,Object.keys(z).find(a=>z[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},F=(a,b)=>E("blank")(a,b);F.error=E("error"),F.success=E("success"),F.loading=E("loading"),F.custom=E("custom"),F.dismiss=(a,b)=>{let c={type:3,toastId:a};b?C(b)(c):B(c)},F.dismissAll=a=>F.dismiss(void 0,a),F.remove=(a,b)=>{let c={type:4,toastId:a};b?C(b)(c):B(c)},F.removeAll=a=>F.remove(void 0,a),F.promise=(a,b,c)=>{let d=F.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?t(b.success,a):void 0;return e?F.success(e,{id:d,...c,...null==c?void 0:c.success}):F.dismiss(d),a}).catch(a=>{let e=b.error?t(b.error,a):void 0;e?F.error(e,{id:d,...c,...null==c?void 0:c.error}):F.dismiss(d)}),a};var G=1e3,H=r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=r`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=r`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=s("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${J} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=s("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,N=r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,O=r`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,P=s("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${O} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=s("div")`
  position: absolute;
`,R=s("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,S=r`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=s("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${S} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,U=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(T,null,b):b:"blank"===c?null:f.createElement(R,null,f.createElement(M,{...d}),"loading"!==c&&f.createElement(Q,null,"error"===c?f.createElement(K,{...d}):f.createElement(P,{...d})))},V=s("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=s("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${r(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${r(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(U,{toast:a}),i=f.createElement(W,{...a.ariaProps},t(a.message,a));return f.createElement(V,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))});d=f.createElement,k.p=void 0,o=d,p=void 0,q=void 0;var Y=({id:a,className:b,style:c,onHeightUpdate:d,children:e})=>{let g=f.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return f.createElement("div",{ref:g,className:b,style:c},e)},Z=n`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:e,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=v)=>{let[c,d]=(0,f.useState)(z[b]||y),e=(0,f.useRef)(z[b]);(0,f.useEffect)(()=>(e.current!==z[b]&&d(z[b]),x.push([b,d]),()=>{let a=x.findIndex(([a])=>a===b);a>-1&&x.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||D[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),e=(0,f.useRef)(new Map).current,g=(0,f.useCallback)((a,b=G)=>{if(e.has(a))return;let c=setTimeout(()=>{e.delete(a),h({type:4,toastId:a})},b);e.set(a,c)},[]);(0,f.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&F.dismiss(c.id);return}return setTimeout(()=>F.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,f.useCallback)(C(b),[b]),i=(0,f.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,f.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,f.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,f.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,f.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=e.get(a.id);b&&(clearTimeout(b),e.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return f.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:e,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return f.createElement(Y,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Z:"",style:m},"custom"===d.type?t(d.message,d):g?g(d):f.createElement(X,{toast:d,position:j}))}))},_=a.i(70106);let aa=(0,_.default)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);var ab=a.i(33508);let ac=(0,_.default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var ad=a.i(96221);let ae=(0,_.default)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),af=(0,_.default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);var ag=a.i(38246);let ah=["Ergonomic seating for Bihar government project, 50 people","Modular workstations for a 20-person tech startup in Patna","Conference room furniture for corporate head office","Complete office setup for 100-seat BPO centre"];function ai(){let[a,b]=(0,f.useState)(!1),[c,d]=(0,f.useState)(""),[g,h]=(0,f.useState)(!1),[i,j]=(0,f.useState)(null),k=(0,f.useRef)(null),l=(0,f.useRef)(null);async function m(a,b){a?.preventDefault();let e=b??c;if(e.trim()){h(!0),j(null);try{let a=await fetch("/api/ai-advisor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}),c=await a.json();if(!a.ok)throw Error(c.error??"Something went wrong");j(c),b&&d(b)}catch(b){let a=b instanceof Error?b.message:"Failed to get recommendations";F.error(a,{duration:4e3,style:{background:"#1a1a1a",color:"#fff",borderLeft:"4px solid #ef4444",borderRadius:"4px"}})}finally{h(!1)}}}(0,f.useEffect)(()=>(l.current&&clearTimeout(l.current),a&&(l.current=setTimeout(()=>k.current?.focus(),100)),()=>{l.current&&clearTimeout(l.current)}),[a]);let n={"oando-workstations":"oando-workstations","oando-seating":"oando-seating","oando-tables":"oando-tables","oando-storage":"oando-storage","oando-soft-seating":"oando-soft-seating","oando-educational":"oando-educational","oando-collaborative":"oando-collaborative"};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($,{position:"bottom-right"}),(0,e.jsxs)("button",{id:"ai-advisor-trigger",onClick:()=>b(!0),"aria-label":"Open AI Workspace Advisor",className:`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-neutral-900 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-black/30 hover:bg-primary transition-all duration-300 group ${a?"opacity-0 pointer-events-none scale-90":"opacity-100 scale-100"}`,children:[(0,e.jsx)(af,{className:"w-4 h-4 text-primary group-hover:text-white transition-colors"}),(0,e.jsx)("span",{className:"text-sm font-bold tracking-wide",children:"AI Advisor"})]}),a&&(0,e.jsxs)("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6",role:"dialog","aria-modal":"true","aria-label":"AI Workspace Advisor",children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>b(!1)}),(0,e.jsxs)("div",{className:"relative w-full sm:w-[480px] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-100",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"w-9 h-9 bg-neutral-900 rounded-full flex items-center justify-center",children:(0,e.jsx)(aa,{className:"w-5 h-5 text-white"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-semibold text-neutral-900 text-sm leading-none",children:"AI Workspace Consultant"}),(0,e.jsx)("p",{className:"text-xs text-neutral-400 mt-0.5",children:"Powered by One & Only × GPT-4o"})]})]}),(0,e.jsx)("button",{onClick:()=>b(!1),className:"w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors","aria-label":"Close advisor",children:(0,e.jsx)(ab.X,{className:"w-4 h-4"})})]}),(0,e.jsxs)("div",{className:"flex-1 overflow-y-auto px-6 py-5 space-y-6",children:[!i&&!g&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"text-sm text-neutral-500 leading-relaxed",children:"Describe your workspace project — team size, industry, location, and budget — and I'll engineer a curated system recommendation from our live catalog."}),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("p",{className:"text-xs font-bold tracking-widest uppercase text-neutral-400",children:"Try a sample"}),(0,e.jsx)("div",{className:"flex flex-wrap gap-2",children:ah.map(a=>(0,e.jsx)("button",{onClick:()=>m(void 0,a),className:"text-xs px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 transition-colors",children:a},a))})]})]}),g&&(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-12 gap-4 text-neutral-500",children:[(0,e.jsx)(ad.Loader2,{className:"w-8 h-8 animate-spin text-primary"}),(0,e.jsx)("p",{className:"text-sm",children:"Analysing catalog and engineering your recommendations…"})]}),i&&(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{className:"p-4 bg-neutral-50 rounded-xl border border-neutral-200",children:[(0,e.jsx)("p",{className:"text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2",children:"Consultant Summary"}),(0,e.jsx)("p",{className:"text-sm text-neutral-700 leading-relaxed",children:i.summary}),(0,e.jsxs)("div",{className:"mt-3 flex items-center gap-2",children:[(0,e.jsx)("span",{className:"text-xs text-neutral-400",children:"Estimated project total:"}),(0,e.jsx)("span",{className:"text-sm font-bold text-neutral-900",children:i.totalBudget})]})]}),(0,e.jsxs)("div",{className:"space-y-3",children:[(0,e.jsxs)("p",{className:"text-xs font-bold tracking-widest uppercase text-neutral-400",children:["Recommended Systems (",i.recommendations?.length??0,")"]}),i.recommendations?.map((a,b)=>(0,e.jsxs)("div",{className:"p-4 rounded-xl border border-neutral-200 hover:border-neutral-400 transition-colors group",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2 mb-2",children:[(0,e.jsx)("h4",{className:"font-semibold text-neutral-900 text-sm leading-tight",children:a.productName}),(0,e.jsx)(ag.default,{href:`/products/${n[a.category]??a.category}`,className:"shrink-0 w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center transition-colors","aria-label":`View ${a.productName}`,children:(0,e.jsx)(ae,{className:"w-3.5 h-3.5"})})]}),(0,e.jsx)("p",{className:"text-xs text-neutral-500 leading-relaxed mb-3",children:a.why}),(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("span",{className:"text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600 font-medium",children:a.category?.replace("oando-","").replace(/-/g," ")}),(0,e.jsx)("span",{className:"text-xs text-primary font-semibold",children:a.budgetEstimate})]})]},b))]}),(0,e.jsx)("button",{onClick:()=>{j(null),d("")},className:"text-xs text-neutral-400 hover:text-neutral-900 transition-colors underline",children:"Start a new query"})]})]}),!i&&(0,e.jsx)("form",{onSubmit:m,className:"px-6 py-4 border-t border-neutral-100 bg-white",children:(0,e.jsxs)("div",{className:"flex gap-3 items-end",children:[(0,e.jsx)("textarea",{ref:k,id:"ai-advisor-input",rows:2,value:c,onChange:a=>d(a.target.value),onKeyDown:a=>{"Enter"!==a.key||a.shiftKey||(a.preventDefault(),m())},placeholder:"e.g. Ergonomic seating for Bihar government project, 50 people…",className:"flex-1 resize-none text-sm border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400 bg-neutral-50",disabled:g}),(0,e.jsx)("button",{type:"submit",disabled:g||!c.trim(),id:"ai-advisor-submit",className:"w-11 h-11 bg-neutral-900 rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors disabled:opacity-40 shrink-0","aria-label":"Send query",children:g?(0,e.jsx)(ad.Loader2,{className:"w-4 h-4 animate-spin"}):(0,e.jsx)(ac,{className:"w-4 h-4"})})]})})]})]})]})}a.s(["AIAdvisor",()=>ai],73331)}];

//# sourceMappingURL=components_ai_Advisor_tsx_18c1fcb7._.js.map