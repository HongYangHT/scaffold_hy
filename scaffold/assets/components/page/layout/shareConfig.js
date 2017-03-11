(function() {
    var $shareInfo = $('.m-psc-shareInfo'),
        img = $.trim($shareInfo.find('.u-psc-shareInfo-img').val()),
        url = $.trim($shareInfo.find('.u-psc-shareInfo-url').val()),
        title = $.trim($shareInfo.find('.u-psc-shareInfo-title').val()),
        desc = $.trim($shareInfo.find('.u-psc-shareInfo-desc').val());
    var title_s = $.trim(document.title),
        meta = document.getElementsByTagName('meta'),
        description = '';
    $.each(meta, function(i, n) {
        if (typeof n.name != "undefined" && n.name.toLowerCase() == 'description') {
            description = $.trim(n.content);
        }
    });
    window.shareConfig = {
        img: img,
        wbpic: img,
        url: url || window.location.href,
        desc: desc || description,
        title: title || title_s,
        timeline_title: title || title_s,
        wContent: desc || description,
        topicId: '23712738912',
        shareList: ['wxFriend', 'wxTimeline', 'weibo', 'QQFriend', 'QQZone', 'yxFriend', 'yxTimeline', 'message', 'copy', 'mail'],
        callback: function(successOrNot, shareToWhichSNS) {

        }
    };
})();
