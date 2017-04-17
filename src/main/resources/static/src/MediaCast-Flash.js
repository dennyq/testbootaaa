var _flowplayer=null;
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
function video_resize() {

	/*_video= document.getElementById('player_div2');
	 if(typeof(_video) === 'undefined' || _video === null){
	 setTimeout("video_resize()", 100);
	 return;
	 }
	 if(_video!=null) {
	 //alert( window.innerWidth + "," + window.innerHeight );
	 _video.width= window.innerWidth;
	 //_video.height= window.innerHeight - 23;
	 _video.height= window.innerHeight - __player_skinheight;
	 if(__player_div2width_init==0) __player_div2width_init = _video.width;
	 }*/
	console.log('__player_id : ' + __player_id);
	//$("#player_div2").width ( $("#player_div").width() );
	//$("#player_div2").height ( $("#player_div").height()- __player_skinheight );
	//$("#player_skin").width ( $("#player_div").width());
	console.log('=======================video_resize isFullScreen: ' + isFullScreen);
	//
	//var this__full_height = getCookie('__full_height');
	//var __ori_height = getCookie('__ori_height');
	//var hasFull = this__full_height && this__full_height != null;
	//
	//console.log('this__full_height : ' + this__full_height);
	//console.log('__ori_height : ' + __ori_height);
	//console.log('hasFull : ' + hasFull);
	//
	//
	//var h = window.innerHeight
	//	|| document.documentElement.clientHeight
	//	|| document.body.clientHeight;
	//

	var agent = navigator.userAgent.toLowerCase();
	var isIE;
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		//alert("인터넷 익스플로러 브라우저 입니다.");
		isIE = true;
	}
	else {
		//alert("인터넷 익스플로러 브라우저가 아닙니다.");
		isIE = false;
	}


	var bodyH = window.innerHeight;
	console.log('bodyH : ' + bodyH);
	if(isIE){
		if(isFullScreen){
            console.log('isIE isFullScreen t: ');
			//$("#player_div2").height($("#player_div").height() - __player_skinheight);
			$("#player_div2").height($("#player_div").height() - __player_skinheight);

		}else{
            console.log('__ori_height : ' + getCookie('__ori_height'));
            console.log('isIE isFullScreen f: '+getCookie('__ori_height'));
			$("#player_div2").height(getCookie('__ori_height'));
			//$("#player_div2").height(__ori_height);

		}

        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

        if (isFullScreen &&
            getCookie('__ori_height') <= $("#player_div2").height() &&
            h <= $("#player_div2").height()
        ) {
            console.log('!!!!!!!' + $("#player_div2").height());
            $("#player_div2").height(getCookie('__ori_height'));
            $("#player_div2").height(getCookie('__ori_height'));
            if (isFullScreen == true) {
                isFullScreen = false;
                console.log('1111getCookie : ' + getCookie('__ori_height'));


            }
            // $("#player_div2").height(getCookie('__ori_height')- __player_skinheight );
        }
	}else{
		//$("#player_div2").width ( $("#player_div").width() );
		//$("#player_div2").height ( $("#player_div").height()- __player_skinheight );
		//$("#player_skin").width ( $("#player_div").width());
		//
		//console.log('__player_id : ' + __player_id);
		//$("#player_div2").width ( $("#player_div").width() );
		//$("#player_div2").height ( $("#player_div").height()- __player_skinheight );
		//$("#player_skin").width ( $("#player_div").width());
		console.log('=======================video_resize isFullScreen: ' + isFullScreen);
		//
		var this__full_height = getCookie('__full_height');
		var __ori_height = getCookie('__ori_height');
		var hasFull = this__full_height && this__full_height != null;

		console.log('this__full_height : ' + this__full_height);
		console.log('__ori_height : ' + __ori_height);
		console.log('hasFull : ' + hasFull);


		var h = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;



		console.log('h : ' + h);
		console.log('h1 : ' + (h - 130));
		console.log('h2 : ' + $("#player_div2").height());//

		console.log($("#player_div2").height() == h - 260);//
		console.log($("#player_div2").height() == h - 130);//

		$("#player_div2").width($("#" + __player_id).width());

		var player_div2 = $('#player_div2');
		var __this_height = player_div2.height();
		setCookie('__this_height', __this_height, 1);
		console.log('__this_height : ' + __this_height);
		var __this__full_height;

		if (bodyH > __this__full_height) {
			__this__full_height = bodyH;
		}

		//console.log('__this__full_height : ' + __this__full_height);

		console.log('this__full_height!!! : ' + this__full_height);
		if (isFullScreen &&
			getCookie('__ori_height') <= $("#player_div2").height() &&
			h <= $("#player_div2").height()
		) {
			console.log('!!!!!!!' + $("#player_div2").height());
			//$("#player_div2").height(getCookie('__ori_height'));
			$("#player_div2").height(getCookie('__ori_height'));
			if (isFullScreen == true) {
				isFullScreen = false;
				console.log('1111getCookie : ' + getCookie('__ori_height'));


			}
			// $("#player_div2").height(getCookie('__ori_height')- __player_skinheight );
		}

		//if (document.getElementById('renameSubHeaderForm') != null) {
		//	console.log('exfull??!!!!!!!' + $("#player_div2").height());
		//	//$("#player_div2").height(getCookie('__ori_height'));
		//}

		if (hasFull && $("#player_div2").height() != __ori_height && $("#player_div2").height() == this__full_height) {
			console.log('aaaa');
			$("#player_div2").height(__ori_height);
			$("#player_div2").height(__ori_height);
			if (isFullScreen == true) {
				isFullScreen = false;
				console.log('1111getCookie : ' + getCookie('__ori_height'));


			}

		} else {

			$("#player_div2").height($("#" + __player_id).height() - __player_skinheight);
			$("#player_div2").height($("#" + __player_id).height() - __player_skinheight);

		}
		if (getCookie('__ori_height') < getCookie('__this_height')) {
			$("#player_div2").height($("#" + __player_id).height() - __player_skinheight);
			$("#player_div2").height($("#" + __player_id).height() - __player_skinheight);
			// __this__full_height = __this_height+130;
		}


		$("#player_skin").width($("#" + __player_id).width());

	}


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
function video_skip(time) { video_setposition(eval(video_gettime() + eval(time))); }
function set_bookmark_data (x)			  {	_video_bookmark = x;	}
function set_bookmark_url (x)			  {	_video_bookmarkurl= x;	}
function set_bookmark_key(site,id,title)  { _video_bookmarkparam = "site="+site + "&id=" + id + "&f=" + title; }


/**
 * VIDEO ONLOADED FLASH todo: 1.
 */
function video_onloaded() {
	console.log('video_onloaded : ');
}

/**
 * VIDEO ONENDED FLASH todo: 1.
 */
function video_onended() {
	console.log('video_onended : ');
}


var chk_video_fullscreen = false;
var video_prev_width=0, video_prev_height=0;
// 쿠키 생성
function setCookie(cName, cValue, cDay){
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
	if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
	document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if(start != -1){
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1)end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}
var isFullScreen = false;
var user_agent = navigator.userAgent.toLowerCase();
function video_fullscreen()
{
	//if (!document.fullscreenElement &&    // alternative standard method
	//    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
	//alert('fs');


	var __ori_height;
	var __full_height;
	var __this_height;
// $(document).keyup(function(e) {
//   console.log(e.which);
//      if (e.keyCode == 27) { // escape key maps to keycode `27`
//       setTimeout(function(){
//             var player_div2 = $('#player_div2');
//             // console.log();
//             //alert(player_div2.height());
//             player_div2.height(getCookie('__ori_height'));
//         }, 300);
//     }
// });
	var player_div2 = $('#player_div2');
	__this_height = player_div2.height();
	setCookie('__this_height', __this_height, 1);
	console.log('__this_height : '+__this_height);
	if(getCookie('__ori_height')>getCookie('__this_height')){
		console.log('.............');
	}
    console.log('.............isFullScreen : '+isFullScreen);
    console.log('.............chk_video_fullscreen : '+chk_video_fullscreen);
	if(isFullScreen == false ) {
		//var videocontainer = document.getElementById("__player_div");

		if (user_agent.indexOf('iphone') != -1 || user_agent.indexOf('android') != -1){
			var videocontainer = document.getElementById("player_div2");
		} else {
			var videocontainer = document.getElementById(__player_id);
		}
		if (videocontainer.requestFullscreen)	{  videocontainer.requestFullscreen(); }
		else if (videocontainer.msRequestFullscreen) { videocontainer.msRequestFullscreen(); }
		else if (videocontainer.mozRequestFullScreen)  {  videocontainer.mozRequestFullScreen();  }
		else if (videocontainer.webkitRequestFullscreen) { videocontainer.webkitRequestFullscreen();  }
		//videocontainer.style.width = "100%";
		//videocontainer.style.height = "100%";

		__ori_height=player_div2.height();
		console.log('__ori_height setting'+__ori_height);
		setCookie('__ori_height', __ori_height, 1);
		isFullScreen = true;
	} else{
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
		else if (document.mozCancelFullScreen) 	document.mozCancelFullScreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		isFullScreen = false;
		__full_height=$('#player_div2').height()
		var h = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
		console.log('h : '+h);
		console.log('__full_height : '+__full_height);
		setCookie('__full_height', __full_height, 1)
		setTimeout(function(){

			console.log(getCookie('__ori_height'));
			//alert(player_div2.height());
            player_div2.height(getCookie('__ori_height'));

		}, 300);
	}
	try{
		console.log('isFullScreen : '+isFullScreen)
		watermark_setposi();
		setTimeout(function(){
			//todo: 두개를 업데이트하는 이유를 모르겠음. 먼저 지워서 , 브라우저별로 확인
			//document.getElementById('player_skin').contentWindow.updateProgress();
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
			if( posi >  parseInt(_video_repeatright) ) video_setposition(parseInt( _video_repeatleft) );
			if( posi <  parseInt(_video_repeatleft) )  video_setposition(parseInt( _video_repeatleft) );
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
                if(isFullScreen == true) {
                    isFullScreen = false;
                    console.log('1111getCookie : '+getCookie('__ori_height'));


                }
                if(chk_video_fullscreen == true) {
                    chk_video_fullscreen = false;
                }
			}else{
                if(isFullScreen == true) {
                    isFullScreen = false;
                    console.log('1111getCookie : '+getCookie('__ori_height'));


                }
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

