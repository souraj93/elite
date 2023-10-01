!function(a) {
    "use strict";
    window.qodef = {},
    window.qodefEmptyCallback = function() {}
    ,
    qodef.body = a("body"),
    qodef.html = a("html"),
    qodef.window = a(window),
    qodef.windowWidth = a(window).width(),
    qodef.windowHeight = a(window).height(),
    qodef.scroll = 0,
    a(document).ready(function() {
        qodef.scroll = a(window).scrollTop(),
        i.init(),
        x.init(),
        o.init(),
        s.init()
    }),
    a(window).resize(function() {
        qodef.windowWidth = a(window).width(),
        qodef.windowHeight = a(window).height()
    }),
    a(window).scroll(function() {
        qodef.scroll = a(window).scrollTop()
    }),
    a(document).on("newhome_trigger_get_new_posts", function() {
        x.init(),
        o.init()
    }),
    a(document).on("newhome_core_trigger_full_width_list", function() {
        x.init()
    });
    var i = {
        init: function() {
            i.addBodyClassName()
        },
        isBrowser: function(e) {
            var t = !1;
            switch (e) {
            case "chrome":
                t = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                break;
            case "safari":
                t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                break;
            case "firefox":
                t = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
                break;
            case "ie":
                t = 0 < window.navigator.userAgent.indexOf("MSIE ") || !!navigator.userAgent.match(/Trident.*rv\:11\./);
                break;
            case "edge":
                t = /Edge\/\d./i.test(navigator.userAgent)
            }
            return t
        },
        addBodyClassName: function() {
            a.each(["chrome", "safari", "firefox", "ie", "edge"], function(e, t) {
                i.isBrowser(t) && void 0 !== qodef.body && ("ie" === t && (t = "ms-explorer"),
                qodef.body.addClass("qodef-browser--" + t))
            })
        }
    }
      , x = {
        init: function(e) {
            this.holder = a(".qodef-swiper-container"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                x.initSlider(a(this))
            })
        },
        initSlider: function(e) {
            var t = x.getOptions(e)
              , i = x.getEvents(e, t);
            new Swiper(e[0],Object.assign(t, i))
        },
        getOptions: function(e) {
            var t = void 0 !== e.data("options") ? e.data("options") : {}
              , i = void 0 !== t.direction && "" !== t.direction ? t.direction : "horizontal"
              , o = void 0 !== t.spaceBetween && "" !== t.spaceBetween ? t.spaceBetween : 0
              , n = void 0 !== t.spaceBetween1440 && "" !== t.spaceBetween1440 ? t.spaceBetween1440 : o
              , a = void 0 !== t.spaceBetween1024 && "" !== t.spaceBetween1024 ? t.spaceBetween1024 : o
              , s = void 0 !== t.spaceBetween680 && "" !== t.spaceBetween680 ? t.spaceBetween680 : o
              , d = void 0 !== t.slidesPerView && "" !== t.slidesPerView ? t.slidesPerView : 1
              , r = void 0 !== t.centeredSlides && "" !== t.centeredSlides && t.centeredSlides
              , l = void 0 !== t.sliderScroll && "" !== t.sliderScroll && t.sliderScroll
              , c = void 0 === t.loop || "" === t.loop || t.loop
              , f = void 0 === t.autoplay || "" === t.autoplay || t.autoplay
              , h = void 0 !== t.speed && "" !== t.speed ? parseInt(t.speed, 10) : 5e3
              , u = void 0 !== t.speedAnimation && "" !== t.speedAnimation ? parseInt(t.speedAnimation, 10) : 800
              , p = void 0 !== t.slideAnimation && "" !== t.slideAnimation ? t.slideAnimation : ""
              , g = void 0 !== t.customStages && "" !== t.customStages && t.customStages
              , m = void 0 !== t.outsideNavigation && "yes" === t.outsideNavigation
              , w = m ? ".swiper-button-next-" + t.unique : e.find(".swiper-button-next").length ? e.find(".swiper-button-next")[0] : null
              , m = m ? ".swiper-button-prev-" + t.unique : e.find(".swiper-button-prev").length ? e.find(".swiper-button-prev")[0] : null
              , v = e.find(".swiper-pagination").length ? e.find(".swiper-pagination")[0] : null
              , q = void 0 !== t.loopedSlides && "" !== t.loopedSlides ? parseInt(t.loopedSlides) : null
              , y = void 0 !== t.hiddenSlides && "" !== t.hiddenSlides ? t.hiddenSlides : null
              , h = (!0 === f && (f = {
                disableOnInteraction: !1
            },
            5e3 !== h) && (f.delay = h),
            5)
              , b = 4
              , _ = 3
              , C = 2
              , P = 1
              , S = 1
              , g = (void 0 !== t.slidesPerView1440 && "" !== t.slidesPerView1440 && (h = "auto" === t.slidesPerView1440 ? "auto" : parseInt(t.slidesPerView1440, 10)),
            void 0 !== t.slidesPerView1366 && "" !== t.slidesPerView1366 && (b = "auto" === t.slidesPerView1366 ? "auto" : parseInt(t.slidesPerView1366, 10)),
            void 0 !== t.slidesPerView1024 && "" !== t.slidesPerView1024 && (_ = "auto" === t.slidesPerView1024 ? "auto" : parseInt(t.slidesPerView1024, 10)),
            void 0 !== t.slidesPerView768 && "" !== t.slidesPerView768 && (C = "auto" === t.slidesPerView768 ? "auto" : parseInt(t.slidesPerView768, 10)),
            void 0 !== t.slidesPerView680 && "" !== t.slidesPerView680 && (P = "auto" === t.slidesPerView680 ? "auto" : parseInt(t.slidesPerView680, 10)),
            g || (d < 2 ? C = _ = b = h = d : d < 3 ? _ = b = h = d : d < 4 ? b = h = d : d < 5 && (h = d)),
            {
                direction: i,
                slidesPerView: d = "vertical" === i ? 1 : d,
                centeredSlides: r,
                sliderScroll: l,
                autoplay: f,
                loop: c,
                loopedSlides: q,
                speed: u,
                navigation: {
                    nextEl: w,
                    prevEl: m
                },
                pagination: {
                    el: v,
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    0: {
                        slidesPerView: S = void 0 !== t.slidesPerView480 && "" !== t.slidesPerView480 ? "auto" === t.slidesPerView480 ? "auto" : parseInt(t.slidesPerView480, 10) : S,
                        spaceBetween: s
                    },
                    481: {
                        slidesPerView: P,
                        spaceBetween: s
                    },
                    681: {
                        slidesPerView: C,
                        spaceBetween: a
                    },
                    769: {
                        slidesPerView: _,
                        spaceBetween: a
                    },
                    1025: {
                        slidesPerView: b,
                        spaceBetween: n
                    },
                    1367: {
                        slidesPerView: h,
                        spaceBetween: n
                    },
                    1441: {
                        slidesPerView: d,
                        spaceBetween: o
                    }
                }
            });
            return p.length && "fade" === p && (g.effect = "fade",
            g.fadeEffect = {
                crossFade: !0
            }),
            "yes" === y && qodef.body.addClass("qodef-swiper--show-hidden-slides"),
            Object.assign(g, x.getSliderDatas(e))
        },
        getSliderDatas: function(e) {
            var t, i = e.data(), o = {};
            for (t in i)
                i.hasOwnProperty(t) && "options" !== t && void 0 !== i[t] && "" !== i[t] && (o[t] = i[t]);
            return o
        },
        getEvents: function(o, n) {
            return {
                on: {
                    beforeInit: function() {
                        var e, t, i;
                        "vertical" === n.direction && (t = e = 0,
                        (i = o.find(".qodef-e")).length && i.each(function() {
                            t = a(this).outerHeight(),
                            e < t && (e = t)
                        }),
                        o.css("height", e),
                        i.css("height", e))
                    },
                    init: function() {
                        var t;
                        o.addClass("qodef-swiper--initialized"),
                        qodef.body.trigger("newhome_trigger_swiper_is_initialized", [o, n]),
                        n.sliderScroll && (t = !1,
                        o.on("mousewheel", function(e) {
                            e.preventDefault(),
                            t || (t = !0,
                            e.deltaY < 0 ? o[0].swiper.slideNext() : o[0].swiper.slidePrev(),
                            setTimeout(function() {
                                t = !1
                            }, 1e3))
                        }))
                    }
                }
            }
        }
    }
      , o = (qodef.qodefSwiper = x,
    {
        init: function(e) {
            this.holder = a(".qodef-magnific-popup"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                o.initPopup(a(this))
            })
        },
        initPopup: function(e) {
            e.hasClass("qodef-popup-item") ? o.initSingleImagePopup(e) : e.hasClass("qodef-popup-gallery") && o.initGalleryPopup(e)
        },
        initSingleImagePopup: function(e) {
            var t = e.data("type");
            e.magnificPopup({
                type: t,
                titleSrc: "title",
                removalDelay: 350,
                mainClass: "mfp-fade",
                image: {
                    cursor: null
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + "</button>"
            })
        },
        initGalleryPopup: function(e) {
            var e = e.find(".qodef-popup-item")
              , t = o.generateGalleryItems(e);
            e.each(function(e) {
                a(this).magnificPopup({
                    items: t,
                    gallery: {
                        enabled: !0,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' + qodefGlobal.vars.iconArrowLeft + "</button>"
                    },
                    index: e,
                    type: "image",
                    mainClass: "mfp-fade",
                    removalDelay: 350,
                    image: {
                        cursor: null
                    },
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + "</button>"
                })
            })
        },
        generateGalleryItems: function(e) {
            var t = [];
            return e.length && e.each(function() {
                var e = a(this)
                  , e = {
                    src: e.attr("href"),
                    title: e.attr("title"),
                    type: e.data("type")
                };
                t.push(e)
            }),
            t
        }
    })
      , s = (qodef.qodefMagnificPopup = o,
    {
        items: "",
        init: function(e) {
            this.holder = a(".qodef-anchor"),
            a.extend(this.holder, e),
            this.holder.length && (s.items = this.holder,
            s.clickTrigger(),
            a(window).on("load", function() {
                s.checkAnchorOnScroll(),
                s.checkAnchorOnLoad()
            }))
        },
        clickTrigger: function() {
            s.items.on("click", function(e) {
                var t = s.getAnchorItem(this)
                  , i = t.attr("href")
                  , o = t.prop("hash").split("#")[1]
                  , n = window.location.href
                  , a = -1 < n.indexOf("#") ? n.split("#")[1] : 0;
                (i.indexOf("http") < 0 || i === n || 0 !== a && i.substring(0, i.length - o.length - 1) === n.substring(0, n.length - a.length - 1) || 0 === a && i.substring(0, i.length - o.length - 1) === n) && e.preventDefault(),
                s.animateScroll(t, o)
            })
        },
        checkAnchorOnLoad: function() {
            var t = window.location.hash.split("#")[1];
            void 0 !== t && "" !== t && s.items.length && s.items.each(function() {
                var e = s.getAnchorItem(this);
                -1 < e.attr("href").indexOf(t) && s.animateScroll(e, t)
            })
        },
        checkAnchorOnScroll: function() {
            var e;
            1024 < qodef.windowWidth && (e = a("#qodef-page-inner *[id]")).length && e.each(function() {
                var e = a(this)
                  , t = a('[href*="#' + e.attr("id") + '"]');
                t.length && (s.isTargetInView(e) && s.setActiveState(t),
                a(window).scroll(function() {
                    s.isTargetInView(e) ? s.setActiveState(t) : t.removeClass(s.getItemClasses(t))
                }))
            })
        },
        isTargetInView: function(e) {
            var e = e[0].getBoundingClientRect()
              , t = window.innerHeight || document.documentElement.clientHeight;
            return !(Math.floor(100 - (0 <= e.top ? 0 : e.top) / -+e.height * 100) < 20 || Math.floor(100 - (e.bottom - t) / e.height * 100) < 20)
        },
        getAnchorItem: function(e) {
            return "A" === e.tagName ? a(e) : a(e).children("a")
        },
        animateScroll: function(e, t) {
            var i = "" !== t ? a('[id="' + t + '"]') : "";
            if (i.length)
                return i = i.offset().top - s.getHeaderHeight() - qodefGlobal.vars.adminBarHeight,
                s.setActiveState(e),
                qodef.html.stop().animate({
                    scrollTop: Math.round(i)
                }, 1e3, function() {
                    history.pushState && history.pushState(null, "", "#" + t)
                }),
                !1
        },
        getHeaderHeight: function() {
            var e = 0;
            return e = 1024 < qodef.windowWidth && null !== qodefGlobal.vars.headerHeight && "" !== qodefGlobal.vars.headerHeight ? parseInt(qodefGlobal.vars.headerHeight, 10) : e
        },
        setActiveState: function(e) {
            var t = !e.parent().hasClass("qodef-anchor")
              , i = s.getItemClasses(e);
            s.items.removeClass(i),
            (t ? e : e.parent()).addClass(i)
        },
        getItemClasses: function(e) {
            return "qodef-anchor--active" + (e.parents("#qodef-page-header") ? " current-menu-item current_page_item" : "")
        }
    })
      , e = (qodef.qodefAnchor = s,
    {
        check: function(e, t) {
            if (e.length) {
                var i = e.find("img");
                if (i.length)
                    for (var o = 0, n = 0; n < i.length; n++) {
                        var a, s = i[n];
                        s.complete ? ++o === i.length && t.call(e) : ((a = new Image).addEventListener("load", function() {
                            if (++o === i.length)
                                return t.call(e),
                                !1
                        }, !1),
                        a.src = s.src)
                    }
                else
                    t.call(e)
            }
        }
    });
    qodef.qodefWaitForImages = e,
    "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            if (null !== i)
                for (var o in i)
                    Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
        }
        return e
    }
    )
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        n.init()
    }),
    o(window).resize(function() {
        n.init()
    }),
    o(document).on("newhome_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-blog") && (i.resize(t),
        n.resize(t))
    });
    var i = {
        init: function() {
            var e = o(".qodef-blog");
            e.length && i.resize(e)
        },
        resize: function(e) {
            e = e.find(".wp-video-shortcode, .wp-audio-shortcode").not(".mejs-container");
            e.length && e.each(function() {
                var e = o(this);
                "function" == typeof e.mediaelementplayer && e.mediaelementplayer({
                    videoWidth: "100%",
                    videoHeight: "56.5%"
                })
            })
        }
    }
      , n = (qodef.qodefReInitMediaElementPostFormats = i,
    {
        init: function() {
            var e = o(".qodef-blog");
            e.length && n.resize(e)
        },
        resize: function(e) {
            e = e.find(".qodef-e-media iframe");
            e.length && e.each(function() {
                var e = o(this)
                  , t = e.attr("width")
                  , i = e.attr("height")
                  , t = e.width() / t * i;
                e.css("height", t)
            })
        }
    });
    qodef.qodefResizeIframes = n
}(jQuery),
function(n) {
    "use strict";
    n(document).ready(function() {
        a.init()
    }),
    n(document).on("newhome_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-filter--on") && t.removeClass("qodef--filter-loading")
    });
    var a = {
        init: function(e) {
            this.holder = n(".qodef-filter--on"),
            n.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = n(this)
                  , t = e.find(".qodef-m-filter-item")
                  , i = a.checkCustomListQuery(e.data("options"));
                a.clickEvent(e, t, i)
            })
        },
        checkCustomListQuery: function(e) {
            if (void 0 !== e.additional_query_args && void 0 !== e.additional_query_args.tax_query)
                return e.additional_query_args.tax_query
        },
        clickEvent: function(t, i, o) {
            i.on("click", function(e) {
                e.preventDefault();
                e = n(this);
                e.hasClass("qodef--active") || (t.addClass("qodef--filter-loading"),
                i.removeClass("qodef--active"),
                e.addClass("qodef--active"),
                a.setVisibility(t, e, o))
            })
        },
        setVisibility: function(e, t, i) {
            var o = t.data("taxonomy")
              , t = t.data("filter")
              , i = "*" === t ? i : {
                0: {
                    taxonomy: o,
                    field: "number" == typeof t ? "term_id" : "slug",
                    terms: t
                }
            };
            e.data("options").additional_query_args = {
                tax_query: i
            },
            qodef.body.trigger("newhome_trigger_load_more", [e, 1])
        },
        isMasonryLayout: function(e) {
            return e.hasClass("qodef-layout--masonry")
        },
        hasLoadMore: function(e) {
            return e.hasClass("qodef-pagination-type--load-more")
        }
    };
    qodef.qodefFilter = a
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        a.init()
    }),
    t(window).resize(function() {
        a.init()
    }),
    t(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && elementor.channels.editor.on("change", function() {
            a.init()
        })
    }),
    t(document).on("newhome_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-layout--masonry") && a.init()
    });
    var a = {
        init: function(e) {
            this.holder = t(".qodef-layout--masonry"),
            t.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                a.createMasonry(t(this))
            })
        },
        createMasonry: function(e) {
            var t = e.find(".qodef-grid-inner")
              , i = t.find(".qodef-grid-item")
              , o = a.getFixedImageSize(t)
              , n = parseInt(t.css("column-gap"));
            i.css("width", o),
            qodef.qodefWaitForImages.check(t, function() {
                "function" == typeof t.isotope && (t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-grid-item",
                    percentPosition: !0,
                    packery: {
                        columnWidth: ".qodef-grid-masonry-sizer",
                        gutter: n
                    }
                }),
                e.hasClass("qodef-items--fixed") && a.setFixedImageProportionSize(t, i, o, n),
                t.isotope("layout")),
                t.addClass("qodef--masonry-init")
            })
        },
        getFixedImageSize: function(e) {
            var t, i = e.find(".qodef-item--square");
            return i.length ? (t = (i = i.find("img")).width()) !== (i = i.height()) ? i : t : e.find(".qodef-grid-masonry-sizer").width()
        },
        setFixedImageProportionSize: function(e, t, o, n) {
            var a = qodef.windowWidth <= 680
              , s = e.parent().hasClass("qodef-col-num--1");
            t.length && t.each(function() {
                var e = this
                  , t = o
                  , i = o;
                s ? (e.classList.contains("qodef-item--landscape") && (i = Math.round(o / 2)),
                e.classList.contains("qodef-item--portrait") && (i = Math.round(2 * o))) : (e.classList.contains("qodef-item--landscape") && (t = Math.round(2 * o + n),
                a) && (t = Math.round(o),
                i = Math.round(o / 2)),
                e.classList.contains("qodef-item--portrait") && (i = Math.round(2 * o + n)),
                e.classList.contains("qodef-item--huge-square") && (t = Math.round(2 * o + n),
                i = Math.round(2 * o + n),
                a) && (t = Math.round(o),
                i = Math.round(o))),
                e.style.width = t + "px",
                e.style.height = i + "px"
            })
        }
    };
    qodef.qodefMasonryLayout = a
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        i.init()
    });
    var i = {
        init: function() {
            var e = t("#qodef-page-mobile-header");
            e.length && (i.initMobileHeaderOpener(e),
            i.initDropDownMobileMenu())
        },
        initMobileHeaderOpener: function(e) {
            var t, i = e.find(".qodef-mobile-header-opener");
            i.length && (t = e.find(".qodef-mobile-header-navigation"),
            i.on("tap click", function(e) {
                e.preventDefault(),
                t.is(":visible") ? (t.slideUp(450),
                i.removeClass("qodef--opened")) : (t.slideDown(450),
                i.addClass("qodef--opened"))
            }))
        },
        initDropDownMobileMenu: function() {
            var e = t(".qodef-mobile-header-navigation .menu-item-has-children > .qodef-menu-item-arrow, .qodef-mobile-header-navigation .menu-item-has-children.qodef--hide-link > a");
            e.length && e.each(function() {
                var o = t(this);
                o.on("tap click", function(e) {
                    e.preventDefault();
                    var t, e = o.parent(), i = e.siblings(".menu-item-has-children");
                    e.hasClass("menu-item-has-children") && ((t = e.find("ul.sub-menu").first()).is(":visible") ? (t.slideUp(450),
                    e.removeClass("qodef--opened")) : (e.addClass("qodef--opened"),
                    (0 === i.length ? e : e.siblings().removeClass("qodef--opened")).find(".sub-menu").slideUp(400, function() {
                        t.slideDown(400)
                    })))
                })
            })
        }
    }
}(jQuery),
function(a) {
    a(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            var e = a(".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children");
            e.length && e.each(function() {
                var e, t = a(this), i = t.offset().left, o = t.find(" > ul"), n = o.outerWidth(), i = a(window).width() - i;
                0 < t.find("li.menu-item-has-children").length && (e = i - n),
                o.removeClass("qodef-drop-down--right"),
                (i < n || e < n) && o.addClass("qodef-drop-down--right")
            })
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        s.init()
    }),
    a(window).scroll(function() {
        s.scroll()
    }),
    a(document).on("newhome_trigger_load_more", function(e, t, i, o) {
        s.triggerLoadMore(t, i, o)
    });
    var s = {
        init: function(e) {
            this.holder = a(".qodef-pagination--on"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = a(this);
                s.initPaginationType(e)
            })
        },
        scroll: function(e) {
            this.holder = a(".qodef-pagination--on"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = a(this);
                e.hasClass("qodef-pagination-type--infinite-scroll") && s.initInfiniteScroll(e)
            })
        },
        initPaginationType: function(e) {
            e.hasClass("qodef-pagination-type--standard") ? s.initStandard(e) : e.hasClass("qodef-pagination-type--load-more") ? s.initLoadMore(e) : e.hasClass("qodef-pagination-type--infinite-scroll") && s.initInfiniteScroll(e)
        },
        initStandard: function(i, e) {
            var t, o = i.find(".qodef-m-pagination-items");
            o.length && (t = i.data("options"),
            e = void 0 !== e && "" !== e ? parseInt(e, 10) : 1,
            s.changeStandardState(i, t.max_pages_num, e),
            o.children().each(function() {
                var t = a(this);
                t.on("click", function(e) {
                    e.preventDefault(),
                    t.hasClass("qodef--active") || s.getNewPosts(i, t.data("paged"))
                })
            }))
        },
        changeStandardState: function(e, t, i) {
            var o, n, a;
            e.hasClass("qodef-pagination-type--standard") && (o = (e = e.find(".qodef-m-pagination-items")).children(".qodef--number"),
            n = e.children(".qodef--prev"),
            a = e.children(".qodef--next"),
            s.standardPaginationVisibility(e, t),
            o.removeClass("qodef--active").eq(i - 1).addClass("qodef--active"),
            n.data("paged", i - 1),
            1 < i ? (n.show(),
            n.next().removeClass("qodef-prev--hidden")) : (n.hide(),
            n.next().addClass("qodef-prev--hidden")),
            a.data("paged", i + 1),
            i === t ? a.hide() : a.show())
        },
        standardPaginationVisibility: function(e, t) {
            1 === t ? e.hide() : 1 < t && !e.is(":visible") && e.show()
        },
        changeStandardHtml: function(e, t, i, o) {
            var n, a;
            e.hasClass("qodef-pagination-type--standard") && (n = e.find(".qodef-m-pagination"),
            a = e.find(".qodef-m-pagination-spinner"),
            s.standardPaginationVisibility(n, t),
            n.remove(),
            a.remove(),
            e.append(o),
            s.initStandard(e, i))
        },
        triggerStandardScrollAnimation: function(e) {
            e.hasClass("qodef-pagination-type--standard") && a("html, body").animate({
                scrollTop: e.offset().top - 100
            }, 500)
        },
        initLoadMore: function(t) {
            t.find(".qodef-load-more-button").on("click", function(e) {
                e.preventDefault(),
                s.getNewPosts(t)
            })
        },
        triggerLoadMore: function(e, t, i="") {
            s.getNewPosts(e, t, i)
        },
        loadMoreButtonVisibility: function(e, t) {
            e.hasClass("qodef-pagination-type--load-more") && (t.next_page > t.max_pages_num || 1 === t.max_pages_num ? e.find(".qodef-load-more-button").hide() : 1 < t.max_pages_num && t.next_page <= t.max_pages_num && e.find(".qodef-load-more-button").show())
        },
        initInfiniteScroll: function(e) {
            var t = e.outerHeight() + e.offset().top
              , i = qodef.scroll + qodef.windowHeight
              , o = e.data("options");
            !e.hasClass("qodef--loading") && t < i && o.max_pages_num >= o.next_page && s.getNewPosts(e)
        },
        getNewPosts: function(t, i, e="") {
            t.addClass("qodef--loading"),
            e.length && t.addClass(e);
            var o = t.children(".qodef-grid-inner")
              , n = t.data("options");
            s.setNextPageValue(n, i, !1),
            a.ajax({
                type: "GET",
                url: qodefGlobal.vars.restUrl + qodefGlobal.vars.paginationRestRoute,
                data: {
                    options: n
                },
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                },
                success: function(e) {
                    "success" === e.status ? (n.max_pages_num !== e.data.max_pages_num && (n.max_pages_num = e.data.max_pages_num),
                    s.setNextPageValue(n, i, !0),
                    s.changeStandardHtml(t, n.max_pages_num, i, e.data.pagination_html),
                    s.addPosts(o, e.data.html, i),
                    s.reInitMasonryPosts(t, o),
                    setTimeout(function() {
                        qodef.body.trigger("newhome_trigger_get_new_posts", [t, e.data, i])
                    }, 300),
                    s.triggerStandardScrollAnimation(t),
                    s.loadMoreButtonVisibility(t, n)) : console.log(e.message)
                },
                complete: function() {
                    t.removeClass("qodef--loading"),
                    e.length && t.removeClass(e)
                }
            })
        },
        setNextPageValue: function(e, t, i) {
            void 0 === t || "" === t || i ? i && (e.next_page = parseInt(e.next_page, 10) + 1) : e.next_page = t
        },
        addPosts: function(e, t, i) {
            void 0 !== i && "" !== i ? e.html(t) : e.append(t)
        },
        reInitMasonryPosts: function(e, t) {
            e.hasClass("qodef-layout--masonry") && (t.isotope("reloadItems").isotope({
                sortBy: "original-order"
            }),
            setTimeout(function() {
                t.isotope("layout")
            }, 200))
        }
    };
    qodef.qodefPagination = s
}(jQuery),
function(r) {
    "use strict";
    r(document).ready(function() {
        e.init(),
        t.init(),
        o.init()
    }),
    r(window).on("load", function() {
        i.init()
    });
    var i = {
        init: function(e) {
            this.holder = [],
            this.holder.push({
                holder: r("#qodef-woo-page .woocommerce-ordering select"),
                options: {
                    minimumResultsForSearch: 1 / 0
                }
            }),
            this.holder.push({
                holder: r('.variations select:not(.yith_wccl_custom):not([data-type="colorpicker"]):not([data-type="image"]):not([data-type="label"])'),
                options: {
                    minimumResultsForSearch: 1 / 0
                }
            }),
            this.holder.push({
                holder: r("#qodef-woo-page #calc_shipping_country"),
                options: {}
            }),
            this.holder.push({
                holder: r("#qodef-woo-page .shipping select#calc_shipping_state"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget.widget_archive select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget .wp-block-group .wp-block-archives-dropdown select")
            }),
            this.holder.push({
                holder: r(".widget.widget_categories select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget .wp-block-group .wp-block-categories-dropdown select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget.widget_text select"),
                options: {}
            }),
            r.extend(this.holder, e),
            "object" == typeof this.holder && r.each(this.holder, function(e, t) {
                i.createSelect2(t.holder, t.options)
            })
        },
        createSelect2: function(e, t) {
            "function" == typeof e.select2 && e.select2(t)
        }
    }
      , e = {
        init: function() {
            r(document).on("click", ".qodef-quantity-minus, .qodef-quantity-plus", function(e) {
                e.stopPropagation();
                var t, e = r(this), i = e.siblings(".qodef-quantity-input"), o = parseFloat(i.data("step")), n = parseFloat(i.data("max")), a = parseFloat(i.data("min")), s = !1, d = "function" == typeof Number.isNaN && Number.isNaN(parseFloat(i.val())) ? a : parseFloat(i.val());
                (s = e.hasClass("qodef-quantity-minus") ? !0 : s) ? a <= (t = d - o) ? i.val(t) : i.val(a) : (t = d + o,
                void 0 !== n && n <= t ? i.val(n) : i.val(t)),
                i.trigger("change")
            })
        }
    }
      , t = {
        init: function() {
            var e;
            "object" == typeof qodef.qodefMagnificPopup && (e = r(".qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image")).length && (e.each(function() {
                r(this).children("a").attr("data-type", "image").addClass("qodef-popup-item")
            }),
            qodef.qodefMagnificPopup.init())
        }
    }
      , o = (qodef.qodefWooMagnificPopup = t,
    {
        init: function() {
            var e = r(".widget .wc-block-product-search");
            e.length && e.each(function() {
                var e = r(this).find(".wc-block-product-search__label")
                  , t = r(this).find(".wc-block-product-search__fields")
                  , i = r(this).find(".wc-block-product-search__field")
                  , o = r(this).find(".wc-block-product-search__button");
                e.length && e.removeClass().addClass("qodef-search-form-label"),
                t.length && t.removeClass().addClass("qodef-search-form-inner"),
                i.length && i.removeClass().addClass("qodef-search-form-field"),
                o.length && (o.removeClass().addClass("qodef-search-form-button qodef--button-inside qodef--has-icon"),
                o.html(qodefGlobal.vars.iconSearch))
            })
        }
    })
}(jQuery);
