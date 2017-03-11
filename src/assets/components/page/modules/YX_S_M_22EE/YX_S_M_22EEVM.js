define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_22EE/YX_S_M_22EE.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		contentInfo:{
			goodsId: ''
		},
		temp:[
			{
				"id": "1059010",
                "title": "日式纯棉色织条纹围裙",
                "simpleDesc": "日式水洗棉，爱的简约式",
                "maker": '',
				"leftdesc":'舒适的家',
				"btntext":'0元免费领',
				"scenePicUrl": "https://yanxuan.nosdn.127.net/2b96e0e06bff444049c1b454de8b7d45.jpg?imageView&thumbnail=500x500&quality=95"
			},{
				"id": "1097012",
				"title": "原素系列实木床头柜",
				"simpleDesc": "精美耐用，随心摆放",
				"maker":"",
				"leftdesc":'健康的家',
				"btntext":'用券后+9元购买',
				"scenePicUrl": "https://yanxuan.nosdn.127.net/01b5b444615b342c554d22c58d044e35.jpg?imageView&thumbnail=500x500&quality=95"
			},{
				"id": "1076019",
				"title": "黄金脆千层 140克",
				"simpleDesc": "层层酥脆，满腹茶香",
				"maker":"日本制造商",
				"leftdesc":'实用的家',
				"btntext":'0元免费领',
				"scenePicUrl": "http://yanxuan.nosdn.127.net/61112711088514d125bab92c72e7e3c1.jpg?imageView&thumbnail=500x500&quality=95"
			},{
				"id": "1042005",
				"title": "夹心巧克力饼干 90克",
				"simpleDesc": "迷你可爱，一口一个",
				"maker":"Levis制造商",
				"leftdesc":'舒适的家',
				"btntext":'用券后+9元购买',
				"scenePicUrl": "http://yanxuan.nosdn.127.net/d4d80973e9aa69cdab08290785c1b9c7.jpg?imageView&thumbnail=500x500&quality=95"
			}
		]
	};

	var YX_S_M_22EE = Vue.extend({
		name: 'YX_S_M_22EE',
		components: {},
		template: new Tpl2Vue(tpl, _default).render(),
		mixins: [pageMixins],
		data: function() {
			return new Data2Vue({
				data: _default
			}).getResult();
		},
		watch:{
			'contentInfo.goodsId.value':{
				'handler':function(value,old){
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
								return $.extend({},{
									id: v.id,
									title: v.title,
									simpleDesc: v.simpleDesc,
									primaryPicUrl: v.primaryPicUrl+'?imageView&thumbnail=500x500&quality=95',
									primarySkuId: v.primarySkuId,
									retailPrice: v.retailPrice,
									unitPrice: parseFloat(v.unitPrice) == parseFloat(v.offPrice) ? '' : v.unitPrice,
									offPrice: v.offPrice,
									sellVolume: v.sellVolume,
									maker:'',
									scenePicUrl:v.scenePicUrl+'?imageView&thumbnail=500x500&quality=95',
									leftdesc:'',
									btntxt:''
								},extend);
							});
							var tempData = $.extend({}, _that._data, new Data2Vue({
								data: {
									temp: _temp
								},
								id: _that.id
							}).getResult());

							_that.$data = tempData;
							_that.$dispatch('changeDataDefault', _that.id, tempData,true);
						});
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

	return YX_S_M_22EE;
});