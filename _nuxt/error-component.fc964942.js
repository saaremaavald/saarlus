import{_ as o}from"./CloseButton.cc3459e4.js";import{C as n,M as f,T as g,a9 as E,aa as k,y as s}from"./runtime-core.esm-bundler.8a841934.js";import"./query.e7d1900b.js";import"./_plugin-vue_export-helper.c27b6911.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:e}=c;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),a=r===404,i=e.statusMessage??(a?"Page Not Found":"Internal Server Error"),u=e.message||e.toString(),p=void 0,m=n(()=>o(()=>import("./error-404.5584827a.js"),["./error-404.5584827a.js","./query.e7d1900b.js","./runtime-core.esm-bundler.8a841934.js","./entry.ac26a88d.js","./CloseButton.cc3459e4.js","./_plugin-vue_export-helper.c27b6911.js","./CloseButton.172365eb.css","./index.288f722b.js","./entry.73b9426f.css","./error-404.97011ca1.css"],import.meta.url).then(t=>t.default||t)),_=n(()=>o(()=>import("./error-500.6509d8ff.js"),["./error-500.6509d8ff.js","./entry.ac26a88d.js","./runtime-core.esm-bundler.8a841934.js","./query.e7d1900b.js","./CloseButton.cc3459e4.js","./_plugin-vue_export-helper.c27b6911.js","./CloseButton.172365eb.css","./index.288f722b.js","./entry.73b9426f.css","./error-500.82e14f63.css"],import.meta.url).then(t=>t.default||t)),l=a?m:_;return(t,d)=>(f(),g(s(l),E(k({statusCode:s(r),statusMessage:s(i),description:s(u),stack:s(p)})),null,16))}},M=P;export{M as default};