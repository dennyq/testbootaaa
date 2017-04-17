// Project configuration.
module.exports = function(grunt) {
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist1: {
                //src: ['src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Html5.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],
                //src: ['src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],//v1
                //src: ['src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Html5.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],//v2
                src: ['src/main/resources/static/src//MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Html5.js'],//v3
                //dest: 'src/main/resources/static/src/MediaCast.js',
                dest: 'src/main/resources/static/js/MediaCastHtml5.js',
            },
            dist2: {
                //src: ['src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Flash.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],
                //src: ['src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],
                //src: ['src/main/resources/static/src/jquery.xdomainrequest.min.js','src/main/resources/static/src/   flowplayer-3.2.11.min.js', 'src/main/resources/static/src/MediaCast-Flash.js'],//v1
                //src: ['src/main/resources/static/src/jquery.xdomainrequest.min.js','src/main/resources/static/src/flowplayer-3.2.11.min.js', 'src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js','src/main/resources/static/src/MediaCast-Flash.js', 'src/main/resources/static/src/MediaCast-Module-latest-total.js'],//v1
                src: ['src/main/resources/static/src/jquery.xdomainrequest.min.js','src/main/resources/static/src/flowplayer-3.2.11.min.js', 'src/main/resources/static/src/MediaCast-Parameter.js','src/main/resources/static/src/MediaCast-5.2.0.4.js','src/main/resources/static/src/MediaCast-Flash.js'],//v3
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js','web/typeB/module.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                //src: ['web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                dest: 'src/main/resources/static/js/MediaCastFlash.js',
            },
            dist3: {
                src: ['src/main/resources/static/src/ua-parser.min.js','src/main/resources/static/src/MediaCast-SetUpModule.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js','web/typeB/module.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                //src: ['web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                dest: 'src/main/resources/static/js/MediaCast.js'
            },
            dist4: {
                src: ['src/main/resources/static/js/MediaCastHtml5.js','src/main/resources/static/js/MediaCastFlash.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js','web/typeB/module.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                //src: ['web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                dest: 'src/main/resources/static/js/MediaCastPlayer.js'
            },
            distskin: {
        //<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
        //<script language="JavaScript" src="common.js" type="text/javascript"></script>
        //<script language="JavaScript" src="skin_stub.js" type="text/javascript"></script>
        //<script language="JavaScript" src="skin_control.js" type="text/javascript"></script>
                src: [
                    //'src/main/resources/static/skin/default/jquery-latest.min.js',
                    'src/main/resources/static/skin/default/common.js',
                    'src/main/resources/static/skin/default/skin_stub.js',
                    'src/main/resources/static/skin/default/skin_control.js'

                ],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js','web/typeB/module.js'],
                //src: ['web/typeB/handlebars.min.js','web/typeB/jquery-ui.min.js', 'web/typeB/jquery.cookie.js', 'web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                //src: ['web/typeB/video_pc.js', 'web/typeB/templates.js', 'web/typeB/test.js'],
                dest: 'src/main/resources/static/js/skin.js'
            },
            jqskin:{
                src: [
                    'src/main/resources/static/js/jquery-latest.min.js',
                    'src/main/resources/static/js/skin.min.js',


                ],
                dest: 'src/main/resources/static/js/jqskin.js'
            }
        },
        uglify:{
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                },
                beautify: false
            },
            build1: {
                //src: 'src/main/resources/static/src/MediaCast.js',
                //dest: 'src/main/resources/static/src/MediaCast.min.js'
                src: 'src/main/resources/static/js/MediaCastHtml5.js',
                dest: 'src/main/resources/static/js/MediaCastHtml5.min.js'
            },
            build2: {
                //src: 'web/typeB/MediaCast.js',
                //dest: 'web/typeB/MediaCast.min.js'
                src: 'src/main/resources/static/js/MediaCastFlash.js',
                dest: 'src/main/resources/static/js/MediaCastFlash.min.js'
            },
            build3: {
                src: 'src/main/resources/static/js/MediaCast-Module-latest-total.js',
                dest: 'src/main/resources/static/js/MediaCast-Module-latest-total.min.js'
            },
            build4: {
                src: 'src/main/resources/static/js/MediaCast.js',
                dest: 'src/main/resources/static/js/MediaCast.min.js'
            },
            buildskin: {// dest: 'src/main/resources/static/js/skin.js'
                src: 'src/main/resources/static/js/skin.js',
                dest: 'src/main/resources/static/js/skin.min.js'
            },
            buildtest: {// dest: 'src/main/resources/static/js/skin.js'
                src: 'src/main/resources/static/test/MediaCast.js',
                dest: 'src/main/resources/static/test/MediaCast.min.js'
            },
            buildjqskin: {// dest: 'src/main/resources/static/js/jqskin.js'
                src: 'src/main/resources/static/js/jqskin.js',
                dest: 'src/main/resources/static/js/jqskin.min.js'
            }
        },
        imagemin: {
            options: {
                cache: false
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: 'web/skin/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'web/skinmin/'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/main/resources/static/test',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/main/resources/static/test',
                    ext: '.min.css'
                }]
            }
        },

        handlebars: {
            options: {
                namespace: "Handlebars.templates",
                processName:function(filePath) {
                    var pattern=/handlebar\/(.+\/)*(.+)\.handlebars/gi;
                    return pattern.exec(filePath)[2];
                }
            },
            compile : {
                files: {
                    //destination : [target list]
                    "web/typeB/templates.js" : ["web/handlebar/*.handlebars"]
                }
            }

        },
        concurrent: {
            first: ['newer:concat'],
            second: ['newer:uglify'],
            third: ['newer:cssmin'],
            //third: ['newer:handlebars'],
            //second: ['newer:uglify','newer:imagemin'],
            //target3: ['newer:imagemin']
        },
        //notify_hooks:{
        //    options:{
        //        enabled: true,
        //        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        //        title: "Project Name", // defaults to the name in package.json, or will use project directory's name
        //        success: false, // whether successful grunt executions should be notified automatically
        //        duration: 3 // the duration of notification in seconds, for `notify-send only
        //    }
        //}
        notify: {
            imagemin: {
                options: {
                    title: 'Build complete',  // optional
                    message: '<%= pkg.name %> build finished successfully.' //required
                }
            },
        //
        //    //watch: {
        //    //    options: {
        //    //        title: 'Task Complete',  // optional
        //    //        message: 'SASS and Uglify finished running', //required
        //    //    }
        //    //},
        //    //server: {
        //    //    options: {
        //    //        message: 'Server is ready!'
        //    //    }
        //    //}
        },
        htmlmin: {                                     // Task//'src/main/resources/static/test',
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'src/main/resources/static/test/skin/skinmin.html': 'src/main/resources/static/test/skin/skin.html',     // 'destination': 'source'
                    //'dist/contact.html': 'src/contact.html'
                }
            },
            dev: {                                       // Another target
                files: {
                    'dist/index.html': 'src/index.html',
                    //'dist/contact.html': 'src/contact.html'
                }
            }
        }
    });
    //
    ////grunt.loadNpmTasks('grunt-contrib-concat');
    ////grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.registerTask('default', ['newer:concat','newer:uglify','newer:imagemin']); //grunt 명령어로 실행할 작업
    //grunt.registerTask('default', ['concurrent:first', 'concurrent:second']);
    grunt.registerTask('default', ['concurrent:first', 'concurrent:second', 'concurrent:third']);
    //grunt.registerTask('default', ['concurrent:first', 'concurrent:second','imagemin','notify:imagemin']);

}
