(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);t(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(100);var n=t(0),l=t.n(n),c=t(57),r=t(15),i=(t(102),t(121));function m(e){var a=e.items,t=Object(r.f)();return l.a.createElement("div",{className:"sideBarContainer"},l.a.createElement("ul",{className:"sideList"},a.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("div",null,l.a.createElement(i.a,{className:"buttonStyle",startIcon:l.a.createElement(e.icon,null),onClick:function(){return a=e.url,void t.push(a);var a}},e.tab)))}))))}var s=t(10),o=(t(110),t(87)),u=t(168),d=(t(111),t(161)),E=t(165),p=t(164),b=t(159),f=t(162),v=t(163),h=t(160),y=t(68),S=t.n(y);function N(e,a,t,n,l,c,r,i,m,s){return{orderID:e,customerName:a,phone:t,scheduledTime:n,placedTime:l,total:c,numItem:r,payment:i,status:m,action:s}}var g=[N(236,"Sylvie Hogan","202-555-0105","2020/08/21, 8:30pm","2020/08/21, 2:38pm","$22.00",1,"Credit Card","Confirmed"),N(235,"Afsana Bradshaw","304-747-1751","2020/08/21, 8:00pm","2020/08/21, 1:36pm","$38.75",3,"Cash","Confirmed"),N(234,"Denis Hurst","864-921-9961","2020/08/21, 8:00pm","2020/08/21, 4:34pm","$160.50",7,"Credit Card","Confirmed"),N(233,"Mac Mullins","856-276-6531","2020/08/21, 7:30pm","2020/08/21, 5:23pm","$250.40",15,"Credit Card","Completed"),N(222,"Nella England","618-606-2145","2020/08/21, 7:15pm","2020/08/21, 4:31pm","56.80",3,"Card","Completed")];function C(){var e=l.a.useState(g),a=Object(s.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{className:"pickUpStyle"},l.a.createElement("div",{className:"pickUpTitle"},"Pickup Order List"),l.a.createElement(b.a,{component:h.a},l.a.createElement(d.a,null,l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"OrderID"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Customer Name"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Phone"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Scheduled Time"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Placed Time"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Total"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"# items"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Payment"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Status"),l.a.createElement(p.a,{className:"tableHeadStyle",align:"left"},"Action"))),l.a.createElement(E.a,null,t.map((function(e,a){return l.a.createElement(v.a,{key:e.orderID},l.a.createElement(p.a,{align:"left"},e.orderID),l.a.createElement(p.a,{align:"left"},e.customerName),l.a.createElement(p.a,{align:"left"},e.phone),l.a.createElement(p.a,{align:"left"},e.scheduledTime),l.a.createElement(p.a,{align:"left"},e.placedTime),l.a.createElement(p.a,{align:"left"},e.total),l.a.createElement(p.a,{align:"left"},e.numItem),l.a.createElement(p.a,{align:"left"},e.payment),l.a.createElement(p.a,{align:"left"},e.status),l.a.createElement(p.a,{align:"left"},l.a.createElement(i.a,{startIcon:l.a.createElement(S.a,null),onClick:function(){return e=a,void n(t.filter((function(a,t){return t!==e})));var e},color:"secondary"})))}))))))}var O=t(169),T=(t(113),t(74)),I=t.n(T),x=t(38),k=(t(114),t(21)),j=t(54),w=t.n(j),P=t(53),A=t.n(P),B=t(71),q=t.n(B),D=t(170);function M(e){return{type:"DELETE_TABLE",payload:e}}function F(e,a){return{type:"UPDATE_TABLE",table:e,tableIndex:a}}var H=t(166),L=t(70),z=t.n(L),R=t(51),$=t.n(R);var W=Object(k.b)()((function(e){var a=e.isEdit,t=e.table,n=l.a.useState(a?t.capacity:1),c=Object(s.a)(n,2),r=c[0],m=c[1],o=l.a.useState(a?t.name:""),u=Object(s.a)(o,2),d=u[0],E=u[1],p=l.a.useState(!1),b=Object(s.a)(p,2),f=b[0],v=b[1],h=l.a.useState(a?t.length:"1"),y=Object(s.a)(h,2),S=y[0],N=y[1],g=l.a.useState(!1),C=Object(s.a)(g,2),O=C[0],T=C[1],I=l.a.useState(a?t.width:"1"),k=Object(s.a)(I,2),j=k[0],P=k[1],B=l.a.useState(!1),L=Object(s.a)(B,2),R=L[0],W=L[1],U=function(){e.closeTableModal()},_=f||R||O;return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"formStytle"},l.a.createElement("div",{className:"topButtons"},l.a.createElement("div",{className:"iconButtonStyle"},a&&l.a.createElement(H.a,{title:"Delete Table",className:"deleteIconStyle",onClick:function(){U(),e.dispatch(M(e.tableIndex))}},l.a.createElement(z.a,null))),l.a.createElement("div",{className:"closeIconStyle"},l.a.createElement(H.a,{title:"Close",onClick:U},l.a.createElement($.a,null)))),l.a.createElement("div",{className:"titleStyle"},l.a.createElement(q.a,null),l.a.createElement("span",null,a?" Edit table":" Add table")),l.a.createElement("div",{className:"nameStyle"},l.a.createElement("label",null,"Table Number"),l.a.createElement(D.a,{error:f,helperText:f?"Please input a table name":null,label:"Enter Table Number",className:"textFieldStyle",variant:"outlined",size:"small",defaultValue:d,onChange:function(e){var a=e.target.value;v(0===a.trim().length),E(a)}})),l.a.createElement("div",{className:"capacityStyle"},l.a.createElement("label",null,"Seat Capacity"),l.a.createElement(i.a,{onClick:function(){m(r-1)},disabled:r<=1,startIcon:l.a.createElement(A.a,null)}),l.a.createElement("span",{className:"capacityPadding"},r),l.a.createElement(i.a,{onClick:function(){m(r+1)},startIcon:l.a.createElement(w.a,null)})),l.a.createElement("div",{className:"sizeContainer"},l.a.createElement("div",{className:"sizeStyle"},l.a.createElement("label",null,"Table Size - Length"),l.a.createElement(D.a,{error:O,helperText:O?"Please input a valid length":null,type:"number",label:"Enter Length",className:"textFieldStyle",variant:"outlined",size:"small",defaultValue:S,onChange:function(e){var a=e.target.value;T(0===a.trim().length||parseInt(a)<=0),N(a)}})),l.a.createElement("div",{className:"sizeStyle"},l.a.createElement("label",null,"Table Size - Width"),l.a.createElement(D.a,{error:R,helperText:R?"Please input a valid width":null,type:"number",label:"Enter Width",className:"textFieldStyle",variant:"outlined",size:"small",defaultValue:j,onChange:function(e){var a=e.target.value;W(0===a.trim().length||parseInt(a)<=0),P(a)}}))),l.a.createElement("div",{className:"bottomButtonStyle"},l.a.createElement(i.a,{className:"btnStyle",variant:"outlined",color:"primary",onClick:U},"Cancel"),l.a.createElement(i.a,{className:"btnStyle",variant:"contained",color:"secondary",disabled:_,onClick:function(){0!==d.length?(a?e.dispatch(F(Object(x.a)({},t,{name:d,capacity:r,width:j,length:S}),e.tableIndex)):e.dispatch(function(e){return{type:"ADD_TABLE",payload:e}}({name:d,capacity:r,width:j,length:S,menuItems:[]})),U()):v(!0)}},"Save"))))})),U=(t(116),t(117),t(167));t(118);function _(e){var a=e.item,t=e.table,n=l.a.useState(a.quantity),c=Object(s.a)(n,2),r=c[0],m=c[1];return l.a.createElement("div",{className:"orderContainer"},l.a.createElement("div",{className:"gridContainer"},l.a.createElement("span",null,a.dish),l.a.createElement("span",{className:"priceStyle"},"$ ",(Math.round(100*a.price)/100).toFixed(2))),l.a.createElement("div",{className:"menuButtons"},l.a.createElement(i.a,{disabled:r<=1,onClick:function(){m(r-1),a.quantity--,e.updateSubtotal(-a.price)},startIcon:l.a.createElement(A.a,null)}),l.a.createElement("span",{className:"capacityPadding"},a.quantity),l.a.createElement(i.a,{onClick:function(){m(r+1),a.quantity++,e.updateSubtotal(a.price)},color:"primary",startIcon:l.a.createElement(w.a,null)}),l.a.createElement(i.a,{className:"removeButton",onClick:function(){t.menuItems=t.menuItems.filter((function(e){return e!==a})),e.updateSubtotal(-a.price*a.quantity)}},"Remove")))}var J=Object(k.b)()((function(e){var a=e.table,t=function(){e.closeTableOrderModal()},n=l.a.useState(function(){var e=0;return a.menuItems.forEach((function(a){e+=a.quantity*a.price})),e}()),c=Object(s.a)(n,2),r=c[0],m=c[1],o=function(e){return m(r+e)},u=function(){return.1*(r-p)},d=l.a.useState(""),E=Object(s.a)(d,2),p=E[0],b=E[1];return l.a.createElement("div",{className:"tableOrderModal"},l.a.createElement("div",{className:"tableOrder"},l.a.createElement("div",{className:"closeOrderIconStyle"},l.a.createElement(H.a,{title:"Close",onClick:t},l.a.createElement($.a,null))),l.a.createElement("div",{className:"formContainer"},l.a.createElement("div",{className:"leftContainer"},l.a.createElement("div",{className:"tableNumStyle"},l.a.createElement("span",null,"Table: ",a.name)),l.a.createElement("div",{className:"tableOrderStyle"},l.a.createElement("span",{className:"orderTitleSytle"},"Order Details"),l.a.createElement("div",null,l.a.createElement("ul",{className:"menuContainer"},a.menuItems.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(_,{table:a,item:e,updateSubtotal:o}))}))))),l.a.createElement("div",{className:"checkoutStyle"},l.a.createElement("span",null,"Subtotal:"),l.a.createElement("span",{className:"priceStyle"},"$",(Math.round(100*r)/100).toFixed(2)),l.a.createElement("span",null,"Discount:"),l.a.createElement("div",{className:"discount"},l.a.createElement("span",null,"-$"),l.a.createElement("input",{id:"discount",type:"number",variant:"outlined",defaultValue:0,className:"discountTextField",onChange:function(e){return b(e.target.value)}})),l.a.createElement("span",null,"Tax:"),l.a.createElement("span",{className:"priceStyle"},"$",(Math.round(100*u())/100).toFixed(2)),l.a.createElement("span",null,"Order Total:"),l.a.createElement("span",{className:"priceStyle"},"$",(Math.round(100*(r-p+u()))/100).toFixed(2)))),l.a.createElement("div",{className:"rightContainer"},l.a.createElement(U.a,{orientation:"vertical",color:"primary"},l.a.createElement(i.a,null,"Print Order"),l.a.createElement(i.a,null,"Print Invoice"),l.a.createElement(i.a,null,"Add Item"),l.a.createElement(i.a,null,"End Order"),l.a.createElement(i.a,null,"Switch Table")))),l.a.createElement("div",{className:"menuButtonStyle"},l.a.createElement(i.a,{className:"btnStyle",variant:"outlined",color:"primary",onClick:t},"Cancel"),l.a.createElement(i.a,{className:"btnStyle",variant:"contained",color:"secondary",onClick:function(){e.dispatch(F(a,e.tableIndex)),t()}},"Save"))))})),V=(t(119),t(171)),G=t(72),K=t.n(G);var Q=Object(k.b)()((function(e){var a=e.table,t=l.a.useState(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],m=l.a.useState(null),o=Object(s.a)(m,2),u=o[0],d=o[1],E=function(){d(null)},p=Boolean(u),b=p?"simple-popover":void 0;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"moreActionIcon"},l.a.createElement(K.a,{style:{position:"inherit"},onClick:function(e){d(e.currentTarget)}}))),l.a.createElement(V.a,{id:b,open:p,anchorEl:u,onClose:E,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement("div",null,l.a.createElement(U.a,{orientation:"vertical",color:"primary"},l.a.createElement(i.a,{onClick:function(){d(null),r(!0)}},"Edit Table"),l.a.createElement(i.a,{onClick:function(){e.dispatch(M(e.tableIndex)),E()}},"Delete Table")))),c?l.a.createElement(W,{isEdit:!0,tableIndex:e.tableIndex,table:a,closeTableModal:function(){r(!1)}}):null)})),X=t(73),Y=t.n(X);var Z=Object(k.b)()((function(e){var a=JSON.parse(JSON.stringify(e.table)),t=l.a.useState(!1),n=Object(s.a)(t,2),c=n[0],r=n[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tableStyle",style:{width:120*a.width,height:120*a.length}},l.a.createElement("div",{className:"moreHorizStyle"},l.a.createElement(Q,{tableIndex:e.tableIndex,table:a})),l.a.createElement("div",{className:"tableFieldsWrapper",onClick:function(){r(!0)}},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",{className:"tableNameSpan"},a.name)),l.a.createElement("div",{className:"iconWrapper"},l.a.createElement(Y.a,null),l.a.createElement("span",{className:"tableCapacitySpan"},"x ",a.capacity))))),c&&l.a.createElement(J,{tableIndex:e.tableIndex,table:a,closeTableOrderModal:function(){r(!1)}}))}));var ee=Object(k.b)((function(e){return{tables:e.tables}}))((function(e){var a=l.a.useState(!1),t=Object(s.a)(a,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"buttonContainer"},l.a.createElement(i.a,{variant:"contained",color:"secondary",startIcon:l.a.createElement(I.a,null),onClick:function(){c(!0)}},"Add Table"),n&&l.a.createElement(W,{isEdit:!1,closeTableModal:function(){c(!1)}})),l.a.createElement("div",{className:"tableContainer"},e.tables.map((function(e,a){return l.a.createElement(Z,{tableIndex:a,table:e})}))))})),ae=t(172),te=Object(o.a)({palette:{primary:{main:"#1f504c"},secondary:{main:"#4c7c78"}}});function ne(){var e=l.a.useState(0),a=Object(s.a)(e,2),t=a[0],n=a[1];return l.a.createElement(u.a,{theme:te},l.a.createElement("div",{className:"pageStyle"},l.a.createElement("div",{className:"tabsContainer"},l.a.createElement(ae.a,{value:t,onChange:function(e,a){n(a)},indicatorColor:"primary",textColor:"primary"},l.a.createElement(O.a,{className:"tabStyle",label:"Dine In"}),l.a.createElement(O.a,{className:"tabStyle",label:"Pick Up"}))),l.a.createElement("div",{className:"dineInContainer"},0===t&&l.a.createElement(ee,null)),l.a.createElement("div",{className:"pickUpContainer"},1===t&&l.a.createElement(C,null))))}var le=t(82),ce=t.n(le),re=t(79),ie=t.n(re),me=t(75),se=t.n(me),oe=t(77),ue=t.n(oe),de=t(78),Ee=t.n(de),pe=t(83),be=t.n(pe),fe=t(84),ve=t.n(fe),he=t(81),ye=t.n(he),Se=t(76),Ne=t.n(Se),ge=t(86),Ce=t.n(ge),Oe=t(85),Te=t.n(Oe),Ie=t(80),xe=t.n(Ie);function ke(){var e=[{tab:"Dashboard",url:"/",icon:se.a},{tab:"Tables",url:"/tables",icon:Ne.a},{tab:"Orders",url:"/orders",icon:ue.a},{tab:"Menu",url:"/menu",icon:Ee.a},{tab:"Profile",url:"/profile",icon:ie.a},{tab:"Hours",url:"/hours",icon:xe.a},{tab:"Reviews",url:"/reviews",icon:ye.a},{tab:"Bank Account",url:"/bankAccount",icon:ce.a},{tab:"Transaction",url:"/transaction",icon:be.a},{tab:"Transfers",url:"/transfers",icon:ve.a},{tab:"Staff",url:"/staff",icon:Te.a},{tab:"Settings",url:"/settings",icon:Ce.a}];return l.a.createElement(c.a,{basename:"/restaurant"},l.a.createElement("div",{className:"container"},l.a.createElement(m,{items:e}),l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/tables"},l.a.createElement(ne,null)),l.a.createElement(r.a,{exact:!0,path:"/orders"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/menu"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/profile"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/hours"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/reviews"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/bankAccount"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/transaction"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/transfer"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/stuff"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/settings"},l.a.createElement(je,null)),l.a.createElement(r.a,{exact:!0,path:"/"},l.a.createElement(je,null)),l.a.createElement(r.a,{component:je}))))}function je(){return l.a.createElement("div",null)}var we=t(88),Pe={tables:[{name:"A1",capacity:1,width:1,length:1,menuItems:[{dish:"R1. Original Crossing Bridge Rice Noodles",price:14.49,quantity:1},{dish:"S2. Spicy and Sour Cucumber",price:5.5,quantity:1},{dish:"S7. Sweet Potato Fries with Plum Seasoning",price:4.5,quantity:2},{dish:"R5. Freshly Squeezed Lemon Black Tea",price:4.5,quantity:1}]},{name:"A2",capacity:2,width:1,length:2,menuItems:[{dish:"R9. Green Pepper Fish with Rice",price:19.49,quantity:3},{dish:"S4. Popcorn Chicken, price: ",price:6.5,quantity:1},{dish:"S5. Chilled Mango Sago Cream with Pomelo",price:7.6,quantity:2},{dish:"R1. Oreo Pearl Milk Tea",price:4.5,quantity:1}]},{name:"A3",capacity:5,width:2,length:2,menuItems:[{dish:"R6. Beef Slice with Kimchi Rice Noodles",price:16.49,quantity:1},{dish:"S2. Crispy Chicken Wings",price:6,quantity:1},{dish:"S8. Coconut Purple Rice Tapioca Soup",price:4.5,quantity:1},{dish:"R9. Passion Fruit and Mango",price:4.25,quantity:4}]}]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TABLE":return Object(x.a)({},e,{tables:[].concat(Object(we.a)(e.tables),[a.payload])});case"DELETE_TABLE":var t=Object(x.a)({},e,{tables:e.tables.filter((function(e,t){return t!==a.payload}))});return t;case"UPDATE_TABLE":return Object(x.a)({},e,{tables:e.tables.map((function(e,t){return t===a.tableIndex?a.table:e}))});default:return e}},Be=t(9),qe=t.n(Be),De=t(50),Me=Object(De.b)(Ae);qe.a.render(l.a.createElement(k.a,{store:Me},l.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t(120)},99:function(e,a,t){}},[[98,1,2]]]);
//# sourceMappingURL=main.d1bf394c.chunk.js.map