define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_F5F5/YX_S_M_F5F5.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		contentInfo:{
			bannerImage:'https://mimg.127.net/hz/uploader/20170303/14885068358471417.jpg',
			coupon:'',
			couponLink:'',
			ajaxLink:'',
			popBg:'https://mimg.127.net/hz/uploader/20170302/14884625806521222.png'
		}
	};
	var YX_S_M_F5F5 = Vue.extend({
		name: 'YX_S_M_F5F5',
		components: {},
		template: new Tpl2Vue(tpl, _default).render(),
		mixins: [pageMixins],
		data: function() {
			return new Data2Vue({
				data: _default
			}).getResult();
		},
		watch:{
			'contentInfo.bannerImage.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'bannerImage': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.coupon.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'coupon': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.couponLink.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'couponLink': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.popBg.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'popBg': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'contentInfo.ajaxLink.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'ajaxLink': {
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
	 return YX_S_M_F5F5;
});