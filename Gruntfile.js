// Project configuration.
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            src: {//1.
                expand: true,
                cwd: 'src/main/resources/static/src/',
                src: '**',
                dest: 'src/main/resources/static/src/<%= grunt.template.today("yyyymmdd_HHMMss")%>/',
                flatten: true,
                filter: 'isFile',
            },
            js: {//2.
                expand: true,
                cwd: 'src/main/resources/static/js/',
                src: '**',
                dest: 'src/main/resources/static/js/<%= grunt.template.today("yyyymmdd_HHMMss")%>/',
                flatten: true,
                filter: 'isFile',
            },
            skin: {//2.
                expand: true,
                cwd: 'src/main/resources/static/skin/skin/js/',
                src: '**',
                dest: 'src/main/resources/static/skin/skin/js/<%= grunt.template.today("yyyymmdd_HHMMss")%>/',
                flatten: true,
                filter: 'isFile',
            },
            sample: {//2.
                expand: true,
                cwd: 'src/main/resources/static/js/',
                src: '**',
                dest: 'src/main/resources/static/sample_player/',
                flatten: true,
                filter: 'isFile',
            },
            sampleSkin: {//2.
                expand: true,
                cwd: 'src/main/resources/static/js/',
                src: '**',
                dest: 'src/main/resources/static/sample_player/skin',
                flatten: true,
                filter: 'isFile',
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            MediaCastHtml5Js: {
                src: ['src/main/resources/static/src//MediaCast-Parameter.js',
                      'src/main/resources/static/src/MediaCast-5.2.0.4.js',
                      'src/main/resources/static/src/MediaCast-Html5.js'],
                dest: 'src/main/resources/static/js/MediaCastHtml5.js'
            },
            MediaCastFlashJs: {
                src: ['src/main/resources/static/src/jquery.xdomainrequest.min.js',
                      'src/main/resources/static/src/flowplayer-3.2.11.min.js',
                      'src/main/resources/static/src/MediaCast-Parameter.js',
                      'src/main/resources/static/src/MediaCast-5.2.0.4.js',
                      'src/main/resources/static/src/MediaCast-Flash.js'],
                dest: 'src/main/resources/static/js/MediaCastFlash.js'
            },
            MediaCastJs: {
                src: ['src/main/resources/static/src/ua-parser.min.js',
                      'src/main/resources/static/src/MediaCast-SetUpModule.js'],
                dest: 'src/main/resources/static/js/MediaCast.js'
            },
            SkinJS: {
                src: [
                    'src/main/resources/static/skin/skin/_inc/player.js',
                    //'src/main/resources/static/skin/skin/_inc/jquery-ui.js',
                    'src/main/resources/static/skin/skin/_inc/jquery.cookie.js',
                    'src/main/resources/static/src/ua-parser.min.js',
                    'src/main/resources/static/skin/skin/js/jquery.ui.touch-punch.js',
                    'src/main/resources/static/skin/skin/js/common.js',
                    'src/main/resources/static/skin/skin/js/skin_stub.js',
                    'src/main/resources/static/skin/skin/js/skin_control_api.js',
                    'src/main/resources/static/skin/skin/js/skin_module.js',
                    //'src/main/resources/static/skin/skin/mcplayer.js'
                ],
                dest: 'src/main/resources/static/js/skin.js'
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
            MediaCastHtml5Js: {
                src: 'src/main/resources/static/js/MediaCastHtml5.js',
                dest: 'src/main/resources/static/js/MediaCastHtml5.min.js'
            },
            MediaCastFlashJs: {
                src: 'src/main/resources/static/js/MediaCastFlash.js',
                dest: 'src/main/resources/static/js/MediaCastFlash.min.js'
            },
            MediaCastJs: {
                src: 'src/main/resources/static/js/MediaCast.js',
                dest: 'src/main/resources/static/js/MediaCast.min.js'
            },
            SkinJS: {
                src: 'src/main/resources/static/js/skin.js',
                dest: 'src/main/resources/static/js/skin.min.js'
            },
            SkinPlayerJS: {
                src: 'src/main/resources/static/skin/skin/mcplayer.js',
                dest: 'src/main/resources/static/js/mcplayer.min.js'
            },
            ProviderJS: {
                src: 'src/main/resources/static/provider/MediaCastHtml5.js',
                dest: 'src/main/resources/static/provider/MediaCastHtml5.min.js'
            },
            ProviderSampleJS: {
                src: 'src/main/resources/static/js/skin.js',
                dest: 'src/main/resources/static/sample_player_min/skin/skin.min.js'
            },
        },
        // uglify:{
        //     consoleOutSrc: {
        //         options: {
        //             mangle: false,
        //             compress: {
        //                 drop_console: true
        //             },
        //             beautify: true
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: 'src/main/resources/static/src',
        //             src: '**/*.js',
        //             dest: 'dest/js'
        //         }]
        //     },
        //     consoleOutSkinJs: {
        //         options: {
        //             mangle: false,
        //             compress: {
        //                 drop_console: true
        //             },
        //             beautify: true
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: 'src/main/resources/static/skin/mediacast/js',
        //             src: '**/*.js',
        //             dest: 'dest2/js'
        //         }]
        //     },
        //     consoleOutSkin: {
        //         options: {
        //             mangle: false,
        //             compress: {
        //                 drop_console: true
        //             },
        //             beautify: true
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: 'src/main/resources/static/skin/mediacast',
        //             src: '**/*.js',
        //             dest: 'dest3/js'
        //         }]
        //     },
        //
        //     // options: {
        //     //     mangle: false,
        //     //     compress: {
        //     //         drop_console: true
        //     //     },
        //     //     beautify: true
        //     // },
        //     // consoleOutSrc: {
        //     //     src: 'src/main/resources/static/src',
        //     //     dest: 'src/main/resources/static/src'
        //     // },
        //     // consoleOutSkinJs: {
        //     //     src: 'src/main/resources/static/skin/mediacast/js',
        //     //     dest: 'src/main/resources/static/skin/mediacast/js'
        //     // },
        // },
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
                    cwd: 'src/main/resources/static/sample_player/_inc',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/main/resources/static/sample_player/_inc',
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

        //notify_hooks:{
        //    options:{
        //        enabled: true,
        //        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        //        title: "Project Name", // defaults to the name in package.json, or will use project directory's name
        //        success: false, // whether successful grunt executions should be notified automatically
        //        duration: 3 // the duration of notification in seconds, for `notify-send only
        //    }
        //}
        htmlmin: {                                     // Task//'src/main/resources/static/test',
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'src/main/resources/static/sample_player_min/skin/skinmin.html': 'src/main/resources/static/sample_player_min/skin/skin.html',     // 'destination': 'source'
                    //'dist/contact.html': 'src/contact.html'
                }
            },
            dev: {                                       // Another target
                files: {
                    'dist/index.html': 'src/index.html',
                    //'dist/contact.html': 'src/contact.html'
                }
            }
        },
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
        concurrent: {
            copy: ['newer:copy'],
            concat: ['newer:concat'],
            uglify: ['newer:uglify'],
            cssmin: ['newer:cssmin'],
            htmlmin: ['newer:htmlmin'],
            //third: ['newer:handlebars'],
            //second: ['newer:uglify','newer:imagemin'],
            //target3: ['newer:imagemin']
        },

    });


    grunt.registerTask('default', ['concurrent:copy','concurrent:concat', 'concurrent:uglify', 'concurrent:cssmin', 'concurrent:htmlmin']);


}
