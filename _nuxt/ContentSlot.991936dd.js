import{p as g}from"./state.bdf7fec3.js";import{E as h,a8 as c,F as m,h as a,q as y}from"./runtime-core.esm-bundler.4dba96d9.js";import"./query.183e7275.js";import"./_plugin-vue_export-helper.c27b6911.js";const F=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=y(),{between:s,default:l}=c(),u=m(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:s,parent:i}},render({use:e,unwrap:i,fallbackSlot:s,between:l,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():a("div");if(!i)return[o()];const{flatUnwrap:d}=g(),p=d(o(),u);return l?p.flatMap((t,r)=>r===0?[t]:[l(),t]):p.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return a("div")}}});export{F as default};