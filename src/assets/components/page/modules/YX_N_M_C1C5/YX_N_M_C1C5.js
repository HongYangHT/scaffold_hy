(function() {
    var myModule = {
        lazyload: function() {
            setTimeout(function() {
                PSC_lazyload({
                    inViewTreshhold: 100,
                    opacity: true
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
        getGoodsRender: function(element, id, subject,needScenePicUrl,needGoodsNum) {
            var self = this,
                _html = '';
            self.getAjaxData('https://spread.mail.163.com/mail/goods/getGroup', {
                id: id
            }, function(res) {
                var _goods = res.content.goodsList,
                    _html = '',
                    _subject = subject || $(element).find('.stat_subject').val();
                    onShelf=[],
                    underShelf=[];
               for(var i=0; i<_goods.length;i++){
                    if(!_goods[i].underShelf && _goods[i].status == 2){
                        onShelf.push(_goods[i]);
                    }else{
                        underShelf.unshift(_goods[i]); 
                    }
               }
               
                if(onShelf.length < needGoodsNum){
                    var addlength=needGoodsNum-onShelf.length;
                    for(var i=0;i<addlength;i++){
                        onShelf.push(underShelf.pop());
                    }  
                }else{
                    var addlength=onShelf.length-needGoodsNum;
                    for(var i=0;i<addlength;i++){
                         onShelf.pop();
                    }  
                   
                }


                $.each(onShelf, function(k, v) {
                    var sellVolumeId = '';
                    sellVolumeId = v.notSoldOutGoods.skuId;
                        _html += [
                            '<div class="u-C1C5-goods">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank" class="u-C1C5-link PSC_J_normal_statistics_Goods">',
                            (needScenePicUrl ? '<img data-original="' + v.scenePicUrl + '?imageView&thumbnail=255x255&quality=95" class="J_lazyload">':'<img data-original="' + v.primaryPicUrl + '?imageView&thumbnail=255x255&quality=95" class="J_lazyload">'),
                            '</a>',
                            '<div class="m-C1C5-goods-info">',
                            '<p class="u-C1C5-goods-t"><a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank">' + v.title + '</a></p>',
                            '<p class="u-C1C5-goods-maker">'+(v.simpleDesc ? v.simpleDesc:v.maker)+'</p>',
                            '<p class="u-C1C5-goods-price">',
                            '<span class="u-C1C5-offPrice">' + v.notSoldOutGoods.price + '</span>',
                            (parseFloat(v.notSoldOutGoods.price) >= parseFloat(v.unitPrice) ? '' : '<span class="u-C1C5-unitPrice">' + v.unitPrice + '</span>'),
                            '</p>',
                            '<div class="m-C1C5-btn">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank" class="u-C1C5-btn">立即购买</a>',
                            '<a href="javascript:;" target="_self" class="u-C1C5-cart J_C1C5_cart PSC_J_normal_statistics_Goods PSC_C_statistics_'+ sellVolumeId +'" data-skuId="' + sellVolumeId + '" data-img="' + v.primaryPicUrl + '"></a>',
                            '</div>',
                            '</div>',
                            '</div>'
                        ].join('');
                });

                $(element).find('.u-C1C5-goods').remove();
                $(element).find('.m-C1C5-goods').append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-C1C5 .J_module_info ').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid'),
           needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl'),
           _needGoodsNum=$(n).find('.needGoodsNum').data('needgoodsnum');
        myModule.getGoodsRender($(n).closest('.YX-N-M-C1C5'), _id, window.psc_act_id,needScenePicUrl,_needGoodsNum);
    });

    $('.YX-N-M-C1C5').on('click', '.J_C1C5_cart', function(e) {
        var $target = $(e.target),
            skuId = $target.data('skuid'),
            img = $target.data('img');
        if (window.PSC_YX_API_UID) {
            window.PSC_YX_API.addCart(skuId, img, 1, function(_res) {
                var _code = _res.code;
                if (_code == 200) {
                    window.PSC_YX_API.cartPcAnimate(img, 2000);
                    window.PSC_YX_API.addToast('成功加入购物车', 300);
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
                                    window.PSC_YX_API.addToast('成功加入购物车', 300);
                                } else {
                                    alert('商品已下架！');
                                }
                            });
                        } else {
                            window.PSC_YX_API.login2(window.location.href, function() {});
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
    $('body').on('click', '.YX-N-M-C1C5 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();
