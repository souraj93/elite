!function(t) {
    "use strict";
    "object" != typeof qodef && (window.qodef = {}),
    window.qodefCore = {},
    qodefCore.shortcodes = {},
    qodefCore.listShortcodesScripts = {
        qodefSwiper: qodef.qodefSwiper,
        qodefPagination: qodef.qodefPagination,
        qodefFilter: qodef.qodefFilter,
        qodefMasonryLayout: qodef.qodefMasonryLayout,
        qodefCustomCursor: qodefCore.qodefCustomCursor
    },
    qodefCore.body = t("body"),
    qodefCore.html = t("html"),
    qodefCore.windowWidth = t(window).width(),
    qodefCore.windowHeight = t(window).height(),
    qodefCore.scroll = 0,
    t(document).ready(function() {
        qodefCore.scroll = t(window).scrollTop(),
        e.init()
    }),
    t(window).resize(function() {
        qodefCore.windowWidth = t(window).width(),
        qodefCore.windowHeight = t(window).height()
    }),
    t(window).scroll(function() {
        qodefCore.scroll = t(window).scrollTop()
    }),
    t(window).load(function() {
        a.init()
    });
    qodefCore.qodefIsInViewport = {
        check: function(o, t, n) {
            var e, a;
            o.length && (e = void 0 !== o.data("viewport-offset") ? o.data("viewport-offset") : .15,
            (a = new IntersectionObserver(function(e) {
                !0 === e[0].isIntersecting && (t.call(o),
                !1 !== n) && a.disconnect()
            }
            ,{
                threshold: [e]
            })).observe(o[0]))
        }
    };
    var n = {
        disable: function() {
            window.addEventListener && window.addEventListener("wheel", n.preventDefaultValue, {
                passive: !1
            }),
            document.onkeydown = n.keyDown
        },
        enable: function() {
            window.removeEventListener && window.removeEventListener("wheel", n.preventDefaultValue, {
                passive: !1
            }),
            window.onmousewheel = document.onmousewheel = document.onkeydown = null
        },
        preventDefaultValue: function(e) {
            (e = e || window.event).preventDefault && e.preventDefault(),
            e.returnValue = !1
        },
        keyDown: function(e) {
            for (var o = [37, 38, 39, 40], t = o.length; t--; )
                if (e.keyCode === o[t])
                    return void n.preventDefaultValue(e)
        }
    }
      , o = (qodefCore.qodefScroll = n,
    {
        init: function(e) {
            e.length && o.qodefInitScroll(e)
        },
        qodefInitScroll: function(e) {
            var o = new PerfectScrollbar(e[0],{
                wheelSpeed: .6,
                suppressScrollX: !0
            });
            t(window).resize(function() {
                o.update()
            })
        }
    })
      , e = (qodefCore.qodefPerfectScrollbar = o,
    {
        init: function() {
            var e;
            this.holder = t("#newhome-core-page-inline-style"),
            this.holder.length && (e = this.holder.data("style")).length && t("head").append('<style type="text/css">' + e + "</style>")
        }
    })
      , a = {
        init: function() {
            var e = t(".qodef-parallax-item");
            e.length && e.each(function() {
                var e = t(this)
                  , o = Math.floor(-75 * Math.random() - 25);
                (e.hasClass("qodef-grid-item") ? e.children(".qodef-e-inner") : e).attr("data-parallax", '{"y": ' + o + ', "smoothness": 30}')
            }),
            a.initParallax()
        },
        initParallax: function() {
            t("[data-parallax]").length && !qodefCore.html.hasClass("touchevents") && "object" == typeof ParallaxScroll && ParallaxScroll.init()
        }
    };
    qodefCore.qodefParallaxItem = a
}(jQuery),
function(o) {
    "use strict";
    o(window).on("load", function() {
        n.init()
    }),
    o(window).resize(function() {
        n.init()
    });
    var n = {
        init: function() {
            var e = o(".qodef-background-text");
            e.length && e.each(function() {
                n.responsiveOutputHandler(o(this))
            })
        },
        responsiveOutputHandler: function(t) {
            o.each({
                3840: 1441,
                1440: 1367,
                1366: 1025,
                1024: 1
            }, function(e, o) {
                qodef.windowWidth <= e && qodef.windowWidth >= o && n.generateResponsiveOutput(t, e)
            })
        },
        generateResponsiveOutput: function(e, o) {
            e = e.find(".qodef-m-background-text");
            e.length && e.css({
                "font-size": e.data("size-" + o) + "px",
                top: e.data("vertical-offset-" + o) + "px"
            })
        }
    };
    window.qodefBackgroundText = n
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        r.init()
    });
    var r = {
        init: function() {
            this.holder = i("#qodef-back-to-top"),
            this.holder.length && (this.holder.on("click", function(e) {
                e.preventDefault(),
                r.animateScrollToTop()
            }),
            r.showHideBackToTop())
        },
        animateScrollToTop: function() {
            function o() {
                var e;
                0 !== a && (a < 1e-4 && (a = 0),
                e = r.easingFunction((n - a) / n),
                i("html, body").scrollTop(n - (n - a) * e),
                a *= .9,
                t = requestAnimationFrame(o))
            }
            var t, n = qodef.scroll, a = qodef.scroll;
            o(),
            i(window).one("wheel touchstart", function() {
                cancelAnimationFrame(t)
            })
        },
        easingFunction: function(e) {
            return 0 == e ? 0 : Math.pow(1024, e - 1)
        },
        showHideBackToTop: function() {
            i(window).scroll(function() {
                var e = i(this)
                  , o = e.scrollTop()
                  , e = e.height()
                  , o = 0 < o ? o + e / 2 : 1;
                o < 1e3 ? r.addClass("off") : r.addClass("on")
            })
        },
        addClass: function(e) {
            this.holder.removeClass("qodef--off qodef--on"),
            "on" === e ? this.holder.addClass("qodef--on") : this.holder.addClass("qodef--off")
        }
    }
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        n.init()
    }),
    t(window).on("elementor/frontend/init", function() {
        n.init()
    });
    var n = {
        cursorApended: !1,
        init: function() {
            if (t(".qodef--drag-cursor").length) {
                var e = qodefGlobal.vars.dragCursor;
                !1 === n.cursorApended && (qodefCore.html.append('<div class="qodef-m-custom-cursor qodef-m"><div class="qodef-m-custom-cursor-inner">' + e + "</div></div>"),
                n.cursorApended = !0);
                const o = t(".qodef-m-custom-cursor");
                qodefCore.html.hasClass("touchevents") || (document.addEventListener("pointermove", function(e) {
                    o.css({
                        top: e.clientY - 60,
                        left: e.clientX - 60
                    })
                }),
                t(e = ".qodef--drag-cursor .swiper-button-prev,.qodef--drag-cursor .swiper-button-next,.qodef--drag-cursor .swiper-pagination,.qodef--drag-cursor .qodef-e-media-image a,.qodef--drag-cursor a:not(.woocommerce-loop-product__link),.qodef--drag-cursor .qodef-e-post-link,.qodef--drag-cursor .qodef-e-hotspot").css({
                    cursor: "pointer"
                }),
                t(document).on("mouseenter", e, function() {
                    o.addClass("qodef--hide")
                }).on("mouseleave", e, function() {
                    o.removeClass("qodef--hide")
                }),
                e = ".qodef--drag-cursor",
                t(document).on("mouseenter", e, function() {
                    o.addClass("qodef--show")
                }).on("mouseleave", e, function() {
                    o.removeClass("qodef--show")
                }))
            }
        }
    };
    qodefCore.qodefCustomCursor = n
}(jQuery),
function(t) {
    "use strict";
    t(window).on("load", function() {
        e.init()
    });
    var e = {
        holder: "",
        init: function() {
            this.holder = t("#qodef-page-footer.qodef--uncover"),
            this.holder.length && !qodefCore.html.hasClass("touchevents") && (e.addClass(),
            e.setHeight(this.holder),
            t(window).resize(function() {
                e.setHeight(e.holder)
            }))
        },
        setHeight: function(e) {
            e.css("height", "auto");
            var o = e.outerHeight();
            0 < o && (t("#qodef-page-outer").css({
                "margin-bottom": o,
                "background-color": qodefCore.body.css("backgroundColor")
            }),
            e.css("height", o))
        },
        addClass: function() {
            qodefCore.body.addClass("qodef-page-footer--uncover")
        }
    }
}(jQuery),
function() {
    "use strict";
    jQuery(document).ready(function() {
        e.init()
    });
    var e = {
        appearanceType: function() {
            return -1 !== qodefCore.body.attr("class").indexOf("qodef-header-appearance--") ? qodefCore.body.attr("class").match(/qodef-header-appearance--([\w]+)/)[1] : ""
        },
        init: function() {
            var e = this.appearanceType();
            "" !== e && "none" !== e && qodefCore[e + "HeaderAppearance"]()
        }
    }
}(),
function(n) {
    "use strict";
    n(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            var e, o, t;
            qodefCore.body.hasClass("qodef-mobile-header-appearance--sticky") && (e = qodefCore.scroll,
            o = qodefGlobal.vars.mobileHeaderHeight + qodefGlobal.vars.adminBarHeight,
            t = n("#qodef-page-outer"),
            a.showHideMobileHeader(e, o, t),
            n(window).scroll(function() {
                a.showHideMobileHeader(e, o, t),
                e = qodefCore.scroll
            }),
            n(window).resize(function() {
                t.css("padding-top", 0),
                a.showHideMobileHeader(e, o, t)
            }))
        },
        showHideMobileHeader: function(e, o, t) {
            qodefCore.windowWidth <= 1024 && (qodefCore.scroll > 2 * o ? (qodefCore.body.addClass("qodef-mobile-header--sticky"),
            setTimeout(function() {
                qodefCore.body.addClass("qodef-mobile-header--sticky-animation")
            }, 300),
            t.css("padding-top", qodefGlobal.vars.mobileHeaderHeight)) : (qodefCore.body.removeClass("qodef-mobile-header--sticky"),
            setTimeout(function() {
                qodefCore.body.removeClass("qodef-mobile-header--sticky-animation")
            }, 300),
            t.css("padding-top", 0)),
            qodefCore.scroll > e && qodefCore.scroll > o || qodefCore.scroll < 3 * o ? qodefCore.body.removeClass("qodef-mobile-header--sticky-display") : qodefCore.body.addClass("qodef-mobile-header--sticky-display"))
        }
    }
}(jQuery),
function(n) {
    "use strict";
    n(window).on("load", function() {
        a.init()
    });
    var a = {
        init: function(e) {
            this.$sections = n(".qodef-parallax"),
            n.extend(this.$sections, e);
            e = !qodefCore.html.hasClass("touchevents") && !qodefCore.body.hasClass("qodef-browser--edge") && !qodefCore.body.hasClass("qodef-browser--ms-explorer");
            this.$sections.length && e && this.$sections.each(function() {
                a.ready(n(this))
            })
        },
        ready: function(e) {
            e.$imgHolder = e.find(".qodef-parallax-img-holder"),
            e.$imgWrapper = e.find(".qodef-parallax-img-wrapper"),
            e.$img = e.find("img.qodef-parallax-img");
            var o = e.height()
              , t = e.$imgWrapper.height();
            e.movement = 100 * (t - o) / o / 2,
            e.buffer = window.scrollY,
            e.scrollBuffer = null,
            requestAnimationFrame(function() {
                e.$imgHolder.animate({
                    opacity: 1
                }, 100),
                a.calc(e),
                a.loop(e)
            }),
            n(window).on("resize", function() {
                a.calc(e)
            })
        },
        calc: function(e) {
            var o = e.$imgWrapper.height()
              , t = e.$imgWrapper.width();
            e.$img.width() < t && e.$img.css({
                width: "100%",
                height: "auto"
            }),
            e.$img.height() < o && e.$img.css({
                height: "100%",
                width: "auto",
                "max-width": "unset"
            })
        },
        loop: function(e) {
            if (e.scrollBuffer === Math.round(window.scrollY))
                return requestAnimationFrame(function() {
                    a.loop(e)
                }),
                !1;
            e.scrollBuffer = Math.round(window.scrollY);
            var o = window.outerHeight
              , t = e.offset().top
              , n = e.height();
            e.scrollBuffer + 1.2 * o > t && e.scrollBuffer < t + n && (o = ((t = (Math.abs(e.scrollBuffer + o - t) / (o + n)).toFixed(4)) * e.movement).toFixed(4),
            e.buffer !== t && e.$imgWrapper.css("transform", "translate3d(0," + o + "%, 0)"),
            e.buffer = t),
            requestAnimationFrame(function() {
                a.loop(e)
            })
        }
    };
    qodefCore.qodefParallaxBackground = a
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            function a(e, o) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    t < o ? i(n).addClass("active") : i(n).removeClass("active")
                }
            }
            var e = i("#qodef-page-comments-form .qodef-rating-inner");
            e.each(function() {
                var e = i(this)
                  , o = e.find(".qodef-rating")
                  , t = o.val()
                  , n = e.find(".qodef-star-rating");
                a(n, t),
                n.on("click", function() {
                    o.val(i(this).data("value")).trigger("change")
                }),
                o.change(function() {
                    t = o.val(),
                    a(n, t)
                })
            })
        }
    }
}(jQuery),
function(d) {
    "use strict";
    d(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            e.dropdownBehavior(),
            e.wideDropdownPosition(),
            e.dropdownPosition()
        },
        dropdownBehavior: function() {
            d(".qodef-header-navigation > ul > li").each(function() {
                var t = d(this);
                t.find(".qodef-drop-down-second").length && qodef.qodefWaitForImages.check(t, function() {
                    var e = t.find(".qodef-drop-down-second")
                      , o = e.find(".qodef-drop-down-second-inner ul").outerHeight();
                    navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? t.on("touchstart mouseenter", function() {
                        e.css({
                            height: o,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1"
                        })
                    }).on("mouseleave", function() {
                        e.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0"
                        })
                    }) : qodefCore.body.hasClass("qodef-drop-down-second--animate-height") ? t.hoverIntent({
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                e.addClass("qodef-drop-down--start").css({
                                    visibility: "visible",
                                    height: "0",
                                    opacity: "1"
                                }),
                                e.stop().animate({
                                    height: o
                                }, 400, "linear", function() {
                                    e.css("overflow", "visible")
                                })
                            }, 100)
                        },
                        timeout: 100,
                        out: function() {
                            e.stop().animate({
                                height: "0",
                                opacity: 0
                            }, 100, function() {
                                e.css({
                                    overflow: "hidden",
                                    visibility: "hidden"
                                })
                            }),
                            e.removeClass("qodef-drop-down--start")
                        }
                    }) : t.hoverIntent({
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                e.addClass("qodef-drop-down--start").stop().css({
                                    height: o
                                })
                            }, 150)
                        },
                        timeout: 150,
                        out: function() {
                            e.stop().css({
                                height: "0"
                            }).removeClass("qodef-drop-down--start")
                        }
                    })
                })
            })
        },
        wideDropdownPosition: function() {
            var e = d(".qodef-header-navigation > ul > li.qodef-menu-item--wide");
            e.length && e.each(function() {
                var e, o, t = d(this).find(".qodef-drop-down-second");
                t.length && (t.css("left", 0),
                e = t.offset().left,
                qodefCore.body.hasClass("qodef--boxed") ? (o = d(".qodef--boxed #qodef-page-wrapper").outerWidth(),
                e -= (qodefCore.windowWidth - o) / 2,
                t.css({
                    left: -e,
                    width: o
                })) : qodefCore.body.hasClass("qodef--passepartout") ? (o = d(".qodef--passepartout #qodef-page-wrapper").outerWidth(),
                e -= (qodefCore.windowWidth - o) / 2,
                t.css({
                    left: -e,
                    width: o
                })) : qodefCore.body.hasClass("qodef-drop-down-second--full-width") ? t.css({
                    left: -e,
                    width: qodefCore.windowWidth
                }) : t.css({
                    left: -e + (qodefCore.windowWidth - t.width()) / 2
                }))
            })
        },
        dropdownPosition: function() {
            var e = d(".qodef-header-navigation > ul > li.qodef-menu-item--narrow.menu-item-has-children");
            e.length && e.each(function() {
                var e, o = d(this), t = o.offset().left, n = o.find(".qodef-drop-down-second"), a = n.find(".qodef-drop-down-second-inner ul"), i = a.outerWidth(), r = d(window).width() - t;
                qodef.body.hasClass("qodef--boxed") && (r = d(".qodef--boxed #qodef-page-wrapper").outerWidth() - t),
                0 < o.find("li.menu-item-has-children").length && (e = r - i),
                n.removeClass("qodef-drop-down--right"),
                a.removeClass("qodef-drop-down--right"),
                (r < i || e < i) && (n.addClass("qodef-drop-down--right"),
                a.addClass("qodef-drop-down--right"))
            })
        }
    }
}(jQuery),
function(n) {
    "use strict";
    n(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            var e = n("a.qodef-side-area-opener")
              , o = n("#qodef-side-area-close")
              , t = n("#qodef-side-area");
            a.openerHoverColor(e),
            e.on("click", function(e) {
                e.preventDefault(),
                qodefCore.body.hasClass("qodef-side-area--opened") ? a.closeSideArea() : (a.openSideArea(),
                n(document).keyup(function(e) {
                    27 === e.keyCode && a.closeSideArea()
                }))
            }),
            o.on("click", function(e) {
                e.preventDefault(),
                a.closeSideArea()
            }),
            t.length && "object" == typeof qodefCore.qodefPerfectScrollbar && qodefCore.qodefPerfectScrollbar.init(t)
        },
        openSideArea: function() {
            var e = n("#qodef-page-wrapper")
              , o = n(window).scrollTop();
            n(".qodef-side-area-cover").remove(),
            e.prepend('<div class="qodef-side-area-cover"/>'),
            qodefCore.body.removeClass("qodef-side-area-animate--out").addClass("qodef-side-area--opened qodef-side-area-animate--in"),
            n(".qodef-side-area-cover").on("click", function(e) {
                e.preventDefault(),
                a.closeSideArea()
            }),
            n(window).scroll(function() {
                400 < Math.abs(qodefCore.scroll - o) && a.closeSideArea()
            })
        },
        closeSideArea: function() {
            qodefCore.body.removeClass("qodef-side-area--opened qodef-side-area-animate--in").addClass("qodef-side-area-animate--out")
        },
        openerHoverColor: function(e) {
            var o, t;
            void 0 !== e.data("hover-color") && (o = e.data("hover-color"),
            t = e.css("color"),
            e.on("mouseenter", function() {
                e.css("color", o)
            }).on("mouseleave", function() {
                e.css("color", t)
            }))
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        i.init()
    }),
    a(window).on("load", function() {
        i.windowLoaded = !0
    }),
    a(window).on("elementor/frontend/init", function() {
        var e = Boolean(elementorFrontend.isEditMode());
        e && i.init(e)
    });
    var i = {
        holder: "",
        windowLoaded: !1,
        preloaderFinished: !1,
        init: function(e) {
            this.holder = a("#qodef-page-spinner:not(.qodef--custom-spinner):not(.qodef-layout--textual)"),
            this.holder.length && (this.holder.hasClass("qodef-layout--newhome") ? setTimeout(function() {
                i.preloaderFinished = !0,
                i.animateSpinner(e),
                i.fadeOutAnimation()
            }, 1500) : (i.preloaderFinished = !0,
            i.animateSpinner(e),
            i.fadeOutAnimation()))
        },
        animateSpinner: function(e) {
            var o = setInterval(function() {
                i.windowLoaded && i.preloaderFinished && (clearInterval(o),
                i.fadeOutLoader())
            }, 100);
            e && i.fadeOutLoader()
        },
        fadeOutLoader: function(o, e, t) {
            var n = i.holder.length ? i.holder : a("#qodef-page-spinner:not(.qodef--custom-spinner):not(.qodef-layout--textual)")
              , e = (o = o || 600,
            t = t || "swing",
            n.delay(e = e || 0).fadeOut(o, t),
            a("#qodef-main-rev-holder"));
            e.length && e.find("rs-module").revstart(),
            a(window).on("bind", "pageshow", function(e) {
                e.originalEvent.persisted && n.fadeOut(o, t)
            })
        },
        fadeOutAnimation: function() {
            var t, e;
            qodefCore.body.hasClass("qodef-spinner--fade-out") && (t = a("#qodef-page-wrapper"),
            e = a("a"),
            window.addEventListener("pageshow", function(e) {
                (e.persisted || void 0 !== window.performance && 2 === window.performance.navigation.type) && !t.is(":visible") && t.show()
            }),
            e.on("click", function(e) {
                var o = a(this);
                1 === e.which && 0 <= o.attr("href").indexOf(window.location.host) && !o.hasClass("remove") && o.parent(".product-remove").length <= 0 && o.parents(".woocommerce-product-gallery__image").length <= 0 && void 0 === o.data("rel") && void 0 === o.attr("rel") && !o.hasClass("lightbox-active") && (void 0 === o.attr("target") || "_self" === o.attr("target")) && o.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (e.preventDefault(),
                t.fadeOut(600, "easeOutSine", function() {
                    window.location = o.attr("href")
                }))
            }))
        }
    }
}(jQuery),
function(r) {
    "use strict";
    r(document).ready(function() {
        e.init()
    }),
    r(document).on("newhome_trigger_get_new_posts", function() {
        e.init()
    });
    var e = {
        init: function() {
            var e = r(".qodef-wishlist .qodef-m-link");
            e.length && e.each(function() {
                var a = r(this)
                  , i = a.siblings(".qodef-m-response");
                a.off().on("click", function(e) {
                    var n, o;
                    e.preventDefault(),
                    qodefCore.body.hasClass("logged-in") ? "undefined" !== (n = a.data("id")) && (a.addClass("qodef--loading"),
                    a.hasClass("qodef--added") ? (o = {
                        type: "remove",
                        itemID: n
                    },
                    r.ajax({
                        type: "POST",
                        url: qodefGlobal.vars.restUrl + qodefGlobal.vars.wishlistRestRoute,
                        data: {
                            options: o
                        },
                        beforeSend: function(e) {
                            e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                        },
                        success: function(e) {
                            var o, t;
                            "success" === e.status ? (a.removeClass("qodef--added"),
                            i.html(e.message).addClass("qodef--show").fadeIn(200),
                            o = a.find(".qodef-m-text"),
                            t = a.find(".qodef-m-tooltip"),
                            o.length && o.html(a.data("title")),
                            t.length && t.html(a.data("title"))) : i.html(e.message).addClass("qodef--show").fadeIn(200),
                            setTimeout(function() {
                                i.fadeOut(300).removeClass("qodef--show").empty()
                            }, 800),
                            a.removeClass("qodef--loading")
                        }
                    })) : (o = {
                        type: "add",
                        itemID: n
                    },
                    r.ajax({
                        type: "POST",
                        url: qodefGlobal.vars.restUrl + qodefGlobal.vars.wishlistRestRoute,
                        data: {
                            options: o
                        },
                        beforeSend: function(e) {
                            e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                        },
                        success: function(e) {
                            var o, t;
                            "success" === e.status ? (a.addClass("qodef--added"),
                            i.html(e.message).addClass("qodef--show").fadeIn(200),
                            o = a.find(".qodef-m-text"),
                            t = a.find(".qodef-m-tooltip"),
                            o.length && o.html(a.data("added-title")),
                            t.length && t.html(a.data("added-title")),
                            r(document).trigger("newhome_core_wishlist_item_is_added", [n, e.data.user_id])) : i.html(e.message).addClass("qodef--show").fadeIn(200),
                            setTimeout(function() {
                                i.fadeOut(300).removeClass("qodef--show").empty()
                            }, 800),
                            a.removeClass("qodef--loading")
                        }
                    }))) : r(document.body).trigger("newhome_membership_trigger_login_modal")
                })
            })
        }
    };
    r(document).on("newhome_core_wishlist_item_is_removed", function(e, n) {
        var o = r(".qodef-wishlist .qodef-m-link");
        o.length && o.each(function() {
            var e, o, t = r(this);
            t.data("id") === n && t.hasClass("qodef--added") && (t.removeClass("qodef--added"),
            e = t.find(".qodef-m-text"),
            o = t.find(".qodef-m-tooltip"),
            e.length && e.html(t.data("title")),
            o.length) && o.html(t.data("title"))
        })
    })
}(jQuery),
function(r) {
    "use strict";
    r(window).on("load", function() {
        d.init()
    });
    var d = {
        init: function() {
            var e, o, t, n, a, i;
            this.holder = r("#qodef-subscribe-popup-modal"),
            this.holder.length && (e = this.holder.find(".qodef-sp-prevent"),
            o = r(".qodef-sp-close"),
            t = "no",
            e.length && (n = this.holder.hasClass("qodef-sp-prevent-cookies"),
            a = e.find(".qodef-sp-prevent-input"),
            i = a.data("value"),
            (n ? (t = localStorage.getItem("disabledPopup"),
            sessionStorage) : (t = sessionStorage.getItem("disabledPopup"),
            localStorage)).removeItem("disabledPopup"),
            e.children().on("click", function() {
                "yes" !== i ? (i = "yes",
                a.addClass("qodef-sp-prevent-clicked").data("value", "yes")) : (i = "no",
                a.removeClass("qodef-sp-prevent-clicked").data("value", "no")),
                "yes" === i ? (n ? localStorage : sessionStorage).setItem("disabledPopup", "yes") : (n ? localStorage : sessionStorage).setItem("disabledPopup", "no")
            })),
            "yes" !== t) && (qodefCore.body.hasClass("qodef-sp-opened") ? d.handleClassAndScroll("remove") : d.handleClassAndScroll("add"),
            o.on("click", function(e) {
                e.preventDefault(),
                d.handleClassAndScroll("remove")
            }),
            r(document).keyup(function(e) {
                27 === e.keyCode && d.handleClassAndScroll("remove")
            }))
        },
        handleClassAndScroll: function(e) {
            "remove" === e && (qodefCore.body.removeClass("qodef-sp-opened"),
            qodefCore.qodefScroll.enable()),
            "add" === e && (qodefCore.body.addClass("qodef-sp-opened"),
            qodefCore.qodefScroll.disable())
        }
    }
}(jQuery),
function(o) {
    "use strict";
    qodefCore.shortcodes.newhome_core_accordion = {},
    o(document).ready(function() {
        t.init()
    });
    var t = {
        init: function() {
            var e = o(".qodef-accordion");
            e.length && e.each(function() {
                t.initItem(o(this))
            })
        },
        initItem: function(e) {
            e.hasClass("qodef-behavior--accordion") && t.initAccordion(e),
            e.hasClass("qodef-behavior--toggle") && t.initToggle(e),
            e.addClass("qodef--init")
        },
        initAccordion: function(e) {
            e.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content"
            })
        },
        initToggle: function(e) {
            e.find(".qodef-accordion-title").off().on("mouseenter", function() {
                o(this).addClass("ui-state-hover")
            }).on("mouseleave", function() {
                o(this).removeClass("ui-state-hover")
            }).on("click", function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation();
                e = o(this);
                e.hasClass("ui-state-active") ? (e.removeClass("ui-state-active"),
                e.next().removeClass("ui-accordion-content-active").slideUp(300)) : (e.addClass("ui-state-active"),
                e.next().addClass("ui-accordion-content-active").slideDown(400))
            })
        }
    };
    qodefCore.shortcodes.newhome_core_accordion.qodefAccordion = t
}(jQuery),
function(e) {
    "use strict";
    qodefCore.shortcodes.newhome_core_button = {},
    e(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.buttons = e(".qodef-button"),
            this.buttons.length && this.buttons.each(function() {
                n.initItem(e(this))
            })
        },
        initItem: function(e) {
            n.buttonHoverColor(e),
            n.buttonHoverBgColor(e),
            n.buttonHoverBorderColor(e)
        },
        buttonHoverColor: function(e) {
            var o, t;
            void 0 !== e.data("hover-color") && (o = e.data("hover-color"),
            t = e.css("color"),
            e.on("mouseenter touchstart", function() {
                n.changeColor(e, "color", o)
            }),
            e.on("mouseleave touchend", function() {
                n.changeColor(e, "color", t)
            }))
        },
        buttonHoverBgColor: function(e) {
            var o, t;
            void 0 === e.data("hover-background-color") || e.hasClass("qodef-layout--filled") || (o = e.data("hover-background-color"),
            t = e.css("background-color"),
            e.on("mouseenter touchstart", function() {
                n.changeColor(e, "background-color", o)
            }),
            e.on("mouseleave touchend", function() {
                n.changeColor(e, "background-color", t)
            }))
        },
        buttonHoverBorderColor: function(e) {
            var o, t;
            void 0 !== e.data("hover-border-color") && (o = e.data("hover-border-color"),
            t = e.css("borderTopColor"),
            e.on("mouseenter touchstart", function() {
                n.changeColor(e, "border-color", o)
            }),
            e.on("mouseleave touchend", function() {
                n.changeColor(e, "border-color", t)
            }))
        },
        changeColor: function(e, o, t) {
            e.css(o, t)
        }
    };
    qodefCore.shortcodes.newhome_core_button.qodefButton = n
}(jQuery),
function(e) {
    "use strict";
    qodefCore.shortcodes.newhome_core_google_map = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-google-map"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            void 0 !== window.qodefGoogleMap && window.qodefGoogleMap.init(e.find(".qodef-m-map"))
        }
    };
    qodefCore.shortcodes.newhome_core_google_map.qodefGoogleMap = o
}(jQuery),
function(r) {
    "use strict";
    qodefCore.shortcodes.newhome_core_counter = {},
    r(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.counters = r(".qodef-counter"),
            this.counters.length && this.counters.each(function() {
                n.initItem(r(this))
            })
        },
        initItem: function(e) {
            var o = e.find(".qodef-m-digit")
              , t = n.generateOptions(e);
            qodefCore.qodefIsInViewport.check(e, function() {
                n.counterScript(o, t)
            })
        },
        generateOptions: function(e) {
            var o = {};
            return o.start = void 0 !== e.data("start-digit") && "" !== e.data("start-digit") ? e.data("start-digit") : 0,
            o.end = void 0 !== e.data("end-digit") && "" !== e.data("end-digit") ? e.data("end-digit") : null,
            o.step = void 0 !== e.data("step-digit") && "" !== e.data("step-digit") ? e.data("step-digit") : 1,
            o.delay = void 0 !== e.data("step-delay") && "" !== e.data("step-delay") ? parseInt(e.data("step-delay"), 10) : 100,
            o.prefix = void 0 !== e.data("digit-prefix") && "" !== e.data("digit-prefix") ? e.data("digit-prefix") : "",
            o.suffix = void 0 !== e.data("digit-suffix") && "" !== e.data("digit-suffix") ? e.data("digit-suffix") : "",
            o
        },
        counterScript: function(e, o) {
            var t = r.extend({
                start: 0,
                end: null,
                step: 1,
                delay: 50,
                prefix: "",
                suffix: ""
            }, o || {})
              , n = t.start
              , a = t.end
              , i = (e.text(t.prefix + n + t.suffix),
            setInterval(function() {
                null !== a && a <= n || (n += t.step,
                a <= n && (n = a,
                clearInterval(i)),
                e.text(t.prefix + n + t.suffix))
            }, t.delay))
        }
    };
    qodefCore.shortcodes.newhome_core_counter.qodefCounter = n
}(jQuery),
function(e) {
    "use strict";
    qodefCore.shortcodes.newhome_core_icon = {},
    e(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            this.icons = e(".qodef-icon-holder"),
            this.icons.length && this.icons.each(function() {
                a.initItem(e(this))
            })
        },
        initItem: function(e) {
            a.iconHoverColor(e),
            a.iconHoverBgColor(e),
            a.iconHoverBorderColor(e)
        },
        iconHoverColor: function(e) {
            var o, t, n;
            void 0 !== e.data("hover-color") && (o = e.find("span").length ? e.find("span") : e,
            t = o.css("color"),
            n = e.data("hover-color"),
            e.on("mouseenter", function() {
                a.changeColor(o, "color", n)
            }),
            e.on("mouseleave", function() {
                a.changeColor(o, "color", t)
            }))
        },
        iconHoverBgColor: function(e) {
            var o, t;
            void 0 !== e.data("hover-background-color") && (o = e.data("hover-background-color"),
            t = e.css("background-color"),
            e.on("mouseenter", function() {
                a.changeColor(e, "background-color", o)
            }),
            e.on("mouseleave", function() {
                a.changeColor(e, "background-color", t)
            }))
        },
        iconHoverBorderColor: function(e) {
            var o, t;
            void 0 !== e.data("hover-border-color") && (o = e.data("hover-border-color"),
            t = e.css("borderTopColor"),
            e.on("mouseenter", function() {
                a.changeColor(e, "border-color", o)
            }),
            e.on("mouseleave", function() {
                a.changeColor(e, "border-color", t)
            }))
        },
        changeColor: function(e, o, t) {
            e.css(o, t)
        }
    };
    qodefCore.shortcodes.newhome_core_icon.qodefIcon = a
}(jQuery),
function() {
    "use strict";
    qodefCore.shortcodes.newhome_core_image_gallery = {},
    qodefCore.shortcodes.newhome_core_image_gallery.qodefSwiper = qodef.qodefSwiper,
    qodefCore.shortcodes.newhome_core_image_gallery.qodefMasonryLayout = qodef.qodefMasonryLayout,
    qodefCore.shortcodes.newhome_core_image_gallery.qodefMagnificPopup = qodef.qodefMagnificPopup,
    qodefCore.shortcodes.newhome_core_image_gallery.qodefCustomCursor = qodefCore.qodefCustomCursor
}(jQuery),
function() {
    "use strict";
    qodefCore.shortcodes.newhome_core_image_with_text = {},
    qodefCore.shortcodes.newhome_core_image_with_text.qodefMagnificPopup = qodef.qodefMagnificPopup
}(jQuery),
function(e) {
    "use strict";
    qodefCore.shortcodes.newhome_core_single_image = {},
    e(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            this.holder = e(".qodef-single-image"),
            this.holder.length && this.holder.each(function() {
                o.initItem(e(this))
            })
        },
        initItem: function(e) {
            qodef.qodefWaitForImages.check(e, function() {
                qodefCore.qodefIsInViewport.check(e, function() {
                    e.addClass("qodef--appeared")
                })
            })
        }
    };
    qodefCore.shortcodes.newhome_core_single_image.qodefSingleImage = o
}(jQuery),
function(n) {
    "use strict";
    n(window).on("load", function() {
        o.init()
    });
    var o = {
        init: function() {
            var e = n(".widget_newhome_core_sticky_sidebar");
            e.length && 1024 < qodefCore.windowWidth && (e.wrapper = e.parents("#qodef-page-sidebar"),
            e.offsetM = e.offset().top - e.wrapper.offset().top,
            e.adj = 15,
            o.callStack(e),
            n(window).on("resize", function() {
                1024 < qodefCore.windowWidth && o.callStack(e)
            }),
            n(window).on("scroll", function() {
                1024 < qodefCore.windowWidth && o.infoPosition(e)
            }))
        },
        calc: function(e) {
            var o = n(".qodef-page-content-section")
              , t = qodefCore.body.hasClass("qodef-header-appearance--none") ? 0 : parseInt(qodefGlobal.vars.headerHeight, 10);
            1024 < qodefCore.windowWidth && o.height() < 100 && o.css("height", e.wrapper.height() - o.height()),
            e.start = o.offset().top,
            e.end = o.outerHeight(),
            e.h = e.wrapper.height(),
            e.w = e.outerWidth(),
            e.left = e.offset().left,
            e.top = t + qodefGlobal.vars.adminBarHeight - e.offsetM,
            e.data("state", "top")
        },
        infoPosition: function(e) {
            var o;
            qodefCore.scroll < e.start - e.top && qodefCore.scroll + e.h && "top" !== e.data("state") ? (gsap.to(e.wrapper, .1, {
                y: 5
            }),
            gsap.to(e.wrapper, .3, {
                y: 0,
                delay: .1
            }),
            e.data("state", "top"),
            e.wrapper.css({
                position: "static"
            })) : qodefCore.scroll >= e.start - e.top && qodefCore.scroll + e.h + e.adj <= e.start + e.end && "fixed" !== e.data("state") ? (o = "top" === e.data("state") ? 1 : -1,
            e.data("state", "fixed"),
            e.wrapper.css({
                position: "fixed",
                top: e.top,
                left: e.left,
                width: e.w
            }),
            gsap.fromTo(e.wrapper, .2, {
                y: 0
            }, {
                y: 10 * o,
                ease: Power4.easeInOut
            }),
            gsap.to(e.wrapper, .2, {
                y: 0,
                delay: .2
            })) : qodefCore.scroll + e.h + e.adj > e.start + e.end && "bottom" !== e.data("state") && (e.data("state", "bottom"),
            e.wrapper.css({
                position: "absolute",
                top: e.end - e.h - e.adj,
                left: "auto",
                width: e.w
            }),
            gsap.fromTo(e.wrapper, .1, {
                y: 0
            }, {
                y: -5
            }),
            gsap.to(e.wrapper, .3, {
                y: 0,
                delay: .1
            }))
        },
        callStack: function(e) {
            this.calc(e),
            this.infoPosition(e)
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = "newhome_core_blog_list";
    qodefCore.shortcodes[t] = {},
    "object" == typeof qodefCore.listShortcodesScripts && e.each(qodefCore.listShortcodesScripts, function(e, o) {
        qodefCore.shortcodes[t][e] = o
    }),
    qodefCore.shortcodes[t].qodefResizeIframes = qodef.qodefResizeIframes
}(jQuery),
function(t) {
    "use strict";
    var n = {
        showHideHeader: function(e, o) {
            1024 < qodefCore.windowWidth && (qodefCore.scroll <= 0 ? (qodefCore.body.removeClass("qodef-header--fixed-display"),
            e.css("padding-top", "0"),
            o.css("margin-top", "0")) : (qodefCore.body.addClass("qodef-header--fixed-display"),
            e.css("padding-top", parseInt(qodefGlobal.vars.headerHeight + qodefGlobal.vars.topAreaHeight) + "px"),
            o.css("margin-top", parseInt(qodefGlobal.vars.topAreaHeight) + "px")))
        },
        init: function() {
            var e, o;
            qodefCore.body.hasClass("qodef-header--vertical") || (e = t("#qodef-page-outer"),
            o = t("#qodef-page-header"),
            n.showHideHeader(e, o),
            t(window).scroll(function() {
                n.showHideHeader(e, o)
            }),
            t(window).resize(function() {
                e.css("padding-top", "0"),
                n.showHideHeader(e, o)
            }))
        }
    };
    qodefCore.fixedHeaderAppearance = n.init
}(jQuery),
function(n) {
    "use strict";
    var a = {
        header: "",
        docYScroll: 0,
        init: function() {
            var e = a.displayAmount();
            a.header = n(".qodef-header-sticky"),
            a.docYScroll = n(document).scrollTop(),
            a.setVisibility(e),
            n(window).scroll(function() {
                a.setVisibility(e)
            })
        },
        displayAmount: function() {
            return 0 !== qodefGlobal.vars.qodefStickyHeaderScrollAmount ? parseInt(qodefGlobal.vars.qodefStickyHeaderScrollAmount, 10) : parseInt(qodefGlobal.vars.headerHeight + qodefGlobal.vars.adminBarHeight, 10)
        },
        setVisibility: function(e) {
            var o, t = qodefCore.scroll < e;
            a.header.hasClass("qodef-appearance--up") && (t = (o = n(document).scrollTop()) > a.docYScroll && e < o || o < e,
            a.docYScroll = n(document).scrollTop()),
            a.showHideHeader(t)
        },
        showHideHeader: function(e) {
            e ? qodefCore.body.removeClass("qodef-header--sticky-display") : qodefCore.body.addClass("qodef-header--sticky-display")
        }
    };
    qodefCore.stickyHeaderAppearance = a.init
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        i.init()
    }),
    a(window).on("load", function() {
        i.windowLoaded = !0,
        i.completeAnimation()
    }),
    a(window).on("elementor/frontend/init", function() {
        var e = Boolean(elementorFrontend.isEditMode());
        e && i.init(e)
    });
    var i = {
        holder: "",
        windowLoaded: !1,
        percentNumber: 0,
        init: function(e) {
            this.holder = a("#qodef-page-spinner.qodef-layout--progress-bar"),
            this.holder.length && i.animateSpinner(this.holder, e)
        },
        animateSpinner: function(e, o) {
            var t = e.find(".qodef-m-spinner-number-label")
              , n = (e.find(".qodef-m-spinner-line-front").animate({
                width: "100%"
            }, 1e4, "linear"),
            setInterval(function() {
                i.animatePercent(t, i.percentNumber),
                i.windowLoaded && clearInterval(n)
            }, 100));
            o && i.fadeOutLoader(e)
        },
        completeAnimation: function() {
            var e = i.holder.length ? i.holder : a("#qodef-page-spinner.qodef-layout--progress-bar")
              , o = setInterval(function() {
                100 <= i.percentNumber ? (clearInterval(o),
                e.find(".qodef-m-spinner-line-front").stop().animate({
                    width: "100%"
                }, 500),
                e.addClass("qodef--finished"),
                setTimeout(function() {
                    i.fadeOutLoader(e)
                }, 600)) : i.animatePercent(e.find(".qodef-m-spinner-number-label"), i.percentNumber)
            }, 6)
        },
        animatePercent: function(e, o) {
            o < 100 && (e.text(o += 5),
            i.percentNumber = o)
        },
        fadeOutLoader: function(o, t, e, n) {
            t = t || 600,
            n = n || "swing",
            o.delay(e = e || 0).fadeOut(t, n),
            a(window).on("bind", "pageshow", function(e) {
                e.originalEvent.persisted && o.fadeOut(t, n)
            })
        }
    }
}(jQuery),
function(d) {
    "use strict";
    d(document).ready(function() {
        s.init()
    }),
    d(window).on("load", function() {
        s.windowLoaded = !0
    }),
    d(window).on("elementor/frontend/init", function() {
        var e = Boolean(elementorFrontend.isEditMode());
        e && s.init(e)
    });
    var s = {
        init(e) {
            var o = d("#qodef-page-spinner.qodef-layout--textual");
            o.length && (e ? s.fadeOutLoader(o) : s.splitText(o))
        },
        splitText(e) {
            var o, t, n = e.find(".qodef-m-text");
            n.length && (o = n.text().trim().split(""),
            t = "",
            n.empty(),
            o.forEach(e=>{
                t = " " === e ? "qodef-m-empty-char" : " ",
                n.append('<span class="qodef-m-char ' + t + '">' + e + "</span>")
            }
            ),
            setTimeout(()=>{
                s.animateSpinner(e)
            }
            , 100))
        },
        animateSpinner(r) {
            r.addClass("qodef--init"),
            function n(a) {
                var e = r.find(".qodef-m-char")
                  , i = e.length - 1;
                e.length && e.each((e,o)=>{
                    var t = d(o);
                    setTimeout(()=>{
                        t.animate(a.type, a.duration, a.easing, ()=>{
                            e === i && (1 === a.repeat ? n({
                                type: {
                                    opacity: 0
                                },
                                duration: 1200,
                                easing: "swing",
                                delay: 0,
                                repeat: 0
                            }) : s.windowLoaded ? (s.fadeOutLoader(r, 600, 0, "swing"),
                            setTimeout(()=>{
                                var e = d(".qodef-after-spinner-rev rs-module");
                                e.length && e.revstart()
                            }
                            , 800)) : n({
                                type: {
                                    opacity: 1
                                },
                                duration: 1800,
                                easing: "swing",
                                delay: 160,
                                repeat: 1
                            }))
                        }
                        )
                    }
                    , e * a.delay)
                }
                )
            }({
                type: {
                    opacity: 1
                },
                duration: 1800,
                easing: "swing",
                delay: 160,
                repeat: 1
            })
        },
        fadeOutLoader(o, t, e, n) {
            t = t || 500,
            e = e || 0,
            n = n || "swing",
            o.length && (o.delay(e).fadeOut(t, n),
            d(window).on("bind", "pageshow", function(e) {
                e.originalEvent.persisted && o.fadeOut(t, n)
            }))
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        o.init("init")
    }),
    a(window).resize(function() {
        o.init("resize")
    });
    var o = {
        init: function(e) {
            this.holder = a("body.single-property"),
            this.holder.length && this.holder.each(function() {
                "init" === e && (o.handleFloorPlans(a(this)),
                o.handleMortgageCalculator(a(this)),
                o.handleCustomSlider(a(this)),
                o.handleVideoIframe(a(this)),
                o.handlePrint(a(this))),
                "resize" === e && o.handleVideoIframe(a(this))
            })
        },
        handleFloorPlans: function(e) {
            var e = e.find(".qodef-m-floor-plans-content")
              , t = e.find("a")
              , n = e.find("img");
            t.on("click", function(e) {
                e.preventDefault();
                var o = a(this);
                t.removeClass("qodef--active"),
                o.addClass("qodef--active"),
                n.each(function() {
                    var e = a(this);
                    o.data("trigger") === e.data("target") && (n.removeClass("qodef--active"),
                    e.addClass("qodef--active"))
                })
            })
        },
        handleMortgageCalculator: function(e) {
            e = e.find(".qodef-m-mortgage-calculator");
            if (e.length) {
                const i = e.find("#qodef-mortgage-calculator")
                  , r = e.find(".qodef-button")
                  , d = e.find(".qodef-m-form-result")
                  , s = qodefGlobal.vars.mortgageCalculatorResponseLabels;
                r.on("click", function(e) {
                    e.preventDefault(),
                    r.parent().addClass("qodef--loading"),
                    d.empty();
                    var o, e = "" !== i.find("#qodef-mortgage-calculator-price").val() ? parseInt(i.find("#qodef-mortgage-calculator-price").val(), 10) : 0, t = "" !== i.find("#qodef-mortgage-calculator-percent").val() ? Number(i.find("#qodef-mortgage-calculator-percent").val()) : 0, n = "" !== i.find("#qodef-mortgage-calculator-years").val() ? parseInt(i.find("#qodef-mortgage-calculator-years").val(), 10) : 0, a = "" !== i.find("#qodef-mortgage-calculator-interest").val() ? Number(i.find("#qodef-mortgage-calculator-interest").val()) : 0, t = e / 100 * t, e = e - t;
                    0 !== n && 0 !== a ? (n = 12 * n,
                    o = e + (n = (a = e * ((a = a / 1200) * (a = Math.pow(1 + a, n))) / (a - 1)) * n - e),
                    a = `
								<span class="qodef-response-item"><span class="qodef-response-label">${s.monthlyPayment}:</span> <span class="qodef-response-value">${a.toFixed(2)}</span></span>
								<span class="qodef-response-item"><span class="qodef-response-label">${s.totalLoanAmount}:</span> <span class="qodef-response-value">${e.toFixed(2)}</span></span>
								<span class="qodef-response-item"><span class="qodef-response-label">${s.downPayment}:</span> <span class="qodef-response-value">${t.toFixed(2)}</span></span>
								<span class="qodef-response-item"><span class="qodef-response-label">${s.totalInterestPaid}:</span> <span class="qodef-response-value">${n.toFixed(2)}</span></span>
								<span class="qodef-response-item"><span class="qodef-response-label">${s.totalAmountPaid}:</span> <span class="qodef-response-value">${o.toFixed(2)}</span></span>
							`,
                    d.html(a)) : (e = i.data("error-message"),
                    d.html(e)),
                    r.parent().removeClass("qodef--loading")
                })
            }
        },
        handleCustomSlider: function(e) {
            var o = e.find(".qodef-custom-slider");
            o.length && (e = new Swiper(".qodef-custom-slider--thumbs",{
                spaceBetween: 18,
                slidesPerView: 8,
                freeMode: !0,
                watchSlidesProgress: !0,
                breakpoints: {
                    0: {
                        slidesPerView: 2
                    },
                    481: {
                        slidesPerView: 2
                    },
                    681: {
                        slidesPerView: 4
                    },
                    769: {
                        slidesPerView: 6
                    },
                    1025: {
                        slidesPerView: 8
                    }
                }
            }),
            new Swiper(".qodef-custom-slider--images",{
                speed: 800,
                loop: !0,
                autoplay: {
                    disableOnInteraction: !1
                },
                spaceBetween: 10,
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                thumbs: {
                    swiper: e
                },
                on: {
                    init: function() {
                        o.children().addClass("qodef-swiper--initialized")
                    }
                }
            }))
        },
        handlePrint: function(e) {
            e = e.find(".qodef--print");
            e.length && e.on("click", function(e) {
                e.preventDefault();
                var e = a(this).data("id")
                  , o = window.open("", "Print", "width=800, height=900");
                a.ajax({
                    type: "POST",
                    data: {
                        id: e
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.printRealEstatePropertyRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && (o.document.write(e.data),
                        o.document.close(),
                        o.focus())
                    }
                })
            })
        },
        handleVideoIframe: function(e) {
            e = e.find("section.qodef-m-video iframe");
            e.length && e.each(function() {
                var e = a(this);
                void 0 === e.data("width") && e.data("width", e.attr("width")),
                void 0 === e.data("height") && e.data("height", e.attr("height")),
                e.height(e.data("height") / e.data("width") * e.width())
            })
        }
    }
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            var e = i("#qodef-membership-user-dashboard");
            e.length && (n.populateAgentFields(e),
            n.deleteAgent(e))
        },
        populateAgentFields: function(e) {
            var o, t = e.find('[name*="_display_name"]');
            t.length && (o = (t = t[0]).options[t.selectedIndex]?.text || "",
            e.find('[name*="first_name"]').on("change", function() {
                n.getDisplayNameOptions(e, t, o)
            }),
            e.find('[name*="last_name"]').on("change", function() {
                n.getDisplayNameOptions(e, t, o)
            }))
        },
        getDisplayNameOptions: function(e, o, t) {
            var n = e.find('[name*="_username"]')
              , a = e.find('[name*="first_name"]')
              , e = e.find('[name*="last_name"]')
              , i = n.val()
              , r = !1
              , n = a.val()
              , a = e.val()
              , d = [i]
              , s = !1;
            n.length && d.push(n),
            a.length && d.push(a),
            n.length && a.length && (d.push(n + " " + a),
            d.push(a + " " + n));
            for (var l = o.options.length = 0; l < d.length; l++)
                o.options[l] = new Option(d[l],d[l]),
                String(d[l]) === String(i) && (r = d[l]),
                String(d[l]) === String(t) && (s = d[l]);
            setTimeout(function() {
                o.value = s || r
            }, 100)
        },
        deleteAgent: function(e) {
            e = e.find(".qodef-real-estate-agent-delete");
            e.length && e.on("click", function(e) {
                e.preventDefault();
                var e = i(this)
                  , o = e.data("agent-id")
                  , t = e.data("confirm-text")
                  , n = e.data("removing-text")
                  , a = e.parents(".qodef-m-agent");
                confirm(t) && (e.find(".qodef-m-text").text(n),
                i.ajax({
                    type: "POST",
                    data: {
                        agent_id: o
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.deleteRealEstateAgencyAgentRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && a.fadeOut(function() {
                            a.remove()
                        })
                    }
                }))
            })
        }
    }
}(jQuery),
function(r) {
    "use strict";
    qodefCore.shortcodes.newhome_core_instagram_list = {},
    r(document).ready(function() {
        n.init()
    });
    var n = {
        init: function() {
            this.holder = r(".qodef-instagram-list #sb_instagram"),
            this.holder.length && this.holder.each(function() {
                var e, o, t;
                r(this).parent().hasClass("qodef-instagram-columns") ? (o = (e = r(this).find("#sbi_images")).find(".sbi_item.sbi_type_image, .sbi_item.sbi_type_carousel"),
                t = e.css("padding"),
                e.css("padding", "0"),
                e.css("margin", "-" + t),
                e.css("width", "calc(100% + " + t + " + " + t + ")"),
                o.attr("style", "padding: " + t + "!important")) : r(this).parent().hasClass("qodef-instagram-slider") && n.initSlider(r(this))
            })
        },
        initSlider: function(e, o) {
            var t = e.find("#sbi_images")
              , n = e.find(".sbi_item.sbi_type_image")
              , a = t.css("padding")
              , i = (t.css("padding", "0"),
            n.css("padding", "0"),
            t.attr("style", "margin-right: " + 2 * parseInt(a) + "px !important"),
            {});
            i.spaceBetween = 2 * parseInt(a),
            i.customStages = !0,
            i.slidesPerView = void 0 !== e.data("cols") && "" !== e.data("cols") ? e.data("cols") : 3,
            i.slidesPerView1024 = void 0 !== e.data("cols") && "" !== e.data("cols") ? e.data("cols") : 3,
            i.slidesPerView680 = void 0 !== e.data("colstablet") && "" !== e.data("colstablet") ? e.data("colstablet") : 2,
            i.slidesPerView480 = void 0 !== e.data("colsmobile") && "" !== e.data("colsmobile") ? e.data("colsmobile") : 1,
            e.attr("data-options", JSON.stringify(i)),
            t.addClass("swiper-wrapper"),
            n.length && n.each(function() {
                r(this).addClass("qodef-e qodef-image-wrapper swiper-slide")
            }),
            "object" == typeof qodef.qodefSwiper && (!1 === o ? qodef.qodefSwiper.initSlider(e) : qodef.qodefSwiper.init(e))
        }
    };
    qodefCore.shortcodes.newhome_core_instagram_list.qodefInstagram = n,
    qodefCore.shortcodes.newhome_core_instagram_list.qodefSwiper = qodef.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    var t = "newhome_core_product_list";
    qodefCore.shortcodes[t] = {},
    "object" == typeof qodefCore.listShortcodesScripts && e.each(qodefCore.listShortcodesScripts, function(e, o) {
        qodefCore.shortcodes[t][e] = o
    })
}(jQuery),
function(o) {
    "use strict";
    o(document).on("qv_loader_stop qv_variation_gallery_loaded", function() {
        t.init()
    });
    var t = {
        init: function(e) {
            this.holder = [],
            this.holder.push({
                holder: o("#yith-quick-view-modal .variations select"),
                options: {
                    minimumResultsForSearch: 1 / 0
                }
            }),
            o.extend(this.holder, e),
            "object" == typeof this.holder && o.each(this.holder, function(e, o) {
                t.createSelect2(o.holder, o.options)
            })
        },
        createSelect2: function(e, o) {
            "function" == typeof e.select2 && e.select2(o)
        }
    }
}(jQuery),
function() {
    "use strict";
    jQuery(document).on("yith_wccl_product_gallery_loaded", function() {
        "function" == typeof qodefCore.qodefWooMagnificPopup && qodefCore.qodefWooMagnificPopup.init()
    })
}(),
function() {
    "use strict";
    qodefCore.shortcodes.newhome_core_clients_list = {},
    qodefCore.shortcodes.newhome_core_clients_list.qodefSwiper = qodef.qodefSwiper
}(jQuery),
function(e) {
    "use strict";
    var t = "newhome_core_team_list";
    qodefCore.shortcodes[t] = {},
    "object" == typeof qodefCore.listShortcodesScripts && e.each(qodefCore.listShortcodesScripts, function(e, o) {
        qodefCore.shortcodes[t][e] = o
    })
}(jQuery),
function() {
    "use strict";
    qodefCore.shortcodes.newhome_core_testimonials_grid_slider = {},
    qodefCore.shortcodes.newhome_core_testimonials_grid_slider.qodefSwiper = qodef.qodefSwiper
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        r.init()
    }),
    i(document).on("newhome_trigger_get_new_posts", function() {
        r.init()
    });
    var r = {
        init: function() {
            var e = i(".qodef-property-compare-modal");
            e.length && (r.modalBehavior(e),
            r.addProperty(e),
            r.removeProperty(),
            r.clearProperties(e),
            r.popupBehavior(e))
        },
        modalBehavior: function(o) {
            var e = o.find(".qodef-m-opener-button");
            e.length && e.off().on("click", function(e) {
                e.preventDefault(),
                o.toggleClass("qodef--opened")
            }),
            i(document).keyup(function(e) {
                27 === e.keyCode && o.hasClass("qodef--opened") && !o.hasClass("qodef--popup-opened") && o.removeClass("qodef--opened")
            }),
            window.addEventListener("click", e=>{
                o.hasClass("qodef--opened") && !o[0].contains(e.target) && o.removeClass("qodef--opened")
            }
            )
        },
        addProperty: function(t) {
            var e = i(".qodef-m-action-button.qodef--compare");
            e.length && e.on("click", function(e) {
                e.preventDefault();
                var o = i(this);
                o.hasClass("qodef--added") || (o.addClass("qodef--loading"),
                i.ajax({
                    type: "POST",
                    data: {
                        property_id: o.data("property-id")
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.addRealEstatePropertyCompareRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && "" !== e.data.html && (t.hasClass("qodef--shown") || t.addClass("qodef--shown"),
                        o.addClass("qodef--added"),
                        r.setCompareLinkLabel(o, "added"),
                        r.addCompareItems(t, e.data.html, ".qodef-m-items"),
                        r.addCompareItems(t, e.data.popup_html, ".qodef-m-popup-items"),
                        r.removeProperty(),
                        r.updateCompareButton(t, o.data("property-id"))),
                        o.removeClass("qodef--loading")
                    }
                }))
            })
        },
        setCompareLinkLabel: function(e, o="") {
            var t = e.find(".qodef-m-text")
              , n = e.find(".qodef-m-tooltip")
              , a = e.data("title")
              , e = e.data("added-title")
              , o = "added" === o ? e : a;
            t.length && t.html(o),
            n.length && n.html(o)
        },
        removeProperty: function() {
            var e, a = i(".qodef-property-compare-modal");
            a.length && (e = a.find(".qodef-e-remove")).length && e.off().on("click", function(e) {
                e.preventDefault();
                var n = i(this);
                n.addClass("qodef--loading"),
                i.ajax({
                    type: "POST",
                    data: {
                        property_id: n.data("property-id")
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.removeRealEstatePropertyCompareRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        var o, t;
                        "success" === e.status && (o = i(".qodef-m-action-button.qodef--compare"),
                        t = !1,
                        "" === e.data.html ? (a.removeClass("qodef--opened qodef--shown qodef--popup-opened"),
                        t = !0,
                        setTimeout(function() {
                            r.removeCompareItems(a)
                        }, 200),
                        r.updateCompareButton(a, "")) : (o.length && o.data("property-id") === n.data("property-id") && (t = !0),
                        r.addCompareItems(a, e.data.html, ".qodef-m-items"),
                        r.addCompareItems(a, e.data.popup_html, ".qodef-m-popup-items"),
                        r.updateCompareButton(a, n.data("property-id"), !0),
                        r.removeProperty()),
                        o.length) && t && (o.removeClass("qodef--added"),
                        r.setCompareLinkLabel(o)),
                        n.removeClass("qodef--loading")
                    }
                })
            })
        },
        clearProperties: function(t) {
            var e = t.find(".qodef-m-action .qodef-m-button.qodef--clear");
            e.length && e.off().on("click", function(e) {
                e.preventDefault();
                var o = i(this);
                o.addClass("qodef--loading"),
                i.ajax({
                    type: "POST",
                    data: {
                        property_id: -1
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.removeRealEstatePropertyCompareRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && (t.removeClass("qodef--opened qodef--shown"),
                        (e = i(".qodef-m-action-button.qodef--compare")).length && (e.removeClass("qodef--added"),
                        r.setCompareLinkLabel(e)),
                        setTimeout(function() {
                            r.removeCompareItems(t)
                        }, 200),
                        r.updateCompareButton(t, "")),
                        o.removeClass("qodef--loading")
                    }
                })
            })
        },
        popupBehavior: function(o) {
            var e = o.find(".qodef-m-action .qodef-m-button.qodef--compare")
              , e = (e.length && e.off().on("click", function(e) {
                e.preventDefault(),
                o.addClass("qodef--popup-opened"),
                qodef.body.addClass("qodef-compare-popup--opened")
            }),
            o.find(".qodef-m-popup .qodef-m-popup-close"));
            e.length && e.off().on("click", function(e) {
                e.preventDefault(),
                o.removeClass("qodef--popup-opened"),
                qodef.body.removeClass("qodef-compare-popup--opened")
            }),
            i(document).keyup(function(e) {
                27 === e.keyCode && o.hasClass("qodef--popup-opened") && (o.removeClass("qodef--popup-opened"),
                qodef.body.removeClass("qodef-compare-popup--opened"))
            })
        },
        updateCompareButton: function(e, t, n=!1) {
            var o, a, e = e.find(".qodef-m-action .qodef-m-button.qodef--compare");
            e.length && (o = e.attr("data-items").toString(),
            "" === t ? e.attr("data-items", "") : (o = o.length ? o.indexOf(",") ? o.split(",") : [o] : [],
            a = [],
            o.forEach(function(e) {
                var o = !0;
                (o = n && e === t.toString() ? !1 : o) && a.push(e)
            }),
            n || a.push(t.toString()),
            e.attr("data-items", a.join(","))))
        },
        addCompareItems: function(e, o, t) {
            e.find(t).empty().html(o)
        },
        removeCompareItems: function(e) {
            e.find(".qodef-m-items").empty(),
            e.find(".qodef-m-popup-items").empty()
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = a("#qodef-property-author-page-contact-form"),
            this.holder.length && this.holder.each(function() {
                e.handleContactForm(a(this))
            })
        },
        handleContactForm: function(o) {
            var t = o.find(".qodef-m-form-result")
              , n = o.find(".qodef-m-action");
            o.on("submit", function(e) {
                e.preventDefault(),
                n.addClass("qodef--loading"),
                t.empty();
                e = {
                    name: o.find('input[name="user_name"]').val(),
                    email: o.find('input[name="user_email"]').val(),
                    message: o.find('textarea[name="user_message"]').val(),
                    agent_id: o.find('input[name="agent_id"]').val()
                };
                console.log(e.name),
                console.log(e.email),
                console.log(e.message),
                console.log(e.agent_id),
                a.ajax({
                    type: "POST",
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.propertyAuthorPageFormRestRoute,
                    data: {
                        options: e
                    },
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status ? (t.html(e.message),
                        o.addClass("qodef--disabled")) : t.html(e.message),
                        n.removeClass("qodef--loading")
                    }
                })
            })
        }
    }
}(jQuery),
function(i) {
    "use strict";
    i(document).ready(function() {
        o.init()
    });
    var o = {
        init: function() {
            var e = i("#qodef-membership-user-dashboard");
            e.length && (o.deleteProperty(e),
            o.deleteSavedSearches(e))
        },
        deleteProperty: function(e) {
            e = e.find(".qodef-real-estate-property-delete");
            e.length && e.on("click", function(e) {
                e.preventDefault();
                var e = i(this)
                  , o = e.data("property-id")
                  , t = e.data("confirm-text")
                  , n = e.data("removing-text")
                  , a = e.parents(".qodef-m-property-item");
                confirm(t) && (e.find(".qodef-m-text").text(n),
                i.ajax({
                    type: "POST",
                    data: {
                        property_id: o
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.deleteRealEstatePropertyRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && a.fadeOut(function() {
                            a.remove()
                        })
                    }
                }))
            })
        },
        deleteSavedSearches: function(e) {
            e = e.find(".qodef-undo-query-save");
            e.length && e.on("click", function(e) {
                e.preventDefault();
                var e = i(this)
                  , o = e.data("search-id")
                  , t = e.data("confirm-text")
                  , n = e.data("removing-text")
                  , a = e.parents(".qodef-m-items-content-row");
                confirm(t) && (e.find(".qodef-m-text").text(n),
                i.ajax({
                    type: "POST",
                    data: {
                        search_id: o
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.deleteRealEstatePropertiesSavedSearchRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status && a.fadeOut(function() {
                            a.remove()
                        })
                    }
                }))
            })
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = a("#qodef-schedule-tour"),
            this.holder.length && this.holder.each(function() {
                e.handleScheduleTour(a(this))
            })
        },
        handleScheduleTour: function(o) {
            var t = o.find(".qodef-m-form-result")
              , n = o.find(".qodef-m-action");
            o.on("submit", function(e) {
                e.preventDefault(),
                n.addClass("qodef--loading"),
                t.empty();
                e = {
                    name: o.find('input[name="user_name"]').val(),
                    email: o.find('input[name="user_email"]').val(),
                    phone: o.find('input[name="user_phone"]').val(),
                    message: o.find('textarea[name="user_message"]').val(),
                    agent_id: o.find('input[name="agent_id"]').val()
                };
                a.ajax({
                    type: "POST",
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.propertyScheduleTourRestRoute,
                    data: {
                        options: e
                    },
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        "success" === e.status ? (t.html(e.message),
                        o.addClass("qodef--disabled")) : t.html(e.message),
                        n.removeClass("qodef--loading")
                    }
                })
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = "newhome_core_real_estate_package_list";
    qodefCore.shortcodes[t] = {},
    "object" == typeof qodefCore.listShortcodesScripts && e.each(qodefCore.listShortcodesScripts, function(e, o) {
        qodefCore.shortcodes[t][e] = o
    })
}(jQuery),
function(d) {
    "use strict";
    qodefCore.shortcodes.newhome_core_real_estate_property_list = {},
    d(document).ready(function() {
        i.init()
    }),
    d(window).on("load", function() {
        i.load()
    }),
    d(document).on("newhome_trigger_get_new_posts", function(e, o, t, n) {
        i.reInitGoogleMap(o, t, n)
    }),
    d(document).on("newhome_core_trigger_after_autocomplete_places", function(e, o) {
        i.triggerClick(o)
    });
    var i = {
        init: function() {
            var e = d(".qodef-property-list");
            e.length && e.each(function() {
                var e = d(this);
                i.initGoogleMap(e),
                i.initFilter(e)
            })
        },
        load: function() {
            var e = d(".qodef-property-list");
            e.length && e.each(function() {
                var e = d(this);
                i.setSpinnerPosition(e),
                i.bindGoogleMapAndListItems(e)
            })
        },
        setSpinnerPosition: function(e) {
            var o = e.find(".qodef-m-list-spinner-wrapper")
              , t = e.find(".qodef-grid-inner");
            o.length && t.length && (t = t.offset().top - e.offset().top,
            o.css("top", t))
        },
        initGoogleMap: function(e) {
            var o;
            e.hasClass("qodef--with-map") && (o = e.find("#qodef-multiple-map-holder")).length && void 0 !== window.qodefGoogleMap && (qodefMapsVariables.multiple = o.data("addresses"),
            window.qodefGoogleMap.init(o, {
                selectorIsID: !0,
                multipleTrigger: !0
            }),
            i.initGoogleMapSwitcher(e))
        },
        initGoogleMapSwitcher: function(o) {
            var e, t, n, a;
            o.hasClass("qodef--with-map") && (e = o.find(".qodef-map-switcher")).length && (t = e.children(".qodef-map-switcher-full-map"),
            n = e.children(".qodef-map-switcher-full-list"),
            a = e.children(".qodef-map-switcher-reset"),
            t.on("click", function(e) {
                e.preventDefault(),
                t.hide(),
                n.show(),
                a.show(400, function() {
                    d(this).css({
                        display: "inline-flex"
                    })
                }),
                o.removeClass("qodef-switch-full-list").addClass("qodef-switch-full-map"),
                qodefCore.qodefScroll.disable(),
                setTimeout(function() {
                    qodef.body.trigger("newhome_core_trigger_full_width_list")
                }, 400)
            }),
            n.on("click", function(e) {
                e.preventDefault(),
                t.show(),
                n.hide(),
                a.show(400, function() {
                    d(this).css({
                        display: "inline-flex"
                    })
                }),
                o.removeClass("qodef-switch-full-map").addClass("qodef-switch-full-list"),
                qodefCore.qodefScroll.enable(),
                setTimeout(function() {
                    qodef.body.trigger("newhome_core_trigger_full_width_list")
                }, 400)
            }),
            a.on("click", function(e) {
                e.preventDefault(),
                t.show(),
                n.show(),
                a.hide(),
                o.removeClass("qodef-switch-full-map qodef-switch-full-list"),
                qodefCore.qodefScroll.enable(),
                setTimeout(function() {
                    qodef.body.trigger("newhome_core_trigger_full_width_list")
                }, 300)
            }))
        },
        bindGoogleMapAndListItems: function(e) {
            var o = e.find("article")
              , e = e.find(".qodef-map-list-map-part");
            o.length && e.length && o.each(function() {
                var n = d(this);
                n.hasClass("qodef-init") || (n.on("mouseenter", function() {
                    var t = n.data("id")
                      , e = d(".qodef-map-marker-holder:not(.qodef-map-active)")
                      , o = d(".qodef-cluster-marker");
                    e.length && (e.removeClass("qodef-active"),
                    d("#" + t + ".qodef-map-marker-holder").addClass("qodef-active")),
                    o.length && o.each(function() {
                        var e = d(this)
                          , o = e.data("item-ids");
                        void 0 !== o && o.includes(t.toString()) && e.addClass("qodef-active")
                    })
                }).on("mouseleave", function() {
                    var e = d(".qodef-map-marker-holder")
                      , o = d(".qodef-cluster-marker");
                    e.length && e.each(function() {
                        var e = d(this);
                        e.hasClass("qodef-map-active") || e.removeClass("qodef-active")
                    }),
                    o.length && o.removeClass("qodef-active")
                }),
                n.addClass("qodef-init"))
            })
        },
        reInitGoogleMap: function(e, o, t) {
            var n;
            e.hasClass("qodef-property-list") && e.hasClass("qodef--with-map") && void 0 !== window.qodefGoogleMap && (n = e.find("#qodef-multiple-map-holder"),
            o = o.addresses.addresses,
            qodefMapsVariables.multiple.addresses = void 0 !== t && "" !== t ? o : qodefMapsVariables.multiple.addresses.concat(o),
            window.qodefGoogleMap.init(n, {
                selectorIsID: !0,
                multipleTrigger: !0
            }),
            i.bindGoogleMapAndListItems(e))
        },
        initFilter: function(e) {
            var o = e.find(".qodef-m-filter-wrapper");
            o.length && (i.initSelect2(o),
            i.initRangeSlider(o),
            i.search(e, o),
            i.save(o),
            i.reset(o),
            i.handleAdvancedOpener(o))
        },
        initSelect2: function(e) {
            var e = e.find(".qodef-e--is-select2 select")
              , t = [];
            e.length && (e.each(function() {
                var e = d(this)
                  , o = {
                    holder: e,
                    options: {
                        minimumResultsForSearch: 1 / 0
                    }
                };
                void 0 !== e.data("placeholder") && (o.options.placeholder = e.data("placeholder"),
                o.options.allowClear = !1),
                t.push(o)
            }),
            "object" == typeof t) && d.each(t, function(e, o) {
                "function" == typeof o.holder.select2 && o.holder.select2(o.options)
            })
        },
        initRangeSlider: function(e) {
            var o, t, n, a, i, r, d, s = e.find(".qodef-e-filter-item.qodef--price-range");
            s.length && "undefined" != typeof noUiSlider && (e = s.find(".qodef-e-price-range-slider"),
            o = s.data("min-price"),
            t = s.data("max-price"),
            n = s.data("current-min-price"),
            a = s.data("current-max-price"),
            i = s.data("currency"),
            r = s.find(".qodef-e-price-info-min"),
            d = s.find(".qodef-e-price-info-max"),
            0 !== t && o !== t || (t = 9999),
            noUiSlider.create(e[0], {
                connect: !0,
                start: [n, a],
                step: 1,
                tooltips: !1,
                format: {
                    from: function(e) {
                        return parseInt(e)
                    },
                    to: function(e) {
                        return parseInt(e)
                    }
                },
                range: {
                    min: o,
                    max: t
                }
            }),
            e[0].noUiSlider.on("slide", function(e) {
                r.html(e[0] + i),
                d.html(e[1] + i)
            }),
            e[0].noUiSlider.on("set", function(e) {
                s.attr("data-current-min-price", e[0]),
                s.attr("data-current-max-price", e[1])
            }))
        },
        getFilterValues: function(e, t=!1) {
            var o, n = {}, a = e.find(".qodef-e--is-select2:not(.qodef--multi-select)"), a = (a.length && a.each(function() {
                var e = d(this);
                "" !== e.find("select").val() && (n[e.data("filter-type")] = e.find("select").val())
            }),
            e.find(".qodef-e--is-select2.qodef--multi-select")), a = (a.length && a.each(function() {
                var e = d(this);
                "" !== e.find("select").val() && (n[e.data("filter-type")] = e.find("select").val().join(","))
            }),
            e.find(".qodef-e-checkbox")), a = (a.length && a.each(function() {
                var e = d(this)
                  , o = [];
                e.find('input[type="checkbox"]:checked').each(function() {
                    o.push(d(this).data("id"))
                }),
                o.length ? (o = t ? o.join(",") : o.join(", "),
                n[e.data("filter-type")] = o) : n[e.data("filter-type")] = ""
            }),
            e.find(".qodef-e-filter-item.qodef--size")), i = (a.length && (i = a.find('input[name="qodef-text-size-min"]').val(),
            r = a.find('input[name="qodef-text-size-max"]').val(),
            o = {},
            i && "" !== i && (o.min = i),
            r && "" !== r && (o.max = r),
            d.isEmptyObject(o) || (n[a.data("filter-type")] = o)),
            e.find(".qodef-e-filter-item.qodef--specification")), r = (i.length && (r = i.find('input[name="qodef-text-specification-bedroom"]').val(),
            a = i.find('input[name="qodef-text-specification-bathroom"]').val(),
            o = {},
            r && "" !== r && (o.bedroom = parseInt(r, 10)),
            a && "" !== a && (o.bathroom = parseInt(a, 10)),
            d.isEmptyObject(o) || (n[i.data("filter-type")] = o)),
            e.find(".qodef-e-filter-item.qodef--price-range"));
            return r.length && (i = !(a = {}),
            r.attr("data-current-min-price") !== r.attr("data-min-price") && (i = !0),
            i = r.attr("data-current-max-price") !== r.attr("data-max-price") || i) && (a.min = r.attr("data-current-min-price"),
            a.max = r.attr("data-current-max-price"),
            a.currency = r.attr("data-currency"),
            n[r.data("filter-type")] = a),
            n
        },
        resetFilterValues: function(e) {
            var o = e.find(".qodef-e--is-select2")
              , o = (o.length && o.each(function() {
                var e = d(this);
                (e.hasClass("qodef--multi-select") ? e.find("select").val(null) : e.find("select").val(e.data("default-" + e.data("filter-type")))).trigger("change")
            }),
            e.find(".qodef-e-checkbox"))
              , o = (o && o.each(function() {
                d(this).find('input[type="checkbox"]').each(function() {
                    d(this).prop("checked", !1)
                })
            }),
            e.find(".qodef-e-filter-item.qodef--size"))
              , o = (o.length && (o.find('input[name="qodef-text-size-min"]').val(""),
            o.find('input[name="qodef-text-size-max"]').val("")),
            e.find(".qodef-e-filter-item.qodef--specification"))
              , o = (o.length && (o.find('input[name="qodef-text-specification-bedroom"]').val(""),
            o.find('input[name="qodef-text-specification-bathroom"]').val("")),
            e.find(".qodef-e-filter-item.qodef--price-range"));
            o.length && (o.find(".qodef-e-price-range-slider")[0].noUiSlider.reset(),
            o.attr("data-current-min-price", o.data("min-price")),
            o.attr("data-current-max-price", o.data("max-price")))
        },
        search: function(o, n) {
            var e = n.find(".qodef-e-filter--search")
              , a = n.find(".qodef-e-filter--reset");
            e.on("click", function(e) {
                e.preventDefault();
                var t = o.data("options")
                  , e = i.createAdditionalQuery(i.getFilterValues(n, !0));
                d.isEmptyObject(e) || (d.each(e, function(e, o) {
                    t[e] = o
                }),
                o.data("options", t),
                qodef.body.trigger("newhome_trigger_load_more", [o, 1, "qodef--search-loading"]),
                a.addClass("qodef--searched-trigger"))
            })
        },
        save: function(o) {
            var t = o.find(".qodef-e-filter--save")
              , n = o.find(".qodef-m-filter-response");
            t.on("click", function(e) {
                e.preventDefault(),
                qodef.body.hasClass("logged-in") ? (e = i.getFilterValues(o),
                d.isEmptyObject(e) || (t.addClass("qodef--loading"),
                d.ajax({
                    type: "POST",
                    data: {
                        options: e
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.saveRealEstatePropertiesSearchRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        n.html('<span class="qodef-m-filter-response-text">' + e.message + "</span>"),
                        n.append(e.data),
                        t.removeClass("qodef--loading"),
                        setTimeout(function() {
                            n.empty()
                        }, 6e3)
                    }
                }))) : d(document.body).trigger("newhome_membership_trigger_login_modal")
            })
        },
        reset: function(o) {
            var t = o.find(".qodef-e-filter--reset")
              , n = o.find(".qodef-e-filter--search");
            t.on("click", function(e) {
                e.preventDefault(),
                i.resetFilterValues(o),
                t.hasClass("qodef--searched-trigger") && (t.removeClass("qodef--searched-trigger"),
                n.trigger("click"))
            })
        },
        handleAdvancedOpener: function(o) {
            var e = o.find(".qodef-e-filter--advanced-opener")
              , t = o.find(".qodef-m-filter-advanced");
            e.on("click", function(e) {
                e.preventDefault(),
                t.length && (t.slideToggle().toggleClass("qodef--opened"),
                setTimeout(function() {
                    i.setSpinnerPosition(o.parents(".qodef-property-list"))
                }, 1e3))
            })
        },
        createAdditionalQuery: function(e) {
            var t = {}
              , n = 0;
            return t.additional_query_args = {},
            t.additional_query_args.tax_query = [],
            t.additional_query_args.meta_query = [],
            "object" == typeof e && (d.each(e, function(e, o) {
                switch (e) {
                case "location":
                case "category":
                case "type":
                    "" !== o && (-1 !== o.indexOf(",") && (o = o.split(",")),
                    t.additional_query_args.tax_query[n] = {},
                    t.additional_query_args.tax_query[n].taxonomy = "property-" + e,
                    t.additional_query_args.tax_query[n].field = "slug",
                    t.additional_query_args.tax_query[n].terms = o,
                    n++);
                    break;
                case "size":
                    o.min && "" !== o.min && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_size",
                        value: parseInt(o.min, 10),
                        compare: ">=",
                        type: "numeric"
                    }),
                    o.max && "" !== o.max && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_size",
                        value: parseInt(o.max, 10),
                        compare: "<=",
                        type: "numeric"
                    });
                    break;
                case "specification":
                    o.bedroom && "" !== o.bedroom && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_bedrooms",
                        value: parseInt(o.bedroom, 10),
                        compare: "=",
                        type: "numeric"
                    }),
                    o.bathroom && "" !== o.bathroom && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_bathrooms",
                        value: parseInt(o.bathroom, 10),
                        compare: "=",
                        type: "numeric"
                    });
                    break;
                case "price":
                    o.min && "" !== o.min && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_price_amount",
                        value: parseInt(o.min, 10),
                        compare: ">=",
                        type: "numeric"
                    }),
                    o.max && "" !== o.max && t.additional_query_args.meta_query.push({
                        key: "qodef_real_estate_property_single_price_amount",
                        value: parseInt(o.max, 10),
                        compare: "<=",
                        type: "numeric"
                    });
                    break;
                case "amenity":
                    o.length && o.split(",").forEach(function(e) {
                        e = e.replace(/\s/g, "_");
                        t.additional_query_args.meta_query.push({
                            key: "qodef_real_estate_property_single_" + e,
                            value: "",
                            compare: "!="
                        })
                    })
                }
            }),
            1 < t.additional_query_args.tax_query.length) && (t.additional_query_args.tax_query.relation = "AND"),
            t
        },
        triggerClick: function(e) {
            e = d(e).parents(".qodef-m-filter-wrapper").find(".qodef-e-filter--search.qodef-button");
            e.length && e.trigger("click")
        }
    };
    qodefCore.shortcodes.newhome_core_real_estate_property_list.qodefPropertyList = i,
    "object" == typeof qodefCore.listShortcodesScripts && d.each(qodefCore.listShortcodesScripts, function(e, o) {
        qodefCore.shortcodes.newhome_core_real_estate_property_list[e] = o
    })
}(jQuery),
function(r) {
    "use strict";
    qodefCore.shortcodes.newhome_core_property_search = {},
    r(document).ready(function() {
        a.init()
    });
    var a = {
        init: function() {
            var e = r(".qodef-property-search");
            e.length && e.each(function() {
                var e = r(this);
                a.initSelect2(e),
                a.initRangeSlider(e),
                a.openAdvancedFilter(e),
                a.closeAdvancedFilter(e),
                a.handleAmenityCheck(e),
                a.handleSaveClick(e),
                a.handleResetClick(e)
            })
        },
        initSelect2: function(e) {
            e = e.find(".qodef-property-search-form select");
            e.length && e.each(function() {
                var e = r(this)
                  , o = {
                    minimumResultsForSearch: 1 / 0
                };
                e.parents(".qodef--primary").length && (o.selectionCssClass = "qodef--selection-bold",
                o.dropdownCssClass = "qodef--dropdown-bold"),
                void 0 !== e.data("placeholder") && (o.placeholder = e.data("placeholder"),
                o.allowClear = !1),
                e.select2(o)
            })
        },
        initRangeSlider: function(e) {
            var o, t, n, a, i, r = e.find(".qodef-m-form-item.qodef--price-range");
            r.length && "undefined" != typeof noUiSlider && (e = r.find(".qodef-m-price-range-slider"),
            o = r.data("min-price"),
            t = r.data("max-price"),
            n = r.data("currency"),
            a = r.find(".qodef-m-price-info-min"),
            i = r.find(".qodef-m-price-info-max"),
            0 !== t && o !== t || (t = 9999),
            noUiSlider.create(e[0], {
                connect: !0,
                start: [o, t],
                step: 1,
                tooltips: !1,
                format: {
                    from: function(e) {
                        return parseInt(e)
                    },
                    to: function(e) {
                        return parseInt(e)
                    }
                },
                range: {
                    min: o,
                    max: t
                }
            }),
            e[0].noUiSlider.on("slide", function(e) {
                a.html(e[0] + n),
                i.html(e[1] + n)
            }),
            e[0].noUiSlider.on("set", function(e) {
                r.attr("data-current-min-price", e[0]),
                r.attr("data-current-max-price", e[1])
            }))
        },
        openAdvancedFilter: function(o) {
            var e = o.find(".qodef-m-button--advanced-open")
              , t = o.find(".qodef-m-form-holder-secondary");
            e.length && e.on("click", function(e) {
                e.preventDefault(),
                a.handleSync(o, "secondary"),
                t.removeClass("qodef--hide").addClass("qodef--show"),
                qodefCore.body.addClass("qodef--advanced-filter-opened")
            })
        },
        closeAdvancedFilter: function(o) {
            var e = o.find(".qodef-m-button--advanced-close")
              , t = o.find(".qodef-m-form-holder-secondary");
            e.length && e.on("click", function(e) {
                e.preventDefault(),
                a.handleSync(o, "primary"),
                t.removeClass("qodef--show").addClass("qodef--hide"),
                qodefCore.body.removeClass("qodef--advanced-filter-opened")
            }),
            r(window).on("keyup", function(e) {
                27 === e.keyCode && (a.handleSync(o, "primary"),
                t.removeClass("qodef--show").addClass("qodef--hide"),
                qodefCore.body.removeClass("qodef--advanced-filter-opened"))
            }),
            o.find(".qodef-m-form-overlay").on("click", function() {
                a.handleSync(o, "primary"),
                t.removeClass("qodef--show").addClass("qodef--hide"),
                qodefCore.body.removeClass("qodef--advanced-filter-opened")
            })
        },
        handleSync: function(e, o) {
            var t = e.find(".qodef--primary")
              , e = e.find(".qodef--secondary")
              , n = e.find('select[name="type"]')
              , a = t.find('select[name="category"]')
              , i = e.find('select[name="category"]')
              , t = t.find('select[name="location[]"]')
              , e = e.find('select[name="location[]"]');
            "primary" === o && (r('.qodef--primary input[name="type"][value="' + n.val() + '"]').prop("checked", !0),
            a.val(i.val()).trigger("change"),
            t.val(e.val()).trigger("change")),
            "secondary" === o && (n.val(r('.qodef--primary input[name="type"]:checked').val()).trigger("change"),
            i.val(a.val()).trigger("change"),
            e.val(t.val()).trigger("change"))
        },
        handleAmenityCheck: function(o) {
            var e = o.find(".qodef-m-checkbox--amenity .qodef-m-checkbox-item");
            e.length && e.each(function() {
                r(this).on("click", function(e) {
                    e.preventDefault();
                    e = r(this).find('input[type="checkbox"]');
                    e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", !0),
                    a.copyAmenityValues(o)
                })
            })
        },
        copyAmenityValues: function(e) {
            var o = e.find('input[name="amenity"]')
              , t = []
              , e = e.find('.qodef-m-checkbox--amenity input[type="checkbox"]');
            e.length && e.each(function() {
                r(this).prop("checked") && t.push(r(this).val())
            }),
            o.val(t)
        },
        handleResetClick: function(o) {
            var e = o.find(".qodef-m-button--reset");
            e.length && e.on("click", function(e) {
                e.preventDefault(),
                a.resetFormValues(o)
            })
        },
        handleSaveClick: function(o) {
            var t = o.find(".qodef-m-button--save")
              , n = o.find(".qodef-m-form-response");
            t.on("click", function(e) {
                e.preventDefault(),
                qodef.body.hasClass("logged-in") ? (e = a.getFormValues(o),
                r.isEmptyObject(e) || (t.addClass("qodef--loading"),
                r.ajax({
                    type: "POST",
                    data: {
                        options: e
                    },
                    url: qodefGlobal.vars.restUrl + qodefGlobal.vars.saveRealEstatePropertiesSearchRestRoute,
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                    },
                    success: function(e) {
                        n.html('<span class="qodef-m-form-response-text">' + e.message + "</span>"),
                        n.append(e.data),
                        t.removeClass("qodef--loading"),
                        setTimeout(function() {
                            n.empty()
                        }, 6e3)
                    }
                }))) : r(document.body).trigger("newhome_membership_trigger_login_modal")
            })
        },
        getFormValues: function(e) {
            var o, e = e.find(".qodef--secondary"), t = {}, n = e.find(".qodef-m-select:not(.qodef--multi-select)"), n = (n.length && n.each(function() {
                var e = r(this).find("select");
                "" !== e.val() && (t[e.attr("name")] = e.val())
            }),
            e.find(".qodef-m-select.qodef--multi-select")), n = (n.length && n.each(function() {
                var e = r(this).find("select");
                "" !== e.val() && (t[e.attr("name")] = e.val().join(","))
            }),
            e.find('input[name="amenity"]')), n = (n.length && "" !== n.val() && (t.amenity = n.val().replace(/,/gi, ", ").replace(/_/gi, " ")),
            e.find(".qodef-m-form-item.qodef--size")), a = (n.length && (a = n.find('input[name="size_min"]').val(),
            n = n.find('input[name="size_max"]').val(),
            o = {},
            a && "" !== a && (o.min = a),
            n && "" !== n && (o.max = n),
            r.isEmptyObject(o) || (t.size = o)),
            e.find(".qodef-m-form-item.qodef--specification")), n = (a.length && (n = a.find('input[name="specification_bedroom"]').val(),
            o = a.find('input[name="specification_bathroom"]').val(),
            a = {},
            n && "" !== n && (a.bedroom = parseInt(n, 10)),
            o && "" !== o && (a.bathroom = parseInt(o, 10)),
            r.isEmptyObject(a) || (t.specification = a)),
            e.find(".qodef-m-form-item.qodef--price-range"));
            return n.length && (a = !(o = {}),
            n.attr("data-current-min-price") !== n.attr("data-min-price") && (a = !0),
            a = n.attr("data-current-max-price") !== n.attr("data-max-price") || a) && (o.min = n.attr("data-current-min-price"),
            o.max = n.attr("data-current-max-price"),
            o.currency = n.attr("data-currency"),
            t.price = o),
            t
        },
        resetFormValues: function(e) {
            var o = e.find('input[name="amenity"]')
              , o = (o.length && o.each(function() {
                r(this).val("")
            }),
            e.find(".qodef-m-select"))
              , o = (o.length && o.each(function() {
                r(this).find("select").empty().trigger("change")
            }),
            e.find(".qodef-m-checkbox"))
              , o = (o.length && o.each(function() {
                r(this).find('input[type="checkbox"]').each(function() {
                    r(this).prop("checked", !1)
                })
            }),
            e.find(".qodef-m-radio"))
              , o = (o.length && o.each(function() {
                r(this).find('input[type="radio"]').each(function() {
                    r(this).prop("checked", !1)
                })
            }),
            e.find(".qodef-m-text"))
              , o = (o.length && o.each(function() {
                r(this).find('input[type="text"]').val("")
            }),
            e.find(".qodef-m-number"))
              , o = (o.length && o.each(function() {
                r(this).find('input[type="number"]').val("")
            }),
            e.find(".qodef-m-form-item.qodef--price-range"));
            o.length && (o.find(".qodef-m-price-range-slider")[0].noUiSlider.reset(),
            o.attr("data-current-min-price", o.data("min-price")),
            o.attr("data-current-max-price", o.data("max-price")))
        }
    };
    qodefCore.shortcodes.newhome_core_property_search.qodefPropertySearch = a
}(jQuery);
