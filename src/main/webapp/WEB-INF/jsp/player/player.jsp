<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/taglibs.jspf" %>
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
    <script type="text/javascript" src="/js/MediaCast.min.js"></script>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<div class="video_container" id="player_div" style="display:block;width:100%;height:100%;"> </div>
<script type="text/javascript">
    $(function(){
        var option = {
            'min':'Y',
            'useToken':'N',
            'useProvider':'N',
            'mode'          : '${mode}',              //플레이어모드
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
            'skinType'		: '${skinType}',  			//스킨타입
            'src'			: '${src}',		    //file위치+file명
            'cdn'			: '${cdn}',		    //cdn
            'width'			: '${width}',  			//너비
            'height'		: '${height}',  				//높이
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

            "subtitle": {
                "on": '${subtitleOn}',
                "lang": '${subtitleLang}',
                "url": '${subtitleUrl}',
                "flashUrl": '${subtitleFlashUrl}'
            }
        };

        MCVideo.setUp(option);



    });
</script>
</body>
</html>