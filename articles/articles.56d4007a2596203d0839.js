!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=103)}([function(t,n,r){"use strict";r.d(n,"k",(function(){return e})),r.d(n,"g",(function(){return o})),r.d(n,"a",(function(){return u})),r.d(n,"d",(function(){return i})),r.d(n,"c",(function(){return c})),r.d(n,"b",(function(){return f})),r.d(n,"e",(function(){return a})),r.d(n,"f",(function(){return s})),r.d(n,"h",(function(){return p})),r.d(n,"j",(function(){return l})),r.d(n,"i",(function(){return v})),r.d(n,"q",(function(){return d})),r.d(n,"p",(function(){return y})),r.d(n,"r",(function(){return m})),r.d(n,"m",(function(){return g})),r.d(n,"l",(function(){return h})),r.d(n,"n",(function(){return x})),r.d(n,"o",(function(){return S})),r.d(n,"s",(function(){return b}));r(39);var e={patternMismatch:"Неправильный формат",tooShort:"Должно быть от 2 до 30 символов",tooLong:"Должно быть от 2 до 30 символов",valueMissing:"Это обязательное поле",noError:""},o=document.querySelector(".header__icon-menu"),u=document.forms.signup.elements.email,i=document.forms.signup.elements.password,c=document.forms.signup.elements.name,f=document.forms.signin.elements.email,a=document.forms.signin.elements.password,s=document.querySelector(".header__button"),p=document.querySelector(".popup__link_in"),l=document.querySelector(".popup__link_up"),v=document.querySelector(".popup__link_i"),d=document.querySelector(".popup__singup"),y=document.querySelector(".popup__singin"),m=document.querySelector(".popup__singup-success"),g=document.forms.signup,h=document.forms.signin,b=document.querySelector(".result__articles"),x={baseUrl:"https://api.news-explorer82.ru",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}},S={baseUrl:"https://newsapi.org",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(52))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(1),o=r(11),u=r(23),i=r(48),c=e.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=i&&c[t]||(i?c:u)("Symbol."+t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(5),o=r(28),u=r(8),i=r(17),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(41),o=r(27);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(5),o=r(7),u=r(16);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(30),o=r(53);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(1),o=r(18).f,u=r(10),i=r(19),c=r(20),f=r(42),a=r(46);t.exports=function(t,n){var r,s,p,l,v,d=t.target,y=t.global,m=t.stat;if(r=y?e:m?e[d]||c(d,{}):(e[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:d+(m?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(43),o=r(1),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(24),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(5),o=r(40),u=r(16),i=r(9),c=r(17),f=r(6),a=r(28),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(1),o=r(11),u=r(10),i=r(6),c=r(20),f=r(31),a=r(32),s=a.get,p=a.enforce,l=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,r,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||u(r,"name",n),p(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=r:u(t,n,r)):a?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},function(t,n,r){var e=r(1),o=r(10);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports={}},function(t,n,r){"use strict";r(51),r(0)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(24),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(5),o=r(2),u=r(29);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(4),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(11);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e,o,u,i=r(54),c=r(1),f=r(4),a=r(10),s=r(6),p=r(33),l=r(21),v=c.WeakMap;if(i){var d=new v,y=d.get,m=d.has,g=d.set;e=function(t,n){return g.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},u=function(t){return m.call(d,t)}}else{var h=p("state");l[h]=!0,e=function(t,n){return a(t,h,n),n},o=function(t){return s(t,h)?t[h]:{}},u=function(t){return s(t,h)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(11),o=r(23),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n,r){var e=r(44),o=r(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){"use strict";var e=r(17),o=r(7),u=r(16);t.exports=function(t,n,r){var i=e(n);i in t?o.f(t,i,u(0,r)):t[i]=r}},function(t,n,r){var e=r(2),o=r(3),u=r(38),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,u=r(1),i=r(49),c=u.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(5),o=r(7).f,u=Function.prototype,i=u.toString,c=/^\s*function ([^ (]*)/;e&&!("name"in u)&&o(u,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(13),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(6),o=r(55),u=r(18),i=r(7);t.exports=function(t,n){for(var r=o(n),c=i.f,f=u.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){t.exports=r(1)},function(t,n,r){var e=r(6),o=r(9),u=r(56).indexOf,i=r(21);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(i,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},,function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(14);t.exports=e("navigator","userAgent")||""},,function(t,n,r){"use strict";var e=r(12),o=r(4),u=r(26),i=r(25),c=r(15),f=r(9),a=r(36),s=r(37),p=r(3)("species"),l=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var r,e,s,d=f(this),y=c(d.length),m=i(t,y),g=i(void 0===n?y:n,y);if(u(d)&&("function"!=typeof(r=d.constructor)||r!==Array&&!u(r.prototype)?o(r)&&null===(r=r[p])&&(r=void 0):r=void 0,r===Array||void 0===r))return l.call(d,m,g);for(e=new(void 0===r?Array:r)(v(g-m,0)),s=0;m<g;m++,s++)m in d&&a(e,s,d[m]);return e.length=s,e}})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(1),o=r(20),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(1),o=r(31),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o.call(u))},function(t,n,r){var e=r(14),o=r(34),u=r(45),i=r(8);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(9),o=r(15),u=r(25),i=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(104);var e=new(r(22).Header);console.log(e)},function(t,n,r){}]);