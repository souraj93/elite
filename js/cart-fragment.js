jQuery(function(r) {
    if ("undefined" == typeof wc_cart_fragments_params)
        return !1;
    var t = !0
      , o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage"in window && null !== window.sessionStorage,
        window.sessionStorage.setItem("wc", "test"),
        window.sessionStorage.removeItem("wc"),
        window.localStorage.setItem("wc", "test"),
        window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }
    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }
    function s(e) {
        t && (localStorage.setItem(o, e),
        sessionStorage.setItem(o, e))
    }
    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {
            time: (new Date).getTime()
        },
        timeout: wc_cart_fragments_params.request_timeout,
        success: function(e) {
            e && e.fragments && (r.each(e.fragments, function(e, t) {
                r(e).replaceWith(t)
            }),
            t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)),
            s(e.cart_hash),
            e.cart_hash && a()),
            r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function() {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };
    function n() {
        r.ajax(e)
    }
    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function() {
            n()
        }),
        r(document.body).on("added_to_cart removed_from_cart", function(e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(),
            sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)),
            s(r)
        }),
        r(document.body).on("wc_fragments_refreshed", function() {
            clearTimeout(i),
            i = setTimeout(n, 864e5)
        }),
        r(window).on("storage onstorage", function(e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }),
        r(window).on("pageshow", function(e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(),
            r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name))
              , _ = sessionStorage.getItem(o)
              , g = Cookies.get("woocommerce_cart_hash")
              , m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""),
            null !== g && g !== undefined && "" !== g || (g = ""),
            _ && (null === m || m === undefined || "" === m))
                throw "No cart_created";
            if (m) {
                var d = +m + 864e5
                  , w = (new Date).getTime();
                if (d < w)
                    throw "Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g)
                throw "No fragment";
            r.each(c, function(e, t) {
                r(e).replaceWith(t)
            }),
            r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else
        n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),
    r(document.body).on("adding_to_cart", function() {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }),
    "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function() {
        n()
    })
});
