<%@ page contentType="text/html;charset=utf-8"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.*" %>
<%@page import="org.json.simple.JSONObject"%>
<%@include file="./MediaCast-LIB.jsp"%>
<%
    JSONObject obj=new JSONObject();

    String vodserver = request.getParameter("vodserver");
        String userID = request.getParameter("userID");
        String title = request.getParameter("title");
    String token = GET_WEBTOKEN(vodserver, userID, title );
    obj.put("token",token);

    out.print(obj);
    out.flush();
//    try
//    {
//        JSONObject tokenObj  = new JSONObject();
//
//        JSONArray  result = new JSONArray();
//        String mcast_title = request.getParameter("f");
//        String mcast_id = request.getParameter("id");
//        String mcast_vodserver = "auth.mediacast.co.kr";
//
//
//
//        String token = GET_WEBTOKEN(mcast_vodserver, mcast_id, mcast_title );
//
//        tokenObj.put("token",token);
//
//
//        result.add(tokenObj);
//
//
//        response.getWriter().write(result.toString());
//
////        $vodserver = $_REQUEST["vodserver"];
////        $userID = $_REQUEST["userID"];
////        $title = $_REQUEST["title"];
////
////        $token = GET_WEBTOKEN ($vodserver, $userID, $title );
//
//    }catch(Exception e){
//    }
%>
