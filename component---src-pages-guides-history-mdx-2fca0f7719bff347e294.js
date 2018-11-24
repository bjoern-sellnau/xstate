(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return m});var n=t(184),s=t.n(n),c=t(0),o=t.n(c),l=t(174),i=t(181);a.default=function(e){var a=e.components,t=s()(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",Layout:i.a,layoutProps:t,components:a},o.a.createElement(l.MDXTag,{name:"h1",components:a,props:{id:"history-state-nodes"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#history-state-nodes","aria-hidden":!0,class:"anchor"}}),"History State Nodes"),o.a.createElement(l.MDXTag,{name:"p",components:a},"A history state node is a special kind of state node that, when reached, tells the machine to go to the last state value of that region. There's two types of history states:"),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'shallow'"),", which specifies only the top-level history value, or"),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'deep'"),", which specifies the top-level and all child-level history values.")),o.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"history-state-configuration"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#history-state-configuration","aria-hidden":!0,class:"anchor"}}),"History State Configuration"),o.a.createElement(l.MDXTag,{name:"p",components:a},"The configuration for a history state is the same as an atomic state node, with some extra properties:"),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'history'")," to specify that this is a history state node"),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"history")," ('shallow' | 'deep') - whether the history is shallow or deep. Defaults to 'shallow'."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"target")," (StateValue) - the default target if no history exists. Defaults to the initial state value of the parent node.")),o.a.createElement(l.MDXTag,{name:"p",components:a},"Consider the following (contrived) statechart:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},o.a.createElement("pre",{className:"language-js"},o.a.createElement("code",{className:"language-js"},o.a.createElement("span",{className:"token keyword"},"const")," fanMachine ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token function"},"Machine"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'fan'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'fanOff'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","fanOff",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",o.a.createElement("span",{className:"token comment"},"// transitions to history state"),"\n","        ",o.a.createElement("span",{className:"token constant"},"POWER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'fanOn.hist'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ",o.a.createElement("span",{className:"token constant"},"HIGH_POWER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'fanOn.highPowerHist'"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","    ","fanOn",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'first'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","first",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"SWITCH"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'second'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","second",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"SWITCH"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'third'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","third",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","\n","        ",o.a.createElement("span",{className:"token comment"},"// shallow history state"),"\n","        ","hist",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'history'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","history",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'shallow'")," ",o.a.createElement("span",{className:"token comment"},"// optional; default is 'shallow'"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","\n","        ",o.a.createElement("span",{className:"token comment"},"// shallow history state with default"),"\n","        ","highPowerHist",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'history'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","target",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'third'"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",o.a.createElement("span",{className:"token constant"},"POWER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'fanOff'"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";")))),o.a.createElement(l.MDXTag,{name:"p",components:a},"In the above machine, the transition from ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'fanOff'")," on the event ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'POWER'")," goes to the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'fanOn.hist'")," state, which is defined as a shallow history state. This means that the machine should transition to the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'fanOn'")," state and to whichever the previous substate of ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'fanOn'")," was. By default, ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'fanOn'")," will go to its initial state, ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'first'"),", if there is no history state."),o.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},o.a.createElement("pre",{className:"language-js"},o.a.createElement("code",{className:"language-js"},o.a.createElement("span",{className:"token keyword"},"const")," firstState ",o.a.createElement("span",{className:"token operator"},"=")," fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"transition"),o.a.createElement("span",{className:"token punctuation"},"("),"fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),"initialState",o.a.createElement("span",{className:"token punctuation"},",")," ",o.a.createElement("span",{className:"token string"},"'POWER'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"firstState",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// transitions to the initial state of 'fanOn' since there is no history"),"\n",o.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","fanOn: 'first'"),"\n",o.a.createElement("span",{className:"token comment"},"// ","}"),"\n","\n",o.a.createElement("span",{className:"token keyword"},"const")," secondState ",o.a.createElement("span",{className:"token operator"},"=")," fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"transition"),o.a.createElement("span",{className:"token punctuation"},"("),"firstState",o.a.createElement("span",{className:"token punctuation"},",")," ",o.a.createElement("span",{className:"token string"},"'SWITCH'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"secondState",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","fanOn: 'second'"),"\n",o.a.createElement("span",{className:"token comment"},"// ","}"),"\n","\n",o.a.createElement("span",{className:"token keyword"},"const")," thirdState ",o.a.createElement("span",{className:"token operator"},"=")," fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"transition"),o.a.createElement("span",{className:"token punctuation"},"("),"secondState",o.a.createElement("span",{className:"token punctuation"},",")," ",o.a.createElement("span",{className:"token string"},"'POWER'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"thirdState",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// => 'fanOff'"),"\n","\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"thirdState",o.a.createElement("span",{className:"token punctuation"},"."),"history",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","value: ","{"," fanOn: 'second' ","}",","),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","actions: []"),"\n",o.a.createElement("span",{className:"token comment"},"// ","}"),"\n","\n",o.a.createElement("span",{className:"token keyword"},"const")," fourthState ",o.a.createElement("span",{className:"token operator"},"=")," fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"transition"),o.a.createElement("span",{className:"token punctuation"},"("),"thirdState",o.a.createElement("span",{className:"token punctuation"},",")," ",o.a.createElement("span",{className:"token string"},"'POWER'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"fourthState",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// transitions to 'fanOn.second' from history"),"\n",o.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","fanOn: 'second'"),"\n",o.a.createElement("span",{className:"token comment"},"// ","}")))),o.a.createElement(l.MDXTag,{name:"p",components:a},"With a ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"target")," specified, if no history exists for the state region the history state is defined in, it will go to the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"target")," state by default:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},o.a.createElement("pre",{className:"language-js"},o.a.createElement("code",{className:"language-js"},o.a.createElement("span",{className:"token keyword"},"const")," firstState ",o.a.createElement("span",{className:"token operator"},"=")," fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"transition"),o.a.createElement("span",{className:"token punctuation"},"("),"fanMachine",o.a.createElement("span",{className:"token punctuation"},"."),"initialState",o.a.createElement("span",{className:"token punctuation"},",")," ",o.a.createElement("span",{className:"token string"},"'HIGH_POWER'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"firstState",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token comment"},"// transitions to the target state of 'fanOn.third' since there is no history"),"\n",o.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",o.a.createElement("span",{className:"token comment"},"//","   ","fanOn: 'third'"),"\n",o.a.createElement("span",{className:"token comment"},"// ","}")))),o.a.createElement(l.MDXTag,{name:"p",components:a},o.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"Notes:")),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"History states can be directly accessed from ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"State")," instances on ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"state.history"),", but this is seldom necessary.")))};var m={}},168:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return M}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return N});var n=t(0),s=t.n(n),c=t(4),o=t.n(c),l=t(167),i=t.n(l);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var m=t(170),r=t.n(m);t.d(a,"PageRenderer",function(){return r.a});var u=t(34);t.d(a,"parsePath",function(){return u.a});var p=s.a.createContext({}),N=function(e){return s.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function M(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}N.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},170:function(e,a,t){var n;e.exports=(n=t(173))&&n.default||n},171:function(e,a,t){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,a,t){"use strict";t.r(a);var n=t(10),s=t.n(n),c=t(0),o=t.n(c),l=t(4),i=t.n(l),m=t(51),r=t(2),u=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return o.a.createElement(m.a,s()({location:a,pageResources:t},t.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=u},175:function(e,a,t){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,a,t){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,a,t){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,a,t){"use strict";t(76),t(182);var n=t(7),s=t.n(n),c=t(172),o=t(0),l=t.n(o),i=t(4),m=t.n(i),r=t(183),u=t.n(r),p=t(168),N=t(174),M=t(175),g=t.n(M),E=t(171),L=t.n(E),k=(t(185),t(186),t(169)),d=t.n(k),y=function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.tag,t=e.id;return l.a.createElement(a,{className:d()(L.a.heading,L.a[a]),id:t},l.a.createElement("span",null,this.props.children))},a}(l.a.Component);function h(e){return l.a.createElement("a",Object.assign({},e,{className:d()(L.a.anchor)}))}var j=t(187),I=t.n(j),C=t(176),T=t.n(C),D=t(177),S=t.n(D),f=t(178),w=t.n(f),A=t(179),x=t.n(A),O=function(e){var a=e.siteTitle,t=e.className,n=e.onToggleMenu;return l.a.createElement("header",{className:d()(t,x.a.header)},l.a.createElement(p.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:a,className:x.a.logo},l.a.createElement("img",{src:T.a,width:"auto"})),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:x.a.github},l.a.createElement("img",{src:S.a,width:"auto"})),l.a.createElement("img",{src:w.a,width:"auto",className:x.a.menu,onClick:n})))},z=(t(188),t(77),t(50),t(189),t(49),t(180)),Y=t.n(z);console.log(Y.a);var b={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},v=function(e){function a(){return e.apply(this,arguments)||this}s()(a,e);var t=a.prototype;return t.renderPages=function(e,a){return l.a.createElement("ul",{className:Y.a.items},Object.keys(e).map(function(t){var n=e[t],s=e[t].link||"docs/"+a+"/"+t;return l.a.createElement("li",{className:Y.a.item},l.a.createElement(p.Link,{to:s,className:Y.a.link},n.title))}))},t.render=function(){var e=this;this.props.visible;return l.a.createElement("nav",{className:Y.a.nav},l.a.createElement("ul",{className:Y.a.items},Object.keys(b).map(function(a){var t=b[a],n=t.pages,s=t.title,c=t.link,o=void 0===c?"docs/"+a:c;return l.a.createElement("li",{className:d()(Y.a.item,Y.a.topLevel)},l.a.createElement(p.Link,{to:o,className:Y.a.link},s),n&&e.renderPages(n,a))})))},a}(l.a.Component),X=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){I.a.initHighlighting()},t.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},t.render=function(){var e=this,a=this.props.children;return l.a.createElement(p.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement("main",{className:g.a.layout},l.a.createElement(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),l.a.createElement(O,{className:g.a.header,siteTitle:t.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),l.a.createElement("div",{className:g.a.sidebar,"data-visible":e.state.menuToggled||void 0},l.a.createElement(v,null)),l.a.createElement(N.MDXProvider,{components:{h1:function(e){return l.a.createElement(y,Object.assign({tag:"h1"},e))},h2:function(e){return l.a.createElement(y,Object.assign({tag:"h2"},e))},h3:function(e){return l.a.createElement(y,Object.assign({tag:"h3"},e))},a:function(e){return l.a.createElement(h,e)},inlineCode:function(e){return l.a.createElement("code",{className:L.a.code},e.children)}}},l.a.createElement("main",{className:g.a.content},a)))},data:c})},a}(l.a.Component);X.propTypes={children:m.a.node.isRequired};a.a=X}}]);
//# sourceMappingURL=component---src-pages-guides-history-mdx-2fca0f7719bff347e294.js.map