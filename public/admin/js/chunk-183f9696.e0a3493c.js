(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-183f9696"],{2523:function(e,t,n){"use strict";var l=n("ac3c"),u=n.n(l);u.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},ac3c:function(e,t,n){},e132:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",{attrs:{id:e.name,value:e.value,disabled:e.readonly,options:e.choices,placeholder:e.options.placeholder},on:{input:function(t){return e.$emit("input",t)}}})},u=[],i=(n("f559"),n("456d"),n("ac6a"),n("8db2")),a=n.n(i),o={mixins:[a.a],computed:{choices:function(){var e=this,t=this.$store.state.collections||{},n=this.options.include_system,l={};return Object.keys(t).forEach((function(t){!1===n&&t.startsWith("directus_")||(l[t]=e.$helpers.formatTitle(t))})),l}}},c=o,r=(n("2523"),n("2877")),s=Object(r["a"])(c,l,u,!1,null,"41b10c3c",null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-183f9696.e0a3493c.js.map