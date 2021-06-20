(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9138:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=(0,r.useRef)(null),n=(0,r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return(0,r.useEffect)((function(){t.current.appendChild(n.current)}),[]),(0,r.useEffect)((function(){for(var t in e)e.hasOwnProperty(t)&&(n.current[t]=e[t])})),r.createElement("div",{ref:t})}},5493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(9138),c=["components"],l={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},s={unversionedId:"tutorials/basic/running_your_app/tab_completion",id:"version-1.1/tutorials/basic/running_your_app/tab_completion",isDocsHomePage:!1,title:"Tab completion",description:"Tab completion can complete config groups, config nodes and values.",source:"@site/versioned_docs/version-1.1/tutorials/basic/running_your_app/6_tab_completion.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/tab_completion",permalink:"/Kats/docs/tutorials/basic/running_your_app/tab_completion",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-1.1/tutorials/basic/running_your_app/6_tab_completion.md",version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623349300,formattedLastUpdatedAt:"6/10/2021",sidebar_label:"Tab completion",sidebarPosition:6,frontMatter:{id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},sidebar:"version-1.1/docs",previous:{title:"Debugging",permalink:"/Kats/docs/tutorials/basic/running_your_app/debugging"},next:{title:"Introduction to Structured Configs",permalink:"/Kats/docs/tutorials/structured_config/intro"}},p=[{value:"Install tab completion",id:"install-tab-completion",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tab completion can complete config groups, config nodes and values.\nTo complete paths, start them with ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"./"),"."),(0,i.kt)("p",null,"See this short video demonstration of tab completion:"),(0,i.kt)(a.Z,{id:"asciicast-272604",src:"https://asciinema.org/a/272604.js",async:!0,mdxType:"Script"}),(0,i.kt)("h3",{id:"install-tab-completion"},"Install tab completion"),(0,i.kt)("p",null,"Get the exact command to install the completion from ",(0,i.kt)("inlineCode",{parentName:"p"},"--hydra-help"),".\nCurrently, Bash, zsh and Fish are supported.",(0,i.kt)("br",{parentName:"p"}),"\n","We are relying on the community to implement tab completion plugins for additional shells."),(0,i.kt)("p",null,"Fish support requires version >= 3.1.2.\nPrevious versions will work but add an extra space after ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"."),(0,i.kt)("h4",{id:"zsh-instructions"},"Zsh instructions"),(0,i.kt)("p",null,"Zsh is compatible with the existing Bash shell completion by appending"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"autoload -Uz bashcompinit && bashcompinit\n")),(0,i.kt)("p",null,"to the ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc")," file after ",(0,i.kt)("inlineCode",{parentName:"p"},"compinit"),", restarting the shell and then using the commands provided for Bash."))}m.isMDXComponent=!0}}]);