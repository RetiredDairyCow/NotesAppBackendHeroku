(this.webpackJsonpp2=this.webpackJsonpp2||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(17),o=n.n(c),r=n(8),a=n(3),i=n(2),u=n(0),s={color:"orange",fontStyle:"italic",fontSize:17},l=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",style:s,children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]},e.id)},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{class:"error",children:e})},b=n(6),f=n.n(b),d="/api/notes",p={getAll:function(){var t=f.a.get(d),e={id:1e3,content:"Blah blah blah",data:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},create:function(t){return f.a.post(d,t).then((function(t){return t.data}))},update:function(t,e){return f.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))}},h=(n(41),function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Dept of CSC"})]})}),m=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)("a new note..."),s=Object(a.a)(o,2),b=s[0],f=s[1],d=Object(i.useState)(!0),m=Object(a.a)(d,2),O=m[0],v=m[1],x=Object(i.useState)(null),g=Object(a.a)(x,2),S=g[0],y=g[1],k=O?n:n.filter((function(t){return!0===t.important}));Object(i.useEffect)((function(){p.getAll().then((function(t){c(t)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return v(!O)},children:["show ",O?"important":"all"]})}),Object(u.jsx)("ul",{children:k.map((function(t){return Object(u.jsx)(l,{note:t,toggleImportance:(e=t.id,function(){var t=n.find((function(t){return t.id===e})),o=Object(r.a)(Object(r.a)({},t),{},{important:!t.important});p.update(e,o).then((function(t){c(n.map((function(n){return n.id!==e?n:t})))})).catch((function(o){y("Note '".concat(t.content,"' was already removed from the server")),setTimeout((function(){y(null)}),4e3),c(n.filter((function(t){return t.id!==e})))}))})},t.id);var e}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()<.5};p.create(e).then((function(t){c(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:b,onChange:function(t){f(t.target.value)}}),Object(u.jsx)("button",{className:"submitButton",type:"submit",children:"Save"})]}),Object(u.jsx)(h,{})]})};o.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a2ed2553.chunk.js.map