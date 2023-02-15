import{_ as O}from"./query.e7d1900b.js";import{g as R,l as z,q as D}from"./CloseButton.cc3459e4.js";import{a as E}from"./HomePage.vue.6b129573.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import{X as Z,u as p,F as H,R as G,v as Q,M as y,N as g,P as t,a2 as U,$ as X,y as i,Y,Z as J,z as K,O as W,U as tt,Q as et,ae as at,ab as st,ac as rt}from"./runtime-core.esm-bundler.8a841934.js";const v=m=>(st("data-v-429c75f6"),m=m(),rt(),m),ot={class:"mx-auto flex flex-col justify-around min-h-[95vh] gap-0 lg:flex-row lg:min-h-[80vh] lg:justify-center lg:items-center lg:gap-[5vw] lg:max-w-6xl"},lt=v(()=>t("h1",{class:"font-Special text-primary-700 text-6xl leading-[0.75] tracking-tight lg:text-8xl lg:leading-[0.65] xl:text-[8rem] xl:leading-[0.65] dark:text-primary-400"}," Saarluse kompass ",-1)),nt={class:"relative flex flex-col grow-0 justify-center items-center order-1 lg:order-2"},ct={viewBox:"0 0 100 100",class:"h-[65vmin] w-[65vmin] lg:h-[55vmin] lg:w-[55vmin]"},it=v(()=>t("filter",{id:"displacementFilter"},[t("feTurbulence",{type:"turbulence",baseFrequency:"0.08",numOctaves:"7",result:"turbulence"}),t("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"1.25",xChannelSelector:"R",yChannelSelector:"B"})],-1)),dt={style:{filter:"url(#displacementFilter)"}},pt={transform:"translate(50,50)"},mt=at('<circle r="10" stroke-width="0.5" class="fill-none stroke-secondary-500" data-v-429c75f6></circle><polyline points="0,-46 7,0 0,25 -7,0" class="fill-secondary-800" data-v-429c75f6></polyline><polyline points="0,-35 5,0 -5,0" class="fill-primary-200 dark:fill-primary-600" data-v-429c75f6></polyline><circle r="8" class="fill-secondary-800" data-v-429c75f6></circle><circle r="6.5" class="fill-secondary-300 dark:fill-primary-600" data-v-429c75f6></circle><path d="M 0 -1.5 L 0,1.5 -1.5,0 Z" transform="translate(0,-3)" class="fill-secondary-800" data-v-429c75f6></path><path d="M 0 -1.5 L 0,1.5 -1.5,0 Z" transform="translate(-3,0) rotate(90)" class="fill-secondary-800" data-v-429c75f6></path>',7),ut=["d"],ft=["cx","cy","data-idx","onClick"],yt={class:"p-2 rounded border bg-white/70 text-primary-800 dark:bg-secondary-900 dark:text-primary-200 dark:border-secondary-800"},gt=v(()=>t("button",{class:"text-xl bg-primary-700 text-primary-50 px-4 py-2 -mt-1 rounded"},"LOE",-1)),ht={__name:"HomePage",async setup(m){let u,k;const b=(e,s=1,a=0)=>Array.from({length:e}).map((c,r)=>typeof s=="function"?s(r+a):r*s+a),h=(e,s)=>[Math.cos((e-90)*(Math.PI/180))*s,Math.sin((e-90)*(Math.PI/180))*s].map(a=>C(a)),C=(e,s=8)=>parseFloat(e.toFixed(s)),N=(e,s,a=[0,0])=>{const[c,r]=a;return b(e,l=>l*(360/e)).map(l=>h(l,s)).map(([l,f])=>[l+c,f+r])},j=(e,s,a,c,r)=>{const l=h(r,a),f=h(c,a),q=r-c<=180?"0":"1";return["M",l[0],l[1],"A",a,a,0,q,0,f[0],f[1]].join(" ")},{data:_}=([u,k]=Z(()=>R("stories",async()=>D("_lood").only(["description","_path"]).find())),u=await u,k(),u),x=_.value.length,A=360/x,w=p(0),d=p(0);let S=0,o=p(0);const F=p(N(x,47)),B=p(j(0,0,3,0,270));let n;const I=()=>A*o.value-d.value,L=()=>{o.value=Math.round(Math.random()*x)},P=()=>{w.value=I(),S=d.value,n.seek(0),n.pause(),n.remove(d),n.delay=0,n.duration=0,n.add({targets:d,value:[S,`+=${w.value+Math.floor(Math.random()*4)*360}`],duration:1400}),n.restart()},V=H(()=>`transform: rotate(${d.value}deg)`),M=z(),$=()=>{M.value=!M.value};return G(()=>{n=E.timeline({easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)",direction:"normal",duration:2e3,autoplay:!1}),o.value=Math.floor(Math.random()*44)}),Q(o,e=>{P()}),(e,s)=>{const a=O;return y(),g("section",ot,[t("div",{class:"flex flex-col justify-center gap-6 order-2 grow text-center lg:order-1 lg:text-left lg:items-start lg:gap-12"},[lt,t("p",{class:"font-Normal text-secondary-900 dark:text-secondary-400"},[U("Siit leiad sa hulga materjale, mis aitavad sul saarlust paremini mõista. Alustuseks võid lihtsalt kompassil klikkida või valida "),t("a",{class:"text-primary-600 cursor-pointer dark:text-rimary-400",onClick:$},"sobiv lugu nimekirjast")])]),t("div",nt,[(y(),g("svg",ct,[it,t("g",dt,[t("g",pt,[t("g",{style:X(i(V))},[mt,t("path",{d:i(B),"stroke-width":"1",class:"fill-none stroke-secondary-800"},null,8,ut)],4)]),t("g",{transform:"translate(50,50)"},[t("circle",{r:"12",onClick:L,style:{cursor:"pointer"},fill:"hsla(0,0%,100%,0)"})]),(y(!0),g(Y,null,J(i(F),(c,r)=>(y(),g("circle",{cx:c[0]+50,cy:c[1]+50,r:"1","data-idx":r,key:`point+${r}`,onClick:l=>K(o)?o.value=r:o=r,class:"compass-story fill-primary-600"},null,8,ft))),128))])])),W(a,{to:i(_)[i(o)]._path,class:"static top-1/2 left-1/6 w-full flex flex-col justify-center items-center mt-2 text-xl text-center leading-none font-Special cursor-pointer lg:absolute lg:w-4/6 lg:mt-20"},{default:tt(()=>[t("p",yt,et(i(_)[i(o)].description),1),gt]),_:1},8,["to"])])])}}},Mt=T(ht,[["__scopeId","data-v-429c75f6"]]);export{Mt as default};