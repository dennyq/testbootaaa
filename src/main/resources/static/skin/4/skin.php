<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="imagetoolbar" content="no">
<title>::MayplePlayer::</title>
<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script language="JavaScript" src="common.js" type="text/javascript"></script>
	<script language="JavaScript" src="skin_stub.js" type="text/javascript"></script>
	<script language="JavaScript" src="skin_control.js" type="text/javascript"></script>
	<script language="javascript">
	$(document).ready(function(){
		setSpeed ( 0.1, 3);
		ready = true;
	});
	</script>
	<style type="text/css">
		#Bookmark					{ 
			font-family:"Verdana"; font-size:11px; color:#aaaaaa; background-color:#323232; outline:none; margin:0;border:"1 solid #323232";padding:10px;height:50px;
			border-radius: 10px 10px 10px 10px;
			-moz-border-radius: 10px 10px 10px 10px;
			-webkit-border-radius: 10px 10px 10px 10px;
			border: 0px solid #000000;
		}
	</style>
</head>


<body style="border:0;margin:0;padding:0px;width:100%;text-valign:top;" onconextmenu="return false" ondragstart="return false" onselectstart="return false" onkeydown="return false">

<table width="100%" border="0" cellpadding="0" cellspacing="0" valign="top" id="pannels">
<tr>
	<td width="11" valign="top"><img src="skin_left.png"></td>

	<td width="100%" background="skin_center.png">
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td style="height:45px;">
					<!--seeking, repeat, state start-->
					<table width="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td></td>
							<td>
							</td>
						</tr>
						<tr>
							<td width="120" style="height:45px;">
								<!--state start-->
								<!-- 현재상태 --><div id="MEDIASTATION" style='font-family:Verdana;font-size:11px;color:#c5c5c5;text-align:center;width:120px;text-transform:uppercase;'>연결중</div>
								<!--state end-->
							</td>
							<td id="progress_bg_wide" style="position:relative;">
								<!--seeking start-->
								<div style="padding:7px;">
										<div width="80%" align="left" background="seekbar.png" style="cursor:pointer;" id="progress_bg" name="progress_bg" onclick="progress_click();" style="padding-right:1200px;">
											<div style="width:100%; height:3px; position:releative; margin:0; padding:0;"><img src="seekbar_running.png"  name="progress_bar" id="progress_bar" style="position:absolute;cursor:pointer;top:21px;left:2px;width:1px;height:3px;"><img src="seek_point.png" width="15" height="15" name="progress_ball" id="progress_ball" onmousedown="progress_dragbegin();" onmousemove="progress_draging();" onmouseup="progress_dragend();" style="position:absolute;cursor:pointer;top:15px;left:0px;z-index:2;"></div>
										</div>
										
								</div>
								<!--repeat start-->
								<div id="Repeat_Go" style="width:100%;position:absolute;margin:0;padding:0px;left:0px;top:0px;display:none;">
									<img src="space_check_left.png" width="11" height="17" id="Repeat_Bar1" onMouseDown="Repeat_Bar_DragBegin('Repeat_Bar1');" alt="구간반복시작" style="position:absolute;left:0px;top:5px;cursor:pointer;">
									<img src="space_check_right.png" width="11" height="17" id="Repeat_Bar2" onMouseDown="Repeat_Bar_DragBegin('Repeat_Bar2');" alt="구간반복끝" style="position:absolute;top:5px;right:-11px;cursor:pointer;">
								</div>
								<!--repeat end-->

								<!--seeking end-->
							</td>
							<td width="160" style="height:45px;">
								<!--state start-->
								<!-- 재생시간 --><div id="MEDIAPOSITION" style="padding-left:8px;font-family:Verdana;font-size:11px;color:#c5c5c5;text-align:left;width:130px;text-transform:uppercase;">00:00:00 / 00:00:00</div>
								<!--state end-->
							</td>
						</tr>
					</table>
					<!--seeking, repeat, state end-->
				</td>
			</tr>
			<tr>
				<td style="height:72px;">
					<table width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<!-- volume strat-->
						<td style="width:60px; padding-right:10px;">
							<div style="width:60px; text-align:right;">
								<IMG SRC="speaker.png" name="ImgMute" id="ImgMute" onmouseout="MM_swapImgRestore();OutDivControl();" onmouseover="MM_swapImage('ImgMute','','speaker_on.png',1)" onclick="mpMute();" style="cursor:pointer;" alt='음소거/해제'  >
							</div>
						</td>
						<td style="width:130px;">
							<div style="width:110px; text-align:center;background-image:url(volumebar.png);background-position:left center;background-repeat:no-repeat;position:relative;">
								<div  id="VolumeSlide_Jump" name="VolumeSlide_Jump" onclick="VolumeSlide_Jump_Click();" style="width:100px;cursor:pointer;">
									<div id='SPEED_SPAN' style="width:100px;height:3px;margin:0;padding:0;text-align:left;"><img src="volume_chkbar.png" id="VolumeSlide_Go" name="VolumeSlide_Go" style="position:absolute;top:0px;height:3px;"><img src="volume_point.png" width="6" border="0" style="position:absolute;cursor:pointer;top:-1px;" id="VolumeSlide_Bar" name="VolumeSlide_Bar" onmousedown="VolumeSlide_Bar_DragBegin();" onmousemove="VolumeSlide_Bar_DragIng();" onmouseup="VolumeSlide_Bar_DragEnd();"></div>
								</div>
							</div>
						</td>
						<!-- volume end-->
						<td style="width:196px;text-align:left;">
							<!-- 배속 버튼 strat-->
							<div id="speed_tool" style="width:165px;;padding-top:10px;">
															<img src="speed01_off.png" id="sp_01" name="sp_01" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_01','','speed01_on.png',1)" onclick="setSpeed(0.6,1);" style="cursor:pointer"> 
								<img src="speed02_off.png" id="sp_02" name="sp_02" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_02','','speed02_on.png',1)" onclick="setSpeed(0.8,2);" style="cursor:pointer"> 
								<img src="speed03_off.png" id="sp_03" name="sp_03" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_03','','speed03_on.png',1)" onclick="setSpeed(1.0,3);" style="cursor:pointer"> 
								<img src="speed04_off.png" id="sp_04" name="sp_04" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_04','','speed04_on.png',1)" onclick="setSpeed(1.2,4);" style="cursor:pointer"> 
								<img src="speed05_off.png" id="sp_05" name="sp_05" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_05','','speed05_on.png',1)" onclick="setSpeed(1.4,5);" style="cursor:pointer"> 
								<img src="speed06_off.png" id="sp_06" name="sp_06" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_06','','speed06_on.png',1)" onclick="setSpeed(1.6,6);" style="cursor:pointer"> 
								<img src="speed07_off.png" id="sp_07" name="sp_07" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_07','','speed07_on.png',1)" onclick="setSpeed(1.8,7);" style="cursor:pointer"> 
								<img src="speed08_off.png" id="sp_08" name="sp_08" onmouseout="MM_swapImgRestore();OutDivSpeed();" onmouseover="MM_swapImage('sp_08','','speed08_on.png',1)" onclick="setSpeed(2.0,8);" style="cursor:pointer">
														</div>
							<!-- 배속 버튼 end-->
						</td>
						<td style="text-align:center;">
							<div style="width:167px;margin:0px 10px;display:inline-block;">
								<!-- 재생정지버튼 start-->
								<table border="0" cellpadding="0" cellspacing="0">
									<tr>
										<td style="width:25px;"><IMG SRC="pre.png" alt="뒤로 15초 이동" name="ImgFR" id="ImgFR" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('ImgFR','','pre_on.png',1)" onclick="FastMove('R');" style="cursor:pointer"></td>
										<td style="width:120px;text-align:center;">
											<div style="width:80px;text-align:center;display:inline-block;">
												<IMG SRC="play.png" name="ImgPlay"  id="ImgPlay" onmouseout="OutDivPlay();" onmouseover="OverDivPlay();"  onclick="PlayPause();" style="cursor:pointer;">
											</div>
										</td>
										<td style="width:25px;;text-align:right;"><IMG SRC="next.png" alt="앞으로 15초 이동" name="ImgFF" id="ImgFF" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('ImgFF','','next_on.png',1)" onclick="FastMove('F');" style="cursor:pointer"></td>
									</tr>
								</table>
								<!-- 재생정지버튼 end-->
							</div>

						</td>
						<td style="width:195px;text-align:right;">
							<!-- bookmark strat-->
							<div style="display:inline-block;width:190px;">

								<table border="0" cellpadding="0" cellspacing="0">
									<tr>
										<td>
											<select name="Bookmark" id="Bookmark" style="height:19px;margin:0;padding:0;">
												<option value="0">&nbsp;Bookmark</option>
											</select>
										</td>
										<td style="padding-left:4px;padding-top:3px;">
											<IMG SRC="bookmark01_off.png" name="bookmark_01" onmouseout="MM_swapImgRestore();" onmouseover="MM_swapImage('bookmark_01','','bookmark01_act.png',1)" onclick="DataAdd();" style="padding-left:2px;"title='현재위치를 북마크에 저장'> 
											<IMG SRC="bookmark02_off.png" name="bookmark_02" onmouseout="MM_swapImgRestore();" onmouseover="MM_swapImage('bookmark_02','','bookmark02_act.png',1)" onclick="DataDel();" style="padding-left:2px;"title='현재선택된 북마크를 삭제'> 
											<IMG SRC="bookmark03_off.png" name="bookmark_03" onmouseout="MM_swapImgRestore();" onmouseover="MM_swapImage('bookmark_03','','bookmark03_act.png',1)" onclick="PosMove();" style="padding-left:2px;"title='현재선택된 북마크위치로 이동'> 
										</td>
									</tr>
								</table>
							</div>
							<!-- bookmark end-->

						</td>
						<td style="width:190px;text-align:right;">
							<!-- bookmark,repeat,screen strat-->
							<div style="display:inline-block;width:150px;margin-right:25px;">
							<table border="0" cellpadding="0" cellspacing="0">
								<tr>
									<td style="width:50px;"><!--<IMG SRC="bookmark.png" name="addition" id="addition" >--></td>
									<td style="width:50px;"><IMG SRC="repeat.png" alt="구간반복 시작/종료" id="ImgRepeat" name="ImgRepeat" onclick="repeat();" onmouseout="MM_swapImgRestore();OutDivControl();" onmouseover="MM_swapImage('ImgRepeat','','repeat_on.png',1)" style="cursor:pointer"></td>
									<td style="width:50px;"><IMG SRC="screen_max.png" name="btn_full" id="btn_full" onmouseout="MM_swapImgRestore();OutDivControl();" onmouseover="MM_swapImage('btn_full','','screen_max_on.png',1)" onclick="fullscreen();" style="cursor:pointer" alt='전체화면 전환'></td>
								</tr>
							</table>	
							<!-- bookmark,repeat,screen end-->
							</div>
						</td>						
					</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td style="height:48px;">
				</td>
			</tr>
		</table>		
	</td>

	<td width="11" valign="top"><img src="skin_right.png"></td>
</tr>
</table>
</BODY>
</HTML>