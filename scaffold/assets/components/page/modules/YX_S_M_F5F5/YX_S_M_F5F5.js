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
    if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
        UA.versions.iPhone || UA.versions.iPad) { // 移动端
        PSC_lazyload({
            inViewTreshhold: 100,
            opacity: true
        });
    } else {
        $('.YX-S-M-F5F5 .J_lazyload').lazyload({
            threshold: 50,
            effect: 'fadeIn',
            opacity: true
        });
    }
    $('.J_F5F5_getCoupon').on('click', function(e) {
        var $n = $(e.target) || $(e.currentTarget),
            $parent = $n.closest('.YX-S-M-F5F5'),
            coupon = $parent.find('.J_module_info').find('.coupon').data('coupon'),
            ajaxLink = $parent.find('.J_module_info').find('.ajaxLink').data('ajaxlink'),
            popBg = $parent.find('.J_module_info').find('.popBg').data('popbg');
        if (coupon) {
            if (window.PSC_SCAFFOLD_UID) {
                PSC_YX_API.YX_exchangeCoupon(coupon);
            } else {
                $.ajax({
                    url: 'https://you.163.com/act/hdapi/commonapi/ajax/getUid.do',
                    type: 'GET',
                    dataType: 'jsonp',
                    success: function(result) {
                        if (result.code == 200 && result.content.uid) {
                            window.PSC_SCAFFOLD_UID = result.content.uid;
                            PSC_YX_API.YX_exchangeCoupon(coupon);
                        } else {
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.login2(window.location.href, function() {
                                    window.location.reload();
                                });
                            } else {
                                window.PSC_YX_API.login();
                            }
                        }

                    },
                    error: function(result) {

                    }
                });
            }
        } else if (ajaxLink) {
            if (window.PSC_SCAFFOLD_UID) {
                getCoupon(ajaxLink, true, popBg);
            } else {
                $.ajax({
                    url: 'https://you.163.com/act/hdapi/commonapi/ajax/getUid.do',
                    type: 'GET',
                    dataType: 'jsonp',
                    success: function(result) {
                        if (result.code == 200 && result.content.uid) {
                            window.PSC_SCAFFOLD_UID = result.content.uid;
                            getCoupon(ajaxLink, true, popBg);
                        } else {
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.login2(window.location.href, function() {
                                    window.location.reload();
                                });
                            } else {
                                window.PSC_YX_API.login();
                            }
                        }

                    },
                    error: function(result) {

                    }
                });
            }
        }

    });

    function getCoupon(url, flag, popBg) {
        var html = '<div class="g-F5F5-pop" style="display: block;">' +
            '<div class="m-F5F5-pop-bg"></div>' +
            '<div class="m-F5F5-pop-content">' +
            '<a href="javascript:;" target="_self" class="J_F5F5_close u-F5F5-close PSC_J_normal_statistics_Goods">' +
            '<img src="' + popBg + '">' +
            '</a></div></div>';
        $.ajax({
            url: url || '//you.163.com/act/api3/yxwoman/ajax/getCouponOne.do',
            type: 'GET',
            dataType: 'jsonp',
            success: function(result) {
                if (result.code) {
                    switch (result.code) {
                        case 200:
                            if (!$('body').find('.g-F5F5-pop').size()) {
                                $('body').append(html);
                            }
                            $('.g-F5F5-pop').show();
                            break;
                        case 610:
                            if (flag) {
                                if (!$('body').find('.g-F5F5-pop').size()) {
                                    $('body').append(html);
                                }
                                $('.g-F5F5-pop').show();
                            }
                            break;
                        case 202:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.addToast('活动即将开始，敬请期待！', 500);
                            } else {
                                alert('活动即将开始，敬请期待！');
                            }
                            break;
                        case 203:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.addToast('活动已经下线了！', 500);
                            } else {
                                alert('活动已经下线了！');
                            }
                            break;
                        case 400:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.addToast('参数错误', 500);
                            } else {
                                alert('参数错误');
                            }
                            break;
                        case 401:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.login2(window.location.href, function() {
                                    window.location.reload();
                                });
                            } else {
                                window.PSC_YX_API.login();
                            }
                            break;
                        case 500:
                        case 501:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.addToast('服务器繁忙，请重新再试！', 500);
                            } else {
                                alert('服务器繁忙，请重新再试！');
                            }
                            break;
                        case 611:
                            if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                                UA.versions.iPhone || UA.versions.iPad) { // 移动端
                                window.PSC_YX_API.addToast('领券失败，请重新再试！', 500);
                            } else {
                                alert('领券失败，请重新再试！');
                            }
                            break;
                    }
                }
            },
            error: function(result) {

            }
        });
    }
    $('body').on('click', '.J_F5F5_close', function(e) {
        $(this).closest('.g-F5F5-pop').hide();
    });
})();
