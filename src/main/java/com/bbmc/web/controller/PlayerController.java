package com.bbmc.web.controller;

import com.bbmc.ResultMap;
import com.bbmc.web.ControllerPageBase;
import com.bbmc.web.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by bbmc on 2017-02-13.
 */
@RequestMapping("/player")
@Controller
public class PlayerController extends ControllerPageBase{
    @Autowired private PlayerService service;
    private String rootPath = "player/";
    private static final Logger logger = LoggerFactory.getLogger(PlayerController.class);



    @RequestMapping({"/", ""})
    public String player(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(putReq(request));

        return rootPath + "player";

    }

    @RequestMapping({"/skinApply", "skinApply"})
    public String skinApply(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(putReq(request));

        return rootPath + "playerSkinApply";

    }

    @RequestMapping({"/skinApplyNext", "skinApplyNext"})
    public String skinApplyNext(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(putReq(request));

        return rootPath + "playerSkinApplyNext";

    }

    @RequestMapping({"/newSkin", "newSkin"})
    public String newSkin(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(putReq(request));

        return rootPath + "newSkin";

    }

    @RequestMapping({"/newSkin2", "newSkin2"})
    public String newSkin2(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(putReq(request));

        return rootPath + "newSkin2";

    }

    @RequestMapping("list")
    public String playerList(HttpServletRequest request, Model model) throws Exception {

        model.addAllAttributes(service.getPlayList(request));

        return rootPath + "playerList";

    }

    @RequestMapping("/getPlayList")
    @ResponseBody
    public ResultMap playerListJson(HttpServletRequest request) throws Exception {

        return service.getPlayList(request);

    }



    @RequestMapping("/index")
    public String playerIndex() {

        return rootPath + "index";

    }


}
