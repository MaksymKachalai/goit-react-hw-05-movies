"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[63],{63:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(689),i=t(439),u=t(168),c=t(791),o=t(544);var s,a,l,f=t(87),h=t(444),d=t(184),j=(0,h.ZP)(f.OL)(s||(s=(0,u.Z)(["\n  font-size: 20px;\n"]))),p=(0,h.ZP)("input")(a||(a=(0,u.Z)(["\n  width: 300px;\n"]))),v=(0,h.ZP)("form")(l||(l=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function x(){var n=(0,c.useState)(""),e=(0,i.Z)(n,2),t=e[0],u=e[1],s=(0,f.lr)(""),a=(0,i.Z)(s,2),l=a[0],h=a[1],x=(0,c.useState)([]),g=(0,i.Z)(x,2),m=g[0],_=g[1],Z=(0,r.TH)(),y=l.get("query");(0,c.useEffect)((function(){y&&function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o.$,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){if(n.ok)return n.json();Promise.reject("Something went wrong in getCastPromise")})).then((function(n){return n.results})).catch((function(n){return console.log}))}(y).then((function(n){return _(n)}))}),[y,l]);var b=m.map((function(n){var e=n.id,t=n.original_title;return(0,d.jsx)("li",{children:(0,d.jsx)(j,{to:"".concat(e),state:{from:Z},children:t})},e)}));return(0,d.jsxs)("div",{children:[(0,d.jsxs)(v,{action:"sumbit",onSubmit:function(n){n.preventDefault(),h(t?{query:t}:{})},children:[(0,d.jsx)(p,{type:"text",onChange:function(n){u(n.currentTarget.value)},value:t}),(0,d.jsx)("button",{type:"sumbit",children:"Search"})]}),(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:b})})]})}function g(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{}),(0,d.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=63.7049654d.chunk.js.map