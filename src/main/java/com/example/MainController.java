package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by bbmc on 2017-02-13.
 */

@Controller
public class MainController {

    @RequestMapping("/player")
    public String player() {

        return "player";

    }


    @RequestMapping("/index")
    public String index() {

        return "index";

    }



}
