(function(){
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
                    inViewTreshhold:100,
                    opacity:true
                });
            } else {
                $('.YX-N-M-1137 .J_lazyload').lazyload({
                    threshold : 50,
                    effect : 'fadeIn',
                    opacity:true
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
        getGoodsRender: function(element, id, subject,needScenePicUrl) {
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
                    var extend = v.extend ? v.extend : '';
                    sellVolumeId = v.notSoldOutGoods.skuId;
                    if ((v.status == 2) && !v.underShelf) {
                        _html += [
                             '<li class="u-1137-item"><div class="u-1137-good">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" title="' + v.title + '" target="_blank" class="u-1137-link PSC_J_normal_statistics_Goods">',
                            (needScenePicUrl ? '<img data-original="' + v.scenePicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload"><i></i>' : '<img data-original="' + v.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload"><i></i>'),
                            '</a>',
                            '<div class="m-1137-goods-info"><p class="u-1137-goods-t">',
                             (extend.maker?'<span class="u-1137-goods-maker">'+extend.maker+ '</span>':(v.newItemFlag? '<span class="u-1137-goods-maker">'+extend.maker+ '</span>' : '')),
                            '<span class="u-1137-goods-title"><a class="PSC_J_normal_statistics_Goods" href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank">' + v.title + '</a></span></p>',
                            '<div class="m-1137-goods-price">',
                                '<span class="u-1137-offPrice">'+v.offPrice +'</span>',
                               (parseFloat(v.offPrice) == parseFloat(v.unitPrice) ? '' :'<span class="u-1137-unitPrice">'+v.unitPrice+'</span>'),
                            '</div>',
                            '<div class="m-1137-btn">',
                            '<a href="javascript:;" target="_self" class="u-1137-cart J_1137_cart PSC_J_normal_statistics_Goods psc_static_'+ sellVolumeId +'" data-skuId="' + sellVolumeId + '" data-img="' + v.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95"></a>',
                            '</div>',
                            '</div>',
                            '</div>',
                            '</li>'
                        ].join('');
                         
                    }
                });
                $(element).find('.m-1137-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-1137 .J_module_info').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid'),
            needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl');
        myModule.getGoodsRender($(n).closest('.YX-N-M-1137'), _id, window.psc_act_id,needScenePicUrl);
    });
    $('.YX-N-M-1137').on('click', '.J_1137_cart', function(e) {
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
     $('body').on('click', '.YX-N-M-1137 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();