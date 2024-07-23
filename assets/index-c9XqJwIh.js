(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function r(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=r(f);fetch(f.href,h)}})();var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function na(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zi={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,r){i.exports=e.document?r(e,!0):function(c){if(!c.document)throw new Error("jQuery requires a window with a document");return r(c)}})(typeof window<"u"?window:ta,function(e,r){var c=[],f=Object.getPrototypeOf,h=c.slice,v=c.flat?function(t){return c.flat.call(t)}:function(t){return c.concat.apply([],t)},A=c.push,C=c.indexOf,O={},J=O.toString,Q=O.hasOwnProperty,ie=Q.toString,ve=ie.call(Object),M={},$=function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"},we=function(n){return n!=null&&n===n.window},j=e.document,tn={type:!0,src:!0,nonce:!0,noModule:!0};function lt(t,n,s){s=s||j;var o,u,l=s.createElement("script");if(l.text=t,n)for(o in tn)u=n[o]||n.getAttribute&&n.getAttribute(o),u&&l.setAttribute(o,u);s.head.appendChild(l).parentNode.removeChild(l)}function Ne(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?O[J.call(t)]||"object":typeof t}var xt="3.7.1",Pt=/HTML$/i,a=function(t,n){return new a.fn.init(t,n)};a.fn=a.prototype={jquery:xt,constructor:a,length:0,toArray:function(){return h.call(this)},get:function(t){return t==null?h.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var n=a.merge(this.constructor(),t);return n.prevObject=this,n},each:function(t){return a.each(this,t)},map:function(t){return this.pushStack(a.map(this,function(n,s){return t.call(n,s,n)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(a.grep(this,function(t,n){return(n+1)%2}))},odd:function(){return this.pushStack(a.grep(this,function(t,n){return n%2}))},eq:function(t){var n=this.length,s=+t+(t<0?n:0);return this.pushStack(s>=0&&s<n?[this[s]]:[])},end:function(){return this.prevObject||this.constructor()},push:A,sort:c.sort,splice:c.splice},a.extend=a.fn.extend=function(){var t,n,s,o,u,l,d=arguments[0]||{},m=1,g=arguments.length,b=!1;for(typeof d=="boolean"&&(b=d,d=arguments[m]||{},m++),typeof d!="object"&&!$(d)&&(d={}),m===g&&(d=this,m--);m<g;m++)if((t=arguments[m])!=null)for(n in t)o=t[n],!(n==="__proto__"||d===o)&&(b&&o&&(a.isPlainObject(o)||(u=Array.isArray(o)))?(s=d[n],u&&!Array.isArray(s)?l=[]:!u&&!a.isPlainObject(s)?l={}:l=s,u=!1,d[n]=a.extend(b,l,o)):o!==void 0&&(d[n]=o));return d},a.extend({expando:"jQuery"+(xt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var n,s;return!t||J.call(t)!=="[object Object]"?!1:(n=f(t),n?(s=Q.call(n,"constructor")&&n.constructor,typeof s=="function"&&ie.call(s)===ve):!0)},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},globalEval:function(t,n,s){lt(t,{nonce:n&&n.nonce},s)},each:function(t,n){var s,o=0;if(Nt(t))for(s=t.length;o<s&&n.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(n.call(t[o],o,t[o])===!1)break;return t},text:function(t){var n,s="",o=0,u=t.nodeType;if(!u)for(;n=t[o++];)s+=a.text(n);return u===1||u===11?t.textContent:u===9?t.documentElement.textContent:u===3||u===4?t.nodeValue:s},makeArray:function(t,n){var s=n||[];return t!=null&&(Nt(Object(t))?a.merge(s,typeof t=="string"?[t]:t):A.call(s,t)),s},inArray:function(t,n,s){return n==null?-1:C.call(n,t,s)},isXMLDoc:function(t){var n=t&&t.namespaceURI,s=t&&(t.ownerDocument||t).documentElement;return!Pt.test(n||s&&s.nodeName||"HTML")},merge:function(t,n){for(var s=+n.length,o=0,u=t.length;o<s;o++)t[u++]=n[o];return t.length=u,t},grep:function(t,n,s){for(var o,u=[],l=0,d=t.length,m=!s;l<d;l++)o=!n(t[l],l),o!==m&&u.push(t[l]);return u},map:function(t,n,s){var o,u,l=0,d=[];if(Nt(t))for(o=t.length;l<o;l++)u=n(t[l],l,s),u!=null&&d.push(u);else for(l in t)u=n(t[l],l,s),u!=null&&d.push(u);return v(d)},guid:1,support:M}),typeof Symbol=="function"&&(a.fn[Symbol.iterator]=c[Symbol.iterator]),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,n){O["[object "+n+"]"]=n.toLowerCase()});function Nt(t){var n=!!t&&"length"in t&&t.length,s=Ne(t);return $(t)||we(t)?!1:s==="array"||n===0||typeof n=="number"&&n>0&&n-1 in t}function X(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()}var Nn=c.pop,Js=c.sort,Xs=c.splice,Z="[\\x20\\t\\r\\n\\f]",Ot=new RegExp("^"+Z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Z+"+$","g");a.contains=function(t,n){var s=n&&n.parentNode;return t===s||!!(s&&s.nodeType===1&&(t.contains?t.contains(s):t.compareDocumentPosition&&t.compareDocumentPosition(s)&16))};var Ys=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Qs(t,n){return n?t==="\0"?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}a.escapeSelector=function(t){return(t+"").replace(Ys,Qs)};var Oe=j,On=A;(function(){var t,n,s,o,u,l=On,d,m,g,b,I,S=a.expando,w=0,k=0,H=ln(),G=ln(),q=ln(),se=ln(),re=function(p,y){return p===y&&(u=!0),0},Ee="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Se="(?:\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",z="\\["+Z+"*("+Se+")(?:"+Z+"*([*^$|!~]?=)"+Z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Se+"))|)"+Z+"*\\]",it=":("+Se+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+z+")*)|.*)\\)|)",K=new RegExp(Z+"+","g"),ne=new RegExp("^"+Z+"*,"+Z+"*"),Bt=new RegExp("^"+Z+"*([>+~]|"+Z+")"+Z+"*"),Jn=new RegExp(Z+"|>"),Ce=new RegExp(it),$t=new RegExp("^"+Se+"$"),Ae={ID:new RegExp("^#("+Se+")"),CLASS:new RegExp("^\\.("+Se+")"),TAG:new RegExp("^("+Se+"|[*])"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Z+"*(even|odd|(([+-]|)(\\d*)n|)"+Z+"*(?:([+-]|)"+Z+"*(\\d+)|))"+Z+"*\\)|)","i"),bool:new RegExp("^(?:"+Ee+")$","i"),needsContext:new RegExp("^"+Z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Z+"*((?:-\\d)?\\d*)"+Z+"*\\)|)(?=[^-]|$)","i")},ze=/^(?:input|select|textarea|button)$/i,Ge=/^h\d$/i,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Xn=/[+~]/,Le=new RegExp("\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\([^\\r\\n\\f])","g"),Me=function(p,y){var _="0x"+p.slice(1)-65536;return y||(_<0?String.fromCharCode(_+65536):String.fromCharCode(_>>10|55296,_&1023|56320))},Ko=function(){Ke()},Jo=dn(function(p){return p.disabled===!0&&X(p,"fieldset")},{dir:"parentNode",next:"legend"});function Xo(){try{return d.activeElement}catch{}}try{l.apply(c=h.call(Oe.childNodes),Oe.childNodes),c[Oe.childNodes.length].nodeType}catch{l={apply:function(y,_){On.apply(y,h.call(_))},call:function(y){On.apply(y,h.call(arguments,1))}}}function Y(p,y,_,T){var E,x,P,D,N,W,U,B=y&&y.ownerDocument,V=y?y.nodeType:9;if(_=_||[],typeof p!="string"||!p||V!==1&&V!==9&&V!==11)return _;if(!T&&(Ke(y),y=y||d,g)){if(V!==11&&(N=ge.exec(p)))if(E=N[1]){if(V===9)if(P=y.getElementById(E)){if(P.id===E)return l.call(_,P),_}else return _;else if(B&&(P=B.getElementById(E))&&Y.contains(y,P)&&P.id===E)return l.call(_,P),_}else{if(N[2])return l.apply(_,y.getElementsByTagName(p)),_;if((E=N[3])&&y.getElementsByClassName)return l.apply(_,y.getElementsByClassName(E)),_}if(!se[p+" "]&&(!b||!b.test(p))){if(U=p,B=y,V===1&&(Jn.test(p)||Bt.test(p))){for(B=Xn.test(p)&&Yn(y.parentNode)||y,(B!=y||!M.scope)&&((D=y.getAttribute("id"))?D=a.escapeSelector(D):y.setAttribute("id",D=S)),W=qt(p),x=W.length;x--;)W[x]=(D?"#"+D:":scope")+" "+fn(W[x]);U=W.join(",")}try{return l.apply(_,B.querySelectorAll(U)),_}catch{se(p,!0)}finally{D===S&&y.removeAttribute("id")}}}return yi(p.replace(Ot,"$1"),y,_,T)}function ln(){var p=[];function y(_,T){return p.push(_+" ")>n.cacheLength&&delete y[p.shift()],y[_+" "]=T}return y}function be(p){return p[S]=!0,p}function bt(p){var y=d.createElement("fieldset");try{return!!p(y)}catch{return!1}finally{y.parentNode&&y.parentNode.removeChild(y),y=null}}function Yo(p){return function(y){return X(y,"input")&&y.type===p}}function Qo(p){return function(y){return(X(y,"input")||X(y,"button"))&&y.type===p}}function mi(p){return function(y){return"form"in y?y.parentNode&&y.disabled===!1?"label"in y?"label"in y.parentNode?y.parentNode.disabled===p:y.disabled===p:y.isDisabled===p||y.isDisabled!==!p&&Jo(y)===p:y.disabled===p:"label"in y?y.disabled===p:!1}}function st(p){return be(function(y){return y=+y,be(function(_,T){for(var E,x=p([],_.length,y),P=x.length;P--;)_[E=x[P]]&&(_[E]=!(T[E]=_[E]))})})}function Yn(p){return p&&typeof p.getElementsByTagName<"u"&&p}function Ke(p){var y,_=p?p.ownerDocument||p:Oe;return _==d||_.nodeType!==9||!_.documentElement||(d=_,m=d.documentElement,g=!a.isXMLDoc(d),I=m.matches||m.webkitMatchesSelector||m.msMatchesSelector,m.msMatchesSelector&&Oe!=d&&(y=d.defaultView)&&y.top!==y&&y.addEventListener("unload",Ko),M.getById=bt(function(T){return m.appendChild(T).id=a.expando,!d.getElementsByName||!d.getElementsByName(a.expando).length}),M.disconnectedMatch=bt(function(T){return I.call(T,"*")}),M.scope=bt(function(){return d.querySelectorAll(":scope")}),M.cssHas=bt(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(n.filter.ID=function(T){var E=T.replace(Le,Me);return function(x){return x.getAttribute("id")===E}},n.find.ID=function(T,E){if(typeof E.getElementById<"u"&&g){var x=E.getElementById(T);return x?[x]:[]}}):(n.filter.ID=function(T){var E=T.replace(Le,Me);return function(x){var P=typeof x.getAttributeNode<"u"&&x.getAttributeNode("id");return P&&P.value===E}},n.find.ID=function(T,E){if(typeof E.getElementById<"u"&&g){var x,P,D,N=E.getElementById(T);if(N){if(x=N.getAttributeNode("id"),x&&x.value===T)return[N];for(D=E.getElementsByName(T),P=0;N=D[P++];)if(x=N.getAttributeNode("id"),x&&x.value===T)return[N]}return[]}}),n.find.TAG=function(T,E){return typeof E.getElementsByTagName<"u"?E.getElementsByTagName(T):E.querySelectorAll(T)},n.find.CLASS=function(T,E){if(typeof E.getElementsByClassName<"u"&&g)return E.getElementsByClassName(T)},b=[],bt(function(T){var E;m.appendChild(T).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",T.querySelectorAll("[selected]").length||b.push("\\["+Z+"*(?:value|"+Ee+")"),T.querySelectorAll("[id~="+S+"-]").length||b.push("~="),T.querySelectorAll("a#"+S+"+*").length||b.push(".#.+[+~]"),T.querySelectorAll(":checked").length||b.push(":checked"),E=d.createElement("input"),E.setAttribute("type","hidden"),T.appendChild(E).setAttribute("name","D"),m.appendChild(T).disabled=!0,T.querySelectorAll(":disabled").length!==2&&b.push(":enabled",":disabled"),E=d.createElement("input"),E.setAttribute("name",""),T.appendChild(E),T.querySelectorAll("[name='']").length||b.push("\\["+Z+"*name"+Z+"*="+Z+`*(?:''|"")`)}),M.cssHas||b.push(":has"),b=b.length&&new RegExp(b.join("|")),re=function(T,E){if(T===E)return u=!0,0;var x=!T.compareDocumentPosition-!E.compareDocumentPosition;return x||(x=(T.ownerDocument||T)==(E.ownerDocument||E)?T.compareDocumentPosition(E):1,x&1||!M.sortDetached&&E.compareDocumentPosition(T)===x?T===d||T.ownerDocument==Oe&&Y.contains(Oe,T)?-1:E===d||E.ownerDocument==Oe&&Y.contains(Oe,E)?1:o?C.call(o,T)-C.call(o,E):0:x&4?-1:1)}),d}Y.matches=function(p,y){return Y(p,null,null,y)},Y.matchesSelector=function(p,y){if(Ke(p),g&&!se[y+" "]&&(!b||!b.test(y)))try{var _=I.call(p,y);if(_||M.disconnectedMatch||p.document&&p.document.nodeType!==11)return _}catch{se(y,!0)}return Y(y,d,null,[p]).length>0},Y.contains=function(p,y){return(p.ownerDocument||p)!=d&&Ke(p),a.contains(p,y)},Y.attr=function(p,y){(p.ownerDocument||p)!=d&&Ke(p);var _=n.attrHandle[y.toLowerCase()],T=_&&Q.call(n.attrHandle,y.toLowerCase())?_(p,y,!g):void 0;return T!==void 0?T:p.getAttribute(y)},Y.error=function(p){throw new Error("Syntax error, unrecognized expression: "+p)},a.uniqueSort=function(p){var y,_=[],T=0,E=0;if(u=!M.sortStable,o=!M.sortStable&&h.call(p,0),Js.call(p,re),u){for(;y=p[E++];)y===p[E]&&(T=_.push(E));for(;T--;)Xs.call(p,_[T],1)}return o=null,p},a.fn.uniqueSort=function(){return this.pushStack(a.uniqueSort(h.apply(this)))},n=a.expr={cacheLength:50,createPseudo:be,match:Ae,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(p){return p[1]=p[1].replace(Le,Me),p[3]=(p[3]||p[4]||p[5]||"").replace(Le,Me),p[2]==="~="&&(p[3]=" "+p[3]+" "),p.slice(0,4)},CHILD:function(p){return p[1]=p[1].toLowerCase(),p[1].slice(0,3)==="nth"?(p[3]||Y.error(p[0]),p[4]=+(p[4]?p[5]+(p[6]||1):2*(p[3]==="even"||p[3]==="odd")),p[5]=+(p[7]+p[8]||p[3]==="odd")):p[3]&&Y.error(p[0]),p},PSEUDO:function(p){var y,_=!p[6]&&p[2];return Ae.CHILD.test(p[0])?null:(p[3]?p[2]=p[4]||p[5]||"":_&&Ce.test(_)&&(y=qt(_,!0))&&(y=_.indexOf(")",_.length-y)-_.length)&&(p[0]=p[0].slice(0,y),p[2]=_.slice(0,y)),p.slice(0,3))}},filter:{TAG:function(p){var y=p.replace(Le,Me).toLowerCase();return p==="*"?function(){return!0}:function(_){return X(_,y)}},CLASS:function(p){var y=H[p+" "];return y||(y=new RegExp("(^|"+Z+")"+p+"("+Z+"|$)"))&&H(p,function(_){return y.test(typeof _.className=="string"&&_.className||typeof _.getAttribute<"u"&&_.getAttribute("class")||"")})},ATTR:function(p,y,_){return function(T){var E=Y.attr(T,p);return E==null?y==="!=":y?(E+="",y==="="?E===_:y==="!="?E!==_:y==="^="?_&&E.indexOf(_)===0:y==="*="?_&&E.indexOf(_)>-1:y==="$="?_&&E.slice(-_.length)===_:y==="~="?(" "+E.replace(K," ")+" ").indexOf(_)>-1:y==="|="?E===_||E.slice(0,_.length+1)===_+"-":!1):!0}},CHILD:function(p,y,_,T,E){var x=p.slice(0,3)!=="nth",P=p.slice(-4)!=="last",D=y==="of-type";return T===1&&E===0?function(N){return!!N.parentNode}:function(N,W,U){var B,V,L,te,he,ae=x!==P?"nextSibling":"previousSibling",me=N.parentNode,ke=D&&N.nodeName.toLowerCase(),_t=!U&&!D,ue=!1;if(me){if(x){for(;ae;){for(L=N;L=L[ae];)if(D?X(L,ke):L.nodeType===1)return!1;he=ae=p==="only"&&!he&&"nextSibling"}return!0}if(he=[P?me.firstChild:me.lastChild],P&&_t){for(V=me[S]||(me[S]={}),B=V[p]||[],te=B[0]===w&&B[1],ue=te&&B[2],L=te&&me.childNodes[te];L=++te&&L&&L[ae]||(ue=te=0)||he.pop();)if(L.nodeType===1&&++ue&&L===N){V[p]=[w,te,ue];break}}else if(_t&&(V=N[S]||(N[S]={}),B=V[p]||[],te=B[0]===w&&B[1],ue=te),ue===!1)for(;(L=++te&&L&&L[ae]||(ue=te=0)||he.pop())&&!((D?X(L,ke):L.nodeType===1)&&++ue&&(_t&&(V=L[S]||(L[S]={}),V[p]=[w,ue]),L===N)););return ue-=E,ue===T||ue%T===0&&ue/T>=0}}},PSEUDO:function(p,y){var _,T=n.pseudos[p]||n.setFilters[p.toLowerCase()]||Y.error("unsupported pseudo: "+p);return T[S]?T(y):T.length>1?(_=[p,p,"",y],n.setFilters.hasOwnProperty(p.toLowerCase())?be(function(E,x){for(var P,D=T(E,y),N=D.length;N--;)P=C.call(E,D[N]),E[P]=!(x[P]=D[N])}):function(E){return T(E,0,_)}):T}},pseudos:{not:be(function(p){var y=[],_=[],T=tr(p.replace(Ot,"$1"));return T[S]?be(function(E,x,P,D){for(var N,W=T(E,null,D,[]),U=E.length;U--;)(N=W[U])&&(E[U]=!(x[U]=N))}):function(E,x,P){return y[0]=E,T(y,null,P,_),y[0]=null,!_.pop()}}),has:be(function(p){return function(y){return Y(p,y).length>0}}),contains:be(function(p){return p=p.replace(Le,Me),function(y){return(y.textContent||a.text(y)).indexOf(p)>-1}}),lang:be(function(p){return $t.test(p||"")||Y.error("unsupported lang: "+p),p=p.replace(Le,Me).toLowerCase(),function(y){var _;do if(_=g?y.lang:y.getAttribute("xml:lang")||y.getAttribute("lang"))return _=_.toLowerCase(),_===p||_.indexOf(p+"-")===0;while((y=y.parentNode)&&y.nodeType===1);return!1}}),target:function(p){var y=e.location&&e.location.hash;return y&&y.slice(1)===p.id},root:function(p){return p===m},focus:function(p){return p===Xo()&&d.hasFocus()&&!!(p.type||p.href||~p.tabIndex)},enabled:mi(!1),disabled:mi(!0),checked:function(p){return X(p,"input")&&!!p.checked||X(p,"option")&&!!p.selected},selected:function(p){return p.parentNode&&p.parentNode.selectedIndex,p.selected===!0},empty:function(p){for(p=p.firstChild;p;p=p.nextSibling)if(p.nodeType<6)return!1;return!0},parent:function(p){return!n.pseudos.empty(p)},header:function(p){return Ge.test(p.nodeName)},input:function(p){return ze.test(p.nodeName)},button:function(p){return X(p,"input")&&p.type==="button"||X(p,"button")},text:function(p){var y;return X(p,"input")&&p.type==="text"&&((y=p.getAttribute("type"))==null||y.toLowerCase()==="text")},first:st(function(){return[0]}),last:st(function(p,y){return[y-1]}),eq:st(function(p,y,_){return[_<0?_+y:_]}),even:st(function(p,y){for(var _=0;_<y;_+=2)p.push(_);return p}),odd:st(function(p,y){for(var _=1;_<y;_+=2)p.push(_);return p}),lt:st(function(p,y,_){var T;for(_<0?T=_+y:_>y?T=y:T=_;--T>=0;)p.push(T);return p}),gt:st(function(p,y,_){for(var T=_<0?_+y:_;++T<y;)p.push(T);return p})}},n.pseudos.nth=n.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=Yo(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=Qo(t);function vi(){}vi.prototype=n.filters=n.pseudos,n.setFilters=new vi;function qt(p,y){var _,T,E,x,P,D,N,W=G[p+" "];if(W)return y?0:W.slice(0);for(P=p,D=[],N=n.preFilter;P;){(!_||(T=ne.exec(P)))&&(T&&(P=P.slice(T[0].length)||P),D.push(E=[])),_=!1,(T=Bt.exec(P))&&(_=T.shift(),E.push({value:_,type:T[0].replace(Ot," ")}),P=P.slice(_.length));for(x in n.filter)(T=Ae[x].exec(P))&&(!N[x]||(T=N[x](T)))&&(_=T.shift(),E.push({value:_,type:x,matches:T}),P=P.slice(_.length));if(!_)break}return y?P.length:P?Y.error(p):G(p,D).slice(0)}function fn(p){for(var y=0,_=p.length,T="";y<_;y++)T+=p[y].value;return T}function dn(p,y,_){var T=y.dir,E=y.next,x=E||T,P=_&&x==="parentNode",D=k++;return y.first?function(N,W,U){for(;N=N[T];)if(N.nodeType===1||P)return p(N,W,U);return!1}:function(N,W,U){var B,V,L=[w,D];if(U){for(;N=N[T];)if((N.nodeType===1||P)&&p(N,W,U))return!0}else for(;N=N[T];)if(N.nodeType===1||P)if(V=N[S]||(N[S]={}),E&&X(N,E))N=N[T]||N;else{if((B=V[x])&&B[0]===w&&B[1]===D)return L[2]=B[2];if(V[x]=L,L[2]=p(N,W,U))return!0}return!1}}function Qn(p){return p.length>1?function(y,_,T){for(var E=p.length;E--;)if(!p[E](y,_,T))return!1;return!0}:p[0]}function Zo(p,y,_){for(var T=0,E=y.length;T<E;T++)Y(p,y[T],_);return _}function hn(p,y,_,T,E){for(var x,P=[],D=0,N=p.length,W=y!=null;D<N;D++)(x=p[D])&&(!_||_(x,T,E))&&(P.push(x),W&&y.push(D));return P}function Zn(p,y,_,T,E,x){return T&&!T[S]&&(T=Zn(T)),E&&!E[S]&&(E=Zn(E,x)),be(function(P,D,N,W){var U,B,V,L,te=[],he=[],ae=D.length,me=P||Zo(y||"*",N.nodeType?[N]:N,[]),ke=p&&(P||!y)?hn(me,te,p,N,W):me;if(_?(L=E||(P?p:ae||T)?[]:D,_(ke,L,N,W)):L=ke,T)for(U=hn(L,he),T(U,[],N,W),B=U.length;B--;)(V=U[B])&&(L[he[B]]=!(ke[he[B]]=V));if(P){if(E||p){if(E){for(U=[],B=L.length;B--;)(V=L[B])&&U.push(ke[B]=V);E(null,L=[],U,W)}for(B=L.length;B--;)(V=L[B])&&(U=E?C.call(P,V):te[B])>-1&&(P[U]=!(D[U]=V))}}else L=hn(L===D?L.splice(ae,L.length):L),E?E(null,D,L,W):l.apply(D,L)})}function er(p){for(var y,_,T,E=p.length,x=n.relative[p[0].type],P=x||n.relative[" "],D=x?1:0,N=dn(function(B){return B===y},P,!0),W=dn(function(B){return C.call(y,B)>-1},P,!0),U=[function(B,V,L){var te=!x&&(L||V!=s)||((y=V).nodeType?N(B,V,L):W(B,V,L));return y=null,te}];D<E;D++)if(_=n.relative[p[D].type])U=[dn(Qn(U),_)];else{if(_=n.filter[p[D].type].apply(null,p[D].matches),_[S]){for(T=++D;T<E&&!n.relative[p[T].type];T++);return Zn(D>1&&Qn(U),D>1&&fn(p.slice(0,D-1).concat({value:p[D-2].type===" "?"*":""})).replace(Ot,"$1"),_,D<T&&er(p.slice(D,T)),T<E&&er(p=p.slice(T)),T<E&&fn(p))}U.push(_)}return Qn(U)}function ea(p,y){var _=y.length>0,T=p.length>0,E=function(x,P,D,N,W){var U,B,V,L=0,te="0",he=x&&[],ae=[],me=s,ke=x||T&&n.find.TAG("*",W),_t=w+=me==null?1:Math.random()||.1,ue=ke.length;for(W&&(s=P==d||P||W);te!==ue&&(U=ke[te])!=null;te++){if(T&&U){for(B=0,!P&&U.ownerDocument!=d&&(Ke(U),D=!g);V=p[B++];)if(V(U,P||d,D)){l.call(N,U);break}W&&(w=_t)}_&&((U=!V&&U)&&L--,x&&he.push(U))}if(L+=te,_&&te!==L){for(B=0;V=y[B++];)V(he,ae,P,D);if(x){if(L>0)for(;te--;)he[te]||ae[te]||(ae[te]=Nn.call(N));ae=hn(ae)}l.apply(N,ae),W&&!x&&ae.length>0&&L+y.length>1&&a.uniqueSort(N)}return W&&(w=_t,s=me),he};return _?be(E):E}function tr(p,y){var _,T=[],E=[],x=q[p+" "];if(!x){for(y||(y=qt(p)),_=y.length;_--;)x=er(y[_]),x[S]?T.push(x):E.push(x);x=q(p,ea(E,T)),x.selector=p}return x}function yi(p,y,_,T){var E,x,P,D,N,W=typeof p=="function"&&p,U=!T&&qt(p=W.selector||p);if(_=_||[],U.length===1){if(x=U[0]=U[0].slice(0),x.length>2&&(P=x[0]).type==="ID"&&y.nodeType===9&&g&&n.relative[x[1].type]){if(y=(n.find.ID(P.matches[0].replace(Le,Me),y)||[])[0],y)W&&(y=y.parentNode);else return _;p=p.slice(x.shift().value.length)}for(E=Ae.needsContext.test(p)?0:x.length;E--&&(P=x[E],!n.relative[D=P.type]);)if((N=n.find[D])&&(T=N(P.matches[0].replace(Le,Me),Xn.test(x[0].type)&&Yn(y.parentNode)||y))){if(x.splice(E,1),p=T.length&&fn(x),!p)return l.apply(_,T),_;break}}return(W||tr(p,U))(T,y,!g,_,!y||Xn.test(p)&&Yn(y.parentNode)||y),_}M.sortStable=S.split("").sort(re).join("")===S,Ke(),M.sortDetached=bt(function(p){return p.compareDocumentPosition(d.createElement("fieldset"))&1}),a.find=Y,a.expr[":"]=a.expr.pseudos,a.unique=a.uniqueSort,Y.compile=tr,Y.select=yi,Y.setDocument=Ke,Y.tokenize=qt,Y.escape=a.escapeSelector,Y.getText=a.text,Y.isXML=a.isXMLDoc,Y.selectors=a.expr,Y.support=a.support,Y.uniqueSort=a.uniqueSort})();var ft=function(t,n,s){for(var o=[],u=s!==void 0;(t=t[n])&&t.nodeType!==9;)if(t.nodeType===1){if(u&&a(t).is(s))break;o.push(t)}return o},Dr=function(t,n){for(var s=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&s.push(t);return s},Rr=a.expr.match.needsContext,Lr=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Dn(t,n,s){return $(n)?a.grep(t,function(o,u){return!!n.call(o,u,o)!==s}):n.nodeType?a.grep(t,function(o){return o===n!==s}):typeof n!="string"?a.grep(t,function(o){return C.call(n,o)>-1!==s}):a.filter(n,t,s)}a.filter=function(t,n,s){var o=n[0];return s&&(t=":not("+t+")"),n.length===1&&o.nodeType===1?a.find.matchesSelector(o,t)?[o]:[]:a.find.matches(t,a.grep(n,function(u){return u.nodeType===1}))},a.fn.extend({find:function(t){var n,s,o=this.length,u=this;if(typeof t!="string")return this.pushStack(a(t).filter(function(){for(n=0;n<o;n++)if(a.contains(u[n],this))return!0}));for(s=this.pushStack([]),n=0;n<o;n++)a.find(t,u[n],s);return o>1?a.uniqueSort(s):s},filter:function(t){return this.pushStack(Dn(this,t||[],!1))},not:function(t){return this.pushStack(Dn(this,t||[],!0))},is:function(t){return!!Dn(this,typeof t=="string"&&Rr.test(t)?a(t):t||[],!1).length}});var Mr,Zs=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,eo=a.fn.init=function(t,n,s){var o,u;if(!t)return this;if(s=s||Mr,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?o=[null,t,null]:o=Zs.exec(t),o&&(o[1]||!n))if(o[1]){if(n=n instanceof a?n[0]:n,a.merge(this,a.parseHTML(o[1],n&&n.nodeType?n.ownerDocument||n:j,!0)),Lr.test(o[1])&&a.isPlainObject(n))for(o in n)$(this[o])?this[o](n[o]):this.attr(o,n[o]);return this}else return u=j.getElementById(o[2]),u&&(this[0]=u,this.length=1),this;else return!n||n.jquery?(n||s).find(t):this.constructor(n).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if($(t))return s.ready!==void 0?s.ready(t):t(a)}return a.makeArray(t,this)};eo.prototype=a.fn,Mr=a(j);var to=/^(?:parents|prev(?:Until|All))/,no={children:!0,contents:!0,next:!0,prev:!0};a.fn.extend({has:function(t){var n=a(t,this),s=n.length;return this.filter(function(){for(var o=0;o<s;o++)if(a.contains(this,n[o]))return!0})},closest:function(t,n){var s,o=0,u=this.length,l=[],d=typeof t!="string"&&a(t);if(!Rr.test(t)){for(;o<u;o++)for(s=this[o];s&&s!==n;s=s.parentNode)if(s.nodeType<11&&(d?d.index(s)>-1:s.nodeType===1&&a.find.matchesSelector(s,t))){l.push(s);break}}return this.pushStack(l.length>1?a.uniqueSort(l):l)},index:function(t){return t?typeof t=="string"?C.call(a(t),this[0]):C.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,n){return this.pushStack(a.uniqueSort(a.merge(this.get(),a(t,n))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function Ur(t,n){for(;(t=t[n])&&t.nodeType!==1;);return t}a.each({parent:function(t){var n=t.parentNode;return n&&n.nodeType!==11?n:null},parents:function(t){return ft(t,"parentNode")},parentsUntil:function(t,n,s){return ft(t,"parentNode",s)},next:function(t){return Ur(t,"nextSibling")},prev:function(t){return Ur(t,"previousSibling")},nextAll:function(t){return ft(t,"nextSibling")},prevAll:function(t){return ft(t,"previousSibling")},nextUntil:function(t,n,s){return ft(t,"nextSibling",s)},prevUntil:function(t,n,s){return ft(t,"previousSibling",s)},siblings:function(t){return Dr((t.parentNode||{}).firstChild,t)},children:function(t){return Dr(t.firstChild)},contents:function(t){return t.contentDocument!=null&&f(t.contentDocument)?t.contentDocument:(X(t,"template")&&(t=t.content||t),a.merge([],t.childNodes))}},function(t,n){a.fn[t]=function(s,o){var u=a.map(this,n,s);return t.slice(-5)!=="Until"&&(o=s),o&&typeof o=="string"&&(u=a.filter(o,u)),this.length>1&&(no[t]||a.uniqueSort(u),to.test(t)&&u.reverse()),this.pushStack(u)}});var Te=/[^\x20\t\r\n\f]+/g;function ro(t){var n={};return a.each(t.match(Te)||[],function(s,o){n[o]=!0}),n}a.Callbacks=function(t){t=typeof t=="string"?ro(t):a.extend({},t);var n,s,o,u,l=[],d=[],m=-1,g=function(){for(u=u||t.once,o=n=!0;d.length;m=-1)for(s=d.shift();++m<l.length;)l[m].apply(s[0],s[1])===!1&&t.stopOnFalse&&(m=l.length,s=!1);t.memory||(s=!1),n=!1,u&&(s?l=[]:l="")},b={add:function(){return l&&(s&&!n&&(m=l.length-1,d.push(s)),function I(S){a.each(S,function(w,k){$(k)?(!t.unique||!b.has(k))&&l.push(k):k&&k.length&&Ne(k)!=="string"&&I(k)})}(arguments),s&&!n&&g()),this},remove:function(){return a.each(arguments,function(I,S){for(var w;(w=a.inArray(S,l,w))>-1;)l.splice(w,1),w<=m&&m--}),this},has:function(I){return I?a.inArray(I,l)>-1:l.length>0},empty:function(){return l&&(l=[]),this},disable:function(){return u=d=[],l=s="",this},disabled:function(){return!l},lock:function(){return u=d=[],!s&&!n&&(l=s=""),this},locked:function(){return!!u},fireWith:function(I,S){return u||(S=S||[],S=[I,S.slice?S.slice():S],d.push(S),n||g()),this},fire:function(){return b.fireWith(this,arguments),this},fired:function(){return!!o}};return b};function dt(t){return t}function nn(t){throw t}function jr(t,n,s,o){var u;try{t&&$(u=t.promise)?u.call(t).done(n).fail(s):t&&$(u=t.then)?u.call(t,n,s):n.apply(void 0,[t].slice(o))}catch(l){s.apply(void 0,[l])}}a.extend({Deferred:function(t){var n=[["notify","progress",a.Callbacks("memory"),a.Callbacks("memory"),2],["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),0,"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),1,"rejected"]],s="pending",o={state:function(){return s},always:function(){return u.done(arguments).fail(arguments),this},catch:function(l){return o.then(null,l)},pipe:function(){var l=arguments;return a.Deferred(function(d){a.each(n,function(m,g){var b=$(l[g[4]])&&l[g[4]];u[g[1]](function(){var I=b&&b.apply(this,arguments);I&&$(I.promise)?I.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[g[0]+"With"](this,b?[I]:arguments)})}),l=null}).promise()},then:function(l,d,m){var g=0;function b(I,S,w,k){return function(){var H=this,G=arguments,q=function(){var re,Ee;if(!(I<g)){if(re=w.apply(H,G),re===S.promise())throw new TypeError("Thenable self-resolution");Ee=re&&(typeof re=="object"||typeof re=="function")&&re.then,$(Ee)?k?Ee.call(re,b(g,S,dt,k),b(g,S,nn,k)):(g++,Ee.call(re,b(g,S,dt,k),b(g,S,nn,k),b(g,S,dt,S.notifyWith))):(w!==dt&&(H=void 0,G=[re]),(k||S.resolveWith)(H,G))}},se=k?q:function(){try{q()}catch(re){a.Deferred.exceptionHook&&a.Deferred.exceptionHook(re,se.error),I+1>=g&&(w!==nn&&(H=void 0,G=[re]),S.rejectWith(H,G))}};I?se():(a.Deferred.getErrorHook?se.error=a.Deferred.getErrorHook():a.Deferred.getStackHook&&(se.error=a.Deferred.getStackHook()),e.setTimeout(se))}}return a.Deferred(function(I){n[0][3].add(b(0,I,$(m)?m:dt,I.notifyWith)),n[1][3].add(b(0,I,$(l)?l:dt)),n[2][3].add(b(0,I,$(d)?d:nn))}).promise()},promise:function(l){return l!=null?a.extend(l,o):o}},u={};return a.each(n,function(l,d){var m=d[2],g=d[5];o[d[1]]=m.add,g&&m.add(function(){s=g},n[3-l][2].disable,n[3-l][3].disable,n[0][2].lock,n[0][3].lock),m.add(d[3].fire),u[d[0]]=function(){return u[d[0]+"With"](this===u?void 0:this,arguments),this},u[d[0]+"With"]=m.fireWith}),o.promise(u),t&&t.call(u,u),u},when:function(t){var n=arguments.length,s=n,o=Array(s),u=h.call(arguments),l=a.Deferred(),d=function(m){return function(g){o[m]=this,u[m]=arguments.length>1?h.call(arguments):g,--n||l.resolveWith(o,u)}};if(n<=1&&(jr(t,l.done(d(s)).resolve,l.reject,!n),l.state()==="pending"||$(u[s]&&u[s].then)))return l.then();for(;s--;)jr(u[s],d(s),l.reject);return l.promise()}});var io=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;a.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&io.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},a.readyException=function(t){e.setTimeout(function(){throw t})};var Rn=a.Deferred();a.fn.ready=function(t){return Rn.then(t).catch(function(n){a.readyException(n)}),this},a.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--a.readyWait:a.isReady)||(a.isReady=!0,!(t!==!0&&--a.readyWait>0)&&Rn.resolveWith(j,[a]))}}),a.ready.then=Rn.then;function rn(){j.removeEventListener("DOMContentLoaded",rn),e.removeEventListener("load",rn),a.ready()}j.readyState==="complete"||j.readyState!=="loading"&&!j.documentElement.doScroll?e.setTimeout(a.ready):(j.addEventListener("DOMContentLoaded",rn),e.addEventListener("load",rn));var De=function(t,n,s,o,u,l,d){var m=0,g=t.length,b=s==null;if(Ne(s)==="object"){u=!0;for(m in s)De(t,n,m,s[m],!0,l,d)}else if(o!==void 0&&(u=!0,$(o)||(d=!0),b&&(d?(n.call(t,o),n=null):(b=n,n=function(I,S,w){return b.call(a(I),w)})),n))for(;m<g;m++)n(t[m],s,d?o:o.call(t[m],m,n(t[m],s)));return u?t:b?n.call(t):g?n(t[0],s):l},so=/^-ms-/,oo=/-([a-z])/g;function ao(t,n){return n.toUpperCase()}function Ie(t){return t.replace(so,"ms-").replace(oo,ao)}var Dt=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function Rt(){this.expando=a.expando+Rt.uid++}Rt.uid=1,Rt.prototype={cache:function(t){var n=t[this.expando];return n||(n={},Dt(t)&&(t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,configurable:!0}))),n},set:function(t,n,s){var o,u=this.cache(t);if(typeof n=="string")u[Ie(n)]=s;else for(o in n)u[Ie(o)]=n[o];return u},get:function(t,n){return n===void 0?this.cache(t):t[this.expando]&&t[this.expando][Ie(n)]},access:function(t,n,s){return n===void 0||n&&typeof n=="string"&&s===void 0?this.get(t,n):(this.set(t,n,s),s!==void 0?s:n)},remove:function(t,n){var s,o=t[this.expando];if(o!==void 0){if(n!==void 0)for(Array.isArray(n)?n=n.map(Ie):(n=Ie(n),n=n in o?[n]:n.match(Te)||[]),s=n.length;s--;)delete o[n[s]];(n===void 0||a.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var n=t[this.expando];return n!==void 0&&!a.isEmptyObject(n)}};var R=new Rt,le=new Rt,co=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,uo=/[A-Z]/g;function lo(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:co.test(t)?JSON.parse(t):t}function Hr(t,n,s){var o;if(s===void 0&&t.nodeType===1)if(o="data-"+n.replace(uo,"-$&").toLowerCase(),s=t.getAttribute(o),typeof s=="string"){try{s=lo(s)}catch{}le.set(t,n,s)}else s=void 0;return s}a.extend({hasData:function(t){return le.hasData(t)||R.hasData(t)},data:function(t,n,s){return le.access(t,n,s)},removeData:function(t,n){le.remove(t,n)},_data:function(t,n,s){return R.access(t,n,s)},_removeData:function(t,n){R.remove(t,n)}}),a.fn.extend({data:function(t,n){var s,o,u,l=this[0],d=l&&l.attributes;if(t===void 0){if(this.length&&(u=le.get(l),l.nodeType===1&&!R.get(l,"hasDataAttrs"))){for(s=d.length;s--;)d[s]&&(o=d[s].name,o.indexOf("data-")===0&&(o=Ie(o.slice(5)),Hr(l,o,u[o])));R.set(l,"hasDataAttrs",!0)}return u}return typeof t=="object"?this.each(function(){le.set(this,t)}):De(this,function(m){var g;if(l&&m===void 0)return g=le.get(l,t),g!==void 0||(g=Hr(l,t),g!==void 0)?g:void 0;this.each(function(){le.set(this,t,m)})},null,n,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){le.remove(this,t)})}}),a.extend({queue:function(t,n,s){var o;if(t)return n=(n||"fx")+"queue",o=R.get(t,n),s&&(!o||Array.isArray(s)?o=R.access(t,n,a.makeArray(s)):o.push(s)),o||[]},dequeue:function(t,n){n=n||"fx";var s=a.queue(t,n),o=s.length,u=s.shift(),l=a._queueHooks(t,n),d=function(){a.dequeue(t,n)};u==="inprogress"&&(u=s.shift(),o--),u&&(n==="fx"&&s.unshift("inprogress"),delete l.stop,u.call(t,d,l)),!o&&l&&l.empty.fire()},_queueHooks:function(t,n){var s=n+"queueHooks";return R.get(t,s)||R.access(t,s,{empty:a.Callbacks("once memory").add(function(){R.remove(t,[n+"queue",s])})})}}),a.fn.extend({queue:function(t,n){var s=2;return typeof t!="string"&&(n=t,t="fx",s--),arguments.length<s?a.queue(this[0],t):n===void 0?this:this.each(function(){var o=a.queue(this,t,n);a._queueHooks(this,t),t==="fx"&&o[0]!=="inprogress"&&a.dequeue(this,t)})},dequeue:function(t){return this.each(function(){a.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var s,o=1,u=a.Deferred(),l=this,d=this.length,m=function(){--o||u.resolveWith(l,[l])};for(typeof t!="string"&&(n=t,t=void 0),t=t||"fx";d--;)s=R.get(l[d],t+"queueHooks"),s&&s.empty&&(o++,s.empty.add(m));return m(),u.promise(n)}});var Fr=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Lt=new RegExp("^(?:([+-])=|)("+Fr+")([a-z%]*)$","i"),Re=["Top","Right","Bottom","Left"],tt=j.documentElement,ht=function(t){return a.contains(t.ownerDocument,t)},fo={composed:!0};tt.getRootNode&&(ht=function(t){return a.contains(t.ownerDocument,t)||t.getRootNode(fo)===t.ownerDocument});var sn=function(t,n){return t=n||t,t.style.display==="none"||t.style.display===""&&ht(t)&&a.css(t,"display")==="none"};function Br(t,n,s,o){var u,l,d=20,m=o?function(){return o.cur()}:function(){return a.css(t,n,"")},g=m(),b=s&&s[3]||(a.cssNumber[n]?"":"px"),I=t.nodeType&&(a.cssNumber[n]||b!=="px"&&+g)&&Lt.exec(a.css(t,n));if(I&&I[3]!==b){for(g=g/2,b=b||I[3],I=+g||1;d--;)a.style(t,n,I+b),(1-l)*(1-(l=m()/g||.5))<=0&&(d=0),I=I/l;I=I*2,a.style(t,n,I+b),s=s||[]}return s&&(I=+I||+g||0,u=s[1]?I+(s[1]+1)*s[2]:+s[2],o&&(o.unit=b,o.start=I,o.end=u)),u}var $r={};function ho(t){var n,s=t.ownerDocument,o=t.nodeName,u=$r[o];return u||(n=s.body.appendChild(s.createElement(o)),u=a.css(n,"display"),n.parentNode.removeChild(n),u==="none"&&(u="block"),$r[o]=u,u)}function pt(t,n){for(var s,o,u=[],l=0,d=t.length;l<d;l++)o=t[l],o.style&&(s=o.style.display,n?(s==="none"&&(u[l]=R.get(o,"display")||null,u[l]||(o.style.display="")),o.style.display===""&&sn(o)&&(u[l]=ho(o))):s!=="none"&&(u[l]="none",R.set(o,"display",s)));for(l=0;l<d;l++)u[l]!=null&&(t[l].style.display=u[l]);return t}a.fn.extend({show:function(){return pt(this,!0)},hide:function(){return pt(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){sn(this)?a(this).show():a(this).hide()})}});var Mt=/^(?:checkbox|radio)$/i,qr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Wr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=j.createDocumentFragment(),n=t.appendChild(j.createElement("div")),s=j.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),n.appendChild(s),M.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",M.option=!!n.lastChild})();var pe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pe.tbody=pe.tfoot=pe.colgroup=pe.caption=pe.thead,pe.th=pe.td,M.option||(pe.optgroup=pe.option=[1,"<select multiple='multiple'>","</select>"]);function fe(t,n){var s;return typeof t.getElementsByTagName<"u"?s=t.getElementsByTagName(n||"*"):typeof t.querySelectorAll<"u"?s=t.querySelectorAll(n||"*"):s=[],n===void 0||n&&X(t,n)?a.merge([t],s):s}function Ln(t,n){for(var s=0,o=t.length;s<o;s++)R.set(t[s],"globalEval",!n||R.get(n[s],"globalEval"))}var po=/<|&#?\w+;/;function Vr(t,n,s,o,u){for(var l,d,m,g,b,I,S=n.createDocumentFragment(),w=[],k=0,H=t.length;k<H;k++)if(l=t[k],l||l===0)if(Ne(l)==="object")a.merge(w,l.nodeType?[l]:l);else if(!po.test(l))w.push(n.createTextNode(l));else{for(d=d||S.appendChild(n.createElement("div")),m=(qr.exec(l)||["",""])[1].toLowerCase(),g=pe[m]||pe._default,d.innerHTML=g[1]+a.htmlPrefilter(l)+g[2],I=g[0];I--;)d=d.lastChild;a.merge(w,d.childNodes),d=S.firstChild,d.textContent=""}for(S.textContent="",k=0;l=w[k++];){if(o&&a.inArray(l,o)>-1){u&&u.push(l);continue}if(b=ht(l),d=fe(S.appendChild(l),"script"),b&&Ln(d),s)for(I=0;l=d[I++];)Wr.test(l.type||"")&&s.push(l)}return S}var zr=/^([^.]*)(?:\.(.+)|)/;function gt(){return!0}function mt(){return!1}function Mn(t,n,s,o,u,l){var d,m;if(typeof n=="object"){typeof s!="string"&&(o=o||s,s=void 0);for(m in n)Mn(t,m,s,o,n[m],l);return t}if(o==null&&u==null?(u=s,o=s=void 0):u==null&&(typeof s=="string"?(u=o,o=void 0):(u=o,o=s,s=void 0)),u===!1)u=mt;else if(!u)return t;return l===1&&(d=u,u=function(g){return a().off(g),d.apply(this,arguments)},u.guid=d.guid||(d.guid=a.guid++)),t.each(function(){a.event.add(this,n,u,o,s)})}a.event={global:{},add:function(t,n,s,o,u){var l,d,m,g,b,I,S,w,k,H,G,q=R.get(t);if(Dt(t))for(s.handler&&(l=s,s=l.handler,u=l.selector),u&&a.find.matchesSelector(tt,u),s.guid||(s.guid=a.guid++),(g=q.events)||(g=q.events=Object.create(null)),(d=q.handle)||(d=q.handle=function(se){return typeof a<"u"&&a.event.triggered!==se.type?a.event.dispatch.apply(t,arguments):void 0}),n=(n||"").match(Te)||[""],b=n.length;b--;)m=zr.exec(n[b])||[],k=G=m[1],H=(m[2]||"").split(".").sort(),k&&(S=a.event.special[k]||{},k=(u?S.delegateType:S.bindType)||k,S=a.event.special[k]||{},I=a.extend({type:k,origType:G,data:o,handler:s,guid:s.guid,selector:u,needsContext:u&&a.expr.match.needsContext.test(u),namespace:H.join(".")},l),(w=g[k])||(w=g[k]=[],w.delegateCount=0,(!S.setup||S.setup.call(t,o,H,d)===!1)&&t.addEventListener&&t.addEventListener(k,d)),S.add&&(S.add.call(t,I),I.handler.guid||(I.handler.guid=s.guid)),u?w.splice(w.delegateCount++,0,I):w.push(I),a.event.global[k]=!0)},remove:function(t,n,s,o,u){var l,d,m,g,b,I,S,w,k,H,G,q=R.hasData(t)&&R.get(t);if(!(!q||!(g=q.events))){for(n=(n||"").match(Te)||[""],b=n.length;b--;){if(m=zr.exec(n[b])||[],k=G=m[1],H=(m[2]||"").split(".").sort(),!k){for(k in g)a.event.remove(t,k+n[b],s,o,!0);continue}for(S=a.event.special[k]||{},k=(o?S.delegateType:S.bindType)||k,w=g[k]||[],m=m[2]&&new RegExp("(^|\\.)"+H.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=l=w.length;l--;)I=w[l],(u||G===I.origType)&&(!s||s.guid===I.guid)&&(!m||m.test(I.namespace))&&(!o||o===I.selector||o==="**"&&I.selector)&&(w.splice(l,1),I.selector&&w.delegateCount--,S.remove&&S.remove.call(t,I));d&&!w.length&&((!S.teardown||S.teardown.call(t,H,q.handle)===!1)&&a.removeEvent(t,k,q.handle),delete g[k])}a.isEmptyObject(g)&&R.remove(t,"handle events")}},dispatch:function(t){var n,s,o,u,l,d,m=new Array(arguments.length),g=a.event.fix(t),b=(R.get(this,"events")||Object.create(null))[g.type]||[],I=a.event.special[g.type]||{};for(m[0]=g,n=1;n<arguments.length;n++)m[n]=arguments[n];if(g.delegateTarget=this,!(I.preDispatch&&I.preDispatch.call(this,g)===!1)){for(d=a.event.handlers.call(this,g,b),n=0;(u=d[n++])&&!g.isPropagationStopped();)for(g.currentTarget=u.elem,s=0;(l=u.handlers[s++])&&!g.isImmediatePropagationStopped();)(!g.rnamespace||l.namespace===!1||g.rnamespace.test(l.namespace))&&(g.handleObj=l,g.data=l.data,o=((a.event.special[l.origType]||{}).handle||l.handler).apply(u.elem,m),o!==void 0&&(g.result=o)===!1&&(g.preventDefault(),g.stopPropagation()));return I.postDispatch&&I.postDispatch.call(this,g),g.result}},handlers:function(t,n){var s,o,u,l,d,m=[],g=n.delegateCount,b=t.target;if(g&&b.nodeType&&!(t.type==="click"&&t.button>=1)){for(;b!==this;b=b.parentNode||this)if(b.nodeType===1&&!(t.type==="click"&&b.disabled===!0)){for(l=[],d={},s=0;s<g;s++)o=n[s],u=o.selector+" ",d[u]===void 0&&(d[u]=o.needsContext?a(u,this).index(b)>-1:a.find(u,this,null,[b]).length),d[u]&&l.push(o);l.length&&m.push({elem:b,handlers:l})}}return b=this,g<n.length&&m.push({elem:b,handlers:n.slice(g)}),m},addProp:function(t,n){Object.defineProperty(a.Event.prototype,t,{enumerable:!0,configurable:!0,get:$(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(s){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:s})}})},fix:function(t){return t[a.expando]?t:new a.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var n=this||t;return Mt.test(n.type)&&n.click&&X(n,"input")&&on(n,"click",!0),!1},trigger:function(t){var n=this||t;return Mt.test(n.type)&&n.click&&X(n,"input")&&on(n,"click"),!0},_default:function(t){var n=t.target;return Mt.test(n.type)&&n.click&&X(n,"input")&&R.get(n,"click")||X(n,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function on(t,n,s){if(!s){R.get(t,n)===void 0&&a.event.add(t,n,gt);return}R.set(t,n,!1),a.event.add(t,n,{namespace:!1,handler:function(o){var u,l=R.get(this,n);if(o.isTrigger&1&&this[n]){if(l)(a.event.special[n]||{}).delegateType&&o.stopPropagation();else if(l=h.call(arguments),R.set(this,n,l),this[n](),u=R.get(this,n),R.set(this,n,!1),l!==u)return o.stopImmediatePropagation(),o.preventDefault(),u}else l&&(R.set(this,n,a.event.trigger(l[0],l.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=gt)}})}a.removeEvent=function(t,n,s){t.removeEventListener&&t.removeEventListener(n,s)},a.Event=function(t,n){if(!(this instanceof a.Event))return new a.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?gt:mt,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,n&&a.extend(this,n),this.timeStamp=t&&t.timeStamp||Date.now(),this[a.expando]=!0},a.Event.prototype={constructor:a.Event,isDefaultPrevented:mt,isPropagationStopped:mt,isImmediatePropagationStopped:mt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=gt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=gt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=gt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},a.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},a.event.addProp),a.each({focus:"focusin",blur:"focusout"},function(t,n){function s(o){if(j.documentMode){var u=R.get(this,"handle"),l=a.event.fix(o);l.type=o.type==="focusin"?"focus":"blur",l.isSimulated=!0,u(o),l.target===l.currentTarget&&u(l)}else a.event.simulate(n,o.target,a.event.fix(o))}a.event.special[t]={setup:function(){var o;if(on(this,t,!0),j.documentMode)o=R.get(this,n),o||this.addEventListener(n,s),R.set(this,n,(o||0)+1);else return!1},trigger:function(){return on(this,t),!0},teardown:function(){var o;if(j.documentMode)o=R.get(this,n)-1,o?R.set(this,n,o):(this.removeEventListener(n,s),R.remove(this,n));else return!1},_default:function(o){return R.get(o.target,t)},delegateType:n},a.event.special[n]={setup:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,l=R.get(u,n);l||(j.documentMode?this.addEventListener(n,s):o.addEventListener(t,s,!0)),R.set(u,n,(l||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,l=R.get(u,n)-1;l?R.set(u,n,l):(j.documentMode?this.removeEventListener(n,s):o.removeEventListener(t,s,!0),R.remove(u,n))}}}),a.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){a.event.special[t]={delegateType:n,bindType:n,handle:function(s){var o,u=this,l=s.relatedTarget,d=s.handleObj;return(!l||l!==u&&!a.contains(u,l))&&(s.type=d.origType,o=d.handler.apply(this,arguments),s.type=n),o}}}),a.fn.extend({on:function(t,n,s,o){return Mn(this,t,n,s,o)},one:function(t,n,s,o){return Mn(this,t,n,s,o,1)},off:function(t,n,s){var o,u;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,a(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof t=="object"){for(u in t)this.off(u,n,t[u]);return this}return(n===!1||typeof n=="function")&&(s=n,n=void 0),s===!1&&(s=mt),this.each(function(){a.event.remove(this,t,s,n)})}});var go=/<script|<style|<link/i,mo=/checked\s*(?:[^=]|=\s*.checked.)/i,vo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Gr(t,n){return X(t,"table")&&X(n.nodeType!==11?n:n.firstChild,"tr")&&a(t).children("tbody")[0]||t}function yo(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function bo(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Kr(t,n){var s,o,u,l,d,m,g;if(n.nodeType===1){if(R.hasData(t)&&(l=R.get(t),g=l.events,g)){R.remove(n,"handle events");for(u in g)for(s=0,o=g[u].length;s<o;s++)a.event.add(n,u,g[u][s])}le.hasData(t)&&(d=le.access(t),m=a.extend({},d),le.set(n,m))}}function _o(t,n){var s=n.nodeName.toLowerCase();s==="input"&&Mt.test(t.type)?n.checked=t.checked:(s==="input"||s==="textarea")&&(n.defaultValue=t.defaultValue)}function vt(t,n,s,o){n=v(n);var u,l,d,m,g,b,I=0,S=t.length,w=S-1,k=n[0],H=$(k);if(H||S>1&&typeof k=="string"&&!M.checkClone&&mo.test(k))return t.each(function(G){var q=t.eq(G);H&&(n[0]=k.call(this,G,q.html())),vt(q,n,s,o)});if(S&&(u=Vr(n,t[0].ownerDocument,!1,t,o),l=u.firstChild,u.childNodes.length===1&&(u=l),l||o)){for(d=a.map(fe(u,"script"),yo),m=d.length;I<S;I++)g=u,I!==w&&(g=a.clone(g,!0,!0),m&&a.merge(d,fe(g,"script"))),s.call(t[I],g,I);if(m)for(b=d[d.length-1].ownerDocument,a.map(d,bo),I=0;I<m;I++)g=d[I],Wr.test(g.type||"")&&!R.access(g,"globalEval")&&a.contains(b,g)&&(g.src&&(g.type||"").toLowerCase()!=="module"?a._evalUrl&&!g.noModule&&a._evalUrl(g.src,{nonce:g.nonce||g.getAttribute("nonce")},b):lt(g.textContent.replace(vo,""),g,b))}return t}function Jr(t,n,s){for(var o,u=n?a.filter(n,t):t,l=0;(o=u[l])!=null;l++)!s&&o.nodeType===1&&a.cleanData(fe(o)),o.parentNode&&(s&&ht(o)&&Ln(fe(o,"script")),o.parentNode.removeChild(o));return t}a.extend({htmlPrefilter:function(t){return t},clone:function(t,n,s){var o,u,l,d,m=t.cloneNode(!0),g=ht(t);if(!M.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!a.isXMLDoc(t))for(d=fe(m),l=fe(t),o=0,u=l.length;o<u;o++)_o(l[o],d[o]);if(n)if(s)for(l=l||fe(t),d=d||fe(m),o=0,u=l.length;o<u;o++)Kr(l[o],d[o]);else Kr(t,m);return d=fe(m,"script"),d.length>0&&Ln(d,!g&&fe(t,"script")),m},cleanData:function(t){for(var n,s,o,u=a.event.special,l=0;(s=t[l])!==void 0;l++)if(Dt(s)){if(n=s[R.expando]){if(n.events)for(o in n.events)u[o]?a.event.remove(s,o):a.removeEvent(s,o,n.handle);s[R.expando]=void 0}s[le.expando]&&(s[le.expando]=void 0)}}}),a.fn.extend({detach:function(t){return Jr(this,t,!0)},remove:function(t){return Jr(this,t)},text:function(t){return De(this,function(n){return n===void 0?a.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,t,arguments.length)},append:function(){return vt(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Gr(this,t);n.appendChild(t)}})},prepend:function(){return vt(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Gr(this,t);n.insertBefore(t,n.firstChild)}})},before:function(){return vt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return vt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,n=0;(t=this[n])!=null;n++)t.nodeType===1&&(a.cleanData(fe(t,!1)),t.textContent="");return this},clone:function(t,n){return t=t??!1,n=n??t,this.map(function(){return a.clone(this,t,n)})},html:function(t){return De(this,function(n){var s=this[0]||{},o=0,u=this.length;if(n===void 0&&s.nodeType===1)return s.innerHTML;if(typeof n=="string"&&!go.test(n)&&!pe[(qr.exec(n)||["",""])[1].toLowerCase()]){n=a.htmlPrefilter(n);try{for(;o<u;o++)s=this[o]||{},s.nodeType===1&&(a.cleanData(fe(s,!1)),s.innerHTML=n);s=0}catch{}}s&&this.empty().append(n)},null,t,arguments.length)},replaceWith:function(){var t=[];return vt(this,arguments,function(n){var s=this.parentNode;a.inArray(this,t)<0&&(a.cleanData(fe(this)),s&&s.replaceChild(n,this))},t)}}),a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){a.fn[t]=function(s){for(var o,u=[],l=a(s),d=l.length-1,m=0;m<=d;m++)o=m===d?this:this.clone(!0),a(l[m])[n](o),A.apply(u,o.get());return this.pushStack(u)}});var Un=new RegExp("^("+Fr+")(?!px)[a-z%]+$","i"),jn=/^--/,an=function(t){var n=t.ownerDocument.defaultView;return(!n||!n.opener)&&(n=e),n.getComputedStyle(t)},Xr=function(t,n,s){var o,u,l={};for(u in n)l[u]=t.style[u],t.style[u]=n[u];o=s.call(t);for(u in n)t.style[u]=l[u];return o},wo=new RegExp(Re.join("|"),"i");(function(){function t(){if(b){g.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",tt.appendChild(g).appendChild(b);var I=e.getComputedStyle(b);s=I.top!=="1%",m=n(I.marginLeft)===12,b.style.right="60%",l=n(I.right)===36,o=n(I.width)===36,b.style.position="absolute",u=n(b.offsetWidth/3)===12,tt.removeChild(g),b=null}}function n(I){return Math.round(parseFloat(I))}var s,o,u,l,d,m,g=j.createElement("div"),b=j.createElement("div");b.style&&(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=b.style.backgroundClip==="content-box",a.extend(M,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),l},pixelPosition:function(){return t(),s},reliableMarginLeft:function(){return t(),m},scrollboxSize:function(){return t(),u},reliableTrDimensions:function(){var I,S,w,k;return d==null&&(I=j.createElement("table"),S=j.createElement("tr"),w=j.createElement("div"),I.style.cssText="position:absolute;left:-11111px;border-collapse:separate",S.style.cssText="box-sizing:content-box;border:1px solid",S.style.height="1px",w.style.height="9px",w.style.display="block",tt.appendChild(I).appendChild(S).appendChild(w),k=e.getComputedStyle(S),d=parseInt(k.height,10)+parseInt(k.borderTopWidth,10)+parseInt(k.borderBottomWidth,10)===S.offsetHeight,tt.removeChild(I)),d}}))})();function Ut(t,n,s){var o,u,l,d,m=jn.test(n),g=t.style;return s=s||an(t),s&&(d=s.getPropertyValue(n)||s[n],m&&d&&(d=d.replace(Ot,"$1")||void 0),d===""&&!ht(t)&&(d=a.style(t,n)),!M.pixelBoxStyles()&&Un.test(d)&&wo.test(n)&&(o=g.width,u=g.minWidth,l=g.maxWidth,g.minWidth=g.maxWidth=g.width=d,d=s.width,g.width=o,g.minWidth=u,g.maxWidth=l)),d!==void 0?d+"":d}function Yr(t,n){return{get:function(){if(t()){delete this.get;return}return(this.get=n).apply(this,arguments)}}}var Qr=["Webkit","Moz","ms"],Zr=j.createElement("div").style,ei={};function To(t){for(var n=t[0].toUpperCase()+t.slice(1),s=Qr.length;s--;)if(t=Qr[s]+n,t in Zr)return t}function Hn(t){var n=a.cssProps[t]||ei[t];return n||(t in Zr?t:ei[t]=To(t)||t)}var Io=/^(none|table(?!-c[ea]).+)/,Eo={position:"absolute",visibility:"hidden",display:"block"},ti={letterSpacing:"0",fontWeight:"400"};function ni(t,n,s){var o=Lt.exec(n);return o?Math.max(0,o[2]-(s||0))+(o[3]||"px"):n}function Fn(t,n,s,o,u,l){var d=n==="width"?1:0,m=0,g=0,b=0;if(s===(o?"border":"content"))return 0;for(;d<4;d+=2)s==="margin"&&(b+=a.css(t,s+Re[d],!0,u)),o?(s==="content"&&(g-=a.css(t,"padding"+Re[d],!0,u)),s!=="margin"&&(g-=a.css(t,"border"+Re[d]+"Width",!0,u))):(g+=a.css(t,"padding"+Re[d],!0,u),s!=="padding"?g+=a.css(t,"border"+Re[d]+"Width",!0,u):m+=a.css(t,"border"+Re[d]+"Width",!0,u));return!o&&l>=0&&(g+=Math.max(0,Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-l-g-m-.5))||0),g+b}function ri(t,n,s){var o=an(t),u=!M.boxSizingReliable()||s,l=u&&a.css(t,"boxSizing",!1,o)==="border-box",d=l,m=Ut(t,n,o),g="offset"+n[0].toUpperCase()+n.slice(1);if(Un.test(m)){if(!s)return m;m="auto"}return(!M.boxSizingReliable()&&l||!M.reliableTrDimensions()&&X(t,"tr")||m==="auto"||!parseFloat(m)&&a.css(t,"display",!1,o)==="inline")&&t.getClientRects().length&&(l=a.css(t,"boxSizing",!1,o)==="border-box",d=g in t,d&&(m=t[g])),m=parseFloat(m)||0,m+Fn(t,n,s||(l?"border":"content"),d,o,m)+"px"}a.extend({cssHooks:{opacity:{get:function(t,n){if(n){var s=Ut(t,"opacity");return s===""?"1":s}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,n,s,o){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var u,l,d,m=Ie(n),g=jn.test(n),b=t.style;if(g||(n=Hn(m)),d=a.cssHooks[n]||a.cssHooks[m],s!==void 0){if(l=typeof s,l==="string"&&(u=Lt.exec(s))&&u[1]&&(s=Br(t,n,u),l="number"),s==null||s!==s)return;l==="number"&&!g&&(s+=u&&u[3]||(a.cssNumber[m]?"":"px")),!M.clearCloneStyle&&s===""&&n.indexOf("background")===0&&(b[n]="inherit"),(!d||!("set"in d)||(s=d.set(t,s,o))!==void 0)&&(g?b.setProperty(n,s):b[n]=s)}else return d&&"get"in d&&(u=d.get(t,!1,o))!==void 0?u:b[n]}},css:function(t,n,s,o){var u,l,d,m=Ie(n),g=jn.test(n);return g||(n=Hn(m)),d=a.cssHooks[n]||a.cssHooks[m],d&&"get"in d&&(u=d.get(t,!0,s)),u===void 0&&(u=Ut(t,n,o)),u==="normal"&&n in ti&&(u=ti[n]),s===""||s?(l=parseFloat(u),s===!0||isFinite(l)?l||0:u):u}}),a.each(["height","width"],function(t,n){a.cssHooks[n]={get:function(s,o,u){if(o)return Io.test(a.css(s,"display"))&&(!s.getClientRects().length||!s.getBoundingClientRect().width)?Xr(s,Eo,function(){return ri(s,n,u)}):ri(s,n,u)},set:function(s,o,u){var l,d=an(s),m=!M.scrollboxSize()&&d.position==="absolute",g=m||u,b=g&&a.css(s,"boxSizing",!1,d)==="border-box",I=u?Fn(s,n,u,b,d):0;return b&&m&&(I-=Math.ceil(s["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(d[n])-Fn(s,n,"border",!1,d)-.5)),I&&(l=Lt.exec(o))&&(l[3]||"px")!=="px"&&(s.style[n]=o,o=a.css(s,n)),ni(s,o,I)}}}),a.cssHooks.marginLeft=Yr(M.reliableMarginLeft,function(t,n){if(n)return(parseFloat(Ut(t,"marginLeft"))||t.getBoundingClientRect().left-Xr(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),a.each({margin:"",padding:"",border:"Width"},function(t,n){a.cssHooks[t+n]={expand:function(s){for(var o=0,u={},l=typeof s=="string"?s.split(" "):[s];o<4;o++)u[t+Re[o]+n]=l[o]||l[o-2]||l[0];return u}},t!=="margin"&&(a.cssHooks[t+n].set=ni)}),a.fn.extend({css:function(t,n){return De(this,function(s,o,u){var l,d,m={},g=0;if(Array.isArray(o)){for(l=an(s),d=o.length;g<d;g++)m[o[g]]=a.css(s,o[g],!1,l);return m}return u!==void 0?a.style(s,o,u):a.css(s,o)},t,n,arguments.length>1)}});function de(t,n,s,o,u){return new de.prototype.init(t,n,s,o,u)}a.Tween=de,de.prototype={constructor:de,init:function(t,n,s,o,u,l){this.elem=t,this.prop=s,this.easing=u||a.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=o,this.unit=l||(a.cssNumber[s]?"":"px")},cur:function(){var t=de.propHooks[this.prop];return t&&t.get?t.get(this):de.propHooks._default.get(this)},run:function(t){var n,s=de.propHooks[this.prop];return this.options.duration?this.pos=n=a.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=n=t,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),s&&s.set?s.set(this):de.propHooks._default.set(this),this}},de.prototype.init.prototype=de.prototype,de.propHooks={_default:{get:function(t){var n;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(n=a.css(t.elem,t.prop,""),!n||n==="auto"?0:n)},set:function(t){a.fx.step[t.prop]?a.fx.step[t.prop](t):t.elem.nodeType===1&&(a.cssHooks[t.prop]||t.elem.style[Hn(t.prop)]!=null)?a.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},de.propHooks.scrollTop=de.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},a.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},a.fx=de.prototype.init,a.fx.step={};var yt,cn,So=/^(?:toggle|show|hide)$/,Co=/queueHooks$/;function Bn(){cn&&(j.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Bn):e.setTimeout(Bn,a.fx.interval),a.fx.tick())}function ii(){return e.setTimeout(function(){yt=void 0}),yt=Date.now()}function un(t,n){var s,o=0,u={height:t};for(n=n?1:0;o<4;o+=2-n)s=Re[o],u["margin"+s]=u["padding"+s]=t;return n&&(u.opacity=u.width=t),u}function si(t,n,s){for(var o,u=(ye.tweeners[n]||[]).concat(ye.tweeners["*"]),l=0,d=u.length;l<d;l++)if(o=u[l].call(s,n,t))return o}function Ao(t,n,s){var o,u,l,d,m,g,b,I,S="width"in n||"height"in n,w=this,k={},H=t.style,G=t.nodeType&&sn(t),q=R.get(t,"fxshow");s.queue||(d=a._queueHooks(t,"fx"),d.unqueued==null&&(d.unqueued=0,m=d.empty.fire,d.empty.fire=function(){d.unqueued||m()}),d.unqueued++,w.always(function(){w.always(function(){d.unqueued--,a.queue(t,"fx").length||d.empty.fire()})}));for(o in n)if(u=n[o],So.test(u)){if(delete n[o],l=l||u==="toggle",u===(G?"hide":"show"))if(u==="show"&&q&&q[o]!==void 0)G=!0;else continue;k[o]=q&&q[o]||a.style(t,o)}if(g=!a.isEmptyObject(n),!(!g&&a.isEmptyObject(k))){S&&t.nodeType===1&&(s.overflow=[H.overflow,H.overflowX,H.overflowY],b=q&&q.display,b==null&&(b=R.get(t,"display")),I=a.css(t,"display"),I==="none"&&(b?I=b:(pt([t],!0),b=t.style.display||b,I=a.css(t,"display"),pt([t]))),(I==="inline"||I==="inline-block"&&b!=null)&&a.css(t,"float")==="none"&&(g||(w.done(function(){H.display=b}),b==null&&(I=H.display,b=I==="none"?"":I)),H.display="inline-block")),s.overflow&&(H.overflow="hidden",w.always(function(){H.overflow=s.overflow[0],H.overflowX=s.overflow[1],H.overflowY=s.overflow[2]})),g=!1;for(o in k)g||(q?"hidden"in q&&(G=q.hidden):q=R.access(t,"fxshow",{display:b}),l&&(q.hidden=!G),G&&pt([t],!0),w.done(function(){G||pt([t]),R.remove(t,"fxshow");for(o in k)a.style(t,o,k[o])})),g=si(G?q[o]:0,o,w),o in q||(q[o]=g.start,G&&(g.end=g.start,g.start=0))}}function ko(t,n){var s,o,u,l,d;for(s in t)if(o=Ie(s),u=n[o],l=t[s],Array.isArray(l)&&(u=l[1],l=t[s]=l[0]),s!==o&&(t[o]=l,delete t[s]),d=a.cssHooks[o],d&&"expand"in d){l=d.expand(l),delete t[o];for(s in l)s in t||(t[s]=l[s],n[s]=u)}else n[o]=u}function ye(t,n,s){var o,u,l=0,d=ye.prefilters.length,m=a.Deferred().always(function(){delete g.elem}),g=function(){if(u)return!1;for(var S=yt||ii(),w=Math.max(0,b.startTime+b.duration-S),k=w/b.duration||0,H=1-k,G=0,q=b.tweens.length;G<q;G++)b.tweens[G].run(H);return m.notifyWith(t,[b,H,w]),H<1&&q?w:(q||m.notifyWith(t,[b,1,0]),m.resolveWith(t,[b]),!1)},b=m.promise({elem:t,props:a.extend({},n),opts:a.extend(!0,{specialEasing:{},easing:a.easing._default},s),originalProperties:n,originalOptions:s,startTime:yt||ii(),duration:s.duration,tweens:[],createTween:function(S,w){var k=a.Tween(t,b.opts,S,w,b.opts.specialEasing[S]||b.opts.easing);return b.tweens.push(k),k},stop:function(S){var w=0,k=S?b.tweens.length:0;if(u)return this;for(u=!0;w<k;w++)b.tweens[w].run(1);return S?(m.notifyWith(t,[b,1,0]),m.resolveWith(t,[b,S])):m.rejectWith(t,[b,S]),this}}),I=b.props;for(ko(I,b.opts.specialEasing);l<d;l++)if(o=ye.prefilters[l].call(b,t,I,b.opts),o)return $(o.stop)&&(a._queueHooks(b.elem,b.opts.queue).stop=o.stop.bind(o)),o;return a.map(I,si,b),$(b.opts.start)&&b.opts.start.call(t,b),b.progress(b.opts.progress).done(b.opts.done,b.opts.complete).fail(b.opts.fail).always(b.opts.always),a.fx.timer(a.extend(g,{elem:t,anim:b,queue:b.opts.queue})),b}a.Animation=a.extend(ye,{tweeners:{"*":[function(t,n){var s=this.createTween(t,n);return Br(s.elem,t,Lt.exec(n),s),s}]},tweener:function(t,n){$(t)?(n=t,t=["*"]):t=t.match(Te);for(var s,o=0,u=t.length;o<u;o++)s=t[o],ye.tweeners[s]=ye.tweeners[s]||[],ye.tweeners[s].unshift(n)},prefilters:[Ao],prefilter:function(t,n){n?ye.prefilters.unshift(t):ye.prefilters.push(t)}}),a.speed=function(t,n,s){var o=t&&typeof t=="object"?a.extend({},t):{complete:s||!s&&n||$(t)&&t,duration:t,easing:s&&n||n&&!$(n)&&n};return a.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in a.fx.speeds?o.duration=a.fx.speeds[o.duration]:o.duration=a.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){$(o.old)&&o.old.call(this),o.queue&&a.dequeue(this,o.queue)},o},a.fn.extend({fadeTo:function(t,n,s,o){return this.filter(sn).css("opacity",0).show().end().animate({opacity:n},t,s,o)},animate:function(t,n,s,o){var u=a.isEmptyObject(t),l=a.speed(n,s,o),d=function(){var m=ye(this,a.extend({},t),l);(u||R.get(this,"finish"))&&m.stop(!0)};return d.finish=d,u||l.queue===!1?this.each(d):this.queue(l.queue,d)},stop:function(t,n,s){var o=function(u){var l=u.stop;delete u.stop,l(s)};return typeof t!="string"&&(s=n,n=t,t=void 0),n&&this.queue(t||"fx",[]),this.each(function(){var u=!0,l=t!=null&&t+"queueHooks",d=a.timers,m=R.get(this);if(l)m[l]&&m[l].stop&&o(m[l]);else for(l in m)m[l]&&m[l].stop&&Co.test(l)&&o(m[l]);for(l=d.length;l--;)d[l].elem===this&&(t==null||d[l].queue===t)&&(d[l].anim.stop(s),u=!1,d.splice(l,1));(u||!s)&&a.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,s=R.get(this),o=s[t+"queue"],u=s[t+"queueHooks"],l=a.timers,d=o?o.length:0;for(s.finish=!0,a.queue(this,t,[]),u&&u.stop&&u.stop.call(this,!0),n=l.length;n--;)l[n].elem===this&&l[n].queue===t&&(l[n].anim.stop(!0),l.splice(n,1));for(n=0;n<d;n++)o[n]&&o[n].finish&&o[n].finish.call(this);delete s.finish})}}),a.each(["toggle","show","hide"],function(t,n){var s=a.fn[n];a.fn[n]=function(o,u,l){return o==null||typeof o=="boolean"?s.apply(this,arguments):this.animate(un(n,!0),o,u,l)}}),a.each({slideDown:un("show"),slideUp:un("hide"),slideToggle:un("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){a.fn[t]=function(s,o,u){return this.animate(n,s,o,u)}}),a.timers=[],a.fx.tick=function(){var t,n=0,s=a.timers;for(yt=Date.now();n<s.length;n++)t=s[n],!t()&&s[n]===t&&s.splice(n--,1);s.length||a.fx.stop(),yt=void 0},a.fx.timer=function(t){a.timers.push(t),a.fx.start()},a.fx.interval=13,a.fx.start=function(){cn||(cn=!0,Bn())},a.fx.stop=function(){cn=null},a.fx.speeds={slow:600,fast:200,_default:400},a.fn.delay=function(t,n){return t=a.fx&&a.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(s,o){var u=e.setTimeout(s,t);o.stop=function(){e.clearTimeout(u)}})},function(){var t=j.createElement("input"),n=j.createElement("select"),s=n.appendChild(j.createElement("option"));t.type="checkbox",M.checkOn=t.value!=="",M.optSelected=s.selected,t=j.createElement("input"),t.value="t",t.type="radio",M.radioValue=t.value==="t"}();var oi,jt=a.expr.attrHandle;a.fn.extend({attr:function(t,n){return De(this,a.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each(function(){a.removeAttr(this,t)})}}),a.extend({attr:function(t,n,s){var o,u,l=t.nodeType;if(!(l===3||l===8||l===2)){if(typeof t.getAttribute>"u")return a.prop(t,n,s);if((l!==1||!a.isXMLDoc(t))&&(u=a.attrHooks[n.toLowerCase()]||(a.expr.match.bool.test(n)?oi:void 0)),s!==void 0){if(s===null){a.removeAttr(t,n);return}return u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:(t.setAttribute(n,s+""),s)}return u&&"get"in u&&(o=u.get(t,n))!==null?o:(o=a.find.attr(t,n),o??void 0)}},attrHooks:{type:{set:function(t,n){if(!M.radioValue&&n==="radio"&&X(t,"input")){var s=t.value;return t.setAttribute("type",n),s&&(t.value=s),n}}}},removeAttr:function(t,n){var s,o=0,u=n&&n.match(Te);if(u&&t.nodeType===1)for(;s=u[o++];)t.removeAttribute(s)}}),oi={set:function(t,n,s){return n===!1?a.removeAttr(t,s):t.setAttribute(s,s),s}},a.each(a.expr.match.bool.source.match(/\w+/g),function(t,n){var s=jt[n]||a.find.attr;jt[n]=function(o,u,l){var d,m,g=u.toLowerCase();return l||(m=jt[g],jt[g]=d,d=s(o,u,l)!=null?g:null,jt[g]=m),d}});var xo=/^(?:input|select|textarea|button)$/i,Po=/^(?:a|area)$/i;a.fn.extend({prop:function(t,n){return De(this,a.prop,t,n,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[a.propFix[t]||t]})}}),a.extend({prop:function(t,n,s){var o,u,l=t.nodeType;if(!(l===3||l===8||l===2))return(l!==1||!a.isXMLDoc(t))&&(n=a.propFix[n]||n,u=a.propHooks[n]),s!==void 0?u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:t[n]=s:u&&"get"in u&&(o=u.get(t,n))!==null?o:t[n]},propHooks:{tabIndex:{get:function(t){var n=a.find.attr(t,"tabindex");return n?parseInt(n,10):xo.test(t.nodeName)||Po.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(a.propHooks.selected={get:function(t){var n=t.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(t){var n=t.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),a.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){a.propFix[this.toLowerCase()]=this});function nt(t){var n=t.match(Te)||[];return n.join(" ")}function rt(t){return t.getAttribute&&t.getAttribute("class")||""}function $n(t){return Array.isArray(t)?t:typeof t=="string"?t.match(Te)||[]:[]}a.fn.extend({addClass:function(t){var n,s,o,u,l,d;return $(t)?this.each(function(m){a(this).addClass(t.call(this,m,rt(this)))}):(n=$n(t),n.length?this.each(function(){if(o=rt(this),s=this.nodeType===1&&" "+nt(o)+" ",s){for(l=0;l<n.length;l++)u=n[l],s.indexOf(" "+u+" ")<0&&(s+=u+" ");d=nt(s),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(t){var n,s,o,u,l,d;return $(t)?this.each(function(m){a(this).removeClass(t.call(this,m,rt(this)))}):arguments.length?(n=$n(t),n.length?this.each(function(){if(o=rt(this),s=this.nodeType===1&&" "+nt(o)+" ",s){for(l=0;l<n.length;l++)for(u=n[l];s.indexOf(" "+u+" ")>-1;)s=s.replace(" "+u+" "," ");d=nt(s),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(t,n){var s,o,u,l,d=typeof t,m=d==="string"||Array.isArray(t);return $(t)?this.each(function(g){a(this).toggleClass(t.call(this,g,rt(this),n),n)}):typeof n=="boolean"&&m?n?this.addClass(t):this.removeClass(t):(s=$n(t),this.each(function(){if(m)for(l=a(this),u=0;u<s.length;u++)o=s[u],l.hasClass(o)?l.removeClass(o):l.addClass(o);else(t===void 0||d==="boolean")&&(o=rt(this),o&&R.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||t===!1?"":R.get(this,"__className__")||""))}))},hasClass:function(t){var n,s,o=0;for(n=" "+t+" ";s=this[o++];)if(s.nodeType===1&&(" "+nt(rt(s))+" ").indexOf(n)>-1)return!0;return!1}});var No=/\r/g;a.fn.extend({val:function(t){var n,s,o,u=this[0];return arguments.length?(o=$(t),this.each(function(l){var d;this.nodeType===1&&(o?d=t.call(this,l,a(this).val()):d=t,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=a.map(d,function(m){return m==null?"":m+""})),n=a.valHooks[this.type]||a.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||n.set(this,d,"value")===void 0)&&(this.value=d))})):u?(n=a.valHooks[u.type]||a.valHooks[u.nodeName.toLowerCase()],n&&"get"in n&&(s=n.get(u,"value"))!==void 0?s:(s=u.value,typeof s=="string"?s.replace(No,""):s??"")):void 0}}),a.extend({valHooks:{option:{get:function(t){var n=a.find.attr(t,"value");return n??nt(a.text(t))}},select:{get:function(t){var n,s,o,u=t.options,l=t.selectedIndex,d=t.type==="select-one",m=d?null:[],g=d?l+1:u.length;for(l<0?o=g:o=d?l:0;o<g;o++)if(s=u[o],(s.selected||o===l)&&!s.disabled&&(!s.parentNode.disabled||!X(s.parentNode,"optgroup"))){if(n=a(s).val(),d)return n;m.push(n)}return m},set:function(t,n){for(var s,o,u=t.options,l=a.makeArray(n),d=u.length;d--;)o=u[d],(o.selected=a.inArray(a.valHooks.option.get(o),l)>-1)&&(s=!0);return s||(t.selectedIndex=-1),l}}}}),a.each(["radio","checkbox"],function(){a.valHooks[this]={set:function(t,n){if(Array.isArray(n))return t.checked=a.inArray(a(t).val(),n)>-1}},M.checkOn||(a.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Ht=e.location,ai={guid:Date.now()},qn=/\?/;a.parseXML=function(t){var n,s;if(!t||typeof t!="string")return null;try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch{}return s=n&&n.getElementsByTagName("parsererror")[0],(!n||s)&&a.error("Invalid XML: "+(s?a.map(s.childNodes,function(o){return o.textContent}).join(`
`):t)),n};var ci=/^(?:focusinfocus|focusoutblur)$/,ui=function(t){t.stopPropagation()};a.extend(a.event,{trigger:function(t,n,s,o){var u,l,d,m,g,b,I,S,w=[s||j],k=Q.call(t,"type")?t.type:t,H=Q.call(t,"namespace")?t.namespace.split("."):[];if(l=S=d=s=s||j,!(s.nodeType===3||s.nodeType===8)&&!ci.test(k+a.event.triggered)&&(k.indexOf(".")>-1&&(H=k.split("."),k=H.shift(),H.sort()),g=k.indexOf(":")<0&&"on"+k,t=t[a.expando]?t:new a.Event(k,typeof t=="object"&&t),t.isTrigger=o?2:3,t.namespace=H.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+H.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=s),n=n==null?[t]:a.makeArray(n,[t]),I=a.event.special[k]||{},!(!o&&I.trigger&&I.trigger.apply(s,n)===!1))){if(!o&&!I.noBubble&&!we(s)){for(m=I.delegateType||k,ci.test(m+k)||(l=l.parentNode);l;l=l.parentNode)w.push(l),d=l;d===(s.ownerDocument||j)&&w.push(d.defaultView||d.parentWindow||e)}for(u=0;(l=w[u++])&&!t.isPropagationStopped();)S=l,t.type=u>1?m:I.bindType||k,b=(R.get(l,"events")||Object.create(null))[t.type]&&R.get(l,"handle"),b&&b.apply(l,n),b=g&&l[g],b&&b.apply&&Dt(l)&&(t.result=b.apply(l,n),t.result===!1&&t.preventDefault());return t.type=k,!o&&!t.isDefaultPrevented()&&(!I._default||I._default.apply(w.pop(),n)===!1)&&Dt(s)&&g&&$(s[k])&&!we(s)&&(d=s[g],d&&(s[g]=null),a.event.triggered=k,t.isPropagationStopped()&&S.addEventListener(k,ui),s[k](),t.isPropagationStopped()&&S.removeEventListener(k,ui),a.event.triggered=void 0,d&&(s[g]=d)),t.result}},simulate:function(t,n,s){var o=a.extend(new a.Event,s,{type:t,isSimulated:!0});a.event.trigger(o,null,n)}}),a.fn.extend({trigger:function(t,n){return this.each(function(){a.event.trigger(t,n,this)})},triggerHandler:function(t,n){var s=this[0];if(s)return a.event.trigger(t,n,s,!0)}});var Oo=/\[\]$/,li=/\r?\n/g,Do=/^(?:submit|button|image|reset|file)$/i,Ro=/^(?:input|select|textarea|keygen)/i;function Wn(t,n,s,o){var u;if(Array.isArray(n))a.each(n,function(l,d){s||Oo.test(t)?o(t,d):Wn(t+"["+(typeof d=="object"&&d!=null?l:"")+"]",d,s,o)});else if(!s&&Ne(n)==="object")for(u in n)Wn(t+"["+u+"]",n[u],s,o);else o(t,n)}a.param=function(t,n){var s,o=[],u=function(l,d){var m=$(d)?d():d;o[o.length]=encodeURIComponent(l)+"="+encodeURIComponent(m??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!a.isPlainObject(t))a.each(t,function(){u(this.name,this.value)});else for(s in t)Wn(s,t[s],n,u);return o.join("&")},a.fn.extend({serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=a.prop(this,"elements");return t?a.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!a(this).is(":disabled")&&Ro.test(this.nodeName)&&!Do.test(t)&&(this.checked||!Mt.test(t))}).map(function(t,n){var s=a(this).val();return s==null?null:Array.isArray(s)?a.map(s,function(o){return{name:n.name,value:o.replace(li,`\r
`)}}):{name:n.name,value:s.replace(li,`\r
`)}}).get()}});var Lo=/%20/g,Mo=/#.*$/,Uo=/([?&])_=[^&]*/,jo=/^(.*?):[ \t]*([^\r\n]*)$/mg,Ho=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fo=/^(?:GET|HEAD)$/,Bo=/^\/\//,fi={},Vn={},di="*/".concat("*"),zn=j.createElement("a");zn.href=Ht.href;function hi(t){return function(n,s){typeof n!="string"&&(s=n,n="*");var o,u=0,l=n.toLowerCase().match(Te)||[];if($(s))for(;o=l[u++];)o[0]==="+"?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(s)):(t[o]=t[o]||[]).push(s)}}function pi(t,n,s,o){var u={},l=t===Vn;function d(m){var g;return u[m]=!0,a.each(t[m]||[],function(b,I){var S=I(n,s,o);if(typeof S=="string"&&!l&&!u[S])return n.dataTypes.unshift(S),d(S),!1;if(l)return!(g=S)}),g}return d(n.dataTypes[0])||!u["*"]&&d("*")}function Gn(t,n){var s,o,u=a.ajaxSettings.flatOptions||{};for(s in n)n[s]!==void 0&&((u[s]?t:o||(o={}))[s]=n[s]);return o&&a.extend(!0,t,o),t}function $o(t,n,s){for(var o,u,l,d,m=t.contents,g=t.dataTypes;g[0]==="*";)g.shift(),o===void 0&&(o=t.mimeType||n.getResponseHeader("Content-Type"));if(o){for(u in m)if(m[u]&&m[u].test(o)){g.unshift(u);break}}if(g[0]in s)l=g[0];else{for(u in s){if(!g[0]||t.converters[u+" "+g[0]]){l=u;break}d||(d=u)}l=l||d}if(l)return l!==g[0]&&g.unshift(l),s[l]}function qo(t,n,s,o){var u,l,d,m,g,b={},I=t.dataTypes.slice();if(I[1])for(d in t.converters)b[d.toLowerCase()]=t.converters[d];for(l=I.shift();l;)if(t.responseFields[l]&&(s[t.responseFields[l]]=n),!g&&o&&t.dataFilter&&(n=t.dataFilter(n,t.dataType)),g=l,l=I.shift(),l){if(l==="*")l=g;else if(g!=="*"&&g!==l){if(d=b[g+" "+l]||b["* "+l],!d){for(u in b)if(m=u.split(" "),m[1]===l&&(d=b[g+" "+m[0]]||b["* "+m[0]],d)){d===!0?d=b[u]:b[u]!==!0&&(l=m[0],I.unshift(m[1]));break}}if(d!==!0)if(d&&t.throws)n=d(n);else try{n=d(n)}catch(S){return{state:"parsererror",error:d?S:"No conversion from "+g+" to "+l}}}}return{state:"success",data:n}}a.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ht.href,type:"GET",isLocal:Ho.test(Ht.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":di,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":a.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?Gn(Gn(t,a.ajaxSettings),n):Gn(a.ajaxSettings,t)},ajaxPrefilter:hi(fi),ajaxTransport:hi(Vn),ajax:function(t,n){typeof t=="object"&&(n=t,t=void 0),n=n||{};var s,o,u,l,d,m,g,b,I,S,w=a.ajaxSetup({},n),k=w.context||w,H=w.context&&(k.nodeType||k.jquery)?a(k):a.event,G=a.Deferred(),q=a.Callbacks("once memory"),se=w.statusCode||{},re={},Ee={},Se="canceled",z={readyState:0,getResponseHeader:function(K){var ne;if(g){if(!l)for(l={};ne=jo.exec(u);)l[ne[1].toLowerCase()+" "]=(l[ne[1].toLowerCase()+" "]||[]).concat(ne[2]);ne=l[K.toLowerCase()+" "]}return ne==null?null:ne.join(", ")},getAllResponseHeaders:function(){return g?u:null},setRequestHeader:function(K,ne){return g==null&&(K=Ee[K.toLowerCase()]=Ee[K.toLowerCase()]||K,re[K]=ne),this},overrideMimeType:function(K){return g==null&&(w.mimeType=K),this},statusCode:function(K){var ne;if(K)if(g)z.always(K[z.status]);else for(ne in K)se[ne]=[se[ne],K[ne]];return this},abort:function(K){var ne=K||Se;return s&&s.abort(ne),it(0,ne),this}};if(G.promise(z),w.url=((t||w.url||Ht.href)+"").replace(Bo,Ht.protocol+"//"),w.type=n.method||n.type||w.method||w.type,w.dataTypes=(w.dataType||"*").toLowerCase().match(Te)||[""],w.crossDomain==null){m=j.createElement("a");try{m.href=w.url,m.href=m.href,w.crossDomain=zn.protocol+"//"+zn.host!=m.protocol+"//"+m.host}catch{w.crossDomain=!0}}if(w.data&&w.processData&&typeof w.data!="string"&&(w.data=a.param(w.data,w.traditional)),pi(fi,w,n,z),g)return z;b=a.event&&w.global,b&&a.active++===0&&a.event.trigger("ajaxStart"),w.type=w.type.toUpperCase(),w.hasContent=!Fo.test(w.type),o=w.url.replace(Mo,""),w.hasContent?w.data&&w.processData&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(w.data=w.data.replace(Lo,"+")):(S=w.url.slice(o.length),w.data&&(w.processData||typeof w.data=="string")&&(o+=(qn.test(o)?"&":"?")+w.data,delete w.data),w.cache===!1&&(o=o.replace(Uo,"$1"),S=(qn.test(o)?"&":"?")+"_="+ai.guid+++S),w.url=o+S),w.ifModified&&(a.lastModified[o]&&z.setRequestHeader("If-Modified-Since",a.lastModified[o]),a.etag[o]&&z.setRequestHeader("If-None-Match",a.etag[o])),(w.data&&w.hasContent&&w.contentType!==!1||n.contentType)&&z.setRequestHeader("Content-Type",w.contentType),z.setRequestHeader("Accept",w.dataTypes[0]&&w.accepts[w.dataTypes[0]]?w.accepts[w.dataTypes[0]]+(w.dataTypes[0]!=="*"?", "+di+"; q=0.01":""):w.accepts["*"]);for(I in w.headers)z.setRequestHeader(I,w.headers[I]);if(w.beforeSend&&(w.beforeSend.call(k,z,w)===!1||g))return z.abort();if(Se="abort",q.add(w.complete),z.done(w.success),z.fail(w.error),s=pi(Vn,w,n,z),!s)it(-1,"No Transport");else{if(z.readyState=1,b&&H.trigger("ajaxSend",[z,w]),g)return z;w.async&&w.timeout>0&&(d=e.setTimeout(function(){z.abort("timeout")},w.timeout));try{g=!1,s.send(re,it)}catch(K){if(g)throw K;it(-1,K)}}function it(K,ne,Bt,Jn){var Ce,$t,Ae,ze,Ge,ge=ne;g||(g=!0,d&&e.clearTimeout(d),s=void 0,u=Jn||"",z.readyState=K>0?4:0,Ce=K>=200&&K<300||K===304,Bt&&(ze=$o(w,z,Bt)),!Ce&&a.inArray("script",w.dataTypes)>-1&&a.inArray("json",w.dataTypes)<0&&(w.converters["text script"]=function(){}),ze=qo(w,ze,z,Ce),Ce?(w.ifModified&&(Ge=z.getResponseHeader("Last-Modified"),Ge&&(a.lastModified[o]=Ge),Ge=z.getResponseHeader("etag"),Ge&&(a.etag[o]=Ge)),K===204||w.type==="HEAD"?ge="nocontent":K===304?ge="notmodified":(ge=ze.state,$t=ze.data,Ae=ze.error,Ce=!Ae)):(Ae=ge,(K||!ge)&&(ge="error",K<0&&(K=0))),z.status=K,z.statusText=(ne||ge)+"",Ce?G.resolveWith(k,[$t,ge,z]):G.rejectWith(k,[z,ge,Ae]),z.statusCode(se),se=void 0,b&&H.trigger(Ce?"ajaxSuccess":"ajaxError",[z,w,Ce?$t:Ae]),q.fireWith(k,[z,ge]),b&&(H.trigger("ajaxComplete",[z,w]),--a.active||a.event.trigger("ajaxStop")))}return z},getJSON:function(t,n,s){return a.get(t,n,s,"json")},getScript:function(t,n){return a.get(t,void 0,n,"script")}}),a.each(["get","post"],function(t,n){a[n]=function(s,o,u,l){return $(o)&&(l=l||u,u=o,o=void 0),a.ajax(a.extend({url:s,type:n,dataType:l,data:o,success:u},a.isPlainObject(s)&&s))}}),a.ajaxPrefilter(function(t){var n;for(n in t.headers)n.toLowerCase()==="content-type"&&(t.contentType=t.headers[n]||"")}),a._evalUrl=function(t,n,s){return a.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){a.globalEval(o,n,s)}})},a.fn.extend({wrapAll:function(t){var n;return this[0]&&($(t)&&(t=t.call(this[0])),n=a(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(t){return $(t)?this.each(function(n){a(this).wrapInner(t.call(this,n))}):this.each(function(){var n=a(this),s=n.contents();s.length?s.wrapAll(t):n.append(t)})},wrap:function(t){var n=$(t);return this.each(function(s){a(this).wrapAll(n?t.call(this,s):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){a(this).replaceWith(this.childNodes)}),this}}),a.expr.pseudos.hidden=function(t){return!a.expr.pseudos.visible(t)},a.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},a.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Wo={0:200,1223:204},Ft=a.ajaxSettings.xhr();M.cors=!!Ft&&"withCredentials"in Ft,M.ajax=Ft=!!Ft,a.ajaxTransport(function(t){var n,s;if(M.cors||Ft&&!t.crossDomain)return{send:function(o,u){var l,d=t.xhr();if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(l in t.xhrFields)d[l]=t.xhrFields[l];t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),!t.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(l in o)d.setRequestHeader(l,o[l]);n=function(m){return function(){n&&(n=s=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,m==="abort"?d.abort():m==="error"?typeof d.status!="number"?u(0,"error"):u(d.status,d.statusText):u(Wo[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=n(),s=d.onerror=d.ontimeout=n("error"),d.onabort!==void 0?d.onabort=s:d.onreadystatechange=function(){d.readyState===4&&e.setTimeout(function(){n&&s()})},n=n("abort");try{d.send(t.hasContent&&t.data||null)}catch(m){if(n)throw m}},abort:function(){n&&n()}}}),a.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),a.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return a.globalEval(t),t}}}),a.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),a.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var n,s;return{send:function(o,u){n=a("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",s=function(l){n.remove(),s=null,l&&u(l.type==="error"?404:200,l.type)}),j.head.appendChild(n[0])},abort:function(){s&&s()}}}});var gi=[],Kn=/(=)\?(?=&|$)|\?\?/;a.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=gi.pop()||a.expando+"_"+ai.guid++;return this[t]=!0,t}}),a.ajaxPrefilter("json jsonp",function(t,n,s){var o,u,l,d=t.jsonp!==!1&&(Kn.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Kn.test(t.data)&&"data");if(d||t.dataTypes[0]==="jsonp")return o=t.jsonpCallback=$(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,d?t[d]=t[d].replace(Kn,"$1"+o):t.jsonp!==!1&&(t.url+=(qn.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return l||a.error(o+" was not called"),l[0]},t.dataTypes[0]="json",u=e[o],e[o]=function(){l=arguments},s.always(function(){u===void 0?a(e).removeProp(o):e[o]=u,t[o]&&(t.jsonpCallback=n.jsonpCallback,gi.push(o)),l&&$(u)&&u(l[0]),l=u=void 0}),"script"}),M.createHTMLDocument=function(){var t=j.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2}(),a.parseHTML=function(t,n,s){if(typeof t!="string")return[];typeof n=="boolean"&&(s=n,n=!1);var o,u,l;return n||(M.createHTMLDocument?(n=j.implementation.createHTMLDocument(""),o=n.createElement("base"),o.href=j.location.href,n.head.appendChild(o)):n=j),u=Lr.exec(t),l=!s&&[],u?[n.createElement(u[1])]:(u=Vr([t],n,l),l&&l.length&&a(l).remove(),a.merge([],u.childNodes))},a.fn.load=function(t,n,s){var o,u,l,d=this,m=t.indexOf(" ");return m>-1&&(o=nt(t.slice(m)),t=t.slice(0,m)),$(n)?(s=n,n=void 0):n&&typeof n=="object"&&(u="POST"),d.length>0&&a.ajax({url:t,type:u||"GET",dataType:"html",data:n}).done(function(g){l=arguments,d.html(o?a("<div>").append(a.parseHTML(g)).find(o):g)}).always(s&&function(g,b){d.each(function(){s.apply(this,l||[g.responseText,b,g])})}),this},a.expr.pseudos.animated=function(t){return a.grep(a.timers,function(n){return t===n.elem}).length},a.offset={setOffset:function(t,n,s){var o,u,l,d,m,g,b,I=a.css(t,"position"),S=a(t),w={};I==="static"&&(t.style.position="relative"),m=S.offset(),l=a.css(t,"top"),g=a.css(t,"left"),b=(I==="absolute"||I==="fixed")&&(l+g).indexOf("auto")>-1,b?(o=S.position(),d=o.top,u=o.left):(d=parseFloat(l)||0,u=parseFloat(g)||0),$(n)&&(n=n.call(t,s,a.extend({},m))),n.top!=null&&(w.top=n.top-m.top+d),n.left!=null&&(w.left=n.left-m.left+u),"using"in n?n.using.call(t,w):S.css(w)}},a.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(u){a.offset.setOffset(this,t,u)});var n,s,o=this[0];if(o)return o.getClientRects().length?(n=o.getBoundingClientRect(),s=o.ownerDocument.defaultView,{top:n.top+s.pageYOffset,left:n.left+s.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,n,s,o=this[0],u={top:0,left:0};if(a.css(o,"position")==="fixed")n=o.getBoundingClientRect();else{for(n=this.offset(),s=o.ownerDocument,t=o.offsetParent||s.documentElement;t&&(t===s.body||t===s.documentElement)&&a.css(t,"position")==="static";)t=t.parentNode;t&&t!==o&&t.nodeType===1&&(u=a(t).offset(),u.top+=a.css(t,"borderTopWidth",!0),u.left+=a.css(t,"borderLeftWidth",!0))}return{top:n.top-u.top-a.css(o,"marginTop",!0),left:n.left-u.left-a.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&a.css(t,"position")==="static";)t=t.offsetParent;return t||tt})}}),a.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var s=n==="pageYOffset";a.fn[t]=function(o){return De(this,function(u,l,d){var m;if(we(u)?m=u:u.nodeType===9&&(m=u.defaultView),d===void 0)return m?m[n]:u[l];m?m.scrollTo(s?m.pageXOffset:d,s?d:m.pageYOffset):u[l]=d},t,o,arguments.length)}}),a.each(["top","left"],function(t,n){a.cssHooks[n]=Yr(M.pixelPosition,function(s,o){if(o)return o=Ut(s,n),Un.test(o)?a(s).position()[n]+"px":o})}),a.each({Height:"height",Width:"width"},function(t,n){a.each({padding:"inner"+t,content:n,"":"outer"+t},function(s,o){a.fn[o]=function(u,l){var d=arguments.length&&(s||typeof u!="boolean"),m=s||(u===!0||l===!0?"margin":"border");return De(this,function(g,b,I){var S;return we(g)?o.indexOf("outer")===0?g["inner"+t]:g.document.documentElement["client"+t]:g.nodeType===9?(S=g.documentElement,Math.max(g.body["scroll"+t],S["scroll"+t],g.body["offset"+t],S["offset"+t],S["client"+t])):I===void 0?a.css(g,b,m):a.style(g,b,I,m)},n,d?u:void 0,d)}})}),a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,n){a.fn[n]=function(s){return this.on(n,s)}}),a.fn.extend({bind:function(t,n,s){return this.on(t,null,n,s)},unbind:function(t,n){return this.off(t,null,n)},delegate:function(t,n,s,o){return this.on(n,t,s,o)},undelegate:function(t,n,s){return arguments.length===1?this.off(t,"**"):this.off(n,t||"**",s)},hover:function(t,n){return this.on("mouseenter",t).on("mouseleave",n||t)}}),a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){a.fn[n]=function(s,o){return arguments.length>0?this.on(n,null,s,o):this.trigger(n)}});var Vo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;a.proxy=function(t,n){var s,o,u;if(typeof n=="string"&&(s=t[n],n=t,t=s),!!$(t))return o=h.call(arguments,2),u=function(){return t.apply(n||this,o.concat(h.call(arguments)))},u.guid=t.guid=t.guid||a.guid++,u},a.holdReady=function(t){t?a.readyWait++:a.ready(!0)},a.isArray=Array.isArray,a.parseJSON=JSON.parse,a.nodeName=X,a.isFunction=$,a.isWindow=we,a.camelCase=Ie,a.type=Ne,a.now=Date.now,a.isNumeric=function(t){var n=a.type(t);return(n==="number"||n==="string")&&!isNaN(t-parseFloat(t))},a.trim=function(t){return t==null?"":(t+"").replace(Vo,"$1")};var zo=e.jQuery,Go=e.$;return a.noConflict=function(t){return e.$===a&&(e.$=Go),t&&e.jQuery===a&&(e.jQuery=zo),a},typeof r>"u"&&(e.jQuery=e.$=a),a})})(Zi);var ra=Zi.exports;const oe=na(ra);var bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=function(i){const e=[];let r=0;for(let c=0;c<i.length;c++){let f=i.charCodeAt(c);f<128?e[r++]=f:f<2048?(e[r++]=f>>6|192,e[r++]=f&63|128):(f&64512)===55296&&c+1<i.length&&(i.charCodeAt(c+1)&64512)===56320?(f=65536+((f&1023)<<10)+(i.charCodeAt(++c)&1023),e[r++]=f>>18|240,e[r++]=f>>12&63|128,e[r++]=f>>6&63|128,e[r++]=f&63|128):(e[r++]=f>>12|224,e[r++]=f>>6&63|128,e[r++]=f&63|128)}return e},ia=function(i){const e=[];let r=0,c=0;for(;r<i.length;){const f=i[r++];if(f<128)e[c++]=String.fromCharCode(f);else if(f>191&&f<224){const h=i[r++];e[c++]=String.fromCharCode((f&31)<<6|h&63)}else if(f>239&&f<365){const h=i[r++],v=i[r++],A=i[r++],C=((f&7)<<18|(h&63)<<12|(v&63)<<6|A&63)-65536;e[c++]=String.fromCharCode(55296+(C>>10)),e[c++]=String.fromCharCode(56320+(C&1023))}else{const h=i[r++],v=i[r++];e[c++]=String.fromCharCode((f&15)<<12|(h&63)<<6|v&63)}}return e.join("")},ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let f=0;f<i.length;f+=3){const h=i[f],v=f+1<i.length,A=v?i[f+1]:0,C=f+2<i.length,O=C?i[f+2]:0,J=h>>2,Q=(h&3)<<4|A>>4;let ie=(A&15)<<2|O>>6,ve=O&63;C||(ve=64,v||(ie=64)),c.push(r[J],r[Q],r[ie],r[ve])}return c.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(es(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):ia(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let f=0;f<i.length;){const h=r[i.charAt(f++)],A=f<i.length?r[i.charAt(f)]:0;++f;const O=f<i.length?r[i.charAt(f)]:64;++f;const Q=f<i.length?r[i.charAt(f)]:64;if(++f,h==null||A==null||O==null||Q==null)throw new sa;const ie=h<<2|A>>4;if(c.push(ie),O!==64){const ve=A<<4&240|O>>2;if(c.push(ve),Q!==64){const M=O<<6&192|Q;c.push(M)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class sa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oa=function(i){const e=es(i);return ts.encodeByteArray(e,!0)},ns=function(i){return oa(i).replace(/\./g,"")},rs=function(i){try{return ts.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=()=>aa().__FIREBASE_DEFAULTS__,ua=()=>{if(typeof process>"u"||typeof bi>"u")return;const i=bi.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},la=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&rs(i[1]);return e&&JSON.parse(e)},yr=()=>{try{return ca()||ua()||la()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},fa=i=>{var e,r;return(r=(e=yr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[i]},is=()=>{var i;return(i=yr())===null||i===void 0?void 0:i.config},ss=i=>{var e;return(e=yr())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,c)=>{r?this.reject(r):this.resolve(c),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ha(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function pa(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ma(){const i=ce();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function va(){try{return typeof indexedDB=="object"}catch{return!1}}function ya(){return new Promise((i,e)=>{try{let r=!0;const c="validate-browser-context-for-indexeddb-analytics-module",f=self.indexedDB.open(c);f.onsuccess=()=>{f.result.close(),r||self.indexedDB.deleteDatabase(c),i(!0)},f.onupgradeneeded=()=>{r=!1},f.onerror=()=>{var h;e(((h=f.error)===null||h===void 0?void 0:h.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="FirebaseError";class et extends Error{constructor(e,r,c){super(r),this.code=e,this.customData=c,this.name=ba,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kt.prototype.create)}}class Kt{constructor(e,r,c){this.service=e,this.serviceName=r,this.errors=c}create(e,...r){const c=r[0]||{},f=`${this.service}/${e}`,h=this.errors[e],v=h?_a(h,c):"Error",A=`${this.serviceName}: ${v} (${f}).`;return new et(f,A,c)}}function _a(i,e){return i.replace(wa,(r,c)=>{const f=e[c];return f!=null?String(f):`<${c}?>`})}const wa=/\{\$([^}]+)}/g;function Ta(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function bn(i,e){if(i===e)return!0;const r=Object.keys(i),c=Object.keys(e);for(const f of r){if(!c.includes(f))return!1;const h=i[f],v=e[f];if(_i(h)&&_i(v)){if(!bn(h,v))return!1}else if(h!==v)return!1}for(const f of c)if(!r.includes(f))return!1;return!0}function _i(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(i){const e=[];for(const[r,c]of Object.entries(i))Array.isArray(c)?c.forEach(f=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(f))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(c));return e.length?"&"+e.join("&"):""}function Ia(i,e){const r=new Ea(i,e);return r.subscribe.bind(r)}class Ea{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(c=>{this.error(c)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,c){let f;if(e===void 0&&r===void 0&&c===void 0)throw new Error("Missing Observer.");Sa(e,["next","error","complete"])?f=e:f={next:e,error:r,complete:c},f.next===void 0&&(f.next=nr),f.error===void 0&&(f.error=nr),f.complete===void 0&&(f.complete=nr);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch{}}),this.observers.push(f),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(c){typeof console<"u"&&console.error&&console.error(c)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sa(i,e){if(typeof i!="object"||i===null)return!1;for(const r of e)if(r in i&&typeof i[r]=="function")return!0;return!1}function nr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(i){return i&&i._delegate?i._delegate:i}class St{constructor(e,r,c){this.name=e,this.instanceFactory=r,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const c=new da;if(this.instancesDeferred.set(r,c),this.isInitialized(r)||this.shouldAutoInitialize())try{const f=this.getOrInitializeService({instanceIdentifier:r});f&&c.resolve(f)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const c=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),f=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(h){if(f)return null;throw h}else{if(f)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ka(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch{}for(const[r,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(r);try{const h=this.getOrInitializeService({instanceIdentifier:f});c.resolve(h)}catch{}}}}clearInstance(e=ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ot){return this.instances.has(e)}getOptions(e=ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const f=this.getOrInitializeService({instanceIdentifier:c,options:r});for(const[h,v]of this.instancesDeferred.entries()){const A=this.normalizeInstanceIdentifier(h);c===A&&v.resolve(f)}return f}onInit(e,r){var c;const f=this.normalizeInstanceIdentifier(r),h=(c=this.onInitCallbacks.get(f))!==null&&c!==void 0?c:new Set;h.add(e),this.onInitCallbacks.set(f,h);const v=this.instances.get(f);return v&&e(v,f),()=>{h.delete(e)}}invokeOnInitCallbacks(e,r){const c=this.onInitCallbacks.get(r);if(c)for(const f of c)try{f(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:Aa(e),options:r}),this.instances.set(e,c),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch{}return c||null}normalizeInstanceIdentifier(e=ot){return this.component?this.component.multipleInstances?e:ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aa(i){return i===ot?void 0:i}function ka(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Ca(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ee||(ee={}));const Pa={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Na=ee.INFO,Oa={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Da=(i,e,...r)=>{if(e<i.logLevel)return;const c=new Date().toISOString(),f=Oa[e];if(f)console[f](`[${c}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class os{constructor(e){this.name=e,this._logLevel=Na,this._logHandler=Da,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ra=(i,e)=>e.some(r=>i instanceof r);let wi,Ti;function La(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ma(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const as=new WeakMap,lr=new WeakMap,cs=new WeakMap,rr=new WeakMap,br=new WeakMap;function Ua(i){const e=new Promise((r,c)=>{const f=()=>{i.removeEventListener("success",h),i.removeEventListener("error",v)},h=()=>{r(Qe(i.result)),f()},v=()=>{c(i.error),f()};i.addEventListener("success",h),i.addEventListener("error",v)});return e.then(r=>{r instanceof IDBCursor&&as.set(r,i)}).catch(()=>{}),br.set(e,i),e}function ja(i){if(lr.has(i))return;const e=new Promise((r,c)=>{const f=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",v),i.removeEventListener("abort",v)},h=()=>{r(),f()},v=()=>{c(i.error||new DOMException("AbortError","AbortError")),f()};i.addEventListener("complete",h),i.addEventListener("error",v),i.addEventListener("abort",v)});lr.set(i,e)}let fr={get(i,e,r){if(i instanceof IDBTransaction){if(e==="done")return lr.get(i);if(e==="objectStoreNames")return i.objectStoreNames||cs.get(i);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Qe(i[e])},set(i,e,r){return i[e]=r,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ha(i){fr=i(fr)}function Fa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const c=i.call(ir(this),e,...r);return cs.set(c,e.sort?e.sort():[e]),Qe(c)}:Ma().includes(i)?function(...e){return i.apply(ir(this),e),Qe(as.get(this))}:function(...e){return Qe(i.apply(ir(this),e))}}function Ba(i){return typeof i=="function"?Fa(i):(i instanceof IDBTransaction&&ja(i),Ra(i,La())?new Proxy(i,fr):i)}function Qe(i){if(i instanceof IDBRequest)return Ua(i);if(rr.has(i))return rr.get(i);const e=Ba(i);return e!==i&&(rr.set(i,e),br.set(e,i)),e}const ir=i=>br.get(i);function $a(i,e,{blocked:r,upgrade:c,blocking:f,terminated:h}={}){const v=indexedDB.open(i,e),A=Qe(v);return c&&v.addEventListener("upgradeneeded",C=>{c(Qe(v.result),C.oldVersion,C.newVersion,Qe(v.transaction),C)}),r&&v.addEventListener("blocked",C=>r(C.oldVersion,C.newVersion,C)),A.then(C=>{h&&C.addEventListener("close",()=>h()),f&&C.addEventListener("versionchange",O=>f(O.oldVersion,O.newVersion,O))}).catch(()=>{}),A}const qa=["get","getKey","getAll","getAllKeys","count"],Wa=["put","add","delete","clear"],sr=new Map;function Ii(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(sr.get(e))return sr.get(e);const r=e.replace(/FromIndex$/,""),c=e!==r,f=Wa.includes(r);if(!(r in(c?IDBIndex:IDBObjectStore).prototype)||!(f||qa.includes(r)))return;const h=async function(v,...A){const C=this.transaction(v,f?"readwrite":"readonly");let O=C.store;return c&&(O=O.index(A.shift())),(await Promise.all([O[r](...A),f&&C.done]))[0]};return sr.set(e,h),h}Ha(i=>({...i,get:(e,r,c)=>Ii(e,r)||i.get(e,r,c),has:(e,r)=>!!Ii(e,r)||i.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(za(r)){const c=r.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(r=>r).join(" ")}}function za(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dr="@firebase/app",Ei="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new os("@firebase/app"),Ga="@firebase/app-compat",Ka="@firebase/analytics-compat",Ja="@firebase/analytics",Xa="@firebase/app-check-compat",Ya="@firebase/app-check",Qa="@firebase/auth",Za="@firebase/auth-compat",ec="@firebase/database",tc="@firebase/database-compat",nc="@firebase/functions",rc="@firebase/functions-compat",ic="@firebase/installations",sc="@firebase/installations-compat",oc="@firebase/messaging",ac="@firebase/messaging-compat",cc="@firebase/performance",uc="@firebase/performance-compat",lc="@firebase/remote-config",fc="@firebase/remote-config-compat",dc="@firebase/storage",hc="@firebase/storage-compat",pc="@firebase/firestore",gc="@firebase/vertexai-preview",mc="@firebase/firestore-compat",vc="firebase",yc="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]",bc={[dr]:"fire-core",[Ga]:"fire-core-compat",[Ja]:"fire-analytics",[Ka]:"fire-analytics-compat",[Ya]:"fire-app-check",[Xa]:"fire-app-check-compat",[Qa]:"fire-auth",[Za]:"fire-auth-compat",[ec]:"fire-rtdb",[tc]:"fire-rtdb-compat",[nc]:"fire-fn",[rc]:"fire-fn-compat",[ic]:"fire-iid",[sc]:"fire-iid-compat",[oc]:"fire-fcm",[ac]:"fire-fcm-compat",[cc]:"fire-perf",[uc]:"fire-perf-compat",[lc]:"fire-rc",[fc]:"fire-rc-compat",[dc]:"fire-gcs",[hc]:"fire-gcs-compat",[pc]:"fire-fst",[mc]:"fire-fst-compat",[gc]:"fire-vertex","fire-js":"fire-js",[vc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Map,_c=new Map,pr=new Map;function Si(i,e){try{i.container.addComponent(e)}catch(r){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,r)}}function Vt(i){const e=i.name;if(pr.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;pr.set(e,i);for(const r of _n.values())Si(r,i);for(const r of _c.values())Si(r,i);return!0}function us(i,e){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(e)}function Fe(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new Kt("app","Firebase",wc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,r,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=yc;function ls(i,e={}){let r=i;typeof e!="object"&&(e={name:e});const c=Object.assign({name:hr,automaticDataCollectionEnabled:!1},e),f=c.name;if(typeof f!="string"||!f)throw Ze.create("bad-app-name",{appName:String(f)});if(r||(r=is()),!r)throw Ze.create("no-options");const h=_n.get(f);if(h){if(bn(r,h.options)&&bn(c,h.config))return h;throw Ze.create("duplicate-app",{appName:f})}const v=new xa(f);for(const C of pr.values())v.addComponent(C);const A=new Tc(r,c,v);return _n.set(f,A),A}function Ic(i=hr){const e=_n.get(i);if(!e&&i===hr&&is())return ls();if(!e)throw Ze.create("no-app",{appName:i});return e}function wt(i,e,r){var c;let f=(c=bc[i])!==null&&c!==void 0?c:i;r&&(f+=`-${r}`);const h=f.match(/\s|\//),v=e.match(/\s|\//);if(h||v){const A=[`Unable to register library "${f}" with version "${e}":`];h&&A.push(`library name "${f}" contains illegal characters (whitespace or "/")`),h&&v&&A.push("and"),v&&A.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(A.join(" "));return}Vt(new St(`${f}-version`,()=>({library:f,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="firebase-heartbeat-database",Sc=1,zt="firebase-heartbeat-store";let or=null;function fs(){return or||(or=$a(Ec,Sc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(zt)}catch(r){console.warn(r)}}}}).catch(i=>{throw Ze.create("idb-open",{originalErrorMessage:i.message})})),or}async function Cc(i){try{const r=(await fs()).transaction(zt),c=await r.objectStore(zt).get(ds(i));return await r.done,c}catch(e){if(e instanceof et)ct.warn(e.message);else{const r=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(r.message)}}}async function Ci(i,e){try{const c=(await fs()).transaction(zt,"readwrite");await c.objectStore(zt).put(e,ds(i)),await c.done}catch(r){if(r instanceof et)ct.warn(r.message);else{const c=Ze.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ct.warn(c.message)}}}function ds(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=1024,kc=30*24*60*60*1e3;class xc{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Nc(r),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){var e,r;const f=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Ai();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(v=>v.date===h)))return this._heartbeatsCache.heartbeats.push({date:h,agent:f}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(v=>{const A=new Date(v.date).valueOf();return Date.now()-A<=kc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ai(),{heartbeatsToSend:c,unsentEntries:f}=Pc(this._heartbeatsCache.heartbeats),h=ns(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=r,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}}function Ai(){return new Date().toISOString().substring(0,10)}function Pc(i,e=Ac){const r=[];let c=i.slice();for(const f of i){const h=r.find(v=>v.agent===f.agent);if(h){if(h.dates.push(f.date),ki(r)>e){h.dates.pop();break}}else if(r.push({agent:f.agent,dates:[f.date]}),ki(r)>e){r.pop();break}c=c.slice(1)}return{heartbeatsToSend:r,unsentEntries:c}}class Nc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return va()?ya().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Cc(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const f=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:f.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const f=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:f.lastSentHeartbeatDate,heartbeats:[...f.heartbeats,...e.heartbeats]})}else return}}function ki(i){return ns(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(i){Vt(new St("platform-logger",e=>new Va(e),"PRIVATE")),Vt(new St("heartbeat",e=>new xc(e),"PRIVATE")),wt(dr,Ei,i),wt(dr,Ei,"esm2017"),wt("fire-js","")}Oc("");var Dc="firebase",Rc="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(Dc,Rc,"app");function _r(i,e){var r={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&e.indexOf(c)<0&&(r[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(i);f<c.length;f++)e.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(i,c[f])&&(r[c[f]]=i[c[f]]);return r}function hs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lc=hs,ps=new Kt("auth","Firebase",hs());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new os("@firebase/auth");function Mc(i,...e){wn.logLevel<=ee.WARN&&wn.warn(`Auth (${Xt}): ${i}`,...e)}function gn(i,...e){wn.logLevel<=ee.ERROR&&wn.error(`Auth (${Xt}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(i,...e){throw Tr(i,...e)}function _e(i,...e){return Tr(i,...e)}function wr(i,e,r){const c=Object.assign(Object.assign({},Lc()),{[e]:r});return new Kt("auth","Firebase",c).create(e,{appName:i.name})}function at(i){return wr(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gs(i,e,r){const c=r;if(!(e instanceof c))throw c.name!==e.constructor.name&&Pe(i,"argument-error"),wr(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tr(i,...e){if(typeof i!="string"){const r=e[0],c=[...e.slice(1)];return c[0]&&(c[0].appName=i.name),i._errorFactory.create(r,...c)}return ps.create(i,...e)}function F(i,e,...r){if(!i)throw Tr(e,...r)}function Be(i){const e="INTERNAL ASSERTION FAILED: "+i;throw gn(e),new Error(e)}function We(i,e){i||Be(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Uc(){return xi()==="http:"||xi()==="https:"}function xi(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uc()||pa()||"connection"in navigator)?navigator.onLine:!0}function Hc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,r){this.shortDelay=e,this.longDelay=r,We(r>e,"Short delay should be less than long delay!"),this.isMobile=ha()||ga()}get(){return jc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(i,e){We(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{static initialize(e,r,c){this.fetchImpl=e,r&&(this.headersImpl=r),c&&(this.responseImpl=c)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Yt(3e4,6e4);function Er(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function At(i,e,r,c,f={}){return vs(i,f,async()=>{let h={},v={};c&&(e==="GET"?v=c:h={body:JSON.stringify(c)});const A=Jt(Object.assign({key:i.config.apiKey},v)).slice(1),C=await i._getAdditionalHeaders();return C["Content-Type"]="application/json",i.languageCode&&(C["X-Firebase-Locale"]=i.languageCode),ms.fetch()(ys(i,i.config.apiHost,r,A),Object.assign({method:e,headers:C,referrerPolicy:"no-referrer"},h))})}async function vs(i,e,r){i._canInitEmulator=!1;const c=Object.assign(Object.assign({},Fc),e);try{const f=new qc(i),h=await Promise.race([r(),f.promise]);f.clearNetworkTimeout();const v=await h.json();if("needConfirmation"in v)throw pn(i,"account-exists-with-different-credential",v);if(h.ok&&!("errorMessage"in v))return v;{const A=h.ok?v.errorMessage:v.error.message,[C,O]=A.split(" : ");if(C==="FEDERATED_USER_ID_ALREADY_LINKED")throw pn(i,"credential-already-in-use",v);if(C==="EMAIL_EXISTS")throw pn(i,"email-already-in-use",v);if(C==="USER_DISABLED")throw pn(i,"user-disabled",v);const J=c[C]||C.toLowerCase().replace(/[_\s]+/g,"-");if(O)throw wr(i,J,O);Pe(i,J)}}catch(f){if(f instanceof et)throw f;Pe(i,"network-request-failed",{message:String(f)})}}async function $c(i,e,r,c,f={}){const h=await At(i,e,r,c,f);return"mfaPendingCredential"in h&&Pe(i,"multi-factor-auth-required",{_serverResponse:h}),h}function ys(i,e,r,c){const f=`${e}${r}?${c}`;return i.config.emulator?Ir(i.config,f):`${i.config.apiScheme}://${f}`}class qc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,c)=>{this.timer=setTimeout(()=>c(_e(this.auth,"network-request-failed")),Bc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pn(i,e,r){const c={appName:i.name};r.email&&(c.email=r.email),r.phoneNumber&&(c.phoneNumber=r.phoneNumber);const f=_e(i,e,c);return f.customData._tokenResponse=r,f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(i,e){return At(i,"POST","/v1/accounts:delete",e)}async function bs(i,e){return At(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vc(i,e=!1){const r=Ve(i),c=await r.getIdToken(e),f=Sr(c);F(f&&f.exp&&f.auth_time&&f.iat,r.auth,"internal-error");const h=typeof f.firebase=="object"?f.firebase:void 0,v=h==null?void 0:h.sign_in_provider;return{claims:f,token:c,authTime:Wt(ar(f.auth_time)),issuedAtTime:Wt(ar(f.iat)),expirationTime:Wt(ar(f.exp)),signInProvider:v||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function ar(i){return Number(i)*1e3}function Sr(i){const[e,r,c]=i.split(".");if(e===void 0||r===void 0||c===void 0)return gn("JWT malformed, contained fewer than 3 sections"),null;try{const f=rs(r);return f?JSON.parse(f):(gn("Failed to decode base64 JWT payload"),null)}catch(f){return gn("Caught error parsing JWT payload as JSON",f==null?void 0:f.toString()),null}}function Pi(i){const e=Sr(i);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(i,e,r=!1){if(r)return e;try{return await e}catch(c){throw c instanceof et&&zc(c)&&i.auth.currentUser===i&&await i.auth.signOut(),c}}function zc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const c=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),c}else{this.errorBackoff=3e4;const f=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,f)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(i){var e;const r=i.auth,c=await i.getIdToken(),f=await Gt(i,bs(r,{idToken:c}));F(f==null?void 0:f.users.length,r,"internal-error");const h=f.users[0];i._notifyReloadListener(h);const v=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?_s(h.providerUserInfo):[],A=Jc(i.providerData,v),C=i.isAnonymous,O=!(i.email&&h.passwordHash)&&!(A!=null&&A.length),J=C?O:!1,Q={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:A,metadata:new mr(h.createdAt,h.lastLoginAt),isAnonymous:J};Object.assign(i,Q)}async function Kc(i){const e=Ve(i);await Tn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jc(i,e){return[...i.filter(c=>!e.some(f=>f.providerId===c.providerId)),...e]}function _s(i){return i.map(e=>{var{providerId:r}=e,c=_r(e,["providerId"]);return{providerId:r,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(i,e){const r=await vs(i,{},async()=>{const c=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:f,apiKey:h}=i.config,v=ys(i,f,"/v1/token",`key=${h}`),A=await i._getAdditionalHeaders();return A["Content-Type"]="application/x-www-form-urlencoded",ms.fetch()(v,{method:"POST",headers:A,body:c})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Yc(i,e){return At(i,"POST","/v2/accounts:revokeToken",Er(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){F(e.length!==0,"internal-error");const r=Pi(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:c,refreshToken:f,expiresIn:h}=await Xc(e,r);this.updateTokensAndExpiration(c,f,Number(h))}updateTokensAndExpiration(e,r,c){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+c*1e3}static fromJSON(e,r){const{refreshToken:c,accessToken:f,expirationTime:h}=r,v=new Tt;return c&&(F(typeof c=="string","internal-error",{appName:e}),v.refreshToken=c),f&&(F(typeof f=="string","internal-error",{appName:e}),v.accessToken=f),h&&(F(typeof h=="number","internal-error",{appName:e}),v.expirationTime=h),v}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tt,this.toJSON())}_performRefresh(){return Be("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(i,e){F(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class $e{constructor(e){var{uid:r,auth:c,stsTokenManager:f}=e,h=_r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=c,this.stsTokenManager=f,this.accessToken=f.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new mr(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const r=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return F(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Vc(this,e)}reload(){return Kc(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new $e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),r&&await Tn(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await Gt(this,Wc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var c,f,h,v,A,C,O,J;const Q=(c=r.displayName)!==null&&c!==void 0?c:void 0,ie=(f=r.email)!==null&&f!==void 0?f:void 0,ve=(h=r.phoneNumber)!==null&&h!==void 0?h:void 0,M=(v=r.photoURL)!==null&&v!==void 0?v:void 0,$=(A=r.tenantId)!==null&&A!==void 0?A:void 0,we=(C=r._redirectEventId)!==null&&C!==void 0?C:void 0,j=(O=r.createdAt)!==null&&O!==void 0?O:void 0,tn=(J=r.lastLoginAt)!==null&&J!==void 0?J:void 0,{uid:lt,emailVerified:Ne,isAnonymous:xt,providerData:Pt,stsTokenManager:a}=r;F(lt&&a,e,"internal-error");const Nt=Tt.fromJSON(this.name,a);F(typeof lt=="string",e,"internal-error"),Je(Q,e.name),Je(ie,e.name),F(typeof Ne=="boolean",e,"internal-error"),F(typeof xt=="boolean",e,"internal-error"),Je(ve,e.name),Je(M,e.name),Je($,e.name),Je(we,e.name),Je(j,e.name),Je(tn,e.name);const X=new $e({uid:lt,auth:e,email:ie,emailVerified:Ne,displayName:Q,isAnonymous:xt,photoURL:M,phoneNumber:ve,tenantId:$,stsTokenManager:Nt,createdAt:j,lastLoginAt:tn});return Pt&&Array.isArray(Pt)&&(X.providerData=Pt.map(Nn=>Object.assign({},Nn))),we&&(X._redirectEventId=we),X}static async _fromIdTokenResponse(e,r,c=!1){const f=new Tt;f.updateFromServerResponse(r);const h=new $e({uid:r.localId,auth:e,stsTokenManager:f,isAnonymous:c});return await Tn(h),h}static async _fromGetAccountInfoResponse(e,r,c){const f=r.users[0];F(f.localId!==void 0,"internal-error");const h=f.providerUserInfo!==void 0?_s(f.providerUserInfo):[],v=!(f.email&&f.passwordHash)&&!(h!=null&&h.length),A=new Tt;A.updateFromIdToken(c);const C=new $e({uid:f.localId,auth:e,stsTokenManager:A,isAnonymous:v}),O={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new mr(f.createdAt,f.lastLoginAt),isAnonymous:!(f.email&&f.passwordHash)&&!(h!=null&&h.length)};return Object.assign(C,O),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Map;function qe(i){We(i instanceof Function,"Expected a class definition");let e=Ni.get(i);return e?(We(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ni.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}ws.type="NONE";const Oi=ws;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(i,e,r){return`firebase:${i}:${e}:${r}`}class It{constructor(e,r,c){this.persistence=e,this.auth=r,this.userKey=c;const{config:f,name:h}=this.auth;this.fullUserKey=mn(this.userKey,f.apiKey,h),this.fullPersistenceKey=mn("persistence",f.apiKey,h),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,c="authUser"){if(!r.length)return new It(qe(Oi),e,c);const f=(await Promise.all(r.map(async O=>{if(await O._isAvailable())return O}))).filter(O=>O);let h=f[0]||qe(Oi);const v=mn(c,e.config.apiKey,e.name);let A=null;for(const O of r)try{const J=await O._get(v);if(J){const Q=$e._fromJSON(e,J);O!==h&&(A=Q),h=O;break}}catch{}const C=f.filter(O=>O._shouldAllowMigration);return!h._shouldAllowMigration||!C.length?new It(h,e,c):(h=C[0],A&&await h._set(v,A.toJSON()),await Promise.all(r.map(async O=>{if(O!==h)try{await O._remove(v)}catch{}})),new It(h,e,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Es(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ts(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cs(e))return"Blackberry";if(As(e))return"Webos";if(Cr(e))return"Safari";if((e.includes("chrome/")||Is(e))&&!e.includes("edge/"))return"Chrome";if(Ss(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=i.match(r);if((c==null?void 0:c.length)===2)return c[1]}return"Other"}function Ts(i=ce()){return/firefox\//i.test(i)}function Cr(i=ce()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Is(i=ce()){return/crios\//i.test(i)}function Es(i=ce()){return/iemobile/i.test(i)}function Ss(i=ce()){return/android/i.test(i)}function Cs(i=ce()){return/blackberry/i.test(i)}function As(i=ce()){return/webos/i.test(i)}function Cn(i=ce()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Qc(i=ce()){var e;return Cn(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zc(){return ma()&&document.documentMode===10}function ks(i=ce()){return Cn(i)||Ss(i)||As(i)||Cs(i)||/windows phone/i.test(i)||Es(i)}function eu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(i,e=[]){let r;switch(i){case"Browser":r=Di(ce());break;case"Worker":r=`${Di(ce())}-${i}`;break;default:r=i}const c=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Xt}/${c}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const c=h=>new Promise((v,A)=>{try{const C=e(h);v(C)}catch(C){A(C)}});c.onAbort=r,this.queue.push(c);const f=this.queue.length-1;return()=>{this.queue[f]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const c of this.queue)await c(e),c.onAbort&&r.push(c.onAbort)}catch(c){r.reverse();for(const f of r)try{f()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:c==null?void 0:c.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(i,e={}){return At(i,"GET","/v2/passwordPolicy",Er(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=6;class iu{constructor(e){var r,c,f,h;const v=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=v.minPasswordLength)!==null&&r!==void 0?r:ru,v.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=v.maxPasswordLength),v.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=v.containsLowercaseCharacter),v.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=v.containsUppercaseCharacter),v.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=v.containsNumericCharacter),v.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=v.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(f=(c=e.allowedNonAlphanumericCharacters)===null||c===void 0?void 0:c.join(""))!==null&&f!==void 0?f:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,c,f,h,v,A;const C={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,C),this.validatePasswordCharacterOptions(e,C),C.isValid&&(C.isValid=(r=C.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),C.isValid&&(C.isValid=(c=C.meetsMaxPasswordLength)!==null&&c!==void 0?c:!0),C.isValid&&(C.isValid=(f=C.containsLowercaseLetter)!==null&&f!==void 0?f:!0),C.isValid&&(C.isValid=(h=C.containsUppercaseLetter)!==null&&h!==void 0?h:!0),C.isValid&&(C.isValid=(v=C.containsNumericCharacter)!==null&&v!==void 0?v:!0),C.isValid&&(C.isValid=(A=C.containsNonAlphanumericCharacter)!==null&&A!==void 0?A:!0),C}validatePasswordLengthOptions(e,r){const c=this.customStrengthOptions.minPasswordLength,f=this.customStrengthOptions.maxPasswordLength;c&&(r.meetsMinPasswordLength=e.length>=c),f&&(r.meetsMaxPasswordLength=e.length<=f)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let c;for(let f=0;f<e.length;f++)c=e.charAt(f),this.updatePasswordCharacterOptionsStatuses(r,c>="a"&&c<="z",c>="A"&&c<="Z",c>="0"&&c<="9",this.allowedNonAlphanumericCharacters.includes(c))}updatePasswordCharacterOptionsStatuses(e,r,c,f,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=c)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=f)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,r,c,f){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=c,this.config=f,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ri(this),this.idTokenSubscription=new Ri(this),this.beforeStateQueue=new tu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=f.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=qe(r)),this._initializationPromise=this.queue(async()=>{var c,f;if(!this._deleted&&(this.persistenceManager=await It.create(this,e),!this._deleted)){if(!((c=this._popupRedirectResolver)===null||c===void 0)&&c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((f=this.currentUser)===null||f===void 0?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await bs(this,{idToken:e}),c=await $e._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(c)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Fe(this.app)){const v=this.app.settings.authIdToken;return v?new Promise(A=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(v).then(A,A))}):this.directlySetCurrentUser(null)}const c=await this.assertedPersistence.getCurrentUser();let f=c,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const v=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,A=f==null?void 0:f._redirectEventId,C=await this.tryRedirectSignIn(e);(!v||v===A)&&(C!=null&&C.user)&&(f=C.user,h=!0)}if(!f)return this.directlySetCurrentUser(null);if(!f._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(f)}catch(v){f=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(v))}return f?this.reloadAndSetCurrentUserOrClear(f):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===f._redirectEventId?this.directlySetCurrentUser(f):this.reloadAndSetCurrentUserOrClear(f)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Tn(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(at(this));const r=e?Ve(e):null;return r&&F(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nu(this),r=new iu(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kt("auth","Firebase",e())}onAuthStateChanged(e,r,c){return this.registerStateListener(this.authStateSubscription,e,r,c)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,c){return this.registerStateListener(this.idTokenSubscription,e,r,c)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const c=this.onAuthStateChanged(()=>{c(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),c={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(c.tenantId=this.tenantId),await Yc(this,c)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const c=await this.getOrInitRedirectPersistenceManager(r);return e===null?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&qe(e)||this._popupRedirectResolver;F(r,this,"argument-error"),this.redirectPersistenceManager=await It.create(this,[qe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,c;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,c,f){if(this._deleted)return()=>{};const h=typeof r=="function"?r:r.next.bind(r);let v=!1;const A=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(A,this,"internal-error"),A.then(()=>{v||h(this.currentUser)}),typeof r=="function"){const C=e.addObserver(r,c,f);return()=>{v=!0,C()}}else{const C=e.addObserver(r);return()=>{v=!0,C()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const c=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());c&&(r["X-Firebase-Client"]=c);const f=await this._getAppCheckToken();return f&&(r["X-Firebase-AppCheck"]=f),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Mc(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function An(i){return Ve(i)}class Ri{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ia(r=>this.observer=r)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ou(i){Ar=i}function au(i){return Ar.loadJS(i)}function cu(){return Ar.gapiScript}function uu(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(i,e){const r=us(i,"auth");if(r.isInitialized()){const f=r.getImmediate(),h=r.getOptions();if(bn(h,e??{}))return f;Pe(f,"already-initialized")}return r.initialize({options:e})}function fu(i,e){const r=(e==null?void 0:e.persistence)||[],c=(Array.isArray(r)?r:[r]).map(qe);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(c,e==null?void 0:e.popupRedirectResolver)}function du(i,e,r){const c=An(i);F(c._canInitEmulator,c,"emulator-config-failed"),F(/^https?:\/\//.test(e),c,"invalid-emulator-scheme");const f=!1,h=Ps(e),{host:v,port:A}=hu(e),C=A===null?"":`:${A}`;c.config.emulator={url:`${h}//${v}${C}/`},c.settings.appVerificationDisabledForTesting=!0,c.emulatorConfig=Object.freeze({host:v,port:A,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:f})}),pu()}function Ps(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function hu(i){const e=Ps(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!r)return{host:"",port:null};const c=r[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(c);if(f){const h=f[1];return{host:h,port:Li(c.substr(h.length+1))}}else{const[h,v]=c.split(":");return{host:h,port:Li(v)}}}function Li(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function pu(){function i(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Be("not implemented")}_getIdTokenResponse(e){return Be("not implemented")}_linkToIdToken(e,r){return Be("not implemented")}_getReauthenticationResolver(e){return Be("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(i,e){return $c(i,"POST","/v1/accounts:signInWithIdp",Er(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="http://localhost";class ut extends Ns{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Pe("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:c,signInMethod:f}=r,h=_r(r,["providerId","signInMethod"]);if(!c||!f)return null;const v=new ut(c,f);return v.idToken=h.idToken||void 0,v.accessToken=h.accessToken||void 0,v.secret=h.secret,v.nonce=h.nonce,v.pendingToken=h.pendingToken||null,v}_getIdTokenResponse(e){const r=this.buildRequest();return Et(e,r)}_linkToIdToken(e,r){const c=this.buildRequest();return c.idToken=r,Et(e,c)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Et(e,r)}buildRequest(){const e={requestUri:gu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Jt(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Qt{constructor(){super("facebook.com")}static credential(e){return ut._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Qt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return ut._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:c}=e;if(!r&&!c)return null;try{return Ue.credential(r,c)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Qt{constructor(){super("github.com")}static credential(e){return ut._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Qt{constructor(){super("twitter.com")}static credential(e,r){return ut._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:c}=e;if(!r||!c)return null;try{return He.credential(r,c)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,c,f=!1){const h=await $e._fromIdTokenResponse(e,c,f),v=Mi(c);return new Ct({user:h,providerId:v,_tokenResponse:c,operationType:r})}static async _forOperation(e,r,c){await e._updateTokensIfNecessary(c,!0);const f=Mi(c);return new Ct({user:e,providerId:f,_tokenResponse:c,operationType:r})}}function Mi(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends et{constructor(e,r,c,f){var h;super(r.code,r.message),this.operationType=c,this.user=f,Object.setPrototypeOf(this,In.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:r.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,r,c,f){return new In(e,r,c,f)}}function Os(i,e,r,c){return(e==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?In._fromErrorAndOperation(i,h,e,c):h})}async function mu(i,e,r=!1){const c=await Gt(i,e._linkToIdToken(i.auth,await i.getIdToken()),r);return Ct._forOperation(i,"link",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(i,e,r=!1){const{auth:c}=i;if(Fe(c.app))return Promise.reject(at(c));const f="reauthenticate";try{const h=await Gt(i,Os(c,f,e,i),r);F(h.idToken,c,"internal-error");const v=Sr(h.idToken);F(v,c,"internal-error");const{sub:A}=v;return F(i.uid===A,c,"user-mismatch"),Ct._forOperation(i,f,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&Pe(c,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(i,e,r=!1){if(Fe(i.app))return Promise.reject(at(i));const c="signIn",f=await Os(i,c,e),h=await Ct._fromIdTokenResponse(i,c,f);return r||await i._updateCurrentUser(h.user),h}function bu(i,e,r,c){return Ve(i).onIdTokenChanged(e,r,c)}function _u(i,e,r){return Ve(i).beforeAuthStateChanged(e,r)}function wu(i,e,r,c){return Ve(i).onAuthStateChanged(e,r,c)}function Tu(i){return Ve(i).signOut()}const En="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){const i=ce();return Cr(i)||Cn(i)}const Eu=1e3,Su=10;class Rs extends Ds{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Iu()&&eu(),this.fallbackToPolling=ks(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const c=this.storage.getItem(r),f=this.localCache[r];c!==f&&e(r,f,c)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((v,A,C)=>{this.notifyListeners(v,C)});return}const c=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const v=this.storage.getItem(c);if(e.newValue!==v)e.newValue!==null?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!r)return}const f=()=>{const v=this.storage.getItem(c);!r&&this.localCache[c]===v||this.notifyListeners(c,v)},h=this.storage.getItem(c);Zc()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(f,Su):f()}notifyListeners(e,r){this.localCache[e]=r;const c=this.listeners[e];if(c)for(const f of Array.from(c))f(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:c}),!0)})},Eu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rs.type="LOCAL";const Cu=Rs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ds{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ls.type="SESSION";const Ms=Ls;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(f=>f.isListeningto(e));if(r)return r;const c=new xn(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:c,eventType:f,data:h}=r.data,v=this.handlersMap[f];if(!(v!=null&&v.size))return;r.ports[0].postMessage({status:"ack",eventId:c,eventType:f});const A=Array.from(v).map(async O=>O(r.origin,h)),C=await Au(A);r.ports[0].postMessage({status:"done",eventId:c,eventType:f,response:C})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(i="",e=10){let r="";for(let c=0;c<e;c++)r+=Math.floor(Math.random()*10);return i+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,c=50){const f=typeof MessageChannel<"u"?new MessageChannel:null;if(!f)throw new Error("connection_unavailable");let h,v;return new Promise((A,C)=>{const O=kr("",20);f.port1.start();const J=setTimeout(()=>{C(new Error("unsupported_event"))},c);v={messageChannel:f,onMessage(Q){const ie=Q;if(ie.data.eventId===O)switch(ie.data.status){case"ack":clearTimeout(J),h=setTimeout(()=>{C(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),A(ie.data.response);break;default:clearTimeout(J),clearTimeout(h),C(new Error("invalid_response"));break}}},this.handlers.add(v),f.port1.addEventListener("message",v.onMessage),this.target.postMessage({eventType:e,eventId:O,data:r},[f.port2])}).finally(()=>{v&&this.removeMessageHandler(v)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function xu(i){xe().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function Pu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nu(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Ou(){return Us()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="firebaseLocalStorageDb",Du=1,Sn="firebaseLocalStorage",Hs="fbase_key";class Zt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Pn(i,e){return i.transaction([Sn],e?"readwrite":"readonly").objectStore(Sn)}function Ru(){const i=indexedDB.deleteDatabase(js);return new Zt(i).toPromise()}function vr(){const i=indexedDB.open(js,Du);return new Promise((e,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const c=i.result;try{c.createObjectStore(Sn,{keyPath:Hs})}catch(f){r(f)}}),i.addEventListener("success",async()=>{const c=i.result;c.objectStoreNames.contains(Sn)?e(c):(c.close(),await Ru(),e(await vr()))})})}async function Ui(i,e,r){const c=Pn(i,!0).put({[Hs]:e,value:r});return new Zt(c).toPromise()}async function Lu(i,e){const r=Pn(i,!1).get(e),c=await new Zt(r).toPromise();return c===void 0?null:c.value}function ji(i,e){const r=Pn(i,!0).delete(e);return new Zt(r).toPromise()}const Mu=800,Uu=3;class Fs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const c=await this._openDb();return await e(c)}catch(c){if(r++>Uu)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Us()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(Ou()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Pu(),!this.activeServiceWorker)return;this.sender=new ku(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&!((e=c[0])===null||e===void 0)&&e.fulfilled&&!((r=c[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vr();return await Ui(e,En,"1"),await ji(e,En),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(c=>Ui(c,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(c=>Lu(c,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ji(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(f=>{const h=Pn(f,!1).getAll();return new Zt(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],c=new Set;if(e.length!==0)for(const{fbase_key:f,value:h}of e)c.add(f),JSON.stringify(this.localCache[f])!==JSON.stringify(h)&&(this.notifyListeners(f,h),r.push(f));for(const f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),r.push(f));return r}notifyListeners(e,r){this.localCache[e]=r;const c=this.listeners[e];if(c)for(const f of Array.from(c))f(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fs.type="LOCAL";const ju=Fs;new Yt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(i,e){return e?qe(e):(F(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Ns{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Et(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Et(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Et(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Hu(i){return yu(i.auth,new Pr(i),i.bypassAuthState)}function Fu(i){const{auth:e,user:r}=i;return F(r,e,"internal-error"),vu(r,new Pr(i),i.bypassAuthState)}async function Bu(i){const{auth:e,user:r}=i;return F(r,e,"internal-error"),mu(r,new Pr(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,r,c,f,h=!1){this.auth=e,this.resolver=c,this.user=f,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:c,postBody:f,tenantId:h,error:v,type:A}=e;if(v){this.reject(v);return}const C={auth:this.auth,requestUri:r,sessionId:c,tenantId:h||void 0,postBody:f||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(A)(C))}catch(O){this.reject(O)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hu;case"linkViaPopup":case"linkViaRedirect":return Bu;case"reauthViaPopup":case"reauthViaRedirect":return Fu;default:Pe(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Yt(2e3,1e4);async function qu(i,e,r){if(Fe(i.app))return Promise.reject(_e(i,"operation-not-supported-in-this-environment"));const c=An(i);gs(i,e,kn);const f=xr(c,r);return new Ye(c,"signInViaPopup",e,f).executeNotNull()}async function Wu(i,e,r){const c=Ve(i);gs(c.auth,e,kn);const f=xr(c.auth,r);return new Ye(c.auth,"linkViaPopup",e,f,c).executeNotNull()}class Ye extends Bs{constructor(e,r,c,f,h){super(e,r,f,h),this.provider=c,this.authWindow=null,this.pollId=null,Ye.currentPopupAction&&Ye.currentPopupAction.cancel(),Ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=kr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,c;if(!((c=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||c===void 0)&&c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$u.get())};e()}}Ye.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="pendingRedirect",vn=new Map;class zu extends Bs{constructor(e,r,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,c),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const c=await Gu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(c)}catch(r){e=()=>Promise.reject(r)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gu(i,e){const r=Xu(e),c=Ju(i);if(!await c._isAvailable())return!1;const f=await c._get(r)==="true";return await c._remove(r),f}function Ku(i,e){vn.set(i._key(),e)}function Ju(i){return qe(i._redirectPersistence)}function Xu(i){return mn(Vu,i.config.apiKey,i.name)}async function Yu(i,e,r=!1){if(Fe(i.app))return Promise.reject(at(i));const c=An(i),f=xr(c,e),v=await new zu(c,f,r).execute();return v&&!r&&(delete v.user._redirectEventId,await c._persistUserIfCurrent(v.user),await c._setRedirectUser(null,e)),v}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=10*60*1e3;class Zu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(e,c)&&(r=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!el(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var c;if(e.error&&!$s(e)){const f=((c=e.error.code)===null||c===void 0?void 0:c.split("auth/")[1])||"internal-error";r.onError(_e(this.auth,f))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const c=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hi(e))}saveEventToCache(e){this.cachedEventUids.add(Hi(e)),this.lastProcessedEventTime=Date.now()}}function Hi(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function $s({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function el(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $s(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(i,e={}){return At(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rl=/^https?/;async function il(i){if(i.config.emulator)return;const{authorizedDomains:e}=await tl(i);for(const r of e)try{if(sl(r))return}catch{}Pe(i,"unauthorized-domain")}function sl(i){const e=gr(),{protocol:r,hostname:c}=new URL(e);if(i.startsWith("chrome-extension://")){const v=new URL(i);return v.hostname===""&&c===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&v.hostname===c}if(!rl.test(r))return!1;if(nl.test(i))return c===i;const f=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+f+"|"+f+")$","i").test(c)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Yt(3e4,6e4);function Fi(){const i=xe().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function al(i){return new Promise((e,r)=>{var c,f,h;function v(){Fi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fi(),r(_e(i,"network-request-failed"))},timeout:ol.get()})}if(!((f=(c=xe().gapi)===null||c===void 0?void 0:c.iframes)===null||f===void 0)&&f.Iframe)e(gapi.iframes.getContext());else if(!((h=xe().gapi)===null||h===void 0)&&h.load)v();else{const A=uu("iframefcb");return xe()[A]=()=>{gapi.load?v():r(_e(i,"network-request-failed"))},au(`${cu()}?onload=${A}`).catch(C=>r(C))}}).catch(e=>{throw yn=null,e})}let yn=null;function cl(i){return yn=yn||al(i),yn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Yt(5e3,15e3),ll="__/auth/iframe",fl="emulator/auth/iframe",dl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pl(i){const e=i.config;F(e.authDomain,i,"auth-domain-config-required");const r=e.emulator?Ir(e,fl):`https://${i.config.authDomain}/${ll}`,c={apiKey:e.apiKey,appName:i.name,v:Xt},f=hl.get(i.config.apiHost);f&&(c.eid=f);const h=i._getFrameworks();return h.length&&(c.fw=h.join(",")),`${r}?${Jt(c).slice(1)}`}async function gl(i){const e=await cl(i),r=xe().gapi;return F(r,i,"internal-error"),e.open({where:document.body,url:pl(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dl,dontclear:!0},c=>new Promise(async(f,h)=>{await c.restyle({setHideOnLeave:!1});const v=_e(i,"network-request-failed"),A=xe().setTimeout(()=>{h(v)},ul.get());function C(){xe().clearTimeout(A),f(c)}c.ping(C).then(C,()=>{h(v)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vl=500,yl=600,bl="_blank",_l="http://localhost";class Bi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wl(i,e,r,c=vl,f=yl){const h=Math.max((window.screen.availHeight-f)/2,0).toString(),v=Math.max((window.screen.availWidth-c)/2,0).toString();let A="";const C=Object.assign(Object.assign({},ml),{width:c.toString(),height:f.toString(),top:h,left:v}),O=ce().toLowerCase();r&&(A=Is(O)?bl:r),Ts(O)&&(e=e||_l,C.scrollbars="yes");const J=Object.entries(C).reduce((ie,[ve,M])=>`${ie}${ve}=${M},`,"");if(Qc(O)&&A!=="_self")return Tl(e||"",A),new Bi(null);const Q=window.open(e||"",A,J);F(Q,i,"popup-blocked");try{Q.focus()}catch{}return new Bi(Q)}function Tl(i,e){const r=document.createElement("a");r.href=i,r.target=e;const c=document.createEvent("MouseEvent");c.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="__/auth/handler",El="emulator/auth/handler",Sl=encodeURIComponent("fac");async function $i(i,e,r,c,f,h){F(i.config.authDomain,i,"auth-domain-config-required"),F(i.config.apiKey,i,"invalid-api-key");const v={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:c,v:Xt,eventId:f};if(e instanceof kn){e.setDefaultLanguage(i.languageCode),v.providerId=e.providerId||"",Ta(e.getCustomParameters())||(v.customParameters=JSON.stringify(e.getCustomParameters()));for(const[J,Q]of Object.entries({}))v[J]=Q}if(e instanceof Qt){const J=e.getScopes().filter(Q=>Q!=="");J.length>0&&(v.scopes=J.join(","))}i.tenantId&&(v.tid=i.tenantId);const A=v;for(const J of Object.keys(A))A[J]===void 0&&delete A[J];const C=await i._getAppCheckToken(),O=C?`#${Sl}=${encodeURIComponent(C)}`:"";return`${Cl(i)}?${Jt(A).slice(1)}${O}`}function Cl({config:i}){return i.emulator?Ir(i,El):`https://${i.authDomain}/${Il}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="webStorageSupport";class Al{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ms,this._completeRedirectFn=Yu,this._overrideRedirectResult=Ku}async _openPopup(e,r,c,f){var h;We((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const v=await $i(e,r,c,gr(),f);return wl(e,v,kr())}async _openRedirect(e,r,c,f){await this._originValidation(e);const h=await $i(e,r,c,gr(),f);return xu(h),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:f,promise:h}=this.eventManagers[r];return f?Promise.resolve(f):(We(h,"If manager is not set, promise should be"),h)}const c=this.initAndGetManager(e);return this.eventManagers[r]={promise:c},c.catch(()=>{delete this.eventManagers[r]}),c}async initAndGetManager(e){const r=await gl(e),c=new Zu(e);return r.register("authEvent",f=>(F(f==null?void 0:f.authEvent,e,"invalid-auth-event"),{status:c.onEvent(f.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=r,c}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(cr,{type:cr},f=>{var h;const v=(h=f==null?void 0:f[0])===null||h===void 0?void 0:h[cr];v!==void 0&&r(!!v),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=il(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ks()||Cr()||Cn()}}const kl=Al;var qi="@firebase/auth",Wi="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(c=>{e((c==null?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nl(i){Vt(new St("auth",(e,{options:r})=>{const c=e.getProvider("app").getImmediate(),f=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:v,authDomain:A}=c.options;F(v&&!v.includes(":"),"invalid-api-key",{appName:c.name});const C={apiKey:v,authDomain:A,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xs(i)},O=new su(c,f,h,C);return fu(O,r),O},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,c)=>{e.getProvider("auth-internal").initialize()})),Vt(new St("auth-internal",e=>{const r=An(e.getProvider("auth").getImmediate());return(c=>new xl(c))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(qi,Wi,Pl(i)),wt(qi,Wi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=5*60,Dl=ss("authIdTokenMaxAge")||Ol;let Vi=null;const Rl=i=>async e=>{const r=e&&await e.getIdTokenResult(),c=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(c&&c>Dl)return;const f=r==null?void 0:r.token;Vi!==f&&(Vi=f,await fetch(i,{method:f?"POST":"DELETE",headers:f?{Authorization:`Bearer ${f}`}:{}}))};function Ll(i=Ic()){const e=us(i,"auth");if(e.isInitialized())return e.getImmediate();const r=lu(i,{popupRedirectResolver:kl,persistence:[ju,Cu,Ms]}),c=ss("authTokenSyncURL");if(c&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(c,location.origin);if(location.origin===h.origin){const v=Rl(h.toString());_u(r,v,()=>v(r.currentUser)),bu(r,A=>v(A))}}const f=fa("auth");return f&&du(r,`http://${f}`),r}function Ml(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}ou({loadJS(i){return new Promise((e,r)=>{const c=document.createElement("script");c.setAttribute("src",i),c.onload=e,c.onerror=f=>{const h=_e("internal-error");h.customData=f,r(h)},c.type="text/javascript",c.charset="UTF-8",Ml().appendChild(c)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nl("Browser");const Ul={apiKey:"AIzaSyBWPEHWfAmgf8_iyLbvHm8u6GQ7Ekej1yE",authDomain:"stellar-tv.firebaseapp.com",projectId:"stellar-tv",storageBucket:"stellar-tv.appspot.com",messagingSenderId:"643249450766",appId:"1:643249450766:web:0519447b2472772f0cf15f"},jl=ls(Ul),kt=Ll(jl),qs=new Ue,Ws=new je,Vs=new He,zi=oe("#login-buttons"),Hl=oe("#login-google"),Fl=oe("#login-github"),Bl=oe("#login-twitter"),Gi=oe("#user-info"),Ki=oe("#user-avatar"),Ji=oe("#welcome-message"),$l=oe("#logout"),zs=oe("#link-google"),Gs=oe("#link-github"),Ks=oe("#link-twitter"),Xi=oe("#linked-google"),Yi=oe("#linked-github"),Qi=oe("#linked-twitter"),ql=oe("#google-username"),Wl=oe("#github-username"),Vl=oe("#twitter-username"),Nr=i=>{qu(kt,i).then(()=>{en()}).catch(()=>{alert("Sign-in failed. Please try again.")})},zl=()=>Nr(qs),Gl=()=>Nr(Ws),Kl=()=>Nr(Vs),Or=i=>{const e=kt.currentUser;e&&Wu(e,i).then(()=>{en()}).catch(()=>{alert("Linking failed. Please try again.")})},Jl=()=>Or(qs),Xl=()=>Or(Ws),Yl=()=>Or(Vs),Ql=()=>{Tu(kt).then(()=>{en()}).catch(()=>{alert("Sign-out failed. Please try again.")})},ur=(i,e,r,c,f)=>{var h;if(e){f.removeClass("hidden"),c.hide();const v=(h=kt.currentUser)==null?void 0:h.providerData.find(C=>C.providerId===i);let A="Unknown";i==="github.com"?A=(v==null?void 0:v.displayName)||(v==null?void 0:v.email)||"GitHub User":A=(v==null?void 0:v.displayName)||(v==null?void 0:v.email)||"Unknown User",r.text(A)}else f.addClass("hidden"),c.show()},en=()=>{const i=kt.currentUser;if(i){const e=new Set(i.providerData.map(r=>r.providerId));ur("google.com",e.has("google.com"),ql,zs,Xi),ur("github.com",e.has("github.com"),Wl,Gs,Yi),ur("twitter.com",e.has("twitter.com"),Vl,Ks,Qi),zi.addClass("hidden"),Gi.removeClass("hidden"),Ji.text(`Hiya! ${i.displayName||i.email||"User"}`),Ki.attr("src",i.photoURL||"")}else zi.removeClass("hidden"),Gi.addClass("hidden"),Ji.text(""),Ki.attr("src",""),Xi.addClass("hidden"),Yi.addClass("hidden"),Qi.addClass("hidden")};wu(kt,i=>{en()});Hl.on("click",zl);Fl.on("click",Gl);Bl.on("click",Kl);$l.on("click",Ql);zs.on("click",Jl);Gs.on("click",Xl);Ks.on("click",Yl);en();
