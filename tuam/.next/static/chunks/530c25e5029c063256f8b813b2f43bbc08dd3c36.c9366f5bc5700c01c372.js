(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"0hT9":function(e,a,t){"use strict";var i=t("1OyB"),l=t("vuIU"),s=t("JX7q"),n=t("Ji7U"),c=t("md7G"),r=t("foSv"),o=t("rePB"),m=t("q1tI"),g=t.n(m),u=t("0Yqi"),d=g.a.createElement;function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(r.a)(e);if(a){var l=Object(r.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e){Object(n.a)(t,e);var a=p(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(o.a)(Object(s.a)(e),"_isMounted",!1),Object(o.a)(Object(s.a)(e),"state",{display:!1,collapsed:!0}),Object(o.a)(Object(s.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",t=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return d(g.a.Fragment,null,d("div",{id:"navbar",className:"navbar-area navbar-style-two"},d("div",{className:"tuam-nav"},d("div",{className:"container-fluid"},d("nav",{className:"navbar navbar-expand-md navbar-light"},d(u.a,{href:"/"},d("a",{className:"navbar-brand"},d("img",{src:"/images/white-logo.png",alt:"logo",className:"white-logo"}),d("img",{src:"/images/logo.png",alt:"logo",className:"logo"}))),d("button",{onClick:this.toggleNavbar,className:t,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d("span",{className:"icon-bar top-bar"}),d("span",{className:"icon-bar middle-bar"}),d("span",{className:"icon-bar bottom-bar"})),d("div",{className:a,id:"navbarSupportedContent"},d("ul",{className:"navbar-nav"},d("li",{className:"nav-item"},d(u.a,{href:"/#"},d("a",{className:"nav-link",onClick:function(e){return e.preventDefault()}},"Home"))),d("li",{className:"nav-item"},d(u.a,{href:"/about",activeClassName:"active"},d("a",{className:"nav-link"},"About Us"))),d("li",{className:"nav-item"},d(u.a,{href:"/services",activeClassName:"active"},d("a",{className:"nav-link"},"Services"))),d("li",{className:"nav-item"},d(u.a,{href:"/contact",activeClassName:"active"},d("a",{className:"nav-link"},"Contact Us")))),d("div",{className:"others-option"},d("div",{className:"call-us"},d("div",{className:"icon"},d("i",{className:"flaticon-call"})),"Call Us:",d("span",{className:"number"},"+1 518 285679")),d(u.a,{href:"/#"},d("a",{className:"default-btn"},"Schedule A Tour",d("span",null))))))))))}}]),t}(m.Component);a.a=f},"7z7z":function(e,a,t){"use strict";var i=t("1OyB"),l=t("vuIU"),s=t("JX7q"),n=t("Ji7U"),c=t("md7G"),r=t("foSv"),o=t("rePB"),m=t("q1tI"),g=t.n(m),u=(t("YFqc"),t("60Bi")),d=t.n(u),p=g.a.createElement;function f(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(r.a)(e);if(a){var l=Object(r.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(c.a)(this,t)}}var v=function(e){Object(n.a)(t,e);var a=f(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(o.a)(Object(s.a)(e),"state",{isOpen:!1}),Object(o.a)(Object(s.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return p(g.a.Fragment,null,p("section",{className:"video-area ptb-100 pb-0"},p("div",{className:"container"},p("div",{className:"video-content"},p("h2",null,"Watch this video presentation to know more about our Coworking"),p("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),p("div",{className:"video-box"},p("img",{src:"/images/video-img.jpg",alt:"image"}),p("div",{className:"play-video"},p("div",{onClick:function(a){a.preventDefault(),e.openModal()},className:"video-btn"},p("i",{className:"flaticon-play-button-1"})),p("span",null,"Watch Now"))))),p(d.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"szuchBiLrEM",onClose:function(){return e.setState({isOpen:!1})}}))}}]),t}(m.Component);a.a=v},Y9L4:function(e,a,t){},"fJz/":function(e,a,t){"use strict";var i=t("1OyB"),l=t("vuIU"),s=t("Ji7U"),n=t("md7G"),c=t("foSv"),r=t("q1tI"),o=t.n(r),m=t("YFqc"),g=t.n(m),u=o.a.createElement;function d(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(c.a)(e);if(a){var l=Object(c.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(n.a)(this,t)}}var p=function(e){Object(s.a)(t,e);var a=d(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return u(o.a.Fragment,null,u("section",{className:"services-area ptb-100"},u("div",{className:"container"},u("div",{className:"section-title"},u("h2",null,"Our Amenities"),u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),u("div",{className:"row"},u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-university"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"Virtual Offices"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"})))),u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-work"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"Full-Time Offices"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"})))),u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-room"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"Conference Rooms"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"})))),u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-location"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"Global Access"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"})))),u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-security"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"Discounted Products"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"})))),u("div",{className:"col-lg-4 col-md-6 col-sm-6"},u("div",{className:"single-services-box"},u("div",{className:"icon"},u("i",{className:"flaticon-shop"}),u("div",{className:"icon-bg"},u("img",{src:"/images/icon-bg1.png",alt:"image"}),u("img",{src:"/images/icon-bg2.png",alt:"image"}))),u("h3",null,u(g.a,{href:"#"},u("a",null,"B2B Opportunities"))),u("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore."),u(g.a,{href:"#"},u("a",{className:"read-more-btn"},"Learn More")),u("div",{className:"box-shape"},u("img",{src:"/images/box-shape1.png",alt:"image"}),u("img",{src:"/images/box-shape2.png",alt:"image"}))))))))}}]),t}(r.Component);a.a=p},pKdn:function(e,a,t){"use strict";var i=t("wx14"),l=t("1OyB"),s=t("vuIU"),n=t("JX7q"),c=t("Ji7U"),r=t("md7G"),o=t("foSv"),m=t("rePB"),g=t("q1tI"),u=t.n(g),d=t("YFqc"),p=t.n(d),f=t("Vvt1"),v=t.n(f),b=u.a.createElement;function h(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(o.a)(e);if(a){var l=Object(o.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(r.a)(this,t)}}var y=v()((function(){return t.e(4).then(t.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),N={loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!0,margin:30,navText:["<i class='flaticon-left-chevron'></i>","<i class='flaticon-right-chevron'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:2},1200:{items:3}}},O=function(e){Object(c.a)(t,e);var a=h(t);function t(){var e;Object(l.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return e=a.call.apply(a,[this].concat(s)),Object(m.a)(Object(n.a)(e),"_isMounted",!1),Object(m.a)(Object(n.a)(e),"state",{display:!1}),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setState({display:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return b(u.a.Fragment,null,b("section",{className:"services-area ptb-100 bg-f8f8f8"},b("div",{className:"container"},b("div",{className:"section-title"},b("h2",null,"We Offer creative working environments"),b("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),this.state.display?b(y,Object(i.a)({className:"main-services-slides owl-carousel owl-theme"},N),b("div",{className:"services-box"},b("img",{src:"/images/gallery/gallery1.jpg",alt:"image"}),b("div",{className:"services-content"},b("h3",null,b(p.a,{href:"#"},b("a",null,"Office Space"))),b("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod"))),b("div",{className:"services-box"},b("img",{src:"/images/gallery/gallery2.jpg",alt:"image"}),b("div",{className:"services-content"},b("h3",null,b(p.a,{href:"#"},b("a",null,"Coworking"))),b("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod"))),b("div",{className:"services-box"},b("img",{src:"/images/gallery/gallery3.jpg",alt:"image"}),b("div",{className:"services-content"},b("h3",null,b(p.a,{href:"#"},b("a",null,"Meeting Spaces"))),b("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod"))),b("div",{className:"services-box"},b("img",{src:"/images/gallery/gallery4.jpg",alt:"image"}),b("div",{className:"services-content"},b("h3",null,b(p.a,{href:"#"},b("a",null,"Virtual Offices"))),b("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod")))):"")))}}]),t}(g.Component);a.a=O},wi4D:function(e,a,t){"use strict";var i=t("1OyB"),l=t("vuIU"),s=t("JX7q"),n=t("Ji7U"),c=t("md7G"),r=t("foSv"),o=t("rePB"),m=t("q1tI"),g=t.n(m),u=t("YFqc"),d=t.n(u),p=t("1VNF"),f=(t("Y9L4"),g.a.createElement);function v(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=Object(r.a)(e);if(a){var l=Object(r.a)(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return Object(c.a)(this,t)}}var b=["/images/gallery/gallery1.jpg","/images/gallery/gallery2.jpg","/images/gallery/gallery3.jpg","/images/gallery/gallery4.jpg","/images/gallery/gallery5.jpg","/images/gallery/gallery6.jpg","/images/gallery/gallery7.jpg","/images/gallery/gallery8.jpg","/images/gallery/gallery9.jpg","/images/gallery/gallery10.jpg"],h=function(e){Object(n.a)(t,e);var a=v(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(o.a)(Object(s.a)(e),"state",{photoIndex:0,isOpenImage:!1}),e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.photoIndex,i=a.isOpenImage;return f(g.a.Fragment,null,f("section",{className:"gallery-area ptb-100 pb-0"},f("div",{className:"container"},f("div",{className:"section-title"},f("h2",null,"Tuam Spaces Gallery"),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),f("div",{className:"container-fluid"},f("div",{className:"shorting"},f("div",{className:"row"},i&&f(p.a,{mainSrc:b[t],nextSrc:b[(t+1)%b.length],prevSrc:b[(t+b.length-1)%b.length],onCloseRequest:function(){return e.setState({isOpenImage:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+b.length-1)%b.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%b.length})}}),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery1.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:0})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery2.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:1})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery3.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:2})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery4.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:3})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery5.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:4})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery6.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:5})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery7.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:6})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery8.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:7})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery9.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:8})}},f("i",{className:"flaticon-expand"})))),f("div",{className:"single-gallery-box"},f("img",{src:"/images/gallery/gallery10.jpg",alt:"image"}),f(d.a,{href:"#"},f("a",{className:"gallery-btn",onClick:function(a){a.preventDefault(),e.setState({isOpenImage:!0,photoIndex:9})}},f("i",{className:"flaticon-expand"})))))))))}}]),t}(m.Component);a.a=h}}]);