define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_A86B/YX_S_M_A86B.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		contentInfo:{
			bannerImage:'http://mimg.127.net/hz/uploader/20161202/14806436916670873.jpg',
			link:''
		}
	};
	var YX_S_M_A86B = Vue.extend({
		name: 'YX_S_M_A86B',
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
			'contentInfo.link.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'contentInfo': {
									'link': {
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
	 return YX_S_M_A86B;
});