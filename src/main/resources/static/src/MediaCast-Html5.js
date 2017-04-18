//-------------------------------------------
// player-html5.js
// html5 videotag와 인터페이스 함수
//-------------------------------------------
/*

김효진 추가 2015-11-13
 - Cross-Domain iframe javascript 통신을 위한 EventListener 추가
 - iframe 내에서 window.parent.postMassage("메세지", "도메인"); 으로 전송
 - 하단 
 김효진 추가 2015-11-17
 풀스크린시 컨트럴패널 보이기
*/

var _video; //= document.getElementById('player_video');
var _video_repeatleft = 0;
var _video_repeatdrag = 0;
var _video_repeatright = 0;
var _video_repeatstate = 0;
var _video_fullscreen = 0;
var _video_started = false;
var __playstate = 0;
var _videoRate = 1;
var tHeartbeatLatest = 0;

//-------------------------------
// video size 컨트롤
//-------------------------------
var track;
$(document).ready(function(){
	_video = document.getElementById('player_video');
	refresh_skin();
	video_resize();
	//_video.addEventListener("play", videoOnplay);




});


var __player_videowidth_init=0;  // 풀스크린 상태 확인을 위해 적용되는 변수
function video_resize() {

	var agent = navigator.userAgent.toLowerCase();
	var isIE;
	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {

		isIE = true;
	}
	else {

		isIE = false;
	}


	var bodyH = window.innerHeight;

	if(isIE){
		if(isFullScreen){
			$("#player_video").height($("#" + __player_id).height() - __player_skinheight);
			//isFullScreen=false;
		}else{

			$("#player_video").height(getCookie('__ori_height'));
			//isFullScreen=true;

		}
	}else{//크롬일경우


		var this__full_height = getCookie('__full_height');
		var __ori_height = getCookie('__ori_height');
		var hasFull = this__full_height && this__full_height != null;


		var h = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;



		$("#player_video").width($("#" + __player_id).width());

		var player_video = $('#player_video');
		var __this_height = player_video.height();
		setCookie('__this_height', __this_height, 1);

		var __this__full_height;

		if (bodyH > __this__full_height) {
			__this__full_height = bodyH;
		}

		if (isFullScreen && getCookie('__ori_height') <= $("#player_video").height() && h <= $("#player_video").height()) {
			$("#player_video").height(getCookie('__ori_height'));

			if (isFullScreen == true) {
				isFullScreen = false;
			}

		}

        var chromeFull = hasFull && $("#player_video").height() != __ori_height && $("#player_video").height() == this__full_height;
		if (!chromeFull) {

			$("#player_video").height($("#" + __player_id).height() - __player_skinheight);

            var playerSkin = $('#player_skin')[0];

            if(!isFullScreen && playerSkin){
				isFullScreen = false;
				setTimeout(function(){
					document.player_skin.mcCancelFullscreen(isFullScreen);
				},100);
            }
		}

		if (getCookie('__ori_height') < getCookie('__this_height')) {
			$("#player_video").height($("#" + __player_id).height() - __player_skinheight);
		}

		$("#player_skin").width($("#" + __player_id).width());

	}


}


//------------------------
// control function
//------------------------
//재생 상태 확인
var alertCounter = 0;

function onPlayCheck() 
{
	var obj= document.getElementById('player_video');
	if(obj.readyState==0 && Terminated == false && obj.networkState == 3 ){
		if(alertCounter == 10){
			//alert('동영상 파일을 찾을 수 없습니다.');
			console.log('동영상 파일을 찾을 수 없습니다.');
			//video_stop();
			return;
		}
		alertCounter++;
		setTimeout('onPlayCheck()', 1000); 
		return;
	}
}


function video_play()				{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_play();}, 100);
		return;
	}
	_video.play();
	video_setrate(_videoRate);

	__playstate=3;
	onPlayCheck();

}
function video_pause()			{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_pause();}, 100);
		return;
	}
	_video.pause();__playstate=2; 
}
function video_stop()				{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_stop();}, 100);
		return;
	}
	_video.pause();video_setposition(0);__playstate=1; 
}
function video_end()				{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_end();}, 100);
		return;
	}
	_video.src=''; 
}
function video_setposition(p)	{ 
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setposition(p);}, 100);
		return;
	}
	if(_video.readyState !=0){	_video.currentTime = p; }
	make_seeking();
}


/**
 * 쿠키 생성
 * @param cName : 쿠키명
 * @param cValue : 쿠키값
 * @param cDay : 유효기간
 */
var EXPIRE_COOKIE_DAY = 30 ;//날짜
function setCookie(cName, cValue, cDay) {
	var expire = new Date();

	if(!cDay) cDay = EXPIRE_COOKIE_DAY;

	expire.setDate(expire.getDate() + cDay);

	var cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.

	if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';

	document.cookie = cookies;
}

/**
 * 쿠기 조회
 * @param cName : 쿠키명
 * @returns {*}
 */
function getCookie(cName) {
	console.log('cName : '+cName);
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if (start != -1) {
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1)end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}

function video_lastposition()	{
	//todo: 추후 child와 통신해서 가져올수 있으면 진행
}
function video_getposition()	{ 
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_getposition();}, 100);
		return;
	}
	if(_video.readyState ==0) return 0;
	return parseInt(_video.currentTime); 
}
function video_gettime()	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_gettime();}, 100);
		return;
	}
	if(_video.readyState ==0) return 0;
	return _video.currentTime;
}
function video_setvolume(v)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setvolume(v);}, 100);
		return;
	}
	_video.volume= v/110;
}
function video_getvolume(v)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_getvolume(v);}, 100);
		return;
	}
	return _video.volume;
}
function video_setmute(chk)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setmute(chk);}, 100);
		return;
	}
	_video.muted = (_video.muted==true ? false : true );

}
function video_getmute(chk)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_getmute(chk);}, 100);
		return;
	}
	return _video.muted;
}
function video_setrate(r)			{ 
	if(r==1) 
		r=10; 
	_video= document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setrate(r);}, 100);
		return;
	}
	_videoRate = r;
	_video.playbackRate = r/10;  
}

function video_getrate()			{

	_video= document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		return;
	}

	return _video.playbackRate;
}
function video_repeatleft(x)		{ _video_repeatleft=x; }
function video_repeatright(x)	{ _video_repeatright=x; }
function video_repeatdo()		{ _video_repeatstate=1; }
function video_repeatstart()	{ _video_repeatstate=1; }
function video_repeatdragend()		{ _video_repeatdrag=1; }
function video_repeatdraging()		{ _video_repeatdrag=0; }
function video_repeatend()		{ _video_repeatstate=0; }
function video_repeatstop()	{ _video_repeatstate=0; }
function video_fastreverse()	{ video_setposition ( video_getposition()-15 ); }
function video_fastforward()	{ video_setposition ( video_getposition()+15 ); }
function video_skip(time) { video_setposition(eval(video_gettime() + eval(time))); }
function video_state()				{ return __playstate; }
function video_getplayvideo()				{ return _video; }
function video_getplaysrc() {

    var src = $('#player_video')[0].getElementsByTagName("source")[0].src;
    //console.log('src : '+src);
	return src;
}


/**
 * VIDEO ONLOADED HTML5 todo: 1.
 */
function video_onloaded() {
	console.log('video_onloaded : ');
}

/**
 * VIDEO ONENDED HTML5 todo: 1.
 */
function video_onended() {
	console.log('video_onended : ');
}

//-----------------------
// 자막 제어
//-----------------------

/**
 * 자막보이기
 * @returns {string|string}
 */
function video_trackshow(lang)		{
    $($('video').prop('textTracks')).prop('mode', function(){
        return this.language == lang ? 'showing' : 'disabled';
    });
    return lang;
}

/**
 * 자막숨김
 * @returns {string|string}
 */
function video_trackhide()		{
    $($('video').prop('textTracks')).prop('mode', function(){
        return 'disabled';
    });
}

/**
 * 자막 언어 변경
 * @param lang
 */
function video_trackchange(lang) {
    $($('video').prop('textTracks')).prop('mode', function(){
        return this.language == lang ? 'showing' : 'disabled';
    });
}


/**
 * 활성화된 자막정보
 * @returns {{}}
 */
function video_trackinfo(){
    var result = {};
    $($('video').prop('textTracks')).prop('mode', function(){
        if(this.mode=='showing') result = this;
    });
    return result;

}

//-----------------------
// 북마크 제어
//-----------------------

var _video_bookmarkurl="";
var _video_bookmark =""; //'<?=$bookmark_list?>';
var _video_bookmarkparam="";

function set_bookmark_data (x)	{	_video_bookmark = x;	}
function set_bookmark_url (x)		{	_video_bookmarkurl= x;	}
function set_bookmark_key(site,id,title)  { _video_bookmarkparam = "site="+site + "&id=" + id + "&f=" + title; } 

function video_bookmarkadd()
{
	var posi = video_getposition(); 
	if(_video_bookmark.length>0) _video_bookmark = _video_bookmark + "," + posi;
	else _video_bookmark = '' + posi;
	if(_video_bookmarkurl){
		var url = _video_bookmarkurl + '?' + _video_bookmarkparam + "&posi="+ posi;
		player_bookmark.location.replace( url ); 
	}
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
	if(_video_bookmarkurl){
		var url = _video_bookmarkurl + '?' + _video_bookmarkparam + "&del="+ target;
		player_bookmark.location.replace( url ); 
	}
}


//--------------------------
// Fullscreen 제어
//--------------------------

var isFullScreen = false;
var user_agent = navigator.userAgent.toLowerCase();
// 쿠키 생성
function setCookie(cName, cValue, cDay) {
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
	if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
	document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if (start != -1) {
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1)end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}
function video_fullscreen() {
	var __ori_height;
	var __full_height;
	var __this_height;
	var player_video = $('#player_video');
	__this_height = player_video.height();
	setCookie('__this_height', __this_height, 1);

	if (getCookie('__ori_height') > getCookie('__this_height')) {
		isFullScreen = true;
	}

	if (isFullScreen == false) {

		if (user_agent.indexOf('iphone') != -1 || user_agent.indexOf('android') != -1) {
			var videocontainer = document.getElementById("player_video");
		} else {
			var videocontainer = document.getElementById(__player_id);
		}
		if (videocontainer.requestFullscreen) {
			videocontainer.requestFullscreen();
		}
		else if (videocontainer.msRequestFullscreen) {
			videocontainer.msRequestFullscreen();
		}
		else if (videocontainer.mozRequestFullScreen) {
			videocontainer.mozRequestFullScreen();
		}
		else if (videocontainer.webkitRequestFullscreen) {
			videocontainer.webkitRequestFullscreen();
		}

		__ori_height = player_video.height();

		setCookie('__ori_height', __ori_height, 1);

		isFullScreen = true;

	} else {

		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
		else if (document.mozCancelFullScreen)    document.mozCancelFullScreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		isFullScreen = false;
		__full_height = $('#player_video').height()
		var h = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;

		setCookie('__full_height', __full_height, 1);

		setTimeout(function () {
			player_video.height(getCookie('__ori_height'));

		}, 100);
	}


	try {

		watermark_setposi();


		setTimeout(function () {
			//todo: 두개를 업데이트하는 이유를 모르겠음. 먼저 지워서 , 브라우저별로 확인
			document.getElementById('player_skin').contentWindow.updateProgress();
			document.player_skin.updateProgress();

		}, 100);

	} catch (e) {
	}
	return isFullScreen;
}
//todo: 바로 걸림
if (document.addEventListener)
{
    document.addEventListener('webkitfullscreenchange', fullexitHandler, false);
    document.addEventListener('mozfullscreenchange', fullexitHandler, false);
    document.addEventListener('fullscreenchange', fullexitHandler, false);
    document.addEventListener('MSFullscreenChange', fullexitHandler, false);
}

function fullexitHandler()
{
    //todo: ESC 때문에 제대로 동작하지 않음.

}

function video_getfullscreen() 
{
	if (__player_videowidth_init < 1 || window.innerWidth == __player_videowidth_init) return 0;
	else return 1;
}




//----------------------------------
// Keeper 컨트롤
//----------------------------------

var AuthFailCounter=0;
var Terminated = false;
var keeperInstalled = false;
function onAuthorizedFail(msg) 
{ 
	_video = document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){onAuthorizedFail(msg);}, 100);
		return;
	}
	if(Terminated==false && AuthFailCounter>5 ) {
		//_video.src='';//_stop();
		video_end();
		$("#player_video").html("");
		Terminated= true;
		alert(msg); 
	}else AuthFailCounter = AuthFailCounter+1;
}
function onAuthorizedFailKeeper(msg) 
{ 
	_video = document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){onAuthorizedFail(msg);}, 100);
		return;
	}
//console.log("onAuthorizedFailKeeper : "+Terminated+", "+AuthFailCounter+", "+keeperInstalled);
	if(Terminated==false && AuthFailCounter>5 && keeperInstalled == false) {
		//_video.src='';
		//video_stop();
		video_end();
		$("#player_video").html("");
		Terminated= true;
		alert(msg); 
	}else {
		AuthFailCounter = AuthFailCounter+1;
	}
	var browser = get_browser();
	//console.log("browser = "+browser);
	if(browser != "chrome" && browser != "firefox" && browser != "safari" ){
		if(Terminated==false && AuthFailCounter>2 && keeperInstalled == true ){
			//video_stop();
			video_end();
			$("#player_video").html("");
			Terminated= true;
			//alert(msg);
			var urlNotFoundApp = 'http://'+__player_server+'/user_popup/MaypleInstallerChrome.php?f='+__player_installer;
			 if(confirm( __player_message_noFound )){
				document.location = urlNotFoundApp;
			  }else{
				return;
			  }
		}
	}
}

function onAuthorized(x)  
{
    console.log('onAuthorized');
	_video = document.getElementById('player_video');

    //_video = document.getElementsByClassName('video');

	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){onAuthorized(x);}, 100);
		return;
	}
	
	if(_video.src.length > 1) return;

	//To-do ArrayBuffer 사용
	/* Test */


	/* Test */
	_video.src = x; //decodeURI(x); //x; //.replace(/%20/g,'+');
	//console.log(x);

	//2017.01.11 autoplay 변수화
	if(__player_video_autoplay == 1){
		video_play();
	}
	//set_lms_init();

	var t = new Date(); 
	tHeartbeatLatest = t.getTime(); 

}


function onInstallRequired(x)  
{  
}


var onHeartBeatFailCounter = 0;
function onHeartBeat(x)
{
	if(x==1) { 
		var t = new Date(); 
		tHeartbeatLatest = t.getTime(); 
	}

	//if( __mayple_keeper_notinstalled==true) return;
	_video = document.getElementById('player_video');
	//console.log("onHeadtBeat " + x);
	//console.log(Terminated);
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){onHeartBeat(x);}, 100);
		return;
	}
	if(Terminated==true) return;

	if(x==0) {
		Terminated = true; //AuthFailCounter=100;
		_video.src='';
		video_stop();
		video_end();
		$("#player_video").html("");	
		
		//alert(__player_message_stopped);
		window.resizeTo(550,480); //By(-170,-120);
		//document.location.href="http://"+ __player_server + "/user_popup/warning_keeperstop.php"; 
			
	}
	if(x==-1) {
		Terminated = true; 

		_video.src='';
		video_end();
		$("#player_video").html("");

		window.resizeTo(550,480); //By(-170,-120);
		document.location.href= "http://"+ __player_server + "/user_popup/warning.php"; 
	}

	if(x==-2) {

		Terminated = true; 
		video_end();
		$("#player_video").html("");		
		alert(__player_message_dupuser);
	}
}

function onCapture(url)
{
	Terminated = true; 
	_video.src='';
	video_end();
	$("#player_video").html("");
	document.location.href= url; //"http://"+ __player_server + "/user_popup/warning.php"; 
	window.resizeTo(550,480); //By(-170,-120);
}



//---------------------------------
// 컨트롤 스킨데이타 실시간 업데이트
//---------------------------------
var tShow;
var repeatedCnt = 1;
function refresh_skin() {
    //console.log('refresh_skin : ');
	try
	{
		var t = new Date();
		if (tHeartbeatLatest > 0 && (t.getTime() - tHeartbeatLatest) > 7 * 1000) {
			onHeartBeat(0);
			return ;
		} 

	
		_video= document.getElementById('player_video');
		var dur = parseInt(_video.duration);


		var chkmute = _video.muted==true? 1:0;
		//var posi = parseInt(_video.currentTime);
		var posi = _video.currentTime;

		var vol = parseInt(_video.volume*110);
		var rate=  _video.playbackRate * 10;
		if (vol==110) {vol=47;}
		if(_video_started==false &&  _video.readyState==4) { 
			_video_started = true;
			if (_video.paused){
				__playstate = 2;
			}else{
				__playstate = 3;
			}
		}
		if (_video.paused){
			__playstate = 2;
		}else{
			__playstate = 3;
		}
		var playstate	= __playstate; 
		

		var rep_left	= _video_repeatleft;
		var rep_right 	= _video_repeatright == 0 ? dur : _video_repeatright;
		var rep_doing	= _video_repeatstate;
		var chkfull		= _video_fullscreen;
		var marks		= _video_bookmark;

		var ADJUST_NUM = 0;

		if (_video.duration > 0)
			player_skin.__RefreshState2 ( playstate, dur, posi, chkmute, vol, rate, rep_left, rep_right, rep_doing, chkfull, marks,0,0);

        //console.log('p::: _video_repeatstate : ' + _video_repeatstate);
        //console.log('p::: _video_repeatleft : ' + _video_repeatleft);
        //console.log('p::: _video_repeatright : ' + _video_repeatright);

        var getRepeatCnt = player_skin.getRepeatCnt();
        //console.log('p::: getRepeatCnt : ' + getRepeatCnt);

        if (_video_repeatstate == 1) {

            // 횟수가 있을경우
            if ($.isNumeric(getRepeatCnt)) {
                //잘못된 케이스
                if (_video_repeatright < _video_repeatleft) {
                    player_skin.mcRepeatStopFromParent();

                } else {
                    if (posi > _video_repeatright + ADJUST_NUM) {
                        repeatedCnt++;

                        if (_video_repeatdrag) {
                            repeatedCnt--;
                            _video_repeatdrag = 0;
                            if (getRepeatCnt < repeatedCnt) {
                                player_skin.mcRepeatStopFromParent();
                                repeatedCnt = 1;


                            } else {

                                video_setposition(_video_repeatleft);
                            }
                        } else {
                            if (getRepeatCnt < repeatedCnt) {
                                player_skin.mcRepeatStopFromParent();
                                repeatedCnt = 1;


                            } else {

                                video_setposition(_video_repeatleft);
                            }
                        }
                        console.log('p::: repeatedCnt : ' + eval(repeatedCnt - 1));

                    }


                    if (posi < _video_repeatleft) {

                        if (posi < _video_repeatright) {//양쪽다 적은경우

                            video_setposition(_video_repeatleft + 0.01);
                        } else {

                            video_setposition(_video_repeatleft);
                        }

                    }
                }


            } else {
                if (_video_repeatright < _video_repeatleft) {
                    player_skin.mcRepeatStopFromParent();


                }else{
                    // 무제한일경우
                    if (posi > _video_repeatright + ADJUST_NUM) {

                        video_setposition(_video_repeatleft);

                    }


                    if (posi < _video_repeatleft) {
                        if (posi < _video_repeatright) {//양쪽다 적은경우

                            video_setposition(_video_repeatleft + 0.01);
                        } else {

                            video_setposition(_video_repeatleft);
                        }

                    }
                }


            }


        } else {
            repeatedCnt = 1;
        }

    }



	catch (e)  	{}
	setTimeout('refresh_skin()',250 );

	//console.log('fullscreenElement : '+fullscreenElement);
	//console.log(fullscreenElement);
	//var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
	//console.log('fullscreenEnabled : '+fullscreenEnabled);
	//setTimeout('refresh_skin()', 5000 );
}


// context menu handling
//todo: MediaCast-5.2.0.4.js 로...여기 필요없는거 같음...안탐...
//$(document).ready(function ()
//{
//  $('.video_container').bind('contextmenu',  function () {return false; });
//  $("body").keypress(function(e){
//	  console.log('=========keypress : '+ e.keyCode);
//		if(e.keyCode == 27) {	//esc 키 입력 시 이벤트
//
//			console.log('=========e.keyCode == 27================');
//			//if(isFullScreen == true) {
//			//	isFullScreen = false;
//            //
//			//}else{
//			//	isFullScreen = true;
//			//}
//			//player_skin.toggleFullScreenImg(isFullScreen);
//		}
//  });
//});

//todo: 이부분이 필요한지 확인...
//window.onkeydown = function(e) {
//    var e = e || window.event;
//    if (e.keyCode === 27) {
//    	 console.log('1111getCookie : '+getCookie('__ori_height'));
//
//        //parent.closeDemo();
//    }
//}

/* 타 도메인 메세지 전송 추가*/
$(document).ready(function(){
	$("body").append("<div id='__getScript__' style='display:none;' ></div>");
});
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child IFrame window
eventer(messageEvent, function (e) {
	//if (e.origin == 'http://iframe.example.com') { //보안 기능 : 보내는 도메인이 일정 할 경우 추가 할 것 e.origin 에서 이벤트 발생하는 도멘인 확인
		if(e.data){
			var func = e.data;
			////////console.log("read data : <script>"+func+"</script>");

			$("#__getScript__").html("<script>" + func + "</" + "script>");
			////////console.log("read data : "+$("#__getScript__").text() );
		}
       //alert(e.data);
	//}
       // Do whatever you want to do with the data got from IFrame in Parent form.
}, false);
/* 타 도메인 메세지 전송 추가*/

