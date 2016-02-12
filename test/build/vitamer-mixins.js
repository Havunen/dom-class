/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
/*@cc_on (function(f){window.setTimeout=f(window.setTimeout);window.setInterval=f(window.setInterval)})(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}}); @*/
(function(e){"use strict";function t(){return l.createDocumentFragment()}function n(e){return l.createElement(e)}function r(e){if(e.length===1)return i(e[0]);for(var n=t(),r=I.call(e),s=0;s<e.length;s++)n.appendChild(i(r[s]));return n}function i(e){return typeof e=="string"?l.createTextNode(e):e}for(var s,o,u,a,f,l=e.document,c=Object.defineProperty||function(e,t,n){e.__defineGetter__(t,n.get)},h=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},p=function(e){if(!e)throw"SyntaxError";if(y.test(e))throw"InvalidCharacterError";return e},d=function(e){var t=e.className,n=typeof t=="object",r=(n?t.baseVal:t).replace(g,"");r.length&&F.push.apply(this,r.split(y)),this._isSVG=n,this._=e},v={get:function(){return new d(this)},set:function(){}},m="dom4-tmp-".concat(Math.random()*+(new Date)).replace(".","-"),g=/^\s+|\s+$/g,y=/\s+/,b=" ",w="classList",E=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},S=e.DocumentFragment&&DocumentFragment.prototype,x=e.Node,T=(x||Element).prototype,N=e.CharacterData||x,C=N&&N.prototype,k=e.DocumentType,L=k&&k.prototype,A=(e.Element||x||e.HTMLElement).prototype,O=e.HTMLSelectElement||n("select").constructor,M=O.prototype.remove,_=e.ShadowRoot,D=e.SVGElement,P=/ /g,H="\\ ",B=function(e){var t=e==="querySelectorAll";return function(n){var r,i,s,o,u,a,f=this.parentNode;if(f){for(s=this.getAttribute("id")||m,o=s===m?s:s.replace(P,H),a=n.split(","),i=0;i<a.length;i++)a[i]="#"+o+" "+a[i];n=a.join(",")}s===m&&this.setAttribute("id",s),u=(f||this)[e](n),s===m&&this.removeAttribute("id");if(t){i=u.length,r=new Array(i);while(i--)r[i]=u[i]}else r=u;return r}},j=function(e){"query"in e||(e.query=A.query),"queryAll"in e||(e.queryAll=A.queryAll)},F=["matches",A.matchesSelector||A.webkitMatchesSelector||A.khtmlMatchesSelector||A.mozMatchesSelector||A.msMatchesSelector||A.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<h.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,n=r(arguments);t?this.insertBefore(n,t):this.appendChild(n)},"append",function(){this.appendChild(r(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(r(arguments),this)},"after",function(){var t=this.parentNode,n=this.nextSibling,i=r(arguments);t&&(n?t.insertBefore(i,n):t.appendChild(i))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(r(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",B("querySelector"),"queryAll",B("querySelectorAll")],I=F.slice,q=F.length;q;q-=2){o=F[q-2],o in A||(A[o]=F[q-1]),o==="remove"&&(O.prototype[o]=function(){return 0<arguments.length?M.apply(this,arguments):A.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(o)&&(N&&!(o in C)&&(C[o]=F[q-1]),k&&!(o in L)&&(L[o]=F[q-1]));if(/^(?:append|prepend)$/.test(o))if(S)o in S||(S[o]=F[q-1]);else try{t().constructor.prototype[o]=F[q-1]}catch(R){}}j(l);if(S)j(S);else try{j(t().constructor.prototype)}catch(R){}_&&j(_.prototype),n("a").matches("a")||(A[o]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(A[o])),d.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||F.push.call(this,o);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return q=e.call(this,o=p(n)),-1<q}}([].indexOf||function(e){q=this.length;while(q--&&this[q]!==e);return q}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&F.splice.call(this,q,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:E,toString:function U(){return F.join.call(this,b)}},D&&!(w in D.prototype)&&c(D.prototype,w,v),w in l.documentElement?(a=n("div")[w],a.add("a","b","a"),"a b"!=a&&(u=a.constructor.prototype,"add"in u||(u=e.TemporaryTokenList.prototype),f=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},u.add=f(u.add),u.remove=f(u.remove),u.toggle=E)):c(A,w,v),"contains"in T||c(T,"contains",{value:function(e){while(e&&e!==this)e=e.parentNode;return this===e}}),"head"in l||c(l,"head",{get:function(){return s||(s=l.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],s=i.length;!r&&s--;)n=n||e[i[s]+"RequestAnimationFrame"],r=e[i[s]+"CancelAnimationFrame"]||e[i[s]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(R){e.CustomEvent=function(e,t){function n(n,i){var s=l.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}})(window);
(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");
var restyle=function(e){"use strict";function f(e,t,n,r,i){this.component=e,this.node=t,this.css=n,this.prefixes=r,this.doc=i}function l(e){e instanceof f||(e=a(this.component,e,this.prefixes,this.doc)),this.remove(),f.call(this,e.component,e.node,e.css,e.prefixes,e.doc)}function c(e,t,n){return t+"-"+n.toLowerCase()}function h(e,t,n){var i=[],s=typeof t=="number"?"px":"",o=e.replace(r,c),u;for(u=0;u<n.length;u++)i.push("-",n[u],"-",o,":",t,s,";");return i.push(o,":",t,s,";"),i.join("")}function p(e,t){return e.length?e+"-"+t:t}function d(e,t,r,i){var s,u,a;for(s in r)if(n.call(r,s))if(typeof r[s]=="object")if(o(r[s])){u=r[s];for(a=0;a<u.length;a++)e.push(h(p(t,s),u[a],i))}else d(e,p(t,s),r[s],i);else e.push(h(p(t,s),r[s],i));return e.join("")}function v(e,t,r){var o=[],a,f,l,c,h,p,m,g,y,b;for(m in t)if(n.call(t,m)){b=m.length,b||(m=e.slice(0,-1)),a=m.charAt(0)==="@",p=a||!e.indexOf(m+" "),f=a&&s.test(m)?e:"",l=a&&!i.test(m),c=l?m.slice(1):m,g=u.concat(t[b?m:""]);for(y=0;y<g.length;y++){h=g[y];if(l){b=r.length;while(b--)o.push("@-",r[b],"-",c,"{",v(f,h,[r[b]]),"}");o.push(m,"{",v(f,h,r),"}")}else o.push(p?m:e+m,"{",d([],"",h,r),"}")}}return o.join("")}var t=e.toString,n=e.hasOwnProperty,r=/([a-z])([A-Z])/g,i=/^@(?:page|font-face)/,s=/^@(?:media)/,o=Array.isArray||function(e){return t.call(e)==="[object Array]"},u=[],a;return f.prototype={overwrite:l,replace:l,set:l,remove:function(){var e=this.node,t=e.parentNode;t&&t.removeChild(e)},valueOf:function(){return this.css}},{"undefined":!0}[typeof document]?(a=function(e,t,n){return typeof e=="object"?(n=t,t=e,e=""):e+=" ",v(e,t,n||u)},a.restyle=a):a=function(e,t,n,r){typeof e=="object"?(r=n,n=t,t=e,i=e=""):i=e+" ";var i,s=r||(r=document),o=v(i,t,n||(n=a.prefixes)),u=s.head||s.getElementsByTagName("head")[0]||s.documentElement,l=u.insertBefore(s.createElement("style"),u.lastChild);return l.type="text/css",l.styleSheet?l.styleSheet.cssText=o:l.appendChild(s.createTextNode(o)),new f(e,l,o,n,r)},{"undefined":!0}[typeof window]||(a.animate=function(t){var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,10)},r={},i="restyle-".concat(Math.random()*+(new Date),"-"),s=0,o,u;switch(!0){case!!t.AnimationEvent:o="animationend";break;case!!t.WebKitAnimationEvent:o="webkitAnimationEnd";break;case!!t.MSAnimationEvent:o="MSAnimationEnd";break;case!!t.OAnimationEvent:o="oanimationend"}switch(!0){case!!t.TransitionEvent:u="transitionend";break;case!!t.WebKitTransitionEvent:u="webkitTransitionEnd";break;case!!t.MSTransitionEvent:u="MSTransitionEnd";break;case!!t.OTransitionEvent:u="oTransitionEnd"}a.transition=function(e,t,o){function b(){u?e.removeEventListener(u,E,!1):(clearTimeout(y),y=0)}function w(){d[v]=g.last=S(h,c.shift()),g.css.replace(d),u?e.addEventListener(u,E,!1):y=setTimeout(E,10)}function E(t){b(),c.length?n(w):(t?t.detail=m:t=new CustomEvent("transitionend",{detail:m}),o&&o.call(e,t))}function S(e,t){for(var n in t)e[n]=t[n];return e}var f=t.transition||"all .3s ease-out",l=e.getAttribute("id"),c=[].concat(t.to),h=S({},t.from),p=!l,d={},v,m,g,y;return p&&e.setAttribute("id",l=(i+s++).replace(".","-")),v="#"+l,r.hasOwnProperty(l)?(g=r[l],h=g.last=S(g.last,h),d[v]=h,g.transition.remove(),g.css.replace(d)):g=r[l]={last:d[v]=h,css:a(d)},n(function(){d[v]={transition:f},g.transition=a(d),n(w)}),m={clean:function(){p&&e.removeAttribute("id"),b(),g.transition.remove(),g.css.remove(),delete r[l]},drop:b}},f.prototype.getAnimationDuration=function(e,t){for(var n,r,i=e.className.split(/\s+/),s=i.length;s--;){n=i[s];if(n.length&&(new RegExp("\\."+n+"(?:|\\{|\\,)([^}]+?)\\}")).test(this.css)){n=RegExp.$1;if((new RegExp("animation-name:"+t+";.*?animation-duration:([^;]+?);")).test(n)||(new RegExp("animation:\\s*"+t+"\\s+([^\\s]+?);")).test(n)){n=RegExp.$1,r=parseFloat(n);if(r)return r*(/[^m]s$/.test(n)?1e3:1)}}}return-1},f.prototype.getTransitionDuration=function(e){var t=getComputedStyle(e),n=t.getPropertyValue("transition-duration")||/\s(\d+(?:ms|s))/.test(t.getPropertyValue("transition"))&&RegExp.$1;return parseFloat(n)*(/[^m]s$/.test(n)?1e3:1)},f.prototype.transit=u?function(e,t){function n(n){r(),t.call(e,n)}function r(){e.removeEventListener(u,n,!1)}return e.addEventListener(u,n,!1),{drop:r}}:function(e,t){var n=setTimeout(t,this.getTransitionDuration(e));return{drop:function(){clearTimeout(n)}}},f.prototype.animate=o?function(t,n,r){function i(e){e.animationName===n&&(s(),r.call(t,e))}function s(){t.removeEventListener(o,i,!1)}return t.addEventListener(o,i,!1),{drop:s}}:function(n,r,i){var s,o,u=this.getAnimationDuration(n,r);return u<0?o=e:(s=setTimeout(function(){i.call(n,{type:"animationend",animationName:r,currentTarget:n,target:n,stopImmediatePropagation:e,stopPropagation:e,preventDefault:e})},u),o=function(){clearTimeout(s)}),{drop:o}}}(window)),a.customElement=function(e,t,n){var r,i="extends",s=Object.create(t.prototype),o={prototype:s},u=o.hasOwnProperty,f=n&&u.call(n,i);f&&(o[i]=n[i]);for(r in n)r!==i&&(s[r]=r==="css"?a(f?n[i]+"[is="+e+"]":e,n[r]):n[r]);return document.registerElement(e,o)},a.prefixes=["webkit","moz","ms","o"],a}({});
var Class=Class||function(e){"use strict";function D(e,t,n,r){for(var s,o=[],u=0;u<e.length;u++)s=X(e[u]),d.call(s,i)&&o.push(s[i]),B(s,t,n,!1,!1,r);return o}function P(e){for(var t,n,r,i=y(N(e)),s=C(e),o=0;o<s.length;o++)t=s[o],n=E(e,t),d.call(n,f)&&j(n,P),w(i,t,n);return i}function H(e,t){for(var n,r,i,s,o=C(e),u=0;u<o.length;u++)n=o[u],r=E(e,n),d.call(t,n)?d.call(r,f)&&(i=r[f],z(i)&&(r=E(t,n),d.call(r,f)&&(s=r[f],z(s)&&H(i,s)))):(d.call(r,f)&&j(r,P),w(t,n,r))}function B(e,t,n,r,i,s){for(var o,u=typeof e!="function",a=C(e),f=0;f<a.length;f++)o=a[f],(u||A.call(L,o)<0)&&U(o,i)&&(d.call(t,o)&&J("duplicated: "+o.toString()),V(n,t,o,E(e,o),r,s))}function j(e,t){var n=e[f];z(n)&&(e[f]=t(n))}function F(e,t){var n=function(){};return e&&""+t!=""+n?function(){return t.apply(this,arguments)}:n}function I(e,t,n,r){var i=R(t,r);w(e,t,{enumerable:!1,configurable:i,writable:i,value:n})}function q(e){return e?(e<65||90<e)&&(e<97||122<e)&&e!==95:!0}function R(e,t){return t?!W(e):!0}function U(e,a){return e!==t&&e!==n&&e!==r&&e!==s&&e!==o&&e!==u&&e!==l&&(a||e!==i)}function z(e){return e!=null&&typeof e=="object"}function W(e){for(var t,n=0;n<e.length;n++){t=e.charCodeAt(n);if((t<65||90<t)&&t!==95)return!1}return!0}function X(t){if(z(t))return t;var n,r,s,o,u;if(t.isClass){t.length&&J((t.name||"Class")+" should not expect arguments");for(o={init:t},u=t.prototype;u&&u!==e.prototype;u=N(u))for(n=0,s=C(u);n<s.length;n++)r=s[n],U(r,!1)&&!d.call(o,r)&&w(o,r,E(u,r))}else for(n=0,o={},u=t({}),s=C(u);n<s.length;n++)r=s[n],r!==i&&(~r.toString().indexOf("mixin:init")&&k(u[r])?o.init=u[r][0]:w(o,r,E(u,r)));return o}function V(e,n,r,i,s,o){var u=d.call(i,f),a,l;if(s){if(d.call(n,r)){e&&z(n[r])&&z(e[t][r])&&H(e[t][r],n[r]);return}u&&j(i,P)}else u?(l=i[f],typeof l=="function"&&M(l)&&(i[f]=K(e,r,l,s))):o&&(Q(e,r,i,"get"),Q(e,r,i,"set"));a=R(r,s),i.enumerable=!1,i.configurable=a,u&&(i.writable=a),w(n,r,i)}function $(e,t){for(var n,r,i=0;i<e.length;i++){n=e[i];for(r in n)d.call(n,r)&&!d.call(t,r)&&J(r.toString()+" is not implemented")}}function J(e){try{console.warn(e)}catch(t){}}function K(e,t,n,r){return function(){d.call(this,u)||I(this,u,null,r);var i=this[u],s=this[u]=e[t],o=n.apply(this,arguments);return this[u]=i,o}}function Q(e,t,n,r,i){d.call(n,r)&&M(n[r])&&(n[r]=K(E(e,t),r,n[r],i))}var t="constructor",n="extends",r="implements",i="init",s="prototype",o="static",u="super",a="toString",f="value",l="with",c="__proto__",h=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString",a,"valueOf"],p=e[s],d=p[h[0]],v=p[a],m=p[h[2]]||function(e){for(var t in this)if(e===t)return d.call(this,e);return!1},g=!m.call({toString:0},a),y=e.create||function(e){var t=this instanceof y;return y[s]=t?b:e||p,t?this:new y},b=y[s],w=e.defineProperty,E=e.getOwnPropertyDescriptor,S=e.getOwnPropertyNames||function(e){var t=[],n,r;for(r in e)d.call(e,r)&&t.push(r);if(g)for(n=0;n<h.length;n++)r=h[n],d.call(e,r)&&t.push(r);return t},x=e.getOwnPropertySymbols||function(){return[]},T=e.getPrototypeOf,N=T||function(e){return e[c]||null},C=function(e){return S(e).concat(x(e))},k=Array.isArray||function(e){return v.call(e)==="[object Array]"},L=S(function(){}).concat("arguments"),A=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},O={value:!0},M=(""+function(){this["super"]()}).indexOf(u)<0?function(){return!0}:function(e){var t=""+e,n=t.indexOf(u);return n<0?!1:q(t.charCodeAt(n-1))&&q(t.charCodeAt(n+5))};try{w({},"{}",{})}catch(_){"__defineGetter__"in{}?(w=function(e,t,n){return d.call(n,f)?e[t]=n[f]:(d.call(n,"get")&&e.__defineGetter__(t,n.get),d.call(n,"set")&&e.__defineSetter__(t,n.set)),e},E=function(e,t){var n=e.__lookupGetter__(t),r=e.__lookupSetter__(t),i={};return n||r?(n&&(i.get=n),r&&(i.set=r)):i[f]=e[t],i}):(w=function(e,t,n){return e[t]=n[f],e},E=function(e,t){return{value:e[t]}})}return function(e){var i=d.call(e,t),u=d.call(e,n),a=u&&e[n],f=u&&typeof a=="function",h=f?a[s]:a,p=i?e[t]:F(f,a),m=u&&i&&M(p),g=u?y(h):p[s],b=v.call(h).indexOf(" GObject_")<0,E,S;return m&&b&&(p=K(h,t,p,!1)),d.call(e,l)&&(E=D([].concat(e[l]),g,h,b),S=E.length,S&&(p=function(e){return function(){var t=0;while(t<S)E[t++].call(this);return e.apply(this,arguments)}}(p),p[s]=g)),d.call(e,o)&&B(e[o],p,h,!0,!0,b),u&&(a!==h&&B(a,p,h,!0,!0,b),p[s]=g),g[t]!==p&&I(g,t,p,!1),B(e,g,h,!1,!0,b),d.call(e,r)&&$([].concat(e[r]),g),u&&!T&&I(g,c,h,!1),w(p,"isClass",O)}}(Object);
var DOMClass=function(e,t,n){"use strict";var r="onAttached",i="attachedCallback",s="onChanged",o="attributeChangedCallback",u="constructor",a="createdCallback",f="css",l="<style>",c="stylesheet",h="onDetached",p="detachedCallback",d="extends",v="name",m=e.document,g=m.documentElement,y=n.hasOwnProperty,b=t.prototype,w=function(e,t){for(var n,r=C(e),i=r.length;i--;)n=r[i],L.indexOf(n)<0&&!y.call(t,n)&&E(t,n,S(e,n))},E=n.defineProperty,S=n.getOwnPropertyDescriptor,x=n.getOwnPropertyNames||n.keys||function(e){var t=[],n;for(n in e)y.call(e,n)&&t.push(n);return t},T=n.getOwnPropertySymbols||function(){return b},N=function(t){return e["HTML"+t+"Element"]},C=function(e){return T(e).concat(x(e))},k=function(e,t){if(!t.length){var n=e.getAttribute("data-arguments");n&&(t=n.charAt(0)==="["?JSON.parse(n):n.split(/\s*,\s*/))}return t},L=C(function(){}),A=function(e,t,n,r){y.call(e,t)&&(n[r]=e[t])},O=function(){for(var n=+this,r=n,i=arguments.length,s=i-n,o=new t(s<0?0:s);r<i;r++)o[r-n]=arguments[r];return o},M=function(e){return e+"-i-"+(y.call(P,e)?++P[e]:P[e]=0)},_=function(e,t,n){var r;e.setAttribute("dom-class-uid",n),E(e,f,{configurable:!0,get:function(){return r||(r=restyle(t+'[dom-class-uid="'+n+'"]',{}))},set:function(t){e[f].replace(t)}})},D=function(e,t){var n=new XMLHttpRequest,r=m.body||m.head||g,i,s;try{n.open("GET",t,!1),n.send(null),i=n.responseText,s=r.insertBefore(m.createElement("style"),r.lastChild),s.type="text/css","styleSheet"in s?s.styleSheet.cssText=i:s.appendChild(m.createTextNode(i))}catch(o){console.error('DAMNIT');s=m.createElement("link"),s.href=t,s.rel="stylesheet",s.type="text/css",r.insertBefore(s,r.lastChild)}return g.offsetWidth},P={},H=0;return function(t){var n=function(){return C&&(C=!1,D(F,L)),g=O.apply(0,arguments),new B},g=b,S={},x=y.call(t,f),T=y.call(t,u),C=y.call(t,c),L=C&&t[c],P=T&&t[u],B,j,F,I,q;A(t,r,S,i),A(t,s,S,o),A(t,h,S,p);for(F in t)if(y.call(t,F))switch(F){case r:case s:case u:case h:case d:case v:case f:case c:break;default:S[F]=t[F]}S[d]=y.call(t,d)?t[d].prototype:HTMLElement.prototype;if(S[d]instanceof HTMLElement)switch(t[d]){case N("Anchor"):q="a";break;case N("Audio"):q="audio";break;case N("BR"):q="br";break;case N("Body"):q="body";break;case N("Button"):q="button";break;case N("Canvas"):q="canvas";break;case N("Col"):q="col";break;case N("DataList"):q="dl";break;case N("Div"):q="div";break;case N("Form"):q="form";break;case N("HR"):q="hr";break;case N("Head"):q="head";break;case N("IFrame"):q="iframe";break;case N("Image"):q="img";break;case N("Input"):q="input";break;case N("LI"):q="li";break;case N("Label"):q="label";break;case N("Legend"):q="legend";break;case N("Link"):q="link";break;case N("Menu"):q="menu";break;case N("OList"):q="ol";break;case N("Option"):q="option";break;case N("Paragraph"):q="p";break;case N("Progress"):q="progress";break;case N("Quote"):q="quote";break;case N("Select"):q="select";break;case N("Span"):q="span";break;case N("Style"):q="style";break;case N("Table"):q="table";break;case N("TableCaption"):q="caption";break;case N("TableCell"):q="td";break;case N("TableCol"):q="colgroup";break;case N("TableRow"):q="tr";break;case N("TableSection"):q="tbody";break;case N("Table"):q="table";break;case N("Table"):q="table";break;case N("TextArea"):q="textarea";break;case N("Track"):q="track";break;case N("UList"):q="ul";break;case N("Video"):q="video"}return F=y.call(t,v)?t[v]:"x-dom-class-"+H++,x&&(S[l]=restyle(F,t[f])),S[a]=function(){var e=k(this,g);g=b,j.apply(this,e),x&&_(this,F,M(F)),T&&P.apply(this,e)},j=new Class(S),w(j,n),I={prototype:j.prototype},q&&(I[d]=q),B=m.registerElement(F,I),n.prototype=B.prototype,E(B.prototype,u,{value:n}),n}}(this&&this.window||global,Array,Object);
Object.defineProperty(DOMClass,"data",{enumerable:!0,value:{data:function(t,n){"use strict";var r,i="data-dom-class-"+String(t).replace(/([a-z])([A-Z])/g,function(e,t,n){return t+"-"+n.toLowerCase()}).toLowerCase();if(arguments.length!==2)return r=this.getAttribute(i),r==null?r:JSON.parse(r);n==null?this.removeAttribute(i):this.setAttribute(i,JSON.stringify(n))}}});
Object.defineProperty(DOMClass,"bindings",{enumerable:!0,value:function(e){"use strict";function j(e,t,n,r,i){var s,o=T.call(e,t)&&d(e,t).set;return h(e,t,A(function(){return s},function(a){n.nodeValue=s=a,r&&i(t),o&&o.call(e,a)})),n}function F(e,t,n,r,i,s){var o=T.call(e,t)&&d(e,t).set,u=I(n,r);return h(e,t,A(function(){return r},function(f){u=q(n,u,r=f),i&&s(t),o&&o.call(e,f)})),u.fragment}function I(e,t){var n,r;x.innerHTML="<!---->"+t+"<!---->",n={start:x.firstChild,end:x.lastChild,fragment:e.createDocumentFragment()};while(r=x.firstChild)n.fragment.appendChild(r);return n}function q(e,t,n){var r=t.start,i=r.parentNode,s;do s=r.nextSibling,i.removeChild(s);while(s!==t.end);return t=I(e,n),i.replaceChild(t.fragment,r),t}function R(e,t,n,r,i,s,o){var u=null,a=o?null:s.createTextNode("");return i.split(y).forEach(z,{autobots:t,bindings:n,method:e[r],source:e,onUpdate:o?function(e){u=u?q(s,u,e):I(s,e)}:function(e){a.nodeValue=e}}),a||u.fragment}function U(){var e=[],t=0;while(t<arguments.length)e[t]=this[arguments[t++]];return e}function z(e,t,n){var r=this.autobots,i=this.bindings,s=this.source,o=this.method,u=this.onUpdate,a=$(i,s,e).set,f=!!a;r[e]=s[e],h(i,e,A(function(){return r[e]},function(s){r[e]=s,u(o.apply(i,U.apply(r,n))),f&&a.call(i,s)})),u(o.apply(i,U.apply(r,n)))}function W(e,t){var n=e.childNodes,r=n.length,i,s;while(r--)i=n[r],s=i.nodeType,s===3?t.push(i):s===1&&!v.test(i.nodeName)&&W(i,t);return t}function X(e){switch(!0){case typeof e=="number":return e<0?-1:e;case e:return 133;default:return-1}}function V(e,t){h(e,"bindings",{configurable:!0,enumerable:!0,writable:!1,value:t})}function $(e,t,n){var r;return T.call(e,n)?r=d(e,n):(r=d(t,n)||S,r.set&&h(e,n,r)),r}var t=0,n=1,r=2,i=4,s="DOMAttrModified",o="attachedCallback",u="detachedCallback",a="getAttribute",f="setAttribute",l="destroyBindings",c=e.create,h=e.defineProperty,p=e.getPrototypeOf,d=e.getOwnPropertyDescriptor,v=/IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|SELECT|STYLE|TEXTAREA|[a-z]/,m=/\{\{\{?[\S\s]+?\}\}\}?/g,g=/^\{[\S\s]+?\}$/,y=/\s*,\s*/,b=/\s*:\s*/,w=/^\s+|\s+$/g,E=/^([\S]+?)\(([\S\s]*?)\)/,S={attributes:!0,subtree:!0},x=document.createElement("dummy"),T=S.hasOwnProperty,N=function(e,t){return e==null?t:e},C=function(e,t,n){e.addEventListener(t,n,!0)},k=function(e,t,n){e.removeEventListener(t,n,!0)},L=s.trim||function(){return this.replace(w,"")},A=function(e,t){return{configurable:!0,enumerable:!0,get:e,set:t}},O=function(e,t){return typeof t=="function"?function(){return t.apply(e,arguments)}:t},M=function(e,t){var n=e,r;while(n&&!T.call(n,t))n=p(n);if(n){r=d(n,t);if("set"in r&&"get"in r)try{if(r.get.call(e)!==e[t])throw r;return r}catch(i){}}return null},_=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,D=!!_,P=function(e){return setTimeout(requestAnimationFrame,100,e)},H=clearTimeout,B=D;return B||function(t,n){function r(){B=!0}C(t,s,r),t[f](n,1),t.removeAttribute(n),k(t,s,r)}(document.documentElement,"dom-"+(Math.random()+"-class").slice(2)),{init:function(){(this.template||this.bindings)&&this.createBindings(this)},createBindings:function(e){T.call(this,l)&&this[l](),e.template&&!L.call(this.innerHTML)&&(this.innerHTML=e.template);var p=this,d=p.ownerDocument||d,v=e.bindings||{},w=W(p,[]),x=c(null),I=c(null),q=c(e.bindings||null),U=p.queryAll("[data-bind]"),J=function(e){var t=e.attrName,n=Q;Q=i,q[I[t]]=e.currentTarget[a](t),Q=n},K=!1,Q=t,G=X(e.dispatchBindings||this.dispatchBindings),Y=-1<G,Z=Y&&c(null),et=Y&&function(e){delete Z[e],p.dispatchEvent(new CustomEvent("bindingChanged",{detail:{key:e,value:q[e]}}))},tt=G?function(e){e in Z&&clearTimeout(Z[e]),Z[e]=setTimeout(et,G,e)}:function(e){e in Z&&cancelAnimationFrame(Z[e]),Z[e]=requestAnimationFrame(function(){et(e)})},nt=!1,rt;return h(p,l,{configurable:!0,value:function(){var e;if(nt)return;nt=!0;if(Y)for(e in Z)G?clearTimeout(Z[e]):cancelAnimationFrame(Z[e]),delete Z[e];for(e in x)delete x[e];for(e in I)delete I[e];for(e in q)delete q[e];V(p,{}),K?rt.disconnect():B?U.forEach(function(e){k(e,s,J)}):U.forEach(function(e){delete e[f]})}}),w.forEach(function(e){var t,n,r,i,s,o=0,u=e.nodeValue,a=[],f=[],l=e.parentNode,c;while(r=m.exec(u))i=r.index,s=r[0].length,a.push(u.slice(o,i)),f.push(u.substr(i+2,s-4)),o=i+s;f.length&&(a.push(u.slice(o)),a.forEach(function(i,s){i.length&&l.insertBefore(d.createTextNode(i),e),s<f.length&&(n=L.call(f[s]),t=g.test(n),t&&(n=n.slice(1,-1)),(r=E.exec(n))?l.insertBefore(R(v,x,q,r[1],r[2],d,t),e):($(q,v,n),l.insertBefore(t?F(q,n,d,N(v[n],""),Y,tt):j(q,n,d.createTextNode(N(v[n],"")),Y,tt),e)))}),e.remove())}),U.forEach(function(e){var l=e[f],c=function(t,n){var r=Q;Q=i,l.call(this,t,n),t in I&&this===e&&(q[I[t]]=n),Q=r};e[a]("data-bind").split(y).filter(function(e,t,n){return e.indexOf("(")>0&&e.indexOf(")")<0?(n[t+1]=e+","+n[t+1],!1):!0}).forEach(function(d,m){var g=d.split(b),w=g[0],N=g[1]||w,L=w in e,_=g[1]&&E.exec(N),j,F,R,U,W,X,V;if(_)_[2].split(y).forEach(z,{autobots:x,bindings:q,method:v[_[1]],source:v,onUpdate:L?function(t){e[w]=O(q,t)}:function(t){l.call(e,w,t)}});else{I[w]=N,F=$(q,v,N).set,X=!!F;if(L){T.call(v,N)&&(e[w]=O(q,v[N])),h(q,N,A(function(){return e[w]},function(s){var o=Q;Q=n;switch(o){case t:case i:e[w]=s,Y&&tt(N)}X&&F.call(q,s),Q=o})),j=function(t){if(nt)return k(e,t.type,j);var n=Q;Q=i,q[N]=e[w],Q=n};switch(w){case"value":C(e,"input",j);case"checked":case"selectedIndex":C(e,"change",j)}R=M(e,w),R?(L=T.call(e,w),h(e,w,{configurable:!0,enumerable:R.enumerable,get:R.get,set:function(t){if(nt)return L?h(e,w,R):delete e[w];var n=Q;Q=r,R.set.call(e,t),q[N]=t,Q=n}})):(V=e[w],j=function(){if(nt)return;if(e[w]!==V){var t=Q;Q=r,V=e[w],q[N]=V,Q=t}m=P(j)},U=p[o],W=p[u],h(p,o,{configurable:!0,value:function(){nt||j(H(m)),U&&U.apply(e,arguments)}}),h(p,u,{configurable:!0,value:function(){nt||H(m),W&&W.apply(e,arguments)}}),j())}else T.call(v,N)&&l.call(e,w,v[N]),h(q,N,A(function(){return e[a](w)},function(o){var u=Q;Q=r;switch(u){case t:case n:D?rt.disconnect():B&&k(e,s,J),l.call(e,w,o),Y&&tt(N),D?rt.observe(p,S):B&&C(e,s,J)}X&&F.call(q,o),Q=u})),D?K=!0:B?C(e,s,J):e[f]!==c&&h(e,f,{configurable:!0,value:c})}}),e.removeAttribute("data-bind")}),K&&(rt=new _(function(e){var t=Q;Q=i;for(var n,r,s=0;s<e.length;s++)r=e[s],r.type==="attributes"&&(n=r.attributeName,n!=null&&n in I&&(q[I[n]]=r.target[a](n)));Q=t}),rt.observe(p,S)),V(p,q),p}}}(Object)});