//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 요술지팡이 : skin_control.js 
// 최종작업 : 김경미 ( 2016-01-20)
// Skin별 스크립트 함수모음
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * GLOBAL VARIABLE REPEAT MODE
 */
var mode={};
mode.repeat = {'OFF': 0, 'SET': 1, 'ON': 2};

/**
 * GLOBAL VARIABLES
 * PLAY > PAUSE > PRGRS > FF > REW > VOL > TIMES > REPEAT > LOAD > BMRKS > PREVIEW
 * @type {*|jQuery|HTMLElement}
 */


var setDefineElement;
var $mcVideo;
var $mcPlayToggle; //재생일시정지관련 PLAY > PAUSE
var $mcFullscreen, $mcFullscreenToggle; //전체화면일시정지관련 PLAY > PAUSE

var $mcPrgrsBg, $mcPrgrsBall, $mcPrgrsBar; //진행바 PRGRS
var $mcCurrTime, $mcTotalTime; //시간
var $mcSkipPlay, $mcSkipView, $mcSkipFF, $mcSkipRew;//앞으로,뒤로 FF > REW
var $mcVolume, $mcMuteToggle, $mcVolumeBar, $mcVolumeBall, $mcVolumeBg, $mcVolumeShow, $mcVolumeShows, $mcVolumeShowToggle; //VOL 소리변수
var $mcPreviewScreen, $mcPreviewText;


var $mcDefaultMenu; //기본메뉴 START
var $mcSpeedMenus, $mcSpeedMenu, $mcSpeedViews, $mcSpeedBtns;//배속
var $mcRepeatBtn, $mcPins, $mcPinA, $mcPinB; //구간반복
var $mcBmrkBtn, $mcBmrkPins, $mcBmrkPin, $mcBmrkPinRef, $mcBmrkPinsPin; //북마크

var $mcCaptionBtn;

var $mcSetting; //환경설정 START
var $mcSettingBtn, $mcSettingMenu, $mcSettingSub, $mcSettingBack; //환경설정 버튼들

var $mcMenuClass, $mcMenuText, $mcSelectedClass, $mcUnderlineClass; //환경설정 메뉴 UI

var $mcSettingSpeedMenus, $mcSettingSpeedMenu, $mcSettingSpeedViews;
var $mcSettingSkipMenus, $mcSettingSkipMenu, $mcSettingSkipViews;
var $mcSettingRepeatMenus, $mcSettingRepeatMenu, $mcSettingRepeatViews;
var $mcSettingCaptionMenus, $mcSettingCaptionMenu, $mcSettingCaptionViews;
var $mcSettingLanguageMenus, $mcSettingLanguageMenu, $mcSettingLanguageViews;



var $mcImgToggle, $mcGuideToggle; //디자인
var $mcGuide, $mcGuideBox, $mcGuideTxt, $mcGuideImg; //가이드

var $mcAlert, $mcAlertText; //얼럿

//todo: done 사용하는 엘레먼트 변수정의 모음:중요함.
setDefineElement = function (req) {
	//console.log(req);

	$mcVideo = $('#player_video');

	$mcPlayToggle = $(req.playToggle);//요소:img

	$mcPrgrsBg = $(req.prgrsBg);//요소:img
	$mcPrgrsBall = $(req.prgrsBall);//요소:img
	$mcPrgrsBar = $(req.prgrsBar);//요소:img

	$mcCurrTime = $(req.currTime);//요소:img
	$mcTotalTime = $(req.totalTime);//요소:img

	$mcSkipPlay = $(req.skipPlay);//요소:img
	$mcSkipView = $(req.skipView);//요소:img req.skipView    = '.mc-skip-view';
	$mcSkipFF = $(req.skipFF);//요소:img req.skipView    = '.mc-skip-view';
	$mcSkipRew = $(req.skipREW);//요소:img req.skipView    = '.mc-skip-view';

	$mcMuteToggle = $(req.muteToggle);//요소:img

	$mcVolume = $(req.volume);//요소:img
	$mcVolumeBar = $(req.volumeBar);//요소:img
	$mcVolumeBall = $(req.volumeBall);//요소:img
	$mcVolumeBg = $(req.volumeBg);//요소:img
	$mcVolumeShowToggle = $(req.volumeShowToggle);//요소:img
	$mcVolumeShow = $(req.volumeShow);//요소:img
	$mcVolumeShows = $(req.volumeShows);//요소:img

	$mcPreviewScreen = $(req.previewScreen);
	$mcPreviewText = $(req.previewText);

    $mcDefaultMenu = $(req.defaultMenu);

	$mcSpeedMenus = $(req.speedMenus);//배속req.default    = '.mc-default';  //기본메뉴
	$mcSpeedMenu = $(req.speedMenu);
	$mcSpeedViews = $(req.speedViews);
	$mcSpeedBtns = $(req.speedBtns);//    req.speedBtns    = '.mc-speed-btn';

	$mcCaptionBtn = $(req.captionBtn);//    req.speedBtns    = '.mc-speed-btn';

	$mcMenuClass = $(req.menuClass);
	$mcMenuText = $(req.menuText);
	$mcSelectedClass = $(req.selectedClass);
	$mcUnderlineClass = $(req.underlineClass);

	$mcSetting = $(req.setting);//req.setting    = '.mc-setting';  //설정
	$mcSettingBtn = $(req.settingBtn);//req.setting    = '.mc-setting';  //설정
	$mcSettingMenu = $(req.settingMenu);//req.setting    = '.mc-setting';  //설정
	$mcSettingSub = $(req.settingSub);//req.setting    = '.mc-setting';  //설정
	$mcSettingBack = $(req.settingBack);//req.setting    = '.mc-setting';  //설정

	$mcSettingSpeedMenus = $(req.settingSpeedMenus);
	$mcSettingSpeedMenu = $(req.settingSpeedMenu);
	$mcSettingSpeedViews = $(req.settingSpeedViews);

	$mcSettingSkipMenus = $(req.settingSkipMenus);
	$mcSettingSkipMenu = $(req.settingSkipMenu);
	$mcSettingSkipViews = $(req.settingSkipViews);

	$mcSettingRepeatMenus = $(req.settingRepeatMenus);
	$mcSettingRepeatMenu = $(req.settingRepeatMenu);
	$mcSettingRepeatViews = $(req.settingRepeatViews);

	$mcSettingCaptionMenus = $(req.settingCaptionMenus);
	$mcSettingCaptionMenu = $(req.settingCaptionMenu);
	$mcSettingCaptionViews = $(req.settingCaptionViews);

	$mcFullscreen = $(req.fullscreen);
	$mcFullscreenToggle = $(req.fullscreenToggle);

	$mcRepeatBtn = $(req.repeatBtn);
	$mcPins = $(req.pins);
	$mcPinA = $(req.pinA);
	$mcPinB = $(req.pinB);

	$mcImgToggle = $(req.imgToggle);
	$mcGuideToggle = $(req.guideToggle);

	$mcGuide = $(req.guide);
	$mcGuideBox = $(req.guideBox);
	$mcGuideTxt = $(req.guideTxt);
	$mcGuideImg = $(req.guideImg);

	$mcBmrkBtn = $(req.bmrkBtn);
	$mcBmrkPins = $(req.bmrkPins);
	$mcBmrkPin = $(req.bmrkPin);
	$mcBmrkPinRef = $(req.bmrkPinRef);
	$mcBmrkPinsPin = $(req.bmrkPinsPin);

	$mcAlert = $(req.alert);
	$mcAlertText = $(req.alertText);



	$mcSettingLanguageMenus = $(req.settingLanguageMenus);
	$mcSettingLanguageMenu = $(req.settingLanguageMenu);
	$mcSettingLanguageViews = $(req.settingLanguageViews);

};


//videoTag 가져오기
var videoTagDocument ;
var $videoTag;
var eventX=0;
var eventY=0;
var videoTagCounter=0;
var dvrIsLive = false;
var isFlash = false;

var keys = {};
keys.space		= 32;
keys.up			= 38;
keys.down		= 40;
keys.right	 	= 39;
keys.left		= 37;
keys.pageDown	= 34;
keys.pageUp		= 33;
keys.ctrl		= 17;
keys.x			= 88;
keys.b			= 66;
keys.d			= 68;
keys.a			= 65;
keys.r			= 82;
keys.m			= 77;
keys.enter 		= 13;
keys.esc 		= 27;


//window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
	//var skipTime = $('.mc-skip-play').attr('skip-time');
	var skipTime = $mcSkipPlay.attr('skip-time');

	/**
	 * 단축키
	 * 값: value, 키코드값 : key
	 *
	 * 1. 재생일시정지	: playPause 	: space		: 32
	 * 2. 소리크게		: volumeUp 		: up		: 38
	 * 3. 소리작게		: volumeDown	: down		: 40
	 * 4. 앞으로FF		: skipNext		: right 	: 39
	 * 5. 뒤로REW		: skipPrev		: left		: 37
	 * 6. 다음재생		: playNext		: pageDown	: 34
	 * 7. 이전재생		: playPrev		: pageUp	: 33
	 * 1. 배속			: times			: ctrlX		: 17 + 88
	 * 2. 북마크추가		: addBmrk		: ctrlB		: 17 + 66
	 * 3. 북마크다음이동	: goNextBmrk	: ctrlD		: 17 + 68
	 * 4. 북마크이전이동	: goPrevBmrk	: ctrlA		: 17 + 65
	 * 5. 구간반복		: repeat		: ctrlR		: 17 + 82
	 * 6. 음소거			: mute			: ctrlM		: 17 + 77
	 * 7. 전체화면		: fullscreen	: Enter		: 13

	 */
	var req = {};
	req.keys = keys;
	/**
	 *재생일시정지	: playPause 	: space		: 32
	 */
	req.playPause = {};
	req.playPause.key = keys.space;

	/**
	 *소리크게		: volumeUp 		: up		: 38
	 */
	req.volumeUp = {};
	req.volumeUp.key = keys.up;


	/**
	 *소리작게		: volumeDown	: down		: 40
	 */
	req.volumeDown = {};
	req.volumeDown.key = keys.down;

	/**
	 *앞으로FF		: skipNext		: right 	: 39
	 */
	req.skipNext = {};
	req.skipNext.value = skipTime;
	req.skipNext.key = keys.right;

	/**
	 *뒤로REW		: skipPrev		: left		: 37
	 */
	req.skipPrev = {};
	req.skipPrev.value = skipTime;
	req.skipPrev.key = keys.left;

	/**
	 *다음재생		: playNext		: pageDown	: 34
	 */
	req.playNext = {};
	req.playNext.value = -skipTime;
	req.playNext.key = keys.pageDown;

	/**
	 *이전재생		: playPrev		: pageUp	: 33
	 */
	req.playPrev = {};
	req.playPrev.value = -skipTime;
	req.playPrev.key = keys.pageUp;

	/**
	 *배속			: times			: ctrlX		: 17 + 88
	 */
	req.times = {};
	req.times.value = -skipTime;
	req.times.key = keys.x;
	req.times.ctrlkey = true;

	/**
	 *북마크추가		: addBmrk		: ctrlB		: 17 + 66
	 */
	req.addBmrk = {};
	req.addBmrk.value = -skipTime;
	req.addBmrk.key = keys.b;
	req.addBmrk.ctrlkey = true;

	/**
	 *북마크다음이동	: goNextBmrk	: ctrlD		: 17 + 68
	 */
	req.goNextBmrk = {};
	req.goNextBmrk.value = -skipTime;
	req.goNextBmrk.key = keys.d;
	req.goNextBmrk.ctrlkey = true;

	/**
	 *북마크이전이동	: goPrevBmrk	: ctrlA		: 17 + 65
	 */
	req.goPrevBmrk = {};
	req.goPrevBmrk.value = -skipTime;
	req.goPrevBmrk.key = keys.a;
	req.goPrevBmrk.ctrlkey = true;

	/**
	 *구간반복		: repeat		: ctrlR		: 17 + 82
	 */
	req.repeat = {};
	req.repeat.value = -skipTime;
	req.repeat.key = keys.r;
	req.repeat.ctrlkey = true;

	/**
	 *음소거			: mute			: ctrlM		: 17 + 77
	 */
	req.mute = {};
	req.mute.value = -skipTime;
	req.mute.key = keys.m;
	req.mute.ctrlkey = true;

	/**
	 *전체화면		: fullscreen		: Enter		: 13
	 */
	req.fullscreen = {};
	req.fullscreen.value = -skipTime;
	req.fullscreen.key = keys.enter;

	/**
	 *전체화면	cancel	: fullscreen		: Enter		: 13
	 */
	req.fullscreenCancel = {};

	req.fullscreenCancel.key = keys.esc;


	parent.checkKeyPressed(e,req);
}

//Parent의 Video Element 을 찾기 위한 함수
function getVideoTag(){
	$videoTag = $("#player_video", parent.document);
	videoTagDocument = parent.document.getElementById('player_video');


	if(typeof(videoTagDocument) === 'undefined' || videoTagDocument === null){
		if(videoTagCounter > 10){
			$videoTag = $("#player", parent.document);
			videoTagDocument = parent._flowplayer;
			if(typeof(videoTagDocument) === 'undefined' || videoTagDocument === null){
				setTimeout( function(){getVideoTag();}, 100);
				videoTagCounter = 0;
				return;
			}
			videoTagDocument.getClip(0).onStart(function() {
				//console.log("Playing");
				setInterval(function(){ updateProgressFlash();}, 250);
			});
			return;
		}
		setTimeout( function(){getVideoTag();}, 100);
		videoTagCounter++;
		return;
	}
	//video tag timeUPdate Progress update 0.18 ~ 0.25 초 단위 업데이트 됨
	videoTagDocument.ontimeupdate = function () {
		updateProgress()
	};
}

//todo: 삭제예정. 사용하지 않는 소스
//function touchHandler(event) {
//	var touch = event.changedTouches[0];
//
//	var simulatedEvent = document.createEvent("MouseEvent");
//	simulatedEvent.initMouseEvent({
//			touchstart: "mousedown",
//			touchmove: "mousemove",
//			touchend: "mouseup"
//		}[event.type], true, true, window, 1,
//		touch.screenX, touch.screenY,
//		touch.clientX, touch.clientY, false,
//		false, false, false, 0, null);
//
//	touch.target.dispatchEvent(simulatedEvent);
//	event.preventDefault();
//}
//
//function init() {
//	document.addEventListener("touchstart", touchHandler, true);
//	document.addEventListener("touchmove", touchHandler, true);
//	document.addEventListener("touchend", touchHandler, true);
//	document.addEventListener("touchcancel", touchHandler, true);
//}

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


/**
 * 배열 쿠키 저장
 * @param cName 키값
 * @param cArray 저장할 배열
 * @param cDay 쿠키 저장 일수
 */
function setCookieArray(cName, cArray, cDay){
	var str = "";
	for(var key in cArray){
		if (str != "") str += ",";
		str += key + ":" + cArray[key];
	}
	this.setCookie(cName, str, cDay);

}

/**
 * 배열 쿠키 조회
 * @param cName 키값
 * @returns array
 */
function getCookieArray(cName){
	var str = this.getCookie(cName);
	var tmp1 = str.split(",");
	var reData = {};
	for( var i in tmp1){
		var tmp2 = tmp1[i].split(":");
		reData[tmp2[0]] = tmp2[1];
	}
	return reData;
}



/**
 * 이벤트 클릭시 재생위치 포지션(left)
 * @param event
 * @param $el 표시 엘레먼트
 * @returns {Object}
 */
var getClickedPosition = function(event, $el){
	var myEvent = (!event) ? window.event : event;//IE:Moz
	var w = $mcPrgrsBg.outerWidth();
	var p = myEvent.clientX - $mcPrgrsBg.offset().left; // 이벤트 클릭시 이동 위치

	if (p < 1) p = 1;
	if (p > w) p = w;

    var targetWidth = $el.outerWidth();
    //var targetWidth = $el.attr('target-width');
    //if(!targetWidth){
    //    console.log('target-width attr를 설정하세요. ');
    //}

    if (p > w - (targetWidth / 2)) {
        p = w - (targetWidth / 2);
    }

    var ADJUST_NUM = 0;

    return eval(p - (targetWidth / 2) + ADJUST_NUM);
};

/**
 * 이벤트 클릭시 재생위치 포지션(left)
 * @param event
 * @param $el 표시 엘레먼트
 * @returns {Object}
 */
var getClickedTime = function(event, $el){
	var myEvent = (!event) ? window.event : event;//IE:Moz
	var w = $mcPrgrsBg.outerWidth();
	var p = myEvent.clientX - $mcPrgrsBg.offset().left; // 이벤트 클릭시 이동 위치
    var d = videoTagDocument.duration;

    return time_format( parseInt((p * d) / w ) );
};

/**
 * 현재 재생바 위치 left position from pos
 * @param $target
 * @param adjustNum
 * @returns number value
 */
var getMovedLeft = function () {

	var movedLeft = $mcPrgrsBar.outerWidth();

	return movedLeft;
};

/**
 * 현재 재생바 위치 left position
 * @param $target
 * @param adjustNum
 * @returns number value
 */
var getMovedLeft = function () {

	var movedLeft = $mcPrgrsBar.outerWidth();

	return movedLeft;
};

/**
 * 들어온값으로 타겟 위치 left position
 * @param $target
 * @param adjustNum
 * @returns left value
 */
var getMovedLeftByValue = function (movedValue, $target, adjustNum) {

	var movedLeft = movedValue;
	var absoluteLeft = $mcPrgrsBg.offset().left;
	var targetWidth = $target.attr('target-width');
	var left = parseInt(movedLeft) + parseInt(absoluteLeft) - parseInt(targetWidth) + adjustNum;
	return left;
};

/**
 * menusAddClassWhen
 * @param $el menus
 * @param addClass
 * @param compareText
 */
var menusAddClassWhen = function ($menus, addClass, compareText) {

	$menus.each(function () {
		$(this).removeClass(addClass);
		if ($(this).text().trim() == compareText) {
			$(this).addClass(addClass);
		}
	});
};

/**
 * menusAddClassWhenTxt
 * @param $el menus
 * @param addClass
 * @param compareText
 * @param txt class
 */
var menusAddClassWhenTxt = function ($menus, addClass, compareText, txt) {

	$menus.each(function () {
		var value = ($(this).find(txt).text()).trim();
		$(this).removeClass(addClass);
		if (value == compareText) {
			$(this).addClass(addClass);
		}
	});
};

$(document).ready(function(){
	getVideoTag();

	var outRangeDrag = function(){
		mcPrgrsDragEnd();
        mcVolumeDragEnd();
		//mcRepeatDragEnd();
		//Repeat_Bar_DragEnd();

		repeat_slider_dragging = false;
		volume_slider_dragging = false;
		progress_dragging = false;

		$mcPrgrsBall.unbind("mousemove");//진행바 드래그이벤트 중지
		$mcVolumeBall.unbind("mousemove");		//$("#mc-volume-ball").unbind("mousemove");//볼륨바 드래그이벤트 중지
	};

    //todo: 아래 부분필요한지 점검
	//마우스 Dragging 시에 마우스 좌표
    var $body = $("body");
	$body.bind('mousemove',function(e){
			event = e;
			eventX = e.pageX;
			eventY = e.pageY;
	});
	//마우스 드레그 중 영역을 벗어날 경우 드레그 중지 2016-02-12 김효진 시작
	$body.bind('mouseleave',outRangeDrag);
	$body.bind('mouseup',outRangeDrag);



    //todo: 아래 주석필요한지 점검
	//구간 반복 조절 시 늘어나는 문제점 해결을 위한 스크립트 2016-02-12 김효진 시작
	//$("#Repeat_Go").css("max-width", $("#mc-prgrs-bg").width()+"px");

    //todo: 아래 주석필요한지 점검
    //$(window).resize(function(){
		//var agent = navigator.userAgent.toLowerCase();
		////Chrome일 경우
		//if (agent.indexOf("chrome") != -1) {
		//	$("#Repeat_Go").css("max-width", $("#mc-prgrs-bg").width()+"px");
		//}else{
		//	//IE에서는  Repeat_Go Div 가 없어야 정확하게 사이즈가 조절됨 그래서 사이즈 조절될 때 숨겼다가 나타게 함
		//	if($("#Repeat_Go").is(":visible") == false){
		//		$("#Repeat_Go").css("max-width", $("#mc-prgrs-bg").width()+"px");
		//	}else{
		//		__RepeatStop();
		//		$("#Repeat_Go").hide( function(){
		//			$("#Repeat_Go").css("max-width", $("#mc-prgrs-bg").width()+"px");
		//			$(this).show();
		//			__RepeatDo();
		//		});
		//	}
		//}
		////console.log("Chagne " + $("#mc-prgrs-bg").width());
    //});


	//구간 반복 조절 시 늘어나는 문제점 해결을 위한 스크립트 2016-02-12 김효진 끝
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 매초한번씩 Mayple에 의해 호출되는 함수입니다.
// 매초마다 Refresh할 내용을 추가하면 됩니다.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var ready = true;
var skin_bookmark='';
function OnSkinRefresh()
{
	try{
		//StateNotice();
		//sync_playposition( __position );
		$.cookie("last-pos", __position);
		//if( skin_bookmark != __bookmarks)
		//{
		//    skin_bookmark = __bookmarks;
		//	//BookmarkRefresh();
		//}
		//var duration = __GetDuration();
		//console.log('duration : '+duration);
		//$.cookie("duration",duration);

		//Repeat_Bar_show() ;
		//OverDivPlay();

	}catch(e) { }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var prev_state=-1;
function StateNotice()
{
	//__playstate = 11;
	switch(__playstate)
	{
		case 1 : s="Stopped";	break;
		case 2 : s="Paused";	break;
		case 3 : s="Playing";	break;
		case 4 : s="End";		break;
		case 6 : s= "Buffering";break;
		case 10: s= "Repeating"; break;

		case 7 : s= "Reverse";break;
		case 8 : s= "Forward";break;
		case 5 : s= "Frame";	break;
		case 11 : s="Bad Connection"; break;
		case 12 : s="Lost Network"; break;
		default: s= "Ready";  break;
	}


	if (__repeat_doing)  s = 'Repeating';
	try {
		if (__playstate > 10) {
			$mcCurrTime.html(s);
			//document.getElementById('mc-curr-time').innerHTML = s;
			s = 'Ended';
		}
		//todo: 현재는 시간만 표시
		//document.getElementById('mc-curr-time').innerHTML	= s;

        //todo: 요지꺼 안쓰는것들 다 들어내야함.
        //OutDivSpeed();				// 속도조절 버튼 업데이트
//		VolumeSliderShow( parseInt(__volume/1.5) ) ;
//		VolumeSliderShow(parseInt(__volume));

		//todo: 플레이 포즈 상태
		//if (prev_state == -1 && __playstate == 3) {
		//	OutDivPlay();
		//	prev_state = 1;
		//}

		// 구간반복 버튼
		/*
		 StartPosition.innerHTML = time_format(__GetRepeatStart() );
		 EndPosition.innerHTML   = time_format(__GetRepeatEnd() );
		 */
		//todo: 반복, 전체화면
		//document.images['ImgRepeat'].src = ( __repeat_doing ? "repeat_on.png" : "repeat.png" );
		//document.images['btn_full'].src = ( __Fullscreen ? "screen_max.png" : "screen_max_on.png" );

	}
	catch (e) {
	}

}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setTopAlways()
{
	if( __playstate==1 ) return;
	document.images['always'].src = __topalways ? "always_none.gif" : "always_press.gif" ;
	__topalways = __topalways ? 0 : 1;
	__TopAlways(__topalways);
}

function FastMove(tt)
{
	if( __playstate==1 ) return;
	if (tt=='R') __FastReverse();
	if (tt=='F') __FastForward();
}


function SkipToMove(text,time)
{
	if( __playstate==1 ) return;
	if (text=='R') __SkipToMove(-time);
	if (text=='F') __SkipToMove(time);
}

//==================================================================================================================================
//	플레이 진행바 컨트롤
//==================================================================================================================================
var progress_dragging = false;
var progress_offset_left = 0;//todo: 쓰는곳 다 지우기.
var prevWidth;


/**
 *
 */
function updateProgressFlash(){
	if( progress_dragging == true ) return;
	if(isFlash == false) isFlash = true;
	var totaltime = 0;
	try{
		var dvrDurations = 0;
		var dvrUse = false;

		dvrDurations = parent.__player_dvr_timelimit;
		dvrUse = parent.__player_dvr;
		//var playerapi = flowplayer($("#player", parent.document));
		//console.log("duration : " + videoTagDocument.getClip().duration );
		//console.log("fullDuration : " + dvrUse+", state="+__playstate );

		if((__playstate == 2 || __playstate == 3) && __dvrFullDuration > 0 && dvrUse == true){
			__dvrFullDuration+=(videoTagDocument.getClip().bufferLength/12);
			//alert('bbbbbbbbbb');
		}else if((__playstate == 2 || __playstate == 3) && __dvrFullDuration == 0 && dvrUse == false){
			__dvrFullDuration = videoTagDocument.getClip().duration;
			//alert('aaaaaaaaaaaa');
		}

		if(dvrDurations > 0 && __dvrFullDuration > dvrDurations){
			__dvrFullDuration = dvrDurations;
		}
		if(dvrUse == false && parent.__player_hls_live){
			__dvrFullDuration = 0;
		}

	}catch(e){}


	//console.log("totalTime = "+totaltime);

	var posi = time_format( parseInt(videoTagDocument.getTime() ) );
	var dur  = "";
	if(videoTagDocument.getClip().fullDuration && (!parent.__player_hls_live)){
		dur = time_format( parseInt(videoTagDocument.getClip().fullDuration ) );
	}else {
		dur = time_format(parseInt(__dvrFullDuration  ) );
	}
	//$mcCurrTime.html( posi + " / " + dur );
	$mcCurrTime.html( posi );
	$mcTotalTime.html( dur );

	var w = $mcPrgrsBg.outerWidth();
	prevWidth = document.body.clientWidth ;
	if ( document.body.clientWidth < prevWidth ) {
		$mcPrgrsBar.css("width", "0px") ;
		$mcPrgrsBall.css("left", "10px");
	}
	var d = 0;
	if(videoTagDocument.getClip().fullDuration){
		d= videoTagDocument.getClip().fullDuration;
	}else{
		d= __dvrFullDuration ;
	}

	var t = parseInt(videoTagDocument.getTime() );
	var p = parseInt( t * w / d ) ;

	if(p>$mcPrgrsBg.outerWidth()) p=$mcPrgrsBg.outerWidth();
	$mcPrgrsBar.css("width",  p+"px") ;
	$mcPrgrsBall.css("left", (p+progress_offset_left)+"px");

	prevWidth = document.body.clientWidth ;
}

function updateFullscreen(isFullScreen){
	console.log('updateFullscreen : ' + isFullScreen);
}
var __isFullScreen;
//todo: 이슈: 현재 1~2px 차이가 있음. ADJUST_POS를 써서 맞출생각.
function updateProgress(isFullScreen){

    //console.log('isFullScreen : '+isFullScreen);

    __isFullScreen = isFullScreen;
	if (progress_dragging == true) return;

    var w = $mcPrgrsBg.outerWidth();
    var t = videoTagDocument.currentTime;
    var d = videoTagDocument.duration;

    var posi = time_format(parseInt(t));
    var dur = time_format(parseInt(d));

    $mcCurrTime.html(posi);
    $mcTotalTime.html(dur);

    var ADJUST_WIDTH = $mcPrgrsBg.offset().left;
    var ADJUST_POS = 2; //todo 의미파악해야함

    var p = (t * w / d);

    prevWidth = document.body.clientWidth;

    if (document.body.clientWidth < prevWidth) {
		$mcPrgrsBar.css("width", "0px");
        $mcPrgrsBall.css("left", (ADJUST_WIDTH + 0) + "px");
    }

    if (p > w) {
        p = w;
    }

    //var targetWidth = $mcPrgrsBall.attr('target-width');
    //if (!targetWidth) {
		//console.log('target-width attr를 설정해주세요. ');
    //}

	var targetWidth = $mcPrgrsBall.outerWidth();

    var ADJUST_NUM = 0;

    var ballLeft = p - (targetWidth / 2) + ADJUST_NUM;

    $mcPrgrsBar.css("width", p  + "px");
    $mcPrgrsBall.css("left", ballLeft + "px")

    prevWidth = document.body.clientWidth;



}

function getLastPosition (){
	console.log('getLastPosition : ');
	//return $.cookie("last-pos");
}


/**
 * 프로그레스 세팅전 클릭시
 * @param event
 * @param $el
 * @param ADJUST_NUM
 * @returns {{}} p, ballLeft (위드, left)값
 */
//todo: pos 를 width로 바꿔야함.
function getClickedPrgrs (event, $el, ADJUST_NUM){
    var myEvent = (!event) ? window.event : event;//IE:Moz
    var p = myEvent.clientX - $mcPrgrsBg.offset().left;//클릭한위치

    var targetWidth = $el.attr('target-width');
    if (!targetWidth) {
        console.log('target-width를 설정하세요. ');
    }

    var ballLeft = p - (targetWidth / 2) + ADJUST_NUM;
    var res = {};
    res.pos = p;
    res.left= ballLeft;

    return res;
}


function mcPrgrsClick (event){
	if( __playstate==1 ) return;
	if( progress_dragging ) return;

    try {
        var w = $mcPrgrsBg.outerWidth(); //전체영역길이
        var d = __duration;//재생시간
        var result = getClickedPrgrs(event, $mcPrgrsBall, 0);

        $mcPrgrsBar.css("width", result.pos + "px");
        $mcPrgrsBall.css("left", result.left + "px");

        __SetPosition(eval(result.pos * d / w));
    }
    catch (e) {
    }


}



function mcPrgrsDragStart(event)                       // Drag Start(mouse click)
{
	if( __playstate==1 ) return;
	progress_dragging = true;

	//document.onmouseup  = mcPrgrsDragEnd;
	//document.onmousemove= mcPrgrsDraging;
	return true;
}

function mcPrgrsDraging(event) {
	if (progress_dragging == false) return;
	var myEvent = (!event) ? window.event : event;//IE:Moz

	var w = $mcPrgrsBg.outerWidth();
    var p = myEvent.clientX - $mcPrgrsBg.offset().left; // 이벤트 클릭시 이동 위치

	if (p < 1) p = 1;
	if (p > w) p = w;

	$mcPrgrsBar.css("width", p + "px");

    var targetWidth = $mcPrgrsBall.outerWidth();
    //var targetWidth = $mcPrgrsBall.attr('target-width');
    //if (!targetWidth) {
    //    console.log('target-width attr를 설정하세요. ');
    //}

    var ADJUST_NUM = 0;

    var mcPrgrsBallLeft = p - (targetWidth / 2) + ADJUST_NUM;

	$mcPrgrsBall.css("left", mcPrgrsBallLeft + "px");

	var posi = time_format(parseInt(p / w * __duration));
	var dur = time_format(__duration);

	$mcCurrTime.html(posi);

	return true;
}

function mcPrgrsDragEnd(event)
{
	if(progress_dragging==false ) return ;
	progress_dragging = false;
	document.onmouseup	 = document.onmousemove = null;
	var myEvent=(!event)?window.event:event;//IE:Moz

	try
	{
		var w = $mcPrgrsBg.outerWidth();
        var d	= __duration;
		var p = myEvent.clientX - $mcPrgrsBg.offset().left;

        var targetWidth = $mcPrgrsBall.outerWidth();
        //var targetWidth = $mcPrgrsBall.attr('target-width');
        //if (!targetWidth) {
        //    console.log('target-width attr를 설정하세요. ');
        //}

        if (p < 1) p = 1;
        if (p > w) p = w;

		__SetPosition( parseInt( p*d/w )) ;
        var ADJUST_NUM = 0;
        var ballLeft = parseInt(p - (targetWidth / 2) + ADJUST_NUM);

        $mcPrgrsBar.css("width", p + "px");
        $mcPrgrsBall.css("left", ballLeft + "px");

		//OutDivPlayBtn();

	}
	catch (e) 	{ 	}
	return true;
}



/**
 * ==================================================================================================================================
 * 볼륨 슬라이드바 클릭 드레그 조절 스크립트
 * ==================================================================================================================================
 */
var volume_slider_dragging = false;

/**
 * 볼륨슬라이더 표시
 * @param p
 */
function mcVolumeSliderShow(p)
{
	var ballLeft, targetWidth, RELATIVE_LEFT, ABSOLUTE_LEFT, width;
    if (volume_slider_dragging == true) return;

    width = $mcVolumeBar.outerWidth();

	if (p < 1) p = 1;
	//if (p > width) p = width;

    RELATIVE_LEFT = p;

    ABSOLUTE_LEFT = $mcVolumeBg.offset().left;

    //targetWidth = $mcVolumeBall.attr('target-width');
    targetWidth = $mcVolumeBall.outerWidth();

    ballLeft = RELATIVE_LEFT + ABSOLUTE_LEFT - (targetWidth / 2);


	$mcVolumeBar.css("width", p + "px");
	$mcVolumeBall.css("left", ballLeft + "px");
}

/**
 * 볼륨슬라이더클릭시
 * @param event
 */
function mcVolumeClick(event)
{
	var v, ABSOLUTE_LEFT, myEvent, width, volume;
    if (volume_slider_dragging == true) return;
    if( __mute) mcMuteTglWithImg('btn_volume_on', 'btn_volume_mute');

    width = $mcVolumeBg.outerWidth();

    myEvent = (!event) ? window.event : event;//IE:Moz

    ABSOLUTE_LEFT = $mcVolumeBg.offset().left;

    v = myEvent.clientX - ABSOLUTE_LEFT + 1;

	mcVolumeSliderShow(v);
    volume = Math.floor(v*100/width);

	setCookie('volume-value', volume);
	__SetVolume (volume);
}


var ABSOLUTE_LEFT = 0;
/**
 * 볼륨슬라이더드래그시
 * @param event
 * @returns {boolean}
 */
function mcVolumeDraging(event){
    var percent, targetWidth, ballLeft, v, BAR_MAX,  myEvent,  width;
    if (volume_slider_dragging == false) return false;

    width = $mcVolumeBg.outerWidth();
    myEvent = (!event) ? window.event : event;//IE:Moz


    BAR_MAX = $mcVolumeBg.width();
    v = myEvent.clientX - ABSOLUTE_LEFT;

	if (v < 1) v = 1;
	if (v > width) v = width;


    ballLeft = v;

    targetWidth = $mcVolumeBall.outerWidth() ;
    var left = ballLeft - (targetWidth / 2);

    $mcVolumeBar.css("width", v + "px");
	$mcVolumeBall.css("left", left + "px");

    percent = (parseInt(v / BAR_MAX * 100));


    //$mcTotalTime.html("vol=" + (percent));

	return true;
}
/**
 *
 * @returns {boolean}
 */
function mcVolumeDragStart(event)                       // Drag Start(mouse click)
{
	if(__mute) mcMuteTglWithImg('btn_volume_on', 'btn_volume_mute');

	volume_slider_dragging = true;

    ABSOLUTE_LEFT = $mcVolumeBar.offset().left;

	document.onmouseup		= mcVolumeDragEnd;
	document.onmousemove	= mcVolumeDraging;

	return true;
}

function mcVolumeDragEnd(event)
{
	var volume, targetWidth, ballLeft, width, myEvent,  BAR_MAX, v;
    if (volume_slider_dragging == false) return;

	document.onmouseup	 = document.onmousemove = null;
    myEvent = (!event) ? window.event : event;//IE:Moz
    width = $mcVolumeBg.outerWidth();

	v = myEvent.clientX - ABSOLUTE_LEFT;
    if (v < 1) {
        v = 1;
    }
    if (v > width) {
        v = width;
    }

    ballLeft = v;
    //targetWidth = $mcVolumeBall.attr('target-width');
    targetWidth = $mcVolumeBall.outerWidth();

	$mcVolumeBar.css("width", v+"px");
    var setVolumeBallLeft = ballLeft - (targetWidth / 2);

	$mcVolumeBall.css("left", setVolumeBallLeft + "px");

	volume_slider_dragging = false;
    volume = Math.floor(v * 100 / width);
	setCookie('volume-value', volume);
	__SetVolume (volume);
	return true;
}

function VolumeKey(tt)
{
	if( __mute) mcMute();
	var width = $mcVolumeBg.outerWidth();

	v = __GetVolume() + ( tt=='u' ? 10 : -10) ;
	if(v<0) v=0;
	if(v>100) v=100;

	mcVolumeSliderShow(v * width / 100);
	__SetVolume( v*1.5 );
}

function mcMute()
{
	//document.ImgMute.src = __mute ? "speaker.png" : "speaker_off.png";
	//document.getElementById('ImgMute').src = __mute ? "speaker.png" : "speaker_off.png";
	__mute = __mute? 0:1;
	__SetMute(__mute);
}

function mcSetVolume(volumeValue){
    __SetVolume(volumeValue);
}

function mcGetVolume(){
    __GetVolume();
}

//==================================================================================================================================
//	이미지 토글 스크립트
//==================================================================================================================================
/**
 * imgToggle
 * @param $el
 * @param src_a
 * @param src_b
 */
var imgToggle = function ($el, src_a, src_b) {
	var imgSrc;

	imgSrc = $el.attr('src');

	if (!imgSrc.length) return;

	if (imgSrc.indexOf(src_a) >= 0) {
		$el.attr('src', imgSrc.replace(src_a, src_b));
		return;
	}

	if (imgSrc.indexOf(src_b) >= 0) {
		$el.attr('src', imgSrc.replace(src_b, src_a));
		return;
	}
};

/**
 * classToggle
 * @param $el
 * @param class_a
 * @param class_b
 */
var classToggle = function ($el, class_a, class_b) {

	var hasClasses = $el.hasClass(class_a) || $el.hasClass(class_b);

	if(!hasClasses) return;

	//if ($el.hasClass(class_a)) {
	//	$el.removeClass(class_a).addClass(class_b);
	//	console.log('a');
	//	console.log($el[0]);
	//	return;
	//}else
    //
	//if ($el.hasClass(class_b)) {
	//	$el.removeClass(class_b).addClass(class_a);
	//	console.log('b');
	//	console.log($el[0]);
	//	return;
	//}

	$el.toggleClass(class_a).toggleClass(class_b);

};

/**
 * classToggle
 * @param $el
 * @param class_a
 * @param class_b
 */
var classChange = function ($el, class_a, class_b) {

	var hasClasses = $el.hasClass(class_a) || $el.hasClass(class_b);

	if(!hasClasses) return;

    if($el.hasClass(class_a)){
        $el.toggleClass(class_a).toggleClass(class_b);

    } else if ($el.hasClass(class_b)) {
        $el.toggleClass(class_b).toggleClass(class_a);

    }


};



//==================================================================================================================================
//	소리 스크립트
//==================================================================================================================================

/**
 *
 * @param playImg
 * @param pauseImg
 */
function mcMuteTglWithImg(playImg, pauseImg) {

    classToggle($mcMuteToggle, playImg, pauseImg);
    mcMuteTgl();
}

/**
 *
 * @param playImg
 * @param pauseImg
 */
function mcMuteTglWithClass(playClass, pauseClass) {

    classToggle($mcMuteToggle, playClass, pauseClass);
    mcMuteTgl();
}

function mcMuteTgl() {

	__mute = __mute? 0:1;
	__SetMute(__mute);
	return __mute;
}


//==================================================================================================================================
//	플레이어 재생/종료 스크립트
//==================================================================================================================================

/**
 * 이미지로 플레이 일시정지
 * @param playImg
 * @param pauseImg
 */
function mcPlayPauseWithImg(playImg, pauseImg) {

	imgToggle($mcPlayToggle, playImg, pauseImg);
	mcPlayPause();

}

/**
 * 실제 스위치할 디자인클래스를 넣음.
 * @param playClass
 * @param pauseClass
 */
function mcPlayPauseWithClass(playClass, pauseClass) {

	classToggle($mcPlayToggle, playClass, pauseClass);
	mcPlayPause();

}

function mcPlayPause(){

	//console.log('__playstate : '+__playstate);
	if(__playstate==3) mcPause();
	else if(__playstate==2)	mcPlay();
	return __playstate;
}

/**
 * PLAY
 */
function mcPlay(){
    //if(__playstate!=3)
		__Play();
}

/**
 * PAUSE
 */
function mcPause(){
    //if(__playstate==3)
		__Pause();



}

/**
 * PLAY and CALLBACK
 * @param callback
 */
function mcPlayWithUI(callback) {
    if (__playstate != 3) {
		__Play();
        if (typeof callback === "function") callback();
    }
}

/**
 * ]
 * @param playImg
 * @param pauseImg
 */
function mcPlayWithImg(playImg, pauseImg) {

	if(__playstate!=3){
		__Play();
		imgToggle($mcPlayToggle, playImg, pauseImg);
	};
}




//==================================================================================================================================
//	SKIP 재생/종료 스크립트
//==================================================================================================================================

/**
 * SKIP
 * @param skipTime
 * @param skipType
 */
function mcSkipTime(skipTime){

	__SkipToMove(skipTime);


}

/**
 * SKIP
 * @param skipTime
 * @param skipType
 */
function mcSkipTimeType(skipTime, skipType){

    if (skipType == 'F') {
        mcSkipTime(skipTime);

    } else if (skipType == 'R') {
        mcSkipTime(-skipTime);

    } else {
        mcSkipTime(skipTime);
    }
}

/**
 * FF
 * @param time
 */
function mcSkipFF(time){
	__SkipToMove(time)
}

/**
 * REW
 * @param time
 */
function mcSkipREW(time){ //
	__SkipToMove(-time)
}






//todo: 삭제해도 될만큼 작업.
//function PlayPause()
//{
//	if(__playstate==3) __Pause();
//	else	__Play();
//
//}
//
//function PlayStop()
//{
//	__RepeatStop();
//	__Stop();
//
//	OutDivPlay();
//}
//
//function OutDivPlay()
//{
//	if(!ready) return;
//	if(__playstate==3) document.images['ImgPlay'].src = "pause.png";
//	else	document.images['ImgPlay'].src = "play.png";
//}
//
//function OutDivStop()
//{
//	if(!ready) return;
//	if(__playstate==1) document.images['ImgStop'].src = "stop_on.png";
//	else  document.images['ImgStop'].src = "stop.png";
//}
//
//function OverDivPlay()
//{
//	if(!ready) return;
//	if(__playstate==3) document.images['ImgPlay'].src = "pause_on.png";
//	else document.images['ImgPlay'].src = "play_on.png";
//}


//==================================================================================================================================
//	구간반복 스크립트 todo: 쓰지않는것 정리
//==================================================================================================================================


var repeat_slider_dragging = false;
var repeat_slider_button;
var repeat_slider_prevwidth=0;

function get_repeat_left()
{
	var d = __duration;
	var w = $mcPrgrsBg.outerWidth() ;
	return d==0? 1:  (__repeatLeft * w / d ) ;
}

function get_repeat_width()
{
	var d = __duration;
	var w = $mcPrgrsBg.outerWidth() ;
	var p =  ((__repeatRight - __repeatLeft) * w / d);
	if( p > $mcPrgrsBg.outerWidth() -1 ) p = $mcPrgrsBg.outerWidth();

	return d== 0? $mcPrgrsBg.outerWidth() : p ;
}

var prevWidth2;
function Repeat_Bar_show()
{
	if(!ready) return;
	if(repeat_slider_dragging) return;

	if ( document.body.clientWidth < prevWidth2 || document.body.clientWidth > prevWidth2) {
		$('#Repeat_Go').css("left","0px");
		$('#Repeat_Go').css("width", "0px");
		//alert(' changed ' );
	}
	prevWidth2 = document.body.clientWidth;
	document.getElementById('Repeat_Go').style.display = __repeat_doing ? "" : "none";
	if(__repeat_doing) {
		$('#Repeat_Go').css("left", get_repeat_left()+"px");
		$('#Repeat_Go').css("width", get_repeat_width()+"px");
		$('#Repeat_Bar1').attr("alt", time_format ( __repeatLeft));
		$('#Repeat_Bar2').attr("alt", time_format ( __repeatRight));
	}
	//console.log("#Repeat_Go Left : "+$('#Repeat_Go').css('left')+", Width : "+$('#Repeat_Go').css("width"));
}

//todo: 사용함.
function getRepeatCnt(){



    var repeatCnt = $mcRepeatBtn.attr('repeat-cnt');
    if(!repeatCnt){
        console.log('repeat-cnt attr를 설정하세요. : ');
        repeatCnt = 3;
    }


	if($mcRepeatBtn.attr('repeat-cnt')){
		repeatCnt = $mcRepeatBtn.attr('repeat-cnt');
	}

	return repeatCnt;
}

/**
 * 구간반복 실행
 * @param repeatLeft
 * @param repeatRight
 */
function mcRepeat(repeatLeft, repeatRight)
{
    if (!ready) return;
    if (__playstate == 1) return;

    __RepeatSetleft(repeatLeft);
    __RepeatSetright(repeatRight);

	setCookie('repeat-left', repeatLeft);
	setCookie('repeat-right', repeatRight);

	if( !__repeat_doing ) {

		__RepeatDo();
		__SetPosition( repeatLeft) ;


        mcPlayWithUI(function(){
            classToggle($mcPlayToggle, 'control-play', 'control-pause');
        });


	} else {

		__RepeatStop();

	}

}

function mcRepeatSetLeft(){

}

//==================================================================================================================================
//	mc 구간반복 스크립트
//==================================================================================================================================



var repeat_slider_dragging = false;
var repeat_slider_button;
var repeat_slider_prevwidth=0;

function get_repeat_left()
{
	var d = __duration;
	var w = $mcPrgrsBg.outerWidth() ;
	return d==0? 1:  (__repeatLeft * w / d ) ;
}

function get_repeat_width()
{
	var d = __duration;
	var w = $mcPrgrsBg.outerWidth() ;
	var p =  ((__repeatRight - __repeatLeft) * w / d);
	if( p > $mcPrgrsBg.outerWidth() -1 ) p = $mcPrgrsBg.outerWidth();

	return d== 0? $mcPrgrsBg.outerWidth() : p ;
}



function mcRepeatDragStart(event, thisObj)                       // Drag Start(mouse click)
{
	//console.log('mcRepeatDragStart');
    if (__playstate == 1) return;
    repeat_slider_dragging = true;

}

function mcRepeatDraging(event, thisObj)
{


	if(!repeat_slider_dragging) return;

	var p = eventX - $mcPrgrsBg.offset().left  ; // 이벤트 클릭시 이동 위치
	var d = videoTagDocument.duration;
	if(typeof(d) === 'undefined' || d === null){
		d = videoTagDocument.getClip().duration;
	}
	var w = $mcPrgrsBg.outerWidth();
	__RepeatDraging();

    var currTime = time_format(parseInt( p * d / w));

	$mcCurrTime.html(currTime);
}

/**
 * 구간반복 드래그 종료
 * @param event
 * @param thisObj
 */
var repeatLeft, repeatRight;
function mcRepeatDragEnd(event, thisObj)
{
	//console.log(' mcRepeatDragEnd : ');
    var $this = $(thisObj);
    var isPinA = $this.hasClass('mc-pin-a');
    var isPinB = $this.hasClass('mc-pin-b');

    var p = eventX - $mcPrgrsBg.offset().left; // 이벤트 클릭시 이동 위치
    var d = videoTagDocument.duration; //재생전체길이

    if(typeof(d) === 'undefined' || d === null){
        d = videoTagDocument.getClip().duration;
    }
    var w = $mcPrgrsBg.outerWidth(); //재생바 길이
    var left =  p * d / w;
	var thisPosition = left;

    if(isPinA || isPinB){
        if ( isPinA ) {

            repeatLeft = thisPosition;
            setCookie('repeat-left', repeatLeft);


			__RepeatSetleft(repeatLeft);

        } else if ( isPinB ) {


			repeatRight = thisPosition;
            setCookie('repeat-right', repeatRight);



			__RepeatSetright(repeatRight);
			__RepeatDragEnd();
        }


    }else{

		if(!repeat_slider_dragging) return;
		repeat_slider_dragging = false;
	}





}






//==================================================================================================================================
//	재생위치 함수
//==================================================================================================================================


function mcGetTime()
{

    return __GetTime();

}


function mcGetPosition()
{

    return __GetPosition();

}


function mcSetPosition( position )
{

    __SetPosition( position );

}


//==================================================================================================================================
//	시간 display 함수
//==================================================================================================================================
var chkLongTimeFormat=false;
function time_format(time)
{
	var ss = time%60;	    	
	var mm = ((time - ss)/60)%60;
	var hh = parseInt(time/3600);

	if (time > 3600) chkLongTimeFormat = true;
	if (chkLongTimeFormat == false)  return (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
	return (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
}

//==================================================================================================================================
//	북마크 스크립트
//==================================================================================================================================


function PosMove() 
{
	if( __playstate==1 ) return;

	var Bookmark = document.getElementById('Bookmark');
    n = Bookmark.length;
    for (var i = 1; i < n; i++ )  {
        if (Bookmark[i].selected == true)  {    
			__SetPosition( Bookmark[i].value ); 
			break;
		}
	}
}

function DataDel() 
{
	if( __playstate==1 ) return;

	var Bookmark = document.getElementById('Bookmark');
	if(Bookmark[0].selected == true) { return; }
    for (var i = 1; i < Bookmark.length; i++ ) {
        if (Bookmark[i].selected == true) { 
			__BookmarkDel (i-1); 
			break; 
		}
    }

//	alert(parent._video_bookmark);
	BookmarkRefresh();

}

function DataAdd() 
{
	if( __playstate==1 ) return;
	__BookmarkAdd();
}

function BookmarkShow()
{
	//var Bookmark = document.getElementById('Bookmark');
	var bookmarks = __bookmarks.split(",");
	for (var i=0; i<bookmarks.length ; i++)
	{
	    Bookmark.length += 1;
		Bookmark[i].text = bookmarks(i);
		Bookmark[i].value = bookmarks(i); //time_format ( bookmarks(i) );
	}
}

function Booksorting() 
{

   for (var i = 1; i < Bookmark.length; i++) {
       for (var j = i+1; j < Bookmark.length; j++ ) {
	        if (Bookmark(i).text > Bookmark(j).text) {
	            var list2=Bookmark(i).text;              
	            var list3=Bookmark(i).value;
	            Bookmark(i).text = Bookmark(j).text;
	            Bookmark(i).value = Bookmark(j).vlaue;
	            Bookmark(j).text = list2;              
	            Bookmark(j).value = list3;
	        }
        }
   }         
}

//var Bookmark;
function BookmarkRefresh()
{

	try
	{
		var Bookmark = document.getElementById('Bookmark');
		Bookmark.length =1; 

		var list = __GetBookmarkList();
		var marks = list.split(',');
		Bookmark.length = 1;

		//console.log(marks);

		//alert( "list=" + list + ", marks len=" + marks.length );
		if(list.length > 0) {
			for (i=0; i<marks.length ; i++)
			{
				//if(marks[i]==0) continue;
				Bookmark.length = Bookmark.length+1;
				Bookmark[i+1].value = marks[i];
				Bookmark[i+1].text = time_format(marks[i]);
			}
		}
		Bookmark[marks.length].selected = true;
        //todo: 없어도 되는지 확인
        // OutDivControl();
	}
	catch (e)
	{
	}
}



//==================================================================================================================================
//	스피더 배속 관련 스크립트
//==================================================================================================================================

function mcSetSpeed(rate) {
	if( __playstate==1 ) return;
	var speed = Math.floor(rate*10);
	__SetSpeed( speed ); 

}
function mcGetSpeed() {
	return __GetSpeed();

}
//todo: 필요없는지 확인. 필요없을것 같음.
//function setSpeed(rate,idx)
//{
//	if( __playstate==1 ) return;
//	speed = Math.floor(rate*10);
//	__SetSpeed( speed );
//	SpeedButtonRefresh ( idx );
//}
//todo: 필요없는지 확인. 필요없을것 같음.
//function SpeedButtonRefresh(idx)
//{
//	for (var i=1;i<9;i++){
//		var buttons = document.getElementById("sp_0"+i);
//		if(typeof(buttons) === 'undefined' || buttons === null){
//			//setTimeout( function(){KeeperCheck();}, 100);
//			return;
//		}
//		if (i==idx){
//			document.getElementById("sp_0"+i).src="speed0"+i+"_on.png";
//		}else{
//			document.getElementById("sp_0"+i).src="speed0"+i+"_off.png";
//		}
//	}
//}

//todo: 필요없는지 확인. 필요없을것 같음.
//function setSpeedKey(tt)
//{
//	if( __playstate==1 ) return;
//    var speed = __GetSpeed();
//	var idx = speed2idx( speed );
//
//	idx  = ( tt=='d' ? idx-1 : idx+1);
//	if( idx<1 ) idx = 1;
//	if( idx>9 ) idx = 9;
//
//	setSpeed( idx2speed(idx), idx );
//
//}
//
//function speed2idx(str)
//{
//	if( str< 7) return 1;
//	if( str< 9) return 2;
//	if( str<11) return 3;
//	if( str<13) return 4;
//	if( str<15) return 5;
//	if( str<17) return 6;
//	if( str<19) return 7;
//	return 8;
//}
//
//function idx2speed(idx)
//{
//	switch (idx){
//		case 1 : return 0.6;
//		case 2 : return 0.8;
//		case 3 : return 1.0;
//		case 4 : return 1.2;
//		case 5 : return 1.4;
//		case 6 : return 1.6;
//		case 7 : return 1.8;
//		case 8 : return 2.0;
//		default  : return 1.0;
//	}
//}
//
//function OutDivSpeed()
//{
//    var speed = __GetSpeed();
//	var idx = speed2idx( speed );
//	SpeedButtonRefresh(idx);
//}

/**
 * ===========================================================
 * 전체화면 스크립트 fsc, fscTgl, fscImgTgl, fscClassTgl
 * ===========================================================
 */

function mcCancelFscImg(isFullScreen){
    //var className = 'mc-fullscreen-toggle';

    var imgSrc, src_a, src_b;
    src_a = '_original_';
    src_b = '_fullscreen_';


    imgSrc = $mcFullscreenToggle.attr('src');

    if (!imgSrc.length) return;

    if (imgSrc.indexOf(src_a) >= 0) {

        $mcFullscreenToggle.attr('src', imgSrc.replace(src_a, src_b));

    }
}
function mcCancelFscClass(isFullScreen){

    classToggle($mcFullscreenToggle, 'control-fullscreen-off', 'control-fullscreen-on');
}

/**
 * 클래스 A에서 B로 바꿈
 * @param $el
 * @param AClass
 * @param BClass
 */
var classChangeAtoB = function($el, AClass, BClass){
	$el.removeClass(AClass).removeClass(BClass);
	$el.addClass(BClass);
}

//todo:사용함
/**
 * 취소에 따른 풀스크린 디자인
 * @param isFullScreen
 */
function mcCancelFullscreen(isFullScreen) {

    if (!isFullScreen) {

		classChangeAtoB($mcFullscreenToggle,'control-fullscreen-on', 'control-fullscreen-off');

    }


}

function mcFullscreen()	{

	__Fullscreen();



}


function mcFullscreenCancelClass()	{

    //classToggle($mcFullscreenToggle, 'control-fullscreen-on', 'control-fullscreen-off');

    $mcFullscreenToggle.removeClass('control-fullscreen-off').removeClass('control-fullscreen-on').addClass('control-fullscreen-on');
    //if ($el.hasClass(class_a)) {
    //	$el.removeClass(class_a).addClass(class_b);
    //	console.log('a');
    //	console.log($el[0]);
    //	return;
    //}else
    //
    //if ($el.hasClass(class_b)) {
    //	$el.removeClass(class_b).addClass(class_a);
    //	console.log('b');
    //	console.log($el[0]);
    //	return;
    //}

    //$el.toggleClass(class_a).toggleClass(class_b);
	//__Fullscreen();

}

function mcFullscreenToggleClass()	{

    classToggle($mcFullscreenToggle, 'control-fullscreen-on', 'control-fullscreen-off');
	//__Fullscreen();

}

function mcFullscreenToggle()	{

	imgToggle($mcFullscreenToggle, '_original_', '_fullscreen_');
	__Fullscreen();

}

function mcFullscreenImgToggle()	{
	imgToggle($mcFullscreenToggle, '_original_', '_fullscreen_');

}

var bookmark_checked=0;
function bookmark_clicked()		
{	
//	bookmark_tool.style.display = bookmark_tool.style.display=="none" ? "block":"none"; 
//	speed_tool.style.display = bookmark_tool.style.display=="none" ? "block":"none";
}

function bookmark_clicked2()		
{	
//	bookmark_tool.style.display = bookmark_tool.style.display=="none" ? "block":"none"; 
//	speed_tool.style.display = bookmark_tool.style.display=="none" ? "block":"none";
}

//todo: 없어도 되는지 확인
//function OutDivControl()
//{
//	try{
//		document.getElementById("ImgRepeat").src	= ( __repeat_doing  ? "repeat_on.png" : "repeat.png" );
//		document.getElementById("ImgMute").src = __mute ? "speaker_off.png" : "speaker.png";
//		document.getElementById("addition").src = parent._video_bookmark == "" ? "bookmark.png":"bookmark_on.png";
//	}catch(e){}
//}

/*	var counterFr = 0;
	$("#ImgFR").click(function() {
		if(counterFr == 10){
			return;
		}   
		counterFr++; 
	});

	var counterFf = 0;
	$("#ImgFF").click(function() {
		if(counterFf == 10){
			return;
		}   
		counterFf++; 
	});
*/
//todo: 실제 쓰이는지 확인완료. key이벤트는 parent에서 구현함.
document.onkeydown = 'return false';



/**
 * ===========================================================
 * 디자인스크립트
 * ===========================================================
 */
/**
 *
 * @param fixStr
 * @param str
 * @returns {*}
 */
var toggleStr = function (fixStr, str) {
	var toggleStr = null;
	var indexFixStr = str.indexOf(fixStr);

	if (indexFixStr > -1) {
		toggleStr = str.substring(0, indexFixStr);
	}
	return toggleStr;
};

/**
 * toggleOutStr
 * @param fixStr
 * @param str
 * @returns {*}
 */
var toggleOutStr = function (fixStr, str) {
	var toggleStr = null;
	var indexFixStr = str.indexOf(fixStr);

	if (indexFixStr > -1) {
		toggleStr = str.substring(indexFixStr+fixStr.length, str.length);
	}
	return toggleStr;
};

/**
 * _on_ 이 들어간 이미지 _off_로 토글
 * @param thisObj
 * @param state
 */
var imgToggleOnOff = function (thisObj, state) {
	var imgSrc = thisObj.attr('src');


	if (!imgSrc.length) return;

	var onString = toggleStr('_on', imgSrc);
	var onOutString = toggleOutStr('_on', imgSrc);


	if (onString != null && state == '_off') {
		thisObj.attr('src', onString + '_off' + onOutString);

	}

	var offString = toggleStr('_off', imgSrc);
	var offOutString = toggleOutStr('_off', imgSrc);

	if (offString != null && state == '_on') {
		thisObj.attr('src', offString + '_on' + offOutString);

	}

};


/**
 * 가이드 디자인 토글
 * @param thisObj
 */
//var guideToggle = function (thisObj) {
//	var $el = $(thisObj);
//	console.log($el.attr('guide'));
//	$mcGuideTxt.text($el.attr('guide'));
//
//	var guideImg = $el.attr('guide-img');
//	if (guideImg) {
//		$mcGuideImg.html('<img src="' + guideImg + '" width=80>');
//	}
//
//	if($mcGuide.is(":visible")){
//
//		$mcGuide.hide();
//		$mcGuideImg.hide();
//	}else{
//
//		$mcGuide.show();
//		if (guideImg) {
//			$mcGuideImg.show();
//		}
//	}
//
//
//	var guideLeft = $el.offset().left;// + $el.width() / 4;
//	var guideHalfWidth = $mcGuideTxt.width()/2;
//
//	//$mcGuide.find('.mc-guide-txt').css('left', guideLeft - guideHalfWidth);
//	$mcGuideTxt.css('left', guideLeft - guideHalfWidth );
//
//};


/**
 * ===========================================================
 * MediaCast-5.2.0.4.js (PARENT FRAME)의 checkKeyPressed와 연동
 * ===========================================================
 */

//parentKeyPressed
var parentKeyPressed = function(e,req){
	//console.log('parentKeyPressed e : ');
	//console.log(e);
	//console.log(e.keyCode);

	//console.log('parentKeyPressed req : ');
	//console.log(req);
	var ctrl = e.ctrlKey ? e.ctrlKey : ((e.keyCode === 17)); // ctrl detection

	if(e.keyCode == req.playPause.key && (req.playPause.ctrlkey?ctrl:true)){

        mcPlayPauseWithUI(req.playPause);

	} else if (e.keyCode == req.volumeUp.key && (req.volumeUp.ctrlkey?ctrl:true)) {
		mcVolumeUpWithUI(req.volumeUp);


	} else if (e.keyCode == req.volumeDown.key && (req.volumeDown.ctrlkey?ctrl:true)) {
		mcVolumeDownWithUI(req.volumeDown);


	} else if (e.keyCode == req.skipNext.key && (req.skipNext.ctrlkey?ctrl:true)) {
		mcSkipNextWithUI(req.skipNext);


	} else if (e.keyCode == req.skipPrev.key && (req.skipPrev.ctrlkey?ctrl:true)) {
		mcSkipPrevWithUI(req.skipPrev);


	} else if (e.keyCode == req.playNext.key && (req.playNext.ctrlkey?ctrl:true)) {
		mcPlayNextWithUI(req.playNext);


	} else if (e.keyCode == req.playPrev.key && (req.playPrev.ctrlkey?ctrl:true)) {
		mcPlayPrevWithUI(req.playPrev);


	} else if (e.keyCode == req.times.key && (req.times.ctrlkey?ctrl:true)) {
		mcTimesWithUI(req.times);


	} else if (e.keyCode == req.addBmrk.key && (req.addBmrk.ctrlkey?ctrl:true)) {
		mcAddBmrkWithUI(req.addBmrk);


	} else if (e.keyCode == req.goNextBmrk.key && (req.goNextBmrk.ctrlkey?ctrl:true)) {
		mcGoNextBmrkWithUI(req.goNextBmrk);


	} else if (e.keyCode == req.goPrevBmrk.key && (req.goPrevBmrk.ctrlkey?ctrl:true)) {
		mcGoPrevBmrkWithUI(req.goPrevBmrk);


	} else if (e.keyCode == req.repeat.key && (req.repeat.ctrlkey?ctrl:true)) {
		mcRepeatWithUI(req.repeat);


	} else if (e.keyCode == req.mute.key && (req.mute.ctrlkey?ctrl:true)) {
		mcMuteWithUI(req.mute);


	} else if (e.keyCode == req.fullscreen.key && (req.fullscreen.ctrlkey?ctrl:true)) {
		mcFullscreenWithUI(req.fullscreen);


    } else if (e.keyCode == req.fullscreenCancel.key && (req.fullscreenCancel.ctrlkey?ctrl:true)) {
        //fullscreenCancel
		mcFullscreenCancelWithUI(req.fullscreen);


	}else{
		console.log('else key detected');
	}

}

/**
 * 재생일시정지 UI변경포함
 * @param req
 */

var mcPlayPauseWithUI = function (req, callback) {
    playToggle();
	//console.log('11111111111111   : ');
	//mcPlayPause();
    //if(!callback) return mcPlayPauseWithClass('control-play', 'control-pause');

    //if(!callback) return mcPlayPauseWithImg('_play_', '_pause_');
    //
    if (typeof callback === "function") callback();


};

/**
 * 소리크게 UI변경포함
 * @param req
 */
var mcVolumeUpWithUI = function(req){
	console.log('mcVolumeUpWithUI req');
	console.log(req);

};

/**
 * 소리작게 UI변경포함
 * @param req
 */
var mcVolumeDownWithUI = function(req){
	console.log('mcVolumeDownWithUI req');
	console.log(req);

};

/**
 * 앞으로FF
 * @param req
 */
var mcSkipNextWithUI = function(req){
	console.log('mcSkipNextWithUI req');
	console.log(req);
    SkipToMove('F',req.value);

};

/**
 * 뒤로REW
 * @param req
 */
var mcSkipPrevWithUI = function(req){
	console.log('mcSkipPrevWithUI req');
	console.log(req);
    SkipToMove('R',req.value);

};

/**
 * 다음재생 UI변경포함
 * @param req
 */
var mcPlayNextWithUI = function(req){
	console.log('mcPlayNextWithUI req');
	console.log(req);

};

/**
 * 이전재생 UI변경포함
 * @param req
 */
var mcPlayPrevWithUI = function(req){
	console.log('mcPlayPrevWithUI req');
	console.log(req);

};

/**
 * 배속 UI변경포함
 * @param req
 */
var mcTimesWithUI = function(req){
	console.log('mcTimesWithUI req');
	console.log(req);

};

/**
 * 북마크추가 UI변경포함
 * @param req
 */
var mcAddBmrkWithUI = function(req){
	console.log('mcAddBmrkWithUI req');
	console.log(req);

};

/**
 * 북마크다음이동 UI변경포함
 * @param req
 */
var mcGoNextBmrkWithUI = function(req){
	console.log('mcGoNextBmrkWithUI req');
	console.log(req);

};

/**
 * 북마크이전이동 UI변경포함
 * @param req
 */
var mcGoPrevBmrkWithUI = function(req){
	console.log('mcGoPrevBmrkWithUI req');
	console.log(req);

};

/**
 * 구간반복 UI변경포함
 * @param req
 */
var mcRepeatWithUI = function(req){
	console.log('mcRepeatWithUI req');
	console.log(req);

};

/**
 * 음소거 UI변경포함
 * @param req
 */
var mcMuteWithUI = function(req){
	console.log('mcMuteWithUI req');
	console.log(req);

};

/**
 * 전체화면 UI변경포함
 * @param req
 */
var mcFullscreenWithUI = function (req) {
	console.log('mcFullscreenWithUI req');
	console.log(req);
    mcFullscreenToggleClass();

};

/**
 * 전체화면 취소 UI변경포함
 * @param req
 */
var mcFullscreenCancelWithUI = function (req) {
	console.log('mcFullscreenCancelWithUI req');
	console.log(req);
    mcFullscreenCancelClass();


};


/**
 * 구간반복 종료 UI변경포함
 */
function mcRepeatStopWithImg() {
    $mcPins.hide();
    __RepeatStop();
    $mcRepeatBtn.attr('src','images/btn_ab_on0.png');

    __repeat_doing = 0;

}

/**
 * 구간반복 종료 UI변경포함
 */
function mcRepeatStopWithUI(callback) {
    $mcPins.hide();
    __RepeatStop();
    //$mcRepeatBtn.attr('src','images/btn_ab_on0.png');
    __repeat_doing = 0;
    if (typeof callback === "function") callback();

}

/**
 * 구간반복 종료 UI변경포함
 */
function mcRepeatStopFromParent() {
    mcRepeatStopWithUI(function(){
        $mcRepeatBtn.removeClass('control-repeat-on0').removeClass('control-repeat-on1').removeClass('control-repeat-on2').addClass('control-repeat-on0');
    });

}


/**
 * 환경설정 메뉴 토글
 * @param toggleClass
 */
var menuShowToggle = function(toggleClass){

	var $tgl = $('.'+toggleClass);
	if (!$tgl.is(":visible")) {
		$tgl.show();
		$mcSetting.hide();

	}else{
		$tgl.hide();
		$mcSetting.show();

	}


};
var GUIDE_ADJUST_NUM = -25;
/**
 * 가이드 디자인 토글
 * @param thisObj
 */
var guideShow = function (thisObj) {
	var $el = $(thisObj);

	$mcGuideTxt.html($el.attr('guide'));

	var guideImg = $el.attr('guide-img');
	if (guideImg) {
		$mcGuideImg.html('<img src="' + guideImg + '" width=80>');
	}

	$mcGuide.show();
	if (guideImg) {
		$mcGuideImg.show();
	}

	if($el.attr('guide')=='전체화면'){
		GUIDE_ADJUST_NUM = -40;
	}

	var guideLeft = $el.offset().left;// + $el.width() / 4;
	var guideHalfWidth = $mcGuideTxt.width()/2;
	var left = guideLeft - guideHalfWidth + GUIDE_ADJUST_NUM;
//            console.log($el.attr('guide'));
	if($el.attr('guide')=='전체화면'){
		$mcGuideTxt.css('width', '50px');
		$mcGuideTxt.css('left', left);
	}else{
		$mcGuideTxt.css('width', 'auto');
		$mcGuideTxt.css('left', left);
	}

	//$mcGuide.find('.mc-guide-txt').css('left', guideLeft - guideHalfWidth);


};

/**
 * 가이드 디자인 토글
 * @param thisObj
 */
var guideHide = function (thisObj) {
	var $el = $(thisObj);

	$mcGuideTxt.html($el.attr('guide'));

	var guideImg = $el.attr('guide-img');
	if (guideImg) {
		$mcGuideImg.html('<img src="' + guideImg + '" width=80>');
	}

	if($mcGuide.is(":visible")){

		$mcGuide.hide();
		$mcGuideImg.hide();
	}

	if($el.attr('guide')=='전체화면'){
		GUIDE_ADJUST_NUM = -40;
	}


	var guideLeft = $el.offset().left;// + $el.width() / 4;
	var guideHalfWidth = $mcGuideTxt.width()/2;
	var left = guideLeft - guideHalfWidth + GUIDE_ADJUST_NUM;

	$mcGuideTxt.css('left', left);
	//$mcGuide.find('.mc-guide-txt').css('left', guideLeft - guideHalfWidth);


};

var GUIDE_BMRK_ADJUST_NUM = -45;
/**
 * 북마크 가이드 디자인 토글
 * @param thisObj
 */
var guideBmrkShow = function (thisObj) {
	var $el = $(thisObj);

	var guideLeft = $el.offset().left;// + $el.width() / 4;
	var guideHalfWidth = $mcGuideTxt.width()/2;
	var left = guideLeft - guideHalfWidth + GUIDE_BMRK_ADJUST_NUM;

	$('.mc-guide-bmrk').css('left', left);
	$('.mc-guide-bmrk').show();


};

/**
 * 북마크 가이드 디자인 토글
 * @param thisObj
 */
var guideBmrkHide = function (thisObj) {
	var $el = $(thisObj);

	$('.mc-guide-bmrk').hide();


	var guideLeft = $el.offset().left;// + $el.width() / 4;
	var guideHalfWidth = $mcGuideTxt.width()/2;
	var left = guideLeft - guideHalfWidth + GUIDE_BMRK_ADJUST_NUM;

	$mcGuideTxt.css('left', left);

};