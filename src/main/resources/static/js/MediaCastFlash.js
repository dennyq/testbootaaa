/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));;/*
 * flowplayer.js 3.2.11. The Flowplayer API
 *
 * Copyright 2009-2011 Flowplayer Oy
 *
 * This file is part of Flowplayer.
 *
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: 2012-06-16 10:34:45 -0400 (Sat, 16 Jun 2012)
 * Revision: 808
 */
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()}})})}return w},unload:function(J){if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)}return w}D=true;try{if(v){if(v.fp_isFullscreen()){v.fp_toggleFullscreen()}v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;q.innerHTML=u;D=false;if(J){J(true)}};if(/WebKit/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent)){setTimeout(I,0)}else{I()}}else{if(J){J(false)}}return w},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.11";if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"}return v},setClip:function(H){m(H,function(I,J){if(typeof J=="function"){j(x,I,J);delete H[I]}else{if(I=="onCuepoint"){$f(q).getCommonClip().onCuepoint(H[I][0],H[I][1])}}});w.setPlaylist([H]);return w},getIndex:function(){return p},bufferAnimate:function(H){v.fp_bufferAnimate(H===undefined||H);return w},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;u=q.innerHTML;if(typeof t=="string"){t={clip:{url:t}}}t.playerId=E;t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var L=this;if(typeof L=="object"&&L.length){L={url:""+L}}m(t.clip,function(M,N){if(N!==undefined&&L[M]===undefined&&typeof N!="function"){L[M]=N}});t.playlist[I]=L;L=new h(L,I,w);F.push(L);I++});m(t,function(L,M){if(typeof M=="function"){if(s[L]){s[L](M)}else{j(x,L,M)}delete t[L]}});m(t.plugins,function(L,M){if(M){y[L]=new l(L,M,w)}});if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)}y.canvas=new l("canvas",null,w);u=q.innerHTML;function K(L){if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!J()){return true}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function J(){return w.hasiPadSupport&&w.hasiPadSupport()}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",K,false)}else{if(q.attachEvent){q.attachEvent("onclick",K)}}}else{if(q.addEventListener&&!J()){q.addEventListener("click",f,false)}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(q){m(o,q)};this.size=function(){return o.length};var p=this;for(name in b.prototype){p[name]=function(){var q=arguments;p.each(function(){this[name].apply(this,q)})}}}window.flowplayer=window.$f=function(){var p=null;var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[10,1],expressInstall:"http://releases.flowplayer.org/swf/expressinstall.swf",cachebusting:false},t);if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))});return new d(s)}else{var r=c(o);return new b(r!==null?r:k(o),k(t),k(q))}}else{if(o){return new b(o,k(t),k(q))}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var h=document.all,j="http://get.adobe.com/flashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f;try{f=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[1*f[1],1*f[(f[1]*1>9?2:3)]*1]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d*)%/,"$1pct");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:encodeURIComponent(location.href),MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"||f.tagName=="DIV"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"3.2.11"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}})();;//---------------------------------
// player-parameter.js 
// 2015.12.19
//--------------------------------

var __player_version		= "5.2.0.4";
var __player_id		        = "player_div";
var __player_distribute	= "http://auth.mediacast.co.kr/installer";

//-------------------------------------------------------------------------------------
var __player_skinmode		= 0;					// ( 0-no skin, 1-black, 2-white, 3-grey&orange , 4-skyblue, 5-musician )
//var __player_skinfile			= "http://localhost:8080/skin/typeA/default/skin.html";
//var __player_skinfile			= "//auth.mediacast.co.kr:8080/skin/typeA/default/skin.html";
var __player_skinfile			= "/skin/typeA/default/skin.html";
//var __player_skinfile			= "//auth.mediacast.co.kr/lek_mediacast/skin/skin.html";
//var __player_skinfile			= "http://auth.mediacast.co.kr/htmlskin/mcast3/skin.php";
var __player_skinheight		= 130;
var __player_chk_skinautohide	= 0;		// 스킨자동으로 숨기기 ( 0-고정, 1-자동숨기기 )
//-------------------------------------------------------------------------------------
var __player_chk_auth			= 0;		// 인증이필요한화일(1), 무료동영상(0)
var __player_chk_streaming	= 1;		// Linux Streaming방식(1), 윈도우 HttpUrl (0)
var __player_chk_keeper		= 0;		// 캡처차단옵션 사용(1), 사용안함(0)
var __player_chk_event			= 1;		// Linux Streaming방식에서 이벤트전송(1), 그외(0)

var __player_chk_bookmarkmenu = 0;
var __player_chk_skinmenu		= 0;
//-------------------------------------------------------------------------------------

var __player_chk_capture_baduser = 0;	// 무단관람자 화면캡처 ( 4회연속캡처시 60분간 블록킹 )
var __player_chk_urlencoded	= 0;			// 인코딩된 httpurl 사용(1), 원본 url사용(0)
var __player_video_codec		= 1;			// 0(MPC), 1(MainConcept), 2(FFDSHOW)
//-------------------------------------------------------------------------------------
var __player_video_autoplay		= 0;    //2016.01.11 자동재생여부 변수화
var __player_last_position		= 0;    //2016.01.11 자동재생여부 변수화
//-------------------------------------------------------------------------------------


var __player_subtitles = [];		//자막파일 배열로 삽입


//----------------------------------
// 동영상재생창의 비디오크기 
//----------------------------------
var __player_chk_autosizing	= 1;
var __player_video_width		= 750;
var __player_video_height		= 480;
var __skinHidden = false;
//-------------------------------
// 설치안내창 표시되는 서버 
//-------------------------------
var __player_server	=	"player.mediacast.co.kr"; 
var __isLive = false;
var __player_dvr = false;
var __player_hls_live = false;

//-------------------------------
// KEEPER 인증받는 서버와 URL
//-------------------------------
var __player_authserver = "auth.mediacast.co.kr";
var __player_authserver_page = "/mediacast/MediaCast_KeeperCheck.php";
var __player_check_keeper = 1;
//----------------------------------
// 메시지 
//---------------------------------
var __player_message_stopped	= 'Keeper 작동이 중단되어 재생이 중단되었습니다.';
var __player_message_captured = '캡처 프로그램이 감지되어 재생이 중단되었습니다.  ';
var __player_message_dupuser = '동일한 ID를 사용하는 중복사용자가 있습니다.';
var __player_message_noFound = '재생을 하기위해서는 보안프로그램 설치가 필요합니다. 설치 페이지로 이동합니다.';
;//---------------------------------------------------------------------------
// mayple-5.1.0.5.js (HTML5 Player) - 2016-03-16
//--------------------------------------------------------------------------

var __player_classid	  = "clsid:ED0CC0F5-9D78-4434-A26D-B3756CF61B09";
var __player_httpurl;
var __player_skinheight ;
var window_xx, window_yy;
var __player_chk_bookmarkmenu = 1;
var __player_chk_skinmenu = 0;

var __player_cache_type = -1;

var __player_cache_size = 0;
var __player_mp4splitter = -1;
var __player_mirroring = 1;
var __player_bglogo = "";
var __player_fitscreen = 0;
var __player_capture_video = 0;
//var __player_video_codec = 0;

var __player_skinmode		= 0;
var __player_chk_skinautohide	= 0;
var __player_chk_auth			= 0;
var __player_chk_streaming	= 1;
var __player_chk_keeper		= 0;
var __player_chk_event			= 0;
var __player_chk_bookmarkmenu = 0;
var __player_chk_skinmenu		= 0;

var __player_chk_capture_baduser = 0;
var __player_chk_urlencoded	= 0;
var __player_video_codec		= 1;


var __player_cache_expirelimit = 0;
var __player_chk_progressive = 0;

var __keeper_volume = 0;
var __keeper_virtual= 1;
var __keeper_terminal= 0;
var __keeper_messenger = 0;
var __keeper_apple = 1;

var __player_video_render = -1;
var __player_audio_render = -1;
var __player_buffersize = -1;

// Watermark
var __player_watermark_type = -1;			// -1 : not, 1:left top, 2:right top, 3:let-bottom, 4-right bott, 5-center, 6-random
var __player_watermark_size = 15;			// 15 px
var __player_watermark_interval = 10;		// 10 seconds exposed
var __player_watermark_duration = 60;		// during 60 seconds
var __player_watermark_id='';

var __player_watermark_color = "0,0,0,20";	// RGB ( "0,0,0" - black, "255,255,255" - white ), 투명도(20%)
var __player_watermark_font = "Tahoma";	// "Tahoma","Vernada","Arial", "TimesRoman"

// Yozii-DRM : 2013-11-15

var __player_chkdrm = 0;			// drm 화일 재생여부
//var __player_licurl = "";			// 라이센스 발급 페이지 (순수텍스트)
var __player_licurl_encoded = "";	// 라이센스 발급 페이지 URL ( 암호화 텍스트)

//---------------------------
// 2015-10 : TOKEN
//---------------------------
var __player_token='';	// 웹필터 인증을 위해 필요한 값 ( domain | id | title | created_time 으로 구성된 암호화문자열 )
var __player_player_type=1;	// 0-ActiveX , 1-VideoTag, 2-Flash
var __player_type = 0;

//---------------------------
// 2016-05 : WOWZA
//---------------------------
var __player_hls = false;
var __player_hls_live = false;

//-----------------------------------------------------------------------------
// Keyboard 제어
//-----------------------------------------------------------------------------
window.addEventListener("keydown", checkKeyPressed, false);
var videoTagDocument;

function checkKeyPressed(e) {
	//console.log("keyCode : "+e.keyCode);
	videoTagDocument = document.getElementById('player_video');

	if(e.keyCode == 32){ // space
		if(!videoTagDocument.paused){
			videoTagDocument.pause();
			$("#player_skin").contents().find("#ImgPlay").attr('src', 'play.png');
			__playstate = 3;
		}else{
			videoTagDocument.play();
			$("#player_skin").contents().find("#ImgPlay").attr('src', 'pause.png');
			__playstate = 2;

		}
	}
	if(e.keyCode == 37){ // ← 뒤로 15초
		video_fastreverse();
	}
	if(e.keyCode == 39){ // → 앞으로 15초
		video_fastforward();
	}
	if(e.keyCode == 70){ // F 전체화면
		video_fullscreen();
	}
}

//-----------------------------------------------------------------------------
// general function
//-----------------------------------------------------------------------------

function set_autosizing(chk)	{ __player_chk_autosizing = chk;  }
function set_videosize( x,y )	{ __player_video_width = x; __player_video_height=y; }
function set_bookmarkmenu(chk)	{ __player_chk_bookmarkmenu=chk; }
function set_skinmenu(chk)		{ __player_chk_skinmenu=chk; }
function set_fitscreen(chk)		{ __player_fitscreen = chk;  }

function keeper_checkterminal(chk)	{	__keeper_terminal = chk; }
function keeper_checkvolume (chk)	{	__keeper_volume = chk; }
function keeper_checkvirtual(chk)	{	__keeper_virtual = chk ; }
function keeper_killmessenger(chk)	{	__keeper_messenger = chk; }
function keeper_checkapple(chk)		{	__keeper_apple = chk; }

window.onmessage = function(event) {try	{ if(event.data==="reload") {location.reload();}}catch(e){}};

//------------------------------------------------------------------
// 2014-10-25 : CAPTION
//------------------------------------------------------------------
var __player_caption_file  = "";
var __player_caption_style = "";

var cap_font_name	 = "NanumGothic";	// 한글명 안됨
var cap_font_size	 = "25";
var cap_transparency = "80";	// 100:투명없음 , 0:완전투명
var cap_font_color	 = "10,255,10"; //R,G,B,Transparency (투명도20%)
var cap_overlay      =  1;
var cap_shadow_color = "0,0,0";	//black
var cap_frame_height = 80;

function set_caption_style(){__player_caption_style= cap_transparency+","+cap_font_name + "," + cap_font_size + "," + cap_font_color + "," + cap_overlay + "," + cap_shadow_color; }
function set_caption_file(f)	  { __player_caption_file = f;}
function set_caption_color(r,g,b) { cap_font_color= r+","+g+","+ b;	set_caption_style(); }
function set_caption_shadow_color (r,g,b)  { cap_shadow_color= r+","+g+","+ b;  set_caption_style(); }
function set_caption_fontsize(f)  { cap_font_size = f;  set_caption_style(); }
function set_caption_font(f)	  { cap_font_name = f;  set_caption_style(); }
function set_caption_overlay (f)  { cap_overlay=f;		set_caption_style(); }

set_caption_style();

var __player_caption_flash  = "";

function set_caption_flash(f) { __player_caption_flash = f;}

//----------------------------------------------------
// 2015-07-22 : Watermark Transparency
//----------------------------------------------------
var watermark_transparency= "20" ;
var watermark_rgb = "0,0,255";

function set_watermark_opacity( t )
{
	if( t>0 && t<256) watermark_transparency = parseInt( t*100/255 );
	__player_watermark_color = watermark_rgb + "," + watermark_transparency ;
}

function set_watermark_transparency ( t )
{
	if( t>0 && t<101) watermark_transparency = t;
	__player_watermark_color = watermark_rgb + "," + watermark_transparency ;
}

function set_watermark_color( rgb )
{
	watermark_rgb = rgb ;
	__player_watermark_color = watermark_rgb + "," + watermark_transparency ;
}
function set_watermark_id (id) { __player_watermark_id = id; }

function set_watermark_option( id, opactity, posi , size, font)
{
	__player_watermark_id = id;
	if( opactity>0 && opactity<256) watermark_transparency = parseInt( opactity*100/255 );
	else watermark_transparency = 50;
	__player_watermark_type = posi;
	__player_watermark_size = size;
	__player_watermark_font = font;
}


var watermark_value=2;
var watermarkposiCount = 0;
function watermark_setposi()
{
	var watermark = document.getElementById('watermark_div');
	var $videotag = $('#player_video');
	var videotagpostion = $videotag.position();
	var videoleft = videotagpostion.left;
	var videotop = videotagpostion.top;
	watermark.style.top = watermark.style.bottm = watermark.style.left= watermark.style.right='';
	if(watermarkposiCount == 0){
		$("#watermark_div").hide();
		watermarkposiCount++;
		return;
	}

	switch( __player_watermark_type ) {
		case 1 : //top
			var top = 	videotop + 10;
			var left = videoleft + 10;
			watermark.style.top = top+'px';
			watermark.style.left = left+'px';
			break;
		case 2 :
			var top = 	videotop + 10;
			var watermarkMindLeft = $videotag.width() - $("#watermark_div").width()-10;
			watermark.style.top = top+'px';
			watermark.style.left = watermarkMindLeft+'px';
			break;
		case 3 :
			var top = $videotag.height() - $("#watermark_div").height() -10;
			var left = videoleft + 10;
			watermark.style.top = top+'px';
			watermark.style.left = left+'px';
			break;
		case 4 :
			var top = $videotag.height() - $("#watermark_div").height() -10;
			var watermarkMindLeft = $videotag.width() - $("#watermark_div").width()-10;
			watermark.style.top = top+'px';
			watermark.style.left = watermarkMindLeft+'px';
			break;
		case 5 :
			var left = parseInt(($videotag.width()/2 - __player_watermark_size* __player_watermark_id.length/4 )) + videoleft;
			var top = parseInt(($videotag.height() - __player_watermark_size)/2-20) + videotop;
			watermark.style.left = left + 'px';
			watermark.style.top = top + 'px';
			break;
		case 6 :
			var watermarkleft = Math.random()*($videotag.width() - __player_watermark_size* __player_watermark_id.length/4);
			var watermarkMindLeft = $videotag.width() - $("#watermark_div").width();
			if(parseInt(watermarkleft)+videoleft > watermarkMindLeft+videoleft){
				watermark.style.left = 	watermarkMindLeft+videoleft + 'px';
			}else{
				watermark.style.left = 	(parseInt(watermarkleft))+videoleft + 'px';
			}
			//console.log("watermark posi "+watermarkleft+", minus left :"+watermarkMindLeft);
			var waterMarkTop = parseInt(Math.random()*($videotag.height() - __player_watermark_size - 20));
			var waterMakrMinTop = $videotag.height() - $("#watermark_div").height();
			if(waterMarkTop+videotop > waterMakrMinTop+videotop){
				watermark.style.top = 	waterMakrMinTop+videotop + 'px';
			}else{
				watermark.style.top = 	waterMarkTop+videotop + 'px';
			}
			break;
		case 7 :
			var watermarkleft = Math.random()*($videotag.width() - __player_watermark_size* __player_watermark_id.length/4);
			var watermarkMindLeft = $videotag.width() - $("#watermark_div").width();
			if(parseInt(watermarkleft)+videoleft > watermarkMindLeft+videoleft){
				watermark.style.left = 	watermarkMindLeft+videoleft + 'px';
			}else{
				watermark.style.left = 	(parseInt(watermarkleft))+videoleft + 'px';
			}
			//console.log("watermark posi "+watermarkleft+", minus left :"+watermarkMindLeft);
			var waterMarkTop = parseInt(Math.random()*($videotag.height() - __player_watermark_size - 20));
			var waterMakrMinTop = $videotag.height() - $("#watermark_div").height();
			if(waterMarkTop+videotop > waterMakrMinTop+videotop){
				watermark.style.top = 	waterMakrMinTop+videotop + 'px';
			}else{
				watermark.style.top = 	waterMarkTop+videotop + 'px';
			}
			break;

	}
	$("#watermark_div").show();
	//watermark.style.display='';
}


function getHexaValue(x)
{
	var y = parseInt(x).toString(16);
	return y.length<2 ? '0'+y : y;
}

function watermark_moveto()
{
	try
	{
		watermark_setposi();
		var token = __player_watermark_color.split(',');
		var fcolor = '#' + getHexaValue(token[0]) + getHexaValue(token[1]) +getHexaValue(token[2]) ;
		var fopacity = token[3] / 100;
		var fsize  = (video_getfullscreen()==1 ? parseInt(__player_watermark_size*2) : __player_watermark_size) + 'px';
		var font = __player_watermark_font;
		var watermark = document.getElementById('watermark_div');
		if(typeof(watermark) === 'undefined' || watermark === null){
			setTimeout( function(){watermark_moveto();}, 100);
			return;
		}
		watermark.innerHTML = '<font style="font-size:'+fsize +';font-family:'+font+';color:'+fcolor+'"><b>'+ __player_watermark_id + '</b></font>';
		watermark.style.opacity = fopacity;
	}
	catch (e) 	{	}
	setTimeout( 'watermark_moveto()', 10*1000);
}

//------------------------------------------------------------------

function set_version(ver)
{
	__player_version = ver;
	__player_codebase  = __player_distribute + "/MaypleMP4-"+ver+".cab#version="+ver.replace(/\./g,',');
	//__player_installer = __player_distribute + "/MaypleMp4Installer-"+ver+".exe";
	__player_installer = __player_distribute + "/MediaCastMp4Installer-"+ver+".exe";
}


function set_watermark( mark_type, mark_size )
{
	__player_watermark_type = mark_type;
	__player_watermark_size = mark_size;
	__player_watermark_interval = 10;
	__player_watermark_duration = 60;

}

function set___player_buffersize( size)
{
	__player_buffersize= size;
}


function set___player_bglogo(url)		{	__player_bglogo = url;}
function set_mirroring(chkEnable)	{	__player_mirroring = chkEnable == "1" ? 1: 0; }

function set_caching(cachesize)
{
	if(cachesize<1 || cachesize>1024) { __player_cache_type=-1; }
	else {
		__player_cache_type=1;
		__player_cache_size = cachesize;
	}
}

function set_disk_caching(size)
{
	__player_cache_type=2;
	__player_cache_size= size;		 // 캐싱에 사용할 디스크 공간 ( 적절: 1GB )
	__player_cache_expirelimit = 7;	 // 7일뒤 만료
}

function set_progressive(kbps)
{
	if(kbps>0) {
		__player_cache_type = 2;
		__player_cache_size = 3072;		 // 캐싱에 사용할 디스크 공간 ( 적절: 3GB )
		__player_cache_expirelimit = 7;	 // 7일뒤 만료 ( 0-즉시만료)
		__player_chk_progressive = kbps;	 // 다운로드를 허용한 Max Bandwidth

	} else {
		__player_cache_type=0;
		__player_cache_size= 1024;		 // 캐싱에 사용할 디스크 공간 ( 적절: 1GB )
		__player_cache_expirelimit = 7;	 // 7일뒤 만료
		__player_chk_progressive = 0;     // 다운로드를 허용한 Max Bandwidth
	}

}

function set_videocodec (x)
{
	try	{		__player_video_codec = x;		 	}
	catch (e)	{	}
}


function set_streaming( chk_auth , chk_streaming, chk_keeper_, chk_event )
{
	__player_chk_auth		 = chk_auth;
	__player_chk_streaming = chk_streaming;
	__player_chk_keeper	 = chk_keeper;
	__player_chk_event	 = chk_event;
}

function set_maypleskin( skinidx )
{
	__player_skinmode = skinidx;
	try{
		var  h = new Array ( 82,92,96,80,82,96, 96);
		var  f = new Array ("playerskinblack","playerskinWhite","playerskinByminorange",
			                "playerskinSkyblue", "playerskinblack2","playerskinjina");
		if( skinidx > 0 ) {
			__player_skinmode = 1;
			__player_skinheight = h[skinidx - 1];
			__player_skinfile = "res://" + f[skinidx-1] + ".dll/skin.html";
		}
	} catch(e) {  }
}


function set_windowsize()
{
	if( __player_chk_autosizing!=1) return;

	var user_agent = get_browser();
	if( user_agent== 'chrome') delta = 34;
	else if(user_agent=='firefox') delta=37;
	else if(user_agent=='safari' )  delta=0;
	else delta = 50;

	var xx = __player_video_width +4 ;
	if( user_agent=="msie 10") xx = xx+12;
	var yy = __player_video_height ;
	if (__player_skinmode>0  &&  __player_chk_skinautohide==0 )  yy = yy+ __player_skinheight + 25 + delta ;
	else yy = yy+ 25 + delta ;

	//alert( __player_skinheight + "," + yy );

	var macbook_adjust = ( get_device()=="macbook" ? (-25):0 );
	window.resizeTo ( xx, yy + macbook_adjust );
	if( cap_overlay==3 && __player_caption_file> "" ) {
		window.resizeBy(0,cap_frame_height);
	}

}

function set_windowsizeTo(xx,yy)
{
	var user_agent = get_browser();
	if( user_agent== 'chrome') delta = 44;
	else if(user_agent=='firefox') delta=37;
	else if(user_agent=='safari' )  delta=0;
	else delta = 0;

	var hh = yy + delta;

	var macbook_adjust = ( get_device()=="macbook" ? (-25):0 );
	window.resizeTo ( xx, hh + macbook_adjust);
}

/*
Firefox : Mozilla/5.0 (Windows NT 5.2; rv:11.0) Gecko/20100101 Firefox/11.0
Chrome : Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.69 Safari/537.36
MSIE11 : Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/12.0
*/
function get_browser()
{
	var user_agent = navigator.userAgent.toLowerCase();
	if( user_agent.indexOf("android")>-1) return "android";
	else if( user_agent.indexOf("mac os")>-1){
		if(user_agent.indexOf("macintosh")>-1){
			return "macbook";
		}else{
			return "ios";
		}
	}
	else if( user_agent.indexOf("chrome")>-1 && user_agent.indexOf("applewebkit/")>-1 )  return "chrome";
	else if( user_agent.indexOf("firefox")>-1 &&
			user_agent.indexOf("trident")<0 &&
		    user_agent.indexOf("win64")<0 && user_agent.indexOf("x64")<0 ) return "firefox";
	else if( user_agent.indexOf("safari")>-1)  return "safari";
	else if( user_agent.indexOf("opera")>-1)  return "opera";
	else {
		/*
		if( user_agent.indexOf("windows nt 6.1")>-1 &&
			user_agent.indexOf("trident/7.0")>-1 &&
			user_agent.indexOf("like gecko")>-1 &&
			user_agent.indexOf("rv:1")>-1) return "msie1x";	// IE11 & IE12
		*/
		//if( user_agent.indexOf("windows nt")>-1 && user_agent.indexOf("win64")>-1 && user_agent.indexOf("x64")>-1) return "win64";
		//if( user_agent.indexOf("win64")>-1 && user_agent.indexOf("x64")>-1) return "win64";
		if( user_agent.indexOf("msie 9.0")>-1) return "msie 9";
		if( user_agent.indexOf("windows nt 6.")>-1) return "msie 10";
		if( user_agent.indexOf("windows nt 10")>-1) return "msie 11";
		if( user_agent.indexOf("edge")>-1) return "edge";

		//alert( user_agent);
		if( user_agent.indexOf("msie")>-1 && user_agent.indexOf("win64")>-1 && user_agent.indexOf("x64")>-1) return "win64";

		if( user_agent.indexOf("msie")>-1)  return "msie";

		return "msie";
	}
}

function get_device()
{
	var agent = navigator.userAgent.toLowerCase();
	//alert(agent);

	var device= "";
	if( agent.indexOf('android')>-1 ) {
		if ( agent.indexOf('phone')>-1) return "gallphone";
		return "galltab";
	}
	if( agent.indexOf('mac os')>-1) {
		if( agent.indexOf('phone')>-1) return "iphone";
		else if( agent.indexOf('ipad')>-1) return "ipad";
		return "macbook";
	}
	return "ibmpc";
}

//---------------------------------------------------
// Active-X 선언부분
//---------------------------------------------------
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

var os = (function() {
    var ua = navigator.userAgent.toLowerCase();
    return {
        isWin2K: /windows nt 5.0/.test(ua),
        isXP: /windows nt 5.1/.test(ua),
        isVista: /windows nt 6.0/.test(ua),
        isWin7: /windows nt 6.1/.test(ua),
        isWin8: /windows nt 6.2/.test(ua),
        isWin81: /windows nt 6.3/.test(ua)
    };
}());
$( window ).unload(function() {
	if (detectIE() == "7" || detectIE() == "8" || detectIE() == "9") {
		self.close();
	}
  return "Bye now!";

});


function make_flashtag( xx,yy, url )
{
	__player_id ='player_div';
	__player_httpurl = url;
	__player_token = url;
	__player_type = 2;


	//if (detectIE() == "7" || detectIE() == "8" || detectIE() == "9") {
	//if(os.isXP){
	//	yy = $("#player_div").innerHeight() - __player_skinheight-160;
	//}else{
	//	yy = $("#player_div").innerHeight() - __player_skinheight-180;
	//}
	//}else{
	yy = $("#"+__player_id).innerHeight(); //- __player_skinheight;
	//}

	yy =  (yy>130) ? (yy+'px') : '650px' ;
	xx =  (xx == '100%') ? '100%' : (xx+'px');
	//console.log("video height : "+yy+", body height : "+$("body").innerHeight()+", player_div hieght : "+$("#player_div").innerHeight());
	var poster		= '/image/mediacast_250.png';
	var style		= 'z-index:1;padding:0;margin:0;object-fit:fill;background-color:#333333;width:'+xx+';height:'+yy+';';
	//var style		= 'z-index:1;padding:0;margin:0;object-fit:fill;background-color:#333333;width:100%;height:100%';
	var style_hidden = 'style="display:none;"';
	var tag='';
	try{
		tag+= '<div id=player_div2 name=player_div2 style="'+style+'">';
		tag+= '<a id=player style="'+style+'"></a>';
		tag+= '</div>';

		var install_url = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
		tag+= '<iframe id="iframe_install" name="iframe_install" src="' + install_url + '" style="display:none;width:100%;height:860px" frameborder=0 "></iframe>';

		tag+= '<iframe id="iframe_keeper_check" name="iframe_keeper_check" ' + style_hidden + ' ></iframe>\n ';
		tag+= '<iframe id="player_skin" name="player_skin" src="' + __player_skinfile + '?flash=1" width="100%" frameborder="0" ALLOWTRANSPARENCY="true" style="padding:0;margin:0;width:100%;height:'+__player_skinheight+'px;"></iframe>';
		tag+= '<iframe id="player_bookmark" name=player_bookmark ' + style_hidden + '></iframe>';
		tag+= '<div id="_div_keeper_" name="_div_keeper_"  style="display:none;" ></div>\n ';
		tag+= '<div id="_div_function_" name="_div_function_"  style="display:none;" ></div>\n ';
		tag+= '<div id="watermark_div" style="position:absolute;z-index:2147483647;float:top;overflow:hidden;"></div>';


	} catch(e) { alert(e.Message); }
	console.log('__player_id : '+__player_id);
	//document.getElementById('player_div').innerHTML = tag;
	document.getElementById(__player_id).innerHTML = tag;
	if(__player_watermark_id.length >0 && __player_watermark_type>-1 ) setTimeout('watermark_moveto();',1000);

	if( __player_check_keeper<1) {
		if(__player_hls){
			onAuthorizedHLS(url);
		}else{
			onAuthorized( url );
		}
	}
	return ;
}

function make_flashtag( xx,yy, url,elementID )
{
	__player_httpurl = url;
	__player_token = url;
	__player_type = 2;
	__player_skinheight = 142;

	if (!elementID || elementID == null) {
		elementID ='player_div';
	}
	//if (detectIE() == "7" || detectIE() == "8" || detectIE() == "9") {
		//if(os.isXP){
		//	yy = $("#player_div").innerHeight() - __player_skinheight-160;
		//}else{
		//	yy = $("#player_div").innerHeight() - __player_skinheight-180;
		//}
	//}else{
	//	yy = $("#"+elementID).innerHeight(); //- __player_skinheight;
	//}
	if(yy == '100%'){
		if ($("#" + elementID + "").height() > 0) {
			yy = $("#"+elementID+"").height() - __player_skinheight;
		}else{
			yy = (window.innerHeight) - __player_skinheight;
		}
	}else{
		if ($("#" + elementID + "").height() > 0) {
			yy = $("#"+elementID+"").height() - __player_skinheight;
		}else{
			yy = (window.innerHeight) - __player_skinheight;
		}
	}
	yy =  (yy>142) ? (yy+'px') : '650px' ;
	xx =  (xx == '100%') ? '100%' : (xx+'px');
	//console.log("video height : "+yy+", body height : "+$("body").innerHeight()+", player_div hieght : "+$("#player_div").innerHeight());
	var poster		= '/image/mediacast_250.png';
	var style		= 'z-index:1;padding:0;margin:0;object-fit:fill;background-color:#333333;width:'+xx+';height:'+yy+';';
	//var style		= 'z-index:1;padding:0;margin:0;object-fit:fill;background-color:#333333;width:100%;height:100%';
	var style_hidden = 'style="display:none;"';
	var tag='';
	try{
		tag+= '<div id=player_div2 name=player_div2 style="'+style+'">';
		tag+= '<a id=player style="'+style+'"></a>';
		tag+= '</div>';

		var install_url = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
		tag+= '<iframe id="iframe_install" name="iframe_install" src="' + install_url + '" style="display:none;width:100%;height:860px" frameborder=0 "></iframe>';

		tag+= '<iframe id="iframe_keeper_check" name="iframe_keeper_check" ' + style_hidden + ' ></iframe>\n ';
		tag+= '<iframe id="player_skin" name="player_skin" src="' + __player_skinfile + '?flash=1" width="100%" frameborder="0" style="margin-top: 0px!important;padding:0;margin:0;width:100%;height:'+__player_skinheight+'px;"></iframe>';
		tag+= '<iframe id="player_bookmark" name=player_bookmark ' + style_hidden + '></iframe>';
		tag+= '<div id="_div_keeper_" name="_div_keeper_"  style="display:none;" ></div>\n ';
		tag+= '<div id="_div_function_" name="_div_function_"  style="display:none;" ></div>\n ';
		tag+= '<div id="watermark_div" style="position:absolute;z-index:2147483647;float:top;overflow:hidden;"></div>';


	} catch(e) { alert(e.Message); }
	console.log('__player_id : ' + __player_id);
	console.log('tag : ' + tag);
	//document.getElementById('player_div').innerHTML = tag;
	document.getElementById(__player_id).innerHTML = tag;
	if(__player_watermark_id.length >0 && __player_watermark_type>-1 ) setTimeout('watermark_moveto();',1000);

	if( __player_check_keeper<1) {
		if(__player_hls){
			onAuthorizedHLS(url);
		}else{
			onAuthorized( url );
		}
	}
	return ;
}


function make_videotag( xx,yy, url,elementID )
{
	__player_httpurl = url;
	__player_token = url;
	__player_type = 1;
	if (elementID == null) {
		elementID = 'player_div';
	}

	//console.log($("#"+elementID+"").height() );
	//console.log(__player_skinheight);
	if(yy == '100%'){
		if ($("#" + elementID + "").height() > 0) {
			yy = $("#"+elementID+"").height() - __player_skinheight;
		}else{
			yy = (window.innerHeight) - __player_skinheight;
		}
	}else{
		if ($("#" + elementID + "").height() > 0) {
			yy = $("#"+elementID+"").height() - __player_skinheight;
		}else{
			yy = (window.innerHeight) - __player_skinheight;
		}
	}

	//console.log($("#"+elementID+"").width()*0.85);

	yy =  (yy>80) ? (yy+'px') : '80px' ;
	//yy =  (yy == '100%') ? '100%' : (yy+'px');

	xx =  (xx == '100%') ? '100%' : (xx+'px');

	var poster		= '/image/mediacast_250.png';
	var style		= 'z-index:1;padding:0;margin:0;object-fit:fill;background-color:#333333;width:'+xx+';height:'+yy+';';
	var style_hidden = 'style="display:none;height:85%"';
	console.log('style');
	console.log(style);	console.log('__player_httpurl');
	console.log(__player_httpurl);
	var tag='';
	try{
		tag+='<video id="player_video" '+(__player_video_autoplay==1?'autoplay':'')+'  style="'+style+'" >';//2017.01.11 autoplay여부 변수화
		if(__player_check_keeper==0) tag+=  '<source src="' + __player_httpurl + '" type="video/mp4">';
		//console.log("subtitles length : "+__player_subtitles.length);
		var ii=0;
		for(var k in __player_subtitles ){
			var label = "";
			var defaults = "";
			if(__player_subtitles[k]){
				if(k == 'ko'){
					label = '한국어';
				}else if(k=='en'){
					label = 'English';
				}else if(k=='zh'){
					label = 'Chinese';
				}else if(k=='ja'){
					label = 'Japanese';
				}
				if(ii==0) defaults = "default";
				tag+='<track crossorigin="anonynmous" src=\''+__player_subtitles[k]+'\' kind=\'subtitles\' label=\''+label+'\'  srclang=\''+k+'\' '+defaults+'>';
				ii++;
			}
		}

		tag+=  'Your browser does not support the video tag. </video>\n';

		var install_url = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
		//tag+= '<iframe id="iframe_install" name="iframe_install" src="' + install_url + '" style="display:none;width:100%;height:100%" frameborder=0 "></iframe>';

		tag+= '<iframe id="iframe_keeper_check" name="iframe_keeper_check" ' + style_hidden + ' ></iframe>\n ';
		tag+= '<iframe id="player_skin" name="player_skin" src="' + __player_skinfile + '" width="100%" frameborder="0" style="height:100%!important;padding:0;margin:0;width:100%;height:'+__player_skinheight+'px;"></iframe>';
		tag+= '<iframe id="player_bookmark" name=player_bookmark ' + style_hidden + '></iframe>';
		tag+= '<div id="_div_keeper_" name="_div_keeper_"  style="display:none;" ></div>\n ';
		tag+= '<div id="_div_function_" name="_div_function_"  style="display:none;" ></div>\n ';
		tag+= '<div id="watermark_div" style="position:absolute;z-index:2147483647;float:top;overflow:hidden;"></div>';


	} catch(e) { alert(e.Message); }
	console.log('__player_id : '+__player_id);
	document.getElementById(__player_id).innerHTML = tag;
	if(__player_watermark_id.length >0 && __player_watermark_type>-1 ) setTimeout('watermark_moveto();',1000);

	return ;
}
/*
function videoResizeHeight()
{
	if(__player_type==1) {
		$("#player_video").width ( $("body").width()  );
		$("#player_video").height ( $("body").height()- 100 );
		$("#player_skin").width ( $("body").width() );
	}
	if(__player_type==2) {
		//video_resize();
		//$("#player_div2").width ( $("body").width()  );
		//$("#player_div2").height ( $("body").height()- 100 );
	}

}
*/



//---------------------------------------------------
// 실행부분 스크립트
//---------------------------------------------------
function make_param()
{
	var param =
		"url="+__player_httpurl+"&"+
		"skinmode="+__player_skinmode+"&"+
		"skinfile="+__player_skinfile+"&"+
		"skinheight="+__player_skinheight+"&"+
		"checkevent="+__player_chk_event+"&"+
		"streaming="+__player_chk_streaming+"&"+
		"autohide="+__player_chk_skinautohide+"&"+
		"capturevideo="+__player_capture_video+"&"+
		"capturescreen="+__player_chk_capture_baduser+"&"+
		"bookmarkmenu="+__player_chk_bookmarkmenu+"&"+
		"videocodec="+__player_video_codec+"&"+
		"skinmenu="+__player_chk_skinmenu+"&"+
		"bglogo="+__player_bglogo+"&"+
		"cachetype="+__player_cache_type+"&"+
		"cachesize="+__player_cache_size+"&"+
		"ExpireCache="+__player_cache_expirelimit+"&"+
		"Progressive="+__player_chk_progressive+"&"+
		"mp4splitter="+__player_mp4splitter+"&"+
		"mirroring="+__player_mirroring+"&"+
		"FitScreen="+__player_fitscreen+"&"+
		"keeper="+__player_chk_keeper+"&"+
		"CheckVirtual="+__keeper_virtual+"&"+
		"CheckTerminal="+__keeper_terminal+"&"+
		"CheckVolume="+__keeper_volume+"&"+
		"KillMessenger="+__keeper_messenger+"&"+
		"CheckApple="+__keeper_apple+"&"+
		"markinterval="+__player_watermark_interval+"&"+
		"markduration="+__player_watermark_duration+"&"+
		"marksize="+__player_watermark_size+"&"+
		"marktype="+__player_watermark_type+"&"+
		"markcolor="+__player_watermark_color+"&"+
		"markfont="+__player_watermark_font+"&"+
		"videorender="+__player_video_render+"&"+
		"audiorender="+__player_audio_render+"&"+
		"SMI="+__player_caption_file+"&"+
		"BufferSize="+__player_buffersize+"&"+
		"CaptionStyle="+__player_caption_style+"&"+
		"Callback="+__player_server+"&"+
		"token=" +__player_token + "&" +
		"notiserver=" + __player_authserver  + "&" +
		"notipage=" + __player_authserver_page + "&" +
		"version=" + __player_version + "&" +
		"video=1";
	if( __player_chk_urlencoded >0) param = param.replace('url=','url2=');
	//alert(param);
	return param;
}





//var chk_app_installed = false;
//var __player_keeper_notinstalled =false;
var check_init=false;
var check_alert_filtering =false;

function make_heartbeat()
{
	var appUrl='http://localhost:5757/player?event=heartbeat&token='+ __player_token;
	//$("#iframe_keeper").attr('src', appUrl );  // videokeeper 시작명령
	$.get(appUrl, function(data){

		data = make_keeper_iframe(data);
		//console.log(data);
		//alert(data);
		if(data){
			$("#_div_keeper_").html(data);
		}
	});
	//setTimeout( function() { keeper_runner_html5(appUrl);} , 1500 );
}

function make_seeking()
{
	if(__player_check_keeper<1) return;
	var	 appUri = 'http://localhost:5757/player?event=seeking';
	$.get(appUri, function(data){
		if(data){
			data = make_keeper_iframe(data);
			$("#_div_keeper_").html(data);
		}
	});
}

function keeper_runner_html5 (url)
{
	// 최초 시작할때 3초뒤부터 체크할 것
	if(check_init==false) {
		check_init = true;
		setTimeout( function() { keeper_runner_html5(url);} , 2000 );
		return;
	}

	try
	{
		if( _video.src.length >1) {  // 재생이 시작되었다면
			if(_video.style.display=='none' ) {
				parent.location.reload(); // 새로설치된 경우라면...
				return ;
			}
			else {
				setInterval( 'make_heartbeat()', 1000 );
				return;
			}
		}
	}
	catch (e) { }

	//------------------------------------------
	// 재생화면을 숨기고, 설치안내창을 표시한다
	//------------------------------------------
	_video.style.display = 'none';				// html5

	//if (typeof window.external.msActiveXFilteringEnabled != "undefined"
	//			&& window.external.msActiveXFilteringEnabled() == true)

	var install_url = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
	document.location.href=install_url;
	/*
	else {

		$("#iframe_skin").css("display", "none");
		$("#iframe_install").css("display", "");
		$("#iframe_keeper").css("display", "");
		$("#iframe_keeper").attr('src', url);  // videokeeper 시작명령

		setTimeout( function() { keeper_runner_html5(url);} , 3000 );
	}
	*/
}



function keeper_runner_flash (url)
{
	try
	{
		if(_flowplayer != null) { // 재생이 시작되었다면
			if( document.getElementById('player_div2').style.display =='none' ) {
				//parent.location.reload(); // 새로설치된 경우라면...
			}
			else {
				setInterval( 'make_heartbeat()', 1000 );
				return;
			}
			return;
		}
	}
	catch (e) {}

	//------------------------------------------
	// 재생화면을 숨기고, 설치안내창을 표시한다
	//------------------------------------------
	$("#player_div2").css("display","none");	// flash

	//if (typeof window.external.msActiveXFilteringEnabled != "undefined" &&
	//	window.external.msActiveXFilteringEnabled() == true)

	var install_url = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
	if (detectIE() == "7" || detectIE() == "8" || detectIE() == "9") {
		//window.open(install_url,'install','scrollbars=no,width=550,height=450');
		if(window.opener) {
			window.opener.location.href=install_url;
			self.close();
		}else{
			document.location.href=install_url;
		}
	} else {
		document.location.href=install_url;
	}
	/*
	else {

		$("#iframe_skin").css("display", "none");
		$("#iframe_install").css("display", "");
		$("#iframe_keeper").css("display", "");
		$("#iframe_keeper").attr('src', url);  // videokeeper 시작명령
		setTimeout( function() { keeper_runner_flash(url);} , 3000 );

	}
	*/
}

function make_keeper_iframe (str) {
    str = str.replace(/(<([^>]+)>)/ig,"");
	str = str.replace(/window.parent./gi, "");
	str = str.replace(/[\"]/gi, "");
	str = str.replace(/postMessage/gi, "");
	str = str.replace(/\, \*\)\;/gi, "");
	str = str.replace(/\,\*\)\;/gi, "");
	str = str.replace(/\(on/gi, "on");
	str = "<script>"+str+"\n</script>";
	//console.log('str');
	//console.log(str);
	return str;
}

function startKeeper()
{
	if(__player_check_keeper<1) return;
	var	 appUri = 'http://localhost:5757/opener?event=open&'+ make_param() ;
	//$("#iframe_keeper").attr('src',appUri);				//iframe 에서 이벤트 실행

	$.get(appUri, function(data){

		data = make_keeper_iframe(data);
		if(data){
			$("#_div_keeper_").html(data);
		}
	});

	if( __player_type==1) setTimeout( function() { keeper_runner_html5(appUri);} , 2000 );
	if( __player_type==2) setTimeout( function() { keeper_runner_flash(appUri);} , 2000 );
}

//function onMaypleCallback(param, value) { alert( 'OnMaypleCallback : param='+param + ',value='+value); }
function onMaypleCallback(param, value) { window.parent.postMessage(value, "*"); }
function get_mac_ip()
{
	var	 appUri = 'http://localhost:5757/function?f=getmacip' ;
	$.get(appUri, function(data){
		if(data){
			$("#_div_function_").html(data);
		}
	});
}

$(window).resize(function(){ video_resize(); }); // player-html5.js 와 player-flash.js 에 정의되어있음
;var _flowplayer=null;
var _player;
var _clip;
var _video_repeatleft=0;
var _video_repeatright=0;
var _video_repeatstate=0;
var _video_fullscreen =0;
var _video_started = false;
var _video_muted = false;


//----------------------------------
// Keeper 컨트롤
//----------------------------------
var AuthFailCounter=0;
var Terminated = false;
var Watermark='Watermark' ;
var tHeartbeatLatest =0;

function onAuthorizedFail(msg)
{
	if(Terminated==false && AuthFailCounter>10) {
		video_stop();
		Terminated= true;
		alert(msg);
	}else AuthFailCounter = AuthFailCounter+1;
}

function onAuthorized(x)
{
	console.log( 'onAuthorized=' + x );
	console.log( '__player_last_position=' + __player_last_position);
	if(__player_hls){
		onAuthorizedHLS(x);
		return;
	}

	if(__player_caption_flash){
		var caption = __player_caption_flash;
		onAuthorizedCaption(x, caption);
		return;
	}
	//console.log( 'onAuthorized=' + x );
	var t = new Date();
	tHeartbeatLatest = t.getTime();

	console.log('__player_video_autoplay : ' + __player_video_autoplay);

	$f("player", "http://releases.flowplayer.org/swf/flowplayer.commercial-3.2.18.swf",
		{
			key : '#$55fc11f064dc65aabd9',	// mediacast.co.kr
			plugins: {
				controls:{display:"none" ,scrubber:"false" },
				content: {
					url: "http://releases.flowplayer.org/swf/flowplayer.content-3.2.9.swf"
					,width:100, height:24, top:10, right: 10,backgroundColor:"transparent",marginTop:0,opacity:0.9
					,textAlign:"right",padding:0,border:"none",body: {fontSize:16}
					,html: "&nbsp;"+__player_watermark_id
				},
				nginx: {
					url: "http://releases.flowplayer.org/swf/flowplayer.pseudostreaming-3.2.13.swf"
				}
			},
			clip: {
				autoPlay: __player_video_autoplay == 1 ? true : false,
				url: x,
				provider:'nginx'
			}
		});

	//if(__player_last_position>0){
	//	$f().seek(__player_last_position);
	//}
	_flowplayer = flowplayer();
	$f('player').onStart(function(){
		$f('player').seek(__player_last_position);
		console.log( '__player_last_position='+__player_last_position );
	});
	//_flowplayer.seek(__player_last_position);
	//alert(x);
}

function onAuthorizedCaption(x, caption)
{
	console.log( 'onAuthorizedCaption=' + x );

	if(__player_hls){
		onAuthorizedHLS(x);
		return;
	}
	//console.log( 'onAuthorizedCaption=' + x );
	var t = new Date();
	tHeartbeatLatest = t.getTime();


	$f("player", "http://releases.flowplayer.org/swf/flowplayer.commercial-3.2.18.swf",
		{
			key : '#$55fc11f064dc65aabd9',	// mediacast.co.kr
			plugins: {
				controls:{display:"none" ,scrubber:"false" },
				captions: {
					url: "flowplayer.captions-3.2.10.swf",

					// pointer to a content plugin (see below)
					captionTarget: 'captionp'
				},
				content: {
					url: "http://releases.flowplayer.org/swf/flowplayer.content-3.2.9.swf"
					,width:100, height:24, top:10, right: 10,backgroundColor:"transparent",marginTop:0,opacity:0.9
					,textAlign:"right",padding:0,border:"none",body: {fontSize:16}
					,html: "&nbsp;"+__player_watermark_id
				},
				captionp: {
					url: "http://releases.flowplayer.org/swf/flowplayer.content-3.2.9.swf",
					bottom: 25,
					width: '80%',
					height:60,
					backgroundColor: 'transparent',
					backgroundGradient: 'low',
					borderRadius: 4,
					border: 0,

					style: {
						'body': {
							fontSize: '20',
							fontFamily: 'Arial',
							textAlign: 'center',
							color: '#000000'
						}
					}

				},
				nginx: {
					url: "http://releases.flowplayer.org/swf/flowplayer.pseudostreaming-3.2.13.swf"
				}
			},
			clip: {
				//autoPlay:true,
				autoPlay: __player_video_autoplay == 1 ? true : false,
				url: x,
				captionUrl: caption,
				provider:'nginx'
			}
		});
	_flowplayer = flowplayer();
}

function onAuthorizedHLS(x)
{
	//alert( 'onAuthorized=' + x );
	console.log( 'onAuthorizedHLS=' + x );

	var t = new Date();
	tHeartbeatLatest = t.getTime();
	var skin = "none";
	if(__skinHidden){
		skin = "block";
	}
	var rand = Math.floor((Math.random() * 100000000) + 1);
	$f("player", "http://releases.flowplayer.org/swf/flowplayer.commercial-3.2.18.swf?"+rand,
		{
			key : '#$55fc11f064dc65aabd9',	// mediacast.co.kr
			//debug : true,

			plugins: {
				f4m: {url : "http://releases.flowplayer.org/flowplayer.f4m/flowplayer.f4m-3.2.10.swf?"+rand},
				httpstreaming: { url: "http://releases.flowplayer.org/flowplayer.httpstreaming/flowplayer.httpstreaming-3.2.11.swf?"+rand },

				controls:{display:skin ,scrubber:"false" },

				content: {
					url: "http://releases.flowplayer.org/swf/flowplayer.content-3.2.9.swf?"+rand
					,width:100, height:24, top:10, right: 10,backgroundColor:"transparent",marginTop:0,opacity:0.9
					,textAlign:"right",padding:0,border:"none",body: {fontSize:16}
					,html: "&nbsp;"+__player_watermark_id
				},
				flashls: {
					url: "http://flash.flowplayer.org/media/swf/flashlsFlowPlayer-0.4.4.22.swf?"+rand
				}
			},
			clip: {
				autoPlay:true,
				url: x+rand,
				ipadUrl : x,
				live : __player_hls_live,
				provider:'flashls',
				urlResolvers: "flashls",
				accelerated: true,
				autoBuffering: true
			}
			/*
			 ,log: {
			 level: 'debug',
			 filter: 'org.flowplayer.model.Clip.*'
			 }
			 */
		});
	_flowplayer = flowplayer();
}





var heartBeatZeroCounter=0;
function onHeartBeat(x)
{
	if(Terminated==true) return;
	if( __player_check_keeper<1) return;
	if(x==1) {
		var t = new Date();
		tHeartbeatLatest = t.getTime();
	}

	if(x==0) {
		heartBeatZeroCounter++;
		if(heartBeatZeroCounter < 7){ return;}
		Terminated = true;
		video_stop();
		video_end();
		$("#player_div2").html("");

		window.resizeTo(550,480); //By(-170,-120);
		//document.location.href="http://"+ __player_server + "/user_popup/warning_keeperstop.php"; 

	}
	if(x==-1) {
		Terminated = true;
		video_stop();
		$("#player_div2").html("");

		window.resizeTo(550,480); //By(-170,-120);
		document.location.href= "http://"+ __player_server + "/user_popup/warning.php";

	}
	if(x==-2) {
		Terminated = true;
		video_stop();
		alert("동일한 ID를 사용하는 중복사용자가 있습니다.");
	}
}

function onCapture(url)
{
	Terminated = true;
	video_stop();
	$("#player_div2").html("");

	document.location.href= url; //"http://"+ __player_server + "/user_popup/warning.php"; 
	window.resizeTo(550,480); //By(-170,-120);

}


//-------------------------------
// video size 컨트롤
//-------------------------------
function video_resize()
{
	/*	try
	 {
	 //if(strstr(get_browser(),"ie") ) {
	 //document.getElementById('mcast_div').style.height='495px';
	 //	window.resizeTo(740,528); //,-50);
	 //}
	 //else
	 {
	 var player = document.getElementById('player_div');
	 player.style.width= window.innerWidth;
	 player.style.height= window.innerHeight - 100;
	 }
	 }
	 catch (e)	{	}
	 */
	$("#player_div2").width ( $("#player_div").width()  );
	$("#player_div2").height ( $("#player_div").height() - __player_skinheight);
	$("#player_skin").width ( $("#player_div").width() );

}

//------------------------
// control function
//------------------------
var _video_bookmarkurl="";
var _video_bookmark ="";
var _video_bookmarkparam="";

function video_play()			{ $f().play();__playstate=3; }
function video_pause()			{ $f().pause();__playstate=2; }
function video_stop()			{ $f().stop();video_setposition(0);__playstate=1; }
function video_setposition(p)	{ $f().seek(p); }
function video_getposition()	{ return parseInt( $f().getTime() ); }
function video_getduration()	{
	var durations = parseInt( $f().getClip().fullDuration );
	if(!durations){
		try{
			durations = parseInt($("#player_skin")[0].contentWindow.__dvrFullDuration);
		}catch(e){}
	}
	return durations;
}
function video_setvolume(v)		{ $f().setVolume( parseInt(v/110*100) ); }
function video_getvolume(v)		{ return $f().getVolume() ; }
//function video_setmute(chk)		{ $f().mute();  } 
//function video_setmute(chk)		{ if(chk==1) { $f().mute(); }else{ $f().unmute();} } 
function video_setmute(chk)		{ if($f().getStatus().muted==true) { $f().unmute(); }else{ $f().mute();} }
//function video_setrate(r)		{ if(r==1) r=10; _video.playbackRate = r/10;  } 
function video_setrate(r)		{ return ;}
function video_repeatleft(x)	{ _video_repeatleft=x; }
function video_repeatright(x)	{ _video_repeatright=x; }
function video_repeatdo()		{ _video_repeatstate=1; }
function video_repeatstart()	{ _video_repeatstate=1; }
function video_repeatend()		{ _video_repeatstate=0; }
function video_repeatstop()		{ _video_repeatstate=0; }
function video_fastreverse()	{ video_setposition ( video_getposition()-15 ); }
function video_fastforward()	{ video_setposition ( video_getposition()+15 ); }
function set_bookmark_data (x)			  {	_video_bookmark = x;	}
function set_bookmark_url (x)			  {	_video_bookmarkurl= x;	}
function set_bookmark_key(site,id,title)  { _video_bookmarkparam = "site="+site + "&id=" + id + "&f=" + title; }


var chk_video_fullscreen = false;
var video_prev_width=0, video_prev_height=0;
function video_fullscreen()
{
	var browser = get_browser();
	//alert(browser + ", "+browser.indexOf("msie 11"));
	var user_agent = navigator.userAgent.toLowerCase();
	//IE 11 이하는 브라우저를 screen 사이즈로 변경 이외 크롬, 파폭, 사파리, IE11, IE Edge 는 풀스크린 사용
	if(browser.indexOf("msie")>-1 && ( browser.indexOf("msie 11")!=0 && browser.indexOf("msie 11")!=-1)){
		var video = document.getElementById('player_div2');
		var $video = $("#player_div2");

		var skinHeight = __player_skinheight;
		if(chk_video_fullscreen == false) {

			if(video_prev_width==0) {
				video_prev_width = document.body.offsetWidth; //player.style.width;
				video_prev_height = document.body.scrollHeight; //player.style.height;
			}
			window.resizeTo( screen.width, screen.height );
			//video.style.width = screen.width - 10;
			//video.style.height = screen.height - (browser.indexOf("msie")>-1 ? 200 : 190 );
			setTimeout(function(){

				if(browser.indexOf("msie")>-1){
					$("body").height(screen.height);
					skinHeight = skinHeight +90;
				}
				$("#player_div").height($("body").height());
				$video.width($("#player_div").width());
				$video.height($("#player_div").height()- skinHeight);
				$("#player_skin").width($("#player_div").width());
			}, 500);


		} else {
			if(video_prev_width>10 && video_prev_height>10) {
				window.resizeTo( video_prev_width, video_prev_height);
			}
			//video.style.width = video_prev_width ;
			//video.style.height = video_prev_height - (browser.indexOf("msie")>-1 ? 170 : 160);
			setTimeout(function(){
				if(browser.indexOf("msie")>-1){
					$("body").height(video_prev_height);
					skinHeight = skinHeight +60;
				}
				$("#player_div").height($("body").height());
				$video.width($("#player_div").width());
				$video.height($("#player_div").height()- skinHeight);
				$("#player_skin").width($("#player_div").width());
			}, 500);
		}
		chk_video_fullscreen = (chk_video_fullscreen == false ? true : false);
	}else{
		if(chk_video_fullscreen == false ) {
			//var videocontainer = document.getElementById("__player_div");

			if (user_agent.indexOf('iphone') != -1 || user_agent.indexOf('android') != -1){
				var videocontainer = document.getElementById("player_video");
			} else {
				var videocontainer = document.getElementById("player_div");
			}
			if (videocontainer.requestFullscreen)	{  videocontainer.requestFullscreen(); }
			else if (videocontainer.msRequestFullscreen) { videocontainer.msRequestFullscreen(); }
			else if (videocontainer.mozRequestFullScreen)  {  videocontainer.mozRequestFullScreen();  }
			else if (videocontainer.webkitRequestFullscreen) { videocontainer.webkitRequestFullscreen();  }
			//videocontainer.style.width = "100%";
			//videocontainer.style.height = "100%";
			chk_video_fullscreen = true;
		} else{
			if (document.exitFullscreen) document.exitFullscreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();
			else if (document.mozCancelFullScreen) 	document.mozCancelFullScreen();
			else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
			chk_video_fullscreen = false;
		}
	}

	try{
		//watermark_setposi();
		setTimeout(function(){
			document.getElementById('player_skin').contentWindow.updateProgressFlash();
			document.player_skin.updateProgressFlash();
		}, 100);

	} catch(e){}
}

if (document.addEventListener)
{
	document.addEventListener('webkitfullscreenchange', fullexitHandler, false);
	document.addEventListener('mozfullscreenchange', fullexitHandler, false);
	document.addEventListener('fullscreenchange', fullexitHandler, false);
	document.addEventListener('MSFullscreenChange', fullexitHandler, false);
}

function fullexitHandler()
{
	if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
	{

		////////console.log("FullScreen Runing");
		//$("#player_skin").css("position", "relative");
	}else{

		////////console.log("FullScreen Exit");
		//$("#player_skin").css("position", "static");
	}
}

function video_bookmarkadd()
{
	var posi = video_getposition();

	if(_video_bookmark.length>0) _video_bookmark = _video_bookmark + "," + posi;
	else _video_bookmark = '' + posi;
	var url = _video_bookmarkurl + '?' + _video_bookmarkparam + "&posi="+ posi;
	player_bookmark.location.replace( url );
}

function video_bookmarkdelete(x)
{
	var target = -1;
	var pp = _video_bookmark.split(",");
	var newpp= "";
	for(i=0; i<pp.length; i++) {
		if(pp[i]<1) continue;
		if(i!=x) newpp += (newpp.length>0 ? ",":"") + pp[i];
		else target = pp[i];
	}
	_video_bookmark = newpp;

	var url = _video_bookmarkurl + '?' + _video_bookmarkparam + "&del="+ target;
	player_bookmark.location.replace( url );
}

//---------------------------------
// 컨트롤 스킨데이타 실시간 업데이트
//---------------------------------
function refresh_skin()
{
	try
	{
		/*
		 var t = new Date();
		 if( tHeartbeatLatest>0 && (t.getTime()- tHeartbeatLatest) > 7*1000 ) {
		 onHeartBeat(0);
		 return ;
		 }
		 */
		var dur = video_getduration();
		var posi = video_getposition();
		var vol=  video_getvolume();
		//var chkmute = vol>0? 0:1; 
		var chkmute = $f().getStatus().muted==true? 1:0;
		var rate=  10;
		if(_video_started==false &&  $f().getState() == 3 ) {
			_video_started = true;
			__playstate = 3;
		}

		if($f().getState() == 4){
			__playstate = 2;
		}else if($f().getState() == 3){
			__playstate = 3;
		}

		var playstate	= __playstate;
		var rep_left		= _video_repeatleft;
		var rep_right	= _video_repeatright==0 ? dur:_video_repeatright;
		var rep_doing	= _video_repeatstate;
		var chkfull		= _video_fullscreen;
		var marks		= _video_bookmark;

		player_skin.__RefreshState2 ( playstate, dur, posi, chkmute, vol, rate, rep_left, rep_right, rep_doing, chkfull, marks,0,0);
		if( _video_repeatstate==1) {
			if( posi >  parseInt(_video_repeatright) ) video_setposition(parseInt( _video_repeatleft)+3 );
			if( posi <  parseInt(_video_repeatleft)-2 )  video_setposition(parseInt( _video_repeatleft)+3 );
		}

		//console.log(chkmute);
	}
	catch (e)  	{}
	setTimeout(function(){refresh_skin()},550 );
}
refresh_skin();
video_resize();



$(document).ready(function(){
	$('.video_container').bind('contextmenu',  function () {return false; });
	$("body").append("<div id='__getScript__' style='display:none;' ></div>");
	$("body").keypress(function(e){
		var browser = get_browser();
		if(e.keyCode == 27) {	//esc 키 입력 시 이벤트
			if(browser.indexOf("msie")>-1 && browser.indexOf("msie 11")!=-1){
			}else{
				if(chk_video_fullscreen == true) {
					chk_video_fullscreen = false;
				}
			}
		}
	});
});
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent, function (e) {
	if(e.data) $("#__getScript__").html("<script>"+e.data+"</"+"script>");
}, false);
/* 타 도메인 메세지 전송 추가*/

