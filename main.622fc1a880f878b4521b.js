!function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],s=0,p=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=u;a.push([129,1]),n()}({126:function(e,t,n){e.exports={ContactButton:"izkV9zKX3pCPD6GnICunw"}},127:function(e,t,n){e.exports={Header:"_2m3w6gunTlAezFhlmWFyAj"}},128:function(e,t,n){e.exports={Page:"_1yZH33G1X7fFbOhDtUNC8B"}},129:function(e,t,n){n(130),e.exports=n(321)},320:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(125);n(320);function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var c=function(e){var t=e.children,n=e.preset,o=e.tag,c=e.className,l=a("".concat("t","-").concat(n),c);return r.createElement(o,{className:l},t)};c.defaultProps={tag:"span"},c.displayName="Typography";var l,u=n(62),i=n.n(u);!function(e){e.H1="h1",e.Heading="heading",e.Label="label",e.Common="common"}(l||(l={}));var f=function(){var e=(new Date).getFullYear();return r.createElement("footer",{className:i.a.Footer},r.createElement(c,{className:i.a.Footer__item,preset:l.Common},"Санкт-Петербург"),r.createElement(c,{className:i.a.Footer__item,preset:l.Common},e))};f.displayName="Footer";var s=n(126),p=n.n(s),m=function(){return r.createElement("button",{className:p.a.ContactButton},"связаться")};m.displayName="ContactButton";var h=n(127),v=n.n(h),y=function(e){var t=e.className;return r.createElement("svg",{className:a(t),width:"198",height:"51",viewBox:"0 0 198 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M146.326 41.261a28.783 28.783 0 002.664-12.132C148.99 13.041 135.825 0 119.584 0c-16.24 0-29.406 13.041-29.406 29.13 0 4.329.954 8.438 2.664 12.131h53.484z",fill:"#FDD20E"}),r.createElement("path",{d:"M13.32 20.813c2.171 0 3.88.67 5.123 2.013 1.245 1.341 1.867 3.195 1.867 5.562v1.464h-4.794v-1.135c0-1.293-.342-2.293-1.025-3-.658-.708-1.573-1.062-2.744-1.062-1.171 0-2.086.366-2.745 1.098-.659.708-.988 1.696-.988 2.964v12.589H3.44V21.179h4.318v3.842h.037c.317-1.39.939-2.44 1.866-3.147.927-.707 2.147-1.061 3.66-1.061zm19.93-2.671c-.781 0-1.415-.22-1.903-.66-.464-.438-.696-1.024-.696-1.756 0-.707.232-1.28.696-1.72.488-.463 1.122-.695 1.903-.695h.732c.756 0 1.378.232 1.866.696.488.439.732 1.012.732 1.72 0 .731-.244 1.317-.732 1.756-.488.44-1.122.659-1.903.659h-.695zm9.038 23.164H24.65v-4.172h7.026v-11.82h-6.111V21.18h10.466v15.955h6.257v4.172zm11.733.366c-2.293 0-4.148-.525-5.563-1.574-1.39-1.073-2.122-2.5-2.195-4.281h4.574c.049.634.354 1.146.915 1.536.585.39 1.342.586 2.269.586h1.61c1.098 0 1.927-.22 2.488-.659.586-.439.879-1.037.879-1.793 0-.683-.256-1.22-.769-1.61-.512-.415-1.28-.695-2.305-.842l-2.489-.365c-2.317-.318-4.013-.928-5.086-1.83-1.05-.927-1.574-2.281-1.574-4.062 0-1.903.635-3.367 1.903-4.391 1.293-1.05 3.16-1.574 5.599-1.574h1.39c2.22 0 4.002.512 5.343 1.537 1.342 1 2.074 2.342 2.196 4.025h-4.574c-.073-.56-.378-1-.915-1.317-.512-.342-1.196-.512-2.05-.512h-1.39c-1.049 0-1.818.183-2.305.549-.488.365-.732.927-.732 1.683 0 .659.207 1.17.622 1.537.414.341 1.098.573 2.05.695l2.597.366c2.415.341 4.172.988 5.27 1.94 1.122.95 1.683 2.33 1.683 4.135 0 2-.67 3.537-2.013 4.61-1.317 1.074-3.256 1.61-5.818 1.61h-1.61zm31.127-9.332H72.853v1.427c0 2.855 1.341 4.282 4.025 4.282 1.025 0 1.842-.171 2.452-.513.61-.366 1-.89 1.17-1.573h4.538c-.341 1.732-1.256 3.123-2.744 4.172-1.488 1.024-3.306 1.537-5.453 1.537-1.707 0-3.196-.33-4.464-.988-1.244-.66-2.208-1.574-2.891-2.745-.683-1.195-1.025-2.586-1.025-4.172v-5.05c0-1.585.342-2.964 1.025-4.135.683-1.195 1.659-2.122 2.927-2.781 1.269-.659 2.745-.988 4.428-.988 1.684 0 3.147.33 4.392.988a7.06 7.06 0 012.89 2.781c.683 1.171 1.025 2.55 1.025 4.135v3.623zm-12.295-2.854l7.904-.073v-.732c0-1.415-.33-2.489-.988-3.22-.659-.732-1.635-1.098-2.928-1.098-1.317 0-2.317.378-3 1.134-.66.732-.988 1.805-.988 3.22v.769zm27.577-8.673c2.001 0 3.586.659 4.757 1.976 1.196 1.317 1.793 3.086 1.793 5.306v13.21h-4.574V28.572c0-1.196-.317-2.123-.951-2.781-.635-.683-1.525-1.025-2.672-1.025-1.146 0-2.037.342-2.671 1.025-.634.683-.951 1.659-.951 2.927v12.589h-4.575V21.179h4.465v3.842h.073c.195-1.317.756-2.342 1.683-3.074.927-.756 2.135-1.134 3.623-1.134zm41.359 20.859c-2.293 0-4.147-.525-5.562-1.574-1.39-1.073-2.122-2.5-2.196-4.281h4.575c.049.634.353 1.146.915 1.536.585.39 1.341.586 2.268.586h1.611c1.097 0 1.927-.22 2.488-.659.585-.439.878-1.037.878-1.793 0-.683-.256-1.22-.768-1.61-.513-.415-1.281-.695-2.306-.842l-2.488-.365c-2.318-.318-4.013-.928-5.087-1.83-1.049-.927-1.573-2.281-1.573-4.062 0-1.903.634-3.367 1.903-4.391 1.293-1.05 3.159-1.574 5.599-1.574h1.39c2.22 0 4.001.512 5.343 1.537 1.342 1 2.074 2.342 2.196 4.025H146.4c-.073-.56-.378-1-.915-1.317-.512-.342-1.195-.512-2.049-.512h-1.39c-1.049 0-1.818.183-2.306.549-.488.365-.732.927-.732 1.683 0 .659.208 1.17.622 1.537.415.341 1.098.573 2.05.695l2.598.366c2.415.341 4.172.988 5.269 1.94 1.123.95 1.684 2.33 1.684 4.135 0 2-.671 3.537-2.013 4.61-1.317 1.074-3.257 1.61-5.818 1.61h-1.611zm22.784 0c-2.561 0-4.574-.708-6.038-2.123-1.464-1.44-2.195-3.39-2.195-5.855V21.18h4.574v12.479c0 1.292.317 2.293.951 3 .635.683 1.537 1.025 2.708 1.025 1.171 0 2.074-.342 2.708-1.025.634-.707.952-1.708.952-3v-12.48h4.574v12.516c0 2.464-.744 4.416-2.232 5.855-1.464 1.415-3.465 2.123-6.002 2.123zm23.626-20.859c2 0 3.586.659 4.757 1.976 1.195 1.317 1.793 3.086 1.793 5.306v13.21h-4.574V28.572c0-1.196-.317-2.123-.952-2.781-.634-.683-1.524-1.025-2.671-1.025-1.147 0-2.037.342-2.671 1.025-.635.683-.952 1.659-.952 2.927v12.589h-4.574V21.179h4.464v3.842h.074c.195-1.317.756-2.342 1.683-3.074.927-.756 2.135-1.134 3.623-1.134z",fill:"#fff"}))};y.displayName="Logo";var d=function(){return r.createElement("header",{className:v.a.Header},r.createElement(y,null),r.createElement(m,null))};d.displayName="Header";var b=n(128),_=n.n(b),g=function(e){var t=e.children,n=e.hasHeader,o=e.hasFooter;return r.createElement("div",{className:_.a.Page},n&&r.createElement(d,null),t,o&&r.createElement(f,null))};g.defaultProps={hasHeader:!0,hasFooter:!0},g.displayName="Page";var w=n(49),E=n.n(w);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,o,a=C(u);function u(){return O(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return r.createElement("div",{className:E.a.Cover},r.createElement("div",{className:E.a.Cover__content},r.createElement(c,{className:E.a.Cover__title,tag:"h1",preset:l.H1},"Брендинг","\n","сервисы","\n","сайты"),r.createElement(c,{className:E.a.Cover__aim,tag:"p",preset:l.Label},"для бизнесов","\n","и стартапов")))}}])&&P(t.prototype,n),o&&P(t,o),u}(r.Component),H=function(){return r.createElement(g,null,r.createElement(F,null))};H.displayName="LandingPage";var S=function(){return r.createElement(H,null)};S.displayName="App";var V=document.getElementById("root");o.render(r.createElement(S,null),V)},49:function(e,t,n){e.exports={Cover:"_2-eU-BTdIX9Yp17Yda_pty",Cover__content:"_3nztFhEdQLfYak4L2xf4-W",Cover__title:"mqEMcVw_0SjYMSa2sKQY_",Cover__aim:"_2ezIqBGMjV99lyaovPxV_I"}},62:function(e,t,n){e.exports={Footer:"FbIXH1__cWh-ihPMCZMtw",Footer__item:"_8JgQXLFA86aZLxcaBVvj3"}}});