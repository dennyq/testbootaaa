<%@ page contentType="text/html;charset=utf-8"%>
<%
//----------------------------------------------------------
// medicast- html5.jsp
//----------------------------------------------------------
String src = request.getParameter("src");
String userId = (String) session.getAttribute("userId");

%>

<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>player</title>

    <link rel="stylesheet" type="text/css" href="MediaCast.min.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="MediaCast.min.js"></script>


    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<div class="video_container" id="player_div"> </div>
<script type="text/javascript">
    $(function(){

        //setUp 예제
        MCVideo.setUp({

            'mode'          : 'html5',              //플레이어모드 html5/flash
            'src'        : '<%=src%>',           //재생소스설정
            'width'          : '100%',           //동영상너비
            'height'      : '100%',           //동영상높이
            'continuity'   : 'N',             //이어보기
            'lastPosition' : 150,                 //이어보기 위치
            'userId'      : '<%=userId%>',          //유저아이디
            'autoplay'    : 'Y',                //자동재생 Y/N

            //워터마크설정
            'wartermark' : {
                'on': 'Y',                          //사용여부
                'option':
                {
                    'text'      : '워터마크',        //글자
                    'opacity'   : 3,            //투명도
                    'position'  : 'left-top',     //위치
                    'size'    : 30,           //사이즈
                    'font'     : 'gothic',          //폰트
                    'colorCode'    : '0,0,255'          //색상코드
                }
            },

            //자막설정
            "subtitle": {
                "on": 'Y',
                "lang": 'ko',
                "url": './dragonball.vtt',

            },

        });

        //setUp 외 함수
        setTimeout(function () {

            //재생바위치 조회
            var getPosition = MCVideo.getPosition();
            console.log('getPosition : ' + getPosition);

            //재생바위치 설정
            MCVideo.setPosition(0);


            //볼륨값 조회
            var getVolume = MCVideo.getVolume();
            console.log('getVolume : ' + getVolume);

            //볼륨값 설정
            MCVideo.setVolume(80);


            //배속 조회
            var getRate = MCVideo.getRate();
            console.log('getRate : ' + getRate);

            //배속 설정
            MCVideo.setRate(1.2);


            //일시정지
            MCVideo.pause();

            //재생
            MCVideo.play();

            //정지
//            MCVideo.stop();

            //종료
//            MCVideo.end();

        }, 1000);
    });
</script>
</body>
