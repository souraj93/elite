var runtime = function(t) {
    "use strict";
    var r, e = Object.prototype, n = e.hasOwnProperty, o = Object.defineProperty || function(t, r, e) {
        t[r] = e.value
    }
    , i = (w = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator", a = w.asyncIterator || "@@asyncIterator", c = w.toStringTag || "@@toStringTag";
    function u(t, r, e) {
        return Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        t[r]
    }
    try {
        u({}, "")
    } catch (e) {
        u = function(t, r, e) {
            return t[r] = e
        }
    }
    function h(t, e, n, i) {
        var a, c, u, h;
        e = e && e.prototype instanceof v ? e : v,
        e = Object.create(e.prototype),
        i = new O(i || []);
        return o(e, "_invoke", {
            value: (a = t,
            c = n,
            u = i,
            h = f,
            function(t, e) {
                if (h === p)
                    throw new Error("Generator is already running");
                if (h === y) {
                    if ("throw" === t)
                        throw e;
                    return G()
                }
                for (u.method = t,
                u.arg = e; ; ) {
                    var n = u.delegate;
                    if (n && (n = function t(e, n) {
                        var o = n.method
                          , i = e.iterator[o];
                        return i === r ? (n.delegate = null,
                        "throw" === o && e.iterator.return && (n.method = "return",
                        n.arg = r,
                        t(e, n),
                        "throw" === n.method) || "return" !== o && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                        g) : "throw" === (o = l(i, e.iterator, n.arg)).type ? (n.method = "throw",
                        n.arg = o.arg,
                        n.delegate = null,
                        g) : (i = o.arg) ? i.done ? (n[e.resultName] = i.value,
                        n.next = e.nextLoc,
                        "return" !== n.method && (n.method = "next",
                        n.arg = r),
                        n.delegate = null,
                        g) : i : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        g)
                    }(n, u),
                    n)) {
                        if (n === g)
                            continue;
                        return n
                    }
                    if ("next" === u.method)
                        u.sent = u._sent = u.arg;
                    else if ("throw" === u.method) {
                        if (h === f)
                            throw h = y,
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        "return" === u.method && u.abrupt("return", u.arg);
                    if (h = p,
                    "normal" === (n = l(a, c, u)).type) {
                        if (h = u.done ? y : s,
                        n.arg !== g)
                            return {
                                value: n.arg,
                                done: u.done
                            }
                    } else
                        "throw" === n.type && (h = y,
                        u.method = "throw",
                        u.arg = n.arg)
                }
            }
            )
        }),
        e
    }
    function l(t, r, e) {
        try {
            return {
                type: "normal",
                arg: t.call(r, e)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    t.wrap = h;
    var f = "suspendedStart"
      , s = "suspendedYield"
      , p = "executing"
      , y = "completed"
      , g = {};
    function v() {}
    function d() {}
    function m() {}
    var w, b, L = ((b = (b = (u(w = {}, i, (function() {
        return this
    }
    )),
    Object.getPrototypeOf)) && b(b(k([])))) && b !== e && n.call(b, i) && (w = b),
    m.prototype = v.prototype = Object.create(w));
    function x(t) {
        ["next", "throw", "return"].forEach((function(r) {
            u(t, r, (function(t) {
                return this._invoke(r, t)
            }
            ))
        }
        ))
    }
    function E(t, r) {
        var e;
        o(this, "_invoke", {
            value: function(o, i) {
                function a() {
                    return new r((function(e, a) {
                        !function e(o, i, a, c) {
                            var u;
                            if ("throw" !== (o = l(t[o], t, i)).type)
                                return (i = (u = o.arg).value) && "object" == typeof i && n.call(i, "__await") ? r.resolve(i.__await).then((function(t) {
                                    e("next", t, a, c)
                                }
                                ), (function(t) {
                                    e("throw", t, a, c)
                                }
                                )) : r.resolve(i).then((function(t) {
                                    u.value = t,
                                    a(u)
                                }
                                ), (function(t) {
                                    return e("throw", t, a, c)
                                }
                                ));
                            c(o.arg)
                        }(o, i, e, a)
                    }
                    ))
                }
                return e = e ? e.then(a, a) : a()
            }
        })
    }
    function j(t) {
        var r = {
            tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]),
        2 in t && (r.finallyLoc = t[2],
        r.afterLoc = t[3]),
        this.tryEntries.push(r)
    }
    function _(t) {
        var r = t.completion || {};
        r.type = "normal",
        delete r.arg,
        t.completion = r
    }
    function O(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        t.forEach(j, this),
        this.reset(!0)
    }
    function k(t) {
        if (t) {
            var e, o = t[i];
            if (o)
                return o.call(t);
            if ("function" == typeof t.next)
                return t;
            if (!isNaN(t.length))
                return e = -1,
                (o = function o() {
                    for (; ++e < t.length; )
                        if (n.call(t, e))
                            return o.value = t[e],
                            o.done = !1,
                            o;
                    return o.value = r,
                    o.done = !0,
                    o
                }
                ).next = o
        }
        return {
            next: G
        }
    }
    function G() {
        return {
            value: r,
            done: !0
        }
    }
    return o(L, "constructor", {
        value: d.prototype = m,
        configurable: !0
    }),
    o(m, "constructor", {
        value: d,
        configurable: !0
    }),
    d.displayName = u(m, c, "GeneratorFunction"),
    t.isGeneratorFunction = function(t) {
        return !!(t = "function" == typeof t && t.constructor) && (t === d || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
        u(t, c, "GeneratorFunction")),
        t.prototype = Object.create(L),
        t
    }
    ,
    t.awrap = function(t) {
        return {
            __await: t
        }
    }
    ,
    x(E.prototype),
    u(E.prototype, a, (function() {
        return this
    }
    )),
    t.AsyncIterator = E,
    t.async = function(r, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new E(h(r, e, n, o),i);
        return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
            return t.done ? t.value : a.next()
        }
        ))
    }
    ,
    x(L),
    u(L, c, "Generator"),
    u(L, i, (function() {
        return this
    }
    )),
    u(L, "toString", (function() {
        return "[object Generator]"
    }
    )),
    t.keys = function(t) {
        var r, e = Object(t), n = [];
        for (r in e)
            n.push(r);
        return n.reverse(),
        function t() {
            for (; n.length; ) {
                var r = n.pop();
                if (r in e)
                    return t.value = r,
                    t.done = !1,
                    t
            }
            return t.done = !0,
            t
        }
    }
    ,
    t.values = k,
    O.prototype = {
        constructor: O,
        reset: function(t) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = r,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = r,
            this.tryEntries.forEach(_),
            !t)
                for (var e in this)
                    "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type)
                throw t.arg;
            return this.rval
        },
        dispatchException: function(t) {
            if (this.done)
                throw t;
            var e = this;
            function o(n, o) {
                return c.type = "throw",
                c.arg = t,
                e.next = n,
                o && (e.method = "next",
                e.arg = r),
                !!o
            }
            for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                var a = this.tryEntries[i]
                  , c = a.completion;
                if ("root" === a.tryLoc)
                    return o("end");
                if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc")
                      , h = n.call(a, "finallyLoc");
                    if (u && h) {
                        if (this.prev < a.catchLoc)
                            return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc)
                            return o(a.finallyLoc)
                    } else if (u) {
                        if (this.prev < a.catchLoc)
                            return o(a.catchLoc, !0)
                    } else {
                        if (!h)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc)
                            return o(a.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(t, r) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            var a = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc ? null : i) ? i.completion : {};
            return a.type = t,
            a.arg = r,
            i ? (this.method = "next",
            this.next = i.finallyLoc,
            g) : this.complete(a)
        },
        complete: function(t, r) {
            if ("throw" === t.type)
                throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
            this.method = "return",
            this.next = "end") : "normal" === t.type && r && (this.next = r),
            g
        },
        finish: function(t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc),
                    _(e),
                    g
            }
        },
        catch: function(t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                var e, n, o = this.tryEntries[r];
                if (o.tryLoc === t)
                    return "throw" === (e = o.completion).type && (n = e.arg,
                    _(o)),
                    n
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, n) {
            return this.delegate = {
                iterator: k(t),
                resultName: e,
                nextLoc: n
            },
            "next" === this.method && (this.arg = r),
            g
        }
    },
    t
}("object" == typeof module ? module.exports : {});
try {
    regeneratorRuntime = runtime
} catch (t) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = runtime : Function("r", "regeneratorRuntime = r")(runtime)
}
