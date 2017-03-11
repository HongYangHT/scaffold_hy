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

    var coupon = _cookie.getCookie('PSC_SCAFFOLD_COUPON');
    coupon && ($('.YX-S-M-77DE').find('.u-77DE-input').val(coupon));
    $('.J_77DE_getCoupon').on('click', function(e) {
        var $n = $(e.target) || $(e.currentTarget),
            $parent = $n.closest('.YX-S-M-77DE'),
            coupon = $parent.find('.u-77DE-input').val();
        if (!coupon) {
            $parent.find('.u-77DE-input').addClass('active');
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
                        _cookie.setCookie('PSC_SCAFFOLD_COUPON', coupon, 2 * 60 * 60);
                        window.PSC_YX_API.login();
                    }
                },
                error: function() {

                }
            });
        }
    });

    $('.YX-S-M-77DE').find('.u-77DE-input').focus(function(e) {
        $(this).removeClass('active');
    })

    $('body').on('click', '.YX-S-M-77DE .PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });
})();
