(function() {
	var UA = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
			};
		}()
	};

	var myModule = {
		lazyload: function() {
			setTimeout(function() {
				if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
					UA.versions.iPhone || UA.versions.iPad) { // 移动端
					PSC_lazyload({
						inViewTreshhold: 100,
						opacity: true
					});
				} else {
					$('.YX-N-M-EB26 .J_lazyload').lazyload({
						threshold: 50,
						effect: 'fadeIn'
					});
				}
			}, 300);
		},
		getAjaxData: function(url, data, callback) {
			var self = this;
			$.ajax({
				type: 'GET',
				url: url,
				async: false,
				cache: false,
				dataType: 'jsonp',
				data: data || '',
				success: function(res) {
					callback(res);
				}
			});
		},
		getGoodsRender: function(element, id, subject, needScenePicUrl) {
			var self = this,
				_html = '';
			self.getAjaxData('https://spread.mail.163.com/mail/goods/getGroup', {
				id: id
			}, function(res) {
				var _goods = res.content.goodsList,
					_subject = subject || $(element).find('.stat_subject').val();
				$.each(_goods, function(i, item) {
					_html += [
						'<div class="u-EB26-goods">',
						'<div class="u-EB26-goods-img">',
						(needScenePicUrl ? '<a class="u-EB26-goods-link PSC_J_normal_statistics_Goods" href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + _subject + '" target="_blank"><img class="J_lazyload" data-original="' + item.notSoldOutGoods.imgUrl + '?imageView&thumbnail=236x236&quality=95"></a>' : '<a class="u-EB26-goods-link PSC_J_normal_statistics_Goods" href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + _subject + '" target="_blank"><img class="J_lazyload" data-original="' + item.primaryPicUrl + '?imageView&thumbnail=236x236&quality=95"></a>'),
						'</div>',
						'<div class="u-EB26-goods-info">',
						'<p class="u-EB26-goods-title"><a class="u-EB26-goods-link PSC_J_normal_statistics_Goods" href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + _subject + '" target="_blank">' + item.title + '</a></p>',
						(item.extend.couponPrice ? '<p class="u-EB26-goods-price"><span>券后</span><span class="u-EB26-goods-couponPrice">' + item.extend.couponPrice + '</span><span class="u-EB26-goods-retailPrice">' + item.retailPrice + '</span></p>' : '<p class="u-EB26-goods-price"><span class="u-EB26-goods-couponPrice">' + item.offPrice + '</span>' + '' + (parseFloat(item.unitPrice) > parseFloat(item.offPrice) ? '<span class="u-EB26-goods-retailPrice">' + item.unitPrice + '</span></p>' : '')),
						(item.extend.btnText ? '<a href="' + item.extend.btnLink + '" target="_blank" class="u-EB26-goods-btn PSC_J_normal_statistics_Goods">' + item.extend.btnText + '</a>' : '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-EB26-goods-btn PSC_J_normal_statistics_Goods">立即购买</a>'),
						(item.extend.oldUserFlag ? '<p class="u-EB26-goods-tip">老用户订单满88免单</p>' : ''),
						'</div>',
						'</div>'
					].join('').trim();
				});
				$(element).find('.m-EB26-content').empty().append(_html);
				self.lazyload();
			});
		}
	};

	$('.YX-N-M-EB26 .J_module_info').each(function(i, n) {
		var _id = $(n).find('.goodsId').data('goodsid'),
			needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl');
		myModule.getGoodsRender($(n).closest('.YX-N-M-EB26'), _id, window.psc_act_id, needScenePicUrl);
	});
	$('body').on('click', '.YX-N-M-EB26 .PSC_J_normal_statistics_Goods', function(e) {
		PSC_C_statistics.normalGoods(this);
	});
})();