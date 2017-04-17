//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 요술지팡이 : skin_stub.js
// 최종작업 : 김경미 ( 2016-01-20)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var __playstate=0, __duration=0, __position=0, __volume=30;
var __mute =0 , __speed=10, __repeat_doing=0;
var __bookmarks='';
var __topalways=0;
var __fullscreen=0;
var __bps=0, __bitrate= 0;
var __repeatLeft=0;
var __repeatRight=0;
var __dvrFullDuration = 0;
//var ready = false;

//-----------------------------------------------------------
// OnRefreshState 는 Mayple에서 호출(0.5초마다)하는 예약함수입니다.
// 삭제하거나 이름을 변경하지 마십시오.
//-----------------------------------------------------------

function __RefreshState( 
	pstate, dur, posi, chkmute, vol, speed,
	rep_left, rep_right, rep_doing, chkfull, marks ) 
{
	try
	{
		__playstate		= pstate;
		__duration		= dur;
		__position		= posi;
		__mute			= chkmute;
		__volume		= vol;
		__speed			= speed;
		__repeatLeft	= rep_left;
		__repeatRight	= rep_right;
		__repeat_doing   = rep_doing;
		__fullscreen    = chkfull; 
		__bookmarks		= marks;	// format ( 23, 45, 56, 78 .,,, ) 초단위 문자열 묶음

		OnSkinRefresh();
	}
	catch (e)	{	}
}
function __RefreshState2( 
	pstate, dur, posi, chkmute, vol, speed,
	rep_left, rep_right, rep_doing, chkfull, marks , bps, bitrate) 
{
	//console.log("reFresh volume="+vol);
	try
	{
		__playstate		= pstate;
		__duration		= dur;
		__position		= posi;
		__mute			= chkmute;
		__volume		= vol;
		__speed			= speed;
		__repeatLeft	= rep_left;
		__repeatRight	= rep_right;
		__repeat_doing   = rep_doing;
		__fullscreen    = chkfull; 
		__bookmarks		= marks;	// format ( 23, 45, 56, 78 .,,, ) 초단위 문자열 묶음
		__bps = bps;
		__bitrate = bitrate;

		OnSkinRefresh();
	}
	catch (e)	{	}
}
function __HideBookmarkControl( chk )
{
/*
	document.all.addition.style.display ='none';
	document.all.delete.style.display   ='none';
	document.all.move.style.display    ='none';
	document.all.Bookmark.style.display='none';
*/
}


function __GetPlayState()		{ return __playstate; }
function __GetDuration()		{ return __duration; }
function __GetPosition()		{ return __position; }
function __GetBookmark(idx)		{ return '';	}

function __GetVolume()			{ return __volume;	}
function __GetMute()			{ return __mute;		}
function __GetSpeed()			{ return __speed; }
function __GetRepeatStart()		{ return __repeatLeft;	}
function __GetRepeatEnd()		{ return __repeatRight; }

function __GetBookmarkList()	{ return __bookmarks; }
function __GetFullscreen()		{ return __fullscreen; }

//--------------------------------------------------------------------------------------------------------------
// href 의 파라미터명(예약어)은 변경하지 마십시오 
// 예약어: PLAY,PAUSE,STOP,SETPOSITION,SETVOLUME, SETMUTE,SETSPEED,TOPALWAYS
//         FASTFORWARD, FASTREVERSE, 
//		   SETPREAT_LEFT, SETREPEAT_RIGHT, SETREPEAT_DOING, SETREPEAT_STOP
//		   MARK_ADD,MARK_DEL,MARK_GO
//--------------------------------------------------------------------------------------------------------------

function __RepeatSetleft(x)		{	__repeatLeft; parent.video_repeatleft(__repeatLeft);}
function __RepeatSetright(x)	{	__repeatRight; parent.video_repeatright(__repeatRight);}

function __SetEnv()				{	document.location.href='#SETENV;';			}
function __MoveFrame()			{	document.location.href='#MOVEFRAME;';		}
function __Fillscreen()			{ 	document.location.href='#FILLSCREEN;';		}

//function __Play()				{	document.location.href='#PLAY;';			}
//function __Pause()				{	document.location.href='#PAUSE;';			}
//function __Stop()				{	document.location.href='#STOP;';			}
//function __SetPosition(t)		{	document.location.href='#SETPOSITION;'+t;	}	// time-point ( 0~3600 ) 

function __Play()				{	parent.video_play(); __playstate = 3;	 }
function __Pause()				{	parent.video_pause(); __playstate =	2; }
function __Stop()				{	parent.video_stop();__playstate =	1;  	 }
function __SetPosition(t)		{	parent.video_setposition(t);  }	

function __Fullscreen()			{	parent.video_fullscreen(); 		}

function __FastReverse()		{   parent.video_fastreverse(); 	}
function __FastForward()		{   parent.video_fastforward(); 	}

function __SetVolume(vol)		{	parent.video_setvolume(vol); }
function __SetMute(mute)		{	parent.video_setmute(mute);   }	// mute : 1-muted, 0-not

function __QuickMove(x)			{	document.location.href='#QUICKMOVE;'+x;		}	// x : as seconds
function __TopAlways(top)		{	document.location.href='#TOPALWAYS;'+top;	}	// top : 1-as top, 0 - not
function __SetSpeed(rate)		{	parent.video_setrate(rate);  } 	// rate : 5/8/10/12/14/16/18/20 

function __RepeatDo()			{	parent.video_repeatdo(); 	}
function __RepeatStart()		{	parent.video_repeatstart(); 	}
function __RepeatEnd()			{	parent.video_repeatend(); 	}
function __RepeatStop()			{	parent.video_repeatstop(); }

function __BookmarkAdd()		{	parent.video_bookmarkadd(); 	}
function __BookmarkDel(x)		{	parent.video_bookmarkdelete(x);  }	// x:index of mark
function __BookmarkGo(x)		{	parent.video_bookmarkgo(x); 	}	// x:index of mark


