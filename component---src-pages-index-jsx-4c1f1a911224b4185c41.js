(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{139:function(e,t,a){"use strict";a.r(t);a(181);var n=a(7),i=a.n(n),u=a(206),o=a(0),r=a.n(o),s=a(171),l=(a(173),a(207)),c=a.n(l),L=(a(208),a(176)),d=a.n(L),M=a(394),m=a.n(M),y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){this.props.children;return r.a.createElement(s.StaticQuery,{query:"1897065401",render:function(e){return r.a.createElement("main",{className:c.a.main},r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),r.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",className:c.a.logo},r.a.createElement("img",{src:m.a,alt:"XState"})),r.a.createElement("ul",{className:c.a.links},r.a.createElement("li",{className:c.a.link,style:{"--i":0}},r.a.createElement("a",{href:"https://github.com/davidkpiano/xstate"},"GitHub")),r.a.createElement("li",{className:c.a.link,style:{"--i":1}},r.a.createElement(s.Link,{to:"guides/start"},"Docs")),r.a.createElement("li",{className:c.a.link,style:{"--i":2}},r.a.createElement("a",{href:"https://spectrum.chat/statecharts"},"Community"))))},data:u})},t}(r.a.Component);t.default=y},171:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return M});var n=a(0),i=a.n(n),u=a(4),o=a.n(u),r=a(170),s=a.n(r);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var l=a(172),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var L=a(35);a.d(t,"parsePath",function(){return L.a});var d=i.a.createContext({}),M=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},173:function(e,t,a){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},175:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a.n(n),u=a(0),o=a.n(u),r=a(4),s=a.n(r),l=a(53),c=a(2),L=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,i()({location:t,pageResources:a},a.json))};L.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=L},206:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},207:function(e,t,a){e.exports={main:"home-module--main--2nXNV",fadeIn:"home-module--fade-in--R8U-M",logo:"home-module--logo--FW_Jl",slideUp:"home-module--slide-up--6uBbl",paragraph:"home-module--paragraph--1zXbH",links:"home-module--links--2zA9m",link:"home-module--link--125Yv"}},394:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIHdoaXRlKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCB3aGl0ZSkiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgd2hpdGUpIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCB3aGl0ZSkiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCB3aGl0ZSkiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIHdoaXRlKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgd2hpdGUpIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-jsx-4c1f1a911224b4185c41.js.map