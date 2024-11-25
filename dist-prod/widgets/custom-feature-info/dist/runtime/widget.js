System.register(["jimu-core","jimu-ui","jimu-arcgis","jimu-core/react"],(function(t,e){var a={},o={},r={},i={};return{setters:[function(t){a.BaseVersionManager=t.BaseVersionManager,a.CONSTANTS=t.CONSTANTS,a.DataRecordsSelectionChangeMessage=t.DataRecordsSelectionChangeMessage,a.DataSourceComponent=t.DataSourceComponent,a.DataSourceManager=t.DataSourceManager,a.DataSourceStatus=t.DataSourceStatus,a.DataSourceTypes=t.DataSourceTypes,a.Immutable=t.Immutable,a.MessageManager=t.MessageManager,a.React=t.React,a.ReactResizeDetector=t.ReactResizeDetector,a.appConfigUtils=t.appConfigUtils,a.css=t.css,a.getAppStore=t.getAppStore,a.jsx=t.jsx,a.lodash=t.lodash},function(t){o.Alert=t.Alert,o.Button=t.Button,o.DataActionList=t.DataActionList,o.DataActionListStyle=t.DataActionListStyle,o.Dropdown=t.Dropdown,o.DropdownButton=t.DropdownButton,o.DropdownItem=t.DropdownItem,o.DropdownMenu=t.DropdownMenu,o.Icon=t.Icon,o.WidgetPlaceholder=t.WidgetPlaceholder,o.defaultMessages=t.defaultMessages},function(t){r.loadArcGISJSAPIModules=t.loadArcGISJSAPIModules},function(t){i.default=t.default}],execute:function(){t((()=>{var t={3153:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M8.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM8.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM8 10.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M3.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM4 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M3.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM4 15.5 6 14v3zM16 15.5 14 14v3z"></path><path fill="#000" fill-rule="evenodd" d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zM2 1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},2686:t=>{"use strict";t.exports=r},9244:t=>{"use strict";t.exports=a},8972:t=>{"use strict";t.exports=i},4321:t=>{"use strict";t.exports=o}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="";var n={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(n),s.d(n,{__set_webpack_public_path__:()=>I,default:()=>C});var t,e,a=s(9244),o=s(4321);function r(t,o,r,i,s){let n;const d=r.backgroundColor?r.backgroundColor:t.sys.color.surface.paper;let u;const l="";let c,h,p=l,g=l,f=l,S=l,D=l,v=l;"custom"===o?(n=r.textColor?r.textColor:t.ref.palette.neutral[1200],u=r.fontSize,u&&0!==u.distance&&r.fontSizeType!==e.auto&&(c=u.unit,h=u.distance,p=h+c,g=Math.round(1.428*h)+c,f=Math.round(1.142*h)+c,S=h,D=Math.round(.857*h)+c,v=Math.round(.857*h)+c)):"syncWithTheme"===o?(h=l,n=t.ref.palette.neutral[1200]):(h=l,n="");let m="10px",C="auto";return i&&(m="auto",C="10px"),a.css`
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}

.header-title {
  text-align: center;
}

.main-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-numbers {
  font-size: 14px;
  color: #555;
}

.nav-btn {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #007acc;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background-color: #007acc;
  color: #fff;
}

.data-action-dropdown-content {
  margin-left: auto;
  padding-left: 15px;
}

.feature-info-container {
  flex: 1;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}


  .custom-feature-table {
  margin: 50px 20px 20px 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.feature-table {
  width: 100%;
  border-collapse: collapse;
}

.feature-table th, .feature-table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.feature-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.feature-table td {
  color: #555;
}

    .widget-featureInfo{
      overflow: auto;
      word-break: break-word;
      min-width: min-content;
      ${s?"width: max-content":""};
      height: 100%;
      background-color: ${d};
      color: ${n};
      --calcite-color-text-1: ${n};
      --calcite-color-text-3: ${n};
      font-size: ${p};
      --calcite-font-size--0: ${p};
      --calcite-font-size--1: ${p};
      --calcite-font-size--2: ${p};
      --calcite-color-foreground-1: ${d}

      .warning-icon{
        position: absolute;
        bottom: 10px;
        right: ${m};
        left: ${C};
      }
      .warning-inaccessible{
        position: absolute;
        left: 0.25rem;
        right: 0.25rem;
        bottom: 0.25rem;
        width: auto;
      }
      .header-section{
        min-width: max-content;
        display: flex;
        justify-content: space-between;
        height: 40px;
        border-bottom: 1px solid #a8a8a8;
        background-color: ${d};
      }
      .header-control-section{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 40px;
        flex-grow: 2;
        /*
        position: absolute;
        right: 0;
        */
      }
      .data-action-dropdown-content{
        margin-right: 10px;
      }
      .nav-section{
        height: 40px;
        background-color: transparent;
        color: ${t.ref.palette.neutral[1200]};
        .nav-btn{
          color: ${t.sys.color.primary.main};
        }
        .nav-btn: hover{
          color: ${t.sys.color.primary.main};
        }
        .nav-btn:focus{
          box-shadow: none;
        }
      }
      .feature-info-component{
        background-color: ${"transparent"};
        padding: 0;
        .esri-feature__size-container{
          background-color: ${d};
          color: ${n};
        }
        .esri-widget * {
          font-size: ${p};
          color: ${n} !important;
        }
        .esri-widget {
          background-color: transparent !important;
        }
        .esri-feature__title{
          padding: 10px 7px 0 7px;
          margin: auto;
        }
        .esri-widget__heading {
          margin: 0 0 0.5rem 0;
        }
        .esri-feature__content-element{
          padding-top: 7px;
        }
        .esri-widget__table tr td, .esri-widget__table tr th {
          font-size: ${v};
          word-break: break-word !important;
        }
        .esri-feature__main-container{
        }
        .esri-feature__media-previous:focus{
          outline: none;
        }
        .esri-feature__media-next:focus{
          outline: none;
        }
        .esri-feature__title {
          font-size: ${p};
        }
        .esri-feature h1 {
          font-size: ${g};
        }
        .esri-feature h2 {
          font-size: ${f};
        }
        .esri-feature h3,
        .esri-feature h4,
        .esri-feature h5,
        .esri-feature h6 {
          font-size: ${S};
        }
        .esri-feature p {
          font-size: ${p};
        }

        .esri-feature-content {
          padding: 0 15px;
        }
        .esri-feature-content p {
          margin: 0 0 1.2em
        }

        .esri-feature figcaption {
          font-size: ${v};
        }

        .esri-feature__media-item-title {
          font-size: ${f};
        }
        .esri-feature__media-item-caption {
          font-size: ${D};
        }
        .esri-feature__last-edited-info {
          font-size: ${v};
        }
        .esri-widget__table tr td, .esri-widget__table tr th {
          word-break: normal;
        }

      }
    }
  `}!function(t){t.syncWithTheme="syncWithTheme",t.usePopupDefined="usePopupDefined",t.custom="custom"}(t||(t={})),function(t){t.auto="auto",t.custom="custom"}(e||(e={}));const i="Feature Info",d="No data found.",u="{layer} feature info current record";var l=s(2686),c=function(t,e,a,o){return new(a||(a=Promise))((function(r,i){function s(t){try{d(o.next(t))}catch(t){i(t)}}function n(t){try{d(o.throw(t))}catch(t){i(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,n)}d((o=o.apply(t,e||[])).next())}))};class h extends a.React.PureComponent{constructor(t){super(t),this.countOfQueryGraphics=0,this.onDataSourceStatusChanged=(t,e,a)=>{this.props.active&&this.props.onDataSourceStatusChanged(t,e,a)},this.onDataSourceCreated=t=>{this.dataSource=t,this.previousIndex=this.props.index,this.isFirstLoad=!0,this.setState({dataSourceId:this.dataSource.id})},this.onCreateDataSourceFailed=t=>{this.onDataSourceStatusChanged(this.props.dsConfigId,a.DataSourceStatus.CreateError)},this.onDataSourceInfoChange=t=>{var e,o;if(t)if(t.status===a.DataSourceStatus.NotReady&&this.onDataSourceStatusChanged(this.props.dsConfigId,a.DataSourceStatus.NotReady,null===(e=this.dataSource)||void 0===e?void 0:e.getLabel()),this.setState({dataSourceStatus:t.status,dataSourceWidgetQueries:t.widgetQueries,dataSourceQuerieWhere:(null===(o=this.getQueryParamsFromDataSource())||void 0===o?void 0:o.where)||"",dataSourceVersion:t.version}),this.dataSource&&this.dataSource.isDataView&&this.dataSource.dataViewId===a.CONSTANTS.SELECTION_DATA_VIEW_ID){const t=this.dataSource.getMainDataSource(),e=null==t?void 0:t.getSelectedRecordIds();e&&e[0]&&this.props.onSelectedRecordIdChanged(this.props.dsConfigId,0,this.dataSource.id)}else{const e=t.selectedIds&&t.selectedIds[0];e?this.previousSelectedId!==e&&(this.previousSelectedId=e,this.getDataIndexByObjectId(e).then((t=>{t>-1&&t<this.dataBuffer.count&&this.props.onSelectedRecordIdChanged(this.props.dsConfigId,t,this.dataSource.id)}))):this.previousSelectedId&&(this.previousSelectedId=null,this.props.onUnselectedRecordIdChanged(this.dataSource.id))}},this.state={dataSourceId:null,dataSourceStatus:a.DataSourceStatus.Loaded,dataSourceVersion:void 0,dataSourceWidgetQueries:void 0,dataSourceQuerieWhere:""},this.previousIndex=0,this.previousData={id:null,count:null,index:null,graphic:null,record:null,defaultPopupTemplate:null,dataSourceVersion:void 0,dataSourceId:null},this.dataBuffer={count:null,dataMap:{},pagingNum:30},this.isFirstLoad=!1,this.previousSelectedId=null}componentDidMount(){}componentDidUpdate(t,e){return c(this,void 0,void 0,(function*(){this.state.dataSourceQuerieWhere!==e.dataSourceQuerieWhere&&this.clearData();if(this.props.useDataSource&&this.state.dataSourceId===this.props.useDataSource.dataSourceId&&this.state.dataSourceStatus===a.DataSourceStatus.Loaded){let e;this.props.index===this.previousIndex?(this.clearData(),e=this.props.index):(this.previousIndex=this.props.index,e=this.props.index);let a=this.getData(e);if(a)this.onDataChanged(this.dataSource,a,t);else{this.countOfQueryGraphics++;const o=this.countOfQueryGraphics;yield this.dataSource.queryCount({}).then((r=>{if(o<this.countOfQueryGraphics)return;const i=r.count;e>=i&&(e=0),this.queryGraphics(this.dataSource,null,e,this.dataBuffer.pagingNum,i).then((e=>{o<this.countOfQueryGraphics||(0===e.graphics.length?a=null:(this.addData(e,this.dataSource.id),a=this.getData(e.index)),this.onDataChanged(this.dataSource,a,t),this.isFirstLoad=!1)}))}))}}}))}onDataChanged(t,e,o){var r,i,s,n,d,u,l,c,h;this.props.active&&(e?this.props.active!==o.active?this.props.onDataChanged(this.props.dsConfigId,this.dataSource,e,this.isFirstLoad):(null===(r=this.previousData)||void 0===r?void 0:r.dataSourceId)===(null==e?void 0:e.dataSourceId)&&(null===(i=this.previousData)||void 0===i?void 0:i.id)===(null==e?void 0:e.id)&&(null===(s=this.previousData)||void 0===s?void 0:s.count)===(null==e?void 0:e.count)&&(null===(n=this.previousData)||void 0===n?void 0:n.index)===(null==e?void 0:e.index)&&(null===(d=this.previousData)||void 0===d?void 0:d.dataSourceVersion)===(null==e?void 0:e.dataSourceVersion)&&a.lodash.isDeepEqual(null===(l=null===(u=this.previousData)||void 0===u?void 0:u.graphic)||void 0===l?void 0:l.attributes,null===(c=null==e?void 0:e.graphic)||void 0===c?void 0:c.attributes)?this.onDataSourceStatusChanged(this.props.dsConfigId,a.DataSourceStatus.Loaded,null===(h=this.dataSource)||void 0===h?void 0:h.getLabel()):this.props.onDataChanged(this.props.dsConfigId,this.dataSource,e,this.isFirstLoad):this.props.onDataChanged(this.props.dsConfigId,this.dataSource,e),this.previousData=e)}addData(t,e){t.records.forEach(((a,o)=>{const r=t.start+o;this.dataBuffer.dataMap[r]={id:a.getId(),count:this.dataBuffer.count,index:r,graphic:t.graphics[o],defaultPopupTemplate:t.defaultPopupTemplate,record:a,dataSourceId:e,dataSourceVersion:this.state.dataSourceVersion}}))}initData(t){this.dataBuffer.count=t}getData(t){return this.dataBuffer.dataMap[t]}getDataIndexByObjectId(t){return c(this,void 0,void 0,(function*(){var e;let a=-1;if(Object.entries(this.dataBuffer.dataMap).some((e=>{var o;return t===(null===(o=e[1])||void 0===o?void 0:o.id)&&(a=Number(e[0]),!0)})),a<0&&this.dataSource){const o=this.dataSource.getIdField(),r=null===(e=this.getQueryParamsFromDataSource())||void 0===e?void 0:e.orderByFields;if(r&&(null==r?void 0:r.length)>0){let e=0;const i=yield this.dataSource.queryById(t);let s=" ";if(null==i?void 0:i.feature)for(let t=0;t<r.length;t++){const n=r[t],d=null==n?void 0:n.split(" "),u=d[0],l=d[1]&&0===d[1].indexOf("DESC"),c=r[t+1]||o,h=null==c?void 0:c.split(" "),p=h[0],g=h[1]&&0===h[1].indexOf("DESC");if(0===t){const t=l?`${u} > '${i.feature.attributes[u]}'`:`${u} < '${i.feature.attributes[u]}' or ${u} is NULL`;e+=(yield this.dataSource.queryCount({where:t}).then((t=>t.count)).catch((t=>-1)))}let f;f=g?p===o?">=":">":p===o?"<=":"<",s+=`${u} = '${i.feature.attributes[u]}' and `;const S=g?`${s} ${p} ${f} '${i.feature.attributes[p]}'`:`${s} ${p} ${f} '${i.feature.attributes[p]}' or ${p} is NULL`;if(e+=(yield this.dataSource.queryCount({where:S}).then((t=>t.count)).catch((t=>-1))),p===o){a=e-1;break}}}else a=yield this.dataSource.queryCount({where:`${o}<=${t}`}).then((t=>(a=t.count-1,a)))}return Promise.resolve(a)}))}clearData(){this.dataBuffer.count=null,this.dataBuffer.dataMap={}}isEmptyData(){return null===this.dataBuffer.count}getLayerObject(t){return t.layer?t.layer.load().then((()=>Promise.resolve(t.layer))):t.createJSAPILayerByDataSource().then((t=>t.load().then((()=>Promise.resolve(t)))))}queryGraphics(t,e,o,r,i){return c(this,void 0,void 0,(function*(){var e;let s,n,d=o;return this.onDataSourceStatusChanged(this.props.dsConfigId,a.DataSourceStatus.Loading,null===(e=this.dataSource)||void 0===e?void 0:e.getLabel()),this.getLayerObject(t).then((e=>c(this,void 0,void 0,(function*(){if(n=e,this.isEmptyData()&&this.initData(i),this.isFirstLoad){const e=t.getSelectedRecordIds()[0];void 0!==e&&(yield this.getDataIndexByObjectId(e).then((t=>{d=-1===t?0:t})))}})))).then((()=>{s=Math.floor(d/this.dataBuffer.pagingNum)*this.dataBuffer.pagingNum;const e={outFields:["*"],notAddFieldsToClient:!0,returnGeometry:!0,page:Math.floor(s/r)+1,pageSize:r};return t.query(e)})).then((e=>{const o=e.records;if(t.isDataView&&t.dataViewId===a.CONSTANTS.SELECTION_DATA_VIEW_ID&&o.length>0){const e={objectIds:o.map((t=>t.feature.attributes[n.objectIdField])),outFields:["*"],notAddFieldsToClient:!0,returnGeometry:!0};return t.getMainDataSource().query(e)}return e})).then((t=>{var e;const a=t.records,o=this.getQueryParamsFromDataSource().where;n.definitionExpression=o;const i=a.map((t=>(t.feature.sourceLayer=n.associatedLayer||n,t.feature.layer=n.associatedLayer||n,t.feature))),u=(null===(e=n.associatedLayer)||void 0===e?void 0:e.defaultPopupTemplate)||n.defaultPopupTemplate;return{index:d,start:s,num:r,graphics:i,records:a,defaultPopupTemplate:(null==u?void 0:u.clone())||{content:""}}})).catch((t=>(console.warn(t),{graphics:[],records:[]})))}))}getOrderBy(t,e){const o=[];let r;return e&&e.orderBy&&e.orderBy.length>0&&(e.orderBy.forEach((t=>{t.jimuFieldName&&o.push(`${t.jimuFieldName} ${t.order}`)})),r=t.type===a.DataSourceTypes.FeatureLayer?o.join(","):o),r}getQueryParamsFromDataSource(){var t;return null===(t=this.dataSource)||void 0===t?void 0:t.getRealQueryParams({},"query")}loadGraphics(t,e){return c(this,void 0,void 0,(function*(){return this.onDataSourceStatusChanged(this.props.dsConfigId,a.DataSourceStatus.Loading),yield(0,l.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/rest/support/Query"]).then((a=>{const[o,r]=a,i=new r;let s=t.layer;const n=e&&e.where.sql;let d;return i.where=n||"1=1",i.returnGeometry=!1,i.outFields=["*"],d=0===this.props.maxGraphics?null:this.props.maxGraphics,i.num=this.props.limitGraphics?d:null,!s&&t.url&&(s=new o({url:t.url})),s?s.queryFeatures(i).then((t=>t.features)):[]})).catch((t=>(console.warn(t),[])))}))}render(){return a.React.createElement(a.DataSourceComponent,{useDataSource:this.props.useDataSource,query:{},widgetId:this.props.widgetId,onDataSourceCreated:this.onDataSourceCreated,onDataSourceInfoChange:this.onDataSourceInfoChange,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}class p extends a.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.1.0",description:"added [styleType] and [fontSizeType]",upgrader:t=>{let e=t;return e=e.set("styleType","usePopupDefined"),e.getIn(["style","fontSize","distance"])||e.getIn(["style","textColor"])?e=e.setIn(["style","fontSizeType"],"custom"):(e=e.setIn(["style","fontSizeType"],"auto"),e=e.setIn(["style","fontSize","distance"],14)),e}},{version:"1.15.0",description:"added [styleType] and [fontSizeType]",upgrader:(t,e)=>{var o,r;const i=null===(r=null===(o=(0,a.getAppStore)().getState())||void 0===o?void 0:o.appConfig)||void 0===r?void 0:r.widgets[e],s=(null==i?void 0:i.useDataSources)&&i.useDataSources[0],n=t.asMutable();if(s){const e={id:"default_data_source_config",useDataSourceId:s.dataSourceId,contentConfig:{title:t.title,fields:t.fields,media:t.media,attachments:t.attachments,lastEditInfo:t.lastEditInfo}};n.dsConfigs=[e]}else n.dsConfigs=[];return n.dsNavigator=!0,n.featureNavigator=!0,delete n.title,delete n.fields,delete n.media,delete n.attachments,delete n.lastEditInfo,(0,a.Immutable)(n)}}]}}const g=new p;var f=s(3153),S=s.n(f);var D=s(8972);const v=({featureData:t,title:e})=>D.default.createElement("div",{className:"custom-feature-table"},e&&D.default.createElement("h3",{className:"table-title"},e),D.default.createElement("table",{className:"feature-table"},D.default.createElement("tbody",null,Object.entries(t).map((([t,e],a)=>D.default.createElement("tr",{key:a},D.default.createElement("th",null,t),D.default.createElement("td",null,null!=e?e:"-")))))));class m extends a.React.PureComponent{constructor(t){super(t),this.getDSConfigs=()=>(this.props.config.dsConfigs||(0,a.Immutable)([])).map((t=>{if(null===t.label||void 0===t.label){const e=a.DataSourceManager.getInstance().getDataSource(t.useDataSourceId);return t.set("label",(null==e?void 0:e.getLabel())||"")}return t})),this.getDSConfigById=t=>this.props.config.dsConfigs?this.getDSConfigs().find((e=>e.id===t)):null,this.getCurrentDSConfig=()=>this.getDSConfigById(this.state.currentDSConfigId),this.getDefaultDSConfig=()=>this.getDSConfigs()[0],this.getUseDataSourceById=t=>(this.props.useDataSources||(0,a.Immutable)([])).find((e=>e.dataSourceId===t)),this.onPreGraphicBtnClick=()=>{let t=this.state.currentDataIndex;t>0&&(this.setState({currentDataIndex:--t}),this.lockSelection=!1)},this.onNextGraphictBtnClick=()=>{let t=this.state.currentDataIndex;t<this.currentData.count-1&&(this.setState({currentDataIndex:++t}),this.lockSelection=!1)},this.onSelectedRecordIdChanged=(t,e,a)=>{e>-1&&this.setState({currentDSConfigId:t,currentDataIndex:e})},this.onUnselectedRecordIdChanged=t=>{var e;(null===(e=this.dataSource)||void 0===e?void 0:e.id)===t&&a.MessageManager.getInstance().publishMessage(new a.DataRecordsSelectionChangeMessage(this.props.id,[]))},this.onDataSourceStatusChanged=(t,e,a)=>{this.setState({loadDataStatus:e,dataSourceLabel:a})},this.onDataChanged=(t,e,o,r)=>{this.dataSource=e,this.previousData=this.currentData,this.currentData=o,this.setState({currentDataId:this.currentData?this.currentData.id:null,currentDataIndex:this.currentData?this.currentData.index:0,currentDataSourceVersion:this.currentData?this.currentData.dataSourceVersion:null,loadDataStatus:a.DataSourceStatus.Loaded}),this.lockSelection||(this.selectGraphic(),this.lockSelection=!0)},this.onCurrentFeatureClick=()=>{this.selectGraphic()},this.onCurrentDSChange=t=>{this.setState({currentDSConfigId:t,currentDataIndex:0})},this.onResize=t=>{let e=80;e=t<350?t/3:t/2,e=10*Math.floor(e/10),this.setState({widthOfDSSelector:Math.floor(e)})},this.isDataSourceAccessible=t=>{var e;return!!(null===(e=this.props.useDataSources)||void 0===e?void 0:e.find((e=>t===e.dataSourceId)))},this.getPlaceholderConten=()=>(0,a.jsx)("div",{className:"widget-featureInfo"},(0,a.jsx)(o.WidgetPlaceholder,{icon:S(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:i}),widgetId:this.props.id})),this.getLoadingContent=()=>{let t=null;return this.state.loadDataStatus===a.DataSourceStatus.Loading&&(t=(0,a.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"})),t},this.getHeaderContent=()=>{var t,e,r,i;let s=null;const n=this.props.intl.formatMessage({id:"featureInfoDataActionLabel",defaultMessage:u},{layer:(null===(t=this.dataSource)||void 0===t?void 0:t.getLabel())||""}),d=void 0===this.props.enableDataAction||this.props.enableDataAction;this.dataSource&&d&&(s=(0,a.jsx)("div",{className:"data-action-dropdown-content"},(0,a.jsx)(o.DataActionList,{widgetId:this.props.id,dataSets:[{dataSource:this.dataSource,records:(null===(e=this.currentData)||void 0===e?void 0:e.record)?[null===(r=this.currentData)||void 0===r?void 0:r.record]:[],name:n,type:"current"}],listStyle:o.DataActionListStyle.Dropdown,buttonType:"tertiary"})));const l=this.currentData?`${this.currentData.index+1} / ${this.currentData.count}`:"0 / 0";null===(i=this.dataSource)||void 0===i||i.getLabel();return(0,a.jsx)("div",{className:"header-section"},(0,a.jsx)("div",{className:"header-title"},(0,a.jsx)("h1",{className:"main-title"},"\ub370\uc774\ud130 \uc0c1\uc138 \uc815\ubcf4")),(0,a.jsx)("div",{className:"header-controls"},(0,a.jsx)("div",{className:"nav-section"},(0,a.jsx)(o.Button,{className:"nav-btn",onClick:this.onPreGraphicBtnClick,"aria-label":"\uc774\uc804"},"<"),(0,a.jsx)("span",{className:"feature-numbers"},l),(0,a.jsx)(o.Button,{className:"nav-btn",onClick:this.onNextGraphictBtnClick,"aria-label":"\ub2e4\uc74c"},">")),s))},this.getDsErrorMessageContent=()=>(0,a.jsx)("div",{className:"widget-featureInfo"},(0,a.jsx)(o.WidgetPlaceholder,{icon:S(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:i}),widgetId:this.props.id}),(0,a.jsx)(o.Alert,{className:"warning-inaccessible",type:"warning",withIcon:!0,text:this.props.intl.formatMessage({id:"dataSourceCreateError",defaultMessage:"warning"})})),this.getWarningMessageContent=()=>{const t=this.props.dataSourceWidgetLabelInfos.find((t=>{var e;return t.dataSourceId===(null===(e=this.getCurrentDSConfig())||void 0===e?void 0:e.useDataSourceId)})),e=this.props.intl.formatMessage({id:"outputDataIsNotGenerated",defaultMessage:"warning"},{outputDsLabel:this.state.dataSourceLabel,sourceWidgetName:(null==t?void 0:t.label)||""});return(0,a.jsx)("div",{className:"widget-featureInfo"},(0,a.jsx)(o.WidgetPlaceholder,{icon:S(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:i}),widgetId:this.props.id}),(0,a.jsx)(o.Icon,{className:"warning-icon",icon:this.warningIcon,size:26,title:e,currentColor:!1}))},this.getDefaultMessageContent=()=>(0,a.jsx)("div",{className:"no-data-message p-5 font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.config.noDataMessage||this.props.intl.formatMessage({id:"noDeataMessageDefaultText",defaultMessage:d})}}),this.getFeaturesContent=()=>{var t,e,o;if(!(null===(e=null===(t=this.currentData)||void 0===t?void 0:t.graphic)||void 0===e?void 0:e.attributes))return null;const r=this.currentData.graphic.attributes,i=this.currentData.graphic.layer.title,s=this.currentData.graphic.layer.popupTemplate,n=(null===(o=null==s?void 0:s.fieldInfos)||void 0===o?void 0:o.filter((t=>t.visible)).map((t=>t.fieldName)))||[],d=Object.fromEntries(Object.entries(r).filter((([t])=>n.includes(t))));return console.log("PopupTemplate Visible Fields:",n),console.log("Filtered Attributes:",d),(0,a.jsx)("div",{style:{cursor:"pointer"},onClick:this.onCurrentFeatureClick},(0,a.jsx)(v,{featureData:d,title:i}))},this.getFeatureInfoContent=()=>{let t;return this.state.loadDataStatus===a.DataSourceStatus.CreateError?t=this.getDsErrorMessageContent():this.state.loadDataStatus===a.DataSourceStatus.NotReady?t=this.getWarningMessageContent():this.currentData&&this.dataSource?t=this.getFeaturesContent():this.state.loadDataStatus===a.DataSourceStatus.Loaded&&(t=this.getDefaultMessageContent()),t},this.getDataSourceContent=()=>{let t=null;return t=(0,a.jsx)("div",{style:{position:"absolute",display:"block"}},this.getDSConfigs().map(((t,e)=>{const o=this.getUseDataSourceById(t.useDataSourceId);return(0,a.jsx)(h,{key:e,active:this.state.currentDSConfigId===t.id,useDataSource:o,dsConfigId:t.id,widgetId:this.props.id,index:this.state.currentDataIndex,limitGraphics:this.props.config.limitGraphics,maxGraphics:this.props.config.maxGraphics,onSelectedRecordIdChanged:this.onSelectedRecordIdChanged,onUnselectedRecordIdChanged:this.onUnselectedRecordIdChanged,onDataSourceStatusChanged:this.onDataSourceStatusChanged,onDataChanged:this.onDataChanged})}))),t},this.previousData=null,this.currentData=null,this.lockSelection=!0,this.warningIcon=`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M0.5 0.5H25.5V25.5H0.5V0.5Z" fill=${this.props.theme.sys.color.warning.light}\n                    stroke="${this.props.theme.sys.color.warning.light}"/>\n                  <path d="M12.0995 10.87C12.0462 10.3373 12.4646 9.875 13 9.875C13.5354 9.875 13.9538 10.3373 13.9005 10.87L13.5497 14.3775C13.5215 14.6599 13.2838 14.875 13 14.875C12.7162\n                    14.875 12.4785 14.6599 12.4502 14.3775L12.0995 10.87Z" fill="${this.props.theme.sys.color.warning.dark}"/>\n                  <path d="M13 17.875C13.5523 17.875 14 17.4273 14 16.875C14 16.3227 13.5523 15.875 13 15.875C12.4477 15.875 12 16.3227 12 16.875C12 17.4273 12.4477 17.875 13 17.875Z"\n                    fill="${this.props.theme.sys.color.warning.dark}"/>\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66666 19.875C5.91174 19.875 5.42905 19.0705 5.78431 18.4044L12.1176 6.52941C12.4941 5.82353 13.5059 5.82353 13.8824\n                    6.52941L20.2157 18.4044C20.5709 19.0705 20.0883 19.875 19.3333 19.875H6.66666ZM6.66666 18.875L13 7L19.3333 18.875H6.66666Z" fill="${this.props.theme.sys.color.warning.dark}"/>\n                  </svg>`,this.state={currentDataId:null,currentDataIndex:0,currentDataSourceVersion:null,loadDataStatus:a.DataSourceStatus.Loading,dataSourceWidgetId:null,dataSourceLabel:"",currentDSConfigId:this.props.config.dsConfigs&&this.props.config.dsConfigs[0]&&this.props.config.dsConfigs[0].id,widthOfDSSelector:80}}componentDidMount(){}componentDidUpdate(t){var e,o,r,i,s,n;if((null===(o=null===(e=this.props)||void 0===e?void 0:e.stateProps)||void 0===o?void 0:o.currentDSConfigId)&&(null===(r=null==t?void 0:t.stateProps)||void 0===r?void 0:r.currentDSConfigId)!==this.props.stateProps.currentDSConfigId)return void this.onCurrentDSChange(null===(s=null===(i=this.props)||void 0===i?void 0:i.stateProps)||void 0===s?void 0:s.currentDSConfigId);const d=this.getCurrentDSConfig(),u=this.getDefaultDSConfig(),l=this.getUseDataSourceById(null===(n=d||u)||void 0===n?void 0:n.useDataSourceId);if(!l)return this.setState({currentDSConfigId:"",currentDataId:null,currentDataIndex:0}),void(this.currentData=null);d||this.setState({currentDSConfigId:u.id,dataSourceWidgetId:a.appConfigUtils.getWidgetIdByOutputDataSource(l)})}selectGraphic(){var t;const e=null===(t=this.currentData)||void 0===t?void 0:t.record;if(e&&this.dataSource){a.MessageManager.getInstance().publishMessage(new a.DataRecordsSelectionChangeMessage(this.props.id,[e]));const t=this.dataSource.getSelectedRecordIds(),o=e.getId();t.includes(o)||this.dataSource.queryById(o).then((t=>{this.dataSource.selectRecordsByIds([o],[t])}))}}getStyleConfig(){return this.props.config.style?this.props.config.style:{textColor:"",fontSizeType:e.auto,fontSize:null,backgroundColor:""}}render(){var t,e,o;let i=null;return this.getUseDataSourceById(null===(t=this.getCurrentDSConfig())||void 0===t?void 0:t.useDataSourceId)?i=(0,a.jsx)("div",{className:"widget-featureInfo"},this.getLoadingContent(),this.getHeaderContent(),this.getFeatureInfoContent(),this.getDataSourceContent(),(0,a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize})):(i=this.getPlaceholderConten(),this.currentData=null),(0,a.jsx)("div",{css:r(this.props.theme,this.props.config.styleType,this.getStyleConfig(),null===(o=null===(e=(0,a.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===o?void 0:o.isRTL,this.props.autoWidth),className:"jimu-widget"},i)}}m.versionManager=g,m.mapExtraStateProps=(t,e)=>{var o,r;const i=(e.useDataSources||[]).map((e=>{var o,r;const i=a.appConfigUtils.getWidgetIdByOutputDataSource(e);return{dataSourceId:e.dataSourceId,label:null===(r=null===(o=t.appConfig)||void 0===o?void 0:o.widgets[i])||void 0===r?void 0:r.label}}));return{dataSourceWidgetLabelInfos:i,timezone:null===(r=null===(o=t.appConfig)||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.timezone}};const C=m;function I(t){s.p=t}})(),n})())}}}));