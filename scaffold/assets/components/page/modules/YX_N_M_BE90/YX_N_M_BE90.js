(function(){
     var myModule = {
        lazyload: function() {
            setTimeout(function() {
                $('.YX-N-M-BE90 .J_lazyload').lazyload({
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
        getGoodsRender: function(element, id, subject, needScenePicUrl,needGoodsNum) {
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
                    	(hasUsed%3 ? '<div class="u-BE90-goods">' : '<div class="u-BE90-goods u-BE90-goods-s">'),
							'<a href="http://you.163.com/item/detail?id='+_detail.id+'&_stat_subject='+_subject+'" target="_blank" class="u-BE90-img-link PSC_J_normal_statistics_Goods">',
								(needScenePicUrl ? '<img data-original="'+_detail.scenePicUrl+'?imageView&thumbnail=287x287&quality=95" class="J_lazyload">':'<img data-original="'+_detail.primaryPicUrl+'?imageView&thumbnail=287x287&quality=95" class="J_lazyload">'),
							'</a>',
							'<p class="u-BE90-title"><a href="http://you.163.com/item/detail?id='+_detail.id+'&_stat_subject='+_subject+'" target="_blank" class="u-BE90-title-link PSC_J_normal_statistics_Goods">'+_detail.title+'</a></p>',
                            '<p class="u-BE90-desc">'+(_detail.extend.maker ? _detail.extend.maker :_detail.simpleDesc)+'</p>',
                            '<p class="u-BE90-price">',
                            '<span class="u-BE90-offPrice">'+_detail.offPrice+'</span>',
                            (parseFloat(_detail.offPrice) >= parseFloat(_detail.unitPrice) ? '' : '<span class="u-BE90-unitPrice">'+_detail.unitPrice+'</span>'),
                            '</p>',
                            '<div class="m-BE90-btn">',
                            '<a href="http://you.163.com/item/detail?id='+_detail.id+'&_stat_subject='+_subject+'" target="_blank" class="u-BE90-buy PSC_J_normal_statistics_Goods">立即购买</a>',
                            '<a href="javascript:;" target="_self" class="u-BE90-cart J_BE90_cart PSC_J_normal_statistics_Goods psc_static_'+sellVolumeId+'"  data-skuId="'+sellVolumeId+'" data-img="'+_detail.primaryPicUrl+'?imageView&thumbnail=287x287&quality=95"></a>',
                            '</div>',
						'</div>'
                    ].join('').trim();
                });
                $(element).find('.m-BE90-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-BE90 .J_module_info ').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid'),
        	needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl'),
            _needGoodsNum = $(n).find('.needGoodsNum').data('needgoodsnum');
        myModule.getGoodsRender($(n).closest('.YX-N-M-BE90'), _id, window.psc_act_id, needScenePicUrl,_needGoodsNum);
    });

    $('.YX-N-M-BE90').on('click', '.J_BE90_cart', function(e) {
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
    $('body').on('click', '.YX-N-M-BE90 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();