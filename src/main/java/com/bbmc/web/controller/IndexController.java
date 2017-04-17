package com.bbmc.web.controller;

import com.bbmc.web.ControllerPageBase;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by bbmc on 2017-02-13.
 */

@Controller
public class IndexController extends ControllerPageBase {

    @RequestMapping({"/", ""})
    public String start() {

        return "index";

    }

    @RequestMapping({"/index", "/index.jsp", "/index.do", "/index.html"})
    public String index() {

        return "index";

    }


    @RequestMapping("/typeA/testTotal.jsp")
    public String playerJsp(HttpServletRequest request, Model model) throws Exception {
        model.addAllAttributes(putReq(request));
        return "player/player";

    }

    @RequestMapping("/test")
    public String testPlayerJsp(HttpServletRequest request, Model model) throws Exception {
        return "test/playerTest";

    }



}
