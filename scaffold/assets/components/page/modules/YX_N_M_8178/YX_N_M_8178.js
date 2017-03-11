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
            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                PSC_lazyload({
                    inViewTreshhold: 100,
                    opacity: true
                });
            } else {
                $('.YX-N-M-8178 .J_lazyload').lazyload({
                    threshold: 50,
                    effect: 'fadeIn'
                });
            }
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
        getGoodsRender: function(element, id, subject) {
            var self = this,
                _html = '';
            self.getAjaxData('https://spread.mail.163.com/mail/goods/getGroup', {
                id: id
            }, function(res) {
                var _goods = res.content.goodsList,
                    _html = '',
                    _subject = window.psc_act_id;
                $.each(_goods, function(k, v) {
                    var sellVolumeId = '';
                    sellVolumeId = v.notSoldOutGoods.skuId;
                    var couponPrice = v.extend && v.extend.couponPrice ? v.extend.couponPrice : '',
                        btnText = v.extend && v.extend.btnText ? v.extend.btnText : '',
                        btnLink = v.extend && v.extend.btnLink ? v.extend.btnLink : '',
                        retailPrice = (parseFloat(v.offPrice) >= parseFloat(v.retailPrice) ? '' : v.retailPrice);
                    if ((v.status == 2) && !v.underShelf) {
                        _html += [
                            '<div class="u-8178-goods">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-8178-link PSC_J_normal_statistics_Goods">',
                            '<img data-original="' + v.primaryPicUrl + '?imageView&thumbnail=265x265&quality=95" class="J_lazyload">',
                            '</a>',
                            '<div class="m-8178-goods-info">',
                            '<p class="u-8178-goods-t"><a href="http://you.163.com/item/detail?id=' + v.id + '&_stat_subject=' + _subject + '" target="_blank" class="PSC_J_normal_statistics_Goods">' + v.title + '</a></p>',
                            '<p class="u-8178-goods-price">',
                            (couponPrice ? '<span class="u-8178-couponPrice">&yen;' + couponPrice + '</span>' : '<span class="u-8178-offPrice">&yen;' + v.offPrice + '</span>'),
                            (retailPrice ? '<span class="u-8178-unitPrice">' + retailPrice + '</span>' : ''),
                            '</p>',
                            '<div class="m-8178-btn">',
                            (btnLink ? '<a href="' + btnLink + '" target="_blank" class="u-8178-btn PSC_J_normal_statistics_Goods">'+btnText+'</a>' : '<a href="http://you.163.com/item/detail?id=' + v.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-8178-btn PSC_J_normal_statistics_Goods">立即购买</a>'),
                            '</div>',
                            '</div>',
                            '</div>'
                        ].join('');
                    }
                });
                $(element).find('.m-8178-goods').empty().append(_html);
                self.lazyload();
            });
        }
    };

    $('.YX-N-M-8178 .J_module_info ').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid');
        myModule.getGoodsRender($(n).closest('.YX-N-M-8178'), _id, window.psc_act_id);
    });

    $('body').on('click', '.YX-N-M-8178 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();
