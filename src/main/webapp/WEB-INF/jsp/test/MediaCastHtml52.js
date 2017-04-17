//---------------------------------
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
		tag+= '<iframe id="player_skin" name="player_skin" src="' + __player_skinfile + '?flash=1" width="100%" frameborder="0" style="padding:0;margin:0;width:100%;height:'+__player_skinheight+'px;"></iframe>';
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
		tag+= '<iframe id="player_skin" name="player_skin" src="' + __player_skinfile + '" width="100%" frameborder="0" style="margin-top: -5px!important;padding:0;margin:0;width:100%;height:'+__player_skinheight+'px;"></iframe>';
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
;//-------------------------------------------
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
var _video_repeatleft=0;
var _video_repeatright=0;
var _video_repeatstate=0;
var _video_fullscreen =0;
var _video_started = false;
var __playstate = 0;
var _videoRate = 1;
var tHeartbeatLatest =0;

//-------------------------------
// video size 컨트롤
//-------------------------------
$(document).ready(function(){
	_video = document.getElementById('player_video');
	refresh_skin();
	video_resize();
	//_video.addEventListener("play", videoOnplay);
});

var __player_videowidth_init=0;  // 풀스크린 상태 확인을 위해 적용되는 변수
function video_resize()		
{ 
	/*_video= document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout("video_resize()", 100);
		return;
	}
	if(_video!=null) {
		//alert( window.innerWidth + "," + window.innerHeight );
		_video.width= window.innerWidth;   
		//_video.height= window.innerHeight - 23;  
		_video.height= window.innerHeight - __player_skinheight;  
		if(__player_videowidth_init==0) __player_videowidth_init = _video.width;
	}*/
	$("#player_video").width ( $("#"+__player_id).width() );
	$("#player_video").height ( $("#"+__player_id).height()- __player_skinheight );
	$("#player_skin").width ( $("#"+__player_id).width());
}


//------------------------
// control function
//------------------------
//재생 상태 확인
var alertCounter = 0;

function onPlayCheck() 
{
	var obj= document.getElementById('player_video');
    //console.log("movie state : " +obj.readyState+", Terminated = "+Terminated+", alertCounter = "+alertCounter+", obj.networkState="+obj.networkState);
	if(obj.readyState==0 && Terminated == false && obj.networkState == 3 ){
		if(alertCounter == 10){
			alert('동영상 파일을 찾을 수 없습니다.');
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
function video_getposition()	{ 
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_getposition();}, 100);
		return;
	}
	if(_video.readyState ==0) return 0;
	return parseInt(_video.currentTime); 
} 
function video_setvolume(v)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setvolume(v);}, 100);
		return;
	}
	_video.volume= v/110; 
}
function video_setmute(chk)	{
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){video_setmute(chk);}, 100);
		return;
	}
	_video.muted = (_video.muted==true ? false : true ); 
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
function video_repeatleft(x)		{ _video_repeatleft=x; }
function video_repeatright(x)	{ _video_repeatright=x; }
function video_repeatdo()		{ _video_repeatstate=1; }
function video_repeatstart()	{ _video_repeatstate=1; }
function video_repeatend()		{ _video_repeatstate=0; }
function video_repeatstop()	{ _video_repeatstate=0; }
function video_fastreverse()	{ video_setposition ( video_getposition()-15 ); }
function video_fastforward()	{ video_setposition ( video_getposition()+15 ); }
function video_state()				{ return __playstate; }

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
function video_fullscreen()		
{ 
	//if (!document.fullscreenElement &&    // alternative standard method
    //    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
		//alert('fs');
	if(isFullScreen == false ) { 
		//var videocontainer = document.getElementById("__player_div");

		if (user_agent.indexOf('iphone') != -1 || user_agent.indexOf('android') != -1){
			var videocontainer = document.getElementById("player_video");
		} else {
			var videocontainer = document.getElementById(__player_id);
		}
		if (videocontainer.requestFullscreen)	{  videocontainer.requestFullscreen(); }
		else if (videocontainer.msRequestFullscreen) { videocontainer.msRequestFullscreen(); }
		else if (videocontainer.mozRequestFullScreen)  {  videocontainer.mozRequestFullScreen();  }
		else if (videocontainer.webkitRequestFullscreen) { videocontainer.webkitRequestFullscreen();  }
		//videocontainer.style.width = "100%";
		//videocontainer.style.height = "100%";
		isFullScreen = true;
	} else{
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
		else if (document.mozCancelFullScreen) 	document.mozCancelFullScreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		isFullScreen = false;
	}
	try{ 
		watermark_setposi();
		setTimeout(function(){
			document.getElementById('player_skin').contentWindow.updateProgress();
			document.player_skin.updateProgress(); 
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

function video_getfullscreen() 
{ 
	if( __player_videowidth_init<1 || window.innerWidth == __player_videowidth_init ) return 0;
	else return 1;
}

//----------------------------------
// LMS 적용을 위한 추가 스크립트
//----------------------------------
var __player_lms_progress;
var __player_lms_maxposi;
var __player_lms_sposi;
var __player_lms_elapsed;

function set_lms_parameter( progress, maxposi, sposi)
{
	//alert( progress +" ," + maxposi + "," + sposi );
	__player_lms_progress =progress;
	__player_lms_maxposi = maxposi;
	__player_lms_sposi = sposi;
	__player_lms_elapsed = sposi;
	//alert( __player_check_keeper );
	if( __player_check_keeper==0) set_lms_init(); 
}

function set_lms_check_position()
{
	try
	{
		var p = video_getposition();
		if( p> __player_lms_maxposi+1) video_setposition(__player_lms_maxposi-1);
		else  {
			if( video_getposition()> __player_lms_maxposi) __player_lms_maxposi = video_getposition();
		}
	}
	catch (e) 	{ } 
	setTimeout( 'set_lms_check_position()',250);
}

function set_lms_callback () 
{ 
	try
	{
		var p = video_getposition();
		if(p<__player_lms_maxposi+1) parent.callback_from_player( p ); //obj.getcurrentposition()); 
	}
	catch (e) 	
	{
		__player_lms_elapsed = __player_lms_elapsed + 1;
		parent.callback_from_player( __player_lms_elapsed);
	} 
	setTimeout('set_lms_callback()', 1000); 
}

function set_lms_init()
{
	try { set_lms_callback();	} 	catch (e) 	{ }
	try	{ if(__player_lms_progress<100) set_lms_check_position(); }catch (e) 	{ }
	try { if(__player_lms_sposi>0)  video_setposition(__player_lms_sposi);	} catch (e) { }
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
	_video = document.getElementById('player_video');
	if(typeof(_video) === 'undefined' || _video === null){
		setTimeout( function(){onAuthorized(x);}, 100);
		return;
	}
	
	if(_video.src.length > 1) return;

	//To-do ArrayBuffer 사용
	/* Test */


	/* Test */
	_video.src= x; //decodeURI(x); //x; //.replace(/%20/g,'+');
	//console.log(x);

	//2017.01.11 autoplay 변수화
	if(__player_video_autoplay==1){
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
function refresh_skin()
{
	
	try
	{
	
		var t = new Date();
		if( tHeartbeatLatest>0 && (t.getTime()- tHeartbeatLatest) > 7*1000 ) {
			onHeartBeat(0);
			return ;
		} 

	
		_video= document.getElementById('player_video');
		var dur = parseInt(_video.duration);
		var chkmute = _video.muted==true? 1:0;
		var posi = parseInt(_video.currentTime);
		var vol= parseInt(_video.volume*110);
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
		var rep_right	= _video_repeatright==0 ? dur:_video_repeatright;
		var rep_doing	= _video_repeatstate;
		var chkfull		= _video_fullscreen;
		var marks		= _video_bookmark;

		if(_video.duration>0 ) 
			player_skin.__RefreshState2 ( playstate, dur, posi, chkmute, vol, rate, rep_left, rep_right, rep_doing, chkfull, marks,0,0); 
		if( _video_repeatstate==1) {
			if( posi >  _video_repeatright-2 ) video_setposition( _video_repeatleft-1 ); 
			if( posi <  _video_repeatleft-1 )  video_setposition( _video_repeatleft ); 
		}


	}
	catch (e)  	{}
	setTimeout('refresh_skin()',250 );
	//setTimeout('refresh_skin()', 5000 );
}


// context menu handling
$(document).ready(function () 
{
  $('.video_container').bind('contextmenu',  function () {return false; });
  $("body").keypress(function(e){
		if(e.keyCode == 27) {	//esc 키 입력 시 이벤트
			if(isFullScreen == true) {
				isFullScreen = false;
			}
		}
  });
});


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
			
			$("#__getScript__").html("<script>"+func+"</"+"script>");
			////////console.log("read data : "+$("#__getScript__").text() );
		}
       //alert(e.data);
	//}
       // Do whatever you want to do with the data got from IFrame in Parent form.
}, false);
/* 타 도메인 메세지 전송 추가*/

