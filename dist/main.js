!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){const n=document.querySelector("#actual-projects"),o=document.createElement("div");o.classList.add("project-name"),o.textContent=`${e}`,o.dataset.projectId=`${t}`,n.insertAdjacentElement("afterbegin",o)}function r(e){return{id:Date.now().toString(),name:e,todos:[]}}function c(e,t,n,o){return{title:e,description:t,dueDate:n,priority:o}}n.r(t),n.d(t,"projects",(function(){return s})),n.d(t,"selectedProjectId",(function(){return m})),n.d(t,"itemsDisplay",(function(){return d})),n.d(t,"projectTitle",(function(){return u})),n.d(t,"itemsContainer",(function(){return i}));const l="task.projects",a="task.selectedProjectId",d=document.querySelector("[data-items-display-container]"),u=document.querySelector("[data-project-title]"),i=document.querySelector(".items");let s=JSON.parse(localStorage.getItem(l))||[],m=localStorage.getItem(a);const f=document.querySelector("#actual-projects");f.addEventListener("click",e=>{if("div"===e.target.tagName.toLowerCase()){m=e.target.dataset.projectId,console.log(m),console.log(u);const t=f.childNodes;for(let e=0;e<t.length-1;e++)t[e].classList.remove("active-project");if(e.target.dataset.projectId===m)if(e.target.classList.add("active-project"),null===m)d.style.display="none";else{const e=s.find(e=>e.id===m);d.style.display="",u.innerHTML=`To Do's from <span>${e.name}</span>`}}}),document.querySelector(".submit-items").addEventListener("click",e=>{e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#desc"),o=document.querySelector("#due"),r=document.querySelector("input[name=priority]:checked");new c(t.value,n.value,o.value,r.value);s.find(projectId),function(e,t,n,o){const r=document.querySelector(".items"),c=document.createElement("div");r.insertAdjacentElement("afterbegin",c);const l=document.createElement("div");l.textContent=`${o}`,l.classList.add("task"),c.insertAdjacentElement("afterbegin",l);const a=document.createElement("div");a.textContent=`${n}`,a.classList.add("task"),c.insertAdjacentElement("afterbegin",a);const d=document.createElement("div");d.textContent=`${t}`,d.classList.add("task"),c.insertAdjacentElement("afterbegin",d);const u=document.createElement("div");u.textContent=`${e}`,u.classList.add("task"),c.insertAdjacentElement("afterbegin",u)}(t.value,n.value,o.value,r.value),y(),p("items-form")});for(let e=0;e<s.length;e++)o(s[e].name,s[e].id);function y(){document.getElementById("name").value="",document.getElementById("name").textContent="",document.getElementById("title").value="",document.getElementById("title").textContent="",document.getElementById("desc").value="",document.getElementById("desc").textContent="",document.getElementById("due").value="",document.getElementById("due").textContent=""}function p(e){document.querySelector(`#${e}`).style.display="none",document.querySelector(".blanket").style.display="none",y()}document.querySelector("#new-project").addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("name").value;if(null==t||""==t)return;const n=new r(t);s.push(n),function(e,t){localStorage.setItem(l,JSON.stringify(s)),localStorage.setItem(a,m),o(e,t)}(t,n.id),console.log(s),y()}),document.querySelector("#new-item").addEventListener("click",()=>{!function(e){document.querySelector(`#${e}`).style.display="flex",document.querySelector(".blanket").style.display="block"}("items-form")}),document.querySelector(".cancel-items").addEventListener("click",e=>{e.preventDefault(),p("items-form")}),console.log(s),document.querySelector("#clear-all").addEventListener("click",()=>{for(localStorage.clear();document.querySelector("#actual-projects").hasChildNodes;)document.querySelector("#actual-projects").removeChild(document.querySelector("#actual-projects").firstChild)})}]);