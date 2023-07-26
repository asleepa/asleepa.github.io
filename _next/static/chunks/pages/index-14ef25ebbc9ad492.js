(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    8312: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(9897)
        }
        ])
    },
    1150: function(e, t, r) {
        "use strict";
        r.d(t, {
            Qr: function() {
                return w
            },
            ed: function() {
                return g
            },
            h0: function() {
                return b
            }
        });
        var n = r(4051)
          , a = r.n(n)
          , s = r(9669)
          , o = r.n(s);
        function c(e, t, r, n, a, s, o) {
            try {
                var c = e[s](o)
                  , i = c.value
            } catch (l) {
                return void r(l)
            }
            c.done ? t(i) : Promise.resolve(i).then(n, a)
        }
        function i(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, a) {
                    var s = e.apply(t, r);
                    function o(e) {
                        c(s, n, a, o, i, "next", e)
                    }
                    function i(e) {
                        c(s, n, a, o, i, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function l() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function u(e, t, r) {
            return (u = l() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var a = new (Function.bind.apply(e, n));
                return r && p(a, r.prototype),
                a
            }
            ).apply(null, arguments)
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return !t || "object" !== h(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var h = function(e) {
            return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        };
        function x(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return x = function(e) {
                if (null === e || (r = e,
                -1 === Function.toString.call(r).indexOf("[native code]")))
                    return e;
                var r;
                if ("function" !== typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                function n() {
                    return u(e, arguments, f(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                p(n, e)
            }
            ,
            x(e)
        }
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = f(e);
                if (t) {
                    var a = f(this).constructor;
                    r = Reflect.construct(n, arguments, a)
                } else
                    r = n.apply(this, arguments);
                return d(this, r)
            }
        }
        function b() {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = i(a().mark((function e() {
                var t, r;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            o().get("".concat("https://api.e-z.bio", "/bio"));
                        case 3:
                            return t = e.sent.data,
                            e.abrupt("return", t);
                        case 7:
                            throw e.prev = 7,
                            e.t0 = e.catch(0),
                            r = e.t0.response.data.error,
                            new N("".concat(r.charAt(0).toUpperCase() + r.slice(1), "."));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )))).apply(this, arguments)
        }
        function w() {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = i(a().mark((function e() {
                var t, r;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            o().get("".concat("https://api.e-z.bio", "/bio/stats"));
                        case 3:
                            return t = e.sent.data,
                            e.abrupt("return", t);
                        case 7:
                            throw e.prev = 7,
                            e.t0 = e.catch(0),
                            r = e.t0.response.data.error,
                            new N("".concat(r.charAt(0).toUpperCase() + r.slice(1), "."));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )))).apply(this, arguments)
        }
        function g(e) {
            return j.apply(this, arguments)
        }
        function j() {
            return (j = i(a().mark((function e(t) {
                var r, n;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            o()({
                                url: "".concat("https://api.e-z.bio", "/bio/view/").concat(t),
                                method: "PUT",
                                withCredentials: !0
                            });
                        case 3:
                            return r = e.sent.data,
                            e.abrupt("return", r);
                        case 7:
                            throw e.prev = 7,
                            e.t0 = e.catch(0),
                            n = e.t0.response.data.error,
                            new N("".concat(n.charAt(0).toUpperCase() + n.slice(1), "."));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )))).apply(this, arguments)
        }
        var N = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(r, e);
            var t = m(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).name = "APIError",
                n
            }
            return r
        }(x(Error))
    },
    9897: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return y
            }
        });
        var n = r(4051)
          , a = r.n(n)
          , s = r(5893)
          , o = r(7294)
          , c = r(1150)
          , i = r(1664)
          , l = r.n(i)
          , u = r(1358)
          , f = r.n(u)
          , d = function(e) {
            var t = e.bio;
            return (0,
            s.jsxs)("tr", {
                className: "border-b border-zinc-700 bg-neutral-800 shadow-xl",
                children: [(0,
                s.jsx)("th", {
                    headers: "name",
                    className: "p-4 px-4 font-medium text-gray-900 dark:text-white",
                    children: (0,
                    s.jsx)("p", {
                        className: "w-full truncate ",
                        children: (0,
                        s.jsx)(l(), {
                            href: "/".concat(t.url),
                            children: (0,
                            s.jsx)("a", {
                                className: "text-cyan-500",
                                children: t.name
                            })
                        })
                    })
                }), (0,
                s.jsx)("td", {
                    className: "px-6 text-gray-300 md:w-60 w-12 max-w-xs md:max-w-xl md:min-w-[38rem]",
                    headers: "users",
                    children: (0,
                    s.jsx)("p", {
                        className: "w-full truncate",
                        children: t.description
                    })
                }), (0,
                s.jsx)("td", {
                    className: "pl-6 md:pt-4 flex flex-col md:flex-row h-12 md:h-full",
                    headers: "tags",
                    children: (0,
                    s.jsx)("p", {
                        className: "h-full flex items-center",
                        children: t.views
                    })
                })]
            })
        };
        function p(e) {
            var t = e.currentBios;
            return (0,
            s.jsx)("div", {
                className: "overflow-y-scroll",
                children: (0,
                s.jsxs)("table", {
                    className: "w-full rounded bg-neutral-800 text-left text-sm",
                    children: [(0,
                    s.jsx)("thead", {
                        className: "border-b border-zinc-700 bg-neutral-800 text-gray-400",
                        children: (0,
                        s.jsxs)("tr", {
                            children: [(0,
                            s.jsx)("th", {
                                scope: "col",
                                className: "px-6 py-3 w-32",
                                headers: "name",
                                children: "Username"
                            }), (0,
                            s.jsx)("th", {
                                scope: "col",
                                className: "px-6 py-3 md:w-fit w-12",
                                headers: "users",
                                children: "Description"
                            }), (0,
                            s.jsx)("th", {
                                scope: "col",
                                className: "px-6 py-3",
                                headers: "tags",
                                children: "Views"
                            })]
                        })
                    }), (0,
                    s.jsx)("tbody", {
                        children: t && t.map((function(e) {
                            return (0,
                            s.jsx)(d, {
                                bio: e
                            })
                        }
                        ))
                    })]
                })
            })
        }
        function h(e) {
            var t = e.biosPerPage
              , r = e.bios
              , n = (0,
            o.useState)([{
                _id: "",
                name: "",
                url: "",
                description: "",
                uid: 0,
                views: 0
            }])
              , a = n[0]
              , c = n[1]
              , i = (0,
            o.useState)(0)
              , l = i[0]
              , u = i[1]
              , d = (0,
            o.useState)(0)
              , h = d[0]
              , x = d[1];
            (0,
            o.useEffect)((function() {
                var e = h + t;
                c(r.slice(h, e)),
                u(Math.ceil(r.length / t))
            }
            ), [h, t, r]);
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    className: "flex w-full flex-col",
                    children: [(0,
                    s.jsx)(p, {
                        currentBios: a
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-6 flex justify-center",
                        children: (0,
                        s.jsx)(f(), {
                            nextLabel: ">",
                            onPageChange: function(e) {
                                var n = e.selected * t % r.length;
                                x(n)
                            },
                            pageRangeDisplayed: 5,
                            pageCount: l,
                            previousLabel: "<",
                            breakLabel: "...",
                            previousLinkClassName: "bg-darkM-800 p-2 rounded hover:bg-darkM-700 w-8 flex justify-center transition-all",
                            nextLinkClassName: "bg-darkM-800 p-2 rounded hover:bg-darkM-700 w-8 flex justify-center transition-all",
                            breakLinkClassName: "bg-darkM-800 p-2 rounded hover:bg-darkM-700 w-8 flex justify-center transition-all",
                            activeLinkClassName: "bg-darkM-600 p-2 h-10 rounded hover:bg-zinc-700 transition-all w-8 flex justify-center transition-all",
                            className: "mt-2 flex select-none gap-1 p-2",
                            pageLinkClassName: "bg-darkM-800 p-2 h-10 rounded hover:bg-darkM-700 w-8 flex justify-center transition-all"
                        })
                    })]
                })
            })
        }
        var x = r(507);
        function m(e, t, r, n, a, s, o) {
            try {
                var c = e[s](o)
                  , i = c.value
            } catch (l) {
                return void r(l)
            }
            c.done ? t(i) : Promise.resolve(i).then(n, a)
        }
        function b(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, a) {
                    var s = e.apply(t, r);
                    function o(e) {
                        m(s, n, a, o, c, "next", e)
                    }
                    function c(e) {
                        m(s, n, a, o, c, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function v(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    v(e, t, r[t])
                }
                ))
            }
            return e
        }
        function y() {
            var e = (0,
            o.useState)({
                loading: !0,
                bios: null,
                stats: null
            })
              , t = e[0]
              , r = t.loading
              , n = t.bios
              , i = t.stats
              , l = e[1];
            return (0,
            o.useEffect)((function() {
                function e() {
                    return (e = b(a().mark((function e() {
                        var t, r;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    c.Qr)();
                                case 2:
                                    return t = e.sent,
                                    e.next = 5,
                                    (0,
                                    c.h0)();
                                case 5:
                                    r = e.sent.bios,
                                    l((function(e) {
                                        return w({}, e, {
                                            loading: !1,
                                            bios: r,
                                            stats: t
                                        })
                                    }
                                    ));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), []),
            (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    className: "flex h-[90vh] flex-col justify-center",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "container mx-auto flex max-w-4xl justify-between px-4",
                        children: [(0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsxs)("h1", {
                                className: "mt-3 text-4xl text-gray-300",
                                children: [(0,
                                s.jsx)("span", {
                                    className: "text-blue-400",
                                    children: "E-Z.Bio"
                                }), " "]
                            }), (0,
                            s.jsxs)("p", {
                                className: "mt-3 max-w-sm text-lg text-gray-300",
                                children: [" ", "Private bio pages for e-z users."]
                            }), (0,
                            s.jsxs)("div", {
                                className: "mt-4 flex items-center gap-2",
                                children: [(0,
                                s.jsx)("button", {
                                    onClick: function() {
                                        open("https://e-z.host/")
                                    },
                                    className: "w-fit items-center rounded-lg border border-blue-500 p-1 px-3 text-sm text-gray-200 transition-all hover:border-[#404EED] hover:bg-[#404EED]",
                                    children: "Get Started"
                                }), (0,
                                s.jsx)("button", {
                                    className: "flex items-center rounded-lg border border-[#5865F2] p-1 px-3 text-sm text-gray-200 transition-all hover:border-[#404EED] hover:bg-[#404EED]",
                                    onClick: function() {
                                        open("https://discord.gg/ez", "_blank")
                                    },
                                    children: (0,
                                    s.jsxs)("div", {
                                        className: "m-auto flex items-center",
                                        children: [(0,
                                        s.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "mr-1",
                                            viewBox: "0 0 16 16",
                                            children: (0,
                                            s.jsx)("path", {
                                                d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                                            })
                                        }), "Discord"]
                                    })
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "grid gap-4",
                            children: [r && (0,
                            s.jsx)(x.Spinner, {}), !r && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        className: "flex w-full cursor-pointer flex-col rounded-lg bg-darkM-900 p-5 shadow-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ",
                                        children: [(0,
                                        s.jsx)("h1", {
                                            className: "mb-2 flex font-bold text-gray-400",
                                            children: "Bios"
                                        }), (0,
                                        s.jsxs)("p", {
                                            className: "text-sm",
                                            children: [i.count, " bios created"]
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex w-full cursor-pointer flex-col rounded-lg bg-darkM-900 p-5 shadow-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ",
                                        children: [(0,
                                        s.jsx)("h1", {
                                            className: "mb-2 flex font-bold text-gray-400",
                                            children: "Total Views"
                                        }), (0,
                                        s.jsxs)("p", {
                                            className: "text-sm",
                                            children: [i.views, " total views"]
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex w-full cursor-pointer flex-col rounded-lg bg-darkM-900 p-5 shadow-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ",
                                    children: [(0,
                                    s.jsx)("h1", {
                                        className: "mb-2 flex font-bold text-gray-400",
                                        children: "Storage Used"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-sm",
                                        children: i.storageUsed
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "container mx-auto mt-8 w-full max-w-4xl border-t border-t-neutral-500"
                    }), (0,
                    s.jsxs)("div", {
                        className: "container px-4 mx-auto mt-4 w-full max-w-md md:max-w-4xl h-[30vh]",
                        children: [r && (0,
                        s.jsx)(x.Spinner, {}), !r && (0,
                        s.jsx)(h, {
                            bios: n,
                            biosPerPage: 5
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [669, 621, 774, 888, 179], (function() {
        return t = 8312,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
