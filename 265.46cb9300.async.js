(self.webpackChunkdumi2_template=self.webpackChunkdumi2_template||[]).push([[265],{51372:function(C,F,m){"use strict";var k=m(17997),O=m(50959),x=m(91544);function j(a,c){return w(a)||T(a,c)||_(a,c)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(a,c){if(!!a){if(typeof a=="string")return b(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(a,c)}}function b(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,r=new Array(c);e<c;e++)r[e]=a[e];return r}function T(a,c){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var r=[],n=!0,i=!1,l,o;try{for(e=e.call(a);!(n=(l=e.next()).done)&&(r.push(l.value),!(c&&r.length===c));n=!0);}catch(v){i=!0,o=v}finally{try{!n&&e.return!=null&&e.return()}finally{if(i)throw o}}return r}}function w(a){if(Array.isArray(a))return a}var W=function(c){var e,r=c.id,n=useAtomAssets(),i=n.components,l=i==null?void 0:i[r],o=useIntl();return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,o.formatMessage({id:"api.component.name"})),React.createElement("th",null,o.formatMessage({id:"api.component.description"})),React.createElement("th",null,o.formatMessage({id:"api.component.type"})),React.createElement("th",null,o.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,l&&(e=l.propsConfig)!==null&&e!==void 0&&e.properties?Object.entries(l.propsConfig.properties).map(function(v){var g,A=j(v,2),t=A[0],u=A[1];return React.createElement("tr",{key:t},React.createElement("td",null,t),React.createElement("td",null,u.description||"--"),React.createElement("td",null,React.createElement("code",null,u.type)),React.createElement("td",null,React.createElement("code",null,(g=l.propsConfig.required)!==null&&g!==void 0&&g.includes(t)?o.formatMessage({id:"api.component.required"}):u.default||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},o.formatMessage({id:"api.component.".concat(i?"not.found":"loading")},{id:r}))))))},B=null},55741:function(C,F,m){"use strict";var k=m(50959);function O(){return O=Object.assign?Object.assign.bind():function(E){for(var _=1;_<arguments.length;_++){var b=arguments[_];for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&(E[T]=b[T])}return E},O.apply(this,arguments)}var x=function(_){return React.createElement("span",O({className:"dumi-default-badge"},_))},j=null},91544:function(C,F,m){"use strict";var k=m(30826),O=m(50959),x=null;function j(e,r){return w(e)||T(e,r)||_(e,r)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(e,r){if(!!e){if(typeof e=="string")return b(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,r)}}function b(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=e[n];return i}function T(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],l=!0,o=!1,v,g;try{for(n=n.call(e);!(l=(v=n.next()).done)&&(i.push(v.value),!(r&&i.length===r));l=!0);}catch(A){o=!0,g=A}finally{try{!l&&n.return!=null&&n.return()}finally{if(o)throw g}}return i}}function w(e){if(Array.isArray(e))return e}function W(e,r){if(e==null)return{};var n=B(e,r),i,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)i=o[l],!(r.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,i)||(n[i]=e[i]))}return n}function B(e,r){if(e==null)return{};var n={},i=Object.keys(e),l,o;for(o=0;o<i.length;o++)l=i[o],!(r.indexOf(l)>=0)&&(n[l]=e[l]);return n}var a=function(r){var n=r.children,i=W(r,x),l=useRef(null),o=useState(!1),v=j(o,2),g=v[0],A=v[1],t=useState(!1),u=j(t,2),s=u[0],p=u[1];return useEffect(function(){var d=l.current;if(d){var h=throttle(function(){A(d.scrollLeft>0),p(d.scrollLeft<d.scrollWidth-d.offsetWidth)},100);return h(),d.addEventListener("scroll",h),window.addEventListener("resize",h),function(){d.removeEventListener("scroll",h),window.removeEventListener("resize",h)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:l,"data-left-folded":g||void 0,"data-right-folded":s||void 0},React.createElement("table",i,n)))},c=null},30826:function(C,F,m){var k="Expected a function",O=NaN,x="[object Symbol]",j=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,b=/^0o[0-7]+$/i,T=parseInt,w=typeof m.g=="object"&&m.g&&m.g.Object===Object&&m.g,W=typeof self=="object"&&self&&self.Object===Object&&self,B=w||W||Function("return this")(),a=Object.prototype,c=a.toString,e=Math.max,r=Math.min,n=function(){return B.Date.now()};function i(t,u,s){var p,d,h,S,y,I,L=0,K=!1,M=!1,N=!0;if(typeof t!="function")throw new TypeError(k);u=A(u)||0,o(s)&&(K=!!s.leading,M="maxWait"in s,h=M?e(A(s.maxWait)||0,u):h,N="trailing"in s?!!s.trailing:N);function $(f){var R=p,P=d;return p=d=void 0,L=f,S=t.apply(P,R),S}function G(f){return L=f,y=setTimeout(D,u),K?$(f):S}function J(f){var R=f-I,P=f-L,X=u-R;return M?r(X,h-P):X}function H(f){var R=f-I,P=f-L;return I===void 0||R>=u||R<0||M&&P>=h}function D(){var f=n();if(H(f))return z(f);y=setTimeout(D,J(f))}function z(f){return y=void 0,N&&p?$(f):(p=d=void 0,S)}function Q(){y!==void 0&&clearTimeout(y),L=0,p=I=d=y=void 0}function V(){return y===void 0?S:z(n())}function U(){var f=n(),R=H(f);if(p=arguments,d=this,I=f,R){if(y===void 0)return G(I);if(M)return y=setTimeout(D,u),$(I)}return y===void 0&&(y=setTimeout(D,u)),S}return U.cancel=Q,U.flush=V,U}function l(t,u,s){var p=!0,d=!0;if(typeof t!="function")throw new TypeError(k);return o(s)&&(p="leading"in s?!!s.leading:p,d="trailing"in s?!!s.trailing:d),i(t,u,{leading:p,maxWait:u,trailing:d})}function o(t){var u=typeof t;return!!t&&(u=="object"||u=="function")}function v(t){return!!t&&typeof t=="object"}function g(t){return typeof t=="symbol"||v(t)&&c.call(t)==x}function A(t){if(typeof t=="number")return t;if(g(t))return O;if(o(t)){var u=typeof t.valueOf=="function"?t.valueOf():t;t=o(u)?u+"":u}if(typeof t!="string")return t===0?t:+t;t=t.replace(j,"");var s=_.test(t);return s||b.test(t)?T(t.slice(2),s?2:8):E.test(t)?O:+t}C.exports=l}}]);
