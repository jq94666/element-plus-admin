import{d as a,u as e,k as t,v as r}from"./index.8705dbdf.js";var s=a({name:"Redirect",setup(){const a=e(),r=t(),{pathMatch:s}=a.params;r.replace({path:"string"==typeof s?`/${s}`:`/${s.join("/")}`})},render:()=>r("div")});export default s;
