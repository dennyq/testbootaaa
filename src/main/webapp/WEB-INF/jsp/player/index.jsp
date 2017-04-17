<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/taglibs.jspf" %>
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
    <title>index</title>

    <%--<link rel="stylesheet" type="text/css" href="/css/MediaCast.css">--%>
    <%--<script type="text/javascript" src="/js/jquery-1.11.3.min.js"></script>--%>
    <%--<script type="text/javascript" src="/js/MediaCast-SetUpModule.js"></script>--%>
</head>
<body>

index!!!!!!!!!!!!!!!!!!
url : <%=url%><br>
serverUrl : <%=serverUrl%><br>

<hr>
testTotal html5
<hr>
autoplay N :<a href="/player?userId=user-1153&src=<%=serverUrl%>/mov/demo.mp4">수동재생 testTotal.jsp</a><br>
autoplay Y :<a href="/player?userId=user-1153&autoplay=Y&src=<%=serverUrl%>/mov/demo.mp4">자동재생 testTotal.jsp</a><br>
</body>
</html>