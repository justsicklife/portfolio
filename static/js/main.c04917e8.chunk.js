(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,c,s){},11:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var r=s(0),a=s(1),t=s(3),n=s.n(t),i=(s(10),s(4)),l=(s(11),s.p+"static/media/crabswim.8c4158c9.gif");var j=function(){Object(a.useRef)();var e=Object(a.useRef)(),c=Object(a.useRef)(!1),s=Object(a.useRef)(),t=Object(a.useRef)(null),n=new Array,j=Object(a.useRef)(0),d=Object(a.useRef)(!1),o=Object(a.useRef)([0,1,2]),b=Object(a.useRef)(null),u=Object(a.useRef)(new Array),h=Object(a.useRef)(new Array),m=Object(a.useState)(!1),x=Object(i.a)(m,2),O=x[0],f=x[1],v=function(e,c,s){var r=0,a=setInterval((function(){c<=r?clearInterval(a):(r++,e.style.width=r+"%")}),s)},p=function(e){d.current||c.current||(e.deltaY<0?g(-1):g(1))},N=function(){c.current=!c.current,c.current?e.current.style.transform="translateX(0%)":e.current.style.transform="translateX(100%)"},g=function(e){0===j.current&&-1===e||j.current===n.length-1&&1===e||(d.current=!0,n[j.current].style.zIndex="0",n[j.current].classList.remove("active"),j.current+=e,b.current=-e,o.current[j.current]=0,n[j.current].style.zIndex="1",n[j.current].style.transform="translateX(0px)",n[j.current].classList.add("active"),f({}),setTimeout((function(){for(var e=0;e<n.length;e++)if(j.current!==e){var c=document.body.offsetWidth;o.current[e]+=b.current;var s=c*o.current[e];n[e].style.transform="translateX(".concat(s,"px)")}d.current=!1}),800))};return Object(a.useEffect)((function(){for(var e=0;e<n.length;e++)e<=j.current?t.current.children[e].classList.add("fill"):t.current.children[e].classList.remove("fill");if(2===j.current)for(var c=0;c<u.current.length;c++){var s=u.current[c].innerText,r=h.current[c];r.style.width="0%",v(r,s,10)}}),[O]),Object(a.useEffect)((function(){for(var e=0;e<n.length;e++){var c=document.body.offsetWidth*e;n[e].style.transform="translateX(".concat(c,"px)")}}),[]),Object(a.useEffect)((function(){return window.addEventListener("wheel",p),function(){window.removeEventListener("wheel",p)}}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsxs)("div",{ref:e,className:"offcanvas-menu flex-direction-column",children:[Object(r.jsx)("div",{className:"offcanvas-menu-header",children:Object(r.jsx)("div",{onClick:N,className:"offcanvas-menu-header-close",children:Object(r.jsx)("i",{class:"far fa-window-close icon"})})}),Object(r.jsx)("nav",{className:"offcanvas-menu-navbar",children:Object(r.jsxs)("ul",{className:"offcanvas-menu-navbar-content-list row flex-direction-column",children:[Object(r.jsx)("li",{className:"offcanvas-menu-navbar-content",children:"home"}),Object(r.jsx)("li",{className:"offcanvas-menu-navbar-content",children:"service"}),Object(r.jsx)("li",{className:"offcanvas-menu-navbar-content",children:"stack"}),Object(r.jsx)("li",{className:"offcanvas-menu-navbar-content",children:"portfolio"}),Object(r.jsx)("li",{className:"offcanvas-menu-navbar-content",children:"contact"})]})}),Object(r.jsx)("footer",{className:"offcanvas-menu-footer",children:Object(r.jsx)("nav",{className:"offcanvas-menu-footer-navbar",children:Object(r.jsxs)("ul",{className:"offcanvas-menu-footer-navbar-content-list",children:[Object(r.jsx)("li",{className:"offcanvas-menu-footer-navbar-content",children:"\uae43\ud5c8\ube0c"}),Object(r.jsx)("li",{className:"offcanvas-menu-footer-navbar-content",children:"\uc774\uba54\uc77c"})]})})})]}),Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-inner row",children:[Object(r.jsxs)("div",{className:"navbar-inner--left",children:[Object(r.jsx)("a",{className:"navbar-logo",children:"Hello!"}),Object(r.jsx)("a",{className:"navbar-email",children:"justsicklife@gmail.com"})]}),Object(r.jsx)("div",{className:"navbar-inner--right",children:Object(r.jsx)("div",{onClick:N,className:"navbar-burger",children:Object(r.jsx)("i",{className:"fas fa-bars icon"})})})]})})]}),Object(r.jsx)("footer",{className:"footer"}),Object(r.jsxs)("main",{className:"slide",children:[Object(r.jsxs)("ul",{ref:t,className:"fullpage-slider-progress-bar is-show",children:[Object(r.jsx)("li",{"data-menuanchor":"home"}),Object(r.jsx)("li",{"data-menuanchor":"service"}),Object(r.jsx)("li",{"data-menuanchor":"stack"}),Object(r.jsx)("li",{"data-menuanchor":"portfolio"}),Object(r.jsx)("li",{"data-menuanchor":"contact"})]}),Object(r.jsxs)("ul",{ref:s,className:"slide-wrap",children:[Object(r.jsx)("li",{ref:function(e){n[0]||n.push(e)},className:"home page page0 active",children:Object(r.jsx)("div",{className:"verticla-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"introduce row flex-direction-column ",children:[Object(r.jsx)("div",{className:"introduce-name",children:Object(r.jsx)("h5",{children:"\uc815\ud558\ud615"})}),Object(r.jsx)("div",{className:"introduce-title",children:Object(r.jsx)("h1",{children:"\uc800\ub294 \uc720\ucf8c\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4."})})]})})})}),Object(r.jsx)("li",{ref:function(e){n[1]||n.push(e)},className:"service page page1",children:Object(r.jsx)("div",{className:"verticla-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row flex-direction-column",children:[Object(r.jsx)("div",{className:"service-preface",children:Object(r.jsx)("h4",{children:"\uc548\ub155\ud558\uc138\uc694 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc815\ud558\ud615 \uc785\ub2c8\ub2e4."})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsxs)("ul",{className:"service-list",children:[Object(r.jsxs)("li",{className:"service-box service-box0 row",children:[Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-laptop-code"})})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\uc6f9 \uac1c\ubc1c\uc744 \ud560\uc218\uc788\uc5b4\uc694 !"})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\ub124."})})]}),Object(r.jsxs)("li",{className:"service-box service-box1 row",children:[Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-search-plus"})})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\ucd5c\uc801\ud654\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4."})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\uc0ac\uc6a9\uc790\uc758 \uba54\ubaa8\ub9ac\ub97c \ucd5c\uc18c\ud55c\uc73c\ub85c \uc0ac\uc6a9\ud560\uc218 \uc788\uac8c \ud56d\uc0c1 \uace0\ubbfc\ud569\ub2c8\ub2e4."})})]}),Object(r.jsxs)("li",{className:"service-box service-box2 row",children:[Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("img",{})})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\uc6f9 \uac1c\ubc1c\uc744 \ud560\uc218\uc788\uc5b4\uc694 !"})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\ub124."})})]})]})]})})})}),Object(r.jsx)("li",{ref:function(e){n[2]||n.push(e)},className:"stack page page2",children:Object(r.jsx)("div",{className:"verticla-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsxs)("figure",{className:"photo",children:[Object(r.jsx)("div",{className:"photo-inside",children:Object(r.jsx)("img",{src:l})}),Object(r.jsx)("figcaption",{children:"\ub9c8\ub545\ud788 \uc62c\ub9b4 \uc0ac\uc9c4\uc774 \uc5c6\uc5b4\uc11c..."})]}),Object(r.jsxs)("div",{className:"stack-wrap",children:[Object(r.jsx)("div",{className:"stack-title",children:Object(r.jsx)("h4",{children:"\uc800\ub294 \ucd5c\uc801\ud654 \uc640 \uce5c\ubc00\ud55c \ub514\uc790\uc778\uc744 \uc911\uc694\uc2dc \uc5ec\uae30\uba74\uc11c \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac83\uc744 \uc990\uaca8\ud569\ub2c8\ub2e4."})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsxs)("ul",{className:"progress-bar-list",children:[Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 ",Object(r.jsx)("span",{ref:function(e){u.current[0]||u.current.push(e)},className:"counter",children:"87"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar00",children:Object(r.jsx)("span",{ref:function(e){h.current[0]||h.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["html ",Object(r.jsx)("span",{ref:function(e){u.current[1]||u.current.push(e)},className:"counter",children:"70"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar01",children:Object(r.jsx)("span",{ref:function(e){h.current[1]||h.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["css ",Object(r.jsx)("span",{ref:function(e){u.current[2]||u.current.push(e)},className:"counter",children:" 75"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar02",children:Object(r.jsx)("span",{ref:function(e){h.current[2]||h.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["react ",Object(r.jsx)("span",{ref:function(e){u.current[3]||u.current.push(e)},className:"counter",children:"80"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar03",children:Object(r.jsx)("span",{ref:function(e){h.current[3]||h.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["redux ",Object(r.jsx)("span",{ref:function(e){u.current[4]||u.current.push(e)},className:"counter",children:"85"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar04",children:Object(r.jsx)("span",{ref:function(e){h.current[4]||h.current.push(e)}})})]})]})]})]})})})})]})]})]})},d=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,r=c.getFID,a=c.getFCP,t=c.getLCP,n=c.getTTFB;s(e),r(e),a(e),t(e),n(e)}))};n.a.render(Object(r.jsx)(j,{}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.c04917e8.chunk.js.map