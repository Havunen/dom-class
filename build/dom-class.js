/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
var DOMClass=function(e,t){"use strict";var n="onAttached",r="attachedCallback",i="onChanged",s="attributeChangedCallback",o="constructor",u="createdCallback",a="css",f="onDetached",l="detachedCallback",c="extends",h="name",p=t.hasOwnProperty,d=e.prototype,v=function(e,t,n,r){p.call(e,t)&&(n[r]=e[t])},m=function(){for(var n=+this,r=n,i=arguments.length,s=i-n,o=new e(s<0?0:s);r<i;r++)o[r-n]=arguments[r];return o},g=function(e){return e+"-i-"+(p.call(y,e)?++y[e]:y[e]=0)},y={},b=0;return function(t){var y=function(){return w=m.apply(0,arguments),new N},w=d,E={},S=p.call(t,a),x=p.call(t,o),T=x&&t[o],N,C,k;v(t,n,E,r),v(t,i,E,s),v(t,f,E,l);for(k in t)if(p.call(t,k))switch(k){case n:case i:case o:case f:case c:case h:case a:break;default:E[k]=t[k]}return E[c]=p.call(t,c)?t[c].prototype:HTMLElement.prototype,k=p.call(t,h)?t[h]:"x-dom-class-"+b++,S&&(E[a]=restyle(k,t[a])),E[u]=function(){C.apply(this,w),S&&(this.classList.add(g(k)),this.css=restyle(k+"."+this.className.split(" ").pop(),{})),x&&T.apply(this,w)},C=new Class(E),N=document.registerElement(k,{prototype:C.prototype}),y.prototype=N.prototype,y}}(Array,Object);