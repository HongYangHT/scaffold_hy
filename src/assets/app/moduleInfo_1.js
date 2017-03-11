/**
 *设置模板的搜索的关键字及其信息
 */
define(function() {
    var moduleInfo = {
        /* common module */
        'yxhd': {
            keywords: 'YX yx yanxuan YANXUAN YXHD yxhd 严选 严选头部 PC H5 网易严选 移动端 pc端 公共模板',
            shortCut: '严选头部',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161011/14761714486151576.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161011/14761714485361568.jpg',
                'value': 'yxhd',
                'type': 'yxhd',
                'suitWeb': true,
                'suitH5': true,
                'desc': ['没有配置项']
            }
        },
        'yxft': {
            keywords: 'YX yx yanxuan YANXUAN YXFT yxft 严选 严选尾部 PC H5 网易严选 移动端 pc端 公共模板',
            shortCut: '严选尾部',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161011/14761714485131565.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161011/14761714485881573.jpg',
                'value': 'yxft',
                'type': 'yxft',
                'suitWeb': true,
                'suitH5': true,
                'desc': ['没有配置项']
            }
        },
        /* banner module */
        'YX_S_M_77DE': {
            keywords: '券码兑换功能 77DE 77de YX_S_M_77DE yx_s_m_77de banner Banner PC端 优惠券 兑换 激活 私码 PC端banner PC 网易严选 移动端 banner模板',
            shortCut: '券码兑换功能',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20170228/14882630839020041.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170228/14882630839020041.jpg',
                'value': 'YX_S_M_77DE',
                'type': 'YX_S_M_77DE',
                'suitWeb': true,
                'suitH5': false,
                'desc': ['参数tip1: STEP1的值', '参数tip2: STEP2的值', '参数tip3: STEP3的值']
            }
        },
        'YX_S_M_48BB': {
            keywords: '券码兑换功能 48BB 48bb YX_S_M_48BB yx_s_m_48bb banner Banner 移动端 优惠券 兑换 激活 私码 移动端可适配banner H5 网易严选 移动端 banner模板',
            shortCut: '券码兑换功能',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170228/14882650741220077.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170228/14882650741220077.jpg',
                'value': 'YX_S_M_48BB',
                'type': 'YX_S_M_48BB',
                'suitWeb': false,
                'suitH5': true,
                'desc': ['参数tip1: STEP1的值', '参数tip2: STEP2的值', '参数tip3: STEP3的值']
            }
        },
        'YX_S_M_F5F5': {
            keywords: '券码兑换功能 F5F5 f5f5 YX_S_M_F5F5 yx_s_m_f5f5 banner Banner 移动端 PC端 优惠券 兑换 激活 私码 移动端可适配banner PC端banner PC H5 网易严选 移动端 PC端 banner模板',
            shortCut: '券码兑换功能',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170303/14885068358471417.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170303/14885068358471417.jpg',
                'value': 'YX_S_M_F5F5',
                'type': 'YX_S_M_F5F5',
                'suitWeb': true,
                'suitH5': true,
                'desc': ['bannerImage: 大的背景图', 'coupon: 券码', 'couponLink: 券码链接', 'ajaxLink: 请求后台发链接', 'popBg: 弹出层背景图']
            }
        },
        'YX_S_M_35FD': {
            keywords: 'banner-非通栏（配图640*auto） 35FD 35fd YX_S_M_35FD yx_s_m_35fd banner Banner 移动端 云音乐 H5 移动端 banner模板',
            shortCut: 'banner-非通栏（配图640*auto）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170112/14842229407800115.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170112/14842229407800115.jpg',
                'value': 'YX_S_M_35FD',
                'type': 'YX_S_M_35FD',
                'suitWeb': false,
                'suitH5': true,
                'desc': ['bannerImage: 大的背景图', 'Link: 图片要跳转的链接']
            }
        },
        'YX_S_M_BF3A': {
            keywords: '定位悬浮层 BF3A bf3a YX_S_M_BF3A yx_s_m_bf3a banner Banner 移动端 H5 移动端 banner模板',
            shortCut: '定位悬浮层',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170112/14842028042970033.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170112/14842028042970033.jpg',
                'value': 'YX_S_M_BF3A',
                'type': 'YX_S_M_BF3A',
                'suitWeb': false,
                'suitH5': true,
                'desc': ['bgImage: 背景图', 'Tab: 每个小tab所占百分比', 'show_n: 表示第n个tab是否显示,1显示0隐藏', 'anchar_n: 填入与每个tab一对一联系的其他模块的锚点', 'linkText： Tab的文字内容']
            }
        },
        'YX_S_M_D9D0': {
            keywords: 'banner-优惠券 D9D0 d9d0 YX_S_M_D9D0 yx_s_m_d9d0 banner Banner 优惠券 移动端 H5 移动端 banner模板',
            shortCut: 'banner-优惠券',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170112/14841931301530023.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170112/14841931301530023.jpg',
                'value': 'YX_S_M_D9D0',
                'type': 'YX_S_M_D9D0',
                'suitWeb': false,
                'suitH5': true,
                'desc': ['bgImage: 大背景图', 'show_n: 表示是否显示第n个券,1显示0隐藏', 'couponVal：表示优惠券的金额', 'couponDesc: 对券的描述（按钮上面）', 'couponBtnText: 按钮上的文字', 'couponLink: 券的地址', 'couponTip: 券的补充说明（按钮下面）', 'couponBg: 券的背景图']
            }
        },
        'YX_S_M_EA3D': {
            keywords: '分隔-空白栏-可修改色值高度 空白栏 EA3D ea3d YX_S_M_EA3D yx_s_m_ea3d banner Banner 移动端 H5 banner模板',
            shortCut: '分隔-空白栏-可修改色值高度',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170109/14839664630630182.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170109/14839664630630182.jpg',
                'value': 'YX_S_M_EA3D',
                'type': 'YX_S_M_EA3D',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_CE2D': {
            keywords: '分隔-空白栏-可修改色值高度 空白栏 CE2D ce2d YX_S_M_CE2D yx_s_m_ce2d banner Banner PC端 PC banner模板',
            shortCut: '分隔-空白栏-可修改色值高度',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170109/14839647158100097.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170109/14839647158100097.jpg',
                'value': 'YX_S_M_CE2D',
                'type': 'YX_S_M_CE2D',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_S_M_A86B': {
            keywords: 'banner-非通栏（配图1090*auto || 640* auto） A86B a86b YX_S_M_A86B yx_s_m_a86b banner Banner PC端 移动端 H5 PC banner模板',
            shortCut: 'banner-非通栏（配图1090*auto || 640* auto）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161220/14822229722431545.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161220/14822229722431545.jpg',
                'value': 'YX_S_M_A86B',
                'type': 'YX_S_M_A86B',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_EE29': {
            keywords: 'EE29 ee29 YX_S_M_EE29 yx_s_m_ee29 banner Banner 移动端 移动端banner 可配置链接 移动端可配置链接banner H5 banner模板',
            shortCut: '移动端可配置链接banner',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161219/14821145858471145.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161219/14821145858471145.jpg',
                'value': 'YX_S_M_EE29',
                'type': 'YX_S_M_EE29',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_4FDB': {
            keywords: '4FDB 4fdb YX_S_M_4FDB yx_s_m_4fdb banner Banner 移动端 移动端banner 空白栏 移动端带有文案的空白栏 H5 banner模板',
            shortCut: '移动端带有文案的空白栏',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170120/14849011447760139.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170120/14849011447760139.jpg',
                'value': 'YX_S_M_4FDB',
                'type': 'YX_S_M_4FDB',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_07DA': {
            keywords: '07DA 07da YX_S_M_07DA yx_s_m_07da banner Banner 移动端 移动端banner H5 有钱 网易有钱 有钱配置模块 有钱配置基金模块 banner模板',
            shortCut: '有钱配置基金模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161219/14821507028151318.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161219/14821507028151318.jpg',
                'value': 'YX_S_M_07DA',
                'type': 'YX_S_M_07DA',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_BFA7': {
            keywords: 'BFA7 bfa7 YX_S_M_BFA7 yx_s_m_bfa7 banner Banner 移动端 移动端banner 有钱 网易有钱 有钱配置模块 活动规则 相关阅读 有钱配置相关阅读模块 H5 banner模板',
            shortCut: '有钱配置相关阅读模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161220/14822033145081424.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161220/14822033145081424.jpg',
                'value': 'YX_S_M_BFA7',
                'type': 'YX_S_M_BFA7',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_51E1': {
            keywords: '查看更多 51E1 51e1 YX_S_M_51E1 yx_s_m_51e1 banner Banner 移动端 移动端banner PC端 pc端banner 移动端按钮 移动端按钮模块 云音乐 H5 PC banner模板',
            shortCut: '查看更多',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161216/14818742150761006.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161216/14818742150761006.jpg',
                'value': 'YX_S_M_51E1',
                'type': 'YX_S_M_51E1',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_3DA7': {
            keywords: 'banner-通栏（配图1920*500/640*auto） 3DA7 3da7 YX_S_M_3DA7 yx_s_m_3da7 banner Banner H5 PC banner模板',
            shortCut: 'banner-通栏（配图1920*500/640*auto）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161226/14827198248382663.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161226/14827198248382663.jpg',
                'value': 'YX_S_M_3DA7',
                'type': 'YX_S_M_3DA7',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_97D8': {
            keywords: '分隔-分割符 分隔符 分割符 97D8 97d8 YX_S_M_97D8 yx_s_m_97d8 banner Banner H5 PC banner模板',
            shortCut: '分隔-分割符',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161205/14809066191120355.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161205/14809066191120355.jpg',
                'value': 'YX_S_M_97D8',
                'type': 'YX_S_M_97D8',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_0AA8': {
            keywords: '文案-标题 文案 标题 0AA8 0aa8 YX_S_M_0AA8 yx_s_m_0aa8 banner Banner 移动端 pc端 pc端banner 移动端banner title 设置文案 可设置文案 可设置文案的banner 可设置文案的title 标题文案 H5 PC banner模板',
            shortCut: '文案-标题',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161205/14809121475660356.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161205/14809121475660356.jpg',
                'value': 'YX_S_M_0AA8',
                'type': 'YX_S_M_0AA8',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_19AB': {
            keywords: '通栏banner（1920*420/640*auto） 19AB 19ab YX_S_M_19AB yx_s_m_19ab banner Banner 移动端 pc端 pc端banner 移动端banner 可适配banner 通栏banner（1920*420/640*auto）H5 PC banner模板',
            shortCut: '通栏banner（1920*420/640*auto）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161226/14827198248232662.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161226/14827198248232662.jpg',
                'value': 'YX_S_M_19AB',
                'type': 'YX_S_M_19AB',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_73D7': {
            keywords: '73D7 73d7 YX_S_M_73D7 yx_s_m_73d7 banner Banner pc端 pc端banner',
            shortCut: 'pc端banner',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161117/14793539817441331.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161117/14793539817441331.jpg',
                'value': 'YX_S_M_73D7',
                'type': 'YX_S_M_73D7',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_S_M_0CE9': {
            keywords: '0CE9 0ce9 YX_S_M_0CE9 yx_s_m_0ce9 banner Banner pc端 pc端banner 可配置种类',
            shortCut: 'pc端banner',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161117/14793668815171343.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161117/14793668815171343.jpg',
                'value': 'YX_S_M_0CE9',
                'type': 'YX_S_M_0CE9',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_S_M_3311': {
            keywords: '3311 YX_S_M_3311 yx_s_m_3311 banner Banner 移动端 领券 配券 H5 banner模板',
            shortCut: '领券配券模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170209/14866430287250105.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170209/14866430287250105.jpg',
                'value': 'YX_S_M_3311',
                'type': 'YX_S_M_3311',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_5A56': {
            keywords: '5A56 5a56 YX_N_M_5A56 yx_n_m_5a56 banner Banner 移动端 title PC H5 banner模板',
            shortCut: 'title模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170120/14848967650250030.png',
                'zoom': 'https://mimg.127.net/hz/uploader/20170120/14848967650250030.png',
                'value': 'YX_N_M_5A56',
                'type': 'YX_N_M_5A56',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_S_M_1D5D': {
            keywords: '1D5D 1d5d YX_S_M_1D5D yx_s_m_1d5d banner Banner PC端 fixed导航 PC banner模板',
            shortCut: 'fixed导航',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170306/14887905027400412.png',
                'zoom': 'https://mimg.127.net/hz/uploader/20170306/14887905027400412.png',
                'value': 'YX_S_M_1D5D',
                'type': 'YX_S_M_1D5D',
                'suitWeb': true,
                'suitH5': false
            }
        },
        /* 商品位 module */
        'YX_S_M_CF55': {
            keywords: 'PC商品筛选页模块 商品池-排序/筛选 筛选页 CF55 cf55 YX_S_M_CF55 yx_s_m_cf55 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 PC端 网易严选 PC 商品位模板 排序 筛选',
            shortCut: '商品池-排序/筛选',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20170301/14883388916860556.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170301/14883388916860556.jpg',
                'value': 'YX_S_M_CF55',
                'type': 'YX_S_M_CF55',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_S_M_22EE': {
            keywords: '22EE 22ee YX_S_M_22EE yx_s_m_22ee yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '商品位模板',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170306/14887895039710400.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170306/14887895039710400.jpg',
                'value': 'YX_S_M_22EE',
                'type': 'YX_S_M_22EE',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_1137': {
            keywords: '1137 YX_N_M_1137 yx_n_m_1137 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '移动端商品位模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20170228/14882780980380402.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170228/14882780980380402.jpg',
                'value': 'YX_N_M_1137',
                'type': 'YX_N_M_1137',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_OABF': {
            keywords: 'H5商品筛选页模块 商品池-排序/筛选 筛选页 OABF oabf YX_N_M_OABF yx_n_m_oabf yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板 排序 筛选',
            shortCut: '商品池-排序/筛选',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170302/14884596444211221.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170302/14884596444211221.jpg',
                'value': 'YX_N_M_OABF',
                'type': 'YX_N_M_OABF',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_C88F': {
            keywords: '移动端top轮播商品位 轮播商品位 C88F c88f YX_N_M_C88F yx_n_m_c88f yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '移动端top轮播商品位',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170223/14878481252450059.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170223/14878481252450059.jpg',
                'value': 'YX_N_M_C88F',
                'type': 'YX_N_M_C88F',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_S_M_866E': {
            keywords: 'pc端top轮播商品位 轮播商品位 866E 866e YX_S_M_866E yx_s_m_866e yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 PC端 网易严选 PC 商品位模板',
            shortCut: 'pc端top轮播商品位',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20170221/14876640375800035.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170221/14876640375800035.jpg',
                'value': 'YX_S_M_866E',
                'type': 'YX_S_M_866E',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_C1C5': {
            keywords: '移动端商品位模块 C1C5 c1c5 YX_N_M_C1C5 yx_n_m_c1c5 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '移动端商品位模块',
            data: {
                'img': ' http://mimg.127.net/hz/uploader/20170220/14875878094910081.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170220/14875878094910081.jpg',
                'value': 'YX_N_M_C1C5',
                'type': 'YX_N_M_C1C5',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_C1C6': {
            keywords: '移动端商品位模块 C1C6 c1c6 YX_N_M_C1C6 yx_n_m_c1c6 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '移动端商品位模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20170221/14876658842720067.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20170221/14876658842720067.jpg',
                'value': 'YX_N_M_C1C6',
                'type': 'YX_N_M_C1C6',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_BCD0': {
            keywords: '商品池6-有图（配图640*175） 制造商 描述 BCD0 bcd0 YX_N_M_BCD0 yx_n_m_bcd0 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 网易严选 H5 商品位模板',
            shortCut: '商品池6-有图（配图640*175）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170209/14866118621490036.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170209/14866118621490036.jpg',
                'value': 'YX_N_M_BCD0',
                'type': 'YX_N_M_BCD0',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_CB4D': {
            keywords: '商品池2-图右（配图320*640）制造商 描述 CB4D cb4d YX_N_M_CB4D yx_n_m_cb4d yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式1 商品池2-1 商品池2-1（配图320*640）制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池2-图右（配图320*640）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170110/14840499619080539.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170110/14840499619080539.jpg',
                'value': 'YX_N_M_CB4D',
                'type': 'YX_N_M_CB4D',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_A4F1': {
            keywords: '商品池2-图左（配图320*640）制造商 描述 A4F1 a4f1 YX_N_M_A4F1 yx_n_m_a4f1 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式2 商品池2-2 商品池2-2（配图320*640） 制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池2-图左（配图320*640）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170110/14840499034700538.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170110/14840499034700538.jpg',
                'value': 'YX_N_M_A4F1',
                'type': 'YX_N_M_A4F1',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_64E0': {
            keywords: '商品池3-图右（配图266*383）制造商 描述 64E0 64e0 YX_N_M_64E0 yx_n_m_64Ee0 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式3 商品池3-1 商品池3-1（配图266*383） 制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池3-图右（配图266*383）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170110/14840370665660387.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170110/14840370665660387.jpg',
                'value': 'YX_N_M_64E0',
                'type': 'YX_N_M_64E0',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_D45D': {
            keywords: '商品池3-图左（配图266*383）制造商 描述 D45D d45d YX_N_M_D45D yx_n_m_d45d yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式4 商品池3-2 商品池3-2（配图266*383）制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池3-图左（配图266*383）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170110/14840370379940386.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170110/14840370379940386.jpg',
                'value': 'YX_N_M_D45D',
                'type': 'YX_N_M_D45D',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_BE90': {
            keywords: '商品池4-图右（配图352*442）制造商 描述 BE90 be90 YX_N_M_BE90 yx_n_m_be90 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式5 商品池4-1 商品池4-1（配图352*442）制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池4-图右（配图352*442）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170109/14839609227630065.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170109/14839609227630065.jpg',
                'value': 'YX_N_M_BE90',
                'type': 'YX_N_M_BE90',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_77DE': {
            keywords: '商品池4-图左（配图352*442）制造商 描述 77DE 77de YX_N_M_77DE yx_n_m_77de yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 严选家装节样式6 商品池4-2 商品池4-1（配图352*442）制造商 PC PC端 网易严选 PC 商品位模板',
            shortCut: '商品池4-图左（配图352*442）',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170109/14839540766420019.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170109/14839540766420019.jpg',
                'value': 'YX_N_M_77DE',
                'type': 'YX_N_M_77DE',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_94FE': {
            keywords: '商品池1-无配图-H5 94FE 94fe YX_N_M_94FE yx_n_m_94fe yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 移动端商品组模块 严选家装节 严选家装节活动产出的移动端模块 严选家装节样式7 商品池1-H5 H5 制造商 移动端 网易严选 H5 商品位模板',
            shortCut: '商品池1-无配图-H5',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170109/14839435087250039.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170109/14839435087250039.jpg',
                'value': 'YX_N_M_94FE',
                'type': 'YX_N_M_94FE',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_B53B': {
            keywords: '商品池1-无配图-PC B53B b53b YX_N_M_B53B yx_n_m_b53b yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 严选家装节 严选家装节活动pc端模块 商品池1-PC PC端 制造商 PC 网易严选 PC 商品位模板',
            shortCut: '商品池1-无配图-PC',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170105/14836032681770101.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170105/14836032681770101.jpg',
                'value': 'YX_N_M_B53B',
                'type': 'YX_N_M_B53B',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_B278': {
            keywords: '移动端商品位模块 B278 b278 YX_N_M_B278 yx_n_m_b278 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 移动端商品组模块 厨房生活家 严选厨房生活家 严选厨房生活家活动产出的移动端模块 严选厨房生活家样式1 网易严选 H5 商品位模板',
            shortCut: '移动端商品位模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161221/14823124571861834.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161221/14823124571861834.jpg',
                'value': 'YX_N_M_B278',
                'type': 'YX_N_M_B278',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_C1C3': {
            keywords: '移动端商品位模块 C1C3 c1c3 YX_N_M_C1C3 yx_n_m_c1c3 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 移动端商品组模块 厨房生活家 严选厨房生活家 严选厨房生活家活动产出的移动端模块 严选厨房生活家样式2 网易严选 H5 商品位模板',
            shortCut: '移动端商品位模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161221/14823032926141800.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161221/14823032926141800.jpg',
                'value': 'YX_N_M_C1C3',
                'type': 'YX_N_M_C1C3',
                'suitWeb': false,
                'suitH5': true
            }
        },
        'YX_N_M_FDC0': {
            keywords: '商品池7-无配图-包邮凑单 FDC0 fdc0 YX_N_M_FDC0 yx_n_m_fdc0 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 pc端 移动端商品组模块 pc端商品组模块 可适配商品组模块 网易严选 H5 商品位模板',
            shortCut: '商品池7-无配图-包邮凑单',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161216/14818543574380739.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161216/14818543574380739.jpg',
                'value': 'YX_N_M_FDC0',
                'type': 'YX_N_M_FDC0',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_N_M_EAB5': {
            keywords: 'EAB5 eab5 YX_N_M_EAB5 yx_n_m_eab5 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 PC端 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161212/14815242485321232.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161212/14815242485321232.jpg',
                'value': 'YX_N_M_EAB5',
                'type': 'YX_N_M_EAB5',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_ACBA': {
            keywords: 'ACBA acba YX_N_M_ACBA yx_n_m_acba yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 PC端 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161209/14812666937120883.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161209/14812666937120883.jpg',
                'value': 'YX_N_M_ACBA',
                'type': 'YX_N_M_ACBA',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_92C9': {
            keywords: '商品池5-无配图 92C9 92c9 YX_N_M_92C9 yx_n_m_92c9 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 移动端 pc端商品组模块 移动端商品组模块 可适配商品组模块 商品池5 网易严选 PC H5 商品位模板',
            shortCut: '商品池5-无配图',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161205/14809274258960399.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161205/14809274258960399.jpg',
                'value': 'YX_N_M_92C9',
                'type': 'YX_N_M_92C9',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_N_M_46EB': {
            keywords: '46EB 46eb YX_N_M_46eb yx_n_m_92c9 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 移动端 pc端商品组模块 移动端商品组模块 可适配商品组模块 网易严选 PC H5 商品位模板',
            shortCut: '可适配商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161122/14797812303460424.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161122/14797812303460424.jpg',
                'value': 'YX_N_M_46EB',
                'type': 'YX_N_M_46EB',
                'suitWeb': true,
                'suitH5': true
            }
        },
        'YX_N_M_9BBD': {
            keywords: '9BBD 9bbd YX_N_M_9BBD yx_n_m_9bbd yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161102/14780522153243951.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161102/14780522153243951.jpg',
                'value': 'YX_N_M_9BBD',
                'type': 'YX_N_M_9BBD',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_2BE2': {
            keywords: '2BE2 2be2 YX_N_M_2BE2 yx_n_m_2be2 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161102/14780522153353952.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161102/14780522153353952.jpg',
                'value': 'YX_N_M_2BE2',
                'type': 'YX_N_M_2BE2',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_7A5D': {
            keywords: '7A5D 7a5d YX_N_M_7A5D yx_n_m_7a5d yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161102/14780522153453953.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161102/14780522153453953.jpg',
                'value': 'YX_N_M_7A5D',
                'type': 'YX_N_M_7A5D',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_A1C6': {
            keywords: 'A1C6 a1c6 YX_N_M_A1C6 yx_n_m_a1c6 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161102/14780522153133950.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161102/14780522153133950.jpg',
                'value': 'YX_N_M_A1C6',
                'type': 'YX_N_M_A1C6',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_881B': {
            keywords: '881B 881b YX_N_M_881B yx_n_m_881b yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161116/14792617349681175.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161116/14792617349681175.jpg',
                'value': 'YX_N_M_881B',
                'type': 'YX_N_M_881B',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_C6E9': {
            keywords: 'C6E9 c6e9 YX_N_M_C6E9 yx_n_m_c6e9 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161128/14802985110610600.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161128/14802985110610600.jpg',
                'value': 'YX_N_M_C6E9',
                'type': 'YX_N_M_C6E9',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_DB08': {
            keywords: 'DB08 db08 YX_N_M_DB08 yx_n_m_db08 yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'http://mimg.127.net/hz/uploader/20161128/14803040464190649.jpg',
                'zoom': 'http://mimg.127.net/hz/uploader/20161128/14803040464190649.jpg',
                'value': 'YX_N_M_DB08',
                'type': 'YX_N_M_DB08',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_417A': {
            keywords: '417A 417a YX_N_M_417A yx_n_m_417a yanxuan YANXUAN 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170306/14887907803850413.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170306/14887907803850413.jpg',
                'value': 'YX_N_M_417A',
                'type': 'YX_N_M_417A',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_2097': {
            keywords: '2097 YX_N_M_2097 yx_n_m_2097 yanxuan YANXUAN 云音乐 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170308/14889390899380187.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170308/14889390899380187.jpg',
                'value': 'YX_N_M_2097',
                'type': 'YX_N_M_2097',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_5589': {
            keywords: '5589 YX_N_M_5589 yx_n_m_5589 yanxuan YANXUAN 云音乐 严选 商品 商品位 商品组 商品位模块 商品组模块 pc端 pc端商品组模块 网易严选 PC 商品位模板',
            shortCut: 'pc端商品组模块',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20170308/14889776947890133.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170308/14889776947890133.jpg',
                'value': 'YX_N_M_5589',
                'type': 'YX_N_M_5589',
                'suitWeb': true,
                'suitH5': false
            }
        },
        'YX_N_M_EB26':{
            keywords: '云音乐适配模块 EB26 YX_N_M_EB26 yx_n_m_eb26 yanxuan YANXUAN 云音乐 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 移动端商品组模块 网易严选 H5 商品位模板',
            shortCut: '云音乐适配模块',
            data:{
                'img': 'https://mimg.127.net/hz/uploader/20170310/14891389167980610.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170310/14891389167980610.jpg',
                'value': 'YX_N_M_EB26',
                'type': 'YX_N_M_EB26',
                'suitWeb': false,
                'suitH5': true,
                'desc':['goods模块(H5)','goodsId：商品组Id','注意：新增extend字段','1、couponPrice 券后自配价格字段 ','2、btnText  按钮文案',' 3、btnLink 按钮链接',' 4、oldUserFlag： 设置为 1 则显示下面的tip']
            }
        },
        'YX_N_M_8178':{
            keywords: '云音乐适配模块 8178 YX_N_M_8178 yx_n_m_8178 yanxuan YANXUAN 云音乐 严选 商品 商品位 商品组 商品位模块 商品组模块 移动端 移动端商品组模块 网易严选 移动 商品位模板',
            shortCut: '云音乐适配模块',
            data:{ 
                'img': 'https://mimg.127.net/hz/uploader/20170310/14891363360010543.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20170310/14891363360010543.jpg',
                'value': 'YX_N_M_8178',
                'type': 'YX_N_M_8178',
                'suitWeb': false,
                'suitH5': true,
                'desc':['goods模块(H5)','goodsId：商品组Id','注意：新增extend字段','1、couponPrice 券后自配价格字段 ','2、btnText  按钮文案',' 3、btnLink 按钮链接',' 4、oldUserFlag： 设置为 1 则显示下面的tip']
            }
        },
        /* 活动规则 */
        'YX_N_M_20BC': {
            keywords: '活动规则-图文 20BC 20bc YX_S_M_20BC yx_s_m_20bc 移动端 pc端 活动规则 移动端活动规则模块 pc端活动规则模块 可适配活动规则模块 PC端 H5端 网易严选 PC H5 活动规则',
            shortCut: '活动规则-图文',
            data: {
                'img': 'https://mimg.127.net/hz/uploader/20161221/14822859093801764.jpg',
                'zoom': 'https://mimg.127.net/hz/uploader/20161221/14822859093801764.jpg',
                'value': 'YX_S_M_20BC',
                'type': 'YX_S_M_20BC',
                'suitWeb': true,
                'suitH5': true
            }
        }
    };
    return moduleInfo;
});
