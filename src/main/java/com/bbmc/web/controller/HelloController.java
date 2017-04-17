package com.bbmc.web.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by bbmc on 2017-02-13.
 */

@RestController
public class HelloController {



    @RequestMapping("/hello")
    public String hello() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/admin")
    public String admin() {
        return "Greetings from Spring Boot!";
    }
}
