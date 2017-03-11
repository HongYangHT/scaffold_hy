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
    'text!components/page/modules/YX_N_M_9E47/YX_N_M_9E47.mustache',
    'common/mixins/pageMixins',
    'common/helper/tpl2vue',
    'common/helper/data2vue',
    'common/helper/tools',
    'common/directive/setAttr'
], function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools) {

    var _default = {
        contentInfo: {
            leftUrl:'https://you.163.com/item/detail?id=1092023&from=web_mailo_old_old_2',
            rightUrl:'https://you.163.com/item/detail?id=1092021&from=web_mailo_old_old_2',
            imgLeft:'https://mimg.127.net/hz/uploader/20161207/14811076570300718.jpg',
            imgRight:'https://mimg.127.net/hz/uploader/20161207/14811076570390719.jpg'

        }
    };

    var YX_N_M_9E47 = Vue.extend({
        name: 'YX_N_M_9E47',
        components: {},
        template: new Tpl2Vue(tpl, _default).render(),
        mixins: [pageMixins],
        data: function() {
            return new Data2Vue({
                data: _default
            }).getResult();
        },
        watch: {
            'contentInfo.leftUrl.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'leftUrl': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.rightUrl.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'rightUrl': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.imgLeft.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'imgLeft': {
                                'value': old
                            }
                        }
                    };
                    this.$dispatch('changeDataDefault', this.id, data);
                }
            },
            'contentInfo.imgRight.value': {
                'handler': function(value, old) {
                    var data = {
                        'contentInfo': {
                            'imgRight': {
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
    return YX_N_M_9E47;
});