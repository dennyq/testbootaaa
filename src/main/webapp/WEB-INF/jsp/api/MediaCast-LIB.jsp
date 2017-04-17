<%@ page contentType="text/html;charset=utf-8"%>
<%@ page import="java.net.*" %>
<%@ page import="java.io.*" %>
<%@page import="java.text.*"%>
<%@page import="java.util.*"%>
<%@page import="java.sql.*"%>
<%@page import="javax.servlet.jsp.*"%>
<%!
///////////////////////////////////////////////////////////////////
// 함수들...
///////////////////////////////////////////////////////////////////

//암호화 함수 시작
String MimeBase64 = "abcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 /**
 * Returns the base 64 encoded equivalent of a supplied string.
 * @param source the string to encode
 */
public  String Base64encode( String source ) {
	char[] sourceBytes = getPaddedBytes( source );
	int numGroups = (sourceBytes.length + 2) / 3;
	char[] targetBytes = new char[4];
	char[] target = new char[ 4 * numGroups ];

	for (int group = 0; group < numGroups; group++) {
		convert3To4( sourceBytes, group*3, targetBytes );
		for (int i = 0; i < targetBytes.length; i++) {
			target[ i + 4*group ] = MimeBase64.charAt( targetBytes[i] );
		}
	}

	int numPadBytes = sourceBytes.length - source.length();

	for (int i = target.length-numPadBytes; i < target.length; i++) target[i] = 'a';
	return new String( target );
}
public char[] getPaddedBytes( String source ) {
	char[] converted = source.toCharArray();
	int requiredLength = 3 * ((converted.length+2) /3);
	char[] result = new char[ requiredLength ];
	System.arraycopy( converted, 0, result, 0, converted.length );
	return result;
}

public void convert3To4( char[] source, int sourceIndex, char[] target ) {
	target[0] = (char) ( source[ sourceIndex ] >>> 2);
	target[1] = (char) (((source[ sourceIndex   ] & 0x03) << 4) | (source[ sourceIndex+1 ] >>> 4));
	target[2] = (char) (((source[ sourceIndex+1 ] & 0x0f) << 2) | (source[ sourceIndex+2 ] >>> 6));
	target[3] = (char) (  source[ sourceIndex+2 ] & 0x3f);
}
//암호화 함수 종료

public String GET_WEBTOKEN ( String site, String id, String title) {
	String key = site+"|"+id+"|"+title+"|"+(int) new java.util.Date().getTime();
	String token = Base64encode (key); 
	return token ;
}
%>
