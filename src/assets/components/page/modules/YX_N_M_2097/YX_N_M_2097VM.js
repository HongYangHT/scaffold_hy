define([
    'Vue',
    'mustache',
    'jquery',
    'text!components/page/modules/YX_N_M_2097/YX_N_M_2097.mustache',
    'common/mixins/pageMixins',
    'common/helper/tpl2vue',
    'common/helper/data2vue',
    'common/helper/tools',
    'common/directive/setAttr'
], function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools) {
    var _default = {
        contentInfo: {
            goodsId: '',
            title: '云音乐用户特惠商品'
        },
        temp: [{
            "id": "1042007",
            "title": "日式多功能颈枕 针织款",
            "simpleDesc": "细腻天竺棉，亲肤舒适",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/b0ca92e8bc5a1b17bb90330fb353267c.png?imageView&thumbnail=330x330&quality=95",
            "primarySkuId": "1040012",
            "retailPrice": "1200",
            "unitPrice": "1400",
            "offPrice": "599",
            "maker": "",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/af36f4c8bc344c9f1f363cacb63cde5b.jpg?imageView&thumbnail=330x330&quality=95",
            "oldUserFlag": '1',
            "btnText": "限时免单券",
            "btnLink": "http://you.163.com/",
            "couponPrice": "500"

        }, {
            "id": "1070000",
            "title": "双宫茧桑蚕丝被  空调被",
            "simpleDesc": "天然桑蚕丝，吸湿透气柔软",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/347facad1b8ce31baec16a61c19accbb.png?imageView&thumbnail=330x330&quality=95",
            "primarySkuId": "1074000",
            "offPrice": "79",
            "retailPrice": "90",
            "unitPrice": "90",
            "maker": "罗莱制造商",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/d83cbd9ec177276ba2582ee393eff3db.jpg?imageView&thumbnail=330x330&quality=95",
            "oldUserFlag": '',
            "btnText": "限时免单券",
            "btnLink": "http://you.163.com/",
            "couponPrice": "50"
        }, {
            "id": "1076019",
            "title": "全棉针织条纹四件套",
            "simpleDesc": "裸睡必备",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/c8ff97623df8a9beece54afe501c3ff6.png?imageView&thumbnail=330x330&quality=95",
            "primarySkuId": "1080041",
            "offPrice": "69",
            "retailPrice": "69",
            "unitPrice": "69",
            "maker": "MUJI制造商",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/81b7751427969b2561f65c6992636a2b.jpg?imageView&thumbnail=330x330&quality=95",
            "oldUserFlag": '',
            "btnText": "限时免单券",
            "btnLink": "http://you.163.com/",
            "couponPrice": "33"
        }]
    };

    var YX_N_M_2097 = Vue.extend({
        name: 'YX_N_M_2097',
        components: {},
        template: new Tpl2Vue(tpl, _default).render(),
        mixins: [pageMixins],
        data: function() {
            return new Data2Vue({
                data: _default
            }).getResult();
        },
        watch: {
            'contentInfo.goodsId.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'goodsId': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        Tools.getAjaxData('https://spread.mail.163.com/mail/goods/getGroup', {
                            id: value
                        }, function(res) {
                            var _goods = res.content.goodsList;
                            var _temp = $.map(_goods, function(v, k) {
                                var extend = v.extend;
                                return $.extend({}, {
                                    id: v.id,
                                    title: v.title,
                                    simpleDesc: v.simpleDesc,
                                    primaryPicUrl: v.primaryPicUrl + '?imageView&thumbnail=330x330&quality=95',
                                    primarySkuId: v.primarySkuId,
                                    retailPrice: v.retailPrice,
                                    unitPrice: parseFloat(v.unitPrice) == parseFloat(v.offPrice) ? '' : v.unitPrice,
                                    offPrice: v.offPrice,
                                    sellVolume: v.sellVolume,
                                    scenePicUrl: v.scenePicUrl + '?imageView&thumbnail=330x330&quality=95',
                                    oldUserFlag: (v.extend.oldUserFlag == '1' ? '1' : ''),
                                    btnText: (v.extend.btnText ? v.extend.btnText : '限时免单券'),
                                    btnLink: v.extend.btnLink,
                                    couponPrice: (v.extend.couponPrice ? v.extend.couponPrice : v.offPrice)
                                }, extend);
                            });
                            var tempData = $.extend(false, {}, _that._data, new Data2Vue({
                                data: {
                                    temp: _temp
                                },
                                id: _that.id
                            }).getResult());

                            _that.$data = tempData;
                            _that.$dispatch('changeDataDefault', _that.id, tempData, true);
                        });
                    }
                }
            },
            'contentInfo.needScenePicUrl.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'needScenePicUrl': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.title.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'title': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
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

    return YX_N_M_2097;
});