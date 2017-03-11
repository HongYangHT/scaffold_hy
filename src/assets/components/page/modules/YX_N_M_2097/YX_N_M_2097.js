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
                $('.YX-N-M-2097 .J_lazyload').lazyload({
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
                    var oldUserFlag= v.extend && v.extend.oldUserFlag ? v.extend.oldUserFlag:'',
                        couponPrice=v.extend && v.extend.couponPrice ? v.extend.couponPrice:'',
                        btnText=v.extend && v.extend.btnText ? v.extend.btnText:'',
                        btnLink=v.extend && v.extend.btnLink ? v.extend.btnLink:'';

                    if ((v.status == 2) && !v.underShelf) {
                        hasUsed++;
                        _html += [
                        (hasUsed % 3 ? '<li class="u-2097-goods">' : '<li class="u-2097-goods" style="margin-right:0;">'),
                            '<div class="u-2097-goodsImg">',
                                '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" title="' + v.title + '" target="_blank" class="PSC_J_normal_statistics_Goods">',
                                '<img data-original="'+v.scenePicUrl+'?imageView&thumbnail=330x330&quality=95" class="J_lazyload">',
                                (oldUserFlag =='1'?'<div class="u-2097-isOldUser"><p>老用户订单满88免单</p></div>':''),
                                '</a>',
                            '</div>',
                            '<div class="u-2097-intro"><a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" title="' + v.title + '" target="_blank" class="u-2097-title PSC_J_normal_statistics_Goods">' + v.title + '</a>',
                                '<p class="u-2097-info">'+v.simpleDesc+'</p>',
                                (couponPrice ? '<p class="u-2097-price"><span class="u-2097-couponPrice"><span class="u-2097-unit">&yen;&nbsp;</span>'+couponPrice+'</span><span class="u-2097-unitPrice">'+v.retailPrice+'</span></p>':'<p class="u-2097-price"><span class="u-2097-offPrice"><span class="u-2097-unit">&yen;&nbsp;</span>'+v.offPrice+'</span><span class="u-2097-unitPrice">'+v.retailPrice+'</span></p>'),
                                (btnLink ? '<div class="m-2097-btn"><a href="'+btnLink+'" target="_self" class="u-2097-btnlink">'+(btnText ? btnText :'限时优惠券')+'</a>':''),
                                '</div>',
                            '</div>',
                        '</li>'
                        ].join('');
                         
                    }
                });
                $(element).find('.m-2097-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-N-M-2097 .J_module_info').each(function(i, n) {
        var _id = $(n).find('.goodsId').data('goodsid');
        myModule.getGoodsRender($(n).closest('.YX-N-M-2097'), _id, window.psc_act_id);
    });  
     $('body').on('click', '.YX-N-M-2097 .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();