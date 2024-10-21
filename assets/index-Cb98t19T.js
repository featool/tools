var hv=Object.defineProperty;var pv=(n,e,t)=>e in n?hv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ne=(n,e,t)=>pv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},zs=[],ui=()=>{},mv=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xd=n=>n.startsWith("onUpdate:"),At=Object.assign,yd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gv=Object.prototype.hasOwnProperty,gt=(n,e)=>gv.call(n,e),Ne=Array.isArray,Hs=n=>so(n)==="[object Map]",os=n=>so(n)==="[object Set]",xf=n=>so(n)==="[object Date]",_v=n=>so(n)==="[object RegExp]",je=n=>typeof n=="function",Ct=n=>typeof n=="string",Si=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",bd=n=>(St(n)||je(n))&&je(n.then)&&je(n.catch),Jp=Object.prototype.toString,so=n=>Jp.call(n),vv=n=>so(n).slice(8,-1),Gl=n=>so(n)==="[object Object]",Md=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vs=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},xv=/-(\w)/g,nn=Wl(n=>n.replace(xv,(e,t)=>t?t.toUpperCase():"")),yv=/\B([A-Z])/g,Un=Wl(n=>n.replace(yv,"-$1").toLowerCase()),na=Wl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gs=Wl(n=>n?`on${na(n)}`:""),wn=(n,e)=>!Object.is(n,e),Ws=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ll=n=>{const e=parseFloat(n);return isNaN(e)?n:e},cl=n=>{const e=Ct(n)?Number(n):NaN;return isNaN(e)?n:e};let yf;const em=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),bv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Mv=Vl(bv);function oo(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ct(i)?Tv(i):oo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(n)||St(n))return n}const Sv=/;(?![^(]*\))/g,Ev=/:([^]+)/,wv=/\/\*[^]*?\*\//g;function Tv(n){const e={};return n.replace(wv,"").split(Sv).forEach(t=>{if(t){const i=t.split(Ev);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xn(n){let e="";if(Ct(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=xn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function ao(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Ct(e)&&(n.class=xn(e)),t&&(n.style=oo(t)),n}const Av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cv=Vl(Av);function tm(n){return!!n||n===""}function Rv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Er(n[i],e[i]);return t}function Er(n,e){if(n===e)return!0;let t=xf(n),i=xf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Si(n),i=Si(e),t||i)return n===e;if(t=Ne(n),i=Ne(e),t||i)return t&&i?Rv(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Er(n[o],e[o]))return!1}}return String(n)===String(e)}function Xl(n,e){return n.findIndex(t=>Er(t,e))}const nm=n=>!!(n&&n.__v_isRef===!0),ia=n=>Ct(n)?n:n==null?"":Ne(n)||St(n)&&(n.toString===Jp||!je(n.toString))?nm(n)?ia(n.value):JSON.stringify(n,im,2):String(n),im=(n,e)=>nm(e)?im(n,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[yc(i,s)+" =>"]=r,t),{})}:os(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>yc(t))}:Si(e)?yc(e):St(e)&&!Ne(e)&&!Gl(e)?String(e):e,yc=(n,e="")=>{var t;return Si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sn;class Sd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Sn,!e&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Sn;try{return Sn=this,e()}finally{Sn=t}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ed(n){return new Sd(n)}function wd(){return Sn}function rm(n,e=!1){Sn&&Sn.cleanups.push(n)}let Tt;const bc=new WeakSet;class zo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Sn&&Sn.active&&Sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bc.has(this)&&(bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||om(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bf(this),am(this);const e=Tt,t=di;Tt=this,di=!0;try{return this.fn()}finally{lm(this),Tt=e,di=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cd(e);this.deps=this.depsTail=void 0,bf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tu(this)&&this.run()}get dirty(){return Tu(this)}}let sm=0,Lo,Io;function om(n,e=!1){if(n.flags|=8,e){n.next=Io,Io=n;return}n.next=Lo,Lo=n}function Td(){sm++}function Ad(){if(--sm>0)return;if(Io){let e=Io;for(Io=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Lo;){let e=Lo;for(Lo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function am(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lm(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Cd(i),Pv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Tu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cm(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ho))return;n.globalVersion=Ho;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Tu(n)){n.flags&=-3;return}const t=Tt,i=di;Tt=n,di=!0;try{am(n);const r=n.fn(n._value);(e.version===0||wn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Tt=t,di=i,lm(n),n.flags&=-3}}function Cd(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Cd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}function Lv(n,e){n.effect instanceof zo&&(n=n.effect.fn);const t=new zo(n);e&&At(t,e);try{t.run()}catch(r){throw t.stop(),r}const i=t.run.bind(t);return i.effect=t,i}function Iv(n){n.effect.stop()}let di=!0;const um=[];function Rr(){um.push(di),di=!1}function Pr(){const n=um.pop();di=n===void 0?!0:n}function bf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Tt;Tt=void 0;try{e()}finally{Tt=t}}}let Ho=0;class Dv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Tt||!di||Tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Tt)t=this.activeLink=new Dv(Tt,this),Tt.deps?(t.prevDep=Tt.depsTail,Tt.depsTail.nextDep=t,Tt.depsTail=t):Tt.deps=Tt.depsTail=t,dm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Tt.depsTail,t.nextDep=void 0,Tt.depsTail.nextDep=t,Tt.depsTail=t,Tt.deps===t&&(Tt.deps=i)}return t}trigger(e){this.version++,Ho++,this.notify(e)}notify(e){Td();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ad()}}}function dm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ul=new WeakMap,$r=Symbol(""),Au=Symbol(""),Vo=Symbol("");function vn(n,e,t){if(di&&Tt){let i=ul.get(n);i||ul.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new jl),r.map=i,r.key=t),r.track()}}function Gi(n,e,t,i,r,s){const o=ul.get(n);if(!o){Ho++;return}const a=l=>{l&&l.trigger()};if(Td(),e==="clear")o.forEach(a);else{const l=Ne(n),c=l&&Md(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Vo||!Si(f)&&f>=u)&&a(d)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(Vo)),e){case"add":l?c&&a(o.get("length")):(a(o.get($r)),Hs(n)&&a(o.get(Au)));break;case"delete":l||(a(o.get($r)),Hs(n)&&a(o.get(Au)));break;case"set":Hs(n)&&a(o.get($r));break}}Ad()}function Nv(n,e){const t=ul.get(n);return t&&t.get(e)}function ds(n){const e=pt(n);return e===n?e:(vn(e,"iterate",Vo),Gn(n)?e:e.map(gn))}function $l(n){return vn(n=pt(n),"iterate",Vo),n}const Uv={__proto__:null,[Symbol.iterator](){return Mc(this,Symbol.iterator,gn)},concat(...n){return ds(this).concat(...n.map(e=>Ne(e)?ds(e):e))},entries(){return Mc(this,"entries",n=>(n[1]=gn(n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(gn),arguments)},find(n,e){return wi(this,"find",n,e,gn,arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,gn,arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Sc(this,"includes",n)},indexOf(...n){return Sc(this,"indexOf",n)},join(n){return ds(this).join(n)},lastIndexOf(...n){return Sc(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return go(this,"pop")},push(...n){return go(this,"push",n)},reduce(n,...e){return Mf(this,"reduce",n,e)},reduceRight(n,...e){return Mf(this,"reduceRight",n,e)},shift(){return go(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return go(this,"splice",n)},toReversed(){return ds(this).toReversed()},toSorted(n){return ds(this).toSorted(n)},toSpliced(...n){return ds(this).toSpliced(...n)},unshift(...n){return go(this,"unshift",n)},values(){return Mc(this,"values",gn)}};function Mc(n,e,t){const i=$l(n),r=i[e]();return i!==n&&!Gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ov=Array.prototype;function wi(n,e,t,i,r,s){const o=$l(n),a=o!==n&&!Gn(n),l=o[e];if(l!==Ov[e]){const d=l.apply(n,s);return a?gn(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,gn(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Mf(n,e,t,i){const r=$l(n);let s=t;return r!==n&&(Gn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,gn(a),l,n)}),r[e](s,...i)}function Sc(n,e,t){const i=pt(n);vn(i,"iterate",Vo);const r=i[e](...t);return(r===-1||r===!1)&&Zl(t[0])?(t[0]=pt(t[0]),i[e](...t)):r}function go(n,e,t=[]){Rr(),Td();const i=pt(n)[e].apply(n,t);return Ad(),Pr(),i}const Fv=Vl("__proto__,__v_isRef,__isVue"),fm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Si));function Bv(n){Si(n)||(n=String(n));const e=pt(this);return vn(e,"has",n),e.hasOwnProperty(n)}class hm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xm:vm:s?_m:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){let l;if(o&&(l=Uv[t]))return l;if(t==="hasOwnProperty")return Bv}const a=Reflect.get(e,t,$t(e)?e:i);return(Si(t)?fm.has(t):Fv(t))||(r||vn(e,"get",t),s)?a:$t(a)?o&&Md(t)?a:a.value:St(a)?r?Pd(a):lo(a):a}}class pm extends hm{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=wr(s);if(!Gn(i)&&!wr(i)&&(s=pt(s),i=pt(i)),!Ne(e)&&$t(s)&&!$t(i))return l?!1:(s.value=i,!0)}const o=Ne(e)&&Md(t)?Number(t)<e.length:gt(e,t),a=Reflect.set(e,t,i,$t(e)?e:r);return e===pt(r)&&(o?wn(i,s)&&Gi(e,"set",t,i):Gi(e,"add",t,i)),a}deleteProperty(e,t){const i=gt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Gi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Si(t)||!fm.has(t))&&vn(e,"has",t),i}ownKeys(e){return vn(e,"iterate",Ne(e)?"length":$r),Reflect.ownKeys(e)}}class mm extends hm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kv=new pm,zv=new mm,Hv=new pm(!0),Vv=new mm(!0),Rd=n=>n,ql=n=>Reflect.getPrototypeOf(n);function ha(n,e,t=!1,i=!1){n=n.__v_raw;const r=pt(n),s=pt(e);t||(wn(e,s)&&vn(r,"get",e),vn(r,"get",s));const{has:o}=ql(r),a=i?Rd:t?Ld:gn;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function pa(n,e=!1){const t=this.__v_raw,i=pt(t),r=pt(n);return e||(wn(n,r)&&vn(i,"has",n),vn(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ma(n,e=!1){return n=n.__v_raw,!e&&vn(pt(n),"iterate",$r),Reflect.get(n,"size",n)}function Sf(n,e=!1){!e&&!Gn(n)&&!wr(n)&&(n=pt(n));const t=pt(this);return ql(t).has.call(t,n)||(t.add(n),Gi(t,"add",n,n)),this}function Ef(n,e,t=!1){!t&&!Gn(e)&&!wr(e)&&(e=pt(e));const i=pt(this),{has:r,get:s}=ql(i);let o=r.call(i,n);o||(n=pt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?wn(e,a)&&Gi(i,"set",n,e):Gi(i,"add",n,e),this}function wf(n){const e=pt(this),{has:t,get:i}=ql(e);let r=t.call(e,n);r||(n=pt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Gi(e,"delete",n,void 0),s}function Tf(){const n=pt(this),e=n.size!==0,t=n.clear();return e&&Gi(n,"clear",void 0,void 0),t}function ga(n,e){return function(i,r){const s=this,o=s.__v_raw,a=pt(o),l=e?Rd:n?Ld:gn;return!n&&vn(a,"iterate",$r),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function _a(n,e,t){return function(...i){const r=this.__v_raw,s=pt(r),o=Hs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Rd:e?Ld:gn;return!e&&vn(s,"iterate",l?Au:$r),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gv(){const n={get(s){return ha(this,s)},get size(){return ma(this)},has:pa,add:Sf,set:Ef,delete:wf,clear:Tf,forEach:ga(!1,!1)},e={get(s){return ha(this,s,!1,!0)},get size(){return ma(this)},has:pa,add(s){return Sf.call(this,s,!0)},set(s,o){return Ef.call(this,s,o,!0)},delete:wf,clear:Tf,forEach:ga(!1,!0)},t={get(s){return ha(this,s,!0)},get size(){return ma(this,!0)},has(s){return pa.call(this,s,!0)},add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear"),forEach:ga(!0,!1)},i={get(s){return ha(this,s,!0,!0)},get size(){return ma(this,!0)},has(s){return pa.call(this,s,!0)},add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear"),forEach:ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_a(s,!1,!1),t[s]=_a(s,!0,!1),e[s]=_a(s,!1,!0),i[s]=_a(s,!0,!0)}),[n,t,e,i]}const[Wv,Xv,jv,$v]=Gv();function Yl(n,e){const t=e?n?$v:jv:n?Xv:Wv;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(gt(t,r)&&r in i?t:i,r,s)}const qv={get:Yl(!1,!1)},Yv={get:Yl(!1,!0)},Kv={get:Yl(!0,!1)},Zv={get:Yl(!0,!0)},gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,xm=new WeakMap;function Jv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qv(n){return n.__v_skip||!Object.isExtensible(n)?0:Jv(vv(n))}function lo(n){return wr(n)?n:Kl(n,!1,kv,qv,gm)}function ym(n){return Kl(n,!1,Hv,Yv,_m)}function Pd(n){return Kl(n,!0,zv,Kv,vm)}function e0(n){return Kl(n,!0,Vv,Zv,xm)}function Kl(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Qv(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function gr(n){return wr(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function wr(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Zl(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function bm(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&Qp(n,"__v_skip",!0),n}const gn=n=>St(n)?lo(n):n,Ld=n=>St(n)?Pd(n):n;function $t(n){return n?n.__v_isRef===!0:!1}function vt(n){return Sm(n,!1)}function Mm(n){return Sm(n,!0)}function Sm(n,e){return $t(n)?n:new t0(n,e)}class t0{constructor(e,t){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||wr(e);e=i?e:pt(e),wn(e,t)&&(this._rawValue=e,this._value=i?e:gn(e),this.dep.trigger())}}function n0(n){n.dep&&n.dep.trigger()}function de(n){return $t(n)?n.value:n}function i0(n){return je(n)?n():de(n)}const r0={get:(n,e,t)=>e==="__v_raw"?n:de(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return $t(r)&&!$t(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Id(n){return gr(n)?n:new Proxy(n,r0)}class s0{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new jl,{get:i,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Em(n){return new s0(n)}function Dd(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=Tm(n,t);return e}class o0{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nv(pt(this._object),this._key)}}class a0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function wm(n,e,t){return $t(n)?n:je(n)?new a0(n):St(n)&&arguments.length>1?Tm(n,e,t):vt(n)}function Tm(n,e,t){const i=n[e];return $t(i)?i:new o0(n,e,t)}class l0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return om(this,!0),!0}get value(){const e=this.dep.track();return cm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function c0(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new l0(i,r,t)}const u0={GET:"get",HAS:"has",ITERATE:"iterate"},d0={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},va={},dl=new WeakMap;let cr;function f0(){return cr}function Am(n,e=!1,t=cr){if(t){let i=dl.get(t);i||dl.set(t,i=[]),i.push(n)}}function h0(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:Gn(y)||r===!1||r===0?Bi(y,1):Bi(y);let u,d,f,p,_=!1,v=!1;if($t(n)?(d=()=>n.value,_=Gn(n)):gr(n)?(d=()=>c(n),_=!0):Ne(n)?(v=!0,_=n.some(y=>gr(y)||Gn(y)),d=()=>n.map(y=>{if($t(y))return y.value;if(gr(y))return c(y);if(je(y))return l?l(y,2):y()})):je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Rr();try{f()}finally{Pr()}}const y=cr;cr=u;try{return l?l(n,3,[p]):n(p)}finally{cr=y}}:d=ui,e&&r){const y=d,E=r===!0?1/0:r;d=()=>Bi(y(),E)}const m=wd(),h=()=>{u.stop(),m&&yd(m.effects,u)};if(s&&e){const y=e;e=(...E)=>{y(...E),h()}}let M=v?new Array(n.length).fill(va):va;const g=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const E=u.run();if(r||_||(v?E.some((w,A)=>wn(w,M[A])):wn(E,M))){f&&f();const w=cr;cr=u;try{const A=[E,M===va?void 0:v&&M[0]===va?[]:M,p];l?l(e,3,A):e(...A),M=E}finally{cr=w}}}else u.run()};return a&&a(g),u=new zo(d),u.scheduler=o?()=>o(g,!1):g,p=y=>Am(y,!1,u),f=u.onStop=()=>{const y=dl.get(u);if(y){if(l)l(y,4);else for(const E of y)E();dl.delete(u)}},e?i?g(!0):M=u.run():o?o(g.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Bi(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,$t(n))Bi(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)Bi(n[i],e,t);else if(os(n)||Hs(n))n.forEach(i=>{Bi(i,e,t)});else if(Gl(n)){for(const i in n)Bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cm=[];function p0(n){Cm.push(n)}function m0(){Cm.pop()}function g0(n,e){}const _0={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},v0={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function co(n,e,t,i){try{return i?n(...i):n()}catch(r){as(r,e,t)}}function Qn(n,e,t,i){if(je(n)){const r=co(n,e,t,i);return r&&bd(r)&&r.catch(s=>{as(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Qn(n[s],e,t,i));return r}}function as(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){Rr(),co(s,null,10,[n,l,c]),Pr();return}}x0(n,t,r,i,o)}function x0(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Tn=[];let vi=-1;const Xs=[];let ur=null,Us=0;const Rm=Promise.resolve();let fl=null;function pi(n){const e=fl||Rm;return n?e.then(this?n.bind(this):n):e}function y0(n){let e=vi+1,t=Tn.length;for(;e<t;){const i=e+t>>>1,r=Tn[i],s=Go(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Nd(n){if(!(n.flags&1)){const e=Go(n),t=Tn[Tn.length-1];!t||!(n.flags&2)&&e>=Go(t)?Tn.push(n):Tn.splice(y0(e),0,n),n.flags|=1,Pm()}}function Pm(){fl||(fl=Rm.then(Lm))}function hl(n){Ne(n)?Xs.push(...n):ur&&n.id===-1?ur.splice(Us+1,0,n):n.flags&1||(Xs.push(n),n.flags|=1),Pm()}function Af(n,e,t=vi+1){for(;t<Tn.length;t++){const i=Tn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function pl(n){if(Xs.length){const e=[...new Set(Xs)].sort((t,i)=>Go(t)-Go(i));if(Xs.length=0,ur){ur.push(...e);return}for(ur=e,Us=0;Us<ur.length;Us++){const t=ur[Us];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ur=null,Us=0}}const Go=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Lm(n){try{for(vi=0;vi<Tn.length;vi++){const e=Tn[vi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vi<Tn.length;vi++){const e=Tn[vi];e&&(e.flags&=-2)}vi=-1,Tn.length=0,pl(),fl=null,(Tn.length||Xs.length)&&Lm()}}let Os,xa=[];function Im(n,e){var t,i;Os=n,Os?(Os.enabled=!0,xa.forEach(({event:r,args:s})=>Os.emit(r,...s)),xa=[]):typeof window<"u"&&window.HTMLElement&&!((i=(t=window.navigator)==null?void 0:t.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Im(s,e)}),setTimeout(()=>{Os||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xa=[])},3e3)):xa=[]}let tn=null,Jl=null;function Wo(n){const e=tn;return tn=n,Jl=n&&n.type.__scopeId||null,e}function b0(n){Jl=n}function M0(){Jl=null}const S0=n=>De;function De(n,e=tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ou(-1);const s=Wo(e);let o;try{o=n(...r)}finally{Wo(s),i._d&&Ou(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ql(n,e){if(tn===null)return n;const t=la(tn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ft]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Bi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Rr(),Qn(l,t,8,[n.el,a,n,e]),Pr())}}const Dm=Symbol("_vte"),Nm=n=>n.__isTeleport,Do=n=>n&&(n.disabled||n.disabled===""),E0=n=>n&&(n.defer||n.defer===""),Cf=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Rf=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Cu=(n,e)=>{const t=n&&n.to;return Ct(t)?e?e(t):null:t},w0={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:_,createText:v,createComment:m}}=c,h=Do(e.props);let{shapeFlag:M,children:g,dynamicChildren:y}=e;if(n==null){const E=e.el=v(""),w=e.anchor=v("");p(E,t,i),p(w,t,i);const A=(k,x)=>{M&16&&(r&&r.isCE&&(r.ce._teleportTarget=k),u(g,k,x,r,s,o,a,l))},B=()=>{const k=e.target=Cu(e.props,_),x=Om(k,e,v,p);k&&(o!=="svg"&&Cf(k)?o="svg":o!=="mathml"&&Rf(k)&&(o="mathml"),h||(A(k,x),il(e)))};h&&(A(t,w),il(e)),E0(e.props)?an(B,s):B()}else{e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,w=e.target=n.target,A=e.targetAnchor=n.targetAnchor,B=Do(n.props),k=B?t:w,x=B?E:A;if(o==="svg"||Cf(w)?o="svg":(o==="mathml"||Rf(w))&&(o="mathml"),y?(f(n.dynamicChildren,y,k,r,s,o,a),$d(n,e,!0)):l||d(n,e,k,x,r,s,o,a,!1),h)B?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ya(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const T=e.target=Cu(e.props,_);T&&ya(e,T,null,c,0)}else B&&ya(e,w,A,c,1);il(e)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(r(c),r(u)),s&&r(l),o&16){const p=s||!Do(f);for(let _=0;_<a.length;_++){const v=a[_];i(v,e,t,p,!!v.dynamicChildren)}}},move:ya,hydrate:T0};function ya(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(o,e,t),(!d||Do(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(a,e,t)}function T0(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Cu(e.props,l);if(f){const p=f._lpa||f.firstChild;if(e.shapeFlag&16)if(Do(e.props))e.anchor=d(o(n),e,a(n),t,i,r,s),e.targetStart=p,e.targetAnchor=p&&o(p);else{e.anchor=o(n);let _=p;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||Om(f,e,u,c),d(p&&o(p),e,f,t,i,r,s)}il(e)}return e.anchor&&o(e.anchor)}const Um=w0;function il(n){const e=n.ctx;if(e&&e.ut){let t=n.targetStart;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}function Om(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Dm]=s,n&&(i(r,n),i(s,n)),s}const dr=Symbol("_leaveCb"),ba=Symbol("_enterCb");function Ud(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qi(()=>{n.isMounted=!0}),sa(()=>{n.isUnmounting=!0}),n}const $n=[Function,Array],Od={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},Fm=n=>{const e=n.subTree;return e.component?Fm(e.component):e},A0={name:"BaseTransition",props:Od,setup(n,{slots:e}){const t=Yt(),i=Ud();return()=>{const r=e.default&&ec(e.default(),!0);if(!r||!r.length)return;const s=Bm(r),o=pt(n),{mode:a}=o;if(i.isLeaving)return Ec(s);const l=Pf(s);if(!l)return Ec(s);let c=Js(l,o,i,t,f=>c=f);l.type!==Vt&&Wi(l,c);const u=t.subTree,d=u&&Pf(u);if(d&&d.type!==Vt&&!oi(l,d)&&Fm(t).type!==Vt){const f=Js(d,o,i,t);if(Wi(d,f),a==="out-in"&&l.type!==Vt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave},Ec(s);a==="in-out"&&l.type!==Vt&&(f.delayLeave=(p,_,v)=>{const m=zm(i,d);m[String(d.key)]=d,p[dr]=()=>{_(),p[dr]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return s}}};function Bm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Vt){e=t;break}}return e}const km=A0;function zm(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Js(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:h,onAfterAppear:M,onAppearCancelled:g}=e,y=String(n.key),E=zm(t,n),w=(k,x)=>{k&&Qn(k,i,9,x)},A=(k,x)=>{const T=x[1];w(k,x),Ne(k)?k.every(L=>L.length<=1)&&T():k.length<=1&&T()},B={mode:o,persisted:a,beforeEnter(k){let x=l;if(!t.isMounted)if(s)x=m||l;else return;k[dr]&&k[dr](!0);const T=E[y];T&&oi(n,T)&&T.el[dr]&&T.el[dr](),w(x,[k])},enter(k){let x=c,T=u,L=d;if(!t.isMounted)if(s)x=h||c,T=M||u,L=g||d;else return;let X=!1;const N=k[ba]=H=>{X||(X=!0,H?w(L,[k]):w(T,[k]),B.delayedLeave&&B.delayedLeave(),k[ba]=void 0)};x?A(x,[k,N]):N()},leave(k,x){const T=String(n.key);if(k[ba]&&k[ba](!0),t.isUnmounting)return x();w(f,[k]);let L=!1;const X=k[dr]=N=>{L||(L=!0,x(),N?w(v,[k]):w(_,[k]),k[dr]=void 0,E[T]===n&&delete E[T])};E[T]=n,p?A(p,[k,X]):X()},clone(k){const x=Js(k,e,t,i,r);return r&&r(x),x}};return B}function Ec(n){if(ra(n))return n=fi(n),n.children=null,n}function Pf(n){if(!ra(n))return Nm(n.type)&&n.children?Bm(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function Wi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ec(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ht?(o.patchFlag&128&&r++,i=i.concat(ec(o.children,e,a))):(e||o.type!==Vt)&&i.push(a!=null?fi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ze(n,e){return je(n)?At({name:n.name},e,{setup:n}):n}function Ru(){const n=Yt();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function Fd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function C0(n){const e=Yt(),t=Mm(null);if(e){const r=e.refs===ft?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function ml(n,e,t,i,r=!1){if(Ne(n)){n.forEach((_,v)=>ml(_,e&&(Ne(e)?e[v]:e),t,i,r));return}if(_r(i)&&!r)return;const s=i.shapeFlag&4?la(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,d=a.setupState,f=pt(d),p=d===ft?()=>!1:_=>gt(f,_);if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,p(c)&&(d[c]=null)):$t(c)&&(c.value=null)),je(l))co(l,a,12,[o,u]);else{const _=Ct(l),v=$t(l);if(_||v){const m=()=>{if(n.f){const h=_?p(l)?d[l]:u[l]:l.value;r?Ne(h)&&yd(h,s):Ne(h)?h.includes(s)||h.push(s):_?(u[l]=[s],p(l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,p(l)&&(d[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,an(m,t)):m()}}}let Lf=!1;const fs=()=>{Lf||(console.error("Hydration completed but contains mismatches."),Lf=!0)},R0=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",P0=n=>n.namespaceURI.includes("MathML"),Ma=n=>{if(n.nodeType===1){if(R0(n))return"svg";if(P0(n))return"mathml"}},Fs=n=>n.nodeType===8;function L0(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(g,y)=>{if(!y.hasChildNodes()){t(null,g,y),pl(),y._vnode=g;return}d(y.firstChild,g,null,null,null),pl(),y._vnode=g},d=(g,y,E,w,A,B=!1)=>{B=B||!!y.dynamicChildren;const k=Fs(g)&&g.data==="[",x=()=>v(g,y,E,w,A,k),{type:T,ref:L,shapeFlag:X,patchFlag:N}=y;let H=g.nodeType;y.el=g,N===-2&&(B=!1,y.dynamicChildren=null);let O=null;switch(T){case vr:H!==3?y.children===""?(l(y.el=r(""),o(g),g),O=g):O=x():(g.data!==y.children&&(fs(),g.data=y.children),O=s(g));break;case Vt:M(g)?(O=s(g),h(y.el=g.content.firstChild,g,E)):H!==8||k?O=x():O=s(g);break;case Yr:if(k&&(g=s(g),H=g.nodeType),H===1||H===3){O=g;const Q=!y.children.length;for(let G=0;G<y.staticCount;G++)Q&&(y.children+=O.nodeType===1?O.outerHTML:O.data),G===y.staticCount-1&&(y.anchor=O),O=s(O);return k?s(O):O}else x();break;case Ht:k?O=_(g,y,E,w,A,B):O=x();break;default:if(X&1)(H!==1||y.type.toLowerCase()!==g.tagName.toLowerCase())&&!M(g)?O=x():O=f(g,y,E,w,A,B);else if(X&6){y.slotScopeIds=A;const Q=o(g);if(k?O=m(g):Fs(g)&&g.data==="teleport start"?O=m(g,g.data,"teleport end"):O=s(g),e(y,Q,null,E,w,Ma(Q),B),_r(y)){let G;k?(G=Ce(Ht),G.anchor=O?O.previousSibling:Q.lastChild):G=g.nodeType===3?Jt(""):Ce("div"),G.el=g,y.component.subTree=G}}else X&64?H!==8?O=x():O=y.type.hydrate(g,y,E,w,A,B,n,p):X&128&&(O=y.type.hydrate(g,y,E,w,Ma(o(g)),A,B,n,d))}return L!=null&&ml(L,null,w,y),O},f=(g,y,E,w,A,B)=>{B=B||!!y.dynamicChildren;const{type:k,props:x,patchFlag:T,shapeFlag:L,dirs:X,transition:N}=y,H=k==="input"||k==="option";if(H||T!==-1){X&&xi(y,null,E,"created");let O=!1;if(M(g)){O=fg(w,N)&&E&&E.vnode.props&&E.vnode.props.appear;const G=g.content.firstChild;O&&N.beforeEnter(G),h(G,g,E),y.el=g=G}if(L&16&&!(x&&(x.innerHTML||x.textContent))){let G=p(g.firstChild,y,g,E,w,A,B);for(;G;){Sa(g,1)||fs();const se=G;G=G.nextSibling,a(se)}}else if(L&8){let G=y.children;G[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(G=G.slice(1)),g.textContent!==G&&(Sa(g,0)||fs(),g.textContent=y.children)}if(x){if(H||!B||T&48){const G=g.tagName.includes("-");for(const se in x)(H&&(se.endsWith("value")||se==="indeterminate")||ta(se)&&!Vs(se)||se[0]==="."||G)&&i(g,se,null,x[se],void 0,E)}else if(x.onClick)i(g,"onClick",null,x.onClick,void 0,E);else if(T&4&&gr(x.style))for(const G in x.style)x.style[G]}let Q;(Q=x&&x.onVnodeBeforeMount)&&Pn(Q,E,y),X&&xi(y,null,E,"beforeMount"),((Q=x&&x.onVnodeMounted)||X||O)&&Mg(()=>{Q&&Pn(Q,E,y),O&&N.enter(g),X&&xi(y,null,E,"mounted")},w)}return g.nextSibling},p=(g,y,E,w,A,B,k)=>{k=k||!!y.dynamicChildren;const x=y.children,T=x.length;for(let L=0;L<T;L++){const X=k?x[L]:x[L]=In(x[L]),N=X.type===vr;g?(N&&!k&&L+1<T&&In(x[L+1]).type===vr&&(l(r(g.data.slice(X.children.length)),E,s(g)),g.data=X.children),g=d(g,X,w,A,B,k)):N&&!X.children?l(X.el=r(""),E):(Sa(E,1)||fs(),t(null,X,E,null,w,A,Ma(E),B))}return g},_=(g,y,E,w,A,B)=>{const{slotScopeIds:k}=y;k&&(A=A?A.concat(k):k);const x=o(g),T=p(s(g),y,x,E,w,A,B);return T&&Fs(T)&&T.data==="]"?s(y.anchor=T):(fs(),l(y.anchor=c("]"),x,T),T)},v=(g,y,E,w,A,B)=>{if(Sa(g.parentElement,1)||fs(),y.el=null,B){const T=m(g);for(;;){const L=s(g);if(L&&L!==T)a(L);else break}}const k=s(g),x=o(g);return a(g),t(null,y,x,k,E,w,Ma(x),A),k},m=(g,y="[",E="]")=>{let w=0;for(;g;)if(g=s(g),g&&Fs(g)&&(g.data===y&&w++,g.data===E)){if(w===0)return s(g);w--}return g},h=(g,y,E)=>{const w=y.parentNode;w&&w.replaceChild(g,y);let A=E;for(;A;)A.vnode.el===y&&(A.vnode.el=A.subTree.el=g),A=A.parent},M=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[u,d]}const If="data-allow-mismatch",I0={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Sa(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(If);)n=n.parentElement;const t=n&&n.getAttribute(If);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:t.split(",").includes(I0[e])}}const D0=(n=1e4)=>e=>{const t=requestIdleCallback(e,{timeout:n});return()=>cancelIdleCallback(t)};function N0(n){const{top:e,left:t,bottom:i,right:r}=n.getBoundingClientRect(),{innerHeight:s,innerWidth:o}=window;return(e>0&&e<s||i>0&&i<s)&&(t>0&&t<o||r>0&&r<o)}const U0=n=>(e,t)=>{const i=new IntersectionObserver(r=>{for(const s of r)if(s.isIntersecting){i.disconnect(),e();break}},n);return t(r=>{if(r instanceof Element){if(N0(r))return e(),i.disconnect(),!1;i.observe(r)}}),()=>i.disconnect()},O0=n=>e=>{if(n){const t=matchMedia(n);if(t.matches)e();else return t.addEventListener("change",e,{once:!0}),()=>t.removeEventListener("change",e)}},F0=(n=[])=>(e,t)=>{Ct(n)&&(n=[n]);let i=!1;const r=o=>{i||(i=!0,s(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},s=()=>{t(o=>{for(const a of n)o.removeEventListener(a,r)})};return t(o=>{for(const a of n)o.addEventListener(a,r,{once:!0})}),s};function B0(n,e){if(Fs(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Fs(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const _r=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function k0(n){je(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,d=0;const f=()=>(d++,c=null,p()),p=()=>{let _;return c||(_=c=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((m,h)=>{l(v,()=>m(f()),()=>h(v),d+1)});throw v}).then(v=>_!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),u=v,v)))};return Ze({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,v,m){const h=s?()=>{const M=s(m,g=>B0(_,g));M&&(v.bum||(v.bum=[])).push(M)}:m;u?h():p().then(()=>!v.isUnmounted&&h())},get __asyncResolved(){return u},setup(){const _=en;if(Fd(_),u)return()=>wc(u,_);const v=g=>{c=null,as(g,_,13,!i)};if(a&&_.suspense||aa)return p().then(g=>()=>wc(g,_)).catch(g=>(v(g),()=>i?Ce(i,{error:g}):null));const m=vt(!1),h=vt(),M=vt(!!r);return r&&setTimeout(()=>{M.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!h.value){const g=new Error(`Async component timed out after ${o}ms.`);v(g),h.value=g}},o),p().then(()=>{m.value=!0,_.parent&&ra(_.parent.vnode)&&_.parent.update()}).catch(g=>{v(g),h.value=g}),()=>{if(m.value&&u)return wc(u,_);if(h.value&&i)return Ce(i,{error:h.value});if(t&&!M.value)return Ce(t)}}})}function wc(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Ce(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const ra=n=>n.type.__isKeepAlive,z0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Yt(),i=t.ctx;if(!i.renderer)return()=>{const M=e.default&&e.default();return M&&M.length===1?M[0]:M};const r=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=i,f=d("div");i.activate=(M,g,y,E,w)=>{const A=M.component;c(M,g,y,0,a),l(A.vnode,M,g,y,A,a,E,M.slotScopeIds,w),an(()=>{A.isDeactivated=!1,A.a&&Ws(A.a);const B=M.props&&M.props.onVnodeMounted;B&&Pn(B,A.parent,M)},a)},i.deactivate=M=>{const g=M.component;_l(g.m),_l(g.a),c(M,f,null,1,a),an(()=>{g.da&&Ws(g.da);const y=M.props&&M.props.onVnodeUnmounted;y&&Pn(y,g.parent,M),g.isDeactivated=!0},a)};function p(M){Tc(M),u(M,t,a,!0)}function _(M){r.forEach((g,y)=>{const E=Hu(g.type);E&&!M(E)&&v(y)})}function v(M){const g=r.get(M);g&&(!o||!oi(g,o))?p(g):o&&Tc(o),r.delete(M),s.delete(M)}An(()=>[n.include,n.exclude],([M,g])=>{M&&_(y=>Ro(M,y)),g&&_(y=>!Ro(g,y))},{flush:"post",deep:!0});let m=null;const h=()=>{m!=null&&(vl(t.subTree.type)?an(()=>{r.set(m,Ea(t.subTree))},t.subTree.suspense):r.set(m,Ea(t.subTree)))};return qi(h),nc(h),sa(()=>{r.forEach(M=>{const{subTree:g,suspense:y}=t,E=Ea(g);if(M.type===E.type&&M.key===E.key){Tc(E);const w=E.component.da;w&&an(w,y);return}p(M)})}),()=>{if(m=null,!e.default)return o=null;const M=e.default(),g=M[0];if(M.length>1)return o=null,M;if(!Xi(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let y=Ea(g);if(y.type===Vt)return o=null,y;const E=y.type,w=Hu(_r(y)?y.type.__asyncResolved||{}:E),{include:A,exclude:B,max:k}=n;if(A&&(!w||!Ro(A,w))||B&&w&&Ro(B,w))return y.shapeFlag&=-257,o=y,g;const x=y.key==null?E:y.key,T=r.get(x);return y.el&&(y=fi(y),g.shapeFlag&128&&(g.ssContent=y)),m=x,T?(y.el=T.el,y.component=T.component,y.transition&&Wi(y,y.transition),y.shapeFlag|=512,s.delete(x),s.add(x)):(s.add(x),k&&s.size>parseInt(k,10)&&v(s.values().next().value)),y.shapeFlag|=256,o=y,vl(g.type)?g:y}}},H0=z0;function Ro(n,e){return Ne(n)?n.some(t=>Ro(t,e)):Ct(n)?n.split(",").includes(e):_v(n)?(n.lastIndex=0,n.test(e)):!1}function Hm(n,e){Gm(n,"a",e)}function Vm(n,e){Gm(n,"da",e)}function Gm(n,e,t=en){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(tc(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ra(r.parent.vnode)&&V0(i,e,t,r),r=r.parent}}function V0(n,e,t,i){const r=tc(e,n,i,!0);uo(()=>{yd(i[e],r)},t)}function Tc(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Ea(n){return n.shapeFlag&128?n.ssContent:n}function tc(n,e,t=en,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Rr();const a=rs(t),l=Qn(e,t,n,o);return a(),Pr(),l});return i?r.unshift(s):r.push(s),s}}const $i=n=>(e,t=en)=>{(!aa||n==="sp")&&tc(n,(...i)=>e(...i),t)},Bd=$i("bm"),qi=$i("m"),Wm=$i("bu"),nc=$i("u"),sa=$i("bum"),uo=$i("um"),Xm=$i("sp"),jm=$i("rtg"),$m=$i("rtc");function qm(n,e=en){tc("ec",n,e)}const kd="components",G0="directives";function Ym(n,e){return zd(kd,n,!0,e)||n}const Km=Symbol.for("v-ndc");function W0(n){return Ct(n)?zd(kd,n,!1)||n:n||Km}function X0(n){return zd(G0,n)}function zd(n,e,t=!0,i=!1){const r=tn||en;if(r){const s=r.type;if(n===kd){const a=Hu(s,!1);if(a&&(a===e||a===nn(e)||a===na(nn(e))))return s}const o=Df(r[n]||s[n],e)||Df(r.appContext[n],e);return!o&&i?s:o}}function Df(n,e){return n&&(n[e]||n[nn(e)]||n[na(nn(e))])}function Hd(n,e,t,i){let r;const s=t&&t[i],o=Ne(n);if(o||Ct(n)){const a=o&&gr(n);let l=!1;a&&(l=!Gn(n),n=$l(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?gn(n[c]):n[c],c,void 0,s&&s[c])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}function Vd(n,e){for(let t=0;t<e.length;t++){const i=e[t];if(Ne(i))for(let r=0;r<i.length;r++)n[i[r].name]=i[r].fn;else i&&(n[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return n}function dt(n,e,t={},i,r){if(tn.ce||tn.parent&&_r(tn.parent)&&tn.parent.ce)return e!=="default"&&(t.name=e),Fe(),_t(Ht,null,[Ce("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),Fe();const o=s&&Gd(s(t)),a=_t(Ht,{key:(t.key||o&&o.key||`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Gd(n){return n.some(e=>Xi(e)?!(e.type===Vt||e.type===Ht&&!Gd(e.children)):!0)?n:null}function j0(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:Gs(i)]=n[i];return t}const Pu=n=>n?Ag(n)?la(n):Pu(n.parent):null,No=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pu(n.parent),$root:n=>Pu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wd(n),$forceUpdate:n=>n.f||(n.f=()=>{Nd(n.update)}),$nextTick:n=>n.n||(n.n=pi.bind(n.proxy)),$watch:n=>Mx.bind(n)}),Ac=(n,e)=>n!==ft&&!n.__isScriptSetup&&gt(n,e),Lu={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ac(i,e))return o[e]=1,i[e];if(r!==ft&&gt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&gt(c,e))return o[e]=3,s[e];if(t!==ft&&gt(t,e))return o[e]=4,t[e];Iu&&(o[e]=0)}}const u=No[e];let d,f;if(u)return e==="$attrs"&&vn(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ft&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ac(r,e)?(r[e]=t,!0):i!==ft&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&gt(n,o)||Ac(e,o)||(a=s[0])&&gt(a,o)||gt(i,o)||gt(No,o)||gt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},$0=At({},Lu,{get(n,e){if(e!==Symbol.unscopables)return Lu.get(n,e,n)},has(n,e){return e[0]!=="_"&&!Mv(e)}});function q0(){return null}function Y0(){return null}function K0(n){}function Z0(n){}function J0(){return null}function Q0(){}function ex(n,e){return null}function tx(){return Zm().slots}function nx(){return Zm().attrs}function Zm(){const n=Yt();return n.setupContext||(n.setupContext=Pg(n))}function Xo(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function ix(n,e){const t=Xo(n);for(const i in e){if(i.startsWith("__skip"))continue;let r=t[i];r?Ne(r)||je(r)?r=t[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(r=t[i]={default:e[i]}),r&&e[`__skip_${i}`]&&(r.skipFactory=!0)}return t}function rx(n,e){return!n||!e?n||e:Ne(n)&&Ne(e)?n.concat(e):At({},Xo(n),Xo(e))}function sx(n,e){const t={};for(const i in n)e.includes(i)||Object.defineProperty(t,i,{enumerable:!0,get:()=>n[i]});return t}function ox(n){const e=Yt();let t=n();return Bu(),bd(t)&&(t=t.catch(i=>{throw rs(e),i})),[t,()=>rs(e)]}let Iu=!0;function ax(n){const e=Wd(n),t=n.proxy,i=n.ctx;Iu=!1,e.beforeCreate&&Nf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:M,destroyed:g,unmounted:y,render:E,renderTracked:w,renderTriggered:A,errorCaptured:B,serverPrefetch:k,expose:x,inheritAttrs:T,components:L,directives:X,filters:N}=e;if(c&&lx(c,i,null),o)for(const Q in o){const G=o[Q];je(G)&&(i[Q]=G.bind(t))}if(r){const Q=r.call(t,t);St(Q)&&(n.data=lo(Q))}if(Iu=!0,s)for(const Q in s){const G=s[Q],se=je(G)?G.bind(t,t):je(G.get)?G.get.bind(t,t):ui,pe=!je(G)&&je(G.set)?G.set.bind(t):ui,ge=Ut({get:se,set:pe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Me=>ge.value=Me})}if(a)for(const Q in a)Jm(a[Q],i,t,Q);if(l){const Q=je(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(G=>{Xd(G,Q[G])})}u&&Nf(u,n,"c");function O(Q,G){Ne(G)?G.forEach(se=>Q(se.bind(t))):G&&Q(G.bind(t))}if(O(Bd,d),O(qi,f),O(Wm,p),O(nc,_),O(Hm,v),O(Vm,m),O(qm,B),O($m,w),O(jm,A),O(sa,M),O(uo,y),O(Xm,k),Ne(x))if(x.length){const Q=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(Q,G,{get:()=>t[G],set:se=>t[G]=se})})}else n.exposed||(n.exposed={});E&&n.render===ui&&(n.render=E),T!=null&&(n.inheritAttrs=T),L&&(n.components=L),X&&(n.directives=X),k&&Fd(n)}function lx(n,e,t=ui){Ne(n)&&(n=Du(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=js(r.from||i,r.default,!0):s=js(r.from||i):s=js(r),$t(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Nf(n,e,t){Qn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Jm(n,e,t,i){let r=i.includes(".")?vg(t,i):()=>t[i];if(Ct(n)){const s=e[n];je(s)&&An(r,s)}else if(je(n))An(r,n.bind(t));else if(St(n))if(Ne(n))n.forEach(s=>Jm(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&An(r,s,n)}}function Wd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gl(l,c,o,!0)),gl(l,e,o)),St(e)&&s.set(e,l),l}function gl(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gl(n,s,t,!0),r&&r.forEach(o=>gl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cx[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cx={data:Uf,props:Of,emits:Of,methods:Po,computed:Po,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:Po,directives:Po,watch:dx,provide:Uf,inject:ux};function Uf(n,e){return e?n?function(){return At(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function ux(n,e){return Po(Du(n),Du(e))}function Du(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bn(n,e){return n?[...new Set([].concat(n,e))]:e}function Po(n,e){return n?At(Object.create(null),n,e):e}function Of(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:At(Object.create(null),Xo(n),Xo(e??{})):e}function dx(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=bn(n[i],e[i]);return t}function Qm(){return{app:null,config:{isNativeTag:mv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fx=0;function hx(n,e){return function(i,r=null){je(i)||(i=At({},i)),r!=null&&!St(r)&&(r=null);const s=Qm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:fx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ig,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...d)):je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ce(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(p,u):n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,la(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=qr;qr=c;try{return u()}finally{qr=d}}};return c}}let qr=null;function Xd(n,e){if(en){let t=en.provides;const i=en.parent&&en.parent.provides;i===t&&(t=en.provides=Object.create(i)),t[n]=e}}function js(n,e,t=!1){const i=en||tn;if(i||qr){const r=qr?qr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}function px(){return!!(en||tn||qr)}const eg={},tg=()=>Object.create(eg),ng=n=>Object.getPrototypeOf(n)===eg;function mx(n,e,t,i=!1){const r={},s=tg();n.propsDefaults=Object.create(null),ig(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ym(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gx(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=pt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ic(n.emitsOptions,f))continue;const p=e[f];if(l)if(gt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const _=nn(f);r[_]=Nu(l,a,_,p,n,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{ig(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=Un(d))===d||!gt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Nu(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!gt(e,d))&&(delete s[d],c=!0)}c&&Gi(n.attrs,"set","")}function ig(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;r&&gt(r,u=nn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ic(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=pt(t),c=a||ft;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Nu(r,l,d,c[d],n,!gt(c,d))}}return o}function Nu(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=rs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Un(t))&&(i=!0))}return i}const _x=new WeakMap;function rg(n,e,t=!1){const i=t?_x:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!je(n)){const u=d=>{l=!0;const[f,p]=rg(d,e,!0);At(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,zs),zs;if(Ne(s))for(let u=0;u<s.length;u++){const d=nn(s[u]);Ff(d)&&(o[d]=ft)}else if(s)for(const u in s){const d=nn(u);if(Ff(d)){const f=s[u],p=o[d]=Ne(f)||je(f)?{type:f}:At({},f),_=p.type;let v=!1,m=!0;if(Ne(_))for(let h=0;h<_.length;++h){const M=_[h],g=je(M)&&M.name;if(g==="Boolean"){v=!0;break}else g==="String"&&(m=!1)}else v=je(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||gt(p,"default"))&&a.push(d)}}const c=[o,a];return St(n)&&i.set(n,c),c}function Ff(n){return n[0]!=="$"&&!Vs(n)}const sg=n=>n[0]==="_"||n==="$stable",jd=n=>Ne(n)?n.map(In):[In(n)],vx=(n,e,t)=>{if(e._n)return e;const i=De((...r)=>jd(e(...r)),t);return i._c=!1,i},og=(n,e,t)=>{const i=n._ctx;for(const r in n){if(sg(r))continue;const s=n[r];if(je(s))e[r]=vx(r,s,i);else if(s!=null){const o=jd(s);e[r]=()=>o}}},ag=(n,e)=>{const t=jd(e);n.slots.default=()=>t},lg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},xx=(n,e,t)=>{const i=n.slots=tg();if(n.vnode.shapeFlag&32){const r=e._;r?(lg(i,e,t),t&&Qp(i,"_",r,!0)):og(e,i)}else e&&ag(n,e)},yx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:lg(r,e,t):(s=!e.$stable,og(e,r)),o=e}else e&&(ag(n,e),o={default:1});if(s)for(const a in r)!sg(a)&&o[a]==null&&delete r[a]},an=Mg;function cg(n){return dg(n)}function ug(n){return dg(n,L0)}function dg(n,e){const t=em();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=ui,insertStaticContent:_}=n,v=(I,D,W,K=null,ce=null,ie=null,S=void 0,b=null,U=!!D.dynamicChildren)=>{if(I===D)return;I&&!oi(I,D)&&(K=Be(I),Me(I,ce,ie,!0),I=null),D.patchFlag===-2&&(U=!1,D.dynamicChildren=null);const{type:z,ref:Z,shapeFlag:P}=D;switch(z){case vr:m(I,D,W,K);break;case Vt:h(I,D,W,K);break;case Yr:I==null&&M(D,W,K,S);break;case Ht:L(I,D,W,K,ce,ie,S,b,U);break;default:P&1?E(I,D,W,K,ce,ie,S,b,U):P&6?X(I,D,W,K,ce,ie,S,b,U):(P&64||P&128)&&z.process(I,D,W,K,ce,ie,S,b,U,st)}Z!=null&&ce&&ml(Z,I&&I.ref,ie,D||I,!D)},m=(I,D,W,K)=>{if(I==null)i(D.el=a(D.children),W,K);else{const ce=D.el=I.el;D.children!==I.children&&c(ce,D.children)}},h=(I,D,W,K)=>{I==null?i(D.el=l(D.children||""),W,K):D.el=I.el},M=(I,D,W,K)=>{[I.el,I.anchor]=_(I.children,D,W,K,I.el,I.anchor)},g=({el:I,anchor:D},W,K)=>{let ce;for(;I&&I!==D;)ce=f(I),i(I,W,K),I=ce;i(D,W,K)},y=({el:I,anchor:D})=>{let W;for(;I&&I!==D;)W=f(I),r(I),I=W;r(D)},E=(I,D,W,K,ce,ie,S,b,U)=>{D.type==="svg"?S="svg":D.type==="math"&&(S="mathml"),I==null?w(D,W,K,ce,ie,S,b,U):k(I,D,ce,ie,S,b,U)},w=(I,D,W,K,ce,ie,S,b)=>{let U,z;const{props:Z,shapeFlag:P,transition:F,dirs:j}=I;if(U=I.el=o(I.type,ie,Z&&Z.is,Z),P&8?u(U,I.children):P&16&&B(I.children,U,null,K,ce,Cc(I,ie),S,b),j&&xi(I,null,K,"created"),A(U,I,I.scopeId,S,K),Z){for(const he in Z)he!=="value"&&!Vs(he)&&s(U,he,null,Z[he],ie,K);"value"in Z&&s(U,"value",null,Z.value,ie),(z=Z.onVnodeBeforeMount)&&Pn(z,K,I)}j&&xi(I,null,K,"beforeMount");const re=fg(ce,F);re&&F.beforeEnter(U),i(U,D,W),((z=Z&&Z.onVnodeMounted)||re||j)&&an(()=>{z&&Pn(z,K,I),re&&F.enter(U),j&&xi(I,null,K,"mounted")},ce)},A=(I,D,W,K,ce)=>{if(W&&p(I,W),K)for(let ie=0;ie<K.length;ie++)p(I,K[ie]);if(ce){let ie=ce.subTree;if(D===ie||vl(ie.type)&&(ie.ssContent===D||ie.ssFallback===D)){const S=ce.vnode;A(I,S,S.scopeId,S.slotScopeIds,ce.parent)}}},B=(I,D,W,K,ce,ie,S,b,U=0)=>{for(let z=U;z<I.length;z++){const Z=I[z]=b?fr(I[z]):In(I[z]);v(null,Z,D,W,K,ce,ie,S,b)}},k=(I,D,W,K,ce,ie,S)=>{const b=D.el=I.el;let{patchFlag:U,dynamicChildren:z,dirs:Z}=D;U|=I.patchFlag&16;const P=I.props||ft,F=D.props||ft;let j;if(W&&Nr(W,!1),(j=F.onVnodeBeforeUpdate)&&Pn(j,W,D,I),Z&&xi(D,I,W,"beforeUpdate"),W&&Nr(W,!0),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&u(b,""),z?x(I.dynamicChildren,z,b,W,K,Cc(D,ce),ie):S||G(I,D,b,null,W,K,Cc(D,ce),ie,!1),U>0){if(U&16)T(b,P,F,W,ce);else if(U&2&&P.class!==F.class&&s(b,"class",null,F.class,ce),U&4&&s(b,"style",P.style,F.style,ce),U&8){const re=D.dynamicProps;for(let he=0;he<re.length;he++){const me=re[he],oe=P[me],ve=F[me];(ve!==oe||me==="value")&&s(b,me,oe,ve,ce,W)}}U&1&&I.children!==D.children&&u(b,D.children)}else!S&&z==null&&T(b,P,F,W,ce);((j=F.onVnodeUpdated)||Z)&&an(()=>{j&&Pn(j,W,D,I),Z&&xi(D,I,W,"updated")},K)},x=(I,D,W,K,ce,ie,S)=>{for(let b=0;b<D.length;b++){const U=I[b],z=D[b],Z=U.el&&(U.type===Ht||!oi(U,z)||U.shapeFlag&70)?d(U.el):W;v(U,z,Z,null,K,ce,ie,S,!0)}},T=(I,D,W,K,ce)=>{if(D!==W){if(D!==ft)for(const ie in D)!Vs(ie)&&!(ie in W)&&s(I,ie,D[ie],null,ce,K);for(const ie in W){if(Vs(ie))continue;const S=W[ie],b=D[ie];S!==b&&ie!=="value"&&s(I,ie,b,S,ce,K)}"value"in W&&s(I,"value",D.value,W.value,ce)}},L=(I,D,W,K,ce,ie,S,b,U)=>{const z=D.el=I?I.el:a(""),Z=D.anchor=I?I.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:j}=D;j&&(b=b?b.concat(j):j),I==null?(i(z,W,K),i(Z,W,K),B(D.children||[],W,Z,ce,ie,S,b,U)):P>0&&P&64&&F&&I.dynamicChildren?(x(I.dynamicChildren,F,W,ce,ie,S,b),(D.key!=null||ce&&D===ce.subTree)&&$d(I,D,!0)):G(I,D,W,Z,ce,ie,S,b,U)},X=(I,D,W,K,ce,ie,S,b,U)=>{D.slotScopeIds=b,I==null?D.shapeFlag&512?ce.ctx.activate(D,W,K,S,U):N(D,W,K,ce,ie,S,U):H(I,D,U)},N=(I,D,W,K,ce,ie,S)=>{const b=I.component=Tg(I,K,ce);if(ra(I)&&(b.ctx.renderer=st),Cg(b,!1,S),b.asyncDep){if(ce&&ce.registerDep(b,O,S),!I.el){const U=b.subTree=Ce(Vt);h(null,U,D,W)}}else O(b,I,D,W,ce,ie,S)},H=(I,D,W)=>{const K=D.component=I.component;if(Cx(I,D,W))if(K.asyncDep&&!K.asyncResolved){Q(K,D,W);return}else K.next=D,K.update();else D.el=I.el,K.vnode=D},O=(I,D,W,K,ce,ie,S)=>{const b=()=>{if(I.isMounted){let{next:P,bu:F,u:j,parent:re,vnode:he}=I;{const be=hg(I);if(be){P&&(P.el=he.el,Q(I,P,S)),be.asyncDep.then(()=>{I.isUnmounted||b()});return}}let me=P,oe;Nr(I,!1),P?(P.el=he.el,Q(I,P,S)):P=he,F&&Ws(F),(oe=P.props&&P.props.onVnodeBeforeUpdate)&&Pn(oe,re,P,he),Nr(I,!0);const ve=rl(I),Se=I.subTree;I.subTree=ve,v(Se,ve,d(Se.el),Be(Se),I,ce,ie),P.el=ve.el,me===null&&qd(I,ve.el),j&&an(j,ce),(oe=P.props&&P.props.onVnodeUpdated)&&an(()=>Pn(oe,re,P,he),ce)}else{let P;const{el:F,props:j}=D,{bm:re,m:he,parent:me,root:oe,type:ve}=I,Se=_r(D);if(Nr(I,!1),re&&Ws(re),!Se&&(P=j&&j.onVnodeBeforeMount)&&Pn(P,me,D),Nr(I,!0),F&&q){const be=()=>{I.subTree=rl(I),q(F,I.subTree,I,ce,null)};Se&&ve.__asyncHydrate?ve.__asyncHydrate(F,I,be):be()}else{oe.ce&&oe.ce._injectChildStyle(ve);const be=I.subTree=rl(I);v(null,be,W,K,I,ce,ie),D.el=be.el}if(he&&an(he,ce),!Se&&(P=j&&j.onVnodeMounted)){const be=D;an(()=>Pn(P,me,be),ce)}(D.shapeFlag&256||me&&_r(me.vnode)&&me.vnode.shapeFlag&256)&&I.a&&an(I.a,ce),I.isMounted=!0,D=W=K=null}};I.scope.on();const U=I.effect=new zo(b);I.scope.off();const z=I.update=U.run.bind(U),Z=I.job=U.runIfDirty.bind(U);Z.i=I,Z.id=I.uid,U.scheduler=()=>Nd(Z),Nr(I,!0),z()},Q=(I,D,W)=>{D.component=I;const K=I.vnode.props;I.vnode=D,I.next=null,gx(I,D.props,K,W),yx(I,D.children,W),Rr(),Af(I),Pr()},G=(I,D,W,K,ce,ie,S,b,U=!1)=>{const z=I&&I.children,Z=I?I.shapeFlag:0,P=D.children,{patchFlag:F,shapeFlag:j}=D;if(F>0){if(F&128){pe(z,P,W,K,ce,ie,S,b,U);return}else if(F&256){se(z,P,W,K,ce,ie,S,b,U);return}}j&8?(Z&16&&Ae(z,ce,ie),P!==z&&u(W,P)):Z&16?j&16?pe(z,P,W,K,ce,ie,S,b,U):Ae(z,ce,ie,!0):(Z&8&&u(W,""),j&16&&B(P,W,K,ce,ie,S,b,U))},se=(I,D,W,K,ce,ie,S,b,U)=>{I=I||zs,D=D||zs;const z=I.length,Z=D.length,P=Math.min(z,Z);let F;for(F=0;F<P;F++){const j=D[F]=U?fr(D[F]):In(D[F]);v(I[F],j,W,null,ce,ie,S,b,U)}z>Z?Ae(I,ce,ie,!0,!1,P):B(D,W,K,ce,ie,S,b,U,P)},pe=(I,D,W,K,ce,ie,S,b,U)=>{let z=0;const Z=D.length;let P=I.length-1,F=Z-1;for(;z<=P&&z<=F;){const j=I[z],re=D[z]=U?fr(D[z]):In(D[z]);if(oi(j,re))v(j,re,W,null,ce,ie,S,b,U);else break;z++}for(;z<=P&&z<=F;){const j=I[P],re=D[F]=U?fr(D[F]):In(D[F]);if(oi(j,re))v(j,re,W,null,ce,ie,S,b,U);else break;P--,F--}if(z>P){if(z<=F){const j=F+1,re=j<Z?D[j].el:K;for(;z<=F;)v(null,D[z]=U?fr(D[z]):In(D[z]),W,re,ce,ie,S,b,U),z++}}else if(z>F)for(;z<=P;)Me(I[z],ce,ie,!0),z++;else{const j=z,re=z,he=new Map;for(z=re;z<=F;z++){const we=D[z]=U?fr(D[z]):In(D[z]);we.key!=null&&he.set(we.key,z)}let me,oe=0;const ve=F-re+1;let Se=!1,be=0;const ae=new Array(ve);for(z=0;z<ve;z++)ae[z]=0;for(z=j;z<=P;z++){const we=I[z];if(oe>=ve){Me(we,ce,ie,!0);continue}let Ue;if(we.key!=null)Ue=he.get(we.key);else for(me=re;me<=F;me++)if(ae[me-re]===0&&oi(we,D[me])){Ue=me;break}Ue===void 0?Me(we,ce,ie,!0):(ae[Ue-re]=z+1,Ue>=be?be=Ue:Se=!0,v(we,D[Ue],W,null,ce,ie,S,b,U),oe++)}const xe=Se?bx(ae):zs;for(me=xe.length-1,z=ve-1;z>=0;z--){const we=re+z,Ue=D[we],nt=we+1<Z?D[we+1].el:K;ae[z]===0?v(null,Ue,W,nt,ce,ie,S,b,U):Se&&(me<0||z!==xe[me]?ge(Ue,W,nt,2):me--)}}},ge=(I,D,W,K,ce=null)=>{const{el:ie,type:S,transition:b,children:U,shapeFlag:z}=I;if(z&6){ge(I.component.subTree,D,W,K);return}if(z&128){I.suspense.move(D,W,K);return}if(z&64){S.move(I,D,W,st);return}if(S===Ht){i(ie,D,W);for(let P=0;P<U.length;P++)ge(U[P],D,W,K);i(I.anchor,D,W);return}if(S===Yr){g(I,D,W);return}if(K!==2&&z&1&&b)if(K===0)b.beforeEnter(ie),i(ie,D,W),an(()=>b.enter(ie),ce);else{const{leave:P,delayLeave:F,afterLeave:j}=b,re=()=>i(ie,D,W),he=()=>{P(ie,()=>{re(),j&&j()})};F?F(ie,re,he):he()}else i(ie,D,W)},Me=(I,D,W,K=!1,ce=!1)=>{const{type:ie,props:S,ref:b,children:U,dynamicChildren:z,shapeFlag:Z,patchFlag:P,dirs:F,cacheIndex:j}=I;if(P===-2&&(ce=!1),b!=null&&ml(b,null,W,I,!0),j!=null&&(D.renderCache[j]=void 0),Z&256){D.ctx.deactivate(I);return}const re=Z&1&&F,he=!_r(I);let me;if(he&&(me=S&&S.onVnodeBeforeUnmount)&&Pn(me,D,I),Z&6)_e(I.component,W,K);else{if(Z&128){I.suspense.unmount(W,K);return}re&&xi(I,null,D,"beforeUnmount"),Z&64?I.type.remove(I,D,W,st,K):z&&!z.hasOnce&&(ie!==Ht||P>0&&P&64)?Ae(z,D,W,!1,!0):(ie===Ht&&P&384||!ce&&Z&16)&&Ae(U,D,W),K&&Ge(I)}(he&&(me=S&&S.onVnodeUnmounted)||re)&&an(()=>{me&&Pn(me,D,I),re&&xi(I,null,D,"unmounted")},W)},Ge=I=>{const{type:D,el:W,anchor:K,transition:ce}=I;if(D===Ht){le(W,K);return}if(D===Yr){y(I);return}const ie=()=>{r(W),ce&&!ce.persisted&&ce.afterLeave&&ce.afterLeave()};if(I.shapeFlag&1&&ce&&!ce.persisted){const{leave:S,delayLeave:b}=ce,U=()=>S(W,ie);b?b(I.el,ie,U):U()}else ie()},le=(I,D)=>{let W;for(;I!==D;)W=f(I),r(I),I=W;r(D)},_e=(I,D,W)=>{const{bum:K,scope:ce,job:ie,subTree:S,um:b,m:U,a:z}=I;_l(U),_l(z),K&&Ws(K),ce.stop(),ie&&(ie.flags|=8,Me(S,I,D,W)),b&&an(b,D),an(()=>{I.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Ae=(I,D,W,K=!1,ce=!1,ie=0)=>{for(let S=ie;S<I.length;S++)Me(I[S],D,W,K,ce)},Be=I=>{if(I.shapeFlag&6)return Be(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const D=f(I.anchor||I.el),W=D&&D[Dm];return W?f(W):D};let ze=!1;const Ie=(I,D,W)=>{I==null?D._vnode&&Me(D._vnode,null,null,!0):v(D._vnode||null,I,D,null,null,null,W),D._vnode=I,ze||(ze=!0,Af(),pl(),ze=!1)},st={p:v,um:Me,m:ge,r:Ge,mt:N,mc:B,pc:G,pbc:x,n:Be,o:n};let $e,q;return e&&([$e,q]=e(st)),{render:Ie,hydrate:$e,createApp:hx(Ie,$e)}}function Cc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Nr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $d(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&$d(o,a)),a.type===vr&&(a.el=o.el)}}function bx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function hg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hg(e)}function _l(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const pg=Symbol.for("v-scx"),mg=()=>js(pg);function ns(n,e){return oa(n,null,e)}function gg(n,e){return oa(n,null,{flush:"post"})}function _g(n,e){return oa(n,null,{flush:"sync"})}function An(n,e,t){return oa(n,e,t)}function oa(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=At({},t);let l;if(aa)if(s==="sync"){const f=mg();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const f=()=>{};return f.stop=ui,f.resume=ui,f.pause=ui,f}const c=en;a.call=(f,p,_)=>Qn(f,c,p,_);let u=!1;s==="post"?a.scheduler=f=>{an(f,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(f,p)=>{p?f():Nd(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const d=h0(n,e,a);return l&&l.push(d),d}function Mx(n,e,t){const i=this.proxy,r=Ct(n)?n.includes(".")?vg(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const o=rs(this),a=oa(r,s.bind(i),t);return o(),a}function vg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Sx(n,e,t=ft){const i=Yt(),r=nn(e),s=Un(e),o=xg(n,e),a=Em((l,c)=>{let u,d=ft,f;return _g(()=>{const p=n[e];wn(u,p)&&(u=p,c())}),{get(){return l(),t.get?t.get(u):u},set(p){const _=t.set?t.set(p):p;if(!wn(_,u)&&!(d!==ft&&wn(p,d)))return;const v=i.vnode.props;v&&(e in v||r in v||s in v)&&(`onUpdate:${e}`in v||`onUpdate:${r}`in v||`onUpdate:${s}`in v)||(u=p,c()),i.emit(`update:${e}`,_),wn(p,_)&&wn(p,d)&&!wn(_,f)&&c(),d=p,f=_}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||ft:a,done:!1}:{done:!0}}}},a}const xg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${nn(e)}Modifiers`]||n[`${Un(e)}Modifiers`];function Ex(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&xg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ct(u)?u.trim():u)),o.number&&(r=t.map(ll)));let a,l=i[a=Gs(e)]||i[a=Gs(nn(e))];!l&&s&&(l=i[a=Gs(Un(e))]),l&&Qn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qn(c,n,6,r)}}function yg(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!je(n)){const l=c=>{const u=yg(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(St(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):At(o,s),St(n)&&i.set(n,o),o)}function ic(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,Un(e))||gt(n,e))}function rl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:v}=n,m=Wo(n);let h,M;try{if(t.shapeFlag&4){const y=r||i,E=y;h=In(c.call(E,y,u,d,p,f,_)),M=a}else{const y=e;h=In(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),M=e.props?a:Tx(a)}}catch(y){Uo.length=0,as(y,n,1),h=Ce(Vt)}let g=h;if(M&&v!==!1){const y=Object.keys(M),{shapeFlag:E}=g;y.length&&E&7&&(s&&y.some(xd)&&(M=Ax(M,s)),g=fi(g,M,!1,!0))}return t.dirs&&(g=fi(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&Wi(g,t.transition),h=g,Wo(m),h}function wx(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(Xi(r)){if(r.type!==Vt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Tx=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},Ax=(n,e)=>{const t={};for(const i in n)(!xd(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Cx(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!ic(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bf(i,o,c):!0:!!o;return!1}function Bf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ic(t,s))return!0}return!1}function qd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const vl=n=>n.__isSuspense;let Uu=0;const Rx={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,c){if(n==null)Lx(e,t,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}Ix(n,e,t,i,r,o,a,l,c)}},hydrate:Dx,normalize:Nx},Px=Rx;function jo(n,e){const t=n.props&&n.props[e];je(t)&&t()}function Lx(n,e,t,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),f=n.suspense=bg(n,r,i,e,d,t,s,o,a,l);c(null,f.pendingBranch=n.ssContent,d,null,i,f,s,o),f.deps>0?(jo(n,"onPending"),jo(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,o),$s(f,n.ssFallback)):f.resolve(!1,!0)}function Ix(n,e,t,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const d=e.suspense=n.suspense;d.vnode=e,e.el=n.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:m,isHydrating:h}=d;if(v)d.pendingBranch=f,oi(f,v)?(l(v,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():m&&(h||(l(_,p,t,i,r,null,s,o,a),$s(d,p)))):(d.pendingId=Uu++,h?(d.isHydrating=!1,d.activeBranch=v):c(v,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),m?(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():(l(_,p,t,i,r,null,s,o,a),$s(d,p))):_&&oi(f,_)?(l(_,f,t,i,r,d,s,o,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0&&d.resolve()));else if(_&&oi(f,_))l(_,f,t,i,r,d,s,o,a),$s(d,f);else if(jo(e,"onPending"),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=Uu++,l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0)d.resolve();else{const{timeout:M,pendingId:g}=d;M>0?setTimeout(()=>{d.pendingId===g&&d.fallback(p)},M):M===0&&d.fallback(p)}}function bg(n,e,t,i,r,s,o,a,l,c,u=!1){const{p:d,m:f,um:p,n:_,o:{parentNode:v,remove:m}}=c;let h;const M=Ux(n);M&&e&&e.pendingBranch&&(h=e.pendingId,e.deps++);const g=n.props?cl(n.props.timeout):void 0,y=s,E={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Uu++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1,A=!1){const{vnode:B,activeBranch:k,pendingBranch:x,pendingId:T,effects:L,parentComponent:X,container:N}=E;let H=!1;E.isHydrating?E.isHydrating=!1:w||(H=k&&x.transition&&x.transition.mode==="out-in",H&&(k.transition.afterLeave=()=>{T===E.pendingId&&(f(x,N,s===y?_(k):s,0),hl(L))}),k&&(v(k.el)===N&&(s=_(k)),p(k,X,E,!0)),H||f(x,N,s,0)),$s(E,x),E.pendingBranch=null,E.isInFallback=!1;let O=E.parent,Q=!1;for(;O;){if(O.pendingBranch){O.effects.push(...L),Q=!0;break}O=O.parent}!Q&&!H&&hl(L),E.effects=[],M&&e&&e.pendingBranch&&h===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),jo(B,"onResolve")},fallback(w){if(!E.pendingBranch)return;const{vnode:A,activeBranch:B,parentComponent:k,container:x,namespace:T}=E;jo(A,"onFallback");const L=_(B),X=()=>{E.isInFallback&&(d(null,w,x,L,k,null,T,a,l),$s(E,w))},N=w.transition&&w.transition.mode==="out-in";N&&(B.transition.afterLeave=X),E.isInFallback=!0,p(B,k,null,!0),N||X()},move(w,A,B){E.activeBranch&&f(E.activeBranch,w,A,B),E.container=w},next(){return E.activeBranch&&_(E.activeBranch)},registerDep(w,A,B){const k=!!E.pendingBranch;k&&E.deps++;const x=w.vnode.el;w.asyncDep.catch(T=>{as(T,w,0)}).then(T=>{if(w.isUnmounted||E.isUnmounted||E.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:L}=w;ku(w,T,!1),x&&(L.el=x);const X=!x&&w.subTree.el;A(w,L,v(x||w.subTree.el),x?null:_(w.subTree),E,o,B),X&&m(X),qd(w,L.el),k&&--E.deps===0&&E.resolve()})},unmount(w,A){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,t,w,A),E.pendingBranch&&p(E.pendingBranch,t,w,A)}};return E}function Dx(n,e,t,i,r,s,o,a,l){const c=e.suspense=bg(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function Nx(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=kf(i?t.default:t),n.ssFallback=i?kf(t.fallback):Ce(Vt)}function kf(n){let e;if(je(n)){const t=is&&n._c;t&&(n._d=!1,Fe()),n=n(),t&&(n._d=!0,e=_n,Sg())}return Ne(n)&&(n=wx(n)),n=In(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Mg(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):hl(n)}function $s(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,qd(i,r))}function Ux(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const Ht=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Yr=Symbol.for("v-stc"),Uo=[];let _n=null;function Fe(n=!1){Uo.push(_n=n?null:[])}function Sg(){Uo.pop(),_n=Uo[Uo.length-1]||null}let is=1;function Ou(n){is+=n,n<0&&_n&&(_n.hasOnce=!0)}function Eg(n){return n.dynamicChildren=is>0?_n||zs:null,Sg(),is>0&&_n&&_n.push(n),n}function yt(n,e,t,i,r,s){return Eg(mt(n,e,t,i,r,s,!0))}function _t(n,e,t,i,r){return Eg(Ce(n,e,t,i,r,!0))}function Xi(n){return n?n.__v_isVNode===!0:!1}function oi(n,e){return n.type===e.type&&n.key===e.key}function Ox(n){}const wg=({key:n})=>n??null,sl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||$t(n)||je(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function mt(n,e=null,t=null,i=0,r=null,s=n===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wg(e),ref:e&&sl(e),scopeId:Jl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(Yd(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),is>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Ce=Fx;function Fx(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Km)&&(n=Vt),Xi(n)){const a=fi(n,e,!0);return t&&Yd(a,t),is>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(n)]=a:_n.push(a)),a.patchFlag=-2,a}if(Xx(n)&&(n=n.__vccOpts),e){e=ls(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=xn(a)),St(l)&&(Zl(l)&&!Ne(l)&&(l=At({},l)),e.style=oo(l))}const o=Ct(n)?1:vl(n)?128:Nm(n)?64:St(n)?4:je(n)?2:0;return mt(n,e,t,i,r,o,s,!0)}function ls(n){return n?Zl(n)||ng(n)?At({},n):n:null}function fi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?un(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wg(c),ref:e&&e.ref?t&&s?Ne(s)?s.concat(sl(e)):[s,sl(e)]:sl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fi(n.ssContent),ssFallback:n.ssFallback&&fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wi(u,l.clone(u)),u}function Jt(n=" ",e=0){return Ce(vr,null,n,e)}function Bx(n,e){const t=Ce(Yr,null,n);return t.staticCount=e,t}function Kr(n="",e=!1){return e?(Fe(),_t(Vt,null,n)):Ce(Vt,null,n)}function In(n){return n==null||typeof n=="boolean"?Ce(Vt):Ne(n)?Ce(Ht,null,n.slice()):Xi(n)?fr(n):Ce(vr,null,String(n))}function fr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fi(n)}function Yd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ng(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[Jt(e)]):t=8);n.children=e,n.shapeFlag|=t}function un(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xn([e.class,i.class]));else if(r==="style")e.style=oo([e.style,i.style]);else if(ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Pn(n,e,t,i=null){Qn(n,e,7,[t,i])}const kx=Qm();let zx=0;function Tg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||kx,s={uid:zx++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(i,r),emitsOptions:yg(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ex.bind(null,s),n.ce&&n.ce(s),s}let en=null;const Yt=()=>en||tn;let xl,Fu;{const n=em(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};xl=e("__VUE_INSTANCE_SETTERS__",t=>en=t),Fu=e("__VUE_SSR_SETTERS__",t=>aa=t)}const rs=n=>{const e=en;return xl(n),n.scope.on(),()=>{n.scope.off(),xl(e)}},Bu=()=>{en&&en.scope.off(),xl(null)};function Ag(n){return n.vnode.shapeFlag&4}let aa=!1;function Cg(n,e=!1,t=!1){e&&Fu(e);const{props:i,children:r}=n.vnode,s=Ag(n);mx(n,i,s,e),xx(n,r,t);const o=s?Hx(n,e):void 0;return e&&Fu(!1),o}function Hx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lu);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Pg(n):null,s=rs(n);Rr();const o=co(i,n,0,[n.props,r]);if(Pr(),s(),bd(o)){if(_r(n)||Fd(n),o.then(Bu,Bu),e)return o.then(a=>{ku(n,a,e)}).catch(a=>{as(a,n,0)});n.asyncDep=o}else ku(n,o,e)}else Rg(n,e)}function ku(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Id(e)),Rg(n,t)}let yl,zu;function Vx(n){yl=n,zu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,$0))}}const Gx=()=>!yl;function Rg(n,e,t){const i=n.type;if(!n.render){if(!e&&yl&&!i.render){const r=i.template||Wd(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:s,delimiters:a},o),l);i.render=yl(r,c)}}n.render=i.render||ui,zu&&zu(n)}{const r=rs(n);Rr();try{ax(n)}finally{Pr(),r()}}}const Wx={get(n,e){return vn(n,"get",""),n[e]}};function Pg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wx),slots:n.slots,emit:n.emit,expose:e}}function la(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Id(bm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in No)return No[t](n)},has(e,t){return t in e||t in No}})):n.proxy}function Hu(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function Xx(n){return je(n)&&"__vccOpts"in n}const Ut=(n,e)=>c0(n,e,aa);function qs(n,e,t){const i=arguments.length;return i===2?St(e)&&!Ne(e)?Xi(e)?Ce(n,null,[e]):Ce(n,e):Ce(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xi(t)&&(t=[t]),Ce(n,e,t))}function jx(){}function $x(n,e,t,i){const r=t[i];if(r&&Lg(r,n))return r;const s=e();return s.memo=n.slice(),s.cacheIndex=i,t[i]=s}function Lg(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(wn(t[i],e[i]))return!1;return is>0&&_n&&_n.push(n),!0}const Ig="3.5.11",qx=ui,Yx=v0,Kx=Os,Zx=Im,Jx={createComponentInstance:Tg,setupComponent:Cg,renderComponentRoot:rl,setCurrentRenderingInstance:Wo,isVNode:Xi,normalizeVNode:In,getComponentPublicInstance:la,ensureValidVNode:Gd,pushWarningContext:p0,popWarningContext:m0},Qx=Jx,ey=null,ty=null,ny=null;/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vu;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{Vu=zf.createPolicy("vue",{createHTML:n=>n})}catch{}const Dg=Vu?n=>Vu.createHTML(n):n=>n,iy="http://www.w3.org/2000/svg",ry="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Hf=Oi&&Oi.createElement("template"),sy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Oi.createElementNS(iy,n):e==="mathml"?Oi.createElementNS(ry,n):t?Oi.createElement(n,{is:t}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hf.innerHTML=Dg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ji="transition",_o="animation",Qs=Symbol("_vtc"),Ng={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ug=At({},Od,Ng),oy=n=>(n.displayName="Transition",n.props=Ug,n),ay=oy((n,{slots:e})=>qs(km,Og(n),e)),Ur=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},Vf=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function Og(n){const e={};for(const L in n)L in Ng||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=ly(r),v=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:M,onEnterCancelled:g,onLeave:y,onLeaveCancelled:E,onBeforeAppear:w=h,onAppear:A=M,onAppearCancelled:B=g}=e,k=(L,X,N)=>{ar(L,X?u:a),ar(L,X?c:o),N&&N()},x=(L,X)=>{L._isLeaving=!1,ar(L,d),ar(L,p),ar(L,f),X&&X()},T=L=>(X,N)=>{const H=L?A:M,O=()=>k(X,L,N);Ur(H,[X,O]),Gf(()=>{ar(X,L?l:s),Di(X,L?u:a),Vf(H)||Wf(X,i,v,O)})};return At(e,{onBeforeEnter(L){Ur(h,[L]),Di(L,s),Di(L,o)},onBeforeAppear(L){Ur(w,[L]),Di(L,l),Di(L,c)},onEnter:T(!1),onAppear:T(!0),onLeave(L,X){L._isLeaving=!0;const N=()=>x(L,X);Di(L,d),Di(L,f),Bg(),Gf(()=>{L._isLeaving&&(ar(L,d),Di(L,p),Vf(y)||Wf(L,i,m,N))}),Ur(y,[L,N])},onEnterCancelled(L){k(L,!1),Ur(g,[L])},onAppearCancelled(L){k(L,!0),Ur(B,[L])},onLeaveCancelled(L){x(L),Ur(E,[L])}})}function ly(n){if(n==null)return null;if(St(n))return[Rc(n.enter),Rc(n.leave)];{const e=Rc(n);return[e,e]}}function Rc(n){return cl(n)}function Di(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Qs]||(n[Qs]=new Set)).add(e)}function ar(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Qs];t&&(t.delete(e),t.size||(n[Qs]=void 0))}function Gf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let cy=0;function Wf(n,e,t,i){const r=n._endId=++cy,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Fg(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Fg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${Ji}Delay`),s=i(`${Ji}Duration`),o=Xf(r,s),a=i(`${_o}Delay`),l=i(`${_o}Duration`),c=Xf(a,l);let u=null,d=0,f=0;e===Ji?o>0&&(u=Ji,d=o,f=s.length):e===_o?c>0&&(u=_o,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?Ji:_o:null,f=u?u===Ji?s.length:l.length:0);const p=u===Ji&&/\b(transform|all)(,|$)/.test(i(`${Ji}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Xf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>jf(t)+jf(n[i])))}function jf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bg(){return document.body.offsetHeight}function uy(n,e,t){const i=n[Qs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bl=Symbol("_vod"),kg=Symbol("_vsh"),rc={beforeMount(n,{value:e},{transition:t}){n[bl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):vo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),vo(n,!0),i.enter(n)):i.leave(n,()=>{vo(n,!1)}):vo(n,e))},beforeUnmount(n,{value:e}){vo(n,e)}};function vo(n,e){n.style.display=e?n[bl]:"none",n[kg]=!e}function dy(){rc.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}}}const zg=Symbol("");function fy(n){const e=Yt();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Ml(s,r))},i=()=>{const r=n(e.proxy);e.ce?Ml(e.ce,r):Gu(e.subTree,r),t(r)};Bd(()=>{gg(i)}),qi(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),uo(()=>r.disconnect())})}function Gu(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Gu(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Ml(n.el,e);else if(n.type===Ht)n.children.forEach(t=>Gu(t,e));else if(n.type===Yr){let{el:t,anchor:i}=n;for(;t&&(Ml(t,e),t!==i);)t=t.nextSibling}}function Ml(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e)t.setProperty(`--${r}`,e[r]),i+=`--${r}: ${e[r]};`;t[zg]=i}}const hy=/(^|;)\s*display\s*:/;function py(n,e,t){const i=n.style,r=Ct(t);let s=!1;if(t&&!r){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ol(i,a,"")}else for(const o in e)t[o]==null&&ol(i,o,"");for(const o in t)o==="display"&&(s=!0),ol(i,o,t[o])}else if(r){if(e!==t){const o=i[zg];o&&(t+=";"+o),i.cssText=t,s=hy.test(t)}}else e&&n.removeAttribute("style");bl in n&&(n[bl]=s?i.display:"",n[kg]&&(i.display="none"))}const $f=/\s*!important$/;function ol(n,e,t){if(Ne(t))t.forEach(i=>ol(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=my(n,e);$f.test(t)?n.setProperty(Un(i),t.replace($f,""),"important"):n[i]=t}}const qf=["Webkit","Moz","ms"],Pc={};function my(n,e){const t=Pc[e];if(t)return t;let i=nn(e);if(i!=="filter"&&i in n)return Pc[e]=i;i=na(i);for(let r=0;r<qf.length;r++){const s=qf[r]+i;if(s in n)return Pc[e]=s}return e}const Yf="http://www.w3.org/1999/xlink";function Kf(n,e,t,i,r,s=Cv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yf,e.slice(6,e.length)):n.setAttributeNS(Yf,e,t):t==null||s&&!tm(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Si(t)?String(t):t)}function Zf(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dg(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=tm(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function ki(n,e,t,i){n.addEventListener(e,t,i)}function gy(n,e,t,i){n.removeEventListener(e,t,i)}const Jf=Symbol("_vei");function _y(n,e,t,i,r=null){const s=n[Jf]||(n[Jf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=vy(e);if(i){const c=s[e]=by(i,r);ki(n,a,c,l)}else o&&(gy(n,a,o,l),s[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function vy(n){let e;if(Qf.test(n)){e={};let i;for(;i=n.match(Qf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Un(n.slice(2)),e]}let Lc=0;const xy=Promise.resolve(),yy=()=>Lc||(xy.then(()=>Lc=0),Lc=Date.now());function by(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qn(My(i,t.value),e,5,[i])};return t.value=n,t.attached=yy(),t}function My(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sy=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?uy(n,i,o):e==="style"?py(n,t,i):ta(e)?xd(e)||_y(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ey(n,e,i,o))?(Zf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?Zf(n,nn(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kf(n,e,i,o))};function Ey(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eh(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eh(e)&&Ct(t)?!1:e in n}const th={};/*! #__NO_SIDE_EFFECTS__ */function Hg(n,e,t){const i=Ze(n,e);Gl(i)&&At(i,e);class r extends sc{constructor(o){super(i,o,t)}}return r.def=i,r}/*! #__NO_SIDE_EFFECTS__ */const wy=(n,e)=>Hg(n,e,Qg),Ty=typeof HTMLElement<"u"?HTMLElement:class{};class sc extends Ty{constructor(e,t={},i=El){super(),this._def=e,this._props=t,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==El?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof sc){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,pi(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,r=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:s,styles:o}=i;let a;if(s&&!Ne(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=cl(this._props[l])),(a||(a=Object.create(null)))[nn(l)]=!0)}this._numberProps=a,r&&this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const t=this._instance&&this._instance.exposed;if(t)for(const i in t)gt(this,i)||Object.defineProperty(this,i,{get:()=>de(t[i])})}_resolveProps(e){const{props:t}=e,i=Ne(t)?t:Object.keys(t||{});for(const r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r]);for(const r of i.map(nn))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(s){this._setProp(r,s,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const t=this.hasAttribute(e);let i=t?this.getAttribute(e):th;const r=nn(e);t&&this._numberProps&&this._numberProps[r]&&(i=cl(i)),this._setProp(r,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,r=!1){t!==this._props[e]&&(t===th?delete this._props[e]:(this._props[e]=t,e==="key"&&this._app&&(this._app._ceVNode.key=t)),r&&this._instance&&this._update(),i&&(t===!0?this.setAttribute(Un(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(Un(e),t+""):t||this.removeAttribute(Un(e))))}_update(){Jg(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const t=Ce(this._def,At(e,this._props));return this._instance||(t.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,Gl(o[0])?At({detail:o},o[0]):{detail:o}))};i.emit=(s,...o)=>{r(s,o),Un(s)!==s&&r(Un(s),o)},this._setParent()}),t}_applyStyles(e,t){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}const i=this._nonce;for(let r=e.length-1;r>=0;r--){const s=document.createElement("style");i&&s.setAttribute("nonce",i),s.textContent=e[r],this.shadowRoot.prepend(s)}}_parseSlots(){const e=this._slots={};let t;for(;t=this.firstChild;){const i=t.nodeType===1&&t.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(t),this.removeChild(t)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),t=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const r=e[i],s=r.getAttribute("name")||"default",o=this._slots[s],a=r.parentNode;if(o)for(const l of o){if(t&&l.nodeType===1){const c=t+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let d;for(;d=u.nextNode();)d.setAttribute(c,"")}a.insertBefore(l,r)}else for(;r.firstChild;)a.insertBefore(r.firstChild,r);a.removeChild(r)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function Vg(n){const e=Yt(),t=e&&e.ce;return t||null}function Ay(){const n=Vg();return n&&n.shadowRoot}function Cy(n="$style"){{const e=Yt();if(!e)return ft;const t=e.type.__cssModules;if(!t)return ft;const i=t[n];return i||ft}}const Gg=new WeakMap,Wg=new WeakMap,Sl=Symbol("_moveCb"),nh=Symbol("_enterCb"),Ry=n=>(delete n.props.mode,n),Py=Ry({name:"TransitionGroup",props:At({},Ug,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Yt(),i=Ud();let r,s;return nc(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Uy(r[0].el,t.vnode.el,o))return;r.forEach(Iy),r.forEach(Dy);const a=r.filter(Ny);Bg(),a.forEach(l=>{const c=l.el,u=c.style;Di(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Sl]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c[Sl]=null,ar(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=pt(n),a=Og(o);let l=o.tag||Ht;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Wi(u,Js(u,a,i,t)),Gg.set(u,u.el.getBoundingClientRect()))}s=e.default?ec(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Wi(u,Js(u,a,i,t))}return Ce(l,null,s)}}}),Ly=Py;function Iy(n){const e=n.el;e[Sl]&&e[Sl](),e[nh]&&e[nh]()}function Dy(n){Wg.set(n,n.el.getBoundingClientRect())}function Ny(n){const e=Gg.get(n),t=Wg.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function Uy(n,e,t){const i=n.cloneNode(),r=n[Qs];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Fg(i);return s.removeChild(i),o}const Tr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Ws(e,t):e};function Oy(n){n.target.composing=!0}function ih(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign"),$o={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Zn]=Tr(r);const s=i||r.props&&r.props.type==="number";ki(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=ll(a)),n[Zn](a)}),t&&ki(n,"change",()=>{n.value=n.value.trim()}),e||(ki(n,"compositionstart",Oy),ki(n,"compositionend",ih),ki(n,"change",ih))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Zn]=Tr(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?ll(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Kd={deep:!0,created(n,e,t){n[Zn]=Tr(t),ki(n,"change",()=>{const i=n._modelValue,r=eo(n),s=n.checked,o=n[Zn];if(Ne(i)){const a=Xl(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(os(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(jg(n,s))})},mounted:rh,beforeUpdate(n,e,t){n[Zn]=Tr(t),rh(n,e,t)}};function rh(n,{value:e},t){n._modelValue=e;let i;Ne(e)?i=Xl(e,t.props.value)>-1:os(e)?i=e.has(t.props.value):i=Er(e,jg(n,!0)),n.checked!==i&&(n.checked=i)}const Zd={created(n,{value:e},t){n.checked=Er(e,t.props.value),n[Zn]=Tr(t),ki(n,"change",()=>{n[Zn](eo(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[Zn]=Tr(i),e!==t&&(n.checked=Er(e,i.props.value))}},Xg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=os(e);ki(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ll(eo(o)):eo(o));n[Zn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,pi(()=>{n._assigning=!1})}),n[Zn]=Tr(i)},mounted(n,{value:e}){sh(n,e)},beforeUpdate(n,e,t){n[Zn]=Tr(t)},updated(n,{value:e}){n._assigning||sh(n,e)}};function sh(n,e){const t=n.multiple,i=Ne(e);if(!(t&&!i&&!os(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=eo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Xl(e,a)>-1}else o.selected=e.has(a);else if(Er(eo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function eo(n){return"_value"in n?n._value:n.value}function jg(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const $g={created(n,e,t){wa(n,e,t,null,"created")},mounted(n,e,t){wa(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){wa(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){wa(n,e,t,i,"updated")}};function qg(n,e){switch(n){case"SELECT":return Xg;case"TEXTAREA":return $o;default:switch(e){case"checkbox":return Kd;case"radio":return Zd;default:return $o}}}function wa(n,e,t,i,r){const o=qg(n.tagName,t.props&&t.props.type)[r];o&&o(n,e,t,i)}function Fy(){$o.getSSRProps=({value:n})=>({value:n}),Zd.getSSRProps=({value:n},e)=>{if(e.props&&Er(e.props.value,n))return{checked:!0}},Kd.getSSRProps=({value:n},e)=>{if(Ne(n)){if(e.props&&Xl(n,e.props.value)>-1)return{checked:!0}}else if(os(n)){if(e.props&&n.has(e.props.value))return{checked:!0}}else if(n)return{checked:!0}},$g.getSSRProps=(n,e)=>{if(typeof e.type!="string")return;const t=qg(e.type.toUpperCase(),e.props&&e.props.type);if(t.getSSRProps)return t.getSSRProps(n,e)}}const By=["ctrl","shift","alt","meta"],ky={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>By.some(t=>n[`${t}Key`]&&!e.includes(t))},qo=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=ky[e[o]];if(a&&a(r,e))return}return n(r,...s)})},zy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hy=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Un(r.key);if(e.some(o=>o===s||zy[o]===s))return n(r)})},Yg=At({patchProp:Sy},sy);let Oo,oh=!1;function Kg(){return Oo||(Oo=cg(Yg))}function Zg(){return Oo=oh?Oo:ug(Yg),oh=!0,Oo}const Jg=(...n)=>{Kg().render(...n)},Vy=(...n)=>{Zg().hydrate(...n)},El=(...n)=>{const e=Kg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=t_(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,e_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Qg=(...n)=>{const e=Zg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=t_(i);if(r)return t(r,!0,e_(r))},e};function e_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function t_(n){return Ct(n)?document.querySelector(n):n}let ah=!1;const Gy=()=>{ah||(ah=!0,Fy(),dy())};/**
* vue v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Wy=()=>{},Xy=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:km,BaseTransitionPropsValidators:Od,Comment:Vt,DeprecationTypes:ny,EffectScope:Sd,ErrorCodes:_0,ErrorTypeStrings:Yx,Fragment:Ht,KeepAlive:H0,ReactiveEffect:zo,Static:Yr,Suspense:Px,Teleport:Um,Text:vr,TrackOpTypes:u0,Transition:ay,TransitionGroup:Ly,TriggerOpTypes:d0,VueElement:sc,assertNumber:g0,callWithAsyncErrorHandling:Qn,callWithErrorHandling:co,camelize:nn,capitalize:na,cloneVNode:fi,compatUtils:ty,compile:Wy,computed:Ut,createApp:El,createBlock:_t,createCommentVNode:Kr,createElementBlock:yt,createElementVNode:mt,createHydrationRenderer:ug,createPropsRestProxy:sx,createRenderer:cg,createSSRApp:Qg,createSlots:Vd,createStaticVNode:Bx,createTextVNode:Jt,createVNode:Ce,customRef:Em,defineAsyncComponent:k0,defineComponent:Ze,defineCustomElement:Hg,defineEmits:Y0,defineExpose:K0,defineModel:Q0,defineOptions:Z0,defineProps:q0,defineSSRCustomElement:wy,defineSlots:J0,devtools:Kx,effect:Lv,effectScope:Ed,getCurrentInstance:Yt,getCurrentScope:wd,getCurrentWatcher:f0,getTransitionRawChildren:ec,guardReactiveProps:ls,h:qs,handleError:as,hasInjectionContext:px,hydrate:Vy,hydrateOnIdle:D0,hydrateOnInteraction:F0,hydrateOnMediaQuery:O0,hydrateOnVisible:U0,initCustomFormatter:jx,initDirectivesForSSR:Gy,inject:js,isMemoSame:Lg,isProxy:Zl,isReactive:gr,isReadonly:wr,isRef:$t,isRuntimeOnly:Gx,isShallow:Gn,isVNode:Xi,markRaw:bm,mergeDefaults:ix,mergeModels:rx,mergeProps:un,nextTick:pi,normalizeClass:xn,normalizeProps:ao,normalizeStyle:oo,onActivated:Hm,onBeforeMount:Bd,onBeforeUnmount:sa,onBeforeUpdate:Wm,onDeactivated:Vm,onErrorCaptured:qm,onMounted:qi,onRenderTracked:$m,onRenderTriggered:jm,onScopeDispose:rm,onServerPrefetch:Xm,onUnmounted:uo,onUpdated:nc,onWatcherCleanup:Am,openBlock:Fe,popScopeId:M0,provide:Xd,proxyRefs:Id,pushScopeId:b0,queuePostFlushCb:hl,reactive:lo,readonly:Pd,ref:vt,registerRuntimeCompiler:Vx,render:Jg,renderList:Hd,renderSlot:dt,resolveComponent:Ym,resolveDirective:X0,resolveDynamicComponent:W0,resolveFilter:ey,resolveTransitionHooks:Js,setBlockTracking:Ou,setDevtoolsHook:Zx,setTransitionHooks:Wi,shallowReactive:ym,shallowReadonly:e0,shallowRef:Mm,ssrContextKey:pg,ssrUtils:Qx,stop:Iv,toDisplayString:ia,toHandlerKey:Gs,toHandlers:j0,toRaw:pt,toRef:wm,toRefs:Dd,toValue:i0,transformVNodeArgs:Ox,triggerRef:n0,unref:de,useAttrs:nx,useCssModule:Cy,useCssVars:fy,useHost:Vg,useId:Ru,useModel:Sx,useSSRContext:mg,useShadowRoot:Ay,useSlots:tx,useTemplateRef:C0,useTransitionState:Ud,vModelCheckbox:Kd,vModelDynamic:$g,vModelRadio:Zd,vModelSelect:Xg,vModelText:$o,vShow:rc,version:Ig,warn:qx,watch:An,watchEffect:ns,watchPostEffect:gg,watchSyncEffect:_g,withAsyncContext:ox,withCtx:De,withDefaults:ex,withDirectives:Ql,withKeys:Hy,withMemo:$x,withModifiers:qo,withScopeId:S0},Symbol.toStringTag,{value:"Module"}));typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const jy=n=>typeof n<"u";function $y(n){return JSON.parse(JSON.stringify(n))}function qy(n,e,t,i={}){var r,s,o;const{clone:a=!1,passive:l=!1,eventName:c,deep:u=!1,defaultValue:d,shouldEmit:f}=i,p=Yt(),_=t||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((o=(s=p==null?void 0:p.proxy)==null?void 0:s.$emit)==null?void 0:o.bind(p==null?void 0:p.proxy));let v=c;v=v||`update:${e.toString()}`;const m=g=>a?typeof a=="function"?a(g):$y(g):g,h=()=>jy(n[e])?m(n[e]):d,M=g=>{f?f(g)&&_(v,g):_(v,g)};if(l){const g=h(),y=vt(g);let E=!1;return An(()=>n[e],w=>{E||(E=!0,y.value=m(w),pi(()=>E=!1))}),An(y,w=>{!E&&(w!==n[e]||u)&&M(w)},{deep:u}),y}else return Ut({get(){return h()},set(g){M(g)}})}function n_(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=n_(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Yy(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=n_(n))&&(i&&(i+=" "),i+=e);return i}const Jd="-",Ky=n=>{const e=Jy(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:o=>{const a=o.split(Jd);return a[0]===""&&a.length!==1&&a.shift(),i_(a,e)||Zy(o)},getConflictingClassGroupIds:(o,a)=>{const l=t[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},i_=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),r=i?i_(n.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=n.join(Jd);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},lh=/^\[(.+)\]$/,Zy=n=>{if(lh.test(n)){const e=lh.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},Jy=n=>{const{theme:e,prefix:t}=n,i={nextPart:new Map,validators:[]};return eb(Object.entries(n.classGroups),t).forEach(([s,o])=>{Wu(o,i,s,e)}),i},Wu=(n,e,t,i)=>{n.forEach(r=>{if(typeof r=="string"){const s=r===""?e:ch(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(Qy(r)){Wu(r(i),e,t,i);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,o])=>{Wu(o,ch(e,s),t,i)})})},ch=(n,e)=>{let t=n;return e.split(Jd).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},Qy=n=>n.isThemeGetter,eb=(n,e)=>e?n.map(([t,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[t,r]}):n,tb=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const r=(s,o)=>{t.set(s,o),e++,e>n&&(e=0,i=t,t=new Map)};return{get(s){let o=t.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){t.has(s)?t.set(s,o):r(s,o)}}},r_="!",nb=n=>{const{separator:e,experimentalParseClassName:t}=n,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,d;for(let m=0;m<a.length;m++){let h=a[m];if(c===0){if(h===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(h==="/"){d=m;continue}}h==="["?c++:h==="]"&&c--}const f=l.length===0?a:a.substring(u),p=f.startsWith(r_),_=p?f.substring(1):f,v=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:_,maybePostfixModifierPosition:v}};return t?a=>t({className:a,parseClassName:o}):o},ib=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e},rb=n=>({cache:tb(n.cacheSize),parseClassName:nb(n),...Ky(n)}),sb=/\s+/,ob=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=n.trim().split(sb);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=t(c);let _=!!p,v=i(_?f.substring(0,p):f);if(!v){if(!_){a=c+(a.length>0?" "+a:a);continue}if(v=i(f),!v){a=c+(a.length>0?" "+a:a);continue}_=!1}const m=ib(u).join(":"),h=d?m+r_:m,M=h+v;if(s.includes(M))continue;s.push(M);const g=r(v,_);for(let y=0;y<g.length;++y){const E=g[y];s.push(h+E)}a=c+(a.length>0?" "+a:a)}return a};function ab(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=s_(e))&&(i&&(i+=" "),i+=t);return i}const s_=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=s_(n[i]))&&(t&&(t+=" "),t+=e);return t};function lb(n,...e){let t,i,r,s=o;function o(l){const c=e.reduce((u,d)=>d(u),n());return t=rb(c),i=t.cache.get,r=t.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=ob(l,t);return r(l,u),u}return function(){return s(ab.apply(null,arguments))}}const It=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},o_=/^\[(?:([a-z-]+):)?(.+)\]$/i,cb=/^\d+\/\d+$/,ub=new Set(["px","full","screen"]),db=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=n=>Ys(n)||ub.has(n)||cb.test(n),Qi=n=>fo(n,"length",Sb),Ys=n=>!!n&&!Number.isNaN(Number(n)),Ic=n=>fo(n,"number",Ys),xo=n=>!!n&&Number.isInteger(Number(n)),gb=n=>n.endsWith("%")&&Ys(n.slice(0,-1)),rt=n=>o_.test(n),er=n=>db.test(n),_b=new Set(["length","size","percentage"]),vb=n=>fo(n,_b,a_),xb=n=>fo(n,"position",a_),yb=new Set(["image","url"]),bb=n=>fo(n,yb,wb),Mb=n=>fo(n,"",Eb),yo=()=>!0,fo=(n,e,t)=>{const i=o_.exec(n);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1},Sb=n=>fb.test(n)&&!hb.test(n),a_=()=>!1,Eb=n=>pb.test(n),wb=n=>mb.test(n),Tb=()=>{const n=It("colors"),e=It("spacing"),t=It("blur"),i=It("brightness"),r=It("borderColor"),s=It("borderRadius"),o=It("borderSpacing"),a=It("borderWidth"),l=It("contrast"),c=It("grayscale"),u=It("hueRotate"),d=It("invert"),f=It("gap"),p=It("gradientColorStops"),_=It("gradientColorStopPositions"),v=It("inset"),m=It("margin"),h=It("opacity"),M=It("padding"),g=It("saturate"),y=It("scale"),E=It("sepia"),w=It("skew"),A=It("space"),B=It("translate"),k=()=>["auto","contain","none"],x=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto",rt,e],L=()=>[rt,e],X=()=>["",Ti,Qi],N=()=>["auto",Ys,rt],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>["start","end","center","between","around","evenly","stretch"],se=()=>["","0",rt],pe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ge=()=>[Ys,rt];return{cacheSize:500,separator:":",theme:{colors:[yo],spacing:[Ti,Qi],blur:["none","",er,rt],brightness:ge(),borderColor:[n],borderRadius:["none","","full",er,rt],borderSpacing:L(),borderWidth:X(),contrast:ge(),grayscale:se(),hueRotate:ge(),invert:se(),gap:L(),gradientColorStops:[n],gradientColorStopPositions:[gb,Qi],inset:T(),margin:T(),opacity:ge(),padding:L(),saturate:ge(),scale:ge(),sepia:se(),skew:ge(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",rt]}],container:["container"],columns:[{columns:[er]}],"break-after":[{"break-after":pe()}],"break-before":[{"break-before":pe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),rt]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xo,rt]}],basis:[{basis:T()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",rt]}],grow:[{grow:se()}],shrink:[{shrink:se()}],order:[{order:["first","last","none",xo,rt]}],"grid-cols":[{"grid-cols":[yo]}],"col-start-end":[{col:["auto",{span:["full",xo,rt]},rt]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[yo]}],"row-start-end":[{row:["auto",{span:[xo,rt]},rt]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",rt]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",rt]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...G()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...G(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...G(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",rt,e]}],"min-w":[{"min-w":[rt,e,"min","max","fit"]}],"max-w":[{"max-w":[rt,e,"none","full","min","max","fit","prose",{screen:[er]},er]}],h:[{h:[rt,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[rt,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[rt,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[rt,e,"auto","min","max","fit"]}],"font-size":[{text:["base",er,Qi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ic]}],"font-family":[{font:[yo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",rt]}],"line-clamp":[{"line-clamp":["none",Ys,Ic]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ti,rt]}],"list-image":[{"list-image":["none",rt]}],"list-style-type":[{list:["none","disc","decimal",rt]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ti,Qi]}],"underline-offset":[{"underline-offset":["auto",Ti,rt]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",rt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",rt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),xb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",vb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},bb]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:O()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[Ti,rt]}],"outline-w":[{outline:[Ti,Qi]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Ti,Qi]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",er,Mb]}],"shadow-color":[{shadow:[yo]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",er,rt]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[g]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",rt]}],duration:[{duration:ge()}],ease:[{ease:["linear","in","out","in-out",rt]}],delay:[{delay:ge()}],animate:[{animate:["none","spin","ping","pulse","bounce",rt]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[xo,rt]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[w]}],"skew-y":[{"skew-y":[w]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",rt]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",rt]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",rt]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Ti,Qi,Ic]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Ab=lb(Tb);function Bn(...n){return Ab(Yy(n))}const Cb=Ze({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,r=qy(t,"modelValue",e,{passive:!0,defaultValue:t.defaultValue});return(s,o)=>Ql((Fe(),yt("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>$t(r)?r.value=a:null),class:xn(de(Bn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t.class))},null,2)),[[$o,de(r)]])}}),Fi=class Fi{static set navigationBar(e){Fi.g_navigator=e}static set viewport(e){this.g_threeview=e}static get viewport(){return this.g_threeview}static get navigationBar(){return Fi.g_navigator}static set database(e){Fi.g_database=e}static get database(){return Fi.g_database}};ne(Fi,"g_database"),ne(Fi,"g_navigator"),ne(Fi,"g_threeview");let Qe=Fi;const Rb="/tools/mmqrcode.png",Pb={class:"relative w-full overflow-auto"},Lb=Ze({__name:"Table",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("div",Pb,[mt("table",{class:xn(de(Bn)("w-full caption-bottom text-sm",e.class))},[dt(t.$slots,"default")],2)]))}}),Ib=Ze({__name:"TableBody",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("tbody",{class:xn(de(Bn)("[&_tr:last-child]:border-0",e.class))},[dt(t.$slots,"default")],2))}}),_i=Ze({__name:"TableCell",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("td",{class:xn(de(Bn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",e.class))},[dt(t.$slots,"default")],2))}}),uh=Ze({__name:"TableHead",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("th",{class:xn(de(Bn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",e.class))},[dt(t.$slots,"default")],2))}}),Db=Ze({__name:"TableHeader",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("thead",{class:xn(de(Bn)("[&_tr]:border-b",e.class))},[dt(t.$slots,"default")],2))}}),hs=Ze({__name:"TableRow",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("tr",{class:xn(de(Bn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e.class))},[dt(t.$slots,"default")],2))}});function l_(n,e){const t=typeof n=="string"&&!e?`${n}Context`:e,i=Symbol(t);return[r=>{const s=js(i,r);if(s||s===null)return s;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(n)?`one of the following components: ${n.join(", ")}`:`\`${n}\``}`)},r=>(Xd(i,r),r)]}function c_(n,e,t){const i=t.originalEvent.target,r=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&i.addEventListener(n,e,{once:!0}),i.dispatchEvent(r)}function u_(n){return wd()?(rm(n),!0):!1}function Nb(n){let e=!1,t;const i=Ed(!0);return(...r)=>(e||(t=i.run(()=>n(...r)),e=!0),t)}function Ub(n){let e=0,t,i;const r=()=>{e-=1,i&&e<=0&&(i.stop(),t=void 0,i=void 0)};return(...s)=>(e+=1,t||(i=Ed(!0),t=i.run(()=>n(...s))),u_(r),t)}function Qd(n){return typeof n=="function"?n():de(n)}const cs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ob=n=>typeof n<"u",Fb=Object.prototype.toString,Bb=n=>Fb.call(n)==="[object Object]",kb=()=>{},dh=zb();function zb(){var n,e;return cs&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Hb(n){return Yt()}function Vb(n,e){Hb()&&sa(n,e)}function oc(n){var e;const t=Qd(n);return(e=t==null?void 0:t.$el)!=null?e:t}const d_=cs?window:void 0;function f_(...n){let e,t,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,r]=n,e=d_):[e,t,i,r]=n,!e)return kb;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=An(()=>[oc(e),Qd(r)],([u,d])=>{if(o(),!u)return;const f=Bb(d)?{...d}:d;s.push(...t.flatMap(p=>i.map(_=>a(u,p,_,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return u_(c),c}function Gb(n){return typeof n=="function"?n:typeof n=="string"?e=>e.key===n:Array.isArray(n)?e=>n.includes(e.key):()=>!0}function Wb(...n){let e,t,i={};n.length===3?(e=n[0],t=n[1],i=n[2]):n.length===2?typeof n[1]=="object"?(e=!0,t=n[0],i=n[1]):(e=n[0],t=n[1]):(e=!0,t=n[0]);const{target:r=d_,eventName:s="keydown",passive:o=!1,dedupe:a=!1}=i,l=Gb(e);return f_(r,s,c=>{c.repeat&&Qd(a)||l(c)&&t(c)},o)}function Xb(){const n=vt(!1),e=Yt();return e&&qi(()=>{n.value=!0},e),n}function jb(n){return JSON.parse(JSON.stringify(n))}function $b(n,e,t,i={}){var r,s,o;const{clone:a=!1,passive:l=!1,eventName:c,deep:u=!1,defaultValue:d,shouldEmit:f}=i,p=Yt(),_=t||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((o=(s=p==null?void 0:p.proxy)==null?void 0:s.$emit)==null?void 0:o.bind(p==null?void 0:p.proxy));let v=c;v=v||`update:${e.toString()}`;const m=g=>a?typeof a=="function"?a(g):jb(g):g,h=()=>Ob(n[e])?m(n[e]):d,M=g=>{f?f(g)&&_(v,g):_(v,g)};if(l){const g=h(),y=vt(g);let E=!1;return An(()=>n[e],w=>{E||(E=!0,y.value=m(w),pi(()=>E=!1))}),An(y,w=>{!E&&(w!==n[e]||u)&&M(w)},{deep:u}),y}else return Ut({get(){return h()},set(g){M(g)}})}function ef(n){return n?n.flatMap(e=>e.type===Ht?ef(e.children):[e]):[]}function Dc(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Xu(n,e,t=".",i){if(!Dc(e))return Xu(n,{},t);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Dc(o)&&Dc(r[s])?r[s]=Xu(o,r[s],(t?`${t}.`:"")+s.toString()):r[s]=o)}return r}function qb(n){return(...e)=>e.reduce((t,i)=>Xu(t,i,""),{})}const Yb=qb(),[h_,RR]=l_("ConfigProvider");let Kb="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Zb=(n=21)=>{let e="",t=n;for(;t--;)e+=Kb[Math.random()*64|0];return e};const Jb=Ub(()=>{const n=vt(new Map),e=vt(),t=Ut(()=>{for(const o of n.value.values())if(o)return!0;return!1}),i=h_({scrollBody:vt(!0)});let r=null;const s=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",dh&&(r==null||r()),e.value=void 0};return An(t,(o,a)=>{var l;if(!cs)return;if(!o){a&&s();return}e.value===void 0&&(e.value=document.body.style.overflow);const c=window.innerWidth-document.documentElement.clientWidth,u={padding:c,margin:0},d=(l=i.scrollBody)!=null&&l.value?typeof i.scrollBody.value=="object"?Yb({padding:i.scrollBody.value.padding===!0?c:i.scrollBody.value.padding,margin:i.scrollBody.value.margin===!0?c:i.scrollBody.value.margin},u):u:{padding:0,margin:0};c>0&&(document.body.style.paddingRight=`${d.padding}px`,document.body.style.marginRight=`${d.margin}px`,document.body.style.setProperty("--scrollbar-width",`${c}px`),document.body.style.overflow="hidden"),dh&&(r=f_(document,"touchmove",f=>{var p;f.target===document.documentElement&&(f.touches.length>1||(p=f.preventDefault)==null||p.call(f))},{passive:!1})),pi(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),n});function Qb(n){const e=Zb(6),t=Jb();t.value.set(e,n);const i=Ut({get:()=>t.value.get(e)??!1,set:r=>t.value.set(e,r)});return Vb(()=>{t.value.delete(e)}),i}function ac(n){const e=Yt(),t=e==null?void 0:e.type.emits,i={};return t!=null&&t.length||console.warn(`No emitted event found. Please check component: ${e==null?void 0:e.type.__name}`),t==null||t.forEach(r=>{i[Gs(nn(r))]=(...s)=>n(r,...s)}),i}function p_(n){const e=Yt(),t=Object.keys((e==null?void 0:e.type.props)??{}).reduce((r,s)=>{const o=(e==null?void 0:e.type.props[s]).default;return o!==void 0&&(r[s]=o),r},{}),i=wm(n);return Ut(()=>{const r={},s=(e==null?void 0:e.vnode.props)??{};return Object.keys(s).forEach(o=>{r[nn(o)]=s[o]}),Object.keys({...t,...r}).reduce((o,a)=>(i.value[a]!==void 0&&(o[a]=i.value[a]),o),{})})}function m_(n,e){const t=p_(n),i=e?ac(e):{};return Ut(()=>({...t.value,...i}))}function ei(){const n=Yt(),e=vt(),t=Ut(()=>{var o,a;return["#text","#comment"].includes((o=e.value)==null?void 0:o.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:oc(e)}),i=Object.assign({},n.exposed),r={};for(const o in n.props)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>n.props[o]});if(Object.keys(i).length>0)for(const o in i)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>i[o]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>n.vnode.el}),n.exposed=r;function s(o){e.value=o,!(o instanceof Element||!o)&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>o.$el}),n.exposed=r)}return{forwardRef:s,currentRef:e,currentElement:t}}var eM=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},ps=new WeakMap,Ta=new WeakMap,Aa={},Nc=0,g_=function(n){return n&&(n.host||g_(n.parentNode))},tM=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=g_(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},nM=function(n,e,t,i){var r=tM(e,Array.isArray(n)?n:[n]);Aa[t]||(Aa[t]=new WeakMap);var s=Aa[t],o=[],a=new Set,l=new Set(r),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};r.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))u(f);else try{var p=f.getAttribute(i),_=p!==null&&p!=="false",v=(ps.get(f)||0)+1,m=(s.get(f)||0)+1;ps.set(f,v),s.set(f,m),o.push(f),v===1&&_&&Ta.set(f,!0),m===1&&f.setAttribute(t,"true"),_||f.setAttribute(i,"true")}catch(h){console.error("aria-hidden: cannot operate on ",f,h)}})};return u(e),a.clear(),Nc++,function(){o.forEach(function(d){var f=ps.get(d)-1,p=s.get(d)-1;ps.set(d,f),s.set(d,p),f||(Ta.has(d)||d.removeAttribute(i),Ta.delete(d)),p||d.removeAttribute(t)}),Nc--,Nc||(ps=new WeakMap,ps=new WeakMap,Ta=new WeakMap,Aa={})}},iM=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),r=eM(n);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live]"))),nM(i,r,t,"aria-hidden")):function(){return null}};function rM(n){let e;An(()=>oc(n),t=>{t?e=iM(t):e&&e()}),uo(()=>{e&&e()})}let sM=0;function ju(n,e="radix"){const t=h_({useId:void 0});return Ru?`${e}-${Ru()}`:t.useId?`${e}-${t.useId()}`:`${e}-${++sM}`}function oM(n,e){const t=vt(n);function i(r){return e[t.value][r]??t.value}return{state:t,dispatch:r=>{t.value=i(r)}}}const aM=Ze({name:"PrimitiveSlot",inheritAttrs:!1,setup(n,{attrs:e,slots:t}){return()=>{var i,r;if(!t.default)return null;const s=ef(t.default()),o=s.findIndex(u=>u.type!==Vt);if(o===-1)return s;const a=s[o];(i=a.props)==null||delete i.ref;const l=a.props?un(e,a.props):e;e.class&&(r=a.props)!=null&&r.class&&delete a.props.class;const c=fi(a,l);for(const u in l)u.startsWith("on")&&(c.props||(c.props={}),c.props[u]=l[u]);return s.length===1?c:(s[o]=c,s)}}}),Yi=Ze({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(n,{attrs:e,slots:t}){const i=n.asChild?"template":n.as;return typeof i=="string"&&["area","img","input"].includes(i)?()=>qs(i,e):i!=="template"?()=>qs(n.as,e,{default:t.default}):()=>qs(aM,e,{default:t.default})}});function lM(n,e){const t=vt({}),i=vt("none"),r=n.value?"mounted":"unmounted",{state:s,dispatch:o}=oM(r,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),a=f=>{var p;if(cs){const _=new CustomEvent(f,{bubbles:!1,cancelable:!1});(p=e.value)==null||p.dispatchEvent(_)}};An(n,async(f,p)=>{var _;const v=p!==f;if(await pi(),v){const m=i.value,h=Ca(e.value);f?(o("MOUNT"),a("enter"),h==="none"&&a("after-enter")):h==="none"||((_=t.value)==null?void 0:_.display)==="none"?(o("UNMOUNT"),a("leave"),a("after-leave")):p&&m!==h?(o("ANIMATION_OUT"),a("leave")):(o("UNMOUNT"),a("after-leave"))}},{immediate:!0});const l=f=>{const p=Ca(e.value),_=p.includes(f.animationName),v=s.value==="mounted"?"enter":"leave";f.target===e.value&&_&&(a(`after-${v}`),o("ANIMATION_END")),f.target===e.value&&p==="none"&&o("ANIMATION_END")},c=f=>{f.target===e.value&&(i.value=Ca(e.value))},u=An(e,(f,p)=>{f?(t.value=getComputedStyle(f),f.addEventListener("animationstart",c),f.addEventListener("animationcancel",l),f.addEventListener("animationend",l)):(o("ANIMATION_END"),p==null||p.removeEventListener("animationstart",c),p==null||p.removeEventListener("animationcancel",l),p==null||p.removeEventListener("animationend",l))},{immediate:!0}),d=An(s,()=>{const f=Ca(e.value);i.value=s.value==="mounted"?f:"none"});return uo(()=>{u(),d()}),{isPresent:Ut(()=>["mounted","unmountSuspended"].includes(s.value))}}function Ca(n){return n&&getComputedStyle(n).animationName||"none"}const __=Ze({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(n,{slots:e,expose:t}){var i;const{present:r,forceMount:s}=Dd(n),o=vt(),{isPresent:a}=lM(r,o);t({present:a});let l=e.default({present:a});l=ef(l||[]);const c=Yt();if(l&&(l==null?void 0:l.length)>1){const u=(i=c==null?void 0:c.parent)!=null&&i.type.name?`<${c.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${u}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}return()=>s.value||r.value||a.value?qs(e.default({present:a})[0],{ref:u=>{const d=oc(u);return typeof(d==null?void 0:d.hasAttribute)>"u"||(d!=null&&d.hasAttribute("data-radix-popper-content-wrapper")?o.value=d.firstElementChild:o.value=d),d}}):null}}),[Ki,cM]=l_("DialogRoot"),uM=Ze({__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(n,{emit:e}){const t=n,i=$b(t,"open",e,{defaultValue:t.defaultOpen,passive:t.open===void 0}),r=vt(),s=vt(),{modal:o}=Dd(t);return cM({open:i,modal:o,openModal:()=>{i.value=!0},onOpenChange:a=>{i.value=a},onOpenToggle:()=>{i.value=!i.value},contentId:"",titleId:"",descriptionId:"",triggerElement:r,contentElement:s}),(a,l)=>dt(a.$slots,"default",{open:de(i)})}}),dM=Ze({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(n){const e=n,t=Ki(),{forwardRef:i,currentElement:r}=ei();return t.contentId||(t.contentId=ju(void 0,"radix-vue-dialog-content")),qi(()=>{t.triggerElement.value=r.value}),(s,o)=>(Fe(),_t(de(Yi),un(e,{ref:de(i),type:s.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":de(t).open.value||!1,"aria-controls":de(t).open.value?de(t).contentId:void 0,"data-state":de(t).open.value?"open":"closed",onClick:de(t).onOpenToggle}),{default:De(()=>[dt(s.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),fM=Ze({__name:"Teleport",props:{to:{default:"body"},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(n){const e=Xb();return(t,i)=>de(e)||t.forceMount?(Fe(),_t(Um,{key:0,to:t.to,disabled:t.disabled},[dt(t.$slots,"default")],8,["to","disabled"])):Kr("",!0)}}),hM=Ze({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(n){const e=n;return(t,i)=>(Fe(),_t(de(fM),ao(ls(e)),{default:De(()=>[dt(t.$slots,"default")]),_:3},16))}}),pM="dismissableLayer.pointerDownOutside",mM="dismissableLayer.focusOutside";function v_(n,e){const t=e.closest("[data-dismissable-layer]"),i=n.dataset.dismissableLayer===""?n:n.querySelector("[data-dismissable-layer]"),r=Array.from(n.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(t&&i===t||r.indexOf(i)<r.indexOf(t))}function gM(n,e){var t;const i=((t=e==null?void 0:e.value)==null?void 0:t.ownerDocument)??(globalThis==null?void 0:globalThis.document),r=vt(!1),s=vt(()=>{});return ns(o=>{if(!cs)return;const a=async c=>{const u=c.target;if(e!=null&&e.value){if(v_(e.value,u)){r.value=!1;return}if(c.target&&!r.value){let d=function(){c_(pM,n,f)};const f={originalEvent:c};c.pointerType==="touch"?(i.removeEventListener("click",s.value),s.value=d,i.addEventListener("click",s.value,{once:!0})):d()}else i.removeEventListener("click",s.value);r.value=!1}},l=window.setTimeout(()=>{i.addEventListener("pointerdown",a)},0);o(()=>{window.clearTimeout(l),i.removeEventListener("pointerdown",a),i.removeEventListener("click",s.value)})}),{onPointerDownCapture:()=>r.value=!0}}function _M(n,e){var t;const i=((t=e==null?void 0:e.value)==null?void 0:t.ownerDocument)??(globalThis==null?void 0:globalThis.document),r=vt(!1);return ns(s=>{if(!cs)return;const o=async a=>{e!=null&&e.value&&(await pi(),!(!e.value||v_(e.value,a.target))&&a.target&&!r.value&&c_(mM,n,{originalEvent:a}))};i.addEventListener("focusin",o),s(()=>i.removeEventListener("focusin",o))}),{onFocusCapture:()=>r.value=!0,onBlurCapture:()=>r.value=!1}}const Ai=lo({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),vM=Ze({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(n,{emit:e}){const t=n,i=e,{forwardRef:r,currentElement:s}=ei(),o=Ut(()=>{var _;return((_=s.value)==null?void 0:_.ownerDocument)??globalThis.document}),a=Ut(()=>Ai.layersRoot),l=Ut(()=>s.value?Array.from(a.value).indexOf(s.value):-1),c=Ut(()=>Ai.layersWithOutsidePointerEventsDisabled.size>0),u=Ut(()=>{const _=Array.from(a.value),[v]=[...Ai.layersWithOutsidePointerEventsDisabled].slice(-1),m=_.indexOf(v);return l.value>=m}),d=gM(async _=>{const v=[...Ai.branches].some(m=>m==null?void 0:m.contains(_.target));!u.value||v||(i("pointerDownOutside",_),i("interactOutside",_),await pi(),_.defaultPrevented||i("dismiss"))},s),f=_M(_=>{[...Ai.branches].some(v=>v==null?void 0:v.contains(_.target))||(i("focusOutside",_),i("interactOutside",_),_.defaultPrevented||i("dismiss"))},s);Wb("Escape",_=>{l.value===a.value.size-1&&(i("escapeKeyDown",_),_.defaultPrevented||i("dismiss"))});let p;return ns(_=>{s.value&&(t.disableOutsidePointerEvents&&(Ai.layersWithOutsidePointerEventsDisabled.size===0&&(p=o.value.body.style.pointerEvents,o.value.body.style.pointerEvents="none"),Ai.layersWithOutsidePointerEventsDisabled.add(s.value)),a.value.add(s.value),_(()=>{t.disableOutsidePointerEvents&&Ai.layersWithOutsidePointerEventsDisabled.size===1&&(o.value.body.style.pointerEvents=p)}))}),ns(_=>{_(()=>{s.value&&(a.value.delete(s.value),Ai.layersWithOutsidePointerEventsDisabled.delete(s.value))})}),(_,v)=>(Fe(),_t(de(Yi),{ref:de(r),"as-child":_.asChild,as:_.as,"data-dismissable-layer":"",style:oo({pointerEvents:c.value?u.value?"auto":"none":void 0}),onFocusCapture:de(f).onFocusCapture,onBlurCapture:de(f).onBlurCapture,onPointerdownCapture:de(d).onPointerDownCapture},{default:De(()=>[dt(_.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),Uc="focusScope.autoFocusOnMount",Oc="focusScope.autoFocusOnUnmount",fh={bubbles:!1,cancelable:!0};function xM(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(lr(i,{select:e}),document.activeElement!==t)return!0}function yM(n){const e=x_(n),t=hh(e,n),i=hh(e.reverse(),n);return[t,i]}function x_(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function hh(n,e){for(const t of n)if(!bM(t,{upTo:e}))return t}function bM(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function MM(n){return n instanceof HTMLInputElement&&"select"in n}function lr(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&MM(n)&&e&&n.select()}}const SM=Nb(()=>vt([]));function EM(){const n=SM();return{add(e){const t=n.value[0];e!==t&&(t==null||t.pause()),n.value=ph(n.value,e),n.value.unshift(e)},remove(e){var t;n.value=ph(n.value,e),(t=n.value[0])==null||t.resume()}}}function ph(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function wM(n){return n.filter(e=>e.tagName!=="A")}const TM=Ze({__name:"FocusScope",props:{loop:{type:Boolean,default:!1},trapped:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["mountAutoFocus","unmountAutoFocus"],setup(n,{emit:e}){const t=n,i=e,{currentRef:r,currentElement:s}=ei(),o=vt(null),a=EM(),l=lo({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});ns(u=>{if(!cs)return;const d=s.value;if(!t.trapped)return;function f(m){if(l.paused||!d)return;const h=m.target;d.contains(h)?o.value=h:lr(o.value,{select:!0})}function p(m){if(l.paused||!d)return;const h=m.relatedTarget;h!==null&&(d.contains(h)||lr(o.value,{select:!0}))}function _(m){d.contains(o.value)||lr(d)}document.addEventListener("focusin",f),document.addEventListener("focusout",p);const v=new MutationObserver(_);d&&v.observe(d,{childList:!0,subtree:!0}),u(()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",p),v.disconnect()})}),ns(async u=>{const d=s.value;if(await pi(),!d)return;a.add(l);const f=document.activeElement;if(!d.contains(f)){const p=new CustomEvent(Uc,fh);d.addEventListener(Uc,_=>i("mountAutoFocus",_)),d.dispatchEvent(p),p.defaultPrevented||(xM(wM(x_(d)),{select:!0}),document.activeElement===f&&lr(d))}u(()=>{d.removeEventListener(Uc,v=>i("mountAutoFocus",v));const p=new CustomEvent(Oc,fh),_=v=>{i("unmountAutoFocus",v)};d.addEventListener(Oc,_),d.dispatchEvent(p),setTimeout(()=>{p.defaultPrevented||lr(f??document.body,{select:!0}),d.removeEventListener(Oc,_),a.remove(l)},0)})});function c(u){if(!t.loop&&!t.trapped||l.paused)return;const d=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,f=document.activeElement;if(d&&f){const p=u.currentTarget,[_,v]=yM(p);_&&v?!u.shiftKey&&f===v?(u.preventDefault(),t.loop&&lr(_,{select:!0})):u.shiftKey&&f===_&&(u.preventDefault(),t.loop&&lr(v,{select:!0})):f===p&&u.preventDefault()}}return(u,d)=>(Fe(),_t(de(Yi),{ref_key:"currentRef",ref:r,tabindex:"-1","as-child":u.asChild,as:u.as,onKeydown:c},{default:De(()=>[dt(u.$slots,"default")]),_:3},8,["as-child","as"]))}});function AM(n){return n?"open":"closed"}const y_=Ze({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,r=Ki(),{forwardRef:s,currentElement:o}=ei();return r.titleId||(r.titleId=ju(void 0,"radix-vue-dialog-title")),r.descriptionId||(r.descriptionId=ju(void 0,"radix-vue-dialog-description")),qi(()=>{r.contentElement=o,document.activeElement!==document.body&&(r.triggerElement.value=document.activeElement)}),(a,l)=>(Fe(),_t(de(TM),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:l[5]||(l[5]=c=>i("openAutoFocus",c)),onUnmountAutoFocus:l[6]||(l[6]=c=>i("closeAutoFocus",c))},{default:De(()=>[Ce(de(vM),un({id:de(r).contentId,ref:de(s),as:a.as,"as-child":a.asChild,"disable-outside-pointer-events":a.disableOutsidePointerEvents,role:"dialog","aria-describedby":de(r).descriptionId,"aria-labelledby":de(r).titleId,"data-state":de(AM)(de(r).open.value)},a.$attrs,{onDismiss:l[0]||(l[0]=c=>de(r).onOpenChange(!1)),onEscapeKeyDown:l[1]||(l[1]=c=>i("escapeKeyDown",c)),onFocusOutside:l[2]||(l[2]=c=>i("focusOutside",c)),onInteractOutside:l[3]||(l[3]=c=>i("interactOutside",c)),onPointerDownOutside:l[4]||(l[4]=c=>i("pointerDownOutside",c))}),{default:De(()=>[dt(a.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),CM=Ze({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,r=Ki(),s=ac(i),{forwardRef:o,currentElement:a}=ei();return rM(a),(l,c)=>(Fe(),_t(y_,un({...t,...de(s)},{ref:de(o),"trap-focus":de(r).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:c[0]||(c[0]=u=>{var d;u.defaultPrevented||(u.preventDefault(),(d=de(r).triggerElement.value)==null||d.focus())}),onPointerDownOutside:c[1]||(c[1]=u=>{const d=u.detail.originalEvent,f=d.button===0&&d.ctrlKey===!0;(d.button===2||f)&&u.preventDefault()}),onFocusOutside:c[2]||(c[2]=u=>{u.preventDefault()})}),{default:De(()=>[dt(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),RM=Ze({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=ac(e);ei();const r=Ki(),s=vt(!1),o=vt(!1);return(a,l)=>(Fe(),_t(y_,un({...t,...de(i)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:l[0]||(l[0]=c=>{var u;c.defaultPrevented||(s.value||(u=de(r).triggerElement.value)==null||u.focus(),c.preventDefault()),s.value=!1,o.value=!1}),onInteractOutside:l[1]||(l[1]=c=>{var u;c.defaultPrevented||(s.value=!0,c.detail.originalEvent.type==="pointerdown"&&(o.value=!0));const d=c.target;(u=de(r).triggerElement.value)!=null&&u.contains(d)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&o.value&&c.preventDefault()})}),{default:De(()=>[dt(a.$slots,"default")]),_:3},16))}}),PM=Ze({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,r=Ki(),s=ac(i),{forwardRef:o}=ei();return(a,l)=>(Fe(),_t(de(__),{present:a.forceMount||de(r).open.value},{default:De(()=>[de(r).modal.value?(Fe(),_t(CM,un({key:0,ref:de(o)},{...t,...de(s),...a.$attrs}),{default:De(()=>[dt(a.$slots,"default")]),_:3},16)):(Fe(),_t(RM,un({key:1,ref:de(o)},{...t,...de(s),...a.$attrs}),{default:De(()=>[dt(a.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),LM=Ze({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(n){const e=Ki();return Qb(!0),ei(),(t,i)=>(Fe(),_t(de(Yi),{as:t.as,"as-child":t.asChild,"data-state":de(e).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:De(()=>[dt(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),IM=Ze({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const e=Ki(),{forwardRef:t}=ei();return(i,r)=>{var s;return(s=de(e))!=null&&s.modal.value?(Fe(),_t(de(__),{key:0,present:i.forceMount||de(e).open.value},{default:De(()=>[Ce(LM,un(i.$attrs,{ref:de(t),as:i.as,"as-child":i.asChild}),{default:De(()=>[dt(i.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):Kr("",!0)}}}),b_=Ze({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(n){const e=n;ei();const t=Ki();return(i,r)=>(Fe(),_t(de(Yi),un(e,{type:i.as==="button"?"button":void 0,onClick:r[0]||(r[0]=s=>de(t).onOpenChange(!1))}),{default:De(()=>[dt(i.$slots,"default")]),_:3},16,["type"]))}}),DM=Ze({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(n){const e=n,t=Ki();return ei(),(i,r)=>(Fe(),_t(de(Yi),un(e,{id:de(t).titleId}),{default:De(()=>[dt(i.$slots,"default")]),_:3},16,["id"]))}}),NM=Ze({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(n){const e=n;return ei(),(t,i)=>(Fe(),_t(de(Yi),un(e,{onMousedown:i[0]||(i[0]=r=>{!r.defaultPrevented&&r.detail>1&&r.preventDefault()})}),{default:De(()=>[dt(t.$slots,"default")]),_:3},16))}}),UM=Ze({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const e=n,t=["horizontal","vertical"];function i(a){return t.includes(a)}const r=Ut(()=>i(e.orientation)?e.orientation:"horizontal"),s=Ut(()=>r.value==="vertical"?e.orientation:void 0),o=Ut(()=>e.decorative?{role:"none"}:{"aria-orientation":s.value,role:"separator"});return(a,l)=>(Fe(),_t(de(Yi),un({as:a.as,"as-child":a.asChild,"data-orientation":r.value},o.value),{default:De(()=>[dt(a.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),OM=Ze({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const e=n;return(t,i)=>(Fe(),_t(UM,ao(ls(e)),{default:De(()=>[dt(t.$slots,"default")]),_:3},16))}});function FM(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}FM();const M_=Ze({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(n){const e=n,t=Ut(()=>{const{class:i,...r}=e;return r});return(i,r)=>(Fe(),_t(de(NM),un(t.value,{class:de(Bn)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:De(()=>[dt(i.$slots,"default")]),_:3},16,["class"]))}});function S_(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=S_(n[e]))&&(i&&(i+=" "),i+=t);else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}function BM(){for(var n,e,t=0,i="";t<arguments.length;)(n=arguments[t++])&&(e=S_(n))&&(i&&(i+=" "),i+=e);return i}const mh=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,gh=BM,kM=(n,e)=>t=>{var i;if((e==null?void 0:e.variants)==null)return gh(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=t==null?void 0:t[c],d=s==null?void 0:s[c];if(u===null)return null;const f=mh(u)||mh(d);return r[c][f]}),a=t&&Object.entries(t).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:d,className:f,...p}=u;return Object.entries(p).every(_=>{let[v,m]=_;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,d,f]:c},[]);return gh(n,o,l,t==null?void 0:t.class,t==null?void 0:t.className)},zM=Ze({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(n){const e=n;return(t,i)=>(Fe(),_t(de(Yi),{as:t.as,"as-child":t.asChild,class:xn(de(Bn)(de(HM)({variant:t.variant,size:t.size}),e.class))},{default:De(()=>[dt(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),HM=kM("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),VM=Ze({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(n,{emit:e}){const r=m_(n,e);return(s,o)=>(Fe(),_t(de(uM),ao(ls(de(r))),{default:De(()=>[dt(s.$slots,"default")]),_:3},16))}}),GM=Ze({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(n){const e=n;return(t,i)=>(Fe(),_t(de(b_),ao(ls(e)),{default:De(()=>[dt(t.$slots,"default")]),_:3},16))}}),WM=Ze({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(n){const e=n;return(t,i)=>(Fe(),_t(de(dM),ao(ls(e)),{default:De(()=>[dt(t.$slots,"default")]),_:3},16))}}),XM=Ze({__name:"DialogHeader",props:{class:{}},setup(n){const e=n;return(t,i)=>(Fe(),yt("div",{class:xn(de(Bn)("flex flex-col gap-y-1.5 text-center sm:text-left",e.class))},[dt(t.$slots,"default")],2))}}),jM=Ze({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const e=n,t=Ut(()=>{const{class:r,...s}=e;return s}),i=p_(t);return(r,s)=>(Fe(),_t(de(DM),un(de(i),{class:de(Bn)("text-lg font-semibold leading-none tracking-tight",e.class)}),{default:De(()=>[dt(r.$slots,"default")]),_:3},16,["class"]))}});function $M(n,e){return Fe(),yt("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[mt("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"})])}const qM=Ze({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:e}){const t=n,i=e,r=Ut(()=>{const{class:o,...a}=t;return a}),s=m_(r,i);return(o,a)=>(Fe(),_t(de(hM),null,{default:De(()=>[Ce(de(IM),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),Ce(de(PM),un(de(s),{class:de(Bn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t.class)}),{default:De(()=>[dt(o.$slots,"default"),Ce(de(b_),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:De(()=>[Ce(de($M),{class:"w-4 h-4"}),a[0]||(a[0]=mt("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),YM={class:"m-auto"},KM=Ze({__name:"index",setup(n){return(e,t)=>(Fe(),_t(de(VM),null,{default:De(()=>[Ce(de(WM),null,{default:De(()=>t[0]||(t[0]=[mt("button",{class:"rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button"},[mt("svg",{t:"1729072937230",class:"icon w-4 h-4",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6003",width:"200",height:"200"},[mt("path",{d:"M603.136 541.184C571.328 561.984 560 602.56 560 624L560 640C560 666.496 538.496 688 512 688 485.504 688 464 666.496 464 640L464 623.712C464.128 575.168 492.832 523.2 528.832 495.104 584.032 452.064 608 436.992 608 384 608 331.008 564.992 288 512 288 459.136 288 416.16 330.848 416 384L416 400C416 426.496 394.496 448 368 448 341.504 448 320 426.496 320 400L320 384C320 278.016 406.048 192 512 192 617.984 192 704 278.016 704 384 704 446.56 684.544 487.904 603.136 541.184M512 832C485.504 832 464 810.496 464 784 464 757.504 485.504 736 512 736 538.496 736 560 757.504 560 784 560 810.496 538.496 832 512 832M512 64C264.736 64 64 264.736 64 512 64 759.264 264.736 960 512 960 759.264 960 960 759.264 960 512 960 264.736 759.264 64 512 64","p-id":"6004",fill:"#f4ea2a"})])],-1)])),_:1}),Ce(de(qM),null,{default:De(()=>[Ce(de(XM),null,{default:De(()=>[Ce(de(jM),null,{default:De(()=>t[1]||(t[1]=[Jt("CAD Viewer功能点说明")])),_:1})]),_:1}),Ce(de(Lb),null,{default:De(()=>[Ce(de(Db),null,{default:De(()=>[Ce(de(hs),null,{default:De(()=>[Ce(de(uh),{class:"w-[150px]"},{default:De(()=>t[2]||(t[2]=[Jt(" 功能点 ")])),_:1}),Ce(de(uh),{class:"text-left"},{default:De(()=>t[3]||(t[3]=[Jt(" 说明 ")])),_:1})]),_:1})]),_:1}),Ce(de(Ib),null,{default:De(()=>[Ce(de(hs),null,{default:De(()=>[Ce(de(_i),{class:"font-medium"},{default:De(()=>t[4]||(t[4]=[Jt(" 打开文件 ")])),_:1}),Ce(de(_i),{class:"text-left"},{default:De(()=>t[5]||(t[5]=[Jt(" 目前只支持step文件 ")])),_:1})]),_:1}),Ce(de(hs),null,{default:De(()=>[Ce(de(_i),{class:"font-medium"},{default:De(()=>t[6]||(t[6]=[Jt(" 视图旋转 ")])),_:1}),Ce(de(_i),{class:"text-left"},{default:De(()=>t[7]||(t[7]=[Jt(" 鼠标左键拖动旋转视图 ")])),_:1})]),_:1}),Ce(de(hs),null,{default:De(()=>[Ce(de(_i),{class:"font-medium"},{default:De(()=>t[8]||(t[8]=[Jt(" 视图平移 ")])),_:1}),Ce(de(_i),{class:"text-left"},{default:De(()=>t[9]||(t[9]=[Jt(" 鼠标右键拖动平移视图 ")])),_:1})]),_:1}),Ce(de(hs),null,{default:De(()=>[Ce(de(_i),{class:"font-medium"},{default:De(()=>t[10]||(t[10]=[Jt(" 拾取多选 ")])),_:1}),Ce(de(_i),{class:"text-left"},{default:De(()=>t[11]||(t[11]=[Jt(" 按住Ctrl，鼠标单击，多选几何面 ")])),_:1})]),_:1}),Ce(de(hs),null,{default:De(()=>[Ce(de(_i),{class:"font-medium"},{default:De(()=>t[12]||(t[12]=[Jt(" 几何面隐藏显示 ")])),_:1}),Ce(de(_i),{class:"text-left"},{default:De(()=>t[13]||(t[13]=[Jt(" 鼠标右键，弹出右键菜单中选择隐藏或显示所有 ")])),_:1})]),_:1})]),_:1})]),_:1}),Ce(de(M_),{class:"text-left font-bold text-lg"},{default:De(()=>t[14]||(t[14]=[Jt("联系作者")])),_:1}),t[16]||(t[16]=mt("div",{class:"flex items-center"},[mt("img",{class:"w-36 m-auto -my-3",src:Rb})],-1)),mt("div",YM,[Ce(de(zM),null,{default:De(()=>[Ce(GM,null,{default:De(()=>t[15]||(t[15]=[Jt(" 关闭 ")])),_:1})]),_:1})])]),_:1})]),_:1}))}}),ZM={class:"rounded bg-gray-300 text-white px-1 lg:px-4 py-1 absolute z-10"},JM={class:"max-w-screen-xl mx-auto flex flex-col gap-1 md:flex-row justify-between items-center relative"},QM=Ze({__name:"index",setup(n){const e=function(t){var r;const i=t.target.files[0];if(i){const s=new FileReader;s.onload=o=>{const a=o.target.result,l=window.occt;let c=new Uint8Array(a),u=l.ReadStepFile(c,null);console.log(u),Qe.viewport.load(u,i.name)},s.readAsArrayBuffer((r=t.target.files)==null?void 0:r[0])}};return(t,i)=>(Fe(),yt("div",ZM,[mt("div",JM,[i[0]||(i[0]=mt("button",{class:"rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button",onclick:"upload.click()"},[mt("svg",{t:"1728744599764",class:"icon w-4 h-4",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4488",width:"200",height:"200"},[mt("path",{d:"M275.84 160H124.192l1.824 580.096a32 32 0 0 1-64 0L60.16 160a64 64 0 0 1 64-64h177.92l97.28 96h498.272a32 32 0 1 1 0 64H373.152l-97.28-96z",fill:"#f4ea2a","p-id":"4489"}),mt("path",{d:"M127.52 735.616a32 32 0 0 1-63.04-10.944l54.624-314.144C127.904 359.936 174.784 320 225.76 320h668.864c55.36 0 93.92 46.72 84.384 101.472l-72.32 416C897.824 888.064 850.976 928 800 928H160a32 32 0 0 1 0-64h640c19.712 0 40.096-17.376 43.616-37.472l72.32-416c2.784-15.904-5.984-26.528-21.312-26.528H225.76c-19.68 0-40.096 17.376-43.584 37.472l-54.656 314.144z",fill:"#f4ea2a","p-id":"4490"})])],-1)),Ql(Ce(de(Cb),{id:"upload",type:"file",accept:".step, .stp",onChange:e},null,512),[[rc,!1]]),Ce(KM)])]))}});var jt=(n=>(n[n.GEOMETRY_POINT=1]="GEOMETRY_POINT",n[n.GEOMETRY_EDGE=2]="GEOMETRY_EDGE",n[n.GEOMETRY_SURFACE=3]="GEOMETRY_SURFACE",n[n.GEOMETRY_VOLUME=4]="GEOMETRY_VOLUME",n[n.MESH_NODE=5]="MESH_NODE",n[n.MESH_EDGE=6]="MESH_EDGE",n[n.MESH_ELE_SURFACE=7]="MESH_ELE_SURFACE",n[n.MESH_ELE_SURFACE_SET=8]="MESH_ELE_SURFACE_SET",n[n.MESH_PART=9]="MESH_PART",n[n.POST_PART=10]="POST_PART",n[n.POST_FILTER=11]="POST_FILTER",n[n.POST_POINT=12]="POST_POINT",n[n.NONE=100]="NONE",n))(jt||{});const Hn=class Hn{constructor(){window.addEventListener("resize",()=>{Hn.emit("windowResized")},!1),window.addEventListener("orientationchange",()=>{Hn.emit("windowResized")},!1),window.history.pushState(null,"",document.URL),window.addEventListener("popstate",()=>{window.history.pushState(null,"",document.URL)})}static instance(){return Hn.s_instance}static bind(e,t){const i=(r,s)=>{let o=Hn.m_events.get(r);o===void 0&&(o=[],Hn.m_events.set(r,o)),o.push(s)};typeof e=="string"?i(e,t):Array.isArray(e)&&e.forEach(s=>{i(s,t)})}static unbind(e,t){const i=(r,s)=>{const o=Hn.m_events.get(r);if(o){const a=o.indexOf(s);a!==-1&&o.splice(a,1),o.length===0&&Hn.m_events.delete(r)}};typeof e=="string"?i(e,t):Array.isArray(e)&&e.forEach(s=>{i(s,t)})}static emit(e,...t){const i=Hn.m_events.get(e);i&&i.forEach(r=>{r(...t)})}};ne(Hn,"s_instance",new Hn),ne(Hn,"m_events",new Map);let ht=Hn;function eS(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(e.indexOf(n[t])===-1)return!1;return!0}class $u{constructor(e,t){ne(this,"entities");ne(this,"type");this.entities=e,this.type=t}}const Et=class Et{static init(e){Et.s_instance=e,window.SelectionManager=Et}static instance(){return Et.s_instance}static emptySelect(){return Et.s_emptySelect}static get locked(){return Et.instance().getLocked()}static set locked(e){Et.instance().getLocked()!==e&&(Et.instance().setLocked(e),Et.instance().setHighlighted(-1))}static get type(){return Et.instance().getSelectType()}static set type(e){Et.instance().getLocked()!==!0&&Et.instance().getSelectType()!==e&&(Et.instance().setSelectType(e),ht.emit("selectionTypeChanged"))}static get selected(){return Et.instance().getSelected().entities}static get selectedEntity(){return Et.instance().getSelected()}static set selected(e){if(Et.instance().getLocked()!==!0&&!eS(e,this.selected)){let t=new $u(e,Et.type);Et.instance().setSelected(t),ht.emit("selectionChanged")}}static get highlighted(){return Et.instance().getHighlighted()}static set highlighted(e){Et.instance().getLocked()!==!0&&this.highlighted!==e&&(Et.instance().setHighlighted(e),ht.emit("highlightChanged"))}static get selectEntity(){return Et.instance().getSelected()}static set selectEntity(e){Et.instance().getLocked()!==!0&&(Et.instance().setSelected(e),ht.emit("selectionChanged"))}static pickObject(e){return this.s_instance.doPickObject(e.x,e.y)}static pickPosition(e){return this.instance().doPickPosition(Math.round(e.x),Math.round(e.y))}};ne(Et,"s_instance"),ne(Et,"s_emptySelect",new $u([],jt.NONE));let kt=Et;const tS=Math.pow(2,32),nS=Math.pow(2,-32);class iS{constructor(e,t){this.partId=e,this.entityId=t}}const E_=n=>{const e=n&4294967295,t=(n-e)*nS;return new iS(t,e)},Fc=(n,e)=>n*tS+e,Bc=n=>{const e=new Map;return n.forEach(t=>{const i=E_(t);e.has(i.partId)||e.set(i.partId,[]),e.get(i.partId).push(i.entityId)}),e};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="161",rS=0,_h=1,sS=2,w_=1,oS=2,Ni=3,Ar=0,Fn=1,ln=2,xr=0,Ks=1,vh=2,xh=3,yh=4,aS=5,Vr=100,lS=101,cS=102,bh=103,Mh=104,uS=200,dS=201,fS=202,hS=203,qu=204,Yu=205,pS=206,mS=207,gS=208,_S=209,vS=210,xS=211,yS=212,bS=213,MS=214,SS=0,ES=1,wS=2,wl=3,TS=4,AS=5,CS=6,RS=7,nf=0,PS=1,LS=2,yr=0,IS=1,DS=2,NS=3,US=4,OS=5,FS=6,T_=300,to=301,no=302,Ku=303,Zu=304,lc=306,Ju=1e3,ai=1001,Qu=1002,En=1003,Sh=1004,bo=1005,Ln=1006,kc=1007,jr=1008,br=1009,BS=1010,kS=1011,rf=1012,A_=1013,pr=1014,zi=1015,Yo=1016,C_=1017,R_=1018,Zr=1020,zS=1021,li=1023,HS=1024,VS=1025,Jr=1026,io=1027,GS=1028,P_=1029,WS=1030,L_=1031,I_=1033,zc=33776,Hc=33777,Vc=33778,Gc=33779,Eh=35840,wh=35841,Th=35842,Ah=35843,D_=36196,Ch=37492,Rh=37496,Ph=37808,Lh=37809,Ih=37810,Dh=37811,Nh=37812,Uh=37813,Oh=37814,Fh=37815,Bh=37816,kh=37817,zh=37818,Hh=37819,Vh=37820,Gh=37821,Wc=36492,Wh=36494,Xh=36495,XS=36283,jh=36284,$h=36285,qh=36286,N_=3e3,Qr=3001,jS=3200,$S=3201,U_=0,qS=1,Kn="",cn="srgb",ji="srgb-linear",sf="display-p3",cc="display-p3-linear",Tl="linear",Dt="srgb",Al="rec709",Cl="p3",ms=7680,Yh=519,YS=512,KS=513,ZS=514,O_=515,JS=516,QS=517,eE=518,tE=519,ed=35044,Kh="300 es",td=1035,Vi=2e3,Rl=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,nd=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Dn(n,e,t){return Math.max(e,Math.min(t,n))}function nE(n,e){return(n%e+e)%e}function jc(n,e,t){return(1-t)*n+t*e}function Zh(n){return(n&n-1)===0&&n!==0}function id(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let Ke=class F_{constructor(e=0,t=0){F_.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class ct{constructor(e,t,i,r,s,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],M=r[1],g=r[4],y=r[7],E=r[2],w=r[5],A=r[8];return s[0]=o*v+a*M+l*E,s[3]=o*m+a*g+l*w,s[6]=o*h+a*y+l*A,s[1]=c*v+u*M+d*E,s[4]=c*m+u*g+d*w,s[7]=c*h+u*y+d*A,s[2]=f*v+p*M+_*E,s[5]=f*m+p*g+_*w,s[8]=f*h+p*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new ct;function B_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iE(){const n=Pl("canvas");return n.style.display="block",n}const Jh={};function es(n){n in Jh||(Jh[n]=!0,console.warn(n))}const Qh=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ep=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[ji]:{transfer:Tl,primaries:Al,toReference:n=>n,fromReference:n=>n},[cn]:{transfer:Dt,primaries:Al,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Tl,primaries:Cl,toReference:n=>n.applyMatrix3(ep),fromReference:n=>n.applyMatrix3(Qh)},[sf]:{transfer:Dt,primaries:Cl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ep),fromReference:n=>n.applyMatrix3(Qh).convertLinearToSRGB()}},rE=new Set([ji,cc]),Mt={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ra[e].toReference,r=Ra[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ra[n].primaries},getTransfer:function(n){return n===Kn?Tl:Ra[n].transfer}};function Zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=Pl("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zs(t[i]/255)*255):t[i]=Zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sE=0;class z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yc(r[o].image)):s.push(Yc(r[o]))}else s=Yc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oE=0;class Cn extends ho{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=ai,r=ai,s=Ln,o=jr,a=li,l=br,c=Cn.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Mr(),this.name="",this.source=new z_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qr?cn:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ju:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ju:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===cn?Qr:N_}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qr?cn:Kn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=T_;Cn.DEFAULT_ANISOTROPY=1;let fn=class H_{constructor(e=0,t=0,i=0,r=1){H_.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,y=(p+1)/2,E=(h+1)/2,w=(u+f)/4,A=(d+v)/4,B=(_+m)/4;return g>y&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=A/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=B/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=B/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(d-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class aE extends ho{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qr?cn:Kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new z_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends aE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class V_ extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lE extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ca=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*v,M=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),w=Math.atan2(E,h*M);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const y=a*M;if(l=l*m+f*y,c=c*m+p*y,u=u*m+_*y,d=d*m+v*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class G_{constructor(e=0,t=0,i=0){G_.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Kc=new Y,tp=new ca;let ua=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),La.subVectors(this.max,Mo),_s.subVectors(e.a,Mo),vs.subVectors(e.b,Mo),xs.subVectors(e.c,Mo),tr.subVectors(vs,_s),nr.subVectors(xs,vs),Or.subVectors(_s,xs);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Or.z,Or.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Or.z,0,-Or.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Or.y,Or.x,0];return!Zc(t,_s,vs,xs,La)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,_s,vs,xs,La))?!1:(Ia.crossVectors(tr,nr),t=[Ia.x,Ia.y,Ia.z],Zc(t,_s,vs,xs,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const Ci=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ni=new Y,Pa=new ua,_s=new Y,vs=new Y,xs=new Y,tr=new Y,nr=new Y,Or=new Y,Mo=new Y,La=new Y,Ia=new Y,Fr=new Y;function Zc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cE=new ua,So=new Y,Jc=new Y;class da{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Jc)),this.expandByPoint(So.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new Y,Qc=new Y,Da=new Y,ir=new Y,eu=new Y,Na=new Y,tu=new Y;let uc=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Qc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=ir.dot(this.direction),l=-ir.dot(Da),c=ir.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qc).addScaledVector(Da,f),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,r,s){eu.subVectors(t,e),Na.subVectors(i,e),tu.crossVectors(eu,Na);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Na.crossVectors(ir,Na));if(l<0)return null;const c=a*this.direction.dot(eu.cross(ir));if(c<0||l+c>o)return null;const u=-a*ir.dot(tu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class rd{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,_,v,m){rd.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,dE)}lookAt(e,t,i){const r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),rr.crossVectors(i,kn),rr.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),rr.crossVectors(i,kn)),rr.normalize(),Ua.crossVectors(kn,rr),r[0]=rr.x,r[4]=Ua.x,r[8]=kn.x,r[1]=rr.y,r[5]=Ua.y,r[9]=kn.y,r[2]=rr.z,r[6]=Ua.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],M=i[3],g=i[7],y=i[11],E=i[15],w=r[0],A=r[4],B=r[8],k=r[12],x=r[1],T=r[5],L=r[9],X=r[13],N=r[2],H=r[6],O=r[10],Q=r[14],G=r[3],se=r[7],pe=r[11],ge=r[15];return s[0]=o*w+a*x+l*N+c*G,s[4]=o*A+a*T+l*H+c*se,s[8]=o*B+a*L+l*O+c*pe,s[12]=o*k+a*X+l*Q+c*ge,s[1]=u*w+d*x+f*N+p*G,s[5]=u*A+d*T+f*H+p*se,s[9]=u*B+d*L+f*O+p*pe,s[13]=u*k+d*X+f*Q+p*ge,s[2]=_*w+v*x+m*N+h*G,s[6]=_*A+v*T+m*H+h*se,s[10]=_*B+v*L+m*O+h*pe,s[14]=_*k+v*X+m*Q+h*ge,s[3]=M*w+g*x+y*N+E*G,s[7]=M*A+g*T+y*H+E*se,s[11]=M*B+g*L+y*O+E*pe,s[15]=M*k+g*X+y*Q+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],M=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,g=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,y=u*v*c-_*d*c+_*a*p-o*v*p-u*a*h+o*d*h,E=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,w=t*M+i*g+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=M*A,e[1]=(v*f*s-d*m*s-v*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-_*f*s+_*r*p-t*m*p-u*r*h+t*f*h)*A,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*h-t*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(_*d*s-u*v*s-_*i*p+t*v*p+u*i*h-t*d*h)*A,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*A,e[12]=E*A,e[13]=(u*v*r-_*d*r+_*i*f-t*v*f-u*i*m+t*d*m)*A,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,v=o*u,m=o*d,h=a*d,M=l*c,g=l*u,y=l*d,E=i.x,w=i.y,A=i.z;return r[0]=(1-(v+h))*E,r[1]=(p+y)*E,r[2]=(_-g)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(_+g)*A,r[9]=(m-M)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const c=1/s,u=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Vi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let _,v;if(a===Vi)_=(o+s)*d,v=-2*d;else if(a===Rl)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const ys=new Y,ii=new qt,uE=new Y(0,0,0),dE=new Y(1,1,1),rr=new Y,Ua=new Y,kn=new Y,np=new qt,ip=new ca;class dc{constructor(e=0,t=0,i=0,r=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dc.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const rp=new Y,bs=new ca,Pi=new qt,Oa=new Y,Eo=new Y,hE=new Y,pE=new ca,sp=new Y(1,0,0),op=new Y(0,1,0),ap=new Y(0,0,1),mE={type:"added"},gE={type:"removed"};class zt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new Y,t=new dc,i=new ca,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ct}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Eo,Oa,this.up):Pi.lookAt(Oa,Eo,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Pi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,pE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new Y(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new Y,Li=new Y,nu=new Y,Ii=new Y,Ms=new Y,Ss=new Y,lp=new Y,iu=new Y,ru=new Y,su=new Y;class ci{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Li.subVectors(i,t),nu.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Li),l=ri.dot(nu),c=Li.dot(Li),u=Li.dot(nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Li.subVectors(e,t),ri.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ri.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Ss.subVectors(s,i),iu.subVectors(e,i);const l=Ms.dot(iu),c=Ss.dot(iu);if(l<=0&&c<=0)return t.copy(i);ru.subVectors(e,r);const u=Ms.dot(ru),d=Ss.dot(ru);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ms,o);su.subVectors(e,s);const p=Ms.dot(su),_=Ss.dot(su);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ss,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return lp.subVectors(s,r),a=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector(lp,a);const h=1/(m+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=nE(e,1),t=Dn(t,0,1),i=Dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=W_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(Dn(mn.r*255,0,255))*65536+Math.round(Dn(mn.g*255,0,255))*256+Math.round(Dn(mn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),t);const i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=cn){Mt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,r=mn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Fa);const i=jc(sr.h,Fa.h,t),r=jc(sr.s,Fa.s,t),s=jc(sr.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new qe;qe.NAMES=W_;let _E=0;class Lr extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Ks,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Yu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Yu&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class af extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Y,Ba=new Ke;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ed,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ed&&(e.usage=this.usage),e}}class X_ extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class j_ extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vE=0;const qn=new qt,au=new zt,Es=new Y,zn=new ua,wo=new ua,on=new Y;class Qt extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?j_:X_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(zn.min,wo.min),zn.expandByPoint(on),on.addVectors(zn.max,wo.max),zn.expandByPoint(on)):(zn.expandByPoint(wo.min),zn.expandByPoint(wo.max))}zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),on.add(Es)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new Y,u[x]=new Y;const d=new Y,f=new Y,p=new Y,_=new Ke,v=new Ke,m=new Ke,h=new Y,M=new Y;function g(x,T,L){d.fromArray(r,x*3),f.fromArray(r,T*3),p.fromArray(r,L*3),_.fromArray(o,x*2),v.fromArray(o,T*2),m.fromArray(o,L*2),f.sub(d),p.sub(d),v.sub(_),m.sub(_);const X=1/(v.x*m.y-m.x*v.y);isFinite(X)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(X),M.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(X),c[x].add(h),c[T].add(h),c[L].add(h),u[x].add(M),u[T].add(M),u[L].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let x=0,T=y.length;x<T;++x){const L=y[x],X=L.start,N=L.count;for(let H=X,O=X+N;H<O;H+=3)g(i[H+0],i[H+1],i[H+2])}const E=new Y,w=new Y,A=new Y,B=new Y;function k(x){A.fromArray(s,x*3),B.copy(A);const T=c[x];E.copy(T),E.sub(A.multiplyScalar(A.dot(T))).normalize(),w.crossVectors(B,T);const X=w.dot(u[x])<0?-1:1;l[x*4]=E.x,l[x*4+1]=E.y,l[x*4+2]=E.z,l[x*4+3]=X}for(let x=0,T=y.length;x<T;++x){const L=y[x],X=L.start,N=L.count;for(let H=X,O=X+N;H<O;H+=3)k(i[H+0]),k(i[H+1]),k(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Nt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new qt,Br=new uc,ka=new da,up=new Y,ws=new Y,Ts=new Y,As=new Y,lu=new Y,za=new Y,Ha=new Ke,Va=new Ke,Ga=new Ke,dp=new Y,fp=new Y,hp=new Y,Wa=new Y,Xa=new Y;class Gt extends zt{constructor(e=new Qt,t=new af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(lu.fromBufferAttribute(d,e),o?za.addScaledVector(lu,u):za.addScaledVector(lu.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(ka.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ka,up)===null||Br.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(s).invert(),Br.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,E=g;y<E;y+=3){const w=a.getX(y),A=a.getX(y+1),B=a.getX(y+2);r=ja(this,h,e,i,c,u,d,w,A,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const M=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=ja(this,o,e,i,c,u,d,M,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],M=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,E=g;y<E;y+=3){const w=y,A=y+1,B=y+2;r=ja(this,h,e,i,c,u,d,w,A,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const M=m,g=m+1,y=m+2;r=ja(this,o,e,i,c,u,d,M,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xE(n,e,t,i,r,s,o,a){let l;if(e.side===Fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function ja(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ws),n.getVertexPosition(l,Ts),n.getVertexPosition(c,As);const u=xE(n,e,t,i,ws,Ts,As,Wa);if(u){r&&(Ha.fromBufferAttribute(r,a),Va.fromBufferAttribute(r,l),Ga.fromBufferAttribute(r,c),u.uv=ci.getInterpolation(Wa,ws,Ts,As,Ha,Va,Ga,new Ke)),s&&(Ha.fromBufferAttribute(s,a),Va.fromBufferAttribute(s,l),Ga.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(Wa,ws,Ts,As,Ha,Va,Ga,new Ke),u.uv2=u.uv1),o&&(dp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),hp.fromBufferAttribute(o,c),u.normal=ci.getInterpolation(Wa,ws,Ts,As,dp,fp,hp,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};ci.getNormal(ws,Ts,As,d.normal),u.face=d}return u}class fa extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(d,2));function _(v,m,h,M,g,y,E,w,A,B,k){const x=y/A,T=E/B,L=y/2,X=E/2,N=w/2,H=A+1,O=B+1;let Q=0,G=0;const se=new Y;for(let pe=0;pe<O;pe++){const ge=pe*T-X;for(let Me=0;Me<H;Me++){const Ge=Me*x-L;se[v]=Ge*M,se[m]=ge*g,se[h]=N,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[h]=w>0?1:-1,u.push(se.x,se.y,se.z),d.push(Me/A),d.push(1-pe/B),Q+=1}}for(let pe=0;pe<B;pe++)for(let ge=0;ge<A;ge++){const Me=f+ge+H*pe,Ge=f+ge+H*(pe+1),le=f+(ge+1)+H*(pe+1),_e=f+(ge+1)+H*pe;l.push(Me,Ge,_e),l.push(Ge,le,_e),G+=6}a.addGroup(p,G,k),p+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mn(n){const e={};for(let t=0;t<n.length;t++){const i=ro(n[t]);for(const r in i)e[r]=i[r]}return e}function yE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $_(n){return n.getRenderTarget()===null?n.outputColorSpace:Mt.workingColorSpace}const bE={clone:ro,merge:Mn};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=SE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=yE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class q_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new Y,pp=new Ke,mp=new Ke;class si extends q_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class EE extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new si(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const s=new si(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const o=new si(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const a=new si(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const l=new si(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new si(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Y_ extends Cn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:to,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wE extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qr?cn:Kn),this.texture=new Y_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fa(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:xr});s.uniforms.tEquirect.value=t;const o=new Gt(r,s),a=t.minFilter;return t.minFilter===jr&&(t.minFilter=Ln),new EE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cu=new Y,TE=new Y,AE=new ct;class zr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cu.subVectors(i,t).cross(TE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AE.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new da,$a=new Y;class lf{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],M=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-h).normalize(),i[1].setComponents(l+s,f+c,m+p,y+h).normalize(),i[2].setComponents(l+o,f+u,m+_,y+M).normalize(),i[3].setComponents(l-o,f-u,m-_,y-M).normalize(),i[4].setComponents(l-a,f-d,m-v,y-g).normalize(),t===Vi)i[5].setComponents(l+a,f+d,m+v,y+g).normalize();else if(t===Rl)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($a.x=r.normal.x>0?e.max.x:e.min.x,$a.y=r.normal.y>0?e.max.y:e.min.y,$a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function CE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const f=u.array,p=u._updateRange,_=u.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&_.length===0&&n.bufferSubData(d,0,f),_.length!==0){for(let v=0,m=_.length;v<m;v++){const h=_[v];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class fc extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const M=h*f-o;for(let g=0;g<c;g++){const y=g*d-s;_.push(y,-M,0),v.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const g=M+c*h,y=M+c*(h+1),E=M+1+c*(h+1),w=M+1+c*h;p.push(g,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new Jn(_,3)),this.setAttribute("normal",new Jn(v,3)),this.setAttribute("uv",new Jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ow=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_w=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ww=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Aw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ww=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ST=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:RE,alphahash_pars_fragment:PE,alphamap_fragment:LE,alphamap_pars_fragment:IE,alphatest_fragment:DE,alphatest_pars_fragment:NE,aomap_fragment:UE,aomap_pars_fragment:OE,batching_pars_vertex:FE,batching_vertex:BE,begin_vertex:kE,beginnormal_vertex:zE,bsdfs:HE,iridescence_fragment:VE,bumpmap_pars_fragment:GE,clipping_planes_fragment:WE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:jE,clipping_planes_vertex:$E,color_fragment:qE,color_pars_fragment:YE,color_pars_vertex:KE,color_vertex:ZE,common:JE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:ew,displacementmap_pars_vertex:tw,displacementmap_vertex:nw,emissivemap_fragment:iw,emissivemap_pars_fragment:rw,colorspace_fragment:sw,colorspace_pars_fragment:ow,envmap_fragment:aw,envmap_common_pars_fragment:lw,envmap_pars_fragment:cw,envmap_pars_vertex:uw,envmap_physical_pars_fragment:Mw,envmap_vertex:dw,fog_vertex:fw,fog_pars_vertex:hw,fog_fragment:pw,fog_pars_fragment:mw,gradientmap_pars_fragment:gw,lightmap_fragment:_w,lightmap_pars_fragment:vw,lights_lambert_fragment:xw,lights_lambert_pars_fragment:yw,lights_pars_begin:bw,lights_toon_fragment:Sw,lights_toon_pars_fragment:Ew,lights_phong_fragment:ww,lights_phong_pars_fragment:Tw,lights_physical_fragment:Aw,lights_physical_pars_fragment:Cw,lights_fragment_begin:Rw,lights_fragment_maps:Pw,lights_fragment_end:Lw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Dw,logdepthbuf_pars_vertex:Nw,logdepthbuf_vertex:Uw,map_fragment:Ow,map_pars_fragment:Fw,map_particle_fragment:Bw,map_particle_pars_fragment:kw,metalnessmap_fragment:zw,metalnessmap_pars_fragment:Hw,morphcolor_vertex:Vw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Ww,morphtarget_vertex:Xw,normal_fragment_begin:jw,normal_fragment_maps:$w,normal_pars_fragment:qw,normal_pars_vertex:Yw,normal_vertex:Kw,normalmap_pars_fragment:Zw,clearcoat_normal_fragment_begin:Jw,clearcoat_normal_fragment_maps:Qw,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:oT,dithering_pars_fragment:aT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:dT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:yT,tonemapping_pars_fragment:bT,transmission_fragment:MT,transmission_pars_fragment:ST,uv_pars_fragment:ET,uv_pars_vertex:wT,uv_vertex:TT,worldpos_vertex:AT,background_vert:CT,background_frag:RT,backgroundCube_vert:PT,backgroundCube_frag:LT,cube_vert:IT,cube_frag:DT,depth_vert:NT,depth_frag:UT,distanceRGBA_vert:OT,distanceRGBA_frag:FT,equirect_vert:BT,equirect_frag:kT,linedashed_vert:zT,linedashed_frag:HT,meshbasic_vert:VT,meshbasic_frag:GT,meshlambert_vert:WT,meshlambert_frag:XT,meshmatcap_vert:jT,meshmatcap_frag:$T,meshnormal_vert:qT,meshnormal_frag:YT,meshphong_vert:KT,meshphong_frag:ZT,meshphysical_vert:JT,meshphysical_frag:QT,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:a1},Ee={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Ee.common,Ee.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Ee.lights,Ee.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const qa={r:0,b:0,g:0};function l1(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(m,h){let M=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),M=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===lc)?(u===void 0&&(u=new Gt(new fa(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:ro(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(g.colorSpace)!==Dt,(d!==g||f!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Gt(new fc(2,2),new Cr({name:"BackgroundMaterial",uniforms:ro(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(g.colorSpace)!==Dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(qa,$_(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:_}}function c1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(N,H,O,Q,G){let se=!1;if(o){const pe=v(Q,O,H);c!==pe&&(c=pe,p(c.object)),se=h(N,Q,O,G),se&&M(N,Q,O,G)}else{const pe=H.wireframe===!0;(c.geometry!==Q.id||c.program!==O.id||c.wireframe!==pe)&&(c.geometry=Q.id,c.program=O.id,c.wireframe=pe,se=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,B(N,H,O,Q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,H,O){const Q=O.wireframe===!0;let G=a[N.id];G===void 0&&(G={},a[N.id]=G);let se=G[H.id];se===void 0&&(se={},G[H.id]=se);let pe=se[Q];return pe===void 0&&(pe=m(f()),se[Q]=pe),pe}function m(N){const H=[],O=[],Q=[];for(let G=0;G<r;G++)H[G]=0,O[G]=0,Q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:Q,object:N,attributes:{},index:null}}function h(N,H,O,Q){const G=c.attributes,se=H.attributes;let pe=0;const ge=O.getAttributes();for(const Me in ge)if(ge[Me].location>=0){const le=G[Me];let _e=se[Me];if(_e===void 0&&(Me==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),Me==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;pe++}return c.attributesNum!==pe||c.index!==Q}function M(N,H,O,Q){const G={},se=H.attributes;let pe=0;const ge=O.getAttributes();for(const Me in ge)if(ge[Me].location>=0){let le=se[Me];le===void 0&&(Me==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),Me==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),G[Me]=_e,pe++}c.attributes=G,c.attributesNum=pe,c.index=Q}function g(){const N=c.newAttributes;for(let H=0,O=N.length;H<O;H++)N[H]=0}function y(N){E(N,0)}function E(N,H){const O=c.newAttributes,Q=c.enabledAttributes,G=c.attributeDivisors;O[N]=1,Q[N]===0&&(n.enableVertexAttribArray(N),Q[N]=1),G[N]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),G[N]=H)}function w(){const N=c.newAttributes,H=c.enabledAttributes;for(let O=0,Q=H.length;O<Q;O++)H[O]!==N[O]&&(n.disableVertexAttribArray(O),H[O]=0)}function A(N,H,O,Q,G,se,pe){pe===!0?n.vertexAttribIPointer(N,H,O,G,se):n.vertexAttribPointer(N,H,O,Q,G,se)}function B(N,H,O,Q){if(i.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const G=Q.attributes,se=O.getAttributes(),pe=H.defaultAttributeValues;for(const ge in se){const Me=se[ge];if(Me.location>=0){let Ge=G[ge];if(Ge===void 0&&(ge==="instanceMatrix"&&N.instanceMatrix&&(Ge=N.instanceMatrix),ge==="instanceColor"&&N.instanceColor&&(Ge=N.instanceColor)),Ge!==void 0){const le=Ge.normalized,_e=Ge.itemSize,Ae=t.get(Ge);if(Ae===void 0)continue;const Be=Ae.buffer,ze=Ae.type,Ie=Ae.bytesPerElement,st=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||Ge.gpuType===A_);if(Ge.isInterleavedBufferAttribute){const $e=Ge.data,q=$e.stride,I=Ge.offset;if($e.isInstancedInterleavedBuffer){for(let D=0;D<Me.locationSize;D++)E(Me.location+D,$e.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let D=0;D<Me.locationSize;D++)y(Me.location+D);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let D=0;D<Me.locationSize;D++)A(Me.location+D,_e/Me.locationSize,ze,le,q*Ie,(I+_e/Me.locationSize*D)*Ie,st)}else{if(Ge.isInstancedBufferAttribute){for(let $e=0;$e<Me.locationSize;$e++)E(Me.location+$e,Ge.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let $e=0;$e<Me.locationSize;$e++)y(Me.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let $e=0;$e<Me.locationSize;$e++)A(Me.location+$e,_e/Me.locationSize,ze,le,_e*Ie,_e/Me.locationSize*$e*Ie,st)}}else if(pe!==void 0){const le=pe[ge];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(Me.location,le);break;case 3:n.vertexAttrib3fv(Me.location,le);break;case 4:n.vertexAttrib4fv(Me.location,le);break;default:n.vertexAttrib1fv(Me.location,le)}}}}w()}function k(){L();for(const N in a){const H=a[N];for(const O in H){const Q=H[O];for(const G in Q)_(Q[G].object),delete Q[G];delete H[O]}delete a[N]}}function x(N){if(a[N.id]===void 0)return;const H=a[N.id];for(const O in H){const Q=H[O];for(const G in Q)_(Q[G].object),delete Q[G];delete H[O]}delete a[N.id]}function T(N){for(const H in a){const O=a[H];if(O[N.id]===void 0)continue;const Q=O[N.id];for(const G in Q)_(Q[G].object),delete Q[G];delete O[N.id]}}function L(){X(),u=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:L,resetDefaultState:X,dispose:k,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function u1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function d1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,y=o||e.has("OES_texture_float"),E=g&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:w}}function f1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,g=M*4;let y=h.clippingState||null;l.value=y,y=u(_,f,g,p);for(let E=0;E!==g;++E)y[E]=t[E];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,y=p;g!==v;++g,y+=4)o.copy(d[g]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function h1(n){let e=new WeakMap;function t(o,a){return a===Ku?o.mapping=to:a===Zu&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ku||a===Zu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hc extends q_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,gp=[.125,.215,.35,.446,.526,.582],Gr=20,uu=new hc,_p=new qe;let du=null,fu=0,hu=0;const Hr=(1+Math.sqrt(5))/2,Ps=1/Hr,vp=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Hr,Ps),new Y(0,Hr,-Ps),new Y(Ps,0,Hr),new Y(-Ps,0,Hr),new Y(Hr,Ps,0),new Y(-Hr,Ps,0)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Yo,format:li,colorSpace:ji,depthBuffer:!1},r=yp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(s)),this._blurMaterial=m1(s,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,r){const a=new si(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_p),u.toneMapping=yr,u.autoClear=!1;const p=new af({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),_=new Gt(new fa,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(_p),v=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):M===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;Ya(r,M*g,h>2?g:0,g,g),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(r-1)%vp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Gt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const h=[];let M=0;for(let A=0;A<Gr;++A){const B=A/v,k=Math.exp(-B*B/2);h.push(k),A===0?M+=k:A<m&&(M+=2*k)}for(let A=0;A<h.length;A++)h[A]=h[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const y=this._sizeLods[r],E=3*y*(r>g-Bs?r-g+Bs:0),w=4*(this._cubeSize-y);Ya(t,E,w,3*y,2*y),l.setRenderTarget(t),l.render(d,uu)}}function p1(n){const e=[],t=[],i=[];let r=n;const s=n-Bs+1+gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Bs?l=gp[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,M=new Float32Array(v*_*p),g=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,B=w>2?0:-1,k=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];M.set(k,v*_*w),g.set(f,m*_*w);const x=[w,w,w,w,w,w];y.set(x,h*_*w)}const E=new Qt;E.setAttribute("position",new Nt(M,v)),E.setAttribute("uv",new Nt(g,m)),E.setAttribute("faceIndex",new Nt(y,h)),e.push(E),r>Bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yp(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function m1(n,e,t){const i=new Float32Array(Gr),r=new Y(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function bp(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Mp(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ku||l===Zu,u=l===to||l===no;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new xp(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new xp(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function v1(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let g=0,y=M.length;g<y;g+=3){const E=M[g+0],w=M[g+1],A=M[g+2];f.push(E,w,w,A,A,E)}}else if(_!==void 0){const M=_.array;v=_.version;for(let g=0,y=M.length/3-1;g<y;g+=3){const E=g+0,w=g+1,A=g+2;f.push(E,w,w,A,A,E)}}else return;const m=new(B_(f)?j_:X_)(f,1);m.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function x1(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function d(p,_,v){if(v===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,a,p*l,v),t.update(_,s,v)}function f(p,_,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,v);let h=0;for(let M=0;M<v;M++)h+=_[M];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function y1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function b1(n,e){return n[0]-e[0]}function M1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function S1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new fn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let H=function(){X.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let k=0;g===!0&&(k=1),y===!0&&(k=2),E===!0&&(k=3);let x=u.attributes.position.count*k,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const L=new Float32Array(x*T*4*v),X=new V_(L,x,T,v);X.type=zi,X.needsUpdate=!0;const N=k*4;for(let O=0;O<v;O++){const Q=w[O],G=A[O],se=B[O],pe=x*T*4*O;for(let ge=0;ge<Q.count;ge++){const Me=ge*N;g===!0&&(o.fromBufferAttribute(Q,ge),L[pe+Me+0]=o.x,L[pe+Me+1]=o.y,L[pe+Me+2]=o.z,L[pe+Me+3]=0),y===!0&&(o.fromBufferAttribute(G,ge),L[pe+Me+4]=o.x,L[pe+Me+5]=o.y,L[pe+Me+6]=o.z,L[pe+Me+7]=0),E===!0&&(o.fromBufferAttribute(se,ge),L[pe+Me+8]=o.x,L[pe+Me+9]=o.y,L[pe+Me+10]=o.z,L[pe+Me+11]=se.itemSize===4?o.w:1)}}m={count:v,texture:X,size:new Ke(x,T)},s.set(u,m),u.addEventListener("dispose",H)}let h=0;for(let g=0;g<f.length;g++)h+=f[g];const M=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let y=0;y<_;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<_;y++){const E=v[y];E[0]=y,E[1]=f[y]}v.sort(M1);for(let y=0;y<8;y++)y<_&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(b1);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const E=a[y],w=E[0],A=E[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),h&&u.getAttribute("morphNormal"+y)!==h[w]&&u.setAttribute("morphNormal"+y,h[w]),r[y]=A,M+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const g=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function E1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Z_ extends Cn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Jr,u!==Jr&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jr&&(i=pr),i===void 0&&u===io&&(i=Zr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const J_=new Cn,Q_=new Z_(1,1);Q_.compareFunction=O_;const ev=new V_,tv=new lE,nv=new Y_,Sp=[],Ep=[],wp=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function po(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sp[r];if(s===void 0&&(s=new Float32Array(r),Sp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function R1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Ap.set(i),n.uniformMatrix2fv(this.addr,!1,Ap),sn(t,i)}}function P1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),sn(t,i)}}function L1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;wp.set(i),n.uniformMatrix4fv(this.addr,!1,wp),sn(t,i)}}function I1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function N1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Q_:J_;t.setTexture2D(e||s,r)}function H1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||tv,r)}function V1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nv,r)}function G1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ev,r)}function W1(n){switch(n){case 5126:return w1;case 35664:return T1;case 35665:return A1;case 35666:return C1;case 35674:return R1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return I1;case 35667:case 35671:return D1;case 35668:case 35672:return N1;case 35669:case 35673:return U1;case 5125:return O1;case 36294:return F1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}function X1(n,e){n.uniform1fv(this.addr,e)}function j1(n,e){const t=po(e,this.size,2);n.uniform2fv(this.addr,t)}function $1(n,e){const t=po(e,this.size,3);n.uniform3fv(this.addr,t)}function q1(n,e){const t=po(e,this.size,4);n.uniform4fv(this.addr,t)}function Y1(n,e){const t=po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K1(n,e){const t=po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z1(n,e){const t=po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J1(n,e){n.uniform1iv(this.addr,e)}function Q1(n,e){n.uniform2iv(this.addr,e)}function eA(n,e){n.uniform3iv(this.addr,e)}function tA(n,e){n.uniform4iv(this.addr,e)}function nA(n,e){n.uniform1uiv(this.addr,e)}function iA(n,e){n.uniform2uiv(this.addr,e)}function rA(n,e){n.uniform3uiv(this.addr,e)}function sA(n,e){n.uniform4uiv(this.addr,e)}function oA(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||J_,s[o])}function aA(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||tv,s[o])}function lA(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nv,s[o])}function cA(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ev,s[o])}function uA(n){switch(n){case 5126:return X1;case 35664:return j1;case 35665:return $1;case 35666:return q1;case 35674:return Y1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class dA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W1(t.type)}}class fA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uA(t.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function Cp(n,e){n.seq.push(e),n.map[e.id]=e}function pA(n,e,t){const i=n.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),o=pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cp(t,c===void 0?new dA(a,n,e):new fA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hA(a),Cp(t,d)),t=d}}}class al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Rp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mA=37297;let gA=0;function _A(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function vA(n){const e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(n);let i;switch(e===t?i="":e===Cl&&t===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&t===Cl&&(i="LinearSRGBToLinearDisplayP3"),n){case ji:case cc:return[i,"LinearTransferOETF"];case cn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_A(n.getShaderSource(e),o)}else return r}function xA(n,e){const t=vA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yA(n,e){let t;switch(e){case IS:t="Linear";break;case DS:t="Reinhard";break;case NS:t="OptimizedCineon";break;case US:t="ACESFilmic";break;case FS:t="AgX";break;case OS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function MA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function SA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ks(n){return n!==""}function Lp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(n){return n.replace(wA,AA)}const TA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AA(n,e){let t=ot[e];if(t===void 0){const i=TA.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(CA,RA)}function RA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Np(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function LA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nf:e="ENVMAP_BLENDING_MULTIPLY";break;case PS:e="ENVMAP_BLENDING_MIX";break;case LS:e="ENVMAP_BLENDING_ADD";break}return e}function NA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PA(t),c=LA(t),u=IA(t),d=DA(t),f=NA(t),p=t.isWebGL2?"":bA(t),_=MA(t),v=SA(s),m=r.createProgram();let h,M,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ks).join(`
`),h.length>0&&(h+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ks).join(`
`),M.length>0&&(M+=`
`)):(h=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),M=[p,Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?ot.tonemapping_pars_fragment:"",t.toneMapping!==yr?yA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,xA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=sd(o),o=Lp(o,t),o=Ip(o,t),a=sd(a),a=Lp(a,t),a=Ip(a,t),o=Dp(o),a=Dp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=g+h+o,E=g+M+a,w=Rp(r,r.VERTEX_SHADER,y),A=Rp(r,r.FRAGMENT_SHADER,E);r.attachShader(m,w),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function B(L){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(A).trim();let O=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,A);else{const G=Pp(r,w,"vertex"),se=Pp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+G+`
`+se)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||H==="")&&(Q=!1);Q&&(L.diagnostics={runnable:O,programLog:X,vertexShader:{log:N,prefix:h},fragmentShader:{log:H,prefix:M}})}r.deleteShader(w),r.deleteShader(A),k=new al(r,m),x=EA(r,m)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,mA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let OA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BA(e),t.set(e,i)),i}}class BA{constructor(e){this.id=OA++,this.code=e,this.usedTimes=0}}function kA(n,e,t,i,r,s,o){const a=new of,l=new FA,c=new Set,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,T,L,X,N){const H=X.fog,O=N.geometry,Q=x.isMeshStandardMaterial?X.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),se=G&&G.mapping===lc?G.image.height:null,pe=v[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ge=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Me=ge!==void 0?ge.length:0;let Ge=0;O.morphAttributes.position!==void 0&&(Ge=1),O.morphAttributes.normal!==void 0&&(Ge=2),O.morphAttributes.color!==void 0&&(Ge=3);let le,_e,Ae,Be;if(pe){const He=yi[pe];le=He.vertexShader,_e=He.fragmentShader}else le=x.vertexShader,_e=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Be=l.getFragmentShaderID(x);const ze=n.getRenderTarget(),Ie=N.isInstancedMesh===!0,st=N.isBatchedMesh===!0,$e=!!x.map,q=!!x.matcap,I=!!G,D=!!x.aoMap,W=!!x.lightMap,K=!!x.bumpMap,ce=!!x.normalMap,ie=!!x.displacementMap,S=!!x.emissiveMap,b=!!x.metalnessMap,U=!!x.roughnessMap,z=x.anisotropy>0,Z=x.clearcoat>0,P=x.iridescence>0,F=x.sheen>0,j=x.transmission>0,re=z&&!!x.anisotropyMap,he=Z&&!!x.clearcoatMap,me=Z&&!!x.clearcoatNormalMap,oe=Z&&!!x.clearcoatRoughnessMap,ve=P&&!!x.iridescenceMap,Se=P&&!!x.iridescenceThicknessMap,be=F&&!!x.sheenColorMap,ae=F&&!!x.sheenRoughnessMap,xe=!!x.specularMap,we=!!x.specularColorMap,Ue=!!x.specularIntensityMap,nt=j&&!!x.transmissionMap,Xe=j&&!!x.thicknessMap,ke=!!x.gradientMap,R=!!x.alphaMap,ue=x.alphaTest>0,fe=!!x.alphaHash,ye=!!x.extensions;let Re=yr;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Pe={isWebGL2:d,shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:_e,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:st,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ji,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:q,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:se,aoMap:D,lightMap:W,bumpMap:K,normalMap:ce,displacementMap:p&&ie,emissiveMap:S,normalMapObjectSpace:ce&&x.normalMapType===qS,normalMapTangentSpace:ce&&x.normalMapType===U_,metalnessMap:b,roughnessMap:U,anisotropy:z,anisotropyMap:re,clearcoat:Z,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:oe,iridescence:P,iridescenceMap:ve,iridescenceThicknessMap:Se,sheen:F,sheenColorMap:be,sheenRoughnessMap:ae,specularMap:xe,specularColorMap:we,specularIntensityMap:Ue,transmission:j,transmissionMap:nt,thicknessMap:Xe,gradientMap:ke,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:R,alphaTest:ue,alphaHash:fe,combine:x.combine,mapUv:$e&&m(x.map.channel),aoMapUv:D&&m(x.aoMap.channel),lightMapUv:W&&m(x.lightMap.channel),bumpMapUv:K&&m(x.bumpMap.channel),normalMapUv:ce&&m(x.normalMap.channel),displacementMapUv:ie&&m(x.displacementMap.channel),emissiveMapUv:S&&m(x.emissiveMap.channel),metalnessMapUv:b&&m(x.metalnessMap.channel),roughnessMapUv:U&&m(x.roughnessMap.channel),anisotropyMapUv:re&&m(x.anisotropyMap.channel),clearcoatMapUv:he&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(x.sheenRoughnessMap.channel),specularMapUv:xe&&m(x.specularMap.channel),specularColorMapUv:we&&m(x.specularColorMap.channel),specularIntensityMapUv:Ue&&m(x.specularIntensityMap.channel),transmissionMapUv:nt&&m(x.transmissionMap.channel),thicknessMapUv:Xe&&m(x.thicknessMap.channel),alphaMapUv:R&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&($e||R),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Mt.getTransfer(x.map.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ye&&x.extensions.derivatives===!0,extensionFragDepth:ye&&x.extensions.fragDepth===!0,extensionDrawBuffers:ye&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ye&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function M(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function E(x){const T=v[x.type];let L;if(T){const X=yi[T];L=bE.clone(X.uniforms)}else L=x.uniforms;return L}function w(x,T){let L;for(let X=0,N=u.length;X<N;X++){const H=u[X];if(H.cacheKey===T){L=H,++L.usedTimes;break}}return L===void 0&&(L=new UA(n,T,x,s),u.push(L)),L}function A(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function B(x){l.remove(x)}function k(){l.dispose()}return{getParameters:h,getProgramCacheKey:M,getUniforms:E,acquireProgram:w,releaseProgram:A,releaseShaderCache:B,programs:u,dispose:k}}function zA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function HA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,v,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||HA),i.length>1&&i.sort(f||Up),r.length>1&&r.sort(f||Up)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function VA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Op,n.set(i,[o])):r>=s.length?(o=new Op,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new qe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function WA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XA=0;function jA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $A(n,e){const t=new GA,i=WA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new qt,a=new qt;function l(u,d){let f=0,p=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let v=0,m=0,h=0,M=0,g=0,y=0,E=0,w=0,A=0,B=0,k=0;u.sort(jA);const x=d===!0?Math.PI:1;for(let L=0,X=u.length;L<X;L++){const N=u[L],H=N.color,O=N.intensity,Q=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=H.r*O*x,p+=H.g*O*x,_+=H.b*O*x;else if(N.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(N.sh.coefficients[se],O);k++}else if(N.isDirectionalLight){const se=t.get(N);if(se.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const pe=N.shadow,ge=i.get(N);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,r.directionalShadow[v]=ge,r.directionalShadowMap[v]=G,r.directionalShadowMatrix[v]=N.shadow.matrix,y++}r.directional[v]=se,v++}else if(N.isSpotLight){const se=t.get(N);se.position.setFromMatrixPosition(N.matrixWorld),se.color.copy(H).multiplyScalar(O*x),se.distance=Q,se.coneCos=Math.cos(N.angle),se.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),se.decay=N.decay,r.spot[h]=se;const pe=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,pe.updateMatrices(N),N.castShadow&&B++),r.spotLightMatrix[h]=pe.matrix,N.castShadow){const ge=i.get(N);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,r.spotShadow[h]=ge,r.spotShadowMap[h]=G,w++}h++}else if(N.isRectAreaLight){const se=t.get(N);se.color.copy(H).multiplyScalar(O),se.halfWidth.set(N.width*.5,0,0),se.halfHeight.set(0,N.height*.5,0),r.rectArea[M]=se,M++}else if(N.isPointLight){const se=t.get(N);if(se.color.copy(N.color).multiplyScalar(N.intensity*x),se.distance=N.distance,se.decay=N.decay,N.castShadow){const pe=N.shadow,ge=i.get(N);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,ge.shadowCameraNear=pe.camera.near,ge.shadowCameraFar=pe.camera.far,r.pointShadow[m]=ge,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=N.shadow.matrix,E++}r.point[m]=se,m++}else if(N.isHemisphereLight){const se=t.get(N);se.skyColor.copy(N.color).multiplyScalar(O*x),se.groundColor.copy(N.groundColor).multiplyScalar(O*x),r.hemi[g]=se,g++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==h||T.rectAreaLength!==M||T.hemiLength!==g||T.numDirectionalShadows!==y||T.numPointShadows!==E||T.numSpotShadows!==w||T.numSpotMaps!==A||T.numLightProbes!==k)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=M,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+A-B,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=k,T.directionalLength=v,T.pointLength=m,T.spotLength=h,T.rectAreaLength=M,T.hemiLength=g,T.numDirectionalShadows=y,T.numPointShadows=E,T.numSpotShadows=w,T.numSpotMaps=A,T.numLightProbes=k,r.version=XA++)}function c(u,d){let f=0,p=0,_=0,v=0,m=0;const h=d.matrixWorldInverse;for(let M=0,g=u.length;M<g;M++){const y=u[M];if(y.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),f++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Fp(n,e){const t=new $A(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Fp(n,e),t.set(s,[l])):o>=a.length?(l=new Fp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class YA extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QA(n,e,t){let i=new lf;const r=new Ke,s=new Ke,o=new fn,a=new YA({depthPacking:$S}),l=new KA,c={},u=t.maxTextureSize,d={[Ar]:Fn,[Fn]:Ar,[ln]:ln},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:ZA,fragmentShader:JA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let h=this.type;this.render=function(w,A,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const k=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),L=n.state;L.setBlending(xr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const X=h!==Ni&&this.type===Ni,N=h===Ni&&this.type!==Ni;for(let H=0,O=w.length;H<O;H++){const Q=w[H],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||X===!0||N===!0){const ge=this.type!==Ni?{minFilter:En,magFilter:En}:{};G.map!==null&&G.map.dispose(),G.map=new ss(r.x,r.y,ge),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const pe=G.getViewportCount();for(let ge=0;ge<pe;ge++){const Me=G.getViewport(ge);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),L.viewport(o),G.updateMatrices(Q,ge),i=G.getFrustum(),y(A,B,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Ni&&M(G,B),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(k,x,T)};function M(w,A){const B=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,B,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,B,p,v,null)}function g(w,A,B,k){let x=null;const T=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)x=T;else if(x=B.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=x.uuid,X=A.uuid;let N=c[L];N===void 0&&(N={},c[L]=N);let H=N[X];H===void 0&&(H=x.clone(),N[X]=H,A.addEventListener("dispose",E)),x=H}if(x.visible=A.visible,x.wireframe=A.wireframe,k===Ni?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,B.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=B}return x}function y(w,A,B,k,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ni)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const X=e.update(w),N=w.material;if(Array.isArray(N)){const H=X.groups;for(let O=0,Q=H.length;O<Q;O++){const G=H[O],se=N[G.materialIndex];if(se&&se.visible){const pe=g(w,se,k,x);w.onBeforeShadow(n,w,A,B,X,pe,G),n.renderBufferDirect(B,null,X,pe,w,G),w.onAfterShadow(n,w,A,B,X,pe,G)}}}else if(N.visible){const H=g(w,N,k,x);w.onBeforeShadow(n,w,A,B,X,H,null),n.renderBufferDirect(B,null,X,H,w,null),w.onAfterShadow(n,w,A,B,X,H,null)}}const L=w.children;for(let X=0,N=L.length;X<N;X++)y(L[X],A,B,k,x)}function E(w){w.target.removeEventListener("dispose",E);for(const B in c){const k=c[B],x=w.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}function eC(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const ue=new fn;let fe=null;const ye=new fn(0,0,0,0);return{setMask:function(Re){fe!==Re&&!R&&(n.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){R=Re},setClear:function(Re,Pe,He,at,Rt){Rt===!0&&(Re*=at,Pe*=at,He*=at),ue.set(Re,Pe,He,at),ye.equals(ue)===!1&&(n.clearColor(Re,Pe,He,at),ye.copy(ue))},reset:function(){R=!1,fe=null,ye.set(-1,0,0,0)}}}function s(){let R=!1,ue=null,fe=null,ye=null;return{setTest:function(Re){Re?Ie(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!R&&(n.depthMask(Re),ue=Re)},setFunc:function(Re){if(fe!==Re){switch(Re){case SS:n.depthFunc(n.NEVER);break;case ES:n.depthFunc(n.ALWAYS);break;case wS:n.depthFunc(n.LESS);break;case wl:n.depthFunc(n.LEQUAL);break;case TS:n.depthFunc(n.EQUAL);break;case AS:n.depthFunc(n.GEQUAL);break;case CS:n.depthFunc(n.GREATER);break;case RS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Re}},setLocked:function(Re){R=Re},setClear:function(Re){ye!==Re&&(n.clearDepth(Re),ye=Re)},reset:function(){R=!1,ue=null,fe=null,ye=null}}}function o(){let R=!1,ue=null,fe=null,ye=null,Re=null,Pe=null,He=null,at=null,Rt=null;return{setTest:function(lt){R||(lt?Ie(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!R&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Ot,wt){(fe!==lt||ye!==Ot||Re!==wt)&&(n.stencilFunc(lt,Ot,wt),fe=lt,ye=Ot,Re=wt)},setOp:function(lt,Ot,wt){(Pe!==lt||He!==Ot||at!==wt)&&(n.stencilOp(lt,Ot,wt),Pe=lt,He=Ot,at=wt)},setLocked:function(lt){R=lt},setClear:function(lt){Rt!==lt&&(n.clearStencil(lt),Rt=lt)},reset:function(){R=!1,ue=null,fe=null,ye=null,Re=null,Pe=null,He=null,at=null,Rt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,v=[],m=null,h=!1,M=null,g=null,y=null,E=null,w=null,A=null,B=null,k=new qe(0,0,0),x=0,T=!1,L=null,X=null,N=null,H=null,O=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,se=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),G=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),G=se>=2);let ge=null,Me={};const Ge=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),_e=new fn().fromArray(Ge),Ae=new fn().fromArray(le);function Be(R,ue,fe,ye){const Re=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(R,Pe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<fe;He++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ue+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Pe}const ze={};ze[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(wl),ie(!1),S(_h),Ie(n.CULL_FACE),K(xr);function Ie(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function st(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function $e(R,ue){return p[R]!==ue?(n.bindFramebuffer(R,ue),p[R]=ue,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function q(R,ue){let fe=v,ye=!1;if(R)if(fe=_.get(ue),fe===void 0&&(fe=[],_.set(ue,fe)),R.isWebGLMultipleRenderTargets){const Re=R.texture;if(fe.length!==Re.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,He=Re.length;Pe<He;Pe++)fe[Pe]=n.COLOR_ATTACHMENT0+Pe;fe.length=Re.length,ye=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,ye=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function I(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const D={[Vr]:n.FUNC_ADD,[lS]:n.FUNC_SUBTRACT,[cS]:n.FUNC_REVERSE_SUBTRACT};if(i)D[bh]=n.MIN,D[Mh]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(D[bh]=R.MIN_EXT,D[Mh]=R.MAX_EXT)}const W={[uS]:n.ZERO,[dS]:n.ONE,[fS]:n.SRC_COLOR,[qu]:n.SRC_ALPHA,[vS]:n.SRC_ALPHA_SATURATE,[gS]:n.DST_COLOR,[pS]:n.DST_ALPHA,[hS]:n.ONE_MINUS_SRC_COLOR,[Yu]:n.ONE_MINUS_SRC_ALPHA,[_S]:n.ONE_MINUS_DST_COLOR,[mS]:n.ONE_MINUS_DST_ALPHA,[xS]:n.CONSTANT_COLOR,[yS]:n.ONE_MINUS_CONSTANT_COLOR,[bS]:n.CONSTANT_ALPHA,[MS]:n.ONE_MINUS_CONSTANT_ALPHA};function K(R,ue,fe,ye,Re,Pe,He,at,Rt,lt){if(R===xr){h===!0&&(st(n.BLEND),h=!1);return}if(h===!1&&(Ie(n.BLEND),h=!0),R!==aS){if(R!==M||lt!==T){if((g!==Vr||w!==Vr)&&(n.blendEquation(n.FUNC_ADD),g=Vr,w=Vr),lt)switch(R){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.ONE,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,E=null,A=null,B=null,k.set(0,0,0),x=0,M=R,T=lt}return}Re=Re||ue,Pe=Pe||fe,He=He||ye,(ue!==g||Re!==w)&&(n.blendEquationSeparate(D[ue],D[Re]),g=ue,w=Re),(fe!==y||ye!==E||Pe!==A||He!==B)&&(n.blendFuncSeparate(W[fe],W[ye],W[Pe],W[He]),y=fe,E=ye,A=Pe,B=He),(at.equals(k)===!1||Rt!==x)&&(n.blendColor(at.r,at.g,at.b,Rt),k.copy(at),x=Rt),M=R,T=!1}function ce(R,ue){R.side===ln?st(n.CULL_FACE):Ie(n.CULL_FACE);let fe=R.side===Fn;ue&&(fe=!fe),ie(fe),R.blending===Ks&&R.transparent===!1?K(xr):K(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ye=R.stencilWrite;c.setTest(ye),ye&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),U(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(R){L!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),L=R)}function S(R){R!==rS?(Ie(n.CULL_FACE),R!==X&&(R===_h?n.cullFace(n.BACK):R===sS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),X=R}function b(R){R!==N&&(G&&n.lineWidth(R),N=R)}function U(R,ue,fe){R?(Ie(n.POLYGON_OFFSET_FILL),(H!==ue||O!==fe)&&(n.polygonOffset(ue,fe),H=ue,O=fe)):st(n.POLYGON_OFFSET_FILL)}function z(R){R?Ie(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function Z(R){R===void 0&&(R=n.TEXTURE0+Q-1),ge!==R&&(n.activeTexture(R),ge=R)}function P(R,ue,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+Q-1:fe=ge);let ye=Me[fe];ye===void 0&&(ye={type:void 0,texture:void 0},Me[fe]=ye),(ye.type!==R||ye.texture!==ue)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(R,ue||ze[R]),ye.type=R,ye.texture=ue)}function F(){const R=Me[ge];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(R){_e.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),_e.copy(R))}function Ue(R){Ae.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Ae.copy(R))}function nt(R,ue){let fe=d.get(ue);fe===void 0&&(fe=new WeakMap,d.set(ue,fe));let ye=fe.get(R);ye===void 0&&(ye=n.getUniformBlockIndex(ue,R.name),fe.set(R,ye))}function Xe(R,ue){const ye=d.get(ue).get(R);u.get(ue)!==ye&&(n.uniformBlockBinding(ue,ye,R.__bindingPointIndex),u.set(ue,ye))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ge=null,Me={},p={},_=new WeakMap,v=[],m=null,h=!1,M=null,g=null,y=null,E=null,w=null,A=null,B=null,k=new qe(0,0,0),x=0,T=!1,L=null,X=null,N=null,H=null,O=null,_e.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:st,bindFramebuffer:$e,drawBuffers:q,useProgram:I,setBlending:K,setMaterial:ce,setFlipSided:ie,setCullFace:S,setLineWidth:b,setPolygonOffset:U,setScissorTest:z,activeTexture:Z,bindTexture:P,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:re,texImage2D:ae,texImage3D:xe,updateUBOMapping:nt,uniformBlockBinding:Xe,texStorage2D:Se,texStorage3D:be,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:ve,scissor:we,viewport:Ue,reset:ke}}function tC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,b){return p?new OffscreenCanvas(S,b):Pl("canvas")}function v(S,b,U,z){let Z=1;if((S.width>z||S.height>z)&&(Z=z/Math.max(S.width,S.height)),Z<1||b===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const P=b?id:Math.floor,F=P(Z*S.width),j=P(Z*S.height);d===void 0&&(d=_(F,j));const re=U?_(F,j):d;return re.width=F,re.height=j,re.getContext("2d").drawImage(S,0,0,F,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+F+"x"+j+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Zh(S.width)&&Zh(S.height)}function h(S){return a?!1:S.wrapS!==ai||S.wrapT!==ai||S.minFilter!==En&&S.minFilter!==Ln}function M(S,b){return S.generateMipmaps&&b&&S.minFilter!==En&&S.minFilter!==Ln}function g(S){n.generateMipmap(S)}function y(S,b,U,z,Z=!1){if(a===!1)return b;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let P=b;if(b===n.RED&&(U===n.FLOAT&&(P=n.R32F),U===n.HALF_FLOAT&&(P=n.R16F),U===n.UNSIGNED_BYTE&&(P=n.R8)),b===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(P=n.R8UI),U===n.UNSIGNED_SHORT&&(P=n.R16UI),U===n.UNSIGNED_INT&&(P=n.R32UI),U===n.BYTE&&(P=n.R8I),U===n.SHORT&&(P=n.R16I),U===n.INT&&(P=n.R32I)),b===n.RG&&(U===n.FLOAT&&(P=n.RG32F),U===n.HALF_FLOAT&&(P=n.RG16F),U===n.UNSIGNED_BYTE&&(P=n.RG8)),b===n.RGBA){const F=Z?Tl:Mt.getTransfer(z);U===n.FLOAT&&(P=n.RGBA32F),U===n.HALF_FLOAT&&(P=n.RGBA16F),U===n.UNSIGNED_BYTE&&(P=F===Dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function E(S,b,U){return M(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function w(S){return S===En||S===Sh||S===bo?n.NEAREST:n.LINEAR}function A(S){const b=S.target;b.removeEventListener("dispose",A),k(b),b.isVideoTexture&&u.delete(b)}function B(S){const b=S.target;b.removeEventListener("dispose",B),T(b)}function k(S){const b=i.get(S);if(b.__webglInit===void 0)return;const U=S.source,z=f.get(U);if(z){const Z=z[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(S),Object.keys(z).length===0&&f.delete(U)}i.remove(S)}function x(S){const b=i.get(S);n.deleteTexture(b.__webglTexture);const U=S.source,z=f.get(U);delete z[b.__cacheKey],o.memory.textures--}function T(S){const b=S.texture,U=i.get(S),z=i.get(b);if(z.__webglTexture!==void 0&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(U.__webglFramebuffer[Z]))for(let P=0;P<U.__webglFramebuffer[Z].length;P++)n.deleteFramebuffer(U.__webglFramebuffer[Z][P]);else n.deleteFramebuffer(U.__webglFramebuffer[Z]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Z])}else{if(Array.isArray(U.__webglFramebuffer))for(let Z=0;Z<U.__webglFramebuffer.length;Z++)n.deleteFramebuffer(U.__webglFramebuffer[Z]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Z=0;Z<U.__webglColorRenderbuffer.length;Z++)U.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Z=0,P=b.length;Z<P;Z++){const F=i.get(b[Z]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(b[Z])}i.remove(b),i.remove(S)}let L=0;function X(){L=0}function N(){const S=L;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S}function H(S){const b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.wrapR||0),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.colorSpace),b.join()}function O(S,b){const U=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(U,S,b);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+b)}function Q(S,b){const U=i.get(S);if(S.version>0&&U.__version!==S.version){_e(U,S,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+b)}function G(S,b){const U=i.get(S);if(S.version>0&&U.__version!==S.version){_e(U,S,b);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+b)}function se(S,b){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Ae(U,S,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+b)}const pe={[Ju]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Qu]:n.MIRRORED_REPEAT},ge={[En]:n.NEAREST,[Sh]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[kc]:n.LINEAR_MIPMAP_NEAREST,[jr]:n.LINEAR_MIPMAP_LINEAR},Me={[YS]:n.NEVER,[tE]:n.ALWAYS,[KS]:n.LESS,[O_]:n.LEQUAL,[ZS]:n.EQUAL,[eE]:n.GEQUAL,[JS]:n.GREATER,[QS]:n.NOTEQUAL};function Ge(S,b,U){if(b.type===zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===kc||b.magFilter===bo||b.magFilter===jr||b.minFilter===Ln||b.minFilter===kc||b.minFilter===bo||b.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(S,n.TEXTURE_WRAP_S,pe[b.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,pe[b.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,pe[b.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[b.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[b.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==ai||b.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==En&&b.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===En||b.minFilter!==bo&&b.minFilter!==jr||b.type===zi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Yo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function le(S,b){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",A));const z=b.source;let Z=f.get(z);Z===void 0&&(Z={},f.set(z,Z));const P=H(b);if(P!==S.__cacheKey){Z[P]===void 0&&(Z[P]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[P].usedTimes++;const F=Z[S.__cacheKey];F!==void 0&&(Z[S.__cacheKey].usedTimes--,F.usedTimes===0&&x(b)),S.__cacheKey=P,S.__webglTexture=Z[P].texture}return U}function _e(S,b,U){let z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(z=n.TEXTURE_3D);const Z=le(S,b),P=b.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+U);const F=i.get(P);if(P.version!==F.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const j=Mt.getPrimaries(Mt.workingColorSpace),re=b.colorSpace===Kn?null:Mt.getPrimaries(b.colorSpace),he=b.colorSpace===Kn||j===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=h(b)&&m(b.image)===!1;let oe=v(b.image,me,!1,r.maxTextureSize);oe=ie(b,oe);const ve=m(oe)||a,Se=s.convert(b.format,b.colorSpace);let be=s.convert(b.type),ae=y(b.internalFormat,Se,be,b.colorSpace,b.isVideoTexture);Ge(z,b,ve);let xe;const we=b.mipmaps,Ue=a&&b.isVideoTexture!==!0&&ae!==D_,nt=F.__version===void 0||Z===!0,Xe=P.dataReady,ke=E(b,oe,ve);if(b.isDepthTexture)ae=n.DEPTH_COMPONENT,a?b.type===zi?ae=n.DEPTH_COMPONENT32F:b.type===pr?ae=n.DEPTH_COMPONENT24:b.type===Zr?ae=n.DEPTH24_STENCIL8:ae=n.DEPTH_COMPONENT16:b.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Jr&&ae===n.DEPTH_COMPONENT&&b.type!==rf&&b.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=pr,be=s.convert(b.type)),b.format===io&&ae===n.DEPTH_COMPONENT&&(ae=n.DEPTH_STENCIL,b.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Zr,be=s.convert(b.type))),nt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ae,oe.width,oe.height,0,Se,be,null));else if(b.isDataTexture)if(we.length>0&&ve){Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,ke,ae,we[0].width,we[0].height);for(let R=0,ue=we.length;R<ue;R++)xe=we[R],Ue?Xe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,xe.width,xe.height,Se,be,xe.data):t.texImage2D(n.TEXTURE_2D,R,ae,xe.width,xe.height,0,Se,be,xe.data);b.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(n.TEXTURE_2D,ke,ae,oe.width,oe.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,be,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ae,oe.width,oe.height,0,Se,be,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ae,we[0].width,we[0].height,oe.depth);for(let R=0,ue=we.length;R<ue;R++)xe=we[R],b.format!==li?Se!==null?Ue?Xe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,xe.width,xe.height,oe.depth,Se,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,ae,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,xe.width,xe.height,oe.depth,Se,be,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,ae,xe.width,xe.height,oe.depth,0,Se,be,xe.data)}else{Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,ke,ae,we[0].width,we[0].height);for(let R=0,ue=we.length;R<ue;R++)xe=we[R],b.format!==li?Se!==null?Ue?Xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,R,ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Xe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,xe.width,xe.height,Se,be,xe.data):t.texImage2D(n.TEXTURE_2D,R,ae,xe.width,xe.height,0,Se,be,xe.data)}else if(b.isDataArrayTexture)Ue?(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ae,oe.width,oe.height,oe.depth),Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,be,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,oe.width,oe.height,oe.depth,0,Se,be,oe.data);else if(b.isData3DTexture)Ue?(nt&&t.texStorage3D(n.TEXTURE_3D,ke,ae,oe.width,oe.height,oe.depth),Xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,be,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ae,oe.width,oe.height,oe.depth,0,Se,be,oe.data);else if(b.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(n.TEXTURE_2D,ke,ae,oe.width,oe.height);else{let R=oe.width,ue=oe.height;for(let fe=0;fe<ke;fe++)t.texImage2D(n.TEXTURE_2D,fe,ae,R,ue,0,Se,be,null),R>>=1,ue>>=1}}else if(we.length>0&&ve){Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,ke,ae,we[0].width,we[0].height);for(let R=0,ue=we.length;R<ue;R++)xe=we[R],Ue?Xe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,Se,be,xe):t.texImage2D(n.TEXTURE_2D,R,ae,Se,be,xe);b.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(n.TEXTURE_2D,ke,ae,oe.width,oe.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,be,oe)):t.texImage2D(n.TEXTURE_2D,0,ae,Se,be,oe);M(b,ve)&&g(z),F.__version=P.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function Ae(S,b,U){if(b.image.length!==6)return;const z=le(S,b),Z=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const P=i.get(Z);if(Z.version!==P.__version||z===!0){t.activeTexture(n.TEXTURE0+U);const F=Mt.getPrimaries(Mt.workingColorSpace),j=b.colorSpace===Kn?null:Mt.getPrimaries(b.colorSpace),re=b.colorSpace===Kn||F===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let R=0;R<6;R++)!he&&!me?oe[R]=v(b.image[R],!1,!0,r.maxCubemapSize):oe[R]=me?b.image[R].image:b.image[R],oe[R]=ie(b,oe[R]);const ve=oe[0],Se=m(ve)||a,be=s.convert(b.format,b.colorSpace),ae=s.convert(b.type),xe=y(b.internalFormat,be,ae,b.colorSpace),we=a&&b.isVideoTexture!==!0,Ue=P.__version===void 0||z===!0,nt=Z.dataReady;let Xe=E(b,ve,Se);Ge(n.TEXTURE_CUBE_MAP,b,Se);let ke;if(he){we&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,xe,ve.width,ve.height);for(let R=0;R<6;R++){ke=oe[R].mipmaps;for(let ue=0;ue<ke.length;ue++){const fe=ke[ue];b.format!==li?be!==null?we?nt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue,0,0,fe.width,fe.height,be,ae,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue,xe,fe.width,fe.height,0,be,ae,fe.data)}}}else{ke=b.mipmaps,we&&Ue&&(ke.length>0&&Xe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,xe,oe[0].width,oe[0].height));for(let R=0;R<6;R++)if(me){we?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,oe[R].width,oe[R].height,be,ae,oe[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,xe,oe[R].width,oe[R].height,0,be,ae,oe[R].data);for(let ue=0;ue<ke.length;ue++){const ye=ke[ue].image[R].image;we?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue+1,0,0,ye.width,ye.height,be,ae,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue+1,xe,ye.width,ye.height,0,be,ae,ye.data)}}else{we?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,be,ae,oe[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,xe,be,ae,oe[R]);for(let ue=0;ue<ke.length;ue++){const fe=ke[ue];we?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue+1,0,0,be,ae,fe.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,ue+1,xe,be,ae,fe.image[R])}}}M(b,Se)&&g(n.TEXTURE_CUBE_MAP),P.__version=Z.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function Be(S,b,U,z,Z,P){const F=s.convert(U.format,U.colorSpace),j=s.convert(U.type),re=y(U.internalFormat,F,j,U.colorSpace);if(!i.get(b).__hasExternalTextures){const me=Math.max(1,b.width>>P),oe=Math.max(1,b.height>>P);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,P,re,me,oe,b.depth,0,F,j,null):t.texImage2D(Z,P,re,me,oe,0,F,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),K(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,Z,i.get(U).__webglTexture,0,W(b)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,Z,i.get(U).__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(S,b,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),b.depthBuffer&&!b.stencilBuffer){let z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||K(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===zi?z=n.DEPTH_COMPONENT32F:Z.type===pr&&(z=n.DEPTH_COMPONENT24));const P=W(b);K(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,z,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,P,z,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(b.depthBuffer&&b.stencilBuffer){const z=W(b);U&&K(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,b.width,b.height):K(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0;Z<z.length;Z++){const P=z[Z],F=s.convert(P.format,P.colorSpace),j=s.convert(P.type),re=y(P.internalFormat,F,j,P.colorSpace),he=W(b);U&&K(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,re,b.width,b.height):K(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,re,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,re,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const z=i.get(b.depthTexture).__webglTexture,Z=W(b);if(b.depthTexture.format===Jr)K(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(b.depthTexture.format===io)K(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function st(S){const b=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,S)}else if(U){b.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[z]),b.__webglDepthbuffer[z]=n.createRenderbuffer(),ze(b.__webglDepthbuffer[z],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ze(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(S,b,U){const z=i.get(S);b!==void 0&&Be(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&st(S)}function q(S){const b=S.texture,U=i.get(S),z=i.get(b);S.addEventListener("dispose",B),S.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=b.version,o.memory.textures++);const Z=S.isWebGLCubeRenderTarget===!0,P=S.isWebGLMultipleRenderTargets===!0,F=m(S)||a;if(Z){U.__webglFramebuffer=[];for(let j=0;j<6;j++)if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[j]=[];for(let re=0;re<b.mipmaps.length;re++)U.__webglFramebuffer[j][re]=n.createFramebuffer()}else U.__webglFramebuffer[j]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)U.__webglFramebuffer[j]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(P)if(r.drawBuffers){const j=S.texture;for(let re=0,he=j.length;re<he;re++){const me=i.get(j[re]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&K(S)===!1){const j=P?b:[b];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<j.length;re++){const he=j[re];U.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const me=s.convert(he.format,he.colorSpace),oe=s.convert(he.type),ve=y(he.internalFormat,me,oe,he.colorSpace,S.isXRRenderTarget===!0),Se=W(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,U.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,b,F);for(let j=0;j<6;j++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Be(U.__webglFramebuffer[j][re],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,re);else Be(U.__webglFramebuffer[j],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(b,F)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const j=S.texture;for(let re=0,he=j.length;re<he;re++){const me=j[re],oe=i.get(me);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Ge(n.TEXTURE_2D,me,F),Be(U.__webglFramebuffer,S,me,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),M(me,F)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?j=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,z.__webglTexture),Ge(j,b,F),a&&b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Be(U.__webglFramebuffer[re],S,b,n.COLOR_ATTACHMENT0,j,re);else Be(U.__webglFramebuffer,S,b,n.COLOR_ATTACHMENT0,j,0);M(b,F)&&g(j),t.unbindTexture()}S.depthBuffer&&st(S)}function I(S){const b=m(S)||a,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let z=0,Z=U.length;z<Z;z++){const P=U[z];if(M(P,b)){const F=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,j=i.get(P).__webglTexture;t.bindTexture(F,j),g(F),t.unbindTexture()}}}function D(S){if(a&&S.samples>0&&K(S)===!1){const b=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,z=S.height;let Z=n.COLOR_BUFFER_BIT;const P=[],F=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(S),re=S.isWebGLMultipleRenderTargets===!0;if(re)for(let he=0;he<b.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let he=0;he<b.length;he++){P.push(n.COLOR_ATTACHMENT0+he),S.depthBuffer&&P.push(F);const me=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(me===!1&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[he]),me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[F]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[F])),re){const oe=i.get(b[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<b.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,j.__webglColorRenderbuffer[he]);const me=i.get(b[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function W(S){return Math.min(r.maxSamples,S.samples)}function K(S){const b=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(S){const b=o.render.frame;u.get(S)!==b&&(u.set(S,b),S.update())}function ie(S,b){const U=S.colorSpace,z=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===td||U!==ji&&U!==Kn&&(Mt.getTransfer(U)===Dt?a===!1?e.has("EXT_sRGB")===!0&&z===li?(S.format=td,S.minFilter=Ln,S.generateMipmaps=!1):b=k_.sRGBToLinear(b):(z!==li||Z!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=N,this.resetTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=Q,this.setTexture3D=G,this.setTextureCube=se,this.rebindTextures=$e,this.setupRenderTarget=q,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=K}function nC(n,e,t){const i=t.isWebGL2;function r(s,o=Kn){let a;const l=Mt.getTransfer(o);if(s===br)return n.UNSIGNED_BYTE;if(s===C_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===R_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===BS)return n.BYTE;if(s===kS)return n.SHORT;if(s===rf)return n.UNSIGNED_SHORT;if(s===A_)return n.INT;if(s===pr)return n.UNSIGNED_INT;if(s===zi)return n.FLOAT;if(s===Yo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zS)return n.ALPHA;if(s===li)return n.RGBA;if(s===HS)return n.LUMINANCE;if(s===VS)return n.LUMINANCE_ALPHA;if(s===Jr)return n.DEPTH_COMPONENT;if(s===io)return n.DEPTH_STENCIL;if(s===td)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===GS)return n.RED;if(s===P_)return n.RED_INTEGER;if(s===WS)return n.RG;if(s===L_)return n.RG_INTEGER;if(s===I_)return n.RGBA_INTEGER;if(s===zc||s===Hc||s===Vc||s===Gc)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===wh||s===Th||s===Ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===D_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ch||s===Rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ch)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ph||s===Lh||s===Ih||s===Dh||s===Nh||s===Uh||s===Oh||s===Fh||s===Bh||s===kh||s===zh||s===Hh||s===Vh||s===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ph)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gh)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wc||s===Wh||s===Xh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wc)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===XS||s===jh||s===$h||s===qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class iC extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class On extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rC={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new On;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Cr({extensions:{fragDepth:!0},vertexShader:sC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gt(new fc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class lC extends ho{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=new aC,m=t.getContextAttributes();let h=null,M=null;const g=[],y=[],E=new Ke;let w=null;const A=new si;A.layers.enable(1),A.viewport=new fn;const B=new si;B.layers.enable(2),B.viewport=new fn;const k=[A,B],x=new iC;x.layers.enable(1),x.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let _e=g[le];return _e===void 0&&(_e=new mu,g[le]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(le){let _e=g[le];return _e===void 0&&(_e=new mu,g[le]=_e),_e.getGripSpace()},this.getHand=function(le){let _e=g[le];return _e===void 0&&(_e=new mu,g[le]=_e),_e.getHandSpace()};function X(le){const _e=y.indexOf(le.inputSource);if(_e===-1)return;const Ae=g[_e];Ae!==void 0&&(Ae.update(le.inputSource,le.frame,c||o),Ae.dispatchEvent({type:le.type,data:le.inputSource}))}function N(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",H);for(let le=0;le<g.length;le++){const _e=y[le];_e!==null&&(y[le]=null,g[le].disconnect(_e))}T=null,L=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,M=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",N),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ss(p.framebufferWidth,p.framebufferHeight,{format:li,type:br,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let _e=null,Ae=null,Be=null;m.depth&&(Be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?io:Jr,Ae=m.stencil?Zr:pr);const ze={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ss(f.textureWidth,f.textureHeight,{format:li,type:br,depthTexture:new Z_(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ie=e.properties.get(M);Ie.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(le){for(let _e=0;_e<le.removed.length;_e++){const Ae=le.removed[_e],Be=y.indexOf(Ae);Be>=0&&(y[Be]=null,g[Be].disconnect(Ae))}for(let _e=0;_e<le.added.length;_e++){const Ae=le.added[_e];let Be=y.indexOf(Ae);if(Be===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=y.length){y.push(Ae),Be=Ie;break}else if(y[Ie]===null){y[Ie]=Ae,Be=Ie;break}if(Be===-1)break}const ze=g[Be];ze&&ze.connect(Ae)}}const O=new Y,Q=new Y;function G(le,_e,Ae){O.setFromMatrixPosition(_e.matrixWorld),Q.setFromMatrixPosition(Ae.matrixWorld);const Be=O.distanceTo(Q),ze=_e.projectionMatrix.elements,Ie=Ae.projectionMatrix.elements,st=ze[14]/(ze[10]-1),$e=ze[14]/(ze[10]+1),q=(ze[9]+1)/ze[5],I=(ze[9]-1)/ze[5],D=(ze[8]-1)/ze[0],W=(Ie[8]+1)/Ie[0],K=st*D,ce=st*W,ie=Be/(-D+W),S=ie*-D;_e.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(S),le.translateZ(ie),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const b=st+ie,U=$e+ie,z=K-S,Z=ce+(Be-S),P=q*$e/U*b,F=I*$e/U*b;le.projectionMatrix.makePerspective(z,Z,P,F,b,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}function se(le,_e){_e===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(_e.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;v.texture!==null&&(le.near=v.depthNear,le.far=v.depthFar),x.near=B.near=A.near=le.near,x.far=B.far=A.far=le.far,(T!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,L=x.far,A.near=T,A.far=L,B.near=T,B.far=L,A.updateProjectionMatrix(),B.updateProjectionMatrix(),le.updateProjectionMatrix());const _e=le.parent,Ae=x.cameras;se(x,_e);for(let Be=0;Be<Ae.length;Be++)se(Ae[Be],_e);Ae.length===2?G(x,A,B):x.projectionMatrix.copy(A.projectionMatrix),pe(le,x,_e)};function pe(le,_e,Ae){Ae===null?le.matrix.copy(_e.matrixWorld):(le.matrix.copy(Ae.matrixWorld),le.matrix.invert(),le.matrix.multiply(_e.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=nd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null};let ge=null;function Me(le,_e){if(u=_e.getViewerPose(c||o),_=_e,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Be=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Be=!0);for(let Ie=0;Ie<Ae.length;Ie++){const st=Ae[Ie];let $e=null;if(p!==null)$e=p.getViewport(st);else{const I=d.getViewSubImage(f,st);$e=I.viewport,Ie===0&&(e.setRenderTargetTextures(M,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(M))}let q=k[Ie];q===void 0&&(q=new si,q.layers.enable(Ie),q.viewport=new fn,k[Ie]=q),q.matrix.fromArray(st.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(st.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set($e.x,$e.y,$e.width,$e.height),Ie===0&&(x.matrix.copy(q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Be===!0&&x.cameras.push(q)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Ie=d.getDepthInformation(Ae[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,r.renderState)}}for(let Ae=0;Ae<g.length;Ae++){const Be=y[Ae],ze=g[Ae];Be!==null&&ze!==void 0&&ze.update(Be,_e,c||o)}v.render(e,x),ge&&ge(le,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Ge=new K_;Ge.setAnimationLoop(Me),this.setAnimationLoop=function(le){ge=le},this.dispose=function(){}}}function cC(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,$_(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,g,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,M,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,g){const y=g.program;i.uniformBlockBinding(M,y)}function c(M,g){let y=r[M.id];y===void 0&&(_(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(M,E);const w=e.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const g=d();M.__bindingPointIndex=g;const y=n.createBuffer(),E=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const g=r[M.id],y=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,A=y.length;w<A;w++){const B=Array.isArray(y[w])?y[w]:[y[w]];for(let k=0,x=B.length;k<x;k++){const T=B[k];if(p(T,w,k,E)===!0){const L=T.__offset,X=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let H=0;H<X.length;H++){const O=X[H],Q=v(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,L+N,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,g,y,E){const w=M.value,A=g+"_"+y;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const B=E[A];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return E[A]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function _(M){const g=M.uniforms;let y=0;const E=16;for(let A=0,B=g.length;A<B;A++){const k=Array.isArray(g[A])?g[A]:[g[A]];for(let x=0,T=k.length;x<T;x++){const L=k[x],X=Array.isArray(L.value)?L.value:[L.value];for(let N=0,H=X.length;N<H;N++){const O=X[N],Q=v(O),G=y%E;G!==0&&E-G<Q.boundary&&(y+=E-G),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Q.storage}}}const w=y%E;return w>0&&(y+=E-w),M.__size=y,M.__cache={},this}function v(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function m(M){const g=M.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class iv{constructor(e={}){const{canvas:t=iE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const g=this;let y=!1,E=0,w=0,A=null,B=-1,k=null;const x=new fn,T=new fn;let L=null;const X=new qe(0);let N=0,H=t.width,O=t.height,Q=1,G=null,se=null;const pe=new fn(0,0,H,O),ge=new fn(0,0,H,O);let Me=!1;const Ge=new lf;let le=!1,_e=!1,Ae=null;const Be=new qt,ze=new Ke,Ie=new Y,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return A===null?Q:1}let q=i;function I(C,V){for(let J=0;J<C.length;J++){const te=C[J],ee=t.getContext(te,V);if(ee!==null)return ee}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tf}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ue,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),q=I(V,C),q===null)throw I(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let D,W,K,ce,ie,S,b,U,z,Z,P,F,j,re,he,me,oe,ve,Se,be,ae,xe,we,Ue;function nt(){D=new _1(q),W=new d1(q,D,e),D.init(W),xe=new nC(q,D,W),K=new eC(q,D,W),ce=new y1(q),ie=new zA,S=new tC(q,D,K,ie,W,xe,ce),b=new h1(g),U=new g1(g),z=new CE(q,W),we=new c1(q,D,z,W),Z=new v1(q,z,ce,we),P=new E1(q,Z,z,ce),Se=new S1(q,W,S),me=new f1(ie),F=new kA(g,b,U,D,W,we,me),j=new cC(g,ie),re=new VA,he=new qA(D,W),ve=new l1(g,b,U,K,P,f,l),oe=new QA(g,P,W),Ue=new uC(q,ce,W,K),be=new u1(q,D,ce,W),ae=new x1(q,D,ce,W),ce.programs=F.programs,g.capabilities=W,g.extensions=D,g.properties=ie,g.renderLists=re,g.shadowMap=oe,g.state=K,g.info=ce}nt();const Xe=new lC(g,q);this.xr=Xe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=D.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=D.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(H,O,!1))},this.getSize=function(C){return C.set(H,O)},this.setSize=function(C,V,J=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,O=V,t.width=Math.floor(C*Q),t.height=Math.floor(V*Q),J===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(H*Q,O*Q).floor()},this.setDrawingBufferSize=function(C,V,J){H=C,O=V,Q=J,t.width=Math.floor(C*J),t.height=Math.floor(V*J),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,V,J,te){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,V,J,te),K.viewport(x.copy(pe).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(ge)},this.setScissor=function(C,V,J,te){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,V,J,te),K.scissor(T.copy(ge).multiplyScalar(Q).floor())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){K.setScissorTest(Me=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(C=!0,V=!0,J=!0){let te=0;if(C){let ee=!1;if(A!==null){const Te=A.texture.format;ee=Te===I_||Te===L_||Te===P_}if(ee){const Te=A.texture.type,Oe=Te===br||Te===pr||Te===rf||Te===Zr||Te===C_||Te===R_,Ve=ve.getClearColor(),Ye=ve.getClearAlpha(),it=Ve.r,et=Ve.g,Je=Ve.b;Oe?(p[0]=it,p[1]=et,p[2]=Je,p[3]=Ye,q.clearBufferuiv(q.COLOR,0,p)):(_[0]=it,_[1]=et,_[2]=Je,_[3]=Ye,q.clearBufferiv(q.COLOR,0,_))}else te|=q.COLOR_BUFFER_BIT}V&&(te|=q.DEPTH_BUFFER_BIT),J&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),re.dispose(),he.dispose(),ie.dispose(),b.dispose(),U.dispose(),P.dispose(),we.dispose(),Ue.dispose(),F.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Rt),Xe.removeEventListener("sessionend",lt),Ae&&(Ae.dispose(),Ae=null),Ot.stop()};function ke(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ce.autoReset,V=oe.enabled,J=oe.autoUpdate,te=oe.needsUpdate,ee=oe.type;nt(),ce.autoReset=C,oe.enabled=V,oe.autoUpdate=J,oe.needsUpdate=te,oe.type=ee}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fe(C){const V=C.target;V.removeEventListener("dispose",fe),ye(V)}function ye(C){Re(C),ie.remove(C)}function Re(C){const V=ie.get(C).programs;V!==void 0&&(V.forEach(function(J){F.releaseProgram(J)}),C.isShaderMaterial&&F.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,J,te,ee,Te){V===null&&(V=st);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=gi(C,V,J,te,ee);K.setMaterial(te,Oe);let Ye=J.index,it=1;if(te.wireframe===!0){if(Ye=Z.getWireframeAttribute(J),Ye===void 0)return;it=2}const et=J.drawRange,Je=J.attributes.position;let Lt=et.start*it,dn=(et.start+et.count)*it;Te!==null&&(Lt=Math.max(Lt,Te.start*it),dn=Math.min(dn,(Te.start+Te.count)*it)),Ye!==null?(Lt=Math.max(Lt,0),dn=Math.min(dn,Ye.count)):Je!=null&&(Lt=Math.max(Lt,0),dn=Math.min(dn,Je.count));const Wt=dn-Lt;if(Wt<0||Wt===1/0)return;we.setup(ee,te,Ve,J,Ye);let Xn,xt=be;if(Ye!==null&&(Xn=z.get(Ye),xt=ae,xt.setIndex(Xn)),ee.isMesh)te.wireframe===!0?(K.setLineWidth(te.wireframeLinewidth*$e()),xt.setMode(q.LINES)):xt.setMode(q.TRIANGLES);else if(ee.isLine){let tt=te.linewidth;tt===void 0&&(tt=1),K.setLineWidth(tt*$e()),ee.isLineSegments?xt.setMode(q.LINES):ee.isLineLoop?xt.setMode(q.LINE_LOOP):xt.setMode(q.LINE_STRIP)}else ee.isPoints?xt.setMode(q.POINTS):ee.isSprite&&xt.setMode(q.TRIANGLES);if(ee.isBatchedMesh)xt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)xt.renderInstances(Lt,Wt,ee.count);else if(J.isInstancedBufferGeometry){const tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,gc=Math.min(J.instanceCount,tt);xt.renderInstances(Lt,Wt,gc)}else xt.render(Lt,Wt)};function Pe(C,V,J){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,Wn(C,V,J),C.side=Ar,C.needsUpdate=!0,Wn(C,V,J),C.side=ln):Wn(C,V,J)}this.compile=function(C,V,J=null){J===null&&(J=C),m=he.get(J),m.init(),M.push(m),J.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),C!==J&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(g._useLegacyLights);const te=new Set;return C.traverse(function(ee){const Te=ee.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){const Ve=Te[Oe];Pe(Ve,J,ee),te.add(Ve)}else Pe(Te,J,ee),te.add(Te)}),M.pop(),m=null,te},this.compileAsync=function(C,V,J=null){const te=this.compile(C,V,J);return new Promise(ee=>{function Te(){if(te.forEach(function(Oe){ie.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){ee(C);return}setTimeout(Te,10)}D.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let He=null;function at(C){He&&He(C)}function Rt(){Ot.stop()}function lt(){Ot.start()}const Ot=new K_;Ot.setAnimationLoop(at),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(C){He=C,Xe.setAnimationLoop(C),C===null?Ot.stop():Ot.start()},Xe.addEventListener("sessionstart",Rt),Xe.addEventListener("sessionend",lt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(V),V=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,V,A),m=he.get(C,M.length),m.init(),M.push(m),Be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ge.setFromProjectionMatrix(Be),_e=this.localClippingEnabled,le=me.init(this.clippingPlanes,_e),v=re.get(C,h.length),v.init(),h.push(v),wt(C,V,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(G,se),this.info.render.frame++,le===!0&&me.beginShadows();const J=m.state.shadowsArray;if(oe.render(J,C,V),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1)&&ve.render(v,C),m.setupLights(g._useLegacyLights),V.isArrayCamera){const te=V.cameras;for(let ee=0,Te=te.length;ee<Te;ee++){const Oe=te[ee];ut(v,C,Oe,Oe.viewport)}}else ut(v,C,V);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,V),we.resetDefaultState(),B=-1,k=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function wt(C,V,J,te){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){te&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const Oe=P.update(C),Ve=C.material;Ve.visible&&v.push(C,Oe,Ve,J,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const Oe=P.update(C),Ve=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ie.copy(Oe.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Ve)){const Ye=Oe.groups;for(let it=0,et=Ye.length;it<et;it++){const Je=Ye[it],Lt=Ve[Je.materialIndex];Lt&&Lt.visible&&v.push(C,Oe,Lt,J,Ie.z,Je)}}else Ve.visible&&v.push(C,Oe,Ve,J,Ie.z,null)}}const Te=C.children;for(let Oe=0,Ve=Te.length;Oe<Ve;Oe++)wt(Te[Oe],V,J,te)}function ut(C,V,J,te){const ee=C.opaque,Te=C.transmissive,Oe=C.transparent;m.setupLightsView(J),le===!0&&me.setGlobalState(g.clippingPlanes,J),Te.length>0&&Kt(ee,Te,V,J),te&&K.viewport(x.copy(te)),ee.length>0&&Rn(ee,V,J),Te.length>0&&Rn(Te,V,J),Oe.length>0&&Rn(Oe,V,J),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Kt(C,V,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Te=W.isWebGL2;Ae===null&&(Ae=new ss(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?Yo:br,minFilter:jr,samples:Te?4:0})),g.getDrawingBufferSize(ze),Te?Ae.setSize(ze.x,ze.y):Ae.setSize(id(ze.x),id(ze.y));const Oe=g.getRenderTarget();g.setRenderTarget(Ae),g.getClearColor(X),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Ve=g.toneMapping;g.toneMapping=yr,Rn(C,J,te),S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae);let Ye=!1;for(let it=0,et=V.length;it<et;it++){const Je=V[it],Lt=Je.object,dn=Je.geometry,Wt=Je.material,Xn=Je.group;if(Wt.side===ln&&Lt.layers.test(te.layers)){const xt=Wt.side;Wt.side=Fn,Wt.needsUpdate=!0,ti(Lt,J,te,dn,Wt,Xn),Wt.side=xt,Wt.needsUpdate=!0,Ye=!0}}Ye===!0&&(S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae)),g.setRenderTarget(Oe),g.setClearColor(X,N),g.toneMapping=Ve}function Rn(C,V,J){const te=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Te=C.length;ee<Te;ee++){const Oe=C[ee],Ve=Oe.object,Ye=Oe.geometry,it=te===null?Oe.material:te,et=Oe.group;Ve.layers.test(J.layers)&&ti(Ve,V,J,Ye,it,et)}}function ti(C,V,J,te,ee,Te){C.onBeforeRender(g,V,J,te,ee,Te),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(g,V,J,te,C,Te),ee.transparent===!0&&ee.side===ln&&ee.forceSinglePass===!1?(ee.side=Fn,ee.needsUpdate=!0,g.renderBufferDirect(J,V,te,ee,C,Te),ee.side=Ar,ee.needsUpdate=!0,g.renderBufferDirect(J,V,te,ee,C,Te),ee.side=ln):g.renderBufferDirect(J,V,te,ee,C,Te),C.onAfterRender(g,V,J,te,ee,Te)}function Wn(C,V,J){V.isScene!==!0&&(V=st);const te=ie.get(C),ee=m.state.lights,Te=m.state.shadowsArray,Oe=ee.state.version,Ve=F.getParameters(C,ee.state,Te,V,J),Ye=F.getProgramCacheKey(Ve);let it=te.programs;te.environment=C.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(C.isMeshStandardMaterial?U:b).get(C.envMap||te.environment),it===void 0&&(C.addEventListener("dispose",fe),it=new Map,te.programs=it);let et=it.get(Ye);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===Oe)return Pt(C,Ve),et}else Ve.uniforms=F.getUniforms(C),C.onBuild(J,Ve,g),C.onBeforeCompile(Ve,g),et=F.acquireProgram(Ve,Ye),it.set(Ye,et),te.uniforms=Ve.uniforms;const Je=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=me.uniform),Pt(C,Ve),te.needsLights=Ft(C),te.lightsStateVersion=Oe,te.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.directionalShadowMap.value=ee.state.directionalShadowMap,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotShadowMap.value=ee.state.spotShadowMap,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMap.value=ee.state.pointShadowMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function mi(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=al.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Pt(C,V){const J=ie.get(C);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function gi(C,V,J,te,ee){V.isScene!==!0&&(V=st),S.resetTextureUnits();const Te=V.fog,Oe=te.isMeshStandardMaterial?V.environment:null,Ve=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ji,Ye=(te.isMeshStandardMaterial?U:b).get(te.envMap||Oe),it=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Je=!!J.morphAttributes.position,Lt=!!J.morphAttributes.normal,dn=!!J.morphAttributes.color;let Wt=yr;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Wt=g.toneMapping);const Xn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Xn!==void 0?Xn.length:0,tt=ie.get(te),gc=m.state.lights;if(le===!0&&(_e===!0||C!==k)){const jn=C===k&&te.id===B;me.setState(te,C,jn)}let Bt=!1;te.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==gc.state.version||tt.outputColorSpace!==Ve||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||tt.envMap!==Ye||te.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==me.numPlanes||tt.numIntersection!==me.numIntersection)||tt.vertexAlphas!==it||tt.vertexTangents!==et||tt.morphTargets!==Je||tt.morphNormals!==Lt||tt.morphColors!==dn||tt.toneMapping!==Wt||W.isWebGL2===!0&&tt.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,tt.__version=te.version);let Ir=tt.currentProgram;Bt===!0&&(Ir=Wn(te,V,ee));let _f=!1,mo=!1,_c=!1;const hn=Ir.getUniforms(),Dr=tt.uniforms;if(K.useProgram(Ir.program)&&(_f=!0,mo=!0,_c=!0),te.id!==B&&(B=te.id,mo=!0),_f||k!==C){hn.setValue(q,"projectionMatrix",C.projectionMatrix),hn.setValue(q,"viewMatrix",C.matrixWorldInverse);const jn=hn.map.cameraPosition;jn!==void 0&&jn.setValue(q,Ie.setFromMatrixPosition(C.matrixWorld)),W.logarithmicDepthBuffer&&hn.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&hn.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,mo=!0,_c=!0)}if(ee.isSkinnedMesh){hn.setOptional(q,ee,"bindMatrix"),hn.setOptional(q,ee,"bindMatrixInverse");const jn=ee.skeleton;jn&&(W.floatVertexTextures?(jn.boneTexture===null&&jn.computeBoneTexture(),hn.setValue(q,"boneTexture",jn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(hn.setOptional(q,ee,"batchingTexture"),hn.setValue(q,"batchingTexture",ee._matricesTexture,S));const vc=J.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&W.isWebGL2===!0)&&Se.update(ee,J,Ir),(mo||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,hn.setValue(q,"receiveShadow",ee.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Dr.envMap.value=Ye,Dr.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),mo&&(hn.setValue(q,"toneMappingExposure",g.toneMappingExposure),tt.needsLights&&We(Dr,_c),Te&&te.fog===!0&&j.refreshFogUniforms(Dr,Te),j.refreshMaterialUniforms(Dr,te,Q,O,Ae),al.upload(q,mi(tt),Dr,S)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(al.upload(q,mi(tt),Dr,S),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&hn.setValue(q,"center",ee.center),hn.setValue(q,"modelViewMatrix",ee.modelViewMatrix),hn.setValue(q,"normalMatrix",ee.normalMatrix),hn.setValue(q,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const jn=te.uniformsGroups;for(let xc=0,fv=jn.length;xc<fv;xc++)if(W.isWebGL2){const vf=jn[xc];Ue.update(vf,Ir),Ue.bind(vf,Ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ir}function We(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ft(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,J){ie.get(C.texture).__webglTexture=V,ie.get(C.depthTexture).__webglTexture=J;const te=ie.get(C);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const J=ie.get(C);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,J=0){A=C,E=V,w=J;let te=!0,ee=null,Te=!1,Oe=!1;if(C){const Ye=ie.get(C);Ye.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ye.__webglFramebuffer===void 0?S.setupRenderTarget(C):Ye.__hasExternalTextures&&S.rebindTextures(C,ie.get(C.texture).__webglTexture,ie.get(C.depthTexture).__webglTexture);const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Oe=!0);const et=ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[V])?ee=et[V][J]:ee=et[V],Te=!0):W.isWebGL2&&C.samples>0&&S.useMultisampledRTT(C)===!1?ee=ie.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?ee=et[J]:ee=et,x.copy(C.viewport),T.copy(C.scissor),L=C.scissorTest}else x.copy(pe).multiplyScalar(Q).floor(),T.copy(ge).multiplyScalar(Q).floor(),L=Me;if(K.bindFramebuffer(q.FRAMEBUFFER,ee)&&W.drawBuffers&&te&&K.drawBuffers(C,ee),K.viewport(x),K.scissor(T),K.setScissorTest(L),Te){const Ye=ie.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ye.__webglTexture,J)}else if(Oe){const Ye=ie.get(C.texture),it=V||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,it)}B=-1},this.readRenderTargetPixels=function(C,V,J,te,ee,Te,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){K.bindFramebuffer(q.FRAMEBUFFER,Ve);try{const Ye=C.texture,it=Ye.format,et=Ye.type;if(it!==li&&xe.convert(it)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=et===Yo&&(D.has("EXT_color_buffer_half_float")||W.isWebGL2&&D.has("EXT_color_buffer_float"));if(et!==br&&xe.convert(et)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===zi&&(W.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-te&&J>=0&&J<=C.height-ee&&q.readPixels(V,J,te,ee,xe.convert(it),xe.convert(et),Te)}finally{const Ye=A!==null?ie.get(A).__webglFramebuffer:null;K.bindFramebuffer(q.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(C,V,J=0){const te=Math.pow(2,-J),ee=Math.floor(V.image.width*te),Te=Math.floor(V.image.height*te);S.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,C.x,C.y,ee,Te),K.unbindTexture()},this.copyTextureToTexture=function(C,V,J,te=0){const ee=V.image.width,Te=V.image.height,Oe=xe.convert(J.format),Ve=xe.convert(J.type);S.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,ee,Te,Oe,Ve,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Oe,V.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,Oe,Ve,V.image),te===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(C,V,J,te,ee=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,Ye=xe.convert(te.format),it=xe.convert(te.type);let et;if(te.isData3DTexture)S.setTexture3D(te,0),et=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)S.setTexture2DArray(te,0),et=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const Je=q.getParameter(q.UNPACK_ROW_LENGTH),Lt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),dn=q.getParameter(q.UNPACK_SKIP_PIXELS),Wt=q.getParameter(q.UNPACK_SKIP_ROWS),Xn=q.getParameter(q.UNPACK_SKIP_IMAGES),xt=J.isCompressedTexture?J.mipmaps[ee]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(et,ee,V.x,V.y,V.z,Te,Oe,Ve,Ye,it,xt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(et,ee,V.x,V.y,V.z,Te,Oe,Ve,Ye,xt.data)):q.texSubImage3D(et,ee,V.x,V.y,V.z,Te,Oe,Ve,Ye,it,xt),q.pixelStorei(q.UNPACK_ROW_LENGTH,Je),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,dn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Wt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Xn),ee===0&&te.generateMipmaps&&q.generateMipmap(et),K.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?S.setTextureCube(C,0):C.isData3DTexture?S.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?S.setTexture2DArray(C,0):S.setTexture2D(C,0),K.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,K.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sf?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===cn?Qr:N_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qr?cn:ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dC extends iv{}dC.prototype.isWebGL1Renderer=!0;class rv extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class fC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new Y;class Ll{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sv extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ls;const To=new Y,Is=new Y,Ds=new Y,Ns=new Ke,Ao=new Ke,ov=new qt,Ka=new Y,Co=new Y,Za=new Y,Bp=new Ke,gu=new Ke,kp=new Ke;class _u extends zt{constructor(e=new sv){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fC(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Ll(i,3,0,!1)),Ls.setAttribute("uv",new Ll(i,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),ov.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ds.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ja(Ka.set(-.5,-.5,0),Ds,o,Is,r,s),Ja(Co.set(.5,-.5,0),Ds,o,Is,r,s),Ja(Za.set(.5,.5,0),Ds,o,Is,r,s),Bp.set(0,0),gu.set(1,0),kp.set(1,1);let a=e.ray.intersectTriangle(Ka,Co,Za,!1,To);if(a===null&&(Ja(Co.set(-.5,.5,0),Ds,o,Is,r,s),gu.set(0,1),a=e.ray.intersectTriangle(Ka,Za,Co,!1,To),a===null))return;const l=e.ray.origin.distanceTo(To);l<e.near||l>e.far||t.push({distance:l,point:To.clone(),uv:ci.getInterpolation(To,Ka,Co,Za,Bp,gu,kp,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ja(n,e,t,i,r,s){Ns.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ao.x=s*Ns.x-r*Ns.y,Ao.y=r*Ns.x+s*Ns.y):Ao.copy(Ns),n.copy(e),n.x+=Ao.x,n.y+=Ao.y,n.applyMatrix4(ov)}class od extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zp=new Y,Hp=new Y,Vp=new qt,vu=new uc,Qa=new da;class av extends zt{constructor(e=new Qt,t=new od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zp.fromBufferAttribute(t,r-1),Hp.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zp.distanceTo(Hp);e.setAttribute("lineDistance",new Jn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Vp.copy(r).invert(),vu.copy(e.ray).applyMatrix4(Vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,u=new Y,d=new Y,f=new Y,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let g=h,y=M-1;g<y;g+=p){const E=_.getX(g),w=_.getX(g+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),vu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let g=h,y=M-1;g<y;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),vu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Gp=new Y,Wp=new Y;class Ko extends av{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Gp.fromBufferAttribute(t,r),Wp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gp.distanceTo(Wp);e.setAttribute("lineDistance",new Jn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ad extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xp=new qt,ld=new uc,el=new da,tl=new Y;class Il extends zt{constructor(e=new Qt,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Xp.copy(r).invert(),ld.copy(e.ray).applyMatrix4(Xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,v=p;_<v;_++){const m=c.getX(_);tl.fromBufferAttribute(d,m),jp(tl,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,v=p;_<v;_++)tl.fromBufferAttribute(d,_),jp(tl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jp(n,e,t,i,r,s,o){const a=ld.distanceSqToPoint(n);if(a<t){const l=new Y;ld.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class hC extends Cn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mc extends Qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let _=0;const v=[],m=i/2;let h=0;M(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(f,3)),this.setAttribute("uv",new Jn(p,2));function M(){const y=new Y,E=new Y;let w=0;const A=(t-e)/i;for(let B=0;B<=s;B++){const k=[],x=B/s,T=x*(t-e)+e;for(let L=0;L<=r;L++){const X=L/r,N=X*l+a,H=Math.sin(N),O=Math.cos(N);E.x=T*H,E.y=-x*i+m,E.z=T*O,d.push(E.x,E.y,E.z),y.set(H,A,O).normalize(),f.push(y.x,y.y,y.z),p.push(X,1-x),k.push(_++)}v.push(k)}for(let B=0;B<r;B++)for(let k=0;k<s;k++){const x=v[k][B],T=v[k+1][B],L=v[k+1][B+1],X=v[k][B+1];u.push(x,T,X),u.push(T,L,X),w+=6}c.addGroup(h,w,0),h+=w}function g(y){const E=_,w=new Ke,A=new Y;let B=0;const k=y===!0?e:t,x=y===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),_++;const T=_;for(let L=0;L<=r;L++){const N=L/r*l+a,H=Math.cos(N),O=Math.sin(N);A.x=k*O,A.y=m*x,A.z=k*H,d.push(A.x,A.y,A.z),f.push(0,x,0),w.x=H*.5+.5,w.y=O*.5*x+.5,p.push(w.x,w.y),_++}for(let L=0;L<r;L++){const X=E+L,N=T+L;y===!0?u.push(N,N+1,X):u.push(N+1,N,X),B+=3}c.addGroup(h,B,y===!0?1:2),h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uf extends mc{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends Lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=U_,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lv extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xu=new qt,$p=new Y,qp=new Y;class pC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qp),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mC extends pC{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cv extends lv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new mC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uv extends lv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gC{constructor(e,t,i=0,r=1/0){this.ray=new uc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return cd(e,this,i,t),i.sort(Yp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cd(e[r],this,i,t);return i.sort(Yp),i}}function Yp(n,e){return n.distance-e.distance}function cd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)cd(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);class df{constructor(e){ne(this,"m_entityType");e&&(this.m_entityType=e)}type(){return this.m_entityType||kt.type}execute(){const e=Qe.database;e.scene.removeObject(this.name());const t=[];if(this.ids().forEach(i=>{i>=0&&t.push(i)}),t.length===0){ht.emit("reRenderCanvas");return}switch(this.type()){case jt.GEOMETRY_VOLUME:{const i=t,r=new On;i.forEach(s=>{const o=e.findPart(s);r.add(o.toMeshPartHight(this.color()))}),r.name=this.name(),e.scene.addPartMesh(r)}break;case jt.GEOMETRY_SURFACE:{const i=t,r=new On;Bc(i).forEach((s,o)=>{const a=e.findPart(o);r.add(a.toSurfaceHight(this.color(),s))}),r.name=this.name(),e.scene.addPartMesh(r)}break;case jt.GEOMETRY_EDGE:{const i=t,r=new On;Bc(i).forEach((s,o)=>{const a=e.findPart(o);r.add(a.toEdgeHight(this.color(),s))}),r.name=this.name(),e.scene.addPartMesh(r)}break;case jt.GEOMETRY_POINT:{const i=t,r=new On;Bc(i).forEach((s,o)=>{const a=e.findPart(o);r.add(a.toPointHight(this.color(),s))}),r.name=this.name(),e.scene.addPartMesh(r)}break}ht.emit("reRenderCanvas")}}const Bl=class Bl extends df{constructor(){super()}color(){return new qe(1,1,1)}ids(){const e=kt.highlighted;return e!==void 0?[e]:[]}name(){return Bl.renderObjectName}};ne(Bl,"renderObjectName","Highlight");let ud=Bl;const kl=class kl extends df{constructor(){super()}color(){return new qe(0,1,0)}ids(){const e=kt.selected;return e!==void 0?e:[]}name(){return kl.renderObjectName}};ne(kl,"renderObjectName","Selection");let dd=kl;const zl=class zl extends df{constructor(e,t){super(e),this.objIds=t}ids(){return this.objIds}name(){return zl.renderObjectName}color(){return new qe(0,1,0)}};ne(zl,"renderObjectName","Selection");let fd=zl;const _C=Ze({name:"TreeNode",props:{item:{type:Object,required:!0}},emits:["select-item"],setup(n,{emit:e}){var l;const t=vt(!1),i=((l=n.item.children)==null?void 0:l.length)>0,r=()=>{t.value=!t.value},s=c=>{c.selectIds&&new fd(jt.GEOMETRY_VOLUME,c.selectIds).execute()};return{isExpanded:t,hasChildren:i,toggleChildren:r,selectItem:s,onSelectItem:c=>{s(c)},handleContextMenu:c=>{c.preventDefault()}}}}),vC=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},xC={class:"flex items-center gap-x-0"},yC={key:0,class:"size-6 flex justify-center items-center rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"},bC={class:"size-4 text-gray-800",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},MC={key:0,d:"M12 5v14"},SC={key:1,class:"size-6"},EC={class:"flex items-center gap-x-1 hover:bg-white"},wC={key:0,t:"1729144741011",class:"icon size-4",viewBox:"0 0 1042 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2358",width:"200",height:"200"},TC={key:1,t:"1729221447206",class:"icon size-4",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3323",width:"200",height:"200"},AC={key:1,class:"text-sm text-gray-800"},CC={key:0,class:"pl-6 flex"},RC={class:"relative pl-1"};function PC(n,e,t,i,r,s){const o=Ym("TreeNode",!0);return Fe(),yt("div",{class:"py-0.5 bg-transparent",onContextmenu:e[2]||(e[2]=qo((...a)=>n.handleContextMenu&&n.handleContextMenu(...a),["prevent"]))},[mt("div",xC,[n.hasChildren?(Fe(),yt("div",yC,[mt("button",{onClick:e[0]||(e[0]=(...a)=>n.toggleChildren&&n.toggleChildren(...a))},[(Fe(),yt("svg",bC,[e[3]||(e[3]=mt("path",{d:"M5 12h14"},null,-1)),n.isExpanded?Kr("",!0):(Fe(),yt("path",MC))]))])])):n.item.level===0?(Fe(),yt("div",SC)):Kr("",!0),mt("div",{class:xn("px-0.5 rounded-md cursor-pointer"),onClick:e[1]||(e[1]=qo(a=>n.selectItem(n.item),["stop"]))},[mt("div",EC,[n.hasChildren?(Fe(),yt("svg",wC,e[4]||(e[4]=[mt("path",{d:"M958.860775 371.564637l-163.624795 93.499883-29.705692-17.04425V311.666275a36.523392 36.523392 0 0 0-18.018206-31.166627L633.072121 213.783586v-30.679649l163.137816-93.986861 163.137816 93.986861z m-243.489278 48.697856l-82.299376-48.697856v-97.395711l80.83844 48.697856z m0 125.640467l-25.809863 14.609357-150.963352-87.65614a36.523392 36.523392 0 0 0-36.036413 0l-149.502417 85.708225-25.809863-14.609356v-31.166628l146.093566-83.273333a36.523392 36.523392 0 0 0 18.018207-31.166627V227.418985l29.705692-17.044249 29.705692 17.044249v170.929473a36.523392 36.523392 0 0 0 18.018206 31.166627l146.093567 83.273333z m-277.577776 61.846276l84.734268-48.697855 84.734269 48.697855-84.734269 48.697856z m247.872084 45.289006v188.460701l-163.137816 93.986861-165.08573-95.934775v-188.460701l25.809864-14.609357 119.309746 68.663976a36.523392 36.523392 0 0 0 36.036413 0l119.309746-68.663976zM408.575008 274.655905v97.395711l-80.838441 48.697855v-97.395711zM243.489277 465.06452L82.299376 371.564637V183.103937L243.489277 89.117076l165.085731 93.986861v31.166627L292.187133 280.499648a36.523392 36.523392 0 0 0-18.018207 31.166627v136.353995z m779.165688-340.884989L813.254187 4.869786a36.523392 36.523392 0 0 0-34.088499 0l-209.400779 120.283703a36.036413 36.036413 0 0 0-18.018206 31.166627v10.22655l-11.687486-6.8177a36.523392 36.523392 0 0 0-36.036413 0l-11.687485 6.8177v-10.22655a36.523392 36.523392 0 0 0-18.018207-31.166627L263.455398 4.869786a36.523392 36.523392 0 0 0-36.036413 0L18.018207 125.153489a36.036413 36.036413 0 0 0-18.018207 31.166627v243.489278a36.036413 36.036413 0 0 0 18.018207 31.166627l209.400778 120.283703a36.523392 36.523392 0 0 0 36.036413 0l11.687486-6.8177v10.22655A36.523392 36.523392 0 0 0 292.187133 584.374266l7.304678 4.382807-7.304678 4.382807a36.523392 36.523392 0 0 0-18.018207 31.166627v243.489278a36.523392 36.523392 0 0 0 18.018207 31.166627l209.400779 120.283703a36.523392 36.523392 0 0 0 36.036413 0l209.400778-120.283703a36.523392 36.523392 0 0 0 18.018207-31.166627v-243.489278a36.523392 36.523392 0 0 0-18.018207-31.166627l-7.304678-4.382807 7.304678-4.382807a36.523392 36.523392 0 0 0 18.018207-31.166628v-10.226549l11.687485 6.817699a36.523392 36.523392 0 0 0 36.036413 0L1022.654965 429.515085a36.523392 36.523392 0 0 0 18.505185-31.166627v-243.489278a36.036413 36.036413 0 0 0-18.505185-29.705691z",fill:"#f4ea2a","p-id":"2359"},null,-1)]))):(Fe(),yt("svg",TC,e[5]||(e[5]=[mt("path",{d:"M512 0L42.666667 213.333333v597.333334l469.333333 213.333333 469.333333-213.333333V213.333333L512 0z m0 93.76L826.666667 236.8 512 379.829333 197.226667 236.8 512 93.76zM128 755.733333V298.986667l341.333333 155.093333v456.757333L128 755.733333z m768 0L554.666667 910.837333V454.08l341.333333-155.104V755.733333z","p-id":"3324",fill:"#1afa29"},null,-1)]))),mt("div",null,[n.$slots.node?dt(n.$slots,"node",{key:0,node:n.item}):(Fe(),yt("span",AC,ia(n.item.title),1))])])])]),n.item.children&&n.isExpanded?(Fe(),yt("div",CC,[e[6]||(e[6]=mt("div",{class:"border-l-2 border-gray-200 ml-3"},null,-1)),mt("div",null,[(Fe(!0),yt(Ht,null,Hd(n.item.children,a=>(Fe(),yt("div",RC,[Ce(o,{item:a},Vd({_:2},[n.$slots.node?{name:"node",fn:De(({node:l})=>[dt(n.$slots,"node",{node:l})]),key:"0"}:void 0]),1032,["item"])]))),256))])])):Kr("",!0)],32)}const LC=vC(_C,[["render",PC]]),IC=Ze({__name:"DefaultTree",props:{items:{type:Array,required:!0}},setup(n){const e=n,t=Ut(()=>e.items.length>0);return console.log(t.value),(i,r)=>(Fe(),yt("div",null,[(Fe(!0),yt(Ht,null,Hd(n.items,s=>(Fe(),yt("div",null,[Ce(LC,{item:s},Vd({_:2},[i.$slots.node?{name:"node",fn:De(({node:o})=>[dt(i.$slots,"node",{node:o})]),key:"0"}:void 0]),1032,["item"])]))),256))]))}}),DC=Ze({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(n){const e=n,t=Ut(()=>{const{class:i,...r}=e;return r});return(i,r)=>(Fe(),_t(de(OM),un(t.value,{class:de(Bn)("shrink-0 bg-border relative",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:De(()=>[e.label?(Fe(),yt("span",{key:0,class:xn(de(Bn)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},ia(e.label),3)):Kr("",!0)]),_:1},16,["class"]))}}),NC={"body-class":"pt-3"},UC={class:"space-x-2 space-y-2"},OC={class:"contents space-y-2"},FC=Ze({__name:"TreeHome",setup(n){const e=vt([]),t=vt(""),i=Ut(()=>e.value.length>0);return ht.bind("updateTree",()=>{e.value=Qe.database.modelTree,console.log(e.value),t.value=Qe.database.fileName}),(r,s)=>Ql((Fe(),yt("div",{class:"flex flex-col gap-4 lg:grid lg:grid-cols-1 absolute top-1 left-1 z-10 h-5/6 overflow-y-auto overflow-x-auto",onContextmenu:s[0]||(s[0]=qo(()=>{},["prevent"]))},[mt("div",NC,[mt("div",UC,[mt("div",OC,[Ce(de(M_),{class:"m-2 bg-white p-1"},{default:De(()=>[Jt(ia(t.value),1)]),_:1})]),Ce(de(DC)),Ce(IC,{items:e.value},null,8,["items"])])])],544)),[[rc,i.value]])}});class yu extends On{constructor(e){super();const t=new mc(.04,.04,.8,5).rotateZ(-Math.PI/2).translate(.4,0,0),i=new uf(.08,.3).rotateZ(-Math.PI/2).translate(.8,0,0),r=new Gt(t,this.getAxisMaterial(e)),s=new Gt(i,this.getAxisMaterial(e));this.add(r),this.add(s)}getAxisMaterial(e){return new Wr({color:e,toneMapped:!1})}}class BC extends zt{constructor(e){super(),this.isViewHelper=!0,this.animating=!1,this.center=new Y;const t=new qe("#ff0000"),i=new qe("#00ff00"),r=new qe("#0000ff"),s={};new Ke,new zt;const o=new rv,a=new hc(-2,2,2,-2,0,4);a.position.set(0,0,2);const l=new yu(t),c=new yu(i),u=new yu(r);c.rotation.z=Math.PI/2,u.rotation.y=-Math.PI/2;const d=new On;d.add(l),d.add(u),d.add(c),o.add(new uv(new qe("#FFFFFF"),.1));const f=new cv(new qe("#FFFFFF"),2);f.position.z=2,o.add(f),o.add(d);const p=y("X"),_=y("Y"),v=y("Z"),m=new _u(p),h=new _u(_),M=new _u(v);m.position.x=1.1,h.position.y=1.1,M.position.z=1.2,d.add(m),d.add(h),d.add(M);const g=128;this.render=function(w){d.quaternion.copy(e.quaternion).invert(),this.updateMatrixWorld(),w.clearDepth(),w.getViewport(E),w.setViewport(0,0,g,g),w.render(o,a),w.setViewport(E.x,E.y,E.z,E.w)};function y(w){const{font:A="64px Arial",color:B="#000000",radius:k=14}=s,x=document.createElement("canvas");x.width=128,x.height=128;const T=x.getContext("2d");w&&(T.font=A,T.textAlign="center",T.fillStyle="#000000",T.fillText(w,64,90));const L=new hC(x);return L.colorSpace=cn,new sv({map:L,toneMapped:!1})}new Y;const E=new fn}}class kC{constructor(){ne(this,"textCanvas");ne(this,"fontStype","20px Arial")}render(e,t){}get canvas(){return this.textCanvas}}class hi{constructor(e,t){ne(this,"m_elem");ne(this,"m_dim");this.m_dim=t,this.m_elem=new e(t)}get x(){return this.m_elem[0]}get y(){return this.m_elem[1]}get z(){return this.m_elem[2]}get w(){return this.m_elem[3]}set x(e){this.m_elem[0]=e}set y(e){this.m_elem[1]=e}set z(e){this.m_elem[2]=e}set w(e){this.m_elem[3]=e}at(e){return this.m_elem[e]}set(){for(var e=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(t.length===1){var r=t[0];typeof r=="number"?this.fill(r):r instanceof Float32Array||r instanceof Int32Array||Array.isArray(r)?this.fromArray(r):r instanceof hi&&this.copy(r)}else{var s=0;t.forEach(function(o){var a=function(l){l.forEach(function(c){s>=e.m_dim||(e.m_elem[s]=c,s++)})};typeof o=="number"?(e.m_elem[s]=o,s++):o instanceof Float32Array||o instanceof Int32Array||Array.isArray(o)?a(o):o instanceof hi&&a(o.toArray())})}}copy(e){this.fromArray(e.toArray())}get dim(){return this.m_dim}toArray(){return this.m_elem}fromArray(e){if(e.length>this.m_dim)for(var t=0;t<this.m_dim;t++)this.m_elem[t]=e[t];else this.m_elem.set(e);return this}isZero(){for(var e=this.m_elem.length,t=0;t<e;t++)if(this.m_elem[t]!==0)return!1;return!0}setZero(){return this.fill(0),this}setLength(e){return this.normalize().mul(e),this}squaredLength(){for(var e=0,t=this.m_elem.length,i=0;i<t;i++){var r=this.m_elem[i];e+=r*r}return e}length(){var e=this.squaredLength();return Math.sqrt(e)}normalize(){var e=this.length();if(e>0)for(var t=1/e,i=this.m_elem.length,r=0;r<i;r++)this.m_elem[r]*=t;else this.setZero();return this}neg(){for(var e=this.m_elem.length,t=0;t<e;t++)this.m_elem[t]=-this.m_elem[t];return this}add(e){for(var t=this.m_elem.length,i=0;i<t;i++)this.m_elem[i]+=e.m_elem[i];return this}sub(e){for(var t=this.m_elem.length,i=0;i<t;i++)this.m_elem[i]-=e.m_elem[i];return this}mul(e){for(var t=this.m_elem.length,i=0;i<t;i++)this.m_elem[i]*=e;return this}div(e){for(var t=this.m_elem.length,i=0;i<t;i++)this.m_elem[i]/=e;return this}dot(e){for(var t=0,i=this.m_elem.length,r=0;r<i;r++)t+=this.m_elem[r]*e.m_elem[r];return t}cmp(e){for(var t=this.m_elem.length,i=0;i<t;i++)if(this.m_elem[i]!==e.elements[i])return!1;return!0}fill(e){for(var t=this.m_dim,i=0;i<t;i++)this.m_elem[i]=e;return this}static compare(e,t){if(e===t)return!0;if(e.constructor!==t.constructor)return!1;for(var i=e.toArray(),r=t.toArray(),s=0;s<i.length;s++)if(i[s]!=r[s])return!1;return!0}}class Dl extends hi{constructor(){super(Float32Array,2)}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Dl;return i.set.apply(i,e),i}clone(){let e=new Dl;return e.copy(this),e}manhattanDist(){return Math.abs(this.m_elem[0])+Math.abs(this.m_elem[1])}}class Ei extends hi{constructor(){super(Float32Array,3)}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Ei;return i.set.apply(i,e),i}clone(){var e=new Ei;return e.copy(this),e}cross(e){var t=this.m_elem,i=t[0],r=t[1],s=t[2],o=e.toArray(),a=o[0],l=o[1],c=o[2];return t[0]=r*c-s*l,t[1]=s*a-i*c,t[2]=i*l-r*a,this}transformPoint(e){var t=this.m_elem,i=e.toArray(),r=i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],s=i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],o=i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14];return t[0]=r,t[1]=s,t[2]=o,this}transformVector(e){var t=this.m_elem,i=e.toArray(),r=i[0]*t[0]+i[4]*t[1]+i[8]*t[2],s=i[1]*t[0]+i[5]*t[1]+i[9]*t[2],o=i[2]*t[0]+i[6]*t[1]+i[10]*t[2];return t[0]=r,t[1]=s,t[2]=o,this}}class Zo extends hi{constructor(){super(Float32Array,4)}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Zo;return i.set.apply(i,e),i}clone(){var e=new Zo;return e.copy(this),e}transformPoint(e){let t=this.m_elem,i=e.toArray(),r=i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],s=i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],o=i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14];return t[0]=r,t[1]=s,t[2]=o,this}transformVector(e){let t=this.m_elem,i=e.toArray(),r=i[0]*t[0]+i[4]*t[1]+i[8]*t[2],s=i[1]*t[0]+i[5]*t[1]+i[9]*t[2],o=i[2]*t[0]+i[6]*t[1]+i[10]*t[2];return t[0]=r,t[1]=s,t[2]=o,this}}class Nl extends hi{constructor(){super(Int32Array,2)}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Nl;return i.set.apply(i,e),i}clone(){var e=new Nl;return e.copy(this),e}manhattanDist(){return Math.abs(this.m_elem[0])+Math.abs(this.m_elem[1])}}const mr=Dl.create,Le=Ei.create,ff=Nl.create;class zC{constructor(e,t,i){ne(this,"m_renderer");ne(this,"m_camara");ne(this,"m_currentScene");ne(this,"m_labelRender");this.m_renderer=new iv({antialias:!0,canvas:e,preserveDrawingBuffer:!0}),this.m_renderer.setPixelRatio(window.devicePixelRatio),this.m_renderer.setClearColor(0,0),this.m_renderer.autoClear=!1;const r=500,s=window.innerWidth/window.innerHeight;this.m_camara=new hc(r*s/-2,r*s/2,r/2,r/-2,1,1e3),this.m_renderer.setSize(window.innerWidth,window.innerHeight);const o=new BC(this.m_camara),a=this,l=()=>{this.m_renderer.setSize(window.innerWidth,window.innerHeight),this.m_camara.updateProjectionMatrix();const c=ff(window.innerWidth,window.innerHeight),u=window.devicePixelRatio;c.mul(u),Qe.navigationBar.navigator.uniforms.viewportSize=c,ht.emit("updateCamera")};ht.bind("windowResized",l),l(),this.m_labelRender=new kC,new i(t),ht.bind("reRenderCanvas",c=>{let u;c?(a.m_currentScene=c,u=c):u=a.m_currentScene,u&&requestAnimationFrame(()=>{a.m_renderer.clear(),a.m_renderer.render(u.scene,a.m_camara),o.render(a.m_renderer),a.m_labelRender.render(a.m_currentScene,a.camera),a.m_renderer.render(u.scene,a.m_camara)})}),ht.bind("updateCamera",()=>{const c=Qe.navigationBar.navigator.uniforms,u=c.viewMatrix.viewSpecificaiton,d=u.eye;a.m_camara.position.x=d.x,a.m_camara.position.y=d.y,a.m_camara.position.z=d.z,a.m_camara.up.x=u.up.x,a.m_camara.up.y=u.up.y,a.m_camara.up.z=u.up.z;const f=u.dir,p=Qe.navigationBar.navigator.boundingBox?Qe.navigationBar.navigator.boundingBox.extent().length():1,_=d.clone().sub(Le(f.x*p,f.y*p,f.z*p));a.m_camara.lookAt(_.x,_.y,_.z),a.m_camara.updateMatrixWorld(!0);const v=c.projectionMatrix.toArray(),m=(-v[12]+1)/v[0],h=(-v[12]-1)/v[0],M=(-v[13]+1)/v[5],g=(-v[13]-1)/v[5],y=(v[14]-1)/v[10],E=(v[14]+1)/v[10];a.m_camara.right=m,a.m_camara.left=h,a.m_camara.top=M,a.m_camara.bottom=g,a.m_camara.far=y,a.m_camara.near=E,a.m_camara.updateProjectionMatrix(),ht.emit("cameraUpdated"),ht.emit("reRenderCanvas")}),window.engine=this}projecr2Sceen(e){const t=e.clone().project(this.m_camara),i=new Ke;this.m_renderer.getSize(i);const r=(t.x+1)/2*i.x,s=(1-t.y)/2*i.y;return new Ke(r,s)}get camera(){return this.m_camara}}class hf{constructor(e,t){ne(this,"m_min");ne(this,"m_max");this.m_min=e,this.m_max=t}get min(){return this.m_min}get max(){return this.m_max}set min(e){this.m_min=e}set max(e){this.m_max=e}static create(e,t){return new hf(e,t)}}var Xr=(n=>(n[n.Shaded=0]="Shaded",n[n.Shaded_Line=1]="Shaded_Line",n[n.Outline=2]="Outline",n[n.Transparent=3]="Transparent",n[n.Transparent_Line=4]="Transparent_Line",n[n.Wireframe=5]="Wireframe",n))(Xr||{});class HC{constructor(){ne(this,"m_visible",!0);ne(this,"m_display",Xr.Shaded_Line);ne(this,"m_color",new qe(.521,.521,.521));ne(this,"m_additional")}get visible(){return this.m_visible}set visible(e){this.m_visible=e}get display(){return this.m_display}set display(e){this.m_display=e}get color(){return this.m_color}set color(e){this.m_color=e}set additional(e){this.m_additional=e}get additional(){return this.m_additional}}class pf{constructor(e){ne(this,"m_name");ne(this,"m_visible");this.m_name=e,this.m_visible=!0}get name(){return this.m_name}set visible(e){this.m_visible=e}get visible(){return this.m_visible}}class VC extends pf{constructor(t,i,r){super(t);ne(this,"m_currentIdRange");this.start=i,this.end=r}set currentTriIdRange(t){this.m_currentIdRange=t}get currentTriIdRange(){return this.m_currentIdRange}}class GC extends pf{constructor(e,t,i){super(e),this.start=t,this.end=i}}class WC extends pf{constructor(e,t){super(e),this.start=t}}class bu{constructor(e,t,i){this.position=e,this.normal=t,this.index=i}}class XC extends On{constructor(t,i,r){super();ne(this,"m_boundingBox");ne(this,"m_faces",[]);ne(this,"m_edges",[]);ne(this,"m_vertices",[]);ne(this,"m_faceRenderData");ne(this,"m_edgeRenderData");ne(this,"m_vertexRenderData");ne(this,"m_partId");ne(this,"m_isPart");ne(this,"m_indexDirty",!1);ne(this,"m_attribute");ne(this,"m_currentTriangleIndices");ne(this,"m_faceThreeObject");ne(this,"m_lineThreeObject");this.m_isPart=!0,this.m_partId=t,this.m_boundingBox=i,this.m_faces=[],this.m_edges=[],this.m_vertices=[],r.faces.forEach(a=>{this.m_faces.push(new VC(a.name,a.start,a.end))}),r.edges.forEach(a=>{this.m_edges.push(new GC(a.name,a.start,a.end))}),r.vertexs.forEach(a=>{this.m_vertices.push(new WC(a.name,a.index))});const s=r.renderData.faces;this.m_faceRenderData=new bu(s.position,s.normal,s.index);const o=r.renderData.edges;this.m_edgeRenderData=new bu(o.position,void 0,o.index),this.m_vertexRenderData=new bu(r.renderData.vertexs,void 0,void 0),this.m_indexDirty=!0,this.m_attribute=new HC}get boundingBox(){return this.m_boundingBox}get isPart(){return this.m_isPart}get partId(){return this.m_partId}get attribute(){return this.m_attribute}get __currentFaceIndex(){if(!this.m_indexDirty)return this.m_currentTriangleIndices;this.m_currentTriangleIndices=[];for(let t=0;t<this.m_faces.length;t++)this.m_faces[t].visible&&this.__updateFaceIndex(t);return this.m_indexDirty=!1,this.m_currentTriangleIndices}__updateFaceIndex(t){const i=this.m_faces[t],r=this.m_currentTriangleIndices.length/3,s=i.start,o=i.end;for(let l=s;l<o;l++)this.m_currentTriangleIndices.push(this.m_faceRenderData.index[3*l]),this.m_currentTriangleIndices.push(this.m_faceRenderData.index[3*l+1]),this.m_currentTriangleIndices.push(this.m_faceRenderData.index[3*l+2]);const a=this.m_currentTriangleIndices.length/3;i.currentTriIdRange=new hf(r,a)}toThreeObject(){if(this.clear(),!!this.attribute.visible){{const t=new Qt,i=new Float32Array(this.m_faceRenderData.position);t.setAttribute("position",new Nt(i,3));const r=new Float32Array(this.m_faceRenderData.normal);t.setAttribute("normal",new Nt(r,3)),t.setIndex(this.__currentFaceIndex);const s=new Gt(t,void 0);s.partId=this.m_partId,this.m_faceThreeObject=s,this.add(s)}{const t=new Qt,i=new Float32Array(this.m_edgeRenderData.position);t.setAttribute("position",new Nt(i,3)),t.setIndex(this.m_edgeRenderData.index);const r=new od({color:0}),s=new Ko(t,r);s.partId=this.m_partId,this.m_lineThreeObject=s,this.add(s)}{const t=new Qt,i=new Float32Array(this.m_vertexRenderData.position);t.setAttribute("position",new Nt(i,3));const r=new ad({color:65280,size:20}),s=new Il(t,r);s.partId=this.m_partId,s.visible=!1,this.add(s)}this.updateVisiableAttribute()}}forEachFace(t){this.m_faces.forEach(t)}updateVisiableAttribute(){switch(this.visible=this.m_attribute.visible,this.m_attribute.display){case Xr.Shaded:this.m_faceThreeObject.visible=!0,this.m_faceThreeObject.material=new Wr({color:this.attribute.color,side:ln,polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:0}),this.m_lineThreeObject.visible=!1;break;case Xr.Shaded_Line:this.m_faceThreeObject.visible=!0,this.m_faceThreeObject.material=new Wr({color:this.attribute.color,side:ln,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:1}),this.m_lineThreeObject.visible=!0;break;case Xr.Transparent:this.m_faceThreeObject.visible=!0,this.m_lineThreeObject.visible=!1,this.m_faceThreeObject.material=new Wr({color:this.attribute.color,transparent:!0,opacity:.5,side:ln});break;case Xr.Transparent_Line:this.m_faceThreeObject.visible=!0,this.m_lineThreeObject.visible=!0,this.m_faceThreeObject.material=new Wr({color:this.attribute.color,transparent:!0,opacity:.5,side:ln});break;case Xr.Wireframe:this.m_faceThreeObject.visible=!1,this.m_lineThreeObject.visible=!0;break}}toMeshPartHight(t){const i=new Qt,r=new Float32Array(this.m_faceRenderData.position);i.setAttribute("position",new Nt(r,3));const s=new Float32Array(this.m_faceRenderData.normal);i.setAttribute("normal",new Nt(s,3));const o=new Wr({color:t,transparent:!0,opacity:.6,depthTest:!1,side:ln,shininess:120});return i.setIndex(this.__currentFaceIndex),new Gt(i,o)}getFaceByTriIndex(t){for(let i=0;i<this.m_faces.length;i++){const r=this.m_faces[i].currentTriIdRange;if(this.m_faces[i].visible&&r.min<=t&&t<r.max)return i}}getEdgeByIndex(t){for(let i=0;i<this.m_edges.length;i++){const r=this.m_edges[i].start,s=this.m_edges[i].end;if(r<=t&&t<s)return i}}getPointByIndex(t){for(let i=0;i<this.m_vertices.length;i++)if(t===this.m_vertices[i].start)return i}toSurfaceHight(t,i){const r=[];i.forEach(c=>{const u=this.m_faces[c];for(let d=u.start;d<u.end;d++)r.push(this.m_faceRenderData.index[3*d]),r.push(this.m_faceRenderData.index[3*d+1]),r.push(this.m_faceRenderData.index[3*d+2])});const s=new Qt,o=new Float32Array(this.m_faceRenderData.position);s.setAttribute("position",new Nt(o,3));const a=new Float32Array(this.m_faceRenderData.normal);s.setAttribute("normal",new Nt(a,3)),s.setIndex(r);const l=new af({color:t,side:ln,transparent:!0,opacity:.5,depthTest:!1});return new Gt(s,l)}toEdgeHight(t,i){const r=[],s=new Qt,o=new Float32Array(this.m_edgeRenderData.position);s.setAttribute("position",new Nt(o,3)),i.forEach(l=>{const c=this.m_edges[l];for(let u=c.start;u<c.end;u++)r.push(this.m_edgeRenderData.index[u])}),s.setIndex(new Nt(new Uint32Array(r),1));const a=new od({color:t,side:ln,transparent:!0,opacity:1,depthTest:!1});return new Ko(s,a)}toPointHight(t,i){const r=[],s=this.m_vertices;i.forEach(c=>{r.push(s[c].start)});const o=new Qt,a=new Float32Array(this.m_vertexRenderData.position);o.setAttribute("position",new Nt(a,3)),o.setIndex(new Nt(new Uint32Array(r),1));const l=new ad({color:t,side:ln,transparent:!0,opacity:.5,depthTest:!1,size:12});return new Il(o,l)}setFaceVisiable(t,i){t.forEach(r=>{this.m_faces[r].visible=i}),this.m_indexDirty=!0}}class Mu{constructor(){}static test(e,t){return(e&t)===t}}const Yn=class Yn{constructor(e){ne(this,"m_code");this.m_code=0,e&&this.from(e)}from(e){this.m_code=0,e.altKey&&(this.m_code|=Yn.Alt),e.ctrlKey&&(this.m_code|=Yn.Ctrl),e.shiftKey&&(this.m_code|=Yn.Shift),e.metaKey&&(this.m_code|=Yn.Meta)}get code(){return this.m_code}};ne(Yn,"None",0),ne(Yn,"Shift",512),ne(Yn,"Ctrl",1024),ne(Yn,"Alt",2048),ne(Yn,"Meta",4096),ne(Yn,"Mask",65280);let Mi=Yn;const Zt=class Zt{constructor(e){ne(this,"m_code");this.m_code=0,e&&this.from(e)}from(e){if(e.type==="mousemove"){let t=e.buttons;Mu.test(t,Zt.LeftButton)&&(this.m_code|=Zt.LeftButton),Mu.test(t,Zt.RightButton)&&(this.m_code|=Zt.RightButton),Mu.test(t,Zt.MiddleButton)&&(this.m_code|=Zt.MiddleButton)}else switch(e.which){case 1:this.m_code=Zt.LeftButton;break;case 2:this.m_code=Zt.MiddleButton;break;case 3:this.m_code=Zt.RightButton}}get code(){return this.m_code}};ne(Zt,"ClickRange",6),ne(Zt,"NoButton",0),ne(Zt,"LeftButton",1),ne(Zt,"RightButton",2),ne(Zt,"MiddleButton",4),ne(Zt,"XButton1",8),ne(Zt,"XButton2",16),ne(Zt,"MouseButtonMask",255);let Nn=Zt;class hr{constructor(e,t){ne(this,"m_x");ne(this,"m_y");e===void 0&&(e=0),t===void 0&&(t=0),this.m_x=0,this.m_y=0,this.m_x=e,this.m_y=t}get x(){return this.m_x}set x(e){this.m_x=e}get y(){return this.m_y}set y(e){this.m_y=e}copy(e){this.m_x=e.m_x,this.m_y=e.m_y}clone(){let e=new hr;return e.copy(this),e}manhattanDist(){return Math.abs(this.m_x)+Math.abs(this.m_y)}neg(){return this.m_x=-this.m_x,this.m_y=-this.m_y,this}add(e){return this.m_x+=e.m_x,this.m_y+=e.m_y,this}sub(e){return this.m_x-=e.m_x,this.m_y-=e.m_y,this}mul(e){return this.m_x*=e,this.m_y*=e,this}div(e){return this.m_x/=e,this.m_y/=e,this}cmp(e){return this.m_x===e.m_x&&this.m_y===e.m_y}static compare(e,t){return e.m_x===t.m_x&&e.m_y===t.m_y}}var Ul=(n=>(n[n.No=0]="No",n[n.Up=1]="Up",n[n.Down=2]="Down",n[n.Left=3]="Left",n[n.Right=4]="Right",n))(Ul||{});class us{constructor(){}execute(){}}class Kp extends us{constructor(t){super();ne(this,"m_entity");this.m_entity=t}async execute(){kt.highlighted!==this.m_entity&&(kt.highlighted=this.m_entity)}}class Su extends us{constructor(t){super();ne(this,"m_entities",[]);this.m_entities=t}async execute(){kt.selected=this.m_entities}}class jC extends us{constructor(t){super();ne(this,"m_entities");ne(this,"m_needUpdate",!0);const i=kt.selected;this.m_entities=[],this.m_entities.push(...i),i.indexOf(t)!==-1?this.m_needUpdate=!1:this.m_entities.push(t)}async execute(){this.m_needUpdate&&(kt.selected=this.m_entities)}}class hd extends us{constructor(){super()}async execute(){kt.selected=[]}}new qe(1,0,0);class Ui{static set active(e){this.m_active!==void 0&&this.m_active.cancel(),this.m_active=e}static get active(){return this.m_active}}ne(Ui,"m_active");class Ol extends Zo{constructor(){super()}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Ol;return i.set.apply(i,e),i}set(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=e.length;if(i===1){var r=e[0];typeof r=="number"?this.fill(r):r instanceof Float32Array||r instanceof Int32Array||Array.isArray(r)?this.fromArray(r):r instanceof hi&&this.copy(r)}else i===2?e[0]instanceof Ei&&typeof e[1]=="number"&&this.setAxisAngle(e[0],e[1]):i===4&&(this.m_elem[0]=e[0],this.m_elem[1]=e[1],this.m_elem[2]=e[2],this.m_elem[3]=e[3])}clone(){var e=new Ol;return e.copy(this),e}conjugate(){return this.m_elem[0]=-this.m_elem[0],this.m_elem[1]=-this.m_elem[1],this.m_elem[2]=-this.m_elem[2],this}setAxisAngle(e,t){let i=Le(e);i.normalize();var r=t/2,s=Math.sin(r);return this.m_elem[0]=i.x*s,this.m_elem[1]=i.y*s,this.m_elem[2]=i.z*s,this.m_elem[3]=Math.cos(r),this}}const pd=Ol.create;class Fo{constructor(){ne(this,"m_min");ne(this,"m_max");this.m_min=0,this.m_max=1,this.unset()}get min(){return this.m_min}get max(){return this.m_max}set min(e){this.m_min=e}set max(e){this.m_max=e}set(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=e.length;i===1&&e[0]instanceof Fo?(this.m_min=e[0].min,this.m_max=e[0].max):i===2&&typeof e[0]=="number"&&typeof e[1]=="number"&&(this.m_min=e[0],this.m_max=e[1])}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Fo;return i.set.apply(i,e),i}copy(e){this.set(e.min,e.max)}clone(){var e=new Fo;return e.copy(this),e}toArray(){return new Float32Array([this.m_min,this.m_max])}center(){return(this.m_min+this.m_max)/2}length(){return this.m_max-this.m_min}inRange(e){return this.m_max>=e&&this.m_min<=e}relativeOf(e){return e<this.m_min?0:e>this.m_max?1:(e-this.m_min)/(this.m_max-this.m_min)}isValid(){return this.min<=this.max}unset(){this.min=Number.MAX_VALUE,this.max=-Number.MAX_VALUE}addValue(e){this.min=Math.min(this.min,e),this.max=Math.max(this.max,e)}add(e){this.addValue(e.min),this.addValue(e.max)}}const md=Fo.create;class mf{constructor(e,t){ne(this,"m_elem");ne(this,"m_dim");this.m_dim=t,this.m_elem=new e(this.m_dim*this.m_dim),this.setIdentity()}set(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=e.length;if(i===1){var r=e[0];if(typeof r=="number"){this.setZero();for(var s=0;s<this.m_dim;s++)this.m_elem[s*this.m_dim+s]=r}else r instanceof Float32Array||r instanceof Int32Array||Array.isArray(r)?this.fromArray(r):r instanceof mf&&this.copy(r)}else if(i>1){if(e.every(function(u){return typeof u=="number"}))this.fromArray(e);else if(e.every(function(u){return u instanceof hi}))for(var o=Math.min(this.m_dim,i),a=0;a<o;a++){var l=e[a],c=Math.min(this.m_dim,l.dim);for(s=0;s<c;s++)this.m_elem[this.m_dim*a+s]=l.at(s)}}}copy(e){if(this.m_dim!==e.m_dim)for(var t=Math.min(this.m_dim,e.m_dim),i=0;i<t;i++)for(var r=0;r<t;r++)this.m_elem[this.m_dim*i+r]=e.m_elem[e.m_dim*i+r];else this.m_elem.set(e.m_elem)}get dim(){return this.m_dim}toArray(){return this.m_elem}fromArray(e){if(e.length>this.m_dim*this.m_dim)for(var t=0;t<this.m_dim*this.m_dim;t++)this.m_elem[t]=e[t];else this.m_elem.set(e);return this}isZero(){for(var e=this.m_elem.length,t=0;t<e;t++)if(this.m_elem[t]!==0)return!1;return!0}setZero(){for(var e=this.m_elem.length,t=0;t<e;t++)this.m_elem[t]=0;return this}setIdentity(){this.setZero();for(var e=0;e<this.m_dim;e++)this.m_elem[e*this.m_dim+e]=1;return this}isIdentity(){for(var e=0;e<this.m_dim;e++)for(var t=0;t<this.m_dim;t++){var i=this.m_elem[this.m_dim*e+t];if(e===t){if(i!=1)return!1}else if(i!=0)return!1}return!0}transpose(){for(var e,t=0;t<this.m_dim;t++)for(var i=t+1;i<this.m_dim;i++)e=this.m_elem[i+this.m_dim*t],this.m_elem[i+this.m_dim*t]=this.m_elem[this.m_dim*i+t],this.m_elem[this.m_dim*i+t]=e;return this}determinant(){return 1}static compare(e,t){if(e===t)return!0;if(e.constructor!==t.constructor)return!1;for(var i=e.toArray(),r=t.toArray(),s=0;s<i.length;s++)if(i[s]!=r[s])return!1;return!0}}class Hi extends mf{constructor(){super(Float32Array,4)}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new Hi;return i.set.apply(i,e),i}at(e){var t=new Zo,i=this.m_elem;return t.set(i[this.m_dim*e],i[this.m_dim*e+1],i[this.m_dim*e+2],i[this.m_dim*e+3]),t}clone(){var e=new Hi;return e.copy(this),e}mul(e){let t=this.m_elem,i=t[0],r=t[4],s=t[8],o=t[12],a=t[1],l=t[5],c=t[9],u=t[13],d=t[2],f=t[6],p=t[10],_=t[14],v=t[3],m=t[7],h=t[11],M=t[15],g=e.toArray(),y=g[0],E=g[4],w=g[8],A=g[12],B=g[1],k=g[5],x=g[9],T=g[13],L=g[2],X=g[6],N=g[10],H=g[14],O=g[3],Q=g[7],G=g[11],se=g[15];return t[0]=i*y+r*B+s*L+o*O,t[1]=a*y+l*B+c*L+u*O,t[2]=d*y+f*B+p*L+_*O,t[3]=v*y+m*B+h*L+M*O,t[4]=i*E+r*k+s*X+o*Q,t[5]=a*E+l*k+c*X+u*Q,t[6]=d*E+f*k+p*X+_*Q,t[7]=v*E+m*k+h*X+M*Q,t[8]=i*w+r*x+s*N+o*G,t[9]=a*w+l*x+c*N+u*G,t[10]=d*w+f*x+p*N+_*G,t[11]=v*w+m*x+h*N+M*G,t[12]=i*A+r*T+s*H+o*se,t[13]=a*A+l*T+c*H+u*se,t[14]=d*A+f*T+p*H+_*se,t[15]=v*A+m*T+h*H+M*se,this}determinant(){let e=this.m_elem,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return(t*a-i*o)*(f*h-p*m)-(t*l-r*o)*(d*h-p*v)+(t*c-s*o)*(d*m-f*v)+(i*l-r*a)*(u*h-p*_)-(i*c-s*a)*(u*m-f*_)+(r*c-s*l)*(u*v-d*_)}invert(){let e=this.m_elem,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15],M=t*a-i*o,g=t*l-r*o,y=t*c-s*o,E=i*l-r*a,w=i*c-s*a,A=r*c-s*l,B=f*h-p*m,k=d*h-p*v,x=d*m-f*v,T=u*h-p*_,L=u*m-f*_,X=u*v-d*_,N=M*B-g*k+y*x+E*T-w*L+A*X;if(N!==0){var H=1/N;e[0]=(a*B-l*k+c*x)*H,e[1]=(-o*B+l*T-c*L)*H,e[2]=(o*k-a*T+c*X)*H,e[3]=(-o*x+a*L-l*X)*H,e[4]=(-i*B+r*k-s*x)*H,e[5]=(t*B-r*T+s*L)*H,e[6]=(-t*k+i*T-s*X)*H,e[7]=(t*x-i*L+r*X)*H,e[8]=(v*A-m*w+h*E)*H,e[9]=(-_*A+m*y-h*g)*H,e[10]=(_*w-v*y+h*M)*H,e[11]=(-_*E+v*g-m*M)*H,e[12]=(-d*A+f*w-p*E)*H,e[13]=(u*A-f*y+p*g)*H,e[14]=(-u*w+d*y-p*M)*H,e[15]=(u*E-d*g+f*M)*H}else this.setIdentity();return this}fromRotation(e){this.setIdentity();var t=e.toArray(),i=t[0]*t[0],r=t[0]*t[1],s=t[0]*t[2],o=t[0]*t[3],a=t[1]*t[1],l=t[1]*t[2],c=t[1]*t[3],u=t[2]*t[2],d=t[2]*t[3],f=this.m_elem;return f[0]=1-2*(a+u),f[1]=2*(r+d),f[2]=2*(s-c),f[4]=2*(r-d),f[5]=1-2*(i+u),f[6]=2*(l+o),f[8]=2*(s+c),f[9]=2*(l-o),f[10]=1-2*(i+a),this}fromScaling(e){this.setIdentity();var t=this.m_elem,i=e.toArray();return t[0]=i[0],t[5]=i[1],t[10]=i[2],this}fromTranslation(e){this.setIdentity();var t=this.m_elem,i=e.toArray();return t[12]=i[0],t[13]=i[1],t[14]=i[2],this}toRotation(){var e=this.toArray(),t=.5*Math.sqrt(1+e[0]+e[5]+e[10]);if(t===0)return pd(1,0,0,0);var i=(e[6]-e[9])/t/4,r=(e[8]-e[2])/t/4,s=(e[1]-e[4])/t/4;return pd(i,r,s,t).normalize()}toScaling(){var e=this.toArray(),t=Le(e[0],e[1],e[2]).length(),i=Le(e[4],e[5],e[6]).length(),r=Le(e[8],e[9],e[10]).length();return Le(t,i,r)}toTranslation(){var e=this.toArray();return Le(e[12],e[13],e[14])}rotate(e){var t=new Hi;return t.fromRotation(e),this.mul(t)}scale(e){var t=new Hi;return t.fromScaling(e),this.mul(t)}translate(e){var t=new Hi;return t.fromTranslation(e),this.mul(t)}toThreeMatrix(){return new qt().fromArray(this.toArray())}}class $C{constructor(){ne(this,"m_eye");ne(this,"m_right");ne(this,"m_up");ne(this,"m_dir");this.m_eye=Le(0,0,1),this.m_right=Le(1,0,0),this.m_up=Le(0,1,0),this.m_dir=Le(0,0,-1)}get eye(){return this.m_eye}set eye(e){this.m_eye=e}get right(){return this.m_right}set right(e){this.m_right=e}get up(){return this.m_up}set up(e){this.m_up=e}get dir(){return this.m_dir}set dir(e){this.m_dir=e}}class Jo extends Hi{constructor(){super()}clone(){var e=new Jo;return e.copy(this),e}get viewSpecificaiton(){var e=ts(this).invert().toArray(),t=new $C;return t.eye=Le(e[12],e[13],e[14]),t.right=Le(e[0],e[1],e[2]),t.up=Le(e[4],e[5],e[6]),t.dir=Le(e[8],e[9],e[10]),t}set viewSpecificaiton(e){var t=Le(e.up).normalize(),i=Le(e.dir).normalize(),r=Le(t).cross(i),s=this.toArray();s[0]=r.x,s[1]=r.y,s[2]=r.z,s[4]=t.x,s[5]=t.y,s[6]=t.z,s[8]=i.x,s[9]=i.y,s[10]=i.z,s[12]=e.eye.x,s[13]=e.eye.y,s[14]=e.eye.z,this.invert()}lookAt(e,t,i){var r=Le(i).normalize(),s=Le(e).sub(t).normalize(),o=Le(r).cross(s).normalize(),a=this.toArray();a[0]=o.x,a[1]=o.y,a[2]=o.z,a[4]=r.x,a[5]=r.y,a[6]=r.z,a[8]=s.x,a[9]=s.y,a[10]=s.z,a[12]=e.x,a[13]=e.y,a[14]=e.z,this.invert()}}class Qo extends Hi{constructor(){super()}clone(){var e=new Qo;return e.copy(this),e}get orthoSize(){var e=this.toArray(),t=2/e[0],i=2/e[5];return mr(t,i)}set orthoSize(e){var t=-e.x/2,i=e.x/2,r=-e.y/2,s=e.y/2,o=this.toArray();o[0]=2/(i-t),o[5]=2/(s-r),o[12]=-(i+t)/(i-t),o[13]=-(s+r)/(s-r)}get orthoRange(){var e=this.toArray(),t=(e[14]-1)/(e[14]+1),i=2/(e[10]*(1-t));return md(i,i*t)}set orthoRange(e){var t=e.min,i=e.max,r=this.toArray();r[10]=-2/(i-t),r[14]=-(i+t)/(i-t)}get aspect(){var e=this.orthoSize.toArray();return e[1]>0?e[0]/e[1]:0}set aspect(e){var t=this.orthoSize,i=t.toArray();i[0]=i[1]*e,this.orthoSize=t}}const ts=Hi.create;class qC{constructor(e){ne(this,"m_uniforms");this.m_uniforms=e,window.uniforms=e}update(e,t){const i=this.m_uniforms.projectionMatrix,r=i.orthoSize;r.mul(t),i.orthoSize=r,this.m_uniforms.projectionMatrix=i;let s=this.m_uniforms.viewMatrix,o=this.m_uniforms.viewportSize,a=s.toArray(),l=Le(a[0],a[4],a[8]),c=Le(a[1],a[5],a[9]);l.setLength(((e.x+.5)/o.x-.5)*(1/t-1)*r.x).neg(),c.setLength(((e.y+.5)/o.y-.5)*(1/t-1)*r.y);var u=Le().add(l).add(c);let d=ts();d.translate(u),s.mul(d),this.m_uniforms.viewMatrix=s}}const Eu=n=>new Ke(n.x,n.y);var nl;let Bo=(nl=class{constructor(e){ne(this,"m_successor");this.m_successor=e}mouseMove(e,t,i,r){const s=this.doMouseMove(e,t,i,r);this.m_successor&&(s?this.m_successor.cancel():this.m_successor.mouseMove(e,t,i,r))}mouseDown(e,t,i,r){const s=this.doMouseDown(e,t,i,r);this.m_successor&&(s?this.m_successor.cancel():this.m_successor.mouseDown(e,t,i,r))}mouseDrag(e,t,i,r){const s=this.doMouseDrag(e,t,i,r);this.m_successor&&(s?this.m_successor.cancel():this.m_successor.mouseDrag(e,t,i,r))}mouseUp(e,t,i,r){const s=this.doMouseUp(e,t,i,r);this.m_successor&&(s?this.m_successor.cancel():this.m_successor.mouseUp(e,t,i,r))}cancel(){this.doCancel(),this.m_successor&&this.m_successor.cancel()}doMouseDown(e,t,i,r){return!1}doMouseDrag(e,t,i,r){return!1}doMouseUp(e,t,i,r){return!1}doMouseMove(e,t,i,r){return!1}doCancel(){}},ne(nl,"ClickRange",6),ne(nl,"DoubleClickTime",450),nl);class YC{constructor(e){ne(this,"m_successor");this.m_successor=e}mouseWheel(e,t,i){this.doMouseWheel(e,t,i)||this.m_successor&&this.m_successor.mouseWheel(e,t,i)}doMouseWheel(e,t,i){return!1}}const Hl=class Hl extends Bo{constructor(t){super(t);ne(this,"m_initial");ne(this,"m_lastTime",0);ne(this,"m_lastPosition",new hr);ne(this,"m_lastMouseButton",Nn.NoButton)}static get multiple(){return this.m_multiple}static set multiple(t){this.m_multiple=t}doMouseDown(t,i,r,s){return this.m_initial=i,!1}doMouseDrag(t,i,r,s){return this.m_initial!==void 0}doMouseUp(t,i,r,s){if(this.m_initial){if(this.testDoubleClick(i,r)){if(kt.locked!==!0){const o=kt.pickObject(Eu(i));new Kp(-1).execute(),o>=0&&new Kp(o).execute()}}else if(r===Nn.LeftButton){const o=kt.pickObject(Eu(i)),a=o>=0?[o]:[];Hl.multiple?s===Mi.None?new Su(a).execute():(s===Mi.Ctrl||s===Mi.Meta)&&o>=0&&new jC(o).execute():new Su(a).execute()}else if(r!==Nn.MiddleButton){if(r===Nn.RightButton){let o=kt.pickObject(Eu(i));o>=0?kt.selected.indexOf(o)===-1&&new Su([o]).execute():new hd().execute(),ht.emit("popCanvasContextmenu",i)}}return this.cancel(),!1}return!1}doMouseMove(t,i,r,s){return!0}doCancel(){this.m_initial=void 0}testDoubleClick(t,i){const r=Date.now()-this.m_lastTime<=Bo.DoubleClickTime&&i===Nn.LeftButton&&this.m_lastMouseButton===Nn.LeftButton&&t.clone().sub(this.m_lastPosition).manhattanDist()<=Bo.ClickRange;return this.m_lastTime=Date.now(),this.m_lastMouseButton=i,this.m_lastPosition=t.clone(),r}};ne(Hl,"m_multiple",!0);let gd=Hl;class KC extends Bo{constructor(t){super(t);ne(this,"m_initial")}doMouseDown(t,i,r,s){return this.m_initial=i,!1}doMouseDrag(t,i,r,s){const a=Qe.navigationBar.mouseHandler;return a.type==="none"&&s===Mi.None&&i.clone().sub(this.m_initial).manhattanDist()>Nn.ClickRange&&(r===Nn.LeftButton?a.begin("orbit",mr(this.m_initial.x,this.m_initial.y)):a.begin("pan",mr(this.m_initial.x,this.m_initial.y)),ht.emit("navigationBegun")),a.type!=="none"&&a.move(mr(i.x,i.y)),a.type!=="none"}doMouseUp(t,i,r,s){const a=Qe.navigationBar.mouseHandler;return a.type!=="none"?(a.end(mr(i.x,i.y)),!0):!1}}class ZC extends YC{constructor(e){super(e)}doMouseWheel(e,t,i){if(t===Mi.None){const r=Qe.navigationBar,s=new qC(r.navigator.uniforms),o=ff(e.x,e.y).mul(window.devicePixelRatio);return s.update(o,i===Ul.Up?1.1:1/1.1),ht.emit("updateCamera"),!0}return!1}}class JC extends Bo{constructor(e){super(e)}doMouseDown(e,t,i,r){return Ui.active?(Ui.active.doMouseDown(e,t),!0):!1}doMouseUp(e,t,i,r){return Ui.active?(Ui.active.doMouseUp(e,t),!0):!1}doMouseMove(e,t,i,r){return Ui.active?(Ui.active.doMouseMove(e,t),!0):!1}doMouseDrag(e,t,i,r){return Ui.active?(Ui.active.doMouseDrag(e,t,i,r),!0):!1}doCancel(){}}class QC{constructor(e){const t=$(e);this.setMouseHandler(t),this.setWheelHandler(t)}setMouseHandler(e){const t=new KC(new JC(new gd(void 0)));let i=!1;e.on("mousedown",r=>{i=!0;const s=new Nn(r),o=new Mi(r),a=new hr(r.pageX,r.pageY);t.mouseDown(r,a,s.code,o.code);const l=d=>{if(new Nn(d).code===Nn.NoButton){u();return}const f=new hr(d.pageX,d.pageY);t.mouseDrag(d,f,s.code,o.code)},c=d=>{const f=new hr(d.pageX,d.pageY);t.mouseUp(d,f,s.code,o.code),u()},u=()=>{$(document).off("mousemove",l),$(document).off("mouseup",c),t.cancel(),i=!1};$(document).on("mousemove",l),$(document).on("mouseup",c)}),e.on("mousemove",r=>{if(i===!1){const s=new Mi(r),o=new hr(r.pageX,r.pageY);t.mouseMove(r,o,Nn.NoButton,s.code)}})}setWheelHandler(e){const t=new ZC(void 0);e.on("mousewheel DOMMouseScroll",i=>{const r=new hr(i.pageX,i.pageY),s=new Mi(i),o=i.originalEvent,a=o.wheelDelta>0||o.detail<0?Ul.Up:Ul.Down;t.mouseWheel(r,s.code,a)})}}class wu extends Gt{constructor(e,t){t===void 0&&(t=12);const i=2*t,r=new Float32Array(3*i*2),s=Le(0,0,1),o=2*Math.PI/t;for(let h=0;h<t;h++){let M=h*o,g=Le(.08*Math.cos(M),.08*Math.sin(M),.7);r.set(g.toArray(),2*h*3),r.set(s.toArray(),3*(2*h+1))}const a=new Float32Array(3*i*2),l=Math.sqrt(.0964),c=.3/l,u=.08/l;for(let h=0;h<2*t;h++){let M=h*o/2,g=Le(Math.cos(M)*c,Math.sin(M)*c,u);a.set(g.toArray(),3*h)}let d=2*t*3;for(let h=0;h<t;h++){let M=h*o,g=Le(.03*Math.cos(M),.03*Math.sin(M),0),y=Le(.03*Math.cos(M),.03*Math.sin(M),.8);r.set(g.toArray(),d+2*h*3),r.set(y.toArray(),d+3*(2*h+1));let E=Le(Math.cos(M),Math.sin(M),0);a.set(E.toArray(),d+2*h*3),a.set(E.toArray(),d+3*(2*h+1))}let f=new Uint16Array(3*t*3);for(let h=0;h<t;h++){let M=2*h,g=1+M,y=1+g;y===i&&(y=0),f.set([M,y,g],3*h),f.set([M,y,g],3*h)}for(let h=0;h<t;h++){let M=i+2*h,g=M+1,y=g+1,E=y+1;h===t-1&&(y=i,E=y+1);var p=3*t+2*h*3;f.set([M,E,g],p),f.set([M,y,E],p+3)}let _=[];for(let h=0;h<f.length;h++)_[h]=f[h];const v=new Qt;v.setAttribute("position",new Nt(r,3)),v.setAttribute("normal",new Nt(a,3)),v.setIndex(_);const m=new Wr({color:e,side:ln});super(v,m)}set lengthScale(e){this.scale.x=e,this.scale.y=e,this.scale.z=e}}class eR{constructor(e){ne(this,"m_scene");ne(this,"m_directionalLight");ne(this,"m_camera");ne(this,"m_labelGroups");ne(this,"arrowGroup");this.m_scene=new rv;const t=new wu(new qe(1,0,0));t.rotateY(Math.PI/2);const i=new wu(new qe(0,1,0));i.rotateX(-Math.PI/2);const r=new wu(new qe(0,0,1));this.arrowGroup=new On,this.arrowGroup.add(t),this.arrowGroup.add(i),this.arrowGroup.add(r);const s=new uv(16777215,.1);this.m_scene.add(s),this.m_directionalLight=new cv(16777215,2),this.m_directionalLight.position.copy(e.position),this.m_scene.add(this.m_directionalLight),this.m_camera=e,ht.bind("cameraUpdated",()=>{this.m_directionalLight.position.copy(this.m_camera.position)}),this.m_labelGroups=new Map}get labels(){const e=[];return this.m_labelGroups.forEach((t,i)=>{e.push(...t.labels)}),e}addLables(e){this.removeLable(e.name),this.m_labelGroups.set(e.name,e),e.labels.forEach(t=>{const i=t.get3DObject();i!==void 0&&this.m_scene.add(i)})}removeLable(e){const t=this.m_labelGroups.get(e);t!==void 0&&(t.labels.forEach(i=>{const s=i.get3DObject();s!==void 0&&(this.m_scene.remove(s),this.disposeObject(s))}),this.m_labelGroups.delete(e))}removeObject(e){let t;e instanceof zt?t=e:t=this.m_scene.getObjectByName(e),t!==void 0&&(this.m_scene.remove(t),this.disposeObject(t))}disposeObject(e){e instanceof Gt||e instanceof Ko||e instanceof av||e instanceof Il?(e.material.dispose(),e.geometry.dispose()):e instanceof On?e.traverse(t=>{t!==e&&this.disposeObject(t)}):console.warn(`dispose failed! ${e}`)}clear(){this.m_scene.children.filter(t=>t.isPart).forEach(t=>{this.m_scene.remove(t),this.disposeObject(t)})}get scene(){return this.m_scene}}var Vn=(n=>(n[n.HIDE_PART=0]="HIDE_PART",n[n.SHOW_PART=1]="SHOW_PART",n[n.PART_DISPLAY_CHANGE=2]="PART_DISPLAY_CHANGE",n[n.PART_COLOR_CHANGE=3]="PART_COLOR_CHANGE",n[n.PART_HIDDEN_FACE=4]="PART_HIDDEN_FACE",n[n.PART_SHOW_FACE=5]="PART_SHOW_FACE",n[n.SHOW_ALL=6]="SHOW_ALL",n))(Vn||{});class _d{constructor(e,t,i){this.actionType=e,this.partId=t,this.faceId=i}}class tR extends eR{constructor(e){super(e),ht.bind("updateGeoThreeScene",t=>{const i=(s,o,a)=>{const l=Qe.database.findPart(s);l.setFaceVisiable([o],a);const c=l.__currentFaceIndex;l.children.forEach(u=>{u instanceof Gt&&(u.geometry.setIndex(c),u.geometry.index.needsUpdate=!0)})},r=()=>{Qe.database.foreachPart(s=>{s.visible===!1&&(s.attribute.visible=!0,s.updateVisiableAttribute());let o=!1;if(s.forEachFace(a=>{a.visible===!1&&(a.visible=!0,s.m_indexDirty=!0,o=!0)}),o){const a=s.__currentFaceIndex;s.children.forEach(l=>{l instanceof Gt&&(l.geometry.setIndex(a),l.geometry.index.needsUpdate=!0)})}s.attribute.visible===!1&&(s.attribute.visible=!0)})};switch(t.actionType){case Vn.HIDE_PART:case Vn.SHOW_PART:case Vn.PART_DISPLAY_CHANGE:case Vn.PART_COLOR_CHANGE:Qe.database.findPart(t.partId).updateVisiableAttribute();break;case Vn.PART_HIDDEN_FACE:i(t.partId,t.faceId,!1);break;case Vn.PART_SHOW_FACE:i(t.partId,t.faceId,!0);break;case Vn.SHOW_ALL:r();break}ht.emit("reRenderCanvas")})}get scene(){return this.m_scene}addPartMesh(e){e instanceof On?this.m_scene.add(e):e.forEach(t=>this.m_scene.add(t)),ht.emit("reRenderCanvas",this)}intersectObject(e,t){const i=new gC,r=2/Qe.navigationBar.navigator.uniforms.projectionMatrix.toArray()[0],s=r*.005,o=r*.005;i.params={Mesh:{},LOD:{},Sprite:{},Line:{threshold:s},Points:{threshold:o}};const a=new Ke;a.x=e.x/window.innerWidth*2-1,a.y=-(e.y/window.innerHeight)*2+1,i.setFromCamera(a,this.m_camera);const l=[];this.m_scene.children.forEach(f=>{f.isPart&&f.visible&&f.children.filter(t).forEach(p=>{l.push(p)})});const c=i.intersectObjects(l);let u=1e31,d;return c.length>0&&c.forEach(f=>{f.distance<u&&(d=f,u=f.distance)}),d}}class nR{constructor(e){ne(this,"m_scene");ne(this,"m_boundingBox");ne(this,"m_renderParts");ne(this,"m_entitySets");ne(this,"m_treeView");ne(this,"m_fileName");this.m_renderParts=[],this.m_scene=new tR(e.camera),this.m_treeView=[],ht.emit("reRenderCanvas",this.m_scene)}get renderParts(){return this.m_renderParts}get boundingBox(){return this.m_boundingBox}set boundingBox(e){this.m_boundingBox=e}get scene(){return this.m_scene}get extension(){const e=this.boundingBox.max.x-this.boundingBox.min.x,t=this.boundingBox.max.y-this.boundingBox.min.y,i=this.boundingBox.max.z-this.boundingBox.min.z;return Math.sqrt(Math.pow(e,2)+Math.pow(t,2)+Math.pow(i,2))}get modelTree(){return this.m_treeView}set modelTree(e){this.m_treeView=e}get fileName(){return this.m_fileName}set fileName(e){this.m_fileName=e}findPart(e){let t;for(let i of this.m_renderParts)if(i.partId===e){t=i;break}return t}foreachPart(e){this.m_renderParts.forEach(t=>e(t))}addPrePart(e){this.m_renderParts.push(e),e.toThreeObject(),this.m_scene.addPartMesh(e)}foreachSet(e){this.m_entitySets.forEach(t=>{e(t)})}clear(){this.m_renderParts=[],this.m_treeView=[],this.scene.clear()}}class iR{constructor(){ne(this,"m_highlighted",-1);ne(this,"m_selected");ne(this,"m_type",jt.GEOMETRY_SURFACE);ne(this,"m_locked",!1);this.m_selected=new $u([],jt.GEOMETRY_SURFACE)}doPickObject(e,t){if(kt.type===jt.NONE)return-1;let i,r=Qe.database,s;switch(kt.type){case jt.GEOMETRY_VOLUME:s=o=>o instanceof Gt&&o.visible||o instanceof Ko&&o.visible;break;case jt.GEOMETRY_SURFACE:s=o=>o instanceof Gt&&o.visible;break;case jt.GEOMETRY_EDGE:s=o=>o instanceof Ko;break;case jt.GEOMETRY_POINT:s=o=>o instanceof Il;break;default:s=o=>!0}if(i=r.scene.intersectObject(new Ke(e,t),s),i)switch(kt.type){case jt.GEOMETRY_VOLUME:return i.object.partId;case jt.GEOMETRY_SURFACE:{const o=i.object.partId,a=r.findPart(o),l=i.faceIndex,c=a.getFaceByTriIndex(l);return c===void 0?-1:Fc(o,c)}case jt.GEOMETRY_EDGE:{const o=i.object.partId,a=r.findPart(o),l=i.index,c=a.getEdgeByIndex(l);return console.log(c),c===void 0?-1:Fc(o,c)}case jt.GEOMETRY_POINT:{const o=i.object.partId,a=r.findPart(o),l=i.index,c=a.getPointByIndex(l);return c===void 0?-1:Fc(o,c)}}return-1}getSelected(){return this.m_selected}setSelected(e){this.m_selected=e}getLocked(){return this.m_locked}setLocked(e){this.m_locked=e}getSelectType(){return this.m_type}setSelectType(e){this.m_type=e}getHighlighted(){return this.m_highlighted}setHighlighted(e){this.m_highlighted=e}doPickPosition(e,t){const i=new Ke(e,t);let r=Qe.database.scene.intersectObject(i,s=>s instanceof Gt&&s.visible);return r?{point:r.point,normal:r.normal}:void 0}}class ko{constructor(){ne(this,"m_orig");ne(this,"m_dir");this.m_orig=Le(),this.m_dir=Le(0,0,1)}get origin(){return this.m_orig}set origin(e){this.m_orig.copy(e)}get direction(){return this.m_dir}set direction(e){this.m_dir.copy(e)}set(e,t){this.m_orig=e.clone(),this.m_dir=t.clone()}copy(e){this.m_orig=e.m_orig.clone(),this.m_dir=e.m_dir.clone()}clone(){var e=new ko;return e.copy(this),e}static create(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=new ko,r=e.length;return r===1&&e[0]instanceof ko?i.copy(e[0]):r===2&&e[0]instanceof Ei&&e[1]instanceof Ei&&i.set(e[0],e[1]),i}transform(e){this.m_orig.transformPoint(e),this.m_dir.transformVector(e)}getProjectedPoint(e){var t=Le(e).sub(this.m_orig).dot(this.m_dir);return Le(this.m_dir).mul(t).add(this.m_orig)}}const rR=ko.create;class ea{constructor(){ne(this,"m_dirty");ne(this,"m_modelMatrix");ne(this,"m_viewMatrix");ne(this,"m_projectionMatrix");ne(this,"m_viewportSize");ne(this,"m_modelViewMatrix");ne(this,"m_modelViewProjectionMatrix");ne(this,"m_orbitPoint");this.m_dirty=!0,this.m_modelMatrix=ts(),this.m_viewMatrix=new Jo,this.m_projectionMatrix=new Qo,this.m_viewportSize=ff(100,100),this.m_modelViewMatrix=ts(),this.m_modelViewProjectionMatrix=ts(),this.m_orbitPoint=Le()}copy(e){this.modelMatrix=e.modelMatrix,this.viewMatrix=e.viewMatrix,this.projectionMatrix=e.projectionMatrix,this.viewportSize=e.viewportSize,this.orbitPoint=e.orbitPoint}clone(){let e=new ea;return e.copy(this),e}get modelMatrix(){return this.m_modelMatrix.clone()}set modelMatrix(e){this.m_modelMatrix.copy(e),this.m_dirty=!0}get viewMatrix(){return this.m_viewMatrix.clone()}set viewMatrix(e){this.m_viewMatrix.copy(e),this.m_dirty=!0}get projectionMatrix(){return this.m_projectionMatrix.clone()}set projectionMatrix(e){this.m_projectionMatrix.copy(e),this.m_dirty=!0}get viewportSize(){return this.m_viewportSize.clone()}set viewportSize(e){this.m_viewportSize.copy(e),this.m_projectionMatrix.aspect=e.x/e.y,this.m_dirty=!0}get orbitPoint(){return this.m_orbitPoint.clone()}set orbitPoint(e){this.m_orbitPoint.copy(e)}update(){this.m_dirty&&(this.m_dirty=!1,this.m_modelViewMatrix.copy(this.m_viewMatrix),this.m_modelViewMatrix.mul(this.m_modelMatrix),this.m_modelViewProjectionMatrix.copy(this.m_projectionMatrix),this.m_modelViewProjectionMatrix.mul(this.m_modelViewMatrix))}rayFromWindow(e){var t=rR(),i=this.viewMatrix.viewSpecificaiton,r=i.right,s=i.up,o=i.dir,a=i.eye;t.direction=o.neg(),t.origin=a;let l=this.viewportSize,c=this.projectionMatrix.orthoSize;return r.setLength(((e.x+.5)/l.x-.5)*c.x),s.setLength(((l.y-(e.y+.5))/l.y-.5)*c.y),t.origin=t.origin.add(r).add(s),t}}class gf{constructor(e){ne(this,"m_min");ne(this,"m_max");this.m_min=new e,this.m_max=new e,this.m_max.fill(1)}get min(){return this.m_min}set min(e){this.m_min.copy(e)}get max(){return this.m_max}set max(e){this.m_max.copy(e)}set(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=arguments.length;if(i===1){let s=arguments[0];if(s instanceof gf)this.copy(s);else if(Array.isArray(s)){let o=s.filter((l,c)=>c%2==0),a=s.filter((l,c)=>c%2==1);this.m_min.set(o),this.m_max.set(a)}}else if(i===2){let s=arguments[0];var r=arguments[1];s instanceof hi&&r instanceof hi&&(this.m_min.copy(s),this.m_max.copy(r))}else if(i>=4&&e.every(function(s){return typeof s=="number"})){let s=e.filter((a,l)=>l%2==0),o=e.filter((a,l)=>l%2==1);this.m_min.set(s),this.m_max.set(o)}}copy(e){this.set(e.min.clone(),e.max.clone())}center(){return this.min.clone().add(this.max).div(2)}extent(){return this.max.clone().sub(this.min)}expand(e){let t=e/2,i=this.m_min.toArray();for(let s=0;s<i.length;s++)i[s]-=t;var r=this.m_max.toArray();for(let s=0;s<r.length;s++)r[s]+=t}}class Fl extends gf{constructor(){super(Ei)}static create(){var e=new Fl;return e.set.apply(e,arguments),e}clone(){var e=new Fl;return e.copy(this),e}}class Sr extends Fl{constructor(){super(),this.unset()}static create(){var e=new Sr;return e.set.apply(e,arguments),e}clone(){var e=new Sr;return e.copy(this),e}isValid(){return this.min.x<=this.max.x&&this.min.y<=this.max.y&&this.min.z<=this.max.z}unset(){this.set(Le(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Le(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE))}addPoint(...e){var t=arguments.length;if(t===1&&arguments[0]instanceof Ei){var i=arguments[0];this.set(Le(Math.min(this.min.x,i.x),Math.min(this.min.y,i.y),Math.min(this.min.z,i.z)),Le(Math.max(this.max.x,i.x),Math.max(this.max.y,i.y),Math.max(this.max.z,i.z)))}else t===3&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"&&typeof arguments[2]=="number"&&this.addPoint(Le(arguments[0],arguments[1],arguments[2]))}add(...e){let t=arguments.length;if(t===1&&arguments[0]instanceof Sr){let i=arguments[0];i.isValid()&&(this.addPoint(i.min),this.addPoint(i.max))}else if(t===1&&arguments[0]instanceof Float32Array){const i=arguments[0],r=Math.floor(i.length/3);for(let s=0;s<r;s++)this.addPoint(Le(i[3*s],i[3*s+1],i[3*s+2]))}else for(let i=0;i<t;i++)if(arguments[i]instanceof Ei){let r=arguments[i];this.addPoint(r)}}update(...e){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.unset(),this.add.apply(this,t)}transform(e){if(!this.isValid())return this;var t=sR(),i=Le();return i.set(this.min.x,this.min.y,this.min.z),i.transformPoint(e),t.add(i),i.set(this.max.x,this.min.y,this.min.z),i.transformPoint(e),t.add(i),i.set(this.min.x,this.max.y,this.min.z),i.transformPoint(e),t.add(i),i.set(this.max.x,this.max.y,this.min.z),i.transformPoint(e),t.add(i),i.set(this.min.x,this.min.y,this.max.z),i.transformPoint(e),t.add(i),i.set(this.max.x,this.min.y,this.max.z),i.transformPoint(e),t.add(i),i.set(this.min.x,this.max.y,this.max.z),i.transformPoint(e),t.add(i),i.set(this.max.x,this.max.y,this.max.z),i.transformPoint(e),t.add(i),this.copy(t),this}}const sR=Sr.create;class oR{constructor(e){ne(this,"m_navigator");ne(this,"m_type");this.m_type="none",this.m_navigator=e}get type(){return this.m_type}}class dv{constructor(e){ne(this,"m_navigator");this.m_navigator=e}}class aR extends dv{constructor(t,i){super(t);ne(this,"m_current");this.m_current=i}update(t){var i=this.m_navigator.uniforms,r=t.clone().sub(this.m_current);r.y=-r.y;var s=i.viewMatrix,o=i.viewportSize,a=s.toArray(),l=Le(a[0],a[4],a[8]),c=Le(a[1],a[5],a[9]),u=(Le(a[2],a[6],a[10]),i.projectionMatrix.orthoSize),d=mr(u.x*r.x/o.x,u.y*r.y/o.y);l.setLength(d.x),c.setLength(d.y);var f=Le().add(l).add(c),p=ts();p.translate(f),s.mul(p),i.viewMatrix=s,this.m_current=t}}class lR extends dv{constructor(t,i){super(t);ne(this,"m_current");this.m_current=i}update(t){var i=this.m_navigator,r=i.uniforms,s=i.boundingBox,o=i.factor,a=r.viewMatrix,l=a.viewSpecificaiton,c=r.viewportSize,u=l.right,d=l.up,f=l.dir,p=t.clone().sub(this.m_current);p.y=-p.y;var _=p.length()/c.y*Math.PI*2;p.normalize(),u.setLength(p.x),d.setLength(p.y);var v=Le().add(u).add(d),m=Le(f).cross(v).normalize(),h=pd().setAxisAngle(m,_),M=r.orbitPoint,g=Le(M).neg(),y=ts().translate(M).rotate(h).translate(g);a.mul(y);var E=s.center(),w=s.extent().length()*o,A=a.viewSpecificaiton,B=Le(A.eye).sub(E).dot(A.dir);A.eye=Le(A.eye).add(Le(A.dir).setLength(w-B)),a.viewSpecificaiton=A,r.viewMatrix=a,this.m_current=t}}class cR extends oR{constructor(t){super(t);ne(this,"m_action")}begin(t,i){switch(t){case"pan":this.m_action=new aR(this.m_navigator,i),this.m_type=t;break;case"zoom":case"orbit":this.m_action=new lR(this.m_navigator,i),this.m_type=t;break}t!=="pan"&&t!=="zoom"&&t!=="orbit"&&t!=="roll"||(this.m_navigator.onBegun(t),this.m_navigator.onUpdated())}move(t){this.m_action&&(this.m_action.update(t),this.m_navigator.onMoved(this.m_type),this.m_navigator.onUpdated())}end(t){this.m_action&&(this.m_action=void 0,this.m_navigator.onEnded(this.m_type),this.m_navigator.onUpdated(),this.m_type="none")}}class uR{constructor(){ne(this,"m_uniforms");ne(this,"m_boundingBox");ne(this,"m_factor");this.m_uniforms=new ea,this.m_factor=1.5}get uniforms(){return this.m_uniforms}set uniforms(e){this.m_uniforms=e}get boundingBox(){return this.m_boundingBox}set boundingBox(e){this.m_boundingBox=e}get orbitPoint(){return this.m_uniforms.orbitPoint}set orbitPoint(e){this.m_uniforms.orbitPoint=e}get factor(){return this.m_factor}set factor(e){this.m_factor=e}onBegun(e){}onMoved(e){}onEnded(e){}onUpdated(){}}class dR{constructor(e){ne(this,"m_navigator");ne(this,"m_mouseHandler");this.m_navigator=new uR,this.m_navigator.uniforms=e,this.m_mouseHandler=new cR(this.m_navigator),this.m_navigator.onUpdated=()=>{ht.emit("updateCamera")}}get navigator(){return this.m_navigator}get boundingBox(){return this.m_navigator.boundingBox.clone()}set boundingBox(e){this.m_navigator.boundingBox=e}get mouseHandler(){return this.m_mouseHandler}}class Zp{constructor(e){ne(this,"title");ne(this,"level");ne(this,"children");ne(this,"selectIds");this.title=e,this.children=[]}get name(){return this.title}addChildren(e){this.children.push(e)}}class fR{constructor(e,t){ne(this,"m_canvasElement");ne(this,"m_builtInUniforms");ne(this,"m_engine");ne(this,"m_database");this.m_builtInUniforms=new ea;const i=new dR(this.m_builtInUniforms);Qe.navigationBar=i,Qe.navigationBar.navigator.uniforms=this.m_builtInUniforms,Qe.navigationBar.navigator.boundingBox=Sr.create(0,1,0,1,0,1),this.m_engine=new zC(e,t,QC),this.m_database=new nR(this.m_engine),Qe.database=this.m_database,kt.init(new iR),window.database=this.m_database,ht.bind("selectionChanged",()=>{new dd().execute()}),ht.bind("highlightChanged",()=>{new ud().execute()}),this.home()}get builtInUniforms(){return this.m_builtInUniforms}load(e,t){const i=e.meshes;console.log(e),this.m_database.clear(),Qe.navigationBar.navigator.boundingBox=Sr.create(0,0,0,0,0,0),this.m_builtInUniforms=new ea,Qe.navigationBar.navigator.uniforms=this.m_builtInUniforms,window.GlobalObject=Qe;const r=e.meshes,s=new Map;r.forEach((c,u)=>{const d=new Zp(c.name);d.selectIds=[u],s.set(u,d)});function o(c,u,d){c&&(d(c,u),u=c.name,c.children.forEach(f=>{o(f,u,d)}))}const a=[],l=new Map;o(e.root,void 0,(c,u)=>{let d=c.name;(d===void 0||d.length===0)&&(d="Root"),c.name=d;const f=new Zp(d);u==="Root"&&(f.level=0,a.push(f)),l.set(f.name,f),u&&l.get(u).addChildren(f),c.children.length===0&&c.meshes.forEach(p=>{const _=s.get(p);f.children.push(_)})}),window.allTreeNodes=a,i.forEach((c,u)=>{const d=c.bbox,f=Sr.create(d[0],d[3],d[1],d[4],d[2],d[5]);Qe.navigationBar.navigator.boundingBox.add(f);const p=new XC(u,f,c);this.m_database.addPrePart(p)}),Qe.database.modelTree=a,Qe.database.fileName=t,ht.emit("updateTree"),ht.emit("windowResized"),this.fit(),this.home()}home(){const e=Qe.navigationBar.navigator.boundingBox;if(!e.isValid())return;const t=Qe.navigationBar.navigator.uniforms,{viewportSize:i}=t,r=i.x/i.y,s=e.center(),a=e.extent().length()*1.5,l=a*.75,c=l*r,u=a*.5,d=a*1.5,f=s,p=Le(s).add(Le(1,1,1).setLength(a)),_=Le(1,1,2).normalize(),v=new Jo;v.lookAt(p,f,_),t.viewMatrix=v;const m=new Qo;m.orthoSize=mr(c,l),m.orthoRange=md(u,d),t.projectionMatrix=m,ht.emit("updateCamera")}lookFrom(e,t){const i=Qe.navigationBar.navigator.boundingBox;Qe.navigationBar.navigator.uniforms.orbitPoint=Qe.navigationBar.navigator.boundingBox.center();const r=i.center(),o=i.extent().length()*1.5,a=r,l=Le(r).add(Le(e).setLength(o)),c=new Jo;c.lookAt(l,a,t);const u=Qe.navigationBar.navigator.uniforms;u.viewMatrix=c;const{viewportSize:d}=u,f=d.x/d.y,p=o*.75,_=p*f,v=o*.5,m=o*1.5,h=new Qo;h.orthoSize=mr(_,p),h.orthoRange=md(v,m),u.projectionMatrix=h,ht.emit("updateCamera")}fit(){const e=Qe.navigationBar.navigator.boundingBox;e.isValid()&&(Qe.navigationBar.navigator.uniforms.orbitPoint=e.center(),ht.emit("updateCamera"))}}var hR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function mR(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var vd={exports:{}};const gR=mR(Xy);(function(n,e){(function(t,i){i(e,gR)})(hR,function(t,i){let r=null;function s(){return r!==null}function o(P){r&&l(),r=P}function a(P){P===r&&(r=null)}function l(){r&&(r.closeMenu(),r=null)}const c={defaultDirection:"br",defaultMinWidth:100,defaultMaxWidth:600,defaultZindex:100,defaultZoom:1,defaultAdjustPadding:{x:0,y:10}};function u(P,F){let j=P.offsetTop;return P.offsetParent!=null&&P.offsetParent!=F&&(j-=P.offsetParent.scrollTop,j+=u(P.offsetParent,F)),j}function d(P,F){let j=P.offsetLeft;return P.offsetParent!=null&&P.offsetParent!=F&&(j-=P.offsetParent.scrollLeft,j+=d(P.offsetParent,F)),j}function f(P,F,j,re){return{x:d(P,re)+F,y:u(P,re)+j}}const p="mx-menu-default-container",_="mx-menu-container-";let v=0;function m(P){const{getContainer:F,zIndex:j}=P;if(F){const he=typeof F=="function"?F():F;if(he){let me=he.getAttribute("id");return me||(me=_+v++,he.setAttribute("id",me)),{eleId:me,container:he,isNew:!1}}}let re=document.getElementById(p);return re||(re=document.createElement("div"),re.setAttribute("id",p),re.setAttribute("class","mx-menu-ghost-host fullscreen"),document.body.appendChild(re)),re.style.zIndex=(j==null?void 0:j.toString())||c.defaultZindex.toString(),{eleId:p,container:re,isNew:!0}}function h(P){return typeof P=="number"?`${P}px`:P}const M=i.defineComponent({props:{vnode:{type:null},data:{type:null,default:null}},setup(P){const{vnode:F,data:j}=i.toRefs(P);return()=>typeof F.value=="function"?F.value(j.value):F.value}}),g=(P,F)=>{const j=P.__vccOpts||P;for(const[re,he]of F)j[re]=he;return j},y={},E={class:"mx-checked-mark","aria-hidden":"true",viewBox:"0 0 1024 1024"},w=[i.createElementVNode("path",{d:"M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z"},null,-1)];function A(P,F){return i.openBlock(),i.createElementBlock("svg",E,w)}const B=g(y,[["render",A]]),k={},x={class:"mx-right-arrow","aria-hidden":"true",viewBox:"0 0 1024 1024"},T=[i.createElementVNode("path",{d:"M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z"},null,-1)];function L(P,F){return i.openBlock(),i.createElementBlock("svg",x,T)}const X=g(k,[["render",L]]),N={class:"mx-item-row"},H=["xlink:href"],O={key:1,class:"label"},Q={class:"mx-item-row"},G={class:"mx-shortcut"},se=i.defineComponent({__name:"ContextMenuItem",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},customRender:{type:Function,default:null},customClass:{type:String,default:""},clickHandler:{type:Function,default:null},label:{type:[String,Object,Function],default:""},icon:{type:[String,Object,Function],default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},hasChildren:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},clickableWhenHasChildren:{type:Boolean,default:!1},rawMenuItem:{type:Object,default:void 0}},emits:["click","subMenuOpen","subMenuClose"],setup(P,{expose:F,emit:j}){const re=P,he=j,{clickHandler:me,clickClose:oe,clickableWhenHasChildren:ve,disabled:Se,hidden:be,label:ae,icon:xe,iconFontClass:we,showRightArrow:Ue,shortcut:nt,hasChildren:Xe}=i.toRefs(re),ke=i.ref(!1),R=i.ref(!1),ue=i.ref(),fe=i.inject("globalOptions"),ye=i.inject("globalHasSlot"),Re=i.inject("globalRenderSlot"),Pe=i.inject("globalCloseMenu"),He=i.inject("menuContext"),at={getSubMenuInstance:()=>{},showSubMenu:()=>ke.value?(He.markActiveMenuItem(at,!0),!0):Xe.value?(lt(),!0):!1,hideSubMenu:()=>{He.closeOtherSubMenu()},isDisabledOrHidden:()=>Se.value||be.value,getElement:()=>ue.value,focus:()=>R.value=!0,blur:()=>R.value=!1,click:Rt};i.provide("menuItemInstance",at),i.onMounted(()=>{He.isMenuItemDataCollectedFlag()?i.nextTick(()=>{let ut=0;const Kt=He.getElement();if(Kt){let Rn=0;for(let ti=0;ti<Kt.children.length;ti++){const Wn=Kt.children[ti];if(Wn.getAttribute("data-type")==="ContextMenuItem"){if(Wn===ue.value){ut=Rn;break}Rn++}}}He.addChildMenuItem(at,ut)}):He.addChildMenuItem(at)}),i.onBeforeUnmount(()=>{He.removeChildMenuItem(at)});function Rt(ut){if(!Se.value){if(ut){const Kt=ut.target;if(Kt.classList.contains("mx-context-no-clickable")||fe.value.ignoreClickClassName&&Kt.classList.contains(fe.value.ignoreClickClassName))return;if(fe.value.clickCloseClassName&&Kt.classList.contains(fe.value.clickCloseClassName)){ut.stopPropagation(),Pe(re.rawMenuItem);return}}Xe.value?ve.value?(typeof me.value=="function"&&me.value(ut),he("click",ut)):ke.value||lt():(typeof me.value=="function"&&me.value(ut),he("click",ut),oe.value&&Pe(re.rawMenuItem))}}function lt(ut){R.value=!1,He.checkCloseOtherSubMenuTimeOut()||He.closeOtherSubMenu(),Se.value||(He.markActiveMenuItem(at),Xe.value&&(ut||He.markThisOpenedByKeyBoard(),He.addOpenedSubMenu(Ot),ke.value=!0,i.nextTick(()=>he("subMenuOpen",at))))}function Ot(){R.value=!1,ke.value=!1,he("subMenuClose",at)}function wt(){return{disabled:Se.value,label:ae.value,icon:xe.value,iconFontClass:we.value,showRightArrow:Ue.value,clickClose:oe.value,clickableWhenHasChildren:ve.value,shortcut:nt.value,theme:fe.value.theme,isOpen:ke,hasChildren:Xe,onClick:Rt,onMouseEnter:lt,closeMenu:Pe}}return F(at),(ut,Kt)=>i.unref(be)?i.createCommentVNode("",!0):(i.openBlock(),i.createElementBlock("div",{key:0,class:"mx-context-menu-item-wrapper",ref_key:"menuItemRef",ref:ue,"data-type":"ContextMenuItem"},[i.unref(ye)("itemRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemRender",wt())},null,8,["vnode"])):P.customRender?(i.openBlock(),i.createBlock(i.unref(M),{key:1,vnode:P.customRender,data:wt()},null,8,["vnode","data"])):(i.openBlock(),i.createElementBlock("div",{key:2,class:i.normalizeClass(["mx-context-menu-item",i.unref(Se)?"disabled":"",R.value?"keyboard-focus":"",P.customClass?" "+P.customClass:"",ke.value?"open":""]),onClick:Rt,onMouseenter:lt},[i.renderSlot(ut.$slots,"default",{},()=>[i.createElementVNode("div",N,[i.createElementVNode("div",{class:i.normalizeClass(["mx-icon-placeholder",P.preserveIconWidth?"preserve-width":""])},[i.renderSlot(ut.$slots,"icon",{},()=>[i.unref(ye)("itemIconRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemIconRender",wt())},null,8,["vnode"])):typeof P.svgIcon=="string"&&P.svgIcon?(i.openBlock(),i.createElementBlock("svg",i.mergeProps({key:1,class:"icon svg"},P.svgProps),[i.createElementVNode("use",{"xlink:href":P.svgIcon},null,8,H)],16)):typeof i.unref(xe)!="string"?(i.openBlock(),i.createBlock(i.unref(M),{key:2,vnode:i.unref(xe),data:i.unref(xe)},null,8,["vnode","data"])):typeof i.unref(xe)=="string"&&i.unref(xe)!==""?(i.openBlock(),i.createElementBlock("i",{key:3,class:i.normalizeClass(i.unref(xe)+" icon "+i.unref(we)+" "+i.unref(fe).iconFontClass)},null,2)):i.createCommentVNode("",!0)]),P.checked?i.renderSlot(ut.$slots,"check",{key:0},()=>[i.unref(ye)("itemCheckRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemCheckRender",wt())},null,8,["vnode"])):i.createCommentVNode("",!0),i.createVNode(B)]):i.createCommentVNode("",!0)],2),i.renderSlot(ut.$slots,"label",{},()=>[i.unref(ye)("itemLabelRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemLabelRender",wt())},null,8,["vnode"])):typeof i.unref(ae)=="string"?(i.openBlock(),i.createElementBlock("span",O,i.toDisplayString(i.unref(ae)),1)):(i.openBlock(),i.createBlock(i.unref(M),{key:2,vnode:i.unref(ae),data:i.unref(ae)},null,8,["vnode","data"]))])]),i.createElementVNode("div",Q,[i.unref(nt)?i.renderSlot(ut.$slots,"shortcut",{key:0},()=>[i.unref(ye)("itemShortcutRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemShortcutRender",wt())},null,8,["vnode"])):i.createCommentVNode("",!0),i.createElementVNode("span",G,i.toDisplayString(i.unref(nt)),1)]):i.createCommentVNode("",!0),i.unref(Ue)?i.renderSlot(ut.$slots,"rightArrow",{key:1},()=>[i.unref(ye)("itemRightArrowRender")?(i.openBlock(),i.createBlock(i.unref(M),{key:0,vnode:()=>i.unref(Re)("itemRightArrowRender",wt())},null,8,["vnode"])):i.createCommentVNode("",!0),i.createVNode(X)]):i.createCommentVNode("",!0)])])],34)),i.unref(fe).menuTransitionProps?(i.openBlock(),i.createBlock(i.Transition,i.normalizeProps(i.mergeProps({key:3},i.unref(fe).menuTransitionProps)),{default:i.withCtx(()=>[ke.value?i.renderSlot(ut.$slots,"submenu",{key:0}):i.createCommentVNode("",!0)]),_:3},16)):ke.value?i.renderSlot(ut.$slots,"submenu",{key:4}):i.createCommentVNode("",!0)],512))}}),pe=i.defineComponent({name:"ContextMenuSperator",components:{VNodeRender:M},setup(){const P=i.inject("globalHasSlot"),F=i.inject("globalRenderSlot");return{globalHasSlot:P,globalRenderSlot:F}}}),ge={key:1,class:"mx-context-menu-item-sperator mx-context-no-clickable"};function Me(P,F,j,re,he,me){const oe=i.resolveComponent("VNodeRender");return P.globalHasSlot("separatorRender")?(i.openBlock(),i.createBlock(oe,{key:0,vnode:()=>P.globalRenderSlot("separatorRender",{})},null,8,["vnode"])):(i.openBlock(),i.createElementBlock("div",ge))}const Ge=g(pe,[["render",Me]]),le=i.defineComponent({name:"ContextSubMenu",components:{ContextMenuItem:se,ContextMenuSeparator:Ge,ContextMenuIconRight:X},props:{items:{type:Object,default:null},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0},adjustPosition:{type:Boolean,default:!0},direction:{type:String,default:"br"}},setup(P){const F=i.inject("menuContext"),j=i.inject("globalOptions"),re=i.inject("globalHasSlot"),he=i.inject("globalRenderSlot"),{zIndex:me,getParentWidth:oe,getParentHeight:ve,getZoom:Se}=F,{adjustPosition:be}=i.toRefs(P),ae=i.ref(),xe=i.ref(),we=i.ref(),Ue=i.ref(),nt=[],Xe=i.inject("globalSetCurrentSubMenu"),ke=[];let R=null,ue=0;function fe(){R&&R.blur()}function ye(We,Ft){if(We){for(let C=Ft!==void 0?Ft:0;C<ke.length;C++)if(!ke[C].isDisabledOrHidden()){Re(C);break}}else for(let C=Ft!==void 0?Ft:ke.length-1;C>=0;C--)if(!ke[C].isDisabledOrHidden()){Re(C);break}}function Re(We){if(R&&fe(),We!==void 0&&(R=ke[Math.max(0,Math.min(We,ke.length-1))]),!!R&&(R.focus(),mi.value)){const Ft=R.getElement();Ft&&(ut.value=Math.min(Math.max(-Kt.value,-Ft.offsetTop-Ft.offsetHeight+gi.value),0))}}function Pe(){Xe(He)}const He={isTopLevel:()=>F.getParentContext()===null,closeSelfAndActiveParent:()=>{const We=lt.getParentContext();if(We){We.closeOtherSubMenu();const Ft=We.getSubMenuInstanceContext();if(Ft)return Ft.focusCurrentItem(),!0}return!1},closeCurrentSubMenu:()=>{var We;return(We=lt.getParentContext())==null?void 0:We.closeOtherSubMenu()},moveCurrentItemFirst:()=>ye(!0),moveCurrentItemLast:()=>ye(!1),moveCurrentItemDown:()=>ye(!0,R?ke.indexOf(R)+1:0),moveCurrentItemUp:()=>ye(!1,R?ke.indexOf(R)-1:0),focusCurrentItem:()=>Re(),openCurrentItemSubMenu:()=>R?R==null?void 0:R.showSubMenu():!1,triggerCurrentItemClick:We=>R==null?void 0:R.click(We)};let at=!1,Rt=!1;const lt={zIndex:me+1,container:F.container,adjustPadding:j.value.adjustPadding||c.defaultAdjustPadding,getParentWidth:()=>{var We;return((We=xe.value)==null?void 0:We.offsetWidth)||0},getParentHeight:()=>{var We;return((We=xe.value)==null?void 0:We.offsetHeight)||0},getParentX:()=>Pt.value.x,getParentY:()=>Pt.value.y,getParentAbsX:()=>xe.value?d(xe.value,F.container):0,getParentAbsY:()=>xe.value?u(xe.value,F.container):0,getPositon:()=>[0,0],getZoom:()=>j.value.zoom||c.defaultZoom,addOpenedSubMenu(We){nt.push(We)},closeOtherSubMenu(){nt.forEach(We=>We()),nt.splice(0,nt.length),Xe(He)},checkCloseOtherSubMenuTimeOut(){return ue?(clearTimeout(ue),ue=0,!0):!1},closeOtherSubMenuWithTimeOut(){ue=setTimeout(()=>{ue=0,this.closeOtherSubMenu()},200)},addChildMenuItem:(We,Ft)=>{Ft===void 0?ke.push(We):ke.splice(Ft,0,We)},removeChildMenuItem:We=>{ke.splice(ke.indexOf(We),1),We.getSubMenuInstance=()=>{}},markActiveMenuItem:(We,Ft=!1)=>{fe(),R=We,Ft&&Re()},markThisOpenedByKeyBoard:()=>{at=!0},isOpenedByKeyBoardFlag:()=>at?(at=!1,!0):!1,isMenuItemDataCollectedFlag:()=>Rt,getElement:()=>xe.value||null,getParentContext:()=>F,getSubMenuInstanceContext:()=>He};i.provide("menuContext",lt);const Ot={getChildItem:We=>ke[We],getMenuDimensions:()=>ae.value?{width:ae.value.offsetWidth,height:ae.value.offsetHeight}:{width:0,height:0},getSubmenuRoot:()=>ae.value,getMenu:()=>xe.value,getScrollValue:()=>ut.value,setScrollValue:We=>ut.value=We,getScrollHeight:()=>Kt.value,getMaxHeight:()=>gi.value,getPosition:()=>Pt.value,setPosition:(We,Ft)=>{Pt.value.x=We,Pt.value.y=Ft}},wt=i.inject("menuItemInstance",void 0);wt&&(wt.getSubMenuInstance=()=>Ot);const ut=i.ref(0),Kt=i.ref(0);function Rn(We){We?ut.value=Math.min(Math.max(ut.value-50,-Kt.value),0):ut.value=Math.min(ut.value+50,0)}function ti(We){We.preventDefault(),We.stopPropagation(),Rn(We.deltaY>0)}function Wn(We){j.value.mouseScroll&&(We.preventDefault(),We.stopPropagation(),Rn(We.deltaY>0))}const mi=i.ref(!1),Pt=i.ref({x:0,y:0}),gi=i.ref(0);return i.onMounted(()=>{const We=F.getPositon();Pt.value={x:(We[0]??j.value.xOffset??0)/Se(),y:(We[1]??j.value.yOffset??0)/Se()},Xe(He),i.nextTick(()=>{var Ft,C;const V=xe.value;if(V&&we.value){const{container:J}=F,te=(oe==null?void 0:oe())??0,ee=(ve==null?void 0:ve())??0,Te=typeof F.adjustPadding=="number"?F.adjustPadding:((Ft=F.adjustPadding)==null?void 0:Ft.x)??0,Oe=typeof F.adjustPadding=="number"?F.adjustPadding:((C=F.adjustPadding)==null?void 0:C.y)??0,Ve=ee>0?Oe:0,Ye=document.documentElement.scrollHeight/Se(),it=document.documentElement.scrollWidth/Se(),et=Math.min(it,J.offsetWidth),Je=Math.min(Ye,J.offsetHeight);let Lt=d(V,J),dn=u(V,J);P.direction.includes("l")?Pt.value.x-=V.offsetWidth+Te:P.direction.includes("r")?Pt.value.x+=te+Te:(Pt.value.x+=te/2,Pt.value.x-=(V.offsetWidth+Te)/2),P.direction.includes("t")?Pt.value.y-=(V.offsetHeight+Oe*2)/Se():P.direction.includes("b")?Pt.value.y-=Oe/Se():(Pt.value.y+=ee/2/Se(),Pt.value.y-=(V.offsetHeight+Oe)/2/Se()),be.value&&i.nextTick(()=>{Lt=d(V,J),dn=u(V,J);const Wt=Lt+V.offsetWidth-et,Xn=dn+V.offsetHeight+Ve*2-Je;if(mi.value=Xn>0,Kt.value=V.offsetHeight-Je+Ve*2,Wt>0){const xt=te+V.offsetWidth-Te,tt=Lt;xt>tt?Pt.value.x-=tt:Pt.value.x-=xt}if(mi.value){const xt=Xn,tt=dn;xt>tt?Pt.value.y-=tt-Ve:Pt.value.y-=xt-Ve,gi.value=Je-Ve*2}else gi.value=0})}V==null||V.focus({preventScroll:!0}),F.isOpenedByKeyBoardFlag()&&ye(!0),Rt=!0})}),i.onBeforeUnmount(()=>{wt&&(wt.getSubMenuInstance=()=>{})}),{submenuRoot:ae,menu:xe,scroll:we,options:j,zIndex:me,constOptions:c,scrollValue:ut,upScrollButton:Ue,overflow:mi,position:Pt,scrollHeight:Kt,maxHeight:gi,...Ot,globalHasSlot:re,globalRenderSlot:he,onScroll:Rn,onSubMenuBodyClick:Pe,onMouseWhell:Wn,onMouseWhellMx:ti,solveNumberOrStringSize:h}}}),_e={key:0,class:"mx-context-menu-updown placeholder"},Ae={key:1,class:"mx-context-menu-updown placeholder"},Be={class:"mx-context-menu-scroll",ref:"scroll"};function ze(P,F,j,re,he,me){const oe=i.resolveComponent("ContextMenuSeparator"),ve=i.resolveComponent("ContextSubMenu",!0),Se=i.resolveComponent("ContextMenuItem"),be=i.resolveComponent("ContextMenuIconRight");return i.openBlock(),i.createElementBlock("div",{ref:"submenuRoot",class:i.normalizeClass(["mx-context-menu",P.options.customClass?P.options.customClass:"",P.options.theme??""]),style:i.normalizeStyle({maxWidth:P.maxWidth?P.solveNumberOrStringSize(P.maxWidth):`${P.constOptions.defaultMaxWidth}px`,minWidth:P.minWidth?P.solveNumberOrStringSize(P.minWidth):`${P.constOptions.defaultMinWidth}px`,maxHeight:P.overflow&&P.maxHeight>0?`${P.maxHeight}px`:void 0,zIndex:P.zIndex,left:`${P.position.x}px`,top:`${P.position.y}px`}),"data-type":"ContextSubMenu",onClick:F[4]||(F[4]=(...ae)=>P.onSubMenuBodyClick&&P.onSubMenuBodyClick(...ae)),onWheel:F[5]||(F[5]=(...ae)=>P.onMouseWhell&&P.onMouseWhell(...ae))},[i.createElementVNode("div",{class:i.normalizeClass(["mx-context-menu-items"]),ref:"menu",style:i.normalizeStyle({top:`${P.scrollValue}px`})},[i.renderSlot(P.$slots,"default",{},()=>[P.overflow&&P.options.updownButtonSpaceholder?(i.openBlock(),i.createElementBlock("div",_e)):i.createCommentVNode("",!0),(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(P.items,(ae,xe)=>(i.openBlock(),i.createElementBlock(i.Fragment,{key:xe},[ae.hidden!==!0&&ae.divided==="up"?(i.openBlock(),i.createBlock(oe,{key:0})):i.createCommentVNode("",!0),ae.hidden!==!0&&ae.divided==="self"?(i.openBlock(),i.createBlock(oe,{key:1})):(i.openBlock(),i.createBlock(Se,{key:2,clickHandler:ae.onClick?we=>ae.onClick(we):void 0,disabled:ae.disabled,hidden:ae.hidden,icon:ae.icon,iconFontClass:ae.iconFontClass,svgIcon:ae.svgIcon,svgProps:ae.svgProps,label:ae.label,customRender:ae.customRender,customClass:ae.customClass,checked:ae.checked,shortcut:ae.shortcut,clickClose:ae.clickClose,clickableWhenHasChildren:ae.clickableWhenHasChildren,preserveIconWidth:ae.preserveIconWidth!==void 0?ae.preserveIconWidth:P.options.preserveIconWidth,showRightArrow:ae.children&&ae.children.length>0,hasChildren:ae.children&&ae.children.length>0,rawMenuItem:ae,onSubMenuOpen:we=>{var Ue;return(Ue=ae.onSubMenuOpen)==null?void 0:Ue.call(ae,we)},onSubMenuClose:we=>{var Ue;return(Ue=ae.onSubMenuClose)==null?void 0:Ue.call(ae,we)}},i.createSlots({_:2},[ae.children&&ae.children.length>0?{name:"submenu",fn:i.withCtx(()=>[i.createVNode(ve,{items:ae.children,maxWidth:ae.maxWidth,minWidth:ae.minWidth,adjustPosition:ae.adjustSubMenuPosition!==void 0?ae.adjustSubMenuPosition:P.options.adjustPosition,direction:ae.direction!==void 0?ae.direction:P.options.direction},null,8,["items","maxWidth","minWidth","adjustPosition","direction"])]),key:"0"}:void 0]),1032,["clickHandler","disabled","hidden","icon","iconFontClass","svgIcon","svgProps","label","customRender","customClass","checked","shortcut","clickClose","clickableWhenHasChildren","preserveIconWidth","showRightArrow","hasChildren","rawMenuItem","onSubMenuOpen","onSubMenuClose"])),ae.hidden!==!0&&(ae.divided==="down"||ae.divided===!0)?(i.openBlock(),i.createBlock(oe,{key:3})):i.createCommentVNode("",!0)],64))),128)),P.overflow&&P.options.updownButtonSpaceholder?(i.openBlock(),i.createElementBlock("div",Ae)):i.createCommentVNode("",!0)])],4),i.createElementVNode("div",Be,[i.withDirectives(i.createElementVNode("div",{ref:"upScrollButton",class:i.normalizeClass("mx-context-menu-updown mx-context-no-clickable up"+(P.overflow&&P.scrollValue<0?"":" disabled")),onClick:F[0]||(F[0]=ae=>P.onScroll(!1)),onWheel:F[1]||(F[1]=(...ae)=>P.onMouseWhellMx&&P.onMouseWhellMx(...ae))},[i.createVNode(be)],34),[[i.vShow,P.overflow]]),i.withDirectives(i.createElementVNode("div",{class:i.normalizeClass("mx-context-menu-updown mx-context-no-clickable down"+(P.overflow&&P.scrollValue>-P.scrollHeight?"":" disabled")),onClick:F[2]||(F[2]=ae=>P.onScroll(!0)),onWheel:F[3]||(F[3]=(...ae)=>P.onMouseWhellMx&&P.onMouseWhellMx(...ae))},[i.createVNode(be)],34),[[i.vShow,P.overflow]])],512)],38)}const Ie=g(le,[["render",ze]]),st={class:"mx-menu-ghost-host"},$e=i.defineComponent({__name:"ContextSubMenuWrapper",props:{options:{type:Object,default:null},show:{type:Object,default:null},container:{type:Object,default:null},isFullScreenContainer:{type:Boolean,default:!0}},emits:["close","closeAnimFinished"],setup(P,{expose:F,emit:j}){const re=P,he=j,me=i.useSlots(),oe=i.ref(),{options:ve,show:Se,container:be}=i.toRefs(re);i.onMounted(()=>{Se.value&&we()}),i.onBeforeUnmount(()=>{ke()}),i.watch(Se,Pe=>{Pe?we():(a(ae),ke())});const ae={closeMenu:Ue,isClosed:nt,getMenuRef:()=>oe.value,getMenuDimensions:()=>{var Pe;return((Pe=oe.value)==null?void 0:Pe.getMenuDimensions())??{width:0,height:0}}};let xe=!1;function we(){Xe(),o(ae)}function Ue(Pe){xe=!0,he("close",Pe),ve.value.menuTransitionProps||he("closeAnimFinished"),a(ae)}function nt(){return xe}function Xe(){setTimeout(()=>{document.addEventListener("click",ye,!0),document.addEventListener("contextmenu",ye,!0),document.addEventListener("scroll",fe,!0),!re.isFullScreenContainer&&be.value&&be.value.addEventListener("scroll",fe,!0),ve.value.keyboardControl!==!1&&document.addEventListener("keydown",ue)},50)}function ke(){document.removeEventListener("contextmenu",ye,!0),document.removeEventListener("click",ye,!0),document.removeEventListener("scroll",fe,!0),!re.isFullScreenContainer&&be.value&&be.value.removeEventListener("scroll",fe,!0),ve.value.keyboardControl!==!1&&document.removeEventListener("keydown",ue)}const R=i.ref();i.provide("globalSetCurrentSubMenu",Pe=>R.value=Pe);function ue(Pe){var He,at,Rt,lt,Ot,wt,ut,Kt,Rn,ti,Wn,mi,Pt;let gi=!0;switch(Pe.key){case"Escape":{((He=R.value)==null?void 0:He.isTopLevel())===!1?(at=R.value)==null||at.closeCurrentSubMenu():Ue();break}case"ArrowDown":(Rt=R.value)==null||Rt.moveCurrentItemDown();break;case"ArrowUp":(lt=R.value)==null||lt.moveCurrentItemUp();break;case"Home":(Ot=R.value)==null||Ot.moveCurrentItemFirst();break;case"End":(wt=R.value)==null||wt.moveCurrentItemLast();break;case"ArrowLeft":{(ut=R.value)!=null&&ut.closeSelfAndActiveParent()||(Rn=(Kt=ve.value).onKeyFocusMoveLeft)==null||Rn.call(Kt);break}case"ArrowRight":(ti=R.value)!=null&&ti.openCurrentItemSubMenu()||(mi=(Wn=ve.value).onKeyFocusMoveRight)==null||mi.call(Wn);break;case"Enter":(Pt=R.value)==null||Pt.triggerCurrentItemClick(Pe);break;default:gi=!1;break}gi&&R.value&&(Pe.stopPropagation(),Pe.preventDefault())}function fe(){ve.value.closeWhenScroll!==!1&&Ue()}function ye(Pe){Re(Pe.target,Pe)}function Re(Pe,He){for(var at,Rt;Pe;){if(Pe.classList&&Pe.classList.contains("mx-menu-host"))return;Pe=Pe.parentNode}ve.value.clickCloseOnOutside!==!1?(ke(),Ue()):(Rt=(at=ve.value).onClickOnOutside)==null||Rt.call(at,He)}return i.provide("globalOptions",ve),i.provide("globalCloseMenu",Ue),i.provide("globalIsFullScreenContainer",re.isFullScreenContainer),i.provide("globalHasSlot",Pe=>me[Pe]!==void 0),i.provide("globalRenderSlot",(Pe,He)=>i.renderSlot(me,Pe,{...He},()=>[i.h("span","Render slot failed")],!1)),i.provide("menuContext",{zIndex:ve.value.zIndex||c.defaultZindex,container:be.value,adjustPadding:{x:0,y:0},getParentAbsY:()=>ve.value.x,getParentAbsX:()=>ve.value.y,getZoom:()=>ve.value.zoom||c.defaultZoom,getParentX:()=>0,getParentY:()=>0,getParentWidth:()=>0,getParentHeight:()=>0,getPositon:()=>[ve.value.x,ve.value.y],closeOtherSubMenuWithTimeOut:()=>{},checkCloseOtherSubMenuTimeOut:()=>!1,addOpenedSubMenu:()=>{},closeOtherSubMenu:()=>{},getParentContext:()=>null,getSubMenuInstanceContext:()=>null,getElement:()=>null,addChildMenuItem:()=>{},removeChildMenuItem:()=>{},markActiveMenuItem:()=>{},markThisOpenedByKeyBoard:()=>{},isOpenedByKeyBoardFlag:()=>!1,isMenuItemDataCollectedFlag:()=>!1}),F(ae),(Pe,He)=>(i.openBlock(),i.createElementBlock("div",st,[i.unref(ve).menuTransitionProps?(i.openBlock(),i.createBlock(i.Transition,i.mergeProps({key:0,appear:""},i.unref(ve).menuTransitionProps,{onAfterLeave:He[0]||(He[0]=at=>he("closeAnimFinished"))}),{default:i.withCtx(()=>[i.unref(Se)?(i.openBlock(),i.createBlock(Ie,{key:0,ref_key:"submenuInstance",ref:oe,class:"mx-menu-host",items:i.unref(ve).items,adjustPosition:i.unref(ve).adjustPosition,maxWidth:i.unref(ve).maxWidth||i.unref(c).defaultMaxWidth,minWidth:i.unref(ve).minWidth||i.unref(c).defaultMinWidth,direction:i.unref(ve).direction||i.unref(c).defaultDirection},{default:i.withCtx(()=>[i.renderSlot(Pe.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):i.createCommentVNode("",!0)]),_:3},16)):i.unref(Se)?(i.openBlock(),i.createBlock(Ie,{key:1,ref_key:"submenuInstance",ref:oe,class:"mx-menu-host",items:i.unref(ve).items,adjustPosition:i.unref(ve).adjustPosition,maxWidth:i.unref(ve).maxWidth||i.unref(c).defaultMaxWidth,minWidth:i.unref(ve).minWidth||i.unref(c).defaultMinWidth,direction:i.unref(ve).direction||i.unref(c).defaultDirection},{default:i.withCtx(()=>[i.renderSlot(Pe.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):i.createCommentVNode("",!0)]))}}),q=i.defineComponent({name:"ContextMenu",emits:["update:show","close"],props:{options:{type:Object,default:null},show:{type:Boolean,default:!1}},setup(P,F){const{options:j,show:re}=i.toRefs(P),he=i.ref(null);return F.expose({closeMenu:()=>F.emit("update:show",!1),isClosed:()=>!re.value,getMenuRef:()=>{var me;return(me=he.value)==null?void 0:me.getMenuRef()},getMenuDimensions:()=>{var me;return((me=he.value)==null?void 0:me.getMenuDimensions())??{width:0,height:0}}}),()=>{const{isNew:me,container:oe,eleId:ve}=m(j.value);return[i.h(i.Teleport,{to:`#${ve}`},[i.h($e,{ref:he,options:j,show:re,container:oe,isFullScreenContainer:!me,onClose:Se=>{var be,ae;F.emit("update:show",!1),F.emit("close"),(ae=(be=j.value).onClose)==null||ae.call(be,Se)}},F.slots)])]}}}),I=i.defineComponent({name:"ContextMenuGroup",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},clickHandler:{type:Function,default:null},label:{type:String,default:""},icon:{type:String,default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},adjustSubMenuPosition:{type:Boolean,default:void 0},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0}},setup(P,F){const j=i.inject("globalOptions"),{adjustSubMenuPosition:re,maxWidth:he,minWidth:me}=i.toRefs(P),oe=typeof re.value<"u"?re.value:j.value.adjustPosition,ve=i.ref(),Se=i.ref();return F.expose({getSubMenuRef:()=>ve.value,getMenuItemRef:()=>Se.value}),()=>i.h(se,{...P,ref:Se,showRightArrow:!0,maxWidth:void 0,minWidth:void 0,adjustSubMenuPosition:void 0,hasChildren:typeof F.slots.default!==void 0},F.slots.default?{submenu:()=>i.h(Ie,{ref:ve,maxWidth:he.value,minWidth:me.value,adjustPosition:oe},{default:F.slots.default})}:void 0)}});function D(P,F,j,re){const he=i.ref(!0),me=i.h($e,{options:P,show:he,container:F,isFullScreenContainer:!j,onCloseAnimFinished:()=>{i.render(null,F)},onClose:oe=>{var ve;(ve=P.onClose)==null||ve.call(P,oe),he.value=!1}},re);return i.render(me,F),me.component}function W(P,F){const j=m(P);return D(P,j.container,j.isNew,F).exposed}const K={install(P){P.config.globalProperties.$contextmenu=W,P.component("ContextMenu",q),P.component("ContextMenuItem",se),P.component("ContextMenuGroup",I),P.component("ContextMenuSperator",Ge),P.component("ContextMenuSeparator",Ge),P.component("ContextSubMenu",Ie)},showContextMenu(P,F){return W(P,F)},isAnyContextMenuOpen(){return s()},closeContextMenu:l,transformMenuPosition:f},ce={},ie={class:"mx-menu-bar-icon-menu",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},S=[i.createElementVNode("path",{d:"M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"},null,-1),i.createElementVNode("path",{d:"M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"},null,-1),i.createElementVNode("path",{d:"M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"},null,-1)];function b(P,F){return i.openBlock(),i.createElementBlock("svg",ie,S)}const U=g(ce,[["render",b]]),z=["onClick","onMouseenter"],Z=i.defineComponent({__name:"MenuBar",props:{options:{type:Object,default:null}},setup(P){const F=P,j=i.ref(),re=i.ref(!1),he=i.ref([]),me=i.ref(null);function oe(){re.value=!0}function ve(){re.value=!1}i.onMounted(()=>{he.value=F.options.items||[]}),i.watch(()=>F.options,()=>{he.value=F.options.items||[]});let Se=null,be=-1;function ae(){be<he.value.length-1?be++:be=0,Ue(be,he.value[be])}function xe(){be>0?be--:be=he.value.length-1,Ue(be,he.value[be])}function we(R){const ue=F.options.barPopDirection??"bl";let fe=0,ye=0;return ue.startsWith("b")?ye=u(R)+R.offsetHeight:ue.startsWith("t")?ye=u(R):ye=u(R)+R.offsetHeight/2,ue.endsWith("l")?fe=d(R):ue.startsWith("r")?fe=d(R)+R.offsetWidth:fe=d(R)+R.offsetWidth/2,{x:fe,y:ye}}function Ue(R,ue){var fe;if(be=R,!ue.children)return;Se&&(Se.closeMenu(),Se=null,re.value=!0),me.value=ue;const ye=(fe=j.value)==null?void 0:fe.children[R];if(ye){const{x:Re,y:Pe}=we(ye);Se=K.showContextMenu({...F.options,items:ue.children,x:Re,y:Pe,onKeyFocusMoveLeft(){xe()},onKeyFocusMoveRight(){ae()},onClose(){me.value==ue&&(re.value=!1,me.value=null)}})}}function nt(){be=0;const R=j.value;if(R){const{x:ue,y:fe}=we(R);Se=K.showContextMenu({...F.options,x:ue,y:fe})}}function Xe(R,ue){ue?(re.value=!0,Ue(R,ue),ue.onClick&&(ue.clickableWhenHasChildren===!0&&ue.children&&ue.children.length>0||!ue.children||ue.children.length===0)&&ue.onClick()):nt()}function ke(R,ue){re.value&&Ue(R,ue)}return(R,ue)=>(i.openBlock(),i.createElementBlock("div",{class:i.normalizeClass(["mx-menu-bar",P.options.theme??"",P.options.mini?"mini":""]),onFocus:oe,onBlur:ve},[i.renderSlot(R.$slots,"prefix"),P.options.mini?(i.openBlock(),i.createElementBlock("div",{key:0,ref_key:"menuBarContent",ref:j,class:"mx-menu-bar-content"},[i.createElementVNode("div",{class:"mx-menu-bar-item",onClick:ue[0]||(ue[0]=fe=>Xe(0,null))},[i.createVNode(U)])],512)):(i.openBlock(),i.createElementBlock("div",{key:1,ref_key:"menuBarContent",ref:j,class:"mx-menu-bar-content"},[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(he.value,(fe,ye)=>(i.openBlock(),i.createElementBlock("div",{key:ye,class:i.normalizeClass(["mx-menu-bar-item",fe==me.value?"active":""]),onClick:Re=>Xe(ye,fe),onMouseenter:Re=>ke(ye,fe)},i.toDisplayString(fe.label),43,z))),128))],512)),i.renderSlot(R.$slots,"suffix")],34))}});t.ContextMenu=q,t.ContextMenuGroup=I,t.ContextMenuItem=se,t.ContextMenuSeparator=Ge,t.MenuBar=Z,t.default=K,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(vd,vd.exports);var _R=vd.exports;const vR=pR(_R);class xR extends us{constructor(t,i){super();ne(this,"m_ids");ne(this,"m_type");this.m_ids=t,this.m_type=i}execute(){new yR(this.m_ids,!1,this.m_type).execute()}}class yR extends us{constructor(t,i,r){super();ne(this,"m_entities");ne(this,"m_visible");ne(this,"m_type");this.m_entities=t,this.m_visible=i,this.m_type=r}execute(){this.m_type===jt.GEOMETRY_VOLUME?this.m_entities.forEach(t=>{Qe.database.findPart(t).attribute.visible=this.m_visible;const i=new _d(this.m_visible?Vn.SHOW_PART:Vn.HIDE_PART,t);ht.emit("updateGeoThreeScene",i)}):this.m_type===jt.GEOMETRY_SURFACE&&this.m_entities.forEach(t=>{const{partId:i,entityId:r}=E_(t),s=new _d(this.m_visible?Vn.PART_SHOW_FACE:Vn.PART_HIDDEN_FACE,i,r);ht.emit("updateGeoThreeScene",s)})}}class bR extends us{constructor(){super()}execute(){const e=new _d(Vn.SHOW_ALL,void 0);ht.emit("updateGeoThreeScene",e)}}const MR={class:""},SR=Ze({__name:"Canvas3D",setup(n){const e=vt(null),t=vt(null);return qi(()=>{Qe.viewport=new fR(e.value,t.value),ht.bind("popCanvasContextmenu",i=>{vR.showContextMenu({x:i.x,y:i.y,items:[{label:"Hidden",onClick:()=>{new xR(kt.selected,kt.type).execute(),new hd().execute()}},{label:"Show All",onClick:()=>{new bR().execute(),new hd().execute()}},{label:"View",children:[{label:"Axonometric",onClick:()=>{Qe.viewport.home()}},{label:"Front",onClick:()=>{Qe.viewport.lookFrom(Le(0,-1,0),Le(0,0,1))}},{label:"Right",onClick:()=>{Qe.viewport.lookFrom(Le(1,0,0),Le(0,0,1))}},{label:"Back",onClick:()=>{Qe.viewport.lookFrom(Le(0,1,0),Le(0,0,1))}},{label:"Bottom",onClick:()=>{Qe.viewport.lookFrom(Le(0,0,-1),Le(0,-1,0))}},{label:"Left",onClick:()=>{Qe.viewport.lookFrom(Le(-1,0,0),Le(0,0,1))}}]}]})})}),(i,r)=>(Fe(),yt("div",MR,[mt("canvas",{ref_key:"canvas3d",ref:e,class:"bg-gradient-to-b from-bgtop to-bgbottom w-full h-full absolute -z-10"},null,512),mt("canvas",{ref_key:"canvas2d",ref:t,class:"w-full h-full absolute -z-0",onContextmenu:r[0]||(r[0]=qo(()=>{},["prevent"]))},null,544)]))}}),ER={class:"w-screen h-screen relative"},wR={class:"flex justify-center relative"},TR=Ze({__name:"App",setup(n){return(e,t)=>(Fe(),yt("div",ER,[mt("div",wR,[Ce(QM)]),Ce(SR),Ce(FC)]))}});occtimportjs().then(async function(n){window.occt=n,console.log("occt inited!..")});const AR=El(TR);AR.mount("#app");
