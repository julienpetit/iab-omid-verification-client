;(function(omidGlobal) {
  'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b='undefined'!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ba='function'==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca;
  if('function'==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={U:!0},ha={};try{ha.__proto__=ea;da=ha.U;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+' is not extensible');return a}:null}var ia=ca;
  function r(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if('prototype'!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.oa=b.prototype}var t='undefined'!=typeof window&&window===this?this:'undefined'!=typeof global&&null!=global?global:this;function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
  var ja='function'==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a},v='function'==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
  function w(a,b){if(b){var c=t;a=a.split('.');for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}w('Object.assign',function(a){return a||ja});function ka(){ka=function(){};t.Symbol||(t.Symbol=ma)}function na(a,b){this.a=a;v(this,'description',{configurable:!0,writable:!0,value:b})}na.prototype.toString=function(){return this.a};
  var ma=function(){function a(c){if(this instanceof a)throw new TypeError('Symbol is not a constructor');return new na('jscomp_symbol_'+(c||'')+'_'+b++,c)}var b=0;return a}();function x(){ka();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol('Symbol.iterator'));'function'!=typeof Array.prototype[a]&&v(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(aa(this))}});x=function(){}}function oa(a){x();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}
  w('WeakMap',function(a){function b(f){this.a=(l+=Math.random()+1).toString();if(f){f=p(f);for(var k;!(k=f.next()).done;)k=k.value,this.set(k[0],k[1])}}function c(){}function d(f){if(!u(f,g)){var k=new c;v(f,g,{value:k})}}function e(f){var k=Object[f];k&&(Object[f]=function(h){if(h instanceof c)return h;d(h);return k(h)})}if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),k=Object.seal({}),h=new a([[f,2],[k,3]]);if(2!=h.get(f)||3!=h.get(k))return!1;h.delete(f);h.set(k,4);return!h.has(f)&&
    4==h.get(k)}catch(m){return!1}}())return a;var g='$jscomp_hidden_'+Math.random();e('freeze');e('preventExtensions');e('seal');var l=0;b.prototype.set=function(f,k){d(f);if(!u(f,g))throw Error('WeakMap key fail: '+f);f[g][this.a]=k;return this};b.prototype.get=function(f){return u(f,g)?f[g][this.a]:void 0};b.prototype.has=function(f){return u(f,g)&&u(f[g],this.a)};b.prototype.delete=function(f){return u(f,g)&&u(f[g],this.a)?delete f[g][this.a]:!1};return b});
  w('Map',function(a){function b(){var f={};return f.D=f.next=f.head=f}function c(f,k){var h=f.a;return oa(function(){if(h){for(;h.head!=f.a;)h=h.D;for(;h.next!=h.head;)return h=h.next,{done:!1,value:k(h)};h=null}return{done:!0,value:void 0}})}function d(f,k){var h=k&&typeof k;'object'==h||'function'==h?g.has(k)?h=g.get(k):(h=''+ ++l,g.set(k,h)):h='p_'+k;var m=f.b[h];if(m&&u(f.b,h))for(f=0;f<m.length;f++){var y=m[f];if(k!==k&&y.key!==y.key||k===y.key)return{id:h,list:m,index:f,m:y}}return{id:h,list:m,
    index:-1,m:void 0}}function e(f){this.b={};this.a=b();this.size=0;if(f){f=p(f);for(var k;!(k=f.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),k=new a(p([[f,'s']]));if('s'!=k.get(f)||1!=k.size||k.get({x:4})||k.set({x:4},'t')!=k||2!=k.size)return!1;var h=k.entries(),m=h.next();if(m.done||m.value[0]!=f||'s'!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
  't'!=m.value[1]||!h.next().done?!1:!0}catch(y){return!1}}())return a;x();var g=new WeakMap;e.prototype.set=function(f,k){f=0===f?0:f;var h=d(this,f);h.list||(h.list=this.b[h.id]=[]);h.m?h.m.value=k:(h.m={next:this.a,D:this.a.D,head:this.a,key:f,value:k},h.list.push(h.m),this.a.D.next=h.m,this.a.D=h.m,this.size++);return this};e.prototype.delete=function(f){f=d(this,f);return f.m&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.b[f.id],f.m.D.next=f.m.next,f.m.next.D=f.m.D,f.m.head=null,
    this.size--,!0):!1};e.prototype.clear=function(){this.b={};this.a=this.a.D=b();this.size=0};e.prototype.has=function(f){return!!d(this,f).m};e.prototype.get=function(f){return(f=d(this,f).m)&&f.value};e.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};e.prototype.keys=function(){return c(this,function(f){return f.key})};e.prototype.values=function(){return c(this,function(f){return f.value})};e.prototype.forEach=function(f,k){for(var h=this.entries(),m;!(m=h.next()).done;)m=
    m.value,f.call(k,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var l=0;return e});w('Object.values',function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push(b[d]);return c}});
  w('Set',function(a){function b(c){this.a=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),g=e.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return!1;g=e.next();return g.done||g.value[0]==c||4!=g.value[0].x||
  g.value[1]!=g.value[0]?!1:e.next().done}catch(l){return!1}}())return a;x();b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;
    b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.a.forEach(function(g){return c.call(d,g,g,e)})};return b});w('Object.is',function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});w('Array.prototype.includes',function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
  var z={fa:'loaded',la:'start',ba:'firstQuartile',ga:'midpoint',ma:'thirdQuartile',$:'complete',ha:'pause',ja:'resume',Z:'bufferStart',Y:'bufferFinish',ka:'skipped',na:'volumeChange',ia:'playerStateChange',X:'adUserInteraction'},pa={ca:'full',ea:'limited'};function B(a,b){this.x=null!=a.x?a.x:a.left;this.y=null!=a.y?a.y:a.top;this.width=a.width;this.height=a.height;this.B=this.x+this.width;this.C=this.y+this.height;this.u=a.u||void 0;this.R=a.R||[];this.b=a.friendlyObstructionClass||void 0;this.c=a.friendlyObstructionPurpose||void 0;this.f=a.friendlyObstructionReason||void 0;this.K=void 0!==a.K?!0===a.K:!0;this.v=a.v||void 0;this.J=a.J||[];this.L=a.L||!1;this.a=b}function qa(a){var b={};return b.width=a.width,b.height=a.height,b}
  function C(a){var b={};return Object.assign({},qa(a),(b.x=a.x,b.y=a.y,b))}function D(a){var b=C(a),c={};return Object.assign({},b,(c.endX=a.B,c.endY=a.C,c))}B.prototype.O=function(a){if(null==a)return!1;a=C(a);var b=a.y,c=a.width,d=a.height;return this.x===a.x&&this.y===b&&this.width===c&&this.height===d};function ra(a){return a.width*a.height};function sa(a,b){a=C(a);for(var c=[],d=[],e=0;e<b.length;e++){var g=C(b[e]);g=ta(a,g);F(c,g.x);F(c,g.B);F(d,g.y);F(d,g.C)}c=c.sort(function(l,f){return l-f});d=d.sort(function(l,f){return l-f});return{V:c,W:d}}function ta(a,b){return{x:Math.max(a.x,b.x),y:Math.max(a.y,b.y),B:Math.min(a.x+a.width,b.x+b.width),C:Math.min(a.y+a.height,b.y+b.height)}}function F(a,b){-1===a.indexOf(b)&&a.push(b)};function ua(){this.b=this.a=this.c=this.i=void 0;this.l=0;this.g=[];this.o=[];this.s=0;this.h=[];this.f=[];this.j=[]}ua.prototype.O=function(a){return null==a?!1:JSON.stringify(G(this))===JSON.stringify(G(a))};
  function G(a){var b=[],c=[],d={viewport:a.i,adView:{percentageInView:a.l,reasons:a.j},declaredFriendlyObstructions:a.g.length};if(void 0!==a.a){d.adView.geometry=C(a.a);d.adView.geometry.pixels=ra(a.a);d.adView.onScreenGeometry=C(a.b);d.adView.onScreenGeometry.pixels=a.s;for(var e=0;e<a.f.length;e++)b.push(C(a.f[e]));for(e=0;e<a.o.length;e++){var g=a.o[e],l=g,f={};l.b&&(f.obstructionClass=l.b);l.c&&(f.obstructionPurpose=l.c);l.f&&(f.obstructionReason=l.f);g=ta(a.a,g);c.push(Object.assign({},{x:g.x,
    y:g.y,width:g.B-g.x,height:g.C-g.y},f))}d.adView.onScreenGeometry.obstructions=b;d.adView.onScreenGeometry.friendlyObstructions=c}return d}function va(a,b){b=qa(b);a.i={};a.i.width=b.width;a.i.height=b.height;a.c={};a.c.x=0;a.c.y=0;a.c.width=b.width;a.c.height=b.height;a.c.endX=b.width;a.c.endY=b.height}function wa(){return{x:0,y:0,endX:0,endY:0,width:0,height:0}}
  function xa(a,b){var c={};c.x=Math.max(a.x,b.x);c.y=Math.max(a.y,b.y);c.endX=Math.min(a.endX,b.endX);c.endY=Math.min(a.endY,b.endY);c.width=Math.max(0,c.endX-c.x);c.height=Math.max(0,c.endY-c.y);return c}function ya(a,b){return a.width<b.width||a.height<b.height}
  function za(a){var b=ra(a.a);if(0!==b){var c=ra(a.b);var d=a.f,e=0;if(0<d.length){var g=sa(a.b,d),l=g.V;g=g.W;for(var f=0;f<l.length-1;f++)for(var k=(l[f]+(l[f]+1))/2,h=l[f+1]-l[f],m=0;m<g.length-1;m++){for(var y=(g[m]+(g[m]+1))/2,la=g[m+1]-g[m],M=!1,N=0;N<d.length;N++){var E=C(d[N]);if(E.x<k&&E.x+E.width>k&&E.y<y&&E.y+E.height>y){M=!0;break}}M&&(e+=Math.round(h)*Math.round(la))}}c-=e;b=Math.round(c/b*100);a.l=Math.max(b,0);a.s=Math.max(c,0)}}
  function Aa(a,b){if(0!==b.width&&0!==b.height&&a.b){a=D(a.b);var c=a.y,d=a.endX,e=a.endY;b=!(b.B<=a.x||b.x>=d||b.C<=c||b.y>=e)}else b=!1;return b}function H(a,b){for(var c=!1,d=0;d<a.j.length;d++)a.j[d]===b&&(c=!0);c||a.j.push(b)};function Ba(a,b,c,d){var e=b.L?!0:b.u===d;if(e){c.a=b;var g=D(c.a);a=xa(c.c,g);var l=c.a;'notAttached'===l.v||'noWindowFocus'===l.v||'noAdView'===l.v?(H(c,'notFound'),c.b=new B(wa(),!1)):(l=c.a,'viewInvisible'===l.v||'viewGone'===l.v||'viewNotVisible'===l.v||'viewAlphaZero'===l.v||'viewHidden'===l.v||void 0!==c.a.v?(H(c,'hidden'),c.b=new B(wa(),!1)):(ya(a,g)&&H(c,'clipped'),c.b=new B(a,!1)))}else if(g=!0,b.a&&(g=-1!==b.R.indexOf(d)?!1:!1===b.K),g){l=b.J;for(var f=0;f<l.length;f++)g=void 0!==c.a,Ba(a,
    new B(l[f],g),c,d)}e||void 0===c.a||(b.a?-1!==b.R.indexOf(d)?c.g.push(b):c.h.push(b):(e=D(b),d=D(c.b),C(c.b),a=c.b,0!==a.width&&0!==a.height&&b.K&&(b=xa(d,e),ya(b,d)&&(H(c,'clipped'),c.b=new B(b,!1)))))};function Ca(a,b){this.y=this.x=0;this.width=a;this.height=b};function Da(){return{apiVersion:'1.0',accessMode:'limited',environment:'web',omidJsInfo:{omidImplementer:'omsdk',serviceVersion:'1.3.12-dev'},adSessionType:'html',supports:['clid','vlid']}}function Ea(){this.u=null;this.c=Da();this.o=null;this.w='foregrounded';this.j=this.i='none';this.h=this.g=this.f=this.l=this.a=this.b=this.H=this.N=null;this.G=!0;this.F=new Map}var I;function J(){I||(I=new Ea);return I};var Fa=eval('this'),K=function(){if('undefined'!==typeof omidGlobal&&omidGlobal)return omidGlobal;if('undefined'!==typeof global&&global)return global;if('undefined'!==typeof window&&window)return window;if('undefined'!==typeof Fa&&Fa)return Fa;throw Error('Could not determine global object context.');}();function Ga(a){if(a===K)return!1;try{if('undefined'===typeof a.location.hostname)return!0}catch(b){return!0}return!1}function Ha(){var a=omidGlobal;if(null==a||'undefined'===typeof a.top||null==a.top)return null;try{var b=a.top;return Ga(b)?null:b.location.href}catch(c){return null}};function Ia(a,b){this.a=a;this.b=b}t.Object.defineProperties(Ia.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.a}},origin:{configurable:!0,enumerable:!0,get:function(){return this.b}}});function L(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ja(function(){throw new (Function.prototype.bind.apply(Error,[null,'Could not complete the test successfully - '].concat(q(b))));},function(){return console.error.apply(console,q(b))})}function Ka(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ja(function(){},function(){return console.error.apply(console,q(b))})}
  function Ja(a,b){'undefined'!==typeof jasmine&&jasmine?a():'undefined'!==typeof console&&console&&console.error&&b()};function La(){this.f=[];this.b=[];this.c=[];this.g=[];this.i={};this.a=J()}function Ma(a){a.f=[];a.b=[];a.c=[];a.g=[];a.i={};I.u=null;I.c=Da();I.o=null;I.aa=void 0;I.da=void 0;I.P=null;I.M=null;I.s=null;I.w='foregrounded';I.i='none';I.j='none';I.N=null;I.H=null;I.b=null;I.a=null;I.l=null;I.f=null;I.g=null;I.h=null;I.G=!0;I.F=new Map}function Na(a,b){void 0!==a.a&&a.a.u&&!1!==Oa(a,b)&&a.c.filter(function(c){return c.type===b.event.type}).forEach(function(c){return a.h(c.I,b.event)})}
  function O(a,b){a.f.push(b);Na(a,b)}function Pa(a,b,c){void 0!==a.a&&a.a.u&&a.f.filter(function(d){return d.event.type===b&&Oa(a,d)}).map(function(d){return d.event}).forEach(c)}function Oa(a,b){var c=b.event.type,d=-1!==Object.values(z).indexOf(c)&&'volumeChange'!==c;return'impression'===c||'loaded'===c&&a.a.a?b.origin===J().j:d?b.origin===J().i:!0}function Qa(a,b,c){'media'===b||'video'===b?Ra(a,c):(a.c.push({type:b,I:c}),Pa(a,b,c))}
  function Ra(a,b){Object.keys(z).forEach(function(c){c=z[c];a.c.push({type:c,I:b});Pa(a,c,b)})}function Sa(a,b,c,d){var e={T:c,S:d,I:b};a.g.push(e);a.b.forEach(function(g){var l=Ta(g);'sessionStart'===g.event.type&&Ua(a,l,e);a.h(b,l)})}function Va(a,b,c){var d=P(a,'sessionError','native',{errorType:b,message:c});a.b.push(d);a.g.forEach(function(e){a.h(e.I,d.event)})}
  function Wa(a,b){a.i=Object.assign(a.i,b);b=a.a.c;if(void 0!==b){b=Object.assign({},Q(a,Xa(a,{context:b}),!0),{supportsLoadedEvent:!!a.a.a||'video'==a.a.b});Object.assign(b,{pageUrl:Ha(),contentUrl:a.a.o});var c=P(a,'sessionStart','native',b);a.b.push(c);a.g.forEach(function(d){var e=d.I,g=Ta(c);Ua(a,g,d);a.h(e,g)},a);Ya(a)}}
  function Ua(a,b,c){c.T&&(b.data.verificationParameters=a.i[c.T]);c.S&&(a=a.a.F.get(c.S))&&(b.data.verificationParameters=a.verificationParameters,b.data.context.accessMode=a.accessMode)}function Za(a){var b=a.g,c=P(a,'sessionFinish','native');a.b.push(c);var d=a.a.c;d&&'native'==d.adSessionType||Ma(a);b.forEach(function(e){return a.h(e.I,c.event)})}La.prototype.h=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,q(c))}catch(e){Ka(e)}};
  function Ya(a){var b=a.a.i,c=a.f.filter(function(l){return Object.values(z).includes(l.event.type)&&l.origin===b}).map(function(l){return l.event}),d=a.a.u||'',e={};c=p(c);for(var g=c.next();!g.done;e={A:e.A},g=c.next()){e.A=g.value;e.A.adSessionId||(e.A.adSessionId=d);if('loaded'==e.A.type){if(!a.a.a&&'display'==a.a.b)continue;e.A.data=Q(a,Xa(a,e.A.data))}a.c.filter(function(l){return function(f){return f.type===l.A.type}}(e)).forEach(function(l){return function(f){return f.I(l.A)}}(e))}}
  function $a(a,b){a:{b=new Set(b);a=p(a.f.concat(a.b));for(var c=a.next();!c.done;c=a.next())if(c=c.value,b.has(c.event.type)&&'javascript'!=c.origin){b=!0;break a}b=!1}return b?(L('Event owner cannot be registered after its events have already been published.'),!1):!0}function ab(a){var b=a.a.j;return'none'!=b&&'javascript'!=b?(L('Impression event is owned by '+(a.a.j+', not javascript.')),!1):!0}
  function bb(a){var b=a.a.i;return'none'!=b&&'javascript'!=b?(L('Media events are owned by '+(a.a.i+', not javascript.')),!1):!0}function Q(a,b,c){c=void 0===c?!1:c;b=Object.assign({},b);a.a.b&&Object.assign(b,{mediaType:a.a.b});a.a.a&&(c||'definedByJavaScript'!==a.a.a)&&Object.assign(b,{creativeType:a.a.a});return b}function Xa(a,b){return a.a.l?Object.assign({},b,{impressionType:a.a.l}):b}function P(a,b,c,d){return new Ia({adSessionId:a.a.u||'',timestamp:(new Date).getTime(),type:b,data:d},c)}
  function Ta(a){a=a.event;return{adSessionId:a.adSessionId,timestamp:a.timestamp,type:a.type,data:a.data}};function cb(a,b){var c=a.a.M,d=a.a.s;if(c&&!c.O(d)||b)d=G(c),b&&(d.adView.reasons=d.adView.reasons||[b]),b=a.b,'audio'!=b.a.a&&O(b,P(b,'geometryChange','native',d)),a.a.s=c};function db(a){var b=a&&a.tagName&&'iframe'===a.tagName.toLowerCase();try{b=b&&a instanceof HTMLIFrameElement}catch(c){}return b}function eb(a){var b=a&&a.tagName;try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLElement}catch(c){}return b}function fb(a){var b=a&&a.tagName&&'video'===a.tagName.toLowerCase();try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLVideoElement}catch(c){}return b};function S(a,b,c){this.f=a;this.M=b;this.N=c;this.c=J();this.b=null;this.a=this.g=this.F=void 0;this.P=!0;this.o=void 0;gb(this)}function gb(a){if(!a.b){var b;a:{if((b=a.f.document)&&b.getElementsByClassName&&(b=b.getElementsByClassName('omid-element'))){if(1==b.length){b=b[0];break a}1<b.length&&a.P&&(Va(a.N,'generic',"More than one element with 'omid-element' class name."),a.P=!1)}b=null}if(fb(b))a.c.g=b;else if(eb(b))a.c.f=b;else return;hb(a)}}
  function hb(a){a.c.g?(a.b=a.c.g,a.i()):a.c.f&&(a.b=a.c.f,db(a.b)?a.c.h&&a.i():a.i())}function ib(a){a.a&&(db(a.b)?a.c.h&&(a.H(),jb(a)):(a.H(),jb(a)))}S.prototype.s=function(){this.o&&(this.f.document.removeEventListener('visibilitychange',this.o),this.o=void 0)};S.prototype.i=function(){var a=this;this.o||(this.o=function(){var b=a.f.document.hidden;a.c.w=b?'backgrounded':'foregrounded';cb(a.M,b?'backgrounded':void 0)},this.f.document.addEventListener('visibilitychange',this.o))};
  function jb(a){a.F&&(a.c.M=a.F,cb(a.M))}function kb(a){if(a.a&&a.c.h){var b=new B(a.c.h,!1),c=a.a.x;a=a.a.y;b.x+=c;b.y+=a;b.B+=c;b.C+=a;b.K=!0;return b}};function lb(a,b,c){return mb(a,'setInterval')(b,c)}function nb(a,b){mb(a,'clearInterval')(b)}function ob(a,b){mb(a,'clearTimeout')(b)}function mb(a,b){return a.a&&a.a[b]?a.a[b]:pb(a,b)}
  function qb(a,b,c,d){if(a.a.document&&a.a.document.body){var e=a.a.document.createElement('img');e.width=1;e.height=1;e.style.display='none';e.src=b;c&&e.addEventListener('load',function(){return c()});d&&e.addEventListener('error',function(){return d()});a.a.document.body.appendChild(e)}else pb(a,'sendUrl')(b,c,d)}function pb(a,b){if(a.a&&a.a.omidNative&&a.a.omidNative[b])return a.a.omidNative[b].bind(a.a.omidNative);throw Error('Native interface method "'+b+'" not found.');};function T(a,b,c,d,e){S.call(this,a,c,e);this.l=b;this.h=void 0;this.j=d}r(T,S);T.prototype.s=function(){void 0!==this.h&&(nb(this.j,this.h),this.h=void 0);S.prototype.s.call(this)};T.prototype.i=function(){var a=this;S.prototype.i.call(this);null==this.b?this.h=void 0:void 0===this.h&&(this.h=lb(this.j,function(){return rb(a)},200),rb(this))};
  T.prototype.H=function(){if(this.g){var a=kb(this);if(a){this.a.L=!1;a.L=!0;for(var b=!1,c=0;c<this.a.J.length;c++)if(this.a.J[c].L){this.a.J[c]=a;b=!0;break}b||this.a.J.push(a)}else this.a.L=!0;b=this.l;c=this.c.w;var d=this.c.u;a=new ua;var e=new B(this.g,!1);va(a,e);Ba(b,e,a,d);if('backgrounded'===c)H(a,'backgrounded');else if(void 0!==a.a){for(b=0;b<a.g.length;b++)Aa(a,a.g[b])&&a.o.push(a.g[b]);for(b=0;b<a.h.length;b++){if(c=Aa(a,a.h[b])){a:{c=a.h[b];for(d=0;d<a.f.length;d++)if(a.f[d].O(c)){c=
    !0;break a}c=!1}c=!c}c&&(H(a,'obstructed'),a.f.push(a.h[b]))}za(a)}else H(a,'notFound');this.F=a}};function rb(a){if(void 0!==a.h){b:{try{var b=a.f.top;var c=0<=b.innerHeight&&0<=b.innerWidth;break b}catch(d){}c=!1}c?(c=a.f.top,c=new B(new Ca(c.innerWidth,c.innerHeight),!1)):c=new B(new Ca(0,0),!1);b=a.b.getBoundingClientRect();if(null==b.x||isNaN(b.x))b.x=b.left;if(null==b.y||isNaN(b.y))b.y=b.top;b=new B(b,!1);c.O(a.g)&&b.O(a.a)||(a.a=b,a.a.K=!0,a.g=c,a.g.J.push(a.a),ib(a))}};function U(a,b,c,d){S.call(this,a,c,d);this.G=this.w=this.j=this.l=this.h=void 0}r(U,S);U.prototype.s=function(){this.h&&this.h.disconnect();sb(this);S.prototype.s.call(this)};U.prototype.i=function(){S.prototype.i.call(this);this.b&&(this.h||(this.h=tb(this)),ub(this),vb(this.b)&&wb(this))};
  U.prototype.H=function(){if(this.a&&this.G){var a=kb(this);if(a){var b=a;var c=this.G;var d=Math.max(a.x,c.x);var e=Math.max(a.y,c.y),g=Math.min(a.B,c.B);a=Math.min(a.C,c.C);g<=d||a<=e?d=null:(c={},d=new B((c.x=d,c.y=e,c.width=Math.abs(g-d),c.height=Math.abs(a-e),c),!1));d||(d=new B({x:0,y:0,width:0,height:0},!1))}else b=this.a,d=this.G;e=new ua;this.g&&va(e,this.g);e.a=b;e.b=d;za(e);this.F=e}};
  function sb(a){a.l&&(a.l.disconnect(),a.l=void 0);a.j&&(a.j.disconnect(),a.j=void 0);a.w&&((0,a.f.removeEventListener)('resize',a.w),a.w=void 0)}function ub(a){a.h&&a.b&&(a.h.unobserve(a.b),a.h.observe(a.b))}function vb(a){a=a.getBoundingClientRect();return 0==a.width||0==a.height}
  function tb(a){return new a.f.IntersectionObserver(function(b){try{if(b.length){for(var c,d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);c=d;a.g=xb(c.rootBounds);a.a=xb(c.boundingClientRect);a.G=xb(c.intersectionRect);ib(a)}}catch(g){a.s(),Va(a.N,'generic','Problem handling IntersectionObserver callback: '+g.message)}},{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}
  function wb(a){a.f.ResizeObserver?a.l||(a.l=yb(a,function(){return zb(a)}),a.l.observe(a.b)):(a.w||(a.w=function(){return zb(a)},(0,a.f.addEventListener)('resize',a.w)),a.j||(a.j=new MutationObserver(function(){return zb(a)}),a.j.observe(a.b,{childList:!1,attributes:!0,subtree:!1})))}function zb(a){a.b&&!vb(a.b)&&(ub(a),sb(a))}function yb(a,b){return new a.f.ResizeObserver(b)}function xb(a){if(a&&null!==a.x&&null!==a.y&&null!==a.width&&null!==a.height)return new B(a,!1)};function V(a,b,c,d){this.b=a;this.method=b;this.version=c;this.a=d}function Bb(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&'string'===typeof a.omid_message_guid&&'string'===typeof a.omid_message_method&&'string'===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)}function Cb(a){return new V(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)}
  function Db(a){var b={};b=(b.omid_message_guid=a.b,b.omid_message_method=a.method,b.omid_message_version=a.version,b);void 0!==a.a&&(b.omid_message_args=a.a);return b};function Eb(a){this.c=a};function W(a){this.c=a;this.handleExportedMessage=W.prototype.f.bind(this)}r(W,Eb);W.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.handleExportedMessage(Db(a),this)};W.prototype.f=function(a,b){Bb(a)&&this.a&&this.a(Cb(a),b)};function Fb(a){this.b=a}Fb.prototype.a=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.b('SessionService.'+a,this.c.bind(this,a,c),c)};Fb.prototype.c=function(a,b,c){switch(a){case 'registerSessionObserver':a=p(b).next().value,a(c)}};function X(a,b){return a.a.bind(a,b)}
  function Gb(a){var b=void 0===b?K:b;null==b.omidSessionInterface&&(a={setClientInfo:X(a,'setClientInfo'),registerSessionObserver:X(a,'registerSessionObserver'),startAdSession:X(a,'startSession'),finishAdSession:X(a,'finishSession'),reportError:X(a,'sessionError'),registerAdEvents:X(a,'registerAdEvents'),registerMediaEvents:X(a,'registerMediaEvents'),injectVerificationScriptResources:X(a,'injectVerificationScriptResources'),setSlotElement:X(a,'setSlotElement'),setVideoElement:X(a,'setVideoElement'),
    setElementBounds:X(a,'setElementBounds'),setCreativeType:X(a,'setCreativeType'),setImpressionType:X(a,'setImpressionType'),setContentUrl:X(a,'setContentUrl'),adEvents:{impressionOccurred:X(a,'impressionOccurred'),loaded:X(a,'loaded')},mediaEvents:{start:X(a,'start'),firstQuartile:X(a,'firstQuartile'),midpoint:X(a,'midpoint'),thirdQuartile:X(a,'thirdQuartile'),complete:X(a,'complete'),pause:X(a,'pause'),resume:X(a,'resume'),bufferStart:X(a,'bufferStart'),bufferFinish:X(a,'bufferFinish'),skipped:X(a,
        'skipped'),volumeChange:X(a,'volumeChange'),playerStateChange:X(a,'playerStateChange'),adUserInteraction:X(a,'adUserInteraction')}},a.mediaEvents.loaded=a.adEvents.loaded,a.videoEvents=a.mediaEvents,Object.freeze(a),Object.defineProperty(b,'omidSessionInterface',{value:a,writable:!1}))};function Hb(a,b){this.c=b=void 0===b?K:b;var c=this;a.addEventListener('message',function(d){if('object'===typeof d.data){var e=d.data;Bb(e)&&d.source&&c.a&&c.a(Cb(e),d.source)}})}r(Hb,Eb);Hb.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.postMessage(Db(a),'*')};function Ib(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=16*Math.random()|0;return'y'===a?(b&3|8).toString(16):b.toString(16)})};function Jb(a){if(!a.b||!a.b.document)throw Error('OMID Service Script is not running within a window.');var b=a.a;a.a=[];b.forEach(function(c){var d=a.c.G?'limited':'full';var e=c.accessMode;d=(e='string'===typeof e&&-1!==Object.values(pa).indexOf(e)?c.accessMode:null)?e:d;c.accessMode=d;e='full'!=d;d=Ib();var g=c.resourceUrl,l=a.b.document,f=l.createElement('iframe');e&&(f.sandbox='allow-scripts');f.id='omid-verification-script-frame-'+d;f.style.display='none';f.srcdoc="<html><head>\n<script type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionId': '"+
    (d+'\',\n};\x3c/script>\n<script type="text/javascript" src="')+g.replace(/"/g,'&quot;')+'">\x3c/script>\n</head><body></body></html>';l.body.appendChild(f);e=c.vendorKey;g=c.verificationParameters;e=void 0===e?'':e;g=void 0===g?'':g;e&&'string'===typeof e&&''!==e&&g&&'string'===typeof g&&''!==g&&(a.f.i[e]=g);a.c.F.set(d,c)})};function Kb(){var a=Lb,b=Mb,c=this;this.c=Y;this.b=a;this.a=J();this.g=b;this.f=!1;this.registerSessionObserver(function(d){return Nb(c,d)})}n=Kb.prototype;n.registerSessionObserver=function(a){Sa(this.c,a)};n.setSlotElement=function(a){eb(a)?(this.a.f=a,this.b&&hb(this.b)):L('setSlotElement called with a non-HTMLElement.  It will be ignored.')};n.setElementBounds=function(a){this.a.h=a;this.b&&hb(this.b);this.b&&ib(this.b)};n.error=function(a,b){Va(this.c,a,b)};
  n.registerAdEvents=function(){var a=this.c;$a(a,['impression'])&&ab(a)&&(a.a.j='javascript')};n.registerMediaEvents=function(){var a=this.c;$a(a,Object.values(z))&&bb(a)&&(a.a.i='javascript')};
  function Z(a,b,c){if('impression'==b)ab(a.c)&&(b=a.c,c=(c=J().s)?G(c):void 0,c=Q(b,Xa(b,c)),O(b,P(b,'impression','javascript',c)),a.b&&gb(a.b));else{if('loaded'==b){var d=c;d=void 0===d?null:d;bb(a.c)&&(c=a.c,c.a.a||'display'!=c.a.b)&&(d=P(c,'loaded','javascript',Q(c,Xa(c,void 0===d?null:d))),O(c,d))}else if(bb(a.c)){d=a.c;'start'!==b&&'volumeChange'!==b||null!=(c&&c.deviceVolume)||(c.deviceVolume=d.a.N);if(c&&('start'===b||'volumeChange'===b)){var e=c.videoPlayerVolume,g=c.mediaPlayerVolume;null!=
  e?(Object.assign(c,{mediaPlayerVolume:e}),d.a.H=e):null!=g&&(Object.assign(c,{videoPlayerVolume:g}),d.a.H=g)}O(d,P(d,b,'javascript',c))}['loaded','start'].includes(b)&&a.b&&gb(a.b)}}n.injectVerificationScriptResources=function(a){var b=this.g;b.a.push.apply(b.a,q(a));if(this.f)try{Jb(this.g)}catch(c){L(c.message)}};
  n.setCreativeType=function(a,b){b=void 0===b?null:b;if(!this.a.b||this.a.a)this.a.a=a,'video'==a||'audio'==a?this.a.b='video':'htmlDisplay'==a||'nativeDisplay'==a?this.a.b='display':'definedByJavaScript'==a&&b&&(this.a.b='none'==b?'display':'video')};n.setImpressionType=function(a){if(!this.a.b||this.a.a)this.a.l=a};
  function Nb(a,b){if('sessionStart'===b.type){a.f=!0;try{Jb(a.g)}catch(c){L(c.message)}}'sessionFinish'===b.type&&(a.f=!1,(b=J().c)&&'native'==b.adSessionType||a.registerSessionObserver(function(c){return Nb(a,c)}))}n.setClientInfo=function(a,b,c){var d=this.a.c||{};d.omidJsInfo=Object.assign({},d.omidJsInfo,{sessionClientVersion:a,partnerName:b,partnerVersion:c});this.a.c=d;return this.a.c.omidJsInfo.serviceVersion};function Ob(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)}function Pb(a){a=a.split('-')[0].split('.');for(var b=['1','0','3'],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}return!0};function Qb(a,b){return Ob(a)&&Pb(a)?b?b:[]:b&&'string'===typeof b?JSON.parse(b):[]};function Rb(){var a=Sb,b=this;var c=void 0===c?omidGlobal:c;this.a=a;this.f=c;this.b=new W;this.f.omid=this.f.omid||{};this.f.omid.v1_SessionServiceCommunication=this.b;this.c=c&&c.addEventListener&&c.postMessage?new Hb(c):null;this.g=null;this.b.a=this.h.bind(this);this.c&&(this.c.a=this.i.bind(this));this.j=new Fb(function(d,e,g){try{Tb(b,d,e,g)}catch(l){L(Ub(l))}});Gb(this.j)}Rb.prototype.h=function(a,b){Vb(this,a,b,this.b)};
  Rb.prototype.i=function(a,b){this.g||(this.g=b);this.g!=b?L('The source window of session client post messages cannot be changed from the source of the first message.'):Vb(this,a,b,this.c)};function Vb(a,b,c,d){function e(k){for(var h=[],m=0;m<arguments.length;++m)h[m]=arguments[m];h=new V(g,'response',f,Ob(f)&&Pb(f)?h:JSON.stringify(h));d.b(h,c)}var g=b.b,l=b.method,f=b.version;b=Qb(f,b.a);try{Tb(a,l,e,b)}catch(k){d.b(new V(g,'error',f,Ub(k)),c)}}
  function Tb(a,b,c,d){switch(b){case 'SessionService.registerAdEvents':a.a.registerAdEvents();break;case 'SessionService.registerMediaEvents':a.a.registerMediaEvents();break;case 'SessionService.registerSessionObserver':a.a.registerSessionObserver(c);break;case 'SessionService.setSlotElement':var e=p(d).next().value;a.a.setSlotElement(e);break;case 'SessionService.setVideoElement':e=p(d).next().value;a=a.a;fb(e)?(a.a.g=e,a.b&&hb(a.b)):L('setVideoElement called with a non-HTMLVideoElement. It will be ignored.');
    break;case 'SessionService.setElementBounds':e=p(d).next().value;a.a.setElementBounds(e);break;case 'SessionService.startSession':c=p(d).next().value;null!=c&&'object'===typeof c?(b=c.customReferenceData,c=c.contentUrl,'string'===typeof b||(b=void 0),'string'===typeof c||(c=void 0),c={contentUrl:c,customReferenceData:b}):c=null;if(null==c)break;a=a.a;b=c;var g;e=void 0===e?null:e;null==g&&(g=Ib());a.a.u=g;c=a.a;g=b;b=c.c||{};g.omidJsInfo=Object.assign({},b.omidJsInfo||{},g.omidJsInfo||{});b=g=Object.assign({},
    b,g);c.G||(null!=c.g?(b.videoElement=c.g,b.accessMode='full'):null!=c.f&&(b.slotElement=c.f,b.accessMode='full'));c.c=g;void 0!==g.contentUrl&&(c.o=g.contentUrl);Wa(a.c,e);a.b&&gb(a.b);break;case 'SessionService.finishSession':a=a.a;Za(a.c);a.b.s();break;case 'SessionService.impressionOccurred':Z(a.a,'impression');break;case 'SessionService.loaded':(e=p(d).next().value)?(c={skippable:e.isSkippable,autoPlay:e.isAutoPlay,position:e.position},e.isSkippable&&(c.skipOffset=e.skipOffset),Z(a.a,'loaded',
    c)):Z(a.a,'loaded');break;case 'SessionService.start':c=p(d);e=c.next().value;c=c.next().value;Z(a.a,'start',{duration:e,mediaPlayerVolume:c});break;case 'SessionService.firstQuartile':Z(a.a,'firstQuartile');break;case 'SessionService.midpoint':Z(a.a,'midpoint');break;case 'SessionService.thirdQuartile':Z(a.a,'thirdQuartile');break;case 'SessionService.complete':Z(a.a,'complete');break;case 'SessionService.pause':Z(a.a,'pause');break;case 'SessionService.resume':Z(a.a,'resume');break;case 'SessionService.bufferStart':Z(a.a,
    'bufferStart');break;case 'SessionService.bufferFinish':Z(a.a,'bufferFinish');break;case 'SessionService.skipped':Z(a.a,'skipped');break;case 'SessionService.volumeChange':e={mediaPlayerVolume:p(d).next().value};Z(a.a,'volumeChange',e);break;case 'SessionService.playerStateChange':e={state:p(d).next().value};Z(a.a,'playerStateChange',e);break;case 'SessionService.adUserInteraction':e={interactionType:p(d).next().value};Z(a.a,'adUserInteraction',e);break;case 'SessionService.setClientInfo':b=p(d);
    e=b.next().value;g=b.next().value;b=b.next().value;a=a.a.setClientInfo(e,g,b);c(a);break;case 'SessionService.injectVerificationScriptResources':e=p(d).next().value;a.a.injectVerificationScriptResources(e);break;case 'SessionService.setCreativeType':e=p(d).next().value;a.a.setCreativeType(e);break;case 'SessionService.setImpressionType':e=p(d).next().value;a.a.setImpressionType(e);break;case 'SessionService.setContentUrl':e=p(d).next().value;a.a.a.o=e;break;case 'SessionService.sessionError':c=p(d),
    e=c.next().value,c=c.next().value,a.a.error(e,c)}}function Ub(a){return'\n        name: '+a.name+'\n        message: '+a.message+'\n        filename: '+a.filename+'\n        lineNumber: '+a.lineNumber+'\n        columnNumber: '+a.columnNumber+'\n        stack: '+a.stack+'\n        toString(): '+a.toString()};function Wb(){var a=Y,b=Xb;var c=void 0===c?K:c;this.g=a;this.a=b;this.h={};this.f={};this.c=new W;c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.c;this.b=null;c&&c.addEventListener&&c.postMessage&&(this.b=new Hb(c));this.c.a=this.i.bind(this);this.b&&(this.b.a=this.j.bind(this))}function Yb(a,b,c,d){qb(a.a,b,c,d)}function Zb(a,b,c,d){pb(a.a,'downloadJavaScriptResource')(b,c,d)}Wb.prototype.j=function(a,b){this.b&&$b(this,a,b,this.b)};Wb.prototype.i=function(a,b){$b(this,a,b,this.c)};
  function $b(a,b,c,d){function e(A){for(var R=[],fa=0;fa<arguments.length;++fa)R[fa]=arguments[fa];R=new V(g,'response',f,Ob(f)&&Pb(f)?R:JSON.stringify(R));d.b(R,c)}var g=b.b,l=b.method,f=b.version;b=Qb(f,b.a);try{switch(l){case 'VerificationService.addEventListener':var k=p(b).next().value;Qa(a.g,k,e);break;case 'VerificationService.addSessionListener':var h=p(b),m=h.next().value,y=h.next().value;Sa(a.g,e,m,y);break;case 'VerificationService.sendUrl':var la=p(b).next().value;Yb(a,la,function(){return e(!0)},
    function(){return e(!1)});break;case 'VerificationService.setTimeout':var M=p(b),N=M.next().value,E=M.next().value;a.h[N]=mb(a.a,'setTimeout')(e,E);break;case 'VerificationService.clearTimeout':var ec=p(b).next().value;ob(a.a,a.h[ec]);break;case 'VerificationService.setInterval':var Ab=p(b),fc=Ab.next().value,gc=Ab.next().value;a.f[fc]=lb(a.a,e,gc);break;case 'VerificationService.clearInterval':var hc=p(b).next().value;nb(a.a,a.f[hc]);break;case 'VerificationService.injectJavaScriptResource':var ic=
    p(b).next().value;Zb(a,ic,function(A){return e(!0,A)},function(){return e(!1)});break;case 'VerificationService.getVersion':p(b).next();var jc=J().c.omidJsInfo;e(jc.serviceVersion)}}catch(A){d.b(new V(g,'error',f,'\n              name: '+A.name+'\n              message: '+A.message+'\n              filename: '+A.filename+'\n              lineNumber: '+A.lineNumber+'\n              columnNumber: '+A.columnNumber+'\n              stack: '+A.stack+'\n              toString(): '+A.toString()+'\n          '),
    c)}};function ac(){var a=K.document.createElement('iframe');a.id='omid_v1_present';a.name='omid_v1_present';a.style.display='none';K.document.body.appendChild(a)}function bc(){var a=new MutationObserver(function(b){b.forEach(function(c){'BODY'===c.addedNodes[0].nodeName&&(ac(),a.disconnect())})});a.observe(K.document.documentElement,{childList:!0})};var Y=new La,Xb=new function(){var a;this.a=a=void 0===a?omidGlobal:a};new Wb;var cc=new function(){},dc=new function(){},kc=new function(){this.b=Y;this.a=J()},lc;K?lc=K.IntersectionObserver&&(K.MutationObserver||K.ResizeObserver)?new U(K,cc,kc,Y):new T(K,dc,kc,Xb,Y):lc=null;var Lb=lc,Mb=new function(){var a=Y;var b=void 0===b?K:b;this.f=a;this.b=b;this.c=J();this.a=[]},Sb=new Kb;J();new Rb;
  if(K.frames&&K.document&&!('omid_v1_present'in K.frames)){var mc;if(mc=null==K.document.body)mc='MutationObserver'in K;mc?bc():K.document.body?ac():K.document.write('<iframe style="display:none" id="omid_v1_present" name="omid_v1_present"></iframe>')};
}).call(this, this);

;(function(omidGlobal, factory, exports) {
  // CommonJS support
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(omidGlobal, exports);

    // If neither AMD nor CommonJS are used, export to a versioned name in the
    // global context.
  } else {
    var exports = {};
    var versions = ['1.3.12-dev'];
    var additionalVersionString = 'default';
    if (!!additionalVersionString) {
      versions.push(additionalVersionString);
    }

    factory(omidGlobal, exports);

    function deepFreeze(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          object[key] = deepFreeze(object[key]);
        }
      }
      return Object.freeze(object);
    }

    // Inject and freeze the exported components of omid.
    for (var key in exports) {
      if (exports.hasOwnProperty(key)) {
        if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
          // Define the top level property in the global scope
          Object.defineProperty(omidGlobal, key, {
            value: {},
          });
        }
        versions.forEach(function(version) {
          if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
            var frozenObject = deepFreeze(exports[key]);
            // Define the object exports keyed-off versions
            Object.defineProperty(omidGlobal[key], version, {
              get: function () {
                return frozenObject;
              },
              enumerable: true,
            });
          }
        });
      }
    }
  }
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
  'use strict';
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
      return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
    };
  };
  $jscomp.arrayIterator = function(a) {
    return {next:$jscomp.arrayIteratorImpl(a)};
  };
  $jscomp.makeIterator = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a);
  };
  $jscomp.arrayFromIterator = function(a) {
    for (var b, c = []; !(b = a.next()).done;) {
      c.push(b.value);
    }
    return c;
  };
  $jscomp.arrayFromIterable = function(a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {
    };
    b.prototype = a;
    return new b;
  };
  $jscomp.underscoreProtoCanBeSet = function() {
    var a = {a:!0}, b = {};
    try {
      return b.__proto__ = a, b.a;
    } catch (c) {
    }
    return !1;
  };
  $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
  $jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
      var c = $jscomp.setPrototypeOf;
      c(a, b);
    } else {
      for (c in b) {
        if ("prototype" != c) {
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else {
            a[c] = b[c];
          }
        }
      }
    }
    a.superClass_ = b.prototype;
  };
  $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  };
  $jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
  $jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {
    };
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
  };
  $jscomp.SymbolClass = function(a, b) {
    this.$jscomp$symbol$id_ = a;
    $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:b});
  };
  $jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_;
  };
  $jscomp.Symbol = function() {
    function a(c) {
      if (this instanceof a) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++, c);
    }
    var b = 0;
    return a;
  }();
  $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }});
    $jscomp.initSymbolIterator = function() {
    };
  };
  $jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.asyncIterator;
    a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {
    };
  };
  $jscomp.iteratorPrototype = function(a) {
    $jscomp.initSymbolIterator();
    a = {next:a};
    a[$jscomp.global.Symbol.iterator] = function() {
      return this;
    };
    return a;
  };
  $jscomp.iteratorFromArray = function(a, b) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var c = 0, d = {next:function() {
        if (c < a.length) {
          var e = c++;
          return {value:b(e, a[e]), done:!1};
        }
        d.next = function() {
          return {done:!0, value:void 0};
        };
        return d.next();
      }};
    d[Symbol.iterator] = function() {
      return d;
    };
    return d;
  };
  $jscomp.polyfill = function(a, b, c, d) {
    if (b) {
      c = $jscomp.global;
      a = a.split(".");
      for (d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
    }
  };
  var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
      PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
      UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"},
    InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll",
      POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose",
      OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
  var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
    this.guid = a;
    this.method = b;
    this.version = c;
    this.args = d;
  };
  module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
    return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
      void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
  };
  module$exports$omid$common$InternalMessage.deserialize = function(a) {
    return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
  };
  module$exports$omid$common$InternalMessage.prototype.serialize = function() {
    var a = {};
    a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
    void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
    return a;
  };
  var module$exports$omid$common$Communication = function(a) {
    this.to = a;
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
  };
  module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
  };
  module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
    if (this.onMessage) {
      this.onMessage(a, b);
    }
  };
  module$exports$omid$common$Communication.prototype.serialize = function(a) {
    return JSON.stringify(a);
  };
  module$exports$omid$common$Communication.prototype.deserialize = function(a) {
    return JSON.parse(a);
  };
  module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
    return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
  };
  module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
  };
  var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
      if (!b) {
        throw Error("Value for " + a + " is undefined, null or blank.");
      }
      if ("string" !== typeof b && !(b instanceof String)) {
        throw Error("Value for " + a + " is not a string.");
      }
      if ("" === b.trim()) {
        throw Error("Value for " + a + " is empty string.");
      }
    }, assertNotNullObject:function(a, b) {
      if (null == b) {
        throw Error("Value for " + a + " is undefined or null");
      }
    }, assertNumber:function(a, b) {
      if (null == b) {
        throw Error(a + " must not be null or undefined.");
      }
      if ("number" !== typeof b || isNaN(b)) {
        throw Error("Value for " + a + " is not a number");
      }
    }, assertNumberBetween:function(a, b, c, d) {
      (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
      if (b < c || b > d) {
        throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
      }
    }, assertFunction:function(a, b) {
      if (!b) {
        throw Error(a + " must not be truthy.");
      }
    }, assertPositiveNumber:function(a, b) {
      (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
      if (0 > b) {
        throw Error(a + " must be a positive number.");
      }
    }};
  var module$exports$omid$common$exporter = {};
  function module$contents$omid$common$exporter_getOmidExports() {
    return "undefined" === typeof omidExports ? null : omidExports;
  }
  function module$contents$omid$common$exporter_getOrCreateName(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  module$exports$omid$common$exporter.packageExport = function(a, b, c) {
    if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
      a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
    }
  };
  var module$exports$omid$sessionClient$Partner = function(a, b) {
    module$exports$omid$common$argsChecker.assertTruthyString("Partner.name", a);
    module$exports$omid$common$argsChecker.assertTruthyString("Partner.version", b);
    this.name = a;
    this.version = b;
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.Partner", module$exports$omid$sessionClient$Partner);
  var module$exports$omid$sessionClient$VerificationScriptResource = function(a, b, c) {
    module$exports$omid$common$argsChecker.assertTruthyString("VerificationScriptResource.resourceUrl", a);
    this.resourceUrl = a;
    this.vendorKey = b;
    this.verificationParameters = c;
  };
  module$exports$omid$sessionClient$VerificationScriptResource.prototype.toJSON = function() {
    return {resourceUrl:this.resourceUrl, vendorKey:this.vendorKey, verificationParameters:this.verificationParameters};
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.VerificationScriptResource", module$exports$omid$sessionClient$VerificationScriptResource);
  var module$exports$omid$sessionClient$Context = function(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? null : d;
    module$exports$omid$common$argsChecker.assertNotNullObject("Context.partner", a);
    this.partner = a;
    this.verificationScriptResources = b;
    this.videoElement = this.slotElement = null;
    this.contentUrl = c;
    this.customReferenceData = d;
  };
  module$exports$omid$sessionClient$Context.prototype.setVideoElement = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("Context.videoElement", a);
    this.videoElement = a;
  };
  module$exports$omid$sessionClient$Context.prototype.setSlotElement = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("Context.slotElement", a);
    this.slotElement = a;
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.Context", module$exports$omid$sessionClient$Context);
  var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
  function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
    if ("undefined" !== typeof omidGlobal && omidGlobal) {
      return omidGlobal;
    }
    if ("undefined" !== typeof global && global) {
      return global;
    }
    if ("undefined" !== typeof window && window) {
      return window;
    }
    if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
      return module$contents$omid$common$OmidGlobalProvider_globalThis;
    }
    throw Error("Could not determine global object context.");
  }
  module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
  var module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys = {ROOT:"omidSessionInterface", AD_EVENTS:"adEvents", MEDIA_EVENTS:"mediaEvents"}, module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap = {sessionError:"reportError"}, module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames = Object.keys(module$exports$omid$common$constants.MediaEventType).map(function(a) {
    return module$exports$omid$common$constants.MediaEventType[a];
  }), module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames = ["impressionOccurred"], module$exports$omid$sessionClient$OmidJsSessionInterface = function(a) {
    a = void 0 === a ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : a;
    this.interfaceRoot_ = a[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.ROOT];
  };
  module$exports$omid$sessionClient$OmidJsSessionInterface.prototype.isSupported = function() {
    return null != this.interfaceRoot_;
  };
  module$exports$omid$sessionClient$OmidJsSessionInterface.prototype.sendMessage = function(a, b, c) {
    "registerSessionObserver" == a && (c = [b]);
    module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a] && (a = module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a]);
    b = this.interfaceRoot_;
    0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.AD_EVENTS]);
    0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.MEDIA_EVENTS]);
    b = b[a];
    if (!b) {
      throw Error("Unrecognized method name: " + a + ".");
    }
    b.apply(null, $jscomp.arrayFromIterable(c));
  };
  var module$exports$omid$common$Rectangle = function(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
  };
  var module$exports$omid$common$logger = {error:function(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c - 0] = arguments[c];
      }
      module$contents$omid$common$logger_executeLog(function() {
        throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
      }, function() {
        return console.error.apply(console, $jscomp.arrayFromIterable(b));
      });
    }, debug:function(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c - 0] = arguments[c];
      }
      module$contents$omid$common$logger_executeLog(function() {
      }, function() {
        return console.error.apply(console, $jscomp.arrayFromIterable(b));
      });
    }};
  function module$contents$omid$common$logger_executeLog(a, b) {
    "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
  }
  ;var module$exports$omid$common$eventTypedefs = {};
  var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.12-dev"};
  var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
  module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
    return /\d+\.\d+\.\d+(-.*)?/.test(a);
  };
  module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
    a = a.split("-")[0].split(".");
    b = b.split("-")[0].split(".");
    for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
      var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
      if (d > e) {
        break;
      } else {
        if (d < e) {
          return !1;
        }
      }
    }
    return !0;
  };
  var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
  module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
    return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
  };
  module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
    return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
  };
  var module$exports$omid$common$guid = {generateGuid:function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var b = 16 * Math.random() | 0;
        a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
        return a;
      });
    }};
  var module$exports$omid$common$windowUtils = {};
  function module$contents$omid$common$windowUtils_isValidWindow(a) {
    return null != a && "undefined" !== typeof a.top && null != a.top;
  }
  module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
    if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
      return !1;
    }
    try {
      if ("undefined" === typeof a.location.hostname) {
        return !0;
      }
      module$contents$omid$common$windowUtils_isSameOriginForIE(a);
    } catch (b) {
      return !0;
    }
    return !1;
  };
  function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
    return "" === a.x || "" !== a.x;
  }
  module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
    "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
    return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
  };
  module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
    return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
  };
  module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
    if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
      return null;
    }
    try {
      var b = a.top;
      return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
    } catch (c) {
      return null;
    }
  };
  var module$exports$omid$common$DirectCommunication = function(a) {
    module$exports$omid$common$Communication.call(this, a);
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
    this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
  };
  $jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
  module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
    b = void 0 === b ? this.to : b;
    if (!b) {
      throw Error("Message destination must be defined at construction time or when sending the message.");
    }
    b.handleExportedMessage(a.serialize(), this);
  };
  module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
    module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
  };
  module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
    return !1;
  };
  var module$exports$omid$common$PostMessageCommunication = function(a, b) {
    b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
    module$exports$omid$common$Communication.call(this, b);
    var c = this;
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
    a.addEventListener("message", function(a) {
      if ("object" === typeof a.data) {
        var b = a.data;
        module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
      }
    });
  };
  $jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
  module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
    return !!(a && a.addEventListener && a.postMessage);
  };
  module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
    b = void 0 === b ? this.to : b;
    if (!b) {
      throw Error("Message destination must be defined at construction time or when sending the message.");
    }
    b.postMessage(a.serialize(), "*");
  };
  module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
    return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
  };
  var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
      try {
        return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
      } catch (b) {
        return !1;
      }
    }, declareOmidPresence:function(a) {
      a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
        '"></iframe>'))));
    }, appendPresenceIframe_:function(a) {
      var b = a.document.createElement("iframe");
      b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
      b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
      b.style.display = "none";
      a.document.body.appendChild(b);
    }, isMutationObserverAvailable_:function(a) {
      return "MutationObserver" in a;
    }, registerMutationObserver_:function(a) {
      var b = new MutationObserver(function(c) {
        c.forEach(function(c) {
          "BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
        });
      });
      b.observe(a.document.documentElement, {childList:!0});
    }};
  var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
  function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
    return b.reduce(function(a, b) {
      return a && a[b];
    }, a);
  }
  function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
    if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
      try {
        var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
        if (e) {
          return new module$exports$omid$common$DirectCommunication(e);
        }
      } catch (f) {
      }
    }
    return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
  }
  function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
    b = $jscomp.makeIterator(b);
    for (var e = b.next(); !e.done; e = b.next()) {
      if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
        return e;
      }
    }
    return null;
  }
  module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
    c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
    var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
    b && d.unshift(b);
    return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
  };
  module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
    b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
    var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
    d && c.push(d);
    c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
    return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
  };
  var module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$exports$omid$sessionClient$AdSession = function(a, b, c) {
    module$exports$omid$common$argsChecker.assertNotNullObject("AdSession.context", a);
    this.context_ = a;
    this.impressionOccurred_ = !1;
    this.communication_ = b || (0,module$exports$omid$common$serviceCommunication.startSessionServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)());
    this.sessionInterface_ = c || new module$exports$omid$sessionClient$OmidJsSessionInterface;
    this.isSessionRunning_ = this.hasMediaEvents_ = this.hasAdEvents_ = !1;
    this.impressionType_ = this.creativeType_ = null;
    this.creativeLoaded_ = !1;
    this.callbackMap_ = {};
    this.communication_ && (this.communication_.onMessage = this.handleInternalMessage_.bind(this));
    this.setClientInfo_();
    this.injectVerificationScripts_(a.verificationScriptResources);
    this.sendSlotElement_(a.slotElement);
    this.sendVideoElement_(a.videoElement);
    this.sendContentUrl_(a.contentUrl);
    this.watchSessionEvents_();
  };
  module$exports$omid$sessionClient$AdSession.prototype.setCreativeType = function(a) {
    if (a === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type cannot be redefined with value " + module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT);
    }
    if (this.impressionOccurred_) {
      throw Error("Impression has already occurred");
    }
    if (this.creativeLoaded_) {
      throw Error("Creative has already loaded");
    }
    if (this.creativeType_ && this.creativeType_ !== module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type cannot be redefined");
    }
    if (void 0 === this.creativeType_) {
      throw Error("Native integration is using OMID 1.2 or earlier");
    }
    this.sendOneWayMessage("setCreativeType", a);
    this.creativeType_ = a;
  };
  module$exports$omid$sessionClient$AdSession.prototype.setImpressionType = function(a) {
    if (a === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type cannot be redefined with value " + module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT);
    }
    if (this.impressionOccurred_) {
      throw Error("Impression has already occurred");
    }
    if (this.creativeLoaded_) {
      throw Error("Creative has already loaded");
    }
    if (this.impressionType_ && this.impressionType_ !== module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type cannot be redefined");
    }
    if (void 0 === this.impressionType_) {
      throw Error("Native integration is using OMID 1.2 or earlier");
    }
    this.sendOneWayMessage("setImpressionType", a);
    this.impressionType_ = a;
  };
  module$exports$omid$sessionClient$AdSession.prototype.isSupported = function() {
    return !!this.communication_ || this.sessionInterface_.isSupported();
  };
  module$exports$omid$sessionClient$AdSession.prototype.isSendingElementsSupported_ = function() {
    return this.communication_ ? this.communication_.isDirectCommunication() : this.sessionInterface_.isSupported();
  };
  module$exports$omid$sessionClient$AdSession.prototype.registerSessionObserver = function(a) {
    this.sendMessage("registerSessionObserver", a);
  };
  module$exports$omid$sessionClient$AdSession.prototype.error = function(a, b) {
    this.sendOneWayMessage("sessionError", a, b);
  };
  module$exports$omid$sessionClient$AdSession.prototype.registerAdEvents = function() {
    if (this.hasAdEvents_) {
      throw Error("AdEvents already registered.");
    }
    this.hasAdEvents_ = !0;
    this.sendOneWayMessage("registerAdEvents");
  };
  module$exports$omid$sessionClient$AdSession.prototype.registerMediaEvents = function() {
    if (this.hasMediaEvents_) {
      throw Error("MediaEvents already registered.");
    }
    this.hasMediaEvents_ = !0;
    this.sendOneWayMessage("registerMediaEvents");
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendOneWayMessage = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) {
      c[d - 1] = arguments[d];
    }
    this.sendMessage.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendMessage = function(a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) {
      d[e - 2] = arguments[e];
    }
    this.communication_ ? this.sendInternalMessage_(a, b, d) : this.sessionInterface_.isSupported() && this.sendInterfaceMessage_(a, b, d);
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendInternalMessage_ = function(a, b, c) {
    var d = (0,module$exports$omid$common$guid.generateGuid)();
    b && (this.callbackMap_[d] = b);
    a = new module$exports$omid$common$InternalMessage(d, "SessionService." + a, module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, c));
    this.communication_.sendMessage(a);
  };
  module$exports$omid$sessionClient$AdSession.prototype.handleInternalMessage_ = function(a, b) {
    b = a.method;
    var c = a.guid;
    a = a.args;
    if ("response" === b && this.callbackMap_[c]) {
      var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, a);
      this.callbackMap_[c].apply(this, d);
    }
    "error" === b && window.console && module$exports$omid$common$logger.error(a);
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendInterfaceMessage_ = function(a, b, c) {
    try {
      this.sessionInterface_.sendMessage(a, b, c);
    } catch (d) {
      module$exports$omid$common$logger.error("Failed to communicate with SessionInterface with error:"), module$exports$omid$common$logger.error(d);
    }
  };
  module$exports$omid$sessionClient$AdSession.prototype.assertSessionRunning = function() {
    if (!this.isSessionRunning_) {
      throw Error("Session not started.");
    }
  };
  module$exports$omid$sessionClient$AdSession.prototype.impressionOccurred = function() {
    if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type has not been redefined");
    }
    if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type has not been redefined");
    }
    this.impressionOccurred_ = !0;
  };
  module$exports$omid$sessionClient$AdSession.prototype.creativeLoaded = function() {
    if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type has not been redefined");
    }
    if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type has not been redefined");
    }
    this.creativeLoaded_ = !0;
  };
  module$exports$omid$sessionClient$AdSession.prototype.setClientInfo_ = function() {
    this.sendOneWayMessage("setClientInfo", module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION, this.context_.partner.name, this.context_.partner.version);
  };
  module$exports$omid$sessionClient$AdSession.prototype.injectVerificationScripts_ = function(a) {
    a && (a = a.map(function(a) {
      return a.toJSON();
    }), this.sendOneWayMessage("injectVerificationScriptResources", a));
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendSlotElement_ = function(a) {
    this.sendElement_(a, "setSlotElement");
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendVideoElement_ = function(a) {
    this.sendElement_(a, "setVideoElement");
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendElement_ = function(a, b) {
    a && (this.isSendingElementsSupported_() ? this.sendOneWayMessage(b, a) : this.error(module$exports$omid$common$constants.ErrorType.GENERIC, "Session Client " + b + " called when communication is cross-origin"));
  };
  module$exports$omid$sessionClient$AdSession.prototype.sendContentUrl_ = function(a) {
    a && this.sendOneWayMessage("setContentUrl", a);
  };
  module$exports$omid$sessionClient$AdSession.prototype.setElementBounds = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("AdSession.elementBounds", a);
    this.sendOneWayMessage("setElementBounds", a);
  };
  module$exports$omid$sessionClient$AdSession.prototype.watchSessionEvents_ = function() {
    var a = this;
    this.registerSessionObserver(function(b) {
      b.type === module$exports$omid$common$constants.AdEventType.SESSION_START && (a.isSessionRunning_ = !0, a.creativeType_ = b.data.creativeType, a.impressionType_ = b.data.impressionType);
      b.type === module$exports$omid$common$constants.AdEventType.SESSION_FINISH && (a.isSessionRunning_ = !1);
    });
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.AdSession", module$exports$omid$sessionClient$AdSession);
  var module$exports$omid$common$VastProperties = function(a, b, c, d) {
    this.isSkippable = a;
    this.skipOffset = b;
    this.isAutoPlay = c;
    this.position = d;
  };
  module$exports$omid$common$VastProperties.prototype.toJSON = function() {
    return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position};
  };
  var module$exports$omid$sessionClient$AdEvents = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("AdEvents.adSession", a);
    try {
      a.registerAdEvents(), this.adSession = a;
    } catch (b) {
      throw Error("AdSession already has an ad events instance registered");
    }
  };
  module$exports$omid$sessionClient$AdEvents.prototype.impressionOccurred = function() {
    this.adSession.assertSessionRunning();
    this.adSession.impressionOccurred();
    this.adSession.sendOneWayMessage("impressionOccurred");
  };
  module$exports$omid$sessionClient$AdEvents.prototype.loaded = function(a) {
    a = void 0 === a ? null : a;
    this.adSession.creativeLoaded();
    a ? this.adSession.sendOneWayMessage("loaded", a.toJSON()) : this.adSession.sendOneWayMessage("loaded");
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.AdEvents", module$exports$omid$sessionClient$AdEvents);
  var module$exports$omid$sessionClient$MediaEvents = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.adSession", a);
    try {
      a.registerMediaEvents(), this.adSession = a;
    } catch (b) {
      throw Error("AdSession already has a media events instance registered");
    }
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.start = function(a, b) {
    module$exports$omid$common$argsChecker.assertNumber("MediaEvents.start.duration", a);
    module$exports$omid$common$argsChecker.assertNumberBetween("MediaEvents.start.mediaPlayerVolume", b, 0, 1);
    this.adSession.sendOneWayMessage("start", a, b);
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.firstQuartile = function() {
    this.adSession.sendOneWayMessage("firstQuartile");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.midpoint = function() {
    this.adSession.sendOneWayMessage("midpoint");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.thirdQuartile = function() {
    this.adSession.sendOneWayMessage("thirdQuartile");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.complete = function() {
    this.adSession.sendOneWayMessage("complete");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.pause = function() {
    this.adSession.sendOneWayMessage("pause");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.resume = function() {
    this.adSession.sendOneWayMessage("resume");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.bufferStart = function() {
    this.adSession.sendOneWayMessage("bufferStart");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.bufferFinish = function() {
    this.adSession.sendOneWayMessage("bufferFinish");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.skipped = function() {
    this.adSession.sendOneWayMessage("skipped");
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.volumeChange = function(a) {
    module$exports$omid$common$argsChecker.assertNumberBetween("MediaEvents.volumeChange.mediaPlayerVolume", a, 0, 1);
    this.adSession.sendOneWayMessage("volumeChange", a);
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.playerStateChange = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.playerStateChange.playerState", a);
    this.adSession.sendOneWayMessage("playerStateChange", a);
  };
  module$exports$omid$sessionClient$MediaEvents.prototype.adUserInteraction = function(a) {
    module$exports$omid$common$argsChecker.assertNotNullObject("MediaEvents.adUserInteraction.interactionType", a);
    this.adSession.sendOneWayMessage("adUserInteraction", a);
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.MediaEvents", module$exports$omid$sessionClient$MediaEvents);
  var module$exports$omid$sessionClient$OmidVersion = function(a, b) {
    module$exports$omid$common$argsChecker.assertTruthyString("OmidVersion.semanticVersion", a);
    module$exports$omid$common$argsChecker.assertTruthyString("OmidVersion.apiLevel", b);
  };
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.OmidVersion", module$exports$omid$sessionClient$OmidVersion);
  var module$exports$omid$sessionClient$VastPropertiesExports = {};
  (0,module$exports$omid$common$exporter.packageExport)("OmidSessionClient.VastProperties", module$exports$omid$common$VastProperties);

}, typeof exports === 'undefined' ? undefined : exports));

