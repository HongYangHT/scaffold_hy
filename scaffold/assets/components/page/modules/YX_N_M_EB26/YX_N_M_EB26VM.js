define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_N_M_EB26/YX_N_M_EB26.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
], function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools) {
	var _default = {
		contentInfo: {
			goodsId: '',
			title: '云音乐用户特惠商品',
			needScenePicUrl: 0
		},
		temp: [{
            "id": "1035001",
            "title": "牛皮拼接双肩背包",
            "salesRank": 137,
            "amountRank": 137,
            "simpleDesc": "防水尼龙与牛皮的优雅结合",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/b37dff071f6f6b7b5e5ca2a30dc27b40.jpg",
            "primarySkuId": "1034001",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "459.0",
            "unitPrice": "659",
            "offPrice": "459",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "范思哲制造商",
            "underShelf": false,
            "newItemFlag": true,
            "recommend": true,
            "extend": {
                "category": "箱包",
                "maker": "范思哲制造商"
            },
            "unitPrice": "23",
			"couponPrice": "65",
			"btnText": "限时免单券",
			"btnLink": "http://you.163.com",
			"oldUserFlag": 1,
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1034001,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 459,
                "counterPrice": 459,
                "name": "颜色:黑色",
                "imgUrl": "https://yanxuan.nosdn.127.net/48ee3d71ac37586a27b23945de4d7eef.png",
                "isPreSell": false,
                "sellVolume": 1
            }
        }, {
            "id": "1108034",
            "title": "商务出行多功能双肩包",
            "salesRank": 86,
            "amountRank": 86,
            "simpleDesc": "为短途商旅贴心设计",
            "primaryPicUrl": "https://yanxuan.nosdn.127.net/c88e82891eeb96cc5e03ace2b7dc3dc3.png",
            "scenePicUrl": "https://yanxuan.nosdn.127.net/6880a6ee24cfd43748437ee05fe4e35c.jpg",
            "primarySkuId": "1109127",
            "primarySellVolume": 1,
            "primaryPurchaseAttribute": 0,
            "retailPrice": "239.0",
            "unitPrice": "239",
            "offPrice": "239",
            "isPreSell": true,
            "sellVolume": 1,
            "maker": "新秀丽制造商",
            "underShelf": false,
            "extend": {
                "category": "箱包",
                "maker": "新秀丽制造商"
            },
            "couponPrice": 0,
			"btnText": 0,
			"btnLink": 0,
			"oldUserFlag": 0,
            "newItemFlag": true,
            "recommend": true,
            "status": 2,
            "notSoldOutGoods": {
                "skuId": 1109127,
                "isPrimary": true,
                "purchaseAttribute": 0,
                "price": 239,
                "counterPrice": 239,
                "name": "颜色:黑色",
                "imgUrl": "https://yanxuan.nosdn.127.net/c88e82891eeb96cc5e03ace2b7dc3dc3.png",
                "isPreSell": false,
                "sellVolume": 1
            }
        }]
	};
	var YX_N_M_EB26 = Vue.extend({
		name: 'YX_N_M_EB26',
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
							var _temp = [];
							$.each(_goods, function(k, v) {
								_temp.push($.extend({}, {
									id: v.id,
									title: v.title,
									simpleDesc: v.simpleDesc,
									primaryPicUrl: v.primaryPicUrl + '?imageView&thumbnail=240x240&quality=95',
									primarySkuId: v.primarySkuId,
									retailPrice: v.retailPrice,
									unitPrice: parseFloat(v.unitPrice) == parseFloat(v.offPrice) ? '' : v.unitPrice,
									offPrice: v.offPrice,
									sellVolume: v.sellVolume,
									maker: '',
									newItemFlag: v.newItemFlag,
									scenePicUrl: v.scenePicUrl + '?imageView&thumbnail=240x240&quality=95',
									couponPrice: 0,
									btnText: 0,
									btnLink: 0,
									oldUserFlag: 0
								}, v.extend));
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

	return YX_N_M_EB26;
});