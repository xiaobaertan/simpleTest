(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MZhU:function(m,o,e){m.exports={main:"main___3ipCw",icon:"icon___P3cg6",other:"other___3uIfA",register:"register___3Mz8E",prefixIcon:"prefixIcon___Tvd5H"}},"wn4/":function(m,o,e){"use strict";e.r(o);var F=e("Znn+"),d=e("ZTPi"),E=e("k1fw"),f=e("tJVT"),b=e("fOrg"),v=e("+KLJ"),p=e("cJ7L"),L=e("FY4R"),g=e("q1tI"),a=e.n(g),A=e("VMEa"),c=e("Qurx"),B=e("tneF"),n=e("9kvl"),j=e("anxO"),I=e("MZhU"),i=e.n(I),T=function(t){var s=t.content;return a.a.createElement(v.a,{style:{marginBottom:24},message:s,type:"error",showIcon:!0})},C=function(t){var s=t.userLogin,M=s===void 0?{}:s,P=t.submitting,U=M.status,y=M.type,h=Object(g.useState)("account"),O=Object(f.a)(h,2),l=O[0],K=O[1],R=Object(n.f)(),W=function(_){var u=t.dispatch;u({type:"login/login",payload:Object(E.a)(Object(E.a)({},_),{},{type:l})})};return a.a.createElement("div",{className:i.a.main},a.a.createElement(A.a,{initialValues:{autoLogin:!0},submitter:{render:function(_,u){return u.pop()},submitButtonProps:{loading:P,size:"large",style:{width:"100%"}}},onFinish:function(_){return W(_),Promise.resolve()}},a.a.createElement(d.a,{activeKey:l,onChange:K},a.a.createElement(d.a.TabPane,{key:"account",tab:R.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"Account password login"})})),U==="error"&&y==="account"&&!P&&a.a.createElement(T,{content:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7528\u6237\u540D\u5BC6\u7801"}),l==="account"&&a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{name:"userName",fieldProps:{size:"large",prefix:a.a.createElement(p.a,{className:i.a.prefixIcon})},placeholder:"\u7528\u6237\u540D\uFF1A admin",rules:[{required:!0,message:a.a.createElement(n.a,{id:"pages.login.username.required",defaultMessage:"Please enter user name!"})}]}),a.a.createElement(c.a.Password,{name:"password",fieldProps:{size:"large",prefix:a.a.createElement(L.a,{className:i.a.prefixIcon})},placeholder:"\u5BC6\u7801\uFF1A admin",rules:[{required:!0,message:a.a.createElement(n.a,{id:"pages.login.password.required",defaultMessage:"Please enter password\uFF01"})}]})),a.a.createElement("div",{style:{marginBottom:24}},a.a.createElement(B.a,{noStyle:!0,name:"autoLogin"},a.a.createElement(n.a,{id:"pages.login.rememberMe",defaultMessage:"Auto login"})),a.a.createElement("a",{style:{float:"right"}},a.a.createElement(n.a,{id:"pages.login.forgotPassword",defaultMessage:"Forget password"})))))};o.default=Object(n.c)(function(r){var t=r.login,s=r.loading;return{userLogin:t,submitting:s.effects["login/login"]}})(C)}}]);
