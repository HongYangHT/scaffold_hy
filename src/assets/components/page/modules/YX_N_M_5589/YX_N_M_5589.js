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
                $('.YX-N-M-5589 .J_lazyload').lazyload({
                    threshold: 50,
                    effect: 'fadeIn',
                    opacity: true
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
                    hasUsed = 0,
                    _subject = window.psc_act_id;
                $.each(_goods, function(k, v) {
                    var sellVolumeId = '';
                    sellVolumeId = v.notSoldOutGoods.skuId;
                    var couponPrice = v.extend && v.extend.couponPrice ? v.extend.couponPrice : '',
                        couponLink = v.extend && v.extend.couponLink ? v.extend.couponLink : '';
                    if ((v.status == 2) && !v.underShelf) {
                        hasUsed++;
                        _html += [
                            (hasUsed % 3 ? '<li class="u-5589-goods">' : '<li class="u-5589-goods" style="margin-right:0;">'),
                            '<div class="u-5589-goodsImg">',
                            '<img data-original="' + v.primaryPicUrl + '?imageView&thumbnail=330x330&quality=95" class="J_lazyload">',
                            '<div class="u-5589-goodsOptModal"></div>',
                            '<div class="u-5589-goodsCart"><a href="javascript:;" class="J_5589_cart PSC_J_normal_statistics_Goods psc_static_' + sellVolumeId + '" data-skuId="' + sellVolumeId + '" data-img="' + v.primaryPicUrl + '?imageView&thumbnail=330x330&quality=95"><span class="u-5589-cartIcon"></span>立即购买</a></div>',
                            '<div class="u-5589-getCoupon"><a target="_blank" href="' + couponLink + '"><span class="u-5589-CouponIcon"></span>领优惠券</a></div>',
                            '</div>',
                            '<div class="u-5589-intro"><a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" title="' + v.title + '" target="_blank" class="u-5589-title PSC_J_normal_statistics_Goods">' + v.title + '</a>',
                            '<p class="u-5589-info">' + v.simpleDesc + '</p>',
                            (couponPrice ? '<p class="u-5589-price"><span class="u-5589-couponPrice"><span class="u-5589-unit">&yen;&nbsp;</span>' + couponPrice + '</span>' : '<p class="u-5589-price"><span class="u-5589-offPrice"><span class="u-5589-unit">&yen;&nbsp;</span>' + v.offPrice + '</span>'),
                            '<span class="u-5589-unitPrice">' + v.retailPrice + '</span>',
                            '</p>',
                            '</div>',
                            '</li>'
                        ].join('');

                    }
                });
                $(element).find('.m-5589-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-5589 .J_module_info').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid');
        myModule.getGoodsRender($(n).closest('.YX-N-M-5589'), _id, window.psc_act_id);
    });

    $('.YX-N-M-5589').on('click', '.J_5589_cart', function(e) {
        var $target = $(e.target),
            skuId = $target.data('skuid'),
            img = $target.data('img');
        if (window.PSC_YX_API_UID) {
            window.PSC_YX_API.addCart(skuId, img, 1, function(_res) {
                var _code = _res.code;
                if (_code == 200) {
                    window.PSC_YX_API.cartPcAnimate(img, 2000);
                } else {
                    alert('商品已下架！');
                }
            });
        } else {
            $.ajax({
                url: '//you.163.com/act/api1/yxcoupon/ajax/getYXAccount.do',
                type: 'GET',
                dataType: 'jsonp',
                async: false,
                cache: false,
                jsonp: "callback",
                success: function(data) {
                    if (data && data.code && data.code == 200) {
                        if (data.content) {
                            window.PSC_YX_API_UID = data.content.uid;
                            window.PSC_YX_API.addCart(skuId, img, 1, function(_res) {
                                var _code = _res.code;
                                if (_code == 200) {
                                    window.PSC_YX_API.cartPcAnimate(img, 2000);
                                } else {
                                    alert('商品已下架！');
                                }
                            });
                        } else {
                            window.PSC_YX_API.login();
                        }
                    } else {
                        alert('服务器繁忙，请重新再试');
                    }
                },
                error: function(xhr, textStatus) {
                    if (textStatus === 'timeout') {
                        alert('请求超时，请重新再试');
                    }
                }
            });
        }
    });

    $('body').on('click', '.YX-N-M-5589 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();
