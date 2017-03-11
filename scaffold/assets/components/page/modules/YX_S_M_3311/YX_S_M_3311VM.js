define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_3311/YX_S_M_3311.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		H5597Groups:{
			goods_1: '券位置一',
			goods_2: '券位置二'
		},
		goods_1:{
			show_1:1,
			bgImg_1:'https://mimg.127.net/hz/uploader/20170209/14866428537410103.png',
			couponVal_1:'免单券',
			couponDesc_1:'简约便携防水运动包',
			couponBtnText_1:'立即领取',
			couponLink_1:'http://you.163.com',
			couponBg_1:'https://mimg.127.net/hz/uploader/20170209/14866383914210086.png'
		},
		goods_2:{
			show_2:1,
			bgImg_2:'https://mimg.127.net/hz/uploader/20170209/14866158477160037.jpg',
			couponVal_2:'￥95礼物卡',
			couponDesc_2:'“黑凤梨”系列礼包',
			couponBtnText_2:'立即领取',
			couponLink_2:'http://you.163.com',
			couponBg_2:'https://mimg.127.net/hz/uploader/20170209/14866383914210086.png'
		}
	};

	var YX_S_M_3311 = Vue.extend({
		name: 'YX_S_M_3311',
		components: {},
		template: new Tpl2Vue(tpl, _default).render(),
		mixins: [pageMixins],
		data: function() {
			return new Data2Vue({
				data: _default
			}).getResult();
		},
		watch:{
			'goods_1.show_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'show_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.bgImg_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'bgImg_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.couponVal_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'couponVal_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.couponDesc_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'couponDesc_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.couponBtnText_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'couponBtnText_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.couponLink_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'couponLink_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_1.couponBg_1.value': {
				'handler': function(value, old) {
					var data = {
						'goods_1': {
							'couponBg_1': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.show_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'show_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.bgImg_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'bgImg_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.couponVal_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'couponVal_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.couponDesc_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'couponDesc_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.couponBtnText_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'couponBtnText_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.couponLink_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'couponLink_2': {
								'value': old
							}
						}
					};
					this.$dispatch('changeDataDefault', this.id, data);
				}
			},
			'goods_2.couponBg_2.value': {
				'handler': function(value, old) {
					var data = {
						'goods_2': {
							'couponBg_2': {
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
	return YX_S_M_3311;
});