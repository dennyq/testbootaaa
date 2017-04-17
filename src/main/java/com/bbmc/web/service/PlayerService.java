package com.bbmc.web.service;

import com.bbmc.DbList;
import com.bbmc.DbMap;
import com.bbmc.ResultMap;
import com.bbmc.web.RequestMap;
import com.bbmc.web.ServiceBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.net.MalformedURLException;
import java.net.URL;


@Service
public class PlayerService extends ServiceBase {

    private static final Logger logger = LoggerFactory.getLogger(PlayerService.class);


    //ex getPlayList json set
    public ResultMap getPlayList(HttpServletRequest request) throws Exception {
        RequestMap req = RequestMap.create(request);
        logger.debug("[PlayerService getPlayList recv]: ={}", req);
        DbList list = new DbList();

        String host = "http://" + getUrl(request).get("host");

        logger.debug("[PlayerService getPlayList host]: ={}", host);

        String listArr[] = {host + "/mov/demo.mp4", host + "/mov/sample.mp4", host + "/mov/build-up.mp4"};

        for (int i = 0; i < listArr.length; i++) {
            DbMap map = new DbMap();
            map.put("file", listArr[i]);
            list.add(map);
        }


        ResultMap res = ResultMap.create();
        req.put("list", list);
        res.putAll(req);
        logger.debug("[PlayerService getPlayList send]: ={}", res);
        return res;
    }


}
