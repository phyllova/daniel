"use strict";(self.webpackChunk_exness_public_website=self.webpackChunk_exness_public_website||[]).push([[7560],{93149:function(e,t,n){n.d(t,{t:function(){return c}});var r=n(98522),a=n(2784),i=n(98325),l=n(66413),s=n(44465),o=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function c(e,t){var n,c=a.useRef(),u=a.useRef(),d=a.useRef(),p=(0,i.J)(t,c.current||{}),m=null!==(n=null==p?void 0:p.query)&&void 0!==n?n:e;u.current=p,d.current=m;var v=(0,l.A)((0,s.x)(t&&t.client),m),h=v.useQuery((0,r.pi)((0,r.pi)({},p),{skip:!c.current})),f=h.observable.options.initialFetchPolicy||v.getDefaultFetchPolicy(),g=Object.assign(h,{called:!!c.current}),y=a.useMemo((function(){for(var e={},t=function(t){var n=g[t];e[t]=function(){return c.current||(c.current=Object.create(null),v.forceUpdateState()),n.apply(this,arguments)}},n=0,r=o;n<r.length;n++){t(r[n])}return e}),[]);Object.assign(g,y);var _=a.useCallback((function(e){c.current=e?(0,r.pi)((0,r.pi)({},e),{fetchPolicy:e.fetchPolicy||f}):{fetchPolicy:f};var t=(0,i.J)(u.current,(0,r.pi)({query:d.current},c.current)),n=v.executeQuery((0,r.pi)((0,r.pi)({},t),{skip:!1})).then((function(e){return Object.assign(e,y)}));return n.catch((function(){})),n}),[]);return[_,g]}},63941:function(e,t,n){var r=n(71600);t.Z=void 0;var a=r(n(36229)),i=n(52322),l=(0,a.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=l},96620:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(7896),a=n(31461),i=n(2784),l=n(4050),s=n(60885),o=n(78352),c=n(80084),u=n(98485),d=n(23181),p=n(78909);function m(e){return(0,p.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var v=n(52322),h=["className","component"],f=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),g={variant:"head"},y="thead",_=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiTableHead"}),i=n.className,u=n.component,d=void 0===u?y:u,p=(0,a.Z)(n,h),_=(0,r.Z)({},n,{component:d}),b=(e=>{var t=e.classes;return(0,s.Z)({root:["root"]},m,t)})(_);return(0,v.jsx)(o.Z.Provider,{value:g,children:(0,v.jsx)(f,(0,r.Z)({as:d,className:(0,l.Z)(b.root,i),ref:t,role:d===y?null:"rowgroup",ownerState:_},p))})}))},89103:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(31461),a=n(62048),i=n(48183),l=n(64617),s=n(7904),o=n(32271),c=n(58893),u=["data"],d=(0,i.ZL)()((e=>({root:{[e.breakpoints.up("lg")]:{columnCount:2,columnGap:e.spacing(3)},[e.breakpoints.up(e.breakpoints.values.xxl)]:{columnGap:e.spacing(4)},"&>*":{marginBottom:e.spacing(4),[e.breakpoints.up(e.breakpoints.values.xxl)]:{marginBottom:e.spacing(8)},"&:last-child":{marginBottom:0}}}}))),p=["options"],m={COLUMN_TEXT:e=>{var t=e.data,n=(0,r.Z)(e,u),a=d().classes,i=(0,l.getSlotEntries)(t.slots[0]);return(0,c.jsx)(s.Z,Object.assign({className:a.root},n,{children:i.map(((e,t)=>(0,c.jsx)(o.Z,{entry:e,testId:"column-text-item-"+(t+1)},e.id)))}))}},v=e=>{var t=e.options,n=(0,r.Z)(e,p);return(0,c.jsx)(a.Z,Object.assign({},n,{options:Object.assign({},m,t)}))}},21848:function(e,t,n){n.d(t,{bQ:function(){return b},Nn:function(){return w},sr:function(){return P},Ci:function(){return k}});var r=n(10541),a=n(96142),i=n(98522),l=n(2784),s=n(98325),o=n(50960),c=n(67489),u=n(84031),d=n(44465);var p,m,v,h,f,g,y=n(93149),_=(0,a.Ps)(p||(p=(0,r.Z)(["\n  mutation Calculate($input: CalculationInput!) {\n    calculate(input: $input) {\n      currency\n      margin\n      pip_value\n      swap_long\n      swap_short\n      spread\n      commission\n    }\n  }\n"]))),b=()=>function(e,t){var n=(0,d.x)(null==t?void 0:t.client);(0,c.Vp)(e,c.n_.Mutation);var r=l.useState({called:!1,loading:!1,client:n}),a=r[0],p=r[1],m=l.useRef({result:a,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(m.current,{client:n,options:t,mutation:e});var v=l.useCallback((function(e){void 0===e&&(e={});var t=m.current,n=t.options,r=t.mutation,a=(0,i.pi)((0,i.pi)({},n),{mutation:r}),l=e.client||m.current.client;m.current.result.loading||a.ignoreResults||!m.current.isMounted||p(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:l});var c=++m.current.mutationId,d=(0,s.J)(a,e);return l.mutate(d).then((function(t){var n,r,a=t.data,i=t.errors,s=i&&i.length>0?new u.cA({graphQLErrors:i}):void 0,v=e.onError||(null===(n=m.current.options)||void 0===n?void 0:n.onError);if(s&&v&&v(s,d),c===m.current.mutationId&&!d.ignoreResults){var h={called:!0,loading:!1,data:a,error:s,client:l};m.current.isMounted&&!(0,o.D)(m.current.result,h)&&p(m.current.result=h)}var f=e.onCompleted||(null===(r=m.current.options)||void 0===r?void 0:r.onCompleted);return s||null==f||f(t.data,d),t})).catch((function(t){var n;if(c===m.current.mutationId&&m.current.isMounted){var r={loading:!1,error:t,data:void 0,called:!0,client:l};(0,o.D)(m.current.result,r)||p(m.current.result=r)}var a=e.onError||(null===(n=m.current.options)||void 0===n?void 0:n.onError);if(a)return a(t,d),{data:void 0,errors:t};throw t}))}),[]),h=l.useCallback((function(){m.current.isMounted&&p({called:!1,loading:!1,client:n})}),[]);return l.useEffect((function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}}),[]),[v,(0,i.pi)({reset:h},a)]}(_),x=((0,a.Ps)(m||(m=(0,r.Z)(['\n  query GetAccountTypes($account_types: [String]) {\n    accountTypes: allExnessAccountTypes(\n      filter: { account_type: { in: $account_types } }\n    ) {\n      account_type\n      currencies\n      leverage_max\n      instruments(\n        filter: { can_trade: { eq: true } }\n        sort: { fields: "instrument" }\n      ) {\n        account_type\n        calculation_mode\n        can_trade\n        contract_size\n        currency_base\n        currency_profit\n        instrument\n        max_volume\n        min_volume\n        pip_size\n        swap_long\n        swap_short\n      }\n    }\n  }\n']))),(0,a.Ps)(v||(v=(0,r.Z)(["\n  query GetConversionRates($from: String!, $to: String!) {\n    rates: allConversionRates(from: $from, to: $to) {\n      from\n      to\n      multiplier\n    }\n  }\n"])))),Z=((0,a.Ps)(h||(h=(0,r.Z)(["\n  query GetConversionCurrencies {\n    conversionMetadata {\n      currencies\n    }\n  }\n"]))),(0,a.Ps)(f||(f=(0,r.Z)(["\n  query GetPaymentMethods($country: String, $entity: String) {\n    allPaymentMethods(country: $country, entity: $entity) {\n      name\n      sites\n      description\n      deposit_min\n      deposit_max\n      deposit_term\n      withdrawal_min\n      withdrawal_max\n      withdrawal_term\n      allow_deposit\n      allow_withdrawal\n      icon\n    }\n  }\n"])))),j=(0,a.Ps)(g||(g=(0,r.Z)(['\n  query GetTradingNews($event_dt__gt: String!, $event_dt__lt: String!) {\n    allExnessTradingNews(\n      filter: { dm_symbols: { nin: ["", "N/A"] } }\n      sort: { fields: "event_dt" }\n      event_dt__gt: $event_dt__gt\n      event_dt__lt: $event_dt__lt\n      limit: 1000\n    ) {\n      id\n      event_dt\n      symbol\n      title\n      actual\n      prior\n      reuters_poll\n    }\n  }\n']))),w=()=>(0,y.t)(j),k=()=>(0,y.t)(Z),P=()=>(0,y.t)(x)},28576:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(31133),a=n(97995),i=n(89103),l=n(68079),s=n(2784),o=n(7904),c=n(97466),u=n(21848),d=n(98485),p=n(37442),m=n(67514),v=n(34196),h=n(1332),f=n(58893),g=(0,d.ZP)("div")((e=>({marginBottom:e.theme.spacing(5)}))),y=(0,d.ZP)(p.Z)({minWidth:"50%"}),_=(0,d.ZP)(m.Z)({display:"flex",justifyContent:"space-between"}),b=e=>{var t=e.currencies,n=e.value,r=e.onChange,a=(0,h.lO)().i18n,i=(0,s.useCallback)((e=>e.length<=3?e.join(", "):e.slice(0,3).join(", ")+" "+a.t("ui.titles.and",{_:"and"})+" "+(e.length-3)+" "+a.t("ui.titles.more",{_:"more"})),[a]);return(0,f.jsx)(g,{"data-testid":"economic-calendar-bar",children:(0,f.jsx)(y,{select:!0,label:a.t("ui.titles.symbols",{_:"Symbols"}),SelectProps:{multiple:!0,renderValue:i},name:"economic-calendar",value:n,id:"EconomicCalendarBarSymbols",onChange:r,children:null==t?void 0:t.map((e=>(0,f.jsxs)(_,{value:e,children:[e,(0,f.jsx)(v.Z,{checked:n.indexOf(e)>-1,color:"primary"})]},e)))})})},x=n(30799),Z=n(21999),j=n(96017),w=n(96620),k=n(66898),P=(0,d.ZP)(j.Z)((e=>({display:"none",[e.theme.breakpoints.up("lg")]:{display:"table-cell"}}))),C=(0,d.ZP)(j.Z)((e=>({[e.theme.breakpoints.only("xs")]:{minWidth:0,maxWidth:0}}))),O=(0,d.ZP)(C)((e=>{var t=e.theme;return{[t.breakpoints.up("lg")]:{minWidth:t.spacing(6)}}})),S=(0,d.ZP)("span")((e=>{var t=e.theme;return{display:"block",fontWeight:t.typography.fontWeightBold,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",minWidth:t.spacing(5)}})),M=(0,d.ZP)(C)((e=>({width:"45%",[e.theme.breakpoints.up("sm")]:{width:"100%"}}))),E=()=>{var e=(0,h.lO)().i18n;return(0,f.jsx)(w.Z,{children:(0,f.jsxs)(k.Z,{children:[(0,f.jsx)(O,{children:(0,f.jsx)(S,{children:e.t("ui.titles.time",{_:"Time"})})}),(0,f.jsx)(C,{children:(0,f.jsx)(S,{children:e.t("ui.titles.symbol",{_:"Symbol"})})}),(0,f.jsx)(M,{children:(0,f.jsx)(S,{children:e.t("ui.titles.event",{_:"Event"})})}),(0,f.jsx)(P,{align:"right",children:(0,f.jsx)(S,{children:e.t("ui.titles.actual",{_:"Actual"})})}),(0,f.jsx)(P,{align:"right",children:(0,f.jsx)(S,{children:e.t("ui.titles.forecast",{_:"Forecast"})})}),(0,f.jsx)(P,{align:"right",children:(0,f.jsx)(S,{children:e.t("ui.titles.previous",{_:"Previous"})})})]})})},T=n(61527),A=n(20349),N=n(98185),$=n(63941),F=(0,d.ZP)(k.Z)({backgroundColor:"#f3f3f3",cursor:"pointer"}),R=(0,d.ZP)($.Z,{shouldForwardProp(e){return"active"!==e}})((e=>{var t=e.active;return Object.assign({transition:"transform 0.2s linear"},t?{transform:"rotate(180deg)"}:{})})),B=(0,d.ZP)(j.Z)({borderBottom:"1px solid #b8baba"}),I=(0,d.ZP)(B)((e=>({wordBreak:"break-word",[e.theme.breakpoints.up("sm")]:{width:"auto",wordBreak:"normal"}}))),W=(0,d.ZP)(j.Z)((e=>({borderBottom:"1px solid #b8baba",display:"none",[e.theme.breakpoints.up("lg")]:{display:"table-cell"}}))),q=(0,d.ZP)(k.Z,{shouldForwardProp(e){return"active"!==e}})((e=>{var t=e.theme,n=e.active;return Object.assign({backgroundColor:t.palette.background.paper,verticalAlign:"top",display:"none"},n?{display:"table-row"}:{})})),G=new Array(5).fill(0).map(((e,t)=>(0,f.jsx)(q,{active:!0,children:new Array(6).fill(0).map(((e,t)=>{var n=t<=3?B:W;return(0,f.jsx)(n,{children:(0,f.jsx)(T.Z,{variant:"text",style:{height:22}})},t)}))},t))),D=e=>{var t=e.data,n=(0,h.lO)().locale,r=(0,s.useState)(!0),a=r[0],i=r[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F,{onClick:()=>{i(!a)},children:(0,f.jsx)(B,{variant:"head",colSpan:7,children:(0,f.jsxs)(A.Z,{display:"flex",justifyContent:"space-between",children:[t.value?(0,c.Z)(t.name).locale(n).format("L"):(0,f.jsx)(T.Z,{variant:"text",width:200}),(0,f.jsx)(R,{active:a})]})})}),t.value?t.value.map((e=>{var t=e.actual,n=e.id,r=e.event_dt,i=e.prior,l=e.reuters_poll,s=e.symbol,o=e.title;return(0,f.jsxs)(q,{active:a,children:[(0,f.jsx)(B,{children:(0,c.Z)(r).utc().format("HH:mm")}),(0,f.jsx)(B,{children:s}),(0,f.jsx)(I,{children:(0,f.jsx)(N.Z,{children:o})}),(0,f.jsx)(W,{align:"right",children:"NA"===t?"-":t}),(0,f.jsx)(W,{align:"right",children:"NA"===l?"-":l}),(0,f.jsx)(W,{align:"right",children:"NA"===i?"-":i})]},n)})):G]})},H=e=>{var t=e.data,n=0!==t.length?t:new Array(5).fill(0).map(((e,t)=>({name:String(t)})));return(0,f.jsxs)(x.Z,{children:[(0,f.jsx)(E,{}),(0,f.jsx)(Z.Z,{children:n.map((e=>(0,f.jsx)(D,{data:e},e.name)))})]})},Q=c.Z.utc().startOf("day"),L=e=>{var t=(0,s.useState)([]),n=t[0],r=t[1],a=(0,u.Nn)(),i=a[0],c=a[1].data;(0,s.useEffect)((()=>{i({variables:{event_dt__gt:Q.subtract(1,"day").format(),event_dt__lt:Q.add(6,"day").format()}})}),[i]);var d=null==c?void 0:c.allExnessTradingNews,p=(0,s.useMemo)((()=>new Set((d||[]).map((e=>e.symbol)))),[d]);(0,s.useEffect)((()=>{r((0,l.Z)(p))}),[p]);var m=(0,s.useMemo)((()=>{var e=(d||[]).filter((e=>{var t=e.symbol;return!n.length||n.includes(t)})).reduce(((e,t)=>{var n=t.event_dt.split("T")[0];return Object.assign({},e,{[n]:(e[n]||[]).concat(t)})}),{});return Object.keys(e).map((t=>({name:t,value:e[t]})))}),[d,n]),v=(0,s.useCallback)((e=>{var t=e.target;t.value.length>0&&r(t.value)}),[r]);return(0,f.jsxs)(o.Z,Object.assign({},e,{children:[(0,f.jsx)(b,{currencies:(0,l.Z)(p),value:n,onChange:v}),(0,f.jsx)(H,{data:m})]}))},J=e=>{var t=e.data.container;return(0,f.jsx)(i.Z,{document:t,children:e=>({[e.SECTIONS.CALENDAR]:L})})},z=e=>{var t=e.data;return(0,f.jsx)(r.e,{client:a.Z,children:(0,f.jsx)(J,{data:t})})}},97995:function(e,t,n){var r=n(68079),a=(n(43430),n(85884)),i=n(63421),l=n(47423),s=new a.f({cache:new i.h({typePolicies:{PieceOfNewsContent:{fields:{raw(e,t){var n=t.readField;return JSON.stringify(n("json"))},references(e,t){var n=t.readField,a=n("links").assets.block.map((e=>{var t=e.sys,n=e.title,r=e.description,a=e.fileName,i=e.contentType,l=e.url,s=e.width,o=e.height;return{__typename:"ContentfulAsset",contentful_id:t.__ref.replace("Sys:",""),file:{fileName:a,contentType:i,url:l,details:{image:{width:s,height:o}}},title:n,description:r,gatsbyImageData:{width:s,height:o,images:{fallback:{src:l}},layout:"fullWidth"}}})),i=n("links").entries.block.map((e=>{var t=e.sys,n=e.uri,r=e.locationOnPage,a=e.text;return{__typename:"ContentfulCtaButton",contentful_id:t.__ref.replace("Sys:",""),uri:n,locationOnPage:r,text:a}}));return[].concat((0,r.Z)(a),(0,r.Z)(i))}}},ExnessAccountType:{keyFields:["account_type"]},ExnessAccountTypeInstrument:{keyFields:["account_type","instrument"]},Asset:{fields:{preview(e,t){var n=t.readField;return{gatsbyImageData:{images:{fallback:{src:n("url")+"?w=1100"}},width:n("width"),height:n("height"),layout:"fullWidth"}}}}},Query:{fields:{allExnessAccountTypes:{merge(e,t,n){var a=n.readField,i=n.variables.account_types,l=void 0===i?[]:i;return(0,r.Z)(t).sort(((e,t)=>l.indexOf(a("account_type",e))-l.indexOf(a("account_type",t))))}}}}}}),link:new l.u({uri:"https://pwapi.ex2b.com/"})});t.Z=s}}]);