package com.bbmc.web.service;

import com.bbmc.ResultMap;
import com.bbmc.web.RequestMap;
import com.bbmc.web.ServiceBase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class TokenService extends ServiceBase {

  private static final Logger logger = LoggerFactory.getLogger(TokenService.class);

  private String MimeBase64 = "abcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //목록
  public ResultMap makeToken(RequestMap req) {
    ResultMap res = ResultMap.create();
    logger.debug("[token makeToken] recv:{}", req);
    checkArgs(req,"vodserver","userId","title");

    String vodserver = req.get("vodserver") + "";
    String userId = req.get("userId") + "";
    String title = req.get("title") + "";
    String token = getWebToken(vodserver, userId, title);


    res.put("token", token);


    logger.debug("[token makeToken] send:{}", res);
    return res;
  }
  //getToken
  public String getToken(RequestMap req) {
//    ResultMap res = ResultMap.create();
    logger.debug("[token makeToken] recv:{}", req);
    checkArgs(req,"vodserver","userId","title");

    String vodserver = req.get("vodserver") + "";
    String userId = req.get("userId") + "";
    String title = req.get("title") + "";
    String token = getWebToken(vodserver, userId, title);


//    res.put("token", token);


    logger.debug("[token makeToken] token:{}", token);
    return token;
  }

  private String getWebToken(String vodserver, String userID, String title) {
    String key = vodserver + "|" + userID + "|" + title + "|" + (int) new java.util.Date().getTime();
    String token = Base64encode(key);
    return token;

  }

  public String Base64encode(String source) {
    char[] sourceBytes = getPaddedBytes(source);
    int numGroups = (sourceBytes.length + 2) / 3;
    char[] targetBytes = new char[4];
    char[] target = new char[4 * numGroups];

    for (int group = 0; group < numGroups; group++) {
      convert3To4(sourceBytes, group * 3, targetBytes);
      for (int i = 0; i < targetBytes.length; i++) {
        target[i + 4 * group] = MimeBase64.charAt(targetBytes[i]);
      }
    }

    int numPadBytes = sourceBytes.length - source.length();

    for (int i = target.length - numPadBytes; i < target.length; i++) target[i] = 'a';
    return new String(target);
  }

  public char[] getPaddedBytes(String source) {
    char[] converted = source.toCharArray();
    int requiredLength = 3 * ((converted.length + 2) / 3);
    char[] result = new char[requiredLength];
    System.arraycopy(converted, 0, result, 0, converted.length);
    return result;
  }

  public void convert3To4(char[] source, int sourceIndex, char[] target) {
    target[0] = (char) (source[sourceIndex] >>> 2);
    target[1] = (char) (((source[sourceIndex] & 0x03) << 4) | (source[sourceIndex + 1] >>> 4));
    target[2] = (char) (((source[sourceIndex + 1] & 0x0f) << 2) | (source[sourceIndex + 2] >>> 6));
    target[3] = (char) (source[sourceIndex + 2] & 0x3f);
  }

}
