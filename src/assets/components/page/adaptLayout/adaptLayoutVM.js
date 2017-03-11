define([
    'Vue',
    'text!components/page/adaptLayout/adaptLayout.mustache',
    'common/mixins/pageMixins',
    'common/helper/load',
    'uuid'
], function(Vue, tpl, pageMixins, Load) {
    var _default = {
        selectAdapt: 'iPhone6',
        adapt: [{
            type: 'iPhone4',
            name: 'iPhone 4 (320x480)',
            value: {
                "width": 320,
                "height": 480
            }
        }, {
            type: 'iPhone5',
            name: 'iPhone 5 (320x568)',
            value: {
                "width": 320,
                "height": 568
            }
        }, {
            type: 'iPhone6',
            name: 'iPhone 6 (375x667)',
            value: {
                "width": 375,
                "height": 667
            }
        }, {
            type: 'iPhone6Plus',
            name: 'iPhone 6 Plus (414x736)',
            value: {
                "width": 414,
                "height": 736
            }
        }, {
            type: 'iPad',
            name: 'iPad (768x1024)',
            value: {
                "width": 768,
                "height": 1024
            }
        }, {
            type: 'iPadPro',
            name: 'iPad Pro (1024x1366)',
            value: {
                "width": 1024,
                "height": 1366
            }
        }],
        showFlag: true,
        picked: 1,
        showAdaptFlag: false,
        content: [],
        loadStyle: [],
        styleLib: [],
        needStyle: []
    };
    var load = new Load();
    var AdaptLayout = Vue.extend({
        name: 'adaptLayout',
        template: tpl,
        data: function() {
            return _default;
        },
        mixins: [pageMixins],
        computed: {
            'adaptItem': function() {
                var that = this,
                    adaptItem = '';
                $.each(this.adapt, function(i, n) {
                    if (n.type == that.selectAdapt) {
                        adaptItem = n.value;
                    }
                });
                return adaptItem;
            }
        },
        methods: {

        },
        events: {

            notifyAppendComponent: function(info) {
                var _that = this;
                /* 判断object 是不是空的 */
                function isEmpty(obj) {
                    for (var i in obj) {
                        return false;
                    }
                    return true;
                }
                /**
                 * @desc 判断元素是不是在数组中
                 * @param arr 只能是数组而不能是数组对象
                 * @param val 需要判断的元素
                 */
                function distinct(arr, val) {
                    if (!arr || !arr.length) return true;
                    var _json = {};
                    for (var i = 0, len = arr.length; i < len; i++) {
                        var _val = arr[i];
                        if (!_json[_val]) {
                            _json[_val] = 1;
                        }
                    }

                    return _json[val] ? false : true;
                }

                switch (info.insertInfo.type) {
                    case 'yxhd':
                        require(['components/page/modules/yxhd/yxhdVM'], function(YxhdVM) {
                            vm = new YxhdVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'yxft':
                        require(['components/page/modules/yxft/yxftVM'], function(YxftVM) {
                            vm = new YxftVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_77DE':
                        require(['components/page/modules/YX_S_M_77DE/YX_S_M_77DEVM'], function(YX_S_M_77DEVM) {
                            vm = new YX_S_M_77DEVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_48BB':
                        require(['components/page/modules/YX_S_M_48BB/YX_S_M_48BBVM'], function(YX_S_M_48BBVM) {
                            vm = new YX_S_M_48BBVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_F5F5':
                        require(['components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5VM'], function(YX_S_M_F5F5VM) {
                            vm = new YX_S_M_F5F5VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_35FD':
                        require(['components/page/modules/YX_S_M_35FD/YX_S_M_35FDVM'], function(YX_S_M_35FDVM) {
                            vm = new YX_S_M_35FDVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_BF3A':
                        require(['components/page/modules/YX_S_M_BF3A/YX_S_M_BF3AVM'], function(YX_S_M_BF3AVM) {
                            vm = new YX_S_M_BF3AVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_D9D0':
                        require(['components/page/modules/YX_S_M_D9D0/YX_S_M_D9D0VM'], function(YX_S_M_D9D0VM) {
                            vm = new YX_S_M_D9D0VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_EA3D':
                        require(['components/page/modules/YX_S_M_EA3D/YX_S_M_EA3DVM'], function(YX_S_M_EA3DVM) {
                            vm = new YX_S_M_EA3DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_CE2D':
                        require(['components/page/modules/YX_S_M_CE2D/YX_S_M_CE2DVM'], function(YX_S_M_CE2DVM) {
                            vm = new YX_S_M_CE2DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_A86B':
                        require(['components/page/modules/YX_S_M_A86B/YX_S_M_A86BVM'], function(YX_S_M_A86BVM) {
                            vm = new YX_S_M_A86BVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_EE29':
                        require(['components/page/modules/YX_S_M_EE29/YX_S_M_EE29VM'], function(YX_S_M_EE29VM) {
                            vm = new YX_S_M_EE29VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_4FDB':
                        require(['components/page/modules/YX_S_M_4FDB/YX_S_M_4FDBVM'], function(YX_S_M_4FDBVM) {
                            vm = new YX_S_M_4FDBVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_07DA':
                        require(['components/page/modules/YX_S_M_07DA/YX_S_M_07DAVM'], function(YX_S_M_07DAVM) {
                            vm = new YX_S_M_07DAVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_BFA7':
                        require(['components/page/modules/YX_S_M_BFA7/YX_S_M_BFA7VM'], function(YX_S_M_BFA7VM) {
                            vm = new YX_S_M_BFA7VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_51E1':
                        require(['components/page/modules/YX_S_M_51E1/YX_S_M_51E1VM'], function(YX_S_M_51E1VM) {
                            vm = new YX_S_M_51E1VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_3DA7':
                        require(['components/page/modules/YX_S_M_3DA7/YX_S_M_3DA7VM'], function(YX_S_M_3DA7VM) {
                            vm = new YX_S_M_3DA7VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_97D8':
                        require(['components/page/modules/YX_S_M_97D8/YX_S_M_97D8VM'], function(YX_S_M_97D8VM) {
                            vm = new YX_S_M_97D8VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_0AA8':
                        require(['components/page/modules/YX_S_M_0AA8/YX_S_M_0AA8VM'], function(YX_S_M_0AA8VM) {
                            vm = new YX_S_M_0AA8VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_19AB':
                        require(['components/page/modules/YX_S_M_19AB/YX_S_M_19ABVM'], function(YX_S_M_19ABVM) {
                            vm = new YX_S_M_19ABVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_73D7':
                        require(['components/page/modules/YX_S_M_73D7/YX_S_M_73D7VM'], function(YX_S_M_73D7VM) {
                            vm = new YX_S_M_73D7VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_0CE9':
                        require(['components/page/modules/YX_S_M_0CE9/YX_S_M_0CE9VM'], function(YX_S_M_0CE9VM) {
                            vm = new YX_S_M_0CE9VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_5A56':
                        require(['components/page/modules/YX_N_M_5A56/YX_N_M_5A56VM'], function(YX_N_M_5A56VM) {
                            vm = new YX_N_M_5A56VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_3311':
                        require(['components/page/modules/YX_S_M_3311/YX_S_M_3311VM'], function(YX_S_M_3311VM) {
                            vm = new YX_S_M_3311VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_1D5D':
                        require(['components/page/modules/YX_S_M_1D5D/YX_S_M_1D5DVM'], function(YX_S_M_1D5DVM) {
                            vm = new YX_S_M_1D5DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_417A':
                        require(['components/page/modules/YX_N_M_417A/YX_N_M_417AVM'], function(YX_N_M_417AVM) {
                            vm = new YX_N_M_417AVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_CF55':
                        require(['components/page/modules/YX_S_M_CF55/YX_S_M_CF55VM'], function(YX_S_M_CF55VM) {
                            vm = new YX_S_M_CF55VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_1137':
                        require(['components/page/modules/YX_N_M_1137/YX_N_M_1137VM'], function(YX_N_M_1137VM) {
                            vm = new YX_N_M_1137VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_OABF':
                        require(['components/page/modules/YX_N_M_OABF/YX_N_M_OABFVM'], function(YX_N_M_OABFVM) {
                            vm = new YX_N_M_OABFVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_C88F':
                        require(['components/page/modules/YX_N_M_C88F/YX_N_M_C88FVM'], function(YX_N_M_C88FVM) {
                            vm = new YX_N_M_C88FVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_866E':
                        require(['components/page/modules/YX_S_M_866E/YX_S_M_866EVM'], function(YX_S_M_866EVM) {
                            vm = new YX_S_M_866EVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_C1C5':
                        require(['components/page/modules/YX_N_M_C1C5/YX_N_M_C1C5VM'], function(YX_N_M_C1C5VM) {
                            vm = new YX_N_M_C1C5VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_C1C6':
                        require(['components/page/modules/YX_N_M_C1C6/YX_N_M_C1C6VM'], function(YX_N_M_C1C6VM) {
                            vm = new YX_N_M_C1C6VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_BCD0':
                        require(['components/page/modules/YX_N_M_BCD0/YX_N_M_BCD0VM'], function(YX_N_M_BCD0VM) {
                            vm = new YX_N_M_BCD0VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_CB4D':
                        require(['components/page/modules/YX_N_M_CB4D/YX_N_M_CB4DVM'], function(YX_N_M_CB4DVM) {
                            vm = new YX_N_M_CB4DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_A4F1':
                        require(['components/page/modules/YX_N_M_A4F1/YX_N_M_A4F1VM'], function(YX_N_M_A4F1VM) {
                            vm = new YX_N_M_A4F1VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_64E0':
                        require(['components/page/modules/YX_N_M_64E0/YX_N_M_64E0VM'], function(YX_N_M_64E0VM) {
                            vm = new YX_N_M_64E0VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_D45D':
                        require(['components/page/modules/YX_N_M_D45D/YX_N_M_D45DVM'], function(YX_N_M_D45DVM) {
                            vm = new YX_N_M_D45DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_BE90':
                        require(['components/page/modules/YX_N_M_BE90/YX_N_M_BE90VM'], function(YX_N_M_BE90VM) {
                            vm = new YX_N_M_BE90VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_77DE':
                        require(['components/page/modules/YX_N_M_77DE/YX_N_M_77DEVM'], function(YX_N_M_77DEVM) {
                            vm = new YX_N_M_77DEVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_94FE':
                        require(['components/page/modules/YX_N_M_94FE/YX_N_M_94FEVM'], function(YX_N_M_94FEVM) {
                            vm = new YX_N_M_94FEVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_B53B':
                        require(['components/page/modules/YX_N_M_B53B/YX_N_M_B53BVM'], function(YX_N_M_B53BVM) {
                            vm = new YX_N_M_B53BVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_B278':
                        require(['components/page/modules/YX_N_M_B278/YX_N_M_B278VM'], function(YX_N_M_B278VM) {
                            vm = new YX_N_M_B278VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_C1C3':
                        require(['components/page/modules/YX_N_M_C1C3/YX_N_M_C1C3VM'], function(YX_N_M_C1C3VM) {
                            vm = new YX_N_M_C1C3VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_FDC0':
                        require(['components/page/modules/YX_N_M_FDC0/YX_N_M_FDC0VM'], function(YX_N_M_FDC0VM) {
                            vm = new YX_N_M_FDC0VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_EAB5':
                        require(['components/page/modules/YX_N_M_EAB5/YX_N_M_EAB5VM'], function(YX_N_M_EAB5VM) {
                            vm = new YX_N_M_EAB5VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_ACBA':
                        require(['components/page/modules/YX_N_M_ACBA/YX_N_M_ACBAVM'], function(YX_N_M_ACBAVM) {
                            vm = new YX_N_M_ACBAVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_92C9':
                        require(['components/page/modules/YX_N_M_92C9/YX_N_M_92C9VM'], function(YX_N_M_92C9VM) {
                            vm = new YX_N_M_92C9VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_46EB':
                        require(['components/page/modules/YX_N_M_46EB/YX_N_M_46EBVM'], function(YX_N_M_46EBVM) {
                            vm = new YX_N_M_46EBVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_9BBD':
                        require(['components/page/modules/YX_N_M_9BBD/YX_N_M_9BBDVM'], function(YX_N_M_9BBDVM) {
                            vm = new YX_N_M_9BBDVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_2BE2':
                        require(['components/page/modules/YX_N_M_2BE2/YX_N_M_2BE2VM'], function(YX_N_M_2BE2VM) {
                            vm = new YX_N_M_2BE2VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_7A5D':
                        require(['components/page/modules/YX_N_M_7A5D/YX_N_M_7A5DVM'], function(YX_N_M_7A5DVM) {
                            vm = new YX_N_M_7A5DVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_A1C6':
                        require(['components/page/modules/YX_N_M_A1C6/YX_N_M_A1C6VM'], function(YX_N_M_A1C6VM) {
                            vm = new YX_N_M_A1C6VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_881B':
                        require(['components/page/modules/YX_N_M_881B/YX_N_M_881BVM'], function(YX_N_M_881BVM) {
                            vm = new YX_N_M_881BVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_C6E9':
                        require(['components/page/modules/YX_N_M_C6E9/YX_N_M_C6E9VM'], function(YX_N_M_C6E9VM) {
                            vm = new YX_N_M_C6E9VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_DB08':
                        require(['components/page/modules/YX_N_M_DB08/YX_N_M_DB08VM'], function(YX_N_M_DB08VM) {
                            vm = new YX_N_M_DB08VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_S_M_22EE':
                        require(['components/page/modules/YX_S_M_22EE/YX_S_M_22EEVM'], function(YX_S_M_22EEVM) {
                            vm = new YX_S_M_22EEVM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;
                    case 'YX_N_M_5589':
                        require(['components/page/modules/YX_N_M_5589/YX_N_M_5589VM'], function(YX_N_M_5589VM) {
                            vm = new YX_N_M_5589VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;    
                    case 'YX_N_M_2097':
                        require(['components/page/modules/YX_N_M_2097/YX_N_M_2097VM'], function(YX_N_M_2097VM) {
                            vm = new YX_N_M_2097VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break; 
                    case 'YX_N_M_8178':
                        require(['components/page/modules/YX_N_M_8178/YX_N_M_8178VM'], function(YX_N_M_8178VM) {
                            vm = new YX_N_M_8178VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break; 
                    case 'YX_N_M_EB26':
                        require(['components/page/modules/YX_N_M_EB26/YX_N_M_EB26VM'], function(YX_N_M_EB26VM) {
                            vm = new YX_N_M_EB26VM({
                                data: $.extend({}, info.data, {
                                    adapt: true
                                })
                            });
                            _id = info.data.id;
                            _that.content['d_' + _id] = info.data;
                            if (info.libC && info.libC.length) {
                                $.each(info.libC, function(i, n) {
                                    if (distinct(_that.styleLib, n)) {
                                        _that.styleLib.push(n);
                                        load.loadStyle(n, true);
                                    }
                                });
                            }
                            if (distinct(_that.needStyle, info.loadCss)) {
                                _that.needStyle.push(info.loadCss);
                                load.loadStyle(info.loadCss, true);
                            }
                            vm.$mount().$appendTo($(_that.$el).find('#adaptPreviewFrame').contents().find('#adaptPreview')[0]);
                        });
                        break;     
                }
            }
        }
    });
    return AdaptLayout;
});