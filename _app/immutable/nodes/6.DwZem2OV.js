import"../chunks/Bg9kRutz.js";import{C as Z,Z as ca,ai as ma,aj as fa,$ as ua,b as pa,ak as xa,al as _a,R as ha,ah as j,a6 as J,a7 as Q,a8 as ba,a4 as wa,g as r,am as q,h as d,i as l,a5 as z,f as Ta,s as _,an as $}from"../chunks/CHWDBmxl.js";import{a as ga,d as Ra,s as g,e as Sa}from"../chunks/olanAJgA.js";import{i as ya,b as ka}from"../chunks/BNdDISCf.js";import{e as aa,i as ta}from"../chunks/BsxqoRla.js";import{c as Ca,a as O,t as Y}from"../chunks/Dl3gGF1H.js";import{s as ea}from"../chunks/CREcswMh.js";import{l as u}from"../chunks/BL69SvuN.js";const Ea=()=>performance.now(),w={tick:t=>requestAnimationFrame(t),now:()=>Ea(),tasks:new Set};function sa(){const t=w.now();w.tasks.forEach(a=>{a.c(t)||(w.tasks.delete(a),a.f())}),w.tasks.size!==0&&w.tick(sa)}function Pa(t){let a;return w.tasks.size===0&&w.tick(sa),{promise:new Promise(e=>{w.tasks.add(a={c:t,f:e})}),abort(){w.tasks.delete(a)}}}function B(t,a){t.dispatchEvent(new CustomEvent(a))}function Ha(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function ra(t){const a={},e=t.split(";");for(const s of e){const[v,o]=s.split(":");if(!v||o===void 0)break;const p=Ha(v.trim());a[p]=o.trim()}return a}const Aa=t=>t;function Fa(t,a,e,s){var v=(t&xa)!==0,o="both",p,R=a.inert,C=a.style.overflow,c,n;function x(){var f=ba,S=Z;J(null),Q(null);try{return p??(p=e()(a,(s==null?void 0:s())??{},{direction:o}))}finally{J(f),Q(S)}}var m={is_global:v,in(){a.inert=R,B(a,"introstart"),c=M(a,x(),n,1,()=>{B(a,"introend"),c==null||c.abort(),c=p=void 0,a.style.overflow=C})},out(f){a.inert=!0,B(a,"outrostart"),n=M(a,x(),c,0,()=>{B(a,"outroend"),f==null||f()})},stop:()=>{c==null||c.abort(),n==null||n.abort()}},h=Z;if((h.transitions??(h.transitions=[])).push(m),ga){var b=v;if(!b){for(var i=h.parent;i&&i.f&ca;)for(;(i=i.parent)&&!(i.f&ma););b=!i||(i.f&fa)!==0}b&&ua(()=>{pa(()=>m.in())})}}function M(t,a,e,s,v){var o=s===1;if(_a(a)){var p,R=!1;return ha(()=>{if(!R){var f=a({direction:o?"in":"out"});p=M(t,f,e,s,v)}}),{abort:()=>{R=!0,p==null||p.abort()},deactivate:()=>p.deactivate(),reset:()=>p.reset(),t:()=>p.t()}}if(e==null||e.deactivate(),!(a!=null&&a.duration))return v(),{abort:j,deactivate:j,reset:j,t:()=>s};const{delay:C=0,css:c,tick:n,easing:x=Aa}=a;var m=[];if(o&&e===void 0&&(n&&n(0,1),c)){var h=ra(c(0,1));m.push(h,h)}var b=()=>1-s,i=t.animate(m,{duration:C});return i.onfinish=()=>{var f=(e==null?void 0:e.t())??1-s;e==null||e.abort();var S=s-f,y=a.duration*Math.abs(S),N=[];if(y>0){var E=!1;if(c)for(var P=Math.ceil(y/16.666666666666668),k=0;k<=P;k+=1){var A=f+S*x(k/P),L=ra(c(A,1-A));N.push(L),E||(E=L.overflow==="hidden")}E&&(t.style.overflow="hidden"),b=()=>{var T=i.currentTime;return f+S*x(T/y)},n&&Pa(()=>{if(i.playState!=="running")return!1;var T=b();return n(T,1-T),!0})}i=t.animate(N,{duration:y,fill:"forwards"}),i.onfinish=()=>{b=()=>s,n==null||n(s,1-s),v()}},{abort:()=>{i&&(i.cancel(),i.effect=null,i.onfinish=j)},deactivate:()=>{v=j},reset:()=>{s===0&&(n==null||n(1,0))},t:()=>b()}}const ja=t=>t;function Na(t,{delay:a=0,duration:e=400,easing:s=ja}={}){const v=+getComputedStyle(t).opacity;return{delay:a,duration:e,easing:s,css:o=>`opacity: ${o*v}`}}var La=Y('<span class="text-sm glass text-white rounded-xl px-6 py-1 uppercase serif mr-2 mb-2 md:mr-6"> </span>'),$a=Y('<div class="w-[75vw] md:w-[45vw] ml-10 h-[45vh] shrink-0 snap-end bg-center bg-cover"></div>'),Oa=Y('<div class="flex h-full w-full overflow-auto no-scrollbar items-center scroll-smooth snap-x snap-proximity"><div class="relative bg-center bg-cover h-full w-full md:w-4/5 shrink-0"><div class="pb-1 absolute bottom-8 md:bottom-0 text-center w-full text-white"><div class="flex justify-center flex-wrap"></div> <h1 class="text-4xl md:text-[7rem] leading-none font-black"> </h1> <h3 class="text-2xl font-black"> </h3></div></div> <div class="w-full md:w-1/5 serif text-sm uppercase p-4 shrink-0 snap-end"><div><div class="flex"><span class="w-[6rem]">Name</span> <span> </span></div> <div class="flex"><span class="w-[6rem]">Location</span> <span> </span></div> <div class="flex"><span class="w-[6rem]">Status</span> <span> </span></div> <div class="flex"><span class="w-[6rem]">Year</span> <span> </span></div></div> <p class="mt-[10rem]"> </p></div> <!> <button class="w-[30vw] h-full flex flex-col justify-center bg-black text-white pl-8 pr-16 snap-end md:snap-none">Next Project</button></div>');function Ga(t){let a=q(null),e=[{name:"Aryan Hospital",location:"Panipat, Haryana",status:"Completed",year:"2023",description:"Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",images:[u,u,u,u,u],tags:["Hospital","Commercial","Public"]},{name:"Vihaan Hospital",location:"Panipat, Haryana",status:"Completed",year:"2023",description:"Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",images:[u,u,u,u,u],tags:["Hospital","Commercial","Public"]},{name:"Rihaan Hospital",location:"Panipat, Haryana",status:"Completed",year:"2023",description:"Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text, Some Random Text",images:[u,u,u,u,u],tags:["Hospital","Commercial","Public"]}],s=q(0),v=q(!0),o=Ta(()=>e[r(s)]);const p=x=>{if(!r(a)||!r(v))return;const m=x.deltaX+x.deltaY;m+r(a).scrollLeft>=r(a).scrollWidth-r(a).clientWidth?R():r(a).scrollBy({left:m*30,behavior:"smooth"}),x.preventDefault()},R=()=>{r(a)&&($(v,!1),$(s,(r(s)+1)%e.length),r(a).scrollTo({left:0}),setTimeout(()=>{$(v,!0)},600))};var C=Ca(),c=wa(C);{var n=x=>{var m=Oa(),h=d(m),b=d(h),i=d(b);aa(i,21,()=>r(o).tags,ta,(F,W)=>{var H=La(),da=d(H,!0);l(H),z(()=>g(da,r(W))),O(F,H)}),l(i);var f=_(i,2),S=d(f,!0);l(f);var y=_(f,2),N=d(y,!0);l(y),l(b),l(h);var E=_(h,2),P=d(E),k=d(P),A=_(d(k),2),L=d(A,!0);l(A),l(k);var T=_(k,2),D=_(d(T),2),ia=d(D,!0);l(D),l(T);var I=_(T,2),G=_(d(I),2),oa=d(G,!0);l(G),l(I);var K=_(I,2),U=_(d(K),2),na=d(U,!0);l(U),l(K),l(P);var V=_(P,2),la=d(V,!0);l(V),l(E);var X=_(E,2);aa(X,17,()=>r(o).images,ta,(F,W)=>{var H=$a();z(()=>ea(H,"style",`background-image: url('${r(W)??""}');`)),O(F,H)});var va=_(X,2);va.__click=R,l(m),ka(m,F=>$(a,F),()=>r(a)),z(()=>{ea(h,"style",`background-image: url('${r(o).images[0]??""}');`),g(S,r(o).name),g(N,r(o).location),g(L,r(o).name),g(ia,r(o).location),g(oa,r(o).status),g(na,r(o).year),g(la,r(o).description)}),Sa("wheel",m,p),Fa(3,m,()=>Na,()=>({duration:300})),O(x,m)};ya(c,x=>{r(v)&&x(n)})}O(t,C)}Ra(["click"]);export{Ga as component};
