(function(e,t){"use strict";var n="0.7.12",r="",i="?",s="function",o="undefined",u="object",a="string",f="major",l="model",c="name",h="type",p="vendor",d="version",v="architecture",m="console",g="mobile",y="tablet",b="smarttv",w="wearable",E="embedded",S={extend:function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2===0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},has:function(e,t){return typeof e=="string"?t.toLowerCase().indexOf(e.toLowerCase())!==-1:!1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===a?e.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},x={rgx:function(){var e,n=0,r,i,a,f,l,c,h=arguments;while(n<h.length&&!l){var p=h[n],d=h[n+1];if(typeof e===o){e={};for(a in d)d.hasOwnProperty(a)&&(f=d[a],typeof f===u?e[f[0]]=t:e[f]=t)}r=i=0;while(r<p.length&&!l){l=p[r++].exec(this.getUA());if(!!l)for(a=0;a<d.length;a++)c=l[++i],f=d[a],typeof f===u&&f.length>0?f.length==2?typeof f[1]==s?e[f[0]]=f[1].call(this,c):e[f[0]]=f[1]:f.length==3?typeof f[1]===s&&(!f[1].exec||!f[1].test)?e[f[0]]=c?f[1].call(this,c,f[2]):t:e[f[0]]=c?c.replace(f[1],f[2]):t:f.length==4&&(e[f[0]]=c?f[3].call(this,c.replace(f[1],f[2])):t):e[f]=c?c:t}n+=2}return e},str:function(e,n){for(var r in n)if(typeof n[r]===u&&n[r].length>0){for(var s=0;s<n[r].length;s++)if(S.has(n[r][s],e))return r===i?t:r}else if(S.has(n[r],e))return r===i?t:r;return e}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[c,d],[/(opios)[\/\s]+([\w\.]+)/i],[[c,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[c,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[c,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[c,"IE"],d],[/(edge)\/((\d+)?[\w\.]+)/i],[c,d],[/(yabrowser)\/([\w\.]+)/i],[[c,"Yandex"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],d],[/(micromessenger)\/([\w\.]+)/i],[[c,"WeChat"],d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[c,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[c,/(.+)/,"$1 WebView"],d],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[c,d],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[c,"UCBrowser"],d],[/(dolfin)\/([\w\.]+)/i],[[c,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[c,"Chrome"],d],[/;fbav\/([\w\.]+);/i],[d,[c,"Facebook"]],[/fxios\/([\w\.-]+)/i],[d,[c,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[c,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[d,x.str,T.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[c,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,S.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",S.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,S.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[h,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[h,y]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[h,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[h,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,x.str,T.device.amazon.model],[p,"Amazon"],[h,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[h,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[h,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[h,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[h,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[l,[p,"Asus"],[h,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[p,"Sony"],[l,"Xperia Tablet"],[h,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[p,"Sony"],[l,"Xperia Phone"],[h,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[h,m]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[h,m]],[/(playstation\s[34portablevi]+)/i],[l,[p,"Sony"],[h,m]],[/(sprint\s(\w+))/i],[[p,x.str,T.device.sprint.vendor],[l,x.str,T.device.sprint.model],[h,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[h,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[h,g]],[/(nexus\s9)/i],[l,[p,"HTC"],[h,y]],[/(nexus\s6p)/i],[l,[p,"Huawei"],[h,g]],[/(microsoft);\s(lumia[\s\w]+)/i],[p,l,[h,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[h,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[h,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[l,[p,"Motorola"],[h,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[h,y]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[p,S.trim],[l,S.trim],[h,b]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[p,"Samsung"],[h,b]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[h,b]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[h,y]],[/smart-tv.+(samsung)/i],[p,[h,b],l],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[h,g]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[h,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[h,g]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[l,[p,"Acer"],[h,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[h,y]],[/(lg) netcast\.tv/i],[p,l,[h,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[h,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[h,y]],[/linux;.+((jolla));/i],[p,l,[h,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[h,w]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[h,w]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[l,/_/g," "],[p,"Xiaomi"],[h,g]],[/android.+a000(1)\s+build/i],[l,[p,"OnePlus"],[h,g]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[h,S.lowerize],p,l]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[c,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,d],[/rv\:([\w\.]+).*(gecko)/i],[d,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[d,x.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[d,x.str,T.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],d],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,d],[/(haiku)\s(\w+)/i],[c,d],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,d]]},C=function(t,n){if(this instanceof C){var i=t||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:r),s=n?S.extend(N,n):N;return this.getBrowser=function(){var e=x.rgx.apply(this,s.browser);return e.major=S.major(e.version),e},this.getCPU=function(){return x.rgx.apply(this,s.cpu)},this.getDevice=function(){return x.rgx.apply(this,s.device)},this.getEngine=function(){return x.rgx.apply(this,s.engine)},this.getOS=function(){return x.rgx.apply(this,s.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=e,this},this}return(new C(t,n)).getResult()};C.VERSION=n,C.BROWSER={NAME:c,MAJOR:f,VERSION:d},C.CPU={ARCHITECTURE:v},C.DEVICE={MODEL:l,VENDOR:p,TYPE:h,CONSOLE:m,MOBILE:g,SMARTTV:b,TABLET:y,WEARABLE:w,EMBEDDED:E},C.ENGINE={NAME:c,VERSION:d},C.OS={NAME:c,VERSION:d},typeof exports!==o?(typeof module!==o&&module.exports&&(exports=module.exports=C),exports.UAParser=C):typeof define===s&&define.amd?define(function(){return C}):e.UAParser=C;var k=e.jQuery||e.Zepto;if(typeof k!==o){var L=new C;k.ua=L.getResult(),k.ua.get=function(){return L.getUA()},k.ua.set=function(e){L.setUA(e);var t=L.getResult();for(var n in t)k.ua[n]=t[n]}}})(typeof window=="object"?window:this);;(function (window) {

    var setDefaultVal = function (paramVal, defaultVal) {
        console.log("paramVal : "+paramVal);
        console.log("defaultVal : "+defaultVal);
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

                posi = obj.lastPosition;
                if (posi > 0) {

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

        //자막설정
        var setSubtitle = function (obj) {
            if(obj.subtitle){
                obj.subtitle.on = setDefaultVal(obj.subtitle.on,'N');
                if (isNotNull(obj.subtitle.on) && obj.subtitle.on=='Y') {
                    if (obj.isFlash) {

                        obj.flashUrl =  setDefaultVal(obj.flashUrl, obj.url);
                        set_caption_flash(obj.subtitle.flashUrl);

                    } else {
                        __player_subtitles[obj.subtitle.lang] = obj.subtitle.url;
                    }
                }
            }

        }

        //스킨선택
        var setSkin = function (obj) {
            obj.skinType = setDefaultVal(obj.skinType, 'default');

            if(obj.skinServer){
                __player_skinfile = obj.skinServer;
            }else{
                __player_skinfile = "/skin/" + obj.skinType + "/skin.html";
            }


        }

        //워터마크
        var setWarterMark = function (obj) {
            if(obj.wartermark){
                if (obj.wartermark.on=='Y') {
                    $("#watermark_div").show();
                    var posi;
                    switch (obj.wartermark.option.position) {
                        case 'left-top' :
                            posi = 1;
                            break;
                        case 'right-top' :
                            posi = 2;
                            break;
                        case 'left-bottom' :
                            posi = 3;
                            break;
                        case 'right-bottom' :
                            posi = 4;
                            break;
                        case 'center' :
                            posi = 5;
                            break;
                        case 'random' :
                            posi = 6;
                            break;
                        default :
                            posi = 6;
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
            console.log('__player_check_keeper : '+__player_check_keeper);
            console.log(obj.src);
            if (isNotNull(obj.cdn)) {
                srcUrl = obj.cdn;
            }
            //else{
            //    srcUrl = obj.src+"?token="+obj.token
            //}

            if (obj.isFlash) {
                make_flashtag(obj.width, obj.height, __player_check_keeper == 1 ? (srcUrl + "?token=" + obj.token) : srcUrl, __player_id);

            } else {
                make_videotag(obj.width, obj.height, __player_check_keeper == 1 ? (srcUrl + "?token=" + obj.token) : srcUrl, __player_id);

            }

        };

        //버전
        var setVersion = function () {
            set_version(version);

        };
        //blockDuplicateUser
        var blockDuplicateUser = function (obj) {
            if(obj.blockDuplicateUser){
                if(obj.blockDuplicateUser.on=='Y'){
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

            //setPlayList(obj);
        };

        //todo : 프로토콜
        var setProtocol = function (obj) {

        }


        //todo : setPlayerServer
        var setPlayerServer = function (obj) {
            obj.useProvider = setDefaultVal(obj.useProvider,'N');
            if (obj.useProvider == 'Y') {
                playerServer = 'http://localhost';
            }

        }

        //모드
        var setMode = function (obj) {
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
            var is5Video = (browser.name == 'Opera') && (eval(browser.major) >= 105) ;

            var is6Video = (browser.name == 'Safari') && (os.name == 'Mac OS') && (eval(os.version) >= 4);
            if (is1Video || is2Video || is3Video || is4Video || is5Video || is6Video) {
                isVideo = true;
            }

            if (!obj.mode || obj.mode == null || obj.mode == 'null') {



                //Compatibility
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

            if (isVideo) {
                mode = 'html5'

                if(obj.mode){
                    mode = obj.mode;
                }
            }else{
                mode = 'flash'
            }


            obj.isFlash = (mode.toLowerCase() == 'flash');

            var minText = obj.min == "Y" ? '.min' : '';
            console.log('playerServer : '+playerServer);
            var getJsUrl = playerServer + '/js/MediaCastHtml5' + minText + '.js';

            if (obj.isFlash) {
                getJsUrl = playerServer + '/js/MediaCastFlash' + minText + '.js';

            }
            if(obj.jsServer){
                var getJsUrl = obj.jsServer + 'MediaCastHtml5' + minText + '.js';
                if (obj.isFlash) {
                    getJsUrl = obj.jsServer + 'MediaCastFlash' + minText + '.js';

                }
            }




            console.log('getJsUrl : '+getJsUrl);
            $.getScript(getJsUrl, function () {

                if(!obj.security || obj.security==''){
                    obj.security={};
                    obj.security.on = 'N';
                }


                if (obj.security.on == 'Y') {

                    makeToken(obj);
                } else {
                    onSuccss(obj);
                }
            });




        }

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
            playerServer = 'http://localhost';


            //$.getJSON(playerServer + '/api/makeToken'+"?callback=?",
            //    function(data) {
            //        console.log('성공 - ', data);
            //    }
            //);



            //$.ajax({
            //    //type: 'post',
            //    //dataType: 'json',
            //    url: playerServer + '/api/makeToken',
            //    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
            //    jsonp : "callback",
            //    //crossOrigin: true,
            //    //context:{},
            //    data: req,
            //    //jsonpCallback: "myCallback",
            //    success: function (data) {
            //        console.log(data);
            //        obj.token = data.token;
            //        onSuccss(obj);
            //    },
            //    error: function (request, status, error) {
            //        console.log('code: ' + request.status + "\n" + 'message: ' + request.responseText + "\n" + 'error: ' + error);
            //        alert('사용할수 있는 권한이 없습니다.');
            //    }
            //});
            req.title = title;
            req.userId = obj.userId;
            req.vodserver = parser.host;
            playerServer = 'http://localhost';
            $.ajax({
                //type: 'post',
                //dataType: 'json',
                url: playerServer + '/api/getToken?title='+req.title+'&userId='+req.userId+'&vodserver='+req.vodserver,
                dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
                crossOrigin: true,
                jsonp : "callback",
                //context:{},
                //data: req,
                success: function (data) {
                    console.log(data);
                    obj.token = data.token;
                    onSuccss(obj);
                },
                error: function (request, status, error) {
                    console.log('code: ' + request.status + "\n" + 'message: ' + request.responseText + "\n" + 'error: ' + error);
                    alert('사용할수 있는 권한이 없습니다.');
                }
            });
        };

        //셋업
        var setUp = function (obj) {

            //todo: test용 설정
            //'min':'N',
            //'useToken':'N',
            //'useProvider':'N',
            //'skinServer':'sejong',
            //alert('aaaa!!!');


            setTimeout(function(){
                obj.min='N';
                //obj.min = 'Y';
                obj.useToken = 'N';
                obj.useProvider = 'N';
                //obj.skinServer='http://sejong2.mediacast.co.kr/skin/typeA/default/skin.html';
                //obj.skinServer='http://sejong2.mediacast.co.kr/skin/default/skin.html';
                obj.skinServer = 'skin/skin.html';
                //obj.skinServer='http://localhost/skin/default/skin.html';
                //http://sejong2.mediacast.co.kr/typeA/MediaCastHtml5.min.js?_=1488419573165

                //http://121.254.176.85/js/MediaCastHtml5.js
                //obj.jsServer = 'http://localhost/js/';
                obj.jsServer = 'http://121.254.176.85/js/';
                //obj.jsServer='http://sejong2.mediacast.co.kr/typeA/';
                //obj.skinServer='http://localhost/skin/default/skin.html';
                //obj.skinServer='skin/default/skin.html';
                obj.protocol = 'HTTP P/G';             //todo: 프로토콜
                setMode(obj);
            },300)


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

        //setVolume
        var setVolume = function (r) {
            return video_setvolume(r);
        };


        //setRate
        var setRate = function (r) {
            return video_setrate(r*10);
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


        //onLoaded
        var onLoaded = function (callback) {

        };
        //resize
        var resize = function () {
            setResize(1024, 745);        // 리사이즈
        };



        //public
        return {
            setUp: setUp,
            getPosition:getPosition,
            getTime:getTime,
            getVolume:getVolume,
            getRate:getRate,
            setPosition:setPosition,
            setVolume:setVolume,
            setRate:setRate,
            setMute:setMute,
            getMute:getMute,
            getState:getState,//
            play:play,
            pause:pause,
            stop:stop,
            end:end,
            resize:resize,
            //onLoaded:onLoaded,
            //setFullScreen:setFullScreen,
        };
    })();

    window.MCVideo = MCVideo;




})(this);

