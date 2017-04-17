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

/**
 * Created by bbmc on 2017-02-13.
 */
@RequestMapping("/api")
@RestController
public class ApiController {
    @Autowired
    private TokenService service;
    private static final Logger logger = LoggerFactory.getLogger(ApiController.class);
    private String rootPath = "api/";


    @RequestMapping("/makeToken")
    public ResultMap makeToken(HttpServletRequest request, Model model) throws IOException {
        RequestMap req = RequestMap.create(request);

       return service.makeToken(req);



    }


    @RequestMapping("/getToken")
    public String getToken(HttpServletRequest request, Model model) throws IOException {
        RequestMap req = RequestMap.create(request);

       return service.getToken(req);



    }



}
