(this.webpackJsonpemall=this.webpackJsonpemall||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),j=c(23),o=c.n(j),r=(c(77),c(30)),l=c(3),d=c(112),h=c(110),b=c(113),O=c(111),x=(c(78),[{id:0,title:"White and Black",content:"Born in France",price:12e4,image:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,image:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,image:"https://codingapple1.github.io/shop/shoes3.jpg"}]),u=c(51),p=c(8),g=c(52),m=c(1),f=g.a.div(n||(n=Object(u.a)(["\n    padding : 20px;\n"]))),v=g.a.h4(i||(i=Object(u.a)(["\n    font-size : 25px;\n"])));function N(){return Object(m.jsx)("div",{className:"my-alert",children:Object(m.jsx)("p",{children:"Out of Stock!"})})}function k(e){e.stock[0]}var L=function(e){Object(s.useEffect)((function(){setTimeout((function(){i(!1)}),2e3)}),[alert]);var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),j=Object(l.a)(a,2),o=j[0],r=j[1],d=Object(p.f)(),h=Object(p.g)().id,b=e.shoeList.find((function(e){return e.id==h}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(f,{children:Object(m.jsx)(v,{className:"red",children:"Detail"})}),Object(m.jsx)("input",{onChange:function(e){r(e.target.value)}}),o,n?Object(m.jsx)(N,{}):null,Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(m.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(m.jsx)("h4",{className:"pt-5",children:b.title}),Object(m.jsx)("p",{children:b.content}),Object(m.jsx)("p",{children:b.price}),Object(m.jsx)(k,{stock:e.stock,children:" "}),Object(m.jsx)("button",{className:"btn btn-danger",children:"\uc8fc\ubb38\ud558\uae30"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){d.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},S=c(69),B=c.n(S),w=c(29);function C(){return Object(m.jsx)("div",{className:"NavigationBar",children:Object(m.jsx)(d.a,{bg:"light",expand:"lg",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(d.a.Brand,{href:"#home",children:"PAPERWARE INC."}),Object(m.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(b.a,{className:"me-auto",children:[Object(m.jsx)(b.a.Link,{children:Object(m.jsx)(w.b,{to:"/",children:"Home"})}),Object(m.jsx)(b.a.Link,{children:Object(m.jsx)(w.b,{to:"/detail",children:"Detail"})}),Object(m.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(m.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(m.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(m.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(m.jsx)(O.a.Divider,{}),Object(m.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})})}function F(){return Object(m.jsx)("div",{className:"Jumbotron"})}function I(e){return Object(m.jsx)("div",{className:"Layout",children:Object(m.jsx)("div",{className:"row",children:e.shoeList.map((function(t,c){return Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("img",{src:e.shoeList[c].image,width:"100%",alt:""}),Object(m.jsx)("h4",{children:e.shoeList[c].title}),Object(m.jsxs)("p",{children:[e.shoeList[c].title," & ",e.shoeList[c].price]})]})}))})})}var D=function(){var e=Object(s.useState)(x),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(l.a)(i,2),j=a[0];return a[1],console.log(c),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(C,{}),Object(m.jsxs)(p.c,{children:[Object(m.jsxs)(p.a,{exact:!0,path:"/",children:[Object(m.jsx)(F,{}),Object(m.jsx)(I,{shoeList:c}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(r.a)(c),Object(r.a)(e.data)))})).catch((function(){console.log("Failed")}))},children:"\ub354\ubcf4\uae30"})]}),Object(m.jsx)(p.a,{exact:!0,path:"/detail/:id",children:Object(m.jsx)(L,{shoeList:c,stock:j})}),Object(m.jsx)(p.a,{exact:!0,path:"/:id",children:Object(m.jsx)("div",{children:"404 NOT FOUND"})})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w.a,{children:Object(m.jsx)(D,{})})}),document.getElementById("root")),A()},77:function(e,t,c){},78:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.6827c9f9.chunk.js.map