define([
	'Vue',
	'mustache',
	'jquery',
	'text!components/page/modules/YX_S_M_1D5D/YX_S_M_1D5D.mustache',
	'common/mixins/pageMixins',
	'common/helper/tpl2vue',
	'common/helper/data2vue',
	'common/helper/tools',
	'common/directive/setAttr'
],function(Vue, mustache, $, tpl, pageMixins, Tpl2Vue, Data2Vue, Tools){
	var _default = {
		H5597Groups:{
			otherInfo:'其他数据配置',
			Span_1: '列表一',
			Span_2: '列表二',
			Span_3: '列表三',
			Span_4: '列表四',
			Span_5: '列表五'
		},
		otherInfo:{
			sidebarImage:'https://mimg.127.net/hz/uploader/20170119/14848177685361148.png',
			tlt:'App首单立减8元',
			tip:'-可叠加所有优惠-'
		},
		Span_1:{
			show_1:1,
			SpanVal_1:'情人节特惠',
			anchar_1:''
		},
		Span_2:{
			show_2:1,
			SpanVal_2:'集玫瑰换礼物',
			anchar_2:''
		},
		Span_3:{
			show_3:1,
			SpanVal_3:'黑凤梨礼盒',
			anchar_3:''
		},
		Span_4:{
			show_4:1,
			SpanVal_4:'节日礼物甄选',
			anchar_4:''
		},
		Span_5:{
			show_5:1,
			SpanVal_5:'情人节回礼',
			anchar_5:''
		},
	};
	var YX_S_M_1D5D = Vue.extend({
		name: 'YX_S_M_1D5D',
		components: {},
		template: new Tpl2Vue(tpl, _default).render(),
		mixins: [pageMixins],
		data: function() {
			return new Data2Vue({
				data: _default
			}).getResult();
		},
		watch:{
			'otherInfo.sidebarImage.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'otherInfo': {
									'sidebarImage': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'otherInfo.tlt.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'otherInfo': {
									'tlt': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'otherInfo.tip.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'otherInfo': {
									'tip': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_1.show_1.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_1': {
									'show_1': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_1.SpanVal_1.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_1': {
									'SpanVal_1': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_1.anchar_1.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_1': {
									'anchar_1': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_2.show_2.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_2': {
									'show_2': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_2.SpanVal_2.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_2': {
									'SpanVal_2': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_2.anchar_2.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_2': {
									'anchar_2': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_3.show_3.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_3': {
									'show_3': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_3.SpanVal_3.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_3': {
									'SpanVal_3': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_3.anchar_3.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_3': {
									'anchar_3': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_4.show_4.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_4': {
									'show_4': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_4.SpanVal_4.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_4': {
									'SpanVal_4': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_4.anchar_4.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_4': {
									'anchar_4': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_5.show_5.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_5': {
									'show_5': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_5.SpanVal_5.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_5': {
									'SpanVal_5': {
										'value': old
									}
								}
							},
							_that = this;
						this.$dispatch('changeDataDefault', this.id, data);	
					}
				}
			},
			'Span_5.anchar_5.value':{
				'handler':function(value,old){
					if(value){
						var data = {
								'Span_5': {
									'anchar_5': {
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
	 return YX_S_M_1D5D;
});