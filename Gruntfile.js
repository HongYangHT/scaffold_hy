/**
 *  @version : 1.0.0
 *  @description : manager less and ugligy js with node 
 *                 build project with requirejs
 *  @author : hongyang
 */
module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            //编译less文件
            compileLess: {
                options: {

                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/less',
                    src: '*.less',
                    dest: 'scaffold/assets/css',
                    ext: '.css'
                }]
            },
            //编译less文件
            compileLess1: {
                options: {},
                files: [{
                    expand: true,
                    cwd: 'src/assets/less',
                    src: '*.less',
                    dest: 'scaffold/assets/css',
                    ext: '.css'
                }]
            },
            compileLess2: {
                options: {},
                files: [{
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxhd',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxhd',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxBanner',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner2',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxBanner2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule2',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxRule',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxRule',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxTemp',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxTemp',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxft',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/yxft',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9BBD',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9BBD',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2BE2',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2BE2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_7A5D',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_7A5D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_A1C6',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_A1C6',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_881B',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_881B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_73D7',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_73D7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0CE9',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0CE9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_19AB',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_19AB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_AFA4',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_AFA4',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_46EB',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_46EB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C6E9',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C6E9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_DB08',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_DB08',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_6D5E',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_6D5E',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_97D8',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_97D8',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0AA8',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0AA8',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_92C9',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_92C9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_ACBA',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_ACBA',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EAB5',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EAB5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3DA7',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3DA7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_FDC0',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_FDC0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_51E1',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_51E1',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EE29',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EE29',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_4FDB',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_4FDB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_07DA',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_07DA',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BFA7',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BFA7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_A86B',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_A86B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_20BC',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_20BC',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C3',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C3',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B278',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B278',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B53B',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B53B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_94FE',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_94FE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_77DE',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_77DE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BE90',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BE90',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CE2D',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CE2D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EA3D',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EA3D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_4A12',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_4A12',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_D9D0',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_D9D0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BF3A',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BF3A',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_35FD',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_35FD',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BCD0',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BCD0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BCD0',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BCD0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C5',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C6',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C6',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C88F',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C88F',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_866E',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_866E',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_F5F5',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_F5F5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_77DE',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_77DE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_48BB',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_48BB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CF55',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CF55',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_1137',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_1137',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_OABF',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_OABF',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_22EE',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_22EE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5A56',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5A56',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3311',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3311',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_1D5D',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_1D5D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_417A',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_417A',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2097',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2097',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5589',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5589',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EB26',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EB26',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_8178',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_8178',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            combine: {
                options: {
                    'report': 'min'
                },
                files: {
                    'scaffold/assets/css/main.<%= grunt.template.today("yyyymmddHHMM") %>.min.css': ['src/assets/css/colorpicker.css', 'src/assets/css/page.css', 'src/assets/css/reset.css', 'src/assets/css/font-awesome.css', 'src/assets/css/pnotify.css', 'src/assets/css/rebase.css'],
                    'scaffold/assets/css/iframe.<%= grunt.template.today("yyyymmddHHMM") %>.min.css': ['src/assets/css/reset.css', 'src/assets/css/adapt.css']
                }
            },
            combineDev: {
                options: {
                    'report': 'min'
                },
                files: {
                    'scaffold/assets/css/main.css': ['src/assets/css/colorpicker.css', 'src/assets/css/page.css', 'src/assets/css/reset.css', 'src/assets/css/font-awesome.css']
                }
            },
            minify: {
                options: {
                    banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxhd',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxhd',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxBanner',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner2',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxBanner2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxTemp',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxTemp',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule2',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxRule',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxRule',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxft',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/yxft',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9BBD',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9BBD',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2BE2',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2BE2',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_7A5D',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_7A5D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_A1C6',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_A1C6',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_881B',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_881B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_73D7',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_73D7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0CE9',
                    src: '*.less',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0CE9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_19AB',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_19AB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_AFA4',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_AFA4',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_46EB',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_46EB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C6E9',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C6E9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_DB08',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_DB08',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_6D5E',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_6D5E',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_97D8',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_97D8',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0AA8',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0AA8',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_92C9',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_92C9',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_ACBA',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_ACBA',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EAB5',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EAB5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3DA7',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3DA7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_FDC0',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_FDC0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_51E1',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_51E1',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EE29',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EE29',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_4FDB',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_4FDB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_07DA',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_07DA',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BFA7',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BFA7',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_A86B',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_A86B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_20BC',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_20BC',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C3',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C3',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B278',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B278',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B53B',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B53B',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_94FE',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_94FE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_77DE',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_77DE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BE90',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BE90',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CE2D',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CE2D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EA3D',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EA3D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_D45D',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_D45D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_64E0',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_64E0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_A4F1',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_A4F1',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_CB4D',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_CB4D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_4A12',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_4A12',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_D9D0',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_D9D0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BF3A',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BF3A',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_35FD',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_35FD',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BCD0',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BCD0',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C5',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C6',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C6',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_866E',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_866E',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C88F',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C88F',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_F5F5',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_F5F5',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_48BB',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_48BB',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_77DE',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_77DE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_OABF',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_OABF',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_1137',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_1137',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CF55',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CF55',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5A56',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5A56',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3311',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3311',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_1D5D',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_1D5D',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_22EE',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_22EE',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_417A',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_417A',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5589',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5589',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2097',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2097',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EB26',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EB26',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_8178',
                    src: '*.css',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_8178',
                    ext: '.css'
                }]
            }
        },
        sass: {
            scaffold: {
                options: {
                    'sourcemap': 'none',
                    'style': 'compressed'
                },
                files: []
            }
        },
        htmlmin: {
            scaffold: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    useShortDoctype: true
                },
                files: {
                    'scaffold/page.html': 'src/page.html',
                    'scaffold/iframe.html': 'src/iframe.html',
                    'scaffold/assets/components/page/root/root.mustache': 'src/assets/components/page/root/root.mustache',
                    'scaffold/assets/components/page/head/head.mustache': 'src/assets/components/page/head/head.mustache',
                    'scaffold/assets/components/page/body/body.mustache': 'src/assets/components/page/body/body.mustache',
                    'scaffold/assets/components/page/foot/foot.mustache': 'src/assets/components/page/foot/foot.mustache',
                    'scaffold/assets/components/page/content/content.mustache': 'src/assets/components/page/content/content.mustache',
                    'scaffold/assets/components/page/layout/layout.mustache': 'src/assets/components/page/layout/layout.mustache',
                    'scaffold/assets/components/page/shareInfo/shareInfo.mustache': 'src/assets/components/page/shareInfo/shareInfo.mustache',
                    'scaffold/assets/components/page/shareModal/shareModal.mustache': 'src/assets/components/page/shareModal/shareModal.mustache',
                    'scaffold/assets/components/page/popLayout/popLayout.mustache': 'src/assets/components/page/popLayout/popLayout.mustache',
                    'scaffold/assets/components/page/menu/menu.mustache': 'src/assets/components/page/menu/menu.mustache',
                    'scaffold/assets/components/page/modal/modal.mustache': 'src/assets/components/page/modal/modal.mustache',
                    'scaffold/assets/components/page/preModal/preModal.mustache': 'src/assets/components/page/preModal/preModal.mustache',
                    'scaffold/assets/components/page/tip/tip.mustache': 'src/assets/components/page/tip/tip.mustache',
                    'scaffold/assets/components/page/editMenu/editMenu.mustache': 'src/assets/components/page/editMenu/editMenu.mustache',
                    'scaffold/assets/components/page/autocomplete/autocomplete.mustache': 'src/assets/components/page/autocomplete/autocomplete.mustache',
                    'scaffold/assets/components/page/autoinfo/autoinfo.mustache': 'src/assets/components/page/autoinfo/autoinfo.mustache',
                    'scaffold/assets/components/page/adaptLayout/adaptLayout.mustache': 'src/assets/components/page/adaptLayout/adaptLayout.mustache',
                    'scaffold/assets/components/page/shareTempl/shareTempl.mustache': 'src/assets/components/page/shareTempl/shareTempl.mustache',
                    'scaffold/assets/components/page/getShareTemplate/getShareTemplate.mustache': 'src/assets/components/page/getShareTemplate/getShareTemplate.mustache',
                    'scaffold/assets/components/page/modules/yxhd/yxhd.mustache': 'src/assets/components/page/modules/yxhd/yxhd.mustache',
                    'scaffold/assets/components/page/modules/yxBanner/yxBanner.mustache': 'src/assets/components/page/modules/yxBanner/yxBanner.mustache',
                    'scaffold/assets/components/page/modules/yxBanner2/yxBanner2.mustache': 'src/assets/components/page/modules/yxBanner2/yxBanner2.mustache',
                    'scaffold/assets/components/page/modules/yxTemp/yxTemp.mustache': 'src/assets/components/page/modules/yxTemp/yxTemp.mustache',
                    'scaffold/assets/components/page/modules/yxBackModule/yxBackModule.mustache': 'src/assets/components/page/modules/yxBackModule/yxBackModule.mustache',
                    'scaffold/assets/components/page/modules/yxBackModule2/yxBackModule2.mustache': 'src/assets/components/page/modules/yxBackModule2/yxBackModule2.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9BBD/YX_N_M_9BBD.mustache': 'src/assets/components/page/modules/YX_N_M_9BBD/YX_N_M_9BBD.mustache',
                    'scaffold/assets/components/page/modules/yxBackModule2/yxBackModule2.mustache': 'src/assets/components/page/modules/yxBackModule2/yxBackModule2.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_2BE2/YX_N_M_2BE2.mustache': 'src/assets/components/page/modules/YX_N_M_2BE2/YX_N_M_2BE2.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_7A5D/YX_N_M_7A5D.mustache': 'src/assets/components/page/modules/YX_N_M_7A5D/YX_N_M_7A5D.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_A1C6/YX_N_M_A1C6.mustache': 'src/assets/components/page/modules/YX_N_M_A1C6/YX_N_M_A1C6.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_881B/YX_N_M_881B.mustache': 'src/assets/components/page/modules/YX_N_M_881B/YX_N_M_881B.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_73D7/YX_S_M_73D7.mustache': 'src/assets/components/page/modules/YX_S_M_73D7/YX_S_M_73D7.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_0CE9/YX_S_M_0CE9.mustache': 'src/assets/components/page/modules/YX_S_M_0CE9/YX_S_M_0CE9.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_19AB/YX_S_M_19AB.mustache': 'src/assets/components/page/modules/YX_S_M_19AB/YX_S_M_19AB.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_AFA4/YX_S_M_AFA4.mustache': 'src/assets/components/page/modules/YX_S_M_AFA4/YX_S_M_AFA4.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_46EB/YX_N_M_46EB.mustache': 'src/assets/components/page/modules/YX_N_M_46EB/YX_N_M_46EB.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_C6E9/YX_N_M_C6E9.mustache': 'src/assets/components/page/modules/YX_N_M_C6E9/YX_N_M_C6E9.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_DB08/YX_N_M_DB08.mustache': 'src/assets/components/page/modules/YX_N_M_DB08/YX_N_M_DB08.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_6D5E/YX_S_M_6D5E.mustache': 'src/assets/components/page/modules/YX_S_M_6D5E/YX_S_M_6D5E.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_97D8/YX_S_M_97D8.mustache': 'src/assets/components/page/modules/YX_S_M_97D8/YX_S_M_97D8.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_0AA8/YX_S_M_0AA8.mustache': 'src/assets/components/page/modules/YX_S_M_0AA8/YX_S_M_0AA8.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_92C9/YX_N_M_92C9.mustache': 'src/assets/components/page/modules/YX_N_M_92C9/YX_N_M_92C9.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_ACBA/YX_N_M_ACBA.mustache': 'src/assets/components/page/modules/YX_N_M_ACBA/YX_N_M_ACBA.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_EAB5/YX_N_M_EAB5.mustache': 'src/assets/components/page/modules/YX_N_M_EAB5/YX_N_M_EAB5.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_3DA7/YX_S_M_3DA7.mustache': 'src/assets/components/page/modules/YX_S_M_3DA7/YX_S_M_3DA7.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_FDC0/YX_N_M_FDC0.mustache': 'src/assets/components/page/modules/YX_N_M_FDC0/YX_N_M_FDC0.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_51E1/YX_S_M_51E1.mustache': 'src/assets/components/page/modules/YX_S_M_51E1/YX_S_M_51E1.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_EE29/YX_S_M_EE29.mustache': 'src/assets/components/page/modules/YX_S_M_EE29/YX_S_M_EE29.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_4FDB/YX_S_M_4FDB.mustache': 'src/assets/components/page/modules/YX_S_M_4FDB/YX_S_M_4FDB.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_07DA/YX_S_M_07DA.mustache': 'src/assets/components/page/modules/YX_S_M_07DA/YX_S_M_07DA.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_BFA7/YX_S_M_BFA7.mustache': 'src/assets/components/page/modules/YX_S_M_BFA7/YX_S_M_BFA7.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_A86B/YX_S_M_A86B.mustache': 'src/assets/components/page/modules/YX_S_M_A86B/YX_S_M_A86B.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_20BC/YX_S_M_20BC.mustache': 'src/assets/components/page/modules/YX_S_M_20BC/YX_S_M_20BC.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_C1C3/YX_N_M_C1C3.mustache': 'src/assets/components/page/modules/YX_N_M_C1C3/YX_N_M_C1C3.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_B278/YX_N_M_B278.mustache': 'src/assets/components/page/modules/YX_N_M_B278/YX_N_M_B278.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_B53B/YX_N_M_B53B.mustache': 'src/assets/components/page/modules/YX_N_M_B53B/YX_N_M_B53B.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_94FE/YX_N_M_94FE.mustache': 'src/assets/components/page/modules/YX_N_M_94FE/YX_N_M_94FE.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_77DE/YX_N_M_77DE.mustache': 'src/assets/components/page/modules/YX_N_M_77DE/YX_N_M_77DE.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_BE90/YX_N_M_BE90.mustache': 'src/assets/components/page/modules/YX_N_M_BE90/YX_N_M_BE90.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_CE2D/YX_S_M_CE2D.mustache': 'src/assets/components/page/modules/YX_S_M_CE2D/YX_S_M_CE2D.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_EA3D/YX_S_M_EA3D.mustache': 'src/assets/components/page/modules/YX_S_M_EA3D/YX_S_M_EA3D.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_D45D/YX_N_M_D45D.mustache': 'src/assets/components/page/modules/YX_N_M_D45D/YX_N_M_D45D.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_64E0/YX_N_M_64E0.mustache': 'src/assets/components/page/modules/YX_N_M_64E0/YX_N_M_64E0.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_A4F1/YX_N_M_A4F1.mustache': 'src/assets/components/page/modules/YX_N_M_A4F1/YX_N_M_A4F1.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_CB4D/YX_N_M_CB4D.mustache': 'src/assets/components/page/modules/YX_N_M_CB4D/YX_N_M_CB4D.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_4A12/YX_N_M_4A12.mustache': 'src/assets/components/page/modules/YX_N_M_4A12/YX_N_M_4A12.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_D9D0/YX_S_M_D9D0.mustache': 'src/assets/components/page/modules/YX_S_M_D9D0/YX_S_M_D9D0.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_BF3A/YX_S_M_BF3A.mustache': 'src/assets/components/page/modules/YX_S_M_BF3A/YX_S_M_BF3A.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_35FD/YX_S_M_35FD.mustache': 'src/assets/components/page/modules/YX_S_M_35FD/YX_S_M_35FD.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_BCD0/YX_N_M_BCD0.mustache': 'src/assets/components/page/modules/YX_N_M_BCD0/YX_N_M_BCD0.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_C1C5/YX_N_M_C1C5.mustache': 'src/assets/components/page/modules/YX_N_M_C1C5/YX_N_M_C1C5.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_C1C6/YX_N_M_C1C6.mustache': 'src/assets/components/page/modules/YX_N_M_C1C6/YX_N_M_C1C6.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_C88F/YX_N_M_C88F.mustache': 'src/assets/components/page/modules/YX_N_M_C88F/YX_N_M_C88F.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_866E/YX_S_M_866E.mustache': 'src/assets/components/page/modules/YX_S_M_866E/YX_S_M_866E.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5.mustache': 'src/assets/components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_77DE/YX_S_M_77DE.mustache': 'src/assets/components/page/modules/YX_S_M_77DE/YX_S_M_77DE.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_48BB/YX_S_M_48BB.mustache': 'src/assets/components/page/modules/YX_S_M_48BB/YX_S_M_48BB.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_CF55/YX_S_M_CF55.mustache': 'src/assets/components/page/modules/YX_S_M_CF55/YX_S_M_CF55.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_1137/YX_N_M_1137.mustache': 'src/assets/components/page/modules/YX_N_M_1137/YX_N_M_1137.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_OABF/YX_N_M_OABF.mustache': 'src/assets/components/page/modules/YX_N_M_OABF/YX_N_M_OABF.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E50/YX_N_M_9E50.mustache': 'src/assets/components/page/modules/YX_N_M_9E50/YX_N_M_9E50.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E51/YX_N_M_9E51.mustache': 'src/assets/components/page/modules/YX_N_M_9E51/YX_N_M_9E51.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E52/YX_N_M_9E52.mustache': 'src/assets/components/page/modules/YX_N_M_9E52/YX_N_M_9E52.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E53/YX_N_M_9E53.mustache': 'src/assets/components/page/modules/YX_N_M_9E53/YX_N_M_9E53.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E54/YX_N_M_9E54.mustache': 'src/assets/components/page/modules/YX_N_M_9E54/YX_N_M_9E54.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E55/YX_N_M_9E55.mustache': 'src/assets/components/page/modules/YX_N_M_9E55/YX_N_M_9E55.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E47/YX_N_M_9E47.mustache': 'src/assets/components/page/modules/YX_N_M_9E47/YX_N_M_9E47.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E48/YX_N_M_9E48.mustache': 'src/assets/components/page/modules/YX_N_M_9E48/YX_N_M_9E48.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_9E49/YX_N_M_9E49.mustache': 'src/assets/components/page/modules/YX_N_M_9E49/YX_N_M_9E49.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_5A56/YX_N_M_5A56.mustache': 'src/assets/components/page/modules/YX_N_M_5A56/YX_N_M_5A56.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_3311/YX_S_M_3311.mustache': 'src/assets/components/page/modules/YX_S_M_3311/YX_S_M_3311.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_1D5D/YX_S_M_1D5D.mustache': 'src/assets/components/page/modules/YX_S_M_1D5D/YX_S_M_1D5D.mustache',
                    'scaffold/assets/components/page/modules/YX_S_M_22EE/YX_S_M_22EE.mustache': 'src/assets/components/page/modules/YX_S_M_22EE/YX_S_M_22EE.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_417A/YX_N_M_417A.mustache': 'src/assets/components/page/modules/YX_N_M_417A/YX_N_M_417A.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_5589/YX_N_M_5589.mustache': 'src/assets/components/page/modules/YX_N_M_5589/YX_N_M_5589.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_2097/YX_N_M_2097.mustache': 'src/assets/components/page/modules/YX_N_M_2097/YX_N_M_2097.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_EB26/YX_N_M_EB26.mustache': 'src/assets/components/page/modules/YX_N_M_EB26/YX_N_M_EB26.mustache',
                    'scaffold/assets/components/page/modules/YX_N_M_8178/YX_N_M_8178.mustache': 'src/assets/components/page/modules/YX_N_M_8178/YX_N_M_8178.mustache'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/assets/css/fonts',
                src: '**',
                dest: 'scaffold/assets/css/fonts/',
                options: {}
            },
            css: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/css',
                    src: '*.css',
                    dest: 'scaffold/assets/css/'
                }],
                flatten: true,
                filter: 'isFile',
                options: {}
            },
            js: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/components/page/layout',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/layout',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/autoinfo',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/autoinfo',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/adaptLayout',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/adaptLayout',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxhd',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxhd',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxBanner',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBanner2',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxBanner2',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxTemp',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxTemp',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxBackModule2',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxBackModule2',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxft',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxft',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxRule',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxRule',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9BBD',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9BBD',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2BE2',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2BE2',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_7A5D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_7A5D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_A1C6',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_A1C6',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_881B',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_881B',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_73D7',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_73D7',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0CE9',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0CE9',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_19AB',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_19AB',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_AFA4',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_AFA4',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_46EB',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_46EB',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C6E9',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C6E9',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_DB08',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_DB08',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_6D5E',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_6D5E',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_97D8',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_97D8',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_0AA8',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_0AA8',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_92C9',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_92C9',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_ACBA',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_ACBA',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EAB5',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EAB5',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3DA7',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3DA7',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_FDC0',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_FDC0',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_51E1',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_51E1',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EE29',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EE29',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_4FDB',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_4FDB',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_07DA',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_07DA',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BFA7',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BFA7',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_A86B',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_A86B',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_20BC',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_20BC',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C3',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C3',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B278',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B278',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_B53B',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_B53B',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_94FE',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_94FE',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_77DE',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_77DE',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BE90',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BE90',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CE2D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CE2D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_EA3D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_EA3D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_D45D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_D45D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_64E0',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_64E0',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_A4F1',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_A4F1',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_CB4D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_CB4D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_4A12',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_4A12',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_D9D0',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_D9D0',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_BF3A',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_BF3A',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_35FD',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_35FD',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_BCD0',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_BCD0',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C5',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C5',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C1C6',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C1C6',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_866E',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_866E',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_C88F',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_C88F',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_F5F5',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_F5F5',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_77DE',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_77DE',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_48BB',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_48BB',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_OABF',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_OABF',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_1137',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_1137',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_CF55',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_CF55',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E50',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E50',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E51',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E51',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E52',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E52',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E53',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E53',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E54',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E54',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E55',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E55',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E47',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E47',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E48',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E48',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_9E49',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_9E49',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_22EE',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_22EE',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5A56',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5A56',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_3311',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_3311',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_S_M_1D5D',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_S_M_1D5D',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_417A',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_417A',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_2097',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_2097',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_5589',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_5589',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_EB26',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_EB26',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'src/assets/components/page/modules/YX_N_M_8178',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/YX_N_M_8178',
                    ext: '.js'
                }],
                flatten: true,
                filter: 'isFile',
                options: {}
            }
        },
        requirejs: {
            compilePage: {
                options: {
                    'baseUrl': 'src/assets/',
                    'mainConfigFile': 'src/assets/app/config.js',
                    'paths': {
                        'requirejs': 'libs/require',
                        'underscore': 'libs/underscore',
                        'jquery': 'libs/jquery',
                        'text': 'libs/text',
                        'Vue': 'libs/vue',
                        'mustache': 'libs/mustache',
                        'collapse': 'libs/jquery.collapse',
                        'uuid': 'libs/uuid',
                        'FileSaver': 'libs/FileSaver',
                        'Blob': 'libs/Blob',
                        'colorpicker': 'libs/bootstrap-colorpicker',
                        'pnotify': 'libs/pnotify',
                        'notify': 'libs/notify',
                        'sortable': 'libs/sortable',
                        'laydate': 'libs/laydate',
                        'autocomplete': 'libs/jquery.autocomplete',
                        'clipboard': 'libs/clipboard'
                    },
                    error: function(done, err) {
                        grunt.log.warn(err);
                        done();
                    },
                    'optimize': 'uglify',
                    'include': ['requirejs', 'underscore', 'jquery', 'text', 'Vue', 'mustache', 'collapse', 'uuid', 'FileSaver',
                        'Blob', 'colorpicker', 'pnotify', 'notify', 'sortable', 'autocomplete', 'clipboard',
                        'components/page',
                        'components/page/root/rootVM',
                        'components/page/head/headVM',
                        'components/page/body/bodyVM',
                        'components/page/foot/footVM',
                        'components/page/content/contentVM',
                        'components/page/layout/layoutVM',
                        'components/page/shareInfo/shareInfoVM',
                        'components/page/shareModal/shareModalVM',
                        'components/page/popLayout/popLayoutVM',
                        'components/page/modal/modalVM',
                        'components/page/preModal/preModalVM',
                        'components/page/tip/tipVM',
                        'components/page/menu/menuVM',
                        'components/page/editMenu/editMenuVM',
                        'components/page/autoComplete/autoCompleteVM',
                        'components/page/autoinfo/autoinfoVM',
                        'components/page/adaptLayout/adaptLayoutVM',
                        'components/page/shareTemplate/shareTemplateVM',
                        'components/page/getShareTemplate/getShareTemplateVM',
                        'model/base',
                        'model/model',
                        'common/helper/load',
                        'common/filter/checkType',
                        'common/filter/checkGroup',
                        'common/mixins/pageMixins',
                        'common/directive/setStyle',
                        'common/helper/data2vue',
                        'common/helper/tpl2vue',
                        'common/helper/localStorage',
                        'common/helper/tools',
                        'text!components/page/root/root.mustache',
                        'text!components/page/head/head.mustache',
                        'text!components/page/body/body.mustache',
                        'text!components/page/foot/foot.mustache',
                        'text!components/page/content/content.mustache',
                        'text!components/page/menu/menu.mustache',
                        'text!components/page/editMenu/editMenu.mustache',
                        'text!components/page/layout/layout.mustache',
                        'text!components/page/popLayout/popLayout.mustache',
                        'text!components/page/modal/modal.mustache',
                        'text!components/page/preModal/preModal.mustache',
                        'text!components/page/tip/tip.mustache',
                        'text!components/page/shareInfo/shareInfo.mustache',
                        'text!components/page/shareModal/shareModal.mustache',
                        'text!components/page/shareTemplate/shareTemplate.mustache',
                        'text!components/page/getShareTemplate/getShareTemplate.mustache',
                        'text!components/page/autocomplete/autocomplete.mustache',
                        'text!components/page/autoinfo/autoinfo.mustache',
                        'text!components/page/adaptLayout/adaptLayout.mustache',
                        'text!components/page/modules/yxhd/yxhd.mustache',
                        'components/page/modules/yxhd/yxhdVM',
                        'text!components/page/modules/yxft/yxft.mustache',
                        'components/page/modules/yxft/yxftVM',
                        'text!components/page/modules/yxBanner/yxBanner.mustache',
                        'components/page/modules/yxBanner/yxBannerVM',
                        'text!components/page/modules/yxBanner2/yxBanner2.mustache',
                        'components/page/modules/yxBanner2/yxBanner2VM',
                        'text!components/page/modules/yxTemp/yxTemp.mustache',
                        'components/page/modules/yxTemp/yxTempVM',
                        'text!components/page/modules/yxBackModule/yxBackModule.mustache',
                        'components/page/modules/yxBackModule/yxBackModuleVM',
                        'text!components/page/modules/yxBackModule2/yxBackModule2.mustache',
                        'components/page/modules/yxBackModule2/yxBackModule2VM',
                        'text!components/page/modules/yxRule/yxRule.mustache',
                        'components/page/modules/yxRule/yxRuleVM',
                        'text!components/page/modules/YX_N_M_9BBD/YX_N_M_9BBD.mustache',
                        'components/page/modules/YX_N_M_9BBD/YX_N_M_9BBDVM',
                        'text!components/page/modules/YX_N_M_2BE2/YX_N_M_2BE2.mustache',
                        'components/page/modules/YX_N_M_2BE2/YX_N_M_2BE2VM',
                        'text!components/page/modules/YX_N_M_7A5D/YX_N_M_7A5D.mustache',
                        'components/page/modules/YX_N_M_7A5D/YX_N_M_7A5DVM',
                        'text!components/page/modules/YX_N_M_A1C6/YX_N_M_A1C6.mustache',
                        'components/page/modules/YX_N_M_A1C6/YX_N_M_A1C6VM',
                        'text!components/page/modules/YX_N_M_881B/YX_N_M_881B.mustache',
                        'components/page/modules/YX_N_M_881B/YX_N_M_881BVM',
                        'text!components/page/modules/YX_S_M_73D7/YX_S_M_73D7.mustache',
                        'components/page/modules/YX_S_M_73D7/YX_S_M_73D7VM',
                        'text!components/page/modules/YX_S_M_0CE9/YX_S_M_0CE9.mustache',
                        'components/page/modules/YX_S_M_0CE9/YX_S_M_0CE9VM',
                        'text!components/page/modules/YX_S_M_19AB/YX_S_M_19AB.mustache',
                        'components/page/modules/YX_S_M_19AB/YX_S_M_19ABVM',
                        'text!components/page/modules/YX_S_M_AFA4/YX_S_M_AFA4.mustache',
                        'components/page/modules/YX_S_M_AFA4/YX_S_M_AFA4VM',
                        'text!components/page/modules/YX_N_M_46EB/YX_N_M_46EB.mustache',
                        'components/page/modules/YX_N_M_46EB/YX_N_M_46EBVM',
                        'text!components/page/modules/YX_N_M_C6E9/YX_N_M_C6E9.mustache',
                        'components/page/modules/YX_N_M_C6E9/YX_N_M_C6E9VM',
                        'text!components/page/modules/YX_N_M_DB08/YX_N_M_DB08.mustache',
                        'components/page/modules/YX_N_M_DB08/YX_N_M_DB08VM',
                        'text!components/page/modules/YX_S_M_6D5E/YX_S_M_6D5E.mustache',
                        'components/page/modules/YX_S_M_6D5E/YX_S_M_6D5EVM',
                        'text!components/page/modules/YX_S_M_97D8/YX_S_M_97D8.mustache',
                        'components/page/modules/YX_S_M_97D8/YX_S_M_97D8VM',
                        'text!components/page/modules/YX_S_M_0AA8/YX_S_M_0AA8.mustache',
                        'components/page/modules/YX_S_M_0AA8/YX_S_M_0AA8VM',
                        'text!components/page/modules/YX_N_M_92C9/YX_N_M_92C9.mustache',
                        'components/page/modules/YX_N_M_92C9/YX_N_M_92C9VM',
                        'text!components/page/modules/YX_N_M_ACBA/YX_N_M_ACBA.mustache',
                        'components/page/modules/YX_N_M_ACBA/YX_N_M_ACBAVM',
                        'text!components/page/modules/YX_N_M_EAB5/YX_N_M_EAB5.mustache',
                        'components/page/modules/YX_N_M_EAB5/YX_N_M_EAB5VM',
                        'text!components/page/modules/YX_S_M_3DA7/YX_S_M_3DA7.mustache',
                        'components/page/modules/YX_S_M_3DA7/YX_S_M_3DA7VM',
                        'text!components/page/modules/YX_N_M_FDC0/YX_N_M_FDC0.mustache',
                        'components/page/modules/YX_N_M_FDC0/YX_N_M_FDC0VM',
                        'text!components/page/modules/YX_S_M_51E1/YX_S_M_51E1.mustache',
                        'components/page/modules/YX_S_M_51E1/YX_S_M_51E1VM',
                        'text!components/page/modules/YX_S_M_EE29/YX_S_M_EE29.mustache',
                        'components/page/modules/YX_S_M_EE29/YX_S_M_EE29VM',
                        'text!components/page/modules/YX_S_M_4FDB/YX_S_M_4FDB.mustache',
                        'components/page/modules/YX_S_M_4FDB/YX_S_M_4FDBVM',
                        'text!components/page/modules/YX_S_M_07DA/YX_S_M_07DA.mustache',
                        'components/page/modules/YX_S_M_07DA/YX_S_M_07DAVM',
                        'text!components/page/modules/YX_S_M_BFA7/YX_S_M_BFA7.mustache',
                        'components/page/modules/YX_S_M_BFA7/YX_S_M_BFA7VM',
                        'text!components/page/modules/YX_S_M_A86B/YX_S_M_A86B.mustache',
                        'components/page/modules/YX_S_M_A86B/YX_S_M_A86BVM',
                        'text!components/page/modules/YX_S_M_20BC/YX_S_M_20BC.mustache',
                        'components/page/modules/YX_S_M_20BC/YX_S_M_20BCVM',
                        'text!components/page/modules/YX_N_M_C1C3/YX_N_M_C1C3.mustache',
                        'components/page/modules/YX_N_M_C1C3/YX_N_M_C1C3VM',
                        'text!components/page/modules/YX_N_M_B278/YX_N_M_B278.mustache',
                        'components/page/modules/YX_N_M_B278/YX_N_M_B278VM',
                        'text!components/page/modules/YX_N_M_B53B/YX_N_M_B53B.mustache',
                        'components/page/modules/YX_N_M_B53B/YX_N_M_B53BVM',
                        'text!components/page/modules/YX_N_M_94FE/YX_N_M_94FE.mustache',
                        'components/page/modules/YX_N_M_94FE/YX_N_M_94FEVM',
                        'text!components/page/modules/YX_N_M_77DE/YX_N_M_77DE.mustache',
                        'components/page/modules/YX_N_M_77DE/YX_N_M_77DEVM',
                        'text!components/page/modules/YX_N_M_BE90/YX_N_M_BE90.mustache',
                        'components/page/modules/YX_N_M_BE90/YX_N_M_BE90VM',
                        'text!components/page/modules/YX_S_M_CE2D/YX_S_M_CE2D.mustache',
                        'components/page/modules/YX_S_M_CE2D/YX_S_M_CE2DVM',
                        'text!components/page/modules/YX_S_M_EA3D/YX_S_M_EA3D.mustache',
                        'components/page/modules/YX_S_M_EA3D/YX_S_M_EA3DVM',
                        'text!components/page/modules/YX_N_M_D45D/YX_N_M_D45D.mustache',
                        'components/page/modules/YX_N_M_D45D/YX_N_M_D45DVM',
                        'text!components/page/modules/YX_N_M_64E0/YX_N_M_64E0.mustache',
                        'components/page/modules/YX_N_M_64E0/YX_N_M_64E0VM',
                        'text!components/page/modules/YX_N_M_A4F1/YX_N_M_A4F1.mustache',
                        'components/page/modules/YX_N_M_A4F1/YX_N_M_A4F1VM',
                        'text!components/page/modules/YX_N_M_CB4D/YX_N_M_CB4D.mustache',
                        'components/page/modules/YX_N_M_CB4D/YX_N_M_CB4DVM',
                        'text!components/page/modules/YX_N_M_4A12/YX_N_M_4A12.mustache',
                        'components/page/modules/YX_N_M_4A12/YX_N_M_4A12VM',
                        'text!components/page/modules/YX_S_M_D9D0/YX_S_M_D9D0.mustache',
                        'components/page/modules/YX_S_M_D9D0/YX_S_M_D9D0VM',
                        'text!components/page/modules/YX_S_M_BF3A/YX_S_M_BF3A.mustache',
                        'components/page/modules/YX_S_M_BF3A/YX_S_M_BF3AVM',
                        'text!components/page/modules/YX_S_M_35FD/YX_S_M_35FD.mustache',
                        'components/page/modules/YX_S_M_35FD/YX_S_M_35FDVM',
                        'text!components/page/modules/YX_N_M_BCD0/YX_N_M_BCD0.mustache',
                        'components/page/modules/YX_N_M_BCD0/YX_N_M_BCD0VM',
                        'text!components/page/modules/YX_N_M_C1C5/YX_N_M_C1C5.mustache',
                        'components/page/modules/YX_N_M_C1C5/YX_N_M_C1C5VM',
                        'text!components/page/modules/YX_N_M_C1C6/YX_N_M_C1C6.mustache',
                        'components/page/modules/YX_N_M_C1C6/YX_N_M_C1C6VM',
                        'text!components/page/modules/YX_N_M_C88F/YX_N_M_C88F.mustache',
                        'components/page/modules/YX_N_M_C88F/YX_N_M_C88FVM',
                        'text!components/page/modules/YX_S_M_866E/YX_S_M_866E.mustache',
                        'components/page/modules/YX_S_M_866E/YX_S_M_866EVM',
                        'text!components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5.mustache',
                        'components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5VM',
                        'text!components/page/modules/YX_S_M_77DE/YX_S_M_77DE.mustache',
                        'components/page/modules/YX_S_M_77DE/YX_S_M_77DEVM',
                        'text!components/page/modules/YX_S_M_48BB/YX_S_M_48BB.mustache',
                        'components/page/modules/YX_S_M_48BB/YX_S_M_48BBVM',
                        'text!components/page/modules/YX_S_M_CF55/YX_S_M_CF55.mustache',
                        'components/page/modules/YX_S_M_CF55/YX_S_M_CF55VM',
                        'text!components/page/modules/YX_N_M_1137/YX_N_M_1137.mustache',
                        'components/page/modules/YX_N_M_1137/YX_N_M_1137VM',
                        'text!components/page/modules/YX_N_M_OABF/YX_N_M_OABF.mustache',
                        'components/page/modules/YX_N_M_OABF/YX_N_M_OABFVM',
                        'text!components/page/modules/YX_N_M_9E50/YX_N_M_9E50.mustache',
                        'components/page/modules/YX_N_M_9E50/YX_N_M_9E50VM',
                        'text!components/page/modules/YX_N_M_9E51/YX_N_M_9E51.mustache',
                        'components/page/modules/YX_N_M_9E51/YX_N_M_9E51VM',
                        'text!components/page/modules/YX_N_M_9E52/YX_N_M_9E52.mustache',
                        'components/page/modules/YX_N_M_9E52/YX_N_M_9E52VM',
                        'text!components/page/modules/YX_N_M_9E53/YX_N_M_9E53.mustache',
                        'components/page/modules/YX_N_M_9E53/YX_N_M_9E53VM',
                        'text!components/page/modules/YX_N_M_9E54/YX_N_M_9E54.mustache',
                        'components/page/modules/YX_N_M_9E54/YX_N_M_9E54VM',
                        'text!components/page/modules/YX_N_M_9E55/YX_N_M_9E55.mustache',
                        'components/page/modules/YX_N_M_9E55/YX_N_M_9E55VM',
                        'text!components/page/modules/YX_N_M_9E47/YX_N_M_9E47.mustache',
                        'components/page/modules/YX_N_M_9E47/YX_N_M_9E47VM',
                        'text!components/page/modules/YX_N_M_9E48/YX_N_M_9E48.mustache',
                        'components/page/modules/YX_N_M_9E48/YX_N_M_9E48VM',
                        'text!components/page/modules/YX_N_M_9E49/YX_N_M_9E49.mustache',
                        'components/page/modules/YX_N_M_9E49/YX_N_M_9E49VM',
                        'text!components/page/modules/YX_N_M_5A56/YX_N_M_5A56.mustache',
                        'components/page/modules/YX_N_M_5A56/YX_N_M_5A56VM',
                        'text!components/page/modules/YX_S_M_3311/YX_S_M_3311.mustache',
                        'components/page/modules/YX_S_M_3311/YX_S_M_3311VM',
                        'text!components/page/modules/YX_S_M_1D5D/YX_S_M_1D5D.mustache',
                        'components/page/modules/YX_S_M_1D5D/YX_S_M_1D5DVM',
                        'text!components/page/modules/YX_S_M_22EE/YX_S_M_22EE.mustache',
                        'components/page/modules/YX_S_M_22EE/YX_S_M_22EEVM',
                        'text!components/page/modules/YX_N_M_417A/YX_N_M_417A.mustache',
                        'components/page/modules/YX_N_M_417A/YX_N_M_417AVM',
                        'text!components/page/modules/YX_N_M_5589/YX_N_M_5589.mustache',
                        'components/page/modules/YX_N_M_5589/YX_N_M_5589VM',
                        'text!components/page/modules/YX_N_M_2097/YX_N_M_2097.mustache',
                        'components/page/modules/YX_N_M_2097/YX_N_M_2097VM',
                        'text!components/page/modules/YX_N_M_EB26/YX_N_M_EB26.mustache',
                        'components/page/modules/YX_N_M_EB26/YX_N_M_EB26VM',
                        'text!components/page/modules/YX_N_M_8178/YX_N_M_8178.mustache',
                        'components/page/modules/YX_N_M_8178/YX_N_M_8178VM'
                    ],
                    'out': 'scaffold/assets/js/build.<%= grunt.template.today("yyyymmddHHMM") %>.min.js'
                }
            }
        },
        uglify: {
            options: {
                sourcemap: true,
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            uglifyLib: {
                files: {
                    'scaffold/assets/libs/libs.min.js': [
                        'src/src/src/assets/libs/jquery.js',
                        'src/src/assets/libs/underscore.js',
                        'src/assets/libs/mustache.js',
                        'src/assets/libs/vue.js',
                        'src/assets/libs/text.js',
                        'src/assets/libs/uuid.js',
                        'src/assets/libs/FileSaver.js',
                        'src/assets/libs/Bold.js',
                        'src/assets/libs/bootstrap-colorpicker.js',
                        'src/assets/libs/jquery.collapse.js',
                        'src/assets/libs/pnotify.js',
                        'src/assets/libs/notify.js',
                        'src/assets/libs/sortable',
                        'src/assets/libs/laydate.js'
                    ],
                    'scaffold/assets/libs/require.min.js': ['src/assets/libs/require.js'],
                    'scaffold/assets/app/page.<%= grunt.template.today("yyyymmddHHMM") %>.min.js': ['src/assets/app/page.js'],
                    'scaffold/assets/app/config.min.js': ['src/assets/app/config.js'],
                    'scaffold/assets/app/iframe.<%= grunt.template.today("yyyymmddHHMM") %>.min.js': [
                        'src/assets/libs/jquery.js',
                        // 'src/assets/libs/jquery.slimscroll.js',
                        'src/assets/libs/iscroll.js'
                    ]
                }
            }
            /*uglifyVM: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/components/page/modules/yxhd',
                    src: '*.js',
                    dest: 'scaffold/assets/components/page/modules/yxhd',
                    ext: '.js'
                }]
            }*/
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/imgs/',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'scaffold/assets/imgs/'
                }]
            }
        },
        replace: {
            replaceSource: {
                src: ['scaffold/page.html'],
                dest: ['scaffold/'],
                replacements: [{
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/page.css\"\>/g,
                    to: '<link rel="stylesheet" type="text/css" href="assets/css/main.<%= grunt.template.today("yyyymmddHHMM") %>.min.css">'
                }, {
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/reset.css\"\>/g,
                    to: ''
                }, {
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/colorpicker.css\"\>/g,
                    to: ''
                }, {
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/font-awesome.css\"\>/g,
                    to: ''
                }, {
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/pnotify.css\"\>/g,
                    to: ''
                }, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/libs\/require.js"\>\<\/script\>/g,
                    to: ''
                }, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/libs\/jquery.js"\>\<\/script\>/g,
                    to: ''
                }, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/app\/config.js"\>\<\/script\>/g,
                    to: '<script type="text/javascript" src="assets/js/build.<%= grunt.template.today("yyyymmddHHMM") %>.min.js"></script>'
                }, {
                    from: /\<script type=\"text\/javascript\"\>require\(\[\'assets\/app\/page.js\'\]\)\<\/script\>/g,
                    to: '<script type="text/javascript">require(["assets/app/page.<%= grunt.template.today("yyyymmddHHMM") %>.min.js"])</script>'
                }]
            },
            replaceIframe: {
                src: ['scaffold/iframe.html'],
                dest: ['scaffold/'],
                replacements: [{
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/reset.css\"\>/g,
                    to: '<link rel="stylesheet" type="text/css" href="assets/css/iframe.<%= grunt.template.today("yyyymmddHHMM") %>.min.css">'
                }, {
                    from: /\<link rel\=\"stylesheet\" type\=\"text\/css\" href\=\"assets\/css\/adapt.css\"\>/g,
                    to: ''
                }/*, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/libs\/jquery.slimscroll.js"\>\<\/script\>/g,
                    to: ''
                }*/, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/libs\/iscroll.js"\>\<\/script\>/g,
                    to: ''
                }, {
                    from: /\<script type\=\"text\/javascript\" src\=\"assets\/libs\/jquery.js"\>\<\/script\>/g,
                    to: '<script type="text/javascript" src="assets/app/iframe.<%= grunt.template.today("yyyymmddHHMM") %>.min.js"></script>'
                }]
            }
        },
        //监控任务
        watch: {
            less: {
                files: ['src/assets/less/*.less'],
                tasks: ['less']
            },
            sass: {
                files: ['src/assets/components/page/modules/*/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('build', ['requirejs', 'less', 'htmlmin', 'cssmin', 'copy', 'uglify', 'replace', 'imagemin']);
    grunt.registerTask('default', ['less', 'cssmin:combineDev', 'sass', 'watch']);
};
