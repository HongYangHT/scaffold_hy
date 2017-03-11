/**
 * dropload
 * 西门(http://ons.me/526.html)
 * 0.9.1(161205)
 */

;
(function($) {
    'use strict';
    var win = window;
    var doc = document;
    var $win = $(win);
    var $doc = $(doc);
    $.fn.dropload = function(options) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('dropload');
            if (!data) {
                $this.data('dropload', new MyDropLoad(this, options));
            } else {
                if (options) {
                    data['init'](options);
                } else {
                    data['init']();
                }
            }
        });
    };
    var MyDropLoad = function(element, options) {
        var me = this;
        me.$element = $(element);
        // 上方是否插入DOM
        me.upInsertDOM = false;
        // loading状态
        me.loading = false;
        // 是否锁定
        me.isLockUp = false;
        me.isLockDown = false;
        // 是否有数据
        me.isData = true;
        me._scrollTop = 0;
        me._threshold = 0;
        me.init(options);
    };

    // 初始化
    MyDropLoad.prototype.init = function(options) {
        var me = this;
        me.opts = $.extend(true, {}, {
            scrollArea: me.$element, // 滑动区域
            domUp: { // 上方DOM
                domClass: 'dropload-up',
                domRefresh: '<div class="dropload-refresh">↓下拉刷新</div>',
                domUpdate: '<div class="dropload-update">↑释放更新</div>',
                domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
            },
            domDown: { // 下方DOM
                domClass: 'dropload-down',
                domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
                domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
                domNoData: '<div class="dropload-noData">暂无数据</div>'
            },
            autoLoad: true, // 自动加载
            distance: 50, // 拉动距离
            threshold: '', // 提前加载距离
            loadUpFn: '', // 上方function
            loadDownFn: '' // 下方function
        }, options);

        // 如果加载下方，事先在下方插入DOM
        if (me.opts.loadDownFn != '' && !me.$element.find('.dropload-down').size()) {
            me.$element.append('<div class="' + me.opts.domDown.domClass + '">' + me.opts.domDown.domRefresh + '</div>');
            me.$domDown = $('.' + me.opts.domDown.domClass);
        }

        // 计算提前加载距离
        if (!!me.$domDown && me.opts.threshold === '') {
            // 默认滑到加载区2/3处时加载
            me._threshold = Math.floor(me.$domDown.height() * 1 / 3);
        } else {
            me._threshold = me.opts.threshold;
        }

        // 判断滚动区域
        if (me.opts.scrollArea == win) {
            me.$scrollArea = $win;
            // 获取文档高度
            me._scrollContentHeight = $doc.height();
            // 获取win显示区高度  —— 这里有坑
            me._scrollWindowHeight = doc.documentElement.clientHeight;
        } else {
            me.$scrollArea = me.opts.scrollArea;
            me._scrollContentHeight = me.$element[0].scrollHeight;
            me._scrollWindowHeight = me.$element.height();
        }
        fnAutoLoad(me);

        // 窗口调整
        $win.on('resize', function() {
            clearTimeout(me.timer);
            me.timer = setTimeout(function() {
                if (me.opts.scrollArea == win) {
                    // 重新获取win显示区高度
                    me._scrollWindowHeight = win.innerHeight;
                } else {
                    me._scrollWindowHeight = me.$element.height();
                }
                fnAutoLoad(me);
            }, 150);

        });

        // 绑定触摸
        me.$element.on('touchstart', function(e) {
            if (!me.loading) {
                fnTouches(e);
                fnTouchstart(e, me);
            }
        });
        me.$element.on('touchmove', function(e) {
            if (!me.loading) {
                fnTouches(e, me);
                fnTouchmove(e, me);
            }
        });
        me.$element.on('touchend', function() {
            if (!me.loading) {
                fnTouchend(me);
            }
        });

        // 加载下方
        me.$scrollArea.on('scroll', function() {
            me._scrollTop = me.$scrollArea.scrollTop();

            // 滚动页面触发加载数据
            if (me.opts.loadDownFn != '' && !me.loading && !me.isLockDown && (me._scrollContentHeight - me._threshold) <= (me._scrollWindowHeight + me._scrollTop)) {
                loadDown(me);
            }
        });
    };

    // touches
    function fnTouches(e) {
        if (!e.touches) {
            e.touches = e.originalEvent.touches;
        }
    }

    // touchstart
    function fnTouchstart(e, me) {
        me._startY = e.touches[0].pageY;
        // 记住触摸时的scrolltop值
        me.touchScrollTop = me.$scrollArea.scrollTop();
    }

    // touchmove
    function fnTouchmove(e, me) {
        me._curY = e.touches[0].pageY;
        me._moveY = me._curY - me._startY;

        if (me._moveY > 0) {
            me.direction = 'down';
        } else if (me._moveY < 0) {
            me.direction = 'up';
        }

        var _absMoveY = Math.abs(me._moveY);

        // 加载上方
        if (me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp) {
            e.preventDefault();

            me.$domUp = $('.' + me.opts.domUp.domClass);
            // 如果加载区没有DOM
            if (!me.upInsertDOM) {
                me.$element.prepend('<div class="' + me.opts.domUp.domClass + '"></div>');
                me.upInsertDOM = true;
            }

            fnTransition(me.$domUp, 0);

            // 下拉
            if (_absMoveY <= me.opts.distance) {
                me._offsetY = _absMoveY;
                // todo：move时会不断清空、增加dom，有可能影响性能，下同
                me.$domUp.html(me.opts.domUp.domRefresh);
                // 指定距离 < 下拉距离 < 指定距离*2
            } else if (_absMoveY > me.opts.distance && _absMoveY <= me.opts.distance * 2) {
                me._offsetY = me.opts.distance + (_absMoveY - me.opts.distance) * 0.5;
                me.$domUp.html(me.opts.domUp.domUpdate);
                // 下拉距离 > 指定距离*2
            } else {
                me._offsetY = me.opts.distance + me.opts.distance * 0.5 + (_absMoveY - me.opts.distance * 2) * 0.2;
            }

            me.$domUp.css({
                'height': me._offsetY
            });
        }
    }

    // touchend
    function fnTouchend(me) {
        var _absMoveY = Math.abs(me._moveY);
        if (me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp) {
            fnTransition(me.$domUp, 300);

            if (_absMoveY > me.opts.distance) {
                me.$domUp.css({
                    'height': me.$domUp.children().height()
                });
                me.$domUp.html(me.opts.domUp.domLoad);
                me.loading = true;
                me.opts.loadUpFn(me);
            } else {
                me.$domUp.css({
                    'height': '0'
                }).on('webkitTransitionEnd mozTransitionEnd transitionend', function() {
                    me.upInsertDOM = false;
                    $(this).remove();
                });
            }
            me._moveY = 0;
        }
    }

    // 如果文档高度不大于窗口高度，数据较少，自动加载下方数据
    function fnAutoLoad(me) {
        if (me.opts.loadDownFn != '' && me.opts.autoLoad) {
            if ((me._scrollContentHeight - me._threshold) <= me._scrollWindowHeight) {
                loadDown(me);
            }
        }
    }

    // 重新获取文档高度
    function fnRecoverContentHeight(me) {
        if (me.opts.scrollArea == win) {
            me._scrollContentHeight = $doc.height();
        } else {
            me._scrollContentHeight = me.$element[0].scrollHeight;
        }
    }

    // 加载下方
    function loadDown(me) {
        me.direction = 'up';
        me.$domDown.html(me.opts.domDown.domLoad);
        me.loading = true;
        me.opts.loadDownFn(me);
    }

    // 锁定
    MyDropLoad.prototype.lock = function(direction) {
        var me = this;
        // 如果不指定方向
        if (direction === undefined) {
            // 如果操作方向向上
            if (me.direction == 'up') {
                me.isLockDown = true;
                // 如果操作方向向下
            } else if (me.direction == 'down') {
                me.isLockUp = true;
            } else {
                me.isLockUp = true;
                me.isLockDown = true;
            }
            // 如果指定锁上方
        } else if (direction == 'up') {
            me.isLockUp = true;
            // 如果指定锁下方
        } else if (direction == 'down') {
            me.isLockDown = true;
            // 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
            me.direction = 'up';
        }
    };

    // 解锁
    MyDropLoad.prototype.unlock = function() {
        var me = this;
        // 简单粗暴解锁
        me.isLockUp = false;
        me.isLockDown = false;
        // 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
        me.direction = 'up';
    };

    // 无数据
    MyDropLoad.prototype.noData = function(flag) {
        var me = this;
        if (flag === undefined || flag == true) {
            me.isData = false;
        } else if (flag == false) {
            me.isData = true;
        }
    };

    // 重置
    MyDropLoad.prototype.resetload = function() {
        var me = this;
        if (me.direction == 'down' && me.upInsertDOM) {
            me.$domUp.css({
                'height': '0'
            }).on('webkitTransitionEnd mozTransitionEnd transitionend', function() {
                me.loading = false;
                me.upInsertDOM = false;
                $(this).remove();
                fnRecoverContentHeight(me);
            });
        } else if (me.direction == 'up') {
            me.loading = false;
            // 如果有数据
            if (me.isData) {
                // 加载区修改样式
                me.$domDown.html(me.opts.domDown.domRefresh);
                fnRecoverContentHeight(me);
                fnAutoLoad(me);
            } else {
                // 如果没数据
                me.$domDown.html(me.opts.domDown.domNoData);
            }
        }
    };

    // css过渡
    function fnTransition(dom, num) {
        dom.css({
            '-webkit-transition': 'all ' + num + 'ms',
            'transition': 'all ' + num + 'ms'
        });
    }
})(window.Zepto || window.jQuery);
(function() {

    /* proxy events*/
    var ctor = function() {};

    function bind(func, context) {
        var FuncProto = Function.prototype;
        var ArrayProto = Array.prototype;
        var nativeBind = FuncProto.bind;
        var slice = ArrayProto.slice;
        var bound, args;
        if (func.bind === nativeBind && nativeBind)
            return nativeBind.apply(func, slice.call(arguments, 1));
        if (!$.isFunction(func))
            throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound))
                return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result)
                return result;
            return self;
        };
    }

    /**
     * [restArgs 把指定索引处之后的参数处理成一个数组]
     * @param  {[Function]} func       [要处理的函数]
     * @param  {[Number]} startIndex   [开始索引]
     * @return {[Function]}            [返回接收参数的函数]
     */
    var restArgs = window.restArgs = function(func, startIndex) {

        startIndex = startIndex == null ? func.length - 1 : +startIndex;

        return function() {
            // 实参的个数 - startIndex
            var length = Math.max(arguments.length - startIndex, 0);
            // 创建一个length长度的稀疏数组
            var rest = Array(length);
            // 给稀疏数组填值
            for (var index = 0; index < length; index++) {
                rest[index] = arguments[index + startIndex];
            }
            switch (startIndex) {
                case 0:
                    return func.call(this, rest);
                case 1:
                    return func.call(this, arguments[0], rest);
                case 2:
                    return func.call(this, arguments[0], arguments[1], rest);
            }
            var args = Array(startIndex + 1);
            for (index = 0; index < startIndex; index++) {
                args[index] = arguments[index];
            }
            args[startIndex] = rest;
            return func.apply(this, args);
        };
    };

    var delay = window.delay = function(later, wait, that, args) {
        var args = Array.prototype.slice.call(arguments, 2);
        // 通过setTimeout来延时执行
        return setTimeout(function() {
            return later.apply(null, args);
        }, wait);
    };

    function debounce(func, wait, immediate) {
        var timeout, result;

        var later = function(context, args) {
            timeout = null;
            if (args) result = func.apply(context, args);
        };

        var debounced = restArgs(function(args) {
            // 一旦存在timeout， 意味之前尝试调用过func  
            // 由于debounce只认最新的一次调用， 所以之前等待执行的func都会被终止  
            if (timeout) clearTimeout(timeout);
            // 如果允许新的调用尝试立即执行，  
            if (immediate) {
                // 如果之前尚没有调用尝试，那么此次调用可以立马执行，否则一定得等待之前的执行完毕  
                var callNow = !timeout;
                // 刷新timeout  
                timeout = setTimeout(later, wait);
                // 如果能被立即执行，立即执行  
                if (callNow) result = func.apply(this, args);
            } else {
                // 否则，这次尝试调用会延时wait个时间  
                timeout = delay(later, wait, this, args);
            }

            return result;
        });

        debounced.cancel = function() {
            clearTimeout(timeout);
            timeout = null;
        };

        return debounced;
    };

    var proxy = {
        $el: $('body'),
        id: 'yxhj',
        ajaxRoot: '',
        voteAjaxRoot: '',
        applyHost: '',
        getUserRoot: '',
        priceArr: [], // 价格排行
        salesArr: [], // 销量排行
        countArr: [], // 综合排行
        voteArr: [], // 人气排行
        makers: [], // 制造商
        categorys: [], // 类目
        goodsDetail: [], // 所有商品
        filterArr: [], // 满足条件的商品
        originalArr: [],
        info: [],
        loadHtml: '<div class="m-0ABF-goods"><div class="m-0ABF-loading"><div class="m-0ABF-loading-bg"></div><div class="m-0ABF-loading-content"><div class="m-0ABF-loading-div"><span class="u-0ABF-loading"></span>&nbsp;&nbsp;Loading...</div></div></div></div>',
        categoryObject: {
            0: [1005007,
                1013005,
                1008012,
                1005008,
                1007000,
                1008013,
                1008011,
                1023000,
                1011002
            ],
            1: [
                1020009,
                1020010,
                1015001

            ],
            2: [1008008,
                1008009,
                1011003,
                1010003,
                1008002

            ],
            3: [1013004,
                1015000,
                1008016,
                1011004

            ],
            4: [1013002,
                1020001,
                1013003,
                1009000

            ],
            5: [1020003,
                1011001,
                1020005,
                1020006,
                1020004,
                1020007

            ],
            6: [1010002,
                1010001,
                1008004,
                1013006
            ],
            7: [1008007,
                1020008

            ],
            8: [1008017,
                1020000,
                1012002,
                1008006,
                1008001,
                1020002,
                1008005,
                1008010,
                1005009

            ],
            9: [1005011,
                1008015,
                1005010,
                1005013,
                1005012,
                1027001,
                1027000

            ],
            10: [1012003,
                1028001,
                1017000

            ],
            11: [1008003,
                1013000,
                1012001,
                1010004,
                1008018

            ],
            12: [1022000,
                1021000,
                1018000,
                1025000

            ]
        },
        categoryItem: ['餐厨用具', '服装', '家纺床品', '家装软饰', '美妆个护', '母婴儿童', '内衣裤袜', '配件配饰', '生活日用', '食品饮料', '文具/音像/宠物', '鞋靴箱包', '周边数码'],
        events: {
            'click .J_0ABF_showList': 'showList', // 显示排序问题
            'click .J_0ABF_showFilter': 'showFilter', // 显示筛选条件
            'click .J_filter_confirm': 'confirmFilter', //确认筛选条件
            'change .YX-N-M-0ABF input[name="list"]': 'changeSelectFilter',
            'change .YX-N-M-0ABF input[name="recommend"]': 'changeSelectFilter',
            'change .YX-N-M-0ABF input[name="maker"]': 'changeSelectFilter',
            'touchend .YX-N-M-0ABF .noUi-handle': 'changeSelectFilter',
            'click .J_filter_reset': 'resetFilter', // 重置筛选条件
            'click .J_filter_clear': 'clearFilter', // 清楚筛选条件
            'click .PSC_J_normal_statistics_Goods': 'voteGoods', // 给goods投票
            'click .J_filter_sellVol': 'sortBySell', // 按销量排行
            'click .J_sort_rq': 'sortByRq', //按人气排行
            'click .J_sort_price_h': 'sortByPriceHight', //按价格从高到低
            'click .J_sort_price_l': 'sortByPriceLow', //按价格从低到高
            'click .J_0ABF_cart': 'addCart',
            'click .m-0ABF-filter-white': 'hideFilter'
        },
        initial: function() {
            this.bindEvents();
            this.getModuleData();
            this.setAjaxRoot();
            this.nouislider();
            this.setShowTab();
            this.renderGoods();

            $('.PSC_YX_J_cart').addClass('PSC_YX_J_cart_Price');
            setTimeout(function() {
                $('.PSC_YX_J_cart_Price').removeClass('PSC_YX_J_cart');
                window.PSC_YX_API.getCart(function(result) {
                    $('.PSC_YX_J_cart_Price').html('&yen;' + result.data.totalPrice);
                });
            }, 100);
        },
        //同时绑定事件
        bindEvents: function() {
            var events = this.events;
            if (!(events || (events = resultFun(this, 'events')))) return this;
            this.unBindEvents();

            // 解析event参数的正则
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            var key, method, match, eventName, selector;
            // 做简单的字符串数据解析
            for (key in events) {
                method = events[key];
                if (!$.isFunction(method)) method = this[events[key]];
                if (!method) continue;
                match = key.match(delegateEventSplitter);
                eventName = match[1], selector = match[2];
                method = bind(method, this);
                eventName += '.delegateEvents-' + this.id;
                if (selector === '') {
                    this.$el.on(eventName, debounce(method, 50));
                } else {
                    this.$el.on(eventName, selector, debounce(method, 50));
                }
            }
            return this;
        },
        //移除事件
        unBindEvents: function() {
            this.$el.off('.delegateEvents-' + this.id);
            return this;
        },
        setAjaxRoot: function() {
            var _host = window.location.host;
            if (_host == 'you.yxp.163.com') {
                this.ajaxRoot = '//you.yxp.163.com/';
                this.voteAjaxRoot = '//dashi.hztest.mail.163.com/cmservice/';
                this.applyHost = '//dashix.hztest.mail.163.com/yxhuanji2/';
                this.getUserRoot = '//you.yxp.163.com/act/pre/hdapi/';
            } else if (_host == 'you.163.com') {
                this.ajaxRoot = '//you.163.com/';
                this.voteAjaxRoot = '//you.163.com/act/hdapi/api3/cmservice/';
                this.applyHost = '//you.163.com/act/api4/yxhuanji2/';
                this.getUserRoot = '//you.163.com/act/hdapi';
            } else {
                this.ajaxRoot = '//you.163.com/';
                this.voteAjaxRoot = '//you.163.com/act/hdapi/api3/cmservice/';
                this.applyHost = '//you.163.com/act/api4/yxhuanji2/';
                this.getUserRoot = '//you.163.com/act/hdapi';
            }

        },
        getModuleData: function() {
            var $info = $('.YX-N-M-0ABF').find('.J_module_info');
            var info = {
                goodsId: $info.find('.goodsId').data('goodsid'),
                topic: $info.find('.topic').data('topic'),
                maxPrice: $info.find('.maxPrice').data('maxprice'),
                pageSize: $info.find('.pageSize').data('pagesize'),
                showMaker: $info.find('.showMaker').data('showmaker'),
                needScenePicUrl:$info.find('.needScenePicUrl').data('needscenepicurl')
            };
            this.info = info;
            this.addLoading();

        },
        addLoading: function() {
            $('.YX-N-M-0ABF').find('.m-0ABF-goods').empty().append(this.loadHtml);
        },
        renderGoods: function() {
            var that = this,
                param = [];
            that.matchParam(param, 'id', that.info.goodsId);
            this.getJsonp(
                'https://spread.mail.163.com/mail/goods/getGroup',
                param,
                function(result) {
                    if (result.code == 200) {
                        var list = result.content.goodsList;
                        that.goodsDetail = list;
                        that.originalArr = result.content.goodsList;
                        that.rankSale(list);
                        that.filterArr = that.salesArr.slice(0);
                        that.renderHtml(that.salesArr.slice(0, that.info.pageSize));
                        that.dropload();
                        that.setMakerAndCategoryArr(list);
                    } else {
                        alert('服务器繁忙，请重新再试！');
                    }
                }
            );
        },
        getAllDetail: function() {
            // 获取类目选中状态的值
            var categorys = [];
            $('.m-0ABF-filter-2').find('input[name="list"]').each(function(i, n) {
                var $n = $(n);
                if ($n.prop('checked')) {
                    categorys.push($n.val());
                }
            });
            var minPrice = parseInt($('.u-0ABF-priceStart').eq(0).find('.u-0ABF-price-text').text());
            var maxPrice = parseInt($('.u-0ABF-priceEnd').eq(0).find('.u-0ABF-price-text').text());
            var makers = [];
            $('.m-0ABF-filter-2').find('input[name="maker"]').each(function(i, n) {
                var $n = $(n);
                if ($n.prop('checked')) {
                    makers.push($n.val());
                }
            });
            var recommends = [];
            $('.m-0ABF-filter-2').find('input[name="recommend"]').each(function(i, n) {
                var $n = $(n);
                if ($n.prop('checked')) {
                    recommends.push($n.val());
                }
            });
            return {
                categorys: categorys,
                minPrice: minPrice,
                maxPrice: maxPrice,
                makers: makers,
                recommends: recommends
            };
        },
        // 排序价格列表函数
        rankPrice: function(list, flag) {
            var that = this,
                listArr = list.slice(0);
            var result = '';
            if (list && list.length) {
                result = listArr.sort(function(itema, itemb) {
                    if (flag) { // 价格从高到低
                        return parseFloat(itemb.notSoldOutGoods.price) - parseFloat(itema.notSoldOutGoods.price);
                    } else { // 价格从低到高
                        return parseFloat(itema.notSoldOutGoods.price) - parseFloat(itemb.notSoldOutGoods.price);
                    }
                });
            }
            that.priceArr = result;
            that.filterArr = that.priceArr.slice(0);
            that.renderHtml(that.priceArr.slice(0, that.info.pageSize));
            that.dropload();
        },
        // 从低到高
        sortByPriceLow: function() {
            $('.J_0ABF_showList').find('span').text('价格由低到高');
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : top;
            this.rankPrice(this.filterArr, false);
            this.hideDropDownList();
        },
        // 从高到低
        sortByPriceHight: function() {
            $('.J_0ABF_showList').find('span').text('价格由高到低');
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : top;
            this.rankPrice(this.filterArr, true);
            this.hideDropDownList();
        },
        addCart: function(e) {
            var _skuid = $(e.target).data('skuid'),
                _img = $(e.target).data('img');
            window.PSC_YX_API.addCart(_skuid, _img, 1, function(_res) {
                var _code = _res.code;
                if (_code == 200) {
                    window.PSC_YX_API.cartPcAnimate(_img, 2000);
                    window.PSC_YX_API.addToast('添加成功', 300);
                    window.PSC_YX_API.getCart(function(result) {
                        $('.PSC_YX_J_cart_Price').html('&yen;' + result.data.totalPrice);
                    });
                } else {
                    // alert('商品已下架！');
                    window.PSC_YX_API.addToast('商品已下架！', 500);
                }
            });
        },
        // 排序销量列表函数
        rankSale: function(list) {
            var that = this,
                listArr = list.slice(0),
                result = '';
            if (listArr && listArr.length) {
                result = listArr.sort(function(itema, itemb) {
                    return parseInt(itema.salesRank) - parseInt(itemb.salesRank);
                });
            }
            that.salesArr = result;
        },
        // 通过条件按销量排行
        sortBySell: function(e) {
            this.rankSale(this.filterArr);
            this.filterArr = this.salesArr.slice(0);
            this.renderHtml(this.salesArr.slice(0, this.info.pageSize));
            this.dropload();
            this.hideDropDownList();
            $('.J_0ABF_showList').find('span').text('人气优先');
            var value = $(e.target).closest('label').find('input[name="type"]').val() || $(e.target).closest('label').find('input[name="type-1"]').val();
            $('.m-0ABF-tab-inner').find('input[type=radio]').each(function(i, n) {
                if ($(n).val() == value) {
                    $(n).prop('checked', true);
                }
            });
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : top;
        },
        setMakerAndCategoryArr: function(list) {
            var that = this,
                makers = [];
            var categoryObject = that.categoryObject;
            var categoryItem = that.categoryItem;
            $.each(list, function(i, item) {
                if (item.extend.maker) {
                    makers.push(item.extend.maker);
                }
                $.each(item.categoryList, function(i, n) {
                    if (n.superCategoryId) {
                        $.each(categoryObject, function(j, cate) {
                            if (($.inArray(n.id, cate) > -1) && $.inArray(categoryItem[j], that.categorys) == -1) {
                                that.categorys.push(categoryItem[j]);
                            }
                        });
                    }
                });
                /*if (item.extend.category && $.inArray(item.extend.category, that.categorys) == -1) {
                    that.categorys.push(item.extend.category);
                }*/
            });
            var categoryHtml = '',
                categoryHtml_1 = '';
            $.each(that.categorys, function(i, n) {
                categoryHtml += '<label><input type="checkbox" name="list" value="' + i + '"><span class="u-0ABF-filter-list-item">' + n + '</span></label>';
                categoryHtml_1 += '<label><input type="checkbox" name="list" value="' + i + '"><span class="u-0ABF-filter-list-item">' + n + '</span></label>';
            });
            $('.YX-N-M-0ABF').find('.m-0ABF-filter-2 .m-0ABF-filter-list-content').empty().append(categoryHtml);
            $('.YX-N-M-0ABF').find('.m-0ABF-filter-1 .m-0ABF-filter-list-content').empty().append(categoryHtml_1);

            function findMost(arr) {
                if (!arr.length) return;
                if (arr.length === 1) return arr[0];
                var res = {};
                // 遍历数组
                for (var i = 0, l = arr.length; i < l; i++) {
                    if (!res[arr[i]]) {
                        res[arr[i]] = 1;
                    } else {
                        res[arr[i]]++;
                    }
                }
                var num = that.info.showMaker;
                while (num > 0) {
                    // 遍历 res
                    var keys = Object.keys(res);
                    var maxNum = 0,
                        maxEle;
                    for (var i = 0, l = keys.length; i < l; i++) {
                        if (res[keys[i]] > maxNum) {
                            maxNum = res[keys[i]];
                            maxEle = keys[i];
                        }
                    }
                    that.makers.push(maxEle);
                    // 将最多的元素值变成0
                    res[maxEle] = 0;
                    num--;
                }
            }
            findMost(makers);
            var makerHtml = '',
                makerHtml_1 = '';
            $.each(that.makers, function(i, n) {
                makerHtml += '<label><input type="checkbox" name="maker" value="' + i + '"><span class="u-0ABF-filter-maker-item">' + n + '</span></label>';
                makerHtml_1 += '<label><input type="checkbox" name="maker" value="' + i + '"><span class="u-0ABF-filter-maker-item">' + n + '</span></label>'
            });
            $('.YX-N-M-0ABF').find('.m-0ABF-filter-2 .m-0ABF-filter-maker-content').empty().append(makerHtml);
            $('.YX-N-M-0ABF').find('.m-0ABF-filter-1 .m-0ABF-filter-maker-content').empty().append(makerHtml);
        },
        // 排序人气排行
        rankVote: function(list) {
            var that = this,
                param = [];
            that.matchParam(param, 'topic', that.info.topic);
            that.getJsonp(
                that.voteAjaxRoot + 'ajax/getVoteResult.do',
                param,
                function(result) {
                    if (result.code == 200) {
                        var res = result.result.itemList.sort(function(itema, itemb) {
                            return itemb.ticketNum - itema.ticketNum;
                        });
                        $.each(res, function(i, item) {
                            for (var i = 0, len = list.length; i < len; i++) {
                                if (item.item == list[i].id) {
                                    that.voteArr.push(list[i]);
                                }
                            }
                        });
                        that.filterArr = that.voteArr.slice(0);
                        that.renderHtml(that.voteArr.slice(0, that.info.pageSize));
                        that.dropload();
                    }
                }
            );
        },
        sortByRq: function(e) {
            $('.J_0ABF_showList').find('span').text('人气优先');
            this.rankVote(this.filterArr);
            this.hideDropDownList();
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : top;
        },
        // 综合排序
        /**
         *  
         */
        rankCount: function(list) {
            var that = this;
            if (list && list.length) {
                // that.countArr = $.map(list,function(item,i){

                // });
            }
        },
        renderHtml: function(list) {
            var html = '',
                endHtml = '',
                comingHtml = '',
                allHtml = '',
                subject = window.psc_act_id;
            if (list.length) {
                $.each(list, function(i, item) {
                    if (item.sellVolume == 0) {
                        endHtml += [
                            '<div class="u-0ABF-goods-item" data-id="' + item.id + '">',
                            (item.extend.maker ? '<span class="u-0ABF-goods-maker">' + item.extend.maker + '</span>' : ''),
                            (item.extend.recommend == 1 ? '<span class="u-0ABF-recommend"></span>' : ''),
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-link PSC_J_normal_statistics_Goods">',
                            '<img data-original="' + item.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload">',
                            '<i></i>',
                            (item.sellVolume == 0 ? '<span class="u-0ABF-goods-sellout">售罄</span>' : '<span class="u-0ABF-goods-sellout">即将售罄</span>'),
                            '</a>',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-title PSC_J_normal_statistics_Goods">' + (item.newItemFlag ? '<span class="u-0ABF-newFlag">新品</span>' : '') + item.title + '</a>',
                            '<p class="u-0ABF-goods-price">',
                            '<span class="u-0ABF-goods-offlinePrice">&yen;' + item.notSoldOutGoods.price + '</span>',
                            (parseFloat(item.notSoldOutGoods.price) == parseFloat(item.unitPrice) ? '' : '<span class="u-0ABF-goods-retailPrice">&yen;' + item.unitPrice + '</span>'),
                            '</p>',
                            '<div class="u-0ABF-goods-btns">',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-btn PSC_J_normal_statistics_Goods">立即购买</a>',
                            '<a href="javascript:;" target="_self" data-img="' + item.notSoldOutGoods.imgUrl + '" data-skuId="' + item.notSoldOutGoods.skuId + '" class="u-0ABF-goods-btn-1 J_0ABF_cart PSC_J_normal_statistics_Goods psc-statistics-' + item.id + '"></a>',
                            '</div>',
                            '</div>'
                        ].join('').trim();
                    } else {
                        html += [
                            '<div class="u-0ABF-goods-item" data-id="' + item.id + '">',
                            (item.extend.maker ? '<span class="u-0ABF-goods-maker">' + item.extend.maker + '</span>' : ''),
                            (item.extend.recommend == 1 ? '<span class="u-0ABF-recommend"></span>' : ''),
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-link PSC_J_normal_statistics_Goods">',
                            '<img data-original="' + item.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload">',
                            '<i></i>',
                            (item.sellVolume == 2 ? '<span class="u-0ABF-goods-sellout">即将售罄</span>' : ''),
                            '</a>',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-title PSC_J_normal_statistics_Goods">' + (item.newItemFlag ? '<span class="u-0ABF-newFlag">新品</span>' : '') + item.title + '</a>',
                            '<p class="u-0ABF-goods-price">',
                            '<span class="u-0ABF-goods-offlinePrice">&yen;' + item.notSoldOutGoods.price + '</span>',
                            (parseFloat(item.notSoldOutGoods.price) == parseFloat(item.unitPrice) ? '' : '<span class="u-0ABF-goods-retailPrice">&yen;' + item.unitPrice + '</span>'),
                            '</p>',
                            '<div class="u-0ABF-goods-btns">',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-btn PSC_J_normal_statistics_Goods">立即购买</a>',
                            '<a href="javascript:;" target="_self" data-img="' + item.notSoldOutGoods.imgUrl + '" data-skuId="' + item.notSoldOutGoods.skuId + '" class="u-0ABF-goods-btn-1 PSC_J_normal_statistics_Goods J_0ABF_cart psc-statistics-' + item.id + '"></a>',
                            '</div>',
                            '</div>'
                        ].join('').trim();
                    }
                });
                allHtml = html + comingHtml + endHtml;
            } else {
                allHtml = '<div class="u-0ABF-no-goods">没有符合条件的商品</div>';
            }
            $('.YX-N-M-0ABF').find('.m-0ABF-goods').empty().append(allHtml);
            this.lazyload();
        },
        loadingWithDetail: function(list) {
            var html = '',
                endHtml = '',
                comingHtml = '',
                allHtml = '',
                subject = window.psc_act_id;
            if (list.length) {
                $.each(list, function(i, item) {
                    if (item.sellVolume == 0) {
                        endHtml += [
                            '<div class="u-0ABF-goods-item" data-id="' + item.id + '">',
                            (item.extend.maker ? '<span class="u-0ABF-goods-maker">' + item.extend.maker + '</span>' : ''),
                            (item.extend.recommend == 1 ? '<span class="u-0ABF-recommend"></span>' : ''),
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-link PSC_J_normal_statistics_Goods">',
                            '<img data-original="' + item.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload">',
                            '<i></i>',
                            (item.sellVolume == 0 ? '<span class="u-0ABF-goods-sellout">售罄</span>' : '<span class="u-0ABF-goods-sellout">即将售罄</span>'),
                            '</a>',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-title PSC_J_normal_statistics_Goods">' + (item.newItemFlag ? '<span class="u-0ABF-newFlag">新品</span>' : '') + item.title + '</a>',
                            '<p class="u-0ABF-goods-price">',
                            '<span class="u-0ABF-goods-offlinePrice">&yen;' + item.notSoldOutGoods.price + '</span>',
                            (parseFloat(item.notSoldOutGoods.price) == parseFloat(item.unitPrice) ? '' : '<span class="u-0ABF-goods-retailPrice">&yen;' + item.unitPrice + '</span>'),
                            '</p>',
                            '<div class="u-0ABF-goods-btns">',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-btn PSC_J_normal_statistics_Goods">立即购买</a>',
                            '<a href="javascript:;" target="_self" data-img="' + item.notSoldOutGoods.imgUrl + '" data-skuId="' + item.notSoldOutGoods.skuId + '" class="u-0ABF-goods-btn-1 J_0ABF_cart PSC_J_normal_statistics_Goods psc-statistics-' + item.id + '"></a>',
                            '</div>',
                            '</div>'
                        ].join('').trim();
                    } else {
                        html += [
                            '<div class="u-0ABF-goods-item" data-id="' + item.id + '">',
                            (item.extend.maker ? '<span class="u-0ABF-goods-maker">' + item.extend.maker + '</span>' : ''),
                            (item.extend.recommend == 1 ? '<span class="u-0ABF-recommend"></span>' : ''),
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-link PSC_J_normal_statistics_Goods">',
                            '<img data-original="' + item.primaryPicUrl + '?imageView&thumbnail=300x300&quality=95" class="J_lazyload">',
                            '<i></i>',
                            (item.sellVolume == 2 ? '<span class="u-0ABF-goods-sellout">即将售罄</span>' : ''),
                            '</a>',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-title PSC_J_normal_statistics_Goods">' + (item.newItemFlag ? '<span class="u-0ABF-newFlag">新品</span>' : '') + item.title + '</a>',
                            '<p class="u-0ABF-goods-price">',
                            '<span class="u-0ABF-goods-offlinePrice">&yen;' + item.notSoldOutGoods.price + '</span>',
                            (parseFloat(item.notSoldOutGoods.price) == parseFloat(item.unitPrice) ? '' : '<span class="u-0ABF-goods-retailPrice">&yen;' + item.unitPrice + '</span>'),
                            '</p>',
                            '<div class="u-0ABF-goods-btns">',
                            '<a href="http://you.163.com/item/detail?id=' + item.id + '&_stat_subject=' + subject + '" class="u-0ABF-goods-btn PSC_J_normal_statistics_Goods">立即购买</a>',
                            '<a href="javascript:;" target="_self" data-img="' + item.notSoldOutGoods.imgUrl + '" data-skuId="' + item.notSoldOutGoods.skuId + '" class="u-0ABF-goods-btn-1 PSC_J_normal_statistics_Goods J_0ABF_cart psc-statistics-' + item.id + '"></a>',
                            '</div>',
                            '</div>'
                        ].join('').trim();
                    }
                });
                allHtml = html + comingHtml + endHtml;
            } else {
                allHtml = '<div class="u-0ABF-no-goods">没有符合条件的商品</div>';
            }
            $('.YX-N-M-0ABF').find('.m-0ABF-goods').append(allHtml);
            this.lazyload();
        },
        lazyload: function() {
            setTimeout(function() {
                PSC_lazyload({
                    inViewTreshhold: 100,
                    opacity: true
                });
            }, 300);
        },
        //公有的call后台函数
        addURIParam: function(uri, params) {
            var url = uri,
                len = params.length;
            if (params && len) {
                url += (uri.indexOf('?') == -1 ? '?' : '&')
                if (len >= 1) {
                    url += ($.map(params, function(n, i) {
                        if (i == len - 1) {
                            return '' + n.name + '=' + n.value;
                        } else {
                            return '' + n.name + '=' + n.value + '&';
                        }
                    }).join(''));
                }
            }
            return url;
        },
        matchParam: function(paramArr, name, value) {
            var param = {},
                arr = paramArr;
            param.name = name;
            param.value = value;
            arr.push(param);
            return arr;
        },
        getJsonp: function(uri, data, cb) {
            var that = this;
            url = that.addURIParam(uri, data);
            $.ajax({
                url: url,
                type: 'GET',
                // dataType:'json',
                dataType: 'jsonp',
                async: false,
                cache: false,
                jsonp: "callback",
                success: function(data) {
                    if (data && data.code) {
                        if ($.isFunction(cb)) {
                            cb(data) || cb;
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
        },
        nouislider: function() {
            var filterProgress = document.getElementById('filterProgress'),
                $startPrice = $('.u-0ABF-priceStart .u-0ABF-price-text'),
                $endPrice = $('.u-0ABF-priceEnd .u-0ABF-price-text');
            var that = this;
            noUiSlider.create(filterProgress, {
                start: [0, that.info.maxPrice],
                step: 20,
                snap: true,
                connect: true,
                range: {
                    'min': 0,
                    '10%': 50,
                    '20%': 100,
                    '30%': 150,
                    '40%': 500,
                    '50%': that.info.maxPrice * .3,
                    '60%': that.info.maxPrice * .4,
                    '70%': that.info.maxPrice * .5,
                    '80%': that.info.maxPrice * .6,
                    '90%': that.info.maxPrice * .9,
                    'max': that.info.maxPrice
                }
            });
            filterProgress.noUiSlider.on('update', function(values, handle) {
                $startPrice.text(parseInt(values[0]));
                $endPrice.text(parseInt(values[1]));
            });
        },
        setShowTab: function() {
            var that = this;
            var offsetTop = $('.YX-N-M-0ABF .m-0ABF-goods').offset().top,
                top = (document.documentElement.scrollTop || document.body.scrollTop);
            if (top > offsetTop) {
                $('.YX-N-M-0ABF .m-0ABF-tab-1').addClass('active');
            } else {
                $('.YX-N-M-0ABF .m-0ABF-tab-1').removeClass('active');
            }
            window.addEventListener('scroll', function() {
                offsetTop = $('.YX-N-M-0ABF .m-0ABF-goods').offset().top;
                var sTop = (document.documentElement.scrollTop || document.body.scrollTop);
                if (sTop > offsetTop) {
                    $('.YX-N-M-0ABF .m-0ABF-tab-1').addClass('active');
                } else {
                    $('.YX-N-M-0ABF .m-0ABF-tab-1').removeClass('active');
                    that.hideDropDownList();
                }
            });

        },
        showList: function(e) {
            var $J_dropDown = $(e.target).closest('.m-0ABF-tab').find('.J_0ABF_dropDown');
            $(e.target).toggleClass('active');
            $J_dropDown.toggleClass('active');
            var value = $(e.target).closest('label').find('input[name="type"]').val() || $(e.target).closest('label').find('input[name="type-1"]').val();
            $('.m-0ABF-tab-inner').find('input[type=radio]').each(function(i, n) {
                if ($(n).val() == value) {
                    $(n).prop('checked', true);
                }
            });
        },
        hideDropDownList: function() {
            var $J_dropDown = $('.J_0ABF_dropDown');

            $J_dropDown.removeClass('active');

            $('.J_0ABF_showList').removeClass('active');
            $J_dropDown.find('input[type="radio"]').prop('checked', false);
        },
        showFilter: function(e) {
            this.hideDropDownList();
            $('.m-0ABF-tab-1').removeClass('active');
            var $J_filter = $('.J_0ABF_filter');
            $('.J_0ABF_showList').find('span').text('人气优先');
            $J_filter.toggleClass('active');
            $('.m-0ABF-filter-btns').addClass('active');
            $('.m-0ABF-filter-bg').show();
            var value = $(e.target).closest('label').find('input[name="type"]').val() || $(e.target).closest('label').find('input[name="type-1"]').val();
            $('.m-0ABF-tab-inner').find('input[type=radio]').each(function(i, n) {
                if ($(n).val() == value) {
                    $(n).prop('checked', true);
                }
            });
            setTimeout(function() {

                $("body,html").css({
                    "overflow": "hidden"
                });
                this.top = document.body.scrollTop || document.documentElement.scrollTop;
                $("body").addClass('open');
            }, 150);
        },
        changeSelectFilter: function() {
            var that = this;
            var $J_filter = $('.J_0ABF_filter');
            var filters = this.getAllDetail();
            var makers = [],
                categorys = [],
                filterArr = [],
                recommends = filters.recommends;
            $.each(filters.makers, function(i, n) {
                makers.push(that.makers[n]);
            });

            $.each(filters.categorys, function(i, n) {
                var item = that.categorys[n];
                var index = $.inArray(item, that.categoryItem);
                categorys = categorys.concat(that.categoryObject[index]);
                // categorys.push(that.categorys[n]);
                // categorys.push(that.categoryObject[that.categoryItem(n)]);
            });
            $.each(that.goodsDetail, function(i, n) {
                $.each(n.categoryList, function(j, cate) {
                    if (cate.superCategoryId) {
                        if (n.notSoldOutGoods.price >= filters.minPrice && n.notSoldOutGoods.price <= filters.maxPrice && (!makers.length || $.inArray(n.extend.maker, makers) != -1) && (!categorys.length || $.inArray(cate.id, categorys) != -1) && (!recommends[0] || (recommends[0] == 1 && n.newItemFlag) ||(recommends[0] == 2 && n.extend.recommend == 1)) && (!recommends[1] || (recommends[1]==1 && n.newItemFlag)||(recommends[1]==2 && n.extend.recommend ==1))) {
                            filterArr.push(n);
                        }
                    }
                });
            });
            that.filterArr = filterArr;
            that.renderHtml(filterArr.slice(0, that.info.pageSize));
            that.dropload();
            /*setTimeout(function() {
                $("body,html").css({
                    "overflow": "hidden"
                });
                this.top = document.body.scrollTop || document.documentElement.scrollTop;
                $("body").addClass('open');
            }, 150);*/
        },
        confirmFilter: function(e) {
            var that = this;
            var $J_filter = $('.J_0ABF_filter');
            var filters = this.getAllDetail();
            var makers = [],
                categorys = [],
                filterArr = [],
                recommends = filters.recommends;
            $.each(filters.makers, function(i, n) {
                makers.push(that.makers[n]);
            });

            $.each(filters.categorys, function(i, n) {
                var item = that.categorys[n];
                var index = $.inArray(item, that.categoryItem);
                categorys = categorys.concat(that.categoryObject[index]);
                // categorys.push(that.categorys[n]);
                // categorys.push(that.categoryObject[that.categoryItem(n)]);
            });
            $.each(that.goodsDetail, function(i, n) {
                $.each(n.categoryList, function(j, cate) {
                    if (cate.superCategoryId) {
                        if (n.notSoldOutGoods.price >= filters.minPrice && n.notSoldOutGoods.price <= filters.maxPrice && (!makers.length || $.inArray(n.extend.maker, makers) != -1) && (!categorys.length || $.inArray(cate.id, categorys) != -1) && (!recommends[0] || (recommends[0] == 1 && n.newItemFlag) ||(recommends[0] == 2 && n.extend.recommend == 1)) && (!recommends[1] || (recommends[1]==1 && n.newItemFlag)||(recommends[1]==2 && n.extend.recommend ==1))) {
                            filterArr.push(n);
                        }
                    }
                });
            });

            $J_filter.toggleClass('active');
            setTimeout(function() {
                $('.m-0ABF-filter-bg').hide();
            }, 400);
            $('.m-0ABF-filter-btns').removeClass('active');
            that.filterArr = filterArr;
            that.renderHtml(filterArr.slice(0, that.info.pageSize));
            that.dropload();
            setTimeout(function() {

                $("body,html").css({
                    "overflow": "auto"
                });
                $("body").removeClass('open');

                document.body.scrollTop = document.documentElement.scrollTop = this.top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : this.top;
            }, 150);
        },
        hideFilter: function() {
            var $J_filter = $('.J_0ABF_filter');
            $J_filter.removeClass('active');
            setTimeout(function() {
                $('.m-0ABF-filter-bg').hide();
            }, 400);
            $('.m-0ABF-filter-btns').removeClass('active');
            setTimeout(function() {

                $("body,html").css({
                    "overflow": "auto"
                });
                $("body").removeClass('open');
            }, 150);
        },
        resetFilter: function(e) {
            var $J_filter = $('.J_0ABF_filter');
            $J_filter.find('input[type="checkbox"]').prop('checked', false);
            this.resetUiSlider();

            var that = this;
            var filters = this.getAllDetail();
            var makers = [],
                categorys = [],
                filterArr = [],
                recommends = filters.recommends;
            $.each(filters.makers, function(i, n) {
                makers.push(that.makers[n]);
            });

            $.each(filters.categorys, function(i, n) {
                var item = that.categorys[n];
                var index = $.inArray(item, that.categoryItem);
                categorys = categorys.concat(that.categoryObject[index]);
                // categorys.push(that.categorys[n]);
                // categorys.push(that.categoryObject[that.categoryItem(n)]);
            });
            $.each(that.goodsDetail, function(i, n) {
                $.each(n.categoryList, function(j, cate) {
                    if (cate.superCategoryId) {
                        if (n.notSoldOutGoods.price >= filters.minPrice && n.notSoldOutGoods.price <= filters.maxPrice && (!makers.length || $.inArray(n.extend.maker, makers) != -1) && (!categorys.length || $.inArray(cate.id, categorys) != -1) && (!recommends[0] || (recommends[0] == 1 && n.newItemFlag) ||(recommends[0] == 2 && n.extend.recommend == 1)) && (!recommends[1] || (recommends[1]==1 && n.newItemFlag)||(recommends[1]==2 && n.extend.recommend ==1))) {
                            filterArr.push(n);
                        }
                    }
                });
            });

            that.filterArr = filterArr;
            that.renderHtml(filterArr.slice(0, that.info.pageSize));
            that.dropload();
            /*$J_filter.toggleClass('active');
            this.filterArr = this.originalArr;
            this.renderHtml(this.filterArr);
            $("body,html").css({"overflow":"auto"});
            $("body").removeClass('open');
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = top > $('.YX-N-M-0ABF').offset().top ? $('.YX-N-M-0ABF').offset().top : top;*/
        },
        resetUiSlider: function() {
            var filterProgress = document.getElementById('filterProgress');
            var that = this;
            filterProgress.noUiSlider.set([0, that.info.maxPrice]);
        },
        // 局部重置
        clearFilter: function(e) {
            var that = this;
            var $content = $(e.target).closest('.m-0ABF-filter-content');
            if ($content.size()) {
                $content.find('input[type="checkbox"]').prop('checked', false);
            } else {
                that.resetUiSlider();
            }
        },
        voteGoods: function(e) {
            var itemId = $(e.target).closest('.u-0ABF-goods-item').attr('data-id'),
                that = this,
                param = [];
            that.matchParam(param, 'topic', that.info.topic);
            that.matchParam(param, 'item', itemId);
            this.getJsonp(
                that.voteAjaxRoot + 'ajax/vote.do',
                param,
                function(result) {

                }
            );
        },
        dropload: function() {
            var page = 1,
                size = proxy.info.pageSize,
                that = this;
            var data = $('.YX-N-M-0ABF').data('dropload');
            if(data){
                data['unlock']();
            }    
            $('.YX-N-M-0ABF').dropload({
                scrollArea: window,
                loadDownFn: function(me) {
                    // 拼接HTML
                    var result = '';
                    var arr = that.filterArr.slice(page * size, (page + 1) * size);
                    if (arr.length) {
                        that.loadingWithDetail(arr);
                    } else {
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    page++;
                    me.resetload();
                },
                loadUpFn: function(me){
                    me.unlock();
                    me.resetload();
                },
                domDown: {
                    domClass: 'dropload-down',
                    domRefresh: '<div class="dropload-refresh"></div>',
                    domLoad: '<div class="dropload-load"><span class="loading"></span></div>',
                    domNoData: '<div class="dropload-noData">opp~,无更多数据...</div>'
                }
            });
        }
    };
    proxy.initial();
    $('body').on('click', '.PSC_J_normal_statistics_Goods', function(e) {
        PSC_C_statistics.normalGoods(this);
    });

})();