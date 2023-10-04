!function(_) {
    "use strict";
    _(window).on("elementor/frontend/init", function() {
        t.init(),
        e.init(),
        d.init(),
        o.init(),
        f.init(),
        a.init(),
        l.init()
    });
    var t = {
        init: function() {
            if (Boolean(elementorFrontend.isEditMode()))
                for (var e in qodefCore.shortcodes)
                    for (var o in qodefCore.shortcodes[e])
                        t.reInitShortcode(e, o)
        },
        reInitShortcode: function(o, t) {
            elementorFrontend.hooks.addAction("frontend/element_ready/" + o + ".default", function(e) {
                void 0 === qodefCore.shortcodes[o][t] ? console.log(t) : "function" == typeof qodefCore.shortcodes[o][t].initSlider && e.find(".qodef-instagram-swiper-container").length ? qodefCore.shortcodes[o][t].initSlider(e.find(".qodef-instagram-swiper-container"), !1) : "function" == typeof qodefCore.shortcodes[o][t].initSlider && e.find(".qodef-swiper-container").length ? qodefCore.shortcodes[o][t].initSlider(e.find(".qodef-swiper-container")) : "function" == typeof qodefCore.shortcodes[o][t].initPopup && e.find(".qodef-magnific-popup").length ? qodefCore.shortcodes[o][t].initPopup(e.find(".qodef-magnific-popup")) : "function" == typeof qodefCore.shortcodes[o][t].initItem && e.find(".qodef-shortcode").length ? qodefCore.shortcodes[o][t].initItem(e.find(".qodef-shortcode")) : qodefCore.shortcodes[o][t].init()
            })
        }
    }
      , e = {
        init: function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/section", d.init)
        }
    }
      , d = {
        init: function(e) {
            var t, a, i = e, o = Boolean(elementorFrontend.isEditMode()), r = [], f = {};
            o && void 0 !== e ? (o = window.elementor.elements,
            t = i.data("id"),
            a = i.hasClass("elementor-inner-section"),
            _.each(o.models, function(e, o) {
                t == o.id ? f = o.attributes.settings.attributes : a && void 0 !== o.attributes.elements.models && o.attributes.elements.models.length && _.each(o.attributes.elements.models, function(e, o) {
                    void 0 !== o.attributes.elements.models[0] && void 0 !== o.attributes.elements.models[0].attributes.settings.attributes && t == o.attributes.elements.models[0].attributes.id && (f = o.attributes.elements.models[0].attributes.settings.attributes)
                })
            }),
            void 0 !== f.qodef_parallax_type && (r.enable_parallax = f.qodef_parallax_type),
            void 0 !== f.qodef_parallax_image && f.qodef_parallax_image.url && (r.parallax_image_url = f.qodef_parallax_image.url),
            void 0 !== f.qodef_offset_type && (r.enable_offset = f.qodef_offset_type),
            void 0 !== f.qodef_offset_image && f.qodef_offset_image.url && (r.offset_image_url = f.qodef_offset_image.url),
            void 0 !== f.qodef_offset_parallax && (r.offset_parallax = f.qodef_offset_parallax),
            void 0 !== f.qodef_offset_vertical_anchor && (r.offset_vertical_anchor = f.qodef_offset_vertical_anchor),
            void 0 !== f.qodef_offset_vertical_position && (r.offset_vertical_position = f.qodef_offset_vertical_position),
            void 0 !== f.qodef_offset_horizontal_anchor && (r.offset_horizontal_anchor = f.qodef_offset_horizontal_anchor),
            void 0 !== f.qodef_offset_horizontal_position && (r.offset_horizontal_position = f.qodef_offset_horizontal_position),
            void 0 !== i && d.generateOutput(i, r)) : (e = qodefElementorGlobal.vars.elementorSectionHandler,
            _.each(e, function(o, e) {
                e.forEach(function(e) {
                    void 0 !== e.parallax_type && "parallax" === e.parallax_type && (i = _('[data-id="' + o + '"]'),
                    r.parallax_type = e.parallax_type,
                    r.parallax_image_url = e.parallax_image.url,
                    void 0 !== r.parallax_image_url) && (r.enable_parallax = "parallax"),
                    void 0 !== e.offset_type && "offset" === e.offset_type && (i = _('[data-id="' + o + '"]'),
                    r.offset_type = e.offset_type,
                    r.offset_image_url = e.offset_image.url,
                    r.offset_parallax = e.offset_parallax,
                    r.offset_vertical_anchor = e.offset_vertical_anchor,
                    r.offset_vertical_position = e.offset_vertical_position,
                    r.offset_horizontal_anchor = e.offset_horizontal_anchor,
                    r.offset_horizontal_position = e.offset_horizontal_position,
                    void 0 !== r.offset_image_url) && (r.enable_offset = "offset")
                }),
                void 0 === i || i.hasClass("qodef-parallax--init") || (d.generateOutput(i, r),
                r = [],
                i.addClass("qodef-parallax--init"))
            }))
        },
        generateOutput: function(e, o) {
            var t;
            void 0 !== o.enable_parallax && "parallax" === o.enable_parallax && void 0 !== o.parallax_image_url && (_(".qodef-parallax-row-holder", e).remove(),
            e.removeClass("qodef-parallax qodef--parallax-row"),
            e.addClass("qodef-parallax qodef--parallax-row"),
            _('<div class="qodef-parallax-row-holder"><div class="qodef-parallax-img-holder"><div class="qodef-parallax-img-wrapper"><img class="qodef-parallax-img" src="' + o.parallax_image_url + '" alt="Parallax Image"></div></div></div>').prependTo(e),
            (t = new Image).onload = function() {
                e.find("img.qodef-parallax-img").attr("src", this.src),
                qodefCore.qodefParallaxBackground.init()
            }
            ,
            t.src = o.parallax_image_url),
            void 0 !== o.enable_offset && "offset" === o.enable_offset && void 0 !== o.offset_image_url && (_(".qodef-offset-image-holder", e).remove(),
            e.removeClass("qodef-offset-image"),
            t = "",
            void 0 !== o.offset_parallax && "yes" === o.offset_parallax && (t = " qodef-parallax-item"),
            e.addClass("qodef-offset-image"),
            _('<div class="qodef-offset-image-holder" style="position: absolute; z-index: 5; ' + o.offset_vertical_anchor + ":" + o.offset_vertical_position + ";" + o.offset_horizontal_anchor + ":" + o.offset_horizontal_position + '"><div class="qodef-offset-image-wrapper' + t + '"><img src="' + o.offset_image_url + '" alt="Offset Image"></div></div>').prependTo(e))
        }
    }
      , o = {
        init: function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/column", f.init)
        }
    }
      , f = {
        init: function(e) {
            var t = e
              , o = Boolean(elementorFrontend.isEditMode())
              , a = []
              , i = {};
            if (o && void 0 !== e) {
                var o = window.elementor.elements
                  , r = t.data("id");
                if (!o.models)
                    return !1;
                _.each(o.models, function(e, o) {
                    _.each(o.attributes.elements.models, function(e, o) {
                        r == o.id && (i = o.attributes.settings.attributes)
                    })
                }),
                void 0 !== i.qodef_background_text_enable && i.qodef_background_text_enable.length && (a.background_text_enable = i.qodef_background_text_enable),
                void 0 !== i.qodef_background_text && i.qodef_background_text.length && (a.background_text = i.qodef_background_text),
                void 0 !== i.qodef_background_text_color && i.qodef_background_text_color.length && (a.background_text_color = i.qodef_background_text_color),
                void 0 !== i.qodef_background_text_size && i.qodef_background_text_size.length && (a.background_text_size = i.qodef_background_text_size),
                void 0 !== i.qodef_background_text_size_1440 && i.qodef_background_text_size_1440.length && (a.background_text_size_1440 = i.qodef_background_text_size_1440),
                void 0 !== i.qodef_background_text_size_1366 && i.qodef_background_text_size_1366.length && (a.background_text_size_1366 = i.qodef_background_text_size_1366),
                void 0 !== i.qodef_background_text_size_1024 && i.qodef_background_text_size_1024.length && (a.background_text_size_1024 = i.qodef_background_text_size_1024),
                void 0 !== i.qodef_background_text_vertical_offset && i.qodef_background_text_vertical_offset.length && (a.background_text_vertical_offset = i.qodef_background_text_vertical_offset),
                void 0 !== i.qodef_background_text_vertical_offset_1440 && i.qodef_background_text_vertical_offset_1440.length && (a.background_text_vertical_offset_1440 = i.qodef_background_text_vertical_offset_1440),
                void 0 !== i.qodef_background_text_vertical_offset_1366 && i.qodef_background_text_vertical_offset_1366.length && (a.background_text_vertical_offset_1366 = i.qodef_background_text_vertical_offset_1366),
                void 0 !== i.qodef_background_text_vertical_offset_1024 && i.qodef_background_text_vertical_offset_1024.length && (a.background_text_vertical_offset_1024 = i.qodef_background_text_vertical_offset_1024),
                void 0 !== i.qodef_background_text_horizontal_align && i.qodef_background_text_horizontal_align.length && (a.background_text_horizontal_align = i.qodef_background_text_horizontal_align),
                void 0 !== i.qodef_background_text_vertical_align && i.qodef_background_text_vertical_align.length && (a.background_text_vertical_align = i.qodef_background_text_vertical_align)
            } else {
                e = qodefElementorGlobal.vars.elementorColumnHandler;
                _.each(e, function(e, o) {
                    t = _('[data-id="' + e + '"]'),
                    a.background_text = o[0],
                    a.background_text_color = o[1],
                    a.background_text_size = o[2],
                    a.background_text_size_1440 = o[3],
                    a.background_text_size_1366 = o[4],
                    a.background_text_size_1024 = o[5],
                    a.background_text_vertical_offset = o[6],
                    a.background_text_vertical_offset_1440 = o[7],
                    a.background_text_vertical_offset_1366 = o[8],
                    a.background_text_vertical_offset_1024 = o[9],
                    a.background_text_horizontal_align = o[10],
                    a.background_text_vertical_align = o[11],
                    void 0 !== a.background_text && (a.background_text_enable = "yes"),
                    void 0 !== t && t.length && f.generateOutput(t, a)
                })
            }
            void 0 !== t && f.generateOutput(t, a)
        },
        generateOutput: function(e, o) {
            void 0 !== o.background_text_enable && "yes" == o.background_text_enable && void 0 !== o.background_text && (_(".qodef-m-background-text-holder", e).remove(),
            e.removeClass("qodef-background-text"),
            e.addClass("qodef-background-text"),
            _('<div class="qodef-m-background-text-holder"><span class="qodef-m-background-text">' + o.background_text + "</span></div>").prependTo(e),
            e.find(".qodef-m-background-text").css({
                color: o.background_text_color
            }),
            e.find(".qodef-m-background-text-holder").css({
                "justify-content": o.background_text_horizontal_align,
                "align-items": o.background_text_vertical_align
            }),
            e.find(".qodef-m-background-text").attr("data-size-3840", o.background_text_size),
            e.find(".qodef-m-background-text").attr("data-size-1440", o.background_text_size_1440),
            e.find(".qodef-m-background-text").attr("data-size-1366", o.background_text_size_1366),
            e.find(".qodef-m-background-text").attr("data-size-1024", o.background_text_size_1024),
            e.find(".qodef-m-background-text").attr("data-vertical-offset-3840", o.background_text_vertical_offset),
            e.find(".qodef-m-background-text").attr("data-vertical-offset-1440", o.background_text_vertical_offset_1440),
            e.find(".qodef-m-background-text").attr("data-vertical-offset-1366", o.background_text_vertical_offset_1366),
            e.find(".qodef-m-background-text").attr("data-vertical-offset-1024", o.background_text_vertical_offset_1024),
            qodefBackgroundText.init())
        }
    }
      , a = {
        init: function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/container", l.init)
        }
    }
      , l = {
        init: function(e) {
            var t, a, i = e, o = Boolean(elementorFrontend.isEditMode()), r = [], f = {};
            o && void 0 !== e ? (o = window.elementor.elements,
            t = i.data("id"),
            a = i.hasClass("e-con--column"),
            _.each(o.models, function(e, o) {
                t == o.id ? f = o.attributes.settings.attributes : a && void 0 !== o.attributes.elements.models && o.attributes.elements.models.length && _.each(o.attributes.elements.models, function(e, o) {
                    void 0 !== o.attributes.settings.attributes && t == o.attributes.id && (f = o.attributes.settings.attributes)
                })
            }),
            void 0 !== f.qodef_parallax_type && (r.enable_parallax = f.qodef_parallax_type),
            void 0 !== f.qodef_parallax_image && f.qodef_parallax_image.url && (r.parallax_image_url = f.qodef_parallax_image.url),
            void 0 !== f.qodef_offset_type && (r.enable_offset = f.qodef_offset_type),
            void 0 !== f.qodef_offset_image && f.qodef_offset_image.url && (r.offset_image_url = f.qodef_offset_image.url),
            void 0 !== f.qodef_offset_parallax && (r.offset_parallax = f.qodef_offset_parallax),
            void 0 !== f.qodef_offset_vertical_anchor && (r.offset_vertical_anchor = f.qodef_offset_vertical_anchor),
            void 0 !== f.qodef_offset_vertical_position && (r.offset_vertical_position = f.qodef_offset_vertical_position),
            void 0 !== f.qodef_offset_horizontal_anchor && (r.offset_horizontal_anchor = f.qodef_offset_horizontal_anchor),
            void 0 !== f.qodef_offset_horizontal_position && (r.offset_horizontal_position = f.qodef_offset_horizontal_position),
            void 0 !== i && l.generateOutput(i, r)) : (e = qodefElementorContainerGlobal.vars.elementorContainerHandler,
            _.each(e, function(o, e) {
                e.forEach(function(e) {
                    void 0 !== e.parallax_type && "parallax" === e.parallax_type && (i = _('[data-id="' + o + '"]'),
                    r.parallax_type = e.parallax_type,
                    r.parallax_image_url = e.parallax_image.url,
                    void 0 !== r.parallax_image_url) && (r.enable_parallax = "parallax"),
                    void 0 !== e.offset_type && "offset" === e.offset_type && (i = _('[data-id="' + o + '"]'),
                    r.offset_type = e.offset_type,
                    r.offset_image_url = e.offset_image.url,
                    r.offset_parallax = e.offset_parallax,
                    r.offset_vertical_anchor = e.offset_vertical_anchor,
                    r.offset_vertical_position = e.offset_vertical_position,
                    r.offset_horizontal_anchor = e.offset_horizontal_anchor,
                    r.offset_horizontal_position = e.offset_horizontal_position,
                    void 0 !== r.offset_image_url) && (r.enable_offset = "offset")
                }),
                void 0 === i || i.hasClass("qodef-parallax--init") || (l.generateOutput(i, r),
                r = [],
                i.addClass("qodef-parallax--init"))
            }))
        },
        generateOutput: function(e, o) {
            var t;
            void 0 !== o.enable_parallax && "parallax" === o.enable_parallax && void 0 !== o.parallax_image_url && (_(".qodef-parallax-row-holder", e).remove(),
            e.removeClass("qodef-parallax qodef--parallax-row"),
            e.addClass("qodef-parallax qodef--parallax-row"),
            _('<div class="qodef-parallax-row-holder"><div class="qodef-parallax-img-holder"><div class="qodef-parallax-img-wrapper"><img class="qodef-parallax-img" src="' + o.parallax_image_url + '" alt="Parallax Image"></div></div></div>').prependTo(e),
            (t = new Image).onload = function() {
                e.find("img.qodef-parallax-img").attr("src", this.src),
                qodefCore.qodefParallaxBackground.init()
            }
            ,
            t.src = o.parallax_image_url),
            void 0 !== o.enable_offset && "offset" === o.enable_offset && void 0 !== o.offset_image_url && (_(".qodef-offset-image-holder", e).remove(),
            e.removeClass("qodef-offset-image"),
            t = "",
            void 0 !== o.offset_parallax && "yes" === o.offset_parallax && (t = " qodef-parallax-item"),
            e.addClass("qodef-offset-image"),
            _('<div class="qodef-offset-image-holder" style="position: absolute; z-index: 5; ' + o.offset_vertical_anchor + ":" + o.offset_vertical_position + ";" + o.offset_horizontal_anchor + ":" + o.offset_horizontal_position + '"><div class="qodef-offset-image-wrapper' + t + '"><img src="' + o.offset_image_url + '" alt="Offset Image"></div></div>').prependTo(e))
        }
    }
}(jQuery);
