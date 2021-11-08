(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{28:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(28),c(4)),j=c(8),o=c(0),l=Object(n.createContext)(),d=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(j.a)(Object(j.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(j.a)(Object(j.a)({},e),{},{mode:t.payload});default:return e}};function u(e){var t=e.children,c=Object(n.useReducer)(d,{color:"#58249c",mode:"light"}),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(o.jsx)(l.Provider,{value:Object(j.a)(Object(j.a)({},a),{},{changeColor:function(e){s({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){s({type:"CHANGE_MODE",payload:e})}}),children:t})}var b=c(9),h=c(2),O=function(){var e=Object(n.useContext)(l);if(void 0===e)throw new Error("useTheme() must be used inside a ThemeProvider");return e},x=c(23),p=c(16),m=c.n(p),f=c(20),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),r=Object(i.a)(c,2),a=r[0],s=r[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),d=l[0],u=l[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),O=h[0],x=h[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),v=g[0],N=g[1],C=function(e){N({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(f.a)(m.a.mark((function t(n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,fetch(e,Object(j.a)(Object(j.a)({},n),{},{signal:c.signal}));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error(r.statusText);case 7:return t.next=9,r.json();case 9:a=t.sent,u(!1),s(a),x(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(u(!1),x("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&v&&n(v),function(){c.abort()}}),[e,v,t]),{data:a,isPending:d,error:O,postData:C}};c(31);function v(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),j=s[0],l=s[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),b=u[0],O=u[1],p=Object(n.useState)(""),m=Object(i.a)(p,2),f=m[0],v=m[1],N=Object(n.useState)([]),C=Object(i.a)(N,2),k=C[0],S=C[1],y=Object(n.useRef)(null),E=g("http://localhost:3000/recipes","POST"),T=E.postData,w=E.data,R=Object(h.f)();Object(n.useEffect)((function(){w&&R.push("/")}),[w,R]);return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{className:"page-title",children:"Add a New Recipe"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),T({title:c,ingredients:k,method:j,cookingTime:"".concat(b," minutes")})},children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe title:"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:c,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe ingredients:"}),Object(o.jsxs)("div",{className:"ingredients",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:f,ref:y}),Object(o.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var t=f.trim();t&&!k.includes(t)&&S((function(e){return[].concat(Object(x.a)(e),[t])})),v(""),y.current.focus()},children:"Add"})]})]}),Object(o.jsxs)("p",{children:["Current ingredients: ",k.map((function(e){return Object(o.jsxs)("em",{children:[e,", "]},e)}))]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe method:"}),Object(o.jsx)("textarea",{onChange:function(e){return l(e.target.value)},value:j,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Cooking time (minutes):"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return O(e.target.value)},value:b,required:!0})]}),Object(o.jsx)("button",{className:"btn",children:"Submit"})]})]})}c(37);function N(e){var t=e.recipes,c=O().mode;return 0===t.length?Object(o.jsx)("div",{className:"error",children:"No recipes to load..."}):Object(o.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(o.jsxs)("div",{className:"card ".concat(c),children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(o.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(o.jsx)(b.b,{to:"/recipes/".concat(e.id),children:"Cook This"})]},e.id)}))})}c(38);function C(){var e=g("http://localhost:3000/recipes"),t=e.data,c=e.isPending,n=e.error;return Object(o.jsxs)("div",{className:"home",children:[n&&Object(o.jsx)("p",{className:"error",children:n}),c&&Object(o.jsx)("p",{className:"loading",children:"Loading..."}),t&&Object(o.jsx)(N,{recipes:t})]})}c(39);function k(){var e=Object(h.h)().id,t=g("http://localhost:3000/recipes/".concat(e)),c=t.data,n=t.isPending,r=t.error,a=O().mode;return Object(o.jsxs)("div",{className:"recipe ".concat(a),children:[r&&Object(o.jsx)("p",{className:"error",children:r}),n&&Object(o.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"page-title",children:c.title}),Object(o.jsxs)("p",{children:["Takes ",c.cookingTime," to cook."]}),Object(o.jsx)("ul",{children:c.ingredients.map((function(e){return Object(o.jsx)("li",{children:e},e)}))}),Object(o.jsx)("p",{className:"method",children:c.method})]})]})}c(40);function S(){var e=Object(h.g)().search,t=new URLSearchParams(e).get("q"),c="http://localhost:3000/recipes/?q=".concat(t),n=g(c),r=n.error,a=n.isPending,s=n.data;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),r&&Object(o.jsx)("p",{className:"error",children:r}),a&&Object(o.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(o.jsx)(N,{recipes:s})]})}c(41);function y(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(h.f)();return Object(o.jsx)("div",{className:"searchbar",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/search/?q=".concat(c))},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Search"}),Object(o.jsx)("input",{type:"text",id:"search",onChange:function(e){return r(e.target.value)},required:!0})]})})}c(42);function E(){var e=O().color;return Object(o.jsx)("div",{className:"navbar",style:{background:e},children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(b.b,{to:"/",className:"brand",children:Object(o.jsx)("h1",{children:"Cooking Ninja"})}),Object(o.jsx)(y,{}),Object(o.jsx)(b.b,{to:"/create",children:"Create Recipe"})]})})}c(43);var T=c.p+"static/media/mode-icon.651cf792.svg",w=["#58249c","#249c6b","#b70233"];function R(){var e=O(),t=e.changeColor,c=e.changeMode,n=e.mode;return Object(o.jsxs)("div",{className:"theme-selector",children:[Object(o.jsx)("div",{className:"mode-toggle",children:Object(o.jsx)("img",{src:T,onClick:function(){return c("light"===n?"dark":"light")},alt:"dark/light toggle icon",style:{filter:"dark"===n?"invert(100%)":"invert(20%)"}})}),Object(o.jsx)("div",{className:"theme-buttons",children:w.map((function(e){return Object(o.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}c(44);var P=function(){var e=O().mode;return Object(o.jsx)("div",{className:"App ".concat(e),children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(E,{}),Object(o.jsx)(R,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",children:Object(o.jsx)(C,{})}),Object(o.jsx)(h.a,{path:"/create",children:Object(o.jsx)(v,{})}),Object(o.jsx)(h.a,{path:"/search",children:Object(o.jsx)(S,{})}),Object(o.jsx)(h.a,{path:"/recipes/:id",children:Object(o.jsx)(k,{})})]})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(P,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.897aed56.chunk.js.map