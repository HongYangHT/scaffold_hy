/*
 * 该模块用于模块参数说明
 */

define([
	'Vue',
	'text!components/page/autoinfo/autoinfo.mustache',
	'common/mixins/pageMixins',
	'mustache'
], function(Vue, tpl, pageMixins, mustache) {
	var autoinfo = Vue.extend({
		name: 'autoinfo',
		props: ['prevItem'],
		template: tpl,
		mixins: [pageMixins],
		computed: {

		},
		methods: {

		},
		events: {}
	});
	return autoinfo;
});