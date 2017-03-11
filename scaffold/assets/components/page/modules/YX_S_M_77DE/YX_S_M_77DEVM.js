define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_77DE/YX_S_M_77DE.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		contentInfo:{
			tip1:'点击“点击兑换”按钮,在登录页面登入账户；',
			tip2:'在兑换框内输入券码，再次点击“点击兑换”按钮，即可成功领取优惠券；',
			tip3:'兑换成功后,选择心仪商品下单，即可选择相应优惠券使用；'
		}
	};
	var YX_S_M_77DE = Vue.extend({
		name: 'YX_S_M_77DE',
		components: {},
		template: new Tpl2Vue(tpl, _default).render(),
		mixins: [pageMixins],
		data: function() {
			return new Data2Vue({
				data: _default
			}).getResult();
		},
		watch:{
			'contentInfo.tip1.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'tip1': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.tip2.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'tip2': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.tip3.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'tip3': {
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
		}
		
	});
	 return YX_S_M_77DE;
});