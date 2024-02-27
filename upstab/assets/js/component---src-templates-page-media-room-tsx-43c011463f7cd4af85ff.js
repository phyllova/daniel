"use strict";(self.webpackChunk_exness_public_website=self.webpackChunk_exness_public_website||[]).push([[205],{15135:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var i=a(62048),n=a(68079),r=a(2784),s=a(98485),o=a(7904),l=a(33401),c=a(70997);var d=a(13591),g=a(99138),p=a(20349),m=a(58893),u=(0,s.ZP)(g.Z)((e=>{var t=e.theme;return{"& .MuiPaginationItem-root":Object.assign({},t.typography.body5RegularAdaptive,{borderRadius:t.spacing(.25),minWidth:t.spacing(4),height:t.spacing(4),border:"1px solid "+t.palette.grey[400],"&.Mui-selected":Object.assign({},t.typography.body5SemiboldAdaptive,{backgroundColor:t.palette.grey[200]})})}})),h=(0,s.ZP)(p.Z)((e=>{var t=e.theme;return{borderTop:"1px solid "+t.palette.grey[400],paddingTop:t.spacing(4),display:"flex",flexDirection:"row",justifyContent:"center"}})),b=e=>(0,m.jsx)(h,{children:(0,m.jsx)(u,Object.assign({shape:"rounded",variant:"outlined"},e))}),x=e=>{var t,a,i,n=e.limit,s=e.total,o=e.initialPage,l=e.onPageChange,c=e.className,g=(0,d.Z)({limit:n,total:s,page:o}),p=g.skip,u=g.count,h=g.setPage,x=null!==(a=p,i=(0,r.useRef)(),(0,r.useEffect)((function(){i.current=a})),t=i.current)&&void 0!==t?t:p;(0,r.useEffect)((()=>{p!==x&&l(p,p+n)}),[p,n,l,x]);var v=(0,r.useCallback)(((e,t)=>h(t)),[h]);return(0,m.jsx)(b,{className:c,count:u,shape:"rounded",variant:"outlined",onChange:v})},v=a(1332),j=(0,s.ZP)(c.ZJ)((e=>{var t=e.theme;return{marginBottom:t.spacing(4),maxWidth:1280,[t.breakpoints.up("xl")]:{margin:"auto",width:"100%"},"& .ArticlesItem":{"& .ArticleImageLink":{padding:t.spacing(0,6)},"& .ArticleSubtitle":Object.assign({},t.typography.body3SemiboldAdaptive,{color:t.palette.grey[600]}),"& .ArticleTitle":Object.assign({},t.typography.heading4Adaptive)}}})),f={imageFit:"contain"},y=e=>{var t=e.data,a=e.mediaRoomArticles.nodes,i=e["data-testid"],s=(0,v.gW)(),c=(0,r.useRef)(null),d=(0,r.useState)([0,6]),g=d[0],p=d[1],u=a.map((e=>({foreword:e.foreword.foreword,id:e.contentful_id,image:e.journal.icon,imageAlt:e.title,subTitle:e.journal.title,title:e.title,href:e.uri.href,target:"__blank"}))),h=(0,r.useCallback)(((e,t)=>{p([e,t]),c.current&&s(c.current)}),[s]);return(0,m.jsxs)(o.Z,{"data-testid":i,children:[(0,m.jsx)(l.Z,{children:t.title}),(0,m.jsx)(j,{drawSkeletons:!0,containerRef:c,ArticleProps:f,items:u.slice.apply(u,(0,n.Z)(g)),count:6,"data-testid":"media-article"}),u.length>6&&(0,m.jsx)(x,{limit:6,total:u.length,initialPage:1,onPageChange:h})]})},Z=e=>{var t=e.data,a=t.container,n=t.mediaRoomArticles;return(0,m.jsx)(i.Z,{document:a,children:e=>({[e.SECTIONS.MEDIA_ROOM_ARTICLES]:e=>(0,m.jsx)(y,Object.assign({mediaRoomArticles:n},e))})})},A=e=>{var t=e.data;return(0,m.jsx)(Z,{data:t})}},6365:function(e,t,a){a.d(t,{$:function(){return b},d:function(){return x}});var i=a(98485),n=a(20349),r=a(98185),s=a(63207),o=a(31574),l=a(61527),c=a(76301),d=a(57064),g=a(58893),p=(0,i.ZP)(n.Z)((()=>({display:"flex",flexDirection:"column"}))),m=(0,i.ZP)(c.Z)((()=>({order:-1}))),u=(0,i.ZP)(d.Z)((e=>{var t=e.theme,a=e.objectFit,i=void 0===a?"cover":a;return{marginBottom:t.spacing(2),width:"100%",objectFit:i,aspectRatio:"16/9"}})),h=(0,i.ZP)(n.Z)((e=>({marginBottom:e.theme.spacing(1),display:"flex",justifyContent:"space-between",alignItems:"center"}))),b=e=>{var t=e.subTitle,a=e.title,i=e.foreword,n=e.image,o=e.imageAlt,l=e.badge,d=e.slug,b=e.href,x=e.className,v=e.target,j=e["data-testid"],f=e.imageFit;return(0,g.jsxs)(p,{className:x,"data-testid":j,children:[(0,g.jsx)(m,{className:"ArticleImageLink",slug:d,href:b,target:v,children:(0,g.jsx)(u,{className:"ArticleImage",alt:o,data:n,objectFit:f})}),(0,g.jsxs)(h,{className:"ArticleDetails",children:[(0,g.jsx)(r.Z,{className:"ArticleSubtitle","data-testid":j+":subtitle",variant:"body5RegularAdaptive",color:"text.secondary",children:t}),l&&(0,g.jsx)(s.Z,{"data-testid":j+":badge",variant:"outlined",size:"medium",label:l})]}),(0,g.jsxs)(c.Z,{className:"ArticleLink",slug:d,href:b,target:v,underline:"none",color:"text.primary",children:[(0,g.jsx)(r.Z,{gutterBottom:!0,"data-testid":j+":title",variant:"heading3Adaptive",className:"ArticleTitle",children:a}),i&&(0,g.jsx)(r.Z,{className:"ArticleForeword","data-testid":j+":text",children:i})]})]})},x=e=>(0,g.jsxs)(o.Z,Object.assign({},e,{elevation:0,children:[(0,g.jsx)(l.Z,{height:200,variant:"rectangular"}),(0,g.jsx)(l.Z,{height:50,width:110}),(0,g.jsx)(l.Z,{height:50,width:210})]}))},70997:function(e,t,a){a.d(t,{wA:function(){return y},ZJ:function(){return l}});var i=a(91920),n=a(98485),r=a(6365),s=a(58893),o=(0,n.ZP)(i.ZP)((e=>{var t=e.theme;return{[t.breakpoints.up("sm")]:{marginBottom:t.spacing(4.5)},[t.breakpoints.up("md")]:{marginBottom:t.spacing(6)},[t.breakpoints.up("lg")]:{marginBottom:t.spacing(8)},[t.breakpoints.up("xl")]:{marginBottom:t.spacing(12)}}})),l=e=>{var t=e.items,a=e.drawSkeletons,n=e.containerRef,l=e.count,c=e["data-testid"],d=e.className,g=e.ArticleProps;if(!t&&a){var p=new Array(l).fill(0);return(0,s.jsx)(i.ZP,{ref:n,container:!0,spacing:4,className:d,children:p.map(((e,t)=>(0,s.jsx)(o,{item:!0,lg:4,md:6,xs:12,children:(0,s.jsx)(r.d,{})},t)))})}return t?(0,s.jsx)(i.ZP,{ref:n,container:!0,className:d,spacing:4,children:t.map((e=>(0,s.jsx)(o,{item:!0,className:"ArticlesItemWrapper",lg:4,md:6,xs:12,children:(0,s.jsx)(r.$,Object.assign({className:"ArticlesItem","data-testid":c},e,g))},e.id)))}):null},c=a(98537),d=a.n(c),g=a(20349),p=a(98185),m=a(48183),u=a(49174),h=a(57064),b=a(6824),x=a(51739),v=(0,u.Z)("blockquote")((e=>{var t=e.theme;return{[t.breakpoints.up("md")]:{margin:t.spacing(4,0,4,0),padding:t.spacing(2,2,2,8)},margin:t.spacing(2,0,2,0),padding:t.spacing(2,2,2,5.5),position:"relative","& p":{fontSize:t.typography.heading2Adaptive.fontSize,fontWeight:700,marginBottom:0},"&::before":{content:'"“"',color:t.palette.secondary.main,display:"block",position:"absolute",top:t.spacing(1.5),left:t.spacing(1.5),fontSize:t.spacing(7),lineHeight:t.spacing(7),[t.breakpoints.up("md")]:{top:t.spacing(1.5),left:t.spacing(2),fontSize:t.spacing(9),lineHeight:t.spacing(9)}}}})),j=e=>(0,s.jsx)(v,Object.assign({},e)),f=(0,u.Z)("div")((e=>{var t=e.theme;return{lineHeight:1,margin:t.spacing(2,0),[t.breakpoints.up("md")]:{margin:t.spacing(4,0)}}})),y=(0,m.D2)((e=>{var t=e.data,a=e.EmbeddedEntry,i=e.classes,n=!0;return(0,s.jsx)(b.Z,{classes:i,document:t,children:e=>{var t=e.BLOCKS,r=e.INLINES;return{[t.EMBEDDED_ASSET]:e=>{var t,a,i=e.data.target&&(0,s.jsxs)(f,{children:[(t=e.data.target,a=n,"video/mp4"===t.file.contentType?(0,s.jsx)(x.Z,{url:t.file.url}):(0,s.jsx)(h.Z,{loading:a?"eager":"lazy",data:t})),e.data.target.description&&(0,s.jsx)(g.Z,{mt:1,children:(0,s.jsx)(p.Z,{component:"div",variant:"captionRegularAdaptive",color:"text.secondary",children:e.data.target.description})})]});return n=!1,i},[t.QUOTE]:(e,t)=>(0,s.jsx)(j,{className:i.quote,children:t}),[t.EMBEDDED_ENTRY]:a,[r.EMBEDDED_ENTRY]:a}}})}),(e=>d()(["h2","h3","h4","h5"].reduce(((e,t)=>Object.assign({},e,{[t]:{"&:first-of-type":{marginTop:0}}})),{}),{h1:d()({margin:e.spacing(4,0,1),[e.breakpoints.up("md")]:{margin:e.spacing(8,0,2)},"& + h2":{marginTop:0}},e.typography.heading1Adaptive),h2:d()({margin:e.spacing(4,0,1),[e.breakpoints.up("md")]:{margin:e.spacing(8,0,2)},"& + h3":{marginTop:0}},e.typography.heading3Adaptive),h3:d()({margin:e.spacing(2,0,.5),[e.breakpoints.up("md")]:{margin:e.spacing(4,0,1)},"& + h4":{marginTop:0}},e.typography.heading4Adaptive),h4:Object.assign({},e.typography.heading5Adaptive,{margin:e.spacing(2,0,.5),"& + h5":{marginTop:0}}),h5:Object.assign({},e.typography.body3RegularAdaptive,{margin:e.spacing(2,0,.5)}),paragraph:Object.assign({},e.typography.body3RegularAdaptive,{"&:last-child":{marginBottom:0},"& code":{fontSize:"0.95rem"}}),tableContainer:{marginBottom:e.spacing(2)},table:{tableLayout:"fixed"},tableRow:{verticalAlign:"top"},li:{marginLeft:e.spacing(3.5),paddingLeft:e.spacing(.25),"& p":{margin:0},"&:not(:last-child)":{marginBottom:e.spacing(.5)},"&::marker":Object.assign({},e.typography.body3RegularAdaptive)},hyperlink:{color:e.palette.text.navigation,textDecoration:"none","&:visited":{color:e.palette.text.navigation},"&:hover":{textDecoration:"underline"}},ol:{padding:0},ul:{padding:0}}))),Z=a(20103),A=a(1454);(0,n.ZP)(A.Z)({display:"block",color:"inherit",textDecoration:"none","&:hover":{textDecoration:"underline"}}),(0,n.ZP)(Z.Link)({display:"block",color:"inherit",textDecoration:"none","&:hover":{textDecoration:"underline"}})}}]);