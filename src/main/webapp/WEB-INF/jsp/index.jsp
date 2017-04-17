<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String url = request.getRequestURL().toString();
    String serverUrl = url.substring(0, url.length() - request.getRequestURI().length()) + request.getContextPath() ;

%>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <title>LGU+ 플레이어 데모</title>
    <style>
        body { font-size:12px; font-height:12px;font-family:"tahoma"; border:0; }
        input { font-size:12px;font-height:10px;font-family:"Verdana";  }
        td { font-size:12px;font-family:"tahoma";  }
        tr { font-size:12px;font-family:"tahoma";  }
    </style>

</head>

<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<a href="http://localhost/player/skinApply?src=http://localhost/mov/demo.mp4">skin /교체</a>
<table id="Table_01" width="1280"<%-- height="3724"--%> border="0" cellpadding="0" cellspacing="0">
    <tbody><tr>
        <td><img src="/img/lg/lguplus.png" alt="" style="padding-left:50px;"></td>
    </tr>
    <tr>
        <td>
            <img src="/img/lg/LGU_MediaPlayer.jpg" width="1280" height="1054" alt=""></td>
    </tr>
    <%--<tr>--%>
        <%--<td>--%>
            <%--<img src="/img/lg/LGU_MediaPlayer_0425_02.jpg" width="1280" height="791" alt=""></td>--%>
    <%--</tr>--%>
    <%--<tr>--%>
        <%--<td>--%>
            <%--<img src="/img/lg/LGU_MediaPlayer_0425_03.jpg" width="1280" height="943" alt=""></td>--%>
    <%--</tr>--%>
    <%--<tr>--%>
        <%--<td><center>--%>
            <%--<table width="360">--%>
                <%--<tbody><tr>--%>
                    <%--<td><br> <a href="http://auth.mediacast.co.kr/lg/MediaPlayer2.0_Introduce_v1.52.pdf"><img src="/img/lg/btn_proposal.png"></a></td>--%>
                    <%--<td><br> <a href="http://auth.mediacast.co.kr/lg/MediaCast.apk"><img src="/img/lg/btn_apk.png"></a></td>--%>
                <%--</tr>--%>
                <%--</tbody></table></center>--%>
        <%--</td>--%>
    <%--</tr>--%>
    <%--<tr>--%>
        <%--<td>--%>
            <%--<img src="/img/lg/LGU_MediaPlayer_0425_04.jpg" alt="" width="1268" height="590" usemap="#Map"></td>--%>
    <%--</tr>--%>
    <%--<tr>--%>
        <%--<td style="padding-left:400px;">--%>

        <%--</td>--%>
    <%--</tr>--%>
    </tbody></table>

<%--<map name="Map">--%>


    <%--<area shape="rect" coords="745, 260, 845, 290" href="javascript:html5_player2(&#39;free/demo.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="850, 260, 950, 290" href="javascript:html5_player3(&#39;free/demo.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="955, 260, 1055, 290" href="javascript:flash_player2(&#39;free/demo.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="1060, 260, 1160, 290" href="javascript:flash_player3(&#39;free/demo.mp4&#39;,0)">--%>

    <%--<area shape="rect" coords="745, 300, 845, 331" href="javascript:html5_player2(&#39;free/movie.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="850, 300, 950, 331" href="javascript:html5_player3(&#39;free/movie.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="955, 300, 1055, 331" href="javascript:flash_player2(&#39;free/movie.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="1060, 300, 1160, 331" href="javascript:flash_player3(&#39;free/movie.mp4&#39;,0)">--%>

    <%--<area shape="rect" coords="745, 341, 845, 370" href="javascript:html5_player2(&#39;free/build-up.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="850, 341, 950, 370" href="javascript:html5_player3(&#39;free/build-up.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="955, 341, 1055, 370" href="javascript:flash_player2(&#39;free/build-up.mp4&#39;,0)">--%>
    <%--<area shape="rect" coords="1060, 341, 1160, 370" href="javascript:flash_player3(&#39;free/build-up.mp4&#39;,0)">--%>

    <%--<area shape="rect" coords="745, 420, 845, 449" href="javascript:html5_player2(&#39;mov/demo.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="850, 420, 950, 450" href="javascript:html5_player3(&#39;mov/demo.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="955, 420, 1055, 449" href="javascript:flash_player2(&#39;mov/demo.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="1060, 420, 1160, 450" href="javascript:flash_player3(&#39;mov/demo.mp4&#39;,1)">--%>

    <%--<area shape="rect" coords="745, 461, 845, 490" href="javascript:html5_player2(&#39;mov/movie.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="850, 461, 950, 490" href="javascript:html5_player3(&#39;mov/movie.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="955, 461, 1055, 490" href="javascript:flash_player2(&#39;mov/movie.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="1060, 461, 1160, 490" href="javascript:flash_player3(&#39;mov/movie.mp4&#39;,1)">--%>

    <%--<area shape="rect" coords="745, 502, 845, 531" href="javascript:html5_player2(&#39;mov/build-up.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="850, 502, 950, 531" href="javascript:html5_player3(&#39;mov/build-up.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="955, 502, 1055, 531" href="javascript:flash_player2(&#39;mov/build-up.mp4&#39;,1)">--%>
    <%--<area shape="rect" coords="1060, 502, 1160, 531" href="javascript:flash_player3(&#39;mov/build-up.mp4&#39;,1)">--%>


<%--</map>--%>


</body></html>

<%--include.preload.js:468Calling Element.createShadowRoot() for an element which already hosts a shadow root is deprecated. --%>
<%--See https://www.chromestatus.com/features/4668884095336448 for more details.--%>
<%--createShadowTree @ include.preload.js:468--%>
<%--ElemHide @ include.preload.js:435--%>
<%--(anonymous) @ include.preload.js:587--%>
<%--VM3104:1 Uncaught SyntaxError: Invalid or unexpected token--%>
<%--at eval (<anonymous>)--%>
<%--at jquery-latest.min.js:2--%>
<%--at Function.globalEval (jquery-latest.min.js:2)--%>
<%--at m.fn.init.domManip (jquery-latest.min.js:3)--%>
<%--at m.fn.init.append (jquery-latest.min.js:3)--%>
<%--at m.fn.init.<anonymous> (jquery-latest.min.js:3)--%>
<%--at m.access (jquery-latest.min.js:3)--%>
<%--at m.fn.init.html (jquery-latest.min.js:3)--%>
<%--at Object.success (MediaCast-5.2.0.4.js:1080)--%>
<%--at j (jquery-latest.min.js:2)--%>
<%--(anonymous) @ jquery-latest.min.js:2--%>
<%--globalEval @ jquery-latest.min.js:2--%>
<%--domManip @ jquery-latest.min.js:3--%>
<%--append @ jquery-latest.min.js:3--%>
<%--(anonymous) @ jquery-latest.min.js:3--%>
<%--m.access @ jquery-latest.min.js:3--%>
<%--html @ jquery-latest.min.js:3--%>
<%--(anonymous) @ MediaCast-5.2.0.4.js:1080--%>
<%--j @ jquery-latest.min.js:2--%>
<%--fireWith @ jquery-latest.min.js:2--%>
<%--x @ jquery-latest.min.js:4--%>
<%--b @ jquery-latest.min.js:4--%>
<%--skin_control_api.js:55 Object {playToggle: ".mc-play-toggle", prgrsBg: ".mc-prgrs-bg", prgrsBall: ".mc-prgrs-ball", prgrsBar: ".mc-prgrs-bar", currTime: ".mc-curr-time"…}--%>
<%--skin.html:327  ===SKIN DOCUMENT BEFORE==--%>
<%--skin.html:328 Ready--%>
<%--skin.html:333  ===SKIN DOCUMENT READY==--%>
<%--skin.html:334 Ready--%>