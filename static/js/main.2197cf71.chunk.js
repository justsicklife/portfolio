(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,c,s){},11:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var r=s(0),t=s(1),a=s(3),n=s.n(a),i=(s(10),s(4)),l=(s(11),s.p+"static/media/crabswim.8c4158c9.gif");var j=function(){var e=Object(t.useRef)(),c=Object(t.useRef)(),s=Object(t.useRef)(!1),a=Object(t.useRef)(),n=Object(t.useRef)(null),j=new Array,o=Object(t.useRef)(0),d=Object(t.useRef)(!1),b=Object(t.useRef)([0,1,2,3]),h=Object(t.useRef)(null),u=Object(t.useRef)(new Array),f=Object(t.useRef)(new Array),m=Object(t.useState)(!1),x=Object(i.a)(m,2),O=x[0],v=x[1],p=function(e,c,s){var r=0,t=setInterval((function(){c<=r?clearInterval(t):(r++,e.style.width=r+"%")}),s)},N=function(e){d.current||s.current||(e.deltaY<0?w(-1):e.deltaY>0&&w(1))},g=function(){s.current=!s.current,s.current?c.current.style.transform="translateX(0%)":c.current.style.transform="translateX(100%)"},w=function(e){0===o.current&&-1===e||o.current===j.length-1&&1===e||(d.current=!0,j[o.current].style.zIndex="0",j[o.current].classList.remove("active"),o.current+=e,h.current=-e,b.current[o.current]=0,j[o.current].style.zIndex="1",j[o.current].style.transform="translateX(0px)",j[o.current].classList.add("active"),v({}),setTimeout((function(){for(var e=0;e<j.length;e++)if(o.current!==e){var c=document.body.offsetWidth;b.current[e]+=h.current;var s=c*b.current[e];j[e].style.transform="translateX(".concat(s,"px)")}d.current=!1}),800))},k=function(e){if(o.current!==e){o.current=e,v({}),j[o.current].style.zIndex="1",j[o.current].style.transform="translateX(0px)",j[o.current].classList.add("active"),d.current=!0,j[o.current].style.zIndex="0";for(var c=1,s=o.current+1;s<j.length;s++){var r=document.body.offsetWidth;b.current[s]=c,j[s].classList.remove("active");var t=r*b.current[s];j[s].style.transform="translateX(".concat(t,"px)"),c++}c=-1;for(var a=o.current-1;a>=0;a--){var n=document.body.offsetWidth;b.current[a]=c,j[a].classList.remove("active");var i=n*b.current[a];j[a].style.transform="translateX(".concat(i,"px)"),c--}g(),d.current=!1}};return Object(t.useEffect)((function(){for(var c=0;c<j.length;c++)c<=o.current?n.current.children[c].classList.add("fill"):n.current.children[c].classList.remove("fill");for(var s=0;s<j.length;s++)s!==o.current?e.current.children[s].children[0].classList.remove("current-maraker"):e.current.children[s].children[0].classList.add("current-maraker");if(2===o.current)for(var r=0;r<u.current.length;r++){var t=u.current[r].innerText,a=f.current[r];a.style.width="0%",p(a,t,10)}}),[O]),Object(t.useEffect)((function(){for(var e=0;e<j.length;e++){var c=document.body.offsetWidth*e;j[e].style.transform="translateX(".concat(c,"px)")}}),[]),Object(t.useEffect)((function(){return window.addEventListener("wheel",N),window.addEventListener("touchmove",N),function(){window.removeEventListener("wheel",N),window.removeEventListener("touchmove",N)}}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsxs)("div",{ref:c,className:"offcanvas-menu flex-direction-column",children:[Object(r.jsx)("div",{className:"offcanvas-menu-header",children:Object(r.jsx)("div",{onClick:g,className:"offcanvas-menu-header-close",children:Object(r.jsx)("i",{className:"far fa-window-close icon"})})}),Object(r.jsx)("nav",{className:"offcanvas-menu-navbar",children:Object(r.jsxs)("ul",{ref:e,className:"offcanvas-menu-navbar-content-list row flex-direction-column",children:[Object(r.jsx)("li",{"data-menuanchor":"home",className:"offcanvas-menu-navbar-content",children:Object(r.jsx)("h3",{onClick:function(){k(0)},children:"home"})}),Object(r.jsx)("li",{"data-menuanchor":"service",className:"offcanvas-menu-navbar-content",children:Object(r.jsx)("h3",{onClick:function(){k(1)},children:"service"})}),Object(r.jsx)("li",{"data-menuanchor":"stack",className:"offcanvas-menu-navbar-content",children:Object(r.jsx)("h3",{onClick:function(){k(2)},children:"stack"})}),Object(r.jsx)("li",{"data-menuanchor":"portfolio",className:"offcanvas-menu-navbar-content",children:Object(r.jsx)("h3",{onClick:function(){k(3)},children:"portfolio"})}),Object(r.jsx)("li",{"data-menuanchor":"contact",className:"offcanvas-menu-navbar-content",children:Object(r.jsx)("h3",{onClick:function(){k(4)},children:"contact"})})]})}),Object(r.jsx)("footer",{className:"offcanvas-menu-footer",children:Object(r.jsx)("nav",{className:"offcanvas-menu-footer-navbar",children:Object(r.jsxs)("ul",{className:"offcanvas-menu-footer-navbar-content-list row flex-direction-column",children:[Object(r.jsx)("li",{className:"offcanvas-menu-footer-navbar-content",children:Object(r.jsx)("button",{className:"offcanvas-menu-footer-navbar-content--github",children:Object(r.jsx)("i",{className:"fab fa-github github-icon icon"})})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("li",{className:"offcanvas-menu-footer-navbar-content",children:Object(r.jsx)("button",{className:"offcanvas-menu-footer-navbar-content--email",children:Object(r.jsx)("i",{className:"far fa-envelope email-icon icon"})})})]})})})]}),Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-inner row",children:[Object(r.jsxs)("div",{className:"navbar-inner--left",children:[Object(r.jsx)("a",{className:"navbar-logo",children:"Hello!"}),Object(r.jsx)("a",{className:"navbar-email",children:"justsicklife@gmail.com"})]}),Object(r.jsx)("div",{className:"navbar-inner--right",children:Object(r.jsx)("div",{onClick:g,className:"navbar-burger",children:Object(r.jsx)("i",{className:"fas fa-bars icon"})})})]})})]}),Object(r.jsx)("footer",{className:"footer"}),Object(r.jsxs)("main",{className:"slide",children:[Object(r.jsxs)("ul",{ref:n,className:"fullpage-slider-progress-bar is-show",children:[Object(r.jsx)("li",{"data-menuanchor":"home"}),Object(r.jsx)("li",{"data-menuanchor":"service"}),Object(r.jsx)("li",{"data-menuanchor":"stack"}),Object(r.jsx)("li",{"data-menuanchor":"portfolio"}),Object(r.jsx)("li",{"data-menuanchor":"contact"})]}),Object(r.jsxs)("ul",{ref:a,className:"slide-wrap",children:[Object(r.jsx)("li",{ref:function(e){j[0]||j.push(e)},className:"home page page0 active",children:Object(r.jsx)("div",{className:"vertical-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"introduce row flex-direction-column ",children:[Object(r.jsx)("div",{className:"introduce-name",children:Object(r.jsx)("h5",{children:"\uc815\ud558\ud615"})}),Object(r.jsx)("div",{className:"introduce-title",children:Object(r.jsx)("h1",{children:"\uc800\ub294 \uc720\ucf8c\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4."})})]})})})}),Object(r.jsx)("li",{ref:function(e){j[1]||j.push(e)},className:"service page page1",children:Object(r.jsx)("div",{className:"vertical-align service-vertical-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row flex-direction-column",children:[Object(r.jsx)("div",{className:"service-preface",children:Object(r.jsx)("h4",{children:"\uc548\ub155\ud558\uc138\uc694 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc815\ud558\ud615 \uc785\ub2c8\ub2e4."})}),Object(r.jsxs)("ul",{className:"service-list",children:[Object(r.jsxs)("li",{className:"service-box service-box0 row",children:[Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-laptop-code"})})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\uc6f9 \uac1c\ubc1c\uc744 \ud560\uc218\uc788\uc5b4\uc694 !"})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\ub124."})})]}),Object(r.jsxs)("li",{className:"service-box service-box1 row",children:[Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-search-plus"})})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\ucd5c\uc801\ud654\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4."})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\uc0ac\uc6a9\uc790\uc758 \uba54\ubaa8\ub9ac\ub97c \ucd5c\uc18c\ud55c\uc73c\ub85c \uc0ac\uc6a9\ud560\uc218 \uc788\uac8c \ud56d\uc0c1 \uace0\ubbfc\ud569\ub2c8\ub2e4."})})]}),Object(r.jsxs)("li",{className:"service-box service-box2 row",children:[Object(r.jsx)("div",{className:"service-icon",children:Object(r.jsx)("span",{children:Object(r.jsx)("img",{})})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-title",children:Object(r.jsx)("h3",{children:"\uc6f9 \uac1c\ubc1c\uc744 \ud560\uc218\uc788\uc5b4\uc694 !"})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsx)("div",{className:"service-description",children:Object(r.jsx)("p",{children:"\ub124."})})]})]})]})})})}),Object(r.jsx)("li",{ref:function(e){j[2]||j.push(e)},className:"stack page page2",children:Object(r.jsx)("div",{className:"vertical-align",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsxs)("figure",{className:"photo",children:[Object(r.jsx)("div",{className:"photo-inside",children:Object(r.jsx)("img",{src:l})}),Object(r.jsx)("figcaption",{children:"\ub9c8\ub545\ud788 \uc62c\ub9b4 \uc0ac\uc9c4\uc774 \uc5c6\uc5b4\uc11c..."})]}),Object(r.jsxs)("div",{className:"stack-wrap",children:[Object(r.jsx)("div",{className:"stack-title",children:Object(r.jsx)("h4",{children:"\uc800\ub294 \ucd5c\uc801\ud654 \uc640 \uce5c\ubc00\ud55c \ub514\uc790\uc778\uc744 \uc911\uc694\uc2dc \uc5ec\uae30\uba74\uc11c \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac83\uc744 \uc990\uaca8\ud569\ub2c8\ub2e4."})}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsxs)("ul",{className:"progress-bar-list",children:[Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 ",Object(r.jsx)("span",{ref:function(e){u.current[0]||u.current.push(e)},className:"counter",children:"87"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar00",children:Object(r.jsx)("span",{ref:function(e){f.current[0]||f.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["html ",Object(r.jsx)("span",{ref:function(e){u.current[1]||u.current.push(e)},className:"counter",children:"70"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar01",children:Object(r.jsx)("span",{ref:function(e){f.current[1]||f.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["css ",Object(r.jsx)("span",{ref:function(e){u.current[2]||u.current.push(e)},className:"counter",children:" 75"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar02",children:Object(r.jsx)("span",{ref:function(e){f.current[2]||f.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["react ",Object(r.jsx)("span",{ref:function(e){u.current[3]||u.current.push(e)},className:"counter",children:"80"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar03",children:Object(r.jsx)("span",{ref:function(e){f.current[3]||f.current.push(e)}})})]}),Object(r.jsxs)("li",{className:"progress-bar-wrap",children:[Object(r.jsx)("div",{className:"progress-bar-title",children:Object(r.jsxs)("h5",{children:["redux ",Object(r.jsx)("span",{ref:function(e){u.current[4]||u.current.push(e)},className:"counter",children:"85"})]})}),Object(r.jsx)("div",{className:"progress-bar progress-bar04",children:Object(r.jsx)("span",{ref:function(e){f.current[4]||f.current.push(e)}})})]})]})]})]})})})}),Object(r.jsx)("li",{ref:function(e){j[3]||j.push(e)},className:"portfolio page3 page",children:Object(r.jsx)("div",{className:"vertical-align",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"portfolio-header",children:[Object(r.jsx)("div",{className:"portfolio-perpace",children:Object(r.jsx)("h3",{children:"portfolio"})}),Object(r.jsxs)("div",{className:"portfolio-slide row",children:[Object(r.jsx)("div",{className:"portfolio-slide-button--right",children:Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:"fas fa-arrow-left icon-right icon"})})}),Object(r.jsx)("div",{className:"portfolio-current-page",children:"1"}),Object(r.jsx)("div",{className:"protfolio-separator-page",children:"/"}),Object(r.jsx)("div",{className:"portfolio-max-page",children:"2"}),Object(r.jsx)("div",{className:"portfolio-slide-button--left",children:Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:"fas fa-arrow-right icon-left icon"})})})]})]}),Object(r.jsx)("div",{className:"gap-35"}),Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsxs)("div",{className:"portfolio-photo-wrap",children:[Object(r.jsx)("div",{className:"portfolio-photo",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\uc774\ubbf8\uc9c0"}),Object(r.jsx)("img",{})]})}),Object(r.jsx)("div",{className:"gap-15"}),Object(r.jsxs)("div",{className:"portfolio-view",children:[Object(r.jsx)("div",{className:"portfolio-view--github",children:"\uae43\ud5c8\ube0c"}),Object(r.jsx)("div",{className:"portfolio-view--web-page",children:"\uc0ac\uc774\ud2b8"})]})]}),Object(r.jsxs)("div",{className:"portfolio-explanation row flex-direction-column",children:[Object(r.jsx)("div",{className:"portfolio-title-preface",children:Object(r.jsx)("h3",{children:"\uc774\ub984"})}),Object(r.jsx)("div",{className:"portfolio-title",children:"\ube44\ud2c0\uc988 \uc18c\uac1c \uc0ac\uc774\ud2b8"}),Object(r.jsx)("div",{className:"portfolio-description-preface",children:Object(r.jsx)("h3",{children:"\uc124\uba85"})}),Object(r.jsx)("div",{className:"portfolio-description",children:"\ube44\ud2c0\uc988\uc758 \ub178\ub798\ub97c \uc88b\uc544\ud574\uc11c \ub9cc\ub4e4\uc5b4\ubcf8 \ube44\ud2c0\uc988 \uc18c\uac1c \uc0ac\uc774\ud2b8"}),Object(r.jsx)("div",{className:"portfolio-used-stack-preface",children:Object(r.jsx)("h3",{children:"\uc0ac\uc6a9\ub41c \uae30\uc220"})}),Object(r.jsx)("ul",{className:"portfolio-used-stack-list",children:Object(r.jsx)("li",{className:"portfolio-used-stack",children:Object(r.jsx)("div",{className:"portfolio-used-stack--react",children:Object(r.jsx)("i",{className:"fab fa-react stack-icon stack-icon-react"})})})})]})]})]})})})]})]})]})},o=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,r=c.getFID,t=c.getFCP,a=c.getLCP,n=c.getTTFB;s(e),r(e),t(e),a(e),n(e)}))};n.a.render(Object(r.jsx)(j,{}),document.getElementById("root")),o()}},[[12,1,2]]]);
//# sourceMappingURL=main.2197cf71.chunk.js.map