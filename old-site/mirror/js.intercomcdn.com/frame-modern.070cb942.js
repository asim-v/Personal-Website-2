! function(e) {
    function t(t) {
        for (var r, s, a = t[0], c = t[1], u = t[2], l = 0, p = []; l < a.length; l++) s = a[l], Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]), i[s] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (d && d(t); p.length;) p.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== i[c] && (r = !1)
            }
            r && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            4: 0
        },
        o = [];

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = i[e] = [t, r]
                }));
                t.push(n[2] = r);
                var o, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.src = function(e) {
                    return s.p + "" + ({
                        0: "app",
                        1: "banner",
                        2: "bound-events",
                        3: "confetti",
                        5: "install",
                        6: "launcher-discovery",
                        7: "locale-ar-json",
                        8: "locale-bg-json",
                        9: "locale-bs-json",
                        10: "locale-ca-json",
                        11: "locale-cs-json",
                        12: "locale-da-json",
                        13: "locale-de-form-json",
                        14: "locale-de-json",
                        15: "locale-el-json",
                        16: "locale-es-json",
                        17: "locale-et-json",
                        18: "locale-fi-json",
                        19: "locale-fr-json",
                        20: "locale-he-json",
                        21: "locale-hr-json",
                        22: "locale-hu-json",
                        23: "locale-id-json",
                        24: "locale-it-json",
                        25: "locale-ja-json",
                        26: "locale-ko-json",
                        27: "locale-lt-json",
                        28: "locale-lv-json",
                        29: "locale-mn-json",
                        30: "locale-nb-json",
                        31: "locale-nl-json",
                        32: "locale-package-json",
                        33: "locale-pl-json",
                        34: "locale-pt-BR-json",
                        35: "locale-pt-json",
                        36: "locale-ro-json",
                        37: "locale-ru-json",
                        38: "locale-sl-json",
                        39: "locale-sr-json",
                        40: "locale-sv-json",
                        41: "locale-tr-json",
                        42: "locale-vi-json",
                        43: "locale-zh-CN-json",
                        44: "locale-zh-TW-json",
                        45: "message",
                        46: "sentry",
                        48: "vendors~app",
                        49: "vendors~bound-events",
                        50: "vendors~message",
                        51: "vendors~sentry"
                    }[e] || e) + "-modern." + {
                        0: "4d083935",
                        1: "eb92d249",
                        2: "87e331a3",
                        3: "c17dad87",
                        5: "a79c2765",
                        6: "b0bd30a1",
                        7: "6bd41b89",
                        8: "db395e4e",
                        9: "b1567475",
                        10: "aea0fb92",
                        11: "a225726c",
                        12: "150a861d",
                        13: "400911de",
                        14: "a6695f8f",
                        15: "19965fe0",
                        16: "027f789e",
                        17: "239eb026",
                        18: "f7936dfc",
                        19: "b45e8aac",
                        20: "9a51513e",
                        21: "884b5e3e",
                        22: "3dbe3573",
                        23: "3041a57f",
                        24: "6202d77e",
                        25: "981c8832",
                        26: "1e768c51",
                        27: "07d822a8",
                        28: "254e2679",
                        29: "f5efe43b",
                        30: "7aa2210e",
                        31: "0827426f",
                        32: "f9ffbed7",
                        33: "6148d752",
                        34: "c22b5190",
                        35: "8a7988f5",
                        36: "e6ccd167",
                        37: "8510cd6b",
                        38: "c37cc10e",
                        39: "f62a93e9",
                        40: "8ce84d5a",
                        41: "5f52901a",
                        42: "da2c22b9",
                        43: "c6c1df96",
                        44: "195338fd",
                        45: "657ccec1",
                        46: "f757a64e",
                        48: "257e5d56",
                        49: "aff2d38a",
                        50: "5e817ef2",
                        51: "28691106"
                    }[e] + ".js"
                }(e);
                var c = new Error;
                o = function(t) {
                    a.onerror = a.onload = null, clearTimeout(u);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", c.name = "ChunkLoadError", c.type = r, c.request = o, n[1](c)
                        }
                        i[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = o, document.head.appendChild(a)
            }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "https://js.intercomcdn.com/", s.oe = function(e) {
        throw console.error(e), e
    };
    var a = window.webpackJsonp = window.webpackJsonp || [],
        c = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var u = 0; u < a.length; u++) t(a[u]);
    var d = c;
    o.push([240, 47]), n()
}([function(e, t, n) {
    "use strict";
    var r = n(18);
    var i = n(53),
        o = n(2),
        s = n(96);

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(n, !0).forEach((function(t) {
                u(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "n", (function() {
        return E
    })), n.d(t, "h", (function() {
        return C
    })), n.d(t, "l", (function() {
        return I
    })), n.d(t, "i", (function() {
        return T
    })), n.d(t, "m", (function() {
        return w
    })), n.d(t, "d", (function() {
        return A
    })), n.d(t, "b", (function() {
        return R
    })), n.d(t, "c", (function() {
        return j
    })), n.d(t, "a", (function() {
        return N
    })), n.d(t, "f", (function() {
        return M
    })), n.d(t, "o", (function() {
        return D
    })), n.d(t, "k", (function() {
        return U
    })), n.d(t, "g", (function() {
        return k
    })), n.d(t, "e", (function() {
        return G
    }));
    let d, l, p = 0,
        f = null,
        h = null;
    const b = [],
        _ = {},
        g = [],
        m = [],
        O = [],
        E = e => h = e;

    function S(e, t) {
        return e.splice(0, Math.min(e.length, t))
    }

    function v(e = !1) {
        if (p >= 5) return;
        const t = S(b, 100);
        if (g.length > 0 || t.length > 0) {
            const n = S(m, 100),
                r = S(O, 100),
                i = S(g, 100);
            e ? o.b.createMetricsWithBeacon(d, t, n, r, i) : o.b.createMetrics(d, t, n, r, i).catch(() => {
                var e, o, s, a;
                p++, e = t, o = n, s = r, a = i, Array.prototype.unshift.apply(b, e), Array.prototype.unshift.apply(m, o), Array.prototype.unshift.apply(O, s), Array.prototype.unshift.apply(g, a)
            })
        }
    }

    function y() {
        clearInterval(f), f = null, v()
    }

    function C(e, t, n, r, i, o = {}, s = "m4_metric") {
        w(T(e, t, n, r, i, o, s))
    }

    function I() {
        return l
    }

    function T(e, t, n, i, o, s = {}, a = "m4_metric") {
        const u = e && e.id ? e.id : null,
            d = c({}, s, {
                version: "a3c7e8e04c74317727238573e37965398673631f"
            });
        return {
            id: r.a.generateUUID(),
            name: a,
            created_at: Math.round(Date.now() / 1e3),
            metadata: Object.assign({
                user_id: u,
                action: t,
                object: n,
                place: i,
                context: o
            }, d)
        }
    }

    function w(e) {
        b.push(e)
    }

    function A(e) {
        Object(s.c)() && m.push({
            level: "info",
            text: e
        })
    }

    function R(e) {
        Object(s.c)() && m.length < 30 && m.push({
            level: "error",
            text: e
        })
    }

    function j(e, t) {
        P({
            name: e,
            type: "inc"
        }, t)
    }

    function N(e, t, n) {
        P({
            name: e,
            type: "count",
            value: t
        }, n)
    }

    function M(e, t, n) {
        P({
            name: e,
            type: "timing",
            value: t
        }, n)
    }

    function P(e, t) {
        O.length > 50 || (t && (e.tags = t), O.push(e))
    }

    function D(e, t) {
        _[e] = {
            start: t
        }
    }

    function U(e) {
        _.hasOwnProperty(e) && _[e].hasOwnProperty("start") && (k(e, {
            duration: Date.now() - _[e].start
        }), delete _[e])
    }

    function L(e, t = {}) {
        return {
            id: r.a.generateUUID(),
            name: e,
            createdAt: Date.now(),
            screenWidth: screen.width,
            screenHeight: screen.height,
            additionalMetaData: t,
            sessionId: d && d.sessionId
        }
    }

    function k(e, t, n = !1) {
        const r = ((e = !1) => e ? 1 : 20)(Object(i.a)() || Object(s.c)());
        if (void 0 === l && (l = ((e = 20) => 1 === e || Math.random() < 1 / e)(r)), l || n) {
            x(L(e, c({
                sample_rate: n ? 1 : r
            }, t)))
        }
    }

    function x(e) {
        g.length < 30 && g.push(e)
    }

    function G(e, t, n, r, i, o) {
        C(h, e, t, n, r, i, o)
    }
    t.j = {
        metrics: b,
        hcMetrics: g,
        logs: m,
        opMetrics: O,
        pushMetric: w,
        startMetricsPolling: function(e, t) {
            return d = e, null === f && (f = setInterval(() => v(), 3e4)), t.addEventListener("beforeunload", () => v(!0)), y
        },
        buildAndAddMetric: C,
        buildAndAddHcMetric: k,
        buildMetric: T,
        buildHcMetric: L,
        addHcMetric: x,
        addInfoLog: A,
        addErrorLog: R,
        addIncrementOpMetric: j,
        addCountOpMetric: N,
        addTimingOpMetric: M,
        clearMetricsState: function() {
            b.splice(0), m.splice(0), O.splice(0), g.splice(0), g.splice(0);
            for (const e in _) delete _[e];
            p = 0
        },
        getShouldSample: I,
        startTimingMetric: D,
        endTimingMetric: U
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return C
    })), n.d(t, "a", (function() {
        return j
    })), n.d(t, "d", (function() {
        return ge
    }));
    var r = n(65),
        i = n.n(r),
        o = n(14),
        s = n.n(o),
        a = n(159),
        c = n(4),
        u = n(163),
        d = n(27),
        l = n(118),
        p = n(7),
        f = n(154);

    function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? h(n, !0).forEach((function(t) {
                _(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    const {
        assign: m
    } = Object, O = Object(a.b)();

    function E(e, t, n, r, i, o = null, s = !1, a = null, c = null) {
        const u = {
            created_at: t,
            self_serve_suggestions_match: s
        };
        r && (u.client_assigned_uuid = r), i && (u.email = i), o && (u.composer_suggestions = JSON.stringify(o.suggestions)), a && (u.bot_intro = a), c && (u.resolution_bot_behavior_version_id = c);
        const d = e[0];
        if ("paragraph" === d.type) e = e.map(e => ({
            type: e.type,
            text: Object(l.b)(e.text)
        })), u.blocks = JSON.stringify(e);
        else if ("image" === d.type) n && (d.url = n.publicUrl), u.blocks = JSON.stringify(e);
        else if ("attachmentList" === d.type && n) {
            const t = d.attachments[0];
            t.id = n.id, t.url = n.publicUrl, t.contentType = n.contentType, u.blocks = JSON.stringify(e)
        }
        return u
    }

    function S(e, t, n, r) {
        return {
            metrics: JSON.stringify(e),
            logs: JSON.stringify(t),
            op_metrics: JSON.stringify(n),
            hc_metrics: JSON.stringify(r)
        }
    }

    function v(e) {
        return e ? {
            banner_view_id: e
        } : {}
    }

    function y(e) {
        return e ? {
            progress_id: e
        } : {}
    }

    function C(e, t, n) {
        const r = `${O.api_base}/messenger/web/self_serve_suggestions`,
            i = {
                query: t,
                answers_limit: n
            };
        return c.b.post({
            url: r,
            session: e,
            params: i
        })
    }

    function I(e) {
        return {
            conversations: e.conversations.map(j),
            pages: w(e.pages)
        }
    }

    function T(e) {
        return {
            unreadConversationIds: (e.unread_conversation_ids || []).map(e => e.toString()),
            unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map(e => e.toString())
        }
    }

    function w(e) {
        return {
            page: e.page,
            perPage: e.per_page,
            totalPages: e.total_pages
        }
    }

    function A(e) {
        if (e.conversation_message.team_author) {
            return 0 === (e.conversation_parts ? e.conversation_parts.conversation_parts || e.conversation_parts : []).filter(e => e.author.is_admin && !e.author.is_bot).length
        }
        return !1
    }

    function R(e) {
        return A(e) || !e.last_participating_admin ? void 0 : J(e.last_participating_admin)
    }

    function j(e) {
        return {
            composerState: N(e.composer_state),
            dismissed: e.dismissed,
            id: e.id,
            intercomLinkSolution: e.intercom_link_solution,
            lastPartCreatedAt: Object(d.c)(e.updated_at),
            lastParticipatingAdmin: R(e),
            participants: e.participants || [],
            parts: [x(e), ...$(e)],
            preventEndUserReplies: e.prevent_end_user_replies,
            inboundConversationsDisabled: e.inbound_conversations_disabled,
            read: e.read,
            readAt: e.read_at ? Object(d.c)(e.read_at) : void 0,
            replyPlaceholder: e.reply_area_placeholder,
            userParticipated: e.user_participated,
            notificationStatus: e.notification_status,
            analyticsMetadata: {
                customBotId: e.analytics_metadata ? e.analytics_metadata.custom_bot_id : void 0
            }
        }
    }

    function N(e) {
        if (e) return {
            visible: e.visible,
            selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled
        }
    }

    function M(e) {
        return {
            id: e.id,
            icon: e.icon,
            name: e.name
        }
    }

    function P(e) {
        return {
            articles: e.articles.map(e => {
                var t, n;
                const r = {
                    id: e.id,
                    url: e.url
                };
                var i, o;
                if (null === (t = e.highlight) || void 0 === t ? void 0 : t.title) r.title = null === (i = e.highlight) || void 0 === i ? void 0 : null === (o = i.title) || void 0 === o ? void 0 : o[0];
                else if (null === (n = e.highlight) || void 0 === n ? void 0 : n.body) {
                    var s, a;
                    r.title = e.title, r.summary = (null === (s = e.highlight) || void 0 === s ? void 0 : null === (a = s.body) || void 0 === a ? void 0 : a.join("...")) || e.summary
                } else r.title = e.title;
                return r
            }),
            totalCount: e.total_count
        }
    }

    function D(e = []) {
        return e.map(U)
    }

    function U({
        id: e,
        title: t
    }) {
        return {
            id: e,
            title: t
        }
    }

    function L(e) {
        return {
            author: (t = e.author, {
                avatar: {
                    square128: t.avatar
                },
                firstName: t.first_name || t.name,
                name: t.name
            }),
            blocks: e.blocks,
            contentId: e.content_id,
            description: e.description,
            id: e.id,
            reactionsReply: ae(e.reactions_reply),
            title: e.title,
            updatedAt: e.updated_at,
            url: e.url,
            alexandriaData: e.alexandria_data
        };
        var t
    }

    function k(e) {
        return A(e) ? {
            admins: (e.conversation_message.team_author.last_active_admins || []).map(J),
            name: e.conversation_message.team_author.name
        } : void 0
    }

    function x(e) {
        const t = e.conversation_message;
        return {
            author: G(t.author),
            body: se(t.blocks || [], t.attachments || []),
            clientId: t.client_assigned_uuid,
            createdAt: Object(d.c)(t.created_at),
            eventData: {},
            form: t.form,
            id: `message-${t.id}`,
            isMessage: !0,
            messageType: re(t),
            notificationType: (n = t.delivery_option, {
                badge: "badge",
                full: "full",
                summary: "snippet"
            }[n]),
            partType: "message",
            pointerSelector: t.pointer_selector,
            reactionsReply: t.reactions_reply ? ae(t.reactions_reply) : void 0,
            replyOptions: t.reply_options || [],
            replyType: t.reply_type,
            seenState: oe(t.seen_by_admin),
            sentAt: Object(d.c)(t.sent_at),
            showCreatedAt: t.show_created_at,
            teamAuthor: k(e)
        };
        var n
    }

    function G(e) {
        return {
            admins: e.authors ? e.authors.map(V) : [],
            avatar: ee(e.avatar),
            firstName: F(e.first_name),
            id: e.id,
            initial: e.initial,
            isAdmin: e.is_admin,
            isBot: e.is_bot,
            isSelf: e.is_self,
            type: e.type.toLowerCase()
        }
    }

    function V(e) {
        return {
            avatar: ee(e.avatar),
            firstName: F(e.first_name)
        }
    }

    function F(e) {
        return e || ""
    }

    function B(e = []) {
        return e.map(H)
    }

    function H(e) {
        return b({}, e, {
            from: e.from ? J(e.from) : null,
            reaction_set: (e.reaction_set || []).map(ce)
        })
    }

    function $(e) {
        let t = [];
        return e.conversation_parts && (t = e.conversation_parts.conversation_parts || e.conversation_parts), t.filter(e => "lightweight_reply_user_response" !== e.part_type).map(W)
    }

    function W(e) {
        return {
            author: {
                avatar: ee(e.author.avatar),
                firstName: F(e.author.first_name),
                id: e.author.id,
                initial: e.author.initial,
                isAdmin: e.author.is_admin,
                isBot: e.author.is_bot,
                isSelf: e.author.is_self,
                type: e.author.is_admin ? "admin" : "user"
            },
            body: se(e.blocks || [], e.attachments || []),
            clientId: e.client_assigned_uuid,
            conversationRating: ue(e),
            createdAt: Object(d.c)(e.created_at),
            eventData: ne(e.event_data, e.part_type),
            form: e.form,
            id: e.id,
            isMessage: !1,
            messageType: re(e),
            partType: e.part_type,
            replyOptions: e.reply_options || [],
            seenState: oe(e.seen_by_admin),
            showCreatedAt: !0
        }
    }

    function z(e) {
        return e ? (Object(p.d)("Tour received", e), {
            id: e.id.toString(),
            activeStepId: e.active_step_id.toString(),
            author: G(e.author),
            steps: (t = e.steps, i()(t, ["order"], ["asc"])).map(e => {
                return {
                    id: (t = e).id.toString(),
                    blocks: t.blocks,
                    order: t.order,
                    progressionBehavior: (n = t.progression_behavior, Q[n]),
                    selector: t.selector,
                    selectors: t.selectors,
                    url: t.url
                };
                var t, n
            }),
            title: e.title,
            url: e.url,
            endTourAnimation: e.end_tour_animation,
            progressId: e.progress_id
        }) : {};
        var t
    }
    const Q = ["manual", "click", "type"];

    function q(e) {
        const t = e.install_mode;
        if (t) {
            const e = t.active_subscription,
                n = t.user_hash_verified,
                r = t.secure_install_v2,
                i = t.messenger_enabled_for_visitors;
            return {
                activeSubscription: e,
                messengerEnabledForUsers: t.messenger_enabled_for_users,
                messengerEnabledForVisitors: i,
                secureInstallV2: r,
                userHashVerified: n
            }
        }
    }

    function Y(e) {
        const {
            app: t
        } = e, n = function(e) {
            return {
                anonymousInboundMessages: e.inbound_lead_messaging || e.inbound_lead_messaging_docs_site,
                composerSuggestionsAsQuickReplies: e.composer_suggestions_as_quick_replies,
                googleAnalytics: e.google_analytics,
                hubspotInstalled: e.hubspot_installed,
                inboundMessages: e.inbound_messages,
                launcherDiscoveryMode: e.launcher_discovery_mode,
                marketoEnrichmentInstalled: e.marketo_enrichment_installed,
                outboundMessages: e.outbound_messages,
                persistAcrossPages: e.persist_across_pages,
                singlePageAppRateLimiting: e.single_page_app_rate_limiting,
                crossSiteCookies: e.cross_site_cookies,
                renderNativePickerInMobile: e.render_native_picker_in_mobile,
                searchBrowse: e.search_browse,
                searchBrowseEnforced: e.search_browse_enforced,
                clientMatchingRefreshActiveMatch: e.client_matching_refresh_active_match
            }
        }(e.modules.messages.features);
        return {
            activeAdmins: (t.active_admins || []).map(J),
            alignment: e.modules.customization.alignment,
            backgroundImage: t.messenger_background,
            boundWebEvents: (r = e.bound_web_events, r ? r.map(de) : []),
            color: e.modules.messages.colors.base,
            customGoogleAnalyticsTrackerId: e.modules.messages.google_analytics_tracking_id,
            expectedResponseDelayTranslationKey: t.expected_response_delay_translation_key,
            launcherExpectedResponseDelayTranslationKey: t.launcher_expected_response_delay_translation_key,
            features: n,
            helpCenterSiteUrl: t.help_center_site_url || void 0,
            horizontalPadding: e.modules.customization.horizontal_padding,
            inboundConversationsDisabled: t.inbound_conversations_disabled || !1,
            accessToTeammateEnabled: t.access_to_teammate_enabled,
            isAudioEnabled: t.audio_enabled || !1,
            isDeveloperWorkspace: t.developer_workspace || !1,
            isErrorReportingDisabled: e.modules.error_reporting && e.modules.error_reporting.disabled,
            isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
            isIntercomLinkEnabled: t.show_powered_by,
            temporaryExpectationsMessage: t.temporary_expectations_message,
            isLauncherEnabled: !0 === e.modules.messages.use_activator,
            isOverrideSamplingEnabled: e.modules.metrics && e.modules.metrics.enabled,
            logoUrl: t.messenger_logo_url,
            launcherLogoUrl: t.launcher_logo_url,
            name: t.name,
            officeHoursResponse: t.office_hours_response || void 0,
            originCookieDomain: e.origin_cookie_domain,
            realtimeConfig: {
                endpoints: e.modules.rtm.endpoints
            },
            secondaryColor: e.modules.messages.colors.secondary,
            selfServeSuggestionsMatch: t.self_serve_suggestions_match || !1,
            smsEnabled: t.sms_notifications_enabled || !1,
            teamGreeting: t.team_greeting,
            teamIntro: t.team_intro,
            upfrontEmailCollectionSetting: t.upfront_email_collection_setting,
            useCacheFor: t.use_cache_for,
            userConversationAttachmentsEnabled: t.user_conversation_attachments_enabled,
            userConversationGifsEnabled: t.user_conversation_gifs_enabled,
            verticalPadding: e.modules.customization.vertical_padding
        };
        var r
    }

    function J(e) {
        return {
            avatar: ee(e.avatar),
            calendarUrl: K(e.calendar_url),
            firstName: F(e.first_name),
            initial: e.initial || e.avatar.initials,
            intro: K(e.intro),
            isActive: e.is_active,
            isAdmin: !0,
            isBot: e.is_bot,
            isSelf: !1,
            jobTitle: K(e.job_title),
            lastActiveAt: Object(d.c)(e.last_active_at),
            location: e.location ? X(e.location) : void 0,
            socialAccounts: (e.social_accounts || []).map(Z)
        }
    }

    function K(e) {
        if (e && 0 !== e.trim().length) return e
    }

    function X(e) {
        return {
            cityName: e.city_name,
            countryCode: e.country_code,
            countryName: e.country_name,
            timezoneOffset: e.timezone_offset
        }
    }

    function Z(e) {
        return {
            imageUrl: e.image_url,
            profileUrl: e.profile_url,
            provider: e.provider,
            username: e.username
        }
    }

    function ee(e) {
        let t;
        return e.square_128 ? t = e.square_128 : e.image_urls && e.image_urls.square_128 && (t = e.image_urls.square_128), t ? {
            square128: t
        } : {}
    }

    function te(e) {
        return e
    }

    function ne(e, t) {
        return "participant_added" !== t && "participant_removed" !== t || (e.participant.avatar = ee(e.participant.avatar)), e || {}
    }

    function re(e) {
        const t = ["chat", "post", "note", "video", "pointer"][e.message_style];
        return t || ("attribute_collector" === e.part_type ? "attributeCollector" : ie(e, "link") || function(e, t) {
            let n = !0;
            return e.blocks.forEach(e => {
                e.type !== t && (n = !1)
            }), n && e.blocks.length > 1
        }(e, "link") ? "link" : ie(e, "notificationChannelsCard") ? "notificationChannels" : ie(e, "conversationRating") ? "conversationRating" : void 0)
    }

    function ie(e, t) {
        const n = e.blocks && 1 === e.blocks.length && e.blocks[0];
        return n && n.type === t
    }

    function oe(e) {
        return {
            unseen: "not-seen-yet",
            seen: "seen"
        }[e] || "not-seen-yet"
    }

    function se(e, t) {
        if (function(e) {
                return 1 === e.length && "videoReply" === e[0].type
            }(e)) return e;
        if (function(e) {
                return 1 === e.length && "videoFile" === e[0].type
            }(e)) return function(e) {
            return [Object.assign({}, e[0])]
        }(e);
        const n = [];
        return function(e, t) {
            if (0 === e.length) return t;
            const n = [];
            return e.map(e => {
                e.attachments.map(e => n.push(e.url))
            }), t.filter(e => n.indexOf(e.url) < 0)
        }(e.filter(e => "attachmentList" === e.type), t).forEach(e => {
            ! function(e) {
                return e.content_type.indexOf("image") >= 0
            }(e) ? n.push(function(e) {
                return {
                    type: "attachmentList",
                    attachments: [{
                        contentType: e.content_type,
                        name: e.name,
                        size: e.size,
                        url: e.url
                    }]
                }
            }(e)): n.push(function(e) {
                return {
                    height: parseInt(e.height, 10),
                    type: "image",
                    url: e.url,
                    width: parseInt(e.width, 10)
                }
            }(e))
        }), e.concat(n)
    }

    function ae(e) {
        return {
            reactionIndex: e.reaction_index,
            reactionSet: (e.reaction_set || []).map(ce)
        }
    }

    function ce(e) {
        return {
            emoji: e.unicode_emoticon,
            index: e.index
        }
    }

    function ue(e) {
        if ("conversationRating" !== re(e)) return {};
        const {
            remark: t
        } = e.blocks[0];
        return {
            chosenRating: e.blocks[0].rating_index,
            remark: t
        }
    }

    function de(e) {
        return {
            id: e.id,
            description: e.description,
            name: e.name,
            selector: e.selector,
            sourceUrl: e.source_url,
            trigger: e.trigger,
            urlRegex: e.url_regex
        }
    }

    function le(e) {
        return {
            cards: e.cards,
            cardsSuccess: e.cards_success,
            conversations: e.conversations.map(j),
            hasMoreConversations: e.has_more_conversations,
            articleCollections: e.article_collections.map(M)
        }
    }

    function pe(e) {
        return e ? e.map(e => b({}, e, {
            serialized_object: fe(e.ruleset_link_object_type, e.serialized_object)
        })) : []
    }

    function fe(e, t) {
        switch (e) {
            case "inbound_trigger":
            case "inbound_custom_bot":
                return he(t);
            case "messenger_trigger":
            case "button_custom_bot":
                return {
                    id: (n = t).id,
                    event: n.event,
                    preAction: n.messenger_pre_action,
                    selector: n.selector
                };
            default:
                return t
        }
        var n
    }

    function he(e) {
        return e ? {
            composerDisabled: e.composer_disabled,
            prompt: e.prompt,
            rulesetId: e.ruleset_id,
            suggestions: e.suggestions.map(e => function(e) {
                return {
                    preAction: e.pre_action,
                    text: e.text,
                    uuid: e.uuid
                }
            }(e)),
            updatedAt: e.updated_at
        } : null
    }

    function be(e) {
        return e ? {
            id: e.id,
            parts: e.parts,
            operator: G(e.operator)
        } : null
    }

    function _e(e) {
        const t = Object(f.b)(window);
        t && (e.sdk_webview_platform = t)
    }

    function ge() {
        return `${O.api_base}/messenger/web/conversations/transcript`
    }
    t.b = {
        addConversationRatingRemark: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/conversations/${t}/remark`,
                i = {
                    remark: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(() => {})
        },
        buildBanner: H,
        buildComment: W,
        buildComposerSuggestions: he,
        buildBotIntro: be,
        buildTour: z,
        changeConversationRatingIndex: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/conversations/${t}/rate`,
                i = {
                    rating_index: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(() => {})
        },
        collectEmailFromBanner: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/banners/${t}/collect_email`,
                o = Object.assign({
                    email: r
                }, v(n));
            return c.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        completeTour: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/tours/${t}/complete`,
                i = y(n);
            return c.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        createArticleReaction: function(e, t, n, r = !1, i = null) {
            const o = `${O.api_base}/messenger/web/articles/${t}/react`,
                s = {
                    reaction_index: n,
                    allow_auto_responses: r,
                    article_content_id: i
                };
            return c.b.post({
                url: o,
                session: e,
                params: s
            }).then(() => {})
        },
        createComment: function(e, t, n, r, i, o, s) {
            const a = `${O.api_base}/messenger/web/conversations/${t}/reply`,
                u = E(r, i, o, n, s);
            return c.b.post({
                url: a,
                session: e,
                params: u
            }).then(e => Object.assign({}, W(e), {
                clientId: n
            }))
        },
        createConversation: function(e, {
            blocks: t,
            createdAt: n,
            upload: r,
            email: i,
            composerSuggestions: o,
            selfServeSuggestionsMatch: s,
            resolutionBotBehaviorVersionId: a,
            botIntro: u
        }) {
            const d = `${O.api_base}/messenger/web/messages`,
                l = E(t, n, r, null, i, o, s, u, a);
            return c.b.post({
                url: d,
                session: e,
                params: l
            }).then(j)
        },
        createEvent: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/events`,
                i = {
                    event_name: t,
                    metadata: n
                },
                o = {
                    event_list: JSON.stringify({
                        data: [i]
                    })
                };
            return c.b.post({
                url: r,
                session: e,
                params: o
            })
        },
        createMetrics: function(e, t, n = [], r = [], i = []) {
            const o = `${O.api_base}/messenger/web/metrics`,
                s = S(t, n, r, i);
            return c.b.post({
                url: o,
                session: e,
                params: s
            })
        },
        createMetricsWithBeacon: function(e, t, n = [], r = [], i = []) {
            const o = S(t, n, r, i);
            return c.b.sendBeacon(`${O.api_base}/messenger/web/metrics`, e, o)
        },
        createOrUpdateUser: function(e, t = {}, n, r, i, o, s = !1) {
            t = m({}, t), void 0 !== n && (t.anonymous_email = n);
            const a = {
                source: i,
                sampling: s
            };
            void 0 !== r && (a._intercomEncryptedPayload = r);
            const u = `${O.api_base}/messenger/web/ping`;
            return c.b.post({
                url: u,
                session: e,
                params: a,
                customAttributes: t,
                internal: o
            }).then(e => {
                const {
                    errors: t
                } = e;
                return t ? {
                    errors: t
                } : function(e) {
                    const {
                        user: t
                    } = e;
                    e.active_tour && Object(p.d)("Tour attempting to resume from ping", e.active_tour);
                    return {
                        id: t.id,
                        activeCompanyId: t.active_company_id || "-1",
                        activeTour: z(e.active_tour),
                        anonymousId: t.anonymous_id,
                        anonymousSession: e.anonymous_session,
                        app: Y(e),
                        articleConversationId: JSON.stringify(e.article_conversation_id),
                        banners: B(e.banners),
                        cdasBreachingLimit: e.cdas_breaching_limit || [],
                        clientsideMessageConditions: e.client_messages,
                        clientsideRulesetConditions: pe(e.client_matches),
                        composerSuggestions: he(e.composer_suggestions),
                        botIntro: be(e.bot_intro),
                        resolutionBotBehaviorVersionId: e.resolution_bot_behavior_version_id,
                        countryCode: t.country_code,
                        timeTillContentRefreshInSeconds: e.time_till_content_refresh_in_seconds,
                        hasConversations: !1 !== t.has_conversations,
                        homeScreenSlots: t.home_screen_slots || [],
                        identityVerificationReady: e.identity_verification_ready,
                        identityVerified: e.identity_verified,
                        installModeConfig: q(e),
                        lastContactedAt: t.last_contacted_at,
                        locale: t.locale,
                        newConversationComposerState: N(e.composer_state),
                        notificationLinkConversationId: e.notification_link_conversation_id,
                        phoneNumber: t.phone_number,
                        role: (n = t.role, {
                            contact_role: "lead",
                            user_role: "user",
                            visitor_role: "visitor"
                        }[n]),
                        unreadConversationIds: (e.unread_conversation_ids || []).map(e => e.toString()),
                        unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map(e => e.toString()),
                        userSuppliedEmail: t.anonymous_email,
                        newSession: t.new_session
                    };
                    var n
                }(e)
            })
        },
        createReaction: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/conversations/${t}/react`,
                i = {
                    reaction_index: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(() => {})
        },
        createUpload: function(e, t, n) {
            return new Promise((r, i) => {
                const o = new FormData;
                o.append("key", e.key), o.append("acl", e.acl), o.append("Content-Type", e.content_type), o.append("AWSAccessKeyId", e.aws_access_key), o.append("policy", e.policy), o.append("signature", e.signature), o.append("success_action_status", e.success_action_status), o.append("file", t);
                const s = new XMLHttpRequest;
                s.upload.addEventListener("progress", (function(e) {
                    const {
                        lengthComputable: t,
                        loaded: r,
                        total: i
                    } = e;
                    if (!n || !t) return;
                    const o = parseInt(r / i * 100);
                    n(o)
                }), !1), s.addEventListener("error", (function() {
                    i()
                }), !1), s.addEventListener("abort", (function() {
                    i()
                }), !1), s.addEventListener("load", (function(t) {
                    201 === t.target.status ? r({
                        id: e.id,
                        publicUrl: e.public_url,
                        contentType: e.content_type
                    }) : i()
                }), !1), s.open("POST", e.upload_destination, !0), s.send(o)
            })
        },
        createUploadPolicy: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/uploads`,
                o = {
                    upload: JSON.stringify({
                        original_filename: Object(u.a)(t.name),
                        size_in_bytes: t.size,
                        content_type: t.type,
                        width: n,
                        height: r
                    })
                };
            return c.b.post({
                url: i,
                session: e,
                params: o
            }).then(te)
        },
        disableInstallMode: function(e) {
            const t = `${O.api_base}/messenger/web/install`;
            return c.b.post({
                url: t,
                session: e
            })
        },
        dismissBanner: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/banners/${t}/dismiss`,
                i = v(n);
            return c.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        dismissNotifications: function(e, t) {
            const n = `${O.api_base}/messenger/web/conversations/dismiss`,
                r = {
                    conversation_ids: t
                };
            return c.b.post({
                url: n,
                session: e,
                params: r
            }).then(() => {})
        },
        fetchMessengerSheetData: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/sheets/open`,
                o = {
                    action_id: n,
                    uri: t,
                    values: JSON.stringify(r)
                };
            return c.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        fetchMessengerSheetDataWithToken: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/messenger_card_view/open_sheet`,
                i = {
                    action_id: t,
                    token: e,
                    values: JSON.stringify(n)
                };
            return c.b.post({
                url: r,
                params: i
            })
        },
        fetchTour: function({
            session: e,
            tourId: t,
            token: n
        } = {}) {
            if (!e && !n) return Object(p.d)("A session or a token must be supplied when fetching a tour"), Promise.reject("missing_session_and_token");
            if (e) return Object(p.d)("Attempting to fetch tour with session data."), c.b.post({
                url: `${O.api_base}/messenger/web/tours/${t}/fetch`,
                session: e
            }).then(z); {
                Object(p.d)("Attempting to fetch tour for messenger card in fallback state.");
                const e = {
                    token: n
                };
                return c.b.post({
                    url: `${O.api_base}/messenger/web/tours/${t}/fetch_with_token`,
                    params: e
                }).then(z)
            }
        },
        fireComposerSuggestion: function(e, {
            conversationId: t,
            suggestion: n,
            clientId: r,
            botIntro: i,
            resolutionBotBehaviorVersionId: o
        }) {
            const s = t ? `${O.api_base}/messenger/web/conversations/${t}/reply` : `${O.api_base}/messenger/web/messages`,
                a = {
                    composer_suggestion: JSON.stringify(n),
                    client_assigned_uuid: r
                };
            return t && (a.conversation_id = t), i && (a.bot_intro = i), o && (a.resolution_bot_behavior_version_id = o), c.b.post({
                url: s,
                session: e,
                params: a
            }).then(t ? W : j)
        },
        fireTrigger: function(e, {
            triggerId: t,
            clientAssignedUUID: n
        }) {
            const r = `${O.api_base}/messenger/web/triggers/${t}/fire`,
                i = {
                    client_assigned_uuid: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        getArticle: function(e, t, n, r = !1) {
            const i = `${O.api_base}/messenger/web/articles/${t}`,
                o = function(e, t) {
                    return {
                        conversation_id: e,
                        browse_mode: t
                    }
                }(n, r);
            return c.b.post({
                url: i,
                session: e,
                params: o
            }).then(L)
        },
        getArticleReaction: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/articles/get_reaction`,
                o = {
                    article_id: t,
                    article_content_id: n
                };
            c.b.post({
                url: i,
                session: e,
                params: o
            }).then(e => {
                e ? r(null, e) : r()
            }).catch(e => {
                r(e)
            })
        },
        getArticlesInCollection: function(e, t) {
            const n = `${O.api_base}/messenger/web/article_collections/${t}/articles`;
            return c.b.post({
                url: n,
                session: e
            }).then(D)
        },
        getCardView: function(e) {
            const t = `${O.api_base}/messenger/web/messenger_card_view/`,
                n = {
                    token: e
                };
            return c.b.post({
                url: t,
                params: n
            })
        },
        getConversation: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/conversations/${t}`,
                i = {
                    self_serve_suggestions_match: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(j)
        },
        getConversationTranscriptURL: ge,
        getConversations: function(e, {
            source: t,
            page: n,
            perPage: r,
            selfServeSuggestionsMatch: i
        }) {
            const o = `${O.api_base}/messenger/web/conversations`,
                s = {
                    page: n,
                    per_page: r,
                    source: t,
                    self_serve_suggestions_match: i
                };
            return c.b.post({
                url: o,
                session: e,
                params: s
            }).then(I)
        },
        getHomeScreenCards: function(e, {
            homeScreenSlots: t,
            selfServeSuggestionsMatch: n
        }) {
            const r = `${O.api_base}/messenger/web/home_cards`,
                i = {
                    slot_card_ids: t.map(e => e.messenger_card_id),
                    self_serve_suggestions_match: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(le)
        },
        getMessengerCanvasContentWithToken: function(e, t) {
            const n = `${O.api_base}/messenger/web/messenger_card_view/live_content`,
                r = {
                    token: e,
                    canvas_id: t
                };
            return c.b.post({
                url: n,
                params: r
            }).then(e => Object.assign(e, {
                id: t
            }))
        },
        getMessengerCanvasWithContent: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/messenger_cards/content`,
                i = {
                    canvas_id: t,
                    uri: n
                };
            return _e(i), c.b.post({
                url: r,
                session: e,
                params: i
            }).then(e => Object.assign(e, {
                id: t
            }))
        },
        getUnreadConversations: function(e) {
            const t = `${O.api_base}/messenger/web/conversations/unread`;
            return c.b.post({
                url: t,
                session: e
            }).then(T)
        },
        markConversationAsRead: function(e, t) {
            const n = `${O.api_base}/messenger/web/conversations/${t}/read`;
            return c.b.post({
                url: n,
                session: e
            }).then(j)
        },
        outboundPreview: function(e, t) {
            const n = `${O.api_base}/messenger/web/custom_bots/${t}/outbound_preview`;
            return c.b.post({
                url: n,
                session: e
            })
        },
        progressTour: function(e, t, n, r) {
            const i = Object.assign({
                step_id: n
            }, y(r));
            return c.b.sendBeacon(`${O.api_base}/messenger/web/tours/${t}/progress`, e, i)
        },
        quickReply: function(e, t, n, r, i) {
            const o = `${O.api_base}/messenger/web/conversations/${t}/quick_reply`,
                s = function(e, t, n) {
                    return {
                        client_assigned_uuid: n,
                        conversation_part: JSON.stringify({
                            id: e,
                            reply_option: t
                        })
                    }
                }(n, r, i);
            return c.b.post({
                url: o,
                session: e,
                params: s
            }).then(W)
        },
        reactToBanner: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/banners/${t}/react`,
                o = Object.assign({
                    reaction: r
                }, v(n));
            return c.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        recordInteractions: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/conversations/${t}/record_interactions`,
                i = {
                    interactions: n
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(() => {})
        },
        recordTourFailure: function(e, t, n, r, i, o) {
            const s = `${O.api_base}/messenger/web/tours/${t}/record_failure`,
                a = {
                    failed_selector: r,
                    failure_url: i,
                    tour_step_id: n
                },
                u = Object.assign(a, y(o));
            return c.b.post({
                url: s,
                session: e,
                params: u
            })
        },
        rulesetConditionSatisfied: function(e, t, n, r, i, o, s) {
            const a = `${O.api_base}/messenger/web/rulesets/${t}/match`,
                u = {
                    user_id: r,
                    company_id: i,
                    ruleset_link_id: n,
                    predicates: JSON.stringify(o)
                };
            return s && (u.checkpoint_id = s), c.b.post({
                url: a,
                session: e,
                params: u
            }).then(e => {
                let {
                    custom_bot: t,
                    composer_suggestions: n,
                    predictive_answers_suggestions: r
                } = e;
                return b({}, g(e, ["custom_bot", "composer_suggestions", "predictive_answers_suggestions"]), {
                    customBot: t,
                    composerSuggestions: he(n),
                    answerbotPredictiveContexts: r
                })
            })
        },
        searchGifs: function(e, t) {
            const n = `${O.api_base}/messenger/web/gifs`,
                r = {
                    query: t
                };
            return c.b.post({
                url: n,
                session: e,
                params: r
            })
        },
        sendBeaconEvent: function(e, t, n) {
            const r = {
                event_name: t,
                metadata: n
            };
            return c.b.sendBeacon(`${O.api_base}/messenger/web/events`, e, {
                event_list: JSON.stringify({
                    data: [r]
                })
            })
        },
        startConversationFromSuggestion: function(e, {
            suggestionUuid: t,
            clientAssignedUUID: n,
            selfServeSuggestionsMatch: r
        }) {
            const i = `${O.api_base}/messenger/web/custom_bots/trigger_inbound_conversation`,
                o = {
                    id: t,
                    client_assigned_uuid: n,
                    self_serve_suggestions_match: r
                };
            return c.b.post({
                url: i,
                session: e,
                params: o
            }).then(j)
        },
        stopTour: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/tours/${t}/stop`,
                i = y(n);
            return c.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        searchArticles: function(e, t) {
            const n = `${O.api_base}/messenger/web/articles/search`,
                r = {
                    phrase: t
                };
            return c.b.post({
                url: n,
                session: e,
                params: r
            }).then(P)
        },
        submitMessengerCardAction: function(e, t, n, r) {
            const i = `${O.api_base}/messenger/web/messenger_cards`,
                o = {
                    action_id: n,
                    uri: t,
                    values: JSON.stringify(r)
                };
            return _e(o), c.b.post({
                url: i,
                session: e,
                params: o
            })
        },
        submitMessengerCardActionWithToken: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/messenger_card_view/submit`,
                i = {
                    action_id: t,
                    token: e,
                    values: JSON.stringify(n)
                };
            return c.b.post({
                url: r,
                params: i
            })
        },
        submitSheet: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/sheets/submit`,
                i = {
                    uri: t,
                    sheet_values: JSON.stringify(n)
                };
            return c.b.post({
                url: r,
                session: e,
                params: i
            })
        },
        submitSheetWithToken: function(e, t) {
            const n = `${O.api_base}/messenger/web/messenger_card_view/submit_sheet`,
                r = {
                    token: e,
                    sheet_values: JSON.stringify(t)
                };
            return c.b.post({
                url: n,
                params: r
            })
        },
        triggerTransitions: function(e, t, n) {
            const r = `${O.api_base}/messenger/web/operator/trigger`,
                i = function(e, {
                    type: t,
                    payload: {
                        composerHasContent: n,
                        executionTime: r
                    } = {}
                }) {
                    return {
                        type: t,
                        payload: JSON.stringify({
                            composer_has_content: n,
                            execution_time: r
                        }),
                        meta: JSON.stringify({
                            conversation_id: e
                        })
                    }
                }(t, n);
            return c.b.post({
                url: r,
                session: e,
                params: i
            }).then(j)
        },
        updateConversationForm: function(e, t, n, r, i, o) {
            const s = o ? {
                    identifier: r,
                    value: i,
                    conversation_part_id: n,
                    upfront_email_collection: o
                } : {
                    identifier: r,
                    value: i,
                    conversation_part_id: n
                },
                a = `${O.api_base}/messenger/web/conversations/${t}/form`,
                u = {
                    form_params: JSON.stringify(s)
                };
            return c.b.post({
                url: a,
                session: e,
                params: u
            }).then(j)
        },
        updatePhoneNumber: function(e, t) {
            const n = `${O.api_base}/apps/${e.appId}/notification_channels/phone_number`,
                r = {
                    phone_number: t
                };
            return c.b.post({
                url: n,
                session: e,
                params: r
            })
        },
        visitorAutoMessageConditionSatisfied: function(e, t) {
            const n = `${O.api_base}/messenger/web/messages/${t.id}/match`,
                r = {
                    predicates: JSON.stringify(t.predicates)
                };
            return c.b.post({
                url: n,
                session: e,
                params: r
            }).then(e => {
                if (!s()(e)) return j(e)
            })
        },
        generateArticleCard: function(e, t) {
            const n = `${O.api_base}/messenger/web/articles/${t}/card`;
            return c.b.post({
                url: n,
                session: e
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = () => window.INTERCOM_PRIVILEGE_SEPARATION
}, function(e, t, n) {
    "use strict";
    var r = n(8);
    var i = function(e, t, n, r, i, o) {
        const s = new XMLHttpRequest;
        s.onerror = () => o(), s.onabort = () => o(), s.onload = () => {
            const {
                readyState: e,
                status: t,
                response: n
            } = s;
            4 === e && (t >= 200 && t < 300 ? i(n) : o(n))
        }, s.open(t, e, !0), s.withCredentials = !0, Object.keys(n).forEach(e => {
            s.setRequestHeader(e, n[e])
        }), s.send(r)
    };
    const o = r.a.hasXhr2Support();
    var s = (e, t, n) => new Promise((r, s) => {
        if (!o) throw new Error("Browser does not support XMLHttpRequest.");
        i(e, "POST", t, n, r, s)
    });

    function a(e) {
        return Math.floor(4294967296 * (1 + e())).toString(16).substring(1)
    }
    var c = n(85),
        u = n(21);
    n.d(t, "a", (function() {
        return d
    }));

    function d(e, t, n, i, o, s, d) {
        var p;
        i = i || (null === (p = Object(u.d)()) || void 0 === p ? void 0 : p.href), s = s || Object(u.e)(), i = Object(c.b)(i), s = Object(c.b)(s), r.a.isNativeMobile() && (i = void 0), o = o || function(e = Math.random) {
            return a(e) + a(e)
        }();
        const {
            appId: f,
            anonymousSession: h,
            sessionId: b,
            hostUserAgent: _,
            activeCompanyId: g
        } = e, m = Object.assign({
            app_id: f,
            v: 3,
            g: "a3c7e8e04c74317727238573e37965398673631f",
            s: b,
            r: s,
            platform: r.a.isMobileBrowser() ? "mobile_web" : "web",
            "Idempotency-Key": o,
            user_data: l(e, n),
            internal: d ? JSON.stringify(d) : "",
            page_title: Object(u.b)(),
            user_active_company_id: g
        }, t);
        return void 0 !== i && (m.referer = i), void 0 !== h && (m.anonymous_session = h), void 0 !== _ && (m.host_user_agent = _), m
    }

    function l(e, t) {
        const {
            userId: n,
            email: r,
            userHash: i,
            anonymousId: o
        } = e, s = Object.assign({
            email: r,
            user_id: n,
            user_hash: i,
            anonymous_id: o
        }, t);
        return JSON.stringify(s)
    }

    function p(e) {
        const t = [];
        return Object.keys(e).forEach(n => {
            const r = e[n];
            n = encodeURIComponent(n), Array.isArray(r) ? r.forEach(e => t.push(`${n}[]=${encodeURIComponent(e)}`)) : t.push(`${n}=${encodeURIComponent(r)}`)
        }), t.join("&")
    }

    function f(e) {
        try {
            return JSON.parse(e)
        } catch (t) {
            return e
        }
    }
    t.b = {
        buildBody: d,
        post: function({
            url: e,
            session: t = {},
            params: n = {},
            customAttributes: r = null,
            currentUrl: i = null,
            idempotencyKey: o = null,
            referrer: a = null,
            internal: c = null
        }) {
            if (!t) return Promise.reject("http_post_session_empty");
            const u = d(t, n, r, i, o, a, c);
            return s(e, {
                "Content-Type": "application/x-www-form-urlencoded"
            }, p(u)).then(f)
        },
        sendBeacon: function(e, t, n, r, i, o, a, c) {
            var u, l, h;
            if (!t) return Promise.reject("http_post_session_empty");
            const b = d(t, n, r, i, o, a, c);
            if (null === (u = window) || void 0 === u ? void 0 : null === (l = u.parent) || void 0 === l ? void 0 : null === (h = l.navigator) || void 0 === h ? void 0 : h.sendBeacon) {
                const t = {
                    type: "application/x-www-form-urlencoded"
                };
                return window.parent.navigator.sendBeacon(e, new Blob([p(b)], t)) ? Promise.resolve() : Promise.reject()
            }
            return s(e, {
                "Content-Type": "application/x-www-form-urlencoded"
            }, p(b)).then(f)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", (function() {
        return m
    })), n.d(t, "o", (function() {
        return O
    })), n.d(t, "m", (function() {
        return E
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "t", (function() {
        return v
    })), n.d(t, "k", (function() {
        return y
    })), n.d(t, "j", (function() {
        return C
    })), n.d(t, "h", (function() {
        return I
    })), n.d(t, "i", (function() {
        return T
    })), n.d(t, "g", (function() {
        return w
    })), n.d(t, "e", (function() {
        return A
    })), n.d(t, "f", (function() {
        return R
    })), n.d(t, "d", (function() {
        return j
    })), n.d(t, "q", (function() {
        return N
    })), n.d(t, "a", (function() {
        return D
    })), n.d(t, "u", (function() {
        return U
    })), n.d(t, "b", (function() {
        return L
    })), n.d(t, "s", (function() {
        return k
    })), n.d(t, "n", (function() {
        return x
    })), n.d(t, "r", (function() {
        return G
    })), n.d(t, "p", (function() {
        return V
    }));
    var r = n(8),
        i = n(29),
        o = n(6),
        s = n(24),
        a = n(2),
        c = n(4),
        u = n(214),
        d = n(0),
        l = n(15),
        p = n(27),
        f = n(53),
        h = n(164),
        b = n(11),
        _ = n(216),
        g = n(45);

    function m(e, t, n = !1, r = null) {
        return (i, s) => {
            i(function(e, t = !1) {
                return {
                    type: "GET_CONVERSATION_REQUEST",
                    conversationId: e,
                    isUpdating: t
                }
            }(t, n));
            const {
                session: a,
                operator: c,
                app: u
            } = s();
            return e.getConversation(a, t, u.selfServeSuggestionsMatch).then(t => {
                if (i(function(e) {
                        return (t, n) => {
                            const r = n(),
                                {
                                    newConversation: i
                                } = r,
                                s = Object(b.e)(r);
                            try {
                                Object(o.e)(e).clientId === Object(o.e)(i).clientId && "conversation" !== s && (t(T(e, null, null, Date.now(), "custom_bot")), t(Object(g.a)(e.id, !0)))
                            } catch (e) {}
                        }
                    }(t)), i(O(e, t, !1, Date.now())), c) {
                    const {
                        lastComposerEvent: e,
                        userCreatedConversationAt: n,
                        lastTriggerTransitionTimestamp: r
                    } = c;
                    Object(l.l)(t, r), Object(l.k)(t, n, e)
                }
                r && Object(f.a)() && Object(d.g)("newCommentEvent", {
                    duration_ms: Object(p.a)(r)
                })
            }).catch(e => i(function(e, t) {
                return {
                    type: "GET_CONVERSATION_FAILURE",
                    conversationId: e,
                    error: t
                }
            }(t, e)))
        }
    }

    function O(e, t, n, r) {
        return s => {
            Object(o.s)(t).forEach(t => s(Object(i.a)(e, t, !1))), s(function(e, t = !1, n) {
                return {
                    type: "GET_CONVERSATION_SUCCESS",
                    conversation: e,
                    skipNotification: t,
                    createdAt: n
                }
            }(t, n, r))
        }
    }

    function E(e, t) {
        return (n, r) => {
            n(function(e) {
                return {
                    type: "MARK_CONVERSATION_AS_READ_REQUEST",
                    conversationId: e
                }
            }(t));
            const {
                session: i
            } = r();
            return e.markConversationAsRead(i, t).then(() => n(function(e) {
                return {
                    type: "MARK_CONVERSATION_AS_READ_SUCCESS",
                    conversationId: e
                }
            }(t))).catch(e => n(function(e, t) {
                return {
                    type: "MARK_CONVERSATION_AS_READ_FAILURE",
                    conversationId: e,
                    error: t
                }
            }(t, e)))
        }
    }

    function S(e) {
        return {
            type: "CONVERSATION_READ_ELSEWHERE",
            conversationId: e
        }
    }

    function v(e) {
        return {
            type: "USER_CONTENT_SEEN_BY_ADMIN",
            conversationId: e
        }
    }

    function y(e, t, n, r) {
        return (i, o) => {
            i(function(e, t, n) {
                return {
                    type: "CREATE_REACTION_REQUEST",
                    conversationId: e,
                    reactionIndex: t,
                    isFromConversation: !!n
                }
            }(t, n, r));
            const {
                session: s
            } = o();
            return e.createReaction(s, t, n).then(() => i(function(e, t) {
                return {
                    type: "CREATE_REACTION_SUCCESS",
                    conversationId: e,
                    reactionIndex: t
                }
            }(t, n))).catch(e => i(function(e, t, n) {
                return {
                    type: "CREATE_REACTION_FAILURE",
                    conversationId: e,
                    reactionIndex: t,
                    error: n
                }
            }(t, n, e)))
        }
    }

    function C(e, t, n, r = !1, i = !1, o = null, s = null, a = !1, c) {
        return void 0 === t ? function(e, t, n = !1, r, i, o) {
            return (s, a) => {
                const c = a(),
                    {
                        session: u,
                        app: d,
                        user: l,
                        newConversation: p
                    } = c,
                    {
                        body: f,
                        createdAt: h
                    } = t;
                return s(I(t, n, o, Date.now())), o && s({
                    type: "UPFRONT_EMAIL_COLLECTION_SUBMITTED"
                }), M(e, u, t, e => s(P(t, e))).then(t => e.createConversation(u, {
                    blocks: f,
                    createdAt: h,
                    upload: t,
                    email: o,
                    composerSuggestions: Object(_.a)(c),
                    selfServeSuggestionsMatch: d.selfServeSuggestionsMatch,
                    botIntro: p ? p.botIntroId : null,
                    resolutionBotBehaviorVersionId: l ? l.resolutionBotBehaviorVersionId : null
                })).then(e => {
                    s(T(e, r, i, Date.now()))
                }).catch(e => s(w(e)))
            }
        }(e, n, r, s, a, c) : function(e, t, n, r = !1, i = !1, o, s, a, c) {
            return (u, d) => {
                const {
                    session: l
                } = d(), {
                    body: p,
                    createdAt: f,
                    clientId: h
                } = n;
                return u(A(t, n, r, c)), c && u({
                    type: "UPFRONT_EMAIL_COLLECTION_SUBMITTED"
                }), M(e, l, n, e => u(P(n, e, t))).then(n => e.createComment(l, t, h, p, f, n, c)).then(e => {
                    u(R(t, e, i, o, s, a, Date.now()))
                }).catch(e => u(j(t, n, e)))
            }
        }(e, t, n, r, i, o, s, a, c)
    }

    function I(e, t, n, r = Date.now()) {
        return {
            type: "CREATE_CONVERSATION_REQUEST",
            part: e,
            isRetry: t,
            timestamp: r,
            email: n
        }
    }

    function T(e, t, n, r, i) {
        return {
            type: "CREATE_CONVERSATION_SUCCESS",
            conversation: e,
            officeHoursResponse: t,
            isAnnotatedImage: n,
            createdAt: r,
            conversationTriggerType: i
        }
    }

    function w(e) {
        return {
            type: "CREATE_CONVERSATION_FAILURE",
            reason: e
        }
    }

    function A(e, t, n, r) {
        return {
            type: "CREATE_COMMENT_REQUEST",
            conversationId: e,
            part: t,
            isRetry: n,
            email: r
        }
    }

    function R(e, t, n, r, i, o, s, a = !1) {
        return {
            type: "CREATE_COMMENT_SUCCESS",
            conversationId: e,
            part: t,
            isBorderless: n,
            lastParticipatingAdmin: r,
            officeHoursResponse: i,
            isAnnotatedImage: o,
            createdAt: s,
            fromMessengerSuggestedContent: a
        }
    }

    function j(e, t, n) {
        return {
            type: "CREATE_COMMENT_FAILURE",
            conversationId: e,
            part: t,
            reason: n
        }
    }

    function N(e, t, n) {
        const {
            id: r
        } = t;
        return i => {
            if (n.selectedReplyOption || n.composerSuggestionItem) {
                let r, o;
                return n.selectedReplyOption ? (r = n.selectedReplyOption.replyOption, o = n.selectedReplyOption.quickReplyPart) : r = n.composerSuggestionItem, i(Object(h.a)(e, t, r, !0, o))
            }
            return i(C(e, r, n, !0))
        }
    }

    function M(e, t, n, r) {
        const {
            file: i,
            body: o
        } = n, {
            width: s,
            height: a
        } = o[0];
        return i ? i.size > 41943040 ? Promise.reject("file_size") : e.createUploadPolicy(t, i, s, a).then(t => e.createUpload(t, i, r)) : Promise.resolve()
    }

    function P(e, t, n) {
        return {
            type: "UPDATE_UPLOAD_PROGRESS",
            conversationId: n,
            part: e,
            progress: t
        }
    }

    function D(e, t, n, r, i = new Date) {
        return {
            type: "ADMIN_IS_TYPING",
            conversationId: e,
            adminId: t,
            firstName: n,
            avatarUrl: r,
            lastActiveAt: i
        }
    }

    function U(e) {
        return {
            type: "USER_IS_TYPING",
            conversationId: e
        }
    }

    function L(e, t, n = new Date) {
        return {
            type: "COMPOSER_CONTENT_CHANGED",
            conversationId: e,
            composerContent: t,
            lastActiveAt: n
        }
    }

    function k(e, t, n, r, i, o, s, a, c) {
        return (d, l) => {
            const {
                session: p,
                user: f
            } = l();
            return d(function(e, t, n, r, i, o, s) {
                return {
                    type: "UPDATE_CONVERSATION_FORM_REQUEST",
                    conversationId: e,
                    partId: t,
                    identifier: n,
                    value: r,
                    identifierType: i,
                    formType: o,
                    isCustomData: s
                }
            }(t, n, r, i, o, s, a)), e.updateConversationForm(p, t, n, r, i, c).then(e => {
                d(function(e, t, n, r) {
                    return {
                        type: "UPDATE_CONVERSATION_FORM_SUCCESS",
                        conversation: e,
                        partId: t,
                        identifier: n,
                        createdAt: r
                    }
                }(e, n, r, Date.now())), "email" === r && d(Object(u.d)(f, i))
            }).catch(e => {
                d(function(e, t, n, r) {
                    return {
                        type: "UPDATE_CONVERSATION_FORM_FAILURE",
                        conversationId: e,
                        partId: t,
                        identifier: n,
                        error: r
                    }
                }(t, n, r, e, Date.now()))
            })
        }
    }

    function x(e) {
        return (t, n) => {
            const {
                session: i
            } = n();
            let o = Object(a.d)();
            Object(r.h)() && (o += `?v=${Math.floor(1e8*Math.random())}`), Object(s.w)(o, Object(c.a)(i, {
                conversation_id: e
            }))
        }
    }

    function G(e) {
        return {
            type: "SET_NEW_CONVERSATION_COMPOSER_STATE",
            composerState: e
        }
    }

    function V(e, t, n) {
        return (r, i) => {
            const {
                session: o
            } = i();
            return e.recordInteractions(o, t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return E
    })), n.d(t, "d", (function() {
        return S
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "j", (function() {
        return y
    })), n.d(t, "i", (function() {
        return C
    })), n.d(t, "l", (function() {
        return I
    })), n.d(t, "q", (function() {
        return T
    })), n.d(t, "p", (function() {
        return w
    })), n.d(t, "g", (function() {
        return A
    })), n.d(t, "m", (function() {
        return R
    })), n.d(t, "r", (function() {
        return j
    })), n.d(t, "e", (function() {
        return N
    })), n.d(t, "f", (function() {
        return M
    })), n.d(t, "k", (function() {
        return P
    })), n.d(t, "c", (function() {
        return D
    })), n.d(t, "s", (function() {
        return L
    })), n.d(t, "h", (function() {
        return k
    })), n.d(t, "t", (function() {
        return x
    })), n.d(t, "o", (function() {
        return G
    })), n.d(t, "n", (function() {
        return V
    }));
    var r = n(65),
        i = n.n(r),
        o = n(14),
        s = n.n(o),
        a = n(112),
        c = n.n(a),
        u = n(226),
        d = n.n(u),
        l = n(88),
        p = n.n(l),
        f = n(146),
        h = n.n(f),
        b = n(227),
        _ = n.n(b),
        g = n(16),
        m = n(0);
    const {
        assign: O
    } = Object, E = e => e.parts.filter(e => e.author.isAdmin)[0], S = e => Object(g.a)(e.parts.filter(e => e.author.isAdmin)), v = e => e.parts.reduce((e, t) => e + (t.author.isAdmin ? 1 : 0), 0), y = e => 1 === e.parts.length && "chat" === e.parts[0].messageType, C = e => e.parts.length > 1 && Object(g.a)(e.parts).author.isAdmin, I = e => e.author.isBot && "Operator" === e.author.firstName, T = (e, t) => {
        if (!s()(t)) {
            const n = e => e.clientId || e.id,
                r = t.parts || [],
                o = c()([...e.parts, ...r], n);
            return i()(o, ["createdAt"], ["asc"])
        }
        return e.parts
    }, w = (e, t) => {
        if (!s()(t) && t.composerState) {
            if (t.composerState.version > e.composerState.version) return t.composerState;
            t.composerState.version === e.composerState.version && t.composerState.visible !== e.composerState.visible && Object(m.b)(`Different composerState visibibility with same version number for conversation with id=${e.id}`)
        }
        return e.composerState
    }, A = e => {
        if (e && e.parts && 0 !== e.parts.length) return `${e.id}-${Object(g.a)(e.parts).id}`
    }, R = e => "partial" === e.fetchState, j = e => {
        const t = S(e);
        return 1 === e.parts.length ? N(e) : O({}, t, {
            messageType: M(t)
        })
    }, N = e => {
        const {
            lastParticipatingAdmin: t
        } = e, n = t ? t.lastActiveAt : void 0, r = t ? t.isActive : void 0;
        return O({}, e.parts[0], {
            lastActiveAt: n,
            isActive: r
        })
    }, M = e => e.messageType || "adminReply", P = e => !(!e.identifier.startsWith("custom_data.") && !e.identifier.startsWith("company.custom_data.")), D = (e, t) => {
        const n = e.attributes.find(e => e.identifier === t);
        if (n) return "string" === n.type && Array.isArray(n.options) ? "list" : "email" === n.identifier ? "email" : "phone" === n.identifier ? "phone" : n.type
    }, U = e => {
        const t = h()(e.parts, e => e.body);
        return p()(t, e => "messengerCard" === e.type)
    }, L = e => h()(U(e), e => d()(e, "type")), k = (e, t) => _()(U(e), {
        uri: t
    }), x = e => e.sort((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt), G = e => (e => e.composerState.visible && !e.inboundConversationsDisabled && !e.preventEndUserReplies)(e) && !(e => "attribute_collector" === e.parts[0].replyType)(e), V = e => e.parts && Object(g.a)(e.parts) && "pointer" === Object(g.a)(e.parts).messageType
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    })), n.d(t, "c", (function() {
        return findAndValidateInputField
    })), n.d(t, "d", (function() {
        return f
    })), n.d(t, "a", (function() {
        return DelayedNodeVisibilityCheck
    }));
    var r = n(153),
        i = n.n(r),
        o = n(24),
        s = n(26),
        a = n.n(s),
        c = n(3),
        u = n(22);

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t) {
        return t.hostname === e.hostname && t.pathname === e.pathname && t.hash === e.hash
    }
    const p = e => e.replace(/[\u200B-\u200D\uFEFF]/g, "");
    class findAndValidateInputField {
        constructor(e, t) {
            d(this, "elements", void 0), d(this, "callback", void 0), d(this, "destroyed", void 0), d(this, "validateInputs", () => {
                let e = !0;
                this.elements.forEach(t => {
                    "checkbox" !== t.type && "radio" !== t.type && this.elementHasEmptyValue(t) && (e = !1)
                }), this.onChange(e)
            }), this.callback = t, this.destroyed = !1, this.elements = [];
            const n = window.parent.document.querySelector(e);
            if (n) {
                const e = n.tagName.toLowerCase(),
                    t = "input" === e || "textarea" === e || "select" === e || n.isContentEditable;
                this.elements = t ? [n] : n.querySelectorAll("input, textarea, select, div[contenteditable]")
            }
        }
        onChange(e) {
            this.destroyed || this.callback(e)
        }
        destroy() {
            this.destroyed = !0, this.removeListeners()
        }
        elementHasEmptyValue(e) {
            return e instanceof HTMLSelectElement ? !p(e.options[e.selectedIndex].value) : e.isContentEditable ? !p(e.innerText || "") : !p(e.value)
        }
        addListeners() {
            this.elements.forEach(e => {
                "select" === e.tagName.toLowerCase() ? e.addEventListener("change", this.validateInputs) : e.addEventListener("input", this.validateInputs)
            })
        }
        removeListeners() {
            this.elements.forEach(e => {
                "select" === e.type ? e.removeEventListener("change", this.validateInputs) : e.removeEventListener("input", this.validateInputs)
            })
        }
        run() {
            if (!this.elements.length) return this.callback(!0);
            this.validateInputs(), this.addListeners()
        }
    }
    const f = function(...e) {
        a()("tours:debug")(...e)
    };
    class DelayedNodeVisibilityCheck {
        constructor(e, t, n, r) {
            d(this, "selector", void 0), d(this, "timeoutValue", void 0), d(this, "callback", void 0), d(this, "timeout", void 0), d(this, "waitTimeout", void 0), d(this, "document", void 0), d(this, "observer", void 0), Object(c.a)() ? Object(u.d)({
                selector: e,
                timeoutValue: t,
                wait: n
            }, r) : (this.selector = e, this.timeoutValue = t, this.document = window.parent.document, this.callback = r, this.observer = new MutationObserver(i()(this._check.bind(this), 200)), this.waitTimeout = window.setTimeout(() => {
                this._initObserver(), this._startTimer(), this._check()
            }, n || 0))
        }
        _initObserver() {
            this.document.body && this.observer.observe(this.document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0
            })
        }
        _check() {
            const e = this.document.querySelector(this.selector);
            Object(o.u)(e) ? (this.callback(!0), this.cancel()) : this.callback(!1)
        }
        _startTimer() {
            (this.timeoutValue || 0 === this.timeoutValue) && (this.timeout = window.setTimeout(() => {
                this.callback(!1), this.cancel()
            }, this.timeoutValue))
        }
        cancel() {
            this.observer.disconnect(), this.timeout && clearTimeout(this.timeout), this.waitTimeout && clearTimeout(this.waitTimeout)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "g", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "e", (function() {
        return l
    })), n.d(t, "b", (function() {
        return p
    })), n.d(t, "f", (function() {
        return f
    })), n.d(t, "j", (function() {
        return h
    })), n.d(t, "i", (function() {
        return b
    }));
    var r = n(3);
    const i = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
        o = [".intercom-lightweight-app-launcher", ".intercom-launcher-frame", "#intercom-container", ".intercom-messenger", ".intercom-notifications"];

    function s(e) {
        try {
            if (!(e in window)) return !1;
            const t = window[e];
            return null !== t && (t.setItem("intercom-test", "0"), t.removeItem("intercom-test"), !0)
        } catch (e) {
            return !1
        }
    }

    function a() {
        return s("localStorage")
    }

    function c() {
        return !!(window.FileReader && window.File && window.FileList && window.FormData)
    }

    function u() {
        const e = p().userAgent;
        return !!e && (null !== e.match(i) && void 0 !== window.parent)
    }

    function d() {
        const e = p().vendor || "",
            t = p().userAgent || "";
        return 0 === e.indexOf("Apple") && /\sSafari\//.test(t)
    }

    function l(e = window) {
        const t = p(),
            n = "Google Inc." === t.vendor && !e.chrome;
        return "" === t.languages && (t.webdriver || n)
    }

    function p() {
        return navigator || {}
    }

    function f(e = p().userAgent) {
        return /iPad|iPhone|iPod/.test(e) && !window.MSStream
    }

    function h() {
        return !Object(r.a)() && o.some(e => {
            const t = window.parent.document.querySelector(e);
            if (t) {
                const e = window.getComputedStyle(t);
                return null === e || "none" === e.display
            }
        })
    }
    const b = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
    t.a = {
        hasXhr2Support: function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        },
        hasLocalStorageSupport: a,
        hasSessionStorageSupport: function() {
            return s("sessionStorage")
        },
        hasFileSupport: c,
        hasAudioSupport: function() {
            const e = document.createElement("audio");
            return !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
        },
        hasVisibilitySupport: function() {
            return void 0 !== document.hidden || void 0 !== document.mozHidden || void 0 !== document.msHidden || void 0 !== document.webkitHidden
        },
        messengerIsVisible: function() {
            return !!Object(r.a)() || o.some(e => {
                const t = window.parent.document.querySelector(e);
                if (t) {
                    const e = t.getBoundingClientRect();
                    return e && e.width > 0 && e.height > 0
                }
            })
        },
        messengerHasDisplayNoneSet: h,
        isMobileBrowser: u,
        isIOSFirefox: function() {
            return !!p().userAgent.match("FxiOS")
        },
        isFirefox: function() {
            return !!p().userAgent.match("Firefox")
        },
        isSafari: d,
        isElectron: function() {
            const e = p().userAgent || "",
                t = (Object(r.a)() ? window : window.parent) || {},
                n = t.process && t.versions && t.versions.electron;
            return /\sElectron\//.test(e) || n
        },
        isIE: function() {
            const e = p().userAgent || "";
            return e.indexOf("MSIE") > 0 || e.indexOf("Trident") > 0
        },
        isEdge: function() {
            return (p().userAgent || "").indexOf("Edge") > 0
        },
        isNativeMobile: function() {
            return p().isNativeMobile
        },
        isChrome: function() {
            const e = window.chrome,
                t = p().vendor,
                n = p().userAgent.indexOf("OPR") > -1,
                r = p().userAgent.indexOf("Edge") > -1;
            return !!p().userAgent.match("CriOS") || null != e && "Google Inc." === t && !1 === n && !1 === r
        },
        isIOS: f,
        isAndroid: function(e = p().userAgent) {
            return e && e.toLowerCase().indexOf("android") > -1
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(86),
        o = n(39),
        s = n(67),
        a = n(1),
        c = Object(a.createSelector)(e => Object(s.a)(e.conversations.byId), e => e.filter(e => !e.read && e.dismissed)),
        u = n(50),
        d = n(2),
        l = n(5),
        p = n(63),
        f = n(45),
        h = n(0);
    const b = "delivered",
        _ = "renotifying";
    n.d(t, "e", (function() {
        return m
    })), n.d(t, "m", (function() {
        return O
    })), n.d(t, "a", (function() {
        return S
    })), n.d(t, "l", (function() {
        return v
    })), n.d(t, "i", (function() {
        return y
    })), n.d(t, "k", (function() {
        return C
    })), n.d(t, "j", (function() {
        return I
    })), n.d(t, "h", (function() {
        return A
    })), n.d(t, "f", (function() {
        return R
    })), n.d(t, "g", (function() {
        return j
    })), n.d(t, "c", (function() {
        return M
    })), n.d(t, "d", (function() {
        return L
    })), n.d(t, "n", (function() {
        return k
    }));
    const {
        assign: g
    } = Object;

    function m() {
        return (e, t) => {
            const {
                launcherDiscoveryMode: {
                    isLauncherDiscoveryModeOpening: n
                }
            } = t();
            n ? (e(Object(i.d)()), setTimeout(() => e(O()), 100), setTimeout(() => e(Object(i.a)()), 100)) : e(O())
        }
    }

    function O() {
        return (e, t) => {
            const {
                conversations: n,
                borderless: {
                    conversationId: r
                }
            } = t(), i = n.byId[r];
            r ? (e(j(r)), function(e) {
                return e && -1 !== [b, _].indexOf(e.notificationStatus)
            }(i) && e(Object(l.p)(d.b, r, ["opened"]))) : e((e, t) => {
                const {
                    app: {
                        isMessengerOpen: n
                    }
                } = t();
                e(n ? S() : e => {
                    e(P()), e({
                        type: "OPEN_MESSENGER"
                    }), e(Object(p.a)())
                })
            })
        }
    }

    function E() {
        return {
            type: "OPEN_MESSENGER"
        }
    }

    function S(e = !1) {
        return {
            type: "CLOSE_MESSENGER",
            fromCloseButton: e
        }
    }

    function v(e = "", t = !1) {
        return {
            type: "SHOW_NEW_CONVERSATION",
            defaultMessage: e,
            replaceCurrentView: t
        }
    }

    function y() {
        return {
            type: "SHOW_BROWSE_MODE"
        }
    }

    function C() {
        return {
            type: "SHOW_INLINE_ARTICLE_VIEW"
        }
    }

    function I() {
        return {
            type: "SHOW_CONVERSATIONS"
        }
    }

    function T() {
        return {
            type: "SHOW_EMPTY_SCREEN"
        }
    }

    function w(e = !1) {
        return {
            type: "SHOW_MESSENGER_TRIGGER_SCREEN",
            replaceCurrentView: e
        }
    }

    function A() {
        return e => {
            e(w(!0)), e({
                type: "OPEN_MESSENGER"
            })
        }
    }

    function R(e) {
        return t => {
            t(Object(f.a)(e)), t({
                type: "OPEN_MESSENGER"
            })
        }
    }

    function j(e) {
        return t => {
            t(Object(p.a)()), t(R(e)), t(Object(l.l)(d.b, e))
        }
    }

    function N(e) {
        return t => {
            t(Object(f.a)(e)), t(Object(l.l)(d.b, e))
        }
    }

    function M(e) {
        return t => t(Object(l.l)(d.b, e)).then(() => t(R(e)))
    }

    function P() {
        return (e, t) => {
            const n = t(),
                {
                    app: i,
                    user: s,
                    message: a
                } = n,
                {
                    features: d,
                    inboundConversationsDisabled: l,
                    viewStack: f,
                    isBooting: h
                } = i,
                {
                    hasConversations: b,
                    homeScreenSlots: _,
                    articleConversationId: g
                } = s,
                m = Object(u.b)(n),
                O = _ && _.length > 0,
                E = Object(o.a)(n),
                S = c(n),
                y = function(e, t) {
                    return "user" === e.role && t.inboundMessages || "user" !== e.role && t.anonymousInboundMessages
                }(s, d),
                C = Object(r.k)(n);
            h || (y ? m > 1 ? (e({
                type: "SHOW_HOME_SCREEN"
            }), D(s, "homescreen")) : a && a.conversationId ? (e(N(a.conversationId)), e(Object(p.a)()), D(s, "conversation-from-auto-message")) : 1 === E.length ? (e(N(E[0].id)), D(s, "conversation-from-notification")) : 1 === S.length ? (e(N(S[0].id)), D(s, "conversation-from-dismissed")) : g ? (e(N(g)), D(s, "conversation-from-article")) : f.length || (O || b || C ? (e({
                type: "SHOW_HOME_SCREEN"
            }), D(s, "homescreen")) : l ? O ? (e({
                type: "SHOW_HOME_SCREEN"
            }), D(s, "homescreen")) : (e({
                type: "SHOW_EMPTY_SCREEN"
            }), D(s, "empty-screen")) : (e(v()), D(s, "new-conversation"))) : (e({
                type: "SHOW_EMPTY_SCREEN"
            }), D(s, "empty-screen")))
        }
    }

    function D(e, t = "homescreen") {
        h.j.buildAndAddMetric(e, t, "initial-screen", "messenger", "from_launcher")
    }

    function U(e, t) {
        const n = t(),
            i = function(e) {
                return g({}, e, {
                    viewStack: e.viewStack.slice(0, -1)
                })
            }(n.app);
        Object(r.g)(n) && "messenger-trigger" === Object(r.d)(i) ? e({
            type: "SHOW_HOME_SCREEN"
        }) : Object(r.g)(n) ? e({
            type: "MESSENGER_NAVIGATE_BACK"
        }) : e({
            type: "SHOW_HOME_SCREEN"
        })
    }

    function L() {
        return U
    }

    function k() {
        return {
            type: "TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE"
        }
    }
    t.b = {
        closeMessenger: S,
        getAndOpenConversation: M,
        navigateBack: L,
        onLauncherClick: m,
        openConversation: R,
        openConversationInMessenger: j,
        openConversations: function() {
            return e => {
                e({
                    type: "SHOW_CONVERSATIONS"
                }), e({
                    type: "OPEN_MESSENGER"
                })
            }
        },
        openMessenger: E,
        openNewConversation: function(e) {
            return (t, n) => {
                n().app.inboundConversationsDisabled || t(v(e)), t({
                    type: "OPEN_MESSENGER"
                })
            }
        },
        showAndGetConversation: N,
        showConversation: f.a,
        showConversations: I,
        showEmptyScreen: T,
        showMessengerTriggerScreen: w,
        showInitialScreen: P,
        showNewConversation: v,
        showBrowseMode: y,
        showInlineArticleView: C,
        toggleMessenger: O,
        toggleUpfrontEmailCollectorState: k,
        openMessengerLoadingView: A
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    }));
    var r = n(3),
        i = n(90),
        o = n(8);
    const s = e => ({
            get: t => {
                try {
                    return e.getItem(`intercom.${t}`)
                } catch (e) {}
            },
            set: (t, n) => {
                try {
                    return e.setItem(`intercom.${t}`, n || "")
                } catch (e) {}
            },
            remove: t => {
                try {
                    return e.removeItem(`intercom.${t}`)
                } catch (e) {}
            },
            clear: () => {
                try {
                    e.clear()
                } catch (e) {}
            }
        }),
        a = Object(r.a)() ? Object(i.b)() : o.a.hasLocalStorageSupport() ? s(localStorage) : {
            get: () => {},
            set: () => {},
            remove: () => {},
            clear: () => {}
        },
        c = Object(r.a)() ? Object(i.c)() : o.a.hasSessionStorageSupport() ? s(sessionStorage) : {
            get: () => {},
            set: () => {},
            remove: () => {},
            clear: () => {}
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return a
    })), n.d(t, "d", (function() {
        return d
    })), n.d(t, "h", (function() {
        return l
    })), n.d(t, "a", (function() {
        return p
    })), n.d(t, "e", (function() {
        return f
    })), n.d(t, "g", (function() {
        return h
    })), n.d(t, "k", (function() {
        return b
    })), n.d(t, "b", (function() {
        return g
    })), n.d(t, "j", (function() {
        return m
    })), n.d(t, "c", (function() {
        return O
    })), n.d(t, "i", (function() {
        return E
    })), n.d(t, "l", (function() {
        return S
    }));
    var r = n(1),
        i = n(41),
        o = n(6),
        s = n(16);
    const a = ({
            app: e
        }) => e.features,
        c = ({
            viewStack: e
        }) => e,
        u = Object(r.createSelector)(c, e => !!e && e.length > 1),
        d = Object(r.createSelector)(c, e => e && e.length > 0 ? e[e.length - 1] : void 0),
        l = Object(r.createSelector)(c, e => !e || 0 === e.length);

    function p(e) {
        return e.app.accessToTeammateEnabled
    }
    const f = ({
            app: e
        }) => d(e),
        h = ({
            app: e
        }) => u(e),
        b = Object(r.createSelector)(a, e => !!e.searchBrowse);

    function _(e) {
        const {
            user: t,
            app: n
        } = e;
        return !n.inboundConversationsDisabled && ("user" === t.role ? n.features.inboundMessages : n.features.anonymousInboundMessages)
    }
    const g = e => ({
            allowNewConversation: _(e)
        }),
        m = e => {
            const {
                app: t
            } = e;
            return t.launcherLogoUrl
        },
        O = e => !(_(e) || !e.app.helpCenterSiteUrl),
        E = (e, {
            currentView: t
        }) => "home-screen" !== t && "empty-screen" !== t,
        S = e => {
            if (!e) return !1;
            const {
                officeHoursResponse: t
            } = e.app, n = {
                only_outside_of_office_hours: !!t,
                always: !0,
                never: !1
            }, {
                role: r,
                userSuppliedEmail: a
            } = e.user, {
                upfrontEmailCollectionSetting: c,
                upfrontEmailCollectionSubmitted: u
            } = e.app.upfrontEmailCollection, d = e.session && e.session.email, l = Object(i.b)(e);
            return (!l || !l.isEmailAttributeCollectorInserted) && (!a && (-1 !== ["visitor", "lead"].indexOf(r) && (!d && (!u && (! function(e) {
                return !!e && (Object(o.i)(e) && !Object(s.a)(e.parts).author.isBot)
            }(l) && n[c])))))
        }
}, function(e, t, n) {
    "use strict";
    let r = 0;
    t.a = (e, t = {}, n) => {
        const i = {
            type: e,
            payload: t
        };
        if (n) {
            i.callbackId = r++;
            const e = t => {
                const {
                    type: r,
                    callbackId: o,
                    payload: s
                } = t.data;
                "intercom:callback" === r && o === i.callbackId && (window.removeEventListener("message", e), n(s))
            };
            window.addEventListener("message", e)
        }
        window.parent.postMessage(i, "*")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        console && console.warn(e)
    }

    function i(e) {
        console && console.error(e)
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }))
}, , function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return h
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "f", (function() {
        return _
    })), n.d(t, "j", (function() {
        return g
    })), n.d(t, "o", (function() {
        return m
    })), n.d(t, "a", (function() {
        return O
    })), n.d(t, "n", (function() {
        return E
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "g", (function() {
        return v
    })), n.d(t, "d", (function() {
        return y
    })), n.d(t, "l", (function() {
        return C
    })), n.d(t, "k", (function() {
        return I
    })), n.d(t, "m", (function() {
        return A
    })), n.d(t, "b", (function() {
        return R
    })), n.d(t, "i", (function() {
        return j
    }));
    var r = n(14),
        i = n.n(r),
        o = n(8),
        s = n(13),
        a = n(0);
    let c = !1,
        u = !1,
        d = 0,
        l = !1,
        p = !1,
        f = !1;
    const h = e => !!e && !!e[0] && "attachmentList" === e[0].type,
        b = e => {
            if (e) return e.isActive ? "active" : "away"
        },
        _ = e => {
            if (!e || !e.lastActiveAt) return;
            const t = new Date;
            return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4)
        },
        g = e => i()(e),
        m = e => {
            c = e
        },
        O = () => c,
        E = e => {
            u = e
        },
        S = () => u,
        v = () => {
            d += 1
        },
        y = () => d;

    function C(e, t) {
        try {
            const n = w(),
                r = e.parts[e.parts.length - 1].author.isBot;
            if (n || !r || !t) return;
            Object(a.g)("timeToFirstBotResponse", {
                duration_ms: Date.now() - t
            }), T(!0)
        } catch (e) {
            Object(s.a)(`Failure while recording trigger transition duration ${e}`)
        }
    }

    function I(e, t, n) {
        try {
            let r = f;
            const i = e.parts[e.parts.length - 1].author.isBot;
            if (r || !i || !t || Math.abs(n - t) > 50) return void(f = !0);
            Object(a.g)("durationFromCreateConversationToOperatorReply", {
                duration_ms: Date.now() - t
            }), f = !0
        } catch (e) {
            Object(s.a)(`Failure while recording trigger transition duration ${e}`)
        }
    }
    const T = e => {
            p = e
        },
        w = () => p,
        A = e => {
            l = e
        },
        R = () => l,
        j = e => !!e && o.a.messengerIsVisible()
}, function(e, t, n) {
    "use strict";
    t.a = e => {
        if (e) return e[e.length - 1]
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    }));

    function r() {
        const e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
            const n = (e + 16 * Math.random()) % 16 | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        })
    }
    t.a = {
        generateUUID: r
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "k", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "i", (function() {
        return a
    })), n.d(t, "g", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "j", (function() {
        return d
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "f", (function() {
        return f
    })), n.d(t, "l", (function() {
        return h
    })), n.d(t, "o", (function() {
        return b
    })), n.d(t, "n", (function() {
        return _
    })), n.d(t, "b", (function() {
        return g
    })), n.d(t, "m", (function() {
        return O
    })), n.d(t, "h", (function() {
        return E
    }));
    var r = n(1);
    const i = e => e.tour,
        o = (Object(r.createSelector)(i, e => e.isFetching), Object(r.createSelector)(i, e => e.isFetched)),
        s = (Object(r.createSelector)(i, e => e.fetchingFailed), Object(r.createSelector)(i, e => e.activeTour)),
        a = Object(r.createSelector)(i, e => e.isPreviewing),
        c = Object(r.createSelector)(i, e => e.updateFailed),
        u = Object(r.createSelector)(i, e => {
            if (e.activeTour) return e.activeTour.author
        }),
        d = Object(r.createSelector)(i, e => !(!e.activeTour || !e.activeTour.isCompleted)),
        l = Object(r.createSelector)(i, e => {
            if (e.activeTour) return e.activeTour.steps.length
        }),
        p = Object(r.createSelector)(i, e => {
            const t = e.activeTour;
            if (t) return t.steps.findIndex(e => e.id === t.activeStepId)
        }),
        f = Object(r.createSelector)(i, e => {
            const t = e.activeTour;
            if (!t) return;
            const {
                steps: n,
                activeStepId: r
            } = t;
            return t ? n.find(e => e.id === r) : void 0
        }),
        h = Object(r.createSelector)(i, e => {
            const t = e.activeTour;
            if (!t) return;
            const {
                steps: n,
                activeStepId: r
            } = t, i = n.findIndex(e => e.id === r);
            return n[i + 1]
        }),
        b = Object(r.createSelector)(i, e => e.videoAudioMuted),
        _ = Object(r.createSelector)(i, e => e.userHasInteractedWithVideo),
        g = Object(r.createSelector)(i, e => {
            const t = e.activeTour;
            if (t) return t.endTourAnimation
        }),
        m = Object(r.createSelector)(p, l, (e, t) => e + 1 === t),
        O = Object(r.createSelector)(g, m, (e, t) => "confetti" === e && t),
        E = Object(r.createSelector)(i, e => e.isAwaitingProgress)
}, function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return d
    })), n.d(t, "b", (function() {
        return l
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "e", (function() {
        return f
    })), n.d(t, "i", (function() {
        return h
    })), n.d(t, "c", (function() {
        return b
    })), n.d(t, "a", (function() {
        return _
    })), n.d(t, "f", (function() {
        return g
    })), n.d(t, "g", (function() {
        return m
    }));
    var r, i = n(3),
        o = n(22);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = null === (r = window) || void 0 === r ? void 0 : r.parent,
        u = [];
    const d = e => {
            c = e, Object(i.a)() || window.parent.addEventListener("resize", e => u.forEach(t => t(e)))
        },
        l = () => {
            var e, t;
            return Object(i.a)() ? c.title : null === (e = c) || void 0 === e ? void 0 : null === (t = e.document) || void 0 === t ? void 0 : t.title
        },
        p = () => {
            var e;
            return Object(i.a)() ? c.location : null === (e = c) || void 0 === e ? void 0 : e.location
        },
        f = () => {
            var e, t;
            return Object(i.a)() ? c.referrer : null === (e = c) || void 0 === e ? void 0 : null === (t = e.document) || void 0 === t ? void 0 : t.referrer
        },
        h = e => {
            Object(i.a)() && (c = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(n, !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, c, {}, e), u.forEach(e => e(c)))
        },
        b = () => {
            var e, t;
            return {
                innerWidth: null === (e = c) || void 0 === e ? void 0 : e.innerWidth,
                innerHeight: null === (t = c) || void 0 === t ? void 0 : t.innerHeight
            }
        },
        _ = e => {
            u.push(e)
        },
        g = e => u = u.filter(t => t !== e),
        m = e => Object(o.k)(e)
}, function(e, t, n) {
    "use strict";
    var r = e => ({
            data: t
        }) => {
            const {
                type: n,
                payload: r
            } = t, i = e[n];
            i && i(r)
        },
        i = n(12),
        o = () => Object(i.a)("intercom:ready"),
        s = (e, t, n) => Object(i.a)("intercom:create-or-update-frame", {
            name: e,
            styles: t
        }, n),
        a = e => Object(i.a)("intercom:destroy-frame", {
            name: e
        }),
        c = e => Object(i.a)("intercom:write-cookie", {
            cookie: e
        }),
        u = e => Object(i.a)("intercom:request-animation-frame", {}, e),
        d = (e, t) => Object(i.a)("intercom:open-url", {
            url: e,
            openNatively: t
        }),
        l = (e, t, n) => Object(i.a)("intercom:set-storage-item", {
            key: e,
            value: t,
            type: n
        }),
        p = (e, t) => Object(i.a)("intercom:remove-storage-item", {
            key: e,
            type: t
        }),
        f = e => Object(i.a)("intercom:get-storage", {}, e),
        h = (e, t) => Object(i.a)("intercom:get-dom-element", {
            selector: e
        }, t),
        b = (e, t) => Object(i.a)("intercom:delayed-node-visibility-check", e, t);
    let _ = 0;
    var g = (e, t = {}, n) => {
        const r = _++,
            i = {
                type: "intercom:add-event-listener",
                event: e,
                payload: t,
                listenerId: r
            },
            o = e => {
                const {
                    type: t,
                    listenerId: r,
                    payload: o
                } = e.data;
                "intercom:event" === t && r === i.listenerId && n(o)
            };
        return window.addEventListener("message", o), window.parent.postMessage(i, "*"), () => {
            (e => {
                window.parent.postMessage({
                    type: "intercom:remove-event-listener",
                    listenerId: e
                }, "*")
            })(r), window.removeEventListener("message", o)
        }
    };
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "i", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "m", (function() {
        return c
    })), n.d(t, "l", (function() {
        return l
    })), n.d(t, "j", (function() {
        return p
    })), n.d(t, "g", (function() {
        return f
    })), n.d(t, "k", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "f", (function() {
        return h
    })), n.d(t, "d", (function() {
        return b
    })), n.d(t, "a", (function() {
        return g
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "f", (function() {
        return c
    }));
    const r = () => "intercom-id",
        i = e => `intercom-id-${e}`,
        o = e => `intercom-session-${e}`,
        s = () => "_mkto_trk",
        a = () => "hubspotutk",
        c = () => "1" === navigator.doNotTrack
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "l", (function() {
        return o
    })), n.d(t, "m", (function() {
        return s
    })), n.d(t, "B", (function() {
        return a
    })), n.d(t, "s", (function() {
        return c
    })), n.d(t, "f", (function() {
        return u
    })), n.d(t, "r", (function() {
        return d
    })), n.d(t, "z", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "A", (function() {
        return f
    })), n.d(t, "b", (function() {
        return h
    })), n.d(t, "x", (function() {
        return b
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "y", (function() {
        return g
    })), n.d(t, "d", (function() {
        return m
    })), n.d(t, "j", (function() {
        return O
    })), n.d(t, "o", (function() {
        return E
    })), n.d(t, "h", (function() {
        return S
    })), n.d(t, "g", (function() {
        return v
    })), n.d(t, "q", (function() {
        return y
    })), n.d(t, "n", (function() {
        return C
    })), n.d(t, "w", (function() {
        return I
    })), n.d(t, "v", (function() {
        return T
    })), n.d(t, "t", (function() {
        return w
    })), n.d(t, "u", (function() {
        return A
    })), n.d(t, "p", (function() {
        return R
    })), n.d(t, "i", (function() {
        return j
    })), n.d(t, "k", (function() {
        return N
    }));
    var r = n(34);
    const i = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32
        },
        o = e => e.scrollHeight - e.clientHeight - e.scrollTop,
        s = e => e.scrollTop / (e.scrollHeight - e.clientHeight),
        a = (e, t = 0) => {
            e && (e.scrollTop = t)
        },
        c = (e, t = 0) => {
            const {
                scrollTop: n,
                scrollHeight: r,
                clientHeight: i
            } = e;
            return r - n - i < t + 1
        },
        u = e => {
            if (!e) return 0;
            const {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: r
            } = e;
            return n - r - t
        },
        d = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            return t > n
        },
        l = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            e.scrollTop = t - n
        },
        p = e => {
            const {
                scrollHeight: t,
                clientHeight: n
            } = e;
            if (!e.scrollBy) return l(e);
            e.scrollBy({
                top: t - n,
                left: 0,
                behavior: "smooth"
            })
        },
        f = (e, t) => {
            const {
                bottom: n,
                top: r,
                height: i
            } = e.getBoundingClientRect(), {
                bottom: o,
                top: s,
                height: a
            } = t.getBoundingClientRect();
            if (!(r < s) && !(n > o)) return;
            let c = e.offsetTop;
            for (; e;) {
                const {
                    position: t
                } = window.getComputedStyle(e);
                "relative" === t && (c += e.offsetTop - e.scrollTop + e.clientTop), e = e.offsetParent
            }
            t.scrollTop = c - Math.trunc(a / 2) + Math.trunc(i / 2)
        },
        h = (e, t) => {
            const n = e.className.split(" ");
            n.some(e => e === t) || (n.push(t), e.className = n.join(" ").trim())
        },
        b = (e, t) => {
            e.className = e.className.split(" ").filter(e => e !== t).join(" ")
        },
        _ = (e, t, n, r = !1) => {
            null != e && (e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent(`on${t}`, n))
        },
        g = (e, t, n) => {
            null != e && (e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent(`on${t}`, n))
        },
        m = e => {
            const t = e.currentTarget,
                {
                    scrollTop: n,
                    scrollHeight: r,
                    clientHeight: i
                } = t,
                {
                    deltaY: o
                } = e,
                s = o > 0;
            s && o > r - i - n ? t.scrollTop = r : !s && -o > n ? t.scrollTop = 0 : e.stopPropagation()
        },
        O = e => {
            if (e && "selectionStart" in e) return e.selectionStart
        },
        E = (e, t, n) => e.slice(0, n) + t + e.slice(n),
        S = (e, t = -1) => {
            e && (e.focus(), "setSelectionRange" in e && t >= 0 && e.setSelectionRange(t, t))
        };

    function v(e, t, n) {
        const r = e.document || e.ownerDocument;
        return e => {
            const i = [];
            Array.from(r.querySelectorAll(t)).forEach(e => i.push(e));
            let {
                target: o
            } = e;
            for (; o && o !== this;) {
                if (i.indexOf(o) > -1) {
                    n.call(o, e);
                    break
                }
                o = o.parentNode
            }
        }
    }
    const y = e => void 0 !== e.hidden ? !e.hidden : void 0 !== e.mozHidden ? !e.mozHidden : void 0 !== e.msHidden ? !e.msHidden : void 0 === e.webkitHidden || !e.webkitHidden,
        C = () => {
            let e;
            return void 0 !== document.hidden ? e = "visibilitychange" : void 0 !== document.mozHidden ? e = "mozvisibilitychange" : void 0 !== document.msHidden ? e = "msvisibilitychange" : void 0 !== document.webkitHidden && (e = "webkitvisibilitychange"), e
        },
        I = (e, t = {}) => {
            const n = document.createElement("form");
            n.setAttribute("target", "_blank"), n.setAttribute("method", "post"), n.setAttribute("action", e), Object.keys(t).forEach(e => {
                const r = document.createElement("input");
                r.type = "hidden", r.name = e, r.value = t[e], n.appendChild(r)
            }), document.body.appendChild(n), n.submit(), document.body.removeChild(n)
        },
        T = e => t => (t.keyCode === i.ENTER || t.keyCode === i.SPACE) && e(t),
        w = e => e.keyCode === i.TAB && !(-1 !== ["INPUT", "TEXTAREA", "BUTTON"].indexOf(e.target.tagName)),
        A = e => {
            if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        R = e => e.keyCode === i.ESC,
        j = e => Array.from(e.querySelectorAll('button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')).filter(e => !e.closest('[aria-hidden="true"]')),
        N = e => Object(r.b)(e) ? "rtl" : "ltr"
}, , , function(e, t, n) {
    "use strict";

    function r(e) {
        if (null != e) return new Date(1e3 * e)
    }

    function i(e) {
        return Date.now() - 1e3 * e
    }
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), t.b = {
        timestampToDate: r,
        now: function() {
            return function() {
                const e = Date.now;
                return "function" == typeof e && !("prototype" in e)
            }() ? Date.now() : (new Date).getTime()
        },
        calculateDurationInMs: i
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(13),
        i = n(46);
    const o = (e, t, n) => (o, d) => {
            const {
                messengerCards: l
            } = d(), p = n && l && l[t.uri], f = Object(i.c)(t);
            if (o(a(f)), p && s(p.card) && !f.canvas.content && (f.canvas = Object.assign({}, f.canvas, p.card.canvas)), f.canvas.content) return void o(c(f, f.canvas.content));
            const {
                session: h
            } = d();
            return e.getMessengerCanvasWithContent(h, f.canvas.id, f.uri).then(e => {
                o(c(f, e.content))
            }).catch(e => {
                o(u(f)), Object(r.a)(`There was a problem retrieving the live card content: ${e}`)
            })
        },
        s = e => !(!e || !e.canvas),
        a = e => ({
            type: "GET_CARD_CONTENT_REQUEST",
            card: e
        }),
        c = (e, t) => ({
            type: "GET_CARD_CONTENT_SUCCESS",
            card: e,
            content: t
        }),
        u = e => ({
            type: "GET_CARD_CONTENT_FAILURE",
            card: e
        })
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "f", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "g", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    }));
    const r = ["https://app.intercom.com", "https://app.intercom.io"];

    function i(e, t) {
        e.opener && e.opener.postMessage(t, "*")
    }

    function o(e, t = {}) {
        return {
            boundEventCreator: Object.assign({
                type: e
            }, t)
        }
    }
    const s = {
            CLICK: {
                key: "click",
                title: "Clicks",
                description: "When people click on a button or link"
            },
            VISIT: {
                key: "visit",
                title: "Page views",
                description: "When people view a page"
            }
        },
        a = {
            CHOOSE_EVENT_TYPE: "CHOOSE_EVENT_TYPE",
            CONFIRM_URL: "CONFIRM_URL",
            SELECT_CLICK_ELEMENT: "SELECT_CLICK_ELEMENT"
        };

    function c(e, t) {
        e.addEventListener("message", e => {
            if (-1 === r.indexOf(e.origin)) return;
            const {
                boundEventCreator: n
            } = e.data;
            n && "open" === n.type && t(n.boundEventCreatorState)
        })
    }

    function u(e) {
        i(e, o("ready"))
    }

    function d(e, t) {
        i(e, o("updateStage", {
            newStage: t
        }))
    }

    function l(e, t) {
        i(e, o("updateData", {
            eventData: t
        }))
    }

    function p(e, t) {
        i(e, o("newEvent", {
            newEvent: t
        }))
    }

    function f(e) {
        i(e, o("closed"))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        i = n.n(r),
        o = n(47),
        s = n.n(o),
        a = n(20),
        c = n(9),
        u = n(51),
        d = n(0),
        l = n(7),
        p = n(2),
        f = n(53);

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class tour_progress_CheckIfTourReadyToProgress {
        constructor(e, t) {
            h(this, "whenReady", void 0), h(this, "state", void 0), h(this, "activeStep", void 0), h(this, "nextStep", void 0), this.state = e, this.whenReady = t, this.activeStep = Object(a.f)(e), this.nextStep = Object(a.l)(e), this._check()
        }
        _check() {
            return "click" === this.activeStep.progressionBehavior ? (Object(l.d)("Click to progress behavior detected."), this._evaluateProgressionByClick()) : this.whenReady()
        }
        _evaluateProgressionByClick() {
            let e = 0,
                t = 0;
            this._pageNeedsRedirection() ? (Object(l.d)("Step url for the next step is different so the tour will wait 2s for the page to reload"), e = 2e3) : Object(l.d)("No page redirection detected."), this._nextStepIsPointer() && (Object(l.d)("The page is going to wait upto 5s for the next step's selector to become visible in page"), t = 5e3), new l.a(this.nextStep.selector, t, e, this.whenReady)
        }
        _pageNeedsRedirection() {
            return this.activeStep.url !== this.nextStep.url
        }
        _nextStepIsPointer() {
            return !!this.nextStep.selector
        }
    }
    var b = n(10),
        _ = n(8);
    n.d(t, "e", (function() {
        return m
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "f", (function() {
        return v
    })), n.d(t, "b", (function() {
        return y
    })), n.d(t, "d", (function() {
        return I
    })), n.d(t, "a", (function() {
        return w
    })), n.d(t, "j", (function() {
        return A
    })), n.d(t, "h", (function() {
        return R
    })), n.d(t, "g", (function() {
        return j
    })), n.d(t, "i", (function() {
        return N
    }));

    function g(e) {
        return Object(a.g)(e) || Object(a.i)(e) || Object(a.j)(e)
    }

    function m() {
        return async (e, t) => {
            const n = t(),
                {
                    session: r
                } = t(),
                {
                    id: i,
                    progressId: o
                } = Object(a.c)(n),
                s = Object(a.l)(n);
            if (s) {
                if (Object(l.d)(`Tour with id ${i} is attempting to progress to step ${s}`), !g(n)) {
                    e({
                        type: "PROGRESS_TOUR_REQUEST_STARTED"
                    });
                    try {
                        await p.b.progressTour(r, i, s.id, o)
                    } catch (t) {
                        e({
                            type: "TOUR_UPDATE_FAILED"
                        }), Object(l.d)(`Could not update tour due to e=${t}`)
                    }
                }
                Object(a.i)(n) && b.b.set("tour_progress_preview", s.id), new tour_progress_CheckIfTourReadyToProgress(n, () => {
                    e(function(e, t) {
                        return {
                            type: "PROGRESS_TOUR",
                            activeStepId: e,
                            progressId: t
                        }
                    }(s.id, o)), e({
                        type: "PROGRESS_TOUR_REQUEST_FINISHED"
                    })
                })
            } else window.parent && window.parent.postMessage("exit_tour_preview", "*"),
                function(e) {
                    O("intercom:tourComplete", {
                        tourId: e
                    })
                }(i), e(function(e) {
                    return {
                        type: "COMPLETE_TOUR",
                        progressId: e
                    }
                }(o))
        }
    }

    function O(e, t) {
        if (!Object(f.a)()) return;
        const n = new CustomEvent(e, {
            detail: t
        });
        window.parent.document.dispatchEvent(n)
    }

    function E(e) {
        O("intercom:tourError", {
            tourId: e
        })
    }

    function S() {
        return (e, t) => {
            const n = t(),
                {
                    id: r,
                    progressId: i
                } = Object(a.c)(n),
                {
                    session: o
                } = t();
            Object(l.d)(`Tour with id ${r} marked as complete`), g(n) || (e({
                type: "MARK_ACTIVE_TOUR_AS_COMPLETED"
            }), p.b.completeTour(o, r, i))
        }
    }

    function v() {
        return (e, t) => {
            const n = t(),
                {
                    id: r,
                    progressId: i
                } = Object(a.c)(n),
                o = Object(a.f)(n);
            var s, c, u;
            if (!g(n)) return E(r), p.b.recordTourFailure(n.session, r, o.id, o.selector, null === (s = window) || void 0 === s ? void 0 : null === (c = s.parent) || void 0 === c ? void 0 : null === (u = c.location) || void 0 === u ? void 0 : u.pathname, i)
        }
    }

    function y() {
        return e => {
            var t, n;
            if (Object(_.g)()) return;
            const r = C(null === (t = window) || void 0 === t ? void 0 : null === (n = t.parent) || void 0 === n ? void 0 : n.location);
            if (Object(l.d)("Checking if URL has tour attached"), r) {
                const t = "tour_triggered_from_url";
                let n = JSON.parse(b.b.get(t));
                n = n || [], n.indexOf(r) > -1 ? Object(l.d)(`Tour with id ${r} has already been triggered`) : (Object(l.d)(`Tour id ${r} attached in the url`), e(I(r)), n.push(r), b.b.set(t, JSON.stringify(n)))
            } else Object(l.d)("No attached tour found in the URL")
        }
    }
    const C = e => {
        if (!e) return;
        let t = Object(u.a)(e).product_tour_id;
        if (!t) {
            const n = e.toString();
            if (!n) return;
            const r = n.match(/product_tour_id=(\d+)/i);
            r && (t = r[1])
        }
        return t
    };

    function I(e) {
        return async (t, n) => {
            const r = Object(a.c)(n()),
                {
                    session: i
                } = n();
            if (r) Object(l.d)(`Active tour with id ${r.id} already found so tour id ${e} won't be fetched`);
            else {
                Object(l.d)(`Will attempt to fetch tour with id ${e}`);
                try {
                    t(A(await p.b.fetchTour({
                        session: i,
                        tourId: e
                    })))
                } catch (t) {
                    e && E(e), Object(l.d)(`Could not fetch or start tour due to e=${t}`)
                }
            }
        }
    }

    function T(e, t) {
        return {
            type: "FETCH_TOUR_SUCCESS",
            tour: e,
            isPreviewingTour: t
        }
    }

    function w(e) {
        return {
            type: "CHANGE_VIDEO_MUTED",
            muted: e
        }
    }

    function A(e) {
        return (t, n) => {
            const {
                user: r
            } = n(), o = Object(a.c)(n());
            if (!i()(o)) return Object(l.d)("There is already an active tour", o), void Object(l.d)("The tour won't attempt to start", e);
            const u = function(e) {
                if (!e.steps) return;
                const {
                    activeStepId: t,
                    steps: n
                } = e, r = n.findIndex(e => parseInt(e.id, 10) === parseInt(t, 10)), i = n.slice(r).find(e => !s()(e.selector));
                return i ? i.selector : void 0
            }(e);
            u ? (Object(l.d)("Checking if selector of the first active pointer step is visible on the page", e), new l.a(u, null, 0, n => {
                n ? (Object(l.d)("Node is visible. Tour is attempting to start", e), t(T(e, !1)), t(Object(c.a)()), Object(d.h)(r, "received", "tour", "messenger", null, {
                    tour_id: e.id
                })) : (Object(l.d)("Node is not visible. Tour will not start", e), function(e, t) {
                    Object(f.a)() && (Object(d.c)("tour_failed_css_evaluation", {
                        tour_id: e
                    }), Object(d.b)(`tour_failed_css_evaluation tour_id=${e}`)), Object(d.h)(t, "received_but_failed_css_evaluation", "tour", "messenger", null, {
                        tour_id: e
                    })
                }(e.id, r), E(e.id))
            })) : (Object(l.d)("Tour is attempting to start", e), t(T(e, !1)), t(Object(c.a)()), Object(d.h)(r, "received", "tour", "messenger", null, {
                tour_id: e.id
            }))
        }
    }

    function R(e) {
        return t => {
            t(T(e, !0)), t(Object(c.a)())
        }
    }

    function j(e) {
        return async (t, n) => {
            const {
                session: r
            } = n();
            try {
                var i, o;
                const n = await p.b.fetchTour({
                        session: r,
                        tourId: e
                    }),
                    s = window.parent,
                    a = Object(u.b)(n.url);
                n.url && !Object(l.b)(a, null === (i = window) || void 0 === i ? void 0 : null === (o = i.parent) || void 0 === o ? void 0 : o.location) ? s.__intercomAssignLocation(n.url) : (t(T(n, !1)), t(Object(c.a)()))
            } catch (t) {
                E(e), Object(l.d)(`Could not fetch or start tour due to e=${t}`)
            }
        }
    }

    function N() {
        return (e, t) => {
            const n = t();
            if (g(n)) e(M(""));
            else {
                const {
                    session: r
                } = t(), {
                    id: i,
                    progressId: o
                } = Object(a.c)(n);
                e(M(o)), p.b.stopTour(r, i, o)
            }
        }
    }

    function M(e) {
        return {
            type: "STOP_TOUR",
            progressId: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return a
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "a", (function() {
        return f
    })), n.d(t, "e", (function() {
        return h
    })), n.d(t, "b", (function() {
        return b
    }));
    var r = n(0),
        i = n(13),
        o = n(113);
    const s = ["ar", "bg", "bs", "ca", "cs", "da", "de", "de-form", "el", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "mn", "nb", "nl", "pl", "pt", "pt-BR", "ro", "ru", "sl", "sr", "sv", "tr", "vi", "zh-CN", "zh-TW"],
        a = ["ar", "he"],
        c = {};
    c.en = n(211);
    let u = c,
        d = "en";
    const l = (e, t) => e && e.replace(/{([\s\S]+?)}/g, (e, n) => t[n]),
        p = async e => {
            if (-1 === s.indexOf(e)) return Object(i.b)(`Unsupported locale: ${e}`);
            if (!c[e]) {
                const t = await Object(o.a)({
                    promise: () => n(371)(`./${e}.json`)
                });
                c[e] = t
            }
            d = e
        },
        f = () => d,
        h = (e, t) => {
            const n = u[d];
            if (!n) return Object(r.b)(`Unknown locale '${d}'`), "";
            const i = n[e];
            if (!i) return Object(r.b)(`Unknown key '${e}' in locale '${d}'`), l(u.en[e], t) || "";
            try {
                return l(i, t)
            } catch (t) {
                return Object(r.b)(`Interpolation failed for key '${e}' in locale '${d}'`), ""
            }
        },
        b = e => -1 !== a.indexOf(e)
}, , function(e, t, n) {
    "use strict";
    var r = n(89);
    t.a = {
        read(e, t) {
            t = t || Object(r.a)();
            const n = "(?:(?:^|[^]*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$",
                i = t.match(new RegExp(n));
            if (null !== i && void 0 !== i[1]) return decodeURIComponent(i[1])
        },
        write(e, t, n = {}) {
            const {
                domain: i,
                path: o,
                expires: s,
                secure: a,
                sameSite: c
            } = n;
            let u = `${e}=${t}`;
            return i && (u += `; domain=${i}`), o && (u += `; path=${o}`), s && (u += `; expires=${s.toUTCString()}`), c && (u += `; samesite=${c}`), a && (u += "; secure"), Object(r.c)(u), u
        },
        clear(e, t = {}) {
            const {
                domain: n,
                path: r
            } = t, i = new Date(0);
            return this.write(e, "", {
                domain: n,
                path: r,
                expires: i
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(34),
        i = n(66),
        o = n.n(i),
        s = n(118);
    n.d(t, "g", (function() {
        return d
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "e", (function() {
        return f
    })), n.d(t, "c", (function() {
        return h
    })), n.d(t, "a", (function() {
        return b
    })), n.d(t, "b", (function() {
        return _
    }));
    const a = ["image", "attachmentList", "video", "videoReply", "videoFile", "messengerCard"],
        c = ["image", "video", "videoReply", "videoFile", "notificationChannelsCard"],
        u = [{
            user: "sent_an_image",
            admin: "sent_you_an_image"
        }, {
            user: "sent_an_attachment",
            admin: "sent_you_an_attachment"
        }, {
            user: "sent_a_video",
            admin: "sent_you_a_video"
        }, {
            user: "sent_a_video_reply",
            admin: "sent_you_a_video_reply"
        }, {
            user: "sent_a_video",
            admin: "sent_you_a_video"
        }, {
            user: "sent_an_app",
            admin: "sent_you_an_app"
        }],
        d = e => e && e.type && "videoFile" === e.type,
        l = e => c.indexOf(e.type) > -1,
        p = e => e.text || e.content,
        f = e => {
            const t = e[e.length - 1],
                n = t.body,
                i = t.author;
            let o, s = t.body.some(l);
            v(n[0]) && (o = O(n));
            const a = m(n),
                c = S(n, i);
            return o = 0 === a.length && c ? c : a, "quick_reply" === t.partType ? f(e.slice(0, e.length - 1)) : (function(e) {
                return "attribute_collector" === e.partType
            }(t) && (o = Object(r.e)("operator_asked_for_attribute", {
                attribute: g(t)
            }), s = !0), {
                author: i,
                summaryText: o,
                isMetadata: s
            })
        },
        h = e => {
            const t = Object(s.a)(e);
            return y(t).map(e => ({
                type: "paragraph",
                text: e
            }))
        },
        b = (e, t, n) => [{
            type: "attachmentList",
            attachments: [{
                contentType: t,
                name: e,
                size: n
            }]
        }],
        _ = (e, t, n, r, i) => [{
            type: "image",
            url: e,
            width: t,
            height: n,
            attribution: r,
            title: i
        }],
        g = e => {
            const t = e.form.attributes[0];
            return t.name || t.identifier.toLowerCase().replace(".", " ")
        },
        m = e => {
            const t = e.filter(e => "button" !== e.type && !v(e)).map(e => E(e)).filter(e => !!e).join(" ");
            return o()(t.replace(/<br>/g, " "))
        },
        O = e => {
            const t = e.filter(e => v(e))[0];
            if (t && t.title) return o()(t.title)
        },
        E = e => {
            switch (e.type) {
                case "videoFile":
                case "messengerCard":
                    return "";
                case "orderedList":
                    return e.items.map((e, t) => `${t+1}. ${e}`).join(", ");
                case "unorderedList":
                    return e.items.join(", ");
                default:
                    return e.text || e.content
            }
        },
        S = (e, t) => {
            const n = (e => e.filter(e => a.indexOf(e.type) > -1)[0])(e);
            if (!n) return;
            const i = a.indexOf(n.type),
                o = u[i];
            return t.isAdmin ? Object(r.e)(o.admin) : Object(r.e)(o.user)
        },
        v = e => e && e.type && "link" === e.type,
        y = e => {
            const t = e.split("\n\n");
            for (let e = 0; e < t.length; e++) t[e] = t[e].replace(/\n/g, "<br>");
            return t.filter(e => e)
        }
}, , function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(6),
        o = n(55),
        s = n(16),
        a = n(95);
    t.a = Object(r.createSelector)(o.a, e => e.filter(e => {
        return !Object(i.m)(e) && (!e.read && !e.dismissed && !Object(a.a)(Object(s.a)(e.parts).partType) && !e.suppress && (t = e, "snippet" === Object(s.a)(t.parts).notificationType || t.forceSnippet) && !Object(i.n)(e));
        var t
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return u
    })), n.d(t, "a", (function() {
        return d
    })), n.d(t, "e", (function() {
        return l
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "b", (function() {
        return f
    }));
    var r = n(26),
        i = n.n(r),
        o = n(5),
        s = n(18),
        a = n(37);
    const c = i()("intercom.actions.inbound-triggers");

    function u(e, t, n = !1) {
        return async (r, i) => {
            try {
                const c = i(),
                    {
                        app: u,
                        session: d,
                        newConversation: l
                    } = c,
                    p = Object(s.b)(),
                    f = {
                        clientId: p,
                        body: Object(a.c)(t.text),
                        createdAt: new Date,
                        composerSuggestionItem: t
                    },
                    h = l.composerState.visible;
                r(function(e) {
                    switch (e.preAction) {
                        case "close-composer":
                            return Object(o.r)({
                                visible: !1
                            });
                        default:
                            throw `Invalid PRE ACTION type for suggestion=${e.preAction}`
                    }
                }(t)), r(Object(o.h)(f, n));
                const b = await e.startConversationFromSuggestion(d, {
                    suggestionUuid: t.uuid,
                    clientAssignedUUID: p,
                    selfServeSuggestionsMatch: u.selfServeSuggestionsMatch
                });
                r(Object(o.i)(b, null, null, Date.now(), "custom_bot")), h && r(Object(o.r)({
                    visible: !0
                }))
            } catch (e) {
                r(Object(o.g)(null)), c(`Couldnt start conversation from suggestion due to e=${e}`)
            }
        }
    }

    function d(e) {
        return {
            type: "ADD_INBOUND_SUGGESTIONS",
            composerSuggestions: e
        }
    }

    function l(e) {
        return {
            type: "UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS",
            composerSuggestions: e
        }
    }

    function p(e) {
        return {
            type: "UPDATE_PREVIEW_INBOUND_SUGGESTIONS",
            composerSuggestions: e
        }
    }

    function f(e) {
        return {
            type: "REMOVE_INBOUND_SUGGESTIONS",
            rulesetId: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    }));
    var r = n(1);
    const i = Object(r.createSelector)([e => e.app.conversationId, e => e.conversations.byId, e => e.newConversation], (e, t, n) => {
            const r = null === e ? n : t[e];
            if (r) return r.composerState || (r.composerState = n.composerState), r
        }),
        o = e => Object(r.createSelector)([e => e.conversations.byId], t => t && t[e])
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return s
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "a", (function() {
        return p
    })), n.d(t, "c", (function() {
        return f
    })), n.d(t, "e", (function() {
        return h
    }));
    var r = n(29),
        i = n(6),
        o = n(215);

    function s(e, t = "unknown", n = 1, o = 10) {
        return (s, u) => {
            s({
                type: "GET_CONVERSATIONS_REQUEST"
            });
            const {
                session: d,
                app: l
            } = u();
            return e.getConversations(d, {
                source: t,
                page: n,
                perPage: o,
                selfServeSuggestionsMatch: l.selfServeSuggestionsMatch
            }).then(t => {
                t.conversations.forEach(t => {
                    Object(i.s)(t).forEach(t => {
                        s(Object(r.a)(e, t))
                    })
                }), s(h(t)), s(a(t))
            }).catch(() => {
                s(c())
            })
        }
    }

    function a(e) {
        return {
            type: "GET_CONVERSATIONS_SUCCESS",
            conversations: e
        }
    }

    function c(e) {
        return {
            type: "GET_CONVERSATIONS_FAILURE",
            error: e
        }
    }

    function u(e, t) {
        return (n, r) => {
            n(d(t));
            const {
                session: i
            } = r();
            return e.dismissNotifications(i, t).then(() => n(l(t)))
        }
    }

    function d(e) {
        return {
            type: "DISMISS_NOTIFICATIONS_REQUEST",
            conversationIds: e
        }
    }

    function l(e) {
        return {
            type: "DISMISS_NOTIFICATIONS_SUCCESS",
            conversationIds: e
        }
    }

    function p(e) {
        return {
            type: "CONVERSATIONS_SCROLLED",
            scrollPosition: e
        }
    }

    function f(e) {
        return {
            type: "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED",
            conversationId: e
        }
    }

    function h(e) {
        return t => {
            const n = e.conversations;
            n && n.forEach(e => {
                Object(i.n)(e) && e.read && t(Object(o.a)(e.id))
            })
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t = !1) {
        const n = {
            type: "SHOW_CONVERSATION",
            conversationId: e
        };
        return t && (n.replaceCurrentView = t), n
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(54),
        i = n.n(r),
        o = n(147),
        s = n.n(o),
        a = n(73),
        c = n.n(a),
        u = n(142),
        d = n.n(u),
        l = n(228),
        p = n.n(l);
    const f = e => {
        if (!d()(e)) return e;
        const t = {};
        return Object.keys(e).forEach(n => {
            let r = f(e[n]);
            Array.isArray(r) && (r = r.map(e => f(e))), t[p()(n)] = r
        }), t
    };
    var h = n(69),
        b = n.n(h),
        _ = n(123),
        g = n.n(_),
        m = n(229),
        O = n.n(m);
    const E = {
        button: function(e) {
            return e.action.id ? (e.id = e.action.id, g()(e, "action.id"), e) : e
        },
        input: function(e) {
            return e.action && e.action.id ? (e.id = e.action.id, g()(e, "action.id"), e) : e
        },
        list: function(e) {
            const t = e.items.map(e => {
                if (e.action) {
                    if (!e.action.id) return e;
                    e.id = e.action.id, g()(e, "action.id")
                }
                return e
            });
            return e.items = t, e
        }
    };

    function S(e) {
        return e.components.map(e => function(e) {
            const t = O()({}, e);
            return b()(E, e.type, () => {})(t), t
        }(e))
    }
    var v = n(150);

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "a", (function() {
        return T
    })), n.d(t, "c", (function() {
        return w
    })), n.d(t, "e", (function() {
        return A
    })), n.d(t, "b", (function() {
        return j
    })), n.d(t, "d", (function() {
        return N
    }));
    const I = e => e ? Object(v.a)(e.toString()) : "",
        T = (e, t) => {
            switch (e.type) {
                case "button":
                    return `button-${I(e.id)}`;
                case "text":
                    return `text-${t}-${I(e.text)}`;
                case "input":
                    return `input-${I(e.id)}`;
                case "spacer":
                    return `spacer-${t}`;
                case "divider":
                    return `divider-${t}`;
                case "image":
                    return `image-${t}-${I(e.url)}`;
                case "list":
                    return `list-${e.items.map(e=>I(e.id)).join("-")}`;
                case "dropdown":
                    return `dropdown-${I(e.id)}`;
                case "single-select":
                    return `single-select-${I(e.id)}`;
                default:
                    return `unknown-${t}`
            }
        },
        w = e => e.state ? {
            uri: e.uri,
            canvas: {
                id: "",
                content: e.state
            }
        } : e,
        A = e => {
            const t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(n, !0).forEach((function(t) {
                        C(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, e);
            return i()(t, ["canvas", "content"], e => (e => "0.1" === e.version ? e : {
                version: "0.1",
                components: S(e)
            })(c()(e))), i()(t, ["canvas", "content", "components"], e => e.map(f))
        },
        R = (e, t, n) => {
            const r = [];
            return e.forEach(e => {
                "list" === e.type ? r.push(...e.items) : r.push(e)
            }), r.find(e => e[t] && (!n || e[t] === n))
        },
        j = (e, t, n) => !!R(e, t, n),
        N = (e, t, n = !0) => {
            const r = ((e, t) => R(e, "id", t))(t, e),
                i = M(r, t);
            return i && r && r.type ? "button" === r.type || "item" === r.type ? s()(c()(t), `${i}.loading`, n, c.a) : "input" === r.type || "dropdown" === r.type || "single-select" === r.type ? s()(c()(t), `${i}.saveState`, n ? "saving" : "unsaved", c.a) : void 0 : t
        },
        M = (e, t) => {
            for (const n in t)
                if (t.hasOwnProperty(n)) {
                    if (e === t[n]) return `[${n}]`;
                    if (t[n] && "object" == typeof t[n]) {
                        const r = M(e, t[n]);
                        if (r) return `[${n}]` + r
                    }
                }
        }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    }));
    var r = n(11),
        i = n(67),
        o = n(1),
        s = n(6),
        a = n(61);
    const c = (e, t) => !e.read && e.id !== t && (e.dismissed || !Object(s.m)(e)),
        u = Object(o.createSelector)(e => Object(i.a)(e.conversations.byId), e => {
            const {
                app: {
                    conversationId: t,
                    isMessengerOpen: n
                },
                user: {
                    isPresent: i
                }
            } = e;
            if (n && "conversation" === Object(r.e)(e)) return t;
            if (!n) {
                const t = Object(a.a)(e);
                if (1 === t.length && i) return t[0].id
            }
        }, (e, t) => e.reduce((e, n) => (c(n, t) && e.push(n.id), e), [])),
        d = Object(o.createSelector)(u, e => e.length)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        const t = document.createElement("a");
        return t.href = e, {
            protocol: t.protocol,
            host: t.host,
            port: t.port,
            pathname: t.pathname,
            hash: t.hash,
            search: t.search,
            hostname: t.hostname,
            origin: t.origin
        }
    }

    function i(e) {
        const t = r(e).search;
        return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce((e, t) => {
            const [n, r] = t.split("=");
            return e[n] = r ? decodeURIComponent(r.replace(/\+/g, " ")) : "", e
        }, {}) : {}
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return v
    })), n.d(t, "a", (function() {
        return y
    })), n.d(t, "e", (function() {
        return C
    })), n.d(t, "b", (function() {
        return I
    })), n.d(t, "d", (function() {
        return T
    }));
    var r, i, o = n(233),
        s = n.n(o),
        a = n(25),
        c = n.n(a),
        u = n(234),
        d = n.n(u),
        l = n(218),
        p = n.n(l),
        f = n(113),
        h = n(3);
    const b = "1" === window.navigator.doNotTrack,
        _ = ["address", "addresses", "email", "emailAddress", "emailAddresses", "phoneNumber", "phone", "number", "name", "firstName", "lastName", "userSuppliedEmail", "initial", "socialAccounts", "text", "messengerCards", "url"],
        g = [];
    let m, O;
    const E = e => d()(e, (e, t, n) => {
            _.indexOf(n) >= 0 ? e[n] = "removedIdentifyingInfo" : c()(t) && !s()(t) ? e[n] = E(t.toJS ? t.toJS() : t) : e[n] = t
        }),
        S = e => b ? "removedIdentifyingInfo" : (e => {
            const t = p()(e);
            return E(t)
        })(e),
        v = async e => {
            const {
                addTag: t,
                addExtra: r,
                logError: i,
                addBreadcrumb: o
            } = await Object(f.a)({
                promise: () => Promise.all([n.e(51), n.e(46)]).then(n.bind(null, 449))
            });
            t("app.id", m), g.forEach(({
                type: e
            }) => o("redux-action", e)), O && O.getState && r("state", S(O.getState())), i(e)
        },
        y = e => {
            e.onerror = (e, t, n, r, i) => v(i), e.onunhandledrejection = e => v(e.reason)
        },
        C = e => {
            e && (m = e)
        },
        I = e => {
            e && (O = e)
        },
        T = () => function(e) {
            return function(t) {
                return g.push({
                    type: t.type,
                    timestamp: +new Date
                }), e(t)
            }
        };
    !Object(h.a)() && (null === (r = window) || void 0 === r ? void 0 : null === (i = r.parent) || void 0 === i ? void 0 : i.intercomSettings) && C(window.parent.intercomSettings.app_id)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(3);
    const i = () => !Object(r.a)() && window.parent && window.parent.intercomSettings && "tx2p130c" === window.parent.intercomSettings.app_id
}, , function(e, t, n) {
    "use strict";
    var r = n(67),
        i = n(1),
        o = n(6);
    t.a = Object(i.createSelector)([e => Object(r.a)(e.conversations.byId), e => e.notificationTypeOverrides], (e, t) => e.filter(e => !Object(o.m)(e)).map(e => ((e, t) => {
        const n = Object(o.g)(e);
        return Object.assign({}, e, {
            suppress: t.suppress[n] || !1,
            forceSnippet: t.forceSnippet[n] || !1
        })
    })(e, t)))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var r = n(1);
    const i = ["left", "right"],
        o = e => Math.max(e || 20, 20),
        s = e => (e => i.indexOf(e) >= 0)(e) ? e : "right",
        a = Object(r.createSelector)(e => e.app, e => e.customizationOverrides, (e, t = {}) => {
            const {
                alignment: n,
                horizontalPadding: r,
                verticalPadding: i,
                color: a,
                secondaryColor: c
            } = e, {
                alignment: u,
                horizontalPadding: d,
                verticalPadding: l,
                color: p,
                secondaryColor: f
            } = t;
            return {
                alignment: s(u || n),
                horizontalPadding: o(d || r),
                verticalPadding: o(l || i),
                color: p || a,
                secondaryColor: f || c
            }
        });
    t.b = a
}, , , , , function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(55),
        o = n(6);
    const s = Object(r.createSelector)(i.a, e => e.filter(e => {
        return !e.read && !e.forceSnippet && (1 === (t = e).parts.length && "full" === t.parts[0].notificationType || Object(o.i)(e)) && "pointer" !== e.messageType && !Object(o.n)(e) && !e.preventEndUserReplies;
        var t
    }));
    t.a = Object(r.createSelector)(e => {
        const {
            conversations: {
                byId: t
            },
            message: {
                conversationId: n
            }
        } = e;
        return t[n]
    }, s, (e, t) => {
        return n = t, void 0 === (r = e) || ((e, t) => void 0 !== e.find(e => e.id === t.id))(n, r) || Object(o.n)(r) ? n : n.concat(r);
        var n, r
    })
}, , function(e, t, n) {
    "use strict";

    function r(e, t) {
        return {
            type: "OPEN_MESSAGE",
            conversationId: e,
            partId: t
        }
    }

    function i() {
        return {
            type: "CLOSE_MESSAGE"
        }
    }

    function o(e, t) {
        return {
            type: "RECORD_MESSAGE_SENT",
            conversationId: e,
            partId: t
        }
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "c", (function() {
        return o
    }))
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        i = n.n(r),
        o = n(86),
        s = n(40),
        a = n(9),
        c = n(115),
        u = n(44),
        d = n(5),
        l = n(68),
        p = n(121),
        f = n(143);
    var h = n(0),
        b = n(27);
    const _ = e => {
            let t;
            return (...n) => {
                const r = () => e(...n);
                return t = Promise.resolve(t).then(r, r), t
            }
        },
        g = (e, t, n, r) => {
            let i = 0,
                o = 0;
            return (...s) => {
                const a = b.b.now();
                return a - o >= n && (i = 0, o = a), i++, i <= t ? e(...s) : (Object(h.c)(`rate_limiting.${r}`), Object(h.g)(`rate_limit_check_${r}`, {
                    rate_limited: !0,
                    rate_limit_count: n
                }, !0), Promise.reject("rate_limited_update"))
            }
        };
    var m = n(7),
        O = n(52),
        E = n(13);
    const S = e => {
        if ("rate_limited_update" === e) return null;
        try {
            return e.errors || JSON.parse(e).errors
        } catch (t) {
            Object(E.a)(e), Object(O.c)(e)
        }
    };
    var v = n(51),
        y = n(33),
        C = n(18),
        I = n(8);
    const T = "https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product",
        w = {
            IDENTITY_VERIFICATION_READY_WARNING: `Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ${T}.`,
            IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see ${T}.`,
            IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see ${T}.`
        };
    var A = n(3);
    n.d(t, "b", (function() {
        return M
    })), n.d(t, "a", (function() {
        return L
    })), n.d(t, "f", (function() {
        return k
    })), n.d(t, "e", (function() {
        return x
    })), n.d(t, "d", (function() {
        return G
    }));
    let R, j;
    const N = ((e, t = 6e4) => {
        let n;
        const r = () => {
                n = {}
            },
            i = (...r) => {
                const i = e(...r),
                    o = n[i],
                    s = Date.now();
                return !((e, n) => void 0 === n || e - n > t)(s, o) || (n[i] = s, !1)
            };
        return i.reset = r, r(), i
    })((e, t, n, r) => {
        const {
            email: i,
            userId: o,
            userHash: s,
            anonymousId: a
        } = e;
        return JSON.stringify(Object.assign({
            encryptedPayload: r
        }, {
            url: t,
            email: i,
            userId: o,
            userHash: s,
            anonymousId: a
        }, n))
    }, 6e4);

    function M(e, t, n, r, b, _, g, O = !1, T, w = "unknown", M, L) {
        return async (k, x) => {
            let G, {
                app: F,
                session: W
            } = x();
            if ((!R || j !== n && F && F.features && F.features.singlePageAppRateLimiting) && V(n), W = t || W, W.sessionId || (W.sessionId = C.a.generateUUID()), k(P(W, n, r, b, _, g, M)), !O && N(W, n, r, T)) return null;
            try {
                G = await R(e, x, r, T, w, M)
            } catch (e) {
                const t = S(e);
                if ("403" === (e => e && e[0].code)(t) && L) return Object(E.b)("This domain is not allowed for the Intercom Messenger. Add your domain here: https://app.intercom.com/a/apps/_/messenger"), L(!0), null;
                t && t.find(e => "App Not Found" === e.message) && Object(E.b)("The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web"), k(U(e, $(e)));
                const n = (e => {
                    const t = S(e);
                    if (!t) return;
                    const n = t.find(e => e.data);
                    if (!n) return;
                    const r = n.data;
                    return {
                        activeSubscription: r.active_subscription,
                        userHashVerified: r.user_hash_verified,
                        secureInstallV2: r.secure_install_v2,
                        messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
                        messengerEnabledForUsers: r.messenger_enabled_for_users
                    }
                })(e);
                return n && k(Object(f.c)(n)), null
            }
            Object(h.n)(G);
            const {
                errors: z,
                installModeConfig: Q,
                notificationLinkConversationId: q
            } = G;
            if (Q && k(Object(f.c)(Q)), z) return null;
            if (H(G, W, Q), B(G), k(D(G)), k(Object(s.e)(G.composerSuggestions)), G.newConversationComposerState && k(Object(d.r)(G.newConversationComposerState)), Object(A.a)() || k(Object(y.b)()), k(Object(l.a)({
                    color: G.app.color,
                    secondaryColor: G.app.secondaryColor
                })), q && k(Object(a.c)(q)), G.unreadConversationIds.length > 0) {
                const t = x();
                Object(p.a)(t, G.unreadConversationIds) ? k(Object(d.l)(e, t.app.conversationId)) : k(Object(u.d)(e, "createOrUpdateUser"))
            }
            if (!Object(I.g)() && G.app.features.launcherDiscoveryMode && k(Object(o.e)()), !Object(A.a)()) {
                var Y, J, K;
                const {
                    activeTour: e
                } = G, t = null === (Y = Object(v.a)(null === (J = window) || void 0 === J ? void 0 : null === (K = J.parent) || void 0 === K ? void 0 : K.location)) || void 0 === Y ? void 0 : Y.product_tour_id;
                i()(e) || (i()(t) ? k(Object(y.j)(e)) : Object(m.d)(`Tour with id ${e.id} received from ping won't start because there is a tourId in the query params`))
            }
            if (!Object(A.a)()) {
                const {
                    banners: e
                } = G;
                i()(e) || k(Object(c.e)(e))
            }
            return G
        }
    }

    function P(e, t, n, r, i, o, s) {
        return {
            type: "CREATE_OR_UPDATE_USER_REQUEST",
            session: e,
            url: t,
            customAttributes: n,
            launcherEnabledOverride: r,
            anonymousSessionDuration: i,
            customizationAttributes: o,
            internal: s
        }
    }

    function D(e) {
        return {
            type: "CREATE_OR_UPDATE_USER_SUCCESS",
            user: e
        }
    }

    function U(e, t = !1) {
        return {
            type: "CREATE_OR_UPDATE_USER_FAILURE",
            error: e,
            isIdentityVerificationError: t
        }
    }

    function L(e) {
        return {
            type: "ANONYMOUS_SESSION_CHANGED",
            anonymousSession: e
        }
    }

    function k() {
        return {
            type: "USER_IS_PRESENT"
        }
    }

    function x() {
        return {
            type: "USER_IS_ABSENT"
        }
    }

    function G(e, t, n) {
        return (r, i) => {
            const {
                session: o
            } = i();
            if (o) return r({
                type: "CREATE_EVENT",
                name: t,
                boundEventMetadata: n
            }), e.sendBeaconEvent(o, t).catch(() => r({
                type: "CREATE_EVENT_FAILED"
            }))
        }
    }

    function V(e) {
        F(30, 18e5, e)
    }

    function F(e, t, n) {
        j = n, R = ((e, t, n, r) => _(g(e, t, n, r)))((e, t, n, r, i, o) => {
            const {
                session: s
            } = t();
            return e.createOrUpdateUser(s, n, void 0, r, i, o, Object(h.l)())
        }, e, t, "user_update")
    }

    function B(e) {
        const t = e.cdasBreachingLimit;
        if (!t.length) return;
        const n = 1 === t.length ? "attribute" : "attributes",
            r = t.join(", ");
        Object(E.b)(`You have reached your CDA limit and we were not able to create or update the following ${n}: ${r}. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom`)
    }

    function H(e, t, n = {}) {
        const {
            userHash: r,
            userId: i,
            email: o
        } = t, {
            secureInstallV2: s,
            secureInstallV3: a
        } = n;
        if (s || a) {
            if (!i && !o) return
        } else if (!r) return;
        const c = function(e, t) {
            if (e.identityVerificationReady) return w.IDENTITY_VERIFICATION_READY_WARNING;
            if (!e.identityVerified && t.userId) return w.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
            if (!e.identityVerified && !t.userId) return w.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
            return null
        }(e, t);
        c && Object(E.b)(c)
    }

    function $(e) {
        const t = S(e);
        if (!t) return !1;
        let n = !1;
        return t.forEach(e => {
            -1 !== e.code.indexOf("identity_verification") && (n = !0, Object(E.a)(`Intercom Messenger error: ${e.message} For more details, see ${T}.`))
        }), n
    }
    t.c = {
        createOrUpdateUser: M,
        createOrUpdateUserRequest: P,
        createOrUpdateUserSuccess: D,
        createOrUpdateUserFailure: U,
        destroySession: function(e = !0) {
            return {
                type: "DESTROY_SESSION",
                clearCookies: e
            }
        },
        anonymousSessionChanged: L,
        userIsPresent: k,
        userIsAbsent: x,
        createEvent: function(e, t, n) {
            return (r, i) => {
                const {
                    session: o
                } = i();
                if (o) return r({
                    type: "CREATE_EVENT",
                    name: t,
                    metadata: n
                }), e.createEvent(o, t, n).catch(() => r({
                    type: "CREATE_EVENT_FAILED"
                }))
            }
        },
        triggerBoundEvent: G,
        setupCreateOrUpdateUserRateLimiting: F,
        setupDefaultCreateOrUpdateUserRateLimiting: V,
        isDuplicateCreateOrUpdateUserRequest: N,
        checkCdasBreachingLimit: B,
        checkIdentityVerificationInstall: H,
        checkIdentityVerificationError: $
    }
}, , , function(e, t, n) {
    "use strict";
    t.a = e => Object.keys(e).map(t => e[t])
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return Math.pow((e + .055) / 1.055, 2.4)
    }

    function i(e) {
        const t = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255;
        return .2126 * (t <= .03928 ? t * (1 / 12.92) : r(t)) + .7152 * (n <= .03928 ? n * (1 / 12.92) : r(n)) + .0722 * (i <= .03928 ? i * (1 / 12.92) : r(i))
    }

    function o(e) {
        let t = 255;
        8 === (e = e.replace(/^#/, "")).length && (t = parseInt(e.slice(6, 8), 16), e = e.substring(0, 6)), 4 === e.length && (t = parseInt(e.slice(3, 4).repeat(2), 16), e = e.substring(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        const n = parseInt(e, 16);
        return [n >> 16, n >> 8 & 255, 255 & n, t]
    }

    function s(e, t) {
        return function(e, t) {
            return (Math.max(e, t) + .05) / (Math.min(e, t) + .05)
        }(i(e), i(t))
    }

    function a(e, t) {
        return s(o(e), o(t))
    }
    var c = n(87);
    n.d(t, "b", (function() {
        return d
    })), n.d(t, "a", (function() {
        return l
    }));
    const u = (e, t, n, r) => (a(t[r], e) >= n ? r : null) || Object.keys(t).find(r => a(t[r], e) >= n) || r,
        d = e => ({
            type: "SET_TAB_NAVIGATION",
            tabNavigation: e
        }),
        l = ({
            color: e,
            secondaryColor: t
        }) => ({
            type: "SET_ACCESSIBILITY_THEME",
            accessibilityTheme: u(e, c.a, 2, "default"),
            secondaryAccessibilityTheme: u(t, c.a, 2, "light")
        })
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "d", (function() {
        return i
    })), n.d(t, "e", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    })), n.d(t, "h", (function() {
        return a
    })), n.d(t, "g", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "f", (function() {
        return d
    })), n.d(t, "i", (function() {
        return l
    }));
    const r = "send-data-to-messenger",
        i = "send-data-to-sheet",
        o = "set-iframe-src",
        s = "close",
        a = "submit-sheet",
        c = "start-navigation",
        u = "finish-navigation",
        d = "set-title";

    function l(e, t, n) {
        return {
            intercomSheet: {
                type: e,
                payload: t,
                meta: {
                    proxy: n
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return u
    }));
    var r = n(3),
        i = n(10);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(n, !0).forEach((function(t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const c = (() => {
        var e, t, n;
        const i = "composer-suggestions-disabled-at";
        if (Object(r.a)()) return i;
        const o = null === (e = window) || void 0 === e ? void 0 : null === (t = e.parent) || void 0 === t ? void 0 : null === (n = t.intercomSettings) || void 0 === n ? void 0 : n.app_id;
        return o ? `${o}-${i}` : i
    })();
    const u = {
        loading: !1,
        isViewed: !1,
        isDismissed: function() {
            const e = parseInt(i.a.get(c));
            return !!e && Date.now() - e < 2592e6
        }() || !1,
        suggestions: [],
        prompt: [],
        priority: 0
    };
    t.a = function(e = u, t) {
        switch (t.type) {
            case "COMPOSER_CONTENT_CHANGED":
                return "" === t.composerContent ? s({}, e, {
                    isViewed: !1
                }) : e;
            case "SET_COMPOSER_SUGGESTIONS":
                {
                    var n;
                    const {
                        priority: r
                    } = t,
                    i = e.isViewed || (null == t ? void 0 : null === (n = t.composerSuggestions) || void 0 === n ? void 0 : n.suggestions.length) > 0;
                    return r < e.priority ? e : t.composerSuggestions ? s({}, e, {}, t.composerSuggestions, {
                        priority: r,
                        loading: !1,
                        isViewed: i
                    }) : s({}, u, {
                        isViewed: e.isViewed,
                        isDismissed: e.isDismissed,
                        priority: r
                    })
                }
            case "SET_COMPOSER_SUGGESTIONS_LOADING":
                return s({}, e, {
                    loading: t.loadingStatus
                });
            case "SET_COMPOSER_SUGGESTIONS_DISMISSED":
                return r = Date.now(), i.a.set(c, r), s({}, e, {
                    isDismissed: !0
                });
            default:
                return e
        }
        var r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(28),
        i = n.n(r),
        o = n(122),
        s = n(9),
        a = n(45),
        c = n(5),
        u = n(11);
    var d = n(18),
        l = n(26),
        p = n.n(l);
    n.d(t, "a", (function() {
        return g
    })), n.d(t, "b", (function() {
        return m
    })), n.d(t, "c", (function() {
        return O
    })), n.d(t, "d", (function() {
        return E
    })), n.d(t, "e", (function() {
        return S
    }));
    const f = p()("intercom.actions.triggers"),
        h = {
            "open-messenger-loading-view": s.h
        },
        b = {
            "show-conversation": function(e, t) {
                return async (n, r) => {
                    if ("conversation" !== Object(u.e)(r())) return await n(Object(c.l)(e, t.id)), n(Object(a.a)(t.id, !0))
                }
            }
        },
        _ = {};

    function g(e, t) {
        return n => {
            n(function(e) {
                    return {
                        type: "ADD_TRIGGER",
                        trigger: e
                    }
                }(e)),
                function(e, t, n) {
                    try {
                        const {
                            selector: r,
                            event: o,
                            id: s
                        } = e, a = window.parent.document.querySelector(r), c = i()(() => function(e, t, n) {
                            t(O(e, n))
                        }(s, t, n), 3e3, {
                            leading: !0,
                            trailing: !1
                        });
                        a.addEventListener(o, c), _[s] = c, f(`Attached ${o} event handler to ${r}`)
                    } catch (e) {
                        f(`Couldnt attach the messenger trigger to the DOM due to e=${e}`)
                    }
                }(e, n, t)
        }
    }

    function m(e) {
        return (t, n) => {
            ! function(e, t) {
                try {
                    const {
                        selector: n,
                        event: r
                    } = Object(o.c)(e)(t);
                    window.parent.document.querySelector(n).removeEventListener(r, _[e])
                } catch (e) {
                    f(`Couldn't detach the messenger trigger to the DOM due to e=${e}`)
                } finally {
                    delete _[e]
                }
            }(e, n()), t(function(e) {
                return {
                    type: "REMOVE_TRIGGER",
                    triggerId: e
                }
            }(e))
        }
    }

    function O(e, t) {
        return async (n, r) => {
            try {
                const i = r(),
                    {
                        session: s
                    } = i,
                    a = Object(o.c)(e)(i),
                    u = Object(d.b)(),
                    l = {
                        clientId: u,
                        createdAt: new Date
                    };
                n(function(e) {
                    return {
                        type: "ACTIVATE_TRIGGER",
                        triggerId: e
                    }
                }(e)), n(function(e) {
                    return t => {
                        const n = h[e.preAction];
                        if ("function" == typeof n) return t(n());
                        throw `Invalid PRE ACTION type for trigger=${e.id}`
                    }
                }(a)), n(Object(c.h)(l, !1));
                const p = await t.fireTrigger(s, {
                    triggerId: String(e),
                    clientAssignedUUID: u
                });
                n(v(t, p)), n({
                    type: "DEACTIVATE_TRIGGER"
                })
            } catch (e) {
                n({
                    type: "ACTIVATE_TRIGGER_FAILED"
                }), n(Object(c.g)(null)), f(`Couldnt fire messenger trigger due to e=${e}`)
            }
        }
    }

    function E(e, t) {
        return async (n, r) => {
            const i = r(),
                {
                    session: o
                } = i,
                s = await e.outboundPreview(o, t);
            n(v(e, s))
        }
    }

    function S(e) {
        return (t, n) => {
            try {
                const r = n();
                t(O(Object(o.a)(r).id, e))
            } catch (e) {
                f("Couldnt retry firing messenger trigger")
            }
        }
    }

    function v(e, t) {
        return n => {
            const {
                action: r,
                data: i
            } = t, o = b[r];
            if (o) return n(o(e, i));
            throw `Invalid POST ACTION type for trigger_action=${r}`
        }
    }
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(21);
    const i = ["password", "passwd", "secret", "api_key", "apikey", "access_token", "auth_token", "credentials", "mysql_pwd", "stripetoken"],
        o = () => {
            var e;
            return null === (e = Object(r.d)()) || void 0 === e ? void 0 : e.host
        },
        s = e => e ? (i.forEach(t => {
            e = a(e, t, "***")
        }), e) : e,
        a = (e, t, n) => {
            const r = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
            return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "d", (function() {
        return u
    })), n.d(t, "a", (function() {
        return d
    }));
    let r, i;

    function o() {
        return (e, t) => {
            const {
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: n,
                    isLauncherDiscoveryModeOpening: r,
                    isLauncherDiscoveryModeClosing: i
                }
            } = t();
            n || r || i || (setTimeout(() => {
                e({
                    type: "OPEN_LAUNCHER_DISCOVERY_MODE"
                })
            }, 6e3), c(e))
        }
    }

    function s() {
        r && clearTimeout(r), i && clearTimeout(i)
    }

    function a() {
        return e => {
            c(e)
        }
    }
    const c = e => {
        r = setTimeout(() => e({
            type: "CLOSE_LAUNCHER_DISCOVERY_MODE"
        }), 9500), i = setTimeout(() => e({
            type: "DISABLE_LAUNCHER_DISCOVERY_MODE"
        }), 10200)
    };

    function u() {
        return {
            type: "OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE"
        }
    }

    function d() {
        return {
            type: "DISABLE_LAUNCHER_DISCOVERY_MODE"
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {
        default: "#3b99fc",
        dark: "#38373e",
        light: "#cdcecd"
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    }));
    var r = n(3),
        i = n(22);
    let o = "";
    const s = () => Object(r.a)() ? o : parent.document.cookie,
        a = e => o = e,
        c = e => (Object(r.a)() ? (Object(i.m)(e), a(e)) : parent.document.cookie = e, e)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "c", (function() {
        return l
    }));
    var r = n(3),
        i = n(8),
        o = n(22);
    let s = {},
        a = {};
    const c = (e, t) => ({
            get: t => {
                const n = e[`intercom.${t}`];
                return void 0 === n ? null : n
            },
            set: (n, r) => {
                Object(o.l)(`intercom.${n}`, r, t), e[`intercom.${n}`] = r
            },
            remove: e => Object(o.j)(`intercom.${e}`, t),
            clear: () => {}
        }),
        u = () => {
            Object(r.a)() && Object(o.g)(e => {
                a = i.a.hasLocalStorageSupport() ? e.sessionStorage : {}, s = i.a.hasLocalStorageSupport() ? e.localStorage : {}
            })
        },
        d = () => c(s, "localStorage"),
        l = () => c(a, "sessionStorage")
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return u
    })), n.d(t, "a", (function() {
        return d
    }));
    var r = n(26),
        i = n.n(r),
        o = n(5),
        s = n(18),
        a = n(37);
    const c = i()("intercom.actions.predictive-answers");

    function u(e, t, n = !1) {
        return async (r, i) => {
            try {
                const c = void 0,
                    u = i(),
                    {
                        session: l,
                        newConversation: p,
                        user: f
                    } = u,
                    h = Object(s.b)(),
                    b = {
                        clientId: h,
                        body: Object(a.c)(t.text),
                        createdAt: new Date,
                        composerSuggestionItem: t
                    };
                r(d(null)), r(Object(o.h)(b, n));
                const _ = await e.fireComposerSuggestion(l, {
                    conversationId: c,
                    suggestion: t,
                    clientId: h,
                    botIntro: p ? p.botIntroId : null,
                    resolutionBotBehaviorVersionId: f ? f.resolutionBotBehaviorVersionId : null
                });
                r(Object(o.i)(_, null, null, Date.now(), "predictive_answer"))
            } catch (e) {
                r(Object(o.g)(null)), c(`Couldnt start conversation from suggestion due to e=${e}`)
            }
        }
    }

    function d(e) {
        return {
            type: "SET_PREDICTIVE_ANSWERS",
            predictiveAnswersSuggestions: e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        i = n(3);
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    })), n.d(t, "d", (function() {
        return l
    }));
    const o = [],
        s = e => {
            u(e);
            const t = document.createElement("meta");
            t.id = "intercom-viewport-meta", t.name = "viewport", t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0", e.document.getElementsByTagName("head")[0].appendChild(t)
        },
        a = e => {
            const t = e.document.getElementById("intercom-viewport-meta");
            t && (t.parentNode.removeChild(t), d(e))
        },
        c = () => {
            const e = Object(r.c)();
            return e.innerWidth <= 450 || e.innerWidth <= 900 && e.innerHeight <= 450
        },
        u = e => {
            [].slice.call(e.document.getElementsByTagName("meta")).forEach(e => {
                "viewport" === e.name && (o.push(e.cloneNode()), e.parentNode.removeChild(e))
            })
        },
        d = e => {
            const t = o.length;
            for (let n = 0; n < t; n++) e.document.getElementsByTagName("head")[0].appendChild(o.pop())
        },
        l = () => {
            if (!Object(i.a)()) try {
                c() && !window.parent.navigator.standalone && window.parent.scrollTo(0, 0)
            } catch (e) {}
        }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        i = n.n(r),
        o = n(1),
        s = n(10),
        a = n(212);
    t.a = Object(o.createSelector)([e => e.app, e => e.user, e => e.launcher, a.a], (e, t, n, r) => !r && function(e, t) {
        const {
            inboundMessages: n,
            outboundMessages: r,
            anonymousInboundMessages: i
        } = e.features;
        return "user" === t.role ? n || r : i
    }(e, t) && function(e) {
        switch (e.launcherEnabledOverride) {
            case "show":
                return !0;
            case "hide":
                return !1;
            default:
                return e.isLauncherEnabled
        }
    }(n) && ! function() {
        const e = s.b.get("intercom-snippet__intersection-mode");
        return !i()(e) && !(-1 !== ["inbound-custom-bot-preview", "outbound-custom-bot-preview"].indexOf(e))
    }())
}, , function(e, t, n) {
    "use strict";
    t.a = e => "participant_added" === e || "participant_removed" === e || "article_feedback_requested" === e || "temporary_expectations" === e
}, function(e, t, n) {
    "use strict";
    let r, i;
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "f", (function() {
        return a
    })), n.d(t, "e", (function() {
        return c
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "d", (function() {
        return l
    }));
    let o = !1;
    const s = () => r,
        a = e => r = e,
        c = e => i = e,
        u = () => i,
        d = () => !o,
        l = e => o = e
}, , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(3);
    const o = {
        maxRetries: 3
    };
    t.a = ({
        promise: e,
        maxRetries: t
    } = o) => {
        let n = 0;
        const s = Object(i.a)() ? window.requestAnimationFrame : window.parent.requestAnimationFrame,
            a = (i, o) => {
                e().then(e => i(e), e => {
                    n < t && s ? (n += 1, window.setTimeout(() => s(() => a(i, o)), 1e3 * n)) : (Object(r.g)("dynamicImportCdnError", {
                        message: e && e.message
                    }), o(e))
                })
            };
        return new Promise((e, t) => a(e, t))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "e", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "g", (function() {
        return d
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "h", (function() {
        return f
    }));
    var r = n(1);
    const i = e => e.messengerSheet,
        o = (Object(r.createSelector)(i, e => e.isSheetsDataLoading), Object(r.createSelector)(i, e => e.isSheetsDataLoaded)),
        s = Object(r.createSelector)(i, e => e.isProxyLoaded),
        a = Object(r.createSelector)(i, e => e.sheetTitle),
        c = Object(r.createSelector)(i, e => e.isNavigating),
        u = Object(r.createSelector)(i, e => e.isOpen),
        d = Object(r.createSelector)(i, e => e.sourceCard),
        l = Object(r.createSelector)(i, e => e.url),
        p = Object(r.createSelector)(i, e => e.data),
        f = Object(r.createSelector)(p, e => JSON.stringify(e))
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "d", (function() {
        return d
    }));
    var r = n(2),
        i = n(119),
        o = n(56);

    function s(e) {
        return {
            type: "RECEIVE_BANNERS",
            banners: e
        }
    }

    function a(e) {
        return (t, n) => {
            const r = n(),
                {
                    verticalPadding: s
                } = Object(o.a)(r),
                {
                    customizationOverrides: a = {}
                } = r,
                {
                    isSetByBanner: c
                } = a;
            (20 === s || c) && t(Object(i.a)({
                verticalPadding: e
            }))
        }
    }

    function c(e, t, n) {
        return (i, o) => {
            const {
                session: s
            } = o();
            i(function(e, t) {
                return {
                    type: "COLLECT_EMAIL_FROM_BANNER",
                    bannerId: e,
                    email: t
                }
            }(e, n)), r.b.collectEmailFromBanner(s, e, t, n)
        }
    }

    function u(e, t) {
        return (n, i) => {
            const {
                session: o
            } = i();
            n({
                type: "DISMISS_BANNER"
            }), r.b.dismissBanner(o, e, t);
            const a = [];
            for (const t of i().banners) t.banner_id !== e && a.push(t);
            n(s(a))
        }
    }

    function d(e, t, n) {
        return (i, o) => {
            const {
                session: s
            } = o();
            i(function(e, t) {
                return {
                    type: "REACT_TO_BANNER",
                    bannerId: e,
                    reaction: t
                }
            }(e, n)), r.b.reactToBanner(s, e, t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    class Predicate {
        constructor(e) {
            this.chain = e, this.matched = !1
        }
        trigger() {
            this.triggering || (this.triggering = !0, this.matched = !0, this.chain.evaluate(), this.triggering = !1)
        }
        evaluate() {
            return this.matched
        }
        cancel() {}
    }
    class composite_predicate_CompositePredicate extends Predicate {
        constructor(e, t) {
            super(e), this.predicates = t
        }
        cancel() {
            this.predicates.forEach(e => e.cancel())
        }
    }
    class and_predicate_AndPredicate extends composite_predicate_CompositePredicate {
        evaluate() {
            return this.predicates.every(e => e.evaluate())
        }
    }
    class duration_predicate_DurationPredicate extends Predicate {
        constructor(e, t) {
            super(e), this.interval = t, this.timer = setTimeout(() => this.trigger(), t)
        }
        cancel() {
            clearTimeout(this.timer)
        }
    }
    class duration_delta_predicate_DurationDeltaPredicate extends Predicate {
        constructor(e, t, n) {
            super(e), this.attribute = n, this.interval = t, setTimeout(() => this._createDeltaTimer(), 0)
        }
        _createDeltaTimer() {
            this.timer = setTimeout(() => {
                this._evaluateDeltaPredicate() ? this.trigger() : this._createDeltaTimer()
            }, this._getInterval())
        }
        _getInterval() {
            const e = this.getTimestamp();
            if (!e) return this.interval;
            const t = Date.now() - e;
            return Math.max(100, this.interval - t)
        }
        _evaluateDeltaPredicate() {
            const e = this.getTimestamp();
            return !!e && Date.now() - e > this.interval
        }
        getTimestamp() {
            return this.chain.getAttribute(this.attribute)
        }
        cancel() {
            clearTimeout(this.timer)
        }
    }
    class periodic_predicate_PeriodicPredicate extends Predicate {
        constructor(e, t, n) {
            super(e), this.missing = n || !1, this.interval = t, this.intervalTimer = setInterval(() => {
                this._check()
            }, t)
        }
        _check() {
            this.check() ? this.trigger() : this.matched = !1
        }
        evaluate() {
            return this._check(), this.matched
        }
        cancel() {
            clearInterval(this.intervalTimer)
        }
    }
    class duration_since_predicate_DurationSincePredicate extends periodic_predicate_PeriodicPredicate {
        constructor(e, t, n, r) {
            super(e, t, r), this.attribute = n
        }
        check() {
            const e = this.chain.getAttribute(this.attribute);
            return e ? Date.now() - e >= this.interval : this.missing
        }
    }
    class equals_predicate_EqualsPredicate extends periodic_predicate_PeriodicPredicate {
        constructor(e, t, n, r, i) {
            super(e, t), this.attribute = n, this.value = r, this.other = i
        }
        check() {
            return this.other ? this.chain.getAttribute(this.other) === this.chain.getAttribute(this.attribute) : this.value === this.chain.getAttribute(this.attribute)
        }
    }
    class or_predicate_OrPredicate extends composite_predicate_CompositePredicate {
        evaluate() {
            return this.predicates.some(e => e.evaluate())
        }
    }
    var r = n(24),
        i = n(22);
    var o = n(3);
    class css_selector_predicate_CssSelectorPredicate extends Predicate {
        constructor(e, t) {
            var n, r, i;
            super(e), i = e => {
                if (this.isNodeVisible(e)) {
                    if (this.matched) return;
                    this.trigger()
                } else this.matched = !1
            }, (r = "_check") in (n = this) ? Object.defineProperty(n, r, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = i, this.selector = t
        }
        evaluate() {
            if (Object(o.a)()) this.matched || (e = this.selector, t = e => {
                this._check(e)
            }, Object(i.f)(e, (e => t => e({
                offsetWidth: t.offsetWidth,
                offsetHeight: t.offsetHeight,
                getClientRects: () => t.clientRects
            }))(t)));
            else {
                const e = window.parent.document.querySelector(this.selector);
                this._check(e)
            }
            var e, t;
            return this.matched
        }
        isNodeVisible(e) {
            return e && Object(r.u)(e)
        }
    }
    class string_predicate_StringPredicate extends Predicate {
        constructor(e, t, n, r) {
            super(e), this.targetString = t, this.comparison = n, this.candidateString = r
        }
        evaluate() {
            return this.matched = this._check(), this.matched
        }
        _check() {
            switch (this.comparison) {
                case "eq":
                    return this.candidateString === this.targetString;
                case "ne":
                    return this.candidateString !== this.targetString;
                case "starts_with":
                    return this.targetString.startsWith(this.candidateString);
                case "ends_with":
                    return this.targetString.endsWith(this.candidateString);
                case "contains":
                    return -1 !== this.targetString.indexOf(this.candidateString);
                case "not_contains":
                    return !(-1 !== this.targetString.indexOf(this.candidateString));
                case "known":
                    return !!this.targetString && "" !== this.targetString;
                default:
                    return !1
            }
        }
    }
    var s = n(21);
    class url_predicate_UrlPredicate extends string_predicate_StringPredicate {
        constructor(e, t, n) {
            var r, i, o;
            super(e), o = () => {
                var e;
                return null === (e = Object(s.d)()) || void 0 === e ? void 0 : e.href.toLowerCase()
            }, (i = "_getURL") in (r = this) ? Object.defineProperty(r, i, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[i] = o, this.targetString = this._getURL(), this.comparison = t, this.candidateString = null == n ? void 0 : n.toLowerCase(), setTimeout(() => this.evaluate(), 0), this.interval = setInterval(() => this.evaluate(), 1e3)
        }
        evaluate() {
            return this.targetString = this._getURL(), this._check() ? this.trigger() : this.matched = !1, this.matched
        }
        _check() {
            switch (this.comparison) {
                case "regex":
                    return new RegExp(this.candidateString).test(this.targetString);
                default:
                    return super._check()
            }
        }
        cancel() {
            clearInterval(this.interval)
        }
    }
    n.d(t, "a", (function() {
        return predicate_chain_PredicateChain
    }));
    class predicate_chain_PredicateChain {
        constructor(e, t) {
            this.condition = e, this.callback = t, this.root = new and_predicate_AndPredicate(this, this.processSubpredicates(e.predicates))
        }
        evaluate() {
            if (!this.evaluating) {
                this.evaluating = !0;
                const e = this.root.evaluate();
                return e && (this.cancel(), setTimeout(() => this.callback(this.condition), 0)), this.evaluating = !1, e
            }
        }
        cancel() {
            this.root.cancel()
        }
        setContext(e) {
            this.context = e
        }
        getAttribute(e) {
            if (this.context) return this.context[e]
        }
        processPredicate(e) {
            switch (e.type) {
                case "or":
                    return new or_predicate_OrPredicate(this, this.processSubpredicates(e.predicates));
                case "and":
                    return new and_predicate_AndPredicate(this, this.processSubpredicates(e.predicates));
                case "eq":
                    return new equals_predicate_EqualsPredicate(this, this.parseInterval(e.interval), e.attribute, e.value, e.other);
                case "string":
                    if ("client_attributes.last_visited_url" === e.attribute) return new url_predicate_UrlPredicate(this, e.comparison, e.value);
                case "duration_integer":
                    return new duration_predicate_DurationPredicate(this, 1e3 * this.parseInterval(e.value));
                case "duration_integer_ms":
                    return new duration_predicate_DurationPredicate(this, this.parseInterval(e.value));
                case "duration_delta":
                    return new duration_delta_predicate_DurationDeltaPredicate(this, this.parseInterval(e.value), e.attribute);
                case "duration_since":
                    return new duration_since_predicate_DurationSincePredicate(this, this.parseInterval(e.value), e.attribute, e.missing);
                case "css_selector":
                    return new css_selector_predicate_CssSelectorPredicate(this, e.value)
            }
        }
        parseInterval(e) {
            return parseInt(e, 10)
        }
        processSubpredicates(e) {
            return e ? e.map(e => this.processPredicate(e)).filter(Boolean) : []
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    }));
    const r = e => {
            const t = function(t) {
                    return e[t]
                },
                n = "(?:" + Object.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        },
        i = r({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }),
        o = r({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`",
            "&#39;": "'"
        })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return {
            type: "CREATE_CUSTOMIZATION_OVERRIDE",
            customizationAttributes: e
        }
    }

    function i(e) {
        return {
            type: "CREATE_BANNER_CUSTOMIZATION_OVERRIDE",
            customizationAttributes: e
        }
    }
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    let r;

    function i(e, t) {
        return n => {
            n({
                type: "SHOW_ALERT",
                payload: {
                    alertType: e,
                    alertPayload: t
                }
            }), r && clearTimeout(r), r = setTimeout(() => {
                n({
                    type: "CLOSE_ALERT"
                })
            }, 5e3)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    }));
    var r = n(5),
        i = n(44),
        o = n(11);

    function s(e) {
        return (t, n) => {
            t({
                type: "GET_UNREAD_CONVERSATIONS_REQUEST"
            });
            const {
                session: o
            } = n();
            return e.getUnreadConversations(o).then(o => {
                ! function(e, t, n, o) {
                    n(c(e));
                    const {
                        unreadConversationIds: s
                    } = e;
                    s.length > 0 && n(Object(i.d)(t, "handleUnreadConversations"));
                    const u = o(),
                        {
                            conversationId: d
                        } = u.app;
                    a(u, s) && n(Object(r.l)(t, d))
                }(o, e, t, n)
            }).catch(() => {})
        }
    }

    function a(e, t) {
        const {
            conversationId: n
        } = e.app;
        return "conversation" === Object(o.e)(e) && -1 !== t.indexOf(n)
    }

    function c(e) {
        return {
            type: "GET_UNREAD_CONVERSATIONS_SUCCESS",
            unreadConversations: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "a", (function() {
        return u
    }));
    var r = n(1);
    const i = e => e.triggers,
        o = Object(r.createSelector)(i, e => e.triggers),
        s = Object(r.createSelector)(i, e => e.active),
        a = Object(r.createSelector)(i, e => e.failed),
        c = e => Object(r.createSelector)(o, t => {
            const n = t[e];
            if (n) return n;
            throw new Error(`Can't find the messenger trigger of id=${e}`)
        }),
        u = Object(r.createSelector)(o, s, (e, t) => {
            const n = e[t];
            if (n) return n;
            throw new Error("No messenger trigger is active")
        })
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    var r = n(2);

    function i(e) {
        const {
            activeSubscription: t,
            userHashVerified: n,
            secureInstallV2: r,
            messengerEnabledForVisitors: i,
            messengerEnabledForUsers: o
        } = e;
        return {
            type: "OPEN_INSTALL_MODE",
            activeSubscription: t,
            userHashVerified: n,
            secureInstallV2: r,
            messengerEnabledForVisitors: i,
            messengerEnabledForUsers: o
        }
    }

    function o() {
        return {
            type: "CLOSE_INSTALL_MODE"
        }
    }

    function s() {
        return (e, t) => {
            const {
                session: n
            } = t();
            return r.b.disableInstallMode(n).then(() => {
                e({
                    type: "CLOSE_INSTALL_MODE"
                })
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(29),
        i = n(44);
    const o = e => (t, n) => {
            t(s());
            const {
                session: o,
                user: d,
                app: l
            } = n();
            return e.getHomeScreenCards(o, {
                homeScreenSlots: d.homeScreenSlots,
                selfServeSuggestionsMatch: l.selfServeSuggestionsMatch
            }).then(n => {
                if (t(Object(i.e)(n)), !1 === n.cardsSuccess) t(c(n.conversations)), t(u("Couldn't load apps"));
                else {
                    const i = n.cards || n;
                    i.forEach(n => t(Object(r.a)(e, n))), t(a(i.map(e => e.uri), n.conversations, n.hasMoreConversations, n.articleCollections))
                }
            }).catch(e => {
                t(u(e))
            })
        },
        s = () => ({
            type: "GET_HOME_SCREEN_CARDS_REQUEST"
        }),
        a = (e, t, n, r) => ({
            type: "GET_HOME_SCREEN_CARDS_SUCCESS",
            cardUris: e,
            conversations: t,
            hasMoreConversations: n,
            articleCollections: r
        }),
        c = e => ({
            type: "GET_HOME_SCREEN_CONVERSATIONS_SUCCESS",
            conversations: e
        }),
        u = e => ({
            type: "GET_HOME_SCREEN_CARDS_FAILURE",
            error: e
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return a
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    }));
    var r = n(28),
        i = n.n(r),
        o = n(2),
        s = n(0);

    function a(e) {
        return (t, n) => {
            const {
                session: r,
                user: i
            } = n();
            return Object(s.h)(i, "submitted", "input", "search-browse", "messenger", {
                phrase: e
            }), t(function(e) {
                return {
                    type: "SEARCH_ARTICLES_REQUEST",
                    phrase: e
                }
            }(e)), o.b.searchArticles(r, e).then(n => {
                t(function(e, t) {
                    return {
                        type: "SEARCH_ARTICLES_SUCCESS",
                        articles: t.articles,
                        totalCount: t.totalCount,
                        phrase: e
                    }
                }(e, n))
            }).catch(() => {
                t(function(e) {
                    return {
                        type: "SEARCH_ARTICLES_FAILURE",
                        phrase: e
                    }
                }(e))
            })
        }
    }
    const c = i()((e, t) => e(a(t)), 400, {
        leading: !1,
        trailing: !0
    });

    function u(e) {
        return t => {
            c(t, e)
        }
    }

    function d(e) {
        return (t, n) => {
            const {
                session: r
            } = n();
            return t(function(e) {
                return {
                    type: "GET_ARTICLES_IN_COLLECTION_REQUEST",
                    collectionId: e
                }
            }(e)), o.b.getArticlesInCollection(r, e).then(n => {
                t(function(e, t) {
                    return {
                        type: "GET_ARTICLES_IN_COLLECTION_SUCCESS",
                        collectionId: e,
                        articles: t
                    }
                }(e, n))
            }).catch(n => {
                t(function(e, t) {
                    return {
                        type: "GET_ARTICLES_IN_COLLECTION_FAILURE",
                        collectionId: e,
                        error: t
                    }
                }(e, n))
            })
        }
    }
}, , , , function(e, t, n) {
    "use strict";

    function r(e, t) {
        return async (n, r) => {
            const i = r(),
                {
                    session: o
                } = i;
            let s;
            if (!t.payload || !t.payload.conversationId) throw new Error("conversationId needs to be provided as a parameter");
            s = t.payload.conversationId;
            try {
                n({
                    type: "TRIGGER_TRANSITIONS_REQUEST",
                    payload: {
                        timestamp: Date.now()
                    }
                }), n(function(e) {
                    return {
                        type: "TRIGGER_TRANSITIONS_SUCCESS",
                        payload: e,
                        conversation: e
                    }
                }(await e.triggerTransitions(o, s, t)))
            } catch (e) {
                n({
                    type: "TRIGGER_TRANSITIONS_FAILURE",
                    error: !0,
                    payload: new Error((e || "An error occured when triggering Operator transition.").toString())
                })
            }
        }
    }
    var i = n(9),
        o = n(2),
        s = n(0);

    function a(e, t, n, r = !1) {
        return (a, c) => {
            const {
                session: u,
                app: d,
                user: l
            } = c(), {
                conversationId: p
            } = d;
            return n && Object(s.h)(l, "clicked", "article", "search-browse", "messenger"), o.b.getArticle(u, e, p, n).then(e => {
                a({
                    type: "OPEN_ARTICLE",
                    article: e,
                    openInline: n,
                    metricMetadata: t,
                    conversationId: p,
                    isExpanded: n,
                    forceTransitionComplete: r
                }), n && a(Object(i.k)())
            })
        }
    }

    function c(e) {
        return (t, n) => {
            const {
                user: r
            } = n(), i = e ? "expanded" : "collapsed";
            Object(s.h)(r, i, "article", "search-browse", "messenger"), t({
                type: "TOGGLE_ARTICLE_EXPANDED_MODE",
                isExpanded: e
            })
        }
    }

    function u() {
        return {
            type: "EXPANSION_TRANSITION_COMPLETE"
        }
    }

    function d() {
        return (e, t) => {
            const {
                user: n
            } = t();
            Object(s.h)(n, "closed", "article", "search-browse", "messenger"), e({
                type: "CLOSE_INLINE_ARTICLE"
            })
        }
    }

    function l(e) {
        return (t, n) => {
            const {
                app: i
            } = n(), {
                conversationId: o
            } = i;
            t({
                type: "CLOSE_ARTICLE",
                closedAt: new Date
            }), t(r(e, {
                type: "closed_article",
                payload: {
                    conversationId: o
                }
            }))
        }
    }

    function p(e, t, n, r) {
        return (i, o) => {
            const {
                user: a
            } = o();
            return Object(s.h)(a, "clicked", "reaction", "search-browse", "messenger", {
                reaction_index: n
            }), i(f(e, t, n, r))
        }
    }

    function f(e, t, n, r) {
        return (i, o) => {
            i({
                type: "CREATE_ARTICLE_REACTION_REQUEST",
                articleId: t,
                reactionIndex: n
            });
            const {
                session: s
            } = o();
            return e.createArticleReaction(s, t, n, !1, r)
        }
    }

    function h() {
        return {
            type: "ARTICLE_LOADED"
        }
    }
    n.d(t, "g", (function() {
        return a
    })), n.d(t, "h", (function() {
        return c
    })), n.d(t, "f", (function() {
        return u
    })), n.d(t, "c", (function() {
        return d
    })), n.d(t, "b", (function() {
        return l
    })), n.d(t, "e", (function() {
        return p
    })), n.d(t, "d", (function() {
        return f
    })), n.d(t, "a", (function() {
        return h
    }))
}, function(e, t, n) {
    "use strict";
    t.a = e => {
        try {
            return window.btoa(unescape(encodeURIComponent(e)))
        } catch (t) {
            return e
        }
    }
}, function(e, t) {
    e.exports = {
        source_map: "hidden-source-map",
        api_base: "https://api-iam.intercom.io",
        public_path: "https://js.intercomcdn.com/",
        sheets_proxy_path: "https://intercom-sheets.com/sheets_proxy",
        sentry_proxy_path: "https://www.intercom-reporting.com/sentry/index.html",
        install_mode_base: "https://app.intercom.com",
        sentry_dsn: "https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287",
        intersection_js: "https://js.intercomcdn.com/intersection/assets/app.js",
        intersection_styles: "https://js.intercomcdn.com/intersection/assets/styles.js",
        article_search_messenger_app_id: 27,
        mode: "production",
        priv_sep_html_path: "https://www.intercom-reporting.com"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }));
    const r = 300,
        i = "ease-in-out"
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        return void 0 !== e.AndroidHost ? e.AndroidHost : void 0 !== e.iOSHost ? e.iOSHost : void 0
    }

    function i(e) {
        return void 0 !== e.AndroidHost ? "android" : void 0 !== e.iOSHost ? "ios" : void 0
    }
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return h
    })), n.d(t, "d", (function() {
        return _
    })), n.d(t, "a", (function() {
        return g
    })), n.d(t, "b", (function() {
        return O
    }));
    var r = n(28),
        i = n.n(r),
        o = n(2),
        s = n(5),
        a = n(18),
        c = n(37),
        u = n(0),
        d = n(41);
    let l = 0,
        p = "",
        f = !1;

    function h(e, t) {
        return (n, r) => {
            const i = r(),
                {
                    composerSuggestions: o
                } = Object(d.b)(i);
            if (!o || !o.isDismissed) return p = e, b(n, r, t)
        }
    }
    const b = i()((function e(t, n, r) {
        const i = ++l,
            s = p,
            a = n(),
            {
                session: c
            } = a,
            {
                composerSuggestions: h
            } = Object(d.b)(a);
        if (!h || !h.loading) return f = !1, t(m(!0, r)), Object(o.c)(c, s, 3).then(o => {
            if (t(m(!1, r)), t(g(o, r, i)), f && p !== s) return b.cancel(), void e(t, n, r);
            const a = Object.assign({}, {
                query: s,
                conversation_id: r
            }, o);
            Object(u.e)("received", "composer_smart_suggestions", "messenger", {}, a, "m4_metric")
        });
        f = !0
    }), 150, {
        leading: !1,
        trailing: !0
    });

    function _(e, t, n, r = !1, i, o) {
        return async (u, d) => {
            const l = d(),
                p = (null == t ? void 0 : t.id) || null,
                {
                    session: f,
                    newConversation: h,
                    user: b
                } = l,
                _ = Object(a.b)(),
                m = new Date;
            if (u(g(null, p)), p) {
                const a = {
                    conversationId: p,
                    clientId: _,
                    createdAt: m,
                    body: Object(c.c)(n.text),
                    composerSuggestionItem: n
                };
                try {
                    u(Object(s.e)(p, a, r)), await e.fireComposerSuggestion(f, {
                        conversationId: p,
                        suggestion: n,
                        clientId: _
                    }), u(Object(s.f)(p, a, i, t.lastParticipatingAdmin, o, !1, m, !0))
                } catch (e) {
                    u(Object(s.d)(p, a, e))
                }
            } else {
                const t = {
                    clientId: _,
                    body: Object(c.c)(n.text),
                    createdAt: m,
                    composerSuggestionItem: n
                };
                try {
                    u(Object(s.h)(t, r));
                    const i = await e.fireComposerSuggestion(f, {
                        conversationId: p,
                        suggestion: n,
                        clientId: _,
                        botIntro: h ? h.botIntroId : null,
                        resolutionBotBehaviorVersionId: b ? b.resolutionBotBehaviorVersionId : null
                    });
                    u(Object(s.i)(i, null, null, m, "resolution_bot_auto_suggest"))
                } catch (e) {
                    u(Object(s.g)(null))
                }
            }
        }
    }

    function g(e, t, n = ++l) {
        return {
            type: "SET_COMPOSER_SUGGESTIONS",
            conversationId: t,
            composerSuggestions: e,
            priority: n
        }
    }

    function m(e, t) {
        return {
            type: "SET_COMPOSER_SUGGESTIONS_LOADING",
            conversationId: t,
            loadingStatus: e
        }
    }

    function O(e) {
        return {
            type: "SET_COMPOSER_SUGGESTIONS_DISMISSED",
            conversationId: e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return h
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "h", (function() {
        return _
    })), n.d(t, "a", (function() {
        return g
    })), n.d(t, "f", (function() {
        return m
    })), n.d(t, "g", (function() {
        return O
    })), n.d(t, "c", (function() {
        return E
    })), n.d(t, "e", (function() {
        return S
    }));
    var r = n(160),
        i = n(29),
        o = n(152),
        s = n(70),
        a = n(217),
        c = n(114),
        u = n(9),
        d = n(11),
        l = n(0),
        p = n(120),
        f = n(63);

    function h(e, t) {
        return (n, r) => {
            const {
                intercomSheet: i
            } = t.data || {}, o = r(), u = Object(c.g)(o);
            if (!i) return null;
            switch (i.type) {
                case a.b:
                    n({
                        type: "FINISH_NAVIGATION"
                    });
                    break;
                case s.g:
                    n({
                        type: "START_NAVIGATION"
                    });
                    break;
                case s.b:
                    n({
                        type: "FINISH_NAVIGATION"
                    });
                    break;
                case s.a:
                    n(g("sheet_api_close"));
                    break;
                case s.f:
                    if (!i.payload) return;
                    n(m(i.payload.title));
                    break;
                case s.h:
                    if (!u) return null;
                    n({
                        type: "START_NAVIGATION"
                    }), n(_(e, i.payload))
            }
        }
    }

    function b(e, t, n, r, i) {
        return (o, s) => {
            const {
                app: {
                    isMessengerOpen: a
                },
                session: c
            } = s();
            return a || o(Object(u.m)()), o(function(e, t, n) {
                return {
                    type: "OPEN_SHEET",
                    url: e,
                    cardUri: t,
                    componentId: n
                }
            }(r, t, n)), o(v()), o(Object(f.a)()), e.fetchMessengerSheetData(c, t, n, i).then(e => {
                o(y(e))
            }).catch(() => {
                o(C())
            })
        }
    }

    function _(e, t) {
        return (n, s) => {
            const a = s(),
                {
                    cardUri: u
                } = Object(c.g)(a),
                {
                    session: d
                } = a;
            return e.submitSheet(d, u, t).then(t => {
                n(Object(r.b)(t)), n(Object(i.a)(e, t))
            }).then(() => new Promise(e => setTimeout(e, 2 * o.b))).then(() => {
                n({
                    type: "FINISH_NAVIGATION"
                }), n(g("sheet_api_submit"))
            }).catch(() => {
                n(Object(p.a)("MessengerSheetSubmitError", {
                    sheetValues: t
                }))
            })
        }
    }

    function g(e) {
        return (t, n) => {
            const r = n(),
                i = Object(c.g)(r),
                {
                    cardUri: o
                } = i,
                {
                    card: s
                } = r.messengerCards[o];
            if (s) {
                const {
                    url: t
                } = r.messengerSheet, {
                    user: n,
                    app: {
                        conversationId: i
                    }
                } = r;
                ! function(e, t, n, r, i, o) {
                    l.j.buildAndAddMetric(e, "closed", "messenger_sheet", "messenger", t, {
                        url: n,
                        messenger_card_uri: r,
                        messenger_app_id: i,
                        conversation_id: o
                    }, "m4_metric")
                }(n, "sheet_api_submit" === e || "sheet_api_close" === e ? e : Object(d.e)(r), t, o, s.messenger_app_id, i)
            }
            t({
                type: "CLOSE_SHEET"
            })
        }
    }

    function m(e) {
        return {
            type: "SET_SHEET_TITLE",
            sheetTitle: e
        }
    }

    function O() {
        return {
            type: "START_NAVIGATION"
        }
    }

    function E() {
        return {
            type: "FINISH_NAVIGATION"
        }
    }

    function S(e = !1) {
        return {
            type: "SET_PROXY_LOADED_STATUS",
            isLoaded: e
        }
    }
    const v = () => ({
            type: "FETCH_MESSENGER_SHEET_DATA_REQUEST"
        }),
        y = e => ({
            type: "FETCH_MESSENGER_SHEET_DATA_SUCCESS",
            data: e
        }),
        C = () => ({
            type: "FETCH_MESSENGER_SHEET_DATA_FAILURE"
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "c", (function() {
        return a
    }));
    var r = n(145),
        i = n(0);

    function o(e) {
        return t => {
            "" !== e && t(Object(r.a)(e)), t({
                type: "BROWSE_MODE_PHRASE_UPDATED",
                phrase: e
            })
        }
    }

    function s(e) {
        return (t, n) => {
            const {
                user: o
            } = n();
            Object(i.h)(o, "clicked", "topic", "search-browse", "messenger"), t({
                type: "SELECT_ARTICLE_COLLECTION",
                collectionId: e
            }), t(Object(r.b)(e))
        }
    }

    function a(e) {
        return {
            type: "TOGGLE_SHOW_CONVERSATION_CARD",
            showNewConversationCard: e
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "c", (function() {
        return d
    }));
    var r = n(3);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const s = n(151),
        {
            assign: a
        } = Object;

    function c() {
        var e;
        if (Object(r.a)()) return;
        const t = window.parent || window;
        return t ? (null == t ? void 0 : null === (e = t.intercomSettings) || void 0 === e ? void 0 : e.api_base) || function(e) {
            const t = e.document.querySelector("meta[name=intercom-js-api-base]");
            return null == t ? void 0 : t.content
        }(t) : void 0
    }

    function u() {
        const e = a({}, s),
            t = {
                api_base: c()
            };
        return t.api_base ? (console.log("Overriding config", t), function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(n, !0).forEach((function(t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, e, {}, t)) : e
    }

    function d() {
        return !1
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return c
    }));
    var r = n(46),
        i = n(29),
        o = n(120);
    const s = (e, t, n, r) => (s, d) => {
            const {
                session: l
            } = d();
            return s(a(t, n)), e.submitMessengerCardAction(l, t, n, r).then(t => {
                s(c(t)), s(Object(i.a)(e, t))
            }).catch(() => {
                s(u(t, n)), s(Object(o.a)("MessengerCardSubmitError", {
                    cardUri: t,
                    componentId: n,
                    inputValues: r
                }))
            })
        },
        a = (e, t) => ({
            type: "SUBMIT_MESSENGER_CARD_ACTION_REQUEST",
            cardUri: e,
            componentId: t
        }),
        c = e => ({
            type: "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS",
            card: Object(r.c)(e)
        }),
        u = (e, t) => ({
            type: "SUBMIT_MESSENGER_CARD_ACTION_FAILURE",
            cardUri: e,
            componentId: t
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "d", (function() {
        return c
    }));
    var r = n(32);

    function i(e) {
        return {
            type: "OPEN_BOUND_EVENT_CREATOR",
            stage: e.stage,
            eventData: e.eventData
        }
    }

    function o(e, t) {
        return Object(r.h)(e, t), {
            type: "CHANGE_BOUND_EVENT_CREATOR_STAGE",
            newStage: t
        }
    }

    function s(e, t) {
        return Object(r.g)(e, t), {
            type: "UPDATE_BOUND_EVENT_DATA",
            eventData: t
        }
    }

    function a(e) {
        return Object(r.d)(e), {
            type: "CLOSE_BOUND_EVENT_CREATOR"
        }
    }

    function c(e, t) {
        return Object(r.e)(e, t), {
            type: "SAVE_BOUND_EVENT",
            eventData: t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(55),
        i = n(6),
        o = n(1);
    const s = Object(o.createSelector)([r.a, e => e.dismissedPointers], (e, t) => e.filter(e => !(e.read && t[e.id]) && Object(i.n)(e)));
    t.a = Object(o.createSelector)(e => {
        const {
            conversations: {
                byId: t
            },
            pointerMessage: {
                conversationId: n
            }
        } = e;
        return t[n]
    }, s, (e, t) => {
        return n = t, void 0 !== (r = e) && !((e, t) => void 0 !== e.find(e => e.id === t.id))(n, r) && Object(i.n)(r) ? n.concat(r) : n;
        var n, r
    })
}, function(e, t, n) {
    "use strict";
    var r = n(8);
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    n.d(t, "a", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    }));
    const o = e => {
            const t = (e = e || "").match(/[^\x00-\x7F]/);
            if (!e || r.a.isSafari() && t) {
                const t = e.split(".");
                e = `File${(new Date).getTime()}`, t.length > 1 && (e += `.${t[t.length-1]}`)
            }
            return e
        },
        s = (e, t, n) => {
            if (!e) return;
            let r;
            if (e.split(",")[0].indexOf("base64") >= 0) {
                const t = e.split(",")[1];
                r = window.atob ? atob(t) : (e => {
                    if (!e || e.length % 4 != 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    let t = 0;
                    const n = e.length,
                        r = e.indexOf("=") > 0 ? e.length - e.indexOf("=") : 0,
                        o = new Uint8Array(3 * n / 4 - r),
                        s = new Array(4);
                    for (let n = 0; n < e.length; n += 4) s[0] = i.indexOf(e[n]), s[1] = i.indexOf(e[n + 1]), s[2] = i.indexOf(e[n + 2]), s[3] = i.indexOf(e[n + 3]), o[t++] = 255 & (s[0] << 2 | s[1] >> 4), s[2] < 64 && (o[t++] = 255 & (s[1] << 4 | s[2] >> 2), s[3] < 64 && (o[t++] = 255 & (s[2] << 6 | s[3])));
                    let a = "";
                    for (let e = 0; e < o.length; e++) a += String.fromCharCode(parseInt(o[e]));
                    return a
                })(t)
            } else r = unescape(e.split(",")[1]);
            const o = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
            const s = new Blob([o], {
                type: n
            });
            return s.lastModifiedDate = new Date, s.name = t, s
        }
}, function(e, t, n) {
    "use strict";
    var r = n(155),
        i = n(91),
        o = n(40),
        s = n(5),
        a = n(9),
        c = n(37),
        u = n(18);

    function d(e, t, n, r, i = null, o = !1, d = !1, l, p) {
        return (f, h) => {
            const b = h(),
                {
                    session: _,
                    borderless: g
                } = b;
            let m;
            m = "message" === n.partType ? null : n.id;
            const O = function(e) {
                    if (e && e.clientId) return e.clientId;
                    return Object(u.b)()
                }(i),
                E = new Date,
                S = Object(c.c)(r.text),
                v = {
                    conversationId: t,
                    clientId: O,
                    createdAt: E,
                    body: S,
                    selectedReplyOption: {
                        replyOption: r,
                        quickReplyPart: n
                    }
                };
            return f(Object(s.e)(t, v, o)), g && g.conversationId || f(Object(a.f)(t)), e.quickReply(_, t, m, r, O).then(e => {
                f(Object(s.f)(t, e, d, l, p, !1, E))
            }).catch(e => {
                f(Object(s.d)(t, v, e))
            })
        }
    }
    var l = n(0);

    function p(e, t, n, s = !1, a, c, u) {
        return "messenger_suggested_content" === n.type ? Object(r.d)(e, t, n, s, c, u) : "quick_reply" === n.type ? (a.replyOptions && -1 === a.replyOptions.map(e => e.uuid).indexOf(n.uuid) && (Object(l.c)("quick_reply_uuid_mismatch"), Object(l.g)("quick_reply_uuid_mismatch"), Object(l.b)(`quick_reply_uuid_mismatch partId=${a.id} uuid=${n.uuid}`)), d(e, t.id, a, n)) : "predictive_answer" === n.type ? Object(i.b)(e, n, s) : Object(o.c)(e, n, s)
    }
    n.d(t, "a", (function() {
        return p
    }))
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t;
        e && e.Element && ("function" != typeof(t = e.Element.prototype).matches && (t.matches = t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || function(e) {
            const t = this,
                n = (t.document || t.ownerDocument).querySelectorAll(e);
            let r = 0;
            for (; n[r] && n[r] !== t;) ++r;
            return Boolean(n[r])
        }), "function" != typeof t.closest && (t.closest = function(e) {
            let t = this;
            for (; t && 1 === t.nodeType;) {
                if (t.matches(e)) return t;
                t = t.parentNode
            }
            return null
        }))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.session], e => !(!e || !e.token))
}, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "d", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    }));
    var r = n(44);

    function i(e, t) {
        return (n, i) => {
            const {
                session: a
            } = i();
            return n(o(a, t)), e.createOrUpdateUser(a, null, t, "updateUserSuppliedEmail").then(i => {
                n(s(i, t)), i.unreadConversationIds.length > 0 && n(Object(r.d)(e, "updateUserSuppliedEmail"))
            })
        }
    }

    function o(e, t) {
        return {
            type: "UPDATE_USER_SUPPLIED_EMAIL_REQUEST",
            session: e,
            userSuppliedEmail: t
        }
    }

    function s(e, t) {
        return {
            type: "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS",
            user: e,
            userSuppliedEmail: t
        }
    }

    function a(e, t) {
        return (n, r) => {
            const {
                session: i
            } = r();
            return n({
                type: "UPDATE_PHONE_NUMBER_REQUEST"
            }), e.updatePhoneNumber(i, t).then(() => {
                n(function(e) {
                    return {
                        type: "UPDATE_PHONE_NUMBER_SUCCESS",
                        phoneNumber: e
                    }
                }(t))
            }).catch(e => {
                let t;
                e && (t = JSON.parse(e).message), n(function(e) {
                    return {
                        type: "UPDATE_PHONE_NUMBER_FAILURE",
                        message: e
                    }
                }(t))
            })
        }
    }

    function c() {
        return {
            type: "INPUT_VALUE_CHANGED"
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = e => ({
        type: "DISMISS_POINTER_MESSAGE",
        conversationId: e
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }));
    var r = n(230),
        i = n.n(r),
        o = n(65),
        s = n.n(o),
        a = n(1);
    const c = Object(a.createSelector)(e => e.inboundSuggestions, e => {
        if (!e) return null;
        if (e.previewSuggestions) return e.previewSuggestions;
        return e.allSuggestions && e.allSuggestions.length > 0 ? i()(s()(e.allSuggestions, "updatedAt", "desc")) : null
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return i
    }));
    const r = "html-loaded",
        i = "sheet-loaded"
}, , function(e, t, n) {
    var r = {
        "./failed.mp3": 402,
        "./notification.mp3": 403,
        "./operator.mp3": 404,
        "./submit.mp3": 405
    };

    function i(e) {
        var t = o(e);
        return n(t)
    }

    function o(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 219
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(10);
    const i = () => !!r.b.get("intercom-snippet__intersection-mode")
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.app], e => e.isMessengerOpen)
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.accessibility], e => e)
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        i = n(158),
        o = n.n(i),
        s = n(56);
    t.a = Object(r.createSelector)(s.b, ({
        color: e,
        secondaryColor: t
    }) => {
        if (!e || !t) return {};
        const {
            gradient_start_color: n,
            gradient_end_color: r,
            button_text_color: i
        } = o()({
            primaryColor: e,
            secondaryColor: t,
            darkenAmount: 20
        });
        return {
            primaryColor: e,
            secondaryColor: t,
            gradientStartColor: n,
            gradientEndColor: r,
            buttonTextColor: i
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.app], e => e.isBooted || e.bootFailed || e.isBooting && e.isInstantBootEnabled)
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = Object(r.createSelector)([e => e.user], e => e ? e.locale : void 0)
}, , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(241)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(242);
    var r = n(3);
    void 0 !== window && void 0 !== window.Object && (!Object(r.a)() && window.parent.__INTERCOM_REACT_DEV_TOOLS__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__), n(410))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = {
        "./ar.json": [411, 7],
        "./bg.json": [412, 8],
        "./bs.json": [413, 9],
        "./ca.json": [414, 10],
        "./cs.json": [415, 11],
        "./da.json": [416, 12],
        "./de-form.json": [417, 13],
        "./de.json": [418, 14],
        "./el.json": [419, 15],
        "./en.json": [211],
        "./es.json": [420, 16],
        "./et.json": [421, 17],
        "./fi.json": [422, 18],
        "./fr.json": [423, 19],
        "./he.json": [424, 20],
        "./hr.json": [425, 21],
        "./hu.json": [426, 22],
        "./id.json": [427, 23],
        "./it.json": [428, 24],
        "./ja.json": [429, 25],
        "./ko.json": [430, 26],
        "./lt.json": [431, 27],
        "./lv.json": [432, 28],
        "./mn.json": [433, 29],
        "./nb.json": [434, 30],
        "./nl.json": [435, 31],
        "./package.json": [436, 32],
        "./pl.json": [437, 33],
        "./pt-BR.json": [438, 34],
        "./pt.json": [439, 35],
        "./ro.json": [440, 36],
        "./ru.json": [441, 37],
        "./sl.json": [442, 38],
        "./sr.json": [443, 39],
        "./sv.json": [444, 40],
        "./tr.json": [445, 41],
        "./vi.json": [446, 42],
        "./zh-CN.json": [447, 43],
        "./zh-TW.json": [448, 44]
    };

    function i(e) {
        if (!n.o(r, e)) return Promise.resolve().then((function() {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = r[e],
            i = t[0];
        return Promise.all(t.slice(1).map(n.e)).then((function() {
            return n.t(i, 3)
        }))
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.id = 371, e.exports = i
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n.p + "audio/failed.4da3027c.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/notification.20576730.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/operator.2b750c4a.mp3"
}, function(e, t, n) {
    e.exports = n.p + "audio/submit.3abafccd.mp3"
}, , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(177),
        i = n(11),
        o = n(92),
        s = n(36),
        a = n(26),
        c = n.n(a),
        u = n(23),
        d = n(93),
        l = n(15),
        p = n(40),
        f = n(119),
        h = n(33),
        b = n(156),
        _ = n(2),
        g = n(1);
    const m = e => e.operator,
        O = Object(g.createSelector)(m, e => e.lastComposerEvent),
        E = Object(g.createSelector)(m, e => e.clientsideMessageConditions);
    var S = n(116);
    class predicates_matcher_PredicatesMatcher {
        constructor(e) {
            this.callback = e, this.isStarted = !1, this.context = {}
        }
        start(e) {
            this.isStarted && this.shutdown(), this.conditions = e, this._setupPredicates(e), this.isStarted = !0
        }
        shutdown() {
            this.predicateChains && this.predicateChains.forEach(e => e.cancel()), this.isStarted = !1
        }
        setContext(e) {
            this.predicateChains && this.predicateChains.forEach(t => t.setContext(e))
        }
        _setupPredicates(e) {
            this.predicateChains = e.map(e => new S.a(e, this.callback))
        }
    }
    var v = n(5),
        y = n(29),
        C = n(6);
    const I = Object(g.createStructuredSelector)({
        clientsideMessageConditions: E
    });
    var T = function(e) {
            const t = new predicates_matcher_PredicatesMatcher(t => {
                var n;
                e.dispatch((n = t, (e, t) => {
                    const {
                        session: r
                    } = t();
                    return _.b.visitorAutoMessageConditionSatisfied(r, n).then(t => {
                        t && (Object(C.s)(t).forEach(t => e(Object(y.a)(_.b, t, !1))), e({
                            type: "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS"
                        }), e(Object(v.o)(_.b, t, !1, Date.now())))
                    }, () => e({
                        type: "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR"
                    }))
                }))
            });
            return () => {
                const {
                    clientsideMessageConditions: n
                } = I(e.getState()), {
                    conditions: r
                } = t;
                ((e, t) => {
                    if (!t) return !1;
                    if (!e && t) return !0;
                    if (e.length !== t.length) return !0;
                    const n = e.map(e => e.id),
                        r = t.map(e => e.id);
                    return !n.every(e => r.indexOf(e) >= 0)
                })(r, n) && t.start(n)
            }
        },
        w = n(61),
        A = n(39);
    var R = n(16),
        j = n(0),
        N = n(8);

    function M(e) {
        return e.reduce((e, t) => Object(C.m)(t) ? e : (e[Object(C.g)(t)] = !0, e), {})
    }

    function P(e, t) {
        const n = Object(A.a)(t).length > 0 && function(e, t) {
            const {
                forceSnippet: n
            } = t.notificationTypeOverrides;
            return e.filter(e => {
                if (Object(C.m)(e)) return !1;
                const t = `${e.id}-${Object(R.a)(e.parts).id}`;
                return void 0 === n[t]
            })
        }(e, t).length > 0;
        if (Object(N.g)() && void 0 !== e.find(e => Object(C.i)(e))) return !0;
        const r = new Date;
        return r.setDate(r.getDate() - 2), !((t.user ? new Date(t.user.lastContactedAt) : new Date) < r) && (e.length > 1 || n)
    }
    var D = function(e) {
            return () => {
                const t = e.getState(),
                    n = M(Object(A.a)(t).slice(0, -3)),
                    r = Object(w.a)(t),
                    i = M(P(r, t) ? r : []);
                (Object.keys(n).length > 0 || Object.keys(i).length > 0) && e.dispatch({
                        type: "UPDATE_NOTIFICATION_TYPE_OVERRIDES",
                        suppress: n,
                        forceSnippet: i
                    }),
                    function(e, t, n) {
                        if (Object.keys(e).length <= 1) return;
                        const r = t.filter(e => !e.dismissed);
                        if (1 !== r.length || "full" !== r[0].parts[0].notificationType) return;
                        Object(j.g)("fullMessageSuppressed", {
                            messageType: r[0].parts[0].messageType,
                            dismissedCount: t.length - r.length,
                            isLauncherEnabled: n.isLauncherEnabled
                        })
                    }(i, r, t.launcher)
            }
        },
        U = n(62),
        L = n(231),
        k = n.n(L),
        x = n(148),
        G = n.n(x);

    function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function F(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? V(n, !0).forEach((function(t) {
                B(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function B(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: H
    } = Object, $ = {
        isBooting: !1,
        isBooted: !1,
        bootFailed: !1,
        isRehydrated: !1,
        isMessengerOpen: !1,
        isErrorReportingDisabled: !1,
        isOverrideSamplingEnabled: !1,
        isIntercomLinkEnabled: !1,
        conversationId: null,
        features: {
            anonymousInboundMessages: !1,
            googleAnalytics: !1,
            inboundMessages: !1,
            outboundMessages: !1
        },
        boundWebEvents: [],
        isBoundEventCreatorOpen: !1,
        isInstantBootEnabled: !0,
        cookieDomain: void 0,
        viewStack: [],
        userConversationAttachmentsEnabled: !0,
        userConversationGifsEnabled: !0,
        isDeveloperWorkspace: !1,
        upfrontEmailCollection: {
            upfrontEmailCollectionSubmitted: !1,
            upfrontEmailCollectionSetting: "never",
            upfrontEmailCollectorShowing: !1
        },
        launcherLogoUrl: void 0,
        customGoogleAnalyticsTrackerId: void 0,
        temporaryExpectationsMessage: void 0
    };

    function W(e, t) {
        if (t === Object(i.d)(e)) return H({}, e);
        const n = [].concat(e.viewStack, [t]);
        return H({}, e, {
            viewStack: n
        })
    }

    function z(e) {
        return H({}, e, {
            viewStack: []
        })
    }

    function Q(e) {
        return H({}, e, {
            viewStack: e.viewStack.slice(0, -1)
        })
    }
    const {
        assign: q
    } = Object, Y = {
        isLauncherEnabled: !1,
        launcherEnabledOverride: "not-present"
    };
    const {
        assign: J
    } = Object, K = {
        isPresent: !1,
        homeScreenSlots: []
    };
    const {
        assign: X
    } = Object;

    function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ee(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const te = {
        id: null,
        parts: [],
        operator: null
    };
    const ne = {};
    const re = {};

    function ie(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function oe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const se = {};
    var ae = n(47),
        ce = n.n(ae),
        ue = n(10);

    function de(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function le(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? de(n, !0).forEach((function(t) {
                pe(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function pe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: fe
    } = Object, he = {
        activeArticle: {},
        openInline: !1,
        isExpanded: !1,
        expansionTransitionComplete: !1,
        isLoaded: !1
    };
    const be = [];
    var _e = n(117),
        ge = n.n(_e),
        me = n(69),
        Oe = n.n(me);
    var Ee = function(e, t) {
        switch (t.type) {
            case "TRIGGER_TRANSITIONS_SUCCESS":
            case "CREATE_CONVERSATION_SUCCESS":
            case "GET_CONVERSATION_SUCCESS":
                return Object.assign({}, e, {
                    attributes: e.attributes.map(e => Object.assign({}, e, {
                        saveState: ce()(e.value) || "" === e.value ? "unsaved" : "saved"
                    }))
                });
            case "UPDATE_CONVERSATION_FORM_REQUEST":
                {
                    const {
                        identifier: n,
                        value: r
                    } = t;
                    return Object.assign({}, e, {
                        attributes: e.attributes.map(e => e.identifier === n ? Object.assign({}, e, {
                            value: r,
                            saveState: "saving"
                        }) : e)
                    })
                }
            case "UPDATE_CONVERSATION_FORM_SUCCESS":
                return Object.assign({}, e, {
                    attributes: e.attributes.map(e => e.identifier === t.identifier ? Object.assign({}, e, {
                        saveState: "saved"
                    }) : e)
                });
            case "UPDATE_CONVERSATION_FORM_FAILURE":
                return Object.assign({}, e, {
                    attributes: e.attributes.map(e => e.identifier === t.identifier ? Object.assign({}, e, {
                        saveState: "failed"
                    }) : e)
                });
            default:
                return e
        }
    };
    const {
        assign: Se
    } = Object;

    function ve({
        createdAt: e,
        body: t,
        clientId: n,
        file: r,
        isMessage: i,
        selectedReplyOption: o,
        composerSuggestionItem: s
    }) {
        return {
            body: t,
            createdAt: e,
            clientId: n,
            isMessage: i,
            file: r,
            selectedReplyOption: o,
            composerSuggestionItem: s,
            partType: i ? "message" : "comment",
            eventData: {},
            saveState: "saving",
            seenState: "not-seen-yet",
            replyOptions: [],
            author: {
                isAdmin: !1,
                isSelf: !0
            }
        }
    }
    var ye = function(e = [], t) {
            switch (t.type) {
                case "CREATE_CONVERSATION_REQUEST":
                    {
                        const {
                            body: n,
                            createdAt: r,
                            file: i,
                            composerSuggestionItem: o,
                            clientId: s
                        } = t.part;
                        return t.isRetry ? e.map(e => Se({}, e, {
                            saveState: "saving"
                        })) : e.concat(ve({
                            createdAt: r,
                            body: n,
                            file: i,
                            isMessage: !0,
                            composerSuggestionItem: o,
                            clientId: s
                        }))
                    }
                case "CREATE_CONVERSATION_FAILURE":
                    return e.map(e => Se({}, e, {
                        saveState: "failed",
                        saveFailureReason: t.reason
                    }));
                case "CREATE_COMMENT_REQUEST":
                    {
                        const {
                            body: n,
                            createdAt: r,
                            clientId: i,
                            file: o,
                            selectedReplyOption: s
                        } = t.part;
                        return t.isRetry ? e.map(e => i === e.clientId ? Se({}, e, {
                            saveState: "saving"
                        }) : e) : e.concat(ve({
                            createdAt: r,
                            body: n,
                            clientId: i,
                            file: o,
                            isMessage: !1,
                            selectedReplyOption: s
                        }))
                    }
                case "CREATE_COMMENT_SUCCESS":
                    return e.map(e => t.part.clientId === e.clientId ? Se({}, e, t.part, {
                        saveState: "saved"
                    }) : e);
                case "CREATE_COMMENT_FAILURE":
                    return e.map(e => t.part.clientId === e.clientId ? Se({}, e, {
                        saveState: "failed",
                        saveFailureReason: t.reason
                    }) : e);
                case "TRIGGER_TRANSITIONS_SUCCESS":
                case "GET_CONVERSATION_SUCCESS":
                case "CREATE_CONVERSATION_SUCCESS":
                    return t.conversation.parts.map(e => e.form ? Se({}, e, {
                        form: Ee(e.form, t),
                        saveState: e.saveState || "saved"
                    }) : Se({}, e, {
                        saveState: e.saveState || "saved"
                    }));
                case "CREATE_REACTION_FAILURE":
                case "CREATE_REACTION_REQUEST":
                    return e.map(e => e.reactionsReply ? Se({}, e, {
                        reactionsReply: {
                            reactionIndex: t.reactionIndex,
                            reactionSet: e.reactionsReply.reactionSet
                        }
                    }) : e);
                case "CHANGE_CONVERSATION_RATING_INDEX":
                    return e.map(e => "conversationRating" === e.messageType ? Se({}, e, {
                        conversationRating: {
                            chosenRating: t.ratingIndex
                        }
                    }) : e);
                case "ADD_CONVERSATION_RATING_REMARK":
                    return e.map(e => "conversationRating" === e.messageType ? Se({}, e, {
                        conversationRating: Se({}, e.conversationRating, {
                            remark: t.remark,
                            submitted: !0
                        })
                    }) : e);
                case "UPDATE_UPLOAD_PROGRESS":
                    return e.map(e => t.part.clientId === e.clientId ? Se({}, e, {
                        body: [Se({}, e.body[0], {
                            progress: t.progress
                        })]
                    }) : e);
                case "USER_CONTENT_SEEN_BY_ADMIN":
                case "ADMIN_IS_TYPING":
                    return e.map(e => "not-seen-yet" === e.seenState ? Se({}, e, {
                        seenState: "seen"
                    }) : e);
                case "UPDATE_CONVERSATION_FORM_REQUEST":
                case "UPDATE_CONVERSATION_FORM_SUCCESS":
                case "UPDATE_CONVERSATION_FORM_FAILURE":
                    return e.map(e => e.id === t.partId ? Se({}, e, {
                        form: Ee(e.form, t)
                    }) : e);
                default:
                    return e
            }
        },
        Ce = function(e = {}, t) {
            switch (t.type) {
                case "ADMIN_IS_TYPING":
                    {
                        const {
                            lastActiveAt: e,
                            firstName: n,
                            avatarUrl: r,
                            adminId: i
                        } = t;
                        return {
                            id: i,
                            lastActiveAt: e,
                            firstName: n,
                            avatar: {
                                square128: r
                            }
                        }
                    }
                default:
                    return e
            }
        },
        Ie = n(71);

    function Te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function we(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: Ae
    } = Object, Re = {
        fetchState: "partial",
        isFetching: !1,
        isUpdating: !1,
        read: !0,
        dismissed: !1,
        preventEndUserReplies: !1,
        parts: [],
        participants: [],
        isEmailAttributeCollectorInserted: !1,
        composerSuggestions: Ie.b
    };

    function je(e, t) {
        return void 0 !== e ? e : t
    }
    var Ne = function(e = Re, t) {
        switch (t.type) {
            case "GET_CONVERSATION_REQUEST":
                {
                    const {
                        conversationId: n,
                        isUpdating: r
                    } = t;
                    return Ae({}, e, {
                        id: je(e.id, n),
                        fetchState: je(e.fetchState, "partial"),
                        isFetching: !0,
                        isUpdating: r,
                        read: je(e.read, !0),
                        dismissed: je(e.dismissed, !1),
                        preventEndUserReplies: je(e.preventEndUserReplies, !1),
                        parts: je(e.parts, [])
                    })
                }
            case "TRIGGER_TRANSITIONS_SUCCESS":
            case "GET_CONVERSATION_SUCCESS":
                {
                    const {
                        conversation: n
                    } = t,
                    r = n.parts.some(e => !e.author.isAdmin);
                    return n.parts = Object(C.q)(n, e),
                    n.composerState = Object(C.p)(n, e),
                    Ae({}, e, n, {
                        fetchState: "all",
                        isFetching: !1,
                        isUpdating: !1,
                        userParticipated: r,
                        parts: ye(e.parts, t)
                    })
                }
            case "UPDATE_CONVERSATION_FORM_FAILURE":
            case "UPDATE_CONVERSATION_FORM_SUCCESS":
            case "CREATE_CONVERSATION_SUCCESS":
                {
                    const {
                        conversation: n
                    } = t;
                    return Ae({}, e, n, {
                        fetchState: "all",
                        isFetching: !1,
                        isUpdating: !1,
                        userParticipated: !0,
                        parts: ye(e.parts, t)
                    })
                }
            case "CONVERSATION_READ_ELSEWHERE":
            case "MARK_CONVERSATION_AS_READ_REQUEST":
                return Ae({}, e, {
                    read: !0
                });
            case "DISMISS_NOTIFICATIONS_REQUEST":
                return Ae({}, e, {
                    dismissed: !0
                });
            case "CREATE_COMMENT_SUCCESS":
            case "CREATE_COMMENT_REQUEST":
                {
                    const {
                        createdAt: n
                    } = t.part;
                    return Ae({}, e, {
                        userParticipated: !0,
                        lastPartCreatedAt: n,
                        parts: ye(e.parts, t)
                    })
                }
            case "UPDATE_CONVERSATION_FORM_REQUEST":
            case "CREATE_REACTION_REQUEST":
            case "CREATE_COMMENT_FAILURE":
            case "UPDATE_UPLOAD_PROGRESS":
            case "CHANGE_CONVERSATION_RATING_INDEX":
            case "ADD_CONVERSATION_RATING_REMARK":
            case "USER_CONTENT_SEEN_BY_ADMIN":
                return Ae({}, e, {
                    parts: ye(e.parts, t)
                });
            case "ADMIN_IS_TYPING":
                return Ae({}, e, {
                    lastTypingAdmin: Ce(e.lastTypingAdmin, t),
                    parts: ye(e.parts, t)
                });
            case "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED":
                return Ae({}, e, {
                    isEmailAttributeCollectorInserted: !0
                });
            case "COMPOSER_CONTENT_CHANGED":
            case "SET_COMPOSER_SUGGESTIONS":
            case "SET_COMPOSER_SUGGESTIONS_DISMISSED":
            case "SET_COMPOSER_SUGGESTIONS_LOADING":
                return null == t.conversationId ? e : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Te(n, !0).forEach((function(t) {
                            we(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e, {
                    composerSuggestions: Object(Ie.a)(e.composerSuggestions, t)
                });
            default:
                return e
        }
    };
    const {
        assign: Me
    } = Object, Pe = {
        isFetching: !1,
        pagesFetched: 0,
        scrollPosition: 0,
        byId: {}
    };

    function De(e = {}, t, n, r) {
        const {
            fetchState: i
        } = e;
        return Me({}, e, {
            id: t,
            fetchState: i || "partial",
            dismissed: n,
            read: r
        })
    }

    function Ue(e = {}, t) {
        switch (t.type) {
            case "CREATE_OR_UPDATE_USER_SUCCESS":
            case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                {
                    const {
                        unreadConversationIds: n,
                        unreadDismissedConversationIds: r
                    } = t.user,
                    i = {};
                    return r && r.forEach(t => i[t] = De(e[t], t, !0, !1)),
                    n && n.forEach(t => i[t] = De(e[t], t, !1, !1)),
                    Me({}, e, i)
                }
            case "GET_UNREAD_CONVERSATIONS_SUCCESS":
                {
                    const {
                        unreadConversationIds: n,
                        unreadDismissedConversationIds: r
                    } = t.unreadConversations,
                    i = {};
                    return r.forEach(t => i[t] = De(e[t], t, !0, !1)),
                    n.forEach(t => i[t] = De(e[t], t, !1, !1)),
                    Me({}, e, i)
                }
            case "GET_CONVERSATIONS_SUCCESS":
            case "GET_HOME_SCREEN_CONVERSATIONS_SUCCESS":
            case "GET_HOME_SCREEN_CARDS_SUCCESS":
                {
                    const n = (t.conversations.conversations || t.conversations).reduce((t, n) => {
                        const {
                            id: r
                        } = n;
                        return e[r] && "all" === e[r].fetchState && ! function(e, t = {}, n = {}) {
                            const r = Oe()(t, [e, "parts"]),
                                i = Oe()(n, "parts");
                            return ge()(r).id !== ge()(i).id
                        }(r, e, n) ? t : (t[r] = function(e = {}) {
                            return Me({}, e, {
                                fetchState: "summary",
                                isFetching: !1,
                                isUpdating: !1,
                                parts: e.parts.map(e => Me({}, e, {
                                    saveState: "saved"
                                }))
                            })
                        }(n), t)
                    }, {});
                    return Me({}, e, n)
                }
            case "UPDATE_CONVERSATION_FORM_SUCCESS":
            case "CREATE_CONVERSATION_SUCCESS":
            case "GET_CONVERSATION_SUCCESS":
            case "TRIGGER_TRANSITIONS_SUCCESS":
                {
                    const {
                        id: n
                    } = t.conversation,
                    r = {
                        [n]: Ne(e[n], t)
                    };
                    return Me({}, e, r)
                }
            case "UPDATE_CONVERSATION_FORM_REQUEST":
            case "CREATE_REACTION_REQUEST":
            case "CREATE_REACTION_SUCCESS":
            case "GET_CONVERSATION_REQUEST":
            case "CREATE_COMMENT_REQUEST":
            case "CREATE_COMMENT_SUCCESS":
            case "CREATE_COMMENT_FAILURE":
            case "CONVERSATION_READ_ELSEWHERE":
            case "MARK_CONVERSATION_AS_READ_REQUEST":
            case "CHANGE_CONVERSATION_RATING_INDEX":
            case "UPDATE_CONVERSATION_FORM_FAILURE":
            case "ADD_CONVERSATION_RATING_REMARK":
            case "SET_COMPOSER_SUGGESTIONS_DISMISSED":
            case "SET_COMPOSER_SUGGESTIONS":
            case "SET_COMPOSER_SUGGESTIONS_LOADING":
                {
                    const n = t.conversationId;
                    if (null == n) return e;
                    const r = {
                        [n]: Ne(e[n], t)
                    };
                    return Me({}, e, r)
                }
            case "ADMIN_IS_TYPING":
            case "USER_CONTENT_SEEN_BY_ADMIN":
                {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = {
                        [n]: Ne(e[n], t)
                    };
                    return Me({}, e, r)
                }
            case "UPDATE_UPLOAD_PROGRESS":
                {
                    const n = t.conversationId;
                    if (void 0 === n) return e;
                    const r = {
                        [n]: Ne(e[n], t)
                    };
                    return Me({}, e, r)
                }
            case "DISMISS_NOTIFICATIONS_REQUEST":
                {
                    const n = t.conversationIds.reduce((n, r) => (n[r] = Ne(e[r], t), n), {});
                    return Me({}, e, n)
                }
            case "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED":
                {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = {
                        [n]: Ne(e[n], t)
                    };
                    return Me({}, e, r)
                }
            default:
                return e
        }
    }

    function Le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Le(n, !0).forEach((function(t) {
                xe(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function xe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: Ge
    } = Object, Ve = {
        isFetching: !1,
        isUpdating: !1,
        fetchState: "all",
        read: !0,
        intercomLinkSolution: "live-chat",
        parts: [],
        participants: [],
        composerState: {
            visible: !0
        },
        composerSuggestions: Ie.b,
        botIntroId: null
    };
    const Fe = {};
    const Be = {
        suppress: {},
        forceSnippet: {}
    };
    const {
        assign: He
    } = Object, $e = {
        isSaving: !1,
        showErrorMessage: !1,
        errorMessage: null
    };
    const {
        assign: We
    } = Object, ze = {
        isInstallModeOpen: !1,
        installModeConfig: {
            activeSubscription: !1,
            userHashVerified: !1,
            secureInstallV2: !1,
            messengerEnabledForVisitors: !0,
            messengerEnabledForUsers: !0
        }
    };
    const {
        assign: Qe
    } = Object, qe = {
        isFetching: !1,
        gifs: [],
        fetchingFailed: !1,
        searchTerm: null
    };
    var Ye = n(32);
    const Je = {
        eventData: {
            selector: "",
            eventTrigger: Ye.b.CLICK.key,
            name: "",
            sourceUrl: "",
            urlRegex: ""
        },
        stage: Ye.a.CHOOSE_EVENT_TYPE
    };
    var Ke = n(14),
        Xe = n.n(Ke);
    const {
        assign: Ze
    } = Object, et = {
        isLauncherDiscoveryModeEnabled: !1,
        isLauncherDiscoveryModeOpening: !1,
        isLauncherDiscoveryModeClosing: !1,
        hasDiscoveredLauncher: !1
    };

    function tt(e) {
        const {
            app: {
                features: t,
                inboundConversationsDisabled: n,
                officeHoursResponse: r
            },
            clientsideMessageConditions: i,
            clientsideRulesetConditions: o,
            role: s
        } = e;
        return !!t.launcherDiscoveryMode && (!n && (!(!Xe()(i) || !Xe()(o)) && (!!ce()(r) && "visitor" === s)))
    }
    var nt = n(54),
        rt = n.n(nt),
        it = n(19),
        ot = n.n(it),
        st = n(46);

    function at(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? at(n, !0).forEach((function(t) {
                ut(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ut(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const dt = {};
    const lt = {
        isFetching: !1,
        isFetched: !1,
        isFailed: !1,
        cardUris: null,
        hasMoreConversations: !1
    };

    function pt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? pt(n, !0).forEach((function(t) {
                ht(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ht(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const bt = {
        isOpen: !1,
        isSheetsDataLoading: !1,
        isSheetsDataLoaded: !1,
        isProxyLoaded: !1,
        isNavigating: !1,
        sourceCard: null,
        data: null,
        url: null,
        sheetTitle: ""
    };

    function _t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _t(n, !0).forEach((function(t) {
                mt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function mt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Ot = {
        composerHasContent: !1,
        lastComposerEvent: 0,
        lastArticleClosedAt: null,
        conversationIdOfLastViewedArticle: null,
        clientsideMessageConditions: null,
        clientsideRulesetConditions: null,
        lastTriggerTransitionTimestamp: null,
        userCreatedConversationAt: null
    };

    function Et(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function St(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const vt = {
        isShown: !1,
        alertType: void 0,
        alertPayload: void 0
    };

    function yt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? yt(n, !0).forEach((function(t) {
                It(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yt(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function It(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Tt = {};

    function wt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function At(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? wt(n, !0).forEach((function(t) {
                Rt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Rt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const jt = {
        tabNavigation: !1,
        accessibilityTheme: "default",
        secondaryAccessibilityTheme: "light"
    };

    function Nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Nt(n, !0).forEach((function(t) {
                Pt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Dt = {
        isFetching: !1,
        isFetched: !1,
        isPreviewing: !1,
        fetchingFailed: !1,
        activeTour: void 0,
        updateFailed: !1,
        videoAudioMuted: !0,
        userHasInteractedWithVideo: !1,
        endTourAnimation: "",
        isAwaitingProgress: !1
    };

    function Ut(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ut(n, !0).forEach((function(t) {
                kt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function kt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const xt = {
        triggers: {},
        active: null,
        failed: !1
    };
    var Gt = n(112),
        Vt = n.n(Gt),
        Ft = n(88),
        Bt = n.n(Ft);

    function Ht(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ht(n, !0).forEach((function(t) {
                Wt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Wt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const zt = {
        allSuggestions: [],
        isDismissed: !1,
        serverSideSuggestions: null,
        previewSuggestions: null
    };
    const Qt = [];

    function qt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Jt = {
        content: null
    };

    function Kt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Xt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Zt = {
        composerSuggestions: null
    };

    function en(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function tn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const nn = {
        isActive: !1
    };

    function rn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function on(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? rn(n, !0).forEach((function(t) {
                sn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function sn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const an = {
        type: null,
        metadata: {}
    };

    function cn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function un(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? cn(n, !0).forEach((function(t) {
                dn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function dn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const ln = {
        isFetching: !1,
        articles: [],
        totalCount: null,
        fetchingFailed: !1,
        phrase: "",
        selectedArticleCollectionId: null,
        showNewConversationCard: !1,
        showSearchResults: !1
    };
    var pn = Object(U.combineReducers)({
            app: function(e = $, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_REQUEST":
                        {
                            const {
                                cookieDomain: n
                            } = t.customizationAttributes;
                            return H({}, e, {
                                bootFailed: !1,
                                isBooting: !e.isBooted,
                                cookieDomain: n
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                boundWebEvents: o,
                                color: s,
                                customGoogleAnalyticsTrackerId: a,
                                expectedResponseDelay: c,
                                expectedResponseDelayTranslationKey: u,
                                features: d,
                                helpCenterSiteUrl: l,
                                horizontalPadding: p,
                                accessToTeammateEnabled: f,
                                isAudioEnabled: h,
                                isDeveloperWorkspace: b,
                                isErrorReportingDisabled: _,
                                isInstantBootEnabled: g,
                                isIntercomLinkEnabled: m,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: E,
                                launcherExpectedResponseDelayTranslationKey: S,
                                launcherLogoUrl: v,
                                logoUrl: y,
                                name: C,
                                officeHoursResponse: I,
                                originCookieDomain: T,
                                realtimeConfig: w,
                                secondaryColor: A,
                                selfServeSuggestionsMatch: R,
                                smsEnabled: j,
                                teamGreeting: N,
                                teamIntro: M,
                                temporaryExpectationsMessage: P,
                                upfrontEmailCollectionSetting: D,
                                useCacheFor: U,
                                userConversationAttachmentsEnabled: L,
                                userConversationGifsEnabled: k,
                                verticalPadding: x
                            } = t.user.app,
                            G = (null == U ? void 0 : -1 !== U.indexOf("inbound_conversations_disabled")) && (e.isRehydrated || e.isBooted) ? e.inboundConversationsDisabled : t.user.app.inboundConversationsDisabled;
                            return H({}, e, {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                bootFailed: !1,
                                boundWebEvents: o,
                                color: s,
                                customGoogleAnalyticsTrackerId: a,
                                expectedResponseDelay: c,
                                expectedResponseDelayTranslationKey: u,
                                features: d,
                                helpCenterSiteUrl: l,
                                horizontalPadding: p,
                                inboundConversationsDisabled: G,
                                accessToTeammateEnabled: f,
                                isAudioEnabled: h,
                                isBooted: !0,
                                isBooting: !1,
                                isDeveloperWorkspace: b,
                                isErrorReportingDisabled: _,
                                isInstantBootEnabled: g,
                                isIntercomLinkEnabled: m,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: E,
                                launcherExpectedResponseDelayTranslationKey: S,
                                launcherLogoUrl: v,
                                logoUrl: y,
                                name: C,
                                officeHoursResponse: I,
                                originCookieDomain: T,
                                realtimeConfig: w,
                                secondaryColor: A,
                                selfServeSuggestionsMatch: R,
                                smsEnabled: j,
                                teamGreeting: N,
                                teamIntro: M,
                                temporaryExpectationsMessage: P,
                                userConversationAttachmentsEnabled: L,
                                userConversationGifsEnabled: k,
                                verticalPadding: x,
                                upfrontEmailCollection: F({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectionSetting: D
                                })
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_FAILURE":
                        return t.isIdentityVerificationError ? H({}, e, {
                            bootFailed: !0,
                            isBooting: !1,
                            isBooted: !1
                        }) : H({}, e, {
                            bootFailed: e.isBooting
                        });
                    case "OPEN_MESSENGER":
                        return H({}, e, {
                            isMessengerOpen: !0,
                            viewStack: Object(i.h)(e) ? ["home-screen"] : e.viewStack
                        });
                    case "CLOSE_MESSENGER":
                        return H({}, e, {
                            isMessengerOpen: !1
                        });
                    case "SHOW_NEW_CONVERSATION":
                        return H(W(t.replaceCurrentView ? Q(e) : e, "new-conversation"), {
                            conversationId: null
                        });
                    case "SHOW_BROWSE_MODE":
                        return H(W(e, "browse-mode"), {
                            conversationId: null
                        });
                    case "SHOW_INLINE_ARTICLE_VIEW":
                        return H(W(e, "inline-article-view"), {
                            conversationId: null
                        });
                    case "SHOW_CONVERSATION":
                        return H(W(t.replaceCurrentView ? Q(e) : e, "conversation"), {
                            conversationId: t.conversationId
                        });
                    case "SHOW_CONVERSATIONS":
                        return t.resetNavigationHistory ? W(z(e), "conversations") : W(e, "conversations");
                    case "SHOW_EMPTY_SCREEN":
                        return W(e, "empty-screen");
                    case "SHOW_MESSENGER_TRIGGER_SCREEN":
                        return W(t.replaceCurrentView ? Q(e) : e, "messenger-trigger");
                    case "SHOW_HOME_SCREEN":
                        return W(e, "home-screen");
                    case "CREATE_CONVERSATION_SUCCESS":
                        return "new-conversation" === Object(i.d)(e) ? H({}, W(Q(e), "conversation"), {
                            conversationId: t.conversation.id
                        }) : e;
                    case "OPEN_BORDERLESS_CONVERSATION":
                        return H({}, e, {
                            conversationId: t.conversationId
                        });
                    case "REHYDRATE":
                        return H({}, e, t.state.app, {
                            features: H({}, e.features, t.state.app.features),
                            isRehydrated: !0
                        });
                    case "OPEN_BOUND_EVENT_CREATOR":
                        return H({}, e, {
                            isBoundEventCreatorOpen: !0
                        });
                    case "MESSENGER_NAVIGATE_BACK":
                        return G()(e.viewStack.slice(-2), ["browse-mode", "conversation"]) ? W(z(e), "home-screen") : Q(e);
                    case "TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE":
                        return H({}, e, {
                            upfrontEmailCollection: F({}, e.upfrontEmailCollection, {
                                upfrontEmailCollectorShowing: !e.upfrontEmailCollection.upfrontEmailCollectorShowing
                            })
                        });
                    case "UPFRONT_EMAIL_COLLECTION_SUBMITTED":
                        return H({}, e, {
                            upfrontEmailCollection: F({}, e.upfrontEmailCollection, {
                                upfrontEmailCollectionSubmitted: !0
                            })
                        });
                    default:
                        return e
                }
            },
            launcher: function(e = Y, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_REQUEST":
                        {
                            const n = "not-present" === t.launcherEnabledOverride ? e.launcherEnabledOverride : t.launcherEnabledOverride;
                            return q({}, e, {
                                launcherEnabledOverride: n
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const {
                                isLauncherEnabled: n
                            } = t.user.app;
                            return q({}, e, {
                                isLauncherEnabled: n
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_FAILURE":
                        return t.isIdentityVerificationError ? q({}, e, {
                            isLauncherEnabled: !1
                        }) : e;
                    case "REHYDRATE":
                        return q({}, e, t.state.launcher);
                    default:
                        return e
                }
            },
            botIntro: function(e = te, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const n = t.user.botIntro;
                            return n ? function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Z(n, !0).forEach((function(t) {
                                        ee(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(n).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e, {
                                id: n.id,
                                parts: n.parts,
                                operator: n.operator
                            }) : e
                        }
                    default:
                        return e
                }
            },
            user: function(e = K, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_REQUEST":
                        {
                            const {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: o
                            } = t;
                            return J({}, e, {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: o
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const {
                                id: n,
                                locale: r,
                                countryCode: i,
                                role: o,
                                name: s,
                                userSuppliedEmail: a,
                                unreadConversationIds: c,
                                unreadDismissedConversationIds: u,
                                notificationLinkConversationId: d,
                                phoneNumber: l,
                                articleConversationId: p,
                                homeScreenSlots: f,
                                cdasBreachingLimit: h,
                                lastContactedAt: b,
                                resolutionBotBehaviorVersionId: _
                            } = t.user,
                            g = t.user.hasConversations || c.length > 0 || u.length > 0;
                            return J({}, e, {
                                id: n,
                                locale: r,
                                countryCode: i,
                                role: o,
                                name: s,
                                userSuppliedEmail: a,
                                hasConversations: g,
                                phoneNumber: l,
                                articleConversationId: p,
                                notificationLinkConversationId: d,
                                homeScreenSlots: f,
                                cdasBreachingLimit: h,
                                lastContactedAt: b,
                                resolutionBotBehaviorVersionId: _
                            })
                        }
                    case "CREATE_CONVERSATION_REQUEST":
                    case "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS":
                    case "GET_CONVERSATION_SUCCESS":
                        return J({}, e, {
                            hasConversations: !0
                        });
                    case "GET_CONVERSATIONS_SUCCESS":
                        {
                            const {
                                conversations: n
                            } = t.conversations,
                            r = void 0 !== n && n.length > 0;
                            return J({}, e, {
                                hasConversations: r
                            })
                        }
                    case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                        {
                            const {
                                userSuppliedEmail: n
                            } = t;
                            return J({}, e, {
                                userSuppliedEmail: n
                            })
                        }
                    case "UPDATE_PHONE_NUMBER_SUCCESS":
                        {
                            const {
                                phoneNumber: n
                            } = t;
                            return J({}, e, {
                                phoneNumber: n
                            })
                        }
                    case "USER_IS_PRESENT":
                        return J({}, e, {
                            isPresent: !0
                        });
                    case "USER_IS_ABSENT":
                        return J({}, e, {
                            isPresent: !1
                        });
                    case "REHYDRATE":
                        return J({}, e, t.state.user);
                    default:
                        return e
                }
            },
            session: function(e = null, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_REQUEST":
                        {
                            const {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: o,
                                anonymousId: s,
                                anonymousSession: a,
                                sessionId: c
                            } = t.session;
                            return X({}, e, {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: o,
                                anonymousId: s,
                                anonymousSession: a,
                                sessionId: c
                            })
                        }
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const {
                                anonymousId: n,
                                anonymousSession: r,
                                activeCompanyId: i,
                                newSession: o
                            } = t.user;
                            return X({}, e, {
                                anonymousId: n || e.anonymousId,
                                anonymousSession: r || e.anonymousSession,
                                activeCompanyId: i,
                                newSession: o
                            })
                        }
                    case "DESTROY_SESSION":
                        return null;
                    case "ANONYMOUS_SESSION_CHANGED":
                        return X({}, e, {
                            anonymousSession: t.anonymousSession
                        });
                    default:
                        return e
                }
            },
            openOnBoot: function(e = an, t) {
                var n;
                switch (t.type) {
                    case "CLOSE_MESSENGER":
                    case "MESSENGER_NAVIGATE_BACK":
                    case "SHOW_HOME_SCREEN":
                        return on({}, an);
                    case "SHOW_CONVERSATION":
                        return {
                            type: "conversation",
                            metadata: {
                                conversationId: t.conversationId
                            }
                        };
                    case "CREATE_CONVERSATION_SUCCESS":
                        return {
                            type: "conversation",
                            metadata: {
                                conversationId: t.conversation.id
                            }
                        };
                    case "SHOW_NEW_CONVERSATION":
                        return {
                            type: "new_conversation",
                            metadata: {}
                        };
                    case "OPEN_SHEET":
                        if ("article-link" === t.componentId) {
                            const n = on({}, e);
                            return {
                                type: "article",
                                metadata: {
                                    url: t.url,
                                    cardUri: t.cardUri,
                                    componentId: t.componentId,
                                    previousState: n
                                }
                            }
                        }
                        return e;
                    case "CLOSE_SHEET":
                        return (null === (n = e.metadata) || void 0 === n ? void 0 : n.previousState) ? on({}, e.metadata.previousState) : on({}, an);
                    case "SHOW_BROWSE_MODE":
                        return {
                            type: "browse_mode",
                            metadata: {
                                selectedArticleCollectionId: null
                            }
                        };
                    case "SELECT_ARTICLE_COLLECTION":
                        return {
                            type: "browse_mode",
                            metadata: {
                                selectedArticleCollectionId: t.collectionId
                            }
                        };
                    case "OPEN_ARTICLE":
                        return t.openInline ? {
                            type: "browse_mode_article",
                            metadata: {
                                articleId: t.article.id
                            }
                        } : e;
                    case "REHYDRATE":
                        return on({}, e, {}, t.state.openOnBoot);
                    default:
                        return e
                }
            },
            operator: (e = Ot, t) => {
                switch (t.type) {
                    case "SHOW_NEW_CONVERSATION":
                    case "SHOW_CONVERSATION":
                        return gt({}, e, {
                            lastArticleClosedAt: null,
                            conversationIdOfLastViewedArticle: null
                        });
                    case "COMPOSER_CONTENT_CHANGED":
                        return gt({}, e, {
                            lastComposerEvent: t.lastActiveAt.getTime(),
                            composerHasContent: "" !== t.composerContent
                        });
                    case "CREATE_CONVERSATION_REQUEST":
                        return gt({}, e, {
                            userCreatedConversationAt: t.timestamp
                        });
                    case "OPEN_ARTICLE":
                        return gt({}, e, {
                            lastArticleClosedAt: null,
                            conversationIdOfLastViewedArticle: t.conversationId
                        });
                    case "CLOSE_ARTICLE":
                        return gt({}, e, {
                            lastArticleClosedAt: t.closedAt
                        });
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                    case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                        return gt({}, e, {
                            clientsideMessageConditions: t.user.clientsideMessageConditions,
                            clientsideRulesetConditions: t.user.clientsideRulesetConditions
                        });
                    case "TRIGGER_TRANSITIONS_REQUEST":
                        return gt({}, e, {
                            lastTriggerTransitionTimestamp: t.payload.timestamp
                        });
                    case "REHYDRATE":
                        return gt({}, e, {}, t.state.operator);
                    default:
                        return e
                }
            },
            message: function(e = ne, t) {
                switch (t.type) {
                    case "OPEN_MESSAGE":
                        {
                            const {
                                conversationId: e,
                                partId: n
                            } = t;
                            return {
                                conversationId: e,
                                partId: n
                            }
                        }
                    case "CLOSE_MESSAGE":
                        return ne;
                    default:
                        return e
                }
            },
            pointerMessage: function(e = re, t) {
                switch (t.type) {
                    case "OPEN_POINTER_MESSAGE":
                        {
                            const {
                                conversationId: e,
                                partId: n
                            } = t;
                            return {
                                conversationId: e,
                                partId: n
                            }
                        }
                    case "CLOSE_POINTER_MESSAGE":
                        return re;
                    default:
                        return e
                }
            },
            dismissedPointers: function(e = se, t) {
                switch (t.type) {
                    case "DISMISS_POINTER_MESSAGE":
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ie(n, !0).forEach((function(t) {
                                    oe(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            [t.conversationId]: !0
                        });
                    default:
                        return e
                }
            },
            article: function(e = he, t) {
                switch (t.type) {
                    case "OPEN_ARTICLE":
                        {
                            const e = JSON.parse(ue.a.get("intercom-article-expanded-mode")),
                                n = !!ce()(e) || e;
                            return {
                                activeArticle: t.article,
                                openInline: t.openInline,
                                isExpanded: n,
                                expansionTransitionComplete: t.forceTransitionComplete || !n
                            }
                        }
                    case "CLOSE_ARTICLE":
                        return he;
                    case "ARTICLE_LOADED":
                        return le({}, e, {
                            isLoaded: !0
                        });
                    case "CLOSE_INLINE_ARTICLE":
                        return le({}, e, {
                            openInline: !1,
                            isLoaded: !1
                        });
                    case "TOGGLE_ARTICLE_EXPANDED_MODE":
                        return ue.a.set("intercom-article-expanded-mode", JSON.stringify(t.isExpanded)), fe({}, e, {
                            isExpanded: t.isExpanded
                        });
                    case "EXPANSION_TRANSITION_COMPLETE":
                        return le({}, e, {
                            expansionTransitionComplete: !0
                        });
                    case "CREATE_ARTICLE_REACTION_REQUEST":
                        {
                            var n;
                            const {
                                articleId: r,
                                reactionIndex: i
                            } = t;
                            if ((null === (n = e.activeArticle) || void 0 === n ? void 0 : n.id) !== r) return e;
                            const o = fe({}, e.activeArticle, {
                                reactionsReply: fe({}, e.activeArticle.reactionsReply, {
                                    reactionIndex: i
                                })
                            });
                            return fe({}, e, {
                                activeArticle: o
                            })
                        }
                    default:
                        return e
                }
            },
            articleCollections: function(e = be, t) {
                switch (t.type) {
                    case "GET_HOME_SCREEN_CARDS_SUCCESS":
                        return t.articleCollections
                }
                return e
            },
            conversations: function(e = Pe, t) {
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                    case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                    case "GET_UNREAD_CONVERSATIONS_SUCCESS":
                        return Me({}, e, {
                            byId: Ue(e.byId, t)
                        });
                    case "GET_CONVERSATIONS_REQUEST":
                        return Me({}, e, {
                            isFetching: !0
                        });
                    case "GET_CONVERSATIONS_SUCCESS":
                        {
                            const {
                                page: n,
                                totalPages: r
                            } = t.conversations.pages;
                            return Me({}, e, {
                                isFetching: !1,
                                pagesFetched: n,
                                totalPages: r,
                                byId: Ue(e.byId, t)
                            })
                        }
                    case "GET_CONVERSATIONS_FAILURE":
                        return Me({}, e, {
                            isFetching: !1
                        });
                    case "UPDATE_CONVERSATION_FORM_REQUEST":
                    case "CREATE_REACTION_REQUEST":
                    case "CREATE_REACTION_FAILURE":
                    case "GET_CONVERSATION_REQUEST":
                    case "GET_CONVERSATION_SUCCESS":
                    case "CREATE_COMMENT_REQUEST":
                    case "CREATE_COMMENT_SUCCESS":
                    case "CREATE_COMMENT_FAILURE":
                    case "CONVERSATION_READ_ELSEWHERE":
                    case "MARK_CONVERSATION_AS_READ_REQUEST":
                    case "DISMISS_NOTIFICATIONS_REQUEST":
                    case "CREATE_CONVERSATION_SUCCESS":
                    case "ADMIN_IS_TYPING":
                    case "UPDATE_UPLOAD_PROGRESS":
                    case "CHANGE_CONVERSATION_RATING_INDEX":
                    case "ADD_CONVERSATION_RATING_REMARK":
                    case "UPDATE_CONVERSATION_FORM_SUCCESS":
                    case "USER_CONTENT_SEEN_BY_ADMIN":
                    case "UPDATE_CONVERSATION_FORM_FAILURE":
                    case "TRIGGER_TRANSITIONS_SUCCESS":
                    case "GET_HOME_SCREEN_CARDS_SUCCESS":
                    case "GET_HOME_SCREEN_CONVERSATIONS_SUCCESS":
                    case "SET_COMPOSER_SUGGESTIONS_DISMISSED":
                    case "COMPOSER_CONTENT_CHANGED":
                    case "SET_COMPOSER_SUGGESTIONS":
                    case "SET_COMPOSER_SUGGESTIONS_LOADING":
                        return Me({}, e, {
                            byId: Ue(e.byId, t)
                        });
                    case "CONVERSATIONS_SCROLLED":
                        return Me({}, e, {
                            scrollPosition: t.scrollPosition
                        });
                    case "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED":
                        return Me({}, e, {
                            byId: Ue(e.byId, t)
                        });
                    default:
                        return e
                }
            },
            newConversation: function(e = Ve, t) {
                switch (t.type) {
                    case "SHOW_NEW_CONVERSATION":
                        return Ge({}, e, {
                            defaultMessage: t.defaultMessage
                        });
                    case "CREATE_CONVERSATION_REQUEST":
                    case "CREATE_CONVERSATION_FAILURE":
                        return Ge({}, e, {
                            userParticipated: !0,
                            parts: ye(e.parts, t)
                        });
                    case "SET_NEW_CONVERSATION_COMPOSER_STATE":
                        return Ge({}, e, {
                            composerState: t.composerState
                        });
                    case "CREATE_CONVERSATION_SUCCESS":
                        return Ge({}, Ve, {
                            composerState: e.composerState
                        });
                    case "UPDATE_UPLOAD_PROGRESS":
                        {
                            const {
                                conversationId: n
                            } = t;
                            return void 0 !== n ? e : Ge({}, e, {
                                parts: ye(e.parts, t)
                            })
                        }
                    case "COMPOSER_CONTENT_CHANGED":
                    case "SET_COMPOSER_SUGGESTIONS":
                    case "SET_COMPOSER_SUGGESTIONS_DISMISSED":
                    case "SET_COMPOSER_SUGGESTIONS_LOADING":
                        return ke({}, e, {
                            composerSuggestions: Object(Ie.a)(e.composerSuggestions, t)
                        });
                    case "DELIVER_BOT_INTRO":
                        return ke({}, e, {
                            parts: t.botIntro.parts.map((e, n) => ({
                                id: `bot-intro-${n}`,
                                author: t.botIntro.operator,
                                createdAt: t.createdAt,
                                partType: "bot_intro",
                                body: e,
                                showCreatedAt: !0
                            })),
                            botIntroId: t.botIntro.id
                        });
                    default:
                        return e
                }
            },
            borderless: function(e = Fe, t) {
                switch (t.type) {
                    case "OPEN_BORDERLESS_CONVERSATION":
                        return Object.assign({}, e, {
                            conversationId: t.conversationId
                        });
                    case "CLOSE_MESSAGE":
                        return Fe;
                    default:
                        return e
                }
            },
            notificationChannels: function(e = $e, t) {
                switch (t.type) {
                    case "UPDATE_USER_SUPPLIED_EMAIL_REQUEST":
                        return He({}, e, {
                            isSaving: !0
                        });
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                    case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                        return He({}, e, {
                            isSaving: !1
                        });
                    case "UPDATE_PHONE_NUMBER_REQUEST":
                        return He({}, e, {
                            isSaving: !0,
                            errorMessage: null,
                            showErrorMessage: !1
                        });
                    case "UPDATE_PHONE_NUMBER_SUCCESS":
                        return He({}, e, {
                            phoneNumber: t.phoneNumber,
                            isSaving: !1
                        });
                    case "UPDATE_PHONE_NUMBER_FAILURE":
                        return He({}, e, {
                            errorMessage: t.message,
                            isSaving: !1,
                            showErrorMessage: !0
                        });
                    case "INPUT_VALUE_CHANGED":
                        return He({}, e, {
                            errorMessage: null,
                            showErrorMessage: !1
                        });
                    default:
                        return e
                }
            },
            notificationTypeOverrides: function(e = Be, t) {
                switch (t.type) {
                    case "UPDATE_NOTIFICATION_TYPE_OVERRIDES":
                        return Object.assign({}, e, {
                            suppress: Object.assign({}, e.suppress, t.suppress),
                            forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet)
                        });
                    default:
                        return e
                }
            },
            install: function(e = ze, t) {
                switch (t.type) {
                    case "OPEN_INSTALL_MODE":
                        {
                            const {
                                activeSubscription: n,
                                userHashVerified: r,
                                secureInstallV2: i,
                                messengerEnabledForVisitors: o,
                                messengerEnabledForUsers: s
                            } = t;
                            return We({}, e, {
                                isInstallModeOpen: !0,
                                installModeConfig: {
                                    activeSubscription: n,
                                    userHashVerified: r,
                                    secureInstallV2: i,
                                    messengerEnabledForVisitors: o,
                                    messengerEnabledForUsers: s
                                }
                            })
                        }
                    case "CLOSE_INSTALL_MODE":
                        return We({}, e, {
                            isInstallModeOpen: !1
                        });
                    default:
                        return e
                }
            },
            gifs: function(e = qe, t) {
                switch (t.type) {
                    case "SEARCH_GIFS_REQUEST":
                        {
                            const {
                                searchTerm: n
                            } = t;
                            return Qe({}, e, {
                                isFetching: !0,
                                fetchingFailed: !1,
                                searchTerm: n
                            })
                        }
                    case "SEARCH_GIFS_SUCCESS":
                        {
                            const {
                                gifs: n,
                                searchTerm: r
                            } = t;
                            return r !== e.searchTerm ? e : Qe({}, e, {
                                isFetching: !1,
                                gifs: n,
                                fetchingFailed: !1,
                                searchTerm: r
                            })
                        }
                    case "SEARCH_GIFS_FAILURE":
                        {
                            const {
                                searchTerm: n
                            } = t;
                            return n !== e.searchTerm ? e : Qe({}, e, {
                                isFetching: !1,
                                fetchingFailed: !0,
                                searchTerm: n
                            })
                        }
                    default:
                        return e
                }
            },
            boundEventCreator: function(e = Je, t) {
                switch (t.type) {
                    case "OPEN_BOUND_EVENT_CREATOR":
                        return {
                            stage: t.stage,
                            eventData: Object.assign({}, e.eventData, t.eventData)
                        };
                    case "CHANGE_BOUND_EVENT_CREATOR_STAGE":
                        return Object.assign({}, e, {
                            stage: t.newStage
                        });
                    case "UPDATE_BOUND_EVENT_DATA":
                        return Object.assign({}, e, {
                            eventData: Object.assign({}, e.eventData, t.eventData)
                        });
                    case "CLOSE_BOUND_EVENT_CREATOR":
                        return Je;
                    default:
                        return e
                }
            },
            launcherDiscoveryMode: (e = et, t) => {
                const {
                    isLauncherDiscoveryModeEnabled: n
                } = e;
                switch (t.type) {
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            const {
                                user: n
                            } = t;
                            return Ze({}, e, {
                                isLauncherDiscoveryModeEnabled: tt(n)
                            })
                        }
                    case "GET_CONVERSATIONS_REQUEST":
                        return Ze({}, e, {
                            isLauncherDiscoveryModeEnabled: !1,
                            hasDiscoveredLauncher: !0
                        });
                    case "OPEN_MESSENGER":
                        return Ze({}, e, {
                            hasDiscoveredLauncher: !0,
                            isLauncherDiscoveryModeEnabled: !1
                        });
                    case "OPEN_LAUNCHER_DISCOVERY_MODE":
                        return Ze({}, e, {
                            isLauncherDiscoveryModeOpening: n,
                            hasDiscoveredLauncher: !0
                        });
                    case "CLOSE_LAUNCHER_DISCOVERY_MODE":
                        return Ze({}, e, {
                            isLauncherDiscoveryModeOpening: !1,
                            isLauncherDiscoveryModeClosing: n
                        });
                    case "SHOW_NEW_CONVERSATION":
                    case "OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE":
                        return Ze({}, e, {
                            isLauncherDiscoveryModeClosing: !1,
                            isLauncherDiscoveryModeOpening: !1
                        });
                    case "DISABLE_LAUNCHER_DISCOVERY_MODE":
                        return Ze({}, e, {
                            isLauncherDiscoveryModeEnabled: !1,
                            isLauncherDiscoveryModeClosing: !1
                        });
                    case "REHYDRATE":
                        const {
                            launcherDiscoveryMode: r
                        } = t.state;
                        return Ze({}, e, r);
                    default:
                        return e
                }
            },
            messengerCards: (e = dt, t) => {
                switch (t.type) {
                    case "SUBMIT_MESSENGER_CARD_ACTION_FAILURE":
                        {
                            const n = t.componentId,
                                r = ct({}, e);
                            return ot()(r, `${t.cardUri}.isFetching`, !1),
                            rt()(r, `${t.cardUri}.card.canvas.content.components`, e => Object(st.d)(n, e, !1))
                        }
                    case "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS":
                        {
                            const n = ct({}, e);
                            return ot()(n, `${t.card.uri}.isFetching`, !1),
                            ot()(n, `${t.card.uri}.isFetched`, !0),
                            ot()(n, `${t.card.uri}.partialCard`, t.card)
                        }
                    case "SUBMIT_MESSENGER_CARD_ACTION_REQUEST":
                        {
                            const n = t.componentId,
                                r = ct({}, e);
                            return ot()(r, `${t.cardUri}.isFetching`, !0),
                            rt()(r, `${t.cardUri}.card.canvas.content.components`, e => Object(st.d)(n, e, !0))
                        }
                    case "GET_CARD_CONTENT_REQUEST":
                        {
                            const n = ct({}, e);
                            return ot()(n, `${t.card.uri}.isContentFetching`, !0)
                        }
                    case "GET_CARD_CONTENT_SUCCESS":
                        {
                            const n = ct({}, e);
                            return ot()(n, `${t.card.uri}.isFetching`, !1),
                            ot()(n, `${t.card.uri}.isFetched`, !0),
                            ot()(n, `${t.card.uri}.isContentFetched`, !0),
                            ot()(n, `${t.card.uri}.isContentError`, !1),
                            ot()(n, `${t.card.uri}.isContentFetching`, !1),
                            ot()(n, `${t.card.uri}.card`, t.card),
                            ot()(n, `${t.card.uri}.card.canvas.content`, t.content),
                            rt()(n, `${t.card.uri}.card`, st.e)
                        }
                    case "GET_CARD_CONTENT_FAILURE":
                        {
                            const n = ct({}, e);
                            return ot()(n, `${t.card.uri}.isContentError`, !0),
                            ot()(n, `${t.card.uri}.isContentFetching`, !1),
                            ot()(n, `${t.card.uri}.partialCard`, t.card)
                        }
                    default:
                        return e
                }
            },
            homeScreen: (e = lt, t) => {
                switch (t.type) {
                    case "GET_HOME_SCREEN_CARDS_REQUEST":
                        return Object.assign({}, e, {
                            isFetching: !0,
                            isFetched: !1,
                            isFailed: !1
                        });
                    case "GET_HOME_SCREEN_CARDS_SUCCESS":
                        return Object.assign({}, e, {
                            isFetching: !1,
                            isFetched: !0,
                            isFailed: !1,
                            cardUris: t.cardUris,
                            hasMoreConversations: t.hasMoreConversations
                        });
                    case "GET_HOME_SCREEN_CARDS_FAILURE":
                        return Object.assign({}, e, {
                            isFetching: !1,
                            isFetched: !1,
                            isFailed: !0,
                            error: t.error
                        });
                    case "OPEN_MESSENGER":
                        return lt;
                    default:
                        return e
                }
            },
            messengerSheet: (e = bt, t) => {
                switch (t.type) {
                    case "START_NAVIGATION":
                        return ft({}, e, {
                            isNavigating: !0
                        });
                    case "FINISH_NAVIGATION":
                        return ft({}, e, {
                            isNavigating: !1
                        });
                    case "SET_PROXY_LOADED_STATUS":
                        return ft({}, e, {
                            isProxyLoaded: t.isLoaded
                        });
                    case "OPEN_SHEET":
                        return ft({}, e, {
                            url: t.url,
                            isOpen: !0,
                            sourceCard: {
                                cardUri: t.cardUri,
                                componentId: t.componentId
                            }
                        });
                    case "OPEN_SHEET_WITH_TOKEN":
                        return ft({}, e, {
                            url: t.url,
                            isOpen: !0,
                            sourceCard: {
                                token: t.token,
                                componentId: t.componentId
                            }
                        });
                    case "CLOSE_SHEET":
                        return bt;
                    case "SET_SHEET_TITLE":
                        return ft({}, e, {
                            sheetTitle: t.sheetTitle
                        });
                    case "FETCH_MESSENGER_SHEET_DATA_REQUEST":
                        return ft({}, e, {
                            isSheetsDataLoading: !0
                        });
                    case "FETCH_MESSENGER_SHEET_DATA_SUCCESS":
                        return ft({}, e, {
                            isSheetsDataLoading: !1,
                            isSheetsDataLoaded: !0,
                            data: t.data
                        });
                    case "FETCH_MESSENGER_SHEET_DATA_FAILURE":
                        return ft({}, e, {
                            isSheetsDataLoading: !1
                        });
                    default:
                        return e
                }
            },
            messengerAlerts: function(e = vt, t) {
                switch (t.type) {
                    case "SHOW_ALERT":
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Et(n, !0).forEach((function(t) {
                                    St(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            isShown: !0,
                            alertType: t.payload.alertType,
                            alertPayload: t.payload.alertPayload
                        });
                    case "CLOSE_ALERT":
                        return vt;
                    default:
                        return e
                }
            },
            customizationOverrides: function(e = Tt, t) {
                switch (t.type) {
                    case "CREATE_CUSTOMIZATION_OVERRIDE":
                        return Ct({}, e, {}, t.customizationAttributes);
                    case "CREATE_BANNER_CUSTOMIZATION_OVERRIDE":
                        return Ct({}, e, {}, t.customizationAttributes, {
                            isSetByBanner: !0
                        });
                    default:
                        return e
                }
            },
            accessibility: function(e = jt, t) {
                switch (t.type) {
                    case "SET_TAB_NAVIGATION":
                        return At({}, e, {
                            tabNavigation: t.tabNavigation
                        });
                    case "SET_ACCESSIBILITY_THEME":
                        return At({}, e, {
                            accessibilityTheme: t.accessibilityTheme,
                            secondaryAccessibilityTheme: t.secondaryAccessibilityTheme
                        });
                    default:
                        return e
                }
            },
            tour: (e = Dt, t) => {
                switch (t.type) {
                    case "FETCH_TOUR_REQUEST":
                        return Mt({}, e, {
                            isFetching: !0,
                            isFetched: !1,
                            fetchingFailed: !1
                        });
                    case "TOUR_UPDATE_FAILED":
                        return Mt({}, e, {
                            updateFailed: !0
                        });
                    case "FETCH_TOUR_SUCCESS":
                        return Mt({}, e, {
                            isFetching: !1,
                            isFetched: !0,
                            fetchingFailed: !1,
                            isPreviewing: t.isPreviewingTour,
                            activeTour: t.tour
                        });
                    case "FETCH_TOUR_FAILURE":
                        return Mt({}, e, {
                            isFetching: !1,
                            isFetched: !1,
                            fetchingFailed: !0
                        });
                    case "PROGRESS_TOUR":
                        return e.activeTour ? Mt({}, e, {
                            activeTour: Mt({}, e.activeTour, {
                                activeStepId: t.activeStepId
                            })
                        }) : Mt({}, e);
                    case "START_TOUR_PREVIEW":
                        return Mt({}, e, {
                            isFetched: !0,
                            isPreviewing: !0,
                            activeTour: t.tour
                        });
                    case "STOP_TOUR_PREVIEW":
                        return Mt({}, e, {
                            isFetched: !1,
                            isPreviewing: !1,
                            activeTour: void 0
                        });
                    case "COMPLETE_TOUR":
                    case "STOP_TOUR":
                        return Dt;
                    case "MARK_ACTIVE_TOUR_AS_COMPLETED":
                        return e.activeTour ? Mt({}, e, {
                            activeTour: Mt({}, e.activeTour, {
                                isCompleted: !0
                            })
                        }) : Mt({}, e);
                    case "CHANGE_VIDEO_MUTED":
                        return Mt({}, e, {
                            videoAudioMuted: t.muted,
                            userHasInteractedWithVideo: !0
                        });
                    case "PROGRESS_TOUR_REQUEST_STARTED":
                        return Mt({}, e, {
                            isAwaitingProgress: !0
                        });
                    case "PROGRESS_TOUR_REQUEST_FINISHED":
                        return Mt({}, e, {
                            isAwaitingProgress: !1
                        });
                    default:
                        return e
                }
            },
            triggers: function(e = xt, t) {
                const n = Lt({}, e.triggers);
                switch (t.type) {
                    case "ADD_TRIGGER":
                        return n[t.trigger.id] = t.trigger, Lt({}, e, {
                            triggers: n
                        });
                    case "REMOVE_TRIGGER":
                        return delete n[t.triggerId], Lt({}, e, {
                            triggers: n
                        });
                    case "ACTIVATE_TRIGGER":
                        return Lt({}, e, {
                            active: t.triggerId,
                            failed: !1
                        });
                    case "DEACTIVATE_TRIGGER":
                        return Lt({}, e, {
                            active: null
                        });
                    case "ACTIVATE_TRIGGER_FAILED":
                        return Lt({}, e, {
                            failed: !0
                        });
                    default:
                        return e
                }
            },
            inboundSuggestions: function(e = zt, t) {
                switch (t.type) {
                    case "ADD_INBOUND_SUGGESTIONS":
                        return $t({}, e, {
                            allSuggestions: [...e.allSuggestions, t.composerSuggestions]
                        });
                    case "REMOVE_INBOUND_SUGGESTIONS":
                        return $t({}, e, {
                            allSuggestions: Bt()(e.allSuggestions, e => e.rulesetId !== t.rulesetId)
                        });
                    case "UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS":
                        {
                            let n = e.allSuggestions;
                            return e.serverSideSuggestions && (n = Bt()(n, t => e.serverSideSuggestions && t.rulesetId !== e.serverSideSuggestions.rulesetId)),
                            t.composerSuggestions && (n = Vt()([...n, t.composerSuggestions], "rulesetId")),
                            $t({}, e, {
                                allSuggestions: n,
                                serverSideSuggestions: t.composerSuggestions
                            })
                        }
                    case "UPDATE_PREVIEW_INBOUND_SUGGESTIONS":
                        return $t({}, e, {
                            previewSuggestions: t.composerSuggestions
                        });
                    default:
                        return e
                }
            },
            banners: function(e = Qt, t) {
                switch (t.type) {
                    case "RECEIVE_BANNERS":
                        if (t.banners) return t.banners;
                    case "REACT_TO_BANNER":
                        if (t.bannerId && t.reaction) return e.map(e => e.banner_id === t.bannerId ? Object.assign({}, e, {
                            selected_reaction: t.reaction
                        }) : e)
                }
                return e
            },
            composer: (e = Jt, t) => {
                switch (t.type) {
                    case "COMPOSER_CONTENT_CHANGED":
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? qt(n, !0).forEach((function(t) {
                                    Yt(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            content: t.composerContent
                        });
                    default:
                        return e
                }
            },
            predictiveAnswers: (e = Zt, t) => {
                switch (t.type) {
                    case "SET_PREDICTIVE_ANSWERS":
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Kt(n, !0).forEach((function(t) {
                                    Xt(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            composerSuggestions: t.predictiveAnswersSuggestions
                        });
                    default:
                        return e
                }
            },
            lightweightApp: (e = nn, t) => {
                switch (t.type) {
                    case "SET_LIGHTWEIGHT_APP_ACTIVE":
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? en(n, !0).forEach((function(t) {
                                    tn(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            isActive: t.isActive
                        });
                    default:
                        return e
                }
            },
            browseMode: function(e = ln, t) {
                switch (t.type) {
                    case "SHOW_BROWSE_MODE":
                        return ln;
                    case "BROWSE_MODE_PHRASE_UPDATED":
                        {
                            const {
                                phrase: n
                            } = t;
                            return 0 === n.length ? ln : un({}, e, {
                                phrase: n
                            })
                        }
                    case "SEARCH_ARTICLES_REQUEST":
                        return e;
                    case "SEARCH_ARTICLES_SUCCESS":
                        {
                            const {
                                articles: n,
                                totalCount: r,
                                phrase: i
                            } = t;
                            return i !== e.phrase ? e : un({}, e, {
                                fetchingFailed: !1,
                                articles: n,
                                totalCount: r,
                                showSearchResults: !0
                            })
                        }
                    case "SEARCH_ARTICLES_FAILURE":
                        {
                            const {
                                phrase: n
                            } = t;
                            return n !== e.phrase ? e : un({}, e, {
                                isFetching: !1,
                                fetchingFailed: !0,
                                showSearchResults: !0
                            })
                        }
                    case "SELECT_ARTICLE_COLLECTION":
                        return un({}, e, {
                            selectedArticleCollectionId: t.collectionId
                        });
                    case "GET_ARTICLES_IN_COLLECTION_REQUEST":
                        {
                            const {
                                collectionId: n
                            } = t;
                            if (n === e.selectedArticleCollectionId) return un({}, e, {
                                isFetching: !0,
                                fetchingFailed: !1
                            });
                            break
                        }
                    case "GET_ARTICLES_IN_COLLECTION_SUCCESS":
                        {
                            const {
                                articles: n,
                                collectionId: r
                            } = t;
                            if (r === e.selectedArticleCollectionId) return un({}, e, {
                                articles: n,
                                isFetching: !1,
                                fetchingFailed: !1
                            });
                            break
                        }
                    case "GET_ARTICLES_IN_COLLECTION_FAILURE":
                        {
                            const {
                                collectionId: n
                            } = t;
                            if (n === e.selectedArticleCollectionId) return un({}, e, {
                                articles: [],
                                isFetching: !1,
                                fetchingFailed: !0
                            });
                            break
                        }
                    case "TOGGLE_SHOW_CONVERSATION_CARD":
                        return un({}, e, {
                            showNewConversationCard: t.showNewConversationCard
                        })
                }
                return e
            }
        }),
        fn = n(232),
        hn = n.n(fn),
        bn = n(17),
        _n = n.n(bn),
        gn = n(13),
        mn = n(3);

    function On(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function En(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? On(n, !0).forEach((function(t) {
                Sn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Sn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const vn = e => {
            if (!(() => {
                    var e, t;
                    if (Object(mn.a)()) return;
                    const n = null === (e = window) || void 0 === e ? void 0 : null === (t = e.parent) || void 0 === t ? void 0 : t.ga;
                    return "function" == typeof n && "function" == typeof(null == n ? void 0 : n.getAll) && (null == n ? void 0 : n.loaded)
                })()) return;
            const t = window.parent.ga.getAll();
            if (_n()(t) && t.length) {
                if (e) {
                    const n = yn(t, e);
                    return n || (window.parent.ga("create", e, "auto", "intercomMessenger"), yn(window.parent.ga.getAll(), e))
                }
                return t[0]
            }
        },
        yn = (e, t) => hn()(e, (function(e) {
            try {
                return e.b.data.values[":trackingId"] === t
            } catch (n) {
                if ("function" == typeof e.get) return t === e.get("trackingId")
            }
        })),
        Cn = e => Object.entries(e).reduce((e, [t, n]) => {
            if (n) return e ? e + `, ${t}: ${n}` : `${t}: '${n}'`
        }, null),
        In = (e, t) => {
            var n;
            const {
                parts: r
            } = e, i = r[0], o = t || i && i.id, s = o && -1 !== o.indexOf("message-"), a = {
                isAdmin: i && i.author && r[0] && r[0].author.isAdmin,
                customBotId: null === (n = e.analyticsMetadata) || void 0 === n ? void 0 : n.customBotId
            }, c = {
                messageId: o && o.replace("message-", "")
            };
            return En({}, a, {}, s ? c : {})
        },
        Tn = ["OPEN_MESSENGER", "CLOSE_MESSENGER", "CREATE_CONVERSATION_SUCCESS", "CREATE_COMMENT_SUCCESS", "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS", "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS", "RECORD_MESSAGE_SENT", "MARK_CONVERSATION_AS_READ_REQUEST", "UPFRONT_EMAIL_COLLECTION_SUBMITTED"];
    var wn = e => t => n => {
            const r = e.getState(),
                i = t(n);
            if (-1 === Tn.indexOf(n.type) || !r.app.features.googleAnalytics) return i;
            const o = r.app.customGoogleAnalyticsTrackerId,
                s = vn(o);
            if (!s) return Object(gn.b)("Intercom - Google Analytics is not installed or configured, have you forgotten to include it?"), i;
            const a = (e => ({
                name: t,
                metadata: n = {},
                nonInteraction: r = !1
            } = {}) => {
                try {
                    e.send("event", En({
                        eventCategory: "Intercom Messenger",
                        eventAction: t,
                        eventLabel: Cn(n)
                    }, r ? {
                        nonInteraction: r
                    } : {}))
                } catch (e) {
                    Object(gn.b)("Intercom - Something went wrong sending the Google Analytics event", e)
                }
            })(s);
            switch (n.type) {
                case "OPEN_MESSENGER":
                    a({
                        name: "Opened Messenger"
                    });
                    break;
                case "CLOSE_MESSENGER":
                    a({
                        name: "Closed Messenger"
                    });
                    break;
                case "CREATE_CONVERSATION_SUCCESS":
                    a({
                        name: "Started New Conversation"
                    });
                    break;
                case "CREATE_COMMENT_SUCCESS":
                    {
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i,
                                isAdmin: o
                            } = In(e),
                            s = En({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            });a({
                            name: "Sent a Reply",
                            metadata: o || t ? s : void 0
                        });
                        break
                    }
                case "UPFRONT_EMAIL_COLLECTION_SUBMITTED":
                case "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS":
                    a({
                        name: "Provided Email Address"
                    });
                    break;
                case "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS":
                    a({
                        name: n.card.completed ? "Completed App Flow" : "Interacted with App",
                        metadata: {
                            "App Name": n.card.app_package_name,
                            Location: (c = r.app.viewStack, c.length > 0 ? {
                                "home-screen": "Home",
                                conversation: "Conversation"
                            }[c[c.length - 1]] : "Conversation")
                        }
                    });
                    break;
                case "RECORD_MESSAGE_SENT":
                    {
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i
                            } = In(e, n.partId);i && a({
                            name: "Triggered Message",
                            metadata: En({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            }),
                            nonInteraction: !0
                        });
                        break
                    }
                case "MARK_CONVERSATION_AS_READ_REQUEST":
                    {
                        if (r.conversations.byId[n.conversationId].read) return;
                        const e = r.conversations.byId[n.conversationId],
                            {
                                customBotId: t,
                                messageId: i
                            } = In(e);a({
                            name: "Viewed Message",
                            metadata: En({}, t ? {
                                "Custom Bot ID": t || i
                            } : {
                                "Message ID": i
                            }),
                            nonInteraction: !0
                        });
                        break
                    }
            }
            var c;
            return i
        },
        An = n(27),
        Rn = n(85);

    function jn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Nn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Mn(e, t) {
        return void 0 !== t && t !== e
    }

    function Pn(e, t, n, r, i, o) {
        e.write(t, n, {
            domain: i,
            path: "/",
            expires: new Date(An.b.now() + r),
            sameSite: o ? "none" : "lax",
            secure: o
        })
    }

    function Dn(e, t) {
        return function(e) {
            return null != e
        }(e) ? e : t
    }

    function Un({
        domainSetting: e,
        originCookieDomain: t,
        meta: n = {}
    }) {
        if ("none" !== e) {
            if (void 0 !== e && Object(gn.b)("Intercom Messenger error: cookie_domain attribute supports only `none` option"), t) return `.${t}`; {
                const e = Object(Rn.a)(),
                    t = (e || "").split(":")[0];
                return Object(j.g)("missingOriginDomain", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? jn(n, !0).forEach((function(t) {
                            Nn(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, n, {
                    host: t,
                    rawHost: e
                })), "localhost" === t ? "" : t
            }
        }
    }
    var Ln = n(52),
        kn = n(28),
        xn = n.n(kn),
        Gn = n(235),
        Vn = n.n(Gn),
        Fn = n(41);
    const Bn = {
            increment: j.c,
            count: j.a,
            timing: j.f
        },
        Hn = () => {},
        $n = {
            info: Hn,
            error: Hn
        };

    function Wn(e, t, n, r, i) {
        let o;
        try {
            o = new t(e.endpoints, $n, Bn, n, r, () => {}, i)
        } catch (e) {
            Object(j.b)(e), zn(o)
        }
        return o
    }

    function zn(e) {
        if (void 0 !== e) try {
            e.shutdown()
        } catch (e) {
            Object(j.b)(e)
        }
    }

    function Qn(e, t, n, r, i, o, s, a, c, u, d) {
        if (!nr(t, n, u)) return e;
        if (zn(e), !Zn(n)) return;
        let l = "pending";
        const p = Wn(n, Vn.a, () => {
            l = Yn(l, r, o)
        }, () => {
            l = Jn()
        }, d);
        try {
            p.subscribeToAllTopics(), Kn(p, r, i, s, a, c, h.g)
        } catch (e) {
            Object(j.b)(e), zn(p)
        }
        return p
    }
    const qn = xn()(e => e(), 5e3, {
        leading: !0,
        trailing: !0
    });

    function Yn(e, t, n) {
        return "disconnected" === e && (Object(l.d)() <= 5 && (Object(j.g)("debounceGetUnreadConversations"), Object(l.g)()), qn(() => t.dispatch(n(_.b)))), Object(l.c)() || (Object(j.g)("realTimeConnected"), Object(l.n)(!0)), "connected"
    }

    function Jn() {
        return "disconnected"
    }

    function Kn(e, t, n, r, i, o, s) {
        const a = xn()(e => e(), 5e3);
        e.addListener("NewComment", e => {
            const {
                deliveryChannel: r,
                conversationId: i,
                createdByUserId: o,
                createdAt: s
            } = e.eventData;
            if (r && -1 === r.indexOf("web")) return;
            const {
                user: c
            } = t.getState(), u = () => t.dispatch(n(_.b, i, !0, s));
            o === c.id ? a(u) : u()
        }), e.addListener("UserContentSeenByAdmin", e => {
            const {
                conversationId: n
            } = e.eventData;
            t.dispatch(r(n))
        }), e.addListener("ConversationSeen", e => {
            const {
                conversationId: n
            } = e.eventData;
            t.dispatch(o(n))
        }), e.addListener("AdminIsTyping", e => {
            const {
                conversationId: n,
                adminId: r,
                adminName: o,
                adminAvatar: s,
                hasDefaultAvatar: a
            } = e.eventData;
            t.dispatch(i(n, r, o, Xn(s, a)))
        }), e.addListener("MessengerCardUpdated", e => {
            const {
                cardUri: r
            } = e.eventData, i = Object(Fn.b)(t.getState());
            i && Object(C.h)(i, r) && t.dispatch(n(_.b, i.id, !0))
        }), e.addListener("ConversationPartUpdated", e => {
            const {
                conversationId: r
            } = e.eventData;
            Object(Fn.b)(t.getState()).id === String(r) && t.dispatch(n(_.b, r, !0))
        }), e.addListener("StartTour", e => {
            const {
                tour: n
            } = e.eventData, {
                user: r
            } = t.getState();
            Object(j.h)(r, "received_nexus", "tour", "messenger", null, {
                tour_id: n.id
            }), r.isPresent && t.dispatch(s(n.id))
        })
    }
    const Xn = (e, t) => t || 0 !== e.indexOf("http") ? void 0 : e,
        Zn = e => void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0,
        er = e => Object(R.a)(e.split("/")).split("-")[0],
        tr = (e, t) => er(e) !== er(t),
        nr = (e, t, n) => Zn(e) && Zn(t) ? n || tr(e.endpoints[0], t.endpoints[0]) : !Zn(e) && Zn(t) || Zn(e) && !Zn(t);
    const rr = e => {
            const {
                app: {
                    color: t,
                    secondaryColor: n,
                    selfServeSuggestionsMatch: r,
                    name: i,
                    features: {
                        anonymousInboundMessages: o,
                        googleAnalytics: s,
                        hubspotInstalled: a,
                        inboundMessages: c,
                        marketoEnrichmentInstalled: u,
                        outboundMessages: d,
                        persistAcrossPages: l
                    },
                    launcherLogoUrl: p,
                    boundWebEvents: f,
                    helpCenterSiteUrl: h,
                    inboundConversationsDisabled: b,
                    isInstantBootEnabled: _,
                    alignment: g,
                    horizontalPadding: m,
                    verticalPadding: E,
                    isDeveloperWorkspace: S,
                    upfrontEmailCollectionSetting: v,
                    customGoogleAnalyticsTrackerId: y
                },
                launcher: {
                    isLauncherEnabled: C
                },
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: I
                },
                message: {
                    conversationId: T
                },
                openOnBoot: {
                    type: w,
                    metadata: A
                },
                user: {
                    role: R,
                    locale: j,
                    hasConversations: N
                }
            } = e, {
                conversations: M
            } = e, P = M ? M.byId : {};
            return {
                app: {
                    color: t,
                    secondaryColor: n,
                    selfServeSuggestionsMatch: r,
                    name: i,
                    features: {
                        anonymousInboundMessages: o,
                        googleAnalytics: s,
                        hubspotInstalled: a,
                        inboundMessages: c,
                        marketoEnrichmentInstalled: u,
                        outboundMessages: d,
                        persistAcrossPages: l
                    },
                    launcherLogoUrl: p,
                    boundWebEvents: f,
                    helpCenterSiteUrl: h,
                    inboundConversationsDisabled: b,
                    isInstantBootEnabled: _,
                    alignment: g,
                    horizontalPadding: m,
                    verticalPadding: E,
                    isDeveloperWorkspace: S,
                    upfrontEmailCollectionSetting: v,
                    customGoogleAnalyticsTrackerId: y
                },
                launcher: {
                    isLauncherEnabled: C
                },
                launcherDiscoveryMode: {
                    hasDiscoveredLauncher: I
                },
                user: {
                    role: R,
                    locale: j,
                    hasConversations: N
                },
                message: {
                    conversationId: T
                },
                conversations: {
                    byId: ir(P)
                },
                openOnBoot: {
                    type: w,
                    metadata: A
                },
                operator: {
                    lastComposerEvent: O(e)
                }
            }
        },
        ir = e => {
            const t = Object.keys(e),
                n = {};
            return t.forEach(t => {
                const {
                    dismissed: r,
                    read: i
                } = e[t];
                n[t] = {
                    fetchState: "partial",
                    dismissed: r,
                    read: i
                }
            }), n
        };
    var or = n(121);
    let sr = void 0,
        ar = void 0,
        cr = void 0;
    var ur = ({
        updateRealtimeClient: e,
        shutdownRealtimeClient: t,
        getConversation: n,
        getUnreadConversations: r,
        userContentSeenByAdmin: i,
        adminIsTyping: o,
        conversationReadElsewhere: s
    }) => a => c => u => {
        const d = c(u);
        switch (u.type) {
            case "CREATE_OR_UPDATE_USER_SUCCESS":
                {
                    const t = u.user.app.realtimeConfig,
                        c = u.user.id;sr = e(sr, ar, t, a, n, r, i, o, s, c !== cr, u.user.role),
                    ar = t,
                    cr = c;
                    break
                }
            case "DESTROY_SESSION":
                t(sr), sr = void 0, ar = void 0, cr = void 0
        }
        if (!sr) return d;
        switch (u.type) {
            case "MARK_CONVERSATION_AS_READ_REQUEST":
                sr.sendEvent("ConversationSeen", {
                    conversationId: u.conversationId
                });
                break;
            case "USER_IS_TYPING":
                sr.throttleSendEvent("UserIsTyping", {
                    conversationId: u.conversationId
                }, !0);
                break;
            case "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS":
                sr.sendEvent("MessengerCardUpdated", {
                    cardUri: u.card.uri
                })
        }
        return d
    };
    const dr = e => (!Object(mn.a)() && window.parent && window.parent.intercomSettings && window.parent.intercomSettings.app_id && (e = `${e}-${window.parent.intercomSettings.app_id}`), e),
        lr = e => {
            try {
                return JSON.parse(ue.a.get(e))
            } catch (e) {
                Object(j.c)("hydrate_read_error")
            }
        },
        pr = (e, t) => {
            try {
                ue.a.set(e, JSON.stringify(t))
            } catch (e) {
                Object(j.c)("hydrate_write_error")
            }
        };
    const fr = e => ({
        type: "REHYDRATE",
        state: e
    });
    var hr = (e, t = "intercom-state") => n => (...r) => {
        const i = n(...r);
        if (t = dr(t), !Object(N.d)()) return i;
        const o = lr(t);
        if (o) {
            const e = i.getState();
            try {
                i.dispatch(fr(o))
            } catch (n) {
                Object(j.c)("hydrate_error"),
                    function(e) {
                        try {
                            ue.a.remove(e)
                        } catch (e) {
                            Object(j.c)("hydrate_remove_error")
                        }
                    }(t), i.dispatch(fr(e))
            }
        }
        return i.subscribe(() => {
            pr(t, e(i.getState()))
        }), i
    };
    var br = () => e => t => {
            const n = e(t);
            switch (t.type) {
                case "DESTROY_SESSION":
                    Object(N.d)() && t.clearCookies && localStorage.removeItem(dr("intercom-state"))
            }
            return n
        },
        _r = {
            play(e) {
                if (!N.a.hasAudioSupport()) return;
                const t = this.load(e);
                if (t) {
                    const e = t.play();
                    e && e.catch(() => {})
                }
            },
            playFile(e) {
                e && N.a.hasAudioSupport() && this.play(n(219)(`./${e}`))
            },
            load(e) {
                return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e]
            },
            playNotification: xn()((function(e) {
                this.play(n(219)(`./${e}`))
            }), 3e3, {
                leading: !0,
                trailing: !1
            }),
            audio: {}
        },
        gr = n(95);
    let mr = (() => {
        const e = ue.b.get("played-notifications");
        return e ? JSON.parse(e) : {}
    })();
    const Or = (e, t) => {
            mr[e] = t, ue.b.set("played-notifications", JSON.stringify(mr))
        },
        Er = (e, t) => {
            const n = Object(R.a)(e.parts);
            return !((e, t) => {
                const n = mr[e];
                return n === t || -1 === n
            })(e.id, n.id) || ((e, t) => {
                const {
                    notificationStatus: n
                } = e;
                return "renotifying" === n && t
            })(e, t)
        },
        Sr = (e, t, n) => {
            let r = !1;
            e.forEach(e => {
                const n = Object(R.a)(e.parts);
                Er(e, t) && (r = !0), Or(e.id, n.id)
            }), r && _r.playNotification(n)
        },
        vr = (e, t) => {
            switch (e) {
                case "CREATE_COMMENT_FAILURE":
                case "CREATE_CONVERSATION_FAILURE":
                    return "failed.mp3";
                case "CREATE_COMMENT_REQUEST":
                case "CREATE_CONVERSATION_REQUEST":
                    return "submit.mp3";
                default:
                    return t && t.author.isBot ? "operator.mp3" : "notification.mp3"
            }
        };
    var yr = e => t => n => {
        const r = t(n),
            i = e.getState();
        if (i.app.isAudioEnabled && !i.app.isBoundEventCreatorOpen) {
            switch (n.type) {
                case "CREATE_COMMENT_REQUEST":
                case "CREATE_CONVERSATION_REQUEST":
                    _r.playFile(vr(n.type));
                    break;
                case "CREATE_COMMENT_FAILURE":
                case "CREATE_CONVERSATION_FAILURE":
                    _r.playFile(vr(n.type));
                    break;
                case "OPEN_MESSAGE":
                    {
                        const e = i.conversations.byId[n.conversationId];Sr([e], i.session.newSession, vr(n.type));
                        break
                    }
                case "GET_CONVERSATION_SUCCESS":
                    {
                        const {
                            conversation: e,
                            skipNotification: t
                        } = n;
                        if (e.read) return;
                        const r = Object(R.a)(e.parts);
                        if (!0 === t || Object(gr.a)(r.partType)) return void Or(e.id, r.id);Sr([e], i.session.newSession, vr(n.type, r));
                        break
                    }
                case "GET_CONVERSATIONS_SUCCESS":
                    {
                        const e = Object(A.a)(i);Sr(e, i.session.newSession, vr(n.type));
                        break
                    }
                case "CREATE_OR_UPDATE_USER_SUCCESS":
                    {
                        const {
                            unreadDismissedConversationIds: e
                        } = n.user;e.forEach(e => {
                            Or(e, -1)
                        });
                        break
                    }
            }
            return r
        }
    };
    const Cr = [],
        Ir = [];
    var Tr = ({
            getState: e
        }) => t => n => (function(e, t) {
            const {
                user: n,
                app: r,
                article: i
            } = e();
            switch (t.type) {
                case "OPEN_LAUNCHER_DISCOVERY_MODE":
                    return [Object(j.i)(n, "received", "message", "messenger", "from_launcher_discovery_mode")];
                case "CREATE_COMMENT_SUCCESS":
                    return [Object(j.i)(n, "sent", "reply", t.isBorderless ? "borderless" : "messenger", "in_conversation", {
                        conversation_id: t.conversationId,
                        comment_id: t.part.id,
                        is_attachment: Object(l.h)(t.part.body),
                        is_annotated: t.isAnnotatedImage || !1,
                        within_office_hours: Object(l.j)(t.officeHoursResponse),
                        teammate_status: Object(l.e)(t.lastParticipatingAdmin),
                        time_since_last_active_in_minutes: Object(l.f)(t.lastParticipatingAdmin),
                        from_messenger_suggested_content: t.fromMessengerSuggestedContent
                    })];
                case "CREATE_CONVERSATION_SUCCESS":
                    const e = -1 !== ["custom_bot", "resolution_bot_auto_suggest"].indexOf(t.conversationTriggerType),
                        o = "resolution_bot_auto_suggest" === t.conversationTriggerType;
                    return [Object(j.i)(n, "sent", "message", "messenger", "in_new_conversation", {
                        conversation_id: t.conversation.id,
                        is_attachment: Object(l.h)(t.conversation.parts[0].body),
                        is_annotated: t.isAnnotatedImage || !1,
                        within_office_hours: Object(l.j)(t.officeHoursResponse),
                        from_suggestion: e,
                        from_messenger_suggested_content: o,
                        trigger_type: t.conversationTriggerType
                    })];
                case "UPDATE_CONVERSATION_FORM_REQUEST":
                    return [Object(j.i)(n, "sent", "reply", "messenger", "in_conversation", {
                        type: "automated_lead_qualification",
                        conversation_id: t.conversationId,
                        part_id: t.partId,
                        attribute_identifier: t.identifier,
                        reply: t.value,
                        attribute_type: t.identifierType,
                        form_type: t.formType,
                        attribute_is_custom_data: t.isCustomData
                    })];
                case "CREATE_REACTION_REQUEST":
                    return [Object(j.i)(n, "sent", "reaction", t.isFromConversation ? "messenger" : "in_app", t.isFromConversation ? "in_conversation" : "from_full", {
                        conversation_id: t.conversationId
                    })];
                case "OPEN_ARTICLE":
                    if (!t.metricMetadata) return [];
                    const s = Object.assign({
                        owner: "educate",
                        article_id: t.article.id,
                        conversation_id: r.conversationId
                    }, t.metricMetadata);
                    return [Object(j.i)(n, "viewed", "article", "in_app", "from_conversation", s, "educate_event")];
                case "CREATE_ARTICLE_REACTION_REQUEST":
                    const {
                        activeArticle: a
                    } = i, c = a && a.reactionsReply && a.reactionsReply.reactionSet[t.reactionIndex] && a.reactionsReply.reactionSet[t.reactionIndex].emoji;
                    return [Object(j.i)(n, "sent", "reaction", "in_app", "on_article", {
                        owner: "educate",
                        reaction: c,
                        article_id: t.articleId,
                        conversation_id: r.conversationId
                    }, "educate_event")];
                case "CREATE_EVENT":
                    return t.boundEventMetadata ? [Object(j.i)(n, "triggered", "bound_event", "in_app", "from_customer_site", Object.assign(t.boundEventMetadata, {
                        event_name: t.name
                    }))] : [];
                default:
                    return []
            }
        }(e, n).forEach(e => Object(j.m)(e)), "DESTROY_SESSION" === n.type && (Cr.splice(0), Ir.splice(0)), t(n)),
        wr = !Object(mn.a)() && !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ && parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: !1,
            traceLimit: 25
        }) : () => e => e;
    const Ar = ur({
            updateRealtimeClient: Qn,
            shutdownRealtimeClient: zn,
            getConversation: v.l,
            getUnreadConversations: or.b,
            userContentSeenByAdmin: v.t,
            adminIsTyping: v.a,
            conversationReadElsewhere: v.c
        }),
        Rr = function(e) {
            let t, n;
            return r => i => o => {
                const s = r.getState();
                switch (o.type) {
                    case "CREATE_OR_UPDATE_USER_SUCCESS":
                        {
                            if (!s.session) return;
                            const {
                                appId: r
                            } = s.session,
                            {
                                anonymousSessionDuration: i
                            } = s.user,
                            {
                                anonymousId: a,
                                anonymousSession: c
                            } = o.user,
                            {
                                originCookieDomain: d
                            } = o.user.app,
                            {
                                crossSiteCookies: l
                            } = o.user.app.features,
                            p = Un({
                                domainSetting: s.app.cookieDomain,
                                originCookieDomain: d,
                                meta: {
                                    action: o.type,
                                    role: o.user && o.user.role
                                }
                            });
                            if (Mn(t, a)) {
                                const n = Dn(i, 2333e7);
                                Pn(e, Object(u.a)(r), a, n, p, l), t = a
                            }
                            if (Mn(n, c)) {
                                const t = Dn(i, 6048e5);
                                Pn(e, Object(u.b)(r), c, t, p, l), n = c
                            }
                            break
                        }
                    case "DESTROY_SESSION":
                        {
                            const {
                                session: t
                            } = s,
                            {
                                originCookieDomain: n
                            } = s.app,
                            r = Un({
                                domainSetting: s.app.cookieDomain,
                                originCookieDomain: n,
                                meta: {
                                    action: o.type,
                                    role: o.user && o.user.role
                                }
                            });
                            if (t && o.clearCookies) {
                                const {
                                    appId: n
                                } = t;
                                e.clear(Object(u.b)(n), {
                                    domain: r,
                                    path: "/"
                                }), e.clear(Object(u.a)(n), {
                                    domain: r,
                                    path: "/"
                                }), e.clear(Object(u.d)(n), {
                                    domain: r,
                                    path: "/"
                                })
                            }
                            break
                        }
                }
                return i(o)
            }
        }(s.a),
        jr = wr(),
        Nr = hr(rr);
    var Mr = e => Object(U.createStore)(pn, e, Object(U.compose)(Object(U.applyMiddleware)(k.a, Tr, yr, wn, Ar, Rr, br, Ln.d), Nr, jr));
    var Pr = n(9),
        Dr = n(64),
        Ur = n(72),
        Lr = n(50),
        kr = n(236),
        xr = n.n(kr),
        Gr = n(237),
        Vr = n.n(Gr);
    const Fr = ["app_id", "user_id", "email", "user_hash", "session_duration", "custom_data", "user_data", "widget", "custom_launcher_selector", "hide_default_launcher", "alignment", "horizontal_padding", "vertical_padding", "cookie_domain", "background_color", "action_color", "api_base"];

    function Br(e) {
        return !Xe()(e)
    }

    function Hr(e) {
        return Fr.indexOf(e) < 0
    }

    function $r(e) {
        return Object.keys(e).filter(Hr).filter(Br).reduce((t, n) => (t[n] = e[n], t), {})
    }

    function Wr(e) {
        return Object.keys(e).filter(Br).reduce((t, n) => {
            const r = e[n];
            return function(e) {
                return null != e
            }(r) && (t[n] = r), t
        }, {})
    }

    function zr(e) {
        return Object.assign(function(e) {
            return e.custom_data ? $r(e.custom_data) : {}
        }(e), $r(e))
    }

    function Qr(e) {
        return function(e) {
            if (!e.user_data) return;
            return Wr({
                appId: e.app_id,
                email: e.user_data.email,
                userId: e.user_data.user_id,
                userHash: e.user_data.user_hash
            })
        }(e) || function(e) {
            return Wr({
                appId: e.app_id,
                email: e.email,
                userId: e.user_id,
                userHash: e.user_hash
            })
        }(e)
    }

    function qr(e) {
        return e && e.widget && !Xe()(e.widget.activator) && "#IntercomDefaultWidget" !== e.widget.activator ? e.widget.activator : null
    }

    function Yr(e) {
        return Xe()(e.custom_launcher_selector) ? qr(e) : e.custom_launcher_selector
    }

    function Jr(e) {
        return Vr()(e.hide_default_launcher) ? e.hide_default_launcher ? "hide" : "show" : function(e) {
            return e.widget && "#IntercomDefaultWidget" === e.widget.activator ? "show" : "not-present"
        }(e)
    }

    function Kr(e) {
        return e.session_duration || null
    }

    function Xr(e) {
        const t = {
            alignment: e.alignment,
            horizontalPadding: e.horizontal_padding,
            verticalPadding: e.vertical_padding,
            cookieDomain: e.cookie_domain,
            color: e.action_color,
            secondaryColor: e.background_color
        };
        return xr()(t, e => void 0 !== e)
    }
    var Zr = n(24),
        ei = n(18),
        ti = n(161);

    function ni(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const ri = c()("intercom.client-matching.client-match-object.base");
    class base_BaseClientMatchObject {
        constructor(e) {
            ni(this, "_ruleset", void 0), ni(this, "_predicateChain", void 0), this._ruleset = e, this._predicateChain = new S.a(e, () => {})
        }
        getRuleset() {
            return this._ruleset
        }
        getRulesetId() {
            return this._ruleset.ruleset_id
        }
        getObjectType() {
            return this._ruleset.ruleset_link_object_type
        }
        getSerializedObject() {
            return this._ruleset.serialized_object
        }
        evaluatePredicates() {
            return !(!this.matchOnMobileBrowser() && Object(N.g)()) && this._predicateChain.evaluate()
        }
        canRematch() {
            return "transient_match" === this.getRuleset().ruleset_match_behavior
        }
        matchOnMobileBrowser() {
            return !0
        }
        refreshActiveMatch(e) {
            var t;
            const {
                app: n
            } = e.getState();
            (null === (t = n.features) || void 0 === t ? void 0 : t.clientMatchingRefreshActiveMatch) && (ri(`.refreshActiveMatch called [${this.getObjectType()}]`, this.getRuleset()), this.onRefreshActiveMatch(this._ruleset.serialized_object, e))
        }
        async match(e, t) {
            ri(`.match called [${this.getObjectType()}]`, this.getRuleset());
            const n = e.getState(),
                r = this.getRuleset(),
                i = this.onPreMatch(e);
            let o;
            try {
                const e = _.b.rulesetConditionSatisfied(n.session, r.ruleset_id, r.ruleset_link_id, r.user_id, r.company_id, r.predicates, r.checkpoint_id).then(e => this.selectMatchObject(e)),
                    t = this.getSerializedObject();
                o = t ? await Promise.resolve(t) : await e
            } catch (e) {
                return Object(j.b)(`Call to /match failed, unable to complete client match rulesetId=${this.getRulesetId()}`)
            }
            this.onMatch(o, e, i, t)
        }
        selectMatchObject(e) {
            return e
        }
        onPreMatch(e) {}
        onMatch(e, t, n, r) {}
        onRefreshActiveMatch(e, t) {}
        unmatch(e) {
            ri(`.unmatch called [${this.getObjectType()}]`, this.getRuleset()), this.onUnmatch(e)
        }
        onUnmatch(e) {}
    }
    var ii = n(115);
    class banner_BannerClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.banner
        }
        onMatch(e, t) {
            if (!e) return;
            const n = _.b.buildBanner(e);
            let {
                banners: r
            } = t.getState();
            r = r.concat(n), t.dispatch(Object(ii.e)(r))
        }
    }
    class tour_TourClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.tour
        }
        matchOnMobileBrowser() {
            return !1
        }
        onPreMatch() {
            var e, t, n;
            return mn.a ? {} : {
                currentUrl: null === (e = window) || void 0 === e ? void 0 : null === (t = e.parent) || void 0 === t ? void 0 : null === (n = t.location) || void 0 === n ? void 0 : n.pathname
            }
        }
        onMatch(e, t, n) {
            var r, i, o;
            t.dispatch(Object(h.j)(_.b.buildTour(e))), Object(mn.a)() || n.currentUrl === (null === (r = window) || void 0 === r ? void 0 : null === (i = r.parent) || void 0 === i ? void 0 : null === (o = i.location) || void 0 === o ? void 0 : o.pathname) || (Object(j.c)("tour_match_url_mismatch"), Object(j.b)(`tour_match_url_mismatch rulesetId=${this.getRulesetId()}`))
        }
    }
    class inbound_trigger_InboundTriggerClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.composerSuggestions
        }
        onMatch(e, t) {
            t.dispatch(Object(p.a)(e))
        }
        onUnmatch(e) {
            e.dispatch(Object(p.b)(this.getRulesetId()))
        }
    }
    var oi = n(91);
    class answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.answerbotPredictiveContexts
        }
        onMatch(e, t) {
            t.dispatch(Object(oi.a)(e))
        }
        onUnmatch(e) {
            e.dispatch(Object(oi.a)(null))
        }
    }
    class messenger_trigger_MessengerTriggerClientMatchObject extends base_BaseClientMatchObject {
        constructor(...e) {
            var t, n, r;
            super(...e), r = void 0, (n = "_node") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
        selectMatchObject() {
            return null
        }
        onMatch(e, t) {
            this._node = this._findDOMNode(e), t.dispatch(Object(Ur.a)(e, _.b))
        }
        onUnmatch(e) {
            e.dispatch(Object(Ur.b)(this.messengerTriggerId()))
        }
        onRefreshActiveMatch(e, t) {
            this._shouldRefreshActiveMatch() && (this.onUnmatch(t), this.onMatch(e, t))
        }
        messengerTriggerId() {
            return this.getSerializedObject().id
        }
        _shouldRefreshActiveMatch() {
            return Boolean(this._node && !window.parent.document.contains(this._node))
        }
        _findDOMNode(e) {
            return window.parent.document.querySelector(e.selector)
        }
    }
    class chat_ChatClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.chat
        }
        onMatch(e, t) {
            e && t.dispatch(Object(v.o)(_.b, Object(_.a)(e)))
        }
    }
    class custom_bot_CustomBotClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.customBot
        }
        onMatch(e, t) {
            e && t.dispatch(Object(v.o)(_.b, Object(_.a)(e)))
        }
    }
    class post_PostClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.post
        }
        onMatch(e, t) {
            e && t.dispatch(Object(v.o)(_.b, Object(_.a)(e)))
        }
    }
    class seriesCondition_SeriesConditionClientMatchObject extends base_BaseClientMatchObject {
        selectMatchObject(e) {
            return e.seriesCondition
        }
        onMatch(e, t, n, r) {
            r.createOrUpdateUser({}, "apiUpdate", !0)
        }
    }

    function si(e) {
        switch (e.ruleset_link_object_type) {
            case "banner":
                return new banner_BannerClientMatchObject(e);
            case "tour":
                return new tour_TourClientMatchObject(e);
            case "inbound_trigger":
            case "inbound_custom_bot":
                return new inbound_trigger_InboundTriggerClientMatchObject(e);
            case "chat":
                return new chat_ChatClientMatchObject(e);
            case "custom_bot":
                return new custom_bot_CustomBotClientMatchObject(e);
            case "post":
                return new post_PostClientMatchObject(e);
            case "messenger_trigger":
            case "button_custom_bot":
                return new messenger_trigger_MessengerTriggerClientMatchObject(e);
            case "answerbot_predictive_context":
                return new answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject(e);
            case "series_condition":
                return new seriesCondition_SeriesConditionClientMatchObject(e);
            default:
                return new base_BaseClientMatchObject(e)
        }
    }

    function ai(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const ci = c()("intercom.client-matching.client-match-runner");
    class client_match_runner_ClientMatchRunner {
        constructor(e, t) {
            ai(this, "clientMatches", []), ai(this, "activeClientMatchIds", {}), ai(this, "evalLoop", null), ai(this, "store", void 0), ai(this, "session", void 0), this.store = e, this.session = t
        }
        start() {
            null === this.evalLoop && (ci("Starting evaluation loop"), this.evalLoop = setInterval(() => this.performClientMatching(), 500))
        }
        stop() {
            null !== this.evalLoop && (ci("Stopping evaluation loop"), window.clearInterval(this.evalLoop), this.evalLoop = null)
        }
        updateClientMatches(e) {
            this._removeMissingMatches(e), this._addNewMatches(e), this.performClientMatching()
        }
        performClientMatching() {
            const e = this._evaluateClientMatches();
            this._processResults(e)
        }
        _evaluateClientMatches() {
            const e = {
                positiveMatches: [],
                negativeMatches: []
            };
            return this.clientMatches.forEach(t => {
                t.evaluatePredicates() ? e.positiveMatches.push(t) : e.negativeMatches.push(t)
            }), e
        }
        _processResults(e) {
            e.negativeMatches.forEach(e => {
                const t = e.getRulesetId();
                this.activeClientMatchIds[t] && (e.unmatch(this.store), delete this.activeClientMatchIds[t], e.canRematch() || this._removeClientMatch(e))
            }), e.positiveMatches.forEach(e => {
                const t = e.getRulesetId();
                this.activeClientMatchIds[t] ? e.refreshActiveMatch(this.store) : (e.match(this.store, this.session), this.activeClientMatchIds[t] = !0)
            })
        }
        _addNewMatches(e) {
            for (const t of e) this.clientMatches.find(e => e.getRulesetId() === t.ruleset_id) || this.clientMatches.push(si(t));
            this._evaluateClientMatches()
        }
        _removeMissingMatches(e) {
            for (const t of this.clientMatches) e.find(e => e.ruleset_id === t.getRulesetId()) || (this.activeClientMatchIds[t.getRulesetId()] && t.unmatch(this.store), this._removeClientMatch(t))
        }
        _removeClientMatch(e) {
            this.clientMatches.splice(this.clientMatches.indexOf(e), 1)
        }
    }
    var ui = n(220);
    const di = e => {
            try {
                return e.self !== e.top
            } catch (e) {
                return !1
            }
        },
        li = e => {
            try {
                return e.document.body.text.length > 0
            } catch (e) {
                return !1
            }
        };
    var pi = n(144),
        fi = n(157),
        hi = n(149);

    function bi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const {
        assign: _i
    } = Object, gi = c()("intercom.session");

    function mi(e, t, n) {
        let r = t(e.getState());
        return () => {
            const i = t(e.getState());
            r !== i && (r = i, n(i))
        }
    }

    function Oi(e) {
        return e.intercomSettings
    }
    var Ei = class session_Session {
            constructor(e, t, n) {
                bi(this, "handleCustomLauncherClick", e => (e.preventDefault(), this.toggleMessenger(), this.addLauncherClickedMetric(), qr(Oi(this.window)) && (j.j.addIncrementOpMetric("legacyCustomLauncherClick"), j.j.buildAndAddHcMetric("legacyCustomLauncherClick")), !1)), bi(this, "handleMessengerChange", e => {
                    (e ? this.messengerOpenCallbacks : this.messengerCloseCallbacks).forEach(e => e()), e || "messenger-trigger" !== Object(i.e)(this.store.getState()) || this.store.dispatch(Pr.b.navigateBack())
                }), bi(this, "handleUnreadConversationCountChange", e => {
                    this.unreadConversationCountChangeCallbacks.forEach(t => t(e))
                }), this.setContentRefreshTimeoutReference, this.window = e, this.store = t || (e => {
                    const t = Mr(e);
                    return t.subscribe(T(t)), t.subscribe(D(t)), t
                })(), this.destroyApp = n, this.isReady = !1, this.hasScrapedCookies = !1, this.readyCallbacks = [], this.messengerOpenCallbacks = [], this.messengerCloseCallbacks = [], this.unreadConversationCountChangeCallbacks = [], this.storeSubscribers = [], this.clientMatchRunner = new client_match_runner_ClientMatchRunner(this.store, this), this.startClientMatchRunner(), this.createMessengerChangeSubscriber(), this.createUnreadConversationCountChangeSubscriber()
            }
            createOrUpdateUser(e = {}, t, n = !1) {
                const r = this.getSettings(e),
                    i = this.window.intercomEncryptedPayload;
                const o = this.store.getState().app;
                let {
                    session: a
                } = this.store.getState();
                const c = Qr(r);
                if (a = _i({}, a, c), ! function(e) {
                        return e && e.appId
                    }(a)) return j.j.addIncrementOpMetric("bailed_ping_request_because_of_invalid_session"), Promise.resolve();
                const {
                    appId: d
                } = a;
                (({
                    appWindow: e,
                    appId: t
                }) => {
                    if (di(e)) {
                        const n = di(e.parent),
                            r = li(e),
                            {
                                referrer: i
                            } = e.document;
                        Object(j.d)(`messenger_sandboxed - referrer=${i}`), Object(j.c)("messenger_sandboxed", {
                            appId: t,
                            appSandboxed: n,
                            hasBodyText: r
                        })
                    }
                })({
                    appWindow: this.window,
                    appId: d
                }), a = _i({}, a, function(e) {
                    const t = {},
                        n = s.a.read(Object(u.a)(e)) || s.a.read(Object(u.d)(e)),
                        r = s.a.read(Object(u.b)(e));
                    n && _i(t, {
                        anonymousId: n
                    });
                    r && _i(t, {
                        anonymousSession: r
                    });
                    return t
                }(d));
                const p = zr(r),
                    f = {};
                if (Object(u.f)()) f.marketo_tracking_cookie = null, f.hubspot_tracking_cookie = null;
                else {
                    if (o.features.marketoEnrichmentInstalled) {
                        this.hasScrapedCookies = !0;
                        const e = s.a.read(Object(u.e)());
                        e && (f.marketo_tracking_cookie = e)
                    }
                    if (o.features.hubspotInstalled) {
                        this.hasScrapedCookies = !0;
                        const e = s.a.read(Object(u.c)());
                        e && (f.hubspot_tracking_cookie = e)
                    }
                }
                const h = Yr(r);
                h && this.enableCustomLauncher(h), this.stopMetricsPolling = j.j.startMetricsPolling(a, this.window), Object(l.a)() || (j.j.buildAndAddHcMetric("apiBoot"), Object(l.o)(!0));
                const b = this.window.document.URL,
                    g = Xr(r);
                return this.setContentRefreshTimeoutReference && window.clearTimeout(this.setContentRefreshTimeoutReference),
                    function(e, t) {
                        Object(Ye.c)(e, e => t.dispatch(Object(ti.c)(e))), Object(Ye.f)(e)
                    }(this.window, this.store), this.store.dispatch(Dr.c.createOrUpdateUser(_.b, a, b, p, Jr(r), Kr(r), g, n, i, t, f, this.destroyApp)).then(e => e && this.handleUserCreateOrUpdate(e, r))
            }
            createCustomizationOverride(e) {
                const t = Xr(this.getSettings(e));
                return this.store.dispatch(Object(f.b)(t))
            }
            destroy(e = !0) {
                this.store.dispatch(Dr.c.destroySession(e)), this.stopMetricsPolling && this.stopMetricsPolling(), this.disableCustomLauncher(), this.removeStoreSubscribers(), this.stopClientMatchRunner(), Dr.c.setupDefaultCreateOrUpdateUserRateLimiting(), Dr.c.isDuplicateCreateOrUpdateUserRequest.reset()
            }
            openMessenger() {
                this.whenReady(() => {
                    const {
                        borderless: e
                    } = this.store.getState();
                    e.conversationId ? this.store.dispatch(Pr.b.openConversationInMessenger(e.conversationId)) : (this.store.dispatch(Pr.b.showInitialScreen()), this.store.dispatch(Pr.b.openMessenger()))
                })
            }
            openOnBoot() {
                var e;
                const {
                    getState: t,
                    dispatch: n
                } = this.store, r = t(), i = r.app, s = r.openOnBoot;
                if (!Object(o.b)() && s && (null == i ? void 0 : null === (e = i.features) || void 0 === e ? void 0 : e.persistAcrossPages)) switch (s.type) {
                    case "conversation":
                        const e = s.metadata.conversationId;
                        e && n(Pr.b.openConversationInMessenger(e));
                        break;
                    case "new_conversation":
                        n(Pr.b.openMessenger()), n(Pr.b.showNewConversation());
                        break;
                    case "article":
                        if ("article-link" === s.metadata.componentId && s.metadata.url) {
                            var a, c;
                            const e = null === (a = s.metadata) || void 0 === a ? void 0 : null === (c = a.previousState) || void 0 === c ? void 0 : c.metadata;
                            if (e) {
                                const t = e.conversationId;
                                t && n(Pr.b.openConversationInMessenger(t))
                            }
                            n(Object(b.b)(_.b, s.metadata.cardUri, s.metadata.componentId, s.metadata.url, {}))
                        }
                        break;
                    case "browse_mode":
                        {
                            const {
                                selectedArticleCollectionId: e
                            } = s.metadata;n(Pr.b.openMessenger()),
                            n(Object(pi.a)(_.b)),
                            n(Pr.b.showBrowseMode()),
                            e && n(Object(fi.b)(e));
                            break
                        }
                    case "browse_mode_article":
                        {
                            const {
                                articleId: e
                            } = s.metadata;n(Pr.b.openMessenger()),
                            n(Object(pi.a)(_.b)),
                            n(Pr.b.showBrowseMode()),
                            n(Object(hi.g)(e, null, !0, !0));
                            break
                        }
                }
            }
            closeMessenger() {
                this.whenReady(() => {
                    this.store.dispatch(Pr.b.closeMessenger())
                })
            }
            toggleMessenger() {
                this.whenReady(() => {
                    this.store.dispatch(Pr.b.toggleMessenger())
                })
            }
            showConversations() {
                this.whenReady(() => {
                    this.store.dispatch(Pr.b.openConversations())
                })
            }
            showNewConversation(e) {
                this.whenReady(() => {
                    this.store.dispatch(Pr.b.openNewConversation(e))
                })
            }
            startTour(e) {
                this.whenReady(() => {
                    this.store.dispatch(Object(h.d)(e))
                })
            }
            createEvent(e, t) {
                this.whenReady(() => {
                    this.store.dispatch(Dr.c.createEvent(_.b, e, t))
                })
            }
            createArticleReaction(e, t, n) {
                this.whenReady(() => {
                    const {
                        session: r,
                        app: {
                            isMessengerOpen: o
                        }
                    } = this.store.getState(), s = !("conversation" === Object(i.e)(this.store.getState()) && o);
                    _.b.createArticleReaction(r, e, t, s, n)
                })
            }
            previewInboundCustomBot(e) {
                this.whenReady(() => {
                    e = _.b.buildComposerSuggestions(e), this.store.dispatch(Object(p.d)(e))
                })
            }
            previewOutboundCustomBot(e) {
                this.store.dispatch(Object(Ur.d)(_.b, e))
            }
            createMetric(e, t) {
                this.whenReady(() => {
                    const {
                        session: n,
                        user: r
                    } = this.store.getState();
                    t = _i({
                        anonymous_id: n.anonymousId,
                        end_user_id: r.id,
                        user_id: r.id,
                        user_role: r.role
                    }, t);
                    const i = n.appId,
                        o = [{
                            name: e.toString(),
                            id: ei.a.generateUUID(),
                            app_id_code: i,
                            created_at: Math.round(Date.now() / 1e3),
                            metadata: t
                        }];
                    _.b.createMetrics(n, o)
                })
            }
            trigger(e) {
                this.store.dispatch(Object(Ur.c)(e, _.b))
            }
            getSettings(e) {
                return _i({}, Oi(this.window), e)
            }
            getArticleReaction(e, t, n) {
                this.whenReady(() => {
                    const {
                        session: r
                    } = this.store.getState();
                    _.b.getArticleReaction(r, e, t, n)
                })
            }
            enterTourPreviewMode(e) {
                this.whenReady(() => {
                    this.store.dispatch(Object(h.h)(_.b.buildTour(e), !0))
                })
            }
            exitTourPreviewMode() {
                this.whenReady(() => {
                    this.store.dispatch(Object(h.i)())
                })
            }
            getVisitorId() {
                const {
                    session: e
                } = this.store.getState();
                if (!e) return;
                const {
                    appId: t
                } = e;
                return s.a.read(Object(u.a)(t)) || s.a.read(Object(u.d)(t))
            }
            onMessengerOpen(e) {
                this.messengerOpenCallbacks.push(e)
            }
            onMessengerClose(e) {
                this.messengerCloseCallbacks.push(e)
            }
            onUnreadConversationCountChange(e) {
                const t = this.store.getState(),
                    n = Object(Lr.b)(t);
                this.unreadConversationCountChangeCallbacks.push(e), e(n)
            }
            enableCustomLauncher(e) {
                if (Object(mn.a)()) return;
                this.disableCustomLauncher();
                const t = this.window.document.getElementsByTagName("body")[0];
                this.customLauncherClickHandler = Object(Zr.g)(t, e, this.handleCustomLauncherClick), Object(Zr.c)(t, "click", this.customLauncherClickHandler)
            }
            disableCustomLauncher() {
                if (!this.customLauncherClickHandler) return;
                const e = this.window.document.getElementsByTagName("body")[0];
                Object(Zr.y)(e, "click", this.customLauncherClickHandler), this.customLauncherClickHandler = null
            }
            whenReady(e) {
                if (this.isReady) return setTimeout(e, 1);
                this.readyCallbacks.push(e)
            }
            executeReadyCallbacks() {
                const {
                    readyCallbacks: e
                } = this;
                for (; e.length;) e.shift()();
                this.readyCallbacks = []
            }
            addLauncherClickedMetric() {
                this.whenReady(() => {
                    const {
                        user: e,
                        app: {
                            isMessengerOpen: t
                        }
                    } = this.store.getState(), n = {
                        is_messenger_open: t,
                        is_custom_launcher: !0
                    };
                    j.j.buildAndAddMetric(e, "clicked", "launcher", "in_app", "", n)
                })
            }
            handleUserCreateOrUpdate(e, t) {
                if (this.shouldSendTrackingCookies() && this.createOrUpdateUser(t, "apiUpdate"), e.clientsideRulesetConditions && this.clientMatchRunner.updateClientMatches(e.clientsideRulesetConditions), e.timeTillContentRefreshInSeconds && (this.setContentRefreshTimeoutReference = setTimeout(() => {
                        gi("Content (i.e. bots) are potentially out of sync and should be re-matched"), this.createOrUpdateUser(t, "contentRefresh", !0)
                    }, 1e3 * e.timeTillContentRefreshInSeconds)), this.isReady) return e;
                if (this.executeReadyCallbacks(), this.isReady = !0, Object(ui.a)() && this.window.parent.postMessage("messenger_session_ready", "*"), !Object(l.b)()) {
                    const e = this.store.getState(),
                        t = Object(d.a)(e),
                        n = Object(N.j)();
                    j.j.buildAndAddHcMetric("createOrUpdateUser", {
                        messengerIsVisible: Object(l.i)(t),
                        isLauncherEnabled: t,
                        hasDisplayNoneSet: n
                    }), Object(l.m)(!0)
                }
                return e
            }
            shouldSendTrackingCookies() {
                const e = this.store.getState().app;
                return !this.hasScrapedCookies && (e.features.hubspotInstalled || e.features.marketoEnrichmentInstalled)
            }
            startClientMatchRunner() {
                this.clientMatchRunner.start()
            }
            stopClientMatchRunner() {
                this.clientMatchRunner.stop()
            }
            createMessengerChangeSubscriber() {
                this.addStoreSubscriber(mi(this.store, e => e.app.isMessengerOpen, this.handleMessengerChange))
            }
            createUnreadConversationCountChangeSubscriber() {
                this.addStoreSubscriber(mi(this.store, Lr.b, this.handleUnreadConversationCountChange))
            }
            addStoreSubscriber(e) {
                this.storeSubscribers.push(this.store.subscribe(e))
            }
            removeStoreSubscribers() {
                this.storeSubscribers.forEach(e => !!e && e())
            }
        },
        Si = n(238),
        vi = n.n(Si),
        yi = n(221),
        Ci = n(56),
        Ii = n(222),
        Ti = n(223),
        wi = n(87);
    const Ai = ({
        isLauncherEnabled: e,
        customization: {
            verticalPadding: t
        }
    }) => e ? t + 60 + 20 : t;
    var Ri = e => `\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ${e.customization.alignment}: 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ${e.customization.alignment},\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    bottom: ${(({isMobile:e,customization:t})=>e?20:t.verticalPadding)(e)}px;\n    ${e.customization.alignment}: ${(({isMobile:e,customization:t})=>e?20:t.horizontalPadding)(e)}px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: ${e.colors.primaryColor};\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    animation: intercom-lightweight-app-launcher 250ms ease;\n  }\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n    ${e.accessibility.tabNavigation?`box-shadow: inset 0 0 0 5px ${(({accessibility:e})=>wi.a[e.accessibilityTheme])(e)};`:""}\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 60px;\n    height: 60px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ${e.isMessengerOpen?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: 28px;\n    height: 32px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ${e.isMessengerOpen?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: 56px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: 36px;\n    max-width: 36px;\n    ${e.isMessengerOpen?"\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      ":"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ${e.isMessengerOpen?"\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      ":"\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      "}\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg {\n    width: 16px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ${e.colors.buttonTextColor};\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms ease-out;\n    ${e.isMobile?"\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      ":`\n        width: 376px;\n        height: calc(100% - ${20+Ai(e)}px);\n        max-height: 704px;\n        min-height: 250px;\n        ${e.customization.alignment}: ${e.customization.horizontalPadding}px;\n        bottom: ${Ai(e)}px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n        border-radius: 8px;\n      `}\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: 75px;\n    background: linear-gradient(\n      135deg,\n      ${e.colors.gradientStartColor} 0%,\n      ${e.colors.gradientEndColor} 100%\n    );\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n`,
        ji = n(34);
    const Ni = (e, t) => {
            const {
                onLauncherClick: n,
                launcherLogoUrl: r,
                allowSelfServeIcon: i
            } = t, o = Di(t), s = e.document.createElement("div");
            s.addEventListener("click", n, !0), s.addEventListener("keydown", o, !0), s.setAttribute("class", "intercom-lightweight-app-launcher intercom-launcher"), s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"), s.setAttribute("aria-label", Object(ji.e)("open_intercom_messenger"));
            const a = e.document.createElement("div");
            if (a.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open"), r) {
                const t = e.document.createElement("img");
                t.setAttribute("src", r), t.setAttribute("alt", ""), t.setAttribute("class", "intercom-lightweight-app-launcher-custom-icon-open"), a.appendChild(t)
            } else i ? (a.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve"), a.innerHTML = '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n') : a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>';
            s.appendChild(a);
            const c = e.document.createElement("div");
            return c.setAttribute("class", "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize"), c.innerHTML = '<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"/></svg>', s.appendChild(c), s
        },
        Mi = (e, t, n, r, i, o) => s => {
            if (o.textContent = Ri(s), t.locale !== s.locale && Object(ji.d)(s.locale), !t.isAppActive && s.isAppActive ? e.document.body.appendChild(n) : t.isAppActive && !s.isAppActive && e.document.body.removeChild(n), !t.isLauncherEnabled && s.isLauncherEnabled) {
                const t = Ni(e, s);
                n.appendChild(t)
            } else if (t.isLauncherEnabled && !s.isLauncherEnabled) {
                const t = (e => e.document.querySelector(".intercom-lightweight-app-launcher"))(e);
                t && n.contains(t) && n.removeChild(t)
            }!t.isMessengerOpen && s.isMessengerOpen ? (n.appendChild(r), n.appendChild(i)) : t.isMessengerOpen && !s.isMessengerOpen && (n.removeChild(r), n.removeChild(i)), t = s
        },
        Pi = (e, t) => () => {
            const {
                body: n
            } = e.document;
            t && n.contains(t) && n.removeChild(t)
        },
        Di = ({
            onLauncherKeypress: e
        }) => ({
            keyCode: t
        }) => {
            t !== Zr.a.ENTER && t !== Zr.a.SPACE || e()
        },
        Ui = ({
            onTabKeyDown: e
        }) => ({
            keyCode: t
        }) => {
            t === Zr.a.TAB && e()
        },
        Li = ({
            onClick: e
        }) => () => {
            e()
        };
    var ki = (e, t) => {
            const {
                isAppActive: n,
                isLauncherEnabled: r,
                isMessengerOpen: i,
                locale: o
            } = t;
            void 0 !== o && Object(ji.d)(o);
            const s = Ui(t),
                a = Li(t);
            e.document.addEventListener("keydown", s, !0), e.document.addEventListener("click", a, !1);
            const c = e.document.createElement("div");
            if (c.setAttribute("class", "intercom-lightweight-app"), c.setAttribute("aria-live", "polite"), n && e.document.body.appendChild(c), r) {
                const n = Ni(e, t);
                c.appendChild(n)
            }
            const u = e.document.createElement("div");
            u.setAttribute("class", "intercom-lightweight-app-messenger intercom-messenger");
            const d = e.document.createElement("div");
            d.setAttribute("class", "intercom-lightweight-app-messenger-header"), u.appendChild(d);
            const l = e.document.createElement("div");
            l.setAttribute("class", "intercom-lightweight-app-gradient"), i && (c.appendChild(u), c.appendChild(l));
            const p = e.document.createElement("style");
            p.setAttribute("id", "intercom-lightweight-app-style"), p.setAttribute("type", "text/css");
            const f = e.document.createTextNode(Ri(t));
            return p.appendChild(f), c.appendChild(p), {
                updateLightweightApp: Mi(e, t, c, u, l, f),
                removeLightweightApp: Pi(e, c)
            }
        },
        xi = n(224),
        Gi = n(225);
    const Vi = e => ({
        type: "SET_LIGHTWEIGHT_APP_ACTIVE",
        isActive: e
    });
    var Fi = n(68);

    function Bi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Hi(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Bi(n, !0).forEach((function(t) {
                $i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bi(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function $i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Wi = Object(g.createStructuredSelector)({
            isAppActive: xi.a,
            isLauncherEnabled: d.a,
            isMessengerOpen: yi.a,
            customization: Ci.b,
            accessibility: Ii.a,
            colors: Ti.a,
            launcherLogoUrl: i.j,
            allowSelfServeIcon: i.c,
            locale: Gi.a
        }),
        zi = e => {
            Object(j.e)("clicked", "launcher", "in_app", "", {
                is_messenger_open: !1,
                is_custom_launcher: !1,
                is_borderless_open: !1
            }), e.dispatch(Object(Pr.m)())
        };
    var Qi = (e, t) => {
            const n = ((e, t) => ({
                    isMobile: Object(o.b)(),
                    onLauncherClick: () => {
                        t.dispatch(Object(Fi.b)(!1)), zi(t)
                    },
                    onLauncherKeypress: () => {
                        zi(t)
                    },
                    onClick: () => {
                        t.dispatch(Object(Fi.b)(!1))
                    },
                    onTabKeyDown: () => {
                        t.dispatch(Object(Fi.b)(!0))
                    }
                }))(0, t),
                r = Wi(t.getState()),
                i = Hi({}, r, {}, n),
                {
                    updateLightweightApp: s,
                    removeLightweightApp: a
                } = ki(e, i);
            t.dispatch(Vi(!0));
            const c = t.subscribe(() => {
                const e = Wi(t.getState());
                if (e === r) return;
                const i = Hi({}, e, {}, n);
                s(i)
            });
            return () => {
                c(), a(e), t.dispatch(Vi(!1))
            }
        },
        qi = n(162);
    const Yi = Object(g.createSelector)([e => e.app.isMessengerOpen], e => e),
        Ji = Object(g.createSelector)([w.a], e => e.length > 0),
        Ki = Object(g.createSelector)([A.a], e => e.length > 0),
        Xi = Object(g.createSelector)([qi.a], e => e.length > 0),
        Zi = Object(g.createSelector)([e => e.install.isInstallModeOpen], e => e),
        eo = Object(g.createSelector)([e => e.banners], e => e.length > 0),
        to = Object(g.createSelector)([Lr.b], e => e > 0),
        no = Object(g.createSelector)([e => e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening], e => e),
        ro = Object(g.createSelector)([e => e.tour.activeTour], e => null != e);
    var io = Object(g.createSelector)([Yi, Ji, Ki, Xi, Zi, eo, to, no, ro], (e, t, n, r, i, o, s, a, c) => Boolean(e || t || n || r || i || o || s || a || c));
    const oo = e => new Promise(t => {
            const n = e.subscribe(() => {
                io(e.getState()) && (n(), t())
            })
        }),
        so = async (e = 3) => {
            try {
                const t = Date.now(),
                    r = await vi()(async () => await Promise.all([n.e(48), n.e(0)]).then(n.bind(null, 963)), {
                        retries: e
                    }),
                    i = Date.now();
                return Object(j.f)("load_app_bundle_duration", i - t), r.default
            } catch (e) {
                throw Object(j.c)("load_app_bundle_failed"), e
            }
        },
        ao = async e => {
            try {
                const n = e.getState(),
                    {
                        launcherLogoUrl: r
                    } = n.app;
                if (!r) return;
                await (t = r, new Promise((e, n) => {
                    const r = new Image;
                    r.addEventListener("load", () => e(r)), r.addEventListener("error", () => n(r)), r.src = t
                }))
            } catch (e) {
                Object(j.c)("load_launcher_image_failed")
            }
            var t
        };
    var co = async (e, t) => {
        await ao(t);
        const n = Qi(e, t);
        let r, i = !0;
        return Promise.race([new Promise(e => {
            Object(mn.a)() && e()
        }), oo(t)]).then(async () => {
            if (!i) return;
            const [, o] = await Promise.all([(s = 250, new Promise(e => {
                setTimeout(e, s)
            })), so()]);
            var s;
            r = await o(e, t), n()
        }), () => {
            i && (r ? r() : n(), i = !1)
        }
    };
    var uo = class app_App {
        constructor(e) {
            var t, n, r;
            r = e => {
                this.session.destroy(e), this.session = new Ei(this.window), this.renderApp && this.renderApp.then(e => e()), this.renderApp = void 0
            }, (n = "destroySession") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, this.window = e, this.session = new Ei(this.window, null, this.destroySession)
        }
        createOrUpdateUser(e, t) {
            const n = this.session.createOrUpdateUser(e, t);
            return this.renderApp || (this.renderApp = co(this.window, this.session.store)), n
        }
        openOnBoot() {
            this.session.openOnBoot()
        }
        createCustomizationOverride(e) {
            return this.session.createCustomizationOverride(e)
        }
        openMessenger() {
            this.session.openMessenger()
        }
        openMessengerFromAPI() {
            this.session.openMessenger();
            const {
                user: e
            } = this.session.store.getState();
            Object(j.h)(e, "opened", "messenger", "in_app", "from_api")
        }
        closeMessenger() {
            this.session.closeMessenger()
        }
        closeMessengerFromAPI() {
            this.session.closeMessenger();
            const {
                user: e
            } = this.session.store.getState();
            Object(j.h)(e, "closed", "messenger", "messenger", "from_api")
        }
        showConversations() {
            this.session.showConversations()
        }
        showNewConversation(e) {
            this.session.showNewConversation(e)
        }
        startTour(e) {
            const t = parseInt(e, 10);
            if (isNaN(t)) return void Object(gn.a)("Invalid tourId passed to startTour. tourId must be a number");
            this.session.startTour(t);
            const {
                user: n
            } = this.session.store.getState();
            Object(j.h)(n, "requested", "messenger", "tour", "from_api", {
                tour_id: t
            })
        }
        createEvent(e, t) {
            this.session.createEvent(e, t)
        }
        onMessengerOpen(e) {
            this.session.onMessengerOpen(e)
        }
        onMessengerClose(e) {
            this.session.onMessengerClose(e)
        }
        onUnreadConversationCountChange(e) {
            this.session.onUnreadConversationCountChange(e)
        }
        getArticleReaction(e, t, n) {
            this.session.getArticleReaction(e, t, n)
        }
        createArticleReaction(e, t, n) {
            this.session.createArticleReaction(e, t, n)
        }
        previewInboundCustomBot(e) {
            this.session.previewInboundCustomBot(e)
        }
        previewOutboundCustomBot(e) {
            this.session.previewOutboundCustomBot(e)
        }
        createMetric(e, t) {
            this.session.createMetric(e, t)
        }
        getVisitorId() {
            return this.session.getVisitorId()
        }
        enterTourPreviewMode(e) {
            return this.session.enterTourPreviewMode(e)
        }
        exitTourPreviewMode() {
            return this.session.exitTourPreviewMode()
        }
        trigger(e) {
            if (this.session.isReady) return this.session.trigger(e);
            Object(gn.a)("Intercom is not ready. Aborting MessengerTrigger request")
        }
    };

    function lo(e) {
        return (...t) => {
            const n = {
                    boot(t) {
                        e.createCustomizationOverride(t), e.createOrUpdateUser(t, "apiBoot"), e.openOnBoot()
                    },
                    update(t) {
                        e.createCustomizationOverride(t), e.createOrUpdateUser(t, "apiUpdate")
                    },
                    shutdown(t = !0) {
                        e.destroySession(t)
                    },
                    show() {
                        e.openMessengerFromAPI()
                    },
                    showMessages() {
                        e.showConversations()
                    },
                    showNewMessage(t) {
                        e.showNewConversation(t)
                    },
                    startTour(t) {
                        e.startTour(t)
                    },
                    hide() {
                        e.closeMessengerFromAPI()
                    },
                    trackEvent(t, n) {
                        e.createEvent(t, n)
                    },
                    onShow(t) {
                        e.onMessengerOpen(t)
                    },
                    onHide(t) {
                        e.onMessengerClose(t)
                    },
                    onUnreadCountChange(t) {
                        e.onUnreadConversationCountChange(t)
                    },
                    trigger(t) {
                        e.trigger(t)
                    },
                    getVisitorId: () => e.getVisitorId(),
                    version: () => "a3c7e8e04c74317727238573e37965398673631f",
                    "private:getArticleReaction": (t, n, r) => {
                        e.getArticleReaction(t, n, r)
                    },
                    "private:createMetric": (t, n) => {
                        e.createMetric(t, n)
                    },
                    "private:createArticleReaction": (t, n, r) => {
                        e.createArticleReaction(t, n, r)
                    },
                    "private:enterTourPreviewMode": t => {
                        e.enterTourPreviewMode(t)
                    },
                    "private:exitTourPreviewMode": () => {
                        e.exitTourPreviewMode()
                    },
                    "private:previewInboundCustomBot": t => {
                        e.previewInboundCustomBot(t)
                    },
                    "private:previewOutboundCustomBot": t => {
                        e.previewOutboundCustomBot(t)
                    }
                },
                r = t[0];
            if (r && n[r]) return n[r](...t.slice(1))
        }
    }

    function po(e, t) {
        t.Intercom = e, t.Intercom.booted = !0
    }

    function fo(e) {
        const t = function(e) {
            return e.Intercom
        }(e);
        return t && t.q || []
    }

    function ho(e) {
        return fo(e).some(e => "boot" === e[0] || "shutdown" === e[0])
    }

    function bo(e, t) {
        const n = fo(t);
        for (; n.length;) e(...n.shift())
    }
    var _o = n(66),
        go = n.n(_o);
    const mo = n(151);
    var Oo = n(22),
        Eo = n(12),
        So = n(89),
        vo = n(21),
        yo = n(90),
        Co = n(51);
    if (Object(mn.a)()) {
        const e = JSON.parse(Object(Co.a)(window.location.href).window);
        Object(vo.h)(e), Object(yo.a)()
    } else Object(vo.h)(window.parent);
    Object(r.a)(window),
        function(e) {
            if (void 0 !== e) try {
                const t = new e.CustomEvent("test", {
                    cancelable: !0
                });
                if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
            } catch (t) {
                const n = function(e, t) {
                    (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable;
                    const n = document.createEvent("CustomEvent");
                    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
                    const r = n.preventDefault;
                    return n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                n.prototype = e.Event.prototype, e.CustomEvent = n
            }
        }(window), Object(mn.a)() || (window.requestAnimationFrame = window.parent.requestAnimationFrame || window.requestAnimationFrame), Object(mn.a)();
    const Io = Object(mn.a)() ? window : parent;
    Object(Ln.a)(window);
    const To = new uo(Io);
    Object(Ln.b)(To.session.store);
    const wo = lo(To),
        Ao = ho(Io);
    bo(wo, Io), po(wo, Io), Ao || wo("boot"), new class intersection_Intersection {
        constructor(e) {
            var t, n, r;
            r = ["http://intercom.test", "http://app.intercom.test", "https://app.intercom.com", "https://app.intercom.io", "https://intercomrades.intercom.io", "https://intercomrades.intercom.com"], (n = "intercomDomains") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, this.window = e, this.setupIntersection()
        }
        setupIntersection() {
            this.openerExists() && (this.modeExists() ? this.injectIntersection() : (this.setupMessageListener(), this.sendMessageToOpener({
                type: "intercom-snippet__ready"
            })))
        }
        sendMessageToOpener(e) {
            this.window.opener.postMessage(e, "*")
        }
        openerExists() {
            return !!this.window.opener
        }
        modeExists() {
            return !!ue.b.get("intercom-snippet__intersection-mode")
        }
        setupMessageListener() {
            this.window.addEventListener("message", this.bootIntersection.bind(this))
        }
        getMode() {
            return ue.b.get("intercom-snippet__intersection-mode")
        }
        getAppId() {
            return ue.b.get("intercom-snippet__intersection-app-id")
        }
        bootIntersection(e) {
            -1 !== this.intercomDomains.indexOf(e.origin) && "intercom-snippet__boot-intersection" === e.data.type && (this.removeMessageListener(), this.saveOpenerOrigin(e.origin), this.injectIntersection(e.data.mode, e.data.appId))
        }
        removeMessageListener() {
            this.window.removeEventListener("message", this.bootIntersection.bind(this))
        }
        saveOpenerOrigin(e) {
            ue.b.set("intercom-snippet__intersection-opener-origin", e)
        }
        injectIntersection(e, t) {
            this.window.document.getElementById("intersection-container") || (this.injectIntersectionFrame(), this.injectEmberApp(e, t))
        }
        injectIntersectionFrame() {
            const e = this.window.document.createElement("div"),
                t = this.window.document.createElement("iframe");
            e.id = "intersection-container", t.id = "intersection-frame", t.frameBorder = 0, e.appendChild(t), this.window.document.body.insertAdjacentElement("beforeend", e)
        }
        createScriptTag(e) {
            const t = document.createElement("script");
            return t.type = "text/javascript", t.charset = "utf-8", t.src = e, t
        }
        injectFrameTemplate(e, t = this.getMode(), n = this.getAppId()) {
            const r = go()(t),
                i = go()(n);
            e.open(), e.write(`\n    <!doctype html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=${r}>\n        <meta name="intersection-appId" content=${i}>\n      </head>\n      <body></body>\n    </html>\n    `), e.close()
        }
        injectIntersectionScripts(e) {
            const t = this.createScriptTag(mo.intersection_js),
                n = this.createScriptTag(mo.intersection_styles);
            e.contentWindow.document.head.appendChild(t), e.contentWindow.document.head.appendChild(n)
        }
        injectEmberApp(e, t) {
            const n = this.window.document.getElementById("intersection-frame");
            this.injectFrameTemplate(n.contentDocument, e, t), this.injectIntersectionScripts(n)
        }
    }(Io), Object(mn.a)() && (window.addEventListener("message", Object(Oo.b)({
        "intercom:boot": ({
            settings: e
        }) => {
            To.createOrUpdateUser(e)
        },
        "intercom:window-resize": ({
            updates: e
        }) => {
            Object(vo.i)(e)
        },
        "intercom:api-call": ({
            args: e
        }) => {
            wo(...e)
        },
        "intercom:ready-for-boot": ({
            cookie: e
        }) => {
            Object(So.b)(e), Object(Oo.i)()
        }
    })), Object(Eo.a)("intercom:prepare-for-boot"))
}]);