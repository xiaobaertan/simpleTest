(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{GOef:function(Z,q,K){"use strict";K.d(q,"c",function(){return cr}),K.d(q,"a",function(){return Re}),K.d(q,"b",function(){return pr});var J=K("n2rz"),k=K.n(J),z=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function g(e,t){return!!(e===t||z(e)&&z(t))}function x(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!g(e[r],t[r]))return!1;return!0}function R(e,t){t===void 0&&(t=x);var r,n=[],u,i=!1;function f(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return i&&r===this&&t(c,n)||(u=e.apply(this,c),i=!0,r=this,n=c),u}return f}var E=R;function U(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var u="",i=r+1;i<e.length;){var f=e.charCodeAt(i);if(f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||f===95){u+=e[i++];continue}break}if(!u)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:u}),r=i;continue}if(n==="("){var c=1,s="",i=r+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;){if(e[i]==="\\"){s+=e[i++]+e[i++];continue}if(e[i]===")"){if(c--,c===0){i++;break}}else if(e[i]==="("&&(c++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+i);s+=e[i++]}if(c)throw new TypeError("Unbalanced pattern at "+r);if(!s)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:s}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function V(e,t){t===void 0&&(t={});for(var r=U(e),n=t.prefixes,u=n===void 0?"./":n,i="[^"+a(t.delimiter||"/#?")+"]+?",f=[],c=0,s=0,p="",h=function(re){if(s<r.length&&r[s].type===re)return r[s++].value},d=function(re){var ie=h(re);if(ie!==void 0)return ie;var Ie=r[s],hr=Ie.type,yr=Ie.index;throw new TypeError("Unexpected "+hr+" at "+yr+", expected "+re)},y=function(){for(var re="",ie;ie=h("CHAR")||h("ESCAPED_CHAR");)re+=ie;return re};s<r.length;){var D=h("CHAR"),F=h("NAME"),B=h("PATTERN");if(F||B){var w=D||"";u.indexOf(w)===-1&&(p+=w,w=""),p&&(f.push(p),p=""),f.push({name:F||c++,prefix:w,suffix:"",pattern:B||i,modifier:h("MODIFIER")||""});continue}var L=D||h("ESCAPED_CHAR");if(L){p+=L;continue}p&&(f.push(p),p="");var N=h("OPEN");if(N){var w=y(),X=h("NAME")||"",Y=h("PATTERN")||"",_e=y();d("CLOSE"),f.push({name:X||(Y?c++:""),pattern:X&&!Y?i:Y,prefix:w,suffix:_e,modifier:h("MODIFIER")||""});continue}d("END")}return f}function ee(e,t){return G(V(e,t),t)}function G(e,t){t===void 0&&(t={});var r=l(t),n=t.encode,u=n===void 0?function(s){return s}:n,i=t.validate,f=i===void 0?!0:i,c=e.map(function(s){if(typeof s=="object")return new RegExp("^(?:"+s.pattern+")$",r)});return function(s){for(var p="",h=0;h<e.length;h++){var d=e[h];if(typeof d=="string"){p+=d;continue}var y=s?s[d.name]:void 0,D=d.modifier==="?"||d.modifier==="*",F=d.modifier==="*"||d.modifier==="+";if(Array.isArray(y)){if(!F)throw new TypeError('Expected "'+d.name+'" to not repeat, but got an array');if(y.length===0){if(D)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var B=0;B<y.length;B++){var w=u(y[B],d);if(f&&!c[h].test(w))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but got "'+w+'"');p+=d.prefix+w+d.suffix}continue}if(typeof y=="string"||typeof y=="number"){var w=u(String(y),d);if(f&&!c[h].test(w))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+w+'"');p+=d.prefix+w+d.suffix;continue}if(!D){var L=F?"an array":"a string";throw new TypeError('Expected "'+d.name+'" to be '+L)}}return p}}function m(e,t){var r=[],n=I(e,r,t);return o(n,r,t)}function o(e,t,r){r===void 0&&(r={});var n=r.decode,u=n===void 0?function(i){return i}:n;return function(i){var f=e.exec(i);if(!f)return!1;for(var c=f[0],s=f.index,p=Object.create(null),h=function(D){if(f[D]===void 0)return"continue";var F=t[D-1];F.modifier==="*"||F.modifier==="+"?p[F.name]=f[D].split(F.prefix+F.suffix).map(function(B){return u(B,F)}):p[F.name]=u(f[D],F)},d=1;d<f.length;d++)h(d);return{path:c,index:s,params:p}}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function l(e){return e&&e.sensitive?"":"i"}function v(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function M(e,t,r){var n=e.map(function(u){return I(u,t,r).source});return new RegExp("(?:"+n.join("|")+")",l(r))}function T(e,t,r){return O(V(e,r),t,r)}function O(e,t,r){r===void 0&&(r={});for(var n=r.strict,u=n===void 0?!1:n,i=r.start,f=i===void 0?!0:i,c=r.end,s=c===void 0?!0:c,p=r.encode,h=p===void 0?function(he){return he}:p,d="["+a(r.endsWith||"")+"]|$",y="["+a(r.delimiter||"/#?")+"]",D=f?"^":"",F=0,B=e;F<B.length;F++){var w=B[F];if(typeof w=="string")D+=a(h(w));else{var L=a(h(w.prefix)),N=a(h(w.suffix));if(w.pattern)if(t&&t.push(w),L||N)if(w.modifier==="+"||w.modifier==="*"){var X=w.modifier==="*"?"?":"";D+="(?:"+L+"((?:"+w.pattern+")(?:"+N+L+"(?:"+w.pattern+"))*)"+N+")"+X}else D+="(?:"+L+"("+w.pattern+")"+N+")"+w.modifier;else D+="("+w.pattern+")"+w.modifier;else D+="(?:"+L+N+")"+w.modifier}}if(s)u||(D+=y+"?"),D+=r.endsWith?"(?="+d+")":"$";else{var Y=e[e.length-1],_e=typeof Y=="string"?y.indexOf(Y[Y.length-1])>-1:Y===void 0;u||(D+="(?:"+y+"(?="+d+"))?"),_e||(D+="(?="+y+"|"+d+")")}return new RegExp(D,l(r))}function I(e,t,r){return e instanceof RegExp?v(e,t):Array.isArray(e)?M(e,t,r):T(e,t,r)}function P(e,t){return t>>>e|t<<32-e}function b(e,t,r){return e&t^~e&r}function A(e,t,r){return e&t^e&r^t&r}function $(e){return P(2,e)^P(13,e)^P(22,e)}function C(e){return P(6,e)^P(11,e)^P(25,e)}function S(e){return P(7,e)^P(18,e)^e>>>3}function Q(e){return P(17,e)^P(19,e)^e>>>10}function oe(e,t){return e[t&15]+=Q(e[t+14&15])+e[t+9&15]+S(e[t+1&15])}var ye=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],_,W,j,te="0123456789abcdef";function ce(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ge(){_=new Array(8),W=new Array(2),j=new Array(64),W[0]=W[1]=0,_[0]=1779033703,_[1]=3144134277,_[2]=1013904242,_[3]=2773480762,_[4]=1359893119,_[5]=2600822924,_[6]=528734635,_[7]=1541459225}function ne(){var e,t,r,n,u,i,f,c,s,p,h=new Array(16);e=_[0],t=_[1],r=_[2],n=_[3],u=_[4],i=_[5],f=_[6],c=_[7];for(var d=0;d<16;d++)h[d]=j[(d<<2)+3]|j[(d<<2)+2]<<8|j[(d<<2)+1]<<16|j[d<<2]<<24;for(var y=0;y<64;y++)s=c+C(u)+b(u,i,f)+ye[y],y<16?s+=h[y]:s+=oe(h,y),p=$(e)+A(e,t,r),c=f,f=i,i=u,u=ce(n,s),n=r,r=t,t=e,e=ce(s,p);_[0]+=e,_[1]+=t,_[2]+=r,_[3]+=n,_[4]+=u,_[5]+=i,_[6]+=f,_[7]+=c}function le(e,t){var r,n,u=0;n=W[0]>>3&63;var i=t&63;for((W[0]+=t<<3)<t<<3&&W[1]++,W[1]+=t>>29,r=0;r+63<t;r+=64){for(var f=n;f<64;f++)j[f]=e.charCodeAt(u++);ne(),n=0}for(var c=0;c<i;c++)j[c]=e.charCodeAt(u++)}function se(){var e=W[0]>>3&63;if(j[e++]=128,e<=56)for(var t=e;t<56;t++)j[t]=0;else{for(var r=e;r<64;r++)j[r]=0;ne();for(var n=0;n<56;n++)j[n]=0}j[56]=W[1]>>>24&255,j[57]=W[1]>>>16&255,j[58]=W[1]>>>8&255,j[59]=W[1]&255,j[60]=W[0]>>>24&255,j[61]=W[0]>>>16&255,j[62]=W[0]>>>8&255,j[63]=W[0]&255,ne()}function gr(){for(var e=0,t=new Array(32),r=0;r<8;r++)t[e++]=_[r]>>>24&255,t[e++]=_[r]>>>16&255,t[e++]=_[r]>>>8&255,t[e++]=_[r]&255;return t}function De(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+=te.charAt(_[t]>>>r&15);return e}function je(e){return ge(),le(e,e.length),se(),De()}var Ne=je;function ve(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(r){return typeof r}:ve=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ve(e)}function Ce(e,t){return We(e)||$e(e,t)||be(e,t)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,u=!1,i=void 0;try{for(var f=e[Symbol.iterator](),c;!(n=(c=f.next()).done)&&(r.push(c.value),!(t&&r.length===t));n=!0);}catch(s){u=!0,i=s}finally{try{!n&&f.return!=null&&f.return()}finally{if(u)throw i}}return r}}function We(e){if(Array.isArray(e))return e}function He(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=be(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,u=function(){};return{s:u,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(p){throw p},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,f=!1,c;return{s:function(){r=e[Symbol.iterator]()},n:function(){var p=r.next();return i=p.done,p},e:function(p){f=!0,c=p},f:function(){try{!i&&r.return!=null&&r.return()}finally{if(f)throw c}}}}function Ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ue(e,t,r){return t&&Ae(e.prototype,t),r&&Ae(e,r),e}function Le(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}function Be(e){var t=Ee();return function(){var n=ue(e),u;if(t){var i=ue(this).constructor;u=Reflect.construct(n,arguments,i)}else u=n.apply(this,arguments);return ze(this,u)}}function ze(e,t){return t&&(ve(t)==="object"||typeof t=="function")?t:Ge(e)}function Ge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){var t=typeof Map=="function"?new Map:void 0;return me=function(n){if(n===null||!Je(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,u)}function u(){return de(n,arguments,ue(this).constructor)}return u.prototype=Object.create(n.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),ae(u,n)},me(e)}function de(e,t,r){return Ee()?de=Reflect.construct:de=function(u,i,f){var c=[null];c.push.apply(c,i);var s=Function.bind.apply(u,c),p=new s;return f&&ae(p,f.prototype),p},de.apply(null,arguments)}function Ee(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Je(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ae(e,t){return ae=Object.setPrototypeOf||function(n,u){return n.__proto__=u,n},ae(e,t)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ue(e)}function Me(e){return Xe(e)||Qe(e)||be(e)||Ve()}function Ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}}function Qe(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Xe(e){if(Array.isArray(e))return xe(e)}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ye(e,t){if(e==null)return{};var r=Ze(e,t),n,u;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)n=i[u],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Ze(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,i;for(i=0;i<n.length;i++)u=n[i],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Te(Object(r),!0).forEach(function(n){qe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fe(e){return e.split("?")[0].split("#")[0]}var we=function(t){if(!t.startsWith("http"))return!1;try{var r=new URL(t);return!!r}catch(n){return!1}},ke=function(t){var r=t.path;if(!r||r==="/")try{return"/".concat(Ne(JSON.stringify(t)))}catch(n){}return r&&fe(r)},er=function(t,r){var n=t.name,u=t.locale;return"locale"in t&&u===!1||!n?!1:t.locale||"".concat(r,".").concat(n)},Se=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return(t||r).startsWith("/")||we(t)?t:"/".concat(r,"/").concat(t).replace(/\/\//g,"/").replace(/\/\//g,"/")},rr=function(t,r){var n=t.menu,u=n===void 0?{}:n,i=t.indexRoute,f=t.path,c=f===void 0?"":f,s=t.children,p=u.name,h=p===void 0?t.name:p,d=u.icon,y=d===void 0?t.icon:d,D=u.hideChildren,F=D===void 0?t.hideChildren:D,B=u.flatMenu,w=B===void 0?t.flatMenu:B,L=i&&Object.keys(i).join(",")!=="redirect"?[H({path:c,menu:u},i)].concat(s||[]):s,N=H({},t);if(h&&(N.name=h),y&&(N.icon=y),L&&L.length){if(F)return delete N.children,N;var X=Oe(H(H({},r),{},{data:L}),t);if(w)return X;N.children=X}return N};function Oe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,u=e.parentName,i=e.locale;return!r||!Array.isArray(r)?[]:r.filter(function(f){return f?f.routes||f.children||f.path||f.layout?!0:(f.redirect,!1):!1}).filter(function(f){var c,s;return f.unaccessible&&delete f.name,(f==null||(c=f.menu)===null||c===void 0?void 0:c.name)||(f==null?void 0:f.flatMenu)||(f==null||(s=f.menu)===null||s===void 0?void 0:s.flatMenu)?!0:f.menu!==!1}).map(function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},c=Se(f.path,t?t.path:"/"),s=f.name,p=er(f,u||"menu"),h=p!==!1&&i!==!1&&n&&p?n({id:p,defaultMessage:s}):s,d=t.pro_layout_parentKeys,y=d===void 0?[]:d,D=t.children,F=t.icon,B=t.flatMenu,w=t.indexRoute,L=Ye(t,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"]),N=H(H(H({},L),{},{menu:void 0},f),{},{path:c,locale:p,key:f.key||ke(H(H({},f),{},{path:c})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(Me(f.parentKeys||[]),Me(y),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter(function(Y){return Y&&Y!=="/"})});if(h?N.name=h:delete N.name,N.menu===void 0&&delete N.menu,f.routes||f.children){var X=Oe(H(H({},e),{},{data:f.routes||f.children,parentName:p||""}),N);N.children=X&&X.length>0?X:void 0,N.children||delete N.children}return rr(N,e)}).flat(1)}var tr=E(Oe,k.a),nr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filter(function(r){return r&&(r.name||r.children)&&!r.hideInMenu&&!r.redirect}).map(function(r){if(r.children&&Array.isArray(r.children)&&!r.hideChildrenInMenu&&r.children.some(function(u){return u&&!!u.name})){var n=e(r.children);if(n.length)return H(H({},r),{},{children:n})}return H(H({},r),{},{children:void 0})}).filter(function(r){return r})},ar=function(e){Le(r,e);var t=Be(r);function r(){return Ke(this,r),t.apply(this,arguments)}return Ue(r,[{key:"get",value:function(u){var i;try{var f=He(this.entries()),c;try{for(f.s();!(c=f.n()).done;){var s=Ce(c.value,2),p=s[0],h=s[1],d=fe(p);if(!we(p)&&I(d,[]).test(u)){i=h;break}}}catch(y){f.e(y)}finally{f.f()}}catch(y){i=void 0}return i}}]),r}(me(Map)),ur=function(t){var r=new ar,n=function u(i,f){i.forEach(function(c){c&&c.children&&u(c.children,c);var s=Se(c.path,f?f.path:"/");r.set(fe(s),c)})};return n(t),r},fr=E(ur,k.a),ir=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(function(r){if(r.children&&Array.isArray(r.children)&&r.children.length>0){var n=e(r.children);if(n.length)return H(H({},r),{},{children:n})}var u=H({},r);return delete u.children,u}).filter(function(r){return r})},or=function(t,r,n,u){var i=tr({data:t,formatMessage:n,locale:r}),f=u?ir(i):nr(i),c=fr(i);return{breadcrumb:c,menuData:f}},cr=or;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(r),!0).forEach(function(n){lr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var sr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r={};return t.forEach(function(n){!n||!n.key||(r[fe(n.path||n.key||"/")]=pe({},n),r[n.key||n.path||"/"]=pe({},n),n.children&&(r=pe(pe({},r),e(n.children))))}),r},Re=sr,vr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return t.filter(function(u){if(u==="/"&&r==="/")return!0;if(u!=="/"&&u!=="/*"&&u&&!we(u)){var i=fe(u);try{if(n&&I("".concat(i)).test(r)||I("".concat(i),[]).test(r)||I("".concat(i,"/(.*)")).test(r))return!0}catch(f){}}return!1}).sort(function(u,i){return u===r?10:i===r?-10:u.substr(1).split("/").length-i.substr(1).split("/").length})},dr=function(t,r,n,u){var i=Re(r),f=Object.keys(i),c=vr(f,t||"/",u);return!c||c.length<1?[]:(n||(c=[c[c.length-1]]),c.map(function(s){var p=i[s]||{pro_layout_parentKeys:"",key:""},h=new Map,d=(p.pro_layout_parentKeys||[]).map(function(y){return h.has(y)?null:(h.set(y,!0),i[y])}).filter(function(y){return y});return p.key&&d.push(p),d}).flat(1))},pr=dr},Qv07:function(Z,q,K){"use strict";var J=K("GOef");function k(o,a){return x(o)||g(o,a)||U(o,a)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(o,a){var l=o&&(typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"]);if(l!=null){var v=[],M=!0,T=!1,O,I;try{for(l=l.call(o);!(M=(O=l.next()).done)&&(v.push(O.value),!(a&&v.length===a));M=!0);}catch(P){T=!0,I=P}finally{try{!M&&l.return!=null&&l.return()}finally{if(T)throw I}}return v}}function x(o){if(Array.isArray(o))return o}function R(o){return ee(o)||V(o)||U(o)||E()}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(o,a){if(!!o){if(typeof o=="string")return G(o,a);var l=Object.prototype.toString.call(o).slice(8,-1);if(l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set")return Array.from(o);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return G(o,a)}}function V(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function ee(o){if(Array.isArray(o))return G(o)}function G(o,a){(a==null||a>o.length)&&(a=o.length);for(var l=0,v=new Array(a);l<a;l++)v[l]=o[l];return v}function m(o){return R(o).reduce(function(a,l){var v=k(l,2),M=v[0],T=v[1];return a[M]=T,a},{})}q.a=function(o,a,l,v){var M=Object(J.c)(o,(a==null?void 0:a.locale)||!1,l,!0),T=M.menuData,O=M.breadcrumb;if(!v)return{breadcrumb:m(O),breadcrumbMap:O,menuData:T};var I=Object(J.c)(v(T),(a==null?void 0:a.locale)||!1,l,!0);return{breadcrumb:m(I.breadcrumb),breadcrumbMap:I.breadcrumb,menuData:I.menuData}}},jfsG:function(Z,q){Z.exports=o,Z.exports.parse=z,Z.exports.compile=g,Z.exports.tokensToFunction=x,Z.exports.tokensToRegExp=m;var K="/",J="./",k=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function z(a,l){for(var v=[],M=0,T=0,O="",I=l&&l.delimiter||K,P=l&&l.delimiters||J,b=!1,A;(A=k.exec(a))!==null;){var $=A[0],C=A[1],S=A.index;if(O+=a.slice(T,S),T=S+$.length,C){O+=C[1],b=!0;continue}var Q="",oe=a[T],ye=A[2],_=A[3],W=A[4],j=A[5];if(!b&&O.length){var te=O.length-1;P.indexOf(O[te])>-1&&(Q=O[te],O=O.slice(0,te))}O&&(v.push(O),O="",b=!1);var ce=Q!==""&&oe!==void 0&&oe!==Q,ge=j==="+"||j==="*",ne=j==="?"||j==="*",le=Q||I,se=_||W;v.push({name:ye||M++,prefix:Q,delimiter:le,optional:ne,repeat:ge,partial:ce,pattern:se?E(se):"[^"+R(le)+"]+?"})}return(O||T<a.length)&&v.push(O+a.substr(T)),v}function g(a,l){return x(z(a,l))}function x(a){for(var l=new Array(a.length),v=0;v<a.length;v++)typeof a[v]=="object"&&(l[v]=new RegExp("^(?:"+a[v].pattern+")$"));return function(M,T){for(var O="",I=T&&T.encode||encodeURIComponent,P=0;P<a.length;P++){var b=a[P];if(typeof b=="string"){O+=b;continue}var A=M?M[b.name]:void 0,$;if(Array.isArray(A)){if(!b.repeat)throw new TypeError('Expected "'+b.name+'" to not repeat, but got array');if(A.length===0){if(b.optional)continue;throw new TypeError('Expected "'+b.name+'" to not be empty')}for(var C=0;C<A.length;C++){if($=I(A[C],b),!l[P].test($))throw new TypeError('Expected all "'+b.name+'" to match "'+b.pattern+'"');O+=(C===0?b.prefix:b.delimiter)+$}continue}if(typeof A=="string"||typeof A=="number"||typeof A=="boolean"){if($=I(String(A),b),!l[P].test($))throw new TypeError('Expected "'+b.name+'" to match "'+b.pattern+'", but got "'+$+'"');O+=b.prefix+$;continue}if(b.optional){b.partial&&(O+=b.prefix);continue}throw new TypeError('Expected "'+b.name+'" to be '+(b.repeat?"an array":"a string"))}return O}}function R(a){return a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(a){return a.replace(/([=!:$/()])/g,"\\$1")}function U(a){return a&&a.sensitive?"":"i"}function V(a,l){if(!l)return a;var v=a.source.match(/\((?!\?)/g);if(v)for(var M=0;M<v.length;M++)l.push({name:M,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return a}function ee(a,l,v){for(var M=[],T=0;T<a.length;T++)M.push(o(a[T],l,v).source);return new RegExp("(?:"+M.join("|")+")",U(v))}function G(a,l,v){return m(z(a,v),l,v)}function m(a,l,v){v=v||{};for(var M=v.strict,T=v.start!==!1,O=v.end!==!1,I=R(v.delimiter||K),P=v.delimiters||J,b=[].concat(v.endsWith||[]).map(R).concat("$").join("|"),A=T?"^":"",$=a.length===0,C=0;C<a.length;C++){var S=a[C];if(typeof S=="string")A+=R(S),$=C===a.length-1&&P.indexOf(S[S.length-1])>-1;else{var Q=S.repeat?"(?:"+S.pattern+")(?:"+R(S.delimiter)+"(?:"+S.pattern+"))*":S.pattern;l&&l.push(S),S.optional?S.partial?A+=R(S.prefix)+"("+Q+")?":A+="(?:"+R(S.prefix)+"("+Q+"))?":A+=R(S.prefix)+"("+Q+")"}}return O?(M||(A+="(?:"+I+")?"),A+=b==="$"?"$":"(?="+b+")"):(M||(A+="(?:"+I+"(?="+b+"))?"),$||(A+="(?="+I+"|"+b+")")),new RegExp(A,U(v))}function o(a,l,v){return a instanceof RegExp?V(a,l):Array.isArray(a)?ee(a,l,v):G(a,l,v)}},n2rz:function(Z,q,K){"use strict";var J=K("bfL6"),k=typeof BigInt64Array!="undefined";Z.exports=function z(g,x){if(g===x)return!0;if(g&&x&&typeof g=="object"&&typeof x=="object"){if(g.constructor!==x.constructor)return!1;var R,E,U;if(Array.isArray(g)){if(R=g.length,R!=x.length)return!1;for(E=R;E--!=0;)if(!z(g[E],x[E]))return!1;return!0}if(g instanceof Map&&x instanceof Map){if(g.size!==x.size)return!1;var V=J(g.entries()),ee;try{for(V.s();!(ee=V.n()).done;)if(E=ee.value,!x.has(E[0]))return!1}catch(v){V.e(v)}finally{V.f()}var G=J(g.entries()),m;try{for(G.s();!(m=G.n()).done;)if(E=m.value,!z(E[1],x.get(E[0])))return!1}catch(v){G.e(v)}finally{G.f()}return!0}if(g instanceof Set&&x instanceof Set){if(g.size!==x.size)return!1;var o=J(g.entries()),a;try{for(o.s();!(a=o.n()).done;)if(E=a.value,!x.has(E[0]))return!1}catch(v){o.e(v)}finally{o.f()}return!0}if(ArrayBuffer.isView(g)&&ArrayBuffer.isView(x)){if(R=g.length,R!=x.length)return!1;for(E=R;E--!=0;)if(g[E]!==x[E])return!1;return!0}if(g.constructor===RegExp)return g.source===x.source&&g.flags===x.flags;if(g.valueOf!==Object.prototype.valueOf)return g.valueOf()===x.valueOf();if(g.toString!==Object.prototype.toString)return g.toString()===x.toString();if(U=Object.keys(g),R=U.length,R!==Object.keys(x).length)return!1;for(E=R;E--!=0;)if(!Object.prototype.hasOwnProperty.call(x,U[E]))return!1;for(E=R;E--!=0;){var l=U[E];if(!z(g[l],x[l]))return!1}return!0}return g!==g&&x!==x}},su3W:function(Z,q,K){"use strict";K.d(q,"b",function(){return ee});var J=K("jfsG"),k=K.n(J);function z(m){return E(m)||R(m)||x(m)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(m,o){if(!!m){if(typeof m=="string")return U(m,o);var a=Object.prototype.toString.call(m).slice(8,-1);if(a==="Object"&&m.constructor&&(a=m.constructor.name),a==="Map"||a==="Set")return Array.from(m);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U(m,o)}}function R(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function E(m){if(Array.isArray(m))return U(m)}function U(m,o){(o==null||o>m.length)&&(o=m.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=m[a];return l}var V=function(o,a,l){if(l){var v=z(l.keys()).find(function(T){return k()(T).test(o)});if(v)return l.get(v)}if(a){var M=Object.keys(a).find(function(T){return k()(T).test(o)});if(M)return a[M]}return{path:""}},ee=function(o,a){var l=o.pathname,v=l===void 0?"/":l,M=o.breadcrumb,T=o.breadcrumbMap,O=o.formatMessage,I=o.title,P=I===void 0?"Ant Design Pro":I,b=o.menu,A=b===void 0?{locale:!1}:b,$=a?"":P||"",C=V(v,M,T);if(!C)return{title:$,id:"",pageName:$};var S=C.name;return A.locale!==!1&&C.locale&&O&&(S=O({id:C.locale||"",defaultMessage:C.name})),S?a||!P?{title:S,id:C.locale||"",pageName:S}:{title:"".concat(S," - ").concat(P),id:C.locale||"",pageName:S}:{title:$,id:C.locale||"",pageName:$}},G=function(o,a){return ee(o,a).title};q.a=G}}]);
