(function (window) {

    var setDefaultVal = function (paramVal, defaultVal) {
        //console.log("paramVal : "+paramVal);
        //console.log("defaultVal : "+defaultVal);
        return (paramVal == null || !paramVal || paramVal == 'null') ? defaultVal : paramVal;
    };

    var isNotNull = function(val){
        return val && (val!=null) && (val !='null');
    }

    var MCVideo = (function () {
        var version = '5.2.0.4';
        var posi;
        var elementId = elementId;
        var mode = 'flash';
        var playerServer = ""; //플레이어서버URL (SKIN, JS 등 소스가 있는 서버,지금프로젝트성격 makeToken존재함.)


        var isFlashInstalled = function (obj) {
            try {
                if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) return true;
            }
            catch (e) {
                if (navigator.mimeTypes['application/x-shockwave-flash'] != undefined) return true;
            }
            //var openNewWindow = window.open("about:blank");
            opener.location.href = "https://get.adobe.com/kr/flashplayer/";
            return false;
        }

        //setFlashEct
        var setFlashEct = function (obj) {
            if (typeof window.external.msActiveXFilteringEnabled != "undefined"
                && window.external.msActiveXFilteringEnabled() == true) {
                alert("ActiveX 필터링 기능을 제거하고 사용해 주십시오.\n인터넷 메뉴 > 도구 > ActiveX 필터링 체크 해제");
                self.close();
            } else {
                setTimeout('startKeeper()', 1000);
            }


        }


        //이어보기
        var setContinuity = function (obj) {
            if (obj.continuity == 'Y') {

                obj.lastPosition = setDefaultVal(obj.lastPosition, 0);
                //var lastPos = $.cookie("last-pos");
                //console.log('lastPos : '+lastPos);
//console.log(' : ');
                posi = obj.lastPosition;
                if (posi > 0) {
                    if(obj.continuityAlert =='Y'){
                        var r = confirm("이어보기 하시겠습니까?");

                        if (r) {
                            if (obj.isFlash) {
                                setTimeout(function () {
                                    video_setposition(posi);
                                }, 2500);

                            } else {
                                setTimeout(function () {
                                    _video.currentTime = posi;
                                }, 2500);

                            }

                        }
                    }else{
                        //var r = confirm("이어보기 하시겠습니까?");

                        //if (r) {
                            if (obj.isFlash) {
                                setTimeout(function () {
                                    video_setposition(posi);
                                }, 2500);

                            } else {
                                setTimeout(function () {
                                    _video.currentTime = posi;
                                }, 2500);

                            }

                        //}
                    }



                }
            }
        };

        //보안키퍼옵션
        var setSecureOption = function (obj) {
            if (obj.security) {

                obj.security.on = setDefaultVal(obj.security.on, 'Y');
                __player_check_keeper = obj.security.on == 'Y' ? 1 : 0;

                if (obj.security.on == 'Y') {

                    obj.security.option.blockVolume = setDefaultVal(obj.security.option.blockVolume, 'Y');
                    obj.security.option.blockVirtual = setDefaultVal(obj.security.option.blockVirtual, 'Y');
                    obj.security.option.blockTerminal = setDefaultVal(obj.security.option.blockTerminal, 'Y');
                    obj.security.option.blockApple = setDefaultVal(obj.security.option.blockApple, 'Y');
                    obj.security.option.blockMessenger = setDefaultVal(obj.security.option.blockMessenger, 'Y');

                    __keeper_volume = (obj.security.option.blockVolume == 'Y') ? 1 : 0;
                    __keeper_virtual = (obj.security.option.blockVirtual == 'Y') ? 1 : 0;
                    __keeper_terminal = (obj.security.option.blockTerminal == 'Y') ? 1 : 0;
                    __keeper_apple = (obj.security.option.blockApple == 'Y') ? 1 : 0;
                    __keeper_messenger = (obj.security.option.blockMessenger == 'Y') ? 1 : 0;

                }

            } else {
                __player_check_keeper = 1;     //default 값
            }

        };


        /**
         * 자막설정
         * @param obj
         */
        var setSubtitle = function (obj) {
            if(obj.subtitle){
                //console.log(obj.subtitle.src);
                obj.subtitle.on = setDefaultVal(obj.subtitle.on,'N');
                if (isNotNull(obj.subtitle.on) && obj.subtitle.on=='Y') {
                    if (obj.isFlash) {

                        obj.flashUrl =  setDefaultVal(obj.flashUrl, obj.url);
                        set_caption_flash(obj.subtitle.flashUrl);

                    } else {
                        for(var k in obj.subtitle.src){
                            var subtitle = obj.subtitle.src[k];
                            __player_subtitles[subtitle.lang] = subtitle.url;
                        }


                    }
                }
            }

        };

        //스킨선택
        var setSkin = function (obj) {
            obj.skinType = setDefaultVal(obj.skinType, 'default');

            if(obj.skinServer){
                __player_skinfile = obj.skinServer;
            }else{
                __player_skinfile = "/skin/" + obj.skinType + "/skin.html";
            }

        };

        //워터마크
        var setWarterMark = function (obj) {
            if(obj.wartermark){
                if (obj.wartermark.on=='Y') {
                    $("#watermark_div").show();
                    var posi;
                    switch (obj.wartermark.option.position) {
                        case 'left-top' : posi = 1; break;
                        case 'right-top' : posi = 2; break;
                        case 'left-bottom' : posi = 3; break;
                        case 'right-bottom' : posi = 4; break;
                        case 'center' : posi = 5; break;
                        case 'random' : posi = 6; break;
                        default : posi = 6;
                    }


                    //obj.wartermark.option.size = setDefaultVal(obj.wartermark.option.size, 30);
                    //obj.wartermark.option.font = setDefaultVal(obj.wartermark.option.font, 'Tahoma');
                    //obj.wartermark.option.colorCode = setDefaultVal(obj.wartermark.option.colorCode, '0,0,255');

                    set_watermark_option(obj.wartermark.option.text, obj.wartermark.option.opactity, posi, obj.wartermark.option.size, obj.wartermark.option.font);
                    set_watermark_color(obj.wartermark.option.colorCode);

                }
            }

        }

        //플레이어아이디
        var setPlayerId = function (obj) {
            __player_id = (obj.playerId) || 'player_div';
        };

        //자동재생
        var setAutoPlay = function (obj) {
            obj.autoplay = setDefaultVal(obj.autoplay, 'N');
            __player_video_autoplay = (obj.autoplay == 'Y') ? 1 : 0;
        };

        //리사이즈
        var setResize = function (width, height) {
            video_resize();
            //window.moveTo(0, 0);
            //window.resizeTo(width, height);
        };

        //스타트키퍼
        var setStartKeeper = function (obj) {
            if (obj.isFlash) {
                setFlashEct(obj);
            } else {
                setTimeout('startKeeper()', obj.time);
            }

        };

        //플레이리스트
        var setPlayList = function (obj) {

            if (obj.playlist) {
                if (obj.playlist.on == 'Y') {
                    console.log(obj);
                    var playerel = $('#' + __player_id);
                    console.log(playerel);
                    console.log(playerel.css({width: '75%', height: '100%', float: 'left'}));
                    var listel = '<ul class="right-list"><li>1</li><li>1</li><li>1</li></ul>';
                    playerel.parent().append(listel);

                    //player.add('div id="playlist"');

                }
            }

        };

        //비디오태그
        var makeVideoTag = function (obj) {
            if (!isNotNull(obj.src)) {
                alert('동영상 소스를 설정해주세요.');
                return;
            }

            obj.width = setDefaultVal(obj.width, '100%');
            obj.height = setDefaultVal(obj.height, '100%');

            var srcUrl = obj.src;
            //console.log('__player_check_keeper : '+__player_check_keeper);
            console.log(obj.src);
            console.log(obj.token);
            if (isNotNull(obj.cdn)) {
                srcUrl = obj.cdn;
            }
            //else{
            //    srcUrl = obj.src+"?token="+obj.token
            //}

            //if (obj.isFlash) {
            //    make_flashtag(obj.width, obj.height, __player_check_keeper == 1 ? (srcUrl + "?token=" + obj.token) : srcUrl, __player_id);
            //
            //} else {
            //    make_videotag(obj.width, obj.height, __player_check_keeper == 1 ? (srcUrl + "?token=" + obj.token) : srcUrl, __player_id);
            //
            //}


            if (obj.isFlash) {
                //make_flashtag(obj.width, obj.height, (__player_check_keeper == 1 ? obj.token : srcUrl), __player_id);
                make_flashtag(obj.width, obj.height, (__player_check_keeper == 1 ? obj.token : obj.src), __player_id);

            } else {
                //make_videotag(obj.width, obj.height, (__player_check_keeper == 1 ? obj.token : srcUrl), __player_id);
                make_videotag(obj.width, obj.height,(__player_check_keeper == 1 ? obj.token : obj.src), __player_id);
                //make_videotag(obj.width, obj.height,(__player_check_keeper == 1 ? obj.token : srcUrl + "?token=" + obj.token), __player_id);
                //make_videotag(obj.width, obj.height, obj.src, __player_id);

            }


        };

        //버전
        var setVersion = function () {
            set_version(version);

        };
        //blockDuplicateUser
        var blockDuplicateUser = function (obj) {
            if(obj.blockDuplicateUser){
                if(obj.blockDuplicateUser.on == 'Y'){
                    alert(obj.blockDuplicateUser.msg);
                    //self.close();
                    MCVideo.end();
                }
            }

        };

        //토큰생성 성공시
        var onSuccss = function (obj) {

            if (obj.isFlash) {
                isFlashInstalled(obj);
            }
            blockDuplicateUser(obj);        // 리사이즈
            setVersion();               // 버전
            setAutoPlay(obj);           // 자동재생
            setSecureOption(obj);       // 보안옵션
            setSubtitle(obj);           // 자막
            setSkin(obj);               // 스킨
            setWarterMark(obj);         // 워터마크
            setContinuity(obj);         // 연속보기
            makeVideoTag(obj);          // 비디오태그만들기
            setStartKeeper(obj);        // 스타트키퍼
            //setResize(1024, 745);        // 리사이즈
            //todo: last playlist
            setPlayList(obj);


        };

        //todo last set cookie
        var setCookie = function (obj) {
            if (obj.useCookie){
                setCookieSetting(obj.useCookie);
            }
        };

        //todo : 프로토콜
        var setProtocol = function (obj) {

        };


        //todo : setPlayerServer
        var setPlayerServer = function (obj) {

            obj.useProvider = setDefaultVal(obj.useProvider, 'N');
            if (obj.useProvider == 'Y') {
                playerServer = 'http://localhost';
            }

        };

        //모드
        var setMode = function (obj) {
            //console.log(' obj ');
            //console.log(obj);
            setPlayerServer(obj);
            setProtocol(obj);

            var parser = new UAParser();
            var browser = parser.getBrowser();
            var engine = parser.getEngine();
            var os = parser.getOS();
            var device = parser.getDevice();
            var ua = navigator.userAgent;
            var isDesktop = true;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
                isDesktop = false;
            }

            var isVideo = false;
            var is1Video = (browser.name == 'Chrome') && (eval(browser.major) >= 40);

            var is2Video = (browser.name == 'Firefox') && (eval(browser.version) >= 35);


            var is3Video = (browser.name == 'IE') && (eval(browser.version) >= 9);
            var is4Video = (browser.name == 'Edge');
            var is5Video = (browser.name == 'Opera') && (eval(browser.major) >= 105);

            var is6Video = (browser.name == 'Safari') && (os.name == 'Mac OS') && (eval(os.version) >= 4);
            if (is1Video || is2Video || is3Video || is4Video || is5Video || is6Video) {
                isVideo = true;
            }

            if (!obj.mode || obj.mode == null || obj.mode == 'null') {



                //todo : Compatibility
                /*
                 1 Chrome for Android 34+
                 2 Chrome for Desktop 34+
                 3 Firefox for Android 41+
                 4 Firefox for Desktop 42+
                 5 IE11+ for Windows 8.1+
                 6 Edge for Windows 10+
                 7 Opera for Desktop
                 8 Vivaldi for Desktop
                 9 Safari for Mac 8+ (beta)
                 */
                var isHls = false;

                var is1Hls = (browser.name == 'Chrome') && (eval(browser.major) >= 34) && (os.name == 'Android');
                var is2Hls = (browser.name == 'Chrome') && (eval(browser.major) >= 34) && isDesktop;
                var is3Hls = (browser.name == 'Firefox') && (eval(browser.version) >= 41) && (os.name == 'Android');
                var is4Hls = (browser.name == 'Firefox') && (eval(browser.version) >= 42) && isDesktop;
                var is5Hls = (browser.name == 'IE') && (eval(browser.version) >= 11) && (os.name == 'Windows') && (eval(os.version) >= 8.1);
                var is6Hls = (browser.name == 'Edge') && (os.name == 'Windows') && (eval(os.version) >= 10);
                var is7Hls = (browser.name == 'Opera') && isDesktop;
                var is8Hls = (browser.name == 'Vivaldi') && isDesktop;
                var is9Hls = (browser.name == 'Safari') && (os.name == 'Mac OS') && (eval(os.version) >= 8);
                if (is1Hls || is2Hls || is3Hls || is4Hls || is5Hls || is6Hls || is7Hls || is8Hls || is9Hls) {
                    isHls = true;
                }
                //if (isHls) {
                //    mode = 'html5'
                //}else{
                //    mode = 'flash'
                //}


            }
            console.log('isVideo : '+isVideo);

            if (isVideo) {
                mode = 'html5';

                if (obj.mode) {
                    mode = obj.mode;
                }
            } else {
                mode = 'flash';
            }


            obj.isFlash = (mode.toLowerCase() == 'flash');

            var minText = obj.min == "Y" ? '.min' : '';
            //console.log('playerServer : '+playerServer);
            var getJsUrl = playerServer + '/js/MediaCastHtml5' + minText + '.js';


            if (obj.test && obj.test == 'Y') {

                //if (obj.isFlash) {
                //    getJsUrl = playerServer + '/js/MediaCastFlash' + minText + '.js';
                //
                //}
                //if(obj.jsServer){
                //    var getJsUrl = obj.jsServer + 'MediaCastHtml5' + minText + '.js';
                //    if (obj.isFlash) {
                //        getJsUrl = obj.jsServer + 'MediaCastFlash' + minText + '.js';
                //
                //    }
                //}
                //console.log('getJsUrl : '+getJsUrl);
                //$.getScript(getJsUrl, function () {
                //
                //    if(!obj.security || obj.security==''){
                //        obj.security={};
                //        obj.security.on = 'N';
                //    }

                onSuccss(obj);
                //if (obj.security.on == 'Y') {
                //
                //    makeToken(obj);
                //} else {
                //    onSuccss(obj);
                //}
                //});
            } else {
                onSuccss(obj);

                //if (obj.isFlash) {
                //
                //    getJsUrl = playerServer + '/js/MediaCastFlash' + minText + '.js';
                //
                //}
                //if (obj.jsServer) {
                //
                //    var getJsUrl = obj.jsServer + 'MediaCastHtml5' + minText + '.js';
                //
                //    if (obj.isFlash) {
                //
                //        getJsUrl = obj.jsServer + 'MediaCastFlash' + minText + '.js';
                //
                //    }
                //}
                ////console.log('getJsUrl : ' + getJsUrl);
                //$.getScript(getJsUrl, function () {
                //
                //    if (!obj.security || obj.security == '') {
                //        obj.security = {};
                //        obj.security.on = 'N';
                //    }
                //
                //
                //    //if (obj.security.on == 'Y') {
                //    //
                //    //    makeToken(obj);
                //    //} else {
                //    //    onSuccss(obj);
                //    //}
                //});
            }
        };

        //토큰만들기
        var makeToken = function (obj) {
            var parser = document.createElement('a');
            parser.href = obj.src;

            var req = {};
            var urls = parser.pathname.split('/');

            var title = "";
            for (var i = 0; i < urls.length; i++) {
                if (urls[i] && urls[i] != null && urls[i] && urls[i]) {
                    title += "/" + urls[i];
                }
            }

            obj.useToken = setDefaultVal(obj.useToken,'Y');

            //토큰에 필요한 정보가 없을경우 리턴
            if (obj.useToken == 'Y') {
                if(!isNotNull(obj.userId)){
                    alert('유저아이디가 없습니다.');
                    return;
                }
            }

            req.title = title;
            req.userId = obj.userId;
            req.vodserver = parser.host;
            //obj.token = data.token;
            onSuccss(obj);

            //$.ajax({
            //    type: 'post',
            //    dataType: 'json',
            //    url: playerServer + '/api/makeToken',
            //    data: req,
            //    success: function (data) {
            //        //console.log(data);
            //        obj.token = data.token;
            //        onSuccss(obj);
            //    },
            //    error: function (request, status, error) {
            //        console.log('code: ' + request.status + "\n" + 'message: ' + request.responseText + "\n" + 'error: ' + error);
            //        alert('사용할수 있는 권한이 없습니다.');
            //    }
            //});
        };

        //셋업
        var setUp = function (obj) {
            setMode(obj);

            //setTimeout(function(){
            //    //obj.min='N';
            //    //obj.min = 'Y';
            //    //obj.useToken = 'N';
            //    //obj.useProvider = 'N';
            //    //obj.skinServer='http://sejong2.mediacast.co.kr/skin/typeA/default/skin.html';
            //    //obj.skinServer='http://sejong2.mediacast.co.kr/skin/default/skin.html';
            //    //obj.skinServer = 'skin/skin.html';
            //    //obj.skinServer='http://localhost/skin/default/skin.html';
            //    //http://sejong2.mediacast.co.kr/typeA/MediaCastHtml5.min.js?_=1488419573165
            //
            //    //http://121.254.176.85/js/MediaCastHtml5.js
            //    //obj.jsServer = 'http://localhost/js/';
            //    //obj.jsServer = 'http://121.254.176.85/js/';
            //    //obj.jsServer='http://sejong2.mediacast.co.kr/typeA/';
            //    //obj.skinServer='http://localhost/skin/default/skin.html';
            //    //obj.skinServer='skin/default/skin.html';
            //    //obj.protocol = 'HTTP P/G';             //todo: 프로토콜
            //    setMode(obj);
            //},300);


        };

        //위치획득하기
        var getPosition = function () {
            return video_getposition();
        };

        //위치획득하기
        var getTime = function () {
            return video_gettime();
        };

        //getRate
        var getRate = function () {
            return video_getrate();
        };

        //getVolume
        var getVolume = function () {
            return video_getvolume();
        };

        //getVolume
        var getState = function () {
            return video_state();
        };

        //setPosition
        var setPosition = function (r) {
            return video_setposition(r);
        };
        //setPosition
        var getLastPosition = function () {
            return video_lastposition();
        };

        //setVolume
        var setVolume = function (r) {
            return video_setvolume(r);
        };

        //setRate
        var setRate = function (r) {
            return video_setrate(r * 10);
        };

        //play
        var play = function (r) {
            return video_play();
        };

        //pause
        var pause = function (r) {
            return video_pause();
        };

        //stop
        var stop = function (r) {
            return video_stop();
        };

        //end
        var end = function (r) {
            return video_end();
        };

        //setMute
        var setMute = function (doMute) {
            video_setmute(doMute);
        };

        //muteOff
        var getMute = function () {
            return video_getmute();
        };

        //todo: last !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ONLOADED
        var onLoaded = function () {
            //video_onloaded();
            console.log('onLoaded : ');

        };

        //todo: last !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ONENDED
        var onEnded = function () {
            console.log('onEnded : ');
        };

        //resize
        var resize = function () {
            setResize(1024, 745);        // 리사이즈
        };



        //public
        return {
            setUp       :   setUp,
            getPosition :   getPosition,
            getTime     :   getTime,
            getVolume   :   getVolume,
            getRate     :   getRate,
            setPosition :   setPosition,
            getLastPosition :  getLastPosition,
            setVolume   :   setVolume,
            setRate     :   setRate,
            setMute     :   setMute,
            getMute     :   getMute,
            getState    :   getState,
            play        :   play,
            pause       :   pause,
            stop        :   stop,
            end         :   end,
            resize      :   resize,
            onLoaded    :   onLoaded,
            onEnded     :   onEnded
            //setFullScreen:setFullScreen,
        };
    })();

    window.MCVideo = MCVideo;




})(this);

