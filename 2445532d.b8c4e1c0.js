(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(88)),o={id:"installation",title:"Installation of the Phone",sidebar_label:"Installation"},l={unversionedId:"npwd/start/installation",id:"npwd/start/installation",isDocsHomePage:!1,title:"Installation of the Phone",description:"Initial Setup",source:"@site/docs\\npwd\\start\\Installation.md",slug:"/npwd/start/installation",permalink:"/docs/npwd/start/installation",editUrl:"https://github.com/project-error/docs.projecterror.dev/tree/master/docs/npwd/start/Installation.md",version:"current",lastUpdatedBy:"Taso",lastUpdatedAt:1615148371,sidebar_label:"Installation",sidebar:"docs",previous:{title:"NPWD Dependencies",permalink:"/docs/npwd/start/requiredDeps"},next:{title:"Basics of Development",permalink:"/docs/npwd/dev/basics"}},c=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Install Dependencies and Building Code",id:"install-dependencies-and-building-code",children:[]},{value:"Database Setup",id:"database-setup",children:[]},{value:"Finishing Up",id:"finishing-up",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"initial-setup"},"Initial Setup"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone directly from our Git repo, which can be found ",Object(i.b)("a",{parentName:"li",href:"https://github.com/project-error/new-phone-who-dis"},"here"),",\ninto FXServer's ",Object(i.b)("inlineCode",{parentName:"li"},"resources")," directory.")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For the moment, do not attempt to clone directly into a subdirectory, such as ",Object(i.b)("inlineCode",{parentName:"p"},"[phone]")," as this\nmay raise unexpected behavior with path handling."))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add the following lines to the ",Object(i.b)("inlineCode",{parentName:"li"},"server.cfg"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"setr SCREENSHOT_BASIC_TOKEN Client_ID\n# This must be placed after es_extended\nensure new-phone-who-dis\nensure screenshot-basic\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Change the config settings that can be found in ",Object(i.b)("inlineCode",{parentName:"li"},"new-phone-who-dis/config.json"),", to\nthe settings of your choosing.\n")),Object(i.b)("h3",{id:"install-dependencies-and-building-code"},"Install Dependencies and Building Code"),Object(i.b)("p",null,"As this is a ",Object(i.b)("inlineCode",{parentName:"p"},"Typescript")," resource, we need to both install ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," packages and build the source\ncode."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a terminal of your choice (i.e, Powershell"),Object(i.b)("li",{parentName:"ol"},"Navigate to the NPWD resource directory using ",Object(i.b)("inlineCode",{parentName:"li"},"cd"),", for example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd E:\\FXServer\\resources\\new-phone-who-dis\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"phone/")," and run the following commands")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd phone\n# This will install the node modules\nyarn\n# This will build the source code\nyarn build\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Now we will do the same for the ",Object(i.b)("inlineCode",{parentName:"li"},"resources/")," folder.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Will navigate to the resources/ directory\ncd ../resources\n# We need to run the same commands as we did for the phone/ directory\nyarn\nyarn build\n")),Object(i.b)("h3",{id:"database-setup"},"Database Setup"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"New Phone Who Dis")," integrates our own ",Object(i.b)("inlineCode",{parentName:"p"},"MySQL")," client directly (",Object(i.b)("inlineCode",{parentName:"p"},"mysql2"),"). Meaning, we do\nnot require a middleware resource like ",Object(i.b)("inlineCode",{parentName:"p"},"mysql-async"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Make sure you have the following added to your ",Object(i.b)("inlineCode",{parentName:"strong"},"server.cfg")," file, with the values\nreplaced with your respective credentials")," "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},'set mysql_connection_string "server=127.0.0.1;database=npwd_wow;userid=dev;password=devlocal"\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you already have ",Object(i.b)("inlineCode",{parentName:"p"},"ghmattimysql")," or ",Object(i.b)("inlineCode",{parentName:"p"},"mysql-async")," correctly installed, we are able to parse\nthose connection details without any changes, as our connection string format is directly compatible."))),Object(i.b)("h3",{id:"finishing-up"},"Finishing Up"),Object(i.b)("p",null,"After you have completed all of these listed steps, your ",Object(i.b)("inlineCode",{parentName:"p"},"server.cfg")," should look something\nlike this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"ensure es_extended # Must be started first.\n\n# Mumble-Voip\nensure mumble-voip\nsetr voice_use3dAudio true\nsetr voice_useSendingRangeOnly off\n\n#NPWD\nsetr SCREENSHOT_BASIC_TOKEN YOUR_IMGUR_TOKEN # Don't forget to set the token here.\nensure new-phone-who-dis \nensure screenshot-basic\n\n#All other resources you might have\n")),Object(i.b)("p",null,"You should now be all set to start your server up and play with the resource!"))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);