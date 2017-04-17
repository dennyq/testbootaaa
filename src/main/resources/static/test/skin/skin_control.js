//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 요술지팡이 : skin_control.js 
// 최종작업 : 김경미 ( 2016-01-20)
// Skin별 스크립트 함수모음
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//videoTag 가져오기
var videoTagDocument ;
var $videoTag;
var eventX=0;
var eventY=0;
var videoTagCounter=0;
var dvrIsLive = false;
var isFlash = false;

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
	parent.checkKeyPressed(e);
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
	videoTagDocument.ontimeupdate = function(){updateProgress()};
}

$(document).ready(function(){
	getVideoTag();
	//마우스 Dragging 시에 마우스 좌표
	$("body").bind('mousemove',function(e){ 
			event = e;
			eventX = e.pageX;
			eventY = e.pageY;
	});
	//마우스 드레그 중 영역을 벗어날 경우 드레그 중지 2016-02-12 김효진 시작
	$("body").mouseleave(function(){
		//console.log("mouse Leave");
		progress_dragend();
		VolumeSlide_Bar_DragEnd();
		Repeat_Bar_DragEnd();
		
		repeat_slider_dragging = false;
		volume_slider_dragging = false;
		progress_dragging = false;
		$("#progress_ball").unbind("mousemove");
	});
	$("#body").mouseup(function(){
		//console.log("mouse Up");
		progress_dragend();
		VolumeSlide_Bar_DragEnd();
		Repeat_Bar_DragEnd();
		
		repeat_slider_dragging = false;
		volume_slider_dragging = false;
		progress_dragging = false;
		$("#progress_ball").unbind("mousemove");
	});
	//마우스 드레그 중 영역을 벗어날 경우 드레그 중지 2016-02-12 김효진 끝


	//구간 반복 조절 시 늘어나는 문제점 해결을 위한 스크립트 2016-02-12 김효진 시작
	$("#Repeat_Go").css("max-width", $("#progress_bg").width()+"px");

	$(window).resize(function(){
		var agent = navigator.userAgent.toLowerCase();
		//Chrome일 경우  
		if (agent.indexOf("chrome") != -1) {
			$("#Repeat_Go").css("max-width", $("#progress_bg").width()+"px");
		}else{
			//IE에서는  Repeat_Go Div 가 없어야 정확하게 사이즈가 조절됨 그래서 사이즈 조절될 때 숨겼다가 나타게 함
			if($("#Repeat_Go").is(":visible") == false){
				$("#Repeat_Go").css("max-width", $("#progress_bg").width()+"px");
			}else{
				__RepeatStop();
				$("#Repeat_Go").hide( function(){
					$("#Repeat_Go").css("max-width", $("#progress_bg").width()+"px");
					$(this).show();
					__RepeatDo();
				});
			}
		}
		//console.log("Chagne " + $("#progress_bg").width());
	});
	
	
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
		StateNotice();
		//sync_playposition( __position );
		
		if( skin_bookmark != __bookmarks) 
		{
		    skin_bookmark = __bookmarks;
			BookmarkRefresh();
		}
		
		Repeat_Bar_show() ;
		OverDivPlay();

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
	
	
	if(__repeat_doing)  s='Repeating';
	try
	{
		if( __playstate>10) {
			document.getElementById('MEDIAPOSITION').innerHTML		= s; 
			s='Ended';
		}
		document.getElementById('MEDIASTATION').innerHTML	= s;

		OutDivSpeed();				// 속도조절 버튼 업데이트
		OutDivMute();				// mute 버튼 업데이트
//		VolumeSliderShow( parseInt(__volume/1.5) ) ;
		VolumeSliderShow( parseInt(__volume) ) ; 

		if( prev_state==-1 && __playstate==3 )  {
			OutDivPlay();
			prev_state =1;
		}

		// 구간반복 버튼
		/*
		StartPosition.innerHTML = time_format(__GetRepeatStart() );	
		EndPosition.innerHTML   = time_format(__GetRepeatEnd() );	
		*/
		document.images['ImgRepeat'].src	= ( __repeat_doing  ? "repeat_on.png" : "repeat.png" );
		document.images['btn_full'].src	= ( __Fullscreen  ? "screen_max.png" : "screen_max_on.png" );

	}
	catch (e)  	{ 	}

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

//==================================================================================================================================
//	플레이 진행바 컨트롤
//==================================================================================================================================
var progress_dragging=false;
var progress_offset_left = 0;
var prevWidth; 
function sync_playposition(t)
{
	if( progress_dragging == true ) return;
	try
	{
		w = document.getElementById('progress_bg').offsetWidth;
		prevWidth = document.body.clientWidth ;
		if ( document.body.clientWidth < prevWidth ) {
			$("#progress_bar").css("width", "0px") ;
			$("#progress_ball").css("left", "10px");
		}
		d = __duration;
		p = parseInt( t * w / d ) ;

		if(p>document.getElementById('progress_bg').offsetWidth) p=document.getElementById('progress_bg').offsetWidth;
		$("#progress_bar").css("width",  p+"px") ;
		$("#progress_ball").css("left", (p+progress_offset_left)+"px");
		
		//console.log("progress_ball left : "+p);

		prevWidth = document.body.clientWidth ;

	}
	catch (e) 
	{ 
	} 
}

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
	$("#MEDIAPOSITION").html("<center>" + posi + " / " + dur +"</center>");
	var w = document.getElementById('progress_bg').offsetWidth;
	prevWidth = document.body.clientWidth ;
	if ( document.body.clientWidth < prevWidth ) {
		$("#progress_bar").css("width", "0px") ;
		$("#progress_ball").css("left", "10px");
	}
	var d = 0;
	if(videoTagDocument.getClip().fullDuration){
		d= videoTagDocument.getClip().fullDuration;
	}else{
		d= __dvrFullDuration ;
	}

	var t = parseInt(videoTagDocument.getTime() )
	var p = parseInt( t * w / d ) ;

	if(p>document.getElementById('progress_bg').offsetWidth) p=document.getElementById('progress_bg').offsetWidth;
	$("#progress_bar").css("width",  p+"px") ;
	$("#progress_ball").css("left", (p+progress_offset_left)+"px");
	
	//console.log("progress_ball left : "+p);
	prevWidth = document.body.clientWidth ;
}

function updateProgress(){
	if( progress_dragging == true ) return;
	var posi = time_format( parseInt(videoTagDocument.currentTime) );
	var dur  = time_format( parseInt(videoTagDocument.duration) );
	$("#MEDIAPOSITION").html("<center>" + posi + " / " + dur +"</center>");
	var w = document.getElementById('progress_bg').offsetWidth;
	prevWidth = document.body.clientWidth ;
	if ( document.body.clientWidth < prevWidth ) {
		$("#progress_bar").css("width", "0px") ;
		$("#progress_ball").css("left", "10px");
	}
	var d = videoTagDocument.duration;
	var t = parseInt(videoTagDocument.currentTime)
	var p = parseInt( t * w / d ) ;

	if(p>document.getElementById('progress_bg').offsetWidth) p=document.getElementById('progress_bg').offsetWidth;
	$("#progress_bar").css("width",  p+"px") ;
	$("#progress_ball").css("left", (p+progress_offset_left)+"px");
	
	//console.log("progress_ball left : "+p);
	prevWidth = document.body.clientWidth ;
}

function progress_click (){
	//console.log("progress Click");
	if( __playstate==1 ) return;
	if( progress_dragging ) return;
	var myEvent=(!event)?window.event:event;//IE:Moz

	try
	{
		w = document.getElementById('progress_bg').offsetWidth;
		p = myEvent.clientX - document.getElementById('progress_bg').getBoundingClientRect().left ; // 이벤트 클릭시 이동 위치 
		d = __duration;
		sync_playposition( parseInt(p*d/w)); 
		__SetPosition ( parseInt(p*d/w) );		
	}
	catch (e)	{ 
	}
}

function progress_dragbegin()                       // Drag Start(mouse click)
{	
	if( __playstate==1 ) return;
	progress_dragging = true;
	
	document.onmouseup  = progress_dragend;
	document.onmousemove= progress_draging;
	return true;
}

function progress_draging(){
	if (progress_dragging==false) return;
	var myEvent=(!event)?window.event:event;//IE:Moz

	w = document.getElementById('progress_bg').offsetWidth;
	p = myEvent.clientX - document.getElementById('progress_bg').getBoundingClientRect().left; // 이벤트 클릭시 이동 위치 
	if(p<1) p=1;
	if(p>w) p=w;
	
	$("#progress_bar").css("width",  p+"px") ;
	$("#progress_ball").css("left", (p+progress_offset_left)+"px");

	document.getElementById('MEDIASTATION').innerHTML	= 'Seeking';
	posi = time_format( parseInt( p/w*__duration)  );
	dur  = time_format( __duration ); 
	document.getElementById('MEDIAPOSITION').innerHTML		= "<center>" + posi + " / " + dur;

	return true;
}

function progress_dragend()
{
	if(progress_dragging==false ) return ;
	progress_dragging = false;
	document.onmouseup	 = document.onmousemove = null; 
	var myEvent=(!event)?window.event:event;//IE:Moz


	try
	{
		w = document.getElementById('progress_bg').offsetWidth;
		p = myEvent.clientX - document.getElementById('progress_bg').getBoundingClientRect().left; // 이벤트 클릭시 이동 위치 
		if (p<1) p=1;
		if( p>w) p=w;
		
		d	= __duration; 
		__SetPosition( parseInt( p*d/w )) ; 

		//OutDivPlayBtn();
		
	}
	catch (e) 	{ 	} 
	return true;
}


//==================================================================================================================================
//	볼륨 슬라이드바 클릭 드레그 조절 스크립트
//==================================================================================================================================
var volume_offset_left	= 145 ;				//시작위치
var volume_init_position= 25;					//volume button 초기 값
var volume_slider_dragging = false;

function VolumeSliderShow(p)
{
	if(volume_slider_dragging==true) return;
	width = document.getElementById('VolumeSlide_Jump').offsetWidth;

	if(p<1) p=1;
	if(p>width) p = width;

	var ballleft = p - 2;

	$("#VolumeSlide_Go").css("width", p+"px");
	$("#VolumeSlide_Bar").css("left", ballleft+"px");
}

function VolumeSlide_Jump_Click()  
{
	if( __mute) mpMute();
	if ( volume_slider_dragging==true ) return;
	var myEvent=(!event)?window.event:event;//IE:Moz	

	width = document.getElementById('VolumeSlide_Jump').offsetWidth;

	//v = (203 + myEvent.clientX -document.body.clientWidth) ;
	v = myEvent.clientX - 81; 

	VolumeSliderShow(v);
	__SetVolume (parseInt(v)); //Math.floor(v*100/width));
}

function VolumeSlide_Bar_DragBegin()                       // Drag Start(mouse click)
{	
	if(__mute) mpMute();

	volume_slider_dragging = true;
	
	document.onmouseup		= VolumeSlide_Bar_DragEnd;
	document.onmousemove	= VolumeSlide_Bar_DragIng;

	return true;
}

function VolumeSlide_Bar_DragIng(){
	if ( volume_slider_dragging==false) return;
	width = document.getElementById('VolumeSlide_Jump').offsetWidth;
	left = volume_offset_left; // VolumeSlide_Jump.getBoundingClientRect().left
	var myEvent=(!event)?window.event:event;//IE:Moz

	v = myEvent.clientX - 81; 

	if(v<1) v=1;
	if(v>width) v=width;

	var ballleft = v - 2;

	$("#VolumeSlide_Go").css("width", v+"px");
	$("#VolumeSlide_Bar").css("left", ballleft+"px");

	if (parseInt(v)>=100)
	{
		MEDIAPOSITION.innerHTML		= "<center>vol=100"; 
	} else {
		MEDIAPOSITION.innerHTML		= "<center>vol=" + parseInt(v) ; 
	}
	return true;
}

function VolumeSlide_Bar_DragEnd()                       
{
	if( volume_slider_dragging==false  ) return;
	var myEvent=(!event)?window.event:event;//IE:Moz

	width = document.getElementById('VolumeSlide_Jump').offsetWidth;
	v = myEvent.clientX - 81; 
	if(v< 1){
		v = 1;
	}
	if(v>width){
		v=width-1;
	}
	volume_slider_dragging = false;
	__SetVolume (parseInt(v));
	return true;
}

function VolumeKey(tt)
{
	if( __mute) mpMute();
	width = document.getElementById('VolumeSlide_Jump').offsetWidth;
	
	v = __GetVolume() + ( tt=='u' ? 10 : -10) ;
	if(v<0) v=0;
	if(v>100) v=100;

	VolumeSliderShow(v * width / 100);
	__SetVolume( v*1.5 ); 
}

function mpMute()			
{	
	//document.ImgMute.src = __mute ? "speaker.png" : "speaker_off.png";
	document.getElementById('ImgMute').src = __mute ? "speaker.png" : "speaker_off.png";
	__mute = __mute? 0:1; 
	__SetMute(__mute); 
}



//==================================================================================================================================
//	플레이어 재생/종료 스크립트
//==================================================================================================================================

function PlayPause()		
{	
	if(__playstate==3) __Pause();
	else	__Play();
	
//	OutDivPlay();
	OverDivPlay();
}

function PlayStop()
{
	__RepeatStop();	
	__Stop(); 

	OutDivPlay();
}

function OutDivPlay()
{
	if(!ready) return;
	if(__playstate==3) document.images['ImgPlay'].src = "pause.png"; 
	else	document.images['ImgPlay'].src = "play.png"; 
}

function OutDivStop()
{
	if(!ready) return;
	if(__playstate==1) document.images['ImgStop'].src = "stop_on.png"; 
	else  document.images['ImgStop'].src = "stop.png";   
}

function OverDivPlay() 
{
	if(!ready) return;
	if(__playstate==3) document.images['ImgPlay'].src = "pause_on.png";
	else document.images['ImgPlay'].src = "play_on.png";	
}


//==================================================================================================================================
//	구간반복 스크립트
//==================================================================================================================================


var repeat_slider_dragging = false;
var repeat_slider_button;
var repeat_slider_prevwidth=0;

function get_repeat_left()
{	
	var d = __duration;
	var w = document.getElementById('progress_bg').offsetWidth ;
	return d==0? 1:  (__repeatLeft * w / d ) ; 
}

function get_repeat_width()
{
	var d = __duration;
	var w = document.getElementById('progress_bg').offsetWidth ;
	var p =  ((__repeatRight - __repeatLeft) * w / d);
	if( p > document.getElementById('progress_bg').offsetWidth -1 ) p = document.getElementById('progress_bg').offsetWidth;
	
	return d== 0? document.getElementById('progress_bg').offsetWidth : p ; 
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

function repeat()
{	
	if(!ready) return;
	if(__playstate==1) return;

	if( !__repeat_doing ) {	
		__RepeatSetleft  ( __repeatLeft);
		__RepeatSetright ( __repeatRight ? __repeatRight : __duration ); 
		__RepeatDo();
		//console.log("Repeat Left : "+__repeat_left +", Right : "+__repeatRight);
		Repeat_Bar_show();
	} else {
		__RepeatStop();
	}

	document.getElementById('Repeat_Go').style.display = __repeat_doing ? "block" : "none";
	document.getElementById('ImgRepeat').src	= __repeat_doing ? "repeat_on.png" : "repeat.png" ;
}

function Repeat_Bar_DragBegin(str)                       // Drag Start(mouse click)
{	
	if(__playstate==1) return;
	repeat_slider_dragging = true;
	repeat_slider_button = str;
	document.onmouseup	 = Repeat_Bar_DragEnd;
	document.onmousemove = Repeat_Bar_DragIng;
}
function Repeat_Bar_DragIng()                      
{	
	if(!repeat_slider_dragging) return;
	var p = eventX - document.getElementById('progress_bg').getBoundingClientRect().left  ; // 이벤트 클릭시 이동 위치 
	var d = videoTagDocument.duration;
	if(typeof(d) === 'undefined' || d === null){
		d = videoTagDocument.getClip().duration;
	}
	var w = document.getElementById('progress_bg').offsetWidth;
	var maxPosition = (document.getElementById('progress_bg').offsetWidth+document.getElementById('progress_bg').getBoundingClientRect().left);
	var left=0;
	var right=0;
	if( repeat_slider_button=='Repeat_Bar1'  ) {
		left =  p * d / w ;
		if(left> __repeatRight) return; 
		if(left<0 ) return ; 
		__repeatLeft =  p * d / w ;
		__RepeatSetleft  ( __repeatLeft);
	} else {
		right=  p * d / w ;
		if( right < __repeatLeft) return ;
		if( right > d) return;
		__repeatRight =  p * d / w;
		__RepeatSetright(__repeatRight);
	}
	//console.log("Log Right : "+right+", get_repeat_width() "+get_repeat_width());
	$('#Repeat_Go').css('left',  get_repeat_left()+"px"); 
	$('#Repeat_Go').css("width",  get_repeat_width()+"px");
	document.getElementById('MEDIAPOSITION').innerHTML = "<center>"+time_format( parseInt(__repeatLeft) )  + " / " + time_format( parseInt(__repeatRight))+"</center>";
}

function Repeat_Bar_DragEnd()
{
	if(!repeat_slider_dragging) return;
	repeat_slider_dragging = false;

	if(repeat_slider_button=='Repeat_Bar1'  ) {
		__RepeatSetleft ( __repeatLeft ); 
		$("#Repeat_Bar1").attr("alt", time_format( __repeatLeft)); 
	} else {
 		__RepeatSetright( __repeatRight); 
		$("#Repeat_Bar2").attr("alt", time_format( __repeatRight)); 
	}

	//Repeat_Bar_show();
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

	if(time>3600) chkLongTimeFormat = true;
	if( chkLongTimeFormat == false)  return (mm<10?"0"+mm:mm)+":"+(ss<10?"0"+ss:ss);
	return (hh<10?"0"+hh:hh)+":"+(mm<10?"0"+mm:mm)+":"+(ss<10?"0"+ss:ss);
}

//==================================================================================================================================
//	북마크 스크립트
//==================================================================================================================================


function PosMove() 
{
	if( __playstate==1 ) return;
	var Bookmark = document.getElementById('Bookmark');
    n = Bookmark.length;
    for (i = 1; i < n; i++ )  {
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
    for (i = 1; i < Bookmark.length; i++ ) {
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
		var Bookmark = document.getElementById('Bookmark')
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

		OutDivControl();
	}
	catch (e)
	{
	}
}



//==================================================================================================================================
//	스피더 배속 관련 스크립트
//==================================================================================================================================

function setSpeed(rate,idx)	
{
	if( __playstate==1 ) return;
	speed = Math.floor(rate*10);
	__SetSpeed( speed ); 
	SpeedButtonRefresh ( idx );
}

function SpeedButtonRefresh(idx)
{
	for (var i=1;i<9;i++){
		var buttons = document.getElementById("sp_0"+i);
		if(typeof(buttons) === 'undefined' || buttons === null){
			//setTimeout( function(){KeeperCheck();}, 100);
			return;
		}
		if (i==idx){
			document.getElementById("sp_0"+i).src="speed0"+i+"_on.png";
		}else{
			document.getElementById("sp_0"+i).src="speed0"+i+"_off.png";
		}
	}
}

function MuteButtonRefresh(mute)
{
	//console.log('mute : '+mute);
	document.getElementById("ImgMute").src = mute ? "speaker_off.png" : "speaker.png";
}

function setSpeedKey(tt)
{
	if( __playstate==1 ) return;
    var speed = __GetSpeed(); 
	var idx = speed2idx( speed );
	
	idx  = ( tt=='d' ? idx-1 : idx+1);
	if( idx<1 ) idx = 1; 
	if( idx>9 ) idx = 9;

	setSpeed( idx2speed(idx), idx ); 
	
}

function speed2idx(str)
{
	if( str< 7) return 1;
	if( str< 9) return 2;
	if( str<11) return 3;
	if( str<13) return 4;
	if( str<15) return 5;
	if( str<17) return 6;
	if( str<19) return 7;
	return 8;
}

function idx2speed(idx)
{
	switch (idx){
		case 1 : return 0.6;
		case 2 : return 0.8;
		case 3 : return 1.0; 
		case 4 : return 1.2; 
		case 5 : return 1.4; 
		case 6 : return 1.6; 
		case 7 : return 1.8; 
		case 8 : return 2.0; 
		default  : return 1.0;
	}
}

function OutDivSpeed()
{ 
    var speed = __GetSpeed(); 
	var idx = speed2idx( speed );
	SpeedButtonRefresh(idx);
} 

function OutDivMute()
{
    var mute = __GetMute();
	console.log(obj.isFlash);

	MuteButtonRefresh(mute);
}

function fullscreen()	{	__Fullscreen();  } 

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


function OutDivControl()
{
	try{
		document.getElementById("ImgRepeat").src	= ( __repeat_doing  ? "repeat_on.png" : "repeat.png" );
		document.getElementById("ImgMute").src = __mute ? "speaker_off.png" : "speaker.png";
		document.getElementById("addition").src = parent._video_bookmark == "" ? "bookmark.png":"bookmark_on.png"; 
	}catch(e){}
}

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

document.onkeydown  ='return false';

