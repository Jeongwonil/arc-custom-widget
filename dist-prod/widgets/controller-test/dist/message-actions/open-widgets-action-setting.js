System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var i={},n={},o={},l={},a={},r={},s={},d={};return{setters:[function(e){i.FixedPosition=e.FixedPosition,i.Immutable=e.Immutable,i.React=e.React,i.ReactRedux=e.ReactRedux,i.css=e.css,i.hooks=e.hooks,i.polished=e.polished},function(e){n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){o.MultiSelect=e.MultiSelect,o.Option=e.Option,o.Select=e.Select,o.defaultMessages=e.defaultMessages},function(){},function(e){a.searchUtils=e.searchUtils},function(e){r.styled=e.styled},function(){},function(){}],execute:function(){e((()=>{var e={5508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},2782:(e,t,i)=>{"use strict";i.d(t,{useControlledWidgets:()=>s});var n,o=i(9244),l=(i(4108),i(9298),i(1496));!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(n||(n={}));i(4321),i(6237);var a,r=i(1888);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(a||(a={}));i(5562),i(9254),i(4337);i(5508);r.styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--ref-palette-neutral-500);
  margin: 16px 0;
`,o.css`
    font-size: 13px;
    font-weight: lighter;
    .setting-row-item {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      > span.jimu-radio {
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
      > label {
        margin-bottom: 0;
      }
    }
    .jimu-multi-select {
      width: 100%;
      > .jimu-dropdown {
        width: 100%;
      }
      > .jimu-menu-item {
        width: 100%;
        height: ${o.polished.rem(26)};
      }
    }
  `;const s=(e,t)=>{const i=(e=>{var t,i,n;let o=(null!==(n=null===(i=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===i?void 0:i.call(t))&&void 0!==n?n:[]).map((t=>{var i;return null===(i=e.content)||void 0===i?void 0:i[t]}));return o=o.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),o.map((e=>e.id)).map((t=>{var i,n;return null===(n=null===(i=e.content)||void 0===i?void 0:i[t])||void 0===n?void 0:n.widgetId}))})(o.ReactRedux.useSelector((i=>{var n,o,a,r;const s=null===(a=null===(o=null===(n=(i=i.appStateInBuilder).appConfig.widgets)||void 0===n?void 0:n[e])||void 0===o?void 0:o.layouts)||void 0===a?void 0:a[t],d=i.browserSizeMode,c=i.appConfig.mainSizeMode,u=l.searchUtils.findLayoutId(s,d,c);return null===(r=i.appConfig.layouts)||void 0===r?void 0:r[u]}))),n=o.ReactRedux.useSelector((e=>e.appStateInBuilder.appConfig.widgets));return(0,o.Immutable)(i||[]).map((e=>{var t;return{label:null===(t=n[e])||void 0===t?void 0:t.label,value:e}}))}},9254:(e,t,i)=>{"use strict";i.d(t,{bC:()=>o});var n=i(9244);const o="controller";n.FixedPosition.TopRight,document.body,document},6237:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});const n={_widgetLabel:"Widget Controller",behavior:"Behavior",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",textFormatOverride:"Text",iconBackgroundOverride:"Icon",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances.",widgetPanelArrangment:"Widget panel arrangement",panelFloating:"Floating",indicator:"Indicator",messageAction_openWidget:"Open widget"}},9244:e=>{"use strict";e.exports=i},4108:e=>{"use strict";e.exports=l},1496:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=r},4321:e=>{"use strict";e.exports=o},9298:e=>{"use strict";e.exports=n},5562:e=>{"use strict";e.exports=s},4337:e=>{"use strict";e.exports=d}},t={};function c(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,c),o.exports}c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var u={};return(()=>{"use strict";c.r(u),c.d(u,{default:()=>a});var e=c(9244),t=c(9298),i=c(4321),n=c(2782),o=c(9254),l=c(6237);function a(a){const{actionId:r,widgetId:s,onSettingChange:d}=a,c=a.config||(0,e.Immutable)({widgetIds:[],controllerId:s}),u=(0,n.useControlledWidgets)(s,o.bC),g=e.React.useCallback(((e,t)=>{d({actionId:r,config:c.set("widgetIds",[t.props.value])})}),[r,c,d]),p=e.React.useCallback(((e,t,i)=>{d({actionId:r,config:c.set("widgetIds",i)})}),[r,c,d]),m=e.ReactRedux.useSelector((e=>{var t;const i=e.appStateInBuilder.appConfig.widgets[s].config;return null===(t=null==i?void 0:i.behavior)||void 0===t?void 0:t.onlyOpenOne})),v=e.hooks.useLatest(c);e.React.useEffect((()=>{const e=v.current;m&&e.widgetIds.length>1&&d({actionId:r,config:e.set("widgetIds",[e.widgetIds[0]])}),m&&0===e.widgetIds.length&&u.length>0&&d({actionId:r,config:e.set("widgetIds",[u[0].value])})}),[r,v,u,m,d]);const f=e.hooks.useTranslation(l.A,i.defaultMessages),h=e.React.useCallback((e=>f("numSelected",{number:e.length})),[f]);return e.React.createElement("div",null,e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,{label:f("messageAction_openWidget"),flow:"wrap"},m&&e.React.createElement(i.Select,{value:c.widgetIds[0],onChange:g},u.map((t=>e.React.createElement(i.Option,{value:t.value,key:t.value},t.label)))),!m&&e.React.createElement(i.MultiSelect,{items:u,values:c.widgetIds,className:"pt-1 custom-multiselect",fluid:!0,displayByValues:h,onClickItem:p}))))}})(),u})())}}}));