package com.bbmc.web.controller;

import com.bbmc.ResultMap;
import com.bbmc.web.RequestMap;
import com.bbmc.web.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

/**
 * Created by bbmc on 2017-02-13.
 */
@RequestMapping("/test")
@RestController
public class TestController {
    @Autowired
    private TokenService service;
    private static final Logger logger = LoggerFactory.getLogger(TestController.class);
    private String rootPath = "api/";



    @RequestMapping("/useragent")
    public ResultMap useragent(HttpServletRequest request, Model model) throws IOException {
        RequestMap req = RequestMap.create(request);
        String userAgent = request.getHeader("User-Agent");

        logger.info("useragent={}", userAgent);
        logger.info("req={}", req);

        String requestUrl = (String) req.get("url");
        URL url = new URL(requestUrl);
//        logger.info("req getAuthority={}", url.getAuthority());
//        logger.info("req getContent={}", url.getContent());
        logger.info("req url={}", url);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        Map<String, List<String>> headers = con.getHeaderFields();
        logger.info("req headers={}", headers);
        logger.info("req User-Agent={}", headers.get("User-Agent"));

        ResultMap res = ResultMap.create();
        res.put("web-User-Agent",userAgent);
        res.put("url-User-Agent",headers.get("User-Agent"));

        return res;

    }



}
