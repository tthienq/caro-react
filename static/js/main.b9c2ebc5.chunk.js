(this.webpackJsonpcaroreact=this.webpackJsonpcaroreact||[]).push([[0],{11:function(r,e,n){"use strict";n.r(e);var t=n(1),c=n(4),a=n.n(c),o=(n(9),n(2)),s=n(0);var u=function(r){var e=r.winnerClass,n=r.value,t=r.onClick;return Object(s.jsx)("button",{className:e,onClick:t,children:n})};function l(r,e,n,t,c){for(var a=[],o=0,u=0;u<r;u+=1){for(var l=[],j=0;j<e;j+=1)l.push(i(n,t,o++,c));a.push(Object(s.jsx)("div",{className:"board-row",children:l},u))}return a}function i(r,e,n,t){var c=!r||r[0]!==n&&r[1]!==n&&r[2]!==n&&r[3]!==n&&r[4]!==n?"square":"squarewinner";return Object(s.jsx)(u,{winnerClass:c,value:e[n],onClick:function(){return t(n)}},n)}var j=function(r){var e=r.row,n=r.col,t=r.winnerSquares,c=r.squares,a=r.onClick;return Object(s.jsx)("div",{children:l(e,n,t,c,a)})},b=function(r,e,n){for(var t=v(e,n),c=0;c<t.length;c+=1){var a=Object(o.a)(t[c],5),s=a[0],u=a[1],l=a[2],i=a[3],j=a[4];if(r[s]&&r[s]===r[u]&&r[s]===r[l]&&r[s]===r[i]&&r[s]===r[j])return{winner:r[s],winnerLine:t[c]}}return{winner:null,winnerLine:null}},v=function(r,e){for(var n=[],t=0;t<r-4;t++)for(var c=0;c<e;c++)n.push([t*e+c,(t+1)*e+c,(t+2)*e+c,(t+3)*e+c,(t+4)*e+c]);for(var a=0;a<r;a++)for(var o=0;o<e-4;o++)n.push([a*e+o,a*e+o+1,a*e+o+2,a*e+o+3,a*e+o+4]);for(var s=0;s<r-4;s++)for(var u=0;u<e-4;u++)n.push([s*e+u,(s+1)*e+u+1,(s+2)*e+u+2,(s+3)*e+u+3,(s+4)*e+u+4]);for(var l=4;l<r;l++)for(var i=0;i<e-4;i++)n.push([l*e+i,(l-1)*e+i+1,(l-2)*e+i+2,(l-3)*e+i+3,(l-4)*e+i+4]);return n},f=function(r,e){var n=r%e+1;return"[row: ".concat((r-r%e)/e+1,", col: ").concat(n,"]")};var w=function(){var r,e=Object(t.useState)({row:10,col:10}),n=Object(o.a)(e,2),c=n[0],a=n[1],u=Object(t.useState)([{squares:Array(c.row*c.col).fill(null)}]),l=Object(o.a)(u,2),i=l[0],v=l[1],w=Object(t.useState)(0),h=Object(o.a)(w,2),m=h[0],O=h[1],d=Object(t.useState)(!0),x=Object(o.a)(d,2),p=x[0],g=x[1],q=i,N=q[m],C=b(N.squares,c.row,c.col),k=C.winner,y=C.winnerLine,S=function(r){for(var e=0;e<r.length;e++)if(!r[e])return!1;return!0}(N.squares),A=q.map((function(r,e){var n=m===e?"button":"",t=r.location?r.location:"",c=r.stepNumber?"Go to move #"+r.stepNumber+t:"Go to game start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"".concat(n),onClick:function(){return function(r){O(r),g(r%2===0)}(e)},children:c})},e)}));return r=k?"Winner: "+k:S?"Draw":"Next player: "+(p?"X":"O"),Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{className:"status",children:r}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"menu",onClick:function(){return a({row:c.row,col:c.col}),v([{squares:Array(c.row*c.col).fill(null)}]),O(0),void g(!0)},children:"New Game"}),Object(s.jsx)("label",{children:"Row: "}),Object(s.jsx)("input",{type:"number",value:c.row,min:"5",max:"20",onChange:function(r){return function(r){var e=parseInt(r);a({row:e,col:c.col}),v([{squares:Array(e*c.col).fill(null)}]),O(0),g(!0)}(r.target.value)}}),Object(s.jsx)("label",{children:"Column: "}),Object(s.jsx)("input",{type:"number",value:c.col,min:"5",max:"20",onChange:function(r){return function(r){var e=parseInt(r);a({row:c.row,col:e}),v([{squares:Array(c.row*e).fill(null)}]),O(0),g(!0)}(r.target.value)}})]}),Object(s.jsx)("button",{className:"menu",onClick:function(){return v(i.reverse()),void O(i.length-1-m)},children:"Sort moves"}),Object(s.jsx)("ol",{children:A})]}),Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(j,{row:c.row,col:c.col,winnerSquares:y,squares:N.squares,onClick:function(r){return function(r){var e=i.slice(0,m+1),n=e[e.length-1].squares.slice();b(n,c.row,c.col).winner||n[r]||(n[r]=p?"X":"O",v(e.concat([{squares:n,location:f(r,c.col),stepNumber:e.length}])),O(e.length),g(!p))}(r)}})})]})};a.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))},9:function(r,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b9c2ebc5.chunk.js.map