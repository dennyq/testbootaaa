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
