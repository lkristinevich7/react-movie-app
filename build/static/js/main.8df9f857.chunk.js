(this["webpackJsonpmyplace-app"]=this["webpackJsonpmyplace-app"]||[]).push([[0],Array(19).concat([function(e,t,a){},,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),c=a.n(i),r=(a(30),a(2)),o=a(10),s=a(3),u=(a(31),function(e){return l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:e.image,alt:e.alt}))}),m=(a(32),function(e){return l.a.createElement("div",{className:"card ".concat(e.className)},e.children)}),d=(a(33),function(e){return l.a.createElement("li",{className:"user-item"},l.a.createElement(m,{className:"user-item__content"},l.a.createElement(s.b,{to:"/".concat(e.id,"/places")},l.a.createElement("div",{className:"user-item__image"},l.a.createElement(u,{image:e.image,alt:e.name})),l.a.createElement("div",{className:"user-item__info"},l.a.createElement("h2",null,e.name),l.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),E=(a(39),function(e){return 0===e.items.length?l.a.createElement("div",{className:"center"},l.a.createElement(m,null,l.a.createElement("h2",null,"No users found."))):l.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return l.a.createElement(d,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places})})))}),p=function(){return l.a.createElement(E,{items:[{id:"u1",name:"Liudmila Krystsinevich",image:"data:image/jpeg;base64,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",places:2}]})},A=a(9),f=a(22),g=function(e){return{type:"MINLENGTH",val:e}},v=function(e,t){var a,n=!0,l=Object(f.a)(t);try{for(l.s();!(a=l.n()).done;){var i=a.value;"REQUIRE"===i.type&&(n=n&&e.trim().length>0),"MINLENGTH"===i.type&&(n=n&&e.trim().length>=i.val),"MAXLENGTH"===i.type&&(n=n&&e.trim().length<=i.val),"MIN"===i.type&&(n=n&&+e>=i.val),"MAX"===i.type&&(n=n&&+e<=i.val),"EMAIL"===i.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){l.e(c)}finally{l.f()}return n},h=(a(40),function(e,t){switch(t.type){case"CHANGE":return Object(A.a)({},e,{value:t.val,isValid:v(t.val,t.validators)});case"TOUCH":return Object(A.a)({},e,{isTouched:!0});default:return e}}),N=function(e){var t=Object(n.useReducer)(h,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(r.a)(t,2),i=a[0],c=a[1],o=e.id,s=e.onInput,u=i.value,m=i.isValid;Object(n.useEffect)((function(){s(o,u,m)}),[o,u,m,s]);var d=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},E=function(){c({type:"TOUCH"})},p="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:E,value:i.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:E,value:i.value});return l.a.createElement("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),p,!i.isValid&&i.isTouched&&l.a.createElement("p",null,e.errorText))},b=(a(41),function(e){return e.href?l.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?l.a.createElement(s.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):l.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),C=a(12),I=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(A.a)({},e,{inputs:Object(A.a)({},e.inputs,Object(C.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},y=function(e,t){var a=Object(n.useReducer)(I,{inputs:e,isValid:t}),l=Object(r.a)(a,2),i=l[0],c=l[1];return[i,Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},j=(a(19),function(){var e=y({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1}},!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return l.a.createElement("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(a.inputs)}},l.a.createElement(N,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:n}),l.a.createElement(N,{id:"description",element:"textarea",label:"Description",validators:[g(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:n}),l.a.createElement(N,{id:"address",element:"input",label:"Address",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid address.",onInput:n}),l.a.createElement(b,{type:"submit",disabled:!a.isValid},"ADD PLACE"))}),k=a(52),T=(a(42),function(e){return c.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),S=(a(43),function(e){var t=l.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},l.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},l.a.createElement("h2",null,e.header)),l.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),l.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(t,document.getElementById("modal-hook"))}),V=function(e){return l.a.createElement(l.a.Fragment,null,e.show&&l.a.createElement(T,{onClick:e.onCancel}),l.a.createElement(k.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},l.a.createElement(S,e)))},w=Object(n.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}}),x=(a(44),function(e){var t=Object(n.useContext)(w),a=Object(n.useState)(!1),i=Object(r.a)(a,2),c=i[0],o=i[1],s=function(){o(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{show:c,onCancel:s,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{inverse:!0,onClick:s},"CANCEL"),l.a.createElement(b,{danger:!0,onClick:function(){o(!1)}},"DELETE"))},l.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),l.a.createElement("li",{className:"place-item"},l.a.createElement(m,{className:"place-item__content"},l.a.createElement("div",{className:"place-item__image"},l.a.createElement("img",{src:e.image,alt:e.title})),l.a.createElement("div",{className:"place-item__info"},l.a.createElement("h2",null,e.title),l.a.createElement("h3",null,e.address),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"place-item__actions"},t.isLoggedIn&&l.a.createElement(b,{to:"/places/".concat(e.id)},"EDIT"),t.isLoggedIn&&l.a.createElement(b,{danger:!0,onClick:function(){o(!0)}},"DELETE")))))}),O=(a(45),function(e){return 0===e.items.length?l.a.createElement("div",{className:"place-list center"},l.a.createElement(m,null,l.a.createElement("h2",null,"No places found. Maybe create one?"),l.a.createElement(b,{to:"/places/new"},"Share Place"))):l.a.createElement("ul",{className:"place-list"},e.items.map((function(e){return l.a.createElement(x,{key:e.id,id:e.id,image:e.imageUrl,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location})})))}),B=[{id:"p1",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u1"},{id:"p2",title:"Emp. State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u2"}],L=function(){var e=Object(o.g)().userId,t=B.filter((function(t){return t.creator===e}));return l.a.createElement(O,{items:t})},P=[{id:"p1",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u1"},{id:"p2",title:"Emp. State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u2"}],U=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],i=t[1];console.log(Object(o.g)());var c=Object(o.g)().placeId,s=y({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),u=Object(r.a)(s,3),d=u[0],E=u[1],p=u[2],A=P.find((function(e){return e.id===c}));Object(n.useEffect)((function(){A&&p({title:{value:A.title,isValid:!0},description:{value:A.description,isValid:!0}},!0),i(!1)}),[p,A]);return A?a?l.a.createElement("div",{className:"center"},l.a.createElement("h2",null,"Loading...")):l.a.createElement("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(d.inputs)}},l.a.createElement(N,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:E,initialValue:d.inputs.title.value,initialValid:d.inputs.title.isValid}),l.a.createElement(N,{id:"description",element:"textarea",label:"Description",validators:[g(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:E,initialValue:d.inputs.description.value,initialValid:d.inputs.description.isValid}),l.a.createElement(b,{type:"submit",disabled:!d.isValid},"UPDATE PLACE")):l.a.createElement("div",{className:"center"},l.a.createElement(m,null,l.a.createElement("h2",null,"Could not find place!")))},Q=(a(46),function(){var e=Object(n.useContext)(w),t=Object(n.useState)(!0),a=Object(r.a)(t,2),i=a[0],c=a[1],o=y({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),s=Object(r.a)(o,3),u=s[0],d=s[1],E=s[2];return l.a.createElement(m,{className:"authentication"},l.a.createElement("h2",null,"Login Required"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(u.inputs),e.login()}},!i&&l.a.createElement(N,{element:"input",id:"name",type:"text",label:"Your Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a name.",onInput:d}),l.a.createElement(N,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:d}),l.a.createElement(N,{element:"input",id:"password",type:"password",label:"Password",validators:[g(5)],errorText:"Please enter a valid password, at least 5 characters.",onInput:d}),l.a.createElement(b,{type:"submit",disabled:!u.isValid},i?"LOGIN":"SIGNUP")),l.a.createElement(b,{inverse:!0,onClick:function(){i?E(Object(A.a)({},u.inputs,{name:{value:"",isValid:!1}}),!1):E(Object(A.a)({},u.inputs,{name:void 0}),u.inputs.email.isValid&&u.inputs.password.isValid),c((function(e){return!e}))}},"SWITCH TO ",i?"SIGNUP":"LOGIN"))}),K=(a(47),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),Y=(a(48),function(e){var t=Object(n.useContext)(w);return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(s.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(s.c,{to:"/u1/places"},"MY PLACES")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(s.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(s.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),X=(a(49),function(e){var t=l.a.createElement(k.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return c.a.createPortal(t,document.getElementById("drawer-hook"))}),H=(a(50),function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],c=a[1],o=function(){c(!1)};return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(T,{onClick:o}),l.a.createElement(X,{show:i,onClick:o},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(Y,null))),l.a.createElement(K,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){c(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(s.b,{to:"/"},"YourPlaces")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(Y,null))))}),M=function(){var e,t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],c=a[1],u=Object(n.useCallback)((function(){c(!0)}),[]),m=Object(n.useCallback)((function(){c(!1)}),[]);return e=i?l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(p,null)),l.a.createElement(o.b,{path:"/:userId/places",exact:!0},l.a.createElement(L,null)),l.a.createElement(o.b,{path:"/places/new",exact:!0},l.a.createElement(j,null)),l.a.createElement(o.b,{path:"/places/:placeId"},l.a.createElement(U,null)),l.a.createElement(o.a,{to:"/"})):l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(p,null)),l.a.createElement(o.b,{path:"/:userId/places",exact:!0},l.a.createElement(L,null)),l.a.createElement(o.b,{path:"/auth"},l.a.createElement(Q,null)),l.a.createElement(o.a,{to:"/auth"})),l.a.createElement(w.Provider,{value:{isLoggedIn:i,login:u,logout:m}},l.a.createElement(s.a,null,l.a.createElement(H,null),l.a.createElement("main",null,e)))};c.a.render(l.a.createElement(M,null),document.getElementById("root"))}]),[[25,1,2]]]);
//# sourceMappingURL=main.8df9f857.chunk.js.map