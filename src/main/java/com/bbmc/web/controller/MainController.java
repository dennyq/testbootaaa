package com.bbmc.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by bbmc on 2017-02-13.
 */
@RequestMapping("/main")
@Controller
public class MainController {

    @RequestMapping("/")
    public String main() {

        return "index";

    }


}
