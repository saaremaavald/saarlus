import{l as u,b as m,c as p,d as r,T as f}from"./entry.bce2c9da.js";import{n as y}from"./query.183e7275.js";import{E as i,h as c,F as d,r as L,y as _}from"./runtime-core.esm-bundler.4dba96d9.js";import"./state.bdf7fec3.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.288f722b.js";const h=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await u[n.name]().then(a=>a.default||a);return()=>c(e,t.attrs,t.slots)}}),w=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=L("_route"),a=e===y()?m():e,o=d(()=>_(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in u,l=a.meta.layoutTransition??p;return r(f,s&&l,{default:()=>r(h,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{w as default};