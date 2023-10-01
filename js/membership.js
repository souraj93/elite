!function(a) {
    "use strict";
    a(document).ready(function() {
        c.init()
    });
    var c = {
        init: function() {
            this.holder = a("#qodef-membership-login-modal"),
            this.holder.length && (c.triggerShowModal(this.holder),
            c.initTabs(this.holder),
            c.triggerRegisterLink(this.holder),
            c.triggerLoginLink(this.holder),
            c.triggerResetPasswordLink(this.holder),
            c.triggerFormSubmit(this.holder),
            c.triggerFormSocialSubmit(this.holder))
        },
        triggerShowModal: function(o) {
            o.children(".qodef-membership-login-modal-overlay").on("click", function() {
                c.hideModal(o)
            }),
            o.find(".qodef-membership-login-modal-content .qodef-modal-close").on("click", function(e) {
                e.preventDefault(),
                c.hideModal(o)
            }),
            a(window).on("keyup", function(e) {
                27 === e.keyCode && c.hideModal(o)
            }),
            a(document.body).on("newhome_membership_trigger_login_modal", function() {
                c.showModal(o)
            })
        },
        showModal: function(e) {
            e.hasClass("qodef--opened") || e.addClass("qodef--opened")
        },
        hideModal: function(e) {
            e.hasClass("qodef--opened") && e.removeClass("qodef--opened")
        },
        initTabs: function(e) {
            e.children(".qodef-membership-login-modal-content").tabs()
        },
        triggerRegisterLink: function(o) {
            o.find(".qodef-membership-login-modal-content .qodef-m-links-register").on("click", function(e) {
                e.preventDefault();
                e = o.find(".qodef-membership-login-modal-navigation .qodef-m-navigation-item.qodef--register");
                e.length && e.find(".qodef-e-link").trigger("click")
            })
        },
        triggerLoginLink: function(o) {
            o.find(".qodef-membership-login-modal-content .qodef-m-links-login").on("click", function(e) {
                e.preventDefault();
                e = o.find(".qodef-membership-login-modal-navigation .qodef-m-navigation-item.qodef--login");
                e.length && e.find(".qodef-e-link").trigger("click")
            })
        },
        triggerResetPasswordLink: function(o) {
            o.find(".qodef-membership-login-modal-content .qodef-m-links-reset-password").on("click", function(e) {
                e.preventDefault();
                e = o.find(".qodef-membership-login-modal-navigation .qodef-m-navigation-item.qodef--reset-password");
                e.length && e.find(".qodef-e-link").trigger("click")
            })
        },
        triggerFormSubmit: function(e) {
            e = e.find("form");
            e.length && e.each(function() {
                var o = a(this);
                o.on("submit", function(e) {
                    e.preventDefault(),
                    o.hasClass("qodef--loading") || c.triggerRequest(o)
                })
            })
        },
        triggerFormSocialSubmit: function(e) {
            var o = e.find('form[id*="qodef-membership-login"]');
            o.length && o.find(".qodef-m-social-login").find(".qodef-m-social-login-btn").on("click", function(e) {
                e.preventDefault(),
                a(document).trigger("newhome_membership_social_login_is_triggered", [c, o, a(this).data("social")])
            })
        },
        triggerRequest: function(o, e, i) {
            o.addClass("qodef--loading");
            var n = o.find(".qodef-m-response")
              , t = o.find(".qodef-m-request-type").val()
              , s = (n.removeClass("qodef--success qodef--error qodef--undefined").empty(),
            {
                options: {
                    request_type: t,
                    redirect: o.find(".qodef-m-redirect").val(),
                    private_key: "false"
                },
                nonce: o.find("#newhome-membership-ajax-" + t + "-nonce").val()
            })
              , r = "POST"
              , d = qodefGlobal.vars.loginModalRestRoute;
            switch (t) {
            case "login":
                r = "GET",
                d = qodefGlobal.vars.loginModalGetRestRoute,
                s.options.user_login = o.find(".qodef-m-user-name").val(),
                s.options.user_password = o.find(".qodef-m-user-password").val(),
                s.options.remember = o.find(".qodef-m-links-remember:checked").length,
                null != e && (s.options.social_login = e,
                null != i) && (s.options.social_response = i);
                break;
            case "register":
                s.options.user_login = o.find(".qodef-m-user-name").val(),
                s.options.user_email = o.find(".qodef-m-user-email").val(),
                s.options.user_password = o.find(".qodef-m-user-password").val(),
                s.options.user_confirm_password = o.find(".qodef-m-user-confirm-password").val();
                var l = o.find(".qodef-m-user-role");
                l.length && (s.options.user_role = l.val());
                break;
            case "reset-password":
                s.options.user_login = o.find(".qodef-m-user-login").val()
            }
            return a.ajax({
                type: r,
                url: qodefGlobal.vars.restUrl + d,
                data: s,
                success: function(e) {
                    n.addClass("qodef--" + e.status).html(e.message),
                    "success" === e.status && ("register" !== t || s.options.hasOwnProperty("social_login") ? c.triggerRedirection(e.redirect) : c.triggerForceLogin(o, s, e.redirect))
                },
                complete: function() {
                    o.removeClass("qodef--loading")
                }
            }),
            !1
        },
        triggerRedirection: function(e) {
            "" !== e && e !== window.location && (window.location = e)
        },
        triggerForceLogin: function(e, o, i) {
            o.options.request_type = "login",
            o.nonce = e.parent().find("#newhome-membership-ajax-login-nonce").val(),
            a.ajax({
                type: "GET",
                url: qodefGlobal.vars.restUrl + qodefGlobal.vars.loginModalGetRestRoute,
                data: o,
                dataType: "json",
                success: function(e) {
                    "success" === e.status && c.triggerRedirection(i)
                }
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        o.init()
    }),
    e(window).on("resize", function() {
        o.check()
    });
    var o = {
        init: function() {
            this.holder = e("#qodef-membership-user-dashboard"),
            this.holder.length && o.mobileOpener(this.holder)
        },
        check: function() {
            this.holder = e("#qodef-membership-user-dashboard"),
            this.holder.length && o.mobileOpener(this.holder, !0)
        },
        mobileOpener: function(o, e=!1) {
            var i = o.find(".qodef-m-navigation-items");
            e || o.find(".qodef-m-mobile-opener-icon").on("click", function(e) {
                e.preventDefault(),
                o.toggleClass("qodef--opened"),
                i.slideToggle()
            }),
            1024 < qodef.windowWidth && e && !i.is(":visible") && (o.removeClass("qodef--opened"),
            i[0].style.display = "")
        }
    }
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            this.holder = o(".qodef-login-opener-widget"),
            this.holder.length && this.holder.each(function() {
                e.triggerClick(o(this))
            })
        },
        triggerClick: function(e) {
            e.find(".qodef-login-opener").on("click", function(e) {
                e.preventDefault(),
                o(document.body).trigger("newhome_membership_trigger_login_modal")
            })
        }
    }
}(jQuery),
function(e, o, i) {
    var n = e.getElementsByTagName(o)[0];
    e.getElementById(i) || ((e = e.createElement(o)).id = i,
    e.src = "https://connect.facebook.net/en_US/sdk.js",
    n.parentNode.insertBefore(e, n))
}(document, "script", "facebook-jssdk"),
function(e) {
    "use strict";
    e(document).ready(function() {
        t.init()
    }),
    e(document).on("newhome_membership_social_login_is_triggered", function(e, o, i, n) {
        t.fbIsAppIdSet() && "facebook" === n && t.fbLogin(o, i, n)
    });
    var t = {
        init: function() {
            t.fbIsAppIdSet() && t.fbAsyncInit(newhomeMembershipGlobal.facebookAppId)
        },
        fbIsAppIdSet: function() {
            return void 0 !== newhomeMembershipGlobal.facebookAppId && "" !== newhomeMembershipGlobal.facebookAppId
        },
        fbAsyncInit: function(e) {
            "" !== e && (window.fbAsyncInit = function() {
                FB.init({
                    appId: e,
                    autoLogAppEvents: !0,
                    cookie: !0,
                    xfbml: !0,
                    version: "v5.0"
                }),
                window.FB = FB
            }
            )
        },
        fbLogin: function(o, i, n) {
            window.FB.login(function(e) {
                t.fbCheckStatus(e, o, i, n)
            }, {
                scope: "email, public_profile"
            })
        },
        fbCheckStatus: function(e, o, i, n) {
            "connected" === e.status ? t.fbGetUserData(o, i, n) : "not_authorized" === e.status ? console.log("Please log into this app") : console.log("Please log into Facebook")
        },
        fbGetUserData: function(o, i, n) {
            FB.api("/me", "GET", {
                fields: "id, name, email, link, picture"
            }, function(e) {
                e.image = e.picture.data.url,
                i.hasClass("qodef--loading") || o.triggerRequest(i, n, e)
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    e(document).on("ready", function() {
        t.init()
    }),
    e(document).on("newhome_membership_social_login_is_triggered", function(e, o, i, n) {
        t.isAppIdSet() && "google" === n && t.login(o, i, n)
    });
    var t = {
        init: function() {
            t.isAppIdSet() && t.asyncInit(newhomeMembershipGlobal.googleAppId)
        },
        isAppIdSet: function() {
            return void 0 !== newhomeMembershipGlobal.googleAppId && "" !== newhomeMembershipGlobal.googleAppId
        },
        asyncInit: function(e) {
            "" !== e && google.accounts.id.initialize({
                client_id: e
            })
        },
        login: function(o, i, n) {
            google.accounts.oauth2.initTokenClient({
                client_id: newhomeMembershipGlobal.googleAppId,
                scope: "https://www.googleapis.com/auth/userinfo.profile",
                prompt: "",
                callback: function(e) {
                    t.signIn(e, o, i, n)
                }
            }).requestAccessToken()
        },
        signIn: function(e, o, i, n) {
            e && e.access_token && (e = "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos&access_token=" + encodeURIComponent(e.access_token),
            fetch(e).then(function(e) {
                return e.text()
            }).then(function(e) {
                e && e.length && t.getUserData(e, o, i, n)
            }))
        },
        getUserData: function(e, o, i, n) {
            e && (e = {
                id: (e = JSON.parse(e))?.resourceName.replace(/[A-Za-z\\/]/g, ""),
                name: e?.names[0]?.displayName,
                email: e?.emailAddresses[0]?.value,
                image: e?.photos[0]?.url
            },
            i.hasClass("qodef--loading") || o.triggerRequest(i, n, e))
        }
    }
}(jQuery),
function() {
    "use strict";
    jQuery(document).on("newhome_membership_social_login_is_triggered", function(e, o, i, n) {
        "twitter" === n && t.triggerRequest(o, i, n)
    });
    var t = {
        triggerRequest: function(e, o, i) {
            o.hasClass("qodef--loading") || e.triggerRequest(o, i)
        }
    }
}();
