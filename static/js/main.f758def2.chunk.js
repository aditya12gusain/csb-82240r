(this["webpackJsonpcustom-grid-layout"]=this["webpackJsonpcustom-grid-layout"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(24),n=c(7),o=c(3),r=c(25),j=c.n(r),l=c(5),d=c(0),u=Object(l.WidthProvider)(l.Responsive),b=function(e){var t=Object(s.useState)("lg"),c=Object(o.a)(t,2),i=c[0],r=c[1],l=Object(s.useState)("vertical"),b=Object(o.a)(l,2),O=b[0],h=(b[1],Object(s.useState)(!1)),x=Object(o.a)(h,2),m=x[0],p=x[1],v=Object(s.useState)({lg:[{x:0,y:0,w:1,h:1,i:"0",static:!1},{x:4,y:5,w:3,h:2,i:"1",static:!1}]}),f=Object(o.a)(v,2),y=f[0];f[1];return a.a.useEffect((function(){p(!0)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Current Breakpoint: ",i," (",e.cols[i]," ","columns)"]}),Object(d.jsxs)("div",{children:["Compaction type: ",j.a.capitalize(O)||"No Compaction"]}),Object(d.jsx)(u,Object(n.a)(Object(n.a)({},e),{},{layouts:y,onBreakpointChange:function(e){r(e)},measureBeforeMount:!1,useCSSTransforms:m,compactType:O,preventCollision:!O,children:y.lg.map((function(e,t){return Object(d.jsx)("div",{className:e.static?"static":"",children:e.static?Object(d.jsxs)("span",{className:"text",title:"This item is static and cannot be removed or resized.",children:["Static - ",t]}):Object(d.jsx)("span",{className:"text",children:t})},t)}))}))]})};b.defaultProps={className:"layout",rowHeight:30,onLayoutChange:function(){},cols:{lg:12,md:10,sm:6,xs:4,xxs:2}};var O=b,h=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.useCallback)((function(e){a(e)}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"layoutJSON",children:["Displayed as ",Object(d.jsx)("code",{children:"[x, y, w, h]"}),":",Object(d.jsx)("div",{className:"columns",children:c.map((function(e){return Object(d.jsxs)("div",{className:"layoutItem",children:[Object(d.jsx)("b",{children:e.i}),": [",e.x,", ",e.y,", ",e.w,", ",e.h,"]"]},e.i)}))})]}),Object(d.jsx)(O,{onLayoutChange:i})]})};c(14),c(6),Object(l.WidthProvider)(l.Responsive),c(45);function x(){var e=window.gridProps||{};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,Object(n.a)({},e))})}var m=document.getElementById("root");Object(i.createRoot)(m).render(Object(d.jsx)(s.StrictMode,{children:Object(d.jsx)(x,{})}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f758def2.chunk.js.map