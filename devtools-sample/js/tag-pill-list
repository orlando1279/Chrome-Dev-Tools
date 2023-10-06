import {s as e, u as t, c as n, g as r, a as i} from "./enhanced-select-68546119.js";
import {B as s, h as a, L as o} from "./base-element-e0a9d6c8.js";
import {u as c} from "./unsafe-html-5bd1ff43.js";
import {d as l} from "./tag-pill-list-495688d1.js";
var d, u, h, p, m, f = function() {
    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
}, g = function(e) {
    if ("loading" === document.readyState)
        return "loading";
    var t = f();
    if (t) {
        if (e < t.domInteractive)
            return "loading";
        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart)
            return "dom-interactive";
        if (0 === t.domComplete || e < t.domComplete)
            return "dom-content-loaded"
    }
    return "complete"
}, v = function(e) {
    var t = e.nodeName;
    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
}, b = function(e, t) {
    var n = "";
    try {
        for (; e && 9 !== e.nodeType; ) {
            var r = e
              , i = r.id ? "#" + r.id : v(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
            if (n.length + i.length > (t || 100) - 1)
                return n || i;
            if (n = n ? i + ">" + n : i,
            r.id)
                break;
            e = r.parentNode
        }
    } catch (e) {}
    return n
}, y = -1, w = function() {
    return y
}, S = function(e) {
    addEventListener("pageshow", (function(t) {
        t.persisted && (y = t.timeStamp,
        e(t))
    }
    ), !0)
}, T = function() {
    var e = f();
    return e && e.activationStart || 0
}, E = function(e, t) {
    var n = f()
      , r = "navigate";
    return w() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || T() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
    {
        name: e,
        value: void 0 === t ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: r
    }
}, A = function(e, t, n) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            var r = new PerformanceObserver((function(e) {
                Promise.resolve().then((function() {
                    t(e.getEntries())
                }
                ))
            }
            ));
            return r.observe(Object.assign({
                type: e,
                buffered: !0
            }, n || {})),
            r
        }
    } catch (e) {}
}, k = function(e, t, n, r) {
    var i, s;
    return function(a) {
        t.value >= 0 && (a || r) && ((s = t.value - (i || 0)) || void 0 === i) && (i = t.value,
        t.delta = s,
        t.rating = function(e, t) {
            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
        }(t.value, n),
        e(t))
    }
}, _ = function(e) {
    requestAnimationFrame((function() {
        return requestAnimationFrame((function() {
            return e()
        }
        ))
    }
    ))
}, C = function(e) {
    var t = function(t) {
        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
    };
    addEventListener("visibilitychange", t, !0),
    addEventListener("pagehide", t, !0)
}, L = function(e) {
    var t = !1;
    return function(n) {
        t || (e(n),
        t = !0)
    }
}, x = -1, P = function() {
    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
}, q = function(e) {
    "hidden" === document.visibilityState && x > -1 && (x = "visibilitychange" === e.type ? e.timeStamp : 0,
    $())
}, I = function() {
    addEventListener("visibilitychange", q, !0),
    addEventListener("prerenderingchange", q, !0)
}, $ = function() {
    removeEventListener("visibilitychange", q, !0),
    removeEventListener("prerenderingchange", q, !0)
}, R = function() {
    return x < 0 && (x = P(),
    I(),
    S((function() {
        setTimeout((function() {
            x = P(),
            I()
        }
        ), 0)
    }
    ))),
    {
        get firstHiddenTime() {
            return x
        }
    }
}, O = function(e) {
    document.prerendering ? addEventListener("prerenderingchange", (function() {
        return e()
    }
    ), !0) : e()
}, B = [1800, 3e3], M = function(e, t) {
    t = t || {},
    O((function() {
        var n, r = R(), i = E("FCP"), s = A("paint", (function(e) {
            e.forEach((function(e) {
                "first-contentful-paint" === e.name && (s.disconnect(),
                e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - T(), 0),
                i.entries.push(e),
                n(!0)))
            }
            ))
        }
        ));
        s && (n = k(e, i, B, t.reportAllChanges),
        S((function(r) {
            i = E("FCP"),
            n = k(e, i, B, t.reportAllChanges),
            _((function() {
                i.value = performance.now() - r.timeStamp,
                n(!0)
            }
            ))
        }
        )))
    }
    ))
}, j = [.1, .25], F = {
    passive: !0,
    capture: !0
}, D = new Date, H = function(e, t) {
    d || (d = t,
    u = e,
    h = new Date,
    U(removeEventListener),
    N())
}, N = function() {
    if (u >= 0 && u < h - D) {
        var e = {
            entryType: "first-input",
            name: d.type,
            target: d.target,
            cancelable: d.cancelable,
            startTime: d.timeStamp,
            processingStart: d.timeStamp + u
        };
        p.forEach((function(t) {
            t(e)
        }
        )),
        p = []
    }
}, V = function(e) {
    if (e.cancelable) {
        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
        "pointerdown" == e.type ? function(e, t) {
            var n = function() {
                H(e, t),
                i()
            }
              , r = function() {
                i()
            }
              , i = function() {
                removeEventListener("pointerup", n, F),
                removeEventListener("pointercancel", r, F)
            };
            addEventListener("pointerup", n, F),
            addEventListener("pointercancel", r, F)
        }(t, e) : H(t, e)
    }
}, U = function(e) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
        return e(t, V, F)
    }
    ))
}, J = [100, 300], W = function(e, t) {
    t = t || {},
    O((function() {
        var n, r = R(), i = E("FID"), s = function(e) {
            e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime,
            i.entries.push(e),
            n(!0))
        }, a = function(e) {
            e.forEach(s)
        }, o = A("first-input", a);
        n = k(e, i, J, t.reportAllChanges),
        o && C(L((function() {
            a(o.takeRecords()),
            o.disconnect()
        }
        ))),
        o && S((function() {
            var r;
            i = E("FID"),
            n = k(e, i, J, t.reportAllChanges),
            p = [],
            u = -1,
            d = null,
            U(addEventListener),
            r = s,
            p.push(r),
            N()
        }
        ))
    }
    ))
}, z = 0, Q = 1 / 0, G = 0, K = function(e) {
    e.forEach((function(e) {
        e.interactionId && (Q = Math.min(Q, e.interactionId),
        G = Math.max(G, e.interactionId),
        z = G ? (G - Q) / 7 + 1 : 0)
    }
    ))
}, Y = function() {
    return m ? z : performance.interactionCount || 0
}, Z = function() {
    "interactionCount"in performance || m || (m = A("event", K, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }))
}, X = [200, 500], ee = 0, te = function() {
    return Y() - ee
}, ne = [], re = {}, ie = function(e) {
    var t = ne[ne.length - 1]
      , n = re[e.interactionId];
    if (n || ne.length < 10 || e.duration > t.latency) {
        if (n)
            n.entries.push(e),
            n.latency = Math.max(n.latency, e.duration);
        else {
            var r = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            };
            re[r.id] = r,
            ne.push(r)
        }
        ne.sort((function(e, t) {
            return t.latency - e.latency
        }
        )),
        ne.splice(10).forEach((function(e) {
            delete re[e.id]
        }
        ))
    }
}, se = function(e, t) {
    !function(e, t) {
        t = t || {},
        O((function() {
            var n;
            Z();
            var r, i = E("INP"), s = function(e) {
                e.forEach((function(e) {
                    e.interactionId && ie(e),
                    "first-input" === e.entryType && !ne.some((function(t) {
                        return t.entries.some((function(t) {
                            return e.duration === t.duration && e.startTime === t.startTime
                        }
                        ))
                    }
                    )) && ie(e)
                }
                ));
                var t, n = (t = Math.min(ne.length - 1, Math.floor(te() / 50)),
                ne[t]);
                n && n.latency !== i.value && (i.value = n.latency,
                i.entries = n.entries,
                r())
            }, a = A("event", s, {
                durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
            });
            r = k(e, i, X, t.reportAllChanges),
            a && ("interactionId"in PerformanceEventTiming.prototype && a.observe({
                type: "first-input",
                buffered: !0
            }),
            C((function() {
                s(a.takeRecords()),
                i.value < 0 && te() > 0 && (i.value = 0,
                i.entries = []),
                r(!0)
            }
            )),
            S((function() {
                ne = [],
                ee = Y(),
                i = E("INP"),
                r = k(e, i, X, t.reportAllChanges)
            }
            )))
        }
        ))
    }((function(t) {
        !function(e) {
            if (e.entries.length) {
                var t = e.entries.sort((function(e, t) {
                    return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                }
                ))[0];
                e.attribution = {
                    eventTarget: b(t.target),
                    eventType: t.name,
                    eventTime: t.startTime,
                    eventEntry: t,
                    loadState: g(t.startTime)
                }
            } else
                e.attribution = {}
        }(t),
        e(t)
    }
    ), t)
}, ae = [2500, 4e3], oe = {}, ce = [800, 1800], le = function e(t) {
    document.prerendering ? O((function() {
        return e(t)
    }
    )) : "complete" !== document.readyState ? addEventListener("load", (function() {
        return e(t)
    }
    ), !0) : setTimeout(t, 0)
}, de = function(e, t) {
    t = t || {};
    var n = E("TTFB")
      , r = k(e, n, ce, t.reportAllChanges);
    le((function() {
        var i = f();
        if (i) {
            var s = i.responseStart;
            if (s <= 0 || s > performance.now())
                return;
            n.value = Math.max(s - T(), 0),
            n.entries = [i],
            r(!0),
            S((function() {
                n = E("TTFB", 0),
                (r = k(e, n, ce, t.reportAllChanges))(!0)
            }
            ))
        }
    }
    ))
}, ue = 5;
let he;
const pe = new Promise((e=>{
    he = e
}
));
async function me(e, t) {
    await pe,
    window.gtag("event", e, t)
}
function fe({name: e, value: t, delta: n, id: r, attribution: i, navigationType: s}) {
    const a = {
        event_category: "Web Vitals",
        event_label: r,
        value: Math.round("CLS" === e ? 1e3 * n : n),
        metric_value: t,
        navigation_type: "navigate" === s && performance.getEntriesByType && performance.getEntriesByType("navigation")[0] && "navigational-prefetch" === performance.getEntriesByType("navigation")[0].deliveryType ? "navigational-prefetch" : s,
        non_interaction: !0
    };
    let o, c, l, d;
    switch (e) {
    case "CLS":
        o = {
            debug_time: i.largestShiftTime,
            debug_load_state: i.loadState,
            debug_target: i.largestShiftTarget || "(not set)"
        };
        break;
    case "FCP":
        o = {
            debug_ttfb: i.timeToFirstByte,
            debug_fb2fcp: i.firstByteToFCP,
            debug_load_state: i.loadState,
            debug_target: i.loadState || "(not set)"
        };
        break;
    case "FID":
        o = {
            debug_event: i.eventType,
            debug_time: i.eventTime,
            debug_load_state: i.loadState,
            debug_target: i.eventTarget || "(not set)"
        };
        break;
    case "INP":
        i.eventEntry && (c = Math.round(i.eventEntry.processingStart - i.eventEntry.startTime),
        l = Math.round(i.eventEntry.processingEnd - i.eventEntry.processingStart),
        d = Math.round(Math.max(i.eventEntry.processingEnd + 4, i.eventEntry.startTime + i.eventEntry.duration) - i.eventEntry.processingEnd)),
        o = {
            debug_event: i.eventType,
            debug_time: i.eventTime,
            debug_load_state: i.loadState,
            debug_target: i.eventTarget || "(not set)",
            debug_input_delay: c,
            debug_processing_time: l,
            debug_presentation_delay: d
        };
        break;
    case "LCP":
        o = {
            debug_url: i.url,
            debug_ttfb: i.timeToFirstByte,
            debug_rld: i.resourceLoadDelay,
            debug_rlt: i.resourceLoadTime,
            debug_erd: i.elementRenderDelay,
            debug_target: i.element || "(not set)"
        };
        break;
    case "TTFB":
        o = {
            debug_waiting_time: i.waitingTime,
            debug_dns_time: i.dnsTime,
            debug_connection_time: i.connectionTime,
            debug_request_time: i.requestTime
        }
    }
    me(e, Object.assign(a, o))
}
const ge = new Promise((e=>{
    document.prerendering ? document.addEventListener("prerenderingchange", (()=>e())) : e()
}
));
function ve() {
    if (!HTMLScriptElement.supports || !HTMLScriptElement.supports("speculationrules") || navigator.connection?.saveData)
        return;
    const e = new Set([...document.querySelectorAll("script[type=speculationrules]")].map((e=>{
        try {
            return JSON.parse(e.textContent || "").prerender
        } catch {}
    }
    )).flat().filter((e=>e && "list" === e.source)).map((e=>e.urls)).flat());
    e.forEach((e=>{
        me("prerender_attempt", {
            value: 1,
            event_category: "Site-Wide Custom Events",
            event_label: e,
            non_interaction: !0
        })
    }
    ))
}
function be(e) {
    const t = document.querySelector(`meta[name="${e}"]`);
    if (t instanceof HTMLMetaElement)
        return t.content
}
function ye() {
    window.dataLayer = window.dataLayer || [],
    window.dataLayer.push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    }),
    window.dataLayer.push({
        user_agent: navigator.userAgent
    }),
    window.dataLayer.push({
        "gtm.blocklist": ["html", "d", "jsm", "j"]
    }),
    window.gtag = function() {
        window.dataLayer.push(arguments)
    }
    ,
    window.dataLayer.push({
        measurement_version: ue
    });
    const e = function() {
        if (document.wasDiscarded)
            return "restore";
        const e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        return e ? e.activationStart && e.activationStart > 0 ? "prerender" : "navigate" === e.type && "navigational-prefetch" === e.deliveryType ? "navigational-prefetch" : e.type.replace(/_/, "-") : "(not set)"
    }();
    if (window.dataLayer.push({
        navigation_type: e
    }),
    "back-forward" === e) {
        const e = function() {
            const e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            if (e && e.notRestoredReasons)
                return e.notRestoredReasons.reasons.toString()
        }();
        window.dataLayer.push({
            back_forward_not_restore_reasons: e
        })
    }
    window.dataLayer.push({
        page_path: location.pathname
    }),
    window.dataLayer.push({
        page_authors: be("authors")
    }),
    window.dataLayer.push({
        page_tags: be("tags")
    }),
    window.dataLayer.push({
        page_learn_paths: be("paths")
    }),
    window.dataLayer.push({
        color_scheme_preference: self.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }),
    navigator.deviceMemory && window.dataLayer.push({
        device_memory: navigator.deviceMemory
    }),
    navigator.connection && navigator.connection.effectiveType && window.dataLayer.push({
        effective_connection_type: navigator.connection.effectiveType
    }),
    "localhost" === location.hostname && window.dataLayer.push({
        debug_mode: !0
    });
    const t = localStorage.getItem("user-cookies");
    window.dataLayer.push({
        cookiePreference: t
    }),
    me("dcc_analytics_configed", {})
}
function we(e) {
    const t = `algoliasearch-client-js-${e.key}`;
    let n;
    const r = ()=>(void 0 === n && (n = e.localStorage || window.localStorage),
    n)
      , i = ()=>JSON.parse(r().getItem(t) || "{}");
    return {
        get: (e,t,n={
            miss: ()=>Promise.resolve()
        })=>Promise.resolve().then((()=>{
            const n = JSON.stringify(e)
              , r = i()[n];
            return Promise.all([r || t(), void 0 !== r])
        }
        )).then((([e,t])=>Promise.all([e, t || n.miss(e)]))).then((([e])=>e)),
        set: (e,n)=>Promise.resolve().then((()=>{
            const s = i();
            return s[JSON.stringify(e)] = n,
            r().setItem(t, JSON.stringify(s)),
            n
        }
        )),
        delete: e=>Promise.resolve().then((()=>{
            const n = i();
            delete n[JSON.stringify(e)],
            r().setItem(t, JSON.stringify(n))
        }
        )),
        clear: ()=>Promise.resolve().then((()=>{
            r().removeItem(t)
        }
        ))
    }
}
function Se(e) {
    const t = [...e.caches]
      , n = t.shift();
    return void 0 === n ? {
        get: (e,t,n={
            miss: ()=>Promise.resolve()
        })=>t().then((e=>Promise.all([e, n.miss(e)]))).then((([e])=>e)),
        set: (e,t)=>Promise.resolve(t),
        delete: e=>Promise.resolve(),
        clear: ()=>Promise.resolve()
    } : {
        get: (e,r,i={
            miss: ()=>Promise.resolve()
        })=>n.get(e, r, i).catch((()=>Se({
            caches: t
        }).get(e, r, i))),
        set: (e,r)=>n.set(e, r).catch((()=>Se({
            caches: t
        }).set(e, r))),
        delete: e=>n.delete(e).catch((()=>Se({
            caches: t
        }).delete(e))),
        clear: ()=>n.clear().catch((()=>Se({
            caches: t
        }).clear()))
    }
}
function Te(e={
    serializable: !0
}) {
    let t = {};
    return {
        get(n, r, i={
            miss: ()=>Promise.resolve()
        }) {
            const s = JSON.stringify(n);
            if (s in t)
                return Promise.resolve(e.serializable ? JSON.parse(t[s]) : t[s]);
            const a = r()
              , o = i && i.miss || (()=>Promise.resolve());
            return a.then((e=>o(e))).then((()=>a))
        },
        set: (n,r)=>(t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r,
        Promise.resolve(r)),
        delete: e=>(delete t[JSON.stringify(e)],
        Promise.resolve()),
        clear: ()=>(t = {},
        Promise.resolve())
    }
}
function Ee(e) {
    let t = e.length - 1;
    for (; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1))
          , r = e[t];
        e[t] = e[n],
        e[n] = r
    }
    return e
}
function Ae(e, t) {
    return t ? (Object.keys(t).forEach((n=>{
        e[n] = t[n](e)
    }
    )),
    e) : e
}
function ke(e, ...t) {
    let n = 0;
    return e.replace(/%s/g, (()=>encodeURIComponent(t[n++])))
}
!async function() {
    await ge,
    ye(),
    document.addEventListener("click", (e=>{
        const t = e?.target?.closest("a[href], .gc-analytics-event");
        if (!t)
            return;
        const n = t.dataset.action || "click"
          , r = t.dataset.category || void 0
          , i = t.dataset.label || void 0
          , s = Number(t.dataset.value) || void 0;
        n && r && me(n, {
            event_category: r,
            event_label: i,
            value: s
        })
    }
    )),
    window.addEventListener("pageshow", (e=>{
        e.persisted && (window.dataLayer.push({
            navigation_type: "back-forward-cache"
        }),
        me("page_view", {}))
    }
    )),
    function(e, t) {
        !function(e, t) {
            t = t || {},
            M(L((function() {
                var n, r = E("CLS", 0), i = 0, s = [], a = function(e) {
                    e.forEach((function(e) {
                        if (!e.hadRecentInput) {
                            var t = s[0]
                              , n = s[s.length - 1];
                            i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value,
                            s.push(e)) : (i = e.value,
                            s = [e])
                        }
                    }
                    )),
                    i > r.value && (r.value = i,
                    r.entries = s,
                    n())
                }, o = A("layout-shift", a);
                o && (n = k(e, r, j, t.reportAllChanges),
                C((function() {
                    a(o.takeRecords()),
                    n(!0)
                }
                )),
                S((function() {
                    i = 0,
                    r = E("CLS", 0),
                    n = k(e, r, j, t.reportAllChanges),
                    _((function() {
                        return n()
                    }
                    ))
                }
                )),
                setTimeout(n, 0))
            }
            )))
        }((function(t) {
            !function(e) {
                if (e.entries.length) {
                    var t = e.entries.reduce((function(e, t) {
                        return e && e.value > t.value ? e : t
                    }
                    ));
                    if (t && t.sources && t.sources.length) {
                        var n = (r = t.sources).find((function(e) {
                            return e.node && 1 === e.node.nodeType
                        }
                        )) || r[0];
                        if (n)
                            return void (e.attribution = {
                                largestShiftTarget: b(n.node),
                                largestShiftTime: t.startTime,
                                largestShiftValue: t.value,
                                largestShiftSource: n,
                                largestShiftEntry: t,
                                loadState: g(t.startTime)
                            })
                    }
                }
                var r;
                e.attribution = {}
            }(t),
            e(t)
        }
        ), t)
    }(fe),
    function(e, t) {
        M((function(t) {
            !function(e) {
                if (e.entries.length) {
                    var t = f()
                      , n = e.entries[e.entries.length - 1];
                    if (t) {
                        var r = t.activationStart || 0
                          , i = Math.max(0, t.responseStart - r);
                        return void (e.attribution = {
                            timeToFirstByte: i,
                            firstByteToFCP: e.value - i,
                            loadState: g(e.entries[0].startTime),
                            navigationEntry: t,
                            fcpEntry: n
                        })
                    }
                }
                e.attribution = {
                    timeToFirstByte: 0,
                    firstByteToFCP: e.value,
                    loadState: g(w())
                }
            }(t),
            e(t)
        }
        ), t)
    }(fe),
    function(e, t) {
        W((function(t) {
            !function(e) {
                var t = e.entries[0];
                e.attribution = {
                    eventTarget: b(t.target),
                    eventType: t.name,
                    eventTime: t.startTime,
                    eventEntry: t,
                    loadState: g(t.startTime)
                }
            }(t),
            e(t)
        }
        ), t)
    }(fe),
    se(fe),
    function(e, t) {
        !function(e, t) {
            t = t || {},
            O((function() {
                var n, r = R(), i = E("LCP"), s = function(e) {
                    var t = e[e.length - 1];
                    t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - T(), 0),
                    i.entries = [t],
                    n())
                }, a = A("largest-contentful-paint", s);
                if (a) {
                    n = k(e, i, ae, t.reportAllChanges);
                    var o = L((function() {
                        oe[i.id] || (s(a.takeRecords()),
                        a.disconnect(),
                        oe[i.id] = !0,
                        n(!0))
                    }
                    ));
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, (function() {
                            return setTimeout(o, 0)
                        }
                        ), !0)
                    }
                    )),
                    C(o),
                    S((function(r) {
                        i = E("LCP"),
                        n = k(e, i, ae, t.reportAllChanges),
                        _((function() {
                            i.value = performance.now() - r.timeStamp,
                            oe[i.id] = !0,
                            n(!0)
                        }
                        ))
                    }
                    ))
                }
            }
            ))
        }((function(t) {
            !function(e) {
                if (e.entries.length) {
                    var t = f();
                    if (t) {
                        var n = t.activationStart || 0
                          , r = e.entries[e.entries.length - 1]
                          , i = r.url && performance.getEntriesByType("resource").filter((function(e) {
                            return e.name === r.url
                        }
                        ))[0]
                          , s = Math.max(0, t.responseStart - n)
                          , a = Math.max(s, i ? (i.requestStart || i.startTime) - n : 0)
                          , o = Math.max(a, i ? i.responseEnd - n : 0)
                          , c = Math.max(o, r ? r.startTime - n : 0)
                          , l = {
                            element: b(r.element),
                            timeToFirstByte: s,
                            resourceLoadDelay: a - s,
                            resourceLoadTime: o - a,
                            elementRenderDelay: c - o,
                            navigationEntry: t,
                            lcpEntry: r
                        };
                        return r.url && (l.url = r.url),
                        i && (l.lcpResourceEntry = i),
                        void (e.attribution = l)
                    }
                }
                e.attribution = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadTime: 0,
                    elementRenderDelay: e.value
                }
            }(t),
            e(t)
        }
        ), t)
    }(fe),
    function(e, t) {
        de((function(t) {
            !function(e) {
                if (e.entries.length) {
                    var t = e.entries[0]
                      , n = t.activationStart || 0
                      , r = Math.max(t.domainLookupStart - n, 0)
                      , i = Math.max(t.connectStart - n, 0)
                      , s = Math.max(t.requestStart - n, 0);
                    e.attribution = {
                        waitingTime: r,
                        dnsTime: i - r,
                        connectionTime: s - i,
                        requestTime: e.value - s,
                        navigationEntry: t
                    }
                } else
                    e.attribution = {
                        waitingTime: 0,
                        dnsTime: 0,
                        connectionTime: 0,
                        requestTime: 0
                    }
            }(t),
            e(t)
        }
        ), t)
    }(fe),
    ve(),
    he()
}(),
matchMedia("(prefers-reduced-motion)").matches && document.querySelectorAll("video[autoplay]").forEach((e=>{
    e.removeAttribute("autoplay"),
    e.setAttribute("controls", "")
}
));
const _e = "4.17.1"
  , Ce = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
};
function Le(e, t) {
    const n = e || {}
      , r = n.data || {};
    return Object.keys(n).forEach((e=>{
        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
    }
    )),
    {
        data: Object.entries(r).length > 0 ? r : void 0,
        timeout: n.timeout || t,
        headers: n.headers || {},
        queryParameters: n.queryParameters || {},
        cacheable: n.cacheable
    }
}
const xe = {
    Read: 1,
    Write: 2,
    Any: 3
}
  , Pe = {
    Up: 1,
    Down: 2,
    Timeouted: 3
}
  , qe = 12e4;
function Ie(e, t=Pe.Up) {
    return {
        ...e,
        status: t,
        lastUpdate: Date.now()
    }
}
function $e(e) {
    return "string" == typeof e ? {
        protocol: "https",
        url: e,
        accept: xe.Any
    } : {
        protocol: e.protocol || "https",
        url: e.url,
        accept: e.accept || xe.Any
    }
}
const Re = {
    Delete: "DELETE",
    Get: "GET",
    Post: "POST",
    Put: "PUT"
};
function Oe(e, t) {
    return Promise.all(t.map((t=>e.get(t, (()=>Promise.resolve(Ie(t))))))).then((e=>{
        const n = e.filter((e=>function(e) {
            return e.status === Pe.Up || Date.now() - e.lastUpdate > qe
        }(e)))
          , r = e.filter((e=>function(e) {
            return e.status === Pe.Timeouted && Date.now() - e.lastUpdate <= qe
        }(e)))
          , i = [...n, ...r];
        return {
            getTimeout: (e,t)=>(0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t,
            statelessHosts: i.length > 0 ? i.map((e=>$e(e))) : t
        }
    }
    ))
}
const Be = (e,t)=>(e=>{
    const t = e.status;
    return e.isTimedOut || (({isTimedOut: e, status: t})=>!e && 0 == ~~t)(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
}
)(e) ? t.onRetry(e) : (({status: e})=>2 == ~~(e / 100))(e) ? t.onSuccess(e) : t.onFail(e);
function Me(e, t, n, r) {
    const i = []
      , s = function(e, t) {
        if (e.method === Re.Get || void 0 === e.data && void 0 === t.data)
            return;
        const n = Array.isArray(e.data) ? e.data : {
            ...e.data,
            ...t.data
        };
        return JSON.stringify(n)
    }(n, r)
      , a = function(e, t) {
        const n = {
            ...e.headers,
            ...t.headers
        }
          , r = {};
        return Object.keys(n).forEach((e=>{
            const t = n[e];
            r[e.toLowerCase()] = t
        }
        )),
        r
    }(e, r)
      , o = n.method
      , c = n.method !== Re.Get ? {} : {
        ...n.data,
        ...r.data
    }
      , l = {
        "x-algolia-agent": e.userAgent.value,
        ...e.queryParameters,
        ...c,
        ...r.queryParameters
    };
    let d = 0;
    const u = (t,c)=>{
        const h = t.pop();
        if (void 0 === h)
            throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: He(i)
            };
        const p = {
            data: s,
            headers: a,
            method: o,
            url: Fe(h, n.path, l),
            connectTimeout: c(d, e.timeouts.connect),
            responseTimeout: c(d, r.timeout)
        }
          , m = e=>{
            const n = {
                request: p,
                response: e,
                host: h,
                triesLeft: t.length
            };
            return i.push(n),
            n
        }
          , f = {
            onSuccess: e=>function(e) {
                try {
                    return JSON.parse(e.content)
                } catch (t) {
                    throw function(e, t) {
                        return {
                            name: "DeserializationError",
                            message: e,
                            response: t
                        }
                    }(t.message, e)
                }
            }(e),
            onRetry(n) {
                const r = m(n);
                return n.isTimedOut && d++,
                Promise.all([e.logger.info("Retryable failure", Ne(r)), e.hostsCache.set(h, Ie(h, n.isTimedOut ? Pe.Timeouted : Pe.Down))]).then((()=>u(t, c)))
            },
            onFail(e) {
                throw m(e),
                function({content: e, status: t}, n) {
                    let r = e;
                    try {
                        r = JSON.parse(e).message
                    } catch (e) {}
                    return function(e, t, n) {
                        return {
                            name: "ApiError",
                            message: e,
                            status: t,
                            transporterStackTrace: n
                        }
                    }(r, t, n)
                }(e, He(i))
            }
        };
        return e.requester.send(p).then((e=>Be(e, f)))
    }
    ;
    return Oe(e.hostsCache, t).then((e=>u([...e.statelessHosts].reverse(), e.getTimeout)))
}
function je(e) {
    const t = {
        value: `Algolia for JavaScript (${e})`,
        add(e) {
            const n = `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ""}`;
            return -1 === t.value.indexOf(n) && (t.value = `${t.value}${n}`),
            t
        }
    };
    return t
}
function Fe(e, t, n) {
    const r = De(n);
    let i = `${e.protocol}://${e.url}/${"/" === t.charAt(0) ? t.substr(1) : t}`;
    return r.length && (i += `?${r}`),
    i
}
function De(e) {
    return Object.keys(e).map((t=>{
        return ke("%s=%s", t, (n = e[t],
        "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
        var n
    }
    )).join("&")
}
function He(e) {
    return e.map((e=>Ne(e)))
}
function Ne(e) {
    const t = e.request.headers["x-algolia-api-key"] ? {
        "x-algolia-api-key": "*****"
    } : {};
    return {
        ...e,
        request: {
            ...e.request,
            headers: {
                ...e.request.headers,
                ...t
            }
        }
    }
}
const Ve = e=>{
    const t = e.appId
      , n = function(e, t, n) {
        const r = {
            "x-algolia-api-key": n,
            "x-algolia-application-id": t
        };
        return {
            headers: ()=>e === Ce.WithinHeaders ? r : {},
            queryParameters: ()=>e === Ce.WithinQueryParameters ? r : {}
        }
    }(void 0 !== e.authMode ? e.authMode : Ce.WithinHeaders, t, e.apiKey)
      , r = function(e) {
        const {hostsCache: t, logger: n, requester: r, requestsCache: i, responsesCache: s, timeouts: a, userAgent: o, hosts: c, queryParameters: l, headers: d} = e
          , u = {
            hostsCache: t,
            logger: n,
            requester: r,
            requestsCache: i,
            responsesCache: s,
            timeouts: a,
            userAgent: o,
            headers: d,
            queryParameters: l,
            hosts: c.map((e=>$e(e))),
            read(e, t) {
                const n = Le(t, u.timeouts.read)
                  , r = ()=>Me(u, u.hosts.filter((e=>0 != (e.accept & xe.Read))), e, n);
                if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable))
                    return r();
                const i = {
                    request: e,
                    mappedRequestOptions: n,
                    transporter: {
                        queryParameters: u.queryParameters,
                        headers: u.headers
                    }
                };
                return u.responsesCache.get(i, (()=>u.requestsCache.get(i, (()=>u.requestsCache.set(i, r()).then((e=>Promise.all([u.requestsCache.delete(i), e])), (e=>Promise.all([u.requestsCache.delete(i), Promise.reject(e)]))).then((([e,t])=>t))))), {
                    miss: e=>u.responsesCache.set(i, e)
                })
            },
            write: (e,t)=>Me(u, u.hosts.filter((e=>0 != (e.accept & xe.Write))), e, Le(t, u.timeouts.write))
        };
        return u
    }({
        hosts: [{
            url: `${t}-dsn.algolia.net`,
            accept: xe.Read
        }, {
            url: `${t}.algolia.net`,
            accept: xe.Write
        }].concat(Ee([{
            url: `${t}-1.algolianet.com`
        }, {
            url: `${t}-2.algolianet.com`
        }, {
            url: `${t}-3.algolianet.com`
        }])),
        ...e,
        headers: {
            ...n.headers(),
            "content-type": "application/x-www-form-urlencoded",
            ...e.headers
        },
        queryParameters: {
            ...n.queryParameters(),
            ...e.queryParameters
        }
    })
      , i = {
        transporter: r,
        appId: t,
        addAlgoliaAgent(e, t) {
            r.userAgent.add({
                segment: e,
                version: t
            })
        },
        clearCache: ()=>Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then((()=>{}
        ))
    };
    return Ae(i, e.methods)
}
  , Ue = e=>(t,n)=>t.method === Re.Get ? e.transporter.read(t, n) : e.transporter.write(t, n)
  , Je = e=>(t,n={})=>Ae({
    transporter: e.transporter,
    appId: e.appId,
    indexName: t
}, n.methods)
  , We = e=>(t,n)=>{
    const r = t.map((e=>({
        ...e,
        params: De(e.params || {})
    })));
    return e.transporter.read({
        method: Re.Post,
        path: "1/indexes/*/queries",
        data: {
            requests: r
        },
        cacheable: !0
    }, n)
}
  , ze = e=>(t,n)=>Promise.all(t.map((t=>{
    const {facetName: r, facetQuery: i, ...s} = t.params;
    return Je(e)(t.indexName, {
        methods: {
            searchForFacetValues: Ke
        }
    }).searchForFacetValues(r, i, {
        ...n,
        ...s
    })
}
)))
  , Qe = e=>(t,n,r)=>e.transporter.read({
    method: Re.Post,
    path: ke("1/answers/%s/prediction", e.indexName),
    data: {
        query: t,
        queryLanguages: n
    },
    cacheable: !0
}, r)
  , Ge = e=>(t,n)=>e.transporter.read({
    method: Re.Post,
    path: ke("1/indexes/%s/query", e.indexName),
    data: {
        query: t
    },
    cacheable: !0
}, n)
  , Ke = e=>(t,n,r)=>e.transporter.read({
    method: Re.Post,
    path: ke("1/indexes/%s/facets/%s/query", e.indexName, t),
    data: {
        facetQuery: n
    },
    cacheable: !0
}, r)
  , Ye = {
    Debug: 1,
    Info: 2,
    Error: 3
};
function Ze(e, t, n) {
    const r = {
        appId: e,
        apiKey: t,
        timeouts: {
            connect: 1,
            read: 2,
            write: 30
        },
        requester: {
            send: e=>new Promise((t=>{
                const n = new XMLHttpRequest;
                n.open(e.method, e.url, !0),
                Object.keys(e.headers).forEach((t=>n.setRequestHeader(t, e.headers[t])));
                const r = (e,r)=>setTimeout((()=>{
                    n.abort(),
                    t({
                        status: 0,
                        content: r,
                        isTimedOut: !0
                    })
                }
                ), 1e3 * e)
                  , i = r(e.connectTimeout, "Connection timeout");
                let s;
                n.onreadystatechange = ()=>{
                    n.readyState > n.OPENED && void 0 === s && (clearTimeout(i),
                    s = r(e.responseTimeout, "Socket timeout"))
                }
                ,
                n.onerror = ()=>{
                    0 === n.status && (clearTimeout(i),
                    clearTimeout(s),
                    t({
                        content: n.responseText || "Network request failed",
                        status: n.status,
                        isTimedOut: !1
                    }))
                }
                ,
                n.onload = ()=>{
                    clearTimeout(i),
                    clearTimeout(s),
                    t({
                        content: n.responseText,
                        status: n.status,
                        isTimedOut: !1
                    })
                }
                ,
                n.send(e.data)
            }
            ))
        },
        logger: (i = Ye.Error,
        {
            debug: (e,t)=>(Ye.Debug >= i && console.debug(e, t),
            Promise.resolve()),
            info: (e,t)=>(Ye.Info >= i && console.info(e, t),
            Promise.resolve()),
            error: (e,t)=>(console.error(e, t),
            Promise.resolve())
        }),
        responsesCache: Te(),
        requestsCache: Te({
            serializable: !1
        }),
        hostsCache: Se({
            caches: [we({
                key: `${_e}-${e}`
            }), Te()]
        }),
        userAgent: je(_e).add({
            segment: "Browser",
            version: "lite"
        }),
        authMode: Ce.WithinQueryParameters
    };
    var i;
    return Ve({
        ...r,
        ...n,
        methods: {
            search: We,
            searchForFacetValues: ze,
            multipleQueries: We,
            multipleSearchForFacetValues: ze,
            customRequest: Ue,
            initIndex: e=>t=>Je(e)(t, {
                methods: {
                    search: Ge,
                    searchForFacetValues: Ke,
                    findAnswers: Qe
                }
            })
        }
    })
}
Ze.version = _e;
const Xe = e.action((()=>(document.querySelector("html").scrollTop = 0,
document.querySelectorAll("[data-search-inert]").forEach((e=>{
    e.inert = !0
}
)),
document.body.classList.add("overflow-hidden"),
{
    isSearchActive: !0
})))
  , et = e.action((()=>(document.querySelectorAll("[data-search-inert]").forEach((e=>{
    e.inert = !1
}
)),
document.body.classList.remove("overflow-hidden"),
{
    isSearchActive: !1
})))
  , tt = Ze("0PPZV3EY55", "dc0d3a2d53885be29eacc351026dcdcf").initIndex("prod_developer_chrome")
  , nt = [/add? ?bloc?k?/, /d(a|o|u)w?nl?o?/, /^p(a|e)r+(l|al|el)/, /automate be/, /roblox/, /ublock/, /vpn/, /porn/, /xxx/];
customElements.define("search-box", class extends s {
    static get properties() {
        return {
            active: {
                type: Boolean,
                reflect: !0
            },
            buttonLabel: {
                type: String
            },
            docsLabel: {
                type: String
            },
            articlesLabel: {
                type: String
            },
            blogLabel: {
                type: String
            },
            locale: {
                type: String
            },
            placeholder: {
                type: String
            },
            results: {
                type: Array
            },
            cursor: {
                type: Number
            }
        }
    }
    set active(e) {
        if (this._active === e)
            return;
        const t = this._active;
        this._active = e,
        e ? Xe() : (this.cursor = -1,
        et()),
        this.setAttribute("aria-expanded", e.toString()),
        this.requestUpdate("active", t)
    }
    get active() {
        return this._active
    }
    constructor() {
        super(),
        this._active = !1,
        this.buttonLabel = "open search",
        this.docsLabel = "Documentation",
        this.overviewLabel = "Overview",
        this.articlesLabel = "Articles",
        this.blogLabel = "Blog",
        this.locale = "en",
        this.placeholder = "Search",
        this.query = "",
        this.results = [],
        this.categorisedResults = {},
        this.resultsCounter = -1,
        this.cursor = -1,
        this.input,
        this.closeIcon = t(n),
        this.searchIcon = t('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z"/></svg>'),
        this.renderResult = this.renderResult.bind(this),
        this.search = l(this.search.bind(this), 1e3)
    }
    clearSearch() {
        this.input.blur(),
        this.active = !1,
        this.input.value = "",
        this.search("")
    }
    connectedCallback() {
        super.connectedCallback(),
        this.setAttribute("role", "combobox"),
        this.setAttribute("aria-owns", "search-box__results"),
        this.setAttribute("aria-haspopup", "listbox"),
        this.setAttribute("aria-expanded", "false")
    }
    firstUpdated() {
        this.input = this.querySelector(".search-box__input"),
        window.addEventListener("keydown", (e=>{
            (e.ctrlKey || e.metaKey) && "k" === e.key && this.input.focus()
        }
        ))
    }
    updated(e) {
        e.has("cursor") && (-1 !== this.cursor ? this.input.setAttribute("aria-activedescendant", `search-box__link-${this.cursor}`) : this.input.removeAttribute("aria-activedescendant"))
    }
    onInput(e) {
        this.input.value ? (this.active = !0,
        this.search(e.target.value)) : this.clearSearch()
    }
    onKeyDown(e) {
        switch (e.key) {
        case "Home":
            return e.preventDefault(),
            void this.firstHit();
        case "End":
            return e.preventDefault(),
            void this.lastHit();
        case "ArrowUp":
            return e.preventDefault(),
            void this.prevHit();
        case "ArrowDown":
            return e.preventDefault(),
            void this.nextHit();
        case "Enter":
            return void this.navigateToResult();
        case "Escape":
            return void this.clearSearch()
        }
    }
    firstHit() {
        this.cursor = 0,
        this.scrollHitIntoView()
    }
    nextHit() {
        this.cursor < this.results.length - 1 ? this.cursor++ : this.cursor = 0,
        this.scrollHitIntoView()
    }
    lastHit() {
        this.cursor = this.results.length - 1,
        this.scrollHitIntoView()
    }
    prevHit() {
        this.cursor <= 0 ? this.cursor = this.results.length - 1 : --this.cursor,
        this.scrollHitIntoView()
    }
    navigateToResult() {
        const e = this.querySelector('.search-box__link[aria-selected="true"]');
        e && (window.location.href = e.href)
    }
    scrollHitIntoView() {
        this.requestUpdate().then((()=>{
            const e = this.querySelector('.search-box__link[aria-selected="true"]')
              , t = this.querySelector(".search-box__results");
            e && t && t.scrollTo({
                top: e.offsetTop,
                behavior: "smooth"
            })
        }
        ))
    }
    async toggleSearch() {
        this.active = !this.active,
        this.active ? (await this.updateComplete,
        this.input.focus()) : this.clearSearch()
    }
    async search(e) {
        this.query = e.trim();
        for (const e of nt)
            if (this.query.match(e))
                return;
        if ("" === this.query)
            return this.results = [],
            void (this.categorisedResults = {});
        if (this.query.length < 4)
            return this.results = [],
            void (this.categorisedResults = {});
        try {
            const {hits: t} = await tt.search(e, {
                hitsPerPage: 10,
                filters: `locale:"${this.locale}"`,
                highlightPreTag: "<strong>",
                highlightPostTag: "</strong>",
                attributesToSnippet: ["content:25"],
                snippetEllipsisText: "…"
            });
            this.results = t.map((e=>{
                const t = ["title"];
                for (const n of t) {
                    const t = e._highlightResult[n];
                    t && "full" === t.matchLevel && (e[n] = t.value)
                }
                return e.snippet = e._snippetResult.content?.value || e._snippetResult.description?.value || "",
                e
            }
            ));
            const n = [...this.results];
            n.filterMutate = e=>{
                const t = [];
                let r = 0;
                for (; r < n.length; )
                    e(n[r]) ? t.push(n.splice(r, 1)[0]) : r++;
                return t
            }
            ,
            this.categorisedResults = {
                [this.overviewLabel]: [],
                [this.docsLabel]: n.filterMutate((e=>"doc" === e.type)),
                [this.articlesLabel]: n.filterMutate((e=>"article" === e.type)),
                [this.blogLabel]: n.filterMutate((e=>"blogPost" === e.type))
            },
            this.categorisedResults[this.overviewLabel] = n
        } catch (e) {
            console.error(e),
            console.error(e.debugData)
        }
    }
    renderContent(e) {
        if (e && 0 !== e.length)
            return a`<p>${c(e)}</p>`
    }
    renderImage(e) {
        if (e && 0 !== e.length)
            return a`<img
      class="search-box__thumbnail"
      src="${e}"
      width="100"
      height="100"
      alt=""
    />`
    }
    renderResult(e) {
        return this.resultsCounter += 1,
        a`
      <div role="presentation">
        <a
          id="search-box__link-${this.resultsCounter}"
          class="search-box__link"
          href="${e.url}"
          aria-selected="${this.resultsCounter === this.cursor}"
          role="option"
        >
          <div>
            <h3 class="search-box__title type--h6">
              ${c(e.title)}
            </h3>
            <div class="search-box__snippet type--small">
              ${this.renderContent(e.snippet)}
            </div>
          </div>
          ${this.renderImage(e.image)}
        </a>
      </div>
    `
    }
    renderResults() {
        if (this.active)
            return this.query.length <= 2 ? a`
        <div
          id="search-box__results"
          class="search-box__results"
          role="listbox"
          aria-label="${this.placeholder}"
        >
          <div class="search-box__result-heading type--label">
            Please enter at least 3 characters for search suggestions.
          </div>
        </div>
      ` : (this.resultsCounter = -1,
            a`
      <div
        id="search-box__results"
        class="search-box__results"
        role="listbox"
        aria-label="${this.placeholder}"
      >
        ${Object.entries(this.categorisedResults).map((([e,t])=>t.length ? a`
                <div class="search-box__result-heading type--label">
                  ${e.toUpperCase()}
                </div>
                ${t.map(this.renderResult)}
              ` : ""))}
      </div>
    `)
    }
    render() {
        return a`
      <div class="search-box__inner" role="presentation">
        <button
          @click="${this.toggleSearch}"
          aria-label="${this.buttonLabel}"
          class="search-box__btn"
        >
          ${this.active ? this.closeIcon : this.searchIcon}
        </button>

        <input
          type="text"
          class="search-box__input"
          placeholder="${this.placeholder}"
          @input="${this.onInput}"
          @keydown="${this.onKeyDown}"
          aria-label="${this.placeholder}"
          aria-autocomplete="list"
        />
      </div>
      ${this.renderResults()}
    `
    }
}
);
const rt = new WeakSet
  , it = e=>{
    e && !rt.has(e) && (e.addEventListener("click", (function(e) {
        const t = e.currentTarget
          , n = !function(e) {
            return "true" === e.getAttribute("aria-expanded")
        }(t);
        t.setAttribute("aria-expanded", n ? "true" : "false")
    }
    )),
    rt.add(e))
}
;
customElements.define("navigation-tree", class extends s {
    constructor() {
        super(),
        this.onBack = this.onBack.bind(this)
    }
    connectedCallback() {
        this.querySelectorAll("[data-expandable]").forEach(it),
        this.backBtn = this.querySelector(".navigation-tree__back"),
        this.backBtn.addEventListener("click", this.onBack)
    }
    disconnectedCallback() {
        this.backBtn.removeEventListener("click", this.onBack)
    }
    onBack() {
        this.dispatchEvent(new Event("navigation-tree-back",{
            bubbles: !0
        }))
    }
}
);
customElements.define("navigation-rail", class extends s {
    constructor() {
        super(),
        this.onClose = this.onClose.bind(this)
    }
    connectedCallback() {
        this.closeBtn = this.querySelector(".navigation-rail__close"),
        this.closeBtn.addEventListener("click", this.onClose)
    }
    disconnectedCallback() {
        this.closeBtn.removeEventListener("click", this.onClose)
    }
    onClose() {
        this.dispatchEvent(new Event("navigation-rail-collapse",{
            bubbles: !0
        }))
    }
}
);
const st = e.action((()=>(document.querySelectorAll("[data-side-nav-inert").forEach((e=>{
    e.inert = !0
}
)),
document.querySelector("side-nav").expanded = !0,
document.body.classList.add("overflow-hidden"),
{
    isSideNavExpanded: !0
})))
  , at = e.action((()=>(document.querySelectorAll("[data-side-nav-inert").forEach((e=>{
    e.inert = !1
}
)),
document.querySelector("side-nav").expanded = !1,
document.body.classList.remove("overflow-hidden"),
{
    isSideNavExpanded: !1
})))
  , ot = e.action((()=>{
    document.querySelector(".top-nav__hamburger").focus()
}
));
customElements.define("side-nav", class extends s {
    static get properties() {
        return {
            type: {
                type: String,
                reflect: !0
            },
            view: {
                type: String,
                reflect: !0
            },
            animating: {
                type: Boolean,
                reflect: !0
            },
            expanding: {
                type: Boolean
            },
            collapsing: {
                type: Boolean
            },
            switchingViews: {
                type: Boolean
            },
            expanded: {
                type: Boolean,
                attribute: !1
            }
        }
    }
    set expanded(e) {
        this._expanded !== e && (e ? (this.setAttribute("expanded", ""),
        this.expanding = !0,
        this.intersectionObserver.observe(this)) : (this.removeAttribute("expanded"),
        this.collapsing = !0,
        this.intersectionObserver.disconnect()),
        this.animating = !0,
        this._expanded = e)
    }
    get expanded() {
        return this._expanded
    }
    constructor() {
        super(),
        this.type = "site",
        this.animating = !1,
        this.expanding = !1,
        this.collapsing = !1,
        this.switchingViews = !1,
        this._expanded = !1,
        this.onBack = this.onBack.bind(this),
        this.onTransitionEnd = this.onTransitionEnd.bind(this),
        this.intersectionObserver = new IntersectionObserver((e=>{
            let t = !1;
            for (const n of e)
                n.target === this && (t = n.intersectionRatio > 0);
            this.onVisibleChange(t)
        }
        ))
    }
    connectedCallback() {
        super.connectedCallback(),
        "project" === this.type ? this.view = "project" : this.view = "site",
        this.projectView = this.querySelector("navigation-tree"),
        this.siteView = this.querySelector("navigation-rail"),
        this.addEventListener("click", at),
        this.querySelectorAll("navigation-rail, navigation-tree").forEach((e=>e.addEventListener("click", this.onBlockClicks))),
        this.addEventListener("navigation-rail-collapse", at),
        this.addEventListener("navigation-tree-back", this.onBack),
        this.addEventListener("transitionend", this.onTransitionEnd)
    }
    disconnectedCallback() {
        this.removeEventListener("click", at),
        this.querySelectorAll("navigation-rail, navigation-tree").forEach((e=>e.removeEventListener("click", this.onBlockClicks))),
        this.removeEventListener("navigation-rail-collapse", at),
        this.removeEventListener("navigation-tree-back", this.onBack),
        this.removeEventListener("transitionend", this.onTransitionEnd)
    }
    onVisibleChange(e) {
        e || at()
    }
    onBlockClicks(e) {
        e.target.closest("a") || e.stopPropagation()
    }
    onBack() {
        this.animating = !0,
        this.switchingViews = !0,
        this.view = "site"
    }
    onTransitionEnd() {
        return this.animating = !1,
        this.collapsing ? (this.collapsing = !1,
        "project" === this.type && (this.view = "project"),
        void ot()) : this.expanding ? (this.expanding = !1,
        void ("project" === this.type ? this.projectView.focus() : this.siteView.focus())) : this.switchingViews ? (this.switchingViews = !1,
        void this.siteView.focus()) : void 0
    }
}
);
class ct extends s {
    constructor() {
        super(),
        this.onStateChanged = this.onStateChanged.bind(this)
    }
    connectedCallback() {
        super.connectedCallback(),
        e.subscribe(this.onStateChanged),
        this.onStateChanged(e.getState())
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        e.unsubscribe(this.onStateChanged)
    }
    onStateChanged(e) {}
}
customElements.define("top-nav", class extends ct {
    connectedCallback() {
        super.connectedCallback(),
        this.hamburgerBtn = this.querySelector(".top-nav__hamburger"),
        this.hamburgerBtn.addEventListener("click", st)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this.hamburgerBtn.removeEventListener("click", st)
    }
    onStateChanged({isSearchActive: e}) {
        e ? this.setAttribute("data-search-active", "") : this.removeAttribute("data-search-active")
    }
}
);
customElements.define("share-button", class extends s {
    constructor() {
        super(),
        this.onClick = this.onClick.bind(this)
    }
    connectedCallback() {
        this.addEventListener("click", this.onClick)
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.onClick)
    }
    onClick(e) {
        "share"in window.navigator && (e.preventDefault(),
        navigator.share({
            text: this.shareText,
            url: this.shareUrl
        }))
    }
    get shareUrl() {
        return window.location.href
    }
    get shareText() {
        const e = this.getAttribute("message");
        return e && e.length ? e : document.title
    }
}
);
customElements.define("web-tabs", class extends s {
    constructor() {
        super(),
        this._tabPanels = [],
        this.onSelect = this.onSelect.bind(this)
    }
    connectedCallback() {
        super.connectedCallback(),
        this._id = `tabs-${r("tabs-")}`,
        this._selected = this._getSelectedTabIndex()
    }
    onSelect(e) {
        const t = parseInt(e.target.id.split("-").pop(), 10);
        this._selected !== t && this._select(t)
    }
    _select(e) {
        this._selected = e,
        this._tabPanels.forEach((e=>{
            const t = parseInt(e.id.split("-").pop(), 10)
              , n = "#" + e.getAttribute("aria-labelledby")
              , r = this.querySelector(n);
            this._selected !== t ? (e.setAttribute("hidden", "hidden"),
            r?.setAttribute("tabindex", "-1"),
            r?.setAttribute("aria-selected", "false")) : (e.removeAttribute("hidden"),
            r?.setAttribute("tabindex", "0"),
            r?.setAttribute("aria-selected", "true"))
        }
        ))
    }
    _formatTabs() {
        return this._tabPanels.map(((e,t)=>{
            const n = e.getAttribute("title");
            e.removeAttribute("title");
            const r = `${this._id}__tab-${t}`
              , i = `${this._id}__tabpanel-${t}`;
            return e.setAttribute("id", i),
            e.setAttribute("role", "tabpanel"),
            e.setAttribute("aria-labelledby", r),
            e.setAttribute("tabindex", 0),
            t !== this._selected ? e.setAttribute("hidden", "hidden") : e.removeAttribute("hidden"),
            a`<button
        role="tab"
        id="${r}"
        aria-selected="${t === this._selected}"
        aria-controls="${i}"
        tabindex="${t === this._selected ? 0 : -1}"
        @click="${this.onSelect}"
      >
        ${n}
      </button>`
        }
        ))
    }
    _getSelectedTabIndex() {
        const e = window.location.hash;
        if (!e)
            return 0;
        const t = this.querySelector(e);
        if (!t)
            return 0;
        const n = t.closest("web-tab");
        return n ? Array.from(this.children).indexOf(n) : 0
    }
    render() {
        if ("resolved"in this.dataset)
            return Array.from(this.children);
        this._tabPanels = Array.from(this.children);
        const e = this._formatTabs();
        return a`
      <div role="tablist">${e}</div>
      ${this._tabPanels}
    `
    }
}
);
class lt extends o {
    createRenderRoot() {
        return this
    }
}
const dt = {
    en: "English",
    pl: "Polski",
    es: "Español",
    ko: "한국어",
    zh: "中文",
    ru: "Pусский",
    pt: "Português",
    ja: "日本語"
};
class ut extends lt {
    static get properties() {
        return {
            current: {
                type: String
            },
            supported: {
                type: String
            }
        }
    }
    constructor() {
        super(),
        this.supported = Object.keys(dt).join(",") || "",
        this.supportedLanguages = []
    }
    onChange() {}
    connectedCallback() {
        super.connectedCallback(),
        this.current = document.documentElement.lang,
        this.supportedLanguages = this.supported.split(",")
    }
    renderOption(e) {
        let t = dt[e];
        return t ? (t = t.toUpperCase(),
        this.current === e ? a`
          <option value="${e}" selected>
            ${t} (${e})
          </option>
        ` : a`
          <option value="${e}">${t} (${e})</option>
        `) : ""
    }
    render() {
        const e = Array.from(document.querySelectorAll('link[rel="alternate"]')).filter((e=>e.hreflang)).map((e=>e.hreflang))
          , t = document.documentElement.lang
          , n = this.supportedLanguages.filter((n=>e.includes(n) || n === t));
        return a`
      <div class="language-select">
        <label class="w-visually-hidden" for="preferred-language">
          Choose language
        </label>
        <select id="preferred-language" @change="${this.onChange}">
          ${n.map((e=>this.renderOption(e)))}
        </select>
      </div>
    `
    }
}
customElements.define("language-select", class extends ut {
    constructor() {
        super(),
        this.current = "en",
        this.supportedLanguages = []
    }
    onChange(e) {
        const t = e.target.value;
        if (this.supportedLanguages.includes(t) && t !== this.current) {
            const e = location.pathname.split("/")
              , n = this.supportedLanguages.includes(e[1]) ? 1 : 0;
            e.splice(1, n, t),
            location.href = e.join("/")
        }
    }
}
);
class ht extends HTMLElement {
    connectedCallback() {
        this.setAttribute("active", ""),
        this.addEventListener("click", (e=>{
            const t = e.target.closest("[data-banner-close-btn]");
            t && (this.savePreference(t),
            this.close())
        }
        ))
    }
    savePreference(e) {
        const t = this.getAttribute("storage-key") || ""
          , n = e.getAttribute("storage-value");
        if (n)
            localStorage.setItem(t, n);
        else {
            const e = this.querySelector("a[href]");
            if (e) {
                const n = e.getAttribute("href") || "";
                localStorage.setItem(t, n)
            }
        }
    }
    close() {
        this.setAttribute("hidden", "true")
    }
}
window.customElements.define("announcement-banner", ht);
customElements.define("toc-active", class extends s {
    constructor() {
        super(),
        this.updateHeading = ()=>{}
        ,
        this.previousActiveAnchor = null,
        this.visibleHeadings = new Set;
        let e = 0;
        this.observer = new IntersectionObserver((t=>{
            t.forEach((t=>{
                const n = t.target;
                t.isIntersecting ? this.visibleHeadings.add(n) : this.visibleHeadings.delete(n),
                e || (e = window.requestAnimationFrame((()=>{
                    e = 0,
                    this.updateHeading()
                }
                )))
            }
            ))
        }
        ),{
            threshold: .5
        })
    }
    connectedCallback() {
        super.connectedCallback();
        const e = document.scrollingElement
          , t = document.body.querySelector("article");
        if (!t || !e)
            return;
        const n = {}
          , r = this.querySelectorAll("a[href]");
        let i = null;
        for (const e of r) {
            const t = e.getAttribute("href") ?? "";
            t.startsWith("#") && (n[t.substr(1)] = e,
            null === i && (i = e))
        }
        const s = t.querySelectorAll("[id]");
        for (const e of s)
            this.observer.observe(e);
        this.updateHeading = ()=>{
            let e = null;
            for (const t of s)
                if (this.visibleHeadings.has(t) && t.id in n) {
                    e = n[t.id];
                    break
                }
            e !== this.previousActiveAnchor && e && (this.previousActiveAnchor && this.previousActiveAnchor.removeAttribute("toc--active"),
            e.setAttribute("toc--active", ""),
            this.previousActiveAnchor = e,
            e === i ? this.scrollTop = 0 : function(e, t) {
                const n = e.getBoundingClientRect()
                  , r = t.getBoundingClientRect()
                  , i = r.top - n.top;
                if (i > 0)
                    t.scrollTop -= i;
                else {
                    const e = n.bottom - r.bottom;
                    e > 0 && (t.scrollTop += e)
                }
            }(e, this))
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this.observer.disconnect(),
        this.previousActiveAnchor && (this.previousActiveAnchor.removeAttribute("toc--active"),
        this.previousActiveAnchor = null)
    }
}
);
customElements.define("select-loader", class extends s {
    constructor() {
        super(),
        this.addEventListener("change", (e=>{
            const t = e.target;
            if (!(t instanceof HTMLSelectElement))
                return;
            const n = t.selectedOptions[0];
            if (n) {
                const e = n.getAttribute("href");
                e && window.location.assign(e)
            }
            t.selectedIndex = 0
        }
        ))
    }
}
);
class pt extends HTMLElement {
    constructor() {
        super(),
        this.iframeLoaded = !1,
        this.setupDom()
    }
    static get observedAttributes() {
        return ["videoid"]
    }
    connectedCallback() {
        this.addEventListener("pointerover", pt.warmConnections, {
            once: !0
        }),
        this.addEventListener("click", (()=>this.addIframe()))
    }
    get videoId() {
        return encodeURIComponent(this.getAttribute("videoid") || "")
    }
    set videoId(e) {
        this.setAttribute("videoid", e)
    }
    get videoTitle() {
        return this.getAttribute("videotitle") || "Video"
    }
    set videoTitle(e) {
        this.setAttribute("videotitle", e)
    }
    get videoPlay() {
        return this.getAttribute("videoPlay") || "Play"
    }
    set videoPlay(e) {
        this.setAttribute("videoPlay", e)
    }
    get videoStartAt() {
        return Number(this.getAttribute("videoStartAt") || "0")
    }
    set videoStartAt(e) {
        this.setAttribute("videoStartAt", String(e))
    }
    get autoLoad() {
        return this.hasAttribute("autoload")
    }
    set autoLoad(e) {
        e ? this.setAttribute("autoload", "") : this.removeAttribute("autoload")
    }
    get params() {
        return `start=${this.videoStartAt}&${this.getAttribute("params")}`
    }
    setupDom() {
        this.attachShadow({
            mode: "open"
        }).innerHTML = '\n      <style>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: \'\';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n          background-position: top;\n          background-repeat: repeat-x;\n          height: 60px;\n          padding-bottom: 50px;\n          width: 100%;\n          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          z-index: 1;\n        }\n        /* play button */\n        .lty-playbtn {\n          width: 70px;\n          height: 46px;\n          background-color: #212121;\n          z-index: 1;\n          opacity: 0.8;\n          border-radius: 14%; /* TODO: Consider replacing this with YT\'s actual svg. Eh. */\n          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          border: 0;\n        }\n        #frame:hover .lty-playbtn {\n          background-color: #f00;\n          opacity: 1;\n        }\n        /* play button triangle */\n        .lty-playbtn:before {\n          content: \'\';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n        .lty-playbtn,\n        .lty-playbtn:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n        }\n\n        /* Post-click styles */\n        .lyt-activated {\n          cursor: unset;\n        }\n\n        #frame.lyt-activated::before,\n        .lyt-activated .lty-playbtn {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <source id="webpPlaceholder" type="image/webp">\n          <source id="jpegPlaceholder" type="image/jpeg">\n          <img id="fallbackPlaceholder" referrerpolicy="origin">\n        </picture>\n        <button class="lty-playbtn"></button>\n      </div>\n    ',
        this.domRefFrame = this.shadowRoot.querySelector("#frame"),
        this.domRefImg = {
            fallback: this.shadowRoot.querySelector("#fallbackPlaceholder"),
            webp: this.shadowRoot.querySelector("#webpPlaceholder"),
            jpeg: this.shadowRoot.querySelector("#jpegPlaceholder")
        },
        this.domRefPlayButton = this.shadowRoot.querySelector(".lty-playbtn")
    }
    setupComponent() {
        this.initImagePlaceholder(),
        this.domRefPlayButton.setAttribute("aria-label", `${this.videoPlay}: ${this.videoTitle}`),
        this.setAttribute("title", `${this.videoPlay}: ${this.videoTitle}`),
        this.autoLoad && this.initIntersectionObserver()
    }
    attributeChangedCallback(e, t, n) {
        if ("videoid" === e)
            t !== n && (this.setupComponent(),
            this.domRefFrame.classList.contains("lyt-activated") && (this.domRefFrame.classList.remove("lyt-activated"),
            this.shadowRoot.querySelector("iframe").remove(),
            this.iframeLoaded = !1))
    }
    addIframe() {
        if (!this.iframeLoaded) {
            const e = `\n<iframe frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube.com/embed/${this.videoId}?autoplay=1&${this.params}"\n></iframe>`;
            this.domRefFrame.insertAdjacentHTML("beforeend", e),
            this.domRefFrame.classList.add("lyt-activated"),
            this.iframeLoaded = !0
        }
    }
    initImagePlaceholder() {
        pt.addPrefetch("preconnect", "https://i.ytimg.com/");
        const e = `https://i.ytimg.com/vi_webp/${this.videoId}/hqdefault.webp`
          , t = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
        this.domRefImg.webp.srcset = e,
        this.domRefImg.jpeg.srcset = t,
        this.domRefImg.fallback.src = t,
        this.domRefImg.fallback.setAttribute("aria-label", `${this.videoPlay}: ${this.videoTitle}`),
        this.domRefImg.fallback.setAttribute("alt", `${this.videoPlay}: ${this.videoTitle}`)
    }
    initIntersectionObserver() {
        if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window) {
            new IntersectionObserver(((e,t)=>{
                e.forEach((e=>{
                    e.isIntersecting && !this.iframeLoaded && (pt.warmConnections(),
                    this.addIframe(),
                    t.unobserve(this))
                }
                ))
            }
            ),{
                root: null,
                rootMargin: "0px",
                threshold: 0
            }).observe(this)
        }
    }
    static addPrefetch(e, t, n) {
        const r = document.createElement("link");
        r.rel = e,
        r.href = t,
        n && (r.as = n),
        r.crossOrigin = "true",
        document.head.append(r)
    }
    static warmConnections() {
        pt.preconnected || (pt.addPrefetch("preconnect", "https://s.ytimg.com"),
        pt.addPrefetch("preconnect", "https://www.youtube.com"),
        pt.addPrefetch("preconnect", "https://www.google.com"),
        pt.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"),
        pt.addPrefetch("preconnect", "https://static.doubleclick.net"),
        pt.preconnected = !0)
    }
}
pt.preconnected = !1,
customElements.define("lite-youtube", pt);
customElements.define("filter-modal", class extends s {
    constructor() {
        super(),
        this.items = []
    }
    connectedCallback() {
        super.connectedCallback(),
        e.subscribe(this.onStoreUpdate.bind(this)),
        this.addEventListener("click", this.onClick)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this.removeEventListener("click", this.onClick)
    }
    onClick(e) {
        const t = e.target;
        if (t.classList.contains("filter-modal__opener")) {
            const e = document.querySelector("#filter-modal");
            e && e.showModal()
        }
        if ("filter-modal__reset" === t.id && this.resetFilters(),
        "filter-modal__done" === t.id || "DIALOG" === t.nodeName) {
            const e = document.querySelector("#filter-modal");
            e && e.close()
        }
    }
    resetFilters() {
        i()
    }
    onStoreUpdate(e) {
        const t = e.filters || {}
          , n = [];
        for (const [e,r] of Object.entries(t))
            for (const t of r)
                n.push({
                    name: e,
                    value: t.value,
                    label: t.label
                });
        this.items = n
    }
}
);
customElements.define("filtered-element", class extends ct {
    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: !0
            }
        }
    }
    constructor() {
        super(),
        this.hidden = !1
    }
    connectedCallback() {
        super.connectedCallback(),
        this.content = this.innerHTML,
        this.filters = {};
        const e = this.getAttributeNames();
        for (const t of e) {
            if (!t.startsWith("data-filter-"))
                continue;
            const e = t.replace("data-filter-", "");
            this.filters[e] = this.getAttribute(t)
        }
    }
    onStateChanged(e) {
        const t = e.filters || {};
        for (const e in t)
            t[e] && 0 === t[e].length && delete t[e];
        if (0 !== Object.keys(t).length) {
            this.hidden = !1;
            for (const [e,n] of Object.entries(t)) {
                const t = n.map((e=>e.value));
                this.filters && !t.includes(this.filters[e]) && (this.hidden = !0)
            }
        } else
            this.hidden = !1
    }
}
);
