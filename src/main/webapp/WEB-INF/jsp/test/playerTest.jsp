<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>player</title>

    <link rel="stylesheet" type="text/css" href="/css/MediaCast.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <%--<script type="text/javascript" src="./jquery.ajax-cross-origin.min.js"></script>--%>
    <script type="text/javascript" src="/js/MediaCastTest.js"></script>
    <%--<script type="text/javascript" src="/js/MediaCastHtml5.js"></script>--%>
    <%--<script type="text/javascript" src="/js/MediaCastTest.js"></script>--%>
    <!--<script type="text/javascript" src="/js/MediaCastTest.js"></script>-->
    <!--<script type="text/javascript" src="/js/MediaCastPlayer.js"></script>-->

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<%--<div id="getCurrTime" class="btn" style="display: block;height: 30px;background-color: #0055AA">getCurrTime</div>--%>
<div class="video_container" id="player_div" style="display:block;width:100%;height:100%;"> </div>
<script type="text/javascript">
    $(function(){
        var option = {
            'min':'N',
            'useToken':'N',
            'useProvider':'N',
            'mode'          : 'html5',              //플레이어모드
            'src'			: 'http://localhost/mov/demo.mp4',		    //file위치+file명
            'width'			: '100%',				//너비
            'height'		: '100%',				//높이
            'continuity'	: 'N',					//이어보기
            'lastPosition'	: 150, 					//이어보기 위치
            'userId'		: 'user-1153',		//유저아이디
            'autoplay'		: 'Y',		//자동재생
            'security'	    : {
                'on': 'N'
            },

        };

        var mCVideo = MCVideo.setUp(option);




        setTimeout(function(){
            var getPosition = mCVideo.getPosition();
            console.log(getPosition);
            var getRate = mCVideo.getRate();
            console.log(getRate);
        },4000);

//        var mcPlayer = MCPlayer().setUp(option);




    });
</script>
</body>
</html>