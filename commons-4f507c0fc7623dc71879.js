/*! For license information please see commons-4f507c0fc7623dc71879.js.LICENSE.txt */
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([[351], {
    29821: function(e, t) {
        "use strict";
        t.Q = function(e, t) {
            if ("string" != typeof e)
                throw new TypeError("argument str must be a string");
            for (var r = {}, a = t || {}, i = e.split(";"), c = a.decode || n, s = 0; s < i.length; s++) {
                var l = i[s]
                  , u = l.indexOf("=");
                if (!(u < 0)) {
                    var m = l.substring(0, u).trim();
                    if (null == r[m]) {
                        var f = l.substring(u + 1, l.length).trim();
                        '"' === f[0] && (f = f.slice(1, -1)),
                        r[m] = o(f, c)
                    }
                }
            }
            return r
        }
        ,
        t.q = function(e, t, n) {
            var o = n || {}
              , i = o.encode || r;
            if ("function" != typeof i)
                throw new TypeError("option encode is invalid");
            if (!a.test(e))
                throw new TypeError("argument name is invalid");
            var c = i(t);
            if (c && !a.test(c))
                throw new TypeError("argument val is invalid");
            var s = e + "=" + c;
            if (null != o.maxAge) {
                var l = o.maxAge - 0;
                if (isNaN(l) || !isFinite(l))
                    throw new TypeError("option maxAge is invalid");
                s += "; Max-Age=" + Math.floor(l)
            }
            if (o.domain) {
                if (!a.test(o.domain))
                    throw new TypeError("option domain is invalid");
                s += "; Domain=" + o.domain
            }
            if (o.path) {
                if (!a.test(o.path))
                    throw new TypeError("option path is invalid");
                s += "; Path=" + o.path
            }
            if (o.expires) {
                if ("function" != typeof o.expires.toUTCString)
                    throw new TypeError("option expires is invalid");
                s += "; Expires=" + o.expires.toUTCString()
            }
            o.httpOnly && (s += "; HttpOnly");
            o.secure && (s += "; Secure");
            if (o.sameSite) {
                switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                case !0:
                    s += "; SameSite=Strict";
                    break;
                case "lax":
                    s += "; SameSite=Lax";
                    break;
                case "strict":
                    s += "; SameSite=Strict";
                    break;
                case "none":
                    s += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
                }
            }
            return s
        }
        ;
        var n = decodeURIComponent
          , r = encodeURIComponent
          , a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function o(e, t) {
            try {
                return t(e)
            } catch (n) {
                return e
            }
        }
    },
    46031: function(e) {
        "use strict";
        e.exports = Object.assign
    },
    58516: function(e) {
        var t = "undefined" != typeof Element
          , n = "function" == typeof Map
          , r = "function" == typeof Set
          , a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        function o(e, i) {
            if (e === i)
                return !0;
            if (e && i && "object" == typeof e && "object" == typeof i) {
                if (e.constructor !== i.constructor)
                    return !1;
                var c, s, l, u;
                if (Array.isArray(e)) {
                    if ((c = e.length) != i.length)
                        return !1;
                    for (s = c; 0 != s--; )
                        if (!o(e[s], i[s]))
                            return !1;
                    return !0
                }
                if (n && e instanceof Map && i instanceof Map) {
                    if (e.size !== i.size)
                        return !1;
                    for (u = e.entries(); !(s = u.next()).done; )
                        if (!i.has(s.value[0]))
                            return !1;
                    for (u = e.entries(); !(s = u.next()).done; )
                        if (!o(s.value[1], i.get(s.value[0])))
                            return !1;
                    return !0
                }
                if (r && e instanceof Set && i instanceof Set) {
                    if (e.size !== i.size)
                        return !1;
                    for (u = e.entries(); !(s = u.next()).done; )
                        if (!i.has(s.value[0]))
                            return !1;
                    return !0
                }
                if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                    if ((c = e.length) != i.length)
                        return !1;
                    for (s = c; 0 != s--; )
                        if (e[s] !== i[s])
                            return !1;
                    return !0
                }
                if (e.constructor === RegExp)
                    return e.source === i.source && e.flags === i.flags;
                if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof i.valueOf)
                    return e.valueOf() === i.valueOf();
                if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof i.toString)
                    return e.toString() === i.toString();
                if ((c = (l = Object.keys(e)).length) !== Object.keys(i).length)
                    return !1;
                for (s = c; 0 != s--; )
                    if (!Object.prototype.hasOwnProperty.call(i, l[s]))
                        return !1;
                if (t && e instanceof Element)
                    return !1;
                for (s = c; 0 != s--; )
                    if (("_owner" !== l[s] && "__v" !== l[s] && "__o" !== l[s] || !e.$$typeof) && !o(e[l[s]], i[l[s]]))
                        return !1;
                return !0
            }
            return e != e && i != i
        }
        e.exports = function(e, t) {
            try {
                return o(e, t)
            } catch (n) {
                if ((n.message || "").match(/stack|recursion/i))
                    return console.warn("react-fast-compare cannot handle circular refs"),
                    !1;
                throw n
            }
        }
    },
    13714: function(e, t, n) {
        "use strict";
        var r, a = n(27378), o = (r = a) && "object" == typeof r && "default"in r ? r.default : r;
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var c = !("undefined" == typeof window || !window.document || !window.document.createElement);
        e.exports = function(e, t, n) {
            if ("function" != typeof e)
                throw new Error("Expected reducePropsToState to be a function.");
            if ("function" != typeof t)
                throw new Error("Expected handleStateChangeOnClient to be a function.");
            if (void 0 !== n && "function" != typeof n)
                throw new Error("Expected mapStateOnServer to either be undefined or a function.");
            return function(r) {
                if ("function" != typeof r)
                    throw new Error("Expected WrappedComponent to be a React component.");
                var s, l = [];
                function u() {
                    s = e(l.map((function(e) {
                        return e.props
                    }
                    ))),
                    m.canUseDOM ? t(s) : n && (s = n(s))
                }
                var m = function(e) {
                    var t, n;
                    function a() {
                        return e.apply(this, arguments) || this
                    }
                    n = e,
                    (t = a).prototype = Object.create(n.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = n,
                    a.peek = function() {
                        return s
                    }
                    ,
                    a.rewind = function() {
                        if (a.canUseDOM)
                            throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                        var e = s;
                        return s = void 0,
                        l = [],
                        e
                    }
                    ;
                    var i = a.prototype;
                    return i.UNSAFE_componentWillMount = function() {
                        l.push(this),
                        u()
                    }
                    ,
                    i.componentDidUpdate = function() {
                        u()
                    }
                    ,
                    i.componentWillUnmount = function() {
                        var e = l.indexOf(this);
                        l.splice(e, 1),
                        u()
                    }
                    ,
                    i.render = function() {
                        return o.createElement(r, this.props)
                    }
                    ,
                    a
                }(a.PureComponent);
                return i(m, "displayName", "SideEffect(" + function(e) {
                    return e.displayName || e.name || "Component"
                }(r) + ")"),
                i(m, "canUseDOM", c),
                m
            }
        }
    },
    93631: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return ye
            }
        });
        var r, a, o, i, c = n(27378), s = n(23615), l = n.n(s), u = n(13714), m = n.n(u), f = n(58516), p = n.n(f), d = n(46031), h = n.n(d), v = "bodyAttributes", g = "htmlAttributes", y = "titleAttributes", b = {
            BASE: "base",
            BODY: "body",
            HEAD: "head",
            HTML: "html",
            LINK: "link",
            META: "meta",
            NOSCRIPT: "noscript",
            SCRIPT: "script",
            STYLE: "style",
            TITLE: "title"
        }, E = (Object.keys(b).map((function(e) {
            return b[e]
        }
        )),
        "charset"), w = "cssText", S = "href", _ = "http-equiv", T = "innerHTML", O = "itemprop", k = "name", C = "property", A = "rel", N = "src", j = "target", x = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex"
        }, P = "defaultTitle", M = "defer", I = "encodeSpecialCharacters", L = "onChangeClientState", H = "titleTemplate", R = Object.keys(x).reduce((function(e, t) {
            return e[x[t]] = t,
            e
        }
        ), {}), D = [b.NOSCRIPT, b.SCRIPT, b.STYLE], B = "data-react-helmet", U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , F = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), Q = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        , z = function(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }, V = function(e) {
            return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }, q = function(e) {
            var t = K(e, b.TITLE)
              , n = K(e, H);
            if (n && t)
                return n.replace(/%s/g, (function() {
                    return Array.isArray(t) ? t.join("") : t
                }
                ));
            var r = K(e, P);
            return t || r || void 0
        }, Z = function(e) {
            return K(e, L) || function() {}
        }, $ = function(e, t) {
            return t.filter((function(t) {
                return void 0 !== t[e]
            }
            )).map((function(t) {
                return t[e]
            }
            )).reduce((function(e, t) {
                return Q({}, e, t)
            }
            ), {})
        }, W = function(e, t) {
            return t.filter((function(e) {
                return void 0 !== e[b.BASE]
            }
            )).map((function(e) {
                return e[b.BASE]
            }
            )).reverse().reduce((function(t, n) {
                if (!t.length)
                    for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                        var o = r[a].toLowerCase();
                        if (-1 !== e.indexOf(o) && n[o])
                            return t.concat(n)
                    }
                return t
            }
            ), [])
        }, Y = function(e, t, n) {
            var r = {};
            return n.filter((function(t) {
                return !!Array.isArray(t[e]) || (void 0 !== t[e] && te("Helmet: " + e + ' should be of type "Array". Instead found type "' + U(t[e]) + '"'),
                !1)
            }
            )).map((function(t) {
                return t[e]
            }
            )).reverse().reduce((function(e, n) {
                var a = {};
                n.filter((function(e) {
                    for (var n = void 0, o = Object.keys(e), i = 0; i < o.length; i++) {
                        var c = o[i]
                          , s = c.toLowerCase();
                        -1 === t.indexOf(s) || n === A && "canonical" === e[n].toLowerCase() || s === A && "stylesheet" === e[s].toLowerCase() || (n = s),
                        -1 === t.indexOf(c) || c !== T && c !== w && c !== O || (n = c)
                    }
                    if (!n || !e[n])
                        return !1;
                    var l = e[n].toLowerCase();
                    return r[n] || (r[n] = {}),
                    a[n] || (a[n] = {}),
                    !r[n][l] && (a[n][l] = !0,
                    !0)
                }
                )).reverse().forEach((function(t) {
                    return e.push(t)
                }
                ));
                for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                    var c = o[i]
                      , s = h()({}, r[c], a[c]);
                    r[c] = s
                }
                return e
            }
            ), []).reverse()
        }, K = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                if (r.hasOwnProperty(t))
                    return r[t]
            }
            return null
        }, J = (r = Date.now(),
        function(e) {
            var t = Date.now();
            t - r > 16 ? (r = t,
            e(t)) : setTimeout((function() {
                J(e)
            }
            ), 0)
        }
        ), G = function(e) {
            return clearTimeout(e)
        }, X = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || J : n.g.requestAnimationFrame || J, ee = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || G : n.g.cancelAnimationFrame || G, te = function(e) {
            return console && "function" == typeof console.warn && console.warn(e)
        }, ne = null, re = function(e, t) {
            var n = e.baseTag
              , r = e.bodyAttributes
              , a = e.htmlAttributes
              , o = e.linkTags
              , i = e.metaTags
              , c = e.noscriptTags
              , s = e.onChangeClientState
              , l = e.scriptTags
              , u = e.styleTags
              , m = e.title
              , f = e.titleAttributes;
            ie(b.BODY, r),
            ie(b.HTML, a),
            oe(m, f);
            var p = {
                baseTag: ce(b.BASE, n),
                linkTags: ce(b.LINK, o),
                metaTags: ce(b.META, i),
                noscriptTags: ce(b.NOSCRIPT, c),
                scriptTags: ce(b.SCRIPT, l),
                styleTags: ce(b.STYLE, u)
            }
              , d = {}
              , h = {};
            Object.keys(p).forEach((function(e) {
                var t = p[e]
                  , n = t.newTags
                  , r = t.oldTags;
                n.length && (d[e] = n),
                r.length && (h[e] = p[e].oldTags)
            }
            )),
            t && t(),
            s(e, d, h)
        }, ae = function(e) {
            return Array.isArray(e) ? e.join("") : e
        }, oe = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = ae(e)),
            ie(b.TITLE, t)
        }, ie = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
                for (var r = n.getAttribute(B), a = r ? r.split(",") : [], o = [].concat(a), i = Object.keys(t), c = 0; c < i.length; c++) {
                    var s = i[c]
                      , l = t[s] || "";
                    n.getAttribute(s) !== l && n.setAttribute(s, l),
                    -1 === a.indexOf(s) && a.push(s);
                    var u = o.indexOf(s);
                    -1 !== u && o.splice(u, 1)
                }
                for (var m = o.length - 1; m >= 0; m--)
                    n.removeAttribute(o[m]);
                a.length === o.length ? n.removeAttribute(B) : n.getAttribute(B) !== i.join(",") && n.setAttribute(B, i.join(","))
            }
        }, ce = function(e, t) {
            var n = document.head || document.querySelector(b.HEAD)
              , r = n.querySelectorAll(e + "[" + B + "]")
              , a = Array.prototype.slice.call(r)
              , o = []
              , i = void 0;
            return t && t.length && t.forEach((function(t) {
                var n = document.createElement(e);
                for (var r in t)
                    if (t.hasOwnProperty(r))
                        if (r === T)
                            n.innerHTML = t.innerHTML;
                        else if (r === w)
                            n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var c = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, c)
                        }
                n.setAttribute(B, "true"),
                a.some((function(e, t) {
                    return i = t,
                    n.isEqualNode(e)
                }
                )) ? a.splice(i, 1) : o.push(n)
            }
            )),
            a.forEach((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            o.forEach((function(e) {
                return n.appendChild(e)
            }
            )),
            {
                oldTags: a,
                newTags: o
            }
        }, se = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                return t ? t + " " + r : r
            }
            ), "")
        }, le = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(e).reduce((function(t, n) {
                return t[x[n] || n] = e[n],
                t
            }
            ), t)
        }, ue = function(e, t, n) {
            switch (e) {
            case b.TITLE:
                return {
                    toComponent: function() {
                        return e = t.title,
                        n = t.titleAttributes,
                        (r = {
                            key: e
                        })[B] = !0,
                        a = le(n, r),
                        [c.createElement(b.TITLE, a, e)];
                        var e, n, r, a
                    },
                    toString: function() {
                        return function(e, t, n, r) {
                            var a = se(n)
                              , o = ae(t);
                            return a ? "<" + e + " " + B + '="true" ' + a + ">" + V(o, r) + "</" + e + ">" : "<" + e + " " + B + '="true">' + V(o, r) + "</" + e + ">"
                        }(e, t.title, t.titleAttributes, n)
                    }
                };
            case v:
            case g:
                return {
                    toComponent: function() {
                        return le(t)
                    },
                    toString: function() {
                        return se(t)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return function(e, t) {
                            return t.map((function(t, n) {
                                var r, a = ((r = {
                                    key: n
                                })[B] = !0,
                                r);
                                return Object.keys(t).forEach((function(e) {
                                    var n = x[e] || e;
                                    if (n === T || n === w) {
                                        var r = t.innerHTML || t.cssText;
                                        a.dangerouslySetInnerHTML = {
                                            __html: r
                                        }
                                    } else
                                        a[n] = t[e]
                                }
                                )),
                                c.createElement(e, a)
                            }
                            ))
                        }(e, t)
                    },
                    toString: function() {
                        return function(e, t, n) {
                            return t.reduce((function(t, r) {
                                var a = Object.keys(r).filter((function(e) {
                                    return !(e === T || e === w)
                                }
                                )).reduce((function(e, t) {
                                    var a = void 0 === r[t] ? t : t + '="' + V(r[t], n) + '"';
                                    return e ? e + " " + a : a
                                }
                                ), "")
                                  , o = r.innerHTML || r.cssText || ""
                                  , i = -1 === D.indexOf(e);
                                return t + "<" + e + " " + B + '="true" ' + a + (i ? "/>" : ">" + o + "</" + e + ">")
                            }
                            ), "")
                        }(e, t, n)
                    }
                }
            }
        }, me = function(e) {
            var t = e.baseTag
              , n = e.bodyAttributes
              , r = e.encode
              , a = e.htmlAttributes
              , o = e.linkTags
              , i = e.metaTags
              , c = e.noscriptTags
              , s = e.scriptTags
              , l = e.styleTags
              , u = e.title
              , m = void 0 === u ? "" : u
              , f = e.titleAttributes;
            return {
                base: ue(b.BASE, t, r),
                bodyAttributes: ue(v, n, r),
                htmlAttributes: ue(g, a, r),
                link: ue(b.LINK, o, r),
                meta: ue(b.META, i, r),
                noscript: ue(b.NOSCRIPT, c, r),
                script: ue(b.SCRIPT, s, r),
                style: ue(b.STYLE, l, r),
                title: ue(b.TITLE, {
                    title: m,
                    titleAttributes: f
                }, r)
            }
        }, fe = m()((function(e) {
            return {
                baseTag: W([S, j], e),
                bodyAttributes: $(v, e),
                defer: K(e, M),
                encode: K(e, I),
                htmlAttributes: $(g, e),
                linkTags: Y(b.LINK, [A, S], e),
                metaTags: Y(b.META, [k, E, _, C, O], e),
                noscriptTags: Y(b.NOSCRIPT, [T], e),
                onChangeClientState: Z(e),
                scriptTags: Y(b.SCRIPT, [N, T], e),
                styleTags: Y(b.STYLE, [w], e),
                title: q(e),
                titleAttributes: $(y, e)
            }
        }
        ), (function(e) {
            ne && ee(ne),
            e.defer ? ne = X((function() {
                re(e, (function() {
                    ne = null
                }
                ))
            }
            )) : (re(e),
            ne = null)
        }
        ), me)((function() {
            return null
        }
        )), pe = (a = fe,
        i = o = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            t.prototype.shouldComponentUpdate = function(e) {
                return !p()(this.props, e)
            }
            ,
            t.prototype.mapNestedChildrenToProps = function(e, t) {
                if (!t)
                    return null;
                switch (e.type) {
                case b.SCRIPT:
                case b.NOSCRIPT:
                    return {
                        innerHTML: t
                    };
                case b.STYLE:
                    return {
                        cssText: t
                    }
                }
                throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }
            ,
            t.prototype.flattenArrayTypeChildren = function(e) {
                var t, n = e.child, r = e.arrayTypeChildren, a = e.newChildProps, o = e.nestedChildren;
                return Q({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [Q({}, a, this.mapNestedChildrenToProps(n, o))]),
                t))
            }
            ,
            t.prototype.mapObjectTypeChildren = function(e) {
                var t, n, r = e.child, a = e.newProps, o = e.newChildProps, i = e.nestedChildren;
                switch (r.type) {
                case b.TITLE:
                    return Q({}, a, ((t = {})[r.type] = i,
                    t.titleAttributes = Q({}, o),
                    t));
                case b.BODY:
                    return Q({}, a, {
                        bodyAttributes: Q({}, o)
                    });
                case b.HTML:
                    return Q({}, a, {
                        htmlAttributes: Q({}, o)
                    })
                }
                return Q({}, a, ((n = {})[r.type] = Q({}, o),
                n))
            }
            ,
            t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                var n = Q({}, t);
                return Object.keys(e).forEach((function(t) {
                    var r;
                    n = Q({}, n, ((r = {})[t] = e[t],
                    r))
                }
                )),
                n
            }
            ,
            t.prototype.warnOnInvalidChildren = function(e, t) {
                return !0
            }
            ,
            t.prototype.mapChildrenToProps = function(e, t) {
                var n = this
                  , r = {};
                return c.Children.forEach(e, (function(e) {
                    if (e && e.props) {
                        var a = e.props
                          , o = a.children
                          , i = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return Object.keys(e).reduce((function(t, n) {
                                return t[R[n] || n] = e[n],
                                t
                            }
                            ), t)
                        }(z(a, ["children"]));
                        switch (n.warnOnInvalidChildren(e, o),
                        e.type) {
                        case b.LINK:
                        case b.META:
                        case b.NOSCRIPT:
                        case b.SCRIPT:
                        case b.STYLE:
                            r = n.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: r,
                                newChildProps: i,
                                nestedChildren: o
                            });
                            break;
                        default:
                            t = n.mapObjectTypeChildren({
                                child: e,
                                newProps: t,
                                newChildProps: i,
                                nestedChildren: o
                            })
                        }
                    }
                }
                )),
                t = this.mapArrayTypeChildrenToProps(r, t)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.children
                  , n = z(e, ["children"])
                  , r = Q({}, n);
                return t && (r = this.mapChildrenToProps(t, r)),
                c.createElement(a, r)
            }
            ,
            F(t, null, [{
                key: "canUseDOM",
                set: function(e) {
                    a.canUseDOM = e
                }
            }]),
            t
        }(c.Component),
        o.propTypes = {
            base: l().object,
            bodyAttributes: l().object,
            children: l().oneOfType([l().arrayOf(l().node), l().node]),
            defaultTitle: l().string,
            defer: l().bool,
            encodeSpecialCharacters: l().bool,
            htmlAttributes: l().object,
            link: l().arrayOf(l().object),
            meta: l().arrayOf(l().object),
            noscript: l().arrayOf(l().object),
            onChangeClientState: l().func,
            script: l().arrayOf(l().object),
            style: l().arrayOf(l().object),
            title: l().string,
            titleAttributes: l().object,
            titleTemplate: l().string
        },
        o.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        },
        o.peek = a.peek,
        o.rewind = function() {
            var e = a.rewind();
            return e || (e = me({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })),
            e
        }
        ,
        i);
        pe.renderStatic = pe.rewind;
        var de = n(82917)
          , he = n(58391)
          , ve = n(62732)
          , ge = function(e) {
            var t = e.name
              , n = e.property
              , r = e.content;
            return r && (t || n) ? c.createElement(pe, {
                defer: !1
            }, c.createElement("meta", Object.assign({}, t ? {
                name: t
            } : {}, n ? {
                property: n
            } : {}, {
                content: (0,
                de.friendlyAttrValue)(r)
            }))) : null
        }
          , ye = function(e) {
            var t = e.canonical
              , n = e.title
              , r = e.metaDesc
              , a = e.noarchive
              , o = e.focuskw
              , i = e.metaRobotsNofollow
              , s = e.metaRobotsNoindex
              , l = e.opengraphTitle
              , u = e.opengraphDescription
              , m = e.opengraphPublishedTime
              , f = e.opengraphModifiedTime
              , p = e.opengraphImage
              , d = e.twitterTitle
              , h = e.twitterDescription
              , v = e.twitterImage
              , g = (0,
            he.useStaticQuery)("2548930019").seo.schema
              , y = (0,
            ve.mF)()
              , b = (0,
            de.safeAttrValue)("link", "href", "" + y.siteUrl + t)
              , E = Object.values({
                noarchive: a,
                metaRobotsNofollow: i,
                metaRobotsNoindex: s
            }).filter((function(e) {
                return e
            }
            )).join(", ");
            return c.createElement(c.Fragment, null, c.createElement(pe, {
                defer: !1,
                defaultTitle: g.siteName
            }, c.createElement("html", {
                lang: g.inLanguage
            }), c.createElement("title", null, n || g.siteName), c.createElement("link", {
                rel: "canonical",
                href: b
            }), c.createElement("meta", {
                name: "docsearch:version",
                content: "2.0"
            }), c.createElement("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            })), c.createElement(ge, {
                name: "description",
                content: r
            }), c.createElement(ge, {
                name: "keywords",
                content: o
            }), c.createElement(ge, {
                name: "robots",
                content: E
            }), c.createElement(ge, {
                property: "og:title",
                content: l || n
            }), c.createElement(ge, {
                property: "og:description",
                content: u || r
            }), c.createElement(ge, {
                property: "og:image",
                content: null != p && p.mediaItemUrl ? "" + y.siteUrl + (null == p ? void 0 : p.mediaItemUrl) : null == p ? void 0 : p.srcSet
            }), c.createElement(ge, {
                property: "og:url",
                content: b
            }), c.createElement(ge, {
                property: "og:locale",
                content: g.inLanguage
            }), c.createElement(ge, {
                property: "og:site_name",
                content: g.siteName
            }), c.createElement(ge, {
                property: "og:published_time",
                content: m
            }), c.createElement(ge, {
                property: "og:modified_time",
                content: f
            }), c.createElement(ge, {
                property: "og:type",
                content: "website"
            }), c.createElement(ge, {
                name: "twitter:title",
                content: d || n
            }), c.createElement(ge, {
                name: "twitter:description",
                content: h || r
            }), c.createElement(ge, {
                name: "twitter:image",
                content: (null == v ? void 0 : v.srcSet) || (null == v ? void 0 : v.mediaItemUrl)
            }), c.createElement(ge, {
                name: "twitter:card",
                content: "summary"
            }))
        }
    },
    32101: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return Ee
            }
        });
        var r = n(27378)
          , a = n(58391)
          , o = n(29821);
        function i(e, t) {
            void 0 === t && (t = {});
            var n = function(e) {
                if (e && "j" === e[0] && ":" === e[1])
                    return e.substr(2);
                return e
            }(e);
            if (function(e, t) {
                return void 0 === t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]),
                !t
            }(n, t.doNotParse))
                try {
                    return JSON.parse(n)
                } catch (r) {}
            return e
        }
        var c = function() {
            return c = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            c.apply(this, arguments)
        }
          , s = function() {
            function e(e, t) {
                var n = this;
                this.changeListeners = [],
                this.HAS_DOCUMENT_COOKIE = !1,
                this.cookies = function(e, t) {
                    return "string" == typeof e ? o.Q(e, t) : "object" == typeof e && null !== e ? e : {}
                }(e, t),
                new Promise((function() {
                    n.HAS_DOCUMENT_COOKIE = "object" == typeof document && "string" == typeof document.cookie
                }
                )).catch((function() {}
                ))
            }
            return e.prototype._updateBrowserValues = function(e) {
                this.HAS_DOCUMENT_COOKIE && (this.cookies = o.Q(document.cookie, e))
            }
            ,
            e.prototype._emitChange = function(e) {
                for (var t = 0; t < this.changeListeners.length; ++t)
                    this.changeListeners[t](e)
            }
            ,
            e.prototype.get = function(e, t, n) {
                return void 0 === t && (t = {}),
                this._updateBrowserValues(n),
                i(this.cookies[e], t)
            }
            ,
            e.prototype.getAll = function(e, t) {
                void 0 === e && (e = {}),
                this._updateBrowserValues(t);
                var n = {};
                for (var r in this.cookies)
                    n[r] = i(this.cookies[r], e);
                return n
            }
            ,
            e.prototype.set = function(e, t, n) {
                var r;
                "object" == typeof t && (t = JSON.stringify(t)),
                this.cookies = c(c({}, this.cookies), ((r = {})[e] = t,
                r)),
                this.HAS_DOCUMENT_COOKIE && (document.cookie = o.q(e, t, n)),
                this._emitChange({
                    name: e,
                    value: t,
                    options: n
                })
            }
            ,
            e.prototype.remove = function(e, t) {
                var n = t = c(c({}, t), {
                    expires: new Date(1970,1,1,0,0,1),
                    maxAge: 0
                });
                this.cookies = c({}, this.cookies),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE && (document.cookie = o.q(e, "", n)),
                this._emitChange({
                    name: e,
                    value: void 0,
                    options: t
                })
            }
            ,
            e.prototype.addChangeListener = function(e) {
                this.changeListeners.push(e)
            }
            ,
            e.prototype.removeChangeListener = function(e) {
                var t = this.changeListeners.indexOf(e);
                t >= 0 && this.changeListeners.splice(t, 1)
            }
            ,
            e
        }()
          , l = n(82917)
          , u = n.n(l)
          , m = "userHasAcceptedCookies"
          , f = "true"
          , p = "false"
          , d = n(59857)
          , h = function() {
            var e = function() {
                var e = (0,
                a.useStaticQuery)("2039840079").allStatikSettings.cookieConsentSettings
                  , t = e.cookieMessage
                  , n = e.acceptMessage
                  , o = e.rejectMessage
                  , i = (0,
                r.useState)((function() {
                    return new s
                }
                ))[0]
                  , c = (0,
                r.useState)(i.get(m) === f)
                  , l = c[0]
                  , d = c[1]
                  , h = (0,
                r.useState)(i.get(m) === p)
                  , v = h[0]
                  , g = h[1]
                  , y = (0,
                r.useCallback)((function(e) {
                    return void 0 === e && (e = f),
                    function() {
                        var t = new Date;
                        t.setTime(t.getTime() + 31536e6),
                        i.set(m, e, {
                            path: "/",
                            expires: t
                        }),
                        e === f && d(!0),
                        e === p && g(!0)
                    }
                }
                ), [i]);
                return {
                    cookieMessage: Boolean(t) ? u()(t) : 'We use cookies to offer you better experience, analyze site traffic, and serve targeted advertisements. By continuing to use this website, you consent to the use of cookies in accordance with our <a href="/cookie-policy">Cookie Policy</a>',
                    acceptMessage: Boolean(n) ? u()(n) : "Ok, got it",
                    rejectMessage: Boolean(o) ? u()(o) : "I reject",
                    isAccepted: l,
                    isRejected: v,
                    accept: y(f),
                    reject: y(p)
                }
            }()
              , t = e.cookieMessage
              , n = e.acceptMessage
              , o = e.rejectMessage
              , i = e.isAccepted
              , c = e.isRejected
              , l = e.accept
              , h = e.reject;
            return !(0,
            d.t)() || i || c ? null : r.createElement("section", {
                className: "cookie-consent"
            }, r.createElement("div", {
                className: "cookie-consent__container"
            }, r.createElement("div", {
                className: "cookie-consent__message",
                dangerouslySetInnerHTML: {
                    __html: t
                }
            }), r.createElement("div", {
                className: "cookie-consent__button"
            }, r.createElement("button", {
                className: "cookie-consent__button--reject",
                onClick: h
            }, o)), r.createElement("div", {
                className: "cookie-consent__button gg-btn-fill"
            }, r.createElement("button", {
                className: "cookie-consent__button--accept",
                onClick: l
            }, n))))
        }
          , v = n(30808)
          , g = n(7692)
          , y = (0,
        r.createContext)(void 0);
        function b() {
            var e = (0,
            r.useContext)(y);
            if (void 0 === e)
                throw new Error("useMenuItemContext was used outside of its MenuItemProvider.");
            return e
        }
        var E = (0,
        r.createContext)(void 0);
        var w = function() {
            var e = function() {
                var e = (0,
                r.useContext)(E);
                if (void 0 === e)
                    throw new Error("useMenuContext was used outside of its MenuProvider.");
                return e
            }().interaction
              , t = b()
              , n = t.item
              , o = t.hasOpenState
              , i = t.setOpenState;
            if (n.isInteractive) {
                var c = n.render;
                return r.createElement(c, null)
            }
            var s = function(t) {
                "click" === e && (n.hasChildren || n.megamenu) && (t.preventDefault(),
                i(!o))
            };
            return n.isInternal ? r.createElement(a.Link, {
                to: n.url,
                className: "menu__link",
                activeClassName: "menu__link--active",
                partiallyActive: !1,
                onClick: s,
                role: "menuitem",
                "aria-haspopup": n.hasChildren,
                "aria-expanded": o
            }, n.label) : n.url ? r.createElement("a", {
                href: (0,
                l.safeAttrValue)("a", "href", n.url),
                className: "menu__link",
                target: n.target,
                rel: "noreferrer",
                role: "menuitem",
                onClick: s
            }, n.label) : r.createElement("span", {
                tabIndex: 0,
                onClick: s,
                className: "menu__link--empty",
                role: "button",
                "aria-haspopup": n.hasChildren,
                "aria-expanded": o
            }, n.label)
        }
          , S = n(62732)
          , _ = function() {
            var e = b()
              , t = e.item
              , n = e.hasOpenState
              , a = e.setOpenState
              , o = t.megamenu.node.gutenbergBlocks.nodes
              , i = (0,
            g.Z)({
                menu__megamenu: !0
            });
            return r.createElement("div", {
                className: i
            }, o && r.createElement(r.Fragment, null, r.createElement("div", {
                className: "menu__megamenu__back-btn",
                onClick: function(e) {
                    e.preventDefault(),
                    a(!n)
                }
            }, r.createElement("span", null, "Back")), r.createElement(S.M1, {
                blocks: o
            })))
        }
          , T = function() {
            var e = b()
              , t = e.item
              , n = e.level
              , a = e.hasOpenState
              , o = e.hasHoverState
              , i = e.setHoverState
              , c = e.hasHoverChildState
              , s = e.setHoverChildState
              , l = (0,
            g.Z)({
                menu__item: !0,
                "menu__item--active": t.isActive,
                "menu__item--hover": o,
                "menu__item--open": a,
                "menu__item--internal": t.isInternal,
                "menu__item--has-megamenu": t.hasMegaMenu,
                "menu__item--has-children": t.hasChildren,
                "menu__item--has-active-child": t.hasActiveChild,
                "menu__item--has-hover-child": !o && c
            }, t.cssClasses)
              , u = function(e) {
                e.stopPropagation(),
                i(!0)
            }
              , m = function() {
                s(!0)
            }
              , f = function() {
                i(!1),
                s(!1)
            };
            return r.createElement("li", {
                className: l,
                onMouseEnter: u,
                onFocus: function(e) {
                    e.target.closest(".menu__list--lvl-1") ? m() : u(e)
                },
                onMouseOverCapture: m,
                onMouseLeave: f,
                onBlur: function(e) {
                    e.currentTarget.contains(e.relatedTarget) ? m() : f()
                },
                role: "none"
            }, r.createElement(w, null), t.hasMegaMenu && r.createElement(_, null), t.hasChildren && r.createElement(C, {
                items: t.children,
                level: n + 1,
                role: "menu",
                "aria-label": t.label
            }))
        }
          , O = function(e) {
            var t = e.item
              , n = e.level
              , a = e.children
              , o = (0,
            r.useState)(!1)
              , i = o[0]
              , c = o[1]
              , s = (0,
            r.useState)(!1)
              , l = s[0]
              , u = s[1]
              , m = (0,
            r.useState)(!1)
              , f = {
                item: t,
                level: n,
                hasOpenState: i,
                hasHoverState: l,
                hasHoverChildState: m[0],
                setOpenState: c,
                setHoverState: u,
                setHoverChildState: m[1]
            };
            return r.createElement(y.Provider, {
                value: f
            }, a)
        }
          , k = ["items", "level", "className"]
          , C = function(e) {
            var t, n = e.items, a = e.level, o = void 0 === a ? 0 : a, i = e.className, c = (0,
            v.Z)(e, k), s = (0,
            g.Z)(((t = {
                menu__list: !0
            })["menu__list--lvl-" + o] = !0,
            t), i);
            return r.createElement("ul", Object.assign({
                className: s
            }, c), n.map((function(e) {
                return r.createElement(O, {
                    key: e.id,
                    item: e,
                    level: o
                }, r.createElement(T, null))
            }
            )))
        }
          , A = n(30644)
          , N = n.n(A)
          , j = n(64649)
          , x = n(30126)
          , P = n(65809)
          , M = n(67591)
          , I = n(6983);
        function L(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function H() {
            H = function(e, t) {
                return new n(e,void 0,t)
            }
            ;
            var e = RegExp.prototype
              , t = new WeakMap;
            function n(e, r, a) {
                var o = new RegExp(e,r);
                return t.set(o, a || t.get(e)),
                (0,
                I.Z)(o, n.prototype)
            }
            function r(e, n) {
                var r = t.get(n);
                return Object.keys(r).reduce((function(t, n) {
                    var a = r[n];
                    if ("number" == typeof a)
                        t[n] = e[a];
                    else {
                        for (var o = 0; void 0 === e[a[o]] && o + 1 < a.length; )
                            o++;
                        t[n] = e[a[o]]
                    }
                    return t
                }
                ), Object.create(null))
            }
            return (0,
            M.Z)(n, RegExp),
            n.prototype.exec = function(t) {
                var n = e.exec.call(this, t);
                if (n) {
                    n.groups = r(n, this);
                    var a = n.indices;
                    a && (a.groups = r(a, this))
                }
                return n
            }
            ,
            n.prototype[Symbol.replace] = function(n, a) {
                if ("string" == typeof a) {
                    var o = t.get(this);
                    return e[Symbol.replace].call(this, n, a.replace(/\$<([^>]+)>/g, (function(e, t) {
                        var n = o[t];
                        return "$" + (Array.isArray(n) ? n.join("$") : n)
                    }
                    )))
                }
                if ("function" == typeof a) {
                    var i = this;
                    return e[Symbol.replace].call(this, n, (function() {
                        var e = arguments;
                        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(r(e, i)),
                        a.apply(this, e)
                    }
                    ))
                }
                return e[Symbol.replace].call(this, n, a)
            }
            ,
            H.apply(this, arguments)
        }
        var R = function(e, t) {
            return t.some((function(t) {
                return t instanceof RegExp ? t.test(e) : t === e
            }
            ))
        };
        function D(e, t) {
            if (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        (0,
                        j.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                defaultProtocol: "http:",
                normalizeProtocol: !0,
                forceHttp: !1,
                forceHttps: !1,
                stripAuthentication: !0,
                stripHash: !1,
                stripTextFragment: !0,
                stripWWW: !0,
                removeQueryParameters: [/^utm_\w+/i],
                removeTrailingSlash: !0,
                removeSingleSlash: !0,
                removeDirectoryIndex: !1,
                removeExplicitPort: !1,
                sortQueryParameters: !0
            }, t),
            e = e.trim(),
            /^data:/i.test(e))
                return function(e, t) {
                    var n = t.stripHash
                      , r = H(/^data:([^,]*?),([^#]*?)(?:#(.*))?$/, {
                        type: 1,
                        data: 2,
                        hash: 3
                    }).exec(e);
                    if (!r)
                        throw new Error("Invalid URL: ".concat(e));
                    var a = r.groups
                      , o = a.type
                      , i = a.data
                      , c = a.hash
                      , s = o.split(";");
                    c = n ? "" : c;
                    var l = !1;
                    "base64" === s[s.length - 1] && (s.pop(),
                    l = !0);
                    var u = (s.shift() || "").toLowerCase()
                      , m = s.map((function(e) {
                        var t = e.split("=").map((function(e) {
                            return e.trim()
                        }
                        ))
                          , n = (0,
                        P.Z)(t, 2)
                          , r = n[0]
                          , a = n[1]
                          , o = void 0 === a ? "" : a;
                        return "charset" === r && "us-ascii" === (o = o.toLowerCase()) ? "" : "".concat(r).concat(o ? "=".concat(o) : "")
                    }
                    )).filter(Boolean)
                      , f = (0,
                    x.Z)(m);
                    return l && f.push("base64"),
                    (f.length > 0 || u && "text/plain" !== u) && f.unshift(u),
                    "data:".concat(f.join(";"), ",").concat(l ? i.trim() : i).concat(c ? "#".concat(c) : "")
                }(e, t);
            if (/^view-source:/i.test(e))
                throw new Error("`view-source:` is not supported as it is a non-standard protocol");
            var n = e.startsWith("//");
            !n && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
            var r = new URL(e);
            if (t.forceHttp && t.forceHttps)
                throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
            if (t.forceHttp && "https:" === r.protocol && (r.protocol = "http:"),
            t.forceHttps && "http:" === r.protocol && (r.protocol = "https:"),
            t.stripAuthentication && (r.username = "",
            r.password = ""),
            t.stripHash ? r.hash = "" : t.stripTextFragment && (r.hash = r.hash.replace(/#?:~:text.*?$/i, "")),
            r.pathname) {
                for (var a = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g, o = 0, i = ""; ; ) {
                    var c = a.exec(r.pathname);
                    if (!c)
                        break;
                    var s = c[0]
                      , l = c.index;
                    i += r.pathname.slice(o, l).replace(/\/{2,}/g, "/"),
                    i += s,
                    o = l + s.length
                }
                i += r.pathname.slice(o, r.pathname.length).replace(/\/{2,}/g, "/"),
                r.pathname = i
            }
            if (r.pathname)
                try {
                    r.pathname = decodeURI(r.pathname)
                } catch (b) {}
            if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]),
            Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                var u = r.pathname.split("/")
                  , m = u[u.length - 1];
                R(m, t.removeDirectoryIndex) && (u = u.slice(0, -1),
                r.pathname = u.slice(1).join("/") + "/")
            }
            if (r.hostname && (r.hostname = r.hostname.replace(/\.$/, ""),
            t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(r.hostname) && (r.hostname = r.hostname.replace(/^www\./, ""))),
            Array.isArray(t.removeQueryParameters))
                for (var f = 0, p = (0,
                x.Z)(r.searchParams.keys()); f < p.length; f++) {
                    var d = p[f];
                    R(d, t.removeQueryParameters) && r.searchParams.delete(d)
                }
            if (Array.isArray(t.keepQueryParameters) || !0 !== t.removeQueryParameters || (r.search = ""),
            Array.isArray(t.keepQueryParameters) && t.keepQueryParameters.length > 0)
                for (var h = 0, v = (0,
                x.Z)(r.searchParams.keys()); h < v.length; h++) {
                    var g = v[h];
                    R(g, t.keepQueryParameters) || r.searchParams.delete(g)
                }
            if (t.sortQueryParameters) {
                r.searchParams.sort();
                try {
                    r.search = decodeURIComponent(r.search)
                } catch (E) {}
            }
            t.removeTrailingSlash && (r.pathname = r.pathname.replace(/\/$/, "")),
            t.removeExplicitPort && r.port && (r.port = "");
            var y = e;
            return e = r.toString(),
            t.removeSingleSlash || "/" !== r.pathname || y.endsWith("/") || "" !== r.hash || (e = e.replace(/\/$/, "")),
            (t.removeTrailingSlash || "/" === r.pathname) && "" === r.hash && t.removeSingleSlash && (e = e.replace(/\/$/, "")),
            n && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")),
            t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")),
            e
        }
        var B = n(95429);
        var U = function(e, t) {
            if (!Array.isArray(e))
                return [];
            var n = []
              , r = F(e, t);
            return Q(r, n),
            n
        }
          , F = function(e, t) {
            return new Map(e.sort((function(e, t) {
                return e.order - t.order
            }
            )).map((function(e) {
                var n, r, o, i = !N()(e.target) && "_self" !== e.target, c = N()(e.connectedNode), s = i && !c ? (0,
                a.withPrefix)(e.url) : e.url, l = !i && !c, u = V(l, s, t), m = Boolean(e.render), f = Boolean(null === (n = e.megamenu) || void 0 === n || null === (r = n.node) || void 0 === r || null === (o = r.gutenbergBlocks) || void 0 === o ? void 0 : o.nodes), p = e.render;
                return [e.id, Object.assign({}, e, {
                    url: s,
                    render: p,
                    isInteractive: m,
                    isInternal: l,
                    isActive: u,
                    hasMegaMenu: f,
                    children: [],
                    hasChildren: !1,
                    hasActiveChild: !1
                })]
            }
            )))
        }
          , Q = function(e, t) {
            e.forEach((function(n) {
                if (null === n.parentId)
                    t.push(n);
                else {
                    var r = e.get(n.parentId);
                    void 0 !== r && (r.children.push(n),
                    r.hasChildren = !0,
                    n.isActive && z(n, e))
                }
            }
            ))
        }
          , z = function e(t, n) {
            if (null !== t.parentId) {
                var r = n.get(t.parentId);
                void 0 !== r && (r.hasActiveChild = !0,
                e(r, n))
            }
        }
          , V = function(e, t, n) {
            return e ? (0,
            a.withPrefix)(t) === q(n) : D(new URL(t,n.origin).toString()) === D(n.toString())
        }
          , q = function(e) {
            return e.toString().slice(e.origin.length)
        }
          , Z = function(e) {
            var t = e.interaction
              , n = e.menuItems
              , a = e.children
              , o = {
                interaction: t,
                items: n
            };
            return r.createElement(E.Provider, {
                value: o
            }, a)
        }
          , $ = ["items", "interaction", "className"]
          , W = function(e) {
            var t = e.items
              , n = e.interaction
              , a = void 0 === n ? "default" : n
              , o = e.className
              , i = (0,
            v.Z)(e, $)
              , c = function(e) {
                var t = (0,
                B.b)();
                return (0,
                r.useMemo)((function() {
                    return U(e, t)
                }
                ), [e, t])
            }(t);
            if (!c.length)
                return null;
            var s = (0,
            g.Z)({
                menu: !0,
                "menu--default": "default" === a,
                "menu--hoverable": "hover" === a,
                "menu--clickable": "click" === a
            }, o);
            return r.createElement(Z, {
                items: c,
                interaction: a
            }, r.createElement("nav", Object.assign({
                className: s
            }, i), r.createElement(C, {
                items: c,
                level: 0,
                role: "menubar"
            })))
        }
          , Y = function() {
            var e = function() {
                var e = (0,
                a.useStaticQuery)("4220730403").allMenus;
                if (0 === e.nodes.length)
                    return null;
                var t = e.nodes[0];
                return {
                    items: t.items.nodes,
                    hierarchical: t.isHierarchical
                }
            }();
            return e ? r.createElement(W, {
                id: "footer-menu",
                items: e.items
            }) : null
        }
          , K = function(e) {
            return r.createElement("svg", Object.assign({
                width: 120,
                height: 39,
                viewBox: "0 0 1600 310",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32.323 0C14.472 0 0 14.472 0 32.323v261.75c0 12.694 13.963 20.433 24.727 13.705l298.505-186.566-138.528 115.44 113.801 71.126c10.765 6.728 24.727-1.011 24.727-13.705V121.212C323.232 54.268 268.964 0 202.02 0H32.323zm629.161 261.345h-21.553a3.667 3.667 0 01-3.688-3.677V153.944c0-27.126-15.16-47.022-43.351-47.022-26.838 0-46.465 19.896-46.465 46.327v104.419a3.667 3.667 0 01-3.687 3.677h-21.881a3.667 3.667 0 01-3.687-3.677V88.294a3.667 3.667 0 013.687-3.677h20.856a3.667 3.667 0 013.688 3.677v6.291c0 3.187 3.811 4.902 6.146 2.737 11.719-10.826 27.535-17.158 45.523-17.158 43.351 0 68.14 30.885 68.14 74.801v102.703c-.041 2.043-1.721 3.677-3.728 3.677zm129.276 4.126c50.603 0 89.16-41.179 89.16-91.959 0-51.474-38.557-93.348-89.16-93.348-50.276 0-89.16 41.874-89.16 93.348 0 50.78 38.925 91.959 89.16 91.959zm0-158.549c33.066 0 59.905 29.864 59.905 66.59 0 36.032-26.839 65.201-59.905 65.201-32.698 0-59.536-29.169-59.536-65.201 0-36.726 26.838-66.59 59.536-66.59zm272.43 98.005l33.23-117.614a3.7 3.7 0 013.57-2.697h22.9c2.46 0 4.22 2.37 3.53 4.74l-50.81 169.374c-.45 1.552-1.89 2.614-3.52 2.614h-25.08a3.737 3.737 0 01-3.57-2.696l-33.55-119.82c-.99-3.595-6.11-3.595-7.09 0l-33.56 119.82a3.687 3.687 0 01-3.565 2.696h-24.749c-1.639 0-3.073-1.062-3.523-2.614L886.594 89.355c-.696-2.37 1.066-4.739 3.524-4.739h22.905c1.639 0 3.114 1.103 3.565 2.656l33.558 117.696c1.024 3.554 6.064 3.554 7.088 0l33.558-117.696c.451-1.594 1.885-2.656 3.565-2.656h24.703c1.64 0 3.12 1.103 3.57 2.656l33.52 117.614c.94 3.595 6.02 3.595 7.04.041zm70.52 4.74c6.6 34.888 37.17 56.131 78.51 56.131 42.37 0 72.65-22.306 72.69-57.643 0-40.158-32.33-47.716-71.58-53.884-34.75-5.475-44.75-9.928-44.75-22.633 0-13.726 16.89-24.716 40.28-24.716 20.61 0 36.84 8.702 41.96 25.738.49 1.593 1.88 2.737 3.56 2.737h22.5c2.21 0 4.01-1.961 3.65-4.167-5.49-32.11-32.41-51.066-71.71-51.066-47.49 0-69.53 27.085-69.53 52.496 0 33.294 26.14 43.589 69.16 49.758 43.35 5.842 48.19 15.115 48.19 27.453 0 15.442-16.88 28.842-44.42 28.842-24.26 0-43.84-11.521-48.92-30.435-.45-1.635-1.89-2.86-3.61-2.86h-22.33c-2.25 0-4.05 2.042-3.65 4.249zm462.6 51.678h-20.85a3.668 3.668 0 01-3.69-3.677v-14.257c0-3.35-4.14-4.943-6.39-2.451-13.03 14.298-32.74 24.879-54.87 24.879-50.93 0-88.79-41.506-88.79-92.654 0-51.147 37.86-92.98 88.79-92.98 22.17 0 41.88 10.58 54.91 24.675 2.25 2.451 6.35.858 6.35-2.492V88.335a3.668 3.668 0 013.69-3.677h20.85c2.05 0 3.69 1.634 3.69 3.677v169.374c0 2.002-1.64 3.636-3.69 3.636zm-85.8-153.401c-33.39 0-59.53 29.495-59.53 65.527 0 35.338 26.14 64.506 59.53 64.506 32.7 0 60.23-29.168 60.23-64.506 0-35.991-27.53-65.527-60.23-65.527zm-112.1 153.727c1.89-.163 3.36-1.797 3.36-3.676h.04v-19.65c0-2.043-1.64-3.718-3.69-3.677-3.89.041-7.7-.245-11.26-.94-14.88-2.941-26.02-13.195-26.02-36.93v-80.725a3.666 3.666 0 013.68-3.677h32.91a3.66 3.66 0 003.68-3.677V88.293a3.66 3.66 0 00-3.68-3.677h-32.91a3.666 3.666 0 01-3.68-3.676V50.545a3.668 3.668 0 00-3.69-3.676h-21.55a3.668 3.668 0 00-3.69 3.676V80.94a3.668 3.668 0 01-3.69 3.676h-16.72a3.66 3.66 0 00-3.68 3.677v20.426a3.66 3.66 0 003.68 3.677h16.72c2.05 0 3.69 1.634 3.69 3.677v80.765c0 43.713 27 67.979 66.5 64.833z"
            }))
        }
          , J = ["mediaItem"]
          , G = function(e) {
            var t = e.mediaItem
              , n = (0,
            v.Z)(e, J);
            return t ? r.createElement(S.Fe, Object.assign({
                mediaItem: t
            }, n)) : r.createElement(K, n)
        }
          , X = function(e) {
            return e.options.secondaryLogo || e.options.footerParagraph ? r.createElement(r.Fragment, null, e.options.secondaryLogo && r.createElement("div", {
                className: "main-footer__logo"
            }, r.createElement("a", {
                href: "/"
            }, r.createElement(G, {
                mediaItem: e.options.secondaryLogo
            }))), e.options.footerParagraph && r.createElement("div", {
                className: "main-footer__text"
            }, r.createElement("p", null, e.options.footerParagraph))) : null
        }
          , ee = function(e) {
            var t, n, a, o, i, c = Object.values(e.options.socialMedia).every((function(e) {
                return null === e || "" === e
            }
            ));
            return c ? null : r.createElement("div", {
                className: "main-footer__col-sub main-footer__col-sub--socials"
            }, !c && r.createElement(r.Fragment, null, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "Follow us on"), r.createElement("ul", {
                className: "main-footer__social-media-list"
            }, (null === (t = e.options.socialMedia) || void 0 === t ? void 0 : t.facebook) && r.createElement("li", null, r.createElement("a", {
                className: "icon-facebook",
                href: (0,
                l.safeAttrValue)("a", "href", e.options.socialMedia.facebook),
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": "Icon facebook"
            })), (null === (n = e.options.socialMedia) || void 0 === n ? void 0 : n.linkedin) && r.createElement("li", null, r.createElement("a", {
                className: "icon-linkedin",
                href: (0,
                l.safeAttrValue)("a", "href", e.options.socialMedia.linkedin),
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": "Icon linkedin"
            })), (null === (a = e.options.socialMedia) || void 0 === a ? void 0 : a.twitter) && r.createElement("li", null, r.createElement("a", {
                className: "icon-twitter",
                href: (0,
                l.safeAttrValue)("a", "href", e.options.socialMedia.twitter),
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": "Icon twitter"
            })), (null === (o = e.options.socialMedia) || void 0 === o ? void 0 : o.instagram) && r.createElement("li", null, r.createElement("a", {
                className: "icon-instagram",
                href: (0,
                l.safeAttrValue)("a", "href", e.options.socialMedia.instagram),
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": "Icon instagram"
            })), (null === (i = e.options.socialMedia) || void 0 === i ? void 0 : i.youtube) && r.createElement("li", null, r.createElement("a", {
                className: "icon-youtube",
                href: (0,
                l.safeAttrValue)("a", "href", e.options.socialMedia.youtube),
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": "Icon youtube"
            })))))
        }
          , te = function(e) {
            var t, n, o, i = 0 === (o = (0,
            a.useStaticQuery)("1686558105").allMenus).nodes.length ? null : {
                items: o.nodes[0].items.nodes
            }, c = Object.values(e.options.socialMedia).every((function(e) {
                return null === e || "" === e
            }
            ));
            return 0 === (null == i || null === (t = i.items) || void 0 === t ? void 0 : t.length) && c ? null : r.createElement("div", {
                className: "main-footer__col-sub main-footer__col-sub--get-the-app"
            }, i && 0 !== (null == i || null === (n = i.items) || void 0 === n ? void 0 : n.length) && r.createElement(r.Fragment, null, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "Get the Worker App:"), r.createElement(W, {
                id: "get-the-app-menu",
                items: null == i ? void 0 : i.items
            })))
        }
          , ne = function() {
            var e, t = 0 === (e = (0,
            a.useStaticQuery)("1181864708").allMenus).nodes.length ? null : {
                items: e.nodes[0].items.nodes
            };
            return t && 0 !== t.items.length ? r.createElement("div", {
                className: "main-footer__col-sub"
            }, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "Nowsta"), r.createElement(W, {
                id: "quick-links-menu",
                items: t.items
            })) : null
        }
          , re = function() {
            var e, t = 0 === (e = (0,
            a.useStaticQuery)("1620267420").allMenus).nodes.length ? null : {
                items: e.nodes[0].items.nodes
            };
            return t && 0 !== t.items.length ? r.createElement("div", {
                className: "main-footer__col-sub"
            }, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "About us"), r.createElement(W, {
                id: "quick-links-menu",
                items: t.items
            })) : null
        }
          , ae = function() {
            var e, t = 0 === (e = (0,
            a.useStaticQuery)("1447750382").allMenus).nodes.length ? null : {
                items: e.nodes[0].items.nodes
            };
            return t && 0 !== t.items.length ? r.createElement("div", {
                className: "main-footer__col-sub"
            }, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "Customers"), r.createElement(W, {
                id: "quick-links-menu",
                items: t.items
            })) : null
        }
          , oe = function() {
            var e, t = 0 === (e = (0,
            a.useStaticQuery)("2329967516").allMenus).nodes.length ? null : {
                items: e.nodes[0].items.nodes
            };
            return t && 0 !== t.items.length ? r.createElement("div", {
                className: "main-footer__col-sub"
            }, r.createElement("h2", {
                className: "is-font-variation-5 gg-mb-16"
            }, "Resources"), r.createElement(W, {
                id: "quick-links-menu-resources",
                items: t.items
            })) : null
        }
          , ie = function() {
            var e = (0,
            a.useStaticQuery)("3613404801").allStatikSettings;
            return Object.assign({}, e.footerSettings, e.globalSettings)
        }
          , ce = function() {
            var e = ie()
              , t = e.footerImprint && e.footerImprint.replace("{{currentYear}}", (new Date).getFullYear());
            return r.createElement("footer", {
                className: "main-footer gg-pt-56 gg-pb-32"
            }, r.createElement("div", {
                className: "main-footer__container gg-container-1110"
            }, r.createElement("div", {
                className: "main-footer__row--top wp-block-columns gg-lg-2-col gg-md-1-col"
            }, r.createElement("div", {
                className: "main-footer__col"
            }, r.createElement(X, {
                options: e
            }), r.createElement(te, {
                options: e
            })), r.createElement("div", {
                className: "main-footer__col main-footer__col-menus"
            }, r.createElement(ne, null), r.createElement(re, null), r.createElement(oe, null), r.createElement(ae, null), r.createElement(ee, {
                options: e
            }))), r.createElement("div", {
                className: "main-footer__row--bottom gg-mt-16"
            }, r.createElement("div", {
                className: "main-footer__copyright"
            }, t && r.createElement("p", null, t), r.createElement(Y, null)))))
        }
          , se = n(96885)
          , le = function() {
            var e = (0,
            a.useStaticQuery)("3692619147").allMenus;
            return (0,
            r.useMemo)((function() {
                if (0 === e.nodes.length)
                    return null;
                var t = e.nodes[0];
                return {
                    items: t.items.nodes,
                    hierarchical: t.isHierarchical
                }
            }
            ), [e])
        }
          , ue = function() {
            var e = le();
            return e ? r.createElement(W, {
                id: "header-menu",
                interaction: "hover",
                items: e.items
            }) : null
        }
          , me = (n(50824),
        n(74279),
        n(99729),
        n(83891),
        function() {
            var e, t = (e = (0,
            a.useStaticQuery)("498813510").allMenus,
            (0,
            r.useMemo)((function() {
                if (0 === e.nodes.length)
                    return null;
                var t = e.nodes[0];
                return {
                    items: t.items.nodes,
                    hierarchical: t.isHierarchical
                }
            }
            ), [e]));
            return t ? r.createElement(W, {
                id: "header-menu-buttons",
                interaction: "hover",
                items: t.items
            }) : null
        }
        )
          , fe = function() {
            return r.createElement(r.Fragment, null, r.createElement("div", {
                className: "main-header__side-buttons"
            }, r.createElement(me, null)))
        }
          , pe = function() {
            return r.createElement("div", {
                className: "main-header__desktop-nav",
                role: "navigation"
            }, r.createElement(ue, null))
        }
          , de = function() {
            var e = le()
              , t = (0,
            r.useMemo)((function() {
                return null == e ? void 0 : e.items.map((function(e) {
                    return Object.assign({}, e, {
                        render: e.childItems.nodes.length ? he : void 0
                    })
                }
                ))
            }
            ), [null == e ? void 0 : e.items]);
            return e ? r.createElement(W, {
                id: "header-mobile-menu",
                interaction: "click",
                items: t
            }) : null
        }
          , he = function() {
            var e = b()
              , t = e.item
              , n = e.hasOpenState
              , a = e.setOpenState;
            return r.createElement(r.Fragment, null, r.createElement("a", {
                className: "menu__link",
                href: t.url
            }, t.label), r.createElement("button", {
                className: "menu__indicator",
                onClick: function() {
                    return a(!n)
                }
            }, "Open Submenu"))
        }
          , ve = function() {
            var e = (0,
            r.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            r.useEffect)((function() {
                t ? document.body.classList.add("gg-mobile-menu--active") : document.body.classList.remove("gg-mobile-menu--active")
            }
            ), [t]),
            r.createElement("div", {
                className: (0,
                g.Z)({
                    "main-header__mobile-nav": !0
                })
            }, r.createElement("button", {
                "aria-label": "Open the menu",
                type: "button",
                className: "main-header__mobile-menu-toggle",
                onClick: function() {
                    return n(!t)
                }
            }, r.createElement("span", null)), r.createElement("div", {
                className: "main-header__mobile-menu"
            }, r.createElement("div", {
                className: "main-header__mobile-menu__container"
            }, r.createElement(de, null), r.createElement(fe, null))))
        }
          , ge = function() {
            var e = ie()
              , t = (0,
            se.Z)(40);
            return r.createElement(r.Fragment, null, r.createElement("header", {
                className: (0,
                g.Z)({
                    "main-header": !0,
                    "main-header--sticky": t > 0
                })
            }, r.createElement("div", {
                className: "bottom-header"
            }, r.createElement("div", {
                className: "main-header__container"
            }, r.createElement("div", {
                className: "main-header__branding"
            }, r.createElement(a.Link, {
                to: "/",
                rel: "home",
                "aria-label": "Logo Nowsta"
            }, r.createElement(G, {
                mediaItem: e.primaryLogo
            }))), r.createElement(ve, null), r.createElement(pe, null), r.createElement(fe, null)))))
        }
          , ye = n(59730)
          , be = function(e) {
            var t = e.id
              , n = e.className
              , a = e.children
              , o = (0,
            ye.$)()
              , i = o.containerRef
              , c = o.setContainerRef
              , s = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)((function() {
                i || c(s)
            }
            ), [i]),
            r.createElement("main", {
                ref: s,
                id: t,
                className: n
            }, a)
        }
          , Ee = function(e) {
            var t = e.id
              , n = e.className
              , a = e.children;
            return r.createElement(r.Fragment, null, r.createElement(ge, null), r.createElement(ye.g, null, r.createElement(be, {
                id: t,
                className: n
            }, a)), r.createElement(ce, null), r.createElement(h, null))
        }
    },
    30644: function(e) {
        e.exports = function(e) {
            return null == e
        }
    }
}]);
