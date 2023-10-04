/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function a(o, s, u) {
    function c(n, e) {
        if (!s[n]) {
            if (!o[n]) {
                var t = "function" == typeof require && require;
                if (!e && t)
                    return t(n, !0);
                if (l)
                    return l(n, !0);
                var r = new Error("Cannot find module '" + n + "'");
                throw r.code = "MODULE_NOT_FOUND",
                r
            }
            var i = s[n] = {
                exports: {}
            };
            o[n][0].call(i.exports, function(e) {
                var t = o[n][1][e];
                return c(t || e)
            }, i, i.exports, a, o, s, u)
        }
        return s[n].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < u.length; e++)
        c(u[e]);
    return c
}({
    1: [function(e, t, n) {
        "use strict";
        var T = {
            promise: null,
            load: function(e) {
                "undefined" != typeof Vimeo ? T._createPlayer(e) : (T.promise = T.promise || mejs.Utils.loadScript("https://player.vimeo.com/api/player.js"),
                T.promise.then(function() {
                    T._createPlayer(e)
                }))
            },
            _createPlayer: function(e) {
                var t = new Vimeo.Player(e.iframe);
                window["__ready__" + e.id](t)
            },
            getVimeoId: function(e) {
                if (null == e)
                    return null;
                var t = (e = e.split("?")[0]).match(/https:\/\/player.vimeo.com\/video\/(\d+)$/);
                if (t)
                    return parseInt(t[1], 10);
                var n = e.match(/https:\/\/vimeo.com\/(\d+)$/);
                if (n)
                    return parseInt(n[1], 10);
                var r = e.match(/https:\/\/vimeo.com\/(\d+)\/\w+$/);
                return r ? parseInt(r[1], 10) : NaN
            }
        }
          , r = {
            name: "vimeo_iframe",
            options: {
                prefix: "vimeo_iframe"
            },
            canPlayType: function(e) {
                return ~["video/vimeo", "video/x-vimeo"].indexOf(e.toLowerCase())
            },
            create: function(f, e, t) {
                var v = []
                  , h = {}
                  , y = !0
                  , g = 1
                  , a = g
                  , E = 0
                  , j = 0
                  , U = !1
                  , b = 0
                  , w = null
                  , n = "";
                h.options = e,
                h.id = f.id + "_" + e.prefix,
                h.mediaElement = f;
                for (var N = function(e) {
                    f.generateError("Code " + e.name + ": " + e.message, t)
                }, r = mejs.html5media.properties, i = function(i) {
                    var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    h["get" + e] = function() {
                        if (null !== w) {
                            switch (i) {
                            case "currentTime":
                                return E;
                            case "duration":
                                return b;
                            case "volume":
                                return g;
                            case "muted":
                                return 0 === g;
                            case "paused":
                                return y;
                            case "ended":
                                return U;
                            case "src":
                                return w.getVideoUrl().then(function(e) {
                                    n = e
                                }).catch(function(e) {
                                    return N(e)
                                }),
                                n;
                            case "buffered":
                                return {
                                    start: function() {
                                        return 0
                                    },
                                    end: function() {
                                        return j * b
                                    },
                                    length: 1
                                };
                            case "readyState":
                                return 4
                            }
                            return null
                        }
                        return null
                    }
                    ,
                    h["set" + e] = function(e) {
                        if (null !== w)
                            switch (i) {
                            case "src":
                                var t = "string" == typeof e ? e : e[0].src
                                  , n = T.getVimeoId(t);
                                w.loadVideo(n).then(function() {
                                    f.originalNode.autoplay && w.play()
                                }).catch(function(e) {
                                    return N(e)
                                });
                                break;
                            case "currentTime":
                                w.setCurrentTime(e).then(function() {
                                    E = e,
                                    setTimeout(function() {
                                        var e = mejs.Utils.createEvent("timeupdate", h);
                                        f.dispatchEvent(e)
                                    }, 50)
                                }).catch(function(e) {
                                    return N(e)
                                });
                                break;
                            case "volume":
                                w.setVolume(e).then(function() {
                                    a = g = e,
                                    setTimeout(function() {
                                        var e = mejs.Utils.createEvent("volumechange", h);
                                        f.dispatchEvent(e)
                                    }, 50)
                                }).catch(function(e) {
                                    return N(e)
                                });
                                break;
                            case "loop":
                                w.setLoop(e).catch(function(e) {
                                    return N(e)
                                });
                                break;
                            case "muted":
                                e ? w.setVolume(0).then(function() {
                                    g = 0,
                                    setTimeout(function() {
                                        var e = mejs.Utils.createEvent("volumechange", h);
                                        f.dispatchEvent(e)
                                    }, 50)
                                }).catch(function(e) {
                                    return N(e)
                                }) : w.setVolume(a).then(function() {
                                    g = a,
                                    setTimeout(function() {
                                        var e = mejs.Utils.createEvent("volumechange", h);
                                        f.dispatchEvent(e)
                                    }, 50)
                                }).catch(function(e) {
                                    return N(e)
                                });
                                break;
                            case "readyState":
                                var r = mejs.Utils.createEvent("canplay", h);
                                f.dispatchEvent(r)
                            }
                        else
                            v.push({
                                type: "set",
                                propName: i,
                                value: e
                            })
                    }
                }, o = 0, s = r.length; o < s; o++)
                    i(r[o]);
                for (var u = mejs.html5media.methods, c = function(e) {
                    h[e] = function() {
                        if (null !== w)
                            switch (e) {
                            case "play":
                                return y = !1,
                                w.play();
                            case "pause":
                                return y = !0,
                                w.pause();
                            case "load":
                                return null
                            }
                        else
                            v.push({
                                type: "call",
                                methodName: e
                            })
                    }
                }, l = 0, d = u.length; l < d; l++)
                    c(u[l]);
                window["__ready__" + h.id] = function(e) {
                    if (f.vimeoPlayer = w = e,
                    v.length)
                        for (var t = 0, n = v.length; t < n; t++) {
                            var r = v[t];
                            if ("set" === r.type) {
                                var i = r.propName
                                  , a = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                                h["set" + a](r.value)
                            } else
                                "call" === r.type && h[r.methodName]()
                        }
                    f.originalNode.muted && (w.setVolume(0),
                    g = 0);
                    for (var o = document.getElementById(h.id), s = void 0, u = function(e) {
                        var t = mejs.Utils.createEvent(e.type, h);
                        f.dispatchEvent(t)
                    }, c = 0, l = (s = ["mouseover", "mouseout"]).length; c < l; c++)
                        o.addEventListener(s[c], u, !1);
                    w.on("loaded", function() {
                        w.getDuration().then(function(e) {
                            if (0 < (b = e) && (j = b * e,
                            f.originalNode.autoplay)) {
                                U = y = !1;
                                var t = mejs.Utils.createEvent("play", h);
                                f.dispatchEvent(t)
                            }
                        }).catch(function(e) {
                            N(e)
                        })
                    }),
                    w.on("progress", function() {
                        w.getDuration().then(function(e) {
                            if (0 < (b = e) && (j = b * e,
                            f.originalNode.autoplay)) {
                                var t = mejs.Utils.createEvent("play", h);
                                f.dispatchEvent(t);
                                var n = mejs.Utils.createEvent("playing", h);
                                f.dispatchEvent(n)
                            }
                            var r = mejs.Utils.createEvent("progress", h);
                            f.dispatchEvent(r)
                        }).catch(function(e) {
                            return N(e)
                        })
                    }),
                    w.on("timeupdate", function() {
                        w.getCurrentTime().then(function(e) {
                            E = e;
                            var t = mejs.Utils.createEvent("timeupdate", h);
                            f.dispatchEvent(t)
                        }).catch(function(e) {
                            return N(e)
                        })
                    }),
                    w.on("play", function() {
                        U = y = !1;
                        var e = mejs.Utils.createEvent("play", h);
                        f.dispatchEvent(e);
                        var t = mejs.Utils.createEvent("playing", h);
                        f.dispatchEvent(t)
                    }),
                    w.on("pause", function() {
                        y = !0,
                        U = !1;
                        var e = mejs.Utils.createEvent("pause", h);
                        f.dispatchEvent(e)
                    }),
                    w.on("ended", function() {
                        y = !1,
                        U = !0;
                        var e = mejs.Utils.createEvent("ended", h);
                        f.dispatchEvent(e)
                    });
                    for (var d = 0, p = (s = ["rendererready", "loadedmetadata", "loadeddata", "canplay"]).length; d < p; d++) {
                        var m = mejs.Utils.createEvent(s[d], h);
                        f.dispatchEvent(m)
                    }
                }
                ;
                var p = f.originalNode.height
                  , m = f.originalNode.width
                  , _ = document.createElement("iframe")
                  , x = "https://player.vimeo.com/video/" + T.getVimeoId(t[0].src)
                  , A = ~t[0].src.indexOf("?") ? "?" + t[0].src.slice(t[0].src.indexOf("?") + 1) : ""
                  , V = [];
                return f.originalNode.autoplay && -1 === A.indexOf("autoplay") && V.push("autoplay=1"),
                f.originalNode.loop && -1 === A.indexOf("loop") && V.push("loop=1"),
                A = A + (A ? "&" : "?") + V.join("&"),
                _.setAttribute("id", h.id),
                _.setAttribute("width", m),
                _.setAttribute("height", p),
                _.setAttribute("frameBorder", "0"),
                _.setAttribute("src", "" + x + A),
                _.setAttribute("webkitallowfullscreen", "true"),
                _.setAttribute("mozallowfullscreen", "true"),
                _.setAttribute("allowfullscreen", "true"),
                _.setAttribute("allow", "autoplay"),
                f.originalNode.parentNode.insertBefore(_, f.originalNode),
                f.originalNode.style.display = "none",
                T.load({
                    iframe: _,
                    id: h.id
                }),
                h.hide = function() {
                    h.pause(),
                    w && (_.style.display = "none")
                }
                ,
                h.setSize = function(e, t) {
                    _.setAttribute("width", e),
                    _.setAttribute("height", t)
                }
                ,
                h.show = function() {
                    w && (_.style.display = "")
                }
                ,
                h.destroy = function() {}
                ,
                h
            }
        };
        mejs.Utils.typeChecks.push(function(e) {
            return /(\/\/player\.vimeo|vimeo\.com)/i.test(e) ? "video/x-vimeo" : null
        }),
        mejs.Renderers.add(r)
    }
    , {}]
}, {}, [1]);
