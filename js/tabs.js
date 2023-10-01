/*!
 * jQuery UI Tabs 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
}(function(l) {
    "use strict";
    var a;
    return l.widget("ui.tabs", {
        version: "1.13.2",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (a = /#.*$/,
        function(t) {
            var e = t.href.replace(a, "")
              , i = location.href.replace(a, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }
        ),
        _create: function() {
            var e = this
              , t = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
            this._processTabs(),
            t.active = this._initialActive(),
            Array.isArray(t.disabled) && (t.disabled = l.uniqueSort(t.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = l(),
            this._refresh(),
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active
              , t = this.options.collapsible
              , a = location.hash.substring(1);
            return null === i && (a && this.tabs.each(function(t, e) {
                if (l(e).attr("aria-controls") === a)
                    return i = t,
                    !1
            }),
            null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)),
            !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0),
            i = !t && !1 === i && this.anchors.length ? 0 : i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : l()
            }
        },
        _tabKeydown: function(t) {
            var e = l(l.ui.safeActiveElement(this.document[0])).closest("li")
              , i = this.tabs.index(e)
              , a = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case l.ui.keyCode.RIGHT:
                case l.ui.keyCode.DOWN:
                    i++;
                    break;
                case l.ui.keyCode.UP:
                case l.ui.keyCode.LEFT:
                    a = !1,
                    i--;
                    break;
                case l.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case l.ui.keyCode.HOME:
                    i = 0;
                    break;
                case l.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i);
                case l.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i !== this.options.active && i);
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, a),
                t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === l.ui.keyCode.UP && (t.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, e) {
            var i = this.tabs.length - 1;
            for (; -1 !== l.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled); )
                t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).trigger("focus"),
            t
        },
        _setOption: function(t, e) {
            "active" === t ? this._activate(e) : (this._super(t, e),
            "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
            e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e))
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , e = this.tablist.children(":has(a[href])");
            t.disabled = l.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }),
            this._processTabs(),
            !1 !== t.active && this.anchors.length ? this.active.length && !l.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = l()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = l()),
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var o = this
              , t = this.tabs
              , e = this.anchors
              , i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                l(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                l(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map(function() {
                return l("a", this)[0]
            }).attr({
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = l(),
            this.anchors.each(function(t, e) {
                var i, a, s, n = l(e).uniqueId().attr("id"), h = l(e).closest("li"), r = h.attr("aria-controls");
                o._isLocal(e) ? (s = (i = e.hash).substring(1),
                a = o.element.find(o._sanitizeSelector(i))) : (s = h.attr("aria-controls") || l({}).uniqueId()[0].id,
                (a = o.element.find(i = "#" + s)).length || (a = o._createPanel(s)).insertAfter(o.panels[t - 1] || o.tablist),
                a.attr("aria-live", "polite")),
                a.length && (o.panels = o.panels.add(a)),
                r && h.data("ui-tabs-aria-controls", r),
                h.attr({
                    "aria-controls": s,
                    "aria-labelledby": n
                }),
                a.attr("aria-labelledby", n)
            }),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            t && (this._off(t.not(this.tabs)),
            this._off(e.not(this.anchors)),
            this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return l("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var e, i;
            for (Array.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
            i = 0; e = this.tabs[i]; i++)
                e = l(e),
                !0 === t || -1 !== l.inArray(i, t) ? (e.attr("aria-disabled", "true"),
                this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"),
                this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && l.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var t = l(this)
                  , e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= l(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                l(this).height(Math.max(0, i - l(this).innerHeight() + l(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, l(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options
              , i = this.active
              , a = l(t.currentTarget).closest("li")
              , s = a[0] === i[0]
              , n = s && e.collapsible
              , h = n ? l() : this._getPanelForTab(a)
              , r = i.length ? this._getPanelForTab(i) : l()
              , i = {
                oldTab: i,
                oldPanel: r,
                newTab: n ? l() : a,
                newPanel: h
            };
            t.preventDefault(),
            a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !n && this.tabs.index(a),
            this.active = s ? l() : a,
            this.xhr && this.xhr.abort(),
            r.length || h.length || l.error("jQuery UI Tabs: Mismatching fragment identifier."),
            h.length && this.load(this.tabs.index(a), t),
            this._toggle(t, i))
        },
        _toggle: function(t, e) {
            var i = this
              , a = e.newPanel
              , s = e.oldPanel;
            function n() {
                i.running = !1,
                i._trigger("activate", t, e)
            }
            function h() {
                i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                a.length && i.options.show ? i._show(a, i.options.show, n) : (a.show(),
                n())
            }
            this.running = !0,
            s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                h()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            s.hide(),
            h()),
            s.attr("aria-hidden", "true"),
            e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            a.length && s.length ? e.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === l(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            a.attr("aria-hidden", "false"),
            e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t = (t = t.length ? t : this.active).find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: l.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? l() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + l.escapeSelector(t) + "']")) : t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                l.data(this, "ui-tabs-destroy") ? l(this).remove() : l(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }),
            this.tabs.each(function() {
                var t = l(this)
                  , e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i),
            Array.isArray(t) ? l.map(t, function(t) {
                return t !== i ? t : null
            }) : l.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })),
            this._setOptionDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t)
                    e = !0;
                else {
                    if (t = this._getIndex(t),
                    -1 !== l.inArray(t, e))
                        return;
                    e = Array.isArray(e) ? l.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function(t, a) {
            t = this._getIndex(t);
            function s(t, e) {
                "abort" === e && n.panels.stop(!1, !0),
                n._removeClass(i, "ui-tabs-loading"),
                h.removeAttr("aria-busy"),
                t === n.xhr && delete n.xhr
            }
            var n = this
              , i = this.tabs.eq(t)
              , t = i.find(".ui-tabs-anchor")
              , h = this._getPanelForTab(i)
              , r = {
                tab: i,
                panel: h
            };
            this._isLocal(t[0]) || (this.xhr = l.ajax(this._ajaxSettings(t, a, r)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"),
            h.attr("aria-busy", "true"),
            this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    h.html(t),
                    n._trigger("load", a, r),
                    s(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    s(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, a) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, e) {
                    return s._trigger("beforeLoad", i, l.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, a))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = l(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    }),
    !1 !== l.uiBackCompat && l.widget("ui.tabs", l.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    }),
    l.ui.tabs
});
