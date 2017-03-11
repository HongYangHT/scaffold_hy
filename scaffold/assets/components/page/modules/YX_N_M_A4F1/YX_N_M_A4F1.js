(function() {
    var myModule = {
        lazyload: function() {
            setTimeout(function() {
                $('.YX-N-M-A4F1 .J_lazyload').lazyload({
                    threshold: 50,
                    effect: 'fadeIn'
                });
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
        getGoodsRender: function(element, id, subject, needScenePicUrl, needGoodsNum) {
            var self = this,
                _html = '';
            self.getAjaxData('https://spread.mail.163.com/mail/goods/getGroup', {
                id: id
            }, function(res) {
                var _goods = res.content.goodsList,
                    _html = '',
                    hasUsed = 0,
                    _subject = subject || $(element).find('.stat_subject').val(),
                    onShelf = [],
                    underShelf = [];
                for (var i = 0; i < _goods.length; i++) {
                    if (!_goods[i].underShelf && _goods[i].status == 2) {
                        onShelf.push(_goods[i]);
                    } else {
                        underShelf.unshift(_goods[i]);
                    }
                }

                if (onShelf.length < needGoodsNum) {
                    var addlength = needGoodsNum - onShelf.length;
                    for (var i = 0; i < addlength; i++) {
                        onShelf.push(underShelf.pop());
                    }
                } else {
                    var addlength = onShelf.length - needGoodsNum;
                    for (var i = 0; i < addlength; i++) {
                        onShelf.pop();
                    }

                }
                $.each(onShelf, function(k, v) {
                    var _detail = v,
                        sellVolumeId = '';
                    var extend = v.extend;
                    sellVolumeId = v.notSoldOutGoods.skuId;
                    hasUsed++;
                    _html += [
                        (hasUsed > 3 ? '<div class="u-A4F1-goods u-A4F1-goods-s">' : '<div class="u-A4F1-goods">'),
                        '<a href="http://you.163.com/item/detail?id=' + _detail.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-A4F1-img-link PSC_J_normal_statistics_Goods">',
                        (needScenePicUrl ? '<img data-original="' + _detail.scenePicUrl + '?imageView&thumbnail=210x210&quality=95" class="J_lazyload">' : '<img data-original="' + _detail.primaryPicUrl + '?imageView&thumbnail=210x210&quality=95" class="J_lazyload">'),
                        '</a>',
                        '<p class="u-A4F1-title"><a href="http://you.163.com/item/detail?id=' + _detail.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-A4F1-title-link PSC_J_normal_statistics_Goods">' + _detail.title + '</a></p>',
                        '<p class="u-A4F1-desc">' + (_detail.extend.maker ? _detail.extend.maker :_detail.simpleDesc) + '</p>',
                        '<div class="u-A4F1-border"></div>',
                        '<p class="u-A4F1-price">',
                        '<span class="u-A4F1-offPrice">' + _detail.offPrice + '</span>',
                        (parseFloat(_detail.offPrice) >= parseFloat(_detail.unitPrice) ? '' : '<span class="u-A4F1-unitPrice">' + _detail.unitPrice + '</span>'),
                        '</p>',
                        '<div class="m-A4F1-btn">',
                        '<a href="http://you.163.com/item/detail?id=' + _detail.id + '&_stat_subject=' + _subject + '" target="_blank" class="u-A4F1-buy PSC_J_normal_statistics_Goods">立即购买</a>',
                        '<a href="javascript:;" target="_self" class="u-A4F1-cart J_A4F1_cart PSC_J_normal_statistics_Goods psc_static_' + sellVolumeId + '"  data-skuId="' + sellVolumeId + '" data-img="' + _detail.primaryPicUrl + '?imageView&thumbnail=210x210&quality=95"></a>',
                        '</div>',
                        '</div>'
                    ].join('').trim();
                });
                $(element).find('.m-A4F1-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-A4F1 .J_module_info ').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid'),
            needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl'),
            _needGoodsNum = $(n).find('.needGoodsNum').data('needgoodsnum');
        myModule.getGoodsRender($(n).closest('.YX-N-M-A4F1'), _id, window.psc_act_id, needScenePicUrl, _needGoodsNum);
    });

    $('.YX-N-M-A4F1').on('click', '.J_A4F1_cart', function(e) {
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
})();