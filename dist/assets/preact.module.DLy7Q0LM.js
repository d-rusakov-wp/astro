var W,d,X,ie,x,G,Y,Z,ee,B,R,j,D={},_e=[],se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function b(_,e){for(var n in e)_[n]=e[n];return _}function O(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function pe(_,e,n){var o,l,r,u={};for(r in e)r=="key"?o=e[r]:r=="ref"?l=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?W.call(arguments,2):n),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)u[r]===void 0&&(u[r]=_.defaultProps[r]);return A(_,u,o,l,null)}function A(_,e,n,o,l){var r={type:_,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++X,__i:-1,__u:0};return l==null&&d.vnode!=null&&d.vnode(r),r}function I(_){return _.children}function F(_,e){this.props=_,this.context=e}function S(_,e){if(e==null)return _.__?S(_.__,_.__i+1):null;for(var n;e<_.__k.length;e++)if((n=_.__k[e])!=null&&n.__e!=null)return n.__e;return typeof _.type=="function"?S(_):null}function ne(_){var e,n;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((n=_.__k[e])!=null&&n.__e!=null){_.__e=_.__c.base=n.__e;break}return ne(_)}}function J(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!N.__r++||G!==d.debounceRendering)&&((G=d.debounceRendering)||Y)(N)}function N(){for(var _,e,n,o,l,r,u,s=1;x.length;)x.length>s&&x.sort(Z),_=x.shift(),s=x.length,_.__d&&(n=void 0,l=(o=(e=_).__v).__e,r=[],u=[],e.__P&&((n=b({},o)).__v=o.__v+1,d.vnode&&d.vnode(n),z(e.__P,n,o,e.__n,e.__P.namespaceURI,32&o.__u?[l]:null,r,l??S(o),!!(32&o.__u),u),n.__v=o.__v,n.__.__k[n.__i]=n,oe(r,n,u),n.__e!=l&&ne(n)));N.__r=0}function te(_,e,n,o,l,r,u,s,f,i,c){var t,v,p,y,g,m,a=o&&o.__k||_e,h=e.length;for(f=fe(n,e,a,f,h),t=0;t<h;t++)(p=n.__k[t])!=null&&(v=p.__i===-1?D:a[p.__i]||D,p.__i=t,m=z(_,p,v,l,r,u,s,f,i,c),y=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&V(v.ref,null,p),c.push(p.ref,p.__c||y,p)),g==null&&y!=null&&(g=y),4&p.__u||v.__k===p.__k?f=re(p,f,_):typeof p.type=="function"&&m!==void 0?f=m:y&&(f=y.nextSibling),p.__u&=-7);return n.__e=g,f}function fe(_,e,n,o,l){var r,u,s,f,i,c=n.length,t=c,v=0;for(_.__k=new Array(l),r=0;r<l;r++)(u=e[r])!=null&&typeof u!="boolean"&&typeof u!="function"?(f=r+v,(u=_.__k[r]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?A(null,u,null,null,null):H(u)?A(I,{children:u},null,null,null):u.constructor===void 0&&u.__b>0?A(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=_,u.__b=_.__b+1,s=null,(i=u.__i=ce(u,n,f,t))!==-1&&(t--,(s=n[i])&&(s.__u|=2)),s==null||s.__v===null?(i==-1&&(l>c?v--:l<c&&v++),typeof u.type!="function"&&(u.__u|=4)):i!=f&&(i==f-1?v--:i==f+1?v++:(i>f?v--:v++,u.__u|=4))):_.__k[r]=null;if(t)for(r=0;r<c;r++)(s=n[r])!=null&&!(2&s.__u)&&(s.__e==o&&(o=S(s)),ue(s,s));return o}function re(_,e,n){var o,l;if(typeof _.type=="function"){for(o=_.__k,l=0;o&&l<o.length;l++)o[l]&&(o[l].__=_,e=re(o[l],e,n));return e}_.__e!=e&&(e&&_.type&&!n.contains(e)&&(e=S(_)),n.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ce(_,e,n,o){var l,r,u=_.key,s=_.type,f=e[n];if(f===null&&_.key==null||f&&u==f.key&&s===f.type&&!(2&f.__u))return n;if(o>(f!=null&&!(2&f.__u)?1:0))for(l=n-1,r=n+1;l>=0||r<e.length;){if(l>=0){if((f=e[l])&&!(2&f.__u)&&u==f.key&&s===f.type)return l;l--}if(r<e.length){if((f=e[r])&&!(2&f.__u)&&u==f.key&&s===f.type)return r;r++}}return-1}function K(_,e,n){e[0]=="-"?_.setProperty(e,n??""):_[e]=n==null?"":typeof n!="number"||se.test(e)?n:n+"px"}function E(_,e,n,o,l){var r;e:if(e=="style")if(typeof n=="string")_.style.cssText=n;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)n&&e in n||K(_.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||K(_.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(ee,"$1")),e=e.toLowerCase()in _||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=n,n?o?n.t=o.t:(n.t=B,_.addEventListener(e,r?j:R,r)):_.removeEventListener(e,r?j:R,r);else{if(l=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&n==1?"":n))}}function Q(_){return function(e){if(this.l){var n=this.l[e.type+_];if(e.u==null)e.u=B++;else if(e.u<n.t)return;return n(d.event?d.event(e):e)}}}function z(_,e,n,o,l,r,u,s,f,i){var c,t,v,p,y,g,m,a,h,P,w,U,C,q,L,T,$,k=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),r=[s=e.__e=n.__e]),(c=d.__b)&&c(e);e:if(typeof k=="function")try{if(a=e.props,h="prototype"in k&&k.prototype.render,P=(c=k.contextType)&&o[c.__c],w=c?P?P.props.value:c.__:o,n.__c?m=(t=e.__c=n.__c).__=t.__E:(h?e.__c=t=new k(a,w):(e.__c=t=new F(a,w),t.constructor=k,t.render=he),P&&P.sub(t),t.props=a,t.state||(t.state={}),t.context=w,t.__n=o,v=t.__d=!0,t.__h=[],t._sb=[]),h&&t.__s==null&&(t.__s=t.state),h&&k.getDerivedStateFromProps!=null&&(t.__s==t.state&&(t.__s=b({},t.__s)),b(t.__s,k.getDerivedStateFromProps(a,t.__s))),p=t.props,y=t.state,t.__v=e,v)h&&k.getDerivedStateFromProps==null&&t.componentWillMount!=null&&t.componentWillMount(),h&&t.componentDidMount!=null&&t.__h.push(t.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&a!==p&&t.componentWillReceiveProps!=null&&t.componentWillReceiveProps(a,w),!t.__e&&(t.shouldComponentUpdate!=null&&t.shouldComponentUpdate(a,t.__s,w)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(t.props=a,t.state=t.__s,t.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(M){M&&(M.__=e)}),U=0;U<t._sb.length;U++)t.__h.push(t._sb[U]);t._sb=[],t.__h.length&&u.push(t);break e}t.componentWillUpdate!=null&&t.componentWillUpdate(a,t.__s,w),h&&t.componentDidUpdate!=null&&t.__h.push(function(){t.componentDidUpdate(p,y,g)})}if(t.context=w,t.props=a,t.__P=_,t.__e=!1,C=d.__r,q=0,h){for(t.state=t.__s,t.__d=!1,C&&C(e),c=t.render(t.props,t.state,t.context),L=0;L<t._sb.length;L++)t.__h.push(t._sb[L]);t._sb=[]}else do t.__d=!1,C&&C(e),c=t.render(t.props,t.state,t.context),t.state=t.__s;while(t.__d&&++q<25);t.state=t.__s,t.getChildContext!=null&&(o=b(b({},o),t.getChildContext())),h&&!v&&t.getSnapshotBeforeUpdate!=null&&(g=t.getSnapshotBeforeUpdate(p,y)),T=c,c!=null&&c.type===I&&c.key==null&&(T=le(c.props.children)),s=te(_,H(T)?T:[T],e,n,o,l,r,u,s,f,i),t.base=e.__e,e.__u&=-161,t.__h.length&&u.push(t),m&&(t.__E=t.__=null)}catch(M){if(e.__v=null,f||r!=null)if(M.then){for(e.__u|=f?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;r[r.indexOf(s)]=null,e.__e=s}else for($=r.length;$--;)O(r[$]);else e.__e=n.__e,e.__k=n.__k;d.__e(M,e,n)}else r==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):s=e.__e=ae(n.__e,e,n,o,l,r,u,f,i);return(c=d.diffed)&&c(e),128&e.__u?void 0:s}function oe(_,e,n){for(var o=0;o<n.length;o++)V(n[o],n[++o],n[++o]);d.__c&&d.__c(e,_),_.some(function(l){try{_=l.__h,l.__h=[],_.some(function(r){r.call(l)})}catch(r){d.__e(r,l.__v)}})}function le(_){return typeof _!="object"||_==null?_:H(_)?_.map(le):b({},_)}function ae(_,e,n,o,l,r,u,s,f){var i,c,t,v,p,y,g,m=n.props,a=e.props,h=e.type;if(h=="svg"?l="http://www.w3.org/2000/svg":h=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),r!=null){for(i=0;i<r.length;i++)if((p=r[i])&&"setAttribute"in p==!!h&&(h?p.localName==h:p.nodeType==3)){_=p,r[i]=null;break}}if(_==null){if(h==null)return document.createTextNode(a);_=document.createElementNS(l,h,a.is&&a),s&&(d.__m&&d.__m(e,r),s=!1),r=null}if(h===null)m===a||s&&_.data===a||(_.data=a);else{if(r=r&&W.call(_.childNodes),m=n.props||D,!s&&r!=null)for(m={},i=0;i<_.attributes.length;i++)m[(p=_.attributes[i]).name]=p.value;for(i in m)if(p=m[i],i!="children"){if(i=="dangerouslySetInnerHTML")t=p;else if(!(i in a)){if(i=="value"&&"defaultValue"in a||i=="checked"&&"defaultChecked"in a)continue;E(_,i,null,p,l)}}for(i in a)p=a[i],i=="children"?v=p:i=="dangerouslySetInnerHTML"?c=p:i=="value"?y=p:i=="checked"?g=p:s&&typeof p!="function"||m[i]===p||E(_,i,p,m[i],l);if(c)s||t&&(c.__html===t.__html||c.__html===_.innerHTML)||(_.innerHTML=c.__html),e.__k=[];else if(t&&(_.innerHTML=""),te(e.type==="template"?_.content:_,H(v)?v:[v],e,n,o,h=="foreignObject"?"http://www.w3.org/1999/xhtml":l,r,u,r?r[0]:n.__k&&S(n,0),s,f),r!=null)for(i=r.length;i--;)O(r[i]);s||(i="value",h=="progress"&&y==null?_.removeAttribute("value"):y!==void 0&&(y!==_[i]||h=="progress"&&!y||h=="option"&&y!==m[i])&&E(_,i,y,m[i],l),i="checked",g!==void 0&&g!==_[i]&&E(_,i,g,m[i],l))}return _}function V(_,e,n){try{if(typeof _=="function"){var o=typeof _.__u=="function";o&&_.__u(),o&&e==null||(_.__u=_(e))}else _.current=e}catch(l){d.__e(l,n)}}function ue(_,e,n){var o,l;if(d.unmount&&d.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||V(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,e)}o.base=o.__P=null}if(o=_.__k)for(l=0;l<o.length;l++)o[l]&&ue(o[l],e,n||typeof _.type!="function");n||O(_.__e),_.__c=_.__=_.__e=void 0}function he(_,e,n){return this.constructor(_,n)}function de(_,e,n){var o,l,r,u;e==document&&(e=document.documentElement),d.__&&d.__(_,e),l=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],u=[],z(e,_=(!o&&n||e).__k=pe(I,null,[_]),l||D,D,e.namespaceURI,!o&&n?[n]:l?null:e.firstChild?W.call(e.childNodes):null,r,!o&&n?n:l?l.__e:e.firstChild,o,u),oe(r,_,u)}function ve(_,e){de(_,e,ve)}W=_e.slice,d={__e:function(_,e,n,o){for(var l,r,u;e=e.__;)if((l=e.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(_)),u=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,o||{}),u=l.__d),u)return l.__E=l}catch(s){_=s}throw _}},X=0,ie=function(_){return _!=null&&_.constructor==null},F.prototype.setState=function(_,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof _=="function"&&(_=_(b({},n),this.props)),_&&b(n,_),_!=null&&this.__v&&(e&&this._sb.push(e),J(this))},F.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J(this))},F.prototype.render=I,x=[],Y=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z=function(_,e){return _.__v.__b-e.__v.__b},N.__r=0,ee=/(PointerCapture)$|Capture$/i,B=0,R=Q(!1),j=Q(!0);export{de as E,ve as G,pe as _,d as l,ie as u,F as x};
