(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "2A6Q": function(e, t, s) {
            "use strict";
            var r = s("q1tI"),
                a = s("pqiZ"),
                n = s("8fuX"),
                i = s("wldR");
            class o extends i.a {
                static renderDivider() {
                    return r.createElement(a.a, {
                        size: 37
                    })
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        children: t,
                        controlRow: s
                    } = this.props, a = () => e.isMobile ? 18 : 60, i = () => e.isMobile ? 18 : 36;
                    return r.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: this.theme.contentBackground
                        }
                    }, r.createElement(n.b, {
                        type: n.a.All,
                        style: {
                            flexGrow: 1,
                            WebkitOverflowScrolling: "touch",
                            transform: "translateZ(0)",
                            paddingLeft: a(),
                            paddingRight: a(),
                            paddingTop: i(),
                            paddingBottom: i()
                        }
                    }, t), s && r.createElement("div", {
                        style: {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingLeft: a(),
                            paddingRight: a(),
                            paddingTop: 16,
                            paddingBottom: 16,
                            boxShadow: "0 -1px 0 ".concat(this.theme.regularDividerColor)
                        }
                    }, s))
                }
            }
            t.a = o
        },
        "3wHm": function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("LvDl"),
                a = s("q1tI"),
                n = s("vDOa"),
                i = s("5/h/"),
                o = s("Mr7a"),
                l = s("sdlW"),
                d = s("mjq6"),
                c = s("gyBu"),
                m = s("tvfY"),
                p = s("wldR"),
                u = s("pqiZ"),
                g = s("H4VD"),
                h = s("wpmu"),
                b = s("g4rC"),
                f = s("i3uR"),
                y = s("WgIs"),
                S = s("gbGO"),
                w = s("sbdd"),
                M = s("2Y+N"),
                v = s("zTdN"),
                P = s("VBxf"),
                E = s("bkwR"),
                O = s("nM47"),
                C = s("/YYm"),
                k = s("MBf9"),
                j = s("LeVO"),
                T = s("ZQ9l"),
                I = s("y6Dp"),
                F = s("hvW1"),
                B = s("IULH"),
                L = s("d9nj"),
                x = s("mF3+"),
                D = s("Cycz"),
                R = s("r8MX"),
                A = s("J9+s"),
                G = s("HRSx");

            function U(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(s), !0).forEach((function(t) {
                        V(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : U(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function V(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const q = Object(A.defineMessages)({
                removingGuest: {
                    id: "guestPagesPopup.removeGuest.updatingMessage",
                    defaultMessage: "Updating…"
                },
                addingMember: {
                    id: "guestPagesPopup.addMemberPermission.updatingMessage",
                    defaultMessage: "Updating…"
                }
            });
            class _ extends p.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        buttonPopupStore: b.a
                    }, this.renderPopup = () => {
                        const {
                            device: e
                        } = this.environment, {
                            store: t,
                            guest: s
                        } = this.props, r = t.canAdmin(), n = s.guestPageIds.map(e => {
                            const s = h.a.createChildStore(t, {
                                table: G.b,
                                id: e
                            });
                            return {
                                key: e,
                                render: e => a.createElement(w.a, Object.assign({}, e, {
                                    store: s,
                                    placeholder: a.createElement(A.FormattedMessage, {
                                        id: "guestPagesPopup.privatePagePlaceholder",
                                        defaultMessage: "Private page"
                                    })
                                })),
                                action: () => {
                                    const s = h.a.createChildStore(t, {
                                            table: G.b,
                                            id: e
                                        }),
                                        r = Object(C.a)({
                                            store: s,
                                            fullyQualified: !1
                                        });
                                    g.navigate({
                                        environment: this.environment,
                                        url: r,
                                        metaClick: !0
                                    })
                                }
                            }
                        });
                        let i, o;
                        return i = e.isMobile ? {
                            menuType: S.b.MenuType.ActionSheet
                        } : {
                            menuType: S.b.MenuType.Popup,
                            width: 300
                        }, Object(D.L)(this.environment) && (o = a.createElement(j.a, {
                            renderTooltip: () => this.isSubscribed() ? a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.addMemberPermissionButton.tooltip",
                                defaultMessage: "This guest will become a member of this workspace."
                            }) : a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.addAdminPermissionButton.tooltip",
                                defaultMessage: "This guest will become an admin of this workspace."
                            }),
                            render: e => a.createElement(B.a, Object.assign({
                                isLarge: !0,
                                onClick: this.handleConvertToMemberClick
                            }, e), this.isSubscribed() ? a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.addMemberPermissionButton.label",
                                defaultMessage: "Convert to member"
                            }) : a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.addAdminPermissionButton.label",
                                defaultMessage: "Convert to admin"
                            }))
                        })), a.createElement(S.b, Object.assign({}, i), r && a.createElement(T.a, {
                            title: a.createElement("div", {
                                style: {
                                    paddingTop: 12,
                                    paddingBottom: 8,
                                    display: "flex",
                                    alignItems: "flex-start"
                                }
                            }, o, a.createElement(j.a, {
                                renderTooltip: () => a.createElement(A.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestButton.tooltip",
                                    defaultMessage: "This guest will be removed from all pages in this Workspace."
                                }),
                                render: e => a.createElement(B.a, Object.assign({
                                    isLarge: !0,
                                    isRed: !0,
                                    style: {
                                        marginLeft: o ? 8 : 0
                                    },
                                    onClick: this.handleRemoveClick
                                }, e), a.createElement(A.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestButton.label",
                                    defaultMessage: "Remove"
                                }))
                            }))
                        }), r && a.createElement(v.a, {
                            title: a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.guestAccessiblePagesCaption",
                                defaultMessage: "This guest can access these pages"
                            })
                        }), a.createElement(y.a, {
                            type: y.a.Type.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "pages",
                                render: e => a.createElement(M.a, Object.assign({}, e)),
                                items: n
                            }]
                        }))
                    }, this.handleRemoveClick = () => {
                        P.showDialog({
                            showCancel: !0,
                            keepFocus: !1,
                            message: a.createElement(A.FormattedMessage, {
                                id: "guestPagesPopup.removeGuestModal.confirmationMessage",
                                defaultMessage: "Are you sure you want to remove this person? They will lose access to all shared pages."
                            }),
                            items: [{
                                label: a.createElement(A.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestModal.removeButton.label",
                                    defaultMessage: "Remove"
                                }),
                                color: "red",
                                onAccept: async () => {
                                    const {
                                        guest: e,
                                        store: t
                                    } = this.props;
                                    this.stores.buttonPopupStore.setState(N({}, this.stores.buttonPopupStore.state, {
                                        open: !1
                                    })), F.b({
                                        message: q.removingGuest
                                    }), "success" === (await E.removeUsersFromSpace(this.environment, {
                                        userIds: [e.userId],
                                        spaceId: t.id,
                                        removePagePermissions: !0,
                                        revokeUserTokens: !1
                                    })).type && (await O.e(this.environment), I.Od(this.environment)), F.a()
                                }
                            }]
                        })
                    }, this.handleConvertToMemberClick = async () => {
                        const e = k.create(this.environment),
                            {
                                store: t,
                                guest: s,
                                isSubscribed: r
                            } = this.props,
                            a = o.f({
                                environment: this.environment,
                                store: t,
                                permissionItems: [{
                                    type: "user_permission",
                                    role: r ? "read_and_write" : "editor",
                                    user_id: s.userId
                                }],
                                transaction: e
                            });
                        k.commit({
                            environment: this.environment,
                            transaction: e
                        }), this.stores.buttonPopupStore.setState(N({}, this.stores.buttonPopupStore.state, {
                            open: !1
                        })), F.b({
                            message: q.addingMember
                        });
                        try {
                            await a, await O.e(this.environment), I.ab(this.environment, {
                                member_user_id: s.userId
                            })
                        } finally {
                            F.a()
                        }
                    }
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        buttonPopupStore: t
                    } = this.stores, {
                        store: s,
                        guest: r
                    } = this.props;
                    return r.guestPageIds.map(e => {
                        h.a.createChildStore(s, {
                            table: G.b,
                            id: e
                        }).getValue()
                    }), a.createElement(f.a, {
                        popupType: e.isMobile ? f.a.PopupType.SlideUp : f.a.PopupType.Popup,
                        renderOrigin: e => a.createElement(L.a, Object.assign({}, e), a.createElement(A.FormattedMessage, {
                            id: "guestPagesButton.label",
                            defaultMessage: "{numberOfAccessiblePages, plural, one {{numberOfAccessiblePages} page} other {{numberOfAccessiblePages} pages}}",
                            values: {
                                numberOfAccessiblePages: r.guestPageIds.length
                            }
                        }), x.a.chevronDown({
                            width: 10,
                            marginLeft: 4,
                            fill: this.theme.lightIconColor
                        })),
                        buttonPopupStore: t,
                        render: this.renderPopup
                    })
                }
                isSubscribed() {
                    const {
                        data: e
                    } = R.default.state;
                    return Boolean(e && Object(D.D)(e))
                }
            }
            var H = Object(A.injectIntl)(_),
                z = s("yNyh"),
                W = s("yisX"),
                Y = s("2A6Q"),
                Q = s("aEEb"),
                J = s("Sb6f");

            function Z(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(s), !0).forEach((function(t) {
                        K(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Z(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function K(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class $ extends p.a {
                renderComponent() {
                    const {
                        columns: e,
                        rows: t
                    } = this.props;
                    return a.createElement("table", {
                        style: this.getStyle()
                    }, a.createElement("thead", null, a.createElement("tr", {
                        style: $.headerRowStyle
                    }, e.map(e => a.createElement("th", {
                        key: e.key,
                        style: X({}, $.tableHeaderStyle, {}, e.style)
                    }, a.createElement(Q.a, {
                        isSmall: !0
                    }, e.header))))), a.createElement("tbody", null, t.map(t => a.createElement("tr", {
                        key: t.key,
                        style: this.getRowStyle()
                    }, t.columns.map((t, s) => {
                        const r = e[s];
                        return a.createElement("td", {
                            key: r.key,
                            style: $.cellStyle
                        }, t)
                    })))))
                }
                getStyle() {
                    return {
                        width: "100%",
                        fontSize: 13,
                        borderTop: "1px solid ".concat(this.theme.regularDividerColor),
                        borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
                    }
                }
                getRowStyle() {
                    return {
                        width: "100%",
                        borderTop: "1px solid ".concat(this.theme.regularDividerColor)
                    }
                }
            }
            $.cellPaddingTopBottom = 8, $.headerRowStyle = {
                height: 32,
                width: "100%"
            }, $.tableHeaderStyle = {
                fontWeight: J.a.fontWeight.regular,
                textAlign: "left",
                paddingTop: $.cellPaddingTopBottom,
                paddingBottom: $.cellPaddingTopBottom
            }, $.cellStyle = {
                paddingTop: $.cellPaddingTopBottom,
                paddingBottom: $.cellPaddingTopBottom
            };
            var ee = $,
                te = s("R+Q+"),
                se = s("FUUC"),
                re = s("GojS"),
                ae = s("Oy36"),
                ne = s("LEzx");
            class ie extends ne.a {
                getInitialState() {
                    return {
                        userInputValue: "",
                        temporaryUserIds: [],
                        limitUsers: !0
                    }
                }
            }
            var oe = ie,
                le = s("wXH4"),
                de = s("ox2z"),
                ce = s("bTAb"),
                me = s("Pl3d"),
                pe = s("4HCU"),
                ue = s("f0kS"),
                ge = s("W3at"),
                he = s("NOLh"),
                be = s("bFnu"),
                fe = s("x4bP"),
                ye = s("EZe4"),
                Se = s("V9q8"),
                we = s("VyA+"),
                Me = s("meF8"),
                ve = s("CTEM"),
                Pe = s("iICV"),
                Ee = s("Ng05"),
                Oe = s("lCCU"),
                Ce = s("WLsh"),
                ke = s("QcDD"),
                je = s("JMnu"),
                Te = s("8f5p");

            function Ie(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(s), !0).forEach((function(t) {
                        Be(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Ie(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function Be(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class Le extends p.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        spacePermissionGroupStore: oe,
                        actionMenuButtonPopupStore: b.a,
                        addMemberButtonPopupStore: b.a,
                        autocompleteStore: ce.a,
                        mouseStore: be.a
                    }, this.renderUser = e => {
                        const {
                            store: t,
                            group: s,
                            disabled: r
                        } = this.props;
                        return a.createElement("div", {
                            key: e.id,
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, a.createElement(re.a, {
                            userValue: e,
                            style: {
                                paddingRight: 6,
                                minHeight: 34,
                                lineHeight: 1.2,
                                width: "100%"
                            },
                            avatarSize: 24
                        }), !r && a.createElement(L.a, {
                            onClick: async () => {
                                if (await P.confirmUserAction({
                                        message: a.createElement(A.FormattedMessage, {
                                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage",
                                            defaultMessage: "Are you sure you want to remove this member?"
                                        }),
                                        acceptLabel: a.createElement(A.FormattedMessage, {
                                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label",
                                            defaultMessage: "Yes"
                                        })
                                    })) {
                                    const r = (s.user_ids || []).filter(t => t !== e.id),
                                        a = Fe({}, s, {
                                            user_ids: r
                                        });
                                    k.createAndCommit(this.environment, e => {
                                        l.v({
                                            spaceStore: t,
                                            group: a,
                                            transaction: e
                                        })
                                    }), I.zd(this.environment)
                                }
                            }
                        }, a.createElement(A.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label",
                            defaultMessage: "Remove"
                        })))
                    }, this.renderActionMenu = () => {
                        const e = {
                            key: "action_menu",
                            render: e => a.createElement(M.a, Object.assign({}, e)),
                            items: [{
                                key: "rename",
                                render: e => a.createElement(de.a, Object.assign({}, e, {
                                    title: a.createElement(A.FormattedMessage, {
                                        id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem",
                                        defaultMessage: "Rename"
                                    })
                                })),
                                action: this.handleRename
                            }, {
                                key: "delete",
                                render: e => a.createElement(de.a, Object.assign({}, e, {
                                    title: a.createElement(A.FormattedMessage, {
                                        id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem",
                                        defaultMessage: "Delete"
                                    })
                                })),
                                action: this.handleDelete
                            }]
                        };
                        return a.createElement(S.b, {
                            menuType: S.b.MenuType.Popup
                        }, a.createElement(y.a, {
                            type: y.a.Type.Vertical,
                            initialFocus: 0,
                            sections: [e],
                            onAccept: () => {
                                this.stores.actionMenuButtonPopupStore.reset()
                            }
                        }))
                    }, this.renderAddMemberMenu = () => {
                        const {
                            store: e
                        } = this.props, {
                            userInputValue: t,
                            temporaryUserIds: s
                        } = this.stores.spacePermissionGroupStore.state, r = {
                            request: {
                                query: t,
                                temporaryUserIds: this.stores.spacePermissionGroupStore.state.temporaryUserIds
                            },
                            performRequest: async e => {
                                let {
                                    query: t,
                                    temporaryUserIds: s
                                } = e;
                                const {
                                    group: r
                                } = this.props, a = r.user_ids || [];
                                return (await pe.l({
                                    environment: this.environment,
                                    query: t,
                                    membersOnly: !0
                                })).filter(e => a.indexOf(e.id) < 0 && s.indexOf(e.id) < 0).slice(0, 20)
                            },
                            render: this.renderAddMemberResults
                        }, n = s.map(t => {
                            const r = e.getRecordValue({
                                table: i.a,
                                id: t
                            });
                            return a.createElement(je.b, {
                                key: t,
                                userValue: r,
                                format: je.b.Format.Medium,
                                showRemoveButton: !0,
                                onClickRemove: () => {
                                    const e = s.filter(e => e !== t);
                                    this.stores.spacePermissionGroupStore.setState(Fe({}, this.stores.spacePermissionGroupStore.state, {
                                        temporaryUserIds: e
                                    }))
                                },
                                shouldShrink: !0,
                                isSingle: !1
                            })
                        });
                        return a.createElement(S.b, {
                            menuType: S.b.MenuType.Popup,
                            tokenInputHeader: !0,
                            header: a.createElement(ge.a, {
                                focus: !0,
                                disabled: !1,
                                focusAfterAnimation: !0,
                                format: ge.a.Format.Group,
                                tokens: n,
                                placeholder: this.props.intl.formatMessage({
                                    id: "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder",
                                    defaultMessage: "Search for a person…"
                                }),
                                onRemoveLastToken: this.handleTokenInputMenuItemRemoveLastToken,
                                value: t,
                                onChange: this.handleTokenInputMenuItemChange,
                                right: a.createElement(Ee.a, {
                                    isLarge: !0,
                                    onClick: this.handleAddDoneClick
                                }, a.createElement(A.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label",
                                    defaultMessage: "Add"
                                }))
                            })
                        }, a.createElement(me.a, Object.assign({}, r)))
                    }, this.renderAddMemberResults = (e, t) => {
                        const {
                            store: s
                        } = this.props, r = t || [], {
                            temporaryUserIds: n
                        } = this.stores.spacePermissionGroupStore.state, o = r.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        });
                        if (0 === o.length) return a.createElement(M.a, null, a.createElement(v.a, {
                            title: a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage",
                                defaultMessage: "No results"
                            })
                        })); {
                            const e = {
                                key: "user_menu",
                                render: e => a.createElement(M.a, Object.assign({}, e)),
                                items: o.map(e => {
                                    const t = m.a.createChildStore(s, {
                                        table: i.a,
                                        id: e
                                    }).getValue();
                                    return {
                                        key: e,
                                        render: e => a.createElement(ue.a, Object.assign({}, e, {
                                            user: t
                                        })),
                                        action: () => {
                                            const t = [...n, e];
                                            this.stores.spacePermissionGroupStore.setState(Fe({}, this.stores.spacePermissionGroupStore.state, {
                                                temporaryUserIds: t,
                                                userInputValue: ""
                                            }))
                                        }
                                    }
                                })
                            };
                            return a.createElement(y.a, {
                                type: y.a.Type.Vertical,
                                initialFocus: 0,
                                sections: [e]
                            })
                        }
                    }, this.handleMouseEnter = e => {
                        this.stores.mouseStore.setState(Fe({}, this.stores.mouseStore.state, {
                            mouseEntered: !0
                        }))
                    }, this.handleMouseLeave = e => {
                        this.stores.mouseStore.setState(Fe({}, this.stores.mouseStore.state, {
                            mouseEntered: !1
                        }))
                    }, this.handleMouseDown = e => {
                        Object(Se.a)(e.target, e => e && e.classList && e.classList.contains(Le.dragHandleClass)) || Object(ye.c)(e)
                    }, this.handleIconChange = e => {
                        const {
                            store: t,
                            group: s
                        } = this.props, r = Fe({}, s, {
                            icon: e
                        });
                        k.createAndCommit(this.environment, e => {
                            l.v({
                                spaceStore: t,
                                group: r,
                                transaction: e
                            })
                        }), I.Cd(this.environment, {
                            is_emoji: Object(ve.a)(e)
                        })
                    }, this.handleRename = () => {
                        const {
                            group: e,
                            spacePermissionsSettingsStore: t
                        } = this.props;
                        t.setState(Fe({}, t.state, {
                            editingNameGroupId: e.id,
                            groupNameInputValue: e.name || ""
                        })), this.stores.actionMenuButtonPopupStore.setState(Fe({}, this.stores.actionMenuButtonPopupStore.state, {
                            open: !1
                        })), I.Ad(this.environment)
                    }, this.handleDelete = async () => {
                        const {
                            store: e,
                            group: t
                        } = this.props;
                        if (this.stores.actionMenuButtonPopupStore.setState(Fe({}, this.stores.actionMenuButtonPopupStore.state, {
                                open: !1
                            })), await P.confirmUserAction({
                                message: a.createElement(A.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage",
                                    defaultMessage: "Are you sure you want to delete this group? Any pages that are private to this group will be transferred to you."
                                }),
                                acceptLabel: a.createElement(A.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label",
                                    defaultMessage: "Yes"
                                })
                            })) {
                            const s = k.create(this.environment);
                            await l.g({
                                environment: this.environment,
                                spaceStore: e,
                                group: t,
                                transaction: s
                            }), k.commit({
                                environment: this.environment,
                                transaction: s
                            }), I.yd(this.environment)
                        }
                    }, this.handleNameChange = e => {
                        this.props.spacePermissionsSettingsStore.setState(Fe({}, this.props.spacePermissionsSettingsStore.state, {
                            groupNameInputValue: e
                        }))
                    }, this.handleNameCancel = () => {
                        const {
                            spacePermissionsSettingsStore: e
                        } = this.props;
                        e.setState(Fe({}, e.state, {
                            editingNameGroupId: void 0,
                            groupNameInputValue: ""
                        }))
                    }, this.handleNameAccept = () => {
                        const {
                            store: e,
                            group: t,
                            spacePermissionsSettingsStore: s
                        } = this.props, {
                            editingNameGroupId: r,
                            groupNameInputValue: a
                        } = s.state;
                        if (r === t.id) {
                            if (a !== t.name) {
                                const s = Fe({}, t, {
                                    name: a
                                });
                                k.createAndCommit(this.environment, t => {
                                    l.v({
                                        spaceStore: e,
                                        group: s,
                                        transaction: t
                                    })
                                })
                            }
                            s.setState(Fe({}, s.state, {
                                editingNameGroupId: void 0,
                                groupNameInputValue: ""
                            }))
                        }
                    }, this.handleTokenInputMenuItemRemoveLastToken = () => {
                        const {
                            temporaryUserIds: e
                        } = this.stores.spacePermissionGroupStore.state, t = e.slice(0, e.length - 1);
                        this.stores.spacePermissionGroupStore.setState(Fe({}, this.stores.spacePermissionGroupStore.state, {
                            temporaryUserIds: t
                        }))
                    }, this.handleTokenInputMenuItemChange = e => {
                        const t = e.target.value,
                            {
                                spacePermissionGroupStore: s
                            } = this.stores,
                            {
                                extractedEmails: a,
                                newInputValue: n
                            } = Object(Ce.a)(t),
                            {
                                currentSpaceStore: o
                            } = ke.default.state,
                            {
                                data: l
                            } = R.default.state;
                        if (!l || !o) return;
                        const d = Object(D.x)(l).map(e => e.userId),
                            c = r.compact(d.map(e => m.a.createChildStore(o, {
                                table: i.a,
                                id: e
                            }).getValue())).filter(e => a.includes(e.email) && !s.state.temporaryUserIds.includes(e.id));
                        s.setState(Fe({}, s.state, {
                            temporaryUserIds: [...s.state.temporaryUserIds, ...c.map(e => e.id)],
                            userInputValue: n
                        }))
                    }, this.handleAddDoneClick = () => {
                        const {
                            store: e,
                            group: t
                        } = this.props, {
                            temporaryUserIds: s
                        } = this.stores.spacePermissionGroupStore.state, a = t.user_ids || [], n = Fe({}, t, {
                            user_ids: r.union(a, s)
                        });
                        k.createAndCommit(this.environment, t => {
                            l.v({
                                spaceStore: e,
                                group: n,
                                transaction: t
                            })
                        }), this.stores.spacePermissionGroupStore.reset(), this.stores.addMemberButtonPopupStore.setState(Fe({}, this.stores.addMemberButtonPopupStore.state, {
                            open: !1
                        })), I.wd(this.environment, {
                            add_member_count: s.length
                        })
                    }, this.handleAddMemberButtonPopupClose = () => {
                        this.stores.spacePermissionGroupStore.reset()
                    }, this.handleShowMoreClick = () => {
                        this.stores.spacePermissionGroupStore.setState(Fe({}, this.stores.spacePermissionGroupStore.state, {
                            limitUsers: !1
                        }))
                    }
                }
                renderComponent() {
                    const {
                        store: e,
                        group: t,
                        spacePermissionsSettingsStore: s,
                        disabled: n
                    } = this.props, {
                        groupsFilter: o
                    } = s.state, {
                        limitUsers: l
                    } = this.stores.spacePermissionGroupStore.state, c = Te.a({
                        intl: this.props.intl,
                        group: t
                    }), {
                        countRemainingUsers: m,
                        totalNumberMembers: p,
                        limitedUserValues: g
                    } = Te.b({
                        group: t,
                        spaceStore: e,
                        limit: l && !o ? Le.defaultLimit : void 0
                    }), h = r.sortBy(g, e => Object(i.e)(e)), b = o ? Object(d.b)(o, h, e => Object(i.e)(e)) : h, {
                        mouseEntered: y
                    } = this.stores.mouseStore.state, S = y && !Pe.a.state.isKeyboardMode && !n, {
                        editingNameGroupId: w,
                        groupNameInputValue: M
                    } = s.state;
                    return a.createElement("div", {
                        style: {
                            marginBottom: 36,
                            fontSize: 14,
                            width: "100%"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseDown: this.handleMouseDown
                    }, a.createElement("div", {
                        style: {
                            display: "flex"
                        }
                    }, !n && a.createElement(he.a, {
                        isVisible: !0,
                        animationStyle: {
                            opacity: S ? 1 : 0
                        },
                        enterAnimationStyle: {
                            opacity: 0
                        },
                        exitAnimationStyle: {
                            opacity: 0
                        },
                        render: () => a.createElement("div", {
                            style: {
                                marginLeft: -24,
                                marginRight: 4
                            },
                            className: Le.dragHandleClass
                        }, a.createElement(fe.a, {
                            hideClickMessage: !0
                        }))
                    }), n ? a.createElement(ae.a, {
                        disabled: !0,
                        icon: t.icon ? {
                            table: e.table,
                            id: e.id,
                            icon: t.icon
                        } : void 0,
                        size: 22,
                        isEmptyPage: !1,
                        title: c,
                        style: {
                            marginLeft: 3,
                            marginRight: 3
                        }
                    }) : a.createElement(ae.a, {
                        disabled: !1,
                        bucket: "public",
                        icon: t.icon ? {
                            table: e.table,
                            id: e.id,
                            icon: t.icon
                        } : void 0,
                        size: 22,
                        isEmptyPage: !1,
                        title: c,
                        onChange: this.handleIconChange,
                        style: {
                            marginLeft: 3,
                            marginRight: 3
                        }
                    }), w === t.id ? a.createElement(we.a, {
                        capture: !0,
                        onEsc: this.handleNameCancel
                    }, a.createElement(Me.a, {
                        disabled: n,
                        textarea: !1,
                        style: {
                            marginLeft: 4,
                            cursor: "text",
                            fontWeight: J.a.fontWeight.semibold
                        },
                        placeholderStyle: {
                            marginLeft: 4,
                            cursor: "text",
                            color: this.theme.lightTextColor,
                            fontWeight: J.a.fontWeight.semibold
                        },
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder",
                            defaultMessage: "Untitled"
                        }),
                        focus: !0,
                        value: M,
                        onChange: this.handleNameChange,
                        onBlur: this.handleNameAccept,
                        onSubmit: this.handleNameAccept
                    })) : a.createElement(L.a, {
                        isSmall: !0,
                        style: {
                            fontWeight: J.a.fontWeight.semibold,
                            marginLeft: -2,
                            marginTop: -1
                        },
                        onClick: this.handleRename,
                        disabled: n,
                        className: "notranslate"
                    }, c), p > 0 && a.createElement("div", {
                        style: {
                            alignItems: "center",
                            marginLeft: 8,
                            color: this.theme.mediumTextColor
                        },
                        className: "notranslate"
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.groupsTab.userGroup.memberCount",
                        defaultMessage: "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} member} other {{numberOfGroupMembers} members}}",
                        values: {
                            numberOfGroupMembers: p
                        }
                    })), a.createElement("div", {
                        style: {
                            flexGrow: 1
                        }
                    }), !n && a.createElement(f.a, {
                        popupType: le.b.Popup,
                        render: this.renderActionMenu,
                        buttonPopupStore: this.stores.actionMenuButtonPopupStore,
                        renderOrigin: e => a.createElement(Oe.a, Object.assign({
                            icon: x.a.dots
                        }, e))
                    })), a.createElement(u.a, {
                        size: 12
                    }), b.map(this.renderUser), m > 0 && a.createElement("div", null, a.createElement(L.a, {
                        isGray: !0,
                        style: {
                            marginTop: 4
                        },
                        onClick: this.handleShowMoreClick
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.groupsTab.showMoreUsersButton.label",
                        defaultMessage: "{numberOfHiddenUsers, plural, one {Show {numberOfHiddenUsers} more} other {Show {numberOfHiddenUsers} more}}",
                        values: {
                            numberOfHiddenUsers: m
                        }
                    }))), !n && a.createElement(f.a, {
                        popupType: le.b.Popup,
                        render: this.renderAddMemberMenu,
                        buttonPopupStore: this.stores.addMemberButtonPopupStore,
                        onClose: this.handleAddMemberButtonPopupClose,
                        style: {
                            width: 400
                        },
                        renderOrigin: e => a.createElement("div", null, a.createElement(L.a, Object.assign({
                            isGray: !0,
                            icon: x.a.plus,
                            style: {
                                marginTop: 4
                            }
                        }, e), a.createElement(A.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label",
                            defaultMessage: "Add members"
                        })))
                    }))
                }
            }
            Le.dragHandleClass = "drag_handle", Le.defaultLimit = 10;
            var xe = Object(A.injectIntl)(Le),
                De = s("g8hj"),
                Re = s("vJXr"),
                Ae = s("toub"),
                Ge = s("IYZQ"),
                Ue = s("bxQm"),
                Ne = s("sSHh"),
                Ve = s("58VE"),
                qe = s("lEhh"),
                _e = s("aZ00"),
                He = s("wlCD"),
                ze = s("0CAA"),
                We = s("rQb/"),
                Ye = s("L0YQ"),
                Qe = s("VhAz"),
                Je = s("gHFd"),
                Ze = s("qX+M");

            function Xe(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xe(Object(s), !0).forEach((function(t) {
                        $e(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Xe(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function $e(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class et extends p.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        spacePermissionsSettingsStore: c.b
                    }, this.renderSpaceGroup = e => {
                        const {
                            store: t
                        } = this.props, {
                            spacePermissionsSettingsStore: s
                        } = this.stores;
                        return a.createElement(xe, {
                            key: e.id,
                            store: t,
                            group: e,
                            spacePermissionsSettingsStore: s,
                            disabled: !this.canEditGroups()
                        })
                    }, this.handleUpdateClick = () => {
                        const e = Object(A.defineMessages)({
                            updatingPermissions: {
                                id: "spacePermissionsSettings.updatePermissionsMessage",
                                defaultMessage: "Updating…"
                            }
                        });
                        F.b({
                            message: e.updatingPermissions
                        })
                    }, this.handleUpdateComplete = async () => {
                        F.a()
                    }, this.handleTabClick = e => {
                        const t = e;
                        switch (t) {
                            case c.a.Members:
                                I.Dd(this.environment, {
                                    tab: "members"
                                });
                                break;
                            case c.a.Groups:
                                I.Dd(this.environment, {
                                    tab: "groups"
                                });
                                break;
                            case c.a.Guests:
                                I.Dd(this.environment, {
                                    tab: "guests"
                                });
                                break;
                            default:
                                return Object(Qe.e)(t)
                        }
                        this.stores.spacePermissionsSettingsStore.setState(Ke({}, this.stores.spacePermissionsSettingsStore.state, {
                            currentTab: e
                        }))
                    }, this.handleCreateGroupClick = () => {
                        k.createAndCommit(this.environment, e => {
                            const t = l.d({
                                spaceStore: this.props.store,
                                transaction: e
                            });
                            t && this.stores.spacePermissionsSettingsStore.setState(Ke({}, this.stores.spacePermissionsSettingsStore.state, {
                                editingNameGroupId: t.id,
                                groupNameInputValue: ""
                            }))
                        }), I.xd(this.environment)
                    }, this.handleGroupReorder = e => {
                        const t = this.props.store.getValue();
                        if (t) {
                            const s = t.permission_groups || [],
                                a = r.compact(e.map(e => s.find(t => t.id === e)));
                            k.createAndCommit(this.environment, e => {
                                l.w({
                                    spaceStore: this.props.store,
                                    groups: a,
                                    transaction: e
                                })
                            })
                        }
                        I.Bd(this.environment)
                    }, this.handleFilterChange = e => {
                        this.stores.spacePermissionsSettingsStore.setState(Ke({}, this.stores.spacePermissionsSettingsStore.state, {
                            groupsFilter: e.target.value
                        }))
                    }, this.handleMembersShowMoreClick = () => {
                        this.stores.spacePermissionsSettingsStore.setState(Ke({}, this.stores.spacePermissionsSettingsStore.state, {
                            limitMembers: !1
                        }))
                    }, this.handleGuestsShowMoreClick = () => {
                        this.stores.spacePermissionsSettingsStore.setState(Ke({}, this.stores.spacePermissionsSettingsStore.state, {
                            limitGuests: !1
                        }))
                    }, this.handleInviteLinkClick = async () => {
                        const e = !this.getInviteLinkEnabled();
                        I.cc(this.environment, {
                            enabled: e
                        }), k.createAndCommit(this.environment, t => {
                            l.t({
                                transaction: t,
                                spaceStore: this.props.store,
                                inviteLinkEnabled: Boolean(e)
                            })
                        })
                    }, this.handleMemberPermissionRoleChange = async (e, t, s) => {
                        const {
                            store: r
                        } = this.props, a = this.environment.currentUser.id;
                        if (e.userId === a && "none" === t) {
                            await l.l({
                                environment: this.environment,
                                spaceId: r.id,
                                userSettingsStore: s
                            }) && Ae.a.setState(Ke({}, Ae.a.state, {
                                open: !1
                            }))
                        } else this.handleUpdateClick(), "none" === t ? (await E.removeUsersFromSpace(this.environment, {
                            userIds: [e.userId],
                            spaceId: r.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !0
                        }), await O.e(this.environment)) : await k.createAndCommit(this.environment, s => o.f({
                            environment: this.environment,
                            store: r,
                            permissionItems: [{
                                type: "user_permission",
                                role: t,
                                user_id: e.userId
                            }],
                            transaction: s
                        })), await this.handleUpdateComplete()
                    }
                }
                renderComponent() {
                    const {
                        store: e,
                        isMobile: t
                    } = this.props;
                    if (!Re.a.state.online) return this.renderOfflineMessage();
                    const {
                        data: s
                    } = R.default.state;
                    if (!s) return this.renderLoadingSpinner();
                    const o = D.x(s);
                    if (!r.every(o.map(t => m.a.createChildStore(e, {
                            table: i.a,
                            id: t.userId
                        }).isReady()))) return this.renderLoadingSpinner();
                    const l = o.filter(n.c),
                        d = o.filter(n.b),
                        {
                            currentTab: c
                        } = this.stores.spacePermissionsSettingsStore.state;
                    if (t) return a.createElement(a.Fragment, null, this.canAdmin() && a.createElement(M.a, {
                        shouldShowBottomDivider: !0
                    }, this.renderMobileInviteButton(), a.createElement("div", {
                        style: this.mobileMenuItemStyle()
                    }, this.renderInviteLink())), a.createElement(M.a, null, this.renderSpaceMembers(l)));
                    const p = [a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.membersTab.title",
                        defaultMessage: "Members ({numberOfMembers})",
                        values: {
                            numberOfMembers: l.length
                        }
                    }), a.createElement(A.FormattedMessage, {
                        id: "spaceBasicSettings.groupsTab.title",
                        defaultMessage: "Groups"
                    })];
                    return d.length > 0 && p.push(a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.guestsTab.title",
                        defaultMessage: "Guests ({numberOfGuests})",
                        values: {
                            numberOfGuests: d.length
                        }
                    })), a.createElement(Y.a, null, a.createElement(te.a, {
                        tabs: p,
                        selectedIndex: c,
                        onChange: this.handleTabClick,
                        style: {
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: -6,
                            marginBottom: 14
                        },
                        tabStyle: {
                            fontSize: 16
                        }
                    }), this.renderTab(c, l, d))
                }
                renderLoadingSpinner() {
                    return a.createElement(He.a, {
                        style: {
                            margin: "calc(50% - 1em) auto"
                        }
                    })
                }
                renderOfflineMessage() {
                    return a.createElement(Q.a, {
                        isSmall: !0,
                        style: {
                            textAlign: "center"
                        }
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.offlineMessage",
                        defaultMessage: "Please go online to manage members."
                    }))
                }
                renderHelp() {
                    return a.createElement("div", {
                        style: {
                            marginTop: 24,
                            marginBottom: 24
                        }
                    }, a.createElement(Ne.a, {
                        title: a.createElement(A.FormattedMessage, {
                            id: "spacePermissionsSettings.helpButton.caption",
                            defaultMessage: "Learn about adding members to your workspace"
                        }),
                        href: Object(ze.a)("guides.members"),
                        analyticsFrom: "members_settings"
                    }))
                }
                renderTab(e, t, s) {
                    return e === c.a.Members ? a.createElement(a.Fragment, null, this.renderSpaceMembers(t)) : e === c.a.Guests ? a.createElement(a.Fragment, null, this.renderSpaceGuests(s)) : this.renderGroupsTab()
                }
                renderGroupsTab() {
                    const {
                        store: e
                    } = this.props, {
                        groupsFilter: t
                    } = this.stores.spacePermissionsSettingsStore.state, s = e.getValue(), r = this.canUseGroups(), n = this.canEditGroups();
                    if (s) {
                        const e = s.permission_groups || [];
                        return a.createElement("div", null, r ? a.createElement(Q.a, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: {
                                width: "80%"
                            }
                        }, a.createElement(A.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.caption",
                            defaultMessage: "Set up groups to conveniently control page permissions from the share menu."
                        })) : a.createElement(Ye.a, {
                            for: "team",
                            from: "permission_groups",
                            icon: x.a.group,
                            title: a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeTitle",
                                defaultMessage: "Upgrade to create groups"
                            }),
                            caption: a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeCaption",
                                defaultMessage: "Upgrade to the Team Plan to set up groups and control permissions from the share menu."
                            }),
                            learnMoreRoute: "guides.groups"
                        }), a.createElement(u.a, {
                            size: 24,
                            isHidden: !0
                        }), a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, r && a.createElement(j.a, {
                            renderTooltip: () => this.canAdmin() ? a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeMessage",
                                defaultMessage: "Upgrade to Team or Enterprise to use permission groups."
                            }) : a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.adminsOnly",
                                defaultMessage: "Only admins can add a permission group."
                            }),
                            render: e => a.createElement(Ee.a, Object.assign({
                                isLarge: !0,
                                onClick: this.handleCreateGroupClick,
                                disabled: !n
                            }, n ? void 0 : e), a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.createGroupButton.label",
                                defaultMessage: "Create a group"
                            }))
                        }), e.length > 0 && a.createElement(z.b, {
                            placeholder: this.props.intl.formatMessage({
                                id: "spacePermissionsSettings.groupsTab.filterGroupsInput.placeholder",
                                defaultMessage: "Filter by email or name…"
                            }),
                            left: x.a.searchThick(this.getSearchIconStyle()),
                            showClearButton: !0,
                            format: z.b.Format.Small,
                            value: t,
                            style: Ke({}, et.filterStyle, {
                                marginRight: 0
                            }),
                            onChange: this.handleFilterChange
                        })), e.length > 0 && a.createElement(u.a, {
                            size: 24,
                            style: {
                                marginBottom: 24
                            }
                        }), n ? a.createElement(De.b, {
                            direction: De.a.Vertical,
                            keys: e.map(e => e.id),
                            renderKey: (t, s) => this.renderSpaceGroup(e[s]),
                            isFullWidth: !0,
                            onDrop: this.handleGroupReorder
                        }) : a.createElement("div", null, e.map(this.renderSpaceGroup)))
                    }
                }
                renderSpaceMembers(e) {
                    return this.props.isMobile ? this.renderMobileMemberList(e) : a.createElement("div", null, !this.shouldRenderUpsell() && this.renderHelp(), this.shouldRenderUpsell() && this.renderUpsell(), this.renderInviteLink(), this.renderDesktopMemberList(e))
                }
                renderInviteLink() {
                    if (!this.canUseInviteLink()) return;
                    const e = this.getInviteLink(),
                        t = this.getInviteLinkEnabled();
                    if (!e) return;
                    const {
                        spacePermissionsSettingsStore: s
                    } = this.stores;
                    return a.createElement("div", null, a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            cursor: "pointer"
                        }
                    }, a.createElement("div", {
                        style: {
                            marginRight: 8,
                            flexGrow: 1
                        }
                    }, a.createElement(We.a, null, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.title",
                        defaultMessage: "Invite link"
                    })), a.createElement(Q.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "85%"
                        }
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionSettings.spaceMembers.inviteLink.caption",
                        defaultMessage: "Share this secret link to invite people to this workspace. Only admins can see this."
                    }), " ", !this.props.isMobile && this.renderInviteLinkReset())), a.createElement("div", {
                        style: {
                            marginTop: 5
                        }
                    }, a.createElement(qe.a, {
                        on: t,
                        onClick: this.handleInviteLinkClick
                    }))), s && t && e && this.renderInviteLinkUrl(e), a.createElement(u.a, {
                        size: 40
                    }))
                }
                renderInviteLinkReset() {
                    var e = this;
                    return a.createElement(A.FormattedMessage, {
                        id: "spacePermissionSettings.spaceMembers.inviteLink.resetLink",
                        defaultMessage: "You can <resetlink>reset the link</resetlink> to generate a new invite link.",
                        values: {
                            resetlink: function() {
                                const {
                                    store: t
                                } = e.props, s = t.getValue();
                                if (s) {
                                    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                    return a.createElement(Ge.a, {
                                        onClick: async () => {
                                            P.showDialog({
                                                message: a.createElement(A.FormattedMessage, {
                                                    id: "spacePermissionsSettings.inviteLinkRefreshModal.description",
                                                    defaultMessage: "Are you sure you want to reset your invite link? Your old one will no longer be able to be used."
                                                }),
                                                showCancel: !0,
                                                keepFocus: !1,
                                                handleCancel: P.dismissDialog,
                                                items: [{
                                                    label: a.createElement(A.FormattedMessage, {
                                                        id: "spacePermissionsSettings.inviteLinkRefreshModal.accept",
                                                        defaultMessage: "Reset"
                                                    }),
                                                    color: "red",
                                                    onAccept: async () => {
                                                        await E.refreshInviteLink(e.environment, {
                                                            spaceId: s.id
                                                        }), O.e(e.environment)
                                                    }
                                                }]
                                            })
                                        }
                                    }, n)
                                }
                            }
                        }
                    })
                }
                renderInviteLinkUrl(e) {
                    const {
                        reactNative: t
                    } = this.environment, s = a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.copyButton",
                        defaultMessage: "Copy link"
                    }), r = () => {
                        _e.c({
                            environment: this.environment,
                            stringValue: e
                        }), I.hf(this.environment)
                    }, n = () => {
                        t && t.share(e), I.hf(this.environment)
                    };
                    return this.props.isMobile ? a.createElement("div", null, a.createElement(z.b, {
                        type: "text",
                        format: z.a.Default,
                        value: e,
                        disabled: !0
                    }), t ? a.createElement(B.a, {
                        onClick: n,
                        style: {
                            marginTop: 10,
                            width: "100%"
                        }
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.shareButton",
                        defaultMessage: "Share link"
                    })) : a.createElement(B.a, {
                        onClick: r,
                        style: {
                            marginTop: 10,
                            width: "100%"
                        }
                    }, s)) : a.createElement("div", null, a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            marginTop: 12
                        }
                    }, a.createElement(z.b, {
                        type: "text",
                        format: z.a.Default,
                        value: e,
                        disabled: !0,
                        style: {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            width: "calc(100% - 90px)",
                            height: 32
                        }
                    }), a.createElement(Ee.a, {
                        onClick: r,
                        style: {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: 90
                        },
                        isLarge: !0
                    }, s)))
                }
                renderMobileMemberList(e) {
                    const {
                        store: t
                    } = this.props;
                    return a.createElement(a.Fragment, null, e.map(e => {
                        const s = m.a.createChildStore(t, {
                            table: i.a,
                            id: e.userId
                        }).getValue();
                        return a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                padding: 10,
                                borderBottom: "1px solid ".concat(this.theme.lightDividerColor),
                                background: this.theme.contentBackground
                            }
                        }, this.renderMember(s), a.createElement("div", {
                            style: {
                                textAlign: "center",
                                marginLeft: "auto"
                            }
                        }, this.renderUserPermission(e)))
                    }))
                }
                renderUpsell() {
                    const {
                        data: e
                    } = R.default.state, t = e && !D.A(this.environment, e) && "subscribed_admin" !== e.type ? "team_free" : "team";
                    return a.createElement(a.Fragment, null, a.createElement(Ye.a, {
                        for: t,
                        from: "members_settings",
                        icon: x.a.membersFilled,
                        title: a.createElement(A.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.title",
                            defaultMessage: "Share with unlimited members"
                        }),
                        caption: a.createElement(A.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.caption",
                            defaultMessage: "Try Notion for Teams for a collaborative workspace, unlimited team members, and advanced permissions."
                        }),
                        learnMoreRoute: "guides.members",
                        upgradeMessage: "team_free" === t ? a.createElement(A.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.alternativeTrialLabel",
                            defaultMessage: "Try it free"
                        }) : a.createElement(A.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.alternativeUpgradeLabel",
                            defaultMessage: "Upgrade to Team Plan"
                        })
                    }), a.createElement(u.a, {
                        size: 48
                    }))
                }
                renderDesktopMemberList(e) {
                    const {
                        spacePermissionsSettingsStore: t
                    } = this.stores, {
                        membersFilter: s,
                        limitMembers: r
                    } = t.state, n = this.getFilteredMembers(e, s), i = r ? n.slice(0, et.defaultLimit) : n;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        style: {
                            marginRight: 8,
                            flexGrow: 1
                        }
                    }, a.createElement(We.a, null, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.members.title",
                        defaultMessage: "Members"
                    }))), this.renderInviteViaDomainCaption(), a.createElement(u.a, {
                        size: 16,
                        isHidden: !0
                    }), a.createElement("div", null, a.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 16
                        }
                    }, this.renderInviteButton(), a.createElement(z.b, {
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.membersTab.filterMembersInput.placeholder",
                            defaultMessage: "Filter by email or name…"
                        }),
                        left: x.a.searchThick(this.getSearchIconStyle()),
                        showClearButton: !0,
                        format: z.b.Format.Small,
                        value: s,
                        style: et.filterStyle,
                        onChange: e => {
                            t.setState(Ke({}, t.state, {
                                membersFilter: e.target.value,
                                limitMembers: !0
                            }))
                        }
                    })), this.renderUserTable(i), n.length > et.defaultLimit && r && a.createElement(Ue.a, {
                        style: et.showMoreButtonStyle,
                        onClick: this.handleMembersShowMoreClick
                    }, a.createElement(A.FormattedMessage, {
                        defaultMessage: "Show {moreMembersCount} more",
                        id: "spacePermissionsSettings.membersTab.showMore.message",
                        values: {
                            moreMembersCount: n.length - et.defaultLimit
                        }
                    }))))
                }
                renderSpaceGuests(e) {
                    const {
                        spacePermissionsSettingsStore: t
                    } = this.stores, {
                        guestsFilter: s,
                        limitGuests: r
                    } = t.state, n = this.getFilteredMembers(e, s), i = r ? n.slice(0, et.defaultLimit) : n;
                    return a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 16
                        }
                    }, a.createElement(z.b, {
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder",
                            defaultMessage: "Filter by email or name…"
                        }),
                        left: x.a.searchThick(this.getSearchIconStyle()),
                        showClearButton: !0,
                        format: z.b.Format.Small,
                        value: s,
                        style: et.filterStyle,
                        onChange: e => {
                            t.setState(Ke({}, t.state, {
                                guestsFilter: e.target.value,
                                limitGuests: !0
                            }))
                        }
                    })), this.renderUserTable(i), n.length > et.defaultLimit && r && a.createElement(Ue.a, {
                        style: et.showMoreButtonStyle,
                        onClick: this.handleGuestsShowMoreClick
                    }, a.createElement(A.FormattedMessage, {
                        id: "spacePermissionsSettings.membersTab.showMoreGuestsButton.label",
                        defaultMessage: "{numberOfHiddenGuests, plural, one {Show {numberOfHiddenGuests} more} other {Show {numberOfHiddenGuests} more}}",
                        values: {
                            numberOfHiddenGuests: n.length - et.defaultLimit
                        }
                    }))))
                }
                renderMobileInviteButton() {
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        style: this.mobileMenuItemStyle()
                    }, this.renderInviteButton({
                        flex: 1
                    })), a.createElement("div", {
                        style: {
                            borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
                        }
                    }))
                }
                renderInviteButton(e) {
                    const {
                        store: t
                    } = this.props;
                    return a.createElement(Je.LazyPermissionsInvite, {
                        disabled: !this.canAdmin(),
                        store: t,
                        onInviteClick: this.handleUpdateClick,
                        onInviteComplete: this.handleUpdateComplete,
                        isSubscribed: this.isSubscribed(),
                        membersOnly: !1,
                        upgradeButtonName: "space_permission_settings",
                        shouldGrow: !1,
                        buttonStyle: e
                    })
                }
                renderInviteViaDomainCaption() {
                    const {
                        store: e
                    } = this.props;
                    return l.j(e) ? a.createElement(Q.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, a.createElement(A.FormattedMessage, {
                        id: "spaceBasicSettings.membersTab.manageMembersWithLinkCaption",
                        defaultMessage: "Manage members here."
                    })) : a.createElement(Q.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, a.createElement(A.FormattedMessage, {
                        id: "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption",
                        defaultMessage: "Manage members here, or <setupdomainlink>set up a domain</setupdomainlink>, so everyone with allowed email domains can join the workspace automatically.",
                        values: {
                            setupdomainlink: function() {
                                for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                                return a.createElement(Ge.a, {
                                    onClick: () => {
                                        Ae.a.setState(Ke({}, Ae.a.state, {
                                            currentTab: "settings"
                                        }))
                                    }
                                }, t)
                            }
                        }
                    }))
                }
                getFilteredMembers(e, t) {
                    const {
                        store: s
                    } = this.props;
                    return t && t.length > 0 ? Object(d.b)(t, e, e => {
                        const t = m.a.createChildStore(s, {
                            table: i.a,
                            id: e.userId
                        }).getValue();
                        return t ? Object(i.e)(t) : ""
                    }) : e
                }
                renderUserTable(e) {
                    const {
                        store: t
                    } = this.props;
                    return a.createElement(ee, {
                        columns: [{
                            key: "user",
                            header: a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.userTable.userColumn.header",
                                defaultMessage: "User"
                            }),
                            style: {
                                width: "75%"
                            }
                        }, {
                            key: "access_level",
                            header: a.createElement(A.FormattedMessage, {
                                id: "spacePermissionsSettings.userTable.accessLevelColumn.header",
                                defaultMessage: "Access level"
                            }),
                            style: {
                                width: "25%",
                                textAlign: "center"
                            }
                        }],
                        rows: e.map(e => {
                            const s = m.a.createChildStore(t, {
                                table: i.a,
                                id: e.userId
                            }).getValue();
                            return {
                                key: e.userId,
                                columns: [this.renderMember(s), a.createElement("div", {
                                    style: {
                                        textAlign: "center"
                                    }
                                }, this.renderUserPermission(e))]
                            }
                        })
                    })
                }
                renderMember(e) {
                    if (e) return a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            maxWidth: 300
                        }
                    }, a.createElement(Ve.a, {
                        userValue: e,
                        size: 28
                    }), a.createElement("div", {
                        style: {
                            minWidth: 0,
                            marginLeft: 6,
                            marginRight: 6
                        }
                    }, a.createElement(Q.a, {
                        className: "notranslate"
                    }, Object(i.d)(e)), a.createElement(Q.a, {
                        isSmall: !0
                    }, e.email)))
                }
                renderUserPermission(e) {
                    return "none" === e.role ? a.createElement(H, {
                        store: this.props.store,
                        guest: e,
                        isSubscribed: this.isSubscribed()
                    }) : this.renderMemberRoleSelect(e)
                }
                renderMemberRoleSelect(e) {
                    const t = this.environment.currentUser.id,
                        {
                            currentUserSettingsStore: s
                        } = ke.default.state;
                    if (s) return a.createElement(W.a, {
                        role: e.role,
                        table: se.a,
                        type: "user_permission",
                        disabled: !this.canAdmin(),
                        isUserPermission: e.userId === t,
                        isSubscribed: this.isSubscribed(),
                        upgradeButtonName: "space_permission_item",
                        onChange: t => this.handleMemberPermissionRoleChange(e, t, s)
                    })
                }
                isSubscribed() {
                    const {
                        data: e
                    } = R.default.state;
                    return Boolean(e && D.D(e))
                }
                canAdmin() {
                    return this.props.store.canAdmin()
                }
                canUseGroups() {
                    return D.L(this.environment) && this.isSubscribed()
                }
                canEditGroups() {
                    return this.canUseGroups() && this.canAdmin()
                }
                canUseInviteLink() {
                    return this.canAdmin() && D.L(this.environment)
                }
                shouldRenderUpsell() {
                    const e = this.props.store.getValue();
                    return Boolean(e && "personal" === e.plan_type && this.canAdmin())
                }
                getInviteLinkEnabled() {
                    const e = this.props.store.getValue();
                    return Boolean(e && e.invite_link_enabled)
                }
                getInviteLink() {
                    const e = R.default.state.data,
                        t = this.props.store.getValue(),
                        s = !e || "subscribed_admin" !== e.type && "unsubscribed_admin" !== e.type ? void 0 : e.inviteLinkCode;
                    if (t && s) return Object(Ze.getSpaceInviteLinkUrl)(this.environment, t, s)
                }
                getSearchIconStyle() {
                    return {
                        width: 14,
                        height: 14,
                        marginRight: 6,
                        flexGrow: 0,
                        flexShrink: 0,
                        fill: this.theme.mediumIconColor
                    }
                }
                mobileMenuItemStyle() {
                    const {
                        WindowSizeStore: e
                    } = this.environment;
                    return {
                        display: "flex",
                        paddingTop: 14,
                        paddingBottom: 14,
                        paddingLeft: 14,
                        paddingRight: e.getSafePaddingRightCSS(14),
                        background: this.theme.contentBackground
                    }
                }
            }
            et.defaultLimit = 50, et.filterStyle = {
                width: 180,
                borderRadius: 30
            }, et.showMoreButtonStyle = {
                marginTop: 8
            };
            t.a = Object(A.injectIntl)(et)
        },
        "5XPD": function(e, t, s) {
            "use strict";
            var r = s("q1tI"),
                a = s("wldR"),
                n = s("pqiZ"),
                i = s("lEhh"),
                o = s("N34Z"),
                l = s("MBf9"),
                d = s("y6Dp"),
                c = s("QcDD"),
                m = s("sSHh"),
                p = s("aEEb"),
                u = s("J9+s"),
                g = s("0CAA"),
                h = s("rQb/");
            class b extends a.a {
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        intl: t
                    } = this.props;
                    return r.createElement("div", null, this.renderNotificationHeader(), r.createElement("div", {
                        style: this.getSettingsOptionStyle(),
                        className: "notifications-settings"
                    }, this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.mobilePushNotificationSettings.title",
                        defaultMessage: "Mobile push notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.mobilePushNotificationSettings.description",
                        defaultMessage: "Receive push notifications on mentions and comments via your mobile app."
                    }), "notify_mobile"), e.isElectron && r.createElement(r.Fragment, null, r.createElement(n.a, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.desktopNotificationSettings.title",
                        defaultMessage: "Desktop push notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.desktopNotificationSettings.description",
                        defaultMessage: "Receive push notifications on mentions and comments immediately via your desktop app."
                    }), "notify_desktop")), r.createElement(n.a, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.emailNotificationSettings.title",
                        defaultMessage: "Email notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.emailNotificationSettings.description",
                        defaultMessage: "Receive email updates on mentions, comments, and edit digests for all the pages you have followed."
                    }), "notify_email"), this.getSwitchValue("notify_email") && r.createElement(r.Fragment, null, r.createElement(n.a, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.emailAlwaysNotificationSettings.title",
                        defaultMessage: "Always send email notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.emailAlwaysNotificationSettings.description",
                        defaultMessage: "Receive updates by email, even when you’re active on the app."
                    }), "notify_email_always")), r.createElement(n.a, {
                        size: 24
                    }), r.createElement("div", {
                        style: {
                            marginTop: 4
                        }
                    }, r.createElement(m.a, {
                        title: t.formatMessage({
                            id: "notificationSettings.helpButton.caption",
                            defaultMessage: "Learn about mobile and desktop notifications"
                        }),
                        href: Object(g.a)("guides.notificationSettings"),
                        analyticsFrom: "notifications_settings"
                    }))))
                }
                renderNotificationHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return r.createElement(h.a, {
                        large: !e.isMobile || void 0,
                        divider: "full"
                    }, r.createElement(u.FormattedMessage, {
                        id: "notificationSettings.notificationSection.title",
                        defaultMessage: "Notifications"
                    }))
                }
                renderSettingsOption(e, t, s) {
                    const {
                        device: a
                    } = this.environment, n = this.getSwitchValue(s);
                    return r.createElement("div", {
                        onClick: () => {
                            this.handleToggle(s), "notify_mobile" === s ? d.ie(this.environment, {
                                is_on: !n
                            }) : "notify_desktop" === s ? d.ge(this.environment, {
                                is_on: !n
                            }) : "notify_email" === s ? d.he(this.environment, {
                                is_on: !n
                            }) : "notify_email_always" === s && d.he(this.environment, {
                                is_on: !n
                            })
                        },
                        style: {
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            cursor: "pointer"
                        }
                    }, r.createElement("div", {
                        style: {
                            flex: 1
                        }
                    }, r.createElement("div", {
                        style: {
                            fontSize: 14
                        }
                    }, e), r.createElement(p.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%",
                            marginTop: 4
                        }
                    }, t)), r.createElement(i.a, {
                        on: Boolean(n),
                        disabled: void 0 === n,
                        isAndroid: a.isAndroid
                    }))
                }
                getSwitchValue(e) {
                    const {
                        currentSpaceViewStore: t
                    } = c.default.state;
                    if (t) {
                        const s = t.getValue();
                        if (s) return s[e]
                    }
                }
                handleToggle(e) {
                    const {
                        currentSpaceViewStore: t
                    } = c.default.state;
                    if (t) {
                        const s = t.getValue();
                        if (s) {
                            const r = s[e];
                            l.createAndCommit(this.environment, s => {
                                o.d({
                                    store: t,
                                    data: {
                                        [e]: !r
                                    },
                                    transaction: s
                                })
                            })
                        }
                    }
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            t.a = Object(u.injectIntl)(b)
        },
        "8Gp+": function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("J9+s"),
                n = s("wldR"),
                i = s("aEEb"),
                o = s("CSYU"),
                l = s("nFzZ"),
                d = s("Pl3d"),
                c = s("VVh3"),
                m = s("QcDD"),
                p = s("bkwR"),
                u = s("mKX5"),
                g = s("IULH"),
                h = s("rQb/");

            function b(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function f(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class y extends n.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        requestStore: o.a
                    }, this.renderResult = (e, t, s) => r.createElement(c.a, {
                        loaded: s,
                        spinnerSize: 16,
                        showSpinnerTimeout: 600
                    }, e || !t ? r.createElement("div", null, "something went wrong") : this.renderOutput(t)), this.renderOutput = e => {
                        const t = Boolean(e.expiryTime && Number(e.expiryTime) > (new Date).getTime()),
                            s = t ? this.revokeDataAccess : this.grantDataAccess;
                        return r.createElement("div", {
                            style: this.getSettingsOptionStyle()
                        }, r.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                marginBottom: 12,
                                width: "100%"
                            }
                        }, r.createElement("div", {
                            style: {
                                flex: 1
                            }
                        }, r.createElement(h.a, null, r.createElement(a.FormattedMessage, {
                            id: "userDataConsentSettings.header.label",
                            defaultMessage: "Support access"
                        })), r.createElement(i.a, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: {
                                marginTop: 4,
                                width: "80%"
                            }
                        }, t && e.expiryTime ? r.createElement(a.FormattedMessage, {
                            id: "userDataConsentSettings.accessGranted.label",
                            defaultMessage: "You have granted Notion access to your account for support purposes until {expiryTime}.",
                            values: {
                                expiryTime: u.a.unix(e.expiryTime / 1e3).locale(this.props.intl.locale).format("lll")
                            }
                        }) : r.createElement(a.FormattedMessage, {
                            id: "userDataConsentSettings.accessNotGranted.label",
                            defaultMessage: "Grant Notion support temporary access to your account so we can troubleshoot problems or recover content on your behalf. You can revoke access at any time."
                        })), r.createElement(g.a, {
                            onClick: s,
                            isLarge: !0,
                            style: {
                                marginTop: 12,
                                marginBottom: 4
                            }
                        }, t ? r.createElement(a.FormattedMessage, {
                            id: "userDataConsentSettings.revokeSupportAccess.button",
                            defaultMessage: "Revoke access"
                        }) : r.createElement(a.FormattedMessage, {
                            id: "userDataConsentSettings.allowSupportAccess.button",
                            defaultMessage: "Allow support access"
                        })))))
                    }, this.fetchUserDataConsentSettings = async e => {
                        const t = await p.getDataAccessConsent(this.environment, {});
                        if ("failed" === t.type) throw t.error;
                        return t.data
                    }, this.grantDataAccess = async () => {
                        await this.setDataAccessExpiryTime({
                            expiryTime: (new Date).getTime() + 14 * l.a
                        })
                    }, this.revokeDataAccess = async () => {
                        await this.setDataAccessExpiryTime({})
                    }, this.setDataAccessExpiryTime = async e => {
                        const t = await p.setDataAccessConsent(this.environment, e);
                        if ("success" === t.type && t.data) {
                            const e = this.stores.requestStore.state;
                            this.stores.requestStore.setState(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var s = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? b(Object(s), !0).forEach((function(t) {
                                        f(e, t, s[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : b(Object(s)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                                    }))
                                }
                                return e
                            }({}, e, {
                                result: t.data
                            }))
                        }
                    }
                }
                renderComponent() {
                    const {
                        currentUserStore: e
                    } = m.default.state;
                    return e && r.createElement(d.a, {
                        requestStore: this.stores.requestStore,
                        request: {
                            userId: e.id,
                            expiryTime: (new Date).getTime() + 14 * l.a
                        },
                        performRequest: this.fetchUserDataConsentSettings,
                        render: this.renderResult
                    })
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            t.a = Object(a.injectIntl)(y)
        },
        "9hmv": function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("EszA"),
                n = s("wldR"),
                i = s("LeVO"),
                o = s("y6Dp"),
                l = s("DNgp"),
                d = s("MeYt"),
                c = s("zmp8"),
                m = s("wiBh");

            function p(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function u(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class g extends n.a {
                constructor() {
                    super(...arguments), this.handleClick = e => {
                        a.a({
                            environment: this.environment,
                            annotation: [this.props.type]
                        }), this.props.onClick && this.props.onClick(), o.ae(this.environment, {
                            action: this.props.type
                        })
                    }, this.isDisabledStore = this.createComputedStore(() => this.props.disabled || "editing" !== l.default.state.mode)
                }
                renderComponent() {
                    return r.createElement(i.a, {
                        renderTooltip: () => this.props.tooltipLabel,
                        render: e => r.createElement(d.a, Object.assign({
                            style: this.getButtonStyle(),
                            disabled: this.isDisabledStore.state,
                            disabledFeedback: this.isDisabledStore.state,
                            onClick: this.handleClick
                        }, e), this.props.children)
                    })
                }
                getButtonStyle() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? p(Object(s), !0).forEach((function(t) {
                                u(e, t, s[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                            }))
                        }
                        return e
                    }({
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        color: Object(m.b)(this.props.type) ? c.f.blue : this.theme.regularTextColor
                    }, this.props.style)
                }
            }
            t.a = g
        },
        IoOo: function(e, t, s) {
            "use strict";
            var r = s("q1tI"),
                a = s("J9+s"),
                n = s("wldR"),
                i = s("IULH"),
                o = s("rQb/"),
                l = s("aEEb"),
                d = s("prF1");
            class c extends n.a {
                renderComponent() {
                    return r.createElement("div", null, this.renderHeader(), r.createElement("div", {
                        style: this.getSettingsOptionStyle()
                    }, r.createElement(l.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, this.renderMessage()), this.renderManageSubscriptionButton()))
                }
                renderHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return r.createElement(o.a, {
                        large: !e.isMobile || void 0,
                        divider: e.isMobile ? void 0 : "full"
                    }, r.createElement(a.FormattedMessage, {
                        id: "subscriptionSettings.title",
                        defaultMessage: "Subscription"
                    }))
                }
                renderMessage() {
                    const {
                        device: e
                    } = this.environment;
                    return e.isMobile ? r.createElement(a.FormattedMessage, {
                        id: "subscriptionSettings.mobileDescription",
                        defaultMessage: "Manage your Personal Pro subscription though the App Store.",
                        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
                    }) : r.createElement(a.FormattedMessage, {
                        id: "subscriptionSettings.description",
                        defaultMessage: "You're currently subscribed through an in-app purchase with Apple. You can manage your subscription in Apple's subscription settings.",
                        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
                    })
                }
                renderManageSubscriptionButton() {
                    return r.createElement(d.a, {
                        href: "https://apps.apple.com/account/subscriptions"
                    }, r.createElement(i.a, {
                        isLarge: !0,
                        style: {
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "subscriptionSettings.button",
                        defaultMessage: "Manage subscription"
                    })))
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            t.a = c
        },
        L0YQ: function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("wldR"),
                n = s("Ng05"),
                i = s("IULH"),
                o = s("0CAA"),
                l = s("y6Dp"),
                d = s("hmwC"),
                c = s("H4VD"),
                m = s("Sb6f"),
                p = s("J9+s");

            function u(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function g(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class h extends a.a {
                constructor() {
                    super(...arguments), this.handleUpgradeClick = e => {
                        const {
                            from: t,
                            for: s,
                            onUpgradeClick: r
                        } = this.props;
                        d.a(this.environment, {
                            from: t,
                            for: s
                        }), r && r(e)
                    }, this.handleLearnMoreClick = () => {
                        const {
                            from: e,
                            learnMoreRoute: t
                        } = this.props;
                        Object(c.navigateToExternalURL)({
                            environment: this.environment,
                            url: Object(o.a)(t)
                        }), l.B(this.environment, {
                            from: e
                        })
                    }
                }
                renderComponent() {
                    return r.createElement("section", {
                        style: this.getWrapStyle()
                    }, this.renderIcon(), this.renderTitle(), this.renderCaption(), this.renderActions())
                }
                renderIcon() {
                    const {
                        icon: e
                    } = this.props;
                    return e(this.getIconStyle())
                }
                renderTitle() {
                    const {
                        title: e
                    } = this.props;
                    return r.createElement("header", {
                        style: this.getTitleStyle()
                    }, e)
                }
                renderCaption() {
                    const {
                        caption: e
                    } = this.props;
                    return r.createElement("p", {
                        style: this.getCaptionStyle()
                    }, e)
                }
                renderActions() {
                    return r.createElement("footer", null, this.renderUpgradeButton(), this.renderLearnMoreButton())
                }
                renderUpgradeButton() {
                    const {
                        upgradeMessage: e
                    } = this.props;
                    return r.createElement(n.a, {
                        onClick: this.handleUpgradeClick,
                        isLarge: !0
                    }, e || r.createElement(p.FormattedMessage, {
                        defaultMessage: "Upgrade",
                        id: "upsellCallout.upgradeButton.text"
                    }))
                }
                renderLearnMoreButton() {
                    return r.createElement(i.a, {
                        onClick: this.handleLearnMoreClick,
                        style: this.getLearnMoreButtonStyle()
                    }, r.createElement(p.FormattedMessage, {
                        defaultMessage: "Learn more",
                        id: "upsellCallout.learnMoreButton.text"
                    }))
                }
                getWrapStyle() {
                    const {
                        device: e
                    } = this.environment;
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(Object(s), !0).forEach((function(t) {
                                g(e, t, s[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : u(Object(s)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                            }))
                        }
                        return e
                    }({
                        fontSize: 14
                    }, !e.isMobile && {
                        maxWidth: 340
                    })
                }
                getIconStyle() {
                    return {
                        width: 32,
                        height: "auto",
                        fill: this.theme.mediumIconColor,
                        marginBottom: 8
                    }
                }
                getTitleStyle() {
                    return {
                        fontWeight: m.a.fontWeight.semibold
                    }
                }
                getCaptionStyle() {
                    return {
                        color: this.theme.mediumTextColor,
                        marginTop: 4,
                        marginBottom: 16
                    }
                }
                getLearnMoreButtonStyle() {
                    return {
                        marginLeft: 12
                    }
                }
            }
            t.a = h
        },
        "VoJ/": function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("J9+s"),
                n = s("Pl3d"),
                i = s("wldR"),
                o = s("hU3F"),
                l = s("QcDD"),
                d = s("RyVQ"),
                c = s("bkwR"),
                m = s("VBxf"),
                p = s("7M94"),
                u = s("/6eU"),
                g = s("yNyh"),
                h = s("IULH"),
                b = s("Ng05"),
                f = s("MYfK"),
                y = s("zmp8"),
                S = s("aEEb"),
                w = s("bxQm"),
                M = s("Z1H8"),
                v = s("a3T4"),
                P = s("rQb/"),
                E = s("zzAG");

            function O(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(s), !0).forEach((function(t) {
                        k(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : O(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function k(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class j extends i.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        hasPasswordStore: o.a.of(!1),
                        emailStore: o.a.of("")
                    }, this.handleChangePasswordClick = async () => {
                        d.a.setState({
                            open: !0,
                            setNewPassword: !0,
                            password: "",
                            repeatPassword: ""
                        })
                    }, this.handleOldPasswordChange = e => {
                        (d.a.isSetNewPasswordModal() || d.a.isRemovePasswordModal()) && d.a.setState(C({}, d.a.state, {
                            oldPassword: e.target.value,
                            alert: void 0
                        }))
                    }, this.handleClearOldPassword = () => {
                        (d.a.isSetNewPasswordModal() || d.a.isRemovePasswordModal()) && d.a.setState(C({}, d.a.state, {
                            oldPassword: "",
                            alert: void 0
                        }))
                    }, this.handlePasswordChange = e => {
                        d.a.isSetNewPasswordModal() && d.a.setState(C({}, d.a.state, {
                            password: e.target.value,
                            alert: void 0
                        }))
                    }, this.handleCancelChangePassword = async () => {
                        const {
                            onCancel: e
                        } = d.a.state;
                        d.a.reset(), e && e()
                    }, this.handleClearPassword = () => {
                        d.a.isSetNewPasswordModal() && d.a.setState(C({}, d.a.state, {
                            password: "",
                            repeatPassword: "",
                            alert: void 0
                        }))
                    }, this.handleRepeatPasswordChange = e => {
                        d.a.isSetNewPasswordModal() && d.a.setState(C({}, d.a.state, {
                            repeatPassword: e.target.value,
                            alert: void 0
                        }))
                    }, this.handleClearRepeatPassword = () => {
                        d.a.isSetNewPasswordModal() && d.a.setState(C({}, d.a.state, {
                            repeatPassword: "",
                            alert: void 0
                        }))
                    }, this.handlePasswordBlur = () => {
                        if (d.a.isSetNewPasswordModal()) {
                            const {
                                password: e,
                                repeatPassword: t
                            } = d.a.state;
                            e && t && e !== t && d.a.setState(C({}, d.a.state, {
                                alert: this.props.intl.formatMessage({
                                    id: "passwordSettings.changePasswordModal.newPasswordMismatchError",
                                    defaultMessage: "Your new password does not match."
                                })
                            }))
                        }
                    }, this.handleSubmit = async () => {
                        if (!d.a.isSetNewPasswordModal()) return;
                        const {
                            oldPassword: e,
                            password: t,
                            repeatPassword: s
                        } = d.a.state, r = this.stores.hasPasswordStore.get(), {
                            intl: a
                        } = this.props;
                        let n;
                        if (r && !e) n = a.formatMessage({
                            id: "passwordSettings.changePasswordModal.oldPasswordMissingError",
                            defaultMessage: "Please enter your old password."
                        });
                        else if (t) {
                            const e = Object(v.a)(t);
                            e.success ? s ? t !== s && (n = a.formatMessage({
                                id: "passwordSettings.changePasswordModal.newPasswordsMismatchError",
                                defaultMessage: "Your passwords do not match."
                            })) : n = a.formatMessage({
                                id: "passwordSettings.changePasswordModal.newPasswordNotRepeatedError",
                                defaultMessage: "Please repeat your new password."
                            }) : n = this.getPasswordErrorMessage(e.reason)
                        } else n = a.formatMessage({
                            id: "passwordSettings.changePasswordModal.passwordNotEnteredError",
                            defaultMessage: "Please enter a password."
                        });
                        if (n) return void d.a.setState(C({}, d.a.state, {
                            alert: n
                        }));
                        const i = await c.setPassword(this.environment, {
                            oldPassword: e,
                            newPassword: t
                        });
                        if ("success" === i.type) this.props.requestStore.refresh(), void 0 === e ? this.saveNewPasswordSuccess() : this.changePasswordSuccess();
                        else {
                            const e = Object(E.b)(this.props.intl, i);
                            d.a.setState(C({}, d.a.state, {
                                alert: e
                            }))
                        }
                    }, this.handleShowRemovePasswordModalClick = async () => {
                        d.a.setState({
                            open: !0,
                            removePassword: !0,
                            oldPassword: ""
                        })
                    }, this.handleRemovePasswordClick = async () => {
                        if (!d.a.isRemovePasswordModal()) return;
                        const {
                            oldPassword: e
                        } = d.a.state;
                        if (!e) return void d.a.setState(C({}, d.a.state, {
                            alert: this.props.intl.formatMessage({
                                id: "passwordSettings.removePasswordModal.oldPasswordNotEnteredError",
                                defaultMessage: "Please enter your current password.",
                                description: "We require users to enter their password in a text box before they can delete it. This error message appears if the user attempts to delete their password but hasn't entered it into the text box."
                            })
                        }));
                        const t = await c.setPassword(this.environment, {
                            oldPassword: e,
                            clearPassword: !0
                        });
                        if ("success" === t.type) this.props.requestStore.refresh(), this.removePasswordSuccess();
                        else {
                            const e = Object(E.b)(this.props.intl, t);
                            d.a.setState(C({}, d.a.state, {
                                alert: e || this.props.intl.formatMessage({
                                    id: "passwordSettings.removePasswordModal.message",
                                    defaultMessage: "Error removing password. Please try again later."
                                })
                            }))
                        }
                    }, this.defaultErrorMessage = this.props.intl.formatMessage({
                        id: "passwordSettings.genericPasswordSaveError",
                        defaultMessage: "Error saving password. Please try again later."
                    })
                }
                willMount(e) {
                    super.willMount(e);
                    const {
                        currentUserStore: t
                    } = l.default.state;
                    if (t) {
                        const e = t.getValue();
                        e && this.stores.emailStore.set(e.email)
                    }
                }
                renderComponent() {
                    const e = this.stores.emailStore.get();
                    if (!e) return;
                    const {
                        requestStore: t
                    } = this.props;
                    return r.createElement("div", {
                        style: this.getSettingsOptionStyle()
                    }, r.createElement(P.a, {
                        smallMarginBottom: !0
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.title",
                        defaultMessage: "Password"
                    })), r.createElement(n.a, {
                        request: {},
                        requestStore: t,
                        performRequest: async () => {
                            const t = await c.checkEmailType(this.environment, {
                                email: e,
                                allowAdminBypass: !0
                            });
                            if ("success" === t.type) {
                                const {
                                    samlRedirect: e,
                                    hasPassword: s
                                } = t.data;
                                return {
                                    samlEnforced: e && e.enforced,
                                    hasPassword: s
                                }
                            }
                            throw t.error
                        },
                        render: (e, t) => {
                            if (e) return j.renderLabel(r.createElement(a.FormattedMessage, {
                                id: "passwordSettings.passwordSetError.message",
                                defaultMessage: "Your password cannot be set at this time. Please try again later."
                            }));
                            if (t) {
                                const {
                                    samlEnforced: e,
                                    hasPassword: s
                                } = t;
                                return e ? j.renderLabel(r.createElement(a.FormattedMessage, {
                                    id: "passwordSettings.passwordManagedThroughSAMLProvider.message",
                                    defaultMessage: "Your password is managed through your SAML Single Sign-on Provider.",
                                    description: "Message letting users know that their password is managed through a 3rd-party provider, which is why they can't set their password on Notion's password settings page."
                                })) : (this.stores.hasPasswordStore.set(Boolean(s)), this.renderPasswordActions())
                            }
                        }
                    }))
                }
                renderPasswordActions() {
                    const {
                        isEducationPlan: e
                    } = this.props, t = this.stores.hasPasswordStore.get();
                    return r.createElement(r.Fragment, null, j.renderLabel(r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.passwordSetInstructions",
                        defaultMessage: "You can set a permanent password if you don't want to use temporary login codes."
                    })), e && j.renderLabel(this.renderEducationPlanInfo()), r.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        }
                    }, r.createElement(h.a, {
                        isLarge: !0,
                        onClick: this.handleChangePasswordClick,
                        style: {
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, t ? r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.changePasswordButton.label",
                        defaultMessage: "Change password"
                    }) : r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.setPasswordButton.label",
                        defaultMessage: "Set a password"
                    })), this.canRemovePassword() && r.createElement(w.a, {
                        onClick: this.handleShowRemovePasswordModalClick,
                        style: {
                            marginLeft: 5,
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.removePasswordButton.label",
                        defaultMessage: "Remove password"
                    }))), this.renderPasswordModal())
                }
                static renderLabel(e) {
                    return r.createElement(S.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, e)
                }
                renderPasswordModal() {
                    const {
                        device: e
                    } = this.environment, {
                        open: t
                    } = d.a.state;
                    return r.createElement(u.a, {
                        open: t,
                        onDismiss: this.handleCancelChangePassword,
                        innerStyle: {
                            width: e.isPhone ? "90%" : 460,
                            minHeight: 270,
                            padding: 24
                        },
                        className: p.lb,
                        preventHideChildrenWhileOpening: !0,
                        render: () => r.createElement(M.a, {
                            capture: !0,
                            allowEsc: !0,
                            render: () => r.createElement(r.Fragment, null, this.renderSaveNewPassword(), this.renderRemovePassword())
                        })
                    })
                }
                renderSaveNewPassword() {
                    const {
                        isEducationPlan: e
                    } = this.props;
                    if (!d.a.isSetNewPasswordModal()) return;
                    const {
                        password: t,
                        repeatPassword: s,
                        oldPassword: n,
                        alert: i
                    } = d.a.state, o = this.stores.hasPasswordStore.get(), l = this.stores.emailStore.get();
                    return r.createElement(r.Fragment, null, r.createElement(g.b, {
                        style: {
                            display: "none"
                        },
                        type: "text",
                        value: l,
                        autoComplete: "username",
                        disabled: !0
                    }), o && r.createElement(r.Fragment, null, r.createElement(f.a, null, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.changePasswordModal.oldPasswordInput.label",
                        defaultMessage: "Old Password"
                    })), r.createElement(g.b, {
                        type: "password",
                        value: n,
                        onChange: this.handleOldPasswordChange,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearOldPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.oldPasswordInput.placeholder",
                            defaultMessage: "Enter old password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !0,
                        autoComplete: "current-password"
                    })), o ? r.createElement(f.a, {
                        hasMarginTop: !0
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.newPasswordInput.label",
                        defaultMessage: "New password"
                    })) : r.createElement(f.a, null, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.passwordInput.label",
                        defaultMessage: "Password"
                    })), r.createElement(g.b, {
                        type: "password",
                        value: t,
                        onChange: this.handlePasswordChange,
                        onSubmit: this.handleSubmit,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.newPasswordInput.placeholder",
                            defaultMessage: "Enter new password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !o,
                        onBlur: this.handlePasswordBlur,
                        autoComplete: "new-password"
                    }), r.createElement(f.a, {
                        hasMarginTop: !0
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.repeatPasswordInput.label",
                        defaultMessage: "Repeat password"
                    })), r.createElement(g.b, {
                        type: "password",
                        value: s,
                        onChange: this.handleRepeatPasswordChange,
                        onSubmit: this.handleSubmit,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearRepeatPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.repeatPasswordInput.placeholder",
                            defaultMessage: "Repeat new password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        onBlur: this.handlePasswordBlur,
                        autoComplete: "new-password"
                    }), r.createElement(S.a, {
                        isMultiline: !0,
                        isSecondaryColor: !0,
                        style: {
                            marginTop: 14
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.passwordGuidelines",
                        defaultMessage: "Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers."
                    })), e && r.createElement(S.a, {
                        isMultiline: !0,
                        isSecondaryColor: !0,
                        style: {
                            marginTop: 14
                        }
                    }, this.renderEducationPlanInfo()), this.renderAlert(i), r.createElement(b.a, {
                        isLarge: !0,
                        style: {
                            marginTop: 14
                        },
                        onClick: this.handleSubmit
                    }, o ? r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.changePasswordButton.label",
                        defaultMessage: "Change password"
                    }) : r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.setPasswordButton.label",
                        defaultMessage: "Set a password"
                    })))
                }
                renderRemovePassword() {
                    const {
                        isEducationPlan: e
                    } = this.props;
                    if (!d.a.isRemovePasswordModal()) return;
                    const {
                        oldPassword: t,
                        alert: s
                    } = d.a.state;
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        style: {
                            fontSize: 14,
                            width: "100%"
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.text",
                        defaultMessage: "You're about to remove your password. We'll email you temporary login codes to access Notion going forward.",
                        description: "Message warning the user that they're about to delete their password, and telling them how to log in after their password has been deleted."
                    }), e && r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.educationPlanWarning",
                        defaultMessage: "If you lose access to your school email, you'll be unable to log back into Notion.",
                        description: "Warning for users on the Education Plan that if they lose access to their school email, they won't be able to log into Notion without a password."
                    })), r.createElement(f.a, {
                        hasMarginTop: !0
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.deletePasswordModal.passwordInput.label",
                        defaultMessage: "Password"
                    })), r.createElement(g.b, {
                        type: "password",
                        value: t,
                        onChange: this.handleOldPasswordChange,
                        onSubmit: this.handleRemovePasswordClick,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearOldPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.removePasswordModal.passwordInput.placeholder",
                            defaultMessage: "Enter your password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !0,
                        autoComplete: "current-password"
                    }), this.renderAlert(s), r.createElement(b.a, {
                        isLarge: !0,
                        style: {
                            marginTop: 14
                        },
                        onClick: this.handleRemovePasswordClick
                    }, r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.removePasswordButton.label",
                        defaultMessage: "Remove password"
                    })))
                }
                renderAlert(e) {
                    if (e) return r.createElement(S.a, {
                        isMultiline: !0,
                        style: {
                            marginTop: 8,
                            color: y.f.red
                        }
                    }, e)
                }
                renderEducationPlanInfo() {
                    return r.createElement(a.FormattedMessage, {
                        id: "passwordSettings.educationPlanGuidelines",
                        defaultMessage: "If you lose access to your school email address, you'll be able to log in using your password."
                    })
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
                saveNewPasswordSuccess() {
                    const {
                        intl: e,
                        isEducationPlan: t
                    } = this.props, {
                        onSubmit: s
                    } = d.a.state;
                    d.a.reset();
                    const r = t ? e.formatMessage({
                        id: "passwordSettings.setPasswordSuccess.educationMessage",
                        defaultMessage: "Your password is all set! You'll be able to log in, even if you lose access to your school email address."
                    }) : e.formatMessage({
                        id: "passwordSettings.setPasswordSuccess.message",
                        defaultMessage: "Your password is all set!"
                    });
                    m.showMessage({
                        message: r,
                        onAccept: s
                    })
                }
                changePasswordSuccess() {
                    const {
                        onSubmit: e
                    } = d.a.state;
                    d.a.reset(), m.showMessage({
                        message: this.props.intl.formatMessage({
                            id: "passwordSettings.changePasswordSuccess.message",
                            defaultMessage: "Your new password has been saved."
                        }),
                        onAccept: e
                    })
                }
                removePasswordSuccess() {
                    d.a.reset(), m.showMessage({
                        message: this.props.intl.formatMessage({
                            id: "passwordSettings.removePasswordSuccess.message",
                            defaultMessage: "Your password has been removed."
                        })
                    })
                }
                getPasswordErrorMessage(e) {
                    const t = E.d[e.type];
                    return t ? this.props.intl.formatMessage(t) : this.defaultErrorMessage
                }
                canRemovePassword() {
                    const {
                        isEducationPlan: e
                    } = this.props, t = this.stores.hasPasswordStore.get();
                    return !e && t
                }
            }
            t.a = Object(a.injectIntl)(j)
        },
        ibYI: function(e, t, s) {
            "use strict";
            var r = s("q1tI"),
                a = s("J9+s"),
                n = s("wldR"),
                i = s("rQb/"),
                o = s("lEhh"),
                l = s("aEEb");
            class d extends n.a {
                renderComponent() {
                    const {
                        device: e
                    } = this.environment;
                    return r.createElement("div", {
                        style: this.getSettingsOptionStyle()
                    }, r.createElement(i.a, null, r.createElement(a.FormattedMessage, {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    })), r.createElement("div", {
                        onClick: this.props.onClick,
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: 12,
                            cursor: "pointer",
                            width: "100%"
                        }
                    }, r.createElement("div", {
                        style: {
                            flex: 1
                        }
                    }, r.createElement(l.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will change how all calendars in your app look."
                    }))), r.createElement("div", {
                        style: {
                            marginTop: 5
                        }
                    }, r.createElement(o.a, {
                        on: 1 === this.props.startDayOfWeek,
                        isAndroid: e.isAndroid
                    }))))
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            t.a = d
        },
        q8I6: function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("GQP/"),
                n = s("wldR"),
                i = s("LeVO"),
                o = s("TDb4"),
                l = s("y6Dp"),
                d = s("MeYt"),
                c = s("DNgp"),
                m = s("ieCD"),
                p = s("wiBh"),
                u = s("J9+s"),
                g = s("cBa6");

            function h(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(s), !0).forEach((function(t) {
                        f(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : h(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function f(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class y extends n.a {
                constructor() {
                    super(...arguments), this.handleButtonPopupClick = () => {
                        a.c({
                            focus: !0
                        }), l.ae(this.environment, {
                            action: g.b.Link
                        })
                    }
                }
                renderComponent() {
                    const e = Object(p.b)(g.b.Link),
                        t = this.isDisabled();
                    return r.createElement(i.a, {
                        renderTooltip: () => r.createElement(r.Fragment, null, r.createElement("div", null, r.createElement(u.FormattedMessage, {
                            defaultMessage: "Add link",
                            id: "selectionLinkButton.addLink.tooltip",
                            description: "Prompt for the user to add a URL to link to from the selected text."
                        })), r.createElement("div", null, r.createElement(o.a, {
                            style: {
                                color: this.theme.mediumInvertedTextColor
                            },
                            name: "openLinkMenu"
                        }))),
                        render: s => r.createElement(d.a, Object.assign({
                            style: b({
                                display: "flex",
                                alignItems: "center",
                                borderRadius: 0,
                                paddingLeft: 7,
                                paddingRight: 8
                            }, e && {
                                color: this.theme.blueColor
                            }, {
                                whiteSpace: "nowrap"
                            }, this.props.style),
                            disabled: t,
                            disabledFeedback: t
                        }, s, {
                            onClick: this.handleButtonPopupClick
                        }), this.props.children)
                    })
                }
                isDisabled() {
                    return !!this.props.disabled || ("editing" !== c.default.state.mode && !m.a.state.open || !!(Object(p.o)(g.b.User) || Object(p.o)(g.b.Bot) || Object(p.o)(g.b.Date) || Object(p.o)(g.b.Page)))
                }
            }
            t.a = Object(u.injectIntl)(y)
        },
        ty0h: function(e, t, s) {
            "use strict";
            var r = s("q1tI"),
                a = s("J9+s"),
                n = s("mF3+"),
                i = s("i3uR"),
                o = s("SR/M"),
                l = s("wldR"),
                d = s("gbGO"),
                c = s("WgIs"),
                m = s("IULH"),
                p = s("2Y+N"),
                u = s("rQb/"),
                g = s("aEEb"),
                h = s("wvIE"),
                b = s("ZAZ2");
            const f = ["system", "light", "dark"],
                y = Object(a.defineMessages)({
                    systemLabel: {
                        id: "appearanceSetting.system.label",
                        defaultMessage: "Use system setting"
                    },
                    lightLabel: {
                        id: "appearanceSetting.light.label",
                        defaultMessage: "Light"
                    },
                    darkLabel: {
                        id: "appearanceSetting.dark.label",
                        defaultMessage: "Dark"
                    }
                });
            class S extends l.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        appearanceStore: b.a
                    }, this.handleChangeAppearance = e => {
                        Object(h.b)(this.environment, e), this.stores.appearanceStore.setState({
                            appearanceSetting: e
                        })
                    }
                }
                componentDidMount() {
                    const e = Object(h.a)(this.environment);
                    this.stores.appearanceStore.setState({
                        appearanceSetting: e
                    })
                }
                renderComponent() {
                    return r.createElement("div", null, this.renderHeader(), r.createElement("div", {
                        style: this.getSettingsOptionStyle()
                    }, r.createElement(g.a, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, r.createElement(a.FormattedMessage, {
                        id: "appearanceSettings.description.message",
                        defaultMessage: "Customize how Notion looks on your device."
                    })), this.renderAppearanceButton()))
                }
                renderHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return r.createElement(u.a, {
                        large: !e.isMobile || void 0,
                        divider: e.isMobile ? void 0 : "full"
                    }, r.createElement(a.FormattedMessage, {
                        id: "appearanceSettings.title",
                        defaultMessage: "Appearance"
                    }))
                }
                renderAppearanceButton() {
                    const {
                        device: e
                    } = this.environment;
                    return r.createElement(i.a, {
                        popupType: e.isMobile ? i.a.PopupType.SlideUp : i.a.PopupType.Popup,
                        placementToOrigin: i.a.Placement.Right,
                        renderOrigin: e => r.createElement(m.a, Object.assign({}, e, {
                            isLarge: !0,
                            style: {
                                marginTop: 12,
                                marginBottom: 4
                            }
                        }), S.getAppearanceLabel(this.stores.appearanceStore.state.appearanceSetting), n.a.chevronDown({
                            width: 10,
                            marginLeft: 4,
                            fill: this.theme.lightIconColor
                        })),
                        render: t => {
                            let s;
                            s = e.isMobile ? {
                                menuType: d.b.MenuType.Modal,
                                title: r.createElement(a.FormattedMessage, {
                                    defaultMessage: "Appearance",
                                    id: "appearanceSettings.modal.title"
                                }),
                                right: r.createElement(a.FormattedMessage, {
                                    defaultMessage: "Done",
                                    id: "appearanceSettings.modal.done"
                                }),
                                onClickRight: t.close
                            } : {
                                menuType: d.b.MenuType.Popup,
                                width: 250
                            };
                            const n = f.map(e => ({
                                key: e,
                                action: s => {
                                    this.handleChangeAppearance(e), t.close()
                                },
                                render: (t, s) => r.createElement(o.a, Object.assign({}, t, {
                                    title: S.getAppearanceLabel(e)
                                }))
                            }));
                            return r.createElement(d.b, Object.assign({}, s), r.createElement(c.a, {
                                type: c.a.Type.Vertical,
                                sections: [{
                                    key: "appearance section",
                                    render: e => r.createElement(p.a, Object.assign({}, e)),
                                    items: n
                                }],
                                initialFocus: void 0
                            }))
                        }
                    })
                }
                static getAppearanceLabel(e) {
                    switch (e) {
                        case "light":
                            return r.createElement(a.FormattedMessage, Object.assign({}, y.lightLabel));
                        case "dark":
                            return r.createElement(a.FormattedMessage, Object.assign({}, y.darkLabel));
                        case "system":
                            return r.createElement(a.FormattedMessage, Object.assign({}, y.systemLabel))
                    }
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            t.a = S
        },
        typy: function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("i3uR"),
                n = s("wldR"),
                i = s("LeVO"),
                o = s("uSCg"),
                l = s("y6Dp"),
                d = s("MeYt"),
                c = s("DNgp"),
                m = s("mF3+"),
                p = s("WgIs"),
                u = s("gbGO"),
                g = s("2Y+N"),
                h = s("EszA"),
                b = s("zmp8"),
                f = s("I5tp"),
                y = s("Sb6f"),
                S = s("BTUg"),
                w = s("2HDO"),
                M = s("6nbh"),
                v = s("cBa6"),
                P = s("TDb4"),
                E = s("wiBh"),
                O = s("J9+s"),
                C = s("nPEg");

            function k(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(s), !0).forEach((function(t) {
                        T(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : k(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function T(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const I = r.Fragment;
            class F extends n.a {
                constructor() {
                    super(...arguments), this.storeTypes = {
                        ignoreSelectionAreaStore: M.a
                    }, this.renderHighlightColorMenuItem = (e, t, s, a) => ({
                        key: t || e,
                        action: () => {
                            s(), this.menuItemAction(e), a.close()
                        },
                        render: s => r.createElement(f.a, Object.assign({}, s, {
                            color: e,
                            overrideDisplayName: t
                        }))
                    }), this.handleToggleHighlightAnnotation = () => {
                        h.a({
                            environment: this.environment,
                            annotation: ["h", S.a.state.color]
                        }), l.ae(this.environment, {
                            action: "h",
                            color: S.a.state.color
                        })
                    }, this.handleButtonPopupClick = e => {
                        l.ae(this.environment, {
                            action: "h"
                        })
                    }, this.handleClose = () => {
                        c.default.emit()
                    }, this.menuItemAction = e => {
                        h.b({
                            environment: this.environment,
                            annotationType: "h"
                        }), "default" !== e && (S.a.setHighlightColor(e), this.handleToggleHighlightAnnotation())
                    }
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        intl: t
                    } = this.props;
                    return r.createElement(a.a, {
                        popupType: e.isMobile ? a.a.PopupType.SlideUp : a.a.PopupType.Popup,
                        originGap: 4,
                        onClose: this.handleClose,
                        onClick: this.handleButtonPopupClick,
                        renderOrigin: t => r.createElement(i.a, {
                            renderTooltip: () => r.createElement(I, null, r.createElement("div", null, r.createElement(O.FormattedMessage, {
                                defaultMessage: "Text color",
                                id: "highlightSelectionButton.textColor.tooltip"
                            })), r.createElement("div", null, r.createElement(P.a, {
                                style: {
                                    color: this.theme.mediumInvertedTextColor
                                },
                                name: "toggleHighlight"
                            }))),
                            render: s => r.createElement(d.a, Object.assign({
                                style: j({
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: 7,
                                    paddingRight: 6,
                                    whiteSpace: "nowrap"
                                }, this.props.style),
                                disabled: this.props.disabled,
                                disabledFeedback: this.props.disabled
                            }, Object(o.a)(t, s)), r.createElement("div", {
                                style: this.getColorIconStyle()
                            }, e.isMobile ? r.createElement(O.FormattedMessage, {
                                defaultMessage: "Color",
                                id: "highlightSelectionButton.mobileColorIcon.label"
                            }) : "A"), m.a.chevronDown({
                                width: 10,
                                marginLeft: e.isMobile ? 4 : 3,
                                fill: "dark" === this.theme.mode ? b.f.white : this.theme.lightIconColor
                            }))
                        }),
                        render: s => {
                            let a;
                            return a = e.isMobile ? {
                                menuType: u.b.MenuType.Modal,
                                title: r.createElement(O.FormattedMessage, {
                                    defaultMessage: "Text color",
                                    id: "highlightSelectionButton.mobileTextColor.label"
                                }),
                                right: r.createElement(C.CancelMenuText, null),
                                onClickRight: () => {
                                    s.close()
                                }
                            } : {
                                menuType: u.b.MenuType.Popup
                            }, r.createElement(u.b, Object.assign({}, a), r.createElement(w.a, {
                                capture: e.isMobile,
                                store: this.stores.ignoreSelectionAreaStore,
                                ignoreBlockSelection: !1,
                                restoreSelection: !0,
                                focusOffscreenInput: !1,
                                render: e => {
                                    const a = b.b.map(t => this.renderHighlightColorMenuItem(t, void 0, e, s)),
                                        n = [this.renderHighlightColorMenuItem("default", t.formatMessage({
                                            defaultMessage: "Default background",
                                            id: "highlightSelectionButton.defaultBackground.label"
                                        }), e, s), ...b.a.map(t => this.renderHighlightColorMenuItem(t, void 0, e, s))],
                                        i = S.a.state.color;
                                    return r.createElement(p.a, {
                                        type: p.a.Type.Vertical,
                                        sections: [{
                                            key: 0,
                                            items: [{
                                                key: 0,
                                                action: () => {
                                                    e(), this.menuItemAction(i), s.close()
                                                },
                                                render: e => r.createElement(f.a, Object.assign({}, e, {
                                                    color: i,
                                                    shortcuts: ["toggleHighlight"]
                                                }))
                                            }],
                                            render: e => r.createElement(g.a, Object.assign({}, e, {
                                                title: r.createElement(O.FormattedMessage, {
                                                    defaultMessage: "Last used",
                                                    id: "highlightSelectionButton.lastUsedSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }, {
                                            key: 1,
                                            items: a,
                                            render: e => r.createElement(g.a, Object.assign({}, e, {
                                                title: r.createElement(O.FormattedMessage, {
                                                    defaultMessage: "Color",
                                                    id: "highlightSelectionButton.colorSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }, {
                                            key: 2,
                                            items: n,
                                            render: e => r.createElement(g.a, Object.assign({}, e, {
                                                title: r.createElement(O.FormattedMessage, {
                                                    defaultMessage: "Background",
                                                    id: "highlightSelectionButton.backgroundSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }],
                                        initialFocus: void 0
                                    })
                                }
                            }))
                        }
                    })
                }
                getTextSelectionColor() {
                    const e = Object(E.b)("h");
                    return e ? v.Q(e) : "default"
                }
                getColorIconStyle() {
                    const {
                        device: e
                    } = this.environment;
                    return j({
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 18,
                        textAlign: "center",
                        fontSize: 15,
                        borderRadius: 2
                    }, !e.isMobile && {
                        width: 18,
                        fontWeight: y.a.fontWeight.medium,
                        marginBottom: 2
                    }, {}, Object(b.k)(this.getTextSelectionColor(), this.theme))
                }
            }
            t.a = Object(O.injectIntl)(F)
        },
        xPzf: function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("cBa6"),
                n = s("MeYt"),
                i = s("Rnyl"),
                o = s("xstG"),
                l = s("wiBh"),
                d = s("J9+s"),
                c = s("TDb4"),
                m = s("wldR"),
                p = s("LeVO"),
                u = s("DNgp");

            function g(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(s), !0).forEach((function(t) {
                        b(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : g(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function b(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class f extends m.a {
                constructor() {
                    super(...arguments), this.renderMenuTooltip = () => {
                        const e = this.getThemeColors();
                        return r.createElement(r.Fragment, null, r.createElement("div", null, r.createElement(d.FormattedMessage, {
                            id: "richTextMenu.equationButton.tooltip",
                            defaultMessage: "Create equation"
                        })), r.createElement("div", null, r.createElement(c.a, {
                            style: e.keyboardShortcut,
                            name: "openEquationMenu"
                        })))
                    }, this.handleButtonPopupClick = e => {
                        const {
                            onClick: t
                        } = this.props;
                        i.b({
                            environment: this.environment,
                            analyticsFrom: "rich_text_menu"
                        }), t && t(e)
                    }, this.isSelected = () => Object(l.b)(a.b.Equation), this.isDisabled = () => {
                        const {
                            disabled: e
                        } = this.props;
                        if (e) return !0;
                        if ("editing" !== u.default.state.mode && !o.a.isOpen()) return !0;
                        const t = {
                            [a.b.User]: a.b.User,
                            [a.b.Page]: a.b.Page,
                            [a.b.Bot]: a.b.Bot,
                            [a.b.Date]: a.b.Date,
                            [a.b.TemporaryPage]: a.b.TemporaryPage
                        };
                        for (const s of Object.values(t))
                            if (Object(l.o)(s)) return !0;
                        return !1
                    }, this.styles = {
                        equationButton: {
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 0,
                            paddingLeft: 7,
                            paddingRight: 8
                        }
                    }
                }
                renderComponent() {
                    const {
                        style: e,
                        children: t
                    } = this.props, s = this.getThemeColors(), a = this.isDisabled();
                    return r.createElement(p.a, {
                        renderTooltip: this.renderMenuTooltip,
                        render: i => r.createElement(n.a, Object.assign({
                            style: h({}, this.styles.equationButton, {}, s.equationButton, {}, e),
                            disabled: a,
                            disabledFeedback: a,
                            onClick: this.handleButtonPopupClick
                        }, i), t)
                    })
                }
                getThemeColors() {
                    return {
                        equationButton: {
                            color: this.isSelected() ? this.theme.blueColor : this.theme.regularTextColor
                        },
                        keyboardShortcut: {
                            color: this.theme.mediumInvertedTextColor
                        }
                    }
                }
            }
            t.a = Object(d.injectIntl)(f)
        },
        y4kc: function(e, t, s) {
            "use strict";
            s("ioFf"), s("rGqo");
            var r = s("q1tI"),
                a = s("gRnv"),
                n = s("wldR"),
                i = s("LeVO"),
                o = s("TDb4"),
                l = s("mF3+"),
                d = s("y6Dp"),
                c = s("DNgp"),
                m = s("MeYt"),
                p = s("J9+s");

            function u(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, r)
                }
                return s
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(s), !0).forEach((function(t) {
                        h(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : u(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function h(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class b extends n.a {
                constructor() {
                    super(...arguments), this.handleClick = e => {
                        const t = c.default.state;
                        if ("editing" === t.mode) {
                            const e = t.store;
                            a.e({
                                environment: this.environment,
                                textStore: e,
                                blockStore: this.props.blockStore,
                                selection: t.selection
                            })
                        }
                        d.ae(this.environment, {
                            action: "comment"
                        })
                    }
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, t = e.isMobile;
                    return r.createElement(i.a, {
                        renderTooltip: () => r.createElement(r.Fragment, null, r.createElement("div", null, r.createElement(p.FormattedMessage, {
                            defaultMessage: "Comment on selected text",
                            id: "inlineCommentButton.tooltip"
                        })), r.createElement("div", null, r.createElement(o.a, {
                            style: {
                                color: this.theme.mediumInvertedTextColor
                            },
                            name: "comment"
                        }))),
                        render: e => r.createElement(m.a, Object.assign({
                            style: g({
                                display: "flex",
                                alignItems: "center",
                                padding: "0 8px",
                                whiteSpace: "nowrap"
                            }, this.props.style),
                            disabled: this.props.disabled,
                            disabledFeedback: this.props.disabled,
                            onClick: this.handleClick
                        }, e), l.a.speechBubbleThin({
                            width: t ? 18 : 16,
                            height: t ? 18 : 16,
                            marginTop: t ? 0 : 1,
                            marginRight: 4
                        }), !t && r.createElement(p.FormattedMessage, {
                            defaultMessage: "Comment",
                            id: "inlineCommentButton.commentLabel"
                        }))
                    })
                }
            }
            t.a = b
        }
    }
]);