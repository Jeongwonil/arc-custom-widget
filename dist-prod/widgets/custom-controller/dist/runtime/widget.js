System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},a={},n={},i={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ContainerType=e.ContainerType,o.ErrorBoundary=e.ErrorBoundary,o.FixedPosition=e.FixedPosition,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.FloatingPanel=e.FloatingPanel,a.Icon=e.Icon,a.Loading=e.Loading,a.MobilePanel=e.MobilePanel,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){n.styled=e.styled},function(e){i.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={9859:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M4 4h2v1H4zM8 4h2v1H8zM14 4h-2v1h2zM15 4h1v2h-1zM16 8h-1v2h1zM4 14h1v2H4zM5 6H4v2h1zM4 10h1v2H4zM16 12h-1v2h1zM16 15v1h-2v-1zM12 15h-2v1h2zM6 15h2v1H6z"></path><path fill="#000" fill-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" clip-rule="evenodd"></path></svg>'},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},9244:e=>{"use strict";e.exports=o},1496:e=>{"use strict";e.exports=i},1888:e=>{"use strict";e.exports=n},4321:e=>{"use strict";e.exports=a}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{__set_webpack_public_path__:()=>oe,default:()=>te});var e=r(9244),t=r(4321);const o="controller",a={sm:24,default:32,lg:48},n={width:150,height:120},i={width:300,height:300},s={x:70,y:70},d={x:30,y:30},c=(e.FixedPosition.TopRight,[{name:"preventOverflow",options:{boundary:document.body,rootBoundary:document}},{name:"offset",options:{offset:[0,16]}}]);var u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const p=(e,t,o)=>{let n=a[e];t&&(n+=21);return n+=2*v(e,o),n},v=(e,t)=>"circle"===t?"sm"===e||"default"===e||"lg"===e?0:void 0:0,g={none:"0",sm:"0",default:"var(--sys-shape-1)",lg:"var(--sys-shape-2)"},h=e.React.forwardRef(((o,a)=>{var n;const{label:i,className:r,title:l,showLabel:s,showIndicator:d=!0,showTooltip:c=!0,labelGrowth:h=0,icon:m,marker:f,onClick:b,onMarkerClick:y,avatar:w,autoFlip:x,active:S,editDraggable:R,disabled:I,widgetid:k}=o,C=u(o,["label","className","title","showLabel","showIndicator","showTooltip","labelGrowth","icon","marker","onClick","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled","widgetid"]),j=w||{},{shape:M,style:z}=j,O=u(j,["shape","style"]),A=(null==O?void 0:O.size)||"default",E=((t,o,a,n,i)=>e.React.useMemo((()=>{p(t,o,n);const i=v(t,n);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: 5rem !important;
      height: 5rem !important;
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${i}px;
        position: relative;
        text-align: center;
        &:hover .marker {
          visibility: visible;
        }
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: 3rem !important;
            min-height: 3rem !important;
          }
          visibility: hidden;
        }
      }
      ${a?".avatar.active {\n        .avatar-button, .marker {\n          transform: translateY(-7px);\n        }\n        .marker {\n          z-index: 1;\n        }\n        ::after {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%);\n          border: 1px solid var(--ref-palette-white);\n          border-radius: 3px;\n          width: 6px;\n          height: 3px;\n          background-color: var(--sys-color-primary-main);\n          box-sizing: content-box;\n        }\n      }":""}
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(10)};
        cursor: default;
      }
    `}),[t,o,n,i,a]))(A,s,d,M,h),L=g[A],N=(0,e.jsx)(t.Button,Object.assign({"data-widgetid":k,icon:!0,active:S,className:(0,e.classNames)("avatar-button",{disabled:I}),ref:a},O,{style:Object.assign({borderRadius:"circle"===M?"50%":L},z),onClick:b}),(0,e.jsx)(t.Icon,{style:{width:"24px",height:"24px"},color:"string"!=typeof m&&(null===(n=m.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof m?m.svg:m,autoFlip:x}));return(0,e.jsx)("div",Object.assign({},C,{className:(0,e.classNames)("avatar-card",`${r} avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!R,active:S},"avatar tool-drag-handler")},f&&(0,e.jsx)(t.Button,{className:"marker",size:"lg",icon:!0,onClick:y},(0,e.jsx)(t.Icon,{size:8,icon:f})),c?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},N):N),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:S})},i))})),m=(t,o,a=0,n=a,i)=>{let r=((t,o=500,a=!1,n)=>{var i,r;const l=a?"clientHeight":"clientWidth",[s,d]=e.React.useState(null!==(r=null===(i=t.current)||void 0===i?void 0:i[l])&&void 0!==r?r:0),c=!n&&!window.jimuConfig.isInBuilder,u=e.hooks.useLatest((()=>{const e=t.current[l]||0;d(e)})),p=e.React.useMemo((()=>e.lodash.debounce((()=>{u.current()}),o,{leading:!0})),[]);return e.React.useEffect((()=>{if(c)return;const e=t.current;e&&p();const o=new ResizeObserver(p);return o.observe(e),()=>{o.disconnect(),p.cancel()}}),[t,p,c]),s})(t,500,o,!i);r+=a,r=Math.max(r,n);const l=((t=500,o=!1)=>{const a=o?"clientHeight":"clientWidth",[n,i]=e.React.useState((()=>document.body[a]-40));e.hooks.useUpdateEffect((()=>{i(document.body[a]-40)}),[a]);const r=e.React.useMemo((()=>e.lodash.debounce((()=>{i(document.body[a]-40)}),t)),[a,t]);return e.React.useEffect((()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[r]),n})(500,o);return r=i?l:Math.min(r,l),r},f=(e,t,o)=>{let a=e,n=t;return n-a>o?n=e+o:n-a<o&&(a=0,n=a+o),[a,n]};var b=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const y=[],w=e.React.forwardRef(((o,a)=>{const{scrollRef:n,className:i,lists:r=y,createItem:l,vertical:s,itemLength:d,space:c,onChange:u,autoHideArrow:p,minLength:v=d,autoScrollEnd:g,autoSize:h,onScrollStatusChange:w}=o,x=b(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),S=e.hooks.useTranslation(t.defaultMessages),[R,I]=e.hooks.useForwardRef(a),{start:k,end:C,disablePrevious:j,disableNext:M,hideArrow:z,scroll:O}=(t=>{var o;const{rootRef:a,lists:n,itemLength:i,autoSize:r,vertical:l,space:s,minLength:d,autoScrollEnd:c}=t,u=null!==(o=null==n?void 0:n.length)&&void 0!==o?o:0,p=m(a,l,s,d,r),v=Math.floor(p/i)>u?u:Math.floor(p/i),[g,h]=e.React.useState(f(0,0,v)[0]),[b,y]=e.React.useState(f(0,0,v)[1]),w=e.hooks.useLatest(g),x=e.hooks.useLatest(b),S=b-g>=u,R=0===g,I=b===u;e.React.useEffect((()=>{if(0===p)return;const[e,t]=f(x.current,w.current,v);h(e),y(t)}),[v,p,x,w]);const k=e.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:v;let a=0,n=0;e?(a=g-o,a<0?(a=0,n=a+v):n=b-o):(n=b+o,n>u?(n=u,a=n-v):a=g+o),h(a),y(n)})),C=e.React.useRef([]),j=e.hooks.useEventCallback((()=>{const e=u>0&&C.current.length>0&&n[n.length-1]!==C.current[C.current.length-1];if(c&&e&&C.current.length>u){let e=0,t=0;t=u,e=t-v,e=Math.max(0,e),h(e),y(t)}}));return e.React.useEffect((()=>{j(),C.current=n}),[n,j]),{start:g,end:b,disablePrevious:R,disableNext:I,hideArrow:S,scroll:k}})({rootRef:R,lists:r,itemLength:d,autoSize:h,vertical:s,space:c,minLength:v,autoScrollEnd:g}),A=r.slice(k,C),E=((t,o,a,n,i)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button.previous, button.next {
      flex-shrink: 0;
      display: ${i?"none":"block"};
    }
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      ${t?`min-height: ${a}px;`:`min-width: ${a}px;`} 
      max-height: ${n?"100%":"calc(100% - 20px)"};
      max-width: ${n?"100%":"calc(100% - 20px)"};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?o+"px":"unset"};
          margin-left: ${t?"unset":o+"px"};
        }
      }
    }
`)(s,c,v,h,z);e.React.useEffect((()=>{null==w||w(z,j,M)}),[M,j,z,w]),e.React.useEffect((()=>{t.utils.setRef(n,O)}),[O,n]);return(0,e.jsx)(t.NavButtonGroup,Object.assign({},x,{css:E,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),O(e,!0)},disablePrevious:j,disableNext:M,previousAriaLabel:S("previous"),nextAriaLabel:S("next"),className:(0,e.classNames)("scroll-list",i)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:I},r.map((t=>{const o=!A.includes(t);return l(t,(0,e.classNames)("scroll-list-item",{"d-none":o}))}))))}));var x=r(2838),S=r.n(x);const R=o=>{var a,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showIndicator:d,showTooltip:c,labelGrowth:u,avatar:p,onClick:v,active:g,editDraggable:m,className:f}=o,b=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return b?e.React.createElement(h,{"data-widgetid":l,widgetid:l,className:`widget-avatar-card ${f}`,showLabel:s,showIndicator:d,showTooltip:c,labelGrowth:u,avatar:p,label:b.label,icon:b.icon,autoFlip:null===(n=null===(a=null==b?void 0:b.manifest)||void 0===a?void 0:a.properties)||void 0===n?void 0:n.flipIcon,marker:i?S():"",active:g,editDraggable:m,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)};r(9859);(0,r(1888).styled)("div",{shouldForwardProp:e=>!["vertical","space"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);var I=r(1496);const k=(t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=C(t,o),i=j(n);return e.React.useMemo((()=>{const t={};return i.forEach((o=>{var n;const i=null!==(n=null==a?void 0:a[o])&&void 0!==n?n:{isClassLoaded:!1};t[o]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[i,a])},C=(t,o)=>e.ReactRedux.useSelector((e=>{var a,n,i,r;const l=null===(i=null===(n=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[o],s=e.browserSizeMode,d=e.appConfig.mainSizeMode,c=I.searchUtils.findLayoutId(l,s,d);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[c]})),j=e=>{const t=(e=>{var t,o,a;let n=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId}))},M=(e,t)=>{if(null!=(null==e?void 0:e.content)&&t)return Object.keys(e.content).find((o=>e.content[o].widgetId===t))},z=t=>[e.WidgetState.Opened,e.WidgetState.Active].includes(t.state);var O=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};function A(o){const{widgetId:a,canCrossLayoutBoundary:n,className:i,layoutId:r,layoutItemId:l}=o,s=O(o,["widgetId","canCrossLayoutBoundary","className","layoutId","layoutItemId"]),d=e.hooks.useCancelablePromiseMaker(),[c,u]=e.React.useState(null),[p,v]=e.React.useState(""),[g,h]=e.React.useState("");e.React.useEffect((()=>{u(null),v("");const t=d((t=>{var o,a;if(!t)return;return(null===(a=null===(o=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===o?void 0:o[t])||void 0===a?void 0:a.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(a));t.then((e=>{u(e),v(a)}),(e=>{var t;h(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[d,a]);const m=e.React.useCallback((()=>{var t,o;if(g)return;if(window.jimuConfig.isBuilder)return;(null===(o=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(a))}),[g,a]),f=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),b=e.ReactRedux.useSelector((e=>{var t,o,n;const i=e.appConfig.widgets[a];return null!==(n=null===(o=null===(t=null==i?void 0:i.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==n&&n})),y=e.ReactRedux.useSelector((e=>{const t=e.widgetsRuntimeInfo[a];return b&&(null==t?void 0:t.isInlineEditing)})),w=e.ReactRedux.useSelector((t=>{var o;const n=t.appConfig.widgets[a];return(null===(o=null==n?void 0:n.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout})),x=e.ReactRedux.useSelector((e=>{var t,o,n;const i=e.appConfig.widgets[a];return(null===(o=null===(t=null==i?void 0:i.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(n=i.layouts)&&void 0!==n?n:{}).length>0})),S=f&&!y&&w&&!x,R=e.React.useCallback((t=>{b&&(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(a,!0)))}),[a,b]),I=(0,e.classNames)("widget-renderer w-100 h-100",i),k=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:k,className:I,onMouseDownCapture:m,onDoubleClickCapture:R,"data-widgetid":p},s),(0,e.jsx)("div",{className:"widget-content p-1"},g,!g&&c&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(c,{widgetId:p,layoutId:r,layoutItemId:l})),!g&&!c&&(0,e.jsx)(t.Loading,null)),S&&(0,e.jsx)("div",{className:"widget-mask"}))}const E=(0,e.Immutable)({}),L=a=>{var n,i,r;const{controllerId:l,containerMapId:s,onClose:d,widgets:c=E}=a,u=null!==(n=Object.keys(c).find((e=>z(c[e]))))&&void 0!==n?n:"",p=null===(r=null===(i=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===i?void 0:i[u])||void 0===r?void 0:r.label,v=C(l,o),g=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==v?void 0:v.id,i=M(v,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[v]);return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)("mobile-widget-launcher",{"d-none":!u}),mapWidgetId:s,title:p,open:!!u,keepMount:!0,onClick:e=>{g(e,u)},onClose:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==d||d(u)}},Object.entries(c).map((([t,o])=>{if(!(void 0!==o.state))return null;const a=z(o),n=null==v?void 0:v.id,i=M(v,t);return e.React.createElement(A,{key:t,widgetId:t,layoutId:n,layoutItemId:i,onClick:e=>{g(e,t)},className:(0,e.classNames)({"d-none":!a})})})))};var N;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(N||(N={}));const $={_widgetLabel:"Widget Controller",_action_openWidget_label:"Open widget",resizerTooltip:"Customize the window size by dragging and dropping."},T=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),P=()=>{const t=`url("data:image/svg+xml;base64,${window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">\n    <g clip-path="url(#rectangle)">\n      <path d="M10 2.77832V0L0 10H2.77832L10 2.77832Z" fill="#000000" />\n      <path d="M10 5.60674L5.60675 10H10V5.60674Z" fill="#000000" />\n    </g>\n    <defs>\n      <clipPath id="rectangle">\n        <rect width="10" height="10" fill="white" />\n      </clipPath>\n    </defs>\n  </svg>')}")`;return e.css`
    .resizer {
      bottom: 4px !important;
      right: 4px !important;
      background-color: var(--sys-color-secondary-dark);
      mask-image: ${t};
      border: none !important;
    }
  `},W=()=>e.css`
    .resizer {
      width: 9px !important;
      height: 9px !important;
      position: absolute;
      bottom: 4px !important;
      right: 4px !important;
      border: 1px solid #000 !important;
      background: #fff;
      clip-path: polygon(5px 0px, 9px 0px, 9px 9px, 0px 9px, 0px 5px, 5px 5px);
      &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
      }
    }
  `,B=()=>{const o=e.hooks.useTranslation($),a=e.React.useMemo((()=>e.css`
    position: absolute;
    width: 15px;
    height: 15px;
    bottom: 0;
    right: 0;
  `),[]);return e.React.useMemo((()=>(0,e.jsx)(t.Tooltip,{title:o("resizerTooltip")},(0,e.jsx)("div",{className:"resizer-tooltip",css:a}))),[a,o])},F=(t,a)=>{const n=((t,o)=>{var a,n,i,r;const l=(0,e.getAppStore)().getState().appConfig,s=(0,e.getAppStore)().getState().browserSizeMode,d=null===(i=null===(n=null===(a=l.widgets)||void 0===a?void 0:a[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[o],c=I.searchUtils.findLayoutId(d,s,l.mainSizeMode);return null===(r=l.layouts)||void 0===r?void 0:r[c]})(a,o),i=Object.keys(n.content).find((e=>n.content[e].widgetId===t));(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n.id,layoutItemId:i}))},H=()=>document.body.getBoundingClientRect(),U=(t,o,a,n,i)=>{const[r,l]=e.React.useState((()=>H())),[s,d]=e.React.useState([a]),c=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=H();l(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const u=(e,t)=>e.right>=t.right||e.left<=t.left,p=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,v=e.hooks.useEventCallback((e=>{if(c.current++,c.current>7)return console.warn(`Number of cycles: ${c.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const o=((e,t)=>!(!e||!t)&&(u(e,t)||p(e,t)))(e,r);if(!o)return e;const{width:n,height:l}=e;let{left:s,top:d,right:g,bottom:h}=e;if(o){const e=u({left:s,top:d,right:g,bottom:h,width:n,height:l},r),o=p({left:s,top:d,right:g,bottom:h,width:n,height:l},r);e&&(s=t===N.SideBySide?a.x:r.right-n),o||t!==N.SideBySide||(d+=i),g=s+n,h=d+l}return v({left:s,top:d,right:g,bottom:h,width:n,height:l})}));return e.React.useEffect((()=>{const e=[];let r={width:0,height:0};Object.keys(o).forEach(((l,s)=>{const d=o[l],u=0!==s?e[s-1]:a;let{x:p,y:g}=u;if(t===N.SideBySide){const{width:e}=r;p+=n>0?e:-e,p+=0!==s?n:0}else t===N.Stack&&(p+=0!==s?n:0,g+=0!==s?i:0);const h={left:p,top:g,right:p+d.width,bottom:g+d.height,width:d.width,height:d.height},{left:m,top:f}=v(h);c.current>7?(p=u.x,g=u.y):(p=m,g=f),c.current=0,e.push({x:p,y:g}),r=d})),d(e)}),[t,a,n,i,r.width,r.height,v,o]),s},_=(0,e.Immutable)({}),V=a=>{const{mode:n,start:r,spaceX:l,spaceY:s,sizes:d,controllerId:c,widgets:u=_,onResizeStop:p,onClose:v}=a,g=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[h,m]=e.React.useState(d),f=e.React.useMemo((()=>((t,o)=>{let a=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{a=a.set(e,o[e]||i)})),a})(u,h)),[h,u]),b=C(c,o),y=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==b?void 0:b.id,i=M(b,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[b]),w=e=>{const t=T(e),o=null==t?void 0:t.querySelector("button");null==o||o.focus()},[x,S]=e.React.useState(!1),R=U(n,f,r,l,s),I=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Run)),k=I?P():W();return(0,e.jsx)(e.React.Fragment,null,Object.entries(u).map((([o,a],n)=>{var i;if(!(void 0!==a.state))return null;const r=z(a),l=R[n];if(!l)return null;const s=f[o],d=null===(i=null==g?void 0:g[o])||void 0===i?void 0:i.label,c=null==b?void 0:b.id,u=M(b,o);return(0,e.jsx)(t.FloatingPanel,{key:o,css:k,style:{maxWidth:"100vw"},headerTitle:d,defaultPosition:l,defaultSize:s,className:(0,e.classNames)({"d-none":!r},"multiple-widget-launcher"),showHeaderClose:!0,showHeaderCollapse:!0,activateOnlyForHeader:!0,autoFocus:r,dragBounds:"body",onClick:e=>{y(e,o)},onResize:e=>{((e,t)=>{m(h.set(e,t)),S(!0)})(o,e)},onResizeStop:e=>{((e,t)=>{null==p||p(e,t),S(!1)})(o,e)},onLeave:()=>{w(o)},onHeaderClose:e=>{((e,t)=>{null==t||t.stopPropagation(),null==v||v(e),w(e)})(o,e)}},(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(A,{widgetId:o,layoutId:c,layoutItemId:u}),!x&&!I&&(0,e.jsx)(B,null)))})))},G=(0,e.Immutable)({}),D=a=>{const{controllerId:r,widgets:l=G,root:s,placement:d,sizes:u,onResizeStop:p,onClose:v}=a,g=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),h=C(r,o),m=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==h?void 0:h.id,i=M(h,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[h]),[f,b]=e.React.useState(u),[y,w]=e.React.useState(!1),x=(e,t)=>{var o;t.stopPropagation(),null==v||v(e);const a=null===(o=T(e))||void 0===o?void 0:o.querySelector("button");null==a||a.focus()},S=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Run)),R=S?P():W();return(0,e.jsx)(e.React.Fragment,null,Object.entries(l).map((([o,a])=>{var r,l;if(!(void 0!==a.state))return null;const u=a.state!==e.WidgetState.Closed,v=null!==(r=f[o])&&void 0!==r?r:i,I=null===(l=null==g?void 0:g[o])||void 0===l?void 0:l.label;let k=T(o);k&&k.offsetParent||(k=null==s?void 0:s.querySelector(".avatar-card"));const C=null==h?void 0:h.id,j=M(h,o);return(0,e.jsx)(t.Popper,{key:o,css:R,style:{maxWidth:"100vw"},modifiers:c,className:(0,e.classNames)({"d-none":!u},"single-widget-launcher"),headerTitle:I,activateOnlyForHeader:!0,minSize:n,dragBounds:"body",defaultSize:v,onResize:e=>{var t,a;t=o,a=e,b((e=>e.set(t,a))),w(!0)},onResizeStop:e=>{var t,a;t=o,a=e,null==p||p(t,a),w(!1)},onHeaderClose:e=>{x(o,e)},showHeaderCollapse:!0,floating:!0,open:!0,autoFocus:u,reference:k,toggle:e=>{((e,t)=>{"Escape"===(null==t?void 0:t.key)&&x(e,t)})(o,e)},onClick:e=>{m(e,o)},placement:d},(0,e.jsx)(A,{widgetId:o,layoutId:C,layoutItemId:j}),!y&&!S&&(0,e.jsx)(B,null))})))},q=t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=Object.values(null!=o?o:{}).find((e=>{var o;return null===(o=e.views)||void 0===o?void 0:o.includes(t)}));return null==a?void 0:a.id},Y=(t,o)=>{const a=(t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=t?Object.values(t).map((e=>e.currentViewId)):[],n=a.map(q),i=Object.values(null!=o?o:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),r=a;return i.forEach((e=>{a.includes(e)||r.push(e)})),r})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,r=I.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Widget,n);let l=!0;if(!r)return l;if(r.type===e.ContainerType.View)if(a.includes(r.id)){const t=r.id,o=q(t),s=I.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(a.includes(s.id)||(l=!1))}else l=!1;return l};function X(t){var a,n,r,l,c,u,p,v,g,h;const{id:m,config:f,version:b,rootRef:y,onResizeStop:w}=t,x=e.hooks.useCheckSmallBrowserSizeMode(),S=null===(a=f.behavior)||void 0===a?void 0:a.onlyOpenOne,R=null!==(r=null===(n=null==f?void 0:f.behavior)||void 0===n?void 0:n.arrangement)&&void 0!==r?r:"floating",C=S&&"floating"===R,j=!S&&"floating"===R,M=e.React.useCallback((t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const o=T(t);null==o||o.focus(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}),[]),O=(t=>e.ReactRedux.useSelector((e=>{var o,a,n,i;const r=e.appConfig,l=e.browserSizeMode,s=r.widgets[t].parent;let d=null!==(o=s[l])&&void 0!==o?o:[];0===d.length&&(d=null!==(a=s[r.mainSizeMode])&&void 0!==a?a:[]);const c=null===(n=d[0])||void 0===n?void 0:n.layoutId,u=I.searchUtils.getWidgetIdThatUseTheLayoutId(r,c),p=r.widgets[u];return"arcgis-map"===(null===(i=null==p?void 0:p.manifest)||void 0===i?void 0:i.name)?p.id:""})))(m),A=(null===(l=f.behavior)||void 0===l?void 0:l.vertical)?"right-start":"bottom",E=null===(c=f.behavior)||void 0===c?void 0:c.displayType,N=null===(v=null===(p=null===(u=(0,e.getAppStore)())||void 0===u?void 0:u.getState())||void 0===p?void 0:p.appContext)||void 0===v?void 0:v.isRTL,$=e.React.useMemo((()=>N?Object.assign(Object.assign({},s),{x:document.body.clientWidth-i.width-s.x}):s),[N]),P=e.React.useMemo((()=>N?Object.assign(Object.assign({},d),{x:-d.x}):d),[N]),W=null===(g=f.behavior)||void 0===g?void 0:g.size,B=k(m,o),F=Object.keys(B),H=F.filter((e=>z(B[e]))),U=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId));e.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(F))}),[b,U]);const _=(t=>{const o=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return Y(o,t)})(m),G=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),q=null===(h=f.behavior)||void 0===h?void 0:h.openStarts;return e.hooks.useUpdateEffect((()=>{_?!G&&(null==q?void 0:q.length)>0&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(q,m))}),1e3):(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(H))}),[_]),e.React.useEffect((()=>{G&&(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(F)),!G&&(null==q?void 0:q.length)&&_&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(q,m))}),1e3)}),[]),(0,e.jsx)(e.React.Fragment,null,x&&(0,e.jsx)(L,{containerMapId:O,controllerId:m,widgets:B,onClose:M}),!x&&C&&(0,e.jsx)(D,{sizes:W,root:y.current,placement:A,controllerId:m,widgets:B,onResizeStop:w,onClose:M}),!x&&j&&(0,e.jsx)(V,{sizes:W,mode:E,start:$,spaceX:P.x,spaceY:P.y,controllerId:m,widgets:B,onResizeStop:w,onClose:M}))}const K=a=>{var n,i,r,l,s,d;const{id:c,config:u,version:v,autoSize:g}=a,h=null===(n=u.behavior)||void 0===n?void 0:n.onlyOpenOne,m=null===(i=u.behavior)||void 0===i?void 0:i.vertical,f=null===(r=null==u?void 0:u.appearance)||void 0===r?void 0:r.card,b=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return p(n,o,i)+t+a})(null===(l=null==u?void 0:u.appearance)||void 0===l?void 0:l.card,null===(s=null==u?void 0:u.appearance)||void 0===s?void 0:s.space),y=e.hooks.useCheckSmallBrowserSizeMode(),x=e.React.useRef(null),[S,I]=e.React.useState(!1),C=k(c,o),j=Object.keys(C),M=j.filter((e=>z(C[e]))),O=e.React.useCallback((t=>{var o;const a=null===(o=t.currentTarget.dataset)||void 0===o?void 0:o.widgetid;if(!a)return;const n=!!y||h;M.includes(a)||t.stopPropagation(),((t,o,a,n)=>{n?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(a)),a.includes(o)||((0,e.getAppStore)().dispatch(e.appActions.openWidget(o,t)),F(o,t))):a.includes(o)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o)):((0,e.getAppStore)().dispatch(e.appActions.openWidget(o,t)),F(o,t))})(c,a,M,n)}),[y,h,M,c]),A=e.React.useCallback(((t,o)=>{const a=M.includes(t);return e.React.createElement(R,Object.assign({},f,{key:t,className:`${o} layout-item`,widgetid:t,markerEnabled:!1,active:a,onClick:O}))}),[f,O,M]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},e.React.createElement(t.Button,{className:"toggle-list-button",onMouseEnter:()=>{document.querySelector(".toggle-list-button").style.border="2px solid rgb(37, 143, 255)"},onMouseLeave:()=>{document.querySelector(".toggle-list-button").style.border="1px solid #FFFFFF"},onClick:()=>{I((e=>!e))},style:{display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #FFFFFF",borderRadius:"5px",cursor:"pointer"}},e.React.createElement("img",{src:"https://svgsilh.com/svg/1504059.svg",alt:"",style:{width:"20px",marginRight:"5px"}}),"\ubd84\uc11d\ub3c4\uad6c"),e.React.createElement(X,{id:c,config:u,version:v,rootRef:x}),S&&e.React.createElement(w,{ref:x,className:"runtime--scroll-list",vertical:m,itemLength:b,space:null===(d=u.appearance)||void 0===d?void 0:d.space,autoHideArrow:!0,autoSize:g,lists:j,createItem:A}))},Z={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,showTooltip:!0,showIndicator:!1,avatar:{type:"primary",size:"default",shape:"circle"}}}};class J extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return Z;if(e.behavior&&e.appearance)return e;{let o=e;return e.behavior||(o=o.setIn(["behavior","openStarts"],[]),o=o.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),o=o.setIn(["behavior","displayType"],e.displayType),o=o.setIn(["behavior","vertical"],e.vertical),o=o.setIn(["behavior","size"],e.size),o=o.without(["onlyOpenOne","displayType","size"])),e.appearance||(o=o.setIn(["appearance","advanced"],!1),e.vertical?o=o.setIn(["appearance","space"],e.space):(o=o.setIn(["appearance","space"],0),o=o.setIn(["appearance","card","labelGrowth"],e.space)),o=o.setIn(["appearance","card","showLabel"],e.showLabel),o=o.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),o=o.setIn(["appearance","card","avatar","shape"],e.iconStyle),o=o.setIn(["appearance","card","avatar","type"],"primary"),o=o.without(["space","showLabel","iconSize","iconStyle","vertical"])),o}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,o;if(!e)return Z;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==a?void 0:a.variants,i=null===(o=null==a?void 0:a.avatar)||void 0===o?void 0:o.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);a=null==a?void 0:a.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],a)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return Z;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showTooltip",!0),a=a.setIn(["appearance","card"],o)),a}},{version:"1.14.0",description:"Version manager for release 1.14.0",upgrader:e=>{var t;if(!e)return Z;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showIndicator",!1),a=a.setIn(["appearance","card"],o)),a}}]}}const Q=new J,ee=o=>{var n,i,r,l;const{builderSupportModules:s,id:d,config:c,onInitResizeHandler:u,autoWidth:p,autoHeight:v}=o,g=null===(n=c.behavior)||void 0===n?void 0:n.onlyOpenOne,h=null===(i=c.behavior)||void 0===i?void 0:i.displayType,m=null===(r=null==c?void 0:c.behavior)||void 0===r?void 0:r.vertical,f=null==c?void 0:c.appearance.advanced,b=null===(l=null==c?void 0:c.appearance)||void 0===l?void 0:l.card.variant,y=m?v:p,w=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),x=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode));e.React.useEffect((()=>{null==u||u(null,null,(()=>{k((e=>e+1))}))}),[u]);const S=w&&x!==e.AppMode.Run,R=S&&s.widgetModules.Builder,[I,k]=e.React.useState(0);e.hooks.useUpdateEffect((()=>{k((e=>e+1))}),[g,h,x]);const C=((t,o,n)=>{const i=t?0:a.sm,r=t?0:a.sm,l=o?"0px":0,s=n?"0px":0;return e.React.useMemo((()=>e.css`
      overflow: visible;
      white-space: nowrap;
      .controller-container {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        padding: ${l} ${s};
        min-width:  ${i}px;
        min-height: ${r}px;
      }
    `),[l,s,i,r])})(y,p,v),j=((o,a)=>{const n=null==o?void 0:o.default,i=null==o?void 0:o.active,r=null==o?void 0:o.hover;return e.React.useMemo((()=>a?e.css`
      .scroll-list {
        background : #FFF;
        border-radius : 5px; 
      }
      
      .toggle-list-button {
        width : 100%;
        height : 40px;
        font-weight: 700;
        font-size: 14px;
      }
      
      .avatar-card:not(.add-widget-btn) {
        background: #fff;
        padding : 2px;
        ${n&&e.css`
          > .avatar {
            > .avatar-button {
              background-color: ${n.bg};
              border-color: ${n.bg};
            }
          }
          > .avatar-label {
            color: ${n.color};
            font-size : 10px;
            font-style: ${(null==n?void 0:n.italic)?"italic":"normal"};
            font-weight: ${(null==n?void 0:n.bold)?"bold":"normal"};
            text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:n.underline,strike:n.strike})};
          }
        `}
        ${r&&e.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${r.bg};
                border-color: ${r.bg};
              }
            }
            > .avatar-label {
              color: ${r.color};
              font-size : 10px;
              font-style: ${(null==r?void 0:r.italic)?"italic":"normal"};
              font-weight: ${(null==r?void 0:r.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:r.underline,strike:r.strike})};
            }
          }
        `}
        ${i&&e.css`
          > .avatar {
            > .avatar-button {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active,
              &[aria-expanded='true'] {
                background-color: ${i.bg};
                border-color: ${i.bg};
              }
            }
            &::after {
              background-color: ${i.bg};
            }
          }
          > .avatar-label {
            &:not(:disabled):not(.disabled):active,
            &:not(:disabled):not(.disabled).active {
              font-size : 10px;
              color: ${i.color};
              font-style: ${(null==i?void 0:i.italic)?"italic":"normal"};
              font-weight: ${(null==i?void 0:i.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:i.underline,strike:i.strike})};
            }
          }
        `}
      }
    `:e.css``),[a,n,i,r])})(b,f);return(0,e.jsx)("div",{className:"widget-controller jimu-widget rw-controller",css:[C,j]},(0,e.jsx)("div",{className:"controller-container"},!S&&(0,e.jsx)(K,{id:d,version:I,config:c,autoSize:y}),S&&R&&(0,e.jsx)(R,{id:d,version:I,config:c,autoSize:y})))};ee.versionManager=Q;const te=ee;function oe(e){r.p=e}})(),l})())}}}));