System.register(["jimu-core/react","jimu-core"],(function(e,t){var a={},n={};return{setters:[function(e){a.useEffect=e.useEffect,a.useState=e.useState},function(e){n.DataRecordsSelectionChangeMessage=e.DataRecordsSelectionChangeMessage,n.MessageManager=e.MessageManager,n.React=e.React}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=n},972:e=>{"use strict";e.exports=a}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{__set_webpack_public_path__:()=>n,default:()=>a});var e=l(972),t=l(244);function a(a){const[n,l]=(0,e.useState)(null);(0,e.useEffect)((()=>{const e={dataSource:null,getData:()=>({id:"",name:"",zip:""}),setData:e=>{},clone:()=>null,getDataBeforeMapping:()=>null,getFieldValue:e=>null};t.MessageManager.getInstance().publishMessage(new t.DataRecordsSelectionChangeMessage(a.id,[e])),console.log("\ube48 \uba54\uc2dc\uc9c0 \uc804\uc1a1 \uc644\ub8cc:",e)}),[a.id]);return t.React.createElement("div",null,t.React.createElement("h3",null,"\uba54\uc2dc\uc9c0 \uc804\uc1a1 \uc704\uc82f"),t.React.createElement("p",null,"\ud604\uc7ac \uc704\uc82f ID: ",a.id),t.React.createElement("p",null,"\uc784\uc758\uc758 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),t.React.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},t.React.createElement("thead",null,t.React.createElement("tr",null,t.React.createElement("th",{style:{border:"1px solid #ddd",padding:"8px"}},"ID"),t.React.createElement("th",{style:{border:"1px solid #ddd",padding:"8px"}},"\uc774\ub984"),t.React.createElement("th",{style:{border:"1px solid #ddd",padding:"8px"}},"\uc6b0\ud3b8\ubc88\ud638"))),t.React.createElement("tbody",null,[{id:"1",name:"John Doe",zip:"12345"},{id:"2",name:"Jane Doe",zip:"67890"},{id:"3",name:"Kane Doe",zip:"44444"}].map((e=>t.React.createElement("tr",{key:e.id,onClick:()=>(e=>{l(e);const n={dataSource:null,getData:()=>({id:e.id,name:e.name,zip:e.zip}),setData:e=>{},clone:()=>null,getDataBeforeMapping:()=>null,getFieldValue:t=>e[t]};t.MessageManager.getInstance().publishMessage(new t.DataRecordsSelectionChangeMessage(a.id,[n])),console.log("\uba54\uc2dc\uc9c0 \uc804\uc1a1 \uc644\ub8cc:",n)})(e),style:{cursor:"pointer",backgroundColor:(null==n?void 0:n.id)===e.id?"#f0f8ff":"transparent"}},t.React.createElement("td",{style:{border:"1px solid #ddd",padding:"8px"}},e.id),t.React.createElement("td",{style:{border:"1px solid #ddd",padding:"8px"}},e.name),t.React.createElement("td",{style:{border:"1px solid #ddd",padding:"8px"}},e.zip)))))),n&&t.React.createElement("p",null,"\uc120\ud0dd\ub41c \ub370\uc774\ud130: ",n.name," (",n.zip,")"))}function n(e){l.p=e}})(),r})())}}}));