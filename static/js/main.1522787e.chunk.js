(this["webpackJsonpmyplace-app"]=this["webpackJsonpmyplace-app"]||[]).push([[0],Array(19).concat([function(e,t,a){},,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),o=(a(30),a(2)),c=a(10),s=a(3),u=(a(31),function(e){return i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:e.image,alt:e.alt}))}),m=(a(32),function(e){return i.a.createElement("div",{className:"card ".concat(e.className)},e.children)}),d=(a(33),function(e){return i.a.createElement("li",{className:"user-item"},i.a.createElement(m,{className:"user-item__content"},i.a.createElement(s.b,{to:"/".concat(e.id,"/movies")},i.a.createElement("div",{className:"user-item__image"},i.a.createElement(u,{image:e.image,alt:e.name})),i.a.createElement("div",{className:"user-item__info"},i.a.createElement("h2",null,e.name),i.a.createElement("h3",null,e.movieCount," ",1===e.movieCount?"Movie":"Movies")))))}),p=(a(39),function(e){return 0===e.items.length?i.a.createElement("div",{className:"center"},i.a.createElement(m,null,i.a.createElement("h2",null,"No users found."))):i.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return i.a.createElement(d,{key:e.id,id:e.id,image:e.image,name:e.name,movieCount:e.movies})})))}),E=function(){return i.a.createElement(p,{items:[{id:"u1",name:"Liudmila Krystsinevich",image:"data:image/jpeg;base64,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",movies:2}]})},v=a(9),h=a(22),A=function(e){return{type:"MINLENGTH",val:e}},f=function(e,t){var a,n=!0,i=Object(h.a)(t);try{for(i.s();!(a=i.n()).done;){var l=a.value;"REQUIRE"===l.type&&(n=n&&e.trim().length>0),"MINLENGTH"===l.type&&(n=n&&e.trim().length>=l.val),"MAXLENGTH"===l.type&&(n=n&&e.trim().length<=l.val),"MIN"===l.type&&(n=n&&+e>=l.val),"MAX"===l.type&&(n=n&&+e<=l.val),"EMAIL"===l.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(r){i.e(r)}finally{i.f()}return n},g=(a(40),function(e,t){switch(t.type){case"CHANGE":return Object(v.a)({},e,{value:t.val,isValid:f(t.val,t.validators)});case"TOUCH":return Object(v.a)({},e,{isTouched:!0});default:return e}}),b=function(e){var t=Object(n.useReducer)(g,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(o.a)(t,2),l=a[0],r=a[1],c=e.id,s=e.onInput,u=l.value,m=l.isValid;Object(n.useEffect)((function(){s(c,u,m)}),[c,u,m,s]);var d=function(t){r({type:"CHANGE",val:t.target.value,validators:e.validators})},p=function(){r({type:"TOUCH"})},E="input"===e.element?i.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:p,value:l.value}):i.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:p,value:l.value});return i.a.createElement("div",{className:"form-control ".concat(!l.isValid&&l.isTouched&&"form-control--invalid")},i.a.createElement("label",{htmlFor:e.id},e.label),E,!l.isValid&&l.isTouched&&i.a.createElement("p",null,e.errorText))},y=(a(41),function(e){return e.href?i.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?i.a.createElement(s.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):i.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),w=a(12),N=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(v.a)({},e,{inputs:Object(v.a)({},e.inputs,Object(w.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},T=function(e,t){var a=Object(n.useReducer)(N,{inputs:e,isValid:t}),i=Object(o.a)(a,2),l=i[0],r=i[1];return[l,Object(n.useCallback)((function(e,t,a){r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},C=(a(19),function(){var e=T({title:{value:"",isValid:!1},description:{value:"",isValid:!1},link:{value:"",isValid:!1}},!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return i.a.createElement("form",{className:"movie-form",onSubmit:function(e){e.preventDefault(),console.log(a.inputs)}},i.a.createElement(b,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:n}),i.a.createElement(b,{id:"description",element:"textarea",label:"Description",validators:[A(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:n}),i.a.createElement(b,{id:"address",element:"input",label:"Address",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid address.",onInput:n}),i.a.createElement(y,{type:"submit",disabled:!a.isValid},"ADD MOVIE"))}),I=a(52),V=(a(42),function(e){return r.a.createPortal(i.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),k=(a(43),function(e){var t=i.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},i.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},i.a.createElement("h2",null,e.header)),i.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},i.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),i.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return r.a.createPortal(t,document.getElementById("modal-hook"))}),j=function(e){return i.a.createElement(i.a.Fragment,null,e.show&&i.a.createElement(V,{onClick:e.onCancel}),i.a.createElement(I.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},i.a.createElement(k,e)))},O=Object(n.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}}),x=(a(44),function(e){var t=Object(n.useContext)(O),a=Object(n.useState)(!1),l=Object(o.a)(a,2),r=l[0],c=l[1],s=function(){c(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{show:r,onCancel:s,header:"Are you sure?",footerClass:"movie-item__modal-actions",footer:i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{inverse:!0,onClick:s},"CANCEL"),i.a.createElement(y,{danger:!0,onClick:function(){c(!1)}},"DELETE"))},i.a.createElement("p",null,"Do you want to proceed and delete this movie? Please note that it can't be undone thereafter.")),i.a.createElement("li",{className:"movie-item"},i.a.createElement(m,{className:"movie-item__content"},i.a.createElement("div",{className:"movie-item__image"},i.a.createElement("img",{src:e.image,alt:e.title})),i.a.createElement("div",{className:"movie-item__info"},i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.description),i.a.createElement("a",{href:e.link},i.a.createElement(y,{inverse:!0},"Watch now"))),i.a.createElement("div",{className:"movie-item__actions"},t.isLoggedIn&&i.a.createElement(y,{to:"/movies/".concat(e.id)},"EDIT"),t.isLoggedIn&&i.a.createElement(y,{danger:!0,onClick:function(){c(!0)}},"DELETE")))))}),S=(a(45),function(e){return 0===e.items.length?i.a.createElement("div",{className:"movie-list center"},i.a.createElement(m,null,i.a.createElement("h2",null,"No movies found. Maybe create one?"),i.a.createElement(y,{to:"/movies/new"},"Share movie"))):i.a.createElement("ul",{className:"movie-list"},e.items.map((function(e){return i.a.createElement(x,{key:e.id,id:e.id,image:e.imageUrl,title:e.title,description:e.description,link:e.link,creatorId:e.creator,coordinates:e.location})})))}),L=[{id:"m1",title:"Forest Gump",description:"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",imageUrl:"https://www.visithopkinsville.com/_uploads/Forrest-Gump-movie.jpg",link:"https://www.directv.com/movies/Forrest-Gump-NE1YTi9aS3YwaldueTN6VHJRZW9QQT09",creator:"u1"},{id:"m2",title:"The Devil's Advocate",description:"Though it is ultimately somewhat undone by its own lofty ambitions, The Devil's Advocate is a mostly effective blend of supernatural thrills and character exploration.!",imageUrl:"https://courtingthelaw.com/wp-content/uploads/devils-advocate-.jpg",link:"https://fsharetv.co/movie/the-devil's-advocate-episode-1-tt0118971",creator:"u1"},{id:"m1",title:"Forest Gump",description:"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",imageUrl:"https://www.visithopkinsville.com/_uploads/Forrest-Gump-movie.jpg",link:"https://www.directv.com/movies/Forrest-Gump-NE1YTi9aS3YwaldueTN6VHJRZW9QQT09",creator:"u2"},{id:"m2",title:"The Devil's Advocate",description:"Though it is ultimately somewhat undone by its own lofty ambitions, The Devil's Advocate is a mostly effective blend of supernatural thrills and character exploration.!",imageUrl:"https://courtingthelaw.com/wp-content/uploads/devils-advocate-.jpg",link:"https://fsharetv.co/movie/the-devil's-advocate-episode-1-tt0118971",creator:"u2"}],U=function(){var e=Object(c.g)().userId,t=L.filter((function(t){return t.creator===e}));return i.a.createElement(S,{items:t})},B=[{id:"m1",title:"Forest Gump",description:"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",imageUrl:"https://www.visithopkinsville.com/_uploads/Forrest-Gump-movie.jpg",link:"https://www.directv.com/movies/Forrest-Gump-NE1YTi9aS3YwaldueTN6VHJRZW9QQT09",creator:"u1"},{id:"m2",title:"The Devil's Advocate",description:"Though it is ultimately somewhat undone by its own lofty ambitions, The Devil's Advocate is a mostly effective blend of supernatural thrills and character exploration.!",imageUrl:"https://courtingthelaw.com/wp-content/uploads/devils-advocate-.jpg",link:"https://fsharetv.co/movie/the-devil's-advocate-episode-1-tt0118971",creator:"u1"}],P=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1];console.log(Object(c.g)());var r=Object(c.g)().movieId,s=T({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),u=Object(o.a)(s,3),d=u[0],p=u[1],E=u[2],v=B.find((function(e){return e.id===r}));Object(n.useEffect)((function(){v&&E({title:{value:v.title,isValid:!0},description:{value:v.description,isValid:!0}},!0),l(!1)}),[E,v]);return v?a?i.a.createElement("div",{className:"center"},i.a.createElement("h2",null,"Loading...")):i.a.createElement("form",{className:"movie-form",onSubmit:function(e){e.preventDefault(),console.log(d.inputs)}},i.a.createElement(b,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:p,initialValue:d.inputs.title.value,initialValid:d.inputs.title.isValid}),i.a.createElement(b,{id:"description",element:"textarea",label:"Description",validators:[A(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:p,initialValue:d.inputs.description.value,initialValid:d.inputs.description.isValid}),i.a.createElement(y,{type:"submit",disabled:!d.isValid},"UPDATE MOVIE")):i.a.createElement("div",{className:"center"},i.a.createElement(m,null,i.a.createElement("h2",null,"Could not find movie!")))},Q=(a(46),function(){var e=Object(n.useContext)(O),t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],r=a[1],c=T({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),s=Object(o.a)(c,3),u=s[0],d=s[1],p=s[2];return i.a.createElement(m,{className:"authentication"},i.a.createElement("h2",null,"Login Required"),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(u.inputs),e.login()}},!l&&i.a.createElement(b,{element:"input",id:"name",type:"text",label:"Your Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a name.",onInput:d}),i.a.createElement(b,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:d}),i.a.createElement(b,{element:"input",id:"password",type:"password",label:"Password",validators:[A(5)],errorText:"Please enter a valid password, at least 5 characters.",onInput:d}),i.a.createElement(y,{type:"submit",disabled:!u.isValid},l?"LOGIN":"SIGNUP")),i.a.createElement(y,{inverse:!0,onClick:function(){l?p(Object(v.a)({},u.inputs,{name:{value:"",isValid:!1}}),!1):p(Object(v.a)({},u.inputs,{name:void 0}),u.inputs.email.isValid&&u.inputs.password.isValid),r((function(e){return!e}))}},"SWITCH TO ",l?"SIGNUP":"LOGIN"))}),F=(a(47),function(e){return i.a.createElement("header",{className:"main-header"},e.children)}),K=(a(48),function(e){var t=Object(n.useContext)(O);return i.a.createElement("ul",{className:"nav-links"},i.a.createElement("li",null,i.a.createElement(s.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&i.a.createElement("li",null,i.a.createElement(s.c,{to:"/u1/movies"},"MY MOVIES")),t.isLoggedIn&&i.a.createElement("li",null,i.a.createElement(s.c,{to:"/movies/new"},"ADD MOVIE")),!t.isLoggedIn&&i.a.createElement("li",null,i.a.createElement(s.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&i.a.createElement("li",null,i.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),M=(a(49),function(e){var t=i.a.createElement(I.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},i.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return r.a.createPortal(t,document.getElementById("drawer-hook"))}),H=(a(50),function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],r=a[1],c=function(){r(!1)};return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(V,{onClick:c}),i.a.createElement(M,{show:l,onClick:c},i.a.createElement("nav",{className:"main-navigation__drawer-nav"},i.a.createElement(K,null))),i.a.createElement(F,null,i.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("h1",{className:"main-navigation__title"},i.a.createElement(s.b,{to:"/"},"MovieToday")),i.a.createElement("nav",{className:"main-navigation__header-nav"},i.a.createElement(K,null))))}),R=function(){var e,t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],r=a[1],u=Object(n.useCallback)((function(){r(!0)}),[]),m=Object(n.useCallback)((function(){r(!1)}),[]);return e=l?i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/",exact:!0},i.a.createElement(E,null)),i.a.createElement(c.b,{path:"/:userId/movies",exact:!0},i.a.createElement(U,null)),i.a.createElement(c.b,{path:"/movies/new",exact:!0},i.a.createElement(C,null)),i.a.createElement(c.b,{path:"/movies/:movieId"},i.a.createElement(P,null)),i.a.createElement(c.a,{to:"/"})):i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/",exact:!0},i.a.createElement(E,null)),i.a.createElement(c.b,{path:"/:userId/movies",exact:!0},i.a.createElement(U,null)),i.a.createElement(c.b,{path:"/auth"},i.a.createElement(Q,null)),i.a.createElement(c.a,{to:"/auth"})),i.a.createElement(O.Provider,{value:{isLoggedIn:l,login:u,logout:m}},i.a.createElement(s.a,null,i.a.createElement(H,null),i.a.createElement("main",null,e)))};r.a.render(i.a.createElement(R,null),document.getElementById("root"))}]),[[25,1,2]]]);
//# sourceMappingURL=main.1522787e.chunk.js.map