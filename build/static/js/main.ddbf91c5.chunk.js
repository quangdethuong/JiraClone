(this.webpackJsonpreact_cyberlearn_khoahoc_04=this.webpackJsonpreact_cyberlearn_khoahoc_04||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/bg.9b2b410b.png"},50:function(e,t,a){e.exports={bgLoading:"LoadingComponent_bgLoading__3w10_"}},54:function(e,t,a){e.exports=a(87)},59:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/loading.504b535c.gif"},65:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/bg.9b2b410b.png"},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),s=a.n(r),l=(a(59),a(12)),o=a(9),m=a(50),i=a.n(m),u=a(13);function d(){return Object(u.c)((function(e){return e.LoadingReducer})).isLoading?c.a.createElement("div",{className:i.a.bgLoading},c.a.createElement("img",{src:a(64)})):""}a(65);function p(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},c.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Cyberlearn"),c.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),c.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/home"},"Home ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/about"},"About")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/contact"},"Contact")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/profile"},"profile")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{activeClassName:"activeNavItem",activeStyle:{fontWeight:"bold"},className:"nav-link",to:"/demohocmodal"},"Demo HOC ")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"B\xe0i t\u1eadp"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownId"},c.a.createElement(l.b,{className:"dropdown-item",to:"/todolistrfc"},"To do list rfc"),c.a.createElement(l.b,{className:"dropdown-item",to:"/todolistrcc"},"To do list rcc"),c.a.createElement(l.b,{className:"dropdown-item",to:"/todolistredux"},"To do list redux"),c.a.createElement(l.b,{className:"dropdown-item",to:"/todolistsaga"},"To do list saga")))),c.a.createElement("form",{className:"form-inline my-2 my-lg-0"},c.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),c.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}function f(e){var t=Object(u.c)((function(e){return e.ModalReducer.Component}));return c.a.createElement("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title"},"Modal title"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},t),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save")))))}function E(){return c.a.createElement("div",null,"About")}var v=a(11),b=a(4),N=a(22),h=a(8),k=a.n(h);function g(e){var t=Object(u.b)(),r=Object(u.c)((function(e){return e.ToDoListReducer})).taskList,s=Object(n.useState)({taskList:[],values:{taskName:""},errors:{taskName:""}}),l=Object(N.a)(s,2),o=l[0],m=l[1],i=function(e){e.preventDefault(),t({type:"ADD_TASK_API",taskName:o.values.taskName})};Object(n.useEffect)((function(){return t({type:"GET_TASKLIST_API"}),function(){}}),[]);var d=function(e){console.log(e),t({type:"DELETE_TASK_API",taskName:e})};return c.a.createElement("div",{className:"card"},c.a.createElement("button",{className:"btn btn-success",onClick:function(){t({type:"getTaskApiAction"})}},"Dispatch action saga getTaskAPI"),c.a.createElement("div",{className:"card__header"},c.a.createElement("img",{src:a(84)})),c.a.createElement("form",{className:"card__body",onSubmit:i},c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__title"},c.a.createElement("h2",null,"My Tasks"),c.a.createElement("p",null,"September 9,2020")),c.a.createElement("div",{className:"card__add"},c.a.createElement("input",{id:"newTask",name:"taskName",type:"text",placeholder:"Enter an activity...",onChange:function(e){var t=e.target,a=t.value,n=t.name,c=Object(b.a)({},o.values);c=Object(b.a)(Object(b.a)({},c),{},Object(v.a)({},n,a));var r=Object(b.a)({},o.errors);/^[a-z A-Z]+$/.test(a)&&""!==a.trim()?r[n]="":r[n]=n+" invalid !",m(Object(b.a)(Object(b.a)({},o),{},{values:c,errors:r}))}}),c.a.createElement("button",{id:"addItem",type:"submit",onClick:i},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement("div",{className:"card__todo"},c.a.createElement("ul",{className:"todo",id:"todo"},r.filter((function(e){return!e.status})).map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){d(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){var a;a=e.taskName,t({type:"CHECK_TASK_API",taskName:a})}},c.a.createElement("i",{className:"far fa-check-circle"}),c.a.createElement("i",{className:"fas fa-check-circle"}))))}))),c.a.createElement("ul",{className:"todo",id:"completed"},r.filter((function(e){return e.status})).map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){d(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){var a;a=e.taskName,t({type:"REJECT_TASK_API",taskName:a})}},c.a.createElement("i",{className:"far fa-undo"}),c.a.createElement("i",{className:"fas fa-undo"}))))})))))))}function y(){return c.a.createElement("div",null,"li\xean h\u1ec7")}var T=a(39);function O(e){var t=Object(T.b)({to:{marginTop:"0"},from:{marginTop:"-100px"},config:{duration:500}});return c.a.createElement("div",null,c.a.createElement(T.a.div,{style:t},c.a.createElement(e,null)))}function _(e){var t=Object(n.useState)({userName:"",passWord:"",status:!1}),a=Object(N.a)(t,2),r=a[0],s=a[1];console.log(r);var l=function(e){var t=e.target,a=t.name,n=t.value,c=Object(b.a)(Object(b.a)({},r),{},Object(v.a)({},a,n)),l=!0;for(var o in c)"status"!==o&&""===c[o].trim()&&(l=!1);c.status=!l,s(c)};return c.a.createElement("form",{className:"container",onSubmit:function(t){t.preventDefault(),"cyberlearn"===r.userName&&"cyberlearn"===r.passWord?(e.history.goBack(),localStorage.setItem("userLogin",JSON.stringify(r))):alert("Login fail !")}},c.a.createElement("h3",{className:"display-4"},"Login"),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",null,"User Name"),c.a.createElement("input",{name:"userName",className:"form-control",onChange:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("p",null,"Password"),c.a.createElement("input",{name:"passWord",className:"form-control",onChange:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-success"},"\u0110\u0103ng nh\u1eadp")),c.a.createElement(o.a,{when:r.status,message:function(e){return"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n r\u1eddi kh\u1ecfi trang n\xe0y !"}}))}function j(){return c.a.createElement("form",null,c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("label",{htmlFor:"inputEmail4"},"Email"),c.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail4",placeholder:"Email"})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("label",{htmlFor:"inputPassword4"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"inputPassword4",placeholder:"Password"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputAddress"},"Address"),c.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"1234 Main St"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputAddress2"},"Address 2"),c.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor"})),c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("label",{htmlFor:"inputCity"},"City"),c.a.createElement("input",{type:"text",className:"form-control",id:"inputCity"})),c.a.createElement("div",{className:"form-group col-md-4"},c.a.createElement("label",{htmlFor:"inputState"},"State"),c.a.createElement("select",{id:"inputState",className:"form-control"},c.a.createElement("option",{selected:!0},"Choose..."),c.a.createElement("option",null,"..."))),c.a.createElement("div",{className:"form-group col-md-2"},c.a.createElement("label",{htmlFor:"inputZip"},"Zip"),c.a.createElement("input",{type:"text",className:"form-control",id:"inputZip"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"gridCheck"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"gridCheck"},"Check me out"))),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign in"))}function x(){var e=function(){return new O(_)},t=Object(u.b)();return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){t({type:"OPEN_FORM",Component:c.a.createElement(_,null)})},type:"button",className:"btn btn-primary btn-lg","data-toggle":"modal","data-target":"#modelId"},"\u0110\u0103ng nh\u1eadp"),c.a.createElement("button",{onClick:function(){t({type:"OPEN_FORM",Component:c.a.createElement(j,null)})},type:"button",className:"btn btn-primary btn-lg","data-toggle":"modal","data-target":"#modelId"},"\u0110\u0103ng k\xfd"),c.a.createElement(e,null))}function L(e){return c.a.createElement("div",null,"Gi\xe1 tr\u1ecb tham s\u1ed1: ",e.match.params.id,c.a.createElement("br",null),"Path name hi\u1ec7n t\u1ea1i: ",e.match.path)}function A(e){return console.log(e),c.a.createElement("div",null,"trang ch\u1ee7")}function C(e){return c.a.createElement("div",null,"Kh\xf4ng t\xecm th\u1ea5y trang ",e.match.url)}function w(e){return localStorage.getItem("userLogin")?c.a.createElement("div",null,"profile"):(alert("Vui l\xf2ng \u0111\u0103ng nh\u1eadp \u0111\u1ec3 v\xe0o trang n\xe0y !"),c.a.createElement(o.b,{to:"/login"}))}var S=a(14),D=a(21),I=a(20),P=a(19),G=(a(85),function(e){Object(I.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={taskList:[],values:{taskName:""},errors:{taskName:""}},e.getTaskList=function(){var t=k()({url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",method:"GET"});t.then((function(t){console.log(t.data),e.setState({taskList:t.data}),console.log("th\xe0nh c\xf4ng")})),t.catch((function(e){console.log("th\u1ea5t b\u1ea1i"),console.log(e.response.data)}))},e.renderTaskToDo=function(){return e.state.taskList.filter((function(e){return!e.status})).map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("span",null,t.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){e.delTask(t.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){e.checkTask(t.taskName)}},c.a.createElement("i",{className:"far fa-check-circle"}),c.a.createElement("i",{className:"fas fa-check-circle"}))))}))},e.renderTaskToDoDone=function(){return e.state.taskList.filter((function(e){return e.status})).map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("span",null,t.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){e.delTask(t.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){e.rejectTask(t.taskName)}},c.a.createElement("i",{className:"far fa-undo"}),c.a.createElement("i",{className:"fas fa-undo"}))))}))},e.rejectTask=function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=".concat(t),method:"PUT"});a.then((function(t){alert(t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e.checkTask=function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=".concat(t),method:"PUT"});a.then((function(t){alert(t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e.delTask=function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=".concat(t),method:"DELETE"});a.then((function(t){alert(t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e.handleChange=function(t){var a=t.target,n=a.value,c=a.name;console.log(n,c);var r=Object(b.a)({},e.state.values);r=Object(b.a)(Object(b.a)({},r),{},Object(v.a)({},c,n));var s=Object(b.a)({},e.state.errors);/^[a-z A-Z]+$/.test(n)&&""!==n.trim()?s[c]="":s[c]=c+" invalid !",e.setState(Object(b.a)(Object(b.a)({},e.state),{},{values:r,errors:s}))},e.addTask=function(t){t.preventDefault(),console.log(e.state.values.taskName);var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/AddTask",method:"POST",data:{taskName:e.state.values.taskName}});a.then((function(t){e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.getTaskList()}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.addTask},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("img",{src:a(34)})),c.a.createElement("div",{className:"card__body"},c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"card__title"},c.a.createElement("h2",null,"My Tasks"),c.a.createElement("p",null,"September 9,2020")),c.a.createElement("div",{className:"card__add"},c.a.createElement("input",{name:"taskName",onChange:this.handleChange,id:"newTask",type:"text",placeholder:"Enter an activity..."}),c.a.createElement("button",{id:"addItem",onClick:this.addTask},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement("span",{className:"text text-danger"},this.state.errors.taskName)),c.a.createElement("div",{className:"card__todo form-group"},c.a.createElement("ul",{className:"todo",id:"todo"},this.renderTaskToDo()),c.a.createElement("ul",{className:"todo",id:"completed"},this.renderTaskToDoDone()))))))}}]),n}(n.Component)),K=a(6),F=a.n(K),M=a(32),R=a(38),W=function(){return function(){var e=Object(R.a)(F.a.mark((function e(t){var a,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",method:"GET"});case 3:a=e.sent,n=a.data,c=a.status,Object(M.a)(a,["data","status"]),200===c&&t({type:"GET_TASK_API",taskList:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()};function U(e){var t=Object(u.c)((function(e){return e.ToDoListReducer})).taskList,r=Object(u.b)(),s=Object(n.useState)({values:{taskName:""},errors:{taskName:""}}),l=Object(N.a)(s,2),o=l[0],m=l[1],i=function(e){var t;e.preventDefault(),console.log(o.values.taskName),r((t=o.values.taskName,function(){var e=Object(R.a)(F.a.mark((function e(a){var n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({url:"http://svcy.myclass.vn/api/ToDoList/AddTask",method:"POST",data:{taskName:t}});case 3:n=e.sent,c=n.status,n.data,200===c&&a(W()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};Object(n.useEffect)((function(){return r(W()),function(){}}),[]);var d=function(e){r(function(e){return function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=".concat(e),method:"PUT"});a.then((function(e){alert(e.data),t(W())})),a.catch((function(e){alert(e.response.data)}))}}(e))},p=function(e){r(function(e){return function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=".concat(e),method:"PUT"});a.then((function(e){t(W())})),a.catch((function(e){alert(e.response.data)}))}}(e))},f=function(e){r(function(e){return function(t){var a=k()({url:"http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=".concat(e),method:"DELETE"});a.then((function(e){t(W())})),a.catch((function(e){alert(e.response.data)}))}}(e))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("img",{src:a(34)})),c.a.createElement("form",{className:"card__body",onSubmit:i},c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__title"},c.a.createElement("h2",null,"My Tasks"),c.a.createElement("p",null,"September 9,2020")),c.a.createElement("div",{className:"card__add"},c.a.createElement("input",{id:"newTask",name:"taskName",type:"text",placeholder:"Enter an activity...",onChange:function(e){var t=e.target,a=t.value,n=t.name,c=Object(b.a)({},o.values);c=Object(b.a)(Object(b.a)({},c),{},Object(v.a)({},n,a));var r=Object(b.a)({},o.errors);/^[a-z A-Z]+$/.test(a)&&""!==a.trim()?r[n]="":r[n]=n+" invalid !",m(Object(b.a)(Object(b.a)({},o),{},{values:c,errors:r}))}}),c.a.createElement("button",{id:"addItem",type:"submit",onClick:i},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement("div",{className:"card__todo"},c.a.createElement("ul",{className:"todo",id:"todo"},t.filter((function(e){return!e.status})).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){f(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){p(e.taskName)}},c.a.createElement("i",{className:"far fa-check-circle"}),c.a.createElement("i",{className:"fas fa-check-circle"}))))}))),c.a.createElement("ul",{className:"todo",id:"completed"},t.filter((function(e){return e.status})).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){f(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){d(e.taskName)}},c.a.createElement("i",{className:"far fa-undo"}),c.a.createElement("i",{className:"fas fa-undo"}))))})))))))}function Z(e){var t=Object(n.useState)({taskList:[],values:{taskName:""},errors:{taskName:""}}),r=Object(N.a)(t,2),s=r[0],l=r[1],o=function(){var e=k()({url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",method:"GET"});e.then((function(e){console.log(e.data),l(Object(b.a)(Object(b.a)({},s),{},{taskList:e.data})),console.log("th\xe0nh c\xf4ng")})),e.catch((function(e){console.log("th\u1ea5t b\u1ea1i"),console.log(e.response.data)}))},m=function(e){e.preventDefault(),console.log(s.values.taskName);var t=k()({url:"http://svcy.myclass.vn/api/ToDoList/AddTask",method:"POST",data:{taskName:s.values.taskName}});t.then((function(e){o()})),t.catch((function(e){alert(e.response.data)}))};Object(n.useEffect)((function(){return o(),function(){}}),[]);var i=function(e){var t=k()({url:"http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=".concat(e),method:"DELETE"});t.then((function(e){alert(e.data),o()})),t.catch((function(e){alert(e.response.data)}))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("img",{src:a(34)})),c.a.createElement("form",{className:"card__body",onSubmit:m},c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__title"},c.a.createElement("h2",null,"My Tasks"),c.a.createElement("p",null,"September 9,2020")),c.a.createElement("div",{className:"card__add"},c.a.createElement("input",{id:"newTask",name:"taskName",type:"text",placeholder:"Enter an activity...",onChange:function(e){var t=e.target,a=t.value,n=t.name,c=Object(b.a)({},s.values);c=Object(b.a)(Object(b.a)({},c),{},Object(v.a)({},n,a));var r=Object(b.a)({},s.errors);/^[a-z A-Z]+$/.test(a)&&""!==a.trim()?r[n]="":r[n]=n+" invalid !",l(Object(b.a)(Object(b.a)({},s),{},{values:c,errors:r}))}}),c.a.createElement("button",{id:"addItem",type:"submit",onClick:m},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement("div",{className:"card__todo"},c.a.createElement("ul",{className:"todo",id:"todo"},s.taskList.filter((function(e){return!e.status})).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){i(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){!function(e){var t=k()({url:"http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=".concat(e),method:"PUT"});t.then((function(e){alert(e.data),o()})),t.catch((function(e){alert(e.response.data)}))}(e.taskName)}},c.a.createElement("i",{className:"far fa-check-circle"}),c.a.createElement("i",{className:"fas fa-check-circle"}))))}))),c.a.createElement("ul",{className:"todo",id:"completed"},s.taskList.filter((function(e){return e.status})).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,e.taskName),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"remove",type:"button",onClick:function(){i(e.taskName)}},c.a.createElement("i",{className:"fa fa-trash-alt"})),c.a.createElement("button",{type:"button",className:"complete",onClick:function(){!function(e){var t=k()({url:"http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=".concat(e),method:"PUT"});t.then((function(e){alert(e.data),o()})),t.catch((function(e){alert(e.response.data)}))}(e.taskName)}},c.a.createElement("i",{className:"far fa-undo"}),c.a.createElement("i",{className:"fas fa-undo"}))))})))))))}var H=function(e){var t=e.Component,a=Object(M.a)(e,["Component"]);return c.a.createElement(o.c,Object.assign({},a,{render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement(t,e))}}))};var B=function(){return c.a.createElement(l.a,null,c.a.createElement(f,null),c.a.createElement(d,null),c.a.createElement(o.e,null,c.a.createElement(H,{path:"/home",exact:!0,Component:A}),c.a.createElement(H,{exact:!0,path:"/contact",Component:y}),c.a.createElement(H,{exact:!0,path:"/about",Component:E}),c.a.createElement(H,{exact:!0,path:"/login",component:_}),c.a.createElement(H,{exact:!0,path:"/detail/:id",component:L}),c.a.createElement(H,{exact:!0,path:"/profile",component:w}),c.a.createElement(H,{exact:!0,path:"/todolistrfc",component:Z}),c.a.createElement(H,{exact:!0,path:"/todolistrcc",component:G}),c.a.createElement(H,{exact:!0,path:"/todolistredux",component:U}),c.a.createElement(H,{exact:!0,path:"/todolistsaga",component:g}),c.a.createElement(H,{exact:!0,path:"/demohocmodal",component:x}),c.a.createElement(H,{exact:!0,path:"/",component:A}),c.a.createElement(H,{path:"*",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(23),$={taskList:[]},z={isLoading:!1},Y={Component:c.a.createElement("p",null,"N\u1ed9i dung m\u1eb7c \u0111\u1ecbnh")},V=a(52),q=a(53),Q=a(10),X="http://svcy.myclass.vn/api",ee=200,te=new function e(){Object(S.a)(this,e),this.getTaskApi=function(){return k()({url:"".concat(X,"/ToDoList/GetAllTask"),method:"GET"})},this.addTaskApi=function(e){return k()({url:"".concat(X,"/ToDoList/addTask"),method:"POST",data:{taskName:e}})},this.deleteTaskApi=function(e){return k()({url:"".concat(X,"/ToDoList/deleteTask?taskName=").concat(e),method:"DELETE"})},this.checkDoneTask=function(e){return k()({url:"".concat(X,"/ToDoList/doneTask?taskName=").concat(e),method:"PUT"})},this.rejectTask=function(e){return k()({url:"".concat(X,"/ToDoList/rejectTask?taskName=").concat(e),method:"PUT"})}},ae=F.a.mark(de),ne=F.a.mark(pe),ce=F.a.mark(fe),re=F.a.mark(Ee),se=F.a.mark(ve),le=F.a.mark(be),oe=F.a.mark(Ne),me=F.a.mark(he),ie=F.a.mark(ke),ue=F.a.mark(ge);function de(e){var t,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.d)({type:"DISPLAY_LOADING"});case 2:return e.prev=2,e.next=5,Object(Q.b)(te.getTaskApi);case 5:return t=e.sent,a=t.data,n=t.status,e.next=10,Object(Q.c)(300);case 10:if(n!==ee){e.next=15;break}return e.next=13,Object(Q.d)({type:"GET_TASK_API",taskList:a});case 13:e.next=16;break;case 15:console.log("error");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log("err");case 21:return e.next=23,Object(Q.d)({type:"HIDE_LOADING"});case 23:case"end":return e.stop()}}),ae,null,[[2,18]])}function pe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)("GET_TASKLIST_API",de);case 2:case"end":return e.stop()}}),ne)}function fe(e){var t,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.taskName,n.prev=1,n.next=4,Object(Q.b)((function(){return te.addTaskApi(t)}));case 4:if(a=n.sent,a.data,a.status!==ee){n.next=10;break}return n.next=10,Object(Q.d)({type:"GET_TASKLIST_API"});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),ce,null,[[1,12]])}function Ee(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)("ADD_TASK_API",fe);case 2:case"end":return e.stop()}}),re)}function ve(e){var t,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),t=e.taskName,n.prev=2,n.next=5,Object(Q.b)((function(){return te.deleteTaskApi(t)}));case 5:if(a=n.sent,a.data,a.status!==ee){n.next=11;break}return n.next=11,Object(Q.d)({type:"GET_TASKLIST_API"});case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),se,null,[[2,13]])}function be(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)("DELETE_TASK_API",ve);case 2:case"end":return e.stop()}}),le)}function Ne(e){var t,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.taskName,n.prev=1,n.next=4,Object(Q.b)((function(){return te.checkDoneTask(t)}));case 4:if(a=n.sent,a.data,a.status!==ee){n.next=10;break}return n.next=10,Object(Q.d)({type:"GET_TASKLIST_API"});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),oe,null,[[1,12]])}function he(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)("CHECK_TASK_API",Ne);case 2:case"end":return e.stop()}}),me)}function ke(e){var t,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.taskName,n.prev=1,n.next=4,Object(Q.b)((function(){return te.rejectTask(t)}));case 4:if(a=n.sent,a.data,a.status!==ee){n.next=10;break}return n.next=10,Object(Q.d)({type:"GET_TASKLIST_API"});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),ie,null,[[1,12]])}function ge(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)("REJECT_TASK_API",ke);case 2:case"end":return e.stop()}}),ue)}var ye=F.a.mark(Te);function Te(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([pe(),Ee(),be(),he(),ge()]);case 2:case"end":return e.stop()}}),ye)}var Oe=Object(q.a)(),_e=Object(J.c)({ToDoListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASK_API":return e.taskList=t.taskList,Object(b.a)({},e);default:return e}},LoadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_LOADING":return e.isLoading=!0,Object(b.a)({},e);case"HIDE_LOADING":return e.isLoading=!1,Object(b.a)({},e);default:return e}},ModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_FORM":return e.Component=t.Component,Object(b.a)({},e);default:return Object(b.a)({},e)}}}),je=Object(J.e)(_e,Object(J.a)(V.a,Oe));Oe.run(Te);var xe=je;s.a.render(c.a.createElement(u.a,{store:xe},c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ddbf91c5.chunk.js.map