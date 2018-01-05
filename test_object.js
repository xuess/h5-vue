webpackJsonp([6], [function(t, e) {
    t.exports = function(t, e, n, i, a, s) {
        var r, o = t = t || {}, c = typeof t.default;
        "object" !== c && "function" !== c || (r = t,
        o = t.default);
        var l = "function" == typeof o ? o.options : o;
        e && (l.render = e.render,
        l.staticRenderFns = e.staticRenderFns,
        l._compiled = !0),
        n && (l.functional = !0),
        a && (l._scopeId = a);
        var u;
        if (s ? (u = function(t) {
            t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
            t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
            i && i.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(s)
        }
        ,
        l._ssrRegister = u) : i && (u = i),
        u) {
            var d = l.functional
              , f = d ? l.render : l.beforeCreate;
            d ? (l._injectStyles = u,
            l.render = function(t, e) {
                return u.call(e),
                f(t, e)
            }
            ) : l.beforeCreate = f ? [].concat(f, u) : [u]
        }
        return {
            esModule: r,
            exports: o,
            options: l
        }
    }
}
, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var i = {
        getQueryParameter: function(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
              , n = window.location.search.substr(1).match(e);
            return null != n ? n[2] : null
        },
        getUrlParams: function(t) {
            var e = {};
            return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, i) {
                e[n] = i
            }),
            e
        },
        setQueryConfig: function(t) {
            var e = "";
            for (var n in t)
                -1 != t[n] && (e += n + "=" + t[n] + "&");
            return e = e.substring(0, e.length - 1)
        },
        addClass: function(t, e) {
            if (t) {
                for (var n = t.className, a = (e || "").split(" "), s = 0, r = a.length; s < r; s++) {
                    var o = a[s];
                    o && (t.classList ? t.classList.add(o) : i.hasClass(t, o) || (n += " " + o))
                }
                t.classList || (t.className = n)
            }
        },
        removeClass: function(t, e) {
            if (t && e) {
                for (var n = e.split(" "), a = " " + t.className + " ", s = 0, r = n.length; s < r; s++) {
                    var o = n[s];
                    o && (t.classList ? t.classList.remove(o) : i.hasClass(t, o) && (a = a.replace(" " + o + " ", " ")))
                }
                t.classList || (t.className = i.trim(a))
            }
        },
        trim: function(t) {
            return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        },
        hasClass: function(t, e) {
            return (" " + t.className + " ").indexOf(" " + e + " ") > -1
        },
        ztc: function() {
            return "xinxiliu.ex518.com" == location.host ? {
                isWab: !0,
                itemLogo: !1,
                banner: !1,
                channelImage: {
                    imageSrc1: "http://oss.lanlanlife.com/927b3aaf15e338a7c94599447d204d49_280x224.jpeg",
                    imageSrc2: "http://oss1.lanlanlife.com/f1be2ad75575bcb199456297cecb673d_280x224.jpeg",
                    imageSrc3: "http://oss3.lanlanlife.com/5322f5616f0a2f688b1333081dbee0e9_282x224.jpeg"
                },
                channelImage2: {
                    imageSrc1: "http://oss2.lanlanlife.com/bfbd351b517b1c8bf8195cc1e6339c36_132x224.jpeg",
                    imageSrc2: "http://oss1.lanlanlife.com/cee3d5d1ace58aef2abaff48fb3055fe_132x224.jpeg",
                    imageSrc3: "http://oss1.lanlanlife.com/a7099ed9ed041eab400ff33afe690b0e_132x224.jpeg"
                },
                doubleActivityImage: "http://oss1.lanlanlife.com/0200870cac60d1b39941faf535604d53_171x522.jpeg"
            } : {
                isWab: !1,
                itemLogo: !0,
                banner: !0,
                channelImage: {
                    imageSrc1: "http://oss.lanlanlife.com/4f59300a8c430a60cceab8a8d378000e_420x336.jpeg",
                    imageSrc2: "http://oss.lanlanlife.com/cb5dac28514bf23bd913b5bb7808d446_420x336.jpeg",
                    imageSrc3: "http://oss2.lanlanlife.com/baacab4c44163c30f58f7259fef72435_420x336.jpeg"
                },
                doubleActivityImage: "http://oss1.lanlanlife.com/0200870cac60d1b39941faf535604d53_171x522.jpeg"
            }
        },
        axiosPostConfig: {
            transformRequest: [function(t) {
                var e = ""
                  , n = "";
                for (var i in t)
                    n = null === t[i] ? "" : encodeURIComponent(t[i]),
                    e += encodeURIComponent(i) + "=" + n + "&";
                return e
            }
            ],
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        },
        jsonp: function(t, e, n) {
            function i() {}
            function a() {
                o.parentNode && o.parentNode.removeChild(o),
                window[u] = i,
                c && clearTimeout(c)
            }
            function s() {
                window[u] && a()
            }
            var r = 0;
            "function" == typeof e && (n = e,
            e = {}),
            e || (e = {});
            var o, c, l = e.prefix || "__jp", u = e.name || l + r++, d = e.param || "callback", f = null != e.timeout ? e.timeout : 6e4, p = encodeURIComponent, h = document.getElementsByTagName("script")[0] || document.head;
            return f && (c = setTimeout(function() {
                a(),
                n && n(new Error("Timeout"))
            }, f)),
            window[u] = function(t) {
                a(),
                n && n(null, t)
            }
            ,
            t += (~t.indexOf("?") ? "&" : "?") + d + "=" + p(u),
            t = t.replace("?&", "?"),
            o = document.createElement("script"),
            o.src = t,
            h.parentNode.insertBefore(o, h),
            s
        },
        urlEncode: function(t) {
            return t = (t + "").toString(),
            encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
        },
        urlDecode: function(t) {
            return decodeURIComponent((t + "").replace(/%(?![\da-f]{2})/gi, function() {
                return "%25"
            }).replace(/\+/g, "%20"))
        }
    };
    t.exports = i
}
, , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(135)
      , s = i(a)
      , r = n(136)
      , o = i(r)
      , c = n(131)
      , l = i(c)
      , u = n(134)
      , d = i(u)
      , f = n(130)
      , p = i(f)
      , h = n(132)
      , v = i(h)
      , m = n(133)
      , g = i(m)
      , _ = n(129)
      , y = i(_);
    e.default = {
        Swipe: s.default,
        SwipeItem: o.default,
        BackTop: l.default,
        SortBar: d.default,
        BackIndex: p.default,
        GoodsOne: v.default,
        GoodsTwo: g.default,
        Affix: y.default
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(108)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i);
    e.default = {
        InfiniteScroll: a.default
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(128)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i);
    e.default = [{
        path: "/",
        component: a.default
    }, {
        name: "index",
        path: "/saber/index",
        component: a.default
    }, {
        name: "list",
        path: "/saber/list",
        component: function(t) {
            return n.e(2).then(function() {
                var e = [n(170)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        name: "wall",
        path: "/saber/wall",
        component: function(t) {
            return n.e(1).then(function() {
                var e = [n(171)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        name: "search",
        path: "/saber/search",
        component: function(t) {
            return n.e(3).then(function() {
                var e = [n(169)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        name: "find",
        path: "/saber/find",
        component: function(t) {
            return n.e(4).then(function() {
                var e = [n(168)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        name: "detail",
        path: "/saber/detail",
        component: function(t) {
            return n.e(0).then(function() {
                var e = [n(167)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        name: "d11",
        path: "/saber/d11",
        component: function(t) {
            return n.e(5).then(function() {
                var e = [n(166)];
                t.apply(null, e)
            }
            .bind(this)).catch(n.oe)
        }
    }, {
        path: "/saber/Couponwall",
        redirect: "/saber/wall"
    }, {
        path: "/saber/index/detail",
        redirect: "/saber/detail"
    }, {
        path: "/saber/index/search",
        redirect: "/saber/search"
    }, {
        path: "*",
        redirect: "/"
    }]
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(137)
      , s = i(a)
      , r = n(140)
      , o = i(r)
      , c = n(139)
      , l = i(c)
      , u = n(138)
      , d = i(u)
      , f = n(143)
      , p = i(f)
      , h = n(141)
      , v = i(h)
      , m = n(142)
      , g = i(m);
    e.default = {
        ActivityItem: s.default,
        GenderSelect: o.default,
        GenderBtn: l.default,
        CategoryTwo: d.default,
        Topic: p.default,
        Loading: v.default,
        PushCard: g.default
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(20)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i)
      , s = {
        "": "全部",
        1024: "百货",
        1025: "美妆",
        1026: "美食",
        1027: "母婴",
        1028: "女装",
        1029: "手机数码",
        1030: "鞋包",
        1031: "饰品",
        1032: "男装",
        1033: "内衣",
        1034: "其他"
    }
      , r = {
        1: "聚划算特卖",
        2: "销量榜单",
        3: "品质好货",
        4: "9.9包邮"
    }
      , o = {
        6: "精选",
        7: "最新",
        8: "最火"
    }
      , c = {
        ctr1_uv_pv: function() {
            _hmt.push(["_trackEvent", "cms-content-loaded", "loaded", "CMS-CTR1-总"])
        },
        categoryStat: function(t) {
            var e = "CMS-" + s[t];
            _hmt.push(["_trackEvent", "cms-category-loaded", "loaded", e])
        },
        sortValStat: function(t) {
            7 === t && _hmt.push(["_trackEvent", "cms-home-click", "click", "CMS-最新"]),
            8 === t && _hmt.push(["_trackEvent", "cms-home-click", "click", "CMS-最火"])
        },
        bannerClick: function(t) {
            if (_hmt.push(["_trackEvent", "cms-banner-click", "click", "CMS-banner总点击"]),
            t.indexOf("collection") > 0) {
                var e = a.default.getUrlParams(t).id
                  , n = "banner-click-文章-" + e;
                _hmt.push(["_trackEvent", "cms-banner-click", "click", n])
            } else {
                var i = a.default.getUrlParams(t).id
                  , s = "banner-click-集合页-" + i;
                _hmt.push(["_trackEvent", "cms-banner-click", "click", s])
            }
        },
        searchStat: function() {
            _hmt.push(["_trackEvent", "cms-search-loaded", "loaded", "CMS-搜索"])
        },
        topicStat: function() {
            var t = ["聚淘特卖", "实时榜单", "品质好货", "19.9包邮"]
              , e = a.default.getQueryParameter("type")
              , n = "CMS-" + t[e - 1];
            _hmt.push(["_trackEvent", "cms-topic-loaded", "loaded", n])
        },
        wallStat: function() {
            _hmt.push(["_trackEvent", "cms-collection-loaded", "loaded", "CMS-集合页"]);
            var t = a.default.getQueryParameter("banner");
            null !== t && (c.ctr1_uv_pv(),
            _hmt.push(["_trackEvent", "cms-wall-loaded", "loaded", "CMS-banner-总"]),
            _hmt.push(["_trackEvent", "cms-wall-loaded", "loaded", "CMS-banner-集合页-" + t]))
        },
        detail_page: function() {
            var t = a.default.getQueryParameter("forCms");
            1 === Number(t) ? (c.channelStat(),
            _hmt.push(["_trackEvent", "cms-detail-loaded", "loaded", "CMS-详情页-CMS"])) : _hmt.push(["_trackEvent", "cms-detail-loaded", "loaded", "CMS-详情页-发单"])
        },
        channelStat: function() {
            _hmt.push(["_trackEvent", "cms-ctr1-detail-loaded", "loaded", "CMS-CTR1-详情页总"]);
            var t = a.default.getQueryParameter("cid");
            if (null !== t) {
                var e = "CMS-详情页-类目-" + s[t];
                _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", e])
            }
            var n = a.default.getQueryParameter("type");
            if (null !== n) {
                var i = "CMS-详情页-专题-" + r[n];
                _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", i])
            }
            null !== a.default.getQueryParameter("search") && _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", "CMS-详情页-搜索"]);
            var c = a.default.getQueryParameter("slot");
            if (null !== c) {
                var l = "CMS-详情页-首页- " + o[c];
                _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", l])
            }
            if (null !== a.default.getQueryParameter("wall")) {
                _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", "CMS-详情页-集合页"]);
                var u = a.default.getQueryParameter("banner");
                Number(u) && _hmt.push(["_trackEvent", "cms-buy-click", "click", "CMS-详情页-banner集合页"])
            }
            null !== a.default.getQueryParameter("article") && _hmt.push(["_trackEvent", "cms-channel-detail-loaded", "loaded", "CMS-详情页-文章"])
        },
        tpwdStat: function() {
            var t = "CMS-CTR2-淘口令(4合1)总"
              , e = a.default.getQueryParameter("cid");
            if (null !== e) {
                var n = "类目-" + s[e] + "-淘口令(4合1)";
                _hmt.push(["_trackEvent", "cms-buy-click", "click", n]),
                _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t])
            }
            var i = a.default.getQueryParameter("type");
            if (null !== i) {
                var c = "专题-" + r[i] + "-淘口令(4合1)";
                _hmt.push(["_trackEvent", "cms-buy-click", "click", c]),
                _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t])
            }
            null !== a.default.getQueryParameter("search") && (_hmt.push(["_trackEvent", "cms-buy-click", "click", "搜索-淘口令(4合1)"]),
            _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t]));
            var l = a.default.getQueryParameter("slot");
            if (null !== l) {
                var u = "首页- " + o[l] + "-淘口令(4合1)";
                _hmt.push(["_trackEvent", "cms-buy-click", "click", u]),
                _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t])
            }
            if (null !== a.default.getQueryParameter("wall")) {
                _hmt.push(["_trackEvent", "cms-buy-click", "click", "CMS-详情页-淘口令(4合1)-集合页"]);
                var d = a.default.getQueryParameter("banner");
                Number(d) && (_hmt.push(["_trackEvent", "cms-buy-click", "click", "CMS-详情页-淘口令(4合1)-banner集合页"]),
                _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t]))
            }
            null !== a.default.getQueryParameter("article") && (_hmt.push(["_trackEvent", "cms-buy-click", "click", "CMS-详情页-淘口令(4合1)-banner文章"]),
            _hmt.push(["_trackEvent", "cms-ctr2-detail-click", "click", t]))
        }
    };
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(20)
          , a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
          , s = n(50);
        e.default = {
            name: "app",
            data: function() {
                return {
                    listShow: !0,
                    slotType: 6,
                    banners: [],
                    categories: [],
                    items: [],
                    curItems: [],
                    itemIds: [],
                    topics: [],
                    isEnd: !1,
                    wp: "",
                    cId: "",
                    cId2: "",
                    pid: "",
                    title: "",
                    count: {},
                    loading: !1,
                    showCategory: !1,
                    c_path: "",
                    keyword: "",
                    gender: {},
                    categoryTwo: [],
                    activityBanner: [],
                    ztc: a.default.ztc(),
                    showSortBar: !1,
                    packetLink: ""
                }
            },
            mounted: function() {
                this.pid = a.default.getQueryParameter("pid") || "",
                this.cId = a.default.getQueryParameter("cid") || "",
                this.cId2 = a.default.getQueryParameter("cid2") || "",
                this.c_path = this.cId2 ? "9001.CA." + this.cId2 : this.cId ? "9001.CA." + this.cId : "9001.CA.0",
                this.fetchData(),
                (0,
                s.ctr1_uv_pv)(),
                (0,
                s.categoryStat)(this.cId)
            },
            beforeRouteEnter: function(t, e, n) {
                n(function(t) {
                    t.cId = a.default.getQueryParameter("cid") || "",
                    t.cId2 = a.default.getQueryParameter("cid2") || "",
                    document.title = t.title,
                    t.showSortBar = !0
                })
            },
            beforeRouteLeave: function(t, e, n) {
                this.showSortBar = !1,
                n()
            },
            watch: {
                $route: function(t, e) {
                    if ("index" === t.name && ("index" === e.name || "/" === e.path)) {
                        this.cId = a.default.getQueryParameter("cid") || "",
                        this.cId2 = a.default.getQueryParameter("cid2") || "",
                        this.c_path = a.default.getQueryParameter("_path") || "9001.CA.0",
                        this.slotType = 6,
                        this.itemIds = [],
                        this.items = [],
                        this.fetchData(),
                        this.showCategory = !1,
                        (0,
                        s.ctr1_uv_pv)(),
                        (0,
                        s.categoryStat)(this.cId);
                        try {
                            Collection_TJ.Event("_path=" + this.c_path)
                        } catch (t) {}
                    }
                }
            },
            methods: {
                searchLink: function() {
                    return "/saber/find?_path=9001.SE.0"
                },
                bannerLink: function(t) {
                    var e = a.default.getUrlParams(t);
                    return t + "&_path=9001." + (t.indexOf("h5") >= 0 ? "BAH." + e.id : "BAC." + e.id + ".l." + e.id) + "&banner=" + e.id
                },
                detailLink: function(t) {
                    return {
                        name: "detail",
                        query: {
                            activityId: t.activityId,
                            itemId: t.itemId,
                            pid: this.pid,
                            forCms: 1,
                            cid: this.cId2 || this.cId,
                            _path: this.c_path + ".i." + t.itemId
                        }
                    }
                },
                wallLink: function(t) {
                    return {
                        name: "wall",
                        query: {
                            id: t.couponWallId,
                            itemId: t.itemId,
                            pid: this.pid,
                            _path: this.c_path + ".l." + t.couponWallId
                        }
                    }
                },
                detailAndWallLink: function(t) {
                    return t.couponWallUrl ? this.wallLink(t) : this.detailLink(t)
                },
                detailPath: function(t) {
                    return "_path=" + this.c_path + ".i." + t.itemId
                },
                wallPath: function(t) {
                    return "_path=" + this.c_path + ".l." + t.couponWallId
                },
                tabLink: function(t) {
                    var e = "" === t.cid ? 0 : t.cid;
                    return {
                        name: "index",
                        query: {
                            cid: t.cid,
                            pid: this.pid,
                            _path: "9001.CA." + e
                        }
                    }
                },
                categoryLink: function(t) {
                    this.cId2 = t.cid;
                    var e = {
                        cid: this.cId,
                        cid2: this.cId2,
                        pid: this.pid,
                        _path: "9001.CA." + t.cid
                    };
                    this.$router.push({
                        name: "index",
                        query: e
                    })
                },
                initPage: function() {
                    this.$nextTick(function() {
                        var t = document.querySelector(".tab-active");
                        if (t) {
                            var e = t.getBoundingClientRect();
                            e.left > 300 && (document.querySelector(".tabs").scrollLeft = e.left)
                        }
                    })
                },
                fetchData: function() {
                    var e = this
                      , n = {
                        cid: this.cId2 || this.cId,
                        pid: this.pid,
                        sort: this.slotType,
                        _path: this.c_path
                    };
                    this.loading = !0,
                    t.get("/a_api/index/dp", {
                        params: n
                    }).then(function(t) {
                        var n = t.data;
                        if (1001 !== n.status.code)
                            return !1;
                        e.isEnd = n.result.isEnd,
                        e.wp = n.result.wp,
                        e.cId = n.result.cid,
                        e.pid = n.result.pid,
                        e.slotType = n.result.sort,
                        e.count = n.result.count,
                        e.ztc.banner || n.result.banners.forEach(function(t, e) {
                            "http://oss.lanlanlife.com/bdc42353cfcaca16e2fd934755596516_400x750.jpeg" == t.image && n.result.banners.splice(e, 1)
                        }),
                        e.packetLink = n.result.packetLink,
                        e.banners = n.result.banners,
                        document.title = e.title = n.result.title,
                        e.categories = n.result.categories,
                        n.result.topics && n.result.topics.length && e.ztc.isWab && (n.result.topics[0].image = e.ztc.channelImage["imageSrc" + e.gender.type],
                        n.result.activityBanner[0].imageUrl = e.ztc.doubleActivityImage,
                        n.result.topics[2].image = e.ztc.channelImage2["imageSrc" + e.gender.type]),
                        e.topics = n.result.topics,
                        e.curItems = n.result.items,
                        e.activityBanner = n.result.activityBanner;
                        for (var i = 0; i < Object.keys(n.result.categories).length; i++)
                            n.result.categories[i].cid == n.result.cid && (e.categoryTwo = n.result.categories[i].list);
                        for (var a = 0; a < e.curItems.length; a++) {
                            var s = e.curItems[a].itemId;
                            e.itemIds.indexOf(s) < 0 && (e.itemIds.push(s),
                            e.items.push(e.curItems[a]))
                        }
                        e.curItems = [],
                        e.loading = !1,
                        e.initPage(),
                        window.scrollTo(0, 0)
                    }).catch(function(t) {})
                },
                loadMore: function() {
                    var e = this;
                    if ("/" !== this.$route.path && "index" !== this.$route.name)
                        return !1;
                    if (parseInt(this.isEnd))
                        return !1;
                    var n = {
                        wp: this.wp,
                        sort: this.slotType,
                        pId: this.pId,
                        _path: this.c_path
                    };
                    this.loading = !0,
                    t.get("/a_api/index/list", {
                        params: n
                    }).then(function(t) {
                        var n = t.data;
                        if (1001 !== n.status.code)
                            return !1;
                        e.isEnd = n.result.isEnd,
                        e.wp = n.result.wp,
                        e.curItems = n.result.items;
                        for (var i = 0; i < e.curItems.length; i++) {
                            var a = e.curItems[i].itemId;
                            e.itemIds.indexOf(a) < 0 && (e.itemIds.push(a),
                            e.items.push(e.curItems[i]))
                        }
                        e.curItems = [],
                        e.loading = !1,
                        (0,
                        s.ctr1_uv_pv)(),
                        (0,
                        s.categoryStat)(e.cId)
                    }).catch(function(t) {});
                    try {
                        Collection_TJ.Event("_path=" + this.c_path)
                    } catch (t) {}
                },
                type: function(e) {
                    var n = this;
                    if (this.slotType === e)
                        return !1;
                    this.slotType = e;
                    var i = {
                        sort: this.slotType,
                        cid: this.cId2 || this.cId,
                        pId: this.pid,
                        path: this.c_path
                    };
                    t.get("/a_api/index/list", {
                        params: i
                    }).then(function(t) {
                        var e = t.data;
                        if (1001 !== e.status.code)
                            return !1;
                        n.isEnd = e.result.isEnd,
                        n.wp = e.result.wp,
                        n.items = e.result.items,
                        n.itemIds = [];
                        for (var i = 0; i < n.items.length; i++)
                            n.itemIds.push(n.items.itemId);
                        window.scrollTo(0, 0),
                        (0,
                        s.ctr1_uv_pv)(),
                        (0,
                        s.categoryStat)(n.cId),
                        (0,
                        s.sortValStat)(n.slotType);
                        try {
                            Collection_TJ.Event("_path=" + n.c_path)
                        } catch (t) {}
                    }).catch(function(t) {})
                }
            }
        }
    }
    ).call(e, n(7))
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        var n = e ? "pageYOffset" : "pageXOffset"
          , i = e ? "scrollTop" : "scrollLeft"
          , a = t[n];
        return "number" != typeof a && (a = window.document.documentElement[i]),
        a
    }
    function a(t) {
        var e = t.getBoundingClientRect()
          , n = i(window, !0)
          , a = i(window)
          , s = window.document.body
          , r = s.clientTop || 0
          , o = s.clientLeft || 0;
        return {
            top: e.top + n - r,
            left: e.left + a - o
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(71)
      , r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(s)
      , o = n(109);
    e.default = {
        name: "Affix",
        props: {
            offsetTop: {
                type: Number,
                default: 0
            },
            offsetBottom: {
                type: Number
            }
        },
        data: function() {
            return {
                affix: !1,
                styles: {}
            }
        },
        computed: {
            offsetType: function() {
                var t = "top";
                return this.offsetBottom >= 0 && (t = "bottom"),
                t
            },
            classes: function() {
                return [(0,
                r.default)({}, "Affix", this.affix)]
            }
        },
        mounted: function() {
            (0,
            o.on)(window, "scroll", this.handleScroll),
            (0,
            o.on)(window, "resize", this.handleScroll)
        },
        beforeDestroy: function() {
            (0,
            o.off)(window, "scroll", this.handleScroll),
            (0,
            o.off)(window, "resize", this.handleScroll)
        },
        methods: {
            handleScroll: function() {
                var t = this.affix
                  , e = i(window, !0)
                  , n = a(this.$el)
                  , s = window.innerHeight
                  , r = this.$el.getElementsByTagName("div")[0].offsetHeight;
                n.top - this.offsetTop < e && "top" == this.offsetType && !t ? (this.affix = !0,
                this.styles = {
                    top: this.offsetTop + "px",
                    left: n.left + "px",
                    width: this.$el.offsetWidth + "px"
                },
                this.$emit("change", !0)) : n.top - this.offsetTop > e && "top" == this.offsetType && t && (this.affix = !1,
                this.styles = null,
                this.$emit("change", !1)),
                n.top + this.offsetBottom + r > e + s && "bottom" == this.offsetType && !t ? (this.affix = !0,
                this.styles = {
                    bottom: this.offsetBottom + "px",
                    left: n.left + "px",
                    width: this.$el.offsetWidth + "px"
                },
                this.$emit("change", !0)) : n.top + this.offsetBottom + r < e + s && "bottom" == this.offsetType && t && (this.affix = !1,
                this.styles = null,
                this.$emit("change", !1))
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "back-index",
        props: {
            height: {
                type: Number,
                default: 600
            },
            href: String
        },
        data: function() {
            return {
                visible: !1
            }
        },
        mounted: function() {
            window.addEventListener("scroll", this.handleScroll, !1),
            window.addEventListener("resize", this.handleScroll, !1)
        },
        beforeDestroy: function() {
            window.removeEventListener("scroll", this.handleScroll, !1),
            window.removeEventListener("resize", this.handleScroll, !1)
        },
        methods: {
            handleScroll: function() {
                this.visible = window.pageYOffset >= this.height
            },
            handleBack: function() {
                window.location.href = this.href
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "back-top",
        data: function() {
            return {
                backTop: !1
            }
        },
        props: {
            height: {
                type: Number,
                default: 600
            },
            bottom: {
                type: Number,
                default: 24
            },
            right: {
                type: Number,
                default: 20
            }
        },
        mounted: function() {
            window.addEventListener("scroll", this.handleScroll, !1),
            window.addEventListener("resize", this.handleScroll, !1)
        },
        beforeDestroy: function() {
            window.removeEventListener("scroll", this.handleScroll, !1),
            window.removeEventListener("resize", this.handleScroll, !1)
        },
        computed: {
            styles: function() {
                return {
                    bottom: this.bottom + "px",
                    right: this.right + "px"
                }
            }
        },
        methods: {
            handleScroll: function() {
                this.backTop = window.pageYOffset >= this.height
            },
            back: function() {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop(window, t, 0, this.duration),
                this.$emit("click")
            },
            scrollTop: function(t) {
                function e(n, i, a) {
                    if (n !== i) {
                        var s = n + a > i ? i : n + a;
                        n > i && (s = n - a < i ? i : n - a),
                        t === window ? window.scrollTo(s, s) : t.scrollTop = s,
                        window.requestAnimationFrame(function() {
                            return e(s, i, a)
                        })
                    }
                }
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments[2]
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500;
                window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
                );
                var s = Math.abs(n - i);
                e(n, i, Math.ceil(s / a * 50))
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "goods-one",
        props: {
            item: Object,
            ztc: Object,
            href: Object
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "goods-two",
        props: {
            item: Object,
            ztc: Object,
            href: Object
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "sort-bar",
        props: {
            openType: Array
        },
        data: function() {
            return {
                indexType: 0,
                type: 1,
                typeValues: [1, 6, 8, 7, [2, 3], [4, 5]],
                da: 0
            }
        },
        mounted: function() {
            this.indexType = this.openType[0]
        },
        methods: {
            sortClick: function(t) {
                this.indexType = t,
                t < 5 ? this.type = this.typeValues[t - 1] : (this.type = this.typeValues[t - 1][this.da],
                this.da = 0 === this.da ? 1 : 0),
                this.$emit("type", this.type)
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(20)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i)
      , s = function() {
        return document.addEventListener ? function(t, e, n) {
            t && e && n && t.addEventListener(e, n, !1)
        }
        : function(t, e, n) {
            t && e && n && t.attachEvent("on" + e, n)
        }
    }()
      , r = function() {
        return document.removeEventListener ? function(t, e, n) {
            t && e && t.removeEventListener(e, n, !1)
        }
        : function(t, e, n) {
            t && e && t.detachEvent("on" + e, n)
        }
    }()
      , o = function(t, e, n) {
        s(t, e, function i() {
            n && n.apply(this, arguments),
            r(t, e, i)
        })
    };
    e.default = {
        name: "swipe",
        created: function() {
            this.dragState = {}
        },
        data: function() {
            return {
                ready: !1,
                dragging: !1,
                userScrolling: !1,
                animating: !1,
                index: 0,
                pages: [],
                timer: null,
                reInitTimer: null,
                noDrag: !1
            }
        },
        props: {
            speed: {
                type: Number,
                default: 300
            },
            auto: {
                type: Number,
                default: 3e3
            },
            continuous: {
                type: Boolean,
                default: !0
            },
            showIndicators: {
                type: Boolean,
                default: !0
            },
            noDragWhenSingle: {
                type: Boolean,
                default: !0
            },
            prevent: {
                type: Boolean,
                default: !1
            },
            indicatorsAlign: {
                type: String,
                default: function(t) {
                    if (void 0 === t)
                        return "right"
                },
                validator: function(t) {}
            }
        },
        methods: {
            swipeItemCreated: function() {
                var t = this;
                this.ready && (clearTimeout(this.reInitTimer),
                this.reInitTimer = setTimeout(function() {
                    t.reInitPages()
                }, 100))
            },
            swipeItemDestroyed: function() {
                var t = this;
                this.ready && (clearTimeout(this.reInitTimer),
                this.reInitTimer = setTimeout(function() {
                    t.reInitPages()
                }, 100))
            },
            translate: function(t, e, n, i) {
                var a = this
                  , s = arguments;
                if (n) {
                    this.animating = !0,
                    t.style.webkitTransition = "-webkit-transform " + n + "ms ease-in-out",
                    setTimeout(function() {
                        t.style.webkitTransform = "translate3d(" + e + "px, 0, 0)"
                    }, 50);
                    var r = !1
                      , c = function() {
                        r || (r = !0,
                        a.animating = !1,
                        t.style.webkitTransition = "",
                        t.style.webkitTransform = "",
                        i && i.apply(a, s))
                    };
                    o(t, "webkitTransitionEnd", c),
                    setTimeout(c, n + 100)
                } else
                    t.style.webkitTransition = "",
                    t.style.webkitTransform = "translate3d(" + e + "px, 0, 0)"
            },
            reInitPages: function() {
                var t = this.$children;
                this.noDrag = 1 === t.length && this.noDragWhenSingle;
                var e = [];
                this.index = 0,
                t.forEach(function(t, n) {
                    e.push(t.$el),
                    a.default.removeClass(t.$el, "is-active"),
                    0 === n && a.default.addClass(t.$el, "is-active")
                }),
                this.pages = e
            },
            doAnimate: function(t, e) {
                var n = this;
                if (0 !== this.$children.length && (e || !(this.$children.length < 2))) {
                    var i, s, r, o, c, l = this.speed || 300, u = this.index, d = this.pages, f = d.length;
                    e ? (i = e.prevPage,
                    r = e.currentPage,
                    s = e.nextPage,
                    o = e.pageWidth,
                    c = e.offsetLeft) : (o = this.$el.clientWidth,
                    r = d[u],
                    i = d[u - 1],
                    s = d[u + 1],
                    this.continuous && d.length > 1 && (i || (i = d[d.length - 1]),
                    s || (s = d[0])),
                    i && (i.style.display = "block",
                    this.translate(i, -o)),
                    s && (s.style.display = "block",
                    this.translate(s, o)));
                    var p, h = this.$children[u].$el;
                    "prev" === t ? (u > 0 && (p = u - 1),
                    this.continuous && 0 === u && (p = f - 1)) : "next" === t && (u < f - 1 && (p = u + 1),
                    this.continuous && u === f - 1 && (p = 0));
                    var v = function() {
                        if (void 0 !== p) {
                            var t = n.$children[p].$el;
                            a.default.removeClass(h, "is-active"),
                            a.default.addClass(t, "is-active"),
                            n.index = p
                        }
                        i && (i.style.display = ""),
                        s && (s.style.display = "")
                    };
                    setTimeout(function() {
                        "next" === t ? (n.translate(r, -o, l, v),
                        s && n.translate(s, 0, l)) : "prev" === t ? (n.translate(r, o, l, v),
                        i && n.translate(i, 0, l)) : (n.translate(r, 0, l, v),
                        void 0 !== c ? (i && c > 0 && n.translate(i, -1 * o, l),
                        s && c < 0 && n.translate(s, o, l)) : (i && n.translate(i, -1 * o, l),
                        s && n.translate(s, o, l)))
                    }, 10)
                }
            },
            next: function() {
                this.doAnimate("next")
            },
            prev: function() {
                this.doAnimate("prev")
            },
            doOnTouchStart: function(t) {
                if (!this.noDrag) {
                    var e = this.$el
                      , n = this.dragState
                      , i = t.touches[0];
                    n.startTime = new Date,
                    n.startLeft = i.pageX,
                    n.startTop = i.pageY,
                    n.startTopAbsolute = i.clientY,
                    n.pageWidth = e.offsetWidth,
                    n.pageHeight = e.offsetHeight;
                    var a = this.$children[this.index - 1]
                      , s = this.$children[this.index]
                      , r = this.$children[this.index + 1];
                    this.continuous && this.pages.length > 1 && (a || (a = this.$children[this.$children.length - 1]),
                    r || (r = this.$children[0])),
                    n.prevPage = a ? a.$el : null,
                    n.dragPage = s ? s.$el : null,
                    n.nextPage = r ? r.$el : null,
                    n.prevPage && (n.prevPage.style.display = "block"),
                    n.nextPage && (n.nextPage.style.display = "block")
                }
            },
            doOnTouchMove: function(t) {
                if (!this.noDrag) {
                    var e = this.dragState
                      , n = t.touches[0];
                    e.currentLeft = n.pageX,
                    e.currentTop = n.pageY,
                    e.currentTopAbsolute = n.clientY;
                    var i = e.currentLeft - e.startLeft
                      , a = e.currentTopAbsolute - e.startTopAbsolute
                      , s = Math.abs(i)
                      , r = Math.abs(a);
                    if (s < 5 || s >= 5 && r >= 1.73 * s)
                        return void (this.userScrolling = !0);
                    this.userScrolling = !1,
                    t.preventDefault(),
                    i = Math.min(Math.max(1 - e.pageWidth, i), e.pageWidth - 1);
                    var o = i < 0 ? "next" : "prev";
                    e.prevPage && "prev" === o && this.translate(e.prevPage, i - e.pageWidth),
                    this.translate(e.dragPage, i),
                    e.nextPage && "next" === o && this.translate(e.nextPage, i + e.pageWidth)
                }
            },
            doOnTouchEnd: function() {
                if (!this.noDrag) {
                    var t = this.dragState
                      , e = new Date - t.startTime
                      , n = null
                      , i = t.currentLeft - t.startLeft
                      , a = t.currentTop - t.startTop
                      , s = t.pageWidth
                      , r = this.index
                      , o = this.pages.length;
                    if (e < 300) {
                        var c = Math.abs(i) < 5 && Math.abs(a) < 5;
                        (isNaN(i) || isNaN(a)) && (c = !0),
                        c && this.$children[this.index].$emit("tap")
                    }
                    e < 300 && void 0 === t.currentLeft || ((e < 300 || Math.abs(i) > s / 2) && (n = i < 0 ? "next" : "prev"),
                    this.continuous || (0 === r && "prev" === n || r === o - 1 && "next" === n) && (n = null),
                    this.$children.length < 2 && (n = null),
                    this.doAnimate(n, {
                        offsetLeft: i,
                        pageWidth: t.pageWidth,
                        prevPage: t.prevPage,
                        currentPage: t.dragPage,
                        nextPage: t.nextPage
                    }),
                    this.dragState = {})
                }
            }
        },
        destroyed: function() {
            this.timer && (clearInterval(this.timer),
            this.timer = null),
            this.reInitTimer && (clearTimeout(this.reInitTimer),
            this.reInitTimer = null)
        },
        mounted: function() {
            var t = this;
            this.ready = !0,
            this.auto > 0 && (this.timer = setInterval(function() {
                t.dragging || t.animating || t.next()
            }, this.auto)),
            this.reInitPages();
            var e = this.$el;
            e.addEventListener("touchstart", function(e) {
                t.prevent && e.preventDefault(),
                t.animating || (t.dragging = !0,
                t.userScrolling = !1,
                t.doOnTouchStart(e))
            }),
            e.addEventListener("touchmove", function(e) {
                t.dragging && t.doOnTouchMove(e)
            }),
            e.addEventListener("touchend", function(e) {
                if (t.userScrolling)
                    return t.dragging = !1,
                    void (t.dragState = {});
                t.dragging && (t.doOnTouchEnd(e),
                t.dragging = !1)
            })
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "swipe-item",
        mounted: function() {
            this.$parent && this.$parent.swipeItemCreated(this)
        },
        destroyed: function() {
            this.$parent && this.$parent.swipeItemDestroyed(this)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "activity-item",
        props: {
            list: {
                type: Array,
                default: []
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "category-two",
        props: {
            category: {
                type: Object,
                detail: {}
            },
            cId: {
                type: String,
                detail: ""
            }
        },
        methods: {
            categoryClick: function(t) {
                this.$emit("change", t)
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        var e = Cookies.get(t)
          , n = {};
        return e ? (n.type = parseInt(e),
        n.show = !1,
        n.read = !1) : (n.type = 2,
        n.show = !1,
        n.read = !0,
        Cookies.set(t, 2)),
        n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        name: "gender-btn",
        props: {
            params: {
                type: Object
            }
        },
        data: function() {
            return {
                classType: ""
            }
        },
        mounted: function() {
            var t = i("gender")
              , e = {
                1: "boy",
                2: "girl",
                3: "pregnant"
            };
            this.classType = e[t.type],
            this.$emit("read", t)
        },
        methods: {
            change: function() {
                this.$emit("change")
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        name: "gender-select",
        data: function() {
            return {
                sex: ""
            }
        },
        watch: {
            sex: function(t) {
                var e = {
                    boy: "1",
                    girl: "2",
                    pregnant: "3"
                };
                Cookies.set("gender", e[t], {
                    expires: 365
                }),
                window.location.href = window.location.origin + "/saber/index"
            }
        },
        props: {
            params: {
                type: Object
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "loading"
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(72)
          , a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
        e.default = {
            data: function() {
                return {
                    visible: !1,
                    showCard: !1,
                    count: 0,
                    result: {},
                    imgList: ["//oss3.lanlanlife.com/abace97c29a807fcd3fb114cf4828c9c_46x188.png", "//oss.lanlanlife.com/2f8ef7afbc3cd024eaec04088caa809a_82x82.png", "//oss1.lanlanlife.com/fb640489cd0121255cfa01ff35773dc9_48x128.png"]
                }
            },
            methods: {
                init: function() {
                    var e = this;
                    t.get("/a_api/index/getAlertInfo").then(function(t) {
                        if (1001 === t.data.status.code)
                            if (e.result = t.data.result,
                            window.localStorage) {
                                var n = localStorage.getItem("cmsPushCard");
                                n ? (n = JSON.parse(n),
                                n.itemId == e.result.itemId && n.activityId == e.result.activityId ? e.visible = !1 : e.handleImgLoading(e.result.coverImage)) : e.handleImgLoading(e.result.coverImage)
                            } else
                                e.handleImgLoading(e.result.coverImage);
                        else
                            e.visible = !1
                    })
                },
                handleImgLoading: function(t) {
                    var e = this;
                    [t].concat((0,
                    a.default)(this.imgList)).forEach(function(t) {
                        var n = new Image;
                        n.src = t,
                        n.onload = function() {
                            e.count++
                        }
                    })
                },
                handleScroll: function() {
                    window.pageYOffset >= 250 && (this.init(),
                    window.removeEventListener("scroll", this.handleScroll, !1))
                },
                handleClose: function() {
                    var t = this;
                    this.showCard = !1,
                    this.$nextTick(function() {
                        t.visible = !1
                    })
                },
                handleClick: function() {
                    window.location.href = this.result.link
                },
                setRecord: function() {
                    localStorage.setItem("cmsPushCard", JSON.stringify({
                        itemId: this.result.itemId,
                        activityId: this.result.activityId
                    }))
                }
            },
            watch: {
                count: function(t) {
                    var e = this;
                    4 === t && (this.visible = !0,
                    this.$nextTick(function() {
                        e.showCard = !0
                    }),
                    window.localStorage && this.setRecord(),
                    setTimeout(function() {
                        e.handleClose()
                    }, 7e3))
                }
            },
            mounted: function() {
                window.addEventListener("scroll", this.handleScroll, !1)
            }
        }
    }
    ).call(e, n(7))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "topic",
        props: {
            topics: Array,
            pid: String
        }
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(73),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(74),
        __esModule: !0
    }
}
, , , function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(68)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i);
    e.default = function(t, e, n) {
        return e in t ? (0,
        a.default)(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(67)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i);
    e.default = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
        return (0,
        a.default)(t)
    }
}
, function(t, e, n) {
    n(45),
    n(100),
    t.exports = n(8).Array.from
}
, function(t, e, n) {
    n(102);
    var i = n(8).Object;
    t.exports = function(t, e, n) {
        return i.defineProperty(t, e, n)
    }
}
, , , , , , function(t, e, n) {
    var i = n(22)
      , a = n(1)("toStringTag")
      , s = "Arguments" == i(function() {
        return arguments
    }())
      , r = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = r(e = Object(t), a)) ? n : s ? i(e) : "Object" == (o = i(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(3)
      , a = n(12);
    t.exports = function(t, e, n) {
        e in t ? i.f(t, e, a(0, n)) : t[e] = n
    }
}
, , , , function(t, e, n) {
    var i = n(11)
      , a = n(1)("iterator")
      , s = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || s[a] === t)
    }
}
, , function(t, e, n) {
    var i = n(10);
    t.exports = function(t, e, n, a) {
        try {
            return a ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var s = t.return;
            throw void 0 !== s && i(s.call(t)),
            e
        }
    }
}
, , function(t, e, n) {
    var i = n(1)("iterator")
      , a = !1;
    try {
        var s = [7][i]();
        s.return = function() {
            a = !0
        }
        ,
        Array.from(s, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !a)
            return !1;
        var n = !1;
        try {
            var s = [7]
              , r = s[i]();
            r.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            s[i] = function() {
                return r
            }
            ,
            t(s)
        } catch (t) {}
        return n
    }
}
, , , , , , , , , , function(t, e, n) {
    var i = n(80)
      , a = n(1)("iterator")
      , s = n(11);
    t.exports = n(8).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[a] || t["@@iterator"] || s[i(t)]
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(34)
      , a = n(14)
      , s = n(44)
      , r = n(87)
      , o = n(85)
      , c = n(43)
      , l = n(81)
      , u = n(99);
    a(a.S + a.F * !n(89)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, a, d, f = s(t), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, m = void 0 !== v, g = 0, _ = u(f);
            if (m && (v = i(v, h > 2 ? arguments[2] : void 0, 2)),
            void 0 == _ || p == Array && o(_))
                for (e = c(f.length),
                n = new p(e); e > g; g++)
                    l(n, g, m ? v(f[g], g) : f[g]);
            else
                for (d = _.call(f),
                n = new p; !(a = d.next()).done; g++)
                    l(n, g, m ? r(d, v, [a.value, g], !0) : a.value);
            return n.length = g,
            n
        }
    })
}
, , function(t, e, n) {
    var i = n(14);
    i(i.S + i.F * !n(4), "Object", {
        defineProperty: n(3).f
    })
}
, , , , , , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "@@InfiniteScroll"
      , a = function(t, e) {
        var n, i, a, s, r, o = function() {
            t.apply(s, r),
            i = n
        };
        return function() {
            if (s = this,
            r = arguments,
            n = Date.now(),
            a && (clearTimeout(a),
            a = null),
            i) {
                var t = e - (n - i);
                t < 0 ? o() : a = setTimeout(function() {
                    o()
                }, t)
            } else
                o()
        }
    }
      , s = function(t) {
        return t === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : t.scrollTop
    }
      , r = document.defaultView.getComputedStyle
      , o = function(t) {
        for (var e = t; e && "HTML" !== e.tagName && "BODY" !== e.tagName && 1 === e.nodeType; ) {
            var n = r(e).overflowY;
            if ("scroll" === n || "auto" === n)
                return e;
            e = e.parentNode
        }
        return window
    }
      , c = function(t) {
        return t === window ? document.documentElement.clientHeight : t.clientHeight
    }
      , l = function(t) {
        return t === window ? s(window) : t.getBoundingClientRect().top + s(window)
    }
      , u = function(t) {
        for (var e = t.parentNode; e; ) {
            if ("HTML" === e.tagName)
                return !0;
            if (11 === e.nodeType)
                return !1;
            e = e.parentNode
        }
        return !1
    }
      , d = function() {
        if (!this.binded) {
            this.binded = !0;
            var t = this
              , e = t.el;
            t.scrollEventTarget = o(e),
            t.scrollListener = a(f.bind(t), 200),
            t.scrollEventTarget.addEventListener("scroll", t.scrollListener);
            var n = e.getAttribute("infinite-scroll-disabled")
              , i = !1;
            n && (this.vm.$watch(n, function(e) {
                t.disabled = e,
                !e && t.immediateCheck && f.call(t)
            }),
            i = Boolean(t.vm[n])),
            t.disabled = i;
            var s = e.getAttribute("infinite-scroll-distance")
              , r = 0;
            s && (r = Number(t.vm[s] || s),
            isNaN(r) && (r = 0)),
            t.distance = r;
            var c = e.getAttribute("infinite-scroll-immediate-check")
              , l = !0;
            c && (l = Boolean(t.vm[c])),
            t.immediateCheck = l,
            l && f.call(t);
            var u = e.getAttribute("infinite-scroll-listen-for-event");
            u && t.vm.$on(u, function() {
                f.call(t)
            })
        }
    }
      , f = function(t) {
        var e = this.scrollEventTarget
          , n = this.el
          , i = this.distance;
        if (!0 === t || !this.disabled) {
            var a = s(e)
              , r = a + c(e)
              , o = !1;
            if (e === n)
                o = e.scrollHeight - r <= i;
            else {
                o = r + i >= l(n) - l(e) + n.offsetHeight + a
            }
            o && this.expression && this.expression()
        }
    };
    e.default = {
        bind: function(t, e, n) {
            t[i] = {
                el: t,
                vm: n.context,
                expression: e.value
            };
            var a = arguments
              , s = function() {
                t[i].vm.$nextTick(function() {
                    u(t) && d.call(t[i], a),
                    t[i].bindTryCount = 0;
                    !function e() {
                        t[i].bindTryCount > 10 || (t[i].bindTryCount++,
                        u(t) ? d.call(t[i], a) : setTimeout(e, 50))
                    }()
                })
            };
            if (t[i].vm._isMounted)
                return void s();
            t[i].vm.$on("hook:mounted", s)
        },
        unbind: function(t) {
            t[i] && t[i].scrollEventTarget && t[i].scrollEventTarget.removeEventListener("scroll", t[i].scrollListener)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.off = e.on = void 0;
    var i = n(13)
      , a = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i)
      , s = a.default.prototype.$isServer;
    e.on = function() {
        return !s && document.addEventListener ? function(t, e, n) {
            t && e && n && t.addEventListener(e, n, !1)
        }
        : function(t, e, n) {
            t && e && n && t.attachEvent("on" + e, n)
        }
    }(),
    e.off = function() {
        return !s && document.removeEventListener ? function(t, e, n) {
            t && e && t.removeEventListener(e, n, !1)
        }
        : function(t, e, n) {
            t && e && t.detachEvent("on" + e, n)
        }
    }()
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function i() {
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        var a = n(13)
          , s = e(a)
          , r = n(19)
          , o = e(r)
          , c = n(48)
          , l = e(c)
          , u = n(46)
          , d = e(u)
          , f = n(47)
          , p = e(f)
          , h = n(49)
          , v = e(h);
        s.default.config.devtools = !0,
        Object.keys(d.default).forEach(function(t) {
            var e = t.replace(/(\w)/, function(t) {
                return t.toUpperCase()
            });
            s.default.component("v" + e, d.default[t])
        }),
        Object.keys(v.default).forEach(function(t) {
            var e = t.replace(/(\w)/, function(t) {
                return t.toUpperCase()
            });
            s.default.component("v" + e, v.default[t])
        }),
        Object.keys(p.default).forEach(function(t) {
            var e = t.replace(/(\w)/, function(t) {
                return t.toUpperCase()
            });
            s.default.directive("" + e, p.default[t])
        }),
        s.default.use(o.default),
        t.defaults.timeout = 1e4,
        t.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencode",
        t.interceptors.response.use(function(t) {
            return _hmt.push(["_trackEvent", "CMS_PAGE_LOADED", "page", "CMS总PV/UV"]),
            t
        }, function(t) {
            return Promise.reject(t)
        });
        var m = 0
          , g = 0
          , _ = 0
          , y = 0
          , b = new o.default({
            mode: "history",
            routes: l.default,
            scrollBehavior: function(t, e, n) {
                "/" !== e.path && "index" !== e.name || (m = i()),
                "/" !== t.path && "index" !== t.name || (g = 0,
                _ = 0,
                y = 0,
                setTimeout(function() {
                    window.scrollTo(0, m)
                }, 200)),
                "search" !== e.name || "detail" !== t.name && "wall" !== t.name || (g = i()),
                "detail" !== e.name && "wall" !== e.name || "search" !== t.name || (_ = 0,
                setTimeout(function() {
                    window.scrollTo(0, g)
                }, 200)),
                "list" === e.name && "detail" === t.name && (_ = i()),
                "detail" === e.name && "list" === t.name && setTimeout(function() {
                    window.scrollTo(0, _)
                }, 200),
                "wall" === e.name && "detail" === t.name && (y = i()),
                "detail" === e.name && "wall" === t.name && setTimeout(function() {
                    window.scrollTo(0, y)
                }, 200)
            }
        });
        b.beforeEach(function(t, e, n) {
            n()
        });
        new s.default({
            router: b
        }).$mount("#app")
    }
    ).call(e, n(7))
}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, , function(t, e, n) {
    "use strict";
    function i(t) {
        n(113)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(51)
      , s = n.n(a)
      , r = n(146)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(114)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(52)
      , s = n.n(a)
      , r = n(147)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(126)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(53)
      , s = n.n(a)
      , r = n(159)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, "data-v-f78eceae", null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(123)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(54)
      , s = n.n(a)
      , r = n(156)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(119)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(55)
      , s = n.n(a)
      , r = n(152)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, "data-v-5f478d88", null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(122)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(56)
      , s = n.n(a)
      , r = n(155)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, "data-v-a36ae11c", null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(117)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(57)
      , s = n.n(a)
      , r = n(150)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(118)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(58)
      , s = n.n(a)
      , r = n(151)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(120)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(59)
      , s = n.n(a)
      , r = n(153)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(116)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(60)
      , s = n.n(a)
      , r = n(149)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(111)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(61)
      , s = n.n(a)
      , r = n(144)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(121)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(62)
      , s = n.n(a)
      , r = n(154)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(115)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(63)
      , s = n.n(a)
      , r = n(148)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(124)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(64)
      , s = n.n(a)
      , r = n(157)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(112)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(65)
      , s = n.n(a)
      , r = n(145)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, "data-v-1b00a3ee", null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        n(125)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(66)
      , s = n.n(a)
      , r = n(158)
      , o = n(0)
      , c = i
      , l = o(s.a, r.a, !1, c, null, null);
    e.default = l.exports
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "category-two"
        }, t._l(t.category, function(e) {
            return n("div", {
                staticClass: "category-item",
                on: {
                    click: function(n) {
                        t.categoryClick(e)
                    }
                }
            }, [n("h1", [n("img", {
                attrs: {
                    src: e.image,
                    alt: ""
                }
            })]), t._v(" "), n("p", {
                class: {
                    "category-active": e.cid == t.cId
                },
                domProps: {
                    textContent: t._s(e.name)
                }
            })])
        }))
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "fade"
            }
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.visible,
                expression: "visible"
            }],
            staticClass: "push-card-mask",
            on: {
                click: function(e) {
                    if (e.target !== e.currentTarget)
                        return null;
                    t.handleClose(e)
                }
            }
        }, [n("transition", {
            attrs: {
                name: "bounce"
            }
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.showCard,
                expression: "showCard"
            }],
            staticClass: "push-card"
        }, [n("img", {
            staticClass: "top-tt",
            attrs: {
                src: t.imgList[0]
            }
        }), t._v(" "), n("img", {
            staticClass: "close",
            attrs: {
                src: t.imgList[1]
            },
            on: {
                click: t.handleClose
            }
        }), t._v(" "), n("img", {
            staticClass: "card-img",
            attrs: {
                src: t.result.coverImage
            }
        }), t._v(" "), n("div", {
            staticClass: "tt"
        }, [t._l(t.result.tabs, function(t) {
            return n("img", {
                attrs: {
                    src: t
                }
            })
        }), t._v(" "), n("span", [t._v(t._s(t.result.title))])], 2), t._v(" "), t.result.price ? n("div", {
            staticClass: "price"
        }, [n("span", [t._v("¥"), n("b", [t._v(t._s(t.result.price.substring(1)))])]), t._v(" "), n("span", {
            staticClass: "coupon"
        }, [t._v(t._s(t.result.amount) + "元券")])]) : t._e(), t._v(" "), n("div", {
            staticClass: "btn",
            on: {
                click: t.handleClick
            }
        }, [t._v("立即查看")])])])], 1)])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", [n("div", {
            staticStyle: {
                width: "100%",
                height: "44px"
            }
        }, [n("div", {
            staticClass: "search"
        }, [n("router-link", {
            staticClass: "search-href",
            attrs: {
                to: t.searchLink() + "&pid=" + t.pid
            }
        }, [n("form", {
            staticClass: "form",
            attrs: {
                action: "javascript:return true;"
            }
        }, [n("div", {
            staticClass: "placeholder"
        }, [n("button", {
            attrs: {
                type: "button"
            }
        }), t._v(" "), n("span", [t._v("立即查找独家优惠券")])]), t._v(" "), n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: t.keyword,
                expression: "keyword"
            }],
            attrs: {
                type: "search",
                disabled: "disabled"
            },
            domProps: {
                value: t.keyword
            },
            on: {
                input: function(e) {
                    e.target.composing || (t.keyword = e.target.value)
                }
            }
        })])])], 1)]), t._v(" "), n("div", {
            staticStyle: {
                width: "100%",
                height: "40px"
            }
        }, [n("div", {
            staticClass: "tabs-wrapper"
        }, [n("div", {
            staticStyle: {
                position: "relative"
            }
        }, [n("div", {
            staticClass: "tabs",
            attrs: {
                id: "tabs"
            }
        }, [t._l(t.categories, function(e) {
            return [n("router-link", {
                class: {
                    "tab-active": e.cid == t.cId
                },
                attrs: {
                    to: t.tabLink(e)
                },
                domProps: {
                    textContent: t._s(e.name)
                }
            })]
        }), t._v(" "), n("a", {
            attrs: {
                href: ""
            }
        }, [t._v(" ")])], 2), t._v(" "), n("span", {
            staticClass: "category",
            on: {
                click: function(e) {
                    t.showCategory = !t.showCategory
                }
            }
        })])])]), t._v(" "), n("div", {
            staticClass: "swipe-main"
        }, ["" == t.cId && t.banners.length > 0 ? n("v-swipe", {
            staticClass: "swipe",
            class: {
                new_swipe: t.banners[0].newImage
            },
            attrs: {
                auto: 4e3
            }
        }, t._l(t.banners, function(e) {
            return n("v-swipe-item", [n("a", {
                attrs: {
                    href: t.bannerLink(e.link) + "&pid=" + t.pid
                },
                on: {
                    click: function(n) {
                        t.bannerClick(e.link)
                    }
                }
            }, [e.newImage ? n("img", {
                attrs: {
                    src: e.newImage
                }
            }) : n("img", {
                attrs: {
                    src: e.image
                }
            })])])
        })) : t._e()], 1), t._v(" "), t.categoryTwo.length > 0 ? n("v-category-two", {
            attrs: {
                category: t.categoryTwo,
                cId: t.cId2
            },
            on: {
                change: t.categoryLink
            }
        }) : t._e(), t._v(" "), t.ztc.itemLogo && "" === t.cId && t.topics.length > 0 ? n("v-topic", {
            attrs: {
                topics: t.topics,
                pid: t.pid
            }
        }) : t._e(), t._v(" "), t.ztc.itemLogo ? n("v-activity-item", {
            attrs: {
                list: t.activityBanner
            }
        }) : t._e(), t._v(" "), n("div", {
            staticClass: "divide"
        }), t._v(" "), n("div", {
            directives: [{
                name: "infinite-scroll",
                rawName: "v-infinite-scroll",
                value: t.loadMore,
                expression: "loadMore"
            }],
            staticClass: "items",
            attrs: {
                "infinite-scroll-disabled": "loading",
                "infinite-scroll-immediate-check": "false",
                "infinite-scroll-distance": "10"
            }
        }, [t.showSortBar ? n("v-affix", {
            attrs: {
                "offset-top": 84
            }
        }, [n("div", {
            staticClass: "sort-bar"
        }, [n("v-sort-bar", {
            attrs: {
                openType: [2, 3, 4, 5]
            },
            on: {
                type: t.type
            }
        })], 1)]) : t._e(), t._v(" "), t._l(t.items, function(e) {
            return [n("v-goods-one", {
                attrs: {
                    item: e,
                    ztc: t.ztc,
                    href: t.detailAndWallLink(e),
                    "data-collection": e.couponWallId ? t.wallPath(e) : t.detailPath(e)
                }
            })]
        }), t._v(" "), n("v-loading", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.loading,
                expression: "loading"
            }]
        })], 2), t._v(" "), t.showCategory ? n("div", {
            staticClass: "categorys",
            on: {
                click: function(e) {
                    if (e.target !== e.currentTarget)
                        return null;
                    t.showCategory = !1
                }
            }
        }, [n("div", {
            staticClass: "wrapper"
        }, [t._l(t.categories, function(e, i) {
            return i > 0 ? [n("router-link", {
                staticClass: "category-cell",
                attrs: {
                    to: t.tabLink(e)
                }
            }, [n("p", {
                staticClass: "category-cell-item"
            }, [t._v(t._s(e.name))])])] : t._e()
        })], 2)]) : t._e(), t._v(" "), t.loading || 0 != t.items.length ? t._e() : n("div", {
            staticClass: "error"
        }, [n("p", [t._v("暂无商品")]), t._v(" "), n("img", {
            attrs: {
                src: "//oss2.lanlanlife.com/a9699930fa61fb48448a02528b008a80_120x162.png"
            }
        }), t._v(" "), n("p", [t._v("请到其他类目逛逛哦~")])]), t._v(" "), t.showBackTop ? n("v-back-top", [n("img", {
            attrs: {
                src: "//oss.lanlanlife.com/08dd6d07a5c9332f7dc7ab84a8ddca05_80x80.png",
                alt: "top"
            }
        })]) : t._e(), t._v(" "), t.packetLink ? n("a", {
            attrs: {
                href: t.packetLink
            }
        }, [n("img", {
            staticClass: "swing animated",
            staticStyle: {
                position: "fixed",
                "z-index": "120",
                right: "5px",
                bottom: "30px",
                width: "64px",
                height: "56px"
            },
            attrs: {
                id: "activity11",
                src: "http://oss1.lanlanlife.com/3fbf07d67f677f5bfb7b600f31e040c5_80x94.png"
            }
        })]) : t._e(), t._v(" "), n("v-push-card")], 1)
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", [n("div", {
            class: t.classes,
            style: t.styles
        }, [t._t("default")], 2)])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {}, [t.params.show || t.params.read ? n("div", {
            staticClass: "gender"
        }) : t._e(), t._v(" "), t.params.read ? n("div", {
            staticClass: "gender-select read"
        }, [n("h1", [t._v("选择身份")]), t._v(" "), n("p", [t._v("以便给你更精准的推荐")]), t._v(" "), n("div", {
            staticClass: "select-sex"
        }, [n("div", {
            staticClass: "girl",
            on: {
                click: function(e) {
                    t.sex = "girl"
                }
            }
        }, [n("img", {
            staticClass: "icon-girl",
            attrs: {
                src: "//oss.lanlanlife.com/7d07244cf2222822b08eeaac38b5b50c_40x172.png"
            }
        })]), t._v(" "), n("div", {
            staticClass: "pregnant",
            on: {
                click: function(e) {
                    t.sex = "pregnant"
                }
            }
        }, [n("img", {
            staticClass: "icon-pregnant",
            attrs: {
                src: "//oss2.lanlanlife.com/796f34d3a3bc5edd02e8ec19b6d6267d_40x168.png"
            }
        })]), t._v(" "), n("div", {
            staticClass: "boy",
            on: {
                click: function(e) {
                    t.sex = "boy"
                }
            }
        }, [n("img", {
            staticClass: "icon-boy",
            attrs: {
                src: "//oss2.lanlanlife.com/577ef857acd76a4942e389590706c3d6_36x176.png"
            }
        })])])]) : t._e(), t._v(" "), t.params.show ? n("div", {
            staticClass: "gender-select show"
        }, [n("span", {
            staticClass: "close",
            on: {
                click: function(e) {
                    t.params.show = !1
                }
            }
        }, [t._v("✕")]), t._v(" "), n("h1", [t._v("切换身份")]), t._v(" "), n("p", {
            staticStyle: {
                width: "2rem"
            }
        }, [t._v("切换身份之后将会跳转到首页")]), t._v(" "), n("div", {
            staticClass: "select-sex"
        }, [n("div", {
            staticClass: "girl",
            on: {
                click: function(e) {
                    t.sex = "girl"
                }
            }
        }, [n("img", {
            staticClass: "icon-girl",
            attrs: {
                src: "//oss.lanlanlife.com/7d07244cf2222822b08eeaac38b5b50c_40x172.png"
            }
        })]), t._v(" "), n("div", {
            staticClass: "pregnant",
            on: {
                click: function(e) {
                    t.sex = "pregnant"
                }
            }
        }, [n("img", {
            staticClass: "icon-pregnant",
            attrs: {
                src: "//oss2.lanlanlife.com/796f34d3a3bc5edd02e8ec19b6d6267d_40x168.png"
            }
        })]), t._v(" "), n("div", {
            staticClass: "boy",
            on: {
                click: function(e) {
                    t.sex = "boy"
                }
            }
        }, [n("img", {
            staticClass: "icon-boy",
            attrs: {
                src: "//oss2.lanlanlife.com/577ef857acd76a4942e389590706c3d6_36x176.png"
            }
        })])])]) : t._e()])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return void 0 !== t.list.length && t.list.length ? n("div", {
            staticClass: "activity-item"
        }, [t._m(0), t._v(" "), void 0 !== t.list.length && 1 == t.list.length ? n("div", {
            staticClass: "activity-item1"
        }, t._l(t.list, function(t) {
            return n("div", {
                staticClass: "item"
            }, [n("a", {
                attrs: {
                    href: t.link
                }
            }, [n("img", {
                attrs: {
                    src: t.imageUrl,
                    alt: ""
                }
            })])])
        })) : t._e(), t._v(" "), void 0 !== t.list.length && 2 == t.list.length ? n("div", {
            staticClass: "activity-item2"
        }, t._l(t.list, function(t) {
            return n("div", {
                staticClass: "item"
            }, [n("a", {
                attrs: {
                    href: t.link
                }
            }, [n("img", {
                attrs: {
                    src: t.imageUrl,
                    alt: ""
                }
            })])])
        })) : t._e(), t._v(" "), void 0 !== t.list.length && 3 == t.list.length ? n("div", {
            staticClass: "activity-item3"
        }, t._l(t.list, function(t) {
            return n("div", {
                staticClass: "item"
            }, [n("a", {
                attrs: {
                    href: t.link
                }
            }, [n("img", {
                attrs: {
                    src: t.imageUrl,
                    alt: ""
                }
            })])])
        })) : t._e()]) : t._e()
    }
      , a = [function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "activity-logo"
        }, [n("img", {
            attrs: {
                src: "//oss.lanlanlife.com/34c8d2d06558c7e08eaa84402287055b_28x396.png",
                alt: ""
            }
        })])
    }
    ]
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "sort-tool"
        }, [t.openType.indexOf(1) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 1 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(1)
                }
            }
        }, [t._v("综合")]) : t._e(), t._v(" "), t.openType.indexOf(2) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 2 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(2)
                }
            }
        }, [t._v("精选")]) : t._e(), t._v(" "), t.openType.indexOf(3) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 3 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(3)
                }
            }
        }, [t._v("销量")]) : t._e(), t._v(" "), t.openType.indexOf(4) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 4 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(4)
                }
            }
        }, [t._v("最新")]) : t._e(), t._v(" "), t.openType.indexOf(5) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 5 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(5)
                }
            }
        }, [n("span", [t._v("价格")]), t._v(" "), n("span", {
            staticClass: "sort-icon"
        }, [n("i", {
            staticClass: "asc",
            class: {
                on: 2 == t.type
            }
        }), t._v(" "), n("i", {
            staticClass: "dsc",
            class: {
                on: 3 == t.type
            }
        })])]) : t._e(), t._v(" "), t.openType.indexOf(6) >= 0 ? n("div", {
            staticClass: "s-box",
            class: {
                active: 6 == t.indexType
            },
            on: {
                click: function(e) {
                    t.sortClick(6)
                }
            }
        }, [n("span", [t._v("折扣力度")]), t._v(" "), n("span", {
            staticClass: "sort-icon"
        }, [n("i", {
            staticClass: "asc",
            class: {
                on: 4 == t.type
            }
        }), t._v(" "), n("i", {
            staticClass: "dsc",
            class: {
                on: 5 == t.type
            }
        })])]) : t._e()])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "mint-swipe"
        }, [n("div", {
            ref: "wrap",
            staticClass: "mint-swipe-items-wrap"
        }, [t._t("default")], 2), t._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.showIndicators,
                expression: "showIndicators"
            }],
            class: "mint-swipe-indicators-" + t.indicatorsAlign
        }, t._l(t.pages, function(e, i) {
            return n("div", {
                staticClass: "mint-swipe-indicator",
                class: {
                    "is-active": i === t.index
                }
            })
        }))])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("router-link", {
            attrs: {
                to: t.href
            }
        }, [n("div", {
            staticClass: "goodsOne"
        }, [n("div", {
            staticClass: "cover-image"
        }, [n("img", {
            staticClass: "image",
            attrs: {
                src: t.item.coverImage
            }
        }), t._v(" "), t.item.couponWallUrl ? [n("p", {
            staticClass: "tong"
        }, [n("img", {
            attrs: {
                src: "//oss1.lanlanlife.com/ac58a858cdee2ae11337a8c0df247fa6_20x20.png"
            }
        }), t._v(" "), t.item.couponWallItemCount ? n("span", [t._v("共" + t._s(t.item.couponWallItemCount) + "件商品")]) : n("span", [t._v("同类商品推荐")])])] : t._e()], 2), t._v(" "), n("div", {
            staticClass: "item-info"
        }, [n("h1", {
            staticClass: "title"
        }, [t._l(t.item.tabs, function(e) {
            return t.ztc.itemLogo ? n("img", {
                staticClass: "tabsImg",
                attrs: {
                    src: e
                }
            }) : t._e()
        }), t._v(" "), t.item.isBaoyou ? n("img", {
            attrs: {
                src: t.item.baoyouImg
            }
        }) : t._e(), t._v(t._s(t.item.title) + "\n                ")], 2), t._v(" "), n("p", {
            staticClass: "rec"
        }, [t._v(t._s(t.item.priorityRecommend))]), t._v(" "), n("div", {
            staticClass: "count"
        }, [t.item.desc ? n("span", [t._v(t._s(t.item.desc))]) : n("span", [t._v("原价 " + t._s(t.item.originPrice.substring(1)) + "元")]), t._v(" "), n("span", {
            staticClass: "alreadyBuy"
        }, [t._v(t._s(t.item.monthSales) + " 人已购")])]), t._v(" "), n("div", {
            staticClass: "coupon"
        }, [n("div", {
            staticClass: "price"
        }, [t._v("\n                        ¥"), n("b", [t._v(t._s(t.item.price.substring(1)))])]), t._v(" "), n("div", {
            staticClass: "count-label"
        }, [n("strong", [t._v(t._s(t.item.amount))]), t._v("元 券\n                    ")])])])])])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement;
        return (t._self._c || e)("div", {
            staticClass: "mint-swipe-item"
        }, [t._t("default")], 2)
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement;
        return (t._self._c || e)("div", {
            class: t.classType,
            attrs: {
                id: "gender-btn"
            },
            on: {
                click: t.change
            }
        })
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "goods-two"
        }, [n("router-link", {
            attrs: {
                to: t.href
            }
        }, [n("div", {
            staticClass: "cover-image"
        }, [n("img", {
            staticClass: "image",
            attrs: {
                src: t.item.coverImage
            }
        }), t._v(" "), t.item.couponWallUrl ? [n("p", {
            staticClass: "tong"
        }, [n("img", {
            attrs: {
                src: "//oss1.lanlanlife.com/ac58a858cdee2ae11337a8c0df247fa6_20x20.png"
            }
        }), t._v(" "), t.item.couponWallItemCount ? n("span", [t._v("共" + t._s(t.item.couponWallItemCount) + "件商品")]) : n("span", [t._v("同类商品推荐")])])] : t._e()], 2), t._v(" "), n("h1", {
            staticClass: "title"
        }, [t._l(t.item.tabs, function(e) {
            return t.ztc.itemLogo ? n("img", {
                staticClass: "tabsImg",
                attrs: {
                    src: e
                }
            }) : t._e()
        }), t._v(" "), t.item.isBaoyou ? n("img", {
            attrs: {
                src: t.item.baoyouImg
            }
        }) : t._e(), t._v(t._s(t.item.title) + "\n        ")], 2), t._v(" "), n("div", {
            staticClass: "count"
        }, [t.item.desc ? n("span", [t._v(t._s(t.item.desc))]) : n("span", [t._v("原价 " + t._s(t.item.originPrice.substring(1)) + "元")]), t._v(" "), n("span", {
            staticClass: "alreadyBuy"
        }, [t._v(t._s(t.item.monthSales) + " 人已购")])]), t._v(" "), n("div", {
            staticClass: "coupon"
        }, [n("div", {
            staticClass: "price"
        }, [t._v("\n                ¥"), n("b", [t._v(t._s(t.item.price.substring(1)))])]), t._v(" "), n("div", {
            staticClass: "count-label"
        }, [n("strong", [t._v(t._s(t.item.amount))]), t._v("元 券\n            ")])])])], 1)
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement;
        return (t._self._c || e)("div", {
            class: {
                on: t.backTop
            },
            style: t.styles,
            attrs: {
                id: "scroll_top_icon"
            },
            on: {
                click: t.back
            }
        }, [t._t("default")], 2)
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement;
        t._self._c;
        return t._m(0)
    }
      , a = [function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "loading"
        }, [n("img", {
            attrs: {
                src: "//oss1.lanlanlife.com/f5ed64b94f4bd995e5d8ea8dfda382a4_62x62.gif"
            }
        }), t._v(" "), n("p", [t._v("正在加载...")])])
    }
    ]
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "row topic-wrapper"
        }, [n("div", {
            staticClass: "col c4"
        }, [n("router-link", {
            attrs: {
                to: t.topics[0].link + "&_path=9001.CH.1&pid=" + t.pid
            }
        }, [n("img", {
            attrs: {
                src: t.topics[0].image,
                "data-collection": "_path=9001.CH.1"
            }
        })])], 1), t._v(" "), n("div", {
            staticClass: "col c8"
        }, [n("div", {
            staticClass: "topic-right"
        }, [n("router-link", {
            attrs: {
                to: t.topics[1].link + "&_path=9001.CH.2&pid=" + t.pid
            }
        }, [n("img", {
            attrs: {
                src: t.topics[1].image,
                "data-collection": "_path=9001.CH.2"
            }
        })]), t._v(" "), n("div", {
            staticClass: "row down"
        }, [n("router-link", {
            staticClass: "col c6",
            attrs: {
                to: t.topics[2].link + "&_path=9001.CH.3&pid=" + t.pid
            }
        }, [n("img", {
            attrs: {
                src: t.topics[2].image,
                "data-collection": "_path=9001.CH.3"
            }
        })]), t._v(" "), n("router-link", {
            staticClass: "col c6",
            attrs: {
                to: t.topics[3].link + "&_path=9001.CH.4&pid=" + t.pid
            }
        }, [n("img", {
            attrs: {
                src: t.topics[3].image,
                "data-collection": "_path=9001.CH.4"
            }
        })])], 1)], 1)])])
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        var t = this
          , e = t.$createElement;
        return (t._self._c || e)("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.visible,
                expression: "visible"
            }],
            staticClass: "back-index",
            on: {
                click: t.handleBack
            }
        }, [t._t("default")], 2)
    }
      , a = []
      , s = {
        render: i,
        staticRenderFns: a
    };
    e.a = s
}
, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], i = {}, a = 0; a < e.length; a++) {
            var s = e[a]
              , r = s[0]
              , o = s[1]
              , c = s[2]
              , l = s[3]
              , u = {
                id: t + ":" + a,
                css: o,
                media: c,
                sourceMap: l
            };
            i[r] ? i[r].parts.push(u) : n.push(i[r] = {
                id: r,
                parts: [u]
            })
        }
        return n
    }
}
, , , , function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var n = this[e];
                n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
            }
            return t.join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {}, a = 0; a < this.length; a++) {
                var s = this[a][0];
                "number" == typeof s && (i[s] = !0)
            }
            for (a = 0; a < e.length; a++) {
                var r = e[a];
                "number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"),
                t.push(r))
            }
        }
        ,
        t
    }
}
, function(t, e, n) {
    function i(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e]
              , i = u[n.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++)
                    i.parts[a](n.parts[a]);
                for (; a < n.parts.length; a++)
                    i.parts.push(s(n.parts[a]));
                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
            } else {
                for (var r = [], a = 0; a < n.parts.length; a++)
                    r.push(s(n.parts[a]));
                u[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }
    function a() {
        var t = document.createElement("style");
        return t.type = "text/css",
        d.appendChild(t),
        t
    }
    function s(t) {
        var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
        if (i) {
            if (h)
                return v;
            i.parentNode.removeChild(i)
        }
        if (m) {
            var s = p++;
            i = f || (f = a()),
            e = r.bind(null, i, s, !1),
            n = r.bind(null, i, s, !0)
        } else
            i = a(),
            e = o.bind(null, i),
            n = function() {
                i.parentNode.removeChild(i)
            }
            ;
        return e(t),
        function(i) {
            if (i) {
                if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap)
                    return;
                e(t = i)
            } else
                n()
        }
    }
    function r(t, e, n, i) {
        var a = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = g(e, a);
        else {
            var s = document.createTextNode(a)
              , r = t.childNodes;
            r[e] && t.removeChild(r[e]),
            r.length ? t.insertBefore(s, r[e]) : t.appendChild(s)
        }
    }
    function o(t, e) {
        var n = e.css
          , i = e.media
          , a = e.sourceMap;
        if (i && t.setAttribute("media", i),
        a && (n += "\n/*# sourceURL=" + a.sources[0] + " */",
        n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
        t.styleSheet)
            t.styleSheet.cssText = n;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var l = n(160)
      , u = {}
      , d = c && (document.head || document.getElementsByTagName("head")[0])
      , f = null
      , p = 0
      , h = !1
      , v = function() {}
      , m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function(t, e, n) {
        h = n;
        var a = l(t, e);
        return i(a),
        function(e) {
            for (var n = [], s = 0; s < a.length; s++) {
                var r = a[s]
                  , o = u[r.id];
                o.refs--,
                n.push(o)
            }
            e ? (a = l(t, e),
            i(a)) : a = [];
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                if (0 === o.refs) {
                    for (var c = 0; c < o.parts.length; c++)
                        o.parts[c]();
                    delete u[o.id]
                }
            }
        }
    }
    ;
    var g = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n,
            t.filter(Boolean).join("\n")
        }
    }()
}
], [110]);
