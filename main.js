!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,o){return{name:e,title:t,description:n,dueDate:r,priority:o}}n.r(t);const o=[];document.getElementById("new-project").addEventListener("click",()=>{const e=prompt("What's the name?","My project");!function(e){const t=document.querySelector("#projects"),n=document.createElement("div");n.textContent=`${e}`,t.insertAdjacentElement("afterend",n)}(e);const t=new r(e,prompt("Title of your first To Do"),prompt("Its description"),prompt("Due date"),prompt("Priority"));o.push(t),function(e,t,n,r){const o=document.querySelector(".todo-head"),c=document.createElement("div");o.insertAdjacentElement("afterend",c),c.classList.add("project-items");const i=document.createElement("div");i.textContent=`${e}`,c.insertAdjacentElement("afterbegin",i),c.insertAdjacentElement("afterbegin",i);const u=document.createElement("div");u.textContent=`${t}`,c.insertAdjacentElement("afterbegin",u);const d=document.createElement("div");d.textContent=`${n}`,c.insertAdjacentElement("afterbegin",d);const a=document.createElement("div");a.textContent=`${r}`,c.insertAdjacentElement("afterbegin",a)}(t.title,t.description,t.dueDate,t.priority),console.log(o)})}]);