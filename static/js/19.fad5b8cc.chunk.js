"use strict";(self.webpackChunkpomodoro_2_0=self.webpackChunkpomodoro_2_0||[]).push([[19],{19:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=t(344),s=t(897),i=t(413),o=t(87),c=t(847),r={item:"task_item__8-xog",name:"task_name__eO2KU",crosed:"task_crosed__IBxJC",description:"task_description__xFm0l",buttons:"task_buttons__5Uq57",button:"task_button__JkHyq",input:"task_input__RKaJh",checked:"task_checked__6f+Tf",container:"task_container__RAEPg",navlink:"task_navlink__3opGo"},d=t(184);function u(n){var e=n.item,t=e.done,a=e.name,s=e.description,i=e.id,u=n.onTaskDone,l=n.onTaskDelete,k=n.onTaskUpdate;return(0,d.jsxs)("li",{className:r.item,children:[(0,d.jsxs)("div",{className:r.textContainer,children:[(0,d.jsx)("p",{className:"".concat(r.name," ").concat(t&&r.crosed),children:a}),(0,d.jsx)("p",{className:r.description,children:s})]}),(0,d.jsxs)("div",{className:r.container,children:[(0,d.jsx)(o.OL,{to:"/tasks/".concat(i,"/").concat(a),className:r.navlink,children:(0,d.jsx)(c.Z,{text:"go"})}),(0,d.jsxs)("div",{className:r.buttons,children:[(0,d.jsx)(c.Z,{text:"delete",onClick:function(){return l(i)},width:"5em"}),(0,d.jsx)(c.Z,{text:"edit",onClick:function(){return k({done:t,name:a,description:s,id:i})},width:"5em"}),(0,d.jsx)("input",{type:"checkbox",className:"".concat(r.input," ").concat(t&&r.checked),checked:t,onChange:function(){u(i,!t)}})]})]})]})}var l={list:"taskList_list__Yg1-t"},k=t(402);function _(n){var e=n.tasks,t=n.setTaskArr,a=n.setShowmodal,s=n.setUpdatebleTask,o=function(n,a){var s=e.map((function(e){return e.id===n?(0,i.Z)((0,i.Z)({},e),{},{done:a}):e}));t(s)},c=function(n){return e.find((function(e){return e.id===n}))},r=function(n){var a=e.filter((function(e){return e.id!==n}));t(a),k.ZP.error("now your ".concat(c(n).name.toUpperCase()," is DELETED"))},_=function(n){a(!0),s({id:n.id,done:n.done,name:n.name,description:n.description}),(0,k.ZP)("now you editing ".concat(c(n.id).name.toUpperCase()," task"),{style:{borderRadius:"0.2em",background:"#f60",color:"white"}})};return(0,d.jsx)("ul",{className:l.list,children:e.map((function(n){return(0,d.jsx)(u,{item:n,onTaskDone:o,onTaskDelete:r,onTaskUpdate:_},n.id)}))})}function m(){var n=(0,a.e)(),e=n.taskArr,t=n.setTaskArr,i=n.setUpdatebleTask,o=n.setShowmodal;return(0,d.jsx)(s.Z,{children:(0,d.jsx)(_,{tasks:e,setTaskArr:t,setShowmodal:o,setUpdatebleTask:i})})}},897:function(n,e,t){t.d(e,{Z:function(){return o}});var a=t(344),s={container:"container_container__E3MIQ",hide:"container_hide__rXkSF"},i=t(184);function o(n){var e=n.children,t=(0,a.e)().hideSidebar;return(0,i.jsx)("section",{className:"".concat(s.container," ").concat(t&&s.hide),children:e})}}}]);
//# sourceMappingURL=19.fad5b8cc.chunk.js.map