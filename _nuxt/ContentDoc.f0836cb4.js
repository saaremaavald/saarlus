import{A as s,n as y}from"./query.e7d1900b.js";import{u}from"./head.0a57d82b.js";import g from"./ContentRenderer.398c8e71.js";import v from"./ContentQuery.f0e9f30e.js";import{E as w,ad as C,h as o}from"./runtime-core.esm-bundler.8a841934.js";import"./entry.ac26a88d.js";import"./CloseButton.cc3459e4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.288f722b.js";import"./ContentRendererMarkdown.729f7289.js";const j=w({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=C(),{tag:m,excerpt:i,path:d,query:r,head:a}=f,c={...r||{},path:d||(r==null?void 0:r.path)||s(y().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(v,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var p;return a&&u(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:h,excerpt:i,...this.$attrs})}:({data:t})=>(a&&u(t),o(g,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{j as default};