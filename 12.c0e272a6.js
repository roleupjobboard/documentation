(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,n){"use strict";n.r(t);n(31),n(21),n(22),n(62),n(193);var a=n(0),r=n.n(a),i=n(153),o=n(150),l=n(67),c=n(176),s=n(2),u=n(9),p=(n(197),n(151)),d=n(164),m=n(171),h=n(172),f=n(173),y=n(170),v=n(152),g=n(155),b=n(136),k=n.n(b);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(i=function(e){return e.endsWith("/")?e:e+"/"})(a)===i(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,i};function O(e){var t,n,i,o=e.item,l=e.onItemClick,c=e.collapsible,d=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=o.items,f=o.label,y=j(o,d),v=(n=y,i=Object(a.useRef)(n),Object(a.useEffect)((function(){i.current=n}),[n]),i.current),g=Object(a.useState)((function(){return!!c&&(!y&&o.collapsed)})),b=g[0],O=g[1];Object(a.useEffect)((function(){y&&!v&&b&&O(!1)}),[y,v,b]);var E=Object(a.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===h.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&y},t[k.a.menuLinkText]=!c,t)),onClick:c?E:void 0,href:c?"#!":void 0},m),f),r.a.createElement("ul",{className:"menu__list"},h.map((function(e){return r.a.createElement(C,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:c,activePath:d})}))))}function E(e){var t=e.item,n=e.onItemClick,a=e.activePath,i=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),o=t.href,l=t.label,c=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":c}),to:o},Object(g.a)(o)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},i),l))}function C(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(E,e)}}var x=function(e){var t,n,i=Object(a.useState)(!1),l=i[0],c=i[1],u=Object(o.a)(),g=u.siteConfig,b=(g=void 0===g?{}:g).themeConfig.navbar,j=(b=void 0===b?{}:b).title,O=b.hideOnScroll,E=void 0!==O&&O,x=u.isClient,N=Object(f.a)(),w=N.logoLink,_=N.logoLinkProps,S=N.logoImageUrl,P=N.logoAlt,I=Object(d.a)().isAnnouncementBarClosed,T=Object(y.a)().scrollY,A=e.docsSidebars,L=e.path,B=e.sidebar,M=e.sidebarCollapsible;Object(m.a)(l);var D=Object(h.a)();if(Object(a.useEffect)((function(){D===h.b.desktop&&c(!1)}),[D]),!B)return null;var W=A[B];if(!W)throw new Error('Cannot find the sidebar "'+B+'" in the sidebar config!');return r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t))},E&&r.a.createElement(v.a,Object(s.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:w},_),null!=S&&r.a.createElement("img",{key:x,src:S,alt:P}),null!=j&&r.a.createElement("strong",null,j)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":l},n[k.a.menuWithAnnouncementBar]=!I&&0===T,n))},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!l)}},l?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},W.map((function(e){return r.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:M,activePath:L})})))))},N=(n(174),n(175),n(84),n(80),n(198),n(165),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),w={Prism:n(55).a,theme:N};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var P=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=S({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=S({},n,{backgroundColor:null}),r};function L(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,i=S({},L(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(i.style=o.plain),void 0!==r&&(i.style=void 0!==i.style?S({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),_(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return i[n[0]];var o=a?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[o].concat(l))}})),_(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,i=e.token,o=S({},L(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?S({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,i=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],i=0,o=0,l=[],c=[l];o>-1;){for(;(i=a[o]++)<r[o];){var s=void 0,u=t[o],p=n[o][i];if("string"==typeof p?(u=o>0?u:["plain"],s=p):(u=T(u,p.type),p.alias&&(u=T(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(P),m=d.length;l.push({types:u,content:d[0]});for(var h=1;h<m;h++)I(l),c.push(l=[]),l.push({types:u,content:d[h]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return I(l),c}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),M=n(199),D=n.n(M),W=n(200),F=n.n(W),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=n(160),z=function(){var e=Object(o.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object($.a)().isDarkTheme,a=t.theme||R,r=t.darkTheme||a;return n?r:a},J=n(137),H=n.n(J),U=/{([\d,-]+)}/,Y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},q=/title=".*"/,G=function(e){var t=e.children,n=e.className,i=e.metastring,l=Object(o.a)().siteConfig.themeConfig.prism,c=void 0===l?{}:l,u=Object(a.useState)(!1),d=u[0],m=u[1],h=Object(a.useState)(!1),f=h[0],y=h[1];Object(a.useEffect)((function(){y(!0)}),[]);var v=Object(a.useRef)(null),g=[],b="",k=z();if(i&&U.test(i)){var j=i.match(U)[1];g=F.a.parse(j).filter((function(e){return e>0}))}i&&q.test(i)&&(b=i.match(q)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);var E=t.replace(/\n$/,"");if(0===g.length&&void 0!==O){for(var C,x="",N=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}}(O),_=t.replace(/\n$/,"").split("\n"),S=0;S<_.length;){var P=S+1,I=_[S].match(N);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":x+=P+",";break;case"highlight-start":C=P;break;case"highlight-end":x+=C+"-"+(P-1)+","}_.splice(S,1)}else S+=1}g=F.a.parse(x),E=_.join("\n")}var T=function(){D()(E),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.a.createElement(B,Object(s.a)({},w,{key:f,theme:k,code:E,language:O}),(function(e){var t,n,a=e.className,i=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement("div",{style:i,className:H.a.codeBlockTitle},b),r.a.createElement("div",{className:H.a.codeBlockContent},r.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(H.a.copyButton,(t={},t[H.a.copyButtonWithTitle]=b,t)),onClick:T},d?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:Object(p.a)(a,H.a.codeBlock,(n={},n[H.a.codeBlockWithTitle]=b,n))},r.a.createElement("div",{className:H.a.codeBlockLines,style:i},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},c({token:e,key:t})))})))}))))))}))},K=(n(138),n(139)),Q=n.n(K),V=function(e){return function(t){var n,a=t.id,i=Object(u.a)(t,["id"]),l=Object(o.a)().siteConfig,c=(l=void 0===l?{}:l).themeConfig,s=(c=void 0===c?{}:c).navbar,d=(s=void 0===s?{}:s).hideOnScroll,m=void 0!==d&&d;return a?r.a.createElement(e,i,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(p.a)("anchor",(n={},n[Q.a.enhancedAnchor]=!m,n)),id:a}),i.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,i)}},X=n(140),Z=n.n(X),ee={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(G,e):r.a.createElement("code",e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(v.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:Z.a.mdxCodeBlock},e))},h1:V("h1"),h2:V("h2"),h3:V("h3"),h4:V("h4"),h5:V("h5"),h6:V("h6")},te=n(177),ne=n(169),ae=n(141),re=n.n(ae);t.default=function(e){var t=e.route,n=e.docsMetadata,a=e.location,s=t.routes.find((function(e){return Object(ne.a)(a.pathname,e)}))||{},u=n.permalinkToSidebar,p=n.docsSidebars,d=n.version,m=u[s.path],h=Object(o.a)(),f=h.siteConfig,y=(f=void 0===f?{}:f).themeConfig,v=void 0===y?{}:y,g=h.isClient,b=v.sidebarCollapsible,k=void 0===b||b;return 0===Object.keys(s).length?r.a.createElement(te.default,e):r.a.createElement(c.a,{version:d,key:g},r.a.createElement("div",{className:re.a.docPage},m&&r.a.createElement("div",{className:re.a.docSidebarContainer,role:"complementary"},r.a.createElement(x,{docsSidebars:p,path:s.path,sidebar:m,sidebarCollapsible:k})),r.a.createElement("main",{className:re.a.docMainContainer},r.a.createElement(i.a,{components:ee},Object(l.a)(t.routes)))))}},174:function(e,t,n){"use strict";var a=n(12),r=n(83)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(79)("includes")},175:function(e,t,n){"use strict";var a=n(12),r=n(157);a(a.P+a.F*n(158)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},193:function(e,t,n){"use strict";var a=n(12),r=n(194)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(79)("find")},194:function(e,t,n){var a=n(28),r=n(57),i=n(29),o=n(25),l=n(195);e.exports=function(e,t){var n=1==e,c=2==e,s=3==e,u=4==e,p=6==e,d=5==e||p,m=t||l;return function(t,l,h){for(var f,y,v=i(t),g=r(v),b=a(l,h,3),k=o(g.length),j=0,O=n?m(t,k):c?m(t,0):void 0;k>j;j++)if((d||j in g)&&(y=b(f=g[j],j,v),e))if(n)O[j]=y;else if(y)switch(e){case 3:return!0;case 5:return f;case 6:return j;case 2:O.push(f)}else if(u)return!1;return p?-1:s||u?u:O}}},195:function(e,t,n){var a=n(196);e.exports=function(e,t){return new(a(e))(t)}},196:function(e,t,n){var a=n(13),r=n(168),i=n(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},197:function(e,t,n){"use strict";var a=n(12),r=n(25),i=n(157),o="".endsWith;a(a.P+a.F*n(158)("endsWith"),"String",{endsWith:function(e){var t=i(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,a=r(t.length),l=void 0===n?a:Math.min(r(n),a),c=String(e);return o?o.call(t,c,l):t.slice(l-c.length,l)===c}})},198:function(e,t,n){"use strict";var a=n(8),r=n(25),i=n(59),o=n(60);n(61)("match",1,(function(e,t,n,l){return[function(n){var a=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=a(e),s=String(this);if(!c.global)return o(c,s);var u=c.unicode;c.lastIndex=0;for(var p,d=[],m=0;null!==(p=o(c,s));){var h=String(p[0]);d[m]=h,""===h&&(c.lastIndex=i(s,r(c.lastIndex),u)),m++}return 0===m?null:d}]}))},199:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let i=!1;r.rangeCount>0&&(i=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(l){}return n.remove(),i&&(r.removeAllRanges(),r.addRange(i)),a&&a.focus(),o};e.exports=a,e.exports.default=a},200:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var i=[],o=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=o);for(var l=n;l!=r;l+=o)i.push(l);return i}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);