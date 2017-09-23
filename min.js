var hyperHTML=function(e,t){"use strict";function n(e){return arguments.length<2?null==e?q("html"):"string"==typeof e?i(null,e):"raw"in e?q("html")(e):"nodeType"in e?r(e):F(e,"html"):("raw"in e?q("html"):i).apply(null,arguments)}function r(e){return l.bind(e)}function i(e,t){return arguments.length<1?q("html"):null==e?q(t||"html"):F(e,t||"html")}function o(){}function a(e,n){return this.node=e,this.childNodes=n,t.aura(this,n)}function l(e){var t=Ne.get(this);return t&&t.template===re(e)||(t=B.apply(this,arguments),Ne.set(this,t)),z.apply(t.updates,arguments),this}function c(e,t,n){var r,i=e.ownerElement,o="data"===n,a=!o&&/^on/.test(n),l=o||x(i,n)&&!K.test(n),c=a?n.slice(2):"",u=l||a,s=l&&(o||n in i);return(a||o)&&(t.push(i,n),a&&n.toLowerCase()in i&&(c=c.toLowerCase())),a?function(e){r!==e&&(r&&i.removeEventListener(c,r,!1),r=e,e&&i.addEventListener(c,e,!1))}:l?function t(o){s?r!==o&&(r=o,i[n]!==o&&(null==o?(i[n]=null,i.removeAttribute(n)):i[n]=o)):(s=n in i,s?t(o):e.value=o)}:function(t){r!==t&&(r=t,e.value!==t&&(null==t?u||(u=!0,i.removeAttributeNode(e)):(e.value=t,u&&(u=!1,i.setAttributeNode(e)))))}}function u(e){var t;return function(n){n!==t&&(t=n,e.textContent=n)}}function s(e,r,i){var a;return function l(c){switch(typeof c){case"string":case"number":case"boolean":var u=r.length;1===u&&r[0].nodeType===Z?a!==c&&(a=c,r[0].textContent=c):(a=c,u?i.splice(0,u,w(e,c)):r[0]=e.parentNode.insertBefore(w(e,c),e));break;case"function":l(c(e.parentNode,r,0));break;case"object":case"undefined":if(null==c){a=c,l("");break}c instanceof o&&(c=c.render());default:if(a=c,ce(c)){var u=c.length;if(0===u)i.splice(0);else switch(typeof c[0]){case"string":case"number":case"boolean":l({html:c});break;case"function":for(var s=e.parentNode,f=0;f<u;f++)c[f]=c[f](s,r,f);l(c.concat.apply([],c));break;case"object":if(ce(c[0])&&(c=c.concat.apply([],c)),T(c[0])){Promise.all(c).then(l);break}for(var f=0,u=c.length;f<u;f++)c[f]instanceof o&&(c[f]=c[f].render());default:t(i,c,n.MAX_LIST_SIZE)}}else if(C(c))t(i,c.nodeType===W?ie.call(c.childNodes):[c],n.MAX_LIST_SIZE);else if(T(c))c.then(l);else if("placeholder"in c)S(l,c);else if("text"in c)l(String(c.text));else if("any"in c)l(c.any);else if("html"in c){var h=[].concat(c.html).join("");i.splice(0);var p=m(e,h);r.push.apply(r,p.childNodes),e.parentNode.insertBefore(p,e)}else l("length"in c?ie.call(c):E(c))}}}function f(e,t,n){for(var r,i,o=Q,a=e.attributes,l=0,c=a.length;l<c;l++)i=a[l],i.value===o&&(r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1"),t.push(M("attr",e.attributes[r.toLowerCase()],r)))}function h(e,t,n){for(var r,i=e.childNodes,o=i.length,a=0;a<o;a++)switch(r=i[a],r.nodeType){case R:f(r,t,n),h(r,t,n);break;case V:r.textContent===Q&&(n.shift(),t.push(M("any",r)));break;case Z:K.test(e.nodeName)&&ue.call(r.textContent)===U&&(n.shift(),t.push(M("text",e)))}}function p(e){return oe[e]}function d(e){return{html:e}}function v(e){for(var t,n=[],r=e.childNodes,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType!==R&&0===ue.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function g(e){return e.createDocumentFragment()}function m(e,t){return(G in e?b:y)(e,t.replace(me,be))}function y(e,t){var n,r=e.ownerDocument,i=r.createElement("template"),o="content"in i,a=!1;if(o||(n=g(r),a=/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)),a){var l=RegExp.$1;i.innerHTML="<table>"+t+"</table>",de(n,ie.call(i.querySelectorAll(l)))}else i.innerHTML=t,o?n=i.content:de(n,ie.call(i.childNodes));return n}function b(e,t){var n=e.ownerDocument,r=g(n);if(te||ne){var i=n.createElement("div");i.innerHTML='<svg xmlns="'+J+'">'+t+"</svg>",de(r,ie.call(i.firstChild.childNodes))}else{var i=n.createElementNS(J,"svg");i.innerHTML=t,de(r,ie.call(i.childNodes))}return r}function w(e,t){return e.ownerDocument.createTextNode(t)}function N(e){var t=n.document,r=t.customElements||t.defaultView.customElements;return r&&r.get(e.nodeName.toLowerCase())}function x(e,t){var n=!(G in e);if(n&&/-/.test(e.nodeName)){var r=N(e);r&&(e=r.prototype)}return n&&t in e}function S(e,t){e(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(e):"any"in t?Promise.resolve(t.any).then(e):"html"in t?Promise.resolve(t.html).then(d).then(e):Promise.resolve(E(t)).then(e)}function E(e){for(var t,n=0,r=he.length;n<r;n++)if(t=he[n],e.hasOwnProperty(t))return fe[t](e[t])}function C(e){return"ELEMENT_NODE"in e}function T(e){return null!=e&&"then"in e}function k(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){se(this,n,{configurable:!0,value:e})}}}function A(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function L(e,t,n,r){var i;switch(e.type){case"any":i=s(t,r,new a(t,r));break;case"attr":i=c(t,n,e.name);break;case"text":i=u(t)}return i}function M(e,t,n){return{type:e,path:H(t),name:n}}function _(e){var t="_"+e.join(U);return pe[t]||(pe[t]=e)}function D(e,t){var n=t.previousSibling;n&&n.nodeType===Z&&(e.removeChild(n),D(e,t))}function O(e,t,n){n?e.insertBefore(t,n):e.appendChild(t)}function j(e,t,n,r){for(var i=e,o=e.ownerDocument,a=n.path,l=ge(t,a),c=0,u=a.length;c<u;c++)switch(a[c++]){case"attributes":var s=l.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=ve(e),h=ve(l.parentNode);i=ke(l);var p=i?a.indexOf.call(h,i)+1:-1;i=Te(l);var d=i?a.indexOf.call(h,i):-1;switch(i=o.createComment(Q),!0){case d<0:d=f.length;break;case p<0:p=0;default:d=-(h.length-d)}r.push.apply(r,ie.call(f,p,d)),r.length?O(e,i,Te(r[r.length-1])):O(e,i,ie.call(f,d)[0]),0===r.length&&D(e,i);break;default:i=ve(e)[a[c]]||e.appendChild(e.ownerDocument.createElement(ge(t,a.slice(0,c+1)).nodeName)),e=i}return i}function I(e,t){for(var n,r,i=[],o=[],a=0,l=t.length;a<l;a++)r=[],n=t[a],i[a]=L(n,j(this,e,n,r),o,r);return A(o),i}function P(e){var t=[],n=m(this,e.join(U)),r={fragment:n,paths:t};return h(n,t,e.slice()),Se.set(e,r),r}function H(e){var t,n=[];switch(e.nodeType){case R:case W:t=e;break;case V:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case X:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(ve(t),e));return n}function $(e,t){for(var n,r=[],i=[],o=0,a=t.length;o<a;o++)n=t[o],r[o]=L(n,ge(e,n.path),i,[]);return A(i),r}function z(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function B(e){e=re(e);var t,n=Se.get(e)||P.call(this,e);if(Ee){var r=Ce(n.fragment);t=$.call(this,r,n.paths),this.textContent="",this.appendChild(r)}else t=I.call(this,n.fragment,n.paths);return{template:e,updates:t}}function q(e){function t(t){c=g(t),l="svg"===e?t.createElementNS(J,"svg"):c,u=r(l)}function i(){return s&&(s=!1,"svg"===e&&de(c,ie.call(l.childNodes)),a=v(c)),a}var o,a,l,c,u,s,f;return"adopt"===e?function(r){var a=arguments;return r=re(r),f!==r&&(s=!0,f=r,o=function(r,o,f){return s&&(f<o.length?(l=o[f],c={ownerDocument:l.ownerDocument,childNodes:[l],children:[l]},u=n.adopt(c)):(G in r&&(e="svg"),t(r.ownerDocument))),u.apply(null,a),i()}),o}:function(e){return e=re(e),f!==e&&(s=!0,f=e,t(n.document)),u.apply(null,arguments),i()}}function F(e,t){var n=xe.get(e),r=t.indexOf(":"),i=t;return-1<r&&(i=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},xe.set(e,n)),n[i]||(n[i]=q(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
n.document=e,n.hyper=n,n.adopt=function(e){return function(){return Ee=!1,l.apply(e,arguments),Ee=!0,e}},n.bind=r,n.define=function(e,t){e in fe||he.push(e),fe[e]=t},n.escape=function(e){return e.replace(/[&<>'"]/g,p)},n.wire=i,n.Component=o,Object.defineProperties(o.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:k("html",q),svg:k("svg",q),state:k("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}});var R=1,X=2,Z=3,V=8,W=11,G="ownerSVGElement",J="http://www.w3.org/2000/svg",K=/^style$/i,Q="_hyper: "+(Math.random()*new Date|0)+";",U="\x3c!--"+Q+"--\x3e";a.prototype.splice=function(e){for(var t,n=this.node,r=this.childNodes,i=r[e+(arguments[1]||0)]||n,o=r.splice.apply(r,arguments),a=n.parentNode,l=0,c=o.length;l<c;l++)t=o[l],r.indexOf(t)<0&&a.removeChild(t);if(l=2,c=arguments.length,l<c){if(c-l==1)t=arguments[l];else for(t=g(a.ownerDocument);l<c;)t.appendChild(arguments[l++]);a.insertBefore(t,i)}return o};var _,Y=g(e),ee="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,te=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),ne=!("children"in Y),re=function(e){return(re=e.propertyIsEnumerable("raw")||ee?_:function(e){return e})(e)},ie=[].slice,oe={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},ae=typeof WeakMap==typeof ae?function(){return{get:function(e){return e["_hyper: "]},set:function(e,t){Object.defineProperty(e,"_hyper: ",{configurable:!0,value:t})}}}:WeakMap,le=typeof Map==typeof le?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,ce=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),ue="_hyper: ".trim||function(){return this.replace(/^\s+|\s+$/g,"")},se=Object.defineProperty,fe={},he=[],pe={},de="append"in Y?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},ve=ne||te?function(e){for(var t,n=[],r=e.childNodes,i=0,o=0,a=r.length;o<a;o++)t=r[o],t.nodeType===R&&(n[i++]=t);return n}:function(e){return e.children},ge=te||ne?function(e,t){for(var n,r=0,i=t.length;r<i;r++)switch(n=t[r++]){case"children":e=ve(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e},me=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,ye=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+U+"\\2","gi"),be=function(e,t,n,r){return t+n.replace(ye,we)+r},we=function(e,t,n){return t+(n||'"')+Q+(n||'"')},Ne=new ae,xe=new ae,Se=new le,Ee=!0,Ce=function(){return Y.appendChild(w(Y,"g")),Y.appendChild(w(Y,"")),1===Y.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,i=n.length;r<i;r++)t.appendChild(Ce(n[r]));return t}:function(e){return e.cloneNode(!0)}}(),Te=te?function(e){for(;e=e.nextSibling;)if(e.nodeType===R)return e}:function(e){return e.nextElementSibling},ke=te?function(e){for(;e=e.previousSibling;)if(e.nodeType===R)return e}:function(e){return e.previousElementSibling};return n.MAX_LIST_SIZE=1e3,n}(document,function(){"use strict";function e(e,n,o){var a=e.length,l=n.length,c=(o||1/0)<Math.sqrt(a*l);return a<1||c?void((l||c)&&e.splice.apply(e,[0,a].concat(n))):l<1?void e.splice(0):void i(e,r(e,n,t(e,n)))}function t(e,t){var n,r,i,o=e.length+1,a=t.length+1,l=o*a,u=0,s=0,f=0,h=0,p=0,d=0,v=new c(l);for(v[0]=0;++u<a;)v[u]=u;for(;++s<o;){for(f=u=0,p=s*a,d=h*a,v[p+u]=s;++u<a;)n=v[d+u]+1,r=v[p+f]+1,i=v[d+f]+(e[h]==t[f]?0:1),v[p+u]=n<r?n<i?n:i:r<i?r:i,++f;++h}return v}function n(e,t,n,r,i,o){e.unshift({type:t,x:n,y:r,count:i,items:o})}function r(e,t,r){for(var i,c,u,s,f,h,p=[],d=e.length+1,v=t.length+1,g=d-1,m=v-1;m&&g;)f=g*v,h=(g-1)*v,i=r[f+m],c=r[h+m],u=r[f+m-1],s=r[h+m-1],s<=u&&s<=c&&s<=i?(m--,g--,s<i&&n(p,l,m,g,1,[t[m]])):u<=c&&u<=i?(m--,n(p,a,m,g,0,[t[m]])):(g--,n(p,o,m,g,1,[]));for(;m--;)n(p,a,m,g,0,[t[m]]);for(;g--;)n(p,o,m,g,1,[]);return p}function i(e,t){var n,r,i,l=0,c=1,u=t.length;if(u){for(i=r=t[0];c<u;)n=t[c++],r.type===n.type&&n.x-r.x<=1&&n.y-r.y<=1?(i.count+=n.count,i.items=i.items.concat(n.items)):(e.splice.apply(e,[i.y+l,i.count].concat(i.items)),l+=i.type===a?i.items.length:i.type===o?-i.count:0,i=n),r=n;e.splice.apply(e,[i.y+l,i.count].concat(i.items))}}/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var o="del",a="ins",l="sub",c=/^u/.test(typeof Int32Array)?Array:Int32Array;return e.aura=function(e,t){var n=t.splice;return t.splice=function r(){t.splice=n;var i=e.splice.apply(e,arguments);return t.splice=r,i},t},e}());try{module.exports=hyperHTML}catch(e){}