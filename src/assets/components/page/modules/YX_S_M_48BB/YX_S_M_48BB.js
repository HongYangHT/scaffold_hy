(function() {
    var _cookie = {
        setCookie: function(name, value, expire) {
            var _str = name + "=" + escape(value);
            if (expire > 0) {
                var date = new Date();
                date.setTime(date.getTime() + expire * 1000);
                _str += ";expires=" + date.toGMTString();
            }
            document.cookie = _str;
        },
        getCookie: function(name) {
            var _reg = new RegExp("(^|;|\\s+)" + name + "=([^;]*)(;|$)");
            var _value = document.cookie.match(_reg);
            return (!_value ? null : _value[2]);
        },
        delCookie: function(name) {
            document.cookie = name + '=;expires=-1';
        }
    };

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
    var coupon = _cookie.getCookie('PSC_SCAFFOLD_COUPON');
    coupon && ($('..YX-S-M-48BB').find('.u-48BB-input').val(coupon));

    $('.J_48BB_getCoupon').on('click', function(e) {
        var $n = $(this) || $(e.target) || $(e.currentTarget),
            coupon = $n.siblings('.u-48BB-input').val();
        if (!coupon) {
            $n.siblings('.u-48BB-input').addClass('active');
            return;
        }
        if (window.PSC_SCAFFOLD_UID) {
            PSC_YX_API.YX_exchangeCoupon(coupon);
            _cookie.delCookie('PSC_SCAFFOLD_COUPON');
        } else {
            $.ajax({
                url: 'https://you.163.com/act/hdapi/commonapi/ajax/getUid.do',
                type: 'GET',
                dataType: 'jsonp',
                success: function(result) {
                    if (result.code == 200 && result.content.uid) {
                        window.PSC_SCAFFOLD_UID = result.content.uid;
                        PSC_YX_API.YX_exchangeCoupon(coupon);
                        _cookie.delCookie('PSC_SCAFFOLD_COUPON');
                    } else {
                        if (UA.versions.mobile || UA.versions.ios || UA.versions.android ||
                            UA.versions.iPhone || UA.versions.iPad) { // 移动端
                            _cookie.setCookie('PSC_SCAFFOLD_COUPON', coupon, 2 * 60 * 60);
                            window.PSC_YX_API.login2(window.location.href, function() {
                                window.location.reload();
                            });
                        } else {
                            _cookie.setCookie('PSC_SCAFFOLD_COUPON', coupon, 2 * 60 * 60);
                            window.PSC_YX_API.login();
                        }
                    }

                },
                error: function(result) {

                }
            });
        }

    });
    $('.J_48BB_input').on('focus', function(e) {
        var $n = $(this) || $(e.target) || $(e.currentTarget);
        $n.removeClass('active');
    });

    $('body').on('click', '.YX-S-M-48BB .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();
