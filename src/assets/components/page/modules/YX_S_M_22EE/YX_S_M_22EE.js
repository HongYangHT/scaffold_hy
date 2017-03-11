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
                $('.YX-S-M-22EE .J_lazyload').lazyload({
                    threshold : 50,
                    effect : 'fadeIn'
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
                    // _subject = subject || $(element).find('.stat_subject').val();
                $.each(_goods, function(k, v) {
                    var extend = v.extend ? v.extend : '';
                    if ((v.status == 2) && !v.underShelf) {
                        _html += [
                             '<li class="u-22EE-item"><div class="u-22EE-good">',
                            // '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank" class="u-22EE-link">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" title="' + v.title + '" target="_blank" class="u-22EE-link PSC_J_normal_statistics_Goods">',
                            '<img class="J_lazyload" data-original="'+v.scenePicUrl+'">',
                            (extend.leftdesc ?'<div class=u-22EE-leftdesc><span>'+extend.leftdesc+'</span></div>':''),
                            '</a>',
                            '<div class="m-22EE-goods-info"><p class="u-22EE-goods-t">',
                             (extend.maker ? '<span class="u-22EE-goods-maker">' + extend.maker + '</span>' : ''),
                            '<span class="u-22EE-goods-title'+ (extend.maker ? '' : ' nomaker')+'"><a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank">' + v.title + '</a></span></p>',
                            '<p class=u-22EE-goods-desc>'+v.simpleDesc+'</p>',
                            '<div class="m-22EE-btn">',
                            '<a href="http://you.163.com/item/detail?id=' + v.id + '&&_stat_subject=' + _subject + '" target="_blank" class="u-22EE-btn PSC_J_normal_statistics_Goods">'+(extend.btntext? _extend.btntext:'立即购买')+'</a>',   
                            '</div>',
                            '</div>',
                            '</div>',
                            '</li>'
                        ].join('');
                    }
                });
                $(element).find('.m-22EE-goods').empty().append(_html);
                self.lazyload();
            });

        }
    };

    $('.YX-S-M-22EE .goodsId').each(function(i, n) {
        var _id = $(n).data('goodsid');
        myModule.getGoodsRender($(n).closest('.YX-S-M-22EE'), _id, window.psc_act_id);
    });
    $('body').on('click', '.YX-S-M-22EE .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });      
})();