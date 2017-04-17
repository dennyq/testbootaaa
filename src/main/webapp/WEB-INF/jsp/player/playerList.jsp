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
    <%--<script type="text/javascript" src="/js/MediaCast.js"></script>--%>
    <script type="text/javascript" src="/src/ua-parser.min.js"></script>
    <script type="text/javascript" src="/src/MediaCast-SetUpModule.js"></script>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body ><%--style="margin-top:-17px;"--%>
<%--<div class='video_container' id="player_div" style='display:block;width:100%;height:100%;'></div>--%>
<%--<br>${src}<br>--%>
<!-- DIV ID 변경하면 안됨 -->
<div class="video_container" id="player_div" style="display:block;width:100%;height:100%;"> </div>
<%--<div style='width:75%;height:100%;float:left;'>--%>

    <%--<div class="video_container" id="player_div" style="display:block;width:100%;height:100%;"> </div>--%>
    <%--<iframe id='iframe_player' name='iframe_player'  style='width:100%;height:100%;border:none;padding:0;margin:0;' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>--%>
<%--</div>--%>
<%--<ul id="playlist">--%>
    <%--<h3 style="color:white;">재생목록</h3>--%>
    <%--<c:if test="${not empty list}">--%>
    <%--<c:forEach items="${list}" var="items" varStatus="idx">--%>
        <%--<li>--%>
            <%--<a onclick="play_next(${idx.index})" class="currentvid">--%>
                <%--<img src='/image/00${idx.count}.png'/>--%>
                <%--<span style="color:white;font-size:12px;">샘플영상<?=$i+1?></span>--%>
            <%--</a>--%>
        <%--</li>--%>
    <%--</c:forEach>--%>
    <%--</c:if>--%>


<%--</ul>--%>


<%--${list}--%>



<script type="text/javascript">
//    var list = '<?=$mcast_list?>';
//    var title_list = list.split ("|");
    <%--var size = 3;//title_list.length;--%>

    <%--function play_next(index) {--%>
        <%--if (index >= size)	{	index=0;	}--%>
        <%--var file = '${list[index].file}';--%>
        <%--console.log(file);--%>
        <%--location.href = '?src=${list[index].file}';--%>
    <%--}--%>

//{login_uid=null, login_name=null, result_message=success, src=http://localhost/mov/demo.mp4, result_code=0000, list=[{file=mov/demo.mp4}, {file=mov/sample.mp4}, {file=mov/build-up.mp4}], login_ip=0:0:0:0:0:0:0:1}

    $(document).ready(function(){
        $(function(){
            var option = {
                'min':'N',
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
                <%--'src'			: '${list[0].file}',		    //file위치+file명--%>
                'cdn'			: '${cdn}',		    //cdn
                'width'			: '${width}',  			//너비
                'height'		: '${height}',  				//높이
                'continuity'	: '${continuity}',  					//이어보기
                'lastPosition'	: '${lastPosition}', 					//이어보기 위치
                'userId'		: 'aaa',		//유저아이디
                'autoplay'		: 'Y',		//자동재생
                'wartermark' : {						//워터마크
                    'text'		: '${userId}',		//글자
                    'opactity'	: 0,					//투명도
                    'position'	: 'left-top',			//위치
                    'size'		: 30,					//사이즈
                    'font'		: 'Tahoma',				//폰트
                    'colorCode'	: '0,0,255'				//색상코드
                },

                "subtitle": {
                    "on": '${subtitleOn}',
                    "lang": '${subtitleLang}',
                    "url": '${subtitleUrl}',
                    "flashUrl": '${subtitleFlashUrl}'
                },
                "playlist":{
                    "on": 'Y',
                    "list": [
                                {"src":"http://localhost/mov/demo.mp4","title":"데모1","poster":"demo.png"},
                                {"src":"http://cdn.sejong.ac.kr/sample.mp4","title":"데모2","poster":"demo.png"},
                                {"src":"http://localhost/mov/demo.mp4","title":"데모3","poster":"demo.png"},
                                {"src":"http://cdn.sejong.ac.kr/sample.mp4","title":"데모4","poster":"demo.png"},
                                {"src":"http://localhost/mov/demo.mp4","title":"데모5","poster":"demo.png"}

                    ],
                }
            };



            MCVideo.setUp(option);


        });



    });


</script>
</body>
</html>