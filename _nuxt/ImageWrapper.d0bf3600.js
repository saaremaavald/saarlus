import{x as c,A as l,f as p}from"./CloseButton.4e89f442.js";/* empty css                         */import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{M as a,N as r,P as g,O as u,_ as d,$ as f}from"./runtime-core.esm-bundler.0edcc7e6.js";import"./query.28590718.js";const _={class:"icon flex justify-center items-center w-20 h-20 mb-20 rounded-full bg-primary-800 opacity-0 transition"},b={__name:"ImageWrapper",props:{src:{type:String,default:""},imgpath:{type:String,default:"../images/stories/"},height:{type:String,default:"75vh"},classes:{type:String,default:""},bgSize:{type:String,default:"cover"},bgRepeat:{type:String,default:"no-repeat"},bgPos:{type:String,default:"50% 50%"},zoom:{type:Boolean,default:!1}},setup(t){const e=t,o=c(),n=l(),s=()=>{n.value=e.imgpath+e.src,o.value=!o.value};return(h,y)=>{const i=p;return a(),r("div",{class:"flex justify-center items-center bg-gradient-to-b from-blue-800 via-green-600 to-blue-700 shadow",style:f({background:`url(${e.imgpath}${e.src})`,"background-size":e.bgSize,"background-repeat":e.bgRepeat,"background-position":e.bgPos,height:e.height,width:"100%","background-blend-mode":"overlay"})},[t.zoom?(a(),r("div",{key:0,class:"zoomable flex justify-center items-end w-full h-full cursor-pointer hover:bg-primary-700/5 transition",onClick:s},[g("div",_,[u(i,{name:"icon-park-outline:zoom-in",class:"svg text-white stroke-current text-4xl"})])])):d("",!0)],4)}}},w=m(b,[["__scopeId","data-v-d37cf942"]]);export{w as default};
