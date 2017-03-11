define([
    'Vue',
    'mustache',
    'jquery',
    'text!components/page/modules/YX_S_M_CF55/YX_S_M_CF55.mustache',
    'common/mixins/pageMixins',
    'common/helper/tpl2vue',
    'common/helper/data2vue',
    'common/helper/tools',
    'common/directive/setAttr'
], function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools) {
    var _default = {
        contentInfo: {
            goodsId: '',
            needScenePicUrl: 0,
            itemsOnPage: 45,
            topic: '38promote',
            qrcodeLink:'',
            qrcodeBg:'',
            maxPrice:4000,
            makerNumber: 6,
            hotMakerImg1: 'https://nos.netease.com/yanxuan/14875707807050258.png',
            hotMakerImg2: 'https://nos.netease.com/yanxuan/14875707808470259.png',
            hotMakerImg3: 'https://nos.netease.com/yanxuan/14875707810970260.png',
            hotMakerImg4: 'https://nos.netease.com/yanxuan/14875707811980261.png',
            hotMakerImg5: 'https://nos.netease.com/yanxuan/14875707811980261.png',
            hotMakerImg6: 'https://nos.netease.com/yanxuan/14875707811980261.png'
        },
        temp: [{
            "id": "1035001",
            "title": "牛皮拼接双肩背包",
            "salesRank": 53,
            "amountRank": 53,
            "simpleDesc": "防水尼龙与牛皮的优雅结合",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/b37dff071f6f6b7b5e5ca2a30dc27b40.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1034001",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "369.0",
            "unitPrice": "659",
            "offPrice": "459",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "范思哲制造商",
            "underShelf": false,
            "extend": {
                "category": "箱包",
                "maker": "范思哲制造商"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1034001,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 369,
                "counterPrice": 459,
                "name": "颜色:黑色",
                "imgUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }, {
            "id": "1061001",
            "title": "彩棉婴儿床品14件套",
            "salesRank": 91,
            "amountRank": 91,
            "simpleDesc": "天然彩棉，呵护宝贝的稚嫩肌肤",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/705445b2b906a44f10fa685cfd0205f6.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/333d3217e9afde8837c46c19af30aa18.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1062006",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "669.0",
            "unitPrice": "669",
            "offPrice": "669",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "Ralph Lauren制造商",
            "underShelf": false,
            "extend": {
                "category": "母婴",
                "maker": "Ralph Lauren制造商"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1062006,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 669,
                "counterPrice": 0,
                "name": "尺寸:105*60cm",
                "imgUrl": "https://yanxuan.nosdn.127.net/705445b2b906a44f10fa685cfd0205f6.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }, {
            "id": "1062015",
            "title": "羊绒原色拼接围巾",
            "salesRank": 194,
            "amountRank": 194,
            "simpleDesc": "百分百羊绒，天然无染色",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/d8635ea1806c531063b47570e6f88b91.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/787b0e6bbc5394cb74507661da8e5ec2.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1063022",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "499.0",
            "unitPrice": "499",
            "offPrice": "499",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "",
            "underShelf": false,
            "extend": {
                "category": "穿搭"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1063022,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 499,
                "counterPrice": 0,
                "name": "颜色:深棕",
                "imgUrl": "https://yanxuan.nosdn.127.net/23fc193d1c95c903aec1ef8a27b5d498.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }],
        allGoods:[{
            "id": "1035001",
            "title": "牛皮拼接双肩背包",
            "salesRank": 53,
            "amountRank": 53,
            "simpleDesc": "防水尼龙与牛皮的优雅结合",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/b37dff071f6f6b7b5e5ca2a30dc27b40.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1034001",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "369.0",
            "unitPrice": "659",
            "offPrice": "459",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "范思哲制造商",
            "underShelf": false,
            "extend": {
                "category": "箱包",
                "maker": "范思哲制造商"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1034001,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 369,
                "counterPrice": 459,
                "name": "颜色:黑色",
                "imgUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }, {
            "id": "1061001",
            "title": "彩棉婴儿床品14件套",
            "salesRank": 91,
            "amountRank": 91,
            "simpleDesc": "天然彩棉，呵护宝贝的稚嫩肌肤",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/705445b2b906a44f10fa685cfd0205f6.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/333d3217e9afde8837c46c19af30aa18.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1062006",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "669.0",
            "unitPrice": "669",
            "offPrice": "669",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "Ralph Lauren制造商",
            "underShelf": false,
            "extend": {
                "category": "母婴",
                "maker": "Ralph Lauren制造商"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1062006,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 669,
                "counterPrice": 0,
                "name": "尺寸:105*60cm",
                "imgUrl": "https://yanxuan.nosdn.127.net/705445b2b906a44f10fa685cfd0205f6.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }, {
            "id": "1062015",
            "title": "羊绒原色拼接围巾",
            "salesRank": 194,
            "amountRank": 194,
            "simpleDesc": "百分百羊绒，天然无染色",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/d8635ea1806c531063b47570e6f88b91.png?imageView&quality=95&thumbnail=330x330",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/787b0e6bbc5394cb74507661da8e5ec2.jpg?imageView&quality=95&thumbnail=330x330",
            "primarySkuId": "1063022",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "499.0",
            "unitPrice": "499",
            "offPrice": "499",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "",
            "underShelf": false,
            "extend": {
                "category": "穿搭"
            },
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1063022,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 499,
                "counterPrice": 0,
                "name": "颜色:深棕",
                "imgUrl": "https://yanxuan.nosdn.127.net/23fc193d1c95c903aec1ef8a27b5d498.png?imageView&quality=95&thumbnail=330x330",
                "isPreSell": false,
                "sellVolume": 1
            }
        }],
        categoryArr: [],
        makerArr:[],
        makerImgArr:[]
    };

    var YX_S_M_CF55 = Vue.extend({
        name: 'YX_S_M_CF55',
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

                             var canchu=[1005007,1013005,1008012,1005008,1007000,1008013,1008011,1023000,1011002],
                                        clothes=[1020009,1020010,1015001],
                                        chuangpin=[1008008,1008009,1011003,1010003,1008002],
                                        ruanshi=[1013004,1015000,1008016,1011004],
                                        meizhuang=[1013002,1020001,1013003,1009000],
                                        mother=[1020003,1011001,1020005,1020006,1020004,1020007],
                                        neiyi=[1010002,1010001,1008004,1013006],
                                        peishi=[1008007,1020008],
                                        shenghuo=[1008017,1020000,1012002,1008006,1008001,1020002,1008005,1008010,1005009],
                                        food=[1005011,1008015,1005010,1005013,1005012,1027001,1027000],
                                        mix=[1012003,1028001,1017000],
                                        shoe=[1008003,1013000,1012001,1010004,1008018],
                                        digital=[1022000,1021000,1018000,1025000];


                            _that.newCategory=[
                                canchu,
                                clothes,
                                chuangpin,
                                ruanshi,
                                meizhuang,
                                mother,
                                neiyi,
                                peishi,
                                shenghuo,
                                food,
                                mix,
                                shoe,
                                digital
                            ];
                            _that.newCategoryName=['餐厨用具','服装','家纺床品','家装软饰','美妆个护','母婴儿童','内衣裤袜','配件配饰','生活日用','食品饮料','文具/音像/宠物','鞋靴箱包','周边数码'];
                            

                            var tempGoods=[];
                            tempGoods=res.content.goodsList.slice(0);
                            $.each(tempGoods,function(i,v){
                                if(v.categoryList[1].superCategoryId){
                                    for(var j=0;j<_that.newCategory.length;j++){
                                        if($.inArray(v.categoryList[1].id, _that.newCategory[j]) >= 0)
                                            v.categoryList[1].name=_that.newCategoryName[j];
                                    }
                                }
                            });

                            var _goods = tempGoods;
                            
                            var _temp = $.map(_goods, function(v, k) {
                                var extend = v.extend;
                                return $.extend({}, {
                                    id: v.id,
                                    title: v.title,
                                    simpleDesc: v.simpleDesc,
                                    primaryPicUrl: v.primaryPicUrl + '?imageView&thumbnail=330x330&quality=95',
                                    unitPrice: parseFloat(v.unitPrice) > parseFloat(v.notSoldOutGoods.price) ? v.unitPrice : '',
                                    offPrice: v.notSoldOutGoods.price,
                                    sellVolume: v.sellVolume,
                                    maker: v.maker,
                                    scenePicUrl: v.scenePicUrl + '?imageView&thumbnail=330x330&quality=95'
                                }, extend);
                            });
                            var allGoods = _temp;
                            var tempData = $.extend({}, _that._data, new Data2Vue({
                                data: {
                                    temp: _temp.slice(0,_that.contentInfo.itemsOnPage.value),
                                    allGoods : allGoods
                                },
                                id: _that.id
                            }).getResult());

                            _that.$data = tempData;
                            _that.$dispatch('changeDataDefault', _that.id, tempData, true);


                            var categoryArr = [];
                            function findNum(arr) {
                                // var _this = this;
                                if (!arr.length) return;
                                if (arr.length === 1) return arr[0];
                                var res = {};
                                // 遍历数组
                                for (var i = 0, l = arr.length; i < l; i++) {
                                    if (!res[arr[i]]) {
                                        res[arr[i]] = 1;
                                    } else {
                                        res[arr[i]]++;
                                    }

                                }
                                return res;
                            };
                            $.each(_goods, function(i, item) {
                                 $.each(item.categoryList,function(i,k){
                                    if(k.superCategoryId!=0){
                                        categoryArr.push(k.name);
                                    }
                                })

                            });
                            _that.categoryArr = findNum(categoryArr);
                            var _tpl = '';
                            $.each(_that.categoryArr, function(i, n) {
                                _tpl+= '<li data-type="' + i + '" class=""><a href="javascript:;"><span class="checkboxIcon"></span>' + i + '</a><span>(' + n + ')</span></li>';

                            });
                            $(".J_goods_type").empty().append(_tpl);



                            var makerArr = [];
                            function findMost(arr) {
                                // var _that = this;
                                if (!arr.length) return;
                                if (arr.length === 1) return arr[0];
                                var res = {};
                                // 遍历数组
                                for (var i = 0, l = arr.length; i < l; i++) {
                                    if (!res[arr[i]]) {
                                        res[arr[i]] = 1;
                                    } else {
                                        res[arr[i]]++;
                                    }

                                }
                                var _makerArr=[];
                                var num = $('.makerNumber').data('makernumber');
                                while (num > 0) {
                                    // 遍历 res
                                    var keys = Object.keys(res);
                                    var maxNum = 0,
                                        maxEle;
                                    for (var i = 0, l = keys.length; i < l; i++) {
                                        if (res[keys[i]] > maxNum) {
                                            maxNum = res[keys[i]];
                                            maxEle = keys[i];
                                        }
                                    }
                                    _makerArr.push(maxEle);
                                    // 将最多的元素值变成0
                                    res[maxEle] = 0;
                                    num--;
                                }
                                return _makerArr;
                            };
                            $.each(_goods, function(k, item) {
                                if (item.extend.maker) {
                                    makerArr.push(item.extend.maker);
                                }
                            });
                            
                            _that.makerArr = findMost(makerArr);
                            var hotMakerImg1 = $('.hotMakerImg1').data('hotmakerimg1'),
                                hotMakerImg2 = $('.hotMakerImg2').data('hotmakerimg2'),
                                hotMakerImg3 = $('.hotMakerImg3').data('hotmakerimg3'),
                                hotMakerImg4 = $('.hotMakerImg4').data('hotmakerimg4'),
                                hotMakerImg5 = $('.hotMakerImg5').data('hotmakerimg5'),
                                hotMakerImg6 = $('.hotMakerImg6').data('hotmakerimg6');
                                var num = $('.makerNumber').data('makernumber');
                                var makerImgArr=[];
                                makerImgArr.push(hotMakerImg1,hotMakerImg2,hotMakerImg3,hotMakerImg4,hotMakerImg5,hotMakerImg6);
                                for(var k=0; k<num;k++){
                                    _that.makerImgArr.push(makerImgArr[k]);
                                }
                                
                            var makertpl = '';
                            $.each(_that.makerArr, function(i, n) {
                                makertpl += '<li data-type="' + n + '"><a href="javascript:;"><img src="'+_that.makerImgArr[i]+'" class="u-goods-makerImg"><div class="u-goodsMakerModal"></div><div class="u-goodsMakerDesc">' + _that.makerArr[i] + '</div></a></li>';
                            });
                            $('.J_goods_maker').empty().html(makertpl);

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
            'contentInfo.itemsOnPage.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'itemsOnPage': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$data = $.extend({}, _that._data, {
                            'temp' : _that.allGoods.slice(0,value)
                        });     
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.topic.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'topic': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.qrcodeLink.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'qrcodeLink': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.qrcodeBg.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'qrcodeBg': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.maxPrice.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'maxPrice': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.makerNumber.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'makerNumber': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg1.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg1': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg2.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg2': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg3.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg3': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg4.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg4': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg5.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg5': {
                                        'value': old
                                    }
                                }
                            },
                            _that = this;
                        this.$dispatch('changeDataDefault', this.id, data);
                    }
                }
            },
            'contentInfo.hotMakerImg6.value': {
                'handler': function(value, old) {
                    if (value) {
                        var data = {
                                'contentInfo': {
                                    'hotMakerImg6': {
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
            },
            types: function() {

            }


        },
        methods: {
            changed: function(name) {

            }
        },
        events: {}
    });

    return YX_S_M_CF55;
});
