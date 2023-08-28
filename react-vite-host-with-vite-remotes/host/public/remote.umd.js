(function(h,y){typeof exports=="object"&&typeof module<"u"?module.exports=y(require("react")):typeof define=="function"&&define.amd?define(["react"],y):(h=typeof globalThis<"u"?globalThis:h||self,h.remote=y(h.React))})(this,function(h){var ae;"use strict";var y={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function we(){if(ee)return w;ee=1;var _=h,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,I=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function F(R,f,S){var v,g={},E=null,Y=null;S!==void 0&&(E=""+S),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(Y=f.ref);for(v in f)P.call(f,v)&&!W.hasOwnProperty(v)&&(g[v]=f[v]);if(R&&R.defaultProps)for(v in f=R.defaultProps,f)g[v]===void 0&&(g[v]=f[v]);return{$$typeof:O,type:R,key:E,ref:Y,props:g,_owner:I.current}}return w.Fragment=D,w.jsx=F,w.jsxs=F,w}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function ke(){return re||(re=1,"process.env".NODE_ENV!=="production"&&function(){var _=h,O=Symbol.for("react.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),R=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),oe=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[De];return typeof r=="function"?r:null}var j=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=j.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var $e=!1,Ie=!1,We=!1,Ye=!1,Me=!1,ie;ie=Symbol.for("react.module.reference");function Ne(e){return!!(typeof e=="string"||typeof e=="function"||e===P||e===W||Me||e===I||e===S||e===v||Ye||e===Y||$e||Ie||We||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===g||e.$$typeof===F||e.$$typeof===R||e.$$typeof===f||e.$$typeof===ie||e.getModuleId!==void 0))}function Le(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ue(e){return e.displayName||"Context"}function m(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case D:return"Portal";case W:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ue(r)+".Consumer";case F:var t=e;return ue(t._context)+".Provider";case f:return Le(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:m(e.type)||"Memo";case E:{var i=e,u=i._payload,o=i._init;try{return m(o(u))}catch{return null}}}return null}var T=Object.assign,A=0,se,le,fe,ce,de,ve,pe;function _e(){}_e.__reactDisabledLog=!0;function Ve(){{if(A===0){se=console.log,le=console.info,fe=console.warn,ce=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:_e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ue(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:se}),info:T({},e,{value:le}),warn:T({},e,{value:fe}),error:T({},e,{value:ce}),group:T({},e,{value:de}),groupCollapsed:T({},e,{value:ve}),groupEnd:T({},e,{value:pe})})}A<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=j.ReactCurrentDispatcher,J;function M(e,r,t){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,N;{var ze=typeof WeakMap=="function"?WeakMap:Map;N=new ze}function ge(e,r){if(!e||G)return"";{var t=N.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ve();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(b){n=b}Reflect.construct(e,[],o)}else{try{o.call()}catch(b){n=b}e.call(o.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&l>=0);break}}}finally{G=!1,q.current=u,Ue(),Error.prepareStackTrace=i}var C=e?e.displayName||e.name:"",Ce=C?M(C):"";return typeof e=="function"&&N.set(e,Ce),Ce}function Be(e,r,t){return ge(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,qe(e));if(typeof e=="string")return M(e);switch(e){case S:return M("Suspense");case v:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Be(e.render);case g:return L(e.type,r,t);case E:{var n=e,i=n._payload,u=n._init;try{return L(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,me={},be=j.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function Je(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),U(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,U(i),c("Failed %s type: %s",t,a.message),U(null))}}}var Ge=Array.isArray;function K(e){return Ge(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ye(e){if(He(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),he(e)}var $=j.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},Re,Ee,H;H={};function Ze(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=m($.current.type);H[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',m($.current.type),e.ref),H[t]=!0)}}function rr(e,r){{var t=function(){Re||(Re=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){Ee||(Ee=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,u,o){var a={$$typeof:O,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(ye(t),a=""+t),Qe(r)&&(ye(r.key),a=""+r.key),Ze(r)&&(d=r.ref,er(r,i));for(u in r)V.call(r,u)&&!Xe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,l),d&&tr(o,l)}return nr(e,a,d,i,n,$.current,o)}}var X=j.ReactCurrentOwner,Te=j.ReactDebugCurrentFrame;function x(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===O}function Oe(){{if(X.current){var e=m(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function ir(e){{var r=Oe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+m(e._owner.type)+"."),x(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),x(null)}}function je(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Se(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&Se(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=m(r);Je(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=m(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){x(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),x(null);break}}e.ref!==null&&(x(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),x(null))}}function xe(e,r,t,n,i,u){{var o=Ne(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=or(i);d?a+=d:a+=Oe();var s;e===null?s="null":K(e)?s="array":e!==void 0&&e.$$typeof===O?(s="<"+(m(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=ar(e,r,t,i,u);if(l==null)return l;if(o){var p=r.children;if(p!==void 0)if(n)if(K(p)){for(var C=0;C<p.length;C++)je(p[C],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else je(p,e)}return e===P?sr(l):ur(l),l}}function lr(e,r,t){return xe(e,r,t,!0)}function fr(e,r,t){return xe(e,r,t,!1)}var cr=fr,dr=lr;k.Fragment=P,k.jsx=cr,k.jsxs=dr}()),k}"process.env".NODE_ENV==="production"?y.exports=we():y.exports=ke();var z=y.exports;const te=Object.assign({"./pages/index.tsx":Object.freeze(Object.defineProperty({__proto__:null,default:()=>z.jsx("div",{children:"I'm running inside a remote @ /"})},Symbol.toStringTag,{value:"Module"})),"./pages/remote/index.tsx":Object.freeze(Object.defineProperty({__proto__:null,default:()=>z.jsx("div",{children:"I'm running inside a remote @ /remote"})},Symbol.toStringTag,{value:"Module"})),"./pages/remote/nested/index.tsx":Object.freeze(Object.defineProperty({__proto__:null,default:()=>z.jsx("div",{children:"I'm running inside a remote @ /remote/nested"})},Symbol.toStringTag,{value:"Module"}))}),ne=[];let B;for(B of Object.keys(te)){const _=(ae=B.match(/\.\/pages\/(.*?)(\.[^.]*$|$)/))==null?void 0:ae[1];if(!_)continue;const D=_.match(/^\[.*\]$/)?`:${_.substring(1,_.length-1)}`:_.replace(/\/?index$/,"");ne.push({path:`/${D}`,Element:te[B].default})}return Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}))});
