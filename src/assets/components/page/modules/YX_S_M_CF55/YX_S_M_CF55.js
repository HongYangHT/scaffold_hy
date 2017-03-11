    (function() {
        if (!Event.prototype.preventDefault) {
            Event.prototype.preventDefault = function() {
                this.returnValue = false;
            };
        }
        if (!Event.prototype.stopPropagation) {
            Event.prototype.stopPropagation = function() {
                this.cancelBubble = true;
            };
        }
        if (!Element.prototype.addEventListener) {
            var eventListeners = [];

            var addEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
                var self = this;
                var wrapper = function(e) {
                    e.target = e.srcElement;
                    e.currentTarget = self;
                    if (typeof listener.handleEvent != 'undefined') {
                        listener.handleEvent(e);
                    } else {
                        listener.call(self, e);
                    }
                };
                if (type == "DOMContentLoaded") {
                    var wrapper2 = function(e) {
                        if (document.readyState == "complete") {
                            wrapper(e);
                        }
                    };
                    document.attachEvent("onreadystatechange", wrapper2);
                    eventListeners.push({
                        object: this,
                        type: type,
                        listener: listener,
                        wrapper: wrapper2
                    });

                    if (document.readyState == "complete") {
                        var e = new Event();
                        e.srcElement = window;
                        wrapper2(e);
                    }
                } else {
                    this.attachEvent("on" + type, wrapper);
                    eventListeners.push({
                        object: this,
                        type: type,
                        listener: listener,
                        wrapper: wrapper
                    });
                }
            };
            var removeEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
                var counter = 0;
                while (counter < eventListeners.length) {
                    var eventListener = eventListeners[counter];
                    if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
                        if (type == "DOMContentLoaded") {
                            this.detachEvent("onreadystatechange", eventListener.wrapper);
                        } else {
                            this.detachEvent("on" + type, eventListener.wrapper);
                        }
                        eventListeners.splice(counter, 1);
                        break;
                    }
                    ++counter;
                }
            };
            Element.prototype.addEventListener = addEventListener;
            Element.prototype.removeEventListener = removeEventListener;
            if (HTMLDocument) {
                HTMLDocument.prototype.addEventListener = addEventListener;
                HTMLDocument.prototype.removeEventListener = removeEventListener;
            }
            if (Window) {
                Window.prototype.addEventListener = addEventListener;
                Window.prototype.removeEventListener = removeEventListener;
            }
        }
    })();
    if (!Object.keys) {
        Object.keys = (function() {
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({
                    toString: null
                }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function(obj) {
                if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

                var result = [];

                for (var prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) result.push(prop);
                }

                if (hasDontEnumBug) {
                    for (var i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                    }
                }
                return result;
            }
        })();
    }
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    if (!Array.prototype.forEach) {

        Array.prototype.forEach = function(callback, thisArg) {

            var T, k;

            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }

            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var O = Object(this);

            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var len = O.length >>> 0;

            // 4. If isCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }

            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }

            // 6. Let k be 0
            k = 0;

            // 7. Repeat, while k < len
            while (k < len) {

                var kValue;

                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c
                // c. If kPresent is true, then
                if (k in O) {

                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    kValue = O[k];

                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    callback.call(T, kValue, k, O);
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined
        };
    }


    (function($) {

        var methods = {
            init: function(options) {
                var o = $.extend({
                    items: 1,
                    itemsOnPage: 1,
                    pages: 0,
                    displayedPages: 5,
                    edges: 2,
                    currentPage: 0,
                    hrefTextPrefix: '#page-',
                    hrefTextSuffix: '',
                    prevText: 'Prev',
                    nextText: 'Next',
                    ellipseText: '&hellip;',
                    ellipsePageSet: true,
                    cssStyle: 'light-theme',
                    listStyle: '',
                    labelMap: [],
                    selectOnClick: true,
                    nextAtFront: false,
                    invertPageOrder: false,
                    useStartEdge: true,
                    useEndEdge: true,
                    onPageClick: function(pageNumber, event) {
                        // Callback triggered when a page is clicked
                        // Page number is given as an optional parameter
                    },
                    onInit: function() {
                        // Callback triggered immediately after initialization
                    }
                }, options || {});

                var self = this;

                o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
                if (o.currentPage)
                    o.currentPage = o.currentPage - 1;
                else
                    o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
                o.halfDisplayed = o.displayedPages / 2;

                this.each(function() {
                    self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
                    methods._draw.call(self);
                });

                o.onInit();

                return this;
            },

            selectPage: function(page) {
                methods._selectPage.call(this, page - 1);
                return this;
            },

            prevPage: function() {
                var o = this.data('pagination');
                if (!o.invertPageOrder) {
                    if (o.currentPage > 0) {
                        methods._selectPage.call(this, o.currentPage - 1);
                    }
                } else {
                    if (o.currentPage < o.pages - 1) {
                        methods._selectPage.call(this, o.currentPage + 1);
                    }
                }
                return this;
            },

            nextPage: function() {
                var o = this.data('pagination');
                if (!o.invertPageOrder) {
                    if (o.currentPage < o.pages - 1) {
                        methods._selectPage.call(this, o.currentPage + 1);
                    }
                } else {
                    if (o.currentPage > 0) {
                        methods._selectPage.call(this, o.currentPage - 1);
                    }
                }
                return this;
            },

            getPagesCount: function() {
                return this.data('pagination').pages;
            },

            setPagesCount: function(count) {
                this.data('pagination').pages = count;
            },

            getCurrentPage: function() {
                return this.data('pagination').currentPage + 1;
            },

            destroy: function() {
                this.empty();
                return this;
            },

            drawPage: function(page) {
                var o = this.data('pagination');
                o.currentPage = page - 1;
                this.data('pagination', o);
                methods._draw.call(this);
                return this;
            },

            redraw: function() {
                methods._draw.call(this);
                return this;
            },

            disable: function() {
                var o = this.data('pagination');
                o.disabled = true;
                this.data('pagination', o);
                methods._draw.call(this);
                return this;
            },

            enable: function() {
                var o = this.data('pagination');
                o.disabled = false;
                this.data('pagination', o);
                methods._draw.call(this);
                return this;
            },

            updateItems: function(newItems) {
                var o = this.data('pagination');
                o.items = newItems;
                o.pages = methods._getPages(o);
                this.data('pagination', o);
                methods._draw.call(this);
            },

            updateItemsOnPage: function(itemsOnPage) {
                var o = this.data('pagination');
                o.itemsOnPage = itemsOnPage;
                o.pages = methods._getPages(o);
                this.data('pagination', o);
                methods._selectPage.call(this, 0);
                return this;
            },

            getItemsOnPage: function() {
                return this.data('pagination').itemsOnPage;
            },

            _draw: function() {
                var o = this.data('pagination'),
                    interval = methods._getInterval(o),
                    i,
                    tagName;

                methods.destroy.call(this);

                tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

                var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

                // Generate Prev link
                if (o.prevText) {
                    methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {
                        text: o.prevText,
                        classes: 'prev'
                    });
                }

                // Generate Next link (if option set for at front)
                if (o.nextText && o.nextAtFront) {
                    methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {
                        text: o.nextText,
                        classes: 'next'
                    });
                }

                // Generate start edges
                if (!o.invertPageOrder) {
                    if (interval.start > 0 && o.edges > 0) {
                        if (o.useStartEdge) {
                            var end = Math.min(o.edges, interval.start);
                            for (i = 0; i < end; i++) {
                                methods._appendItem.call(this, i);
                            }
                        }
                        if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                            $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                        } else if (interval.start - o.edges == 1) {
                            methods._appendItem.call(this, o.edges);
                        }
                    }
                } else {
                    if (interval.end < o.pages && o.edges > 0) {
                        if (o.useStartEdge) {
                            var begin = Math.max(o.pages - o.edges, interval.end);
                            for (i = o.pages - 1; i >= begin; i--) {
                                methods._appendItem.call(this, i);
                            }
                        }

                        if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                            $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                        } else if (o.pages - o.edges - interval.end == 1) {
                            methods._appendItem.call(this, interval.end);
                        }
                    }
                }

                // Generate interval links
                if (!o.invertPageOrder) {
                    for (i = interval.start; i < interval.end; i++) {
                        methods._appendItem.call(this, i);
                    }
                } else {
                    for (i = interval.end - 1; i >= interval.start; i--) {
                        methods._appendItem.call(this, i);
                    }
                }

                // Generate end edges
                if (!o.invertPageOrder) {
                    if (interval.end < o.pages && o.edges > 0) {
                        if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                            $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                        } else if (o.pages - o.edges - interval.end == 1) {
                            methods._appendItem.call(this, interval.end);
                        }
                        if (o.useEndEdge) {
                            var begin = Math.max(o.pages - o.edges, interval.end);
                            for (i = begin; i < o.pages; i++) {
                                methods._appendItem.call(this, i);
                            }
                        }
                    }
                } else {
                    if (interval.start > 0 && o.edges > 0) {
                        if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                            $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                        } else if (interval.start - o.edges == 1) {
                            methods._appendItem.call(this, o.edges);
                        }

                        if (o.useEndEdge) {
                            var end = Math.min(o.edges, interval.start);
                            for (i = end - 1; i >= 0; i--) {
                                methods._appendItem.call(this, i);
                            }
                        }
                    }
                }

                // Generate Next link (unless option is set for at front)
                if (o.nextText && !o.nextAtFront) {
                    methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {
                        text: o.nextText,
                        classes: 'next'
                    });
                }

                if (o.ellipsePageSet && !o.disabled) {
                    methods._ellipseClick.call(this, $panel);
                }

            },

            _getPages: function(o) {
                var pages = Math.ceil(o.items / o.itemsOnPage);
                return pages || 1;
            },

            _getInterval: function(o) {
                return {
                    start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
                    end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
                };
            },

            _appendItem: function(pageIndex, opts) {
                var self = this,
                    options, $link, o = self.data('pagination'),
                    $linkWrapper = $('<li></li>'),
                    $ul = self.find('ul');

                pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

                options = {
                    text: pageIndex + 1,
                    classes: ''
                };

                if (o.labelMap.length && o.labelMap[pageIndex]) {
                    options.text = o.labelMap[pageIndex];
                }

                options = $.extend(options, opts || {});

                if (pageIndex == o.currentPage || o.disabled) {
                    if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
                        $linkWrapper.addClass('disabled');
                    } else {
                        $linkWrapper.addClass('active');
                    }
                    $link = $('<span class="current">' + (options.text) + '</span>');
                } else {
                    $link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
                    $link.click(function(event) {
                        return methods._selectPage.call(self, pageIndex, event);
                    });
                }

                if (options.classes) {
                    $link.addClass(options.classes);
                }

                $linkWrapper.append($link);

                if ($ul.length) {
                    $ul.append($linkWrapper);
                } else {
                    self.append($linkWrapper);
                }
            },

            _selectPage: function(pageIndex, event) {
                var o = this.data('pagination');
                o.currentPage = pageIndex;
                if (o.selectOnClick) {
                    methods._draw.call(this);
                }
                return o.onPageClick(pageIndex + 1, event);
            },


            _ellipseClick: function($panel) {
                var self = this,
                    o = this.data('pagination'),
                    $ellip = $panel.find('.ellipse');
                $ellip.addClass('clickable').parent().removeClass('disabled');
                $ellip.click(function(event) {
                    if (!o.disable) {
                        var $this = $(this),
                            val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
                        $this
                            .html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
                            .find('input')
                            .focus()
                            .click(function(event) {
                                // prevent input number arrows from bubbling a click event on $ellip
                                event.stopPropagation();
                            })
                            .keyup(function(event) {
                                var val = $(this).val();
                                if (event.which === 13 && val !== '') {
                                    // enter to accept
                                    if ((val > 0) && (val <= o.pages))
                                        methods._selectPage.call(self, val - 1);
                                } else if (event.which === 27) {
                                    // escape to cancel
                                    $ellip.empty().html(o.ellipseText);
                                }
                            })
                            .bind('blur', function(event) {
                                var val = $(this).val();
                                if (val !== '') {
                                    methods._selectPage.call(self, val - 1);
                                }
                                $ellip.empty().html(o.ellipseText);
                                return false;
                            });
                    }
                    return false;
                });
            }

        };

        $.fn.pagination = function(method) {
            // Method calling logic
            if (methods[method] && method.charAt(0) != '_') {
                var data = $(this).data('pagination');
               if(!data){
                   if(typeof method === 'object' || !method){
                        methods.init.apply(this,arguments);
                   }else{
                       methods.init.apply(this);
                   }
              }
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.pagination');
            }

        };

    })(jQuery);



    (function() {
        var oPage = {
            makerArr: [],
            categoryArr: [],
            categoryNumber: [],
            ajaxRoot: '',
            voteAjaxRoot: '',
            applyHost: '',
            getUserRoot: '',
            renderGoodsData: [],
            id: '',
            needScenePicUrl: 0,
            topic:'',
            itemsOnpage: '',
            maxPrice: '',
            makerNumber: '',
            makerImgArr:[],

            init: function() {
                var _this = this;
                _this.allGoodsData = null;
                _this.nowGoodsData = null;
                _this.rankList = null;
                _this.orderFlag = 0;

                
                var canchu=[1005007,1013005,1008012,1005008,1007000,1008013,1008011,1023000,1011002],
                    clothes=[1020009,1020010,1015001],
                    chuangpin=[1008008,1008009,1011003,1010003,1008002],
                    ruanshi=[1013004,1015000,1008016,1011004],
                    meizhuang=[1013002,1020001,1013003,1009000],
                    mother=[1020003,1011001,1020005,1020006,1020004,1020007],
                    neiyi=[1010002,1010001,1008004,1013006],
                    peishi=[1008007,1020008],
                    shenghuo=[1008017,1020000,1012002,1008006,1008001,1020002,1008005,1008010,1005009],
                    food=[1005011,1008015,1005010,1005013,1005012,1027001,1027000],
                    mix=[1012003,1028001,1017000],
                    shoe=[1008003,1013000,1012001,1010004,1008018],
                    digital=[1022000,1021000,1018000,1025000];
                     
                _this.newCategory=[
                    canchu,
                    clothes,
                    chuangpin,
                    ruanshi,
                    meizhuang,
                    mother,
                    neiyi,
                    peishi,
                    shenghuo,
                    food,
                    mix,
                    shoe,
                    digital
                ];
                _this.newCategoryName=['餐厨用具','服装','家纺床品','家装软饰','美妆个护','母婴儿童','内衣裤袜','配件配饰','生活日用','食品饮料','文具/音像/宠物','鞋靴箱包','周边数码'];
                
                _this.setAjaxRoot();
                _this.getParam();
                _this.initStatus();
                _this.rangeSlider();
                // _this.fLazyload();
                _this.bindEvents();
                _this.setqrCode();

            },
            getParam: function() {
                var _this = this;
                $('.YX-S-M-CF55 .J_module_info ').each(function(i, n) {
                    _this.id = $(n).find('.goodsId').data('goodsid'),
                        _this.needScenePicUrl = $(n).find('.needScenePicUrl').data('needscenepicurl'),
                        _this.itemsOnpage = $(n).find('.itemsOnPage').data('itemsonpage'),
                        _this.topic=$(n).find('.topic').data('topic'),
                        _this.qrcodeLink=$(n).find('.qrcodeLink').data('qrcodelink'),
                        _this.maxPrice = $(n).find('.maxPrice').data('maxprice'),
                        _this.makerNumber = $(n).find('.makerNumber').data('makernumber');
                        var hotMakerImg1 = $(n).find('.hotMakerImg1').data('hotmakerimg1'),
                            hotMakerImg2 = $(n).find('.hotMakerImg2').data('hotmakerimg2'),
                            hotMakerImg3 = $(n).find('.hotMakerImg3').data('hotmakerimg3'),
                            hotMakerImg4 = $(n).find('.hotMakerImg4').data('hotmakerimg4'),
                            hotMakerImg5 = $(n).find('.hotMakerImg5').data('hotmakerimg5'),
                            hotMakerImg6 = $(n).find('.hotMakerImg6').data('hotmakerimg6');
                       _this.makerImgArr.push(hotMakerImg1,hotMakerImg2,hotMakerImg3,hotMakerImg4,hotMakerImg5,hotMakerImg6);

                    // console.log(_this.needScenePicUrl + ' ' + _this.itemsOnpage + ' ' + _this.makerNumber + ' ' + _this.maxPrice);
                 
                });
            },
            initStatus: function() {
                var _this = this;
                /* _modal='<div class="g-pop">'+
                                '<div class="u-CF55-modal f-CF55-hide J_modal"></div>'+
                                '<div class="load-6 f-CF55-hide J_loading">'+
                                    // '<div class="letter-holder">'+
                                    //     '<div class="l-1 letter">L</div>'+
                                    //     '<div class="l-2 letter">o</div>'+
                                    //     '<div class="l-3 letter">a</div>'+
                                    //     '<div class="l-4 letter">d</div>'+
                                    //     '<div class="l-5 letter">i</div>'+
                                    //     '<div class="l-6 letter">n</div>'+
                                    //     '<div class="l-7 letter">g</div>'+
                                    //     '<div class="l-8 letter">.</div>'+
                                    //     '<div class="l-9 letter">.</div>'+
                                    //     '<div class="l-10 letter">.</div>'+
                                    // '</div>'
                                '</div>'
                            '</div>';
                $('body').append(_modal);*/
                // _this.modalLoading('.J_loading');
                $.ajax({
                    url: 'https://spread.mail.163.com/mail/goods/getGroup?id='+_this.id,
                    type: 'GET',
                    dataType: 'jsonp',
                    async: false,
                    cache: false,
                    success: function(data) {
                        if (data && data.code) {
                            var tempGoods=[];
                            tempGoods=data.content.goodsList.slice(0);
                            $.each(tempGoods,function(i,v){
                                if(v.categoryList[1].superCategoryId){
                                    for(var j=0;j<_this.newCategory.length;j++){
                                        if($.inArray(v.categoryList[1].id, _this.newCategory[j]) >= 0)
                                            v.categoryList[1].name=_this.newCategoryName[j];
                                    }
                                }
                            });

                            
                            _this.allGoodsData = tempGoods;
                            _this.nowGoodsData = tempGoods;

                            // _this.allGoodsData = data.content.goodsList;
                            // _this.nowGoodsData = data.content.goodsList;
                            var GoodsList = tempGoods.slice(0);
                            _this.renderGoodsData = _this.orderByAmount(_this.allGoodsData);
                            _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needscenepicurl);

                            $('.J_pagination').pagination({
                                items: _this.renderGoodsData.length,
                                itemsOnPage: _this.itemsOnpage,
                                displayedPages: 3,
                                edges: 1,
                                cssStyle: 'light-theme',
                                prevText: '&lt;上一页',
                                nextText: '下一页&gt;',
                                onPageClick: function(pageNumber, event) {
                                    var that = this;
                                    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                                    var titleBarTop = $('.m-titleBar').offset().top-60;
                                    if (scrollTop > 826) {
                                        $('html,body').animate({
                                            scrollTop: titleBarTop + 'px'
                                        }, 500);
                                    }
                                    _this.renderByData(_this.renderGoodsData.slice(((pageNumber - 1) * that.itemsOnPage), pageNumber * that.itemsOnPage), _this.renderGoodsData.length, _this.needscenepicurl);
                                    // Callback triggered when a page is clicked
                                    // Page number is given as an optional parameter
                                    // console.log(pageNumber);
                                }
                            });

                            // _this.renderByData(_this.orderByAmount(_this.allGoodsData)); //默认按照销量来排序
                            _this.orderFlag = 0;

                            var makerArr = [];
                            var categoryArr = [];
                            $.each(GoodsList, function(i, item) {
                                if (item.extend.maker) {
                                    makerArr.push(item.extend.maker);
                                }

                                $.each(item.categoryList,function(i,k){
                                    if(k.superCategoryId!=0){
                                        categoryArr.push(k.name);
                                    }
                                })

                            });
                            _this.findMost(makerArr);
                            _this.findNum(categoryArr);
                            var typetpl = '';

                            $.each(_this.categoryNumber, function(i, n) {
                                typetpl += '<li data-type="' + i + '" class=""><a href="javascript:;"><span class="checkboxIcon"></span>' + i + '</a><span>(' + n + ')</span></li>';
                            });

                             var makertpl = '';
                            $.each(_this.makerArr, function(i, n) {
                           
                                makertpl += '<li data-type="' + _this.makerArr[i] + '"><a href="javascript:;"><img  src="'+_this.makerImgArr[i]+'" class="u-goods-makerImg"><div class="u-goodsMakerModal"></div><div class="u-goodsMakerDesc">' + _this.makerArr[i] + '</div></a></li>';
                            });

                            $('.J_goods_type').empty().html(typetpl);
                            $('.J_goods_maker').empty().html(makertpl);
                            //  $('.J_modal').hide();
                            // $('.J_loading').hide();
                        }
                    },
                    error: function(xhr, errorType, error) {}
                });
                var _pop='';
                _pop+=  '<div class="g-pop">'+
                            '<div class="u-CF55-modal f-CF55-hide  J_modal"></div>'+
                            '<div class="m-CF55-pop m-pop-remind f-CF55-hide J_pop J_pop_remind">'+
                                '<a href="javascript:;" class="u-close J_pop_close"></a>'+
                                '<img src="https://nos.netease.com/yanxuan/14875707806450257.png" class="remindImg">'+
                                '<p class="u-tlt" id="txtRemind"></p>'+
                            '</div>'+
                        '</div>';
                $('body').append(_pop);
               
            },
            findMost: function(arr) {
                var _this = this;
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

                var num = _this.makerNumber;
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
                    _this.makerArr.push(maxEle);
                    // 将最多的元素值变成0
                    res[maxEle] = 0;
                    num--;
                }
            },
            findNum: function(arr) {
                var _this = this;
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
                _this.categoryNumber = res;
            },

            setAjaxRoot: function() {
                var _host = window.location.host;
                if (_host == 'you.yxp.163.com') {
                    this.ajaxRoot = '//you.yxp.163.com/';
                    this.voteAjaxRoot = 'http://dashi.hztest.mail.163.com/cmservice/';
                    this.applyHost = 'http://dashix.hztest.mail.163.com/yxhuanji2/';
                    this.getUserRoot = 'http://you.yxp.163.com/act/pre/hdapi/';
                    this.getQrcode='//you.yxp.163.com/act/pre/hdapi/';
                } else if (_host == 'you.163.com') {
                    this.ajaxRoot = 'http://you.163.com/';
                    this.voteAjaxRoot = 'http://you.163.com/act/hdapi/api3/cmservice/';
                    this.applyHost = 'http://you.163.com/act/api4/yxhuanji2/';
                    this.getUserRoot = 'http://you.163.com/act/hdapi';
                    this.getQrcode='//you.163.com/act/hdapi';
                } else {
                    this.ajaxRoot = 'http://you.yxp.163.com/api3/';
                    this.voteAjaxRoot = 'http://dashi.hztest.mail.163.com/cmservice/';
                    this.applyHost = 'http://dashix.hztest.mail.163.com/yxhuanji2/';
                    this.getUserRoot = 'http://you.yxp.163.com/act/pre/hdapi/';
                    this.getQrcode='//you.yxp.163.com/act/pre/hdapi/';
                }
            },
            setqrCode: function() {
                var _this = this;
                $.ajax({
                    url: _this.applyHost + 'ajax/getActInfo.do',
                    type: 'GET',
                    dataType: 'jsonp',
                    async: false,
                    cache: false,
                    success: function(result) {
                            if(result.code==200 && result.content.uid){
                                $(".J_codeMask").hide();
                                $(".J_codeLogin").hide();
                                $(".J_code").html('<img src="'+_this.getQrcode+'/commonapi/ajax/genQRCode.do?text='+_this.qrcodeLink+'?uid=' +result.content.uid + '&size=200"/>');
                                // $.ajax({
                                //     url: 'https://you.163.com/act/api4/yxhuanji2/ajax/initialize.do',
                                //     type: 'GET',
                                //     dataType: 'jsonp',
                                //     async: false,
                                //     cache: false,
                                //     success: function(result) {
                                //     },
                                //     error: function(xhr, errorType, error) {}
                                // });
                            }
                    },
                    error: function(xhr, errorType, error) {}
                });
            },
            bindEvents: function() {
                var _this = this;
                $(".J_codeLogin").on("click", function() {
                    window.PSC_YX_API.login();
                }); 
                
                $('.J_goods_type').on('click', 'li a', function() {
                    $(this).parent().toggleClass('active');
                     FilterFun();
                     $('.J_pagination').pagination('drawPage', 1);

                });
                $('.J_goods_recommand').on('click', 'li a', function() {
                    $(this).parent().toggleClass('active');
                     FilterFun();
                     $('.J_pagination').pagination('drawPage', 1);

                });
                $('.J_goods_maker').on('click', 'li a', function() {
                    $(this).parent().toggleClass('active');
                     FilterFun();
                     $('.J_pagination').pagination('drawPage', 1);
                });

                $('.J_type_reset').on('click', function() {
                    $('.u-goods-type .active').removeClass('active');
                    FilterFun();
                    $('.J_pagination').pagination('drawPage', 1);
                });

                $('.J_range_reset').on('click', function() {
                    $('#connect')[0].noUiSlider.set([0, _this.maxPrice]);
                    FilterFun();
                    $('.J_pagination').pagination('drawPage', 1);
                });
                $('.J_recommand_reset').on('click', function() {
                    $('.u-goods-recommand .active').removeClass('active');
                    FilterFun();
                    $('.J_pagination').pagination('drawPage', 1);
                });
                $('.J_maker_reset').on('click', function() {
                    $('.u-goods-maker .active').removeClass('active');
                   FilterFun();
                   $('.J_pagination').pagination('drawPage', 1);
                });
                $('.u-goods-maker').on('click', 'li a', function() {
                   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    var titleBarTop = $('.m-titleBar').offset().top;
                    if (scrollTop > 826) {
                        $('html,body').animate({
                            scrollTop: titleBarTop + 'px'
                        }, 500);
                    }

                });

                $('.J_order').on('click', function() {
                    if (!$(this).hasClass('active')) {
                        $('.u-order').removeClass('active');
                        $(this).addClass('active');
                        var type = $(this).attr('data-type');
                        switch (type) {
                            case '0':
                                $.ajax({
                                    url: _this.voteAjaxRoot + 'ajax/getVoteResult.do?topic='+_this.topic,
                                    type: 'get',
                                    dataType: 'jsonp',
                                    async: false,
                                    cache: false,
                                    success: function(data) {
                                        if (data && data.code) {
                                            switch (data.code) {
                                                case 200:
                                                    var rank = data.result.itemList;
                                                    _this.rankList = rank;
                                                    _this.renderGoodsData = _this.orderByArr(_this.nowGoodsData, rank);
                                                    _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                    
                                                    $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                                                    $('.J_pagination').pagination('drawPage', 1);
                                                  
                                                    _this.orderFlag = 1; //1 表示人气排名
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }
                                    },
                                    error: function(xhr, errorType, error) {}
                                });
                                break;
                            case '1':
                                if (_this.nowGoodsData.length != 0) {
                                    _this.renderGoodsData = _this.orderByAmount(_this.nowGoodsData);
                                    _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                                    $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                                    $('.J_pagination').pagination('drawPage', 1);
                                   
                                    _this.orderFlag = 0; //销量排名
                                };
                                break;
                        }
                    }
                });
                $('.J_order_prize').on('click', function() {
                    if (!$(this).hasClass('active')) {
                        $('.u-order').removeClass('active up down');
                        $(this).addClass('active up');
                        if (_this.nowGoodsData.length != 0) {
                            _this.renderGoodsData = _this.orderByPrice(_this.nowGoodsData);
                          
                            _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                            $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                            $('.J_pagination').pagination('drawPage', 1);

                            //价格从低到高排序
                        }
                        _this.orderFlag = 2;

                    } else if ($(this).hasClass('up')) {
                        $('.u-order').removeClass('active up down');
                        $(this).addClass('active down');
                        if (_this.nowGoodsData.length != 0) {
                            _this.renderGoodsData = _this.orderByPrice(_this.nowGoodsData, true);
                            _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                            $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                            $('.J_pagination').pagination('drawPage', 1);

                            //价格从高到低排序
                        }
                        _this.orderFlag = 3;

                    } else if ($(this).hasClass('down')) {
                        $('.u-order').removeClass('active up down');
                        $(this).addClass('active up');
                        if (_this.nowGoodsData.length != 0) {
                            _this.renderGoodsData = _this.orderByPrice(_this.nowGoodsData);
                            _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                            $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                            $('.J_pagination').pagination('drawPage', 1);
                        }
                        _this.orderFlag = 2;

                    } else {
                        $('.u-order').removeClass('active up down');
                        $(this).addClass('active up');
                        if (_this.nowGoodsData.length != 0) {
                            _this.renderGoodsData = _this.orderByPrice(_this.nowGoodsData);
                            _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                            $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                            $('.J_pagination').pagination('drawPage', 1);
                        }
                        _this.orderFlag = 2;
                    }
                });
                $('body').on('click', '.J_btn_check', function() {
                    var itemid = $(this).attr('data-itemid');
                    $.ajax({
                        url: _this.voteAjaxRoot + 'ajax/vote.do?topic='+_this.topic,
                        type: 'get',
                        dataType: 'jsonp',
                        data: {
                            item: itemid
                        },
                        async: false,
                        cache: false,
                        success: function(data) {},
                        error: function(xhr, errorType, error) {}
                    });
                });
                $('body').on('click', '.J_btn_cart ', function() {
                    var _img = $(this).attr('data-img'),
                        _skuid = $(this).attr('data-skuid');
                    window.PSC_YX_API.addCart(_skuid, _img, 1, function(_res) {
                        var _code = _res.code;
                        if (_code == 200) {
                            window.PSC_YX_API.cartPcAnimate(_img, 2000);
                        } else {
                            _this.modalPop('.J_pop_remind', '当前款式的商品已经售罄了!<br>可以点击<span class="f-font-red">查看详情</span>看看有无其他款式喔');
                        }
                    });
                });
                var FilterFun = function() {
                    var goodsTypeArr = [];
                    var ItemNew = false;
                    var ItemRecommend = false;
                    var priceRange = [];
                    var goodsmakerArr = [];

                    $('.u-goods-type .active').each(function(i, e) {
                        goodsTypeArr.push($(e).attr('data-type'));
                    });

                     $('.u-goods-recommand .active').each(function(i, e) {
                        switch ($(e).attr('data-type')) {
                            case '0':
                                ItemNew = true;
                                break;
                            case '1':
                                ItemRecommend = true;
                                break;
                        }
                    });

                    $('.u-goods-maker .active').each(function(i, e) {
                        goodsmakerArr.push($(e).attr('data-type'));
                    });
                    priceRange[0] = parseInt($('.u-price-text .priceStart .price').text());
                    priceRange[1] = parseInt($('.u-price-text .priceEnd .price').text());

                    var filterData = _this.allGoodsData;

                    filterData = _this.filterByOpt(filterData, {
                        typeArr: goodsTypeArr,
                        priceArr: priceRange,
                        makerArr: goodsmakerArr,
                        ItemNew:ItemNew,
                        ItemRecommend:ItemRecommend
                    });

                    switch (_this.orderFlag) {
                        case 0:
                            filterData = _this.orderByAmount(filterData); //销量从高到低
                            break;
                        case 1:
                            filterData = _this.orderByArr(filterData, _this.rankList); //人气从高到低
                            break;
                        case 2:
                            filterData = _this.orderByPrice(filterData); //价格从高到低
                            break;
                        case 3:
                            filterData = _this.orderByPrice(filterData, true); //价格从低到高
                            break;
                    }

                    _this.nowGoodsData = filterData;
                    if (filterData.length != 0) {
                        _this.renderGoodsData = filterData;
                        _this.renderByData(_this.renderGoodsData.slice(0, _this.itemsOnpage), _this.renderGoodsData.length, _this.needScenePicUrl);
                        $('.J_pagination').pagination('updateItems', _this.renderGoodsData.length);
                    } else {
                        if (_this.allGoodsData) {
                            $('.m-goodsEmpty').show();
                        }
                        $('.m-goodsList').hide();
                        $('.J_goods_count').text('0');
                    }
                };
              
                $('#connect')[0].noUiSlider.on('update', function() {
                 FilterFun();
                 $('.J_pagination').pagination('drawPage', 1);
                });
            },

            separateArr: function(data) {
                var arr1 = [],
                    arr2 = [];
                for (var i = 0; i < data.length; i++) {
                    //售罄的放在最后面，100表示售罄
                    if (data[i].sellVolume == 0) {
                        arr2.push(data[i]);
                    } else {
                        arr1.push(data[i]);
                    }
                }
                return arr1.concat(arr2);
            },
            orderByNew:function(data){
                var _this = this;
                var result =[];

                $.each(data,function(i,v){
                    if(v.newItemFlag){   //newItemFlag为true则为新品
                        result.push(v);
                    }
                });
                return _this.separateArr(result);
            },
            orderByRecommand:function(data){
                var _this = this;
                var result =[];

                $.each(data,function(i,v){
                    if(v.extend.recommend==1){  //recommend==1为推荐
                        result.push(v);
                    }
                });
                return _this.separateArr(result);
            },
            orderByArr: function(data, arr) {
                //通过比较获得点击人气排名id来重排数组
                var _this = this;
                var result = [];

                // console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < data.length; j++) {
                        if (data[j].id == arr[i].item) {
                            result.push(data[j]);
                            break;
                        }
                    }
                }
                return _this.separateArr(result);
            },
            orderByAmount: function(data) {
                var _this = this;
                var result = data.sort(function(a, b) {
                    var amountA = a.amountRank;
                    var amountB = b.amountRank;

                    return parseInt(amountA) - parseInt(amountB);

                });
                return _this.separateArr(result);
            },
            orderByPrice: function(data, flag) {
                var _this = this;
                var result = data.sort(function(a, b) {
                    if (flag) {
                        return parseFloat(b.notSoldOutGoods.price) - parseFloat(a.notSoldOutGoods.price);
                        //价格从大到小
                    } else {
                        return parseFloat(a.notSoldOutGoods.price) - parseFloat(b.notSoldOutGoods.price);
                    }
                });
                return _this.separateArr(result);
            },

            filterByOpt: function(data, opt) {
                var _this = this;
                var result = [];
                if (data && data.length) {
                    var len = data.length;
                    for (var i = 0; i < len; i++) {
                        var flag = true;
                        var goodsType='';
                        $.each(data[i].categoryList,function(i,k){
                            if(k.superCategoryId!=0){
                                 goodsType = k.name;
                            }
                        });
                       
                        var offPrice = parseFloat(data[i].notSoldOutGoods.price);
                        var goodsmaker = data[i].extend.maker;
                        var newItemFlag=data[i].newItemFlag;
                        var recommend=data[i].extend.recommend;


                        if (opt.typeArr.length > 0) {
                            flag = flag && ($.inArray(goodsType, opt.typeArr) >= 0);
                        }
                        if (opt.priceArr.length > 0) {
                            flag = flag && (offPrice <= opt.priceArr[1] && offPrice >= opt.priceArr[0]);
                        }
                        if (opt.makerArr.length > 0) {
                            flag = flag && ($.inArray(goodsmaker, opt.makerArr) >= 0);
                        }
                        if(opt.ItemNew){
                          flag = flag && (newItemFlag);
                        }
                        if(opt.ItemRecommend){
                            flag = flag && (recommend=='1');
                        }

                        if (flag) {
                            result.push(data[i]);
                        }
                    }
                }
                return result;
            },
            renderByData: function(data, length, needScenePicUrl) {
                var _this = this;
                var subject = window.psc_act_id;
                var tpl = '';
                var hasUsed = 0;
                for (var i = 0; i < data.length; i++) {

                    if (data[i].extend.maker) {
                        var maker = data[i].extend.maker;
                    } else {
                        maker = '';
                    }

                    if (data[i].extend.recommend=='1') {
                        var recommend =true;
                    } else {
                        recommend =false;
                    }

                    var offPrice = parseFloat(data[i].notSoldOutGoods.price);
                    var unitPrice = parseFloat(data[i].unitPrice);
                    var unitP = ''
                    if (unitPrice > offPrice) {
                        unitP = '<span class="unitPrice">&yen;' + unitPrice + '</span>'
                    } else {
                        unitP = '';
                    }

                    var modal = '';
                    if (data[i].sellVolume == 0) {
                        modal = '<div class="u-goodsSoldState isSoldOut">' + '<p>已售罄</p>' + '</div>';
                        // console.log("售罄+1");
                    } else if (data[i].sellVolume == 2) {
                        modal = '<div class="u-goodsSoldState">' + '<p>即将售罄</p>' + '</div>';
                        // console.log("即将售罄+1");
                    } else {
                        modal = '';
                    }
                    hasUsed++;
                    tpl += (hasUsed % 3 ? '<li class="u-goods">' : '<li class="u-goods" style="margin-right:0;">') + 
                    '<div class="u-goodsImg">' + ((maker == '') ? '' : '<div class="u-maker">' + maker + '</div>') +
                    ((recommend) ? '<div class="u-CF55-recommend"><img src="https://mimg.127.net/hz/uploader/20170303/14885217059951497.png"></div>':'') +
                    (needScenePicUrl ? '<img data-original="' + data[i].scenePicUrl + '?imageView&quality=60&thumbnail=330x330" class="J_lazyload">' : '<img data-original="' + data[i].primaryPicUrl + '?imageView&quality=60&thumbnail=330x330" class="J_lazyload">') +
                        modal + '<div class="u-goodsOptModal"></div>' + 
                    '<div class="u-goodsOpt">' + '<a target="_blank" href="http://you.163.com/item/detail?id=' + data[i].id + '&_stat_subject=' + subject + '" data-itemid="' + data[i].id + '" class="u-btn-check J_btn_check PSC_J_normal_statistics_Goods PSC_statistics_' + data[i].id + '"><span class="checkIcon"></span>查看详情</a>' + 
                    '<a href="javascript:;" class="u-btn-cart J_btn_cart PSC_J_normal_statistics_Goods PSC_statistics_' + data[i].id + '" data-img="' + data[i].notSoldOutGoods.imgUrl + '?imageView&quality=60&thumbnail=330x330" data-skuid="' + data[i].notSoldOutGoods.skuId + '"><span class="cartIcon"></span>加入购物车</a>' + '</div>' + '</div>' + 
                    '<div class="u-intro">' + 
                    '<a target="_blank" class="u-goods-titleLink title J_btn_check PSC_J_normal_statistics_Goods PSC_statistics_' + data[i].id + '" href="http://you.163.com/item/detail?id=' + data[i].id + '&_stat_subject=' + subject + '" data-itemid="' + data[i].id + '">'+(data[i].newItemFlag ? '<span class="u-CF55-new">新品</span>':'')+ data[i].title.replace(/;/g, '') + '</a>' + 
                    '<p class="info">' + data[i].simpleDesc + '</p>' +
                     '<p class="price"><span class="offPrice"><span class="unit">&yen;&nbsp;</span>' + offPrice + '</span>' + unitP + '</p></div></li>';
                }
                if (data.length != 0) {
                    $('.m-goodsEmpty').hide();
                    $('.m-goodsList').show();
                    $('.m-goodsList').empty().html(tpl);
                    length ? $('.J_goods_count').text(length) : $('.J_goods_count').text(data.length);
                } else {
                    $('.m-goodsList').hide();
                    $('.m-goodsEmpty').show();
                    $('.J_goods_count').text('0');
                }
                _this.fLazyload();
            },
            rangeSlider: function() {
                var _this = this;
                $('#connect').empty();
                $('#connect').removeClass('noUi-target noUi-ltr noUi-horizontal noUi-background');
                $('.priceStart .price').empty();
                $('.priceEnd .price').empty();
                var connectSlider = $('#connect');
                var maxprice = _this.maxPrice;
                var pStart = $('.u-price-text .priceStart .price');
                var pEnd = $('.u-price-text .priceEnd .price');

                noUiSlider.create(connectSlider[0], {
                    start: [0, maxprice],
                    step: 20,
                    snap: true,
                    connect:true,
                    range: {
                        'min': 0,
                        '10%': maxprice*0.01,
                        '20%': maxprice*0.02,
                        '30%': maxprice*0.03,
                        '40%': maxprice*0.05,
                        '50%': maxprice*0.15,
                        '60%': maxprice*0.3,
                        '70%': maxprice*0.5,
                        '80%': maxprice*0.8,
                        '90%': maxprice*0.9,
                        'max': maxprice
                    }
                });

                var connectBar = document.createElement('div'),
                    connectBase = connectSlider.find('.noUi-base')[0];

                // Give the bar a class for styling and add it to the slider.
                connectBar.className += 'connect';
                connectBase.appendChild(connectBar);

                connectSlider[0].noUiSlider.on('update', function(values, handle, a, b, handlePositions) {

                    var offset = handlePositions[handle];

                    // Right offset is 100% - left offset
                    if (handle === 1) {
                        offset = 100 - offset;
                    }
                    // Pick left for the first handle, right for the second.
                    connectBar.style[handle ? 'right' : 'left'] = offset + '%';
                });

                connectSlider[0].noUiSlider.on('update', function(values, handle) {

                    var value = values[handle];

                    if (handle) {
                        pEnd.text(Math.round(value));
                    } else {
                        pStart.text(Math.round(value));
                    }

                });

            },
            fLazyload: function() {
                var _this = this;
                setTimeout(function() {

                    $('.YX-S-M-CF55 .J_lazyload').lazyload({
                        threshold: 50,
                        effect: 'fadeIn'
                    });
                }, 500);
            },
            modalPop: function(_obj, _txt) {
                var _this = this;
                !!_txt && ($('#txtRemind').html(_txt));
                $(_obj).fadeIn(200);
                _this.popTimer = setTimeout(function() {
                    _this.fCloseAll();
                }, 3000);
            },
            /*modalLoading: function(_obj) {
                var _this = this;
                $('.J_modal').fadeIn(200);
                $(_obj).fadeIn(200);
            },*/
            fCloseAll: function() {
                var _this = this;
                if (_this.popTimer) {
                    clearTimeout(_this.popTimer);
                }
                $('.J_modal').fadeOut(200);
                $('.J_pop').fadeOut(200);
                $('.J_loading').fadeOut(200);
            }
        };
        oPage.init();
        $('body').on('click','.YX-S-M-CF55 .PSC_J_normal_statistics_Goods', function(e) {
            PSC_C_statistics.normalGoods(this);
        });
    })();
