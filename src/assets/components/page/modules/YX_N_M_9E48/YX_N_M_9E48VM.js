/**
 * @Module YX_N_M_9E52
 * @From 严选定期直邮
 * @author cqr
 * @description 直邮模块
 */
define([
    'Vue',
    'mustache',
    'jquery',
    'text!components/page/modules/YX_N_M_9E48/YX_N_M_9E48.mustache',
    'common/mixins/pageMixins',
    'common/helper/tpl2vue',
    'common/helper/data2vue',
    'common/helper/tools',
    'common/directive/setAttr'
], function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools) {

    var _default = {
        contentInfo: {
            title:'本期特别推荐：',
            label:'【严选情人节，就是喜欢你】',
            desc:'严选定制限量“黑凤梨”礼盒，陪你一起表达这份美好的心情。另有全场满就送3件浪漫礼物，还有520元情人节礼券可叠加使用。',
            tailImage:'https://nos.netease.com/masteruser1/14864676788860513.jpg',
        }
    };

    var YX_N_M_9E48 = Vue.extend({
        name: 'YX_N_M_9E48',
        components: {},
        template: new Tpl2Vue(tpl, _default).render(),
        mixins: [pageMixins],
        data: function() {
            return new Data2Vue({
                data: _default
            }).getResult();
        },
        watch: {
            'contentInfo.title.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'title': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.label.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'label': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.desc.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'desc': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.tailImage.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'tailImage': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            }
        },
        computed: {
            oparate: function() {
                var _oparate = '';
                _oparate = this.id;
                return _oparate;
            }
        },
        methods: {},
        events: {}
    });
    return YX_N_M_9E48;
});