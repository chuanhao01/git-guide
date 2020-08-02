(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1J7U":function(e,t,n){},B7F5:function(e,t,n){"use strict";var r=n("q1tI");n("EgAo");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n("Wbzz"),l=(n("Vmqq"),/^\/?(\d{2,})-([-&_+\w\d]*)\/?$/),o=function(e){return""+e[0].toUpperCase()+e.slice(1)},u=function(e,t){if(void 0===t&&(t=!1),!l.test(e))throw new Error("Markdown is not a chapter!");var n=e.match(l),r=n[1],a=n[2];if(t){if(!l.test(a))throw new Error("Sub-chapter "+a+" naming convention is wrong. Must be e.g. 07-01-Git Log");var i=a.match(l);r=r+"."+i[1],a=i[2]}return"Chapter "+r+" - "+a.split("-").map(o).join(" ")},c=n("Tgqd");function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){function e(e,t){void 0===t&&(t=null),this.parent=t,this.slug=e,this.subChapters=[]}var t,n,r,i=e.prototype;return i.matchSlug=function(e){var t="/"+e+"/";if(t===this.slug)return this;var n=this.subChapters.filter((function(e){return e.matchSlug(t)}));return n.length>=1?n[0]:null},i.addSubChapter=function(t){this.subChapters.push(new e(t,this))},t=e,(n=[{key:"title",get:function(){return u(this.slug,null!==this.parent)}},{key:"hasSubChapters",get:function(){return this.subChapters.length>0}},{key:"linkSlug",get:function(){if(this.parent)return(""+this.parent.linkSlug+this.slug).replace("//","/");var e=this.slug;return e.startsWith("/"),e.endsWith("/"),e}}])&&a(t.prototype,n),r&&a(t,r),e}(),m=function(){for(var e,t=Object(i.c)("3034640578").allMarkdownRemark.edges.map((function(e){return e.node.fields.slug})),n=[],a=function(){var t=e.value,r=t.split("/"),a=r.slice(1,r.length-1);if(1===a.length)n.push(new h(t));else{var i=n.filter((function(e){return e.matchSlug(a[0])}))[0];if(!i)throw new Error("Parent chapter not found for sub-chapter of "+a[1]);i.addSubChapter("/"+a[1]+"/")}},l=s(t);!(e=l()).done;)a();var o=Object(r.useState)(!1),u=o[0],f=o[1],m=function(){return f(!u)};return r.createElement("aside",{className:"navigation"},r.createElement("div",{className:"title-bar"},r.createElement("h1",null,r.createElement(i.a,{to:"/"},"Git Guide")),u?r.createElement(c.b,{style:{fontSize:"2em"},className:"expand-arrow",onClick:m}):r.createElement(c.a,{style:{fontSize:"2em"},className:"expand-arrow",onClick:m})),r.createElement("ul",{className:"chapters",id:u?"expand-chapters":""},n.map((function(e){return e.hasSubChapters?r.createElement("li",{key:e.title,className:"parent-chapter"},e.title,r.createElement("ul",null,e.subChapters.map((function(e){return r.createElement("li",{key:e.title},r.createElement(i.a,{to:e.linkSlug},e.title))})))):r.createElement("li",{key:e.title},r.createElement(i.a,{to:e.linkSlug},e.title))}))))},p=(n("1J7U"),function(e){var t=e.contents;return r.createElement("div",{className:"toc"},r.createElement("h1",null,"Contents"),r.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))});t.a=function(e){var t=e.children,n=e.tableOfContents;return r.createElement("div",{className:"container"},r.createElement(m,null),r.createElement("div",{className:"content"},r.createElement("main",null,t),r.createElement("footer",null,r.createElement("hr",null),"Copyright © 2020. Git Guide is built with Gatsby.js. The repository can be found ",r.createElement("a",{href:"https://github.com/woojiahao/git-guide"},"here."))),n&&r.createElement(p,{contents:n}))}},EgAo:function(e,t,n){},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){return function(t){return r.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,c=o(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:n,style:l({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Vmqq:function(e,t,n){},"i6+/":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("B7F5");t.default=function(){return r.createElement(a.a,{pageTitle:"Page not found!"},r.createElement("p",null,"The page you have requested is not found!"))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-f2c56d37797be6783198.js.map