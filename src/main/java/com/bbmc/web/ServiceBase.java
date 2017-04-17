package com.bbmc.web;

import com.bbmc.ArgsException;
import com.bbmc.DbMap;
import com.bbmc.ResultMap;
import com.bbmc.util.StringUtil;
import com.bbmc.util.UnitUtil;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;


@Service
public class ServiceBase {
	private final static Logger logger = LoggerFactory.getLogger(ServiceBase.class);

	protected void checkArgs(RequestMap req, String... args) {
		for(String arg : args) {
			if(!req.containsKey(arg))
				throw new ArgsException(arg);
		}
	}

    protected DbMap getUrl(HttpServletRequest request) throws MalformedURLException {
        DbMap urlMap  = new DbMap();
        URL url = new URL(request.getRequestURL().toString());
        String host  = url.getHost();
        String userInfo = url.getUserInfo();
        String protocol = url.getProtocol();
        int port = url.getPort();
        String path = (String) request.getAttribute("javax.servlet.forward.request_uri");
        String query = (String) request.getAttribute("javax.servlet.forward.query_string");
        urlMap.put("host",host);
        urlMap.put("userInfo",userInfo);
        urlMap.put("protocol",protocol);
        urlMap.put("host",host);
        urlMap.put("port",port);
        urlMap.put("path",path);
        urlMap.put("query",query);


      return urlMap;

    }


  protected RequestMap getSplitDate(RequestMap req,String dateName){
    if(req.get(dateName) != null && req.get(dateName) != ""){
      String dateStr = req.get(dateName)+"";
      if(dateStr.trim().equals("-") && dateStr.trim().equals("+-+") ){
        req.remove(dateName);
      }else{
        String[] dateStrArr = dateStr.split(" - ");
        if(dateStrArr.length == 2){
          String dateStr_low = dateStrArr[0].replace(".","");
          String dateStr_high = dateStrArr[1].replace(".","");
          req.put(dateName+"_low", dateStr_low);
          req.put(dateName+"_high",dateStr_high);
        }else{
          req.remove(dateName);
        }

      }

    }
    return req;
  }

	protected void putPathVariable(HttpServletRequest request, RequestMap req) {
    //noinspection unchecked
    req.putAll((Map) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE));
	}


	protected void setPaging(RequestMap req) {

		String page = StringUtil.nvl((String) req.get("page"), "1");
		String rows =StringUtil.nvl((String) req.get("rows"), "10");

    int page_num  = UnitUtil.toInt(page);
    int page_size =  UnitUtil.toInt(rows);

    req.put("page",page);
		req.put("p_start", (page_num - 1) * (page_size) );
		req.put("p_size", page_size);
	}




  private static String getBrowser(HttpServletRequest request)
  {
    String header = request.getHeader("User-Agent");
    if ( header.indexOf("MSIE") > -1)
    {
      return "MSIE";

    } else if ( header.indexOf("Chrome") > -1)
    {
      return "Chrome";

    } else if ( header.indexOf("Opera") > -1)
    {
      return "Opera";

    } else if ( header.indexOf("Safari") > -1)
    {
      return "Safari";
    }
    return "Firefox";
  }

  private static String getDownFileNames(HttpServletRequest request, String fileName)
  {
    String browser = getBrowser(request);
    if ( fileName == null || fileName.equals("") )
    {
      fileName = "UnKnownFileName";
    }

    String resultName;

    String tomcatEncoding = "ISO-8859-1";   //tomcatEncoding = "UTF-8";

    try{
      if ( browser.indexOf("MSIE") != -1 )
      {
        // Explorer
        resultName = URLEncoder.encode(fileName, "UTF-8"); // resultName = new String( fileName.getBytes("EUC-KR"), "ISO-8859-1").replaceAll(" ","%20");

      } else if ( browser.indexOf("Opera") != -1 )
      {
        // Opera
        resultName = new String( fileName.getBytes("UTF-8"), tomcatEncoding);

      }else if ( browser.indexOf("Chrome") != -1 )
      {
        // Chrome
        resultName = new String( fileName.getBytes("EUC-KR"), tomcatEncoding);

      }else if ( browser.indexOf("Safari") != -1 )
      {
        // Safari
        resultName = new String( fileName.getBytes("UTF-8"), tomcatEncoding);

      } else if ( browser.indexOf("Firefox") != -1 )
      {
        // FireFox
        resultName = new String( fileName.getBytes("UTF-8"), tomcatEncoding);

      } else{
        // Other
        resultName = new String( fileName.getBytes("EUC-KR"), tomcatEncoding);

      }
    } catch (Exception ex)
    {
      resultName = fileName;
    }
    return resultName;
  }


}









