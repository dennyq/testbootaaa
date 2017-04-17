/**
 * 사용자 노출 API 함수
 */
(function (window) {

    var setDefaultVal = function (paramVal, defaultVal) {
        console.log("paramVal : "+paramVal);
        console.log("defaultVal : "+defaultVal);
        return (paramVal == null || !paramVal || paramVal == 'null') ? defaultVal : paramVal;
    };

    var isNotNull = function(val){
        return val && (val != null) && (val != 'null');
    }

    var MCSkin = (function () {




        //var setMode = function () {
        //    return video_getposition();
        //};
        //
        ////위치획득하기
        //var getPosition = function () {
        //    return video_getposition();
        //};
        //
        ////위치획득하기
        //var getTime = function () {
        //    return video_gettime();
        //};
        //
        ////getRate
        //var getRate = function () {
        //    return video_getrate();
        //};
        //
        ////getVolume
        //var getVolume = function () {
        //    return video_getvolume();
        //};
        //
        ////getVolume
        //var getState = function () {
        //    return video_state();
        //};
        //
        ////setPosition
        //var setPosition = function (r) {
        //    return video_setposition(r);
        //};
        //
        ////setVolume
        //var setVolume = function (r) {
        //    return video_setvolume(r);
        //};
        //
        ////setRate
        //var setRate = function (r) {
        //    return video_setrate(r * 10);
        //};
        //
        ////play
        //var play = function (r) {
        //    return video_play();
        //};
        //
        ////pause
        //var pause = function (r) {
        //    return video_pause();
        //};
        //
        ////stop
        //var stop = function (r) {
        //    return video_stop();
        //};
        //
        ////end
        //var end = function (r) {
        //    return video_end();
        //};
        //
        ////setMute
        //var setMute = function (doMute) {
        //    video_setmute(doMute);
        //};
        //
        ////muteOff
        //var getMute = function () {
        //    return video_getmute();
        //};
        //
        ////todo: last !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ONLOADED
        //var onLoaded = function () {
        //    //video_onloaded();
        //    console.log('onLoaded : ');
        //
        //};
        //
        ////todo: last !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ONENDED
        //var onEnded = function () {
        //    console.log('onEnded : ');
        //};
        //
        ////resize
        //var resize = function () {
        //    setResize(1024, 745);        // 리사이즈
        //};


        /**
         * play
         * @param callback
         */
        var play = function (callback) {
            mcPlay();
            if (typeof callback === "function") callback();
        };


        /**
         * pause
         * @param callback
         */
        var pause = function (callback) {
            mcPause();
            if (typeof callback === "function") callback();
        };


        /**
         * playPause
         * @param callback
         */
        var playPause = function (callback) {
            var state = mcPlayPause();
            //console.log('state : '+state);
            if (typeof callback === "function") callback(state);

        };


        /**
         *
         * @param time 스킵할시간
         * @param type 스킵할 타입 FF(앞으로), REW(뒤로)
         * @param callback
         */
        var skip = function (time, type, callback) {
            if(type){
                mcSkipTimeType(time, type);
            }else{
                mcSkipTime(time);
            }

            if (typeof callback === "function") callback();
        };

        /**
         * 상태값 조회
         * @param callback
         * @returns status
         */
        var getStatus = function (callback) {

            switch(__playstate)
            {
                case 1 : s = "Stopped"; break;
                case 2 : s = "Paused"; break;
                case 3 : s = "Playing"; break;
                case 4 : s = "End"; break;
                case 6 : s = "Buffering"; break;
                case 10: s = "Repeating"; break;

                case 7 : s = "Reverse"; break; //todo: second 상태만들어야함
                case 8 : s = "Forward"; break; //todo: second 상태만들어야함
                case 5 : s = "Frame"; break;
                case 11 : s = "Bad Connection"; break;
                case 12 : s = "Lost Network"; break;
                default: s = "Ready"; break;
            }

            return s;

            if (typeof callback === "function") callback();
        };


        /**
         * mute 음소거
         * @param callback
         */
        var mute = function (callback) {
            mcMute();
            if (typeof callback === "function") callback();
        };


        /**
         * playPause 재생/일시정지
         * @param callback
         */
        var muteOnOff = function (callback) {
            var isMute = mcMuteTgl();
            if (typeof callback === "function") callback(isMute);
        };

        /**
         * 소리설정
         * @param volumeValue
         * @param callback
         */
        var setVolume = function(volumeValue, callback) {
            mcSetVolume(volumeValue);
            if (typeof callback === "function") callback();
        }

        /**
         * 소리조회
         * @param volumeValue
         * @param callback
         */
        var getVolume = function(callback) {
            mcGetVolume();
            if (typeof callback === "function") callback();
        }


        /**
         * 진행바 클릭시
         * @param volumeValue
         * @param callback
         */
        var prgrsClick = function(event, callback) {
            mcPrgrsClick(event);
            if (typeof callback === "function") callback();
        };

        /**
         * 진행바 드래그시
         * @param volumeValue
         * @param callback
         */
        var prgrsDraging = function(event, callback) {
            mcPrgrsDraging(event);
            if (typeof callback === "function") callback();
        };


        /**
         * 진행바 드래그 시작시
         * @param volumeValue
         * @param callback
         */
        var prgrsDragStart = function(event, callback) {
            mcPrgrsDragStart(event);
            if (typeof callback === "function") callback();
        };


        /**
         * 진행바 드래그 종료시
         * @param volumeValue
         * @param callback
         */
        var prgrsDragEnd = function(event, callback) {
            mcPrgrsDragEnd(event);
            if (typeof callback === "function") callback();
        };

        /**
         * 볼륨바 클릭시
         * @param volumeValue
         * @param callback
         */
        var volumeClick = function(event, callback) {
            mcVolumeClick(event);
            if (typeof callback === "function") callback();
        };

        /**
         * 볼륨바 드래그시
         * @param volumeValue
         * @param callback
         */
        var volumeDraging = function(event, callback) {
            mcVolumeDraging(event);
            if (typeof callback === "function") callback();
        };


        /**
         * 볼륨바 드래그 시작시
         * @param volumeValue
         * @param callback
         */
        var volumeDragStart = function(event, callback) {
            mcVolumeDragStart(event);
            if (typeof callback === "function") callback();
        };


        /**
         * 볼륨바 드래그 종료시
         * @param volumeValue
         * @param callback
         */
        var volumeDragEnd = function(event, callback) {
            mcVolumeDragEnd(event);
            if (typeof callback === "function") callback();
        };


        /**
         * 속도설정
         * @param volumeValue
         * @param callback
         */
        var setSpeed = function(clickedSpeed, callback) {
            mcSetSpeed(clickedSpeed);
            if (typeof callback === "function") callback();
        };

        /**
         * 속도조회
         * @param volumeValue
         * @param callback
         */
        var getSpeed = function(callback) {
            mcGetSpeed();
            if (typeof callback === "function") callback();
        };

        /**
         * 재생위치설정
         * @param volumeValue
         * @param callback
         */
        var setPosition = function(position, callback) {
            mcSetPosition(position);
            if (typeof callback === "function") callback();
        };


        /**
         * 재생위치조회
         * @param position
         * @param callback
         */
        var getPosition = function(callback) {

            if (typeof callback === "function") callback();
            return mcGetPosition();
        };

        /**
         * 재생시간조회
         * @param position
         * @param callback
         */
        var getTime = function(callback) {

            if (typeof callback === "function") callback();
            return mcGetTime();
        };

        /**
         * 구간반복설정
         * @param repeatLeft
         * @param repeatRight
         * @param callback
         */
        var setRepeat = function(repeatLeft, repeatRight, callback) {
            mcRepeat(repeatLeft, repeatRight);
            if (typeof callback === "function") callback();
        };


        /**
         * 전체화면 설정
         * @param on
         * @param callback
         */
        var setFullscreen = function(on, callback) {
            //mcRepeat(repeatLeft, repeatRight);
            //todo: on, off 값으로 세팅
            if (typeof callback === "function") callback();
        };

        /**
         * 전체화면 토글
         * @param callback
         */
        var fullscreen = function (callback) {
            var isFullScr = __Fullscreen();
            if (typeof callback === "function") callback(isFullScr);
            return isFullScr;
        };

        /**
         * todo: 덜되었음
         * @param callback
         */
        var getPosFromTime = function (time, callback) {
            console.log('time : ' + time);

            //if (typeof callback === "function") callback();
            //return __GetPlaySrc();
        };


        /**
         * todo: 덜되었음
         * @param callback
         */
        var getFulltime = function (callback) {

            return __duration;
            //if (typeof callback === "function") callback();
            //return __GetPlaySrc();
        };


        /**
         * 플레이소스 가져오기
         * @param callback
         * @returns {*}
         */
        var getPlaySrc = function (callback) {

            if (typeof callback === "function") callback();
            return __GetPlaySrc();
        };





        /**
         * 언어세팅
         * @param lang
         * @param callback
         */
        var setLanguage = function (lang,callback) {
            $('.mc-lang').hide();
            $('.mc-lang.mc-'+lang).show();

            if (typeof callback === "function") callback(lang);

        };


        /**
         * 언어조회         *
         * @param callback
         */
        var getLanguage = function (callback) {
            var langValue = getCookie('lang-value');
            if (!langValue) langValue = navigator.language || navigator.userLanguage;
            if (typeof callback === "function") callback();
            return langValue;

        };

        /**
         * 구간반복 드래그시
         * @param event
         * @param thisObj
         * @param callback
         */
        var repeatDraging = function(event, thisObj, callback) {

            mcRepeatDraging(event, thisObj);
            if (typeof callback === "function") callback();
        };


        /**
         * 구간반복 드래그 시작시
         * @param event
         * @param callback
         */
        var repeatDragStart = function(event, thisObj, callback) {
            mcRepeatDragStart(event, thisObj);
            if (typeof callback === "function") callback();
        };


        /**
         * 구간반복 드래그 종료시
         * @param event
         * @param callback
         */
        var repeatDragEnd = function(event, thisObj, callback) {
            mcRepeatDragEnd(event, thisObj);
            if (typeof callback === "function") callback();
        };

        /**
         * 구간반복 클릭시
         * @param event
         * @param callback
         */
        //var repeatClick = function(event, thisObj, callback) {
        //    mcRepeatClick(event, thisObj);
        //    if (typeof callback === "function") callback();
        //};

        /**
         * MCSkin TOTO LIST
         * PLAY > PAUSE > MUTE > PRGRS > FF > REW > VOL > SPEED > REPEAT > FULLSCREEN > LOAD > BMRKS > PREVIEW
         *
         */
        //todo: first : BMRKS,REPEAT



        /**
         * 자막OFF
         * @param callback
         */
        var trackOff = function (callback) {
            var mode = __TrackHide();
            console.log('mode : '+mode);

            if (typeof callback === "function") callback(mode);
        };

        /**
         * 자막ON
         * @param callback
         */
        var trackOn = function (callback) {
            var mode = __TrackShow();

            if (typeof callback === "function") callback(mode);
        };


        /**
         * 자막토글
         * @param callback
         */
        var trackToggle = function (lang, callback) {
            var isShow = __TrackInfo().mode=='showing';
            if(isShow){
                __TrackHide();
                isShow = false;

            }else{
                __TrackShow(lang);
                isShow = true;

            }

            if (typeof callback === "function") callback(isShow,lang);

        };

        /**
         * 자막언어변경
         * @param lang
         * @param callback
         */
        var trackChange = function (lang, callback) {

            __TrackChange(lang);

            if (typeof callback === "function") callback(lang);

        };


        /**
         * 활성화된 자막정보
         * @param callback
         * @returns {} info
         */
        var trackInfo = function(callback){
            var info = __TrackInfo();
            if (typeof callback === "function") callback(info);
            return info;
        }


        //public
        return {
            trackInfo : trackInfo,
            trackToggle : trackToggle,
            trackChange : trackChange,
            trackOff : trackOff,
            trackOn : trackOn,

            repeatDragEnd : repeatDragEnd,
            repeatDragStart : repeatDragStart,
            repeatDraging : repeatDraging,


            setLanguage : setLanguage,
            getLanguage : getLanguage,


            getFulltime : getFulltime ,
            getPosFromTime : getPosFromTime ,
            getPlaySrc : getPlaySrc ,

            setFullscreen : setFullscreen,
            fullscreen: fullscreen,

            setRepeat : setRepeat,

            setPosition : setPosition,
            getPosition : getPosition,

            //setTime : setTime,
            getTime: getTime,

            setSpeed : setSpeed,
            getSpeed : getSpeed,

            volumeDragEnd : volumeDragEnd,
            volumeDragStart : volumeDragStart,
            volumeDraging : volumeDraging,
            volumeClick : volumeClick,

            prgrsDragEnd : prgrsDragEnd,
            prgrsDragStart : prgrsDragStart,
            prgrsDraging : prgrsDraging,
            prgrsClick : prgrsClick,

            getStatus : getStatus, //1


            play : play, //2
            pause : pause,
            playPause : playPause,
            skip : skip,
            mute : mute,
            muteOnOff : muteOnOff,
            setVolume : setVolume,
            getVolume : getVolume,


            //getVolume   :   getVolume,
            //getRate     :   getRate,
            //setPosition :   setPosition,
            //setVolume   :   setVolume,
            //setRate     :   setRate,
            //setMute     :   setMute,
            //getMute     :   getMute,
            //getState    :   getState,
            //play        :   play,
            //pause       :   pause,
            //stop        :   stop,
            //end         :   end,
            //resize      :   resize,
            //onLoaded    :   onLoaded,
            //onEnded     :   onEnded
            //setFullScreen:setFullScreen,
        };
    })();

    window.MCSkin = MCSkin;




})(this);

