(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3icI":function(M,N,h){M.exports=h.p+"static/111.f41f27e8.jpg"},"nsf+":function(M,N,h){"use strict";h.r(N);var G=h("k1fw"),q=h("Qv07"),_=h("su3W"),H=h("q1tI"),y=h.n(H),tt=h("17x9"),f=h.n(tt),et=h("bmMU"),nt=h.n(et),rt=h("QLaP"),W=h.n(rt),at=h("Gytx"),ot=h.n(at);function g(){return(g=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l}).apply(this,arguments)}function U(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}function $(l,e){if(l==null)return{};var r,t,n={},a=Object.keys(l);for(t=0;t<a.length;t++)e.indexOf(r=a[t])>=0||(n[r]=l[r]);return n}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},J=Object.keys(u).map(function(l){return u[l]}),w={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},it=Object.keys(w).reduce(function(l,e){return l[w[e]]=e,l},{}),S=function(e,r){for(var t=e.length-1;t>=0;t-=1){var n=e[t];if(Object.prototype.hasOwnProperty.call(n,r))return n[r]}return null},st=function(e){var r=S(e,u.TITLE),t=S(e,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),t&&r)return t.replace(/%s/g,function(){return r});var n=S(e,"defaultTitle");return r||n||void 0},ct=function(e){return S(e,"onChangeClientState")||function(){}},k=function(e,r){return r.filter(function(t){return t[e]!==void 0}).map(function(t){return t[e]}).reduce(function(t,n){return g({},t,n)},{})},ut=function(e,r){return r.filter(function(t){return t[u.BASE]!==void 0}).map(function(t){return t[u.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var a=Object.keys(n),o=0;o<a.length;o+=1){var i=a[o].toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},I=function(e,r,t){var n={};return t.filter(function(a){return!!Array.isArray(a[e])||(a[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof a[e]+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,o){var i={};o.filter(function(p){for(var m,b=Object.keys(p),C=0;C<b.length;C+=1){var v=b[C],E=v.toLowerCase();r.indexOf(E)===-1||m==="rel"&&p[m].toLowerCase()==="canonical"||E==="rel"&&p[E].toLowerCase()==="stylesheet"||(m=E),r.indexOf(v)===-1||v!=="innerHTML"&&v!=="cssText"&&v!=="itemprop"||(m=v)}if(!m||!p[m])return!1;var P=p[m].toLowerCase();return n[m]||(n[m]={}),i[m]||(i[m]={}),!n[m][P]&&(i[m][P]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var s=Object.keys(i),c=0;c<s.length;c+=1){var d=s[c],T=g({},n[d],i[d]);n[d]=T}return a},[]).reverse()},Q=function(e){return Array.isArray(e)?e.join(""):e},lt=[u.NOSCRIPT,u.SCRIPT,u.STYLE],Y=function(e,r){return r===void 0&&(r=!0),r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){return Object.keys(e).reduce(function(r,t){var n=e[t]!==void 0?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},z=function(e,r){return r===void 0&&(r={}),Object.keys(e).reduce(function(t,n){return t[w[n]||n]=e[n],t},r)},A=function(e,r,t){switch(e){case u.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:a=r.title})["data-rh"]=!0,s=z(o,i),[y.a.createElement(u.TITLE,s,a)];var a,o,i,s},toString:function(){return function(a,o,i,s){var c=X(i),d=Q(o);return c?"<"+a+' data-rh="true" '+c+">"+Y(d,s)+"</"+a+">":"<"+a+' data-rh="true">'+Y(d,s)+"</"+a+">"}(e,r.title,r.titleAttributes,t)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return z(r)},toString:function(){return X(r)}};default:return{toComponent:function(){return function(a,o){return o.map(function(i,s){var c,d=((c={key:s})["data-rh"]=!0,c);return Object.keys(i).forEach(function(T){var p=w[T]||T;p==="innerHTML"||p==="cssText"?d.dangerouslySetInnerHTML={__html:i.innerHTML||i.cssText}:d[p]=i[T]}),y.a.createElement(a,d)})}(e,r)},toString:function(){return function(a,o,i){return o.reduce(function(s,c){var d=Object.keys(c).filter(function(m){return!(m==="innerHTML"||m==="cssText")}).reduce(function(m,b){var C=c[b]===void 0?b:b+'="'+Y(c[b],i)+'"';return m?m+" "+C:C},""),T=c.innerHTML||c.cssText||"",p=lt.indexOf(a)===-1;return s+"<"+a+' data-rh="true" '+d+(p?"/>":">"+T+"</"+a+">")},"")}(e,r,t)}}}},B=function(e){var r=e.bodyAttributes,t=e.encode,n=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,d=e.title,T=d===void 0?"":d,p=e.titleAttributes;return{base:A(u.BASE,e.baseTag,t),bodyAttributes:A("bodyAttributes",r,t),htmlAttributes:A("htmlAttributes",n,t),link:A(u.LINK,a,t),meta:A(u.META,o,t),noscript:A(u.NOSCRIPT,i,t),script:A(u.SCRIPT,s,t),style:A(u.STYLE,c,t),title:A(u.TITLE,{title:T,titleAttributes:p},t)}},V=y.a.createContext({}),dt=f.a.shape({setHelmet:f.a.func,helmetInstances:f.a.shape({get:f.a.func,add:f.a.func,remove:f.a.func})}),ft=typeof document!="undefined",L=function(l){function e(r){var t;return(t=l.call(this,r)||this).instances=[],t.value={setHelmet:function(a){t.props.context.helmet=a},helmetInstances:{get:function(){return t.instances},add:function(a){t.instances.push(a)},remove:function(a){var o=t.instances.indexOf(a);t.instances.splice(o,1)}}},e.canUseDOM||(r.context.helmet=B({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t}return U(e,l),e.prototype.render=function(){return y.a.createElement(V.Provider,{value:this.value},this.props.children)},e}(H.Component);L.canUseDOM=ft,L.propTypes={context:f.a.shape({helmet:f.a.shape()}),children:f.a.node.isRequired},L.defaultProps={context:{}},L.displayName="HelmetProvider";var x=function(e,r){var t,n=document.head||document.querySelector(u.HEAD),a=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(a),i=[];return r&&r.length&&r.forEach(function(s){var c=document.createElement(e);for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(d==="innerHTML"?c.innerHTML=s.innerHTML:d==="cssText"?c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText)):c.setAttribute(d,s[d]===void 0?"":s[d]));c.setAttribute("data-rh","true"),o.some(function(T,p){return t=p,c.isEqualNode(T)})?o.splice(t,1):i.push(c)}),o.forEach(function(s){return s.parentNode.removeChild(s)}),i.forEach(function(s){return n.appendChild(s)}),{oldTags:o,newTags:i}},K=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute("data-rh"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(r),s=0;s<i.length;s+=1){var c=i[s],d=r[c]||"";t.getAttribute(c)!==d&&t.setAttribute(c,d),a.indexOf(c)===-1&&a.push(c);var T=o.indexOf(c);T!==-1&&o.splice(T,1)}for(var p=o.length-1;p>=0;p-=1)t.removeAttribute(o[p]);a.length===o.length?t.removeAttribute("data-rh"):t.getAttribute("data-rh")!==i.join(",")&&t.setAttribute("data-rh",i.join(","))}},Z=function(e,r){var t=e.baseTag,n=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,T=e.title,p=e.titleAttributes;K(u.BODY,e.bodyAttributes),K(u.HTML,n),function(v,E){v!==void 0&&document.title!==v&&(document.title=Q(v)),K(u.TITLE,E)}(T,p);var m={baseTag:x(u.BASE,t),linkTags:x(u.LINK,a),metaTags:x(u.META,o),noscriptTags:x(u.NOSCRIPT,i),scriptTags:x(u.SCRIPT,c),styleTags:x(u.STYLE,d)},b={},C={};Object.keys(m).forEach(function(v){var E=m[v],P=E.newTags,gt=E.oldTags;P.length&&(b[v]=P),gt.length&&(C[v]=m[v].oldTags)}),r&&r(),s(e,b,C)},j=null,F=function(l){function e(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=l.call.apply(l,[this].concat(a))||this).rendered=!1,t}U(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!ot()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,n,a=this.props.context,o=a.setHelmet,i=null,s=(t=a.helmetInstances.get().map(function(c){var d=g({},c.props);return delete d.context,d}),{baseTag:ut(["href"],t),bodyAttributes:k("bodyAttributes",t),defer:S(t,"defer"),encode:S(t,"encodeSpecialCharacters"),htmlAttributes:k("htmlAttributes",t),linkTags:I(u.LINK,["rel","href"],t),metaTags:I(u.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:I(u.NOSCRIPT,["innerHTML"],t),onChangeClientState:ct(t),scriptTags:I(u.SCRIPT,["src","innerHTML"],t),styleTags:I(u.STYLE,["cssText"],t),title:st(t),titleAttributes:k("titleAttributes",t)});L.canUseDOM?(n=s,j&&cancelAnimationFrame(j),n.defer?j=requestAnimationFrame(function(){Z(n,function(){j=null})}):(Z(n),j=null)):B&&(i=B(s)),o(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(H.Component);F.propTypes={context:dt.isRequired},F.displayName="HelmetDispatcher";var R=function(l){function e(){return l.apply(this,arguments)||this}U(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!nt()(this.props,t)},r.mapNestedChildrenToProps=function(t,n){if(!n)return null;switch(t.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:n};case u.STYLE:return{cssText:n};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var n,a=t.child,o=t.arrayTypeChildren;return g({},o,((n={})[a.type]=[].concat(o[a.type]||[],[g({},t.newChildProps,this.mapNestedChildrenToProps(a,t.nestedChildren))]),n))},r.mapObjectTypeChildren=function(t){var n,a,o=t.child,i=t.newProps,s=t.newChildProps,c=t.nestedChildren;switch(o.type){case u.TITLE:return g({},i,((n={})[o.type]=c,n.titleAttributes=g({},s),n));case u.BODY:return g({},i,{bodyAttributes:g({},s)});case u.HTML:return g({},i,{htmlAttributes:g({},s)});default:return g({},i,((a={})[o.type]=g({},s),a))}},r.mapArrayTypeChildrenToProps=function(t,n){var a=g({},n);return Object.keys(t).forEach(function(o){var i;a=g({},a,((i={})[o]=t[o],i))}),a},r.warnOnInvalidChildren=function(t,n){return W()(J.some(function(a){return t.type===a}),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+J.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),W()(!n||typeof n=="string"||Array.isArray(n)&&!n.some(function(a){return typeof a!="string"}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,n){var a=this,o={};return y.a.Children.forEach(t,function(i){if(i&&i.props){var s=i.props,c=s.children,d=$(s,["children"]),T=Object.keys(d).reduce(function(m,b){return m[it[b]||b]=d[b],m},{}),p=i.type;switch(typeof p=="symbol"?p=p.toString():a.warnOnInvalidChildren(i,c),p){case u.FRAGMENT:n=a.mapChildrenToProps(c,n);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:o=a.flattenArrayTypeChildren({child:i,arrayTypeChildren:o,newChildProps:T,nestedChildren:c});break;default:n=a.mapObjectTypeChildren({child:i,newProps:n,newChildProps:T,nestedChildren:c})}}}),this.mapArrayTypeChildrenToProps(o,n)},r.render=function(){var t=this.props,n=t.children,a=g({},$(t,["children"]));return n&&(a=this.mapChildrenToProps(n,a)),y.a.createElement(V.Consumer,null,function(o){return y.a.createElement(F,g({},a,{context:o}))})},e}(H.Component);R.propTypes={base:f.a.object,bodyAttributes:f.a.object,children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),defaultTitle:f.a.string,defer:f.a.bool,encodeSpecialCharacters:f.a.bool,htmlAttributes:f.a.object,link:f.a.arrayOf(f.a.object),meta:f.a.arrayOf(f.a.object),noscript:f.a.arrayOf(f.a.object),onChangeClientState:f.a.func,script:f.a.arrayOf(f.a.object),style:f.a.arrayOf(f.a.object),title:f.a.string,titleAttributes:f.a.object,titleTemplate:f.a.string},R.defaultProps={defer:!0,encodeSpecialCharacters:!0},R.displayName="Helmet";var D=h("9kvl"),pt=h("55Ip"),mt=h("3icI"),ht=h.n(mt),yt=h("roml"),O=h.n(yt),Tt=function(e){var r=e.route,t=r===void 0?{routes:[]}:r,n=t.routes,a=n===void 0?[]:n,o=e.children,i=e.location,s=i===void 0?{pathname:""}:i,c=Object(D.f)(),d=c.formatMessage,T=Object(q.a)(a),p=T.breadcrumb,m=Object(_.a)(Object(G.a)({pathname:s.pathname,formatMessage:d,breadcrumb:p},e));return y.a.createElement(L,null,y.a.createElement(R,null,y.a.createElement("title",null,m),y.a.createElement("meta",{name:"description",content:m})),y.a.createElement("div",{className:O.a.container},y.a.createElement("div",{className:O.a.lang},y.a.createElement(D.b,null)),y.a.createElement("div",{className:O.a.content},y.a.createElement("div",{className:O.a.top},y.a.createElement("div",{className:O.a.header},y.a.createElement(pt.a,{to:"/"},y.a.createElement("img",{alt:"logo",className:O.a.logo,src:ht.a}),y.a.createElement("span",{className:O.a.title},"\u4E00\u9762\u7B14\u8BD5"))),y.a.createElement("div",{className:O.a.desc},y.a.createElement(D.a,{id:"pages.layouts.userLayout.title",defaultMessage:"Ant Design. The most influential Web design specification in Xihu District."}))),o)))},vt=N.default=Object(D.c)(function(l){var e=l.settings;return Object(G.a)({},e)})(Tt)},roml:function(M,N,h){M.exports={container:"container___3rwDa",lang:"lang___2ES0G",content:"content___3Paa8",top:"top___1W42Y",header:"header___1cl15",logo:"logo___29nS6",title:"title___3DxND",desc:"desc___2YLHe"}}}]);
