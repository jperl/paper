/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

!
    function(t, i) {
        if ("function" == typeof define && define.amd) define(i);
        else if ("object" == typeof window) {
            var e;
            window.addEventListener("load", function() {
                t.Famous = i(), e && t.Famous(e)
            }), t.Famous = function(t) {
                e = t
            }
        } else t.Famous = i()
    }(this, function() {
        var requirejs, require, define;
        return function(t) {
            function i(t, i) {
                return v.call(t, i)
            }
            function e(t, i) {
                var e, s, o, n, r, a, h, u, p, c, l = i && i.split("/"),
                    f = m.map,
                    d = f && f["*"] || {};
                if (t && "." === t.charAt(0)) if (i) {
                    for (l = l.slice(0, l.length - 1), t = l.concat(t.split("/")), u = 0; u < t.length; u += 1) if (c = t[u], "." === c) t.splice(u, 1), u -= 1;
                    else if (".." === c) {
                        if (1 === u && (".." === t[2] || ".." === t[0])) break;
                        u > 0 && (t.splice(u - 1, 2), u -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
                if ((l || d) && f) {
                    for (e = t.split("/"), u = e.length; u > 0; u -= 1) {
                        if (s = e.slice(0, u).join("/"), l) for (p = l.length; p > 0; p -= 1) if (o = f[l.slice(0, p).join("/")], o && (o = o[s])) {
                            n = o, r = u;
                            break
                        }
                        if (n) break;
                        !a && d && d[s] && (a = d[s], h = u)
                    }!n && a && (n = a, r = h), n && (e.splice(0, r, n), t = e.join("/"))
                }
                return t
            }
            function s(i, e) {
                return function() {
                    return p.apply(t, g.call(arguments, 0).concat([i, e]))
                }
            }
            function o(t) {
                return function(i) {
                    return e(i, t)
                }
            }
            function n(t) {
                return function(i) {
                    f[t] = i
                }
            }
            function r(e) {
                if (i(d, e)) {
                    var s = d[e];
                    delete d[e], y[e] = !0, u.apply(t, s)
                }
                if (!i(f, e) && !i(y, e)) throw new Error("No " + e);
                return f[e]
            }
            function a(t) {
                var i, e = t ? t.indexOf("!") : -1;
                return e > -1 && (i = t.substring(0, e), t = t.substring(e + 1, t.length)), [i, t]
            }
            function h(t) {
                return function() {
                    return m && m.config && m.config[t] || {}
                }
            }
            var u, p, c, l, f = {},
                d = {},
                m = {},
                y = {},
                v = Object.prototype.hasOwnProperty,
                g = [].slice;
            c = function(t, i) {
                var s, n = a(t),
                    h = n[0];
                return t = n[1], h && (h = e(h, i), s = r(h)), h ? t = s && s.normalize ? s.normalize(t, o(i)) : e(t, i) : (t = e(t, i), n = a(t), h = n[0], t = n[1], h && (s = r(h))), {
                    f: h ? h + "!" + t : t,
                    n: t,
                    pr: h,
                    p: s
                }
            }, l = {
                require: function(t) {
                    return s(t)
                },
                exports: function(t) {
                    var i = f[t];
                    return "undefined" != typeof i ? i : f[t] = {}
                },
                module: function(t) {
                    return {
                        id: t,
                        uri: "",
                        exports: f[t],
                        config: h(t)
                    }
                }
            }, u = function(e, o, a, h) {
                var u, p, m, v, g, S, w = [];
                if (h = h || e, "function" == typeof a) {
                    for (o = !o.length && a.length ? ["require", "exports", "module"] : o, g = 0; g < o.length; g += 1) if (v = c(o[g], h), p = v.f, "require" === p) w[g] = l.require(e);
                    else if ("exports" === p) w[g] = l.exports(e), S = !0;
                    else if ("module" === p) u = w[g] = l.module(e);
                    else if (i(f, p) || i(d, p) || i(y, p)) w[g] = r(p);
                    else {
                        if (!v.p) throw new Error(e + " missing " + p);
                        v.p.load(v.n, s(h, !0), n(p), {}), w[g] = f[p]
                    }
                    m = a.apply(f[e], w), e && (u && u.exports !== t && u.exports !== f[e] ? f[e] = u.exports : m === t && S || (f[e] = m))
                } else e && (f[e] = a)
            }, requirejs = require = p = function(i, e, s, o, n) {
                return "string" == typeof i ? l[i] ? l[i](e) : r(c(i, e).f) : (i.splice || (m = i, e.splice ? (i = e, e = s, s = null) : i = t), e = e ||
                    function() {}, "function" == typeof s && (s = o, o = n), o ? u(t, i, e, s) : setTimeout(function() {
                    u(t, i, e, s)
                }, 4), p)
            }, p.config = function(t) {
                return m = t, m.deps && p(m.deps, m.callback), p
            }, requirejs._defined = f, define = function(t, e, s) {
                e.splice || (s = e, e = []), i(f, t) || i(d, t) || (d[t] = [t, e, s])
            }, define.amd = {
                jQuery: !0
            }
        }(), define("lib/almond", function() {}), "undefined" == typeof document || "classList" in document.createElement("a") || !
            function(t) {
                var i = "classList",
                    e = "prototype",
                    s = (t.HTMLElement || t.Element)[e],
                    o = Object,
                    n = String[e].trim ||
                        function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        },
                    r = Array[e].indexOf ||
                        function(t) {
                            for (var i = 0, e = this.length; e > i; i++) if (i in this && this[i] === t) return i;
                            return -1
                        },
                    a = function(t, i) {
                        this.name = t, this.code = DOMException[t], this.message = i
                    },
                    h = function(t, i) {
                        if ("" === i) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(i)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return r.call(t, i)
                    },
                    u = function(t) {
                        for (var i = n.call(t.className), e = i ? i.split(/\s+/) : [], s = 0, o = e.length; o > s; s++) this.push(e[s]);
                        this._updateClassName = function() {
                            t.className = this.toString()
                        }
                    },
                    p = u[e] = [],
                    c = function() {
                        return new u(this)
                    };
                if (a[e] = Error[e], p.item = function(t) {
                    return this[t] || null
                }, p.contains = function(t) {
                    return t += "", -1 !== h(this, t)
                }, p.add = function(t) {
                    t += "", -1 === h(this, t) && (this.push(t), this._updateClassName())
                }, p.remove = function(t) {
                    t += "";
                    var i = h(this, t); - 1 !== i && (this.splice(i, 1), this._updateClassName())
                }, p.toggle = function(t) {
                    t += "", -1 === h(this, t) ? this.add(t) : this.remove(t)
                }, p.toString = function() {
                    return this.join(" ")
                }, o.defineProperty) {
                    var l = {
                        get: c,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        o.defineProperty(s, i, l)
                    } catch (f) {
                        -2146823252 === f.number && (l.enumerable = !1, o.defineProperty(s, i, l))
                    }
                } else o[e].__defineGetter__ && s.__defineGetter__(i, c)
            }(self), define("lib/classList", function() {}), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var i = Array.prototype.slice.call(arguments, 1),
                e = this,
                s = function() {},
                o = function() {
                    return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
                };
            return s.prototype = this.prototype, o.prototype = new s, o
        }), define("lib/functionPrototypeBind", function() {}), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(t) {
                return window.setTimeout(function() {
                    t(+new Date)
                }, 1e3 / 60)
            }), define("lib/requestAnimationFrame", function() {}), define("famous/Entity", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                var i = r.length;
                return n(i, t), i
            }
            function o(t) {
                return r[t]
            }
            function n(t, i) {
                r[t] = i
            }
            var r = [];
            e.exports = {
                register: s,
                get: o,
                set: n
            }
        }), define("famous/Matrix", ["require", "exports", "module"], function(t, i, e) {
            var s = {};
            s.precision = 1e-6, s.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], s.multiply4x4 = function o(t, i) {
                var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], e[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], e[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], e[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], e[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], arguments.length <= 2 ? e : o.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
            }, s.multiply = function n(t, i) {
                if (!t || !i) return t || i;
                var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + i[14], arguments.length <= 2 ? e : n.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
            }, s.move = function(t, i) {
                return i[2] || (i[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + i[0], t[13] + i[1], t[14] + i[2], 1]
            }, s.moveThen = function(t, i) {
                t[2] || (t[2] = 0);
                var e = t[0] * i[0] + t[1] * i[4] + t[2] * i[8],
                    o = t[0] * i[1] + t[1] * i[5] + t[2] * i[9],
                    n = t[0] * i[2] + t[1] * i[6] + t[2] * i[10];
                return s.move(i, [e, o, n])
            }, s.translate = function(t, i, e) {
                return void 0 === e && (e = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, e, 1]
            }, s.scale = function(t, i, e) {
                return void 0 === e && (e = 1), [t, 0, 0, 0, 0, i, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]
            }, s.rotateX = function(t) {
                var i = Math.cos(t),
                    e = Math.sin(t);
                return [1, 0, 0, 0, 0, i, e, 0, 0, -e, i, 0, 0, 0, 0, 1]
            }, s.rotateY = function(t) {
                var i = Math.cos(t),
                    e = Math.sin(t);
                return [i, 0, -e, 0, 0, 1, 0, 0, e, 0, i, 0, 0, 0, 0, 1]
            }, s.rotateZ = function(t) {
                var i = Math.cos(t),
                    e = Math.sin(t);
                return [i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }, s.rotate = function(t, i, e) {
                var s = Math.cos(t),
                    o = Math.sin(t),
                    n = Math.cos(i),
                    r = Math.sin(i),
                    a = Math.cos(e),
                    h = Math.sin(e),
                    u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                return u[0] = n * a, u[1] = s * h + o * r * a, u[2] = o * h - s * r * a, u[4] = -n * h, u[5] = s * a - o * r * h, u[6] = o * a + s * r * h, u[8] = r, u[9] = -o * n, u[10] = s * n, u
            }, s.rotateAxis = function(t, i) {
                var e = Math.sin(i),
                    s = Math.cos(i),
                    o = 1 - s,
                    n = t[0] * t[0] * o,
                    r = t[0] * t[1] * o,
                    a = t[0] * t[2] * o,
                    h = t[1] * t[1] * o,
                    u = t[1] * t[2] * o,
                    p = t[2] * t[2] * o,
                    c = t[0] * e,
                    l = t[1] * e,
                    f = t[2] * e,
                    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                return d[0] = n + s, d[1] = r + f, d[2] = a - l, d[4] = r - f, d[5] = h + s, d[6] = u + c, d[8] = a + l, d[9] = u - c, d[10] = p + s, d
            }, s.aboutOrigin = function(t, i) {
                var e = t[0] - (t[0] * i[0] + t[1] * i[4] + t[2] * i[8]),
                    o = t[1] - (t[0] * i[1] + t[1] * i[5] + t[2] * i[9]),
                    n = t[2] - (t[0] * i[2] + t[1] * i[6] + t[2] * i[10]);
                return s.move(i, [e, o, n])
            }, s.formatCSS = function(t) {
                for (var i = t.slice(0), e = 0; e < i.length; e++) i[e] < 1e-6 && i[e] > -1e-6 && (i[e] = 0);
                return "matrix3d(" + i.join() + ")"
            }, s.skew = function(t, i, e) {
                return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, Math.tan(i), Math.tan(t), 1, 0, 0, 0, 0, 1]
            }, s.getTranslate = function(t) {
                return [t[12], t[13], t[14]]
            }, s.inverse = function(t) {
                var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    e = t[5] * t[10] - t[6] * t[9],
                    s = t[4] * t[10] - t[6] * t[8],
                    o = t[4] * t[9] - t[5] * t[8],
                    n = t[1] * t[10] - t[2] * t[9],
                    r = t[0] * t[10] - t[2] * t[8],
                    a = t[0] * t[9] - t[1] * t[8],
                    h = t[1] * t[6] - t[2] * t[5],
                    u = t[0] * t[6] - t[2] * t[4],
                    p = t[0] * t[5] - t[1] * t[4],
                    c = t[0] * e - t[1] * s + t[2] * o,
                    l = 1 / c;
                return i[0] = l * e, i[1] = -l * n, i[2] = l * h, i[4] = -l * s, i[5] = l * r, i[6] = -l * u, i[8] = l * o, i[9] = -l * a, i[10] = l * p, i[12] = -t[12] * i[0] - t[13] * i[4] - t[14] * i[8], i[13] = -t[12] * i[1] - t[13] * i[5] - t[14] * i[9], i[14] = -t[12] * i[2] - t[13] * i[6] - t[14] * i[10], i
            }, s.interpret = function(t) {
                function i(t) {
                    return 2 == t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                }
                function e(t) {
                    return Math.sqrt(i(t))
                }
                function o(t) {
                    return 0 > t ? -1 : 1
                }
                var n = [t[0], t[1], t[2]],
                    r = o(n[0]),
                    a = e(n),
                    h = [n[0] + r * a, n[1], n[2]],
                    u = 2 / i(h),
                    p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                p[0] = 1 - u * h[0] * h[0], p[5] = 1 - u * h[1] * h[1], p[10] = 1 - u * h[2] * h[2], p[1] = -u * h[0] * h[1], p[2] = -u * h[0] * h[2], p[6] = -u * h[1] * h[2], p[4] = p[1], p[8] = p[2], p[9] = p[6];
                var c = s.multiply(t, p),
                    l = [c[5], c[6]],
                    f = o(l[0]),
                    d = e(l),
                    m = [l[0] + f * d, l[1]],
                    y = 2 / i(m),
                    v = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                v[5] = 1 - y * m[0] * m[0], v[10] = 1 - y * m[1] * m[1], v[6] = -y * m[0] * m[1], v[9] = v[6];
                var g = s.multiply(p, v),
                    S = s.multiply(t, g),
                    w = s.scale(S[0] < 0 ? -1 : 1, S[5] < 0 ? -1 : 1, S[10] < 0 ? -1 : 1);
                S = s.multiply(w, S), g = s.multiply(g, w);
                var x = {};
                return x.translate = s.getTranslate(t), x.rotate = [Math.atan2(-g[6], g[10]), Math.asin(g[2]), Math.atan2(-g[1], g[0])], x.rotate[0] || (x.rotate[0] = 0, x.rotate[2] = Math.atan2(g[4], g[5])), x.scale = [S[0], S[5], S[10]], x.skew = [Math.atan(S[9] / x.scale[2]), Math.atan(S[8] / x.scale[2]), Math.atan(S[4] / x.scale[0])], Math.abs(x.rotate[0]) + Math.abs(x.rotate[2]) > 1.5 * Math.PI && (x.rotate[1] = Math.PI - x.rotate[1], x.rotate[1] > Math.PI && (x.rotate[1] -= 2 * Math.PI), x.rotate[1] < -Math.PI && (x.rotate[1] += 2 * Math.PI), x.rotate[0] < 0 ? x.rotate[0] += Math.PI : x.rotate[0] -= Math.PI, x.rotate[2] < 0 ? x.rotate[2] += Math.PI : x.rotate[2] -= Math.PI), x
            }, s.build = function(t) {
                var i = s.scale(t.scale[0], t.scale[1], t.scale[2]),
                    e = s.skew(t.skew[0], t.skew[1], t.skew[2]),
                    o = s.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
                return s.move(s.multiply(i, e, o), t.translate)
            }, s.equals = function(t, i) {
                if (t === i) return !0;
                if (!t || !i) return !1;
                for (var e = 0; e < t.length; e++) if (t[e] != i[e]) return !1;
                return !0
            }, s.normalizeRotation = function(t) {
                var i = t.slice(0);
                for ((i[0] == Math.PI / 2 || i[0] == -Math.PI / 2) && (i[0] = -i[0], i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] > Math.PI / 2 && (i[0] = i[0] - Math.PI, i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] < -Math.PI / 2 && (i[0] = i[0] + Math.PI, i[1] = -Math.PI - i[1], i[2] -= Math.PI); i[1] < -Math.PI;) i[1] += 2 * Math.PI;
                for (; i[1] >= Math.PI;) i[1] -= 2 * Math.PI;
                for (; i[2] < -Math.PI;) i[2] += 2 * Math.PI;
                for (; i[2] >= Math.PI;) i[2] -= 2 * Math.PI;
                return i
            }, s.vecMultiply = function(t, i) {
                return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + i[12], t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + i[13], t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + i[14]]
            }, s.applyPerspective = function(t, i) {
                var e = i / (i - t[2]);
                return [e * t[0], e * t[1]]
            }, e.exports = s
        }), define("famous/SpecParser", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
            function s() {
                this.reset()
            }
            function o(t, i) {
                return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8], t[0] * i[1] + t[1] * i[5] + t[2] * i[9], t[0] * i[2] + t[1] * i[6] + t[2] * i[10]]
            }
            var n = t("./Matrix");
            s.parse = function(t, i) {
                var e = new s,
                    o = e.parse(t);
                return i ? (i(o), void 0) : o
            }, s.prototype.parse = function(t) {
                return this.reset(), this._parseSpec(t, n.identity, 1, [0, 0], void 0, n.identity), this.result
            }, s.prototype.reset = function() {
                this.result = {}
            }, s.prototype._parseSpec = function(t, i, e, s, r, a) {
                if (void 0 == t);
                else if ("number" == typeof t) {
                    var h = t,
                        u = r ? [s[0] * r[0], s[1] * r[1], 0] : [0, 0, 0];
                    i || (i = n.identity), this.result[h] = [n.move(i, o(u, a)), e, s, r]
                } else if (t instanceof Array) for (var p = 0; p < t.length; p++) this._parseSpec(t[p], i, e, s, r, a);
                else if (void 0 !== t.target) {
                    var c = t.target,
                        l = i,
                        f = e,
                        d = s,
                        m = r;
                    void 0 !== t.opacity && (f = e * t.opacity), t.transform && (l = n.multiply(t.transform, i)), t.origin && (d = t.origin), t.size && (m = t.size, void 0 === m[0] && (m[0] = r[0]), void 0 === m[1] && (m[1] = r[1]), r || (r = m), d || (d = [0, 0]), l || (l = n.identity), l = n.move(l, o([d[0] * r[0], d[1] * r[1], 0], a)), l = n.moveThen([-d[0] * m[0], -d[1] * m[1], 0], l), a = i ? i : n.identity, d = [0, 0]), this._parseSpec(c, l, f, d, m, a)
                }
            }, e.exports = s
        }), define("famous/RenderNode", ["require", "exports", "module", "./Entity", "./SpecParser", "./Matrix"], function(t, i, e) {
            function s(t) {
                this.modifiers = [], this.object = void 0, t && this.set(t), this._hasCached = !1, this._resultCache = {}, this._prevResults = {}
            }
            function o(t, i, e) {
                var s = r.parse(t);
                for (var a in s) {
                    var h = n.get(a),
                        u = s[a];
                    u.unshift(i);
                    var p = h.commit.apply(h, u);
                    p ? o(p, i, e) : e[a] = u
                }
            } {
                var n = t("./Entity"),
                    r = t("./SpecParser");
                t("./Matrix")
            }
            s.prototype.get = function() {
                return this.object
            }, s.prototype.set = function(t) {
                this.object = t
            }, s.prototype.link = function(t) {
                if (t instanceof Array) this.set(t);
                else {
                    var i = this.get();
                    i ? i instanceof Array ? this.modifiers.unshift(t) : (this.modifiers.unshift(i), this.set(t)) : this.set(t)
                }
                return this
            }, s.prototype.add = function(t) {
                this.get() instanceof Array || this.set([]);
                var i = new s(t);
                return this.get().push(i), i
            }, s.prototype.mod = function(t) {
                return this.modifiers.push(t), this
            }, s.prototype.commit = function(t, i, e, s, r) {
                var a = this.render(void 0, this._hasCached);
                if (a !== !0) {
                    for (var h in this._prevResults) if (!(h in this._resultCache)) {
                        var u = n.get(h);
                        u.cleanup && u.cleanup(t.getAllocator())
                    }
                    this._prevResults = this._resultCache, this._resultCache = {}, o({
                        transform: i,
                        size: r,
                        origin: s,
                        opacity: e,
                        target: a
                    }, t, this._resultCache), this._hasCached = !0
                }
            }, s.prototype.render = function(t) {
                var i = t,
                    e = this.get();
                if (e) if (e.render) i = e.render(t);
                else {
                    var s = e.length - 1;
                    for (i = new Array(s); s >= 0;) i[s] = e[s].render(), s--
                }
                for (var o = this.modifiers.length, s = 0; o > s; s++) i = this.modifiers[s].render(i);
                return i
            }, e.exports = s
        }), define("famous/EventHandler", ["require", "exports", "module"], function(t, i, e) {
            function s() {
                this.listeners = {}, this.downstream = [], this.downstreamFn = [], this.owner = this
            }
            function o(t, i) {
                for (var e = !1, s = 0; s < this.downstream.length; s++) e = this.downstream[s].emit(t, i) || e;
                for (var s = 0; s < this.downstreamFn.length; s++) e = this.downstreamFn[s](t, i) || e;
                return e
            }
            s.prototype.emit = function(t, i) {
                i || (i = {});
                var e = this.listeners[t],
                    s = !1;
                if (e) for (var n = 0; n < e.length; n++) e[n].call(this.owner, i) && (s = !0);
                return o.call(this, t, i) || s
            }, s.prototype.on = function(t, i) {
                this.listeners[t] || (this.listeners[t] = []);
                var e = this.listeners[t].indexOf(i);
                return 0 > e && this.listeners[t].push(i), this
            }, s.prototype.unbind = function(t, i) {
                var e = this.listeners[t].indexOf(i);
                e >= 0 && this.listeners[t].splice(e, 1)
            }, s.prototype.pipe = function(t) {
                var i = t instanceof Function ? this.downstreamFn : this.downstream,
                    e = i.indexOf(t);
                return 0 > e && i.push(t), t instanceof Function ? t("pipe") : t.emit("pipe"), t
            }, s.prototype.unpipe = function(t) {
                var i = t instanceof Function ? this.downstreamFn : this.downstream,
                    e = i.indexOf(t);
                return e >= 0 ? (i.splice(e, 1), t instanceof Function ? t("unpipe") : t.emit("unpipe"), t) : !1
            }, s.prototype.bindThis = function(t) {
                this.owner = t
            }, s.setInputHandler = function(t, i) {
                t.emit = i.emit.bind(i)
            }, s.setOutputHandler = function(t, i) {
                i instanceof s && i.bindThis(t), t.pipe = i.pipe.bind(i), t.unpipe = i.unpipe.bind(i), t.on = i.on.bind(i), t.unbind = i.unbind.bind(i)
            }, e.exports = s
        }), define("famous/ElementAllocator", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
            }
            s.prototype.migrate = function(t) {
                var i = this.container;
                if (t !== i) {
                    if (i instanceof DocumentFragment) t.appendChild(i);
                    else
                        for (; i.hasChildNodes();) t.appendChild(i.removeChild(i.firstChild));
                    this.container = t
                }
            }, s.prototype.allocate = function(t) {
                t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
                var i, e = this.detachedNodes[t];
                return e.length > 0 ? i = e.pop() : (i = document.createElement(t), this.container.appendChild(i)), this.nodeCount++, i
            }, s.prototype.deallocate = function(t) {
                var i = t.nodeName.toLowerCase(),
                    e = this.detachedNodes[i];
                e.push(t), this.nodeCount--
            }, s.prototype.getNodeCount = function() {
                return this.nodeCount
            }, e.exports = s
        }), define("famous/Utility", ["require", "exports", "module"], function(t, i, e) {
            var s = {};
            s.Curve = {
                linear: function(t) {
                    return t
                },
                easeIn: function(t) {
                    return t * t
                },
                easeOut: function(t) {
                    return t * (2 - t)
                },
                easeInOut: function(t) {
                    return .5 >= t ? 2 * t * t : -2 * t * t + 4 * t - 1
                },
                easeOutBounce: function(t) {
                    return t * (3 - 2 * t)
                },
                spring: function(t) {
                    return (1 - t) * Math.sin(6 * Math.PI * t) + t
                }
            }, s.Direction = {
                X: 0,
                Y: 1,
                Z: 2
            }, s.Origin = {
                tl: [0, 0],
                t: [.5, 0],
                tr: [1, 0],
                l: [0, .5],
                c: [.5, .5],
                r: [1, .5],
                bl: [0, 1],
                b: [.5, 1],
                br: [1, 1]
            }, s.after = function(t, i) {
                var e = t;
                return function() {
                    e--, 0 === e && i.apply(this, arguments)
                }
            }, s.loadURL = function(t, i) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    4 == this.readyState && i && i(this.responseText)
                }, e.open("GET", t), e.send()
            }, s.transformInFrontMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1], s.transformInFront = {
                render: function(t) {
                    return {
                        transform: s.transformInFrontMatrix,
                        target: t
                    }
                }
            }, s.transformBehindMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1], s.transformBehind = {
                render: function(t) {
                    return {
                        transform: s.transformBehindMatrix,
                        target: t
                    }
                }
            }, s.customizeComponent = function(t, i, e) {
                var s = function(s) {
                    t.call(this, i), s && this.setOptions(s), e && e.call(this)
                };
                return s.prototype = Object.create(t.prototype), s
            }, e.exports = s
        }), define("famous/MultipleTransition", ["require", "exports", "module", "./Utility"], function(t, i, e) {
            function s(t) {
                this.method = t, this._instances = [], this.state = []
            }
            var o = t("./Utility");
            s.SUPPORTS_MULTIPLE = !0, s.prototype.get = function() {
                for (var t = 0; t < this._instances.length; t++) this.state[t] = this._instances[t].get();
                return this.state
            }, s.prototype.set = function(t, i, e) {
                for (var s = o.after(t.length, e), n = 0; n < t.length; n++) this._instances[n] || (this._instances[n] = new this.method), this._instances[n].set(t[n], i, s)
            }, s.prototype.reset = function(t) {
                for (var i = 0; i < t.length; i++) this._instances[i] || (this._instances[i] = new this.method), this._instances[i].reset(t[i])
            }, e.exports = s
        }), define("famous/TweenTransition", ["require", "exports", "module", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active = !1, this._callback = void 0, this.state = 0
            }
            function o(t, i, e) {
                return (1 - e) * t + e * i
            }
            function n(t) {
                return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
            }
            function r(t, i) {
                var e = {
                    curve: i.curve
                };
                return i.duration && (e.duration = i.duration), i.speed && (e.speed = i.speed), t instanceof Object && (void 0 !== t.duration && (e.duration = t.duration), t.curve && (e.curve = t.curve), t.speed && (e.speed = t.speed)), "string" == typeof e.curve && (e.curve = s.getCurve(e.curve)), e
            }
            var a = t("famous/Utility");
            s.SUPPORTS_MULTIPLE = !0, s.DEFAULT_OPTIONS = {
                curve: a.Curve.linear,
                duration: 500,
                speed: 0
            };
            var h = {};
            s.registerCurve = function(t, i) {
                return h[t] ? !1 : (h[t] = i, !0)
            }, s.unregisterCurve = function(t) {
                return h[t] ? (delete h[t], !0) : !1
            }, s.getCurve = function(t) {
                return h[t]
            }, s.getCurves = function() {
                return h
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
            }, s.prototype.set = function(t, i, e) {
                if (!i) return this.reset(t), e && e(), void 0;
                if (this._startValue = n(this.get()), i = r(i, this.options), i.speed) {
                    var s = this._startValue;
                    if (s instanceof Object) {
                        var o = 0;
                        for (var a in s) o += (t[a] - s[a]) * (t[a] - s[a]);
                        i.duration = Math.sqrt(o) / i.speed
                    } else i.duration = Math.abs(t - s) / i.speed
                }
                this._startTime = Date.now(), this._endValue = n(t), this._duration = i.duration, this._curve = i.curve, this._active = !0, this._callback = e
            }, s.prototype.reset = function(t) {
                if (this._callback) {
                    var i = this._callback;
                    this._callback = void 0, i()
                }
                this.state = n(t), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._endValue = this.state, this._active = !1
            }, s.prototype.get = function(t) {
                return this.update(t), this.state
            }, s.prototype.update = function(t) {
                if (this._active) {
                    if (t || (t = Date.now()), !(this._updateTime >= t)) {
                        this._updateTime = t;
                        var i = t - this._startTime;
                        if (i >= this._duration) this.state = this._endValue, this._active = !1;
                        else if (0 > i) this.state = this._startValue;
                        else {
                            var e = i / this._duration;
                            if (this.state instanceof Object) for (var s in this.state) this.state[s] = o(this._startValue[s], this._endValue[s], this._curve(e));
                            else this.state = o(this._startValue, this._endValue, this._curve(e))
                        }
                    }
                } else if (this._callback) {
                    var n = this._callback;
                    this._callback = void 0, n()
                }
            }, s.prototype.isActive = function() {
                return this._active
            }, s.prototype.halt = function() {
                this.reset(this.get())
            }, s.registerCurve("linear", a.Curve.linear), s.registerCurve("easeIn", a.Curve.easeIn), s.registerCurve("easeOut", a.Curve.easeOut), s.registerCurve("easeInOut", a.Curve.easeInOut), s.registerCurve("easeOutBounce", a.Curve.easeOutBounce), s.registerCurve("spring", a.Curve.spring), e.exports = s
        }), define("famous/Transitionable", ["require", "exports", "module", "./Utility", "./MultipleTransition", "./TweenTransition"], function(t, i, e) {
            function s(t) {
                this.currentAction = null, this.actionQueue = [], this.callbackQueue = [], this.state = 0, this._callback = void 0, this._engineInstance = null, this._currentMethod = null, this.set(t)
            }
            function o() {
                if (this._callback) {
                    var t = this._callback;
                    this._callback = void 0, t()
                }
                if (this.actionQueue.length <= 0) return this.set(this._engineInstance), void 0;
                this.currentAction = this.actionQueue.shift(), this._callback = this.callbackQueue.shift();
                var i = null,
                    e = this.currentAction[0],
                    s = this.currentAction[1];
                s instanceof Object && s.method ? (i = s.method, "string" == typeof i && (i = a[i])) : i = r, this._currentMethod !== i && (this._engineInstance = !(e instanceof Object) || i.SUPPORTS_MULTIPLE === !0 || e.length <= i.SUPPORTS_MULTIPLE ? new i : new n(i), this._currentMethod = i), this._engineInstance.reset(this.state), this._engineInstance.set(e, s, o.bind(this))
            }
            var n = (t("./Utility"), t("./MultipleTransition")),
                r = t("./TweenTransition"),
                a = {};
            s.registerMethod = function(t, i) {
                return t in a ? !1 : (a[t] = i, !0)
            }, s.unregisterMethod = function(t) {
                return t in a ? (delete a[t], !0) : !1
            }, s.prototype.set = function(t, i, e) {
                if (!i) return this.reset(t), e && e(), void 0;
                var s = [t, i];
                this.actionQueue.push(s), this.callbackQueue.push(e), this.currentAction || o.call(this)
            }, s.prototype.reset = function(t) {
                this._currentMethod = null, this._engineInstance = null, this.state = t, this.currentAction = null, this.actionQueue = [], this.callbackQueue = []
            }, s.prototype.delay = function(t, i) {
                this.set(this._engineInstance, {
                    duration: t,
                    curve: function() {
                        return 0
                    }
                }, i)
            }, s.prototype.get = function(t) {
                return this._engineInstance && (this.state = this._engineInstance.get(t)), this.state
            }, s.prototype.isActive = function() {
                return !!this.currentAction
            }, s.prototype.halt = function() {
                this.set(this.get())
            }, e.exports = s
        }), define("famous/Context", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./SpecParser", "./ElementAllocator", "./Matrix", "./Transitionable"], function(t, i, e) {
            function s(t) {
                this.container = t, this.allocator = new a(t), this.srcNode = new n, this.eventHandler = new r, this._size = [window.innerWidth, window.innerHeight], this.perspectiveState = new u(0), this._perspective = void 0, this.eventHandler.on("resize", function() {
                    this._size = o(this.container)
                }.bind(this))
            }
            function o(t) {
                return [t.clientWidth, t.clientHeight]
            }
            var n = t("./RenderNode"),
                r = t("./EventHandler"),
                a = (t("./SpecParser"), t("./ElementAllocator")),
                h = t("./Matrix"),
                u = t("./Transitionable");
            s.prototype.getAllocator = function() {
                return this.allocator
            }, s.prototype.link = function(t) {
                return this.srcNode.link(t)
            }, s.prototype.add = function(t) {
                return this.srcNode.add(t)
            }, s.prototype.mod = function(t) {
                return this.srcNode.mod(t)
            }, s.prototype.migrate = function(t) {
                t !== this.container && (this.container = t, this.allocator.migrate(t))
            }, s.prototype.getSize = function() {
                return this._size
            }, s.prototype.setSize = function(t) {
                t || (t = o(this.container)), this._size = t
            }, s.prototype.update = function() {
                var t = this.perspectiveState.get();
                t !== this._perspective && (this.container.style.perspective = t ? t.toFixed() + "px" : "", this.container.style.webkitPerspective = t ? t.toFixed() : "", this._perspective = t), this.srcNode && this.srcNode.commit(this, h.identity, 1, [0, 0], this._size)
            }, s.prototype.getOutputTransform = function(t) {
                var i = this.parsedCache;
                if (i) {
                    var e = t.id,
                        s = {
                            transform: i.transforms[e],
                            opacity: i.opacities[e]
                        };
                    if (i.origins[e] && (s.origin = i.origins[e]), i.groups[e]) {
                        var o = i.groups[e];
                        s.transform = h.multiply(s.transform, i.groupTransforms[o]), i.groupOpacities[o] && (s.opacity *= i.groupOpacities[o])
                    }
                    return s
                }
            }, s.prototype.getPerspective = function() {
                return this.perspectiveState.get()
            }, s.prototype.setPerspective = function(t, i, e) {
                return this.perspectiveState.set(t, i, e)
            }, s.prototype.emit = function(t, i) {
                return this.eventHandler.emit(t, i)
            }, s.prototype.on = function(t, i) {
                return this.eventHandler.on(t, i)
            }, s.prototype.unbind = function(t, i) {
                return this.eventHandler.unbind(t, i)
            }, s.prototype.pipe = function(t) {
                return this.eventHandler.pipe(t)
            }, s.prototype.unpipe = function(t) {
                return this.eventHandler.unpipe(t)
            }, e.exports = s
        }), define("famous/Engine", ["require", "exports", "module", "./Context", "./EventHandler"], function(t, i, e) {
            function s() {
                var t = Date.now();
                if (O && O > t - b) return requestAnimationFrame(s), void 0;
                T = t - b, b = t, _.emit("prerender");
                for (var i = 0; i < w.length; i++) w[i].call(this);
                for (w = []; x.length && Date.now() - t < P;) x.shift().call(this);
                for (var i = 0; i < S.length; i++) S[i].update();
                _.emit("postrender"), requestAnimationFrame(s)
            }
            function o(t) {
                if (document.activeElement && "INPUT" == document.activeElement.nodeName) return document.activeElement.addEventListener("blur", function e() {
                    this.removeEventListener("blur", e), o(t)
                }), void 0;
                window.scrollTo(0, 0);
                for (var i = 0; i < S.length; i++) S[i].emit("resize");
                _.emit("resize")
            }
            function n(t) {
                return _.pipe(t)
            }
            function r(t) {
                return _.unpipe(t)
            }
            function a(t, i) {
                _.on(t, i)
            }
            function h(t, i) {
                _.emit(t, i)
            }
            function u(t, i) {
                _.unbind(t, i)
            }
            function p() {
                return 1e3 / T
            }
            function c(t) {
                O = Math.floor(1e3 / t)
            }
            function l(t) {
                void 0 === t ? (t = document.createElement("div"), t.classList.add("container"), document.body.appendChild(t)) : t instanceof Element || (t = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
                var i = new v(t);
                return S.push(i), i
            }
            function f(t) {
                w.push(t)
            }
            function d(t) {
                return C[t]
            }
            function m(t) {
                var i = C.length;
                return C[i] = t, i
            }
            function y(t) {
                x.push(t)
            }
            var v = t("./Context"),
                g = t("./EventHandler"),
                S = [],
                w = [],
                x = [],
                b = Date.now(),
                T = void 0,
                O = void 0,
                _ = new g,
                P = 10,
                C = [];
            requestAnimationFrame(s), window.addEventListener("resize", o, !1), o(), window.addEventListener("touchmove", function(t) {
                t.preventDefault()
            }, !1);
            for (var M = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mousewheel", "wheel", "resize"], z = 0; z < M.length; z++) {
                var E = M[z];
                document.body.addEventListener(E, function(t) {
                    _.emit(t.type, t, !1)
                }, !1)
            }
            e.exports = {
                on: a,
                defer: y,
                emit: h,
                unbind: u,
                pipe: n,
                unpipe: r,
                createContext: l,
                getFPS: p,
                setFPSCap: c,
                nextTick: f,
                getEntity: d,
                registerEntity: m
            }
        }), define("famous/Surface", ["require", "exports", "module", "./Entity", "./EventHandler", "./Matrix"], function(t, i, e) {
            function s(t) {
                this.options = {}, this.properties = {}, this.content = "", this.classList = [], this.size = void 0, this._classesDirty = !0, this._stylesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._dirtyClasses = [], this._matrix = void 0, this._opacity = 1, this._origin = void 0, this._size = void 0, this.eventForwarder = function(t) {
                    this.emit(t.type, t)
                }.bind(this), this.eventHandler = new f, this.eventHandler.bindThis(this), this.id = l.register(this), t && this.setOptions(t), this._currTarget = void 0
            }
            function o(t) {
                for (var i = this.surfaceEvents, e = 0; e < i.length; e++) t.addEventListener(i[e], this.eventForwarder)
            }
            function r(t) {
                for (var i = this.surfaceEvents, e = 0; e < i.length; e++) t.removeEventListener(i[e], this.eventForwarder)
            }
            function a(t) {
                for (var i = 0; i < this._dirtyClasses.length; i++) t.classList.remove(this._dirtyClasses[i]);
                this._dirtyClasses = []
            }
            function h(t) {
                for (var i in this.properties) t.style[i] = this.properties[i]
            }
            function u(t) {
                for (var i in this.properties) t.style[i] = ""
            }
            function p(t, i) {
                return t || i ? t && i ? t[0] == i[0] && t[1] == i[1] : !1 : !0
            }
            function c(t) {
                return (100 * t[0]).toFixed(6) + "% " + (100 * t[1]).toFixed(6) + "%"
            }
            var l = t("./Entity"),
                f = t("./EventHandler"),
                d = t("./Matrix"),
                m = void 0 !== document.body.style.webkitTransform;
            s.prototype.surfaceEvents = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "mousewheel", "wheel"], s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.on = function(t, i) {
                this.eventHandler.on(t, i)
            }, s.prototype.unbind = function(t, i) {
                this.eventHandler.unbind(t, i)
            }, s.prototype.emit = function(t, i) {
                i && !i.origin && (i.origin = this);
                var e = this.eventHandler.emit(t, i);
                return e && i.stopPropagation && i.stopPropagation(), e
            }, s.prototype.pipe = function(t) {
                return this.eventHandler.pipe(t)
            }, s.prototype.pipeEvents = function() {
                return console.warn("pipeEvents is deprecated; use pipe instead"), this.pipe.apply(this, arguments)
            }, s.prototype.unpipe = function(t) {
                return this.eventHandler.unpipe(t)
            }, s.prototype.render = function() {
                return this.id
            }, s.prototype.setProperties = function(t) {
                for (n in t) this.properties[n] = t[n];
                this._stylesDirty = !0
            }, s.prototype.getProperties = function() {
                return this.properties
            }, s.prototype.addClass = function(t) {
                this.classList.indexOf(t) < 0 && (this.classList.push(t), this._classesDirty = !0)
            }, s.prototype.removeClass = function(t) {
                var i = this.classList.indexOf(t);
                i >= 0 && (this._dirtyClasses.push(this.classList.splice(i, 1)[0]), this._classesDirty = !0)
            }, s.prototype.setClasses = function(t) {
                for (var i = [], e = 0; e < this.classList.length; e++) t.indexOf(this.classList[e]) < 0 && i.push(this.classList[e]);
                for (var e = 0; e < i.length; e++) this.removeClass(i[e]);
                for (var e = 0; e < t.length; e++) this.addClass(t[e])
            }, s.prototype.getClassList = function() {
                return this.classList
            }, s.prototype.setContent = function(t) {
                this.content != t && (this.content = t, this._contentDirty = !0)
            }, s.prototype.getContent = function() {
                return this.content
            }, s.prototype.setOptions = function(t) {
                t.size && this.setSize(t.size), t.classes && this.setClasses(t.classes), t.properties && this.setProperties(t.properties), t.content && this.setContent(t.content)
            };
            var y, v, g;
            y = m ?
                function(t, i) {
                    t.style.webkitTransform = d.formatCSS(i)
                } : function(t, i) {
                t.style.transform = d.formatCSS(i)
            }, v = m ?
                function(t, i) {
                    t.style.webkitTransformOrigin = c(i)
                } : function(t, i) {
                t.style.transformOrigin = c(i)
            }, g = m ?
                function(t) {
                    t.style.webkitTransform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
                } : function(t) {
                t.style.transform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
            }, s.prototype.setup = function(t) {
                var i = t.allocate(this.elementType);
                if (this.elementClass) if (this.elementClass instanceof Array) for (var e = 0; e < this.elementClass.length; e++) i.classList.add(this.elementClass[e]);
                else i.classList.add(this.elementClass);
                o.call(this, i), v(i, [0, 0]), this._currTarget = i, this._stylesDirty = !0, this._classesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._matrix = void 0, this._opacity = void 0, this._origin = void 0, this._size = void 0
            }, s.prototype.commit = function(t, i, e, s, o) {
                this._currTarget || this.setup(t.getAllocator());
                var n = this._currTarget;
                if (this.size) {
                    var r = o;
                    o = this.size.slice(0), void 0 === o[0] && r[0] && (o[0] = r[0]), void 0 === o[1] && r[1] && (o[1] = r[1])
                }
                if (p(this._size, o) || (this._size = o.slice(0), this._sizeDirty = !0), !i && this._matrix) return this._matrix = void 0, this._opacity = 0, g(n), void 0;
                if (this._opacity !== e && (this._opacity = e, n.style.opacity = Math.min(e, .999999)), !p(this._origin, s) || !d.equals(this._matrix, i)) {
                    i || (i = d.identity), s || (s = [0, 0]), this._origin = s.slice(0), this._matrix = i;
                    var u = i;
                    s && (u = d.moveThen([-this._size[0] * s[0], -this._size[1] * s[1]], i)), y(n, u)
                }
                if (this._classesDirty || this._stylesDirty || this._sizeDirty || this._contentDirty) {
                    if (this._classesDirty) {
                        a.call(this, n);
                        for (var c = this.getClassList(), l = 0; l < c.length; l++) n.classList.add(c[l]);
                        this._classesDirty = !1
                    }
                    this._stylesDirty && (h.call(this, n), this._stylesDirty = !1), this._sizeDirty && (this._size && (n.style.width = this._size[0] !== !0 ? this._size[0] + "px" : "", n.style.height = this._size[1] !== !0 ? this._size[1] + "px" : ""), this._sizeDirty = !1), this._contentDirty && (this.deploy(n), this._contentDirty = !1)
                }
            }, s.prototype.cleanup = function(t) {
                var i = this._currTarget;
                this.recall(i), i.style.width = "", i.style.height = "", this._size = void 0, u.call(this, i);
                var e = this.getClassList();
                a.call(this, i);
                for (var s = 0; s < e.length; s++) i.classList.remove(e[s]);
                r.call(this, i), this._currTarget = void 0, t.deallocate(i), g(i)
            }, s.prototype.deploy = function(t) {
                var i = this.getContent();
                "string" == typeof i ? t.innerHTML = i : t.appendChild(i)
            }, s.prototype.recall = function(t) {
                for (var i = document.createDocumentFragment(); t.hasChildNodes();) i.appendChild(t.firstChild);
                this.setContent(i)
            }, s.prototype.getSize = function(t) {
                return t ? this._size : this.size || this._size
            }, s.prototype.setSize = function(t) {
                this.size = t ? t.slice(0, 2) : void 0, this._sizeDirty = !0
            }, e.exports = s
        }), define("famous/ContainerSurface", ["require", "exports", "module", "./Surface", "./Context"], function(t, i, e) {
            function s(t) {
                o.call(this, t), this._container = document.createElement("div"), this._container.classList.add("group"), this._container.style.width = "100%", this._container.style.height = "100%", this._container.style.position = "relative", this._shouldRecalculateSize = !1, this.context = new n(this._container), this.setContent(this._container)
            }
            var o = t("./Surface"),
                n = t("./Context");
            s.prototype = Object.create(o.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.link = function() {
                return this.context.link.apply(this.context, arguments)
            }, s.prototype.add = function() {
                return this.context.add.apply(this.context, arguments)
            }, s.prototype.mod = function() {
                return this.context.mod.apply(this.context, arguments)
            }, s.prototype.render = function() {
                return this._sizeDirty && (this._shouldRecalculateSize = !0), o.prototype.render.call(this)
            }, s.prototype.commit = function() {
                var t = o.prototype.commit.apply(this, arguments);
                return this._shouldRecalculateSize && (this.context.setSize(), this._shouldRecalculateSize = !1), this.context.update(), t
            }, e.exports = s
        }), define("famous/Modifier", ["require", "exports", "module", "./Matrix", "./Transitionable", "./Utility"], function(t, i, e) {
            function s(t) {
                var i = o.identity,
                    e = 1,
                    s = void 0,
                    r = void 0;
                arguments.length > 1 || arguments[0] instanceof Array ? (void 0 !== arguments[0] && (i = arguments[0]), void 0 !== arguments[1] && (e = arguments[1]), s = arguments[2], r = arguments[3]) : t && (t.transform && (i = t.transform), void 0 !== t.opacity && (e = t.opacity), t.origin && (s = t.origin), t.size && (r = t.size)), this.transformTranslateState = new n([0, 0, 0]), this.transformRotateState = new n([0, 0, 0]), this.transformSkewState = new n([0, 0, 0]), this.transformScaleState = new n([1, 1, 1]), this.opacityState = new n(e), this.originState = new n([0, 0]), this.sizeState = new n([0, 0]), this._originEnabled = !1, this._sizeEnabled = !1, this.setTransform(i), this.setOpacity(e), this.setOrigin(s), this.setSize(r)
            }
            var o = t("./Matrix"),
                n = t("./Transitionable"),
                r = t("./Utility");
            s.prototype.getTransform = function() {
                return this.isActive() ? o.build({
                    translate: this.transformTranslateState.get(),
                    rotate: this.transformRotateState.get(),
                    skew: this.transformSkewState.get(),
                    scale: this.transformScaleState.get()
                }) : this.getFinalTransform()
            }, s.prototype.getFinalTransform = function() {
                return this._finalTransform
            }, s.prototype.setTransform = function(t, i, e) {
                var s = e ? r.after(4, e) : void 0;
                if (i) {
                    if (this._transformDirty) {
                        var n = o.interpret(this.getFinalTransform());
                        this.transformTranslateState.set(n.translate), this.transformRotateState.set(n.rotate), this.transformSkewState.set(n.skew), this.transformScaleState.set(n.scale), this._transformDirty = !1
                    }
                    var a = o.interpret(t);
                    this.transformTranslateState.set(a.translate, i, s), this.transformRotateState.set(a.rotate, i, s), this.transformSkewState.set(a.skew, i, s), this.transformScaleState.set(a.scale, i, s)
                } else this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this._transformDirty = !0;
                this._finalTransform = t
            }, s.prototype.getOpacity = function() {
                return this.opacityState.get()
            }, s.prototype.setOpacity = function(t, i, e) {
                this.opacityState.set(t, i, e)
            }, s.prototype.getOrigin = function() {
                return this._originEnabled ? this.originState.get() : void 0
            }, s.prototype.setOrigin = function(t, i, e) {
                this._originEnabled = !! t, t || (t = [0, 0]), t instanceof Array || (t = r.origins[t]), this.originState.set(t, i, e)
            }, s.prototype.getSize = function() {
                return this._sizeEnabled ? this.sizeState.get() : void 0
            }, s.prototype.setSize = function(t, i, e) {
                this._sizeEnabled = !! t, t || (t = [0, 0]), this.sizeState.set(t, i, e)
            }, s.prototype.setDefaultTransition = function(t) {
                this.transformTranslateState.setDefault(t), this.transformRotateState.setDefault(t), this.transformSkewState.setDefault(t), this.transformScaleState.setDefault(t), this.opacityState.setDefault(t), this.originState.setDefault(t), this.sizeState.setDefault(t)
            }, s.prototype.halt = function() {
                this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this.opacityState.halt(), this.originState.halt(), this.sizeState.halt()
            }, s.prototype.isActive = function() {
                return this.transformTranslateState.isActive() || this.transformRotateState.isActive() || this.transformSkewState.isActive() || this.transformScaleState.isActive()
            }, s.prototype.render = function(t) {
                return {
                    transform: this.getTransform(),
                    opacity: this.getOpacity(),
                    origin: this.getOrigin(),
                    size: this.getSize(),
                    target: t
                }
            }, e.exports = s
        }), define("famous/OptionsManager", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
            function s(t) {
                this._value = t, this.eventOutput = null
            }
            function o() {
                this.eventOutput = new n, this.eventOutput.bindThis(this), n.setOutputHandler(this, this.eventOutput)
            }
            var n = t("./EventHandler");
            s.prototype.patch = function() {
                for (var t = this._value, i = 0; i < arguments.length; i++) {
                    var e = arguments[i];
                    for (var s in e)!(s in t && "object" == typeof t[s]) || t[s] instanceof Array || "object" != typeof e[s] || e[s] instanceof Array ? this.set(s, e[s]) : (t.hasOwnProperty(s) || (t[s] = Object.create(t[s])), this.key(s).patch(e[s]), this.eventOutput && this.eventOutput.emit("change", {
                        id: s,
                        value: this.key(s).value()
                    }))
                }
                return this
            }, s.prototype.setOptions = s.prototype.patch, s.prototype.key = function(t) {
                var i = new s(this._value[t]);
                return (!(i._value instanceof Object) || i._value instanceof Array) && (i._value = {}), i
            }, s.prototype.get = function(t) {
                return this._value[t]
            }, s.prototype.getOptions = s.prototype.get, s.prototype.set = function(t, i) {
                var e = this.get(t);
                return this._value[t] = i, this.eventOutput && i !== e && this.eventOutput.emit("change", {
                    id: t,
                    value: i
                }), this
            }, s.prototype.value = function() {
                return this._value
            }, s.prototype.on = function() {
                return o.call(this), this.on.apply(this, arguments)
            }, s.prototype.unbind = function() {
                return o.call(this), this.unbind.apply(this, arguments)
            }, s.prototype.pipe = function() {
                return o.call(this), this.pipe.apply(this, arguments)
            }, s.prototype.unpipe = function() {
                return o.call(this), this.unpipe.apply(this, arguments)
            }, e.exports = s
        }), define("famous/View", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./OptionsManager"], function(t, i, e) {
            function s(t) {
                this.node = new o, this.eventInput = new n, this.eventOutput = new n, n.setInputHandler(this, this.eventInput), n.setOutputHandler(this, this.eventOutput), this.options = Object.create(this.constructor.DEFAULT_OPTIONS || s.DEFAULT_OPTIONS), this.optionsManager = new r(this.options), t && this.setOptions(t)
            }
            var o = t("./RenderNode"),
                n = t("./EventHandler"),
                r = t("./OptionsManager");
            s.DEFAULT_OPTIONS = null, s.prototype.getOptions = function() {
                return this.optionsManager.value()
            }, s.prototype.setOptions = function(t) {
                this.optionsManager.patch(t)
            }, s.prototype._add = function() {
                return this.node.add.apply(this.node, arguments)
            }, s.prototype._link = function() {
                return this.node.link.apply(this.node, arguments)
            }, s.prototype.render = function() {
                return this.node.render.apply(this.node, arguments)
            }, s.prototype.getSize = function() {
                var t = this.node.get();
                return t.getSize ? t.getSize.apply(t, arguments) : this.options.size
            }, e.exports = s
        }), define("famous-utils/Time", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
            function s(t, i) {
                var e = Date.now(),
                    s = function() {
                        var s = Date.now();
                        s - e >= i && (t(), e = Date.now())
                    };
                return h.on("prerender", s), s
            }
            function o(t) {
                h.unbind("prerender", t)
            }
            function n(t, i, e) {
                var s = Date.now(),
                    o = function() {
                        var n = Date.now(),
                            r = (n - s) / t;
                        return n - s >= t ? (i(1), h.unbind("prerender", o), e && e(), void 0) : (i(r), void 0)
                    };
                h.on("prerender", o)
            }
            function r(t, i) {
                var e = Date.now(),
                    s = function() {
                        var o = Date.now();
                        return o - e >= i ? (h.unbind("prerender", s), t(), void 0) : void 0
                    };
                return h.on("prerender", s), s
            }
            function a(t) {
                h.unbind("prerender", t)
            }
            var h = t("famous/Engine");
            e.exports = {
                setInterval: s,
                removeInterval: o,
                executeOver: n,
                setTimeout: r,
                removeTimeout: a
            }
        }), define("famous-physics/math/Vector", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e) {
                return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
            }
            var o = new s(0, 0, 0);
            s.prototype.add = function(t, i) {
                return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
            }, s.prototype.sub = function(t, i) {
                return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
            }, s.prototype.mult = function(t, i) {
                return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
            }, s.prototype.div = function(t, i) {
                return this.mult(1 / t, i)
            }, s.prototype.cross = function(t, i) {
                return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
            }, s.prototype.equals = function(t) {
                return t.x == this.x && t.y == this.y && t.z == this.z
            }, s.prototype.rotateX = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(e, -n * a + s * r, n * r - s * a)
            }, s.prototype.rotateY = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(-n * a + e * r, s, n * r + e * a)
            }, s.prototype.rotateZ = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(-s * a + e * r, s * r + e * a, n)
            }, s.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }, s.prototype.normSquared = function() {
                return this.dot(this)
            }, s.prototype.norm = function() {
                return Math.sqrt(this.normSquared())
            }, s.prototype.normalize = function(t, i) {
                t = void 0 !== t ? t : 1, i = i || o;
                var e = 1e-7,
                    s = this.norm();
                return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
            }, s.prototype.clone = function() {
                return new s(this)
            }, s.prototype.isZero = function() {
                return !(this.x || this.y || this.z)
            }, s.prototype.set = function(t) {
                return t instanceof Array ? this.setFromArray(t) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
            }, s.prototype.setFromArray = function(t) {
                this.x = t[0], this.y = t[1], this.z = t[2] || 0
            }, s.prototype.put = function(t) {
                t.set(o)
            }, s.prototype.setXYZ = function(t, i, e) {
                return o.clear(), this.x = t, this.y = i, this.z = e, this
            }, s.prototype.clear = function() {
                this.x = 0, this.y = 0, this.z = 0
            }, s.prototype.cap = function(t, i) {
                if (1 / 0 === t) return this;
                i = i || o;
                var e = this.norm();
                return e > t ? this.normalize(t, i) : this
            }, s.prototype.project = function(t, i) {
                return i = i || o, t.mult(this.dot(t), i)
            }, s.prototype.reflectAcross = function(t, i) {
                return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
            }, s.prototype.toArray = function() {
                return [this.x, this.y, this.z]
            }, s.prototype.get = function() {
                return this.toArray()
            }, e.exports = s
        }), define("famous-physics/bodies/Particle", ["require", "exports", "module", "famous/RenderNode", "famous-physics/math/Vector", "famous/Matrix"], function(t, i, e) {
            function s(t) {
                t = t || {}, this.p = t.p ? new n(t.p) : new n(0, 0, 0), this.v = t.v ? new n(t.v) : new n(0, 0, 0), this.f = t.f ? new n(t.f) : new n(0, 0, 0), this.m = void 0 !== t.m ? t.m : 1, this.restitution = void 0 !== t.restitution ? t.restitution : .5, this.dissipation = void 0 !== t.dissipation ? t.dissipation : 0, this.axis = void 0 !== t.axis ? t.axis : void 0, this.setImmunity(t.immunity || s.IMMUNITIES.NONE), this.mInv = 1 / this.m, this.size = [0, 0, 0], this.node = void 0, this.spec = {
                    size: [0, 0],
                    target: {
                        origin: [.5, .5],
                        transform: void 0,
                        target: void 0
                    }
                }
            }
            var o = t("famous/RenderNode"),
                n = t("famous-physics/math/Vector"),
                r = t("famous/Matrix");
            s.AXIS = {
                X: 1,
                Y: 2,
                Z: 4
            }, s.IMMUNITIES = {
                NONE: 0,
                POSITION: 1,
                VELOCITY: 2,
                ROTATION: 4,
                AGENTS: 8,
                UPDATE: 16
            };
            for (var a in s.IMMUNITIES) s.IMMUNITIES.ALL |= s.IMMUNITIES[a];
            s.prototype.setPos = function(t) {
                this.p.set(t)
            }, s.prototype.getPos = function() {
                return this.p.get()
            }, s.prototype.setVel = function(t) {
                this.hasImmunity(s.IMMUNITIES.VELOCITY) || this.v.set(t)
            }, s.prototype.getVel = function() {
                return this.v.get()
            }, s.prototype.setMass = function(t) {
                this.m = t, this.mInv = 1 / t
            }, s.prototype.getMass = function() {
                return this.m
            }, s.prototype.addImmunity = function(t) {
                "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity |= t
            }, s.prototype.removeImmunity = function(t) {
                "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity &= ~t
            }, s.prototype.setImmunity = function(t) {
                "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity = t
            }, s.prototype.hasImmunity = function(t) {
                return "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.getImmunity() & t
            }, s.prototype.getImmunity = function() {
                return this.immunity
            }, s.prototype.reset = function(t, i) {
                t = t || [0, 0, 0], i = i || [0, 0, 0], this.setPos(t), this.setVel(i)
            }, s.prototype.applyForce = function(t) {
                this.hasImmunity(s.IMMUNITIES.AGENTS) || this.f.set(this.f.add(t))
            }, s.prototype.applyImpulse = function(t) {
                this.hasImmunity(s.IMMUNITIES.AGENTS) || this.setVel(this.v.add(t.mult(this.mInv)))
            }, s.prototype.getEnergy = function() {
                return .5 * this.m * this.v.normSquared()
            }, s.prototype.getTransform = function() {
                var t = this.p,
                    i = this.axis;
                return void 0 !== i && (i & ~s.AXIS.X && (t.x = 0), i & ~s.AXIS.Y && (t.y = 0), i & ~s.AXIS.Z && (t.z = 0)), r.translate(t.x, t.y, t.z)
            }, s.prototype.link = function(t) {
                return this.node || (this.node = new o), this.node.link(t)
            }, s.prototype.add = function(t) {
                return this.node || (this.node = new o), this.node.add(t)
            }, s.prototype.replace = function(t) {
                this.node.object = t
            }, s.prototype.render = function(t) {
                return t = void 0 !== t ? t : this.node.render(), this.spec.target.transform = this.getTransform(), this.spec.target.target = t, this.spec
            }, e.exports = s
        }), define("famous-physics/math/Quaternion", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e, s) {
                return 1 == arguments.length ? this.set(t) : (this.w = void 0 !== t ? t : 1, this.x = i || 0, this.y = e || 0, this.z = s || 0), this
            }
            var o = new s(1, 0, 0, 0);
            s.prototype.add = function(t, i) {
                return i = i || o, i.setWXYZ(this.w + t.w, this.x + t.x, this.y + t.y, this.z + t.z)
            }, s.prototype.sub = function(t, i) {
                return i = i || o, i.setWXYZ(this.w - t.w, this.x - t.x, this.y - t.y, this.z - t.z)
            }, s.prototype.scalarDivide = function(t, i) {
                return i = i || o, this.scalarMult(1 / t, i)
            }, s.prototype.scalarMult = function(t, i) {
                return i = i || o, i.setWXYZ(this.w * t, this.x * t, this.y * t, this.z * t)
            }, s.prototype.multiply = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = this.w,
                    a = t.x,
                    h = t.y,
                    u = t.z,
                    p = t.w;
                return i.setWXYZ(r * p - e * a - s * h - n * u, r * a + e * p + s * u - n * h, r * h - e * u + s * p + n * a, r * u + e * h - s * a + n * p)
            }, s.prototype.vectorMultiply = function(t, i) {
                return i = i || o, t.w = 0, i.set(this.inverse().multiply(t).multiply(this))
            }, s.prototype.inverse = function(t) {
                return t = t || o, this.conj().scalarDivide(this.normSquared(), t)
            }, s.prototype.negate = function(t) {
                return t = t || o, this.scalarMult(-1, t)
            }, s.prototype.conj = function(t) {
                return t = t || o, t.setWXYZ(this.w, -this.x, -this.y, -this.z)
            }, s.prototype.normalize = function(t) {
                t = t || o;
                var i = this.norm();
                return Math.abs(i) < 1e-7 ? t.setWXYZ(1, 0, 0, 0) : this.scalarDivide(i, t)
            }, s.prototype.makeFromAngleAndAxis = function(t, i) {
                i.normalize(1, i);
                var e = .5 * t,
                    s = Math.sin(e);
                return this.x = s * i.x, this.y = s * i.y, this.z = s * i.z, this.w = Math.cos(e), this
            }, s.prototype.getAngle = function() {
                return 2 * Math.acos(this.w)
            }, s.prototype.getAxis = function() {
                var t = this.w;
                if (t >= 1) return [0, 0, 0];
                var i = 1 / Math.sqrt(1 - t * t);
                return [i * this.x, i * this.y, this.z]
            }, s.prototype.setWXYZ = function(t, i, e, s) {
                return o.clear(), this.w = t, this.x = i, this.y = e, this.z = s, this
            }, s.prototype.set = function(t) {
                return t instanceof Array ? (this.w = t[0], this.x = t[1], this.y = t[2], this.z = t[3]) : (this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z), this !== o && o.clear(), this
            }, s.prototype.put = function(t) {
                t.set(o)
            }, s.prototype.clone = function() {
                return new s(this)
            }, s.prototype.clear = function() {
                return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
            }, s.prototype.isEqual = function(t) {
                return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z
            }, s.prototype.dot = function(t) {
                return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
            }, s.prototype.normSquared = function() {
                return this.dot(this)
            }, s.prototype.norm = function() {
                return Math.sqrt(this.normSquared())
            }, s.prototype.isZero = function() {
                return !(this.x || this.y || this.z || 1 != this.w)
            }, s.prototype.zeroRotation = function() {
                return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
            }, s.prototype.getMatrix = function() {
                var t = 1 / this.norm(),
                    i = this.x * t,
                    e = this.y * t,
                    s = this.z * t,
                    o = this.w * t;
                return [1 - 2 * e * e - 2 * s * s, -2 * i * e - 2 * s * o, 2 * i * s - 2 * e * o, 0, -2 * i * e + 2 * s * o, 1 - 2 * i * i - 2 * s * s, -2 * e * s - 2 * i * o, 0, 2 * i * s + 2 * e * o, -2 * e * s + 2 * i * o, 1 - 2 * i * i - 2 * e * e, 0, 0, 0, 0, 1]
            };
            var n = 1e-5;
            s.prototype.slerp = function(t, i, e) {
                e = e || o;
                var s, r, a, h, u;
                return r = this.dot(t), 0 > r && (r *= -1), 1 - r > n ? (s = Math.acos(r), a = Math.sin(s), h = Math.sin((1 - i) * s) / a, u = Math.sin(i * s) / a) : (h = 1 - i, u = i), this.scalarMult(h / u).add(t).mult(u, e)
            }, e.exports = s
        }), define("famous-physics/bodies/Body", ["require", "exports", "module", "./Particle", "famous-physics/math/Vector", "famous-physics/math/Quaternion", "famous/Matrix"], function(t, i, e) {
            function s(t) {
                o.call(this, t), this.q = t.q ? new r(t.q) : new r, this.w = t.w ? new n(t.w) : new n, this.L = t.L ? new n(t.L) : new n, this.t = t.t ? new n(t.t) : new n, this.I = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.Iinv = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.w.w = 0, this.pWorld = new n
            }
            var o = t("./Particle"),
                n = t("famous-physics/math/Vector"),
                r = t("famous-physics/math/Quaternion"),
                a = t("famous/Matrix");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.IMMUNITIES = o.IMMUNITIES, s.prototype.updateAngularVelocity = function() {
                var t = this.Iinv,
                    i = this.L,
                    e = i.x,
                    s = i.y,
                    o = i.z,
                    n = t[0],
                    r = t[1],
                    a = t[2];
                this.w.setXYZ(n[0] * e + n[1] * s + n[2] * o, r[0] * e + r[1] * s + r[2] * o, a[0] * e + a[1] * s + a[2] * o)
            }, s.prototype.toWorldCoordinates = function(t) {
                var i = this.q;
                return t.w = 0, this.pWorld.set(i.inverse().multiply(t).multiply(i))
            }, s.prototype.getEnergy = function() {
                var t = this.w,
                    i = this.I,
                    e = t.x,
                    s = t.y,
                    o = t.z,
                    n = this.I[0],
                    r = i[1],
                    a = i[2];
                return .5 * (this.m * this.v.normSquared() + n[0] * e * e + n[1] * e * s + n[2] * e * o + r[0] * s * e + r[1] * s * s + r[2] * s * o + a[0] * o * e + a[1] * o * s + a[2] * o * o)
            }, s.prototype.reset = function(t, i, e, s) {
                this.setPos(t || [0, 0, 0]), this.setVel(i || [0, 0, 0]), this.w.clear(), this.setOrientation(e || [1, 0, 0, 0]), this.setAngularMomentum(s || [0, 0, 0])
            }, s.prototype.setOrientation = function(t) {
                this.q.set(t)
            }, s.prototype.setAngularMomentum = function(t) {
                this.L.set(t)
            }, s.prototype.applyForce = function(t, i) {
                this.hasImmunity(s.IMMUNITIES.AGENTS) || (this.f.set(this.f.add(t)), void 0 !== i && this.applyTorque(i.cross(t)))
            }, s.prototype.applyTorque = function(t) {
                this.hasImmunity(s.IMMUNITIES.ROTATION) || this.t.set(this.t.add(t))
            }, s.prototype.getTransform = function() {
                return a.move(this.q.getMatrix(), this.p.get())
            }, e.exports = s
        }), define("famous-physics/bodies/Circle", ["require", "exports", "module", "./Body"], function(t, i, e) {
            function s(t) {
                o.call(this, t), t = t || {}, this.r = t.r || 0, this.size = [2 * this.r, 2 * this.r];
                var i = this.r,
                    e = this.m;
                this.I = [
                    [.25 * e * i * i, 0, 0],
                    [0, .25 * e * i * i, 0],
                    [0, 0, .5 * e * i * i]
                ], this.Iinv = [
                    [4 / (e * i * i), 0, 0],
                    [0, 4 / (e * i * i), 0],
                    [0, 0, 2 / (e * i * i)]
                ]
            }
            var o = t("./Body");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.IMMUNITIES = o.IMMUNITIES, e.exports = s
        }), define("famous-physics/bodies/Rectangle", ["require", "exports", "module", "./Body"], function(t, i, e) {
            function s(t) {
                o.call(this, t), t = t || {}, this.size = t.size || [0, 0];
                var i = this.size[0],
                    e = this.size[1];
                this.I = [
                    [e * e / 12, 0, 0],
                    [0, i * i / 12, 0],
                    [0, 0, (i * i + e * e) / 12]
                ], this.Iinv = [
                    [12 / (e * e), 0, 0],
                    [0, 12 / (i * i), 0],
                    [0, 0, 12 / (i * i + e * e)]
                ]
            }
            var o = t("./Body");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.IMMUNITIES = o.IMMUNITIES, e.exports = s
        }), define("famous-physics/forces/Force", ["require", "exports", "module", "famous-physics/math/Vector"], function(t, i, e) {
            function s() {
                this.force = new o
            }
            var o = t("famous-physics/math/Vector");
            s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init && t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, s.prototype.getEnergy = function() {
                return 0
            }, e.exports = s
        }), define("famous-physics/constraints/Constraint", ["require", "exports", "module"], function(t, i, e) {
            function s() {}
            s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init && t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, e.exports = s
        }), define("famous-physics/integrator/SymplecticEuler", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    velocityCap: 1 / 0,
                    angularVelocityCap: 1 / 0
                }, t && this.setOpts(t)
            }
            s.prototype.integrateVelocity = function(t, i) {
                var e = t.v,
                    s = t.m,
                    o = t.f;
                o.isZero() || (t.setVel(e.add(o.mult(i / s))), o.clear())
            }, s.prototype.integratePosition = function(t, i) {
                var e = t.p,
                    s = t.v;
                s.isZero() || (s.set(s.cap(this.opts.velocityCap)), t.setPos(e.add(s.mult(i))))
            }, s.prototype.integrateAngularMomentum = function(t, i) {
                var e = t.L,
                    s = t.t;
                s.isZero() || (s.set(s.cap(this.opts.angularVelocityCap)), e.add(s.mult(i)).put(e), s.clear())
            }, s.prototype.integrateOrientation = function(t, i) {
                var e = t.q,
                    s = t.w;
                s.isZero() || (e.set(e.add(e.multiply(s).scalarMult(.5 * i))), e.set(e.normalize()))
            }, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, e.exports = s
        }), define("famous-physics/PhysicsEngine", ["require", "exports", "module", "famous-physics/bodies/Particle", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Rectangle", "famous-physics/forces/Force", "famous-physics/constraints/Constraint", "famous-physics/integrator/SymplecticEuler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    speed: 1,
                    steps: 1,
                    velocityCap: 1 / 0,
                    angularVelocityCap: 1 / 0,
                    constraintSteps: 1,
                    constraintTolerance: 1e-4
                }, t && this.setOpts(t), this._particles = [], this._agents = {}, this._forces = [], this._constraints = [], this._playing = !0, this._buffer = 0, this._timestep = 1e3 / 60 / this.opts.steps, this._prevTime = void 0, this._currTime = void 0, this._integrator = new z({
                    velocityCap: this.opts.velocityCap,
                    angularVelocityCap: this.opts.angularVelocityCap
                }), this._currAgentId = 0, this.BODIES = s.BODIES
            }
            function o() {
                return Date.now()
            }
            function n(t, i, e) {
                return void 0 === i && (i = this.getParticles()), i instanceof Array || (i = [i]), this._agents[this._currAgentId] = {
                    agent: t,
                    targets: i,
                    source: e
                }, r.call(this, t).push(this._currAgentId), this._currAgentId++
            }
            function r(t) {
                return t instanceof C ? this._forces : t instanceof M ? this._constraints : void 0
            }
            function a(t) {
                return this._agents[t]
            }
            function h(t) {
                var i = a.call(this, this._forces[t]);
                i.agent.applyForce(i.targets, i.source)
            }
            function u(t, i) {
                var e = this._agents[this._constraints[t]];
                return e.agent.applyConstraint(e.targets, e.source, i)
            }
            function p() {
                for (var t = this._forces.length - 1; t > -1; t--) h.call(this, t)
            }
            function c(t) {
                var i = 1 / 0,
                    e = 0;
                for (this.opts.constraintTolerance; e < this.opts.constraintSteps;) {
                    i = 0;
                    for (var s = this._constraints.length - 1; s > -1; s--) i += u.call(this, s, t);
                    e++
                }
            }
            function l(t, i) {
                t.hasImmunity(T.IMMUNITIES.UPDATE) || this._integrator.integrateVelocity(t, i)
            }
            function f(t) {
                t.hasImmunity(T.IMMUNITIES.ROTATION) || t instanceof O && t.updateAngularVelocity()
            }
            function d(t, i) {
                t.hasImmunity(T.IMMUNITIES.ROTATION) || t instanceof O && this._integrator.integrateAngularMomentum(t, i)
            }
            function m(t, i) {
                t.hasImmunity(T.IMMUNITIES.UPDATE) || this._integrator.integratePosition(t, i)
            }
            function y(t, i) {
                t.hasImmunity(T.IMMUNITIES.ROTATION) || t instanceof O && this._integrator.integrateOrientation(t, i)
            }
            function v(t) {
                this.forEachParticle(l, t)
            }
            function g(t) {
                this.forEachParticle(m, t)
            }
            function S() {
                this.forEachParticle(f)
            }
            function w(t) {
                this.forEachParticle(d, t)
            }
            function x(t) {
                this.forEachParticle(y, t)
            }
            function b(t) {
                p.call(this), v.call(this, t), w.call(this, t), S.call(this, t), c.call(this, t), g.call(this, t), x.call(this, t)
            }
            var T = t("famous-physics/bodies/Particle"),
                O = t("famous-physics/bodies/Body"),
                _ = t("famous-physics/bodies/Circle"),
                P = t("famous-physics/bodies/Rectangle"),
                C = t("famous-physics/forces/Force"),
                M = t("famous-physics/constraints/Constraint"),
                z = t("famous-physics/integrator/SymplecticEuler");
            s.BODIES = {
                POINT: T,
                BODY: O,
                CIRCLE: _,
                RECTANGLE: P
            }, s.IMMUNITIES = T.IMMUNITIES, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] && (this.opts[i] = t[i])
            }, s.prototype.addBody = function(t) {
                return this._particles.push(t), t
            }, s.prototype.createParticle = function(t) {
                return this.addBody(new T(t))
            }, s.prototype.createBody = function(t) {
                var i = t.shape || s.BODIES.POINT;
                return this.addBody(new i(t))
            }, s.prototype.remove = function(t) {
                var i = this._particles.indexOf(t);
                if (i > -1) {
                    for (var e = 0; e < Object.keys(this._agents); e++) this.detachFrom(e, t);
                    this._particles.splice(i, 1)
                }
            }, s.prototype.attach = function(t, i, e) {
                if (t instanceof Array) {
                    for (var s = [], o = 0; o < t.length; o++) s[o] = n.call(this, t[o], i, e);
                    return s
                }
                return n.call(this, t, i, e)
            }, s.prototype.attachTo = function(t, i) {
                a.call(this, t).targets.push(i)
            }, s.prototype.detach = function(t) {
                var i = this.getAgent(t),
                    e = r.call(this, i),
                    s = e.indexOf(t);
                e.splice(s, 1), delete this._agents[t]
            }, s.prototype.detachFrom = function(t, i) {
                var e = a.call(this, t);
                if (e.source === i) this.detach(t);
                else {
                    var s = e.targets,
                        o = s.indexOf(i);
                    o > -1 && s.splice(o, 1)
                }
            }, s.prototype.detachAll = function() {
                this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
            }, s.prototype.getAgent = function(t) {
                return a.call(this, t).agent
            }, s.prototype.getParticles = function() {
                return this._particles
            }, s.prototype.getParticlesExcept = function(t) {
                var i = [];
                return this.forEachParticle(function(e) {
                    -1 === t.indexOf(e) && i.push(e)
                }), i
            }, s.prototype.getPos = function(t) {
                return (t || this._particles[0]).getPos()
            }, s.prototype.getVel = function(t) {
                return (t || this._particles[0]).getVel()
            }, s.prototype.getTransform = function(t) {
                return (t || this._particles[0]).getTransform()
            }, s.prototype.setPos = function(t, i) {
                (i || this._particles[0]).setPos(t)
            }, s.prototype.setVel = function(t, i) {
                (i || this._particles[0]).setVel(t)
            }, s.prototype.forEachParticle = function(t, i) {
                for (var e = this.getParticles(), s = 0, o = e.length; o > s; s++) t.call(this, e[s], i)
            }, s.prototype.step = function() {
                if (this._playing) {
                    this._prevTime || (this._prevTime = o()), this._currTime = o();
                    var t = this._currTime - this._prevTime;
                    this._prevTime = this._currTime, 0 != t && b.call(this, this.opts.speed * this._timestep)
                }
            }, s.prototype.render = function(t) {
                this.step();
                var i = [];
                return this.forEachParticle(function(e) {
                    i.push(e.render(t))
                }), i
            }, s.prototype.play = function() {
                this._prevTime = o(), this._playing = !0
            }, s.prototype.pause = function() {
                this._playing = !1
            }, s.prototype.toggle = function() {
                this._playing ? this.pause() : this.play()
            }, s.prototype.reverseTime = function() {
                this.opts.speed *= -1
            }, s.prototype.reverseVelocities = function() {
                this.forEachParticle(function(t) {
                    t.v.mult(-1, t.v)
                })
            }, e.exports = s
        }), define("famous-physics/forces/Drag", ["require", "exports", "module", "famous-physics/forces/Force"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    strength: .01,
                    forceFunction: s.FORCE_FUNCTIONS.LINEAR
                }, t && this.setOpts(t), o.call(this)
            }
            var o = t("famous-physics/forces/Force");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
                LINEAR: function(t) {
                    return t
                },
                QUADRATIC: function(t) {
                    return t.mult(t.norm())
                }
            }, s.prototype.applyForce = function(t) {
                for (var i = this.opts.strength, e = this.opts.forceFunction, s = this.force, o = 0; o < t.length; o++) {
                    var n = t[o];
                    e(n.v).mult(-i).put(s), n.applyForce(s)
                }
            }, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, e.exports = s
        }), define("famous-physics/forces/Spring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    period: 300,
                    dampingRatio: .1,
                    length: 0,
                    lMin: 0,
                    lMax: 1 / 0,
                    anchor: void 0,
                    forceFunction: s.FORCE_FUNCTIONS.HOOK,
                    restTolerance: 1e-5
                }, t && this.setOpts(t), this.eventOutput = void 0, this._atRest = !1, this.init(), p.call(this), this.disp = new c(0, 0, 0)
            }
            function o(t) {
                this.forceFunction = t
            }
            function n() {
                var t = this.opts;
                t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
            }
            function r() {
                var t = this.opts;
                t.damping = 4 * Math.PI * t.dampingRatio / t.period
            }
            function a(t, i) {
                return .5 * t * i * i
            }
            function h(t, i) {
                t < this.opts.restTolerance ? (this._atRest || this.eventOutput.emit("atRest", {
                    particle: i
                }), this._atRest = !0) : this._atRest = !1
            }
            function u() {
                this.eventOutput = new l, this.eventOutput.bindThis(this), l.setOutputHandler(this, this.eventOutput)
            }
            var p = t("famous-physics/forces/Force"),
                c = t("famous-physics/math/Vector"),
                l = t("famous/EventHandler");
            s.prototype = Object.create(p.prototype), s.prototype.constructor = p, s.FORCE_FUNCTIONS = {
                FENE: function(t, i) {
                    var e = .99 * i,
                        s = Math.max(Math.min(t, e), -e);
                    return s / (1 - s * s / (i * i))
                },
                HOOK: function(t) {
                    return t
                }
            }, s.prototype.init = function() {
                o.call(this, this.opts.forceFunction), n.call(this), r.call(this)
            }, s.prototype.applyForce = function(t, i) {
                for (var e = this.force, s = this.disp, o = this.opts, n = o.stiffness, r = o.damping, u = o.length, p = o.lMax, c = o.anchor || i.p, l = 0; l < t.length; l++) {
                    var f = t[l];
                    s.set(c.sub(f.p));
                    var d = s.norm() - u;
                    if (0 == d) return;
                    var m = f.m;
                    if (n *= m, r *= m, e.set(s.normalize(n * this.forceFunction(d, p))), r && (i ? e.set(e.add(f.v.sub(i.v).mult(-r))) : e.set(e.add(f.v.mult(-r)))), f.applyForce(e), i && i.applyForce(e.mult(-1)), this.eventOutput) {
                        var y = f.getEnergy() + a(n, d);
                        h.call(this, y, f)
                    }
                }
            }, s.prototype.getEnergy = function(t, i) {
                var e = this.opts,
                    s = e.length,
                    o = e.anchor || i.p,
                    n = e.stiffness,
                    r = o.sub(t.p).norm() - s;
                return .5 * n * r * r
            }, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor.p instanceof c && (this.opts.anchor = t.anchor.p), t.anchor instanceof c && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new c(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.restTolerance && (this.opts.restTolerance = t.restTolerance), this.init()
            }, s.prototype.setAnchor = function(t) {
                void 0 === this.opts.anchor && (this.opts.anchor = new c), this.opts.anchor.set(t)
            }, s.prototype.on = function() {
                return u.call(this), this.on.apply(this, arguments)
            }, s.prototype.unbind = function() {
                return u.call(this), this.unbind.apply(this, arguments)
            }, s.prototype.pipe = function() {
                return u.call(this), this.pipe.apply(this, arguments)
            }, s.prototype.unpipe = function() {
                return u.call(this), this.unpipe.apply(this, arguments)
            }, e.exports = s
        }), define("famous-sync/TouchTracker", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.selective = t, this.touchHistory = {}, this.eventHandler = new u(!0)
            }
            function o(t, i, e, s) {
                var o = {};
                for (var n in t) o[n] = t[n];
                return {
                    touch: o,
                    origin: i,
                    timestamp: +Date.now(),
                    count: s,
                    history: e
                }
            }
            function n(t) {
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var e = t.changedTouches[i],
                        s = o(e, t.origin, void 0, t.touches.length);
                    this.eventHandler.emit("trackstart", s), this.selective || this.touchHistory[e.identifier] || this.track(s)
                }
            }
            function r(t) {
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var e = t.changedTouches[i],
                        s = this.touchHistory[e.identifier];
                    if (s) {
                        var n = o(e, t.origin, s, t.touches.length);
                        this.touchHistory[e.identifier].push(n), this.eventHandler.emit("trackmove", n)
                    }
                }
            }
            function a(t) {
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var e = t.changedTouches[i],
                        s = this.touchHistory[e.identifier];
                    if (s) {
                        var n = o(e, t.origin, s, t.touches.length);
                        this.eventHandler.emit("trackend", n), delete this.touchHistory[e.identifier]
                    }
                }
            }
            function h() {
                for (var t in this.touchHistory) {
                    var i = this.touchHistory[t];
                    this.eventHandler.emit("trackend", {
                        touch: i[i.length - 1].touch,
                        timestamp: +Date.now(),
                        count: 0,
                        history: i
                    }), delete this.touchHistory[t]
                }
            }
            var u = t("famous/EventHandler");
            s.prototype.track = function(t) {
                this.touchHistory[t.touch.identifier] = [t]
            }, s.prototype.emit = function(t, i) {
                return "touchstart" == t ? n.call(this, i) : "touchmove" == t ? r.call(this, i) : "touchend" == t ? a.call(this, i) : "touchcancel" == t ? a.call(this, i) : "unpipe" == t ? h.call(this) : void 0
            }, s.prototype.on = function(t, i) {
                return this.eventHandler.on(t, i)
            }, s.prototype.unbind = function(t, i) {
                return this.eventHandler.unbind(t, i)
            }, s.prototype.pipe = function(t) {
                return this.eventHandler.pipe(t)
            }, s.prototype.unpipe = function(t) {
                return this.eventHandler.unpipe(t)
            }, e.exports = s
        }), define("famous-sync/TouchSync", ["require", "exports", "module", "./TouchTracker", "famous/EventHandler"], function(t, i, e) {
            function s(t, i) {
                this.targetGet = t, this.output = new h, this.touchTracker = new a, this.options = {
                    direction: void 0,
                    rails: !1,
                    scale: 1
                }, i ? this.setOptions(i) : this.setOptions(this.options), h.setOutputHandler(this, this.output), h.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", n.bind(this)), this.touchTracker.on("trackend", r.bind(this))
            }
            function o(t) {
                this.output.emit("start", {
                    count: t.count,
                    touch: t.touch.identifier,
                    pos: [t.touch.pageX, t.touch.pageY]
                })
            }
            function n(t) {
                var i = t.history,
                    e = i[i.length - 2].timestamp,
                    o = i[i.length - 1].timestamp,
                    n = i[i.length - 2].touch,
                    r = i[i.length - 1].touch,
                    a = r.pageX - n.pageX,
                    h = r.pageY - n.pageY;
                this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
                var u = Math.max(o - e, 8),
                    p = a / u,
                    c = h / u;
                if (i.length > 2) var l = i[i.length - 3].touch,
                    f = (r.pageX - 2 * n.pageX + l.pageX) / (u * u),
                    d = (r.pageY - 2 * n.pageY + l.pageY) / (u * u);
                else
                    var f = 0,
                        d = 0;
                var m, y, v, g = this.targetGet(),
                    S = this.options.scale;
                this.options.direction == s.DIRECTION_X ? (m = g + S * a, y = S * p, v = S * c) : this.options.direction == s.DIRECTION_Y ? (m = g + S * h, y = S * c, v = S * d) : (m = [g[0] + S * a, g[1] + S * h], y = [S * p, S * c], v = [S * f, S * d]), this.output.emit("update", {
                    p: m,
                    c: [r.pageX, r.pageY],
                    v: y,
                    a: v,
                    c: [r.pageX, r.pageY],
                    d: [a, h],
                    touch: t.touch.identifier
                })
            }
            function r(t) {
                var i = void 0 !== this.options.direction ? 0 : [0, 0],
                    e = t.history,
                    o = t.count,
                    n = this.targetGet();
                if (e.length > 1) {
                    var r = e[e.length - 2].timestamp,
                        a = e[e.length - 1].timestamp,
                        h = e[e.length - 2].touch,
                        u = e[e.length - 1].touch,
                        p = u.pageX - h.pageX,
                        c = u.pageY - h.pageY;
                    this.options.rails && (Math.abs(p) > Math.abs(c) ? c = 0 : p = 0);
                    var i, l = Math.max(a - r, 1),
                        f = p / l,
                        d = c / l,
                        m = this.options.scale;
                    i = this.options.direction == s.DIRECTION_X ? m * f : this.options.direction == s.DIRECTION_Y ? m * d : [m * f, m * d]
                }
                this.output.emit("end", {
                    p: n,
                    v: i,
                    count: o,
                    touch: t.touch.identifier
                })
            }
            var a = t("./TouchTracker"),
                h = t("famous/EventHandler");
            s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.setOptions = function(t) {
                void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
            }, s.prototype.getOptions = function() {
                return this.options
            }, e.exports = s
        }), define("famous-sync/ScrollSync", ["require", "exports", "module", "famous/EventHandler", "famous/Engine"], function(t, i, e) {
            function s(t, i) {
                this.targetGet = t, this.options = {
                    direction: void 0,
                    minimumEndSpeed: 1 / 0,
                    rails: !1,
                    scale: 1,
                    stallTime: 50
                }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this._lastFrame = void 0, this.input.on("mousewheel", n.bind(this)), this.input.on("wheel", n.bind(this)), this.inProgress = !1, this._loopBound = !1
            }
            function o() {
                var t = Date.now();
                if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                    var i = this.targetGet();
                    this.inProgress = !1;
                    var e = 0;
                    Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (e = this._prevVel), this.output.emit("end", {
                        p: i,
                        v: e,
                        slip: !0
                    })
                }
            }
            function n(t) {
                t.preventDefault(), this.inProgress || (this.inProgress = !0, this.output.emit("start", {
                    slip: !0
                }), this._loopBound || (a.on("prerender", o.bind(this)), this._loopBound = !0));
                var i = this._prevTime,
                    e = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : -t.deltaX,
                    n = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : -t.deltaY,
                    r = Date.now();
                this.options.rails && (Math.abs(e) > Math.abs(n) ? n = 0 : e = 0);
                var h, u, p = Math.max(r - i, 8),
                    c = e / p,
                    l = n / p,
                    f = this.targetGet(),
                    d = this.options.scale;
                this.options.direction == s.DIRECTION_X ? (h = f + d * e, u = d * c) : this.options.direction == s.DIRECTION_Y ? (h = f + d * n, u = d * l) : (h = [f[0] + d * e, f[1] + d * n], u = [d * c, d * l]), this.output.emit("update", {
                    p: h,
                    v: u,
                    slip: !0
                }), this._prevTime = r, this._prevVel = u
            }
            var r = t("famous/EventHandler"),
                a = t("famous/Engine");
            s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
            }, e.exports = s
        }), define("famous-sync/GenericSync", ["require", "exports", "module", "famous/EventHandler", "./TouchSync", "./ScrollSync"], function(t, i, e) {
            function s(t, i) {
                this.targetGet = t, this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this._handlers = void 0, this.options = {
                    syncClasses: h
                }, this._handlerOptions = this.options, i && this.setOptions(i), this._handlers || o.call(this)
            }
            function o() {
                if (this._handlers) for (var t = 0; t < this._handlers.length; t++) this.eventInput.unpipe(this._handlers[t]), this._handlers[t].unpipe(this.eventOutput);
                this._handlers = [];
                for (var t = 0; t < this.options.syncClasses.length; t++) {
                    var i = this.options.syncClasses[t];
                    this._handlers[t] = new i(this.targetGet, this._handlerOptions), this.eventInput.pipe(this._handlers[t]), this._handlers[t].pipe(this.eventOutput)
                }
            }
            var n = t("famous/EventHandler"),
                r = t("./TouchSync"),
                a = t("./ScrollSync"),
                h = [r, a];
            s.register = function(t) {
                h.indexOf(t) < 0 && h.push(t)
            }, s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DIRECTION_Z = 2, s.prototype.setOptions = function(t) {
                if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, o.call(this)), this._handlers) for (var i = 0; i < this._handlers.length; i++) this._handlers[i].setOptions(this._handlerOptions)
            }, e.exports = s
        }), define("famous/ViewSequence", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e) {
                this.array = t || [], this.index = i || 0, this.loop = e || !1, this._prev = void 0, this._prevIndex = void 0, this._next = void 0, this._nextIndex = void 0
            }
            function o(t) {
                for (var i = this.index, e = this; e && i < this.array.length;) e.index += t, void 0 !== e._prevIndex && (e._prevIndex += t), void 0 !== e._nextIndex && (e._nextIndex += t), e = e._next
            }
            s.prototype._createPrevious = function() {
                var t = new this.constructor(this.array, this._prevIndex, this.loop);
                return t._next = this, t._nextIndex = this.index, t
            }, s.prototype._createNext = function() {
                var t = new this.constructor(this.array, this._nextIndex, this.loop);
                return t._prev = this, t._prevIndex = this.index, t
            }, s.prototype.getPrevious = function() {
                var t = this.index - 1;
                if (0 == this.index) {
                    if (!this.loop) return void 0;
                    t = this.array.length - 1
                }
                return this._prev && this._prevIndex == t || (this._prevIndex = t, this._prev = this._createPrevious()), this._prev
            }, s.prototype.getNext = function() {
                var t = this.index + 1;
                if (t >= this.array.length) {
                    if (!this.loop) return void 0;
                    t = 0
                }
                return this._next && this._nextIndex == t || (this._nextIndex = t, this._next = this._createNext()), this._next
            }, s.prototype.toString = function() {
                return this.index
            }, s.prototype.unshift = function() {
                if (this._prev && 0 !== this.index) this._prev.unshift.apply(this._prev, arguments);
                else {
                    var t = arguments.length;
                    this.array.unshift.apply(this.array, arguments), o.call(this, t)
                }
            }, s.prototype.push = function() {
                this.array.push.apply(this.array, arguments)
            }, s.prototype.splice = function(t, i) {
                if (this._prev && this.index !== t) this._prev.splice.apply(this._prev, arguments);
                else {
                    var e = this.index >= t ? arguments.length - 2 - i : 0;
                    this.array.splice.apply(this.array, arguments), e && o.call(this, e)
                }
            }, s.prototype.get = function() {
                return this.array[this.index]
            }, s.prototype.getSize = function() {
                var t = this.get();
                if (t) return t.getSize ? t.getSize.apply(t, arguments) : void 0
            }, s.prototype.render = function() {
                var t = this.get();
                if (t) return t.render.apply(t, arguments)
            }, e.exports = s
        }), define("famous/Group", ["require", "exports", "module", "./Context", "./Matrix", "./Surface"], function(t, i, e) {
            function s(t) {
                r.call(this, t), this._shouldRecalculateSize = !1, this._container = document.createDocumentFragment(), this.context = new o(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0], this._origin = void 0, this._originTransfer = {
                    render: function(t) {
                        return {
                            origin: this._origin,
                            target: t
                        }
                    }.bind(this)
                }
            }
            var o = t("./Context"),
                n = t("./Matrix"),
                r = t("./Surface");
            s.SIZE_ZERO = [0, 0], s.prototype = Object.create(r.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "group", s.prototype.link = function() {
                var t = this.context.link(this._originTransfer);
                return t.link.apply(t, arguments)
            }, s.prototype.add = function() {
                return this.context.add.apply(this.context, arguments)
            }, s.prototype.mod = function() {
                return this.context.mod.apply(this.context, arguments)
            }, s.prototype.render = function() {
                return r.prototype.render.call(this)
            }, s.prototype.deploy = function(t) {
                this.context.migrate(t)
            }, s.prototype.recall = function() {
                this._container = document.createDocumentFragment(), this.context.migrate(this._container)
            }, s.prototype.commit = function(t, i, e, o, a) {
                i = n.moveThen([-o[0] * a[0], -o[1] * a[1], 0], i);
                var h = r.prototype.commit.call(this, t, i, e, o, s.SIZE_ZERO);
                return this._origin = o, (a[0] != this._groupSize[0] || a[1] != this._groupSize[1]) && (this.context.setSize(a), this._groupSize[0] = a[0], this._groupSize[1] = a[1]), this.context.update(), h
            }, e.exports = s
        }), define("famous-views/Scrollview", ["require", "exports", "module", "famous/Utility", "famous-utils/Time", "famous-physics/PhysicsEngine", "famous-physics/bodies/Particle", "famous-physics/forces/Drag", "famous-physics/forces/Spring", "famous/Matrix", "famous/EventHandler", "famous-sync/GenericSync", "famous/ViewSequence", "famous/Group", "famous/Entity"], function(t, i, e) {
            function s(t) {
                this.options = {
                    direction: w.Direction.Y,
                    rails: !0,
                    itemSpacing: 0,
                    clipSize: void 0,
                    margin: void 0,
                    friction: .001,
                    drag: 1e-4,
                    edgeGrip: .5,
                    edgePeriod: 300,
                    edgeDamp: 1,
                    paginated: !1,
                    pagePeriod: 500,
                    pageDamp: .8,
                    pageStopSpeed: 1 / 0,
                    pageSwitchSpeed: 1,
                    speedLimit: 10
                }, this.node = null, this.physicsEngine = new b, this.particle = new T, this.physicsEngine.addBody(this.particle), this.spring = new _({
                    anchor: [0, 0, 0]
                }), this.drag = new O({
                    forceFunction: O.FORCE_FUNCTIONS.QUADRATIC
                }), this.friction = new O({
                    forceFunction: O.FORCE_FUNCTIONS.LINEAR
                }), this.sync = new M(function() {
                    return -this.getPosition()
                }.bind(this), {
                    direction: this.options.direction == w.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
                }), this.eventInput = new C, this.eventOutput = new C, this.rawInput = new C, this.rawInput.pipe(this.sync), this.sync.pipe(this.eventInput), this.sync.pipe(this.eventOutput), this.rawInput.pipe(this.eventInput), C.setInputHandler(this, this.rawInput), C.setOutputHandler(this, this.eventOutput), this._outputFunction = void 0, this._masterOutputFunction = void 0, this.setOutputFunction(), this.touchCount = 0, this._springAttached = !1, this._onEdge = 0, this._springPosition = 0, this._touchVelocity = void 0, this._earlyEnd = !1, this._masterOffset = 0, this._lastFrameNode = void 0, t ? this.setOptions(t) : this.setOptions({}), a.call(this), this.group = new E, this.group.link({
                    render: S.bind(this)
                }), this._entityId = I.register(this), this._contextSize = [window.innerWidth, window.innerHeight], this._offsets = {}, this.emitPaginate = !1
            }
            function o(t) {
                this.touchCount = t.count, void 0 === t.count && (this.touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd = !1
            }
            function n(t) {
                var i = -t.p,
                    e = -t.v;
                this._onEdge && t.slip && (0 > e && this._onEdge < 0 || e > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd = !0) : this._earlyEnd && Math.abs(e) > Math.abs(this.particle.getVel()[0]) && o.call(this, t)), this._earlyEnd || (this._touchVelocity = e, t.slip ? this.setVelocity(e) : this.setPosition(i))
            }
            function r(t) {
                if (this.touchCount = t.count || 0, !this.touchCount) {
                    u.call(this), this._onEdge && (this._springAttached = !0), h.call(this);
                    var i = -t.v,
                        e = this.options.speedLimit;
                    t.slip && (e *= this.options.edgeGrip), -e > i ? i = -e : i > e && (i = e), this.setVelocity(i), this._touchVelocity = void 0
                }
            }
            function a() {
                this.eventInput.on("start", o.bind(this)), this.eventInput.on("update", n.bind(this)), this.eventInput.on("end", r.bind(this))
            }
            function h() {
                this._springAttached ? this.physicsEngine.attach([this.spring], this.particle) : this.physicsEngine.attach([this.drag, this.friction], this.particle)
            }
            function u() {
                this._springAttached = !1, this.physicsEngine.detachAll()
            }
            function p(t) {
                t || (t = this._contextSize);
                var i = this.options.direction === w.Direction.X ? 0 : 1;
                return t[i] || this._contextSize[i]
            }
            function c(t) {
                this._springPosition += t, this.setPosition(this.getPosition() + t), this.spring.setOpts({
                    anchor: [this._springPosition, 0, 0]
                })
            }
            function l() {
                for (var t = !1; !t && this.getPosition() < 0;) {
                    var i = this.node.getPrevious ? this.node.getPrevious() : void 0;
                    if (i) {
                        var e = i.getSize ? i.getSize() : this._contextSize,
                            s = p.call(this, e) + this.options.itemSpacing;
                        c.call(this, s), this._masterOffset -= s, this.node = i
                    } else t = !0
                }
                for (var o = this.node && this.node.getSize ? this.node.getSize() : this._contextSize; !t && this.getPosition() >= p.call(this, o) + this.options.itemSpacing;) {
                    var n = this.node.getNext ? this.node.getNext() : void 0;
                    if (n) {
                        var s = p.call(this, o) + this.options.itemSpacing;
                        c.call(this, -s), this._masterOffset += s, this.node = n, o = this.node.getSize ? this.node.getSize() : this._contextSize
                    } else t = !0
                }
                Math.abs(this._masterOffset) > g.call(this) + this.options.margin && (this._masterOffset = 0)
            }
            function f(t) {
                !this._onEdge && t ? (this.sync.setOptions({
                    scale: this.options.edgeGrip
                }), this.touchCount || this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))) : this._onEdge && !t && (this.sync.setOptions({
                    scale: 1
                }), this._springAttached && Math.abs(this.getVelocity()) < .001 && (this.setVelocity(0), this.setPosition(this._springPosition), u.call(this), h.call(this))), this._onEdge = t
            }
            function d() {
                if (0 == this.touchCount && !this._springAttached && !this._onEdge && this.options.paginated && Math.abs(this.getVelocity()) < this.options.pageStopSpeed) {
                    var t = this.node.getSize ? this.node.getSize() : this._contextSize,
                        i = Math.abs(this.getVelocity()) > this.options.pageSwitchSpeed,
                        e = this.getVelocity() > 0,
                        s = this.getPosition() > .5 * p.call(this, t);
                    i && e || !i && s ? this.goToNextPage() : m.call(this);
                    var o = Math.abs(this.getPosition());
                    o > 2 && 319 > o && x.setTimeout(function() {
                        this.eventOutput.emit("paginate")
                    }.bind(this), 300)
                }
            }
            function m() {
                y.call(this, 0, {
                    period: this.options.pagePeriod,
                    damp: this.options.pageDamp
                }), this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))
            }
            function y(t, i) {
                i || (i = {
                    period: this.options.edgePeriod,
                    damp: this.options.edgeDamp
                }), this._springPosition = t, this.spring.setOpts({
                    anchor: [this._springPosition, 0, 0],
                    period: i.period,
                    dampingRatio: i.damp
                })
            }
            function v(t, i, e) {
                var s = t.getSize ? t.getSize() : this._contextSize,
                    o = this._outputFunction(i);
                return e.push({
                    transform: o,
                    target: t.render()
                }), p.call(this, s)
            }
            function g() {
                return this.options.clipSize ? this.options.clipSize : p.call(this, this._contextSize)
            }
            function S() {
                var t = {},
                    i = this.getPosition(),
                    e = [],
                    s = 0,
                    o = 0,
                    n = this.node;
                for (t[n] = 0; n && o - i < g.call(this) + this.options.margin;) o += v.call(this, n, o + this._masterOffset, e) + this.options.itemSpacing, n = n.getNext ? n.getNext() : void 0, t[n] = o, !n && o - i - this.options.itemSpacing <= g.call(this) && (this._onEdge || y.call(this, o - g.call(this) - this.options.itemSpacing), s = 1);
                if (n = this.node && this.node.getPrevious ? this.node.getPrevious() : void 0, o = 0, n) {
                    var r = n.getSize ? n.getSize() : this._contextSize;
                    o -= p.call(this, r) + this.options.itemSpacing
                } else 0 >= i && (this._onEdge || y.call(this, 0), s = -1);
                for (; n && o - i > -(g.call(this) + this.options.margin);) if (t[n] = o, v.call(this, n, o + this._masterOffset, e), n = n.getPrevious ? n.getPrevious() : void 0) {
                    var r = n.getSize ? n.getSize() : this._contextSize;
                    o -= p.call(this, r) + this.options.itemSpacing
                }
                return this._offsets = t, f.call(this, s), d.call(this), this.options.paginated && this._lastFrameNode !== this.node && (this.eventOutput.emit("pageChange"), this._lastFrameNode = this.node), e
            }
            var w = t("famous/Utility"),
                x = t("famous-utils/Time"),
                b = t("famous-physics/PhysicsEngine"),
                T = t("famous-physics/bodies/Particle"),
                O = t("famous-physics/forces/Drag"),
                _ = t("famous-physics/forces/Spring"),
                P = t("famous/Matrix"),
                C = t("famous/EventHandler"),
                M = t("famous-sync/GenericSync"),
                z = t("famous/ViewSequence"),
                E = t("famous/Group"),
                I = t("famous/Entity");
            s.prototype.getPosition = function(t) {
                var i = this.particle.getPos()[0];
                if (void 0 === t) return i;
                var e = this._offsets[t];
                return void 0 !== e ? i - e : void 0
            }, s.prototype.setPosition = function(t) {
                this.particle.setPos([t, 0, 0])
            }, s.prototype.getVelocity = function() {
                return this.touchCount ? this._touchVelocity : this.particle.getVel()[0]
            }, s.prototype.setVelocity = function(t) {
                this.particle.setVel([t, 0, 0])
            }, s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.direction && (this.options.direction = t.direction, "x" === this.options.direction ? this.options.direction = w.Direction.X : "y" === this.options.direction && (this.options.direction = w.Direction.Y)), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.clipSize && (t.clipSize !== this.options.clipSize && (this._onEdge = 0), this.options.clipSize = t.clipSize), void 0 !== t.margin && (this.options.margin = t.margin), void 0 !== t.drag && (this.options.drag = t.drag), void 0 !== t.friction && (this.options.friction = t.friction), void 0 !== t.edgeGrip && (this.options.edgeGrip = t.edgeGrip), void 0 !== t.edgePeriod && (this.options.edgePeriod = t.edgePeriod), void 0 !== t.edgeDamp && (this.options.edgeDamp = t.edgeDamp), void 0 !== t.paginated && (this.options.paginated = t.paginated), void 0 !== t.pageStopSpeed && (this.options.pageStopSpeed = t.pageStopSpeed), void 0 !== t.pageSwitchSpeed && (this.options.pageSwitchSpeed = t.pageSwitchSpeed), void 0 !== t.pagePeriod && (this.options.pagePeriod = t.pagePeriod), void 0 !== t.pageDamp && (this.options.pageDamp = t.pageDamp), void 0 !== t.speedLimit && (this.options.speedLimit = t.speedLimit), void 0 === this.options.margin && (this.options.margin = .5 * Math.max(window.innerWidth, window.innerHeight)), this.drag.setOpts({
                    strength: this.options.drag
                }), this.friction.setOpts({
                    strength: this.options.friction
                }), this.spring.setOpts({
                    period: this.options.edgePeriod,
                    dampingRatio: this.options.edgeDamp
                }), this.sync.setOptions({
                    rails: this.options.rails,
                    direction: this.options.direction == w.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
                })
            }, s.prototype.setOutputFunction = function(t, i) {
                t || (t = function(t) {
                    return this.options.direction == w.Direction.X ? P.translate(t, 0) : P.translate(0, t)
                }.bind(this), i || (i = t)), this._outputFunction = t, this._masterOutputFunction = i ? i : function(i) {
                    return P.inverse(t(-i))
                }
            }, s.prototype.goToPreviousPage = function() {
                if (this.node) {
                    var t = this.node.getPrevious ? this.node.getPrevious() : void 0;
                    if (t) {
                        var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                        this.setPosition(this.getPosition() + i), this.node = t;
                        for (var e in this._offsets) this._offsets[e] += i;
                        m.call(this)
                    }
                    return t
                }
            }, s.prototype.goToNextPage = function() {
                if (this.node) {
                    var t = this.node.getNext ? this.node.getNext() : void 0;
                    if (t) {
                        var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                        this.setPosition(this.getPosition() - i), this.node = t;
                        for (var e in this._offsets) this._offsets[e] -= i;
                        m.call(this)
                    }
                    return t
                }
            }, s.prototype.getCurrentNode = function() {
                return this.node
            }, s.prototype.sequenceFrom = function(t) {
                t instanceof Array && (t = new z(t)), this.node = t, this._lastFrameNode = t
            }, s.prototype.getSize = function() {
                return this.options.direction == w.Direction.X ? [g.call(this), void 0] : [void 0, g.call(this)]
            }, s.prototype.render = function() {
                return this.node ? (this.physicsEngine.step(), this._entityId) : void 0
            }, s.prototype.commit = function(t, i, e, s, o) {
                this.options.clipSize || o[0] == this._contextSize[0] && o[1] == this._contextSize[1] || (this._onEdge = 0, this._contextSize = o), l.call(this);
                var n = this.getPosition(),
                    r = this._masterOutputFunction(-(n + this._masterOffset));
                return {
                    transform: P.moveThen([-s[0] * o[0], -s[1] * o[1], 0], i),
                    opacity: e,
                    origin: s,
                    size: o,
                    target: {
                        transform: r,
                        origin: s,
                        target: this.group.render()
                    }
                }
            }, e.exports = s
        }), define("app/ArticleViews/ArticleBottomView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/ContainerSurface", "famous/Modifier", "famous/RenderNode", "famous/Matrix", "famous/View", "famous-views/Scrollview"], function(t, i, e) {
            function s() {
                p.apply(this, arguments), o.call(this), n.call(this)
            }
            function o() {
                this.backing = new r({
                    size: [320, 320],
                    properties: {
                        backgroundColor: "white",
                        boxShadow: this.options.boxShadow
                    }
                });
                var t = new h({
                    origin: [0, 0]
                });
                this._add(t).link(this.backing)
            }
            function n() {
                this.scrollview = new c(this.options.svOpts), this.content = new r({
                    size: [320, 1068],
                    classes: ["article", "content"],
                    content: this.options.content,
                    properties: {
                        backgroundColor: "white"
                    }
                }), this.content.getSize = function() {
                    return [320, 1068]
                }, this.content.pipe(this.eventOutput), this.scrollview.sequenceFrom([this.content]), this.svMod = new h({
                    origin: [.5, 0],
                    transform: u.translate(0, -320, 0)
                }), this.container = new a({
                    size: [void 0, 320],
                    properties: {
                        overflow: "hidden"
                    }
                }), this.container.add(this.svMod).link(this.scrollview), this.contMod = new h, this._add(this.contMod).link(this.container)
            }
            var r = (t("famous/Engine"), t("famous/Surface")),
                a = t("famous/ContainerSurface"),
                h = t("famous/Modifier"),
                u = (t("famous/RenderNode"), t("famous/Matrix")),
                p = t("famous/View"),
                c = t("famous-views/Scrollview");
            s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                thumbCoverSm: null,
                thumbCoverLg: null,
                content: null,
                svOpts: {
                    itemSpacing: 0,
                    clipSize: window.innerHeight,
                    margin: window.innerHeight,
                    drag: .001,
                    edgeGrip: 1,
                    edgePeriod: 300,
                    speedLimit: 1
                },
                boxShadow: null
            }, s.prototype.setAngle = function() {
                this.contMod.setTransform(u.rotateX(0))
            }, s.prototype.enableScroll = function() {
                this.content.pipe(this.scrollview)
            }, s.prototype.disableScroll = function() {
                this.content.unpipe(this.scrollview)
            }, s.prototype.noShadow = function() {
                this.backing.setProperties({
                    boxShadow: ""
                })
            }, s.prototype.shadow = function() {
                this.backing.setProperties({
                    boxShadow: this.options.boxShadow
                })
            }, e.exports = s
        }), define("app/ArticleViews/ArticleFullView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/ContainerSurface", "famous/Modifier", "famous/RenderNode", "famous/Matrix", "famous/View", "famous-views/Scrollview"], function(t, i, e) {
            function s() {
                u.apply(this, arguments), o.call(this), n.call(this)
            }
            function o() {
                new r({
                    size: [void 0, void 0],
                    properties: {
                        backgroundColor: "white"
                    }
                })
            }
            function n() {
                this.scrollview = new p(this.options.svOpts), this.content = new r({
                    size: [320, 1080],
                    classes: ["article", "content"],
                    content: this.options.content,
                    properties: {
                        backgroundColor: "white"
                    }
                }), this.content.getSize = function() {
                    return [320, 1080]
                }, this.scrollview.sequenceFrom([this.content]), this.mod = new a({
                    transform: h.translate(0, -9999, 0)
                }), this._add(this.mod).link(this.scrollview)
            }
            var r = (t("famous/Engine"), t("famous/Surface")),
                a = (t("famous/ContainerSurface"), t("famous/Modifier")),
                h = (t("famous/RenderNode"), t("famous/Matrix")),
                u = t("famous/View"),
                p = t("famous-views/Scrollview");
            s.prototype = Object.create(u.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                thumbCoverSm: null,
                thumbCoverLg: null,
                content: null,
                svOpts: {
                    itemSpacing: 0,
                    clipSize: window.innerHeight,
                    margin: window.innerHeight,
                    drag: .001,
                    edgeGrip: 1,
                    edgePeriod: 300,
                    speedLimit: 10
                },
                boxShadow: null
            }, s.prototype.hide = function() {
                this.mod.setTransform(h.translate(0, -9999, 0))
            }, s.prototype.show = function() {
                this.mod.setTransform(h.translate(0, 0, 0))
            }, e.exports = s
        }), define("app/ArticleViews/ArticleTopView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/ContainerSurface", "famous/Modifier", "famous/RenderNode", "famous/Matrix", "famous/View", "famous-views/Scrollview"], function(t, i, e) {
            function s() {
                c.apply(this, arguments), o.call(this), n.call(this), r.call(this)
            }
            function o() {
                this.container = new h({
                    size: [void 0, 320],
                    properties: {
                        overflow: "hidden"
                    }
                }), this.container.pipe(this.eventOutput)
            }
            function n() {
                this.coverLgImg = new Image, this.coverLgImg.src = this.options.thumbLg, this.coverLgImg.width = 320, this.coverLg = new a({
                    size: [320, 274],
                    content: this.coverLgImg,
                    properties: {}
                }), this.thumbLgMod = new u, this.coverLg.pipe(this.eventOutput), this._add(this.thumbLgMod).link(this.coverLg)
            }
            function r() {
                this.scrollview = new l(this.options.svOpts), this.content = new a({
                    size: [320, 1068],
                    classes: ["article", "content"],
                    content: this.options.content,
                    properties: {
                        backgroundColor: "white"
                    }
                }), this.content.getSize = function() {
                    return [320, 1068]
                }, this.content.pipe(this.scrollview), this.scrollview.sequenceFrom([this.content]);
                var t = new u({
                    origin: [.5, 0]
                });
                this.container.add(t).link(this.scrollview), this.contMod = new u, this._add(this.contMod).link(this.container)
            }
            var a = (t("famous/Engine"), t("famous/Surface")),
                h = t("famous/ContainerSurface"),
                u = t("famous/Modifier"),
                p = (t("famous/RenderNode"), t("famous/Matrix")),
                c = t("famous/View"),
                l = t("famous-views/Scrollview");
            s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                thumbSm: null,
                thumbLg: null,
                content: null,
                svOpts: {
                    itemSpacing: 0,
                    clipSize: window.innerHeight,
                    margin: window.innerHeight,
                    drag: .001,
                    edgeGrip: 1,
                    edgePeriod: 300,
                    speedLimit: 1
                },
                boxShadow: null
            }, s.prototype.setAngle = function(t) {
                this.contMod.setTransform(p.aboutOrigin([0, 320, 0], p.rotateX(-t))), this.thumbLgMod.setTransform(p.moveThen([0, 320, .01], p.aboutOrigin([0, 320, 0], p.rotate(-t + Math.PI, 0, 0))))
            }, s.prototype.enableScroll = function() {
                this.content.pipe(this.scrollview)
            }, s.prototype.disableScroll = function() {
                this.content.unpipe(this.scrollview)
            }, e.exports = s
        }), define("surface-extensions/ExpandingSurface", ["require", "exports", "module", "famous/Surface", "famous/Engine"], function(t, i, e) {
            function s(t) {
                this.getCustomSize = t.getCustomSize ? t.getCustomSize : function(t) {
                    return [this.size[0], t.firstChild.clientHeight]
                }, this._resizeDirty = !0, this._checkHeight = o.bind(this), r.on("postrender", this._checkHeight), n.apply(this, arguments)
            }
            function o() {
                if (this._resizeDirty && this._currTarget) {
                    var t = this.getCustomSize.call(this, this._currTarget);
                    this.setSize(t), this.emit("resize", t), this._resizeDirty = !1, r.unbind("postrender", this._checkHeight)
                }
            }
            var n = t("famous/Surface"),
                r = t("famous/Engine");
            s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.setHeightDirty = function() {
                this._resizeDirty = !0, r.on("postrender", this._checkHeight)
            }, s.prototype.setContent = function(t) {
                if (this.content != t) {
                    if ("string" == typeof t) this.content = '<div style="float:left">' + t + "</div>";
                    else {
                        var i = document.createElement("div");
                        i.style.float = "left", i.appendChild(t), this.content = i
                    }
                    this._contentDirty = !0
                }
                this.setHeightDirty()
            }, e.exports = s
        }), define("famous-animation/Easing", ["require", "exports", "module"], function(t, i, e) {
            var s = {
                linear: function(t, i, e, s) {
                    return t * (e / s) + i
                },
                linearNorm: function(t) {
                    return t
                },
                inQuad: function(t, i, e, s) {
                    return e * (t /= s) * t + i
                },
                inQuadNorm: function(t) {
                    return t * t
                },
                outQuad: function(t, i, e, s) {
                    return -e * (t /= s) * (t - 2) + i
                },
                outQuadNorm: function(t) {
                    return -(t -= 1) * t + 1
                },
                inOutQuad: function(t, i, e, s) {
                    return (t /= s / 2) < 1 ? e / 2 * t * t + i : -e / 2 * (--t * (t - 2) - 1) + i
                },
                inOutQuadNorm: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                inCubic: function(t, i, e, s) {
                    return e * (t /= s) * t * t + i
                },
                inCubicNorm: function(t) {
                    return t * t * t
                },
                outCubic: function(t, i, e, s) {
                    return e * ((t = t / s - 1) * t * t + 1) + i
                },
                outCubicNorm: function(t) {
                    return --t * t * t + 1
                },
                inOutCubic: function(t, i, e, s) {
                    return (t /= s / 2) < 1 ? e / 2 * t * t * t + i : e / 2 * ((t -= 2) * t * t + 2) + i
                },
                inOutCubicNorm: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                inQuart: function(t, i, e, s) {
                    return e * (t /= s) * t * t * t + i
                },
                inQuartNorm: function(t) {
                    return t * t * t * t
                },
                outQuart: function(t, i, e, s) {
                    return -e * ((t = t / s - 1) * t * t * t - 1) + i
                },
                outQuartNorm: function(t) {
                    return -(--t * t * t * t - 1)
                },
                inOutQuart: function(t, i, e, s) {
                    return (t /= s / 2) < 1 ? e / 2 * t * t * t * t + i : -e / 2 * ((t -= 2) * t * t * t - 2) + i
                },
                inOutQuartNorm: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                inQuint: function(t, i, e, s) {
                    return e * (t /= s) * t * t * t * t + i
                },
                inQuintNorm: function(t) {
                    return t * t * t * t * t
                },
                outQuint: function(t, i, e, s) {
                    return e * ((t = t / s - 1) * t * t * t * t + 1) + i
                },
                outQuintNorm: function(t) {
                    return --t * t * t * t * t + 1
                },
                inOutQuint: function(t, i, e, s) {
                    return (t /= s / 2) < 1 ? e / 2 * t * t * t * t * t + i : e / 2 * ((t -= 2) * t * t * t * t + 2) + i
                },
                inOutQuintNorm: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                inSine: function(t, i, e, s) {
                    return -e * Math.cos(t / s * (Math.PI / 2)) + e + i
                },
                inSineNorm: function(t) {
                    return -1 * Math.cos(t * (Math.PI / 2)) + 1
                },
                outSine: function(t, i, e, s) {
                    return e * Math.sin(t / s * (Math.PI / 2)) + i
                },
                outSineNorm: function(t) {
                    return Math.sin(t * (Math.PI / 2))
                },
                inOutSine: function(t, i, e, s) {
                    return -e / 2 * (Math.cos(Math.PI * t / s) - 1) + i
                },
                inOutSineNorm: function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                },
                inExpo: function(t, i, e, s) {
                    return 0 == t ? i : e * Math.pow(2, 10 * (t / s - 1)) + i
                },
                inExpoNorm: function(t) {
                    return 0 == t ? 0 : Math.pow(2, 10 * (t - 1))
                },
                outExpo: function(t, i, e, s) {
                    return t == s ? i + e : e * (-Math.pow(2, -10 * t / s) + 1) + i
                },
                outExpoNorm: function(t) {
                    return 1 == t ? 1 : -Math.pow(2, -10 * t) + 1
                },
                inOutExpo: function(t, i, e, s) {
                    return 0 == t ? i : t == s ? i + e : (t /= s / 2) < 1 ? e / 2 * Math.pow(2, 10 * (t - 1)) + i : e / 2 * (-Math.pow(2, -10 * --t) + 2) + i
                },
                inOutExpoNorm: function(t) {
                    return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                inCirc: function(t, i, e, s) {
                    return -e * (Math.sqrt(1 - (t /= s) * t) - 1) + i
                },
                inCircNorm: function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                },
                outCirc: function(t, i, e, s) {
                    return e * Math.sqrt(1 - (t = t / s - 1) * t) + i
                },
                outCircNorm: function(t) {
                    return Math.sqrt(1 - --t * t)
                },
                inOutCirc: function(t, i, e, s) {
                    return (t /= s / 2) < 1 ? -e / 2 * (Math.sqrt(1 - t * t) - 1) + i : e / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
                },
                inOutCircNorm: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                inElastic: function(t, i, e, s) {
                    var o = 1.70158,
                        n = 0,
                        r = e;
                    if (0 == t) return i;
                    if (1 == (t /= s)) return i + e;
                    if (n || (n = .3 * s), r < Math.abs(e)) {
                        r = e;
                        var o = n / 4
                    } else
                        var o = n / (2 * Math.PI) * Math.asin(e / r);
                    return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n)) + i
                },
                inElasticNorm: function(t) {
                    var i = 1.70158,
                        e = 0,
                        s = 1;
                    return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e)))
                },
                outElastic: function(t, i, e, s) {
                    var o = 1.70158,
                        n = 0,
                        r = e;
                    if (0 == t) return i;
                    if (1 == (t /= s)) return i + e;
                    if (n || (n = .3 * s), r < Math.abs(e)) {
                        r = e;
                        var o = n / 4
                    } else
                        var o = n / (2 * Math.PI) * Math.asin(e / r);
                    return r * Math.pow(2, -10 * t) * Math.sin(2 * (t * s - o) * Math.PI / n) + e + i
                },
                outElasticNorm: function(t) {
                    var i = 1.70158,
                        e = 0,
                        s = 1;
                    return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (t - i) * Math.PI / e) + 1)
                },
                inOutElastic: function(t, i, e, s) {
                    var o = 1.70158,
                        n = 0,
                        r = e;
                    if (0 == t) return i;
                    if (2 == (t /= s / 2)) return i + e;
                    if (n || (n = .3 * s * 1.5), r < Math.abs(e)) {
                        r = e;
                        var o = n / 4
                    } else
                        var o = n / (2 * Math.PI) * Math.asin(e / r);
                    return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) + i : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) * .5 + e + i
                },
                inOutElasticNorm: function(t) {
                    var i = 1.70158,
                        e = 0,
                        s = 1;
                    return 0 == t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e) * .5 + 1)
                },
                inBack: function(t, i, e, s, o) {
                    return void 0 == o && (o = 1.70158), e * (t /= s) * t * ((o + 1) * t - o) + i
                },
                inBackNorm: function(t, i) {
                    return void 0 == i && (i = 1.70158), t * t * ((i + 1) * t - i)
                },
                outBack: function(t, i, e, s, o) {
                    return void 0 == o && (o = 1.70158), e * ((t = t / s - 1) * t * ((o + 1) * t + o) + 1) + i
                },
                outBackNorm: function(t, i) {
                    return void 0 == i && (i = 1.70158), --t * t * ((i + 1) * t + i) + 1
                },
                inOutBack: function(t, i, e, s, o) {
                    return void 0 == o && (o = 1.70158), (t /= s / 2) < 1 ? e / 2 * t * t * (((o *= 1.525) + 1) * t - o) + i : e / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i
                },
                inOutBackNorm: function(t, i) {
                    return void 0 == i && (i = 1.70158), (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
                },
                inBounce: function(t, i, e, o) {
                    return e - s.outBounce(o - t, 0, e, o) + i
                },
                inBounceNorm: function(t) {
                    return 1 - s.outBounceNorm(1 - t)
                },
                outBounce: function(t, i, e, s) {
                    return (t /= s) < 1 / 2.75 ? 7.5625 * e * t * t + i : 2 / 2.75 > t ? e * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? e * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : e * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
                },
                outBounceNorm: function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                inOutBounce: function(t, i, e, o) {
                    return o / 2 > t ? .5 * s.inBounce(2 * t, 0, e, o) + i : .5 * s.outBounce(2 * t - o, 0, e, o) + .5 * e + i
                },
                inOutBounceNorm: function(t) {
                    return .5 > t ? .5 * s.inBounceNorm(2 * t) : .5 * s.outBounceNorm(2 * t - 1) + .5
                }
            };
            e.exports = s
        }), define("famous-utils/Utils", ["require", "exports", "module", "./Time", "famous/Matrix"], function(t, i, e) {
            var s = t("./Time"),
                o = t("famous/Matrix"),
                n = {
                    rad2deg: function(t) {
                        return 57.2957795 * t
                    },
                    deg2rad: function(t) {
                        return .0174532925 * t
                    },
                    distance: function(t, i, e, s) {
                        var o = e - t,
                            n = s - i;
                        return Math.sqrt(o * o + n * n)
                    },
                    distance3D: function(t, i, e, s, o, n) {
                        var r = s - t,
                            a = o - i,
                            h = n - e;
                        return Math.sqrt(r * r + a * a + h * h)
                    },
                    map: function(t, i, e, s, o, n) {
                        var r = (t - i) / (e - i) * (o - s) + s;
                        return n && (o > s ? r > o ? r = o : s > r && (r = s) : o > r ? r = o : r > s && (r = s)), r
                    },
                    limit: function(t, i, e) {
                        return t = Math.min(t, e), t = Math.max(t, i)
                    },
                    perspective: function(t, i, e, s) {
                        var o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                            n = 1 / Math.tan(t / 2),
                            r = 1 / (e - s);
                        return o[0] = n / i, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = n, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (s + e) * r, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = 2 * s * e * r, o[15] = 0, o
                    },
                    ortho: function(t, i, e, s, o, n) {
                        var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                            a = -(i + t) / (i - t),
                            h = -(s + e) / (s - e),
                            u = -(n + o) / (n - o);
                        return r[0] = 2 / (i - t), r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 / (s - e), r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = -2 / (n - o), r[11] = -1, r[12] = a, r[13] = h, r[14] = u, r[15] = 1, r
                    },
                    normalFromFM: function(t, i) {
                        var e = i[0],
                            s = i[1],
                            o = i[2],
                            n = i[3],
                            r = i[4],
                            a = i[5],
                            h = i[6],
                            u = i[7],
                            p = i[8],
                            c = i[9],
                            l = i[10],
                            f = i[11],
                            d = i[12],
                            m = i[13],
                            y = i[14],
                            v = i[15],
                            g = e * a - s * r,
                            S = e * h - o * r,
                            w = e * u - n * r,
                            x = s * h - o * a,
                            b = s * u - n * a,
                            T = o * u - n * h,
                            O = p * m - c * d,
                            _ = p * y - l * d,
                            P = p * v - f * d,
                            C = c * y - l * m,
                            M = c * v - f * m,
                            z = l * v - f * y,
                            E = g * z - S * M + w * C + x * P - b * _ + T * O;
                        return E ? (E = 1 / E, t[0] = (a * z - h * M + u * C) * E, t[1] = (h * P - r * z - u * _) * E, t[2] = (r * M - a * P + u * O) * E, t[3] = (o * M - s * z - n * C) * E, t[4] = (e * z - o * P + n * _) * E, t[5] = (s * P - e * M - n * O) * E, t[6] = (m * T - y * b + v * x) * E, t[7] = (y * w - d * T - v * S) * E, t[8] = (d * b - m * w + v * g) * E, t) : null
                    },
                    clamp: function(t, i, e) {
                        return i > t ? i : t > e ? e : t
                    },
                    color: function(t, i, e, s) {
                        return "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    },
                    backgroundTransparent: function() {
                        return {
                            backgroundColor: "transparent"
                        }
                    },
                    backgroundColor: function(t, i, e, s) {
                        return {
                            backgroundColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderRadius: function(t) {
                        return {
                            borderRadius: t + "px"
                        }
                    },
                    borderTopWidth: function(t) {
                        return {
                            borderTopWidth: t + "px"
                        }
                    },
                    borderBottomWidth: function(t) {
                        return {
                            borderBottomWidth: t + "px"
                        }
                    },
                    borderLeftWidth: function(t) {
                        return {
                            borderLeftWidth: t + "px"
                        }
                    },
                    borderRightWidth: function(t) {
                        return {
                            borderRightWidth: t + "px"
                        }
                    },
                    borderWidth: function(t) {
                        return {
                            borderWidth: t + "px"
                        }
                    },
                    borderColor: function(t, i, e, s) {
                        return 0 == s ? {
                            borderColor: "transparent"
                        } : {
                            borderColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderTopColor: function(t, i, e, s) {
                        return 0 == s ? {
                            borderTopColor: "transparent"
                        } : {
                            borderTopColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderBottomColor: function(t, i, e, s) {
                        return 0 == s ? {
                            borderBottomColor: "transparent"
                        } : {
                            borderBottomColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderRightColor: function(t, i, e, s) {
                        return 0 == s ? {
                            borderRightColor: "transparent"
                        } : {
                            borderRightColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderLeftColor: function(t, i, e, s) {
                        return 0 == s ? {
                            borderLeftColor: "transparent"
                        } : {
                            borderLeftColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                        }
                    },
                    borderStyle: function(t) {
                        return {
                            borderStyle: t
                        }
                    },
                    borderTopStyle: function(t) {
                        return {
                            borderTopStyle: t
                        }
                    },
                    borderBottomStyle: function(t) {
                        return {
                            borderBottomStyle: t
                        }
                    },
                    borderRightStyle: function(t) {
                        return {
                            borderRightStyle: t
                        }
                    },
                    borderLeftStyle: function(t) {
                        return {
                            borderLeftStyle: t
                        }
                    },
                    colorHSL: function(t, i, e, s) {
                        return "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                    },
                    backgroundTransparent: function() {
                        return {
                            backgroundColor: "transparent"
                        }
                    },
                    backgroundColorHSL: function(t, i, e, s) {
                        return {
                            backgroundColor: "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                        }
                    },
                    backfaceVisible: function(t) {
                        return t === !0 ? {
                            "backface-visibility": "visible",
                            "-webkit-backface-visibility": "visible",
                            MozBackfaceVisibility: "visible",
                            "-ms-backface-visibility": "visible"
                        } : {
                            "backface-visibility": "hidden",
                            "-webkit-backface-visibility": "hidden",
                            MozBackfaceVisibility: "hidden",
                            "-ms-backface-visibility": "hidden"
                        }
                    },
                    clipCircle: function(t, i, e) {
                        return {
                            "-webkit-clip-path": "circle(" + t + "px," + i + "px," + e + "px)"
                        }
                    },
                    getWidth: function() {
                        return window.innerWidth
                    },
                    getHeight: function() {
                        return window.innerHeight
                    },
                    getCenter: function() {
                        return [.5 * n.getWidth(), .5 * n.getHeight()]
                    },
                    isMobile: function() {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
                    },
                    isString: function(t) {
                        return "string" == typeof t || t instanceof String
                    },
                    isArray: function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    extend: function(t, i) {
                        for (var e in i) t[e] = i[e];
                        return t
                    },
                    getDevicePixelRatio: function() {
                        return window.devicePixelRatio ? window.devicePixelRatio : 1
                    },
                    supportsWebGL: function() {
                        return /Android|Chrome|Mozilla/i.test(navigator.appCodeName) && window.WebGLRenderingContext ? !0 : !1
                    },
                    getSurfacePosition: function(t) {
                        function i(t) {
                            var s = o(t);
                            if ("" !== s && void 0 !== s) {
                                var n = e(s);
                                r[0] += n[0], r[1] += n[1], r[2] += n[2]
                            }
                            t.parentElement !== document.body && i(t.parentNode)
                        }
                        function e(t) {
                            var i = [];
                            t = s(t), i[0] = parseInt(t[12].replace(" ", "")), i[1] = parseInt(t[13].replace(" ", "")), i[2] = parseInt(t[14].replace(" ", ""));
                            for (var e = 0; e < i.length; e++)"undefined" == typeof i[e] && (i[e] = 0);
                            return i
                        }
                        function s(t) {
                            return t = t.replace("matrix3d(", ""), t = t.replace(")", ""), t.split(",")
                        }
                        function o(t) {
                            var i = t.style.webkitTransform || t.style.transform;
                            return i
                        }
                        var n = t._currTarget,
                            r = [0, 0, 0];
                        return n ? (i(n), r) : void 0
                    },
                    getCenterMatrix: function(t, i, e) {
                        return void 0 == e && (e = 0), o.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], e)
                    },
                    debounce: function(t, i) {
                        var e, o, n, r, a;
                        return function() {
                            o = this, a = arguments, n = new Date;
                            var h = function() {
                                var u = new Date - n;
                                i > u ? e = s.setTimeout(h, i - u) : (e = null, r = t.apply(o, a))
                            };
                            return e || (e = s.setTimeout(h, i)), r
                        }
                    },
                    hasUserMedia: function() {
                        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
                    },
                    getUserMedia: function() {
                        return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
                    },
                    isWebkit: function() {
                        return !!window.webkitURL
                    }
                };
            e.exports = n
        }), define("app/ArticleViews/ArticleView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "surface-extensions/ExpandingSurface", "famous/Modifier", "famous/RenderNode", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous/ContainerSurface", "famous/Transitionable", "famous-views/Scrollview", "famous/ContainerSurface", "famous/Utility", "famous-utils/Utils", "famous/EventHandler", "./ArticleTopView", "./ArticleBottomView"], function(t, i, e) {
            function s() {
                function t() {
                    this.articleTop = new h(this.options), this.articleTop.pipe(this.eventOutput)
                }
                function i() {
                    this.articleBottom = new u(this.options), this.articleBottom.pipe(this.eventOutput), this.articleBottom.content.pipe(this.articleTop.scrollview)
                }
                function e() {
                    this.cover = new o, this.cover.pipe(this.eventOutput), this.cover.pipe(this.articleTop.scrollview), this.cover.pipe(this.articleBottom.scrollview), this.cover.on("touchstart", function() {
                        this.touch = !0
                    }.bind(this)), this.cover.on("touchend", function() {
                        this.touch = !1
                    }.bind(this))
                }
                r.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this)
            }
            var o = (t("famous/Engine"), t("famous/Surface")),
                n = (t("surface-extensions/ExpandingSurface"), t("famous/Modifier"), t("famous/RenderNode"), t("famous/Matrix")),
                r = t("famous/View"),
                a = (t("famous-animation/Easing"), t("famous/ContainerSurface"), t("famous/Transitionable"), t("famous-views/Scrollview"), t("famous/ContainerSurface"), t("famous/Utility"), t("famous-utils/Utils")),
                h = (t("famous/EventHandler"), t("./ArticleTopView")),
                u = t("./ArticleBottomView");
            s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                content: null,
                thumbSm: null,
                thumbLg: null,
                margin: 20,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
            }, s.prototype.getSize = function() {}, s.prototype.setProgress = function(t) {
                this.progress = t
            }, s.prototype.map = function(t, i, e) {
                return a.map(this.progress, 0, 1, t, i, e)
            }, s.prototype.enableScroll = function() {
                this.articleTop.enableScroll(), this.articleBottom.enableScroll()
            }, s.prototype.disableScroll = function() {
                this.articleTop.disableScroll(), this.articleBottom.disableScroll()
            }, s.prototype.sequence = function() {
                console.log("sequence")
            }, s.prototype.setAngle = function(t) {
                this.angle = t
            }, s.prototype.render = function() {
                return this.articleTop.setAngle(this.angle), this.articleBottom.setAngle(this.angle), this.atTop = Math.abs(this.articleTop.scrollview.getPosition()) < 5, this.spec = [], this.spec.push({
                    transform: n.translate(0, 0, 0),
                    target: this.articleTop.render()
                }), this.spec.push({
                    transform: n.translate(0, 320, 0),
                    target: this.articleBottom.render()
                }), this.enable && this.spec.push({
                    transform: n.translate(0, 0, 500),
                    target: this.cover.render()
                }), this.spec
            }, e.exports = s
        }), define("app/Data/StoryData", ["require", "exports", "module"], function(t, i, e) {
            e.exports = [{
                name: "Nathalie Pickens",
                profilePics: ["./img/profile-pics/nat.jpg"],
                text: "Eat some kale today!",
                time: "8 HRS",
                likes: 3,
                comments: 2
            }, {
                name: "Zita Molnar",
                profilePics: ["./img/profile-pics/zita.jpg"],
                text: "Sometimes walking in the San Francisco rain, without an umbrella, feels good.",
                time: "JUST NOW &#8226; FRIENDS",
                likes: 2,
                comments: 3
            }, {
                name: "Josh Hoover",
                profilePics: ["./img/profile-pics/josh.jpg"],
                text: '"Revolution doesn\'t have to do with smashing something; it has to do with bringing something forth. If you spend all your time thinking about that which you are attacking, then you are negatively bound to it. You have to find the zeal in yourself and bring that out."<br><br>Joseph Campbell, Pathways to Bliss',
                time: "YESTERDAY",
                likes: 6,
                comments: 9
            }, {
                name: "RJ Pickens",
                profilePics: ["./img/profile-pics/rj.jpg"],
                text: "Man, these are some good-looking speakers. #AISAudio #VOIDAudio",
                photos: ["./img/rj/photos/1.jpg"],
                time: "2 MINS &#8226; FRIENDS",
                likes: 10,
                comments: 2
            }, {
                name: "Scuba Steve",
                profilePics: ["./img/profile-pics/scuba.jpg"],
                text: "Eric Prydz EPIC 2.0!!!! \\o/",
                photos: ["./img/scuba/photos/1.jpg"],
                time: "12 HRS",
                likes: 5,
                comments: 3
            }, {
                name: "Shupac Takur added 4 new photos with Lee-ann Platt and 5 others",
                profilePics: ["./img/profile-pics/shu.jpg", "./img/profile-pics/leeann.jpg", "./img/profile-pics/sabina.jpg", "./img/profile-pics/corban.jpg", "./img/profile-pics/corban.jpg", "./img/profile-pics/corban.jpg"],
                text: "Fun times at Sunset Picnic! ",
                photos: ["./img/shu/photos/1.jpg", "./img/shu/photos/2.jpg", "./img/shu/photos/3.jpg", "./img/shu/photos/4.jpg"],
                time: "8 MINS &nbsp;SAN FRANCISCO, CA &#8226; FRIENDS",
                likes: 9,
                comments: 4
            }, {
                name: "Jane Williams",
                profilePics: ["./img/profile-pics/jane.jpg"],
                text: "Hilarious! #goodguyroy",
                time: "4 HRS &#8226; PUBLIC",
                likes: 4,
                comments: 2,
                articleThumbSm: "./img/roy/roysm.jpg",
                articleThumbLg: "./img/roy/roylg.jpg",
                article: '<img src="./img/roy/header.png" width="320" /><div style="padding:0 20px;"><h1>I Could Watch Roy Hibbert Blocking This Little Kid\'s Shot All Day Long</h1><iframe width="280" height="158" src="//www.youtube.com/embed/BY69NUNsF1Q?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe><p>Indiana Pacers big man Roy Hibbert visited Paramount School of Excellence in Indianapolis and relived his childhood when he wasn\'t yet an NBA star for a cute video. The best part is when he swats the crap out of a kid\'s weak layup, which has been GIFed below. (Second-best part is Hibbert using a child as a human shield in dodgeball.)</p><img width="280" src="./img/roy/block.jpg" /><p>The GIF\'s really missing the crushing thump of Hibbert\'s hand on the rejection, so watch the video for the full experience.</p></div>'
            }]
        }), define("famous-physics/utils/SpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({
                    anchor: this._anchor
                }), this.PE = new f, this.particle = this.PE.createParticle({
                    p: [t, 0, 0]
                }), this.PE.attach(this.spring, this.particle)
            }
            function o() {
                if (!this.atRest) {
                    this.PE.step();
                    var t = n.call(this);
                    y > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
                }
            }
            function n() {
                return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
            }
            function r(t) {
                var i = s.DEFAULT_OPTIONS;
                void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), t.period < 150 && console.warn("period may be unstable, increase the period or use a stiff transition"), this.spring.setOpts({
                    period: t.period,
                    dampingRatio: t.dampingRatio
                }), u.call(this, t.velocity)
            }
            function a(t) {
                this.prevState = this.endState, this.endState = t;
                var i;
                i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * c.call(this))
            }
            function h(t) {
                this.particle.p.x = t
            }
            function u(t) {
                this.particle.v.x = t
            }
            function p() {
                return this.particle.p.x
            }
            function c() {
                return this.particle.v.x
            }
            function l(t) {
                this.callback = t
            }
            var f = t("famous-physics/PhysicsEngine"),
                d = t("famous-physics/forces/Spring"),
                m = t("famous-physics/math/Vector");
            s.DEFAULT_OPTIONS = {
                period: 300,
                dampingRatio: .5,
                velocity: 0
            }, s.forceFunctions = d.forceFunctions;
            var y = 1e-5;
            s.prototype.reset = function(t, i) {
                t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
            }, s.prototype.getVelocity = function() {
                return o.call(this), c.call(this)
            }, s.prototype.setVelocity = function(t) {
                this.call(this, u(t))
            }, s.prototype.halt = function() {
                this.set(this.get())
            }, s.prototype.get = function() {
                return o.call(this), p.call(this)
            }, s.prototype.set = function(t, i, e) {
                return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
            }, e.exports = s
        }), define("app/StoryViews/ProfilePicView", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing"], function(t, i, e) {
            function s() {
                a.apply(this, arguments), this.profileImg = new Image, this.profileImg.src = this.options.url, this.profileImg.width = this.options.size;
                var t = new o({
                    size: [this.options.size, this.options.size],
                    content: this.profileImg,
                    classes: ["profile-view"]
                });
                this.mod = new n, this._link(this.mod).link(t), t.pipe(this.eventOutput)
            } {
                var o = t("famous/Surface"),
                    n = t("famous/Modifier"),
                    r = t("famous/Matrix"),
                    a = t("famous/View");
                t("famous-animation/Easing")
            }
            s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                url: null,
                size: 120
            }, s.prototype.setScale = function(t) {
                this.scale = t, this.mod.setTransform(r.scale(t, t, 1))
            }, s.prototype.getSize = function() {
                return [this.options.size * this.scale, this.options.size * this.scale]
            }, e.exports = s
        }), define("app/StoryViews/NumberView", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-utils/Utils"], function(t, i, e) {
            function s() {
                u.apply(this, arguments), o.call(this), n.call(this)
            }
            function o() {
                this.lowNum = new r({
                    size: [this.options.size, this.options.size],
                    content: "+" + (this.options.n - 1),
                    classes: ["number-view", "profile-view"]
                }), this.lowMod = new a, this._add(this.lowMod).link(this.lowNum)
            }
            function n() {
                this.highNum = new r({
                    size: [this.options.size, this.options.size],
                    content: "+" + this.options.n,
                    classes: ["number-view", "profile-view"]
                }), this.highMod = new a, this._add(this.highMod).link(this.highNum)
            } {
                var r = t("famous/Surface"),
                    a = t("famous/Modifier"),
                    h = t("famous/Matrix"),
                    u = t("famous/View"),
                    p = t("famous-animation/Easing");
                t("famous-utils/Utils")
            }
            s.prototype = Object.create(u.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                n: null,
                size: 121
            }, s.prototype.fade = function(t) {
                this.highMod.setOpacity(p.inOutQuadNorm.call(this, 1 - t)), this.lowMod.setOpacity(p.inOutQuadNorm.call(this, t))
            }, s.prototype.setScale = function(t) {
                this.scale = t, this.lowMod.setTransform(h.scale(t, t, 1)), this.highMod.setTransform(h.scale(t, t, 1))
            }, s.prototype.getSize = function() {
                return [this.options.size * this.scale, this.options.size * this.scale]
            }, e.exports = s
        }), define("app/StoryViews/ProfilePicsView", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-utils/Utils", "./ProfilePicView", "./NumberView"], function(t, i, e) {
            function s() {
                r.apply(this, arguments), this.mods = [], this.picViews = [];
                for (var t = 0; t < Math.min(this.options.urls.length, 3); t++) {
                    var i = new u({
                            url: this.options.urls[t]
                        }),
                        e = new o;
                    this.mods.push(e), this.picViews.push(i), this._add(e).link(i), i.pipe(this.eventOutput)
                }
                this.options.urls.length > 3 && (this.numView = new p({
                    n: this.options.urls.length - 2
                }), this.numMod = new o, this._add(this.numMod).link(this.numView))
            }
            var o = (t("famous/Surface"), t("famous/Modifier")),
                n = t("famous/Matrix"),
                r = t("famous/View"),
                a = t("famous-animation/Easing"),
                h = t("famous-utils/Utils"),
                u = t("./ProfilePicView"),
                p = t("./NumberView");
            s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                urls: null,
                spacing: 5,
                size: 120
            }, s.prototype.map = function(t, i, e) {
                return h.map(this.progress, 0, 1, t, i, e)
            }, s.prototype.setProgress = function(t) {
                this.progress = t, this.scale = this.map(1 / 3 / this.options.scale, .5);
                for (var i = 0; i < this.mods.length; i++) this.picViews[i].setScale(this.scale), this.mods[i].setTransform(n.translate((this.options.size * this.scale + this.options.spacing) * i, 0, 0));
                this.options.urls.length > 3 && (this.mods[2].setOpacity(a.outQuadNorm.call(this, t)), this.mods[2].setTransform(n.move(n.scale(this.progress, 1, 1), [2 * (this.options.size * this.scale + this.options.spacing), 0, 0])), this.numView.setScale(this.scale), this.numView.fade(this.progress), this.numMod.setTransform(n.translate((this.options.size * this.scale + this.options.spacing) * (2 + this.progress), 0, 0)))
            }, s.prototype.getSize = function() {
                return [void 0, this.options.size * this.scale]
            }, e.exports = s
        }), define("app/StoryViews/NameView", ["require", "exports", "module", "famous/Surface", "surface-extensions/ExpandingSurface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-utils/Utils"], function(t, i, e) {
            function s() {
                u.apply(this, arguments), o.call(this), n.call(this)
            }
            function o() {
                this.smallName = new r({
                    size: [this.options.width, void 0],
                    content: "<div>" + this.options.name + "</div>",
                    classes: ["story-name"],
                    properties: {
                        fontSize: "20px"
                    }
                }), this.smallMod = new a, this._add(this.smallMod).link(this.smallName)
            }
            function n() {
                this.largeName = new r({
                    size: [this.options.width, void 0],
                    content: "<div>" + this.options.name + "</div>",
                    classes: ["story-name"],
                    properties: {
                        fontSize: "15px"
                    }
                }), this.largeMod = new a({
                    transform: h.translate(0, 2, 0)
                }), this._add(this.largeMod).link(this.largeName)
            }
            var r = (t("famous/Surface"), t("surface-extensions/ExpandingSurface")),
                a = t("famous/Modifier"),
                h = t("famous/Matrix"),
                u = t("famous/View"),
                p = t("famous-animation/Easing"),
                c = t("famous-utils/Utils");
            s.prototype = Object.create(u.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                width: 280,
                height: 15,
                name: null
            }, s.prototype.fade = function(t) {
                this.smallMod.setOpacity(p.inOutQuadNorm.call(this, 1 - t)), this.largeMod.setOpacity(p.inOutQuadNorm.call(this, t))
            }, s.prototype.setProgress = function(t) {
                this.progress = t
            }, s.prototype.getSize = function() {
                return [this.options.width, c.map(this.progress, 0, 1, this.smallName.getSize()[1], this.largeName.getSize()[1]) - 2]
            }, e.exports = s
        }), define("app/StoryViews/TextView", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing"], function(t, i, e) {
            function s() {
                h.apply(this, arguments), o.call(this), n.call(this)
            }
            function o() {
                var t = this.options.text;
                this.options.photos ? (properties = this.options.smallSmall, smallOrigin = this.options.originSm) : t.length < 40 ? (properties = this.options.smallLarge, smallOrigin = this.options.originLg) : t.length < 280 ? (properties = this.options.smallMedium, smallOrigin = this.options.originMed) : (properties = this.options.smallSmall, smallOrigin = this.options.originSm), this.smallText = new r({
                    size: [this.options.width, window.innerHeight * this.options.height],
                    content: '<span class="story-text">' + t + "</span>",
                    properties: properties
                }), this.smallMod = new a({
                    origin: [0, smallOrigin]
                }), this._add(this.smallMod).link(this.smallText), this.smallText.pipe(this.eventOutput)
            }
            function n() {
                var t = this.options.text;
                this.options.photos ? (properties = this.options.largeSmall, largeOrigin = this.options.originSm) : t.length < 40 ? (properties = this.options.largeLarge, largeOrigin = this.options.originLg) : t.length < 280 ? (properties = this.options.largeMedium, largeOrigin = this.options.originMed) : (properties = this.options.largeSmall, largeOrigin = this.options.originSm), this.largeText = new r({
                    size: [this.options.width, window.innerHeight * this.options.height],
                    content: '<span class="story-text">' + t + '</span><p class="story-time">' + this.options.time + "</p>",
                    properties: properties
                }), this.largeMod = new a({
                    origin: [0, largeOrigin]
                }), this._add(this.largeMod).link(this.largeText), this.largeText.pipe(this.eventOutput)
            }
            var r = t("famous/Surface"),
                a = t("famous/Modifier"),
                h = (t("famous/Matrix"), t("famous/View")),
                u = t("famous-animation/Easing");
            s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                width: 280,
                height: .3,
                text: null,
                time: null,
                photos: null,
                smallLarge: {
                    fontSize: "31px",
                    lineHeight: "35px"
                },
                smallMedium: {
                    fontSize: "28px",
                    lineHeight: "32px"
                },
                smallSmall: {
                    fontSize: "21px",
                    lineHeight: "25px"
                },
                largeLarge: {
                    fontSize: "28px",
                    lineHeight: "32px"
                },
                largeMedium: {
                    fontSize: "20px",
                    lineHeight: "24px"
                },
                largeSmall: {
                    fontSize: "15px",
                    lineHeight: "19px"
                },
                originLg: .45,
                originMed: .35,
                originSm: .01
            }, s.prototype.fade = function(t) {
                this.smallMod.setOpacity(u.inOutQuadNorm.call(this, 1 - t)), this.largeMod.setOpacity(u.inOutQuadNorm.call(this, t))
            }, s.prototype.getSize = function() {
                return [280, 60]
            }, e.exports = s
        }), define("app/StoryViews/FooterView", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View"], function(t, i, e) {
            function s() {
                a.apply(this, arguments), this.img = new Image, this.img.src = "./img/footer.png", this.img.width = this.options.width;
                var t = new o({
                        size: [this.options.width, 50],
                        content: this.img
                    }),
                    i = new o({
                        size: [140, 40],
                        content: '<div class="footer-likes">' + this.options.likes + " Likes &nbsp;" + this.options.comments + ' Comments</div><div class="footer-write">Write a comment</div>'
                    }),
                    e = new n({
                        transform: r.translate(140, 9, 0)
                    });
                this._add(t), this._add(e).link(i), t.pipe(this.eventOutput), i.pipe(this.eventOutput)
            }
            var o = t("famous/Surface"),
                n = t("famous/Modifier"),
                r = t("famous/Matrix"),
                a = t("famous/View");
            s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                width: 280,
                likes: null,
                comments: null,
                margin: 20
            }, s.prototype.getSize = function() {
                return [280, 50]
            }, e.exports = s
        }), define("app/StoryViews/ArticleStoryView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-sync/GenericSync", "famous/Transitionable", "famous-physics/utils/SpringTransition", "famous-views/Scrollview", "famous/ContainerSurface", "famous/Utility", "famous-utils/Utils", "./ProfilePicsView", "./NameView", "./TextView", "../ArticleViews/ArticleView", "./FooterView"], function(t, i, e) {
            function s() {
                function t() {
                    this.pos = new u(0), this.sync = new h(function() {
                        return this.pos.get()
                    }.bind(this), {
                        direction: c.Direction.Y
                    }), this.sync.on("update", function(t) {
                        this.closed = !1, 1 === this.progress && (this.open && this.article.atTop && t.v > 0 && (this.articleScale.set(.875, this.options.curve), this.articleTop.set(-68, this.options.curve)), this.article.atTop && t.v > 0 && (this.article.disableScroll(), this.open = !1), this.open || this.pos.set(t.p))
                    }.bind(this)), this.sync.on("end", function(t) {
                        console.log(this.angle, t.v), this.angle < Math.PI / 2 ? t.v > this.options.velThreshold && this.article.atTop ? this.flipClose() : this.flipOpen() : t.v < -this.options.velThreshold ? this.flipOpen() : this.flipClose()
                    }.bind(this))
                }
                function i() {
                    this.card = new o({
                        properties: {
                            borderRadius: "5px",
                            backgroundColor: "white"
                        }
                    }), this.card.pipe(this.eventOutput)
                }
                function e() {
                    this.profilePicsView = new f({
                        scale: this.options.scale,
                        urls: this.options.profilePics
                    }), this.profilePicsView.pipe(this.eventOutput)
                }
                function s() {
                    this.nameView = new d({
                        name: this.options.name
                    }), this.nameView.pipe(this.eventOutput)
                }
                function n() {
                    this.options.text && (this.textView = new m({
                        text: this.options.text,
                        time: this.options.time,
                        photos: !0
                    }), this.textView.pipe(this.eventOutput))
                }
                function a() {
                    this.article = new y({
                        scale: this.options.scale,
                        content: this.options.content,
                        thumbSm: this.options.thumbSm,
                        thumbLg: this.options.thumbLg
                    }), this.article.pipe(this.eventOutput), this.articleScale = new u(.875), this.articleTop = new u(-68)
                }
                function p() {
                    this.footer = new v({
                        likes: this.options.likes,
                        comments: this.options.comments
                    }), this.footer.pipe(this.eventOutput)
                }
                r.apply(this, arguments), this.flipable = !0, this.closed = !0, this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this), s.call(this), n.call(this), a.call(this), p.call(this)
            }
            var o = (t("famous/Engine"), t("famous/Surface")),
                n = (t("famous/Modifier"), t("famous/Matrix")),
                r = t("famous/View"),
                a = t("famous-animation/Easing"),
                h = t("famous-sync/GenericSync"),
                u = t("famous/Transitionable"),
                p = t("famous-physics/utils/SpringTransition"),
                c = (t("famous-views/Scrollview"), t("famous/ContainerSurface"), t("famous/Utility")),
                l = t("famous-utils/Utils"),
                f = t("./ProfilePicsView"),
                d = t("./NameView"),
                m = t("./TextView"),
                y = t("../ArticleViews/ArticleView"),
                v = t("./FooterView");
            u.registerMethod("spring", p), s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                name: null,
                profilePics: null,
                text: null,
                content: null,
                thumbSm: null,
                thumbLg: null,
                time: null,
                likes: null,
                comments: null,
                margin: 20,
                curve: {
                    duration: 200,
                    curve: "easeInOut"
                },
                velThreshold: 1
            }, s.prototype.getSize = function() {}, s.prototype.setProgress = function(t) {
                this.progress = t
            }, s.prototype.map = function(t, i, e) {
                return l.map(this.progress, 0, 1, t, i, e)
            }, s.prototype.enableFlip = function() {
                this.article.pipe(this.sync)
            }, s.prototype.disableFlip = function() {
                this.article.unpipe(this.sync)
            }, s.prototype.flipOpen = function() {
                this.pos.set(-320, this.options.curve), this.articleScale.set(1, this.options.curve), this.articleTop.set(0, this.options.curve), this.closed = !1, this.open = !0, this.article.enableScroll(), this.article.enable = !0
            }, s.prototype.flipClose = function() {
                this.pos.set(0, this.options.curve, function() {
                    this.article.enable = !1, this.closed = !0
                }.bind(this)), this.articleScale.set(.875, this.options.curve), this.articleTop.set(-68, this.options.curve)
            }, s.prototype.render = function() {
                var t = this.pos.get();
                this.angle = l.map(t, 0, -320, Math.PI, 0, !0), this.article.setAngle(this.angle); {
                    var i = this.articleScale.get(),
                        e = this.map(120, 85),
                        s = this.map(140, 105),
                        o = this.map(-20, this.articleTop.get());
                    this.map(48, 0), this.map(1 / 3 / this.options.scale, .5)
                }
                return this.profilePicsView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.open = 0 === this.angle, this.open ? this.article.articleBottom.noShadow() : this.article.articleBottom.shadow(), this.spec = [], this.spec.push(this.card.render()), this.spec.push({
                    transform: n.translate(this.options.margin, this.options.margin, 0),
                    target: this.profilePicsView.render()
                }), this.spec.push({
                    transform: n.translate(this.options.margin, e, 0),
                    target: this.nameView.render()
                }), this.textView && this.spec.push({
                    transform: n.translate(this.options.margin, s, 0),
                    size: [this.options.contentWidth, window.innerHeight - s - this.options.margin],
                    target: {
                        target: this.textView.render()
                    }
                }), this.spec.push({
                    origin: [.5, 0],
                    transform: n.move(n.scale(i, i, 1), [0, o, 1e-4]),
                    size: [window.innerWidth, window.innerHeight],
                    target: {
                        target: this.article.render()
                    }
                }), this.spec.push({
                    transform: n.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
                    opacity: a.inOutQuadNorm.call(this, this.progress),
                    target: this.footer.render()
                }), this.spec
            }, e.exports = s
        }), define("app/StoryViews/PhotoStoryView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/Modifier", "famous/RenderNode", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-views/Scrollview", "famous/ContainerSurface", "famous/Utility", "famous-utils/Utils", "./ProfilePicsView", "./NameView", "./TextView", "./FooterView"], function(t, i, e) {
            function s() {
                function t() {
                    this.card = new o({
                        properties: {
                            borderRadius: "5px",
                            backgroundColor: "white"
                        }
                    }), this.card.pipe(this.eventOutput)
                }
                function i() {
                    this.content.push(new o({
                        size: [void 0, this.options.margin]
                    })), this.profilePicsView = new c({
                        scale: this.options.scale,
                        urls: this.options.profilePics
                    }), this.content.push(this.profilePicsView);
                    var t = new r;
                    t.getSize = function() {
                        return [void 0, 5 * this.map(2, 1)]
                    }.bind(this), this.content.push(t)
                }
                function e() {
                    this.nameView = new l({
                        name: this.options.name
                    }), this.content.push(this.nameView)
                }
                function s() {
                    this.options.text && (this.textView = new f({
                        text: this.options.text,
                        time: this.options.time,
                        photos: !! this.options.photos
                    }), this.content.push(this.textView))
                }
                function a() {
                    for (var t = 0; t < this.options.photos.length; t++) {
                        this.photoImg = new Image, this.photoImg.src = this.options.photos[t], this.photoImg.width = this.contentWidth;
                        var i = new o({
                            size: [this.contentWidth, this.contentWidth],
                            content: this.photoImg,
                            properties: {
                                boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                            }
                        });
                        if (2 > t) {
                            var e = new r,
                                s = this["mod" + t] = new n;
                            e.link(s).link(i), this.content.push(e), e.getSize = function() {
                                return [280, 280]
                            }
                        } else this.content.push(i);
                        this.content.push(new o({
                            size: [void 0, 15]
                        }))
                    }
                }
                function p() {
                    this.footer = new d({
                        likes: this.options.likes,
                        comments: this.options.comments
                    }), this.content.push(this.footer)
                }
                function m() {
                    this.scrollview = new u({
                        itemSpacing: 0,
                        clipSize: void 0,
                        margin: window.innerHeight,
                        drag: .001,
                        edgeGrip: 1,
                        edgePeriod: 300,
                        paginated: !1,
                        speedLimit: 10
                    }), this.scrollview.sequenceFrom(this.content), this.firstNode = this.scrollview.node
                }
                function y() {
                    this.cover = new o, this.cover.pipe(this.eventOutput), this.cover.on("touchstart", function() {
                        this.touch = !0, this.scrollview.setVelocity(0)
                    }.bind(this)), this.cover.on("touchend", function() {
                        this.touch = !1
                    }.bind(this))
                }
                h.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, this.scrollable = !0, this.content = [], t.call(this), i.call(this), e.call(this), s.call(this), a.call(this), p.call(this), m.call(this), y.call(this)
            }
            var o = (t("famous/Engine"), t("famous/Surface")),
                n = t("famous/Modifier"),
                r = t("famous/RenderNode"),
                a = t("famous/Matrix"),
                h = t("famous/View"),
                u = (t("famous-animation/Easing"), t("famous-views/Scrollview")),
                p = (t("famous/ContainerSurface"), t("famous/Utility"), t("famous-utils/Utils")),
                c = t("./ProfilePicsView"),
                l = t("./NameView"),
                f = t("./TextView"),
                d = t("./FooterView");
            s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                name: null,
                profilePics: null,
                text: null,
                photos: null,
                time: null,
                likes: null,
                comments: null,
                margin: 20
            }, s.prototype.getSize = function() {}, s.prototype.setProgress = function(t) {
                this.progress = t
            }, s.prototype.map = function(t, i, e) {
                return p.map(this.progress, 0, 1, t, i, e)
            }, s.prototype.enableScroll = function() {
                this.cover.pipe(this.scrollview), this.enable = !0
            }, s.prototype.disableScroll = function() {
                this.cover.unpipe(this.scrollview), this.enable = !1
            }, s.prototype.sequence = function() {
                console.log("sequence"), this.scrollview.setVelocity(0), this.scrollview.setPosition(0), this.scrollview.sequenceFrom(this.firstNode)
            }, s.prototype.render = function() {
                this.map(120, 85), this.map(140, 105), this.map(-20, -68), this.map(48, 0);
                this.profilePicsView.setProgress(this.progress), this.nameView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.spec = [], this.spec.push(this.card.render());
                var t = this.scrollview.getPosition();
                return this.top = 10 > t && 0 === this.scrollview.node.index ? !0 : !1, this.mod0.setTransform(a.translate(0, this.map(0, 0), 1e-5)), this.mod1.setTransform(a.move(a.rotateZ(this.map(-.04, 0)), [this.map(-6, 0), this.map(-290, 0), 0])), this.spec.push({
                    transform: a.translate(20, 0, 0),
                    target: this.scrollview.render()
                }), this.spec.push({
                    transform: a.translate(0, 0, 2),
                    target: this.cover.render()
                }), this.spec
            }, e.exports = s
        }), define("app/StoryViews/StoryView", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/View", "famous-animation/Easing", "famous-views/Scrollview", "famous/ContainerSurface", "famous/Utility", "famous-utils/Utils", "./ProfilePicsView", "./NameView", "./TextView", "./FooterView"], function(t, i, e) {
            function s() {
                function t() {
                    this.card = new o({
                        properties: {
                            borderRadius: "5px",
                            backgroundColor: "white"
                        }
                    })
                }
                function i() {
                    this.profilePicsView = new u({
                        scale: this.options.scale,
                        urls: this.options.profilePics
                    })
                }
                function e() {
                    this.nameView = new p({
                        name: this.options.name
                    })
                }
                function s() {
                    this.options.text && (this.textView = new c({
                        text: this.options.text,
                        time: this.options.time,
                        photos: !! this.options.photos
                    }))
                }
                function n() {
                    var t = this.options.photos;
                    t && (this.photoImg = new Image, this.photoImg.src = t[0], this.photoImg.width = this.contentWidth, this.photo = new o({
                        size: [this.contentWidth, this.contentWidth],
                        content: this.photoImg,
                        properties: {
                            boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                        }
                    }))
                }
                function a() {
                    this.footer = new l({
                        likes: this.options.likes,
                        comments: this.options.comments
                    })
                }
                function h() {
                    this.cover = new o, this.cover.pipe(this.eventOutput)
                }
                r.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this), s.call(this), n.call(this), a.call(this), h.call(this)
            }
            var o = (t("famous/Engine"), t("famous/Surface")),
                n = (t("famous/Modifier"), t("famous/Matrix")),
                r = t("famous/View"),
                a = t("famous-animation/Easing"),
                h = (t("famous-views/Scrollview"), t("famous/ContainerSurface"), t("famous/Utility"), t("famous-utils/Utils")),
                u = t("./ProfilePicsView"),
                p = t("./NameView"),
                c = t("./TextView"),
                l = t("./FooterView");
            s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                scale: null,
                name: null,
                profilePics: null,
                text: null,
                photos: null,
                time: null,
                likes: null,
                comments: null,
                margin: 20
            }, s.prototype.getSize = function() {}, s.prototype.setProgress = function(t) {
                this.progress = t
            }, s.prototype.map = function(t, i, e) {
                return h.map(this.progress, 0, 1, t, i, e)
            }, s.prototype.render = function() {
                {
                    var t = this.map(120, 85),
                        i = this.map(140, 105),
                        e = this.map(-20, -68);
                    this.map(48, 0), this.map(1 / 3 / this.options.scale, .5)
                }
                return this.profilePicsView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.spec = [], this.spec.push(this.card.render()), this.spec.push({
                    transform: n.translate(this.options.margin, this.options.margin, 0),
                    target: this.profilePicsView.render()
                }), this.spec.push({
                    transform: n.translate(this.options.margin, t, 0),
                    target: this.nameView.render()
                }), this.textView && this.spec.push({
                    transform: n.translate(this.options.margin, i, 0),
                    size: [this.options.contentWidth, window.innerHeight - i - this.options.margin],
                    target: {
                        target: this.textView.render()
                    }
                }), this.photo && this.spec.push({
                    origin: [.5, 1],
                    transform: n.translate(0, e, .1),
                    target: this.photo.render()
                }), this.spec.push({
                    transform: n.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
                    opacity: a.inOutQuadNorm.call(this, this.progress),
                    target: this.footer.render()
                }), this.spec.push({
                    transform: n.translate(0, 0, 2),
                    target: this.cover.render()
                }), this.spec
            }, e.exports = s
        }), define("famous-views/LightBox", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this.options = {
                    inTransform: o.scale(.001, .001, .001),
                    inOpacity: 0,
                    inOrigin: [.5, .5],
                    outTransform: o.scale(.001, .001, .001),
                    outOpacity: 0,
                    outOrigin: [.5, .5],
                    showTransform: o.identity,
                    showOpacity: 1,
                    showOrigin: [.5, .5],
                    inTransition: !0,
                    outTransition: !0,
                    overlap: !1
                }, t && this.setOptions(t), this._showing = !1, this.nodes = [], this.transforms = []
            }
            var o = t("famous/Matrix"),
                n = t("famous/Modifier"),
                r = t("famous/RenderNode"),
                a = t("famous/Utility");
            s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.inTransform && (this.options.inTransform = t.inTransform), void 0 !== t.inOpacity && (this.options.inOpacity = t.inOpacity), void 0 !== t.inOrigin && (this.options.inOrigin = t.inOrigin), void 0 !== t.outTransform && (this.options.outTransform = t.outTransform), void 0 !== t.outOpacity && (this.options.outOpacity = t.outOpacity), void 0 !== t.outOrigin && (this.options.outOrigin = t.outOrigin), void 0 !== t.showTransform && (this.options.showTransform = t.showTransform), void 0 !== t.showOpacity && (this.options.showOpacity = t.showOpacity), void 0 !== t.showOrigin && (this.options.showOrigin = t.showOrigin), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.overlap && (this.options.overlap = t.overlap)
            }, s.prototype.show = function(t, i, e) {
                if (!t) return this.hide(e);
                if (i instanceof Function && (e = i, i = void 0), this._showing) {
                    if (!this.options.overlap) return this.hide(this.show.bind(this, t, e)), void 0;
                    this.hide()
                }
                this._showing = !0;
                var s = new n({
                        transform: this.options.inTransform,
                        opacity: this.options.inOpacity,
                        origin: this.options.inOrigin
                    }),
                    o = new r;
                o.link(s).link(t), this.nodes.push(o), this.transforms.push(s);
                var h = e ? a.after(3, e) : void 0;
                i || (i = this.options.inTransition), s.setTransform(this.options.showTransform, i, h), s.setOpacity(this.options.showOpacity, i, h), s.setOrigin(this.options.showOrigin, i, h)
            }, s.prototype.hide = function(t, i) {
                if (this._showing) {
                    this._showing = !1, t instanceof Function && (i = t, t = void 0);
                    var e = this.nodes[this.nodes.length - 1],
                        s = this.transforms[this.transforms.length - 1],
                        o = a.after(3, function() {
                            this.nodes.splice(this.nodes.indexOf(e), 1), this.transforms.splice(this.transforms.indexOf(s), 1), i && i.call(this)
                        }.bind(this));
                    t || (t = this.options.outTransition), s.setTransform(this.options.outTransform, t, o), s.setOpacity(this.options.outOpacity, t, o), s.setOrigin(this.options.outOrigin, t, o)
                }
            }, s.prototype.render = function() {
                for (var t = [], i = 0; i < this.nodes.length; i++) t.push(this.nodes[i].render());
                return t
            }, e.exports = s
        }), define("famous/CanvasSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
            function s(t) {
                t && t.canvasSize && (this.canvasSize = t.canvasSize), o.call(this, t), this.canvasSize || (this.canvasSize = this.getSize()), this.backBuffer = document.createElement("canvas"), this.canvasSize && (this.backBuffer.width = this.canvasSize[0], this.backBuffer.height = this.canvasSize[1]), this._contextId = void 0
            }
            var o = t("./Surface");
            s.prototype = Object.create(o.prototype), s.prototype.elementType = "canvas", s.prototype.elementClass = "surface", s.prototype.setContent = function() {}, s.prototype.deploy = function(t) {
                this.canvasSize && (t.width = this.canvasSize[0], t.height = this.canvasSize[1]), "2d" == this._contextId && (t.getContext(this._contextId).drawImage(this.backBuffer, 0, 0), this.backBuffer.width = 0, this.backBuffer.height = 0)
            }, s.prototype.recall = function(t) {
                this.getSize();
                this.backBuffer.width = t.width, this.backBuffer.height = t.height, "2d" == this._contextId && (this.backBuffer.getContext(this._contextId).drawImage(t, 0, 0), t.width = 0, t.height = 0)
            }, s.prototype.getContext = function(t) {
                return this._contextId = t, this._currTarget ? this._currTarget.getContext(t) : this.backBuffer.getContext(t)
            }, s.prototype.setSize = function(t, i) {
                o.prototype.setSize.apply(this, arguments), i && (this.canvasSize = i.slice(0)), this._currTarget && (this._currTarget.width = this.canvasSize[0], this._currTarget.height = this.canvasSize[1])
            }, e.exports = s
        }), define("famous/EventArbiter", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
            function s(t) {
                this.dispatchers = {}, this.currMode = void 0, this.setMode(t)
            }
            var o = t("./EventHandler");
            s.prototype.setMode = function(t) {
                if (t != this.currMode) {
                    var i = this.currMode;
                    this.dispatchers[this.currMode] && this.dispatchers[this.currMode].emit("unpipe"), this.currMode = t, this.dispatchers[t] && this.dispatchers[t].emit("pipe"), this.emit("change", {
                        from: i,
                        to: t
                    })
                }
            }, s.prototype.forMode = function(t) {
                return this.dispatchers[t] || (this.dispatchers[t] = new o), this.dispatchers[t]
            }, s.prototype.emit = function(t, i) {
                if (void 0 == this.currMode) return !1;
                i || (i = {});
                var e = this.dispatchers[this.currMode];
                return e ? e.emit(t, i) : void 0
            }, e.exports = s
        }), define("famous/ImageSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
            function s() {
                this.imageUrl = void 0, o.apply(this, arguments)
            }
            var o = t("./Surface");
            s.prototype = Object.create(o.prototype), s.prototype.surfaceEvents = o.prototype.surfaceEvents.concat(["load"]), s.prototype.elementType = "img", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
                this.imageUrl = t, this._contentDirty = !0
            }, s.prototype.deploy = function(t) {
                t.src = this.imageUrl || ""
            }, s.prototype.recall = function(t) {
                t.src = ""
            }, e.exports = s
        }), define("famous/SceneCompiler", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
            function s(t) {
                var i = {
                        varCounter: 0
                    },
                    e = [],
                    s = h.call(i, t, e);
                return e.push("return " + s + ";"), new Function(["FT", "RenderNode", "RN_link", "RN_include", "id", "transforms"], e.join("\n"))
            }
            function o(t, i) {
                return "var " + t + " = " + i + ";"
            }
            function n(t, i) {
                return "id." + t + " = " + i + ";"
            }
            function r(t) {
                return "transforms.push(" + t + ");"
            }
            function a() {
                return "_" + this.varCounter++
            }
            function h(t, i) {
                var e;
                if (t instanceof Array) e = u.call(this, t, i);
                else if (e = a.call(this), t.target) {
                    var s = h.call(this, t.target, i),
                        c = p.call(this, t, i);
                    i.push(o(e, "new RenderNode(" + c + ")")), i.push("RN_link.call(" + e + ", " + s + ");"), t.id && i.push(n(t.id, c)), i.push(r(c))
                } else t.id && (i.push(o(e, "new RenderNode()")), i.push(n(t.id, e)));
                return e
            }
            function u(t, i) {
                var e = a.call(this);
                i.push(o(e, "new RenderNode()"));
                for (var s = 0; s < t.length; s++) {
                    var n = h.call(this, t[s], i);
                    n && i.push("RN_include.call(" + e + ", " + n + ");")
                }
                return e
            }
            function p(t, i) {
                var e = t.transform,
                    s = t.opacity,
                    n = t.origin,
                    r = t.size,
                    h = (t.target, l.identity);
                if (e instanceof Array) if (16 == e.length && "number" == typeof e[0]) h = e;
                else
                    for (var u = 0; u < e.length; u++) h = l.multiply(h, c(e[u]));
                else e instanceof Object && (h = c(e));
                var p = a.call(this),
                    f = "[" + h.join(",") + "]",
                    d = n ? "[" + n.join(",") + "]" : void 0,
                    m = r ? "[" + r.join(",") + "]" : void 0;
                return i.push(o(p, "new FT(" + f + "," + s + "," + d + "," + m + ")")), p
            }
            function c(t) {
                for (var i in f) if (i in t) {
                    var e = t[i];
                    return e instanceof Array || (e = [e]), f[i].apply(this, e)
                }
            }
            var l = t("./Matrix"),
                f = {
                    translate: l.translate,
                    rotate: l.rotate,
                    rotateX: l.rotateX,
                    rotateY: l.rotateY,
                    rotateZ: l.rotateZ,
                    rotateAxis: l.rotateAxis,
                    scale: l.scale,
                    skew: l.skew,
                    matrix3d: function() {
                        return arguments
                    }
                };
            e.exports = {
                compile: s
            }
        }), define("famous/Scene", ["require", "exports", "module", "./RenderNode", "./Modifier", "./SceneCompiler"], function(t, i, e) {
            function s(t) {
                this.id = {}, this.transforms = [], this.node = new o, this._def = void 0, t && this.load(t)
            }
            var o = t("./RenderNode"),
                n = t("./Modifier"),
                r = t("./SceneCompiler"),
                a = o.prototype.link,
                h = o.prototype.add;
            s.prototype.create = function() {
                return new s(this._def)
            }, s.prototype.load = function(t) {
                t instanceof s ? t = t._def : t instanceof Function || (t = r.compile(t)), this.node = t(n, o, a, h, this.id, this.transforms), this._def = t
            }, s.prototype.getTransforms = function() {
                return this.transforms
            }, s.prototype.add = function() {
                return this.node.add.apply(this.node, arguments)
            }, s.prototype.mod = function() {
                return this.node.mod.apply(this.node, arguments)
            }, s.prototype.link = function() {
                return this.node.link.apply(this.node, arguments)
            }, s.prototype.render = function() {
                return this.node.render.apply(this.node, arguments)
            }, e.exports = s
        }), define("famous/Timer", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
            function s(t) {
                return u.on(p, t), t
            }
            function o(t, i) {
                var e = c(),
                    o = function() {
                        var s = c();
                        s - e >= i && (t.apply(this, arguments), u.unbind(p, o))
                    };
                return s(o)
            }
            function n(t, i) {
                var e = c(),
                    o = function() {
                        var s = c();
                        s - e >= i && (t.apply(this, arguments), e = c())
                    };
                return s(o)
            }
            function r(t, i) {
                if (void 0 !== i) {
                    var e = function() {
                        i--, 0 >= i && (t.apply(this, arguments), h(e))
                    };
                    return s(e)
                }
            }
            function a(t, i) {
                i = i || 1;
                var e = i,
                    o = function() {
                        i--, 0 >= i && (t.apply(this, arguments), i = e)
                    };
                return s(o)
            }
            function h(t) {
                u.unbind(p, t)
            }
            var u = t("famous/Engine"),
                p = "prerender",
                c = window.performance ?
                    function() {
                        return performance.now()
                    } : function() {
                    return Date.now()
                };
            e.exports = {
                setTimeout: o,
                setInterval: n,
                after: r,
                every: a,
                clear: h
            }
        }), define("famous/VideoSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
            function s(t) {
                this.autoplay = t.autoplay || !1, this.videoUrl = void 0, o.apply(this, arguments)
            }
            var o = t("./Surface");
            s.prototype = Object.create(o.prototype), s.prototype.elementType = "video", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
                this.videoUrl = t, this.contentDirty = !0
            }, s.prototype.deploy = function(t) {
                t.src = this.videoUrl, t.autoplay = this.autoplay
            }, s.prototype.recall = function(t) {
                t.src = ""
            }, e.exports = s
        }), define("famous/WebGLSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
            function s(t) {
                this.glOptions = t.glOptions, this._canvas = document.createElement("canvas"), o.call(this, t), this.setContent(this._canvas), this.setSize(t.size)
            }
            var o = t("./Surface");
            s.prototype = Object.create(o.prototype), s.prototype.getContext = function() {
                return this._canvas.getContext("webgl", this.glOptions) || this._canvas.getContext("experimental-webgl", this.glOptions)
            }, s.prototype.setSize = function(t) {
                o.prototype.setSize.apply(this, arguments), this._canvas.style.width = t[0] + "px", this._canvas.style.height = t[1] + "px";
                var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
                this._canvas.width = t[0] * i, this._canvas.height = t[1] * i
            }, e.exports = s
        }), define("famous-animation/Animation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "./Easing"], function(t, i, e) {
            function s(t) {
                return this.name = t.name || "base", this.dead = !1, this.engine = t.engine || void 0, this.duration = t.duration || 500, this.delay = t.delay || 0, this.nextAnimations = [], void 0 !== t.next && (t.next instanceof Array ? this.nextAnimations.concat(t.next) : this.nextAnimations.push(t.next)), this.callback = t.callback || void 0, this.startTime = 0, this.endTime = 0, this.currentTime = 0, this.normalizedTime = 0, this.timePassed = 0, this.halted = !1, this.playing = !1, this.activated = !1, this.activateCallback = t.activateCallback || void 0, this.deactivateCallback = t.deactivateCallback || void 0, this.loop = t.loop || !1, this.reverse = t.reverse || !1, this.reverseUponLoop = t.reverseUponLoop || !1, this
            } {
                var o = (t("famous/Surface"), t("famous/Matrix"), t("famous-utils/Utils"));
                t("./Easing")
            }
            s.prototype.setDead = function(t) {
                return this.dead = t, this
            }, s.prototype.isDead = function() {
                return this.dead
            }, s.prototype.setup = function() {}, s.prototype.update = function() {}, s.prototype.render = function() {}, s.prototype.isPlaying = function() {
                return this.playing
            }, s.prototype.setDuration = function(t) {
                return this.duration = t, this
            }, s.prototype.setDelay = function(t) {
                return this.delay = t, this
            }, s.prototype.setCallback = function(t) {
                return this.callback = t || void 0, this
            }, s.prototype.setReverse = function(t) {
                return this.reverse = t, this
            }, s.prototype.toggleReverse = function() {
                return this.reverse = !this.reverse, this
            }, s.prototype.setLoop = function(t) {
                return this.loop = t, this
            }, s.prototype.setReverseUponLoop = function(t) {
                return this.reverseUponLoop = t, this
            }, s.prototype.isHalted = function() {
                return this.halted
            }, s.prototype.halt = function() {
                this.halted = !0, this.timePassed = this.engine.getTime() - this.startTime
            }, s.prototype.continueAnimation = function() {
                this.halted = !1, this.startTime = this.engine.getTime() - this.timePassed, this.timePassed = 0
            }, s.prototype.activate = function() {}, s.prototype.deactivate = function() {}, s.prototype.start = function() {
                this.engine.addAnimation(this), this.setDead(!1), this.halted = !1, this.playing = !0, this.startTime = this.engine.getTime() + this.delay - this.timePassed, this.endTime = this.startTime + this.duration, this.normalizedTime = 0
            }, s.prototype.tick = function() {
                if (this.playing && !this.halted) {
                    if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = o.clamp(this.normalizedTime, 0, 1), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update(), this.end(), void 0;
                    this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update())
                }
            }, s.prototype.getTime = function() {
                return this.normalizedTime
            }, s.prototype.end = function() {
                if (this.activated = !1, this.playing = !1, this.deactivate(), void 0 !== this.deactivateCallback && this.deactivateCallback(), this.engine.removeAnimation(this), this.reverseUponLoop && this.toggleReverse(), this.loop) this.start();
                else
                    for (var t = 0; t < this.nextAnimations.length; t++) this.nextAnimations[t].start();
                void 0 !== this.callback && this.callback()
            }, s.prototype.setNext = function(t) {
                t instanceof Array ? this.nextAnimations = this.nextAnimations.concat(this.nextAnimations, t) : this.nextAnimations.push(t)
            }, s.prototype.setName = function(t) {
                this.name = t
            }, s.prototype.getName = function() {
                return this.name
            }, s.prototype.setActivateCallback = function(t) {
                this.activateCallback = t
            }, s.prototype.setDeactivateCallback = function(t) {
                this.deactivateCallback = t
            }, e.exports = s
        }), define("famous-animation/Timer", ["require", "exports", "module"], function(t, i, e) {
            function s() {
                window.performance ? window.performance.now ? this.getTime = function() {
                    return window.performance.now()
                } : window.performance.webkitNow && (this.getTime = function() {
                    return window.performance.webkitNow()
                }) : this.getTime = function() {
                    return Date.now()
                }
            }
            e.exports = s
        }), define("famous-animation/AnimationEngine", ["require", "exports", "module", "famous/Engine", "./Timer", "./Animation"], function(t, i, e) {
            function s() {
                this.animations = [], this.timer = new n, o.on("prerender", this.update.bind(this))
            } {
                var o = t("famous/Engine"),
                    n = t("./Timer");
                t("./Animation")
            }
            s.prototype.update = function() {
                for (var t = 0; t < this.animations.length; t++) this.animations[t].tick()
            }, s.prototype.render = function() {
                for (var t = [], i = 0; i < this.animations.length; i++) this.animations[i].normalizedTime > 0 && t.push(this.animations[i].render()), this.animations[i].isDead() && this.animations.splice(this.animations.indexOf(this.animations[i]), 1);
                return t
            }, s.prototype.emit = function(t) {
                "prerender" == t && (this.update(), this.render())
            }, s.prototype.addAnimation = function(t) {
                -1 == this.animations.indexOf(t) && this.animations.push(t)
            }, s.prototype.removeAnimation = function(t) {
                t.setDead(!0)
            }, s.prototype.getTime = function() {
                return this.timer.getTime()
            }, e.exports = s
        }), define("famous-animation/CubicBezier", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                var i = [
                    [1, 0, 0, 0],
                    [0, 0, 1, 0],
                    [-3, 3, -2, -1],
                    [2, -2, 1, 1]
                ];
                t = t || [0, 1, 0, 0], this.coef = [0, 0, 0, 0];
                for (var e = 0; 4 > e; e++) for (var s = 0; 4 > s; s++) this.coef[e] += i[e][s] * t[s]
            }
            s.prototype.create = function() {
                var t = this;
                return function(i) {
                    i = i || 0;
                    var e = t.coef;
                    return e[0] + e[1] * i + e[2] * i * i + e[3] * i * i * i
                }
            }, e.exports = s
        }), define("famous-math/Vector", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e) {
                return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
            }
            var o = new s(0, 0, 0);
            s.prototype.add = function(t) {
                return o.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
            }, s.prototype.sub = function(t) {
                return o.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
            }, s.prototype.mult = function(t) {
                return o.setXYZ(t * this.x, t * this.y, t * this.z)
            }, s.prototype.div = function(t) {
                return this.mult(1 / t)
            }, s.prototype.cross = function(t) {
                var i = this.x,
                    e = this.y,
                    s = this.z,
                    n = t.x,
                    r = t.y,
                    a = t.z;
                return o.setXYZ(s * r - e * a, i * a - s * n, e * n - i * r)
            }, s.prototype.equals = function(t) {
                return t.x == this.x && t.y == this.y && t.z == this.z
            }, s.prototype.rotateX = function(t) {
                var i = this.x,
                    e = this.y,
                    s = this.z,
                    n = Math.cos(t),
                    r = Math.sin(t);
                return o.setXYZ(i, e * n - s * r, e * r + s * n)
            }, s.prototype.rotateY = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(n * a + e * r, s, n * r - e * a)
            }, s.prototype.rotateZ = function(t) {
                var i = this.x,
                    e = this.y,
                    s = this.z,
                    n = Math.cos(t),
                    r = Math.sin(t);
                return o.setXYZ(i * n - e * r, i * r + e * n, s)
            }, s.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }, s.prototype.normSquared = function() {
                return this.dot(this)
            }, s.prototype.norm = function() {
                return Math.sqrt(this.normSquared())
            }, s.prototype.normalize = function(t) {
                t = void 0 !== t ? t : 1;
                var i = 1e-7,
                    e = this.norm();
                return Math.abs(e) > i ? o.set(this.mult(t / e)) : o.setXYZ(t, 0, 0)
            }, s.prototype.clone = function() {
                return new s(this)
            }, s.prototype.isZero = function() {
                return !(this.x || this.y || this.z)
            }, s.prototype.setFromArray = function(t) {
                return this.x = t[0], this.y = t[1], this.z = t[2] || 0, this
            }, s.prototype.set = function(t) {
                return t instanceof Array && this.setFromArray(t), t instanceof s && (this.x = t.x, this.y = t.y, this.z = t.z), "number" == typeof t && (this.x = t, this.y = 0, this.z = 0), this !== o && o.clear(), this
            }, s.prototype.put = function(t) {
                t.set(o)
            }, s.prototype.setXYZ = function(t, i, e) {
                return o.clear(), this.x = t, this.y = i, this.z = e, this
            }, s.prototype.clear = function() {
                this.x = 0, this.y = 0, this.z = 0
            }, s.prototype.cap = function(t) {
                if (1 / 0 === t) return o.set(this);
                var i = this.norm();
                return i > t ? o.set(this.mult(t / i)) : o.set(this)
            }, s.prototype.project = function(t) {
                return t.mult(this.dot(t))
            }, s.prototype.reflectAcross = function(t) {
                return t.set(t.normalize()), o.set(this.sub(this.project(t).mult(2)))
            }, s.prototype.toArray = function() {
                return [this.x, this.y, this.z]
            }, s.prototype.get = function() {
                return this.toArray()
            }, e.exports = s
        }), define("famous-math/Quaternion", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e, s) {
                return 1 === arguments.length ? this.set(t) : (this.w = void 0 !== t ? t : 1, this.x = void 0 !== i ? i : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== s ? s : 0), this
            }
            var o = new s(1, 0, 0, 0);
            s.prototype.add = function(t) {
                return o.setWXYZ(this.w + t.w, this.x + t.x, this.y + t.y, this.z + t.z)
            }, s.prototype.sub = function(t) {
                return o.setWXYZ(this.w - t.w, this.x - t.x, this.y - t.y, this.z - t.z)
            }, s.prototype.scalarDivide = function(t) {
                return this.scalarMultiply(1 / t)
            }, s.prototype.scalarMultiply = function(t) {
                return o.setWXYZ(this.w * t, this.x * t, this.y * t, this.z * t)
            }, s.prototype.multiply = function(t) {
                var i = this.x,
                    e = this.y,
                    s = this.z,
                    n = this.w,
                    r = t.x,
                    a = t.y,
                    h = t.z,
                    u = t.w || 0;
                return o.setWXYZ(n * u - i * r - e * a - s * h, i * u + r * n + a * s - e * h, e * u + a * n + i * h - r * s, s * u + h * n + r * e - i * a)
            };
            var n = new s(1, 0, 0, 0);
            s.prototype.rotateVector = function(t) {
                return n.set(this.conj()), o.set(this.multiply(t).multiply(n))
            }, s.prototype.inverse = function() {
                return o.set(this.conj().scalarDivide(this.normSquared()))
            }, s.prototype.negate = function() {
                return this.scalarMultiply(-1)
            }, s.prototype.conj = function() {
                return o.setWXYZ(this.w, -this.x, -this.y, -this.z)
            }, s.prototype.normalize = function(t) {
                return t = void 0 === t ? 1 : t, this.scalarDivide(t * this.norm())
            }, s.prototype.makeFromAngleAndAxis = function(t, i) {
                var e = i.normalize(),
                    s = .5 * t,
                    o = -Math.sin(s);
                return this.x = o * e.x, this.y = o * e.y, this.z = o * e.z, this.w = Math.cos(s), this
            }, s.prototype.setWXYZ = function(t, i, e, s) {
                return o.clear(), this.w = t, this.x = i, this.y = e, this.z = s, this
            }, s.prototype.set = function(t) {
                return t instanceof Array ? (this.w = t[0], this.x = t[1], this.y = t[2], this.z = t[3]) : (this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z), this !== o && o.clear(), this
            }, s.prototype.put = function(t) {
                t.set(o)
            }, s.prototype.clone = function() {
                return new s(this)
            }, s.prototype.clear = function() {
                return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
            }, s.prototype.isEqual = function(t) {
                return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z
            }, s.prototype.dot = function(t) {
                return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
            }, s.prototype.normSquared = function() {
                return this.dot(this)
            }, s.prototype.norm = function() {
                return Math.sqrt(this.normSquared())
            }, s.prototype.isZero = function() {
                return !(this.x || this.y || this.z)
            }, s.prototype.getMatrix = function() {
                var t = this.normalize(1),
                    i = t.x,
                    e = t.y,
                    s = t.z,
                    o = t.w;
                return [1 - 2 * e * e - 2 * s * s, 2 * i * e - 2 * s * o, 2 * i * s + 2 * e * o, 0, 2 * i * e + 2 * s * o, 1 - 2 * i * i - 2 * s * s, 2 * e * s - 2 * i * o, 0, 2 * i * s - 2 * e * o, 2 * e * s + 2 * i * o, 1 - 2 * i * i - 2 * e * e, 0, 0, 0, 0, 1]
            }, s.prototype.getMatrix3x3 = function() {
                var t = this.normalize(1),
                    i = t.x,
                    e = t.y,
                    s = t.z,
                    o = t.w;
                return [[1 - 2 * e * e - 2 * s * s, 2 * i * e + 2 * s * o, 2 * i * s - 2 * e * o], [2 * i * e - 2 * s * o, 1 - 2 * i * i - 2 * s * s, 2 * e * s + 2 * i * o], [2 * i * s + 2 * e * o, 2 * e * s - 2 * i * o, 1 - 2 * i * i - 2 * e * e]]
            };
            var r = 1e-5;
            s.prototype.slerp = function(t, i) {
                var e, s, n, a, h;
                return s = this.dot(t), 1 - s > r ? (e = Math.acos(s), n = Math.sin(e), a = Math.sin((1 - i) * e) / n, h = Math.sin(i * e) / n) : (a = 1 - i, h = i), o.set(this.scalarMultiply(a / h).add(t).multiply(h))
            }, e.exports = s
        }), define("famous-color/Color", ["require", "exports", "module", "famous-utils/Utils"], function(t, i, e) {
            function s(t, i, e, o) {
                t instanceof s ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = t.getHex()) : (this.r = "undefined" == typeof t ? 255 : t, this.g = "undefined" == typeof i ? 255 : i, this.b = "undefined" == typeof e ? 255 : e, this.a = "undefined" == typeof o ? 1 : o, this.hex = this.getHex())
            }
            function o(t, i, e) {
                return 0 > e && (e += 1), e > 1 && (e -= 1), 1 / 6 > e ? t + 6 * (i - t) * e : .5 > e ? i : 2 / 3 > e ? t + (i - t) * (2 / 3 - e) * 6 : t
            }
            var n = t("famous-utils/Utils");
            s.prototype.getHue = function() {
                var t = this.r / 255,
                    i = this.g / 255,
                    e = this.b / 255,
                    s = Math.max(t, i, e),
                    o = Math.min(t, i, e),
                    n = 0,
                    r = s - o;
                switch (s) {
                    case t:
                        n = (i - e) / r + (e > i ? 6 : 0);
                        break;
                    case i:
                        n = (e - t) / r + 2;
                        break;
                    case e:
                        n = (t - i) / r + 4
                }
                return n *= 60, isNaN(n) && (n = 0), n
            }, s.prototype.getSaturation = function() {
                var t, i = this.r / 255,
                    e = this.g / 255,
                    s = this.b / 255,
                    o = Math.max(i, e, s),
                    n = Math.min(i, e, s),
                    r = (o + n) / 2;
                if (o == n) h = t = 0;
                else {
                    var a = o - n;
                    switch (t = r > .5 ? a / (2 - o - n) : a / (o + n), o) {
                        case i:
                            h = (e - s) / a + (s > e ? 6 : 0);
                            break;
                        case e:
                            h = (s - i) / a + 2;
                            break;
                        case s:
                            h = (i - e) / a + 4
                    }
                    h *= 60
                }
                return 100 * t
            }, s.prototype.getBrightness = function() {
                var t = this.r / 255,
                    i = this.g / 255,
                    e = this.b / 255;
                return 100 * Math.max(t, i, e)
            }, s.prototype.getLightness = function() {
                var t = this.r / 255,
                    i = this.g / 255,
                    e = this.b / 255;
                return (Math.max(t, i, e) + Math.min(t, i, e)) / 2 * 100
            }, s.prototype.getHex = function() {
                function t(t) {
                    var i = t.toString(16);
                    return 1 === i.length ? "0" + i : i
                }
                return "#" + t(this.r) + t(this.g) + t(this.b)
            }, s.prototype.getHSL = function() {
                var t, i, e = this.r / 255,
                    s = this.g / 255,
                    o = this.b / 255,
                    n = Math.max(e, s, o),
                    r = Math.min(e, s, o),
                    a = (n + r) / 2;
                if (n == r) t = i = 0;
                else {
                    var h = n - r;
                    switch (i = a > .5 ? h / (2 - n - r) : h / (n + r), n) {
                        case e:
                            t = (s - o) / h + (o > s ? 6 : 0);
                            break;
                        case s:
                            t = (o - e) / h + 2;
                            break;
                        case o:
                            t = (e - s) / h + 4
                    }
                    t *= 60
                }
                return [t, 100 * i, 100 * a]
            }, s.prototype.setFromHSL = function(t, i, e) {
                t /= 360, i /= 100, e /= 100;
                var s, n, r;
                if (0 === i) s = n = r = e;
                else {
                    var a = .5 > e ? e * (1 + i) : e + i - e * i,
                        h = 2 * e - a;
                    s = o(h, a, t + 1 / 3), n = o(h, a, t), r = o(h, a, t - 1 / 3)
                }
                return this.r = Math.round(255 * s), this.g = Math.round(255 * n), this.b = Math.round(255 * r), this.hex = this.getHex(), this
            }, s.prototype.setFromHex = function(t) {
                return t = "#" === t.charAt(0) ? t.substring(1, t.length) : t, 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), this.hex = "#" + t, this.r = parseInt(t.substring(0, 2), 16), this.g = parseInt(t.substring(2, 4), 16), this.b = parseInt(t.substring(4, 6), 16), this
            }, s.prototype.setFromRGBA = function(t, i, e, s) {
                return this.r = t, this.g = i, this.b = e, s && (this.a = s), this.hex = this.getHex(), this
            }, s.prototype.setHue = function(t) {
                var i = this.getHSL();
                return this.setFromHSL(t, i[1], i[2])
            }, s.prototype.setSaturation = function(t) {
                var i = this.getHSL();
                return this.setFromHSL(i[0], t, i[2])
            }, s.prototype.setLightness = function(t) {
                var i = this.getHSL();
                return this.setFromHSL(i[0], i[1], t)
            }, s.prototype.getCSSBackgroundColor = function() {
                return n.backgroundColor(this.r, this.b, this.g, this.a)
            }, s.prototype.getCSSColor = function() {
                return n.color(this.r, this.g, this.b, this.a)
            }, s.prototype.clone = function() {
                return new s(this.r, this.g, this.b, this.a)
            }, s.prototype.toNormalizeColorArray = function() {
                return [this.r / 255, this.g / 255, this.b / 255, this.a]
            }, s.prototype.lerp = function(t, i) {
                var e = this.getHSL(),
                    o = t.getHSL(),
                    n = e[0] + (o[0] - e[0]) * i,
                    r = e[1] + (o[1] - e[1]) * i,
                    a = e[2] + (o[2] - e[2]) * i,
                    h = new s;
                return h.setFromHSL(n, r, a), h
            }, e.exports = s
        }), define("famous-animation/GenericAnimation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion", "./Animation", "./AnimationEngine", "./Easing", "famous-utils/Utils", "famous-color/Color"], function(t, i, e) {
            function s(t) {
                a.call(this, t), this.surface = t.surface, this.renderSurface = t.renderSurface || !1, this.easing = t.easing || h.inOutCubicNorm, this.animateColor = !1, this.startColor = t.startColor || new p(255, 255, 255, 1), this.endColor = t.endColor || new p(255, 255, 255, 1), this.startColorHSL = new n, this.endColorHSL = new n, this.deltaColorHSL = new n, this.currentColorHSL = new n, this.animateOpacity = !1, this.startOpacity = t.startOpacity || 0, this.endOpacity = t.endOpacity || 0, this.deltaOpacity = 0, this.animatePosition = !1, this.startPosition = t.startPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.endPosition = t.endPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.currentPosition = new n(0, 0, 0), this.deltaPosition = new n(0, 0, 0), this.animateOrientation = !1, this.startOrientation = t.startOrientation || new r, this.endOrientation = t.endOrientation || new r, this.currentOrientation = t.currentOrientation || new r, this.animateRadius = !1, this.startRadius = t.startRadius || 0, this.endRadius = t.endRadius || 0, this.deltaRadius = 0, this.currentRadius = 0
            }
            var o = (t("famous/Surface"), t("famous/Matrix")),
                n = t("famous-math/Vector"),
                r = t("famous-math/Quaternion"),
                a = t("./Animation"),
                h = (t("./AnimationEngine"), t("./Easing")),
                u = t("famous-utils/Utils"),
                p = t("famous-color/Color");
            s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.prototype.activate = function() {
                var t = this.startColor.getHSL(),
                    i = this.endColor.getHSL();
                this.startColorHSL.setXYZ(t[0], t[1], t[2]), this.endColorHSL.setXYZ(i[0], i[1], i[2]), this.endColorHSL.sub(this.startColorHSL, this.deltaColorHSL), this.currentColorHSL.set(this.startColorHSL), this.animateColor = this.startColor.r == this.endColor.r && this.startColor.g == this.endColor.g && this.startColor.b == this.endColor.b && this.startColor.a == this.endColor.a ? !1 : !0, this.deltaOpacity = this.endOpacity - this.startOpacity, this.animateOpacity = Math.abs(this.deltaOpacity) > 0 ? !0 : !1, this.endPosition.sub(this.startPosition, this.deltaPosition), this.currentPosition.set(this.startPosition), this.animatePosition = this.deltaPosition.isZero() ? !1 : !0, this.animateOrientation = this.startOrientation.isEqual(this.endOrientation) ? !1 : !0, this.deltaRadius = this.endRadius - this.startRadius, this.currentRadius = this.startRadius, this.animateRadius = 0 === this.deltaRadius ? !1 : !0
            }, s.prototype.tick = function() {
                if (this.playing && !this.halted) {
                    if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = u.clamp(this.normalizedTime, 0, 1), this._update(), this.update(), this.end(), void 0;
                    this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this._update(), this.update())
                }
            }, s.prototype._update = function() {
                var t = this.easing(this.normalizedTime);
                this.animateColor && (this.deltaColorHSL.mult(t, this.currentColorHSL), this.currentColorHSL.add(this.startColorHSL, this.currentColorHSL), this.surface.setProperties(u.backgroundColorHSL(this.currentColorHSL.x, this.currentColorHSL.y, this.currentColorHSL.z, 1))), this.animateOpacity && (this.surface.opacity = this.startOpacity + this.deltaOpacity * t), (this.animatePosition || this.animateOrientation) && (this.deltaPosition.mult(t, this.currentPosition), this.currentPosition.add(this.startPosition, this.currentPosition), this.startOrientation.slerp(this.endOrientation, t, this.currentOrientation), this.surface.mtx = o.move(this.currentOrientation.getMatrix(), this.currentPosition.toArray())), this.animateRadius && (this.currentRadius = this.startRadius + this.deltaRadius * t, this.surface.setProperties(u.borderRadius(this.currentRadius)))
            }, s.prototype.render = function() {
                return this.renderSurface && !this.dead && this.normalizedTime > 0 ? {
                    transform: this.surface.mtx,
                    opacity: this.surface.opacity,
                    target: this.surface.render()
                } : void 0
            }, s.prototype.setStartColor = function(t) {
                this.startColor = t
            }, s.prototype.setEndColor = function(t) {
                this.endColor = t
            }, s.prototype.getStartColor = function() {
                return this.startColor
            }, s.prototype.getEndColor = function() {
                return this.endColor
            }, s.prototype.setStartPosition = function(t) {
                this.startPosition = t
            }, s.prototype.setStartPositionX = function(t) {
                this.startPosition.x = t
            }, s.prototype.setStartPositionY = function(t) {
                this.startPosition.y = t
            }, s.prototype.setStartPositionZ = function(t) {
                this.startPosition.z = t
            }, s.prototype.setEndPosition = function(t) {
                this.endPosition = t
            }, s.prototype.setEndPositionX = function(t) {
                this.endPosition.setX(t)
            }, s.prototype.setEndPositionY = function(t) {
                this.endPosition.setY(t)
            }, s.prototype.setEndPositionZ = function(t) {
                this.endPosition.setZ(t)
            }, s.prototype.getEndPosition = function() {
                return this.endPosition
            }, s.prototype.getStartPosition = function() {
                return this.startPosition
            }, s.prototype.getCurrentPosition = function() {
                return this.currentPosition
            }, s.prototype.setStartOpacity = function(t) {
                this.startOpacity = t
            }, s.prototype.setEndOpacity = function(t) {
                this.endOpacity = t
            }, s.prototype.getStartOpacity = function() {
                return this.startOpacity
            }, s.prototype.getEndOpacity = function() {
                return this.endOpacity
            }, s.prototype.setStartRadius = function(t) {
                this.startRadius = t
            }, s.prototype.setEndRadius = function(t) {
                this.endRadius = t
            }, s.prototype.getCurrentRadius = function() {
                return this.currentRadius
            }, s.prototype.getStartRadius = function() {
                return this.startRadius
            }, s.prototype.getEndRadius = function() {
                return this.endRadius
            }, s.prototype.setStartOrientation = function(t) {
                this.startOrientation = t
            }, s.prototype.setEndOrientation = function(t) {
                this.endOrientation = t
            }, s.prototype.getEndOrientation = function() {
                return this.endOrientation
            }, s.prototype.getStartOrientation = function() {
                return this.startOrientation
            }, s.prototype.setEasing = function(t) {
                this.easing = t
            }, s.prototype.setSurface = function(t) {
                this.surface = t
            }, s.prototype.setEndValuesToStartValues = function() {
                this.startColor = this.endColor.clone(), this.startOpacity = this.endOpacity, this.startPosition.set(this.endPosition), this.startOrientation.set(this.endOrientation), this.startRadius = this.endRadius
            }, e.exports = s
        }), define("famous-animation/Idle", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i) {
                this.idleFn = t, this.timeout = i, this.enabled = i > 0, this.reset()
            }
            s.prototype.timeoutIn = function(t) {
                this.lastTouchTime = (new Date).getTime() - this.timeout + t
            }, s.prototype.enable = function() {
                this.enabled = !0
            }, s.prototype.disable = function() {
                this.enabled = !1
            }, s.prototype.setIdleFunction = function(t) {
                this.idleFn = t
            }, s.prototype.update = function() {
                if (!this.idling && this.enabled && this.idleFn) {
                    var t = (new Date).getTime();
                    t - this.lastTouchTime > this.timeout && (this.idling = !0, this.idleFn.call(this))
                }
            }, s.prototype.isIdling = function() {
                return this.idling
            }, s.prototype.reset = function() {
                this.lastTouchTime = (new Date).getTime(), this.idling = !1
            }, s.prototype.emit = function() {
                this.reset()
            }, e.exports = s
        }), define("famous-animation/PiecewiseCubicBezier", ["require", "exports", "module", "./CubicBezier"], function(t, i, e) {
            function s(t) {
                t = t || {}, this.split = t.split || .5;
                var i = t.overshoot || 0,
                    e = t.vLeft || [0, 1 + i, 0, 0],
                    s = t.vRight || [1 + i, 1, 0, 0];
                this.bezLeft = new o(e).create(), this.bezRight = new o(s).create()
            }
            var o = t("./CubicBezier");
            s.prototype.create = function() {
                var t = this;
                return function(i) {
                    i = i || 0;
                    var e, s = t.split;
                    return s > i ? (e = i / s, t.bezLeft(e)) : (e = (i - s) / (1 - s), t.bezRight(e))
                }
            }, e.exports = s
        }), define("famous-animation/RegisterEasing", ["require", "exports", "module", "./Easing", "famous/TweenTransition"], function(t) {
            function i() {
                for (var t = /norm/gi, i = e(o).filter(function(i) {
                    return t.test(i)
                }).sort(), s = {}, n = 0; n < i.length; n++) s[i[n]] = o[i[n]];
                return s
            }
            function e(t) {
                var i = [];
                for (key in t) t.hasOwnProperty(key) && i.push(key);
                return i
            }
            function s() {
                var t = i();
                for (var e in t) n.registerCurve(e, t[e])
            }
            var o = t("./Easing"),
                n = t("famous/TweenTransition");
            s()
        }), define("famous-animation/Sequence", ["require", "exports", "module"], function(t, i, e) {
            function s() {
                this.startTime = 0, this.setupPos = 0, this.schedule = [], this.seqLoc = -1
            }
            s.prototype._execute = function(t) {
                for (this.seqLoc < 0 && (this.seqLoc = 0); this.seqLoc < this.schedule.length && this.schedule[this.seqLoc].pos <= t;) this.schedule[this.seqLoc].action.call(this), this.seqLoc++
            }, s.prototype.update = function() {
                if (!(this.seqLoc < 0 || this.seqLoc >= this.schedule.length)) {
                    var t = (new Date).getTime() - this.startTime;
                    this._execute(t)
                }
            }, s.prototype.at = function(t, i) {
                this.schedule.push({
                    pos: t,
                    action: i
                }), this.setupPos = t
            }, s.prototype.after = function(t, i) {
                this.at(this.setupPos + t, i)
            }, s.prototype.play = function(t) {
                this.schedule.sort(function(t, i) {
                    return t.pos - i.pos
                }), this.startTime = (new Date).getTime();
                for (var i = 0; i < this.schedule.length && this.schedule[i].pos < t;) i++;
                this.seqLoc = i
            }, s.prototype.fastForward = function(t) {
                "undefined" == typeof t && (t = 1 / 0), this._execute(t)
            }, s.prototype.stop = function() {
                this.seqLoc = -1
            }, e.exports = s
        }), define("famous-color/ColorPalette", ["require", "exports", "module", "./Color"], function(t, i, e) {
            function s(t) {
                this.colors = t
            }
            t("./Color");
            s.prototype.getColor = function(t) {
                return this.colors[t % this.colors.length]
            }, s.prototype.getCSS = function(t) {
                return this.getColor(t).getCSSColor()
            }, s.prototype.getLighestColor = function() {
                for (var t, i = 0, e = 0; e < this.colors.length; e++) {
                    var s = this.colors[e].getLightness();
                    s > i && (t = this.colors[e], i = s)
                }
                return t
            }, s.prototype.getDarkestColor = function() {
                for (var t, i = 100, e = 0; e < this.colors.length; e++) {
                    var s = this.colors[e].getLightness();
                    i > s && (t = this.colors[e], i = s)
                }
                return t
            }, s.prototype.getCount = function() {
                return this.colors.length
            }, e.exports = s
        }), define("famous-color/ColorPalettes", ["require", "exports", "module", "./Color", "./ColorPalette"], function(t, i, e) {
            function s() {}
            function o(t) {
                return new r(t[0], t[1], t[2], t[3])
            }
            function n(t) {
                for (var i = [], e = 0, s = t.length; s > e; e++) i.push(o(t[e]));
                return new a(i)
            }
            var r = t("./Color"),
                a = t("./ColorPalette"),
                h = [
                    [
                        [53, 92, 125, 1],
                        [108, 91, 123, 1],
                        [192, 108, 132, 1],
                        [246, 114, 128, 1],
                        [248, 177, 149, 1]
                    ],
                    [
                        [27, 21, 33, 1],
                        [181, 172, 1, 1],
                        [212, 30, 69, 1],
                        [232, 110, 28, 1],
                        [236, 186, 9, 1]
                    ],
                    [
                        [63, 54, 42, 1],
                        [231, 69, 13, 1],
                        [250, 157, 4, 1],
                        [251, 222, 3, 1],
                        [254, 245, 150, 1]
                    ],
                    [
                        [10, 103, 137, 1],
                        [10, 153, 111, 1],
                        [207, 6, 56, 1],
                        [250, 102, 50, 1],
                        [254, 205, 35, 1]
                    ],
                    [
                        [157, 85, 105, 1],
                        [192, 227, 217, 1],
                        [202, 55, 99, 1],
                        [227, 237, 195, 1],
                        [235, 113, 84, 1]
                    ],
                    [
                        [110, 110, 110, 1],
                        [145, 217, 255, 1],
                        [237, 255, 135, 1],
                        [255, 133, 167, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [25, 26, 36, 1],
                        [51, 44, 44, 1],
                        [250, 101, 87, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [27, 103, 107, 1],
                        [81, 149, 72, 1],
                        [136, 196, 37, 1],
                        [190, 242, 2, 1],
                        [234, 253, 230, 1]
                    ],
                    [
                        [31, 11, 12, 1],
                        [48, 5, 17, 1],
                        [179, 84, 79, 1],
                        [214, 195, 150, 1],
                        [231, 252, 207, 1]
                    ],
                    [
                        [172, 248, 248, 1],
                        [223, 235, 24, 1],
                        [230, 95, 95, 1],
                        [235, 54, 24, 1],
                        [235, 207, 24, 1]
                    ],
                    [
                        [196, 182, 109, 1],
                        [213, 39, 5, 1],
                        [240, 211, 119, 1],
                        [243, 232, 228, 1],
                        [247, 109, 60, 1]
                    ],
                    [
                        [11, 72, 107, 1],
                        [59, 134, 134, 1],
                        [121, 189, 154, 1],
                        [168, 219, 168, 1],
                        [207, 240, 158, 1]
                    ],
                    [
                        [0, 188, 209, 1],
                        [118, 211, 222, 1],
                        [174, 232, 251, 1],
                        [176, 248, 255, 1],
                        [254, 249, 240, 1]
                    ],
                    [
                        [85, 73, 57, 1],
                        [112, 108, 77, 1],
                        [241, 230, 143, 1],
                        [255, 100, 100, 1],
                        [255, 151, 111, 1]
                    ],
                    [
                        [36, 244, 161, 1],
                        [178, 42, 58, 1],
                        [199, 244, 36, 1],
                        [244, 36, 182, 1],
                        [249, 246, 49, 1]
                    ],
                    [
                        [108, 144, 134, 1],
                        [169, 204, 24, 1],
                        [207, 73, 108, 1],
                        [235, 234, 188, 1],
                        [252, 84, 99, 1]
                    ],
                    [
                        [78, 79, 75, 1],
                        [130, 35, 57, 1],
                        [247, 62, 62, 1],
                        [255, 119, 61, 1],
                        [255, 213, 115, 1]
                    ],
                    [
                        [121, 28, 49, 1],
                        [145, 213, 152, 1],
                        [191, 178, 64, 1],
                        [202, 51, 68, 1],
                        [237, 126, 80, 1]
                    ],
                    [
                        [104, 73, 83, 1],
                        [127, 191, 151, 1],
                        [182, 219, 145, 1],
                        [250, 107, 41, 1],
                        [253, 158, 41, 1]
                    ],
                    [
                        [0, 203, 231, 1],
                        [0, 218, 60, 1],
                        [223, 21, 26, 1],
                        [244, 243, 40, 1],
                        [253, 134, 3, 1]
                    ],
                    [
                        [56, 222, 231, 1],
                        [232, 255, 0, 1],
                        [254, 62, 71, 1],
                        [255, 130, 0, 1]
                    ],
                    [
                        [27, 32, 38, 1],
                        [75, 89, 107, 1],
                        [153, 228, 255, 1],
                        [247, 79, 79, 1],
                        [255, 59, 59, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [0, 173, 239, 1],
                        [236, 0, 140, 1],
                        [255, 242, 0, 1]
                    ],
                    [
                        [47, 43, 173, 1],
                        [173, 43, 173, 1],
                        [228, 38, 146, 1],
                        [247, 21, 104, 1],
                        [247, 219, 21, 1]
                    ],
                    [
                        [101, 150, 158, 1],
                        [171, 20, 44, 1],
                        [189, 219, 222, 1],
                        [205, 212, 108, 1],
                        [219, 217, 210, 1]
                    ],
                    [
                        [97, 24, 36, 1],
                        [193, 47, 42, 1],
                        [247, 255, 238, 1],
                        [254, 222, 123, 1],
                        [255, 101, 64, 1]
                    ],
                    [
                        [118, 85, 66, 1],
                        [124, 231, 163, 1],
                        [220, 93, 110, 1],
                        [255, 174, 60, 1],
                        [255, 229, 156, 1]
                    ],
                    [
                        [63, 184, 175, 1],
                        [127, 199, 175, 1],
                        [218, 216, 167, 1],
                        [255, 61, 127, 1],
                        [255, 158, 157, 1]
                    ],
                    [
                        [217, 251, 223, 1],
                        [219, 255, 210, 1],
                        [231, 254, 235, 1],
                        [234, 255, 210, 1],
                        [243, 255, 210, 1]
                    ],
                    [
                        [0, 23, 42, 1],
                        [27, 139, 163, 1],
                        [94, 202, 214, 1],
                        [178, 222, 249, 1],
                        [206, 254, 255, 1]
                    ],
                    [
                        [225, 245, 196, 1],
                        [237, 229, 116, 1],
                        [249, 212, 35, 1],
                        [252, 145, 58, 1],
                        [255, 78, 80, 1]
                    ],
                    [
                        [7, 9, 61, 1],
                        [11, 16, 140, 1],
                        [12, 15, 102, 1],
                        [14, 78, 173, 1],
                        [16, 127, 201, 1]
                    ],
                    [
                        [5, 177, 240, 1],
                        [5, 232, 240, 1],
                        [94, 87, 230, 1],
                        [230, 87, 149, 1],
                        [255, 5, 113, 1]
                    ],
                    [
                        [48, 0, 24, 1],
                        [90, 61, 49, 1],
                        [131, 123, 71, 1],
                        [173, 184, 95, 1],
                        [229, 237, 184, 1]
                    ],
                    [
                        [111, 191, 162, 1],
                        [191, 184, 174, 1],
                        [242, 199, 119, 1],
                        [242, 230, 194, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [22, 147, 165, 1],
                        [69, 181, 196, 1],
                        [126, 206, 202, 1],
                        [160, 222, 214, 1],
                        [199, 237, 232, 1]
                    ],
                    [
                        [8, 26, 48, 1],
                        [50, 64, 90, 1],
                        [59, 100, 128, 1],
                        [155, 153, 130, 1],
                        [255, 134, 17, 1]
                    ],
                    [
                        [74, 186, 176, 1],
                        [152, 33, 0, 1],
                        [255, 211, 0, 1],
                        [255, 245, 158, 1]
                    ],
                    [
                        [42, 135, 50, 1],
                        [49, 48, 66, 1],
                        [107, 85, 48, 1],
                        [255, 109, 36, 1],
                        [255, 235, 107, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [25, 134, 219, 1],
                        [105, 172, 224, 1],
                        [149, 199, 24, 1],
                        [184, 212, 40, 1]
                    ],
                    [
                        [64, 0, 20, 1],
                        [127, 0, 40, 1],
                        [191, 0, 59, 1],
                        [229, 0, 71, 1],
                        [255, 0, 79, 1]
                    ],
                    [
                        [56, 69, 59, 1],
                        [78, 133, 136, 1],
                        [255, 70, 84, 1],
                        [255, 213, 106, 1],
                        [255, 254, 211, 1]
                    ],
                    [
                        [29, 44, 143, 1],
                        [57, 179, 162, 1],
                        [209, 146, 191, 1],
                        [222, 75, 107, 1],
                        [252, 180, 121, 1]
                    ],
                    [
                        [14, 36, 48, 1],
                        [232, 213, 183, 1],
                        [232, 213, 185, 1],
                        [245, 179, 73, 1],
                        [252, 58, 81, 1]
                    ],
                    [
                        [0, 210, 255, 1],
                        [222, 255, 0, 1],
                        [255, 0, 168, 1],
                        [255, 66, 0, 1]
                    ],
                    [
                        [21, 99, 105, 1],
                        [51, 53, 84, 1],
                        [169, 186, 181, 1],
                        [216, 69, 148, 1],
                        [236, 196, 89, 1]
                    ],
                    [
                        [105, 210, 231, 1],
                        [167, 219, 216, 1],
                        [224, 228, 204, 1],
                        [243, 134, 48, 1],
                        [250, 105, 0, 1]
                    ],
                    [
                        [122, 106, 83, 1],
                        [148, 140, 117, 1],
                        [153, 178, 183, 1],
                        [213, 222, 217, 1],
                        [217, 206, 178, 1]
                    ],
                    [
                        [34, 104, 136, 1],
                        [57, 142, 182, 1],
                        [255, 162, 0, 1],
                        [255, 214, 0, 1],
                        [255, 245, 0, 1]
                    ],
                    [
                        [2, 100, 117, 1],
                        [194, 163, 79, 1],
                        [251, 184, 41, 1],
                        [254, 251, 175, 1],
                        [255, 229, 69, 1]
                    ],
                    [
                        [214, 37, 77, 1],
                        [246, 215, 107, 1],
                        [253, 235, 169, 1],
                        [255, 84, 117, 1],
                        [255, 144, 54, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [124, 180, 144, 1],
                        [211, 25, 0, 1],
                        [255, 102, 0, 1],
                        [255, 242, 175, 1]
                    ],
                    [
                        [35, 116, 222, 1],
                        [38, 38, 38, 1],
                        [87, 54, 255, 1],
                        [231, 255, 54, 1],
                        [255, 54, 111, 1]
                    ],
                    [
                        [64, 18, 44, 1],
                        [89, 186, 169, 1],
                        [101, 98, 115, 1],
                        [216, 241, 113, 1],
                        [252, 255, 217, 1]
                    ],
                    [
                        [126, 148, 158, 1],
                        [174, 194, 171, 1],
                        [235, 206, 160, 1],
                        [252, 119, 101, 1],
                        [255, 51, 95, 1]
                    ],
                    [
                        [75, 73, 11, 1],
                        [117, 116, 73, 1],
                        [226, 223, 154, 1],
                        [235, 229, 77, 1],
                        [255, 0, 81, 1]
                    ],
                    [
                        [159, 112, 69, 1],
                        [183, 98, 5, 1],
                        [208, 167, 124, 1],
                        [253, 169, 43, 1],
                        [254, 238, 171, 1]
                    ],
                    [
                        [38, 37, 28, 1],
                        [160, 232, 183, 1],
                        [235, 10, 68, 1],
                        [242, 100, 61, 1],
                        [242, 167, 61, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [67, 110, 217, 1],
                        [120, 0, 0, 1],
                        [216, 216, 216, 1],
                        [240, 24, 0, 1]
                    ],
                    [
                        [51, 51, 51, 1],
                        [131, 163, 0, 1],
                        [158, 12, 57, 1],
                        [226, 27, 90, 1],
                        [251, 255, 227, 1]
                    ],
                    [
                        [79, 156, 52, 1],
                        [108, 186, 85, 1],
                        [125, 210, 89, 1],
                        [158, 228, 70, 1],
                        [187, 255, 133, 1]
                    ],
                    [
                        [0, 44, 43, 1],
                        [7, 100, 97, 1],
                        [10, 131, 127, 1],
                        [255, 61, 0, 1],
                        [255, 188, 17, 1]
                    ],
                    [
                        [149, 207, 183, 1],
                        [240, 65, 85, 1],
                        [242, 242, 111, 1],
                        [255, 130, 58, 1],
                        [255, 247, 189, 1]
                    ],
                    [
                        [89, 168, 15, 1],
                        [158, 213, 76, 1],
                        [196, 237, 104, 1],
                        [226, 255, 158, 1],
                        [240, 242, 221, 1]
                    ],
                    [
                        [54, 42, 44, 1],
                        [189, 223, 38, 1],
                        [237, 38, 105, 1],
                        [238, 189, 97, 1],
                        [252, 84, 99, 1]
                    ],
                    [
                        [11, 246, 147, 1],
                        [38, 137, 233, 1],
                        [233, 26, 157, 1],
                        [246, 182, 11, 1],
                        [246, 242, 11, 1]
                    ],
                    [
                        [8, 0, 9, 1],
                        [65, 242, 221, 1],
                        [207, 242, 65, 1],
                        [249, 44, 130, 1],
                        [252, 241, 30, 1]
                    ],
                    [
                        [198, 164, 154, 1],
                        [198, 229, 217, 1],
                        [214, 129, 137, 1],
                        [233, 78, 119, 1],
                        [244, 234, 213, 1]
                    ],
                    [
                        [6, 71, 128, 1],
                        [8, 84, 199, 1],
                        [160, 194, 222, 1],
                        [205, 239, 255, 1],
                        [237, 237, 244, 1]
                    ],
                    [
                        [93, 66, 63, 1],
                        [124, 87, 83, 1],
                        [238, 128, 117, 1],
                        [255, 177, 169, 1],
                        [255, 233, 231, 1]
                    ],
                    [
                        [59, 129, 131, 1],
                        [237, 48, 60, 1],
                        [245, 99, 74, 1],
                        [250, 208, 137, 1],
                        [255, 156, 91, 1]
                    ],
                    [
                        [56, 166, 155, 1],
                        [104, 191, 101, 1],
                        [204, 217, 106, 1],
                        [242, 88, 53, 1],
                        [242, 218, 94, 1]
                    ],
                    [
                        [60, 197, 234, 1],
                        [70, 70, 70, 1],
                        [233, 234, 60, 1],
                        [246, 246, 246, 1]
                    ],
                    [
                        [97, 99, 130, 1],
                        [102, 36, 91, 1],
                        [105, 165, 164, 1],
                        [168, 196, 162, 1],
                        [229, 234, 164, 1]
                    ],
                    [
                        [10, 191, 188, 1],
                        [19, 116, 125, 1],
                        [41, 34, 31, 1],
                        [252, 53, 76, 1],
                        [252, 247, 197, 1]
                    ],
                    [
                        [7, 0, 4, 1],
                        [236, 67, 8, 1],
                        [252, 129, 10, 1],
                        [255, 172, 35, 1],
                        [255, 251, 214, 1]
                    ],
                    [
                        [0, 5, 1, 1],
                        [8, 138, 19, 1],
                        [237, 20, 9, 1],
                        [240, 249, 241, 1],
                        [247, 249, 21, 1]
                    ],
                    [
                        [64, 197, 132, 1],
                        [131, 218, 232, 1],
                        [170, 46, 154, 1],
                        [251, 35, 137, 1],
                        [251, 132, 137, 1]
                    ],
                    [
                        [64, 47, 58, 1],
                        [217, 119, 119, 1],
                        [255, 198, 158, 1],
                        [255, 219, 196, 1]
                    ],
                    [
                        [243, 96, 49, 1],
                        [249, 236, 95, 1],
                        [255, 102, 0, 1],
                        [255, 153, 0, 1],
                        [255, 204, 0, 1]
                    ],
                    [
                        [33, 90, 109, 1],
                        [45, 45, 41, 1],
                        [60, 162, 162, 1],
                        [146, 199, 163, 1],
                        [223, 236, 230, 1]
                    ],
                    [
                        [10, 42, 63, 1],
                        [101, 147, 160, 1],
                        [185, 204, 184, 1],
                        [219, 21, 34, 1],
                        [255, 239, 167, 1]
                    ],
                    [
                        [0, 160, 176, 1],
                        [106, 74, 60, 1],
                        [204, 51, 63, 1],
                        [235, 104, 65, 1],
                        [237, 201, 81, 1]
                    ],
                    [
                        [14, 141, 148, 1],
                        [67, 77, 83, 1],
                        [114, 173, 117, 1],
                        [233, 213, 88, 1],
                        [255, 171, 7, 1]
                    ],
                    [
                        [94, 159, 163, 1],
                        [176, 85, 116, 1],
                        [220, 209, 180, 1],
                        [248, 126, 123, 1],
                        [250, 184, 127, 1]
                    ],
                    [
                        [31, 31, 31, 1],
                        [122, 91, 62, 1],
                        [205, 189, 174, 1],
                        [250, 75, 0, 1],
                        [250, 250, 250, 1]
                    ],
                    [
                        [176, 230, 41, 1],
                        [180, 35, 16, 1],
                        [247, 207, 10, 1],
                        [250, 124, 7, 1],
                        [252, 231, 13, 1]
                    ],
                    [
                        [94, 65, 47, 1],
                        [120, 192, 168, 1],
                        [240, 120, 24, 1],
                        [240, 168, 48, 1],
                        [252, 235, 182, 1]
                    ],
                    [
                        [31, 26, 28, 1],
                        [98, 128, 125, 1],
                        [134, 158, 138, 1],
                        [201, 107, 30, 1],
                        [209, 205, 178, 1]
                    ],
                    [
                        [40, 60, 0, 1],
                        [100, 153, 125, 1],
                        [237, 143, 69, 1],
                        [241, 169, 48, 1],
                        [254, 204, 109, 1]
                    ],
                    [
                        [37, 2, 15, 1],
                        [143, 143, 143, 1],
                        [158, 30, 76, 1],
                        [236, 236, 236, 1],
                        [255, 17, 104, 1]
                    ],
                    [
                        [207, 108, 116, 1],
                        [244, 93, 120, 1],
                        [255, 112, 136, 1],
                        [255, 130, 153, 1],
                        [255, 187, 193, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [12, 13, 5, 1],
                        [168, 171, 132, 1],
                        [198, 201, 157, 1],
                        [231, 235, 176, 1]
                    ],
                    [
                        [0, 170, 255, 1],
                        [170, 0, 255, 1],
                        [170, 255, 0, 1],
                        [255, 0, 170, 1],
                        [255, 170, 0, 1]
                    ],
                    [
                        [78, 150, 137, 1],
                        [126, 208, 214, 1],
                        [135, 214, 155, 1],
                        [195, 255, 104, 1],
                        [244, 252, 232, 1]
                    ],
                    [
                        [10, 10, 10, 1],
                        [227, 246, 255, 1],
                        [255, 20, 87, 1],
                        [255, 216, 125, 1]
                    ],
                    [
                        [51, 51, 153, 1],
                        [102, 153, 204, 1],
                        [153, 204, 255, 1],
                        [255, 0, 51, 1],
                        [255, 204, 0, 1]
                    ],
                    [
                        [23, 22, 92, 1],
                        [190, 191, 158, 1],
                        [216, 210, 153, 1],
                        [229, 228, 218, 1],
                        [245, 224, 56, 1]
                    ],
                    [
                        [49, 99, 64, 1],
                        [96, 158, 77, 1],
                        [159, 252, 88, 1],
                        [195, 252, 88, 1],
                        [242, 252, 88, 1]
                    ],
                    [
                        [92, 88, 99, 1],
                        [168, 81, 99, 1],
                        [180, 222, 193, 1],
                        [207, 255, 221, 1],
                        [255, 31, 76, 1]
                    ],
                    [
                        [61, 67, 7, 1],
                        [161, 253, 17, 1],
                        [225, 244, 56, 1],
                        [244, 251, 196, 1],
                        [255, 208, 79, 1]
                    ],
                    [
                        [0, 205, 172, 1],
                        [2, 170, 176, 1],
                        [22, 147, 165, 1],
                        [127, 255, 36, 1],
                        [195, 255, 104, 1]
                    ],
                    [
                        [0, 203, 231, 1],
                        [0, 218, 60, 1],
                        [223, 21, 26, 1],
                        [244, 243, 40, 1],
                        [253, 134, 3, 1]
                    ],
                    [
                        [34, 104, 136, 1],
                        [57, 142, 182, 1],
                        [255, 162, 0, 1],
                        [255, 214, 0, 1],
                        [255, 245, 0, 1]
                    ],
                    [
                        [3, 13, 79, 1],
                        [206, 236, 239, 1],
                        [231, 237, 234, 1],
                        [251, 12, 6, 1],
                        [255, 197, 44, 1]
                    ],
                    [
                        [253, 255, 0, 1],
                        [255, 0, 0, 1],
                        [255, 90, 0, 1],
                        [255, 114, 0, 1],
                        [255, 167, 0, 1]
                    ],
                    [
                        [108, 66, 18, 1],
                        [179, 0, 176, 1],
                        [183, 255, 55, 1],
                        [255, 124, 69, 1],
                        [255, 234, 155, 1]
                    ],
                    [
                        [0, 4, 49, 1],
                        [59, 69, 58, 1],
                        [90, 224, 151, 1],
                        [204, 46, 9, 1],
                        [255, 253, 202, 1]
                    ],
                    [
                        [59, 45, 56, 1],
                        [188, 189, 172, 1],
                        [207, 190, 39, 1],
                        [240, 36, 117, 1],
                        [242, 116, 53, 1]
                    ],
                    [
                        [101, 145, 155, 1],
                        [120, 185, 168, 1],
                        [168, 212, 148, 1],
                        [242, 177, 73, 1],
                        [244, 229, 97, 1]
                    ],
                    [
                        [0, 193, 118, 1],
                        [136, 193, 0, 1],
                        [250, 190, 40, 1],
                        [255, 0, 60, 1],
                        [255, 138, 0, 1]
                    ],
                    [
                        [110, 37, 63, 1],
                        [165, 199, 185, 1],
                        [199, 94, 106, 1],
                        [241, 245, 244, 1],
                        [251, 236, 236, 1]
                    ],
                    [
                        [39, 112, 140, 1],
                        [111, 191, 162, 1],
                        [190, 191, 149, 1],
                        [227, 208, 116, 1],
                        [255, 180, 115, 1]
                    ],
                    [
                        [62, 72, 76, 1],
                        [82, 91, 96, 1],
                        [105, 158, 81, 1],
                        [131, 178, 107, 1],
                        [242, 232, 97, 1]
                    ],
                    [
                        [248, 135, 46, 1],
                        [252, 88, 12, 1],
                        [252, 107, 10, 1],
                        [253, 202, 73, 1],
                        [255, 169, 39, 1]
                    ],
                    [
                        [83, 119, 122, 1],
                        [84, 36, 55, 1],
                        [192, 41, 66, 1],
                        [217, 91, 67, 1],
                        [236, 208, 120, 1]
                    ],
                    [
                        [41, 136, 140, 1],
                        [54, 19, 0, 1],
                        [162, 121, 15, 1],
                        [188, 53, 33, 1],
                        [255, 208, 130, 1]
                    ],
                    [
                        [10, 186, 181, 1],
                        [58, 203, 199, 1],
                        [106, 219, 216, 1],
                        [153, 236, 234, 1],
                        [201, 252, 251, 1]
                    ],
                    [
                        [8, 158, 42, 1],
                        [9, 42, 100, 1],
                        [90, 204, 191, 1],
                        [229, 4, 4, 1],
                        [251, 235, 175, 1]
                    ],
                    [
                        [187, 187, 136, 1],
                        [204, 198, 141, 1],
                        [238, 170, 136, 1],
                        [238, 194, 144, 1],
                        [238, 221, 153, 1]
                    ],
                    [
                        [121, 219, 204, 1],
                        [134, 78, 65, 1],
                        [234, 169, 167, 1],
                        [242, 199, 196, 1],
                        [248, 245, 226, 1]
                    ],
                    [
                        [96, 136, 213, 1],
                        [114, 170, 222, 1],
                        [157, 200, 233, 1],
                        [192, 222, 245, 1],
                        [217, 239, 244, 1]
                    ],
                    [
                        [30, 30, 30, 1],
                        [177, 255, 0, 1],
                        [209, 210, 212, 1],
                        [242, 240, 240, 1]
                    ],
                    [
                        [255, 102, 0, 1],
                        [255, 153, 0, 1],
                        [255, 204, 0, 1],
                        [255, 255, 204, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [35, 15, 43, 1],
                        [130, 179, 174, 1],
                        [188, 227, 197, 1],
                        [235, 235, 188, 1],
                        [242, 29, 65, 1]
                    ],
                    [
                        [212, 238, 94, 1],
                        [225, 237, 185, 1],
                        [240, 242, 235, 1],
                        [244, 250, 210, 1],
                        [255, 66, 66, 1]
                    ],
                    [
                        [20, 32, 71, 1],
                        [168, 95, 59, 1],
                        [247, 92, 92, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [63, 184, 240, 1],
                        [80, 208, 240, 1],
                        [196, 251, 93, 1],
                        [224, 240, 240, 1],
                        [236, 255, 224, 1]
                    ],
                    [
                        [185, 222, 81, 1],
                        [209, 227, 137, 1],
                        [224, 72, 145, 1],
                        [225, 183, 237, 1],
                        [245, 225, 226, 1]
                    ],
                    [
                        [185, 222, 81, 1],
                        [209, 227, 137, 1],
                        [224, 72, 145, 1],
                        [225, 183, 237, 1],
                        [245, 225, 226, 1]
                    ],
                    [
                        [17, 68, 34, 1],
                        [51, 170, 170, 1],
                        [51, 221, 51, 1],
                        [221, 238, 68, 1],
                        [221, 238, 187, 1]
                    ],
                    [
                        [46, 13, 35, 1],
                        [245, 72, 40, 1],
                        [247, 128, 60, 1],
                        [248, 228, 193, 1],
                        [255, 237, 191, 1]
                    ],
                    [
                        [204, 243, 144, 1],
                        [224, 224, 90, 1],
                        [247, 196, 31, 1],
                        [252, 147, 10, 1],
                        [255, 0, 61, 1]
                    ],
                    [
                        [18, 18, 18, 1],
                        [255, 89, 56, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [53, 38, 48, 1],
                        [85, 72, 101, 1],
                        [205, 91, 81, 1],
                        [233, 223, 204, 1],
                        [243, 163, 107, 1]
                    ],
                    [
                        [236, 250, 1, 1],
                        [236, 250, 2, 1],
                        [247, 220, 2, 1],
                        [248, 227, 113, 1],
                        [250, 173, 9, 1]
                    ],
                    [
                        [77, 129, 121, 1],
                        [161, 129, 121, 1],
                        [236, 85, 101, 1],
                        [249, 220, 159, 1],
                        [254, 157, 93, 1]
                    ],
                    [
                        [4, 0, 4, 1],
                        [65, 61, 61, 1],
                        [75, 0, 15, 1],
                        [200, 255, 0, 1],
                        [250, 2, 60, 1]
                    ],
                    [
                        [66, 50, 56, 1],
                        [179, 112, 45, 1],
                        [200, 209, 151, 1],
                        [235, 33, 56, 1],
                        [245, 222, 140, 1]
                    ],
                    [
                        [143, 153, 36, 1],
                        [172, 201, 95, 1],
                        [241, 57, 109, 1],
                        [243, 255, 235, 1],
                        [253, 96, 129, 1]
                    ],
                    [
                        [18, 18, 18, 1],
                        [23, 122, 135, 1],
                        [250, 245, 240, 1],
                        [255, 180, 143, 1]
                    ],
                    [
                        [67, 197, 210, 1],
                        [182, 108, 97, 1],
                        [241, 155, 140, 1],
                        [254, 247, 237, 1],
                        [255, 234, 215, 1]
                    ],
                    [
                        [78, 205, 196, 1],
                        [85, 98, 112, 1],
                        [196, 77, 88, 1],
                        [199, 244, 100, 1],
                        [255, 107, 107, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [137, 161, 160, 1],
                        [154, 227, 226, 1],
                        [255, 71, 103, 1],
                        [255, 118, 5, 1]
                    ],
                    [
                        [248, 200, 221, 1],
                        [253, 231, 120, 1],
                        [255, 61, 61, 1],
                        [255, 92, 143, 1],
                        [255, 103, 65, 1]
                    ],
                    [
                        [23, 138, 132, 1],
                        [145, 145, 145, 1],
                        [229, 255, 125, 1],
                        [235, 143, 172, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [73, 112, 138, 1],
                        [136, 171, 194, 1],
                        [202, 255, 66, 1],
                        [208, 224, 235, 1],
                        [235, 247, 248, 1]
                    ],
                    [
                        [51, 222, 245, 1],
                        [122, 245, 51, 1],
                        [245, 51, 145, 1],
                        [245, 161, 52, 1],
                        [248, 248, 101, 1]
                    ],
                    [
                        [57, 13, 45, 1],
                        [172, 222, 178, 1],
                        [225, 234, 181, 1],
                        [237, 173, 158, 1],
                        [254, 75, 116, 1]
                    ],
                    [
                        [192, 107, 129, 1],
                        [233, 22, 67, 1],
                        [245, 175, 145, 1],
                        [247, 201, 182, 1],
                        [249, 210, 182, 1]
                    ],
                    [
                        [131, 196, 192, 1],
                        [156, 100, 53, 1],
                        [190, 215, 62, 1],
                        [237, 66, 98, 1],
                        [240, 233, 226, 1]
                    ],
                    [
                        [136, 145, 136, 1],
                        [191, 218, 223, 1],
                        [207, 246, 247, 1],
                        [233, 26, 82, 1],
                        [237, 242, 210, 1]
                    ],
                    [
                        [64, 44, 56, 1],
                        [209, 212, 169, 1],
                        [227, 164, 129, 1],
                        [245, 215, 165, 1],
                        [255, 111, 121, 1]
                    ],
                    [
                        [93, 65, 87, 1],
                        [131, 134, 137, 1],
                        [168, 202, 186, 1],
                        [202, 215, 178, 1],
                        [235, 227, 170, 1]
                    ],
                    [
                        [0, 168, 198, 1],
                        [64, 192, 203, 1],
                        [143, 190, 0, 1],
                        [174, 226, 57, 1],
                        [249, 242, 231, 1]
                    ],
                    [
                        [0, 204, 190, 1],
                        [9, 166, 163, 1],
                        [157, 191, 175, 1],
                        [237, 235, 201, 1],
                        [252, 249, 216, 1]
                    ],
                    [
                        [0, 205, 172, 1],
                        [2, 170, 176, 1],
                        [22, 147, 165, 1],
                        [127, 255, 36, 1],
                        [195, 255, 104, 1]
                    ],
                    [
                        [51, 39, 23, 1],
                        [107, 172, 191, 1],
                        [157, 188, 188, 1],
                        [240, 240, 175, 1],
                        [255, 55, 15, 1]
                    ],
                    [
                        [51, 51, 53, 1],
                        [101, 99, 106, 1],
                        [139, 135, 149, 1],
                        [193, 190, 200, 1],
                        [233, 232, 238, 1]
                    ],
                    [
                        [17, 118, 109, 1],
                        [65, 9, 54, 1],
                        [164, 11, 84, 1],
                        [228, 111, 10, 1],
                        [240, 179, 0, 1]
                    ],
                    [
                        [73, 10, 61, 1],
                        [138, 155, 15, 1],
                        [189, 21, 80, 1],
                        [233, 127, 2, 1],
                        [248, 202, 0, 1]
                    ],
                    [
                        [71, 162, 145, 1],
                        [144, 79, 135, 1],
                        [213, 28, 122, 1],
                        [219, 213, 139, 1],
                        [244, 127, 143, 1]
                    ],
                    [
                        [55, 191, 230, 1],
                        [169, 232, 250, 1],
                        [186, 255, 21, 1],
                        [211, 255, 106, 1],
                        [247, 239, 236, 1]
                    ],
                    [
                        [69, 173, 168, 1],
                        [84, 121, 128, 1],
                        [89, 79, 79, 1],
                        [157, 224, 173, 1],
                        [229, 252, 194, 1]
                    ],
                    [
                        [248, 241, 224, 1],
                        [249, 246, 241, 1],
                        [250, 244, 227, 1],
                        [251, 106, 79, 1],
                        [255, 193, 150, 1]
                    ],
                    [
                        [0, 98, 125, 1],
                        [1, 64, 87, 1],
                        [51, 50, 49, 1],
                        [66, 153, 15, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [52, 17, 57, 1],
                        [53, 150, 104, 1],
                        [60, 50, 81, 1],
                        [168, 212, 111, 1],
                        [255, 237, 144, 1]
                    ],
                    [
                        [0, 153, 137, 1],
                        [163, 169, 72, 1],
                        [206, 24, 54, 1],
                        [237, 185, 46, 1],
                        [248, 89, 49, 1]
                    ],
                    [
                        [26, 31, 30, 1],
                        [108, 189, 181, 1],
                        [147, 204, 198, 1],
                        [200, 214, 191, 1],
                        [227, 223, 186, 1]
                    ],
                    [
                        [165, 222, 190, 1],
                        [183, 234, 201, 1],
                        [251, 178, 163, 1],
                        [252, 37, 55, 1],
                        [255, 215, 183, 1]
                    ],
                    [
                        [26, 20, 14, 1],
                        [90, 142, 161, 1],
                        [204, 65, 65, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [51, 51, 51, 1],
                        [111, 111, 111, 1],
                        [204, 204, 204, 1],
                        [255, 100, 0, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [51, 145, 148, 1],
                        [167, 2, 103, 1],
                        [241, 12, 73, 1],
                        [246, 216, 107, 1],
                        [251, 107, 65, 1]
                    ],
                    [
                        [31, 3, 51, 1],
                        [31, 57, 77, 1],
                        [39, 130, 92, 1],
                        [112, 179, 112, 1],
                        [171, 204, 120, 1]
                    ],
                    [
                        [209, 242, 165, 1],
                        [239, 250, 180, 1],
                        [245, 105, 145, 1],
                        [255, 159, 128, 1],
                        [255, 196, 140, 1]
                    ],
                    [
                        [60, 54, 79, 1],
                        [109, 124, 157, 1],
                        [124, 144, 179, 1],
                        [149, 181, 194, 1],
                        [185, 224, 220, 1]
                    ],
                    [
                        [35, 179, 218, 1],
                        [153, 214, 241, 1],
                        [168, 153, 241, 1],
                        [208, 89, 218, 1],
                        [248, 78, 150, 1]
                    ],
                    [
                        [85, 66, 54, 1],
                        [96, 185, 154, 1],
                        [211, 206, 61, 1],
                        [241, 239, 165, 1],
                        [247, 120, 37, 1]
                    ],
                    [
                        [20, 20, 20, 1],
                        [177, 198, 204, 1],
                        [255, 239, 94, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [136, 238, 208, 1],
                        [202, 224, 129, 1],
                        [239, 67, 53, 1],
                        [242, 205, 79, 1],
                        [246, 139, 54, 1]
                    ],
                    [
                        [53, 38, 29, 1],
                        [95, 79, 69, 1],
                        [151, 123, 105, 1],
                        [206, 173, 142, 1],
                        [253, 115, 26, 1]
                    ],
                    [
                        [68, 66, 89, 1],
                        [159, 189, 166, 1],
                        [219, 101, 68, 1],
                        [240, 145, 67, 1],
                        [252, 177, 71, 1]
                    ],
                    [
                        [191, 208, 0, 1],
                        [196, 60, 39, 1],
                        [233, 60, 31, 1],
                        [242, 83, 58, 1],
                        [242, 240, 235, 1]
                    ],
                    [
                        [43, 43, 43, 1],
                        [53, 54, 52, 1],
                        [230, 50, 75, 1],
                        [242, 227, 198, 1],
                        [255, 198, 165, 1]
                    ],
                    [
                        [23, 20, 38, 1],
                        [26, 15, 12, 1],
                        [207, 207, 207, 1],
                        [240, 240, 240, 1],
                        [255, 77, 148, 1]
                    ],
                    [
                        [28, 1, 19, 1],
                        [107, 1, 3, 1],
                        [163, 0, 6, 1],
                        [194, 26, 1, 1],
                        [240, 60, 2, 1]
                    ],
                    [
                        [10, 10, 10, 1],
                        [140, 97, 70, 1],
                        [214, 179, 156, 1],
                        [242, 76, 61, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [46, 13, 35, 1],
                        [245, 72, 40, 1],
                        [247, 128, 60, 1],
                        [248, 228, 193, 1],
                        [255, 237, 191, 1]
                    ],
                    [
                        [0, 62, 95, 1],
                        [0, 67, 132, 1],
                        [22, 147, 165, 1],
                        [150, 207, 234, 1],
                        [247, 249, 114, 1]
                    ],
                    [
                        [66, 29, 56, 1],
                        [87, 0, 69, 1],
                        [190, 226, 232, 1],
                        [205, 255, 24, 1],
                        [255, 8, 90, 1]
                    ],
                    [
                        [47, 59, 97, 1],
                        [121, 128, 146, 1],
                        [187, 235, 185, 1],
                        [233, 236, 229, 1],
                        [255, 103, 89, 1]
                    ],
                    [
                        [58, 17, 28, 1],
                        [87, 73, 81, 1],
                        [131, 152, 142, 1],
                        [188, 222, 165, 1],
                        [230, 249, 188, 1]
                    ],
                    [
                        [147, 193, 196, 1],
                        [198, 182, 204, 1],
                        [242, 202, 174, 1],
                        [250, 12, 195, 1],
                        [255, 123, 15, 1]
                    ],
                    [
                        [255, 3, 149, 1],
                        [255, 9, 3, 1],
                        [255, 139, 3, 1],
                        [255, 216, 3, 1],
                        [255, 251, 3, 1]
                    ],
                    [
                        [4, 0, 4, 1],
                        [254, 26, 138, 1],
                        [254, 53, 26, 1],
                        [254, 143, 26, 1],
                        [254, 240, 26, 1]
                    ],
                    [
                        [125, 173, 154, 1],
                        [196, 199, 169, 1],
                        [249, 213, 177, 1],
                        [254, 126, 142, 1],
                        [255, 62, 97, 1]
                    ],
                    [
                        [69, 38, 50, 1],
                        [145, 32, 77, 1],
                        [226, 247, 206, 1],
                        [228, 132, 74, 1],
                        [232, 191, 86, 1]
                    ],
                    [
                        [0, 0, 0, 1],
                        [38, 173, 228, 1],
                        [77, 188, 233, 1],
                        [209, 231, 81, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [44, 87, 133, 1],
                        [209, 19, 47, 1],
                        [235, 241, 247, 1],
                        [237, 214, 130, 1]
                    ],
                    [
                        [92, 172, 196, 1],
                        [140, 209, 157, 1],
                        [206, 232, 121, 1],
                        [252, 182, 83, 1],
                        [255, 82, 84, 1]
                    ],
                    [
                        [58, 68, 8, 1],
                        [74, 88, 7, 1],
                        [125, 146, 22, 1],
                        [157, 222, 13, 1],
                        [199, 237, 14, 1]
                    ],
                    [
                        [22, 147, 167, 1],
                        [200, 207, 2, 1],
                        [204, 12, 57, 1],
                        [230, 120, 30, 1],
                        [248, 252, 193, 1]
                    ],
                    [
                        [59, 12, 44, 1],
                        [210, 255, 31, 1],
                        [250, 244, 224, 1],
                        [255, 106, 0, 1],
                        [255, 195, 0, 1]
                    ],
                    [
                        [44, 13, 26, 1],
                        [52, 158, 151, 1],
                        [200, 206, 19, 1],
                        [222, 26, 114, 1],
                        [248, 245, 193, 1]
                    ],
                    [
                        [28, 20, 13, 1],
                        [203, 232, 107, 1],
                        [242, 233, 225, 1],
                        [255, 255, 255, 1]
                    ],
                    [
                        [75, 88, 191, 1],
                        [161, 206, 247, 1],
                        [247, 255, 133, 1],
                        [255, 54, 134, 1]
                    ],
                    [
                        [74, 95, 103, 1],
                        [92, 55, 75, 1],
                        [204, 55, 71, 1],
                        [209, 92, 87, 1],
                        [217, 212, 168, 1]
                    ]
                ];
            s.prototype.getPalette = function(t) {
                return n(h[Math.floor(t)])
            }, s.prototype.getCount = function() {
                return h.length
            }, s.prototype.getRandomPalette = function() {
                var t = Math.floor(h.length * Math.random());
                return this.getPalette(t)
            };
            var u = new s;
            e.exports = u
        }), define("famous-math/Random", function() {}), define("famous-modifiers/Camera", ["require", "exports", "module", "famous/Transitionable", "famous/Matrix", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this._renderMatrix = r.identity, this._scaleState = new n([1, 1, 1]), this._skewState = new n([0, 0, 0]), this._rotateState = new n([0, 0, 0]), this._translateState = new n([0, 0, 0]), this._dirty = !1, t && this.lookAt(t)
            }
            function o() {
                var t = r.scale.apply(this, this._scaleState.get()),
                    i = r.skew.apply(this, this._skewState.get()),
                    e = r.rotate.apply(this, this._rotateState.get()),
                    s = r.move(r.multiply(t, i, e), this._translateState.get());
                return r.inverse(s)
            }
            var n = t("famous/Transitionable"),
                r = t("famous/Matrix"),
                a = t("famous/Utility");
            s.prototype.halt = function() {
                this._scaleState.halt(), this._skewState.halt(), this._rotateState.halt(), this._translateState.halt()
            }, s.prototype.getScale = function() {
                return this._scaleState.get()
            }, s.prototype.setScale = function(t, i, e) {
                return this._dirty = !0, this._scaleState.set(t, i, e)
            }, s.prototype.getSkew = function() {
                return this._skewState.get()
            }, s.prototype.setSkew = function(t, i, e) {
                return this._dirty = !0, this._skewState.set(t, i, e)
            }, s.prototype.getRotation = function() {
                return this._rotateState.get()
            }, s.prototype.setRotation = function(t, i, e) {
                return this._dirty = !0, this._rotateState.set(t, i, e)
            }, s.prototype.getSpin = s.prototype.getRotation, s.prototype.setSpin = s.prototype.setRotation, s.prototype.getPos = function() {
                return this._translateState.get()
            }, s.prototype.setPos = function(t, i, e) {
                return this._dirty = !0, this._translateState.set(t, i, e)
            }, s.prototype.lookAt = function(t, i, e) {
                var s = void 0;
                e && (s = a.after(4, e)), this.halt();
                var o = r.interpret(t);
                this.setScale(o.scale, i, s), this.setSkew(o.skew, i, s), this.setRotation(o.rotate, i, s), this.setPos(o.translate, i, s)
            }, s.prototype.render = function(t) {
                return this._dirty |= this._scaleState.isActive() || this._skewState.isActive() || this._rotateState.isActive() || this._translateState.isActive(), this._dirty && (this._renderMatrix = o.call(this), this._dirty = !1), {
                    transform: this._renderMatrix,
                    group: !0,
                    target: t
                }
            }, e.exports = s
        }), define("famous-sync/MouseSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
            function s(t, i) {
                this.targetGet = t, this.options = {
                    direction: void 0,
                    rails: !1,
                    scale: 1,
                    stallTime: 50,
                    propogate: !0
                }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new h, this.output = new h, h.setInputHandler(this, this.input), h.setOutputHandler(this, this.output), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousedown", o.bind(this)), this.input.on("mousemove", n.bind(this)), this.input.on("mouseup", r.bind(this)), this.options.propogate ? this.input.on("mouseleave", a.bind(this)) : this.input.on("mouseleave", r.bind(this))
            }
            function o(t) {
                t.preventDefault(), this._prevCoord = [t.clientX, t.clientY], this._prevTime = Date.now(), this._prevVel = void 0 !== this.options.direction ? 0 : [0, 0], this.output.emit("start", {
                    c: this._prevCoord
                })
            }
            function n(t) {
                if (this._prevCoord) {
                    var i = this._prevCoord,
                        e = this._prevTime,
                        o = [t.clientX, t.clientY],
                        n = Date.now(),
                        r = o[0] - i[0],
                        a = o[1] - i[1];
                    this.options.rails && (Math.abs(r) > Math.abs(a) ? a = 0 : r = 0);
                    var h, u, p = Math.max(n - e, 8),
                        c = r / p,
                        l = a / p,
                        f = this.targetGet(),
                        d = this.options.scale;
                    this.options.direction == s.DIRECTION_X ? (h = f + d * r, u = d * c) : this.options.direction == s.DIRECTION_Y ? (h = f + d * a, u = d * l) : (h = [f[0] + d * r, f[1] + d * a], u = [d * c, d * l]), this.output.emit("update", {
                        p: h,
                        v: u,
                        c: o
                    }), this._prevCoord = o, this._prevTime = n, this._prevVel = u
                }
            }
            function r() {
                if (this._prevCoord) {
                    var t = this._prevTime,
                        i = Date.now();
                    i - t > this.options.stallTime && (this._prevVel = void 0 == this.options.direction ? [0, 0] : 0);
                    var e = this.targetGet();
                    this.output.emit("end", {
                        p: e,
                        v: this._prevVel
                    }), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0
                }
            }
            function a() {
                if (this._prevCoord) {
                    var t = function(t) {
                            n.call(this, t)
                        }.bind(this),
                        i = function(e) {
                            r.call(this, e), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
                        }.bind(this);
                    document.addEventListener("mousemove", t), document.addEventListener("mouseup", i)
                }
            }
            var h = t("famous/EventHandler");
            s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime), void 0 !== t.propogate && (this.options.propogate = t.propogate)
            }, e.exports = s
        }), define("famous-modifiers/Draggable", ["require", "exports", "module", "famous/Matrix", "famous-sync/MouseSync", "famous-sync/TouchSync", "famous-sync/GenericSync", "famous/Transitionable", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._positionState = new f([0, 0]), this._cursorPos = [0, 0], this._active = !0, this.sync = new l(function() {
                    return this._cursorPos
                }.bind(this), {
                    scale: this.options.scale,
                    syncClasses: [p, c]
                }), this.eventOutput = new d, d.setInputHandler(this, this.sync), d.setOutputHandler(this, this.eventOutput), a.call(this)
            }
            function o() {
                var t = this.getPosition();
                this._cursorPos = t.slice(), this.eventOutput.emit("dragstart", {
                    p: t
                })
            }
            function n(t) {
                this._active && (this.setPosition(h.call(this, t.p), this.options.transition), this._cursorPos = t.p), this.eventOutput.emit("dragmove", {
                    p: this.getPosition()
                })
            }
            function r() {
                this.eventOutput.emit("dragend", {
                    p: this.getPosition()
                })
            }
            function a() {
                this.sync.on("start", o.bind(this)), this.sync.on("update", n.bind(this)), this.sync.on("end", r.bind(this))
            }
            function h(t) {
                var i = this.options,
                    e = i.projection,
                    s = i.maxX,
                    o = i.maxY,
                    n = i.snapX,
                    r = i.snapY,
                    a = e & m.x ? t[0] : 0,
                    h = e & m.y ? t[1] : 0;
                return n > 0 && (a -= a % n), r > 0 && (h -= h % r), a = Math.max(Math.min(a, s), -s), h = Math.max(Math.min(h, o), -o), [a, h]
            }
            var u = t("famous/Matrix"),
                p = t("famous-sync/MouseSync"),
                c = t("famous-sync/TouchSync"),
                l = t("famous-sync/GenericSync"),
                f = t("famous/Transitionable"),
                d = t("famous/EventHandler"),
                m = {
                    x: 1,
                    y: 2
                };
            s.DEFAULT_OPTIONS = {
                projection: m.x | m.y,
                scale: 1,
                maxX: 1 / 0,
                maxY: 1 / 0,
                snapX: 0,
                snapY: 0,
                transition: {
                    duration: 0
                }
            }, s.prototype.setOptions = function(t) {
                var i = this.options;
                if (void 0 !== t.projection) {
                    var e = t.projection;
                    this.options.projection = 0, ["x", "y"].forEach(function(t) {
                        -1 != e.indexOf(t) && (i.projection |= m[t])
                    })
                }
                void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.maxX && (i.maxX = t.maxX), void 0 !== t.maxY && (i.maxY = t.maxY), void 0 !== t.snapX && (i.snapX = t.snapX), void 0 !== t.snapY && (i.snapY = t.snapY), void 0 !== t.transition && (i.transition = t.transition)
            }, s.prototype.getPosition = function() {
                return this._positionState.get()
            }, s.prototype.setPosition = function(t, i, e) {
                this._positionState.isActive() && this._positionState.halt(), this._positionState.set(t, i, e)
            }, s.prototype.activate = function() {
                this._active = !0
            }, s.prototype.deactivate = function() {
                this._active = !1
            }, s.prototype.toggle = function() {
                this._active = !this._active
            }, s.prototype.render = function(t) {
                var i = this.getPosition();
                return {
                    transform: u.translate(i[0], i[1]),
                    target: t
                }
            }, e.exports = s
        }), define("famous-performance/ProfilerMetric", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                this.bufferSize = t || 30, this.calculateStatistics = !1, this.val = 0, this.min = 0, this.max = 0, this.std = 0, this._index = 0, this._startTime = 0, this._stopped = !0, this._startCalls = 0, this.accumulator = new Array(this.bufferSize);
                for (var i = 0; i < this.bufferSize; i++) this.accumulator[i] = 0
            }
            function o(t) {
                return Math.max.apply(Math, t)
            }
            function n(t) {
                return Math.min.apply(Math, t)
            }
            function r(t) {
                for (var i = t.length, e = 0, s = 0; i > s; s++) e += t[s];
                return e / i
            }
            function a(t, i) {
                var e, s = 0,
                    o = t.length;
                void 0 === i && (i = r(t));
                for (var n = 0; o > n; n++) e = t[n] - i, s += e * e;
                return Math.sqrt(s / o)
            }
            var h = window.performance ?
                function() {
                    return performance.now()
                } : function() {
                return Date.now()
            };
            s.prototype.start = function() {
                this._startCalls++, this._stopped ? (this._startTime = h(), this._stopped = !1) : (this.stop(), this.start())
            }, s.prototype.stop = function() {
                this._stopped = !0;
                var t = h() - this._startTime;
                1 == this._startCalls ? this.insert(t) : this.addInPlace(t)
            }, s.prototype.aggregate = function() {
                var t = this.accumulator;
                this.val = r(t), this.calculateStatistics && (this.min = n(t), this.max = o(t), this.std = a(t, this.val))
            }, s.prototype.insert = function(t) {
                this._index === this.bufferSize && (this.aggregate(), this._index = 0), this.accumulator[this._index] = t, this._index++
            }, s.prototype.addInPlace = function(t) {
                this.accumulator[this._index - 1] += t
            }, s.prototype.setBufferSize = function(t) {
                this.bufferSize = t, this.accumulator = new Array(t);
                for (var i = 0; t > i; i++) this.accumulator[i] = 0;
                this._index = 0
            }, s.prototype.reset = function() {
                this._startCalls = 0
            }, s.prototype.dump = function() {
                console.log(this.accumulator)
            }, e.exports = s
        }), define("famous-performance/Profiler", ["require", "exports", "module", "famous-performance/ProfilerMetric", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                var i = void 0 === l[t] ? n(t) : l[t];
                i.start()
            }
            function o(t) {
                l[t].stop()
            }
            function n(t) {
                var i = new u(c, t);
                return l[t] = i, i
            }
            function r(t) {
                c = t;
                for (var i in l) l[i].setBufferSize(t)
            }
            function a() {
                return c
            }
            function h(t, i) {
                f.emit(t, i)
            }
            var u = t("famous-performance/ProfilerMetric"),
                p = t("famous/EventHandler"),
                c = 20,
                l = {},
                f = new p,
                d = "FPS";
            f.on("prerender", function() {
                s(d), s("Famous")
            }), f.on("postrender", function() {
                o("Famous");
                for (var t in l) l[t].reset()
            }), e.exports = {
                metrics: l,
                start: s,
                stop: o,
                emit: h,
                setBufferSize: r,
                getBufferSize: a
            }
        }), define("famous-performance/ProfilerMetricView", ["require", "exports", "module", "famous/Surface", "famous/Matrix"], function(t, i, e) {
            function s(t, i) {
                this.opts = {
                    size: [100, 20],
                    label: "",
                    map: function(t) {
                        return .06 * t
                    }
                }, i && this.setOpts(i), this.metric = t, this.createView(), this.textPadding = 4
            }
            var o = t("famous/Surface"),
                n = t("famous/Matrix");
            s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.createView = function() {
                var t = new o({
                    size: this.opts.size
                });
                t.setProperties({
                    background: "#3cf"
                });
                var i = new o({
                    size: this.opts.size
                });
                i.setProperties({
                    background: "#36f"
                });
                var e = new o({
                    content: this.opts.label.toString()
                });
                e.setProperties({
                    color: "white",
                    textShadow: "0px 0px 2px black",
                    lineHeight: this.opts.size[1] + "px"
                }), this.boundingSurface = i, this.metricSurface = t, this.textSurface = e
            }, s.prototype.render = function() {
                var t = this.metric.val,
                    i = void 0 !== t ? this.opts.map(t) : 0;
                return {
                    size: this.opts.size,
                    target: [{
                        target: this.boundingSurface.render(),
                        transform: n.translate(0, 0, -1e-4)
                    }, {
                        target: this.metricSurface.render(),
                        transform: n.scale(i, 1, 1)
                    }, {
                        target: this.textSurface.render(),
                        transform: n.translate(this.opts.size[0] + this.textPadding, 0)
                    }]
                }
            }, e.exports = s
        }), define("famous-performance/ProfilerView", ["require", "exports", "module", "famous-performance/ProfilerMetricView", "famous-performance/Profiler", "famous/RenderNode", "famous/Modifier", "famous/Matrix"], function(t, i, e) {
            function s(t) {
                m.max = t
            }
            function o(t) {
                m.size = t
            }
            function n() {
                var t, i = 0;
                for (var e in l) {
                    t = "FPS" === e.toUpperCase() ?
                        function(t) {
                            return 1e3 / (60 * t)
                        } : function(t) {
                        return t / m.max
                    };
                    var s = new a(l[e], {
                            size: m.size,
                            label: e,
                            map: t
                        }),
                        o = new p(c.translate(0, i));
                    f.add(o).link(s), i += m.size[1] + m.margin
                }
            }
            function r() {
                return d > 2 ? f.render() : (2 == d && n(), 2 >= d && d++, void 0)
            }
            var a = t("famous-performance/ProfilerMetricView"),
                h = t("famous-performance/Profiler"),
                u = t("famous/RenderNode"),
                p = t("famous/Modifier"),
                c = t("famous/Matrix"),
                l = h.metrics,
                f = new u,
                d = 0,
                m = {
                    max: 1e3 / 60,
                    size: [150, 20],
                    margin: 1
                };
            e.exports = {
                setMax: s,
                setSize: o,
                render: r
            }
        }), define("famous-physics/constraints/Collision", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    restitution: .5
                }, t && this.setOpts(t), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), this.n = new n, this.vRel = new n, this.I = new n, this.disp = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector"),
                r = t("famous/EventHandler");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i) {
                if (void 0 !== i) for (var e = i.p, s = i.r, o = i.v, n = this.n, r = this.I, a = this.vRel, h = this.disp, u = this.opts.restitution, p = 0; p < t.length; p++) {
                    var c = t[p];
                    if (i != c) {
                        var l = c.p,
                            f = c.r,
                            d = i.mInv;
                        h.set(e.sub(l));
                        var m = h.norm(),
                            y = s + f - m;
                        if (y > 0) {
                            n.set(h.normalize());
                            var v = {
                                target: c,
                                source: i,
                                overlap: y,
                                normal: n
                            };
                            this.eventOutput.emit("preCollision", v), this.eventOutput.emit("collision", v);
                            var g = c.v,
                                S = c.mInv;
                            a.set(o.sub(g)), r.set(n.mult((1 + u) * a.dot(n) / (d + S))), o.sub(r.mult(d), o), e.add(n.mult(y / 2), e), g.add(r.mult(S), g), l.add(n.mult(-y / 2), l), this.eventOutput.emit("postCollision", v)
                        }
                    }
                }
            }, e.exports = s
        }), define("famous-physics/math/vector", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e) {
                return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
            }
            var o = new s(0, 0, 0);
            s.prototype.add = function(t, i) {
                return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
            }, s.prototype.sub = function(t, i) {
                return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
            }, s.prototype.mult = function(t, i) {
                return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
            }, s.prototype.div = function(t, i) {
                return this.mult(1 / t, i)
            }, s.prototype.cross = function(t, i) {
                return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
            }, s.prototype.equals = function(t) {
                return t.x == this.x && t.y == this.y && t.z == this.z
            }, s.prototype.rotateX = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(e, -n * a + s * r, n * r - s * a)
            }, s.prototype.rotateY = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(-n * a + e * r, s, n * r + e * a)
            }, s.prototype.rotateZ = function(t, i) {
                i = i || o;
                var e = this.x,
                    s = this.y,
                    n = this.z,
                    r = Math.cos(t),
                    a = Math.sin(t);
                return i.setXYZ(-s * a + e * r, s * r + e * a, n)
            }, s.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }, s.prototype.normSquared = function() {
                return this.dot(this)
            }, s.prototype.norm = function() {
                return Math.sqrt(this.normSquared())
            }, s.prototype.normalize = function(t, i) {
                t = void 0 !== t ? t : 1, i = i || o;
                var e = 1e-7,
                    s = this.norm();
                return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
            }, s.prototype.clone = function() {
                return new s(this)
            }, s.prototype.isZero = function() {
                return !(this.x || this.y || this.z)
            }, s.prototype.set = function(t) {
                return t instanceof Array ? this.setFromArray(t) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
            }, s.prototype.setFromArray = function(t) {
                this.x = t[0], this.y = t[1], this.z = t[2] || 0
            }, s.prototype.put = function(t) {
                t.set(o)
            }, s.prototype.setXYZ = function(t, i, e) {
                return o.clear(), this.x = t, this.y = i, this.z = e, this
            }, s.prototype.clear = function() {
                this.x = 0, this.y = 0, this.z = 0
            }, s.prototype.cap = function(t, i) {
                if (1 / 0 === t) return this;
                i = i || o;
                var e = this.norm();
                return e > t ? this.normalize(t, i) : this
            }, s.prototype.project = function(t, i) {
                return i = i || o, t.mult(this.dot(t), i)
            }, s.prototype.reflectAcross = function(t, i) {
                return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
            }, s.prototype.toArray = function() {
                return [this.x, this.y, this.z]
            }, s.prototype.get = function() {
                return this.toArray()
            }, e.exports = s
        }), define("famous-physics/constraints/CollisionJacobian", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    k: .5,
                    restitution: .5
                }, t && this.setOpts(t), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), this.n = new n, this.pDiff = new n, this.vDiff = new n, this.impulse1 = new n, this.impulse2 = new n, this.slop = 0
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("famous-physics/math/vector"),
                r = t("famous/EventHandler");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i, e) {
                if (void 0 !== i) for (var s = i.v, o = i.p, n = i.mInv, r = i.r, a = this.opts.k, h = this.n, u = this.pDiff, p = this.vDiff, c = this.impulse1, l = this.impulse2, f = i.restitution, d = 0; d < t.length; d++) {
                    var m = t[d];
                    if (m != i) {
                        var y = m.v,
                            v = m.p,
                            g = m.mInv,
                            S = m.r,
                            w = m.restitution,
                            x = void 0 !== this.opts.restitution ? this.opts.restitution : Math.sqrt(f * w);
                        u.set(v.sub(o)), p.set(y.sub(s));
                        var b = u.norm(),
                            T = b - (r + S),
                            O = 1 / (n + g),
                            _ = 0;
                        if (0 > T) {
                            h.set(u.normalize());
                            var P = {
                                target: m,
                                source: i,
                                overlap: T,
                                normal: h
                            };
                            this.eventOutput.emit("preCollision", P), this.eventOutput.emit("collision", P);
                            var C = T <= this.slop ? ((1 + x) * h.dot(p) + a / e * (T - this.slop)) / (_ + e / O) : (1 + x) * h.dot(p) / (_ + e / O);
                            h.mult(e * C).put(c), c.mult(-1).put(l), i.applyImpulse(c), m.applyImpulse(l), o.add(h.mult(T / 2), o), v.add(h.mult(-T / 2), v), this.eventOutput.emit("postCollision", P)
                        }
                    }
                }
            }, e.exports = s
        }), define("famous-physics/constraints/Curve", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    f: function(t, i) {
                        return 100 * Math.sin(t / 100) - i
                    },
                    df: void 0,
                    g: function(t, i, e) {
                        return e
                    },
                    dg: void 0,
                    dampingRatio: 0,
                    period: 0
                }, t && this.setOpts(t), this.J = new n, this.impulse = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i, e) {
                for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.f, a = this.opts.df, h = this.opts.dg, u = 0, p = 0; p < t.length; p++) {
                    var c = t[p],
                        l = c.v,
                        f = c.p,
                        d = c.m;
                    if (0 == this.opts.period) var m = 0,
                        y = 1;
                    else
                        var v = 4 * d * Math.PI * this.opts.dampingRatio / this.opts.period,
                            g = 4 * d * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                            m = 1 / (v + e * g),
                            y = e * g / (v + e * g);
                    if (void 0 === a) {
                        var S = 1e-7,
                            w = n(f.x, f.y, f.z),
                            x = (n(f.x + S, f.y, f.z) - w) / S,
                            b = (n(f.x, f.y + S, f.z) - w) / S,
                            T = (n(f.x, f.y, f.z + S) - w) / S,
                            O = r(f.x, f.y, f.z),
                            _ = (r(f.x + S, f.y, f.z) - O) / S,
                            P = (r(f.x, f.y + S, f.z) - O) / S,
                            C = (r(f.x, f.y, f.z + S) - O) / S;
                        o.setXYZ(x + _, b + P, T + C)
                    } else {
                        var M = a(f.x, f.y, f.z),
                            z = h(f.x, f.y, f.z);
                        o.setXYZ(M[0] + z[0], M[1] + z[1], M[2] + z[2])
                    }
                    var E = y / e * (n(f.x, f.y, f.z) + r(f.x, f.y, f.z)),
                        I = -(o.dot(l) + E) / (m + e * o.normSquared() / d);
                    s.set(o.mult(e * I)), c.applyImpulse(s), u += Math.abs(I)
                }
                return u
            }, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, e.exports = s
        }), define("famous-physics/constraints/Distance", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0,
                    anchor: void 0,
                    dampingRatio: 0,
                    period: 0
                }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
            }, s.prototype.setAnchor = function(t) {
                void 0 === this.opts.anchor && (this.opts.anchor = new n), this.opts.anchor.set(t)
            }, s.prototype.applyConstraint = function(t, i, e) {
                var s = this.n,
                    o = this.diffP,
                    n = this.diffV,
                    r = this.impulse;
                if (i) var a = i.p,
                    h = i.mInv,
                    u = i.v;
                else
                    var a = this.opts.anchor,
                        h = 0;
                for (var p = this.opts.length, c = 0, l = 0; l < t.length; l++) {
                    var f = t[l],
                        d = f.v,
                        m = f.p,
                        y = f.mInv;
                    o.set(m.sub(a)), s.set(o.normalize());
                    var v = o.norm() - p;
                    i ? n.set(d.sub(u)) : n.set(d);
                    var g = 1 / (y + h);
                    if (0 == this.opts.period) var S = 0,
                        w = 1;
                    else
                        var x = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period,
                            b = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                            S = 1 / (x + e * b),
                            w = e * b / (x + e * b);
                    var T = w / e * v,
                        O = -(s.dot(n) + T) / (S + e / g);
                    r.set(s.mult(e * O)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), c += Math.abs(O)
                }
                return c
            }, e.exports = s
        }), define("famous-physics/constraints/Distance1D", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0,
                    anchor: void 0,
                    dampingRatio: 0,
                    period: 0
                }, t && this.setOpts(t), this.impulse = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i, e) {
                var s, o, n = this.impulse;
                if (i) var r = i.p.x,
                    a = i.mInv,
                    h = i.v.x;
                else
                    var r = this.opts.anchor,
                        a = 0;
                for (var u = this.opts.length, p = this.opts.period, c = this.opts.dampingRatio, l = 0, f = 0; f < t.length; f++) {
                    var d = t[f],
                        m = d.v.x,
                        y = d.p.x,
                        v = d.mInv;
                    s = y - r;
                    var g = s - u;
                    o = i ? m - h : m;
                    var S = 1 / (v + a);
                    if (0 == p) var w = 0,
                        x = 1;
                    else
                        var b = 4 * S * Math.PI * c / p,
                            T = 4 * S * Math.PI * Math.PI / (p * p),
                            w = 1 / (b + e * T),
                            x = e * T / (b + e * T);
                    var O = x / e * g,
                        _ = -(o + O) / (w + e / S);
                    n.setXYZ(e * _, 0, 0), d.applyImpulse(n), i && i.applyImpulse(n.mult(-1)), l += Math.abs(_)
                }
                return l
            }, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init instanceof Function && t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, e.exports = s
        }), define("famous-physics/constraints/Rod", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0,
                    anchor: void 0,
                    stiffness: 1
                }, t && this.setOpts(t), this.disp = new n, this.push = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i, e) {
                var s = this.opts,
                    o = this.disp,
                    n = this.push,
                    r = s.length,
                    a = s.stiffness,
                    h = s.anchor || i.p,
                    u = t[0],
                    p = u.p;
                o.set(p.sub(h));
                var c = o.norm(),
                    l = (r - c) / c;
                Math.abs(l) > 0 && (o.mult(.5 * l * a, n), u.immunity || (p.add(n, p), u.v.add(n.div(e), u.v)), i && !i.immunity && (i.p.sub(n, i.p), i.v.sub(n.div(e), i.v)))
            }, e.exports = s
        }), define("famous-physics/constraints/Rope", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0,
                    anchor: void 0,
                    dampingRatio: 0,
                    period: 0
                }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("famous-physics/math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
            }, s.prototype.applyConstraint = function(t, i, e) {
                var s = this.n,
                    o = this.diffP,
                    n = this.diffV,
                    r = this.impulse;
                if (i) var a = i.p,
                    h = i.mInv,
                    u = i.v;
                else
                    var a = this.opts.anchor,
                        h = 0;
                for (var p = this.opts.length, c = 0, l = 0; l < t.length; l++) {
                    var f = t[l],
                        d = f.v,
                        m = f.p,
                        y = f.mInv;
                    o.set(m.sub(a));
                    var v = o.norm() - p;
                    if (0 > v) return;
                    s.set(o.normalize()), i ? n.set(d.sub(u)) : n.set(d);
                    var g = 1 / (y + h);
                    if (0 == this.opts.period) var S = 0,
                        w = 1;
                    else
                        var x = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period,
                            b = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                            S = 1 / (x + e * b),
                            w = e * b / (x + e * b);
                    var T = w / e * v,
                        O = -(s.dot(n) + T) / (S + e / g);
                    r.set(s.mult(e * O)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), c += Math.abs(O)
                }
                return c
            }, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, e.exports = s
        }), define("famous-physics/constraints/StiffSpring", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0,
                    anchor: void 0,
                    dampingRatio: 1,
                    period: 1e3,
                    restTolerance: 1e-5
                }, t && this.setOpts(t), this.pDiff = new h, this.vDiff = new h, this.n = new h, this.impulse1 = new h, this.impulse2 = new h, this.eventOutput = void 0, this._atRest = !1
            }
            function o(t, i) {
                t < this.opts.restTolerance ? (this._atRest || this.eventOutput.emit("atRest", {
                    particle: i
                }), this._atRest = !0) : this._atRest = !1
            }
            function n(t, i, e) {
                var s = Math.abs(t.dot(i) / e);
                return s
            }
            function r() {
                this.eventOutput = new u, this.eventOutput.bindThis(this), u.setOutputHandler(this, this.eventOutput)
            }
            var a = t("famous-physics/constraints/Constraint"),
                h = t("../math/Vector"),
                u = t("famous/EventHandler");
            s.prototype = Object.create(a.prototype), s.prototype.constructor = a, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.restTolerance && (this.opts.restTolerance = t.restTolerance)
            }, s.prototype.setAnchor = function(t) {
                void 0 === this.opts.anchor && (this.opts.anchor = new h), this.opts.anchor.set(t)
            }, s.prototype.applyConstraint = function(t, i, e) {
                for (var s = this.opts, r = this.pDiff, a = this.vDiff, h = this.impulse1, u = this.impulse2, p = s.length, c = s.anchor || i.p, l = s.period, f = s.dampingRatio, d = 0; d < t.length; d++) {
                    var m = t[d],
                        y = m.p,
                        v = m.v,
                        g = m.m,
                        S = m.mInv;
                    r.set(y.sub(c));
                    var w = r.norm() - p;
                    if (i) {
                        var x = i.mInv,
                            b = i.v;
                        a.set(v.sub(b));
                        var T = 1 / (S + x)
                    } else {
                        a.set(v);
                        var T = g
                    }
                    if (0 == this.opts.period) var O = 0,
                        _ = 1;
                    else
                        var P = 4 * T * Math.PI * Math.PI / (l * l),
                            C = 4 * T * Math.PI * f / l,
                            _ = e * P / (C + e * P),
                            O = 1 / (C + e * P);
                    var M = _ / e * w;
                    if (r.normalize(-M).sub(a).mult(e / (O + e / T)).put(h), m.applyImpulse(h), i && (h.mult(-1).put(u), i.applyImpulse(u)), this.eventOutput) {
                        var z = m.getEnergy() + n(h, r, e);
                        o.call(this, z, m)
                    }
                }
            }, s.prototype.getEnergy = function(t, i) {
                var e = this.opts,
                    s = e.length,
                    o = e.period,
                    n = e.anchor || i.p;
                if (0 === o) return 0;
                var r = 4 * t.m * Math.PI * Math.PI / (o * o),
                    a = n.sub(t.p),
                    h = a.norm() - s;
                return .5 * r * h * h
            }, s.prototype.on = function() {
                return r.call(this), this.on.apply(this, arguments)
            }, s.prototype.unbind = function() {
                return r.call(this), this.unbind.apply(this, arguments)
            }, s.prototype.pipe = function() {
                return r.call(this), this.pipe.apply(this, arguments)
            }, s.prototype.unpipe = function() {
                return r.call(this), this.unpipe.apply(this, arguments)
            }, e.exports = s
        }), define("famous-physics/constraints/Surface", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    f: void 0,
                    df: void 0,
                    dampingRatio: 0,
                    period: 0
                }, t && this.setOpts(t), this.J = new n, this.impulse = new n, this.eps = 1e-7
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyConstraint = function(t, i, e) {
                for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.df, a = 0, h = 0; h < t.length; h++) {
                    var u = t[h],
                        p = u.v,
                        c = u.p,
                        l = u.m;
                    if (0 == this.opts.period) var f = 0,
                        d = 1;
                    else
                        var m = 4 * l * Math.PI * this.opts.dampingRatio / this.opts.period,
                            y = 4 * l * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                            f = 1 / (m + e * y),
                            d = e * y / (m + e * y);
                    if (void 0 === r) {
                        var v = this.eps,
                            g = n(c.x, c.y, c.z),
                            S = (n(c.x + v, c.y, c.z) - g) / v,
                            w = (n(c.x, c.y + v, c.z) - g) / v,
                            x = (n(c.x, c.y, c.z + v) - g) / v;
                        o.setXYZ(S, w, x)
                    } else o.setXYZ.apply(o, r(c.x, c.y, c.z));
                    var b = d / e * n(c.x, c.y, c.z),
                        T = -(o.dot(p) + b) / (f + e * o.normSquared() / l);
                    s.set(o.mult(e * T)), u.applyImpulse(s), a += Math.abs(T)
                }
                return a
            }, s.prototype.setupSlider = function(t, i) {
                i = i || t.opts.name, t.setOpts({
                    value: this.opts[i]
                }), t.init(), t.on("change", function(t) {
                    this.opts[i] = t.value
                }.bind(this))
            }, e.exports = s
        }), define("famous-physics/constraints/Wall", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    restitution: .7,
                    k: 0,
                    n: new r,
                    d: 0,
                    onContact: s.ON_CONTACT.REFLECT
                }, t && this.setOpts(t), this.diff = new r, this.impulse = new r, this.slop = -1, this.eventOutput = void 0
            }
            function o() {
                this.eventOutput = new a, this.eventOutput.bindThis(this), a.setOutputHandler(this, this.eventOutput)
            }
            var n = t("famous-physics/constraints/Constraint"),
                r = t("../math/Vector"),
                a = t("famous/EventHandler");
            s.prototype = Object.create(n.prototype), s.prototype.constructor = n, s.ON_CONTACT = {
                REFLECT: 0,
                WRAP: 1,
                ABSORB: 2
            }, s.prototype.setOpts = function(t) {
                void 0 !== t.restitution && (this.opts.restitution = t.restitution), void 0 !== t.k && (this.opts.k = t.k), void 0 !== t.d && (this.opts.d = t.d), void 0 !== t.onContact && (this.opts.onContact = t.onContact), void 0 !== t.n && this.opts.n.set(t.n)
            }, s.prototype.getNormalVelocity = function(t) {
                var i = this.opts.n;
                return t.dot(i)
            }, s.prototype.getDistance = function(t) {
                var i = this.opts.n,
                    e = this.opts.d;
                return t.dot(i) + e
            }, s.prototype.onEnter = function(t, i, e) {
                var o = t.p,
                    n = t.v,
                    r = t.m,
                    a = this.opts.n,
                    h = this.opts.onContact,
                    u = this.opts.restitution,
                    p = this.impulse,
                    c = this.opts.k,
                    l = 0;
                if (this.eventOutput) {
                    var f = {
                        particle: t,
                        wall: this,
                        overlap: i
                    };
                    this.eventOutput.emit("preCollision", f), this.eventOutput.emit("collision", f)
                }
                switch (h) {
                    case s.ON_CONTACT.REFLECT:
                        var d = i < this.slop ? -((1 + u) * a.dot(n) + c / e * (i - this.slop)) / (r * e + l) : -((1 + u) * a.dot(n)) / (r * e + l);
                        p.set(a.mult(e * d)), t.applyImpulse(p), o.add(a.mult(-i), o);
                        break;
                    case s.ON_CONTACT.ABSORB:
                        var d = a.dot(n) / (r * e + l);
                        p.set(a.mult(e * d)), t.applyImpulse(p), o.add(a.mult(-i), o), n.clear();
                        break;
                    case s.ON_CONTACT.WRAP:
                        if (i < -t.r) break
                }
                this.eventOutput && this.eventOutput.emit("postCollision", f)
            }, s.prototype.onExit = function(t, i) {
                var e = this.opts.onContact,
                    o = t.p,
                    n = this.opts.n;
                e == s.ON_CONTACT.REFLECT ? o.add(n.mult(-i), o) : e == s.ON_CONTACT.WRAP || e == s.ON_CONTACT.ABSORB
            }, s.prototype.applyConstraint = function(t, i, e) {
                for (var s = this.opts.n, o = 0; o < t.length; o++) {
                    var n = t[o],
                        r = n.p,
                        a = n.v,
                        h = n.r || 0,
                        u = this.getDistance(r.add(s.mult(-h))),
                        p = this.getNormalVelocity(a);
                    0 > u && (0 > p ? this.onEnter(n, u, e) : this.onExit(n, u, e))
                }
            }, s.prototype.on = function() {
                return o.call(this), this.on.apply(this, arguments)
            }, s.prototype.unbind = function() {
                return o.call(this), this.unbind.apply(this, arguments)
            }, s.prototype.pipe = function() {
                return o.call(this), this.pipe.apply(this, arguments)
            }, s.prototype.unpipe = function() {
                return o.call(this), this.unpipe.apply(this, arguments)
            }, e.exports = s
        }), define("famous-physics/constraints/Walls", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector", "famous-physics/constraints/Wall"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    sides: s.TWO_DIMENSIONAL,
                    size: [window.innerWidth, window.innerHeight, 0],
                    origin: [.5, .5, .5],
                    k: 0,
                    restitution: .5,
                    onContact: s.ON_CONTACT.REFLECT
                }, this.setSize(this.opts.size, this.opts.origin), this.setOptsForEach({
                    restitution: this.opts.restitution,
                    k: this.opts.k
                }), t && this.setOpts(t)
            }
            var o = t("famous-physics/constraints/Constraint"),
                n = t("famous-physics/math/Vector"),
                r = t("famous-physics/constraints/Wall");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.SIDES = {
                LEFT: new r({
                    n: new n(1, 0, 0)
                }),
                RIGHT: new r({
                    n: new n(-1, 0, 0)
                }),
                TOP: new r({
                    n: new n(0, 1, 0)
                }),
                BOTTOM: new r({
                    n: new n(0, -1, 0)
                }),
                FRONT: new r({
                    n: new n(0, 0, 1)
                }),
                BACK: new r({
                    n: new n(0, 0, -1)
                })
            }, s.TWO_DIMENSIONAL = [s.SIDES.LEFT, s.SIDES.RIGHT, s.SIDES.TOP, s.SIDES.BOTTOM], s.THREE_DIMENSIONAL = [s.SIDES.LEFT, s.SIDES.RIGHT, s.SIDES.TOP, s.SIDES.BOTTOM, s.SIDES.FRONT, s.SIDES.BACK], s.ON_CONTACT = r.ON_CONTACT, s.prototype.setOpts = function(t) {
                var i = !1;
                void 0 !== t.restitution && this.setOptsForEach({
                    restitution: t.restitution
                }), void 0 !== t.k && this.setOptsForEach({
                    k: t.k
                }), void 0 !== t.size && (this.opts.size = t.size, i = !0), void 0 !== t.sides && (this.opts.sides = t.sides), void 0 !== t.onContact && (this.opts.onContact = t.onContact, this.setOnContact(t.onContact)), void 0 !== t.origin && (this.opts.origin = t.origin, i = !0), i && this.setSize(this.opts.size, this.opts.origin)
            }, s.prototype.setSize = function(t, i) {
                i = i || this.opts.origin, i.length < 3 && (i[2] = .5), s.SIDES.LEFT.setOpts({
                    d: t[0] * i[0]
                }), s.SIDES.TOP.setOpts({
                    d: t[1] * i[1]
                }), s.SIDES.FRONT.setOpts({
                    d: t[2] * i[2]
                }), s.SIDES.RIGHT.setOpts({
                    d: t[0] * (1 - i[0])
                }), s.SIDES.BOTTOM.setOpts({
                    d: t[1] * (1 - i[1])
                }), s.SIDES.BACK.setOpts({
                    d: t[2] * (1 - i[2])
                }), this.opts.size = t, this.opts.origin = i
            }, s.prototype.setOptsForEach = function(t) {
                this.forEachWall(function(i) {
                    i.setOpts(t)
                });
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.setOnContact = function(t) {
                switch (this.forEachWall(function(i) {
                    i.setOpts({
                        onContact: t
                    })
                }), t) {
                    case s.ON_CONTACT.REFLECT:
                        break;
                    case s.ON_CONTACT.WRAP:
                        this.forEachWall(function(i) {
                            i.setOpts({
                                onContact: t
                            }), i.on("wrap", function(t) {
                                var e = t.particle,
                                    o = i.opts.n,
                                    n = i.opts.d;
                                switch (i) {
                                    case s.SIDES.RIGHT:
                                        var r = s.SIDES.LEFT.opts.d;
                                        break;
                                    case s.SIDES.LEFT:
                                        var r = s.SIDES.TOP.opts.d;
                                        break;
                                    case s.SIDES.TOP:
                                        var r = s.SIDES.BOTTOM.opts.d;
                                        break;
                                    case s.SIDES.BOTTOM:
                                        var r = s.SIDES.TOP.opts.d
                                }
                                e.p.add(o.mult(n + r), e.p)
                            })
                        });
                        break;
                    case s.ON_CONTACT.ABSORB:
                }
            }, s.prototype.applyConstraint = function(t, i, e) {
                this.forEachWall(function(s) {
                    s.applyConstraint(t, i, e)
                })
            }, s.prototype.forEachWall = function(t) {
                for (var i = 0; i < this.opts.sides.length; i++) t(this.opts.sides[i])
            }, s.prototype.rotateZ = function(t) {
                this.forEachWall(function(i) {
                    var e = i.opts.n;
                    e.rotateZ(t).put(e)
                })
            }, s.prototype.rotateX = function(t) {
                this.forEachWall(function(i) {
                    var e = i.opts.n;
                    e.rotateX(t).put(e)
                })
            }, s.prototype.rotateY = function(t) {
                this.forEachWall(function(i) {
                    var e = i.opts.n;
                    e.rotateY(t).put(e)
                })
            }, e.exports = s
        }), define("famous-physics/math/matrix", ["require", "exports", "module"], function(require, exports, module) {
            function Matrix(t, i, e, s) {
                this.nRows = t, this.nCols = i, this.values = e || [
                    []
                ], s && this.loop(s)
            }
            Matrix.prototype = {
                loop: function(t) {
                    for (var i = this.values, e = 0; e < this.nRows; e++) {
                        i[e] = [];
                        for (var s = 0; s < this.nCols; s++) i[e][s] = t(e, s)
                    }
                    return this
                },
                set: function(t) {
                    return this.values = t, this
                },
                create: function(t) {
                    return this.loop(t)
                },
                identity: function() {
                    return this.loop(function(t, i) {
                        return t == i ? 1 : 0
                    })
                },
                print: function() {
                    for (var row = 0; row < this.nRows; row++) {
                        for (var str = "console.log(", col = 0; col < this.nCols; col++) str += "this.values[" + row + "][" + col + "].toFixed(1)", col < this.nCols - 1 && (str += ",");
                        str += ")", eval(str)
                    }
                },
                rightMult: function(t, i) {
                    t.nRows != this.nCols && console.warn("cant multiply");
                    for (var e = this.values, s = t.values, o = this.nRows, n = t.nCols, r = [], a = 0; o > a; a++) {
                        r[a] = [];
                        for (var h = 0; n > h; h++) {
                            for (var u = 0, p = 0; p < this.nCols; p++) u += e[a][p] * s[p][h];
                            r[a][h] = u
                        }
                    }
                    return i ? i.set(r) : new Matrix(o, n).set(r)
                },
                vMult: function(t) {
                    for (var i = t.length, e = [], s = 0; s < this.nRows; s++) {
                        for (var o = 0, n = 0; i > n; n++) o += this.values[s][n] * t[n];
                        e[s] = o
                    }
                    return e
                },
                diag: function(t) {
                    var i = function(i, e) {
                        return i == e ? t[i] : 0
                    };
                    return this.loop(i)
                },
                transpose: function(t) {
                    var i = function(t, i) {
                        return this.values[i][t]
                    }.bind(this);
                    return t ? t.loop(i) : new Matrix(this.nCols, this.nRows, [
                        []
                    ], i)
                }
            }, module.exports = Matrix
        }), define("famous-physics/math/GaussSeidel", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i) {
                this.numIterations = t || 10, this.tolerance = i || 1e-7, this.prevX = [], this.x = []
            }
            function o() {
                for (var t = 0, i = this.x.length, e = 0; i > e; e++) t += Math.pow(this.prevX[e] - this.x[e], 2) / (this.x[e] * this.x[e]);
                return Math.sqrt(t)
            }
            s.prototype.solve = function(t, i) {
                for (var e, s = this.numIterations, n = i.length, r = this.x, a = this.prevX, h = 0; n > h; h++) this.x[h] = 0;
                for (var u = 0, p = 1 / 0; s > u && p > this.tolerance;) {
                    for (var h = 0; n > h; h++) {
                        a[h] = r[h], e = 0;
                        for (var c = 0; n > c; c++) c != h && (e += t[h][c] * r[c]);
                        r[h] = (i[h] - e) / t[h][h]
                    }
                    p = o(), u++
                }
                return r
            }, e.exports = s
        }), define("famous-physics/constraints/joint", ["require", "exports", "module", "../math/matrix", "../math/GaussSeidel", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    length: 0
                }, t && this.setOpts(t);
                var i = 10,
                    e = 1e-5;
                this.solver = new n(i, e)
            }
            var o = t("../math/matrix"),
                n = t("../math/GaussSeidel"),
                r = t("../math/Vector");
            s.prototype.getPosition = function(t, i, e) {
                var s = 2,
                    n = 1,
                    a = [],
                    h = [],
                    u = [],
                    p = [],
                    c = [],
                    l = t;
                a[0] = l.getVel(), h[0] = l.p, u[0] = l.mInv, p[0] = l.f, c[0] = l.m, a[1] = i.v, h[1] = i.p, u[1] = i.mInv, p[1] = i.f, c[1] = i.m;
                for (var f = [], d = 0; n > d; d++) {
                    f[d] = [];
                    for (var m = 0; s > m; m++) {
                        var y;
                        m == d ? y = h[d].sub(h[d + 1]) : m == d + 1 && (y = h[d + 1].sub(h[d])), f[d][3 * m + 0] = y.x, f[d][3 * m + 1] = y.y, f[d][3 * m + 2] = y.z
                    }
                }
                var v = new o(n, 3 * s);
                v.set(f);
                for (var g = [], d = 0; n > d; d++) {
                    g[d] = [];
                    for (var m = 0; s > m; m++) {
                        var y;
                        m == d ? y = a[d].sub(a[d + 1]) : m == d + 1 && (y = a[d + 1].sub(a[d])), g[d][3 * m + 0] = y.x, g[d][3 * m + 1] = y.y, g[d][3 * m + 2] = y.z
                    }
                }
                for (var S = [], w = [], x = 0; s > x; x++) S[3 * x + 0] = u[x], S[3 * x + 1] = u[x], S[3 * x + 2] = u[x], w[3 * x + 0] = a[x].x, w[3 * x + 1] = a[x].y, w[3 * x + 2] = a[x].z;
                var b = new o(3 * s, 3 * s).diag(S),
                    T = new o(n, n);
                v.rightMult(b).rightMult(v.transpose(), T);
                for (var O = v.vMult(w), _ = 1, P = [], x = 0; n > x; x++) {
                    var C = this.length,
                        M = h[x + 1].sub(h[x]).normSquared();
                    P[x] = .5 * (M - C * C)
                }
                for (var z = [], E = 0; n > E; E++) z[E] = -O[E] - _ / e * P[E];
                for (var I = this.solver.solve(T.values, z), k = v.transpose().vMult(I), F = [], x = 0; s > x; x++) F[x] = new r(k[3 * x + 0], k[3 * x + 1], k[3 * x + 2]);
                for (var x = 0; s > x; x++) {
                    var w = a[x],
                        A = c[x],
                        V = F[x];
                    (0 != x || 0 != l.id) && (1 == x && 0 == l.id ? w.add(V.sub(F[0]).div(A), w) : w.add(V.div(A), w))
                }
            }, s.prototype.getError = function() {}, e.exports = s
        }), define("famous-physics/forces/Repulsion", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    strength: 1,
                    anchor: void 0,
                    radii: {
                        min: 0,
                        max: 1 / 0
                    },
                    cutoff: 0,
                    cap: 1 / 0,
                    decayFunction: s.DECAY_FUNCTIONS.GRAVITY
                }, t && this.setOpts(t), this.setOpts(t), this.disp = new n, o.call(this)
            }
            var o = t("famous-physics/forces/Force"),
                n = t("famous-physics/math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.DECAY_FUNCTIONS = {
                LINEAR: function(t, i) {
                    return Math.max(1 - 1 / i * t, 0)
                },
                MORSE: function(t, i) {
                    var e = 0 == i ? 100 : i,
                        s = t + e * (1 - Math.log(2));
                    return Math.max(1 - Math.pow(1 - Math.exp(s / e - 1), 2), 0)
                },
                INVERSE: function(t, i) {
                    return 1 / (1 - i + t)
                },
                GRAVITY: function(t, i) {
                    return 1 / (1 - i + t * t)
                }
            }, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.applyForce = function(t, i) {
                var e = this.opts,
                    s = this.force,
                    o = this.disp,
                    n = e.strength,
                    r = e.anchor || i.p,
                    a = e.cap,
                    h = e.cutoff,
                    u = e.radii.max,
                    p = e.radii.min,
                    c = e.decayFunction;
                if (0 != n) for (var l in t) {
                    var f = t[l];
                    if (f != i) {
                        var d = f.m,
                            m = f.p;
                        o.set(m.sub(r));
                        var y = o.norm();
                        u > y && y > p && (s.set(o.normalize(n * d * c(y, h)).cap(a)), f.applyForce(s))
                    }
                }
            }, e.exports = s
        }), define("famous-physics/forces/TorqueSpring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    period: 300,
                    dampingRatio: 0,
                    length: 0,
                    lMin: 0,
                    lMax: 1 / 0,
                    anchor: void 0,
                    forceFunction: s.FORCE_FUNCTIONS.HOOK,
                    callback: void 0,
                    callbackTolerance: 1e-7
                }, t && this.setOpts(t), this.torque = new h, this.init(), this._canFireCallback = void 0, a.call(this), this.disp = new h(0, 0, 0)
            }
            function o(t) {
                this.forceFunction = t
            }
            function n(t) {
                t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
            }
            function r(t) {
                t.damping = 4 * Math.PI * t.dampingRatio / t.period
            }
            var a = t("famous-physics/forces/Force"),
                h = t("famous-physics/math/Vector");
            s.prototype = Object.create(a.prototype), s.prototype.constructor = a, s.FORCE_FUNCTIONS = {
                FENE: function(t, i) {
                    var e = .99 * i,
                        s = Math.max(Math.min(t, e), -e);
                    return s / (1 - s * s / (i * i))
                },
                HOOK: function(t) {
                    return t
                }
            }, s.prototype.init = function() {
                var t = this.opts;
                o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
            }, s.prototype.applyForce = function(t) {
                for (var i = this.torque, e = this.opts, s = this.disp, o = e.stiffness, n = e.damping, r = e.length, a = e.anchor, h = 0; h < t.length; h++) {
                    var u = t[h];
                    s.set(a.sub(u.q));
                    var p = s.norm() - r;
                    if (0 == p) return;
                    var c = u.m;
                    o *= c, n *= c, i.set(s.normalize(o * this.forceFunction(p, this.opts.lMax))), n && i.add(u.w.mult(-n), i), u.applyTorque(i)
                }
            }, s.prototype.setOpts = function(t) {
                void 0 !== t.anchor && (t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
            }, e.exports = s
        }), define("famous-physics/forces/VectorField", ["require", "exports", "module", "famous-physics/forces/Force", "../math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    strength: 1,
                    field: s.FIELDS.CONSTANT
                }, t && this.setOpts(t), this.setFieldOptions(this.opts.field), this.timeDependent = 3 == this.opts.field.length, this.tOrig = void 0, this.register = new n(0, 0, 0), o.call(this)
            }
            var o = t("famous-physics/forces/Force"),
                n = t("../math/Vector");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FIELDS = {
                CONSTANT: function(t, i) {
                    return t.set(i.direction)
                },
                LINEAR: function(t, i) {
                    return t.set(t.mult(i.k))
                },
                RADIAL_GRAVITY: function(t) {
                    return t.set(t.mult(-1, t))
                },
                SPHERE_ATTRACTOR: function(t, i) {
                    return t.set(t.mult((i.radius - t.norm()) / t.norm()))
                },
                POINT_ATTRACTOR: function(t, i) {
                    return t.set(i.p.sub(t))
                }
            }, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, s.prototype.evaluate = function(t, i) {
                return this.register.set(t), this.opts.field(this.register, this.opts, i)
            }, s.prototype.applyForce = function(t) {
                var i, e = this.force;
                this.timeDependent ? (this.tOrig && (this.tOrig = Date.now()), i = .001 * (Date.now() - this.tOrig)) : i = void 0;
                for (var s = 0; s < t.length; s++) {
                    var o = t[s];
                    e.set(this.evaluate(o.p, i).mult(o.m * this.opts.strength)), o.applyForce(e)
                }
            }, s.prototype.setFieldOptions = function(t) {
                var i = s.FIELDS;
                switch (t) {
                    case i.CONSTANT:
                        this.opts.direction || (this.opts.direction = new n(0, 1, 0));
                        break;
                    case i.POINT_ATTRACTOR:
                        this.opts.p || (this.opts.p = new n(0, 0, 0));
                        break;
                    case i.SPHERE_ATTRACTOR:
                        this.opts.radius || (this.opts.radius = 1);
                        break;
                    case i.LINEAR:
                        this.opts.k || (this.opts.k = 1)
                }
            }, e.exports = s
        }), define("famous-physics/forces/rotationalDrag", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    strength: .01,
                    forceFunction: s.FORCE_FUNCTIONS.LINEAR
                }, t && this.setOpts(t), o.call(this)
            } {
                var o = t("famous-physics/forces/Force");
                t("famous-physics/math/Vector")
            }
            s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
                LINEAR: function(t) {
                    return t
                },
                QUADRATIC: function(t) {
                    return t.mult(t.norm())
                }
            }, s.prototype.applyForce = function(t) {
                var i = this.opts.strength,
                    e = this.opts.forceFunction,
                    s = this.force;
                for (var o in t) {
                    var n = t[o];
                    e(n.w).mult(-100 * i).put(s), n.applyTorque(s)
                }
            }, s.prototype.setOpts = function(t) {
                for (var i in t) this.opts[i] = t[i]
            }, e.exports = s
        }), define("famous-physics/integrator/verlet", ["require", "exports", "module", "../math/Vector"], function(t, i, e) {
            function s(t) {
                t = t || {}, this.vCap = t.vCap || 1 / 0, this.aCap = t.aCap || 1 / 0, this.drag = t.drag || 1, this.diff = new o, this.pOldCopy = new o, this.dragVector = new o
            }
            var o = t("../math/Vector");
            s.prototype.integrate = function(t, i, e) {
                var s = t.pOld,
                    o = t.p,
                    n = t.a;
                if (this.diff.set(o.sub(s)), e) {
                    var r = t.v;
                    t.hasImmunity("velocity") || r.add(n.mult(.5 * i), r), t.hasImmunity("position") || (s.set(o), o.add(r.mult(i), o))
                } else this.pOldCopy.set(s), t.hasImmunity("position") || (this.dragVector.set(this.diff.mult(this.drag)), s.set(o), o.add(n.mult(i * i), o), o.add(this.dragVector, o))
            }, s.prototype.integrateVelocity = function(t, i, e) {
                var s = t.p,
                    o = t.a;
                if (e) {
                    var n = t.v;
                    n.add(o.mult(.5 * i), n), s.add(n.mult(i), s)
                } else s.add(o.mult(i * i), s)
            }, s.prototype.integratePosition = function(t) {
                var i = t.p,
                    e = t.pOld,
                    s = this.pOldCopy;
                s.set(e), e.set(i), i.add(i.sub(s).mult(this.drag), i)
            }, e.exports = s
        }), define("famous-physics/math/Random", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i) {
                return t + Math.random() * (i - t)
            }
            function o(t, i) {
                return Math.floor(t + Math.random() * (i - t + 1))
            }
            e.exports = {
                integer: function(t, i, e) {
                    if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                        for (var s = [], n = 0; e > n; n++) s.push(o(t, i));
                        return s
                    }
                    return o(t, i)
                },
                range: function(t, i, e) {
                    if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                        for (var o = [], n = 0; e > n; n++) o.push(s(t, i));
                        return o
                    }
                    return s(t, i)
                },
                sign: function(t) {
                    return t = void 0 !== t ? t : .5, Math.random() < t ? 1 : -1
                },
                bool: function(t) {
                    return t = void 0 !== t ? t : .5, Math.random() < t
                }
            }
        }), define("famous-physics/utils/PhysicsTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                this.defaultDefinition = {
                    spring: {
                        period: 300,
                        dampingRatio: .5
                    },
                    v: 0,
                    wall: !1
                }, t = t || 0, this._anchor = new g(t, 0, 0), this.endState = t, this.prevState = void 0, this.direction = void 0, this.atRest = !0, this.spring = new y({
                    anchor: this._anchor
                }), this.wall = new v({
                    restitution: .5,
                    k: 0,
                    n: new g(-1, 0, 0)
                }), this.attachedWall = void 0, this.PE = new m, this.particle = this.PE.createParticle({
                    p: [t, 0, 0]
                }), this.attachedSpring = this.PE.attach(this.spring, this.particle)
            }
            function o() {
                if (!this.atRest) {
                    this.PE.step();
                    var t = n.call(this);
                    S > t && (this.atRest = !0, p.call(this, this.endState), this.callback && this.callback())
                }
            }
            function n() {
                return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
            }
            function r(t) {
                this.spring.setOpts(t.spring), c.call(this, t.v), t.wall ? h.call(this) : u.call(this)
            }
            function a(t) {
                this.prevState = this.endState, this.endState = t, this.direction = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, void 0 !== this.attachedSpring && (this._anchor.x = t), void 0 !== this.attachedWall && this.wall.setOpts({
                    d: Math.abs(t),
                    n: [-this.direction, 0, 0]
                }), c.call(this, this.direction * f.call(this))
            }
            function h() {
                this.attachedWall = this.PE.attach(this.wall, this.particle)
            }
            function u() {
                void 0 !== this.attachedWall && this.PE.detach(this.attachedWall)
            }
            function p(t) {
                this.particle.p.x = t
            }
            function c(t) {
                this.particle.v.x = t
            }
            function l() {
                return this.particle.p.x
            }
            function f() {
                return this.particle.v.x
            }
            function d(t) {
                this.callback = t
            }
            var m = t("famous-physics/PhysicsEngine"),
                y = t("famous-physics/constraints/StiffSpring"),
                v = t("famous-physics/constraints/Wall"),
                g = t("famous-physics/math/Vector");
            s.forceFunctions = y.forceFunctions;
            var S = 1e-5;
            s.prototype.reset = function(t, i) {
                t = t || 0, i = i || 0, this.prevState = void 0, p.call(this, t), c.call(this, i), a.call(this, t), d.call(this, void 0)
            }, s.prototype.getVelocity = function() {
                return o.call(this), f.call(this)
            }, s.prototype.halt = function() {
                this.set(this.get())
            }, s.prototype.get = function() {
                return o.call(this), l.call(this)
            }, s.prototype.set = function(t, i, e) {
                return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), d.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
            }, e.exports = s
        }), define("famous-physics/utils/PhysicsTransition2", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/forces/VectorField", "famous-physics/constraints/Wall", "famous-physics/math/Vector", "famous/EventHandler"], function(t, i, e) {
            function s(t) {
                t = t || 0, this.endState = t, this.prevState = void 0, this.direction = void 0, this.defaultDefinition = {
                    transition: {
                        curve: {
                            v: 1,
                            thrust: 0
                        },
                        duration: 500
                    },
                    bounce: {
                        period: 0,
                        dampingRatio: 0
                    },
                    walls: !1
                }, this._anchor = new _(t, 0, 0), this.stageOneActive = !1, this.attachedSpring = void 0, this.attachedWall = void 0, this.attachedThrust = void 0, this.eventHandler = new P, this.eventHandler.on("initStageTwo", y.bind(this)), this.PE = new x, this.particle = this.PE.createBody({
                    p: [t, 0, 0],
                    v: [0, 0, 0]
                }), this.spring = new b({
                    anchor: this._anchor
                }), this.thrust = new T({
                    strength: 0,
                    field: T.FIELDS.CONSTANT,
                    direction: [1, 0, 0]
                }), this.wall = new O({
                    restitution: .5,
                    k: 0,
                    n: new _(-1, 0, 0)
                })
            }
            function o() {
                return this.particle.p.x <= this.endState ? 1 : -1
            }
            function n(t) {
                this.direction = t
            }
            function r() {
                1 == this.stageOneActive && this.direction != o.call(this) && this.eventHandler.emit("initStageTwo")
            }
            function a(t) {
                var i, e, o = t.transition.duration,
                    n = t.transition.curve;
                "string" == typeof n && (n = s.TRANSITIONS[n]), e = this.direction * n.v, i = this.direction * n.thrust;
                var r = this.endState - this.particle.p.x;
                if (0 == o) this.v = e || 0, this.a = 0;
                else {
                    var a;
                    0 == i ? a = r / (e * o) : (0 > e * e + 2 * i * r && console.warn("unphysical choices for (v,a), target cannot be reached"), a = r > 0 ? (-e + Math.sqrt(e * e + 2 * i * r)) / (i * o) : (-e - Math.sqrt(e * e + 2 * i * r)) / (i * o)), this.v = a * e, this.a = a * a * i
                }
                var h = t.bounce;
                "string" == typeof h && (h = s.BOUNCE[h]), this.spring.setOpts({
                    period: h.period,
                    dampingRatio: h.dampingRatio
                }), this.wallsActive = t.walls
            }
            function h(t) {
                this.prevState = this.endState, this.endState = t, n.call(this, o.call(this))
            }
            function u(t) {
                void 0 === this.attachedSpring && (this._anchor.x = t, this.attachedSpring = this.PE.attach(this.spring, this.particle))
            }
            function p() {
                void 0 !== this.attachedSpring && (this.PE.detach(this.attachedSpring, this.particle), this.attachedSpring = void 0)
            }
            function c(t, i) {
                this.wallsActive && (this.wall.setOpts({
                    d: Math.abs(t),
                    n: [-i, 0, 0]
                }), this.attachedWall = this.PE.attach(this.wall, this.particle))
            }
            function l() {
                void 0 !== this.attachedWall && (this.PE.detach(this.attachedWall, this.particle), this.attachedWall = void 0)
            }
            function f(t) {
                this.thrust.setOpts({
                    strength: t
                }), this.attachedThrust = this.PE.attach(this.thrust, this.particle)
            }
            function d() {
                void 0 !== this.attachedThrust && (this.PE.detach(this.attachedThrust), this.attachedThrust = void 0)
            }
            function m() {
                this.stageOneActive = !0, p.call(this), d.call(this), l.call(this), f.call(this, this.a), v.call(this, this.v), C = Date.now()
            }
            function y() {
                console.log("Duration : ", Date.now() - C), this.stageOneActive = !1, d.call(this), g.call(this, this.endState), u.call(this, this.endState), c.call(this, this.endState, this.direction)
            }
            function v(t) {
                this.particle.v.x = t
            }
            function g(t) {
                this.particle.p.x = t
            }
            function S(t) {
                this.spring.setOpts({
                    callback: t
                })
            }
            function w() {
                this.PE.step(), r.call(this)
            }
            var x = t("famous-physics/PhysicsEngine"),
                b = t("famous-physics/constraints/StiffSpring"),
                T = t("famous-physics/forces/VectorField"),
                O = t("famous-physics/constraints/Wall"),
                _ = t("famous-physics/math/Vector"),
                P = t("famous/EventHandler");
            s.TRANSITIONS = {
                linear: {
                    v: 1,
                    thrust: 0
                },
                easeIn: {
                    v: 0,
                    thrust: 2
                },
                backIn: {
                    v: -1,
                    thrust: 2
                }
            }, s.BOUNCE = {
                none: {
                    dampingRatio: 0,
                    period: 0
                },
                low: {
                    dampingRatio: .5,
                    period: 300
                },
                medium: {
                    dampingRatio: .3,
                    period: 600
                },
                high: {
                    dampingRatio: .1,
                    period: 800
                }
            };
            var C;
            s.forceFunctions = b.forceFunctions, s.prototype.reset = function(t, i) {
                i = i || 0, t = t || 0, this.PE.detachAll(), g.call(this, t), v.call(this, i), S.call(this, void 0)
            }, s.prototype.set = function(t, i, e) {
                return i ? (h.call(this, t), a.call(this, i), S.call(this, e), m.call(this), void 0) : (this.reset(t), e && e(), void 0)
            }, s.prototype.get = function() {
                return w.call(this), this.particle.p.x
            }, s.prototype.getVelocity = function() {
                return w.call(this), this.particle.v.x
            }, s.prototype.getTarget = function() {
                return this.endState
            }, e.exports = s
        }), define("famous-physics/utils/StiffSpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({
                    anchor: this._anchor
                }), this.PE = new f, this.particle = this.PE.createParticle({
                    p: [t, 0, 0]
                }), this.PE.attach(this.spring, this.particle)
            }
            function o() {
                if (!this.atRest) {
                    this.PE.step();
                    var t = n.call(this);
                    y > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
                }
            }
            function n() {
                return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
            }
            function r(t) {
                var i = s.DEFAULT_OPTIONS;
                void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), this.spring.setOpts({
                    period: t.period,
                    dampingRatio: t.dampingRatio
                }), u.call(this, t.velocity)
            }
            function a(t) {
                this.prevState = this.endState, this.endState = t;
                var i;
                i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * c.call(this))
            }
            function h(t) {
                this.particle.p.x = t
            }
            function u(t) {
                this.particle.v.x = t
            }
            function p() {
                return this.particle.p.x
            }
            function c() {
                return this.particle.v.x
            }
            function l(t) {
                this.callback = t
            }
            var f = t("famous-physics/PhysicsEngine"),
                d = t("famous-physics/constraints/StiffSpring"),
                m = t("famous-physics/math/Vector");
            s.DEFAULT_OPTIONS = {
                period: 300,
                dampingRatio: .5,
                velocity: 0
            }, s.forceFunctions = d.forceFunctions;
            var y = 1e-5;
            s.prototype.reset = function(t, i) {
                t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
            }, s.prototype.getVelocity = function() {
                return o.call(this), c.call(this)
            }, s.prototype.setVelocity = function(t) {
                this.call(this, u(t))
            }, s.prototype.halt = function() {
                this.set(this.get())
            }, s.prototype.get = function() {
                return o.call(this), p.call(this)
            }, s.prototype.set = function(t, i, e) {
                return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
            }, e.exports = s
        }), define("famous-physics/utils/WallTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
            function s(t) {
                t = t || 0, this._anchor = new y(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({
                    anchor: this._anchor
                }), this.wall = new m, this.PE = new f, this.particle = this.PE.createParticle({
                    p: [t, 0, 0]
                }), this.PE.attach(this.spring, this.particle), this.PE.attach(this.wall, this.particle)
            }
            function o() {
                if (!this.atRest) {
                    this.PE.step();
                    var t = n.call(this);
                    v > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
                }
            }
            function n() {
                return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
            }
            function r(t) {
                var i = s.DEFAULT_OPTIONS;
                void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), void 0 === t.restitution && (t.restitution = i.restitution), this.spring.setOpts({
                    period: t.period,
                    dampingRatio: t.dampingRatio
                }), this.wall.setOpts({
                    restitution: t.restitution
                }), u.call(this, t.velocity)
            }
            function a(t) {
                this.prevState = this.endState, this.endState = t;
                var i;
                i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, this.wall.setOpts({
                    d: Math.abs(t),
                    n: [-i, 0, 0]
                }), u.call(this, i * c.call(this))
            }
            function h(t) {
                this.particle.p.x = t
            }
            function u(t) {
                this.particle.v.x = t
            }
            function p() {
                return this.particle.p.x
            }
            function c() {
                return this.particle.v.x
            }
            function l(t) {
                this.callback = t
            }
            var f = t("famous-physics/PhysicsEngine"),
                d = t("famous-physics/forces/Spring"),
                m = t("famous-physics/constraints/Wall"),
                y = t("famous-physics/math/Vector");
            s.DEFAULT_OPTIONS = {
                period: 300,
                dampingRatio: 0,
                restitution: .4,
                velocity: 0
            }, s.forceFunctions = d.forceFunctions;
            var v = 1e-5;
            s.prototype.reset = function(t, i) {
                t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
            }, s.prototype.getVelocity = function() {
                return o.call(this), c.call(this)
            }, s.prototype.setVelocity = function(t) {
                this.call(this, u(t))
            }, s.prototype.halt = function() {
                this.set(this.get())
            }, s.prototype.get = function() {
                return o.call(this), p.call(this)
            }, s.prototype.set = function(t, i, e) {
                return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
            }, e.exports = s
        }), define("famous-sync/FastClick", ["require", "exports", "module"], function() {
            if (window.CustomEvent) {
                var t = 300,
                    i = {};
                document.addEventListener("touchstart", function(t) {
                    for (var e = Date.now(), s = 0; s < t.changedTouches.length; s++) {
                        var o = t.changedTouches[s];
                        i[o.identifier] = e
                    }
                }), window.addEventListener("touchmove", function(t) {
                    for (var e = 0; e < t.changedTouches.length; e++) {
                        var s = t.changedTouches[e];
                        delete i[s.identifier]
                    }
                }), document.addEventListener("touchend", function(e) {
                    for (var s = Date.now(), o = 0; o < e.changedTouches.length; o++) {
                        var n = e.changedTouches[o],
                            r = i[n.identifier];
                        if (r && t > s - r) {
                            e.preventDefault();
                            var a = new CustomEvent("click", {
                                bubbles: !0,
                                details: n
                            });
                            e.target.dispatchEvent(a)
                        }
                        delete i[n.identifier]
                    }
                })
            }
        }), define("famous-sync/TwoFingerSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
            function s(t, i) {
                this.targetGet = t, this.options = {
                    scale: 1
                }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new o, this.output = new o, o.setInputHandler(this, this.input), o.setOutputHandler(this, this.output), this.touchAId = void 0, this.posA = void 0, this.timestampA = void 0, this.touchBId = void 0, this.posB = void 0, this.timestampB = void 0, this.input.on("touchstart", this.handleStart.bind(this)), this.input.on("touchmove", this.handleMove.bind(this)), this.input.on("touchend", this.handleEnd.bind(this)), this.input.on("touchcancel", this.handleEnd.bind(this))
            }
            var o = t("famous/EventHandler");
            s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.scale && (this.options.scale = t.scale)
            }, s.prototype.handleStart = function(t) {
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var e = t.changedTouches[i];
                    this.touchAId ? this.touchBId || (this.touchBId = e.identifier, this.posB = [e.pageX, e.pageY], this.timestampB = Date.now(), this._startUpdate()) : (this.touchAId = e.identifier, this.posA = [e.pageX, e.pageY], this.timestampA = Date.now())
                }
            }, s.prototype.handleMove = function(t) {
                if (this.touchAId && this.touchBId) {
                    for (var i, e = this.timestampA, s = this.timestampB, o = 0; o < t.changedTouches.length; o++) {
                        var n = t.changedTouches[o];
                        n.identifier == this.touchAId ? (this.posA = [n.pageX, n.pageY], this.timestampA = Date.now(), i = this.timestampA - e) : n.identifier == this.touchBId && (this.posB = [n.pageX, n.pageY], this.timestampB = Date.now(), i = this.timestampB - s)
                    }
                    i && this._moveUpdate(i)
                }
            }, s.prototype.handleEnd = function(t) {
                for (var i = this.targetGet(), e = this.options.scale, s = 0; s < t.changedTouches.length; s++) {
                    var o = t.changedTouches[s];
                    (o.identifier == this.touchAId || o.identifier == this.touchBId) && (this.touchAId && this.touchBId && this.output.emit("end", {
                        p: i,
                        v: e * this._vel,
                        touches: [this.touchAId, this.touchBId],
                        angle: this._angle
                    }), this.touchAId = void 0, this.touchBId = void 0)
                }
            }, e.exports = s
        }), define("famous-sync/PinchSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
            function s(t, i) {
                n.call(this, t, i), this._dist = void 0
            }
            function o(t, i) {
                var e = i[0] - t[0],
                    s = i[1] - t[1];
                return Math.sqrt(e * e + s * s)
            }
            var n = t("./TwoFingerSync");
            s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
                this._dist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                    count: event.touches.length,
                    touches: [this.touchAId, this.touchBId],
                    distance: this._dist
                })
            }, s.prototype._moveUpdate = function(t) {
                var i = o(this.posA, this.posB),
                    e = i - this._dist,
                    s = e / t,
                    n = this.targetGet(),
                    r = this.options.scale;
                this.output.emit("update", {
                    p: n + r * e,
                    v: r * s,
                    touches: [this.touchAId, this.touchBId],
                    distance: i
                }), this._dist = i, this._vel = s
            }, e.exports = s
        }), define("famous-sync/RotateSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
            function s(t, i) {
                n.call(this, t, i), this._angle = void 0
            }
            function o(t, i) {
                var e = i[0] - t[0],
                    s = i[1] - t[1];
                return Math.atan2(s, e)
            }
            var n = t("./TwoFingerSync");
            s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
                this._angle = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                    count: event.touches.length,
                    touches: [this.touchAId, this.touchBId],
                    angle: this._angle
                })
            }, s.prototype._moveUpdate = function(t) {
                var i = o(this.posA, this.posB),
                    e = i - this._angle,
                    s = e / t,
                    n = this.targetGet(),
                    r = this.options.scale;
                this.output.emit("update", {
                    p: n + r * e,
                    v: r * s,
                    touches: [this.touchAId, this.touchBId],
                    angle: i
                }), this._angle = i, this._vel = s
            }, e.exports = s
        }), define("famous-sync/ScaleSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
            function s(t, i) {
                r.call(this, t, i), this._startDist = void 0, this._prevScale = void 0, this.input.on("pipe", n.bind(this))
            }
            function o(t, i) {
                var e = i[0] - t[0],
                    s = i[1] - t[1];
                return Math.sqrt(e * e + s * s)
            }
            function n() {
                this.touchAId = void 0, this.touchBId = void 0
            }
            var r = t("./TwoFingerSync");
            s.prototype = Object.create(r.prototype), s.prototype._startUpdate = function() {
                this._prevScale = 1, this._startDist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                    count: event.touches.length,
                    touches: [this.touchAId, this.touchBId],
                    distance: this._startDist
                })
            }, s.prototype._moveUpdate = function(t) {
                var i = o(this.posA, this.posB),
                    e = i / this._startDist,
                    s = e - this._prevScale,
                    n = s / t,
                    r = this.targetGet(),
                    a = this.options.scale;
                this.output.emit("update", {
                    p: r + a * s,
                    v: a * n,
                    touches: [this.touchAId, this.touchBId],
                    distance: i
                }), this._prevScale = e, this._vel = n
            }, e.exports = s
        }), define("famous-ui/Buttons/ButtonBase", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing"], function(t, i, e) {
            function s() {
                n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.surface = new o(this.options.surfaceOptions), this.surface.pipe(this), this.transform = new a({
                    size: this.surface.getSize()
                }), this.node.link(this.transform).link(this.surface), this.surface.pipe(this), this.surface.on("click", this._handleClick.bind(this)), this._state = !1
            }
            var o = t("famous/Surface"),
                n = t("famous/View"),
                r = t("famous/Matrix"),
                a = t("famous/Modifier"),
                h = t("famous-animation/Easing");
            s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                surfaceOptions: {},
                openState: r.identity,
                closeState: r.rotateZ(.75 * Math.PI),
                transition: {
                    curve: h.inOutBackNorm,
                    duration: 500
                }
            }, s.prototype._handleClick = function() {}, s.prototype.halt = function() {
                this.transform.halt()
            }, s.prototype.setTransform = function() {
                this.transform.setTransform.apply(this.transform, arguments)
            }, s.prototype.setOpacity = function() {
                this.transform.setOpacity.apply(this.transform, arguments)
            }, s.prototype.getSize = function() {
                return this.surface.getSize()
            }, e.exports = s
        }), define("famous-ui/Buttons/RotateButton", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "./ButtonBase"], function(t, i, e) {
            function s() {
                r.apply(this, arguments), this.transform.setOrigin([.5, .5]), this._state = !1
            }
            var o = (t("famous/Surface"), t("famous/View"), t("famous/Matrix")),
                n = (t("famous/Modifier"), t("famous-animation/Easing")),
                r = t("./ButtonBase");
            s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                surfaceOptions: {},
                openState: o.identity,
                closeState: o.rotateZ(.75 * Math.PI),
                transition: {
                    curve: n.inOutBackNorm,
                    duration: 500
                }
            }, s.prototype._handleClick = function(t) {
                t.stopPropagation(), this.toggle()
            }, s.prototype.getSize = function() {
                return this.surface.getSize()
            }, s.prototype.toggle = function() {
                0 == this._state ? this.open() : this.close()
            }, s.prototype.open = function() {
                this._state = !0, this.transform.halt(), this.emit("open"), this.transform.setTransform(this.options.closeState, this.options.transition)
            }, s.prototype.close = function() {
                this._state = !1, this.transform.halt(), this.emit("close"), this.transform.setTransform(this.options.openState, this.options.transition)
            }, e.exports = s
        }), define("famous-ui/Buttons/SpringButton", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous/View", "famous-physics/forces/Spring", "famous/Surface", "famous-physics/math/Vector", "famous-utils/Utils"], function(t, i, e) {
            function s() {
                a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.PE = new r, this.available = !0, this.anchor = this.PE.createParticle({
                    p: this.options.pos,
                    v: this.options.vel,
                    immunity: !0
                }), this.particle = this.PE.createParticle({
                    p: this.options.pos,
                    v: this.options.vel
                }), this.spring = new h({
                    period: this.options.springPeriod,
                    dampingRatio: this.options.springDampingRatio,
                    length: this.options.springLength,
                    anchor: this.options.pos,
                    callback: n.bind(this)
                }), this.PE.attach(this.spring, this.particle), this.surface = new u({
                    size: this.options.size,
                    content: this.options.content,
                    classes: this.options.surfaceClasses,
                    properties: this.options.surfaceProperties
                }), this.surface.pipe(this), this.on("click", o.bind(this))
            }
            function o() {
                this._addForce(this.options.clickForce)
            }
            function n() {
                this.options.limitTouches && (this.available = !0)
            }
            var r = t("famous-physics/PhysicsEngine"),
                a = t("famous/View"),
                h = t("famous-physics/forces/Spring"),
                u = t("famous/Surface"),
                p = (t("famous-physics/math/Vector"), t("famous-utils/Utils"));
            s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                size: [200, 200],
                pos: [0, 0, 0],
                vel: [0, 0, 0],
                springPeriod: 200,
                springDampingRatio: .8,
                springLength: 0,
                content: "",
                surfaceProperties: {},
                surfaceClasses: [],
                limitTouches: !1,
                forceMult: [10, 10, 10],
                padding: 0,
                callbackTolerance: 1e-4,
                clickForce: [0, 0, -.005]
            }, s.prototype.setPeriod = function(t) {
                this.spring.setPeriod(t)
            }, s.prototype.setDamping = function(t) {
                this.spring.setDampingRatio(t)
            }, s.prototype.setCallbackTolerance = function(t) {
                this.spring.opts.callbackTolerance = t
            }, s.prototype.addForce = function(t) {
                var i = {
                    x: 0,
                    y: 0,
                    z: 0
                };
                p.isArray(t) ? (i.x = t[0] * this.options.forceMult[0], i.y = t[1] * this.options.forceMult[1], i.z = t[2] * this.options.forceMult[2]) : (i.x = t.x * this.options.forceMult[0], i.y = t.y * this.options.forceMult[1], i.z = t.z * this.options.forceMult[2]), this.options.limitTouches ? this.available && (this.particle.applyForce(i), this.available = !1, this.emit("selection")) : (this.particle.applyForce(i), this.emit("selection"))
            }, s.prototype.render = function() {
                return this.PE.step(), {
                    opacity: 1,
                    transform: this.PE.getTransform(this.particle),
                    target: this.surface.render()
                }
            }, e.exports = s
        }), define("famous-ui/Buttons/SpringButton.ui", ["require", "exports", "module", "./SpringButton"], function(t, i, e) {
            function s() {
                o.apply(this, arguments), this.autoUI = [{
                    type: "label",
                    uiOptions: {
                        content: "PHYSICS",
                        properties: {
                            "border-bottom": "1px solid #f2786f",
                            color: "#f2786f",
                            "font-size": "16px"
                        }
                    }
                }, {
                    option: "springPeriod",
                    type: "slider",
                    uiOptions: {
                        range: [100, 2e3],
                        name: "SPRING DURATION"
                    }
                }, {
                    option: "springPeriod",
                    callback: this.setDamping,
                    type: "slider",
                    uiOptions: {
                        range: [.002, .8],
                        name: "SPRING DAMPING"
                    }
                }, {
                    type: "label",
                    uiOptions: {
                        content: "APPEARANCE",
                        properties: {
                            "border-bottom": "1px solid white",
                            color: "rgba( 255, 255, 255, 1 )",
                            "font-size": "16px"
                        }
                    }
                }, {
                    callback: this.setBackgroundColor,
                    type: "colorPicker",
                    uiOptions: {
                        name: "Background Color"
                    }
                }, {
                    callback: this.setBorderColor,
                    type: "colorPicker",
                    uiOptions: {
                        name: "Stroke Color"
                    }
                }, {
                    callback: this.setBorderRadius,
                    type: "slider",
                    uiOptions: {
                        range: [0, 100],
                        name: "BORDER RADIUS"
                    }
                }]
            }
            var o = t("./SpringButton");
            s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.setPeriod = function(t) {
                this.setOptions({
                    period: t
                })
            }, s.prototype.setDamping = function(t) {
                this.setOptions({
                    dampingRatio: t
                })
            }, s.prototype.setBackgroundColor = function(t) {
                this.surface.setProperties({
                    "background-color": t.getCSSColor()
                })
            }, s.prototype.setBorderColor = function(t) {
                this.surface.setProperties({
                    border: "1px solid " + t.getCSSColor()
                })
            }, s.prototype.setBorderRadius = function(t) {
                this.surface.setProperties({
                    "border-radius": t + "px"
                })
            }, e.exports = s
        }), define("famous-ui/ColorPicker/ColorButton", ["require", "exports", "module", "famous/EventHandler", "famous/CanvasSurface"], function(t, i, e) {
            function s(t, i) {
                this.size = t, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], o.call(this, {
                    size: this.size,
                    canvasSize: this.canvasSize
                }), this.color = i, this.colorSurface(this.color.getHex())
            }
            var o = (t("famous/EventHandler"), t("famous/CanvasSurface"));
            s.prototype = Object.create(o.prototype), s.prototype.colorSurface = function(t) {
                var i = this.getContext("2d");
                i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = t, i.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
            }, e.exports = s
        }), define("famous-ui/ColorPicker/CanvasPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous-utils/Utils", "famous-color/Color", "famous/Engine", "famous-animation/Easing", "./ColorButton", "famous/View"], function(t, i, e) {
            function s(t, i, e) {
                x.call(this, e), this.eventInput.pipe(this.eventOutput), this.size = t, this.color = i.clone(), this.name = name, this.pos = [], this._dirty = !0, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], this._selectedCoords = [v.map(this.options.pickerPosX, 0, 1, 0, this.size[0] - 1, !0), v.map(this.options.pickerPosY, 0, 1, 0, this.size[1] - 1, !0)], this.gradient = new d({
                    size: [this.size[0], this.size[0]],
                    canvasSize: [2 * this.size[0], 2 * this.size[0]]
                });
                var s = n.call(this, this.size[0] * this.options.pickerPosX, this.size[1] * this.options.pickerPosY);
                this.pickerTransform = new y({
                    transform: m.translate(s[0], s[1], 0)
                }), this.picker = this.options.colorPicker ? new w(this.options.pickerSize, this.color) : new f({
                    size: this.options.pickerSize,
                    classes: ["ui-color-picker"]
                }), this.picker.setProperties(this.options.pickerProperties), this._mousemove = h.bind(this), this._mouseup = u.bind(this), this.gradient.on("mousedown", r.bind(this)), this.picker.on("mousedown", r.bind(this)), this.gradient.on("touchstart", a.bind(this)), this.picker.on("touchstart", a.bind(this)), this.gradient.on("touchmove", p.bind(this)), this.picker.on("touchmove", p.bind(this)), this.gradient.on("click", c), this.picker.on("click", c), this.on("updatePosition", this.updateColor.bind(this)), this.on("updatePosition", o.bind(this)), this.node.add(this.pickerTransform).link(this.picker), this.node.add(this.gradient)
            }
            function o(t) {
                var i = n.call(this, this._selectedCoords[0], this._selectedCoords[1]);
                this.options.railsY && (i[1] = 0), this.pickerTransform.halt(), t.shouldAnimate ? this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ), this.options.transition) : this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ))
            }
            function n(t, i) {
                var e = .5 * this.options.pickerSize[0];
                return [v.map(t, 0, this.size[0], -e, this.size[0] - e, !0), this.options.railsY ? 0 : v.map(i, 0, this.size[1], -e, this.size[1] - e, !0)]
            }
            function r(t) {
                t.preventDefault(), t.stopPropagation(), this._dirty = !0, l.call(this, t, !0), g.on("mousemove", this._mousemove), g.on("mouseup", this._mouseup)
            }
            function a(t) {
                this._dirty = !0, t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
            }
            function h(t) {
                t.preventDefault(), t.stopPropagation(), l.call(this, t)
            }
            function u(t) {
                t.preventDefault(), t.stopPropagation(), g.unbind("mousemove", this._mousemove), g.unbind("mouseup", this._mouseup)
            }
            function p(t) {
                t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
            }
            function c(t) {
                t.preventDefault(), t.stopPropagation()
            }
            function l(t, i) {
                this._dirty && (this.pos = v.getSurfacePosition(this.gradient), this._dirty = !1), this._selectedCoords = [v.clamp(t.pageX - this.pos[0], 0, this.size[0] - 1), v.clamp(t.pageY - this.pos[1], 0, this.size[1] - 1)], this.emit("updatePosition", {
                    shouldAnimate: i
                })
            }
            var f = t("famous/Surface"),
                d = t("famous/CanvasSurface"),
                m = t("famous/Matrix"),
                y = (t("famous/EventHandler"), t("famous/Modifier")),
                v = t("famous-utils/Utils"),
                g = (t("famous-color/Color"), t("famous/Engine")),
                S = t("famous-animation/Easing"),
                w = t("./ColorButton"),
                x = t("famous/View");
            s.prototype = Object.create(x.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                pickerSize: [4, 25],
                transition: {
                    curve: S.inSineNorm,
                    duration: 50
                },
                pickerPosX: 0,
                pickerPosY: 0,
                pickerZ: 2,
                railsY: !1,
                pickerProperties: {},
                colorPicker: !1
            }, s.prototype.drawGradient = function() {}, s.prototype.getColor = function() {
                return this.color
            }, s.prototype.getSize = function() {
                return this.size
            }, s.prototype.updateColor = function() {
                var t = this.gradient.getContext("2d"),
                    i = t.getImageData(2 * this._selectedCoords[0], 2 * this._selectedCoords[1], 1, 1).data;
                this.color.setFromRGBA(i[0], i[1], i[2]), this.emit("change", {
                    value: this.color
                })
            }, e.exports = s
        }), define("famous-ui/Easing/CanvasDrawer", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e, s, o) {
                t.beginPath(), t.moveTo(i, e), t.lineTo(s, o), t.stroke(), t.closePath()
            }
            function o(t, i, e, s, o) {
                t.beginPath(), t.rect(i, e, s, o), t.fill(), t.closePath()
            }
            e.exports = {
                lineTo: s,
                rect: o
            }
        }), define("famous-ui/ColorPicker/AlphaPicker", ["require", "exports", "module", "famous/Surface", "famous-color/Color", "./CanvasPicker", "famous-ui/Easing/CanvasDrawer"], function(t, i, e) {
            function s(t, i, e) {
                var s = e || [35, 35];
                r.call(this, t, i, {
                    railsY: !0,
                    pickerProperties: {
                        border: "3px solid white",
                        borderRadius: t[0] / 2 + "px",
                        boxShadow: "0px 1px 0px #888",
                        marginTop: "2px"
                    },
                    pickerPosX: i.a,
                    pickerSize: s,
                    colorPicker: !0,
                    normalizedColors: !0
                }), this.alpha = this.color.a, this.backgroundCanvas = n.call(this), this.drawGradient(), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
            }
            function o(t, i, e, s) {
                colorAlpha = s.substring(0, s.length - 2);
                var o = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
                o.addColorStop(0, colorAlpha + "0)"), o.addColorStop(1, colorAlpha + "1)"), t.fillStyle = o, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
            }
            function n() {
                var t = document.createElement("canvas");
                t.width = this.canvasSize[0], t.height = this.canvasSize[1];
                var i = t.getContext("2d");
                i.fillStyle = "#ffffff", a.rect(i, 0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = "#cccccc";
                for (var e = 16, s = 2, o = height = this.canvasSize[0] / e, n = 0; e > n; n++) for (var r = 0; s > r; r++) n % 2 == 0 && r % 2 == 0 ? a.rect(i, o * n, r * height, o, height) : n % 2 == 1 && r % 2 == 1 && a.rect(i, o * n, r * height, o, height);
                return t
            }
            var r = (t("famous/Surface"), t("famous-color/Color"), t("./CanvasPicker")),
                a = t("famous-ui/Easing/CanvasDrawer");
            s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function(t) {
                this.picker.colorSurface(t.value.getCSSColor())
            }, s.prototype.setColor = function(t) {
                this.color = t, this.drawGradient(), this.drawPickerColor({
                    value: this.color
                })
            }, s.prototype.drawGradient = function() {
                var t = this.gradient.getContext("2d");
                t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), t.drawImage(this.backgroundCanvas, 0, 0);
                var i = this.color.clone();
                i.a = 0, o.call(this, t, [0, 0], [1, 1], i.getCSSColor())
            }, s.prototype.updateColor = function() {
                var t = parseFloat((this._selectedCoords[0] / this.size[0]).toFixed(2));
                this.color.a = t, this.emit("change", {
                    value: this.color
                })
            }, e.exports = s
        }), define("famous-ui/ColorPicker/GradientPicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function(t, i, e) {
            function s(t, i) {
                var e = i.getSaturation() / 100,
                    s = i.getBrightness() / 100;
                i.setSaturation(100), n.call(this, t, i, {
                    pickerSize: [26, 26],
                    pickerProperties: {
                        borderRadius: "13px",
                        border: "1px solid white"
                    },
                    pickerPosX: e,
                    pickerPosY: 1 - s
                }), this.drawGradient(this.color.getCSSColor())
            }
            function o(t, i, e, s, o) {
                var n = t.createLinearGradient(this.canvasSize[0] * s[0], this.canvasSize[1] * s[1], this.canvasSize[0] * o[0], this.canvasSize[1] * o[1]);
                n.addColorStop(0, i), n.addColorStop(1, e), t.fillStyle = n, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
            }
            var n = (t("famous-color/Color"), t("./CanvasPicker"));
            s.prototype = Object.create(n.prototype), s.prototype.drawGradient = function(t) {
                var i = this.gradient.getContext("2d");
                i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, i, "rgba(255, 255, 255, 1)", t, [0, .5], [1, .5]), o.call(this, i, "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)", [.5, 1], [.5, 0]), this.updateColor()
            }, e.exports = s
        }), define("famous-ui/ColorPicker/HuePicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function(t, i, e) {
            function s(t, i, e) {
                var s = new n,
                    o = i.getHue();
                s.setFromHSL(o, 100, 50);
                var a = e || [35, 35];
                r.call(this, t, s, {
                    railsY: !0,
                    pickerProperties: {
                        border: "2px solid white",
                        borderRadius: t[0] / 2 + "px",
                        boxShadow: "0px 1px 0px #888",
                        marginTop: "2px"
                    },
                    pickerPosX: 1 - o / 360,
                    pickerSize: a,
                    colorPicker: !0,
                    normalizedColors: !0
                }), this.drawGradient(this.color.getCSSColor()), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
            }
            function o(t, i, e) {
                var s = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
                s.addColorStop(0, "rgb(255,   0,   0)"), s.addColorStop(.16, "rgb(255,   0, 255)"), s.addColorStop(.33, "rgb(0,     0, 255)"), s.addColorStop(.5, "rgb(0,   255, 255)"), s.addColorStop(.67, "rgb(0,   255,   0)"), s.addColorStop(.83, "rgb(255, 255,   0)"), s.addColorStop(1, "rgb(255,   0,   0)"), t.fillStyle = s, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
            }
            var n = t("famous-color/Color"),
                r = t("./CanvasPicker");
            s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function(t) {
                this.pickerColor !== t.value.hex && (this.picker.colorSurface(t.value.hex), this.pickerColor = t.value.hex)
            }, s.prototype.drawGradient = function() {
                var t = this.gradient.getContext("2d");
                t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, t, [0, .5], [1, .5])
            }, e.exports = s
        }), define("famous-ui/ColorPicker/ColorPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Transitionable", "famous-utils/Utils", "famous-color/Color", "famous/View", "famous/Engine", "famous-animation/Easing", "famous-utils/Time", "./GradientPicker", "./HuePicker", "./AlphaPicker", "./ColorButton"], function(t, i, e) {
            function s() {
                f.apply(this, arguments), this.color = this.options.defaultColor, this.sizeState = new c([0, 0]), this.visible = !1, this.boundListener = !1, this._closeListen = this.hide.bind(this)
            }
            function o(t) {
                var i = t.value.getCSSColor();
                this.gradientPicker.drawGradient(i), a.call(this)
            }
            function n() {
                a.call(this)
            }
            function r() {
                a.call(this)
            }
            function a() {
                var t = this.gradientPicker.getColor();
                this.options.useAlpha && (t.a = this.alphaPicker.getColor().a, this.alphaPicker.setColor(t)), this.color = t, h.call(this, {
                    value: this.color
                }), this.eventOutput.emit("change", {
                    value: this.color
                })
            }
            function h(t) {
                var i = t.value.getCSSColor();
                this.openingSurface.colorSurface(i)
            }
            var u = (t("famous/Surface"), t("famous/CanvasSurface"), t("famous/Matrix")),
                p = (t("famous/EventHandler"), t("famous/Modifier")),
                c = t("famous/Transitionable"),
                l = (t("famous-utils/Utils"), t("famous-color/Color")),
                f = t("famous/View"),
                d = t("famous/Engine"),
                m = t("famous-animation/Easing"),
                y = (t("famous-utils/Time"), t("./GradientPicker")),
                v = t("./HuePicker"),
                g = t("./AlphaPicker"),
                S = t("./ColorButton");
            s.prototype = Object.create(f.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                transition: {
                    curve: m.inOutBackNorm,
                    duration: 400
                },
                hueSize: 30,
                pickerSize: [25, 25],
                size: void 0,
                defaultColor: new l(80, 255, 255),
                name: "",
                useAlpha: !0,
                padding: 5
            }, s.prototype.init = function() {
                this.defaultPositions = {
                    gradientPicker: u.translate(0, this.options.size[1], 1),
                    huePicker: u.translate(0, this.options.size[1] + this.options.size[0], 1),
                    alphaPicker: u.translate(0, 2 * this.options.size[1] + this.options.size[0] + 3 * this.options.padding, 1)
                }, this.gradientPicker = new y([this.options.size[0], this.options.size[0]], this.color), this.gradientTransform = new p({
                    transform: this.defaultPositions.gradientPicker
                }), this.huePicker = new v([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.hueTransform = new p({
                    transform: this.defaultPositions.huePicker
                }), this.openingSurface = new S(this.options.size, this.color, this.options.name), this.openingTransform = new p, this.node.add(this.hueTransform).link(this.huePicker), this.node.add(this.openingTransform).link(this.openingSurface), this.node.add(this.gradientTransform).link(this.gradientPicker), this.openingSurface.on("click", this.togglePicker.bind(this)), this.huePicker.on("change", o.bind(this)), this.gradientPicker.on("change", n.bind(this)), this.on("change", h.bind(this)), this.options.useAlpha && (this.alphaPicker = new g([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.alphaTransform = new p({
                    transform: this.defaultPositions.alphaPicker
                }), this.node.add(this.alphaTransform).link(this.alphaPicker), this.alphaPicker.on("change", r.bind(this))), this.hide()
            }, s.prototype.set = function() {}, s.prototype.get = function() {
                return this.color
            }, s.prototype.togglePicker = function() {
                0 == this.visible ? this.show() : this.hide()
            }, s.prototype.hide = function() {
                this.visible = !1;
                var t = u.multiply(u.scale(1, 1e-7), this.defaultPositions.gradientPicker);
                this.hueTransform.halt(), this.hueTransform.setOpacity(0, this.options.transition), this.hueTransform.setTransform(t, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(0, this.options.transition), this.gradientTransform.setTransform(t, this.options.transition), this.options.useAlpha && (this.alphaTransform.halt(), this.alphaTransform.setOpacity(0, this.options.transition), this.alphaTransform.setTransform(t, this.options.transition)), this.sizeState.set([this.options.size[0], this.options.size[1]], this.options.transition), 1 == this.boundListener && this.unbindClickClose()
            }, s.prototype.show = function() {
                this.emit("showing"), this.visible = !0, this.hueTransform.halt(), this.hueTransform.setOpacity(1, this.options.transition), this.hueTransform.setTransform(this.defaultPositions.huePicker, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(1, this.options.transition), this.gradientTransform.setTransform(this.defaultPositions.gradientPicker, this.options.transition), this.options.useAlpha ? (this.alphaTransform.halt(), this.alphaTransform.setOpacity(1, this.options.transition), this.alphaTransform.setTransform(this.defaultPositions.alphaPicker, this.options.transition), this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1] + this.alphaPicker.getSize()[1]], this.options.transition)) : this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1]], this.options.transition), d.defer(this.bindClickClose.bind(this))
            }, s.prototype.setSize = function(t) {
                this.options.size = t
            }, s.prototype.getSize = function() {
                return this.options.size ? this.sizeState.get() : void 0
            }, s.prototype.bindClickClose = function() {
                d.on("click", this._closeListen), this.boundListener = !0
            }, s.prototype.unbindClickClose = function() {
                d.unbind("click", this._closeListen), this.boundListener = !1
            }, s.prototype.render = function() {
                return {
                    size: this.sizeState.get(),
                    target: this.node.render()
                }
            }, e.exports = s
        }), define("famous-ui/Dropdown/DropdownItem", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview"], function(t, i, e) {
            function s(t, i, e) {
                n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = i, this._isSelected = e || !1, this._styleType, this.options.itemContent.unshift(this.options.name), this.surface = new h({
                    size: this.options.itemSize,
                    content: this.options.template.apply(this, this.options.itemContent)
                }), this.transform = new a, o.call(this), this.surface.pipe(this), this.surface.on("click", this.emit.bind(this, "selection", {
                    value: this.value,
                    origin: this
                })), this.node.link(this.transform).link(this.surface)
            }
            function o() {
                this.transform.halt(), this._isSelected ? (this.surface.setProperties(this.options.selectedProperties), this._styleType = !0, this.transform.setTransform(r.move(r.scale(.7, .7), [.125 * this.options.itemSize[0], .125 * this.options.itemSize[1]])), this.transform.setTransform(r.identity, this.options.squishCurve, this.emit.bind(this, "selectionEnd"))) : (this.surface.setProperties(this.options.properties), this._styleType = !1, this.transform.getFinalTransform() !== r.identity && this.transform.setTransform(r.identity))
            } {
                var n = t("famous/View"),
                    r = t("famous/Matrix"),
                    a = t("famous/Modifier"),
                    h = t("famous/Surface"),
                    u = t("famous-animation/Easing");
                t("famous-utils/Utils"), t("famous-views/Scrollview")
            }
            s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                name: "Food",
                itemSize: [216, 50],
                classes: [],
                properties: {
                    color: "#ffffff",
                    "background-color": "#333",
                    border: "1px solid #ccc"
                },
                selectedProperties: {},
                template: function(t) {
                    return '<h2 style="padding: 10px;">' + t + "</h2>"
                },
                defaultCurve: {
                    curve: u.inOutBackNorm,
                    duration: 400
                },
                squishCurve: {
                    curve: u.outBounceNorm,
                    duration: 400
                },
                itemContent: []
            }, s.prototype.setTemplate = function() {}, s.prototype.setSelected = function(t) {
                this._isSelected = t, o.call(this)
            }, s.prototype.getSize = function() {
                return this.surface.getSize()
            }, s.prototype.getName = function() {
                return this.options.name
            }, e.exports = s
        }), define("famous-ui/Dropdown/Dropdown", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview", "./DropdownItem", "famous/ContainerSurface"], function(t, i, e) {
            function s() {
                f.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.options.scrollviewOpts.clipSize = this.options.height, this.label = void 0, this.defaultMtx = void 0, this.closedMtx = void 0, this.arrowClosedPos = void 0, this.arrowOpenPos = void 0, this.labelTemplate = void 0, this.itemTemplate = void 0, this.itemOpts = void 0, this.sizeState = new y([0, 0]), this.items = [], this._isOpen = !1, this.initialized = !1
            }
            function o() {
                this.label = new v({
                    content: this._getLabelContent(this.options.defaultSelected),
                    size: this.options.itemSize
                }), this.label.setProperties(this.options.labelProperties), this.labelTransform = new m, this.node.add(this.labelTransform).link(this.label), this.label.on("click", this.toggleMenu.bind(this))
            }
            function n() {
                this.arrow = new v({
                    size: this.options.arrowSize,
                    content: this.options.arrowContent
                }), this.arrowTransform = new m({
                    transform: this.arrowClosedPos
                }), this.node.add(this.arrowTransform).link(this.arrow)
            }
            function r() {
                this.scrollviewContainer = new x({
                    size: [this.options.itemSize[0], this.options.height],
                    properties: {
                        overflow: "hidden"
                    }
                }), this.scrollview = new S(this.options.scrollviewOpts), this.scrollview.sequenceFrom(this.items), this.scrollviewTransform = new m({
                    transform: this.closedMtx,
                    opacity: 0,
                    size: [this.options.itemSize[0], this.options.itemSize[1]]
                }), this.node.add(this.scrollviewTransform).link(this.scrollviewContainer), this.scrollviewContainer.add(this.scrollview)
            }
            function a() {
                for (var t = 0; t < this.options.items.length; t++) {
                    var i = this.options.items[t];
                    this.addItem(i.name, i.value, i.content)
                }
                this.value = this.items[this.options.defaultSelected].value
            }
            function h(t) {
                var i = t ? this.arrowOpenPos : this.arrowClosedPos;
                this.arrowTransform.setTransform(i, this.options.defaultCurve)
            }
            function u(t) {
                var i = t ? 1 : 1e-6,
                    e = t ? [this.options.itemSize[0], this.options.height] : [this.options.itemSize[0], this.options.itemSize[1]],
                    s = t ? this.defaultMtx : this.closedMtx;
                this.scrollviewTransform.setOpacity(i, this.options.defaultCurve), this.scrollviewTransform.setTransform(s, this.options.defaultCurve), this.sizeState.set(e, this.options.defaultCurve)
            }
            function p(t) {
                var i = this.items.indexOf(t.origin),
                    e = this.items[i];
                e && this.set(e.value, i)
            }
            function c(t) {
                for (var i = 0; i < this.items.length; i++) t == i ? this.items[i].setSelected(!0) : this.items[i].setSelected(!1)
            }
            function l(t) {
                for (var i = 0; i < this.items.length; i++) if (this.items[i].value == t) return i;
                return -1
            }
            var f = t("famous/View"),
                d = t("famous/Matrix"),
                m = t("famous/Modifier"),
                y = t("famous/Transitionable"),
                v = t("famous/Surface"),
                g = t("famous-animation/Easing"),
                S = (t("famous-utils/Utils"), t("famous-views/Scrollview")),
                w = t("./DropdownItem"),
                x = t("famous/ContainerSurface");
            s.prototype = Object.create(f.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                items: [{
                    name: "Apples",
                    value: "apples"
                }, {
                    name: "Oranges",
                    value: "oranges"
                }],
                defaultSelected: 0,
                itemSize: void 0,
                labelProperties: {
                    color: "#ffffff",
                    "background-color": "#333",
                    border: "1px solid #ccc"
                },
                itemClasses: [],
                itemProperties: {
                    color: "#ccc",
                    "background-color": "#fff",
                    border: "1px solid #ccc"
                },
                itemSelectedProperties: {
                    border: "3px solid #33ccff"
                },
                scrollviewOpts: {
                    direction: 1,
                    clipSize: void 0
                },
                height: 125,
                defaultCurve: {
                    curve: g.inOutBackNorm,
                    duration: 500
                },
                labelFadeCurve: {
                    curve: g.inOutSineNorm,
                    duration: 200
                },
                arrowSize: [20, 20],
                arrowPadding: [5, 10, 1],
                arrowContent: '<img src="js/famous-ui/img/arrowRight.svg"></img>',
                itemTemplate: function(t) {
                    return '<h4 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h4>"
                },
                labelTemplate: function(t) {
                    return '<h3 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h3>"
                },
                autoClose: !1
            }, s.prototype.init = function() {
                this.defaultMtx = d.translate(0, this.options.itemSize[1], 0), this.closedMtx = d.move(d.scale(1, .01), [0, this.options.itemSize[1], 0]), this.arrowClosedPos = d.translate(this.options.itemSize[0] - this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]), this.arrowOpenPos = d.move(d.rotateZ(.5 * Math.PI), [this.options.itemSize[0] - .25 * this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]]), this.options.itemTemplate = this.options.itemTemplate.bind(this), this.options.labelTemplate = this.options.labelTemplate.bind(this), this.itemOpts = {
                    itemSize: this.options.itemSize,
                    itemProperties: this.options.itemProperties,
                    selectedProperties: this.options.itemSelectedProperties,
                    template: this.options.itemTemplate,
                    classes: this.options.itemClasses
                }, n.call(this), r.call(this), a.call(this), o.call(this), this.sizeState.set(this.options.itemSize), this.initialized = !0
            }, s.prototype.addItem = function(t, i, e) {
                var s = this.itemOpts;
                s.name = t, e && (s.itemContent = e);
                var o = new w(s, i, !1);
                o.setTemplate(this.itemTemplate), o.transform.setOpacity(0), o.transform.setOpacity(1, this.options.defaultCurve), this.items.push(o), o.pipe(this.scrollview), o.on("selection", p.bind(this)), this.options.autoClose && o.on("selectionEnd", this.closeMenu.bind(this))
            }, s.prototype.openMenu = function() {
                this._isOpen = !0, h.call(this, this._isOpen), u.call(this, this._isOpen)
            }, s.prototype.closeMenu = function() {
                this._isOpen = !1, h.call(this, this._isOpen), u.call(this, this._isOpen)
            }, s.prototype.toggleMenu = function() {
                this._isOpen ? this.closeMenu() : this.openMenu()
            }, s.prototype.get = function() {
                return this.value
            }, s.prototype._getLabelContent = function(t) {
                var i = this.items[t],
                    e = i.options.itemContent,
                    s = this.options.labelTemplate.apply(this, e);
                return s
            }, s.prototype.set = function(t) {
                var i = l.call(this, t),
                    e = this.items[i];
                this.value = e.value, c.call(this, i);
                var s = this._getLabelContent(i);
                this.updateLabel(s), this.emit("change", {
                    value: this.value
                })
            }, s.prototype.setHeight = function(t) {
                this.options.height = t, this.options.scrollviewOpts.clipSize = t, this.scrollview.options.clipSize = t, this.scrollviewContainer.setSize(this.options.itemSize[0], t)
            }, s.prototype.removeItem = function(t) {
                var i;
                "string" == typeof t ? i = l.call(this, t) : "number" == typeof t && (i = t), -1 !== i && this.items[i].transform.setOpacity(0, this.options.defaultCurve, function(t) {
                    this.items.splice(t, 1)
                }.bind(this, i))
            }, s.prototype.updateLabel = function(t) {
                var i = function(t) {
                    this.label.setContent(t), this.labelTransform.setOpacity(1, this.options.labelFadeCurve)
                };
                this.labelTransform.setOpacity(0, this.options.labelFadeCurve, i.bind(this, t))
            }, s.prototype.setSize = function(t) {
                this.options.itemSize = [t[0], 2 * t[1]]
            }, s.prototype.getSize = function() {
                return this.initialized ? this.sizeState.get() : void 0
            }, e.exports = s
        }), define("famous-ui/Easing/EasingVisualizer", ["require", "exports", "module", "famous-animation/Easing", "famous/CanvasSurface", "./CanvasDrawer"], function(t, i, e) {
            function s(t) {
                this.opts = {
                    size: [1e3, 1e3],
                    strokeColor: "#33ccff",
                    fillColor: "#333",
                    fn: n.inOutBackNorm,
                    divisions: 30
                }, this.setOpts(t), this.opts.canvasSize = [2 * this.opts.size[0], 2 * this.opts.size[1]], this.opts.gutter = Math.floor(.35 * this.opts.size[0]), r.call(this, {
                    size: this.opts.size,
                    canvasSize: this.opts.canvasSize
                }), this.update()
            }
            function o() {
                var t = document.createElement("canvas");
                t.width = this.opts.canvasSize[0], t.height = this.opts.canvasSize[1];
                var i = t.getContext("2d");
                i.strokeStyle = this.opts.strokeColor, i.lineWidth = 2, i.fillStyle = this.opts.fillColor, a.rect(i, 0, 0, this.opts.canvasSize[0], this.opts.canvasSize[1]);
                for (var e = 1 / this.opts.divisions, s = this.opts.canvasSize[0] - this.opts.gutter, o = this.opts.canvasSize[1] - this.opts.gutter, n = .5 * this.opts.gutter, r = 1; r < this.opts.divisions; r++) {
                    var h = e * (r - 1),
                        u = e * r,
                        p = h * s + n,
                        c = u * s + n,
                        l = o - this.opts.fn(h) * (o - this.opts.gutter),
                        f = o - this.opts.fn(u) * (o - this.opts.gutter);
                    a.lineTo(i, p, l, c, f)
                }
                return t
            }
            var n = t("famous-animation/Easing"),
                r = t("famous/CanvasSurface"),
                a = t("./CanvasDrawer");
            s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.setOpts = function(t, i) {
                i || (i = this.opts);
                for (var e in t) i[e] = t[e]
            }, s.prototype.setCurve = function(t) {
                this.opts.fn = t, this.update()
            }, s.prototype.update = function() {
                var t = o.call(this),
                    i = this.getContext("2d");
                i.drawImage(t, 0, 0)
            }, e.exports = s
        }), define("famous-ui/Easing/EasingBool", ["require", "exports", "module", "./EasingVisualizer", "famous/EventHandler"], function(t, i, e) {
            function s(t, i) {
                this.easingOpts = {
                    value: !1,
                    selectedProperties: {
                        border: "3px solid #33ccff"
                    },
                    normalProperties: {
                        border: "none"
                    }
                }, n.apply(this, arguments), this.setOptions(i, this.easingOpts), this.on("click", this.toggle.bind(this)), o.call(this)
            }
            function o() {
                var t = this.easingOpts.value ? this.easingOpts.selectedProperties : this.easingOpts.normalProperties;
                this.setProperties(t)
            } {
                var n = t("./EasingVisualizer");
                t("famous/EventHandler")
            }
            s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.silentSet = function(t) {
                this.easingOpts.value = t, o.call(this)
            }, s.prototype.toggle = function() {
                this.set(!this.value)
            }, s.prototype.set = function(t) {
                this.easingOpts.value = t, this.emit("boolChange", {
                    value: this.easingOpts.value
                }), o.call(this)
            }, e.exports = s
        }), define("famous-ui/Easing/MultiEasingToggle", ["require", "exports", "module", "./EasingBool", "famous-animation/Easing", "famous/View", "famous/Modifier", "famous/Matrix"], function(t, i, e) {
            function s() {
                h.apply(this, arguments), this.value = this.options.easingFns[this.options.defaultSelected], this.height = 0, this.bools = [], this.initialized = !1
            }
            function o() {
                for (var t = this.options.easingFns.length, i = [], e = 0, s = -1, o = 0; t > o; o++) s = o % this.options.columns, 0 === s && 0 !== o && e++, i.push(p.translate(s * this.options.easingBoolSize[0], e * this.options.easingBoolSize[1], 0)), o == t - 1 && (this.options.size[1] = (e + 1) * this.options.easingBoolSize[1]);
                return i
            }
            function n(t, i) {
                for (var e = !i, s = 0; s < this.bools.length; s++) s == t ? this.bools[s].silentSet(i) : this.bools[s].silentSet(e);
                this.value = this.options.easingFns[t], this.eventOutput.emit("change", {
                    value: this.value
                })
            }
            var r = t("./EasingBool"),
                a = t("famous-animation/Easing"),
                h = t("famous/View"),
                u = t("famous/Modifier"),
                p = t("famous/Matrix");
            s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                easingFns: [a.inOutBackNorm, a.outBounceNorm, a.inOutBackNorm, a.outBounceNorm],
                columns: 3,
                size: void 0,
                panelSize: 216,
                easingAspect: [1.25, 1],
                defaultSelected: 0,
                easingBoolSize: [void 0, void 0],
                selectedProperties: void 0,
                normalProperties: void 0
            }, s.prototype.init = function() {
                for (var t = o.call(this), i = 0; i < this.options.easingFns.length; i++) {
                    value = i == this.options.defaultSelected ? !0 : !1;
                    var e = {
                        value: value
                    };
                    this.options.selectedProperties && (e.selectedProperties = this.options.selectedProperties), this.options.normalProperties && (e.normalProperties = this.options.normalProperties);
                    var s = new r({
                        fn: this.options.easingFns[i],
                        size: this.options.easingBoolSize
                    }, e);
                    s.on("boolChange", n.bind(this, i)), s.pipe(this.eventOutput), this.node.add(new u(t[i])).link(s), this.bools.push(s)
                }
                this.initialized = !0
            }, s.prototype.set = function(t) {
                var i = this.options.easingFns.indexOf(t);
                n.call(this, i, !0)
            }, s.prototype.get = function() {
                return this.value
            }, s.prototype.setSize = function(t) {
                this.options.easingBoolSize[0] = Math.floor(t[0] / this.options.columns), this.options.easingBoolSize[1] = Math.floor(this.options.easingBoolSize[0] / this.options.easingAspect[0]), this.options.size = [], this.options.size[0] = t[0]
            }, s.prototype.getSize = function() {
                return this.initialized ? this.options.size : void 0
            }, e.exports = s
        }), define("famous-ui/Text/Label", ["require", "exports", "module", "famous/Surface"], function(t, i, e) {
            function s(t) {
                this.options = {
                    size: void 0,
                    content: "",
                    properties: {},
                    classes: ["ui-label"]
                }, this._dirty = !0;
                for (var i in t) this.options[i] = t[i];
                this.surface
            }
            var o = t("famous/Surface");
            s.prototype.init = function() {
                this.surface = new o({
                    size: this.options.size,
                    content: "<div>" + this.options.content + "</div>",
                    classes: this.options.classes,
                    properties: this.options.properties
                })
            }, s.prototype.setSize = function(t) {
                this.options.size = [t[0], 0]
            }, s.prototype.getSize = function() {
                return this.options.size ? this.options.size : void 0
            }, s.prototype.pipe = function(t) {
                return this.surface.pipe(t)
            }, s.prototype.render = function() {
                return this._dirty && this.surface._currTarget && (this.options.size = [this.options.size[0], this.surface._currTarget.firstChild.clientHeight], this.surface.setSize(this.options.size), this._dirty = !1), this.surface.render()
            }, e.exports = s
        }), define("famous-ui/Toggles/BoolToggle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Modifier", "famous-animation/Easing", "famous/RenderNode", "famous-utils/Utils", "famous/View"], function(t, i, e) {
            function s(t) {
                p.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = t.value, this.name = t.name
            }
            function o() {
                this.toggle()
            }
            function n() {
                this.transform.halt();
                var t = this.value ? a.scale(1, 1, 1) : a.move(a.scale(1e-4, 1e-4, 1e-4), [.5 * this.options.size[1], .5 * this.options.size[1], 0]),
                    i = this.value ? 1 : 0;
                this.transform.setTransform(t, this.options.transition), this.transform.setOpacity(i, this.options.transition)
            }
            var r = t("famous/Surface"),
                a = t("famous/Matrix"),
                h = (t("famous/EventHandler"), t("famous/Modifier"), t("famous/Modifier")),
                u = t("famous-animation/Easing"),
                p = (t("famous/RenderNode"), t("famous-utils/Utils"), t("famous/View"));
            s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                size: void 0,
                value: !0,
                name: "bool toggle",
                transition: {
                    duration: 250,
                    curve: u.inOutBackNorm
                },
                padding: 20
            }, s.prototype.init = function() {
                void 0 == this.options.size && (this.options.size = [void 0, void 0]);
                var t = 1 == this.options.value ? 1 : 0;
                this.label = new r({
                    size: this.options.size,
                    content: '<div style="border: 1px solid #ffffff; width:' + (this.options.size[1] - 1) + "px; height: " + (this.options.size[1] - 1) + 'px; float: left;"></div><div class="slider-label" style="float: left; margin-left:' + .5 * this.options.size[1] + "px;margin-top:" + .1 * this.options.size[1] + 'px">' + this.name + "</div>",
                    properties: {
                        fontSize: .75 * this.options.size[1] + "px"
                    }
                }), this.fill = new r({
                    size: [this.options.size[1], this.options.size[1]],
                    properties: {
                        backgroundColor: "#ffffff"
                    }
                }), this.transform = new h({
                    opacity: t,
                    transform: a.translate(0, 0, 1),
                    size: [this.options.size[1], this.options.size[1]]
                }), this.labelTransform = new h({
                    transform: a.translate(0, 0, 1)
                }), this.fill.pipe(this), this.label.pipe(this), this.on("click", o.bind(this)), this.node.add(this.transform).link(this.fill), this.node.add(this.labelTransform).link(this.label), this.set(this.options.value)
            }, s.prototype.silentSet = function(t) {
                this.value = t, n.call(this)
            }, s.prototype.toggle = function() {
                this.set(!this.value)
            }, s.prototype.set = function(t) {
                this.value !== t && (this.value = t, this.emit("change", {
                    value: this.value
                }), n.call(this))
            }, s.prototype.get = function() {
                return this.value
            }, s.prototype.getSize = function() {
                return this.options.size
            }, s.prototype.setSize = function(t) {
                this.options.size = t
            }, e.exports = s
        }), define("famous-ui/Toggles/MultiBoolToggle", ["require", "exports", "module", "famous/Surface", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/EventHandler", "famous/View", "famous-animation/Easing", "./BoolToggle"], function(t, i, e) {
            function s() {
                c.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value, this.label, this.labelTransform, this.usingLabel = !1, this.bools = [], this.boolValues = [], this.transforms = []
            }
            function o() {
                void 0 !== this.options.name && (this.label = new a({
                    size: this.options.size,
                    content: '<div class="slider-label" style="margin-top:' + .1 * this.options.size[1] + 'px">' + this.options.name + "</div>"
                }), this.label.setProperties({
                    "font-size": .75 * this.options.size[1] + "px"
                }), this.labelTransform = new u, this.transforms.push(this.labelTransform), this.usingLabel = !0, this.node.add(this.labelTransform).link(this.label), r.call(this))
            }
            function n() {
                for (var t = 0; t < this.options.values.length; t++) {
                    var i = t == this.options.defaultSelected ? !0 : !1;
                    i && (this.value = this.options.values[t]), this._addToggle(i, this.options.values[t], !0)
                }
            }
            function r() {
                this.sizeState.halt();
                var t = this.transforms.length,
                    i = t * this.options.size[1] + (t - 1) * this.options.padding;
                this.sizeState.set([this.options.size[0], i], this.options.sizeTransition)
            }
            var a = t("famous/Surface"),
                h = (t("famous/RenderNode"), t("famous/Matrix")),
                u = t("famous/Modifier"),
                p = t("famous/Transitionable"),
                c = (t("famous/EventHandler"), t("famous/View")),
                l = t("famous-animation/Easing"),
                f = t("./BoolToggle");
            s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                size: void 0,
                values: [],
                defaultSelected: 0,
                name: void 0,
                padding: 20,
                sizeTransition: {
                    curve: l.inOutBackNorm,
                    duration: 400
                },
                opacityTransition: {
                    curve: l.inOutBackNorm,
                    duration: 400
                }
            }, s.prototype.init = function() {
                void 0 == this.options.size && (this.options.size = [void 0, void 0]), this.sizeState = new p([this.options.size[0], 0]), o.call(this), n.call(this)
            }, s.prototype.setSelectedToggle = function(t) {
                for (var i = 0; i < this.bools.length; i++) i == t ? (this.bools[i].silentSet(!0), this.boolValues[i] = !0, this.value = this.options.values[i], this.emit("change", {
                    value: this.options.values[i]
                })) : (this.bools[i].silentSet(!1), this.boolValues[i] = !1)
            }, s.prototype.set = function(t) {
                var i = this.options.values.indexOf(t);
                this.setSelectedToggle(i)
            }, s.prototype.get = function() {
                return this.value
            }, s.prototype._addToggle = function(t, i, e) {
                var s = this.transforms.length,
                    o = new f({
                        size: this.options.size,
                        value: t,
                        name: i
                    });
                o.init(), o.pipe(this), e || this.options.values.push(i);
                var n = new u({
                    transform: h.translate(0, this.options.size[1] * s + this.options.padding * s),
                    opacity: 0
                });
                n.setOpacity(1, this.options.opacityTransition), this.bools.push(o), this.transforms.push(n), this.node.add(n).link(o), o.silentSet(t), this.boolValues.push(t), o.on("change", function(t) {
                    1 == this.boolValues[t] ? this.bools[t].silentSet(!0) : this.setSelectedToggle(t)
                }.bind(this, this.usingLabel ? s - 1 : s)), r.call(this)
            }, s.prototype.getSize = function() {
                return this.sizeState ? this.sizeState.get() : void 0
            }, s.prototype.setSize = function(t) {
                this.options.size = t
            }, s.prototype.removeToggle = function(t) {
                var i, e;
                "number" == typeof t ? i = t : "string" == typeof t && (i = this.options.values.indexOf(t)), i >= 0 && (e = this.usingLabel ? i + 1 : i, this.transforms[e].setOpacity(0, this.options.sizeTransition, function(t, i) {
                    this.branches.splice(i, 1), this.bools.splice(t, 1), this.options.values.splice(t, 1), this.transforms.splice(i, 1), r.call(this)
                }.bind(this, i, e)))
            }, e.exports = s
        }), define("famous-ui/PanelScrollview", ["require", "exports", "module", "famous-views/Scrollview"], function(t, i, e) {
            function s(t) {
                this.panelOpts = Object.create(s.DEFAULT_OPTIONS), t && this.setPanelOptions(t), n.call(this, this.panelOpts.scrollviewOptions), this.uiItems = [], this._sequenced = !1
            }
            function o(t) {
                this.uiItems.push(t), this._sequenced === !1 && (this.sequenceFrom(this.uiItems), this._sequenced = !0), void 0 === t.getSize() && t.setSize && t.setSize([this.panelOpts.width, this.panelOpts.sliderHeight]), t.init && t.init(), t.pipe && t.pipe(this)
            }
            var n = t("famous-views/Scrollview");
            s.DEFAULT_OPTIONS = {
                scrollviewOptions: {
                    direction: "y",
                    itemSpacing: 8
                },
                width: 256,
                sliderHeight: 16
            }, s.prototype = Object.create(n.prototype), s.prototype.setPanelOptions = function(t) {
                for (var i in s.DEFAULT_OPTIONS) void 0 !== t[i] && (this.panelOpts[i] = t[i])
            }, s.prototype.reset = function() {
                this.uiItems = [], this._sequenced = !1
            }, s.prototype.add = function(t) {
                if (t instanceof Array) for (var i = 0; i < t.length; i++) o.call(this, t[i]);
                else o.call(this, t)
            }, s.prototype.addBackground = function() {}, e.exports = s
        }), define("famous-ui/Slider", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous-utils/Utils", "famous/Engine", "famous/View"], function(t, i, e) {
            function s() {
                S.apply(this, arguments), this.eventInput.pipe(this.eventOutput), void 0 === this.options.defaultValue && (this.options.defaultValue = .5 * (this.options.range[0] + this.options.range[1])), this.pos = [], this.value = this.options.defaultValue, this._dirty = !0, this.currTouchId = null
            }
            function o(t) {
                t.preventDefault(), t.stopPropagation()
            }
            function n(t) {
                if (o(t), !this.currTouchId) {
                    var i = t.changedTouches[0];
                    this.currTouchId = i.identifier, this._handleStart(i)
                }
            }
            function r(t) {
                o(t), g.on("mousemove", this._mouseMove), g.on("mouseup", this._mouseUp), g.on("mouseout", this._mouseLeave), this._handleStart(t)
            }
            function a(t) {
                this._dirty && (this.pos = v.getSurfacePosition(this.back), this._dirty = !1), this.set(v.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
            }
            function h(t) {
                o(t);
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var e = t.changedTouches[i];
                    if (e.identifier == this.currTouchId) {
                        this._handleMove(e);
                        break
                    }
                }
            }
            function u(t) {
                o(t), this._handleMove(t)
            }
            function p(t) {
                this.set(v.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
            }
            function c(t) {
                o(t);
                for (var i = 0; i < t.changedTouches.length; i++) if (t.changedTouches[i].identifier == this.currTouchId) {
                    this.currTouchId = void 0;
                    break
                }
            }
            function l(t) {
                o(t), this._endMouse()
            }
            function f(t) {
                var i = t.relatedTarget || t.toElement;
                i && "HTML" != i.nodeName || this._endMouse()
            }
            function d() {
                return this.options.name + " <span class='slider-value' style='float:right'>" + this.value + "</span>"
            }
            var m = t("famous/Surface"),
                y = t("famous/Matrix"),
                v = (t("famous/EventHandler"), t("famous-utils/Utils")),
                g = t("famous/Engine"),
                S = t("famous/View");
            s.prototype = Object.create(S.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                size: void 0,
                range: [0, 10],
                defaultValue: void 0,
                precision: void 0,
                name: "Slider",
                backOpacity: 1
            }, s.prototype.init = function() {
                this.fill = new m({
                    size: this.options.size,
                    classes: ["slider-fill", "no-user-select"]
                }), this.back = new m({
                    size: this.options.size,
                    classes: ["slider-back", "no-user-select"]
                }), this.backMatrix = y.translate(0, 0, 1), this.label = new m({
                    size: this.options.size,
                    classes: ["slider-label", "no-user-select"],
                    properties: {
                        fontSize: .75 * this.options.size[1] + "px",
                        lineHeight: this.options.size[1] + "px"
                    },
                    content: d.call(this)
                }), this.labelMatrix = y.translate(0, this.options.size[1], 1.2), this.back.pipe(this), this.label.pipe(this), this.fill.pipe(this), this.on("touchstart", n.bind(this)), this.on("touchmove", h.bind(this)), this.on("touchend", c.bind(this)), this.on("touchcancel", c.bind(this)), this.on("mousedown", r.bind(this)), this.on("mousedown", r.bind(this)), this._mouseMove = u.bind(this), this._mouseUp = l.bind(this), this._mouseLeave = f.bind(this), this._handleStart = a.bind(this), this._handleMove = p.bind(this), this._add(this.fill), this._add(this.back), this._add(this.label)
            }, s.prototype._endMouse = function() {
                g.unbind("mousemove", this._mouseMove), g.unbind("mouseup", this._mouseUp), g.unbind("mouseout", this._mouseLeave)
            }, s.prototype.get = function() {
                return this.value
            }, s.prototype.getRange = function() {
                return this.options.range
            }, s.prototype.setSize = function(t) {
                this.options.size = t
            }, s.prototype.getSize = function() {
                return this.options.size ? [this.options.size[0], 2 * this.options.size[1]] : void 0
            }, s.prototype.set = function(t) {
                return void 0 !== this.options.precision && (t = parseInt(t.toFixed(this.options.precision))), this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), this.setLabelContent(), this.emit("change", {
                    value: this.get(),
                    range: this.range
                }), this
            }, s.prototype.setLabelContent = function() {
                this.label.setContent(d.call(this))
            }, s.prototype.render = function() {
                var t = (this.get() - this.options.range[0]) / (this.options.range[1] - this.options.range[0]);
                return [{
                    transform: this.backMatrix,
                    opacity: this.options.backOpacity,
                    target: this.back.render()
                }, {
                    transform: y.move(y.scale(t, 1, 1), [0, 0, 2]),
                    target: this.fill.render()
                }, {
                    transform: this.labelMatrix,
                    target: this.label.render()
                }]
            }, e.exports = s
        }), define("famous-ui/AutoUI", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "famous-ui/PanelScrollview", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Dropdown/Dropdown", "famous-ui/Slider", "famous-ui/ColorPicker/ColorPicker", "famous-ui/Text/Label"], function(t, i, e) {
            function s() {
                n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.panel = new h(this.options.panelOptions), this.pipe(this.panel), this.autoUIElements = [], this.autoUIElementsMap = {}, this.panelModifier = new a({
                    transform: this.options.defaultMatrix
                }), this._add(this.panelModifier).link(this.panel), this.options.defaultSelected && this.setCurrentObject(this.options.defaultSelected)
            }
            function o() {
                if (this.currentObject.autoUI) for (var t = 0; t < this.currentObject.autoUI.length; t++) {
                    var i = this.currentObject.autoUI[t];
                    i.type && this._optionToUI(i, this.panel)
                }
                this._scaledDown && (this.panelModifier.setTransform(this.options.defaultMatrix, this.options.scaleTransition), this._scaledDown = !1)
            }
            var n = t("famous/View"),
                r = t("famous/Matrix"),
                a = t("famous/Modifier"),
                h = (t("famous-animation/Easing"), t("famous-ui/PanelScrollview")),
                u = t("famous-ui/Toggles/BoolToggle"),
                p = t("famous-ui/Toggles/MultiBoolToggle"),
                c = t("famous-ui/Easing/MultiEasingToggle"),
                l = t("famous-ui/Dropdown/Dropdown"),
                f = t("famous-ui/Slider"),
                d = t("famous-ui/ColorPicker/ColorPicker"),
                m = t("famous-ui/Text/Label");
            s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
                saveValues: !1,
                panelOptions: {},
                defaultSelected: void 0,
                defaultMatrix: r.translate(0, 0)
            }, s.UI_ELEMENTS = {
                slider: f,
                dropdown: l,
                colorPicker: d,
                toggle: u,
                multiBoolToggle: p,
                easing: c,
                label: m
            }, s.prototype.setCurrentObject = function(t) {
                t !== this.currentObj && (this.currentObject = t, this.clear(o.bind(this)))
            }, s.prototype.setScrollviewOptions = function(t) {
                return this.panel.setOptions(t)
            }, s.prototype.toJSON = function() {
                for (var t = 0; t < this.autoUIElements.length; t++);
            }, s.prototype.reset = function() {
                this.panel.reset(), this.autoUIElements = [], this.autoUIElementsMap = {}
            }, s.prototype.getSize = function() {
                return [this.panel.panelOpts.width, void 0]
            }, s.prototype.clear = function(t) {
                this.reset(), t && t()
            }, s.prototype._optionToUI = function(t) {
                var i = s.UI_ELEMENTS[t.type],
                    e = new i(t.uiOptions);
                if (this.panel.add(e), this.autoUIElements.push(e), t.uiOptions.name && (this.autoUIElementsMap[t.uiOptions.name] = e), t.key) {
                    var o = t.object ? t.object.optionsManager : this.currentObject.optionsManager;
                    e.on("change", function(t, i, e, s) {
                        t && t.set(i, s.value), e && e.call(this, s.value)
                    }.bind(this.currentObject, o, t.key, t.callback))
                } else t.callback && e.on("change", function(t, i) {
                    t.call(this, i.value)
                }.bind(this.currentObject, t.callback))
            }, s.prototype.getUIElementsMap = function() {
                return this.autoUIElementsMap
            }, e.exports = s
        }), define("famous-utils/FormatTime", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i) {
                var e = t.toString().match(/(\d+)/g),
                    s = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5], 0),
                    r = new Date,
                    a = .001 * (r.getTime() - s.getTime()),
                    h = parseInt(a / 60, 10),
                    u = parseInt(h / 60, 10),
                    p = parseInt(u / 24, 10),
                    c = o(s),
                    l = 10,
                    f = "";
                return 720 > h ? 60 > h ? 2 > h ? (f = "just now", l = 1, [f, l]) : 30 > h ? (f = h + " minutes ago", l = 2, [f, l]) : 40 > h ? (f = "about a half hour ago", l = 2, [f, l]) : 50 > h ? (f = "about 45 minutes ago", l = 3, [f, l]) : (f = "about an hour ago", l = 4, [f, l]) : (f = 1 == i ? c[6] + ":" + c[7] + c[8] : "earlier today at " + c[6] + ":" + c[7] + c[8], l = 5, [f, l]) : 1440 > h ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 6, [f, l]) : p >= 1 && 2 >= p ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 7, [f, l]) : 6 > p ? (f = c[0] + " at " + c[6] + ":" + c[7] + c[8], l = 8, [f, l]) : 30 > p ? (f = 1 == i ? c[3] + "/" + c[1] + " at " + c[6] + ":" + c[7] + c[8] : c[4] + " " + c[1] + c[2] + " around " + c[6] + c[8], l = 9, [f, l]) : (f = n(c, r), l = 10, [f, l])
            }
            function o(t) {
                var i = t.getDate(),
                    e = t.getDay(),
                    s = t.getMonth() + 1,
                    o = t.getFullYear(),
                    n = t.getHours(),
                    r = t.getMinutes().toString(),
                    a = 12 > n ? "am" : "pm";
                r.length < 2 && (r = "0" + r);
                var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    u = {
                        1: "st",
                        2: "nd",
                        3: "rd",
                        4: "th",
                        5: "th",
                        6: "th",
                        7: "th",
                        8: "th",
                        9: "th",
                        10: "th",
                        11: "th",
                        12: "th",
                        13: "th",
                        14: "th",
                        15: "th",
                        16: "th",
                        17: "th",
                        18: "th",
                        19: "th",
                        20: "th",
                        21: "st",
                        22: "nd",
                        23: "rd",
                        24: "th",
                        25: "th",
                        26: "th",
                        27: "th",
                        28: "th",
                        29: "th",
                        30: "th",
                        31: "st"
                    },
                    p = {
                        1: "Jan",
                        2: "Feb",
                        3: "Mar",
                        4: "April",
                        5: "May",
                        6: "June",
                        7: "July",
                        8: "Aug",
                        9: "Sep",
                        10: "Oct",
                        11: "Nov",
                        12: "Dec"
                    };
                return 0 === n && (n = 12), n > 12 && (n -= 12), [h[e], i, u[i], s, p[s], o, n, r, a]
            }
            function n(t, i) {
                var e = (i ? i : new Date, i.getFullYear() === t[5] ? t[4] + " " + t[1] + t[2] : t[4] + " " + t[1] + t[2] + " " + t[5]);
                return e
            }
            e.exports = s
        }), define("famous-utils/KeyCodes", ["require", "exports", "module"], function(t, i, e) {
            var s = {
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 90,
                a: 97,
                b: 98,
                c: 99,
                d: 100,
                e: 101,
                f: 102,
                g: 103,
                h: 104,
                i: 105,
                j: 106,
                k: 107,
                l: 108,
                m: 109,
                n: 110,
                o: 111,
                p: 112,
                q: 113,
                r: 114,
                s: 115,
                t: 116,
                u: 117,
                v: 118,
                w: 119,
                x: 120,
                y: 121,
                z: 122,
                ENTER: 13,
                LEFT_ARROW: 37,
                RIGHT_ARROW: 39,
                UP_ARROW: 38,
                DOWN_ARROW: 40,
                SPACE: 32,
                SHIFT: 16,
                TAB: 9
            };
            e.exports = s
        }), define("famous-utils/NoiseImage", ["require", "exports", "module"], function(t, i, e) {
            function s(t, i, e) {
                t || (t = [128, 128]), i || (i = 8), o.width = t[0], o.height = t[1];
                var s = i >> 1,
                    r = o.width / i,
                    a = i * i >> 1,
                    h = 1 / s;
                u(e), n.fillRect(0, 0, t[0], t[1]), u(e);
                for (var p, c, l = 0; a > l; l++) Math.random() + .5 >> 0 && (c = l * h >> 0, p = l - s * c, n.fillRect(p * r, c * r, r, r), n.fillRect((i - (p + 1)) * r, c * r, r, r));
                var f = o.toDataURL("image/png");
                return f
            }
            var o = document.createElement("canvas"),
                n = o.getContext("2d"),
                r = function(t) {
                    var i = 361 * Math.random() >> 0,
                        e = t ? 45 * t - (46 * Math.random() >> 0) : i;
                    return e
                },
                a = function() {
                    return 30 + 71 * Math.random() >> 0
                },
                h = function() {
                    return 30 + 71 * Math.random() >> 0
                },
                u = function(t) {
                    n.fillStyle = "hsl(" + r(t) + "," + a() + "%," + h() + "%)"
                };
            e.exports = {
                generate: s
            }
        }), define("famous-utils/TimeAgo", ["require", "exports", "module"], function(t, i, e) {
            function s(t) {
                var i = Date.now(),
                    e = i - t,
                    s = 6e4,
                    o = 60 * s,
                    n = 24 * o;
                if (s > e) return "Just Now";
                if (o > e) {
                    var r = ~~ (e / s);
                    return r + "m"
                }
                if (n > e) {
                    var a = ~~ (e / o);
                    return a + "h"
                }
                var h = ~~ (e / n);
                return h + "d"
            }
            e.exports = {
                parse: s
            }
        }), define("famous-views/ControlSet", ["require", "exports", "module", "famous/EventHandler", "famous/Matrix"], function(t, i, e) {
            function s() {
                this.eventOutput = new o, o.setOutputHandler(this, this.eventOutput), this.controls = []
            }
            var o = t("famous/EventHandler"),
                n = t("famous/Matrix");
            s.prototype.include = function(t, i) {
                i.on("change", function(i) {
                    this.eventOutput.emit(t, {
                        value: i.value
                    })
                }.bind(this)), this.controls.push(i)
            }, s.prototype.render = function() {
                for (var t = [], i = 0, e = 0, s = 0; s < this.controls.length; s++) {
                    var o = this.controls[s],
                        r = o.getSize();
                    t.push({
                        transform: n.translate(0, i),
                        target: o.render()
                    }), i += r[1], e = Math.max(e, r[0])
                }
                return {
                    size: [e, i],
                    target: t
                }
            }, e.exports = s
        }), define("famous-views/Flip", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/RenderNode"], function(t, i, e) {
            function s(t) {
                this.options = {
                    transition: !0,
                    cull: !0
                }, t && this.setOptions(t), this._side = 0, this.state = new n(0), this.frontNode = new r, this.backNode = new r
            }
            var o = t("famous/Matrix"),
                n = t("famous/Transitionable"),
                r = t("famous/RenderNode");
            s.prototype.setDefaultTransition = function(t) {
                this.transition = t
            }, s.prototype.flip = function(t, i) {
                void 0 === t && (t = 1 === this._side ? 0 : 1), this._side = t, this.state.set(t, this.options.transition, i)
            }, s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.cull && (this.options.cull = t.cull)
            }, s.prototype.linkFront = function(t) {
                return this.frontNode.link(t)
            }, s.prototype.linkBack = function(t) {
                return this.backNode.link(t)
            }, s.prototype.render = function(t) {
                var i = this.state.get();
                return void 0 !== t ? {
                    transform: o.rotateY(Math.PI * i),
                    target: t
                } : this.options.cull && !this.state.isActive() ? i ? this.backNode.render() : this.frontNode.render() : [{
                    transform: o.rotateY(Math.PI * i),
                    target: this.frontNode.render()
                }, {
                    transform: o.rotateY(Math.PI * (i + 1)),
                    target: this.backNode.render()
                }]
            }, e.exports = s
        }), define("famous-views/InputSurface", ["require", "exports", "module", "famous/Surface"], function(t, i, e) {
            function s(t) {
                this._placeholder = t.placeholder || "", this._value = t.value || "", this._type = t.type || "text", o.apply(this, arguments)
            }
            var o = t("famous/Surface");
            s.prototype = Object.create(o.prototype), s.prototype.surfaceEvents = o.prototype.surfaceEvents.concat(["keypress", "keyup", "keydown"]), s.prototype.elementType = "input", s.prototype.elementClass = "famous-surface", s.prototype.setPlaceholder = function(t) {
                return this._placeholder = t, this._contentDirty = !0, this
            }, s.prototype.setValue = function(t) {
                return this._value = t, this._contentDirty = !0, this
            }, s.prototype.setType = function(t) {
                return this._type = t, this._contentDirty = !0, this
            }, s.prototype.getValue = function() {
                return this._currTarget ? this._currTarget.value : this._value
            }, s.prototype.deploy = function(t) {
                "" !== this._placeholder && (t.placeholder = this._placeholder), t.value = this._value, t.type = this._type
            }, e.exports = s
        }), define("famous-views/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "./Scrollview", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
            }
            var o = t("famous/ContainerSurface"),
                n = t("famous/EventHandler"),
                r = t("./Scrollview"),
                a = t("famous/Utility");
            s.DEFAULT_OPTIONS = {
                look: void 0,
                feel: {
                    direction: a.Direction.X
                }
            }, s.prototype.setOptions = function(t) {
                void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
            }, s.prototype.sequenceFrom = function() {
                return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
            }, s.prototype.render = function() {
                return this.surface.render.apply(this.surface, arguments)
            }, e.exports = s
        }), define("famous-views/SequentialLayout", ["require", "exports", "module", "famous/OptionsManager", "famous/Matrix", "famous/Transitionable", "famous/ViewSequence", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this._items = null, this._size = null, this._outputFunction = s.DEFAULT_OUTPUT_FUNCTION, this.options = Object.create(this.constructor.DEFAULT_OPTIONS), this.optionsManager = new o(this.options), t && this.setOptions(t)
            }
            var o = t("famous/OptionsManager"),
                n = t("famous/Matrix"),
                r = (t("famous/Transitionable"), t("famous/ViewSequence")),
                a = t("famous/Utility");
            s.DEFAULT_OPTIONS = {
                direction: a.Direction.X,
                defaultItemSize: [50, 50],
                itemSpacing: 0
            }, s.DEFAULT_OUTPUT_FUNCTION = function(t, i) {
                var e = this.options.direction === a.Direction.X ? n.translate(i, 0) : n.translate(0, i);
                return {
                    transform: e,
                    target: t.render()
                }
            }, s.prototype.getSize = function() {
                return this._size || this.render(), this._size
            }, s.prototype.sequenceFrom = function(t) {
                return t instanceof Array && (t = new r(t)), this._items = t, this
            }, s.prototype.setOptions = function() {
                return this.optionsManager.setOptions.apply(this.optionsManager, arguments), this
            }, s.prototype.setOutputFunction = function(t) {
                return this._outputFunction = t, this
            }, s.prototype.render = function() {
                for (var t = 0, i = 0, e = this.options.direction === a.Direction.X ? 0 : 1, s = this.options.direction === a.Direction.X ? 1 : 0, o = this._items, n = []; o;) {
                    var r = o.get();
                    t && (t += this.options.itemSpacing);
                    var h;
                    r && r.getSize && (h = r.getSize()), h || (h = this.options.defaultItemSize), h[s] !== !0 && (i = Math.max(i, h[s]));
                    var u = this._outputFunction.call(this, r, t, n.length);
                    n.push(u), h[e] && h[e] !== !0 && (t += h[e]), o = o.getNext()
                }
                return i || (i = void 0), this._size || (this._size = [0, 0]), this._size[e] = t, this._size[s] = i, {
                    size: this.getSize(),
                    target: n
                }
            }, e.exports = s
        }), define("famous-views/Shaper", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Utility"], function(t, i, e) {
            function s(t) {
                this.nodes = [], this.transforms = [], this.defaultTransition = {
                    duration: 1e3,
                    curve: "easeInOut"
                };
                for (var i in t) this.side(i).from(t[i])
            }
            var o = t("famous/RenderNode"),
                n = t("famous/Matrix"),
                r = t("famous/Modifier"),
                a = t("famous/Utility");
            s.prototype.side = function(t) {
                return this.nodes[t] || (this.transforms[t] = new r, this.transforms[t].setDefaultTransition(this.defaultTransition), this.nodes[t] = new o(this.transforms[t])), this.nodes[t]
            }, s.prototype.halt = function(t) {
                this.transforms[t].halt()
            }, s.prototype.haltSet = function(t) {
                for (var i = 0; i < t.length; i++) this.halt(i)
            }, s.prototype.haltAll = function() {
                this.haltSet(this.all())
            }, s.prototype.set = function(t, i, e, s) {
                return this.transforms[t] ? (this.transforms[t].setTransform(i, e, s), void 0) : (s && s(), void 0)
            }, s.prototype.setShape = function(t, i, e, s) {
                for (var o = "function" == typeof i ? i : function(t) {
                    return i[t]
                }, n = s ? a.after(t.length, s) : void 0, r = 0; r < t.length; r++) this.set(t[r], o(r), e, n)
            }, s.prototype.setShapeAll = function(t, i, e) {
                this.setShape(this.all(), t, i, e)
            }, s.prototype.modify = function(t, i, e, s) {
                var o = n.multiply(this.transforms[t].getFinalTransform(), i);
                this.set(t, o, e, s)
            }, s.prototype.modifySet = function(t, i, e, s) {
                for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.modify(t[n], i, e, o)
            }, s.prototype.modifyAll = function(t, i, e) {
                this.modify(this.all(), t, i, e)
            }, s.prototype.setOpacity = function(t, i, e, s) {
                this.transforms[t].setOpacity(i, e, s)
            }, s.prototype.setOpacitySet = function(t, i, e, s) {
                for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.setOpacity(t[n], i, e, o)
            }, s.prototype.setOpacityAll = function(t, i, e) {
                this.setOpacitySet(this.all(), t, i, e)
            }, s.prototype.all = function() {
                var t = [];
                for (var i in this.nodes) t.push(i);
                return t
            }, s.prototype.getTransform = function(t) {
                return this.transforms[t].getTransform()
            }, s.prototype.getOpacity = function(t) {
                return this.transforms[t].getOpacity()
            }, s.prototype.isMoving = function(t) {
                return this.transforms[t].isMoving()
            }, s.prototype.render = function() {
                for (var t = [], i = 0; i < this.nodes.length; i++) t[i] = this.nodes[i].execute();
                return t
            }, e.exports = s
        }), define("famous-views/Swappable", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier"], function(t, i, e) {
            function s(t) {
                this.options = {
                    initTransform: h.identity,
                    initOpacity: 0,
                    finalTransform: h.identity,
                    finalOpacity: 0,
                    inTransition: {
                        duration: 500,
                        curve: "easeInOut"
                    },
                    outTransition: {
                        duration: 500,
                        curve: "easeInOut"
                    },
                    async: !1
                }, this.nodes = {}, this.transforms = [], this.currIndex = -1, this.prevIndex = -1, this.setOptions(t)
            }
            function o(t, i, e, s, o, n, r) {
                if (t in this.nodes) {
                    var a = this.nodes[t].modifiers[0];
                    console.log(this.nodes[t]), a.isMoving && !a.isMoving() && (i && a.setTransform(i), void 0 !== e && a.setOpacity(e)), a.setTransform(s, n), a.setOpacity(o, n, r)
                }
            }
            function n(t, i) {
                o.call(this, t, this.options.initTransform, this.options.initOpacity, h.identity, 1, this.options.inTransition, i)
            }
            function r(t, i) {
                o.call(this, t, void 0, void 0, this.options.finalTransform, this.options.finalOpacity, this.options.outTransition, i)
            }
            var a = t("famous/RenderNode"),
                h = t("famous/Matrix"),
                u = t("famous/Modifier");
            s.prototype.item = function(t) {
                var i = new a(new u(this.options.initTransform, this.options.initOpacity), !0);
                return this.nodes[t] = i, i
            }, s.prototype.select = function(t, i) {
                t != this.currIndex && (this.options.async ? r.call(this, this.currIndex, function() {
                    n.call(this, this.currIndex, i)
                }.bind(this)) : (r.call(this, this.currIndex), n.call(this, t, i)), this.currIndex = t)
            }, s.prototype.setOptions = function(t) {
                for (var i in t) this.options[i] = t[i]
            }, s.prototype.getOptions = function() {
                return this.options
            }, s.prototype.render = function() {
                var t = [];
                for (var i in this.nodes) t.push(this.nodes[i].render());
                return t
            }, e.exports = s
        }), define("main", ["require", "exports", "module", "app/ArticleViews/ArticleBottomView", "app/ArticleViews/ArticleFullView", "app/ArticleViews/ArticleTopView", "app/ArticleViews/ArticleView", "app/Data/StoryData", "app/StoryViews/ArticleStoryView", "app/StoryViews/FooterView", "app/StoryViews/NameView", "app/StoryViews/NumberView", "app/StoryViews/PhotoStoryView", "app/StoryViews/ProfilePicView", "app/StoryViews/ProfilePicsView", "app/StoryViews/StoryView", "app/StoryViews/TextView", "famous/CanvasSurface", "famous/ContainerSurface", "famous/Context", "famous/ElementAllocator", "famous/Engine", "famous/Entity", "famous/EventArbiter", "famous/EventHandler", "famous/Group", "famous/ImageSurface", "famous/Matrix", "famous/Modifier", "famous/MultipleTransition", "famous/OptionsManager", "famous/RenderNode", "famous/Scene", "famous/SceneCompiler", "famous/SpecParser", "famous/Surface", "famous/Timer", "famous/Transitionable", "famous/TweenTransition", "famous/Utility", "famous/VideoSurface", "famous/View", "famous/ViewSequence", "famous/WebGLSurface", "famous-animation/Animation", "famous-animation/AnimationEngine", "famous-animation/CubicBezier", "famous-animation/Easing", "famous-animation/GenericAnimation", "famous-animation/Idle", "famous-animation/PiecewiseCubicBezier", "famous-animation/RegisterEasing", "famous-animation/Sequence", "famous-animation/Timer", "famous-color/Color", "famous-color/ColorPalette", "famous-color/ColorPalettes", "famous-math/Quaternion", "famous-math/Random", "famous-math/Vector", "famous-modifiers/Camera", "famous-modifiers/Draggable", "famous-performance/Profiler", "famous-performance/ProfilerMetric", "famous-performance/ProfilerMetricView", "famous-performance/ProfilerView", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Particle", "famous-physics/bodies/Rectangle", "famous-physics/constraints/Collision", "famous-physics/constraints/CollisionJacobian", "famous-physics/constraints/Constraint", "famous-physics/constraints/Curve", "famous-physics/constraints/Distance", "famous-physics/constraints/Distance1D", "famous-physics/constraints/Rod", "famous-physics/constraints/Rope", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Surface", "famous-physics/constraints/Wall", "famous-physics/constraints/Walls", "famous-physics/constraints/joint", "famous-physics/forces/Drag", "famous-physics/forces/Force", "famous-physics/forces/Repulsion", "famous-physics/forces/Spring", "famous-physics/forces/TorqueSpring", "famous-physics/forces/VectorField", "famous-physics/forces/rotationalDrag", "famous-physics/integrator/SymplecticEuler", "famous-physics/integrator/verlet", "famous-physics/math/GaussSeidel", "famous-physics/math/Quaternion", "famous-physics/math/Random", "famous-physics/math/Vector", "famous-physics/math/matrix", "famous-physics/utils/PhysicsTransition", "famous-physics/utils/PhysicsTransition2", "famous-physics/utils/SpringTransition", "famous-physics/utils/StiffSpringTransition", "famous-physics/utils/WallTransition", "famous-physics/PhysicsEngine", "famous-sync/FastClick", "famous-sync/GenericSync", "famous-sync/MouseSync", "famous-sync/PinchSync", "famous-sync/RotateSync", "famous-sync/ScaleSync", "famous-sync/ScrollSync", "famous-sync/TouchSync", "famous-sync/TouchTracker", "famous-sync/TwoFingerSync", "famous-ui/Buttons/ButtonBase", "famous-ui/Buttons/RotateButton", "famous-ui/Buttons/SpringButton", "famous-ui/Buttons/SpringButton.ui", "famous-ui/ColorPicker/AlphaPicker", "famous-ui/ColorPicker/CanvasPicker", "famous-ui/ColorPicker/ColorButton", "famous-ui/ColorPicker/ColorPicker", "famous-ui/ColorPicker/GradientPicker", "famous-ui/ColorPicker/HuePicker", "famous-ui/Dropdown/Dropdown", "famous-ui/Dropdown/DropdownItem", "famous-ui/Easing/CanvasDrawer", "famous-ui/Easing/EasingBool", "famous-ui/Easing/EasingVisualizer", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Text/Label", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/AutoUI", "famous-ui/PanelScrollview", "famous-ui/Slider", "famous-utils/FormatTime", "famous-utils/KeyCodes", "famous-utils/NoiseImage", "famous-utils/Time", "famous-utils/TimeAgo", "famous-utils/Utils", "famous-views/ControlSet", "famous-views/Flip", "famous-views/InputSurface", "famous-views/LightBox", "famous-views/ScrollContainer", "famous-views/Scrollview", "famous-views/SequentialLayout", "famous-views/Shaper", "famous-views/Swappable", "surface-extensions/ExpandingSurface"], function(t, i, e) {
            var s = function(i) {
                i.call(this, t)
            };
            s.App = {}, s.App.ArticleViews_ArticleBottomView = t("app/ArticleViews/ArticleBottomView"), s.App.ArticleViews_ArticleFullView = t("app/ArticleViews/ArticleFullView"), s.App.ArticleViews_ArticleTopView = t("app/ArticleViews/ArticleTopView"), s.App.ArticleViews_ArticleView = t("app/ArticleViews/ArticleView"), s.App.Data_StoryData = t("app/Data/StoryData"), s.App.StoryViews_ArticleStoryView = t("app/StoryViews/ArticleStoryView"), s.App.StoryViews_FooterView = t("app/StoryViews/FooterView"), s.App.StoryViews_NameView = t("app/StoryViews/NameView"), s.App.StoryViews_NumberView = t("app/StoryViews/NumberView"), s.App.StoryViews_PhotoStoryView = t("app/StoryViews/PhotoStoryView"), s.App.StoryViews_ProfilePicView = t("app/StoryViews/ProfilePicView"), s.App.StoryViews_ProfilePicsView = t("app/StoryViews/ProfilePicsView"), s.App.StoryViews_StoryView = t("app/StoryViews/StoryView"), s.App.StoryViews_TextView = t("app/StoryViews/TextView"), s.Famous = {}, s.Famous.CanvasSurface = t("famous/CanvasSurface"), s.Famous.ContainerSurface = t("famous/ContainerSurface"), s.Famous.Context = t("famous/Context"), s.Famous.ElementAllocator = t("famous/ElementAllocator"), s.Famous.Engine = t("famous/Engine"), s.Famous.Entity = t("famous/Entity"), s.Famous.EventArbiter = t("famous/EventArbiter"), s.Famous.EventHandler = t("famous/EventHandler"), s.Famous.Group = t("famous/Group"), s.Famous.ImageSurface = t("famous/ImageSurface"), s.Famous.Matrix = t("famous/Matrix"), s.Famous.Modifier = t("famous/Modifier"), s.Famous.MultipleTransition = t("famous/MultipleTransition"), s.Famous.OptionsManager = t("famous/OptionsManager"), s.Famous.RenderNode = t("famous/RenderNode"), s.Famous.Scene = t("famous/Scene"), s.Famous.SceneCompiler = t("famous/SceneCompiler"), s.Famous.SpecParser = t("famous/SpecParser"), s.Famous.Surface = t("famous/Surface"), s.Famous.Timer = t("famous/Timer"), s.Famous.Transitionable = t("famous/Transitionable"), s.Famous.TweenTransition = t("famous/TweenTransition"), s.Famous.Utility = t("famous/Utility"), s.Famous.VideoSurface = t("famous/VideoSurface"), s.Famous.View = t("famous/View"), s.Famous.ViewSequence = t("famous/ViewSequence"), s.Famous.WebGLSurface = t("famous/WebGLSurface"), s.FamousAnimation = {}, s.FamousAnimation.Animation = t("famous-animation/Animation"), s.FamousAnimation.AnimationEngine = t("famous-animation/AnimationEngine"), s.FamousAnimation.CubicBezier = t("famous-animation/CubicBezier"), s.FamousAnimation.Easing = t("famous-animation/Easing"), s.FamousAnimation.GenericAnimation = t("famous-animation/GenericAnimation"), s.FamousAnimation.Idle = t("famous-animation/Idle"), s.FamousAnimation.PiecewiseCubicBezier = t("famous-animation/PiecewiseCubicBezier"), s.FamousAnimation.RegisterEasing = t("famous-animation/RegisterEasing"), s.FamousAnimation.Sequence = t("famous-animation/Sequence"), s.FamousAnimation.Timer = t("famous-animation/Timer"), s.FamousColor = {}, s.FamousColor.Color = t("famous-color/Color"), s.FamousColor.ColorPalette = t("famous-color/ColorPalette"), s.FamousColor.ColorPalettes = t("famous-color/ColorPalettes"), s.FamousMath = {}, s.FamousMath.Quaternion = t("famous-math/Quaternion"), s.FamousMath.Random = t("famous-math/Random"), s.FamousMath.Vector = t("famous-math/Vector"), s.FamousModifiers = {}, s.FamousModifiers.Camera = t("famous-modifiers/Camera"), s.FamousModifiers.Draggable = t("famous-modifiers/Draggable"), s.FamousPerformance = {}, s.FamousPerformance.Profiler = t("famous-performance/Profiler"), s.FamousPerformance.ProfilerMetric = t("famous-performance/ProfilerMetric"), s.FamousPerformance.ProfilerMetricView = t("famous-performance/ProfilerMetricView"), s.FamousPerformance.ProfilerView = t("famous-performance/ProfilerView"), s.FamousPhysics = {}, s.FamousPhysics.Bodies_Body = t("famous-physics/bodies/Body"), s.FamousPhysics.Bodies_Circle = t("famous-physics/bodies/Circle"), s.FamousPhysics.Bodies_Particle = t("famous-physics/bodies/Particle"), s.FamousPhysics.Bodies_Rectangle = t("famous-physics/bodies/Rectangle"), s.FamousPhysics.Constraints_Collision = t("famous-physics/constraints/Collision"), s.FamousPhysics.Constraints_CollisionJacobian = t("famous-physics/constraints/CollisionJacobian"), s.FamousPhysics.Constraints_Constraint = t("famous-physics/constraints/Constraint"), s.FamousPhysics.Constraints_Curve = t("famous-physics/constraints/Curve"), s.FamousPhysics.Constraints_Distance = t("famous-physics/constraints/Distance"), s.FamousPhysics.Constraints_Distance1D = t("famous-physics/constraints/Distance1D"), s.FamousPhysics.Constraints_Rod = t("famous-physics/constraints/Rod"), s.FamousPhysics.Constraints_Rope = t("famous-physics/constraints/Rope"), s.FamousPhysics.Constraints_StiffSpring = t("famous-physics/constraints/StiffSpring"), s.FamousPhysics.Constraints_Surface = t("famous-physics/constraints/Surface"), s.FamousPhysics.Constraints_Wall = t("famous-physics/constraints/Wall"), s.FamousPhysics.Constraints_Walls = t("famous-physics/constraints/Walls"), s.FamousPhysics.Constraints_joint = t("famous-physics/constraints/joint"), s.FamousPhysics.Forces_Drag = t("famous-physics/forces/Drag"), s.FamousPhysics.Forces_Force = t("famous-physics/forces/Force"), s.FamousPhysics.Forces_Repulsion = t("famous-physics/forces/Repulsion"), s.FamousPhysics.Forces_Spring = t("famous-physics/forces/Spring"), s.FamousPhysics.Forces_TorqueSpring = t("famous-physics/forces/TorqueSpring"), s.FamousPhysics.Forces_VectorField = t("famous-physics/forces/VectorField"), s.FamousPhysics.Forces_rotationalDrag = t("famous-physics/forces/rotationalDrag"), s.FamousPhysics.Integrator_SymplecticEuler = t("famous-physics/integrator/SymplecticEuler"), s.FamousPhysics.Integrator_verlet = t("famous-physics/integrator/verlet"), s.FamousPhysics.Math_GaussSeidel = t("famous-physics/math/GaussSeidel"), s.FamousPhysics.Math_Quaternion = t("famous-physics/math/Quaternion"), s.FamousPhysics.Math_Random = t("famous-physics/math/Random"), s.FamousPhysics.Math_Vector = t("famous-physics/math/Vector"), s.FamousPhysics.Math_matrix = t("famous-physics/math/matrix"), s.FamousPhysics.Utils_PhysicsTransition = t("famous-physics/utils/PhysicsTransition"), s.FamousPhysics.Utils_PhysicsTransition2 = t("famous-physics/utils/PhysicsTransition2"), s.FamousPhysics.Utils_SpringTransition = t("famous-physics/utils/SpringTransition"), s.FamousPhysics.Utils_StiffSpringTransition = t("famous-physics/utils/StiffSpringTransition"), s.FamousPhysics.Utils_WallTransition = t("famous-physics/utils/WallTransition"), s.FamousPhysics.PhysicsEngine = t("famous-physics/PhysicsEngine"), s.FamousSync = {}, s.FamousSync.FastClick = t("famous-sync/FastClick"), s.FamousSync.GenericSync = t("famous-sync/GenericSync"), s.FamousSync.MouseSync = t("famous-sync/MouseSync"), s.FamousSync.PinchSync = t("famous-sync/PinchSync"), s.FamousSync.RotateSync = t("famous-sync/RotateSync"), s.FamousSync.ScaleSync = t("famous-sync/ScaleSync"), s.FamousSync.ScrollSync = t("famous-sync/ScrollSync"), s.FamousSync.TouchSync = t("famous-sync/TouchSync"), s.FamousSync.TouchTracker = t("famous-sync/TouchTracker"), s.FamousSync.TwoFingerSync = t("famous-sync/TwoFingerSync"), s.FamousUi = {}, s.FamousUi.Buttons_ButtonBase = t("famous-ui/Buttons/ButtonBase"), s.FamousUi.Buttons_RotateButton = t("famous-ui/Buttons/RotateButton"), s.FamousUi.Buttons_SpringButton = t("famous-ui/Buttons/SpringButton"), s.FamousUi.Buttons_SpringButton.ui = t("famous-ui/Buttons/SpringButton.ui"), s.FamousUi.ColorPicker_AlphaPicker = t("famous-ui/ColorPicker/AlphaPicker"), s.FamousUi.ColorPicker_CanvasPicker = t("famous-ui/ColorPicker/CanvasPicker"), s.FamousUi.ColorPicker_ColorButton = t("famous-ui/ColorPicker/ColorButton"), s.FamousUi.ColorPicker_ColorPicker = t("famous-ui/ColorPicker/ColorPicker"), s.FamousUi.ColorPicker_GradientPicker = t("famous-ui/ColorPicker/GradientPicker"), s.FamousUi.ColorPicker_HuePicker = t("famous-ui/ColorPicker/HuePicker"), s.FamousUi.Dropdown_Dropdown = t("famous-ui/Dropdown/Dropdown"), s.FamousUi.Dropdown_DropdownItem = t("famous-ui/Dropdown/DropdownItem"), s.FamousUi.Easing_CanvasDrawer = t("famous-ui/Easing/CanvasDrawer"), s.FamousUi.Easing_EasingBool = t("famous-ui/Easing/EasingBool"), s.FamousUi.Easing_EasingVisualizer = t("famous-ui/Easing/EasingVisualizer"), s.FamousUi.Easing_MultiEasingToggle = t("famous-ui/Easing/MultiEasingToggle"), s.FamousUi.Text_Label = t("famous-ui/Text/Label"), s.FamousUi.Toggles_BoolToggle = t("famous-ui/Toggles/BoolToggle"), s.FamousUi.Toggles_MultiBoolToggle = t("famous-ui/Toggles/MultiBoolToggle"), s.FamousUi.AutoUI = t("famous-ui/AutoUI"), s.FamousUi.PanelScrollview = t("famous-ui/PanelScrollview"), s.FamousUi.Slider = t("famous-ui/Slider"), s.FamousUtils = {}, s.FamousUtils.FormatTime = t("famous-utils/FormatTime"), s.FamousUtils.KeyCodes = t("famous-utils/KeyCodes"), s.FamousUtils.NoiseImage = t("famous-utils/NoiseImage"), s.FamousUtils.Time = t("famous-utils/Time"), s.FamousUtils.TimeAgo = t("famous-utils/TimeAgo"), s.FamousUtils.Utils = t("famous-utils/Utils"), s.FamousViews = {}, s.FamousViews.ControlSet = t("famous-views/ControlSet"), s.FamousViews.Flip = t("famous-views/Flip"), s.FamousViews.InputSurface = t("famous-views/InputSurface"), s.FamousViews.LightBox = t("famous-views/LightBox"), s.FamousViews.ScrollContainer = t("famous-views/ScrollContainer"), s.FamousViews.Scrollview = t("famous-views/Scrollview"), s.FamousViews.SequentialLayout = t("famous-views/SequentialLayout"), s.FamousViews.Shaper = t("famous-views/Shaper"), s.FamousViews.Swappable = t("famous-views/Swappable"), s.SurfaceExtensions = {}, s.SurfaceExtensions.ExpandingSurface = t("surface-extensions/ExpandingSurface"), e.exports = s
        }), require(["lib/classList", "lib/functionPrototypeBind", "lib/requestAnimationFrame", "main"]), require("main")
    });