<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/taglibs.jspf" %>
<%@include file="MediaCast-LIB.jsp"%>
<%
    String src = "http://192.168.0.25/mov/demo.mp4";
    String mediaServer = "192.168.0.25";
    String userId = "test";
    String srcPath = "mov/demo.mp4";
    String token = GET_WEBTOKEN (mediaServer, userId, srcPath );
%>
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
    <%--<script type="text/javascript" src="/js/MediaCast.min.js"></script>--%>
    <%--<script type="text/javascript" src="/js/MediaCast.js"></script>--%>
    <script type="text/javascript" src="/src/ua-parser.min.js"></script>
    <script type="text/javascript" src="/src/MediaCast-SetUpModule2.js"></script>

    <%--//html5 용--%>

    <script type="text/javascript" src="/src//MediaCast-Parameter.js"></script>
    <script type="text/javascript" src="/src/MediaCast-5.2.0.4.js"></script>
    <script type="text/javascript" src="/src/MediaCast-Html5.js"></script>

    <%--//flash 용--%>
    <%--<script type="text/javascript" src="/src/jquery.xdomainrequest.min.js"></script>--%>
    <%--<script type="text/javascript" src="/src/flowplayer-3.2.11.min.js"></script>--%>
    <%--<script type="text/javascript" src="/src/MediaCast-Parameter.js"></script>--%>
    <%--<script type="text/javascript" src="/src/MediaCast-5.2.0.4.js"></script>--%>
    <%--<script type="text/javascript" src="/src/MediaCast-Flash.js"></script>--%>


    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<div class="video_container" id="player_div" style="display:block;width:100%;height:100%;"> </div>
<script type="text/javascript">
    $(function(){
        var option = {
            'test' :'Y',
            'min':'N',
            'useToken':'N',
            'useProvider':'N',
            'useCookie':'Y',
            'mode'          : 'html5',              //플레이어모드
            'protocol'      : 'HTTP P/G',//'${protocol}',          //프로토콜
            'security'	    : {
                'on': 'N',//'on': '${securityOn}',
                'option':
                {
                    'blockVolume'		: '${securityOptionBlockVolume}', //볼륨컨트롤차단
                    'blockVirtual'		: '${securityOptionBlockVirtual}', //버츄얼환경차단
                    'blockTerminal'		: '${securityOptionBlockTerminal}', //터미널환경차단
                    'blockApple'		: '${securityOptionBlockApple}', //맥환경차단
                    'blockMessenger'	: '${securityOptionBlockMessenger}' //메신저차단
                }
            },
            <%--'skinType'		: '${skinType}',  			//스킨타입--%>
            'skinType'		: 'advance',  			//스킨타입
            <%--'src'			: '${src}',		    //file위치+file명--%>
            'src'			: '<%=src%>',	    //file위치+file명
            'token'         : '<%=token%>',
            'posterImage'	: 'http://192.168.0.25/skin/advance/images/sample/sample_movie_10.jpg',		    //file위치+file명
            'width'			: '100%',  			//너비
            'height'		: '100%',  				//높이
            'continuity'	: '${continuity}',  					//이어보기
            'lastPosition'	: '${lastPosition}', 					//이어보기 위치
            'userId'		: '${userId}',		//유저아이디
            'autoplay'		: '${autoplay}',		//자동재생
            'wartermark' : {
                'on': 'N',//'on': '${wartermarkOn}',
                'option'://워터마크
                {
                    'text'      : '${userId}',    //글자
                    'opactity'  : 0,				//투명도
                    'position'  : 'left-top',		//위치
                    'size'		: 30,				//사이즈
                    'font'	    : 'Tahoma',			//폰트
                    'colorCode'	: '0,0,255'			//색상코드
                }
            },

            <%--"subtitle": {--%>
                <%--&lt;%&ndash;"on": '${subtitleOn}',&ndash;%&gt;--%>
                <%--"on": 'Y',--%>
                <%--"lang": '${subtitleLang}',--%>
                <%--"url": '${subtitleUrl}',--%>
                <%--"flashUrl": '${subtitleFlashUrl}'--%>
            <%--}--%>
            //자막설정
            "subtitle": {
                "on": 'Y',
                "lang": 'ko',
                "url": 'http://localhost/free/dragonball.vtt'

            },
        };

        MCVideo.setUp(option);


        var video = document.getElementById("player_video"), track;
        video.addEventListener("loadedmetadata", function() {
            console.log(this);

            track = this.textTracks[0];
//                track = this.addTextTrack("captions", "English", "en");

        });

        //setUp 외 함수 예제입니다.
        setTimeout(function () {

//            console.log('START track HIDDEN : ');
//            track.mode = 'hidden';
//            console.log('END track HIDDEN : '); //todo: 밖으로
//            $mcVideo[0].textTracks[0].mode = "hidden";  // "showing" will make them reappear

//            console.log($('#player_video')[0]);

//            console.log($('#player_video').find('track'));

//            var track = $('#player_video').find('track');
//            console.log('track : ');
//            console.log(track.attr(':hidden'));



//            track.addEventListener("load", function() {
//                this.mode = "showing";
//            });
//            track.hide();
//            console.log(track[0].mode);
//            var mode = track.mode $mcVideo[0].textTracks[0].mode = "hidden";  // "showing" will make them reappear

//
//            //재생바위치 조회
//            var getPosition = MCVideo.getPosition();
//            console.log('getPosition : ' + getPosition);
//
//            //재생바위치 설정
//            MCVideo.setPosition(0);
//
//
//            //볼륨값 조회
//            var getVolume = MCVideo.getVolume();
//            console.log('getVolume : ' + getVolume);
//
//            //볼륨값 설정
//            MCVideo.setVolume(80);
//
//
//            //배속 조회
//            var getRate = MCVideo.getRate();
//            console.log('getRate : ' + getRate);
//
//            //배속 설정
//            MCVideo.setRate(1.2);
//
//
//            //일시정지
////            MCVideo.pause();
//
//            //재생
////            MCVideo.play();
//
//            //정지
////            MCVideo.stop();
//
//            //종료
////            MCVideo.end();
//
        }, 3000);

    });

</script>
</body>
</html>