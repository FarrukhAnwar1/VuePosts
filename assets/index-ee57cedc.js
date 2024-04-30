(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function el(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ve={},Er=[],wt=()=>{},L_=()=>!1,F_=/^on[^a-z]/,Vo=t=>F_.test(t),tl=t=>t.startsWith("onUpdate:"),Me=Object.assign,nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},U_=Object.prototype.hasOwnProperty,ie=(t,e)=>U_.call(t,e),H=Array.isArray,Ir=t=>Zs(t)==="[object Map]",No=t=>Zs(t)==="[object Set]",zu=t=>Zs(t)==="[object Date]",X=t=>typeof t=="function",Ne=t=>typeof t=="string",Ps=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",dd=t=>ye(t)&&X(t.then)&&X(t.catch),pd=Object.prototype.toString,Zs=t=>pd.call(t),B_=t=>Zs(t).slice(8,-1),gd=t=>Zs(t)==="[object Object]",rl=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ji=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$_=/-(\w)/g,jt=Oo(t=>t.replace($_,(e,n)=>n?n.toUpperCase():"")),j_=/\B([A-Z])/g,sr=Oo(t=>t.replace(j_,"-$1").toLowerCase()),xo=Oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=Oo(t=>t?`on${xo(t)}`:""),Ss=(t,e)=>!Object.is(t,e),qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},no=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const sc=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?z_(r):sl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ne(t))return t;if(ye(t))return t}}const q_=/;(?![^(]*\))/g,H_=/:([^]+)/,K_=/\/\*[^]*?\*\//g;function z_(t){const e={};return t.replace(K_,"").split(q_).forEach(n=>{if(n){const r=n.split(H_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function il(t){let e="";if(Ne(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=il(t[n]);r&&(e+=r+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const W_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",G_=el(W_);function md(t){return!!t||t===""}function Q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Mo(t[r],e[r]);return n}function Mo(t,e){if(t===e)return!0;let n=zu(t),r=zu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ps(t),r=Ps(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?Q_(t,e):!1;if(n=ye(t),r=ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Mo(t[o],e[o]))return!1}}return String(t)===String(e)}function _d(t,e){return t.findIndex(n=>Mo(n,e))}const SC=t=>Ne(t)?t:t==null?"":H(t)||ye(t)&&(t.toString===pd||!X(t.toString))?JSON.stringify(t,yd,2):String(t),yd=(t,e)=>e&&e.__v_isRef?yd(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:No(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!H(e)&&!gd(e)?String(e):e;let lt;class vd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ed(t){return new vd(t)}function J_(t,e=lt){e&&e.active&&e.effects.push(t)}function Id(){return lt}function X_(t){lt&&lt.cleanups.push(t)}const ol=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Td=t=>(t.w&Pn)>0,wd=t=>(t.n&Pn)>0,Y_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},Z_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Td(s)&&!wd(s)?s.delete(t):e[n++]=s,s.w&=~Pn,s.n&=~Pn}e.length=n}},ro=new WeakMap;let os=0,Pn=1;const ic=30;let Et;const zn=Symbol(""),oc=Symbol("");class al{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,J_(this,r)}run(){if(!this.active)return this.fn();let e=Et,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,vn=!0,Pn=1<<++os,os<=ic?Y_(this):Gu(this),this.fn()}finally{os<=ic&&Z_(this),Pn=1<<--os,Et=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Gu(this),this.onStop&&this.onStop(),this.active=!1)}}function Gu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Ad=[];function Kr(){Ad.push(vn),vn=!1}function zr(){const t=Ad.pop();vn=t===void 0?!0:t}function ot(t,e,n){if(vn&&Et){let r=ro.get(t);r||ro.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ol()),Rd(s)}}function Rd(t,e){let n=!1;os<=ic?wd(t)||(t.n|=Pn,n=!Td(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Zt(t,e,n,r,s,i){const o=ro.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?rl(n)&&a.push(o.get("length")):(a.push(o.get(zn)),Ir(t)&&a.push(o.get(oc)));break;case"delete":H(t)||(a.push(o.get(zn)),Ir(t)&&a.push(o.get(oc)));break;case"set":Ir(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&ac(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ac(ol(c))}}function ac(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Qu(r);for(const r of n)r.computed||Qu(r)}function Qu(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ey(t,e){var n;return(n=ro.get(t))==null?void 0:n.get(e)}const ty=el("__proto__,__v_isRef,__isVue"),Pd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps)),ny=cl(),ry=cl(!1,!0),sy=cl(!0),Ju=iy();function iy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)ot(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kr();const r=oe(this)[e].apply(this,n);return zr(),r}}),t}function oy(t){const e=oe(this);return ot(e,"has",t),e.hasOwnProperty(t)}function cl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ty:Dd:e?kd:bd).get(r))return r;const o=H(r);if(!t){if(o&&ie(Ju,s))return Reflect.get(Ju,s,i);if(s==="hasOwnProperty")return oy}const a=Reflect.get(r,s,i);return(Ps(s)?Pd.has(s):ty(s))||(t||ot(r,"get",s),e)?a:Pe(a)?o&&rl(s)?a:a.value:ye(a)?t?Nd(a):ei(a):a}}const ay=Sd(),cy=Sd(!0);function Sd(t=!1){return function(n,r,s,i){let o=n[r];if(kr(o)&&Pe(o)&&!Pe(s))return!1;if(!t&&(!so(s)&&!kr(s)&&(o=oe(o),s=oe(s)),!H(n)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=H(n)&&rl(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,s,i);return n===oe(i)&&(a?Ss(s,o)&&Zt(n,"set",r,s):Zt(n,"add",r,s)),c}}function ly(t,e){const n=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Zt(t,"delete",e,void 0),r}function uy(t,e){const n=Reflect.has(t,e);return(!Ps(e)||!Pd.has(e))&&ot(t,"has",e),n}function hy(t){return ot(t,"iterate",H(t)?"length":zn),Reflect.ownKeys(t)}const Cd={get:ny,set:ay,deleteProperty:ly,has:uy,ownKeys:hy},fy={get:sy,set(t,e){return!0},deleteProperty(t,e){return!0}},dy=Me({},Cd,{get:ry,set:cy}),ll=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function Ai(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);n||(e!==i&&ot(s,"get",e),ot(s,"get",i));const{has:o}=Lo(s),a=r?ll:n?fl:Cs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ri(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return e||(t!==s&&ot(r,"has",t),ot(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Pi(t,e=!1){return t=t.__v_raw,!e&&ot(oe(t),"iterate",zn),Reflect.get(t,"size",t)}function Xu(t){t=oe(t);const e=oe(this);return Lo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Yu(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=Lo(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ss(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Zu(t){const e=oe(this),{has:n,get:r}=Lo(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Zt(e,"delete",t,void 0),i}function eh(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Si(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),c=e?ll:t?fl:Cs;return!t&&ot(a,"iterate",zn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ci(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=Ir(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ll:e?fl:Cs;return!e&&ot(i,"iterate",c?oc:zn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function py(){const t={get(i){return Ai(this,i)},get size(){return Pi(this)},has:Ri,add:Xu,set:Yu,delete:Zu,clear:eh,forEach:Si(!1,!1)},e={get(i){return Ai(this,i,!1,!0)},get size(){return Pi(this)},has:Ri,add:Xu,set:Yu,delete:Zu,clear:eh,forEach:Si(!1,!0)},n={get(i){return Ai(this,i,!0)},get size(){return Pi(this,!0)},has(i){return Ri.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Si(!0,!1)},r={get(i){return Ai(this,i,!0,!0)},get size(){return Pi(this,!0)},has(i){return Ri.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ci(i,!1,!1),n[i]=Ci(i,!0,!1),e[i]=Ci(i,!1,!0),r[i]=Ci(i,!0,!0)}),[t,n,e,r]}const[gy,my,_y,yy]=py();function ul(t,e){const n=e?t?yy:_y:t?my:gy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const vy={get:ul(!1,!1)},Ey={get:ul(!1,!0)},Iy={get:ul(!0,!1)},bd=new WeakMap,kd=new WeakMap,Dd=new WeakMap,Ty=new WeakMap;function wy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ay(t){return t.__v_skip||!Object.isExtensible(t)?0:wy(B_(t))}function ei(t){return kr(t)?t:hl(t,!1,Cd,vy,bd)}function Vd(t){return hl(t,!1,dy,Ey,kd)}function Nd(t){return hl(t,!0,fy,Iy,Dd)}function hl(t,e,n,r,s){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ay(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function En(t){return kr(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Od(t){return En(t)||kr(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Fo(t){return no(t,"__v_skip",!0),t}const Cs=t=>ye(t)?ei(t):t,fl=t=>ye(t)?Nd(t):t;function xd(t){vn&&Et&&(t=oe(t),Rd(t.dep||(t.dep=ol())))}function Md(t,e){t=oe(t);const n=t.dep;n&&ac(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function dl(t){return Ld(t,!1)}function Ry(t){return Ld(t,!0)}function Ld(t,e){return Pe(t)?t:new Py(t,e)}class Py{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Cs(e)}get value(){return xd(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||kr(e);e=n?e:oe(e),Ss(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cs(e),Md(this))}}function Wn(t){return Pe(t)?t.value:t}const Sy={get:(t,e,n)=>Wn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fd(t){return En(t)?t:new Proxy(t,Sy)}function Cy(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=ky(t,n);return e}class by{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ey(oe(this._object),this._key)}}function ky(t,e,n){const r=t[e];return Pe(r)?r:new by(t,e,n)}class Dy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new al(e,()=>{this._dirty||(this._dirty=!0,Md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return xd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vy(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=wt):(r=t.get,s=t.set),new Dy(r,s,i||!s,n)}function In(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Uo(i,e,n)}return s}function At(t,e,n,r){if(X(t)){const i=In(t,e,n,r);return i&&dd(i)&&i.catch(o=>{Uo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(At(t[i],e,n,r));return s}function Uo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){In(c,null,10,[t,o,a]);return}}Ny(t,n,s,r)}function Ny(t,e,n,r=!0){console.error(t)}let bs=!1,cc=!1;const We=[];let Ot=0;const Tr=[];let Wt=null,Fn=0;const Ud=Promise.resolve();let pl=null;function gl(t){const e=pl||Ud;return t?e.then(this?t.bind(this):t):e}function Oy(t){let e=Ot+1,n=We.length;for(;e<n;){const r=e+n>>>1;ks(We[r])<t?e=r+1:n=r}return e}function ml(t){(!We.length||!We.includes(t,bs&&t.allowRecurse?Ot+1:Ot))&&(t.id==null?We.push(t):We.splice(Oy(t.id),0,t),Bd())}function Bd(){!bs&&!cc&&(cc=!0,pl=Ud.then(jd))}function xy(t){const e=We.indexOf(t);e>Ot&&We.splice(e,1)}function My(t){H(t)?Tr.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Fn+1:Fn))&&Tr.push(t),Bd()}function th(t,e=bs?Ot+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function $d(t){if(Tr.length){const e=[...new Set(Tr)];if(Tr.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,r)=>ks(n)-ks(r)),Fn=0;Fn<Wt.length;Fn++)Wt[Fn]();Wt=null,Fn=0}}const ks=t=>t.id==null?1/0:t.id,Ly=(t,e)=>{const n=ks(t)-ks(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jd(t){cc=!1,bs=!0,We.sort(Ly);const e=wt;try{for(Ot=0;Ot<We.length;Ot++){const n=We[Ot];n&&n.active!==!1&&In(n,null,14)}}finally{Ot=0,We.length=0,$d(),bs=!1,pl=null,(We.length||Tr.length)&&jd()}}function Fy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ve;f&&(s=n.map(g=>Ne(g)?g.trim():g)),h&&(s=n.map(rc))}let a,c=r[a=ba(e)]||r[a=ba(jt(e))];!c&&i&&(c=r[a=ba(sr(e))]),c&&At(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,s)}}function qd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=qd(l,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ye(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Me(o,i),ye(t)&&r.set(t,o),o)}function Bo(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,sr(e))||ie(t,e))}let ht=null,$o=null;function io(t){const e=ht;return ht=t,$o=t&&t.type.__scopeId||null,e}function Uy(t){$o=t}function By(){$o=null}function as(t,e=ht,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fh(-1);const i=io(e);let o;try{o=t(...s)}finally{io(i),r._d&&fh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ka(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:T}=t;let w,S;const V=io(t);try{if(n.shapeFlag&4){const O=s||r;w=Nt(u.call(O,O,h,i,g,f,y)),S=c}else{const O=e;w=Nt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),S=e.props?c:$y(c)}}catch(O){ms.length=0,Uo(O,t,1),w=De(Xn)}let U=w;if(S&&T!==!1){const O=Object.keys(S),{shapeFlag:Y}=U;O.length&&Y&7&&(o&&O.some(tl)&&(S=jy(S,o)),U=Dr(U,S))}return n.dirs&&(U=Dr(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),w=U,io(V),w}const $y=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},jy=(t,e)=>{const n={};for(const r in t)(!tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Bo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nh(r,o,l):!0:!!o;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Bo(n,i))return!0}return!1}function Hy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ky=t=>t.__isSuspense;function zy(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):My(t)}const bi={};function ps(t,e,n){return Hd(t,e,n)}function Hd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ve){var a;const c=Id()===((a=xe)==null?void 0:a.scope)?xe:null;let l,u=!1,h=!1;if(Pe(t)?(l=()=>t.value,u=so(t)):En(t)?(l=()=>t,r=!0):H(t)?(h=!0,u=t.some(O=>En(O)||so(O)),l=()=>t.map(O=>{if(Pe(O))return O.value;if(En(O))return $n(O);if(X(O))return In(O,c,2)})):X(t)?e?l=()=>In(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),At(t,c,3,[g])}:l=wt,e&&r){const O=l;l=()=>$n(O())}let f,g=O=>{f=V.onStop=()=>{In(O,c,4)}},y;if(Ns)if(g=wt,e?n&&At(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const O=jv();y=O.__watcherHandles||(O.__watcherHandles=[])}else return wt;let T=h?new Array(t.length).fill(bi):bi;const w=()=>{if(V.active)if(e){const O=V.run();(r||u||(h?O.some((Y,ne)=>Ss(Y,T[ne])):Ss(O,T)))&&(f&&f(),At(e,c,3,[O,T===bi?void 0:h&&T[0]===bi?[]:T,g]),T=O)}else V.run()};w.allowRecurse=!!e;let S;s==="sync"?S=w:s==="post"?S=()=>it(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),S=()=>ml(w));const V=new al(l,S);e?n?w():T=V.run():s==="post"?it(V.run.bind(V),c&&c.suspense):V.run();const U=()=>{V.stop(),c&&c.scope&&nl(c.scope.effects,V)};return y&&y.push(U),U}function Wy(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Kd(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=xe;Vr(this);const a=Hd(s,i.bind(r),n);return o?Vr(o):Gn(),a}function Kd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $n(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))$n(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(No(t)||Ir(t))t.forEach(n=>{$n(n,e)});else if(gd(t))for(const n in t)$n(t[n],e);return t}function CC(t,e){const n=ht;if(n===null)return t;const r=zo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kr(),At(c,n,8,[t.el,a,t,e]),zr())}}function jo(t,e){return X(t)?(()=>Me({name:t.name},e,{setup:t}))():t}const Hi=t=>!!t.type.__asyncLoader,zd=t=>t.type.__isKeepAlive;function Gy(t,e){Wd(t,"a",e)}function Qy(t,e){Wd(t,"da",e)}function Wd(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zd(s.parent.vnode)&&Jy(r,e,n,s),s=s.parent}}function Jy(t,e,n,r){const s=qo(e,t,r,!0);Gd(()=>{nl(r[e],s)},n)}function qo(t,e,n=xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kr(),Vr(n);const a=At(e,n,t,o);return Gn(),zr(),a});return r?s.unshift(i):s.push(i),i}}const on=t=>(e,n=xe)=>(!Ns||t==="sp")&&qo(t,(...r)=>e(...r),n),Xy=on("bm"),Yy=on("m"),Zy=on("bu"),ev=on("u"),tv=on("bum"),Gd=on("um"),nv=on("sp"),rv=on("rtg"),sv=on("rtc");function iv(t,e=xe){qo("ec",t,e)}const Qd="components";function ov(t,e){return cv(Qd,t,!0,e)||t}const av=Symbol.for("v-ndc");function cv(t,e,n=!0,r=!1){const s=ht||xe;if(s){const i=s.type;if(t===Qd){const a=Uv(i,!1);if(a&&(a===e||a===jt(e)||a===xo(jt(e))))return i}const o=rh(s[t]||i[t],e)||rh(s.appContext[t],e);return!o&&r?i:o}}function rh(t,e){return t&&(t[e]||t[jt(e)]||t[xo(jt(e))])}function bC(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const lc=t=>t?op(t)?zo(t)||t.proxy:lc(t.parent):null,gs=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>ml(t.update)),$nextTick:t=>t.n||(t.n=gl.bind(t.proxy)),$watch:t=>Wy.bind(t)}),Da=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),lv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Da(r,e))return o[e]=1,r[e];if(s!==ve&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const u=gs[e];let h,f;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Da(s,e)?(s[e]=n,!0):r!==ve&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||Da(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(gs,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sh(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function uv(t){const e=_l(t),n=t.proxy,r=t.ctx;uc=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:T,deactivated:w,beforeDestroy:S,beforeUnmount:V,destroyed:U,unmounted:O,render:Y,renderTracked:ne,renderTriggered:Ae,errorCaptured:re,serverPrefetch:Z,expose:me,inheritAttrs:je,components:at,directives:dt,filters:On}=e;if(l&&hv(l,r,null),o)for(const ge in o){const ue=o[ge];X(ue)&&(r[ge]=ue.bind(n))}if(s){const ge=s.call(n,n);ye(ge)&&(t.data=ei(ge))}if(uc=!0,i)for(const ge in i){const ue=i[ge],Kt=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):wt,cn=!X(ue)&&X(ue.set)?ue.set.bind(n):wt,bt=gt({get:Kt,set:cn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>bt.value,set:st=>bt.value=st})}if(a)for(const ge in a)Jd(a[ge],r,n,ge);if(c){const ge=X(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ue=>{Ki(ue,ge[ue])})}u&&ih(u,t,"c");function ce(ge,ue){H(ue)?ue.forEach(Kt=>ge(Kt.bind(n))):ue&&ge(ue.bind(n))}if(ce(Xy,h),ce(Yy,f),ce(Zy,g),ce(ev,y),ce(Gy,T),ce(Qy,w),ce(iv,re),ce(sv,ne),ce(rv,Ae),ce(tv,V),ce(Gd,O),ce(nv,Z),H(me))if(me.length){const ge=t.exposed||(t.exposed={});me.forEach(ue=>{Object.defineProperty(ge,ue,{get:()=>n[ue],set:Kt=>n[ue]=Kt})})}else t.exposed||(t.exposed={});Y&&t.render===wt&&(t.render=Y),je!=null&&(t.inheritAttrs=je),at&&(t.components=at),dt&&(t.directives=dt)}function hv(t,e,n=wt){H(t)&&(t=hc(t));for(const r in t){const s=t[r];let i;ye(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),Pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ih(t,e,n){At(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jd(t,e,n,r){const s=r.includes(".")?Kd(n,r):()=>n[r];if(Ne(t)){const i=e[t];X(i)&&ps(s,i)}else if(X(t))ps(s,t.bind(n));else if(ye(t))if(H(t))t.forEach(i=>Jd(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&ps(s,i,t)}}function _l(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>oo(c,l,o,!0)),oo(c,e,o)),ye(e)&&i.set(e,c),c}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(o=>oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=fv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fv={data:oh,props:ah,emits:ah,methods:cs,computed:cs,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:cs,directives:cs,watch:pv,provide:oh,inject:dv};function oh(t,e){return e?t?function(){return Me(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function dv(t,e){return cs(hc(t),hc(e))}function hc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function cs(t,e){return t?Me(Object.create(null),t,e):e}function ah(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Me(Object.create(null),sh(t),sh(e??{})):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=et(t[r],e[r]);return n}function Xd(){return{app:null,config:{isNativeTag:L_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gv=0;function mv(t,e){return function(r,s=null){X(r)||(r=Me({},r)),s!=null&&!ye(s)&&(s=null);const i=Xd(),o=new Set;let a=!1;const c=i.app={_uid:gv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=De(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,zo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ds=c;try{return l()}finally{Ds=null}}};return c}}let Ds=null;function Ki(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=xe||ht;if(r||Ds){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ds._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function _v(){return!!(xe||ht||Ds)}function yv(t,e,n,r=!1){const s={},i={};no(i,Ko,1),t.propsDefaults=Object.create(null),Yd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function vv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Bo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=jt(f);s[y]=fc(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Yd(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=sr(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=fc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&Zt(t,"set","$attrs")}function Yd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ji(c))continue;const l=e[c];let u;s&&ie(s,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=oe(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=fc(s,c,h,l[h],t,!ie(l,h))}}return o}function fc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Vr(s),r=l[n]=c.call(null,e),Gn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sr(n))&&(r=!0))}return r}function Zd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Zd(h,e,!0);Me(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ye(t)&&r.set(t,Er),Er;if(H(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);ch(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=jt(u);if(ch(h)){const f=i[u],g=o[h]=H(f)||X(f)?{type:f}:Me({},f);if(g){const y=hh(Boolean,g.type),T=hh(String,g.type);g[0]=y>-1,g[1]=T<0||y<T,(y>-1||ie(g,"default"))&&a.push(h)}}}const l=[o,a];return ye(t)&&r.set(t,l),l}function ch(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uh(t,e){return lh(t)===lh(e)}function hh(t,e){return H(e)?e.findIndex(n=>uh(n,t)):X(e)&&uh(e,t)?0:-1}const ep=t=>t[0]==="_"||t==="$stable",yl=t=>H(t)?t.map(Nt):[Nt(t)],Ev=(t,e,n)=>{if(e._n)return e;const r=as((...s)=>yl(e(...s)),n);return r._c=!1,r},tp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ep(s))continue;const i=t[s];if(X(i))e[s]=Ev(s,i,r);else if(i!=null){const o=yl(i);e[s]=()=>o}}},np=(t,e)=>{const n=yl(e);t.slots.default=()=>n},Iv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),no(e,"_",n)):tp(e,t.slots={})}else t.slots={},e&&np(t,e);no(t.slots,Ko,1)},Tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,tp(e,s)),o=e}else e&&(np(t,e),o={default:1});if(i)for(const a in s)!ep(a)&&!(a in o)&&delete s[a]};function dc(t,e,n,r,s=!1){if(H(t)){t.forEach((f,g)=>dc(f,e&&(H(e)?e[g]:e),n,r,s));return}if(Hi(r)&&!s)return;const i=r.shapeFlag&4?zo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Pe(l)&&(l.value=null)),X(c))In(c,a,12,[o,u]);else{const f=Ne(c),g=Pe(c);if(f||g){const y=()=>{if(t.f){const T=f?ie(h,c)?h[c]:u[c]:c.value;s?H(T)&&nl(T,i):H(T)?T.includes(i)||T.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,it(y,n)):y()}}}const it=zy;function wv(t){return Av(t)}function Av(t,e){const n=sc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=wt,insertStaticContent:y}=t,T=(d,p,m,_=null,I=null,A=null,N=!1,C=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!ns(d,p)&&(_=v(d),st(d,I,A,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:R,ref:j,shapeFlag:L}=p;switch(R){case Ho:w(d,p,m,_);break;case Xn:S(d,p,m,_);break;case Va:d==null&&V(p,m,_,N);break;case Vt:at(d,p,m,_,I,A,N,C,b);break;default:L&1?Y(d,p,m,_,I,A,N,C,b):L&6?dt(d,p,m,_,I,A,N,C,b):(L&64||L&128)&&R.process(d,p,m,_,I,A,N,C,b,k)}j!=null&&I&&dc(j,d&&d.ref,A,p||d,!p)},w=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const I=p.el=d.el;p.children!==d.children&&l(I,p.children)}},S=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},V=(d,p,m,_)=>{[d.el,d.anchor]=y(d.children,p,m,_,d.el,d.anchor)},U=({el:d,anchor:p},m,_)=>{let I;for(;d&&d!==p;)I=f(d),r(d,m,_),d=I;r(p,m,_)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},Y=(d,p,m,_,I,A,N,C,b)=>{N=N||p.type==="svg",d==null?ne(p,m,_,I,A,N,C,b):Z(d,p,I,A,N,C,b)},ne=(d,p,m,_,I,A,N,C)=>{let b,R;const{type:j,props:L,shapeFlag:q,transition:W,dirs:ee}=d;if(b=d.el=o(d.type,A,L&&L.is,L),q&8?u(b,d.children):q&16&&re(d.children,b,null,_,I,A&&j!=="foreignObject",N,C),ee&&xn(d,null,_,"created"),Ae(b,d,d.scopeId,N,_),L){for(const pe in L)pe!=="value"&&!ji(pe)&&i(b,pe,null,L[pe],A,d.children,_,I,qe);"value"in L&&i(b,"value",null,L.value),(R=L.onVnodeBeforeMount)&&Dt(R,_,d)}ee&&xn(d,null,_,"beforeMount");const _e=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;_e&&W.beforeEnter(b),r(b,p,m),((R=L&&L.onVnodeMounted)||_e||ee)&&it(()=>{R&&Dt(R,_,d),_e&&W.enter(b),ee&&xn(d,null,_,"mounted")},I)},Ae=(d,p,m,_,I)=>{if(m&&g(d,m),_)for(let A=0;A<_.length;A++)g(d,_[A]);if(I){let A=I.subTree;if(p===A){const N=I.vnode;Ae(d,N,N.scopeId,N.slotScopeIds,I.parent)}}},re=(d,p,m,_,I,A,N,C,b=0)=>{for(let R=b;R<d.length;R++){const j=d[R]=C?dn(d[R]):Nt(d[R]);T(null,j,p,m,_,I,A,N,C)}},Z=(d,p,m,_,I,A,N)=>{const C=p.el=d.el;let{patchFlag:b,dynamicChildren:R,dirs:j}=p;b|=d.patchFlag&16;const L=d.props||ve,q=p.props||ve;let W;m&&Mn(m,!1),(W=q.onVnodeBeforeUpdate)&&Dt(W,m,p,d),j&&xn(p,d,m,"beforeUpdate"),m&&Mn(m,!0);const ee=I&&p.type!=="foreignObject";if(R?me(d.dynamicChildren,R,C,m,_,ee,A):N||ue(d,p,C,null,m,_,ee,A,!1),b>0){if(b&16)je(C,p,L,q,m,_,I);else if(b&2&&L.class!==q.class&&i(C,"class",null,q.class,I),b&4&&i(C,"style",L.style,q.style,I),b&8){const _e=p.dynamicProps;for(let pe=0;pe<_e.length;pe++){const Se=_e[pe],vt=L[Se],ur=q[Se];(ur!==vt||Se==="value")&&i(C,Se,vt,ur,I,d.children,m,_,qe)}}b&1&&d.children!==p.children&&u(C,p.children)}else!N&&R==null&&je(C,p,L,q,m,_,I);((W=q.onVnodeUpdated)||j)&&it(()=>{W&&Dt(W,m,p,d),j&&xn(p,d,m,"updated")},_)},me=(d,p,m,_,I,A,N)=>{for(let C=0;C<p.length;C++){const b=d[C],R=p[C],j=b.el&&(b.type===Vt||!ns(b,R)||b.shapeFlag&70)?h(b.el):m;T(b,R,j,null,_,I,A,N,!0)}},je=(d,p,m,_,I,A,N)=>{if(m!==_){if(m!==ve)for(const C in m)!ji(C)&&!(C in _)&&i(d,C,m[C],null,N,p.children,I,A,qe);for(const C in _){if(ji(C))continue;const b=_[C],R=m[C];b!==R&&C!=="value"&&i(d,C,R,b,N,p.children,I,A,qe)}"value"in _&&i(d,"value",m.value,_.value)}},at=(d,p,m,_,I,A,N,C,b)=>{const R=p.el=d?d.el:a(""),j=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:q,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(r(R,m,_),r(j,m,_),re(p.children,m,j,I,A,N,C,b)):L>0&&L&64&&q&&d.dynamicChildren?(me(d.dynamicChildren,q,m,I,A,N,C),(p.key!=null||I&&p===I.subTree)&&rp(d,p,!0)):ue(d,p,m,j,I,A,N,C,b)},dt=(d,p,m,_,I,A,N,C,b)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?I.ctx.activate(p,m,_,N,b):On(p,m,_,I,A,N,b):pt(d,p,b)},On=(d,p,m,_,I,A,N)=>{const C=d.component=Ov(d,_,I);if(zd(d)&&(C.ctx.renderer=k),xv(C),C.asyncDep){if(I&&I.registerDep(C,ce),!d.el){const b=C.subTree=De(Xn);S(null,b,p,m)}return}ce(C,d,p,m,I,A,N)},pt=(d,p,m)=>{const _=p.component=d.component;if(qy(d,p,m))if(_.asyncDep&&!_.asyncResolved){ge(_,p,m);return}else _.next=p,xy(_.update),_.update();else p.el=d.el,_.vnode=p},ce=(d,p,m,_,I,A,N)=>{const C=()=>{if(d.isMounted){let{next:j,bu:L,u:q,parent:W,vnode:ee}=d,_e=j,pe;Mn(d,!1),j?(j.el=ee.el,ge(d,j,N)):j=ee,L&&qi(L),(pe=j.props&&j.props.onVnodeBeforeUpdate)&&Dt(pe,W,j,ee),Mn(d,!0);const Se=ka(d),vt=d.subTree;d.subTree=Se,T(vt,Se,h(vt.el),v(vt),d,I,A),j.el=Se.el,_e===null&&Hy(d,Se.el),q&&it(q,I),(pe=j.props&&j.props.onVnodeUpdated)&&it(()=>Dt(pe,W,j,ee),I)}else{let j;const{el:L,props:q}=p,{bm:W,m:ee,parent:_e}=d,pe=Hi(p);if(Mn(d,!1),W&&qi(W),!pe&&(j=q&&q.onVnodeBeforeMount)&&Dt(j,_e,p),Mn(d,!0),L&&he){const Se=()=>{d.subTree=ka(d),he(L,d.subTree,d,I,null)};pe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=ka(d);T(null,Se,m,_,d,I,A),p.el=Se.el}if(ee&&it(ee,I),!pe&&(j=q&&q.onVnodeMounted)){const Se=p;it(()=>Dt(j,_e,Se),I)}(p.shapeFlag&256||_e&&Hi(_e.vnode)&&_e.vnode.shapeFlag&256)&&d.a&&it(d.a,I),d.isMounted=!0,p=m=_=null}},b=d.effect=new al(C,()=>ml(R),d.scope),R=d.update=()=>b.run();R.id=d.uid,Mn(d,!0),R()},ge=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,vv(d,p.props,_,m),Tv(d,p.children,m),Kr(),th(),zr()},ue=(d,p,m,_,I,A,N,C,b=!1)=>{const R=d&&d.children,j=d?d.shapeFlag:0,L=p.children,{patchFlag:q,shapeFlag:W}=p;if(q>0){if(q&128){cn(R,L,m,_,I,A,N,C,b);return}else if(q&256){Kt(R,L,m,_,I,A,N,C,b);return}}W&8?(j&16&&qe(R,I,A),L!==R&&u(m,L)):j&16?W&16?cn(R,L,m,_,I,A,N,C,b):qe(R,I,A,!0):(j&8&&u(m,""),W&16&&re(L,m,_,I,A,N,C,b))},Kt=(d,p,m,_,I,A,N,C,b)=>{d=d||Er,p=p||Er;const R=d.length,j=p.length,L=Math.min(R,j);let q;for(q=0;q<L;q++){const W=p[q]=b?dn(p[q]):Nt(p[q]);T(d[q],W,m,null,I,A,N,C,b)}R>j?qe(d,I,A,!0,!1,L):re(p,m,_,I,A,N,C,b,L)},cn=(d,p,m,_,I,A,N,C,b)=>{let R=0;const j=p.length;let L=d.length-1,q=j-1;for(;R<=L&&R<=q;){const W=d[R],ee=p[R]=b?dn(p[R]):Nt(p[R]);if(ns(W,ee))T(W,ee,m,null,I,A,N,C,b);else break;R++}for(;R<=L&&R<=q;){const W=d[L],ee=p[q]=b?dn(p[q]):Nt(p[q]);if(ns(W,ee))T(W,ee,m,null,I,A,N,C,b);else break;L--,q--}if(R>L){if(R<=q){const W=q+1,ee=W<j?p[W].el:_;for(;R<=q;)T(null,p[R]=b?dn(p[R]):Nt(p[R]),m,ee,I,A,N,C,b),R++}}else if(R>q)for(;R<=L;)st(d[R],I,A,!0),R++;else{const W=R,ee=R,_e=new Map;for(R=ee;R<=q;R++){const ct=p[R]=b?dn(p[R]):Nt(p[R]);ct.key!=null&&_e.set(ct.key,R)}let pe,Se=0;const vt=q-ee+1;let ur=!1,qu=0;const ts=new Array(vt);for(R=0;R<vt;R++)ts[R]=0;for(R=W;R<=L;R++){const ct=d[R];if(Se>=vt){st(ct,I,A,!0);continue}let kt;if(ct.key!=null)kt=_e.get(ct.key);else for(pe=ee;pe<=q;pe++)if(ts[pe-ee]===0&&ns(ct,p[pe])){kt=pe;break}kt===void 0?st(ct,I,A,!0):(ts[kt-ee]=R+1,kt>=qu?qu=kt:ur=!0,T(ct,p[kt],m,null,I,A,N,C,b),Se++)}const Hu=ur?Rv(ts):Er;for(pe=Hu.length-1,R=vt-1;R>=0;R--){const ct=ee+R,kt=p[ct],Ku=ct+1<j?p[ct+1].el:_;ts[R]===0?T(null,kt,m,Ku,I,A,N,C,b):ur&&(pe<0||R!==Hu[pe]?bt(kt,m,Ku,2):pe--)}}},bt=(d,p,m,_,I=null)=>{const{el:A,type:N,transition:C,children:b,shapeFlag:R}=d;if(R&6){bt(d.component.subTree,p,m,_);return}if(R&128){d.suspense.move(p,m,_);return}if(R&64){N.move(d,p,m,k);return}if(N===Vt){r(A,p,m);for(let L=0;L<b.length;L++)bt(b[L],p,m,_);r(d.anchor,p,m);return}if(N===Va){U(d,p,m);return}if(_!==2&&R&1&&C)if(_===0)C.beforeEnter(A),r(A,p,m),it(()=>C.enter(A),I);else{const{leave:L,delayLeave:q,afterLeave:W}=C,ee=()=>r(A,p,m),_e=()=>{L(A,()=>{ee(),W&&W()})};q?q(A,ee,_e):_e()}else r(A,p,m)},st=(d,p,m,_=!1,I=!1)=>{const{type:A,props:N,ref:C,children:b,dynamicChildren:R,shapeFlag:j,patchFlag:L,dirs:q}=d;if(C!=null&&dc(C,null,m,d,!0),j&256){p.ctx.deactivate(d);return}const W=j&1&&q,ee=!Hi(d);let _e;if(ee&&(_e=N&&N.onVnodeBeforeUnmount)&&Dt(_e,p,d),j&6)wi(d.component,m,_);else{if(j&128){d.suspense.unmount(m,_);return}W&&xn(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,m,I,k,_):R&&(A!==Vt||L>0&&L&64)?qe(R,p,m,!1,!0):(A===Vt&&L&384||!I&&j&16)&&qe(b,p,m),_&&cr(d)}(ee&&(_e=N&&N.onVnodeUnmounted)||W)&&it(()=>{_e&&Dt(_e,p,d),W&&xn(d,null,p,"unmounted")},m)},cr=d=>{const{type:p,el:m,anchor:_,transition:I}=d;if(p===Vt){lr(m,_);return}if(p===Va){O(d);return}const A=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:C}=I,b=()=>N(m,A);C?C(d.el,A,b):b()}else A()},lr=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},wi=(d,p,m)=>{const{bum:_,scope:I,update:A,subTree:N,um:C}=d;_&&qi(_),I.stop(),A&&(A.active=!1,st(N,d,p,m)),C&&it(C,p),it(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(d,p,m,_=!1,I=!1,A=0)=>{for(let N=A;N<d.length;N++)st(d[N],p,m,_,I)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),th(),$d(),p._vnode=d},k={p:T,um:st,m:bt,r:cr,mt:On,mc:re,pc:ue,pbc:me,n:v,o:t};let B,he;return e&&([B,he]=e(k)),{render:M,hydrate:B,createApp:mv(M,B)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rp(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||rp(o,a)),a.type===Ho&&(a.el=o.el)}}function Rv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Pv=t=>t.__isTeleport,Vt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),ms=[];let It=null;function _s(t=!1){ms.push(It=t?null:[])}function Sv(){ms.pop(),It=ms[ms.length-1]||null}let Vs=1;function fh(t){Vs+=t}function sp(t){return t.dynamicChildren=Vs>0?It||Er:null,Sv(),Vs>0&&It&&It.push(t),t}function zi(t,e,n,r,s,i){return sp(ut(t,e,n,r,s,i,!0))}function Cv(t,e,n,r,s){return sp(De(t,e,n,r,s,!0))}function pc(t){return t?t.__v_isVNode===!0:!1}function ns(t,e){return t.type===e.type&&t.key===e.key}const Ko="__vInternal",ip=({key:t})=>t??null,Wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Pe(t)||X(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function ut(t,e=null,n=null,r=0,s=null,i=t===Vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ip(e),ref:e&&Wi(e),scopeId:$o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ht};return a?(vl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Vs>0&&!o&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const De=bv;function bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===av)&&(t=Xn),pc(t)){const a=Dr(t,e,!0);return n&&vl(a,n),Vs>0&&!i&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(Bv(t)&&(t=t.__vccOpts),e){e=kv(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=il(a)),ye(c)&&(Od(c)&&!H(c)&&(c=Me({},c)),e.style=sl(c))}const o=Ne(t)?1:Ky(t)?128:Pv(t)?64:ye(t)?4:X(t)?2:0;return ut(t,e,n,r,s,o,i,!0)}function kv(t){return t?Od(t)||Ko in t?Me({},t):t:null}function Dr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Dv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ip(a),ref:e&&e.ref?n&&s?H(s)?s.concat(Wi(e)):[s,Wi(e)]:Wi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yr(t=" ",e=0){return De(Ho,null,t,e)}function kC(t="",e=!1){return e?(_s(),Cv(Xn,null,t)):De(Xn,null,t)}function Nt(t){return t==null||typeof t=="boolean"?De(Xn):H(t)?De(Vt,null,t.slice()):typeof t=="object"?dn(t):De(Ho,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function vl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ko in e)?e._ctx=ht:s===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),r&64?(n=16,e=[yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=il([e.class,r.class]));else if(s==="style")e.style=sl([e.style,r.style]);else if(Vo(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Dt(t,e,n,r=null){At(t,e,7,[n,r])}const Vv=Xd();let Nv=0;function Ov(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Vv,i={uid:Nv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zd(r,s),emitsOptions:qd(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fy.bind(null,i),t.ce&&t.ce(i),i}let xe=null,El,hr,dh="__VUE_INSTANCE_SETTERS__";(hr=sc()[dh])||(hr=sc()[dh]=[]),hr.push(t=>xe=t),El=t=>{hr.length>1?hr.forEach(e=>e(t)):hr[0](t)};const Vr=t=>{El(t),t.scope.on()},Gn=()=>{xe&&xe.scope.off(),El(null)};function op(t){return t.vnode.shapeFlag&4}let Ns=!1;function xv(t,e=!1){Ns=e;const{props:n,children:r}=t.vnode,s=op(t);yv(t,n,s,e),Iv(t,r);const i=s?Mv(t,e):void 0;return Ns=!1,i}function Mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fo(new Proxy(t.ctx,lv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Fv(t):null;Vr(t),Kr();const i=In(r,t,0,[t.props,s]);if(zr(),Gn(),dd(i)){if(i.then(Gn,Gn),e)return i.then(o=>{ph(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else ph(t,i,e)}else ap(t,e)}function ph(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Fd(e)),ap(t,n)}let gh;function ap(t,e,n){const r=t.type;if(!t.render){if(!e&&gh&&!r.render){const s=r.template||_l(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Me(Me({isCustomElement:i,delimiters:a},o),c);r.render=gh(s,l)}}t.render=r.render||wt}Vr(t),Kr(),uv(t),zr(),Gn()}function Lv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}}))}function Fv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Lv(t)},slots:t.slots,emit:t.emit,expose:e}}function zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fd(Fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}}))}function Uv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Bv(t){return X(t)&&"__vccOpts"in t}const gt=(t,e)=>Vy(t,e,Ns);function cp(t,e,n){const r=arguments.length;return r===2?ye(e)&&!H(e)?pc(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pc(n)&&(n=[n]),De(t,e,n))}const $v=Symbol.for("v-scx"),jv=()=>Ft($v),qv="3.3.4",Hv="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,mh=Un&&Un.createElement("template"),Kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Un.createElementNS(Hv,t):Un.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mh.innerHTML=r?`<svg>${t}</svg>`:t;const a=mh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wv(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&gc(r,i,"");for(const i in n)gc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _h=/\s*!important$/;function gc(t,e,n){if(H(n))n.forEach(r=>gc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gv(t,e);_h.test(n)?t.setProperty(sr(r),n.replace(_h,""),"important"):t[r]=n}}const yh=["Webkit","Moz","ms"],Na={};function Gv(t,e){const n=Na[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Na[e]=r;r=xo(r);for(let s=0;s<yh.length;s++){const i=yh[s]+r;if(i in t)return Na[e]=i}return e}const vh="http://www.w3.org/1999/xlink";function Qv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vh,e.slice(6,e.length)):t.setAttributeNS(vh,e,n);else{const i=G_(e);n==null||i&&!md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Jv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=md(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Bn(t,e,n,r){t.addEventListener(e,n,r)}function Xv(t,e,n,r){t.removeEventListener(e,n,r)}function Yv(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Zv(e);if(r){const l=i[e]=nE(r,s);Bn(t,a,l,c)}else o&&(Xv(t,a,o,c),i[e]=void 0)}}const Eh=/(?:Once|Passive|Capture)$/;function Zv(t){let e;if(Eh.test(t)){e={};let r;for(;r=t.match(Eh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let Oa=0;const eE=Promise.resolve(),tE=()=>Oa||(eE.then(()=>Oa=0),Oa=Date.now());function nE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;At(rE(r,n.value),e,5,[r])};return n.value=t,n.attached=tE(),n}function rE(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ih=/^on[a-z]/,sE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zv(t,r,s):e==="style"?Wv(t,n,r):Vo(e)?tl(e)||Yv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iE(t,e,r,s))?Jv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qv(t,e,r,s))};function iE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ih.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ih.test(e)&&Ne(n)?!1:e in t}const ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>qi(e,n):e};function oE(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const DC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ao(s);const i=r||s.props&&s.props.type==="number";Bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=rc(a)),t._assign(a)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",oE),Bn(t,"compositionend",Th),Bn(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ao(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&rc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},VC={deep:!0,created(t,e,n){t._assign=ao(n),Bn(t,"change",()=>{const r=t._modelValue,s=aE(t),i=t.checked,o=t._assign;if(H(r)){const a=_d(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(No(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(lp(t,i))})},mounted:wh,beforeUpdate(t,e,n){t._assign=ao(n),wh(t,e,n)}};function wh(t,{value:e,oldValue:n},r){t._modelValue=e,H(e)?t.checked=_d(e,r.props.value)>-1:No(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Mo(e,lp(t,!0)))}function aE(t){return"_value"in t?t._value:t.value}function lp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cE=["ctrl","shift","alt","meta"],lE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cE.some(n=>t[`${n}Key`]&&!e.includes(n))},NC=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=lE[e[s]];if(i&&i(n,e))return}return t(n,...r)},uE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},OC=(t,e)=>n=>{if(!("key"in n))return;const r=sr(n.key);if(e.some(s=>s===r||uE[s]===r))return t(n)},hE=Me({patchProp:sE},Kv);let Ah;function fE(){return Ah||(Ah=wv(hE))}const dE=(...t)=>{const e=fE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pE(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function pE(t){return Ne(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof window<"u";function gE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function xa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pt(s)?s.map(t):t(s)}return n}const ys=()=>{},Pt=Array.isArray,mE=/\/$/,_E=t=>t.replace(mE,"");function Ma(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=IE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function yE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Nr(e.matched[r],n.matched[s])&&up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!EE(t[n],e[n]))return!1;return!0}function EE(t,e){return Pt(t)?Ph(t,e):Pt(e)?Ph(e,t):t===e}function Ph(t,e){return Pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function IE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Os;(function(t){t.pop="pop",t.push="push"})(Os||(Os={}));var vs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vs||(vs={}));function TE(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_E(t)}const wE=/^[^#]+#/;function AE(t,e){return t.replace(wE,"#")+e}function RE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function PE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=RE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sh(t,e){return(history.state?history.state.position-e:-1)+t}const mc=new Map;function SE(t,e){mc.set(t,e)}function CE(t){const e=mc.get(t);return mc.delete(t),e}let bE=()=>location.protocol+"//"+location.host;function hp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Rh(c,"")}return Rh(n,t)+r+s}function kE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=hp(t,location),y=n.value,T=e.value;let w=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}w=T?f.position-T.position:0}else r(g);s.forEach(S=>{S(n.value,y,{delta:w,type:Os.pop,direction:w?w>0?vs.forward:vs.back:vs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Wo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ch(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wo():null}}function DE(t){const{history:e,location:n}=window,r={value:hp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:bE()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,Ch(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Wo()});i(u.current,u,!0);const h=fe({},Ch(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function VE(t){t=TE(t);const e=DE(t),n=kE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:AE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NE(t){return typeof t=="string"||t&&typeof t=="object"}function fp(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("");var bh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bh||(bh={}));function Or(t,e){return fe(new Error,{type:t,[dp]:!0},e)}function zt(t,e){return t instanceof Error&&dp in t&&(e==null||!!(t.type&e))}const kh="[^/]+?",OE={sensitive:!1,strict:!1,start:!0,end:!0},xE=/[.+*?^${}()[\]/\\]/g;function ME(t,e){const n=fe({},OE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(xE,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:T,optional:w,regexp:S}=f;i.push({name:y,repeatable:T,optional:w});const V=S||kh;if(V!==kh){g+=10;try{new RegExp(`(${V})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${V}): `+O.message)}}let U=T?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(U=w&&l.length<2?`(?:/${U})`:"/"+U),w&&(U+="?"),s+=U,g+=20,w&&(g+=-8),T&&(g+=-20),V===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:w}=g,S=y in l?l[y]:"";if(Pt(S)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const V=Pt(S)?S.join("/"):S;if(!V)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=V}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function LE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function FE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=LE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Dh(r))return 1;if(Dh(s))return-1}return s.length-r.length}function Dh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UE={type:0,value:""},BE=/[a-zA-Z0-9_]/;function $E(t){if(!t)return[[]];if(t==="/")return[[UE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:BE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function jE(t,e,n){const r=ME($E(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qE(t,e){const n=[],r=new Map;e=Oh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=HE(u);y.aliasOf=f&&f.record;const T=Oh(e,u),w=[y];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of U)w.push(fe({},y,{components:f?f.record.components:y.components,path:O,aliasOf:f?f.record:y}))}let S,V;for(const U of w){const{path:O}=U;if(h&&O[0]!=="/"){const Y=h.record.path,ne=Y[Y.length-1]==="/"?"":"/";U.path=h.record.path+(O&&ne+O)}if(S=jE(U,h,T),f?f.alias.push(S):(V=V||S,V!==S&&V.alias.push(S),g&&u.name&&!Nh(S)&&o(u.name)),y.children){const Y=y.children;for(let ne=0;ne<Y.length;ne++)i(Y[ne],S,f&&f.children[ne])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return V?()=>{o(V)}:ys}function o(u){if(fp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&FE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nh(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,T;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Or(1,{location:u});T=f.record.name,g=fe(Vh(h.params,f.keys.filter(V=>!V.optional).map(V=>V.name)),u.params&&Vh(u.params,f.keys.map(V=>V.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(V=>V.re.test(y)),f&&(g=f.parse(y),T=f.record.name);else{if(f=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!f)throw Or(1,{location:u,currentLocation:h});T=f.record.name,g=fe({},h.params,u.params),y=f.stringify(g)}const w=[];let S=f;for(;S;)w.unshift(S.record),S=S.parent;return{name:T,path:y,params:g,matched:w,meta:zE(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function HE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:KE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function KE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zE(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Oh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function pp(t,e){return e.children.some(n=>n===t||pp(t,n))}const gp=/#/g,WE=/&/g,GE=/\//g,QE=/=/g,JE=/\?/g,mp=/\+/g,XE=/%5B/g,YE=/%5D/g,_p=/%5E/g,ZE=/%60/g,yp=/%7B/g,eI=/%7C/g,vp=/%7D/g,tI=/%20/g;function Il(t){return encodeURI(""+t).replace(eI,"|").replace(XE,"[").replace(YE,"]")}function nI(t){return Il(t).replace(yp,"{").replace(vp,"}").replace(_p,"^")}function _c(t){return Il(t).replace(mp,"%2B").replace(tI,"+").replace(gp,"%23").replace(WE,"%26").replace(ZE,"`").replace(yp,"{").replace(vp,"}").replace(_p,"^")}function rI(t){return _c(t).replace(QE,"%3D")}function sI(t){return Il(t).replace(gp,"%23").replace(JE,"%3F")}function iI(t){return t==null?"":sI(t).replace(GE,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function oI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mp," "),o=i.indexOf("="),a=co(o<0?i:i.slice(0,o)),c=o<0?null:co(i.slice(o+1));if(a in e){let l=e[a];Pt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xh(t){let e="";for(let n in t){const r=t[n];if(n=rI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(r)?r.map(i=>i&&_c(i)):[r&&_c(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function aI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cI=Symbol(""),Mh=Symbol(""),Tl=Symbol(""),Ep=Symbol(""),yc=Symbol("");function rs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Or(4,{from:n,to:e})):h instanceof Error?a(h):NE(h)?a(Or(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function La(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(lI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=gE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&pn(f,n,r,i,o)()}))}}return s}function lI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lh(t){const e=Ft(Tl),n=Ft(Ep),r=gt(()=>e.resolve(Wn(t.to))),s=gt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Nr.bind(null,u));if(f>-1)return f;const g=Fh(c[l-2]);return l>1&&Fh(u)===g&&h[h.length-1].path!==g?h.findIndex(Nr.bind(null,c[l-2])):f}),i=gt(()=>s.value>-1&&dI(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&up(n.params,r.value.params));function a(c={}){return fI(c)?e[Wn(t.replace)?"replace":"push"](Wn(t.to)).catch(ys):Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const uI=jo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lh,setup(t,{slots:e}){const n=ei(Lh(t)),{options:r}=Ft(Tl),s=gt(()=>({[Uh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hI=uI;function fI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uh=(t,e,n)=>t??e??n,pI=jo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ft(yc),s=gt(()=>t.route||r.value),i=Ft(Mh,0),o=gt(()=>{let l=Wn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=gt(()=>s.value.matched[o.value]);Ki(Mh,gt(()=>o.value+1)),Ki(cI,a),Ki(yc,s);const c=dl();return ps(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Nr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Bh(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,w=cp(f,fe({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Bh(n.default,{Component:w,route:l})||w}}});function Bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ip=pI;function gI(t){const e=qE(t.routes,t),n=t.parseQuery||oI,r=t.stringifyQuery||xh,s=t.history,i=rs(),o=rs(),a=rs(),c=Ry(un);let l=un;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xa.bind(null,v=>""+v),h=xa.bind(null,iI),f=xa.bind(null,co);function g(v,M){let k,B;return fp(v)?(k=e.getRecordMatcher(v),B=M):B=v,e.addRoute(B,k)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function T(){return e.getRoutes().map(v=>v.record)}function w(v){return!!e.getRecordMatcher(v)}function S(v,M){if(M=fe({},M||c.value),typeof v=="string"){const m=Ma(n,v,M.path),_=e.resolve({path:m.path},M),I=s.createHref(m.fullPath);return fe(m,_,{params:f(_.params),hash:co(m.hash),redirectedFrom:void 0,href:I})}let k;if("path"in v)k=fe({},v,{path:Ma(n,v.path,M.path).path});else{const m=fe({},v.params);for(const _ in m)m[_]==null&&delete m[_];k=fe({},v,{params:h(m)}),M.params=h(M.params)}const B=e.resolve(k,M),he=v.hash||"";B.params=u(f(B.params));const d=yE(r,fe({},v,{hash:nI(he),path:B.path})),p=s.createHref(d);return fe({fullPath:d,hash:he,query:r===xh?aI(v.query):v.query||{}},B,{redirectedFrom:void 0,href:p})}function V(v){return typeof v=="string"?Ma(n,v,c.value.path):fe({},v)}function U(v,M){if(l!==v)return Or(8,{from:M,to:v})}function O(v){return Ae(v)}function Y(v){return O(fe(V(v),{replace:!0}))}function ne(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let B=typeof k=="function"?k(v):k;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=V(B):{path:B},B.params={}),fe({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function Ae(v,M){const k=l=S(v),B=c.value,he=v.state,d=v.force,p=v.replace===!0,m=ne(k);if(m)return Ae(fe(V(m),{state:typeof m=="object"?fe({},he,m.state):he,force:d,replace:p}),M||k);const _=k;_.redirectedFrom=M;let I;return!d&&vE(r,B,k)&&(I=Or(16,{to:_,from:B}),bt(B,B,!0,!1)),(I?Promise.resolve(I):me(_,B)).catch(A=>zt(A)?zt(A,2)?A:cn(A):ue(A,_,B)).then(A=>{if(A){if(zt(A,2))return Ae(fe({replace:p},V(A.to),{state:typeof A.to=="object"?fe({},he,A.to.state):he,force:d}),M||_)}else A=at(_,B,!0,p,he);return je(_,B,A),A})}function re(v,M){const k=U(v,M);return k?Promise.reject(k):Promise.resolve()}function Z(v){const M=lr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function me(v,M){let k;const[B,he,d]=mI(v,M);k=La(B.reverse(),"beforeRouteLeave",v,M);for(const m of B)m.leaveGuards.forEach(_=>{k.push(pn(_,v,M))});const p=re.bind(null,v,M);return k.push(p),qe(k).then(()=>{k=[];for(const m of i.list())k.push(pn(m,v,M));return k.push(p),qe(k)}).then(()=>{k=La(he,"beforeRouteUpdate",v,M);for(const m of he)m.updateGuards.forEach(_=>{k.push(pn(_,v,M))});return k.push(p),qe(k)}).then(()=>{k=[];for(const m of d)if(m.beforeEnter)if(Pt(m.beforeEnter))for(const _ of m.beforeEnter)k.push(pn(_,v,M));else k.push(pn(m.beforeEnter,v,M));return k.push(p),qe(k)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),k=La(d,"beforeRouteEnter",v,M),k.push(p),qe(k))).then(()=>{k=[];for(const m of o.list())k.push(pn(m,v,M));return k.push(p),qe(k)}).catch(m=>zt(m,8)?m:Promise.reject(m))}function je(v,M,k){a.list().forEach(B=>Z(()=>B(v,M,k)))}function at(v,M,k,B,he){const d=U(v,M);if(d)return d;const p=M===un,m=pr?history.state:{};k&&(B||p?s.replace(v.fullPath,fe({scroll:p&&m&&m.scroll},he)):s.push(v.fullPath,he)),c.value=v,bt(v,M,k,p),cn()}let dt;function On(){dt||(dt=s.listen((v,M,k)=>{if(!wi.listening)return;const B=S(v),he=ne(B);if(he){Ae(fe(he,{replace:!0}),B).catch(ys);return}l=B;const d=c.value;pr&&SE(Sh(d.fullPath,k.delta),Wo()),me(B,d).catch(p=>zt(p,12)?p:zt(p,2)?(Ae(p.to,B).then(m=>{zt(m,20)&&!k.delta&&k.type===Os.pop&&s.go(-1,!1)}).catch(ys),Promise.reject()):(k.delta&&s.go(-k.delta,!1),ue(p,B,d))).then(p=>{p=p||at(B,d,!1),p&&(k.delta&&!zt(p,8)?s.go(-k.delta,!1):k.type===Os.pop&&zt(p,20)&&s.go(-1,!1)),je(B,d,p)}).catch(ys)}))}let pt=rs(),ce=rs(),ge;function ue(v,M,k){cn(v);const B=ce.list();return B.length?B.forEach(he=>he(v,M,k)):console.error(v),Promise.reject(v)}function Kt(){return ge&&c.value!==un?Promise.resolve():new Promise((v,M)=>{pt.add([v,M])})}function cn(v){return ge||(ge=!v,On(),pt.list().forEach(([M,k])=>v?k(v):M()),pt.reset()),v}function bt(v,M,k,B){const{scrollBehavior:he}=t;if(!pr||!he)return Promise.resolve();const d=!k&&CE(Sh(v.fullPath,0))||(B||!k)&&history.state&&history.state.scroll||null;return gl().then(()=>he(v,M,d)).then(p=>p&&PE(p)).catch(p=>ue(p,v,M))}const st=v=>s.go(v);let cr;const lr=new Set,wi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:w,getRoutes:T,resolve:S,options:t,push:O,replace:Y,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Kt,install(v){const M=this;v.component("RouterLink",hI),v.component("RouterView",Ip),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(c)}),pr&&!cr&&c.value===un&&(cr=!0,O(s.location).catch(he=>{}));const k={};for(const he in un)Object.defineProperty(k,he,{get:()=>c.value[he],enumerable:!0});v.provide(Tl,M),v.provide(Ep,Vd(k)),v.provide(yc,c);const B=v.unmount;lr.add(v),v.unmount=function(){lr.delete(v),lr.size<1&&(l=un,dt&&dt(),dt=null,c.value=un,cr=!1,ge=!1),B()}}};function qe(v){return v.reduce((M,k)=>M.then(()=>Z(k)),Promise.resolve())}return wi}function mI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Nr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Nr(l,c))||s.push(c))}return[n,r,s]}var _I=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Tp;const Go=t=>Tp=t,wp=Symbol();function vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Es;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Es||(Es={}));function yI(){const t=Ed(!0),e=t.run(()=>dl({}));let n=[],r=[];const s=Fo({install(i){Go(s),s._a=i,i.provide(wp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_I?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ap=()=>{};function $h(t,e,n,r=Ap){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Id()&&X_(s),s}function fr(t,...e){t.slice().forEach(n=>{n(...e)})}const vI=t=>t();function Ec(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];vc(s)&&vc(r)&&t.hasOwnProperty(n)&&!Pe(r)&&!En(r)?t[n]=Ec(s,r):t[n]=r}return t}const EI=Symbol();function II(t){return!vc(t)||!t.hasOwnProperty(EI)}const{assign:fn}=Object;function TI(t){return!!(Pe(t)&&t.effect)}function wI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Cy(n.state.value[t]);return fn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Fo(gt(()=>{Go(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Rp(t,l,e,n,r,!0),c}function Rp(t,e,n={},r,s,i){let o;const a=fn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),dl({});let T;function w(re){let Z;l=u=!1,typeof re=="function"?(re(r.state.value[t]),Z={type:Es.patchFunction,storeId:t,events:g}):(Ec(r.state.value[t],re),Z={type:Es.patchObject,payload:re,storeId:t,events:g});const me=T=Symbol();gl().then(()=>{T===me&&(l=!0)}),u=!0,fr(h,Z,r.state.value[t])}const S=i?function(){const{state:Z}=n,me=Z?Z():{};this.$patch(je=>{fn(je,me)})}:Ap;function V(){o.stop(),h=[],f=[],r._s.delete(t)}function U(re,Z){return function(){Go(r);const me=Array.from(arguments),je=[],at=[];function dt(ce){je.push(ce)}function On(ce){at.push(ce)}fr(f,{args:me,name:re,store:Y,after:dt,onError:On});let pt;try{pt=Z.apply(this&&this.$id===t?this:Y,me)}catch(ce){throw fr(at,ce),ce}return pt instanceof Promise?pt.then(ce=>(fr(je,ce),ce)).catch(ce=>(fr(at,ce),Promise.reject(ce))):(fr(je,pt),pt)}}const O={_p:r,$id:t,$onAction:$h.bind(null,f),$patch:w,$reset:S,$subscribe(re,Z={}){const me=$h(h,re,Z.detached,()=>je()),je=o.run(()=>ps(()=>r.state.value[t],at=>{(Z.flush==="sync"?u:l)&&re({storeId:t,type:Es.direct,events:g},at)},fn({},c,Z)));return me},$dispose:V},Y=ei(O);r._s.set(t,Y);const ne=r._a&&r._a.runWithContext||vI,Ae=r._e.run(()=>(o=Ed(),ne(()=>o.run(e))));for(const re in Ae){const Z=Ae[re];if(Pe(Z)&&!TI(Z)||En(Z))i||(y&&II(Z)&&(Pe(Z)?Z.value=y[re]:Ec(Z,y[re])),r.state.value[t][re]=Z);else if(typeof Z=="function"){const me=U(re,Z);Ae[re]=me,a.actions[re]=Z}}return fn(Y,Ae),fn(oe(Y),Ae),Object.defineProperty(Y,"$state",{get:()=>r.state.value[t],set:re=>{w(Z=>{fn(Z,re)})}}),r._p.forEach(re=>{fn(Y,o.run(()=>re({store:Y,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(Y.$state,y),l=!0,u=!0,Y}function AI(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=_v();return a=a||(l?Ft(wp,null):null),a&&Go(a),a=Tp,a._s.has(r)||(i?Rp(r,e,s,a):wI(r,s,a)),a._s.get(r)}return o.$id=r,o}/**
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
 *//**
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
 */const Pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},RI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new PI;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SI=function(t){const e=Pp(t);return Sp.encodeByteArray(e,!0)},lo=function(t){return SI(t).replace(/\./g,"")},Cp=function(t){try{return Sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bI=()=>CI().__FIREBASE_DEFAULTS__,kI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},wl=()=>{try{return bI()||kI()||DI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VI=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kp=()=>{var t;return(t=wl())===null||t===void 0?void 0:t.config},Dp=t=>{var e;return(e=wl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function OI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),a].join(".")}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function MI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FI(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function BI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $I="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$I,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function jI(t,e){return t.replace(qI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;function HI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jh(i)&&jh(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jh(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function KI(t,e){const n=new zI(t,e);return n.subscribe.bind(n)}class zI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class GI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(t){return t===Ln?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
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
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const YI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ZI=ae.INFO,eT={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},tT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const nT=(t,e)=>e.some(n=>t instanceof n);let qh,Hh;function rT(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sT(){return Hh||(Hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vp=new WeakMap,Ic=new WeakMap,Np=new WeakMap,Ua=new WeakMap,Rl=new WeakMap;function iT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vp.set(n,t)}).catch(()=>{}),Rl.set(e,t),e}function oT(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aT(t){Tc=t(Tc)}function cT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ba(this),e,...n);return Np.set(r,e.sort?e.sort():[e]),Tn(r)}:sT().includes(t)?function(...e){return t.apply(Ba(this),e),Tn(Vp.get(this))}:function(...e){return Tn(t.apply(Ba(this),e))}}function lT(t){return typeof t=="function"?cT(t):(t instanceof IDBTransaction&&oT(t),nT(t,rT())?new Proxy(t,Tc):t)}function Tn(t){if(t instanceof IDBRequest)return iT(t);if(Ua.has(t))return Ua.get(t);const e=lT(t);return e!==t&&(Ua.set(t,e),Rl.set(e,t)),e}const Ba=t=>Rl.get(t);function uT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tn(o.result),c.oldVersion,c.newVersion,Tn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const hT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],$a=new Map;function Kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $a.set(e,i),i}aT(t=>({...t,get:(e,n,r)=>Kh(e,n)||t.get(e,n,r),has:(e,n)=>!!Kh(e,n)||t.has(e,n)}));/**
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
 */class dT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",zh="0.9.15";/**
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
 */const Zn=new Al("@firebase/app"),gT="@firebase/app-compat",mT="@firebase/analytics-compat",_T="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",ET="@firebase/auth",IT="@firebase/auth-compat",TT="@firebase/database",wT="@firebase/database-compat",AT="@firebase/functions",RT="@firebase/functions-compat",PT="@firebase/installations",ST="@firebase/installations-compat",CT="@firebase/messaging",bT="@firebase/messaging-compat",kT="@firebase/performance",DT="@firebase/performance-compat",VT="@firebase/remote-config",NT="@firebase/remote-config-compat",OT="@firebase/storage",xT="@firebase/storage-compat",MT="@firebase/firestore",LT="@firebase/firestore-compat",FT="firebase",UT="10.1.0";/**
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
 */const Ac="[DEFAULT]",BT={[wc]:"fire-core",[gT]:"fire-core-compat",[_T]:"fire-analytics",[mT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[ET]:"fire-auth",[IT]:"fire-auth-compat",[TT]:"fire-rtdb",[wT]:"fire-rtdb-compat",[AT]:"fire-fn",[RT]:"fire-fn-compat",[PT]:"fire-iid",[ST]:"fire-iid-compat",[CT]:"fire-fcm",[bT]:"fire-fcm-compat",[kT]:"fire-perf",[DT]:"fire-perf-compat",[VT]:"fire-rc",[NT]:"fire-rc-compat",[OT]:"fire-gcs",[xT]:"fire-gcs-compat",[MT]:"fire-fst",[LT]:"fire-fst-compat","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const ho=new Map,Rc=new Map;function $T(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(Rc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of ho.values())$T(n,t);return!0}function Pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new ti("app","Firebase",jT);/**
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
 */class qT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=UT;function Op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});if(n||(n=kp()),!n)throw wn.create("no-options");const i=ho.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw wn.create("duplicate-app",{appName:s})}const o=new XI(s);for(const c of Rc.values())o.addComponent(c);const a=new qT(n,r,o);return ho.set(s,a),a}function xp(t=Ac){const e=ho.get(t);if(!e&&t===Ac&&kp())return Op();if(!e)throw wn.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=BT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}xr(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",KT=1,xs="firebase-heartbeat-store";let ja=null;function Mp(){return ja||(ja=uT(HT,KT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),ja}async function zT(t){try{return await(await Mp()).transaction(xs).objectStore(xs).get(Lp(t))}catch(e){if(e instanceof an)Zn.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Wh(t,e){try{const r=(await Mp()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,Lp(t)),await r.done}catch(n){if(n instanceof an)Zn.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WT=1024,GT=30*24*60*60*1e3;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=GT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gh(),{heartbeatsToSend:n,unsentEntries:r}=JT(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gh(){return new Date().toISOString().substring(0,10)}function JT(t,e=WT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?BI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YT(t){xr(new Yn("platform-logger",e=>new dT(e),"PRIVATE")),xr(new Yn("heartbeat",e=>new QT(e),"PRIVATE")),An(wc,zh,t),An(wc,zh,"esm2017"),An("fire-js","")}YT("");var ZT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Sl=Sl||{},z=ZT||self;function Qo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ri(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ew(t){return Object.prototype.hasOwnProperty.call(t,qa)&&t[qa]||(t[qa]=++tw)}var qa="closure_uid_"+(1e9*Math.random()>>>0),tw=0;function nw(t,e,n){return t.call.apply(t.bind,arguments)}function rw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=nw:Qe=rw,Qe.apply(null,arguments)}function ki(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Dn(){this.s=this.s,this.o=this.o}var sw=0;Dn.prototype.s=!1;Dn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sw!=0)&&ew(this)};Dn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Qo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var iw=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function Ms(t){return/^[\s\xa0]*$/.test(t)}function Jo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return Jo().indexOf(t)!=-1}function bl(t){return bl[" "](t),t}bl[" "]=function(){};function ow(t,e){var n=Yw;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var aw=xt("Opera"),Mr=xt("Trident")||xt("MSIE"),Up=xt("Edge"),Pc=Up||Mr,Bp=xt("Gecko")&&!(Jo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),cw=Jo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function $p(){var t=z.document;return t?t.documentMode:void 0}var Sc;e:{var Ha="",Ka=function(){var t=Jo();if(Bp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Up)return/Edge\/([\d\.]+)/.exec(t);if(Mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cw)return/WebKit\/(\S+)/.exec(t);if(aw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ka&&(Ha=Ka?Ka[1]:""),Mr){var za=$p();if(za!=null&&za>parseFloat(Ha)){Sc=String(za);break e}}Sc=Ha}var Cc;if(z.document&&Mr){var Xh=$p();Cc=Xh||parseInt(Sc,10)||void 0}else Cc=void 0;var lw=Cc;function Ls(t,e){if(Je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bp){e:{try{bl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ls.$.h.call(this)}}Fe(Ls,Je);var uw={2:"touch",3:"pen",4:"mouse"};Ls.prototype.h=function(){Ls.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var si="closure_listenable_"+(1e6*Math.random()|0),hw=0;function fw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++hw,this.fa=this.ia=!1}function Xo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jp(t){const e={};for(const n in t)e[n]=t[n];return e}const Yh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Yh.length;i++)n=Yh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yo(t){this.src=t,this.g={},this.h=0}Yo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=kc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Fp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function kc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Dl="closure_lm_"+(1e6*Math.random()|0),Wa={};function Hp(t,e,n,r,s){if(r&&r.once)return zp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hp(t,e[i],n,r,s);return null}return n=Ol(n),t&&t[si]?t.O(e,n,ri(r)?!!r.capture:!!r,s):Kp(t,e,n,!1,r,s)}function Kp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ri(s)?!!s.capture:!!s,a=Nl(t);if(a||(t[Dl]=a=new Yo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=pw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Gp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pw(){function t(n){return e.call(t.src,t.listener,n)}const e=gw;return t}function zp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)zp(t,e[i],n,r,s);return null}return n=Ol(n),t&&t[si]?t.P(e,n,ri(r)?!!r.capture:!!r,s):Kp(t,e,n,!0,r,s)}function Wp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wp(t,e[i],n,r,s);else r=ri(r)?!!r.capture:!!r,n=Ol(n),t&&t[si]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=kc(i,n,r,s),-1<n&&(Xo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kc(e,n,r,s)),(n=-1<t?e[t]:null)&&Vl(n))}function Vl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[si])bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Gp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nl(e))?(bc(n,t),n.h==0&&(n.src=null,e[Dl]=null)):Xo(t)}}}function Gp(t){return t in Wa?Wa[t]:Wa[t]="on"+t}function gw(t,e){if(t.fa)t=!0;else{e=new Ls(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Vl(t),t=n.call(r,e)}return t}function Nl(t){return t=t[Dl],t instanceof Yo?t:null}var Ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ol(t){return typeof t=="function"?t:(t[Ga]||(t[Ga]=function(e){return t.handleEvent(e)}),t[Ga])}function Le(){Dn.call(this),this.i=new Yo(this),this.S=this,this.J=null}Fe(Le,Dn);Le.prototype[si]=!0;Le.prototype.removeEventListener=function(t,e,n,r){Wp(this,t,e,n,r)};function $e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Je(e,t);else if(e instanceof Je)e.target=e.target||t;else{var s=e;e=new Je(r,t),qp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Di(o,r,!0,e)&&s}if(o=e.g=t,s=Di(o,r,!0,e)&&s,s=Di(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Di(o,r,!1,e)&&s}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xo(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Di(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var xl=z.JSON.stringify;class mw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function _w(){var t=Ml;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yw{constructor(){this.h=this.g=null}add(e,n){const r=Qp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qp=new mw(()=>new vw,t=>t.reset());class vw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ew(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Iw(t){z.setTimeout(()=>{throw t},0)}let Fs,Us=!1,Ml=new yw,Jp=()=>{const t=z.Promise.resolve(void 0);Fs=()=>{t.then(Tw)}};var Tw=()=>{for(var t;t=_w();){try{t.h.call(t.g)}catch(n){Iw(n)}var e=Qp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Us=!1};function Zo(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=Qe(this.qb,this),this.l=Date.now()}Fe(Zo,Le);D=Zo.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(Ll(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ll(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Zo.$.N.call(this),Ll(this),delete this.g};function Fl(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Xp(t){t.g=Fl(()=>{t.g=null,t.i&&(t.i=!1,Xp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ww extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xp(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(t){Dn.call(this),this.h=t,this.g={}}Fe(Bs,Dn);var Zh=[];function Yp(t,e,n,r){Array.isArray(n)||(n&&(Zh[0]=n.toString()),n=Zh);for(var s=0;s<n.length;s++){var i=Hp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zp(t){kl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vl(e)},t),t.g={}}Bs.prototype.N=function(){Bs.$.N.call(this),Zp(this)};Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ea(){this.g=!0}ea.prototype.Ea=function(){this.g=!1};function Aw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Rw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sw(t,n)+(r?" "+r:"")})}function Pw(t,e){t.info(function(){return"TIMEOUT: "+e})}ea.prototype.info=function(){};function Sw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return xl(n)}catch{return e}}var ir={},ef=null;function ta(){return ef=ef||new Le}ir.Ta="serverreachability";function eg(t){Je.call(this,ir.Ta,t)}Fe(eg,Je);function $s(t){const e=ta();$e(e,new eg(e))}ir.STAT_EVENT="statevent";function tg(t,e){Je.call(this,ir.STAT_EVENT,t),this.stat=e}Fe(tg,Je);function tt(t){const e=ta();$e(e,new tg(e,t))}ir.Ua="timingevent";function ng(t,e){Je.call(this,ir.Ua,t),this.size=e}Fe(ng,Je);function ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var na={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ul(){}Ul.prototype.h=null;function tf(t){return t.h||(t.h=t.i())}function sg(){}var oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bl(){Je.call(this,"d")}Fe(Bl,Je);function $l(){Je.call(this,"c")}Fe($l,Je);var Dc;function ra(){}Fe(ra,Ul);ra.prototype.g=function(){return new XMLHttpRequest};ra.prototype.i=function(){return{}};Dc=new ra;function ai(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Bs(this),this.P=Cw,t=Pc?125:void 0,this.V=new Zo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ig}function ig(){this.i=null,this.g="",this.h=!1}var Cw=45e3,Vc={},fo={};D=ai.prototype;D.setTimeout=function(t){this.P=t};function Nc(t,e,n){t.L=1,t.v=ia(en(e)),t.s=n,t.S=!0,og(t,null)}function og(t,e){t.G=Date.now(),ci(t),t.A=en(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),pg(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ig,t.g=xg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ww(Qe(t.Pa,t,t.g),t.O)),Yp(t.U,t.g,"readystatechange",t.nb),e=t.I?jp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$s(),Aw(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Pc||this.g&&(this.h.h||this.g.ja()||of(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$s(3):$s(2)),sa(this);var n=this.g.da();this.ca=n;t:if(ag(this)){var r=of(this.g);t="";var s=r.length,i=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Is(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Rw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ms(a)){var l=a;break t}}l=null}if(n=l)vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,n);else{this.i=!1,this.o=3,tt(12),jn(this),Is(this);break e}}this.S?(cg(this,u,o),Pc&&this.i&&u==3&&(Yp(this.U,this.V,"tick",this.mb),this.V.start())):(vr(this.j,this.m,o,null),Oc(this,o)),u==4&&jn(this),this.i&&!this.J&&(u==4?Dg(this.l,this):(this.i=!1,ci(this)))}else Qw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),jn(this),Is(this)}}}catch{}finally{}};function ag(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cg(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=bw(t,n),s==fo){e==4&&(t.o=4,tt(14),r=!1),vr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vc){t.o=4,tt(15),vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vr(t.j,t.m,s,null),Oc(t,s);ag(t)&&s!=fo&&s!=Vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wl(e),e.M=!0,tt(11))):(vr(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),Is(t))}D.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(sa(this),cg(this,t,e),this.i&&t!=4&&ci(this))}};function bw(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?fo:(n=Number(e.substring(n,r)),isNaN(n)?Vc:(r+=1,r+n>e.length?fo:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,jn(this)};function ci(t){t.Y=Date.now()+t.P,lg(t,t.P)}function lg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ii(Qe(t.lb,t),e)}function sa(t){t.B&&(z.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Pw(this.j,this.A),this.L!=2&&($s(),tt(17)),jn(this),this.o=2,Is(this)):lg(this,this.Y-t)};function Is(t){t.l.H==0||t.J||Dg(t.l,t)}function jn(t){sa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ll(t.V),Zp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xc(n.i,t))){if(!t.K&&xc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mo(n),ca(n);else break e;zl(n),tt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ii(Qe(n.ib,n),6e3));if(1>=_g(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qn(n,11)}else if((t.K||n.g==t)&&mo(n),!Ms(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jl(i,i.h),i.h=null))}if(r.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Ee(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Og(r,r.J?r.pa:null,r.Y),o.K){yg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(sa(a),ci(a)),r.g=o}else bg(r);0<n.j.length&&la(n)}else l[0]!="stop"&&l[0]!="close"||qn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qn(n,7):Kl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}$s(4)}catch{}}function kw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Qo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Dw(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Qo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ug(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Dw(t),r=kw(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var hg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qn){this.h=t.h,po(this,t.j),this.s=t.s,this.g=t.g,go(this,t.m),this.l=t.l;var e=t.i,n=new js;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nf(this,n),this.o=t.o}else t&&(e=String(t).match(hg))?(this.h=!1,po(this,e[1]||"",!0),this.s=ls(e[2]||""),this.g=ls(e[3]||"",!0),go(this,e[4]),this.l=ls(e[5]||"",!0),nf(this,e[6]||"",!0),this.o=ls(e[7]||"")):(this.h=!1,this.i=new js(null,this.h))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(us(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(us(n,n.charAt(0)=="/"?xw:Ow,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,Lw)),t.join("")};function en(t){return new Qn(t)}function po(t,e,n){t.j=n?ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function go(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nf(t,e,n){e instanceof js?(t.i=e,Fw(t.i,t.h)):(n||(e=us(e,Mw)),t.i=new js(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function ia(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,Ow=/[#\?:]/g,xw=/[#\?]/g,Mw=/[#\?@]/g,Lw=/#/g;function js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&Vw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=js.prototype;D.add=function(t,e){Vn(this),this.i=null,t=Gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fg(t,e){Vn(t),e=Gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dg(t,e){return Vn(t),e=Gr(t,e),t.g.has(e)}D.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Vn(this);let e=[];if(typeof t=="string")dg(this,t)&&(e=e.concat(this.g.get(Gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vn(this),this.i=null,t=Gr(this,t),dg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function pg(t,e,n){fg(t,e),0<n.length&&(t.i=null,t.g.set(Gr(t,e),Cl(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Fw(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(fg(this,r),pg(this,s,n))},t)),t.j=e}var Uw=class{constructor(t,e){this.g=t,this.map=e}};function gg(t){this.l=t||Bw,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bw=10;function mg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _g(t){return t.h?1:t.g?t.g.size:0}function xc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jl(t,e){t.g?t.g.add(e):t.h=e}function yg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gg.prototype.cancel=function(){if(this.i=vg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cl(t.i)}var $w=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function jw(){this.g=new $w}function qw(t,e,n){const r=n||"";try{ug(t,function(s,i){let o=s;ri(s)&&(o=xl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Hw(t,e){const n=new ea;if(z.Image){const r=new Image;r.onload=ki(Vi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ki(Vi,n,r,"TestLoadImage: error",!1,e),r.onabort=ki(Vi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ki(Vi,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function li(t){this.l=t.fc||null,this.j=t.ob||!1}Fe(li,Ul);li.prototype.g=function(){return new oa(this.l,this.j)};li.prototype.i=function(t){return function(){return t}}({});function oa(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(oa,Le);var ql=0;D=oa.prototype;D.open=function(t,e){if(this.readyState!=ql)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=ql};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Eg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ui(this):qs(this),this.readyState==3&&Eg(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,ui(this))};D.Ya=function(t){this.g&&(this.response=t,ui(this))};D.ka=function(){this.g&&ui(this)};function ui(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kw=z.JSON.parse;function Re(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ig,this.L=this.M=!1}Fe(Re,Le);var Ig="",zw=/^https?$/i,Ww=["POST","PUT"];D=Re.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dc.g(),this.C=this.u?tf(this.u):tf(Dc),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&t instanceof z.FormData,!(0<=Fp(Ww,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ag(this),0<this.B&&((this.L=Gw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=Fl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sf(this,i)}};function Gw(t){return Mr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Sl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function sf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tg(t),aa(t)}function Tg(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),aa(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),Re.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?wg(this):this.kb())};D.kb=function(){wg(this)};function wg(t){if(t.h&&typeof Sl<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)Fl(t.La,0,t);else if($e(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(hg)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!zw.test(s?s.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var i=2<Mt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Tg(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){Ag(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ag(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kw(e)}};function of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ig:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Qw(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ms(t[r]))continue;var n=Ew(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}dw(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rg(t){let e="";return kl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pg(t){this.Ga=0,this.j=[],this.l=new ea,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ss("baseRetryDelayMs",5e3,t),this.hb=ss("retryDelaySeedMs",1e4,t),this.eb=ss("forwardChannelMaxRetries",2,t),this.xa=ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new gg(t&&t.concurrentRequestLimit),this.Ja=new jw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=Pg.prototype;D.ra=8;D.H=1;function Kl(t){if(Sg(t),t.H==3){var e=t.W++,n=en(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),hi(t,n),e=new ai(t,t.l,e),e.L=2,e.v=ia(en(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=xg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ci(e)}Ng(t)}function ca(t){t.g&&(Wl(t),t.g.cancel(),t.g=null)}function Sg(t){ca(t),t.u&&(z.clearTimeout(t.u),t.u=null),mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function la(t){if(!mg(t.i)&&!t.m){t.m=!0;var e=t.Na;Fs||Jp(),Us||(Fs(),Us=!0),Ml.add(e,t),t.C=0}}function Jw(t,e){return _g(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ii(Qe(t.Na,t,e),Vg(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ai(this,this.l,t);let i=this.s;if(this.U&&(i?(i=jp(i),qp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cg(this,s,e),n=en(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),hi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Rg(i)))+"&"+e:this.o&&Hl(n,this.o,i)),jl(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Nc(s,n,null)):Nc(s,n,e),this.H=2}}else this.H==3&&(t?af(this,t):this.j.length==0||mg(this.i)||af(this))};function af(t,e){var n;e?n=e.m:n=t.W++;const r=en(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),hi(t,r),t.o&&t.s&&Hl(r,t.o,t.s),n=new ai(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jl(t.i,n),Nc(n,r,e)}function hi(t,e){t.na&&kl(t.na,function(n,r){Ee(e,r,n)}),t.h&&ug({},function(n,r){Ee(e,r,n)})}function Cg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Qe(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{qw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function bg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fs||Jp(),Us||(Fs(),Us=!0),Ml.add(e,t),t.A=0}}function zl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ii(Qe(t.Ma,t),Vg(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,kg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ii(Qe(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),ca(this),kg(this))};function Wl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function kg(t){t.g=new ai(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=en(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),hi(t,e),t.o&&t.s&&Hl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ia(en(e)),n.s=null,n.S=!0,og(n,t)}D.ib=function(){this.v!=null&&(this.v=null,ca(this),zl(this),tt(19))};function mo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Dg(t,e){var n=null;if(t.g==e){mo(t),Wl(t),t.g=null;var r=2}else if(xc(t.i,e))n=e.F,yg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ta(),$e(r,new ng(r,n)),la(t)}else bg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Jw(t,e)||r==2&&zl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function Vg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Qe(t.pb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||po(n,"https"),ia(n)),Hw(n.toString(),r)}else tt(2);t.H=0,t.h&&t.h.za(e),Ng(t),Sg(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Ng(t){if(t.H=0,t.ma=[],t.h){const e=vg(t.i);(e.length!=0||t.j.length!=0)&&(Jh(t.ma,e),Jh(t.ma,t.j),t.i.i.length=0,Cl(t.j),t.j.length=0),t.h.ya()}}function Og(t,e,n){var r=n instanceof Qn?en(n):new Qn(n);if(r.g!="")e&&(r.g=e+"."+r.g),go(r,r.m);else{var s=z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Qn(null);r&&po(i,r),e&&(i.g=e),s&&go(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),hi(t,r),r}function xg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new li({ob:!0})):new Re(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mg(){}D=Mg.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function _o(){if(Mr&&!(10<=Number(lw)))throw Error("Environmental error: no available transport.")}_o.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Le.call(this),this.g=new Pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ms(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ms(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qr(this)}Fe(ft,Le);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Og(t,null,t.Y),la(t)};ft.prototype.close=function(){Kl(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xl(t),t=n);e.j.push(new Uw(e.fb++,t)),e.H==3&&la(e)};ft.prototype.N=function(){this.g.h=null,delete this.j,Kl(this.g),delete this.g,ft.$.N.call(this)};function Lg(t){Bl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(Lg,Bl);function Fg(){$l.call(this),this.status=1}Fe(Fg,$l);function Qr(t){this.g=t}Fe(Qr,Mg);Qr.prototype.Ba=function(){$e(this.g,"a")};Qr.prototype.Aa=function(t){$e(this.g,new Lg(t))};Qr.prototype.za=function(t){$e(this.g,new Fg)};Qr.prototype.ya=function(){$e(this.g,"b")};function Xw(){this.blockSize=-1}function St(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Fe(St,Xw);St.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qa(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}St.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Qa(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Qa(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Qa(this,r),s=0;break}}this.h=s,this.i+=e};St.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Yw={};function Gl(t){return-128<=t&&128>t?ow(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Lt(t){if(isNaN(t)||!isFinite(t))return wr;if(0>t)return Be(Lt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mc;return new de(e,0)}function Ug(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(Ug(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Lt(Math.pow(e,8)),r=wr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Lt(Math.pow(e,i)),r=r.R(i).add(Lt(o))):(r=r.R(n),r=r.add(Lt(o)))}return r}var Mc=4294967296,wr=Gl(0),Lc=Gl(1),cf=Gl(16777216);D=de.prototype;D.ea=function(){if(mt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mc+r)*e,e*=Mc}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qt(this))return"0";if(mt(this))return"-"+Be(this).toString(t);for(var e=Lt(Math.pow(t,6)),n=this,r="";;){var s=vo(n,e).g;n=yo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Qt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mt(t){return t.h==-1}D.X=function(t){return t=yo(this,t),mt(t)?-1:Qt(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(Lc)}D.abs=function(){return mt(this)?Be(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function yo(t,e){return t.add(Be(e))}D.R=function(t){if(Qt(this)||Qt(t))return wr;if(mt(this))return mt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(mt(t))return Be(this.R(Be(t)));if(0>this.X(cf)&&0>t.X(cf))return Lt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ni(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ni(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ni(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ni(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function Ni(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function is(t,e){this.g=t,this.h=e}function vo(t,e){if(Qt(e))throw Error("division by zero");if(Qt(t))return new is(wr,wr);if(mt(t))return e=vo(Be(t),e),new is(Be(e.g),Be(e.h));if(mt(e))return e=vo(t,Be(e)),new is(Be(e.g),e.h);if(30<t.g.length){if(mt(t)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lc,r=e;0>=r.X(t);)n=lf(n),r=lf(r);var s=dr(n,1),i=dr(r,1);for(r=dr(r,2),n=dr(n,2);!Qt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=dr(r,1),n=dr(n,1)}return e=yo(t,s.R(e)),new is(s,e)}for(s=wr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Lt(n),o=i.R(e);mt(o)||0<o.X(t);)n-=r,i=Lt(n),o=i.R(e);Qt(i)&&(i=Lc),s=s.add(i),t=yo(t,o)}return new is(s,t)}D.gb=function(t){return vo(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function lf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(s,t.h)}_o.prototype.createWebChannel=_o.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;na.NO_ERROR=0;na.TIMEOUT=8;na.HTTP_ERROR=6;rg.COMPLETE="complete";sg.EventType=oi;oi.OPEN="a";oi.CLOSE="b";oi.ERROR="c";oi.MESSAGE="d";Le.prototype.listen=Le.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;St.prototype.digest=St.prototype.l;St.prototype.reset=St.prototype.reset;St.prototype.update=St.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Lt;de.fromString=Ug;var Zw=function(){return new _o},eA=function(){return ta()},Ja=na,tA=rg,nA=ir,uf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rA=li,Oi=sg,sA=Re,iA=St,Ar=de;const hf="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let Jr="10.1.0";/**
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
 */const er=new Al("@firebase/firestore");function ff(){return er.logLevel}function F(t,...e){if(er.logLevel<=ae.DEBUG){const n=e.map(Ql);er.debug(`Firestore (${Jr}): ${t}`,...n)}}function tn(t,...e){if(er.logLevel<=ae.ERROR){const n=e.map(Ql);er.error(`Firestore (${Jr}): ${t}`,...n)}}function Lr(t,...e){if(er.logLevel<=ae.WARN){const n=e.map(Ql);er.warn(`Firestore (${Jr}): ${t}`,...n)}}function Ql(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function Te(t,e){t||K()}function J(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cA{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new Bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Ke(e)}}class lA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new hA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $g{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Fr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ve(0,0))}static max(){return new G(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Hs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Hs{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Ie.fromString(e))}static fromName(e){return new $(Ie.fromString(e).popFirst(5))}static empty(){return new $(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Ie(e.slice()))}}function gA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Sn(s,$.empty(),e)}function mA(t){return new Sn(t.readTime,t.key,-1)}class Sn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sn(G.min(),$.empty(),-1)}static max(){return new Sn(G.max(),$.empty(),-1)}}function _A(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const yA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==yA)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function di(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jl.ae=-1;function ua(t){return t==null}function Eo(t){return t===0&&1/t==-1/0}function EA(t){return typeof t=="number"&&Number.isInteger(t)&&!Eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xi(this.root,e,this.comparator,!0)}}class xi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=s??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ue(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pf(this.data.getIterator())}getIteratorFrom(e){return new pf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class pf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Xe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Xl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yl(t){const e=t.mapValue.fields.__previous_value__;return Xl(e)?Yl(e):e}function Ks(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class TA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xl(t)?4:wA(t)?9007199254740991:10:K()}function qt(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cn(s.timestampValue),a=Cn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?Eo(o)===Eo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fr(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(df(o)!==df(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!qt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function Ws(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Ur(t,e){if(t===e)return 0;const n=nr(t),r=nr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(Ks(t),Ks(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,o){const a=tr(i),c=tr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=le(a[l],c[l]);if(u!==0)return u}return le(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(be(i.latitude),be(o.latitude));return a!==0?a:le(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ur(a[l],c[l]);if(u)return u}return le(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Mi.mapValue&&o===Mi.mapValue)return 0;if(i===Mi.mapValue)return 1;if(o===Mi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=le(c[h],u[h]);if(f!==0)return f;const g=Ur(a[c[h]],l[u[h]]);if(g!==0)return g}return le(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Cn(t),r=Cn(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Br(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function mf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Zl(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ts(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(Ts(this.value))}}function Hg(t){const e=[];return Xr(t.fields,(n,r)=>{const s=new Ge([n]);if(Gi(r)){const i=Hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Tt(e)}/**
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
 */class ze{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,G.min(),G.min(),G.min(),_t.empty(),0)}static newFoundDocument(e,n,r,s){return new ze(e,1,n,G.min(),r,s,0)}static newNoDocument(e,n){return new ze(e,2,n,G.min(),G.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,G.min(),G.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Io{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Ur(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function AA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Kg{}class ke extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PA(e,n,r):n==="array-contains"?new bA(e,r):n==="in"?new kA(e,r):n==="not-in"?new DA(e,r):n==="array-contains-any"?new VA(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SA(e,r):new CA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ur(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(Ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ct extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ct(e,n)}matches(e){return zg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zg(t){return t.op==="and"}function Wg(t){return RA(t)&&zg(t)}function RA(t){for(const e of t.filters)if(e instanceof Ct)return!1;return!0}function Bc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Br(t.value);if(Wg(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function Gg(t,e){return t instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)}(t,e):t instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Gg(o,s.filters[a]),!0):!1}(t,e):void K()}function Qg(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Br(n.value)}`}(t):t instanceof Ct?function(n){return n.op.toString()+" {"+n.getFilters().map(Qg).join(" ,")+"}"}(t):"Filter"}class PA extends ke{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class SA extends ke{constructor(e,n){super(e,"in",n),this.keys=Jg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CA extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Jg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class bA extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zl(n)&&Ws(n.arrayValue,this.value)}}class kA extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class DA extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class VA extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
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
 */class NA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function If(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NA(t,e,n,r,s,i,o)}function eu(t){const e=J(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Br(r)).join(",")),e.he=n}return e.he}function tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function $c(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Yr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function OA(t,e,n,r,s,i,o,a){return new Yr(t,e,n,r,s,i,o,a)}function ha(t){return new Yr(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Xg(t){return t.collectionGroup!==null}function Pr(t){const e=J(t);if(e.Pe===null){e.Pe=[];const n=fa(e),r=nu(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Rr(n)),e.Pe.push(new Rr(Ge.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Rr(Ge.keyField(),i))}}}return e.Pe}function nn(t){const e=J(t);if(!e.Ie)if(e.limitType==="F")e.Ie=If(e.path,e.collectionGroup,Pr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Pr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rr(i.field,o))}const r=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e.Ie=If(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function jc(t,e){e.getFirstInequalityField(),fa(t);const n=t.filters.concat([e]);return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qc(t,e,n){return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return tu(nn(t),nn(e))&&t.limitType===e.limitType}function Yg(t){return`${eu(nn(t))}|lt:${t.limitType}`}function Hc(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qg(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Br(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=vf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Pr(r),s)||r.endAt&&!function(o,a,c){const l=vf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Pr(r),s))}(t,e)}function xA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zg(t){return(e,n)=>{let r=!1;for(const s of Pr(t)){const i=MA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MA(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ur(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jg(this.inner)}size(){return this.innerSize}}/**
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
 */const LA=new we($.comparator);function rn(){return LA}const em=new we($.comparator);function hs(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function tm(t){let e=em;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hn(){return ws()}function nm(){return ws()}function ws(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const FA=new we($.comparator),UA=new Xe($.comparator);function te(...t){let e=UA;for(const n of t)e=e.add(n);return e}const BA=new Xe(le);function $A(){return BA}/**
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
 */function rm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(e)?"-0":e}}function sm(t){return{integerValue:""+t}}function jA(t,e){return EA(e)?sm(e):rm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ga{constructor(){this._=void 0}}function qA(t,e,n){return t instanceof Gs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xl(i)&&(i=Yl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Qs?om(t,e):t instanceof Js?am(t,e):function(s,i){const o=im(s,i),a=wf(o)+wf(s.Te);return Uc(o)&&Uc(s.Te)?sm(a):rm(s.serializer,a)}(t,e)}function HA(t,e,n){return t instanceof Qs?om(t,e):t instanceof Js?am(t,e):n}function im(t,e){return t instanceof To?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Gs extends ga{}class Qs extends ga{constructor(e){super(),this.elements=e}}function om(t,e){const n=cm(e);for(const r of t.elements)n.some(s=>qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Js extends ga{constructor(e){super(),this.elements=e}}function am(t,e){let n=cm(e);for(const r of t.elements)n=n.filter(s=>!qt(s,r));return{arrayValue:{values:n}}}class To extends ga{constructor(e,n){super(),this.serializer=e,this.Te=n}}function wf(t){return be(t.integerValue||t.doubleValue)}function cm(t){return Zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class KA{constructor(e,n){this.field=e,this.transform=n}}function zA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Qs&&s instanceof Qs||r instanceof Js&&s instanceof Js?Fr(r.elements,s.elements,qt):r instanceof To&&s instanceof To?qt(r.Te,s.Te):r instanceof Gs&&s instanceof Gs}(t.transform,e.transform)}class WA{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ru(t.key,Rt.none()):new pi(t.key,t.data,Rt.none());{const n=t.data,r=_t.empty();let s=new Xe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new or(t.key,r,new Tt(s.toArray()),Rt.none())}}function GA(t,e,n){t instanceof pi?function(s,i,o){const a=s.value.clone(),c=Rf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,o){if(!Qi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Rf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(um(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function As(t,e,n,r){return t instanceof pi?function(i,o,a,c){if(!Qi(i.precondition,o))return a;const l=i.value.clone(),u=Pf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(i,o,a,c){if(!Qi(i.precondition,o))return a;const l=Pf(i.fieldTransforms,c,o),u=o.data;return u.setAll(um(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Qi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=im(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,o)=>zA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pi extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function um(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rf(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,HA(o,a,n[s]))}return r}function Pf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,qA(i,o,e))}return r}class ru extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JA extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=lm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(n,r)=>Af(n,r))&&Fr(this.baseMutations,e.baseMutations,(n,r)=>Af(n,r))}}class su{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return FA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new su(e,n,r,s)}}/**
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
 */class YA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ZA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,se;function e0(t){switch(t){default:return K();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function hm(t){if(t===void 0)return tn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ce.OK:return E.OK;case Ce.CANCELLED:return E.CANCELLED;case Ce.UNKNOWN:return E.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return E.INTERNAL;case Ce.UNAVAILABLE:return E.UNAVAILABLE;case Ce.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ce.NOT_FOUND:return E.NOT_FOUND;case Ce.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ce.ABORTED:return E.ABORTED;case Ce.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ce.DATA_LOSS:return E.DATA_LOSS;default:return K()}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class iu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Li}static getOrCreateInstance(){return Li===null&&(Li=new iu),Li}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Li=null;/**
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
 */function t0(){return new TextEncoder}/**
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
 */const n0=new Ar([4294967295,4294967295],0);function Sf(t){const e=t0().encode(t),n=new iA;return n.update(e),new Uint8Array(n.digest())}function Cf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class ou{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ar.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(n0)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ou(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(G.min(),s,new we(le),rn(),te())}}class gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gi(r,n,te(),te(),te())}}/**
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
 */class Ji{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class fm{constructor(e,n){this.targetId=e,this.pe=n}}class dm{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bf{constructor(){this.ye=0,this.we=Df(),this.Se=Ze.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=te(),n=te(),r=te();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new gi(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Df()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class r0{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=rn(),this.$e=kf(),this.Ue=new we(le)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if($c(a))if(i===0){const c=new $(a.path);this.ze(s,c,ze.newNoDocument(c,G.min()))}else Te(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=iu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,g,y){var T,w,S,V,U,O;const Y={localCacheCount:g,existenceFilterCount:y.count},ne=y.unchangedNames;return ne&&(Y.bloomFilter={applied:h===0,hashCount:(T=ne==null?void 0:ne.hashCount)!==null&&T!==void 0?T:0,bitmapLength:(V=(S=(w=ne==null?void 0:ne.bits)===null||w===void 0?void 0:w.bitmap)===null||S===void 0?void 0:S.length)!==null&&V!==void 0?V:0,padding:(O=(U=ne==null?void 0:ne.bits)===null||U===void 0?void 0:U.padding)!==null&&O!==void 0?O:0},f&&(Y.bloomFilter.mightContain=f)),Y}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=tr(i).toUint8Array()}catch(h){if(h instanceof qg)return Lr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new ou(c,o,a)}catch(h){return Lr(h instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&$c(a.target)){const c=new $(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,ze.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=te();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.Ue,this.Ke,r);return this.Ke=rn(),this.$e=kf(),this.Ue=new we(le),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new bf,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Xe(le),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new bf),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function kf(){return new we($.comparator)}function Df(){return new we($.comparator)}const s0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),i0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),o0=(()=>({and:"AND",or:"OR"}))();class a0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kc(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c0(t,e){return wo(t,e.toTimestamp())}function Ut(t){return Te(!!t),G.fromTimestamp(function(n){const r=Cn(n);return new Ve(r.seconds,r.nanos)}(t))}function au(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function gm(t){const e=Ie.fromString(t);return Te(vm(e)),e}function zc(t,e){return au(t.databaseId,e.path)}function Xa(t,e){const n=gm(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(mm(n))}function Wc(t,e){return au(t.databaseId,e)}function l0(t){const e=gm(t);return e.length===4?Ie.emptyPath():mm(e)}function Gc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mm(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vf(t,e,n){return{name:zc(t,e),fields:n.value.mapValue.fields}}function u0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:hm(l.code);return new x(u,l.message||"")}(o);n=new dm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xa(t,r.document.name),i=Ut(r.document.updateTime),o=r.document.createTime?Ut(r.document.createTime):G.min(),a=new _t({mapValue:{fields:r.document.fields}}),c=ze.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ji(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xa(t,r.document),i=r.readTime?Ut(r.readTime):G.min(),o=ze.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xa(t,r.document),i=r.removedTargetIds||[];n=new Ji([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ZA(s,i),a=r.targetId;n=new fm(a,o)}}return n}function h0(t,e){let n;if(e instanceof pi)n={update:Vf(t,e.key,e.value)};else if(e instanceof ru)n={delete:zc(t,e.key)};else if(e instanceof or)n={update:Vf(t,e.key,e.data),updateMask:E0(e.fieldMask)};else{if(!(e instanceof JA))return K();n={verify:zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof To)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:c0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function f0(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ut(s.updateTime):Ut(i);return o.isEqual(G.min())&&(o=Ut(i)),new WA(o,s.transformResults||[])}(n,e))):[]}function d0(t,e){return{documents:[Wc(t,e.path)]}}function p0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return ym(Ct.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:gr(h.field),direction:_0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Kc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function g0(t){let e=l0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=_m(h);return f instanceof Ct&&Wg(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Rr(mr(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ua(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new Io(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new Io(g,f)}(n.endAt)),OA(e,s,o,i,a,"F",c,l)}function m0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _m(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mr(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(n.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ct.create(n.compositeFilter.filters.map(r=>_m(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function _0(t){return s0[t]}function y0(t){return i0[t]}function v0(t){return o0[t]}function gr(t){return{fieldPath:t.canonicalString()}}function mr(t){return Ge.fromServerFormat(t.fieldPath)}function ym(t){return t instanceof ke?function(n){if(n.op==="=="){if(yf(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NAN"}};if(_f(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yf(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NAN"}};if(_f(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(n.field),op:y0(n.op),value:n.value}}}(t):t instanceof Ct?function(n){const r=n.getFilters().map(s=>ym(s));return r.length===1?r[0]:{compositeFilter:{op:v0(n.op),filters:r}}}(t):K()}function E0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yn{constructor(e,n,r,s,i=G.min(),o=G.min(),a=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class I0{constructor(e){this.ct=e}}function T0(t){const e=g0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
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
 */class w0{constructor(){this.sn=new A0}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Sn.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class A0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Ie.comparator)).toArray()}}/**
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
 */class $r{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new $r(0)}static On(){return new $r(-1)}}/**
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
 */class R0{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class P0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class S0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&As(r.mutation,s,Tt.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Hn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=rn();const o=ws(),a=function(){return ws()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof or)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),As(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new P0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ws();let s=new we((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Tt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=nm();u.forEach(f=>{if(!i.has(f)){const g=lm(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(Hn());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:tm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let s=hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=hs();return this.indexManager.getCollectionParents(e,s).next(o=>P.forEach(o,a=>{const c=function(u,h){return new Yr(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ze.newInvalidDocument(l)))});let o=hs();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&As(l.mutation,c,Tt.empty(),Ve.now()),pa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class C0{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:T0(s.bundledQuery),readTime:Ut(s.readTime)}}(n)),P.resolve()}}/**
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
 */class b0{constructor(){this.overlays=new we($.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hn();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=Hn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Hn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return P.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YA(n,r));let i=this.cr.get(n);i===void 0&&(i=te(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class cu{constructor(){this.lr=new Xe(Oe.hr),this.Pr=new Xe(Oe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Oe(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new $(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new $(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=te();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return $.comparator(e.key,n.key)||le(e.mr,n.mr)}static Ir(e,n){return le(e.mr,n.mr)||$.comparator(e.key,n.key)}}/**
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
 */class k0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Xe(Oe.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(le);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),P.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new $(i),0);let a=new Xe(le);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return P.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Oe(n,0),s=this.pr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class D0{constructor(e){this.Dr=e,this.docs=function(){return new we($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ze.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=rn();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||_A(mA(u),r)<=0||(s.has(u.key)||pa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new V0(this)}getSize(e){return P.resolve(this.size)}}class V0 extends R0{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class N0{constructor(e){this.persistence=e,this.Cr=new Zr(n=>eu(n),tu),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new cu,this.targetCount=0,this.Or=$r.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new $r(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
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
 */class O0{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Jl(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new N0(this),this.indexManager=new w0,this.remoteDocumentCache=function(s){return new D0(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new I0(n),this.Qr=new C0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new b0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new k0(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new x0(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return P.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class x0 extends vA{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Wr=new cu,this.Gr=null}static zr(e){return new lu(e)}get jr(){if(this.Gr)return this.Gr;throw K()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,r=>{const s=$.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,n.fromCache,r,s)}}/**
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
 */class M0{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(Tf(n))return P.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qc(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,qc(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return Tf(n)||s.isEqual(G.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(ff()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hc(n)),this.ji(e,o,n,gA(s,-1)))})}Gi(e,n){let r=new Xe(Zg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return ff()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Hc(n)),this.Ki.getDocumentsMatchingQuery(e,n,Sn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class L0{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(le),this.Yi=new Zr(i=>eu(i),tu),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new S0(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function F0(t,e,n,r){return new L0(t,e,n,r)}async function Em(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function U0(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let g=P.resolve();return f.forEach(y=>{g=g.next(()=>u.getEntry(c,y)).next(T=>{const w=l.docVersions.get(y);Te(w!==null),T.version.compareTo(w)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Im(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function B0(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ze.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(T,w,S){return T.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,u)&&a.push(n.kr.updateTargetData(i,g))});let c=rn(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($0(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(G.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function $0(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function j0(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function q0(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Qc(t,e,n){const r=J(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!di(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Nf(t,e,n){const r=J(t);let s=G.min(),i=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=J(c),f=h.Yi.get(u);return f!==void 0?P.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:G.min(),n?i:te())).next(a=>(H0(r,xA(e),a),{documents:a,ss:i})))}function H0(t,e,n){let r=t.Zi.get(e)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class Of{constructor(){this.activeTargetIds=$A()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K0{constructor(){this.Hs=new Of,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z0{Ys(e){}shutdown(){}}/**
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
 */class xf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fi=null;function Ya(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
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
 */const W0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class G0{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const He="WebChannelConnection";class Q0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=Ya(),c=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Lr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=W0[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=Ya();return new Promise((o,a)=>{const c=new sA;c.setWithCredentials(!0),c.listenOnce(tA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ja.NO_ERROR:const u=c.getResponseJson();F(He,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ja.TIMEOUT:F(He,`RPC '${e}' ${i} timed out`),a(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case Ja.HTTP_ERROR:const h=c.getStatus();if(F(He,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(S)>=0?S:E.UNKNOWN}(g.status);a(new x(y,g.message))}else a(new x(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new x(E.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(He,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);F(He,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=Ya(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zw(),a=eA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new rA({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");F(He,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new G0({so:w=>{g?F(He,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(F(He,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),F(He,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},oo:()=>h.close()}),T=(w,S,V)=>{w.listen(S,U=>{try{V(U)}catch(O){setTimeout(()=>{throw O},0)}})};return T(h,Oi.EventType.OPEN,()=>{g||F(He,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Oi.EventType.CLOSE,()=>{g||(g=!0,F(He,`RPC '${e}' stream ${s} transport closed`),y.Po())}),T(h,Oi.EventType.ERROR,w=>{g||(g=!0,Lr(He,`RPC '${e}' stream ${s} transport errored:`,w),y.Po(new x(E.UNAVAILABLE,"The operation could not be completed")))}),T(h,Oi.EventType.MESSAGE,w=>{var S;if(!g){const V=w.data[0];Te(!!V);const U=V,O=U.error||((S=U[0])===null||S===void 0?void 0:S.error);if(O){F(He,`RPC '${e}' stream ${s} received error:`,O);const Y=O.status;let ne=function(Z){const me=Ce[Z];if(me!==void 0)return hm(me)}(Y),Ae=O.message;ne===void 0&&(ne=E.INTERNAL,Ae="Unknown error status: "+Y+" with message "+O.message),g=!0,y.Po(new x(ne,Ae)),h.close()}else F(He,`RPC '${e}' stream ${s} received:`,V),y.Io(V)}}),T(a,nA.STAT_EVENT,w=>{w.stat===uf.PROXY?F(He,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===uf.NOPROXY&&F(He,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Za(){return typeof document<"u"?document:null}/**
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
 */function ya(t){return new a0(t,!0)}/**
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
 */class Tm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class wm{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Tm(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J0 extends wm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=u0(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Ut(o.readTime):G.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=$c(c)?{documents:d0(i,c)}:{query:p0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pm(i,o.resumeToken);const l=Kc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=wo(i,o.snapshotVersion.toTimestamp());const l=Kc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=m0(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.Ho(n)}}class X0 extends wm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=f0(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.u_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Gc(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>h0(this.serializer,r))};this.Ho(n)}}/**
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
 */class Y0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class Z0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(tn(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class eR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ar(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.y_.add(4),await mi(l),l.b_.set("Unknown"),l.y_.delete(4),await va(l)}(this))})}),this.b_=new Z0(r,s)}}async function va(t){if(ar(t))for(const e of t.w_)await e(!0)}async function mi(t){for(const e of t.w_)await e(!1)}function Am(t,e){const n=J(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),du(n)?fu(n):es(n).Uo()&&hu(n,e))}function Rm(t,e){const n=J(t),r=es(n);n.p_.delete(e),r.Uo()&&Pm(n,e),n.p_.size===0&&(r.Uo()?r.zo():ar(n)&&n.b_.set("Unknown"))}function hu(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}es(t).i_(e)}function Pm(t,e){t.D_.Be(e),es(t).s_(e)}function fu(t){t.D_=new r0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),es(t).start(),t.b_.A_()}function du(t){return ar(t)&&!es(t).$o()&&t.p_.size>0}function ar(t){return J(t).y_.size===0}function Sm(t){t.D_=void 0}async function tR(t){t.p_.forEach((e,n)=>{hu(t,e)})}async function nR(t,e){Sm(t),du(t)?(t.b_.m_(e),fu(t)):t.b_.set("Unknown")}async function rR(t,e,n){if(t.b_.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(t,r)}else if(e instanceof Ji?t.D_.We(e):e instanceof fm?t.D_.Ze(e):t.D_.je(e),!n.isEqual(G.min()))try{const r=await Im(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(Ze.EMPTY_BYTE_STRING,u.snapshotVersion)),Pm(i,c);const h=new yn(u.target,c,l,u.sequenceNumber);hu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Ao(t,r)}}async function Ao(t,e,n){if(!di(e))throw e;t.y_.add(1),await mi(t),t.b_.set("Offline"),n||(n=()=>Im(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await va(t)})}function Cm(t,e){return e().catch(n=>Ao(t,n,e))}async function Ea(t){const e=J(t),n=bn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;sR(e);)try{const s=await j0(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,iR(e,s)}catch(s){await Ao(e,s)}bm(e)&&km(e)}function sR(t){return ar(t)&&t.g_.length<10}function iR(t,e){t.g_.push(e);const n=bn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function bm(t){return ar(t)&&!bn(t).$o()&&t.g_.length>0}function km(t){bn(t).start()}async function oR(t){bn(t).l_()}async function aR(t){const e=bn(t);for(const n of t.g_)e.a_(n.mutations)}async function cR(t,e,n){const r=t.g_.shift(),s=su.from(r,e,n);await Cm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function lR(t,e){e&&bn(t).__&&await async function(r,s){if(function(o){return e0(o)&&o!==E.ABORTED}(s.code)){const i=r.g_.shift();bn(r).Go(),await Cm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),bm(t)&&km(t)}async function Mf(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ar(n);n.y_.add(3),await mi(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await va(n)}async function uR(t,e){const n=J(t);e?(n.y_.delete(2),await va(n)):e||(n.y_.add(2),await mi(n),n.b_.set("Unknown"))}function es(t){return t.v_||(t.v_=function(n,r,s){const i=J(n);return i.P_(),new J0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:tR.bind(null,t),uo:nR.bind(null,t),r_:rR.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),du(t)?fu(t):t.b_.set("Unknown")):(await t.v_.stop(),Sm(t))})),t.v_}function bn(t){return t.C_||(t.C_=function(n,r,s){const i=J(n);return i.P_(),new X0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:oR.bind(null,t),uo:lR.bind(null,t),c_:aR.bind(null,t),u_:cR.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ea(t)):(await t.C_.stop(),t.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class pu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new pu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(t,e){if(tn("AsyncQueue",`${e}: ${t}`),di(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=hs(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Lf{constructor(){this.F_=new we($.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):K():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class jr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jr(e,n,Sr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class hR{constructor(){this.x_=void 0,this.listeners=[]}}class fR{constructor(){this.queries=new Zr(e=>Yg(e),da),this.onlineState="Unknown",this.O_=new Set}}async function mu(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new hR),s)try{i.x_=await n.onListen(r)}catch(o){const a=gu(o,`Initialization of query '${Hc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&yu(n)}async function _u(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function dR(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&yu(n)}function pR(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function yu(t){t.O_.forEach(e=>{e.next()})}class vu{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Dm{constructor(e){this.key=e}}class Vm{constructor(e){this.key=e}}class gR{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=te(),this.mutatedKeys=te(),this.na=Zg(e),this.ra=new Sr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Lf,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=pa(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;f&&g?f.data.isEqual(g.data)?y!==T&&(r.track({type:3,doc:g}),w=!0):this._a(f,g)||(r.track({type:2,doc:g}),w=!0,(c&&this.na(g,c)>0||l&&this.na(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),w=!0):f&&!g&&(r.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(f,g){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(f)-y(g)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new jr(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Lf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=te(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Vm(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Dm(r))}),n}ha(e){this.X_=e.ss,this.ta=te();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return jr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class mR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _R{constructor(e){this.key=e,this.Ia=!1}}class yR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Zr(a=>Yg(a),da),this.da=new Map,this.Aa=new Set,this.Ra=new we($.comparator),this.Va=new Map,this.ma=new cu,this.fa={},this.ga=new Map,this.pa=$r.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function vR(t,e){const n=bR(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await q0(n.localStore,nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await ER(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Am(n.remoteStore,o)}return s}async function ER(t,e,n,r,s){t.wa=(h,f,g)=>async function(T,w,S,V){let U=w.view.sa(S);U.zi&&(U=await Nf(T.localStore,w.query,!1).then(({documents:ne})=>w.view.sa(ne,U)));const O=V&&V.targetChanges.get(w.targetId),Y=w.view.applyChanges(U,T.isPrimaryClient,O);return Uf(T,w.targetId,Y.ca),Y.snapshot}(t,h,f,g);const i=await Nf(t.localStore,e,!0),o=new gR(e,i.ss),a=o.sa(i.documents),c=gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Uf(t,n,l.ca);const u=new mR(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function IR(t,e){const n=J(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!da(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Rm(n.remoteStore,r.targetId),Jc(n,r.targetId)}).catch(fi)):(Jc(n,r.targetId),await Qc(n.localStore,r.targetId,!0))}async function TR(t,e,n){const r=kR(t);try{const s=await function(o,a){const c=J(o),l=Ve.now(),u=a.reduce((g,y)=>g.add(y.key),te());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=rn(),T=te();return c.Xi.getEntries(g,u).next(w=>{y=w,y.forEach((S,V)=>{V.isValidDocument()||(T=T.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(w=>{h=w;const S=[];for(const V of a){const U=QA(V,h.get(V.key).overlayedDocument);U!=null&&S.push(new or(V.key,U,Hg(U.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,S,a)}).next(w=>{f=w;const S=w.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(g,w.batchId,S)})}).then(()=>({batchId:f.batchId,changes:tm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new we(le)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await _i(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=gu(s,"Failed to persist write");n.reject(i)}}async function Nm(t,e){const n=J(t);try{const r=await B0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Te(o.Ia):s.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await _i(n,r,e)}catch(r){await fi(r)}}function Ff(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&yu(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new we($.comparator);o=o.insert(i,ze.newNoDocument(i,G.min()));const a=te().add(i),c=new _a(G.min(),new Map,new we(le),o,a);await Nm(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),Eu(r)}else await Qc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(fi)}async function AR(t,e){const n=J(t),r=e.batch.batchId;try{const s=await U0(n.localStore,e);xm(n,r,null),Om(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _i(n,s)}catch(s){await fi(s)}}async function RR(t,e,n){const r=J(t);try{const s=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);xm(r,e,n),Om(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _i(r,s)}catch(s){await fi(s)}}function Om(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function xm(t,e,n){const r=J(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Mm(t,r)})}function Mm(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Rm(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Eu(t))}function Uf(t,e,n){for(const r of n)r instanceof Dm?(t.ma.addReference(r.key,e),PR(t,r)):r instanceof Vm?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Mm(t,r.key)):K()}function PR(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Eu(t))}function Eu(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new $(Ie.fromString(e)),r=t.pa.next();t.Va.set(r,new _R(n)),t.Ra=t.Ra.insert(n,r),Am(t.remoteStore,new yn(nn(ha(n.path)),r,"TargetPurposeLimboResolution",Jl.ae))}}async function _i(t,e,n){const r=J(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=uu.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,f=>P.forEach(f.Li,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>P.forEach(f.ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!di(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.Ji.get(f),y=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(f,T)}}}(r.localStore,i))}async function SR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Em(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new x(E.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _i(n,r.ts)}}function CR(t,e){const n=J(t),r=n.Va.get(e);if(r&&r.Ia)return te().add(r.key);{let s=te();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function bR(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wR.bind(null,e),e.Ta.r_=dR.bind(null,e.eventManager),e.Ta.Sa=pR.bind(null,e.eventManager),e}function kR(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RR.bind(null,e),e}class Bf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return F0(this.persistence,new M0,e.initialUser,this.serializer)}createPersistence(e){return new O0(lu.zr,this.serializer)}createSharedClientState(e){return new K0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await uR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fR}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new Q0(i)}(e.databaseInfo);return function(i,o,a,c){return new Y0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new eR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ff(this.syncEngine,n,0),function(){return xf.v()?new xf:new z0}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new yR(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await mi(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class VR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ke.UNAUTHENTICATED,this.clientId=$g.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ec(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Em(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OR(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Mf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Mf(e.remoteStore,i)),t._onlineComponents=e}function NR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function OR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!NR(n))throw n;Lr("Error using user provided cache. Falling back to memory cache: "+n),await ec(t,new Bf)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ec(t,new Bf);return t._offlineComponents}async function Lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await $f(t,new DR))),t._onlineComponents}function xR(t){return Lm(t).then(e=>e.syncEngine)}async function Ro(t){const e=await Lm(t),n=e.eventManager;return n.onListen=vR.bind(null,e.syncEngine),n.onUnlisten=IR.bind(null,e.syncEngine),n}function MR(t,e,n={}){const r=new Yt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Iu({next:f=>{o.enqueueAndForget(()=>_u(i,h));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new x(E.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new x(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new vu(ha(a.path),u,{includeMetadataChanges:!0,W_:!0});return mu(i,h)}(await Ro(t),t.asyncQueue,e,n,r)),r.promise}function LR(t,e,n={}){const r=new Yt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Iu({next:f=>{o.enqueueAndForget(()=>_u(i,h)),f.fromCache&&c.source==="server"?l.reject(new x(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new vu(a,u,{includeMetadataChanges:!0,W_:!0});return mu(i,h)}(await Ro(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jf=new Map;/**
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
 */function Um(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FR(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qf(t){if(!$.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hf(t){if($.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ta{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oA;switch(r.type){case"firstParty":return new uA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jf.get(n);r&&(F("ComponentProvider","Removing Datastore"),jf.delete(n),r.terminate())}(this),Promise.resolve()}}function UR(t,e,n,r={}){var s;const i=(t=yt(t,Ta))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ke.MOCK_USER;else{a=OI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ke(l)}t._authCredentials=new aA(new Bg(a,c))}}/**
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
 */class Nn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Rn extends Nn{constructor(e,n,r){super(e,n,ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new $(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function FC(t,e,...n){if(t=rt(t),Um("collection","path",e),t instanceof Ta){const r=Ie.fromString(e,...n);return Hf(r),new Rn(t,null,r)}{if(!(t instanceof nt||t instanceof Rn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Hf(r),new Rn(t.firestore,null,r)}}function _r(t,e,...n){if(t=rt(t),arguments.length===1&&(e=$g.V()),Um("doc","path",e),t instanceof Ta){const r=Ie.fromString(e,...n);return qf(r),new nt(t,null,new $(r))}{if(!(t instanceof nt||t instanceof Rn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return qf(r),new nt(t.firestore,t instanceof Rn?t.converter:null,new $(r))}}/**
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
 */class BR{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Tm(this,"async_queue_retry"),this.Xa=()=>{const n=Za();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Za();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Za();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Yt;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!di(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=pu.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&K()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function zf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class kn extends Ta{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new BR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bm(this),this._firestoreClient.terminate()}}function $R(t,e){const n=typeof t=="object"?t:xp(),r=typeof t=="string"?t:e||"(default)",s=Pl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VI("firestore");i&&UR(s,...i)}return s}function wa(t){return t._firestoreClient||Bm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bm(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new TA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Fm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new VR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(Ze.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wu{constructor(e){this._methodName=e}}/**
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
 */class Au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const jR=/^__.*__$/;class qR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new pi(e,this.data,n,this.fieldTransforms)}}function $m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ru{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Po(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if($m(this.uu)&&jR.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class HR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}Ru(e,n,r,s=!1){return new Ru({uu:e,methodName:n,Au:r,path:Ge.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pu(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new HR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jm(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);Km("Data must be an object, but it was:",o,r);const a=qm(r,o);let c,l;if(i.merge)c=new Tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=zR(e,h,n);if(!o.contains(f))throw new x(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);GR(u,f)||u.push(f)}c=new Tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new qR(new _t(a),c,l)}class Su extends wu{_toFieldTransform(e){return new KA(e.path,new Gs)}isEqual(e){return e instanceof Su}}function KR(t,e,n,r=!1){return Cu(n,t.Ru(r?4:3,e))}function Cu(t,e){if(Hm(t=rt(t)))return Km("Unsupported field value:",e,t),qm(t,e);if(t instanceof wu)return function(r,s){if(!$m(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Cu(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:wo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(s.serializer,i)}}if(r instanceof Au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:pm(s.serializer,r._byteString)};if(r instanceof nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:au(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${Ia(r)}`)}(t,e)}function qm(t,e){const n={};return jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,s)=>{const i=Cu(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Au||t instanceof qr||t instanceof nt||t instanceof wu)}function Km(t,e,n){if(!Hm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ia(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function zR(t,e,n){if((e=rt(e))instanceof Tu)return e._internalPath;if(typeof e=="string")return zm(t,e);throw Po("Field path arguments must be of type string or ",t,!1,void 0,n)}const WR=new RegExp("[~\\*/\\[\\]]");function zm(t,e,n){if(e.search(WR)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tu(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Po(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(E.INVALID_ARGUMENT,a+t+c)}function GR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Aa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QR extends Wm{data(){return super.data()}}function Aa(t,e){return typeof e=="string"?zm(t,e):e instanceof Tu?e._internalPath:e._delegate._internalPath}/**
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
 */function Gm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bu{}class Qm extends bu{}function UC(t,e,...n){let r=[];e instanceof bu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ku).length,a=i.filter(c=>c instanceof Ra).length;if(o>1||o>0&&a>0)throw new x(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ra extends Qm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ra(e,n,r)}_apply(e){const n=this._parse(e);return Jm(e._query,n),new Nn(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=Pu(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Gf(h,u);const g=[];for(const y of h)g.push(Wf(c,i,y));f={arrayValue:{values:g}}}else f=Wf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Gf(h,u),f=KR(a,o,h,u==="in"||u==="not-in");return ke.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function BC(t,e,n){const r=e,s=Aa("where",t);return Ra._create(s,r,n)}class ku extends bu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ku(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ct.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Jm(o,c),o=jc(o,c)}(e._query,n),new Nn(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Du extends Qm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Du(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Rr(i,o);return function(l,u){if(nu(l)===null){const h=fa(l);h!==null&&Xm(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Yr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function $C(t,e="asc"){const n=e,r=Aa("orderBy",t);return Du._create(r,n)}function Wf(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new x(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xg(e)&&n.indexOf("/")!==-1)throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!$.isDocumentKey(r))throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mf(t,new $(r))}if(n instanceof nt)return mf(t,n._key);throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function Gf(t,e){if(!Array.isArray(t)||t.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jm(t,e){if(e.isInequality()){const r=fa(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new x(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=nu(t);i!==null&&Xm(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Xm(t,e,n){if(!n.isEqual(e))throw new x(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class JR{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Au(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Te(vm(r));const s=new zs(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ym(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zm extends Wm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xi extends Zm{data(e={}){return super.data(e)}}class e_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xi(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Xi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ds(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Xi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ds(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:XR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function YR(t){t=yt(t,nt);const e=yt(t.firestore,kn);return MR(wa(e),t._key).then(n=>t_(e,t,n))}class Vu extends JR{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function jC(t){t=yt(t,Nn);const e=yt(t.firestore,kn),n=wa(e),r=new Vu(e);return Gm(t._query),LR(n,t._query).then(s=>new e_(e,r,t,s))}function Ui(t,e,n){t=yt(t,nt);const r=yt(t.firestore,kn),s=Ym(t.converter,e,n);return Nu(r,[jm(Pu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Rt.none())])}function qC(t){return Nu(yt(t.firestore,kn),[new ru(t._key,Rt.none())])}function HC(t,e){const n=yt(t.firestore,kn),r=_r(t),s=Ym(t.converter,e);return Nu(n,[jm(Pu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Rt.exists(!1))]).then(()=>r)}function KC(t,...e){var n,r,s;t=rt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(zf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof nt)l=yt(t.firestore,kn),u=ha(t._key.path),c={next:h=>{e[o]&&e[o](t_(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yt(t,Nn);l=yt(h.firestore,kn),u=h._query;const f=new Vu(l);c={next:g=>{e[o]&&e[o](new e_(l,f,h,g))},error:e[o+1],complete:e[o+2]},Gm(t._query)}return function(f,g,y,T){const w=new Iu(T),S=new vu(g,w,y);return f.asyncQueue.enqueueAndForget(async()=>mu(await Ro(f),S)),()=>{w.Ca(),f.asyncQueue.enqueueAndForget(async()=>_u(await Ro(f),S))}}(wa(l),u,a,c)}function Nu(t,e){return function(r,s){const i=new Yt;return r.asyncQueue.enqueueAndForget(async()=>TR(await xR(r),s,i)),i.promise}(wa(t),e)}function t_(t,e,n){const r=n.docs.get(e._key),s=new Vu(t);return new Zm(t,s,e._key,r,new ds(n.hasPendingWrites,n.fromCache),e.converter)}function ZR(){return new Su("serverTimestamp")}(function(e,n=!0){(function(s){Jr=s})(Wr),xr(new Yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new kn(new cA(r.getProvider("auth-internal")),new fA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zs(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),An(hf,"4.1.0",e),An(hf,"4.1.0","esm2017")})();const Xc=AI("main",{state:()=>({user:null,username:null,userLastLogin:null,firestore:$R()}),actions:{setUser(t){var e;this.user=t,t!=null?this.setUsername((e=t.displayName)==null?void 0:e.replace(/\s/g,"")):this.username==""},async setUsername(t,e=!1,n=[],r=[]){var s,i,o;if(e)Ui(_r(this.firestore,"userProfiles",(s=this.user)==null?void 0:s.uid),{username:t},{merge:!0}),n.forEach(a=>{Ui(_r(this.firestore,"posts",a),{authorUsername:t},{merge:!0})}),r.forEach(a=>{Ui(_r(this.firestore,"comments",a),{commenterUsername:t},{merge:!0})}),this.username=t;else{const a=await YR(_r(this.firestore,"userProfiles",(i=this.user)==null?void 0:i.uid));if(a.exists()){const c=a.data();this.username=c.username}else{this.username=t;const c={username:t,createdAt:ZR()};Ui(_r(this.firestore,"userProfiles",(o=this.user)==null?void 0:o.uid),c)}}},generateRandomString(t){const e="0123456789";let n="";for(let r=0;r<t;r++){const s=Math.floor(Math.random()*e.length);n+=e[s]}return n}}});function Ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function n_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eP=n_,r_=new ti("auth","Firebase",n_());/**
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
 */const So=new Al("@firebase/auth");function tP(t,...e){So.logLevel<=ae.WARN&&So.warn(`Auth (${Wr}): ${t}`,...e)}function Yi(t,...e){So.logLevel<=ae.ERROR&&So.error(`Auth (${Wr}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw xu(t,...e)}function Bt(t,...e){return xu(t,...e)}function s_(t,e,n){const r=Object.assign(Object.assign({},eP()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function nP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),s_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r_.create(t,...e)}function Q(t,e,...n){if(!t)throw xu(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function sn(t,e){t||Jt(e)}/**
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
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rP(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rP()||MI()||"connection"in navigator)?navigator.onLine:!0}function iP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||LI()}get(){return sP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mu(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class i_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aP=new yi(3e4,6e4);function o_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,s={}){return a_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),i_.fetch()(c_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function a_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oP),e);try{const s=new lP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw s_(t,u,l);Ht(t,u)}}catch(s){if(s instanceof an)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function cP(t,e,n,r,s={}){const i=await vi(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function c_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Mu(t.config,s):`${t.config.apiScheme}://${s}`}class lP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),aP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function uP(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function hP(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fP(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Lu(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rs(tc(s.auth_time)),issuedAtTime:Rs(tc(s.iat)),expirationTime:Rs(tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function Lu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cp(n);return s?JSON.parse(s):(Yi("Failed to decode base64 JWT payload"),null)}catch(s){return Yi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dP(t){const e=Lu(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&pP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class l_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xs(t,hP(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yP(i.providerUserInfo):[],a=_P(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new l_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mP(t){const e=rt(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _P(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yP(t){return t.map(e=>{var{providerId:n}=e,r=Ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vP(t,e){const n=await a_(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=c_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",i_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function hn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new l_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fP(this,e)}reload(){return mP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,uP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:O,isAnonymous:Y,providerData:ne,stsTokenManager:Ae}=n;Q(U&&Ae,e,"internal-error");const re=Ys.fromJSON(this.name,Ae);Q(typeof U=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof Y=="boolean",e,"internal-error"),hn(g,e.name),hn(y,e.name),hn(T,e.name),hn(w,e.name),hn(S,e.name),hn(V,e.name);const Z=new Jn({uid:U,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:Y,photoURL:y,phoneNumber:g,tenantId:T,stsTokenManager:re,createdAt:S,lastLoginAt:V});return ne&&Array.isArray(ne)&&(Z.providerData=ne.map(me=>Object.assign({},me))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}}/**
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
 */const Jf=new Map;function Xt(t){sn(t instanceof Function,"Expected a class definition");let e=Jf.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jf.set(t,e),e)}/**
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
 */class u_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u_.type="NONE";const Xf=u_;/**
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
 */function Zi(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Xt(Xf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Xt(Xf);const o=Zi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Jn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Cr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Cr(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g_(e))return"Blackberry";if(m_(e))return"Webos";if(Fu(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(p_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function h_(t=Ye()){return/firefox\//i.test(t)}function Fu(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(t=Ye()){return/crios\//i.test(t)}function d_(t=Ye()){return/iemobile/i.test(t)}function p_(t=Ye()){return/android/i.test(t)}function g_(t=Ye()){return/blackberry/i.test(t)}function m_(t=Ye()){return/webos/i.test(t)}function Pa(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EP(t=Ye()){var e;return Pa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IP(){return FI()&&document.documentMode===10}function __(t=Ye()){return Pa(t)||p_(t)||m_(t)||g_(t)||/windows phone/i.test(t)||d_(t)}function TP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function y_(t,e=[]){let n;switch(t){case"Browser":n=Yf(Ye());break;case"Worker":n=`${Yf(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}async function v_(t,e){return vi(t,"GET","/v2/recaptchaConfig",o_(t,e))}function Zf(t){return t!==void 0&&t.enterprise!==void 0}class E_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function wP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function I_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wP().appendChild(r)})}function AP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RP="https://www.google.com/recaptcha/enterprise.js?render=",PP="recaptcha-enterprise",SP="NO_RECAPTCHA";class CP{constructor(e){this.type=PP,this.auth=Ei(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{v_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new E_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(SP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}I_(RP+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class bP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class kP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new bP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}async initializeRecaptchaConfig(){const e=await v_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new E_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new CP(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ei(t){return rt(t)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=KI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function DP(t,e){const n=Pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function VP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NP(t,e,n){const r=Ei(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=T_(e),{host:o,port:a}=OP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xP()}function T_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OP(t){const e=T_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:td(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:td(o)}}}function td(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class w_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}/**
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
 */async function br(t,e){return cP(t,"POST","/v1/accounts:signInWithIdp",o_(t,e))}/**
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
 */const MP="http://localhost";class rr extends w_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ou(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:MP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */class Uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends Uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends Ii{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class mn extends Ii{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class _n extends Ii{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jn._fromIdTokenResponse(e,r,s),o=nd(r);return new Hr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nd(r);return new Hr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bo extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bo(e,n,r,s)}}function A_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(t,i,e,r):i})}async function LP(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function FP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Xs(t,A_(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Lu(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Hr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function UP(t,e,n=!1){const r="signIn",s=await A_(t,r,e),i=await Hr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function BP(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function $P(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function jP(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function qP(t){return rt(t).signOut()}const ko="__sak";/**
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
 */class R_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function HP(){const t=Ye();return Fu(t)||Pa(t)}const KP=1e3,zP=10;class P_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HP()&&TP(),this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const WP=P_;/**
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
 */class S_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S_.type="SESSION";const C_=S_;/**
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
 */function GP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await GP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
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
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function JP(t){$t().location.href=t}/**
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
 */function b_(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function XP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZP(){return b_()?self:null}/**
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
 */const k_="firebaseLocalStorageDb",eS=1,Do="firebaseLocalStorage",D_="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function tS(){const t=indexedDB.deleteDatabase(k_);return new Ti(t).toPromise()}function Zc(){const t=indexedDB.open(k_,eS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:D_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await tS(),e(await Zc()))})})}async function rd(t,e,n){const r=Ca(t,!0).put({[D_]:e,value:n});return new Ti(r).toPromise()}async function nS(t,e){const n=Ca(t,!1).get(e),r=await new Ti(n).toPromise();return r===void 0?null:r.value}function sd(t,e){const n=Ca(t,!0).delete(e);return new Ti(n).toPromise()}const rS=800,sS=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XP(),!this.activeServiceWorker)return;this.sender=new QP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zc();return await rd(e,ko,"1"),await sd(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const iS=V_;new yi(3e4,6e4);/**
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
 */function N_(t,e){return e?Xt(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $u extends w_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oS(t){return UP(t.auth,new $u(t),t.bypassAuthState)}function aS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),FP(n,new $u(t),t.bypassAuthState)}async function cS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),LP(n,new $u(t),t.bypassAuthState)}/**
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
 */class O_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return cS;case"reauthViaPopup":case"reauthViaRedirect":return aS;default:Ht(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lS=new yi(2e3,1e4);async function uS(t,e,n){const r=Ei(t);nP(t,e,Uu);const s=N_(r,n);return new Kn(r,"signInViaPopup",e,s).executeNotNull()}class Kn extends O_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lS.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const hS="pendingRedirect",eo=new Map;class fS extends O_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=eo.get(this.auth._key());if(!e){try{const r=await dS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}eo.set(this.auth._key(),e)}return this.bypassAuthState||eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dS(t,e){const n=mS(e),r=gS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pS(t,e){eo.set(t._key(),e)}function gS(t){return Xt(t._redirectPersistence)}function mS(t){return Zi(hS,t.config.apiKey,t.name)}async function _S(t,e,n=!1){const r=Ei(t),s=N_(r,e),o=await new fS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yS=10*60*1e3;class vS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ES(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}saveEventToCache(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}function id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ES(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x_(t);default:return!1}}/**
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
 */async function IS(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
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
 */const TS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wS=/^https?/;async function AS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IS(t);for(const n of e)try{if(RS(n))return}catch{}Ht(t,"unauthorized-domain")}function RS(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wS.test(n))return!1;if(TS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PS=new yi(3e4,6e4);function od(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var r,s,i;function o(){od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{od(),n(Bt(t,"network-request-failed"))},timeout:PS.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=AP("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},I_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw to=null,e})}let to=null;function CS(t){return to=to||SS(t),to}/**
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
 */const bS=new yi(5e3,15e3),kS="__/auth/iframe",DS="emulator/auth/iframe",VS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OS(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mu(e,DS):`https://${t.config.authDomain}/${kS}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},s=NS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ni(r).slice(1)}`}async function xS(t){const e=await CS(t),n=$t().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:OS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},bS.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LS=500,FS=600,US="_blank",BS="http://localhost";class ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(t,e,n,r=LS,s=FS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},MS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ye().toLowerCase();n&&(a=f_(l)?US:n),h_(l)&&(e=e||BS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(EP(l)&&a!=="_self")return jS(e||"",a),new ad(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new ad(h)}function jS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qS="__/auth/handler",HS="emulator/auth/handler",KS=encodeURIComponent("fac");async function cd(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:s};if(e instanceof Uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${KS}=${encodeURIComponent(c)}`:"";return`${zS(t)}?${ni(a).slice(1)}${l}`}function zS({config:t}){return t.emulator?Mu(t,HS):`https://${t.authDomain}/${qS}`}/**
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
 */const nc="webStorageSupport";class WS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C_,this._completeRedirectFn=_S,this._overrideRedirectResult=pS}async _openPopup(e,n,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cd(e,n,r,Yc(),s);return $S(e,o,Bu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cd(e,n,r,Yc(),s);return JP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xS(e),r=new vS(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||Fu()||Pa()}}const GS=WS;var ld="@firebase/auth",ud="1.1.0";/**
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
 */class QS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XS(t){xr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(t)},l=new kP(r,s,i,c);return VP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new Yn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(r=>new QS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ld,ud,JS(t)),An(ld,ud,"esm2017")}/**
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
 */const YS=5*60,ZS=Dp("authIdTokenMaxAge")||YS;let hd=null;const eC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZS)return;const s=n==null?void 0:n.token;hd!==s&&(hd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tC(t=xp()){const e=Pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DP(t,{popupRedirectResolver:GS,persistence:[iS,WP,C_]}),r=Dp("authTokenSyncURL");if(r){const i=eC(r);$P(n,i,()=>i(n.currentUser)),BP(n,o=>i(o))}const s=bp("auth");return s&&NP(n,`http://${s}`),n}XS("Browser");const nC=jo({data(){return{mainStore:Xc(),auth:tC(),provider:new Gt}},methods:{handleSignInButtonClick(){uS(this.auth,this.provider)},handleSignOutButtonClick(){qP(this.auth)}},mounted(){jP(this.auth,t=>{this.mainStore.setUser(t),this.mainStore.userLastLogin=new Date,t==null&&(this.mainStore.username="",this.$router.push({name:"posts"}))})}});const rC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sC=t=>(Uy("data-v-1db05056"),t=t(),By(),t),iC={class:"container-fluid bg-dark navbar-custom sticky-md-top py-2"},oC=sC(()=>ut("div",null,[yr(" Sign In With "),ut("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",class:"google-logo"})],-1)),aC=[oC],cC={key:1,class:"container-fluid text-center px-0"},lC={class:"row align-items-center"},uC={class:"col-xs-12 col-md-2"},hC=["src"],fC={class:"col-xs-12 col-md-2 text-break"},dC={class:"col-xs-12 col-md-2"},pC={class:"col-xs-12 col-md-2"},gC={class:"col-xs-12 col-md-2"},mC={class:"col-xs-12 col-md-2"};function _C(t,e,n,r,s,i){const o=ov("router-link");return _s(),zi("div",iC,[t.mainStore.user==null?(_s(),zi("button",{key:0,type:"button",class:"btn btn-dark",onClick:e[0]||(e[0]=a=>t.handleSignInButtonClick())},aC)):(_s(),zi("div",cC,[ut("div",lC,[ut("div",uC,[ut("img",{src:t.mainStore.user.photoURL||""},null,8,hC)]),ut("div",fC,[ut("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=a=>t.handleSignOutButtonClick())},"Sign Out")]),ut("div",dC,[De(o,{class:"btn btn-dark",to:{name:"profiles",params:{uid:t.mainStore.user.uid}}},{default:as(()=>[yr("Profile")]),_:1},8,["to"])]),ut("div",pC,[De(o,{class:"btn btn-dark",to:{name:"posts"}},{default:as(()=>[yr("Posts")]),_:1})]),ut("div",gC,[De(o,{class:"btn btn-dark",to:{name:"createPost"}},{default:as(()=>[yr("Create Post")]),_:1})]),ut("div",mC,[De(o,{class:"btn btn-dark",to:{name:"myContent"}},{default:as(()=>[yr("My Content")]),_:1})])])]))])}const yC=rC(nC,[["render",_C],["__scopeId","data-v-1db05056"]]),vC=jo({__name:"App",setup(t){return(e,n)=>(_s(),zi(Vt,null,[De(yC),De(Wn(Ip))],64))}});const EC="modulepreload",IC=function(t){return"/VuePosts/"+t},fd={},M_=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=IC(i),i in fd)return;fd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":EC,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},$i=()=>M_(()=>import("./PostsView-127cc542.js"),["assets/PostsView-127cc542.js","assets/purify.es-0c4a0514.js","assets/PostsView-b457bf5f.css"]),TC=()=>M_(()=>import("./CreatePostView-5277ebd4.js"),["assets/CreatePostView-5277ebd4.js","assets/purify.es-0c4a0514.js","assets/CreatePostView-937a3375.css"]),wC=gI({history:VE("/VuePosts/"),routes:[{path:"/",name:"posts",component:$i,props:{isPersonalPage:!1,isDetailsPage:!1,isProfilePage:!1}},{path:"/create-post",name:"createPost",component:TC,beforeEnter:(t,e)=>Xc().user!=null},{path:"/my-content",name:"myContent",component:$i,props:{isPersonalPage:!0,isDetailsPage:!1,isProfilePage:!1},beforeEnter:(t,e)=>Xc().user!=null},{path:"/posts/:documentId",name:"singlePost",component:$i,props:{isPersonalPage:!1,isDetailsPage:!0,isProfilePage:!1}},{path:"/profiles/:uid",name:"profiles",component:$i,props:{isPersonalPage:!1,isDetailsPage:!1,isProfilePage:!0}}]});var AC="firebase",RC="10.1.0";/**
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
 */An(AC,RC,"app");const PC={apiKey:"AIzaSyAUkk9hmeBrUeaYING3pE74EARmGCykHaU",authDomain:"test-628e9.firebaseapp.com",databaseURL:"https://test-628e9-default-rtdb.firebaseio.com",projectId:"test-628e9",storageBucket:"test-628e9.appspot.com",messagingSenderId:"912708423531",appId:"1:912708423531:web:6dddc325b5bf8e3041862e",measurementId:"G-6E8GTLD04S"};Op(PC);const ju=dE(vC);ju.use(wC);ju.use(yI());ju.mount("#app");export{$C as A,ov as B,VC as C,De as D,Cv as E,Vt as F,Ve as T,rC as _,ut as a,kC as b,zi as c,jo as d,By as e,HC as f,FC as g,OC as h,NC as i,KC as j,_r as k,tC as l,qC as m,il as n,_s as o,Uy as p,UC as q,bC as r,ZR as s,SC as t,Xc as u,DC as v,CC as w,BC as x,jC as y,qP as z};
