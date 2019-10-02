(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{976:function(t,e,n){"use strict";n.r(e);n(13),n(7),n(5),n(4),n(8),n(6);var o=n(9),r=n(1),i=n(80),a=n(972),c=n(31),u=(n(21),n(10),n(39),n(22),n(19),n(26),n(11),n(173)),l=n.n(u),s=n(270),d=n(111),p=n(98),m=s.a,b=function(t){return"theme"!==t&&"innerRef"!==t},f=function(t){return"string"==typeof t&&t.charCodeAt(0)>96?m:b};function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},j=function(t){var e=function(t){return function(e,n){var o=t?e:"transparent";return"\n    background: "+(t?"transparent":e)+";\n    box-shadow: inset 0 0 0 1px "+o+";\n    color: "+(t?e:n)+";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px "+o+";\n      color: "+n+";\n    }\n  "}}(t);return{primary:e("#1FB6FF","white"),secondary:e("#5352ED","white"),cancel:e("#FF4949","white"),dark:e("#273444","white"),gray:e("#8492A6","white")}},k=function t(e,n){var i,a,c;void 0!==n&&(i=n.label,c=n.target,a=e.__emotion_forwardProp&&n.shouldForwardProp?function(t){return e.__emotion_forwardProp(t)&&n.shouldForwardProp(t)}:n.shouldForwardProp);var u=e.__emotion_real===e,l=u&&e.__emotion_base||e;"function"!=typeof a&&u&&(a=e.__emotion_forwardProp);var s=a||f(l),m=!s("as");return function(){var b=arguments,y=u&&void 0!==e.__emotion_styles?e.__emotion_styles.slice(0):[];if(void 0!==i&&y.push("label:"+i+";"),null==b[0]||void 0===b[0].raw)y.push.apply(y,b);else{0,y.push(b[0][0]);for(var _=b.length,j=1;j<_;j++)y.push(b[j],b[0][j])}var k=Object(o.d)((function(t,e,n){return Object(r.createElement)(o.b.Consumer,null,(function(o){var i=m&&t.as||l,u="",b=[],O=t;if(null==t.theme){for(var _ in O={},t)O[_]=t[_];O.theme=o}"string"==typeof t.className&&(u+=Object(d.a)(e.registered,b,t.className));var j=Object(p.a)(y.concat(b),e.registered,O);Object(d.b)(e,j,"string"==typeof i);u+=e.key+"-"+j.name,void 0!==c&&(u+=" "+c);var k=m&&void 0===a?f(i):s,B={};for(var h in t)m&&"as"===h||k(h)&&(B[h]=t[h]);return B.className=u,B.ref=n||t.innerRef,Object(r.createElement)(i,B)}))}));return k.displayName=void 0!==i?i:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",k.defaultProps=e.defaultProps,k.__emotion_real=k,k.__emotion_base=l,k.__emotion_styles=y,k.__emotion_forwardProp=a,Object.defineProperty(k,"toString",{value:function(){return"."+c}}),k.withComponent=function(e,o){return t(e,void 0!==o?O({},n||{},{},o):n).apply(void 0,y)},k}}("button",{target:"e57fgrn0"})((function(t){var e=t.kind,n=void 0===e?"primary":e,o=t.outline;return j(void 0!==o&&o)[n]}),";",(function(t){var e=t.scale;return _[void 0===e?"normal":e]}),";cursor:pointer;margin:3px 5px;border:none;border-radius:3px;"),B=function(t){var e=t.children,n=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["children"]);return Object(o.c)(k,n,e)};function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}void 0!==B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{configurable:!0,value:{name:"Button",filename:"src/components/Button.jsx"}}),B.defaultProps={scales:"normal",kind:"primary",outline:!1},n.d(e,"_frontmatter",(function(){return g})),n.d(e,"default",(function(){return P}));var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Button.mdx"}});var v={_frontmatter:g},x=a.a;function P(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(i.b)(x,h({},v,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"button"},"Button"),Object(i.b)("p",null,"Button make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them."),Object(i.b)("h3",{id:"best-practices"},"Best practices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Group buttons logically into sets based on usage and importance."),Object(i.b)("li",{parentName:"ul"},"Ensure that button actions are clear and consistent."),Object(i.b)("li",{parentName:"ul"},"The main action of a group set can be a primary button."),Object(i.b)("li",{parentName:"ul"},"Select a single button variation and do not mix them.")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(c.d,{of:B,mdxType:"Props"}),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)(c.c,{__position:1,__code:"<Button>Click me</Button>",__scope:{props:n,DefaultLayout:a.a,Playground:c.c,Props:c.d,Button:B},mdxType:"Playground"},Object(i.b)(B,{mdxType:"Button"},"Click me")),Object(i.b)("h2",{id:"with-different-sizes"},"With different sizes"),Object(i.b)(c.c,{__position:2,__code:'<Button scale="small">Click me</Button>\n<Button scale="normal">Click me</Button>\n<Button scale="big">Click me</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:c.c,Props:c.d,Button:B},mdxType:"Playground"},Object(i.b)(B,{scale:"small",mdxType:"Button"},"Click me"),Object(i.b)(B,{scale:"normal",mdxType:"Button"},"Click me"),Object(i.b)(B,{scale:"big",mdxType:"Button"},"Click me")),Object(i.b)("h2",{id:"with-different-colors"},"With different colors"),Object(i.b)(c.c,{__position:3,__code:'<Button kind="primary">Click me</Button>\n<Button kind="secondary">Click me</Button>\n<Button kind="cancel">Click me</Button>\n<Button kind="dark">Click me</Button>\n<Button kind="gray">Click me</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:c.c,Props:c.d,Button:B},mdxType:"Playground"},Object(i.b)(B,{kind:"primary",mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"secondary",mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"cancel",mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"dark",mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"gray",mdxType:"Button"},"Click me")),Object(i.b)("h2",{id:"outlined"},"Outlined"),Object(i.b)(c.c,{__position:4,__code:'<Button kind="primary" outline>\n  Click me\n</Button>\n<Button kind="secondary" outline>\n  Click me\n</Button>\n<Button kind="cancel" outline>\n  Click me\n</Button>\n<Button kind="dark" outline>\n  Click me\n</Button>\n<Button kind="gray" outline>\n  Click me\n</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:c.c,Props:c.d,Button:B},mdxType:"Playground"},Object(i.b)(B,{kind:"primary",outline:!0,mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"secondary",outline:!0,mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"cancel",outline:!0,mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"dark",outline:!0,mdxType:"Button"},"Click me"),Object(i.b)(B,{kind:"gray",outline:!0,mdxType:"Button"},"Click me")))}P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Button.mdx"}}),P.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-button-mdx-6f963c00bc420363270d.js.map