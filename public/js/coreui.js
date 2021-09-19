/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/coreUI/js/coreui.bundle.min.js":
/*!**************************************************!*\
  !*** ./resources/coreUI/js/coreui.bundle.min.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * CoreUI v3.4.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  function t(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function e(e, n, i) {
    return n && t(e.prototype, n), i && t(e, i), e;
  }

  function n(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function i(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2 ? i(Object(o), !0).forEach(function (e) {
        n(t, e, o[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }

    return t;
  }

  var r,
      s,
      a,
      l,
      c = "transitionend",
      u = function u(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      f = function f(t) {
    var e = t.getAttribute("data-target");

    if (!e || "#" === e) {
      var n = t.getAttribute("href");
      e = n && "#" !== n ? n.trim() : null;
    }

    return e;
  },
      h = function h(t) {
    var e = f(t);
    return e && document.querySelector(e) ? e : null;
  },
      d = function d(t) {
    var e = f(t);
    return e ? document.querySelector(e) : null;
  },
      p = function p(t) {
    if (!t) return 0;
    var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = parseFloat(n),
        r = parseFloat(i);
    return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
  },
      g = function g(t) {
    t.dispatchEvent(new Event(c));
  },
      m = function m(t) {
    return (t[0] || t).nodeType;
  },
      v = function v(t, e) {
    var n = !1,
        i = e + 5;
    t.addEventListener(c, function e() {
      n = !0, t.removeEventListener(c, e);
    }), setTimeout(function () {
      n || g(t);
    }, i);
  },
      _ = function _(t, e, n) {
    Object.keys(n).forEach(function (i) {
      var o,
          r = n[i],
          s = e[i],
          a = s && m(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".');
    });
  },
      b = function b(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
      return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility;
    }

    return !1;
  },
      y = function t(e) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof e.getRootNode) {
      var n = e.getRootNode();
      return n instanceof ShadowRoot ? n : null;
    }

    return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
  },
      w = function w() {
    return function () {};
  },
      E = function E(t) {
    return t.offsetHeight;
  },
      L = function L() {
    var t = window.jQuery;
    return t && !document.body.hasAttribute("data-no-jquery") ? t : null;
  },
      T = (r = {}, s = 1, {
    set: function set(t, e, n) {
      "undefined" == typeof t.key && (t.key = {
        key: e,
        id: s
      }, s++), r[t.key.id] = n;
    },
    get: function get(t, e) {
      if (!t || "undefined" == typeof t.key) return null;
      var n = t.key;
      return n.key === e ? r[n.id] : null;
    },
    "delete": function _delete(t, e) {
      if ("undefined" != typeof t.key) {
        var n = t.key;
        n.key === e && (delete r[n.id], delete t.key);
      }
    }
  }),
      k = function k(t, e, n) {
    T.set(t, e, n);
  },
      O = function O(t, e) {
    return T.get(t, e);
  },
      C = function C(t, e) {
    T["delete"](t, e);
  },
      S = Element.prototype.querySelectorAll,
      A = Element.prototype.querySelector,
      x = (a = new CustomEvent("Bootstrap", {
    cancelable: !0
  }), (l = document.createElement("div")).addEventListener("Bootstrap", function () {
    return null;
  }), a.preventDefault(), l.dispatchEvent(a), a.defaultPrevented),
      D = /:scope\b/;

  (function () {
    var t = document.createElement("div");

    try {
      t.querySelectorAll(":scope *");
    } catch (t) {
      return !1;
    }

    return !0;
  })() || (S = function S(t) {
    if (!D.test(t)) return this.querySelectorAll(t);
    var e = Boolean(this.id);
    e || (this.id = u("scope"));
    var n = null;

    try {
      t = t.replace(D, "#" + this.id), n = this.querySelectorAll(t);
    } finally {
      e || this.removeAttribute("id");
    }

    return n;
  }, A = function A(t) {
    if (!D.test(t)) return this.querySelector(t);
    var e = S.call(this, t);
    return "undefined" != typeof e[0] ? e[0] : null;
  });
  var j = L(),
      N = /[^.]*(?=\..*)\.|.*/,
      I = /\..*/,
      P = /::\d+$/,
      R = {},
      M = 1,
      H = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      W = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

  function Y(t, e) {
    return e && e + "::" + M++ || t.uidEvent || M++;
  }

  function X(t) {
    var e = Y(t);
    return t.uidEvent = e, R[e] = R[e] || {}, R[e];
  }

  function B(t, e, n) {
    void 0 === n && (n = null);

    for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
      var s = t[i[o]];
      if (s.originalHandler === e && s.delegationSelector === n) return s;
    }

    return null;
  }

  function U(t, e, n) {
    var i = "string" == typeof e,
        o = i ? n : e,
        r = t.replace(I, ""),
        s = H[r];
    return s && (r = s), W.indexOf(r) > -1 || (r = t), [i, o, r];
  }

  function q(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || (n = i, i = null);
      var r = U(e, n, i),
          s = r[0],
          a = r[1],
          l = r[2],
          c = X(t),
          u = c[l] || (c[l] = {}),
          f = B(u, a, s ? n : null);
      if (f) f.oneOff = f.oneOff && o;else {
        var h = Y(a, e.replace(N, "")),
            d = s ? function (t, e, n) {
          return function i(o) {
            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode) {
              for (var a = r.length; a--;) {
                if (r[a] === s) return o.delegateTarget = s, i.oneOff && F.off(t, o.type, n), n.apply(s, [o]);
              }
            }

            return null;
          };
        }(t, n, i) : function (t, e) {
          return function n(i) {
            return i.delegateTarget = t, n.oneOff && F.off(t, i.type, e), e.apply(t, [i]);
          };
        }(t, n);
        d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = o, d.uidEvent = h, u[h] = d, t.addEventListener(l, d, s);
      }
    }
  }

  function Q(t, e, n, i, o) {
    var r = B(e[n], i, o);
    r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]);
  }

  var F = {
    on: function on(t, e, n, i) {
      q(t, e, n, i, !1);
    },
    one: function one(t, e, n, i) {
      q(t, e, n, i, !0);
    },
    off: function off(t, e, n, i) {
      if ("string" == typeof e && t) {
        var o = U(e, n, i),
            r = o[0],
            s = o[1],
            a = o[2],
            l = a !== e,
            c = X(t),
            u = "." === e.charAt(0);

        if ("undefined" == typeof s) {
          u && Object.keys(c).forEach(function (n) {
            !function (t, e, n, i) {
              var o = e[n] || {};
              Object.keys(o).forEach(function (r) {
                if (r.indexOf(i) > -1) {
                  var s = o[r];
                  Q(t, e, n, s.originalHandler, s.delegationSelector);
                }
              });
            }(t, c, n, e.slice(1));
          });
          var f = c[a] || {};
          Object.keys(f).forEach(function (n) {
            var i = n.replace(P, "");

            if (!l || e.indexOf(i) > -1) {
              var o = f[n];
              Q(t, c, a, o.originalHandler, o.delegationSelector);
            }
          });
        } else {
          if (!c || !c[a]) return;
          Q(t, c, a, s, r ? n : null);
        }
      }
    },
    trigger: function trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      var i,
          o = e.replace(I, ""),
          r = e !== o,
          s = W.indexOf(o) > -1,
          a = !0,
          l = !0,
          c = !1,
          u = null;
      return r && j && (i = j.Event(e, n), j(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(e, {
        bubbles: a,
        cancelable: !0
      }), "undefined" != typeof n && Object.keys(n).forEach(function (t) {
        Object.defineProperty(u, t, {
          get: function get() {
            return n[t];
          }
        });
      }), c && (u.preventDefault(), x || Object.defineProperty(u, "defaultPrevented", {
        get: function get() {
          return !0;
        }
      })), l && t.dispatchEvent(u), u.defaultPrevented && "undefined" != typeof i && i.preventDefault(), u;
    }
  },
      V = "asyncLoad",
      z = "coreui.asyncLoad",
      K = "c-active",
      $ = "c-show",
      G = ".c-sidebar-nav-dropdown",
      J = ".c-xhr-link, .c-sidebar-nav-link",
      Z = {
    defaultPage: "main.html",
    errorPage: "404.html",
    subpagesDirectory: "views/"
  },
      tt = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t;
      var n = location.hash.replace(/^#/, "");
      "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage), this._addEventListeners();
    }

    var n = t.prototype;
    return n._getConfig = function (t) {
      return t = o(o({}, Z), t);
    }, n._loadPage = function (t) {
      var e = this,
          n = this._element,
          i = this._config,
          o = function t(n, i) {
        void 0 === i && (i = 0);
        var o = document.createElement("script");
        o.type = "text/javascript", o.src = n[i], o.className = "view-script", o.onload = o.onreadystatechange = function () {
          e.readyState && "complete" !== e.readyState || n.length > i + 1 && t(n, i + 1);
        }, document.getElementsByTagName("body")[0].appendChild(o);
      },
          r = new XMLHttpRequest();

      r.open("GET", i.subpagesDirectory + t);
      var s = new CustomEvent("xhr", {
        detail: {
          url: t,
          status: r.status
        }
      });
      n.dispatchEvent(s), r.onload = function (e) {
        if (200 === r.status) {
          s = new CustomEvent("xhr", {
            detail: {
              url: t,
              status: r.status
            }
          }), n.dispatchEvent(s);
          var a = document.createElement("div");
          a.innerHTML = e.target.response;
          var l = Array.from(a.querySelectorAll("script")).map(function (t) {
            return t.attributes.getNamedItem("src").nodeValue;
          });
          a.querySelectorAll("script").forEach(function (t) {
            return t.remove(t);
          }), window.scrollTo(0, 0), n.innerHTML = "", n.appendChild(a), (c = document.querySelectorAll(".view-script")).length && c.forEach(function (t) {
            t.remove();
          }), l.length && o(l), window.location.hash = t;
        } else window.location.href = i.errorPage;

        var c;
      }, r.send();
    }, n._setUpUrl = function (t) {
      t = t.replace(/^\//, "").split("?")[0], Array.from(document.querySelectorAll(J)).forEach(function (t) {
        t.classList.remove(K);
      }), Array.from(document.querySelectorAll(J)).forEach(function (t) {
        t.classList.remove(K);
      }), Array.from(document.querySelectorAll(G)).forEach(function (t) {
        t.classList.remove($);
      }), Array.from(document.querySelectorAll(G)).forEach(function (e) {
        Array.from(e.querySelectorAll('a[href*="' + t + '"]')).length > 0 && e.classList.add($);
      }), Array.from(document.querySelectorAll('.c-sidebar-nav-item a[href*="' + t + '"]')).forEach(function (t) {
        t.classList.add(K);
      }), this._loadPage(t);
    }, n._loadBlank = function (t) {
      window.open(t);
    }, n._loadTop = function (t) {
      window.location = t;
    }, n._update = function (t) {
      "#" !== t.href && ("undefined" != typeof t.dataset.toggle && "null" !== t.dataset.toggle || ("_top" === t.target ? this._loadTop(t.href) : "_blank" === t.target ? this._loadBlank(t.href) : this._setUpUrl(t.getAttribute("href"))));
    }, n._addEventListeners = function () {
      var t = this;
      F.on(document, "click.coreui.asyncLoad.data-api", J, function (e) {
        e.preventDefault();
        var n = e.target;
        n.classList.contains("c-sidebar-nav-link") || (n = n.closest(J)), n.classList.contains("c-sidebar-nav-dropdown-toggle") || "#" === n.getAttribute("href") || t._update(n);
      });
    }, t._asyncLoadInterface = function (e, n) {
      var i = O(e, z);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t._asyncLoadInterface(this, e);
      });
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Z;
      }
    }]), t;
  }(),
      et = L();

  if (et) {
    var nt = et.fn[V];
    et.fn[V] = tt.jQueryInterface, et.fn[V].Constructor = tt, et.fn[V].noConflict = function () {
      return et.fn[V] = nt, tt.jQueryInterface;
    };
  }

  var it = "coreui.alert",
      ot = function () {
    function t(t) {
      this._element = t, this._element && k(t, it, this);
    }

    var n = t.prototype;
    return n.close = function (t) {
      var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);

      null === n || n.defaultPrevented || this._removeElement(e);
    }, n.dispose = function () {
      C(this._element, it), this._element = null;
    }, n._getRootElement = function (t) {
      return d(t) || t.closest(".alert");
    }, n._triggerCloseEvent = function (t) {
      return F.trigger(t, "close.coreui.alert");
    }, n._removeElement = function (t) {
      var e = this;

      if (t.classList.remove("show"), t.classList.contains("fade")) {
        var n = p(t);
        F.one(t, c, function () {
          return e._destroyElement(t);
        }), v(t, n);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      t.parentNode && t.parentNode.removeChild(t), F.trigger(t, "closed.coreui.alert");
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, it);
        n || (n = new t(this)), "close" === e && n[e](this);
      });
    }, t.handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, t.getInstance = function (t) {
      return O(t, it);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  F.on(document, "click.coreui.alert.data-api", '[data-dismiss="alert"]', ot.handleDismiss(new ot()));
  var rt = L();

  if (rt) {
    var st = rt.fn.alert;
    rt.fn.alert = ot.jQueryInterface, rt.fn.alert.Constructor = ot, rt.fn.alert.noConflict = function () {
      return rt.fn.alert = st, ot.jQueryInterface;
    };
  }

  var at = {
    matches: function matches(t, e) {
      return t.matches(e);
    },
    find: function find(t, e) {
      var n;
      return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, S.call(e, t));
    },
    findOne: function findOne(t, e) {
      return void 0 === e && (e = document.documentElement), A.call(e, t);
    },
    children: function children(t, e) {
      var n,
          i = (n = []).concat.apply(n, t.children);
      return i.filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
        this.matches(i, e) && n.push(i), i = i.parentNode;
      }

      return n;
    },
    prev: function prev(t, e) {
      for (var n = t.previousElementSibling; n;) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      for (var n = t.nextElementSibling; n;) {
        if (this.matches(n, e)) return [n];
        n = n.nextElementSibling;
      }

      return [];
    }
  },
      lt = "coreui.button",
      ct = "active",
      ut = "disabled",
      ft = "focus",
      ht = '[data-toggle^="button"]',
      dt = ".btn",
      pt = function () {
    function t(t) {
      this._element = t, k(t, lt, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      var t = !0,
          e = !0,
          n = this._element.closest('[data-toggle="buttons"]');

      if (n) {
        var i = at.findOne('input:not([type="hidden"])', this._element);

        if (i && "radio" === i.type) {
          if (i.checked && this._element.classList.contains(ct)) t = !1;else {
            var o = at.findOne(".active", n);
            o && o.classList.remove(ct);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains(ut) || n.classList.contains(ut)) return;
            i.checked = !this._element.classList.contains(ct), F.trigger(i, "change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ct)), t && this._element.classList.toggle(ct);
    }, n.dispose = function () {
      C(this._element, lt), this._element = null;
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, lt);
        n || (n = new t(this)), "toggle" === e && n[e]();
      });
    }, t.getInstance = function (t) {
      return O(t, lt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  F.on(document, "click.coreui.button.data-api", ht, function (t) {
    t.preventDefault();
    var e = t.target.closest(dt),
        n = O(e, lt);
    n || (n = new pt(e)), n.toggle();
  }), F.on(document, "focus.coreui.button.data-api", ht, function (t) {
    var e = t.target.closest(dt);
    e && e.classList.add(ft);
  }), F.on(document, "blur.coreui.button.data-api", ht, function (t) {
    var e = t.target.closest(dt);
    e && e.classList.remove(ft);
  });
  var gt = L();

  if (gt) {
    var mt = gt.fn.button;
    gt.fn.button = pt.jQueryInterface, gt.fn.button.Constructor = pt, gt.fn.button.noConflict = function () {
      return gt.fn.button = mt, pt.jQueryInterface;
    };
  }

  function vt(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function _t(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var bt = {
    setDataAttribute: function setDataAttribute(t, e, n) {
      t.setAttribute("data-" + _t(e), n);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-" + _t(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = o({}, t.dataset);
      return Object.keys(e).forEach(function (t) {
        e[t] = vt(e[t]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return vt(t.getAttribute("data-" + _t(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    },
    toggleClass: function toggleClass(t, e) {
      t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e));
    }
  },
      yt = "carousel",
      wt = "coreui.carousel",
      Et = "." + wt,
      Lt = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Tt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      kt = "next",
      Ot = "prev",
      Ct = "slid" + Et,
      St = "active",
      At = ".active.carousel-item",
      xt = {
    TOUCH: "touch",
    PEN: "pen"
  },
      Dt = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = at.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), k(t, wt, this);
    }

    var n = t.prototype;
    return n.next = function () {
      this._isSliding || this._slide(kt);
    }, n.nextWhenVisible = function () {
      !document.hidden && b(this._element) && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(Ot);
    }, n.pause = function (t) {
      t || (this._isPaused = !0), at.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (g(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var e = this;
      this._activeElement = at.findOne(At, this._element);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) F.one(this._element, Ct, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = t > n ? kt : Ot;

        this._slide(i, this._items[t]);
      }
    }, n.dispose = function () {
      F.off(this._element, Et), C(this._element, wt), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = o(o({}, Lt), t), _(yt, t, Tt), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var t = this;
      this._config.keyboard && F.on(this._element, "keydown.coreui.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (F.on(this._element, "mouseenter.coreui.carousel", function (e) {
        return t.pause(e);
      }), F.on(this._element, "mouseleave.coreui.carousel", function (e) {
        return t.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this,
          e = function e(_e2) {
        t._pointerEvent && xt[_e2.pointerType.toUpperCase()] ? t.touchStartX = _e2.clientX : t._pointerEvent || (t.touchStartX = _e2.touches[0].clientX);
      },
          n = function n(e) {
        t._pointerEvent && xt[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval));
      };

      at.find(".carousel-item img", this._element).forEach(function (t) {
        F.on(t, "dragstart.coreui.carousel", function (t) {
          return t.preventDefault();
        });
      }), this._pointerEvent ? (F.on(this._element, "pointerdown.coreui.carousel", function (t) {
        return e(t);
      }), F.on(this._element, "pointerup.coreui.carousel", function (t) {
        return n(t);
      }), this._element.classList.add("pointer-event")) : (F.on(this._element, "touchstart.coreui.carousel", function (t) {
        return e(t);
      }), F.on(this._element, "touchmove.coreui.carousel", function (e) {
        return function (e) {
          e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
        }(e);
      }), F.on(this._element, "touchend.coreui.carousel", function (t) {
        return n(t);
      }));
    }, n._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
        case "ArrowLeft":
          t.preventDefault(), this.prev();
          break;

        case "ArrowRight":
          t.preventDefault(), this.next();
      }
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? at.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = t === kt,
          i = t === Ot,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === Ot ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, n._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(at.findOne(At, this._element));

      return F.trigger(this._element, "slide.coreui.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        for (var e = at.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) {
          e[n].classList.remove(St);
        }

        var i = this._indicatorsElement.children[this._getItemIndex(t)];

        i && i.classList.add(St);
      }
    }, n._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = at.findOne(At, this._element),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          u = this._getItemIndex(l),
          f = Boolean(this._interval);

      if (t === kt ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && l.classList.contains(St)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
        if (this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains("slide")) {
          l.classList.add(i), E(l), s.classList.add(n), l.classList.add(n);
          var h = parseInt(l.getAttribute("data-interval"), 10);
          h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var d = p(s);
          F.one(s, c, function () {
            l.classList.remove(n, i), l.classList.add(St), s.classList.remove(St, i, n), r._isSliding = !1, setTimeout(function () {
              F.trigger(r._element, Ct, {
                relatedTarget: l,
                direction: o,
                from: a,
                to: u
              });
            }, 0);
          }), v(s, d);
        } else s.classList.remove(St), l.classList.add(St), this._isSliding = !1, F.trigger(this._element, Ct, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: u
        });

        f && this.cycle();
      }
    }, t.carouselInterface = function (e, n) {
      var i = O(e, wt),
          r = o(o({}, Lt), bt.getDataAttributes(e));
      "object" == _typeof(n) && (r = o(o({}, r), n));
      var s = "string" == typeof n ? n : r.slide;
      if (i || (i = new t(e, r)), "number" == typeof n) i.to(n);else if ("string" == typeof s) {
        if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
        i[s]();
      } else r.interval && r.ride && (i.pause(), i.cycle());
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.carouselInterface(this, e);
      });
    }, t.dataApiClickHandler = function (e) {
      var n = d(this);

      if (n && n.classList.contains("carousel")) {
        var i = o(o({}, bt.getDataAttributes(n)), bt.getDataAttributes(this)),
            r = this.getAttribute("data-slide-to");
        r && (i.interval = !1), t.carouselInterface(n, i), r && O(n, wt).to(r), e.preventDefault();
      }
    }, t.getInstance = function (t) {
      return O(t, wt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Lt;
      }
    }]), t;
  }();

  F.on(document, "click.coreui.carousel.data-api", "[data-slide], [data-slide-to]", Dt.dataApiClickHandler), F.on(window, "load.coreui.carousel.data-api", function () {
    for (var t = at.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) {
      Dt.carouselInterface(t[e], O(t[e], wt));
    }
  });
  var jt = L();

  if (jt) {
    var Nt = jt.fn[yt];
    jt.fn[yt] = Dt.jQueryInterface, jt.fn[yt].Constructor = Dt, jt.fn[yt].noConflict = function () {
      return jt.fn[yt] = Nt, Dt.jQueryInterface;
    };
  }

  var It = "class-toggler",
      Pt = "coreui.class-toggler",
      Rt = {
    addClass: "(null|array|string)",
    breakpoints: "(null|array|string)",
    removeClass: "(null|array|string)",
    responsive: "(null|boolean)",
    target: "(null|string)",
    toggleClass: "(null|array|string)"
  },
      Mt = {
    addClass: null,
    breakpoints: ["", "sm", "md", "lg", "xl"],
    removeClass: null,
    responsive: !1,
    target: "body",
    toggleClass: null
  },
      Ht = "classremoved",
      Wt = "classtoggle",
      Yt = ".c-class-toggler",
      Xt = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), k(t, Pt, this);
    }

    var n = t.prototype;
    return n.add = function () {
      var t = this,
          e = this._target();

      this._config.addClass.replace(/\s/g, "").split(",").forEach(function (n) {
        e.classList.add(n), t._customEvent("classadded", e, !0, n);
      });
    }, n.remove = function () {
      var t = this,
          e = this._target();

      this._config.removeClass.replace(/\s/g, "").split(",").forEach(function (n) {
        t._config.responsive ? t._updateResponsiveClassNames(n).forEach(function (n) {
          e.classList.remove(n), t._customEvent(Ht, e, !1, n);
        }) : (e.classList.remove(n), t._customEvent(Ht, e, !1, n));
      });
    }, n.toggle = function () {
      var t = this,
          e = this._target(),
          n = this._config.toggleClass.replace(/\s/g, "").split(",");

      this._config.responsive ? n.forEach(function (n) {
        t._updateResponsiveClassNames(n).filter(function (t) {
          return e.classList.contains(t);
        }).length ? t._updateResponsiveClassNames(n).forEach(function (n) {
          t._config.removeClass = n, t.remove(), t._customEvent(Wt, e, !1, n);
        }) : (t._config.addClass = n, t.add(), t._customEvent(Wt, e, !0, n));
      }) : n.forEach(function (n) {
        e.classList.contains(n) ? (t._config.removeClass = n, t.remove(), t._customEvent(Wt, e, !1, n)) : (t._config.addClass = n, t.add(), t._customEvent(Wt, e, !0, n));
      });
    }, n["class"] = function () {
      this._config.toggleClass = this._config["class"], this._element.getAttribute("responsive") && (this._config.responsive = this._element.getAttribute("responsive")), this.toggle();
    }, n._target = function () {
      return "body" === this._config.target ? document.querySelector(this._config.target) : "_parent" === this._config.target ? this._element.parentNode : document.querySelector(this._config.target);
    }, n._customEvent = function (t, e, n, i) {
      var o = new CustomEvent(t, {
        detail: {
          target: e,
          add: n,
          className: i
        }
      });
      e.dispatchEvent(o);
    }, n._breakpoint = function (t) {
      return this._config.breakpoints.filter(function (t) {
        return t.length > 0;
      }).filter(function (e) {
        return t.includes(e);
      })[0];
    }, n._breakpoints = function (t) {
      var e = this._config.breakpoints;
      return e.slice(0, e.indexOf(e.filter(function (t) {
        return t.length > 0;
      }).filter(function (e) {
        return t.includes(e);
      })[0]) + 1);
    }, n._updateResponsiveClassNames = function (t) {
      var e = this._breakpoint(t);

      return this._breakpoints(t).map(function (n) {
        return n.length > 0 ? t.replace(e, n) : t.replace("-" + e, n);
      });
    }, n._includesResponsiveClass = function (t) {
      var e = this;
      return this._updateResponsiveClassNames(t).filter(function (t) {
        return e._config.target.contains(t);
      });
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), bt.getDataAttributes(this._element)), t), _(It, t, this.constructor.DefaultType), t;
    }, t.classTogglerInterface = function (e, n) {
      var i = O(e, Pt);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.classTogglerInterface(this, e);
      });
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Mt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rt;
      }
    }]), t;
  }();

  F.on(document, "click.coreui.class-toggler.data-api", Yt, function (t) {
    t.preventDefault(), t.stopPropagation();
    var e = t.target;
    e.classList.contains("c-class-toggler") || (e = e.closest(Yt)), "undefined" != typeof e.dataset.addClass && Xt.classTogglerInterface(e, "add"), "undefined" != typeof e.dataset.removeClass && Xt.classTogglerInterface(e, "remove"), "undefined" != typeof e.dataset.toggleClass && Xt.classTogglerInterface(e, "toggle"), "undefined" != typeof e.dataset["class"] && Xt.classTogglerInterface(e, "class");
  });
  var Bt = L();

  if (Bt) {
    var Ut = Bt.fn[It];
    Bt.fn[It] = Xt.jQueryInterface, Bt.fn[It].Constructor = Xt, Bt.fn[It].noConflict = function () {
      return Bt.fn[It] = Ut, Xt.jQueryInterface;
    };
  }

  var qt = "collapse",
      Qt = "coreui.collapse",
      Ft = {
    toggle: !0,
    parent: ""
  },
      Vt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      zt = "show",
      Kt = "collapse",
      $t = "collapsing",
      Gt = "collapsed",
      Jt = "width",
      Zt = '[data-toggle="collapse"]',
      te = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = at.find(Zt + '[href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');

      for (var n = at.find(Zt), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = h(r),
            a = at.find(s).filter(function (e) {
          return e === t;
        });
        null !== s && a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), k(t, Qt, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      this._element.classList.contains(zt) ? this.hide() : this.show();
    }, n.show = function () {
      var e = this;

      if (!this._isTransitioning && !this._element.classList.contains(zt)) {
        var n, i;
        this._parent && 0 === (n = at.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains(Kt);
        })).length && (n = null);
        var o = at.findOne(this._selector);

        if (n) {
          var r = n.filter(function (t) {
            return o !== t;
          });
          if ((i = r[0] ? O(r[0], Qt) : null) && i._isTransitioning) return;
        }

        if (!F.trigger(this._element, "show.coreui.collapse").defaultPrevented) {
          n && n.forEach(function (e) {
            o !== e && t.collapseInterface(e, "hide"), i || k(e, Qt, null);
          });

          var s = this._getDimension();

          this._element.classList.remove(Kt), this._element.classList.add($t), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
            t.classList.remove(Gt), t.setAttribute("aria-expanded", !0);
          }), this.setTransitioning(!0);
          var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              l = p(this._element);
          F.one(this._element, c, function () {
            e._element.classList.remove($t), e._element.classList.add(Kt, zt), e._element.style[s] = "", e.setTransitioning(!1), F.trigger(e._element, "shown.coreui.collapse");
          }), v(this._element, l), this._element.style[s] = this._element[a] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;

      if (!this._isTransitioning && this._element.classList.contains(zt) && !F.trigger(this._element, "hide.coreui.collapse").defaultPrevented) {
        var e = this._getDimension();

        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", E(this._element), this._element.classList.add($t), this._element.classList.remove(Kt, zt);
        var n = this._triggerArray.length;
        if (n > 0) for (var i = 0; i < n; i++) {
          var o = this._triggerArray[i],
              r = d(o);
          r && !r.classList.contains(zt) && (o.classList.add(Gt), o.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0);
        this._element.style[e] = "";
        var s = p(this._element);
        F.one(this._element, c, function () {
          t.setTransitioning(!1), t._element.classList.remove($t), t._element.classList.add(Kt), F.trigger(t._element, "hidden.coreui.collapse");
        }), v(this._element, s);
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      C(this._element, Qt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = o(o({}, Ft), t)).toggle = Boolean(t.toggle), _(qt, t, Vt), t;
    }, n._getDimension = function () {
      return this._element.classList.contains(Jt) ? Jt : "height";
    }, n._getParent = function () {
      var t = this,
          e = this._config.parent;
      m(e) ? "undefined" == typeof e.jquery && "undefined" == typeof e[0] || (e = e[0]) : e = at.findOne(e);
      var n = Zt + '[data-parent="' + e + '"]';
      return at.find(n, e).forEach(function (e) {
        var n = d(e);

        t._addAriaAndCollapsedClass(n, [e]);
      }), e;
    }, n._addAriaAndCollapsedClass = function (t, e) {
      if (t && e.length) {
        var n = t.classList.contains(zt);
        e.forEach(function (t) {
          n ? t.classList.remove(Gt) : t.classList.add(Gt), t.setAttribute("aria-expanded", n);
        });
      }
    }, t.collapseInterface = function (e, n) {
      var i = O(e, Qt),
          r = o(o(o({}, Ft), bt.getDataAttributes(e)), "object" == _typeof(n) && n ? n : {});

      if (!i && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), i || (i = new t(e, r)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.collapseInterface(this, e);
      });
    }, t.getInstance = function (t) {
      return O(t, Qt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ft;
      }
    }]), t;
  }();

  F.on(document, "click.coreui.collapse.data-api", Zt, function (t) {
    "A" === t.target.tagName && t.preventDefault();
    var e = bt.getDataAttributes(this),
        n = h(this);
    at.find(n).forEach(function (t) {
      var n,
          i = O(t, Qt);
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, te.collapseInterface(t, n);
    });
  });
  var ee = L();

  if (ee) {
    var ne = ee.fn[qt];
    ee.fn[qt] = te.jQueryInterface, ee.fn[qt].Constructor = te, ee.fn[qt].noConflict = function () {
      return ee.fn[qt] = ne, te.jQueryInterface;
    };
  }

  var ie = "top",
      oe = "bottom",
      re = "right",
      se = "left",
      ae = "auto",
      le = [ie, oe, re, se],
      ce = "start",
      ue = "end",
      fe = "viewport",
      he = "popper",
      de = le.reduce(function (t, e) {
    return t.concat([e + "-" + ce, e + "-" + ue]);
  }, []),
      pe = [].concat(le, [ae]).reduce(function (t, e) {
    return t.concat([e, e + "-" + ce, e + "-" + ue]);
  }, []),
      ge = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function me(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ve(t) {
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function _e(t) {
    return t instanceof ve(t).Element || t instanceof Element;
  }

  function be(t) {
    return t instanceof ve(t).HTMLElement || t instanceof HTMLElement;
  }

  function ye(t) {
    return t.split("-")[0];
  }

  function we(t) {
    return {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  }

  function Ee(t, e) {
    var n,
        i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ((n = i) instanceof ve(n).ShadowRoot || n instanceof ShadowRoot)) {
      var o = e;

      do {
        if (o && t.isSameNode(o)) return !0;
        o = o.parentNode || o.host;
      } while (o);
    }

    return !1;
  }

  function Le(t) {
    return ve(t).getComputedStyle(t);
  }

  function Te(t) {
    return ["table", "td", "th"].indexOf(me(t)) >= 0;
  }

  function ke(t) {
    return ((_e(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Oe(t) {
    return "html" === me(t) ? t : t.assignedSlot || t.parentNode || t.host || ke(t);
  }

  function Ce(t) {
    if (!be(t) || "fixed" === Le(t).position) return null;
    var e = t.offsetParent;

    if (e) {
      var n = ke(e);
      if ("body" === me(e) && "static" === Le(e).position && "static" !== Le(n).position) return n;
    }

    return e;
  }

  function Se(t) {
    for (var e = ve(t), n = Ce(t); n && Te(n) && "static" === Le(n).position;) {
      n = Ce(n);
    }

    return n && "body" === me(n) && "static" === Le(n).position ? e : n || function (t) {
      for (var e = Oe(t); be(e) && ["html", "body"].indexOf(me(e)) < 0;) {
        var n = Le(e);
        if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
        e = e.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Ae(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function xe(t, e, n) {
    return Math.max(t, Math.min(e, n));
  }

  function De(t) {
    return Object.assign(Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), t);
  }

  function je(t, e) {
    return e.reduce(function (e, n) {
      return e[n] = t, e;
    }, {});
  }

  var Ne = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Ie(t) {
    var e,
        n = t.popper,
        i = t.popperRect,
        o = t.placement,
        r = t.offsets,
        s = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = function (t) {
      var e = t.x,
          n = t.y,
          i = window.devicePixelRatio || 1;
      return {
        x: Math.round(e * i) / i || 0,
        y: Math.round(n * i) / i || 0
      };
    }(r),
        u = c.x,
        f = c.y,
        h = r.hasOwnProperty("x"),
        d = r.hasOwnProperty("y"),
        p = se,
        g = ie,
        m = window;

    if (l) {
      var v = Se(n);
      v === ve(n) && (v = ke(n)), o === ie && (g = oe, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === se && (p = re, u -= v.clientWidth - i.width, u *= a ? 1 : -1);
    }

    var _,
        b = Object.assign({
      position: s
    }, l && Ne);

    return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = d ? "0" : "", _[p] = h ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = d ? f + "px" : "", e[p] = h ? u + "px" : "", e.transform = "", e));
  }

  var Pe = {
    passive: !0
  };
  var Re = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Me(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Re[t];
    });
  }

  var He = {
    start: "end",
    end: "start"
  };

  function We(t) {
    return t.replace(/start|end/g, function (t) {
      return He[t];
    });
  }

  function Ye(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function Xe(t) {
    var e = ve(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Be(t) {
    return Ye(ke(t)).left + Xe(t).scrollLeft;
  }

  function Ue(t) {
    var e = Le(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + i);
  }

  function qe(t) {
    return ["html", "body", "#document"].indexOf(me(t)) >= 0 ? t.ownerDocument.body : be(t) && Ue(t) ? t : qe(Oe(t));
  }

  function Qe(t, e) {
    void 0 === e && (e = []);
    var n = qe(t),
        i = "body" === me(n),
        o = ve(n),
        r = i ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
        s = e.concat(r);
    return i ? s : s.concat(Qe(Oe(r)));
  }

  function Fe(t) {
    return Object.assign(Object.assign({}, t), {}, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Ve(t, e) {
    return e === fe ? Fe(function (t) {
      var e = ve(t),
          n = ke(t),
          i = e.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          s = 0,
          a = 0;
      return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
        width: o,
        height: r,
        x: s + Be(t),
        y: a
      };
    }(t)) : be(e) ? function (t) {
      var e = Ye(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Fe(function (t) {
      var e = ke(t),
          n = Xe(t),
          i = t.ownerDocument.body,
          o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
          r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
          s = -n.scrollLeft + Be(t),
          a = -n.scrollTop;
      return "rtl" === Le(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: s,
        y: a
      };
    }(ke(t)));
  }

  function ze(t, e, n) {
    var i = "clippingParents" === e ? function (t) {
      var e = Qe(Oe(t)),
          n = ["absolute", "fixed"].indexOf(Le(t).position) >= 0 && be(t) ? Se(t) : t;
      return _e(n) ? e.filter(function (t) {
        return _e(t) && Ee(t, n) && "body" !== me(t);
      }) : [];
    }(t) : [].concat(e),
        o = [].concat(i, [n]),
        r = o[0],
        s = o.reduce(function (e, n) {
      var i = Ve(t, n);
      return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e;
    }, Ve(t, r));
    return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
  }

  function Ke(t) {
    return t.split("-")[1];
  }

  function $e(t) {
    var e,
        n = t.reference,
        i = t.element,
        o = t.placement,
        r = o ? ye(o) : null,
        s = o ? Ke(o) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;

    switch (r) {
      case ie:
        e = {
          x: a,
          y: n.y - i.height
        };
        break;

      case oe:
        e = {
          x: a,
          y: n.y + n.height
        };
        break;

      case re:
        e = {
          x: n.x + n.width,
          y: l
        };
        break;

      case se:
        e = {
          x: n.x - i.width,
          y: l
        };
        break;

      default:
        e = {
          x: n.x,
          y: n.y
        };
    }

    var c = r ? Ae(r) : null;

    if (null != c) {
      var u = "y" === c ? "height" : "width";

      switch (s) {
        case ce:
          e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
          break;

        case ue:
          e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2);
      }
    }

    return e;
  }

  function Ge(t, e) {
    void 0 === e && (e = {});
    var n = e,
        i = n.placement,
        o = void 0 === i ? t.placement : i,
        r = n.boundary,
        s = void 0 === r ? "clippingParents" : r,
        a = n.rootBoundary,
        l = void 0 === a ? fe : a,
        c = n.elementContext,
        u = void 0 === c ? he : c,
        f = n.altBoundary,
        h = void 0 !== f && f,
        d = n.padding,
        p = void 0 === d ? 0 : d,
        g = De("number" != typeof p ? p : je(p, le)),
        m = u === he ? "reference" : he,
        v = t.elements.reference,
        _ = t.rects.popper,
        b = t.elements[h ? m : u],
        y = ze(_e(b) ? b : b.contextElement || ke(t.elements.popper), s, l),
        w = Ye(v),
        E = $e({
      reference: w,
      element: _,
      strategy: "absolute",
      placement: o
    }),
        L = Fe(Object.assign(Object.assign({}, _), E)),
        T = u === he ? L : w,
        k = {
      top: y.top - T.top + g.top,
      bottom: T.bottom - y.bottom + g.bottom,
      left: y.left - T.left + g.left,
      right: T.right - y.right + g.right
    },
        O = t.modifiersData.offset;

    if (u === he && O) {
      var C = O[o];
      Object.keys(k).forEach(function (t) {
        var e = [re, oe].indexOf(t) >= 0 ? 1 : -1,
            n = [ie, oe].indexOf(t) >= 0 ? "y" : "x";
        k[t] += C[n] * e;
      });
    }

    return k;
  }

  function Je(t, e) {
    void 0 === e && (e = {});
    var n = e,
        i = n.placement,
        o = n.boundary,
        r = n.rootBoundary,
        s = n.padding,
        a = n.flipVariations,
        l = n.allowedAutoPlacements,
        c = void 0 === l ? pe : l,
        u = Ke(i),
        f = u ? a ? de : de.filter(function (t) {
      return Ke(t) === u;
    }) : le,
        h = f.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === h.length && (h = f);
    var d = h.reduce(function (e, n) {
      return e[n] = Ge(t, {
        placement: n,
        boundary: o,
        rootBoundary: r,
        padding: s
      })[ye(n)], e;
    }, {});
    return Object.keys(d).sort(function (t, e) {
      return d[t] - d[e];
    });
  }

  function Ze(t, e, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    };
  }

  function tn(t) {
    return [ie, re, oe, se].some(function (e) {
      return t[e] >= 0;
    });
  }

  function en(t, e, n) {
    void 0 === n && (n = !1);
    var i,
        o = ke(e),
        r = Ye(t),
        s = be(e),
        a = {
      scrollLeft: 0,
      scrollTop: 0
    },
        l = {
      x: 0,
      y: 0
    };
    return (s || !s && !n) && (("body" !== me(e) || Ue(o)) && (a = (i = e) !== ve(i) && be(i) ? function (t) {
      return {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
      };
    }(i) : Xe(i)), be(e) ? ((l = Ye(e)).x += e.clientLeft, l.y += e.clientTop) : o && (l.x = Be(o))), {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height
    };
  }

  function nn(t) {
    var e = new Map(),
        n = new Set(),
        i = [];

    function o(t) {
      n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!n.has(t)) {
          var i = e.get(t);
          i && o(i);
        }
      }), i.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      n.has(t.name) || o(t);
    }), i;
  }

  var on = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function rn() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function sn(t) {
    void 0 === t && (t = {});
    var e = t,
        n = e.defaultModifiers,
        i = void 0 === n ? [] : n,
        o = e.defaultOptions,
        r = void 0 === o ? on : o;
    return function (t, e, n) {
      void 0 === n && (n = r);
      var o,
          s,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, on), r),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          u = {
        state: a,
        setOptions: function setOptions(n) {
          f(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
            reference: _e(t) ? Qe(t) : t.contextElement ? Qe(t.contextElement) : [],
            popper: Qe(e)
          };

          var o,
              s,
              c = function (t) {
            var e = nn(t);
            return ge.reduce(function (t, n) {
              return t.concat(e.filter(function (t) {
                return t.phase === n;
              }));
            }, []);
          }((o = [].concat(i, a.options.modifiers), s = o.reduce(function (t, e) {
            var n = t[e.name];
            return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
              options: Object.assign(Object.assign({}, n.options), e.options),
              data: Object.assign(Object.assign({}, n.data), e.data)
            }) : e, t;
          }, {}), Object.keys(s).map(function (t) {
            return s[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                n = t.options,
                i = void 0 === n ? {} : n,
                o = t.effect;

            if ("function" == typeof o) {
              var r = o({
                state: a,
                name: e,
                instance: u,
                options: i
              }),
                  s = function s() {};

              l.push(r || s);
            }
          }), u.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                n = t.popper;

            if (rn(e, n)) {
              a.rects = {
                reference: en(e, Se(n), "fixed" === a.options.strategy),
                popper: we(n)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var i = 0; i < a.orderedModifiers.length; i++) {
                if (!0 !== a.reset) {
                  var o = a.orderedModifiers[i],
                      r = o.fn,
                      s = o.options,
                      l = void 0 === s ? {} : s,
                      f = o.name;
                  "function" == typeof r && (a = r({
                    state: a,
                    options: l,
                    name: f,
                    instance: u
                  }) || a);
                } else a.reset = !1, i = -1;
              }
            }
          }
        },
        update: (o = function o() {
          return new Promise(function (t) {
            u.forceUpdate(), t(a);
          });
        }, function () {
          return s || (s = new Promise(function (t) {
            Promise.resolve().then(function () {
              s = void 0, t(o());
            });
          })), s;
        }),
        destroy: function destroy() {
          f(), c = !0;
        }
      };
      if (!rn(t, e)) return u;

      function f() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return u.setOptions(n).then(function (t) {
        !c && n.onFirstUpdate && n.onFirstUpdate(t);
      }), u;
    };
  }

  var an = sn({
    defaultModifiers: [{
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function fn() {},
      effect: function effect(t) {
        var e = t.state,
            n = t.instance,
            i = t.options,
            o = i.scroll,
            r = void 0 === o || o,
            s = i.resize,
            a = void 0 === s || s,
            l = ve(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return r && c.forEach(function (t) {
          t.addEventListener("scroll", n.update, Pe);
        }), a && l.addEventListener("resize", n.update, Pe), function () {
          r && c.forEach(function (t) {
            t.removeEventListener("scroll", n.update, Pe);
          }), a && l.removeEventListener("resize", n.update, Pe);
        };
      },
      data: {}
    }, {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(t) {
        var e = t.state,
            n = t.name;
        e.modifiersData[n] = $e({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        });
      },
      data: {}
    }, {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = n.gpuAcceleration,
            o = void 0 === i || i,
            r = n.adaptive,
            s = void 0 === r || r,
            a = {
          placement: ye(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: o
        };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), Ie(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: s
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), Ie(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.arrow,
          position: "absolute",
          adaptive: !1
        })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-placement": e.placement
        });
      },
      data: {}
    }, {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function fn(t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function (t) {
          var n = e.styles[t] || {},
              i = e.attributes[t] || {},
              o = e.elements[t];
          be(o) && me(o) && (Object.assign(o.style, n), Object.keys(i).forEach(function (t) {
            var e = i[t];
            !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e);
          }));
        });
      },
      effect: function effect(t) {
        var e = t.state,
            n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
          Object.keys(e.elements).forEach(function (t) {
            var i = e.elements[t],
                o = e.attributes[t] || {},
                r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
            be(i) && me(i) && (Object.assign(i.style, r), Object.keys(o).forEach(function (t) {
              i.removeAttribute(t);
            }));
          });
        };
      },
      requires: ["computeStyles"]
    }, {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.offset,
            r = void 0 === o ? [0, 0] : o,
            s = pe.reduce(function (t, n) {
          return t[n] = function (t, e, n) {
            var i = ye(t),
                o = [se, ie].indexOf(i) >= 0 ? -1 : 1,
                r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
              placement: t
            })) : n,
                s = r[0],
                a = r[1];
            return s = s || 0, a = (a || 0) * o, [se, re].indexOf(i) >= 0 ? {
              x: a,
              y: s
            } : {
              x: s,
              y: a
            };
          }(n, e.rects, r), t;
        }, {}),
            a = s[e.placement],
            l = a.x,
            c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s;
      }
    }, {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name;

        if (!e.modifiersData[i]._skip) {
          for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, h = n.altBoundary, d = n.flipVariations, p = void 0 === d || d, g = n.allowedAutoPlacements, m = e.options.placement, v = ye(m), _ = l || (v === m || !p ? [Me(m)] : function (t) {
            if (ye(t) === ae) return [];
            var e = Me(t);
            return [We(t), e, We(e)];
          }(m)), b = [m].concat(_).reduce(function (t, n) {
            return t.concat(ye(n) === ae ? Je(e, {
              placement: n,
              boundary: u,
              rootBoundary: f,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: g
            }) : n);
          }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), L = !0, T = b[0], k = 0; k < b.length; k++) {
            var O = b[k],
                C = ye(O),
                S = Ke(O) === ce,
                A = [ie, oe].indexOf(C) >= 0,
                x = A ? "width" : "height",
                D = Ge(e, {
              placement: O,
              boundary: u,
              rootBoundary: f,
              altBoundary: h,
              padding: c
            }),
                j = A ? S ? re : se : S ? oe : ie;
            y[x] > w[x] && (j = Me(j));
            var N = Me(j),
                I = [];

            if (r && I.push(D[C] <= 0), a && I.push(D[j] <= 0, D[N] <= 0), I.every(function (t) {
              return t;
            })) {
              T = O, L = !1;
              break;
            }

            E.set(O, I);
          }

          if (L) for (var P = function P(t) {
            var e = b.find(function (e) {
              var n = E.get(e);
              if (n) return n.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return T = e, "break";
          }, R = p ? 3 : 1; R > 0; R--) {
            if ("break" === P(R)) break;
          }
          e.placement !== T && (e.modifiersData[i]._skip = !0, e.placement = T, e.reset = !0);
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    }, {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.mainAxis,
            r = void 0 === o || o,
            s = n.altAxis,
            a = void 0 !== s && s,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            h = n.tether,
            d = void 0 === h || h,
            p = n.tetherOffset,
            g = void 0 === p ? 0 : p,
            m = Ge(e, {
          boundary: l,
          rootBoundary: c,
          padding: f,
          altBoundary: u
        }),
            v = ye(e.placement),
            _ = Ke(e.placement),
            b = !_,
            y = Ae(v),
            w = "x" === y ? "y" : "x",
            E = e.modifiersData.popperOffsets,
            L = e.rects.reference,
            T = e.rects.popper,
            k = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
          placement: e.placement
        })) : g,
            O = {
          x: 0,
          y: 0
        };

        if (E) {
          if (r) {
            var C = "y" === y ? ie : se,
                S = "y" === y ? oe : re,
                A = "y" === y ? "height" : "width",
                x = E[y],
                D = E[y] + m[C],
                j = E[y] - m[S],
                N = d ? -T[A] / 2 : 0,
                I = _ === ce ? L[A] : T[A],
                P = _ === ce ? -T[A] : -L[A],
                R = e.elements.arrow,
                M = d && R ? we(R) : {
              width: 0,
              height: 0
            },
                H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
                W = H[C],
                Y = H[S],
                X = xe(0, L[A], M[A]),
                B = b ? L[A] / 2 - N - X - W - k : I - X - W - k,
                U = b ? -L[A] / 2 + N + X + Y + k : P + X + Y + k,
                q = e.elements.arrow && Se(e.elements.arrow),
                Q = q ? "y" === y ? q.clientTop || 0 : q.clientLeft || 0 : 0,
                F = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                V = E[y] + B - F - Q,
                z = E[y] + U - F,
                K = xe(d ? Math.min(D, V) : D, x, d ? Math.max(j, z) : j);
            E[y] = K, O[y] = K - x;
          }

          if (a) {
            var $ = "x" === y ? ie : se,
                G = "x" === y ? oe : re,
                J = E[w],
                Z = xe(J + m[$], J, J - m[G]);
            E[w] = Z, O[w] = Z - J;
          }

          e.modifiersData[i] = O;
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e,
            n = t.state,
            i = t.name,
            o = n.elements.arrow,
            r = n.modifiersData.popperOffsets,
            s = ye(n.placement),
            a = Ae(s),
            l = [se, re].indexOf(s) >= 0 ? "height" : "width";

        if (o && r) {
          var c = n.modifiersData[i + "#persistent"].padding,
              u = we(o),
              f = "y" === a ? ie : se,
              h = "y" === a ? oe : re,
              d = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
              p = r[a] - n.rects.reference[a],
              g = Se(o),
              m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
              v = d / 2 - p / 2,
              _ = c[f],
              b = m - u[l] - c[h],
              y = m / 2 - u[l] / 2 + v,
              w = xe(_, y, b),
              E = a;
          n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e);
        }
      },
      effect: function effect(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.element,
            r = void 0 === o ? "[data-popper-arrow]" : o,
            s = n.padding,
            a = void 0 === s ? 0 : s;
        null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && Ee(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {
          padding: De("number" != typeof a ? a : je(a, le))
        });
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(t) {
        var e = t.state,
            n = t.name,
            i = e.rects.reference,
            o = e.rects.popper,
            r = e.modifiersData.preventOverflow,
            s = Ge(e, {
          elementContext: "reference"
        }),
            a = Ge(e, {
          altBoundary: !0
        }),
            l = Ze(s, i),
            c = Ze(a, o, r),
            u = tn(l),
            f = tn(c);
        e.modifiersData[n] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: u,
          hasPopperEscaped: f
        }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-reference-hidden": u,
          "data-popper-escaped": f
        });
      }
    }]
  }),
      ln = "dropdown",
      cn = "coreui.dropdown",
      un = "." + cn,
      fn = "Escape",
      hn = "Space",
      dn = "ArrowUp",
      pn = "ArrowDown",
      gn = new RegExp("ArrowUp|ArrowDown|Escape"),
      mn = "hide" + un,
      vn = "hidden" + un,
      _n = "click.coreui.dropdown.data-api",
      bn = "keydown.coreui.dropdown.data-api",
      yn = "disabled",
      wn = "show",
      En = "dropdown-menu-right",
      Ln = '[data-toggle="dropdown"]',
      Tn = ".dropdown-menu",
      kn = {
    offset: [0, 0],
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      On = {
    offset: "(array|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      Cn = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._addEventListeners(), k(t, cn, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      if (!this._element.disabled && !this._element.classList.contains(yn)) {
        var e = this._menu.classList.contains(wn);

        t.clearMenus(), e || this.show();
      }
    }, n.show = function () {
      if (!(this._element.disabled || this._element.classList.contains(yn) || this._menu.classList.contains(wn))) {
        var e = t.getParentFromElement(this._element),
            n = {
          relatedTarget: this._element
        };

        if (!F.trigger(e, "show.coreui.dropdown", n).defaultPrevented) {
          if (!this._inNavbar && !this._inHeader) {
            if ("undefined" == typeof an) throw new TypeError("CoreUI's dropdowns require Popper.js (https://popper.js.org)");
            var i = this._element;
            "parent" === this._config.reference ? i = e : m(this._config.reference) && (i = this._config.reference, "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add("position-static"), this._popper = an(i, this._menu, this._getPopperConfig());
          }

          var o, r;
          if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav")) (o = []).concat.apply(o, document.body.children).forEach(function (t) {
            return F.on(t, "mouseover", null, function () {});
          });
          if ("ontouchstart" in document.documentElement && !e.closest(".c-header-nav")) (r = []).concat.apply(r, document.body.children).forEach(function (t) {
            return F.on(t, "mouseover", null, function () {});
          });
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt.toggleClass(this._menu, wn), bt.toggleClass(e, wn), F.trigger(e, "shown.coreui.dropdown", n);
        }
      }
    }, n.hide = function () {
      if (!this._element.disabled && !this._element.classList.contains(yn) && this._menu.classList.contains(wn)) {
        var e = t.getParentFromElement(this._element),
            n = {
          relatedTarget: this._element
        };
        F.trigger(e, mn, n).defaultPrevented || (this._popper && this._popper.destroy(), bt.toggleClass(this._menu, wn), bt.toggleClass(e, wn), F.trigger(e, vn, n));
      }
    }, n.dispose = function () {
      C(this._element, cn), F.off(this._element, un), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
    }, n.update = function () {
      this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._popper && this._popper.update();
    }, n._addEventListeners = function () {
      var t = this;
      F.on(this._element, "click.coreui.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), bt.getDataAttributes(this._element)), t), _(ln, t, this.constructor.DefaultType), t;
    }, n._getMenuElement = function () {
      var e = t.getParentFromElement(this._element);
      return at.findOne(Tn, e);
    }, n._getPlacement = function () {
      var t = this._element.parentNode,
          e = "bottom-start";
      return t.classList.contains("dropup") ? (e = "top-start", this._menu.classList.contains(En) && (e = "top-end")) : t.classList.contains("dropright") ? e = "right-start" : t.classList.contains("dropleft") ? e = "left-start" : this._menu.classList.contains(En) && (e = "bottom-end"), e;
    }, n._detectNavbar = function () {
      return Boolean(this._element.closest(".navbar"));
    }, n._detectHeader = function () {
      return Boolean(this._element.closest(".c-header"));
    }, n._getOffset = function () {
      var t = this;
      return "function" == typeof this._config.offset ? function (e) {
        var n = e.placement,
            i = e.reference,
            o = e.popper;
        return t._config.offset({
          placement: n,
          reference: i,
          popper: o
        });
      } : this._config.offset;
    }, n._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "flip",
          enabled: this._config.flip
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = {
        name: "applyStyles",
        enabled: !1
      }), o(o({}, t), this._config.popperConfig);
    }, t.dropdownInterface = function (e, n) {
      var i = O(e, cn);

      if (i || (i = new t(e, "object" == _typeof(n) ? n : null)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.dropdownInterface(this, e);
      });
    }, t.clearMenus = function (e) {
      if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) for (var n = at.find(Ln), i = 0, o = n.length; i < o; i++) {
        var r = t.getParentFromElement(n[i]),
            s = O(n[i], cn),
            a = {
          relatedTarget: n[i]
        };

        if (e && "click" === e.type && (a.clickEvent = e), s) {
          var l = s._menu;
          if (r.classList.contains(wn)) if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && r.contains(e.target))) if (!F.trigger(r, mn, a).defaultPrevented) {
            var c;
            if ("ontouchstart" in document.documentElement) (c = []).concat.apply(c, document.body.children).forEach(function (t) {
              return F.off(t, "mouseover", null, function () {});
            });
            n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove(wn), r.classList.remove(wn), F.trigger(r, vn, a);
          }
        }
      }
    }, t.getParentFromElement = function (t) {
      return d(t) || t.parentNode;
    }, t.dataApiKeydownHandler = function (e) {
      if (!(/input|textarea/i.test(e.target.tagName) ? e.key === hn || e.key !== fn && (e.key !== pn && e.key !== dn || e.target.closest(Tn)) : !gn.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(yn))) {
        var n = t.getParentFromElement(this),
            i = n.classList.contains(wn);
        if (e.key === fn) return (this.matches(Ln) ? this : at.prev(this, Ln)[0]).focus(), void t.clearMenus();

        if (i && e.key !== hn) {
          var o = at.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(b);

          if (o.length) {
            var r = o.indexOf(e.target);
            e.key === dn && r > 0 && r--, e.key === pn && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus();
          }
        } else t.clearMenus();
      }
    }, t.getInstance = function (t) {
      return O(t, cn);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return kn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return On;
      }
    }]), t;
  }();

  F.on(document, bn, Ln, Cn.dataApiKeydownHandler), F.on(document, bn, Tn, Cn.dataApiKeydownHandler), F.on(document, _n, Cn.clearMenus), F.on(document, "keyup.coreui.dropdown.data-api", Cn.clearMenus), F.on(document, _n, Ln, function (t) {
    t.preventDefault(), t.stopPropagation(), Cn.dropdownInterface(this, "toggle");
  }), F.on(document, _n, ".dropdown form", function (t) {
    return t.stopPropagation();
  });
  var Sn = L();

  if (Sn) {
    var An = Sn.fn[ln];
    Sn.fn[ln] = Cn.jQueryInterface, Sn.fn[ln].Constructor = Cn, Sn.fn[ln].noConflict = function () {
      return Sn.fn[ln] = An, Cn.jQueryInterface;
    };
  }

  var xn = "modal",
      Dn = "coreui.modal",
      jn = "." + Dn,
      Nn = "Escape",
      In = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      Pn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      Rn = "hidden" + jn,
      Mn = "show" + jn,
      Hn = "focusin" + jn,
      Wn = "resize" + jn,
      Yn = "click.dismiss" + jn,
      Xn = "keydown.dismiss" + jn,
      Bn = "mousedown.dismiss" + jn,
      Un = "modal-open",
      qn = "fade",
      Qn = "show",
      Fn = "modal-static",
      Vn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      zn = ".sticky-top",
      Kn = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = at.findOne(".modal-dialog", t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, k(t, Dn, this);
    }

    var n = t.prototype;
    return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        this._element.classList.contains(qn) && (this._isTransitioning = !0);
        var n = F.trigger(this._element, Mn, {
          relatedTarget: t
        });
        this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), F.on(this._element, Yn, '[data-dismiss="modal"]', function (t) {
          return e.hide(t);
        }), F.on(this._dialog, Bn, function () {
          F.one(e._element, "mouseup.dismiss.coreui.modal", function (t) {
            t.target === e._element && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var e = this;

      if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !F.trigger(this._element, "hide.coreui.modal").defaultPrevented) {
        this._isShown = !1;

        var n = this._element.classList.contains(qn);

        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), F.off(document, Hn), this._element.classList.remove(Qn), F.off(this._element, Yn), F.off(this._dialog, Bn), n) {
          var i = p(this._element);
          F.one(this._element, c, function (t) {
            return e._hideModal(t);
          }), v(this._element, i);
        } else this._hideModal();
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return F.off(t, jn);
      }), F.off(document, Hn), C(this._element, Dn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = o(o({}, In), t), _(xn, t, Pn), t;
    }, n._showElement = function (t) {
      var e = this,
          n = this._element.classList.contains(qn),
          i = at.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && E(this._element), this._element.classList.add(Qn), this._config.focus && this._enforceFocus();

      var o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, F.trigger(e._element, "shown.coreui.modal", {
          relatedTarget: t
        });
      };

      if (n) {
        var r = p(this._dialog);
        F.one(this._dialog, c, o), v(this._dialog, r);
      } else o();
    }, n._enforceFocus = function () {
      var t = this;
      F.off(document, Hn), F.on(document, Hn, function (e) {
        document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;
      this._isShown ? F.on(this._element, Xn, function (e) {
        t._config.keyboard && e.key === Nn ? (e.preventDefault(), t.hide()) : t._config.keyboard || e.key !== Nn || t._triggerBackdropTransition();
      }) : F.off(this._element, Xn);
    }, n._setResizeEvent = function () {
      var t = this;
      this._isShown ? F.on(window, Wn, function () {
        return t._adjustDialog();
      }) : F.off(window, Wn);
    }, n._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        document.body.classList.remove(Un), t._resetAdjustments(), t._resetScrollbar(), F.trigger(t._element, Rn);
      });
    }, n._removeBackdrop = function () {
      this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
    }, n._showBackdrop = function (t) {
      var e = this,
          n = this._element.classList.contains(qn) ? qn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), F.on(this._element, Yn, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && E(this._backdrop), this._backdrop.classList.add(Qn), !n) return void t();
        var i = p(this._backdrop);
        F.one(this._backdrop, c, t), v(this._backdrop, i);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove(Qn);

        var o = function o() {
          e._removeBackdrop(), t();
        };

        if (this._element.classList.contains(qn)) {
          var r = p(this._backdrop);
          F.one(this._backdrop, c, o), v(this._backdrop, r);
        } else o();
      } else t();
    }, n._triggerBackdropTransition = function () {
      var t = this;

      if ("static" === this._config.backdrop) {
        if (F.trigger(this._element, "hidePrevented.coreui.modal").defaultPrevented) return;
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Fn);
        var n = p(this._dialog);
        F.off(this._element, c), F.one(this._element, c, function () {
          t._element.classList.remove(Fn), e || (F.one(t._element, c, function () {
            t._element.style.overflowY = "";
          }), v(t._element, n));
        }), v(this._element, n), this._element.focus();
      } else this.hide();
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        at.find(Vn).forEach(function (e) {
          var n = e.style.paddingRight,
              i = window.getComputedStyle(e)["padding-right"];
          bt.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px";
        }), at.find(zn).forEach(function (e) {
          var n = e.style.marginRight,
              i = window.getComputedStyle(e)["margin-right"];
          bt.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px";
        });
        var e = document.body.style.paddingRight,
            n = window.getComputedStyle(document.body)["padding-right"];
        bt.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px";
      }

      document.body.classList.add(Un);
    }, n._resetScrollbar = function () {
      at.find(Vn).forEach(function (t) {
        var e = bt.getDataAttribute(t, "padding-right");
        "undefined" != typeof e && (bt.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e);
      }), at.find(".sticky-top").forEach(function (t) {
        var e = bt.getDataAttribute(t, "margin-right");
        "undefined" != typeof e && (bt.removeDataAttribute(t, "margin-right"), t.style.marginRight = e);
      });
      var t = bt.getDataAttribute(document.body, "padding-right");
      "undefined" == typeof t ? document.body.style.paddingRight = "" : (bt.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t);
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t.jQueryInterface = function (e, n) {
      return this.each(function () {
        var i = O(this, Dn),
            r = o(o(o({}, In), bt.getDataAttributes(this)), "object" == _typeof(e) && e ? e : {});

        if (i || (i = new t(this, r)), "string" == typeof e) {
          if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
          i[e](n);
        } else r.show && i.show(n);
      });
    }, t.getInstance = function (t) {
      return O(t, Dn);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return In;
      }
    }]), t;
  }();

  F.on(document, "click.coreui.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e = this,
        n = d(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), F.one(n, Mn, function (t) {
      t.defaultPrevented || F.one(n, Rn, function () {
        b(e) && e.focus();
      });
    });
    var i = O(n, Dn);

    if (!i) {
      var r = o(o({}, bt.getDataAttributes(n)), bt.getDataAttributes(this));
      i = new Kn(n, r);
    }

    i.show(this);
  });
  var $n = L();

  if ($n) {
    var Gn = $n.fn.modal;
    $n.fn.modal = Kn.jQueryInterface, $n.fn.modal.Constructor = Kn, $n.fn.modal.noConflict = function () {
      return $n.fn.modal = Gn, Kn.jQueryInterface;
    };
  }

  var Jn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Zn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      ti = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      ei = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function ni(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var o = new window.DOMParser().parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function a(t, n) {
      var i,
          o = s[t],
          a = o.nodeName.toLowerCase();
      if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), "continue";
      var l = (i = []).concat.apply(i, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
      l.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === Jn.indexOf(n) || Boolean(t.nodeValue.match(Zn) || t.nodeValue.match(ti));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, c) || o.removeAttribute(t.nodeName);
      });
    }, l = 0, c = s.length; l < c; l++) {
      a(l);
    }

    return o.body.innerHTML;
  }

  var ii = "tooltip",
      oi = "coreui.tooltip",
      ri = "." + oi,
      si = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      ai = ["sanitize", "whiteList", "sanitizeFn"],
      li = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|function)",
    container: "(string|element|boolean)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      ci = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      ui = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: ei,
    popperConfig: null
  },
      fi = {
    HIDE: "hide" + ri,
    HIDDEN: "hidden" + ri,
    SHOW: "show" + ri,
    SHOWN: "shown" + ri,
    INSERTED: "inserted" + ri,
    CLICK: "click" + ri,
    FOCUSIN: "focusin" + ri,
    FOCUSOUT: "focusout" + ri,
    MOUSEENTER: "mouseenter" + ri,
    MOUSELEAVE: "mouseleave" + ri
  },
      hi = "fade",
      di = "show",
      pi = "show",
      gi = "out",
      mi = "hover",
      vi = "focus",
      _i = function () {
    function t(t, e) {
      if ("undefined" == typeof an) throw new TypeError("CoreUI's tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), k(t, this.constructor.DATA_KEY, this);
    }

    var n = t.prototype;
    return n.enable = function () {
      this._isEnabled = !0;
    }, n.disable = function () {
      this._isEnabled = !1;
    }, n.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, n.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = O(t.delegateTarget, e);
        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (this.getTipElement().classList.contains(di)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, n.dispose = function () {
      clearTimeout(this._timeout), C(this.element, this.constructor.DATA_KEY), F.off(this.element, this.constructor.EVENT_KEY), F.off(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, n.show = function () {
      var t = this;
      if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");

      if (this.isWithContent() && this._isEnabled) {
        var e = F.trigger(this.element, this.constructor.Event.SHOW),
            n = y(this.element),
            i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
        if (e.defaultPrevented || !i) return;
        var o = this.getTipElement(),
            r = u(this.constructor.NAME);
        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add(hi);

        var s,
            a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            l = this._getAttachment(a),
            f = this._getContainer();

        if (k(o, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || f.appendChild(o), F.trigger(this.element, this.constructor.Event.INSERTED), this._popper = an(this.element, o, this._getPopperConfig(l)), o.classList.add(di), "ontouchstart" in document.documentElement) (s = []).concat.apply(s, document.body.children).forEach(function (t) {
          F.on(t, "mouseover", function () {});
        });

        var h = function h() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, F.trigger(t.element, t.constructor.Event.SHOWN), e === gi && t._leave(null, t);
        };

        if (this.tip.classList.contains(hi)) {
          var d = p(this.tip);
          F.one(this.tip, c, h), v(this.tip, d);
        } else h();
      }
    }, n.hide = function () {
      var t = this,
          e = this.getTipElement(),
          n = function n() {
        t._hoverState !== pi && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), F.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy();
      };

      if (!F.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
        var i;
        if (e.classList.remove(di), "ontouchstart" in document.documentElement) (i = []).concat.apply(i, document.body.children).forEach(function (t) {
          return F.off(t, "mouseover", w);
        });

        if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains(hi)) {
          var o = p(e);
          F.one(e, c, n), v(e, o);
        } else n();

        this._hoverState = "";
      }
    }, n.update = function () {
      null !== this._popper && this._popper.update();
    }, n.isWithContent = function () {
      return Boolean(this.getTitle());
    }, n.getTipElement = function () {
      if (this.tip) return this.tip;
      var t = document.createElement("div");
      return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
    }, n.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(at.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove(hi, di);
    }, n.setElementContent = function (t, e) {
      if (null !== t) return "object" == _typeof(e) && m(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = ni(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }, n.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, n._getPopperConfig = function (t) {
      var e = this;
      return o(o({}, {
        placement: t,
        modifiers: [{
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "arrow",
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this.config.boundary
          }
        }],
        onFirstUpdate: function onFirstUpdate(t) {
          t.originalPlacement !== t.placement && e._popper.update();
        }
      }), this.config.popperConfig);
    }, n._getOffset = function () {
      var t = this;
      return "function" == typeof this.config.offset ? function (e) {
        var n = e.placement,
            i = e.reference,
            o = e.popper;
        return t.config.offset({
          placement: n,
          reference: i,
          popper: o
        });
      } : this.config.offset;
    }, n._getContainer = function () {
      return !1 === this.config.container ? document.body : m(this.config.container) ? this.config.container : at.findOne(this.config.container);
    }, n._getAttachment = function (t) {
      return ci[t.toUpperCase()];
    }, n._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) F.on(t.element, t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = e === mi ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = e === mi ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          F.on(t.element, n, t.config.selector, function (e) {
            return t._enter(e);
          }), F.on(t.element, i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        t.element && t.hide();
      }, F.on(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.config.selector ? this.config = o(o({}, this.config), {}, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, n._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, n._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || O(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? vi : mi] = !0), e.getTipElement().classList.contains(di) || e._hoverState === pi ? e._hoverState = pi : (clearTimeout(e._timeout), e._hoverState = pi, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === pi && e.show();
      }, e.config.delay.show) : e.show());
    }, n._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || O(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? vi : mi] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = gi, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === gi && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, n._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, n._getConfig = function (t) {
      var e = bt.getDataAttributes(this.element);
      return Object.keys(e).forEach(function (t) {
        -1 !== ai.indexOf(t) && delete e[t];
      }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = o(o(o({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _(ii, t, this.constructor.DefaultType), t.sanitize && (t.template = ni(t.template, t.whiteList, t.sanitizeFn)), t;
    }, n._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, n._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(si);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, n._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("data-popper-placement") && (t.classList.remove(hi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, oi),
            i = "object" == _typeof(e) && e;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return O(t, oi);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return ui;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ii;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return oi;
      }
    }, {
      key: "Event",
      get: function get() {
        return fi;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ri;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return li;
      }
    }]), t;
  }(),
      bi = L();

  if (bi) {
    var yi = bi.fn.tooltip;
    bi.fn.tooltip = _i.jQueryInterface, bi.fn.tooltip.Constructor = _i, bi.fn.tooltip.noConflict = function () {
      return bi.fn.tooltip = yi, _i.jQueryInterface;
    };
  }

  var wi = "popover",
      Ei = "coreui.popover",
      Li = "." + Ei,
      Ti = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      ki = o(o({}, _i.Default), {}, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Oi = o(o({}, _i.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ci = {
    HIDE: "hide" + Li,
    HIDDEN: "hidden" + Li,
    SHOW: "show" + Li,
    SHOWN: "shown" + Li,
    INSERTED: "inserted" + Li,
    CLICK: "click" + Li,
    FOCUSIN: "focusin" + Li,
    FOCUSOUT: "focusout" + Li,
    MOUSEENTER: "mouseenter" + Li,
    MOUSELEAVE: "mouseleave" + Li
  },
      Si = function (t) {
    var n, i;

    function o() {
      return t.apply(this, arguments) || this;
    }

    i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
    var r = o.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(at.findOne(".popover-header", t), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(at.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
    }, r._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-popover-" + t);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ti);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, o.jQueryInterface = function (t) {
      return this.each(function () {
        var e = O(this, Ei),
            n = "object" == _typeof(t) ? t : null;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), k(this, Ei, e)), "string" == typeof t)) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, o.getInstance = function (t) {
      return O(t, Ei);
    }, e(o, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return ki;
      }
    }, {
      key: "NAME",
      get: function get() {
        return wi;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ei;
      }
    }, {
      key: "Event",
      get: function get() {
        return Ci;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Li;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Oi;
      }
    }]), o;
  }(_i),
      Ai = L();

  if (Ai) {
    var xi = Ai.fn.popover;
    Ai.fn.popover = Si.jQueryInterface, Ai.fn.popover.Constructor = Si, Ai.fn.popover.noConflict = function () {
      return Ai.fn.popover = xi, Si.jQueryInterface;
    };
  }

  var Di = "scrollspy",
      ji = "coreui.scrollspy",
      Ni = "." + ji,
      Ii = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Pi = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Ri = "dropdown-item",
      Mi = "active",
      Hi = ".nav-link",
      Wi = "position",
      Yi = function () {
    function t(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ".nav-link, " + this._config.target + " " + ".list-group-item, " + this._config.target + " ." + Ri, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, F.on(this._scrollElement, "scroll.coreui.scrollspy", function (t) {
        return n._process(t);
      }), this.refresh(), this._process(), k(t, ji, this);
    }

    var n = t.prototype;
    return n.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : Wi,
          n = "auto" === this._config.method ? e : this._config.method,
          i = n === Wi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), at.find(this._selector).map(function (t) {
        var e = h(t),
            o = e ? at.findOne(e) : null;

        if (o) {
          var r = o.getBoundingClientRect();
          if (r.width || r.height) return [bt[n](o).top + i, e];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      C(this._element, ji), F.off(this._scrollElement, Ni), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = o(o({}, Ii), "object" == _typeof(t) && t ? t : {})).target && m(t.target)) {
        var e = t.target.id;
        e || (e = u(Di), t.target.id = e), t.target = "#" + e;
      }

      return _(Di, t, Pi), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = at.findOne(e.join(","));

      n.classList.contains(Ri) ? (at.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Mi), n.classList.add(Mi)) : (n.classList.add(Mi), at.parents(n, ".nav, .list-group").forEach(function (t) {
        at.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
          return t.classList.add(Mi);
        }), at.prev(t, ".nav-item").forEach(function (t) {
          at.children(t, Hi).forEach(function (t) {
            return t.classList.add(Mi);
          });
        });
      })), F.trigger(this._scrollElement, "activate.coreui.scrollspy", {
        relatedTarget: t
      });
    }, n._clear = function () {
      at.find(this._selector).filter(function (t) {
        return t.classList.contains(Mi);
      }).forEach(function (t) {
        return t.classList.remove(Mi);
      });
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, ji);

        if (n || (n = new t(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return O(t, ji);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ii;
      }
    }]), t;
  }();

  F.on(window, "load.coreui.scrollspy.data-api", function () {
    at.find('[data-spy="scroll"]').forEach(function (t) {
      return new Yi(t, bt.getDataAttributes(t));
    });
  });
  var Xi = L();

  if (Xi) {
    var Bi = Xi.fn[Di];
    Xi.fn[Di] = Yi.jQueryInterface, Xi.fn[Di].Constructor = Yi, Xi.fn[Di].noConflict = function () {
      return Xi.fn[Di] = Bi, Yi.jQueryInterface;
    };
  }
  /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */


  function Ui(t) {
    return getComputedStyle(t);
  }

  function qi(t, e) {
    for (var n in e) {
      var i = e[n];
      "number" == typeof i && (i += "px"), t.style[n] = i;
    }

    return t;
  }

  function Qi(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  var Fi = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

  function Vi(t, e) {
    if (!Fi) throw new Error("No element matching method supported");
    return Fi.call(t, e);
  }

  function zi(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function Ki(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return Vi(t, e);
    });
  }

  var $i = "ps",
      Gi = "ps__rtl",
      Ji = {
    thumb: function thumb(t) {
      return "ps__thumb-" + t;
    },
    rail: function rail(t) {
      return "ps__rail-" + t;
    },
    consuming: "ps__child--consume"
  },
      Zi = {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function active(t) {
      return "ps--active-" + t;
    },
    scrolling: function scrolling(t) {
      return "ps--scrolling-" + t;
    }
  },
      to = {
    x: null,
    y: null
  };

  function eo(t, e) {
    var n = t.element.classList,
        i = Zi.scrolling(e);
    n.contains(i) ? clearTimeout(to[e]) : n.add(i);
  }

  function no(t, e) {
    to[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(Zi.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  var io = function io(t) {
    this.element = t, this.handlers = {};
  },
      oo = {
    isEmpty: {
      configurable: !0
    }
  };

  io.prototype.bind = function (t, e) {
    "undefined" == typeof this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, io.prototype.unbind = function (t, e) {
    var n = this;
    this.handlers[t] = this.handlers[t].filter(function (i) {
      return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1);
    });
  }, io.prototype.unbindAll = function () {
    for (var t in this.handlers) {
      this.unbind(t);
    }
  }, oo.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(io.prototype, oo);

  var ro = function ro() {
    this.eventElements = [];
  };

  function so(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function ao(t, e, n, i, o) {
    var r;
    if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === e) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    !function (t, e, n, i, o) {
      var r = n[0],
          s = n[1],
          a = n[2],
          l = n[3],
          c = n[4],
          u = n[5];
      void 0 === i && (i = !0);
      void 0 === o && (o = !1);
      var f = t.element;
      t.reach[l] = null, f[a] < 1 && (t.reach[l] = "start");
      f[a] > t[r] - t[s] - 1 && (t.reach[l] = "end");
      e && (f.dispatchEvent(so("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(so("ps-scroll-" + c)) : e > 0 && f.dispatchEvent(so("ps-scroll-" + u)), i && function (t, e) {
        eo(t, e), no(t, e);
      }(t, l));
      t.reach[l] && (e || o) && f.dispatchEvent(so("ps-" + l + "-reach-" + t.reach[l]));
    }(t, n, r, i, o);
  }

  function lo(t) {
    return parseInt(t, 10) || 0;
  }

  ro.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new io(t), this.eventElements.push(e)), e;
  }, ro.prototype.bind = function (t, e, n) {
    this.eventElement(t).bind(e, n);
  }, ro.prototype.unbind = function (t, e, n) {
    var i = this.eventElement(t);
    i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
  }, ro.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, ro.prototype.once = function (t, e, n) {
    var i = this.eventElement(t),
        o = function o(t) {
      i.unbind(e, o), n(t);
    };

    i.bind(e, o);
  };
  var co = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  };

  function uo(t) {
    var e = t.element,
        n = Math.floor(e.scrollTop),
        i = e.getBoundingClientRect();
    t.containerWidth = Math.ceil(i.width), t.containerHeight = Math.ceil(i.height), t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (Ki(e, Ji.rail("x")).forEach(function (t) {
      return zi(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (Ki(e, Ji.rail("y")).forEach(function (t) {
      return zi(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = fo(t, lo(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = lo((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = fo(t, lo(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = lo(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), function (t, e) {
      var n = {
        width: e.railXWidth
      },
          i = Math.floor(t.scrollTop);
      e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft;
      e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - i : n.top = e.scrollbarXTop + i;
      qi(e.scrollbarXRail, n);
      var o = {
        top: i,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? o.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : o.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? o.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : o.left = e.scrollbarYLeft + t.scrollLeft;
      qi(e.scrollbarYRail, o), qi(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }), qi(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      });
    }(e, t), t.scrollbarXActive ? e.classList.add(Zi.active("x")) : (e.classList.remove(Zi.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? e.classList.add(Zi.active("y")) : (e.classList.remove(Zi.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  }

  function fo(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function ho(t, e) {
    var n = e[0],
        i = e[1],
        o = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        u = e[8],
        f = t.element,
        h = null,
        d = null,
        p = null;

    function g(e) {
      e.touches && e.touches[0] && (e[o] = e.touches[0].pageY), f[l] = h + p * (e[o] - d), eo(t, c), uo(t), e.stopPropagation(), e.preventDefault();
    }

    function m() {
      no(t, c), t[u].classList.remove(Zi.clicking), t.event.unbind(t.ownerDocument, "mousemove", g);
    }

    function v(e, s) {
      h = f[l], s && e.touches && (e[o] = e.touches[0].pageY), d = e[o], p = (t[i] - t[n]) / (t[r] - t[a]), s ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g), t.event.once(t.ownerDocument, "mouseup", m), e.preventDefault()), t[u].classList.add(Zi.clicking), e.stopPropagation();
    }

    t.event.bind(t[s], "mousedown", function (t) {
      v(t);
    }), t.event.bind(t[s], "touchstart", function (t) {
      v(t, !0);
    });
  }

  var po = {
    "click-rail": function clickRail(t) {
      t.element, t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += n * t.containerHeight, uo(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += n * t.containerWidth, uo(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      ho(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), ho(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
    },
    keyboard: function keyboard(t) {
      var e = t.element;
      t.event.bind(t.ownerDocument, "keydown", function (n) {
        if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (Vi(e, ":hover") || Vi(t.scrollbarX, ":focus") || Vi(t.scrollbarY, ":focus"))) {
          var i,
              o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (Vi(i = o, "input,[contenteditable]") || Vi(i, "select,[contenteditable]") || Vi(i, "textarea,[contenteditable]") || Vi(i, "button,[contenteditable]")) return;
          }

          var r = 0,
              s = 0;

          switch (n.which) {
            case 37:
              r = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              s = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
              break;

            case 39:
              r = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
              break;

            case 40:
              s = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              s = n.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              s = t.containerHeight;
              break;

            case 34:
              s = -t.containerHeight;
              break;

            case 36:
              s = t.contentHeight;
              break;

            case 35:
              s = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== r || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += r, uo(t), function (n, i) {
            var o = Math.floor(e.scrollTop);

            if (0 === n) {
              if (!t.scrollbarYActive) return !1;
              if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation;
            }

            var r = e.scrollLeft;

            if (0 === i) {
              if (!t.scrollbarXActive) return !1;
              if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation;
            }

            return !0;
          }(r, s) && n.preventDefault());
        }
      });
    },
    wheel: function wheel(t) {
      var e = t.element;

      function n(n) {
        var i = function (t) {
          var e = t.deltaX,
              n = -1 * t.deltaY;
          return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e != e && n != n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n];
        }(n),
            o = i[0],
            r = i[1];

        if (!function (t, n, i) {
          if (!co.isWebKit && e.querySelector("select:focus")) return !0;
          if (!e.contains(t)) return !1;

          for (var o = t; o && o !== e;) {
            if (o.classList.contains(Ji.consuming)) return !0;
            var r = Ui(o);

            if (i && r.overflowY.match(/(scroll|auto)/)) {
              var s = o.scrollHeight - o.clientHeight;
              if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0;
            }

            if (n && r.overflowX.match(/(scroll|auto)/)) {
              var a = o.scrollWidth - o.clientWidth;
              if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0;
            }

            o = o.parentNode;
          }

          return !1;
        }(n.target, o, r)) {
          var s = !1;
          t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (r ? e.scrollTop -= r * t.settings.wheelSpeed : e.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? e.scrollLeft += o * t.settings.wheelSpeed : e.scrollLeft -= r * t.settings.wheelSpeed, s = !0) : (e.scrollTop -= r * t.settings.wheelSpeed, e.scrollLeft += o * t.settings.wheelSpeed), uo(t), (s = s || function (n, i) {
            var o = Math.floor(e.scrollTop),
                r = 0 === e.scrollTop,
                s = o + e.offsetHeight === e.scrollHeight,
                a = 0 === e.scrollLeft,
                l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
            return !(Math.abs(i) > Math.abs(n) ? r || s : a || l) || !t.settings.wheelPropagation;
          }(o, r)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault());
        }
      }

      "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", n) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", n);
    },
    touch: function touch(t) {
      if (co.supportsTouch || co.supportsIePointer) {
        var e = t.element,
            n = {},
            i = 0,
            o = {},
            r = null;
        co.supportsTouch ? (t.event.bind(e, "touchstart", c), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", f)) : co.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", c), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", c), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", f)));
      }

      function s(n, i) {
        e.scrollTop -= i, e.scrollLeft -= n, uo(t);
      }

      function a(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function l(t) {
        return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function c(t) {
        if (l(t)) {
          var e = a(t);
          n.pageX = e.pageX, n.pageY = e.pageY, i = new Date().getTime(), null !== r && clearInterval(r);
        }
      }

      function u(r) {
        if (l(r)) {
          var c = a(r),
              u = {
            pageX: c.pageX,
            pageY: c.pageY
          },
              f = u.pageX - n.pageX,
              h = u.pageY - n.pageY;
          if (function (t, n, i) {
            if (!e.contains(t)) return !1;

            for (var o = t; o && o !== e;) {
              if (o.classList.contains(Ji.consuming)) return !0;
              var r = Ui(o);

              if (i && r.overflowY.match(/(scroll|auto)/)) {
                var s = o.scrollHeight - o.clientHeight;
                if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0;
              }

              if (n && r.overflowX.match(/(scroll|auto)/)) {
                var a = o.scrollWidth - o.clientWidth;
                if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0;
              }

              o = o.parentNode;
            }

            return !1;
          }(r.target, f, h)) return;
          s(f, h), n = u;
          var d = new Date().getTime(),
              p = d - i;
          p > 0 && (o.x = f / p, o.y = h / p, i = d), function (n, i) {
            var o = Math.floor(e.scrollTop),
                r = e.scrollLeft,
                s = Math.abs(n),
                a = Math.abs(i);

            if (a > s) {
              if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return 0 === window.scrollY && i > 0 && co.isChrome;
            } else if (s > a && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !0;

            return !0;
          }(f, h) && r.preventDefault();
        }
      }

      function f() {
        t.settings.swipeEasing && (clearInterval(r), r = setInterval(function () {
          t.isInitialized ? clearInterval(r) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(r) : (s(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : clearInterval(r);
        }, 10));
      }
    }
  },
      go = function go(t, e) {
    var n = this;
    if (void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");

    for (var i in this.element = t, t.classList.add($i), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    }, e) {
      this.settings[i] = e[i];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var o,
        r,
        s = function s() {
      return t.classList.add(Zi.focus);
    },
        a = function a() {
      return t.classList.remove(Zi.focus);
    };

    this.isRtl = "rtl" === Ui(t).direction, !0 === this.isRtl && t.classList.add(Gi), this.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new ro(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Qi(Ji.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Qi(Ji.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var l = Ui(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(l.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = lo(l.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = lo(l.borderLeftWidth) + lo(l.borderRightWidth), qi(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = lo(l.marginLeft) + lo(l.marginRight), qi(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Qi(Ji.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Qi(Ji.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var c = Ui(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(c.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = lo(c.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
      var e = Ui(t);
      return lo(e.width) + lo(e.paddingLeft) + lo(e.paddingRight) + lo(e.borderLeftWidth) + lo(e.borderRightWidth);
    }(this.scrollbarY) : null, this.railBorderYWidth = lo(c.borderTopWidth) + lo(c.borderBottomWidth), qi(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = lo(c.marginTop) + lo(c.marginBottom), qi(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return po[t](n);
    }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return n.onScroll(t);
    }), uo(this);
  };

  go.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, qi(this.scrollbarXRail, {
      display: "block"
    }), qi(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = lo(Ui(this.scrollbarXRail).marginLeft) + lo(Ui(this.scrollbarXRail).marginRight), this.railYMarginHeight = lo(Ui(this.scrollbarYRail).marginTop) + lo(Ui(this.scrollbarYRail).marginBottom), qi(this.scrollbarXRail, {
      display: "none"
    }), qi(this.scrollbarYRail, {
      display: "none"
    }), uo(this), ao(this, "top", 0, !1, !0), ao(this, "left", 0, !1, !0), qi(this.scrollbarXRail, {
      display: ""
    }), qi(this.scrollbarYRail, {
      display: ""
    }));
  }, go.prototype.onScroll = function (t) {
    this.isAlive && (uo(this), ao(this, "top", this.element.scrollTop - this.lastScrollTop), ao(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
  }, go.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), zi(this.scrollbarX), zi(this.scrollbarY), zi(this.scrollbarXRail), zi(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, go.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  };

  var mo = "sidebar",
      vo = "coreui.sidebar",
      _o = {
    activeLinksExact: !0,
    breakpoints: {
      xs: "c-sidebar-show",
      sm: "c-sidebar-sm-show",
      md: "c-sidebar-md-show",
      lg: "c-sidebar-lg-show",
      xl: "c-sidebar-xl-show",
      xxl: "c-sidebar-xxl-show"
    },
    dropdownAccordion: !0
  },
      bo = {
    activeLinksExact: "boolean",
    breakpoints: "object",
    dropdownAccordion: "(string|boolean)"
  },
      yo = "c-active",
      wo = "c-sidebar-nav-dropdown",
      Eo = "c-show",
      Lo = "c-sidebar-minimized",
      To = "c-sidebar-unfoldable",
      ko = "click.coreui.sidebar.data-api",
      Oo = ".c-sidebar-nav-dropdown-toggle",
      Co = ".c-sidebar-nav-dropdown",
      So = ".c-sidebar-nav-link",
      Ao = ".c-sidebar-nav",
      xo = ".c-sidebar",
      Do = function () {
    function t(t, e) {
      if ("undefined" == typeof go) throw new TypeError("CoreUI's sidebar require Perfect Scrollbar");
      this._element = t, this._config = this._getConfig(e), this._open = this._isVisible(), this._mobile = this._isMobile(), this._overlaid = this._isOverlaid(), this._minimize = this._isMinimized(), this._unfoldable = this._isUnfoldable(), this._setActiveLink(), this._ps = null, this._backdrop = null, this._psInit(), this._addEventListeners(), k(t, vo, this);
    }

    var n = t.prototype;
    return n.open = function (t) {
      var e = this;
      F.trigger(this._element, "open.coreui.sidebar"), this._isMobile() ? (this._addClassName(this._firstBreakpointClassName()), this._showBackdrop(), F.one(this._element, c, function () {
        e._addClickOutListener();
      })) : t ? (this._addClassName(this._getBreakpointClassName(t)), this._isOverlaid() && F.one(this._element, c, function () {
        e._addClickOutListener();
      })) : (this._addClassName(this._firstBreakpointClassName()), this._isOverlaid() && F.one(this._element, c, function () {
        e._addClickOutListener();
      }));
      var n = p(this._element);
      F.one(this._element, c, function () {
        !0 === e._isVisible() && (e._open = !0, F.trigger(e._element, "opened.coreui.sidebar"));
      }), v(this._element, n);
    }, n.close = function (t) {
      var e = this;
      F.trigger(this._element, "close.coreui.sidebar"), this._isMobile() ? (this._element.classList.remove(this._firstBreakpointClassName()), this._removeBackdrop(), this._removeClickOutListener()) : t ? (this._element.classList.remove(this._getBreakpointClassName(t)), this._isOverlaid() && this._removeClickOutListener()) : (this._element.classList.remove(this._firstBreakpointClassName()), this._isOverlaid() && this._removeClickOutListener());
      var n = p(this._element);
      F.one(this._element, c, function () {
        !1 === e._isVisible() && (e._open = !1, F.trigger(e._element, "closed.coreui.sidebar"));
      }), v(this._element, n);
    }, n.toggle = function (t) {
      this._open ? this.close(t) : this.open(t);
    }, n.minimize = function () {
      this._isMobile() || (this._addClassName(Lo), this._minimize = !0, this._psDestroy());
    }, n.unfoldable = function () {
      this._isMobile() || (this._addClassName(To), this._unfoldable = !0);
    }, n.reset = function () {
      this._element.classList.contains(Lo) && (this._element.classList.remove(Lo), this._minimize = !1, F.one(this._element, c, this._psInit())), this._element.classList.contains(To) && (this._element.classList.remove(To), this._unfoldable = !1);
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), bt.getDataAttributes(this._element)), t), _(mo, t, this.constructor.DefaultType), t;
    }, n._isMobile = function () {
      return Boolean(window.getComputedStyle(this._element, null).getPropertyValue("--is-mobile"));
    }, n._isIOS = function () {
      var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
      if (Boolean(navigator.platform)) for (; t.length;) {
        if (navigator.platform === t.pop()) return !0;
      }
      return !1;
    }, n._isMinimized = function () {
      return this._element.classList.contains(Lo);
    }, n._isOverlaid = function () {
      return this._element.classList.contains("c-sidebar-overlaid");
    }, n._isUnfoldable = function () {
      return this._element.classList.contains(To);
    }, n._isVisible = function () {
      var t = this._element.getBoundingClientRect();

      return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
    }, n._addClassName = function (t) {
      this._element.classList.add(t);
    }, n._firstBreakpointClassName = function () {
      return Object.keys(_o.breakpoints).map(function (t) {
        return _o.breakpoints[t];
      })[0];
    }, n._getBreakpointClassName = function (t) {
      return _o.breakpoints[t];
    }, n._removeBackdrop = function () {
      this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null);
    }, n._showBackdrop = function () {
      this._backdrop || (this._backdrop = document.createElement("div"), this._backdrop.className = "c-sidebar-backdrop", this._backdrop.classList.add("c-fade"), document.body.appendChild(this._backdrop), E(this._backdrop), this._backdrop.classList.add(Eo));
    }, n._clickOutListener = function (t, e) {
      null === t.target.closest(xo) && (t.preventDefault(), t.stopPropagation(), e.close());
    }, n._addClickOutListener = function () {
      var t = this;
      F.on(document, ko, function (e) {
        t._clickOutListener(e, t);
      });
    }, n._removeClickOutListener = function () {
      F.off(document, ko);
    }, n._getAllSiblings = function (t, e) {
      var n = [];
      t = t.parentNode.firstChild;

      do {
        3 !== t.nodeType && 8 !== t.nodeType && (e && !e(t) || n.push(t));
      } while (t = t.nextSibling);

      return n;
    }, n._toggleDropdown = function (t, e) {
      var n = t.target;
      n.classList.contains("c-sidebar-nav-dropdown-toggle") || (n = n.closest(Oo));
      var i = n.closest(Ao).dataset;
      "undefined" != typeof i.dropdownAccordion && (_o.dropdownAccordion = JSON.parse(i.dropdownAccordion)), !0 === _o.dropdownAccordion && this._getAllSiblings(n.parentElement, function (t) {
        return Boolean(t.classList.contains(wo));
      }).forEach(function (t) {
        t !== n.parentNode && t.classList.contains(wo) && t.classList.remove(Eo);
      }), n.parentNode.classList.toggle(Eo), e._psUpdate();
    }, n._psInit = function () {
      this._element.querySelector(Ao) && !this._isIOS() && (this._ps = new go(this._element.querySelector(Ao), {
        suppressScrollX: !0,
        wheelPropagation: !1
      }));
    }, n._psUpdate = function () {
      this._ps && this._ps.update();
    }, n._psDestroy = function () {
      this._ps && (this._ps.destroy(), this._ps = null);
    }, n._getParents = function (t, e) {
      for (var n = []; t && t !== document; t = t.parentNode) {
        e ? t.matches(e) && n.push(t) : n.push(t);
      }

      return n;
    }, n._setActiveLink = function () {
      var t = this;
      Array.from(this._element.querySelectorAll(So)).forEach(function (e) {
        var n = String(window.location);
        (/\?.*=/.test(n) || /\?./.test(n)) && (n = n.split("?")[0]), /#./.test(n) && (n = n.split("#")[0]);
        var i = e.closest(Ao).dataset;
        "undefined" != typeof i.activeLinksExact && (_o.activeLinksExact = JSON.parse(i.activeLinksExact)), _o.activeLinksExact && e.href === n && (e.classList.add(yo), Array.from(t._getParents(e, Co)).forEach(function (t) {
          t.classList.add(Eo);
        })), !_o.activeLinksExact && e.href.startsWith(n) && (e.classList.add(yo), Array.from(t._getParents(e, Co)).forEach(function (t) {
          t.classList.add(Eo);
        }));
      });
    }, n._addEventListeners = function () {
      var t = this;
      this._mobile && this._open && this._addClickOutListener(), this._overlaid && this._open && this._addClickOutListener(), F.on(this._element, "classtoggle", function (e) {
        if (e.detail.className === Lo && (t._element.classList.contains(Lo) ? t.minimize() : t.reset()), e.detail.className === To && (t._element.classList.contains(To) ? t.unfoldable() : t.reset()), "undefined" != typeof Object.keys(_o.breakpoints).find(function (t) {
          return _o.breakpoints[t] === e.detail.className;
        })) {
          var n = e.detail.className,
              i = Object.keys(_o.breakpoints).find(function (t) {
            return _o.breakpoints[t] === n;
          });
          e.detail.add ? t.open(i) : t.close(i);
        }
      }), F.on(this._element, ko, Oo, function (e) {
        e.preventDefault(), t._toggleDropdown(e, t);
      }), F.on(this._element, ko, So, function () {
        t._isMobile() && t.close();
      });
    }, t._sidebarInterface = function (e, n) {
      var i = O(e, vo);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t._sidebarInterface(this, e);
      });
    }, t.getInstance = function (t) {
      return O(t, vo);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return _o;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return bo;
      }
    }]), t;
  }();

  F.on(window, "load.coreui.sidebar.data-api", function () {
    Array.from(document.querySelectorAll(xo)).forEach(function (t) {
      Do._sidebarInterface(t);
    });
  });
  var jo = L();

  if (jo) {
    var No = jo.fn.sidebar;
    jo.fn.sidebar = Do.jQueryInterface, jo.fn.sidebar.Constructor = Do, jo.fn.sidebar.noConflict = function () {
      return jo.fn.sidebar = No, Do.jQueryInterface;
    };
  }

  var Io = "coreui.tab",
      Po = "active",
      Ro = "fade",
      Mo = "show",
      Ho = ".active",
      Wo = ":scope > li > .active",
      Yo = function () {
    function t(t) {
      this._element = t, k(this._element, Io, this);
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Po) || this._element.classList.contains("disabled"))) {
        var e,
            n = d(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var o = "UL" === i.nodeName || "OL" === i.nodeName ? Wo : Ho;
          e = (e = at.find(o, i))[e.length - 1];
        }

        var r = null;

        if (e && (r = F.trigger(e, "hide.coreui.tab", {
          relatedTarget: this._element
        })), !(F.trigger(this._element, "show.coreui.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== r && r.defaultPrevented)) {
          this._activate(this._element, i);

          var s = function s() {
            F.trigger(e, "hidden.coreui.tab", {
              relatedTarget: t._element
            }), F.trigger(t._element, "shown.coreui.tab", {
              relatedTarget: e
            });
          };

          n ? this._activate(n, n.parentNode, s) : s();
        }
      }
    }, n.dispose = function () {
      C(this._element, Io), this._element = null;
    }, n._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? at.children(e, Ho) : at.find(Wo, e))[0],
          r = n && o && o.classList.contains(Ro),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = p(o);
        o.classList.remove(Mo), F.one(o, c, s), v(o, a);
      } else s();
    }, n._transitionComplete = function (t, e, n) {
      if (e) {
        e.classList.remove(Po);
        var i = at.findOne(":scope > .dropdown-menu .active", e.parentNode);
        i && i.classList.remove(Po), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      (t.classList.add(Po), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), E(t), t.classList.contains(Ro) && t.classList.add(Mo), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && at.find(".dropdown-toggle").forEach(function (t) {
        return t.classList.add(Po);
      }), t.setAttribute("aria-expanded", !0));
      n && n();
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, Io) || new t(this);

        if ("string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return O(t, Io);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  F.on(document, "click.coreui.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), (O(this, Io) || new Yo(this)).show();
  });
  var Xo = L();

  if (Xo) {
    var Bo = Xo.fn.tab;
    Xo.fn.tab = Yo.jQueryInterface, Xo.fn.tab.Constructor = Yo, Xo.fn.tab.noConflict = function () {
      return Xo.fn.tab = Bo, Yo.jQueryInterface;
    };
  }

  var Uo,
      qo,
      Qo,
      Fo,
      Vo,
      zo = "toast",
      Ko = "coreui.toast",
      $o = "." + Ko,
      Go = "click.dismiss" + $o,
      Jo = "hide",
      Zo = "show",
      tr = "showing",
      er = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      nr = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  },
      ir = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), k(t, Ko, this);
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;

      if (!F.trigger(this._element, "show.coreui.toast").defaultPrevented) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var e = function e() {
          t._element.classList.remove(tr), t._element.classList.add(Zo), F.trigger(t._element, "shown.coreui.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove(Jo), E(this._element), this._element.classList.add(tr), this._config.animation) {
          var n = p(this._element);
          F.one(this._element, c, e), v(this._element, n);
        } else e();
      }
    }, n.hide = function () {
      var t = this;

      if (this._element.classList.contains(Zo) && !F.trigger(this._element, "hide.coreui.toast").defaultPrevented) {
        var e = function e() {
          t._element.classList.add(Jo), F.trigger(t._element, "hidden.coreui.toast");
        };

        if (this._element.classList.remove(Zo), this._config.animation) {
          var n = p(this._element);
          F.one(this._element, c, e), v(this._element, n);
        } else e();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains(Zo) && this._element.classList.remove(Zo), F.off(this._element, Go), C(this._element, Ko), this._element = null, this._config = null;
    }, n._getConfig = function (t) {
      return t = o(o(o({}, nr), bt.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), _(zo, t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;
      F.on(this._element, Go, '[data-dismiss="toast"]', function () {
        return t.hide();
      });
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = O(this, Ko);

        if (n || (n = new t(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e](this);
        }
      });
    }, t.getInstance = function (t) {
      return O(t, Ko);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return er;
      }
    }, {
      key: "Default",
      get: function get() {
        return nr;
      }
    }]), t;
  }(),
      or = L();

  if (or) {
    var rr = or.fn.toast;
    or.fn.toast = ir.jQueryInterface, or.fn.toast.Constructor = ir, or.fn.toast.noConflict = function () {
      return or.fn.toast = rr, ir.jQueryInterface;
    };
  }

  return Array.from || (Array.from = (Uo = Object.prototype.toString, qo = function qo(t) {
    return "function" == typeof t || "[object Function]" === Uo.call(t);
  }, Qo = Math.pow(2, 53) - 1, Fo = function Fo(t) {
    var e = function (t) {
      var e = Number(t);
      return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e;
    }(t);

    return Math.min(Math.max(e, 0), Qo);
  }, function (t) {
    var e = this,
        n = Object(t);
    if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
    var i,
        o = arguments.length > 1 ? arguments[1] : void 0;

    if ("undefined" != typeof o) {
      if (!qo(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
      arguments.length > 2 && (i = arguments[2]);
    }

    for (var r, s = Fo(n.length), a = qo(e) ? Object(new e(s)) : new Array(s), l = 0; l < s;) {
      r = n[l], a[l] = o ? "undefined" == typeof i ? o(r, l) : o.call(i, r, l) : r, l += 1;
    }

    return a.length = s, a;
  })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var e = this;

    do {
      if (e.matches(t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }), function () {
    if ("function" == typeof window.CustomEvent) return !1;

    window.CustomEvent = function (t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    };
  }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
    for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;) {
      ;
    }

    return n > -1;
  }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function value(t) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var e = Object(this),
          n = e.length >>> 0;
      if ("function" != typeof t) throw new TypeError("predicate must be a function");

      for (var i = arguments[1], o = 0; o < n;) {
        var r = e[o];
        if (t.call(i, r, o, e)) return r;
        o++;
      }
    }
  }), "function" != typeof Object.assign && (Object.assign = function (t, e) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");

    for (var n = Object(t), i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      if (null != o) for (var r in o) {
        Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
      }
    }

    return n;
  }), Vo = function Vo() {
    function t(t) {
      var e = this.constructor;
      return this.then(function (n) {
        return e.resolve(t()).then(function () {
          return n;
        });
      }, function (n) {
        return e.resolve(t()).then(function () {
          return e.reject(n);
        });
      });
    }

    var e = setTimeout;

    function n(t) {
      return Boolean(t && "undefined" != typeof t.length);
    }

    function i() {}

    function o(t) {
      if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this);
    }

    function r(t, e) {
      for (; 3 === t._state;) {
        t = t._value;
      }

      0 !== t._state ? (t._handled = !0, o._immediateFn(function () {
        var n = 1 === t._state ? e.onFulfilled : e.onRejected;

        if (null !== n) {
          var i;

          try {
            i = n(t._value);
          } catch (t) {
            return void a(e.promise, t);
          }

          s(e.promise, i);
        } else (1 === t._state ? s : a)(e.promise, t._value);
      })) : t._deferreds.push(e);
    }

    function s(t, e) {
      try {
        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

        if (e && ("object" == _typeof(e) || "function" == typeof e)) {
          var n = e.then;
          if (e instanceof o) return t._state = 3, t._value = e, void l(t);
          if ("function" == typeof n) return void u((i = n, r = e, function () {
            i.apply(r, arguments);
          }), t);
        }

        t._state = 1, t._value = e, l(t);
      } catch (e) {
        a(t, e);
      }

      var i, r;
    }

    function a(t, e) {
      t._state = 2, t._value = e, l(t);
    }

    function l(t) {
      2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
        t._handled || o._unhandledRejectionFn(t._value);
      });

      for (var e = 0, n = t._deferreds.length; e < n; e++) {
        r(t, t._deferreds[e]);
      }

      t._deferreds = null;
    }

    function c(t, e, n) {
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
    }

    function u(t, e) {
      var n = !1;

      try {
        t(function (t) {
          n || (n = !0, s(e, t));
        }, function (t) {
          n || (n = !0, a(e, t));
        });
      } catch (t) {
        if (n) return;
        n = !0, a(e, t);
      }
    }

    o.prototype["catch"] = function (t) {
      return this.then(null, t);
    }, o.prototype.then = function (t, e) {
      var n = new this.constructor(i);
      return r(this, new c(t, e, n)), n;
    }, o.prototype["finally"] = t, o.all = function (t) {
      return new o(function (e, i) {
        if (!n(t)) return i(new TypeError("Promise.all accepts an array"));
        var o = Array.prototype.slice.call(t);
        if (0 === o.length) return e([]);
        var r = o.length;

        function s(t, n) {
          try {
            if (n && ("object" == _typeof(n) || "function" == typeof n)) {
              var a = n.then;
              if ("function" == typeof a) return void a.call(n, function (e) {
                s(t, e);
              }, i);
            }

            o[t] = n, 0 == --r && e(o);
          } catch (t) {
            i(t);
          }
        }

        for (var a = 0; a < o.length; a++) {
          s(a, o[a]);
        }
      });
    }, o.resolve = function (t) {
      return t && "object" == _typeof(t) && t.constructor === o ? t : new o(function (e) {
        e(t);
      });
    }, o.reject = function (t) {
      return new o(function (e, n) {
        n(t);
      });
    }, o.race = function (t) {
      return new o(function (e, i) {
        if (!n(t)) return i(new TypeError("Promise.race accepts an array"));

        for (var r = 0, s = t.length; r < s; r++) {
          o.resolve(t[r]).then(e, i);
        }
      });
    }, o._immediateFn = "function" == typeof setImmediate && function (t) {
      setImmediate(t);
    } || function (t) {
      e(t, 0);
    }, o._unhandledRejectionFn = function (t) {
      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
    };

    var f = function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof __webpack_require__.g) return __webpack_require__.g;
      throw new Error("unable to locate global object");
    }();

    "Promise" in f ? f.Promise.prototype["finally"] || (f.Promise.prototype["finally"] = t) : f.Promise = o;
  }, "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? Vo() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Vo),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0, function () {
    function t(t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }

    "function" == typeof window.CustomEvent || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1 || (t.prototype = window.Event.prototype, window.CustomEvent = t);
  }(), {
    AsyncLoad: tt,
    Alert: ot,
    Button: pt,
    Carousel: Dt,
    ClassToggler: Xt,
    Collapse: te,
    Dropdown: Cn,
    Modal: Kn,
    Popover: Si,
    Scrollspy: Yi,
    Sidebar: Do,
    Tab: Yo,
    Toast: ir,
    Tooltip: _i
  };
});

/***/ }),

/***/ "./resources/coreUI/js/svgxuse.min.js":
/*!********************************************!*\
  !*** ./resources/coreUI/js/svgxuse.min.js ***!
  \********************************************/
/***/ (() => {

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var b = a;else b = document.createElement("a"), b.href = a;
        return b.protocol.replace(/:/g, "") + b.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          b,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (b = 0; b < f.length; b += 1) {
        try {
          var h = f[b].getBoundingClientRect();
        } catch (w) {
          h = !1;
        }

        var g = (a = f[b].getAttribute("href") || f[b].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[b].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var c = g[0];
        g = g[1];
        var r = h && 0 === h.left && 0 === h.right && 0 === h.top && 0 === h.bottom;
        h && 0 === h.width && 0 === h.height && !r ? (c.length || !g || document.getElementById(g) || (c = ""), f[b].hasAttribute("href") && f[b].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), c.length && (a = e[c], !0 !== a && setTimeout(l({
          useEl: f[b],
          base: c,
          hash: g
        }), 0), void 0 === a && (g = u(c), void 0 !== g && (a = new g(), e[c] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", c), a.send(), q += 1)))) : r ? c.length && e[c] && setTimeout(l({
          useEl: f[b],
          base: c,
          hash: g
        }), 0) : void 0 === e[c] ? e[c] = !0 : e[c].onload && (e[c].abort(), delete e[c].onload, e[c] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./resources/coreUI/js/coreui.bundle.min.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/coreUI/js/svgxuse.min.js");
/******/ 	
/******/ })()
;