import{l as j}from"./preact.module.DLy7Q0LM.js";var l,u,s,E,H=0,U=[],i=j,y=i.__b,A=i.__r,F=i.diffed,g=i.__c,k=i.unmount,q=i.__;function C(_,t){i.__h&&i.__h(u,_,H||t),H=0;var o=u.__H||(u.__H={__:[],__h:[]});return _>=o.__.length&&o.__.push({}),o.__[_]}function P(_){return H=1,w(b,_)}function w(_,t,o){var r=C(l++,2);if(r.t=_,!r.__c&&(r.__=[b(void 0,t),function(e){var c=r.__N?r.__N[0]:r.__[0],f=r.t(c,e);c!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=u,!u.__f)){var a=function(e,c,f){if(!r.__c.__H)return!0;var v=r.__c.__H.__.filter(function(n){return!!n.__c});if(v.every(function(n){return!n.__N}))return!h||h.call(this,e,c,f);var N=r.__c.props!==e;return v.forEach(function(n){if(n.__N){var W=n.__[0];n.__=n.__N,n.__N=void 0,W!==n.__[0]&&(N=!0)}}),h&&h.call(this,e,c,f)||N};u.__f=!0;var h=u.shouldComponentUpdate,p=u.componentWillUpdate;u.componentWillUpdate=function(e,c,f){if(this.__e){var v=h;h=void 0,a(e,c,f),h=v}p&&p.call(this,e,c,f)},u.shouldComponentUpdate=a}return r.__N||r.__}function S(_,t){var o=C(l++,7);return B(o.__H,t)&&(o.__=_(),o.__H=t,o.__h=_),o.__}function x(){for(var _;_=U.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(m),_.__H.__h.forEach(d),_.__H.__h=[]}catch(t){_.__H.__h=[],i.__e(t,_.__v)}}i.__b=function(_){u=null,y&&y(_)},i.__=function(_,t){_&&t.__k&&t.__k.__m&&(_.__m=t.__k.__m),q&&q(_,t)},i.__r=function(_){A&&A(_),l=0;var t=(u=_.__c).__H;t&&(s===u?(t.__h=[],u.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(t.__h.forEach(m),t.__h.forEach(d),t.__h=[],l=0)),s=u},i.diffed=function(_){F&&F(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(U.push(t)!==1&&E===i.requestAnimationFrame||((E=i.requestAnimationFrame)||z)(x)),t.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),s=u=null},i.__c=function(_,t){t.some(function(o){try{o.__h.forEach(m),o.__h=o.__h.filter(function(r){return!r.__||d(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],i.__e(r,o.__v)}}),g&&g(_,t)},i.unmount=function(_){k&&k(_);var t,o=_.__c;o&&o.__H&&(o.__H.__.forEach(function(r){try{m(r)}catch(a){t=a}}),o.__H=void 0,t&&i.__e(t,o.__v))};var T=typeof requestAnimationFrame=="function";function z(_){var t,o=function(){clearTimeout(r),T&&cancelAnimationFrame(t),setTimeout(_)},r=setTimeout(o,100);T&&(t=requestAnimationFrame(o))}function m(_){var t=u,o=_.__c;typeof o=="function"&&(_.__c=void 0,o()),u=t}function d(_){var t=u;_.__c=_.__(),u=t}function B(_,t){return!_||_.length!==t.length||t.some(function(o,r){return o!==_[r]})}function b(_,t){return typeof t=="function"?t(_):t}export{S as T,P as d};
